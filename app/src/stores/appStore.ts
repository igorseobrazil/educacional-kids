import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Child, MemoryState } from '../types'

interface AppState {
  activeChild: Child | null
  memoryStates: Record<string, MemoryState> // key: question_id
  setActiveChild: (child: Child) => void
  setMemoryState: (state: MemoryState) => void
  setMemoryStates: (states: MemoryState[]) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      activeChild: null,
      memoryStates: {},

      setActiveChild: (child) => set({ activeChild: child }),

      setMemoryState: (state) =>
        set((prev) => ({
          memoryStates: { ...prev.memoryStates, [state.question_id]: state },
        })),

      setMemoryStates: (states) =>
        set({
          memoryStates: Object.fromEntries(states.map((s) => [s.question_id, s])),
        }),
    }),
    { name: 'estudo-app' },
  ),
)
