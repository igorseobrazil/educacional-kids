import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../stores/appStore'
import { useAuthStore } from '../stores/authStore'
import { saveChild } from '../lib/authHelpers'

export default function Setup() {
  const [nome, setNome] = useState('')
  const [loading, setLoading] = useState(false)
  const setActiveChild = useAppStore((s) => s.setActiveChild)
  const user = useAuthStore((s) => s.user)
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!nome.trim()) return
    setLoading(true)

    const child = { id: crypto.randomUUID(), nome: nome.trim(), ano_escolar: 5 }
    await saveChild(child, user!.uid)
    setActiveChild(child)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <span className="text-4xl">👋</span>
          <h1 className="text-2xl font-bold text-indigo-700 mt-2">Olá!</h1>
          <p className="text-gray-400 text-sm mt-1">Qual é o nome de quem vai estudar?</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            className="bg-indigo-600 text-white rounded-xl py-3 text-lg font-semibold disabled:opacity-40 hover:bg-indigo-700 transition-colors"
          >
            {loading ? 'Salvando...' : 'Começar'}
          </button>
        </form>
      </div>
    </div>
  )
}
