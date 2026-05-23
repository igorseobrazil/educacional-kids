import confetti from 'canvas-confetti'

export function fireCorrect() {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#4f46e5', '#7c3aed', '#10b981', '#f59e0b', '#ef4444'],
    ticks: 200,
  })
}

export function firePerfect() {
  // Para acerto em questão de elaboração ou última questão
  const count = 120
  const defaults = { origin: { y: 0.7 } }

  confetti({ ...defaults, particleCount: count * 0.25, spread: 26, startVelocity: 55 })
  confetti({ ...defaults, particleCount: count * 0.20, spread: 60 })
  confetti({ ...defaults, particleCount: count * 0.35, spread: 100, decay: 0.91, scalar: 0.8 })
  confetti({ ...defaults, particleCount: count * 0.10, spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
  confetti({ ...defaults, particleCount: count * 0.10, spread: 120, startVelocity: 45 })
}
