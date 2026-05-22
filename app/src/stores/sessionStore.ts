import { create } from 'zustand'
import type { Question } from '../types'

interface SessionState {
  queue: Question[]
  currentIndex: number
  correct: number
  newItemsCount: number
  phase: 'idle' | 'question' | 'feedback' | 'done'

  startSession: (queue: Question[], newCount: number) => void
  answerCorrect: () => void
  answerWrong: () => void
  nextQuestion: () => void
  endSession: () => void
}

export const useSessionStore = create<SessionState>((set, get) => ({
  queue: [],
  currentIndex: 0,
  correct: 0,
  newItemsCount: 0,
  phase: 'idle',

  startSession: (queue, newCount) =>
    set({ queue, currentIndex: 0, correct: 0, newItemsCount: newCount, phase: 'question' }),

  answerCorrect: () => set((s) => ({ correct: s.correct + 1, phase: 'feedback' })),
  answerWrong: () => set({ phase: 'feedback' }),

  nextQuestion: () => {
    const { currentIndex, queue } = get()
    const next = currentIndex + 1
    if (next >= queue.length) {
      set({ phase: 'done' })
    } else {
      set({ currentIndex: next, phase: 'question' })
    }
  },

  endSession: () => set({ phase: 'idle', queue: [], currentIndex: 0, correct: 0 }),
}))
