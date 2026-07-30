// ==========================================
// BANCO DE DADOS DO CURSO DE INGLÊS - NÍVEL A1 (ENGLISH BEGINNER)
// 30 MÓDULOS COMPLETOS DIVIDIDOS EM 6 SEÇÕES PEDAGÓGICAS
// ==========================================

// ------------------------------------------
// SEÇÃO 1: FIRST STEPS & INTRODUCTIONS (MÓDULOS 1 A 5)
// ------------------------------------------

const MODULO_EN_A1_01 = {
    id: "en_a1_mod_01",
    title: "Greetings & Basic Courtesy",
    section: 1,
    sectionTitle: "First Steps & Introductions",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Hello! Good morning! Welcome to English Academy!",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a cumprimentar as pessoas educadamente em cada período do dia e usar expressões essenciais de cortesia como 'Please', 'Thank you' e 'Excuse me'."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Hello / Hi", romaji: "/həˈloʊ / haɪ/", translation: "Olá / Oi", timeContext: "Saudação universal usada em qualquer momento do dia." },
        { type: "vocab", kanji: "Good morning", romaji: "/ɡʊd ˈmɔːrnɪŋ/", translation: "Bom dia", timeContext: "Usado do amanhecer até as 12:00 (meio-dia)." },
        { type: "vocab", kanji: "Good afternoon", romaji: "/ɡʊd ˌæftərˈnuːn/", translation: "Boa tarde", timeContext: "Usado entre 12:00 e o pôr do sol (~18:00)." },
        { type: "vocab", kanji: "Good evening", romaji: "/ɡʊd ˈiːvnɪŋ/", translation: "Boa noite (chegada)", timeContext: "Usado ao encontrar alguém à noite." },
        { type: "vocab", kanji: "Good night", romaji: "/ɡʊd naɪt/", translation: "Boa noite (despedida)", timeContext: "Usado exclusivamente ao se despedir ou ir dormir." },
        { type: "grammar_pill", title: "Cortesia Básica: Please & Thank you", rule: "Adicione 'Please' para fazer pedidos educados e 'Thank you' (ou 'Thanks') para agradecer. Para dizer 'De nada', use 'You are welcome'.", formula: "[Pedido] + please / Thank you + very much", example: "Water, please. ➔ (Água, por favor). Thank you very much! ➔ (Muito obrigado!)." },
        { type: "grammar_pill", title: "Diferença: Good evening vs. Good night", rule: "'Good evening' é a saudação de entrada/chegada à noite. 'Good night' é a despedida de saída ou quando se vai dormir.", formula: "Chegada ➔ Good evening | Saída ➔ Good night", example: "Good evening, welcome! (Ao chegar). Good night, see you tomorrow! (Ao sair)." }
    ],
    stage3_practice: [
        { question: "1. Qual saudação deve ser usada ao chegar a um jantar às 20:00?", options: [{ label: "Good morning", isCorrect: false }, { label: "Good evening", isCorrect: true }, { label: "Good night", isCorrect: false }] },
        { question: "2. Como se diz 'Por favor' em inglês?", options: [{ label: "Thank you", isCorrect: false }, { label: "Please", isCorrect: true }, { label: "Excuse me", isCorrect: false }] },
        { question: "3. Qual é a resposta padrão e educada para 'Thank you'?", options: [{ label: "You are welcome", isCorrect: true }, { label: "Please", isCorrect: false }, { label: "Good night", isCorrect: false }] },
        { question: "4. Ao ir para a cama dormir, como você se despede da família?", options: [{ label: "Good afternoon", isCorrect: false }, { label: "Good evening", isCorrect: false }, { label: "Good night", isCorrect: true }] },
        { question: "5. Qual expressão você usa para pedir licença em um local público?", options: [{ label: "Excuse me", isCorrect: true }, { label: "You are welcome", isCorrect: false }, { label: "Good morning", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Good morning! Coffee, please.", translation: "Bom dia! Café, por favor.", chunks: ["Good", "morning", "!", "Coffee", ",", "please", "."] },
        { sentenceEn: "Thank you very much!", translation: "Muito obrigado!", chunks: ["Thank", "you", "very", "much", "!"] }
    ],
    stage4_dialog: [
        { npcName: "David (Recepcionista)", npcMessage: "Good morning! How can I help you today?", options: [{ text: "Good morning! Water, please.", isCorrect: true, feedback: "Excelente! Cumprimento correto e pedido educado." }, { text: "Good night! Bye bye!", isCorrect: false, feedback: "Ops! De manhã não usamos 'Good night'." }, { text: "You are welcome!", isCorrect: false, feedback: "Isso significa 'De nada', não encaixa aqui." }] },
        { npcName: "Anna (Barista)", npcMessage: "Here is your coffee. Enjoy!", options: [{ text: "Thank you very much!", isCorrect: true, feedback: "Perfeito! Agradecimento natural e educado." }, { text: "Excuse me!", isCorrect: false, feedback: "'Excuse me' é usado para chamar atenção." }, { text: "Good evening!", isCorrect: false, feedback: "Não estamos à noite!" }] },
        { npcName: "John (Colega)", npcMessage: "Good night! See you tomorrow!", options: [{ text: "Good night! Have a great rest!", isCorrect: true, feedback: "Ótima despedida noturna." }, { text: "Good morning!", isCorrect: false, feedback: "Ele está se despedindo para ir dormir." }, { text: "Please!", isCorrect: false, feedback: "'Please' é por favor." }] }
    ],
    stage5_quiz: [
        { question: "1. Como cumprimentar alguém educadamente às 14:30?", options: [{ label: "Good afternoon", isCorrect: true }, { label: "Good morning", isCorrect: false }, { label: "Good night", isCorrect: false }] },
        { question: "2. O que significa 'You are welcome'?", options: [{ label: "De nada", isCorrect: true }, { label: "Por favor", isCorrect: false }, { label: "Com licença", isCorrect: false }] },
        { question: "3. 'Good evening' deve ser usado ao:", options: [{ label: "Chegar a um evento à noite", isCorrect: true }, { label: "Ir dormir", isCorrect: false }, { label: "Despedir-se às 17h", isCorrect: false }] },
        { question: "4. Como agradecer alguém de forma intensa e educada?", options: [{ label: "Thank you very much!", isCorrect: true }, { label: "Excuse me, please!", isCorrect: false }, { label: "Good morning!", isCorrect: false }] },
        { question: "5. Para chamar a atenção do garçom, dizemos:", options: [{ label: "Excuse me", isCorrect: true }, { label: "You are welcome", isCorrect: false }, { label: "Good night", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_02 = {
    id: "en_a1_mod_02",
    title: "Introducing Yourself & Verb 'To Be'",
    section: 1,
    sectionTitle: "First Steps & Introductions",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Hello! My name is Sarah. I am a teacher.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Domine o uso do verbo 'To Be' no presente (Am, Is, Are) para se apresentar, falar seu nome e estabelecer os pilares da comunicação."
    },
    stage2_drops: [
        { type: "vocab", kanji: "My name is...", romaji: "/maɪ neɪm ɪz/", translation: "Meu nome é...", timeContext: "Fórmula clássica para se apresentar." },
        { type: "vocab", kanji: "I am... (I'm)", romaji: "/aɪ æm / aɪm/", translation: "Eu sou / Eu estou", timeContext: "Usado com nomes, profissões e estados." },
        { type: "vocab", kanji: "Nice to meet you", romaji: "/naɪs tuː miːt juː/", translation: "Prazer em conhecê-lo(a)", timeContext: "Expressão essencial ao conhecer alguém." },
        { type: "grammar_pill", title: "Verbo 'To Be' Afirmativo (Am / Is / Are)", rule: "O verbo 'To Be' significa 'ser' ou 'estar'. Use 'Am' para I, 'Is' para He/She/It, e 'Are' para You/We/They.", formula: "I + am | He/She/It + is | You/We/They + are", example: "I am Carlos. She is Maria. We are happy." },
        { type: "grammar_pill", title: "Contrações do Verbo 'To Be'", rule: "No inglês falado cotidiano, é muito comum contrair o verbo: I'm, You're, He's, She's, It's, We're, They're.", formula: "I am = I'm | You are = You're | She is = She's", example: "I'm a student. She's happy. They're here." }
    ],
    stage3_practice: [
        { question: "1. Qual é a forma correta do verbo To Be para a frase: 'I ___ Carlos'?", options: [{ label: "is", isCorrect: false }, { label: "am", isCorrect: true }, { label: "are", isCorrect: false }] },
        { question: "2. Como se escreve a contração de 'She is'?", options: [{ label: "She's", isCorrect: true }, { label: "Shes'", isCorrect: false }, { label: "She'are", isCorrect: false }] },
        { question: "3. Complete: 'They ___ my friends.'", options: [{ label: "is", isCorrect: false }, { label: "am", isCorrect: false }, { label: "are", isCorrect: true }] },
        { question: "4. Como responder a 'Nice to meet you'?", options: [{ label: "Nice to meet you too!", isCorrect: true }, { label: "I am fine.", isCorrect: false }, { label: "Good night.", isCorrect: false }] },
        { question: "5. Qual frase está gramaticalmente CORRETA?", options: [{ label: "He are a teacher", isCorrect: false }, { label: "He is a teacher", isCorrect: true }, { label: "He am a teacher", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Hello, my name is Carlos.", translation: "Olá, meu nome é Carlos.", chunks: ["Hello", ",", "my", "name", "is", "Carlos", "."] },
        { sentenceEn: "Nice to meet you too!", translation: "Prazer em conhecê-lo também!", chunks: ["Nice", "to", "meet", "you", "too", "!"] }
    ],
    stage4_dialog: [
        { npcName: "Michael", npcMessage: "Hello! My name is Michael. What is your name?", options: [{ text: "Hi! My name is Alex. Nice to meet you!", isCorrect: true, feedback: "Perfeito! Apresentação completa e educada." }, { text: "I am fine, thank you.", isCorrect: false, feedback: "Ele perguntou seu nome, não como você está." }, { text: "Good night Michael!", isCorrect: false, feedback: "Despedida incorreta no meio da conversa." }] },
        { npcName: "Sarah", npcMessage: "Nice to meet you, Alex!", options: [{ text: "Nice to meet you too, Sarah!", isCorrect: true, feedback: "Resposta exata e natural." }, { text: "You are welcome!", isCorrect: false, feedback: "Isso é 'de nada'." }, { text: "I am Sarah.", isCorrect: false, feedback: "Você é Alex, não Sarah!" }] },
        { npcName: "David", npcMessage: "Is she Maria?", options: [{ text: "Yes, she is Maria.", isCorrect: true, feedback: "Uso correto do verbo To Be com 'she'." }, { text: "Yes, I am Maria.", isCorrect: false, feedback: "Ela é Maria, você não é ela." }, { text: "Yes, she am Maria.", isCorrect: false, feedback: "'She' usa 'is', não 'am'." }] }
    ],
    stage5_quiz: [
        { question: "1. Complete com a forma correta: 'You ___ a great student.'", options: [{ label: "are", isCorrect: true }, { label: "is", isCorrect: false }, { label: "am", isCorrect: false }] },
        { question: "2. Como dizer 'Prazer em conhecê-lo'?", options: [{ label: "Nice to meet you", isCorrect: true }, { label: "Good morning to you", isCorrect: false }, { label: "Excuse me please", isCorrect: false }] },
        { question: "3. Qual pronome exige o verbo 'am'?", options: [{ label: "I", isCorrect: true }, { label: "You", isCorrect: false }, { label: "He", isCorrect: false }] },
        { question: "4. Qual a contração correta para 'We are'?", options: [{ label: "We're", isCorrect: true }, { label: "We's", isCorrect: false }, { label: "We'am", isCorrect: false }] },
        { question: "5. O verbo 'To Be' significa:", options: [{ label: "Ser ou Estar", isCorrect: true }, { label: "Ter ou Fazer", isCorrect: false }, { label: "Ir ou Vir", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_03 = {
    id: "en_a1_mod_03",
    title: "Personal Pronouns & Countries",
    section: 1,
    sectionTitle: "First Steps & Introductions",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Where are you from? I am from Brazil. She is from Japan.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a usar os pronomes sujeitos (I, You, He, She, It, We, They) e a perguntar e falar sobre países e nacionalidades."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Where are you from?", romaji: "/weər ɑːr juː frɒm/", translation: "De onde você é?", timeContext: "Pergunta chave para saber a origem de alguém." },
        { type: "vocab", kanji: "I am from Brazil / USA / Japan", romaji: "/frɒm brəˈzɪl/", translation: "Eu sou do Brasil / EUA / Japão", timeContext: "Estrutura para indicar seu país." },
        { type: "vocab", kanji: "Country vs. Nationality", romaji: "/ˈkʌntri / ˌnæʃəˈnæləti/", translation: "País vs. Nacionalidade", timeContext: "Ex: Brazil ➔ Brazilian | Japan ➔ Japanese." },
        { type: "grammar_pill", title: "Pronomes Pessoais Sujeitos (Subject Pronouns)", rule: "Substituem o nome da pessoa/coisa que faz a ação: I (Eu), You (Você/Vocês), He (Ele - homem), She (Ela - mulher), It (Objeto/Animal/Tempo), We (Nós), They (Eles/Elas).", formula: "[Pronome] + [To Be] + from + [País]", example: "He is from Canada. They are from Italy." },
        { type: "grammar_pill", title: "Uso da preposição 'From'", rule: "'From' indica origem/procedência. Sempre use 'from' antes do nome do país para responder de onde você vem.", formula: "Subject + To Be + from + Country", example: "She is from France. We are from Brazil." }
    ],
    stage3_practice: [
        { question: "1. Como perguntar 'De onde você é?' em inglês?", options: [{ label: "Where are you from?", isCorrect: true }, { label: "What is your from?", isCorrect: false }, { label: "How are you from?", isCorrect: false }] },
        { question: "2. Qual pronome substitui 'Maria'?", options: [{ label: "He", isCorrect: false }, { label: "She", isCorrect: true }, { label: "It", isCorrect: false }] },
        { question: "3. Qual pronome usamos para falar de um livro ou objeto singular?", options: [{ label: "They", isCorrect: false }, { label: "It", isCorrect: true }, { label: "He", isCorrect: false }] },
        { question: "4. Complete: 'Carlos and I are friends. ___ are from Brazil.'", options: [{ label: "They", isCorrect: false }, { label: "We", isCorrect: true }, { label: "He", isCorrect: false }] },
        { question: "5. Complete: 'John is Canadian. He is ___ Canada.'", options: [{ label: "from", isCorrect: true }, { label: "to", isCorrect: false }, { label: "at", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Where are you from?", translation: "De onde você é?", chunks: ["Where", "are", "you", "from", "?"] },
        { sentenceEn: "She is from Japan.", translation: "Ela é do Japão.", chunks: ["She", "is", "from", "Japan", "."] }
    ],
    stage4_dialog: [
        { npcName: "Emma (Turista)", npcMessage: "Hi! I am Emma. Where are you from?", options: [{ text: "Hi Emma! I am from Brazil.", isCorrect: true, feedback: "Excelente! Resposta direta e correta com 'from'." }, { text: "I am fine, thank you.", isCorrect: false, feedback: "Ela perguntou seu país." }, { text: "He is from Brazil.", isCorrect: false, feedback: "Ela perguntou sobre VOCÊ ('you')." }] },
        { npcName: "Lucas", npcMessage: "Is Peter from the USA?", options: [{ text: "Yes, he is from the USA.", isCorrect: true, feedback: "Uso perfeito do pronome 'he'." }, { text: "Yes, she is from the USA.", isCorrect: false, feedback: "Peter é nome masculino, use 'he'." }, { text: "Yes, it is from the USA.", isCorrect: false, feedback: "Peter é uma pessoa, não use 'it'." }] },
        { npcName: "Elena", npcMessage: "Where are Ken and Yumi from?", options: [{ text: "They are from Japan.", isCorrect: true, feedback: "Pronome 'they' para plural de pessoas." }, { text: "We are from Japan.", isCorrect: false, feedback: "Ken e Yumi não incluem você." }, { text: "She is from Japan.", isCorrect: false, feedback: "São duas pessoas (plural)." }] }
    ],
    stage5_quiz: [
        { question: "1. Qual pronome refere-se a 'Carlos and Pedro'?", options: [{ label: "They", isCorrect: true }, { label: "We", isCorrect: false }, { label: "He", isCorrect: false }] },
        { question: "2. Como responder 'Eu sou do Brasil'?", options: [{ label: "I am from Brazil", isCorrect: true }, { label: "I am Brazil", isCorrect: false }, { label: "My from is Brazil", isCorrect: false }] },
        { question: "3. 'It' é usado para:", options: [{ label: "Objetos, animais no singular e conceitos", isCorrect: true }, { label: "Apenas homens", isCorrect: false }, { label: "Apenas mulheres", isCorrect: false }] },
        { question: "4. Qual a frase correta?", options: [{ label: "Where is she from?", isCorrect: true }, { label: "Where are she from?", isCorrect: false }, { label: "Where am she from?", isCorrect: false }] },
        { question: "5. Se alguém nasce na Inglaterra (England), a pessoa é:", options: [{ label: "English", isCorrect: true }, { label: "Spanish", isCorrect: false }, { label: "Brazilian", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_04 = {
    id: "en_a1_mod_04",
    title: "Jobs & Professions",
    section: 1,
    sectionTitle: "First Steps & Introductions",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "What do you do? I am a doctor. He is an engineer.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda o vocabulário de profissões e a regra fundamental dos artigos indefinidos 'A' e 'AN' em inglês."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Doctor / Nurse / Teacher", romaji: "/ˈdɒktər / nɜːrs / ˈtiːtʃər/", translation: "Médico(a) / Enfermeiro(a) / Professor(a)", timeContext: "Profissões comuns." },
        { type: "vocab", kanji: "Engineer / Architect / Student", romaji: "/ˌendʒɪˈnɪər / ˈɑːrkɪtekt / ˈstjuːdənt/", translation: "Engenheiro(a) / Arquiteto(a) / Estudante", timeContext: "Profissões com vogal e consoante." },
        { type: "vocab", kanji: "What do you do?", romaji: "/wɒt duː juː duː/", translation: "O que você faz? / Qual sua profissão?", timeContext: "Pergunta padrão sobre trabalho." },
        { type: "grammar_pill", title: "Regra dos Artigos Indefinidos: A vs. AN", rule: "Em inglês, SEMPRE usamos o artigo 'a' ou 'an' antes de profissões no singular! Use 'A' antes de som de consoante e 'AN' antes de som de vogal.", formula: "A + som consoante (a doctor, a teacher) | AN + som vogal (an engineer, an actor)", example: "I am a doctor. She is an engineer." },
        { type: "grammar_pill", title: "Plural de Profissões (Sem A/AN)", rule: "No plural, NUNCA usamos 'a' ou 'an'!", formula: "Plural ➔ Substantivo + S (sem A/AN)", example: "They are doctors. (Eles são médicos). We are students." }
    ],
    stage3_practice: [
        { question: "1. Qual artigo correto para a frase: 'He is ___ engineer'?", options: [{ label: "an", isCorrect: true }, { label: "a", isCorrect: false }, { label: "the", isCorrect: false }] },
        { question: "2. Qual artigo correto para: 'She is ___ teacher'?", options: [{ label: "a", isCorrect: true }, { label: "an", isCorrect: false }, { label: "no article", isCorrect: false }] },
        { question: "3. Como perguntar a profissão de alguém em inglês?", options: [{ label: "What do you do?", isCorrect: true }, { label: "What are your job?", isCorrect: false }, { label: "How do you work?", isCorrect: false }] },
        { question: "4. Qual frase no plural está CORRETA?", options: [{ label: "They are doctors", isCorrect: true }, { label: "They are a doctors", isCorrect: false }, { label: "They are an doctors", isCorrect: false }] },
        { question: "5. Escolha a opção correta: 'I am ___ architect.'", options: [{ label: "an", isCorrect: true }, { label: "a", isCorrect: false }, { label: "are", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I am a student.", translation: "Eu sou um estudante.", chunks: ["I", "am", "a", "student", "."] },
        { sentenceEn: "She is an engineer.", translation: "Ela é uma engenheira.", chunks: ["She", "is", "an", "engineer", "."] }
    ],
    stage4_dialog: [
        { npcName: "Tom (Entrevistador)", npcMessage: "Nice to meet you! What do you do?", options: [{ text: "I am a manager at a company.", isCorrect: true, feedback: "Uso perfeito de 'a manager'." }, { text: "I am manager.", isCorrect: false, feedback: "Falta o artigo 'a' antes da profissão no singular!" }, { text: "I am an manager.", isCorrect: false, feedback: "'Manager' começa com som de consoante (m), use 'a'." }] },
        { npcName: "Rachel", npcMessage: "Is your brother a doctor?", options: [{ text: "No, he is an architect.", isCorrect: true, feedback: "'Architect' começa com vogal, uso exato de 'an'." }, { text: "No, he is a architect.", isCorrect: false, feedback: "Use 'an' antes de 'architect'." }, { text: "No, he am a doctor.", isCorrect: false, feedback: "'He' exige 'is'." }] },
        { npcName: "Gabriel", npcMessage: "What do your parents do?", options: [{ text: "They are teachers.", isCorrect: true, feedback: "Plural sem artigo 'a/an', correto!" }, { text: "They are a teachers.", isCorrect: false, feedback: "Não se usa 'a' no plural!" }, { text: "They is teachers.", isCorrect: false, feedback: "'They' exige 'are'." }] }
    ],
    stage5_quiz: [
        { question: "1. Usamos 'AN' antes de palavras que começam com som de:", options: [{ label: "Vogal", isCorrect: true }, { label: "Consoante", isCorrect: false }, { label: "Número", isCorrect: false }] },
        { question: "2. Como se diz 'Eu sou engenheiro'?", options: [{ label: "I am an engineer", isCorrect: true }, { label: "I am a engineer", isCorrect: false }, { label: "I am engineer", isCorrect: false }] },
        { question: "3. Qual frase está gramaticalmente errada?", options: [{ label: "He is student", isCorrect: true }, { label: "He is a student", isCorrect: false }, { label: "She is a doctor", isCorrect: false }] },
        { question: "4. O que significa 'What do you do?'", options: [{ label: "O que você faz da vida / Qual sua profissão?", isCorrect: true }, { label: "O que você está fazendo agora?", isCorrect: false }, { label: "Para onde você vai?", isCorrect: false }] },
        { question: "5. 'Actor' exige qual artigo no singular?", options: [{ label: "An actor", isCorrect: true }, { label: "A actor", isCorrect: false }, { label: "The a actor", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_05 = {
    id: "en_a1_mod_05",
    title: "Alphabet, Spelling & Phone Numbers",
    section: 1,
    sectionTitle: "First Steps & Introductions",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "How do you spell your name? C-A-R-L-O-S.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a soletrar nomes e palavras em inglês e a informar números de telefone e e-mails de forma clara."
    },
    stage2_drops: [
        { type: "vocab", kanji: "How do you spell that?", romaji: "/haʊ duː juː spel ðæt/", translation: "Como se soletra isso?", timeContext: "Pergunta usada para pedir a soletração de um nome." },
        { type: "vocab", kanji: "Double (L / O / S)", romaji: "/ˈdʌbəl/", translation: "Duplo (ex: L-L ➔ Double L)", timeContext: "Usado ao soletrar letras repetidas." },
        { type: "vocab", kanji: "What is your phone number?", romaji: "/wɒt ɪz jɔːr fəʊn ˈnʌmbər/", translation: "Qual é o seu número de telefone?", timeContext: "Pergunta para dados de contato." },
        { type: "grammar_pill", title: "Pronúncia do Dígito Zero em Números de Telefone", rule: "Em números de telefone em inglês, o dígito 0 é frequentemente pronunciado como a letra 'Oh' (/oʊ/) em vez de 'Zero'.", formula: "0 em telefone ➔ 'Oh' ou 'Zero'", example: "555-0192 ➔ 'Five-five-five, oh-one-nine-two'." },
        { type: "grammar_pill", title: "Símbolos de E-mail em Inglês", rule: "O símbolo '@' diz-se 'at' e o ponto '.' diz-se 'dot'.", formula: "@ ➔ 'at' | . ➔ 'dot'", example: "carlos@gmail.com ➔ 'carlos at gmail dot com'." }
    ],
    stage3_practice: [
        { question: "1. Como perguntar 'Como se soletra seu nome?' em inglês?", options: [{ label: "How do you spell your name?", isCorrect: true }, { label: "What do you spell your name?", isCorrect: false }, { label: "How is your name spell?", isCorrect: false }] },
        { question: "2. Como se lê o símbolo '@' em um e-mail?", options: [{ label: "at", isCorrect: true }, { label: "dot", isCorrect: false }, { label: "dash", isCorrect: false }] },
        { question: "3. Como se lê o ponto '.' em um endereço de e-mail?", options: [{ label: "dot", isCorrect: true }, { label: "point", isCorrect: false }, { label: "comma", isCorrect: false }] },
        { question: "4. Ao soletrar duas letras 'T' seguidas (TT), dizemos:", options: [{ label: "Double T", isCorrect: true }, { label: "Two T", isCorrect: false }, { label: "T twice", isCorrect: false }] },
        { question: "5. Como se fala o número 0 em um telefone frequentemente?", options: [{ label: "Oh", isCorrect: true }, { label: "Null", isCorrect: false }, { label: "Love", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "How do you spell your last name?", translation: "Como se soletra seu sobrenome?", chunks: ["How", "do", "you", "spell", "your", "last", "name", "?"] },
        { sentenceEn: "My email is alex at gmail dot com.", translation: "Meu e-mail é alex@gmail.com.", chunks: ["My", "email", "is", "alex", "at", "gmail", "dot", "com", "."] }
    ],
    stage4_dialog: [
        { npcName: "Clerk (Atendente)", npcMessage: "Can I have your name, please?", options: [{ text: "My name is Smith. S-M-I-T-H.", isCorrect: true, feedback: "Excelente! Resposta clara soletrada passo a passo." }, { text: "Yes, I can.", isCorrect: false, feedback: "Ela quer saber seu nome e a soletração." }, { text: "It is a phone.", isCorrect: false, feedback: "Fora de contexto." }] },
        { npcName: "Clerk", npcMessage: "How do you spell your first name?", options: [{ text: "J-O-H-N.", isCorrect: true, feedback: "Soletração perfeita letra por letra." }, { text: "John at gmail dot com.", isCorrect: false, feedback: "Isso é um e-mail, não a soletração do nome." }, { text: "555-1234.", isCorrect: false, feedback: "Isso é um telefone!" }] },
        { npcName: "Receptionist", npcMessage: "What is your phone number?", options: [{ text: "It is 555-0199 (five five five, oh one double nine).", isCorrect: true, feedback: "Uso correto de 'oh' para 0 e 'double nine' para 99." }, { text: "My phone is green.", isCorrect: false, feedback: "Ela pediu o NÚMERO do telefone!" }, { text: "I spell it P-H-O-N-E.", isCorrect: false, feedback: "Ela não pediu para soletrar a palavra 'phone'." }] }
    ],
    stage5_quiz: [
        { question: "1. Como dizer o e-mail 'user@test.com'?", options: [{ label: "user at test dot com", isCorrect: true }, { label: "user dot test at com", isCorrect: false }, { label: "user comma test point com", isCorrect: false }] },
        { question: "2. A pergunta 'How do you spell that?' serve para pedir:", options: [{ label: "A soletração de uma palavra", isCorrect: true }, { label: "O preço de algo", isCorrect: false }, { label: "A hora atual", isCorrect: false }] },
        { question: "3. Soletrando 'APPLE', a letra PP é dita como:", options: [{ label: "Double P", isCorrect: true }, { label: "Two P", isCorrect: false }, { label: "Pair P", isCorrect: false }] },
        { question: "4. O símbolo '.' em sites (ex: google.com) é pronunciado como:", options: [{ label: "dot", isCorrect: true }, { label: "period", isCorrect: false }, { label: "stop", isCorrect: false }] },
        { question: "5. Qual opção representa a soletração correta de 'DOG'?", options: [{ label: "D - O - G", isCorrect: true }, { label: "D - A - G", isCorrect: false }, { label: "B - O - G", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 2: FAMILY, PEOPLE & DESCRIPTIONS (MÓDULOS 6 A 10)
// ------------------------------------------

const MODULO_EN_A1_06 = {
    id: "en_a1_mod_06",
    title: "Family Members & Possessive 's",
    section: 2,
    sectionTitle: "Family, People & Descriptions",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "This is my father. That is John's car.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda o vocabulário de membros da família e o uso do caso possessivo com apóstrofo + S ('s)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Father / Mother / Parents", romaji: "/ˈfɑːðər / ˈmʌðər / ˈpeərənts/", translation: "Pai / Mãe / Pais", timeContext: "Núcleo familiar principal." },
        { type: "vocab", kanji: "Brother / Sister / Siblings", romaji: "/ˈbrʌðər / ˈsɪstər / ˈsɪblɪŋz/", translation: "Irmão / Irmã / Irmãos (geral)", timeContext: "Irmãos e irmãs." },
        { type: "vocab", kanji: "Son / Daughter / Children", romaji: "/sʌn / ˈdɔːtər / ˈtʃɪldrən/", translation: "Filho / Filha / Filhos", timeContext: "Descendentes." },
        { type: "grammar_pill", title: "Caso Possessivo ('s)", rule: "Para indicar que algo pertence a uma pessoa, adicionamos apóstrofo + S ('s) ao nome do possuidor. O possuidor vem SEMPRE antes da coisa possuída!", formula: "[Possuidor] + 's + [Objeto/Pessoa]", example: "John's car ➔ (O carro do John). Maria's mother ➔ (A mãe da Maria)." },
        { type: "grammar_pill", title: "Possessivo no Plural terminado em S", rule: "Se o nome/substantivo plural já termina em S, adicionamos apenas o apóstrofo (').", formula: "[Plural com S] + '", example: "My parents' house ➔ (A casa dos meus pais)." }
    ],
    stage3_practice: [
        { question: "1. Como dizer 'O carro da Maria' em inglês?", options: [{ label: "Maria's car", isCorrect: true }, { label: "The car of Maria", isCorrect: false }, { label: "Maria car", isCorrect: false }] },
        { question: "2. Como dizer 'A casa dos meus pais' (parents = plural)?", options: [{ label: "My parents' house", isCorrect: true }, { label: "My parent's house", isCorrect: false }, { label: "My parents house's", isCorrect: false }] },
        { question: "3. Qual é o termo geral para 'mãe e pai' juntos?", options: [{ label: "Parents", isCorrect: true }, { label: "Relatives", isCorrect: false }, { label: "Siblings", isCorrect: false }] },
        { question: "4. Qual termo significa 'irmãos' (homens e mulheres)?", options: [{ label: "Siblings", isCorrect: true }, { label: "Brothers", isCorrect: false }, { label: "Parents", isCorrect: false }] },
        { question: "5. 'Pedro's sister' significa:", options: [{ label: "A irmã do Pedro", isCorrect: true }, { label: "O irmão do Pedro", isCorrect: false }, { label: "Pedro é uma irmã", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "This is my brother's house.", translation: "Esta é a casa do meu irmão.", chunks: ["This", "is", "my", "brother's", "house", "."] },
        { sentenceEn: "My mother's name is Sarah.", translation: "O nome da minha mãe é Sarah.", chunks: ["My", "mother's", "name", "is", "Sarah", "."] }
    ],
    stage4_dialog: [
        { npcName: "Lucy", npcMessage: "Who is that man in the photo?", options: [{ text: "He is my sister's husband.", isCorrect: true, feedback: "Uso correto do 's de posse." }, { text: "He is my sister husband.", isCorrect: false, feedback: "Falta o apóstrofo + S ('s)!" }, { text: "He is husband of sister.", isCorrect: false, feedback: "Construção não natural em inglês." }] },
        { npcName: "Tom", npcMessage: "Is this John's phone?", options: [{ text: "Yes, it is John's phone.", isCorrect: true, feedback: "Perfeito!" }, { text: "Yes, it is phone's John.", isCorrect: false, feedback: "O possuidor (John) vem antes da coisa." }, { text: "Yes, it is John phone.", isCorrect: false, feedback: "Falta o 's." }] },
        { npcName: "Kate", npcMessage: "Do you have any siblings?", options: [{ text: "Yes, I have one brother and one sister.", isCorrect: true, feedback: "Excelente resposta sobre família!" }, { text: "Yes, I have two parents.", isCorrect: false, feedback: "Parents são os pais, não irmãos." }, { text: "No, I am a father.", isCorrect: false, feedback: "Fora de contexto para a pergunta de irmãos." }] }
    ],
    stage5_quiz: [
        { question: "1. Como traduzir 'O livro do professor'?", options: [{ label: "The teacher's book", isCorrect: true }, { label: "The teacher book", isCorrect: false }, { label: "The book teacher's", isCorrect: false }] },
        { question: "2. 'Daughter' significa:", options: [{ label: "Filha", isCorrect: true }, { label: "Mãe", isCorrect: false }, { label: "Tia", isCorrect: false }] },
        { question: "3. 'Son' significa:", options: [{ label: "Filho", isCorrect: true }, { label: "Sol", isCorrect: false }, { label: "Irmão", isCorrect: false }] },
        { question: "4. No possessivo com 's, a estrutura é:", options: [{ label: "Possuidor + 's + Objeto", isCorrect: true }, { label: "Objeto + 's + Possuidor", isCorrect: false }, { label: "Of + Possuidor + Objeto", isCorrect: false }] },
        { question: "5. 'My brother's dog' significa:", options: [{ label: "O cachorro do meu irmão", isCorrect: true }, { label: "Meu irmão é um cachorro", isCorrect: false }, { label: "Os cachorros dos meus irmãos", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_07 = {
    id: "en_a1_mod_07",
    title: "Numbers & Age (1 to 100)",
    section: 2,
    sectionTitle: "Family, People & Descriptions",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "How old are you? I am twenty-five years old.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a contagem dos números de 1 a 100 em inglês e como perguntar e responder a idade corretamente usando o verbo To Be."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Numbers 1-10", romaji: "one, two, three, four, five, six, seven, eight, nine, ten", translation: "1 ao 10", timeContext: "Contagem básica." },
        { type: "vocab", kanji: "Teens (13-19)", romaji: "thirteen, fourteen, fifteen... nineteen", translation: "13 ao 19 (-teen)", timeContext: "Terminam com som forte em 'TEEN'." },
        { type: "vocab", kanji: "Tens (20, 30, 40...)", romaji: "twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety", translation: "20, 30, 40...", timeContext: "Terminam em 'TY'." },
        { type: "grammar_pill", title: "Como Falar a Idade em Inglês (VERBO TO BE)", rule: "EM INGLÊS NUNCA USAMOS O VERBO 'HAVE' PARA IDADE! Usamos SEMPRE o verbo 'To Be' (Am/Is/Are). Você 'é' sua idade!", formula: "Subject + To Be + [Número] + (years old)", example: "I am 25 years old (NÃO 'I have 25'). She is 30 years old." },
        { type: "grammar_pill", title: "Pergunta Padrão de Idade: How old are you?", rule: "Para perguntar a idade de alguém, usamos a estrutura 'How old + To Be + Subject?'.", formula: "How old are you? | How old is he/she?", example: "How old are you? ➔ I am 20. How old is your brother? ➔ He is 15." }
    ],
    stage3_practice: [
        { question: "1. Como perguntar 'Quantos anos você tem?' em inglês?", options: [{ label: "How old are you?", isCorrect: true }, { label: "How many years do you have?", isCorrect: false }, { label: "What age have you?", isCorrect: false }] },
        { question: "2. Qual frase está CORRETA para dizer 'Eu tenho 20 anos'?", options: [{ label: "I am 20 years old", isCorrect: true }, { label: "I have 20 years old", isCorrect: false }, { label: "I have 20 years", isCorrect: false }] },
        { question: "3. Como se escreve o número 40 em inglês?", options: [{ label: "forty", isCorrect: true }, { label: "fourty", isCorrect: false }, { label: "fourteen", isCorrect: false }] },
        { question: "4. Como se lê o número 15?", options: [{ label: "fifteen", isCorrect: true }, { label: "fiveteen", isCorrect: false }, { label: "fifty", isCorrect: false }] },
        { question: "5. 'He is thirty years old' significa:", options: [{ label: "Ele tem 30 anos", isCorrect: true }, { label: "Ele tem 13 anos", isCorrect: false }, { label: "Ele tem 3 anos", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "How old is your sister?", translation: "Quantos anos tem sua irmã?", chunks: ["How", "old", "is", "your", "sister", "?"] },
        { sentenceEn: "She is twenty-two years old.", translation: "Ela tem vinte e dois anos.", chunks: ["She", "is", "twenty-two", "years", "old", "."] }
    ],
    stage4_dialog: [
        { npcName: "Officer", npcMessage: "What is your name and how old are you?", options: [{ text: "My name is John and I am 28 years old.", isCorrect: true, feedback: "Excelente! Resposta correta com o verbo To Be." }, { text: "I am John and I have 28 years.", isCorrect: false, feedback: "Erro comum! Não use 'have' para idade." }, { text: "My name is John and I 28.", isCorrect: false, feedback: "Falta o verbo 'am'." }] },
        { npcName: "Lisa", npcMessage: "How old is your father?", options: [{ text: "He is 55 years old.", isCorrect: true, feedback: "Uso correto de 'He is'." }, { text: "He has 55 years.", isCorrect: false, feedback: "Lembre-se: em inglês não 'temos' idade, nós 'somos' a idade!" }, { text: "His 55 years.", isCorrect: false, feedback: "Gramática incorreta." }] },
        { npcName: "Mark", npcMessage: "Are you twenty years old?", options: [{ text: "No, I am twenty-five.", isCorrect: true, feedback: "Resposta natural e exata." }, { text: "No, I don't have twenty.", isCorrect: false, feedback: "Erro com o verbo have/don't." }, { text: "No, I am not twenty old.", isCorrect: false, feedback: "Construção incorreta." }] }
    ],
    stage5_quiz: [
        { question: "1. Para falar idade em inglês, o verbo obrigatório é:", options: [{ label: "To Be (Am / Is / Are)", isCorrect: true }, { label: "To Have", isCorrect: false }, { label: "To Do", isCorrect: false }] },
        { question: "2. Como se escreve 50 em inglês?", options: [{ label: "fifty", isCorrect: true }, { label: "fifteen", isCorrect: false }, { label: "fivety", isCorrect: false }] },
        { question: "3. 'Thirteen' corresponde ao número:", options: [{ label: "13", isCorrect: true }, { label: "30", isCorrect: false }, { label: "3", isCorrect: false }] },
        { question: "4. Qual a pergunta para saber a idade de uma mulher?", options: [{ label: "How old is she?", isCorrect: true }, { label: "How many years has she?", isCorrect: false }, { label: "What old is she?", isCorrect: false }] },
        { question: "5. '100' em inglês se diz:", options: [{ label: "One hundred", isCorrect: true }, { label: "One thousand", isCorrect: false }, { label: "One million", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_08 = {
    id: "en_a1_mod_08",
    title: "Possessive Adjectives",
    section: 2,
    sectionTitle: "Family, People & Descriptions",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "My name is John. His car is red. Her house is big.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Domine os adjetivos possessivos (My, Your, His, Her, Its, Our, Their) para relacionar objetos e pessoas com clareza."
    },
    stage2_drops: [
        { type: "vocab", kanji: "My / Your", romaji: "/maɪ / jɔːr/", translation: "Meu(s), Minha(s) / Seu(s), Sua(s)", timeContext: "Refere-se a 'I' e 'You'." },
        { type: "vocab", kanji: "His / Her / Its", romaji: "/hɪz / hɜːr / ɪts/", translation: "Dele / Dela / Dele, Dela (objetos/animais)", timeContext: "Refere-se a 'He', 'She' e 'It'." },
        { type: "vocab", kanji: "Our / Their", romaji: "/ˈaʊər / ðeər/", translation: "Nosso(a/s) / Dele(a)s", timeContext: "Refere-se a 'We' e 'They'." },
        { type: "grammar_pill", title: "Tabela de Adjetivos Possessivos", rule: "Adjetivos possessivos concordam com o POSSUIDOR, e NUNCA mudam no plural! Ex: 'My book' (meu livro) e 'My books' (meus livros) usam o mesmo 'My'.", formula: "I➔My | You➔Your | He➔His | She➔Her | It➔Its | We➔Our | They➔Their", example: "His car (O carro dele). Her car (O carro dela). Their house (A casa deles)." },
        { type: "grammar_pill", title: "Atenção: His vs. Her", rule: "'His' significa DELE (homem). 'Her' significa DELA (mulher). A escolha depende do gênero da pessoa que POSSUI, não do objeto!", formula: "Homem possuidor ➔ His | Mulher possuidora ➔ Her", example: "John and his sister. Maria and her brother." }
    ],
    stage3_practice: [
        { question: "1. Qual possessivo usar para 'Carlos' (dele)?", options: [{ label: "His", isCorrect: true }, { label: "Her", isCorrect: false }, { label: "Their", isCorrect: false }] },
        { question: "2. Qual possessivo usar para 'Maria' (dela)?", options: [{ label: "Her", isCorrect: true }, { label: "His", isCorrect: false }, { label: "Our", isCorrect: false }] },
        { question: "3. Complete: 'We love ___ school.' (Nós amamos a nossa escola)", options: [{ label: "our", isCorrect: true }, { label: "their", isCorrect: false }, { label: "your", isCorrect: false }] },
        { question: "4. Complete: 'They have a dog. ___ dog is cute.'", options: [{ label: "Their", isCorrect: true }, { label: "His", isCorrect: false }, { label: "Our", isCorrect: false }] },
        { question: "5. 'My books' muda o termo 'My' para o plural?", options: [{ label: "Não, continua 'My' igual", isCorrect: true }, { label: "Sim, vira 'Mys'", isCorrect: false }, { label: "Sim, vira 'Mine'", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "This is my car and that is his car.", translation: "Este é o meu carro e aquele é o carro dele.", chunks: ["This", "is", "my", "car", "and", "that", "is", "his", "car", "."] },
        { sentenceEn: "Her brother is our friend.", translation: "O irmão dela é nosso amigo.", chunks: ["Her", "brother", "is", "our", "friend", "."] }
    ],
    stage4_dialog: [
        { npcName: "Paul", npcMessage: "Is this Maria's jacket?", options: [{ text: "Yes, it is her jacket.", isCorrect: true, feedback: "Correto! Maria é mulher, usa-se 'her'." }, { text: "Yes, it is his jacket.", isCorrect: false, feedback: "Maria é mulher, use 'her', não 'his'." }, { text: "Yes, it is my jacket.", isCorrect: false, feedback: "A jaqueta é da Maria, não sua." }] },
        { npcName: "Sandra", npcMessage: "Where is John's house?", options: [{ text: "His house is near the park.", isCorrect: true, feedback: "John é homem, usa-se 'his'." }, { text: "Her house is near the park.", isCorrect: false, feedback: "'Her' é para mulheres." }, { text: "Their house is near the park.", isCorrect: false, feedback: "Estamos falando apenas do John." }] },
        { npcName: "Teacher", npcMessage: "Students, open your books!", options: [{ text: "We are opening our books now.", isCorrect: true, feedback: "'Our' refere-se a 'nós'." }, { text: "We are opening his books.", isCorrect: false, feedback: "Vocês estão abrindo os livros de vocês (our)." }, { text: "We are opening my books.", isCorrect: false, feedback: "Cada um abre o seu!" }] }
    ],
    stage5_quiz: [
        { question: "1. 'His' refere-se a:", options: [{ label: "Ele / Dele (masculino singular)", isCorrect: true }, { label: "Ela / Dela (feminino singular)", isCorrect: false }, { label: "Nós / Nosso", isCorrect: false }] },
        { question: "2. Como se diz 'Nossa casa'?", options: [{ label: "Our house", isCorrect: true }, { label: "Their house", isCorrect: false }, { label: "Your house", isCorrect: false }] },
        { question: "3. Como dizer 'A mãe deles'?", options: [{ label: "Their mother", isCorrect: true }, { label: "His mother", isCorrect: false }, { label: "Our mother", isCorrect: false }] },
        { question: "4. Qual a frase correta?", options: [{ label: "She is playing with her dog", isCorrect: true }, { label: "She is playing with his dog", isCorrect: false }, { label: "She is playing with its dog", isCorrect: false }] },
        { question: "5. Adjetivos possessivos em inglês variam em número (plural)?", options: [{ label: "Falso, nunca mudam no plural", isCorrect: true }, { label: "Verdadeiro, ganham a letra S", isCorrect: false }, { label: "Dependem do verbo", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_09 = {
    id: "en_a1_mod_09",
    title: "Describing People (Adjectives)",
    section: 2,
    sectionTitle: "Family, People & Descriptions",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "He is tall and friendly. She is smart and funny.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda adjetivos fundamentais para descrever a aparência física e a personalidade das pessoas em inglês."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Tall / Short", romaji: "/tɔːl / ʃɔːrt/", translation: "Alto(a) / Baixo(a)", timeContext: "Estatura física." },
        { type: "vocab", kanji: "Friendly / Kind / Smart", romaji: "/ˈfrendli / kaɪnd / smɑːrt/", translation: "Amigável / Gentil / Inteligente", timeContext: "Qualidades de personalidade." },
        { type: "vocab", kanji: "Funny / Quiet / Shy", romaji: "/ˈfʌni / ˈkwaɪət / ʃaɪ/", translation: "Engraçado(a) / Calmo(a) / Tímido(a)", timeContext: "Traços de comportamento." },
        { type: "grammar_pill", title: "Posição do Adjetivo no Inglês", rule: "Adjetivos em inglês vêm SEMPRE ANTES do substantivo que descrevem, ou logo APÓS o verbo To Be! Além disso, adjetivos NUNCA vão para o plural!", formula: "To Be + Adjetivo | Adjetivo + Substantivo", example: "He is tall. (Ele é alto). He is a tall man. (Ele é um homem alto)." },
        { type: "grammar_pill", title: "Invariabilidade dos Adjetivos", rule: "Não existe adjetivo feminino ou plural em inglês. A mesma palavra serve para homem, mulher, singular ou plural!", formula: "Tall = alto, alta, altos, altas", example: "He is tall. She is tall. They are tall." }
    ],
    stage3_practice: [
        { question: "1. Qual é a posição correta do adjetivo na frase?", options: [{ label: "He is an intelligent student", isCorrect: true }, { label: "He is a student intelligent", isCorrect: false }, { label: "He is student intelligent", isCorrect: false }] },
        { question: "2. Como fica a palavra 'tall' para dizer 'Elas são altas'?", options: [{ label: "They are tall", isCorrect: true }, { label: "They are talls", isCorrect: false }, { label: "They are talles", isCorrect: false }] },
        { question: "3. Qual adjetivo significa 'inteligente'?", options: [{ label: "Smart", isCorrect: true }, { label: "Short", isCorrect: false }, { label: "Shy", isCorrect: false }] },
        { question: "4. O oposto de 'tall' (alto) é:", options: [{ label: "Short", isCorrect: true }, { label: "Small", isCorrect: false }, { label: "Kind", isCorrect: false }] },
        { question: "5. 'Friendly' significa:", options: [{ label: "Amigável", isCorrect: true }, { label: "Frio", isCorrect: false }, { label: "Bravo", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "She is a very smart teacher.", translation: "Ela é uma professora muito inteligente.", chunks: ["She", "is", "a", "very", "smart", "teacher", "."] },
        { sentenceEn: "They are friendly and kind.", translation: "Eles são amigáveis e gentis.", chunks: ["They", "are", "friendly", "and", "kind", "."] }
    ],
    stage4_dialog: [
        { npcName: "Julia", npcMessage: "What is your new boss like?", options: [{ text: "He is very kind and smart.", isCorrect: true, feedback: "Uso perfeito dos adjetivos de personalidade." }, { text: "He is a man tall.", isCorrect: false, feedback: "O adjetivo deve vir antes do substantivo: 'a tall man'." }, { text: "He is likes pizza.", isCorrect: false, feedback: "Pergunta 'What is he like?' pede descrição de personalidade." }] },
        { npcName: "Carlos", npcMessage: "Is your sister shy?", options: [{ text: "No, she is very friendly and outgoing.", isCorrect: true, feedback: "Ótimo contraste de adjetivos!" }, { text: "No, she is shys.", isCorrect: false, feedback: "Adjetivo não tem plural nem 's'." }, { text: "No, she are shy.", isCorrect: false, feedback: "'She' exige 'is'." }] },
        { npcName: "Manager", npcMessage: "Are the new employees good?", options: [{ text: "Yes, they are very smart.", isCorrect: true, feedback: "Correto! Adjetivo 'smart' no singular mesmo para 'they'." }, { text: "Yes, they are smarts.", isCorrect: false, feedback: "Adjetivos nunca ganham 's'." }, { text: "Yes, they are a smart.", isCorrect: false, feedback: "Não use 'a' para o plural 'they'." }] }
    ],
    stage5_quiz: [
        { question: "1. Adjetivos em inglês ganham 's' no plural?", options: [{ label: "Não, são invariáveis", isCorrect: true }, { label: "Sim, sempre", isCorrect: false }, { label: "Apenas se forem masculinos", isCorrect: false }] },
        { question: "2. Como traduzir 'Um menino engraçado'?", options: [{ label: "A funny boy", isCorrect: true }, { label: "A boy funny", isCorrect: false }, { label: "An funny boy", isCorrect: false }] },
        { question: "3. 'Shy' significa:", options: [{ label: "Tímido(a)", isCorrect: true }, { label: "Alto(a)", isCorrect: false }, { label: "Feliz", isCorrect: false }] },
        { question: "4. Qual a frase correta?", options: [{ label: "My brothers are tall", isCorrect: true }, { label: "My brothers are talls", isCorrect: false }, { label: "My brothers are a tall", isCorrect: false }] },
        { question: "5. Para descrever o caráter ou personalidade de alguém, perguntamos:", options: [{ label: "What is he like?", isCorrect: true }, { label: "What does he look?", isCorrect: false }, { label: "How is he doing?", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_10 = {
    id: "en_a1_mod_10",
    title: "Feelings & Emotions",
    section: 2,
    sectionTitle: "Family, People & Descriptions",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "How are you today? I am happy. He is tired.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar estados físicos e emocionais (fome, sede, cansaço, felicidade) utilizando o verbo To Be."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Happy / Sad", romaji: "/ˈhæpi / sæd/", translation: "Feliz / Triste", timeContext: "Emoções básicas." },
        { type: "vocab", kanji: "Tired / Sleepy", romaji: "/ˈtaɪərd / ˈsliːpi/", translation: "Cansado(a) / Com sono", timeContext: "Estados físicos." },
        { type: "vocab", kanji: "Hungry / Thirsty", romaji: "/ˈhʌŋɡri / ˈθɜːrsti/", translation: "Com fome / Com sede", timeContext: "Necessidades de alimentação e hidratação." },
        { type: "grammar_pill", title: "Expressando Fome e Sede em Inglês (VERBO TO BE)", rule: "EM INGLÊS NÃO DIZEMOS 'EU TENHO FOME'! Usamos o verbo To Be com os adjetivos 'hungry' (faminto) e 'thirsty' (sedento).", formula: "I am hungry | She is thirsty (NÃO 'I have hunger')", example: "I am hungry ➔ (Estou com fome). He is thirsty ➔ (Ele está com sede)." },
        { type: "grammar_pill", title: "Pergunta de Estado: How are you?", rule: "Para perguntar como alguém está se sentindo no momento, usamos 'How are you?' ou 'How is he/she?'.", formula: "How are you? ➔ I am + [Sentimento/Estado]", example: "How are you? ➔ I am tired today." }
    ],
    stage3_practice: [
        { question: "1. Como dizer 'Estou com fome' em inglês?", options: [{ label: "I am hungry", isCorrect: true }, { label: "I have hunger", isCorrect: false }, { label: "I am hunger", isCorrect: false }] },
        { question: "2. Como se diz 'Estou com sede'?", options: [{ label: "I am thirsty", isCorrect: true }, { label: "I have thirst", isCorrect: false }, { label: "I am thursty", isCorrect: false }] },
        { question: "3. Qual adjetivo significa 'cansado'?", options: [{ label: "Tired", isCorrect: true }, { label: "Sad", isCorrect: false }, { label: "Angry", isCorrect: false }] },
        { question: "4. Como perguntar 'Como você está?'", options: [{ label: "How are you?", isCorrect: true }, { label: "How do you do?", isCorrect: false }, { label: "What are you?", isCorrect: false }] },
        { question: "5. 'She is sleepy' significa:", options: [{ label: "Ela está com sono", isCorrect: true }, { label: "Ela está triste", isCorrect: false }, { label: "Ela está com fome", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I am very tired and hungry.", translation: "Estou muito cansado e com fome.", chunks: ["I", "am", "very", "tired", "and", "hungry", "."] },
        { sentenceEn: "Why is he sad today?", translation: "Por que ele está triste hoje?", chunks: ["Why", "is", "he", "sad", "today", "?"] }
    ],
    stage4_dialog: [
        { npcName: "Doctor", npcMessage: "Hello! How are you feeling today?", options: [{ text: "I am very tired and I have a headache.", isCorrect: true, feedback: "Descrição clara e precisa de estado físico." }, { text: "I have hungry.", isCorrect: false, feedback: "Não use 'have' para fome, use 'I am hungry'." }, { text: "I am water.", isCorrect: false, feedback: "Isso significa 'Eu sou água'!" }] },
        { npcName: "Waiter", npcMessage: "Are you ready to order?", options: [{ text: "Yes, I am very hungry! Pizza, please.", isCorrect: true, feedback: "Resposta natural e perfeita." }, { text: "Yes, I have hungry.", isCorrect: false, feedback: "Lembre-se: 'I am hungry'." }, { text: "No, I am sleep.", isCorrect: false, feedback: "O adjetivo correto é 'sleepy'." }] },
        { npcName: "Mom", npcMessage: "Are the children thirsty after the game?", options: [{ text: "Yes, they are very thirsty. Water, please!", isCorrect: true, feedback: "Uso correto do verbo To Be com 'they'." }, { text: "Yes, they have thirsty.", isCorrect: false, feedback: "Use 'they are thirsty'." }, { text: "Yes, they is thirsty.", isCorrect: false, feedback: "'They' exige 'are'." }] }
    ],
    stage5_quiz: [
        { question: "1. Para expressar fome ou sede em inglês usamos:", options: [{ label: "Verbo To Be (Am/Is/Are)", isCorrect: true }, { label: "Verbo To Have", isCorrect: false }, { label: "Verbo To Do", isCorrect: false }] },
        { question: "2. 'Hungry' refere-se a:", options: [{ label: "Fome / Alimentação", isCorrect: true }, { label: "Sede / Água", isCorrect: false }, { label: "Raiva / Nervosismo", isCorrect: false }] },
        { question: "3. 'Thirsty' refere-se a:", options: [{ label: "Sede / Bebida", isCorrect: true }, { label: "Sono / Cama", isCorrect: false }, { label: "Tristeza", isCorrect: false }] },
        { question: "4. Traduza: 'Nós estamos felizes'.", options: [{ label: "We are happy", isCorrect: true }, { label: "We have happy", isCorrect: false }, { label: "We is happy", isCorrect: false }] },
        { question: "5. 'He is tired' significa:", options: [{ label: "Ele está cansado", isCorrect: true }, { label: "Ele está com fome", isCorrect: false }, { label: "Ele é tímido", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 3: OBJECTS, PLACES & LOCATION (MÓDULOS 11 A 15)
// ------------------------------------------

const MODULO_EN_A1_11 = {
    id: "en_a1_mod_11",
    title: "Demonstratives (This, That, These, Those)",
    section: 3,
    sectionTitle: "Objects, Places & Location",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "What is this? This is a book. What are those? Those are shoes.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a apontar e identificar objetos perto e longe de você no singular e no plural usando pronomes demonstrativos."
    },
    stage2_drops: [
        { type: "vocab", kanji: "This / That", romaji: "/ðɪs / ðæt/", translation: "Este(a) (perto) / Aquele(a) (longe)", timeContext: "Demonstrativos no Singular." },
        { type: "vocab", kanji: "These / Those", romaji: "/ðiːz / ðoʊz/", translation: "Estes(as) (perto) / Aqueles(as) (longe)", timeContext: "Demonstrativos no Plural." },
        { type: "vocab", kanji: "What is this?", romaji: "/wɒt ɪz ðɪs/", translation: "O que é isto?", timeContext: "Pergunta para identificar objeto perto no singular." },
        { type: "grammar_pill", title: "Matriz dos Pronomes Demonstrativos", rule: "Perto + Singular ➔ THIS | Longe + Singular ➔ THAT | Perto + Plural ➔ THESE | Longe + Plural ➔ THOSE.", formula: "THIS/THAT + IS (singular) | THESE/THOSE + ARE (plural)", example: "This is a key. That is a car. These are keys. Those are cars." },
        { type: "grammar_pill", title: "Concordância do Verbo To Be com Demonstrativos", rule: "Use 'IS' com THIS e THAT. Use 'ARE' com THESE e THOSE.", formula: "This is... / That is... vs. These are... / Those are...", example: "This is my pen. Those are my books." }
    ],
    stage3_practice: [
        { question: "1. Qual demonstrativo usar para UM objeto que está PERTO de você?", options: [{ label: "This", isCorrect: true }, { label: "That", isCorrect: false }, { label: "These", isCorrect: false }] },
        { question: "2. Qual demonstrativo usar para VÁRIOS objetos que estão LONGE de você?", options: [{ label: "Those", isCorrect: true }, { label: "These", isCorrect: false }, { label: "This", isCorrect: false }] },
        { question: "3. Complete: '___ are my keys in my hand.'", options: [{ label: "These", isCorrect: true }, { label: "That", isCorrect: false }, { label: "This", isCorrect: false }] },
        { question: "4. Complete: '___ is a plane in the sky.'", options: [{ label: "That", isCorrect: true }, { label: "These", isCorrect: false }, { label: "This", isCorrect: false }] },
        { question: "5. Qual frase está gramaticalmente CORRETA?", options: [{ label: "These is my books", isCorrect: false }, { label: "These are my books", isCorrect: true }, { label: "This are my books", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "This is my new phone.", translation: "Este é o meu telefone novo.", chunks: ["This", "is", "my", "new", "phone", "."] },
        { sentenceEn: "Those are expensive cars over there.", translation: "Aqueles são carros caros logo ali.", chunks: ["Those", "are", "expensive", "cars", "over", "there", "."] }
    ],
    stage4_dialog: [
        { npcName: "Shop Assistant", npcMessage: "Can I help you?", options: [{ text: "Yes, how much is this shirt?", isCorrect: true, feedback: "Uso correto de 'this' para camisa perto no singular." }, { text: "Yes, how much is these shirt?", isCorrect: false, feedback: "Shirt no singular exige 'this'." }, { text: "Yes, how much are this shirt?", isCorrect: false, feedback: "'This' exige 'is'." }] },
        { npcName: "Tourist", npcMessage: "What is that building over there?", options: [{ text: "That is the museum.", isCorrect: true, feedback: "Correto! Objeto longe no singular usa 'that'." }, { text: "Those is the museum.", isCorrect: false, feedback: "Museum é singular, use 'that'." }, { text: "These are the museum.", isCorrect: false, feedback: "Plural e perto incorretos." }] },
        { npcName: "Friend", npcMessage: "Are these your glasses on the table?", options: [{ text: "Yes, those are my glasses. Thanks!", isCorrect: true, feedback: "Resposta perfeita para óculos (plural)." }, { text: "Yes, this is my glasses.", isCorrect: false, feedback: "Glasses é contado como plural (these/those)." }, { text: "Yes, that is my glasses.", isCorrect: false, feedback: "Uso incorreto do singular." }] }
    ],
    stage5_quiz: [
        { question: "1. 'THIS' é usado no:", options: [{ label: "Singular para coisas perto", isCorrect: true }, { label: "Plural para coisas longe", isCorrect: false }, { label: "Plural para coisas perto", isCorrect: false }] },
        { question: "2. 'THOSE' é usado no:", options: [{ label: "Plural para coisas longe", isCorrect: true }, { label: "Singular para coisas perto", isCorrect: false }, { label: "Singular para coisas longe", isCorrect: false }] },
        { question: "3. Complete: 'What are ___ over there?'", options: [{ label: "those", isCorrect: true }, { label: "this", isCorrect: false }, { label: "this is", isCorrect: false }] },
        { question: "4. Qual opção completa: '___ is my best friend Peter.'", options: [{ label: "This", isCorrect: true }, { label: "These", isCorrect: false }, { label: "Those", isCorrect: false }] },
        { question: "5. 'These' pronuncia-se com som de 'e' longo:", options: [{ label: "Verdadeiro /ðiːz/", isCorrect: true }, { label: "Falso", isCorrect: false }, { label: "Não tem pronúncia", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_12 = {
    id: "en_a1_mod_12",
    title: "Everyday Objects & Belongings",
    section: 3,
    sectionTitle: "Objects, Places & Location",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Where is my key? Where are my glasses? I have a bag.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda o vocabulário dos objetos pessoais do dia a dia e como indicar pertencimento e localização simples."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Key / Wallet / Purse", romaji: "/kiː / ˈwɒlɪt / pɜːrs/", translation: "Chave / Carteira (masc/geral) / Bolsa", timeContext: "Pertences diários." },
        { type: "vocab", kanji: "Phone / Laptop / Backpack", romaji: "/fəʊn / ˈlæptɒp / ˈbækpæk/", translation: "Telefone / Notebook / Mochila", timeContext: "Eletrônicos e acessórios." },
        { type: "vocab", kanji: "Glasses / Watch / Passport", romaji: "/ˈɡlɑːsɪz / wɒtʃ / ˈpɑːspɔːt/", translation: "Óculos / Relógio de pulso / Passaporte", timeContext: "Documentos e utilitários." },
        { type: "grammar_pill", title: "Plural dos Substantivos Regulares", rule: "A maioria dos substantivos em inglês forma o plural adicionando 'S'. Se terminar em s, ch, sh, x, z, adiciona-se 'ES'.", formula: "Singular + S / ES", example: "Key ➔ Keys | Watch ➔ Watches | Wallet ➔ Wallets" },
        { type: "grammar_pill", title: "Palavras Sempre no Plural (Glasses, Clothes)", rule: "Algumas palavras como 'glasses' (óculos) ou 'pants' (calças) são consideradas plurais e exigem verbo no plural ('are').", formula: "Glasses + ARE | Pants + ARE", example: "Where are my glasses? (NÃO 'Where is my glasses?')." }
    ],
    stage3_practice: [
        { question: "1. Como fica o plural de 'watch' (relógio)?", options: [{ label: "watches", isCorrect: true }, { label: "watchs", isCorrect: false }, { label: "watchies", isCorrect: false }] },
        { question: "2. Qual pergunta está correta para procurar os óculos?", options: [{ label: "Where are my glasses?", isCorrect: true }, { label: "Where is my glasses?", isCorrect: false }, { label: "Where am my glasses?", isCorrect: false }] },
        { question: "3. 'Wallet' significa:", options: [{ label: "Carteira", isCorrect: true }, { label: "Mala", isCorrect: false }, { label: "Relógio", isCorrect: false }] },
        { question: "4. Qual palavra significa 'mochila'?", options: [{ label: "Backpack", isCorrect: true }, { label: "Purse", isCorrect: false }, { label: "Laptop", isCorrect: false }] },
        { question: "5. Complete: 'I lost my ___. I can't open the door.'", options: [{ label: "keys", isCorrect: true }, { label: "watch", isCorrect: false }, { label: "laptop", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Where is my wallet and my phone?", translation: "Onde está minha carteira e meu telefone?", chunks: ["Where", "is", "my", "wallet", "and", "my", "phone", "?"] },
        { sentenceEn: "Her keys are in the backpack.", translation: "As chaves dela estão na mochila.", chunks: ["Her", "keys", "are", "in", "the", "backpack", "."] }
    ],
    stage4_dialog: [
        { npcName: "Security Guard", npcMessage: "Please open your bag for inspection.", options: [{ text: "Sure, I have a laptop and my passport inside.", isCorrect: true, feedback: "Excelente vocabulário de objetos!" }, { text: "Sure, I am a laptop.", isCorrect: false, feedback: "Você não é um laptop!" }, { text: "Sure, where is key?", isCorrect: false, feedback: "Sem nexo." }] },
        { npcName: "Friend", npcMessage: "Where are your car keys?", options: [{ text: "They are on the kitchen table.", isCorrect: true, feedback: "'They' para substituir 'keys' (plural)." }, { text: "It is on the table.", isCorrect: false, feedback: "Keys é plural, use 'they are'." }, { text: "He is on the table.", isCorrect: false, feedback: "'He' é para homens." }] },
        { npcName: "Passerby", npcMessage: "Is this watch yours?", options: [{ text: "Yes, that is my watch! Thank you!", isCorrect: true, feedback: "Resposta perfeita." }, { text: "Yes, these are my watch.", isCorrect: false, feedback: "Watch no singular exige 'this/that'." }, { text: "Yes, it am my watch.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. Como se diz 'passaporte' em inglês?", options: [{ label: "passport", isCorrect: true }, { label: "passcard", isCorrect: false }, { label: "passbook", isCorrect: false }] },
        { question: "2. O plural de 'key' é:", options: [{ label: "keys", isCorrect: true }, { label: "keyes", isCorrect: false }, { label: "keies", isCorrect: false }] },
        { question: "3. 'Where are my glasses?' usa 'are' porque:", options: [{ label: "Glasses é um substantivo plural", isCorrect: true }, { label: "Está no passado", isCorrect: false }, { label: "É uma pergunta informal", isCorrect: false }] },
        { question: "4. Qual objeto usamos para ver as horas no pulso?", options: [{ label: "Watch", isCorrect: true }, { label: "Clock", isCorrect: false }, { label: "Phone", isCorrect: false }] },
        { question: "5. Como traduzir 'minha carteira'?", options: [{ label: "My wallet", isCorrect: true }, { label: "My bag", isCorrect: false }, { label: "My keys", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_13 = {
    id: "en_a1_mod_13",
    title: "There is / There are (Existence)",
    section: 3,
    sectionTitle: "Objects, Places & Location",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "There is a book on the table. There are three chairs in the room.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a expressar a existência de coisas (haver/existir) usando 'There is' (singular) e 'There are' (plural)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "There is...", romaji: "/ðeər ɪz/", translation: "Há / Existe (singular)", timeContext: "Usado para 1 objeto ou pessoa." },
        { type: "vocab", kanji: "There are...", romaji: "/ðeər ɑːr/", translation: "Há / Existem (plural)", timeContext: "Usado para 2 ou mais objetos ou pessoas." },
        { type: "vocab", kanji: "Is there...? / Are there...?", romaji: "/ɪz ðeər / ɑːr ðeər/", translation: "Há...? / Existem...?", timeContext: "Forma interrogativa." },
        { type: "grammar_pill", title: "Diferença Fundamental: There is vs. Have", rule: "EM INGLÊS NÃO SE USA O VERBO 'HAVE' PARA INDICAR EXISTÊNCIA! O verbo 'Have' indica POSSE. Para dizer 'Há um livro', use 'THERE IS a book', nunca 'Has a book'!", formula: "Existence ➔ There is / There are | Possession ➔ I have / You have", example: "There is a car in the garage (Há um carro). I have a car (Eu tenho um carro)." },
        { type: "grammar_pill", title: "Forma Negativa: There isn't / There aren't", rule: "Para negar a existência, adicione 'not': There is not (There isn't) ou There are not (There aren't).", formula: "There isn't + singular | There aren't + plural", example: "There isn't any milk. There aren't any cars." }
    ],
    stage3_practice: [
        { question: "1. Como dizer 'Há um livro sobre a mesa'?", options: [{ label: "There is a book on the table", isCorrect: true }, { label: "Has a book on the table", isCorrect: false }, { label: "Have a book on the table", isCorrect: false }] },
        { question: "2. Como dizer 'Existem 5 alunos na sala'?", options: [{ label: "There are 5 students in the room", isCorrect: true }, { label: "There is 5 students in the room", isCorrect: false }, { label: "Has 5 students in the room", isCorrect: false }] },
        { question: "3. Qual a pergunta correta para saber se há um caixa eletrônico por perto?", options: [{ label: "Is there an ATM nearby?", isCorrect: true }, { label: "Has an ATM nearby?", isCorrect: false }, { label: "Are there an ATM nearby?", isCorrect: false }] },
        { question: "4. Complete a negação plural: 'There ___ any seats left.'", options: [{ label: "aren't", isCorrect: true }, { label: "isn't", isCorrect: false }, { label: "hasn't", isCorrect: false }] },
        { question: "5. Qual frase é a ÚNICA gramaticalmente correta?", options: [{ label: "There is a computer on the desk", isCorrect: true }, { label: "Have a computer on the desk", isCorrect: false }, { label: "Has a computer on the desk", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "There is a park near my house.", translation: "Há um parque perto da minha casa.", chunks: ["There", "is", "a", "park", "near", "my", "house", "."] },
        { sentenceEn: "Are there any questions?", translation: "Há alguma dúvida / pergunta?", chunks: ["Are", "there", "any", "questions", "?"] }
    ],
    stage4_dialog: [
        { npcName: "Hotel Receptionist", npcMessage: "Welcome! How can I help you?", options: [{ text: "Is there a swimming pool in the hotel?", isCorrect: true, feedback: "Pergunta correta com 'Is there'." }, { text: "Has a swimming pool in the hotel?", isCorrect: false, feedback: "Nunca use 'has' para haver/existir!" }, { text: "Are there a swimming pool?", isCorrect: false, feedback: "'A swimming pool' é singular, use 'Is there'." }] },
        { npcName: "Tourist", npcMessage: "Excuse me, are there any good restaurants near here?", options: [{ text: "Yes, there are three great restaurants on this street.", isCorrect: true, feedback: "Resposta perfeita no plural com 'there are'." }, { text: "Yes, has three great restaurants.", isCorrect: false, feedback: "Erro com o verbo 'has'." }, { text: "Yes, there is three great restaurants.", isCorrect: false, feedback: "Três restaurantes é plural, use 'there are'." }] },
        { npcName: "Roommate", npcMessage: "Is there any milk in the fridge?", options: [{ text: "No, there isn't any milk left.", isCorrect: true, feedback: "Negação no singular exata." }, { text: "No, has no milk.", isCorrect: false, feedback: "Incorreto." }, { text: "No, there aren't milk.", isCorrect: false, feedback: "Leite (milk) é incontável, usa-se 'isn't'." }] }
    ],
    stage5_quiz: [
        { question: "1. Para dizer 'Existe um problema', usamos:", options: [{ label: "There is a problem", isCorrect: true }, { label: "Has a problem", isCorrect: false }, { label: "Have a problem", isCorrect: false }] },
        { question: "2. Para dizer 'Existem muitos carros', usamos:", options: [{ label: "There are many cars", isCorrect: true }, { label: "There is many cars", isCorrect: false }, { label: "Has many cars", isCorrect: false }] },
        { question: "3. Qual é a contração de 'There is not'?", options: [{ label: "There isn't", isCorrect: true }, { label: "There don't", isCorrect: false }, { label: "There haven't", isCorrect: false }] },
        { question: "4. Na forma interrogativa singular, a ordem é:", options: [{ label: "Is there...?", isCorrect: true }, { label: "There is...?", isCorrect: false }, { label: "Does there...?", isCorrect: false }] },
        { question: "5. 'There are two dogs in the yard' significa:", options: [{ label: "Há dois cachorros no quintal", isCorrect: true }, { label: "Eu tenho dois cachorros no quintal", isCorrect: false }, { label: "Dois cachorros têm quintal", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_14 = {
    id: "en_a1_mod_14",
    title: "Rooms & Furniture in the House",
    section: 3,
    sectionTitle: "Objects, Places & Location",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "My house has a living room, a kitchen, and two bedrooms.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda os cômodos da casa e os principais móveis e eletrodomésticos em inglês."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Living room / Bedroom / Bathroom", romaji: "/ˈlɪvɪŋ ruːm / ˈbedruːm / ˈbɑːθruːm/", translation: "Sala de estar / Quarto / Banheiro", timeContext: "Cômodos principais." },
        { type: "vocab", kanji: "Kitchen / Dining room / Garden", romaji: "/ˈkɪtʃɪn / ˈdaɪnɪŋ ruːm / ˈɡɑːrdn/", translation: "Cozinha / Sala de jantar / Jardim", timeContext: "Áreas comuns." },
        { type: "vocab", kanji: "Bed / Sofa / Desk / Fridge", romaji: "/bed / ˈsoʊfə / desk / frɪdʒ/", translation: "Cama / Sofá / Escrivaninha / Geladeira", timeContext: "Móveis e utensílios." },
        { type: "grammar_pill", title: "Verbo HAVE para Cômodos (Possuir)", rule: "Para descrever o que a casa possui, usamos o verbo 'Have' (para I/You/We/They) ou 'Has' (para He/She/It - inclusive 'my house').", formula: "My house + HAS + [cômodos]", example: "My house has three bedrooms. (Minha casa tem três quartos)." },
        { type: "grammar_pill", title: "Uso de IN para Cômodos", rule: "Para dizer que algo está 'dentro' de um cômodo, usamos a preposição 'IN'.", formula: "Object + is/are + IN + the + [cômodo]", example: "The TV is in the living room. The bed is in the bedroom." }
    ],
    stage3_practice: [
        { question: "1. Como se diz 'cozinha' em inglês?", options: [{ label: "Kitchen", isCorrect: true }, { label: "Chicken", isCorrect: false }, { label: "Bedroom", isCorrect: false }] },
        { question: "2. Onde fica a geladeira (fridge) normalmente?", options: [{ label: "In the kitchen", isCorrect: true }, { label: "In the bathroom", isCorrect: false }, { label: "In the garden", isCorrect: false }] },
        { question: "3. Complete com Have/Has: 'My apartment ___ two bathrooms.'", options: [{ label: "has", isCorrect: true }, { label: "have", isCorrect: false }, { label: "is", isCorrect: false }] },
        { question: "4. Qual móvel fica no quarto (bedroom)?", options: [{ label: "Bed", isCorrect: true }, { label: "Fridge", isCorrect: false }, { label: "Stove", isCorrect: false }] },
        { question: "5. 'Living room' significa:", options: [{ label: "Sala de estar", isCorrect: true }, { label: "Quarto de casal", isCorrect: false }, { label: "Cozinha americana", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "The sofa is in the living room.", translation: "O sofá está na sala de estar.", chunks: ["The", "sofa", "is", "in", "the", "living", "room", "."] },
        { sentenceEn: "My house has a big garden.", translation: "Minha casa tem um jardim grande.", chunks: ["My", "house", "has", "a", "big", "garden", "."] }
    ],
    stage4_dialog: [
        { npcName: "Real Estate Agent", npcMessage: "Welcome! This is a lovely apartment. How many bedrooms do you need?", options: [{ text: "I need an apartment with two bedrooms.", isCorrect: true, feedback: "Excelente pedido de imóvel!" }, { text: "I need two kitchens in bedroom.", isCorrect: false, feedback: "Cozinha no quarto?" }, { text: "I am a bedroom.", isCorrect: false, feedback: "Você não é um quarto!" }] },
        { npcName: "Friend", npcMessage: "Where is the bathroom, please?", options: [{ text: "It is down the hall on the left.", isCorrect: true, feedback: "Indicação perfeita de cômodo." }, { text: "The bathroom is a fridge.", isCorrect: false, feedback: "Incoerente." }, { text: "Yes, I have a bathroom.", isCorrect: false, feedback: "Ele perguntou ONDE fica o banheiro." }] },
        { npcName: "Guest", npcMessage: "Your house is beautiful! Where can I sit?", options: [{ text: "You can sit on the sofa in the living room.", isCorrect: true, feedback: "Convite natural e correto." }, { text: "You can sit in the fridge.", isCorrect: false, feedback: "Ninguém senta na geladeira!" }, { text: "Sit on bedroom.", isCorrect: false, feedback: "Preposição e móvel incorretos." }] }
    ],
    stage5_quiz: [
        { question: "1. Qual a diferença entre 'Kitchen' e 'Chicken'?", options: [{ label: "Kitchen é cozinha e Chicken é frango", isCorrect: true }, { label: "Kitchen é frango e Chicken é cozinha", isCorrect: false }, { label: "São a mesma palavra", isCorrect: false }] },
        { question: "2. Como traduzir 'banheiro'?", options: [{ label: "Bathroom", isCorrect: true }, { label: "Bedroom", isCorrect: false }, { label: "Living room", isCorrect: false }] },
        { question: "3. 'My house HAS a garage' usa 'has' porque:", options: [{ label: "My house equivale ao pronome 'It' (3ª pessoa singular)", isCorrect: true }, { label: "É uma pergunta", isCorrect: false }, { label: "Está no plural", isCorrect: false }] },
        { question: "4. Qual item fica na cozinha?", options: [{ label: "Fridge", isCorrect: true }, { label: "Sofa", isCorrect: false }, { label: "Bed", isCorrect: false }] },
        { question: "5. 'Dining room' é:", options: [{ label: "Sala de jantar", isCorrect: true }, { label: "Quarto de hóspedes", isCorrect: false }, { label: "Varanda", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_15 = {
    id: "en_a1_mod_15",
    title: "Prepositions of Place (In, On, Under, Next to)",
    section: 3,
    sectionTitle: "Objects, Places & Location",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "The book is on the table. The cat is under the bed.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a indicar a posição exata de objetos no espaço utilizando as preposições de lugar essenciais."
    },
    stage2_drops: [
        { type: "vocab", kanji: "In / On / Under", romaji: "/ɪn / ɒn / ˈʌndər/", translation: "Dentro de / Em cima de (com contato) / Embaixo de", timeContext: "Preposições de posição física." },
        { type: "vocab", kanji: "Next to / Between / Behind", romaji: "/nekst tuː / bɪˈtwiːn / bɪˈhaɪnd/", translation: "Ao lado de / Entre (dois) / Atrás de", timeContext: "Relações de vizinhança espacial." },
        { type: "vocab", kanji: "In front of", romaji: "/ɪn frʌnt əv/", translation: "Na frente de", timeContext: "Posição frontal." },
        { type: "grammar_pill", title: "Diferença Crítica: IN vs. ON", rule: "'IN' significa dentro de um recipiente, caixa, sala ou espaço fechado. 'ON' significa em cima de uma superfície com contato físico (mesa, parede, chão).", formula: "IN + espaço fechado | ON + superfície", example: "In the box (Dentro da caixa). On the table (Em cima da mesa). On the wall (Na parede)." },
        { type: "grammar_pill", title: "Estrutura da Pergunta de Localização: Where is / Where are", rule: "Para perguntar onde está algo, use 'Where is + singular' ou 'Where are + plural'.", formula: "Where is + [Objeto Singular]? | Where are + [Objetos Plurais]?", example: "Where is my key? It is on the desk. Where are my shoes? They are under the bed." }
    ],
    stage3_practice: [
        { question: "1. O livro está em cima da mesa (com contato). Qual preposição usar?", options: [{ label: "on", isCorrect: true }, { label: "in", isCorrect: false }, { label: "under", isCorrect: false }] },
        { question: "2. As chaves estão dentro da gaveta (drawer). Qual preposição usar?", options: [{ label: "in", isCorrect: true }, { label: "on", isCorrect: false }, { label: "next to", isCorrect: false }] },
        { question: "3. O gato está debaixo da cama. Qual preposição usar?", options: [{ label: "under", isCorrect: true }, { label: "on", isCorrect: false }, { label: "between", isCorrect: false }] },
        { question: "4. A farmácia fica ao lado do banco. Como se diz 'ao lado de'?", options: [{ label: "next to", isCorrect: true }, { label: "under", isCorrect: false }, { label: "in", isCorrect: false }] },
        { question: "5. O carro está entre duas árvores. Qual preposição usar?", options: [{ label: "between", isCorrect: true }, { label: "behind", isCorrect: false }, { label: "in front of", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "My phone is on the table.", translation: "Meu telefone está em cima da mesa.", chunks: ["My", "phone", "is", "on", "the", "table", "."] },
        { sentenceEn: "The bank is next to the supermarket.", translation: "O banco é ao lado do supermercado.", chunks: ["The", "bank", "is", "next", "to", "the", "supermarket", "."] }
    ],
    stage4_dialog: [
        { npcName: "Father", npcMessage: "Where are my glasses?", options: [{ text: "They are on the desk next to your computer.", isCorrect: true, feedback: "Uso perfeito de 'on' e 'next to'." }, { text: "They are under the sky.", isCorrect: false, feedback: "Sem sentido." }, { text: "It is in the table.", isCorrect: false, feedback: "Glasses é plural e mesa é superfície (on)." }] },
        { npcName: "Child", npcMessage: "Where is my ball?", options: [{ text: "It is under the sofa in the living room.", isCorrect: true, feedback: "Excelente indicação de posição!" }, { text: "It is between the sofa.", isCorrect: false, feedback: "Between exige dois objetos (ex: between sofa and chair)." }, { text: "It are on the sofa.", isCorrect: false, feedback: "Ball é singular, use 'is'." }] },
        { npcName: "Tourist", npcMessage: "Excuse me, where is the pharmacy?", options: [{ text: "It is next to the big hotel.", isCorrect: true, feedback: "Indicação correta com 'next to'." }, { text: "It is in to the hotel.", isCorrect: false, feedback: "Incorreto." }, { text: "It is under the hotel.", isCorrect: false, feedback: "A farmácia não fica debaixo da terra!" }] }
    ],
    stage5_quiz: [
        { question: "1. 'On the table' significa:", options: [{ label: "Em cima da mesa", isCorrect: true }, { label: "Embaixo da mesa", isCorrect: false }, { label: "Atrás da mesa", isCorrect: false }] },
        { question: "2. 'In the room' significa:", options: [{ label: "Dentro do quarto/sala", isCorrect: true }, { label: "Em cima do quarto", isCorrect: false }, { label: "Ao lado do quarto", isCorrect: false }] },
        { question: "3. 'Under the bed' significa:", options: [{ label: "Embaixo da cama", isCorrect: true }, { label: "Em cima da cama", isCorrect: false }, { label: "Na frente da cama", isCorrect: false }] },
        { question: "4. 'Between' é usado para algo situado:", options: [{ label: "Entre dois objetos ou pontos", isCorrect: true }, { label: "Dentro de uma caixa", isCorrect: false }, { label: "Em cima do teto", isCorrect: false }] },
        { question: "5. 'Behind' significa:", options: [{ label: "Atrás de", isCorrect: true }, { label: "Na frente de", isCorrect: false }, { label: "Ao lado de", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 4: DAILY ROUTINE & PRESENT SIMPLE (MÓDULOS 16 A 20)
// ------------------------------------------

const MODULO_EN_A1_16 = {
    id: "en_a1_mod_16",
    title: "Telling the Time",
    section: 4,
    sectionTitle: "Daily Routine & Present Simple",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "What time is it? It is seven o'clock. It is half past eight.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a perguntar e informar as horas em inglês com precisão."
    },
    stage2_drops: [
        { type: "vocab", kanji: "What time is it?", romaji: "/wɒt taɪm ɪz ɪt/", translation: "Que horas são?", timeContext: "Pergunta padrão sobre o horário." },
        { type: "vocab", kanji: "O'clock", romaji: "/əˈklɒk/", translation: "Em ponto (ex: 7 o'clock = 07:00)", timeContext: "Horas exatas sem minutos." },
        { type: "vocab", kanji: "Half past / Quarter past", romaji: "/hɑːf pɑːst / ˈkwɔːrtər pɑːst/", translation: "E meia (:30) / E quinze (:15)", timeContext: "Fração de horas." },
        { type: "grammar_pill", title: "Estrutura para Dizer as Horas (It is...)", rule: "EM INGLÊS AS HORAS SÃO SEMPRE SINGULAR ('IT IS')! Nunca diga 'They are 7 hours'. Diga 'It is 7 o'clock'.", formula: "It is + [Hora] + (o'clock / minutos)", example: "It is 8:00 (It is eight o'clock). It is 8:30 (It is eight thirty / half past eight)." },
        { type: "grammar_pill", title: "Preposição AT para Horários Marcados", rule: "Para dizer que um evento acontece em um determinado horário, use a preposição 'AT'.", formula: "AT + [Horário]", example: "The class is AT 9 o'clock. I wake up AT 7:00." }
    ],
    stage3_practice: [
        { question: "1. Como perguntar 'Que horas são?' em inglês?", options: [{ label: "What time is it?", isCorrect: true }, { label: "What hours are there?", isCorrect: false }, { label: "Which time is?", isCorrect: false }] },
        { question: "2. Como dizer 'São 7 horas em ponto'?", options: [{ label: "It is seven o'clock", isCorrect: true }, { label: "They are seven hours", isCorrect: false }, { label: "Is seven clock", isCorrect: false }] },
        { question: "3. Qual preposição usar antes de um horário: 'The movie is ___ 8:00'?", options: [{ label: "at", isCorrect: true }, { label: "on", isCorrect: false }, { label: "in", isCorrect: false }] },
        { question: "4. 'Half past ten' significa:", options: [{ label: "10:30", isCorrect: true }, { label: "10:15", isCorrect: false }, { label: "09:30", isCorrect: false }] },
        { question: "5. Como dizer 9:15 em formato de fração de hora?", options: [{ label: "A quarter past nine", isCorrect: true }, { label: "Half past nine", isCorrect: false }, { label: "Nine o'clock quarter", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "What time is the meeting?", translation: "Que horas é a reunião?", chunks: ["What", "time", "is", "the", "meeting", "?"] },
        { sentenceEn: "The flight is at half past ten.", translation: "O voo é às dez e meia.", chunks: ["The", "flight", "is", "at", "half", "past", "ten", "."] }
    ],
    stage4_dialog: [
        { npcName: "Passerby", npcMessage: "Excuse me, do you have the time?", options: [{ text: "Yes, it is half past three (3:30).", isCorrect: true, feedback: "Excelente resposta informando as horas!" }, { text: "Yes, I have two watches.", isCorrect: false, feedback: "A pessoa pediu as horas, não se você tem relógios." }, { text: "It are 3 hours.", isCorrect: false, feedback: "Para horas usa-se 'It is'." }] },
        { npcName: "Colleague", npcMessage: "What time is the concert tonight?", options: [{ text: "It is at 9 o'clock.", isCorrect: true, feedback: "Uso correto da preposição 'at'." }, { text: "It is in 9 o'clock.", isCorrect: false, feedback: "Para horários exatos usa-se 'at'." }, { text: "They are 9 o'clock.", isCorrect: false, feedback: "Horas não usa 'they are'." }] },
        { npcName: "Student", npcMessage: "What time does the lesson start?", options: [{ text: "It starts at 8:00 AM.", isCorrect: true, feedback: "Perfeito!" }, { text: "It starts on 8:00 AM.", isCorrect: false, feedback: "Usar 'at'." }, { text: "Is 8:00 AM.", isCorrect: false, feedback: "Falta o sujeito 'It'." }] }
    ],
    stage5_quiz: [
        { question: "1. A expressão 'o'clock' é usada para:", options: [{ label: "Horas exatas sem minutos", isCorrect: true }, { label: "Meia hora", isCorrect: false }, { label: "Quinze minutos", isCorrect: false }] },
        { question: "2. Qual preposição se usa antes de horários (ex: 5:00)?", options: [{ label: "At", isCorrect: true }, { label: "In", isCorrect: false }, { label: "On", isCorrect: false }] },
        { question: "3. 'Quarter past eight' é:", options: [{ label: "08:15", isCorrect: true }, { label: "08:30", isCorrect: false }, { label: "07:45", isCorrect: false }] },
        { question: "4. Em inglês dizemos 'São 3 horas' usando:", options: [{ label: "It is three o'clock", isCorrect: true }, { label: "They are three hours", isCorrect: false }, { label: "Is three o'clock", isCorrect: false }] },
        { question: "5. 'PM' indica o período:", options: [{ label: "Do meio-dia à meia-noite", isCorrect: true }, { label: "Da meia-noite ao meio-dia", isCorrect: false }, { label: "Apenas da madrugada", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_17 = {
    id: "en_a1_mod_17",
    title: "Days of the Week & Months",
    section: 4,
    sectionTitle: "Daily Routine & Present Simple",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Today is Monday. My birthday is in May.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda os dias da semana, meses do ano e as regras das preposições 'ON' e 'IN' para datas."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Days of the Week", romaji: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday", translation: "Segunda a Domingo", timeContext: "Dias da semana (Sempre com maiúscula!)." },
        { type: "vocab", kanji: "Months of the Year", romaji: "January, February, March, April, May, June...", translation: "Janeiro a Dezembro", timeContext: "Meses do ano (Sempre com maiúscula!)." },
        { type: "vocab", kanji: "When is your birthday?", romaji: "/wen ɪz jɔːr ˈbɜːrθdeɪ/", translation: "Quando é seu aniversário?", timeContext: "Pergunta sobre data de nascimento." },
        { type: "grammar_pill", title: "Regra das Preposições de Tempo: ON vs. IN", rule: "Use 'ON' para DIAS específicos da semana e datas completas. Use 'IN' para MESES e ANOS soltos!", formula: "ON + Dia/Data | IN + Mês/Ano", example: "ON Monday. ON May 15th. | IN May. IN 2024." },
        { type: "grammar_pill", title: "Letra Maiúscula Obrigatória em Dias e Meses", rule: "Em inglês, dias da semana e meses do ano são SEMPRE escritos com a PRIMEIRA LETRA MAIÚSCULA!", formula: "monday ➔ ERROR | Monday ➔ CORRECT", example: "I work on Monday. My birthday is in July." }
    ],
    stage3_practice: [
        { question: "1. Qual preposição usar antes de dias da semana: 'I work ___ Monday'?", options: [{ label: "on", isCorrect: true }, { label: "in", isCorrect: false }, { label: "at", isCorrect: false }] },
        { question: "2. Qual preposição usar antes de meses sem dia: 'My birthday is ___ May'?", options: [{ label: "in", isCorrect: true }, { label: "on", isCorrect: false }, { label: "at", isCorrect: false }] },
        { question: "3. Qual dia vem logo após 'Tuesday'?", options: [{ label: "Wednesday", isCorrect: true }, { label: "Thursday", isCorrect: false }, { label: "Monday", isCorrect: false }] },
        { question: "4. Qual é o erro na frase: 'I have a test on monday'?", options: [{ label: "'monday' deveria começar com letra maiúscula (Monday)", isCorrect: true }, { label: "'on' deveria ser 'in'", isCorrect: false }, { label: "'test' deveria ser plural", isCorrect: false }] },
        { question: "5. 'Weekend' significa:", options: [{ label: "Fim de semana (Sábado e Domingo)", isCorrect: true }, { label: "Dias de trabalho (Segunda a Sexta)", isCorrect: false }, { label: "Férias", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "See you on Friday!", translation: "Vejo você na sexta-feira!", chunks: ["See", "you", "on", "Friday", "!"] },
        { sentenceEn: "His birthday is in December.", translation: "O aniversário dele é em dezembro.", chunks: ["His", "birthday", "is", "in", "December", "."] }
    ],
    stage4_dialog: [
        { npcName: "Secretary", npcMessage: "When can you come for the interview?", options: [{ text: "I can come on Wednesday morning.", isCorrect: true, feedback: "Uso correto da preposição 'on' para dias." }, { text: "I can come in Wednesday.", isCorrect: false, feedback: "Para dias da semana use 'on'." }, { text: "I can come at Wednesday.", isCorrect: false, feedback: "'At' é para horários." }] },
        { npcName: "Friend", npcMessage: "When is your birthday?", options: [{ text: "My birthday is in August.", isCorrect: true, feedback: "Uso perfeito de 'in' antes de meses." }, { text: "My birthday is on August.", isCorrect: false, feedback: "Sem o dia específico, use 'in'." }, { text: "My birthday is at August.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Classmate", npcMessage: "Do we have class on Saturday?", options: [{ text: "No, we don't have class on weekends.", isCorrect: true, feedback: "Ótima resposta!" }, { text: "No, class is in Saturday.", isCorrect: false, feedback: "Use 'on Saturday'." }, { text: "No, Saturday is a month.", isCorrect: false, feedback: "Saturday é dia da semana." }] }
    ],
    stage5_quiz: [
        { question: "1. Usamos a preposição 'ON' para:", options: [{ label: "Dias da semana e datas específicas", isCorrect: true }, { label: "Meses e anos soltos", isCorrect: false }, { label: "Horários de relógio", isCorrect: false }] },
        { question: "2. Usamos a preposição 'IN' para:", options: [{ label: "Meses e anos", isCorrect: true }, { label: "Dias da semana", isCorrect: false }, { label: "Horários exatos", isCorrect: false }] },
        { question: "3. 'Thursday' significa:", options: [{ label: "Quinta-feira", isCorrect: true }, { label: "Terça-feira", isCorrect: false }, { label: "Sábado", isCorrect: false }] },
        { question: "4. 'Tuesday' significa:", options: [{ label: "Terça-feira", isCorrect: true }, { label: "Quinta-feira", isCorrect: false }, { label: "Quarta-feira", isCorrect: false }] },
        { question: "5. Em inglês, os meses do ano devem ser escritos:", options: [{ label: "Sempre com a primeira letra maiúscula", isCorrect: true }, { label: "Sempre em minúsculas", isCorrect: false }, { label: "Com hífen", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_18 = {
    id: "en_a1_mod_18",
    title: "Daily Habits & Present Simple I",
    section: 4,
    sectionTitle: "Daily Routine & Present Simple",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "I wake up at 7 AM. I have breakfast. I go to work.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a estruturar frases no presente simples para falar sobre sua rotina diária (I, You, We, They)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Wake up / Get up", romaji: "/weɪk ʌp / ɡet ʌp/", translation: "Acordar / Levantar da cama", timeContext: "Ações matinais." },
        { type: "vocab", kanji: "Have breakfast / Have lunch / Have dinner", romaji: "/hæv ˈbrekfəst / lʌntʃ / ˈdɪnər/", translation: "Tomar café da manhã / Almoçar / Jantar", timeContext: "Refeições (usar o verbo 'HAVE')." },
        { type: "vocab", kanji: "Go to work / Go to school / Sleep", romaji: "/ɡoʊ tuː wɜːrk / sliːp/", translation: "Ir ao trabalho / Ir à escola / Dormir", timeContext: "Deslocamento e descanso." },
        { type: "grammar_pill", title: "Present Simple com I, You, We, They (Verbo Base)", rule: "Para falar de hábitos no presente com I, You, We, They, usamos o verbo na sua forma base sem alterações!", formula: "Subject (I/You/We/They) + Verb (Base)", example: "I wake up at 7:00. We have lunch at 12:00. They study English." },
        { type: "grammar_pill", title: "Negação no Present Simple: DON'T (Do not)", rule: "Para negar uma ação no presente com I/You/We/They, colocamos o auxiliar 'don't' antes do verbo!", formula: "Subject + DON'T + Verb (Base)", example: "I don't drink coffee. They don't work on Sunday." }
    ],
    stage3_practice: [
        { question: "1. Como dizer 'Eu tomo café da manhã às 7:00'?", options: [{ label: "I have breakfast at 7:00", isCorrect: true }, { label: "I take breakfast at 7:00", isCorrect: false }, { label: "I am breakfast at 7:00", isCorrect: false }] },
        { question: "2. Como negar a frase 'I work on Saturday'?", options: [{ label: "I don't work on Saturday", isCorrect: true }, { label: "I not work on Saturday", isCorrect: false }, { label: "I am not work on Saturday", isCorrect: false }] },
        { question: "3. Qual verbo é usado com refeições (breakfast, lunch, dinner)?", options: [{ label: "have", isCorrect: true }, { label: "do", isCorrect: false }, { label: "make", isCorrect: false }] },
        { question: "4. Complete: 'They ___ to school by bus.'", options: [{ label: "go", isCorrect: true }, { label: "goes", isCorrect: false }, { label: "going", isCorrect: false }] },
        { question: "5. 'I wake up early' significa:", options: [{ label: "Eu acordo cedo", isCorrect: true }, { label: "Eu durmo cedo", isCorrect: false }, { label: "Eu almoço cedo", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I wake up at six o'clock every day.", translation: "Eu acordo às seis horas todos os dias.", chunks: ["I", "wake", "up", "at", "six", "o'clock", "every", "day", "."] },
        { sentenceEn: "We don't work on Sundays.", translation: "Nós não trabalhamos aos domingos.", chunks: ["We", "don't", "work", "on", "Sundays", "."] }
    ],
    stage4_dialog: [
        { npcName: "Interviewer", npcMessage: "Tell me about your daily routine. What time do you wake up?", options: [{ text: "I wake up at 7:00 AM and have breakfast.", isCorrect: true, feedback: "Descrição perfeita de rotina!" }, { text: "I am wake up at 7:00.", isCorrect: false, feedback: "Não coloque 'am' antes do verbo 'wake'." }, { text: "I don't wake up.", isCorrect: false, feedback: "Todo mundo acorda!" }] },
        { npcName: "Friend", npcMessage: "Do you drink coffee in the morning?", options: [{ text: "Yes, I drink two cups of coffee.", isCorrect: true, feedback: "Resposta correta no presente." }, { text: "Yes, I am drink coffee.", isCorrect: false, feedback: "Sem o verbo To Be 'am' aqui." }, { text: "No, I not drink coffee.", isCorrect: false, feedback: "Use a negação 'don't drink'." }] },
        { npcName: "Coworker", npcMessage: "Do they go to work by car?", options: [{ text: "No, they don't. They take the subway.", isCorrect: true, feedback: "Resposta curta e complemento exato com 'don't'." }, { text: "No, they not go.", isCorrect: false, feedback: "Negação incorreta." }, { text: "No, they isn't.", isCorrect: false, feedback: "'They' não usa 'isn't'." }] }
    ],
    stage5_quiz: [
        { question: "1. Para negar no Present Simple com 'I' ou 'They', usamos:", options: [{ label: "don't (do not)", isCorrect: true }, { label: "doesn't", isCorrect: false }, { label: "isn't", isCorrect: false }] },
        { question: "2. Como se diz 'tomar café da manhã'?", options: [{ label: "have breakfast", isCorrect: true }, { label: "eat the morning", isCorrect: false }, { label: "do breakfast", isCorrect: false }] },
        { question: "3. Qual frase está errada?", options: [{ label: "I am play soccer every day", isCorrect: true }, { label: "I play soccer every day", isCorrect: false }, { label: "I don't play soccer", isCorrect: false }] },
        { question: "4. 'Go to bed' significa:", options: [{ label: "Ir dormir / Ir para a cama", isCorrect: true }, { label: "Fazer a cama", isCorrect: false }, { label: "Comprar uma cama", isCorrect: false }] },
        { question: "5. 'Every day' traduz-se como:", options: [{ label: "Todos os dias", isCorrect: true }, { label: "Alguns dias", isCorrect: false }, { label: "Nunca", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_19 = {
    id: "en_a1_mod_19",
    title: "Present Simple II (He/She/It -s)",
    section: 4,
    sectionTitle: "Daily Routine & Present Simple",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "She works in a bank. He plays tennis. It rains a lot.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a regra da 3ª pessoa do singular (He, She, It) no Present Simple: acréscimo do 'S' na afirmativa e o auxiliar 'DOESN'T' na negação."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Works / Lives / Speaks", romaji: "/wɜːrks / lɪvz / spiːks/", translation: "Trabalha / Mora / Fala", timeContext: "Verbos na 3ª pessoa (+S)." },
        { type: "vocab", kanji: "Teaches / Watches / Studies", romaji: "/ˈtiːtʃɪz / ˈwɒtʃɪz / ˈstʌdiz/", translation: "Ensina (+es) / Assiste (+es) / Estuda (y➔ies)", timeContext: "Variações ortográficas de 3ª pessoa." },
        { type: "vocab", kanji: "Has (ter na 3ª pessoa)", romaji: "/hæz/", translation: "Tem (He/She/It HAS)", timeContext: "Forma irregular de 'have'." },
        { type: "grammar_pill", title: "A Regra do 'S' para He / She / It na Afirmativa", rule: "Na afirmativa do Present Simple, quando o sujeito for HE, SHE ou IT, adicione a letra 'S' ao final do verbo principal!", formula: "He/She/It + Verb + S / ES / IES", example: "He workS at a hospital. She liveS in London. It rainS today." },
        { type: "grammar_pill", title: "Negação na 3ª Pessoa: DOESN'T (Does not)", rule: "Para negar com He/She/It, use o auxiliar 'DOESN'T' e O VERBO VOLTA À SUA FORMA NORMAL SEM S!", formula: "He/She/It + DOESN'T + Verb (Base - Sem S!)", example: "She doesn't work on Sunday. (NÃO 'She doesn't works')." }
    ],
    stage3_practice: [
        { question: "1. Como fica a frase 'Ela trabalha em um banco'?", options: [{ label: "She works in a bank", isCorrect: true }, { label: "She work in a bank", isCorrect: false }, { label: "She is work in a bank", isCorrect: false }] },
        { question: "2. Como negar a frase 'He speaks English'?", options: [{ label: "He doesn't speak English", isCorrect: true }, { label: "He doesn't speaks English", isCorrect: false }, { label: "He don't speak English", isCorrect: false }] },
        { question: "3. Qual é a forma de 3ª pessoa do verbo 'have' (She ___ a car)?", options: [{ label: "has", isCorrect: true }, { label: "haves", isCorrect: false }, { label: "having", isCorrect: false }] },
        { question: "4. O que acontece com o verbo principal quando usamos 'doesn't'?", options: [{ label: "O verbo perde a letra 's' e volta à forma base", isCorrect: true }, { label: "O verbo ganha dois 's'", isCorrect: false }, { label: "O verbo vai para o passado", isCorrect: false }] },
        { question: "5. Complete: 'John ___ TV every night.'", options: [{ label: "watches", isCorrect: true }, { label: "watch", isCorrect: false }, { label: "watchs", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "She speaks English and Spanish.", translation: "Ela fala inglês e espanhol.", chunks: ["She", "speaks", "English", "and", "Spanish", "."] },
        { sentenceEn: "He doesn't like cold coffee.", translation: "Ele não gosta de café frio.", chunks: ["He", "doesn't", "like", "cold", "coffee", "."] }
    ],
    stage4_dialog: [
        { npcName: "Manager", npcMessage: "Does Maria work on Saturdays?", options: [{ text: "No, she doesn't. She works from Monday to Friday.", isCorrect: true, feedback: "Resposta curta exata com 'doesn't'." }, { text: "No, she don't work.", isCorrect: false, feedback: "'She' exige 'doesn't', não 'don't'." }, { text: "No, she doesn't works.", isCorrect: false, feedback: "Após 'doesn't', o verbo perde o 's'." }] },
        { npcName: "Friend", npcMessage: "Where does your brother live?", options: [{ text: "He lives in Canada.", isCorrect: true, feedback: "Uso correto do verbo 'lives' com 'S'." }, { text: "He live in Canada.", isCorrect: false, feedback: "Falta o 'S' para a afirmativa com 'He'." }, { text: "He is live in Canada.", isCorrect: false, feedback: "Sem verbo To Be antes de 'live'." }] },
        { npcName: "Neighbor", npcMessage: "Does your dog like water?", options: [{ text: "Yes, it loves water!", isCorrect: true, feedback: "It + loves com 'S'." }, { text: "Yes, it love water.", isCorrect: false, feedback: "Falta o 'S'." }, { text: "Yes, it is love water.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. O acréscimo de 'S' no verbo ocorre em qual tempo e sujeito?", options: [{ label: "Present Simple afirmativo com He, She, It", isCorrect: true }, { label: "Present Simple com I e You", isCorrect: false }, { label: "Passado com todos os sujeitos", isCorrect: false }] },
        { question: "2. Qual o auxiliar negativo para 'She'?", options: [{ label: "doesn't", isCorrect: true }, { label: "don't", isCorrect: false }, { label: "aren't", isCorrect: false }] },
        { question: "3. Qual frase está CORRETA?", options: [{ label: "My father plays tennis", isCorrect: true }, { label: "My father play tennis", isCorrect: false }, { label: "My father is play tennis", isCorrect: false }] },
        { question: "4. Como fica o verbo 'study' com 'He' na afirmativa?", options: [{ label: "studies", isCorrect: true }, { label: "studys", isCorrect: false }, { label: "studyed", isCorrect: false }] },
        { question: "5. Na frase 'She doesn't ___ chocolate', o verbo correto é:", options: [{ label: "like (sem S)", isCorrect: true }, { label: "likes (com S)", isCorrect: false }, { label: "liking", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_20 = {
    id: "en_a1_mod_20",
    title: "Adverbs of Frequency",
    section: 4,
    sectionTitle: "Daily Routine & Present Simple",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "I always drink coffee in the morning. She never eats meat.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda os advérbios de frequência (Always, Usually, Sometimes, Never) e a posição correta deles na frase."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Always (100%) / Usually (80%)", romaji: "/ˈɔːlweɪz / ˈjuːʒuəli/", translation: "Sempre / Usualmente (geralmente)", timeContext: "Alta frequência." },
        { type: "vocab", kanji: "Sometimes (50%) / Hardly ever (10%)", romaji: "/ˈsʌmtaɪmz / ˈhɑːrdli ˈevər/", translation: "Às vezes / Quase nunca", timeContext: "Frequência média/baixa." },
        { type: "vocab", kanji: "Never (0%)", romaji: "/ˈnevər/", translation: "Nunca", timeContext: "Frequência nula." },
        { type: "grammar_pill", title: "Posição do Advérbio com Verbos Normais", rule: "Advérbios de frequência vêm ANTES do verbo principal da ação!", formula: "Subject + ADVERB + Main Verb", example: "I ALWAYS drink coffee. She NEVER arrives late. They SOMETIMES play tennis." },
        { type: "grammar_pill", title: "Exceção: Posição do Advérbio com o Verbo TO BE", rule: "Com o verbo To Be (am, is, are), o advérbio de frequência vem DEPOIS do verbo!", formula: "Subject + TO BE + ADVERB", example: "He IS ALWAYS happy. (NÃO 'He always is happy'). They ARE NEVER late." }
    ],
    stage3_practice: [
        { question: "1. Qual é a ordem correta na frase com verbo normal?", options: [{ label: "I always wake up early", isCorrect: true }, { label: "I wake up always early", isCorrect: false }, { label: "Always I wake up early", isCorrect: false }] },
        { question: "2. Qual é a ordem correta com o verbo To Be?", options: [{ label: "She is always happy", isCorrect: true }, { label: "She always is happy", isCorrect: false }, { label: "Always she is happy", isCorrect: false }] },
        { question: "3. 'Never' significa:", options: [{ label: "Nunca (0%)", isCorrect: true }, { label: "Sempre (100%)", isCorrect: false }, { label: "Às vezes (50%)", isCorrect: false }] },
        { question: "4. Como traduzir 'Ela nunca come carne'?", options: [{ label: "She never eats meat", isCorrect: true }, { label: "She eats never meat", isCorrect: false }, { label: "She doesn't never eat meat", isCorrect: false }] },
        { question: "5. O advérbio 'usually' indica uma frequência de aproximadamente:", options: [{ label: "80% (Geralmente)", isCorrect: true }, { label: "0% (Nunca)", isCorrect: false }, { label: "100% (Sempre)", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I always drink tea in the afternoon.", translation: "Eu sempre tomo chá de tarde.", chunks: ["I", "always", "drink", "tea", "in", "the", "afternoon", "."] },
        { sentenceEn: "He is never late for work.", translation: "Ele nunca está atrasado para o trabalho.", chunks: ["He", "is", "never", "late", "for", "work", "."] }
    ],
    stage4_dialog: [
        { npcName: "Trainer", npcMessage: "How often do you exercise?", options: [{ text: "I usually go to the gym three times a week.", isCorrect: true, feedback: "Uso perfeito de 'usually' antes do verbo 'go'." }, { text: "I go usually to gym.", isCorrect: false, feedback: "O advérbio vem antes do verbo: 'usually go'." }, { text: "I am exercise always.", isCorrect: false, feedback: "Posição e estrutura incorretas." }] },
        { npcName: "Friend", npcMessage: "Is Peter ever angry?", options: [{ text: "No, he is never angry. He is very calm.", isCorrect: true, feedback: "'Never' depois do verbo To Be 'is'." }, { text: "No, he never is angry.", isCorrect: false, feedback: "Com o verbo To Be, o advérbio vem depois: 'is never'." }, { text: "No, he isn't never angry.", isCorrect: false, feedback: "Dupla negação incorreta em inglês." }] },
        { npcName: "Colleague", npcMessage: "Do you eat breakfast at home?", options: [{ text: "I sometimes eat at home, but usually at work.", isCorrect: true, feedback: "Uso natural e correto dos advérbios." }, { text: "I eat sometimes.", isCorrect: false, feedback: "O advérbio vem antes do verbo 'eat'." }, { text: "Always I eat.", isCorrect: false, feedback: "Posição errada no início." }] }
    ],
    stage5_quiz: [
        { question: "1. Onde fica o advérbio de frequência com verbos comuns (like, eat, work)?", options: [{ label: "Antes do verbo principal", isCorrect: true }, { label: "Depois do verbo principal", isCorrect: false }, { label: "No final da frase", isCorrect: false }] },
        { question: "2. Onde fica o advérbio de frequência com o verbo TO BE (am/is/are)?", options: [{ label: "Depois do verbo To Be", isCorrect: true }, { label: "Antes do verbo To Be", isCorrect: false }, { label: "No início da frase", isCorrect: false }] },
        { question: "3. 'Always' significa:", options: [{ label: "Sempre", isCorrect: true }, { label: "Raramente", isCorrect: false }, { label: "Às vezes", isCorrect: false }] },
        { question: "4. Qual a frase correta?", options: [{ label: "They are usually tired after work", isCorrect: true }, { label: "They usually are tired after work", isCorrect: false }, { label: "They are tired usually after work", isCorrect: false }] },
        { question: "5. 'Hardly ever' significa:", options: [{ label: "Quase nunca", isCorrect: true }, { label: "Sempre", isCorrect: false }, { label: "Muito frequentemente", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 5: FOOD, DRINKS & SHOPPING (MÓDULOS 21 A 25)
// ------------------------------------------

const MODULO_EN_A1_21 = {
    id: "en_a1_mod_21",
    title: "Food & Drinks Vocabulary",
    section: 5,
    sectionTitle: "Food, Drinks & Shopping",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "I eat bread and cheese for breakfast. I drink water and juice.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda o vocabulário básico de alimentos, refeições e bebidas mais consumidas no cotidiano."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Bread / Cheese / Butter / Egg", romaji: "/bred / tʃiːz / ˈbʌtər / eɡ/", translation: "Pão / Queijo / Manteiga / Ovo", timeContext: "Alimentos de café da manhã." },
        { type: "vocab", kanji: "Water / Milk / Coffee / Tea", romaji: "/ˈwɔːtər / mɪlk / ˈkɒfi / tiː/", translation: "Água / Leite / Café / Chá", timeContext: "Bebidas essenciais." },
        { type: "vocab", kanji: "Chicken / Meat / Fish / Rice", romaji: "/ˈtʃɪkɪn / miːt / fɪʃ / raɪs/", translation: "Frango / Carne vermelha / Peixe / Arroz", timeContext: "Alimentos de almoço e jantar." },
        { type: "grammar_pill", title: "Verbos EAT (Comer) e DRINK (Beber)", rule: "Use 'Eat' para alimentos sólidos e 'Drink' para líquidos. Alternativamente, o verbo 'HAVE' pode ser usado para ambos!", formula: "Eat + comida | Drink + bebida | Have + comida/bebida", example: "I eat bread. I drink water. I have breakfast (como/tomo o café)." },
        { type: "grammar_pill", title: "Substantivos Plurais com Alimentos (Eggs, Apples)", rule: "Alimentos contáveis ganham 'S' no plural (an egg ➔ two eggs). Alimentos incontáveis como 'bread' ou 'water' não ganham 's'!", formula: "Countable + S | Uncountable ➔ Sem plural em S", example: "Three eggs. Two apples. Water (sem waters). Bread (sem breads)." }
    ],
    stage3_practice: [
        { question: "1. Como se diz 'água' em inglês?", options: [{ label: "Water", isCorrect: true }, { label: "Milk", isCorrect: false }, { label: "Juice", isCorrect: false }] },
        { question: "2. Como se diz 'frango' em inglês?", options: [{ label: "Chicken", isCorrect: true }, { label: "Meat", isCorrect: false }, { label: "Fish", isCorrect: false }] },
        { question: "3. Qual verbo é usado para consumo de líquidos?", options: [{ label: "drink", isCorrect: true }, { label: "eat", isCorrect: false }, { label: "cook", isCorrect: false }] },
        { question: "4. Como dizer 'Eu como pão e queijo de manhã'?", options: [{ label: "I eat bread and cheese in the morning", isCorrect: true }, { label: "I drink bread and cheese", isCorrect: false }, { label: "I am bread and cheese", isCorrect: false }] },
        { question: "5. 'Butter' significa:", options: [{ label: "Manteiga", isCorrect: true }, { label: "Açúcar", isCorrect: false }, { label: "Sal", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I drink coffee with milk every morning.", translation: "Eu bebo café com leite todas as manhãs.", chunks: ["I", "drink", "coffee", "with", "milk", "every", "morning", "."] },
        { sentenceEn: "She likes chicken and rice for dinner.", translation: "Ela gosta de frango e arroz no jantar.", chunks: ["She", "likes", "chicken", "and", "rice", "for", "dinner", "."] }
    ],
    stage4_dialog: [
        { npcName: "Waiter", npcMessage: "What would you like to drink?", options: [{ text: "Water, please.", isCorrect: true, feedback: "Pedido perfeito de bebida!" }, { text: "I would like bread.", isCorrect: false, feedback: "Bread é comida, ele perguntou sobre bebida (drink)." }, { text: "I drink chicken.", isCorrect: false, feedback: "Você não bebe frango!" }] },
        { npcName: "Hostess", npcMessage: "Do you eat meat?", options: [{ text: "No, I only eat fish and vegetables.", isCorrect: true, feedback: "Resposta clara sobre hábito alimentar." }, { text: "No, I drink meat.", isCorrect: false, feedback: "Carne se 'come' (eat)." }, { text: "Yes, I am meat.", isCorrect: false, feedback: "Você não é carne!" }] },
        { npcName: "Friend", npcMessage: "Do you want some coffee?", options: [{ text: "Yes, with sugar and milk, please!", isCorrect: true, feedback: "Ótima resposta!" }, { text: "Yes, I eat coffee.", isCorrect: false, feedback: "Café se bebe (drink)." }, { text: "No, coffee is a food.", isCorrect: false, feedback: "Café é bebida." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Bread' significa:", options: [{ label: "Pão", isCorrect: true }, { label: "Bolo", isCorrect: false }, { label: "Biscoito", isCorrect: false }] },
        { question: "2. 'Cheese' significa:", options: [{ label: "Queijo", isCorrect: true }, { label: "Presunto", isCorrect: false }, { label: "Carne", isCorrect: false }] },
        { question: "3. Qual a bebida ideal para matar a sede?", options: [{ label: "Water", isCorrect: true }, { label: "Bread", isCorrect: false }, { label: "Rice", isCorrect: false }] },
        { question: "4. Qual opção contém apenas bebidas?", options: [{ label: "Water, Coffee, Tea, Juice", isCorrect: true }, { label: "Meat, Fish, Bread, Milk", isCorrect: false }, { label: "Cheese, Egg, Butter, Coffee", isCorrect: false }] },
        { question: "5. 'Rice' traduz-se como:", options: [{ label: "Arroz", isCorrect: true }, { label: "Feijão", isCorrect: false }, { label: "Macarrão", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_22 = {
    id: "en_a1_mod_22",
    title: "Expressing Likes & Dislikes (Like / Hate)",
    section: 5,
    sectionTitle: "Food, Drinks & Shopping",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "I like pizza. She likes ice cream. He doesn't like fish.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a expressar suas preferências, gostos e aversões usando os verbos 'Like', 'Love', 'Don't like' e 'Hate'."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Love / Like", romaji: "/lʌv / laɪk/", translation: "Amar / Gostar de", timeContext: "Preferências positivas." },
        { type: "vocab", kanji: "Don't like / Hate", romaji: "/doʊnt laɪk / heɪt/", translation: "Não gostar de / Detestar (odiar)", timeContext: "Preferências negativas." },
        { type: "vocab", kanji: "Do you like...?", romaji: "/duː juː laɪk/", translation: "Você gosta de...?", timeContext: "Pergunta sobre gostos." },
        { type: "grammar_pill", title: "Regra do Verbo LIKE com 3ª Pessoa (He/She/It)", rule: "Lembre-se da regra do Present Simple! Com I/You/We/They use 'LIKE'. Com He/She/It adicione a letra S: 'LIKES'!", formula: "I/You/We/They + LIKE | He/She/It + LIKES", example: "I like chocolate. She likes chocolate. He loves ice cream." },
        { type: "grammar_pill", title: "Perguntas com DO / DOES + LIKE", rule: "Para perguntar se alguém gosta de algo, inicie com 'Do' (para I/You/We/They) ou 'Does' (para He/She/It).", formula: "DO + You + LIKE...? | DOES + She + LIKE...?", example: "Do you like pizza? ➔ Yes, I do. Does she like coffee? ➔ Yes, she does." }
    ],
    stage3_practice: [
        { question: "1. Como fica a frase 'Ela gosta de pizza'?", options: [{ label: "She likes pizza", isCorrect: true }, { label: "She like pizza", isCorrect: false }, { label: "She is like pizza", isCorrect: false }] },
        { question: "2. Como perguntar 'Você gosta de café?'", options: [{ label: "Do you like coffee?", isCorrect: true }, { label: "Are you like coffee?", isCorrect: false }, { label: "Does you like coffee?", isCorrect: false }] },
        { question: "3. Como negar 'He likes fish'?", options: [{ label: "He doesn't like fish", isCorrect: true }, { label: "He don't like fish", isCorrect: false }, { label: "He not likes fish", isCorrect: false }] },
        { question: "4. Qual verbo expressa 'detestar/odiar'?", options: [{ label: "Hate", isCorrect: true }, { label: "Love", isCorrect: false }, { label: "Want", isCorrect: false }] },
        { question: "5. Complete: 'They ___ Italian food.'", options: [{ label: "love", isCorrect: true }, { label: "loves", isCorrect: false }, { label: "is love", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I love Italian food and I like wine.", translation: "Eu amo comida italiana e gosto de vinho.", chunks: ["I", "love", "Italian", "food", "and", "I", "like", "wine", "."] },
        { sentenceEn: "She doesn't like spicy food.", translation: "Ela não gosta de comida apimentada.", chunks: ["She", "doesn't", "like", "spicy", "food", "."] }
    ],
    stage4_dialog: [
        { npcName: "Friend", npcMessage: "Do you like sushi?", options: [{ text: "Yes, I love sushi! It's my favorite.", isCorrect: true, feedback: "Resposta perfeita expressando entusiasmo!" }, { text: "Yes, I am like sushi.", isCorrect: false, feedback: "Sem verbo To Be com 'like'." }, { text: "Yes, I likes sushi.", isCorrect: false, feedback: "'I' não leva 's' no verbo." }] },
        { npcName: "Host", npcMessage: "Does your husband like tea?", options: [{ text: "No, he doesn't like tea. He prefers coffee.", isCorrect: true, feedback: "Uso correto de 'he doesn't like'." }, { text: "No, he don't like tea.", isCorrect: false, feedback: "'He' usa 'doesn't'." }, { text: "No, he not like tea.", isCorrect: false, feedback: "Falta o auxiliar 'doesn't'." }] },
        { npcName: "Waiter", npcMessage: "Would you like some dessert?", options: [{ text: "Yes, I love ice cream!", isCorrect: true, feedback: "Excelente!" }, { text: "Yes, I hate ice cream.", isCorrect: false, feedback: "Hate é detestar!" }, { text: "No, I am like cake.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. Com o pronome 'She', o verbo 'like' na afirmativa fica:", options: [{ label: "likes", isCorrect: true }, { label: "like", isCorrect: false }, { label: "liking", isCorrect: false }] },
        { question: "2. A pergunta 'Do you like tea?' deve ser respondida afirmativamente como:", options: [{ label: "Yes, I do", isCorrect: true }, { label: "Yes, I am", isCorrect: false }, { label: "Yes, I have", isCorrect: false }] },
        { question: "3. 'I hate rain' significa:", options: [{ label: "Eu detesto/odeio chuva", isCorrect: true }, { label: "Eu amo chuva", isCorrect: false }, { label: "Eu gosto de chuva", isCorrect: false }] },
        { question: "4. Qual a negação correta de 'She likes apples'?", options: [{ label: "She doesn't like apples", isCorrect: true }, { label: "She don't likes apples", isCorrect: false }, { label: "She isn't like apples", isCorrect: false }] },
        { question: "5. 'Love' expressa um sentimento mais forte do que 'like':", options: [{ label: "Verdadeiro (Amar > Gostar)", isCorrect: true }, { label: "Falso", isCorrect: false }, { label: "É a mesma intensidade", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_23 = {
    id: "en_a1_mod_23",
    title: "Asking for Prices & Money (How much?)",
    section: 5,
    sectionTitle: "Food, Drinks & Shopping",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "How much is this shirt? It is twenty dollars.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a perguntar preços de produtos e serviços em inglês usando a estrutura 'How much' no singular e plural."
    },
    stage2_drops: [
        { type: "vocab", kanji: "How much is this?", romaji: "/haʊ mʌtʃ ɪz ðɪs/", translation: "Quanto custa isto? (Singular)", timeContext: "Pergunta de preço no singular." },
        { type: "vocab", kanji: "How much are these?", romaji: "/haʊ mʌtʃ ɑːr ðiːz/", translation: "Quanto custam estes? (Plural)", timeContext: "Pergunta de preço no plural." },
        { type: "vocab", kanji: "Dollars / Cents / Euros / Pounds", romaji: "/ˈdɒlərz / sents/", translation: "Dólares / Centavos / Euros / Libras", timeContext: "Moedas internacionais." },
        { type: "grammar_pill", title: "Estrutura de Preços: How much IS vs. How much ARE", rule: "Use 'How much IS' para 1 objeto no singular. Use 'How much ARE' para 2 ou mais objetos ou palavras no plural (ex: shoes).", formula: "How much IS + singular | How much ARE + plural", example: "How much is this book? It is $10. How much are these shoes? They are $50." },
        { type: "grammar_pill", title: "Respostas de Preço com IT IS / THEY ARE", rule: "Responda com 'It is...' para singular e 'They are...' para plural.", formula: "Singular ➔ It is $X | Plural ➔ They are $X", example: "It is 15 dollars. They are 40 euros." }
    ],
    stage3_practice: [
        { question: "1. Como perguntar o preço de uma camiseta (shirt - singular)?", options: [{ label: "How much is this shirt?", isCorrect: true }, { label: "How much are this shirt?", isCorrect: false }, { label: "How many is this shirt?", isCorrect: false }] },
        { question: "2. Como perguntar o preço de um par de sapatos (shoes - plural)?", options: [{ label: "How much are these shoes?", isCorrect: true }, { label: "How much is these shoes?", isCorrect: false }, { label: "How many are these shoes?", isCorrect: false }] },
        { question: "3. Como responder que um produto custa 20 dólares?", options: [{ label: "It is twenty dollars", isCorrect: true }, { label: "Has twenty dollars", isCorrect: false }, { label: "Is have twenty dollars", isCorrect: false }] },
        { question: "4. Qual palavra significa 'centavos'?", options: [{ label: "cents", isCorrect: true }, { label: "dollars", isCorrect: false }, { label: "pounds", isCorrect: false }] },
        { question: "5. Qual frase está gramaticalmente errada?", options: [{ label: "How much is those pants?", isCorrect: true }, { label: "How much are those pants?", isCorrect: false }, { label: "How much is this hat?", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Excuse me, how much is this jacket?", translation: "Com licença, quanto custa esta jaqueta?", chunks: ["Excuse", "me", ",", "how", "much", "is", "this", "jacket", "?"] },
        { sentenceEn: "They are thirty-five dollars.", translation: "Eles custam trinta e cinco dólares.", chunks: ["They", "are", "thirty-five", "dollars", "."] }
    ],
    stage4_dialog: [
        { npcName: "Cashier", npcMessage: "Hello! Can I help you?", options: [{ text: "Yes, how much is this coffee?", isCorrect: true, feedback: "Uso exato de 'How much is'." }, { text: "Yes, how many is this coffee?", isCorrect: false, feedback: "Para preços usa-se 'How much'." }, { text: "Yes, how cost this coffee?", isCorrect: false, feedback: "Estrutura incorreta." }] },
        { npcName: "Salesperson", npcMessage: "Those boots are on sale today!", options: [{ text: "Really? How much are they?", isCorrect: true, feedback: "Uso correto de 'are they' no plural." }, { text: "Really? How much is they?", isCorrect: false, feedback: "'They' exige 'are'." }, { text: "Really? How many are they?", isCorrect: false, feedback: "'How many' pergunta quantidade, não preço." }] },
        { npcName: "Customer", npcMessage: "How much is this book?", options: [{ text: "It is fifteen dollars ($15).", isCorrect: true, feedback: "Resposta perfeita de preço singular." }, { text: "They are fifteen dollars.", isCorrect: false, feedback: "Book é singular (It is)." }, { text: "Have fifteen dollars.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. A expressão usada para perguntar o PREÇO de algo é:", options: [{ label: "How much...?", isCorrect: true }, { label: "How many...?", isCorrect: false }, { label: "How long...?", isCorrect: false }] },
        { question: "2. Complete: 'How much ___ these jeans?'", options: [{ label: "are", isCorrect: true }, { label: "is", isCorrect: false }, { label: "am", isCorrect: false }] },
        { question: "3. Complete: 'How much ___ this watch?'", options: [{ label: "is", isCorrect: true }, { label: "are", isCorrect: false }, { label: "be", isCorrect: false }] },
        { question: "4. O símbolo '$' representa qual moeda?", options: [{ label: "Dollar (Dólar)", isCorrect: true }, { label: "Euro", isCorrect: false }, { label: "Pound (Libra)", isCorrect: false }] },
        { question: "5. Como traduzir 'Custa 10 euros'?", options: [{ label: "It is ten euros", isCorrect: true }, { label: "Has ten euros", isCorrect: false }, { label: "Is ten euros have", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_24 = {
    id: "en_a1_mod_24",
    title: "Ordering in a Restaurant (Can I have...?)",
    section: 5,
    sectionTitle: "Food, Drinks & Shopping",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Can I have a burger, please? I would like water.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a fazer pedidos de refeição em um restaurante de forma polida utilizando 'Can I have...?' e 'I would like...'."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Can I have...?", romaji: "/kæn aɪ hæv/", translation: "Você pode me ver...? / Eu gostaria de...", timeContext: "Expressão mais usada para pedir em restaurantes." },
        { type: "vocab", kanji: "I would like... (I'd like)", romaji: "/aɪ wʊd laɪk/", translation: "Eu gostaria de...", timeContext: "Pedido formal e educado." },
        { type: "vocab", kanji: "Menu / Bill (Check) / Tip", romaji: "/ˈmenjuː / bɪl / tɪp/", translation: "Cardápio / Conta / Gorjeta", timeContext: "Elementos de um restaurante." },
        { type: "grammar_pill", title: "Fazendo Pedidos Educados: Can I have vs. Give me", rule: "Em inglês, NUNCA diga 'Give me a coffee' (Me dá um café) pois soa agressivo! Use SEMPRE 'Can I have a coffee, please?' ou 'I'd like a coffee'.", formula: "Can I have + [Item] + please? | I'd like + [Item]", example: "Can I have a cheese pizza, please? I'd like an orange juice." },
        { type: "grammar_pill", title: "Pedindo a Conta: Can I have the bill/check?", rule: "No Reino Unido diz-se 'bill', nos EUA diz-se 'check'.", formula: "Can I have the bill/check, please?", example: "Excuse me, can I have the check, please?" }
    ],
    stage3_practice: [
        { question: "1. Qual é a forma mais educada de pedir um café em um restaurante?", options: [{ label: "Can I have a coffee, please?", isCorrect: true }, { label: "Give me a coffee now!", isCorrect: false }, { label: "I want coffee quickly!", isCorrect: false }] },
        { question: "2. Como pedir a conta no final da refeição?", options: [{ label: "Can I have the bill, please?", isCorrect: true }, { label: "Pay me now, please!", isCorrect: false }, { label: "Where is the money?", isCorrect: false }] },
        { question: "3. O que significa a contração 'I'd like'?", options: [{ label: "I would like (Eu gostaria)", isCorrect: true }, { label: "I do like (Eu gosto)", isCorrect: false }, { label: "I had like (Eu tinha)", isCorrect: false }] },
        { question: "4. Qual palavra significa 'cardápio'?", options: [{ label: "Menu", isCorrect: true }, { label: "Bill", isCorrect: false }, { label: "Tip", isCorrect: false }] },
        { question: "5. Como se diz 'gorjeta' em inglês?", options: [{ label: "Tip", isCorrect: true }, { label: "Top", isCorrect: false }, { label: "Check", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Can I have a salad and a water, please?", translation: "Você pode me ver uma salada e uma água, por favor?", chunks: ["Can", "I", "have", "a", "salad", "and", "a", "water", ",", "please", "?"] },
        { sentenceEn: "I'd like the check, please.", translation: "Eu gostaria da conta, por favor.", chunks: ["I'd", "like", "the", "check", ",", "please", "."] }
    ],
    stage4_dialog: [
        { npcName: "Waiter", npcMessage: "Are you ready to order?", options: [{ text: "Yes, can I have the chicken pasta, please?", isCorrect: true, feedback: "Pedido perfeito e polido!" }, { text: "Give me chicken now!", isCorrect: false, feedback: "Muitíssimo indelicado!" }, { text: "Yes, I am pasta.", isCorrect: false, feedback: "Você não é macarrão!" }] },
        { npcName: "Waiter", npcMessage: "Anything to drink with your meal?", options: [{ text: "I'd like a sparkling water, please.", isCorrect: true, feedback: "Uso correto de 'I'd like'." }, { text: "No drink me.", isCorrect: false, feedback: "Incorreto." }, { text: "I drink is water.", isCorrect: false, feedback: "Estrutura errada." }] },
        { npcName: "Customer", npcMessage: "Excuse me, we are finished.", options: [{ text: "Can I have the check, please?", isCorrect: true, feedback: "Pedido da conta impecável." }, { text: "Where is menu?", isCorrect: false, feedback: "Vocês já terminaram de comer!" }, { text: "Give me money.", isCorrect: false, feedback: "Agredindo a etiqueta do local." }] }
    ],
    stage5_quiz: [
        { question: "1. Para pedir algo educadamente no restaurante usamos a estrutura:", options: [{ label: "Can I have...?", isCorrect: true }, { label: "Give me...", isCorrect: false }, { label: "Must I take...?", isCorrect: false }] },
        { question: "2. 'I'd like a table for two' significa:", options: [{ label: "Eu gostaria de uma mesa para dois", isCorrect: true }, { label: "Eu tenho duas mesas", isCorrect: false }, { label: "Eu gosto de duas mesas", isCorrect: false }] },
        { question: "3. 'Check' ou 'Bill' em um restaurante significa:", options: [{ label: "A conta", isCorrect: true }, { label: "O prato principal", isCorrect: false }, { label: "A sobremesa", isCorrect: false }] },
        { question: "4. Qual a forma polida de 'I want'?", options: [{ label: "I would like (I'd like)", isCorrect: true }, { label: "I am wanting", isCorrect: false }, { label: "I will want", isCorrect: false }] },
        { question: "5. 'Menu' é o lugar onde vemos:", options: [{ label: "A lista de pratos e preços disponíveis", isCorrect: true }, { label: "Os nomes dos garçons", isCorrect: false }, { label: "O endereço do dono", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_25 = {
    id: "en_a1_mod_25",
    title: "Countable & Uncountable Nouns (Some / Any)",
    section: 5,
    sectionTitle: "Food, Drinks & Shopping",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "I have some apples. Do you have any water? There isn't any milk.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a diferença entre substantivos contáveis e incontáveis e como usar 'Some' e 'Any' em frases afirmativas, negativas e perguntas."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Countable (Apples, Eggs, Books)", romaji: "/ˈkaʊntəbəl/", translation: "Contáveis (podem ser contados por unidade: 1, 2, 3...)", timeContext: "Aceitam plural em S." },
        { type: "vocab", kanji: "Uncountable (Water, Milk, Rice, Money)", romaji: "/ʌnˈkaʊntəbəl/", translation: "Incontáveis (Líquidos, grãos, dinheiro)", timeContext: "NÃO aceitam plural em S." },
        { type: "vocab", kanji: "Some vs. Any", romaji: "/sʌm / ˈeni/", translation: "Algum(a/s) / Nenhum(a) ou Algum(a)?", timeContext: "Quantificadores." },
        { type: "grammar_pill", title: "Regra do SOME (Afirmativas)", rule: "Use 'SOME' em frases AFIRMATIVAS antes de substantivos plurais contáveis ou incontáveis.", formula: "Afirmativa ➔ SOME", example: "I have some apples. I want some water." },
        { type: "grammar_pill", title: "Regra do ANY (Negações e Perguntas)", rule: "Use 'ANY' em frases NEGATIVAS (significando 'nenhum/a') e em PERGUNTAS (significando 'algum/a').", formula: "Negação / Pergunta ➔ ANY", example: "I don't have any money. Is there any milk in the fridge?" }
    ],
    stage3_practice: [
        { question: "1. Qual quantificador usar em frase AFIRMATIVA: 'I have ___ apples'?", options: [{ label: "some", isCorrect: true }, { label: "any", isCorrect: false }, { label: "an", isCorrect: false }] },
        { question: "2. Qual quantificador usar em frase NEGATIVA: 'There isn't ___ milk'?", options: [{ label: "any", isCorrect: true }, { label: "some", isCorrect: false }, { label: "a", isCorrect: false }] },
        { question: "3. Qual quantificador usar em PERGUNTA: 'Do you have ___ questions'?", options: [{ label: "any", isCorrect: true }, { label: "some", isCorrect: false }, { label: "an", isCorrect: false }] },
        { question: "4. Qual dos seguintes substantivos é INCONTÁVEL (uncountable)?", options: [{ label: "Water", isCorrect: true }, { label: "Apple", isCorrect: false }, { label: "Car", isCorrect: false }] },
        { question: "5. Qual frase está gramaticalmente CORRETA?", options: [{ label: "I don't have any money", isCorrect: true }, { label: "I don't have some money", isCorrect: false }, { label: "I have any money", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I would like some water, please.", translation: "Eu gostaria de um pouco de água, por favor.", chunks: ["I", "would", "like", "some", "water", ",", "please", "."] },
        { sentenceEn: "We don't have any bread left.", translation: "Nós não temos nenhum pão sobrando.", chunks: ["We", "don't", "have", "any", "bread", "left", "."] }
    ],
    stage4_dialog: [
        { npcName: "Cook", npcMessage: "Do we have any eggs for the cake?", options: [{ text: "Yes, we have some eggs in the fridge.", isCorrect: true, feedback: "Afirmativa com 'some' perfeita!" }, { text: "Yes, we have any eggs.", isCorrect: false, feedback: "Em frases afirmativas use 'some'." }, { text: "No, we have no any eggs.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Shopper", npcMessage: "Is there any juice left?", options: [{ text: "No, there isn't any juice.", isCorrect: true, feedback: "Negação correta com 'isn't any'." }, { text: "No, there isn't some juice.", isCorrect: false, feedback: "Negação usa 'any'." }, { text: "No, there are any juice.", isCorrect: false, feedback: "Juice é incontável (isn't)." }] },
        { npcName: "Friend", npcMessage: "Are you hungry?", options: [{ text: "Yes, I would like some bread and cheese.", isCorrect: true, feedback: "Uso correto de 'some'." }, { text: "Yes, I want any bread.", isCorrect: false, feedback: "Use 'some' para pedir em afirmativa." }, { text: "Yes, I am any hungry.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. 'SOME' é usado principalmente em frases:", options: [{ label: "Afirmativas", isCorrect: true }, { label: "Negativas", isCorrect: false }, { label: "Apenas em perguntas", isCorrect: false }] },
        { question: "2. 'ANY' é usado em frases:", options: [{ label: "Negativas e Perguntas", isCorrect: true }, { label: "Apenas afirmativas", isCorrect: false }, { label: "Apenas no passado", isCorrect: false }] },
        { question: "3. Substantivos incontáveis (ex: water, rice, money):", options: [{ label: "Não ganham a letra S no plural", isCorrect: true }, { label: "Sempre terminam em S", isCorrect: false }, { label: "Usam o artigo 'a' ou 'an'", isCorrect: false }] },
        { question: "4. Qual a frase correta?", options: [{ label: "Do you have any money?", isCorrect: true }, { label: "Do you have some money?", isCorrect: false }, { label: "Do you have a money?", isCorrect: false }] },
        { question: "5. 'There aren't any chairs' significa:", options: [{ label: "Não há nenhuma cadeira", isCorrect: true }, { label: "Há algumas cadeiras", isCorrect: false }, { label: "Há uma cadeira", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 6: PLACES IN THE CITY, TRAVEL & FINAL CHALLENGE (MÓDULOS 26 A 30)
// ------------------------------------------

const MODULO_EN_A1_26 = {
    id: "en_a1_mod_26",
    title: "Places in the City",
    section: 6,
    sectionTitle: "Places in the City, Travel & Final Challenge",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "The bank is near the station. The supermarket is open.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda o vocabulário dos principais locais da cidade (banco, hospital, aeroporto, estação, parque)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Bank / Supermarket / Pharmacy", romaji: "/bæŋk / ˈsuːpərmɑːrkɪt / ˈfɑːrməsi/", translation: "Banco / Supermercado / Farmácia", timeContext: "Serviços essenciais." },
        { type: "vocab", kanji: "Airport / Train station / Bus stop", romaji: "/ˈeərpɔːrt / treɪn ˈsteɪʃn / bʌs stɒp/", translation: "Aeroporto / Estação de trem / Ponto de ônibus", timeContext: "Locais de transporte." },
        { type: "vocab", kanji: "Hotel / Restaurant / Park / Hospital", romaji: "/hoʊˈtel / ˈrestrɒnt / pɑːrk / ˈhɒspɪtl/", translation: "Hotel / Restaurante / Parque / Hospital", timeContext: "Locais públicos." },
        { type: "grammar_pill", title: "Preposição AT para Locais Específicos", rule: "Para dizer que você está em um determinado estabelecimento ou local público da cidade, use a preposição 'AT'.", formula: "AT + the + [Local]", example: "I am AT the airport. She is AT the bank. They are AT the restaurant." },
        { type: "grammar_pill", title: "Verbo GO TO (Ir para)", rule: "Para indicar deslocamento até um local da cidade, usamos o verbo 'Go to' (ou 'goes to' na 3ª pessoa).", formula: "Subject + GO TO + the + [Local]", example: "I go to the supermarket on Saturdays. He goes to the bank." }
    ],
    stage3_practice: [
        { question: "1. Onde você compra remédios?", options: [{ label: "At the pharmacy", isCorrect: true }, { label: "At the bank", isCorrect: false }, { label: "At the airport", isCorrect: false }] },
        { question: "2. Onde você pega um avião?", options: [{ label: "At the airport", isCorrect: true }, { label: "At the train station", isCorrect: false }, { label: "At the park", isCorrect: false }] },
        { question: "3. Qual preposição usar para 'Estou no banco': 'I am ___ the bank'?", options: [{ label: "at", isCorrect: true }, { label: "on", isCorrect: false }, { label: "under", isCorrect: false }] },
        { question: "4. Como se diz 'ponto de ônibus'?", options: [{ label: "Bus stop", isCorrect: true }, { label: "Bus station", isCorrect: false }, { label: "Bus park", isCorrect: false }] },
        { question: "5. 'Supermarket' é:", options: [{ label: "Supermercado", isCorrect: true }, { label: "Feira livre", isCorrect: false }, { label: "Padaria", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "She is at the airport right now.", translation: "Ela está no aeroporto agora mesmo.", chunks: ["She", "is", "at", "the", "airport", "right", "now", "."] },
        { sentenceEn: "I go to the supermarket every Saturday.", translation: "Eu vou ao supermercado todo sábado.", chunks: ["I", "go", "to", "the", "supermarket", "every", "Saturday", "."] }
    ],
    stage4_dialog: [
        { npcName: "Driver", npcMessage: "Where do you want to go?", options: [{ text: "To the train station, please.", isCorrect: true, feedback: "Destino claro e correto." }, { text: "I am train station.", isCorrect: false, feedback: "Você não é a estação." }, { text: "To airport at the bank.", isCorrect: false, feedback: "Confuso." }] },
        { npcName: "Friend", npcMessage: "Where are you now?", options: [{ text: "I am at the bank exchanging money.", isCorrect: true, feedback: "Uso correto de 'at the bank'." }, { text: "I am on the bank.", isCorrect: false, feedback: "Você não está em cima do telhado do banco!" }, { text: "I am in to the bank.", isCorrect: false, feedback: "Preposição errada." }] },
        { npcName: "Tourist", npcMessage: "Is there a pharmacy near here?", options: [{ text: "Yes, there is a pharmacy next to the hospital.", isCorrect: true, feedback: "Resposta perfeita combinando locais e preposição!" }, { text: "Yes, has a pharmacy.", isCorrect: false, feedback: "Não use 'has' para haver/existir." }, { text: "Yes, pharmacy is airport.", isCorrect: false, feedback: "Sem sentido." }] }
    ],
    stage5_quiz: [
        { question: "1. Como se diz 'estação de trem' em inglês?", options: [{ label: "Train station", isCorrect: true }, { label: "Train stop", isCorrect: false }, { label: "Train park", isCorrect: false }] },
        { question: "2. Para dizer 'Estou no hospital', a estrutura correta é:", options: [{ label: "I am at the hospital", isCorrect: true }, { label: "I am on the hospital", isCorrect: false }, { label: "I am to hospital", isCorrect: false }] },
        { question: "3. 'Bank' é o local onde:", options: [{ label: "Realizamos operações financeiras", isCorrect: true }, { label: "Compramos remédios", isCorrect: false }, { label: "Pegamos voos", isCorrect: false }] },
        { question: "4. Qual a tradução de 'bus stop'?", options: [{ label: "Ponto de ônibus", isCorrect: true }, { label: "Estação rodoviária grande", isCorrect: false }, { label: "Garagem de ônibus", isCorrect: false }] },
        { question: "5. 'Hotel' pronuncia-se com a tônica na segunda sílaba /hoʊˈtel/:", options: [{ label: "Verdadeiro", isCorrect: true }, { label: "Falso", isCorrect: false }, { label: "Não se pronuncia o H", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_27 = {
    id: "en_a1_mod_27",
    title: "Means of Transportation & 'By'",
    section: 6,
    sectionTitle: "Places in the City, Travel & Final Challenge",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "I go to work by bus. She goes by car. He goes on foot.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda os meios de transporte e o uso correto da preposição 'BY' (e a exceção 'ON FOOT')."
    },
    stage2_drops: [
        { type: "vocab", kanji: "By bus / By car / By train", romaji: "/baɪ bʌs / baɪ kɑːr / baɪ treɪn/", translation: "De ônibus / De carro / De trem", timeContext: "Transportes terrestres." },
        { type: "vocab", kanji: "By plane / By subway / By taxi", romaji: "/baɪ pleɪn / baɪ ˈsʌbweɪ / baɪ ˈtæksi/", translation: "De avião / De metrô / De táxi", timeContext: "Transportes aéreos e urbanos." },
        { type: "vocab", kanji: "On foot (A pé)", romaji: "/ɒn fʊt/", translation: "A pé (caminhando)", timeContext: "A EXCEÇÃO OBRIGATÓRIA (NUNCA 'by foot')!" },
        { type: "grammar_pill", title: "Regra da Preposição BY para Transportes", rule: "Para indicar o MEIO de transporte que você utiliza, use SEMPRE a preposição 'BY' diretamente antes do veículo (sem artigo!).", formula: "BY + [Veículo] (by car, by bus, by train)", example: "I go to work BY bus. She travels BY plane." },
        { type: "grammar_pill", title: "Exceção Obrigatória: ON FOOT (A pé)", rule: "NUNCA DIGA 'by foot'! Para dizer que você vai a pé/caminhando, a única forma correta é 'ON FOOT'.", formula: "ON FOOT (exclusivo para ir a pé)", example: "I go to school ON FOOT. (NÃO 'by foot')." }
    ],
    stage3_practice: [
        { question: "1. Qual preposição usar para 'de ônibus': 'I go ___ bus'?", options: [{ label: "by", isCorrect: true }, { label: "on", isCorrect: false }, { label: "in", isCorrect: false }] },
        { question: "2. Como se diz 'ir a pé' corretamente em inglês?", options: [{ label: "on foot", isCorrect: true }, { label: "by foot", isCorrect: false }, { label: "with foot", isCorrect: false }] },
        { question: "3. Qual frase está com o erro de preposição?", options: [{ label: "I go to school by foot", isCorrect: true }, { label: "I go to school on foot", isCorrect: false }, { label: "I go to school by bus", isCorrect: false }] },
        { question: "4. Como se diz 'metrô' em inglês americano?", options: [{ label: "Subway", isCorrect: true }, { label: "Underground", isCorrect: false }, { label: "Train", isCorrect: false }] },
        { question: "5. Complete: 'They travel to Europe ___ plane.'", options: [{ label: "by", isCorrect: true }, { label: "on", isCorrect: false }, { label: "in", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I go to work by subway every day.", translation: "Eu vou para o trabalho de metrô todos os dias.", chunks: ["I", "go", "to", "work", "by", "subway", "every", "day", "."] },
        { sentenceEn: "She goes to school on foot.", translation: "Ela vai para a escola a pé.", chunks: ["She", "goes", "to", "school", "on", "foot", "."] }
    ],
    stage4_dialog: [
        { npcName: "Colleague", npcMessage: "How do you go to work?", options: [{ text: "I go by train.", isCorrect: true, feedback: "Resposta perfeita com 'by train'." }, { text: "I go by foot.", isCorrect: false, feedback: "Lembre-se: ir a pé é 'on foot'!" }, { text: "I am go by car.", isCorrect: false, feedback: "Sem o verbo To Be antes de 'go'." }] },
        { npcName: "Friend", npcMessage: "Does Sarah take the bus to university?", options: [{ text: "No, she goes on foot because it is near.", isCorrect: true, feedback: "Uso correto de 'on foot'." }, { text: "No, she goes by foot.", isCorrect: false, feedback: "'By foot' é um erro comum." }, { text: "No, she goes at bus.", isCorrect: false, feedback: "Usar 'by bus'." }] },
        { npcName: "Traveler", npcMessage: "How do we get to the airport?", options: [{ text: "You can go by taxi or by subway.", isCorrect: true, feedback: "Excelentes opções com 'by'." }, { text: "You can go on plane.", isCorrect: false, feedback: "Incorreto." }, { text: "You can go with bus.", isCorrect: false, feedback: "Usar 'by bus'." }] }
    ],
    stage5_quiz: [
        { question: "1. Para meios de transporte (carro, ônibus, trem) usamos a preposição:", options: [{ label: "by", isCorrect: true }, { label: "with", isCorrect: false }, { label: "on", isCorrect: false }] },
        { question: "2. A única expressão correta para 'a pé' é:", options: [{ label: "on foot", isCorrect: true }, { label: "by foot", isCorrect: false }, { label: "in foot", isCorrect: false }] },
        { question: "3. 'Subway' significa:", options: [{ label: "Metrô (EUA)", isCorrect: true }, { label: "Ônibus escolar", isCorrect: false }, { label: "Bicicleta", isCorrect: false }] },
        { question: "4. Qual a frase correta?", options: [{ label: "He goes to the office by car", isCorrect: true }, { label: "He goes to the office by a car", isCorrect: false }, { label: "He goes to office with car", isCorrect: false }] },
        { question: "5. 'By plane' significa:", options: [{ label: "De avião", isCorrect: true }, { label: "De plano", isCorrect: false }, { label: "De navio", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_28 = {
    id: "en_a1_mod_28",
    title: "Asking for Directions",
    section: 6,
    sectionTitle: "Places in the City, Travel & Final Challenge",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Excuse me, where is the hotel? Turn left. Go straight.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aprenda a pedir e dar direções e orientações na cidade (virar à esquerda/direita, seguir em frente, em frente a)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Turn left / Turn right", romaji: "/tɜːrn left / tɜːrn raɪt/", translation: "Vire à esquerda / Vire à direita", timeContext: "Mudança de direção." },
        { type: "vocab", kanji: "Go straight / Go straight ahead", romaji: "/ɡoʊ streɪt əˈhed/", translation: "Siga em frente / Siga reto", timeContext: "Manter trajetória." },
        { type: "vocab", kanji: "On the corner / Across from", romaji: "/ɒn ðə ˈkɔːrnər / əˈkrɒs frɒm/", translation: "Na esquina / Do outro lado da rua de", timeContext: "Pontos de referência." },
        { type: "grammar_pill", title: "Estrutura para Pedir Direções: Excuse me, where is...?", rule: "Sempre inicie com 'Excuse me' para ser cortês antes de pedir a localização.", formula: "Excuse me, where is + the + [Local]?", example: "Excuse me, where is the train station?" },
        { type: "grammar_pill", title: "Verbos no Imperativo para dar Direções", rule: "Para dar instruções de caminho, use o verbo diretamente na forma imperativa (sem sujeito!).", formula: "Verb + Direction (Turn left / Go straight / Cross the street)", example: "Turn left on Main Street. Go straight for two blocks." }
    ],
    stage3_practice: [
        { question: "1. Como se diz 'Vire à esquerda' em inglês?", options: [{ label: "Turn left", isCorrect: true }, { label: "Turn right", isCorrect: false }, { label: "Go left", isCorrect: false }] },
        { question: "2. Como se diz 'Siga em frente'?", options: [{ label: "Go straight", isCorrect: true }, { label: "Go back", isCorrect: false }, { label: "Turn straight", isCorrect: false }] },
        { question: "3. Como pedir licença e perguntar onde fica o museu?", options: [{ label: "Excuse me, where is the museum?", isCorrect: true }, { label: "Where is museum, please?", isCorrect: false }, { label: "How is the museum?", isCorrect: false }] },
        { question: "4. 'On the corner' significa:", options: [{ label: "Na esquina", isCorrect: true }, { label: "No meio da rua", isCorrect: false }, { label: "No metrô", isCorrect: false }] },
        { question: "5. 'Turn right' significa:", options: [{ label: "Vire à direita", isCorrect: true }, { label: "Vire à esquerda", isCorrect: false }, { label: "Retorne", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Go straight and turn left on Main Street.", translation: "Siga em frente e vire à esquerda na Rua Principal.", chunks: ["Go", "straight", "and", "turn", "left", "on", "Main", "Street", "."] },
        { sentenceEn: "The bank is on the corner.", translation: "O banco fica na esquina.", chunks: ["The", "bank", "is", "on", "the", "corner", "."] }
    ],
    stage4_dialog: [
        { npcName: "Lost Tourist", npcMessage: "Excuse me, where is the nearest pharmacy?", options: [{ text: "Go straight for two blocks and turn right.", isCorrect: true, feedback: "Instrução clara e perfeita de direção!" }, { text: "I don't know pharmacy.", isCorrect: false, feedback: "Pouco prestativo." }, { text: "Turn the pharmacy.", isCorrect: false, feedback: "Sem sentido." }] },
        { npcName: "Pedestrian", npcMessage: "Is the bus stop far from here?", options: [{ text: "No, it's right on the corner.", isCorrect: true, feedback: "Ponto de referência 'on the corner' exato!" }, { text: "No, go straight to bedroom.", isCorrect: false, feedback: "Fora de contexto." }, { text: "Yes, turn the bus.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Driver", npcMessage: "How do I get to the hotel?", options: [{ text: "Turn left at the traffic light and it's on your right.", isCorrect: true, feedback: "Direção completa e precisa." }, { text: "Go to hotel by plane.", isCorrect: false, feedback: "Descabido." }, { text: "It is a car.", isCorrect: false, feedback: "Sem nexo." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Turn right' traduz-se como:", options: [{ label: "Vire à direita", isCorrect: true }, { label: "Vire à esquerda", isCorrect: false }, { label: "Siga direto", isCorrect: false }] },
        { question: "2. Para mandar alguém seguir reto, dizemos:", options: [{ label: "Go straight", isCorrect: true }, { label: "Go right", isCorrect: false }, { label: "Turn straight", isCorrect: false }] },
        { question: "3. 'Across from' significa:", options: [{ label: "Do outro lado da rua de / Em frente a", isCorrect: true }, { label: "Dentro de", isCorrect: false }, { label: "Embaixo de", isCorrect: false }] },
        { question: "4. Qual frase está correta?", options: [{ label: "Excuse me, where is the station?", isCorrect: true }, { label: "Excuse me, where the station is?", isCorrect: false }, { label: "Excuse me, is where station?", isCorrect: false }] },
        { question: "5. Instruções de caminho usam verbos na forma:", options: [{ label: "Imperativa (Go, Turn, Cross)", isCorrect: true }, { label: "Passada", isCorrect: false }, { label: "Gerúndio (-ing)", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_29 = {
    id: "en_a1_mod_29",
    title: "Abilities & Requests (Can / Can't)",
    section: 6,
    sectionTitle: "Places in the City, Travel & Final Challenge",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "I can speak English. He can drive. Can you help me?",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Domine o verbo modal 'CAN' para expressar habilidades físicas e mentais e para fazer pedidos educados de ajuda."
    },
    stage2_drops: [
        { type: "vocab", kanji: "I can... / I can't...", romaji: "/aɪ kæn / aɪ kænt/", translation: "Eu posso/consigo... / Eu não posso/consigo...", timeContext: "Expressar capacidade/habilidade." },
        { type: "vocab", kanji: "Speak English / Drive / Swim", romaji: "/spiːk ˈɪŋɡlɪʃ / draɪv / swɪm/", translation: "Falar inglês / Dirigir / Nadar", timeContext: "Habilidades comuns." },
        { type: "vocab", kanji: "Can you help me?", romaji: "/kæn juː help miː/", translation: "Você pode me ajudar?", timeContext: "Pedido de ajuda." },
        { type: "grammar_pill", title: "O Verbo Modal CAN (Invariável)", rule: "O verbo CAN NUNCA MUDA! Não ganha 'S' na 3ª pessoa (He can, She can) e o verbo seguinte fica na forma base sem 'to'!", formula: "Subject + CAN + Verb (Base)", example: "He can speak English. (NÃO 'He cans speak' nem 'He can to speak')." },
        { type: "grammar_pill", title: "Negação CAN'T (Cannot) e Perguntas com CAN", rule: "A negação é 'can't'. Nas perguntas, inverte-se a ordem colocando 'Can' no início.", formula: "Negação ➔ Subject + CAN'T + Verb | Pergunta ➔ CAN + Subject + Verb?", example: "She can't swim. Can you drive?" }
    ],
    stage3_practice: [
        { question: "1. Qual frase está gramaticalmente CORRETA?", options: [{ label: "He can speak English", isCorrect: true }, { label: "He cans speak English", isCorrect: false }, { label: "He can to speak English", isCorrect: false }] },
        { question: "2. Como negar a frase 'I can swim'?", options: [{ label: "I can't swim", isCorrect: true }, { label: "I don't can swim", isCorrect: false }, { label: "I am not can swim", isCorrect: false }] },
        { question: "3. Como pedir ajuda educadamente?", options: [{ label: "Can you help me, please?", isCorrect: true }, { label: "Do you can help me?", isCorrect: false }, { label: "Are you help me?", isCorrect: false }] },
        { question: "4. Complete: 'She ___ drive a car, but she can ride a bike.'", options: [{ label: "can't", isCorrect: true }, { label: "don't", isCorrect: false }, { label: "isn't", isCorrect: false }] },
        { question: "5. O verbo após 'can' deve vir:", options: [{ label: "Na forma base sem 'to'", isCorrect: true }, { label: "Com 'to' antes", isCorrect: false }, { label: "Com 'ing' no final", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I can speak English very well.", translation: "Eu consigo falar inglês muito bem.", chunks: ["I", "can", "speak", "English", "very", "well", "."] },
        { sentenceEn: "Can you repeat that, please?", translation: "Você pode repetir isso, por favor?", chunks: ["Can", "you", "repeat", "that", ",", "please", "?"] }
    ],
    stage4_dialog: [
        { npcName: "Recruiter", npcMessage: "Can you speak English and drive a car?", options: [{ text: "Yes, I can speak English fluently and I can drive.", isCorrect: true, feedback: "Resposta perfeita demonstrando habilidades!" }, { text: "Yes, I am speak English.", isCorrect: false, feedback: "Não use To Be com 'speak'." }, { text: "Yes, I cans drive.", isCorrect: false, feedback: "'Can' nunca ganha 's'." }] },
        { npcName: "Tourist", npcMessage: "Excuse me, can you help me find the hotel?", options: [{ text: "Sure, I can help you! Follow me.", isCorrect: true, feedback: "Disponibilidade e simpatia exatas." }, { text: "No, I don't can.", isCorrect: false, feedback: "Negação correta é 'I can't'." }, { text: "I can to help.", isCorrect: false, feedback: "Não use 'to' após 'can'." }] },
        { npcName: "Friend", npcMessage: "Can you swim?", options: [{ text: "No, I can't swim, but I want to learn.", isCorrect: true, feedback: "Resposta natural com 'can't'." }, { text: "No, I not can swim.", isCorrect: false, feedback: "Negação incorreta." }, { text: "No, I am not swim.", isCorrect: false, feedback: "Falta o 'can't'." }] }
    ],
    stage5_quiz: [
        { question: "1. O verbo 'CAN' varia com a pessoa (he/she/it)?", options: [{ label: "Não, é invariável (I can, He can, They can)", isCorrect: true }, { label: "Sim, fica 'cans' com He", isCorrect: false }, { label: "Muda para 'canned' no presente", isCorrect: false }] },
        { question: "2. Como se escreve a contração negativa de 'cannot'?", options: [{ label: "can't", isCorrect: true }, { label: "don't can", isCorrect: false }, { label: "cann't", isCorrect: false }] },
        { question: "3. Qual a estrutura de pergunta correta?", options: [{ label: "Can you play guitar?", isCorrect: true }, { label: "Do you can play guitar?", isCorrect: false }, { label: "You can play guitar?", isCorrect: false }] },
        { question: "4. 'I can't hear you' significa:", options: [{ label: "Eu não consigo te ouvir", isCorrect: true }, { label: "Eu não quero te ouvir", isCorrect: false }, { label: "Eu não vou te ouvir", isCorrect: false }] },
        { question: "5. Após o verbo modal CAN, o verbo seguinte fica:", options: [{ label: "Na sua forma base sem 'to'", isCorrect: true }, { label: "Com o sufixo -ed", isCorrect: false }, { label: "Com o sufixo -ing", isCorrect: false }] }
    ]
};

const MODULO_EN_A1_30 = {
    id: "en_a1_mod_30",
    title: "🏆 A1 Final Challenge: The Airport & Hotel Simulation",
    section: 6,
    sectionTitle: "Places in the City, Travel & Final Challenge",
    level: "A1",
    xpReward: 150,
    stage1_context: {
        audioGuide: "Welcome to London International Airport! Ready for your final test?",
        missionTitle: "Desafio Final Integrativo A1",
        missionDescription: "Parabéns por chegar ao Módulo 30! Aqui você colocará à prova TODO o conhecimento do Nível A1: apresentações, compras, direções, hotel e vocabulário completo em uma simulação imersiva."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Passport & Boarding pass", romaji: "/ˈpɑːspɔːrt & ˈbɔːrdɪŋ pɑːs/", translation: "Passaporte e Cartão de embarque", timeContext: "Documentos de viagem." },
        { type: "vocab", kanji: "Reservation / Single room / Double room", romaji: "/ˌrezərˈveɪʃn/", translation: "Reserva / Quarto de solteiro / Quarto de casal", timeContext: "Vocabulário de hotel." },
        { type: "vocab", kanji: "Have a nice stay!", romaji: "/hæv ə naɪs steɪ/", translation: "Tenha uma boa estadia!", timeContext: "Desejo de boas-vindas no hotel." },
        { type: "grammar_pill", title: "Revisão Geral A1: To Be vs. Present Simple", rule: "To Be (am/is/are) descreve QUEM você é, ONDE você está e COMO você está. Present Simple (verbo de ação) descreve o que você FAZ!", formula: "State ➔ To Be | Action ➔ Verb", example: "I am a tourist (To Be). I speak English and I want a coffee (Action)." },
        { type: "grammar_pill", title: "Check-in de Hotel: Expressões Chave", rule: "Para fazer o check-in: 'I have a reservation under the name of...'", formula: "I have a reservation under [Name]", example: "I have a reservation under the name of Carlos Silva." }
    ],
    stage3_practice: [
        { question: "1. No balcão do aeroporto, o oficial pede seus documentos. O que você entrega?", options: [{ label: "My passport and boarding pass", isCorrect: true }, { label: "My credit card and keys", isCorrect: false }, { label: "My menu and bill", isCorrect: false }] },
        { question: "2. Como informar que você tem uma reserva de hotel no seu nome?", options: [{ label: "I have a reservation under the name of Smith", isCorrect: true }, { label: "I am a reservation for Smith", isCorrect: false }, { label: "My reservation is name Smith", isCorrect: false }] },
        { question: "3. Como pedir informações sobre o horário do café da manhã no hotel?", options: [{ label: "What time is breakfast?", isCorrect: true }, { label: "Where is time for eat?", isCorrect: false }, { label: "How much is breakfast time?", isCorrect: false }] },
        { question: "4. Qual a melhor resposta ao recepcionista que deseja 'Have a nice stay'?", options: [{ label: "Thank you very much!", isCorrect: true }, { label: "Good night, bye bye", isCorrect: false }, { label: "Excuse me, please", isCorrect: false }] },
        { question: "5. Se você precisa de ajuda com a mala, o que você diz?", options: [{ label: "Can you help me with my bag, please?", isCorrect: true }, { label: "Do you can help my bag?", isCorrect: false }, { label: "I am help bag.", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I have a reservation for a single room.", translation: "Eu tenho uma reserva para um quarto de solteiro.", chunks: ["I", "have", "a", "reservation", "for", "a", "single", "room", "."] },
        { sentenceEn: "Can I have the room key, please?", translation: "Você pode me ver a chave do quarto, por favor?", chunks: ["Can", "I", "have", "the", "room", "key", ",", "please", "?"] }
    ],
    stage4_dialog: [
        { npcName: "Immigration Officer", npcMessage: "Welcome to London! What is the purpose of your visit?", options: [{ text: "I am here on vacation. I am a tourist.", isCorrect: true, feedback: "Resposta impecável na imigração!" }, { text: "I have vacation and doctor.", isCorrect: false, feedback: "Incoerente." }, { text: "My name is London.", isCorrect: false, feedback: "Ela perguntou o motivo da viagem." }] },
        { npcName: "Hotel Receptionist", npcMessage: "Good evening! Welcome to the Grand Hotel. Do you have a reservation?", options: [{ text: "Good evening! Yes, I have a reservation under the name of Alex.", isCorrect: true, feedback: "Check-in perfeito e educado!" }, { text: "Good night! I am no reservation.", isCorrect: false, feedback: "'Good night' é despedida." }, { text: "Yes, I am a hotel.", isCorrect: false, feedback: "Erro de sujeito." }] },
        { npcName: "Taxi Driver", npcMessage: "Where to, sir/madam?", options: [{ text: "To the Grand Hotel downtown, please.", isCorrect: true, feedback: "Orientação precisa para o motorista!" }, { text: "I go by foot.", isCorrect: false, feedback: "Você está no táxi!" }, { text: "It is five o'clock.", isCorrect: false, feedback: "Ele perguntou para onde você quer ir." }] }
    ],
    stage5_quiz: [
        { question: "1. Parabéns! O Nível A1 capacita você a:", options: [{ label: "Se apresentar, fazer pedidos, pedir direções e comunicar no cotidiano", isCorrect: true }, { label: "Escrever romances complexos", isCorrect: false }, { label: "Fazer debates jurídicos", isCorrect: false }] },
        { question: "2. Como se diz 'cartão de embarque' em inglês?", options: [{ label: "Boarding pass", isCorrect: true }, { label: "Flight ticket key", isCorrect: false }, { label: "Airport card", isCorrect: false }] },
        { question: "3. 'Single room' em hotel refere-se a um quarto:", options: [{ label: "Para uma pessoa (solteiro)", isCorrect: true }, { label: "Para um casal", isCorrect: false }, { label: "Para dez pessoas", isCorrect: false }] },
        { question: "4. Qual preposição se usa com 'Monday'?", options: [{ label: "on", isCorrect: true }, { label: "in", isCorrect: false }, { label: "at", isCorrect: false }] },
        { question: "5. Qual frase conclui com êxito sua jornada A1?", options: [{ label: "I can communicate in English!", isCorrect: true }, { label: "I don't can speak", isCorrect: false }, { label: "I am not English learn", isCorrect: false }] }
    ]
};

// ==========================================
// VETOR DE DADOS CONSOLIDADO DO NÍVEL A1 (30 MÓDULOS)
// ==========================================
const CURSO_ENGLISH_A1_DADOS = [
    MODULO_EN_A1_01, MODULO_EN_A1_02, MODULO_EN_A1_03, MODULO_EN_A1_04, MODULO_EN_A1_05,
    MODULO_EN_A1_06, MODULO_EN_A1_07, MODULO_EN_A1_08, MODULO_EN_A1_09, MODULO_EN_A1_10,
    MODULO_EN_A1_11, MODULO_EN_A1_12, MODULO_EN_A1_13, MODULO_EN_A1_14, MODULO_EN_A1_15,
    MODULO_EN_A1_16, MODULO_EN_A1_17, MODULO_EN_A1_18, MODULO_EN_A1_19, MODULO_EN_A1_20,
    MODULO_EN_A1_21, MODULO_EN_A1_22, MODULO_EN_A1_23, MODULO_EN_A1_24, MODULO_EN_A1_25,
    MODULO_EN_A1_26, MODULO_EN_A1_27, MODULO_EN_A1_28, MODULO_EN_A1_29, MODULO_EN_A1_30
];

// Exportação e Compatibilidade Global
if (typeof window !== 'undefined') {
    window.CURSO_ENGLISH_A1_DADOS = CURSO_ENGLISH_A1_DADOS;
    if (typeof window.CURSO_A1_DADOS === 'undefined') {
        window.CURSO_A1_DADOS = CURSO_ENGLISH_A1_DADOS;
    }
}
