import { useState } from 'react'
import { signIn, signUp, signInWithGoogle } from '../lib/authHelpers'

export default function Login() {
  const [mode, setMode] = useState<'entrar' | 'criar'>('entrar')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showEmail, setShowEmail] = useState(false)

  async function handleGoogle() {
    setError('')
    setLoading(true)
    try {
      await signInWithGoogle()
    } catch (err) {
      setError(friendlyError(err))
    } finally {
      setLoading(false)
    }
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'criar') {
        await signUp(email, password)
      } else {
        await signIn(email, password)
      }
    } catch (err) {
      setError(friendlyError(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="text-5xl">🌳</span>
          <h1 className="text-xl font-bold text-indigo-700 mt-3">Área do responsável</h1>
          <p className="text-gray-400 text-sm mt-1">Acompanhe o progresso do seu filho</p>
        </div>

        {/* Botão Google — opção principal */}
        <button
          onClick={handleGoogle}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 rounded-xl py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-40 mb-4"
        >
          <GoogleIcon />
          Entrar com Google
        </button>

        {/* Separador */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-xs">ou</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* E-mail/senha — opção alternativa */}
        {!showEmail ? (
          <button
            onClick={() => setShowEmail(true)}
            className="w-full text-center text-indigo-500 text-sm hover:underline"
          >
            Usar e-mail e senha
          </button>
        ) : (
          <>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => { setMode('entrar'); setError('') }}
                className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-colors ${mode === 'entrar' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Entrar
              </button>
              <button
                onClick={() => { setMode('criar'); setError('') }}
                className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-colors ${mode === 'criar' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Criar conta
              </button>
            </div>

            <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                required
                className="border-2 border-indigo-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-sm"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha (mínimo 6 caracteres)"
                required
                minLength={6}
                className="border-2 border-indigo-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-sm"
              />
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="bg-indigo-600 text-white rounded-xl py-3 font-semibold disabled:opacity-40 hover:bg-indigo-700 transition-colors"
              >
                {loading ? 'Aguarde...' : mode === 'entrar' ? 'Entrar' : 'Criar conta'}
              </button>
            </form>
          </>
        )}

        {error && !showEmail && (
          <p className="text-red-500 text-sm text-center mt-3">{error}</p>
        )}
      </div>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
      <path d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  )
}

function friendlyError(err: unknown): string {
  const code = (err as { code?: string })?.code ?? ''
  const messages: Record<string, string> = {
    'auth/invalid-credential':     'E-mail ou senha incorretos.',
    'auth/email-already-in-use':   'Esse e-mail já tem uma conta.',
    'auth/weak-password':          'Senha muito fraca — use pelo menos 6 caracteres.',
    'auth/invalid-email':          'E-mail inválido.',
    'auth/too-many-requests':      'Muitas tentativas. Aguarde um momento.',
    'auth/network-request-failed': 'Sem conexão. Verifique sua internet.',
    'auth/popup-closed-by-user':   'Login cancelado.',
    'auth/popup-blocked':          'Pop-up bloqueado pelo navegador. Libere e tente novamente.',
  }
  return messages[code] ?? 'Algo deu errado. Tente novamente.'
}
