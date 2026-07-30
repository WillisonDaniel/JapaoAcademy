// ==========================================
// BANCO DE DADOS DO CURSO DE INGLÊS - NÍVEL B1 (INTERMEDIATE)
// 24 MÓDULOS COMPLETOS DIVIDIDOS EM 6 SEÇÕES PEDAGÓGICAS
// Baseado no english_context.md
// ==========================================

// ------------------------------------------
// SEÇÃO 1: INFORMAL ENGLISH, CONNECTED SPEECH & FLUENCY (MÓDULOS 1 A 4)
// ------------------------------------------

const MODULO_EN_B1_01 = {
    id: "en_b1_mod_01",
    title: "Informal Speech & Reduced Forms",
    section: 1,
    sectionTitle: "Informal English, Connected Speech & Fluency",
    level: "B1",
    xpReward: 130,
    stage1_context: {
        audioGuide: "I'm gonna tell you something. You gotta listen carefully if you wanna understand native speakers.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Compreender e dominar contrações informais e formas reduzidas comuns no inglês falado do dia a dia (gonna, wanna, gotta, kinda, outta)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Gonna / Wanna", romaji: "/ˈɡənə / ˈwɑːnə/", translation: "Indo (Going to) / Querer (Want to)", timeContext: "Contrações de intenção e desejo em conversas informais." },
        { type: "vocab", kanji: "Gotta / Kinda / Outta", romaji: "/ˈɡɑːtə / ˈkaɪndə / ˈaʊtə/", translation: "Ter que (Got to) / Um pouco (Kind of) / Fora de (Out of)", timeContext: "Formas reduzidas da fala fluida." },
        { type: "grammar_pill", title: "Formas Reduzidas (Reduced Forms)", rule: "Na fala rápida e informal, preposições e auxiliares fundem-se com verbos. 'Going to' vira 'gonna', 'want to' vira 'wanna' e 'got to' vira 'gotta'. Usam-se em conversas casuais, mas NUNCA em escrita formal ou profissional.", formula: "Subject + gonna/wanna/gotta + Verb base", example: "I gonna leave. (Incorreto) ➔ I'm gonna leave. (Correto - mantenha o verbo Be com gonna!)." },
        { type: "grammar_pill", title: "Pegadinha Gramatical: 'Gonna' exige verbo 'To Be'", rule: "Embora 'gonna' reduza 'going to', ele AINDA requer o verbo auxiliares (am/is/are) antes dele na frase.", formula: "Subject + am/is/are + gonna + Verb base", example: "She is gonna buy a car. (NÃO: She gonna buy a car)." }
    ],
    stage3_practice: [
        { question: "1. Qual frase informal está com a gramática CORRETA?", options: [{ label: "I'm gonna call you later.", isCorrect: true }, { label: "I gonna call you later.", isCorrect: false }, { label: "I'm gonna calling you later.", isCorrect: false }] },
        { question: "2. A expressão 'wanna' é a redução informal de:", options: [{ label: "want to", isCorrect: true }, { label: "went to", isCorrect: false }, { label: "wanting", isCorrect: false }] },
        { question: "3. Complete corretamente: 'You ___ study hard for this test!'", options: [{ label: "gotta", isCorrect: true }, { label: "got out", isCorrect: false }, { label: "kind of to", isCorrect: false }] },
        { question: "4. Qual a redução de 'kind of' na linguagem falada?", options: [{ label: "kinda", isCorrect: true }, { label: "kiddo", isCorrect: false }, { label: "kinna", isCorrect: false }] },
        { question: "5. Em qual contexto você NÃO deve usar 'gonna' ou 'wanna'?", options: [{ label: "Em um e-mail de trabalho formal para um cliente", isCorrect: true }, { label: "Em uma conversa casual no café", isCorrect: false }, { label: "Em uma mensagem de texto para um amigo", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I'm gonna grab a coffee, do you wanna come?", translation: "Eu vou pegar um café, você quer vir?", chunks: ["I'm", "gonna", "grab", "a", "coffee", ",", "do", "you", "wanna", "come", "?"] },
        { sentenceEn: "I gotta get outta here right now.", translation: "Eu tenho que cair fora daqui agora mesmo.", chunks: ["I", "gotta", "get", "outta", "here", "right", "now", "."] }
    ],
    stage4_dialog: [
        { npcName: "Jake", npcMessage: "Hey! What are you gonna do this weekend?", options: [{ text: "I'm gonna visit my family in the countryside.", isCorrect: true, feedback: "Perfeito! Uso natural e correto de 'I'm gonna'." }, { text: "I gonna visit my family.", isCorrect: false, feedback: "Falta o verbo auxiliares 'am' (I'm gonna)." }, { text: "I wanna visit last weekend.", isCorrect: false, feedback: "'Wanna' é presente/futuro, não passado." }] },
        { npcName: "Sarah", npcMessage: "Do you wanna go to the movies tonight?", options: [{ text: "I'd love to, but I gotta work late tonight.", isCorrect: true, feedback: "Excelente! Resposta fluida com 'gotta'." }, { text: "I gotta to work late.", isCorrect: false, feedback: "'Gotta' já inclui 'to', não use 'gotta to'." }, { text: "No, I am kinda to busy.", isCorrect: false, feedback: "Use 'kinda busy', sem 'to'." }] },
        { npcName: "Mike", npcMessage: "Is it kinda cold outside or is it just me?", options: [{ text: "Yeah, it's kinda freezing today! Take a jacket.", isCorrect: true, feedback: "Ótimo uso de 'kinda'!" }, { text: "Yes, it gonna cold.", isCorrect: false, feedback: "'Gonna' exige verbo principal." }, { text: "I am outta cold.", isCorrect: false, feedback: "'Outta' significa 'out of', inadequado aqui." }] }
    ],
    stage5_quiz: [
        { question: "1. O que significa 'I gotta go'?", options: [{ label: "Eu tenho que ir", isCorrect: true }, { label: "Eu fui embora", isCorrect: false }, { label: "Eu gosto de ir", isCorrect: false }] },
        { question: "2. Qual a forma por extenso de 'outta'?", options: [{ label: "out of", isCorrect: true }, { label: "outside", isCorrect: false }, { label: "out to", isCorrect: false }] },
        { question: "3. 'She's kinda tired' significa que ela está:", options: [{ label: "Um pouco cansada", isCorrect: true }, { label: "Muito cansada", isCorrect: false }, { label: "Nada cansada", isCorrect: false }] },
        { question: "4. Escolha a frase gramaticalmente correta:", options: [{ label: "We are gonna miss the train!", isCorrect: true }, { label: "We gonna miss the train!", isCorrect: false }, { label: "We gonna to miss the train!", isCorrect: false }] },
        { question: "5. 'Lemme' é a redução informal de:", options: [{ label: "Let me", isCorrect: true }, { label: "Leave me", isCorrect: false }, { label: "Lead me", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_02 = {
    id: "en_b1_mod_02",
    title: "Connected Speech & Linking Sounds",
    section: 1,
    sectionTitle: "Informal English, Connected Speech & Fluency",
    level: "B1",
    xpReward: 135,
    stage1_context: {
        audioGuide: "When native speakers talk fast, words link together. 'Pick it up' sounds like 'Pi-ki-tup'.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprender as regras de encadeamento sonoro (linking sounds) para entender o inglês falado em velocidade natural e soar mais fluente."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Pick it up / Check it out", romaji: "/pɪkɪtʌp / tʃekɪtaʊt/", translation: "Pegar isso / Conferir isso", timeContext: "Exemplos clássicos de consoante ligada a vogal." },
        { type: "vocab", kanji: "Rock 'n' roll / Fish 'n' chips", romaji: "/rɑːkənroʊl/", translation: "Rock and roll / Peixe com fritas", timeContext: "Redução da conjunção 'and' para um som 'n'." },
        { type: "grammar_pill", title: "Regra de Encadeamento Consoante + Vogal", rule: "Quando uma palavra termina em som de consoante e a seguinte começa com som de vogal, elas se unem na fala parecendo uma única palavra.", formula: "[Consoante final] + [Vogal inicial] ➔ Som contínuo", example: "Far away ➔ /fɑːrəweɪ/ | Hold on ➔ /hoʊldɑːn/" },
        { type: "grammar_pill", title: "A Redução do 'And' e do 'Of'", rule: "O 'and' é frequentemente reduzido para /n/ ou /ən/. O 'of' costuma soar apenas como /əv/ ou /ə/ antes de consoantes.", formula: "Bread and butter ➔ 'Bread 'n' butter' | Piece of cake ➔ 'Piece av cake'", example: "Cup of tea ➔ /kʌp əv tiː/" }
    ],
    stage3_practice: [
        { question: "1. Na frase 'Turn it off', como os sons se conectam?", options: [{ label: "Tur-ni-toff", isCorrect: true }, { label: "Turn-it-off (pausado)", isCorrect: false }, { label: "Tu-rn-it-of", isCorrect: false }] },
        { question: "2. O que acontece com a palavra 'and' na fala encadeada?", options: [{ label: "Perde o 'd' e soa como 'n'", isCorrect: true }, { label: "Soa como 'end'", isCorrect: false }, { label: "É substituída por 'or'", isCorrect: false }] },
        { question: "3. Como soa a junção de 'What do you' em ritmo acelerado?", options: [{ label: "Whatcha / Whaddya", isCorrect: true }, { label: "What you do", isCorrect: false }, { label: "What is you", isCorrect: false }] },
        { question: "4. Na expressão 'First of all', a pronúncia ligada correta é:", options: [{ label: "Firs-to-vall", isCorrect: true }, { label: "First-of-all (separado)", isCorrect: false }, { label: "Fir-sof-all", isCorrect: false }] },
        { question: "5. 'Hold on' soa na fala fluida como:", options: [{ label: "Hol-don", isCorrect: true }, { label: "Ho-ld-on", isCorrect: false }, { label: "Hold-off", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Check it out and pick it up.", translation: "Confira isso e pegue isso.", chunks: ["Check", "it", "out", "and", "pick", "it", "up", "."] },
        { sentenceEn: "First of all, hold on a second.", translation: "Antes de tudo, espere um segundo.", chunks: ["First", "of", "all", ",", "hold", "on", "a", "second", "."] }
    ],
    stage4_dialog: [
        { npcName: "Emma", npcMessage: "Can you pick it up for me, please?", options: [{ text: "Sure! I'll pick it up right away.", isCorrect: true, feedback: "Ótima resposta! O encadeamento 'pick-it-up' é natural." }, { text: "Sure! I pick up it.", isCorrect: false, feedback: "O pronome 'it' fica no meio: 'pick it up'." }, { text: "I can't check it in.", isCorrect: false, feedback: "Fora de contexto." }] },
        { npcName: "Tom", npcMessage: "What do you think of this new song?", options: [{ text: "Check it out! It sounds amazing.", isCorrect: true, feedback: "Perfeita aplicação de 'check it out'!" }, { text: "I check out it yesterday.", isCorrect: false, feedback: "Diga 'checked it out'." }, { text: "It is a rock and roll.", isCorrect: false, feedback: "Pronúncia natural usaria 'rock 'n' roll'." }] },
        { npcName: "Lisa", npcMessage: "Could you hold on a minute?", options: [{ text: "No problem, take your time!", isCorrect: true, feedback: "Excelente e educado!" }, { text: "I hold on you.", isCorrect: false, feedback: "Uso incorreto." }, { text: "First of all, no.", isCorrect: false, feedback: "Muito ríspido e fora de contexto." }] }
    ],
    stage5_quiz: [
        { question: "1. Conectar uma consoante final com a vogal seguinte chama-se:", options: [{ label: "Linking sounds (Encadeamento sonoro)", isCorrect: true }, { label: "Silent letters", isCorrect: false }, { label: "Stress patterns", isCorrect: false }] },
        { question: "2. Como se pronuncia 'out of' em fala rápida?", options: [{ label: "outta /aʊtə/", isCorrect: true }, { label: "over out", isCorrect: false }, { label: "off to", isCorrect: false }] },
        { question: "3. O som de 'an' em 'an apple' se conecta como:", options: [{ label: "a-napple", isCorrect: true }, { label: "an-apple (com pausa)", isCorrect: false }, { label: "apple-an", isCorrect: false }] },
        { question: "4. Em 'Stop it!', a pronúncia conectada é:", options: [{ label: "Sto-pit", isCorrect: true }, { label: "Stop-it", isCorrect: false }, { label: "S-to-pit", isCorrect: false }] },
        { question: "5. Encadeamento de som serve para:", options: [{ label: "Tornar o ritmo da fala mais suave e natural", isCorrect: true }, { label: "Mudar o significado das palavras", isCorrect: false }, { label: "Corrigir erros de digitação", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_03 = {
    id: "en_b1_mod_03",
    title: "Expressing Opinions & Thoughts",
    section: 1,
    sectionTitle: "Informal English, Connected Speech & Fluency",
    level: "B1",
    xpReward: 135,
    stage1_context: {
        audioGuide: "In my opinion, learning English opens doors. As far as I'm concerned, practice is everything.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprender a formular e expressar opiniões com clareza, utilizando marcadores de discurso intermediários."
    },
    stage2_drops: [
        { type: "vocab", kanji: "In my opinion / From my perspective", romaji: "/ɪn maɪ əˈpɪnjən/", translation: "Na minha opinião / Da minha perspectiva", timeContext: "Introdução formal e neutra de pareceres." },
        { type: "vocab", kanji: "As far as I'm concerned", romaji: "/æz fɑːr æz aɪm kənˈsɜːrnd/", translation: "No que me diz respeito / Ao meu ver", timeContext: "Expressão forte e elegante de opinião pessoal." },
        { type: "grammar_pill", title: "Marcadores de Opinião e Posição", rule: "Para evitar repetir 'I think', use conectores variados como 'In my view', 'To be honest', ou 'I reckon' (muito comum no inglês britânico).", formula: "[Marcador de Opinião], + [Frase Principal]", example: "As far as I'm concerned, this project is a success." },
        { type: "grammar_pill", title: "Estrutura do 'I think that...'", rule: "A conjunção 'that' após verbos de pensamento (think, believe, feel) é opcional na fala.", formula: "I believe (that) + Subject + Verb", example: "I reckon (that) we will win." }
    ],
    stage3_practice: [
        { question: "1. Qual expressão traduz 'No que me diz respeito'?", options: [{ label: "As far as I'm concerned", isCorrect: true }, { label: "As long as I know", isCorrect: false }, { label: "So far as I am", isCorrect: false }] },
        { question: "2. Como dizer 'Para ser sincero' antes de dar uma opinião?", options: [{ label: "To be honest", isCorrect: true }, { label: "To be true", isCorrect: false }, { label: "For honesty", isCorrect: false }] },
        { question: "3. O verbo informal 'reckon' (comum no inglês britânico) significa:", options: [{ label: "Achar / Imaginar / Considerar", isCorrect: true }, { label: "Reclamar", isCorrect: false }, { label: "Recusar", isCorrect: false }] },
        { question: "4. Qual a posição da vírgula ao usar 'In my opinion' no início da frase?", options: [{ label: "Logo após 'In my opinion,'", isCorrect: true }, { label: "Antes do verbo principal apenas", isCorrect: false }, { label: "Não se usa pontuação", isCorrect: false }] },
        { question: "5. Escolha a frase com melhor fluência B1:", options: [{ label: "From my perspective, we need more time.", isCorrect: true }, { label: "My view thinks we need time.", isCorrect: false }, { label: "I am opinion that we need time.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "In my opinion, we should focus on practice.", translation: "Na minha opinião, nós deveríamos focar na prática.", chunks: ["In", "my", "opinion", ",", "we", "should", "focus", "on", "practice", "."] },
        { sentenceEn: "As far as I'm concerned, the decision is final.", translation: "No que me diz respeito, a decisão é final.", chunks: ["As", "far", "as", "I'm", "concerned", ",", "the", "decision", "is", "final", "."] }
    ],
    stage4_dialog: [
        { npcName: "David", npcMessage: "What do you think about working remotely?", options: [{ text: "In my opinion, it offers much better work-life balance.", isCorrect: true, feedback: "Excelente! Estrutura perfeita para dar parecer." }, { text: "I am think it is good.", isCorrect: false, feedback: "Não misture 'am' com 'think'." }, { text: "My opinion is work home.", isCorrect: false, feedback: "Muito simplório para o nível B1." }] },
        { npcName: "Rachel", npcMessage: "Do you reckon it will rain later?", options: [{ text: "To be honest, looking at those dark clouds, I reckon it will.", isCorrect: true, feedback: "Ótimo uso de 'reckon' e 'To be honest'!" }, { text: "I reckon rain yesterday.", isCorrect: false, feedback: "'Reckon' refere-se ao momento presente ou futuro." }, { text: "As far as concerned, yes.", isCorrect: false, feedback: "Expressão incompleta. Diga 'As far as I'm concerned'." }] },
        { npcName: "Oliver", npcMessage: "Should we hire a new team member?", options: [{ text: "From my perspective, we definitely need extra support.", isCorrect: true, feedback: "Resposta madura e elegante." }, { text: "For my perspective, yes.", isCorrect: false, feedback: "A preposição correta é 'From my perspective'." }, { text: "I think perspective good.", isCorrect: false, feedback: "Construção incorreta." }] }
    ],
    stage5_quiz: [
        { question: "1. 'To be honest' é usado para:", options: [{ label: "Introduzir um ponto de vista sincero", isCorrect: true }, { label: "Pedir desculpas por um atraso", isCorrect: false }, { label: "Fazer um pedido em um restaurante", isCorrect: false }] },
        { question: "2. Qual preposição completa: '___ my point of view'?", options: [{ label: "From", isCorrect: true }, { label: "In", isCorrect: false }, { label: "On", isCorrect: false }] },
        { question: "3. 'I reckon' é equivalente a:", options: [{ label: "I think / I believe", isCorrect: true }, { label: "I forget", isCorrect: false }, { label: "I doubt", isCorrect: false }] },
        { question: "4. 'As far as I know' indica que você está falando:", options: [{ label: "Com base no que você sabe até o momento", isCorrect: true }, { label: "Com certeza absoluta e sem dúvidas", isCorrect: false }, { label: "Sobre um passado distante", isCorrect: false }] },
        { question: "5. 'In my view' deve ser seguido de:", options: [{ label: "Uma oração com sujeito e verbo", isCorrect: true }, { label: "Apenas um número", isCorrect: false }, { label: "Um verbo no infinitivo com to", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_04 = {
    id: "en_b1_mod_04",
    title: "Expressing Doubts & Uncertainty",
    section: 1,
    sectionTitle: "Informal English, Connected Speech & Fluency",
    level: "B1",
    xpReward: 140,
    stage1_context: {
        audioGuide: "I'm not entirely sure if he will come. He might be stuck in traffic.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar incerteza, possibilidade e hipóteses usando modais (might, may) e expressões de dúvida."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Might / May", romaji: "/maɪt / meɪ/", translation: "Pode ser que / Talvez", timeContext: "Verbos modais de possibilidade presente/futura." },
        { type: "vocab", kanji: "I'm not entirely sure", romaji: "/aɪm nɑːt ɪnˈtaɪərli ʃʊr/", translation: "Não tenho absoluta certeza", timeContext: "Forma educada de demonstrar dúvida." },
        { type: "grammar_pill", title: "Might vs. May (Possibilidade)", rule: "Ambos expressam possibilidade no presente ou futuro. 'Might' indica uma probabilidade um pouco menor ou mais remota que 'May'. Nenhum deles muda de forma para He/She/It.", formula: "Subject + might / may + Verb base", example: "She MIGHT come to the party. (Talvez ela venha)." },
        { type: "grammar_pill", title: "Expressões de Dúvida: 'I doubt that' e 'It's unlikely'", rule: "Para expressar que algo dificilmente acontecerá, usam-se 'I doubt that...' ou 'It is unlikely that...'.", formula: "It is unlikely + (that) + Clause", example: "It's unlikely that the price will drop." }
    ],
    stage3_practice: [
        { question: "1. Qual frase expressa incerteza sobre o futuro?", options: [{ label: "We might travel next week.", isCorrect: true }, { label: "We will travel for sure next week.", isCorrect: false }, { label: "We traveled last week.", isCorrect: false }] },
        { question: "2. Como se diz 'Duvido que isso aconteça'?", options: [{ label: "I doubt that will happen.", isCorrect: true }, { label: "I doubt to happen.", isCorrect: false }, { label: "I am doubting happen.", isCorrect: false }] },
        { question: "3. Após o modal 'might', o verbo principal deve ficar:", options: [{ label: "Na forma base (sem 'to' e sem '-ing')", isCorrect: true }, { label: "Com o sufixo -ed", isCorrect: false }, { label: "Precedido de 'to'", isCorrect: false }] },
        { question: "4. O que significa 'It's unlikely to rain'?", options: [{ label: "É improvável que chova", isCorrect: true }, { label: "Com certeza vai chover", isCorrect: false }, { label: "Gosto quando chove", isCorrect: false }] },
        { question: "5. Escolha a negativa correta para 'might':", options: [{ label: "might not", isCorrect: true }, { label: "don't might", isCorrect: false }, { label: "mighten't to", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I'm not entirely sure if she will agree.", translation: "Não tenho absoluta certeza se ela vai concordar.", chunks: ["I'm", "not", "entirely", "sure", "if", "she", "will", "agree", "."] },
        { sentenceEn: "He might come to the meeting later.", translation: "Ele pode vir para a reunião mais tarde.", chunks: ["He", "might", "come", "to", "the", "meeting", "later", "."] }
    ],
    stage4_dialog: [
        { npcName: "Carlos", npcMessage: "Is Alex coming to the office today?", options: [{ text: "I'm not entirely sure. He might work from home.", isCorrect: true, feedback: "Excelente! Demonstrou incerteza com 'might' com muita naturalidade." }, { text: "He might to come.", isCorrect: false, feedback: "Não coloque 'to' depois de 'might'." }, { text: "Alex is always not sure.", isCorrect: false, feedback: "Frase gramaticalmente confusa." }] },
        { npcName: "Jessica", npcMessage: "Will the project be finished by Friday?", options: [{ text: "It's unlikely that we will finish by Friday, we need more time.", isCorrect: true, feedback: "Uso perfeito de 'It's unlikely'!" }, { text: "I doubt about Friday.", isCorrect: false, feedback: "Diga 'I doubt we will finish by Friday'." }, { text: "We might finished.", isCorrect: false, feedback: "Após 'might', use o verbo na forma base: 'finish'." }] },
        { npcName: "Brian", npcMessage: "Where are my car keys?", options: [{ text: "They might be on the kitchen counter.", isCorrect: true, feedback: "Ótimo uso de 'might be'!" }, { text: "They may to be in your pocket.", isCorrect: false, feedback: "Remova o 'to' após 'may'." }, { text: "I am doubt keys.", isCorrect: false, feedback: "Construção incorreta." }] }
    ],
    stage5_quiz: [
        { question: "1. O verbo modal 'might' expressa:", options: [{ label: "Possibilidade incerta", isCorrect: true }, { label: "Obrigação absoluta", isCorrect: false }, { label: "Habilidade passada", isCorrect: false }] },
        { question: "2. Qual expressão significa 'É provável que...'?", options: [{ label: "It is likely that...", isCorrect: true }, { label: "It is unlikely that...", isCorrect: false }, { label: "I doubt that...", isCorrect: false }] },
        { question: "3. 'I'm not completely sure' transmite:", options: [{ label: "Dúvida moderada", isCorrect: true }, { label: "Certeza de 100%", isCorrect: false }, { label: "Recusa categórica", isCorrect: false }] },
        { question: "4. Qual a diferença entre 'will' e 'might'?", options: [{ label: "'Will' indica certeza/decisão; 'might' indica dúvida/possibilidade", isCorrect: true }, { label: "'Might' é para o passado e 'will' para o presente", isCorrect: false }, { label: "Não há diferença gramatical", isCorrect: false }] },
        { question: "5. Em 'She might not know the answer', a intenção é:", options: [{ label: "Dizer que talvez ela não saiba a resposta", isCorrect: true }, { label: "Proibir ela de saber a resposta", isCorrect: false }, { label: "Afirmar que ela sabe com certeza", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 2: LIFE EXPERIENCES, CAUSES & UNFORESEEN EVENTS (MÓDULOS 5 A 8)
// ------------------------------------------

const MODULO_EN_B1_05 = {
    id: "en_b1_mod_05",
    title: "Life Experiences with 'Present Perfect'",
    section: 2,
    sectionTitle: "Life Experiences, Causes & Unforeseen Events",
    level: "B1",
    xpReward: 145,
    stage1_context: {
        audioGuide: "Have you ever visited Japan? I have already traveled to Tokyo twice.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Dominar o Present Perfect para falar de experiências de vida acumuladas sem especificar a data exata."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Have you ever...? / I have never...", romaji: "/hæv juː ˈevər/", translation: "Você já... (alguma vez na vida)? / Eu nunca...", timeContext: "Perguntas e negações sobre experiências de vida." },
        { type: "vocab", kanji: "Already / Yet / Just", romaji: "/ɔːlˈredi / jet / dʒʌst/", translation: "Já (afirmativa) / Já, ainda (negativa/pergunta) / Acabar de", timeContext: "Adverbiais temporais do Present Perfect." },
        { type: "grammar_pill", title: "Fórmula do Present Perfect", rule: "Usa-se o auxiliar HAVE/HAS seguido do verbo no Past Participle (3ª coluna dos verbos). É usado para ações passadas onde o tempo exato NÃO é mencionado ou importa a experiência no presente.", formula: "Subject + have/has + Past Participle", example: "I HAVE VISITED Paris. She HAS TRIED sushi." },
        { type: "grammar_pill", title: "Diferença: 'Been to' vs. 'Gone to'", rule: "'Have been to' significa que a pessoa foi e JÁ VOLTOU. 'Have gone to' significa que a pessoa foi e AINDA ESTÁ LÁ.", formula: "Been to = foi e voltou | Gone to = foi e não voltou", example: "He has been to Italy. (Ele já esteve na Itália e voltou)." }
    ],
    stage3_practice: [
        { question: "1. Como perguntar a alguém se ela 'já viajou para o exterior' na vida?", options: [{ label: "Have you ever traveled abroad?", isCorrect: true }, { label: "Did you ever traveled abroad?", isCorrect: false }, { label: "Have you ever travel abroad?", isCorrect: false }] },
        { question: "2. Qual o Particípio Passado (3ª coluna) do verbo 'eat'?", options: [{ label: "eaten", isCorrect: true }, { label: "ate", isCorrect: false }, { label: "eating", isCorrect: false }] },
        { question: "3. Complete a frase: 'She ___ never seen snow before.'", options: [{ label: "has", isCorrect: true }, { label: "have", isCorrect: false }, { label: "is", isCorrect: false }] },
        { question: "4. Qual a posição correta do advérbio 'already'?", options: [{ label: "I have already finished my homework.", isCorrect: true }, { label: "I already have finished my homework.", isCorrect: false }, { label: "I have finished already my homework.", isCorrect: false }] },
        { question: "5. 'My boss has gone to London' significa que ele:", options: [{ label: "Está em Londres no momento", isCorrect: true }, { label: "Já voltou de Londres", isCorrect: false }, { label: "Nunca foi a Londres", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Have you ever tried traditional Japanese food?", translation: "Você já experimentou comida tradicional japonesa?", chunks: ["Have", "you", "ever", "tried", "traditional", "Japanese", "food", "?"] },
        { sentenceEn: "I have already seen that movie three times.", translation: "Eu já vi aquele filme três vezes.", chunks: ["I", "have", "already", "seen", "that", "movie", "three", "times", "."] }
    ],
    stage4_dialog: [
        { npcName: "Laura", npcMessage: "Have you ever visited a European country?", options: [{ text: "Yes, I have been to Spain and France.", isCorrect: true, feedback: "Perfeito! 'Have been to' indica que esteve lá e voltou." }, { text: "Yes, I have go to Spain.", isCorrect: false, feedback: "Use o particípio passado 'been' ou 'gone'." }, { text: "Yes, I did visited France.", isCorrect: false, feedback: "Mistura incorreta de auxiliares." }] },
        { npcName: "Daniel", npcMessage: "Has Sarah finished the report yet?", options: [{ text: "No, she hasn't finished it yet.", isCorrect: true, feedback: "Uso impecável de 'yet' no final da frase negativa!" }, { text: "No, she has already not finished.", isCorrect: false, feedback: "Use 'yet' no final em frases negativas." }, { text: "Yes, she finish it.", isCorrect: false, feedback: "Falta o verbo no Present Perfect." }] },
        { npcName: "Kevin", npcMessage: "Would you like something to eat?", options: [{ text: "No, thanks, I have just had lunch.", isCorrect: true, feedback: "Excelente uso de 'just' para ações recém-concluídas!" }, { text: "No, I have ever eaten.", isCorrect: false, feedback: "'Ever' é usado em perguntas." }, { text: "No, I just eating.", isCorrect: false, feedback: "Estrutura incompleta." }] }
    ],
    stage5_quiz: [
        { question: "1. O Present Perfect é formado por:", options: [{ label: "Have/Has + Participio Passado", isCorrect: true }, { label: "Do/Does + Verbo Base", isCorrect: false }, { label: "Was/Were + Gerúndio", isCorrect: false }] },
        { question: "2. O advérbio 'ever' é usado principalmente em:", options: [{ label: "Perguntas sobre experiências", isCorrect: true }, { label: "Respostas afirmativas no futuro", isCorrect: false }, { label: "Ordens imperativas", isCorrect: false }] },
        { question: "3. 'Yet' em frases negativas e interrogativas fica posicionada:", options: [{ label: "No final da frase", isCorrect: true }, { label: "Antes do verbo auxiliar", isCorrect: false }, { label: "Entre o sujeito e o verbo", isCorrect: false }] },
        { question: "4. Qual a 3ª forma do verbo 'see'?", options: [{ label: "seen", isCorrect: true }, { label: "saw", isCorrect: false }, { label: "seeing", isCorrect: false }] },
        { question: "5. 'I have just arrived' indica que eu cheguei:", options: [{ label: "Há poucos instantes", isCorrect: true }, { label: "Há dez anos", isCorrect: false }, { label: "Amanhã cedo", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_06 = {
    id: "en_b1_mod_06",
    title: "Present Perfect vs. Past Simple",
    section: 2,
    sectionTitle: "Life Experiences, Causes & Unforeseen Events",
    level: "B1",
    xpReward: 150,
    stage1_context: {
        audioGuide: "I visited London in 2018 (Past Simple). I have visited London twice (Present Perfect). Notice the difference?",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Diferenciar com clareza o uso do Past Simple (tempo definido no passado) e do Present Perfect (tempo indefinido ou conectado ao presente)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Yesterday / Last year / In 2020", romaji: "/ˈjestərdeɪ/", translation: "Ontem / Ano passado / Em 2020", timeContext: "Expressões de tempo acabado (marcam o Past Simple)." },
        { type: "vocab", kanji: "Since 2010 / For 5 years", romaji: "/sɪns / fɔːr/", translation: "Desde 2010 / Por 5 anos", timeContext: "Marcadores de duração contínua no Present Perfect." },
        { type: "grammar_pill", title: "Regra de Ouro: Tempo Definido vs. Indefinido", rule: "Se você menciona QUANDO a ação aconteceu no passado (ex: yesterday, last week, in 2015), USE PAST SIMPLE. Se o tempo NÃO é especificado ou a ação continua no presente, USE PRESENT PERFECT.", formula: "Specific time ➔ Past Simple | Unspecified time / Continuous ➔ Present Perfect", example: "I saw him YESTERDAY. (Past) vs. I have seen him ALREADY. (Present Perfect)" },
        { type: "grammar_pill", title: "'Since' vs. 'For'", rule: "'Since' marca o ponto de início (Since 2015, Since Monday). 'For' indica a duração total do tempo (For 10 years, For two hours).", formula: "Since + Start Point | For + Duration", example: "I have worked here SINCE 2020. | I have worked here FOR 4 years." }
    ],
    stage3_practice: [
        { question: "1. Qual frase está gramaticalmente CORRETA?", options: [{ label: "I visited my grandparents last Sunday.", isCorrect: true }, { label: "I have visited my grandparents last Sunday.", isCorrect: false }, { label: "I visit my grandparents last Sunday.", isCorrect: false }] },
        { question: "2. Escolha a opção correta para a lacuna: 'She has lived here ___ ten years.'", options: [{ label: "for", isCorrect: true }, { label: "since", isCorrect: false }, { label: "ago", isCorrect: false }] },
        { question: "3. Complete a frase: 'We ___ to Japan in 2019.'", options: [{ label: "went", isCorrect: true }, { label: "have gone", isCorrect: false }, { label: "have been going", isCorrect: false }] },
        { question: "4. Qual marcador exige o uso do Past Simple?", options: [{ label: "Yesterday morning", isCorrect: true }, { label: "Ever", isCorrect: false }, { label: "Already", isCorrect: false }] },
        { question: "5. 'He has worked here since 2015' significa que ele:", options: [{ label: "Começou em 2015 e continua trabalhando aqui", isCorrect: true }, { label: "Trabalhou apenas no ano de 2015", isCorrect: false }, { label: "Demitiu-se em 2015", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I lost my keys yesterday, but I have found them today.", translation: "Eu perdi minhas chaves ontem, mas eu as encontrei hoje.", chunks: ["I", "lost", "my", "keys", "yesterday", ",", "but", "I", "have", "found", "them", "today", "."] },
        { sentenceEn: "She has known him since high school.", translation: "Ela o conhece desde o ensino médio.", chunks: ["She", "has", "known", "him", "since", "high", "school", "."] }
    ],
    stage4_dialog: [
        { npcName: "Mark", npcMessage: "Did you see the new Spider-Man movie last night?", options: [{ text: "Yes, I saw it last night with my brother.", isCorrect: true, feedback: "Correto! 'Last night' exige Past Simple ('saw')." }, { text: "Yes, I have seen it last night.", isCorrect: false, feedback: "Não use Present Perfect com marcadores de tempo definido como 'last night'." }, { text: "Yes, I see it yesterday.", isCorrect: false, feedback: "Erro no tempo do verbo." }] },
        { npcName: "Chloe", npcMessage: "How long have you studied English?", options: [{ text: "I have studied English for three years.", isCorrect: true, feedback: "Excelente uso de 'have studied' + 'for'!" }, { text: "I studied English since three years.", isCorrect: false, feedback: "Use 'for' para duração (three years)." }, { text: "I am study for three years.", isCorrect: false, feedback: "Estrutura incorreta." }] },
        { npcName: "Steve", npcMessage: "When did you buy this smartphone?", options: [{ text: "I bought it two months ago.", isCorrect: true, feedback: "Resposta exata no Past Simple para 'When'." }, { text: "I have bought it two months ago.", isCorrect: false, feedback: "'Ago' é exclusivo do Past Simple." }, { text: "I buy it since two months.", isCorrect: false, feedback: "Tempo verbal incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. Usamos Past Simple quando o tempo da ação é:", options: [{ label: "Definido e concluído", isCorrect: true }, { label: "Indefinido ou em aberto", isCorrect: false }, { label: "Totalmente futuro", isCorrect: false }] },
        { question: "2. 'Ago' é utilizado exclusivamente com qual tempo verbal?", options: [{ label: "Past Simple", isCorrect: true }, { label: "Present Perfect", isCorrect: false }, { label: "Future Continuous", isCorrect: false }] },
        { question: "3. 'Since' deve ser seguido de:", options: [{ label: "Um momento inicial específico (ex: 9 AM, 2018)", isCorrect: true }, { label: "Uma duração acumulada (ex: 5 horas)", isCorrect: false }, { label: "Um verbo no gerúndio", isCorrect: false }] },
        { question: "4. Qual sentença está incorreta?", options: [{ label: "I have seen him yesterday.", isCorrect: true }, { label: "I saw him yesterday.", isCorrect: false }, { label: "I have seen him before.", isCorrect: false }] },
        { question: "5. 'For six months' indica:", options: [{ label: "A duração de um período de seis meses", isCorrect: true }, { label: "O dia exato de seis meses atrás", isCorrect: false }, { label: "Uma data no futuro", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_07 = {
    id: "en_b1_mod_07",
    title: "Explaining Reasons & Consequences",
    section: 2,
    sectionTitle: "Life Experiences, Causes & Unforeseen Events",
    level: "B1",
    xpReward: 150,
    stage1_context: {
        audioGuide: "The flight was delayed due to bad weather. As a result, we missed our connecting flight.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar causas, razões e consequências de maneira formal e encadeada usando conectores como 'due to', 'owing to', 'as a result' e 'therefore'."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Due to / Owing to", romaji: "/djuː tuː / ˈoʊɪŋ tuː/", translation: "Devido a / Em razão de", timeContext: "Conectores de causa seguidos de substantivo ou pronome." },
        { type: "vocab", kanji: "As a result / Therefore", romaji: "/æz ə rɪˈzʌlt / ˈðerfɔːr/", translation: "Como resultado / Portanto", timeContext: "Conectores de consequência formal." },
        { type: "grammar_pill", title: "Conectores Causais: 'Due to' + Noun", rule: "'Due to' e 'Owing to' devem ser seguidos diretamente por um substantivo ou grupo nominal (ou pela estrutura 'the fact that').", formula: "Due to + [Substantivo] | Due to + the fact that + [Oração]", example: "Due to heavy rain, the event was canceled." },
        { type: "grammar_pill", title: "Conectores de Consequência: 'As a result' & 'Therefore'", rule: "'As a result' e 'Therefore' introduzem a consequência de algo mencionado anteriormente e costumam vir iniciados por ponto ou vírgula.", formula: "[Causa]. Therefore, + [Consequência]", example: "He didn't study. Therefore, he failed the exam." }
    ],
    stage3_practice: [
        { question: "1. Qual conector causa exige um substantivo logo após?", options: [{ label: "Due to", isCorrect: true }, { label: "Because", isCorrect: false }, { label: "Since", isCorrect: false }] },
        { question: "2. Como se traduz 'Como resultado' em um contexto formal?", options: [{ label: "As a result", isCorrect: true }, { label: "For a result", isCorrect: false }, { label: "Resulting why", isCorrect: false }] },
        { question: "3. Complete a frase: 'The match was canceled ___ the storm.'", options: [{ label: "owing to", isCorrect: true }, { label: "because of that", isCorrect: false }, { label: "consequently of", isCorrect: false }] },
        { question: "4. Qual opção representa a melhor sequência de consequência?", options: [{ label: "She worked hard. Consequently, she got promoted.", isCorrect: true }, { label: "She worked hard. Due to, she got promoted.", isCorrect: false }, { label: "She worked hard. Owing to she got promoted.", isCorrect: false }] },
        { question: "5. 'Therefore' é sinônimo de:", options: [{ label: "Thus / Consequently / Portanto", isCorrect: true }, { label: "However / Mas", isCorrect: false }, { label: "Although / Embora", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "The flight was delayed due to heavy snowfall.", translation: "O voo foi atrasado devido à forte queda de neve.", chunks: ["The", "flight", "was", "delayed", "due", "to", "heavy", "snowfall", "."] },
        { sentenceEn: "He missed the bus; as a result, he was late for work.", translation: "Ele perdeu o ônibus; como resultado, ele se atrasou para o trabalho.", chunks: ["He", "missed", "the", "bus", ";", "as", "a", "result", ",", "he", "was", "late", "for", "work", "."] }
    ],
    stage4_dialog: [
        { npcName: "Manager", npcMessage: "Why was the project deadline missed?", options: [{ text: "The delay was due to technical difficulties with the server.", isCorrect: true, feedback: "Excelente! Resposta formal e bem fundamentada com 'due to'." }, { text: "It was missing because of due to server.", isCorrect: false, feedback: "Não duplique 'because of' e 'due to'." }, { text: "As a result we missed.", isCorrect: false, feedback: "Ela perguntou o motivo (causa), não a consequência." }] },
        { npcName: "Reporter", npcMessage: "How did the storm affect the electricity in town?", options: [{ text: "Many trees fell down. Consequently, power was cut off.", isCorrect: true, feedback: "Uso impecável de 'Consequently' para detalhar o efeito!" }, { text: "Owing to power was cut off.", isCorrect: false, feedback: "'Owing to' deve ser seguido de substantivo." }, { text: "Because rain so power cut.", isCorrect: false, feedback: "Linguagem informal demais." }] },
        { npcName: "Officer", npcMessage: "Why is the road closed today?", options: [{ text: "It is closed owing to road maintenance.", isCorrect: true, feedback: "Ótimo uso de 'owing to'!" }, { text: "It closed therefore maintenance.", isCorrect: false, feedback: "'Therefore' indica consequência, não razão." }, { text: "Due to is closed.", isCorrect: false, feedback: "Estrutura incorreta." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Due to' significa:", options: [{ label: "Devido a", isCorrect: true }, { label: "Além de", isCorrect: false }, { label: "Apesar de", isCorrect: false }] },
        { question: "2. Qual dos conectores indica CONSEQUÊNCIA?", options: [{ label: "Therefore", isCorrect: true }, { label: "Because of", isCorrect: false }, { label: "Due to", isCorrect: false }] },
        { question: "3. 'Owing to the traffic, we arrived late' - a causa do atraso foi:", options: [{ label: "O trânsito", isCorrect: true }, { label: "O horário de saída", isCorrect: false }, { label: "O clima", isCorrect: false }] },
        { question: "4. Qual das frases está correta?", options: [{ label: "He didn't study; as a result, he failed.", isCorrect: true }, { label: "He didn't study; due to, he failed.", isCorrect: false }, { label: "He didn't study; because of, he failed.", isCorrect: false }] },
        { question: "5. Para usar 'due to' com uma oração completa (sujeito + verbo), adiciona-se:", options: [{ label: "the fact that", isCorrect: true }, { label: "owing that", isCorrect: false }, { label: "therefore that", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_08 = {
    id: "en_b1_mod_08",
    title: "Regrets, Accidents & Mistakes",
    section: 2,
    sectionTitle: "Life Experiences, Causes & Unforeseen Events",
    level: "B1",
    xpReward: 155,
    stage1_context: {
        audioGuide: "I shouldn't have left my wallet in the car. I ended up getting a ticket.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar arrenpendimento do passado (should have / shouldn't have) e descrever imprevistos usando 'ended up' e introdução à Voz Passiva."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Should have / Shouldn't have", romaji: "/ʃʊd hæv / ˈʃʊdnt hæv/", translation: "Deveria ter / Não deveria ter", timeContext: "Expressão de remorso ou conselho no passado." },
        { type: "vocab", kanji: "End up", romaji: "/end ʌp/", translation: "Acabar (acontecendo/indo)", timeContext: "Resultado de uma sequência inesperada de fatos." },
        { type: "grammar_pill", title: "Arrependimentos: Should Have + Past Participle", rule: "Para expressar que você se arrepende de algo no passado ou que uma ação ideal não ocorreu, use 'should have' ou 'shouldn't have' + 3ª forma do verbo.", formula: "Subject + should (not) have + Past Participle", example: "I SHOULD HAVE STUDIED more. (Eu deveria ter estudado mais)." },
        { type: "grammar_pill", title: "Imprevistos com 'End Up'", rule: "Após o phrasal verb 'end up', o verbo seguinte fica obrigatoriamente no gerúndio (-ing).", formula: "End up + Verb(-ing)", example: "We got lost and ENDED UP TAKING a taxi." }
    ],
    stage3_practice: [
        { question: "1. Como expressar arrependimento por não ter comprado um ingresso?", options: [{ label: "I should have bought the ticket.", isCorrect: true }, { label: "I should buy the ticket yesterday.", isCorrect: false }, { label: "I had to bought the ticket.", isCorrect: false }] },
        { question: "2. Qual a estrutura correta para 'Nós acabamos ficando em casa'?", options: [{ label: "We ended up staying at home.", isCorrect: true }, { label: "We ended up to stay at home.", isCorrect: false }, { label: "We ended up stayed at home.", isCorrect: false }] },
        { question: "3. 'She shouldn't have said that' indica que ela:", options: [{ label: "Falou algo e agora se arrepende", isCorrect: true }, { label: "Não deve falar isso no futuro", isCorrect: false }, { label: "Falou a coisa certa no momento", isCorrect: false }] },
        { question: "4. Complete a frase na Voz Passiva de imprevisto: 'My bike ___ stolen last night.'", options: [{ label: "was", isCorrect: true }, { label: "has", isCorrect: false }, { label: "did", isCorrect: false }] },
        { question: "5. Qual a forma contraída falada de 'should have'?", options: [{ label: "should've /ʃʊdəv/", isCorrect: true }, { label: "should'of", isCorrect: false }, { label: "shoulden", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I shouldn't have eaten so much junk food.", translation: "Eu não deveria ter comido tanta besteira.", chunks: ["I", "shouldn't", "have", "eaten", "so", "much", "junk", "food", "."] },
        { sentenceEn: "We took the wrong turn and ended up getting lost.", translation: "Nós pegamos a entrada errada e acabamos nos perdendo.", chunks: ["We", "took", "the", "wrong", "turn", "and", "ended", "up", "getting", "lost", "."] }
    ],
    stage4_dialog: [
        { npcName: "Hannah", npcMessage: "I failed my driving test today...", options: [{ text: "Oh no! You should have practiced parking a bit more.", isCorrect: true, feedback: "Conselho empático usando 'should have' + particípio!" }, { text: "You should practice yesterday.", isCorrect: false, feedback: "Use 'should have practiced' para o passado." }, { text: "You ended up pass.", isCorrect: false, feedback: "Construção gramatical incorreta." }] },
        { npcName: "Leo", npcMessage: "Why were you late for the movie?", options: [{ text: "We took the wrong subway line and ended up arriving late.", isCorrect: true, feedback: "Uso impecável de 'ended up arriving'!" }, { text: "We ended up to arrive late.", isCorrect: false, feedback: "Lembre-se: 'ended up' exige gerúndio (-ing)." }, { text: "I shouldn't arrive.", isCorrect: false, feedback: "Fora de sentido." }] },
        { npcName: "Grace", npcMessage: "My phone was stolen at the concert!", options: [{ text: "I'm so sorry! You shouldn't have left it in your back pocket.", isCorrect: true, feedback: "Excelente estrutura com 'shouldn't have left'!" }, { text: "You shouldn't leave it yesterday.", isCorrect: false, feedback: "Use 'shouldn't have left'." }, { text: "It was end up stolen.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. 'I should have called you' significa:", options: [{ label: "Eu deveria ter te ligado (mas não liguei)", isCorrect: true }, { label: "Eu te liguei ontem", isCorrect: false }, { label: "Eu vou te ligar agora", isCorrect: false }] },
        { question: "2. Após 'ended up', o verbo seguinte deve estar no:", options: [{ label: "Gerúndio (-ing)", isCorrect: true }, { label: "Infinitivo com to", isCorrect: false }, { label: "Participio passado", isCorrect: false }] },
        { question: "3. Qual a forma negativa de 'should have + participle'?", options: [{ label: "shouldn't have + participle", isCorrect: true }, { label: "don't should have + participle", isCorrect: false }, { label: "should haven't + participle", isCorrect: false }] },
        { question: "4. Na frase 'The car was repaired', o foco está:", options: [{ label: "Na ação ocorrida com o carro (Voz Passiva)", isCorrect: true }, { label: "Em quem consertou o carro", isCorrect: false }, { label: "No preço do conserto", isCorrect: false }] },
        { question: "5. 'We ended up spending all our money' significa que:", options: [{ label: "No final das contas, gastamos todo o nosso dinheiro", isCorrect: true }, { label: "Decidimos economizar tudo", isCorrect: false }, { label: "Nunca tivemos dinheiro", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 3: HYPOTHESES, CONDITIONS & LIFE CHANGES (MÓDULOS 9 A 12)
// ------------------------------------------

const MODULO_EN_B1_09 = {
    id: "en_b1_mod_09",
    title: "First Conditional (Real Possibilities)",
    section: 3,
    sectionTitle: "Hypotheses, Conditions & Life Changes",
    level: "B1",
    xpReward: 160,
    stage1_context: {
        audioGuide: "If it rains tomorrow, I will stay at home. If you study hard, you will pass the exam.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar condições reais e prováveis para o futuro usando a estrutura do First Conditional (If + Present, Will + Verb)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "If / Unless", romaji: "/ɪf / ənˈles/", translation: "Se / A não ser que (A menos que)", timeContext: "Conectores de condição real e alternativa." },
        { type: "vocab", kanji: "As soon as / Provided that", romaji: "/æz suːn æz/", translation: "Assim que / Contanto que", timeContext: "Marcadores temporais e condicionais de futuro." },
        { type: "grammar_pill", title: "Estrutura do First Conditional", rule: "A oração da condição (com 'If') fica no PRESENT SIMPLE, e a oração do resultado fica no FUTURE SIMPLE (Will + Verbo base). NUNCA use 'will' logo após o 'if'!", formula: "If + Present Simple, Subject + Will + Verb base", example: "IF IT RAINS, I WILL STAY home. (NÃO: If it will rain...)" },
        { type: "grammar_pill", title: "'Unless' = 'If... not'", rule: "'Unless' significa 'a não ser que' ou 'a menos que' e já possui sentido negativo. Não use negação dupla com 'unless'.", formula: "Unless + Affirmative Verb = If + Negative Verb", example: "UNLESS YOU STUDY, you won't pass = IF YOU DON'T STUDY, you won't pass." }
    ],
    stage3_practice: [
        { question: "1. Qual frase segue a regra gramatical CORRETA do First Conditional?", options: [{ label: "If I have time tomorrow, I will call you.", isCorrect: true }, { label: "If I will have time tomorrow, I will call you.", isCorrect: false }, { label: "If I have time tomorrow, I call you.", isCorrect: false }] },
        { question: "2. Como se traduz 'A menos que você me ajude, não terminarei'?", options: [{ label: "Unless you help me, I won't finish.", isCorrect: true }, { label: "Unless you don't help me, I won't finish.", isCorrect: false }, { label: "If you help me, I won't finish.", isCorrect: false }] },
        { question: "3. Complete a frase: 'If she ___ hard, she will get the promotion.'", options: [{ label: "works", isCorrect: true }, { label: "will work", isCorrect: false }, { label: "worked", isCorrect: false }] },
        { question: "4. Qual a pontuação correta se a oração com 'If' vier no início?", options: [{ label: "Usa-se vírgula entre as duas orações", isCorrect: true }, { label: "Usa-se ponto final obrigatoriamente", isCorrect: false }, { label: "Não se usa nenhuma pontuação", isCorrect: false }] },
        { question: "5. 'Provided that you pay in cash, you will get a discount' significa que:", options: [{ label: "Contanto que você pague em dinheiro, terá desconto", isCorrect: true }, { label: "Mesmo que você pague com cartão, terá desconto", isCorrect: false }, { label: "Você não pode pagar em dinheiro", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "If it rains tomorrow, we will cancel the picnic.", translation: "Se chover amanhã, nós cancelaremos o piquenique.", chunks: ["If", "it", "rains", "tomorrow", ",", "we", "will", "cancel", "the", "picnic", "."] },
        { sentenceEn: "Unless you hurry up, you will miss the train.", translation: "A menos que você se apresse, você perderá o trem.", chunks: ["Unless", "you", "hurry", "up", ",", "you", "will", "miss", "the", "train", "."] }
    ],
    stage4_dialog: [
        { npcName: "Manager", npcMessage: "Will we finish the report on time?", options: [{ text: "If everyone works together, we will finish before 5 PM.", isCorrect: true, feedback: "Estrutura do First Conditional perfeitamente aplicada!" }, { text: "If everyone will work, we finish.", isCorrect: false, feedback: "Não use 'will' dentro da cláusula com 'if'." }, { text: "If we work, we finished.", isCorrect: false, feedback: "Use 'will finish' na consequência." }] },
        { npcName: "Sam", npcMessage: "What will you do if the weather is nice on Sunday?", options: [{ text: "If the weather is nice, I will go to the beach.", isCorrect: true, feedback: "Resposta impecável!" }, { text: "If the weather will be nice, I go to beach.", isCorrect: false, feedback: "Lembre-se: 'if the weather IS nice'." }, { text: "I go to beach unless it rain.", isCorrect: false, feedback: "Use 'unless it rains'." }] },
        { npcName: "Amy", npcMessage: "Can I borrow your laptop for an hour?", options: [{ text: "Sure, provided that you return it by 3 PM.", isCorrect: true, feedback: "Excelente uso de 'provided that' como condição!" }, { text: "Sure, if you will return it.", isCorrect: false, feedback: "Evite 'will' após 'if'." }, { text: "Sure, unless you return it.", isCorrect: false, feedback: "'Unless' inverteria o sentido desejado." }] }
    ],
    stage5_quiz: [
        { question: "1. O First Conditional serve para indicar:", options: [{ label: "Possibilidades reais e prováveis no futuro", isCorrect: true }, { label: "Hipóteses impossíveis no passado", isCorrect: false }, { label: "Fatos científicos universais no presente", isCorrect: false }] },
        { question: "2. A oração introduzida por 'If' no First Conditional deve vir no:", options: [{ label: "Present Simple", isCorrect: true }, { label: "Future Simple (will)", isCorrect: false }, { label: "Past Simple", isCorrect: false }] },
        { question: "3. 'Unless' equivale gramaticalmente a:", options: [{ label: "If... not", isCorrect: true }, { label: "If... will", isCorrect: false }, { label: "Because of", isCorrect: false }] },
        { question: "4. Qual opção está incorreta?", options: [{ label: "If I will see him, I will tell him.", isCorrect: true }, { label: "If I see him, I will tell him.", isCorrect: false }, { label: "I will tell him if I see him.", isCorrect: false }] },
        { question: "5. 'As soon as I arrive, I will call you' indica:", options: [{ label: "Ação que ocorrerá imediatamente após a chegada", isCorrect: true }, { label: "Dúvida se vai chegar ou não", isCorrect: false }, { label: "Uma ação concluída ontem", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_10 = {
    id: "en_b1_mod_10",
    title: "Second Conditional (Hypothetical Situations)",
    section: 3,
    sectionTitle: "Hypotheses, Conditions & Life Changes",
    level: "B1",
    xpReward: 165,
    stage1_context: {
        audioGuide: "If I won the lottery, I would buy a big house. If I were you, I would take that offer.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Formular hipóteses imaginárias ou pouco prováveis no presente/futuro utilizando a estrutura do Second Conditional."
    },
    stage2_drops: [
        { type: "vocab", kanji: "If I won / If I had", romaji: "/ɪf aɪ wʌn/", translation: "Se eu ganhasse / Se eu tivesse", timeContext: "Orações hipotéticas no passado subjuntivo/simples." },
        { type: "vocab", kanji: "I would (I'd) / If I were you", romaji: "/aɪ dʊd / ɪf aɪ wɜːr juː/", translation: "Eu iria/faria (Eu...) / Se eu fosse você", timeContext: "Resultado imaginário e dar conselhos." },
        { type: "grammar_pill", title: "Estrutura do Second Conditional", rule: "A oração da condição com 'If' usa o PAST SIMPLE, e a oração do resultado usa WOULD + Verbo na forma base. Expressa situações imaginárias ou hipotéticas.", formula: "If + Past Simple, Subject + Would + Verb base", example: "If I HAD more free time, I WOULD TRAVEL the world." },
        { type: "grammar_pill", title: "Uso do 'If I WERE you' para conselhos", rule: "No inglês formal/padrão hipotético, o verbo To Be no passado para TODAS as pessoas em 'If' é 'WERE' (If I were, If he were). 'If I were you' é a forma clássica de dar conselhos.", formula: "If I were you, I would + Verb", example: "If I were you, I would see a doctor." }
    ],
    stage3_practice: [
        { question: "1. Qual frase representa o Second Conditional gramaticalmente correto?", options: [{ label: "If I had a million dollars, I would buy a yacht.", isCorrect: true }, { label: "If I have a million dollars, I would buy a yacht.", isCorrect: false }, { label: "If I would have a million dollars, I bought a yacht.", isCorrect: false }] },
        { question: "2. Como se dá um conselho usando 'If I were you'?", options: [{ label: "If I were you, I would accept the job offer.", isCorrect: true }, { label: "If I am you, I will accept the job offer.", isCorrect: false }, { label: "If I was you, I accept the job offer.", isCorrect: false }] },
        { question: "3. Complete a frase: 'If she ___ French, she would move to Paris.'", options: [{ label: "spoke", isCorrect: true }, { label: "speaks", isCorrect: false }, { label: "would speak", isCorrect: false }] },
        { question: "4. Qual a contração correta para 'I would'?", options: [{ label: "I'd", isCorrect: true }, { label: "I'w", isCorrect: false }, { label: "I've", isCorrect: false }] },
        { question: "5. 'If he lived closer, we would see him more often' implica que:", options: [{ label: "Ele NÃO mora perto no mundo real", isCorrect: true }, { label: "Ele mora muito perto no momento", isCorrect: false }, { label: "Ele vai se mudar amanhã com certeza", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "If I won the lottery, I would travel around the world.", translation: "Se eu ganhasse na loteria, eu viajaria pelo mundo.", chunks: ["If", "I", "won", "the", "lottery", ",", "I", "would", "travel", "around", "the", "world", "."] },
        { sentenceEn: "If I were you, I would talk to the manager.", translation: "Se eu fosse você, eu falaria com o gerente.", chunks: ["If", "I", "were", "you", ",", "I", "would", "talk", "to", "the", "manager", "."] }
    ],
    stage4_dialog: [
        { npcName: "Nina", npcMessage: "What would you do if you found a lost wallet in the street?", options: [{ text: "If I found a lost wallet, I would take it to the police station.", isCorrect: true, feedback: "Excelente! Resposta impecável no Second Conditional." }, { text: "If I find a wallet, I would take it.", isCorrect: false, feedback: "Para hipóteses, use o passado 'found' após 'if'." }, { text: "I will take it if I would find.", isCorrect: false, feedback: "Não coloque 'would' dentro da cláusula 'if'." }] },
        { npcName: "Lucas", npcMessage: "I have a terrible headache and a lot of work...", options: [{ text: "If I were you, I'd rest for an hour and drink water.", isCorrect: true, feedback: "Conselho perfeito usando 'If I were you' e a contração 'I'd'!" }, { text: "If I am you, I rest.", isCorrect: false, feedback: "Diga 'If I WERE you, I WOULD rest'." }, { text: "If I was you, I will rest.", isCorrect: false, feedback: "Prefira 'were' e 'would'." }] },
        { npcName: "Victor", npcMessage: "Where would you live if you could choose any country?", options: [{ text: "If I could choose, I would live in New Zealand.", isCorrect: true, feedback: "Ótimo uso de 'could' e 'would live'!" }, { text: "If I can choose, I would live.", isCorrect: false, feedback: "Use o passado 'could' na cláusula do 'if'." }, { text: "I would lived in New Zealand.", isCorrect: false, feedback: "Após 'would', use a forma base 'live'." }] }
    ],
    stage5_quiz: [
        { question: "1. O Second Conditional é utilizado para falar de:", options: [{ label: "Situações hipotéticas ou imaginárias no presente/futuro", isCorrect: true }, { label: "Fatos reais do passado", isCorrect: false }, { label: "Promessas certas de futuro", isCorrect: false }] },
        { question: "2. Após a conjunção 'If' no Second Conditional, o verbo fica no:", options: [{ label: "Past Simple", isCorrect: true }, { label: "Present Continuous", isCorrect: false }, { label: "Future Simple", isCorrect: false }] },
        { question: "3. 'If I were you' é usado principalmente para:", options: [{ label: "Dar conselhos e sugestões", isCorrect: true }, { label: "Pedir comida em restaurantes", isCorrect: false }, { label: "Contar piadas", isCorrect: false }] },
        { question: "4. Qual a forma correta do verbo To Be com 'If he...' no Second Conditional formal?", options: [{ label: "If he were...", isCorrect: true }, { label: "If he is...", isCorrect: false }, { label: "If he be...", isCorrect: false }] },
        { question: "5. 'I'd buy a sports car' é a contração de:", options: [{ label: "I would buy a sports car", isCorrect: true }, { label: "I did buy a sports car", isCorrect: false }, { label: "I had buy a sports car", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_11 = {
    id: "en_b1_mod_11",
    title: "Expressing Changes & Habits ('Used to' & 'Get used to')",
    section: 3,
    sectionTitle: "Hypotheses, Conditions & Life Changes",
    level: "B1",
    xpReward: 165,
    stage1_context: {
        audioGuide: "I used to wake up late, but now I'm getting used to waking up at 6 AM.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Diferenciar hábitos passados ('used to') do processo de adaptação a novos hábitos ('get used to / be used to')."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Used to + Verb", romaji: "/juːst tuː/", translation: "Costumava (fazer algo no passado)", timeContext: "Hábitos ou estados passados que não acontecem mais." },
        { type: "vocab", kanji: "Get used to + V(-ing)", romaji: "/ɡet juːst tuː/", translation: "Acostumar-se com / Adaptar-se", timeContext: "Processo de transição e adaptação a algo novo." },
        { type: "grammar_pill", title: "'Used to' (Hábitos Passados)", rule: "'Used to' é seguido do verbo na FORMA BASE. Indica ações habituais ou estados no passado que JÁ NÃO ocorrem mais no presente.", formula: "Subject + used to + Verb base | Negativa: didn't use to", example: "I USED TO PLAY tennis when I was young." },
        { type: "grammar_pill", title: "'Get used to' vs. 'Be used to'", rule: "'Get used to' indica o PROCESSO de se acostumar. 'Be used to' indica que a pessoa JÁ ESTÁ acostumada. Ambos exigem verbo com '-ing' ou substantivo depois!", formula: "Get/Be used to + Verb(-ing) / Noun", example: "I'm GETTING USED TO DRIVING on the left. | I AM USED TO THE COLD." }
    ],
    stage3_practice: [
        { question: "1. Qual frase descreve um hábito do passado que não ocorre mais?", options: [{ label: "I used to live in London.", isCorrect: true }, { label: "I am used to living in London.", isCorrect: false }, { label: "I get used to live in London.", isCorrect: false }] },
        { question: "2. Como fica a estrutura correta para 'Estou me acostumando a acordar cedo'?", options: [{ label: "I am getting used to waking up early.", isCorrect: true }, { label: "I am getting used to wake up early.", isCorrect: false }, { label: "I used to wake up early.", isCorrect: false }] },
        { question: "3. Qual a forma negativa de 'used to' no passado?", options: [{ label: "didn't use to", isCorrect: true }, { label: "didn't used to", isCorrect: false }, { label: "used not to", isCorrect: false }] },
        { question: "4. Após 'be used to', como deve estar o verbo seguinte?", options: [{ label: "Com a terminação -ing", isCorrect: true }, { label: "Na forma base sem to", isCorrect: false }, { label: "No passado simples", isCorrect: false }] },
        { question: "5. Complete a frase: 'She didn't ___ like spicy food, but now she loves it.'", options: [{ label: "use to", isCorrect: true }, { label: "used to", isCorrect: false }, { label: "getting used to", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I used to play basketball when I was at university.", translation: "Eu costumava jogar basquete quando eu estava na universidade.", chunks: ["I", "used", "to", "play", "basketball", "when", "I", "was", "at", "university", "."] },
        { sentenceEn: "He is getting used to working night shifts.", translation: "Ele está se acostumando a trabalhar em turnos da noite.", chunks: ["He", "is", "getting", "used", "to", "working", "night", "shifts", "."] }
    ],
    stage4_dialog: [
        { npcName: "Pedro", npcMessage: "How is living in the new city going?", options: [{ text: "It was hard at first, but I am getting used to the noise.", isCorrect: true, feedback: "Perfeito! 'Getting used to' + substantivo indica processo de adaptação." }, { text: "I used to the noise.", isCorrect: false, feedback: "Diga 'I am used to the noise'." }, { text: "I get used to noise yesterday.", isCorrect: false, feedback: "Uso incorreto." }] },
        { npcName: "Julia", npcMessage: "Do you eat meat?", options: [{ text: "No, but I used to eat meat a few years ago.", isCorrect: true, feedback: "Excelente uso de 'used to' para hábito passado!" }, { text: "No, I am used to eat meat.", isCorrect: false, feedback: "'Be used to' exige gerúndio: 'eating'." }, { text: "No, I didn't used to eat.", isCorrect: false, feedback: "Na negativa use 'didn't use to' sem o 'd'." }] },
        { npcName: "Marcus", npcMessage: "Is it difficult for you to speak in public?", options: [{ text: "Not anymore, I am used to giving presentations now.", isCorrect: true, feedback: "Uso impecável de 'am used to' + '-ing'!" }, { text: "No, I used to give presentations now.", isCorrect: false, feedback: "'Used to' é para o passado, não para 'now'." }, { text: "No, I get used to give.", isCorrect: false, feedback: "Exige gerúndio: 'giving'." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Used to + verb base' expressa:", options: [{ label: "Um hábito passado que não acontece mais", isCorrect: true }, { label: "Uma ação ocorrendo neste momento", isCorrect: false }, { label: "Uma intenção futura", isCorrect: false }] },
        { question: "2. Após 'be used to' ou 'get used to', o verbo principal deve estar no:", options: [{ label: "Gerúndio (-ing)", isCorrect: true }, { label: "Infinitivo sem to", isCorrect: false }, { label: "Participio passado", isCorrect: false }] },
        { question: "3. 'I didn't use to like tea' significa que no passado eu:", options: [{ label: "Não gostava de chá (mas agora gosto)", isCorrect: true }, { label: "Sempre gostei de chá", isCorrect: false }, { label: "Bia chá todo dia", isCorrect: false }] },
        { question: "4. Qual frase está gramaticalmente correta?", options: [{ label: "She is used to driving in heavy traffic.", isCorrect: true }, { label: "She is used to drive in heavy traffic.", isCorrect: false }, { label: "She used to driving in heavy traffic.", isCorrect: false }] },
        { question: "5. 'Getting used to' enfatiza:", options: [{ label: "O processo gradual de adaptação", isCorrect: true }, { label: "O término definitivo de um hábito", isCorrect: false }, { label: "Uma proibição", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_12 = {
    id: "en_b1_mod_12",
    title: "Trying & Experiencing New Things",
    section: 3,
    sectionTitle: "Hypotheses, Conditions & Life Changes",
    level: "B1",
    xpReward: 170,
    stage1_context: {
        audioGuide: "Why don't you give it a try? You should give it a shot and see what happens.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar encorajamento, iniciativa e disposição para tentar novas experiências utilizando expressões idiomáticas (give it a try, give it a shot, take a chance)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Give it a try / Give it a shot", romaji: "/ɡɪv ɪt ə traɪ / ʃɑːt/", translation: "Dar uma chance / Tentar a sorte", timeContext: "Expressões comuns de incentivo para encarar desafios." },
        { type: "vocab", kanji: "Take a chance / Step out of your comfort zone", romaji: "/teɪk ə tʃæns/", translation: "Arriscar-se / Sair da zona de conforto", timeContext: "Encorajar mudanças e superação pessoal." },
        { type: "grammar_pill", title: "Expressões de Incentivo com Verbos na Forma Base", rule: "Para encorajar alguém a tentar algo, usam-se estruturas imperativas ou perguntas de sugestão como 'Why don't you...?' seguidas de verbo na forma base.", formula: "Why don't you + Verb base? | You should + Verb base", example: "WHY DON'T YOU GIVE IT A SHOT? (Por que você não tenta?)" },
        { type: "grammar_pill", title: "'Try' + Gerúndio vs. 'Try' + Infinitivo", rule: "'Try to + V' significa fazer esforço para conseguir algo difícil. 'Try + V(-ing)' significa experimentar um método novo para ver se funciona.", formula: "Try to do = fazer esforço | Try doing = experimentar/testar", example: "Try taking an aspirin for your headache. (Experimente tomar)." }
    ],
    stage3_practice: [
        { question: "1. Qual expressão significa 'Dar uma chance / Tentar a sorte'?", options: [{ label: "Give it a shot", isCorrect: true }, { label: "Make a shot", isCorrect: false }, { label: "Take a try", isCorrect: false }] },
        { question: "2. Como incentivar um amigo dizendo 'Por que você não tenta'?", options: [{ label: "Why don't you give it a try?", isCorrect: true }, { label: "Why you don't give it try?", isCorrect: false }, { label: "Why not to try?", isCorrect: false }] },
        { question: "3. 'Step out of your comfort zone' significa:", options: [{ label: "Sair da sua zona de conforto", isCorrect: true }, { label: "Ficar em casa descansando", isCorrect: false }, { label: "Evitar riscos a todo custo", isCorrect: false }] },
        { question: "4. Complete a frase: 'If you want to succeed, you have to ___ a chance.'", options: [{ label: "take", isCorrect: true }, { label: "do", isCorrect: false }, { label: "make", isCorrect: false }] },
        { question: "5. Qual a diferença de sentido em 'Try adding more salt'?", options: [{ label: "Experimente adicionar mais sal para testar o sabor", isCorrect: true }, { label: "Faça um esforço supremo para adicionar sal", isCorrect: false }, { label: "É proibido adicionar sal", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "You should step out of your comfort zone and give it a shot.", translation: "Você deveria sair da sua zona de conforto e tentar a sorte.", chunks: ["You", "should", "step", "out", "of", "your", "comfort", "zone", "and", "give", "it", "a", "shot", "."] },
        { sentenceEn: "Why don't you try learning a new language?", translation: "Por que você não experimenta aprender uma nova língua?", chunks: ["Why", "don't", "you", "try", "learning", "a", "new", "language", "?"] }
    ],
    stage4_dialog: [
        { npcName: "Clara", npcMessage: "I was invited to speak at the conference, but I'm nervous...", options: [{ text: "You should definitely give it a shot! It's a great opportunity.", isCorrect: true, feedback: "Incentivo perfeito com 'give it a shot'!" }, { text: "You should to take a try.", isCorrect: false, feedback: "Não use 'to' após 'should'." }, { text: "Don't step out comfort zone.", isCorrect: false, feedback: "A expressão correta é 'step out OF YOUR comfort zone'." }] },
        { npcName: "Diego", npcMessage: "I've never tried surfing before. Is it dangerous?", options: [{ text: "Not if you take lessons. Why don't you give it a try?", isCorrect: true, feedback: "Perfeita colocação de 'give it a try'!" }, { text: "You make a shot today.", isCorrect: false, feedback: "A colocação correta é 'give it a shot'." }, { text: "Take chance without lesson.", isCorrect: false, feedback: "Faltam artigos." }] },
        { npcName: "Sophie", npcMessage: "My computer is running very slowly...", options: [{ text: "Try restarting it and see if that helps.", isCorrect: true, feedback: "Excelente uso de 'Try restarting' (gerúndio para experimentar)!" }, { text: "Try to restart it yesterday.", isCorrect: false, feedback: "Incoerência temporal." }, { text: "Give shot restarting.", isCorrect: false, feedback: "Construção incorreta." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Give it a shot' é uma expressão idiomática equivalente a:", options: [{ label: "Give it a try (Tentar)", isCorrect: true }, { label: "Shoot a gun (Atirar)", isCorrect: false }, { label: "Give up (Desistir)", isCorrect: false }] },
        { question: "2. Qual o verbo correto para formar a expressão '___ a chance' (Arriscar-se)?", options: [{ label: "Take", isCorrect: true }, { label: "Make", isCorrect: false }, { label: "Give", isCorrect: false }] },
        { question: "3. 'Why don't you...?' é usado para:", options: [{ label: "Fazer uma sugestão ou convite de forma amigável", isCorrect: true }, { label: "Criticar alguém severamente", isCorrect: false }, { label: "Contar uma mentira", isCorrect: false }] },
        { question: "4. Qual frase demonstra encorajamento?", options: [{ label: "Go for it! You have nothing to lose.", isCorrect: true }, { label: "Don't bother trying.", isCorrect: false }, { label: "It is completely impossible.", isCorrect: false }] },
        { question: "5. 'Try doing X' foca em:", options: [{ label: "Testar uma solução/experiência para ver o resultado", isCorrect: true }, { label: "Fazer uma força física enorme", isCorrect: false }, { label: "Lembrar do passado", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 4: PHRASAL VERBS & HUMAN RELATIONSHIPS (MÓDULOS 13 A 16)
// ------------------------------------------

const MODULO_EN_B1_13 = {
    id: "en_b1_mod_13",
    title: "Essential Phrasal Verbs I (Daily Actions)",
    section: 4,
    sectionTitle: "Phrasal Verbs & Human Relationships",
    level: "B1",
    xpReward: 170,
    stage1_context: {
        audioGuide: "Don't forget to turn off the lights and put on your coat before looking for your keys.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Dominar Phrasal Verbs essenciais de ações diárias (turn off, put on, take off, look for, pick up) e compreender sua separabilidade."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Turn on / Turn off", romaji: "/tɜːrn ɑːn / ɒf/", translation: "Ligar / Desligar (aparelhos, luzes)", timeContext: "Ações cotidianas com eletrônicos." },
        { type: "vocab", kanji: "Put on / Take off", romaji: "/pʊt ɑːn / teɪk ɒf/", translation: "Vestir (colocar) / Tirar (roupas/sapatos) ou Descolar (avião)", timeContext: "Ações com vestuário e aviação." },
        { type: "grammar_pill", title: "Phrasal Verbs Separáveis (Separable)", rule: "Muitos Phrasal Verbs transitivos permitem colocar o objeto ENTRE o verbo e a partícula. Se o objeto for um PRONOME (it/them/me), é OBRIGATÓRIO colocá-lo no meio!", formula: "Verb + Pronoun + Particle (OBRIGATÓRIO)", example: "Turn off the light = Turn the light off | Turn IT off (CORRETO) | Turn off IT (INCORRETO)" },
        { type: "grammar_pill", title: "'Look for' vs. 'Look after'", rule: "'Look for' significa procurar/buscar algo perdido. 'Look after' significa cuidar de alguém ou algo.", formula: "Look for = pesquisar/procurar | Look after = cuidar/zelar", example: "I am LOOKING FOR my keys. | Can you LOOK AFTER my dog?" }
    ],
    stage3_practice: [
        { question: "1. Qual a frase gramaticalmente CORRETA ao usar o pronome 'it'?", options: [{ label: "Please turn it off before you leave.", isCorrect: true }, { label: "Please turn off it before you leave.", isCorrect: false }, { label: "Please off it turn before you leave.", isCorrect: false }] },
        { question: "2. Como se diz 'Tirar os sapatos' em inglês?", options: [{ label: "Take off your shoes", isCorrect: true }, { label: "Put on your shoes", isCorrect: false }, { label: "Turn off your shoes", isCorrect: false }] },
        { question: "3. Complete a frase: 'I can't find my wallet, I am ___ it everywhere.'", options: [{ label: "looking for", isCorrect: true }, { label: "looking after", isCorrect: false }, { label: "putting on", isCorrect: false }] },
        { question: "4. O que significa 'Pick up the phone'?", options: [{ label: "Atender ou pegar o telefone", isCorrect: true }, { label: "Comprar um telefone novo", isCorrect: false }, { label: "Quebrar o telefone", isCorrect: false }] },
        { question: "5. 'The plane took off on time' indica que o avião:", options: [{ label: "Decolou no horário correto", isCorrect: true }, { label: "Pousou com atraso", isCorrect: false }, { label: "Foi cancelado", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Put on your coat and turn off the TV.", translation: "Vista seu casaco e desligue a TV.", chunks: ["Put", "on", "your", "coat", "and", "turn", "off", "the", "TV", "."] },
        { sentenceEn: "I am looking for my keys; can you help me pick them up?", translation: "Eu estou procurando minhas chaves; você pode me ajudar a pegá-las?", chunks: ["I", "am", "looking", "for", "my", "keys", ";", "can", "you", "help", "me", "pick", "them", "up", "?"] }
    ],
    stage4_dialog: [
        { npcName: "Mom", npcMessage: "It's getting very cold outside!", options: [{ text: "I will put on my jacket right now.", isCorrect: true, feedback: "Excelente uso de 'put on'!" }, { text: "I will put off my jacket.", isCorrect: false, feedback: "'Put off' significa adiar." }, { text: "I put on it.", isCorrect: false, feedback: "Com pronomes, diga 'put it on'." }] },
        { npcName: "Host", npcMessage: "Please come in! You can take off your shoes at the entrance.", options: [{ text: "Thank you! I'll take them off right away.", isCorrect: true, feedback: "Posicionamento impecável do pronome 'them'!" }, { text: "Thank you! I'll take off them.", isCorrect: false, feedback: "Coloque 'them' no meio: 'take them off'." }, { text: "I turn off my shoes.", isCorrect: false, feedback: "Verbo inadequado." }] },
        { npcName: "Colleague", npcMessage: "The radio is too loud and I can't concentrate.", options: [{ text: "No problem, I will turn it down or turn it off.", isCorrect: true, feedback: "Ótimo domínio dos phrasal verbs de aparelhos!" }, { text: "I will turn off it.", isCorrect: false, feedback: "Diga 'turn it off'." }, { text: "I look for radio.", isCorrect: false, feedback: "Fora de contexto." }] }
    ],
    stage5_quiz: [
        { question: "1. Com pronomes de objeto (it, them, me), os Phrasal Verbs separáveis exigem que o pronome fique:", options: [{ label: "Entre o verbo e a partícula", isCorrect: true }, { label: "Após a partícula obrigatoriamente", isCorrect: false }, { label: "No início da frase", isCorrect: false }] },
        { question: "2. 'Look after' é um Phrasal Verb que significa:", options: [{ label: "Cuidar / Zelar por alguém", isCorrect: true }, { label: "Procurar um objeto perdido", isCorrect: false }, { label: "Olhar para trás", isCorrect: false }] },
        { question: "3. Qual o oposto de 'put on' (referente a roupas)?", options: [{ label: "take off", isCorrect: true }, { label: "turn off", isCorrect: false }, { label: "pick up", isCorrect: false }] },
        { question: "4. 'Pick me up at 8 PM' significa:", options: [{ label: "Me busque de carro às 20h", isCorrect: true }, { label: "Me ligue às 20h", isCorrect: false }, { label: "Me acorde às 20h", isCorrect: false }] },
        { question: "5. 'Turn up the volume' indica:", options: [{ label: "Aumentar o volume", isCorrect: true }, { label: "Baixar o som", isCorrect: false }, { label: "Desligar o som", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_14 = {
    id: "en_b1_mod_14",
    title: "Essential Phrasal Verbs II (Relationships)",
    section: 4,
    sectionTitle: "Phrasal Verbs & Human Relationships",
    level: "B1",
    xpReward: 175,
    stage1_context: {
        audioGuide: "I get along well with my brother, and I know I can always count on him.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aplicar Phrasal Verbs voltados a relações sociais e relacionamentos (get along with, break up, count on, look up to, run into)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Get along with / Count on", romaji: "/ɡet əˈlɔːŋ wɪð / kaʊnt ɑːn/", translation: "Dar-se bem com / Contar com (confiar)", timeContext: "Phrasal verbs de convivência e confiança." },
        { type: "vocab", kanji: "Break up / Run into / Look up to", romaji: "/breɪk ʌp / rʌn ˈɪntuː/", translation: "Terminar namoro / Esbarrar em alguém / Admirar alguém", timeContext: "Eventos sociais e de relacionamento." },
        { type: "grammar_pill", title: "Phrasal Verbs com Três Palavras (Three-part Phrasal Verbs)", rule: "Alguns Phrasal Verbs consistem em um verbo + duas partículas (ex: get along with, look up to). Eles são SEMPRE inseparáveis. O objeto vem sempre no final!", formula: "Verb + Particle 1 + Particle 2 + Object", example: "I get along with HER. (NÃO: I get her along with)." },
        { type: "grammar_pill", title: "'Run into' vs. 'Meet'", rule: "'Run into' significa encontrar alguém por acaso/sem planejar na rua. 'Meet' refere-se a encontros combinados ou a conhecer alguém pela 1ª vez.", formula: "Run into = encontrar por acaso | Meet = encontrar de forma combinada", example: "I RAN INTO John at the supermarket yesterday." }
    ],
    stage3_practice: [
        { question: "1. Como se diz 'Eu me dou muito bem com meus colegas'?", options: [{ label: "I get along very well with my colleagues.", isCorrect: true }, { label: "I get along my colleagues with.", isCorrect: false }, { label: "I get with along my colleagues.", isCorrect: false }] },
        { question: "2. O que significa 'You can count on me'?", options: [{ label: "Você pode contar comigo / confiar em mim", isCorrect: true }, { label: "Você precisa me contar um segredo", isCorrect: false }, { label: "Você pode me pagar amanhã", isCorrect: false }] },
        { question: "3. Qual phrasal verb indica encontrar um amigo por acaso no shopping?", options: [{ label: "Run into", isCorrect: true }, { label: "Break up", isCorrect: false }, { label: "Look up to", isCorrect: false }] },
        { question: "4. Complete a frase: 'They decided to ___ up after dating for three years.'", options: [{ label: "break", isCorrect: true }, { label: "count", isCorrect: false }, { label: "run", isCorrect: false }] },
        { question: "5. 'I have always looked up to my grandfather' significa que eu:", options: [{ label: "Sempre admirei e me espelhei no meu avô", isCorrect: true }, { label: "Sempre cuidei da saúde do meu avô", isCorrect: false }, { label: "Sempre morei longe do meu avô", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I ran into an old friend at the grocery store.", translation: "Eu esbarrei em um velho amigo no mercado.", chunks: ["I", "ran", "into", "an", "old", "friend", "at", "the", "grocery", "store", "."] },
        { sentenceEn: "You can always count on her when you need help.", translation: "Você pode sempre contar com ela quando precisar de ajuda.", chunks: ["You", "can", "always", "count", "on", "her", "when", "you", "need", "help", "."] }
    ],
    stage4_dialog: [
        { npcName: "Vanessa", npcMessage: "Do you get along with your new roommate?", options: [{ text: "Yes! We get along really well and share chores.", isCorrect: true, feedback: "Excelente uso de 'get along'!" }, { text: "Yes, I get her along with.", isCorrect: false, feedback: "Este phrasal verb é inseparável." }, { text: "We break up yesterday.", isCorrect: false, feedback: "Fora de contexto com colega de quarto." }] },
        { npcName: "Ethan", npcMessage: "You won't believe who I ran into yesterday!", options: [{ text: "Who was it? Did you run into our old teacher?", isCorrect: true, feedback: "Ótima resposta no passado com 'ran into'!" }, { text: "Did you count on teacher?", isCorrect: false, feedback: "Verbo incorreto." }, { text: "Who ran you into?", isCorrect: false, feedback: "Estrutura de pergunta errada." }] },
        { npcName: "Mia", npcMessage: "Who do you admire the most in your family?", options: [{ text: "I really look up to my mother. She works so hard.", isCorrect: true, feedback: "Uso impecável de 'look up to'!" }, { text: "I look up my mother to.", isCorrect: false, feedback: "Mantenha a sequência: 'look up to [objeto]'." }, { text: "I count up to her.", isCorrect: false, feedback: "Mistura de verbos." }] }
    ],
    stage5_quiz: [
        { question: "1. 'To look up to someone' é o mesmo que:", options: [{ label: "Admirar e respeitar alguém", isCorrect: true }, { label: "Olhar para o teto", isCorrect: false }, { label: "Subestimar alguém", isCorrect: false }] },
        { question: "2. Phrasal verbs de três palavras (ex: get along with) são:", options: [{ label: "Sempre inseparáveis", isCorrect: true }, { label: "Sempre separáveis", isCorrect: false }, { label: "Usados apenas na escrita formal", isCorrect: false }] },
        { question: "3. 'Break up' em um contexto amoroso indica:", options: [{ label: "O fim de um relacionamento", isCorrect: true }, { label: "Um pedido de casamento", isCorrect: false }, { label: "Uma viagem de férias em casal", isCorrect: false }] },
        { question: "4. Qual a preposição correta para o verbo 'count' no sentido de confiar?", options: [{ label: "on (count on)", isCorrect: true }, { label: "at (count at)", isCorrect: false }, { label: "in (count in)", isCorrect: false }] },
        { question: "5. 'I ran into my cousin downtown' significa que:", options: [{ label: "Encontrei meu primo por acaso no centro", isCorrect: true }, { label: "Atravessei o centro correndo", isCorrect: false }, { label: "Bati de carro no meu primo", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_15 = {
    id: "en_b1_mod_15",
    title: "Asking for & Offering Favors",
    section: 4,
    sectionTitle: "Phrasal Verbs & Human Relationships",
    level: "B1",
    xpReward: 175,
    stage1_context: {
        audioGuide: "Would you mind closing the window? Could you do me a favor and give me a hand?",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Solicitar e oferecer favores com polidez avançada usando 'Would you mind...?', 'Could you do me a favor?' e expressões de auxílio."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Would you mind...? / Could you do me a favor?", romaji: "/wʊd juː maɪnd/", translation: "Você se importaria de...? / Poderia me fazer um favor?", timeContext: "Fórmulas polidas de solicitação." },
        { type: "vocab", kanji: "Give a hand / Help out", romaji: "/ɡɪv ə hænd/", translation: "Dar uma mão (ajudar) / Dar um auxílio", timeContext: "Colocações para ajuda prática." },
        { type: "grammar_pill", title: "A Regra de 'Would you mind...?'", rule: "A estrutura 'Would you mind' exige o verbo principal obrigatoriamente no gerúndio (-ing). Lembre-se: responder 'No, not at all' significa 'Não me importo (Sim, eu ajudo!)'.", formula: "Would you mind + Verb(-ing)...?", example: "WOULD YOU MIND OPENING the door? ➔ No, not at all! (Com prazer!)." },
        { type: "grammar_pill", title: "Respostas Polidas para Favores", rule: "Para aceitar: 'I'd be happy to!', 'Sure thing!', 'Not at all!'. Para recusar educadamente: 'I'd love to, but I'm in a rush.'", formula: "Polite Acceptance / Polite Refusal", example: "Could you help me? ➔ I'd be happy to help!" }
    ],
    stage3_practice: [
        { question: "1. Qual a forma correta do verbo após 'Would you mind...'?", options: [{ label: "Would you mind helping me with this box?", isCorrect: true }, { label: "Would you mind to help me with this box?", isCorrect: false }, { label: "Would you mind help me with this box?", isCorrect: false }] },
        { question: "2. Se alguém pergunta 'Would you mind closing the window?' e você quer AJUDAR, o que responde?", options: [{ label: "No, not at all! (Não me importo nem um pouco!)", isCorrect: true }, { label: "Yes, I mind! (Sim, me importo!)", isCorrect: false }, { label: "Yes, of course!", isCorrect: false }] },
        { question: "3. Como pedir para alguém 'dar uma mão' com o trabalho?", options: [{ label: "Could you give me a hand with this?", isCorrect: true }, { label: "Could you give me a foot?", isCorrect: false }, { label: "Do you make a hand?", isCorrect: false }] },
        { question: "4. Complete a frase: 'Could you do me a ___, please?'", options: [{ label: "favor", isCorrect: true }, { label: "flavor", isCorrect: false }, { label: "fever", isCorrect: false }] },
        { question: "5. Qual a forma mais educada de recusar um pedido por falta de tempo?", options: [{ label: "I'd love to help, but I'm running late right now.", isCorrect: true }, { label: "No, I don't want to.", isCorrect: false }, { label: "Don't ask me that.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Would you mind turning down the music a little bit?", translation: "Você se importaria de baixar a música um pouquinho?", chunks: ["Would", "you", "mind", "turning", "down", "the", "music", "a", "little", "bit", "?"] },
        { sentenceEn: "Could you do me a favor and hold this bag?", translation: "Você poderia me fazer um favor e segurar esta bolsa?", chunks: ["Could", "you", "do", "me", "a", "favor", "and", "hold", "this", "bag", "?"] }
    ],
    stage4_dialog: [
        { npcName: "Neighbor", npcMessage: "Would you mind holding the elevator door for me?", options: [{ text: "No, not at all! Step right in.", isCorrect: true, feedback: "Resposta perfeita e super polida!" }, { text: "Yes, I mind holding.", isCorrect: false, feedback: "'Yes, I mind' soaria como 'Não quero segurar'." }, { text: "Would mind no.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Colleague", npcMessage: "I have too many files to carry. Could you give me a hand?", options: [{ text: "Sure thing! Let me take those heavy boxes for you.", isCorrect: true, feedback: "Oferecimento amigável e correto!" }, { text: "I give you a foot.", isCorrect: false, feedback: "A expressão é 'give a hand'." }, { text: "No, I mind.", isCorrect: false, feedback: "Ríspido e fora de contexto." }] },
        { npcName: "Tourist", npcMessage: "Excuse me, could you do me a favor and take a picture of us?", options: [{ text: "Of course! Say cheese!", isCorrect: true, feedback: "Atendimento gentil ao pedido de favor!" }, { text: "Would you mind take picture?", isCorrect: false, feedback: "Ele que fez a pergunta a você." }, { text: "I do no favor.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. A estrutura 'Would you mind' exige o verbo principal com:", options: [{ label: "-ing (gerúndio)", isCorrect: true }, { label: "to + infinitivo", isCorrect: false }, { label: "-ed (passado)", isCorrect: false }] },
        { question: "2. Responder 'Not at all' a um pedido com 'Would you mind' significa:", options: [{ label: "Que você concorda em fazer o favor de bom grado", isCorrect: true }, { label: "Que você se recusa veementemente", isCorrect: false }, { label: "Que você não entendeu a pergunta", isCorrect: false }] },
        { question: "3. 'Give someone a hand' é uma expressão idiomática para:", options: [{ label: "Ajudar / Auxiliar alguém", isCorrect: true }, { label: "Cumprimentar com aperto de mão", isCorrect: false }, { label: "Dar uma palmada", isCorrect: false }] },
        { question: "4. Qual a melhor maneira de pedir um favor a um chefe ou cliente?", options: [{ label: "Would it be possible for you to help me?", isCorrect: true }, { label: "Do me this now!", isCorrect: false }, { label: "Give hand quick!", isCorrect: false }] },
        { question: "5. 'Could you do me a favor?' exige qual verbo auxiliar?", options: [{ label: "do (do a favor)", isCorrect: true }, { label: "make (make a favor)", isCorrect: false }, { label: "give (give a favor)", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_16 = {
    id: "en_b1_mod_16",
    title: "Reporting What Others Said (Reported Speech)",
    section: 4,
    sectionTitle: "Phrasal Verbs & Human Relationships",
    level: "B1",
    xpReward: 180,
    stage1_context: {
        audioGuide: "He said that he was busy. She told me that she had already finished the project.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Relatar falas e informações de terceiros (Reported Speech) aplicando o recuo de tempos verbais (backshifting) e adequação de pronomes."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Said that... / Told me that...", romaji: "/sed ðæt / toʊld miː ðæt/", translation: "Disse que... / Me disse que...", timeContext: "Verbos de relato principal." },
        { type: "vocab", kanji: "Backshifting", romaji: "/ˈbæk.ʃɪft.ɪŋ/", translation: "Regressão temporal", timeContext: "Regra de recuo dos tempos verbais ao relatar o passado." },
        { type: "grammar_pill", title: "Said vs. Told", rule: "Usamos 'SAY' sem objeto indireto (He said that...). Usamos 'TELL' obrigatoriamente com a pessoa a quem se falou (He told ME that... / She told US that...).", formula: "Say + (that) + Clause | Tell + Person + (that) + Clause", example: "He SAID that he was tired. | He TOLD ME that he was tired." },
        { type: "grammar_pill", title: "Regra do Backshifting (Recuo de Tempos)", rule: "Ao relatar no passado o que alguém disse, os tempos verbais costumam recuar um passo no tempo: Present Simple ➔ Past Simple | Present Perfect ➔ Past Perfect | Will ➔ Would.", formula: "Present ➔ Past | Will ➔ Would | Can ➔ Could", example: "Direct: 'I am happy' ➔ Reported: He said he WAS happy." }
    ],
    stage3_practice: [
        { question: "1. Qual a forma correta do Reported Speech para a fala direta 'I am working'?", options: [{ label: "He said that he was working.", isCorrect: true }, { label: "He said that he is working.", isCorrect: false }, { label: "He told that he was working.", isCorrect: false }] },
        { question: "2. Qual a diferença fundamental entre 'say' e 'tell'?", options: [{ label: "'Tell' exige o objeto/pessoa (told me), enquanto 'say' não exige (said that)", isCorrect: true }, { label: "'Say' é para o futuro e 'tell' é para o passado", isCorrect: false }, { label: "Não existe diferença gramatical", isCorrect: false }] },
        { question: "3. Transforme a fala 'I will help you tomorrow' para o discurso indireto:", options: [{ label: "She said she would help me the next day.", isCorrect: true }, { label: "She told she will help me tomorrow.", isCorrect: false }, { label: "She said that she can help me tomorrow.", isCorrect: false }] },
        { question: "4. Complete a frase: 'Mark ___ me that he had already bought the tickets.'", options: [{ label: "told", isCorrect: true }, { label: "said", isCorrect: false }, { label: "spoke", isCorrect: false }] },
        { question: "5. Em Reported Speech, o verbo modal 'can' recua para:", options: [{ label: "could", isCorrect: true }, { label: "would", isCorrect: false }, { label: "mighted", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "She told me that she was living in London.", translation: "Ela me disse que estava morando em Londres.", chunks: ["She", "told", "me", "that", "she", "was", "living", "in", "London", "."] },
        { sentenceEn: "He said that he would call me later.", translation: "Ele disse que me ligaria mais tarde.", chunks: ["He", "said", "that", "he", "would", "call", "me", "later", "."] }
    ],
    stage4_dialog: [
        { npcName: "Paul", npcMessage: "What did the doctor tell you during your check-up?", options: [{ text: "Dr. Smith told me that I needed to exercise more.", isCorrect: true, feedback: "Excelente aplicação de 'told me' + recuo para o passado!" }, { text: "He said me that I need exercise.", isCorrect: false, feedback: "Use 'said THAT I needed' ou 'told ME that I needed'." }, { text: "He told that I was needing.", isCorrect: false, feedback: "'Tell' exige a pessoa: 'told me'." }] },
        { npcName: "Sarah", npcMessage: "Did Maria say if she will attend the meeting?", options: [{ text: "Yes, she said that she would be a few minutes late.", isCorrect: true, feedback: "Ótima transformação de 'will' para 'would'!" }, { text: "Yes, she told that she will be late.", isCorrect: false, feedback: "Use 'would' e não use 'told' sem a pessoa." }, { text: "She said she is late yesterday.", isCorrect: false, feedback: "Faça o recuo temporal para o passado." }] },
        { npcName: "Kevin", npcMessage: "Why is John not here?", options: [{ text: "He told us that he had lost his car keys.", isCorrect: true, feedback: "Uso perfeito de 'told us'!" }, { text: "He said us he lost keys.", isCorrect: false, feedback: "Não use 'said us'; use 'told us'." }, { text: "He speak that he lost.", isCorrect: false, feedback: "Use 'said' ou 'told'." }] }
    ],
    stage5_quiz: [
        { question: "1. Qual a frase correta usando o verbo 'tell' no passado?", options: [{ label: "She told him that the class was canceled.", isCorrect: true }, { label: "She told that the class was canceled.", isCorrect: false }, { label: "She told to him that class canceled.", isCorrect: false }] },
        { question: "2. O recuo temporal (backshifting) de 'Present Simple' no discurso indireto passa para:", options: [{ label: "Past Simple", isCorrect: true }, { label: "Future Simple", isCorrect: false }, { label: "Present Perfect", isCorrect: false }] },
        { question: "3. Como fica 'will' no Reported Speech?", options: [{ label: "would", isCorrect: true }, { label: "woulded", isCorrect: false }, { label: "will have", isCorrect: false }] },
        { question: "4. 'He said that he was hungry' reproduz originalmente qual fala direta?", options: [{ label: "'I am hungry'", isCorrect: true }, { label: "'I was hungry'", isCorrect: false }, { label: "'I will be hungry'", isCorrect: false }] },
        { question: "5. A palavra 'that' em 'She said (that) she was busy' é:", options: [{ label: "Opcional na fala e escrita informal", isCorrect: true }, { label: "Obrigatória em 100% das frases", isCorrect: false }, { label: "Proibida em inglês", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 5: WORK, PROFESSIONAL LIFE & FORMAL ETIQUETTE (MÓDULOS 17 A 20)
// ------------------------------------------

const MODULO_EN_B1_17 = {
    id: "en_b1_mod_17",
    title: "Polite Business English (Modal Verbs)",
    section: 5,
    sectionTitle: "Work, Professional Life & Formal Etiquette",
    level: "B1",
    xpReward: 180,
    stage1_context: {
        audioGuide: "Could you please send me the report? Would it be possible to reschedule our meeting?",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Utilizar verbos modais de etiqueta corporativa (could, would, may) para fazer solicitações e propostas profissionais de forma polida."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Could you please...? / Would it be possible...?", romaji: "/kʊd juː pliːz/", translation: "Você poderia por favor...? / Seria possível...?", timeContext: "Solicitações corporativas extremamente polidas." },
        { type: "vocab", kanji: "May I suggest...? / I would appreciate it if...", romaji: "/meɪ aɪ səˈdʒest/", translation: "Posso sugerir...? / Eu agradeceria se...", timeContext: "Propostas e pedidos diplomáticos em reuniões." },
        { type: "grammar_pill", title: "Suavização de Pedidos com Modais", rule: "Em ambientes profissionais, evita-se o tom imperativo ou direto (ex: 'Send me the file'). Prefere-se suavizar com 'Could you', 'Would you' ou 'May I'.", formula: "Could/Would you + Verb base + please?", example: "COULD YOU PLEASE FORWARD the email to the manager?" },
        { type: "grammar_pill", title: "A Estrutura 'I would appreciate it if you could...'", rule: "Uma das formas mais formais e elegantes de solicitar um favor no trabalho é conectar o verbo 'appreciate' com 'if you could'.", formula: "I would appreciate it if you could + Verb base", example: "I WOULD APPRECIATE IT IF YOU COULD review the proposal." }
    ],
    stage3_practice: [
        { question: "1. Qual a forma mais polida para pedir um arquivo em um e-mail de trabalho?", options: [{ label: "Could you please send me the updated spreadsheet?", isCorrect: true }, { label: "Send me the spreadsheet now.", isCorrect: false }, { label: "I want you send the spreadsheet.", isCorrect: false }] },
        { question: "2. Como propor o reagendamento de uma reunião com polidez?", options: [{ label: "Would it be possible to reschedule our meeting to Tuesday?", isCorrect: true }, { label: "Can we change meeting because I want?", isCorrect: false }, { label: "Reschedule the meeting now.", isCorrect: false }] },
        { question: "3. Complete a frase formal: 'May I ___ a different approach for this campaign?'", options: [{ label: "suggest", isCorrect: true }, { label: "suggesting", isCorrect: false }, { label: "to suggest", isCorrect: false }] },
        { question: "4. Qual a melhor tradução para 'Eu agradeceria se você pudesse confirmar'?", options: [{ label: "I would appreciate it if you could confirm.", isCorrect: true }, { label: "I appreciate you confirm.", isCorrect: false }, { label: "I am appreciating if you confirm.", isCorrect: false }] },
        { question: "5. O modal 'May' é utilizado em contextos profissionais para:", options: [{ label: "Pedir permissão ou fazer sugestões formais", isCorrect: true }, { label: "Dar ordens autoritárias", isCorrect: false }, { label: "Fazer piadas informais", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Would it be possible to send me the document by 5 PM?", translation: "Seria possível me enviar o documento até as 17h?", chunks: ["Would", "it", "be", "possible", "to", "send", "me", "the", "document", "by", "5", "PM", "?"] },
        { sentenceEn: "I would appreciate it if you could check the figures.", translation: "Eu agradeceria se você pudesse checar os números.", chunks: ["I", "would", "appreciate", "it", "if", "you", "could", "check", "the", "figures", "."] }
    ],
    stage4_dialog: [
        { npcName: "Client", npcMessage: "I haven't received the invoice yet.", options: [{ text: "I apologize for the delay. Could you please check your spam folder?", isCorrect: true, feedback: "Resposta impecável, cortês e profissional!" }, { text: "Check your spam now.", isCorrect: false, feedback: "Muito ríspido para um cliente." }, { text: "I want you see spam.", isCorrect: false, feedback: "Tom inadequado." }] },
        { npcName: "Boss", npcMessage: "We need to discuss the budget, but I am very busy today.", options: [{ text: "Would it be possible to schedule a quick call tomorrow morning?", isCorrect: true, feedback: "Excelente sugestão diplomática com 'Would it be possible'!" }, { text: "Call me tomorrow morning.", isCorrect: false, feedback: "Falta polidez hierárquica." }, { text: "May I calling tomorrow?", isCorrect: false, feedback: "Use a forma base 'call'." }] },
        { npcName: "Colleague", npcMessage: "I'm having trouble organizing these sales data.", options: [{ text: "May I offer some assistance with the spreadsheet?", isCorrect: true, feedback: "Oferecimento de ajuda extremamente cortês!" }, { text: "I give you help now.", isCorrect: false, feedback: "Linguagem pouco profissional." }, { text: "Would you appreciate help?", isCorrect: false, feedback: "Uso incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. Em Inglês Corporativo (Business English), prefere-se usar modais para:", options: [{ label: "Suavizar ordens e parecer mais diplomático", isCorrect: true }, { label: "Tornar as mensagens mais longas e difíceis", isCorrect: false }, { label: "Demonstrar autoridade agressiva", isCorrect: false }] },
        { question: "2. 'Would it be possible to...' deve ser seguido de:", options: [{ label: "Infinitivo com to (ex: to change)", isCorrect: true }, { label: "Verbo no gerúndio (-ing)", isCorrect: false }, { label: "Passado simples", isCorrect: false }] },
        { question: "3. Qual das expressões expressa maior grau de polidez?", options: [{ label: "I would appreciate it if you could review this.", isCorrect: true }, { label: "Review this fast.", isCorrect: false }, { label: "You must review this now.", isCorrect: false }] },
        { question: "4. 'May I ask a question?' é um pedido formal de:", options: [{ label: "Permissão", isCorrect: true }, { label: "Obrigação", isCorrect: false }, { label: "Capacidade física", isCorrect: false }] },
        { question: "5. A palavra 'Forward' em e-mails corporativos significa:", options: [{ label: "Encaminhar uma mensagem recebida", isCorrect: true }, { label: "Deletar uma mensagem", isCorrect: false }, { label: "Bloquear o remetente", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_18 = {
    id: "en_b1_mod_18",
    title: "Professional Emails & Formal Communication",
    section: 5,
    sectionTitle: "Work, Professional Life & Formal Etiquette",
    level: "B1",
    xpReward: 185,
    stage1_context: {
        audioGuide: "Dear Mr. Davis, I am writing to inquire about the project status. Best regards, Alex.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Redigir e responder a e-mails profissionais utilizando convenções formais de abertura, corpo do texto, anexos e despedida."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Dear Mr./Ms. / Best regards", romaji: "/dɪər / best rɪˈɡɑːrdz/", translation: "Prezado(a) Sr.(a) / Atenciosamente", timeContext: "Saudação de abertura e encerramento formal de e-mails." },
        { type: "vocab", kanji: "I am writing to... / Please find attached", romaji: "/aɪ æm ˈraɪtɪŋ tuː/", translation: "Escrevo para... / Em anexo você encontrará", timeContext: "Frases de propósito e indicação de arquivos anexos." },
        { type: "grammar_pill", title: "Estrutura do E-mail Profissional", rule: "1. Saudação (Dear [Name], / Dear Hiring Manager,) | 2. Propósito (I am writing to inquire/inform...) | 3. Detalhes (Please find attached...) | 4. Encerramento (I look forward to hearing from you.) | 5. Despedida (Best regards, / Sincerely,).", formula: "Greeting ➔ Purpose ➔ Attachments ➔ Closing ➔ Sign-off", example: "Dear Ms. Green, I am writing to confirm our meeting. Best regards, John." },
        { type: "grammar_pill", title: "'I look forward to' + Gerúndio (-ing)", rule: "A expressão formal de encerramento 'I look forward to' exige o verbo principal obrigatoriamente no GERÚNDIO (-ing) por causa da preposição 'to'!", formula: "I look forward to + Verb(-ing)", example: "I look forward to HEARING from you soon. (NÃO: to hear)." }
    ],
    stage3_practice: [
        { question: "1. Qual a melhor frase para declarar o objetivo de um e-mail formal?", options: [{ label: "I am writing to inquire about the job opening.", isCorrect: true }, { label: "I write because I want to know about job.", isCorrect: false }, { label: "I am writing for get job.", isCorrect: false }] },
        { question: "2. Como indicar corretamente em inglês que há um documento em anexo?", options: [{ label: "Please find attached the updated proposal.", isCorrect: true }, { label: "Look the attachment picture here.", isCorrect: false }, { label: "I put inside file.", isCorrect: false }] },
        { question: "3. Qual a forma gramaticalmente CORRETA para a conclusão do e-mail?", options: [{ label: "I look forward to hearing from you soon.", isCorrect: true }, { label: "I look forward to hear from you soon.", isCorrect: false }, { label: "I am looking forward to hear you.", isCorrect: false }] },
        { question: "4. Qual das alternativas é uma despedida formal adequada para e-mails institucionais?", options: [{ label: "Best regards,", isCorrect: true }, { label: "See ya late!", isCorrect: false }, { label: "XOXO,", isCorrect: false }] },
        { question: "5. 'Dear Hiring Manager' é usado quando você:", options: [{ label: "Não sabe o nome específico do responsável pela seleção", isCorrect: true }, { label: "É amigo íntimo da pessoa", isCorrect: false }, { label: "Está escrevendo para um parente", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I am writing to inform you that the meeting has been rescheduled.", translation: "Escrevo para informar-lhe que a reunião foi reagendada.", chunks: ["I", "am", "writing", "to", "inform", "you", "that", "the", "meeting", "has", "been", "rescheduled", "."] },
        { sentenceEn: "Please find attached the financial report for your review.", translation: "Em anexo encontra-se o relatório financeiro para sua revisão.", chunks: ["Please", "find", "attached", "the", "financial", "report", "for", "your", "review", "."] }
    ],
    stage4_dialog: [
        { npcName: "HR Recruiter", npcMessage: "Thank you for applying. Could you send us your updated CV?", options: [{ text: "Dear Recruiter, please find attached my updated CV. Best regards.", isCorrect: true, feedback: "Resposta formal e impecável por e-mail!" }, { text: "Here is CV in attach.", isCorrect: false, feedback: "Use 'Please find attached'." }, { text: "I look forward to send CV.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Client", npcMessage: "I haven't received the quotation for the services.", options: [{ text: "Dear Mr. Smith, I am writing to apologize and attach the quotation.", isCorrect: true, feedback: "Excelente conduta profissional por e-mail!" }, { text: "I write for give quote.", isCorrect: false, feedback: "Use 'I am writing to...'." }, { text: "See quote in email bye.", isCorrect: false, feedback: "Informal demais." }] },
        { npcName: "Partner", npcMessage: "When can we expect your feedback on the contract?", options: [{ text: "We will review it today. I look forward to meeting you on Friday.", isCorrect: true, feedback: "Uso perfeito de 'look forward to meeting'!" }, { text: "I look forward to meet you.", isCorrect: false, feedback: "'Look forward to' exige o verbo com '-ing'." }, { text: "Best regards review.", isCorrect: false, feedback: "Incoerente." }] }
    ],
    stage5_quiz: [
        { question: "1. A expressão 'I look forward to' exige o verbo com:", options: [{ label: "-ing (gerúndio)", isCorrect: true }, { label: "forma base sem to", isCorrect: false }, { label: "passado simples", isCorrect: false }] },
        { question: "2. 'Please find attached' serve para sinalizar:", options: [{ label: "Arquivos em anexo na mensagem", isCorrect: true }, { label: "Erros de digitação", isCorrect: false }, { label: "O valor total da fatura", isCorrect: false }] },
        { question: "3. Qual saudação é ideal para um e-mail formal quando se conhece o sobrenome da mulher?", options: [{ label: "Dear Ms. Davis,", isCorrect: true }, { label: "Hey Davis,", isCorrect: false }, { label: "What's up Ms. Davis,", isCorrect: false }] },
        { question: "4. 'Sincerely yours' ou 'Sincerely' é usado no:", options: [{ label: "Fechamento/Despedida do e-mail", isCorrect: true }, { label: "Cabeçalho de assunto", isCorrect: false }, { label: "Corpo do texto como introdução", isCorrect: false }] },
        { question: "5. 'Inquire' em e-mails formais é um sinônimo elegante de:", options: [{ label: "Ask / Perguntar / Solicitar informações", isCorrect: true }, { label: "Cancel / Cancelar", isCorrect: false }, { label: "Pay / Pagar", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_19 = {
    id: "en_b1_mod_19",
    title: "Job Interviews & Professional Pitch",
    section: 5,
    sectionTitle: "Work, Professional Life & Formal Etiquette",
    level: "B1",
    xpReward: 185,
    stage1_context: {
        audioGuide: "My greatest strength is problem-solving. I have a proven track record in project management.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Apresentar sua trajetória profissional, habilidades (strengths & weaknesses) e conquistas em uma entrevista de emprego."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Strengths & Weaknesses", romaji: "/streŋkθs & ˈwiːknəsɪz/", translation: "Pontos fortes e Pontos a melhorar", timeContext: "Vocabulário central de entrevistas de trabalho." },
        { type: "vocab", kanji: "Track record / Problem-solving", romaji: "/træk ˈrekərd/", translation: "Histórico de realizações / Resolução de problemas", timeContext: "Termos chave para valorizar o currículo." },
        { type: "grammar_pill", title: "Descrevendo Habilidades com 'Good at' + Gerúndio", rule: "Para descrever suas habilidades profissionais, use o adjetivo 'good at' ou 'skilled at' seguido de verbo no gerúndio (-ing).", formula: "Subject + be + good at / skilled at + Verb(-ing)", example: "I am GOOD AT MANAGING high-pressure projects." },
        { type: "grammar_pill", title: "Foco em Resultados: Past Simple + Dados", rule: "Ao relatar conquistas passadas na entrevista, combine verbos de ação no Past Simple com resultados mensuráveis.", formula: "Action Verb (Past) + Quantifiable Result", example: "I INCREASED sales by 20% in my previous role." }
    ],
    stage3_practice: [
        { question: "1. Qual frase descreve um ponto forte de forma profissional?", options: [{ label: "One of my greatest strengths is problem-solving.", isCorrect: true }, { label: "My strength is I am good person.", isCorrect: false }, { label: "I am strong for work.", isCorrect: false }] },
        { question: "2. Como expressar adequadamente uma habilidade usando 'good at'?", options: [{ label: "I am good at leading teams and organizing events.", isCorrect: true }, { label: "I am good at lead teams.", isCorrect: false }, { label: "I am good for lead teams.", isCorrect: false }] },
        { question: "3. O termo 'track record' refere-se a:", options: [{ label: "Histórico comprovado de desempenho e conquistas", isCorrect: true }, { label: "Uma gravação de áudio de uma reunião", isCorrect: false }, { label: "Uma pista de corrida de atletismo", isCorrect: false }] },
        { question: "4. Complete a frase: 'In my previous position, I ___ team productivity by 15%.'", options: [{ label: "increased", isCorrect: true }, { label: "have increase", isCorrect: false }, { label: "was increasing", isCorrect: false }] },
        { question: "5. Qual a forma diplomática de responder sobre seus pontos fracos (weaknesses)?", options: [{ label: "I sometimes focus too much on details, but I'm working on delegating more.", isCorrect: true }, { label: "I don't have any weaknesses.", isCorrect: false }, { label: "I hate working late.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "My greatest strength is my ability to work under pressure.", translation: "Meu maior ponto forte é minha capacidade de trabalhar sob pressão.", chunks: ["My", "greatest", "strength", "is", "my", "ability", "to", "work", "under", "pressure", "."] },
        { sentenceEn: "I have five years of experience in customer service.", translation: "Eu tenho cinco anos de experiência em atendimento ao cliente.", chunks: ["I", "have", "five", "years", "of", "experience", "in", "customer", "service", "."] }
    ],
    stage4_dialog: [
        { npcName: "Interviewer", npcMessage: "Tell me about yourself and your professional background.", options: [{ text: "I have over five years of experience in project management, focusing on software development.", isCorrect: true, feedback: "Apresentação inicial clara, profissional e impactante!" }, { text: "I am a good guy and I like work.", isCorrect: false, feedback: "Muito vago para uma entrevista." }, { text: "I am work since 2018.", isCorrect: false, feedback: "Use 'I have worked' ou 'I have experience'." }] },
        { npcName: "Interviewer", npcMessage: "What would you say is your main strength?", options: [{ text: "I am skilled at problem-solving and adapting to new technologies quickly.", isCorrect: true, feedback: "Excelente uso de 'skilled at' + gerúndio!" }, { text: "I am good at solve problems.", isCorrect: false, feedback: "Lembre-se: 'good at SOLVING problems'." }, { text: "My strength is strong.", isCorrect: false, feedback: "Redundante." }] },
        { npcName: "Interviewer", npcMessage: "Why should we hire you for this role?", options: [{ text: "Because I have a proven track record of increasing sales and leading successful teams.", isCorrect: true, feedback: "Resposta de alto nível profissional!" }, { text: "Because I need money.", isCorrect: false, feedback: "Não adequado para entrevista de emprego." }, { text: "Because I am good candidate.", isCorrect: false, feedback: "Forneça evidências concretas." }] }
    ],
    stage5_quiz: [
        { question: "1. Após 'good at' ou 'skilled at', o verbo principal deve estar no:", options: [{ label: "Gerúndio (-ing)", isCorrect: true }, { label: "Infinitivo com to", isCorrect: false }, { label: "Passado", isCorrect: false }] },
        { question: "2. 'Strengths' em uma entrevista de emprego significa:", options: [{ label: "Pontos fortes / Qualidades profissionais", isCorrect: true }, { label: "Força física muscular", isCorrect: false }, { label: "Salário pretendido", isCorrect: false }] },
        { question: "3. Como descrever experiência passada de forma eficaz?", options: [{ label: "I have 4 years of experience in marketing.", isCorrect: true }, { label: "I have 4 years experience to marketing.", isCorrect: false }, { label: "I am marketing experience 4 years.", isCorrect: false }] },
        { question: "4. 'Proven track record' indica que você possui:", options: [{ label: "Resultados anteriores comprovados", isCorrect: true }, { label: "Falta de histórico de trabalho", isCorrect: false }, { label: "Dificuldades de aprendizado", isCorrect: false }] },
        { question: "5. 'Work under pressure' significa trabalhar:", options: [{ label: "Sob pressão de prazos/metas", isCorrect: true }, { label: "Em locais com ar comprimido", isCorrect: false }, { label: "Sem nenhuma supervisão", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_20 = {
    id: "en_b1_mod_20",
    title: "Meetings, Agreement & Disagreement",
    section: 5,
    sectionTitle: "Work, Professional Life & Formal Etiquette",
    level: "B1",
    xpReward: 190,
    stage1_context: {
        audioGuide: "I see your point, but we need to consider the budget. I couldn't agree more with your strategy.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Participar ativamente de reuniões de trabalho expressando concordância total e discordância diplomática."
    },
    stage2_drops: [
        { type: "vocab", kanji: "I couldn't agree more / I see your point, but...", romaji: "/aɪ kʊdnt əˈɡriː mɔːr/", translation: "Concordo plenamente / Entendo seu ponto, mas...", timeContext: "Marcadores de concordância e discordância elegante." },
        { type: "vocab", kanji: "I hear what you're saying, however...", romaji: "/aɪ hɪər wʌt jʊər ˈseɪɪŋ/", translation: "Compreendo o que diz, no entanto...", timeContext: "Transição polida para apresentar contrapontos." },
        { type: "grammar_pill", title: "Concordância Absoluta: 'I couldn't agree more'", rule: "Apesar de ter estrutura negativa ('couldn't'), a expressão 'I couldn't agree more' significa 'Concordo 100% (não seria possível concordar mais)'. NUNCA diga 'I am agree'!", formula: "I couldn't agree more = Concordo totalmente | I agree (NÃO: I am agree)", example: "That's a fantastic idea! I couldn't agree more." },
        { type: "grammar_pill", title: "Técnica da Discordância Suavizada (Softened Disagreement)", rule: "Em reuniões corporativas em inglês, não se diz 'You are wrong'. Primeiro valida-se a ideia do interlocutor para depois introduzir o contraponto com 'but' ou 'however'.", formula: "Validation (I see your point) + Conjunction (but/however) + Counter-argument", example: "I see your point, BUT we don't have the budget right now." }
    ],
    stage3_practice: [
        { question: "1. Como expressar concordância total de forma elegante em uma reunião?", options: [{ label: "I couldn't agree more.", isCorrect: true }, { label: "I am totally agree.", isCorrect: false }, { label: "I don't disagree more.", isCorrect: false }] },
        { question: "2. Qual a forma correta de discordar educadamente de uma proposta?", options: [{ label: "I see your point, but I think we should explore other options.", isCorrect: true }, { label: "You are totally wrong about this.", isCorrect: false }, { label: "I hate this idea.", isCorrect: false }] },
        { question: "3. Por que NUNCA devemos dizer 'I am agree' em inglês?", options: [{ label: "Porque 'agree' é um verbo (I agree), e não um adjetivo", isCorrect: true }, { label: "Porque é uma palavra ofensiva", isCorrect: false }, { label: "Porque só se usa no passado", isCorrect: false }] },
        { question: "4. Complete a frase de transição: 'I hear what you are saying; ___, we must consider the deadline.'", options: [{ label: "however", isCorrect: true }, { label: "because", isCorrect: false }, { label: "so that", isCorrect: false }] },
        { question: "5. 'Up to a point, I agree with you' significa que você:", options: [{ label: "Concorda apenas parcialmente com o colega", isCorrect: true }, { label: "Concorda 100% sem nenhuma ressalva", isCorrect: false }, { label: "Discorda completamente da ideia", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I see your point, but we need to control our expenses.", translation: "Entendo seu ponto, mas precisamos controlar nossas despesas.", chunks: ["I", "see", "your", "point", ",", "but", "we", "need", "to", "control", "our", "expenses", "."] },
        { sentenceEn: "I couldn't agree more with the proposed marketing strategy.", translation: "Concordo plenamente com a estratégia de marketing proposta.", chunks: ["I", "couldn't", "agree", "more", "with", "the", "proposed", "marketing", "strategy", "."] }
    ],
    stage4_dialog: [
        { npcName: "Mark", npcMessage: "I think we should launch the product next month.", options: [{ text: "I see your point, but the testing phase isn't complete yet.", isCorrect: true, feedback: "Excelente uso da técnica de discordância suavizada!" }, { text: "You are wrong, bad idea.", isCorrect: false, feedback: "Muito direto e indelicado." }, { text: "I am agree with next month.", isCorrect: false, feedback: "Diga 'I agree', sem 'am'." }] },
        { npcName: "Sophia", npcMessage: "Investing in team training will improve our long-term productivity.", options: [{ text: "I couldn't agree more! It's a great investment.", isCorrect: true, feedback: "Concordância perfeita e fluida!" }, { text: "I couldn't agree, it is bad.", isCorrect: false, feedback: "'Couldn't agree more' é positivo; não use com 'bad'." }, { text: "I agree more or less not.", isCorrect: false, feedback: "Expressão incorreta." }] },
        { npcName: "Liam", npcMessage: "Should we cut the advertising budget by half?", options: [{ text: "I hear what you're saying, however, that might reduce our sales.", isCorrect: true, feedback: "Argumentação profissional e ponderada!" }, { text: "No, I disagree you.", isCorrect: false, feedback: "Diga 'I disagree with you' ou suavize." }, { text: "I see point no.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. O erro comum 'I am agree' deve ser corrigido para:", options: [{ label: "I agree", isCorrect: true }, { label: "I am agreeing", isCorrect: false }, { label: "I do be agree", isCorrect: false }] },
        { question: "2. 'I couldn't agree more' transmite:", options: [{ label: "Concordância total e absoluta (100%)", isCorrect: true }, { label: "Discordância total (0%)", isCorrect: false }, { label: "Dúvida sobre o assunto", isCorrect: false }] },
        { question: "3. Qual conector expressa oposição formal em reuniões?", options: [{ label: "However", isCorrect: true }, { label: "Furthermore", isCorrect: false }, { label: "Therefore", isCorrect: false }] },
        { question: "4. A expressão 'I see your point' serve para:", options: [{ label: "Demonstrar que você compreendeu o argumento alheio antes de contra-argumentar", isCorrect: true }, { label: "Criticar a visão de alguém", isCorrect: false }, { label: "Encerrar a reunião abruptamente", isCorrect: false }] },
        { question: "5. 'I agree to some extent' indica concordância:", options: [{ label: "Parcial", isCorrect: true }, { label: "Nula", isCorrect: false }, { label: "Incondicional", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 6: CULTURE, MEDIA & B1 FINAL CHALLENGE (MÓDULOS 21 A 24)
// ------------------------------------------

const MODULO_EN_B1_21 = {
    id: "en_b1_mod_21",
    title: "Describing Appearances & Sensations",
    section: 6,
    sectionTitle: "Culture, Media & B1 Final Challenge",
    level: "B1",
    xpReward: 190,
    stage1_context: {
        audioGuide: "It looks like it's going to rain. This fabric feels as if it were silk.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Descrever impressões visuais, sensações táteis/auditivas e aparências usando estruturas como 'looks like', 'feels as if' e 'sounds like'."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Look like / Sound like", romaji: "/lʊk laɪk / saʊnd laɪk/", translation: "Parecer (visualmente) / Parecer (ao ouvir)", timeContext: "Descrições de percepção sensorial." },
        { type: "vocab", kanji: "Feel as if / Taste like", romaji: "/fiːl æz ɪf/", translation: "Parecer como se / Ter gosto de", timeContext: "Sensações táteis, degustativas e hipotéticas." },
        { type: "grammar_pill", title: "'Look / Sound / Feel' + Adjetivo vs. Substantivo", rule: "Se for seguido diretamente de ADJETIVO, use apenas o verbo (ex: It looks great). Se for seguido de SUBSTANTIVO, use 'like' (ex: It looks LIKE a movie).", formula: "Look/Sound/Feel + Adjective | Look/Sound/Feel + LIKE + Noun", example: "You LOOK tired. | You LOOK LIKE a doctor." },
        { type: "grammar_pill", title: "'Feels as if' + Oração", rule: "Usamos 'as if' ou 'as though' quando a percepção é seguida por uma oração completa (sujeito + verbo).", formula: "It feels / looks + AS IF + Clause", example: "It FEELS AS IF we have been waiting for hours." }
    ],
    stage3_practice: [
        { question: "1. Qual a frase correta ao descrever alguém parecido com um ator?", options: [{ label: "He looks like a famous actor.", isCorrect: true }, { label: "He looks a famous actor.", isCorrect: false }, { label: "He feels like famous actor.", isCorrect: false }] },
        { question: "2. Como dizer que uma música 'parece triste' (apenas adjetivo)?", options: [{ label: "This song sounds sad.", isCorrect: true }, { label: "This song sounds like sad.", isCorrect: false }, { label: "This song feels like sad.", isCorrect: false }] },
        { question: "3. Complete a frase: 'It tastes ___ chocolate cake.'", options: [{ label: "like", isCorrect: true }, { label: "as if", isCorrect: false }, { label: "as", isCorrect: false }] },
        { question: "4. Qual opção utiliza 'as if' de forma gramaticalmente correta?", options: [{ label: "It looks as if it is going to snow.", isCorrect: true }, { label: "It looks as if snow.", isCorrect: false }, { label: "It looks like as if snow.", isCorrect: false }] },
        { question: "5. 'This jacket feels very soft' usa apenas 'feels' porque 'soft' é um:", options: [{ label: "Adjetivo", isCorrect: true }, { label: "Substantivo", isCorrect: false }, { label: "Verbo no passado", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "It looks like we are going to have a storm tonight.", translation: "Parece que nós teremos uma tempestade esta noite.", chunks: ["It", "looks", "like", "we", "are", "going", "to", "have", "a", "storm", "tonight", "."] },
        { sentenceEn: "That song sounds as if it were recorded live.", translation: "Aquela música parece como se tivesse sido gravada ao vivo.", chunks: ["That", "song", "sounds", "as", "if", "it", "were", "recorded", "live", "."] }
    ],
    stage4_dialog: [
        { npcName: "Friend", npcMessage: "What do you think of this new restaurant's dish?", options: [{ text: "It tastes like homemade Italian pasta! Delicious.", isCorrect: true, feedback: "Excelente uso de 'tastes like' + substantivo!" }, { text: "It tastes as delicious pasta.", isCorrect: false, feedback: "Use 'tastes delicious' ou 'tastes like pasta'." }, { text: "It looks as delicious.", isCorrect: false, feedback: "Falta o 'like' se usar substantivo." }] },
        { npcName: "Art Critic", npcMessage: "How does this painting make you feel?", options: [{ text: "It looks like a quiet sunset in the mountains.", isCorrect: true, feedback: "Ótima descrição sensorial visual!" }, { text: "It looks like peaceful.", isCorrect: false, feedback: "Com adjetivo ('peaceful'), não use 'like'." }, { text: "It sounds like sunset.", isCorrect: false, feedback: "Quadros são percebidos com a visão (looks)." }] },
        { npcName: "Traveler", npcMessage: "Listen to the wind outside the cabin!", options: [{ text: "Yeah! It sounds as if a hurricane were coming.", isCorrect: true, feedback: "Uso impecável de 'sounds as if' + oração!" }, { text: "It sounds like coming.", isCorrect: false, feedback: "Estrutura incompleta." }, { text: "It feels like hurricane.", isCorrect: false, feedback: "Sons usam 'sounds'." }] }
    ],
    stage5_quiz: [
        { question: "1. Usa-se a palavra 'like' após verbos de sentido (look, sound, taste, feel) quando a palavra seguinte for um:", options: [{ label: "Substantivo", isCorrect: true }, { label: "Adjetivo isolado", isCorrect: false }, { label: "Advérbio de modo", isCorrect: false }] },
        { question: "2. 'You look tired' está correto sem 'like' porque 'tired' é um:", options: [{ label: "Adjetivo", isCorrect: true }, { label: "Substantivo", isCorrect: false }, { label: "Verbo modal", isCorrect: false }] },
        { question: "3. 'It feels as if...' é seguido por:", options: [{ label: "Uma oração com sujeito e verbo", isCorrect: true }, { label: "Apenas um número", isCorrect: false }, { label: "Um verbo no infinitivo", isCorrect: false }] },
        { question: "4. Qual frase está gramaticalmente incorreta?", options: [{ label: "This perfume smells like sweet.", isCorrect: true }, { label: "This perfume smells sweet.", isCorrect: false }, { label: "This perfume smells like flowers.", isCorrect: false }] },
        { question: "5. 'Sound like a plan!' é um idioma informal que significa:", options: [{ label: "Parece uma ótima ideia / Combinado!", isCorrect: true }, { label: "O plano é muito barulhento", isCorrect: false }, { label: "Não entendi a proposta", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_22 = {
    id: "en_b1_mod_22",
    title: "Understanding News & Public Announcements",
    section: 6,
    sectionTitle: "Culture, Media & B1 Final Challenge",
    level: "B1",
    xpReward: 195,
    stage1_context: {
        audioGuide: "Attention passengers, flight BA204 has been delayed due to technical maintenance.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Compreender notícias de mídia, alertas meteorológicos e anúncios públicos de aeroportos/estações usando a Voz Passiva formal."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Flight delay / Weather alert", romaji: "/flaɪt dɪˈleɪ/", translation: "Atraso de voo / Alerta meteorológico", timeContext: "Vocabulário frequente em anúncios públicos de mídia." },
        { type: "vocab", kanji: "Has been canceled / Is expected to...", romaji: "/hæz biːn ˈkænsəld/", translation: "Foi cancelado / Espera-se que...", timeContext: "Estruturas passivas em manchetes e alertas." },
        { type: "grammar_pill", title: "A Voz Passiva em Anúncios Públicos", rule: "Em notícias e avisos públicos, o foco é o EVENTO e não quem o realizou. Por isso, usa-se a Voz Passiva (Be + Past Participle).", formula: "Subject + be (is/was/has been) + Past Participle", example: "Flight 302 HAS BEEN DELAYED. | Passengers ARE REQUESTED to remain seated." },
        { type: "grammar_pill", title: "Manchetes de Notícias (Headlines)", rule: "Nas manchetes de jornais, costuma-se omitir artigos e auxiliares para economizar espaço (ex: 'Plane delayed' em vez de 'The plane has been delayed').", formula: "Headline style: [Noun] + [Past Participle]", example: "Road closed due to flood." }
    ],
    stage3_practice: [
        { question: "1. Como o serviço de alto-falante do aeroporto anuncia que o voo 101 foi cancelado?", options: [{ label: "Flight 101 has been canceled.", isCorrect: true }, { label: "Flight 101 canceled itself.", isCorrect: false }, { label: "They are cancel flight 101.", isCorrect: false }] },
        { question: "2. O que significa o aviso 'Passengers are requested to proceed to Gate 5'?", options: [{ label: "Pede-se aos passageiros que se dirijam ao Portão 5", isCorrect: true }, { label: "O portão 5 está fechado para reformas", isCorrect: false }, { label: "Os passageiros do portão 5 foram embora", isCorrect: false }] },
        { question: "3. Complete o alerta de trânsito: 'Bridge 42 was ___ due to high winds.'", options: [{ label: "closed", isCorrect: true }, { label: "close", isCorrect: false }, { label: "closing", isCorrect: false }] },
        { question: "4. Em notícias, 'The earthquake is reported to have caused damage' indica que:", options: [{ label: "Relata-se que o terremoto causou danos", isCorrect: true }, { label: "O terremoto foi evitado", isCorrect: false }, { label: "Ninguém soube do terremoto", isCorrect: false }] },
        { question: "5. Qual a forma passiva correta no Present Perfect para 'They have postponed the meeting'?", options: [{ label: "The meeting has been postponed.", isCorrect: true }, { label: "The meeting is postpone.", isCorrect: false }, { label: "The meeting was postpone.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Attention passengers, flight 402 has been delayed due to severe weather.", translation: "Atenção passageiros, o voo 402 foi atrasado devido ao mau tempo.", chunks: ["Attention", "passengers", ",", "flight", "402", "has", "been", "delayed", "due", "to", "severe", "weather", "."] },
        { sentenceEn: "The main highway was closed following a major accident.", translation: "A rodovia principal foi fechada após um grande acidente.", chunks: ["The", "main", "highway", "was", "closed", "following", "a", "major", "accident", "."] }
    ],
    stage4_dialog: [
        { npcName: "Airport Speaker", npcMessage: "Attention passengers on flight AF300 to Paris: boarding has been moved to Gate 12.", options: [{ text: "Excuse me, did they say Gate 12? We should go there now.", isCorrect: true, feedback: "Compreensão perfeita do anúncio público!" }, { text: "The flight is canceled.", isCorrect: false, feedback: "O voo teve apenas o portão alterado." }, { text: "We board in Paris.", isCorrect: false, feedback: "Incoerente." }] },
        { npcName: "News Anchor", npcMessage: "Breaking news: heavy snow is expected to hit the northern region tonight.", options: [{ text: "We should prepare for flight delays and power outages.", isCorrect: true, feedback: "Excelente dedução a partir da notícia!" }, { text: "Snow is hitting yesterday.", isCorrect: false, feedback: "A notícia fala sobre 'tonight' (futuro)." }, { text: "The weather alert cancel.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Train Conductor", npcMessage: "We apologize for the inconvenience, but train service has been suspended due to track repairs.", options: [{ text: "Thank you for the update. Is there a replacement bus service?", isCorrect: true, feedback: "Pergunta madura e adequada para o imprevisto!" }, { text: "Train is suspend.", isCorrect: false, feedback: "Diga 'has been suspended'." }, { text: "We are repair track.", isCorrect: false, feedback: "Os passageiros não estão consertando o trilho." }] }
    ],
    stage5_quiz: [
        { question: "1. A Voz Passiva é muito comum em anúncios públicos porque:", options: [{ label: "O foco está no fato/evento e não no agente que executou", isCorrect: true }, { label: "É a única forma gramatical permitida por lei", isCorrect: false }, { label: "É mais curta que a Voz Ativa", isCorrect: false }] },
        { question: "2. 'Flight delayed' em um painel de aeroporto é um exemplo de:", options: [{ label: "Estilo simplificado de manchete/aviso", isCorrect: true }, { label: "Erro grave de gramática", isCorrect: false }, { label: "Gíria de rua", isCorrect: false }] },
        { question: "3. Como fica a passiva no Present Perfect de 'cancel' com sujeito singular (The flight)?", options: [{ label: "has been canceled", isCorrect: true }, { label: "have been canceled", isCorrect: false }, { label: "is canceled already", isCorrect: false }] },
        { question: "4. 'Due to maintenance' em avisos indica:", options: [{ label: "O motivo/causa do atraso ou interrupção", isCorrect: true }, { label: "O valor da passagem", isCorrect: false }, { label: "O destino final da viagem", isCorrect: false }] },
        { question: "5. 'Remain seated' em um anúncio de bordo significa:", options: [{ label: "Permanecer sentado", isCorrect: true }, { label: "Levantar-se imediatamente", isCorrect: false }, { label: "Ir ao banheiro", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_23 = {
    id: "en_b1_mod_23",
    title: "Cultural Idioms & Slang in Context",
    section: 6,
    sectionTitle: "Culture, Media & B1 Final Challenge",
    level: "B1",
    xpReward: 195,
    stage1_context: {
        audioGuide: "Don't worry, the exam was a piece of cake! Break a leg at your interview today!",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Compreender e utilizar idioamática e gírias culturais populares (piece of cake, break a leg, hit the nail on the head, once in a blue moon)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Piece of cake / Break a leg", romaji: "/piːs əv keɪk / breɪk ə leg/", translation: "Mamão com açúcar (muito fácil) / Boa sorte (no teatro/apresentações)", timeContext: "Expressões idiomáticas de encorajamento e facilidade." },
        { type: "vocab", kanji: "Hit the nail on the head / Once in a blue moon", romaji: "/hɪt ðə neɪl ɑːn ðə hed/", translation: "Acertar na mosca / Uma vez a cada morte de bispo (raramente)", timeContext: "Idiomas culturais de precisão e frequência." },
        { type: "grammar_pill", title: "A Natureza Figurativa dos Idiomas", rule: "Expressões idiomáticas NÃO devem ser traduzidas ao pé da letra. 'Break a leg' não significa quebrar a perna, mas sim desejar boa sorte!", formula: "Idiom ➔ Figurative Meaning", example: "The test was A PIECE OF CAKE. (O teste foi muito fácil)." },
        { type: "grammar_pill", title: "'Once in a blue moon' como Advérbio", rule: "'Once in a blue moon' funciona gramaticalmente como um advérbio de frequência (raramente / quase nunca) e costuma vir no final ou início da frase.", formula: "Clause + once in a blue moon", example: "I eat fast food ONCE IN A BLUE MOON." }
    ],
    stage3_practice: [
        { question: "1. O que significa dizer que um teste foi 'a piece of cake'?", options: [{ label: "Que o teste foi extremamente fácil", isCorrect: true }, { label: "Que o teste foi sobre culinária", isCorrect: false }, { label: "Que o teste foi muito difícil", isCorrect: false }] },
        { question: "2. Como se deseja 'Boa sorte!' antes de uma apresentação pública em inglês?", options: [{ label: "Break a leg!", isCorrect: true }, { label: "Break your foot!", isCorrect: false }, { label: "Cut your leg!", isCorrect: false }] },
        { question: "3. A expressão 'You hit the nail on the head' significa:", options: [{ label: "Você acertou na mosca / disse exatamente a verdade", isCorrect: true }, { label: "Você se machucou com um prego", isCorrect: false }, { label: "Você errou feio", isCorrect: false }] },
        { question: "4. 'I only see him once in a blue moon' indica que eu o vejo:", options: [{ label: "Muito raramente", isCorrect: true }, { label: "Todas as noites de lua cheia", isCorrect: false }, { label: "Todos os dias", isCorrect: false }] },
        { question: "5. Complete a expressão: 'Under the weather' significa sentir-se:", options: [{ label: "Um pouco doente ou indisposto", isCorrect: true }, { label: "Molhado pela chuva", isCorrect: false }, { label: "Feliz com o sol", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Don't worry about the presentation, it will be a piece of cake.", translation: "Não se preocupe com a apresentação, será mamão com açúcar.", chunks: ["Don't", "worry", "about", "the", "presentation", ",", "it", "will", "be", "a", "piece", "of", "cake", "."] },
        { sentenceEn: "I go to concerts once in a blue moon.", translation: "Eu vou a shows uma vez a cada morte de bispo.", chunks: ["I", "go", "to", "concerts", "once", "in", "a", "blue", "moon", "."] }
    ],
    stage4_dialog: [
        { npcName: "Actor", npcMessage: "I'm going on stage in five minutes and I'm terrified!", options: [{ text: "Don't worry, you'll do great! Break a leg!", isCorrect: true, feedback: "Expressão teatral perfeita para desejar boa sorte!" }, { text: "I hope you break a leg for real.", isCorrect: false, feedback: "Não traduza ao pé da letra!" }, { text: "Piece of cake your leg.", isCorrect: false, feedback: "Confuso." }] },
        { npcName: "Teacher", npcMessage: "Why did the company fail? Because of poor marketing!", options: [{ text: "You hit the nail on the head! Marketing was their biggest flaw.", isCorrect: true, feedback: "Uso impecável de 'hit the nail on the head'!" }, { text: "You hit nail with hammer.", isCorrect: false, feedback: "Tradução literal errada." }, { text: "It is once in a blue moon.", isCorrect: false, feedback: "Fora de contexto." }] },
        { npcName: "Friend", npcMessage: "Do you ever go skiing in the winter?", options: [{ text: "Only once in a blue moon. It's too expensive!", isCorrect: true, feedback: "Ótima resposta indicando raridade!" }, { text: "Yes, I eat piece of cake.", isCorrect: false, feedback: "Sem sentido." }, { text: "I break a leg skiing always.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Piece of cake' é um idioma para descrever algo:", options: [{ label: "Muito fácil e simples de fazer", isCorrect: true }, { label: "Muito saboroso", isCorrect: false }, { label: "Muito custoso", isCorrect: false }] },
        { question: "2. 'Break a leg' é uma forma cultural de dizer:", options: [{ label: "Good luck! (Boa sorte!)", isCorrect: true }, { label: "Be careful! (Cuidado!)", isCorrect: false }, { label: "Stop talking! (Cale-se!)", isCorrect: false }] },
        { question: "3. 'Under the weather' significa:", options: [{ label: "Feeling slightly sick / Indisposto", isCorrect: true }, { label: "Enjoying good weather", isCorrect: false }, { label: "Working outdoors", isCorrect: false }] },
        { question: "4. Qual idioma expressa precisão absoluta de raciocínio?", options: [{ label: "Hit the nail on the head", isCorrect: true }, { label: "Piece of cake", isCorrect: false }, { label: "Once in a blue moon", isCorrect: false }] },
        { question: "5. 'Cost an arm and a leg' significa que algo é:", options: [{ label: "Extremamente caro", isCorrect: true }, { label: "Muito doloroso", isCorrect: false }, { label: "Gratuito", isCorrect: false }] }
    ]
};

const MODULO_EN_B1_24 = {
    id: "en_b1_mod_24",
    title: "🏆 B1 Final Challenge: Independence & Autonomy Simulation",
    section: 6,
    sectionTitle: "Culture, Media & B1 Final Challenge",
    level: "B1",
    xpReward: 200,
    stage1_context: {
        audioGuide: "Welcome to the B1 Final Exam! You have mastered intermediate English grammar, phrasal verbs, conditionals, and formal etiquette.",
        missionTitle: "Desafio Final Integrativo B1",
        missionDescription: "Parabéns por alcançar a etapa final! Este simulado abrangente testará todo o seu conhecimento do Nível B1 em 30 questões desafiadoras de autonomia em inglês."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Autonomy & Fluency", romaji: "/ɔːˈtɑːnəmi & ˈfluːənsi/", translation: "Autonomia e Fluência", timeContext: "Meta atingida ao concluir o nível B1." },
        { type: "vocab", kanji: "Comprehensive review", romaji: "/ˌkɑːmprɪˈhensɪv rɪˈvjuː/", translation: "Revisão abrangente", timeContext: "Síntese dos 24 módulos pedagógicos." },
        { type: "grammar_pill", title: "Síntese Gramatical B1: Conditionals & Modals", rule: "First Conditional (If + Present ➔ Will) = Possibilidade real. Second Conditional (If + Past ➔ Would) = Hipótese. Modais formais (Could/Would/May) = Cortesia e etiqueta corporativa.", formula: "1st: If Present ➔ Will | 2nd: If Past ➔ Would", example: "If I study, I will pass. | If I had money, I would travel." },
        { type: "grammar_pill", title: "Síntese de Verbos: Present Perfect & Phrasal Verbs", rule: "Present Perfect contrasta tempo indeterminado/contínuo com o Past Simple (tempo acabado). Phrasal Verbs com pronomes exigem o pronome no meio se forem separáveis.", formula: "Have/Has + Past Participle | Turn IT off", example: "I have lived here for 5 years. | Pick them up!" }
    ],
    stage3_practice: [
        { question: "1. (Revisão B1) Qual frase demonstra o uso correto do Second Conditional?", options: [{ label: "If I were you, I would take the job offer.", isCorrect: true }, { label: "If I am you, I will take the job offer.", isCorrect: false }, { label: "If I was you, I take job offer.", isCorrect: false }] },
        { question: "2. (Revisão B1) Escolha a forma correta do Phrasal Verb separável com pronome:", options: [{ label: "I need to pick it up.", isCorrect: true }, { label: "I need to pick up it.", isCorrect: false }, { label: "I need to up pick it.", isCorrect: false }] },
        { question: "3. (Revisão B1) Qual a diferença entre 'for' e 'since' com Present Perfect?", options: [{ label: "'Since' marca o início e 'for' marca a duração total", isCorrect: true }, { label: "'For' é para datas e 'since' é para números", isCorrect: false }, { label: "Não há nenhuma diferença", isCorrect: false }] },
        { question: "4. (Revisão B1) Como se transforma a fala 'I can help you' para Reported Speech?", options: [{ label: "He said that he could help me.", isCorrect: true }, { label: "He told that he can help me.", isCorrect: false }, { label: "He said he will help me.", isCorrect: false }] },
        { question: "5. (Revisão B1) Qual expressão formal é ideal para terminar um e-mail profissional?", options: [{ label: "I look forward to hearing from you soon.", isCorrect: true }, { label: "I look forward to hear you.", isCorrect: false }, { label: "I am looking to hearing you.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "If I had more time, I would learn another language.", translation: "Se eu tivesse mais tempo, eu aprenderia outro idioma.", chunks: ["If", "I", "had", "more", "time", ",", "I", "would", "learn", "another", "language", "."] },
        { sentenceEn: "She told me that the meeting had been canceled due to bad weather.", translation: "Ela me disse que a reunião tinha sido cancelada devido ao mau tempo.", chunks: ["She", "told", "me", "that", "the", "meeting", "had", "been", "canceled", "due", "to", "bad", "weather", "."] }
    ],
    stage4_dialog: [
        { npcName: "HR Director", npcMessage: "Welcome to the final interview! Why do you believe you are ready for this international role?", options: [{ text: "Because I have a proven track record, and I can express opinions and negotiate diplomatically in English.", isCorrect: true, feedback: "Resposta digna de aprovação no nível B1!" }, { text: "I gonna work good.", isCorrect: false, feedback: "Muito informal para o diretor de RH." }, { text: "I am agree with job.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Project Leader", npcMessage: "We have an emergency client request. Could you give us a hand?", options: [{ text: "I'd be happy to help! Would it be possible to clarify the requirements first?", isCorrect: true, feedback: "Excelente comunicação profissional intermediária!" }, { text: "I give hand no problem.", isCorrect: false, feedback: "Pouco fluído." }, { text: "Why don't you do it yourself?", isCorrect: false, feedback: "Mal-educado." }] },
        { npcName: "Examiner", npcMessage: "Congratulations on reaching the end of Level B1!", options: [{ text: "Thank you! Learning English has been a rewarding journey and I feel confident now.", isCorrect: true, feedback: "Mensagem de celebração perfeita!" }, { text: "Thank you, it was piece of cake.", isCorrect: false, feedback: "Falta o artigo 'a piece of cake'." }, { text: "I am finish test.", isCorrect: false, feedback: "Estrutura incorreta." }] }
    ],
    stage5_quiz: [
        { question: "1. Qual a forma correta do First Conditional?", options: [{ label: "If it rains, I will stay home.", isCorrect: true }, { label: "If it will rain, I stay home.", isCorrect: false }, { label: "If it rain, I will stayed home.", isCorrect: false }] },
        { question: "2. Qual frase usa 'used to' corretamente para um hábito passado?", options: [{ label: "I used to play tennis every Saturday.", isCorrect: true }, { label: "I am used to play tennis every Saturday.", isCorrect: false }, { label: "I used to playing tennis every Saturday.", isCorrect: false }] },
        { question: "3. Como se escreve a redução informal de 'want to'?", options: [{ label: "wanna", isCorrect: true }, { label: "gonna", isCorrect: false }, { label: "gotta", isCorrect: false }] },
        { question: "4. Qual verbo modal expressa uma hipótese remota no futuro?", options: [{ label: "might", isCorrect: true }, { label: "must", isCorrect: false }, { label: "should have", isCorrect: false }] },
        { question: "5. O que significa a expressão 'as far as I'm concerned'?", options: [{ label: "No que me diz respeito / Ao meu ver", isCorrect: true }, { label: "Até onde eu consigo andar", isCorrect: false }, { label: "Estou preocupado com o futuro", isCorrect: false }] },
        { question: "6. Qual a 3ª forma (Particípio Passado) do verbo 'write'?", options: [{ label: "written", isCorrect: true }, { label: "wrote", isCorrect: false }, { label: "writing", isCorrect: false }] },
        { question: "7. Em 'She has been to London', a pessoa:", options: [{ label: "Foi a Londres e já retornou", isCorrect: true }, { label: "Ainda está em Londres", isCorrect: false }, { label: "Nunca visitou Londres", isCorrect: false }] },
        { question: "8. Complete: 'I have lived here ___ 2018.'", options: [{ label: "since", isCorrect: true }, { label: "for", isCorrect: false }, { label: "ago", isCorrect: false }] },
        { question: "9. Complete: 'They have studied English ___ five years.'", options: [{ label: "for", isCorrect: true }, { label: "since", isCorrect: false }, { label: "from", isCorrect: false }] },
        { question: "10. Qual a causa na frase 'The match was canceled due to rain'?", options: [{ label: "A chuva", isCorrect: true }, { label: "O jogo", isCorrect: false }, { label: "O cancelamento", isCorrect: false }] },
        { question: "11. Como expressar arrependimento por não ter estudado?", options: [{ label: "I should have studied more.", isCorrect: true }, { label: "I should study yesterday.", isCorrect: false }, { label: "I ended up to study.", isCorrect: false }] },
        { question: "12. Após 'ended up', qual forma verbal é obrigatória?", options: [{ label: "Gerúndio (-ing)", isCorrect: true }, { label: "Infinitivo com to", isCorrect: false }, { label: "Verbo base", isCorrect: false }] },
        { question: "13. 'Unless you study, you will fail' equivale a:", options: [{ label: "If you don't study, you will fail.", isCorrect: true }, { label: "If you study, you will fail.", isCorrect: false }, { label: "Because you study, you fail.", isCorrect: false }] },
        { question: "14. 'If I won the lottery, I would travel' é um exemplo de:", options: [{ label: "Second Conditional", isCorrect: true }, { label: "First Conditional", isCorrect: false }, { label: "Zero Conditional", isCorrect: false }] },
        { question: "15. Qual a forma correta de dar conselhos em inglês?", options: [{ label: "If I were you, I would take a break.", isCorrect: true }, { label: "If I am you, I break.", isCorrect: false }, { label: "If I was you, I take break.", isCorrect: false }] },
        { question: "16. Qual a diferença entre 'used to live' e 'getting used to living'?", options: [{ label: "'Used to' = hábito passado; 'getting used to' = processo de adaptação", isCorrect: true }, { label: "Ambas significam a mesma coisa", isCorrect: false }, { label: "'Getting used to' é para o passado distante", isCorrect: false }] },
        { question: "17. 'Give it a shot' é o mesmo que:", options: [{ label: "Give it a try", isCorrect: true }, { label: "Give up", isCorrect: false }, { label: "Take a nap", isCorrect: false }] },
        { question: "18. Qual o phrasal verb correto para 'desligar a luz'?", options: [{ label: "turn off", isCorrect: true }, { label: "put on", isCorrect: false }, { label: "take off", isCorrect: false }] },
        { question: "19. Como fica o pronome 'it' com o verbo separável 'turn off'?", options: [{ label: "turn it off", isCorrect: true }, { label: "turn off it", isCorrect: false }, { label: "off turn it", isCorrect: false }] },
        { question: "20. 'I get along with my brother' significa que eu:", options: [{ label: "Me dou muito bem com ele", isCorrect: true }, { label: "Brigo com ele todo dia", isCorrect: false }, { label: "Nunca vejo meu irmão", isCorrect: false }] },
        { question: "21. Qual o phrasal verb para 'encontrar alguém por acaso na rua'?", options: [{ label: "run into", isCorrect: true }, { label: "look up to", isCorrect: false }, { label: "break up", isCorrect: false }] },
        { question: "22. Qual a estrutura exigida por 'Would you mind...?'", options: [{ label: "Verbo no gerúndio (-ing)", isCorrect: true }, { label: "Verbo no infinitivo com to", isCorrect: false }, { label: "Passado simples", isCorrect: false }] },
        { question: "23. Qual a diferença entre 'say' e 'tell' em Reported Speech?", options: [{ label: "'Tell' exige o objeto indireto (pessoa), enquanto 'say' não exige", isCorrect: true }, { label: "'Say' exige a pessoa obrigatoriamente", isCorrect: false }, { label: "Nenhuma diferença", isCorrect: false }] },
        { question: "24. Como fica 'will' no discurso indireto (Reported Speech)?", options: [{ label: "would", isCorrect: true }, { label: "can", isCorrect: false }, { label: "shoulded", isCorrect: false }] },
        { question: "25. Em um e-mail profissional, 'I look forward to' exige o verbo com:", options: [{ label: "-ing (gerúndio)", isCorrect: true }, { label: "forma base", isCorrect: false }, { label: "passado", isCorrect: false }] },
        { question: "26. Qual a expressão correta para indicar anexo em e-mail?", options: [{ label: "Please find attached the file.", isCorrect: true }, { label: "Look inside file attachment.", isCorrect: false }, { label: "I put attachment here.", isCorrect: false }] },
        { question: "27. Em uma reunião, como concordar 100% com um colega?", options: [{ label: "I couldn't agree more.", isCorrect: true }, { label: "I am agree.", isCorrect: false }, { label: "I am agreeing 100%.", isCorrect: false }] },
        { question: "28. 'That proposal sounds like a great idea' usa 'like' porque 'a great idea' é um:", options: [{ label: "Substantivo / Grupo nominal", isCorrect: true }, { label: "Adjetivo isolado", isCorrect: false }, { label: "Verbo auxiliar", isCorrect: false }] },
        { question: "29. 'Flight 202 has been delayed' é um exemplo de:", options: [{ label: "Voz Passiva em anúncio público", isCorrect: true }, { label: "Second Conditional", isCorrect: false }, { label: "Phrasal verb separável", isCorrect: false }] },
        { question: "30. O idioma 'once in a blue moon' significa:", options: [{ label: "Raramente / Quase nunca", isCorrect: true }, { label: "Todas as semanas", isCorrect: false }, { label: "Na lua cheia de verão", isCorrect: false }] }
    ]
};

// ==========================================
// VETOR DE DADOS CONSOLIDADO DO NÍVEL B1 (24 MÓDULOS)
// ==========================================
const CURSO_ENGLISH_B1_DADOS = [
    MODULO_EN_B1_01, MODULO_EN_B1_02, MODULO_EN_B1_03, MODULO_EN_B1_04,
    MODULO_EN_B1_05, MODULO_EN_B1_06, MODULO_EN_B1_07, MODULO_EN_B1_08,
    MODULO_EN_B1_09, MODULO_EN_B1_10, MODULO_EN_B1_11, MODULO_EN_B1_12,
    MODULO_EN_B1_13, MODULO_EN_B1_14, MODULO_EN_B1_15, MODULO_EN_B1_16,
    MODULO_EN_B1_17, MODULO_EN_B1_18, MODULO_EN_B1_19, MODULO_EN_B1_20,
    MODULO_EN_B1_21, MODULO_EN_B1_22, MODULO_EN_B1_23, MODULO_EN_B1_24
];

// Exportação e Compatibilidade Global
if (typeof window !== 'undefined') {
    window.CURSO_ENGLISH_B1_DADOS = CURSO_ENGLISH_B1_DADOS;
    if (typeof window.CURSO_B1_DADOS === 'undefined') {
        window.CURSO_B1_DADOS = CURSO_ENGLISH_B1_DADOS;
    }
}
