import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Child, MemoryState, LeafBalance } from '../types'

interface AppState {
  activeChild: Child | null
  children: Child[]
  hasSeenOnboarding: boolean
  lastOpenDate: string        // para mostrar DailyPrep uma vez por dia
  leafBalance: LeafBalance | null
  memoryStates: Record<string, MemoryState>
  setActiveChild: (child: Child | null) => void
  setChildren: (children: Child[]) => void
  setHasSeenOnboarding: (v: boolean) => void
  setLastOpenDate: (date: string) => void
  setLeafBalance: (balance: LeafBalance | null) => void
  addChild: (child: Child) => void
  removeChild: (childId: string) => void
  clearMemoryStates: () => void
  updateChildInStore: (childId: string, fields: Partial<Child>) => void
  setMemoryState: (state: MemoryState) => void
  setMemoryStates: (states: MemoryState[]) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      activeChild: null,
      children: [],
      hasSeenOnboarding: false,
      lastOpenDate: '',
      leafBalance: null,
      memoryStates: {},

      setActiveChild: (activeChild) => set({ activeChild, memoryStates: {}, leafBalance: null }),
      setChildren: (children) => set({ children }),
      setHasSeenOnboarding: (hasSeenOnboarding) => set({ hasSeenOnboarding }),
      setLastOpenDate: (lastOpenDate) => set({ lastOpenDate }),
      setLeafBalance: (leafBalance) => set({ leafBalance }),
      addChild: (child) => set((s) => ({ children: [...s.children, child] })),
      removeChild: (childId) =>
        set((s) => ({
          children: s.children.filter((c) => c.id !== childId),
          activeChild: s.activeChild?.id === childId ? (s.children.find((c) => c.id !== childId) ?? null) : s.activeChild,
        })),
      clearMemoryStates: () => set({ memoryStates: {} }),

      updateChildInStore: (childId, fields) =>
        set((s) => ({
          children: s.children.map((c) => c.id === childId ? { ...c, ...fields } : c),
          activeChild: s.activeChild?.id === childId ? { ...s.activeChild, ...fields } : s.activeChild,
        })),

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
