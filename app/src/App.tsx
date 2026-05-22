import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './stores/authStore'
import { useAppStore } from './stores/appStore'
import { onAuthChange, loadChildrenFromFirestore, loadMemoryStatesFromFirestore } from './lib/authHelpers'
import { flushSyncQueue } from './lib/sync'
import Home from './pages/Home'
import Session from './pages/Session'
import Setup from './pages/Setup'
import Login from './pages/Login'
import ParentPanel from './pages/ParentPanel'
import UpdatePrompt from './components/UpdatePrompt'

export default function App() {
  const { user, authLoading, setUser, setAuthLoading } = useAuthStore()
  const { activeChild, setActiveChild } = useAppStore()

  useEffect(() => {
    const unsub = onAuthChange(async (firebaseUser) => {
      setUser(firebaseUser)
      setAuthLoading(false)

      if (firebaseUser) {
        // Carrega filhos do Firestore e sincroniza com Dexie
        const children = await loadChildrenFromFirestore(firebaseUser.uid)
        if (children.length > 0 && !activeChild) {
          setActiveChild(children[0])
        }

        // Carrega estados de memória se há criança ativa
        const child = activeChild ?? children[0]
        if (child) {
          await loadMemoryStatesFromFirestore(firebaseUser.uid, child.id)
        }

        // Envia itens pendentes de sync
        await flushSyncQueue()
      }
    })
    return unsub
  }, [])

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-50">
        <span className="text-3xl animate-pulse">🌳</span>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <UpdatePrompt />
      <Routes>
        <Route
          path="/"
          element={
            !user ? <Navigate to="/login" replace /> :
            !activeChild ? <Navigate to="/setup" replace /> :
            <Home />
          }
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/setup"
          element={
            !user ? <Navigate to="/login" replace /> :
            activeChild ? <Navigate to="/" replace /> :
            <Setup />
          }
        />
        <Route
          path="/session"
          element={
            !user ? <Navigate to="/login" replace /> :
            !activeChild ? <Navigate to="/setup" replace /> :
            <Session />
          }
        />
        <Route
          path="/parents"
          element={!user ? <Navigate to="/login" replace /> : <ParentPanel />}
        />
      </Routes>
    </BrowserRouter>
  )
}
