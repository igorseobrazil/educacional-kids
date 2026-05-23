import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSessionStore } from '../stores/sessionStore'
import { firePerfect, fireCorrect } from '../lib/confetti'

interface Props {
  onClose: () => void
  isFirstSession?: boolean
  leavesEarned?: number
  leavesBreakdown?: string[]
}

const MESSAGES = [
  'Seu cérebro está trabalhando — e isso é ótimo!',
  'A revisão futura vai fazer a diferença.',
  'Cada sessão é um tijolo no aprendizado.',
  'Você se esforçou — isso é o que conta.',
  'Descansar também faz parte — o cérebro fixa enquanto você dorme.',
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

export default function SessionEnd({ onClose, isFirstSession, leavesEarned = 0, leavesBreakdown = [] }: Props) {
  const { queue, correct } = useSessionStore()
  const total = queue.length
  const pct   = total > 0 ? Math.round((correct / total) * 100) : 0
  const msg   = MESSAGES[Math.floor(Math.random() * MESSAGES.length)]

  useEffect(() => {
    // Confete só em momentos especiais: perfeito ou quase perfeito (≥ 80%)
    if (pct >= 100) {
      firePerfect()
    } else if (pct >= 80) {
      fireCorrect()
    }
  }, [])

  if (isFirstSession) {
    return (
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="min-h-screen bg-gradient-to-b from-indigo-600 to-indigo-800 flex flex-col items-center justify-center p-6 gap-6 text-white"
      >
        <motion.span variants={fadeUp} className="text-7xl">🌱</motion.span>
        <motion.h1 variants={fadeUp} className="text-2xl font-bold text-center">
          Primeira lição concluída!
        </motion.h1>
        <motion.div variants={fadeUp} className="bg-white/15 rounded-2xl p-6 w-full max-w-sm text-center border border-white/20">
          <p className="text-4xl font-bold mb-1">{correct}/{total}</p>
          <p className="text-indigo-200 text-sm">respostas certas</p>
        </motion.div>
        <motion.div variants={fadeUp} className="bg-white/10 rounded-2xl p-5 w-full max-w-sm text-center border border-white/20">
          <p className="text-indigo-100 text-sm leading-relaxed">
            🌳 Sua árvore do conhecimento começou a crescer. Cada dia que você voltar, ela vai ficar maior — e o que você aprendeu hoje vai ficando cada vez mais fixado.
          </p>
        </motion.div>
        <motion.p variants={fadeUp} className="text-indigo-200 text-sm font-medium">
          ✔ Acabou por hoje — ótimo começo!
        </motion.p>
        <motion.button
          variants={fadeUp}
          whileTap={{ scale: 0.97 }}
          onClick={onClose}
          className="bg-white text-indigo-700 rounded-xl px-8 py-3 font-bold text-lg hover:bg-indigo-50 transition-colors"
        >
          Ver minha árvore →
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="min-h-screen bg-indigo-50 flex flex-col items-center justify-center p-6 gap-6"
    >
      <motion.span variants={fadeUp} className="text-6xl">
        {pct >= 80 ? '🏆' : pct >= 50 ? '🎉' : '💪'}
      </motion.span>
      <motion.h1 variants={fadeUp} className="text-2xl font-bold text-indigo-700 text-center">
        Sessão concluída!
      </motion.h1>
      <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow p-6 w-full max-w-sm text-center">
        <p className="text-4xl font-bold text-indigo-600 mb-1">{correct}/{total}</p>
        <p className="text-gray-400 text-sm">respostas certas ({pct}%)</p>
        {pct >= 80 && (
          <p className="text-green-500 text-xs font-semibold mt-2">
            {pct === 100 ? '🌟 Sessão perfeita!' : '⭐ Excelente desempenho!'}
          </p>
        )}
      </motion.div>
      {leavesEarned > 0 && (
        <motion.div variants={fadeUp} className="bg-green-50 border border-green-200 rounded-2xl px-5 py-3 text-center w-full max-w-sm">
          <p className="text-green-700 font-bold text-lg">+{leavesEarned} 🍃</p>
          <p className="text-green-500 text-xs mb-2">folhas ganhas nessa sessão</p>
          {leavesBreakdown.length > 0 && (
            <div className="flex flex-col gap-0.5 text-xs text-green-600 border-t border-green-200 pt-2 mt-2">
              {leavesBreakdown.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          )}
          <p className="text-xs text-green-500 mt-2">
            🍃 Você pode trocar folhas por tempo de celular ou guardar para mesada
          </p>
        </motion.div>
      )}
      <motion.p variants={fadeUp} className="text-gray-500 text-center text-sm max-w-xs">{msg}</motion.p>
      <motion.p variants={fadeUp} className="text-indigo-400 text-sm font-medium">
        ✔ Acabou por hoje — ótimo trabalho!
      </motion.p>
      <motion.button
        variants={fadeUp}
        whileTap={{ scale: 0.97 }}
        onClick={onClose}
        className="bg-indigo-600 text-white rounded-xl px-8 py-3 font-bold text-lg hover:bg-indigo-700 transition-colors"
      >
        Voltar ao início
      </motion.button>
    </motion.div>
  )
}
