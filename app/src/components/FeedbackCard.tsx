import { motion } from 'framer-motion'
import type { Question } from '../types'

interface Props {
  question: Question
  isCorrect: boolean
  givenAnswer: string
  onNext: () => void
}

const ELABORACAO_FEEDBACKS = [
  { emoji: '✍️', titulo: 'Boa reflexão!', subtitulo: 'Explicar com suas palavras é uma das formas mais poderosas de aprender.' },
  { emoji: '🧠', titulo: 'Sigma do estudo!', subtitulo: 'Toda vez que você tenta explicar, a memória fica mais forte. Isso é ciência.' },
  { emoji: '💡', titulo: 'W resposta!', subtitulo: 'Criar sua própria resposta é muito mais eficaz do que só reler a matéria.' },
  { emoji: '📝', titulo: 'Não é NPC não!', subtitulo: 'Você pensou de verdade — isso é exatamente o que treina a memória a longo prazo.' },
  { emoji: '🌱', titulo: 'Sua árvore cresceu!', subtitulo: 'Responder com suas palavras, mesmo com dúvida, é o que fixa de verdade.' },
]

const ACERTO_MSGS = [
  '✅ Isso aí!',
  '✅ SIU! Acertou!',
  '✅ W resposta!',
  '✅ Arrasou, diva!',
  '✅ Perfeito!',
  '✅ Isso mesmo!',
]

export default function FeedbackCard({ question, isCorrect, onNext }: Props) {
  const isElaboracao = question.tipo === 'elaboracao'
  const isCaderno = question.tipo === 'caderno'

  const idx = question.id.charCodeAt(question.id.length - 1)
  const elaboracaoFeedback = ELABORACAO_FEEDBACKS[idx % ELABORACAO_FEEDBACKS.length]
  const acertoMsg = ACERTO_MSGS[idx % ACERTO_MSGS.length]

  if (isCaderno) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4"
      >
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 text-center">
          <p className="text-2xl font-bold text-amber-700 mb-1">📓 Anotado!</p>
          <p className="text-sm text-amber-600">{question.explicacao}</p>
        </div>
        <motion.button whileTap={{ scale: 0.97 }} onClick={onNext}
          className="bg-indigo-600 text-white rounded-xl py-3 font-bold text-lg hover:bg-indigo-700 transition-colors">
          Próxima →
        </motion.button>
      </motion.div>
    )
  }

  // Shake horizontal para respostas erradas
  const shakeVariants = {
    shake: { x: [0, -7, 7, -5, 5, -3, 3, 0], transition: { duration: 0.38 } },
    still: { x: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="flex flex-col gap-4"
    >
      <motion.div
        variants={shakeVariants}
        animate={!isCorrect && !isElaboracao ? 'shake' : 'still'}
        className={`rounded-2xl p-5 ${
          isElaboracao
            ? 'bg-indigo-50 border-2 border-indigo-200'
            : isCorrect
            ? 'bg-green-50 border-2 border-green-300'
            : 'bg-orange-50 border-2 border-orange-200'
        }`}
      >
        <motion.p
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 320, damping: 18 }}
          className="text-xl font-bold mb-1"
        >
          {isElaboracao
            ? `${elaboracaoFeedback.emoji} ${elaboracaoFeedback.titulo}`
            : isCorrect
            ? acertoMsg
            : '💪 Não dessa vez — mas errar faz parte!'}
        </motion.p>
        <p className="text-sm text-gray-500">
          {isElaboracao
            ? elaboracaoFeedback.subtitulo
            : isCorrect
            ? 'Você se esforçou e acertou — isso é o que importa.'
            : 'Veja a resposta certa abaixo. Na próxima revisão você vai lembrar!'}
        </p>
      </motion.div>

      <div className="bg-white rounded-2xl shadow p-5">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Explicação</p>
        {!isCorrect && !isElaboracao && (
          <p className="text-sm font-medium text-gray-700 mb-2">
            Resposta certa: <span className="text-indigo-600">{question.resposta_correta}</span>
          </p>
        )}
        <p className="text-gray-600 text-sm leading-relaxed">{question.explicacao}</p>
      </div>

      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={onNext}
        className="bg-indigo-600 text-white rounded-xl py-3 font-bold text-lg hover:bg-indigo-700 transition-colors"
      >
        Próxima →
      </motion.button>
    </motion.div>
  )
}
