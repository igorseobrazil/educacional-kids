import { create } from 'zustand'
import type { User } from 'firebase/auth'

interface AuthState {
  user: User | null
  authLoading: boolean
  parentUnlocked: boolean   // true enquanto a sessão estiver aberta
  setUser: (user: User | null) => void
  setAuthLoading: (loading: boolean) => void
  setParentUnlocked: (v: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  authLoading: true,
  parentUnlocked: false,
  setUser: (user) => set({ user, parentUnlocked: false }), // lock ao trocar de usuário
  setAuthLoading: (authLoading) => set({ authLoading }),
  setParentUnlocked: (parentUnlocked) => set({ parentUnlocked }),
}))
