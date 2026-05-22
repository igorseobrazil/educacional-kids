import type { Question } from '../types'

interface Props {
  question: Question
  isCorrect: boolean
  givenAnswer: string
  onNext: () => void
}

export default function FeedbackCard({ question, isCorrect, givenAnswer, onNext }: Props) {
  const isElaboracao = question.tipo === 'elaboracao'

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`rounded-2xl p-5 ${
          isElaboracao
            ? 'bg-indigo-50 border-2 border-indigo-200'
            : isCorrect
            ? 'bg-green-50 border-2 border-green-300'
            : 'bg-red-50 border-2 border-red-300'
        }`}
      >
        <p className="text-xl font-bold mb-1">
          {isElaboracao ? '✍️ Boa reflexão!' : isCorrect ? '✅ Isso aí!' : '❌ Quase!'}
        </p>
        <p className="text-sm text-gray-500">
          {isElaboracao
            ? 'Questões de elaboração desenvolvem sua memória de forma profunda.'
            : isCorrect
            ? 'Você se esforçou e acertou — isso é o que importa.'
            : `Sua resposta: "${givenAnswer}"`}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-5">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Explicação</p>
        {!isCorrect && !isElaboracao && (
          <p className="text-sm font-medium text-gray-700 mb-2">
            Resposta correta: <span className="text-indigo-600">{question.resposta_correta}</span>
          </p>
        )}
        <p className="text-gray-600 text-sm leading-relaxed">{question.explicacao}</p>
      </div>

      <button
        onClick={onNext}
        className="bg-indigo-600 text-white rounded-xl py-3 font-bold text-lg hover:bg-indigo-700 transition-colors"
      >
        Próxima →
      </button>
    </div>
  )
}
