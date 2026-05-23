import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../stores/appStore'
import { useAuthStore } from '../stores/authStore'
import { createChild, joinChildByCode } from '../lib/authHelpers'

export default function Setup() {
  const [tab, setTab] = useState<'criar' | 'entrar'>('criar')
  const [nome, setNome] = useState('')
  const [codigo, setCodigo] = useState('')
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')

  const { setActiveChild, addChild } = useAppStore()
  const user = useAuthStore((s) => s.user)
  const navigate = useNavigate()

  async function handleCriar(e: React.FormEvent) {
    e.preventDefault()
    if (!nome.trim()) return
    setLoading(true)
    setErro('')
    const child = await createChild(nome.trim(), user!.uid)
    addChild(child)
    setActiveChild(child)
    navigate('/')
  }

  async function handleEntrar(e: React.FormEvent) {
    e.preventDefault()
    if (codigo.trim().length < 6) return
    setLoading(true)
    setErro('')
    const child = await joinChildByCode(codigo.trim(), user!.uid)
    if (!child) {
      setErro('Código não encontrado. Verifique e tente novamente.')
      setLoading(false)
      return
    }
    addChild(child)
    setActiveChild(child)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <span className="text-4xl">👋</span>
          <h1 className="text-xl font-bold text-indigo-700 mt-2">Bem-vindo!</h1>
        </div>

        {/* Abas */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => { setTab('criar'); setErro('') }}
            className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-colors ${tab === 'criar' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Criar perfil
          </button>
          <button
            onClick={() => { setTab('entrar'); setErro('') }}
            className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-colors ${tab === 'entrar' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Usar código
          </button>
        </div>

        {tab === 'criar' ? (
          <form onSubmit={handleCriar} className="flex flex-col gap-4">
            <p className="text-gray-400 text-sm text-center">Qual é o nome de quem vai estudar?</p>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome da criança"
              className="border-2 border-indigo-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-indigo-500"
              autoFocus
            />
            <button
              type="submit"
              disabled={!nome.trim() || loading}
              className="bg-indigo-600 text-white rounded-xl py-3 font-semibold disabled:opacity-40 hover:bg-indigo-700 transition-colors"
            >
              {loading ? 'Criando...' : 'Criar perfil'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleEntrar} className="flex flex-col gap-4">
            <p className="text-gray-400 text-sm text-center">
              Digite o código de convite gerado pelo outro responsável
            </p>
            <input
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value.toUpperCase())}
              placeholder="Ex: XK92T4"
              maxLength={6}
              className="border-2 border-indigo-200 rounded-xl px-4 py-3 text-lg text-center tracking-widest font-mono focus:outline-none focus:border-indigo-500"
              autoFocus
            />
            {erro && <p className="text-red-500 text-sm text-center">{erro}</p>}
            <button
              type="submit"
              disabled={codigo.trim().length < 6 || loading}
              className="bg-indigo-600 text-white rounded-xl py-3 font-semibold disabled:opacity-40 hover:bg-indigo-700 transition-colors"
            >
              {loading ? 'Buscando...' : 'Entrar no perfil'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
