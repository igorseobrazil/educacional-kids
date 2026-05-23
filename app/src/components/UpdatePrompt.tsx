import { useRegisterSW } from 'virtual:pwa-register/react'

export default function UpdatePrompt() {
  const { needRefresh: [needRefresh], updateServiceWorker } = useRegisterSW({
    onRegisteredSW(_swUrl, r) {
      // Verifica atualizações a cada 60 segundos
      setInterval(async () => {
        if (r) await r.update()
      }, 60_000)
    },
  })

  if (!needRefresh) return null

  async function handleUpdate() {
    await updateServiceWorker(true)
    window.location.reload()
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto">
      <div className="bg-indigo-700 text-white rounded-2xl shadow-lg px-4 py-3 flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Nova versão disponível!</p>
        <button
          onClick={handleUpdate}
          className="bg-white text-indigo-700 text-sm font-bold rounded-xl px-4 py-1.5 shrink-0 hover:bg-indigo-50 transition-colors"
        >
          Atualizar
        </button>
      </div>
    </div>
  )
}
