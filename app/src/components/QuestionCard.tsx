import { useState } from 'react'
import type { Question } from '../types'

interface Props {
  question: Question
  onAnswer: (answer: string) => void
}

export default function QuestionCard({ question, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null)
  const [textAnswer, setTextAnswer] = useState('')

  function handleSubmit() {
    const answer =
      question.tipo === 'multipla_escolha' || question.tipo === 'verdadeiro_falso'
        ? selected ?? ''
        : textAnswer
    if (!answer.trim()) return
    onAnswer(answer)
  }

  const options =
    question.tipo === 'multipla_escolha'
      ? shuffle([question.resposta_correta, ...(question.distratores ?? [])])
      : question.tipo === 'verdadeiro_falso'
      ? ['Verdadeiro', 'Falso']
      : []

  const isMulti = question.tipo === 'multipla_escolha' || question.tipo === 'verdadeiro_falso'
  const isText = ['lacuna', 'resposta_curta', 'elaboracao', 'ordenacao'].includes(question.tipo)
  const canSubmit = isMulti ? !!selected : textAnswer.trim().length > 0

  return (
    <div className="flex flex-col gap-6">
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
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={`text-left px-4 py-3 rounded-xl border-2 font-medium transition-colors ${
                selected === opt
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-300'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {isText && (
        <textarea
          value={textAnswer}
          onChange={(e) => setTextAnswer(e.target.value)}
          placeholder={
            question.tipo === 'elaboracao'
              ? 'Escreva sua resposta aqui...'
              : 'Digite sua resposta...'
          }
          rows={question.tipo === 'elaboracao' ? 4 : 2}
          className="border-2 border-gray-200 rounded-xl p-3 text-gray-700 focus:outline-none focus:border-indigo-400 resize-none"
        />
      )}

      {question.dica && (
        <details className="text-sm text-gray-400">
          <summary className="cursor-pointer hover:text-indigo-500">Ver dica</summary>
          <p className="mt-2 text-gray-500">{question.dica}</p>
        </details>
      )}

      <button
        onClick={handleSubmit}
        disabled={!canSubmit}
        className="bg-indigo-600 text-white rounded-xl py-3 font-bold text-lg disabled:opacity-40 hover:bg-indigo-700 transition-colors"
      >
        Responder
      </button>
    </div>
  )
}

function labelTipo(tipo: Question['tipo']): string {
  const labels: Record<Question['tipo'], string> = {
    multipla_escolha: 'Múltipla escolha',
    lacuna: 'Complete a lacuna',
    verdadeiro_falso: 'Verdadeiro ou falso',
    ordenacao: 'Ordenar e classificar',
    resposta_curta: 'Resposta curta',
    elaboracao: 'Explique com suas palavras',
  }
  return labels[tipo]
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}
