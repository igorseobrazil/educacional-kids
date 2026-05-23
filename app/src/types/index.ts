export type QuestionType =
  | 'multipla_escolha'
  | 'lacuna'
  | 'verdadeiro_falso'
  | 'resposta_curta'
  | 'elaboracao'
  | 'caderno'

export interface Question {
  id: string
  topico_id: string
  codigo_bncc?: string
  tipo: QuestionType
  dificuldade: 1 | 2 | 3
  enunciado: string
  resposta_correta: string
  distratores?: string[]
  explicacao: string
  dica?: string
  referencia_cultural?: string
  validade_cultural?: string // ISO date
}

export interface Topic {
  id: string
  nome: string
  trilha_id: string
  eixo_bncc?: string
  gancho_curiosidade: string
  pre_requisitos: string[]
  itens: string[] // question ids
}

export interface Trail {
  id: string
  nome: string
  materia: string
  ano_escolar: number
  narrativa: string
  topicos: string[] // topic ids, ordered
}

// FSRS memory state per question per child
export interface MemoryState {
  id?: number
  question_id: string
  child_id: string
  due: string        // ISO date
  stability: number
  difficulty: number
  elapsed_days: number
  scheduled_days: number
  reps: number
  lapses: number
  state: number      // 0=New 1=Learning 2=Review 3=Relearning
  learning_steps: number
  last_review?: string
  synced_at?: string
}

export interface SessionLog {
  id?: number
  child_id: string
  date: string       // ISO date
  items_seen: number
  correct: number
  new_items: number
}

export interface Child {
  id: string
  nome: string
  ano_escolar: number
  avatar?: string
  guardians: string[]   // uids dos responsáveis
  invite_code: string   // código de 6 letras para convidar outro responsável
  birthday?: string     // "DDMM" ex: "1207" = 12 de julho. PIN da criança para trocar de perfil
  created_at?: string
}
