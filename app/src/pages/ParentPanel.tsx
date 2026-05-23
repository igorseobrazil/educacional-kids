import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../stores/appStore'
import { useAuthStore } from '../stores/authStore'
import { signOut, createChild, updateChild, deleteChild } from '../lib/authHelpers'
import { db } from '../db/schema'
import { progressPercent, masteryPercent } from '../fsrs/engine'
import { topics, trails } from '../content/trails'
import type { MemoryState, SessionLog } from '../types'

type Tab = 'progresso' | 'filhos'

export default function ParentPanel() {
  const { activeChild, children, setActiveChild, addChild, removeChild, updateChildInStore } = useAppStore()
  const { user } = useAuthStore()
  const navigate = useNavigate()

  const [tab, setTab] = useState<Tab>('progresso')
  const [sessions, setSessions] = useState<SessionLog[]>([])
  const [memoryMap, setMemoryMap] = useState<Record<string, MemoryState>>({})
  const [loading, setLoading] = useState(true)

  // Adicionar filho
  const [novoNome, setNovoNome] = useState('')
  const [addLoading, setAddLoading] = useState(false)
  const [addErro, setAddErro] = useState('')

  // Aniversário por filho (DDMM)
  const [birthdayEdits, setBirthdayEdits] = useState<Record<string, string>>({})
  const [birthdaySaving, setBirthdaySaving] = useState<string | null>(null)

  useEffect(() => {
    if (activeChild) loadData()
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

  async function handleAddChild(e: React.FormEvent) {
    e.preventDefault()
    if (!novoNome.trim() || !user) return
    setAddLoading(true)
    setAddErro('')
    try {
      const child = await createChild(novoNome.trim(), user.uid)
      addChild(child)
      setActiveChild(child)
      setNovoNome('')
      setTab('progresso')
    } catch (err) {
      console.error('Erro ao criar filho:', err)
      setAddErro('Não foi possível salvar. Verifique sua conexão e tente novamente.')
    } finally {
      setAddLoading(false)
    }
  }

  async function handleDeleteChild(child: typeof children[0]) {
    const confirmed = window.confirm(
      `Tem certeza que quer excluir o perfil de ${child.nome}? Todo o progresso será apagado permanentemente.`
    )
    if (!confirmed) return
    try {
      await deleteChild(child.id)
      removeChild(child.id)
      if (children.length <= 1) navigate('/')
    } catch (err) {
      console.error('Erro ao excluir filho:', err)
      alert('Não foi possível excluir. Verifique sua conexão e tente novamente.')
    }
  }

  async function handleSaveBirthday(childId: string) {
    const raw = (birthdayEdits[childId] ?? '').replace(/\D/g, '').slice(0, 4)
    if (raw.length !== 4) return
    setBirthdaySaving(childId)
    await updateChild(childId, { birthday: raw })
    updateChildInStore(childId, { birthday: raw })
    setBirthdaySaving(null)
    setBirthdayEdits((prev) => ({ ...prev, [childId]: '' }))
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

  const overallProgress = getOverallProgress()

  return (
    <div className="min-h-screen bg-gray-50 max-w-lg mx-auto">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-4 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="text-gray-400 hover:text-gray-600 text-sm">← Voltar</button>
        <h1 className="text-gray-700 font-semibold">Painel do responsável</h1>
        <button onClick={handleSignOut} className="text-gray-400 hover:text-red-500 text-sm transition-colors">Sair</button>
      </header>

      {/* Abas */}
      <div className="flex border-b border-gray-100 bg-white">
        {(['progresso', 'filhos'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${tab === t ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-400'}`}
          >
            {t === 'progresso' ? 'Progresso' : 'Filhos e responsáveis'}
          </button>
        ))}
      </div>

      <div className="p-4 flex flex-col gap-5">

        {/* ── ABA PROGRESSO ─────────────────────────────────────────── */}
        {tab === 'progresso' && (
          <>
            {/* Seletor de filho */}
            {children.length > 1 && (
              <div className="flex gap-2 flex-wrap">
                {children.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { setActiveChild(c); loadData() }}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeChild?.id === c.id ? 'bg-indigo-600 text-white' : 'bg-white text-gray-500 border border-gray-200'}`}
                  >
                    {c.nome}
                  </button>
                ))}
              </div>
            )}

            {loading ? (
              <div className="flex justify-center py-12"><span className="text-3xl animate-pulse">🌳</span></div>
            ) : (
              <>
                {/* Progresso geral */}
                <div className="bg-white rounded-2xl shadow-sm p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{overallProgress < 20 ? '🌱' : overallProgress < 60 ? '🌿' : '🌳'}</span>
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
                    <div className="bg-indigo-500 h-2 rounded-full transition-all" style={{ width: `${overallProgress}%` }} />
                  </div>
                </div>

                {/* Números rápidos */}
                <div className="grid grid-cols-3 gap-3">
                  <StatCard label="Dias de estudo" value={new Set(sessions.map((s) => s.date)).size} />
                  <StatCard label="Questões vistas" value={sessions.reduce((s, l) => s + l.items_seen, 0)} />
                  <StatCard
                    label="Taxa de acerto"
                    value={sessions.reduce((s, l) => s + l.items_seen, 0) > 0
                      ? `${Math.round(sessions.reduce((s, l) => s + l.correct, 0) / sessions.reduce((s, l) => s + l.items_seen, 0) * 100)}%`
                      : '—'}
                  />
                </div>

                {/* Progresso por tópico */}
                <div className="bg-white rounded-2xl shadow-sm p-5">
                  <h2 className="font-semibold text-gray-700 mb-4">Progresso por tópico</h2>
                  <div className="flex flex-col gap-5">
                    {trails.map((trail) => (
                      <div key={trail.id}>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">{trail.nome}</p>
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
                                  <div className="bg-indigo-400 h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
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

                {/* Sessões recentes */}
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
                    <li className="flex gap-2"><span>💬</span><span>Pergunte o que {activeChild?.nome} aprendeu hoje — explicar em voz alta fixa muito mais do que reler.</span></li>
                    <li className="flex gap-2"><span>📅</span><span>Sessões curtas e regulares funcionam melhor do que estudar muito de uma vez.</span></li>
                    <li className="flex gap-2"><span>🎉</span><span>Elogie o esforço, não só o acerto. "Você se dedicou nisso!" motiva mais.</span></li>
                    <li className="flex gap-2"><span>😴</span><span>O cérebro fixa o que aprendeu durante o sono. Evite sessões perto da hora de dormir.</span></li>
                  </ul>
                </div>
              </>
            )}
          </>
        )}

        {/* ── ABA FILHOS E RESPONSÁVEIS ─────────────────────────────── */}
        {tab === 'filhos' && (
          <>
            {/* Lista de filhos com código de convite */}
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h2 className="font-semibold text-gray-700 mb-4">Perfis cadastrados</h2>
              <div className="flex flex-col gap-4">
                {children.map((c) => (
                  <div key={c.id} className="border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-semibold text-gray-800">{c.nome}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-400">{c.ano_escolar}º ano</span>
                        <button
                          onClick={() => handleDeleteChild(c)}
                          className="text-xs text-red-400 hover:text-red-600 transition-colors"
                        >
                          Excluir
                        </button>
                      </div>
                    </div>
                    {/* Aniversário (PIN da criança) */}
                    <div className="bg-amber-50 rounded-xl p-3 mb-2">
                      <p className="text-xs text-amber-700 font-medium mb-1">🎂 Aniversário (PIN da criança)</p>
                      <p className="text-xs text-amber-600 mb-2">Dia + mês, sem separador. Ex: 12 de julho → 1207</p>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          inputMode="numeric"
                          maxLength={4}
                          placeholder={c.birthday ? c.birthday : 'DDMM'}
                          value={birthdayEdits[c.id] ?? ''}
                          onChange={(e) => setBirthdayEdits((prev) => ({ ...prev, [c.id]: e.target.value.replace(/\D/g, '').slice(0, 4) }))}
                          className="flex-1 border border-amber-200 rounded-lg px-3 py-1.5 text-sm font-mono tracking-widest focus:outline-none focus:border-amber-400"
                        />
                        <button
                          onClick={() => handleSaveBirthday(c.id)}
                          disabled={birthdaySaving === c.id || (birthdayEdits[c.id] ?? '').length !== 4}
                          className="bg-amber-500 text-white rounded-lg px-3 py-1.5 text-xs font-semibold disabled:opacity-40 hover:bg-amber-600"
                        >
                          {birthdaySaving === c.id ? '...' : 'Salvar'}
                        </button>
                      </div>
                      {c.birthday && <p className="text-xs text-amber-500 mt-1">PIN atual: {c.birthday}</p>}
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-400 mb-1">Código de convite para outro responsável</p>
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-indigo-600 text-lg tracking-widest">{c.invite_code}</span>
                        <button
                          onClick={() => navigator.clipboard.writeText(c.invite_code)}
                          className="text-xs text-gray-400 hover:text-indigo-500"
                        >
                          Copiar
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        {c.guardians.length} responsável{c.guardians.length > 1 ? 'is' : ''} vinculado{c.guardians.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Adicionar novo filho */}
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h2 className="font-semibold text-gray-700 mb-4">Adicionar outro filho</h2>
              <form onSubmit={handleAddChild} className="flex gap-2">
                <input
                  type="text"
                  value={novoNome}
                  onChange={(e) => setNovoNome(e.target.value)}
                  placeholder="Nome da criança"
                  className="flex-1 border-2 border-indigo-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  disabled={!novoNome.trim() || addLoading}
                  className="bg-indigo-600 text-white rounded-xl px-4 py-2 text-sm font-semibold disabled:opacity-40 hover:bg-indigo-700 transition-colors"
                >
                  {addLoading ? '...' : 'Criar'}
                </button>
              </form>
              {addErro && <p className="text-red-500 text-sm mt-2">{addErro}</p>}
            </div>

            {/* Instrução para entrar com código */}
            <div className="bg-amber-50 rounded-2xl p-5">
              <h2 className="font-semibold text-amber-700 mb-2">Como convidar outro responsável</h2>
              <p className="text-sm text-amber-800">
                Compartilhe o <strong>código de convite</strong> do filho com o outro responsável (pai, mãe, avó, etc).
                Ele instala o app, faz login e na primeira tela escolhe <strong>"Usar código"</strong> e digita o código.
                Os dois terão acesso ao mesmo perfil e progresso.
              </p>
            </div>
          </>
        )}
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
  return new Date(year, month - 1, day).toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' })
}
