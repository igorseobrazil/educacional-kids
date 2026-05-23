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
  doc, setDoc, getDoc, getDocs,
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

export async function updateChild(childId: string, fields: Partial<Child>) {
  await updateDoc(doc(firestore, 'children', childId), fields as Record<string, unknown>)
  const existing = await db.children.get(childId)
  if (existing) await db.children.put({ ...existing, ...fields })
}

export async function joinChildByCode(code: string, uid: string): Promise<Child | null> {
  const q = query(
    collection(firestore, 'children'),
    where('invite_code', '==', code.toUpperCase()),
  )
  const snap = await getDocs(q)
  if (snap.empty) return null

  const childDoc = snap.docs[0]
  const child = childDoc.data() as Child

  if (child.guardians.includes(uid)) return child // já é responsável

  const updated: Child = { ...child, guardians: [...child.guardians, uid] }
  await updateDoc(doc(firestore, 'children', child.id), { guardians: arrayUnion(uid) })
  await db.children.put(updated)
  return updated
}

export async function loadMemoryStatesFromFirestore(childId: string) {
  const snap = await getDocs(
    collection(firestore, 'children', childId, 'memory_states'),
  )
  for (const d of snap.docs) {
    await db.memoryStates.put(d.data() as Parameters<typeof db.memoryStates.put>[0])
  }
}
