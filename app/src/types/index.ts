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
  descricao: string          // "o que você vai aprender" — exibido antes do gancho
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

// ── Folhas (moeda do app) ────────────────────────────────────────────────────

export type LeafMode = 'tela' | 'mesada' | null

export interface LeafBalance {
  id?: number
  child_id: string
  available: number           // saldo disponível para gastar
  acumulado_semana: number    // folhas poupadas para mesada esta semana
  modo_hoje: LeafMode         // escolha do dia
  minutos_hoje: number        // 30 (mesada) ou 60 (tela)
  data_hoje: string           // ISO date — para resetar diariamente
  semana_inicio: string       // segunda-feira da semana atual
  synced_at?: string
}

export interface LeafTransaction {
  id?: number
  child_id: string
  amount: number              // positivo = ganhou, negativo = gastou
  type: 'session' | 'streak' | 'perfect' | 'topic' | 'upgrade_tela' | 'pagamento_mesada'
  descricao: string
  date: string                // ISO date
}

// Constantes do sistema
export const LEAF = {
  SESSION: 20,
  STREAK: 5,
  PERFECT: 10,       // sessão com ≥80% de acerto
  TOPIC: 50,         // dominar um tópico pela primeira vez
  CUSTO_TELA: 50,    // custo para upgrade de 30→60 min
  MESADA_RATE: 10,   // folhas por R$1
  MESADA_MAX: 250,   // teto semanal (R$25)
  MIN_TELA: 30,      // minutos grátis (modo mesada)
  MAX_TELA: 60,      // minutos ao comprar (modo tela)
} as const

// ── Criança ──────────────────────────────────────────────────────────────────

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
