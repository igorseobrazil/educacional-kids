# Roadmap — App Educativo Gamificado

> Referência diária: o que está feito, o que está em andamento e o que vem a seguir.
> Atualizado em: 23/05/2026

---

## Estado atual do produto

**Versão em produção:** https://educacional-kids.vercel.app
**Repositório:** https://github.com/igorseobrazil/educacional-kids

### Conteúdo
- **5 trilhas** | **20 tópicos** | **~154 questões**
- Cobertura da BNCC (5º ano — Língua Portuguesa): ~75%

| Trilha | Tópicos |
|---|---|
| Classes de Palavras | Substantivo, Adjetivo, Artigo, Pronome Pessoal, Verbo, Advérbio |
| Semântica | Sinônimos, Antônimos |
| Ortografia | R e RR, S e SS, M antes de P e B |
| Construção de Palavras | Prefixo e Sufixo |
| Gramática no Uso | Acentuação, Numeral, Concordância, Pontuação, Conectivos |

---

## ✅ Implementado

### Infraestrutura
- [x] PWA offline-first (vite-plugin-pwa + Workbox)
- [x] Firebase Auth (Google + e-mail/senha)
- [x] Firestore com sincronização em tempo real entre dispositivos
- [x] Dexie (IndexedDB) como cache local — funciona offline
- [x] Fila de sync para enviar dados quando reconectar
- [x] Code splitting (firebase / react / fsrs em chunks separados)
- [x] ErrorBoundary — tela amigável em caso de crash
- [x] Banner de atualização PWA (prompt mode + reload forçado)
- [x] PWA full-screen no celular (meta tags iOS, viewport-fit, safe-area)
- [x] Deploy automático no Vercel (repositório público)

### Autenticação e perfis
- [x] Login com Google e e-mail/senha
- [x] Múltiplos filhos por responsável
- [x] Múltiplos responsáveis por filho (código de convite de 6 letras)
- [x] PIN numérico para painel dos pais (protege acesso)
- [x] PIN de aniversário (DDMM) para troca de filho na home
- [x] Migração automática de dados do formato antigo

### Funcionalidades pedagógicas
- [x] Motor FSRS (repetição espaçada) — ts-fsrs
- [x] Sessão diária com limite de itens novos (5/dia)
- [x] Streak de dias consecutivos com perdão (1 dia de folga não zera)
- [x] Próxima revisão exibida na home quando não há pendentes
- [x] GanchoScreen — tela de curiosidade antes do primeiro tópico novo
- [x] Descrição do tópico exibida antes do gancho
- [x] Questão tipo "caderno" — estimula anotação física com data
- [x] Questão tipo "elaboração" — resposta aberta, sem avaliação automática
- [x] Dica (💡) expansível nas questões mais difíceis
- [x] Feedback variado: 5 mensagens diferentes para elaboração + memes
- [x] Tela especial de encerramento na primeira sessão

### UX e animações
- [x] Onboarding de 3 telas para novo usuário (aparece uma vez)
- [x] Animações com Framer Motion (slide suave, pulse no botão, shake no erro)
- [x] Confete (canvas-confetti) apenas em sessões com ≥80% de acerto
- [x] Stagger na tela de encerramento
- [x] Seletor de filho com modal e PIN de aniversário
- [x] Botão "Responsável" discreto na home
- [x] Sem highlight de toque (comportamento de app nativo)

### Painel dos pais
- [x] Progresso geral e por tópico (usa progressPercent, não masteryPercent)
- [x] Histórico de sessões recentes
- [x] "Como você pode ajudar" — dicas pedagógicas
- [x] Adicionar filho, excluir filho, zerar progresso
- [x] Campo de aniversário (PIN da criança) por filho
- [x] Código de convite por filho
- [x] Troca entre filhos sem PIN (painel é do responsável)

### Conteúdo
- [x] 20 tópicos com gancho de curiosidade e descrição próprios
- [x] Tipos de questão: múltipla escolha, lacuna, verdadeiro/falso, elaboração, caderno
- [x] Referências culturais e memes: SIU/CR7, farmando aura, sigma boys, NPC, W/L, Brawl Stars, etc.
- [x] Questão de caderno em cada tópico (conceito-base com data)
- [x] Respostas normalizadas (maiúscula e pontuação final aceitas)
- [x] Dicas nas questões mais difíceis (lacunas e regras abstratas)

### Sistema de Folhas 🍃
- [x] Tipos e constantes (LeafBalance, LeafTransaction, LEAF constants)
- [x] Banco local Dexie v4 (leafBalances, leafTransactions)
- [x] Engine de folhas (ganhar, gastar, escolher modo, pagar mesada)
- [x] Tela de preparação diária (DailyPrep) — checklist + escolha do modo
- [x] Concessão de folhas ao fim da sessão (sessão, streak, desempenho, tópico)
- [x] Breakdown na tela de encerramento explicando o que foi ganho
- [x] Badge 🍃 e 📱min na Home
- [x] Modo tela (gasta 50🍃 → 60min de celular)
- [x] Modo mesada (30min grátis + acumula para R$25/semana)
- [x] Sessão mínima aumentada para 8 questões

---

## 🔲 Pendente — próximas sessões

### Alta prioridade
- [ ] **Gemini Flash** — feedback personalizado para questões de elaboração
- [ ] **Grau dos adjetivos** — comparativo e superlativo (muito cobrado no 5º ano)
- [ ] **Ícones PWA reais** — substituir placeholders do Vite por imagens do app
- [ ] **Ortografia: G/GU, J, X, CH** — dígrafos e casos frequentes de erro

### Média prioridade
- [ ] **Discurso direto e indireto** — reprodução de falas, pontuação específica
- [ ] **Diminutivo e aumentativo** — gatinho/gatão, casinha/casarão
- [ ] **Leitura: tema e ideia principal** — questões de interpretação de texto curto
- [ ] **Tipos de frase** — declarativa, interrogativa, exclamativa, imperativa
- [ ] **Sujeito e predicado** — introdução prática
- [ ] **Variação linguística** — registro formal vs. informal

### Qualidade de conteúdo
- [ ] Mais questões de dificuldade 3 distribuídas ao longo dos tópicos
- [ ] Questões com contexto de parágrafo (não só frases isoladas)
- [ ] Mais memes e referências: Ohio, Delulu, Rizz, Skibidi

### Técnico futuro
- [ ] Tauri — versão desktop nativa (pós-MVP)
- [ ] Múltiplos perfis de filho com seleção na abertura do app
- [ ] Modo professor/turma
- [ ] Notificação push diária (lembrete gentil, opcional)

---

## Decisões técnicas fixadas

| Camada | Tecnologia |
|---|---|
| Front-end | React + Vite + Tailwind v4 |
| PWA | vite-plugin-pwa (prompt mode, skipWaiting) |
| Armazenamento local | Dexie (IndexedDB) |
| Backend / banco | Firebase Firestore |
| Autenticação | Firebase Auth |
| Sincronização real-time | Firestore Realtime |
| Repetição espaçada | ts-fsrs |
| Estado global | Zustand (com persist) |
| Animações | Framer Motion + canvas-confetti |
| Hospedagem | Vercel (free tier, repositório público) |
| AI feedback (pendente) | Google Gemini Flash (free tier) |
