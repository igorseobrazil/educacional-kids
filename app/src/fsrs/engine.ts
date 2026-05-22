import { FSRS, generatorParameters, Rating, createEmptyCard, type Grade } from 'ts-fsrs'
import type { MemoryState } from '../types'

const params = generatorParameters({ enable_fuzz: true })
const fsrs = new FSRS(params)

export { Rating }

export function getEmptyState(questionId: string, childId: string): MemoryState {
  const card = createEmptyCard()
  return {
    question_id: questionId,
    child_id: childId,
    due: card.due.toISOString(),
    stability: card.stability,
    difficulty: card.difficulty,
    elapsed_days: card.elapsed_days,
    scheduled_days: card.scheduled_days,
    reps: card.reps,
    lapses: card.lapses,
    state: card.state,
    learning_steps: card.learning_steps,
  }
}

export function scheduleReview(current: MemoryState, rating: Grade): MemoryState {
  const card = {
    due: new Date(current.due),
    stability: current.stability,
    difficulty: current.difficulty,
    elapsed_days: current.elapsed_days,
    scheduled_days: current.scheduled_days,
    reps: current.reps,
    lapses: current.lapses,
    state: current.state,
    last_review: current.last_review ? new Date(current.last_review) : undefined,
    learning_steps: current.learning_steps,
  }

  const now = new Date()
  const result = fsrs.next(card, now, rating)
  const next = result.card

  return {
    ...current,
    due: next.due.toISOString(),
    stability: next.stability,
    difficulty: next.difficulty,
    elapsed_days: next.elapsed_days,
    scheduled_days: next.scheduled_days,
    reps: next.reps,
    lapses: next.lapses,
    state: next.state,
    learning_steps: next.learning_steps,
    last_review: now.toISOString(),
  }
}

export function isDue(state: MemoryState): boolean {
  return new Date(state.due) <= new Date()
}

export function masteryPercent(states: MemoryState[]): number {
  if (states.length === 0) return 0
  const mastered = states.filter((s) => s.state === 2 && s.stability >= 7).length
  return Math.round((mastered / states.length) * 100)
}
