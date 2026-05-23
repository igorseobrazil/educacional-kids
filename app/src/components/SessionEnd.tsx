import { useSessionStore } from '../stores/sessionStore'

interface Props {
  onClose: () => void
  isFirstSession?: boolean
}

const MESSAGES = [
  'Seu cérebro está trabalhando — e isso é ótimo!',
  'A revisão futura vai fazer a diferença.',
  'Cada sessão é um tijolo no aprendizado.',
  'Você se esforçou — isso é o que conta.',
  'Descansar também faz parte — o cérebro fixa enquanto você dorme.',
]

export default function SessionEnd({ onClose, isFirstSession }: Props) {
  const { queue, correct } = useSessionStore()
  const total = queue.length
  const pct   = total > 0 ? Math.round((correct / total) * 100) : 0
  const msg   = MESSAGES[Math.floor(Math.random() * MESSAGES.length)]

  if (isFirstSession) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-indigo-800 flex flex-col items-center justify-center p-6 gap-6 text-white">
        <span className="text-7xl">🌱</span>
        <h1 className="text-2xl font-bold text-center">Primeira lição concluída!</h1>
        <div className="bg-white/15 rounded-2xl p-6 w-full max-w-sm text-center border border-white/20">
          <p className="text-4xl font-bold mb-1">{correct}/{total}</p>
          <p className="text-indigo-200 text-sm">respostas certas</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-5 w-full max-w-sm text-center border border-white/20">
          <p className="text-indigo-100 text-sm leading-relaxed">
            🌳 Sua árvore do conhecimento começou a crescer. Cada dia que você voltar, ela vai ficar maior — e o que você aprendeu hoje vai ficar cada vez mais fixado na memória.
          </p>
        </div>
        <p className="text-indigo-200 text-sm font-medium">✔ Acabou por hoje — ótimo começo!</p>
        <button
          onClick={onClose}
          className="bg-white text-indigo-700 rounded-xl px-8 py-3 font-bold text-lg hover:bg-indigo-50 transition-colors"
        >
          Ver minha árvore →
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-indigo-50 flex flex-col items-center justify-center p-6 gap-6">
      <span className="text-6xl">🎉</span>
      <h1 className="text-2xl font-bold text-indigo-700 text-center">Sessão concluída!</h1>
      <div className="bg-white rounded-2xl shadow p-6 w-full max-w-sm text-center">
        <p className="text-4xl font-bold text-indigo-600 mb-1">{correct}/{total}</p>
        <p className="text-gray-400 text-sm">respostas certas ({pct}%)</p>
      </div>
      <p className="text-gray-500 text-center text-sm max-w-xs">{msg}</p>
      <p className="text-indigo-400 text-sm font-medium">✔ Acabou por hoje — ótimo trabalho!</p>
      <button
        onClick={onClose}
        className="bg-indigo-600 text-white rounded-xl px-8 py-3 font-bold text-lg hover:bg-indigo-700 transition-colors"
      >
        Voltar ao início
      </button>
    </div>
  )
}
