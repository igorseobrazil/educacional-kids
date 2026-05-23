import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'

// Limpa service worker fantasma de versões PWA antigas e recarrega se necessário
if ('serviceWorker' in navigator) {
  let needsReload = false
  navigator.serviceWorker.getRegistrations().then(regs => {
    for (const reg of regs) {
      if (reg.active) needsReload = true
      reg.unregister()
    }
    if (needsReload) {
      caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))).then(() => location.reload())
    }
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
