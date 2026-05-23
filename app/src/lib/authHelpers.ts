import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  type User,
} from 'firebase/auth'
import { doc, setDoc, getDoc, getDocs, collection } from 'firebase/firestore'
import { auth, firestore } from './firebase'
import { db } from '../db/schema'
import type { Child } from '../types'

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

// Salva criança localmente e no Firestore
export async function saveChild(child: Child, uid: string) {
  await db.children.put(child)
  await setDoc(
    doc(firestore, 'users', uid, 'children', child.id),
    { ...child, profile_id: uid, created_at: new Date().toISOString() },
  )
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

// Busca crianças do usuário no Firestore e sincroniza localmente
export async function loadChildrenFromFirestore(uid: string): Promise<Child[]> {
  const snap = await getDocs(collection(firestore, 'users', uid, 'children'))
  const children: Child[] = snap.docs.map((d) => d.data() as Child)
  for (const child of children) {
    await db.children.put(child)
  }
  return children
}

// Busca estados de memória do Firestore e sincroniza com Dexie
export async function loadMemoryStatesFromFirestore(uid: string, childId: string) {
  const snap = await getDocs(
    collection(firestore, 'users', uid, 'children', childId, 'memory_states'),
  )
  for (const d of snap.docs) {
    await db.memoryStates.put(d.data() as Parameters<typeof db.memoryStates.put>[0])
  }
}
