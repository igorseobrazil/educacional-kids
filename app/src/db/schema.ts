import Dexie, { type Table } from 'dexie'
import type { MemoryState, SessionLog, Child, LeafBalance, LeafTransaction } from '../types'

export class AppDB extends Dexie {
  memoryStates!: Table<MemoryState>
  sessionLogs!: Table<SessionLog>
  children!: Table<Child>
  leafBalances!: Table<LeafBalance>
  leafTransactions!: Table<LeafTransaction>
  syncQueue!: Table<{ id?: number; table: string; payload: unknown; created_at: string }>

  constructor() {
    super('estudoApp')
    this.version(1).stores({
      memoryStates: '++id, [question_id+child_id], child_id, due, state',
      sessionLogs:  '++id, child_id, date',
      children:     'id',
      syncQueue:    '++id, table, created_at',
    })
    this.version(2).stores({
      memoryStates: '++id, [question_id+child_id], child_id, due, state',
      sessionLogs:  '++id, child_id, date',
      children:     'id, invite_code',
      syncQueue:    '++id, table, created_at',
    })
    this.version(3).stores({
      memoryStates: '++id, [question_id+child_id], child_id, due, state',
      sessionLogs:  '++id, child_id, date',
      children:     'id, invite_code',
      syncQueue:    '++id, table, created_at',
    })
    // v4: sistema de folhas
    this.version(4).stores({
      memoryStates:     '++id, [question_id+child_id], child_id, due, state',
      sessionLogs:      '++id, child_id, date',
      children:         'id, invite_code',
      leafBalances:     '++id, child_id',
      leafTransactions: '++id, child_id, date',
      syncQueue:        '++id, table, created_at',
    })
  }
}

export const db = new AppDB()
