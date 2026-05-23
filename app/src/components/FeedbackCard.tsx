import type { Question } from '../types'

interface Props {
  question: Question
  isCorrect: boolean
  givenAnswer: string
  onNext: () => void
}

const ELABORACAO_FEEDBACKS = [
  { emoji: '✍️', titulo: 'Boa reflexão!', subtitulo: 'Explicar com suas palavras é uma das formas mais poderosas de aprender.' },
  { emoji: '🧠', titulo: 'Seu cérebro agradece!', subtitulo: 'Toda vez que você tenta explicar algo, a memória fica mais forte.' },
  { emoji: '💡', titulo: 'Isso é elaboração!', subtitulo: 'Conectar o conteúdo às suas próprias ideias faz com que você lembre por muito mais tempo.' },
  { emoji: '📝', titulo: 'Parabéns pelo esforço!', subtitulo: 'Criar sua própria resposta é muito mais eficaz do que só reler a matéria.' },
  { emoji: '🌱', titulo: 'Você está crescendo!', subtitulo: 'Responder com suas palavras, mesmo com dúvida, é exatamente o que treina a memória.' },
]

export default function FeedbackCard({ question, isCorrect, givenAnswer: _givenAnswer, onNext }: Props) {
  const isElaboracao = question.tipo === 'elaboracao'

  // Escolhe feedback de elaboração de forma determinística pelo id da questão
  const elaboracaoFeedback = ELABORACAO_FEEDBACKS[
    question.id.charCodeAt(question.id.length - 1) % ELABORACAO_FEEDBACKS.length
  ]

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`rounded-2xl p-5 ${
          isElaboracao
            ? 'bg-indigo-50 border-2 border-indigo-200'
            : isCorrect
            ? 'bg-green-50 border-2 border-green-300'
            : 'bg-orange-50 border-2 border-orange-200'
        }`}
      >
        <p className="text-xl font-bold mb-1">
          {isElaboracao
            ? `${elaboracaoFeedback.emoji} ${elaboracaoFeedback.titulo}`
            : isCorrect
            ? '✅ Isso aí!'
            : '💪 Não dessa vez — mas errar faz parte!'}
        </p>
        <p className="text-sm text-gray-500">
          {isElaboracao
            ? elaboracaoFeedback.subtitulo
            : isCorrect
            ? 'Você se esforçou e acertou — isso é o que importa.'
            : 'Veja a resposta certa abaixo e tente guardar. Na próxima revisão você vai lembrar!'}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-5">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Explicação</p>
        {!isCorrect && !isElaboracao && (
          <p className="text-sm font-medium text-gray-700 mb-2">
            Resposta certa: <span className="text-indigo-600">{question.resposta_correta}</span>
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
