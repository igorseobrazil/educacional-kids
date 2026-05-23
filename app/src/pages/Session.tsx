import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAppStore } from '../stores/appStore'
import { useSessionStore } from '../stores/sessionStore'
import { db } from '../db/schema'
import { isDue, getEmptyState, scheduleReview, Rating } from '../fsrs/engine'
import { syncMemoryState } from '../lib/sync'
import { questions, topics } from '../content/trails'
import QuestionCard from '../components/QuestionCard'
import FeedbackCard from '../components/FeedbackCard'
import SessionEnd from '../components/SessionEnd'
import GanchoScreen from '../components/GanchoScreen'
import type { Question } from '../types'

const MAX_NEW_PER_SESSION = 5
const SESSION_SIZE = 12

export default function Session() {
  const [searchParams] = useSearchParams()
  const topicFilter = searchParams.get('topic')
  const { activeChild, memoryStates, setMemoryState } = useAppStore()
  const { queue, currentIndex, phase, startSession, answerCorrect, answerWrong, nextQuestion, endSession } =
    useSessionStore()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [lastAnswer, setLastAnswer] = useState<{ correct: boolean; answer: string } | null>(null)
  const [gancho, setGancho] = useState<{ topicNome: string; texto: string } | null>(null)

  useEffect(() => {
    if (activeChild) buildSession()
  }, [activeChild])

  // Salva log quando a sessão termina
  useEffect(() => {
    if (phase === 'done' && activeChild) {
      saveSessionLog()
    }
  }, [phase])

  async function saveSessionLog() {
    if (!activeChild) return
    const log = {
      child_id: activeChild.id,
      date: new Date().toISOString().slice(0, 10),
      items_seen: queue.length,
      correct: useSessionStore.getState().correct,
      new_items: useSessionStore.getState().newItemsCount,
    }
    await db.sessionLogs.add(log)
  }

  async function buildSession() {
    if (!activeChild) return

    const pool = topicFilter
      ? questions.filter((q) => q.topico_id === topicFilter)
      : questions

    // Load or initialize memory states
    const existingStates = await db.memoryStates.where('child_id').equals(activeChild.id).toArray()
    const stateMap = Object.fromEntries(existingStates.map((s) => [s.question_id, s]))

    const due: Question[] = []
    const newItems: Question[] = []

    for (const q of pool) {
      const state = stateMap[q.id]
      if (!state) {
        newItems.push(q)
      } else if (isDue(state)) {
        due.push(q)
      }
    }

    const session: Question[] = [
      ...due,
      ...newItems.slice(0, Math.max(0, MAX_NEW_PER_SESSION - due.length)),
    ].slice(0, SESSION_SIZE)

    // Shuffle
    session.sort(() => Math.random() - 0.5)

    const newCount = session.filter((q) => !stateMap[q.id]).length

    // Mostra gancho se é tópico específico e a criança ainda não tem nenhuma questão respondida
    if (topicFilter && newCount === session.length) {
      const topic = topics.find((t) => t.id === topicFilter)
      if (topic?.gancho_curiosidade) {
        setGancho({ topicNome: topic.nome, texto: topic.gancho_curiosidade })
      }
    }

    setLoading(false)
    startSession(session, newCount)
  }

  async function handleAnswer(answer: string) {
    const question = queue[currentIndex]
    const isCorrect =
      question.tipo === 'elaboracao' || question.tipo === 'caderno'
        ? true // sem avaliação automática — sempre correto para o FSRS
        : normalize(answer) === normalize(question.resposta_correta)

    setLastAnswer({ correct: isCorrect, answer })

    const childId = activeChild!.id
    const existing = memoryStates[question.id] ?? getEmptyState(question.id, childId)
    const rating = isCorrect ? Rating.Good : Rating.Again
    const next = scheduleReview(existing, rating)

    await syncMemoryState(next)
    setMemoryState(next)

    if (isCorrect) answerCorrect()
    else answerWrong()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-50">
        <p className="text-indigo-400">Montando sua sessão...</p>
      </div>
    )
  }

  if (gancho) {
    return (
      <GanchoScreen
        topicNome={gancho.topicNome}
        gancho={gancho.texto}
        onStart={() => setGancho(null)}
      />
    )
  }

  if (phase === 'done') {
    return <SessionEnd onClose={() => { endSession(); navigate('/') }} />
  }

  if (queue.length === 0) {
    return (
      <div className="min-h-screen bg-indigo-50 flex flex-col items-center justify-center gap-4 p-4">
        <span className="text-5xl">🎉</span>
        <p className="text-xl font-bold text-indigo-700">Tudo em dia!</p>
        <p className="text-gray-500 text-center">Não há revisões pendentes agora. Volte amanhã.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-indigo-600 text-white rounded-xl px-6 py-3 font-semibold hover:bg-indigo-700"
        >
          Voltar ao início
        </button>
      </div>
    )
  }

  const current = queue[currentIndex]

  return (
    <div className="min-h-screen bg-indigo-50 p-4 max-w-lg mx-auto flex flex-col">
      {/* Progress bar */}
      <div className="flex items-center gap-3 pt-4 pb-6">
        <button onClick={() => { endSession(); navigate('/') }} className="text-gray-400 hover:text-gray-600">
          ✕
        </button>
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all"
            style={{ width: `${(currentIndex / queue.length) * 100}%` }}
          />
        </div>
        <span className="text-xs text-gray-400">{currentIndex + 1}/{queue.length}</span>
      </div>

      <div className="flex-1">
        {phase === 'question' && (
          <QuestionCard question={current} onAnswer={handleAnswer} />
        )}
        {phase === 'feedback' && lastAnswer && (
          <FeedbackCard
            question={current}
            isCorrect={lastAnswer.correct}
            givenAnswer={lastAnswer.answer}
            onNext={nextQuestion}
          />
        )}
      </div>
    </div>
  )
}

// Remove espaços, pontuação no final e normaliza maiúsculas
// para que "Substantivo." == "substantivo" == "SUBSTANTIVO"
function normalize(s: string): string {
  return s.trim().toLowerCase().replace(/[.,!?;:]+$/, '').trim()
}
