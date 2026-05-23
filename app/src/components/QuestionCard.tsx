import { useState, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Question } from '../types'

interface Props {
  question: Question
  onAnswer: (answer: string) => void
}

export default function QuestionCard({ question, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null)
  const [textAnswer, setTextAnswer] = useState('')
  const [dicaAberta, setDicaAberta] = useState(false)
  const dicaRef = useRef<HTMLDivElement>(null)

  if (question.tipo === 'caderno') {
    return <CadernoCard question={question} onConfirm={() => onAnswer('anotei')} />
  }

  function handleSubmit() {
    const answer =
      question.tipo === 'multipla_escolha' || question.tipo === 'verdadeiro_falso'
        ? selected ?? ''
        : textAnswer
    if (!answer.trim()) return
    onAnswer(answer)
  }

  const options = useMemo(() =>
    question.tipo === 'multipla_escolha'
      ? shuffle([question.resposta_correta, ...(question.distratores ?? [])])
      : question.tipo === 'verdadeiro_falso'
      ? ['Verdadeiro', 'Falso']
      : [],
  [question.id])

  const isMulti = question.tipo === 'multipla_escolha' || question.tipo === 'verdadeiro_falso'
  const isText = ['lacuna', 'resposta_curta', 'elaboracao'].includes(question.tipo)
  const canSubmit = isMulti ? !!selected : textAnswer.trim().length > 0

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="flex flex-col gap-6"
    >
      {question.referencia_cultural && (
        <div className="bg-indigo-100 text-indigo-700 rounded-xl px-3 py-2 text-xs font-medium">
          🎮 Contexto: {question.referencia_cultural}
        </div>
      )}

      <div className="bg-white rounded-2xl shadow p-5">
        <p className="text-gray-400 text-xs mb-2 uppercase tracking-wide">
          {labelTipo(question.tipo)}
        </p>
        <p className="text-gray-800 text-lg leading-relaxed font-medium whitespace-pre-line">
          {question.enunciado}
        </p>
      </div>

      {isMulti && (
        <div className="flex flex-col gap-3">
          {options.map((opt) => (
            <motion.button
              key={opt}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(opt)}
              className={`text-left px-4 py-3 rounded-xl border-2 font-medium transition-colors ${
                selected === opt
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-300'
              }`}
            >
              {opt}
            </motion.button>
          ))}
        </div>
      )}

      {isText && (
        <textarea
          value={textAnswer}
          onChange={(e) => setTextAnswer(e.target.value)}
          placeholder={question.tipo === 'elaboracao' ? 'Escreva sua resposta aqui...' : 'Digite sua resposta...'}
          rows={question.tipo === 'elaboracao' ? 4 : 2}
          className="border-2 border-gray-200 rounded-xl p-3 text-gray-700 focus:outline-none focus:border-indigo-400 resize-none"
        />
      )}

      {question.dica && (
        <div>
          <button
            onClick={() => setDicaAberta((v) => !v)}
            className="flex items-center gap-1.5 text-amber-500 text-sm font-medium hover:text-amber-600 transition-colors"
          >
            <span>💡</span>
            <span>{dicaAberta ? 'Esconder dica' : 'Ver dica'}</span>
          </button>
          <AnimatePresence>
            {dicaAberta && (
              <motion.div
                ref={dicaRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800 leading-relaxed overflow-hidden"
              >
                {question.dica}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Pulse sutil quando o botão fica habilitado */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        animate={canSubmit ? { scale: [1, 1.02, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={handleSubmit}
        disabled={!canSubmit}
        className="bg-indigo-600 text-white rounded-xl py-3 font-bold text-lg disabled:opacity-40 hover:bg-indigo-700 transition-colors"
      >
        Responder
      </motion.button>
    </motion.div>
  )
}

function CadernoCard({ question, onConfirm }: { question: Question; onConfirm: () => void }) {
  const hoje = new Date()
  const dataFormatada = hoje.toLocaleDateString('pt-BR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
  const dataCapitalizada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1)

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="flex flex-col gap-5"
    >
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">📓</span>
          <p className="font-bold text-amber-800 text-lg">Hora de anotar no caderno!</p>
        </div>
        <div className="bg-white rounded-xl border border-amber-200 p-4 mb-4">
          <p className="text-amber-600 text-sm font-medium border-b border-amber-100 pb-2 mb-3">
            {dataCapitalizada}
          </p>
          <div className="space-y-3">
            {question.enunciado.split('\n').map((linha, i) => (
              <p key={i} className="text-gray-700 text-sm leading-relaxed border-b border-blue-100 pb-2">
                {linha}
              </p>
            ))}
          </div>
        </div>
        <p className="text-amber-700 text-xs">✏️ Escreva exatamente assim no seu caderno — com a data e o conteúdo.</p>
      </div>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={onConfirm}
        className="bg-amber-500 text-white rounded-xl py-3 font-bold text-lg hover:bg-amber-600 transition-colors"
      >
        Anotei! ✓
      </motion.button>
    </motion.div>
  )
}

function labelTipo(tipo: Question['tipo']): string {
  const labels: Record<Question['tipo'], string> = {
    multipla_escolha: 'Múltipla escolha',
    lacuna: 'Complete a lacuna',
    verdadeiro_falso: 'Verdadeiro ou falso',
    resposta_curta: 'Resposta curta',
    elaboracao: 'Explique com suas palavras',
    caderno: 'Anote no caderno',
  }
  return labels[tipo]
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}
