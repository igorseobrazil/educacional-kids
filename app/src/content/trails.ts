import type { Trail, Topic, Question } from '../types'

export const trails: Trail[] = [
  {
    id: 'trail-classes-palavras',
    nome: 'Classes de Palavras',
    materia: 'Língua Portuguesa',
    ano_escolar: 5,
    narrativa: 'Uma jornada pelo universo das palavras — descubra os poderes secretos de cada classe e como elas constroem o mundo ao seu redor.',
    topicos: ['topic-substantivo', 'topic-adjetivo', 'topic-artigo', 'topic-pronome', 'topic-verbo', 'topic-adverbio'],
  },
  {
    id: 'trail-semantica',
    nome: 'Semântica',
    materia: 'Língua Portuguesa',
    ano_escolar: 5,
    narrativa: 'As palavras têm segredos escondidos no seu significado. Nessa jornada você vai descobrir como elas se relacionam, se aproximam e se opõem.',
    topicos: ['topic-sinonimos', 'topic-antonimos'],
  },
  {
    id: 'trail-ortografia',
    nome: 'Ortografia',
    materia: 'Língua Portuguesa',
    ano_escolar: 5,
    narrativa: 'Por que "carro" tem dois R e "caro" tem um? Por que "passo" tem dois S e "caso" tem um? Nessa trilha você vai decifrar os segredos da escrita correta.',
    topicos: ['topic-rr', 'topic-ss', 'topic-mpb'],
  },
  {
    id: 'trail-construcao',
    nome: 'Construção de Palavras',
    materia: 'Língua Portuguesa',
    ano_escolar: 5,
    narrativa: 'Uma palavra pode virar várias outras só mudando o começo ou o final. É como montar peças de Lego com a língua portuguesa.',
    topicos: ['topic-formacao'],
  },
  {
    id: 'trail-gramatica-uso',
    nome: 'Gramática no Uso',
    materia: 'Língua Portuguesa',
    ano_escolar: 5,
    narrativa: 'Gramática não é decorar regras — é entender como a língua funciona de verdade. Nessa trilha você vai usar o que sabe para falar e escrever cada vez melhor.',
    topicos: ['topic-acentuacao', 'topic-numeral', 'topic-concordancia', 'topic-pontuacao', 'topic-conectivos'],
  },
]

export const topics: Topic[] = [
  // ── TRAIL: CLASSES DE PALAVRAS ──────────────────────────────────────────────

  {
    id: 'topic-substantivo',
    nome: 'Substantivo',
    trilha_id: 'trail-classes-palavras',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai aprender o que é um substantivo, a diferença entre substantivo comum e próprio, e como reconhecer substantivos abstratos — as palavras que nomeiam o que não se pode tocar.',
    gancho_curiosidade: 'Você sabia que tudo que existe tem um nome — e esse nome é uma palavra especial? Por que será que "amor" e "saudade" são substantivos, mas "feliz" não é?',
    pre_requisitos: [],
    itens: ['q-sub-01','q-sub-02','q-sub-03','q-sub-cad','q-sub-04','q-sub-05','q-sub-06','q-sub-07','q-sub-08'],
  },
  {
    id: 'topic-adjetivo',
    nome: 'Adjetivo',
    trilha_id: 'trail-classes-palavras',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai aprender a identificar adjetivos, entender como eles concordam com os substantivos e usar adjetivos para tornar suas descrições muito mais ricas e precisas.',
    gancho_curiosidade: 'Imagine um jogo sem adjetivos: sem "raro", sem "épico", sem "lendário". Chato, né? Descubra por que os adjetivos são o "farmador de aura" das frases.',
    pre_requisitos: ['topic-substantivo'],
    itens: ['q-adj-01','q-adj-02','q-adj-03','q-adj-cad','q-adj-04','q-adj-05','q-adj-06','q-adj-07','q-adj-08'],
  },
  {
    id: 'topic-artigo',
    nome: 'Artigo',
    trilha_id: 'trail-classes-palavras',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai aprender a diferença entre artigos definidos (o, a, os, as) e indefinidos (um, uma, uns, umas), e entender como essa escolha muda o sentido de qualquer frase.',
    gancho_curiosidade: 'Por que dizemos "o cachorro" e não "um cachorro" quando falamos do nosso pet? Essa pequena diferença muda o sentido inteiro da frase — e quem faz isso é o artigo.',
    pre_requisitos: ['topic-substantivo'],
    itens: ['q-art-01','q-art-02','q-art-03','q-art-cad','q-art-04','q-art-05','q-art-06','q-art-07','q-art-08'],
  },
  {
    id: 'topic-pronome',
    nome: 'Pronome Pessoal',
    trilha_id: 'trail-classes-palavras',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai descobrir as palavras que substituem nomes para evitar repetição — eu, tu, ele, ela, nós, vocês, eles, elas — e aprender a classificá-las por pessoa.',
    gancho_curiosidade: 'Imagina ter que repetir o nome de todo mundo toda vez que fala deles? "João foi à escola. João comeu. João brincou." O pronome resolve isso — descubra como.',
    pre_requisitos: ['topic-substantivo'],
    itens: ['q-pro-01','q-pro-02','q-pro-03','q-pro-cad','q-pro-04','q-pro-05','q-pro-06','q-pro-07','q-pro-08'],
  },
  {
    id: 'topic-verbo',
    nome: 'Verbo',
    trilha_id: 'trail-classes-palavras',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai aprender o que é um verbo, como ele indica ação, estado ou fenômeno da natureza — e como ele muda de forma para mostrar o tempo: passado, presente ou futuro.',
    gancho_curiosidade: 'Sem verbos, nada acontece. Sem verbos, nem essa frase existe. O verbo é a palavra que dá vida e movimento — é ele que faz a história andar.',
    pre_requisitos: ['topic-adjetivo'],
    itens: ['q-vb-01','q-vb-02','q-vb-03','q-vb-cad','q-vb-04','q-vb-05','q-vb-06','q-vb-07','q-vb-08'],
  },

  // ── TRAIL: SEMÂNTICA ────────────────────────────────────────────────────────

  {
    id: 'topic-sinonimos',
    nome: 'Sinônimos',
    trilha_id: 'trail-semantica',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai descobrir palavras diferentes com sentido parecido, entender que sinônimos perfeitos são raros, e aprender a usar essa variedade para tornar seus textos muito mais interessantes.',
    gancho_curiosidade: 'Por que escritores não repetem a mesma palavra o tempo todo? Porque existe uma lista secreta de palavras com o mesmo sentido. Você vai desbloquear essa lista agora.',
    pre_requisitos: ['topic-substantivo', 'topic-adjetivo'],
    itens: ['q-sin-01','q-sin-02','q-sin-03','q-sin-cad','q-sin-04','q-sin-05','q-sin-06','q-sin-07','q-sin-08'],
  },
  {
    id: 'topic-antonimos',
    nome: 'Antônimos',
    trilha_id: 'trail-semantica',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai explorar pares de palavras com significados opostos, entender que uma palavra pode ter antônimos diferentes conforme o contexto, e aprender a usar esse contraste para deixar seus textos mais expressivos.',
    gancho_curiosidade: 'Em todo jogo tem luz e sombra, herói e vilão, ataque e defesa. Na língua portuguesa também — essas palavras opostas têm um nome especial.',
    pre_requisitos: ['topic-sinonimos'],
    itens: ['q-ant-01','q-ant-02','q-ant-03','q-ant-cad','q-ant-04','q-ant-05','q-ant-06','q-ant-07','q-ant-08'],
  },

  // ── TRAIL: ORTOGRAFIA ───────────────────────────────────────────────────────

  {
    id: 'topic-rr',
    nome: 'R e RR',
    trilha_id: 'trail-ortografia',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai aprender quando usar R ou RR, entender a diferença de som entre eles e nunca mais escrever "cachoro" no lugar de "cachorro" ou confundir "moro" com "morro".',
    gancho_curiosidade: 'Por que "caro" e "carro" têm sons diferentes se só mudou uma letra? O R tem dois poderes escondidos — e saber usá-los vai acabar com um dos erros mais comuns na escrita.',
    pre_requisitos: [],
    itens: ['q-rr-01','q-rr-02','q-rr-03','q-rr-cad','q-rr-04','q-rr-05','q-rr-06','q-rr-07','q-rr-08'],
  },
  {
    id: 'topic-ss',
    nome: 'S e SS',
    trilha_id: 'trail-ortografia',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai descobrir por que S entre vogais vira som de Z, quando usar SS para manter o som forte, e como evitar um dos erros ortográficos mais frequentes no português.',
    gancho_curiosidade: 'Por que "passo" tem dois S e "caso" tem um, se os dois têm S no meio? Se o som é parecido, por que a escrita é diferente? Esse é um dos maiores segredos da ortografia.',
    pre_requisitos: ['topic-rr'],
    itens: ['q-ss-01','q-ss-02','q-ss-03','q-ss-cad','q-ss-04','q-ss-05','q-ss-06','q-ss-07','q-ss-08'],
  },

  // ── TRAIL: GRAMÁTICA NO USO ─────────────────────────────────────────────────

  {
    id: 'topic-acentuacao',
    nome: 'Acentuação',
    trilha_id: 'trail-gramatica-uso',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai aprender as três categorias de palavras quanto ao acento — oxítona, paroxítona e proparoxítona — e entender o sistema lógico que decide quando uma palavra precisa de acento escrito.',
    gancho_curiosidade: 'Por que "médico" tem acento e "mesa" não tem? Por que "café" tem acento e "carne" não tem? Existe um sistema lógico que decide quando acentuar — e depois de aprender, você vai conseguir deduzir qualquer palavra.',
    pre_requisitos: [],
    itens: ['q-ac-01','q-ac-02','q-ac-03','q-ac-cad','q-ac-04','q-ac-05','q-ac-06','q-ac-07','q-ac-08'],
  },
  {
    id: 'topic-numeral',
    nome: 'Numeral',
    trilha_id: 'trail-gramatica-uso',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai aprender os quatro tipos de numeral — cardinal (quantidade), ordinal (posição), multiplicativo (múltiplo) e fracionário (parte) — e entender como cada um funciona em contextos reais.',
    gancho_curiosidade: 'Quantos gols o CR7 marcou? Qual posição seu squad ficou no torneio? Metade da pizza sobrou? Todas essas respostas usam numerais — que vão muito além dos números.',
    pre_requisitos: ['topic-substantivo'],
    itens: ['q-num-01','q-num-02','q-num-03','q-num-cad','q-num-04','q-num-05','q-num-06','q-num-07','q-num-08'],
  },
  {
    id: 'topic-concordancia',
    nome: 'Concordância',
    trilha_id: 'trail-gramatica-uso',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai aprender como substantivos, adjetivos e verbos precisam concordar entre si em gênero, número e pessoa — e identificar os erros de concordância mais comuns no dia a dia.',
    gancho_curiosidade: 'Por que "as meninas saíram" soa certo e "as meninas saiu" soa errado? Existe uma regra de combinação entre as palavras — e ela é mais simples do que parece.',
    pre_requisitos: ['topic-substantivo', 'topic-adjetivo', 'topic-verbo'],
    itens: ['q-con-01','q-con-02','q-con-03','q-con-cad','q-con-04','q-con-05','q-con-06','q-con-07','q-con-08'],
  },

  {
    id: 'topic-adverbio',
    nome: 'Advérbio',
    trilha_id: 'trail-classes-palavras',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai aprender a identificar advérbios de modo, tempo, lugar e intensidade — as palavras que dizem como, quando e onde as coisas acontecem, e que podem modificar verbos, adjetivos e até outros advérbios.',
    gancho_curiosidade: 'Sabe quando alguém age "rapidamente", chega "tarde" ou mora "perto"? Todas essas palavras respondem à mesma pergunta — COMO? QUANDO? ONDE? Esse é o poder do advérbio, a classe de palavra que ninguém esquece depois que aprende.',
    pre_requisitos: ['topic-verbo', 'topic-adjetivo'],
    itens: ['q-adv-01','q-adv-02','q-adv-03','q-adv-cad','q-adv-04','q-adv-05','q-adv-06','q-adv-07','q-adv-08'],
  },
  {
    id: 'topic-pontuacao',
    nome: 'Pontuação',
    trilha_id: 'trail-gramatica-uso',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai aprender para que serve cada sinal de pontuação — ponto, vírgula, exclamação, interrogação, reticências e dois pontos — e como eles mudam o tom e o sentido de qualquer frase.',
    gancho_curiosidade: 'Uma vírgula pode mudar tudo: "Vamos comer crianças." vs "Vamos comer, crianças." É a mesma frase — mas o sentido é completamente diferente. Pontuação não é detalhe.',
    pre_requisitos: [],
    itens: ['q-pon-01','q-pon-02','q-pon-03','q-pon-cad','q-pon-04','q-pon-05','q-pon-06','q-pon-07','q-pon-08'],
  },
  {
    id: 'topic-mpb',
    nome: 'M antes de P e B',
    trilha_id: 'trail-ortografia',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai aprender a regra do M antes de P e B — simples, sem exceções — e nunca mais escrever "canpo", "tanbém" ou "conpra".',
    gancho_curiosidade: 'Por que escrevemos "campo" e não "canpo"? Por que "também" e não "tanbém"? Existe uma regra simples que explica tudo — e você nunca mais vai errar depois de aprender.',
    pre_requisitos: ['topic-rr', 'topic-ss'],
    itens: ['q-mpb-01','q-mpb-02','q-mpb-03','q-mpb-cad','q-mpb-04','q-mpb-05','q-mpb-06','q-mpb-07','q-mpb-08'],
  },
  {
    id: 'topic-conectivos',
    nome: 'Conectivos',
    trilha_id: 'trail-gramatica-uso',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai aprender os conectivos de adição, oposição, causa e conclusão — as palavras que transformam frases soltas em um texto coeso e bem argumentado.',
    gancho_curiosidade: 'O que liga "estudei muito" com "tirei nota boa"? O que conecta duas ideias opostas? Existe uma família especial de palavras que costura o texto — e usá-las bem é o segredo dos bons escritores.',
    pre_requisitos: ['topic-concordancia'],
    itens: ['q-lig-01','q-lig-02','q-lig-03','q-lig-cad','q-lig-04','q-lig-05','q-lig-06','q-lig-07','q-lig-08'],
  },

  // ── TRAIL: CONSTRUÇÃO DE PALAVRAS ───────────────────────────────────────────

  {
    id: 'topic-formacao',
    nome: 'Prefixo e Sufixo',
    trilha_id: 'trail-construcao',
    eixo_bncc: 'Análise linguística e gramática',
    descricao: 'Você vai aprender como prefixos e sufixos transformam palavras — criando opostos, indicando profissões, construindo advérbios — e entender que o vocabulário da língua pode ser construído como peças de Lego.',
    gancho_curiosidade: 'Você sabia que uma só palavra pode virar várias outras só mudando o começo ou o final? "Feliz" vira "infeliz", "felizmente", "felicidade"... É como desbloquear habilidades numa palavra.',
    pre_requisitos: ['topic-substantivo', 'topic-adjetivo', 'topic-verbo'],
    itens: ['q-fp-01','q-fp-02','q-fp-03','q-fp-cad','q-fp-04','q-fp-05','q-fp-06','q-fp-07','q-fp-08'],
  },
]

export const questions: Question[] = [

  // ════════════════════════════════════════════════════════════
  // SUBSTANTIVO
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-sub-01', topico_id: 'topic-substantivo', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Qual das palavras abaixo é um substantivo?',
    resposta_correta: 'cidade',
    distratores: ['correr', 'bonito', 'rapidamente'],
    explicacao: 'Substantivo é a palavra que dá nome a seres, lugares, sentimentos e coisas. "Cidade" é o nome de um lugar — portanto é substantivo.',
  },
  {
    id: 'q-sub-02', topico_id: 'topic-substantivo', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: '"Saudade" é um substantivo? Por quê?',
    resposta_correta: 'Sim — é o nome de um sentimento',
    distratores: ['Não — sentimentos não são substantivos', 'Sim — porque termina em "ade"', 'Não — é um verbo disfarçado'],
    explicacao: 'Substantivos nomeiam não só objetos físicos, mas também sentimentos e estados. "Saudade" é o nome de um sentimento, portanto é substantivo.',
  },
  {
    id: 'q-sub-03', topico_id: 'topic-substantivo', tipo: 'lacuna', dificuldade: 1,
    enunciado: 'Substantivo próprio tem a primeira letra em maiúscula e nomeia um ser _______ (único/geral).',
    resposta_correta: 'único',
    explicacao: 'Substantivos próprios identificam um ser específico e único — como "Brasil", "Maria" ou "Amazônia". Por isso começam com maiúscula.',
    dica: 'Pense no seu próprio nome. Só você é você — por isso é único. "Menina" é geral (tem muitas meninas), mas "Helena" é único (é só você).',
  },
  {
    id: 'q-sub-04', topico_id: 'topic-substantivo', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Na frase "O time ganhou o jogo", quantos substantivos existem?',
    resposta_correta: '2 — time e jogo',
    distratores: ['1 — só jogo', '3 — time, ganhou e jogo', '0 — não há substantivos'],
    explicacao: '"Time" e "jogo" são substantivos — nomeiam coisas. "Ganhou" é verbo (ação) e "o" é artigo.',
  },
  {
    id: 'q-sub-05', topico_id: 'topic-substantivo', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: '"Beleza" e "coragem" são substantivos abstratos porque não podemos tocar neles.',
    resposta_correta: 'Verdadeiro',
    explicacao: 'Substantivos abstratos nomeiam ideias, qualidades e sentimentos que não têm existência física — como beleza, coragem, amor e liberdade.',
  },
  {
    id: 'q-sub-06', topico_id: 'topic-substantivo', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual é o plural correto de "cidadão"?',
    resposta_correta: 'cidadãos',
    distratores: ['cidadões', 'cidadães', 'cidadãos e cidadões são os dois corretos'],
    explicacao: 'A maioria dos substantivos terminados em "-ão" fazem plural em "-ãos": cidadão → cidadãos. Outros casos: leão → leões, alemão → alemães.',
  },
  {
    id: 'q-sub-07', topico_id: 'topic-substantivo', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Quais palavras da lista abaixo são SUBSTANTIVOS?\nescola | estudar | felicidade | verde | cachorro | correr',
    resposta_correta: 'escola, felicidade e cachorro',
    distratores: ['estudar, correr e verde', 'escola, verde e cachorro', 'felicidade, correr e escola'],
    explicacao: '"Escola", "felicidade" e "cachorro" nomeiam um lugar, um sentimento e um animal — são substantivos. "Estudar" e "correr" são verbos; "verde" é adjetivo.',
  },
  {
    id: 'q-sub-08', topico_id: 'topic-substantivo', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Escreva com suas próprias palavras: o que é um substantivo? Tente dar um exemplo que você inventou — pode ser de um jogo, série ou coisa que você gosta.',
    resposta_correta: '',
    explicacao: 'Não existe uma única resposta certa aqui. O importante é que você tenha explicado com suas palavras o que é um substantivo e dado um exemplo real para você.',
    referencia_cultural: 'exemplo livre da criança',
  },

  {
    id: 'q-sub-cad', topico_id: 'topic-substantivo', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Substantivo\n\nÉ a palavra que dá nome a seres, lugares, sentimentos e coisas.\n\nExemplos: escola, amor, Brasil, cachorro, alegria.\n\nSubstantivo próprio: nomeia um ser único e começa com maiúscula. Ex: Helena, Rio de Janeiro.\nSubstantivo comum: nomeia qualquer ser da mesma espécie. Ex: menina, cidade.',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },

  // ════════════════════════════════════════════════════════════
  // ADJETIVO
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-adj-01', topico_id: 'topic-adjetivo', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Qual das palavras abaixo é um adjetivo?',
    resposta_correta: 'corajoso',
    distratores: ['coragem', 'correr', 'rapidamente'],
    explicacao: 'Adjetivo é a palavra que caracteriza ou qualifica um substantivo. "Corajoso" descreve uma característica de alguém — portanto é adjetivo.',
  },
  {
    id: 'q-adj-02', topico_id: 'topic-adjetivo', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'No jogo, você encontrou uma espada "lendária". Nessa frase, "lendária" é:',
    resposta_correta: 'Adjetivo — qualifica a espada',
    distratores: ['Substantivo — é o nome da espada', 'Verbo — indica uma ação', 'Advérbio — indica modo'],
    explicacao: '"Lendária" descreve como é a espada. Sempre que uma palavra qualifica (descreve) um substantivo, ela é adjetivo.',
    referencia_cultural: 'item lendário de RPG/jogo',
    validade_cultural: '2028-01-01',
  },
  {
    id: 'q-adj-03', topico_id: 'topic-adjetivo', tipo: 'lacuna', dificuldade: 1,
    enunciado: 'O adjetivo concorda em gênero e número com o _______ que ele qualifica.',
    resposta_correta: 'substantivo',
    explicacao: 'O adjetivo "segue" o substantivo: se o substantivo é feminino plural, o adjetivo também fica feminino plural. Ex: "meninas inteligentes".',
    dica: 'Pense em "gato gordo" → "gata gorda". O adjetivo "gordo" mudou junto com o substantivo. Ele sempre segue quem ele descreve.',
  },
  {
    id: 'q-adj-04', topico_id: 'topic-adjetivo', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Seu personagem está "farmando aura" — todo mundo começa a admirá-lo. Qual adjetivo descreve alguém assim?',
    resposta_correta: 'admirado',
    distratores: ['apressado', 'distraído', 'desorganizado'],
    explicacao: '"Admirado" descreve alguém que as outras pessoas respeitam e olham com admiração — exatamente o que acontece com quem está "farmando aura".',
    referencia_cultural: 'farmando aura',
    validade_cultural: '2027-01-01',
  },
  {
    id: 'q-adj-05', topico_id: 'topic-adjetivo', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: 'Na frase "A menina inteligente resolveu o problema difícil", há dois adjetivos.',
    resposta_correta: 'Verdadeiro',
    explicacao: '"Inteligente" qualifica "menina" e "difícil" qualifica "problema" — dois adjetivos na mesma frase.',
  },
  {
    id: 'q-adj-06', topico_id: 'topic-adjetivo', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual é o feminino correto de "trabalhador"?',
    resposta_correta: 'trabalhadora',
    distratores: ['trabalhadeira', 'trabalhadoresa', 'trabalhadriz'],
    explicacao: 'Adjetivos terminados em "-or" normalmente formam o feminino com "-ora": trabalhador → trabalhadora, protetor → protetora.',
  },
  {
    id: 'q-adj-07', topico_id: 'topic-adjetivo', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Quais palavras da lista são ADJETIVOS?\nfantástico | correr | engraçada | escola | péssimo | liberdade | alto',
    resposta_correta: 'fantástico, engraçada, péssimo e alto',
    distratores: ['correr, escola e liberdade', 'fantástico, escola e alto', 'engraçada, liberdade e péssimo'],
    explicacao: '"Fantástico", "engraçada", "péssimo" e "alto" qualificam substantivos — são adjetivos. "Correr" é verbo; "escola" e "liberdade" são substantivos.',
  },
  {
    id: 'q-adj-08', topico_id: 'topic-adjetivo', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Pense no seu personagem favorito de um jogo, série ou livro. Use pelo menos 3 adjetivos para descrevê-lo e explique por que cada um combina com ele.',
    resposta_correta: '',
    explicacao: 'Não existe resposta única. O importante é ter usado adjetivos reais e explicado como cada um descreve o personagem.',
    referencia_cultural: 'personagem favorito da criança',
  },

  {
    id: 'q-adj-cad', topico_id: 'topic-adjetivo', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Adjetivo\n\nÉ a palavra que qualifica ou caracteriza o substantivo — diz como ele é.\n\nExemplos: bonito, alto, inteligente, azul, corajoso.\n\nO adjetivo concorda com o substantivo em gênero e número:\ngato gordo → gata gorda → gatos gordos → gatas gordas.',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },

  // ════════════════════════════════════════════════════════════
  // ARTIGO
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-art-01', topico_id: 'topic-artigo', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Quais são os artigos definidos em português?',
    resposta_correta: 'o, a, os, as',
    distratores: ['um, uma, uns, umas', 'o, a, um, uma', 'os, as, uns, umas'],
    explicacao: 'Artigos definidos (o, a, os, as) indicam algo específico, já conhecido. Artigos indefinidos (um, uma, uns, umas) indicam algo genérico ou desconhecido.',
  },
  {
    id: 'q-art-02', topico_id: 'topic-artigo', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Na frase "Eu quero um sorvete", o artigo "um" indica que:',
    resposta_correta: 'Qualquer sorvete, não um específico',
    distratores: ['Um sorvete determinado que já foi mencionado', 'Exatamente um sorvete, nem mais nem menos', 'O melhor sorvete da sorveteria'],
    explicacao: 'O artigo indefinido "um" indica algo genérico — qualquer sorvete serve. Se fosse "o sorvete", seria um sorvete específico já conhecido.',
  },
  {
    id: 'q-art-03', topico_id: 'topic-artigo', tipo: 'lacuna', dificuldade: 1,
    enunciado: 'Complete com o artigo correto: "_____ meninas chegaram cedo." (as/umas)',
    resposta_correta: 'as',
    explicacao: '"As meninas" usa artigo definido — indica meninas específicas, já conhecidas de quem fala. "Umas meninas" indicaria meninas quaisquer.',
    dica: 'Pergunta: a frase fala de meninas específicas que a gente já sabe quem são, ou de meninas quaisquer? Se são conhecidas, use "as". Se são qualquer uma, use "umas".',
  },
  {
    id: 'q-art-04', topico_id: 'topic-artigo', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual a diferença entre "Comprei o livro" e "Comprei um livro"?',
    resposta_correta: '"O livro" é específico (já sabemos qual); "um livro" é qualquer livro',
    distratores: [
      'Nenhuma diferença — as duas frases têm o mesmo sentido',
      '"Um livro" é mais educado que "o livro"',
      '"O livro" indica plural e "um livro" indica singular',
    ],
    explicacao: 'Artigo definido (o/a) = algo específico e conhecido. Artigo indefinido (um/uma) = algo genérico ou mencionado pela primeira vez.',
  },
  {
    id: 'q-art-05', topico_id: 'topic-artigo', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: 'O artigo sempre concorda em gênero e número com o substantivo que acompanha.',
    resposta_correta: 'Verdadeiro',
    explicacao: 'O artigo segue o substantivo: "o menino" (masc. sing.), "a menina" (fem. sing.), "os meninos" (masc. pl.), "as meninas" (fem. pl.).',
  },
  {
    id: 'q-art-06', topico_id: 'topic-artigo', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Seu crush mandou mensagem dizendo "vi uma foto sua". Depois falou "amei a foto". Por que mudou de "uma" para "a"?',
    resposta_correta: 'Porque na segunda frase a foto já é conhecida — foi mencionada antes',
    distratores: [
      'Por acidente — as duas formas estão erradas',
      'Porque "a foto" é mais formal que "uma foto"',
      'Porque fotos sempre usam artigo definido',
    ],
    explicacao: 'Na primeira vez que mencionamos algo, usamos artigo indefinido (uma foto). Quando já sabemos de qual estamos falando, usamos artigo definido (a foto).',
    referencia_cultural: 'conversa de mensagem',
    validade_cultural: '2029-01-01',
  },
  {
    id: 'q-art-07', topico_id: 'topic-artigo', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual opção separa corretamente os artigos?\no | uns | a | uma | as | um | os | umas',
    resposta_correta: 'Definidos: o, a, os, as | Indefinidos: um, uma, uns, umas',
    distratores: ['Definidos: o, a, um, uma | Indefinidos: os, as, uns, umas', 'Definidos: o, os, um, uns | Indefinidos: a, as, uma, umas', 'Definidos: o, a, uns, umas | Indefinidos: um, uma, os, as'],
    explicacao: 'Definidos (o, a, os, as) apontam para algo específico. Indefinidos (um, uma, uns, umas) apontam para algo genérico.',
  },
  {
    id: 'q-art-08', topico_id: 'topic-artigo', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Crie duas frases sobre algo que você gosta (game, série, comida...) — uma usando artigo definido e outra usando artigo indefinido. Explique a diferença de sentido entre elas.',
    resposta_correta: '',
    explicacao: 'O importante é perceber que o artigo definido indica algo já conhecido ou específico, enquanto o indefinido indica algo genérico.',
    referencia_cultural: 'tema livre da criança',
  },

  {
    id: 'q-art-cad', topico_id: 'topic-artigo', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Artigo\n\nPalavra que acompanha o substantivo e indica se ele é específico ou genérico.\n\nDefinidos (algo específico): o, a, os, as\nEx: "O cachorro latiu." (um cachorro específico)\n\nIndefinidos (algo genérico): um, uma, uns, umas\nEx: "Vi um cachorro na rua." (qualquer cachorro)',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },

  // ════════════════════════════════════════════════════════════
  // PRONOME PESSOAL
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-pro-01', topico_id: 'topic-pronome', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Qual é a função do pronome pessoal?',
    resposta_correta: 'Substituir ou acompanhar um substantivo para evitar repetição',
    distratores: ['Qualificar um substantivo', 'Indicar uma ação', 'Ligar duas frases'],
    explicacao: 'O pronome pessoal substitui o nome de uma pessoa (ou coisa) para não precisar repeti-lo. Ex: "Maria chegou. Ela estava cansada." — "ela" substitui "Maria".',
  },
  {
    id: 'q-pro-02', topico_id: 'topic-pronome', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Na frase "Nós fomos ao cinema ontem", o pronome pessoal é:',
    resposta_correta: 'nós',
    distratores: ['a gente', 'todos', 'eles'],
    explicacao: '"Nós" é pronome pessoal do plural — representa o sujeito da frase (as pessoas que foram ao cinema).',
  },
  {
    id: 'q-pro-03', topico_id: 'topic-pronome', tipo: 'lacuna', dificuldade: 1,
    enunciado: 'Substitua o nome pelo pronome correto: "Pedro e Ana chegaram tarde. _______ estavam atrasados."',
    resposta_correta: 'Eles',
    explicacao: '"Pedro e Ana" são duas pessoas (masculino + feminino). O pronome que os substitui no plural misto é "eles".',
    dica: 'Pedro = ele. Ana = ela. Juntos, no plural, viram "eles". Em português, quando tem menino e menina juntos, o pronome plural é sempre "eles".',
  },
  {
    id: 'q-pro-04', topico_id: 'topic-pronome', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Quais são os pronomes pessoais do singular?',
    resposta_correta: 'eu, tu, ele, ela',
    distratores: ['eu, nós, ele, elas', 'eu, você, eles, ela', 'eu, tu, vós, ele'],
    explicacao: 'Pronomes pessoais do singular: eu (1ª pessoa), tu/você (2ª pessoa), ele/ela (3ª pessoa). Do plural: nós, vós/vocês, eles/elas.',
  },
  {
    id: 'q-pro-05', topico_id: 'topic-pronome', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: 'Na frase "Você vai à festa?", o pronome "você" está no lugar de uma 2ª pessoa — ou seja, a pessoa com quem estamos falando.',
    resposta_correta: 'Verdadeiro',
    explicacao: '"Você" é pronome de 2ª pessoa — representa a pessoa com quem falamos. "Eu" é 1ª pessoa (quem fala), "ele/ela" é 3ª pessoa (de quem se fala).',
  },
  {
    id: 'q-pro-06', topico_id: 'topic-pronome', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Seu amigo mandou: "Vc viu o post?" e você respondeu "Vi sim, achei ele muito engraçado." O pronome "ele" substitui:',
    resposta_correta: 'o post',
    distratores: ['seu amigo', 'você mesmo', 'o celular'],
    explicacao: '"Ele" é pronome de 3ª pessoa masculino singular — substitui "o post", que é masculino singular.',
    referencia_cultural: 'conversa por mensagem',
    validade_cultural: '2029-01-01',
  },
  {
    id: 'q-pro-07', topico_id: 'topic-pronome', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual opção classifica corretamente os pronomes por pessoa?\neu | elas | tu | nós | ele | vocês',
    resposta_correta: '1ª: eu, nós | 2ª: tu, vocês | 3ª: ele, elas',
    distratores: [
      '1ª: eu, tu | 2ª: nós, vocês | 3ª: ele, elas',
      '1ª: eu, ele | 2ª: tu, vocês | 3ª: nós, elas',
      '1ª: eu | 2ª: tu, nós | 3ª: ele, elas, vocês',
    ],
    explicacao: '1ª pessoa = quem fala (eu, nós). 2ª pessoa = com quem se fala (tu, vocês). 3ª pessoa = de quem se fala (ele, ela, eles, elas).',
  },
  {
    id: 'q-pro-08', topico_id: 'topic-pronome', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Escreva um parágrafo curto sobre seu melhor amigo ou amiga sem usar o nome dele(a) nenhuma vez — só pronomes. Depois explique quais pronomes você usou e por quê.',
    resposta_correta: '',
    explicacao: 'O exercício mostra como os pronomes evitam repetição e tornam o texto mais fluido.',
    referencia_cultural: 'contexto pessoal da criança',
  },

  {
    id: 'q-pro-cad', topico_id: 'topic-pronome', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Pronome Pessoal\n\nSubstitui o nome de uma pessoa para evitar repetição.\n\n1ª pessoa (quem fala): eu, nós\n2ª pessoa (com quem se fala): tu, você, vocês\n3ª pessoa (de quem se fala): ele, ela, eles, elas\n\nEx: "Maria chegou. Ela estava cansada." → "ela" substitui "Maria".',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },

  // ════════════════════════════════════════════════════════════
  // VERBO
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-vb-01', topico_id: 'topic-verbo', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'O que é um verbo?',
    resposta_correta: 'Palavra que indica ação, estado ou fenômeno da natureza',
    distratores: ['Palavra que nomeia seres e coisas', 'Palavra que qualifica o substantivo', 'Palavra que substitui o nome'],
    explicacao: 'O verbo indica ação (correr, estudar), estado (ser, estar, ficar) ou fenômeno da natureza (chover, nevar, amanhecer).',
  },
  {
    id: 'q-vb-02', topico_id: 'topic-verbo', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Qual das palavras abaixo é um verbo?',
    resposta_correta: 'descobriu',
    distratores: ['descoberta', 'descobridor', 'incrível'],
    explicacao: '"Descobriu" indica uma ação que aconteceu — é verbo. "Descoberta" e "descobridor" são substantivos; "incrível" é adjetivo.',
  },
  {
    id: 'q-vb-03', topico_id: 'topic-verbo', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'O verbo muda de forma para indicar quando a ação acontece. Isso se chama flexão de:',
    resposta_correta: 'Tempo (passado, presente, futuro)',
    distratores: ['Lugar (aqui, lá, longe)', 'Tamanho (grande, pequeno)', 'Modo (bem, mal, rápido)'],
    explicacao: 'A flexão de tempo é uma característica do verbo: "corri" (passado), "corro" (presente), "correrei" (futuro).',
    dica: 'Pense no verbo "jogar": "joguei" (ontem), "jogo" (agora), "jogarei" (amanhã). O que mudou entre eles?',
  },
  {
    id: 'q-vb-04', topico_id: 'topic-verbo', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Na frase "Ontem eu joguei 4 horas seguidas", o verbo está no:',
    resposta_correta: 'Passado — a ação já aconteceu',
    distratores: ['Presente — a ação está acontecendo agora', 'Futuro — a ação ainda vai acontecer', 'Não tem verbo nessa frase'],
    explicacao: '"Joguei" está no passado — a palavra "ontem" confirma que a ação já aconteceu. No presente seria "jogo", no futuro "jogarei".',
    referencia_cultural: 'jogar videogame',
    validade_cultural: '2029-01-01',
  },
  {
    id: 'q-vb-05', topico_id: 'topic-verbo', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: '"Chover" e "amanhecer" são verbos mesmo sem indicar a ação de uma pessoa.',
    resposta_correta: 'Verdadeiro',
    explicacao: 'Esses verbos indicam fenômenos da natureza — são chamados de verbos impessoais. Também são verbos: "choveu ontem", "amanheceu cedo".',
  },
  {
    id: 'q-vb-06', topico_id: 'topic-verbo', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual é a forma correta do verbo "ser" no futuro para "eu"?',
    resposta_correta: 'serei',
    distratores: ['sou', 'era', 'fui'],
    explicacao: '"Sou" é presente, "era/fui" é passado, "serei" é futuro. "Eu serei campeão" — a ação ainda vai acontecer.',
  },
  {
    id: 'q-vb-07', topico_id: 'topic-verbo', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Quais palavras da lista são VERBOS?\ncorreu | alegria | estudar | bonito | nevou | amizade | é | rápido',
    resposta_correta: 'correu, estudar, nevou e é',
    distratores: ['alegria, amizade, bonito e rápido', 'correu, alegria, estudar e bonito', 'nevou, amizade, é e rápido'],
    explicacao: '"Correu", "estudar", "nevou" e "é" indicam ação, estado ou fenômeno — são verbos. Os outros são substantivos ou adjetivos.',
  },
  {
    id: 'q-vb-08', topico_id: 'topic-verbo', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Descreva sua rotina de um dia usando pelo menos 5 verbos diferentes — um no passado, um no presente e um no futuro. Depois identifique cada um.',
    resposta_correta: '',
    explicacao: 'O exercício mostra como usamos verbos em diferentes tempos para contar nossa história.',
    referencia_cultural: 'rotina diária da criança',
  },

  {
    id: 'q-vb-cad', topico_id: 'topic-verbo', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Verbo\n\nPalavra que indica ação, estado ou fenômeno da natureza.\n\nAção: correr, estudar, jogar\nEstado: ser, estar, ficar\nFenômeno: chover, nevar, amanhecer\n\nO verbo muda conforme o tempo:\nPassado: joguei | Presente: jogo | Futuro: jogarei',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },

  // ════════════════════════════════════════════════════════════
  // SINÔNIMOS
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-sin-01', topico_id: 'topic-sinonimos', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'O que são sinônimos?',
    resposta_correta: 'Palavras diferentes com sentido igual ou parecido',
    distratores: ['Palavras com sentido oposto', 'Palavras com a mesma escrita', 'Palavras que rimam'],
    explicacao: 'Sinônimos são palavras que têm significado igual ou muito próximo. Ex: "bonito" e "lindo" são sinônimos.',
  },
  {
    id: 'q-sin-02', topico_id: 'topic-sinonimos', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Qual é o sinônimo de "feliz"?',
    resposta_correta: 'alegre',
    distratores: ['triste', 'nervoso', 'cansado'],
    explicacao: '"Alegre" tem sentido muito parecido com "feliz" — ambos indicam um estado de bem-estar emocional positivo.',
  },
  {
    id: 'q-sin-03', topico_id: 'topic-sinonimos', tipo: 'lacuna', dificuldade: 1,
    enunciado: '"Inteligente" e "_______ " são sinônimos porque têm sentido parecido. (esperto/preguiçoso)',
    resposta_correta: 'esperto',
    explicacao: '"Esperto" e "inteligente" têm sentido muito próximo — ambos descrevem alguém com boa capacidade de entender as coisas.',
    dica: 'Sinônimo = mesma ideia, palavra diferente. Qual das duas opções tem sentido parecido com "inteligente": alguém que entende tudo rápido, ou alguém que não gosta de fazer nada?',
  },
  {
    id: 'q-sin-04', topico_id: 'topic-sinonimos', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Na redação, seu professor pediu para você não repetir a palavra "disse" toda hora. Qual sinônimo você poderia usar?',
    resposta_correta: 'afirmou',
    distratores: ['perguntou', 'calou', 'ignorou'],
    explicacao: '"Afirmou" tem sentido próximo de "disse" quando queremos indicar que alguém falou algo com certeza. Outros sinônimos: "falou", "declarou", "comentou".',
  },
  {
    id: 'q-sin-05', topico_id: 'topic-sinonimos', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: 'Sinônimos perfeitos — com exatamente o mesmo sentido em qualquer situação — são muito raros na língua portuguesa.',
    resposta_correta: 'Verdadeiro',
    explicacao: 'Na maioria das vezes, sinônimos têm o sentido parecido mas não idêntico. "Casa" e "lar", por exemplo, são próximos mas "lar" tem uma carga emocional que "casa" não tem.',
  },
  {
    id: 'q-sin-06', topico_id: 'topic-sinonimos', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Seu personagem favorito é "destemido". Qual sinônimo você usaria para descrevê-lo de outro jeito?',
    resposta_correta: 'corajoso',
    distratores: ['medroso', 'cuidadoso', 'tímido'],
    explicacao: '"Corajoso" e "destemido" são sinônimos — ambos descrevem alguém que não tem medo de enfrentar desafios.',
    referencia_cultural: 'personagem de jogo ou série',
    validade_cultural: '2029-01-01',
  },
  {
    id: 'q-sin-07', topico_id: 'topic-sinonimos', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual opção forma corretamente pares de sinônimos?\nrápido | triste | iniciar | veloz | melancólico | começar',
    resposta_correta: 'rápido/veloz, triste/melancólico, iniciar/começar',
    distratores: [
      'rápido/melancólico, triste/veloz, iniciar/começar',
      'rápido/começar, triste/iniciar, veloz/melancólico',
      'rápido/triste, veloz/melancólico, iniciar/começar',
    ],
    explicacao: '"Rápido/veloz", "triste/melancólico" e "iniciar/começar" são pares de sinônimos — cada par tem sentido parecido.',
  },
  {
    id: 'q-sin-08', topico_id: 'topic-sinonimos', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Escolha 3 palavras que você usa muito no dia a dia e encontre um sinônimo para cada uma. Escreva uma frase usando cada sinônimo.',
    resposta_correta: '',
    explicacao: 'Conhecer sinônimos enriquece o vocabulário e ajuda a escrever textos mais variados e interessantes.',
    referencia_cultural: 'vocabulário cotidiano da criança',
  },

  {
    id: 'q-sin-cad', topico_id: 'topic-sinonimos', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Sinônimos\n\nSão palavras diferentes com sentido igual ou parecido.\n\nExemplos:\nfeliz = alegre\nrápido = veloz\niniciar = começar\ntriste = melancólico\n\nUsar sinônimos deixa o texto mais variado e interessante.',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },

  // ════════════════════════════════════════════════════════════
  // ANTÔNIMOS
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-ant-cad', topico_id: 'topic-antonimos', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Antônimos\n\nSão palavras com sentido oposto.\n\nExemplos:\namor ≠ ódio\nchegada ≠ partida\ngeneroso ≠ egoísta\nantigo ≠ moderno\nvitória ≠ derrota\n\nUma mesma palavra pode ter antônimos diferentes conforme o contexto.',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },
  {
    id: 'q-ant-01', topico_id: 'topic-antonimos', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'O que são antônimos?',
    resposta_correta: 'Palavras com sentido oposto',
    distratores: ['Palavras com sentido igual', 'Palavras que rimam', 'Palavras com a mesma origem'],
    explicacao: 'Antônimos são palavras com significados opostos. Ex: "quente" e "frio", "dia" e "noite", "amor" e "ódio".',
  },
  {
    id: 'q-ant-02', topico_id: 'topic-antonimos', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Qual é o antônimo de "forte"?',
    resposta_correta: 'fraco',
    distratores: ['poderoso', 'grande', 'veloz'],
    explicacao: '"Fraco" é o oposto de "forte". "Poderoso" e "grande" têm sentido parecido com forte — são sinônimos, não antônimos.',
  },
  {
    id: 'q-ant-03', topico_id: 'topic-antonimos', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Qual é o antônimo de "chegada"?',
    resposta_correta: 'partida',
    distratores: ['viagem', 'passagem', 'caminho'],
    explicacao: '"Partida" é o oposto de "chegada" — uma indica o início do movimento, a outra indica o fim.',
    dica: 'Pensa no aeroporto: quando o avião pousa, é uma chegada. Quando ele decola e vai embora, é uma _______.',
  },
  {
    id: 'q-ant-04', topico_id: 'topic-antonimos', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Em muitos jogos existe o lado "luz" e o lado "_______". Qual é o antônimo de "luz" nesse contexto?',
    resposta_correta: 'trevas',
    distratores: ['brilho', 'claridade', 'sol'],
    explicacao: '"Trevas" é o antônimo de "luz" no sentido figurado usado em narrativas de fantasia. "Brilho" e "claridade" são sinônimos de luz.',
    referencia_cultural: 'jogos de fantasia / RPG',
    validade_cultural: '2029-01-01',
  },
  {
    id: 'q-ant-05', topico_id: 'topic-antonimos', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: 'Uma palavra pode ter mais de um antônimo dependendo do contexto em que é usada.',
    resposta_correta: 'Verdadeiro',
    explicacao: 'A palavra "frio" pode ter antônimos diferentes: "quente" (temperatura), "caloroso" (afeto), "animado" (comportamento). O contexto define o melhor antônimo.',
  },
  {
    id: 'q-ant-06', topico_id: 'topic-antonimos', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual é o antônimo de "generoso"?',
    resposta_correta: 'egoísta',
    distratores: ['bondoso', 'solidário', 'gentil'],
    explicacao: '"Egoísta" descreve quem só pensa em si mesmo — o oposto de "generoso", que é quem gosta de ajudar e compartilhar.',
  },
  {
    id: 'q-ant-07', topico_id: 'topic-antonimos', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual opção forma corretamente pares de antônimos?\namor | antigo | moderno | ódio | vitória | derrota',
    resposta_correta: 'amor/ódio, antigo/moderno, vitória/derrota',
    distratores: [
      'amor/moderno, antigo/derrota, vitória/ódio',
      'amor/vitória, antigo/ódio, moderno/derrota',
      'amor/derrota, antigo/vitória, moderno/ódio',
    ],
    explicacao: 'Cada par tem sentidos opostos: amor/ódio (sentimentos), antigo/moderno (época), vitória/derrota (resultado).',
  },
  {
    id: 'q-ant-08', topico_id: 'topic-antonimos', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Pense em um herói e um vilão — pode ser de qualquer história que você conhece. Liste 4 características do herói e escreva o antônimo de cada uma para descrever o vilão.',
    resposta_correta: '',
    explicacao: 'O exercício mostra como antônimos criam contraste — e é exatamente isso que escritores usam para tornar histórias mais interessantes.',
    referencia_cultural: 'herói e vilão de qualquer história',
  },

  // ════════════════════════════════════════════════════════════
  // ADVÉRBIO
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-adv-01', topico_id: 'topic-adverbio', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'O advérbio é a palavra que modifica o verbo, o adjetivo ou outro advérbio. Ele responde às perguntas:',
    resposta_correta: 'Como? Quando? Onde? Quanto?',
    distratores: ['Quem? O quê? Para quem?', 'Qual? Quantos? De que tipo?', 'Por quê? Para quê? Com quem?'],
    explicacao: 'Advérbio indica circunstâncias da ação: modo (como?), tempo (quando?), lugar (onde?), intensidade (quanto?). Ex: "ela chegou TARDE (quando?) e falou BAIXO (como?)."',
  },
  {
    id: 'q-adv-02', topico_id: 'topic-adverbio', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Na frase "O jogador chegou TARDE ao treino", "tarde" é advérbio de:',
    resposta_correta: 'Tempo — indica quando aconteceu',
    distratores: ['Modo — indica como aconteceu', 'Lugar — indica onde aconteceu', 'Intensidade — indica o quanto'],
    explicacao: '"Tarde" responde a pergunta "quando?" — é advérbio de tempo. Se fosse "o jogador chegou LENTAMENTE", seria advérbio de modo (como?).',
  },
  {
    id: 'q-adv-03', topico_id: 'topic-adverbio', tipo: 'lacuna', dificuldade: 1,
    enunciado: 'A palavra "rapidamente" vem de "rápido" + sufixo "-mente". Esse sufixo transforma adjetivos em _______.',
    resposta_correta: 'advérbios',
    explicacao: 'O sufixo "-mente" transforma adjetivos em advérbios de modo: rápido → rapidamente, feliz → felizmente, silencioso → silenciosamente. Eles dizem COMO algo acontece.',
    dica: 'Pensa: "ela saiu silenciosamente". COMO ela saiu? Silenciosamente. Palavras terminadas em -mente quase sempre são advérbios de modo.',
  },
  {
    id: 'q-adv-cad', topico_id: 'topic-adverbio', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Advérbio\n\nPalavra que modifica o verbo, o adjetivo ou outro advérbio.\n\nTipos principais:\nMODO (como?): bem, mal, rapidamente, devagar, assim\nTEMPO (quando?): hoje, ontem, sempre, nunca, tarde, cedo\nLUGAR (onde?): aqui, lá, perto, longe, fora, dentro\nINTENSIDADE (quanto?): muito, pouco, bastante, demais, tão\nAFIRMAÇÃO: sim, certamente, realmente\nNEGAÇÃO: não, nunca, jamais\n\nDica de ouro: sufixo -mente = quase sempre advérbio de modo',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },
  {
    id: 'q-adv-04', topico_id: 'topic-adverbio', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Seu amigo saiu "silenciosamente" do grupo do WhatsApp. Nessa frase, "silenciosamente" é advérbio de:',
    resposta_correta: 'Modo — indica COMO ele saiu',
    distratores: ['Tempo — indica QUANDO ele saiu', 'Lugar — indica ONDE ele saiu', 'Negação — indica que ele NÃO saiu'],
    explicacao: '"Silenciosamente" responde "como?" — ele saiu de que forma? Silenciosamente. Sempre que a palavra responder "como?", é advérbio de modo.',
    referencia_cultural: 'sair do grupo silenciosamente',
    validade_cultural: '2030-01-01',
  },
  {
    id: 'q-adv-05', topico_id: 'topic-adverbio', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: '"Muito" pode ser advérbio quando modifica um adjetivo, como em "muito bonito".',
    resposta_correta: 'Verdadeiro',
    explicacao: '"Muito" modifica o adjetivo "bonito" indicando intensidade — é advérbio de intensidade. Outros: "bastante bonito", "tão bonito", "pouco bonito". O advérbio não qualifica o substantivo, mas qualifica o adjetivo.',
  },
  {
    id: 'q-adv-06', topico_id: 'topic-adverbio', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual é a diferença entre usar "rápido" (adjetivo) e "rapidamente" (advérbio)?',
    resposta_correta: '"Rápido" qualifica substantivos; "rapidamente" modifica verbos',
    distratores: ['Não há diferença — têm o mesmo uso', '"Rápido" modifica verbos; "rapidamente" qualifica substantivos', '"Rapidamente" é mais formal e educado que "rápido"'],
    explicacao: '"O carro rápido" → rápido qualifica o substantivo "carro" (adjetivo). "O carro andou rapidamente" → rapidamente diz como o verbo "andou" aconteceu (advérbio). Essa distinção é fundamental.',
  },
  {
    id: 'q-adv-07', topico_id: 'topic-adverbio', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Em qual frase "bem" está funcionando como ADVÉRBIO?',
    resposta_correta: 'Ela cantou bem no show.',
    distratores: ['O bem e o mal existem em todo lugar.', 'Ela fez o bem para todos.', 'Bem-vinda à nossa escola!'],
    explicacao: '"Ela cantou bem" — "bem" modifica o verbo "cantou", dizendo COMO ela cantou. É advérbio de modo. Nas outras frases, "bem" é substantivo (o bem e o mal) ou parte de expressão (bem-vinda).',
  },
  {
    id: 'q-adv-08', topico_id: 'topic-adverbio', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Escreva 5 frases sobre sua rotina usando advérbios diferentes. Use pelo menos: 1 de modo, 1 de tempo e 1 de lugar. Depois identifique cada advérbio e escreva que tipo é.',
    resposta_correta: '',
    explicacao: 'Reconhecer e usar advérbios no próprio texto é a habilidade que vai melhorar suas redações para sempre — e é muito mais eficaz do que decorar definições.',
  },

  // ════════════════════════════════════════════════════════════
  // PONTUAÇÃO
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-pon-01', topico_id: 'topic-pontuacao', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: '"Vamos comer crianças." vs "Vamos comer, crianças." A vírgula muda tudo. Nesse caso ela serve para:',
    resposta_correta: 'Separar o vocativo — a pessoa a quem a frase é dirigida',
    distratores: ['Indicar que a frase é uma pergunta', 'Mostrar que a frase é uma ordem', 'Fazer uma pausa aleatória no texto'],
    explicacao: 'O vocativo é quando chamamos alguém pelo nome ou categoria. A vírgula antes ou depois do vocativo é obrigatória: "Vamos comer, crianças." — a vírgula separa "crianças" do resto, mostrando que estamos falando COM elas, não sobre elas.',
  },
  {
    id: 'q-pon-02', topico_id: 'topic-pontuacao', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'O ponto de exclamação (!) é usado em frases que expressam:',
    resposta_correta: 'Emoção intensa — alegria, susto, surpresa, ordem ou euforia',
    distratores: ['Dúvida ou pergunta', 'Afirmação neutra e tranquila', 'Pensamento incompleto ou suspense'],
    explicacao: 'Exclamação = emoção forte. "SIU!" (euforia), "Cuidado!" (alerta), "Que lindo!" (admiração). O ponto de interrogação (?) é para perguntas. Reticências (...) para suspense.',
    referencia_cultural: 'SIU do CR7',
    validade_cultural: '2030-01-01',
  },
  {
    id: 'q-pon-03', topico_id: 'topic-pontuacao', tipo: 'lacuna', dificuldade: 1,
    enunciado: 'Cristiano Ronaldo marcou o gol histórico e gritou "SIU___". Qual sinal de pontuação termina essa comemoração?',
    resposta_correta: '!',
    explicacao: 'O ponto de exclamação (!) é o sinal certo para a euforia do "SIUUU!". A exclamação indica emoção intensa — e poucos momentos na vida são mais intensos que um gol histórico.',
    dica: 'Pensa no volume e na emoção do SIU. Ponto final (.) seria neutro. Interrogação (?) seria uma pergunta. A emoção forte pede o sinal da emoção forte: !',
    referencia_cultural: 'SIUUU do CR7',
    validade_cultural: '2030-01-01',
  },
  {
    id: 'q-pon-cad', topico_id: 'topic-pontuacao', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Pontuação\n\n. Ponto final → termina afirmações\nA aula acabou.\n\n? Interrogação → faz perguntas\nVocê estudou?\n\n! Exclamação → emoção intensa\nSIUUU!\n\n, Vírgula → separa elementos\n- Lista: maçã, banana, uva\n- Vocativo: Helena, venha aqui!\n- Explicação: O Brasil, meu país, é lindo.\n\n... Reticências → suspense ou pausa\nEu ia falar... mas prefiro não.\n\n: Dois pontos → introduz fala ou lista\nEla disse: "Vamos embora."',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },
  {
    id: 'q-pon-04', topico_id: 'topic-pontuacao', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Sua amiga mandou "ok." e você ficou em dúvida se ela estava brava. Se ela mandasse "ok!", a diferença seria:',
    resposta_correta: '"ok." soa frio/neutro; "ok!" demonstra entusiasmo ou boa disposição',
    distratores: ['Não há diferença — são exatamente a mesma coisa', '"ok." é mais formal e educado', '"ok!" é mais correto gramaticalmente'],
    explicacao: 'Pontuação carrega tom emocional — mesmo em palavras curtas. No chat, isso importa muito: ponto final pode soar seco ou irritado; exclamação traz energia e simpatia. Escritores usam isso intencionalmente.',
    referencia_cultural: 'mensagens no celular / tom de texto',
    validade_cultural: '2030-01-01',
  },
  {
    id: 'q-pon-05', topico_id: 'topic-pontuacao', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: 'As reticências (...) indicam apenas que a frase foi cortada — não têm outro uso.',
    resposta_correta: 'Falso',
    explicacao: 'As reticências têm vários usos: pensamento incompleto ("Eu ia dizer..."), suspense narrativo ("Ela abriu a porta e..."), pausa hesitante ("Bem... não sei.") e ironia ou subentendido. São muito expressivas!',
  },
  {
    id: 'q-pon-06', topico_id: 'topic-pontuacao', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Em qual frase a vírgula está sendo usada CORRETAMENTE?',
    resposta_correta: 'Helena, você estudou para a prova?',
    distratores: ['O gato, pulou o muro rapidamente.', 'Ela foi, ao mercado comprar pão.', 'O Brasil tem muitas, cidades lindas.'],
    explicacao: 'A vírgula separa o vocativo "Helena" do resto da frase — uso correto. Não se usa vírgula entre sujeito e verbo ("gato, pulou"), entre verbo e objeto ("foi, ao mercado") ou dentro de sintagmas ("muitas, cidades").',
  },
  {
    id: 'q-pon-07', topico_id: 'topic-pontuacao', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Os dois pontos (:) são usados para introduzir:',
    resposta_correta: 'Discurso direto (fala de alguém) ou enumeração de itens',
    distratores: ['Perguntas diretas', 'Emoção ou surpresa', 'Pausa e suspense no texto'],
    explicacao: '"Ela disse: vou embora." (discurso direto). "Comprei: arroz, feijão e macarrão." (enumeração). Os dois pontos anunciam o que vem a seguir — são uma espécie de "olha o que vem aí:".',
  },
  {
    id: 'q-pon-08', topico_id: 'topic-pontuacao', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Escreva um diálogo curto entre dois personagens — de jogo, série ou situação real. Use pelo menos: ponto final, exclamação, interrogação, vírgula e dois pontos. Depois explique por que usou cada sinal naquele lugar.',
    resposta_correta: '',
    explicacao: 'Diálogos são onde a pontuação mais importa — cada sinal muda o tom da fala. Escritores escolhem a pontuação com tanto cuidado quanto escolhem as palavras.',
  },

  // ════════════════════════════════════════════════════════════
  // M ANTES DE P E B
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-mpb-01', topico_id: 'topic-mpb', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Antes das letras P e B, sempre usamos M, nunca N. Qual palavra está escrita CORRETAMENTE?',
    resposta_correta: 'também',
    distratores: ['tanbém', 'tãmbem', 'también'],
    explicacao: '"Também" tem M antes do B: tam-BÉM. Nunca "tanbém" — N não aparece antes de B em português. A regra é simples: P e B fecham os lábios, M também fecha — por isso combinam.',
  },
  {
    id: 'q-mpb-02', topico_id: 'topic-mpb', tipo: 'lacuna', dificuldade: 1,
    enunciado: 'O Brasil é ca_peão mundial de futebol! (n/m)',
    resposta_correta: 'm',
    explicacao: '"Campeão" tem M antes do P: cam-PE-ão. Antes de P, sempre M — nunca "canpeão".',
    dica: 'Antes de P, use M. Antes de B, use M. A letra depois do espaço vai te dizer: é P ou B? Então a letra antes é M!',
  },
  {
    id: 'q-mpb-03', topico_id: 'topic-mpb', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Qual palavra está escrita CORRETAMENTE?',
    resposta_correta: 'samba',
    distratores: ['sanba', 'samba (correto)', 'zambo'],
    explicacao: '"Samba" tem M antes do B: sam-BA. "Sanba" seria errado — N não aparece antes de B.',
  },
  {
    id: 'q-mpb-cad', topico_id: 'topic-mpb', tipo: 'caderno', dificuldade: 1,
    enunciado: 'M antes de P e B\n\nRegra: antes das letras P e B, sempre use M, nunca N.\n\nM antes de P:\ncampo, campeão, compra, sempre, tempo, exemplo, trampolim\n\nM antes de B:\nsamba, também, bombom, sombra, embargo, colombo\n\nComo lembrar?\nP e B = lábios que se fecham (consoantes bilabiais)\nM = também fecha os lábios ao pronunciar\nPor isso M aparece naturalmente antes de P e B!',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },
  {
    id: 'q-mpb-04', topico_id: 'topic-mpb', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Em qual frase TODAS as palavras estão escritas corretamente?',
    resposta_correta: 'O campeão também jogou no campo.',
    distratores: ['O canpeão tanbém jogou no canpo.', 'O campeão tanbém jogou no campo.', 'O canpeão também jogou no campo.'],
    explicacao: '"Campeão" (M antes de P), "também" (M antes de B), "campo" (M antes de P) — todos corretos. Nas outras opções há N onde deveria ser M.',
  },
  {
    id: 'q-mpb-05', topico_id: 'topic-mpb', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: 'Antes da letra "p", devemos sempre usar "m", não "n". Ex: com-PRA (não "conpra").',
    resposta_correta: 'Verdadeiro',
    explicacao: '"Compra" (M antes de P), "sempre" (M antes de P), "exemplo" (M antes de P) — a regra não tem exceções. Nunca "conpra", "senpre" ou "exenplo".',
  },
  {
    id: 'q-mpb-06', topico_id: 'topic-mpb', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual palavra tem N onde deveria ter M?',
    resposta_correta: 'tanbém',
    distratores: ['também', 'campo', 'samba'],
    explicacao: '"Tanbém" está errado — antes do B, usamos M: tam-BÉM. "Também", "campo" e "samba" já estão corretos.',
  },
  {
    id: 'q-mpb-07', topico_id: 'topic-mpb', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Em qual opção TODAS as palavras estão corretas?',
    resposta_correta: 'sombra, compra, também',
    distratores: ['sonbra, conpra, também', 'sombra, compra, tanbém', 'sonbra, conpra, tanbém'],
    explicacao: '"Sombra" (M antes de B), "compra" (M antes de P), "também" (M antes de B) — os três com M. As outras opções têm N indevido.',
  },
  {
    id: 'q-mpb-08', topico_id: 'topic-mpb', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Escreva um parágrafo curto sobre futebol, música, culinária ou qualquer tema que você goste, usando pelo menos 5 palavras com M antes de P ou B. Depois sublinha cada uma e confirma que estão certas.',
    resposta_correta: '',
    explicacao: 'Escrever com atenção à ortografia e depois revisar é o hábito que separa escritores bons dos ótimos.',
  },

  // ════════════════════════════════════════════════════════════
  // CONECTIVOS
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-lig-01', topico_id: 'topic-conectivos', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Conectivos são palavras que:',
    resposta_correta: 'Ligam ideias, orações ou partes do texto',
    distratores: ['Qualificam os substantivos descrevendo características', 'Indicam ação ou estado de alguém', 'Substituem nomes para evitar repetição'],
    explicacao: 'Conectivos cosuram o texto. Sem eles, as frases ficariam soltas e sem relação entre si. "Estudei muito E aprendi." / "Estudei muito MAS travei na prova." — o conectivo muda tudo.',
  },
  {
    id: 'q-lig-02', topico_id: 'topic-conectivos', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: '"Estudei muito, MAS não passei na prova." O conectivo "mas" indica:',
    resposta_correta: 'Oposição — algo contrário ao esperado',
    distratores: ['Causa — explica por que não passou', 'Conclusão — o resultado final do estudo', 'Adição — mais uma informação'],
    explicacao: '"Mas" sempre introduz algo contrário: estudar muito deveria resultar em passar — mas não passou. É o conectivo da contradição, do obstáculo inesperado.',
  },
  {
    id: 'q-lig-03', topico_id: 'topic-conectivos', tipo: 'lacuna', dificuldade: 1,
    enunciado: 'Complete com o conectivo correto: "Ele estava cansado, _______ continuou treinando." (mas/porque)',
    resposta_correta: 'mas',
    explicacao: '"Mas" conecta ideias opostas — estar cansado é contrário a continuar. "Porque" indicaria causa: "continuou PORQUE estava animado" faria sentido; "continuou PORQUE estava cansado" seria contraditório.',
    dica: '"Mas" = ideia contrária. "Porque" = causa/motivo. Estar cansado é o contrário de continuar treinando — qual conectivo de oposição cabe aqui?',
  },
  {
    id: 'q-lig-cad', topico_id: 'topic-conectivos', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Conectivos — palavras que ligam ideias\n\nADIÇÃO: e, além disso, também, ainda\n"Estudou e tirou nota boa."\n\nOPOSIÇÃO: mas, porém, entretanto, contudo\n"Estudou, mas ficou nervoso."\n\nCAUSA: porque, pois, já que, como\n"Tirou nota boa porque estudou."\n\nCONCLUSÃO: portanto, então, logo, assim\n"Estudou muito, portanto passou."\n\nEXPLICAÇÃO: isto é, ou seja, por exemplo\n"Era difícil, ou seja, exigia atenção."',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },
  {
    id: 'q-lig-04', topico_id: 'topic-conectivos', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: '"Queria ir ao show da minha artista favorita, _______ não tinha ingresso." Qual conectivo indica que o problema impediu o plano?',
    resposta_correta: 'mas',
    distratores: ['porque', 'portanto', 'e'],
    explicacao: '"Mas" indica oposição — querer ir é contrário a não ter ingresso. Esse é o padrão mais comum: situação boa + mas + obstáculo. "Porque" indicaria causa, "portanto" indicaria conclusão, "e" indicaria adição.',
    referencia_cultural: 'show de artista favorito',
    validade_cultural: '2030-01-01',
  },
  {
    id: 'q-lig-05', topico_id: 'topic-conectivos', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: '"Portanto" e "logo" são conectivos de conclusão — introduzem a consequência do que foi dito antes.',
    resposta_correta: 'Verdadeiro',
    explicacao: '"Treinei muito, portanto melhorei." A conclusão (melhorei) decorre do que foi dito antes (treinei muito). "Logo", "então", "assim" funcionam da mesma forma. São como a "moral da história".',
  },
  {
    id: 'q-lig-06', topico_id: 'topic-conectivos', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Em qual frase o conectivo está sendo usado CORRETAMENTE?',
    resposta_correta: 'Treinei bastante, portanto melhorei meu desempenho.',
    distratores: ['Treinei bastante, porque melhorei meu desempenho.', 'Não treinei, mas melhorei meu desempenho.', 'Treinei bastante, e portanto melhorei.'],
    explicacao: '"Portanto" introduz conclusão: treinar (causa) → melhorar (conclusão). "Porque" indicaria que melhorar é a causa do treino — invertido. "Não treinei, mas melhorei" seria uma contradição real, não errado — mas a opção certa é a mais lógica.',
  },
  {
    id: 'q-lig-07', topico_id: 'topic-conectivos', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual conectivo de CAUSA completa corretamente? "Ela ficou em casa _______ estava chovendo muito."',
    resposta_correta: 'porque',
    distratores: ['mas', 'portanto', 'e'],
    explicacao: '"Porque" indica causa — a chuva é o motivo de ficar em casa. "Mas" indicaria oposição (ficou em casa, mas estava chovendo — sem sentido). "Portanto" indicaria conclusão. "E" indicaria adição simples.',
  },
  {
    id: 'q-lig-08', topico_id: 'topic-conectivos', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Escreva um texto curto (5 a 7 frases) sobre algo que aconteceu com você — bom ou ruim. Use pelo menos um conectivo de cada tipo: adição, oposição, causa e conclusão. Sublinha cada conectivo e identifica que tipo é.',
    resposta_correta: '',
    explicacao: 'Usar conectivos variados é o que diferencia um texto de criança de um texto maduro. É uma das habilidades mais importantes para redação — e você acabou de praticar.',
  },

  // ════════════════════════════════════════════════════════════
  // ACENTUAÇÃO
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-ac-01', topico_id: 'topic-acentuacao', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Palavras proparoxítonas (acento na ANTEpenúltima sílaba) sempre têm acento escrito. Qual delas é proparoxítona?',
    resposta_correta: 'ônibus',
    distratores: ['café', 'sofá', 'parabéns'],
    explicacao: '"Ônibus" = Ô-ni-bus. O acento cai em "Ô" — a antepenúltima sílaba. Toda proparoxítona é acentuada obrigatoriamente.',
  },
  {
    id: 'q-ac-02', topico_id: 'topic-acentuacao', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Oxítonas são palavras com acento na ÚLTIMA sílaba. Qual das palavras abaixo é oxítona E tem acento escrito?',
    resposta_correta: 'café',
    distratores: ['mesa', 'livro', 'carro'],
    explicacao: '"Café" = ca-FÉ. O acento cai na última sílaba e a palavra termina em E — por isso tem acento escrito. "Mesa", "livro" e "carro" são paroxítonas com terminações comuns (sem acento).',
  },
  {
    id: 'q-ac-03', topico_id: 'topic-acentuacao', tipo: 'lacuna', dificuldade: 1,
    enunciado: '"Médico", "ônibus" e "pêssego" são proparoxítonas — o acento cai na _______ sílaba.',
    resposta_correta: 'antepenúltima',
    explicacao: 'Antepenúltima = antes da penúltima. MÉ-di-co: o acento está em MÉ, que é a primeira sílaba — e nesse caso, a antepenúltima. Toda proparoxítona tem acento.',
    dica: 'Conta as sílabas de trás para frente: última, penúltima, antepenúltima. O acento das proparoxítonas cai na terceira contando do final.',
  },
  {
    id: 'q-ac-cad', topico_id: 'topic-acentuacao', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Acentuação\n\nOXÍTONA — acento na ÚLTIMA sílaba\nTem acento quando termina em: a(s), e(s), o(s), em, ens\nExemplos: sofá, café, avó, parabéns, armazém\n\nPAROXÍTONA — acento na PENÚLTIMA sílaba\nTem acento quando NÃO termina em a, e, o, em, ens\nExemplos: fácil, lápis, táxi, hífen\n\nPROPAROXÍTONA — acento na ANTEPENÚLTIMA sílaba\nSEMPRE tem acento!\nExemplos: médico, ônibus, pêssego, lâmpada, árvore',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },
  {
    id: 'q-ac-04', topico_id: 'topic-acentuacao', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Cristiano Ronaldo grita "SIUUU!" após marcar gol. Se "siu" fosse uma palavra portuguesa, ela seria oxítona — o som mais forte cai no final. Isso significa que:',
    resposta_correta: 'Se terminasse em "u", não teria acento escrito — oxítonas só se acentuam com certas terminações',
    distratores: [
      'Teria acento em "i", porque é a vogal do meio',
      'Seria sempre acentuada, como toda oxítona',
      'Não poderia existir em português porque termina em "u"',
    ],
    explicacao: 'Oxítonas só ganham acento escrito quando terminam em: a(s), e(s), o(s), em, ens. Terminações em "u" não são acentuadas: "parabéns" tem acento, "siu" não teria.',
    referencia_cultural: 'SIU do Cristiano Ronaldo',
    validade_cultural: '2030-01-01',
  },
  {
    id: 'q-ac-05', topico_id: 'topic-acentuacao', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: 'Toda palavra proparoxítona tem acento gráfico obrigatório, sem exceção.',
    resposta_correta: 'Verdadeiro',
    explicacao: 'Proparoxítonas são sempre acentuadas: médico, ônibus, pêssego, lâmpada, cômodo, árvore, óculos. É a regra mais fácil de lembrar — sem exceções!',
  },
  {
    id: 'q-ac-06', topico_id: 'topic-acentuacao', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: '"Avó" e "avô" têm acentos diferentes (agudo e circunflexo). Por quê?',
    resposta_correta: 'Porque têm sons diferentes — avó tem o aberto (ó), avô tem o fechado (ô)',
    distratores: [
      'Por acaso — qualquer acento estaria correto',
      'Porque avó é feminino e avô é masculino',
      'Porque têm origens em idiomas diferentes',
    ],
    explicacao: 'O acento agudo (´) indica vogal aberta: avó, avó soa "avó" aberto. O circunflexo (^) indica vogal fechada: avô soa "avô" fechado. São palavras diferentes com pronúncias diferentes!',
  },
  {
    id: 'q-ac-07', topico_id: 'topic-acentuacao', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual palavra é paroxítona e por isso recebe acento?',
    resposta_correta: 'fácil',
    distratores: ['café', 'ônibus', 'sofá'],
    explicacao: '"Fácil" = FÁ-cil. Acento na penúltima sílaba, terminando em "l" — paroxítona com terminação especial. "Café" e "sofá" são oxítonas; "ônibus" é proparoxítona.',
  },
  {
    id: 'q-ac-08', topico_id: 'topic-acentuacao', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Escolha 6 palavras com acento que você usa no dia a dia — de músicas, séries, lugares ou nomes. Para cada uma, escreva se é oxítona, paroxítona ou proparoxítona e por que tem acento.',
    resposta_correta: '',
    explicacao: 'Classificar palavras do seu próprio vocabulário é a melhor forma de fixar as regras de acentuação de verdade.',
  },

  // ════════════════════════════════════════════════════════════
  // NUMERAL
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-num-01', topico_id: 'topic-numeral', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'O que é um numeral?',
    resposta_correta: 'Palavra que indica quantidade, ordem, fração ou multiplicação',
    distratores: ['Palavra que indica ação ou estado', 'Palavra que qualifica o substantivo', 'Palavra que substitui o nome de uma pessoa'],
    explicacao: 'Numerais indicam: quantidade (três gols), ordem (primeiro lugar), fração (metade da pizza) ou multiplicação (o dobro do preço).',
  },
  {
    id: 'q-num-02', topico_id: 'topic-numeral', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Em "o primeiro gol do jogo", o numeral "primeiro" é:',
    resposta_correta: 'Ordinal — indica posição ou ordem',
    distratores: ['Cardinal — indica quantidade exata', 'Fracionário — indica uma parte', 'Multiplicativo — indica multiplicação'],
    explicacao: 'Numerais ordinais indicam posição: primeiro, segundo, terceiro... Numerais cardinais indicam quantidade: um, dois, três...',
  },
  {
    id: 'q-num-03', topico_id: 'topic-numeral', tipo: 'lacuna', dificuldade: 1,
    enunciado: 'Os números que indicam quantidade simples — um, dois, três, dez, cem — são chamados de numerais _______.',
    resposta_correta: 'cardinais',
    explicacao: 'Cardinais = quantidade simples. Ordinais = ordem. Multiplicativos = multiplicação (dobro, triplo). Fracionários = parte (metade, terço).',
    dica: 'Cardinal vem de "cardeal" — o número base, fundamental. São os números que você usaria para contar: um, dois, três...',
  },
  {
    id: 'q-num-cad', topico_id: 'topic-numeral', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Numeral\n\nCARDINAL → quantidade\num, dois, três, cem, mil\n"Marquei três gols!"\n\nORDINAL → ordem/posição\nprimeiro, segundo, terceiro, décimo\n"Fiquei em primeiro lugar!"\n\nMULTIPLICATIVO → múltiplo\ndobro, triplo, quádruplo\n"O preço é o dobro do que era."\n\nFRACIONÁRIO → parte\nmetade, terço, quarto\n"Comi metade da pizza."',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },
  {
    id: 'q-num-04', topico_id: 'topic-numeral', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'CR7 marcou o centésimo gol da carreira e fez o famoso "SIUUU!". A palavra "centésimo" é numeral:',
    resposta_correta: 'Ordinal — indica posição (o gol de número cem)',
    distratores: ['Cardinal — indica quantidade simples', 'Multiplicativo — indica multiplicação', 'Fracionário — indica uma parte'],
    explicacao: '"Centésimo" = posição 100. Ordinais indicam ordem: primeiro, décimo, centésimo. Não confundir com "cem" (cardinal = quantidade).',
    referencia_cultural: 'CR7 / SIUUU',
    validade_cultural: '2030-01-01',
  },
  {
    id: 'q-num-05', topico_id: 'topic-numeral', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: '"Dobro", "triplo" e "quádruplo" são numerais multiplicativos porque indicam que uma quantidade foi multiplicada.',
    resposta_correta: 'Verdadeiro',
    explicacao: 'Multiplicativos indicam múltiplos: dobro = ×2, triplo = ×3, quádruplo = ×4. "Paguei o dobro" = paguei duas vezes o valor original.',
  },
  {
    id: 'q-num-06', topico_id: 'topic-numeral', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Em qual frase o numeral está sendo usado como FRACIONÁRIO?',
    resposta_correta: 'Ela comeu metade do brigadeiro.',
    distratores: ['Ela ganhou dois brigadeiros.', 'Ela foi a terceira da fila.', 'Ela comeu o dobro de todo mundo.'],
    explicacao: '"Metade" indica uma parte (½) — é fracionário. "Dois" é cardinal, "terceira" é ordinal, "dobro" é multiplicativo.',
  },
  {
    id: 'q-num-07', topico_id: 'topic-numeral', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Seu squad ficou em terceiro lugar no torneio de Brawl Stars. "Terceiro" é numeral:',
    resposta_correta: 'Ordinal — indica posição no ranking',
    distratores: ['Cardinal — indica quantidade', 'Multiplicativo — indica o triplo', 'Fracionário — indica um terço'],
    explicacao: '"Terceiro" indica posição (3ª colocação) — é ordinal. Não confundir com "três" (cardinal = quantidade) ou "triplo" (multiplicativo = ×3).',
    referencia_cultural: 'torneio de Brawl Stars / games',
    validade_cultural: '2029-01-01',
  },
  {
    id: 'q-num-08', topico_id: 'topic-numeral', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Escreva um parágrafo sobre um jogo, esporte ou competição que você gosta. Use pelo menos: 1 numeral cardinal, 1 ordinal e 1 multiplicativo. Depois identifique e classifique cada um.',
    resposta_correta: '',
    explicacao: 'Usar os quatro tipos de numeral em contextos reais é a melhor forma de não confundi-los nunca mais.',
  },

  // ════════════════════════════════════════════════════════════
  // CONCORDÂNCIA
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-con-01', topico_id: 'topic-concordancia', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Concordância nominal é quando o adjetivo (e artigo) concordam em gênero e número com o:',
    resposta_correta: 'Substantivo que acompanham',
    distratores: ['Verbo da frase', 'Pronome da frase', 'Sujeito da oração'],
    explicacao: 'O adjetivo "segue" o substantivo: gato preto → gata preta → gatos pretos → gatas pretas. É a mesma regra que você já viu no tópico de Adjetivos!',
  },
  {
    id: 'q-con-02', topico_id: 'topic-concordancia', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Qual frase tem a concordância nominal CORRETA?',
    resposta_correta: 'As garotas estavam animadas.',
    distratores: ['As garotas estavam animado.', 'As garota estavam animadas.', 'A garotas estavam animada.'],
    explicacao: '"As garotas" = feminino plural. O adjetivo precisa concordar: "animadas" (feminino plural). "Animado" seria masculino — errado aqui.',
  },
  {
    id: 'q-con-03', topico_id: 'topic-concordancia', tipo: 'lacuna', dificuldade: 1,
    enunciado: 'Complete com a forma correta do verbo: Os jogadores _______ muito bem no último jogo. (jogou/jogaram)',
    resposta_correta: 'jogaram',
    explicacao: '"Os jogadores" é plural — o verbo precisa concordar e ficar no plural também: jogaram. "Jogou" seria para sujeito singular: "o jogador jogou".',
    dica: 'O sujeito é "os jogadores" — plural. Regra: sujeito plural → verbo plural. Um jogador jogou. Dois jogadores jogaram.',
  },
  {
    id: 'q-con-cad', topico_id: 'topic-concordancia', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Concordância\n\nCONCORDÂNCIA NOMINAL:\nAdjetivo e artigo combinam com o substantivo em gênero e número.\ngato preto → gata preta → gatos pretos → gatas pretas\n\nCONCORDÂNCIA VERBAL:\nO verbo combina com o sujeito em número e pessoa.\neu jogo → ele joga → nós jogamos → eles jogam\n\nErro clássico:\n❌ Os meninos foi à escola.\n✅ Os meninos foram à escola.',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },
  {
    id: 'q-con-04', topico_id: 'topic-concordancia', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: '"Os sigma boys ficaram em silêncio." O verbo "ficaram" está correto porque:',
    resposta_correta: 'O sujeito "os sigma boys" é plural, então o verbo vai para o plural também',
    distratores: [
      '"Ficaram" está errado — o certo seria "ficou"',
      'Palavras estrangeiras sempre usam verbo no singular',
      'O verbo concorda com "silêncio", que é singular',
    ],
    explicacao: 'Concordância verbal: sujeito plural → verbo plural. "Os sigma boys" = plural. "Ficaram" = plural. Correto! O verbo sempre concorda com o sujeito.',
    referencia_cultural: 'sigma meme',
    validade_cultural: '2027-01-01',
  },
  {
    id: 'q-con-05', topico_id: 'topic-concordancia', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: 'Em "as crianças brincavam felizes", o adjetivo "felizes" está no plural porque concorda com "crianças".',
    resposta_correta: 'Verdadeiro',
    explicacao: '"Crianças" é feminino plural. "Felizes" também precisa ser plural (concordância nominal). A forma singular seria "feliz" — mas aqui, com várias crianças, vai para "felizes".',
  },
  {
    id: 'q-con-06', topico_id: 'topic-concordancia', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual frase tem concordância verbal ERRADA?',
    resposta_correta: 'As meninas foi ao shopping.',
    distratores: ['As meninas foram ao shopping.', 'Os meninos foram ao campo.', 'Ela foi à escola cedo.'],
    explicacao: '"As meninas" é plural, então o verbo precisa ser plural: "foram". "Foi" é singular — só para "ela foi", "ele foi". Erro muito comum na escrita!',
  },
  {
    id: 'q-con-07', topico_id: 'topic-concordancia', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual opção completa corretamente? "Os jogadores estavam _____."',
    resposta_correta: 'cansados',
    distratores: ['cansada', 'cansado', 'cansadas'],
    explicacao: '"Os jogadores" = masculino plural. O adjetivo precisa concordar: "cansados" (masculino plural). "Cansado" seria singular, "cansada/cansadas" seria feminino.',
    referencia_cultural: 'futebol / esportes',
    validade_cultural: '2032-01-01',
  },
  {
    id: 'q-con-08', topico_id: 'topic-concordancia', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Escreva um parágrafo sobre seu time, grupo ou squad favorito (game, esporte, série...). Use pelo menos 4 frases. Depois sublinha os sujeitos e os verbos e verifica: todos concordam?',
    resposta_correta: '',
    explicacao: 'Revisar o próprio texto procurando concordância é o que escritores profissionais fazem. É uma habilidade que você vai usar para sempre.',
    referencia_cultural: 'squad / time favorito',
  },

  // ════════════════════════════════════════════════════════════
  // R E RR
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-rr-01', topico_id: 'topic-rr', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Entre vogais, o som FORTE do R (como no início de "rato") se escreve com:',
    resposta_correta: 'RR — dois erres',
    distratores: ['R — um erre só', 'GR', 'RH'],
    explicacao: 'Entre vogais, o som forte do R sempre se escreve com RR: ca-RRo, ter-RA, bar-RO. Com um R só entre vogais, o som fica suave — como em "cara" ou "moro".',
  },
  {
    id: 'q-rr-02', topico_id: 'topic-rr', tipo: 'lacuna', dificuldade: 1,
    enunciado: 'Complete corretamente: Você usa bo_acha para apagar o lápis. (r/rr)',
    resposta_correta: 'rr',
    explicacao: '"Borracha" tem RR porque o som é forte e está entre as vogais o e a: bo-RR-a-cha. Fale em voz alta: o R está "batendo forte", não "zumbindo suave".',
    dica: 'Fale "borracha" em voz alta. Esse R soa como no início de "rato" — forte! Som forte entre vogais = RR.',
  },
  {
    id: 'q-rr-03', topico_id: 'topic-rr', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Qual frase está escrita CORRETAMENTE?',
    resposta_correta: 'O cachorro late muito quando chove.',
    distratores: [
      'O cachoro late muito quando chove.',
      'O cachorro late muito quando xove.',
      'O cacho-rro late muito quando chove.',
    ],
    explicacao: '"Cachorro" tem RR porque o som é forte entre as vogais o e o: ca-cho-RRo. Erro muito comum: escrever "cachoro" com um R só.',
  },
  {
    id: 'q-rr-cad', topico_id: 'topic-rr', tipo: 'caderno', dificuldade: 1,
    enunciado: 'R e RR\n\nO R tem dois sons em português:\n\nR SUAVE (um só R entre vogais):\ncara, moro, barato, caro, para\n\nR FORTE — escreve como RR entre vogais:\ncarro, terra, barro, ferro, cachorro, borracha, serrar\n\nR FORTE com um só R (outros casos):\nInício de palavra → rato, rua, rio, rosa\nDepois de consoante → genro, honra, Israel',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },
  {
    id: 'q-rr-04', topico_id: 'topic-rr', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: '"Moro" e "morro" são palavras diferentes. Qual frase usa as DUAS corretamente?',
    resposta_correta: 'Eu moro perto daquele morro.',
    distratores: [
      'Eu morro perto daquele moro.',
      'Eu moro perto daquele moro.',
      'Eu morro perto daquele morro.',
    ],
    explicacao: '"Moro" = eu vivo (verbo morar). "Morro" = elevação de terra, ou eu morro (verbo morrer). Contexto define tudo — e a ortografia também!',
  },
  {
    id: 'q-rr-05', topico_id: 'topic-rr', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: 'O RR pode aparecer no início de uma palavra, como em "rrato" ou "rrua".',
    resposta_correta: 'Falso',
    explicacao: 'RR nunca aparece no início de palavras em português. No início, o R sozinho já tem som forte automaticamente: rato, rua, rio, Roma. O RR só existe entre vogais.',
  },
  {
    id: 'q-rr-06', topico_id: 'topic-rr', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'O Maracanã é o estádio mais famoso do Brasil. Na palavra "Maracanã", o R entre as vogais tem som:',
    resposta_correta: 'Suave — por isso se escreve com um R só',
    distratores: [
      'Forte — por isso deveria ter RR',
      'Mudo — o R não é pronunciado',
      'Duplo — o R vale por dois',
    ],
    explicacao: 'Em "Ma-ra-ca-nã", o R está entre vogais com som suave — como em "cara". Por isso um R só. Se fosse forte, seria "Marracanã" — e soaria estranho!',
    referencia_cultural: 'futebol brasileiro',
    validade_cultural: '2032-01-01',
  },
  {
    id: 'q-rr-07', topico_id: 'topic-rr', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual das palavras abaixo tem R com som SUAVE (como em "moro")?',
    resposta_correta: 'barato',
    distratores: ['carro', 'terra', 'rato'],
    explicacao: '"Barato" tem R entre vogais com som suave: ba-RA-to. "Carro" e "terra" têm RR (forte). "Rato" começa com R — que também é forte, mas não usa RR.',
  },
  {
    id: 'q-rr-08', topico_id: 'topic-rr', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Escreva 3 palavras com RR e 3 palavras com R de som suave (entre vogais). Invente uma frase com cada uma. Depois explique com suas palavras: como você sabe quando usar R ou RR?',
    resposta_correta: '',
    explicacao: 'A melhor forma de fixar essa regra é escrever e falar em voz alta. O ouvido ajuda muito: som forte entre vogais → RR. Som suave → R só.',
  },

  // ════════════════════════════════════════════════════════════
  // S E SS
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-ss-01', topico_id: 'topic-ss', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Na palavra "casa", o S entre as vogais a e a tem som de:',
    resposta_correta: 'Z — como em "zebra"',
    distratores: ['S — como em "sopa"', 'CH — como em "chuva"', 'Ç — como em "açúcar"'],
    explicacao: 'S entre vogais vira som de Z: "casa" soa "caza", "rosa" soa "roza", "mesa" soa "meza". Para o som de S forte entre vogais, precisamos de SS.',
  },
  {
    id: 'q-ss-02', topico_id: 'topic-ss', tipo: 'lacuna', dificuldade: 1,
    enunciado: 'Complete: Você pa_ou de fase no jogo! (s/ss)',
    resposta_correta: 'ss',
    explicacao: '"Passou" tem SS porque o som é forte (como em "sopa") e está entre vogais: pa-SS-ou. Com S só, soaria "pazou" — que não existe.',
    dica: 'Fala "passou" em voz alta. Esse S no meio soa forte, não como Z. Som forte de S entre vogais = SS.',
  },
  {
    id: 'q-ss-03', topico_id: 'topic-ss', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'A pizza tem uma ma_a de farinha deliciosa. Qual a grafia correta?',
    resposta_correta: 'massa',
    distratores: ['masa', 'mássa', 'mazza'],
    explicacao: '"Massa" tem SS porque o som é forte entre as vogais a e a: mas-SA. Com S só, "masa" soaria "maza" — e seria outra coisa!',
    referencia_cultural: 'culinária / pizza',
    validade_cultural: '2032-01-01',
  },
  {
    id: 'q-ss-cad', topico_id: 'topic-ss', tipo: 'caderno', dificuldade: 1,
    enunciado: 'S e SS\n\nEntre vogais:\nS (um só) = som de Z: ca-SA (caza), ro-SA (roza), me-SA (meza)\nSS (dois) = som de S forte: mas-SA, pas-SO, gros-SO, pro-fes-SO-ra\n\nFora das vogais:\nS sozinho pode ter som forte: sol, sopa, festa, casca\n\nDica de ouro:\nFale a palavra em voz alta.\nSoou como Z entre vogais? → S\nSoou como S forte entre vogais? → SS',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },
  {
    id: 'q-ss-04', topico_id: 'topic-ss', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: '"Casar" e "cassar" existem e têm sentidos completamente diferentes. Qual opção explica certo?',
    resposta_correta: 'Casar = unir em casamento (S suave, som de Z) | Cassar = cancelar/revogar (SS forte)',
    distratores: [
      'Casar = cancelar | Cassar = unir em casamento',
      'As duas palavras têm o mesmo sentido, só a escrita muda',
      'Nenhuma das duas existe em português',
    ],
    explicacao: 'Um S entre vogais muda tudo: "casar" (som de Z) e "cassar" (SS forte) são palavras completamente diferentes. Ortografia importa!',
  },
  {
    id: 'q-ss-05', topico_id: 'topic-ss', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: 'Em "grosso", o SS aparece porque o som de S entre as vogais o e o é forte.',
    resposta_correta: 'Verdadeiro',
    explicacao: '"Grosso" tem SS entre as vogais o e o: gros-SO. Com S só, soaria "grozo" — que não existe. O SS garante o som forte.',
  },
  {
    id: 'q-ss-06', topico_id: 'topic-ss', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Sua professora escreveu uma palavra no quadro. Qual está CORRETA?',
    resposta_correta: 'professora',
    distratores: ['profesora', 'profesôra', 'proffessora'],
    explicacao: '"Professora" tem SS: pro-fes-SO-ra. O SS está entre as vogais e e o, fazendo o som forte. "Profesora" com S só soaria "profezora".',
  },
  {
    id: 'q-ss-07', topico_id: 'topic-ss', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual frase tem TODAS as palavras escritas corretamente?',
    resposta_correta: 'A professora passou uma tarefa difícil.',
    distratores: [
      'A profesora pasou uma tarefa difícil.',
      'A professora pasou uma taréfa difícil.',
      'A profesôra passou uma tarefa dificil.',
    ],
    explicacao: '"Professora" (SS entre e e o) e "passou" (SS entre a e o) — ambas com som forte entre vogais, ambas com SS.',
  },
  {
    id: 'q-ss-08', topico_id: 'topic-ss', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Escreva um parágrafo curto sobre algo que aconteceu hoje ou ontem. Use pelo menos 3 palavras com SS. Depois sublinha cada SS e explica por que aquela palavra usa SS e não S.',
    resposta_correta: '',
    explicacao: 'Escrever e depois analisar o próprio texto é uma das formas mais eficazes de fixar regras de ortografia.',
  },

  // ════════════════════════════════════════════════════════════
  // PREFIXO E SUFIXO
  // ════════════════════════════════════════════════════════════

  {
    id: 'q-fp-01', topico_id: 'topic-formacao', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'O prefixo é uma parte que se acrescenta:',
    resposta_correta: 'No início da palavra, mudando seu sentido',
    distratores: ['No final da palavra, mudando sua classe', 'No meio da palavra, entre sílabas', 'Substituindo uma letra da palavra'],
    explicacao: 'Prefixo vem antes da palavra raiz e muda o sentido: "feliz" → "in-feliz", "fazer" → "re-fazer", "ligar" → "des-ligar".',
  },
  {
    id: 'q-fp-02', topico_id: 'topic-formacao', tipo: 'multipla_escolha', dificuldade: 1,
    enunciado: 'Em "desfazer", o prefixo "des-" indica:',
    resposta_correta: 'Ação contrária — o oposto de fazer',
    distratores: ['Repetição da ação', 'Intensidade maior da ação', 'Quem realiza a ação'],
    explicacao: 'O prefixo "des-" cria o oposto da palavra: desfazer = desfazer o que foi feito, desligar = oposto de ligar, desorganizar = oposto de organizar.',
  },
  {
    id: 'q-fp-03', topico_id: 'topic-formacao', tipo: 'lacuna', dificuldade: 1,
    enunciado: 'A palavra "rapidamente" foi formada pelo sufixo "-mente", que transforma o adjetivo "rápido" em um _______.',
    resposta_correta: 'advérbio',
    explicacao: 'O sufixo "-mente" transforma adjetivos em advérbios: rápido → rapidamente, feliz → felizmente, lento → lentamente. Advérbio é a palavra que diz COMO, QUANDO ou ONDE algo acontece.',
    dica: 'Advérbio modifica o verbo. "Ela correu rapidamente" — "rapidamente" diz COMO ela correu. O sufixo -mente sempre cria esse tipo de palavra.',
  },
  {
    id: 'q-fp-cad', topico_id: 'topic-formacao', tipo: 'caderno', dificuldade: 1,
    enunciado: 'Prefixo e Sufixo\n\nPREFIXO — vai no INÍCIO, muda o sentido:\ndes- → contrário: desfazer, desligar, desorganizar\nin- / im- → negação: infeliz, impossível, incapaz\nre- → repetição: refazer, reler, reorganizar\nsuper- → intensidade: super-herói, superpoder\nmini- → redução: minissaia, minissérie\n\nSUFIXO — vai no FINAL, muda a função:\n-inho/-inha → diminutivo: gatinho, casinha\n-eiro/-eira → profissão/lugar: padeiro, livreiro\n-mente → advérbio: rapidamente, felizmente\n-ção → substantivo: organizar → organização',
    resposta_correta: 'anotei',
    explicacao: 'Anotar ajuda a fixar o conteúdo na memória. Parabéns por caprichar no caderno!',
  },
  {
    id: 'q-fp-04', topico_id: 'topic-formacao', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Seu personagem no jogo está completamente desorganizado — itens espalhados por todo o inventário. O prefixo "des-" em "desorganizado" indica:',
    resposta_correta: 'Que o personagem não está organizado — negação do estado',
    distratores: [
      'Que o personagem se organizou e depois desistiu',
      'Que o personagem é muito organizado',
      'Que o personagem está se reorganizando',
    ],
    explicacao: '"Des-" cria o oposto: desorganizado = não organizado. Se quisesse "reorganizando", usaria o prefixo "re-" = repetição da ação.',
    referencia_cultural: 'inventário de jogo',
    validade_cultural: '2032-01-01',
  },
  {
    id: 'q-fp-05', topico_id: 'topic-formacao', tipo: 'verdadeiro_falso', dificuldade: 2,
    enunciado: 'Em "padeiro", o sufixo "-eiro" indica profissão — a pessoa que faz ou vende pão.',
    resposta_correta: 'Verdadeiro',
    explicacao: 'O sufixo "-eiro/-eira" frequentemente indica profissão: padeiro (faz/vende pão), livreiro (vende livros), fazendeiro (tem fazenda), cabeleireiro (cuida do cabelo).',
  },
  {
    id: 'q-fp-06', topico_id: 'topic-formacao', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual prefixo transforma "capaz" no seu OPOSTO?',
    resposta_correta: 'in- → incapaz',
    distratores: ['re- → recapaz', 'super- → supercapaz', 'des- → descapaz'],
    explicacao: 'O prefixo "in-" (ou "im-" antes de p/b) cria a negação: incapaz, infeliz, impossível, impaciente. "Supercapaz" seria alguém muito capaz — o contrário!',
  },
  {
    id: 'q-fp-07', topico_id: 'topic-formacao', tipo: 'multipla_escolha', dificuldade: 2,
    enunciado: 'Qual palavra foi formada adicionando o sufixo "-ção" a um verbo?',
    resposta_correta: 'organização (de organizar)',
    distratores: ['corrida (de correr)', 'rapidamente (de rápido)', 'gatinho (de gato)'],
    explicacao: '"Organização" = organizar + ção. O sufixo "-ção" transforma verbos em substantivos. "Corrida" também vem de "correr" mas usa outro sufixo ("-ida"). "Rapidamente" usa "-mente". "Gatinho" usa "-inho".',
  },
  {
    id: 'q-fp-08', topico_id: 'topic-formacao', tipo: 'elaboracao', dificuldade: 3,
    enunciado: 'Escolha 3 prefixos diferentes (des-, re-, in-, super-, mini-) e crie uma palavra com cada um — pode ser uma palavra que já existe ou uma palavra inventada por você. Escreva uma frase com cada palavra e explique o que o prefixo está fazendo nela.',
    resposta_correta: '',
    explicacao: 'Brincar com prefixos é o que escritores e poetas fazem. Guimarães Rosa inventava palavras novas misturando prefixos e sufixos com palavras comuns.',
    referencia_cultural: 'criação de palavras / escritores',
  },
]
