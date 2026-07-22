// ==========================================
// BANCO DE DADOS DO CURSO DE JAPONÊS - NÍVEL A1 (SEÇÃO 1 IMERSIVA)
// ==========================================

const MODULO_A1_01 = {
    id: "a1_mod_01",
    title: "Saudações Básicas & A Magia do 'Desu'",
    section: 1,
    sectionTitle: "Primeiros Passos & Etiqueta",
    level: "A1",
    xpReward: 70,
    stage1_context: {
        audioGuide: "Ohayou gozaimasu!",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Você acabou de pousar no Japão! Vamos aprender a cumprimentar as pessoas nas ruas em cada período do dia e dizer quem você é de forma educada e natural."
    },
    stage2_drops: [
        { type: "vocab", kanji: "おはようございます", romaji: "Ohayou gozaimasu", translation: "Bom dia (Formal)", timeContext: "Usado até aproximadamente 10h da manhã com professores, chefes e desconhecidos." },
        { type: "vocab", kanji: "こんにちは", romaji: "Konnichiwa", translation: "Boa tarde / Olá", timeContext: "Usado durante todo o dia claro (entre 10h e o pôr do sol)." },
        { type: "vocab", kanji: "こんばんは", romaji: "Konbanwa", translation: "Boa noite", timeContext: "Usado ao chegar ou encontrar alguém à noite (nunca para ir dormir!)." },
        { type: "grammar_pill", title: "O Camaleão 'です (Desu)'", rule: "Para dizer 'Eu sou...' ou 'É...', colocamos a palavra mágica です (desu) sempre no final da frase. Ela funciona como o verbo ser/estar e garante que você soe educado!", formula: "[ Seu Nome ] + です (desu)", example: "Carlos です ➔ (Sou o Carlos). Dica: O 'u' final não é pronunciado, soando como 'dess'." }
    ],
    // 5 PRÁTICAS GUIADAS
    stage3_practice: [
        {
            question: "1. Selecione o momento correto do dia para usar a saudação: 'Konnichiwa'",
            options: [
                { label: "🌅 Manhã bem cedo", isCorrect: false },
                { label: "☀️ Tarde (Dia claro)", isCorrect: true },
                { label: "🌙 Noite (Ao chegar)", isCorrect: false }
            ]
        },
        {
            question: "2. Como você deve cumprimentar o recepcionista do seu hotel às 07h30 da manhã?",
            options: [
                { label: "☀️ こんにちは (Konnichiwa)", isCorrect: false },
                { label: "🌅 おはようございます (Ohayou gozaimasu)", isCorrect: true },
                { label: "🌙 こんばんは (Konbanwa)", isCorrect: false }
            ]
        },
        {
            question: "3. Qual é a posição gramatical correta da palavra mágica 'です (desu)' na frase?",
            options: [
                { label: "Sempre no início absoluto da frase", isCorrect: false },
                { label: "No meio, entre o nome e a saudação", isCorrect: false },
                { label: "Sempre no final da frase", isCorrect: true }
            ]
        },
        {
            question: "4. Você chega a um restaurante tradicional em Quioto às 20h30. O que você diz ao garçom?",
            options: [
                { label: "🌙 こんばんは (Konbanwa)", isCorrect: true },
                { label: "🌅 おはようございます (Ohayou gozaimasu)", isCorrect: false },
                { label: "☀️ こんにちは (Konnichiwa)", isCorrect: false }
            ]
        },
        {
            question: "5. Para dizer formalmente 'Sou a Ana' em japonês, qual é a estrutura perfeita?",
            options: [
                { label: "Ana です (Ana desu)", isCorrect: true },
                { label: "です Ana (Desu Ana)", isCorrect: false },
                { label: "Ana おはよう (Ana ohayou)", isCorrect: false }
            ]
        }
    ],
    // 3 DIÁLOGOS INTERATIVOS
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está no elevador do hotel em Tóquio às 14:00 e um nativo simpático puxa assunto.",
            npcName: "Kenji",
            npcMessage: "こんにちは！ ケンジ です。 (Konnichiwa! Kenji desu.)",
            options: [
                { text: "おはようございます！", feedback: "Incorreto: São 14:00 da tarde!", isCorrect: false },
                { text: "こんにちは！ [Seu Nome] です.", feedback: "Mandou bem! Saudação correta para a tarde e uso perfeito do desu.", isCorrect: true },
                { text: "ケンジ です！", feedback: "Incorreto: Você acabou de dizer que se chama Kenji!", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Você entra em uma padaria local às 08:00 da manhã e o padeiro acena com um sorriso.",
            npcName: "Padeiro Sato",
            npcMessage: "あ！ おはようございます！ (Ah! Ohayou gozaimasu!)",
            options: [
                { text: "こんばんは！ [Seu Nome] です.", feedback: "Ops! 'Konbanwa' é usado apenas à noite!", isCorrect: false },
                { text: "おはようございます！ [Seu Nome] です.", feedback: "Perfeito! Você respondeu com o 'Bom dia' formal e se apresentou com naturalidade.", isCorrect: true },
                { text: "こんにちは！", feedback: "Inadequado para as 8h da manhã em um ambiente de comércio formal.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Você chega ao seu ryokan (pousada tradicional) às 19:45 e a anfitriã abre a porta de correr.",
            npcName: "Anfitriã Suzuki",
            npcMessage: "いらっしゃいませ！ こんばんは！ (Bem-vindo(a)! Boa noite!)",
            options: [
                { text: "こんばんは！ [Seu Nome] です.", feedback: "Excelente! Resposta educada, no tempo correto e com apresentação clara.", isCorrect: true },
                { text: "おはようございます！", feedback: "Incorreto: Você não pode dar 'Bom dia' às 19:45 da noite!", isCorrect: false },
                { text: "です [Seu Nome]！", feedback: "Erro gramatical grave: O 'desu' nunca pode vir antes do nome!", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Qual saudação você DEVE usar ao ver seu professor às 7h30 da manhã?", options: ["こんにちは (Konnichiwa)", "おはようございます (Ohayou gozaimasu)", "こんばんは (Konbanwa)"], correctIndex: 1 }
    ]
};

const MODULO_A1_02 = {
    id: "a1_mod_02",
    title: "Prazer em Conhecer & Cartões de Visita",
    section: 1,
    sectionTitle: "Primeiros Passos & Etiqueta",
    level: "A1",
    xpReward: 75,
    stage1_context: {
        audioGuide: "Hajimemashite! Yoroshiku onegaishimasu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "No Japão, a primeira impressão é tudo! Vamos aprender a reverência cultural das apresentações e a famosa troca de cartões de visita (Meishi)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "はじめまして", romaji: "Hajimemashite", translation: "Prazer em conhecer / Como vai?", timeContext: "Dito literalmente no primeiríssimo segundo em que você conhece alguém." },
        { type: "vocab", kanji: "よろしくおねがいします", romaji: "Yoroshiku onegaishimasu", translation: "Conto com sua gentileza / Prazer em conhecê-lo", timeContext: "Frase essencial dita sempre ao FINAL de uma apresentação." },
        { type: "vocab", kanji: "こちらこそ", romaji: "Kochirakoso", translation: "O prazer é todo meu / Igualmente", timeContext: "Usado para responder quando alguém diz 'Yoroshiku onegaishimasu' para você." },
        { type: "grammar_pill", title: "O Sanduíche de Ouro da Apresentação", rule: "Toda apresentação formal japonesa segue uma fórmula perfeita de 3 passos parecida com um sanduíche!", formula: "はじめまして + [Nome] です + よろしくおねがいします", example: "Hajimemashite. Ana desu. Yoroshiku onegaishimasu." }
    ],
    // 5 PRÁTICAS GUIADAS
    stage3_practice: [
        {
            question: "1. Qual é a primeiríssima palavra que você deve dizer ao ser apresentado a uma pessoa nova?",
            options: [
                { label: "🤝 はじめまして (Hajimemashite)", isCorrect: true },
                { label: "🙇 よろしくおねがいします (Yoroshiku onegaishimasu)", isCorrect: false },
                { label: "🙏 こちらこそ (Kochirakoso)", isCorrect: false }
            ]
        },
        {
            question: "2. Como você responde se um colega japonês se apresenta e diz: 'Yoroshiku onegaishimasu'?",
            options: [
                { label: "🤝 こちらこそ (Kochirakoso - O prazer é meu!)", isCorrect: true },
                { label: "🌅 おはようございます (Ohayou gozaimasu)", isCorrect: false },
                { label: "👋 さようなら (Sayounara)", isCorrect: false }
            ]
        },
        {
            question: "3. Qual frase é considerada obrigatória para FECHAR (encerrar) uma apresentação formal?",
            options: [
                { label: "はじめまして (Hajimemashite)", isCorrect: false },
                { label: "よろしくおねがいします (Yoroshiku onegaishimasu)", isCorrect: true },
                { label: "こんにちは (Konnichiwa)", isCorrect: false }
            ]
        },
        {
            question: "4. No 'Sanduíche de Apresentação', o que deve ficar no MEIO da frase?",
            options: [
                { label: "A saudação inicial Hajimemashite", isCorrect: false },
                { label: "O seu nome acompanhado de 'です (desu)'", isCorrect: true },
                { label: "O agradecimento Kochirakoso", isCorrect: false }
            ]
        },
        {
            question: "5. Culturalmente, o que a expressão 'Yoroshiku onegaishimasu' transmite ao interlocutor?",
            options: [
                { label: "'Espero construirmos uma boa relação / Conto com sua gentileza'", isCorrect: true },
                { label: "'Que horas são agora?'", isCorrect: false },
                { label: "'Me desculpe pelo incômodo'", isCorrect: false }
            ]
        }
    ],
    // 3 DIÁLOGOS INTERATIVOS
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está em uma reunião na empresa e o diretor Tanaka se aproxima para trocar cartões.",
            npcName: "Tanaka",
            npcMessage: "はじめまして。タナカ です。よろしくおねがいします。",
            options: [
                { text: "こちらこそ！ [Seu Nome] です。よろしくおねがいします。", feedback: "Perfeito! Você devolveu a cortesia com 'Kochirakoso' e se apresentou corretamente.", isCorrect: true },
                { text: "こんばんは！ タナカ です.", feedback: "Incorreto: Você não se chama Tanaka e usou boa noite!", isCorrect: false },
                { text: "はじめまして！", feedback: "Incompleto: Faltou dizer seu nome e o 'Yoroshiku onegaishimasu'.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Você se mudou para uma sharehouse (casa compartilhada) em Tóquio e encontra seu novo colega de quarto na sala.",
            npcName: "Hiro",
            npcMessage: "あ、こんにちは！ はじめまして、ヒロ です。",
            options: [
                { text: "よろしくおねがいします！", feedback: "Incompleto: Você foi educado, mas esqueceu de dizer seu nome!", isCorrect: false },
                { text: "じめまして！ [Seu Nome] です。 よろしくおねがいします！", feedback: "Excelente! Aplicou a técnica do sanduíche completa, gerando uma ótima primeira impressão.", isCorrect: true },
                { text: "こちらこそ！ ヒロ です.", feedback: "Incorreto: 'Kochirakoso' só se usa para responder a um 'Yoroshiku', e você disse que é o Hiro!", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Em um encontro de intercâmbio, você acaba de dizer 'Hajimemashite, [Seu Nome] desu. Yoroshiku onegaishimasu' para uma estudante.",
            npcName: "Estudante Sakura",
            npcMessage: "わあ！ [Seu Nome]・さん！ よろしくおねがいします！",
            options: [
                { text: "こちらこそ！ (Kochirakoso!)", feedback: "Mandou bem! Respondeu prontamente com 'O prazer é todo meu' para selar a amizade.", isCorrect: true },
                { text: "じめまして！", feedback: "Incorreto: Vocês já disseram 'Hajimemashite' no início do diálogo!", isCorrect: false },
                { text: "おはようございます！", feedback: "Fora de contexto gramatical e situacional.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Qual expressão deve fechar (encerrar) a sua apresentação pessoal no Japão?", options: ["はじめまして (Hajimemashite)", "よろしくおねがいします (Yoroshiku onegaishimasu)", "こんにちは (Konnichiwa)"], correctIndex: 1 }
    ]
};

const MODULO_A1_03 = {
    id: "a1_mod_03",
    title: "As Palavras Mágicas: Arigatou & Sumimasen",
    section: 1,
    sectionTitle: "Primeiros Passos & Etiqueta",
    level: "A1",
    xpReward: 75,
    stage1_context: {
        audioGuide: "Arigatou gozaimasu! Sumimasen!",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "A gentileza é a espinha dorsal do Japão. Hoje você vai dominar as duas palavras mais importantes para sobreviver em lojas, trens e restaurantes."
    },
    stage2_drops: [
        { type: "vocab", kanji: "ありがとうございます", romaji: "Arigatou gozaimasu", translation: "Muito obrigado (Formal)", timeContext: "A forma educada padrão. Dizer apenas 'Arigatou' é casual demais para desconhecidos." },
        { type: "vocab", kanji: "すみません", romaji: "Sumimasen", translation: "Com licença / Desculpe / Obrigado", timeContext: "O canivete suíço japonês! Serve para chamar o garçom, pedir licença no trem ou pedir desculpas leves." },
        { type: "vocab", kanji: "ごめんなさい", romaji: "Gomennasai", translation: "Me desculpe / Perdão", timeContext: "Mais pessoal e emocional. Usado com amigos, família ou quando você realmente cometeu um erro." },
        { type: "grammar_pill", title: "Os 3 Superpoderes do 'Sumimasen'", rule: "Por que os japoneses usam tanto Sumimasen? Porque ele tem 3 funções em 1 só palavra!", formula: "1. Chamar Atenção (Ei, garçom!) | 2. Pedir Licença/Desculpa | 3. Agradecer um favor", example: "Se alguém pega algo que você deixou cair no chão, você diz 'Sumimasen' (Desculpe o incômodo / Obrigado)." }
    ],
    // 5 PRÁTICAS GUIADAS
    stage3_practice: [
        {
            question: "1. Você entra em um restaurante no Japão e quer chamar o garçom até a sua mesa. O que você grita educadamente?",
            options: [
                { label: "🙏 ごめんなさい (Gomennasai!)", isCorrect: false },
                { label: "🙋‍♂️ すみません！ (Sumimasen!)", isCorrect: true },
                { label: "🤝 はじめまして (Hajimemashite)", isCorrect: false }
            ]
        },
        {
            question: "2. Qual é a diferença fundamental entre 'Sumimasen' e 'Gomennasai'?",
            options: [
                { label: "Gomennasai é social/leve; Sumimasen é apenas para a família", isCorrect: false },
                { label: "Gomennasai é emotivo/pessoal para erros; Sumimasen é social, leve e multifuncional", isCorrect: true },
                { label: "Não há diferença, significam exatamente a mesma coisa em tudo", isCorrect: false }
            ]
        },
        {
            question: "3. Por que devemos evitar dizer apenas 'Arigatou' (sem gozaimasu) para um vendedor de loja?",
            options: [
                { label: "Porque soa íntimo e informal demais para um desconhecido", isCorrect: true },
                { label: "Porque 'Arigatou' significa 'Adeus'", isCorrect: false },
                { label: "Porque os vendedores não entendem essa palavra", isCorrect: false }
            ]
        },
        {
            question: "4. Você está no trem lotado e precisa passar pelas pessoas para descer na estação. O que você vai dizendo?",
            options: [
                { label: "ありがとうございます (Arigatou gozaimasu)", isCorrect: false },
                { label: "すみません (Sumimasen - Com licença!)", isCorrect: true },
                { label: "こんばんは (Konbanwa)", isCorrect: false }
            ]
        },
        {
            question: "5. Se alguém corre para segurar a porta do elevador para você não perder a viagem, por que um japonês diria 'Sumimasen'?",
            options: [
                { label: "Para xingar a pessoa que segurou a porta", isCorrect: false },
                { label: "Porque Sumimasen também funciona como agradecimento ('Desculpe o incômodo que te causei')", isCorrect: true },
                { label: "Porque o elevador quebrou", isCorrect: false }
            ]
        }
    ],
    // 3 DIÁLOGOS INTERATIVOS
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está saindo do metrô lotado em Tóquio e acidentalmente pisa de leve no pé de uma senhora.",
            npcName: "Senhora no Metrô",
            npcMessage: "いてっ！ (Ite! - Ai!)",
            options: [
                { text: "ありがとうございます！ (Arigatou gozaimasu)", feedback: "Incorreto! Você não pode agradecer por pisar no pé de alguém!", isCorrect: false },
                { text: "あ、すみません！ (A, sumimasen!)", feedback: "Excelente! Uma desculpa rápida, educada e socialmente perfeita para o dia a dia.", isCorrect: true },
                { text: "よろしくおねがいします！ (Yoroshiku...)", feedback: "Incorreto: Isso é usado em apresentações pessoais.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Você deixa sua carteira cair na rua e um pedestre corre atrás de você para devolvê-la.",
            npcName: "Pedestre Gentil",
            npcMessage: "あの！ これ、おちましたよ！ (Com licença! Isso caiu!)",
            options: [
                { text: "ごめんなさい！ (Gomennasai!)", feedback: "Ops! Gomennasai soa como se você tivesse cometido um crime contra ele. Use agradecimento!", isCorrect: false },
                { text: "あ！ ありがとうございます！ すみません！", feedback: "Perfeito! O combo 'Muito obrigado + Desculpe o incômodo' é o auge da fluência cultural!", isCorrect: true },
                { text: "はじめまして！", feedback: "Incorreto: Não é hora de se apresentar, é hora de agradecer!", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Você entra em um Izakaya (bar tradicional) barulhento e está pronto para fazer seu pedido.",
            npcName: "Garçom (De costas, longe da mesa)",
            npcMessage: "*(Limpando o balcão do outro lado da sala)*",
            options: [
                { text: "すみません！ (Sumimasen!)", feedback: "Mandou bem! Em restaurantes japoneses, é normal e esperado chamar o garçom em bom som com Sumimasen.", isCorrect: true },
                { text: "こんにちは！ (Konnichiwa!)", feedback: "Incomum para chamar garçons em restaurantes.", isCorrect: false },
                { text: "こちらこそ！ (Kochirakoso!)", feedback: "Completamente sem sentido no contexto.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Qual a diferença entre 'Sumimasen' e 'Gomennasai' ao pedir desculpas?", options: ["Não há nenhuma diferença, são idênticos em tudo.", "Gomennasai é mais pessoal/afetivo para erros; Sumimasen é social, leve e serve para chamar atenção.", "Sumimasen só pode ser usado à noite."], correctIndex: 1 }
    ]
};

const MODULO_A1_04 = {
    id: "a1_mod_04",
    title: "Despedidas e Variações: Sayounara vs. Ja ne",
    section: 1,
    sectionTitle: "Primeiros Passos & Etiqueta",
    level: "A1",
    xpReward: 80,
    stage1_context: {
        audioGuide: "Otsukaresama deshita! Ja ne!",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Sabia que os japoneses quase nunca usam 'Sayounara' no dia a dia? Vamos aprender a nos despedir do jeito certo entre amigos e no trabalho!"
    },
    stage2_drops: [
        { type: "vocab", kanji: "さようなら", romaji: "Sayounara", translation: "Adeus / Até um longo tempo", timeContext: "Evite no dia a dia! Soa dramático, como se você não fosse ver a pessoa por muito tempo." },
        { type: "vocab", kanji: "じゃあね / またね", romaji: "Ja ne / Mata ne", translation: "Até logo / Tchau tchau!", timeContext: "A forma mais comum e natural de se despedir de amigos, colegas de escola e familiares." },
        { type: "vocab", kanji: "おつかれさまでした", romaji: "Otsukaresama deshita", translation: "Obrigado pelo seu duro trabalho / Bom descanso", timeContext: "Frase sagrada no ambiente de trabalho e cursos ao final do dia ou de um projeto." },
        { type: "vocab", kanji: "しつれいします", romaji: "Shitsurei shimasu", translation: "Com licença (ao me retirar)", timeContext: "Despedida muito formal usada ao sair da sala de um professor, chefe ou cliente." },
        { type: "grammar_pill", title: "A Armadilha do 'Sayounara'", rule: "Em animes antigos traduzimos Sayounara como simples 'Tchau', mas no Japão real tem peso de 'Adeus final'.", formula: "Amigos ➔ じゃあね (Ja ne) | Trabalho ➔ おつかれさま (Otsukaresama)", example: "Dizer Sayounara para o chefe no fim do dia soa como se você estivesse se demitindo da empresa!" }
    ],
    // 5 PRÁTICAS GUIADAS
    stage3_practice: [
        {
            question: "1. Você terminou seu turno de trabalho na loja e está indo para casa enquanto seus colegas ainda estão lá. O que você diz?",
            options: [
                { label: "👋 さようなら (Sayounara)", isCorrect: false },
                { label: "💼 おつかれさまでした (Otsukaresama deshita)", isCorrect: true },
                { label: "🌅 おはようございます (Ohayou gozaimasu)", isCorrect: false }
            ]
        },
        {
            question: "2. Como você se despede do seu melhor amigo japonês ao final de um passeio no shopping?",
            options: [
                { label: "🙇 しつれいします (Shitsurei shimasu)", isCorrect: false },
                { label: "👋 じゃあね！ / またね！ (Ja ne! / Mata ne!)", isCorrect: true },
                { label: "😭 さようなら (Sayounara)", isCorrect: false }
            ]
        },
        {
            question: "3. Por que dizer 'Sayounara' para sua esposa/marido antes de ir trabalhar de manhã é um erro horrível?",
            options: [
                { label: "Porque soa como se você estivesse pedindo divórcio e nunca mais fosse voltar", isCorrect: true },
                { label: "Porque é informal demais para casais", isCorrect: false },
                { label: "Porque significa 'Bom apetite'", isCorrect: false }
            ]
        },
        {
            question: "4. Você está na sala de um professor universitário tirando dúvidas. Ao fechar a porta para ir embora, o que você diz?",
            options: [
                { label: "じゃあね！ (Ja ne!)", isCorrect: false },
                { label: "しつれいします (Shitsurei shimasu - Com licença ao me retirar)", isCorrect: true },
                { label: "こんにちは (Konnichiwa)", isCorrect: false }
            ]
        },
        {
            question: "5. Quando um colega de trabalho diz 'Otsukaresama deshita' para você no elevador da empresa, qual é a melhor resposta?",
            options: [
                { label: "Repetir: おつかれさまでした (Otsukaresama deshita!)", isCorrect: true },
                { label: "Dizer: はじめまして (Hajimemashite)", isCorrect: false },
                { label: "Dizer: ごめんなさい (Gomennasai)", isCorrect: false }
            ]
        }
    ],
    // 3 DIÁLOGOS INTERATIVOS
    stage4_dialog: [
        {
            scenario: "Situação 1: Sua aula de japonês acabou e você está se despedindo do seu colega de classe, Kenji, no portão da escola.",
            npcName: "Kenji",
            npcMessage: "きょうは たのしかったね！ また あした！ (Hoje foi divertido! Até amanhã!)",
            options: [
                { text: "しつれいします (Shitsurei shimasu)", feedback: "Muitíssimo formal e robótico para dizer a um amigo de classe!", isCorrect: false },
                { text: "うん、じゃあね！ またね！ (Un, ja ne! Mata ne!)", feedback: "Perfeito! Natural, amigável e com a entonação exata entre amigos.", isCorrect: true },
                { text: "さようなら... (Sayounara...)", feedback: "Incorreto! O Kenji vai achar que você vai mudar de cidade e nunca mais voltará!", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: São 18:00 na empresa de TI. Seu chefe, o Sr. Sato, pega a pasta e se levanta para ir embora.",
            npcName: "Chefe Sato",
            npcMessage: "おさきに しつれいします。 (Com licença, estou indo na frente.)",
            options: [
                { text: "じゃあね、サトウ・さん！", feedback: "Extremamente informal! Falar assim com o chefe pode causar demissão!", isCorrect: false },
                { text: "おつかれさまでした！ (Otsukaresama deshita!)", feedback: "Excelente! Resposta corporativa perfeita, agradecendo o esforço do chefe.", isCorrect: true },
                { text: "こんにちは！", feedback: "Incorreto: Isso é saudação de chegada à tarde, não de saída à noite.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Você termina uma entrevista de emprego de 30 minutos na empresa dos seus sonhos e se levanta da cadeira.",
            npcName: "Entrevistador",
            npcMessage: "きょうは ありがとうございました。 けっか は メール で おくり ます。 (Obrigado por hoje. Enviaremos o resultado por e-mail.)",
            options: [
                { text: "ありがとうございます！ しつれいします！", feedback: "Impecável! 'Muito obrigado! Com licença ao me retirar' mostra respeito e etiqueta profissional de alto nível.", isCorrect: true },
                { text: "またね！ バイバイ！ (Até logo! Bye bye!)", feedback: "Socorro! Informal demais! Adeus vaga de emprego!", isCorrect: false },
                { text: "さようなら！", feedback: "Passa a impressão de que você desistiu da vaga para sempre.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Por que não devemos dizer 'Sayounara' para colegas ao sair do trabalho todo dia?", options: ["Porque é uma gíria muito informal de adolescentes.", "Porque passa uma ideia dramática de separação longa ou adeus definitivo.", "Porque é proibido por lei no Japão."], correctIndex: 1 }
    ]
};

const MODULO_A1_05 = {
    id: "a1_mod_05",
    title: "Pessoas, Pronomes e Respeito (-san, -sensei)",
    section: 1,
    sectionTitle: "Primeiros Passos & Etiqueta",
    level: "A1",
    xpReward: 85,
    stage1_context: {
        audioGuide: "Tanaka-san! Sensei, konnichiwa!",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Fechar a Seção 1 com chave de ouro! Vamos aprender a chamar as pessoas com respeito e entender por que os japoneses evitam a palavra 'Você' (Anata)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～さん", romaji: "~san", translation: "Sr. / Sra. / Senhorita", timeContext: "O sufixo de respeito mais seguro do Japão. Use após o nome de qualquer adulto." },
        { type: "vocab", kanji: "～せんせい", romaji: "~sensei", translation: "Professor(a) / Médico(a) / Mestre", timeContext: "Título usado no lugar do '-san' para pessoas que ensinam ou curam." },
        { type: "vocab", kanji: "わたし", romaji: "Watashi", translation: "Eu", timeContext: "O pronome pessoal neutro e educado para 'Eu', usado tanto por homens quanto por mulheres." },
        { type: "grammar_pill", title: "A Regra de Ouro do '-san'", rule: "NUNCA, em hipótese alguma, coloque '-san' no seu PRÓPRIO nome! Isso soa extremamente arrogante e bizarro no Japão.", formula: "Correto ➔ [Nome do Outro] + さん | Errado ➔ わたしは [Seu Nome] + さん です", example: "Falar 'Watashi wa Carlos-san desu' é como dizer em português 'Eu sou o Vossa Excelência Carlos'." }
    ],
    // 5 PRÁTICAS GUIADAS
    stage3_practice: [
        {
            question: "1. Qual das frases abaixo está CULTURALMENTE CORRETA ao se apresentar?",
            options: [
                { label: "こんにちは！ わたしは ぺどろ・さん です。 (Sou o Pedro-san)", isCorrect: false },
                { label: "こんにちは！ ぺどろ です。 (Sou o Pedro)", isCorrect: true },
                { label: "はじめまして！ わたしは せんせい です。 (Sou o Sensei)", isCorrect: false }
            ]
        },
        {
            question: "2. Você vai se consultar com a médica Dra. Takahashi na clínica. Como você a chama?",
            options: [
                { label: "タカハシ・せんせい (Takahashi-sensei)", isCorrect: true },
                { label: "タカハシ・さん (Takahashi-san)", isCorrect: false },
                { label: "タカハシ (Apenas Takahashi sem sufixo)", isCorrect: false }
            ]
        },
        {
            question: "3. Por que colocar '~san' no seu próprio nome é considerado um gafe constrangedora?",
            options: [
                { label: "Porque '~san' é um título de respeito para elevar o OUTRO; usá-lo em si mesmo soa arrogante", isCorrect: true },
                { label: "Porque '~san' significa 'criança'", isCorrect: false },
                { label: "Porque só estrangeiros têm permissão para usar", isCorrect: false }
            ]
        },
        {
            question: "4. Qual é o pronome pessoal mais educado e neutro para 'Eu', seguro em qualquer situação formal?",
            options: [
                { label: "俺 (Ore - muito masculino/gíria)", isCorrect: false },
                { label: "わたし (Watashi)", isCorrect: true },
                { label: "あなた (Anata)", isCorrect: false }
            ]
        },
        {
            question: "5. Ao falar com seu cliente, o Sr. Yamamoto, por que você não deve chamá-lo apenas de 'Yamamoto'?",
            options: [
                { label: "Chamar adultos sem sufixo de respeito (yobisute) é considerado extremamente rude no Japão", isCorrect: true },
                { label: "Porque Yamamoto é um nome proibido", isCorrect: false },
                { label: "Porque os japoneses não usam sobrenomes", isCorrect: false }
            ]
        }
    ],
    // 3 DIÁLOGOS INTERATIVOS
    stage4_dialog: [
        {
            scenario: "Situação 1: Você encontra seu professor de japonês no corredor da universidade.",
            npcName: "Professor Sato",
            npcMessage: "あ！ こんにちは！ おげんき ですか？ (Ah! Olá! Como você está?)",
            options: [
                { text: "こんにちは、サトウ・さん！ (Konnichiwa, Sato-san!)", feedback: "Atenção: Para professores, usamos '-sensei' e nunca '-san'!", isCorrect: false },
                { text: "こんにちは、サトウ・せんせい！ げんき です！ (Olá, Sato-sensei! Estou bem!)", feedback: "Mandou muito bem! Usou o título de honra exato para um mestre/professor.", isCorrect: true },
                { text: "おい！ サトウ！ (Oi! Sato!)", feedback: "Extremamente rude! Chamar o professor apenas pelo sobrenome é uma ofensa grave.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Você está se apresentando em uma importante convenção de negócios em Osaka.",
            npcName: "Diretor Suzuki",
            npcMessage: "はじめまして。スズキ です。よろしくおねがいします。",
            options: [
                { text: "じめまして！ [Seu Nome]・さん です。 よろしくおねがいします！", feedback: "Gafe grave! Você colocou '-san' no seu próprio nome! Soou arrogante.", isCorrect: false },
                { text: "はじめまして！ [Seu Nome] です。 こちらこそ、よろしくおねがいします！", feedback: "Impecável! Apresentação humilde (sem -san para si mesmo) e respeitosa com o diretor.", isCorrect: true },
                { text: "こんにちは、スズキ！", feedback: "Incorreto: Esqueceu o '-san' ao se referir ao Diretor Suzuki!", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Na clínica médica, o enfermeiro precisa confirmar de quem é a vez para a consulta com o Dr. Tanaka.",
            npcName: "Enfermeiro",
            npcMessage: "[Seu Nome]・さん！ タナカ・せんせい が おまち です。 (Sr(a). [Seu Nome]! O Dr. Tanaka está esperando.)",
            options: [
                { text: "はい！ わたし です！ ありがとう！ (Sim! Sou eu! Obrigado!)", feedback: "Perfeito! Usou o pronome 'Watashi' corretamente e entendeu o título '-sensei' do médico.", isCorrect: true },
                { text: "はい！ わたし・せんせい です！", feedback: "Ops! Você chamou a si mesmo de 'Sensei' na frente da equipe médica!", isCorrect: false },
                { text: "いいえ、タナカ・さん です。", feedback: "Incorreto: Você rebaixou o título do médico de '-sensei' para '-san'!", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Por que é considerado um erro grave dizer 'Watashi wa Maria-san desu'?", options: ["Porque '-san' é usado exclusivamente para homens.", "Porque não se deve usar sufixos de respeito (-san, -sensei) para se referir a si mesmo.", "Porque a palavra 'Watashi' significa 'Você'."], correctIndex: 1 }
    ]
};

// ==========================================
// SEÇÃO 2: IDENTIDADE & PROFISSÕES (MÓDULOS 6 AO 10 HIPER-IMERSIVOS)
// ==========================================

const MODULO_A1_06 = {
    id: "a1_mod_06",
    title: "Nacionalidades e Países (Jin & Go)",
    section: 2,
    sectionTitle: "Identidade & Profissões",
    level: "A1",
    xpReward: 85,
    stage1_context: {
        audioGuide: "Watashi wa Burajiru-jin desu. Nihon-go desu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "De onde você é e qual língua você fala? No Japão, dizer sua nacionalidade é o primeiro passo para criar amizades internacionais. Vamos dominar os sufixos mágicos de país e idioma!"
    },
    stage2_drops: [
        { type: "vocab", kanji: "にほん (日本)", romaji: "Nihon", translation: "Japão", timeContext: "O nome nativo do país do sol nascente." },
        { type: "vocab", kanji: "ブラジル", romaji: "Burajiru", translation: "Brasil", timeContext: "Como é um nome estrangeiro, é sempre escrito no alfabeto Katakana!" },
        { type: "vocab", kanji: "～じん (人)", romaji: "~jin", translation: "Sufixo de Nacionalidade (Pessoa de...)", timeContext: "Basta colar após o nome de qualquer país para dizer a nacionalidade." },
        { type: "vocab", kanji: "～ご (語)", romaji: "~go", translation: "Sufixo de Idioma (Língua de...)", timeContext: "Colado após o nome do país para se referir à língua falada ali." },
        { type: "grammar_pill", title: "O Lego das Nacionalidades", rule: "Para criar nacionalidades e idiomas no japonês, você não precisa decorar palavras totalmente novas! Basta pegar o nome do país e adicionar o sufixo correto no final.", formula: "País + じん (jin) = Nacionalidade | País + ご (go) = Idioma", example: "Nihon (Japão) ➔ Nihon-jin (Japonês/Pessoa) ➔ Nihon-go (Língua Japonesa). Brasil ➔ Burajiru-jin (Brasileiro)." }
    ],
    // 5 PRÁTICAS GUIADAS
    stage3_practice: [
        {
            question: "1. Como se diz 'Eu sou brasileiro(a)' de forma formal em japonês?",
            options: [
                { label: "🇧🇷 わたしは ブラジルじん です (Watashi wa Burajiru-jin desu)", isCorrect: true },
                { label: "🗣️ わたしは ブラジルご です (Watashi wa Burajiru-go desu)", isCorrect: false },
                { label: "🗾 わたしは にほんじん です (Watashi wa Nihon-jin desu)", isCorrect: false }
            ]
        },
        {
            question: "2. O que acontece se você disser 'Watashi wa Burajiru-go desu' em uma apresentação?",
            options: [
                { label: "Você estará dizendo corretamente que nasceu no Brasil", isCorrect: false },
                { label: "Você estará dizendo 'Eu sou o idioma brasileiro', o que soa muito engraçado!", isCorrect: true },
                { label: "Você estará ofendendo a pessoa com uma gíria rude", isCorrect: false }
            ]
        },
        {
            question: "3. Qual é o sufixo correto para se referir ao IDIOMA japonês?",
            options: [
                { label: "～じん (~jin)", isCorrect: false },
                { label: "～さん (~san)", isCorrect: false },
                { label: "～ご (~go)", isCorrect: true }
            ]
        },
        {
            question: "4. Por que a palavra 'Burajiru' (Brasil) é escrita com o alfabeto Katakana?",
            options: [
                { label: "Porque todas as palavras de origem estrangeira são escritas em Katakana", isCorrect: true },
                { label: "Porque é uma palavra sagrada", isCorrect: false },
                { label: "Porque os japoneses não conseguem pronunciar o Hiragana", isCorrect: false }
            ]
        },
        {
            question: "5. Se 'Eigo' (英語) significa 'Língua Inglesa', qual seria a tradução lógica de 'Furansu-jin' (フランス人)?",
            options: [
                { label: "Língua Francesa", isCorrect: false },
                { label: "Pessoa Francesa / Francês (Nacionalidade)", isCorrect: true },
                { label: "A cidade de Paris", isCorrect: false }
            ]
        }
    ],
    // 3 DIÁLOGOS INTERATIVOS
    stage4_dialog: [
        {
            scenario: "Situação 1: Você passa pela imigração no Aeroporto de Narita e o oficial pergunta sua nacionalidade.",
            npcName: "Oficial de Imigração",
            npcMessage: "こんにちは。[Seu Nome]・さん ですね。おくに は どちら ですか？ (Olá, Sr(a). [Seu Nome]. Qual é o seu país?)",
            options: [
                { text: "こんにちは！ ブラジルじん です。よろしくおねがいします。", feedback: "Perfeito! Você respondeu sua nacionalidade de forma clara e respeitosa com o oficial.", isCorrect: true },
                { text: "ブラジルご です！", feedback: "Ops! Você respondeu 'Sou o idioma brasileiro' para o oficial da imigração!", isCorrect: false },
                { text: "さようなら！", feedback: "Incorreto: Nunca se despeça antes de responder a pergunta da imigração!", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Em uma recepção de estudantes em Tóquio, uma japonesa simpatiza com você.",
            npcName: "Estudante Haruka",
            npcMessage: "わあ！ はじめまして！ わたし は にほんじん です。",
            options: [
                { text: "じめまして！ [Seu Nome] です。 わたし は ブラジルじん です！", feedback: "Excelente! Você retribuiu a apresentação e usou o sufixo -jin perfeitamente para criar conexão.", isCorrect: true },
                { text: "こちらこそ！ にほんじん です！", feedback: "Incorreto: Você disse que também é japonês(a) e usou 'Kochirakoso' no momento errado!", isCorrect: false },
                { text: "おはようございます！", feedback: "Fora de contexto e não responde à apresentação dela.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Em uma livraria em Quioto, você está procurando um livro para estudar o idioma local.",
            npcName: "Atendente da Livraria",
            npcMessage: "いらっしゃいませ！ なに を おさがし ですか？ (Bem-vindo! O que está procurando?)",
            options: [
                { text: "すみません！ にほんご の ほん (Livro) です！", feedback: "Mandou muito bem! Usou 'Sumimasen' para chamar atenção e pediu pelo idioma Nihon-go corretamente.", isCorrect: true },
                { text: "にほんじん です！", feedback: "Confuso: O atendente perguntou o que você procura e você respondeu 'Sou uma pessoa japonesa'!", isCorrect: false },
                { text: "よろしくおねがいします！", feedback: "Incompleto e sem sentido para um pedido de ajuda em loja.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Qual a diferença estrutural entre 'Nihon-jin' e 'Nihon-go'?", options: ["Nihon-jin é formal e Nihon-go é gíria.", "Nihon-jin se refere à nacionalidade/pessoa e Nihon-go se refere ao idioma japonês.", "Não há diferença, significam a mesma coisa."], correctIndex: 1 }
    ]
};

const MODULO_A1_07 = {
    id: "a1_mod_07",
    title: "Profissões & Ocupações (Gakusei, Kaishain)",
    section: 2,
    sectionTitle: "Identidade & Profissões",
    level: "A1",
    xpReward: 90,
    stage1_context: {
        audioGuide: "Watashi wa gakusei desu. Kaishain desu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "O que você faz da vida? No Japão, sua ocupação define muito sobre como as pessoas interagem com você. Vamos aprender a falar sobre trabalho e estudos e conhecer a famosa partícula 'wa' (は)!"
    },
    stage2_drops: [
        { type: "vocab", kanji: "がくせい (学生)", romaji: "Gakusei", translation: "Estudante / Aluno(a)", timeContext: "Usado para estudantes universitários ou de escolas de idiomas." },
        { type: "vocab", kanji: "かいしゃいん (会社員)", romaji: "Kaishain", translation: "Funcionário(a) de Empresa / Office Worker", timeContext: "A profissão mais comum no mundo corporativo japonês." },
        { type: "vocab", kanji: "いしゃ (医者)", romaji: "Isha", translation: "Médico(a)", timeContext: "Profissional da saúde (lembrando que para chamá-los usamos -sensei!)." },
        { type: "vocab", kanji: "エンジニア", romaji: "Enjinia", translation: "Engenheiro(a) / Programador(a)", timeContext: "Palavra importada do inglês (Engineer), por isso escrita em Katakana." },
        { type: "grammar_pill", title: "A Partícula de Tópico 'は' (Wa)", rule: "Para dizer 'Eu sou estudante' ou '[Nome] é médico', usamos a partícula は (escrita com o hiragana 'ha', mas pronunciada 'WA') para indicar de QUEM estamos falando na frase!", formula: "わたし は [ Profissão ] です (Watashi wa [Profissão] desu)", example: "わたし は エンジニア です ➔ (Eu sou programador/engenheiro). Se você quiser falar de outra pessoa: ケンジさん は かいしゃいん です ➔ (O Kenji é funcionário de empresa)." }
    ],
    // 5 PRÁTICAS GUIADAS
    stage3_practice: [
        {
            question: "1. Como você diz formalmente em japonês: 'Eu sou estudante'?",
            options: [
                { label: "🧑‍🎓 わたし は がくせい です (Watashi wa gakusei desu)", isCorrect: true },
                { label: "💼 わたし は かいしゃいん です (Watashi wa kaishain desu)", isCorrect: false },
                { label: "🏥 がくせい は いしゃ です (Gakusei wa isha desu)", isCorrect: false }
            ]
        },
        {
            question: "2. Por que a partícula gramatical de tópico 'は' é considerada especial na pronúncia?",
            options: [
                { label: "Porque ela nunca deve ser pronunciada em voz alta", isCorrect: false },
                { label: "Porque é escrita com o hiragana 'ha', mas quando funciona como partícula deve ser pronunciada como 'WA'", isCorrect: true },
                { label: "Porque ela só pode ser usada por médicos e professores", isCorrect: false }
            ]
        },
        {
            question: "3. Se você trabalha em um escritório corporativo em Tóquio, qual é o seu título profissional padrão?",
            options: [
                { label: "がくせい (Gakusei)", isCorrect: false },
                { label: "いしゃ (Isha)", isCorrect: false },
                { label: "かいしゃいん (Kaishain)", isCorrect: true }
            ]
        },
        {
            question: "4. Qual a estrutura gramatical perfeita para dizer 'O Sr. Tanaka é programador/engenheiro'?",
            options: [
                { label: "タナカ・さん は エンジニア です (Tanaka-san wa Enjinia desu)", isCorrect: true },
                { label: "エンジニア は タナカ・さん です (Enjinia wa Tanaka-san desu)", isCorrect: false },
                { label: "タナカ・さん エンジニア は です (Tanaka-san Enjinia wa desu)", isCorrect: false }
            ]
        },
        {
            question: "5. Você está conversando sobre carreiras. O que significa a frase 'Watashi wa isha desu'?",
            options: [
                { label: "Eu sou estudante", isCorrect: false },
                { label: "Eu sou médico(a)", isCorrect: true },
                { label: "Eu estou doente", isCorrect: false }
            ]
        }
    ],
    // 3 DIÁLOGOS INTERATIVOS
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está em uma festa de boas-vindas na universidade em Tóquio e se apresenta para uma colega.",
            npcName: "Yuki",
            npcMessage: "はじめまして！ ユキ です。 わたし は がくせい です。 よろしくおねがいします！ (Prazer! Sou a Yuki. Sou estudante. Conto com sua gentileza!)",
            options: [
                { text: "じめまして！ [Seu Nome] です。 わたし は エンジニア です。 よろしく！", feedback: "Perfeito! Você se apresentou, disse seu nome, usou a partícula 'wa' corretamente para sua profissão e devolveu a cortesia!", isCorrect: true },
                { text: "こんにちは！ ユキ は かいしゃいん です。", feedback: "Incorreto: Você acabou de dizer que a Yuki é funcionária de empresa!", isCorrect: false },
                { text: "ありがとう！ わたし です。", feedback: "Incompleto e estranho: 'Obrigado! Sou eu.'", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Em um coquetel de networking em Osaka, um empresário se aproxima de você.",
            npcName: "Sr. Yamamoto",
            npcMessage: "はじめまして。ヤマモト です。 わたし は かいしゃいん です。",
            options: [
                { text: "こちらこそ！ [Seu Nome] です。 わたし は がくせい です。 よろしくおねがいします！", feedback: "Impecável! Devolveu o cumprimento com 'Kochirakoso', se apresentou e declarou sua ocupação como estudante com elegância.", isCorrect: true },
                { text: "おつかれさまでした！", feedback: "Inadequado: 'Otsukaresama' é para despedida de trabalho, não para quando alguém se apresenta no início de uma festa.", isCorrect: false },
                { text: "わたし は ヤマモト です！", feedback: "Erro grave: Você roubou o nome do Sr. Yamamoto!", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Na recepção do hospital, a atendente precisa preencher seu cadastro profissional.",
            npcName: "Atendente do Hospital",
            npcMessage: "[Seu Nome]・さん、おしごと (Trabalho) は なん ですか？",
            options: [
                { text: "わたし は エンジニア です！", feedback: "Mandou muito bem! Entendeu a pergunta sobre trabalho ('oshigoto') e respondeu sua profissão perfeitamente.", isCorrect: true },
                { text: "わたし は ブラジルじん です！", feedback: "Ops! Ela perguntou seu TRABALHO e você respondeu sua NACIONALIDADE!", isCorrect: false },
                { text: "よろしくおねがいします！", feedback: "Não responde à pergunta do cadastro do hospital.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Qual é a função gramatical da partícula 'は' (wa) em uma frase?", options: ["Indicar o fim da frase e transformar em pergunta.", "Indicar o TÓPICO da frase (de quem ou do que estamos falando).", "Substituir a palavra 'Obrigado'."], correctIndex: 1 }
    ]
};

const MODULO_A1_08 = {
    id: "a1_mod_08",
    title: "A Magia da Pergunta: O Marcador 'Ka' e 'Dare'",
    section: 2,
    sectionTitle: "Identidade & Profissões",
    level: "A1",
    xpReward: 90,
    stage1_context: {
        audioGuide: "Anata wa gakusei desu ka? Dare desu ka?",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Até agora você só afirmou coisas. Mas como fazer perguntas em japonês? Esqueça o ponto de interrogação (?): no Japão, usamos uma sílaba mágica no final da frase para transformar tudo em pergunta!"
    },
    stage2_drops: [
        { type: "vocab", kanji: "～か", romaji: "~ka", translation: "Partícula de Pergunta (O ponto de interrogação falado)", timeContext: "Colocada sempre no final absoluto da frase para transformá-la em pergunta." },
        { type: "vocab", kanji: "あなた", romaji: "Anata", translation: "Você", timeContext: "Atenção: Evite usar 'Anata' se você já sabe o nome da pessoa! No Japão é muito mais educado perguntar usando [Nome] + san." },
        { type: "vocab", kanji: "だれ / どなた", romaji: "Dare / Donata", translation: "Quem? / Quem? (Mais formal)", timeContext: "Usado para perguntar a identidade de alguém. 'Donata' é a versão super educada." },
        { type: "vocab", kanji: "なん / なに", romaji: "Nan / Nani", translation: "O que? / Qual?", timeContext: "A famosa palavra para perguntar sobre coisas ou profissões." },
        { type: "grammar_pill", title: "Fórmula Mágica da Pergunta", rule: "Para transformar QUALQUER frase em pergunta no japonês, você não precisa mudar a ordem das palavras como no inglês ou português. Basta colar a partícula か (ka) no final!", formula: "Afirmação: [Seu Nome]さん です (É o(a) [Seu Nome]) ➔ Pergunta: [Seu Nome]さん です か (É o(a) [Seu Nome]?)", example: "がくせい です か？ (Gakusei desu ka? = Você é estudante?) | あの ひと は だれ です か？ (Ano hito wa dare desu ka? = Quem é aquela pessoa?)." }
    ],
    // 5 PRÁTICAS GUIADAS
    stage3_practice: [
        {
            question: "1. Se você quer perguntar educadamente 'Você é brasileiro?' para alguém, como você monta a frase em japonês?",
            options: [
                { label: "❓ ブラジルじん です か？ (Burajiru-jin desu ka?)", isCorrect: true },
                { label: "❗ ブラジルじん です。 (Burajiru-jin desu.)", isCorrect: false },
                { label: "🗣️ ブラジルご です か？ (Burajiru-go desu ka?)", isCorrect: false }
            ]
        },
        {
            question: "2. Por que os falantes nativos de japonês evitam usar a palavra 'Anata' (Você) em conversas diretas?",
            options: [
                { label: "Porque 'Anata' é um palavrão proibido no Japão", isCorrect: false },
                { label: "Porque soa distante e frio; é muito mais educado chamar a pessoa pelo Nome + sufixo (-san)", isCorrect: true },
                { label: "Porque 'Anata' só pode ser usado para falar com animais", isCorrect: false }
            ]
        },
        {
            question: "3. Como você pergunta educadamente 'Quem é aquela pessoa?' usando a palavra formal para 'Quem'?",
            options: [
                { label: "あの ひと は なに です か？ (Ano hito wa NANI desu ka?)", isCorrect: false },
                { label: "あの ひと は どなた です か？ (Ano hito wa DONATA desu ka?)", isCorrect: true },
                { label: "あの ひと は どこ です か？ (Ano hito wa DOKO desu ka?)", isCorrect: false }
            ]
        },
        {
            question: "4. Qual é o papel da partícula 'か' (ka) colocada no final absoluto de uma frase?",
            options: [
                { label: "Transformar a afirmação em uma PERGUNTA", isCorrect: true },
                { label: "Dar ênfase de raiva na frase", isCorrect: false },
                { label: "Indicar que a frase está no tempo passado", isCorrect: false }
            ]
        },
        {
            question: "5. Se alguém te pergunta 'Anata wa kaishain desu ka?' e você é um funcionário de empresa, como responde afirmando?",
            options: [
                { label: "いいえ、がくせい です (Iie, gakusei desu - Não, sou estudante)", isCorrect: false },
                { label: "はい、かいしゃいん です (Hai, kaishain desu - Sim, sou funcionário)", isCorrect: true },
                { label: "はい、いしゃ です か？ (Hai, isha desu ka?)", isCorrect: false }
            ]
        }
    ],
    // 3 DIÁLOGOS INTERATIVOS
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está na recepção de um hotel em Quioto e o atendente quer confirmar sua identidade e profissão.",
            npcName: "Atendente do Hotel",
            npcMessage: "[Seu Nome]・さん です か？ かいしゃいん です か？ (Você é o(a) Sr(a). [Seu Nome]? É funcionário(a) de empresa?)",
            options: [
                { text: "はい、[Seu Nome] です。 がくせい です。", feedback: "Mandou muito bem! 'Hai' (Sim), confirmou seu nome e respondeu sua verdadeira ocupação com clareza.", isCorrect: true },
                { text: "いいえ、だれ です か？ (Não, quem é você?)", feedback: "Incorreto e grosseiro com o recepcionista!", isCorrect: false },
                { text: "はい、かいしゃいん です か？", feedback: "Ops! Você respondeu devolvendo exatamente a mesma pergunta com 'ka' no final!", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Você vê uma foto na mesa do seu colega Kenji com uma pessoa desconhecida e quer perguntar quem é de forma educada.",
            npcName: "Kenji",
            npcMessage: "あ、これ は わたし の しゃしん (foto) です！",
            options: [
                { text: "ケンジさん、この ひと は どなた です か？ (Kenji-san, quem é esta pessoa?)", feedback: "Perfeito! Usou 'Donata desu ka' demonstrando alto nível de etiqueta e curiosidade educada.", isCorrect: true },
                { text: "この ひと は なに です か？ (O que é esta pessoa?)", feedback: "Gafe horrível! Perguntar 'O que é isso?' para um ser humano é extremamente ofensivo!", isCorrect: false },
                { text: "さようなら！", feedback: "Incorreto: Sair correndo sem motivo no meio da conversa.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Em uma aula de conversação em Tóquio, o professor quer testar se você entendeu a partícula de pergunta.",
            npcName: "Professor Sato",
            npcMessage: "[Seu Nome]・さん は、 にほんじん です か？ ブラジルじん です か？",
            options: [
                { text: "はい！ にほんじん です か？", feedback: "Incorreto: Você não respondeu, apenas fez outra pergunta aleatória.", isCorrect: false },
                { text: "わたし は ブラジルじん です！", feedback: "Excelente! Ouviu as duas opções da pergunta e afirmou com firmeza e precisão a sua nacionalidade brasileira!", isCorrect: true },
                { text: "いいえ、ブラジルご です。", feedback: "Ops! Você disse 'Não, eu sou o idioma brasileiro'!", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Como transformamos uma frase afirmativa como 'Kenji wa isha desu' em uma pergunta?", options: ["Mudamos a ordem das palavras para 'Isha wa Kenji desu'.", "Gritamos a frase bem alto.", "Adicionamos a partícula 'か' (ka) no final: 'Kenji wa isha desu ka?'."], correctIndex: 2 }
    ]
};

const MODULO_A1_09 = {
    id: "a1_mod_09",
    title: "Números de 1 a 10 & Dizendo sua Idade (-sai)",
    section: 2,
    sectionTitle: "Identidade & Profissões",
    level: "A1",
    xpReward: 95,
    stage1_context: {
        audioGuide: "Ichi, ni, san! Ni-juu-go sai desu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Contar em japonês é lógico e super fácil! Hoje vamos dominar os números de 1 a 10 e aprender o sufixo 'sai' para responder à clássica pergunta: 'Quantos anos você tem?'."
    },
    stage2_drops: [
        { type: "vocab", kanji: "いち、に、さん", romaji: "Ichi, Ni, San", translation: "1, 2, 3", timeContext: "A base da contagem japonesa." },
        { type: "vocab", kanji: "よん (し) 、 ご 、 ろく", romaji: "Yon (Shi), Go, Roku", translation: "4, 5, 6", timeContext: "O número 4 é mais dito como 'Yon' porque 'Shi' tem o mesmo som da palavra 'Morte' (死)!" },
        { type: "vocab", kanji: "なな (しち) 、 はち 、 きゅう 、 じゅう", romaji: "Nana (Shichi), Hachi, Kyuu, Juu", translation: "7, 8, 9, 10", timeContext: "Com o 'Juu' (10), você já consegue formar números até 99!" },
        { type: "grammar_pill", title: "O Lego da Idade (～さい)", rule: "Para formar números maiores, basta juntar as peças: 20 é 2 dez (にじゅう - Ni-juu), 25 é 2 dez 5 (にじゅうご - Ni-juu-go). Para dizer a idade, colamos o sufixo さい (sai) no final!", formula: "[ Número ] + さい (sai) です", example: "25 anos ➔ にじゅうご・さい です (Ni-juu-go sai desu). 🚨 EXCEÇÃO CULTURAL DE OURO: Para dizer 20 anos exatos, NUNCA diga 'Ni-juu sai'. A palavra especial para a maioridade japonesa de 20 anos é はたち (HATACHI)!" }
    ],
    // 5 PRÁTICAS GUIADAS
    stage3_practice: [
        {
            question: "1. Sabendo que 3 é 'San' e 10 é 'Juu', como se diz '30 anos de idade' em japonês?",
            options: [
                { label: "🎂 さんじゅう・さい (San-juu sai)", isCorrect: true },
                { label: "🎂 じゅうさん・さい (Juu-san sai)", isCorrect: false },
                { label: "🎂 はたち (Hatachi)", isCorrect: false }
            ]
        },
        {
            question: "2. Qual é a palavra ESPECIAL E OBRIGATÓRIA para dizer que você tem exatamente 20 anos de idade no Japão?",
            options: [
                { label: "にじゅう・さい (Ni-juu sai)", isCorrect: false },
                { label: "はたち (Hatachi)", isCorrect: true },
                { label: "じゅうに・さい (Juu-ni sai)", isCorrect: false }
            ]
        },
        {
            question: "3. Por que os japoneses preferem dizer 'Yon' para o número 4 em vez de 'Shi' na maioria das situações?",
            options: [
                { label: "Porque 'Shi' tem a mesma pronúncia da palavra 'Morte' (死) em japonês", isCorrect: true },
                { label: "Porque 'Yon' é muito mais curto de falar", isCorrect: false },
                { label: "Porque 'Shi' é um número exclusivo do imperador", isCorrect: false }
            ]
        },
        {
            question: "4. Se você quer perguntar educadamente 'Quantos anos você tem?', qual é a frase correta?",
            options: [
                { label: "なんご です か？ (Nan-go desu ka?)", isCorrect: false },
                { label: "なんさい です か？ (Nan-sai desu ka?)", isCorrect: true },
                { label: "だれ です か？ (Dare desu ka?)", isCorrect: false }
            ]
        },
        {
            question: "5. Sabendo a lógica do Lego dos números, como se diz '18 anos' em japonês (10 = Juu, 8 = Hachi)?",
            options: [
                { label: "はちじゅう・さい (Hachi-juu sai - 80 anos)", isCorrect: false },
                { label: "じゅうはち・さい (Juu-hachi sai - 18 anos)", isCorrect: true },
                { label: "はたち (Hatachi - 20 anos)", isCorrect: false }
            ]
        }
    ],
    // 3 DIÁLOGOS INTERATIVOS
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está jantando com a Sra. Suzuki, sua anfitriã no Japão, e ela pergunta sobre você.",
            npcName: "Sra. Suzuki",
            npcMessage: "[Seu Nome]・さん は、 なん・さい です か？ (Sr(a). [Seu Nome], quantos anos você tem?)",
            options: [
                { text: "わたし は にじゅうご・さい です！ (Tenho 25 anos!)", feedback: "Perfeito! Você entendeu a pergunta 'Nan-sai desu ka' e respondeu com o sufixo de idade correto.", isCorrect: true },
                { text: "わたし は にじゅうご・じん です！ (Sou 25 pessoas/nacionalidade!)", feedback: "Ops! Você usou o sufixo '-jin' (de nacionalidade) em vez de '-sai' (idade)!", isCorrect: false },
                { text: "いち、に、さん です！ (Sou 1, 2, 3!)", feedback: "Incorreto: Você apenas contou até 3!", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Em um clube universitário de Tóquio, um calouro quer saber se você já atingiu a maioridade de 20 anos.",
            npcName: "Calouro Kenji",
            npcMessage: "[Seu Nome]・さん、もしかして はたち (20 anos) です か？",
            options: [
                { text: "いいえ、わたし は じゅうきゅう・さい (19 anos) です！", feedback: "Excelente! Você entendeu a palavra especial 'Hatachi' e respondeu sua idade correta usando a lógica dos números.", isCorrect: true },
                { text: "はい、にじゅう・さい です！", feedback: "Atenção cultural! Para 20 anos nunca dizemos 'Ni-juu sai', devemos confirmar dizendo 'Hatachi desu'!", isCorrect: false },
                { text: "こんにちは！", feedback: "Não responde a pergunta sobre a sua idade.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Você está comprando ingressos para um museu em Osaka e a atendente pergunta a idade para o desconto.",
            npcName: "Atendente do Museu",
            npcMessage: "すみません、がくせい・さん です か？ なん・さい です か？",
            options: [
                { text: "はい、がくせい です。 にじゅう・さい です！", feedback: "Lembre-se da regra de ouro: para 20 anos, o correto é sempre HATACHI!", isCorrect: false },
                { text: "はい、がくせい です。 にじゅうに・さい (22 anos) です！", feedback: "Impecável! Confirmou o status de estudante e disse sua idade 'Ni-juu-ni sai' com perfeição para garantir o desconto!", isCorrect: true },
                { text: "ありがとう！", feedback: "Incompleto: Esqueceu de dizer sua idade para o ingresso.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Qual a pronúncia correta para o número 35 em japonês?", options: ["さんじゅうご (San-juu-go)", "ごじゅうさん (Go-juu-san)", "さんごじゅう (San-go-juu)"], correctIndex: 0 }
    ]
};

const MODULO_A1_10 = {
    id: "a1_mod_10",
    title: "O Conector da Empatia: Partícula 'Mo' & Revisão",
    section: 2,
    sectionTitle: "Identidade & Profissões",
    level: "A1",
    xpReward: 110,
    stage1_context: {
        audioGuide: "Watashi mo Burajiru-jin desu! Sou desu ka!",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Para criar conexões reais, nada melhor do que encontrar pontos em comum! Vamos aprender a dizer 'Eu também!' com a partícula 'mo' (も) e enfrentar o Desafio Final da Seção 2!"
    },
    stage2_drops: [
        { type: "vocab", kanji: "～も", romaji: "~mo", translation: "Também (Partícula de inclusão)", timeContext: "Atenção: Ela SUBSTITUI a partícula 'wa' (は)! Nunca diga 'wa mo'." },
        { type: "vocab", kanji: "わたし・も", romaji: "Watashi mo", translation: "Eu também!", timeContext: "A resposta mais útil e empática para gerar conexão imediata em conversas." },
        { type: "vocab", kanji: "そう です", romaji: "Sou desu", translation: "É verdade / É isso mesmo / Exatamente", timeContext: "Usado para concordar com uma afirmação que alguém fez." },
        { type: "vocab", kanji: "そう です か", romaji: "Sou desu ka", translation: "Ah, é mesmo? / Entendi! / Que legal!", timeContext: "Dito com entonação caindo ou neutra para demonstrar que você está ouvindo e interessado." },
        { type: "grammar_pill", title: "A Regra da Troca: は (Wa) ➔ も (Mo)", rule: "Quando você quer dizer que TAMBÉM é algo ou TAMBÉM faz algo, você deve pegar a partícula de tópico は (Wa) e trocá-la diretamente pela partícula も (Mo)!", formula: "Frase 1: ケンジ は がくせい です (Kenji é estudante) ➔ Frase 2 (Você): わたし も がくせい です (Eu TAMBÉM sou estudante)", example: "Se o Tanaka diz: 'Sou japonês' (Nihon-jin desu), e seu amigo também é, você aponta e diz: 'Kenji-san MO Nihon-jin desu' (O Kenji TAMBÉM é japonês)." }
    ],
    // 5 PRÁTICAS GUIADAS (REVISÃO DE TODA A SEÇÃO 2)
    stage3_practice: [
        {
            question: "1. Seu colega diz: 'Watashi wa kaishain desu' (Sou funcionário de empresa). Você TAMBÉM é. Como você responde?",
            options: [
                { label: "🤝 わたし も かいしゃいん です！ (Watashi MO kaishain desu!)", isCorrect: true },
                { label: "❌ わたし は も かいしゃいん です！ (Watashi WA MO kaishain desu!)", isCorrect: false },
                { label: "❓ わたし は かいしゃいん です か？ (Watashi wa kaishain desu ka?)", isCorrect: false }
            ]
        },
        {
            question: "2. Por que é gramaticalmente INCORRETO dizer 'Watashi wa mo Burajiru-jin desu'?",
            options: [
                { label: "Porque a partícula 'mo' (também) SUBSTITUI a partícula 'wa' (tópico); elas nunca podem ser usadas juntas na mesma palavra", isCorrect: true },
                { label: "Porque 'mo' só pode ser usado no início da frase", isCorrect: false },
                { label: "Porque 'wa' é apenas para homens", isCorrect: false }
            ]
        },
        {
            question: "3. Quando um nativo te conta algo novo ou interessante sobre o Japão, qual expressão demonstra empatia e atenção ('Ah, é mesmo? / Entendi!')?",
            options: [
                { label: "🤔 そう です か (Sou desu ka)", isCorrect: true },
                { label: "👋 さようなら (Sayounara)", isCorrect: false },
                { label: "🙅‍♂️ いいえ (Iie)", isCorrect: false }
            ]
        },
        {
            question: "4. [REVISÃO GERAL] Como você diria: 'O Sr. Kenji TAMBÉM é médico (isha)'?",
            options: [
                { label: "ケンジさん は いしゃ です (Kenji-san wa isha desu)", isCorrect: false },
                { label: "いしゃ も ケンジさん です (Isha mo Kenji-san desu)", isCorrect: false },
                { label: "ケンジさん も いしゃ です (Kenji-san MO isha desu)", isCorrect: true }
            ]
        },
        {
            question: "5. [REVISÃO GERAL] Se você quer concordar com algo dizendo 'Exatamente / É isso mesmo', o que você diz?",
            options: [
                { label: "そう です (Sou desu)", isCorrect: true },
                { label: "だれ です か (Dare desu ka)", isCorrect: false },
                { label: "じゃあね (Ja ne)", isCorrect: false }
            ]
        }
    ],
    // 3 DIÁLOGOS INTERATIVOS
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está conversando com um estudante brasileiro que conheceu em um café em Tóquio.",
            npcName: "Lucas",
            npcMessage: "あ！ [Seu Nome]・さん！ わたし は ブラジルじん です。 ぎんこういん (Bancário) です。",
            options: [
                { text: "そう です か！ わたし も ブラジルじん です！ よろしく！", feedback: "Excepcional! Você demonstrou interesse com 'Sou desu ka', usou 'Watashi MO' para criar conexão e fechou com simpatia!", isCorrect: true },
                { text: "いいえ、わたし は ブラジルじん です。", feedback: "Estranho: Você disse 'Não, eu sou brasileiro' quando ele acabou de dizer que também é!", isCorrect: false },
                { text: "さようなら！", feedback: "Incorreto: Você se despediu dramaticamente no meio da conversa!", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Em um congresso internacional, a Dra. Takahashi descobre sua profissão.",
            npcName: "Dra. Takahashi",
            npcMessage: "[Seu Nome]・さん は エンジニア です か？ わたし の あに (meu irmão) も エンジニア です よ！",
            options: [
                { text: "そう です か！ すごい です ね！ (Ah, é mesmo? Que incrível!)", feedback: "Perfeito! Você ouviu com atenção, usou 'Sou desu ka' para demonstrar interesse e elogiou a coincidência!", isCorrect: true },
                { text: "わたし は も エンジニア です！", feedback: "Erro gramatical: Nunca junte 'wa' com 'mo' (wa mo) na mesma frase!", isCorrect: false },
                { text: "だれ です か？", feedback: "Incorreto e rude perguntar 'Quem é você?' para a doutora no meio de um papo amigável.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3 [BOSS FINAL]: Você está no jantar de encerramento da Seção 2 com seus novos amigos em Tóquio e o anfitrião faz um brinde a você.",
            npcName: "Anfitrião Tanaka",
            npcMessage: "[Seu Nome]・さん、にほんご の べんきょう (Estudo) は どう ですか？ がくせい・さん です ね！",
            options: [
                { text: "はい！ がくせい です。 毎日 (Todo dia) べんきょう です。 よろしくおねがいします！", feedback: "🎉 VITÓRIA ÉPICA! Você confirmou seu status com orgulho, demonstrou dedicação e encerrou a Seção 2 como um verdadeiro mestre da etiqueta japonesa! +110 XP!", isCorrect: true },
                { text: "いいえ、だれ です か？", feedback: "Ops! Você não pode fingir que não conhece o anfitrião no final da festa!", isCorrect: false },
                { text: "ブラジルご です！", feedback: "Incorreto: 'Burajiru-go' não faz sentido nessa resposta.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Qual a regra fundamental de substituição para usar a partícula 'も' (mo - também)?", options: ["Ela deve ser usada sempre antes do verbo.", "Ela SUBSTITUI completamente a partícula de tópico 'は' (wa) na frase.", "Ela só pode ser usada em perguntas."], correctIndex: 1 }
    ]
};

const MODULO_A1_11 = {
    id: "a1_mod_11",
    title: "Onde Fica? (Kore, Sore, Are & Koko, Soko, Asoko)",
    section: 3,
    sectionTitle: "Localização, Lugares & Movimento",
    level: "A1",
    xpReward: 95,
    stage1_context: {
        audioGuide: "Sore wa nan desu ka?",
        missionTitle: "Objetivo de Hoje: Mestre do Espaço",
        missionDescription: "Aprenda o sistema 'Ko-So-A-Do' para apontar para objetos e lugares perto de você (Ko-), perto do ouvinte (So-), longe de ambos (A-) e para perguntar (Do-)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "これ", romaji: "Kore", translation: "Isto (Perto de quem fala)", timeContext: "Para objetos que você pode tocar ou que estão ao seu lado." },
        { type: "vocab", kanji: "それ", romaji: "Sore", translation: "Isso (Perto de quem ouve)", timeContext: "Para objetos que estão perto da pessoa com quem você conversa." },
        { type: "vocab", kanji: "あれ", romaji: "Are", translation: "Aquilo (Longe de ambos)", timeContext: "Para objetos que estão distantes tanto de você quanto do ouvinte." },
        { type: "vocab", kanji: "ここ / そこ / あそこ", romaji: "Koko / Soko / Asoko", translation: "Aqui / Aí / Ali", timeContext: "A mesma lógica de proximidade, mas para LUGARES em vez de objetos." },
        { type: "grammar_pill", title: "O GPS Japonês: Ko-So-A-Do", rule: "O japonês tem um sistema genial para indicar distância. Tudo que começa com 'Ko' está perto de você. 'So' está perto do ouvinte. 'A' está longe de ambos. E 'Do' é sempre para perguntar!", formula: "これ (Isto) / それ (Isso) / あれ (Aquilo) / どれ (Qual?)", example: "Para perguntar 'Onde fica o banheiro?', usamos a forma 'Do-': トイレはどこですか (Toire wa DOKO desu ka?)." }
    ],
    stage3_practice: [
        {
            question: "1. Você está segurando uma caneta na mão e quer perguntar 'O que é ISTO?'. Qual palavra você usa?",
            options: [
                { label: "👉 これ (Kore)", isCorrect: true },
                { label: "👇 それ (Sore)", isCorrect: false },
                { label: "👆 あれ (Are)", isCorrect: false }
            ]
        },
        {
            question: "2. Seu amigo está do outro lado da sala segurando um livro. Como você pergunta 'O que é ISSO aí?'",
            options: [
                { label: "これ は なん です か？ (Kore wa nan desu ka?)", isCorrect: false },
                { label: "それ は なん です か？ (Sore wa nan desu ka?)", isCorrect: true },
                { label: "あれ は なん です か？ (Are wa nan desu ka?)", isCorrect: false }
            ]
        },
        {
            question: "3. Você e seu amigo veem um prédio estranho bem longe no horizonte. Como você diz 'O que é AQUILO?'",
            options: [
                { label: "👆 あれ は なん です か？ (Are wa nan desu ka?)", isCorrect: true },
                { label: "👉 これ は なん です か？ (Kore wa nan desu ka?)", isCorrect: false },
                { label: "👇 それ は なん です か？ (Sore wa nan desu ka?)", isCorrect: false }
            ]
        },
        {
            question: "4. Para perguntar 'Onde fica a estação?', qual é a palavra interrogativa correta?",
            options: [
                { label: "えき は ここ です か？ (Eki wa koko desu ka?)", isCorrect: false },
                { label: "えき は どこ です か？ (Eki wa doko desu ka?)", isCorrect: true },
                { label: "えき は あそこ です か？ (Eki wa asoko desu ka?)", isCorrect: false }
            ]
        },
        {
            question: "5. Se a estação está bem na sua frente, como você responde 'A estação é AQUI.'?",
            options: [
                { label: "えき は そこ です (Eki wa soko desu)", isCorrect: false },
                { label: "えき は ここ です (Eki wa koko desu)", isCorrect: true },
                { label: "えき は あそこ です (Eki wa asoko desu)", isCorrect: false }
            ]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está em uma loja de conveniência (Konbini) e aponta para um salgadinho na prateleira perto do atendente.",
            npcName: "Atendente",
            npcMessage: "いらっしゃいませ！ (Bem-vindo!)",
            options: [
                { text: "すみません、それ は なん です か？", feedback: "Perfeito! Você usou 'Sore' (isso) corretamente para algo perto do atendente.", isCorrect: true },
                { text: "すみません、これ は なん です か？", feedback: "Incorreto. 'Kore' (isto) seria para algo que está na sua mão.", isCorrect: false },
                { text: "すみません、あれ は なん です か？", feedback: "Incorreto. 'Are' (aquilo) seria para algo longe de vocês dois.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Um turista perdido te aborda na rua e pergunta onde fica a estação de Shibuya.",
            npcName: "Turista",
            npcMessage: "Excuse me... Shibuya Station... どこ です か？",
            options: [
                { text: "ああ、しぶやえき は あそこ です！", feedback: "Excelente! Você entendeu a pergunta com 'doko' e apontou para longe usando 'asoko' (ali).", isCorrect: true },
                { text: "しぶやえき は ここ です。", feedback: "Incorreto, a menos que vocês estivessem exatamente na porta da estação.", isCorrect: false },
                { text: "わたし は がくせい です。", feedback: "Ops! Ele perguntou 'onde', não 'quem é você'!", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Qual a diferença entre 'kore' e 'koko'?", options: ["Nenhuma, são iguais.", "Kore é para objetos, Koko é para lugares.", "Kore é formal, Koko é informal."], correctIndex: 1 }
    ]
};

const MODULO_A1_12 = {
    id: "a1_mod_12",
    title: "Verbos de Existência: Imasu & Arimasu",
    section: 3,
    sectionTitle: "Localização, Lugares & Movimento",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Neko ga imasu. Hon ga arimasu.",
        missionTitle: "Objetivo de Hoje: O Mundo Animado e Inanimado",
        missionDescription: "Domine a diferença crucial entre 'ter/haver' para seres vivos (います) e para objetos/coisas (あります). Esta é uma das regras mais importantes do japonês básico!"
    },
    stage2_drops: [
        { type: "vocab", kanji: "います", romaji: "Imasu", translation: "Haver / Existir / Estar (Para seres vivos)", timeContext: "Use para pessoas, animais, insetos, etc." },
        { type: "vocab", kanji: "あります", romaji: "Arimasu", translation: "Haver / Existir / Ter (Para objetos inanimados)", timeContext: "Use para coisas, plantas, lugares, ideias, etc." },
        { type: "vocab", kanji: "ねこ / いぬ", romaji: "Neko / Inu", translation: "Gato / Cachorro", timeContext: "Exemplos clássicos de seres que usam 'imasu'." },
        { type: "vocab", kanji: "つくえ / ほん", romaji: "Tsukue / Hon", translation: "Mesa / Livro", timeContext: "Exemplos clássicos de objetos que usam 'arimasu'." },
        { type: "grammar_pill", title: "A Partícula de Existência 'が' (ga)", rule: "Quando você introduz algo pela primeira vez dizendo 'Há um gato' ou 'Tem um livro', você usa a partícula 'ga' antes do verbo de existência.", formula: "[Coisa/Ser] + が + あります / います", example: "へや に つくえ が あります (Heya ni tsukue GA arimasu) ➔ No quarto, HÁ UMA mesa." }
    ],
    stage3_practice: [
        {
            question: "1. Para dizer 'Há um cachorro no parque', qual verbo você deve usar?",
            options: [
                { label: "🐾 います (Imasu)", isCorrect: true },
                { label: "📦 あります (Arimasu)", isCorrect: false },
                { label: "🚶 いきます (Ikimasu)", isCorrect: false }
            ]
        },
        {
            question: "2. Para dizer 'Tem uma caneta na mesa', qual verbo é o correto?",
            options: [
                { label: "🐾 います (Imasu)", isCorrect: false },
                { label: "📦 あります (Arimasu)", isCorrect: true },
                { label: "🗣️ はなします (Hanashimasu)", isCorrect: false }
            ]
        },
        {
            question: "3. Complete a frase: あそこ に せんせい ___ います。",
            options: [
                { label: "は (wa)", isCorrect: false },
                { label: "が (ga)", isCorrect: true },
                { label: "を (o)", isCorrect: false }
            ]
        },
        {
            question: "4. Complete a frase: かばん の なか に ほん ___ あります。",
            options: [
                { label: "も (mo)", isCorrect: false },
                { label: "で (de)", isCorrect: false },
                { label: "が (ga)", isCorrect: true }
            ]
        },
        {
            question: "5. Por que plantas, apesar de serem seres vivos na biologia, usam o verbo 'arimasu' no japonês?",
            options: [
                { label: "Porque no japonês, a regra é sobre a capacidade de se mover por conta própria.", isCorrect: true },
                { label: "Porque os japoneses não gostam de plantas.", isCorrect: false },
                { label: "Porque é uma exceção sem motivo.", isCorrect: false }
            ]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está descrevendo seu quarto para um amigo japonês.",
            npcName: "Amigo Kenji",
            npcMessage: "へえ、[Nome]・さん の へや には なに が あります か？ (Sério? O que tem no seu quarto?)",
            options: [
                { text: "ベッド が あります。 それから、ねこ が あります。", feedback: "Quase! Gatos são seres vivos, então deveriam usar 'imasu'!", isCorrect: false },
                { text: "ベッド が あります。 それから、ねこ が います。", feedback: "Perfeito! Você usou 'arimasu' para a cama (objeto) e 'imasu' para o gato (ser vivo).", isCorrect: true },
                { text: "ベッド が います。 ねこ が います。", feedback: "Ops! Camas não são seres vivos, não podem 'imasu'!", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Qual a regra principal para escolher entre 'imasu' e 'arimasu'?", options: ["Formal vs. Informal", "Seres que se movem vs. Coisas que não se movem", "Presente vs. Passado"], correctIndex: 1 }
    ]
};

const MODULO_A1_13 = {
    id: "a1_mod_13",
    title: "Verbos de Movimento: Ikimasu, Kimasu, Kaerimasu",
    section: 3,
    sectionTitle: "Localização, Lugares & Movimento",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Gakkou e ikimasu.",
        missionTitle: "Objetivo de Hoje: Colocando o Mundo em Movimento",
        missionDescription: "Aprenda a dizer que vai, vem e volta para casa, usando as partículas de direção essenciais 'e' (へ) e 'ni' (に)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "いきます (行きます)", romaji: "Ikimasu", translation: "Ir (para algum lugar)", timeContext: "Movimento de saída, se afastando de onde você está." },
        { type: "vocab", kanji: "きます (来ます)", romaji: "Kimasu", translation: "Vir (para cá)", timeContext: "Movimento de chegada, em direção a onde você está." },
        { type: "vocab", kanji: "かえります (帰ります)", romaji: "Kaerimasu", translation: "Voltar (para casa/origem)", timeContext: "Verbo específico para o retorno ao ponto de partida (casa, país)." },
        { type: "vocab", kanji: "がっこう / えき / うち", romaji: "Gakkou / Eki / Uchi", translation: "Escola / Estação / Casa", timeContext: "Destinos comuns para os verbos de movimento." },
        { type: "grammar_pill", title: "Partículas de Destino: へ (e) & に (ni)", rule: "Para indicar o destino de um movimento, usamos as partículas 'e' (へ) ou 'ni' (に) após o lugar. 'へ' foca na DIREÇÃO, enquanto 'に' foca no PONTO DE CHEGADA. Para iniciantes, são praticamente intercambiáveis!", formula: "[Lugar] + へ/に + [Verbo de Movimento]", example: "とうきょう へ いきます (Toukyou e ikimasu) ➔ Vou para Tóquio." }
    ],
    stage3_practice: [
        {
            question: "1. Para dizer 'Eu vou para a escola', qual é a frase correta?",
            options: [
                { label: "わたし は がっこう へ いきます", isCorrect: true },
                { label: "わたし は がっこう が あります", isCorrect: false },
                { label: "わたし は がっこう を たべます", isCorrect: false }
            ]
        },
        {
            question: "2. Seu amigo te liga e pergunta 'Você vem para a festa?'. Qual verbo ele usaria?",
            options: [
                { label: "きます か？ (Kimasu ka?)", isCorrect: true },
                { label: "かえります か？ (Kaerimasu ka?)", isCorrect: false },
                { label: "あります か？ (Arimasu ka?)", isCorrect: false }
            ]
        },
        {
            question: "3. Você está no trabalho e diz 'Vou voltar para casa'. Qual verbo é o mais apropriado?",
            options: [
                { label: "うち へ いきます (Uchi e ikimasu)", isCorrect: false },
                { label: "うち へ かえります (Uchi e kaerimasu)", isCorrect: true },
                { label: "うち へ きます (Uchi e kimasu)", isCorrect: false }
            ]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Você encontra seu professor no corredor e ele pergunta sobre seus planos para depois da aula.",
            npcName: "Sato-sensei",
            npcMessage: "[Nome]-さん、このあと どこへ いきますか？ (Depois daqui, para onde você vai?)",
            options: [
                { text: "うち へ かえります。", feedback: "Perfeito! Resposta clara e correta usando o verbo de retorno.", isCorrect: true },
                { text: "うち が あります。", feedback: "Incorreto. Você disse 'Existe uma casa'.", isCorrect: false },
                { text: "うち です。", feedback: "Incorreto. Você disse 'É uma casa'.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Qual a principal diferença entre 'ikimasu' e 'kimasu'?", options: ["'Ikimasu' é ir, 'kimasu' é vir.", "'Ikimasu' é formal, 'kimasu' é informal.", "Não há diferença."], correctIndex: 0 }
    ]
};

const MODULO_A1_14 = {
    id: "a1_mod_14",
    title: "Meios e Ferramentas: A Partícula 'de' (で)",
    section: 3,
    sectionTitle: "Localização, Lugares & Movimento",
    level: "A1",
    xpReward: 105,
    stage1_context: {
        audioGuide: "Densha de ikimasu.",
        missionTitle: "Objetivo de Hoje: Como Você Faz?",
        missionDescription: "Descubra o poder da partícula 'de' (で) para indicar o meio de transporte que você usa, a ferramenta com que escreve ou o idioma em que fala."
    },
    stage2_drops: [
        { type: "vocab", kanji: "でんしゃ (電車)", romaji: "Densha", translation: "Trem", timeContext: "Principal meio de transporte no Japão." },
        { type: "vocab", kanji: "くるま (車)", romaji: "Kuruma", translation: "Carro", timeContext: "" },
        { type: "vocab", kanji: "バス", romaji: "Basu", translation: "Ônibus", timeContext: "Escrito em Katakana por ser palavra estrangeira (Bus)." },
        { type: "vocab", kanji: "はし", romaji: "Hashi", translation: "Hashi (pauzinhos para comer)", timeContext: "Ferramenta essencial na culinária asiática." },
        { type: "grammar_pill", title: "A Partícula de Meio/Método 'で' (de)", rule: "A partícula 'de' (で) é usada para indicar o MEIO pelo qual uma ação é realizada. Pode ser um veículo, uma ferramenta, um idioma, etc.", formula: "[Meio/Ferramenta] + で + [Verbo]", example: "えき まで でんしゃ で いきます (Eki made densha DE ikimasu) ➔ Vou até a estação DE trem." }
    ],
    stage3_practice: [
        {
            question: "1. Como se diz 'Eu vou para a escola de ônibus'?",
            options: [
                { label: "バス で がっこう へ いきます", isCorrect: true },
                { label: "バス を がっこう へ いきます", isCorrect: false },
                { label: "バス が がっこう へ いきます", isCorrect: false }
            ]
        },
        {
            question: "2. Para dizer 'Eu como sushi com hashi', qual a estrutura correta?",
            options: [
                { label: "はし に すし を たべます", isCorrect: false },
                { label: "はし で すし を たべます", isCorrect: true },
                { label: "はし へ すし を たべます", isCorrect: false }
            ]
        },
        {
            question: "3. Complete a frase: わたし は にほんご ___ はなします (Eu falo em japonês).",
            options: [
                { label: "で (de)", isCorrect: true },
                { label: "も (mo)", isCorrect: false },
                { label: "か (ka)", isCorrect: false }
            ]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Seu colega pergunta como você vai para o trabalho todos os dias.",
            npcName: "Colega",
            npcMessage: "かいしゃ へ なんで いきますか？ (Como você vai para a empresa?)",
            options: [
                { text: "でんしゃ で いきます。", feedback: "Perfeito! Resposta direta e correta usando a partícula 'de' para o meio de transporte.", isCorrect: true },
                { text: "でんしゃ を いきます。", feedback: "Incorreto. A partícula 'o' (を) indica objeto direto, não o meio.", isCorrect: false },
                { text: "でんしゃ が あります。", feedback: "Incorreto. Você disse 'Existe um trem'.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Qual é a função da partícula 'de' (で) em 'kuruma de ikimasu'?", options: ["Indicar o destino.", "Indicar o meio de transporte.", "Indicar o sujeito da frase."], correctIndex: 1 }
    ]
};

const MODULO_A1_15 = {
    id: "a1_mod_15",
    title: "Perguntando 'Quando?' & Datas (Itsu, -gatsu, -nichi)",
    section: 3,
    sectionTitle: "Localização, Lugares & Movimento",
    level: "A1",
    xpReward: 110,
    stage1_context: {
        audioGuide: "Tanjoubi wa itsu desu ka?",
        missionTitle: "Objetivo de Hoje: Mestre do Calendário",
        missionDescription: "Aprenda a perguntar 'quando?' (itsu) e a formar datas básicas com os sufixos de mês (-gatsu) e dia (-nichi), e finalize a Seção 3 com maestria!"
    },
    stage2_drops: [
        { type: "vocab", kanji: "いつ", romaji: "Itsu", translation: "Quando?", timeContext: "A palavra interrogativa para tempo." },
        { type: "vocab", kanji: "きょう / あした / きのう", romaji: "Kyou / Ashita / Kinou", translation: "Hoje / Amanhã / Ontem", timeContext: "Palavras essenciais de tempo que não usam partículas." },
        { type: "vocab", kanji: "～がつ (月)", romaji: "-gatsu", translation: "Sufixo para Mês", timeContext: "Ex: いちがつ (Ichigatsu) = Janeiro." },
        { type: "vocab", kanji: "～にち (日)", romaji: "-nichi", translation: "Sufixo para Dia do Mês", timeContext: "Ex: じゅうごにち (Juu-go-nichi) = Dia 15. (Atenção: os primeiros 10 dias têm leitura especial!)" },
        { type: "grammar_pill", title: "Perguntando e Respondendo Datas", rule: "Para perguntar 'quando', use 'itsu'. Para responder com uma data, use a estrutura [Mês] + [Dia].", formula: "たんじょうび は いつ です か？ (Tanjoubi wa itsu desu ka?)", example: "しがつ じゅうごにち です (Shigatsu juu-go-nichi desu) ➔ É dia 15 de abril." }
    ],
    stage3_practice: [
        {
            question: "1. Como se pergunta 'Quando é a festa?'",
            options: [
                { label: "パーティー は どこ です か？", isCorrect: false },
                { label: "パーティー は いつ です か？", isCorrect: true },
                { label: "パーティー は だれ です か？", isCorrect: false }
            ]
        },
        {
            question: "2. Se 'ni' é 2 e 'gatsu' é mês, como se diz 'Fevereiro'?",
            options: [
                { label: "にがつ (Nigatsu)", isCorrect: true },
                { label: "ににち (Ninichi)", isCorrect: false },
                { label: "にじ (Niji)", isCorrect: false }
            ]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Você quer marcar um encontro com um amigo e pergunta quando ele está livre.",
            npcName: "Amigo Kenji",
            npcMessage: "いいね！ いつ が いい です か？ (Boa ideia! Quando é bom para você?)",
            options: [
                { text: "あした は どう です か？ (Que tal amanhã?)", feedback: "Perfeito! Você usou 'ashita' corretamente para sugerir um dia.", isCorrect: true },
                { text: "あした で いきます。", feedback: "Incorreto. A estrutura está errada.", isCorrect: false },
                { text: "あした が あります。", feedback: "Incorreto. Você disse 'Existe um amanhã'.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [
        { question: "Qual palavra usamos para perguntar 'Quando?'", options: ["Doko", "Dare", "Itsu"], correctIndex: 2 }
    ]
};

const MODULO_A1_16 = {
    id: "a1_mod_16",
    title: "Contando de 1 a 10",
    section: 4,
    sectionTitle: "Números, Dinheiro & Compras",
    level: "A1",
    xpReward: 90,
    stage1_context: {
        audioGuide: "Ichi, ni, san, yon...",
        missionTitle: "Objetivo de Hoje: A Base Numérica",
        missionDescription: "Contar é a base para tudo: preços, horas, idade. Vamos dominar os números de 1 a 10 e entender por que alguns têm duas pronúncias."
    },
    stage2_drops: [
        { type: "vocab", kanji: "いち, に, さん", romaji: "Ichi, Ni, San", translation: "1, 2, 3", timeContext: "A base da contagem japonesa." },
        { type: "vocab", kanji: "よん (し), ご, ろく", romaji: "Yon (Shi), Go, Roku", translation: "4, 5, 6", timeContext: "" },
        { type: "vocab", kanji: "なな (しち), はち, きゅう", romaji: "Nana (Shichi), Hachi, Kyuu", translation: "7, 8, 9", timeContext: "" },
        { type: "vocab", kanji: "じゅう", romaji: "Juu", translation: "10", timeContext: "Com o 'Juu', você já pode formar números até 99!" },
        { type: "grammar_pill", title: "Os Números da Sorte (e do Azar)", rule: "Os números 4 e 7 têm duas leituras. 'Shi' (4) tem o mesmo som de 'morte' (死), e 'shichi' (7) pode ser confundido com 'ichi' (1). Por isso, no dia a dia, os japoneses preferem usar 'yon' e 'nana' para evitar confusão e superstição!", formula: "Prefira: よん (Yon) e なな (Nana)", example: "Ao contar objetos, é mais comum ouvir 'yon-mai' (4 folhas) do que 'shi-mai'." }
    ],
    stage3_practice: [
        {
            question: "1. Qual a pronúncia mais comum e segura para o número 4 no dia a dia?",
            options: [{ label: "よん (Yon)", isCorrect: true }, { label: "し (Shi)", isCorrect: false }, { label: "なな (Nana)", isCorrect: false }]
        },
        {
            question: "2. Como se diz o número 8 em japonês?",
            options: [{ label: "はち (Hachi)", isCorrect: true }, { label: "ろく (Roku)", isCorrect: false }, { label: "じゅう (Juu)", isCorrect: false }]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está em uma loja e o vendedor pergunta quantos itens você quer.",
            npcName: "Vendedor",
            npcMessage: "いくつ ですか？ (Quantos são?)",
            options: [
                { text: "よん、おねがいします。(Quatro, por favor.)", feedback: "Perfeito! Você usou 'yon', a forma mais comum para o número 4.", isCorrect: true },
                { text: "し、おねがいします。", feedback: "Funciona, mas 'yon' é mais natural e evita o som de 'morte'.", isCorrect: false },
                { text: "じゅう、おねがいします。", feedback: "Ops! Você pediu 10 em vez de 4.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "Qual número é 'kyuu' em japonês?", options: ["9", "7", "4"], correctIndex: 0 }]
};

const MODULO_A1_17 = {
    id: "a1_mod_17",
    title: "Dinheiro e Preços",
    section: 4,
    sectionTitle: "Números, Dinheiro & Compras",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Kore wa ikura desu ka?",
        missionTitle: "Objetivo de Hoje: Independência Financeira",
        missionDescription: "Aprenda a perguntar 'quanto custa?' e a entender os preços em ienes. Vamos dominar os números maiores para você nunca mais passar aperto em uma loja!"
    },
    stage2_drops: [
        { type: "vocab", kanji: "いくら", romaji: "Ikura", translation: "Quanto custa?", timeContext: "A pergunta essencial para qualquer compra." },
        { type: "vocab", kanji: "えん (円)", romaji: "En", translation: "Iene (Moeda do Japão)", timeContext: "Sempre vem depois do número. Ex: 100円 (hyaku en)." },
        { type: "vocab", kanji: "ひゃく (百)", romaji: "Hyaku", translation: "100 (Cem)", timeContext: "" },
        { type: "vocab", kanji: "せん (千)", romaji: "Sen", translation: "1.000 (Mil)", timeContext: "" },
        { type: "grammar_pill", title: "Construindo Números Grandes", rule: "A lógica é como Lego! Para dizer 2.500, você pensa 'dois mil e quinhentos'. Em japonês: にせん ごひゃく (ni-sen go-hyaku).", formula: "[Número] + 千 + [Número] + 百", example: "3.200円 ➔ さんぜん にひゃく えん (sanzen nihyaku en)." }
    ],
    stage3_practice: [
        {
            question: "1. Como se pergunta 'Quanto custa?' em japonês?",
            options: [{ label: "いくら です か？ (Ikura desu ka?)", isCorrect: true }, { label: "なんさい です か？ (Nansai desu ka?)", isCorrect: false }, { label: "どこ です か？ (Doko desu ka?)", isCorrect: false }]
        },
        {
            question: "2. Se 'san' é 3 e 'zen' é a variação de 1000, como se diz 3.000 ienes?",
            options: [{ label: "さんぜん えん (Sanzen en)", isCorrect: true }, { label: "さんびゃく えん (Sanbyaku en)", isCorrect: false }, { label: "さんじゅう えん (Sanjuu en)", isCorrect: false }]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está em uma loja de lembrancinhas e aponta para um chaveiro.",
            npcName: "Vendedor",
            npcMessage: "いらっしゃいませ！ (Bem-vindo!)",
            options: [
                { text: "すみません、これ は いくら です か？", feedback: "Perfeito! Você usou 'sumimasen' para chamar a atenção e fez a pergunta de preço corretamente.", isCorrect: true },
                { text: "これ は わたし の です。", feedback: "Incorreto. Você disse 'Isto é meu', não perguntou o preço.", isCorrect: false },
                { text: "これ は なな です。", feedback: "Incorreto. Você disse 'Isto é 7'.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "O que significa 'hyaku en' (百円)?", options: ["100 ienes", "1.000 ienes", "10 ienes"], correctIndex: 0 }]
};

const MODULO_A1_18 = {
    id: "a1_mod_18",
    title: "Comprando na Loja de Conveniência",
    section: 4,
    sectionTitle: "Números, Dinheiro & Compras",
    level: "A1",
    xpReward: 105,
    stage1_context: {
        audioGuide: "Kore o kudasai.",
        missionTitle: "Objetivo de Hoje: Mestre do Konbini",
        missionDescription: "Aprenda a frase mágica para pedir qualquer coisa em uma loja, como pedir uma sacola e como dizer que vai pagar com cartão."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～を ください", romaji: "o kudasai", translation: "Me dê ~, por favor", timeContext: "A forma mais direta e educada de pedir um item em uma loja." },
        { type: "vocab", kanji: "ふくろ", romaji: "Fukuro", translation: "Sacola", timeContext: "No Japão, muitas vezes perguntam se você precisa de uma." },
        { type: "vocab", kanji: "カード", romaji: "Kaado", translation: "Cartão (de crédito/débito)", timeContext: "Palavra estrangeira, por isso em Katakana." },
        { type: "grammar_pill", title: "A Fórmula do Pedido", rule: "Para pedir algo, aponte ou pegue o item e diga o nome dele seguido da partícula de objeto 'o' (を) e o verbo 'kudasai'.", formula: "[Item] + を + ください", example: "おみず を ください (O-mizu o kudasai) ➔ Me dê a água, por favor." }
    ],
    stage3_practice: [
        {
            question: "1. Você quer comprar um pão. Como você pede ao atendente?",
            options: [{ label: "パン を ください (Pan o kudasai)", isCorrect: true }, { label: "パン は いくら です か (Pan wa ikura desu ka)", isCorrect: false }, { label: "パン が あります (Pan ga arimasu)", isCorrect: false }]
        },
        {
            question: "2. O atendente pergunta 'Fukuro wa irimasu ka?'. O que ele quer saber?",
            options: [{ label: "Se você quer uma sacola.", isCorrect: true }, { label: "Se você vai pagar com cartão.", isCorrect: false }, { label: "Se você quer um desconto.", isCorrect: false }]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: No caixa do konbini, você quer pagar com seu cartão.",
            npcName: "Atendente",
            npcMessage: "おかいけい は ごひゃくえん です。(A conta é 500 ienes.)",
            options: [
                { text: "カード で おねがいします。(Com cartão, por favor.)", feedback: "Perfeito! Você usou a partícula 'de' para indicar o meio de pagamento.", isCorrect: true },
                { text: "ふくろ を ください。", feedback: "Incorreto. Você pediu uma sacola em vez de dizer como vai pagar.", isCorrect: false },
                { text: "はい、ごひゃくえん です。", feedback: "Incorreto. Você apenas repetiu o preço para o atendente.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "Qual a frase para pedir um item em uma loja?", options: ["~ o kudasai", "~ wa doko desu ka", "~ ga suki desu"], correctIndex: 0 }]
};

const MODULO_A1_19 = {
    id: "a1_mod_19",
    title: "Comida & Bebida I",
    section: 4,
    sectionTitle: "Números, Dinheiro & Compras",
    level: "A1",
    xpReward: 95,
    stage1_context: {
        audioGuide: "Mizu o nomimasu.",
        missionTitle: "Objetivo de Hoje: O Cardápio Básico",
        missionDescription: "Aprenda o vocabulário essencial para sobreviver em qualquer restaurante ou mercado: água, chá, arroz, pão, carne e peixe."
    },
    stage2_drops: [
        { type: "vocab", kanji: "みず (水)", romaji: "Mizu", translation: "Água", timeContext: "" },
        { type: "vocab", kanji: "おちゃ (お茶)", romaji: "Ocha", translation: "Chá (geralmente verde)", timeContext: "" },
        { type: "vocab", kanji: "ごはん (ご飯)", romaji: "Gohan", translation: "Arroz cozido / Refeição", timeContext: "" },
        { type: "vocab", kanji: "パン", romaji: "Pan", translation: "Pão", timeContext: "Vem do português, por isso é escrito em Katakana!" },
        { type: "vocab", kanji: "にく (肉)", romaji: "Niku", translation: "Carne", timeContext: "" },
        { type: "vocab", kanji: "さかな (魚)", romaji: "Sakana", translation: "Peixe", timeContext: "" },
        { type: "grammar_pill", title: "O Objeto da Ação: Partícula 'o' (を)", rule: "Quando você realiza uma ação (comer, beber, ver), o que sofre essa ação é marcado pela partícula 'o' (を).", formula: "[Comida/Bebida] を [Verbo]", example: "わたし は パン を たべます (Watashi wa pan o tabemasu) ➔ Eu como pão." }
    ],
    stage3_practice: [
        {
            question: "1. Qual a palavra para 'arroz cozido', que também pode significar 'refeição'?",
            options: [{ label: "ごはん (Gohan)", isCorrect: true }, { label: "みず (Mizu)", isCorrect: false }, { label: "にく (Niku)", isCorrect: false }]
        },
        {
            question: "2. Como se diz 'Eu bebo chá'?",
            options: [{ label: "おちゃ を のみます (Ocha o nomimasu)", isCorrect: true }, { label: "おちゃ が あります (Ocha ga arimasu)", isCorrect: false }, { label: "おちゃ です (Ocha desu)", isCorrect: false }]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Em um restaurante, o garçom pergunta o que você quer beber.",
            npcName: "Garçom",
            npcMessage: "おのみもの は？ (E a bebida?)",
            options: [
                { text: "みず を おねがいします。(Água, por favor.)", feedback: "Perfeito! Pedido claro e educado.", isCorrect: true },
                { text: "さかな です。", feedback: "Incorreto. Ele perguntou sobre a bebida, e você respondeu 'É peixe'.", isCorrect: false },
                { text: "はい、そうです。", feedback: "Incorreto. 'Sim, é isso' não responde à pergunta.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "Qual a palavra para 'carne' em japonês?", options: ["Niku", "Sakana", "Pan"], correctIndex: 0 }]
};

const MODULO_A1_20 = {
    id: "a1_mod_20",
    title: "Comida & Bebida II e Sabores",
    section: 4,
    sectionTitle: "Números, Dinheiro & Compras",
    level: "A1",
    xpReward: 110,
    stage1_context: {
        audioGuide: "Kono ramen wa oishii desu.",
        missionTitle: "Objetivo de Hoje: O Crítico Gastronômico",
        missionDescription: "Expanda seu cardápio com vegetais e frutas, e aprenda os adjetivos mais importantes para descrever uma refeição: delicioso, caro e barato."
    },
    stage2_drops: [
        { type: "vocab", kanji: "やさい (野菜)", romaji: "Yasai", translation: "Vegetais / Legumes", timeContext: "" },
        { type: "vocab", kanji: "くだもの (果物)", romaji: "Kudamono", translation: "Fruta(s)", timeContext: "" },
        { type: "vocab", kanji: "おいしい", romaji: "Oishii", translation: "Delicioso / Gostoso", timeContext: "O elogio mais importante para qualquer cozinheiro!" },
        { type: "vocab", kanji: "たかい (高い)", romaji: "Takai", translation: "Caro / Alto", timeContext: "Este adjetivo serve tanto para preço quanto para altura." },
        { type: "vocab", kanji: "やすい (安い)", romaji: "Yasui", translation: "Barato", timeContext: "" },
        { type: "grammar_pill", title: "Descrevendo Coisas com Adjetivos-i", rule: "Adjetivos que terminam em 'i' (como oishii, takai, yasui) são muito fáceis de usar. Basta colocá-los antes do substantivo ou usar com 'desu' no final.", formula: "[Adjetivo] + [Substantivo] / [Substantivo] は [Adjetivo] です", example: "おいしい ラーメン (oishii ramen) / この ラーメン は おいしい です (kono ramen wa oishii desu)." }
    ],
    stage3_practice: [
        {
            question: "1. Você comeu um sushi incrível. Como você diz 'É delicioso!'?",
            options: [{ label: "おいしい です (Oishii desu)", isCorrect: true }, { label: "やすい です (Yasui desu)", isCorrect: false }, { label: "たかい です (Takai desu)", isCorrect: false }]
        },
        {
            question: "2. Um prato custa 5.000 ienes. Ele é...",
            options: [{ label: "たかい (Takai)", isCorrect: true }, { label: "やすい (Yasui)", isCorrect: false }, { label: "おいしい (Oishii)", isCorrect: false }]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está comendo com um amigo japonês e prova o prato dele.",
            npcName: "Amigo Kenji",
            npcMessage: "どう？ おいしい？ (E aí? É gostoso?)",
            options: [
                { text: "うん、とても おいしい！ (Sim, muito delicioso!)", feedback: "Perfeito! Uma resposta positiva e entusiasmada.", isCorrect: true },
                { text: "はい、やすい です。", feedback: "Incorreto. Ele perguntou se era gostoso, não se era barato.", isCorrect: false },
                { text: "いいえ、やさい です。", feedback: "Incorreto. Você disse 'Não, é vegetal'.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "Qual adjetivo significa 'barato'?", options: ["Yasui", "Takai", "Oishii"], correctIndex: 0 }]
};

const MODULO_A1_21 = {
    id: "a1_mod_21",
    title: "Que Horas São? (...ji, ...fun, Han)",
    section: 5,
    sectionTitle: "Tempo, Horários & Rotina",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Ima nan-ji desu ka?",
        missionTitle: "Objetivo de Hoje: Mestre do Relógio",
        missionDescription: "Aprenda a perguntar e dizer as horas em japonês, usando os sufixos para horas (ji) e minutos (fun), além da palavra mágica para 'meia hora' (han)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "いま (今)", romaji: "Ima", translation: "Agora", timeContext: "" },
        { type: "vocab", kanji: "～じ (時)", romaji: "-ji", translation: "Sufixo para Horas", timeContext: "Ex: いちじ (ichi-ji) = 1 hora." },
        { type: "vocab", kanji: "～ふん / ぷん (分)", romaji: "-fun / -pun", translation: "Sufixo para Minutos", timeContext: "A pronúncia muda dependendo do número. Ex: ごふん (go-fun), じゅっぷん (juppun)." },
        { type: "vocab", kanji: "はん (半)", romaji: "Han", translation: "Meia (hora)", timeContext: "Usado para indicar 'e meia'. Ex: にじはん (ni-ji han) = 2 e meia." },
        { type: "grammar_pill", title: "A Fórmula do Tempo", rule: "Para dizer as horas, junte o número com 'ji' (hora) e 'fun' (minuto). Para perguntar, use 'nan-ji desu ka?'.", formula: "[Hora]-ji [Minuto]-fun / [Hora]-ji han", example: "いま は ごじ はん です (Ima wa go-ji han desu) ➔ Agora são 5 e meia." }
    ],
    stage3_practice: [
        {
            question: "1. Como se pergunta 'Que horas são agora?'",
            options: [{ label: "いま なんじ です か？ (Ima nan-ji desu ka?)", isCorrect: true }, { label: "いま いくら です か？ (Ima ikura desu ka?)", isCorrect: false }, { label: "いま どこ です か？ (Ima doko desu ka?)", isCorrect: false }]
        },
        {
            question: "2. Como se diz 'São 2 e meia'?",
            options: [{ label: "にじ はん です (Ni-ji han desu)", isCorrect: true }, { label: "にふん です (Ni-fun desu)", isCorrect: false }, { label: "にじ です (Ni-ji desu)", isCorrect: false }]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está na estação de trem e precisa saber as horas para não perder sua viagem.",
            npcName: "Pessoa na estação",
            npcMessage: "...",
            options: [
                { text: "すみません、いま なんじ です か？", feedback: "Perfeito! Você usou 'sumimasen' para chamar a atenção educadamente e fez a pergunta correta.", isCorrect: true },
                { text: "でんしゃ は おいしい です。", feedback: "Incorreto. Você disse 'O trem é delicioso'.", isCorrect: false },
                { text: "わたし は がくせい です。", feedback: "Incorreto. Você se apresentou em vez de perguntar as horas.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "O que significa 'han' (半) em um horário como 'san-ji han'?", options: ["Meia hora", "15 minutos", "Em ponto"], correctIndex: 0 }]
};

const MODULO_A1_22 = {
    id: "a1_mod_22",
    title: "Os Dias da Semana",
    section: 5,
    sectionTitle: "Tempo, Horários & Rotina",
    level: "A1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Kyou wa getsuyoubi desu.",
        missionTitle: "Objetivo de Hoje: O Calendário dos Elementos",
        missionDescription: "Domine os dias da semana, que no Japão são ligados aos elementos da natureza: Lua, Fogo, Água, Madeira, Ouro, Terra e Sol."
    },
    stage2_drops: [
        { type: "vocab", kanji: "げつようび (月曜日)", romaji: "Getsuyoubi", translation: "Segunda-feira (Dia da Lua)", timeContext: "" },
        { type: "vocab", kanji: "かようび (火曜日)", romaji: "Kayoubi", translation: "Terça-feira (Dia do Fogo)", timeContext: "" },
        { type: "vocab", kanji: "すいようび (水曜日)", romaji: "Suiyoubi", translation: "Quarta-feira (Dia da Água)", timeContext: "" },
        { type: "vocab", kanji: "もくようび (木曜日)", romaji: "Mokuyoubi", translation: "Quinta-feira (Dia da Madeira)", timeContext: "" },
        { type: "vocab", kanji: "きんようび (金曜日)", romaji: "Kinyoubi", translation: "Sexta-feira (Dia do Ouro)", timeContext: "" },
        { type: "vocab", kanji: "どようび (土曜日)", romaji: "Doyoubi", translation: "Sábado (Dia da Terra)", timeContext: "" },
        { type: "vocab", kanji: "にちようび (日曜日)", romaji: "Nichiyoubi", translation: "Domingo (Dia do Sol)", timeContext: "" },
        { type: "grammar_pill", title: "A Fórmula dos Dias", rule: "Todos os dias da semana terminam com 'youbi' (曜日). Basta memorizar o primeiro som/kanji de cada um!", formula: "[Elemento] + ようび", example: "にちようび (日曜日) ➔ Dia do Sol ➔ Domingo." }
    ],
    stage3_practice: [
        {
            question: "1. Qual dia da semana é 'Kayoubi' (火曜日)?",
            options: [{ label: "Terça-feira", isCorrect: true }, { label: "Quinta-feira", isCorrect: false }, { label: "Sexta-feira", isCorrect: false }]
        },
        {
            question: "2. Como se diz 'Sábado' em japonês?",
            options: [{ label: "どようび (Doyoubi)", isCorrect: true }, { label: "すいようび (Suiyoubi)", isCorrect: false }, { label: "げつようび (Getsuyoubi)", isCorrect: false }]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Você quer marcar um encontro com um amigo e pergunta que dia da semana é a festa.",
            npcName: "Amigo Kenji",
            npcMessage: "パーティー に いきましょう！ (Vamos para a festa!)",
            options: [
                { text: "いいね！ なんようび です か？ (Legal! Que dia da semana é?)", feedback: "Perfeito! Você usou 'nan'youbi' para perguntar o dia da semana.", isCorrect: true },
                { text: "なんじ です か？ (Que horas são?)", feedback: "Incorreto. Você perguntou as horas, não o dia.", isCorrect: false },
                { text: "どようび です。", feedback: "Incorreto. Você afirmou que é sábado, em vez de perguntar.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "'Kinyoubi' (金曜日) é o dia de qual elemento?", options: ["Ouro/Metal", "Água", "Fogo"], correctIndex: 0 }]
};

const MODULO_A1_23 = {
    id: "a1_mod_23",
    title: "As Partes do Dia e do Tempo",
    section: 5,
    sectionTitle: "Tempo, Horários & Rotina",
    level: "A1",
    xpReward: 95,
    stage1_context: {
        audioGuide: "Kinou, eiga o mimashita.",
        missionTitle: "Objetivo de Hoje: Sua Linha do Tempo Pessoal",
        missionDescription: "Aprenda a se situar no tempo com as palavras essenciais para hoje, amanhã e ontem, e as partes do dia como manhã, tarde e noite."
    },
    stage2_drops: [
        { type: "vocab", kanji: "きょう (今日)", romaji: "Kyou", translation: "Hoje", timeContext: "" },
        { type: "vocab", kanji: "あした (明日)", romaji: "Ashita", translation: "Amanhã", timeContext: "" },
        { type: "vocab", kanji: "きのう (昨日)", romaji: "Kinou", translation: "Ontem", timeContext: "" },
        { type: "vocab", kanji: "あさ (朝)", romaji: "Asa", translation: "Manhã", timeContext: "" },
        { type: "vocab", kanji: "ひる (昼)", romaji: "Hiru", translation: "Tarde / Meio-dia", timeContext: "" },
        { type: "vocab", kanji: "よる (夜)", romaji: "Yoru", translation: "Noite", timeContext: "" },
        { type: "grammar_pill", title: "Tempo Sem Partícula", rule: "Palavras como 'kyou', 'ashita' e 'kinou' são tão específicas que geralmente não precisam da partícula de tempo 'ni'.", formula: "❌ Ashita ni ikimasu. ✅ Ashita ikimasu.", example: "Kinou sushi o tabemashita. (Comi sushi ontem.)" }
    ],
    stage3_practice: [
        {
            question: "1. Como se diz 'manhã' em japonês?",
            options: [{ label: "あさ (Asa)", isCorrect: true }, { label: "よる (Yoru)", isCorrect: false }, { label: "ひる (Hiru)", isCorrect: false }]
        },
        {
            question: "2. Se hoje é 'kyou', como se diz 'ontem'?",
            options: [{ label: "きのう (Kinou)", isCorrect: true }, { label: "あした (Ashita)", isCorrect: false }, { label: "あさ (Asa)", isCorrect: false }]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Um colega de trabalho pergunta sobre seus planos para amanhã.",
            npcName: "Colega",
            npcMessage: "あした、なに を します か？ (O que você vai fazer amanhã?)",
            options: [
                { text: "かいしゃ へ いきます。(Vou para a empresa.)", feedback: "Correto. Uma resposta simples e direta sobre seu plano.", isCorrect: true },
                { text: "きのう いきました。(Eu fui ontem.)", feedback: "Incorreto. Ele perguntou sobre amanhã, não sobre ontem.", isCorrect: false },
                { text: "きょう です。(É hoje.)", feedback: "Incorreto. Não responde à pergunta sobre o que você vai fazer.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "Qual palavra significa 'noite'?", options: ["Yoru", "Asa", "Hiru"], correctIndex: 0 }]
};

const MODULO_A1_24 = {
    id: "a1_mod_24",
    title: "Verbos de Ação I - Consumo",
    section: 5,
    sectionTitle: "Tempo, Horários & Rotina",
    level: "A1",
    xpReward: 105,
    stage1_context: {
        audioGuide: "Gohan o tabemasu.",
        missionTitle: "Objetivo de Hoje: O que você faz?",
        missionDescription: "Aprenda os 4 verbos de 'consumo' mais comuns do dia a dia: comer, beber, ver e ouvir. E domine a partícula 'wo' (を) para indicar o que você consome."
    },
    stage2_drops: [
        { type: "vocab", kanji: "たべます (食べます)", romaji: "Tabemasu", translation: "Comer", timeContext: "" },
        { type: "vocab", kanji: "のみます (飲みます)", romaji: "Nomimasu", translation: "Beber", timeContext: "" },
        { type: "vocab", kanji: "みます (見ます)", romaji: "Mimasu", translation: "Ver / Assistir", timeContext: "" },
        { type: "vocab", kanji: "ききます (聞きます)", romaji: "Kikimasu", translation: "Ouvir / Escutar", timeContext: "" },
        { type: "grammar_pill", title: "O Objeto da Ação: Partícula を (o)", rule: "A partícula を (pronunciada 'o') marca o que sofre a ação do verbo. É o 'alvo' do seu consumo.", formula: "[Objeto] を [Verbo]", example: "ジュース を のみます (Juusu o nomimasu) ➔ Bebo suco." }
    ],
    stage3_practice: [
        {
            question: "1. Para dizer 'Eu assisto TV', qual verbo você usa?",
            options: [{ label: "みます (Mimasu)", isCorrect: true }, { label: "ききます (Kikimasu)", isCorrect: false }, { label: "たべます (Tabemasu)", isCorrect: false }]
        },
        {
            question: "2. Complete a frase: おんがく ___ ききます。",
            options: [{ label: "を (o)", isCorrect: true }, { label: "へ (e)", isCorrect: false }, { label: "で (de)", isCorrect: false }]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Em um restaurante, o garçom pergunta o que você vai comer.",
            npcName: "Garçom",
            npcMessage: "なに を たべます か？",
            options: [
                { text: "ラーメン を たべます。(Vou comer ramen.)", feedback: "Perfeito! Resposta direta usando o objeto e o verbo corretamente.", isCorrect: true },
                { text: "みず を のみます。(Vou beber água.)", feedback: "Correto, mas ele perguntou o que você vai COMER.", isCorrect: false },
                { text: "はい、たべます。(Sim, vou comer.)", feedback: "Incompleto. Você não disse O QUE vai comer.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "Qual partícula marca o objeto direto de um verbo como 'tabemasu'?", options: ["を (o)", "が (ga)", "に (ni)"], correctIndex: 0 }]
};

const MODULO_A1_25 = {
    id: "a1_mod_25",
    title: "Verbos de Ação II - Movimento",
    section: 5,
    sectionTitle: "Tempo, Horários & Rotina",
    level: "A1",
    xpReward: 110,
    stage1_context: {
        audioGuide: "Gakkou e ikimasu.",
        missionTitle: "Objetivo de Hoje: Colocando o Mundo em Movimento",
        missionDescription: "Domine os três verbos essenciais de movimento: ir, vir e voltar para casa. Aprenda a usar as partículas de destino 'e' (へ) e 'ni' (に)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "いきます (行きます)", romaji: "Ikimasu", translation: "Ir", timeContext: "Movimento para longe de onde você está." },
        { type: "vocab", kanji: "きます (来ます)", romaji: "Kimasu", translation: "Vir", timeContext: "Movimento em direção a onde você está." },
        { type: "vocab", kanji: "かえります (帰ります)", romaji: "Kaerimasu", translation: "Voltar (para casa/país)", timeContext: "Verbo especial para retornar ao seu ponto de origem." },
        { type: "grammar_pill", title: "Partículas de Destino: へ (e) vs に (ni)", rule: "Ambas indicam o destino. 'へ' (pronuncia-se 'e') foca na direção do movimento, enquanto 'に' foca no ponto de chegada. Para iniciantes, são quase intercambiáveis.", formula: "[Lugar] へ/に [Verbo de Movimento]", example: "Toshokan e ikimasu. (Vou para a biblioteca.)" }
    ],
    stage3_practice: [
        {
            question: "1. Você está no trabalho e vai para casa. Qual verbo é o mais apropriado?",
            options: [{ label: "かえります (Kaerimasu)", isCorrect: true }, { label: "いきます (Ikimasu)", isCorrect: false }, { label: "きます (Kimasu)", isCorrect: false }]
        },
        {
            question: "2. Seu amigo te chama para a festa dele. Ele pergunta se você...",
            options: [{ label: "きますか？ (Kimasu ka?)", isCorrect: true }, { label: "いきますか？ (Ikimasu ka?)", isCorrect: false }, { label: "かえりますか？ (Kaerimasu ka?)", isCorrect: false }]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Seu chefe pergunta para onde você vai depois do trabalho.",
            npcName: "Chefe",
            npcMessage: "このあと、どこ へ いきます か？",
            options: [
                { text: "うち へ かえります。(Vou voltar para casa.)", feedback: "Perfeito! Você usou o verbo de retorno 'kaerimasu' corretamente.", isCorrect: true },
                { text: "うち へ きます。(Vou vir para casa.)", feedback: "Incorreto. 'Kimasu' indica movimento em direção ao falante. Soaria estranho.", isCorrect: false },
                { text: "パン を たべます。(Como pão.)", feedback: "Incorreto. Não responde à pergunta sobre para onde você vai.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "Qual a principal diferença entre 'ikimasu' e 'kimasu'?", options: ["Ir vs. Vir", "Formal vs. Informal", "Presente vs. Passado"], correctIndex: 0 }]
};

// ==========================================
// SEÇÃO 6: NAVEGAÇÃO, EXISTÊNCIA & DESAFIO FINAL (MÓDULOS 26 AO 31)
// ==========================================

const MODULO_A1_26 = {
    id: "a1_mod_26",
    title: "Pelo Transporte Público (Densha, Basu, Takushi)",
    section: 6,
    sectionTitle: "Navegação, Existência & Desafio Final",
    level: "A1",
    xpReward: 110,
    stage1_context: {
        audioGuide: "Densha de ikimasu.",
        missionTitle: "Objetivo de Hoje: Locomoção em Redes de Transporte",
        missionDescription: "Aprenda a andar de trem, metrô, ônibus e táxi no Japão! Vamos usar a partícula 'de' (で) para indicar o meio de transporte."
    },
    stage2_drops: [
        { type: "vocab", kanji: "でんしゃ (電車)", romaji: "Densha", translation: "Trem elétrico", timeContext: "O principal meio de transporte nas metrópoles japonesas." },
        { type: "vocab", kanji: "ちかてつ (地下鉄)", romaji: "Chikatetsu", translation: "Metrô", timeContext: "Sistema subterrâneo rápido em cidades como Tóquio e Osaka." },
        { type: "vocab", kanji: "バス", romaji: "Basu", translation: "Ônibus", timeContext: "Palavra importada do inglês, por isso escrita em Katakana." },
        { type: "vocab", kanji: "タクシー", romaji: "Takushi", translation: "Táxi", timeContext: "Lembre-se: as portas traseiras dos táxis abrem e fecham automaticamente!" },
        { type: "grammar_pill", title: "Partícula de Meio de Transporte: で (de)", rule: "Para indicar o meio de transporte usado para ir a algum lugar, coloque a partícula で após o veículo.", formula: "[Meio de Transporte] で [Verbo de Movimento]", example: "Densha de ikimasu. (Vou de trem.) | Basu de kaerimasu. (Volto de ônibus.)" }
    ],
    stage3_practice: [
        {
            question: "1. Como se diz formalmente em japonês: 'Vou de trem'?",
            options: [
                { label: "🚆 でんしゃ で いきます (Densha de ikimasu)", isCorrect: true },
                { label: "🚌 バス で いきます (Basu de ikimasu)", isCorrect: false },
                { label: "🚕 タクシー で いきます (Takushi de ikimasu)", isCorrect: false }
            ]
        },
        {
            question: "2. Qual partícula é usada após o meio de transporte para indicar o meio de locomoção?",
            options: [
                { label: "は (wa)", isCorrect: false },
                { label: "で (de)", isCorrect: true },
                { label: "に (ni)", isCorrect: false }
            ]
        },
        {
            question: "3. Como você pede ao motorista de táxi para ir até a Estação de Tóquio?",
            options: [
                { label: "とうきょう えき まで おねがいします (Toukyou eki made onegaishimasu)", isCorrect: true },
                { label: "とうきょう えき ですか？ (Toukyou eki desu ka?)", isCorrect: false },
                { label: "とうきょう えき は どこ ですか？ (Toukyou eki wa doko desu ka?)", isCorrect: false }
            ]
        },
        {
            question: "4. Exceção especial: Para dizer 'Vou a pé' (sem veículo), qual expressão deve usar?",
            options: [
                { label: "あるいて いきます (Aruite ikimasu - Sem a partícula de)", isCorrect: true },
                { label: "あし で いきます (Ashi de ikimasu)", isCorrect: false },
                { label: "あるく で いきます (Aruku de ikimasu)", isCorrect: false }
            ]
        },
        {
            question: "5. Qual o significado correto de 'Chikatetsu de ikimasu'?",
            options: [
                { label: "Vou de metrô", isCorrect: true },
                { label: "Vou de táxi", isCorrect: false },
                { label: "Vou de ônibus", isCorrect: false }
            ]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Você está na bilheteria da estação de Shinjuku comprando passagem.",
            npcName: "Atendente da Estação",
            npcMessage: "どちら まで ですか？ (Até onde você vai?)",
            options: [
                { text: "とうきょう えき まで でんしゃ で いきます。(Vou de trem até a Estação de Tóquio.)", feedback: "Excelente! Resposta perfeita usando a partícula 'de' e o destino com 'made'.", isCorrect: true },
                { text: "バス です！", feedback: "Inadequado. Ele perguntou o destino, não apenas o veículo.", isCorrect: false },
                { text: "こんばんは！", feedback: "Fora de contexto no balcão de passagens.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Você entra em um táxi em Ginza e fala com o motorista.",
            npcName: "Motorista de Táxi",
            npcMessage: "どちら まで おねがいしますか？ (Para onde deseja ir?)",
            options: [
                { text: "ホテル まで おねがいします。(Para o hotel, por favor.)", feedback: "Mandou muito bem! Frase clássica e educada para andar de táxi no Japão.", isCorrect: true },
                { text: "タクシー で いきます！", feedback: "Incorreto. Você já está dentro do táxi!", isCorrect: false },
                { text: "はじめまして！ [Seu Nome] です。", feedback: "Não é necessário fazer apresentação formal completa ao motorista.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Um colega de trabalho pergunta como você vai para a empresa todos os dias.",
            npcName: "Colega Sato",
            npcMessage: "まいにし、なに で かいしゃ へ いきます か？ (Todos os dias, de que você vai para a empresa?)",
            options: [
                { text: "ちかてつ で いきます！ (Vou de metrô!)", feedback: "Perfeito! Comunicação rápida, precisa e natural.", isCorrect: true },
                { text: "かいしゃいん です！", feedback: "Ops! Você respondeu 'Sou funcionário de empresa' em vez do meio de transporte.", isCorrect: false },
                { text: "さようなら！", feedback: "Completamente fora de sentido.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "Qual é a partícula usada para indicar o meio de transporte?", options: ["で (de)", "に (ni)", "を (o)"], correctIndex: 0 }]
};

const MODULO_A1_27 = {
    id: "a1_mod_27",
    title: "Perdido na Rua: Onde Fica? (Doko & Koko, Soko, Asoko)",
    section: 6,
    sectionTitle: "Navegação, Existência & Desafio Final",
    level: "A1",
    xpReward: 115,
    stage1_context: {
        audioGuide: "Eki wa doko desu ka?",
        missionTitle: "Objetivo de Hoje: Pedindo Direções na Cidade",
        missionDescription: "Ficou perdido em Shinjuku ou Akihabara? Domine a pergunta sagrada '...wa doko desu ka?' e os demonstrativos de lugar koko, soko e asoko."
    },
    stage2_drops: [
        { type: "vocab", kanji: "どこ", romaji: "Doko", translation: "Onde? / Qual lugar?", timeContext: "Pronome interrogativo de lugar." },
        { type: "vocab", kanji: "ここ", romaji: "Koko", translation: "Aqui", timeContext: "Lugar próximo do falante." },
        { type: "vocab", kanji: "そこ", romaji: "Soko", translation: "Aí", timeContext: "Lugar próximo do ouvinte." },
        { type: "vocab", kanji: "あそこ", romaji: "Asoko", translation: "Lá / Ali distante", timeContext: "Lugar distante tanto do falante quanto do ouvinte." },
        { type: "grammar_pill", title: "A Pergunta de Localização: ...は どこ ですか？", rule: "Para perguntar onde fica qualquer lugar (banheiro, estação, hotel), coloque o nome do local + は どこ ですか？", formula: "[Lugar] は どこ ですか？", example: "Toire wa doko desu ka? (Onde fica o banheiro?) | Eki wa doko desu ka? (Onde fica a estação?)" }
    ],
    stage3_practice: [
        {
            question: "1. Como perguntar educadamente a um pedestre onde fica o banheiro?",
            options: [
                { label: "🚽 すみません、トイレ は どこ ですか？ (Sumimasen, toire wa doko desu ka?)", isCorrect: true },
                { label: "🏢 トイレ は ここ ですか？ (Toire wa koko desu ka?)", isCorrect: false },
                { label: "❓ トイレ は なん ですか？ (Toire wa nan desu ka?)", isCorrect: false }
            ]
        },
        {
            question: "2. Se o local indicado fica longe de ambos, apontando para o horizonte, qual palavra se usa?",
            options: [
                { label: "ここ (Koko)", isCorrect: false },
                { label: "そこ (Soko)", isCorrect: false },
                { label: "あそこ (Asoko)", isCorrect: true }
            ]
        },
        {
            question: "3. O que significa a expressão 'Koko desu'?",
            options: [
                { label: "É aqui", isCorrect: true },
                { label: "É lá longe", isCorrect: false },
                { label: "Onde é?", isCorrect: false }
            ]
        },
        {
            question: "4. Qual das opções abaixo significa 'Onde fica a estação de trem?'",
            options: [
                { label: "えき は どこ ですか？ (Eki wa doko desu ka?)", isCorrect: true },
                { label: "えき は あそこ です (Eki wa asoko desu)", isCorrect: false },
                { label: "えき は なん ですか？ (Eki wa nan desu ka?)", isCorrect: false }
            ]
        },
        {
            question: "5. Qual palavra substitui 'Doko' de forma extremamente polida e refinada em hotéis?",
            options: [
                { label: "どちら (Dochira)", isCorrect: true },
                { label: "どれ (Dore)", isCorrect: false },
                { label: "だれ (Dare)", isCorrect: false }
            ]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Você desembarcou em Akihabara e procura uma loja de conveniência na rua.",
            npcName: "Pedestre Nativo",
            npcMessage: "何かお困りですか？ (Precisa de ajuda?)",
            options: [
                { text: "すみません、コンビニ は どこ ですか？", feedback: "Perfeito! 'Com licença, onde fica a loja de conveniência?' é super natural.", isCorrect: true },
                { text: "コンビニ は あそこ です！", feedback: "Incorreto: Você está afirmando em vez de perguntar onde fica!", isCorrect: false },
                { text: "ありがとう！", feedback: "Ainda não é hora de agradecer, você precisa pedir a informação primeiro.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: O pedestre aponta para um prédio bem no fim do quarteirão.",
            npcName: "Pedestre Nativo",
            npcMessage: "あそこ ですよ！ ビル の 1かい です。(É lá! No primeiro andar do prédio.)",
            options: [
                { text: "あそこ ですね！ ありがとうございます！", feedback: "Excelente! Você entendeu a indicação 'Asoko' (lá longe) e agradeceu.", isCorrect: true },
                { text: "ここ ですか？", feedback: "Incorreto: Ele apontou para 'Asoko' (lá longe), não 'Koko' (aqui).", isCorrect: false },
                { text: "ごめんなさい！", feedback: "Inadequado: Usar desculpas emotivas ao receber uma ajuda simples.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Na recepção do hotel em Quioto, você deseja encontrar a sala de café da manhã.",
            npcName: "Recepcionista do Hotel",
            npcMessage: "いらっしゃいませ！ [Seu Nome]・様。",
            options: [
                { text: "すみません、レストラン は どこ ですか？", feedback: "Impecável! Pergunta clara, educada e direta ao ponto.", isCorrect: true },
                { text: "レストラン は ここ です！", feedback: "Errado: Você está dizendo à recepcionista onde fica o restaurante!", isCorrect: false },
                { text: "じゃあね！", feedback: "Completamente inapropriado para falar com a recepção.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "Qual a diferença entre Koko, Soko e Asoko?", options: ["Aqui, Aí, Lá longe", "Eu, Você, Ele", "Hoje, Amanhã, Ontem"], correctIndex: 0 }]
};

const MODULO_A1_28 = {
    id: "a1_mod_28",
    title: "Coisas que Existem - Arimasu (Existência Inanimada)",
    section: 6,
    sectionTitle: "Navegação, Existência & Desafio Final",
    level: "A1",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Hon ga arimasu.",
        missionTitle: "Objetivo de Hoje: Expressando a Existência de Objetos",
        missionDescription: "Aprenda a dizer que um objeto, livro, prédio ou planta EXISTE ou ESTÁ em determinado lugar usando o verbo Arimasu (あります) e a partícula Ga (가)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "あります (有ります)", romaji: "Arimasu", translation: "Haver / Existir / Ter (para coisas inanimadas)", timeContext: "Verbo de existência exclusivo para objetos e plantas." },
        { type: "vocab", kanji: "ありません", romaji: "Arimasen", translation: "Não haver / Não ter / Não existir", timeContext: "Forma negativa de Arimasu." },
        { type: "vocab", kanji: "ほん (本)", romaji: "Hon", translation: "Livro", timeContext: "Objeto inanimado clássico." },
        { type: "vocab", kanji: "くるま (車)", romaji: "Kuruma", translation: "Carro / Veículo", timeContext: "Meio inanimado de transporte." },
        { type: "grammar_pill", title: "Existência Inanimada com あります (Arimasu)", rule: "Usamos あります exclusivamente para objetos, móveis, plantas e coisas sem vida própria. A partícula de sujeito é が (ga).", formula: "[Objeto/Coisa] が あります", example: "Pen ga arimasu. (Tem uma caneta / Há uma caneta.) | Kuruma ga arimasu. (Há um carro.)" }
    ],
    stage3_practice: [
        {
            question: "1. Como se diz 'Há um livro' ou 'Tem um livro' em japonês?",
            options: [
                { label: "📖 ほん が あります (Hon ga arimasu)", isCorrect: true },
                { label: "📖 ほん が います (Hon ga imasu)", isCorrect: false },
                { label: "📖 ほん は です (Hon wa desu)", isCorrect: false }
            ]
        },
        {
            question: "2. Qual verbo deve ser usado para objetos inanimados (livro, celular, mesa)?",
            options: [
                { label: "あります (Arimasu)", isCorrect: true },
                { label: "います (Imasu)", isCorrect: false },
                { label: "いきます (Ikimasu)", isCorrect: false }
            ]
        },
        {
            question: "3. Como dizer 'Não há dinheiro / Não tenho dinheiro' de forma formal?",
            options: [
                { label: "おかね が ありません (Okane ga arimasen)", isCorrect: true },
                { label: "おかね が あります (Okane ga arimasu)", isCorrect: false },
                { label: "おかね は どこ です (Okane wa doko desu)", isCorrect: false }
            ]
        },
        {
            question: "4. Qual a partícula correta usada para marcar o objeto que 'existe' antes do verbo Arimasu?",
            options: [
                { label: "が (ga)", isCorrect: true },
                { label: "を (o)", isCorrect: false },
                { label: "へ (e)", isCorrect: false }
            ]
        },
        {
            question: "5. Qual frase indica que 'Há um computador na mesa'?",
            options: [
                { label: "つくえ に パソコン が あります (Tsukue ni pasokon ga arimasu)", isCorrect: true },
                { label: "つくえ に パソコン が います (Tsukue ni pasokon ga imasu)", isCorrect: false },
                { label: "つくえ で パソコン です (Tsukue de pasokon desu)", isCorrect: false }
            ]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Na livraria de Quioto, você quer saber se há dicionários de japonês.",
            npcName: "Atendente da Livraria",
            npcMessage: "いらっしゃいませ！ なに を おさがし ですか？",
            options: [
                { text: "じしょ (Dicionário) が あります か？", feedback: "Mandou muito bem! Usou a partícula 'ga' e o verbo 'arimasu ka?' perfeitamente.", isCorrect: true },
                { text: "じしょ が います か？", feedback: "Incorreto: Dicionário é um objeto inanimado, não se usa 'imasu'!", isCorrect: false },
                { text: "じしょ です！", feedback: "Incompleto para perguntar sobre existência em uma loja.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Você chega ao seu quarto de hotel e pergunta se há conexão Wi-Fi.",
            npcName: "Recepcionista",
            npcMessage: "おへや の せつめい は いかが ですか？ (Alguma dúvida sobre o quarto?)",
            options: [
                { text: "Wi-Fi が あります か？", feedback: "Excelente! Pergunta prática, direta e indispensável na viagem.", isCorrect: true },
                { text: "Wi-Fi が います か？", feedback: "Incorreto: Wi-Fi não é um ser vivo!", isCorrect: false },
                { text: "Wi-Fi は どこ ですか？", feedback: "Também é possível, mas para perguntar se 'tem/existe', 'arimasu ka' é a resposta perfeita.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: No restaurante, o garçom traz o prato mas você nota que faltam os palitinhos (hashi).",
            npcName: "Garçom",
            npcMessage: "おまたせいたしました！ (Aqui está o seu pedido!)",
            options: [
                { text: "すみません、はし が ありません。(Com licença, não há palitinhos.)", feedback: "Perfeito! Usou a forma negativa 'arimasen' com polidez exemplar.", isCorrect: true },
                { text: "はし が います！", feedback: "Incorreto: Erro duplo (afirmação + verbo de seres vivos).", isCorrect: false },
                { text: "ごめんなさい！", feedback: "Não é motivo para se desculpar, você apenas precisa pedir os palitos.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "O verbo 'Arimasu' pode ser usado para pessoas?", options: ["Não, é exclusivo para coisas inanimadas e objetos.", "Sim, pode ser usado para qualquer coisa.", "Apenas para professores."], correctIndex: 0 }]
};

const MODULO_A1_29 = {
    id: "a1_mod_29",
    title: "Pessoas e Animais que Existem - Imasu (Existência Animada)",
    section: 6,
    sectionTitle: "Navegação, Existência & Desafio Final",
    level: "A1",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Inu ga imasu. Tomodachi ga imasu.",
        missionTitle: "Objetivo de Hoje: Expressando a Existência de Seres Vivos",
        missionDescription: "Descubra a regra de ouro do japonês: para seres que se movem por conta própria (pessoas, cães, gatos, insetos), trocamos Arimasu pelo verbo Imasu (います)!"
    },
    stage2_drops: [
        { type: "vocab", kanji: "います (居ます)", romaji: "Imasu", translation: "Haver / Estar / Existir (para seres vivos)", timeContext: "Verbo de existência exclusivo para pessoas e animais." },
        { type: "vocab", kanji: "いません", romaji: "Imasen", translation: "Não haver / Não estar (para seres vivos)", timeContext: "Forma negativa de Imasu." },
        { type: "vocab", kanji: "いぬ (犬)", romaji: "Inu", translation: "Cão / Cachorro", timeContext: "Ser vivo (animal)." },
        { type: "vocab", kanji: "ねこ (猫)", romaji: "Neko", translation: "Gato", timeContext: "Ser vivo (animal)." },
        { type: "grammar_pill", title: "O Duelo: あります (Arimasu) vs います (Imasu)", rule: "Arimasu = Coisas inanimadas (livro, celular, mesa). Imasu = Seres vivos (amigo, professor, cão, gato).", formula: "[Ser Vivo] が います", example: "Sensei ga imasu. (O professor está aqui.) | Inu ga imasu. (Há um cachorro.)" }
    ],
    stage3_practice: [
        {
            question: "1. Qual verbo você deve usar para dizer 'Há um gato no jardim'?",
            options: [
                { label: "🐱 ねこ が います (Neko ga imasu)", isCorrect: true },
                { label: "🐱 ねこ が あります (Neko ga arimasu)", isCorrect: false },
                { label: "🐱 ねこ です (Neko desu)", isCorrect: false }
            ]
        },
        {
            question: "2. Como dizer 'O professor Tanaka está na sala de aula'?",
            options: [
                { label: "タナカ・せんせい が います (Tanaka-sensei ga imasu)", isCorrect: true },
                { label: "タナカ・せんせい が あります (Tanaka-sensei ga arimasu)", isCorrect: false },
                { label: "タナカ・せんせい は どこ (Tanaka-sensei wa doko)", isCorrect: false }
            ]
        },
        {
            question: "3. Como dizer 'Não há ninguém / Não tem ninguém aqui'?",
            options: [
                { label: "だれ も いません (Dare mo imasen)", isCorrect: true },
                { label: "なに も ありません (Nani mo arimasen)", isCorrect: false },
                { label: "だれ は です (Dare wa desu)", isCorrect: false }
            ]
        },
        {
            question: "4. Se você quer perguntar se um amigo tem um cão de estimação, qual a frase correta?",
            options: [
                { label: "いぬ が います か？ (Inu ga imasu ka?)", isCorrect: true },
                { label: "いぬ が あります か？ (Inu ga arimasu ka?)", isCorrect: false },
                { label: "いぬ は なん ですか？ (Inu wa nan desu ka?)", isCorrect: false }
            ]
        },
        {
            question: "5. Qual a diferença fundamental entre 'Hon ga arimasu' e 'Inu ga imasu'?",
            options: [
                { label: "Hon é inanimado (Arimasu); Inu é um ser vivo (Imasu)", isCorrect: true },
                { label: "Não há diferença, são idênticos", isCorrect: false },
                { label: "Imasu só se usa para plantas", isCorrect: false }
            ]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Você chega ao escritório procurando pelo diretor Tanaka.",
            npcName: "Secretária",
            npcMessage: "いらっしゃいませ！ 何かご用ですか？ (Pois não, em que posso ajudar?)",
            options: [
                { text: "すみません、タナカ・さん は います か？", feedback: "Perfeito! Usou o verbo 'imasu ka?' para perguntar se uma pessoa está presente.", isCorrect: true },
                { text: "タナカ・さん は あります か？", feedback: "Incorreto: Tanaka é uma pessoa, nunca use 'arimasu' para pessoas!", isCorrect: false },
                { text: "タナカ・さん です！", feedback: "Incompleto para verificar a presença de alguém.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Em um parque em Quioto, você vê uma senhora passeando com um lindo animal.",
            npcName: "Senhora no Parque",
            npcMessage: "こんにちは！ いい おてんき ですね。(Olá! Belíssimo dia, não?)",
            options: [
                { text: "こんにちは！ かわいい (fofo) いぬ が いますね！", feedback: "Excelente! Notou o cãozinho e usou 'imasu' corretamente para o animal.", isCorrect: true },
                { text: "かわいい いぬ が ありますね！", feedback: "Incorreto: Cães são seres vivos, exigem 'imasu'!", isCorrect: false },
                { text: "さようなら！", feedback: "Despediu-se logo no início da conversa.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Seu amigo Kenji pergunta se você mora sozinho ou com mais alguém.",
            npcName: "Kenji",
            npcMessage: "[Seu Nome]・さん、いえ に だれ か います か？ (Tem alguém na sua casa?)",
            options: [
                { text: "いいえ、だれ も いません。ひとりで すんでいます。(Não, não tem ninguém. Moro sozinho.)", feedback: "Impecável! Resposta avançada, natural e gramaticalmente impecável.", isCorrect: true },
                { text: "いいえ、だれ も ありません。", feedback: "Incorreto: 'Arimasen' não se aplica a pessoas.", isCorrect: false },
                { text: "はい、ほん が あります。", feedback: "Fora de contexto: Ele perguntou sobre pessoas na casa, não livros!", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "Qual verbo deve ser usado para a existência de um gato ou cachorro?", options: ["います (Imasu)", "あります (Arimasu)", "です (Desu)"], correctIndex: 0 }]
};

const MODULO_A1_30 = {
    id: "a1_mod_30",
    title: "Conectando Ideias Básicas (Soshite, Demo, Mo)",
    section: 6,
    sectionTitle: "Navegação, Existência & Desafio Final",
    level: "A1",
    xpReward: 125,
    stage1_context: {
        audioGuide: "Soshite, demo, watashi mo ikimasu.",
        missionTitle: "Objetivo de Hoje: Articulando Frases Complexas",
        missionDescription: "Deixe de falar em frases picadas! Aprenda os conectivos essenciais 'Soshite' (E/Além disso), 'Demo' (Mas/Porém) e a partícula inclusiva 'Mo' (Também)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "そして", romaji: "Soshite", translation: "E / E também / Além disso", timeContext: "Conectivo para somar ideias positivas ou sequências." },
        { type: "vocab", kanji: "でも", romaji: "Demo", translation: "Mas / Porém / No entanto", timeContext: "Conectivo de oposição para contrastar frases." },
        { type: "vocab", kanji: "～も", romaji: "~mo", translation: "Também / Nem", timeContext: "Partícula que substitui は (wa) ou が (ga) para incluir itens equivalentes." },
        { type: "vocab", kanji: "たのしい (楽しい)", romaji: "Tanoshii", translation: "Divertido / Agradável", timeContext: "Adjetivo de experiência." },
        { type: "grammar_pill", title: "A Partícula Inclusiva 'も' (Mo)", rule: "Substitua as partículas は (wa) ou が (ga) pela partícula も (mo) para dizer 'também'!", formula: "[Nome/Pronome] も [Complemento]", example: "Watashi wa gakusei desu. Kenji-san mo gakusei desu. (Eu sou estudante. O Kenji também é estudante.)" }
    ],
    stage3_practice: [
        {
            question: "1. Como dizer 'Eu também sou brasileiro(a)' em japonês?",
            options: [
                { label: "🇧🇷 わたし も ブラジルじん です (Watashi mo Burajiru-jin desu)", isCorrect: true },
                { label: "🇧🇷 わたし は ブラジルじん です (Watashi wa Burajiru-jin desu)", isCorrect: false },
                { label: "🇧🇷 わたし で ブラジルじん です (Watashi de Burajiru-jin desu)", isCorrect: false }
            ]
        },
        {
            question: "2. Qual conectivo usar para contrastar ideias (ex: 'O Japão é lindo, MAS é distante')?",
            options: [
                { label: "でも (Demo)", isCorrect: true },
                { label: "そして (Soshite)", isCorrect: false },
                { label: "だから (Dakara)", isCorrect: false }
            ]
        },
        {
            question: "3. Qual a função da palavra 'Soshite' no início de uma frase?",
            options: [
                { label: "Conectar e adicionar uma nova informação ('E também...', 'Além disso...')", isCorrect: true },
                { label: "Pedir desculpas por um erro", isCorrect: false },
                { label: "Dizer adeus", isCorrect: false }
            ]
        },
        {
            question: "4. Como transformar 'Watashi wa ikimasu' (Eu vou) em 'Eu também vou'?",
            options: [
                { label: "わたし も いきます (Watashi mo ikimasu)", isCorrect: true },
                { label: "わたし は いきます (Watashi wa ikimasu)", isCorrect: false },
                { label: "わたし で いきます (Watashi de ikimasu)", isCorrect: false }
            ]
        },
        {
            question: "5. Escolha a palavra correta para preencher a lacuna: 'Nihon-go wa tanoshii desu. _____ muzukashii desu.' (O japonês é divertido. _____ é difícil.)",
            options: [
                { label: "でも (Demo - Mas)", isCorrect: true },
                { label: "そして (Soshite - E)", isCorrect: false },
                { label: "はい (Hai - Sim)", isCorrect: false }
            ]
        }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: Você conversa com um colega japonês sobre ramen.",
            npcName: "Colega Hiro",
            npcMessage: "ラーメン は すき です か？ (Você gosta de ramen?)",
            options: [
                { text: "はい！ すき です。 そして、すし も すき です！ (Sim! Gosto. E também gosto de sushi!)", feedback: "Fantástico! Usou 'Soshite' e a partícula 'Mo' (também) com enorme fluência!", isCorrect: true },
                { text: "いいえ、ラーメン です。", feedback: "Confuso e sem conexão.", isCorrect: false },
                { text: "さようなら！", feedback: "Fora de contexto.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Você está avaliando um hotel com um amigo em Tóquio.",
            npcName: "Amigo Kenji",
            npcMessage: "この ホテル は どう ですか？ (O que acha deste hotel?)",
            options: [
                { text: "きれい です。 でも、たかい です。(É bonito. Mas é caro.)", feedback: "Excelente! Usou 'Demo' perfeitamente para ponderar os prós e contras.", isCorrect: true },
                { text: "きれい です。 そして、たかい です。", feedback: "Menos natural para uma oposição de qualidade vs preço.", isCorrect: false },
                { text: "はじめまして！", feedback: "Incorreto no contexto de avaliação.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Na aula de idiomas, o professor pergunta sobre suas conquistas de estudo.",
            npcName: "Sensei Sato",
            npcMessage: "ひらがな が できます か？ (Você sabe Hiragana?)",
            options: [
                { text: "はい！ ひらがな が できます。 そして、カタカナ も できます！", feedback: "Impecável! Demonstrou entusiasmo conectando seus conhecimentos com 'Soshite' e 'Mo'.", isCorrect: true },
                { text: "いいえ、ひらがな も です。", feedback: "Gramaticalmente incompleto.", isCorrect: false },
                { text: "ごめんなさい！", feedback: "Sem motivo para desculpas ao responder ao professor.", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "Qual a função da partícula 'Mo' (も)?", options: ["Substituir 'Wa'/'Ga' para significar 'Também'", "Indicar o meio de transporte", "Perguntar 'Onde'"], correctIndex: 0 }]
};

const MODULO_A1_31 = {
    id: "a1_mod_31",
    title: "Revisão Geral & O Desafio do Aeroporto (Simulação Prática A1)",
    section: 6,
    sectionTitle: "Navegação, Existência & Desafio Final",
    level: "A1",
    xpReward: 150,
    stage1_context: {
        audioGuide: "Omedetou gozaimasu! A1 kanryou!",
        missionTitle: "Desafio Final A1: Sobrevivência Total no Aeroporto de Haneda",
        missionDescription: "Chegou a hora de provar sua fluência A1! Enfrente o grande teste integrando saudações, pronomes, compras, valores, direções e existências na chegada ao Japão."
    },
    stage2_drops: [
        { type: "vocab", kanji: "くうこう (空港)", romaji: "Kuukou", translation: "Aeroporto", timeContext: "Ponto de partida e chegada internacional." },
        { type: "vocab", kanji: "パスポート", romaji: "Pasupooto", translation: "Passaporte", timeContext: "Documento oficial escrito em Katakana." },
        { type: "vocab", kanji: "おめでとうございます", romaji: "Omedetou gozaimasu", translation: "Parabéns! / Felicitacões!", timeContext: "Usado para celebrar grandes conquistas e conclusões." },
        { type: "vocab", kanji: "かんりょう (完了)", romaji: "Kanryou", translation: "Conclusão / Finalizado", timeContext: "Terminar um nível com sucesso." },
        { type: "grammar_pill", title: "O Passaporte da Fluência A1", rule: "Você dominou os 31 Módulos A1! Agora consegue se apresentar, comprar no Konbini, pegar trens, pedir comida e se orientar no Japão.", formula: "[Esforço] + [Prática] = 日本語 A1 Master!", example: "Watashi wa Nihon-go A1 desu! (Eu sou Nível A1 em Japonês!)" }
    ],
    stage3_practice: [
        { question: "1. No desembarque do Aeroporto de Haneda às 15h, como você saúda o oficial da imigração?", options: [{ label: "☀️ こんにちは！ (Konnichiwa!)", isCorrect: true }, { label: "🌅 おはようございます！ (Ohayou gozaimasu!)", isCorrect: false }, { label: "🌙 こんばんは！ (Konbanwa!)", isCorrect: false }] },
        { question: "2. Como pedir educadamente uma garrafa de água na loja de conveniência do aeroporto?", options: [{ label: "🥤 みず を ください (Mizu o kudasai)", isCorrect: true }, { label: "🥤 みず は どこ ですか (Mizu wa doko desu ka)", isCorrect: false }, { label: "🥤 みず ですか (Mizu desu ka)", isCorrect: false }] },
        { question: "3. Como perguntar onde fica a estação de trem dentro do aeroporto?", options: [{ label: "🚆 えき は どこ ですか？ (Eki wa doko desu ka?)", isCorrect: true }, { label: "🚆 えき が あります (Eki ga arimasu)", isCorrect: false }, { label: "🚆 えき で いきます (Eki de ikimasu)", isCorrect: false }] },
        { question: "4. Ao pagar uma passagem de 500 Ienes no caixa, qual a forma correta de perguntar o valor?", options: [{ label: "💴 いくら ですか？ (Ikura desu ka?)", isCorrect: true }, { label: "💴 なん ですか？ (Nan desu ka?)", isCorrect: false }, { label: "💴 だれ ですか？ (Dare desu ka?)", isCorrect: false }] },
        { question: "5. Qual frase encerra sua jornada com chave de ouro agradecendo ao seu instrutor?", options: [{ label: "🏆 せんせい、ほんとうに ありがとうございました！ (Sensei, hontou ni arigatou gozaimasu!)", isCorrect: true }, { label: "😭 さようなら (Sayounara)", isCorrect: false }, { label: "❓ なに ですか？ (Nani desu ka?)", isCorrect: false }] },
        { question: "6. Como se apresentar formalmente dizendo 'Prazer em conhecê-lo'?", options: [{ label: "Hajimemashite", isCorrect: true }, { label: "Arigatou gozaimasu", isCorrect: false }, { label: "Gomen nasai", isCorrect: false }] },
        { question: "7. Como dizer a frase negativa 'Eu não sou estudante'?", options: [{ label: "Gakusei ja arimasen", isCorrect: true }, { label: "Gakusei desu", isCorrect: false }, { label: "Gakusei desu ka", isCorrect: false }] },
        { question: "8. Qual palavra usar ao esbarrar acidentalmente em alguém na rua?", options: [{ label: "Sumimasen", isCorrect: true }, { label: "Konnichiwa", isCorrect: false }, { label: "Itadakimasu", isCorrect: false }] },
        { question: "9. Como se despedir informalmente de um amigo que você verá amanhã?", options: [{ label: "Mata ashita!", isCorrect: true }, { label: "Sayounara", isCorrect: false }, { label: "Hajimemashite", isCorrect: false }] },
        { question: "10. Como perguntar o nome de alguém de forma polida?", options: [{ label: "O-namae wa nan desu ka?", isCorrect: true }, { label: "Kore wa nan desu ka?", isCorrect: false }, { label: "Doko desu ka?", isCorrect: false }] },
        { question: "11. Como dizer 'Sou brasileiro(a)'?", options: [{ label: "Burajiru-jin desu", isCorrect: true }, { label: "Burajiru-go desu", isCorrect: false }, { label: "Burajiru ni ikimasu", isCorrect: false }] },
        { question: "12. Qual sufixo de respeito deve ser adicionado ao nome dos amigos/conhecidos?", options: [{ label: "-san", isCorrect: true }, { label: "-go", isCorrect: false }, { label: "-jin", isCorrect: false }] },
        { question: "13. O que a partícula 'Ka' no final da frase indica?", options: [{ label: "Uma pergunta / ponto de interrogação", isCorrect: true }, { label: "Uma negação", isCorrect: false }, { label: "Um comando de ordem", isCorrect: false }] },
        { question: "14. Como dizer 'Tenho 20 anos'?", options: [{ label: "Ni-juu sai desu", isCorrect: true }, { label: "Ni-juu jin desu", isCorrect: false }, { label: "Ni-juu en desu", isCorrect: false }] },
        { question: "15. Traduza: 'Watashi no baggu'", options: [{ label: "Minha bolsa", isCorrect: true }, { label: "Bolsa de alguém", isCorrect: false }, { label: "Comprei uma bolsa", isCorrect: false }] },
        { question: "16. Qual palavra demonstrativa usar para um objeto que está na SUA própria mão?", options: [{ label: "Kore (これ)", isCorrect: true }, { label: "Sore (それ)", isCorrect: false }, { label: "Are (あれ)", isCorrect: false }] },
        { question: "17. Qual palavra usar para indicar um prédio distante de ambos os falantes?", options: [{ label: "Are (あれ) / Asoko (あそこ)", isCorrect: true }, { label: "Kore (これ) / Koko (ここ)", isCorrect: false }, { label: "Sore (それ) / Soko (そこ)", isCorrect: false }] },
        { question: "18. Qual verbo expressa a existência de coisas inanimadas (livros, chaves, mesas)?", options: [{ label: "Arimasu (あります)", isCorrect: true }, { label: "Imasu (います)", isCorrect: false }, { label: "Tabemasu (たべます)", isCorrect: false }] },
        { question: "19. Qual verbo expressa a existência de seres vivos (pessoas, cachorros, gatos)?", options: [{ label: "Imasu (います)", isCorrect: true }, { label: "Arimasu (あります)", isCorrect: false }, { label: "Nomimasu (のみます)", isCorrect: false }] },
        { question: "20. Como dizer 'Vou para a escola'?", options: [{ label: "Gakkou ni ikimasu", isCorrect: true }, { label: "Gakkou de ikimasu", isCorrect: false }, { label: "Gakkou o ikimasu", isCorrect: false }] },
        { question: "21. Qual partícula indica o meio de transporte ('ir de trem')?", options: [{ label: "で (de)", isCorrect: true }, { label: "に (ni)", isCorrect: false }, { label: "を (o)", isCorrect: false }] },
        { question: "22. Quanto é 'San-juu' (30) em ienes?", options: [{ label: "30 Ienes", isCorrect: true }, { label: "3 Ienes", isCorrect: false }, { label: "300 Ienes", isCorrect: false }] },
        { question: "23. Traduza: 'Ocha o nomimasu'", options: [{ label: "Bebo chá", isCorrect: true }, { label: "Como chá", isCorrect: false }, { label: "Compro chá", isCorrect: false }] },
        { question: "24. Como elogiar uma refeição durante o almoço dizendo 'É delicioso'?", options: [{ label: "Oishii desu!", isCorrect: true }, { label: "Takai desu!", isCorrect: false }, { label: "Furui desu!", isCorrect: false }] },
        { question: "25. Como perguntar 'Que horas são agora?'", options: [{ label: "Ima nan-ji desu ka?", isCorrect: true }, { label: "Ima nan-nichi desu ka?", isCorrect: false }, { label: "Ima ikura desu ka?", isCorrect: false }] },
        { question: "26. Qual é o dia da semana 'Getsuyoubi'?", options: [{ label: "Segunda-feira", isCorrect: true }, { label: "Domingo", isCorrect: false }, { label: "Sexta-feira", isCorrect: false }] },
        { question: "27. Como se diz 'Manhã' em japonês?", options: [{ label: "Asa (朝)", isCorrect: true }, { label: "Hiru (昼)", isCorrect: false }, { label: "Yoru (夜)", isCorrect: false }] },
        { question: "28. Como dizer 'Compro no Konbini'?", options: [{ label: "Konbini de kaimasu", isCorrect: true }, { label: "Konbini ni kaimasu", isCorrect: false }, { label: "Konbini o kaimasu", isCorrect: false }] },
        { question: "29. Traduza: 'Watashi mo gakusei desu'", options: [{ label: "Eu também sou estudante", isCorrect: true }, { label: "Eu não sou estudante", isCorrect: false }, { label: "Aquele é o estudante", isCorrect: false }] },
        { question: "30. Qual palavra conectiva significa 'E / Além disso' entre frases?", options: [{ label: "Soshite (そして)", isCorrect: true }, { label: "Demo (でも)", isCorrect: false }, { label: "Karasu (から)", isCorrect: false }] }
    ],
    stage4_dialog: [
        {
            scenario: "Situação 1: No guichê de imigração do Aeroporto de Haneda, o oficial checa seus documentos.",
            npcName: "Oficial de Imigração",
            npcMessage: "パスポート を おねがいします。 おくに は どちら ですか？",
            options: [
                { text: "はい！ パスポート です。 ブラジルじん です。 よろしくおねがいします！", feedback: "Impecável! Entrega do passaporte, indicação da nacionalidade e polidez total!", isCorrect: true },
                { text: "ブラジルご です！", feedback: "Incorreto: 'Burajiru-go' é o idioma, não a nacionalidade!", isCorrect: false },
                { text: "さようなら！", feedback: "Não se despeça antes de receber o visto de entrada!", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Na casa de câmbio do aeroporto, você quer trocar dinheiro.",
            npcName: "Atendente do Câmbio",
            npcMessage: "いらっしゃいませ！ 両替(りょうがえ) ですか？ (Deseja trocar moedas?)",
            options: [
                { text: "はい！ これ を えん に おねがいします。 (Sim! Este [dinheiro] em ienes, por favor.)", feedback: "Mandou muito bem! Expressão perfeita para operações bancárias básicas.", isCorrect: true },
                { text: "いいえ、トイレ は どこ ですか？", feedback: "Fora de contexto para o balcão de câmbio.", isCorrect: false },
                { text: "はじめまして！", feedback: "Inadequado para iniciar o atendimento no banco.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Você chega à plataforma do trem-bala e o condutor confirma sua jornada de sucesso no Nível A1!",
            npcName: "Condutor do Trem A1",
            npcMessage: "おめでとうございます！ [Seu Nome]・さん！ A1 コース 完了 です！ (Parabéns, [Seu Nome]-san! Curso A1 concluído!)",
            options: [
                { text: "ありがとうございます！ にほんご が たのしい です！ (Muito obrigado! Japonês é divertido!)", feedback: "Sensacional! 🎉 VOCÊ ZEROU O NÍVEL A1 DO JAPÃO ACADEMY COM LOUVOR!", isCorrect: true },
                { text: "いいえ、ごめんなさい！", feedback: "Não peça desculpas no momento da sua vitória!", isCorrect: false },
                { text: "なに ですか？", feedback: "Incorreto: Celebre seu troféu com orgulho!", isCorrect: false }
            ]
        }
    ],
    stage5_quiz: [{ question: "Parabéns! O que significa 'A1 Kanryou'?", options: ["Conclusão com sucesso do Nível A1!", "Erro no sistema", "Estação fechada"], correctIndex: 0 }]
};

// ==========================================
// VETOR CENTRAL QUE CONECTA OS 31 MÓDULOS AO MOTOR APP.JS
// ==========================================
const CURSO_A1_DADOS = [
    MODULO_A1_01,
    MODULO_A1_02,
    MODULO_A1_03,
    MODULO_A1_04,
    MODULO_A1_05,
    MODULO_A1_06,
    MODULO_A1_07,
    MODULO_A1_08,
    MODULO_A1_09,
    MODULO_A1_10,
    MODULO_A1_11,
    MODULO_A1_12,
    MODULO_A1_13,
    MODULO_A1_14,
    MODULO_A1_15,
    MODULO_A1_16,
    MODULO_A1_17,
    MODULO_A1_18,
    MODULO_A1_19,
    MODULO_A1_20,
    MODULO_A1_21,
    MODULO_A1_22,
    MODULO_A1_23,
    MODULO_A1_24,
    MODULO_A1_25,
    MODULO_A1_26,
    MODULO_A1_27,
    MODULO_A1_28,
    MODULO_A1_29,
    MODULO_A1_30,
    MODULO_A1_31
];