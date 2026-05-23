import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../stores/appStore'
import { db } from '../db/schema'
import { isDue, progressPercent } from '../fsrs/engine'
import { trails, topics } from '../content/trails'
import ChildSwitcher from '../components/ChildSwitcher'
import type { Child, MemoryState, SessionLog } from '../types'

export default function Home() {
  const { activeChild, children, memoryStates, setMemoryStates, setActiveChild } = useAppStore()
  const navigate = useNavigate()
  const [dueCount, setDueCount] = useState(0)
  const [nextReview, setNextReview] = useState<string | null>(null)
  const [streak, setStreak] = useState(0)
  const [showSwitcher, setShowSwitcher] = useState(false)

  function handleSwitch(child: Child) {
    setActiveChild(child)
    setShowSwitcher(false)
  }

  useEffect(() => {
    if (!activeChild) return
    loadData()
  }, [activeChild])

  async function loadData() {
    if (!activeChild) return

    const states = await db.memoryStates.where('child_id').equals(activeChild.id).toArray()
    setMemoryStates(states)

    const due = states.filter(isDue)
    setDueCount(due.length)

    // Próxima revisão — menor "due" entre os não vencidos
    const future = states
      .filter((s) => !isDue(s))
      .map((s) => new Date(s.due))
      .sort((a, b) => a.getTime() - b.getTime())
    setNextReview(future[0] ? formatNextReview(future[0]) : null)

    // Streak — dias consecutivos com sessão
    const logs = await db.sessionLogs
      .where('child_id').equals(activeChild.id)
      .reverse()
      .toArray()
    setStreak(calcStreak(logs))
  }

  function getTopicMastery(topicId: string): number {
    const topic = topics.find((t) => t.id === topicId)
    if (!topic) return 0
    const states = topic.itens.map((qid) => memoryStates[qid]).filter(Boolean) as MemoryState[]
    return progressPercent(states, topic.itens.length)
  }

  function getTreeSize(trail: typeof trails[0]): number {
    const allMastery = trail.topicos.map((tid) => getTopicMastery(tid))
    return allMastery.reduce((a, b) => a + b, 0) / (allMastery.length || 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-4 max-w-lg mx-auto pb-8">
      {showSwitcher && activeChild && (
        <ChildSwitcher
          children={children}
          activeChild={activeChild}
          onSwitch={handleSwitch}
          onClose={() => setShowSwitcher(false)}
        />
      )}
      <header className="pt-6 pb-4 flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm">Olá,</p>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-indigo-700">{activeChild?.nome} 🌳</h1>
            {children.length > 1 && (
              <button
                onClick={() => setShowSwitcher(true)}
                className="text-xs text-indigo-400 border border-indigo-200 rounded-full px-2 py-0.5 hover:bg-indigo-50"
              >
                trocar
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 mt-1">
          {streak > 0 && (
            <div className="flex items-center gap-1 bg-orange-50 text-orange-500 rounded-full px-2 py-1">
              <span className="text-sm">🔥</span>
              <span className="text-xs font-bold">{streak}</span>
            </div>
          )}
          <button
            onClick={() => navigate('/parents')}
            className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1 hover:border-indigo-300 hover:text-indigo-500 transition-colors"
          >
            Responsável
          </button>
        </div>
      </header>

      {/* Estudo de hoje */}
      <section className="bg-indigo-600 rounded-2xl p-5 text-white mb-6 shadow">
        <p className="text-indigo-200 text-sm mb-1">Estudo de hoje</p>
        <p className="text-lg font-semibold mb-1">
          {dueCount > 0
            ? `${dueCount} ${dueCount > 1 ? 'revisões' : 'revisão'} te esperando`
            : 'Nenhuma revisão pendente — ótimo!'}
        </p>
        {dueCount === 0 && nextReview && (
          <p className="text-indigo-300 text-xs mb-3">Próxima revisão: {nextReview}</p>
        )}
        {dueCount > 0 && <div className="mb-3" />}
        <button
          onClick={() => navigate('/session')}
          className="bg-white text-indigo-700 font-bold rounded-xl px-6 py-2 hover:bg-indigo-50 transition-colors"
        >
          {dueCount > 0 ? 'Começar revisão' : 'Explorar conteúdo'}
        </button>
      </section>

      {/* Trilhas */}
      <section>
        <h2 className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-3">Suas jornadas</h2>
        <div className="flex flex-col gap-4">
          {trails.map((trail) => {
            const size = getTreeSize(trail)
            return (
              <div key={trail.id} className="bg-white rounded-2xl shadow p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{size < 30 ? '🌱' : size < 70 ? '🌿' : '🌳'}</span>
                  <div>
                    <p className="font-bold text-gray-800">{trail.nome}</p>
                    <p className="text-gray-400 text-xs">{trail.materia}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {trail.topicos.map((topicId) => {
                    const topic = topics.find((t) => t.id === topicId)
                    if (!topic) return null
                    const mastery = getTopicMastery(topicId)
                    return (
                      <button
                        key={topicId}
                        onClick={() => navigate(`/session?topic=${topicId}`)}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors text-left"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-700">{topic.nome}</p>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                            <div
                              className="bg-indigo-500 h-1.5 rounded-full transition-all"
                              style={{ width: `${mastery}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-xs text-gray-400">{mastery}%</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

function calcStreak(logs: SessionLog[]): number {
  if (logs.length === 0) return 0
  const today = new Date().toISOString().slice(0, 10)
  const uniqueDays = [...new Set(logs.map((l) => l.date))].sort().reverse()

  // Streak só conta se estudou hoje ou ontem
  const mostRecent = uniqueDays[0]
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  if (mostRecent !== today && mostRecent !== yesterday) return 0

  let count = 1
  for (let i = 1; i < uniqueDays.length; i++) {
    const prev = new Date(uniqueDays[i - 1])
    const curr = new Date(uniqueDays[i])
    const diff = Math.round((prev.getTime() - curr.getTime()) / 86400000)
    if (diff === 1) count++
    else break
  }
  return count
}

function formatNextReview(date: Date): string {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)

  if (date.toDateString() === today.toDateString()) return 'ainda hoje'
  if (date.toDateString() === tomorrow.toDateString()) return 'amanhã'
  return date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'short' })
}
