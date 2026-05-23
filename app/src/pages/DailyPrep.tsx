import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppStore } from '../stores/appStore'
import { chooseDailyMode } from '../lib/leaves'
import { LEAF, type LeafMode } from '../types'

interface Props {
  onReady: () => void
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

export default function DailyPrep({ onReady }: Props) {
  const { activeChild, leafBalance, setLeafBalance, setLastOpenDate } = useAppStore()
  const [modoSelecionado, setModoSelecionado] = useState<LeafMode>(null)
  const [loading, setLoading] = useState(false)

  const available = leafBalance?.available ?? 0
  const acumulado = leafBalance?.acumulado_semana ?? 0
  const hasLeaves = available + acumulado > 0
  const podeTela = available >= LEAF.CUSTO_TELA

  async function handleReady() {
    if (!activeChild) return
    setLoading(true)

    if (hasLeaves) {
      const mode: LeafMode = modoSelecionado ?? 'mesada'
      const updated = await chooseDailyMode(activeChild.id, mode)
      setLeafBalance(updated)
    }

    setLastOpenDate(new Date().toISOString().slice(0, 10))
    setLoading(false)
    onReady()
  }

  const saudacao = () => {
    const h = new Date().getHours()
    if (h < 12) return 'Bom dia'
    if (h < 18) return 'Boa tarde'
    return 'Boa noite'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col p-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex-1 flex flex-col gap-5 max-w-sm mx-auto w-full justify-center"
      >
        {/* Saudação */}
        <motion.div variants={fadeUp} className="text-center">
          <p className="text-gray-400 text-sm">{saudacao()},</p>
          <h1 className="text-2xl font-bold text-indigo-700">{activeChild?.nome} 🌳</h1>
            {hasLeaves && (
            <p className="text-indigo-400 text-sm mt-1">🍃 {available + acumulado} folhas</p>
          )}
        </motion.div>

        {/* Checklist do caderno */}
        <motion.div variants={fadeUp} className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
          <p className="font-bold text-amber-800 mb-3">📓 Antes de começar, separe:</p>
          <div className="flex flex-col gap-2">
            {['Caderno', 'Lápis ou caneta', 'Um lugar tranquilo'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-amber-800 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {hasLeaves && (
          <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow p-5">
            <p className="font-semibold text-gray-700 mb-1">Como quer usar suas folhas hoje?</p>
            <p className="text-gray-400 text-xs mb-4">Você pode mudar amanhã</p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => setModoSelecionado('tela')}
                disabled={!podeTela}
                className={`text-left p-4 rounded-xl border-2 transition-colors ${
                  modoSelecionado === 'tela'
                    ? 'border-indigo-500 bg-indigo-50'
                    : podeTela
                    ? 'border-gray-200 hover:border-indigo-300'
                    : 'border-gray-100 opacity-40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">📱 Quero 60 min de celular</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {podeTela
                        ? `Gasta ${LEAF.CUSTO_TELA} 🍃 — sobram ${available - LEAF.CUSTO_TELA} 🍃`
                        : `Faltam ${LEAF.CUSTO_TELA - available} 🍃 para isso`}
                    </p>
                  </div>
                  {modoSelecionado === 'tela' && <span className="text-indigo-500 text-xl">●</span>}
                </div>
              </button>

              <button
                onClick={() => setModoSelecionado('mesada')}
                className={`text-left p-4 rounded-xl border-2 transition-colors ${
                  modoSelecionado === 'mesada'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">💰 Guardar para mesada</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      30 min de celular + folhas acumulam para R$25/semana
                    </p>
                  </div>
                  {modoSelecionado === 'mesada' && <span className="text-green-500 text-xl">●</span>}
                </div>
              </button>
            </div>

            {!modoSelecionado && (
              <p className="text-xs text-gray-400 text-center mt-3">
                Se não escolher, você fica no modo mesada automaticamente
              </p>
            )}
          </motion.div>
        )}

        {/* Botão */}
        <motion.button
          variants={fadeUp}
          whileTap={{ scale: 0.97 }}
          onClick={handleReady}
          disabled={loading}
          className="bg-indigo-600 text-white rounded-2xl py-4 font-bold text-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Preparando...' : 'Estou pronto! →'}
        </motion.button>
      </motion.div>
    </div>
  )
}
