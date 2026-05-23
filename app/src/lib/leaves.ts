import { db } from '../db/schema'
import { LEAF, type LeafBalance, type LeafMode } from '../types'

function today(): string {
  return new Date().toISOString().slice(0, 10)
}

function mondayOfWeek(): string {
  const d = new Date()
  const day = d.getDay()
  const diff = day === 0 ? -6 : 1 - day
  d.setDate(d.getDate() + diff)
  return d.toISOString().slice(0, 10)
}

export async function getOrCreateBalance(childId: string): Promise<LeafBalance> {
  const existing = await db.leafBalances.where('child_id').equals(childId).first()
  if (existing) {
    // Reseta campos diários se é um dia novo
    if (existing.data_hoje !== today()) {
      const updated: LeafBalance = {
        ...existing,
        modo_hoje: null,
        minutos_hoje: 0,
        data_hoje: today(),
        // Reseta acumulado semanal se é uma semana nova
        acumulado_semana: existing.semana_inicio !== mondayOfWeek() ? 0 : existing.acumulado_semana,
        semana_inicio: mondayOfWeek(),
      }
      await db.leafBalances.put(updated)
      return updated
    }
    return existing
  }

  // Calcula folhas iniciais baseadas no histórico de sessões anteriores
  let initialLeaves = 0
  try {
    const logs = await db.sessionLogs.where('child_id').equals(childId).toArray()
    for (const log of logs) {
      initialLeaves += LEAF.SESSION
      if (log.items_seen > 0 && (log.correct / log.items_seen) >= 0.8) {
        initialLeaves += LEAF.PERFECT
      }
    }
  } catch {
    // Segue com 0 se não conseguir ler o histórico
  }

  const fresh: LeafBalance = {
    child_id: childId,
    available: initialLeaves,
    acumulado_semana: 0,
    modo_hoje: null,
    minutos_hoje: 0,
    data_hoje: today(),
    semana_inicio: mondayOfWeek(),
  }
  await db.leafBalances.add(fresh)

  if (initialLeaves > 0) {
    await db.leafTransactions.add({
      child_id: childId,
      amount: initialLeaves,
      type: 'session',
      descricao: `Folhas iniciais baseadas em sessões anteriores`,
      date: today(),
    })
  }

  return getOrCreateBalance(childId)
}

export async function chooseDailyMode(childId: string, mode: LeafMode): Promise<LeafBalance> {
  const balance = await getOrCreateBalance(childId)

  let updated: LeafBalance = { ...balance, modo_hoje: mode }

  if (mode === 'tela') {
    const newAvailable = balance.available - LEAF.CUSTO_TELA
    updated = {
      ...updated,
      available: Math.max(0, newAvailable),
      minutos_hoje: LEAF.MAX_TELA,
    }
    await db.leafTransactions.add({
      child_id: childId,
      amount: -LEAF.CUSTO_TELA,
      type: 'upgrade_tela',
      descricao: 'Upgrade para 60 min de celular',
      date: today(),
    })
  } else {
    updated = { ...updated, minutos_hoje: LEAF.MIN_TELA }
  }

  await db.leafBalances.put(updated)
  return updated
}

export async function earnLeaves(
  childId: string,
  opts: { streak: number; pct: number; newTopics?: number }
): Promise<{ total: number; balance: LeafBalance; breakdown: string[] }> {
  const balance = await getOrCreateBalance(childId)

  let earned = LEAF.SESSION
  const breakdown: string[] = [`Sessão completa +${LEAF.SESSION}🍃`]

  if (opts.streak > 0) {
    earned += LEAF.STREAK
    breakdown.push(`Dias seguidos +${LEAF.STREAK}🍃`)
  }
  if (opts.pct >= 80) {
    earned += LEAF.PERFECT
    breakdown.push(`Sessão ótima +${LEAF.PERFECT}🍃`)
  }
  if (opts.newTopics && opts.newTopics > 0) {
    const bonus = opts.newTopics * LEAF.TOPIC
    earned += bonus
    breakdown.push(`Tópico dominado +${bonus}🍃`)
  }

  const isMesada = balance.modo_hoje === 'mesada' || balance.modo_hoje === null
  const novoAcumulado = isMesada
    ? Math.min(balance.acumulado_semana + earned, LEAF.MESADA_MAX)
    : balance.acumulado_semana

  const updated: LeafBalance = {
    ...balance,
    available: balance.available + (isMesada ? 0 : earned),
    acumulado_semana: novoAcumulado,
  }

  // No modo mesada as folhas vão direto para o acumulado semanal
  // No modo tela ficam disponíveis para gastar
  if (!isMesada) {
    updated.available = balance.available + earned
  }

  await db.leafBalances.put(updated)
  await db.leafTransactions.add({
    child_id: childId,
    amount: earned,
    type: 'session',
    descricao: breakdown.join(' | '),
    date: today(),
  })

  return { total: earned, balance: updated, breakdown }
}

export async function payAllowance(childId: string): Promise<{ reais: number; balance: LeafBalance }> {
  const balance = await getOrCreateBalance(childId)
  const reais = parseFloat((balance.acumulado_semana / LEAF.MESADA_RATE).toFixed(2))

  await db.leafTransactions.add({
    child_id: childId,
    amount: -balance.acumulado_semana,
    type: 'pagamento_mesada',
    descricao: `Mesada paga: R$${reais.toFixed(2)}`,
    date: today(),
  })

  const updated: LeafBalance = {
    ...balance,
    acumulado_semana: 0,
    semana_inicio: mondayOfWeek(),
  }
  await db.leafBalances.put(updated)
  return { reais, balance: updated }
}

export function toReais(folhas: number): string {
  return `R$${(folhas / LEAF.MESADA_RATE).toFixed(2)}`
}
