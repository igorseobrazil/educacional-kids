# Especificação do Produto — App Educativo Gamificado
## Versão definitiva

> Aplicativo de apoio escolar para crianças do 5º ano (Ensino Fundamental I), disponível como PWA e desktop. Construído sobre pedagogia baseada em evidências: repetição espaçada, prática de recuperação, motivação intrínseca e narrativa. Esta versão incorpora integralmente os fundamentos discutidos no projeto — ver Anexo B (rastreabilidade).

---

## 1. Visão geral

### 1.1 O que é
Um aplicativo de estudo que ajuda a criança a **aprender e fixar** o conteúdo escolar — não apenas a se distrair. Funciona como um "treinador de memória" gamificado e narrativo: apresenta o conteúdo em pequenas doses, faz a criança praticar recuperando a informação da memória e agenda revisões nos momentos certos para que o conhecimento se consolide.

### 1.2 O problema que resolve
Crianças hoje estão acostumadas ao ritmo de estímulo do celular, o que torna o estudo tradicional pouco atraente. Ao mesmo tempo, muitos apps "educativos" prendem a atenção mas ensinam pouco — a criança lembra do jogo, não do conteúdo. Este produto busca o equilíbrio: **engajar o suficiente para a criança entrar e permanecer, e estruturar a atividade para que ela realmente assimile** — sem fazê-la se sentir sobrecarregada ou exigida demais.

### 1.3 Para quem
- **Usuário primário:** crianças do 5º ano (~10–11 anos).
- **Usuário secundário:** pais/responsáveis e, futuramente, professores, que acompanham o progresso.
- Projetado para começar com uma criança específica e escalar para outras.

---

## 2. Princípios de design (inegociáveis)

Estes princípios orientam toda decisão de produto. Quando houver conflito, eles vencem.

1. **Aprendizado acima de engajamento.** O sucesso é a criança lembrar do conteúdo daqui a um mês — não os minutos que ela passou no app.
2. **A sessão termina.** Diferente do celular, o app tem um fim claro a cada dia. Sem rolagem infinita, sem conteúdo que nunca acaba.
3. **Psicologia da motivação, nunca manipulação.** O app não usa técnicas subliminares ou padrões manipulativos — além de antiéticos com crianças, eles comprovadamente não funcionam. O engajamento vem de motivação intrínseca, curiosidade e narrativa.
4. **Autonomia.** A criança escolhe caminhos sempre que possível. Escolher reduz a sensação de obrigação.
5. **Esforço no lugar certo.** A energia mental da criança deve ir para pensar no conteúdo — não para decifrar a interface, lidar com instruções confusas ou com ansiedade.
6. **Privacidade primeiro.** Dados de criança são sensíveis. Coleta mínima, armazenamento local sempre que possível, sem anúncios, sem venda de dados.
7. **A criança não precisa estar produtiva o tempo todo.** O app é uma ferramenta de apoio, não um preenchedor de agenda. Tédio, brincadeira livre e descanso fazem parte do desenvolvimento saudável.

---

## 3. Fundamentos pedagógicos

Esta seção explica o "porquê" por trás das funcionalidades. Cada conceito aqui se traduz em algo concreto no produto (ver seção 6).

### 3.1 Atenção é o portão — mas não é aprendizado
Prender a atenção é necessário, porém não suficiente. A criança não aprende o que não percebeu, mas perceber não garante que aprendeu. Existe uma armadilha clássica: a atividade é divertida, a criança adora, mas no fim lembra do **jogo**, não do **conteúdo**. Por isso engajamento e assimilação precisam ser projetados juntos.

### 3.2 As três etapas da memória
- **Codificação** — o conteúdo entra. O que importa é a *profundidade*: o cérebro guarda muito melhor o que processou ativamente (explicar com as próprias palavras, dar exemplos, conectar ao que já sabe) do que o que só passou na frente dele.
- **Consolidação** — o que entrou se fixa com o tempo, sobretudo no **sono** e nas **pausas**. Estudar tudo de uma vez funciona mal; o cérebro precisa de intervalos.
- **Recuperação** — puxar a informação de volta. Lembrar é o que de fato ensina, não reler. Cada recuperação fortalece a memória.

> Em uma frase: a atenção coloca o conteúdo na mesa; a recuperação e o espaçamento o gravam.

### 3.3 Dificuldades desejáveis
Pequenos esforços que parecem incômodos mas geram aprendizado real, e que estruturam o produto:
- **Prática de recuperação** — responder em vez de reler.
- **Espaçamento** — revisar o mesmo conteúdo dias depois, não tudo junto.
- **Intercalação** — misturar tipos de exercício em vez de repetir iguais.
- **Efeito de geração** — tentar responder antes de ver a resposta, mesmo errando.
- **Elaboração** — perguntar "por quê?" e "dê um exemplo seu", conectando o novo ao conhecido.

### 3.4 Motivação intrínseca (Teoria da Autodeterminação)
A criança se engaja sem se sentir pressionada quando sente três coisas:
- **Autonomia** — ela tem escolhas reais.
- **Competência** — percebe que está ficando boa; tarefas na "zona de desafio ideal" (nem tédio, nem frustração).
- **Pertencimento** — aprende junto de alguém que se importa, não sob vigilância.

### 3.5 Mentalidade de crescimento
Elogiar **esforço e estratégia** ("você se esforçou bem nisso"), não a inteligência ("você é tão esperto"). O erro é tratado como parte natural do aprendizado, em ambiente de baixo risco. Isso constrói resiliência e reduz o medo de errar.

### 3.6 O que copiar do celular — de forma saudável
O celular prende porque acerta quatro coisas. O app reaproveita as quatro com propósito educativo: **feedback imediato**, **sensação de controle**, **progresso visível** e **novidade** (variação de formato e de tipo de desafio). A diferença é que aqui elas servem ao aprendizado e a sessão tem fim.

### 3.7 Narrativa
O cérebro presta muito mais atenção — e memoriza muito melhor — quando o conteúdo está dentro de uma **história**: um mistério, uma missão, uma jornada com personagem. A narrativa também abre a atenção pela **curiosidade** (uma pergunta intrigante, uma lacuna a preencher), em vez de pela cobrança.

### 3.8 Cultura e referências do universo da criança
O aprendizado é mais profundo quando o conteúdo novo se conecta ao que a criança **já conhece e vive**. Isso se alinha ao princípio da elaboração (seção 3.3): a criança processa de forma mais ativa quando reconhece o contexto.

Na prática, isso significa usar — sempre que pedagogicamente adequado — referências do universo das crianças de 10–11 anos: gírias do momento, expressões virais, memes, termos de jogos populares, situações cotidianas da idade. Exemplo: uma questão sobre adjetivos pode usar "farmando aura" como contexto, pedindo que a criança identifique ou classifique as palavras.

Cuidados:
- A referência é o **contexto**, não o conteúdo — o que se aprende é gramática, não a gíria.
- Referências culturais envelhecem rápido; o banco de questões deve ser revisável e ter campo de validade temporal.
- Nunca forçar: se a referência distorce ou distrai do objetivo pedagógico, não usar.

---

## 4. Escopo

### 4.1 MVP (primeira versão)
- **Uma matéria:** Língua Portuguesa, 5º ano.
- **Um mecanismo central:** prática de recuperação com repetição espaçada.
- **Trilhas iniciais:** classes de palavras (substantivo, adjetivo) — conteúdo bem definido e fácil de gerar boas questões.
- Camada narrativa básica (jornada com tópicos como etapas).
- PWA instalável, funcionando offline e online.
- Progresso salvo localmente e sincronizado em tempo real entre dispositivos (Supabase Realtime).
- Painel simples para os pais.

### 4.2 Fora do MVP (versões futuras)
- Outros eixos de Português e outras matérias/anos escolares.
- Múltiplos perfis de criança no mesmo app.
- Versão desktop empacotada (Tauri).
- Trilhas geradas/assistidas por IA.
- Modo professor / turma.

---

## 5. Funcionalidades

### 5.1 Mapa de conteúdos e trilhas
O conteúdo da grade de Português do 5º ano (Anexo A) é organizado em **trilhas**, e cada trilha contém **tópicos**. Cada tópico tem pré-requisitos, então o app sugere um caminho mas não obriga — a criança escolhe por onde seguir.

### 5.2 Camada narrativa
O estudo acontece dentro de uma história leve:
- A "árvore do conhecimento" é o mundo que cresce conforme a criança aprende.
- Trilhas são apresentadas como **jornadas/missões**; tópicos são etapas dessa jornada.
- Cada tópico começa com um **gancho de curiosidade** — uma pergunta intrigante ou um pequeno mistério ("Por que será que...?") — em vez de uma ordem de estudar.
- Um tom e, opcionalmente, um personagem-guia recorrente dão continuidade à experiência.
- A narrativa é uma moldura, não uma distração: ela enquadra o conteúdo, sem competir com ele.

### 5.3 Motor de repetição espaçada (núcleo do produto)
Um agendador decide **o que** revisar e **quando**, com base no histórico de acertos e no tempo desde a última revisão. Algoritmo recomendado: **FSRS** (mais moderno e preciso que o clássico SM-2). Para cada item, o app mantém o estado de memória da criança (facilidade, intervalo, próxima revisão, repetições, lapsos).

### 5.4 Prática de recuperação e tipos de questão
A interação principal é a criança **responder**, puxando da memória — não reler. O conteúdo explicativo aparece curto, antes ou depois da tentativa. Tipos de questão:
- Múltipla escolha (com distratores plausíveis).
- Completar lacuna.
- Verdadeiro ou falso com justificativa.
- Ordenar/classificar (ex.: separar substantivos de adjetivos).
- Resposta curta aberta.
- **Questão de elaboração** — "explique com suas palavras" ou "dê um exemplo seu" — em que a criança gera a resposta e a conecta ao que já sabe.
- **Efeito de geração** aplicado de forma transversal: sempre que possível, a criança tenta antes de ver a explicação, mesmo que erre.

### 5.5 Dificuldade adaptativa
O app mede o desempenho e mantém a criança na zona de desafio ideal. Itens muito acertados aparecem menos; itens com erro voltam mais cedo.

### 5.6 Intercalação e novidade
Dentro de uma sessão, o app **mistura tipos de questão e tópicos relacionados**, em vez de repetir 20 exercícios iguais. Além disso, varia deliberadamente o formato de apresentação ao longo do tempo (a "novidade" saudável), para manter o frescor sem cair em estímulo vazio.

### 5.7 Sessão diária
Cada sessão é curta (sugestão: 10–15 itens, ~10–20 minutos) e combina **revisões devidas** + **alguns itens novos**. Características ligadas à consolidação:
- **Limite de itens novos por dia** — evita o "estudar tudo de uma vez", que prejudica a fixação.
- A própria existência da revisão futura é explicada à criança de forma simples ("seu cérebro fixa melhor com pausas").
- Termina com uma tela de encerramento positiva ("Acabou por hoje — ótimo trabalho!"), sem prolongamento.

### 5.8 Gamificação (como tempero)
- **Árvore do conhecimento:** representação visual que cresce conforme tópicos são dominados — celebra o aprendizado em si.
- **XP** por recuperação bem-sucedida, com destaque para *dominar um tópico*, não para pontos abstratos.
- **Conquistas** ligadas a marcos reais de aprendizado.
- **Sequência (streak) gentil:** opcional, com "perdão" embutido (um dia de folga não quebra tudo), para não virar fonte de ansiedade.
- **Sem ranking competitivo** entre crianças — comparação social gera pressão.

### 5.9 Progresso visível
A criança vê claramente o que já domina e o que falta — mapa de tópicos, árvore crescendo. Mostra competência (motivação) sem virar cobrança.

### 5.10 Painel dos pais/responsáveis e pertencimento
Visão de **apoio, não de vigilância**: o que a criança domina, o que está pendente, tempo dedicado, e sugestões de como ajudar. O painel é desenhado para favorecer o pertencimento — sugere momentos de estudar *junto* e celebra conquistas em família, em vez de apenas reportar números. Acesso protegido, separado da área da criança.

### 5.11 Modo offline
Todo o estudo funciona sem internet. Conteúdo e progresso ficam no dispositivo; a sincronização (quando existir) é um extra.

---

## 6. Como a pedagogia vira funcionalidade

| Fundamento pedagógico | Funcionalidade no app |
|---|---|
| Atenção é o portão de entrada | Sessões curtas, interface calma, gancho de curiosidade por tópico |
| Codificação profunda | Questões de elaboração; explicações conectadas ao que a criança já sabe |
| Consolidação | Limite de itens novos/dia; revisões espaçadas; respeito a pausas e sono |
| Recuperação grava a memória | Interação principal = responder, não reler |
| Espaçamento | Motor FSRS agenda revisões nos momentos certos |
| Intercalação | Mistura de tipos de questão e tópicos na sessão |
| Efeito de geração | Tentar responder antes de ver a resposta |
| Elaboração | Tipo de questão "explique com suas palavras / dê um exemplo" |
| Zona de desafio ideal | Dificuldade adaptativa por item |
| Autonomia | Criança escolhe trilhas e ordem |
| Competência visível | Árvore do conhecimento, mapa de domínio |
| Pertencimento | Painel que sugere estudar junto e celebra em família |
| Mentalidade de crescimento | Feedback elogia esforço/estratégia; erro de baixo risco |
| Novidade saudável | Variação deliberada de formatos ao longo do tempo |
| Narrativa | Jornadas/missões, mundo que cresce, personagem-guia |
| Cultura e referências do universo da criança | Questões com contexto de gírias, virais e memes do momento (campo `referencia_cultural` no item) |
| Não sobrecarregar | Sessão finita; limite diário; sem dark patterns |

---

## 7. Modelo de conteúdo (estrutura de dados)

### 7.1 Item de estudo (questão)
- `id` — identificador único
- `topico_id` — tópico ao qual pertence
- `codigo_bncc` — habilidade da BNCC relacionada
- `tipo` — múltipla escolha, lacuna, verdadeiro/falso, ordenação, resposta curta, elaboração
- `dificuldade` — nível 1 a 3
- `enunciado` — a pergunta/comando
- `resposta_correta`
- `distratores` — alternativas erradas plausíveis (quando aplicável)
- `explicacao` — texto curto mostrado após a tentativa
- `dica` — opcional, ajuda intermediária
- `referencia_cultural` — opcional, gíria/viral/meme usado como contexto do enunciado
- `validade_cultural` — opcional, data estimada até quando a referência é relevante

### 7.2 Tópico
- `id`, `nome`, `trilha`, `eixo_bncc`
- `gancho_curiosidade` — pergunta/mistério de abertura
- `pre_requisitos` — lista de tópicos
- `itens` — lista de itens de estudo

### 7.3 Trilha (jornada)
- `id`, `nome`, `materia`, `ano_escolar`
- `narrativa` — moldura/tema da jornada
- `topicos` — lista ordenada

### 7.4 Progresso da criança
- Por item: estado de memória FSRS (facilidade, intervalo, próxima revisão, repetições, lapsos)
- Por tópico: percentual de domínio
- Por sessão: itens vistos, acertos, data

---

## 8. Arquitetura técnica

### 8.1 Estratégia geral
Um único código atende PWA e desktop. A **PWA já é instalável** no computador, funciona offline e atualiza sozinha — para o MVP, a PWA é o app de desktop. Mais adiante, o mesmo código pode ser empacotado com **Tauri** para uma janela nativa mais leve.

### 8.2 Stack sugerida
- **Front-end:** React + Vite.
- **PWA:** service worker para offline + manifest para instalação.
- **Armazenamento local:** IndexedDB (via biblioteca Dexie).
- **Repetição espaçada:** biblioteca FSRS já existente, integrada ao estado local.
- **Estado:** Zustand.
- **Backend / banco:** Supabase (PostgreSQL) — incluído desde o MVP.
- **Autenticação:** Supabase Auth (login dos pais; perfil da criança vinculado).
- **Sincronização real-time:** Supabase Realtime (WebSocket) — atualiza todos os dispositivos em tempo real.
- **Desktop (fase futura):** Tauri reaproveitando o mesmo código.

### 8.3 Padrão offline-first com sincronização em nuvem
Toda escrita vai primeiro ao IndexedDB local (funciona sem internet, sem latência). Quando online, o app sincroniza com o Supabase em background. O Supabase Realtime empurra as atualizações para outros dispositivos via WebSocket. Conflitos resolvidos por timestamp — o estado FSRS mais recente por item vence. Itens pendentes de sync ficam numa fila local e são enviados ao reconectar.

---

## 9. Fluxo do usuário (sessão típica)

1. A criança abre o app e vê a árvore do conhecimento e o "estudo de hoje".
2. Escolhe começar a sessão (ou escolhe uma trilha/jornada específica).
3. Ao entrar num tópico novo, recebe o gancho de curiosidade que abre a história.
4. O app monta a sessão: mistura de revisões devidas + itens novos (respeitando o limite diário).
5. Para cada item: a criança tenta responder → recebe feedback imediato → vê uma explicação curta.
6. Após ~10–15 itens, a sessão termina com uma tela de encerramento positiva.
7. A árvore cresce; o progresso é salvo; o app indica quando será a próxima revisão.

---

## 10. Princípios de UX e design

- **Calma e foco:** poucos elementos por tela, sem excesso de cores e animações que disputam atenção.
- **Linguagem amigável** e adequada à idade, sem ser infantilizada.
- **Feedback construtivo:** o erro é parte do aprendizado; o elogio recai sobre esforço e estratégia.
- **Acessibilidade:** boa legibilidade, contraste adequado, suporte a leitura, alvos de toque grandes.
- **Finitude:** todo fluxo tem início, meio e fim visíveis.
- **Carga cognitiva baixa na interface:** a criança não deve gastar esforço para entender *como* usar o app — só para pensar no conteúdo.

---

## 11. Bem-estar, segurança e privacidade

- **Tempo de tela saudável:** sessões curtas e finitas; limite diário de conteúdo novo; o app *incentiva parar* quando a sessão acaba.
- **Tédio e brincadeira são saudáveis:** o app não busca ocupar todo o tempo livre da criança e não trata pausas como falha.
- **Consolidação respeitada:** o desenho favorece intervalos entre sessões e evita estímulo intenso imediatamente antes de dormir.
- **Notificações contidas:** no máximo um lembrete diário gentil e opcional — nunca avisos que pressionam ou geram culpa.
- **Sem anúncios e sem compras dentro do app.**
- **Sem manipulação:** ausência de dark patterns, mecânicas de vício ou técnicas subliminares.
- **Privacidade infantil:** coleta mínima de dados, armazenamento local por padrão, em conformidade com a LGPD e boas práticas para dados de menores. Sincronização futura deve ser opt-in e transparente para os pais.
- **Sem comparação social:** ausência de rankings públicos entre crianças.

---

## 12. Métricas de sucesso

Medir a coisa certa é parte do design. O foco é **aprendizado**, não tempo de uso.

- **Principal:** retenção do conteúdo — a criança acerta itens revisados após 7 e após 30 dias?
- Percentual de tópicos dominados ao longo do bimestre.
- Consistência saudável de uso (estudou em dias diferentes), **sem** otimizar para "minutos no app".
- Sinais qualitativos: a criança volta por vontade própria? Sente-se menos pressionada?

---

## 13. Roadmap em fases

**Fase 1 — MVP:** PWA offline, Português 5º ano (trilhas de classes de palavras), motor de repetição espaçada, prática de recuperação, camada narrativa básica, árvore de progresso, painel dos pais simples.

**Fase 2 — Consolidação:** demais eixos de Português (toda a grade do Anexo A), tipos de questão adicionais, narrativa e gamificação ampliadas com cuidado, melhorias de UX a partir do uso real.

**Fase 3 — Expansão:** outras matérias e anos escolares; sincronização entre dispositivos e múltiplos perfis; versão desktop com Tauri.

**Fase 4 — Escala:** modo professor/turma; assistência de IA para criação de conteúdo; compartilhamento com outras famílias.

---

## 14. Riscos e considerações

- **A ironia da tela.** A solução é mais uma tela para uma criança que já tem celular. Mitigação: sessão finita, sem rolagem infinita, sem notificações que puxam de volta — o app deve *acabar*.
- **Conteúdo é o trabalho real.** Programar é a parte menor; criar boas questões alinhadas à BNCC, com boas explicações e bons distratores, é o maior esforço.
- **Gamificação ou narrativa em excesso.** Se virarem o foco, a criança estuda pelo enredo/prêmio e não pelo conteúdo. Manter como moldura e tempero.
- **Métrica errada.** Otimizar para engajamento leva a um app viciante e raso. Manter o foco em retenção.
- **Escopo.** A tentação de fazer tudo de uma vez. Começar pequeno e bom é melhor que grande e inacabado.
- **Variação curricular.** A grade do Anexo A segue a BNCC, mas a ordem e a profundidade dos tópicos variam por escola e material — convém validar com a escola da criança.

---

## 15. Próximos passos

1. Validar esta especificação definitiva e ajustar o que for necessário.
2. Redigir o conteúdo inicial: trilhas de substantivo e adjetivo, com questões (incluindo as de elaboração), explicações, distratores e ganchos de curiosidade.
3. Construir o protótipo funcional do MVP (PWA com motor de repetição espaçada, camada narrativa básica e árvore de progresso).
4. Testar com a criança e iterar a partir da observação real.

---

## Anexo A — Grade de Língua Portuguesa, 5º ano

Mapa de conteúdos que alimenta as trilhas do app. Segue os eixos da BNCC.

**1. Leitura e compreensão de textos**
- Ler com fluência e autonomia, em voz alta e silenciosa
- Localizar informações explícitas e inferir implícitas
- Identificar tema, assunto e ideia principal
- Gêneros narrativos: contos, contos de fadas, fábulas, lendas, mitos, crônicas
- Poemas e textos do campo literário
- Textos informativos: notícia, reportagem, verbete, divulgação científica
- Textos instrucionais: receitas, regras de jogo, manuais
- Textos multissemióticos: tirinhas, charges, infográficos, propaganda
- Reconhecer efeitos de sentido simples (comparações, repetições, sentido figurado)

**2. Produção de textos**
- Narrativas ficcionais com enredo, personagens, narrador, tempo e espaço
- Relato de experiência e diário
- Notícia simples
- Texto de divulgação científica curto
- Cartas, e-mails, anúncios e cartazes
- Primeiros textos de opinião
- Planejar, revisar e reescrever o próprio texto
- Organização em parágrafos e uso de pontuação

**3. Oralidade**
- Recontar histórias com sequência e coerência
- Apresentações orais e seminários curtos
- Declamação de poemas e jogral
- Entrevista (formular e responder perguntas)
- Variação linguística: registro formal e informal
- Escuta atenta e respeito aos turnos de fala

**4. Análise linguística e gramática**
- Ortografia: regras frequentes (r/rr, s/ss, dígrafos, m antes de p/b) e palavras de dificuldade
- Acentuação básica e pontuação
- Classes de palavras: substantivo (comum/próprio, gênero, número, grau), adjetivo, artigo, numeral, pronomes pessoais, verbo (introdução — presente, passado, futuro)
- Concordância nominal e verbal (uso na prática)
- Sinônimos e antônimos
- Formação de palavras: noções de prefixo e sufixo
- Coesão: pronomes e conectivos para evitar repetição
- Pontuação no discurso direto

**5. Leitura literária (eixo transversal)**
- Leitura de obras completas e apreciação literária
- Contato com poemas, contos e livros variados
- Escolha de leituras e formação do gosto leitor
- Geralmente 1 a 2 obras por bimestre

---

## Anexo B — Rastreabilidade (de onde veio cada decisão)

Cada ideia discutida no projeto e onde ela foi incorporada nesta especificação.

| Ideia discutida | Onde está na spec |
|---|---|
| Subliminar não funciona; usar psicologia da motivação | Princípio 3; seção 11 |
| Copiar do celular: feedback, controle, progresso, novidade | Seção 3.6; funcionalidades 5.5, 5.6, 5.8, 5.9 |
| Autodeterminação: autonomia, competência, pertencimento | Seção 3.4; funcionalidades 5.1, 5.5, 5.9, 5.10 |
| Reduzir "exigência": baixo risco, sem cobrança | Princípios 5 e 7; seções 10 e 11 |
| Mentalidade de crescimento (elogiar esforço) | Seção 3.5; seção 10 |
| Curiosidade como abertura, não cobrança | Seções 3.7 e 5.2; modelo de dados 7.2 |
| Narrativa: missão, personagem, mistério | Seção 3.7; funcionalidade 5.2 |
| Atenção ≠ aprendizado ("armadilha da diversão") | Seções 3.1 e 14 |
| 3 etapas: codificação, consolidação, recuperação | Seção 3.2; funcionalidades 5.3, 5.4, 5.7 |
| Consolidação por sono e pausas | Seções 3.2, 5.7 e 11 |
| Dificuldades desejáveis (recuperação, espaçamento, intercalação, geração, elaboração) | Seção 3.3; funcionalidades 5.3–5.6 |
| Elaboração como tipo de questão próprio | Funcionalidade 5.4; modelo de dados 7.1 |
| Gamificação como tempero, streak gera ansiedade | Seção 5.8 |
| Ironia da tela; o app deve terminar | Princípio 2; seções 5.7, 11 e 14 |
| Conteúdo é o trabalho real | Seções 14 e 15 |
| Não otimizar por engajamento; medir retenção | Princípio 1; seção 12 |
| Começar pequeno (uma matéria, um mecanismo) | Seção 4 |
| Tédio e brincadeira livre são saudáveis | Princípio 7; seção 11 |
| PWA + desktop, FSRS, IndexedDB, Tauri | Seção 8 |
| Sync online em tempo real desde o MVP (Supabase Realtime) | Seções 4.1, 8.2 e 8.3 |
| Referências culturais/virais como contexto de questões | Seção 3.8; modelo de dados 7.1 |
| Grade de Português do 5º ano | Anexo A |

---

*Documento de especificação — versão definitiva. Base pedagógica: prática de recuperação, repetição espaçada, intercalação, efeito de geração, elaboração, teoria da autodeterminação, mentalidade de crescimento e narrativa.*
