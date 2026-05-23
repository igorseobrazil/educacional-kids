interface Props {
  topicNome: string
  gancho: string
  onStart: () => void
}

export default function GanchoScreen({ topicNome, gancho, onStart }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-indigo-800 flex flex-col items-center justify-center p-6 text-white">
      <div className="max-w-sm w-full flex flex-col items-center gap-8">

        <div className="text-center">
          <span className="text-5xl">🔍</span>
          <p className="text-indigo-200 text-sm mt-3 uppercase tracking-widest font-medium">
            {topicNome}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
          <p className="text-white text-xl leading-relaxed font-medium text-center">
            {gancho}
          </p>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-white text-indigo-700 font-bold rounded-2xl py-4 text-lg hover:bg-indigo-50 transition-colors"
        >
          Vamos descobrir! →
        </button>
      </div>
    </div>
  )
}
