import { doc, setDoc, collection, onSnapshot } from 'firebase/firestore'
import { auth, firestore } from './firebase'
import { db } from '../db/schema'
import type { MemoryState } from '../types'

// Estrutura no Firestore:
// users/{uid}/children/{childId}/memory_states/{questionId}

function memoryStateRef(childId: string, questionId: string) {
  const uid = auth.currentUser?.uid
  if (!uid) throw new Error('not-authenticated')
  return doc(firestore, 'users', uid, 'children', childId, 'memory_states', questionId)
}

export async function syncMemoryState(state: MemoryState) {
  const now = new Date().toISOString()
  const record = { ...state, synced_at: now }

  // Sempre grava local primeiro
  await db.memoryStates.put(record)

  if (!auth.currentUser || !navigator.onLine) {
    await db.syncQueue.add({ table: 'memory_states', payload: record, created_at: now })
    return
  }

  try {
    await setDoc(memoryStateRef(state.child_id, state.question_id), record, { merge: true })
  } catch {
    await db.syncQueue.add({ table: 'memory_states', payload: record, created_at: now })
  }
}

export async function flushSyncQueue() {
  if (!auth.currentUser || !navigator.onLine) return

  const pending = await db.syncQueue.orderBy('created_at').toArray()
  if (pending.length === 0) return

  for (const item of pending) {
    try {
      const payload = item.payload as MemoryState
      await setDoc(
        memoryStateRef(payload.child_id, payload.question_id),
        payload,
        { merge: true },
      )
      if (item.id != null) await db.syncQueue.delete(item.id)
    } catch {
      // mantém na fila para próxima tentativa
    }
  }
}

export function startRealtimeSync(
  childId: string,
  onUpdate: (state: MemoryState) => void,
) {
  const uid = auth.currentUser?.uid
  if (!uid) return () => {}

  const col = collection(firestore, 'users', uid, 'children', childId, 'memory_states')

  // onSnapshot retorna a função de unsubscribe
  return onSnapshot(col, (snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      if (change.type === 'added' || change.type === 'modified') {
        const updated = change.doc.data() as MemoryState
        await db.memoryStates.put(updated)
        onUpdate(updated)
      }
    })
  })
}
