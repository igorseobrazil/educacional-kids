import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  type User,
} from 'firebase/auth'
import {
  doc, setDoc, getDoc, getDocs, deleteDoc,
  collection, query, where, updateDoc, arrayUnion,
} from 'firebase/firestore'
import { auth, firestore } from './firebase'
import { db } from '../db/schema'
import type { Child } from '../types'

// ── Auth ────────────────────────────────────────────────────────────────────

export async function signUp(email: string, password: string) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  await setDoc(doc(firestore, 'users', user.uid), { email, created_at: new Date().toISOString() })
  return user
}

export async function signIn(email: string, password: string) {
  const { user } = await signInWithEmailAndPassword(auth, email, password)
  return user
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider()
  const { user } = await signInWithPopup(auth, provider)
  await setDoc(
    doc(firestore, 'users', user.uid),
    { email: user.email, created_at: new Date().toISOString() },
    { merge: true },
  )
  return user
}

export async function signOut() {
  await firebaseSignOut(auth)
}

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback)
}

// ── PIN ─────────────────────────────────────────────────────────────────────

export async function savePin(uid: string, pin: string) {
  await setDoc(doc(firestore, 'users', uid), { pin }, { merge: true })
}

export async function getPin(uid: string): Promise<string | null> {
  const snap = await getDoc(doc(firestore, 'users', uid))
  return snap.exists() ? (snap.data()?.pin ?? null) : null
}

// ── Filhos ───────────────────────────────────────────────────────────────────

function generateInviteCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

export async function createChild(nome: string, uid: string): Promise<Child> {
  const child: Child = {
    id: crypto.randomUUID(),
    nome,
    ano_escolar: 5,
    guardians: [uid],
    invite_code: generateInviteCode(),
    created_at: new Date().toISOString(),
  }
  await db.children.put(child)
  await setDoc(doc(firestore, 'children', child.id), child)
  // Cria lookup de convite (permite que outros responsáveis encontrem sem ser guardian)
  await setDoc(doc(firestore, 'invite_codes', child.invite_code), { child_id: child.id })
  return child
}

export async function loadChildren(uid: string): Promise<Child[]> {
  const q = query(
    collection(firestore, 'children'),
    where('guardians', 'array-contains', uid),
  )
  const snap = await getDocs(q)
  const children: Child[] = snap.docs.map((d) => d.data() as Child)
  for (const child of children) {
    await db.children.put(child)
  }
  return children
}

export async function deleteChild(childId: string) {
  // Apaga subcoleções no Firestore
  const statesSnap = await getDocs(collection(firestore, 'children', childId, 'memory_states'))
  for (const d of statesSnap.docs) await deleteDoc(d.ref)

  const logsSnap = await getDocs(collection(firestore, 'children', childId, 'session_logs'))
  for (const d of logsSnap.docs) await deleteDoc(d.ref)

  await deleteDoc(doc(firestore, 'children', childId))

  // Apaga do Dexie
  await db.children.delete(childId)
  await db.memoryStates.where('child_id').equals(childId).delete()
  await db.sessionLogs.where('child_id').equals(childId).delete()
}

export async function updateChild(childId: string, fields: Partial<Child>) {
  await updateDoc(doc(firestore, 'children', childId), fields as Record<string, unknown>)
  const existing = await db.children.get(childId)
  if (existing) await db.children.put({ ...existing, ...fields })
}

export async function joinChildByCode(code: string, uid: string): Promise<Child | null> {
  // 1. Busca o child_id pelo código (qualquer usuário autenticado pode ler)
  const lookupSnap = await getDoc(doc(firestore, 'invite_codes', code.toUpperCase()))
  if (!lookupSnap.exists()) return null

  const childId = lookupSnap.data().child_id as string

  // 2. Adiciona o uid como guardian (regra permite mesmo sem ser guardian)
  await updateDoc(doc(firestore, 'children', childId), { guardians: arrayUnion(uid) })

  // 3. Agora pode ler o documento completo
  const childSnap = await getDoc(doc(firestore, 'children', childId))
  if (!childSnap.exists()) return null

  const child = childSnap.data() as Child
  await db.children.put(child)
  return child
}

// ── Migração ─────────────────────────────────────────────────────────────────
// Lê filhos do Dexie que ainda não têm guardians (formato antigo),
// completa os campos e sobe tudo para o novo caminho no Firestore.
export async function migrateLocalDataIfNeeded(uid: string): Promise<boolean> {
  const localChildren = await db.children.toArray()
  const needsMigration = localChildren.filter((c) => !c.guardians || c.guardians.length === 0)

  if (needsMigration.length === 0) return false

  for (const child of needsMigration) {
    const updated = {
      ...child,
      guardians: [uid],
      invite_code: child.invite_code ?? Math.random().toString(36).substring(2, 8).toUpperCase(),
      created_at: child.created_at ?? new Date().toISOString(),
    }

    // Atualiza Dexie
    await db.children.put(updated)

    // Sobe filho para novo caminho no Firestore
    await setDoc(doc(firestore, 'children', child.id), updated)

    // Cria lookup de convite
    await setDoc(doc(firestore, 'invite_codes', updated.invite_code), { child_id: child.id })

    // Sobe memory_states
    const states = await db.memoryStates.where('child_id').equals(child.id).toArray()
    for (const state of states) {
      await setDoc(
        doc(firestore, 'children', child.id, 'memory_states', state.question_id),
        { ...state, synced_at: new Date().toISOString() },
      )
    }

    // Sobe session_logs
    const logs = await db.sessionLogs.where('child_id').equals(child.id).toArray()
    for (const log of logs) {
      const logId = log.id != null ? String(log.id) : crypto.randomUUID()
      await setDoc(
        doc(firestore, 'children', child.id, 'session_logs', logId),
        { ...log, synced_at: new Date().toISOString() },
      )
    }
  }

  return true
}

export async function loadMemoryStatesFromFirestore(childId: string) {
  const snap = await getDocs(
    collection(firestore, 'children', childId, 'memory_states'),
  )
  for (const d of snap.docs) {
    await db.memoryStates.put(d.data() as Parameters<typeof db.memoryStates.put>[0])
  }
}
