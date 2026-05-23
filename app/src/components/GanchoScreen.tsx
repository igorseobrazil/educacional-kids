import { motion } from 'framer-motion'

interface Props {
  topicNome: string
  descricao: string
  gancho: string
  onStart: () => void
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function GanchoScreen({ topicNome, descricao, gancho, onStart }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-indigo-800 flex flex-col p-6 text-white">
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full gap-6">

        <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-6">

          {/* Identificação do tópico */}
          <motion.div variants={fadeUp} className="text-center">
            <span className="text-5xl">🔍</span>
            <p className="text-indigo-200 text-sm mt-3 uppercase tracking-widest font-medium">
              {topicNome}
            </p>
          </motion.div>

          {/* O que você vai aprender */}
          <motion.div variants={fadeUp} className="bg-white/10 rounded-2xl p-4 border border-white/20">
            <p className="text-indigo-200 text-xs font-semibold uppercase tracking-wide mb-2">
              O que você vai aprender
            </p>
            <p className="text-white text-sm leading-relaxed">{descricao}</p>
          </motion.div>

          {/* Gancho de curiosidade */}
          <motion.div variants={fadeUp} className="bg-white/15 rounded-2xl p-5 border border-white/25">
            <p className="text-indigo-200 text-xs font-semibold uppercase tracking-wide mb-2">
              Pense nisso antes de começar
            </p>
            <p className="text-white text-base leading-relaxed font-medium">{gancho}</p>
          </motion.div>

          {/* Botão */}
          <motion.button
            variants={fadeUp}
            whileTap={{ scale: 0.97 }}
            onClick={onStart}
            className="w-full bg-white text-indigo-700 font-bold rounded-2xl py-4 text-lg hover:bg-indigo-50 transition-colors"
          >
            Vamos descobrir! →
          </motion.button>

        </motion.div>
      </div>
    </div>
  )
}
