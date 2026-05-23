import { useState } from 'react'
import type { Child } from '../types'

interface Props {
  children: Child[]
  activeChild: Child
  onSwitch: (child: Child) => void
  onClose: () => void
}

export default function ChildSwitcher({ children, activeChild, onSwitch, onClose }: Props) {
  const [target, setTarget] = useState<Child | null>(null)
  const [pin, setPin] = useState('')
  const [erro, setErro] = useState('')

  function handleSelect(child: Child) {
    if (child.id === activeChild.id) { onClose(); return }
    if (!child.birthday) { onSwitch(child); return } // sem PIN → troca livre
    setTarget(child)
    setPin('')
    setErro('')
  }

  function pressDigit(d: string) {
    setErro('')
    if (pin.length < 4) setPin((p) => p + d)
  }

  function pressDelete() {
    setErro('')
    setPin((p) => p.slice(0, -1))
  }

  function handleConfirm() {
    if (!target) return
    if (pin === target.birthday) {
      onSwitch(target)
    } else {
      setErro('Aniversário incorreto. Tente novamente.')
      setPin('')
    }
  }

  // Tela de seleção de filho
  if (!target) {
    return (
      <div className="fixed inset-0 bg-black/40 flex items-end justify-center z-50 p-4">
        <div className="bg-white rounded-2xl w-full max-w-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-800">Trocar criança</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
          </div>
          <div className="flex flex-col gap-2">
            {children.map((c) => (
              <button
                key={c.id}
                onClick={() => handleSelect(c)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-colors ${
                  c.id === activeChild.id
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-100 hover:border-indigo-200'
                }`}
              >
                <span className="font-medium text-gray-800">{c.nome}</span>
                <span className="text-lg">
                  {c.id === activeChild.id ? '✓' : c.birthday ? '🔒' : ''}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Tela de PIN de aniversário
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-xs p-6 relative">
        <button
          onClick={() => setTarget(null)}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 text-sm"
        >
          ← Voltar
        </button>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 text-xl leading-none"
        >
          ✕
        </button>

        <div className="text-center mb-6 mt-4">
          <span className="text-3xl">🎂</span>
          <h2 className="font-bold text-gray-800 mt-2">Qual o aniversário de {target.nome}?</h2>
          <p className="text-gray-400 text-sm mt-1">Digite o dia e mês (ex: 12 de julho → 1207)</p>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-4 mb-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full border-2 transition-colors ${
                pin.length > i ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-300'
              }`}
            />
          ))}
        </div>

        {erro && <p className="text-red-500 text-sm text-center mb-3">{erro}</p>}

        {/* Teclado */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {['1','2','3','4','5','6','7','8','9'].map((d) => (
            <button
              key={d}
              onClick={() => pressDigit(d)}
              className="bg-gray-50 hover:bg-indigo-50 active:bg-indigo-100 rounded-xl py-4 text-xl font-semibold text-gray-800 transition-colors"
            >
              {d}
            </button>
          ))}
          <div />
          <button onClick={() => pressDigit('0')} className="bg-gray-50 hover:bg-indigo-50 active:bg-indigo-100 rounded-xl py-4 text-xl font-semibold text-gray-800 transition-colors">0</button>
          <button onClick={pressDelete} className="bg-gray-50 hover:bg-red-50 active:bg-red-100 rounded-xl py-4 text-xl text-gray-500 transition-colors">⌫</button>
        </div>

        <button
          onClick={handleConfirm}
          disabled={pin.length < 4}
          className="w-full bg-indigo-600 text-white rounded-xl py-3 font-bold text-lg disabled:opacity-40 hover:bg-indigo-700 transition-colors"
        >
          Entrar
        </button>
      </div>
    </div>
  )
}
