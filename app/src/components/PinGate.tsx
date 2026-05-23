import { useEffect, useState } from 'react'
import { useAuthStore } from '../stores/authStore'
import { savePin, getPin } from '../lib/authHelpers'

interface Props {
  children: React.ReactNode
}

export default function PinGate({ children }: Props) {
  const { user, parentUnlocked, setParentUnlocked } = useAuthStore()
  const [mode, setMode] = useState<'loading' | 'criar' | 'verificar' | 'confirmar'>('loading')
  const [pin, setPin] = useState('')
  const [pinConfirm, setPinConfirm] = useState('')
  const [erro, setErro] = useState('')
  const [pinSalvo, setPinSalvo] = useState<string | null>(null)

  useEffect(() => {
    if (!user) return
    getPin(user.uid).then((p) => {
      setPinSalvo(p)
      setMode(p ? 'verificar' : 'criar')
    })
  }, [user])

  // Já desbloqueado nesta sessão
  if (parentUnlocked) return <>{children}</>
  if (mode === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="text-3xl animate-pulse">🔒</span>
      </div>
    )
  }

  const digitando = mode === 'confirmar' ? pinConfirm : pin
  const setDigitando = mode === 'confirmar' ? setPinConfirm : setPin

  function pressDigit(d: string) {
    setErro('')
    if (digitando.length < 4) setDigitando(digitando + d)
  }

  function pressDelete() {
    setErro('')
    setDigitando(digitando.slice(0, -1))
  }

  async function handleConfirm() {
    if (mode === 'criar') {
      if (pin.length < 4) return
      setMode('confirmar')
      return
    }

    if (mode === 'confirmar') {
      if (pinConfirm !== pin) {
        setErro('Os PINs não coincidem. Tente novamente.')
        setPinConfirm('')
        return
      }
      await savePin(user!.uid, pin)
      setPinSalvo(pin)
      setParentUnlocked(true)
      return
    }

    if (mode === 'verificar') {
      if (pin === pinSalvo) {
        setParentUnlocked(true)
      } else {
        setErro('PIN incorreto.')
        setPin('')
      }
    }
  }

  const titulo = {
    criar: 'Criar PIN do responsável',
    confirmar: 'Confirme o PIN',
    verificar: 'Painel do responsável',
  }[mode]

  const subtitulo = {
    criar: 'Digite um PIN de 4 dígitos para proteger o painel',
    confirmar: 'Digite o PIN novamente para confirmar',
    verificar: 'Digite o PIN para continuar',
  }[mode]

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs">
        <div className="text-center mb-6">
          <span className="text-4xl">🔒</span>
          <h1 className="text-lg font-bold text-gray-800 mt-2">{titulo}</h1>
          <p className="text-gray-400 text-sm mt-1">{subtitulo}</p>
        </div>

        {/* Indicadores de dígitos */}
        <div className="flex justify-center gap-4 mb-6">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full border-2 transition-colors ${
                digitando.length > i
                  ? 'bg-indigo-600 border-indigo-600'
                  : 'bg-white border-gray-300'
              }`}
            />
          ))}
        </div>

        {erro && (
          <p className="text-red-500 text-sm text-center mb-4">{erro}</p>
        )}

        {/* Teclado numérico */}
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
          <div /> {/* espaço vazio */}
          <button
            onClick={() => pressDigit('0')}
            className="bg-gray-50 hover:bg-indigo-50 active:bg-indigo-100 rounded-xl py-4 text-xl font-semibold text-gray-800 transition-colors"
          >
            0
          </button>
          <button
            onClick={pressDelete}
            className="bg-gray-50 hover:bg-red-50 active:bg-red-100 rounded-xl py-4 text-xl text-gray-500 transition-colors"
          >
            ⌫
          </button>
        </div>

        <button
          onClick={handleConfirm}
          disabled={digitando.length < 4}
          className="w-full bg-indigo-600 text-white rounded-xl py-3 font-bold text-lg disabled:opacity-40 hover:bg-indigo-700 transition-colors"
        >
          {mode === 'criar' ? 'Continuar' : mode === 'confirmar' ? 'Criar PIN' : 'Entrar'}
        </button>
      </div>
    </div>
  )
}
