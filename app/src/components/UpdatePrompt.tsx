import { useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

export default function UpdatePrompt() {
  const [dismissed, setDismissed] = useState(false)
  const { needRefresh: [needRefresh], updateServiceWorker } = useRegisterSW({
    onRegisteredSW(_swUrl, r) {
      setInterval(async () => { if (r) await r.update() }, 60_000)
    },
  })

  if (!needRefresh || dismissed) return null

  async function handleUpdate() {
    await updateServiceWorker(true)
    window.location.reload()
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-indigo-600 text-white px-4 py-2 flex items-center justify-between gap-2 text-sm shadow">
      <span className="font-medium">Nova versão disponível</span>
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={handleUpdate}
          className="bg-white text-indigo-700 font-bold rounded-lg px-3 py-1 text-xs hover:bg-indigo-50 transition-colors"
        >
          Atualizar
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="text-indigo-200 hover:text-white text-lg leading-none"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
