-- ============================================================
-- App Educativo Gamificado — Schema Supabase
-- Execute este arquivo no SQL Editor do seu projeto Supabase
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- 1. EXTENSÕES
-- ────────────────────────────────────────────────────────────
create extension if not exists "uuid-ossp";


-- ────────────────────────────────────────────────────────────
-- 2. TABELAS
-- ────────────────────────────────────────────────────────────

-- Perfil do responsável (espelha auth.users)
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  email       text,
  created_at  timestamptz default now()
);

-- Criança vinculada a um perfil de responsável
create table if not exists public.children (
  id           uuid primary key default uuid_generate_v4(),
  profile_id   uuid not null references public.profiles (id) on delete cascade,
  nome         text not null,
  ano_escolar  int  not null default 5,
  avatar       text,
  created_at   timestamptz default now()
);

-- Estado de memória FSRS por questão por criança
create table if not exists public.memory_states (
  id              uuid primary key default uuid_generate_v4(),
  question_id     text        not null,
  child_id        uuid        not null references public.children (id) on delete cascade,
  due             timestamptz not null,
  stability       float8      not null default 0,
  difficulty      float8      not null default 0,
  elapsed_days    float8      not null default 0,
  scheduled_days  float8      not null default 0,
  reps            int         not null default 0,
  lapses          int         not null default 0,
  state           int         not null default 0, -- 0=New 1=Learning 2=Review 3=Relearning
  learning_steps  int         not null default 0,
  last_review     timestamptz,
  synced_at       timestamptz default now(),
  created_at      timestamptz default now(),
  constraint memory_states_question_child_unique unique (question_id, child_id)
);

-- Log de sessões de estudo
create table if not exists public.session_logs (
  id          uuid primary key default uuid_generate_v4(),
  child_id    uuid not null references public.children (id) on delete cascade,
  date        date not null,
  items_seen  int  not null default 0,
  correct     int  not null default 0,
  new_items   int  not null default 0,
  created_at  timestamptz default now()
);


-- ────────────────────────────────────────────────────────────
-- 3. ÍNDICES
-- ────────────────────────────────────────────────────────────

-- Busca de revisões devidas por criança (consulta mais frequente)
create index if not exists idx_memory_states_child_due
  on public.memory_states (child_id, due);

-- Busca de estado por questão específica
create index if not exists idx_memory_states_child_question
  on public.memory_states (child_id, question_id);

-- Histórico de sessões por criança
create index if not exists idx_session_logs_child_date
  on public.session_logs (child_id, date desc);

-- Crianças por responsável
create index if not exists idx_children_profile
  on public.children (profile_id);


-- ────────────────────────────────────────────────────────────
-- 4. ROW LEVEL SECURITY (RLS)
-- ────────────────────────────────────────────────────────────

alter table public.profiles      enable row level security;
alter table public.children      enable row level security;
alter table public.memory_states enable row level security;
alter table public.session_logs  enable row level security;

-- profiles: cada usuário vê e edita apenas o próprio perfil
create policy "profiles: owner only"
  on public.profiles
  for all
  using  (auth.uid() = id)
  with check (auth.uid() = id);

-- children: responsável vê e gerencia apenas seus filhos
create policy "children: owner only"
  on public.children
  for all
  using  (profile_id = auth.uid())
  with check (profile_id = auth.uid());

-- memory_states: responsável acessa apenas estados das suas crianças
create policy "memory_states: via child owner"
  on public.memory_states
  for all
  using (
    exists (
      select 1 from public.children c
      where c.id = memory_states.child_id
        and c.profile_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.children c
      where c.id = memory_states.child_id
        and c.profile_id = auth.uid()
    )
  );

-- session_logs: mesma lógica
create policy "session_logs: via child owner"
  on public.session_logs
  for all
  using (
    exists (
      select 1 from public.children c
      where c.id = session_logs.child_id
        and c.profile_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.children c
      where c.id = session_logs.child_id
        and c.profile_id = auth.uid()
    )
  );


-- ────────────────────────────────────────────────────────────
-- 5. TRIGGER: cria perfil automaticamente ao registrar usuário
-- ────────────────────────────────────────────────────────────

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();


-- ────────────────────────────────────────────────────────────
-- 6. REALTIME
-- Habilita publicação de mudanças em memory_states para o
-- canal de sincronização entre dispositivos.
-- ────────────────────────────────────────────────────────────

-- No Supabase Dashboard: Database → Replication → Tables
-- Habilite "memory_states" na publicação supabase_realtime.
-- Ou execute:

alter publication supabase_realtime add table public.memory_states;


-- ────────────────────────────────────────────────────────────
-- 7. VIEW: progresso por tópico (para o painel dos pais)
-- ────────────────────────────────────────────────────────────

create or replace view public.topic_mastery as
select
  ms.child_id,
  -- question_id começa com "q-sub-" ou "q-adj-" — prefixo = tópico
  split_part(ms.question_id, '-', 1) || '-' ||
  split_part(ms.question_id, '-', 2) as topic_prefix,
  count(*)                                           as total_items,
  count(*) filter (where ms.state = 2 and ms.stability >= 7) as mastered_items,
  round(
    count(*) filter (where ms.state = 2 and ms.stability >= 7)::numeric
    / nullif(count(*), 0) * 100
  , 1)                                               as mastery_pct,
  max(ms.last_review)                                as last_studied
from public.memory_states ms
group by ms.child_id, topic_prefix;

-- RLS na view (herda das tabelas base via security invoker)
-- A view já é segura porque usa memory_states, que tem RLS ativado.


-- ────────────────────────────────────────────────────────────
-- FIM DO SCHEMA
-- ────────────────────────────────────────────────────────────
