import type { Trail, Topic, Question } from '../types'

export const trails: Trail[] = [
  {
    id: 'trail-classes-palavras',
    nome: 'Classes de Palavras',
    materia: 'Língua Portuguesa',
    ano_escolar: 5,
    narrativa: 'Uma jornada pelo universo das palavras — descubra os poderes secretos de cada classe e como elas constroem o mundo ao seu redor.',
    topicos: ['topic-substantivo', 'topic-adjetivo', 'topic-artigo', 'topic-pronome', 'topic-verbo'],
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
    topicos: ['topic-rr', 'topic-ss'],
  },
  {
    id: 'trail-construcao',
    nome: 'Construção de Palavras',
    materia: 'Língua Portuguesa',
    ano_escolar: 5,
    narrativa: 'Uma palavra pode virar várias outras só mudando o começo ou o final. É como montar peças de Lego com a língua portuguesa.',
    topicos: ['topic-formacao'],
  },
]

export const topics: Topic[] = [
  // ── TRAIL: CLASSES DE PALAVRAS ──────────────────────────────────────────────

  {
    id: 'topic-substantivo',
    nome: 'Substantivo',
    trilha_id: 'trail-classes-palavras',
    eixo_bncc: 'Análise linguística e gramática',
    gancho_curiosidade: 'Você sabia que tudo que existe tem um nome — e esse nome é uma palavra especial? Por que será que "amor" e "saudade" são substantivos, mas "feliz" não é?',
    pre_requisitos: [],
    itens: ['q-sub-01','q-sub-02','q-sub-03','q-sub-cad','q-sub-04','q-sub-05','q-sub-06','q-sub-07','q-sub-08'],
  },
  {
    id: 'topic-adjetivo',
    nome: 'Adjetivo',
    trilha_id: 'trail-classes-palavras',
    eixo_bncc: 'Análise linguística e gramática',
    gancho_curiosidade: 'Imagine um jogo sem adjetivos: sem "raro", sem "épico", sem "lendário". Chato, né? Descubra por que os adjetivos são o "farmador de aura" das frases.',
    pre_requisitos: ['topic-substantivo'],
    itens: ['q-adj-01','q-adj-02','q-adj-03','q-adj-cad','q-adj-04','q-adj-05','q-adj-06','q-adj-07','q-adj-08'],
  },
  {
    id: 'topic-artigo',
    nome: 'Artigo',
    trilha_id: 'trail-classes-palavras',
    eixo_bncc: 'Análise linguística e gramática',
    gancho_curiosidade: 'Por que dizemos "o cachorro" e não "um cachorro" quando falamos do nosso pet? Essa pequena diferença muda o sentido inteiro da frase — e quem faz isso é o artigo.',
    pre_requisitos: ['topic-substantivo'],
    itens: ['q-art-01','q-art-02','q-art-03','q-art-cad','q-art-04','q-art-05','q-art-06','q-art-07','q-art-08'],
  },
  {
    id: 'topic-pronome',
    nome: 'Pronome Pessoal',
    trilha_id: 'trail-classes-palavras',
    eixo_bncc: 'Análise linguística e gramática',
    gancho_curiosidade: 'Imagina ter que repetir o nome de todo mundo toda vez que fala deles? "João foi à escola. João comeu. João brincou." O pronome resolve isso — descubra como.',
    pre_requisitos: ['topic-substantivo'],
    itens: ['q-pro-01','q-pro-02','q-pro-03','q-pro-cad','q-pro-04','q-pro-05','q-pro-06','q-pro-07','q-pro-08'],
  },
  {
    id: 'topic-verbo',
    nome: 'Verbo',
    trilha_id: 'trail-classes-palavras',
    eixo_bncc: 'Análise linguística e gramática',
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
    gancho_curiosidade: 'Por que escritores não repetem a mesma palavra o tempo todo? Porque existe uma lista secreta de palavras com o mesmo sentido. Você vai desbloquear essa lista agora.',
    pre_requisitos: ['topic-substantivo', 'topic-adjetivo'],
    itens: ['q-sin-01','q-sin-02','q-sin-03','q-sin-cad','q-sin-04','q-sin-05','q-sin-06','q-sin-07','q-sin-08'],
  },
  {
    id: 'topic-antonimos',
    nome: 'Antônimos',
    trilha_id: 'trail-semantica',
    eixo_bncc: 'Análise linguística e gramática',
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
    gancho_curiosidade: 'Por que "caro" e "carro" têm sons diferentes se só mudou uma letra? O R tem dois poderes escondidos — e saber usá-los vai acabar com um dos erros mais comuns na escrita.',
    pre_requisitos: [],
    itens: ['q-rr-01','q-rr-02','q-rr-03','q-rr-cad','q-rr-04','q-rr-05','q-rr-06','q-rr-07','q-rr-08'],
  },
  {
    id: 'topic-ss',
    nome: 'S e SS',
    trilha_id: 'trail-ortografia',
    eixo_bncc: 'Análise linguística e gramática',
    gancho_curiosidade: 'Por que "passo" tem dois S e "caso" tem um, se os dois têm S no meio? Se o som é parecido, por que a escrita é diferente? Esse é um dos maiores segredos da ortografia.',
    pre_requisitos: ['topic-rr'],
    itens: ['q-ss-01','q-ss-02','q-ss-03','q-ss-cad','q-ss-04','q-ss-05','q-ss-06','q-ss-07','q-ss-08'],
  },

  // ── TRAIL: CONSTRUÇÃO DE PALAVRAS ───────────────────────────────────────────

  {
    id: 'topic-formacao',
    nome: 'Prefixo e Sufixo',
    trilha_id: 'trail-construcao',
    eixo_bncc: 'Análise linguística e gramática',
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
