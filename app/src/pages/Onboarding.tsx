import { useState } from 'react'
import { useAppStore } from '../stores/appStore'

interface Props {
  nome: string
  onFinish: () => void
}

const SLIDES = [
  {
    emoji: '🌳',
    titulo: (nome: string) => `Olá, ${nome}!`,
    texto: 'Aqui você aprende de um jeito diferente — respondendo, não relendo. O seu cérebro grava muito melhor quando você tenta lembrar do que quando só lê.',
    detalhe: null,
    cor: 'from-indigo-600 to-indigo-800',
  },
  {
    emoji: '🧠',
    titulo: () => 'Como funciona?',
    texto: 'O app acompanha o que você já sabe e o que ainda está fixando. Ele decide o momento certo de revisar cada coisa — nem cedo demais, nem tarde demais.',
    detalhe: 'Esse método se chama repetição espaçada. É o mesmo que os melhores estudantes do mundo usam.',
    cor: 'from-violet-600 to-violet-800',
  },
  {
    emoji: null,
    titulo: () => 'Sua árvore cresce com você',
    texto: 'Cada coisa que você fixar de verdade faz a árvore crescer. Sessões curtas todo dia funcionam muito mais do que estudar tudo de uma vez.',
    detalhe: 'Quando terminar uma sessão, o app te avisa quando voltar. Não precisa adivinhar — é tudo calculado para você.',
    cor: 'from-emerald-600 to-emerald-800',
    arvore: true,
  },
]

export default function Onboarding({ nome, onFinish }: Props) {
  const [slide, setSlide] = useState(0)
  const setHasSeenOnboarding = useAppStore((s) => s.setHasSeenOnboarding)

  function handleNext() {
    if (slide < SLIDES.length - 1) {
      setSlide(slide + 1)
    } else {
      setHasSeenOnboarding(true)
      onFinish()
    }
  }

  function handleSkip() {
    setHasSeenOnboarding(true)
    onFinish()
  }

  const s = SLIDES[slide]

  return (
    <div className={`min-h-screen bg-gradient-to-b ${s.cor} flex flex-col transition-colors duration-500`}>
      {/* Skip */}
      <div className="flex justify-end p-4">
        <button onClick={handleSkip} className="text-white/60 text-sm hover:text-white">
          Pular
        </button>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-white text-center gap-6">
        {s.arvore ? (
          <div className="flex items-end gap-4 mb-2">
            <div className="flex flex-col items-center gap-1">
              <span className="text-4xl">🌱</span>
              <span className="text-white/60 text-xs">início</span>
            </div>
            <span className="text-white/40 text-2xl mb-4">→</span>
            <div className="flex flex-col items-center gap-1">
              <span className="text-5xl">🌿</span>
              <span className="text-white/60 text-xs">crescendo</span>
            </div>
            <span className="text-white/40 text-2xl mb-4">→</span>
            <div className="flex flex-col items-center gap-1">
              <span className="text-6xl">🌳</span>
              <span className="text-white/60 text-xs">dominado</span>
            </div>
          </div>
        ) : (
          <span className="text-7xl">{s.emoji}</span>
        )}

        <h1 className="text-2xl font-bold leading-tight">{s.titulo(nome)}</h1>
        <p className="text-white/90 text-base leading-relaxed max-w-xs">{s.texto}</p>
        {s.detalhe && (
          <p className="text-white/60 text-sm leading-relaxed max-w-xs border-t border-white/20 pt-4">
            {s.detalhe}
          </p>
        )}
      </div>

      {/* Navegação */}
      <div className="p-8 flex flex-col items-center gap-5">
        {/* Indicadores */}
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === slide ? 'w-6 bg-white' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full max-w-xs bg-white text-gray-800 font-bold rounded-2xl py-4 text-lg hover:bg-white/90 transition-colors"
        >
          {slide < SLIDES.length - 1 ? 'Próximo →' : 'Vamos começar! 🌱'}
        </button>
      </div>
    </div>
  )
}
