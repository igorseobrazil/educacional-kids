import Dexie, { type Table } from 'dexie'
import type { MemoryState, SessionLog, Child } from '../types'

export class AppDB extends Dexie {
  memoryStates!: Table<MemoryState>
  sessionLogs!: Table<SessionLog>
  children!: Table<Child>
  syncQueue!: Table<{ id?: number; table: string; payload: unknown; created_at: string }>

  constructor() {
    super('estudoApp')
    this.version(1).stores({
      memoryStates: '++id, [question_id+child_id], child_id, due, state',
      sessionLogs:  '++id, child_id, date',
      children:     'id',
      syncQueue:    '++id, table, created_at',
    })
  }
}

export const db = new AppDB()
