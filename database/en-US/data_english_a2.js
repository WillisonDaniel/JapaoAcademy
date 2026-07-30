// ==========================================
// BANCO DE DADOS DO CURSO DE INGLÊS - NÍVEL A2 (ELEMENTARY)
// 30 MÓDULOS COMPLETOS DIVIDIDOS EM 6 SEÇÕES PEDAGÓGICAS
// ==========================================

// ------------------------------------------
// SEÇÃO 1: DAILY LIFE, HABITS & FREQUENCY (MÓDULOS 1 A 5)
// ------------------------------------------

const MODULO_EN_A2_01 = {
    id: "en_a2_mod_01",
    title: "Everyday Routines & Present Simple Review",
    section: 1,
    sectionTitle: "Daily Life, Habits & Frequency",
    level: "A2",
    xpReward: 110,
    stage1_context: {
        audioGuide: "I wake up at seven o'clock, brush my teeth, and take a shower every morning.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Revisar e aprofundar as ações da rotina diária em inglês usando o Present Simple com vocabulário natural e conectores de tempo."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Wake up / Get up", romaji: "/weɪk ʌp / ɡet ʌp/", translation: "Acordar / Levantar-se da cama", timeContext: "Primeira ação do dia." },
        { type: "vocab", kanji: "Brush my teeth", romaji: "/brʌʃ maɪ tiːθ/", translation: "Escovar os dentes", timeContext: "Higiene matinal e noturna." },
        { type: "vocab", kanji: "Take a shower / Have a shower", romaji: "/teɪk ə ˈʃaʊər/", translation: "Tomar banho", timeContext: "Higiene pessoal." },
        { type: "vocab", kanji: "Get dressed", romaji: "/ɡet drest/", translation: "Vestir-se / Trocar de roupa", timeContext: "Preparar-se para o dia." },
        { type: "grammar_pill", title: "Present Simple: Terceira Pessoa (He/She/It)", rule: "Na 3ª pessoa do singular (He/She/It), adiciona-se '-s', '-es' ou '-ies' ao verbo na forma afirmativa. Verbos terminados em -ch, -sh, -ss, -x, -z, -o recebem '-es'.", formula: "He/She/It + Verbo(-s/-es) | Negativa: does not (doesn't) + Verbo base", example: "She wakes up at 7 AM. He doesn't take a shower in the evening." },
        { type: "grammar_pill", title: "Conectores de Sequência Temporal", rule: "Para descrever a ordem da rotina, usam-se conectores como 'First' (Primeiro), 'Then / After that' (Depois), 'Finally' (Finalmente).", formula: "First, [Ação 1]. Then, [Ação 2]. Finally, [Ação 3].", example: "First, I wake up. Then, I brush my teeth. Finally, I have breakfast." }
    ],
    stage3_practice: [
        { question: "1. Qual é a forma correta do verbo para 'She ___ (brush) her teeth every morning'?", options: [{ label: "brushes", isCorrect: true }, { label: "brush", isCorrect: false }, { label: "brushing", isCorrect: false }] },
        { question: "2. Escolha a forma negativa correta: 'He ___ wake up early on Sundays.'", options: [{ label: "doesn't", isCorrect: true }, { label: "don't", isCorrect: false }, { label: "isn't", isCorrect: false }] },
        { question: "3. Qual conector de sequência traduz-se como 'Depois disso'?", options: [{ label: "After that", isCorrect: true }, { label: "First", isCorrect: false }, { label: "Finally", isCorrect: false }] },
        { question: "4. Complete a frase: 'John ___ to work by bus every day.'", options: [{ label: "goes", isCorrect: true }, { label: "go", isCorrect: false }, { label: "going", isCorrect: false }] },
        { question: "5. Qual sentença está gramaticalmente CORRETA no Present Simple?", options: [{ label: "She takes a shower at 8 AM.", isCorrect: true }, { label: "She take a shower at 8 AM.", isCorrect: false }, { label: "She is take a shower at 8 AM.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I wake up early and brush my teeth.", translation: "Eu acordo cedo e escovo meus dentes.", chunks: ["I", "wake", "up", "early", "and", "brush", "my", "teeth", "."] },
        { sentenceEn: "First, she takes a shower, then she gets dressed.", translation: "Primeiro, ela toma banho, depois ela se veste.", chunks: ["First", ",", "she", "takes", "a", "shower", ",", "then", "she", "gets", "dressed", "."] }
    ],
    stage4_dialog: [
        { npcName: "Claire (Amiga)", npcMessage: "What time do you usually wake up on weekdays?", options: [{ text: "I usually wake up at 6:30 AM and take a shower.", isCorrect: true, feedback: "Excelente! Resposta clara e correta no Present Simple." }, { text: "I am waking up yesterday at 6:30.", isCorrect: false, feedback: "A pergunta é sobre rotina habitual, não passado ou contínuo." }, { text: "He wakes up at 6:30.", isCorrect: false, feedback: "Ela perguntou a você ('you'), responda com 'I'." }] },
        { npcName: "Mark (Colega)", npcMessage: "Does your brother get dressed quickly in the morning?", options: [{ text: "Yes, he gets dressed in five minutes!", isCorrect: true, feedback: "Perfeito! Verbo flexionou com 'gets' para 'he'." }, { text: "Yes, he get dressed in five minutes.", isCorrect: false, feedback: "Na 3ª pessoa do singular (he), adicione '-s' ao verbo." }, { text: "Yes, he doesn't get dressed.", isCorrect: false, feedback: "'Yes' contradiz 'doesn't'." }] },
        { npcName: "Jessica", npcMessage: "What do you do after you brush your teeth?", options: [{ text: "After that, I have breakfast and go to work.", isCorrect: true, feedback: "Ótimo uso de conector e ações diárias." }, { text: "Finally I was sleeping.", isCorrect: false, feedback: "Fora de contexto com a rotina matinal." }, { text: "I am going sleep.", isCorrect: false, feedback: "Construção gramatical incorreta para a pergunta." }] }
    ],
    stage5_quiz: [
        { question: "1. Como se diz 'Eu me visto' em inglês?", options: [{ label: "I get dressed", isCorrect: true }, { label: "I take dressed", isCorrect: false }, { label: "I wake dressed", isCorrect: false }] },
        { question: "2. Qual a 3ª pessoa do singular do verbo 'watch' no Present Simple?", options: [{ label: "watches", isCorrect: true }, { label: "watchs", isCorrect: false }, { label: "watching", isCorrect: false }] },
        { question: "3. 'After that' significa:", options: [{ label: "Depois disso / Após isso", isCorrect: true }, { label: "Primeiramente", isCorrect: false }, { label: "Nunca", isCorrect: false }] },
        { question: "4. Qual frase é a negativa correta para 'My sister likes coffee'?", options: [{ label: "My sister doesn't like coffee.", isCorrect: true }, { label: "My sister don't likes coffee.", isCorrect: false }, { label: "My sister isn't like coffee.", isCorrect: false }] },
        { question: "5. 'First, I take a shower' indica:", options: [{ label: "A primeira ação de uma sequência", isCorrect: true }, { label: "O final da rotina", isCorrect: false }, { label: "Uma ação no passado distante", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_02 = {
    id: "en_a2_mod_02",
    title: "Adverbs & Expressions of Frequency",
    section: 1,
    sectionTitle: "Daily Life, Habits & Frequency",
    level: "A2",
    xpReward: 115,
    stage1_context: {
        audioGuide: "I go to the gym twice a week. I hardly ever drink soda.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a especificar a frequência de hábitos usando advérbios (always, sometimes, hardly ever, never) e expressões numéricas de frequência (once a week, twice a month)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Once / Twice / Three times", romaji: "/wʌns / twaɪs / θriː taɪmz/", translation: "Uma vez / Duas vezes / Três vezes", timeContext: "Frequência numérica exata." },
        { type: "vocab", kanji: "Hardly ever / Seldom", romaji: "/ˈhɑːrdli ˈevər / ˈseldəm/", translation: "Quase nunca / Raramente", timeContext: "Frequência baixa (~5-10%)." },
        { type: "vocab", kanji: "Every day / Every week / Every month", romaji: "/ˈevri deɪ/", translation: "Todo dia / Toda semana / Todo mês", timeContext: "Frequência regular periódica." },
        { type: "grammar_pill", title: "Posição dos Advérbios de Frequência", rule: "Advérbios de frequência (always, usually, often, sometimes, hardly ever, never) ficam ANTES do verbo principal, mas DEPOIS do verbo To Be.", formula: "Subject + Advérbio + Verbo Principal | Subject + To Be + Advérbio", example: "I ALWAYS drink coffee. She IS NEVER late for class." },
        { type: "grammar_pill", title: "Expressões de Frequência com 'A' (Once a week, Twice a month)", rule: "Usamos 'once' (1x), 'twice' (2x) e '[número] times' seguidos de 'a + período de tempo' para indicar repetição regular.", formula: "Once/Twice/Three times + a + day/week/month/year", example: "I workout three times a week. We travel twice a year." }
    ],
    stage3_practice: [
        { question: "1. Qual a posição correta do advérbio na frase?", options: [{ label: "She always arrives on time.", isCorrect: true }, { label: "She arrives always on time.", isCorrect: false }, { label: "Always she arrives on time.", isCorrect: false }] },
        { question: "2. Como se diz 'Duas vezes por semana' em inglês?", options: [{ label: "Twice a week", isCorrect: true }, { label: "Two times per week", isCorrect: false }, { label: "Double a week", isCorrect: false }] },
        { question: "3. Com o verbo 'To Be', onde fica o advérbio de frequência?", options: [{ label: "Depois do verbo To Be", isCorrect: true }, { label: "Antes do verbo To Be", isCorrect: false }, { label: "No final da frase obrigatoriamente", isCorrect: false }] },
        { question: "4. O que significa 'hardly ever'?", options: [{ label: "Quase nunca / Raramente", isCorrect: true }, { label: "Sempre", isCorrect: false }, { label: "Com frequência", isCorrect: false }] },
        { question: "5. Escolha a frase com a ordem sintática CORRETA:", options: [{ label: "He is never tired after work.", isCorrect: true }, { label: "He never is tired after work.", isCorrect: false }, { label: "He is tired never after work.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I go to the gym twice a week.", translation: "Eu vou à academia duas vezes por semana.", chunks: ["I", "go", "to", "the", "gym", "twice", "a", "week", "."] },
        { sentenceEn: "She is hardly ever late for meetings.", translation: "Ela quase nunca está atrasada para reuniões.", chunks: ["She", "is", "hardly", "ever", "late", "for", "meetings", "."] }
    ],
    stage4_dialog: [
        { npcName: "Paul", npcMessage: "How often do you play football or exercise?", options: [{ text: "I play football twice a week with my friends.", isCorrect: true, feedback: "Resposta perfeita com expressão de frequência!" }, { text: "I play football two times the week.", isCorrect: false, feedback: "Use 'twice a week' em vez de 'two times the week'." }, { text: "I am playing football always.", isCorrect: false, feedback: "O advérbio fica antes do verbo principal: 'I always play'." }] },
        { npcName: "Maria", npcMessage: "Are you ever late for your morning meetings?", options: [{ text: "No, I am hardly ever late.", isCorrect: true, feedback: "Posicionamento correto de 'hardly ever' após o verbo To Be." }, { text: "No, I hardly ever am late.", isCorrect: false, feedback: "O advérbio de frequência fica DEPOIS do verbo To Be (am)." }, { text: "No, I late twice.", isCorrect: false, feedback: "Falta a estrutura completa da resposta." }] },
        { npcName: "David", npcMessage: "How many times a month do you go to the cinema?", options: [{ text: "I go to the cinema once or twice a month.", isCorrect: true, feedback: "Excelente uso de 'once' e 'twice'!" }, { text: "I go one time in the month.", isCorrect: false, feedback: "Prefira 'once a month' a 'one time in the month'." }, { text: "I never going.", isCorrect: false, feedback: "Use 'I never go'." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Once' significa:", options: [{ label: "Uma vez", isCorrect: true }, { label: "Duas vezes", isCorrect: false }, { label: "Onze", isCorrect: false }] },
        { question: "2. Como se diz 'Três vezes por ano'?", options: [{ label: "Three times a year", isCorrect: true }, { label: "Three years once", isCorrect: false }, { label: "Triple a year", isCorrect: false }] },
        { question: "3. Qual frase está em ordem sintática correta?", options: [{ label: "We usually have dinner at 8 PM.", isCorrect: true }, { label: "We have usually dinner at 8 PM.", isCorrect: false }, { label: "Usually we dinner have at 8 PM.", isCorrect: false }] },
        { question: "4. O advérbio 'seldom' é um sinônimo de:", options: [{ label: "Hardly ever / Rarely", isCorrect: true }, { label: "Always", isCorrect: false }, { label: "Often", isCorrect: false }] },
        { question: "5. 'Every two weeks' significa:", options: [{ label: "A cada duas semanas / De quinzenalmente", isCorrect: true }, { label: "Duas vezes por semana", isCorrect: false }, { label: "Todas as semanas", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_03 = {
    id: "en_a2_mod_03",
    title: "Free Time & Hobbies",
    section: 1,
    sectionTitle: "Daily Life, Habits & Frequency",
    level: "A2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "In my free time, I enjoy playing video games and reading books.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar preferências de lazer, passatempos e hobbies usando verbos de gosto (like, enjoy, love, hate) seguidos de gerúndio (-ing) ou infinitivo."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Enjoy / Love / Hate", romaji: "/ɪnˈdʒɔɪ / lʌv / heɪt/", translation: "Apreciar, Gostar de / Amar / Odiar", timeContext: "Verbos de preferência pessoal." },
        { type: "vocab", kanji: "Playing video games / Reading books", romaji: "/ˈpleɪ.ɪŋ ˈvɪd.i.oʊ ɡeɪmz/", translation: "Jogar videogame / Ler livros", timeContext: "Atividades de lazer comuns." },
        { type: "vocab", kanji: "Watching movies / Going out with friends", romaji: "/ˈwɒtʃɪŋ ˈmuːviz/", translation: "Assistir filmes / Sair com amigos", timeContext: "Passatempos sociais e relaxantes." },
        { type: "grammar_pill", title: "Verbos de Gosto + Gerúndio (-ing)", rule: "Após os verbos de sentimento/gosto (like, enjoy, love, hate, don't mind), o verbo seguinte costuma ser usado no gerúndio (com final '-ing').", formula: "Subject + like / enjoy / love / hate + Verb(-ing)", example: "I ENJOY PLAYING basketball. She HATES DOING homework." },
        { type: "grammar_pill", title: "Gerúndio (-ing) vs. Infinitivo (to + verbo)", rule: "Com 'like' e 'love', você pode usar -ing ou infinitivo (ex: 'I like reading' ou 'I like to read'). Porém, após 'ENJOY' e 'DON'T MIND', usa-se EXCLUSIVAMENTE a forma com -ing!", formula: "Enjoy + V(-ing) [NUNCA enjoy + to V]", example: "I enjoy watching series. (CORRETO) | I enjoy to watch series. (INCORRETO)" }
    ],
    stage3_practice: [
        { question: "1. Qual frase segue a regra gramatical CORRETA com o verbo 'enjoy'?", options: [{ label: "I enjoy reading books in the evening.", isCorrect: true }, { label: "I enjoy to read books in the evening.", isCorrect: false }, { label: "I enjoy read books in the evening.", isCorrect: false }] },
        { question: "2. Complete a frase: 'She doesn't mind ___ early on Saturdays.'", options: [{ label: "waking up", isCorrect: true }, { label: "to wake up", isCorrect: false }, { label: "wake up", isCorrect: false }] },
        { question: "3. Qual forma verbal deve seguir 'hate' ao falar de passatempos?", options: [{ label: "Gerúndio (-ing) ou infinitivo (to + V)", isCorrect: true }, { label: "Apenas o verbo no passado", isCorrect: false }, { label: "Particípio passado", isCorrect: false }] },
        { question: "4. Traduza: 'Eu adoro ouvir música no meu tempo livre.'", options: [{ label: "I love listening to music in my free time.", isCorrect: true }, { label: "I love listen music in my free time.", isCorrect: false }, { label: "I love to listening music in my free time.", isCorrect: false }] },
        { question: "5. Escolha a opção gramaticalmente incorreta:", options: [{ label: "We enjoy to play computer games.", isCorrect: true }, { label: "We enjoy playing computer games.", isCorrect: false }, { label: "We love to play computer games.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "In my free time, I enjoy reading books.", translation: "No meu tempo livre, eu aprecio ler livros.", chunks: ["In", "my", "free", "time", ",", "I", "enjoy", "reading", "books", "."] },
        { sentenceEn: "She hates doing chores on weekends.", translation: "Ela odeia fazer tarefas domésticas nos fins de semana.", chunks: ["She", "hates", "doing", "chores", "on", "weekends", "."] }
    ],
    stage4_dialog: [
        { npcName: "Alex", npcMessage: "What do you like doing in your free time?", options: [{ text: "I really enjoy watching movies and cooking.", isCorrect: true, feedback: "Excelente uso de 'enjoy' com gerúndios!" }, { text: "I enjoy to watch movies.", isCorrect: false, feedback: "'Enjoy' exige o verbo com '-ing' (watching)." }, { text: "I like cook.", isCorrect: false, feedback: "Após 'like', use 'cooking' ou 'to cook'." }] },
        { npcName: "Sophie", npcMessage: "Do you like playing computer games?", options: [{ text: "Yes, I love playing online games with friends!", isCorrect: true, feedback: "Resposta natural e gramaticalmente impecável." }, { text: "Yes, I enjoy to play games.", isCorrect: false, feedback: "Lembre-se: 'enjoy playing'." }, { text: "Yes, I am play.", isCorrect: false, feedback: "Erro de estrutura com o verbo To Be." }] },
        { npcName: "Brian", npcMessage: "Does your sister enjoy going to the gym?", options: [{ text: "No, she hates going to the gym.", isCorrect: true, feedback: "Uso perfeito de 'hates' + '-ing'." }, { text: "No, she hate to go.", isCorrect: false, feedback: "Para 'she', use 'hates'." }, { text: "No, she doesn't enjoy to go.", isCorrect: false, feedback: "Com 'enjoy', use 'going'." }] }
    ],
    stage5_quiz: [
        { question: "1. O verbo 'enjoy' exige qual estrutura a seguir?", options: [{ label: "Verbo no gerúndio (-ing)", isCorrect: true }, { label: "Verbo no infinitivo (to + V)", isCorrect: false }, { label: "Verbo no passado simples", isCorrect: false }] },
        { question: "2. O que significa a expressão 'don't mind'?", options: [{ label: "Não se importar / Não incomodar-se em fazer algo", isCorrect: true }, { label: "Odiar profundamente", isCorrect: false }, { label: "Recusar-se a fazer", isCorrect: false }] },
        { question: "3. Como fica a frase no inglês correto: 'Ela ama dançar'?", options: [{ label: "She loves dancing / She loves to dance", isCorrect: true }, { label: "She love dance", isCorrect: false }, { label: "She is love dancing", isCorrect: false }] },
        { question: "4. Qual a preposição correta para 'ouvir música'?", options: [{ label: "Listen to music", isCorrect: true }, { label: "Listen music", isCorrect: false }, { label: "Listen at music", isCorrect: false }] },
        { question: "5. 'In my spare time' é um sinônimo de:", options: [{ label: "In my free time (no meu tempo livre)", isCorrect: true }, { label: "No meu horário de trabalho", isCorrect: false }, { label: "No ano passado", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_04 = {
    id: "en_a2_mod_04",
    title: "Jobs, Workplace & Daily Tasks",
    section: 1,
    sectionTitle: "Daily Life, Habits & Frequency",
    level: "A2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "What do you do at work? I write emails, attend meetings, and manage projects.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Descrever funções de trabalho, ambiente profissional e tarefas cotidianas em um ambiente corporativo."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Attend meetings / Write emails", romaji: "/əˈtend ˈmiːtɪŋz/", translation: "Participar de reuniões / Escrever e-mails", timeContext: "Tarefas de escritório." },
        { type: "vocab", kanji: "Manage projects / Answer phone calls", romaji: "/ˈmænɪdʒ ˈprɒdʒekts/", translation: "Gerenciar projetos / Atender chamadas", timeContext: "Responsabilidades de trabalho." },
        { type: "vocab", kanji: "Workplace / Office / Factory", romaji: "/ˈwɜːrkpleɪs / ˈɒfɪs/", translation: "Local de trabalho / Escritório / Fábrica", timeContext: "Locais de trabalho." },
        { type: "grammar_pill", title: "Perguntas de Trabalho com 'What do you do?'", rule: "Para perguntar a rotina de trabalho específica, usamos 'What do you do at work?' ou 'What are your daily responsibilities?'.", formula: "What + do/does + Subject + do at work?", example: "What does she do at work? ➔ She manages a team." },
        { type: "grammar_pill", title: "Uso da Preposição 'FOR' e 'IN' para Emprego", rule: "Usamos 'work FOR + nome da empresa/pessoa' e 'work IN + setor/cidade/local'.", formula: "Work for [Company] | Work in [Department/Field]", example: "I work FOR Google. She works IN IT / IN sales." }
    ],
    stage3_practice: [
        { question: "1. Qual preposição usar para indicar a empresa onde você trabalha? 'I work ___ Apple.'", options: [{ label: "for", isCorrect: true }, { label: "in", isCorrect: false }, { label: "at to", isCorrect: false }] },
        { question: "2. Como se diz 'participar de reuniões' em inglês formal?", options: [{ label: "Attend meetings", isCorrect: true }, { label: "Assist meetings", isCorrect: false }, { label: "Present meetings", isCorrect: false }] },
        { question: "3. Complete a frase: 'What ___ your manager do at work?'", options: [{ label: "does", isCorrect: true }, { label: "do", isCorrect: false }, { label: "is", isCorrect: false }] },
        { question: "4. Qual a preposição para setor de trabalho? 'He works ___ marketing.'", options: [{ label: "in", isCorrect: true }, { label: "for", isCorrect: false }, { label: "on", isCorrect: false }] },
        { question: "5. Cuidado com o falso cognato! O verbo 'attend' em inglês significa:", options: [{ label: "Participar / Comparecer", isCorrect: true }, { label: "Atender o telefone", isCorrect: false }, { label: "Ajudar", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I write emails and attend meetings every day.", translation: "Eu escrevo e-mails e participo de reuniões todos os dias.", chunks: ["I", "write", "emails", "and", "attend", "meetings", "every", "day", "."] },
        { sentenceEn: "She works for a multinational company in sales.", translation: "Ela trabalha para uma empresa multinacional em vendas.", chunks: ["She", "works", "for", "a", "multinational", "company", "in", "sales", "."] }
    ],
    stage4_dialog: [
        { npcName: "Karen (Recrutadora)", npcMessage: "Can you describe your daily tasks at work?", options: [{ text: "I write reports, answer emails, and manage client projects.", isCorrect: true, feedback: "Excelente vocabulário corporativo!" }, { text: "I am work in a office.", isCorrect: false, feedback: "Diga 'I work in an office'." }, { text: "I assist meetings all day.", isCorrect: false, feedback: "Em inglês, use 'attend meetings' para participar." }] },
        { npcName: "Tom", npcMessage: "Who do you work for?", options: [{ text: "I work for a software development company.", isCorrect: true, feedback: "Uso correto de 'work for'." }, { text: "I work in a company for software.", isCorrect: false, feedback: "Para indicar o empregador, use 'work for [empresa]'." }, { text: "I working for company.", isCorrect: false, feedback: "Falta o artigo 'a'." }] },
        { npcName: "Daniel", npcMessage: "Does Sarah attend many meetings in her job?", options: [{ text: "Yes, she attends meetings every afternoon.", isCorrect: true, feedback: "Concordância verbal perfeita com 'she' (attends)." }, { text: "Yes, she attend meetings.", isCorrect: false, feedback: "Falta o '-s' no verbo para 3ª pessoa (attends)." }, { text: "Yes, she is attend.", isCorrect: false, feedback: "Não misture verbo To Be com verbo principal sem -ing." }] }
    ],
    stage5_quiz: [
        { question: "1. Como se diz 'gerenciar projetos' em inglês?", options: [{ label: "Manage projects", isCorrect: true }, { label: "Make projects", isCorrect: false }, { label: "Do projects", isCorrect: false }] },
        { question: "2. 'Work for Microsoft' indica:", options: [{ label: "Trabalhar para a empresa Microsoft", isCorrect: true }, { label: "Trabalhar no prédio da Microsoft", isCorrect: false }, { label: "Comprar produtos da Microsoft", isCorrect: false }] },
        { question: "3. 'Answer phone calls' traduz-se como:", options: [{ label: "Atender chamadas telefônicas", isCorrect: true }, { label: "Fazer perguntas pelo telefone", isCorrect: false }, { label: "Desligar o telefone", isCorrect: false }] },
        { question: "4. Qual a diferença entre 'attend' e 'answer' para chamadas?", options: [{ label: "Answer a phone call / Attend a meeting", isCorrect: true }, { label: "Attend a phone call / Answer a meeting", isCorrect: false }, { label: "São idênticos", isCorrect: false }] },
        { question: "5. 'Work in HR' significa trabalhar no setor de:", options: [{ label: "Recursos Humanos (Human Resources)", isCorrect: true }, { label: "Horas Extras", isCorrect: false }, { label: "Hotelaria", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_05 = {
    id: "en_a2_mod_05",
    title: "Habits & Free Time Grammar Review",
    section: 1,
    sectionTitle: "Daily Life, Habits & Frequency",
    level: "A2",
    xpReward: 125,
    stage1_context: {
        audioGuide: "You live in London, don't you? Yes, I've been living here for two years.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Revisar as estruturas da Seção 1 consolidando Question Tags básicas de confirmação e expressões de tempo habitual."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Don't you? / Doesn't he?", romaji: "/doʊnt juː / dʌzənt hiː/", translation: "Não é? / Não mora? (Question tags)", timeContext: "Confirmação no final da frase." },
        { type: "vocab", kanji: "On weekdays / On weekends", romaji: "/ɒn ˈwiːkdeɪz/", translation: "Nos dias úteis / Nos fins de semana", timeContext: "Expressões de tempo habitual." },
        { type: "grammar_pill", title: "Question Tags com Present Simple (do/does)", rule: "Question tags são pequenas perguntas no final da frase para pedir confirmação. Se a frase for AFIRMATIVA, a tag será NEGATIVA usando don't/doesn't.", formula: "[Frase Afirmativa], + don't / doesn't + Subject?", example: "You work here, DON'T YOU? | She likes tea, DOESN'T SHE?" },
        { type: "grammar_pill", title: "Question Tags com Frase Negativa", rule: "Se a frase principal for NEGATIVA, a question tag será AFIRMATIVA usando do/does.", formula: "[Frase Negativa], + do / does + Subject?", example: "You don't smoke, DO YOU? | He doesn't drive, DOES HE?" }
    ],
    stage3_practice: [
        { question: "1. Qual a Question Tag correta para: 'You live in New York, ___?'", options: [{ label: "don't you?", isCorrect: true }, { label: "aren't you?", isCorrect: false }, { label: "doesn't you?", isCorrect: false }] },
        { question: "2. Qual a Question Tag correta para: 'She doesn't eat meat, ___?'", options: [{ label: "does she?", isCorrect: true }, { label: "doesn't she?", isCorrect: false }, { label: "is she?", isCorrect: false }] },
        { question: "3. Complete: 'Paul plays tennis on weekends, ___?'", options: [{ label: "doesn't he?", isCorrect: true }, { label: "don't he?", isCorrect: false }, { label: "isn't he?", isCorrect: false }] },
        { question: "4. Qual a preposição correta para dias da semana/fins de semana em inglês americano?", options: [{ label: "On weekdays / On weekends", isCorrect: true }, { label: "In weekdays / In weekends", isCorrect: false }, { label: "At weekdays / At weekends", isCorrect: false }] },
        { question: "5. Complete a frase negativa: 'They don't work on Sundays, ___?'", options: [{ label: "do they?", isCorrect: true }, { label: "don't they?", isCorrect: false }, { label: "are they?", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "You speak English, don't you?", translation: "Você fala inglês, não fala?", chunks: ["You", "speak", "English", ",", "don't", "you", "?"] },
        { sentenceEn: "She doesn't like cold weather, does she?", translation: "Ela não gosta de tempo frio, gosta?", chunks: ["She", "doesn't", "like", "cold", "weather", ",", "does", "she", "?"] }
    ],
    stage4_dialog: [
        { npcName: "Oliver", npcMessage: "You work in IT, don't you?", options: [{ text: "Yes, I do! I manage software projects.", isCorrect: true, feedback: "Resposta perfeita confirmando a Question Tag!" }, { text: "Yes, I don't.", isCorrect: false, feedback: "Contradição: 'Yes' exige afirmação ('I do')." }, { text: "Yes, you don't.", isCorrect: false, feedback: "Resposta confusa." }] },
        { npcName: "Sophia", npcMessage: "Sarah enjoys swimming, doesn't she?", options: [{ text: "Yes, she goes swimming every weekend.", isCorrect: true, feedback: "Excelente confirmação e complemento." }, { text: "Yes, she isn't.", isCorrect: false, feedback: "Para o Present Simple usa-se 'does/doesn't'." }, { text: "No, she doesn't enjoys.", isCorrect: false, feedback: "Após 'doesn't', o verbo principal fica na forma base (enjoy)." }] },
        { npcName: "Lucas", npcMessage: "We don't have meetings on Fridays, do we?", options: [{ text: "No, we don't. Fridays are free!", isCorrect: true, feedback: "Resposta consistente e correta." }, { text: "No, we do.", isCorrect: false, feedback: "Contradição entre 'No' e 'we do'." }, { text: "Yes, we aren't.", isCorrect: false, feedback: "Use do/don't." }] }
    ],
    stage5_quiz: [
        { question: "1. A regra de ouro das Question Tags diz que:", options: [{ label: "Frase afirmativa exige tag negativa, e vice-versa", isCorrect: true }, { label: "Todas as tags devem usar o verbo To Be", isCorrect: false }, { label: "Não é necessário usar pronome no final", isCorrect: false }] },
        { question: "2. 'On weekdays' refere-se a:", options: [{ label: "De segunda a sexta-feira", isCorrect: true }, { label: "Sábado e domingo", isCorrect: false }, { label: "Feriados apenas", isCorrect: false }] },
        { question: "3. Escolha a Question Tag correta: 'It rains a lot here, ___?'", options: [{ label: "doesn't it?", isCorrect: true }, { label: "don't it?", isCorrect: false }, { label: "isn't it?", isCorrect: false }] },
        { question: "4. Qual opção completa: 'You don't like tea, ___?'", options: [{ label: "do you?", isCorrect: true }, { label: "don't you?", isCorrect: false }, { label: "are you?", isCorrect: false }] },
        { question: "5. Question Tags são usadas principalmente para:", options: [{ label: "Confirmar informações ou buscar concordância", isCorrect: true }, { label: "Fazer reclamações formais", isCorrect: false }, { label: "Dar ordens e comandos", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 2: PAST EXPERIENCES & STORIES (MÓDULOS 6 A 10)
// ------------------------------------------

const MODULO_EN_A2_06 = {
    id: "en_a2_mod_06",
    title: "Regular Verbs in Past Simple (-ed)",
    section: 2,
    sectionTitle: "Past Experiences & Stories",
    level: "A2",
    xpReward: 125,
    stage1_context: {
        audioGuide: "Yesterday, I worked until six, played tennis, and visited my parents.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprender a conjugar verbos regulares no Past Simple adicionando o sufixo '-ed' e dominando suas três regras de pronúncia (/t/, /d/, /ɪd/)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Worked / Played / Visited", romaji: "/wɜːrkt / pleɪd / ˈvɪzɪtɪd/", translation: "Trabalhei / Joguei / Visitei", timeContext: "Verbos regulares no passado." },
        { type: "vocab", kanji: "Yesterday / Last night / Last week", romaji: "/ˈjestərdeɪ/", translation: "Ontem / Ontem à noite / Semana passada", timeContext: "Marcadores de tempo passado." },
        { type: "grammar_pill", title: "Regra Geral do Past Simple para Verbos Regulares", rule: "Para formar o passado de verbos regulares na afirmativa, adiciona-se '-ed' ao verbo base. Se o verbo termina em -e, adiciona-se apenas '-d'. Se termina em consoante + y, troca-se por '-ied'.", formula: "Subject + Verbo(-ed) + Complemento", example: "I work ➔ I worked | She live ➔ She lived | They study ➔ They studied" },
        { type: "grammar_pill", title: "Pronúncia do sufixo -ED (/t/, /d/, /ɪd/)", rule: "O som '/ɪd/' (com sílaba extra) só ocorre quando o verbo base termina em som de T ou D! Ex: visited, wanted, needed.", formula: "Terminados em T/D ➔ Pronúncia /ɪd/ (ex: decided, started)", example: "Worked (/t/) | Played (/d/) | Visited (/ɪd/ - pronuncia o 'e')" }
    ],
    stage3_practice: [
        { question: "1. Qual a forma no passado do verbo regular 'study'?", options: [{ label: "studied", isCorrect: true }, { label: "studyed", isCorrect: false }, { label: "studid", isCorrect: false }] },
        { question: "2. Em qual destes verbos o sufixo '-ed' é pronunciado como uma nova sílaba (/ɪd/)?", options: [{ label: "wanted", isCorrect: true }, { label: "worked", isCorrect: false }, { label: "played", isCorrect: false }] },
        { question: "3. Complete a frase: 'Yesterday, we ___ (walk) in the park for two hours.'", options: [{ label: "walked", isCorrect: true }, { label: "walk", isCorrect: false }, { label: "walking", isCorrect: false }] },
        { question: "4. Qual verbo regular dobra a consoante final no passado?", options: [{ label: "stop ➔ stopped", isCorrect: true }, { label: "open ➔ openned", isCorrect: false }, { label: "help ➔ helpped", isCorrect: false }] },
        { question: "5. 'Last night' é uma expressão usada com qual tempo verbal?", options: [{ label: "Past Simple", isCorrect: true }, { label: "Present Continuous", isCorrect: false }, { label: "Future with going to", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Yesterday, I worked late and played video games.", translation: "Ontem, eu trabalhei até tarde e joguei videogame.", chunks: ["Yesterday", ",", "I", "worked", "late", "and", "played", "video", "games", "."] },
        { sentenceEn: "They visited their grandparents last weekend.", translation: "Eles visitaram os avós deles no fim de semana passado.", chunks: ["They", "visited", "their", "grandparents", "last", "weekend", "."] }
    ],
    stage4_dialog: [
        { npcName: "Sarah", npcMessage: "What did you do yesterday evening?", options: [{ text: "I watched a movie and cooked dinner.", isCorrect: true, feedback: "Uso perfeito dos verbos regulares no passado!" }, { text: "I watch a movie and cook dinner.", isCorrect: false, feedback: "Para o passado, adicione '-ed': watched, cooked." }, { text: "I am watching a movie yesterday.", isCorrect: false, feedback: "Não use Present Continuous para ações concluídas ontem." }] },
        { npcName: "Jack", npcMessage: "Did you study for the English test last night?", options: [{ text: "Yes, I studied for three hours!", isCorrect: true, feedback: "Mudança correta de 'study' para 'studied'." }, { text: "Yes, I studyed for three hours.", isCorrect: false, feedback: "Troque o 'y' por 'i' + 'ed' ➔ studied." }, { text: "Yes, I was study.", isCorrect: false, feedback: "Erro de estrutura." }] },
        { npcName: "Emma", npcMessage: "Where did they live last year?", options: [{ text: "They lived in a small apartment in Chicago.", isCorrect: true, feedback: "Flexão correta do verbo 'live' ➔ 'lived'." }, { text: "They live in Chicago last year.", isCorrect: false, feedback: "Falta o sufixo '-d' de passado." }, { text: "They living in Chicago.", isCorrect: false, feedback: "Falta o verbo de passado." }] }
    ],
    stage5_quiz: [
        { question: "1. Como fica o verbo 'stop' no Past Simple?", options: [{ label: "stopped", isCorrect: true }, { label: "stoped", isCorrect: false }, { label: "stopping", isCorrect: false }] },
        { question: "2. A pronúncia /ɪd/ do sufixo -ed ocorre após os sons de quais letras?", options: [{ label: "T e D", isCorrect: true }, { label: "P e K", isCorrect: false }, { label: "S e Z", isCorrect: false }] },
        { question: "3. 'Last week' significa:", options: [{ label: "Semana passada", isCorrect: true }, { label: "Próxima semana", isCorrect: false }, { label: "Esta semana", isCorrect: false }] },
        { question: "4. Qual a forma correta do verbo 'clean' no passado?", options: [{ label: "cleaned", isCorrect: true }, { label: "cleanied", isCorrect: false }, { label: "cleanned", isCorrect: false }] },
        { question: "5. 'I lived in Paris in 2018' indica:", options: [{ label: "Uma ação concluída no passado em tempo definido", isCorrect: true }, { label: "Uma ação que ainda continua hoje", isCorrect: false }, { label: "Um plano futuro", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_07 = {
    id: "en_a2_mod_07",
    title: "Irregular Verbs in Past Simple",
    section: 2,
    sectionTitle: "Past Experiences & Stories",
    level: "A2",
    xpReward: 130,
    stage1_context: {
        audioGuide: "Last summer, I went to Italy, bought souvenirs, ate pizza, and saw the Colosseum.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Dominar a forma afirmativa dos verbos irregulares mais frequentes em inglês no Past Simple (went, bought, ate, saw, had, came, took, wrote)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Go ➔ Went | Eat ➔ Ate", romaji: "/went / eɪt/", translation: "Ir ➔ Foi/Fui | Comer ➔ Comeu/Comi", timeContext: "Verbos irregulares essenciais." },
        { type: "vocab", kanji: "Buy ➔ Bought | See ➔ Saw", romaji: "/bɔːt / sɔː/", translation: "Comprar ➔ Comprou | Ver ➔ Viu", timeContext: "Verbos de ação no passado." },
        { type: "vocab", kanji: "Have ➔ Had | Take ➔ Took", romaji: "/hæd / tʊk/", translation: "Ter ➔ Teve/Tinha | Pegar/Tirar ➔ Pego/Tirou", timeContext: "Possessão e ação no passado." },
        { type: "grammar_pill", title: "Verbos Irregulares no Afirmativo", rule: "Verbos irregulares NÃO seguem a regra do '-ed'. Cada verbo possui uma forma própria no Past Simple que precisa ser memorizada.", formula: "Subject + Verbo Irregular (Past Simple)", example: "Go ➔ WENT | Eat ➔ ATE | Buy ➔ BOUGHT | Have ➔ HAD" },
        { type: "grammar_pill", title: "Pegadinha Comum: Sem '-ed' nos Irregulares!", rule: "NUNCA adicione '-ed' a um verbo irregular no passado. 'Goed' ou 'eated' são erros graves!", formula: "Incorreto: goed, eated, buyed | Correto: went, ate, bought", example: "I WENT to London. (NÃO 'I goed to London')." }
    ],
    stage3_practice: [
        { question: "1. Qual é o passado simples correto do verbo 'go'?", options: [{ label: "went", isCorrect: true }, { label: "goed", isCorrect: false }, { label: "gone", isCorrect: false }] },
        { question: "2. Qual é o passado simples do verbo 'buy'?", options: [{ label: "bought", isCorrect: true }, { label: "buyed", isCorrect: false }, { label: "bringed", isCorrect: false }] },
        { question: "3. Complete a frase: 'Last night, we ___ (eat) delicious pasta at the Italian restaurant.'", options: [{ label: "ate", isCorrect: true }, { label: "eated", isCorrect: false }, { label: "eaten", isCorrect: false }] },
        { question: "4. Qual a forma no passado do verbo 'see'?", options: [{ label: "saw", isCorrect: true }, { label: "seed", isCorrect: false }, { label: "seen", isCorrect: false }] },
        { question: "5. Escolha a frase que contém um erro de verbo irregular:", options: [{ label: "She goed to the supermarket.", isCorrect: true }, { label: "She went to the supermarket.", isCorrect: false }, { label: "She bought apples at the market.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I went to London and bought a new camera.", translation: "Eu fui para Londres e comprei uma câmera nova.", chunks: ["I", "went", "to", "London", "and", "bought", "a", "new", "camera", "."] },
        { sentenceEn: "We ate pizza and saw a great movie last night.", translation: "Nós comemos pizza e vimos um ótimo filme ontem à noite.", chunks: ["We", "ate", "pizza", "and", "saw", "a", "great", "movie", "last", "night", "."] }
    ],
    stage4_dialog: [
        { npcName: "Carlos", npcMessage: "What did you do during your vacation in Rome?", options: [{ text: "I went to museums, ate great food, and took many photos.", isCorrect: true, feedback: "Uso impecável de verbos irregulares: went, ate, took!" }, { text: "I goed to museums and eated food.", isCorrect: false, feedback: "Verbos irregulares não usam '-ed'! Use went e ate." }, { text: "I am going to museums.", isCorrect: false, feedback: "Fale no passado." }] },
        { npcName: "Laura", npcMessage: "Where did you buy that beautiful jacket?", options: [{ text: "I bought it at a small shop in Paris.", isCorrect: true, feedback: "Passado de 'buy' ➔ 'bought'." }, { text: "I buyed it in Paris.", isCorrect: false, feedback: "'Buy' é irregular ➔ bought." }, { text: "I am buy it in Paris.", isCorrect: false, feedback: "Construção gramatical incorreta." }] },
        { npcName: "Michael", npcMessage: "Did you see Mark at the party last Friday?", options: [{ text: "Yes, I saw him and we had a long conversation.", isCorrect: true, feedback: "Passados corretos: see ➔ saw, have ➔ had." }, { text: "Yes, I seed him.", isCorrect: false, feedback: "O passado de 'see' é 'saw'." }, { text: "Yes, I see him yesterday.", isCorrect: false, feedback: "Use 'saw' para ação no passado." }] }
    ],
    stage5_quiz: [
        { question: "1. Qual o passado do verbo 'have'?", options: [{ label: "had", isCorrect: true }, { label: "haves", isCorrect: false }, { label: "haved", isCorrect: false }] },
        { question: "2. Qual o passado do verbo 'take'?", options: [{ label: "took", isCorrect: true }, { label: "taked", isCorrect: false }, { label: "taken", isCorrect: false }] },
        { question: "3. 'We came home at midnight' usa o passado de qual verbo?", options: [{ label: "Come", isCorrect: true }, { label: "Become", isCorrect: false }, { label: "Calm", isCorrect: false }] },
        { question: "4. Qual a forma passada de 'write'?", options: [{ label: "wrote", isCorrect: true }, { label: "writed", isCorrect: false }, { label: "written", isCorrect: false }] },
        { question: "5. Na frase 'She drank water', o verbo original é:", options: [{ label: "Drink", isCorrect: true }, { label: "Drunk", isCorrect: false }, { label: "Drain", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_08 = {
    id: "en_a2_mod_08",
    title: "Past Simple Questions & Negatives",
    section: 2,
    sectionTitle: "Past Experiences & Stories",
    level: "A2",
    xpReward: 130,
    stage1_context: {
        audioGuide: "Did you go out last night? No, I didn't. I stayed home and didn't see anyone.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Formular perguntas e negações no Past Simple usando o verbo auxiliar DID / DIDN'T e manter o verbo principal na forma base."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Did you...? / I didn't...", romaji: "/dɪd juː / aɪ dɪdnt/", translation: "Você...? / Eu não...", timeContext: "Perguntas e negativas no passado." },
        { type: "vocab", kanji: "Stay home / Go out", romaji: "/steɪ hoʊm / ɡoʊ aʊt/", translation: "Ficar em casa / Sair", timeContext: "Ações de fim de semana." },
        { type: "grammar_pill", title: "Regra Fundamental do Auxiliar DID / DIDN'T", rule: "Quando usamos DID (perguntas) ou DIDN'T (negativas), o verbo principal VOLTA PARA A FORMA BASE (sem -ed e sem forma irregular)!", formula: "Negativa: Subject + didn't + Verbo BASE | Pergunta: Did + Subject + Verbo BASE?", example: "I DIDN'T GO to work. (NÃO 'didn't went'). DID YOU SEE the film? (NÃO 'Did you saw')." },
        { type: "grammar_pill", title: "Respostas Curtas no Past Simple", rule: "Para responder perguntas do tipo Yes/No no passado, usamos 'Yes, I did' ou 'No, I didn't'.", formula: "Yes, [Subject] + did. | No, [Subject] + didn't.", example: "Did you study? ➔ Yes, I did. / No, I didn't." }
    ],
    stage3_practice: [
        { question: "1. Qual a frase negativa CORRETA no Past Simple?", options: [{ label: "I didn't see him yesterday.", isCorrect: true }, { label: "I didn't saw him yesterday.", isCorrect: false }, { label: "I don't saw him yesterday.", isCorrect: false }] },
        { question: "2. Como formular a pergunta correta: '___ you go to the party?'", options: [{ label: "Did", isCorrect: true }, { label: "Do", isCorrect: false }, { label: "Were", isCorrect: false }] },
        { question: "3. Qual é a resposta curta negativa para 'Did she call you?'", options: [{ label: "No, she didn't.", isCorrect: true }, { label: "No, she doesn't.", isCorrect: false }, { label: "No, she hasn't.", isCorrect: false }] },
        { question: "4. Escolha a pergunta com a estrutura gramatical CORRETA:", options: [{ label: "Where did you buy that car?", isCorrect: true }, { label: "Where did you bought that car?", isCorrect: false }, { label: "Where you did buy that car?", isCorrect: false }] },
        { question: "5. O que acontece com o verbo principal em frases com 'didn't'?", options: [{ label: "Volta para a sua forma base (infinitivo sem 'to')", isCorrect: true }, { label: "Fica com '-ed'", isCorrect: false }, { label: "Fica no gerúndio (-ing)", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Did you go out last night?", translation: "Você saiu ontem à noite?", chunks: ["Did", "you", "go", "out", "last", "night", "?"] },
        { sentenceEn: "I didn't watch the movie because I was tired.", translation: "Eu não assisti ao filme porque estava cansado.", chunks: ["I", "didn't", "watch", "the", "movie", "because", "I", "was", "tired", "."] }
    ],
    stage4_dialog: [
        { npcName: "Hannah", npcMessage: "Did you enjoy your trip to Miami?", options: [{ text: "Yes, I did! I had a wonderful time.", isCorrect: true, feedback: "Resposta curta e complemento impecáveis!" }, { text: "Yes, I enjoyed didn't.", isCorrect: false, feedback: "Estrutura incorreta." }, { text: "Yes, I did enjoyed.", isCorrect: false, feedback: "Não coloque o verbo com '-ed' ao lado de 'did'." }] },
        { npcName: "Kevin", npcMessage: "Why didn't you come to class yesterday?", options: [{ text: "Because I didn't feel well.", isCorrect: true, feedback: "Uso correto de 'didn't feel' (verbo na forma base)." }, { text: "Because I didn't felt well.", isCorrect: false, feedback: "Após 'didn't', o verbo fica na forma base (feel, não felt)." }, { text: "Because I not come.", isCorrect: false, feedback: "Em inglês use 'didn't come'." }] },
        { npcName: "Rachel", npcMessage: "Did your parents buy a new house?", options: [{ text: "No, they didn't. They decided to stay in their old house.", isCorrect: true, feedback: "Excelente resposta negativa com 'didn't'!" }, { text: "No, they don't bought.", isCorrect: false, feedback: "Use 'didn't' para passado." }, { text: "No, they didn't bought.", isCorrect: false, feedback: "Após 'didn't', use 'buy'." }] }
    ],
    stage5_quiz: [
        { question: "1. O auxiliar do Past Simple para perguntas em todas as pessoas é:", options: [{ label: "Did", isCorrect: true }, { label: "Does", isCorrect: false }, { label: "Was", isCorrect: false }] },
        { question: "2. Qual frase está gramaticalmente ERRADA?", options: [{ label: "Did you went to school?", isCorrect: true }, { label: "Did you go to school?", isCorrect: false }, { label: "Didn't you go to school?", isCorrect: false }] },
        { question: "3. A forma contraída de 'did not' é:", options: [{ label: "didn't", isCorrect: true }, { label: "don't", isCorrect: false }, { label: "doesn't", isCorrect: false }] },
        { question: "4. Como responder afirmativamente 'Did he finish the report?'", options: [{ label: "Yes, he did.", isCorrect: true }, { label: "Yes, he does.", isCorrect: false }, { label: "Yes, he finished did.", isCorrect: false }] },
        { question: "5. 'Where did they find the keys?' tem qual significado?", options: [{ label: "Onde eles encontraram as chaves?", isCorrect: true }, { label: "Como eles encontraram as chaves?", isCorrect: false }, { label: "Por que eles perderam as chaves?", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_09 = {
    id: "en_a2_mod_09",
    title: "Travel Memories & Vacations",
    section: 2,
    sectionTitle: "Past Experiences & Stories",
    level: "A2",
    xpReward: 135,
    stage1_context: {
        audioGuide: "Where did you go on your last summer vacation? I traveled to Spain and stayed at a beach resort.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Narrar memórias de viagens, férias passadas e descrever atividades turísticas integrando verbos regulares e irregulares."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Travel to / Stay at a hotel / Visit landmarks", romaji: "/ˈtrævl tuː / steɪ æt / ˈlændmɑːrks/", translation: "Viajar para / Ficar num hotel / Visitar pontos turísticos", timeContext: "Vocabulário de férias." },
        { type: "vocab", kanji: "Flight / Souvenirs / Beach resort", romaji: "/flaɪt / ˌsuːvəˈnɪərz / biːtʃ rɪˈzɔːrt/", translation: "Voo / Lembrancinhas / Resort de praia", timeContext: "Elementos de viagem." },
        { type: "grammar_pill", title: "Perguntas de Viagem com Wh- Words no Past Simple", rule: "Para perguntar detalhes de viagens passadas, usam-se as Wh- words (Where, When, How, Who) seguidas de DID + Sujeito + Verbo base.", formula: "Wh- Word + did + Subject + Verb (base)?", example: "WHERE did you go? | WHEN did you arrive? | HOW did you travel?" },
        { type: "grammar_pill", title: "Expressando Duração com FOR e AGO", rule: "Usamos 'FOR' para duração (ex: for 2 weeks) e 'AGO' para indicar quanto tempo atrás a viagem aconteceu (ex: 3 months ago).", formula: "For + período de tempo | [Tempo] + ago", example: "I stayed in Rome FOR ten days. I visited Paris two years AGO." }
    ],
    stage3_practice: [
        { question: "1. Como perguntar 'Onde você foi nas suas últimas férias?'", options: [{ label: "Where did you go on your last vacation?", isCorrect: true }, { label: "Where you went on last vacation?", isCorrect: false }, { label: "Where did you went on vacation?", isCorrect: false }] },
        { question: "2. Como se diz 'Dois anos atrás' em inglês?", options: [{ label: "Two years ago", isCorrect: true }, { label: "Ago two years", isCorrect: false }, { label: "Before two years", isCorrect: false }] },
        { question: "3. Qual preposição indica a duração da estadia? 'We stayed in Madrid ___ one week.'", options: [{ label: "for", isCorrect: true }, { label: "since", isCorrect: false }, { label: "ago", isCorrect: false }] },
        { question: "4. Complete a frase de viagem no passado: 'They ___ (fly) to London last summer.'", options: [{ label: "flew", isCorrect: true }, { label: "flied", isCorrect: false }, { label: "flyed", isCorrect: false }] },
        { question: "5. 'Souvenirs' são:", options: [{ label: "Lembrancinhas / Recordações de viagem", isCorrect: true }, { label: "Malas pesadas", isCorrect: false }, { label: "Bilhetes de avião", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Where did you go on your last vacation?", translation: "Onde você foi nas suas últimas férias?", chunks: ["Where", "did", "you", "go", "on", "your", "last", "vacation", "?"] },
        { sentenceEn: "I traveled to Spain two months ago for a week.", translation: "Eu viajei para a Espanha dois meses atrás por uma semana.", chunks: ["I", "traveled", "to", "Spain", "two", "months", "ago", "for", "a", "week", "."] }
    ],
    stage4_dialog: [
        { npcName: "Jessica", npcMessage: "Where did you spend your summer holidays?", options: [{ text: "I went to Greece with my family. We stayed at a lovely resort.", isCorrect: true, feedback: "Narrativa de férias perfeita!" }, { text: "I go to Greece two years ago.", isCorrect: false, feedback: "Use o passado 'went' em vez de 'go'." }, { text: "I was go to Greece.", isCorrect: false, feedback: "Construção incorreta." }] },
        { npcName: "Tom", npcMessage: "How long did you stay in Tokyo?", options: [{ text: "We stayed there for two weeks.", isCorrect: true, feedback: "Uso correto da preposição 'for' para duração." }, { text: "We stayed there ago two weeks.", isCorrect: false, feedback: "'Ago' é usado para dizer há quanto tempo ocorreu, não para duração." }, { text: "We stay for two weeks.", isCorrect: false, feedback: "Use o verbo no passado: stayed." }] },
        { npcName: "Amanda", npcMessage: "Did you buy any souvenirs in Italy?", options: [{ text: "Yes, I bought local wine and some postcards.", isCorrect: true, feedback: "Passado correto de 'buy' ➔ 'bought'." }, { text: "Yes, I buyed souvenirs.", isCorrect: false, feedback: "O passado de 'buy' é 'bought'." }, { text: "Yes, I did bought.", isCorrect: false, feedback: "Erro de estrutura." }] }
    ],
    stage5_quiz: [
        { question: "1. A palavra 'ago' é colocada em qual posição da expressão temporal?", options: [{ label: "No final da expressão de tempo (ex: 5 days ago)", isCorrect: true }, { label: "No início (ex: ago 5 days)", isCorrect: false }, { label: "Entre o número e o substantivo", isCorrect: false }] },
        { question: "2. Qual o passado do verbo 'fly' (voar)?", options: [{ label: "flew", isCorrect: true }, { label: "flied", isCorrect: false }, { label: "flown", isCorrect: false }] },
        { question: "3. Para perguntar a duração de uma viagem, usa-se:", options: [{ label: "How long did you stay...?", isCorrect: true }, { label: "How much did you stay...?", isCorrect: false }, { label: "How many did you stay...?", isCorrect: false }] },
        { question: "4. 'Landmarks' refere-se a:", options: [{ label: "Pontos turísticos / Monumentos famosos", isCorrect: true }, { label: "Aterrissagens de avião", isCorrect: false }, { label: "Extensões de terra", isCorrect: false }] },
        { question: "5. 'I visited Italy five years ago' significa:", options: [{ label: "Eu visitei a Itália há cinco anos atrás", isCorrect: true }, { label: "Eu vou visitar a Itália daqui a cinco anos", isCorrect: false }, { label: "Eu fiquei na Itália por cinco anos", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_10 = {
    id: "en_a2_mod_10",
    title: "Past Continuous vs. Past Simple",
    section: 2,
    sectionTitle: "Past Experiences & Stories",
    level: "A2",
    xpReward: 140,
    stage1_context: {
        audioGuide: "I was sleeping when you called me last night.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Diferenciar e combinar o Past Continuous (ação em andamento no passado) com o Past Simple (ação pontual que interrompe) usando WHEN e WHILE."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Was / Were sleeping", romaji: "/wɒz / wɜːr ˈsliːpɪŋ/", translation: "Estava / Estavam dormindo", timeContext: "Ação contínua no passado." },
        { type: "vocab", kanji: "When / While", romaji: "/wen / waɪl/", translation: "Quando (ação pontual) / Enquanto (ação contínua)", timeContext: "Conectores de histórias no passado." },
        { type: "grammar_pill", title: "Estrutura do Past Continuous (Was/Were + V-ing)", rule: "Usamos Was (para I, He, She, It) ou Were (para You, We, They) seguidos de verbo com '-ing' para descrever ações que estavam acontecendo em um momento do passado.", formula: "Subject + was/were + Verb(-ing)", example: "I WAS STUDYING at 8 PM. They WERE PLAYING football." },
        { type: "grammar_pill", title: "Combinação: Past Continuous + Past Simple (WHEN vs. WHILE)", rule: "Usamos o Past Continuous para a ação longa em andamento e o Past Simple para a ação curta que a interrompe. Geralmente usamos 'WHEN' antes do Past Simple e 'WHILE' antes do Past Continuous.", formula: "[Ação longa: Past Continuous] + WHEN + [Ação curta: Past Simple] | WHILE + [Past Continuous], [Past Simple]", example: "I was sleeping WHEN the phone rang. | WHILE I was cooking, he arrived." }
    ],
    stage3_practice: [
        { question: "1. Complete a frase: 'I ___ (watch) TV when my friend arrived.'", options: [{ label: "was watching", isCorrect: true }, { label: "were watching", isCorrect: false }, { label: "watched", isCorrect: false }] },
        { question: "2. Escolha o conector correto: '___ I was walking in the park, it started to rain.'", options: [{ label: "While", isCorrect: true }, { label: "When", isCorrect: false }, { label: "Because of", isCorrect: false }] },
        { question: "3. Complete: 'They ___ (play) football when the lights went out.'", options: [{ label: "were playing", isCorrect: true }, { label: "was playing", isCorrect: false }, { label: "played", isCorrect: false }] },
        { question: "4. Qual a estrutura gramatical do Past Continuous para 'she'?", options: [{ label: "She was + Verb(-ing)", isCorrect: true }, { label: "She were + Verb(-ing)", isCorrect: false }, { label: "She did + Verb(-ing)", isCorrect: false }] },
        { question: "5. Qual frase indica uma ação contínua interrompida por uma ação pontual?", options: [{ label: "He was driving when he saw the accident.", isCorrect: true }, { label: "He drove when he saw the accident.", isCorrect: false }, { label: "He was driving while he was seeing the accident.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I was sleeping when you called me.", translation: "Eu estava dormindo quando você me ligou.", chunks: ["I", "was", "sleeping", "when", "you", "called", "me", "."] },
        { sentenceEn: "While she was cooking dinner, the power went out.", translation: "Enquanto ela estava cozinhando o jantar, a energia acabou.", chunks: ["While", "she", "was", "cooking", "dinner", ",", "the", "power", "went", "out", "."] }
    ],
    stage4_dialog: [
        { npcName: "Mark", npcMessage: "What were you doing at 9 PM yesterday?", options: [{ text: "I was studying for my exam when you sent the message.", isCorrect: true, feedback: "Excelente uso do Past Continuous com interrupção!" }, { text: "I was study when you sent.", isCorrect: false, feedback: "Falta o '-ing' no verbo: 'was studying'." }, { text: "I studied when you were send.", isCorrect: false, feedback: "Estrutura confusa." }] },
        { npcName: "Lisa", npcMessage: "Did you hear the thunderstorm last night?", options: [{ text: "No, I didn't! I was sleeping deeply while it was raining.", isCorrect: true, feedback: "Uso perfeito de duas ações contínuas com 'while'!" }, { text: "No, I slept when it raining.", isCorrect: false, feedback: "Faltou a estrutura correta de Past Continuous." }, { text: "No, I was sleep.", isCorrect: false, feedback: "Use 'was sleeping'." }] },
        { npcName: "Kevin", npcMessage: "Why did you drop your phone?", options: [{ text: "Because someone bumped into me while I was taking a photo.", isCorrect: true, feedback: "Interrupção perfeita com 'while' + Past Continuous!" }, { text: "Because I taking photo when someone bump.", isCorrect: false, feedback: "Faltam os auxiliares no passado." }, { text: "Because I was take a photo.", isCorrect: false, feedback: "Use '-ing': 'was taking'." }] }
    ],
    stage5_quiz: [
        { question: "1. O Past Continuous é formado por:", options: [{ label: "Was / Were + Verbo com -ing", isCorrect: true }, { label: "Did + Verbo na forma base", isCorrect: false }, { label: "Have / Has + Verbo no particípio", isCorrect: false }] },
        { question: "2. Geralmente, usam-se quais conectores para ligar Past Continuous e Past Simple?", options: [{ label: "When e While", isCorrect: true }, { label: "So e Because", isCorrect: false }, { label: "Before e Next", isCorrect: false }] },
        { question: "3. 'While' é comumente seguido de:", options: [{ label: "Past Continuous (ação em andamento)", isCorrect: true }, { label: "Past Simple (ação pontual)", isCorrect: false }, { label: "Future Simple", isCorrect: false }] },
        { question: "4. Qual a forma negativa do Past Continuous para 'we'?", options: [{ label: "We weren't + Verb(-ing)", isCorrect: true }, { label: "We wasn't + Verb(-ing)", isCorrect: false }, { label: "We didn't + Verb(-ing)", isCorrect: false }] },
        { question: "5. 'When the phone rang, I was taking a shower' significa:", options: [{ label: "Quando o telefone tocou, eu estava tomando banho", isCorrect: true }, { label: "Eu tomei banho depois que o telefone tocou", isCorrect: false }, { label: "O telefone tocou antes de eu tomar banho", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 3: COMPARISONS, PREFERENCES & OPINIONS (MÓDULOS 11 A 15)
// ------------------------------------------

const MODULO_EN_A2_11 = {
    id: "en_a2_mod_11",
    title: "Comparative Adjectives",
    section: 3,
    sectionTitle: "Comparisons, Preferences & Opinions",
    level: "A2",
    xpReward: 130,
    stage1_context: {
        audioGuide: "New York is bigger and more expensive than my hometown.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprender a fazer comparações entre dois objetos, lugares ou pessoas usando adjetivos curtos (-er than) e adjetivos longos (more ... than)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Bigger / Faster / Taller", romaji: "/ˈbɪɡər / ˈfæstər / ˈtɔːlər/", translation: "Maior / Mais rápido / Mais alto", timeContext: "Comparativos de adjetivos curtos." },
        { type: "vocab", kanji: "More expensive / More comfortable", romaji: "/mɔːr ɪkˈspensɪv/", translation: "Mais caro / Mais confortável", timeContext: "Comparativos de adjetivos longos." },
        { type: "grammar_pill", title: "Regra dos Adjetivos Curtos (-er + than)", rule: "Para adjetivos curtos (1 sílaba), adicione '-er' ao adjetivo seguido da palavra 'than' (do que). Se terminar em CVC (consoante-vogal-consoante), dobre a última consoante antes de -er.", formula: "Adjetivo Curto + er + THAN", example: "Fast ➔ FAST-ER than | Big ➔ BIGG-ER than | Small ➔ SMALL-ER than" },
        { type: "grammar_pill", title: "Regra dos Adjetivos Longos (more + adjetivo + than)", rule: "Para adjetivos longos (2 ou mais sílabas, exceto os terminados em -y), coloque 'MORE' antes do adjetivo e 'THAN' depois.", formula: "MORE + Adjetivo Longo + THAN", example: "Expensive ➔ MORE expensive THAN | Beautiful ➔ MORE beautiful THAN" },
        { type: "grammar_pill", title: "Comparativos Irregulares (Good, Bad, Far)", rule: "Alguns adjetivos são irregulares e mudam completamente no comparativo: Good ➔ BETTER than | Bad ➔ WORSE than | Far ➔ FARTHER/FURTHER than.", formula: "Good ➔ better than | Bad ➔ worse than", example: "This car is BETTER than that one. My results were WORSE than yours." }
    ],
    stage3_practice: [
        { question: "1. Qual é o comparativo correto do adjetivo 'big'?", options: [{ label: "bigger than", isCorrect: true }, { label: "more big than", isCorrect: false }, { label: "biger than", isCorrect: false }] },
        { question: "2. Qual é o comparativo correto do adjetivo 'expensive'?", options: [{ label: "more expensive than", isCorrect: true }, { label: "expensiver than", isCorrect: false }, { label: "most expensive than", isCorrect: false }] },
        { question: "3. Qual é o comparativo IRREGULAR correto de 'good'?", options: [{ label: "better than", isCorrect: true }, { label: "gooder than", isCorrect: false }, { label: "best than", isCorrect: false }] },
        { question: "4. Complete a frase: 'John is ___ (tall) than his brother.'", options: [{ label: "taller", isCorrect: true }, { label: "more tall", isCorrect: false }, { label: "tallest", isCorrect: false }] },
        { question: "5. Qual a forma comparativa correta de 'bad'?", options: [{ label: "worse than", isCorrect: true }, { label: "badder than", isCorrect: false }, { label: "worst than", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Tokyo is bigger and more expensive than Lisbon.", translation: "Tóquio é maior e mais cara do que Lisboa.", chunks: ["Tokyo", "is", "bigger", "and", "more", "expensive", "than", "Lisbon", "."] },
        { sentenceEn: "My new laptop is better than my old one.", translation: "Meu laptop novo é melhor do que o meu antigo.", chunks: ["My", "new", "laptop", "is", "better", "than", "my", "old", "one", "."] }
    ],
    stage4_dialog: [
        { npcName: "Emily", npcMessage: "Which city do you prefer, London or Paris?", options: [{ text: "I prefer London, but Paris is more beautiful than London.", isCorrect: true, feedback: "Uso correto do comparativo de adjetivo longo (more beautiful than)!" }, { text: "Paris is beautifuler than London.", isCorrect: false, feedback: "'Beautiful' é adjetivo longo, use 'more beautiful than'." }, { text: "Paris is more big than London.", isCorrect: false, feedback: "Para 'big' (curto), use 'bigger than'." }] },
        { npcName: "David", npcMessage: "Is taking the train faster than driving?", options: [{ text: "Yes, the train is much faster than the car.", isCorrect: true, feedback: "Comparativo de adjetivo curto impecável (-er than)!" }, { text: "Yes, the train is more fast than car.", isCorrect: false, feedback: "Para adjetivo curto de 1 sílaba (fast), adicione -er ➔ faster." }, { text: "Yes, train is fast than.", isCorrect: false, feedback: "Falta o sufixo -er." }] },
        { npcName: "Robert", npcMessage: "How is your new job compared to your old one?", options: [{ text: "It is much better than my previous job!", isCorrect: true, feedback: "Comparativo irregular de 'good' (better than) perfeito!" }, { text: "It is gooder than my old job.", isCorrect: false, feedback: "O comparativo de 'good' é 'better', não 'gooder'." }, { text: "It is more good.", isCorrect: false, feedback: "Use 'better'." }] }
    ],
    stage5_quiz: [
        { question: "1. Adjetivos de 1 sílaba formam o comparativo com:", options: [{ label: "Adjetivo + er + than", isCorrect: true }, { label: "More + adjetivo + than", isCorrect: false }, { label: "The + adjetivo + est", isCorrect: false }] },
        { question: "2. O comparativo do adjetivo 'easy' (terminado em -y) é:", options: [{ label: "easier than", isCorrect: true }, { label: "more easy than", isCorrect: false }, { label: "easyer than", isCorrect: false }] },
        { question: "3. 'Worse than' é o comparativo de:", options: [{ label: "Bad", isCorrect: true }, { label: "Good", isCorrect: false }, { label: "Far", isCorrect: false }] },
        { question: "4. A palavra 'than' em comparações significa:", options: [{ label: "Do que / Que", isCorrect: true }, { label: "Então / Depois", isCorrect: false }, { label: "Também", isCorrect: false }] },
        { question: "5. 'This smartphone is more modern than that one' está:", options: [{ label: "Correto", isCorrect: true }, { label: "Incorreto", isCorrect: false }, { label: "Falta o sufixo -er", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_12 = {
    id: "en_a2_mod_12",
    title: "Superlative Adjectives",
    section: 3,
    sectionTitle: "Comparisons, Preferences & Opinions",
    level: "A2",
    xpReward: 135,
    stage1_context: {
        audioGuide: "Mount Everest is the highest mountain, and Tokyo is the most populated city in the world.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprender a destacar o elemento supremo de um grupo usando adjetivos superlativos curtos (the -est) e longos (the most ...)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "The biggest / The fastest / The tallest", romaji: "/ðə ˈbɪɡɪst / ˈfæstɪst/", translation: "O maior / O mais rápido / O mais alto", timeContext: "Superlativos de adjetivos curtos." },
        { type: "vocab", kanji: "The most popular / The most expensive", romaji: "/ðə moʊst ˈpɒpjələr/", translation: "O mais popular / O mais caro", timeContext: "Superlativos de adjetivos longos." },
        { type: "grammar_pill", title: "Regra dos Superlativos Curtos (THE + adjetivo + -est)", rule: "Para adjetivos curtos (1 sílaba), coloca-se a palavra 'THE' antes e adiciona-se '-est' ao final do adjetivo.", formula: "THE + Adjetivo Curto + est", example: "Tall ➔ THE TALL-EST | High ➔ THE HIGH-EST | Fast ➔ THE FAST-EST" },
        { type: "grammar_pill", title: "Regra dos Superlativos Longos (THE MOST + adjetivo)", rule: "Para adjetivos longos (2 ou mais sílabas), coloca-se 'THE MOST' antes do adjetivo sem alterar sua terminação.", formula: "THE MOST + Adjetivo Longo", example: "Famous ➔ THE MOST famous | Popular ➔ THE MOST popular" },
        { type: "grammar_pill", title: "Superlativos Irregulares (Best, Worst, Farthest)", rule: "Os adjetivos irregulares no superlativo são: Good ➔ THE BEST | Bad ➔ THE WORST | Far ➔ THE FARTHEST / FURTHEST.", formula: "Good ➔ THE BEST | Bad ➔ THE WORST", example: "He is THE BEST player in the team. That was THE WORST day of my life." }
    ],
    stage3_practice: [
        { question: "1. Qual é o superlativo correto do adjetivo 'high'?", options: [{ label: "the highest", isCorrect: true }, { label: "the most high", isCorrect: false }, { label: "higher than", isCorrect: false }] },
        { question: "2. Qual é o superlativo correto do adjetivo 'popular'?", options: [{ label: "the most popular", isCorrect: true }, { label: "the popularest", isCorrect: false }, { label: "more popular", isCorrect: false }] },
        { question: "3. Qual é o superlativo IRREGULAR correto de 'good'?", options: [{ label: "the best", isCorrect: true }, { label: "the goodest", isCorrect: false }, { label: "the better", isCorrect: false }] },
        { question: "4. Complete: 'Russia is ___ (large) country in the world.'", options: [{ label: "the largest", isCorrect: true }, { label: "the most large", isCorrect: false }, { label: "larger than", isCorrect: false }] },
        { question: "5. Qual a forma superlativa correta de 'bad'?", options: [{ label: "the worst", isCorrect: true }, { label: "the baddest", isCorrect: false }, { label: "the worse", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Amazon is the longest river in the world.", translation: "O Amazonas é o rio mais longo do mundo.", chunks: ["Amazon", "is", "the", "longest", "river", "in", "the", "world", "."] },
        { sentenceEn: "This is the most expensive restaurant in town.", translation: "Este é o restaurante mais caro da cidade.", chunks: ["This", "is", "the", "most", "expensive", "restaurant", "in", "town", "."] }
    ],
    stage4_dialog: [
        { npcName: "Sandra", npcMessage: "What is the most beautiful place you have ever visited?", options: [{ text: "Kyoto is the most beautiful city I have ever seen.", isCorrect: true, feedback: "Superlativo de adjetivo longo impecável!" }, { text: "Kyoto is the beautifullest city.", isCorrect: false, feedback: "Para adjetivo longo use 'the most beautiful'." }, { text: "Kyoto is more beautiful city.", isCorrect: false, feedback: "'More' é comparativo, para superlativo use 'the most'." }] },
        { npcName: "Peter", npcMessage: "Who is the fastest runner in your school?", options: [{ text: "Mark is the fastest runner in our school.", isCorrect: true, feedback: "Superlativo curto (the fastest) exato!" }, { text: "Mark is most fast runner.", isCorrect: false, feedback: "Para adjetivo curto use 'the fastest'." }, { text: "Mark is faster runner.", isCorrect: false, feedback: "Falta a estrutura de superlativo." }] },
        { npcName: "Chloe", npcMessage: "How was the movie yesterday?", options: [{ text: "It was the best movie of the year!", isCorrect: true, feedback: "Uso perfeito do superlativo irregular de 'good' (the best)!" }, { text: "It was the goodest movie.", isCorrect: false, feedback: "O superlativo de 'good' é 'the best'." }, { text: "It was the better movie.", isCorrect: false, feedback: "'Better' é comparativo." }] }
    ],
    stage5_quiz: [
        { question: "1. Todos os superlativos em inglês devem obrigatoriamente ser precedidos por qual palavra?", options: [{ label: "The", isCorrect: true }, { label: "Than", isCorrect: false }, { label: "More", isCorrect: false }] },
        { question: "2. 'The worst' é o superlativo do adjetivo:", options: [{ label: "Bad", isCorrect: true }, { label: "Good", isCorrect: false }, { label: "Small", isCorrect: false }] },
        { question: "3. Como fica o superlativo de 'happy'?", options: [{ label: "the happiest", isCorrect: true }, { label: "the most happy", isCorrect: false }, { label: "the happyest", isCorrect: false }] },
        { question: "4. Qual a diferença principal entre comparativo e superlativo?", options: [{ label: "Comparativo compara 2 elementos; Superlativo destaca 1 elemento de um grupo de 3 ou mais", isCorrect: true }, { label: "Não há diferença, são sinônimos", isCorrect: false }, { label: "Superlativo só serve para coisas ruins", isCorrect: false }] },
        { question: "5. 'The most interesting book' significa:", options: [{ label: "O livro mais interessante", isCorrect: true }, { label: "Um livro mais interessante do que o outro", isCorrect: false }, { label: "O livro menos interessante", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_13 = {
    id: "en_a2_mod_13",
    title: "Expressing Opinions & Agreement",
    section: 3,
    sectionTitle: "Comparisons, Preferences & Opinions",
    level: "A2",
    xpReward: 135,
    stage1_context: {
        audioGuide: "In my opinion, public transport is great. I agree with you, but it can be crowded.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar opiniões pessoais (I think that..., In my opinion...) e demonstrar concordância ou discordância educada (I agree, I disagree, I don't think so)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "I think that... / In my opinion...", romaji: "/aɪ θɪŋk ðæt / ɪn maɪ əˈpɪnjən/", translation: "Eu acho que... / Na minha opinião...", timeContext: "Introdução de opinião." },
        { type: "vocab", kanji: "I agree / I disagree", romaji: "/aɪ əˈɡriː / ˌdɪsəˈɡriː/", translation: "Eu concordo / Eu discordo", timeContext: "Expressar concordância." },
        { type: "grammar_pill", title: "CUIDADO: NUNCA diga 'I am agree'!", rule: "O verbo 'agree' (concordar) e 'disagree' (discordar) são VERBOS NORMAIS em inglês. NUNCA coloque o verbo To Be (am/is/are) antes deles!", formula: "CORRETO: I agree / I disagree | INCORRETO: I am agree / I am disagree", example: "I agree with your idea. (NÃO 'I am agree with your idea')." },
        { type: "grammar_pill", title: "Discordância Educada em Inglês", rule: "Para discordar de forma educada e cortês, usam-se estruturas suaves como: 'I'm afraid I disagree', 'I see your point, but...', ou 'I don't think so'.", formula: "I see your point, BUT... | I don't think so", example: "I see your point, but living in a big city is very stressful." }
    ],
    stage3_practice: [
        { question: "1. Qual a forma correta de dizer 'Eu concordo com você' em inglês?", options: [{ label: "I agree with you.", isCorrect: true }, { label: "I am agree with you.", isCorrect: false }, { label: "I am agreed with you.", isCorrect: false }] },
        { question: "2. Como expressar 'Na minha opinião' em inglês?", options: [{ label: "In my opinion,", isCorrect: true }, { label: "On my opinion,", isCorrect: false }, { label: "At my opinion,", isCorrect: false }] },
        { question: "3. Qual frase é a forma correta de dizer 'Eu discordo'?", options: [{ label: "I disagree.", isCorrect: true }, { label: "I am disagree.", isCorrect: false }, { label: "I not agree.", isCorrect: false }] },
        { question: "4. Escolha a estrutura mais educada para discordar de alguém:", options: [{ label: "I see your point, but I think differently.", isCorrect: true }, { label: "You are totally wrong!", isCorrect: false }, { label: "I am disagreeing you.", isCorrect: false }] },
        { question: "5. Complete a expressão de opinião: 'I ___ that electric cars are the future.'", options: [{ label: "think", isCorrect: true }, { label: "am think", isCorrect: false }, { label: "opinion", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "In my opinion, learning English is very important.", translation: "Na minha opinião, aprender inglês é muito importante.", chunks: ["In", "my", "opinion", ",", "learning", "English", "is", "very", "important", "."] },
        { sentenceEn: "I see your point, but I disagree with you.", translation: "Eu entendo o seu ponto, mas eu discordo de você.", chunks: ["I", "see", "your", "point", ",", "but", "I", "disagree", "with", "you", "."] }
    ],
    stage4_dialog: [
        { npcName: "Laura", npcMessage: "I think working from home is much better than working in an office. What do you think?", options: [{ text: "I agree with you! It saves a lot of time.", isCorrect: true, feedback: "Concordância perfeita e natural (I agree)!" }, { text: "I am agree with you!", isCorrect: false, feedback: "Lembre-se: NUNCA diga 'I am agree'. Diga 'I agree'." }, { text: "In my opinion I am agree.", isCorrect: false, feedback: "Erro de gramática." }] },
        { npcName: "Mark", npcMessage: "Fast food is healthier than home-cooked food, don't you agree?", options: [{ text: "I'm afraid I disagree. Home-cooked food has fresh ingredients.", isCorrect: true, feedback: "Discordância educada e bem fundamentada!" }, { text: "I am disagree with you.", isCorrect: false, feedback: "Não use 'am' com 'disagree'." }, { text: "I don't think.", isCorrect: false, feedback: "Faltou o complemento 'I don't think so'." }] },
        { npcName: "Chris", npcMessage: "Electric scooters are the best way to get around the city.", options: [{ text: "I see your point, but they can be dangerous on crowded streets.", isCorrect: true, feedback: "Ótima resposta ponderada e polida!" }, { text: "I am agree 100%.", isCorrect: false, feedback: "Use 'I agree 100%'." }, { text: "No opinion.", isCorrect: false, feedback: "Resposta muito seca." }] }
    ],
    stage5_quiz: [
        { question: "1. Por que 'I am agree' está incorreto em inglês?", options: [{ label: "Porque 'agree' é um verbo principal, não um adjetivo", isCorrect: true }, { label: "Porque 'agree' exige o verbo Have", isCorrect: false }, { label: "Está correto em inglês britânico", isCorrect: false }] },
        { question: "2. 'I don't think so' traduz-se como:", options: [{ label: "Eu acho que não", isCorrect: true }, { label: "Eu não penso em nada", isCorrect: false }, { label: "Eu concordo com isso", isCorrect: false }] },
        { question: "3. Qual expressão introduz um ponto de vista pessoal?", options: [{ label: "In my opinion...", isCorrect: true }, { label: "By the way...", isCorrect: false }, { label: "As far as...", isCorrect: false }] },
        { question: "4. A expressão 'I see your point, but...' serve para:", options: [{ label: "Demonstrar empatia antes de apresentar um contra-argumento educado", isCorrect: true }, { label: "Ofender o interlocutor", isCorrect: false }, { label: "Concordar totalmente sem restrições", isCorrect: false }] },
        { question: "5. Como negar o verbo 'agree' no presente?", options: [{ label: "I don't agree / I disagree", isCorrect: true }, { label: "I am not agree", isCorrect: false }, { label: "I not agree", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_14 = {
    id: "en_a2_mod_14",
    title: "Preferences with 'Prefer' & 'Would Rather'",
    section: 3,
    sectionTitle: "Comparisons, Preferences & Opinions",
    level: "A2",
    xpReward: 140,
    stage1_context: {
        audioGuide: "I prefer coffee to tea, but today I'd rather stay home and drink hot chocolate.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar preferências gerais usando 'Prefer ... to ...' e preferências específicas do momento usando 'Would Rather + verbo base'."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Prefer ... to ...", romaji: "/prɪˈfɜːr tuː/", translation: "Preferir [algo] a [outro algo]", timeContext: "Preposição correta com 'prefer'." },
        { type: "vocab", kanji: "Would rather ('d rather)", romaji: "/wʊd ˈræðər/", translation: "Preferiria / Preferia (no momento)", timeContext: "Escolha específica imediata." },
        { type: "grammar_pill", title: "Estrutura do Verbo PREFER (Prefer ... TO ...)", rule: "Em inglês, quando comparamos duas coisas com o verbo 'prefer', usamos a preposição 'TO' e NUNCA 'than'!", formula: "Subject + prefer + [Coisa A] + TO + [Coisa B]", example: "I prefer tea TO coffee. (NÃO 'prefer tea than coffee'). She prefers walking to driving." },
        { type: "grammar_pill", title: "Estrutura de WOULD RATHER ('d rather + verbo base)", rule: "'Would rather' (ou a contração 'd rather) é seguido diretamente por um VERBO NA FORMA BASE (sem 'to'). Na comparação entre duas ações, usa-se 'THAN'.", formula: "Subject + 'd rather + Verbo BASE (+ THAN + Verbo BASE)", example: "I'd rather STAY home tonight. I'd rather drink tea THAN drink coffee." }
    ],
    stage3_practice: [
        { question: "1. Qual a preposição correta usada com o verbo 'prefer'? 'I prefer summer ___ winter.'", options: [{ label: "to", isCorrect: true }, { label: "than", isCorrect: false }, { label: "from", isCorrect: false }] },
        { question: "2. Qual a estrutura verbal correta após 'would rather'?", options: [{ label: "Verbo na forma base sem 'to' (ex: I'd rather stay)", isCorrect: true }, { label: "Verbo no infinitivo com 'to' (ex: I'd rather to stay)", isCorrect: false }, { label: "Verbo no gerúndio (ex: I'd rather staying)", isCorrect: false }] },
        { question: "3. Complete a frase: 'She prefers travelling by train ___ flying.'", options: [{ label: "to", isCorrect: true }, { label: "than", isCorrect: false }, { label: "over than", isCorrect: false }] },
        { question: "4. Qual frase usa 'would rather' de forma gramaticalmente CORRETA?", options: [{ label: "I'd rather watch a comedy than a horror movie.", isCorrect: true }, { label: "I'd rather to watch a comedy than a horror movie.", isCorrect: false }, { label: "I'd rather watching a comedy to a horror movie.", isCorrect: false }] },
        { question: "5. 'I'd rather' é a contração de:", options: [{ label: "I would rather", isCorrect: true }, { label: "I had rather", isCorrect: false }, { label: "I did rather", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I prefer tea to coffee in the morning.", translation: "Eu prefiro chá a café de manhã.", chunks: ["I", "prefer", "tea", "to", "coffee", "in", "the", "morning", "."] },
        { sentenceEn: "Tonight, I'd rather stay home than go out.", translation: "Esta noite, eu preferiria ficar em casa a sair.", chunks: ["Tonight", ",", "I'd", "rather", "stay", "home", "than", "go", "out", "."] }
    ],
    stage4_dialog: [
        { npcName: "Daniel", npcMessage: "Do you prefer tea or coffee?", options: [{ text: "I prefer coffee to tea, especially in the morning.", isCorrect: true, feedback: "Uso perfeito da preposição 'to' com prefer!" }, { text: "I prefer coffee than tea.", isCorrect: false, feedback: "Com 'prefer', use a preposição 'to', não 'than'." }, { text: "I am prefer coffee.", isCorrect: false, feedback: "Não use o verbo To Be antes de 'prefer'." }] },
        { npcName: "Sophie", npcMessage: "Would you like to go to the cinema tonight?", options: [{ text: "Actually, I'd rather stay home and rest.", isCorrect: true, feedback: "Uso impecável de 'I'd rather + verbo base (stay)'!" }, { text: "Actually, I'd rather to stay home.", isCorrect: false, feedback: "Após 'would rather', NÃO use 'to'." }, { text: "Actually, I prefer stay home.", isCorrect: false, feedback: "Faltou 'to stay' ou 'staying' com prefer." }] },
        { npcName: "Mark", npcMessage: "Would you rather travel by bus or by train?", options: [{ text: "I'd rather travel by train because it's faster.", isCorrect: true, feedback: "Excelente resposta com 'would rather'!" }, { text: "I would rather to travel by train.", isCorrect: false, feedback: "Não use 'to' depois de 'would rather'." }, { text: "I'd rather travelling.", isCorrect: false, feedback: "Use o verbo na forma base (travel)." }] }
    ],
    stage5_quiz: [
        { question: "1. Qual o erro gramatical na frase 'I prefer tea than coffee'?", options: [{ label: "A preposição correta após prefer é 'to', não 'than'", isCorrect: true }, { label: "O verbo prefer deveria estar com -ing", isCorrect: false }, { label: "Tea e coffee devem vir em maiúsculas", isCorrect: false }] },
        { question: "2. Após a estrutura 'would rather', o verbo principal deve vir:", options: [{ label: "Na forma base (bare infinitive sem 'to')", isCorrect: true }, { label: "Com o sufixo -ing", isCorrect: false }, { label: "No passado simples", isCorrect: false }] },
        { question: "3. 'I'd rather not go' significa:", options: [{ label: "Eu preferiria não ir", isCorrect: true }, { label: "Eu prefiro ir agora", isCorrect: false }, { label: "Eu não posso ir", isCorrect: false }] },
        { question: "4. Quando comparamos duas ações usando 'would rather', usamos qual conjunção entre elas?", options: [{ label: "than (ex: I'd rather read than watch TV)", isCorrect: true }, { label: "to", isCorrect: false }, { label: "from", isCorrect: false }] },
        { question: "5. 'She prefers swimming to running' usa gerúndio porque:", options: [{ label: "Após prefer, quando usamos verbos como objetos, ambos recebem -ing e são ligados por 'to'", isCorrect: true }, { label: "Está no presente contínuo", isCorrect: false }, { label: "É uma regra do passado", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_15 = {
    id: "en_a2_mod_15",
    title: "Making Choices & Justifications",
    section: 3,
    sectionTitle: "Comparisons, Preferences & Opinions",
    level: "A2",
    xpReward: 140,
    stage1_context: {
        audioGuide: "I chose to study online because it's flexible. That's why I save time every day.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Conectar frases explicando razões, escolhas e consequências usando conectores explicativos (because, so, that's why, due to)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Because / So / That's why", romaji: "/bɪˈkɒz / soʊ / ðæt s waɪ/", translation: "Porque / Portanto, Por isso / É por isso que", timeContext: "Conectores de causa e efeito." },
        { type: "vocab", kanji: "Choose to / Make a decision", romaji: "/tʃuːz tuː / meɪk ə dɪˈsɪʒn/", translation: "Escolher / Tomar uma decisão", timeContext: "Tomada de decisão." },
        { type: "grammar_pill", title: "Diferença: BECAUSE (Motivo) vs. SO (Consequência)", rule: "'BECAUSE' introduz a razão/motivo de algo. 'SO' introduz o resultado/consequência da ação.", formula: "[Resultado] + BECAUSE + [Motivo] | [Motivo] + SO + [Resultado]", example: "I stayed home BECAUSE it was raining. | It was raining, SO I stayed home." },
        { type: "grammar_pill", title: "Uso de THAT'S WHY (É por isso que)", rule: "'That's why' é usado para enfatizar a conclusão lógica resultante de uma justificativa prévia.", formula: "[Justificativa prévia]. THAT'S WHY + [Resultado]", example: "I love animals. That's why I became a veterinarian." }
    ],
    stage3_practice: [
        { question: "1. Qual conector expressa a RAZÃO/MOTIVO? 'I was late ___ there was traffic.'", options: [{ label: "because", isCorrect: true }, { label: "so", isCorrect: false }, { label: "that's why", isCorrect: false }] },
        { question: "2. Qual conector expressa a CONSEQUÊNCIA? 'It was raining, ___ we took an umbrella.'", options: [{ label: "so", isCorrect: true }, { label: "because", isCorrect: false }, { label: "due to", isCorrect: false }] },
        { question: "3. Complete: 'She studied hard for the test. ___, she got an A.'", options: [{ label: "That's why", isCorrect: true }, { label: "Because", isCorrect: false }, { label: "Due to", isCorrect: false }] },
        { question: "4. Escolha a frase com pontuação e lógica de causa/efeito CORRETA:", options: [{ label: "He was hungry, so he ate a sandwich.", isCorrect: true }, { label: "He was hungry, because he ate a sandwich.", isCorrect: false }, { label: "He ate a sandwich, so he was hungry.", isCorrect: false }] },
        { question: "5. Qual a forma no passado do verbo 'choose' (escolher)?", options: [{ label: "chose", isCorrect: true }, { label: "choosed", isCorrect: false }, { label: "chosen", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I chose this job because the salary is good.", translation: "Eu escolhi este emprego porque o salário é bom.", chunks: ["I", "chose", "this", "job", "because", "the", "salary", "is", "good", "."] },
        { sentenceEn: "She missed the train, so she arrived late.", translation: "Ela perdeu o trem, portanto ela chegou atrasada.", chunks: ["She", "missed", "the", "train", ",", "so", "she", "arrived", "late", "."] }
    ],
    stage4_dialog: [
        { npcName: "Brian", npcMessage: "Why did you choose to learn English?", options: [{ text: "I chose to learn English because I want to travel the world.", isCorrect: true, feedback: "Justificativa perfeita usando 'because'!" }, { text: "I chose learn English so I want travel.", isCorrect: false, feedback: "Para introduzir o motivo use 'because'." }, { text: "I choosing English that's why.", isCorrect: false, feedback: "Estrutura incorreta." }] },
        { npcName: "Clara", npcMessage: "Why didn't you buy that laptop?", options: [{ text: "It was very expensive, so I decided to wait for a sale.", isCorrect: true, feedback: "Uso excelente de 'so' para indicar o resultado da decisão!" }, { text: "It was expensive because I decided wait.", isCorrect: false, feedback: "O preço alto é a causa, não o resultado." }, { text: "Because expensive.", isCorrect: false, feedback: "Resposta incompleta." }] },
        { npcName: "Kevin", npcMessage: "You speak French very well!", options: [{ text: "Thank you! I lived in Paris for three years. That's why I speak fluent French.", isCorrect: true, feedback: "Uso impecável de 'That's why' para conclusão lógica!" }, { text: "Thank you! I lived Paris because why I speak.", isCorrect: false, feedback: "Estrutura confusa." }, { text: "Thank you! So I lived in Paris.", isCorrect: false, feedback: "'So' não se encaixa como causa." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Because' liga o efeito a qual elemento?", options: [{ label: "À causa/razão", isCorrect: true }, { label: "À consequência final", isCorrect: false }, { label: "A uma dúvida", isCorrect: false }] },
        { question: "2. 'So' é usado para introduzir:", options: [{ label: "O resultado ou consequência de um fato", isCorrect: true }, { label: "A causa primária de um problema", isCorrect: false }, { label: "Uma contradição", isCorrect: false }] },
        { question: "3. 'That's why' pode ser traduzido literalmente como:", options: [{ label: "É por isso que...", isCorrect: true }, { label: "Por causa de...", isCorrect: false }, { label: "Apesar de...", isCorrect: false }] },
        { question: "4. Qual o passado de 'make a decision'?", options: [{ label: "made a decision", isCorrect: true }, { label: "maked a decision", isCorrect: false }, { label: "make a decisioned", isCorrect: false }] },
        { question: "5. 'He was tired, so he went to bed early' expressa:", options: [{ label: "Um motivo seguido da sua consequência direta", isCorrect: true }, { label: "Dois eventos não relacionados", isCorrect: false }, { label: "Uma hipótese no futuro", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 4: TRAVEL, HOTELS & GETTING AROUND (MÓDULOS 16 A 20)
// ------------------------------------------

const MODULO_EN_A2_16 = {
    id: "en_a2_mod_16",
    title: "At the Airport & Security",
    section: 4,
    sectionTitle: "Travel, Hotels & Getting Around",
    level: "A2",
    xpReward: 140,
    stage1_context: {
        audioGuide: "May I see your boarding pass and passport, please? Here is my luggage.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Navegar em aeroportos internacionais, fazer check-in, passar pelo controle de segurança e imigração com confiança."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Boarding pass / Passport / Gate", romaji: "/ˈbɔːrdɪŋ pæs / ˈpæspɔːrt / ɡeɪt/", translation: "Cartão de embarque / Passaporte / Portão", timeContext: "Documentos e local do aeroporto." },
        { type: "vocab", kanji: "Luggage, Baggage / Carry-on bag", romaji: "/ˈlʌɡɪdʒ / ˈkæri ɒn bæɡ/", translation: "Bagagem / Mala de mão", timeContext: "Tipos de bagagem." },
        { type: "vocab", kanji: "Security check / Customs", romaji: "/sɪˈkjʊərəti tʃek / ˈkʌstəmz/", translation: "Inspeção de segurança / Alfândega", timeContext: "Controle aeroportuário." },
        { type: "grammar_pill", title: "Substantivo Incontável: LUGGAGE / BAGGAGE", rule: "Em inglês, 'luggage' e 'baggage' são SUBSTANTIVOS INCONTÁVEIS! Nunca adicione 's' no final (luggages é erro) nem use o artigo 'a' antes deles.", formula: "Correto: my luggage, two pieces of luggage | Incorreto: a luggage, luggages", example: "I have two PIECES OF LUGGAGE. (NÃO 'two luggages')." },
        { type: "grammar_pill", title: "Pedidos Educados com MAY / COULD", rule: "Em aeroportos e balcões de atendimento, usam-se 'May I see...?' ou 'Could you show me...?' para solicitações extremamente formais e educadas.", formula: "May I + [Verbo base]? | Could you + [Verbo base]?", example: "May I see your passport? | Could you place your bag here?" }
    ],
    stage3_practice: [
        { question: "1. Qual forma é a CORRETA para falar sobre malas em inglês?", options: [{ label: "I have three pieces of luggage.", isCorrect: true }, { label: "I have three luggages.", isCorrect: false }, { label: "I have a luggage.", isCorrect: false }] },
        { question: "2. O agente de imigração pede seu cartão de embarque dizendo:", options: [{ label: "May I see your boarding pass?", isCorrect: true }, { label: "Do you give me boarding pass?", isCorrect: false }, { label: "Pass boarding please.", isCorrect: false }] },
        { question: "3. 'Carry-on bag' refere-se a:", options: [{ label: "Mala de mão que vai na cabine do avião", isCorrect: true }, { label: "Mala grande despachada no balcão", isCorrect: false }, { label: "Carrinho de bagagem", isCorrect: false }] },
        { question: "4. Onde os passageiros aguardam o embarque no avião?", options: [{ label: "Gate (Portão de embarque)", isCorrect: true }, { label: "Customs", isCorrect: false }, { label: "Security check", isCorrect: false }] },
        { question: "5. Como se diz 'alfândega' em inglês?", options: [{ label: "Customs", isCorrect: true }, { label: "Costumes", isCorrect: false }, { label: "Customers", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "May I see your passport and boarding pass, please?", translation: "Posso ver seu passaporte e cartão de embarque, por favor?", chunks: ["May", "I", "see", "your", "passport", "and", "boarding", "pass", ",", "please", "?"] },
        { sentenceEn: "Please place your carry-on bag on the belt.", translation: "Por favor coloque sua mala de mão na esteira.", chunks: ["Please", "place", "your", "carry-on", "bag", "on", "the", "belt", "."] }
    ],
    stage4_dialog: [
        { npcName: "Agente de Check-in", npcMessage: "Good morning! May I see your passport and booking reference?", options: [{ text: "Good morning! Here is my passport and reservation code.", isCorrect: true, feedback: "Resposta impecável e educada!" }, { text: "Here is my luggages.", isCorrect: false, feedback: "'Luggage' é incontável e não responde à solicitação de passaporte." }, { text: "No, you may not.", isCorrect: false, feedback: "Resposta inadequada no check-in." }] },
        { npcName: "Agente de Segurança", npcMessage: "Do you have any liquids or laptops in your carry-on bag?", options: [{ text: "Yes, I have a laptop. I'll take it out now.", isCorrect: true, feedback: "Excelente cooperação no controle de segurança!" }, { text: "Yes, I have two luggages.", isCorrect: false, feedback: "Não use 'luggages'." }, { text: "I am flight to London.", isCorrect: false, feedback: "Fora de contexto." }] },
        { npcName: "Oficial de Imigração", npcMessage: "What is the purpose of your visit to the UK?", options: [{ text: "I am here on vacation for two weeks.", isCorrect: true, feedback: "Resposta clara para a imigração!" }, { text: "Because I have passport.", isCorrect: false, feedback: "O oficial perguntou o motivo da viagem (purpose)." }, { text: "I am at gate 5.", isCorrect: false, feedback: "Fora de contexto." }] }
    ],
    stage5_quiz: [
        { question: "1. Por que a palavra 'luggages' não existe em inglês?", options: [{ label: "Porque 'luggage' é um substantivo incontável", isCorrect: true }, { label: "Porque é um verbo", isCorrect: false }, { label: "É uma gíria antiga", isCorrect: false }] },
        { question: "2. Como pedir polidamente para ver o documento de alguém no aeroporto?", options: [{ label: "May I see your passport?", isCorrect: true }, { label: "Give me passport!", isCorrect: false }, { label: "What is passport?", isCorrect: false }] },
        { question: "3. 'Gate 14' indica:", options: [{ label: "O portão de embarque número 14", isCorrect: true }, { label: "A fila de segurança 14", isCorrect: false }, { label: "A poltrona 14 no avião", isCorrect: false }] },
        { question: "4. 'Flight delay' significa:", options: [{ label: "Atraso no voo", isCorrect: true }, { label: "Cancelamento de passagem", isCorrect: false }, { label: "Desconto no voo", isCorrect: false }] },
        { question: "5. 'Baggage claim' é a área onde você:", options: [{ label: "Recolhe suas malas despachadas após o voo", isCorrect: true }, { label: "Compra novas malas", isCorrect: false }, { label: "Faz o check-in inicial", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_17 = {
    id: "en_a2_mod_17",
    title: "Checking into a Hotel & Requests",
    section: 4,
    sectionTitle: "Travel, Hotels & Getting Around",
    level: "A2",
    xpReward: 140,
    stage1_context: {
        audioGuide: "I have a reservation under the name of Smith. Could I get extra towels, please?",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Realizar check-in em hotéis, solicitar serviços de quarto e pedir itens adicionais com estruturas polidas (Could I have..., Would it be possible to...)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Reservation / Check-in / Check-out", romaji: "/ˌrezərˈveɪʃn/", translation: "Reserva / Entrada no hotel / Saída do hotel", timeContext: "Procedimentos de hotelaria." },
        { type: "vocab", kanji: "Double room / Single room / Key card", romaji: "/ˈdʌbl ruːm / kiː kɑːrd/", translation: "Quarto duplo / Quarto de solteiro / Cartão-chave", timeContext: "Tipos de quarto e acesso." },
        { type: "vocab", kanji: "Extra towels / Room service / Amenities", romaji: "/ˈekstrə ˈtaʊəlz/", translation: "Toalhas extras / Serviço de quarto / Comodidades", timeContext: "Pedidos no hotel." },
        { type: "grammar_pill", title: "Pedidos Formais com COULD I HAVE / COULD I GET", rule: "Em hotéis e restaurantes, usam-se 'Could I have...?' ou 'Could I get...?' para pedir objetos ou alimentos educadamente.", formula: "Could I have / get + [Item], please?", example: "Could I have extra towels, please? | Could I get a wake-up call at 7 AM?" },
        { type: "grammar_pill", title: "Identificação de Reserva: UNDER THE NAME OF", rule: "Para indicar o nome na reserva do hotel, usa-se a expressão 'under the name of [Nome]' ou 'under [Nome]'.", formula: "I have a reservation under [Name]", example: "I have a reservation under the name of John Smith." }
    ],
    stage3_practice: [
        { question: "1. Como informar seu nome ao fazer check-in no hotel?", options: [{ label: "I have a reservation under the name of Smith.", isCorrect: true }, { label: "I have a reservation in the name of Smith.", isCorrect: false }, { label: "My reservation is with Smith name.", isCorrect: false }] },
        { question: "2. Como pedir toalhas adicionais educadamente na recepção?", options: [{ label: "Could I get extra towels, please?", isCorrect: true }, { label: "Give me extra towels now!", isCorrect: false }, { label: "I want extra towels quickly.", isCorrect: false }] },
        { question: "3. 'Key card' é:", options: [{ label: "O cartão magnético que abre a porta do quarto", isCorrect: true }, { label: "O cartão de crédito para pagamento", isCorrect: false }, { label: "O comprovante de reserva", isCorrect: false }] },
        { question: "4. Qual opção representa um quarto para duas pessoas?", options: [{ label: "Double room", isCorrect: true }, { label: "Single room", isCorrect: false }, { label: "Dormitory", isCorrect: false }] },
        { question: "5. 'Wake-up call' significa:", options: [{ label: "Serviço de despertador por telefone oferecido pelo hotel", isCorrect: true }, { label: "Chamada de emergência policial", isCorrect: false }, { label: "Ligação entre quartos", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I have a reservation under the name of David Miller.", translation: "Eu tenho uma reserva no nome de David Miller.", chunks: ["I", "have", "a", "reservation", "under", "the", "name", "of", "David", "Miller", "."] },
        { sentenceEn: "Could I get extra towels for room 302, please?", translation: "Eu poderia pedir toalhas extras para o quarto 302, por favor?", chunks: ["Could", "I", "get", "extra", "towels", "for", "room", "302", ",", "please", "?"] }
    ],
    stage4_dialog: [
        { npcName: "Recepcionista do Hotel", npcMessage: "Welcome to the Grand Hotel! How can I help you today?", options: [{ text: "Hello! I'd like to check in. I have a reservation under Miller.", isCorrect: true, feedback: "Check-in perfeito e polido!" }, { text: "I want key now.", isCorrect: false, feedback: "Muito rude. Apresente sua reserva de forma polida." }, { text: "I check out please.", isCorrect: false, feedback: "'Check-out' é para saída do hotel." }] },
        { npcName: "Recepcionista", npcMessage: "Here is your key card for room 405. Is there anything else I can assist you with?", options: [{ text: "Could we get a wake-up call at 6:30 AM tomorrow?", isCorrect: true, feedback: "Pedido formal com 'Could we get...' perfeitamente aplicado!" }, { text: "You call me 6:30.", isCorrect: false, feedback: "Use 'Could I get a wake-up call at 6:30?'." }, { text: "Where is my luggage's?", isCorrect: false, feedback: "'Luggage' não aceita plural com 's'." }] },
        { npcName: "Serviço de Quarto", npcMessage: "Room service, how may I help you?", options: [{ text: "Hello, could I have a bottle of mineral water sent to room 405?", isCorrect: true, feedback: "Solicitação ao serviço de quarto impecável!" }, { text: "Give me water.", isCorrect: false, feedback: "Use 'Could I have...' para ser educado." }, { text: "I am thirsty in room.", isCorrect: false, feedback: "Faça o pedido claramente." }] }
    ],
    stage5_quiz: [
        { question: "1. A expressão correta para indicar em nome de quem está a reserva é:", options: [{ label: "Under the name of...", isCorrect: true }, { label: "Below the name of...", isCorrect: false }, { label: "Inside the name of...", isCorrect: false }] },
        { question: "2. Como pedir educadamente para o hotel guardar sua mala após o check-out?", options: [{ label: "Could you store my luggage for a few hours, please?", isCorrect: true }, { label: "Keep luggages now!", isCorrect: false }, { label: "I want store baggage.", isCorrect: false }] },
        { question: "3. 'Amenities' de um hotel incluem:", options: [{ label: "Shampoo, sabonete, secador de cabelo e itens de conforto no quarto", isCorrect: true }, { label: "Erros na conta da hospedagem", isCorrect: false }, { label: "Mulstas de atraso no check-out", isCorrect: false }] },
        { question: "4. Qual a diferença entre 'single room' e 'double room'?", options: [{ label: "Single room = 1 cama/1 pessoa | Double room = para 2 pessoas", isCorrect: true }, { label: "Single room tem 2 andares", isCorrect: false }, { label: "São idênticos", isCorrect: false }] },
        { question: "5. 'Included in the price' significa:", options: [{ label: "Incluído no valor da diária", isCorrect: true }, { label: "Cobrado separadamente", isCorrect: false }, { label: "Pago em dinheiro vivo", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_18 = {
    id: "en_a2_mod_18",
    title: "Buying Tickets & Transportation",
    section: 4,
    sectionTitle: "Travel, Hotels & Getting Around",
    level: "A2",
    xpReward: 145,
    stage1_context: {
        audioGuide: "I'd like a round-trip ticket to Oxford, please. Which platform does the train leave from?",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Comprar passagens de transporte público (trem, ônibus, metrô), distinguir bilhetes só de ida e ida e volta, e consultar plataformas de embarque."
    },
    stage2_drops: [
        { type: "vocab", kanji: "One-way ticket / Round-trip ticket", romaji: "/wʌn weɪ / raʊnd trɪp/", translation: "Passagem só de ida / Passagem de ida e volta", timeContext: "Tipos de bilhete." },
        { type: "vocab", kanji: "Platform / Schedule, Timetable", romaji: "/ˈplætfɔːrm / ˈskedʒuːl/", translation: "Plataforma / Horário, Tabela de horários", timeContext: "Estação de trem/ônibus." },
        { type: "vocab", kanji: "Transfer / Change trains", romaji: "/ˈtrænsfɜːr / tʃeɪndʒ treɪnz/", translation: "Baldeação, Transbordo / Trocar de trem", timeContext: "Troca de linha de transporte." },
        { type: "grammar_pill", title: "Diferença: ONE-WAY vs. ROUND-TRIP (ou Return Ticket)", rule: "No inglês americano: 'one-way' (ida) e 'round-trip' (ida e volta). No inglês britânico: 'single ticket' (ida) e 'return ticket' (ida e volta).", formula: "US: one-way / round-trip | UK: single / return", example: "A round-trip ticket to Boston, please. | A return ticket to London, please." },
        { type: "grammar_pill", title: "Perguntas de Embarque com LEAVE FROM", rule: "Para perguntar de onde parte o transporte, usamos 'Which platform does the train leave from?' ou 'What time does the bus leave?'.", formula: "Which platform + does + [transport] + leave from?", example: "Which platform does the train to Oxford leave from?" }
    ],
    stage3_practice: [
        { question: "1. Como pedir uma passagem de ida e volta para Nova York no inglês americano?", options: [{ label: "A round-trip ticket to New York, please.", isCorrect: true }, { label: "A one-way ticket to New York, please.", isCorrect: false }, { label: "A go and back ticket to New York, please.", isCorrect: false }] },
        { question: "2. No inglês britânico, qual termo equivale a uma passagem de ida e volta?", options: [{ label: "Return ticket", isCorrect: true }, { label: "Round ticket", isCorrect: false }, { label: "Double ticket", isCorrect: false }] },
        { question: "3. Como perguntar de qual plataforma sai o trem?", options: [{ label: "Which platform does the train leave from?", isCorrect: true }, { label: "Where platform train leaves?", isCorrect: false }, { label: "Which train is platforming?", isCorrect: false }] },
        { question: "4. O que significa 'change trains'?", options: [{ label: "Fazer baldeação / Trocar de trem na estação", isCorrect: true }, { label: "Comprar um trem novo", isCorrect: false }, { label: "Mudar o horário da viagem", isCorrect: false }] },
        { question: "5. 'One-way ticket' é uma passagem de:", options: [{ label: "Somente ida", isCorrect: true }, { label: "Ida e volta", isCorrect: false }, { label: "Passe mensal ilimitado", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I'd like a round-trip ticket to Oxford, please.", translation: "Eu gostaria de uma passagem de ida e volta para Oxford, por favor.", chunks: ["I'd", "like", "a", "round-trip", "ticket", "to", "Oxford", ",", "please", "."] },
        { sentenceEn: "The train leaves from platform four in ten minutes.", translation: "O trem parte da plataforma quatro em dez minutos.", chunks: ["The", "train", "leaves", "from", "platform", "four", "in", "ten", "minutes", "."] }
    ],
    stage4_dialog: [
        { npcName: "Vendedor de Passagens", npcMessage: "Next in line, please! Where are you traveling to?", options: [{ text: "Hello! I'd like a round-trip ticket to Cambridge, please.", isCorrect: true, feedback: "Pedido de passagem impecável e polido!" }, { text: "I want ticket go and back.", isCorrect: false, feedback: "Em inglês use 'round-trip ticket' ou 'return ticket'." }, { text: "I am travel to Cambridge.", isCorrect: false, feedback: "Diga 'I'd like a ticket to...'." }] },
        { npcName: "Vendedor de Passagens", npcMessage: "That will be $35. Would you like a one-way or round-trip ticket?", options: [{ text: "A round-trip ticket, please. I am coming back tomorrow.", isCorrect: true, feedback: "Escolha clara e justificativa adequada!" }, { text: "A single round ticket.", isCorrect: false, feedback: "Não misture 'single' com 'round'." }, { text: "I want one-way back.", isCorrect: false, feedback: "Use 'round-trip' para ida e volta." }] },
        { npcName: "Passageiro na Estação", npcMessage: "Excuse me, which platform does the express train to London leave from?", options: [{ text: "It leaves from platform 3 over there.", isCorrect: true, feedback: "Informação clara de plataforma!" }, { text: "It stays on 3 train.", isCorrect: false, feedback: "A estrutura correta é 'leaves from platform 3'." }, { text: "Train is 3.", isCorrect: false, feedback: "Pouco claro." }] }
    ],
    stage5_quiz: [
        { question: "1. No inglês americano, 'passagem só de ida' é chamada de:", options: [{ label: "One-way ticket", isCorrect: true }, { label: "Single ticket", isCorrect: false }, { label: "Solo ticket", isCorrect: false }] },
        { question: "2. Qual a forma correta de perguntar a hora de partida de um ônibus?", options: [{ label: "What time does the bus leave?", isCorrect: true }, { label: "What time the bus is leave?", isCorrect: false }, { label: "When bus leaves time?", isCorrect: false }] },
        { question: "3. A palavra 'timetable' significa:", options: [{ label: "Tabela de horários de transporte público", isCorrect: true }, { label: "Relógio de mesa", isCorrect: false }, { label: "Tempo de voo", isCorrect: false }] },
        { question: "4. 'Do I need to change trains?' significa:", options: [{ label: "Eu preciso fazer baldeação / trocar de trem?", isCorrect: true }, { label: "Eu preciso pagar mais pelo trem?", isCorrect: false }, { label: "Eu preciso dirigir o trem?", isCorrect: false }] },
        { question: "5. Para dizer que o trem parte 'da plataforma 5', usa-se:", options: [{ label: "from platform 5", isCorrect: true }, { label: "in platform 5", isCorrect: false }, { label: "at platform 5", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_19 = {
    id: "en_a2_mod_19",
    title: "Giving & Asking for Detailed Directions",
    section: 4,
    sectionTitle: "Travel, Hotels & Getting Around",
    level: "A2",
    xpReward: 145,
    stage1_context: {
        audioGuide: "Go straight for two blocks, turn right at the intersection, and cross the bridge.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprofundar orientações espaciais e rotas na cidade usando conectores e instruções avançadas (intersection, traffic light, cross the bridge, turn left/right)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Intersection / Traffic light / Crosswalk", romaji: "/ˌɪntərˈsekʃn / ˈtræfɪk laɪt/", translation: "Cruzamento, Interseção / Semáforo / Faixa de pedestres", timeContext: "Pontos de referência urbanos." },
        { type: "vocab", kanji: "Cross the bridge / Walk past the bank", romaji: "/krɒs ðə brɪdʒ/", translation: "Cruzar a ponte / Passar direto pelo banco", timeContext: "Ações de deslocamento." },
        { type: "vocab", kanji: "Go straight / Turn left / Turn right", romaji: "/ɡoʊ streɪt/", translation: "Siga reto / Vire à esquerda / Vire à direita", timeContext: "Direções básicas." },
        { type: "grammar_pill", title: "Imperativo para Dar Instruções de Caminho", rule: "Para dar direções na cidade, usamos o verbo na forma imperativa (sem sujeito, direto no verbo base).", formula: "Verbo Base + [Direção / Ponto de Referência]", example: "GO straight. TURN left at the supermarket. CROSS the street." },
        { type: "grammar_pill", title: "Preposição de Passagem: PAST", rule: "Quando você deve continuar andando e passar por um prédio sem entrar nele, usa-se o verbo + 'past [lugar]'.", formula: "Walk / Go + PAST + [Ponto de referência]", example: "Walk PAST the museum and turn left. (Passe direto pelo museu e vire à esquerda)." }
    ],
    stage3_practice: [
        { question: "1. Como instruir alguém a 'seguir reto por duas quadras'?", options: [{ label: "Go straight for two blocks.", isCorrect: true }, { label: "Turn straight two blocks.", isCorrect: false }, { label: "Cross two blocks straight.", isCorrect: false }] },
        { question: "2. Como se diz 'semáforo' em inglês?", options: [{ label: "Traffic light", isCorrect: true }, { label: "Stop light sign", isCorrect: false }, { label: "Car light", isCorrect: false }] },
        { question: "3. A instrução 'Walk past the bank' significa:", options: [{ label: "Caminhe passando direto pelo banco (sem entrar nele)", isCorrect: true }, { label: "Entre no banco para pedir informações", isCorrect: false }, { label: "Pare na frente do banco", isCorrect: false }] },
        { question: "4. Como instruir a atravessar a ponte em inglês?", options: [{ label: "Cross the bridge.", isCorrect: true }, { label: "Over the bridge walk.", isCorrect: false }, { label: "Pass the bridge away.", isCorrect: false }] },
        { question: "5. 'Intersection' refere-se a:", options: [{ label: "Cruzamento de ruas", isCorrect: true }, { label: "Entrada de metrô", isCorrect: false }, { label: "Estacionamento subterrâneo", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Turn right at the intersection and walk past the bank.", translation: "Vire à direita no cruzamento e passe direto pelo banco.", chunks: ["Turn", "right", "at", "the", "intersection", "and", "walk", "past", "the", "bank", "."] },
        { sentenceEn: "Go straight for two blocks and cross the bridge.", translation: "Siga reto por duas quadras e cruze a ponte.", chunks: ["Go", "straight", "for", "two", "blocks", "and", "cross", "the", "bridge", "."] }
    ],
    stage4_dialog: [
        { npcName: "Turista Perdido", npcMessage: "Excuse me! How do I get to the Art Museum from here?", options: [{ text: "Go straight for two blocks, turn left at the traffic light, and walk past the library.", isCorrect: true, feedback: "Instruções de caminho perfeitas e detalhadas!" }, { text: "You going straight and turning lefting.", isCorrect: false, feedback: "Use os verbos no imperativo: Go straight, Turn left." }, { text: "Museum is big.", isCorrect: false, feedback: "Não respondeu como chegar lá." }] },
        { npcName: "Motorista de Táxi", npcMessage: "Where should I drop you off?", options: [{ text: "Drop me off right after we cross the bridge, please.", isCorrect: true, feedback: "Instrução de parada excelente com ponto de referência!" }, { text: "Drop me on the water.", isCorrect: false, feedback: "Instrução sem sentido." }, { text: "I go straighting.", isCorrect: false, feedback: "Uso incorreto do verbo." }] },
        { npcName: "Pedestre", npcMessage: "Is the train station near here?", options: [{ text: "Yes, it's just past the intersection on your right.", isCorrect: true, feedback: "Uso perfeito da preposição de localização 'past'!" }, { text: "Yes, it is turn lefting.", isCorrect: false, feedback: "Gramática incorreta." }, { text: "No, train station is nowhere.", isCorrect: false, feedback: "Pouco prestativo." }] }
    ],
    stage5_quiz: [
        { question: "1. Para dar direções em inglês, o modo verbal utilizado é o:", options: [{ label: "Imperativo (verbo na forma base sem sujeito)", isCorrect: true }, { label: "Passado perfeito", isCorrect: false }, { label: "Futuro contínuo", isCorrect: false }] },
        { question: "2. O que significa a palavra 'crosswalk'?", options: [{ label: "Faixa de pedestres", isCorrect: true }, { label: "Ponte de madeira", isCorrect: false }, { label: "Calçada estreita", isCorrect: false }] },
        { question: "3. Qual frase indica 'virar à esquerda no semáforo'?", options: [{ label: "Turn left at the traffic light.", isCorrect: true }, { label: "Go left in the traffic light.", isCorrect: false }, { label: "Cross left for traffic light.", isCorrect: false }] },
        { question: "4. 'On your right' significa:", options: [{ label: "À sua direita", isCorrect: true }, { label: "Na sua frente", isCorrect: false }, { label: "À sua esquerda", isCorrect: false }] },
        { question: "5. 'Two blocks away' indica uma distância de:", options: [{ label: "Duas quadras de distância", isCorrect: true }, { label: "Dois quilômetros de distância", isCorrect: false }, { label: "Dois quarteirões de fechamento", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_20 = {
    id: "en_a2_mod_20",
    title: "Travel Emergencies & Lost Items",
    section: 4,
    sectionTitle: "Travel, Hotels & Getting Around",
    level: "A2",
    xpReward: 150,
    stage1_context: {
        audioGuide: "Help! I lost my wallet and my passport. Where is the nearest police station?",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Lidar com situações de emergência em viagens, comunicar perda/roubo de objetos e solicitar assistência médica ou policial rápida."
    },
    stage2_drops: [
        { type: "vocab", kanji: "I lost my wallet / my passport", romaji: "/aɪ lɒst maɪ ˈwɒlɪt/", translation: "Eu perdi minha carteira / meu passaporte", timeContext: "Perda de pertences." },
        { type: "vocab", kanji: "Police station / Embassy / Hospital", romaji: "/pəˈliːs steɪʃn / ˈembəsi/", translation: "Delegacia de polícia / Embaixada / Hospital", timeContext: "Locais de emergência." },
        { type: "vocab", kanji: "Stolen / Robbed / Emergency", romaji: "/ˈstoʊlən / rɑːbd/", translation: "Roubado / Assaltado / Emergência", timeContext: "Ocorrência policial." },
        { type: "grammar_pill", title: "Expressões Urgentes de Socorro: HELP! / I NEED...", rule: "Em emergências, usam-se frases curtas e diretas com 'I lost...', 'My [item] was stolen', ou 'I need a doctor / the police immediately'.", formula: "I need + [Ajuda/Serviço] + immediately / right now!", example: "I need the police immediately! | My bag was stolen." },
        { type: "grammar_pill", title: "Localização de Serviços de Emergência: NEAREST", rule: "Para perguntar onde fica o hospital ou delegacia mais próximo, usamos 'Where is the NEAREST...?' (superlativo de near).", formula: "Where is the NEAREST + [police station / hospital / embassy]?", example: "Where is the nearest police station?" }
    ],
    stage3_practice: [
        { question: "1. Como perguntar onde fica a delegacia de polícia mais próxima?", options: [{ label: "Where is the nearest police station?", isCorrect: true }, { label: "Where is more near police station?", isCorrect: false }, { label: "Where the police station nearest?", isCorrect: false }] },
        { question: "2. Como comunicar que seu passaporte foi roubado?", options: [{ label: "My passport was stolen.", isCorrect: true }, { label: "My passport was losted.", isCorrect: false }, { label: "I stolen my passport.", isCorrect: false }] },
        { question: "3. 'Wallet' significa:", options: [{ label: "Carteira de documentos/dinheiro", isCorrect: true }, { label: "Mala grande", isCorrect: false }, { label: "Relógio de pulso", isCorrect: false }] },
        { question: "4. Qual local procurar se você perder todos os seus documentos no exterior?", options: [{ label: "Embassy (Embaixada do seu país)", isCorrect: true }, { label: "Supermarket", isCorrect: false }, { label: "Museum", isCorrect: false }] },
        { question: "5. Qual a forma no passado do verbo 'lose' (perder)?", options: [{ label: "lost", isCorrect: true }, { label: "losed", isCorrect: false }, { label: "loosen", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Help! I lost my wallet and my phone in the subway.", translation: "Socorro! Eu perdi minha carteira e meu telefone no metrô.", chunks: ["Help", "!", "I", "lost", "my", "wallet", "and", "my", "phone", "in", "the", "subway", "."] },
        { sentenceEn: "Where is the nearest hospital or pharmacy?", translation: "Onde fica o hospital ou farmácia mais próximo?", chunks: ["Where", "is", "the", "nearest", "hospital", "or", "pharmacy", "?"] }
    ],
    stage4_dialog: [
        { npcName: "Oficial de Polícia", npcMessage: "Calm down, sir. What happened?", options: [{ text: "Someone stole my backpack at the train station 20 minutes ago.", isCorrect: true, feedback: "Comunicação clara da ocorrência e tempo!" }, { text: "I losing my bag ago.", isCorrect: false, feedback: "Use o passado 'lost' ou 'my bag was stolen'." }, { text: "Police is near.", isCorrect: false, feedback: "Não explicou o que aconteceu." }] },
        { npcName: "Atendente da Embaixada", npcMessage: "How can we assist you today?", options: [{ text: "I lost my passport and I need an emergency travel document.", isCorrect: true, feedback: "Solicitação perfeita na embaixada!" }, { text: "I have a reservation under Smith.", isCorrect: false, feedback: "Isso é frase de hotel, não da embaixada." }, { text: "Where is gate 10?", isCorrect: false, feedback: "Frase de aeroporto." }] },
        { npcName: "Transeunte na rua", npcMessage: "You look distressed! Do you need help?", options: [{ text: "Yes, please! Where is the nearest hospital? My friend feels sick.", isCorrect: true, feedback: "Pedido de ajuda de emergência perfeito!" }, { text: "Yes, I prefer coffee to tea.", isCorrect: false, feedback: "Completamente fora de contexto de emergência." }, { text: "No, I am stolen.", isCorrect: false, feedback: "Diga 'My things were stolen'." }] }
    ],
    stage5_quiz: [
        { question: "1. O superlativo de 'near' (perto) usado para locais de emergência é:", options: [{ label: "The nearest", isCorrect: true }, { label: "The most near", isCorrect: false }, { label: "The nearer", isCorrect: false }] },
        { question: "2. Como se diz 'Eu preciso de um médico imediatamente'?", options: [{ label: "I need a doctor immediately.", isCorrect: true }, { label: "I want doctor now times.", isCorrect: false }, { label: "Doctor is needed for me.", isCorrect: false }] },
        { question: "3. 'Lost and Found' em um local público significa a seção de:", options: [{ label: "Achados e Perdidos", isCorrect: true }, { label: "Venda de ingressos", isCorrect: false }, { label: "Informações turísticas", isCorrect: false }] },
        { question: "4. Qual a diferença entre 'lost' e 'stolen'?", options: [{ label: "Lost = você perdeu acidentalmente | Stolen = alguém roubou de você", isCorrect: true }, { label: "São palavras idênticas", isCorrect: false }, { label: "Stolen significa novo", isCorrect: false }] },
        { question: "5. 'Call an ambulance!' significa:", options: [{ label: "Chame uma ambulância!", isCorrect: true }, { label: "Chame um táxi!", isCorrect: false }, { label: "Ligue para o hotel!", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 5: HEALTH, ADVICE & MODALS OF OBLIGATION (MÓDULOS 21 A 25)
// ------------------------------------------

const MODULO_EN_A2_21 = {
    id: "en_a2_mod_21",
    title: "Symptoms, Illness & At the Pharmacy",
    section: 5,
    sectionTitle: "Health, Advice & Modals of Obligation",
    level: "A2",
    xpReward: 140,
    stage1_context: {
        audioGuide: "I have a headache, a fever, and a sore throat. I need some painkillers.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Descrever sintomas de saúde, dores comuns (headache, stomachache) e comprar medicamentos em uma farmácia."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Headache / Stomachache / Toothache", romaji: "/ˈhedeɪk / ˈstʌmək-eɪk/", translation: "Dor de cabeça / Dor de estômago / Dor de dente", timeContext: "Dores de corpo com -ache." },
        { type: "vocab", kanji: "Fever / Cough / Sore throat", romaji: "/ˈfiːvər / kɒf / sɔːr θroʊt/", translation: "Febre / Tosse / Dor de garganta", timeContext: "Sintomas de gripe." },
        { type: "vocab", kanji: "Painkillers / Medicine / Pharmacy", romaji: "/ˈpeɪnkɪlərz / ˈmedsn/", translation: "Analgésicos / Remédio / Farmácia", timeContext: "Tratamento na farmácia." },
        { type: "grammar_pill", title: "Expressando Dores com HAVE A...", rule: "Em inglês, para indicar dores e sintomas de saúde, usa-se o verbo 'HAVE A + [sintoma]'. O artigo 'a' é obrigatório na maioria das dores com '-ache'!", formula: "Subject + have / has + a + [headache / fever / cough / sore throat]", example: "I HAVE A headache. She HAS A fever. He HAS A sore throat." },
        { type: "grammar_pill", title: "O Sufixo de Dor: -ACHE", rule: "O sufixo '-ache' significa dor contínua e junta-se com partes do corpo: Head + ache = headache | Back + ache = backache | Ear + ache = earache.", formula: "[Parte do corpo] + ache", example: "Headache (cabeça) | Stomachache (estômago) | Toothache (dente)" }
    ],
    stage3_practice: [
        { question: "1. Como dizer 'Eu estou com dor de cabeça' em inglês?", options: [{ label: "I have a headache.", isCorrect: true }, { label: "I am with headache.", isCorrect: false }, { label: "I have pain head.", isCorrect: false }] },
        { question: "2. Como se diz 'dor de garganta'?", options: [{ label: "Sore throat", isCorrect: true }, { label: "Throatache", isCorrect: false }, { label: "Pain throat", isCorrect: false }] },
        { question: "3. 'Painkillers' são remédios com a função de:", options: [{ label: "Aliviar dores (analgésicos)", isCorrect: true }, { label: "Provocar sono", isCorrect: false }, { label: "Desinfetar feridas", isCorrect: false }] },
        { question: "4. Complete a frase: 'She ___ a high fever and a cough.'", options: [{ label: "has", isCorrect: true }, { label: "have", isCorrect: false }, { label: "is with", isCorrect: false }] },
        { question: "5. Qual o termo em inglês britânico equivalente a 'pharmacy'?", options: [{ label: "Chemist's / Drugstore", isCorrect: true }, { label: "Grocery store", isCorrect: false }, { label: "Hospital", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I have a terrible headache and a fever.", translation: "Eu estou com uma dor de cabeça terrível e febre.", chunks: ["I", "have", "a", "terrible", "headache", "and", "a", "fever", "."] },
        { sentenceEn: "Do you have any painkillers for a sore throat?", translation: "Você tem algum analgésico para dor de garganta?", chunks: ["Do", "you", "have", "any", "painkillers", "for", "a", "sore", "throat", "?"] }
    ],
    stage4_dialog: [
        { npcName: "Farmacêutico", npcMessage: "Hello! How can I help you today?", options: [{ text: "Hello, I have a sore throat and a cough. What do you recommend?", isCorrect: true, feedback: "Descrição de sintomas perfeita!" }, { text: "I am with fever and head pain.", isCorrect: false, feedback: "Em inglês use 'I have a fever and a headache'." }, { text: "Give me pills.", isCorrect: false, feedback: "Pouco educado." }] },
        { npcName: "Farmacêutico", npcMessage: "You can take these painkillers twice a day after meals. Are you allergic to any medicine?", options: [{ text: "No, I am not allergic to anything. Thank you!", isCorrect: true, feedback: "Resposta clara ao farmacêutico!" }, { text: "Yes, I have a headache.", isCorrect: false, feedback: "Ele perguntou sobre alergias (allergic)." }, { text: "No, I am take twice.", isCorrect: false, feedback: "Gramática incorreta." }] },
        { npcName: "Colega de Trabalho", npcMessage: "You don't look very well. What's the matter?", options: [{ text: "I have a terrible stomachache and I feel dizzy.", isCorrect: true, feedback: "Descrição exata de indisposição de saúde!" }, { text: "I am with pain in stomach.", isCorrect: false, feedback: "Diga 'I have a stomachache'." }, { text: "I am sick of stomach.", isCorrect: false, feedback: "Use 'I have a stomachache'." }] }
    ],
    stage5_quiz: [
        { question: "1. A junção de 'tooth' + 'ache' forma a palavra:", options: [{ label: "Toothache (dor de dente)", isCorrect: true }, { label: "Toothey", isCorrect: false }, { label: "Pain tooth", isCorrect: false }] },
        { question: "2. Como se diz 'febre' em inglês?", options: [{ label: "Fever", isCorrect: true }, { label: "Fiber", isCorrect: false }, { label: "Fire", isCorrect: false }] },
        { question: "3. 'Cough' significa:", options: [{ label: "Tosse", isCorrect: true }, { label: "Espirro", isCorrect: false }, { label: "Gripe", isCorrect: false }] },
        { question: "4. Ao pedir remédios na farmácia, usa-se a estrutura:", options: [{ label: "Do you have anything for + [sintoma]?", isCorrect: true }, { label: "Give me anything of...", isCorrect: false }, { label: "What is remedy of...", isCorrect: false }] },
        { question: "5. 'Dizzy' refere-se à sensação de:", options: [{ label: "Tontura / Zonzo", isCorrect: true }, { label: "Fome extrema", isCorrect: false }, { label: "Calafrio", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_22 = {
    id: "en_a2_mod_22",
    title: "Obligation & Necessity (Have to / Don't have to)",
    section: 5,
    sectionTitle: "Health, Advice & Modals of Obligation",
    level: "A2",
    xpReward: 140,
    stage1_context: {
        audioGuide: "I have to study for the test tomorrow, but I don't have to go to work on weekends.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar obrigações externas e deveres (Have to / Has to) e ausência de obrigação ou necessidade (Don't have to / Doesn't have to)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Have to / Has to", romaji: "/hæv tuː / hæz tuː/", translation: "Ter que / Tem que (Obrigação)", timeContext: "Obrigação diária." },
        { type: "vocab", kanji: "Don't have to / Doesn't have to", romaji: "/doʊnt hæv tuː/", translation: "Não precisar / Não ter que (Sem obrigação)", timeContext: "Ausência de necessidade." },
        { type: "grammar_pill", title: "Estrutura de HAVE TO (Obrigação Externa)", rule: "Usamos 'have to' (para I, You, We, They) e 'has to' (para He, She, It) seguidos de verbo base para indicar coisas obrigatórias ou necessárias.", formula: "Subject + have to / has to + Verbo Base", example: "I HAVE TO wear a uniform. She HAS TO take her medicine." },
        { type: "grammar_pill", title: "CUIDADO: DON'T HAVE TO = Ausência de Obrigação (Opção)", rule: "'Don't have to' NÃO significa proibição! Significa que você NÃO É OBRIGADO a fazer algo, mas PODE fazer se quiser.", formula: "Subject + don't/doesn't have to + Verbo Base", example: "Tomorrow is Sunday, so I DON'T HAVE TO wake up early. (Posso acordar tarde se quiser)." }
    ],
    stage3_practice: [
        { question: "1. Qual a forma correta para 'She ___ (have to) work on Saturdays'?", options: [{ label: "has to", isCorrect: true }, { label: "haves to", isCorrect: false }, { label: "have to", isCorrect: false }] },
        { question: "2. O que significa 'You don't have to pay'?", options: [{ label: "Você não precisa pagar (é grátis, mas sem proibição)", isCorrect: true }, { label: "É proibido pagar", isCorrect: false }, { label: "Você deve pagar agora", isCorrect: false }] },
        { question: "3. Complete a frase: 'We ___ wear a helmet when riding a motorbike.'", options: [{ label: "have to", isCorrect: true }, { label: "don't have to", isCorrect: false }, { label: "has to", isCorrect: false }] },
        { question: "4. Qual a negativa de 'have to' para a 3ª pessoa (He/She)?", options: [{ label: "doesn't have to", isCorrect: true }, { label: "don't have to", isCorrect: false }, { label: "doesn't has to", isCorrect: false }] },
        { question: "5. Escolha a frase com a concordância CORRETA:", options: [{ label: "He doesn't have to wear a suit.", isCorrect: true }, { label: "He don't have to wear a suit.", isCorrect: false }, { label: "He doesn't has to wear a suit.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I have to study for my final English exam.", translation: "Eu tenho que estudar para o meu exame final de inglês.", chunks: ["I", "have", "to", "study", "for", "my", "final", "English", "exam", "."] },
        { sentenceEn: "She doesn't have to work on Sundays.", translation: "Ela não precisa trabalhar aos domingos.", chunks: ["She", "doesn't", "have", "to", "work", "on", "Sundays", "."] }
    ],
    stage4_dialog: [
        { npcName: "Gerente", npcMessage: "Do we have to wear formal clothes at the conference?", options: [{ text: "Yes, everyone has to wear a suit or formal dress.", isCorrect: true, feedback: "Obrigação com 'has to' para 'everyone' impecável!" }, { text: "Yes, everyone have to wear.", isCorrect: false, feedback: "'Everyone' exige a 3ª pessoa singular ➔ 'has to'." }, { text: "No, we don't have to no.", isCorrect: false, feedback: "Dupla negativa incorreta." }] },
        { npcName: "Amigo", npcMessage: "Do you want to wake up early tomorrow?", options: [{ text: "No, tomorrow is my day off, so I don't have to get up early!", isCorrect: true, feedback: "Excelente uso de 'don't have to' indicando ausência de obrigação!" }, { text: "No, I am not have to.", isCorrect: false, feedback: "Use 'don't have to'." }, { text: "No, I doesn't have to.", isCorrect: false, feedback: "Para 'I', use 'don't have to'." }] },
        { npcName: "Médico", npcMessage: "You must follow the treatment plan.", options: [{ text: "I understand. I have to take the medicine every eight hours.", isCorrect: true, feedback: "Uso correto de 'have to' para prescrição médica!" }, { text: "I has to take.", isCorrect: false, feedback: "Para 'I', o correto é 'have to'." }, { text: "I don't have take.", isCorrect: false, feedback: "Falta o 'to'." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Have to' é usado principalmente para expressar:", options: [{ label: "Obrigações e necessidades externas", isCorrect: true }, { label: "Habilidades do passado", isCorrect: false }, { label: "Convites sociais", isCorrect: false }] },
        { question: "2. Após 'doesn't have to', o verbo vem na forma:", options: [{ label: "Base (infinitivo sem 'to')", isCorrect: true }, { label: "Com o sufixo -es", isCorrect: false }, { label: "No passado com -ed", isCorrect: false }] },
        { question: "3. 'You don't have to cook' significa:", options: [{ label: "Você não precisa cozinhar (se não quiser)", isCorrect: true }, { label: "Você é proibido de cozinhar", isCorrect: false }, { label: "Você odeia cozinhar", isCorrect: false }] },
        { question: "4. Qual a 3ª pessoa de 'have to'?", options: [{ label: "Has to", isCorrect: true }, { label: "Haves to", isCorrect: false }, { label: "Had to", isCorrect: false }] },
        { question: "5. 'He has to get a visa before traveling' expressa:", options: [{ label: "Uma exigência/necessidade legal para viajar", isCorrect: true }, { label: "Uma preferência de lazer", isCorrect: false }, { label: "Um conselho amigável", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_23 = {
    id: "en_a2_mod_23",
    title: "Prohibitions & Rules (Must not / Can't)",
    section: 5,
    sectionTitle: "Health, Advice & Modals of Obligation",
    level: "A2",
    xpReward: 145,
    stage1_context: {
        audioGuide: "You must not smoke here. You can't park your car in front of the gate.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar proibições estritas, regras formais e leis usando 'Must not (Mustn't)' e 'Can't'."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Must not (Mustn't) / Can't", romaji: "/mʌst nɒt / kænt/", translation: "Não pode, É proibido / Não pode", timeContext: "Expressar proibição." },
        { type: "vocab", kanji: "Forbidden / Not allowed / Against the law", romaji: "/fərˈbɪdn / əˈlaʊd/", translation: "Proibido / Não permitido / Contra a lei", timeContext: "Expressões de regras." },
        { type: "grammar_pill", title: "DIFERENÇA CRÍTICA: Mustn't (Proibição) vs. Don't have to (Opcional)", rule: "MUSTN'T significa que algo é ESTRITAMENTE PROIBIDO! Don't have to significa que é OPCIONAL (não é necessário).", formula: "MUSTN'T = Proibido | DON'T HAVE TO = Não necessário / Opcional", example: "You MUSTN'T smoke here. (É proibido fumar!). You DON'T HAVE TO wear a tie. (Pode usar gravata se quiser)." },
        { type: "grammar_pill", title: "Uso de CAN'T para Proibição Informal", rule: "Na linguagem cotidiana, 'Can't' é muito usado para indicar que algo não é permitido pelas regras do local.", formula: "Subject + CAN'T + Verbo Base", example: "You CAN'T park here. (Você não pode estacionar aqui)." }
    ],
    stage3_practice: [
        { question: "1. Qual verbo expressa PROIBIÇÃO ABSOLUTA (é proibido por lei/regra)?", options: [{ label: "Must not (Mustn't)", isCorrect: true }, { label: "Don't have to", isCorrect: false }, { label: "Should not", isCorrect: false }] },
        { question: "2. Em um hospital, a placa diz: 'You ___ use your mobile phone.'", options: [{ label: "mustn't", isCorrect: true }, { label: "don't have to", isCorrect: false }, { label: "should to", isCorrect: false }] },
        { question: "3. O que significa 'You mustn't feed the animals' num zoológico?", options: [{ label: "É estritamente proibido alimentar os animais", isCorrect: true }, { label: "Não é necessário alimentar os animais", isCorrect: false }, { label: "Você pode alimentar os animais se quiser", isCorrect: false }] },
        { question: "4. Complete com a opção de proibição cotidiana: 'You ___ park in front of the garage.'", options: [{ label: "can't", isCorrect: true }, { label: "don't have to", isCorrect: false }, { label: "doesn't have to", isCorrect: false }] },
        { question: "5. Qual frase indica que algo NÃO É PERMITIDO?", options: [{ label: "You aren't allowed to enter without a pass.", isCorrect: true }, { label: "You don't have to enter with a pass.", isCorrect: false }, { label: "You can enter with no pass.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "You must not smoke inside the building.", translation: "Você não deve/não pode fumar dentro do prédio.", chunks: ["You", "must", "not", "smoke", "inside", "the", "building", "."] },
        { sentenceEn: "You can't take photos during the museum tour.", translation: "Você não pode tirar fotos durante o tour pelo museu.", chunks: ["You", "can't", "take", "photos", "during", "the", "museum", "tour", "."] }
    ],
    stage4_dialog: [
        { npcName: "Guarda do Museu", npcMessage: "Excuse me, sir! Flash photography is not allowed here.", options: [{ text: "Oh, I'm sorry! I didn't know I couldn't take flash photos.", isCorrect: true, feedback: "Desculpas educadas e compreensão da regra!" }, { text: "I don't have to take photos.", isCorrect: false, feedback: "'Don't have to' indica opção, não proibição." }, { text: "I must to take photos.", isCorrect: false, feedback: "'Must' não aceita 'to'." }] },
        { npcName: "Passageiro", npcMessage: "Can I unbuckle my seatbelt now?", options: [{ text: "No, the plane is landing. You mustn't unbuckle it yet!", isCorrect: true, feedback: "Uso correto de 'mustn't' para norma de segurança estrita!" }, { text: "No, you don't have to unbuckle.", isCorrect: false, feedback: "Use 'mustn't' para proibição de segurança." }, { text: "No, you can unbuckle.", isCorrect: false, feedback: "Contradição." }] },
        { npcName: "Agente de Trânsito", npcMessage: "You can't park your vehicle on the sidewalk.", options: [{ text: "I apologize. I'll move my car right away.", isCorrect: true, feedback: "Reconhecimento correto da proibição!" }, { text: "I don't have to move.", isCorrect: false, feedback: "Você deve mover o carro para cumprir a lei." }, { text: "I mustn't park nowhere.", isCorrect: false, feedback: "Dupla negativa incorreta." }] }
    ],
    stage5_quiz: [
        { question: "1. A diferença fundamental entre 'mustn't' e 'don't have to' é:", options: [{ label: "Mustn't = Proibido | Don't have to = Opcional/Não necessário", isCorrect: true }, { label: "São exatamente o mesmo conceito", isCorrect: false }, { label: "Mustn't é usado no passado", isCorrect: false }] },
        { question: "2. 'Not allowed' traduz-se como:", options: [{ label: "Não permitido", isCorrect: true }, { label: "Não recomendado", isCorrect: false }, { label: "Não aceito", isCorrect: false }] },
        { question: "3. Após o modal 'must not', o verbo principal fica na forma:", options: [{ label: "Base sem 'to' (ex: must not enter)", isCorrect: true }, { label: "Infinitivo com 'to' (ex: must not to enter)", isCorrect: false }, { label: "Gerúndio (ex: must not entering)", isCorrect: false }] },
        { question: "4. 'It is against the law' significa:", options: [{ label: "É contra a lei / É ilegal", isCorrect: true }, { label: "É uma boa ideia", isCorrect: false }, { label: "É permitido sob condições", isCorrect: false }] },
        { question: "5. 'You can't touch the exhibits' expressa:", options: [{ label: "Proibição de tocar nas peças em exposição", isCorrect: true }, { label: "Ausência de capacidade física", isCorrect: false }, { label: "Um convite para tocar", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_24 = {
    id: "en_a2_mod_24",
    title: "Giving Advice with 'Should'",
    section: 5,
    sectionTitle: "Health, Advice & Modals of Obligation",
    level: "A2",
    xpReward: 145,
    stage1_context: {
        audioGuide: "You look tired. You should rest and you shouldn't drink cold water.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Dar conselhos, recomendações e sugestões leves a amigos ou colegas usando o verbo modal 'Should / Shouldn't'."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Should / Shouldn't", romaji: "/ʃʊd / ˈʃʊdnt/", translation: "Deveria / Não deveria", timeContext: "Conselhos e recomendações." },
        { type: "vocab", kanji: "Give advice / Take a break", romaji: "/ɡɪv ədˈvaɪs / teɪk ə breɪk/", translation: "Dar conselho / Fazer uma pausa", timeContext: "Ações de suporte." },
        { type: "grammar_pill", title: "Uso do Modal SHOULD (Conselho / Recomendação)", rule: "Usamos 'SHOULD' (deveria) e 'SHOULDN'T' (não deveria) para expressar nossa opinião sobre o que é uma boa ou má ideia para alguém fazer.", formula: "Subject + SHOULD / SHOULDN'T + Verbo Base", example: "You SHOULD see a doctor. You SHOULDN'T work so hard." },
        { type: "grammar_pill", title: "Regra Modal: Sem 'TO' e Sem '-S' na 3ª Pessoa", rule: "Como todos os modais, 'Should' é idêntico para todos os sujeitos (I, You, He, She, We, They) e NUNCA usa 'to' antes do verbo seguinte!", formula: "CORRETO: He should rest | INCORRETO: He shoulds rest / He should to rest", example: "She SHOULD rest. (NÃO 'she shoulds to rest')." }
    ],
    stage3_practice: [
        { question: "1. Qual frase expressa um conselho amigável CORRETO com 'should'?", options: [{ label: "You should drink more water.", isCorrect: true }, { label: "You should to drink more water.", isCorrect: false }, { label: "You shoulds drink more water.", isCorrect: false }] },
        { question: "2. Como aconselhar alguém a 'não comer tanta comida industrializada'?", options: [{ label: "You shouldn't eat so much junk food.", isCorrect: true }, { label: "You don't should eat junk food.", isCorrect: false }, { label: "You shouldn't to eat junk food.", isCorrect: false }] },
        { question: "3. O modal 'should' indica:", options: [{ label: "Um conselho ou sugestão (o que é bom fazer)", isCorrect: true }, { label: "Uma obrigação por lei estrita", isCorrect: false }, { label: "Uma proibição severa", isCorrect: false }] },
        { question: "4. Complete com a forma gramatical correta: 'He has a fever. He ___ see a doctor.'", options: [{ label: "should", isCorrect: true }, { label: "shoulds", isCorrect: false }, { label: "should to", isCorrect: false }] },
        { question: "5. Como pedir um conselho em inglês?", options: [{ label: "What should I do?", isCorrect: true }, { label: "What do I should?", isCorrect: false }, { label: "How I should do?", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "You look exhausted. You should take a break.", translation: "Você parece exausto. Você deveria fazer uma pausa.", chunks: ["You", "look", "exhausted", ".", "You", "should", "take", "a", "break", "."] },
        { sentenceEn: "He has a sore throat, so he shouldn't drink cold water.", translation: "Ele está com dor de garganta, portanto ele não deveria beber água gelada.", chunks: ["He", "has", "a", "sore", "throat", ",", "so", "he", "shouldn't", "drink", "cold", "water", "."] }
    ],
    stage4_dialog: [
        { npcName: "Amanda", npcMessage: "I have a terrible toothache. What should I do?", options: [{ text: "You should make an appointment with a dentist right away.", isCorrect: true, feedback: "Conselho excelente e polido com 'should'!" }, { text: "You should to go to dentist.", isCorrect: false, feedback: "NÃO use 'to' imediatamente após 'should'." }, { text: "You shoulds eat candy.", isCorrect: false, feedback: "Não adicione 's' em 'should'." }] },
        { npcName: "Lucas", npcMessage: "I'm always tired in the morning.", options: [{ text: "You shouldn't stay up late watching TV.", isCorrect: true, feedback: "Conselho negativo perfeito com 'shouldn't'!" }, { text: "You don't should sleep.", isCorrect: false, feedback: "Use 'shouldn't'." }, { text: "You should sleeping.", isCorrect: false, feedback: "Use a forma base do verbo (sleep)." }] },
        { npcName: "Chloe", npcMessage: "I'm going to travel to London next week. Any advice?", options: [{ text: "You should pack an umbrella because it rains often.", isCorrect: true, feedback: "Ótima recomendação com 'should'!" }, { text: "You should to pack umbrella.", isCorrect: false, feedback: "Sem 'to' após 'should'." }, { text: "You shouldn't travel.", isCorrect: false, feedback: "Pouco prestativo." }] }
    ],
    stage5_quiz: [
        { question: "1. O modal 'should' é flexionado para 'he/she'?", options: [{ label: "Não, 'should' permanece inalterado para todas as pessoas", isCorrect: true }, { label: "Sim, muda para 'shoulds'", isCorrect: false }, { label: "Muda para 'shoulded' no passado", isCorrect: false }] },
        { question: "2. Como fica a forma negativa contraída de 'should not'?", options: [{ label: "shouldn't", isCorrect: true }, { label: "don't should", isCorrect: false }, { label: "shoudnot", isCorrect: false }] },
        { question: "3. 'You should visit the Louvre in Paris' expressa:", options: [{ label: "Uma sugestão/recomendação turística", isCorrect: true }, { label: "Uma obrigação sob pena de multa", isCorrect: false }, { label: "Uma proibição", isCorrect: false }] },
        { question: "4. A pergunta de conselho 'What should I wear?' significa:", options: [{ label: "O que eu deveria vestir?", isCorrect: true }, { label: "Onde eu devo comprar roupas?", isCorrect: false }, { label: "Como vestir essa roupa?", isCorrect: false }] },
        { question: "5. 'Take a break' significa:", options: [{ label: "Fazer uma pausa / Descansar um pouco", isCorrect: true }, { label: "Quebrar algo", isCorrect: false }, { label: "Perder a paciência", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_25 = {
    id: "en_a2_mod_25",
    title: "Expressing Reasons & Explanations",
    section: 5,
    sectionTitle: "Health, Advice & Modals of Obligation",
    level: "A2",
    xpReward: 150,
    stage1_context: {
        audioGuide: "The match was canceled because of heavy rain. Since you are sick, you must rest.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar motivos e justificativas avançadas usando 'Because of', 'Due to' e 'Since' em frases formais e informais."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Because of / Due to", romaji: "/bɪˈkɒz əv / djuː tuː/", translation: "Por causa de / Devido a", timeContext: "Causa seguida de substantivo." },
        { type: "vocab", kanji: "Since / As", romaji: "/sɪns / æz/", translation: "Já que / Como (introduzindo causa)", timeContext: "Causa no início da frase." },
        { type: "grammar_pill", title: "Diferença: BECAUSE vs. BECAUSE OF / DUE TO", rule: "'BECAUSE' é seguido de uma oração completa (com sujeito + verbo). 'BECAUSE OF' e 'DUE TO' são seguidos por um SUBSTANTIVO ou grupo nominal!", formula: "Because + [Sujeito + Verbo] | Because of / Due to + [Substantivo]", example: "We stayed inside BECAUSE IT WAS RAINING. | We stayed inside BECAUSE OF THE RAIN." },
        { type: "grammar_pill", title: "Uso de SINCE como 'Já que'", rule: "Além de indicar tempo ('desde'), 'SINCE' também é usado como conjunção de causa no início de frases, significando 'Já que' ou 'Visto que'.", formula: "SINCE + [Razão/Causa], + [Resultado]", example: "SINCE you are tired, you should go to sleep early." }
    ],
    stage3_practice: [
        { question: "1. Complete com a opção correta: 'The flight was delayed ___ the bad weather.'", options: [{ label: "because of", isCorrect: true }, { label: "because", isCorrect: false }, { label: "since that", isCorrect: false }] },
        { question: "2. Complete com a opção correta: 'The flight was delayed ___ it was snowing hard.'", options: [{ label: "because", isCorrect: true }, { label: "because of", isCorrect: false }, { label: "due to", isCorrect: false }] },
        { question: "3. 'Since you are already here, let's start the meeting' - a palavra SINCE significa:", options: [{ label: "Já que / Visto que", isCorrect: true }, { label: "Desde o ano passado", isCorrect: false }, { label: "Apesar de", isCorrect: false }] },
        { question: "4. Qual conector é sinônimo formal de 'because of'?", options: [{ label: "Due to", isCorrect: true }, { label: "So that", isCorrect: false }, { label: "Although", isCorrect: false }] },
        { question: "5. Escolha a frase gramaticalmente CORRETA:", options: [{ label: "I missed the bus due to heavy traffic.", isCorrect: true }, { label: "I missed the bus due to it was traffic.", isCorrect: false }, { label: "I missed the bus because of it was traffic.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "The event was canceled because of the storm.", translation: "O evento foi cancelado por causa da tempestade.", chunks: ["The", "event", "was", "canceled", "because", "of", "the", "storm", "."] },
        { sentenceEn: "Since you are tired, you should stay home and rest.", translation: "Já que você está cansado, você deveria ficar em casa e descansar.", chunks: ["Since", "you", "are", "tired", ",", "you", "should", "stay", "home", "and", "rest", "."] }
    ],
    stage4_dialog: [
        { npcName: "Diretor", npcMessage: "Why was the outdoor concert canceled yesterday?", options: [{ text: "It was canceled due to heavy rain and strong winds.", isCorrect: true, feedback: "Uso impecável de 'due to' seguido de substantivos!" }, { text: "It was canceled because of it rained.", isCorrect: false, feedback: "Após 'because of', use um substantivo (because of the rain)." }, { text: "It was canceled since rain.", isCorrect: false, feedback: "'Since' exige oração completa (since it rained)." }] },
        { npcName: "Helen", npcMessage: "Since we have extra time, why don't we get some coffee?", options: [{ text: "That's a great idea! Since you're buying, I'll get a cappuccino!", isCorrect: true, feedback: "Uso perfeito de 'since' como 'já que'!" }, { text: "That's great because of coffee.", isCorrect: false, feedback: "Estrutura confusa." }, { text: "I agree due to coffee.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Arthur", npcMessage: "Why were you late for the presentation?", options: [{ text: "I was late because of a car accident on the highway.", isCorrect: true, feedback: "Excelente justificativa com 'because of' + substantivo!" }, { text: "I was late because of there was an accident.", isCorrect: false, feedback: "Se houver sujeito e verbo ('there was'), use 'because' sem 'of'." }, { text: "Due to I arrived late.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Because of' deve ser seguido diretamente por:", options: [{ label: "Um substantivo ou grupo nominal (sem oração completa)", isCorrect: true }, { label: "Uma oração completa com Sujeito e Verbo", isCorrect: false }, { label: "Um verbo no infinitivo com 'to'", isCorrect: false }] },
        { question: "2. 'Due to' é um conector formal equivalente a:", options: [{ label: "Because of (por causa de / devido a)", isCorrect: true }, { label: "In order to (para que)", isCorrect: false }, { label: "However (no entanto)", isCorrect: false }] },
        { question: "3. Em 'Since you know the way, you should drive', 'Since' significa:", options: [{ label: "Já que / Visto que", isCorrect: true }, { label: "Desde", isCorrect: false }, { label: "Até que", isCorrect: false }] },
        { question: "4. Qual a opção correta: 'He couldn't sleep ___ the noise'?", options: [{ label: "because of", isCorrect: true }, { label: "because", isCorrect: false }, { label: "since that", isCorrect: false }] },
        { question: "5. Qual a opção correta: 'He couldn't sleep ___ it was noisy'?", options: [{ label: "because", isCorrect: true }, { label: "because of", isCorrect: false }, { label: "due to", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 6: FUTURE PLANS, SOCIAL INVITATIONS & FINAL CHALLENGE (MÓDULOS 26 A 30)
// ------------------------------------------

const MODULO_EN_A2_26 = {
    id: "en_a2_mod_26",
    title: "Future Intentions with 'Be Going To'",
    section: 6,
    sectionTitle: "Future Plans, Social Invitations & Final Challenge",
    level: "A2",
    xpReward: 145,
    stage1_context: {
        audioGuide: "I am going to travel to Europe next month. She is going to start a new job.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar planos futuros planejados, intenções e previsões com evidências presentes usando a estrutura 'Be going to'."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Am / Is / Are going to", romaji: "/ɡoʊɪŋ tuː/", translation: "Vou / Vai / Vamos (Futuro planejado)", timeContext: "Planos futuros intencionais." },
        { type: "vocab", kanji: "Next week / Next month / Next year", romaji: "/nekst wiːk/", translation: "Próxima semana / Próximo mês / Próximo ano", timeContext: "Marcadores de tempo futuro." },
        { type: "grammar_pill", title: "Estrutura do Futuro com BE GOING TO", rule: "Usamos o verbo To Be (am/is/are) + GOING TO + verbo base para falar sobre planos ou intenções que já foram decididos antes do momento da fala.", formula: "Subject + am/is/are + GOING TO + Verbo Base", example: "I AM GOING TO VISIT my doctor. She IS GOING TO BUY a car." },
        { type: "grammar_pill", title: "Forma Negativa e Interrogativa com BE GOING TO", rule: "Na negativa, adiciona-se 'not' após o verbo To Be (am not, isn't, aren't). Na pergunta, inverte-se o verbo To Be com o sujeito.", formula: "Negativa: Subject + isn't/aren't + going to + V | Pergunta: Is/Are + Subject + going to + V?", example: "They AREN'T GOING TO TRAVEL. | ARE YOU GOING TO STUDY tonight?" }
    ],
    stage3_practice: [
        { question: "1. Qual a forma gramatical correta para: 'She ___ (buy) a new house next year'?", options: [{ label: "is going to buy", isCorrect: true }, { label: "is going buying", isCorrect: false }, { label: "are going to buy", isCorrect: false }] },
        { question: "2. Como formular a pergunta correta no futuro: '___ you going to attend the seminar?'", options: [{ label: "Are", isCorrect: true }, { label: "Do", isCorrect: false }, { label: "Will be", isCorrect: false }] },
        { question: "3. Complete a frase negativa: 'We ___ (not / travel) this summer.'", options: [{ label: "aren't going to travel", isCorrect: true }, { label: "don't going to travel", isCorrect: false }, { label: "not are going to travel", isCorrect: false }] },
        { question: "4. A estrutura 'Be going to' é usada principalmente para:", options: [{ label: "Planos previamente decididos e intenções futuras", isCorrect: true }, { label: "Ações concluídas no passado", isCorrect: false }, { label: "Hábitos do passado que não ocorrem mais", isCorrect: false }] },
        { question: "5. Escolha a frase com a concordância CORRETA no futuro:", options: [{ label: "I am going to take a vacation in July.", isCorrect: true }, { label: "I is going to take a vacation in July.", isCorrect: false }, { label: "I going to take a vacation in July.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I am going to travel to Japan next year.", translation: "Eu vou viajar para o Japão no ano que vem.", chunks: ["I", "am", "going", "to", "travel", "to", "Japan", "next", "year", "."] },
        { sentenceEn: "What are you going to do this weekend?", translation: "O que você vai fazer neste fim de semana?", chunks: ["What", "are", "you", "going", "to", "do", "this", "weekend", "?"] }
    ],
    stage4_dialog: [
        { npcName: "Laura", npcMessage: "What are your plans for the summer holiday?", options: [{ text: "I am going to visit my relatives in Canada.", isCorrect: true, feedback: "Excelente uso de 'am going to visit' para planos futuros!" }, { text: "I am go to visit Canada.", isCorrect: false, feedback: "Falta o '-ing' em 'going'." }, { text: "I visited Canada last summer.", isCorrect: false, feedback: "A pergunta foi sobre o futuro." }] },
        { npcName: "David", npcMessage: "Is Alex going to join us for dinner tonight?", options: [{ text: "No, he isn't going to come. He has to work late.", isCorrect: true, feedback: "Negativa de plano futuro perfeita!" }, { text: "No, he don't going to come.", isCorrect: false, feedback: "Para 'he', use 'isn't going to'." }, { text: "No, he hasn't going to come.", isCorrect: false, feedback: "Use o verbo To Be (isn't)." }] },
        { npcName: "Rachel", npcMessage: "Look at those dark clouds in the sky!", options: [{ text: "Yes! It is going to rain very soon.", isCorrect: true, feedback: "Previsão com evidência presente usando 'is going to rain'!" }, { text: "Yes! It rain tomorrow.", isCorrect: false, feedback: "Faltou a estrutura de futuro." }, { text: "Yes! It was raining.", isCorrect: false, feedback: "Tempo passado." }] }
    ],
    stage5_quiz: [
        { question: "1. A estrutura de 'Be going to' exige qual verbo auxiliar flexionado?", options: [{ label: "Verbo To Be (am / is / are)", isCorrect: true }, { label: "Verbo Do / Does", isCorrect: false }, { label: "Verbo Have / Has", isCorrect: false }] },
        { question: "2. Qual a diferença entre 'I am going to travel' e 'I went to travel'?", options: [{ label: "Am going to = futuro planejado | Went = passado simples", isCorrect: true }, { label: "São idênticos", isCorrect: false }, { label: "Went é o futuro informal", isCorrect: false }] },
        { question: "3. 'Look at that car! It is going to crash!' é um exemplo de:", options: [{ label: "Previsão baseada em evidência visual presente", isCorrect: true }, { label: "Promessa solene", isCorrect: false }, { label: "Lembrança do passado", isCorrect: false }] },
        { question: "4. Como pergunto 'O que ela vai estudar?'", options: [{ label: "What is she going to study?", isCorrect: true }, { label: "What she is going to study?", isCorrect: false }, { label: "What does she going to study?", isCorrect: false }] },
        { question: "5. 'Next month' traduz-se como:", options: [{ label: "Mês que vem / Próximo mês", isCorrect: true }, { label: "Mês passado", isCorrect: false }, { label: "Este mês", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_27 = {
    id: "en_a2_mod_27",
    title: "Making & Responding to Invitations",
    section: 6,
    sectionTitle: "Future Plans, Social Invitations & Final Challenge",
    level: "A2",
    xpReward: 145,
    stage1_context: {
        audioGuide: "Would you like to come to my birthday party on Saturday? I'd love to! Thank you!",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Fazer convites sociais polidos (Would you like to...?, Do you want to...?) e aceitar entusiasticamente (I'd love to!, That sounds great!)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Would you like to...? / Do you want to...?", romaji: "/wʊd juː laɪk tuː/", translation: "Você gostaria de...? / Você quer...?", timeContext: "Fazer convite social." },
        { type: "vocab", kanji: "I'd love to! / That sounds great!", romaji: "/aɪd lʌv tuː / ðæt saʊndz ɡreɪt/", translation: "Eu adoraria! / Parece ótimo!", timeContext: "Aceitar convites com entusiasmo." },
        { type: "grammar_pill", title: "Fazer Convites com WOULD YOU LIKE TO", rule: "A forma mais elegante e educada de convidar alguém para um evento é usar 'Would you like to + [verbo base]?'.", formula: "Would you like to + Verbo Base + complemento?", example: "WOULD YOU LIKE TO HAVE lunch with me? | WOULD YOU LIKE TO GO to the cinema?" },
        { type: "grammar_pill", title: "Aceitar Convites com I'D LOVE TO", rule: "A resposta afirmativa mais comum e cortês é 'I'd love to!' (contração de 'I would love to'). O 'to' no final é mantido!", formula: "I'd love to! (+ Thank you for asking)", example: "Would you like to join us? ➔ I'D LOVE TO! Thanks!" }
    ],
    stage3_practice: [
        { question: "1. Como fazer um convite formal para jantar em inglês?", options: [{ label: "Would you like to have dinner with us tonight?", isCorrect: true }, { label: "Do you like to having dinner tonight?", isCorrect: false }, { label: "Would you to have dinner tonight?", isCorrect: false }] },
        { question: "2. Como aceitar entusiasticamente um convite de festa?", options: [{ label: "I'd love to! That sounds awesome!", isCorrect: true }, { label: "I am love to.", isCorrect: false }, { label: "I would to love.", isCorrect: false }] },
        { question: "3. 'I'd love to' é a contração de:", options: [{ label: "I would love to", isCorrect: true }, { label: "I had love to", isCorrect: false }, { label: "I do love to", isCorrect: false }] },
        { question: "4. Complete a frase de convite: '___ you like to go to the concert with me?'", options: [{ label: "Would", isCorrect: true }, { label: "Will", isCorrect: false }, { label: "Are", isCorrect: false }] },
        { question: "5. 'That sounds great!' é uma expressão usada para:", options: [{ label: "Aceitar uma sugestão ou convite com empolgação", isCorrect: true }, { label: "Recusar um convite", isCorrect: false }, { label: "Dizer que o som está muito alto", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Would you like to come to my party on Saturday?", translation: "Você gostaria de vir à minha festa no sábado?", chunks: ["Would", "you", "like", "to", "come", "to", "my", "party", "on", "Saturday", "?"] },
        { sentenceEn: "I'd love to join you for lunch today!", translation: "Eu adoraria me juntar a você para o almoço hoje!", chunks: ["I'd", "love", "to", "join", "you", "for", "lunch", "today", "!"] }
    ],
    stage4_dialog: [
        { npcName: "Jessica", npcMessage: "Hey! We are going to the beach on Sunday. Would you like to come with us?", options: [{ text: "I'd love to! That sounds fantastic!", isCorrect: true, feedback: "Aceitação de convite calorosa e educada!" }, { text: "I would like going.", isCorrect: false, feedback: "Use 'I'd love to'." }, { text: "No, I am enjoy.", isCorrect: false, feedback: "Resposta sem sentido." }] },
        { npcName: "Mark", npcMessage: "Would you like to grab a coffee after work?", options: [{ text: "Sure, that sounds great! What time?", isCorrect: true, feedback: "Resposta natural e receptiva!" }, { text: "I'd like to coffee.", isCorrect: false, feedback: "Falta o verbo de ação (grab/have/drink)." }, { text: "Yes, I would like to coffee.", isCorrect: false, feedback: "Faltou o verbo." }] },
        { npcName: "Claire", npcMessage: "Do you want to watch the football match at my house tonight?", options: [{ text: "I'd love to! Should I bring some snacks?", isCorrect: true, feedback: "Aceitação acompanhada de oferta gentil!" }, { text: "I am loving to.", isCorrect: false, feedback: "Diga 'I'd love to'." }, { text: "Yes, I want to watching.", isCorrect: false, feedback: "Após 'want to', use a forma base 'watch'." }] }
    ],
    stage5_quiz: [
        { question: "1. O verbo que segue 'Would you like to' deve estar no:", options: [{ label: "Infinitivo / Forma base sem -ing", isCorrect: true }, { label: "Gerúndio (-ing)", isCorrect: false }, { label: "Past Simple", isCorrect: false }] },
        { question: "2. 'That sounds great' significa:", options: [{ label: "Isso parece / soa ótimo!", isCorrect: true }, { label: "O som do instrumento está ótimo", isCorrect: false }, { label: "Fale mais alto por favor", isCorrect: false }] },
        { question: "3. Para aceitar um convite de maneira bem polida em inglês, a frase mais comum é:", options: [{ label: "I'd love to!", isCorrect: true }, { label: "I must do it!", isCorrect: false }, { label: "I am going to accept!", isCorrect: false }] },
        { question: "4. Qual a preposição usada para convidar alguém para um almoço/jantar? 'join us ___ lunch'", options: [{ label: "for", isCorrect: true }, { label: "to", isCorrect: false }, { label: "at", isCorrect: false }] },
        { question: "5. 'Would you like to join us?' traduz-se como:", options: [{ label: "Você gostaria de se juntar a nós?", isCorrect: true }, { label: "Você gosta do nosso grupo?", isCorrect: false }, { label: "Você vai se juntar a nós ontem?", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_28 = {
    id: "en_a2_mod_28",
    title: "Polite Refusals & Excuses",
    section: 6,
    sectionTitle: "Future Plans, Social Invitations & Final Challenge",
    level: "A2",
    xpReward: 145,
    stage1_context: {
        audioGuide: "I'm afraid I can't. I have to work late tonight. Maybe next time!",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Recusar convites de forma cortês e elegante (I'm afraid I can't..., I'd love to, but...) oferecendo justificativas gentis."
    },
    stage2_drops: [
        { type: "vocab", kanji: "I'm afraid I can't / I'd love to, but...", romaji: "/aɪm əˈfreɪd aɪ kænt/", translation: "Receio que não posso / Adoraria, mas...", timeContext: "Recusa educada." },
        { type: "vocab", kanji: "Maybe next time / Another time", romaji: "/ˈmeɪbi nekst taɪm/", translation: "Talvez da próxima vez / Em outro momento", timeContext: "Deixar porta aberta para o futuro." },
        { type: "grammar_pill", title: "A Fórmula da Recusa Educada em Inglês", rule: "Em inglês, NUNCA responda apenas 'No' a um convite social! A estrutura educada de recusa exige 3 passos: 1. Agradecer/Expressar lamento ('I'm afraid I can't' ou 'I'd love to, but') + 2. Dar uma justificativa gentil ('I have to study') + 3. Manter o laço social ('Maybe next time!').", formula: "[Agradecer/Lamentar] + [Justificativa] + [Maybe next time!]", example: "I'd love to, BUT I have to work late. Maybe next time!" },
        { type: "grammar_pill", title: "Uso de 'I'M AFRAID...'", rule: "No inglês social, 'I'm afraid...' não significa ter medo de algo. Significa 'Infelizmente / Receio que...', usado para suavizar notícias ou recusas.", formula: "I'm afraid + [notícia negativa / recusa]", example: "I'm afraid I can't come to your party on Saturday." }
    ],
    stage3_practice: [
        { question: "1. Como recusar um convite de maneira extremamente educada?", options: [{ label: "I'm afraid I can't. I have other plans.", isCorrect: true }, { label: "No, I don't want to go.", isCorrect: false }, { label: "I am not coming bye.", isCorrect: false }] },
        { question: "2. O que significa a expressão 'I'm afraid...' no início de uma recusa?", options: [{ label: "Infelizmente / Receio que...", isCorrect: true }, { label: "Estou com muito medo de...", isCorrect: false }, { label: "Eu tenho certeza que...", isCorrect: false }] },
        { question: "3. Como encerrar uma recusa gentil mantendo a amizade?", options: [{ label: "Maybe next time!", isCorrect: true }, { label: "Never invite me again!", isCorrect: false }, { label: "I hate parties.", isCorrect: false }] },
        { question: "4. Complete a frase de recusa: 'I'd love to, ___ I have to study for an exam.'", options: [{ label: "but", isCorrect: true }, { label: "so", isCorrect: false }, { label: "because of", isCorrect: false }] },
        { question: "5. Responder apenas 'No' a um convite em inglês é considerado:", options: [{ label: "Muito rude e mal-educado", isCorrect: true }, { label: "Perfeitamente normal", isCorrect: false }, { label: "Extremamente elegante", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I'm afraid I can't come to dinner tonight.", translation: "Receio que não posso vir jantar hoje à noite.", chunks: ["I'm", "afraid", "I", "can't", "come", "to", "dinner", "tonight", "."] },
        { sentenceEn: "I'd love to, but I have another commitment.", translation: "Eu adoraria, mas tenho outro compromisso.", chunks: ["I'd", "love", "to", ",", "but", "I", "have", "another", "commitment", "."] }
    ],
    stage4_dialog: [
        { npcName: "Oliver", npcMessage: "Would you like to go to the cinema with us this evening?", options: [{ text: "I'd love to, but I have to finish a report for work. Maybe next time!", isCorrect: true, feedback: "Recusa educada perfeita com justificativa e cortesia!" }, { text: "No, I don't like movies.", isCorrect: false, feedback: "Resposta muito seca. Use a fórmula de recusa educada." }, { text: "I am afraid no.", isCorrect: false, feedback: "Diga 'I'm afraid I can't'." }] },
        { npcName: "Emma", npcMessage: "Are you free to come to my birthday dinner on Friday?", options: [{ text: "I'm afraid I can't. I'm traveling on Friday morning. Have a great party!", isCorrect: true, feedback: "Recusa cortês e votos de boa festa!" }, { text: "I can't. Bye.", isCorrect: false, feedback: "Pouco educado." }, { text: "I would love but no.", isCorrect: false, feedback: "Gramática incorreta." }] },
        { npcName: "Lucas", npcMessage: "Do you want to play tennis this weekend?", options: [{ text: "I'd love to, but I hurt my ankle. Rain check for next week?", isCorrect: true, feedback: "Excelente justificativa e proposta de remarcação!" }, { text: "No, tennis is boring.", isCorrect: false, feedback: "Muito rude." }, { text: "I am afraid that no tennis.", isCorrect: false, feedback: "Construção incorreta." }] }
    ],
    stage5_quiz: [
        { question: "1. A estrutura de recusa educada exige quais 3 elementos?", options: [{ label: "Expressão de lamento + Justificativa gentil + Proposta/Voto positivo", isCorrect: true }, { label: "Apenas a palavra 'No'", isCorrect: false }, { label: "Uma mentira longa e um pedido de desculpas em dinheiro", isCorrect: false }] },
        { question: "2. 'Take a rain check' significa:", options: [{ label: "Deixar para remarcar o convite em outra ocasião", isCorrect: true }, { label: "Checar se vai chover", isCorrect: false }, { label: "Pagar a conta da chuva", isCorrect: false }] },
        { question: "3. 'I have a prior commitment' significa:", options: [{ label: "Eu tenho um compromisso prévio / anterior", isCorrect: true }, { label: "Eu não gosto de compromissos", isCorrect: false }, { label: "Eu cheguei atrasado", isCorrect: false }] },
        { question: "4. Qual a melhor resposta para recusar um café por estar sem tempo?", options: [{ label: "I'd love to, but I'm in a rush today. Maybe next week!", isCorrect: true }, { label: "No coffee for me.", isCorrect: false }, { label: "I am not drinking.", isCorrect: false }] },
        { question: "5. 'I'm afraid I have plans' traduz-se como:", options: [{ label: "Receio / Infelizmente já tenho planos", isCorrect: true }, { label: "Tenho medo dos meus planos", isCorrect: false }, { label: "Não planejo nada com medo", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_29 = {
    id: "en_a2_mod_29",
    title: "Giving & Receiving Gifts (Presentations & Favors)",
    section: 6,
    sectionTitle: "Future Plans, Social Invitations & Final Challenge",
    level: "A2",
    xpReward: 150,
    stage1_context: {
        audioGuide: "This is for you! Happy Birthday! Oh, thank you so much! You shouldn't have!",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Entregar presentes, fazer gentilezas, agradecer presentes recebidos e responder a demonstrações de carinho com frases naturais de cortesia."
    },
    stage2_drops: [
        { type: "vocab", kanji: "This is for you! / Happy Birthday!", romaji: "/ðɪs ɪz fɔːr juː/", translation: "Isto é para você! / Feliz Aniversário!", timeContext: "Entregar um presente." },
        { type: "vocab", kanji: "You shouldn't have! / Thank you so much!", romaji: "/juː ˈʃʊdnt hæv/", translation: "Não precisava! (Expressão de carinho) / Muito obrigado!", timeContext: "Agradecer presente." },
        { type: "grammar_pill", title: "Expressão Cultural de Cortesia: YOU SHOULDN'T HAVE!", rule: "Ao receber um presente especial em inglês, é muito comum dizer 'You shouldn't have!' (literalmente: você não precisava ter tido esse trabalho/gasto!). É um elogio de extrema gratidão.", formula: "Oh, thank you! YOU SHOULDN'T HAVE!", example: "A gift for me? Oh, you shouldn't have! Thank you so much!" },
        { type: "grammar_pill", title: "Respostas a Agradecimentos de Presente", rule: "Em resposta ao agradecimento de um presente, usam-se expressões calorosas como 'You're very welcome!', 'I'm glad you like it!' (Fico feliz que tenha gostado!).", formula: "I'm glad you like it! | My pleasure!", example: "Thank you for the gift! ➔ I'm so glad you like it!" }
    ],
    stage3_practice: [
        { question: "1. O que significa a expressão 'You shouldn't have!' ao receber um presente?", options: [{ label: "Uma expressão carinhosa que significa 'Não precisava ter se incomodado/gasto!'", isCorrect: true }, { label: "Uma bronca dizendo que a pessoa cometeu um erro", isCorrect: false }, { label: "Uma reclamação sobre o presente", isCorrect: false }] },
        { question: "2. Como entregar um presente a um amigo em inglês?", options: [{ label: "Here is a little something for you!", isCorrect: true }, { label: "Take this box now.", isCorrect: false }, { label: "You must buy this.", isCorrect: false }] },
        { question: "3. Como responder quando a pessoa abre o presente e agradece?", options: [{ label: "I'm so glad you like it!", isCorrect: true }, { label: "You shouldn't have!", isCorrect: false }, { label: "It was very expensive.", isCorrect: false }] },
        { question: "4. 'Happy Anniversary!' é usado para celebrar:", options: [{ label: "Aniversário de casamento ou evento histórico", isCorrect: true }, { label: "Aniversário natalício de nascimento", isCorrect: false }, { label: "Ano Novo", isCorrect: false }] },
        { question: "5. Para parabenizar alguém pelo nascimento de um filho ou promoção, usa-se:", options: [{ label: "Congratulations!", isCorrect: true }, { label: "Happy Birthday!", isCorrect: false }, { label: "You shouldn't have!", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Here is a little present for your birthday!", translation: "Aqui está um presentinho para o seu aniversário!", chunks: ["Here", "is", "a", "little", "present", "for", "your", "birthday", "!"] },
        { sentenceEn: "Thank you so much! You really shouldn't have!", translation: "Muito obrigado! Você realmente não precisava!", chunks: ["Thank", "you", "so", "much", "!", "You", "really", "shouldn't", "have", "!"] }
    ],
    stage4_dialog: [
        { npcName: "Paul", npcMessage: "Happy Birthday, Sarah! This is for you.", options: [{ text: "Oh, thank you so much! You shouldn't have!", isCorrect: true, feedback: "Reação cultural perfeita e cheia de gratidão!" }, { text: "Oh, you shouldn't to give.", isCorrect: false, feedback: "A expressão exata é 'You shouldn't have!'." }, { text: "Why did you give me?", isCorrect: false, feedback: "Pouco educado." }] },
        { npcName: "Sarah", npcMessage: "I opened the box! The sweater is beautiful! Thank you!", options: [{ text: "I'm so glad you like it! It matches your eyes.", isCorrect: true, feedback: "Resposta afetuosa e gentil!" }, { text: "You shouldn't have!", isCorrect: false, feedback: "Quem deu o presente foi você, a outra pessoa que usaria essa frase." }, { text: "It was cheap.", isCorrect: false, feedback: "Desnecessário." }] },
        { npcName: "Michael", npcMessage: "Congratulations on your job promotion!", options: [{ text: "Thank you so much! I'm really excited about it.", isCorrect: true, feedback: "Resposta excelente aos parabéns!" }, { text: "Happy Birthday to you!", isCorrect: false, feedback: "Ele parabenizou pela promoção, não pelo aniversário." }, { text: "You're welcome.", isCorrect: false, feedback: "Agradeça primeiro." }] }
    ],
    stage5_quiz: [
        { question: "1. 'A little something for you' significa:", options: [{ label: "Uma lembrancinha / Um presentinho para você", isCorrect: true }, { label: "Algo muito grande", isCorrect: false }, { label: "Uma dívida antiga", isCorrect: false }] },
        { question: "2. Qual a diferença entre 'Happy Birthday' e 'Congratulations'?", options: [{ label: "Happy Birthday = Aniversário de nascimento | Congratulations = Conquistas/vitórias", isCorrect: true }, { label: "São idênticos", isCorrect: false }, { label: "Congratulations é usado apenas em casamentos", isCorrect: false }] },
        { question: "3. Ao receber um elogio ou presente, a expressão 'You're too kind!' significa:", options: [{ label: "Você é gentil demais!", isCorrect: true }, { label: "Você é muito chato!", isCorrect: false }, { label: "Você precisa parar", isCorrect: false }] },
        { question: "4. 'I hope you like it!' traduz-se como:", options: [{ label: "Espero que você goste!", isCorrect: true }, { label: "Eu gostei muito!", isCorrect: false }, { label: "Você não vai gostar", isCorrect: false }] },
        { question: "5. 'My pleasure!' é uma resposta polida para:", options: [{ label: "Agradecimentos (significa 'O prazer foi meu!')", isCorrect: true }, { label: "Fazer um pedido", isCorrect: false }, { label: "Pedir desculpas", isCorrect: false }] }
    ]
};

const MODULO_EN_A2_30 = {
    id: "en_a2_mod_30",
    title: "A2 Final Challenge: Complete Travel & Social Simulation",
    section: 6,
    sectionTitle: "Future Plans, Social Invitations & Final Challenge",
    level: "A2",
    xpReward: 150,
    stage1_context: {
        audioGuide: "Welcome to the A2 Proficiency Challenge! Validate your English level across all 30 modules.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Avaliação integrativa geral do Nível A2 contendo 30 questões de alta fidelidade abrangendo gramática, vocabulário, situações reais de viagem e interações sociais."
    },
    stage2_drops: [
        { type: "grammar_pill", title: "Resumo Gramatical do Nível A2", rule: "O Nível A2 consolida o Present Simple vs Continuous, Past Simple (regulares -ed e irregulares), Past Continuous, Comparativos e Superlativos, Modais de Obrigação (Have to, Mustn't, Should) e Expressões de Futuro (Be going to).", formula: "A2 Master Grammar Matrix", example: "I went, she was sleeping, it's better than, you should rest, I'm going to travel." }
    ],
    stage3_practice: [
        { question: "1. [Present Simple] She ___ (brush) her teeth every morning.", options: [{ label: "brushes", isCorrect: true }, { label: "brush", isCorrect: false }, { label: "brushing", isCorrect: false }] },
        { question: "2. [Adverbs of Frequency] Mark is ___ late for work.", options: [{ label: "hardly ever", isCorrect: true }, { label: "ever hardly", isCorrect: false }, { label: "hardly never", isCorrect: false }] },
        { question: "3. [Free Time] I enjoy ___ books on rainy days.", options: [{ label: "reading", isCorrect: true }, { label: "to read", isCorrect: false }, { label: "read", isCorrect: false }] },
        { question: "4. [Jobs] She works ___ Google ___ the marketing department.", options: [{ label: "for / in", isCorrect: true }, { label: "in / for", isCorrect: false }, { label: "at / to", isCorrect: false }] },
        { question: "5. [Question Tags] You live in London, ___?", options: [{ label: "don't you?", isCorrect: true }, { label: "aren't you?", isCorrect: false }, { label: "doesn't you?", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I am going to travel to London next month.", translation: "Eu vou viajar para Londres no mês que vem.", chunks: ["I", "am", "going", "to", "travel", "to", "London", "next", "month", "."] }
    ],
    stage4_dialog: [
        { npcName: "Avaliador A2", npcMessage: "Congratulations on reaching the final A2 evaluation! Are you ready?", options: [{ text: "Yes, I am ready to complete the 30-question exam!", isCorrect: true, feedback: "Pronto para o simulado!" }, { text: "No, I am not go.", isCorrect: false, feedback: "Vamos lá!" }, { text: "I was ready yesterday.", isCorrect: false, feedback: "Vamos começar!" }] }
    ],
    stage5_quiz: [
        { question: "1. Complete com o verbo correto: 'She ___ (wake up) at 6 AM every day.'", options: [{ label: "wakes up", isCorrect: true }, { label: "wake up", isCorrect: false }, { label: "waking up", isCorrect: false }], correctIndex: 0 },
        { question: "2. Qual a expressão correta de frequência? 'I go to the gym ___ a week.'", options: [{ label: "twice", isCorrect: true }, { label: "two times of", isCorrect: false }, { label: "double", isCorrect: false }], correctIndex: 0 },
        { question: "3. 'I enjoy ___ movies.' Qual a forma verbal correta?", options: [{ label: "watching", isCorrect: true }, { label: "to watch", isCorrect: false }, { label: "watch", isCorrect: false }], correctIndex: 0 },
        { question: "4. Como perguntar o trabalho de alguém? 'What do you ___ at work?'", options: [{ label: "do", isCorrect: true }, { label: "make", isCorrect: false }, { label: "work", isCorrect: false }], correctIndex: 0 },
        { question: "5. Complete a Question Tag: 'She likes coffee, ___?'", options: [{ label: "doesn't she?", isCorrect: true }, { label: "don't she?", isCorrect: false }, { label: "isn't she?", isCorrect: false }], correctIndex: 0 },
        { question: "6. Qual a forma passada de 'worked'?", options: [{ label: "worked (regulado por -ed)", isCorrect: true }, { label: "worken", isCorrect: false }, { label: "wrought", isCorrect: false }], correctIndex: 0 },
        { question: "7. Qual o passado do verbo irregular 'go'?", options: [{ label: "went", isCorrect: true }, { label: "goed", isCorrect: false }, { label: "gone", isCorrect: false }], correctIndex: 0 },
        { question: "8. Qual a pergunta negativa correta no passado?", options: [{ label: "Didn't you see him?", isCorrect: true }, { label: "Didn't you saw him?", isCorrect: false }, { label: "Don't you saw him?", isCorrect: false }], correctIndex: 0 },
        { question: "9. 'We visited Paris two years ___.'", options: [{ label: "ago", isCorrect: true }, { label: "since", isCorrect: false }, { label: "for", isCorrect: false }], correctIndex: 0 },
        { question: "10. 'I ___ (sleep) when the phone rang.'", options: [{ label: "was sleeping", isCorrect: true }, { label: "were sleeping", isCorrect: false }, { label: "slept", isCorrect: false }], correctIndex: 0 },
        { question: "11. 'New York is ___ (big) than Boston.'", options: [{ label: "bigger", isCorrect: true }, { label: "more big", isCorrect: false }, { label: "biger", isCorrect: false }], correctIndex: 0 },
        { question: "12. 'Tokyo is ___ (expensive) city in the world.'", options: [{ label: "the most expensive", isCorrect: true }, { label: "the expensivest", isCorrect: false }, { label: "more expensive", isCorrect: false }], correctIndex: 0 },
        { question: "13. Como se diz 'Eu concordo' em inglês de forma correta?", options: [{ label: "I agree", isCorrect: true }, { label: "I am agree", isCorrect: false }, { label: "I am agreed", isCorrect: false }], correctIndex: 0 },
        { question: "14. 'I prefer tea ___ coffee.'", options: [{ label: "to", isCorrect: true }, { label: "than", isCorrect: false }, { label: "from", isCorrect: false }], correctIndex: 0 },
        { question: "15. 'He was hungry, ___ he ate a pizza.'", options: [{ label: "so", isCorrect: true }, { label: "because", isCorrect: false }, { label: "because of", isCorrect: false }], correctIndex: 0 },
        { question: "16. Como se chama mala de mão no aeroporto?", options: [{ label: "Carry-on bag", isCorrect: true }, { label: "Luggage box", isCorrect: false }, { label: "Hold bag", isCorrect: false }], correctIndex: 0 },
        { question: "17. Como pedir toalhas no hotel? 'Could I ___ extra towels?'", options: [{ label: "get", isCorrect: true }, { label: "getting", isCorrect: false }, { label: "got", isCorrect: false }], correctIndex: 0 },
        { question: "18. 'Passagem de ida e volta' no inglês americano é:", options: [{ label: "Round-trip ticket", isCorrect: true }, { label: "Return ticket", isCorrect: false }, { label: "Two-way pass", isCorrect: false }], correctIndex: 0 },
        { question: "19. 'Walk ___ the bank and turn right.'", options: [{ label: "past", isCorrect: true }, { label: "passed", isCorrect: false }, { label: "pass away", isCorrect: false }], correctIndex: 0 },
        { question: "20. 'I lost my wallet' usa o passado de qual verbo?", options: [{ label: "Lose", isCorrect: true }, { label: "Loose", isCorrect: false }, { label: "Lost", isCorrect: false }], correctIndex: 0 },
        { question: "21. 'I have a sore throat' refere-se a dor em qual parte?", options: [{ label: "Garganta", isCorrect: true }, { label: "Cabeça", isCorrect: false }, { label: "Estômago", isCorrect: false }], correctIndex: 0 },
        { question: "22. 'She ___ to study for the test.' (Obrigação)", options: [{ label: "has", isCorrect: true }, { label: "have", isCorrect: false }, { label: "is", isCorrect: false }], correctIndex: 0 },
        { question: "23. 'You ___ smoke here. It is forbidden.'", options: [{ label: "mustn't", isCorrect: true }, { label: "don't have to", isCorrect: false }, { label: "should to", isCorrect: false }], correctIndex: 0 },
        { question: "24. 'You look tired. You ___ rest.' (Conselho)", options: [{ label: "should", isCorrect: true }, { label: "shoulds", isCorrect: false }, { label: "should to", isCorrect: false }], correctIndex: 0 },
        { question: "25. 'The match was canceled ___ the storm.'", options: [{ label: "because of", isCorrect: true }, { label: "because", isCorrect: false }, { label: "since that", isCorrect: false }], correctIndex: 0 },
        { question: "26. 'I ___ (travel) to Japan next month.' (Futuro planejado)", options: [{ label: "am going to travel", isCorrect: true }, { label: "am going travel", isCorrect: false }, { label: "going to travel", isCorrect: false }], correctIndex: 0 },
        { question: "27. Como fazer um convite social elegante?", options: [{ label: "Would you like to come?", isCorrect: true }, { label: "Do you like to coming?", isCorrect: false }, { label: "Would you coming?", isCorrect: false }], correctIndex: 0 },
        { question: "28. 'I'm afraid I can't' é usado para:", options: [{ label: "Recusar um convite educadamente", isCorrect: true }, { label: "Dizer que está assustado com algo", isCorrect: false }, { label: "Fazer uma ameaça", isCorrect: false }], correctIndex: 0 },
        { question: "29. Ao receber um presente especial, 'You shouldn't have!' significa:", options: [{ label: "Não precisava ter se incomodado! (Carinho)", isCorrect: true }, { label: "Você errou o presente", isCorrect: false }, { label: "Eu odeio este presente", isCorrect: false }], correctIndex: 0 },
        { question: "30. Parabéns! Ao completar este simulado você atinge o nível:", options: [{ label: "A2 Elementary Complete", isCorrect: true }, { label: "A1 Beginner", isCorrect: false }, { label: "C2 Master", isCorrect: false }], correctIndex: 0 }
    ]
};

// ==========================================
// EXPORTAÇÃO DA ESTRUTURA DOS 30 MÓDULOS A2
// ==========================================

const CURSO_ENGLISH_A2_DADOS = [
    MODULO_EN_A2_01,
    MODULO_EN_A2_02,
    MODULO_EN_A2_03,
    MODULO_EN_A2_04,
    MODULO_EN_A2_05,
    MODULO_EN_A2_06,
    MODULO_EN_A2_07,
    MODULO_EN_A2_08,
    MODULO_EN_A2_09,
    MODULO_EN_A2_10,
    MODULO_EN_A2_11,
    MODULO_EN_A2_12,
    MODULO_EN_A2_13,
    MODULO_EN_A2_14,
    MODULO_EN_A2_15,
    MODULO_EN_A2_16,
    MODULO_EN_A2_17,
    MODULO_EN_A2_18,
    MODULO_EN_A2_19,
    MODULO_EN_A2_20,
    MODULO_EN_A2_21,
    MODULO_EN_A2_22,
    MODULO_EN_A2_23,
    MODULO_EN_A2_24,
    MODULO_EN_A2_25,
    MODULO_EN_A2_26,
    MODULO_EN_A2_27,
    MODULO_EN_A2_28,
    MODULO_EN_A2_29,
    MODULO_EN_A2_30
];

if (typeof window !== 'undefined') {
    window.CURSO_ENGLISH_A2_DADOS = CURSO_ENGLISH_A2_DADOS;
}
