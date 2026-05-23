import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../stores/appStore'
import { useAuthStore } from '../stores/authStore'
import { signOut } from '../lib/authHelpers'
import { db } from '../db/schema'
import { progressPercent, masteryPercent } from '../fsrs/engine'
import { topics, trails } from '../content/trails'
import type { MemoryState, SessionLog } from '../types'

export default function ParentPanel() {
  const { activeChild } = useAppStore()
  const { user, setParentUnlocked } = useAuthStore()
  const navigate = useNavigate()
  const [sessions, setSessions] = useState<SessionLog[]>([])
  const [memoryMap, setMemoryMap] = useState<Record<string, MemoryState>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (activeChild) loadData()
    // Bloqueia novamente quando sair do painel
    return () => setParentUnlocked(false)
  }, [activeChild])

  async function loadData() {
    if (!activeChild) return
    setLoading(true)

    const [states, logs] = await Promise.all([
      db.memoryStates.where('child_id').equals(activeChild.id).toArray(),
      db.sessionLogs.where('child_id').equals(activeChild.id).reverse().limit(10).toArray(),
    ])

    setMemoryMap(Object.fromEntries(states.map((s) => [s.question_id, s])))
    setSessions(logs)
    setLoading(false)
  }

  async function handleSignOut() {
    await signOut()
    navigate('/login')
  }

  function getTopicStates(topicId: string) {
    const topic = topics.find((t) => t.id === topicId)
    if (!topic) return []
    return topic.itens.map((qid) => memoryMap[qid]).filter(Boolean) as MemoryState[]
  }

  function getOverallProgress() {
    const allStates = Object.values(memoryMap) as MemoryState[]
    const totalItems = trails.flatMap((t) => t.topicos).reduce((sum, tid) => {
      const topic = topics.find((t) => t.id === tid)
      return sum + (topic?.itens.length ?? 0)
    }, 0)
    return progressPercent(allStates, totalItems)
  }

  function getStudiedDays() {
    return new Set(sessions.map((s) => s.date)).size
  }

  function getTotalCorrect() {
    return sessions.reduce((sum, s) => sum + s.correct, 0)
  }

  function getTotalSeen() {
    return sessions.reduce((sum, s) => sum + s.items_seen, 0)
  }

  const overallProgress = getOverallProgress()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="text-3xl animate-pulse">🌳</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 max-w-lg mx-auto">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-4 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="text-gray-400 hover:text-gray-600 text-sm">
          ← Voltar
        </button>
        <h1 className="text-gray-700 font-semibold">Painel do responsável</h1>
        <button
          onClick={handleSignOut}
          className="text-gray-400 hover:text-red-500 text-sm transition-colors"
        >
          Sair
        </button>
      </header>

      <div className="p-4 flex flex-col gap-5">

        {/* Criança + progresso geral */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">
              {overallProgress < 20 ? '🌱' : overallProgress < 60 ? '🌿' : '🌳'}
            </span>
            <div>
              <p className="font-bold text-gray-800 text-lg">{activeChild?.nome}</p>
              <p className="text-gray-400 text-xs">{user?.email}</p>
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-indigo-600">{overallProgress}%</span>
            <span className="text-gray-400 text-sm mb-1">de progresso geral</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
            <div
              className="bg-indigo-500 h-2 rounded-full transition-all"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        {/* Números rápidos */}
        <div className="grid grid-cols-3 gap-3">
          <StatCard label="Dias de estudo" value={getStudiedDays()} />
          <StatCard label="Questões vistas" value={getTotalSeen()} />
          <StatCard
            label="Taxa de acerto"
            value={getTotalSeen() > 0 ? `${Math.round((getTotalCorrect() / getTotalSeen()) * 100)}%` : '—'}
          />
        </div>

        {/* Progresso por tópico */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h2 className="font-semibold text-gray-700 mb-4">Progresso por tópico</h2>
          <div className="flex flex-col gap-5">
            {trails.map((trail) => (
              <div key={trail.id}>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  {trail.nome}
                </p>
                <div className="flex flex-col gap-3">
                  {trail.topicos.map((topicId) => {
                    const topic = topics.find((t) => t.id === topicId)
                    if (!topic) return null
                    const states = getTopicStates(topicId)
                    const progress = progressPercent(states, topic.itens.length)
                    const mastery = masteryPercent(states)
                    return (
                      <div key={topicId}>
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-sm text-gray-600">{topic.nome}</p>
                          <span className="text-xs font-semibold text-indigo-500">{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div
                            className="bg-indigo-400 h-2 rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          {progress === 0 && 'Ainda não começou'}
                          {progress > 0 && progress < 50 && 'Iniciando'}
                          {progress >= 50 && progress < 80 && 'Bom progresso'}
                          {progress >= 80 && mastery < 50 && 'Avançado — revisando'}
                          {mastery >= 50 && 'Dominado 🎉'}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Histórico de sessões */}
        {sessions.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <h2 className="font-semibold text-gray-700 mb-4">Sessões recentes</h2>
            <div className="flex flex-col gap-3">
              {sessions.map((s, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="text-sm text-gray-700">{formatDate(s.date)}</p>
                    <p className="text-xs text-gray-400">{s.items_seen} questões · {s.new_items} novas</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-indigo-600">{s.correct}/{s.items_seen}</p>
                    <p className="text-xs text-gray-400">acertos</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Como ajudar */}
        <div className="bg-indigo-50 rounded-2xl p-5">
          <h2 className="font-semibold text-indigo-700 mb-3">Como você pode ajudar</h2>
          <ul className="flex flex-col gap-2 text-sm text-indigo-800">
            <li className="flex gap-2">
              <span>💬</span>
              <span>Pergunte o que {activeChild?.nome} aprendeu hoje — explicar em voz alta fixa muito mais do que reler.</span>
            </li>
            <li className="flex gap-2">
              <span>📅</span>
              <span>Sessões curtas e regulares funcionam melhor do que estudar muito de uma vez. 10 minutos por dia já fazem diferença.</span>
            </li>
            <li className="flex gap-2">
              <span>🎉</span>
              <span>Elogie o esforço, não só o acerto. "Você se dedicou nisso!" motiva mais do que "você é inteligente".</span>
            </li>
            <li className="flex gap-2">
              <span>😴</span>
              <span>O cérebro fixa o que aprendeu durante o sono. Evite sessões de estudo muito perto da hora de dormir.</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 text-center">
      <p className="text-2xl font-bold text-indigo-600">{value}</p>
      <p className="text-xs text-gray-400 mt-1 leading-tight">{label}</p>
    </div>
  )
}

function formatDate(iso: string) {
  const [year, month, day] = iso.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' })
}
