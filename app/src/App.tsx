import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './stores/authStore'
import { useAppStore } from './stores/appStore'
import { onAuthChange, loadChildren, loadMemoryStatesFromFirestore, migrateLocalDataIfNeeded } from './lib/authHelpers'
import { flushSyncQueue } from './lib/sync'
import Home from './pages/Home'
import Session from './pages/Session'
import Setup from './pages/Setup'
import Login from './pages/Login'
import ParentPanel from './pages/ParentPanel'
import UpdatePrompt from './components/UpdatePrompt'
import PinGate from './components/PinGate'

export default function App() {
  const { user, authLoading, setUser, setAuthLoading } = useAuthStore()
  const { activeChild, setActiveChild, setChildren } = useAppStore()

  useEffect(() => {
    const unsub = onAuthChange(async (firebaseUser) => {
      setUser(firebaseUser)
      setAuthLoading(false)

      if (firebaseUser) {
        // Migra dados antigos (sem guardians) para o novo formato se necessário
        await migrateLocalDataIfNeeded(firebaseUser.uid)

        const children = await loadChildren(firebaseUser.uid)
        setChildren(children)

        if (children.length > 0 && !activeChild) {
          setActiveChild(children[0])
        }

        const child = activeChild ?? children[0]
        if (child) {
          await loadMemoryStatesFromFirestore(child.id)
        }

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
          element={
            !user ? <Navigate to="/login" replace /> :
            <PinGate><ParentPanel /></PinGate>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
