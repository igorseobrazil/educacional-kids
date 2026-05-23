import { Component, type ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('[ErrorBoundary]', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-indigo-50 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <span className="text-5xl">🌱</span>
          <h1 className="text-xl font-bold text-indigo-700">Algo deu errado</h1>
          <p className="text-gray-500 text-sm max-w-xs">
            Não se preocupe — seu progresso está salvo. Tente recarregar o app.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-indigo-600 text-white rounded-xl px-6 py-3 font-semibold hover:bg-indigo-700 transition-colors"
          >
            Recarregar
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
