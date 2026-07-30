// ==========================================
// BANCO DE DADOS DO CURSO DE INGLÊS - NÍVEL B2 (UPPER-INTERMEDIATE)
// 20 MÓDULOS COMPLETOS DIVIDIDOS EM 5 SEÇÕES PEDAGÓGICAS
// Baseado no english_context.md
// ==========================================

// ------------------------------------------
// SEÇÃO 1: ADVANCED NUANCES & EMOTION EXPRESSION (MÓDULOS 1 A 4)
// ------------------------------------------

const MODULO_EN_B2_01 = {
    id: "en_b2_mod_01",
    title: "Expectations & Disappointments",
    section: 1,
    sectionTitle: "Advanced Nuances & Emotion Expression",
    level: "B2",
    xpReward: 160,
    stage1_context: {
        audioGuide: "The event was supposed to be a success, but it turned out to be a disappointment that fell short of expectations.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar expectativas não atendidas, reviravoltas e decepções sutis usando 'be supposed to', 'turn out that' e 'fall short of'."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Supposed to be / Turn out", romaji: "/səˈpoʊzd tuː biː/", translation: "Deveria ser (expectativa) / Acontecer que, resultar em", timeContext: "Expressões para comparar planos com a realidade." },
        { type: "vocab", kanji: "Fall short of expectations / Leave much to be desired", romaji: "/fɔːl ʃɔːrt əv/", translation: "Ficar aquém das expectativas / Deixar a desejar", timeContext: "Crítica sutil em nível avançado." },
        { type: "grammar_pill", title: "Expectativas com 'Be supposed to'", rule: "Usa-se 'was/were supposed to' para indicar algo que estava planejado ou era esperado no passado, mas que NÃO aconteceu como previsto.", formula: "Subject + was/were + supposed to + Verb base", example: "The concert WAS SUPPOSED TO START at 8 PM, but it was delayed." },
        { type: "grammar_pill", title: "Reviravoltas com 'It turned out (that)'", rule: "'Turn out' indica o resultado final ou uma surpresa descoberta no desfecho de uma situação.", formula: "It turned out that + Clause | Subject + turned out to be + Noun/Adj", example: "It turned out that the rumor was true. | He turned out to be a great manager." }
    ],
    stage3_practice: [
        { question: "1. Qual frase expressa corretamente uma expectativa passada que falhou?", options: [{ label: "The movie was supposed to be good, but it was boring.", isCorrect: true }, { label: "The movie was suppose to be good, but it was boring.", isCorrect: false }, { label: "The movie supposed to be good.", isCorrect: false }] },
        { question: "2. Como se traduz 'O resultado ficou aquém das nossas expectativas'?", options: [{ label: "The result fell short of our expectations.", isCorrect: true }, { label: "The result fell down our expectations.", isCorrect: false }, { label: "The result dropped short to expectations.", isCorrect: false }] },
        { question: "3. Complete a frase: 'Although we were worried, the presentation ___ to be a huge success.'", options: [{ label: "turned out", isCorrect: true }, { label: "was supposed", isCorrect: false }, { label: "fell short", isCorrect: false }] },
        { question: "4. O que significa a expressão 'leaves much to be desired'?", options: [{ label: "Deixa muito a desejar / Qualidade insatisfatória", isCorrect: true }, { label: "É altamente desejável por todos", isCorrect: false }, { label: "Ultrapassou todas as metas", isCorrect: false }] },
        { question: "5. Após 'was supposed to', o verbo seguinte deve estar na:", options: [{ label: "Forma base sem to", isCorrect: true }, { label: "Forma de gerúndio (-ing)", isCorrect: false }, { label: "Terceira coluna (particípio)", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "The project was supposed to be finished yesterday, but it fell short of expectations.", translation: "O projeto deveria ter sido terminado ontem, mas ficou aquém das expectativas.", chunks: ["The", "project", "was", "supposed", "to", "be", "finished", "yesterday", ",", "but", "it", "fell", "short", "of", "expectations", "."] },
        { sentenceEn: "It turned out that the rumor was completely unfounded.", translation: "Acontece que o boato era completamente infundado.", chunks: ["It", "turned", "out", "that", "the", "rumor", "was", "completely", "unfounded", "."] }
    ],
    stage4_dialog: [
        { npcName: "Director", npcMessage: "How did the product launch in London go yesterday?", options: [{ text: "To be frank, attendance fell short of expectations due to the train strike.", isCorrect: true, feedback: "Excelente análise crítica e madura de resultados!" }, { text: "It was suppose to be nice.", isCorrect: false, feedback: "A forma correta é 'was SUPPOSED to'." }, { text: "It turned out to fell short.", isCorrect: false, feedback: "Mistura incorreta de estruturas." }] },
        { npcName: "Investor", npcMessage: "I thought the startup was going bankrupt?", options: [{ text: "Surprisingly, it turned out to be their most profitable quarter yet.", isCorrect: true, feedback: "Uso impecável de 'turned out to be'!" }, { text: "It turned out that profitable.", isCorrect: false, feedback: "Diga 'turned out to be profitable'." }, { text: "It was supposed profitable.", isCorrect: false, feedback: "Falta o verbo 'to be'." }] },
        { npcName: "Client", npcMessage: "What is your honest opinion on the new service package?", options: [{ text: "Unfortunately, the customer support still leaves much to be desired.", isCorrect: true, feedback: "Feedback sutil e de altíssimo nível B2!" }, { text: "It is falling short of desire.", isCorrect: false, feedback: "Expressão incorreta." }, { text: "It supposed to be good.", isCorrect: false, feedback: "Falta o verbo auxiliar 'was'." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Was supposed to' transmite a ideia de:", options: [{ label: "Algo que era esperado/planejado mas pode não ter ocorrido", isCorrect: true }, { label: "Uma obrigação futura irreversível", isCorrect: false }, { label: "Uma certeza absoluta de passado", isCorrect: false }] },
        { question: "2. 'It turned out that...' é usado para:", options: [{ label: "Revelar a conclusão surpreendente ou inesperada de um fato", isCorrect: true }, { label: "Fazer uma promessa solene", isCorrect: false }, { label: "Dar ordens em um restaurante", isCorrect: false }] },
        { question: "3. Qual frase indica que um serviço foi decepcionante?", options: [{ label: "The service left much to be desired.", isCorrect: true }, { label: "The service exceeded our expectations.", isCorrect: false }, { label: "The service was supposed to be bad.", isCorrect: false }] },
        { question: "4. Qual a preposição correta na expressão 'fell short ___ expectations'?", options: [{ label: "of", isCorrect: true }, { label: "to", isCorrect: false }, { label: "with", isCorrect: false }] },
        { question: "5. Complete: 'He was supposed ___ us at 9 AM.'", options: [{ label: "to meet", isCorrect: true }, { label: "meeting", isCorrect: false }, { label: "met", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_02 = {
    id: "en_b2_mod_02",
    title: "Advanced Nuances of 'Only' & 'Barely'",
    section: 1,
    sectionTitle: "Advanced Nuances & Emotion Expression",
    level: "B2",
    xpReward: 170,
    stage1_context: {
        audioGuide: "Not only did he pass the exam, but he also achieved the highest score. She had barely arrived when the storm broke out.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Dominar estruturas de inversão sintática com advérbios negativos (Not only, Hardly, Barely, No sooner) para enfatizar eventos na fala e escrita culta."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Not only... but also / Barely", romaji: "/nɑːt ˈoʊnli / ˈberli/", translation: "Não apenas... como também / Mal, quase não", timeContext: "Estruturas de ênfase e escassez temporal." },
        { type: "vocab", kanji: "Hardly / Merely / No sooner... than", romaji: "/ˈhɑːrdli / ˈmɪrli/", translation: "Quase não / Mero, apenas / Mal tinha... quando", timeContext: "Advérbios restritivos e de sucessão imediata." },
        { type: "grammar_pill", title: "Inversão Sintática com 'Not only'", rule: "Quando iniciamos uma oração com 'Not only' para dar ênfase formal, o verbo auxiliar deve vir ANTES do sujeito (ordem interrogativa na frase afirmativa!).", formula: "Not only + [Auxiliar (did/had/does)] + Subject + Verb...", example: "NOT ONLY DID HE PASS the test, BUT HE ALSO got an A." },
        { type: "grammar_pill", title: "Sucessão Imediata: 'No sooner... than' & 'Hardly... when'", rule: "'No sooner had + Subject + Past Participle... THAN' indica que um fato aconteceu imediatamente após outro.", formula: "No sooner had + Subject + Participle + THAN + Clause", example: "NO SOONER HAD I LEFT the house THAN it started to rain." }
    ],
    stage3_practice: [
        { question: "1. Qual frase apresenta a inversão gramatical CORRETA com 'Not only'?", options: [{ label: "Not only did she complete the report, but she also presented it.", isCorrect: true }, { label: "Not only she completed the report, but also presented it.", isCorrect: false }, { label: "Not only did complete she the report, but also presented.", isCorrect: false }] },
        { question: "2. Como combinar 'Hardly had I opened the door' de forma correta?", options: [{ label: "Hardly had I opened the door WHEN the phone rang.", isCorrect: true }, { label: "Hardly had I opened the door THAN the phone rang.", isCorrect: false }, { label: "Hardly I opened the door when the phone rang.", isCorrect: false }] },
        { question: "3. Qual conector acompanha a estrutura 'No sooner had he arrived...'?", options: [{ label: "than", isCorrect: true }, { label: "when", isCorrect: false }, { label: "then", isCorrect: false }] },
        { question: "4. O advérbio 'merely' transmite a ideia de:", options: [{ label: "Apenas / Meramente / Nada além de", isCorrect: true }, { label: "Com certeza absoluta", isCorrect: false }, { label: "No futuro próximo", isCorrect: false }] },
        { question: "5. Complete a frase: 'Barely ___ the news when everyone started celebrating.'", options: [{ label: "had they heard", isCorrect: true }, { label: "they had heard", isCorrect: false }, { label: "did they heard", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Not only did he solve the problem, but he also saved the company money.", translation: "Não apenas ele resolveu o problema, como também economizou dinheiro para a empresa.", chunks: ["Not", "only", "did", "he", "solve", "the", "problem", ",", "but", "he", "also", "saved", "the", "company", "money", "."] },
        { sentenceEn: "No sooner had we stepped outside than it began to pour.", translation: "Mal tínhamos dado um passo para fora quando começou a chover a cântaros.", chunks: ["No", "sooner", "had", "we", "stepped", "outside", "than", "it", "began", "to", "pour", "."] }
    ],
    stage4_dialog: [
        { npcName: "CEO", npcMessage: "What were the results of the new marketing strategy?", options: [{ text: "Not only did it double our web traffic, but it also increased sales by 30%.", isCorrect: true, feedback: "Inversão sintática B2 perfeita para relatórios executivos!" }, { text: "Not only it doubled traffic, but also sales.", isCorrect: false, feedback: "Falta a inversão do verbo auxiliares 'did it double'." }, { text: "No sooner it doubled traffic than sales.", isCorrect: false, feedback: "Uso incorreto." }] },
        { npcName: "Journalist", npcMessage: "Did the suspect confess immediately?", options: [{ text: "No sooner had the detective asked the question than the suspect confessed.", isCorrect: true, feedback: "Excelente uso de 'No sooner had... than'!" }, { text: "No sooner had he asked when he confessed.", isCorrect: false, feedback: "'No sooner' exige a partícula 'than' (não 'when')." }, { text: "Hardly did he asked than he confessed.", isCorrect: false, feedback: "Mistura de regras." }] },
        { npcName: "Manager", npcMessage: "Is John experienced enough for this position?", options: [{ text: "He is merely a beginner, so he will need proper guidance.", isCorrect: true, feedback: "Uso impecável de 'merely'!" }, { text: "He is barely to beginner.", isCorrect: false, feedback: "Incorreto." }, { text: "Not only he is beginner.", isCorrect: false, feedback: "Falta estrutura." }] }
    ],
    stage5_quiz: [
        { question: "1. Ao iniciar uma frase com 'Not only', a estrutura do sujeito e verbo fica:", options: [{ label: "Invertida (Verbo auxiliar + Sujeito + Verbo principal)", isCorrect: true }, { label: "Na ordem normal afirmativa (Sujeito + Verbo)", isCorrect: false }, { label: "No gerúndio", isCorrect: false }] },
        { question: "2. A estrutura 'No sooner had...' deve ser correlacionada com:", options: [{ label: "than", isCorrect: true }, { label: "when", isCorrect: false }, { label: "where", isCorrect: false }] },
        { question: "3. 'Hardly had she entered the room when...' indica que:", options: [{ label: "Um evento ocorreu imediatamente após a sua entrada", isCorrect: true }, { label: "Ela demorou horas para entrar na sala", isCorrect: false }, { label: "Ela nunca entrou na sala", isCorrect: false }] },
        { question: "4. O advérbio 'barely' significa:", options: [{ label: "Mal / Por muito pouco / Quase não", isCorrect: true }, { label: "Totalmente / Completamente", isCorrect: false }, { label: "Frequentemente", isCorrect: false }] },
        { question: "5. Escolha a frase com a gramática culta e elegante correta:", options: [{ label: "Not only was the food delicious, but the service was also superb.", isCorrect: true }, { label: "Not only the food was delicious, but also service.", isCorrect: false }, { label: "Not only was delicious food, but service also.", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_03 = {
    id: "en_b2_mod_03",
    title: "Subtle Criticism & Contradictions",
    section: 1,
    sectionTitle: "Advanced Nuances & Emotion Expression",
    level: "B2",
    xpReward: 175,
    stage1_context: {
        audioGuide: "Despite his extensive experience, he made a basic mistake. Whereas option A is cheap, option B offers higher quality.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar oposições refinadas, nuances de contraste e críticas diplomáticas usando 'despite', 'in spite of', 'whereas' e 'even though'."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Despite / In spite of", romaji: "/dɪˈspaɪt / ɪn spaɪt əv/", translation: "Apesar de / A despeito de", timeContext: "Conectores de concessão seguidos de substantivo ou gerúndio." },
        { type: "vocab", kanji: "Whereas / On the other hand", romaji: "/ˌwerˈæz/", translation: "Enquanto que / Por outro lado", timeContext: "Conectores de contraste direto entre duas ideias." },
        { type: "grammar_pill", title: "Despite / In Spite of + Noun / V(-ing)", rule: "'Despite' e 'In spite of' são preposições. NUNCA coloque oração completa (sujeito+verbo) logo após eles, a menos que use a expressão 'the fact that'.", formula: "Despite + Noun / V(-ing) | Despite + the fact that + Clause", example: "DESPITE THE RAIN, we went out. (NÃO: Despite it was raining)." },
        { type: "grammar_pill", title: "Contraste com 'Whereas' & 'Even though'", rule: "'Even though' e 'Whereas' são conjunções subordinativas e DEVEM ser seguidos por oração completa (sujeito + verbo).", formula: "Even though / Whereas + Subject + Verb", example: "EVEN THOUGH HE WAS TIRED, he kept working. | John is quiet, WHEREAS HIS BROTHER IS LOUD." }
    ],
    stage3_practice: [
        { question: "1. Qual frase usa 'despite' de forma gramaticalmente CORRETA?", options: [{ label: "Despite being tired, she finished the report.", isCorrect: true }, { label: "Despite she was tired, she finished the report.", isCorrect: false }, { label: "Despite of being tired, she finished the report.", isCorrect: false }] },
        { question: "2. Nota de atenção: A expressão 'in spite' exige obrigatoriamente a preposição:", options: [{ label: "of (in spite of)", isCorrect: true }, { label: "to (in spite to)", isCorrect: false }, { label: "for (in spite for)", isCorrect: false }] },
        { question: "3. Complete a frase de contraste: 'Sales increased in North America, ___ they dropped in Europe.'", options: [{ label: "whereas", isCorrect: true }, { label: "despite", isCorrect: false }, { label: "in spite of", isCorrect: false }] },
        { question: "4. Como usar 'despite' com uma oração completa (com sujeito e verbo)?", options: [{ label: "Despite the fact that he was young, he led the team.", isCorrect: true }, { label: "Despite he was young, he led the team.", isCorrect: false }, { label: "Despite that he was young, he led the team.", isCorrect: false }] },
        { question: "5. 'Even though' é uma forma mais enfática de:", options: [{ label: "Although / Embora", isCorrect: true }, { label: "Because / Porque", isCorrect: false }, { label: "Therefore / Portanto", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "In spite of the heavy traffic, we arrived on time for the conference.", translation: "Apesar do trânsito pesado, nós chegamos a tempo para a conferência.", chunks: ["In", "spite", "of", "the", "heavy", "traffic", ",", "we", "arrived", "on", "time", "for", "the", "conference", "."] },
        { sentenceEn: "Option A is fast, whereas Option B is more cost-effective.", translation: "A Opção A é rápida, enquanto que a Opção B é mais rentável.", chunks: ["Option", "A", "is", "fast", ",", "whereas", "Option", "B", "is", "more", "cost-effective", "."] }
    ],
    stage4_dialog: [
        { npcName: "Consultant", npcMessage: "Why did the board reject the investment proposal?", options: [{ text: "Despite its potential profitability, the initial risk was deemed too high.", isCorrect: true, feedback: "Excelente articulação de contraste com 'Despite' + substantivo!" }, { text: "Despite it was profitable, they rejected.", isCorrect: false, feedback: "Não use oração completa logo após 'despite'." }, { text: "In spite it was good, they rejected.", isCorrect: false, feedback: "Falta 'of' e a estrutura nominal." }] },
        { npcName: "Manager", npcMessage: "How do the two candidate profiles compare?", options: [{ text: "Candidate X has great technical skills, whereas Candidate Y excels at leadership.", isCorrect: true, feedback: "Uso impecável de 'whereas' para contrastar qualidades!" }, { text: "Candidate X is technical, despite Candidate Y is leader.", isCorrect: false, feedback: "'Despite' não aceita oração direta." }, { text: "In spite of Candidate X is good.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Auditor", npcMessage: "Did the branch meet its financial targets?", options: [{ text: "They made a small profit, even though market conditions were unfavorable.", isCorrect: true, feedback: "Ótima aplicação de 'even though' + oração!" }, { text: "They made profit, in spite of conditions were bad.", isCorrect: false, feedback: "Diga 'in spite of bad conditions'." }, { text: "Whereas conditions were bad, they won.", isCorrect: false, feedback: "Contexto inadequado." }] }
    ],
    stage5_quiz: [
        { question: "1. Qual a diferença gramatical entre 'despite' e 'even though'?", options: [{ label: "'Despite' é seguido de substantivo/gerúndio; 'even though' exige oração (sujeito + verbo)", isCorrect: true }, { label: "'Despite' é para o futuro e 'even though' para o passado", isCorrect: false }, { label: "Não há diferença gramatical", isCorrect: false }] },
        { question: "2. A expressão 'despite of' está:", options: [{ label: "INCORRETA ('despite' não leva 'of'; 'in spite' leva 'of')", isCorrect: true }, { label: "Correta em 100% dos casos", isCorrect: false }, { label: "Usada apenas no inglês britânico", isCorrect: false }] },
        { question: "3. 'Whereas' é usado para:", options: [{ label: "Contrastar dois fatos diretamente (Enquanto que)", isCorrect: true }, { label: "Explicar uma causa (Porque)", isCorrect: false }, { label: "Concluir um pensamento (Portanto)", isCorrect: false }] },
        { question: "4. Para usar 'in spite of' com sujeito e verbo, adiciona-se:", options: [{ label: "the fact that", isCorrect: true }, { label: "the cause of", isCorrect: false }, { label: "the reason why", isCorrect: false }] },
        { question: "5. Escolha a frase gramaticalmente impecável:", options: [{ label: "In spite of working long hours, he didn't feel exhausted.", isCorrect: true }, { label: "Despite of working long hours, he didn't feel exhausted.", isCorrect: false }, { label: "In spite working long hours, he didn't feel exhausted.", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_04 = {
    id: "en_b2_mod_04",
    title: "Figurative Language & Idioms",
    section: 1,
    sectionTitle: "Advanced Nuances & Emotion Expression",
    level: "B2",
    xpReward: 180,
    stage1_context: {
        audioGuide: "Before starting the negotiation, he told a joke to break the ice. We need to bite the bullet and make the tough decision.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Utilizar metáforas avançadas e expressões idiomáticas de nível B2 em contextos sociais e profissionais (break the ice, bite the bullet, burn the midnight oil)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Break the ice / Bite the bullet", romaji: "/breɪk ðə aɪs/", translation: "Quebrar o gelo / Encarar uma situação difícil com coragem", timeContext: "Metáforas de negociação e tomada de decisão." },
        { type: "vocab", kanji: "Burn the midnight oil / Touch base", romaji: "/bɜːrn ðə ˈmɪdnaɪt ɔɪl/", translation: "Trabalhar até de madrugada / Fazer um contato rápido", timeContext: "Idiomas e gírias corporativas sofisticadas." },
        { type: "grammar_pill", title: "Metáforas Corporativas (Corporate Metaphors)", rule: "No nível B2, o uso de idiomas metáforicos demonstra alta fluência. No entanto, é essencial usá-los no tempo verbal correto como qualquer outro verbo.", formula: "Subject + Verb (conjugated idiom) + Object", example: "We BIT THE BULLET (passado de bite) and accepted the terms." },
        { type: "grammar_pill", title: "'Touch base with' + Person", rule: "'Touch base' significa entrar em contato rápido para atualização de informações. Deve ser seguido pela preposição 'with'.", formula: "Touch base with + Person", example: "Let's TOUCH BASE WITH the legal team tomorrow." }
    ],
    stage3_practice: [
        { question: "1. O que significa a expressão 'bite the bullet'?", options: [{ label: "Encarar uma situação inevitável e difícil com coragem", isCorrect: true }, { label: "Morder algo por engano", isCorrect: false }, { label: "Desistir de um projeto no meio", isCorrect: false }] },
        { question: "2. Como se diz 'Trabalhar até tarde da noite/madrugada' em inglês?", options: [{ label: "Burn the midnight oil", isCorrect: true }, { label: "Burn the night candle", isCorrect: false }, { label: "Make the dark work", isCorrect: false }] },
        { question: "3. 'Let's touch base next week' significa que nós vamos:", options: [{ label: "Fazer um contato rápido para nos atualizar sobre o projeto", isCorrect: true }, { label: "Jogar beisebol juntos", isCorrect: false }, { label: "Cancelar todos os compromissos", isCorrect: false }] },
        { question: "4. Qual a intenção de usar uma piada para 'break the ice'?", options: [{ label: "Aliviar a tensão inicial e deixar o ambiente amigável", isCorrect: true }, { label: "Esfriar a temperatura da sala", isCorrect: false }, { label: "Ofender os convidados", isCorrect: false }] },
        { question: "5. Qual o passado simples do idioma 'bite the bullet'?", options: [{ label: "bit the bullet", isCorrect: true }, { label: "bited the bullet", isCorrect: false }, { label: "bitten the bullet", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "We had to burn the midnight oil to finish the proposal before the deadline.", translation: "Nós tivemos que trabalhar até de madrugada para terminar a proposta antes do prazo.", chunks: ["We", "had", "to", "burn", "the", "midnight", "oil", "to", "finish", "the", "proposal", "before", "the", "deadline", "."] },
        { sentenceEn: "I will touch base with you after the meeting with the client.", translation: "Eu farei um contato rápido com você após a reunião com o cliente.", chunks: ["I", "will", "touch", "base", "with", "you", "after", "the", "meeting", "with", "the", "client", "."] }
    ],
    stage4_dialog: [
        { npcName: "Colleague", npcMessage: "The budget cuts are severe, but we have to accept them.", options: [{ text: "You're right. We just have to bite the bullet and adjust our plans.", isCorrect: true, feedback: "Uso perfeito da metáfora 'bite the bullet'!" }, { text: "We have to burn the midnight oil and bite bullet.", isCorrect: false, feedback: "Falta o artigo 'the bullet'." }, { text: "Let's break the ice on budget.", isCorrect: false, feedback: "Fora de sentido." }] },
        { npcName: "Project Manager", npcMessage: "We only have 24 hours to complete this client report!", options: [{ text: "Looks like we'll be burning the midnight oil tonight.", isCorrect: true, feedback: "Aplicação idiomática impecável para jornadas noturnas de trabalho!" }, { text: "We will touch base midnight oil.", isCorrect: false, feedback: "Mistura de expressões." }, { text: "We break ice tonight.", isCorrect: false, feedback: "Inadequado." }] },
        { npcName: "Partner", npcMessage: "I need an update on the contract negotiations.", options: [{ text: "I'll touch base with the legal team and let you know by 4 PM.", isCorrect: true, feedback: "Comunicação corporativa extremamente fluida!" }, { text: "I will touch base to legal team.", isCorrect: false, feedback: "A preposição correta é 'with'." }, { text: "I bite bullet with legal team.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Touch base with someone' é uma metáfora corporativa para:", options: [{ label: "Entrar em contato rápido para alinhamento", isCorrect: true }, { label: "Construir a base de um prédio", isCorrect: false }, { label: "Demitir um funcionário", isCorrect: false }] },
        { question: "2. 'Burn the midnight oil' vem da época em que as pessoas usavam:", options: [{ label: "Lâmpadas de óleo para trabalhar até de madrugada", isCorrect: true }, { label: "Óleo de motor para cozinhar", isCorrect: false }, { label: "Velas de cera em navios", isCorrect: false }] },
        { question: "3. 'Break the ice' serve para:", options: [{ label: "Quebrar o gelo / Iniciar conversa em clima descontraído", isCorrect: true }, { label: "Comprar bebidas geladas", isCorrect: false }, { label: "Provocar uma discussão acalorada", isCorrect: false }] },
        { question: "4. Qual idioma significa 'Assumir a responsabilidade e tomar uma decisão difícil'?", options: [{ label: "Bite the bullet", isCorrect: true }, { label: "Break the ice", isCorrect: false }, { label: "Touch base", isCorrect: false }] },
        { question: "5. 'The tip of the iceberg' significa que um problema é:", options: [{ label: "Apenas uma pequena parte visível de algo muito maior", isCorrect: true }, { label: "Totalmente irrelevante", isCorrect: false }, { label: "Muito fácil de resolver", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 2: EXECUTIVE BUSINESS & CORPORATE ETIQUETTE (MÓDULOS 5 A 8)
// ------------------------------------------

const MODULO_EN_B2_05 = {
    id: "en_b2_mod_05",
    title: "Advanced Executive English & Leadership",
    section: 2,
    sectionTitle: "Executive Business & Corporate Etiquette",
    level: "B2",
    xpReward: 185,
    stage1_context: {
        audioGuide: "It appears that we might need to adjust our timeline. I tend to think that a strategic pivot is necessary.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Aplicar linguagem executiva diplomática e a técnica de 'hedging' (suavização de afirmações) para liderar reuniões e apresentar críticas sem soar ríspido."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Hedging / Strategic pivot", romaji: "/ˈhedʒɪŋ/", translation: "Suavização diplomática / Mudança estratégica de rumo", timeContext: "Técnicas de comunicação de alta liderança." },
        { type: "vocab", kanji: "It appears that / I tend to believe", romaji: "/ɪt əˈpɪərz ðæt/", translation: "Parece que / Eu me inclino a acreditar", timeContext: "Amofinadores de opinião executiva." },
        { type: "grammar_pill", title: "A Técnica do Hedging (Suavização Diplomática)", rule: "Líderes seniores evitam afirmações categóricas e agressivas (ex: 'This plan is wrong'). Usam-se verbos de atenuação como 'seem', 'appear', 'tend to' e advérbios como 'somewhat', 'relatively'.", formula: "It seems/appears + that... | Subject + tend to + Verb", example: "IT SEEMS THAT there is a misunderstanding. (Em vez de: You misunderstood)." },
        { type: "grammar_pill", title: "Uso de Modais na Liderança: 'Might' & 'Could'", rule: "Para sugerir mudanças de curso sem impor ordens ríspidas, utilizam-se modais de probabilidade.", formula: "We might want to consider + V(-ing)", example: "WE MIGHT WANT TO CONSIDER revising the quarterly goals." }
    ],
    stage3_practice: [
        { question: "1. Qual frase exemplifica a técnica de 'hedging' (linguagem diplomática suave)?", options: [{ label: "It appears that we may need to review the budget.", isCorrect: true }, { label: "The budget is completely wrong.", isCorrect: false }, { label: "You made a mistake in the budget.", isCorrect: false }] },
        { question: "2. Como sugerir um ajuste de forma diplomática a uma equipe de executivos?", options: [{ label: "We might want to consider adjusting our timeline slightly.", isCorrect: true }, { label: "Adjust the timeline right now.", isCorrect: false }, { label: "I command you to change timeline.", isCorrect: false }] },
        { question: "3. Complete a frase de liderança: 'I ___ to think that a collaborative approach yields better results.'", options: [{ label: "tend", isCorrect: true }, { label: "am tend", isCorrect: false }, { label: "tended to be", isCorrect: false }] },
        { question: "4. O que significa 'hedging' no contexto de comunicação empresarial?", options: [{ label: "O uso de linguagem cautelosa e cortês para mitigar conflitos", isCorrect: true }, { label: "Fazer cortes orçamentários agressivos", isCorrect: false }, { label: "Demitir funcionários por e-mail", isCorrect: false }] },
        { question: "5. 'It seems that there has been an oversight' serve para:", options: [{ label: "Apontar um descuido/erro de forma elegante sem culpar alguém diretamente", isCorrect: true }, { label: "Elogiar o trabalho de alguém", isCorrect: false }, { label: "Anunciar a falência da empresa", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "It appears that we might need to reevaluate our current strategy.", translation: "Parece que nós talvez precisemos reavaliar nossa estratégia atual.", chunks: ["It", "appears", "that", "we", "might", "need", "to", "reevaluate", "our", "current", "strategy", "."] },
        { sentenceEn: "I tend to believe that a more flexible timeline would benefit the project.", translation: "Eu me inclino a acreditar que um cronograma mais flexível beneficiaria o projeto.", chunks: ["I", "tend", "to", "believe", "that", "a", "more", "flexible", "timeline", "would", "benefit", "the", "project", "."] }
    ],
    stage4_dialog: [
        { npcName: "Board Director", npcMessage: "Why are the sales numbers lower than projected?", options: [{ text: "It seems that market conditions were somewhat more challenging than anticipated.", isCorrect: true, feedback: "Excelente justificativa diplomática com 'hedging'!" }, { text: "The team failed completely.", isCorrect: false, feedback: "Linguagem ríspida e pouco executiva." }, { text: "I don't know numbers.", isCorrect: false, feedback: "Inadequado para liderança." }] },
        { npcName: "Vice President", npcMessage: "Should we fire the vendor for missing the deadline?", options: [{ text: "We might want to consider having a formal discussion with them before taking drastic steps.", isCorrect: true, feedback: "Postura de liderança sensata e ponderada!" }, { text: "Firing them is must.", isCorrect: false, feedback: "Incorreto." }, { text: "It appear we fire them.", isCorrect: false, feedback: "Gramática errada." }] },
        { npcName: "Department Head", npcMessage: "Is this proposal ready for final sign-off?", options: [{ text: "I tend to think it requires a minor revision regarding compliance.", isCorrect: true, feedback: "Apontamento preciso e cortês!" }, { text: "No, proposal is bad.", isCorrect: false, feedback: "Pouco profissional." }, { text: "I tend sign off.", isCorrect: false, feedback: "Incompleto." }] }
    ],
    stage5_quiz: [
        { question: "1. A técnica de 'hedging' é usada por executivos para:", options: [{ label: "Evitar confrontos diretos e suavizar críticas ou opiniões", isCorrect: true }, { label: "Fazer piadas em reuniões", isCorrect: false }, { label: "Demonstrar falta de conhecimento", isCorrect: false }] },
        { question: "2. Qual dos verbos a seguir é um suavizador (hedging verb) típico?", options: [{ label: "Seem / Appear / Tend to", isCorrect: true }, { label: "Command / Demand / Force", isCorrect: false }, { label: "Ignore / Neglect / Forget", isCorrect: false }] },
        { question: "3. 'We might want to consider X' é uma forma refinada de:", options: [{ label: "Fazer uma sugestão sem impor uma ordem", isCorrect: true }, { label: "Proibir a equipe de fazer X", isCorrect: false }, { label: "Exigir demissão imediata", isCorrect: false }] },
        { question: "4. 'Somewhat' e 'Relatively' atuam como:", options: [{ label: "Advérbios de atenuação (softeners)", isCorrect: true }, { label: "Verbos no passado", isCorrect: false }, { label: "Substantivos concretos", isCorrect: false }] },
        { question: "5. Escolha a frase mais diplomática para uma reunião de diretoria:", options: [{ label: "There appears to be a slight discrepancy in the figures.", isCorrect: true }, { label: "You lied about these figures.", isCorrect: false }, { label: "Figures are wrong.", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_06 = {
    id: "en_b2_mod_06",
    title: "Corporate Emails & Reports",
    section: 2,
    sectionTitle: "Executive Business & Corporate Etiquette",
    level: "B2",
    xpReward: 190,
    stage1_context: {
        audioGuide: "Further to our recent conversation, please find attached the comprehensive audit report.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Redigir relatórios corporativos formais e e-mails executivos avançados utilizando fórmulas de referência, prestação de contas e anexos."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Further to our conversation / In response to", romaji: "/ˈfɜːrðər tuː/", translation: "Em continuação a nossa conversa / Em resposta a", timeContext: "Frases de abertura formalíssimas para e-mails institucionais." },
        { type: "vocab", kanji: "Comprehensive report / At your earliest convenience", romaji: "/ˌkɑːmprɪˈhensɪv/", translation: "Relatório detalhado/abrangente / Assim que possível (formal)", timeContext: "Vocabulário de correspondência executiva." },
        { type: "grammar_pill", title: "Fórmulas de Referência: 'Further to' & 'With reference to'", rule: "Para dar continuidade a uma reunião ou chamada anterior por e-mail, usam-se 'Further to' ou 'With reference to' seguidos do substantivo.", formula: "Further to + [Substantivo], I am writing to...", example: "FURTHER TO OUR TELEPHONE CONVERSATION, I am sending the proposal." },
        { type: "grammar_pill", title: "Solicitações Formais de Prazo com 'At your earliest convenience'", rule: "Em e-mails formais, evita-se usar 'ASAP' (As soon as possible) por ser considerado informal ou exigente. Prefere-se 'At your earliest convenience'.", formula: "Please reply / confirm + at your earliest convenience", example: "Please review the document AT YOUR EARLIEST CONVENIENCE." }
    ],
    stage3_practice: [
        { question: "1. Qual a frase mais adequada para iniciar um e-mail dando seguimento a uma ligação?", options: [{ label: "Further to our telephone conversation earlier today, please find attached the agreement.", isCorrect: true }, { label: "Like we talked on phone, here is file.", isCorrect: false }, { label: "Following phone talk, see file.", isCorrect: false }] },
        { question: "2. Como solicitar uma resposta urgente com alta cortesia formal?", options: [{ label: "I would appreciate your feedback at your earliest convenience.", isCorrect: true }, { label: "Answer me ASAP!", isCorrect: false }, { label: "Reply fast when you can.", isCorrect: false }] },
        { question: "3. O adjetivo 'comprehensive' em 'a comprehensive report' significa:", options: [{ label: "Abrangente, completo e detalhado", isCorrect: true }, { label: "Compreensivo/Empático", isCorrect: false }, { label: "Curto e resumido", isCorrect: false }] },
        { question: "4. Complete a frase: 'With ___ to your inquiry, we are pleased to inform you that...' ", options: [{ label: "reference", isCorrect: true }, { label: "regardful", isCorrect: false }, { label: "referring", isCorrect: false }] },
        { question: "5. Em relatórios formais, a voz passiva é preferida porque:", options: [{ label: "Confere um tom impessoal, neutro e objetivo ao documento", isCorrect: true }, { label: "Esconde quem escreveu o texto", isCorrect: false }, { label: "É obrigatória por lei", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Further to our meeting, I am submitting the revised financial report.", translation: "Em continuação à nossa reunião, estou submetendo o relatório financeiro revisado.", chunks: ["Further", "to", "our", "meeting", ",", "I", "am", "submitting", "the", "revised", "financial", "report", "."] },
        { sentenceEn: "Please review the attached contract at your earliest convenience.", translation: "Por favor revise o contrato em anexo assim que lhe for conveniente.", chunks: ["Please", "review", "the", "attached", "contract", "at", "your", "earliest", "convenience", "."] }
    ],
    stage4_dialog: [
        { npcName: "Senior Partner", npcMessage: "Did you follow up on yesterday's discussion with the auditors?", options: [{ text: "Yes. Further to our discussion, I sent them the comprehensive audit files this morning.", isCorrect: true, feedback: "Comunicação formalíssima e impecável!" }, { text: "Yes, like we talked I sent email.", isCorrect: false, feedback: "Muito informal." }, { text: "Further conversation files sent.", isCorrect: false, feedback: "Sintaxe quebrada." }] },
        { npcName: "Client", npcMessage: "When will the contract review be finished?", options: [{ text: "Our legal team is reviewing it. We will get back to you at your earliest convenience.", isCorrect: true, feedback: "Excelente postura corporativa B2!" }, { text: "We do ASAP.", isCorrect: false, feedback: "Evite 'ASAP' em comunicações com clientes de alto nível." }, { text: "It is reviewing now.", isCorrect: false, feedback: "Falta clareza de voz passiva." }] },
        { npcName: "Department Head", npcMessage: "Where can I find the details regarding the new policy?", options: [{ text: "With reference to the new policy, full details are outlined in the attached PDF.", isCorrect: true, feedback: "Apresentação perfeita de documento anexo!" }, { text: "Reference policy look PDF.", isCorrect: false, feedback: "Incorreto." }, { text: "Further to policy look inside.", isCorrect: false, feedback: "Construção fraca." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Further to our conversation' é uma expressão de abertura usada para:", options: [{ label: "Retomar um assunto previamente conversado com formalidade", isCorrect: true }, { label: "Cancelar um contrato comercial", isCorrect: false }, { label: "Concluir um e-mail de despedida", isCorrect: false }] },
        { question: "2. Qual a alternativa formal elegante para 'ASAP' (As soon as possible)?", options: [{ label: "At your earliest convenience", isCorrect: true }, { label: "In a fast way", isCorrect: false }, { label: "Quickly please", isCorrect: false }] },
        { question: "3. 'Comprehensive' em inglês é um falso cognato e NÃO significa:", options: [{ label: "Compreensivo / Tolerante", isCorrect: true }, { label: "Detalhador / Completo", isCorrect: false }, { label: "Abrangente", isCorrect: false }] },
        { question: "4. 'With reference to' deve ser seguido de:", options: [{ label: "Um substantivo ou assunto de referência", isCorrect: true }, { label: "Um verbo no passado simples", isCorrect: false }, { label: "Um adjetivo isolado", isCorrect: false }] },
        { question: "5. Escolha a frase com estilo de redação corporativa B2:", options: [{ label: "Should you require any further assistance, please do not hesitate to contact us.", isCorrect: true }, { label: "If you want help call me.", isCorrect: false }, { label: "Need help tell us fast.", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_07 = {
    id: "en_b2_mod_07",
    title: "Negotiations & Polite Disagreement",
    section: 2,
    sectionTitle: "Executive Business & Corporate Etiquette",
    level: "B2",
    xpReward: 195,
    stage1_context: {
        audioGuide: "I appreciate your position; however, I'm afraid that proposal is not feasible from a financial standpoint.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Conduzir negociações complexas, defender posições comerciais e recusar propostas de forma diplomática com 'I'm afraid that...', 'not feasible' e 'standpoint'."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Not feasible / Standpoint", romaji: "/nɑːt ˈfiːzəbl/", translation: "Inviável, não exequível / Ponto de vista, perspectiva", timeContext: "Vocabulário de negociação e análise de viabilidade." },
        { type: "vocab", kanji: "I'm afraid that... / With all due respect", romaji: "/aɪm əˈfreɪd ðæt/", translation: "Receio que... / Com todo o respeito", timeContext: "Amofinadores para recusa diplomática de propostas." },
        { type: "grammar_pill", title: "Recusas Diplomáticas com 'I'm afraid that...'", rule: "Em negociações em inglês, raramente se usa 'No' ou 'I refuse'. A recusa é introduzida com 'I'm afraid (that)...' para demonstrar pesar polido.", formula: "I'm afraid (that) + [Proposta] + is not feasible", example: "I'M AFRAID THAT a 20% discount IS NOT FEASIBLE for us." },
        { type: "grammar_pill", title: "Análise por Perspectivas: 'From a... standpoint'", rule: "Para fundamentar uma objeção de forma técnica, usa-se a estrutura 'From a [adjetivo] standpoint' (ex: financial, operational, legal).", formula: "From a + [financial / legal / technical] + standpoint", example: "FROM A FINANCIAL STANDPOINT, this investment makes sense." }
    ],
    stage3_practice: [
        { question: "1. Como recusar uma proposta financeira em uma negociação de forma profissional?", options: [{ label: "I'm afraid that discount is not feasible from a financial standpoint.", isCorrect: true }, { label: "No way, that discount is too high.", isCorrect: false }, { label: "We refuse your bad price.", isCorrect: false }] },
        { question: "2. O termo 'feasible' em inglês corporativo significa:", options: [{ label: "Exequível, viável, praticável", isCorrect: true }, { label: "Horrível e assustador", isCorrect: false }, { label: "Gratuito e sem custos", isCorrect: false }] },
        { question: "3. Complete a frase de negociação: 'With all due ___, we cannot accept these terms.'", options: [{ label: "respect", isCorrect: true }, { label: "regardness", isCorrect: false }, { label: "aspect", isCorrect: false }] },
        { question: "4. Qual a melhor maneira de introduzir um ponto de vista técnico em um debate de negócios?", options: [{ label: "From a technical standpoint, the implementation will take three months.", isCorrect: true }, { label: "By technical view point, implementation takes time.", isCorrect: false }, { label: "For technical stance, we take 3 months.", isCorrect: false }] },
        { question: "5. 'I appreciate your position; however...' serve para:", options: [{ label: "Validar a opinião do parceiro antes de apresentar um contraponto", isCorrect: true }, { label: "Aceitar a oferta incondicionalmente", isCorrect: false }, { label: "Encerrar a empresa imediatamente", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I'm afraid that your request is not feasible within our current budget.", translation: "Receio que a sua solicitação não seja viável dentro do nosso orçamento atual.", chunks: ["I'm", "afraid", "that", "your", "request", "is", "not", "feasible", "within", "our", "current", "budget", "."] },
        { sentenceEn: "From an operational standpoint, this strategic change makes complete sense.", translation: "Do ponto de vista operacional, esta mudança estratégica faz todo o sentido.", chunks: ["From", "an", "operational", "standpoint", ",", "this", "strategic", "change", "makes", "complete", "sense", "."] }
    ],
    stage4_dialog: [
        { npcName: "Supplier", npcMessage: "We can only offer a 2% discount on bulk orders.", options: [{ text: "I understand your constraints; however, from our standpoint, that is not feasible.", isCorrect: true, feedback: "Negociação de alto nível com recusa diplomática firme!" }, { text: "No, 2% is horrible.", isCorrect: false, feedback: "Muito agressivo." }, { text: "I afraid not feasible discount.", isCorrect: false, feedback: "Gramática incorreta." }] },
        { npcName: "Client", npcMessage: "Can you deliver the customized software by next Monday?", options: [{ text: "I'm afraid that timeline is not feasible due to quality testing.", isCorrect: true, feedback: "Justificativa profissional irrepreensível com 'feasible'!" }, { text: "No, we cannot do Monday.", isCorrect: false, feedback: "Muito seco." }, { text: "It is unfeasible for Monday.", isCorrect: false, feedback: "Prefira 'not feasible'." }] },
        { npcName: "Investor", npcMessage: "We demand exclusive rights to the patent.", options: [{ text: "With all due respect, exclusive rights are off the table at this stage.", isCorrect: true, feedback: "Excelente imposição de limites com polidez!" }, { text: "With respect no.", isCorrect: false, feedback: "Incompleto." }, { text: "I am afraid no patent.", isCorrect: false, feedback: "Construção fraca." }] }
    ],
    stage5_quiz: [
        { question: "1. Em negociações executivas em inglês, 'not feasible' é sinônimo de:", options: [{ label: "Not doable / Unworkable (Inviável)", isCorrect: true }, { label: "Very cheap (Muito barato)", isCorrect: false }, { label: "Highly recommended (Recomendado)", isCorrect: false }] },
        { question: "2. 'I'm afraid that...' é usado em negociações para:", options: [{ label: "Introduzir notícias ruins ou recusas de forma polida", isCorrect: true }, { label: "Demonstrar pavor de fantasmas", isCorrect: false }, { label: "Agradecer por um presente", isCorrect: false }] },
        { question: "3. 'From a financial standpoint' traduz-se como:", options: [{ label: "Do ponto de vista / perspectiva financeira", isCorrect: true }, { label: "Ficando em pé no banco", isCorrect: false }, { label: "Sem nenhum dinheiro", isCorrect: false }] },
        { question: "4. Qual a melhor resposta para iniciar um contra-ataque em uma negociação sem parecer ofensivo?", options: [{ label: "I see where you're coming from, but...", isCorrect: true }, { label: "That is a stupid offer.", isCorrect: false }, { label: "You know nothing about this.", isCorrect: false }] },
        { question: "5. 'Off the table' em uma negociação significa que um item:", options: [{ label: "Não está disponível para negociação / Foi retirado", isCorrect: true }, { label: "Caiu no chão", isCorrect: false }, { label: "Foi aceito por todos", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_08 = {
    id: "en_b2_mod_08",
    title: "Business Presentations & Executive Pitches",
    section: 2,
    sectionTitle: "Executive Business & Corporate Etiquette",
    level: "B2",
    xpReward: 200,
    stage1_context: {
        audioGuide: "To illustrate this point, let's look at the chart. Moving on to the financial projections, as you can see...",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Efetuar apresentações corporativas de alto impacto, pitches de negócios e conduzir rodadas de perguntas (Q&A) em reuniões de diretoria."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Moving on to / As you can see from this chart", romaji: "/ˈmuːvɪŋ ɑːn tuː/", translation: "Passando para / Como podem ver por este gráfico", timeContext: "Frases de transição visual em apresentações." },
        { type: "vocab", kanji: "To illustrate this point / In conclusion", romaji: "/tʊ ˈɪləstreɪt ðɪs pɔɪnt/", translation: "Para ilustrar este ponto / Concluindo", timeContext: "Sinalizadores de discurso em pitches e palestras." },
        { type: "grammar_pill", title: "Frases de Transição em Apresentações", rule: "Para mudar de tópico sem romper a fluidez da fala, usam-se estruturas como 'Moving on to...', 'Turning our attention to...' ou 'This brings me to my next point'.", formula: "Moving on to + [Novo Tópico] | This brings me to + [Ponto]", example: "THIS BRINGS ME TO MY NEXT POINT: our expansion plan." },
        { type: "grammar_pill", title: "Conduzindo a Rodada de Perguntas (Q&A)", rule: "Para abrir espaço para perguntas: 'I'd be glad to take any questions now.' Para adiar respostas complexas: 'Let's address that during the Q&A session.'", formula: "I'd be happy / glad to take questions now", example: "Thank you for your time. I'D BE GLAD TO TAKE ANY QUESTIONS." }
    ],
    stage3_practice: [
        { question: "1. Qual frase é ideal para transitar para o próximo slide em um pitch de negócios?", options: [{ label: "Moving on to our financial projections for next year...", isCorrect: true }, { label: "I go now to next slide picture.", isCorrect: false }, { label: "Look next thing now.", isCorrect: false }] },
        { question: "2. Como convidar o público para fazer perguntas ao final da palestra?", options: [{ label: "Thank you for your attention. I'd be glad to take any questions now.", isCorrect: true }, { label: "Presentation finish, ask me now.", isCorrect: false }, { label: "Do you have question or no?", isCorrect: false }] },
        { question: "3. Complete a frase de apresentação de gráficos: 'As you can see ___ this chart, sales grew by 40%.'", options: [{ label: "from", isCorrect: true }, { label: "at", isCorrect: false }, { label: "into", isCorrect: false }] },
        { question: "4. A expressão 'This brings me to my next point' serve para:", options: [{ label: "Conectar suavemente a ideia atual com a seguinte na apresentação", isCorrect: true }, { label: "Interromper um colega que está falando", isCorrect: false }, { label: "Pedir desculpas por um erro no slide", isCorrect: false }] },
        { question: "5. 'To sum up' em um discurso executivo significa:", options: [{ label: "Em resumo / Para sintetizar os pontos principais", isCorrect: true }, { label: "Somar dois mais dois", isCorrect: false }, { label: "Começar a palestra", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "This brings me to my next point regarding market expansion.", translation: "Isto me leva ao meu próximo ponto referente à expansão de mercado.", chunks: ["This", "brings", "me", "to", "my", "next", "point", "regarding", "market", "expansion", "."] },
        { sentenceEn: "As you can see from the chart, our revenue has doubled.", translation: "Como vocês podem ver pelo gráfico, nossa receita dobrou.", chunks: ["As", "you", "can", "see", "from", "the", "chart", ",", "our", "revenue", "has", "doubled", "."] }
    ],
    stage4_dialog: [
        { npcName: "Investor", npcMessage: "Could you clarify how you plan to reduce customer acquisition costs?", options: [{ text: "To illustrate this point, let's look at the third slide showing our automated funnel.", isCorrect: true, feedback: "Direcionamento visual perfeito e profissional!" }, { text: "Look slide 3 now.", isCorrect: false, feedback: "Muito simples para um pitch." }, { text: "Moving on question finish.", isCorrect: false, feedback: "Sem sentido." }] },
        { npcName: "Audience Member", npcMessage: "What is your main competitive advantage in Asia?", options: [{ text: "Thank you for that question. That brings me to our strategic partnerships in Tokyo.", isCorrect: true, feedback: "Excelente transição e valorização da pergunta!" }, { text: "Asia advantage is good.", isCorrect: false, feedback: "Muito fraco." }, { text: "I take question later.", isCorrect: false, feedback: "Pouco atencioso." }] },
        { npcName: "Chairman", npcMessage: "We only have two minutes left for your presentation.", options: [{ text: "To sum up, investing in our platform guarantees high returns with minimal risk.", isCorrect: true, feedback: "Fechamento sintetizado e de alto impacto!" }, { text: "Moving on to sum up finish.", isCorrect: false, feedback: "Redundante." }, { text: "I stop talking now.", isCorrect: false, feedback: "Inadequado." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Moving on to' é um conector de transição usado em apresentações para:", options: [{ label: "Passar de um tópico/seção para o próximo", isCorrect: true }, { label: "Mudar de sala de reunião", isCorrect: false }, { label: "Desligar o projetor", isCorrect: false }] },
        { question: "2. 'As you can see from this graph...' serve para:", options: [{ label: "Chamar a atenção do público para uma evidência visual no slide", isCorrect: true }, { label: "Testar a visão das pessoas", isCorrect: false }, { label: "Reclamar da iluminação do auditório", isCorrect: false }] },
        { question: "3. 'Q&A' em apresentações significa:", options: [{ label: "Questions & Answers (Sessão de Perguntas e Respostas)", isCorrect: true }, { label: "Quality & Assurance", isCorrect: false }, { label: "Quick & Easy", isCorrect: false }] },
        { question: "4. 'To illustrate this point' introduz:", options: [{ label: "Um exemplo concreto ou dado de demonstração", isCorrect: true }, { label: "Um desenho no papel", isCorrect: false }, { label: "Uma reclamação formal", isCorrect: false }] },
        { question: "5. Qual a forma mais fluida para encerrar uma palestra executiva?", options: [{ label: "To conclude, I would like to thank you for your time and attention.", isCorrect: true }, { label: "That's all bye.", isCorrect: false }, { label: "Finish presentation.", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 3: MEDIA ANALYSIS, NEWS & CURRENT AFFAIRS (MÓDULOS 9 A 12)
// ------------------------------------------

const MODULO_EN_B2_09 = {
    id: "en_b2_mod_09",
    title: "Journalistic English & News Analysis",
    section: 3,
    sectionTitle: "Media Analysis, News & Current Affairs",
    level: "B2",
    xpReward: 200,
    stage1_context: {
        audioGuide: "According to official reports, the company allegedly engaged in uncompetitive practices. It is claimed that...",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Compreender reportagens jornalísticas da BBC/CNN e utilizar vocabulário de atribuição imparcial e alegação (allegedly, according to, it is claimed that)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Allegedly / According to reports", romaji: "/əˈledʒɪdli/", translation: "Aparentemente, supostamente / De acordo com relatórios", timeContext: "Linguagem jornalística de imparcialidade jurídica." },
        { type: "vocab", kanji: "It is claimed that / Sources reveal", romaji: "/ɪt ɪz kleɪmd ðæt/", translation: "Alega-se que / Fontes revelam", timeContext: "Estruturas passivas de jornalismo investigativo." },
        { type: "grammar_pill", title: "O Uso do 'Allegedly' no Jornalismo", rule: "Jornalistas usam 'allegedly' (alegadamente/supostamente) para relatar acusações que ainda não foram provadas em tribunal, evitando processos por difamação.", formula: "Subject + allegedly + Verb", example: "The suspect ALLEGEDLY FLED the country last night." },
        { type: "grammar_pill", title: "Voz Passiva Impessoal de Reportagem", rule: "Para transmitir notícias de forma neutra sem citar fontes específicas, usam-se estruturas passivas como 'It is reported that...' ou 'He is believed to be...'.", formula: "It is + [reported / claimed / rumored] + that + Clause", example: "IT IS CLAIMED THAT negotiations have stalled." }
    ],
    stage3_practice: [
        { question: "1. O termo 'allegedly' é usado em notícias de imprensa para:", options: [{ label: "Relatar fatos alegados que ainda não foram judicialmente comprovados", isCorrect: true }, { label: "Confirmar uma verdade absoluta", isCorrect: false }, { label: "Fazer uma previsão do tempo", isCorrect: false }] },
        { question: "2. Qual a estrutura de reportagem passiva impessoal correta?", options: [{ label: "It is reported that the merger will happen in October.", isCorrect: true }, { label: "It reports that the merger happens.", isCorrect: false }, { label: "They are report that merger will happen.", isCorrect: false }] },
        { question: "3. Complete a manchete de jornal: '___ to official sources, inflation fell by 2%.'", options: [{ label: "According", isCorrect: true }, { label: "Regarding to", isCorrect: false }, { label: "Alleged", isCorrect: false }] },
        { question: "4. 'The CEO is believed to have resigned' significa que:", options: [{ label: "Acredita-se que o CEO tenha se demitido", isCorrect: true }, { label: "O CEO prometeu que nunca se demitirá", isCorrect: false }, { label: "O CEO demitiu a diretoria", isCorrect: false }] },
        { question: "5. Qual a forma correta do advérbio de alegação?", options: [{ label: "allegedly", isCorrect: true }, { label: "allegatedly", isCorrect: false }, { label: "allegingness", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "According to recent reports, the economic growth was higher than expected.", translation: "De acordo com relatórios recentes, o crescimento econômico foi maior do que o esperado.", chunks: ["According", "to", "recent", "reports", ",", "the", "economic", "growth", "was", "higher", "than", "expected", "."] },
        { sentenceEn: "It is claimed that the two companies have reached a secret agreement.", translation: "Alega-se que as duas empresas chegaram a um acordo secreto.", chunks: ["It", "is", "claimed", "that", "the", "two", "companies", "have", "reached", "a", "secret", "agreement", "."] }
    ],
    stage4_dialog: [
        { npcName: "News Anchor", npcMessage: "What are the latest updates on the corporate scandal?", options: [{ text: "According to reports, the executive allegedly transferred funds offshore.", isCorrect: true, feedback: "Linguagem jornalística impecável com 'allegedly'!" }, { text: "He allegedly transfer fund.", isCorrect: false, feedback: "Conjugue o verbo no passado: 'transferred'." }, { text: "According to news he steal.", isCorrect: false, feedback: "Construção fraca." }] },
        { npcName: "Investigative Reporter", npcMessage: "Is there any confirmation about the minister's resignation?", options: [{ text: "Not yet, but it is rumored that an official announcement will be made today.", isCorrect: true, feedback: "Uso perfeito da estrutura passiva 'it is rumored that'!" }, { text: "It rumor that he resigns.", isCorrect: false, feedback: "Diga 'it is rumored that'." }, { text: "Allegedly he is resign.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Editor", npcMessage: "Can we print that the company was sold?", options: [{ text: "Only if we state that the company is reported to have been sold.", isCorrect: true, feedback: "Cuidado jurídico e jornalístico B2 brilhante!" }, { text: "Print that company sold allegedly yesterday.", isCorrect: false, feedback: "Sintaxe ruim." }, { text: "It is report sold.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Allegedly' serve para proteger jornalistas e veículos de mídia contra:", options: [{ label: "Processos por difamação antes do julgamento final", isCorrect: true }, { label: "Erros de ortografia", isCorrect: false }, { label: "Altas taxas de impostos", isCorrect: false }] },
        { question: "2. 'According to' exige qual preposição?", options: [{ label: "to (According to)", isCorrect: true }, { label: "with (According with)", isCorrect: false }, { label: "at (According at)", isCorrect: false }] },
        { question: "3. 'It is claimed that...' indica que uma afirmação:", options: [{ label: "Foi feita por terceiros, mas precisa de confirmação", isCorrect: true }, { label: "É uma mentira provada", isCorrect: false }, { label: "É um fato matemático", isCorrect: false }] },
        { question: "4. 'Sources close to the matter' significa:", options: [{ label: "Fontes próximas ao assunto / Fontes confidenciais", isCorrect: true }, { label: "Pessoas longe da notícia", isCorrect: false }, { label: "Dicionários antigos", isCorrect: false }] },
        { question: "5. Escolha a frase jornalística com norma culta perfeita:", options: [{ label: "The politician is alleged to have accepted bribes.", isCorrect: true }, { label: "The politician is allegedly to accept bribes.", isCorrect: false }, { label: "Alleged politician accept bribes.", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_10 = {
    id: "en_b2_mod_10",
    title: "Public Notices, Documents & Bureaucracy",
    section: 3,
    sectionTitle: "Media Analysis, News & Current Affairs",
    level: "B2",
    xpReward: 210,
    stage1_context: {
        audioGuide: "Applicants must comply with the terms and conditions outlined in section B of the agreement.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Interpretar avisos oficiais, editais, termos burocráticos e contratos legais (terms and conditions, comply with, outlined in, application policy)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Terms and conditions / Comply with", romaji: "/tɜːrmz ænd kənˈdɪʃnz/", translation: "Termos e condições / Estar em conformidade com (cumprir)", timeContext: "Linguagem burocrática e contratual." },
        { type: "vocab", kanji: "Outlined in / Subject to approval", romaji: "/ˈaʊtlaɪnd ɪn/", translation: "Delineado/Descrevido em / Sujeito a aprovação", timeContext: "Cláusulas de editais e termos de serviço." },
        { type: "grammar_pill", title: "O Verbo 'Comply with'", rule: "Para indicar que uma pessoa ou empresa segue regras, leis ou regulamentos, usa-se 'comply' acompanhado obrigatoriamente da preposição 'WITH'.", formula: "Comply WITH + [Rules / Regulations / Laws]", example: "All staff must COMPLY WITH the safety regulations." },
        { type: "grammar_pill", title: "'Subject to' + Substantivo", rule: "A expressão 'subject to' indica dependência condicional (ex: sujeito a alterações, sujeito à aprovação final).", formula: "Subject TO + Noun", example: "The schedule is SUBJECT TO CHANGE without prior notice." }
    ],
    stage3_practice: [
        { question: "1. Qual a preposição correta para acompanhar o verbo 'comply' no sentido de cumprir regras?", options: [{ label: "with (comply with)", isCorrect: true }, { label: "to (comply to)", isCorrect: false }, { label: "by (comply by)", isCorrect: false }] },
        { question: "2. 'The offer is subject to approval' significa que a oferta:", options: [{ label: "Depende de aprovação para ser válida", isCorrect: true }, { label: "Foi aprovada definitivamente", isCorrect: false }, { label: "Foi rejeitada sem chance de recurso", isCorrect: false }] },
        { question: "3. O que significa 'outlined in section 3'?", options: [{ label: "Detalhado / Descrevido na seção 3", isCorrect: true }, { label: "Desenhado a lápis na seção 3", isCorrect: false }, { label: "Deletado da seção 3", isCorrect: false }] },
        { question: "4. Complete a frase burocrática: 'By signing, you agree to the terms and ___.'", options: [{ label: "conditions", isCorrect: true }, { label: "conditionalities", isCorrect: false }, { label: "conducts", isCorrect: false }] },
        { question: "5. 'Without prior notice' em comunicados oficiais significa:", options: [{ label: "Sem aviso prévio", isCorrect: true }, { label: "Com autorização prévia", isCorrect: false }, { label: "Por escrito", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "All applicants must comply with the requirements outlined in the official document.", translation: "Todos os candidatos devem cumprir com os requisitos delineados no documento oficial.", chunks: ["All", "applicants", "must", "comply", "with", "the", "requirements", "outlined", "in", "the", "official", "document", "."] },
        { sentenceEn: "Prices are subject to change without prior notice.", translation: "Os preços estão sujeitos a alteração sem aviso prévio.", chunks: ["Prices", "are", "subject", "to", "change", "without", "prior", "notice", "."] }
    ],
    stage4_dialog: [
        { npcName: "Legal Officer", npcMessage: "Does our new software comply with the international data protection regulations?", options: [{ text: "Yes, it fully complies with all GDPR guidelines outlined in the treaty.", isCorrect: true, feedback: "Resposta precisa usando 'complies with' e 'outlined in'!" }, { text: "It complies to regulations.", isCorrect: false, feedback: "A preposição correta é 'with'." }, { text: "It comply with guidelines.", isCorrect: false, feedback: "Flexione na 3ª pessoa: 'complies'." }] },
        { npcName: "Applicant", npcMessage: "When will my visa application be finalized?", options: [{ text: "Your visa is subject to approval by the consulate within 15 business days.", isCorrect: true, feedback: "Uso impecável da estrutura condicional 'subject to approval'!" }, { text: "It is subject for approval.", isCorrect: false, feedback: "Diga 'subject TO approval'." }, { text: "Visa is comply approval.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Clerk", npcMessage: "Did you read the user policy before checking the box?", options: [{ text: "Yes, I agreed to all the terms and conditions listed.", isCorrect: true, feedback: "Excelente domínio do vocabulário contratual!" }, { text: "I agree terms conditions.", isCorrect: false, feedback: "Faltam artigos e preposições." }, { text: "I compliant with text.", isCorrect: false, feedback: "Diga 'complied with'." }] }
    ],
    stage5_quiz: [
        { question: "1. O verbo 'comply' exige a preposição:", options: [{ label: "with", isCorrect: true }, { label: "for", isCorrect: false }, { label: "about", isCorrect: false }] },
        { question: "2. 'Subject to change' indica que algo:", options: [{ label: "Pode sofrer alterações sem aviso prévio", isCorrect: true }, { label: "Nunca será modificado", isCorrect: false }, { label: "Está com erro gramatical", isCorrect: false }] },
        { question: "3. 'Prior notice' em documentos burocráticos refere-se a:", options: [{ label: "Aviso ou notificação prévia", isCorrect: true }, { label: "Uma multa financeira", isCorrect: false }, { label: "A assinatura do contrato", isCorrect: false }] },
        { question: "4. 'As outlined below' significa:", options: [{ label: "Conforme detalhado / apresentado abaixo", isCorrect: true }, { label: "Conforme rasurado no papel", isCorrect: false }, { label: "Incorreto segundo a lei", isCorrect: false }] },
        { question: "5. 'Terms and conditions' é uma expressão fixa usada em:", options: [{ label: "Contratos, aplicativos e termos de uso de serviços", isCorrect: true }, { label: "Conversas casuais de bar", isCorrect: false }, { label: "Livros de poesias", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_11 = {
    id: "en_b2_mod_11",
    title: "Media, Movies & Informal Slang without Subtitles",
    section: 3,
    sectionTitle: "Media Analysis, News & Current Affairs",
    level: "B2",
    xpReward: 210,
    stage1_context: {
        audioGuide: "Understanding movies without subtitles requires catching colloquialisms, jargon, and fast-paced regional accents.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Compreender filmes, séries e podcasts sem legendas identificando gírias regionais, jargões populares e coloquialismos nativos."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Colloquialism / Jargon", romaji: "/kəˈloʊkwiəlɪzəm/", translation: "Expressão coloquial / Jargão técnico/específico", timeContext: "Categorias de fala nativa sem filtro." },
        { type: "vocab", kanji: "Catch on / Binge-watch", romaji: "/kætʃ ɑːn/", translation: "Pegar o jeito (entender) / Maratonar séries", timeContext: "Gírias modernas de consumo de mídia." },
        { type: "grammar_pill", title: "Gírias e Contrações de Filmes (Catching Nuances)", rule: "Em diálogos de filmes nativos, ocorrem elisões de consoantes e gírias de ritmo rápido como 'dunno' (don't know), 'gimme' (give me), 'watcha' (what are you).", formula: "Colloquial reduction ➔ Natural listening recognition", example: "Whatcha doin'? ➔ What are you doing?" },
        { type: "grammar_pill", title: "O Verbo 'Catch on'", rule: "'Catch on' significa compreender uma ideia após algum tempo ou tornar-se popular na cultura pop.", formula: "Catch on to + Noun = entender | Catch on = virar moda", example: "It took me a while to CATCH ON to the plot of the movie." }
    ],
    stage3_practice: [
        { question: "1. O que significa 'binge-watch a TV show'?", options: [{ label: "Maratonar (assistir a vários episódios em sequência)", isCorrect: true }, { label: "Desligar a televisão imediatamente", isCorrect: false }, { label: "Assistir a apenas um minuto de um filme", isCorrect: false }] },
        { question: "2. O termo 'jargon' refere-se a:", options: [{ label: "Vocabulário técnico ou específico de um determinado grupo ou área", isCorrect: true }, { label: "Legendas em idiomas estrangeiros", isCorrect: false }, { label: "Erros de tradução em filmes", isCorrect: false }] },
        { question: "3. 'It took me a while to catch on' significa que eu demorei para:", options: [{ label: "Entender o sentido da história", isCorrect: true }, { label: "Ligar a televisão", isCorrect: false }, { label: "Comprar a pipoca", isCorrect: false }] },
        { question: "4. A expressão coloquial 'dunno' é a redução falada de:", options: [{ label: "don't know", isCorrect: true }, { label: "doesn't matter", isCorrect: false }, { label: "did not", isCorrect: false }] },
        { question: "5. 'Colloquial language' refere-se à linguagem:", options: [{ label: "Informal e natural do dia a dia usada por nativos", isCorrect: true }, { label: "Formal usada em tribunais", isCorrect: false }, { label: "Escrita em dicionários antigos", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "I spent the entire weekend binge-watching that new thriller series.", translation: "Eu passei o fim de semana inteiro maratonando aquela nova série de suspense.", chunks: ["I", "spent", "the", "entire", "weekend", "binge-watching", "that", "new", "thriller", "series", "."] },
        { sentenceEn: "It took a while for the audience to catch on to the subtle humor.", translation: "Demorou um pouco para o público entender o humor sutil.", chunks: ["It", "took", "a", "while", "for", "the", "audience", "to", "catch", "on", "to", "the", "subtle", "humor", "."] }
    ],
    stage4_dialog: [
        { npcName: "Friend", npcMessage: "Did you watch the movie last night without subtitles?", options: [{ text: "Yes! It was challenging because of the regional slang, but I managed to catch on.", isCorrect: true, feedback: "Excelente superação de compreensão auditiva B2!" }, { text: "Yes, I binge-watched the movie 10 times.", isCorrect: false, feedback: "'Binge-watch' é para séries/episódios." }, { text: "I catch on to subtitles.", isCorrect: false, feedback: "Fora de sentido." }] },
        { npcName: "Film Student", npcMessage: "Why did you find the dialogue in the crime drama hard to follow?", options: [{ text: "Because the characters used a lot of police jargon and fast colloquialisms.", isCorrect: true, feedback: "Análise perfeita dos obstáculos de escuta nativa!" }, { text: "Because jargon was too quiet.", isCorrect: false, feedback: "'Jargon' refere-se a vocabulário técnico, não a volume." }, { text: "I dunno the movie.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Colleague", npcMessage: "What did you do over the weekend?", options: [{ text: "I just stayed home and binge-watched the entire season of a sci-fi show.", isCorrect: true, feedback: "Uso impecável de 'binge-watched'!" }, { text: "I catch on TV.", isCorrect: false, feedback: "Incorreto." }, { text: "I jargon movies.", isCorrect: false, feedback: "Uso errado da palavra." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Binge-watching' é a prática de:", options: [{ label: "Assistir a muitos episódios de uma série de uma só vez", isCorrect: true }, { label: "Assistir a vídeos curtos no mudo", isCorrect: false }, { label: "Ir ao cinema sozinho", isCorrect: false }] },
        { question: "2. 'Catch on' significa:", options: [{ label: "Compreender / Pegar o sentido de algo após um tempo", isCorrect: true }, { label: "Pegar uma bola de futebol", isCorrect: false }, { label: "Perder o ônibus", isCorrect: false }] },
        { question: "3. 'Jargon' é caracterizado por:", options: [{ label: "Termos específicos de uma profissão ou nicho", isCorrect: true }, { label: "Palavras em espanhol inseridas no inglês", isCorrect: false }, { label: "Pontuação gramatical", isCorrect: false }] },
        { question: "4. 'Whatcha doing?' em linguagem de filmes significa:", options: [{ label: "What are you doing?", isCorrect: true }, { label: "Where are you going?", isCorrect: false }, { label: "Who are you seeing?", isCorrect: false }] },
        { question: "5. Para entender nativos sem legenda no nível B2, é crucial reconhecer:", options: [{ label: "Conexões sonoras, gírias e sotaques regionais", isCorrect: true }, { label: "Apenas regras de ortografia escrita", isCorrect: false }, { label: "Substantivos em latim", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_12 = {
    id: "en_b2_mod_12",
    title: "Social & Environmental Issues",
    section: 3,
    sectionTitle: "Media Analysis, News & Current Affairs",
    level: "B2",
    xpReward: 220,
    stage1_context: {
        audioGuide: "Climate change and the aging population are pressing global issues that require sustainable solutions.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Debater questões sociais, demográficas e ambientais contemporâneas (sustainability, aging population, carbon footprint, renewable energy)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Sustainability / Carbon footprint", romaji: "/səˌsteɪnəˈbɪləti/", translation: "Sustentabilidade / Pegada de carbono (impacto ambiental)", timeContext: "Vocabulário ambientalista e corporativo moderno." },
        { type: "vocab", kanji: "Aging population / Renewable energy", romaji: "/ˈeɪdʒɪŋ pɑːpjuˈleɪʃn/", translation: "Envelhecimento populacional / Energia renovável", timeContext: "Debates socioeconômicos globais." },
        { type: "grammar_pill", title: "Causa e Efeito Global: 'Lead to' & 'Result in'", rule: "Para conectar problemas sociais às suas consequências, utilizam-se os Phrasal Verbs 'lead to' e 'result in' seguidos de substantivo ou gerúndio.", formula: "Problem + lead to / result in + Consequences", example: "Deforestation LEADS TO climate change. | Excessive waste RESULTS IN pollution." },
        { type: "grammar_pill", title: "Adjetivos de Urgência: 'Pressing' & 'Urgent'", rule: "No nível B2, para descrever um problema grave que exige atenção imediata, usa-se o adjetivo 'pressing' (ex: a pressing issue).", formula: "Pressing + issue / concern / problem", example: "Global warming is a PRESSING ISSUE." }
    ],
    stage3_practice: [
        { question: "1. Como traduzir 'pegada de carbono' (o impacto de emissões de CO2 por pessoa/empresa)?", options: [{ label: "Carbon footprint", isCorrect: true }, { label: "Carbon step", isCorrect: false }, { label: "Carbon mark", isCorrect: false }] },
        { question: "2. Qual expressão refere-se ao envelhecimento demográfico de um país?", options: [{ label: "Aging population", isCorrect: true }, { label: "Old demographic", isCorrect: false }, { label: "Senior country", isCorrect: false }] },
        { question: "3. Complete a frase ambiental: 'Relying on fossil fuels will ___ to severe ecological damage.'", options: [{ label: "lead", isCorrect: true }, { label: "resulted", isCorrect: false }, { label: "causing", isCorrect: false }] },
        { question: "4. O adjetivo 'pressing' na expressão 'a pressing issue' significa:", options: [{ label: "Urgente, premente, que exige atenção imediata", isCorrect: true }, { label: "Pressionado fisicamente", isCorrect: false }, { label: "Deprimente", isCorrect: false }] },
        { question: "5. 'Renewable energy' inclui fontes como:", options: [{ label: "Solar and wind power", isCorrect: true }, { label: "Coal and oil", isCorrect: false }, { label: "Plastic waste", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Climate change is a pressing issue that requires immediate global action.", translation: "A mudança climática é uma questão urgente que requer ação global imediata.", chunks: ["Climate", "change", "is", "a", "pressing", "issue", "that", "requires", "immediate", "global", "action", "."] },
        { sentenceEn: "Companies are reducing their carbon footprint by investing in renewable energy.", translation: "As empresas estão reduzindo sua pegada de carbono investindo em energia renovável.", chunks: ["Companies", "are", "reducing", "their", "carbon", "footprint", "by", "investing", "in", "renewable", "energy", "."] }
    ],
    stage4_dialog: [
        { npcName: "Environmental Specialist", npcMessage: "What is the biggest challenge facing urban cities today?", options: [{ text: "Reducing our carbon footprint while transitioning to renewable energy.", isCorrect: true, feedback: "Posicionamento ambiental de nível B2 irretocável!" }, { text: "We need more carbon footprint.", isCorrect: false, feedback: "O objetivo é reduzi-la." }, { text: "Climate change is not pressing.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Economist", npcMessage: "How will demographic shifts affect the pension system?", options: [{ text: "The aging population will lead to higher healthcare costs and strain public budgets.", isCorrect: true, feedback: "Análise socioeconômica brilhante com 'lead to'!" }, { text: "Aging population results to good.", isCorrect: false, feedback: "A preposição de 'result' é 'in'." }, { text: "Demographics is lead.", isCorrect: false, feedback: "Construção incorreta." }] },
        { npcName: "Journalist", npcMessage: "Do you believe corporate sustainability is a trend or a necessity?", options: [{ text: "It is definitely a necessity; ignoring it will result in severe long-term consequences.", isCorrect: true, feedback: "Uso impecável de 'result in'!" }, { text: "Sustainability lead to trend.", isCorrect: false, feedback: "Falta estrutura." }, { text: "It is pressing footprint.", isCorrect: false, feedback: "Mistura de termos." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Carbon footprint' mede:", options: [{ label: "O volume de gases de efeito estufa emitidos por atividades humanas", isCorrect: true }, { label: "O tamanho do sapato de um trabalhador de mina", isCorrect: false }, { label: "A quantidade de carvão vendida", isCorrect: false }] },
        { question: "2. O verbo 'lead' exige a preposição:", options: [{ label: "to (lead to)", isCorrect: true }, { label: "in (lead in)", isCorrect: false }, { label: "at (lead at)", isCorrect: false }] },
        { question: "3. 'Result' exige a preposição:", options: [{ label: "in (result in)", isCorrect: true }, { label: "to (result to)", isCorrect: false }, { label: "on (result on)", isCorrect: false }] },
        { question: "4. 'Sustainability' refere-se ao desenvolvimento que:", options: [{ label: "Atende às necessidades do presente sem comprometer as gerações futuras", isCorrect: true }, { label: "Destrói florestas para criar indústrias", isCorrect: false }, { label: "Aumenta o consumo de plástico desnecessário", isCorrect: false }] },
        { question: "5. 'A pressing problem' significa um problema que:", options: [{ label: "Precisa de solução urgente", isCorrect: true }, { label: "Foi resolvido no passado", isCorrect: false }, { label: "Ninguém se importa em resolver", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 4: ARGUMENTATION, DEBATES & ACADEMIC TEXTS (MÓDULOS 13 A 16)
// ------------------------------------------

const MODULO_EN_B2_13 = {
    id: "en_b2_mod_13",
    title: "Academic Connectors & Text Cohesion",
    section: 4,
    sectionTitle: "Argumentation, Debates & Academic Texts",
    level: "B2",
    xpReward: 220,
    stage1_context: {
        audioGuide: "Furthermore, the data indicates a strong correlation. Nevertheless, further research is required.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Utilizar conectores acadêmicos de alta coesão e sofisticação (furthermore, moreover, nevertheless, provided that) em ensaios e debates."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Furthermore / Moreover", romaji: "/ˈfɜːrðərmɔːr / mɔːrˈoʊvər/", translation: "Além disso / Ademais (conectores de adição formal)", timeContext: "Coesão textual acadêmica de adição." },
        { type: "vocab", kanji: "Nevertheless / In light of", romaji: "/ˌnevərðəˈles/", translation: "Não obstante, no entanto / Em vista de, diante de", timeContext: "Conectores de concessão e evidência." },
        { type: "grammar_pill", title: "Conectores de Adição Formal: 'Furthermore' & 'Moreover'", rule: "Para adicionar um argumento de peso em um ensaio ou discurso acadêmico, usam-se 'Furthermore' ou 'Moreover' seguidos de vírgula no início da oração.", formula: "[Argumento 1]. Furthermore, + [Argumento 2]", example: "The strategy is cost-effective. FURTHERMORE, it saves time." },
        { type: "grammar_pill", title: "Concessão Acadêmica: 'Nevertheless' & 'Nonetheless'", rule: "'Nevertheless' é um sinônimo extremamente formal de 'However' (No entanto/Não obstante).", formula: "[Fato A]. Nevertheless, + [Fato B de oposição]", example: "The test was difficult. NEVERTHELESS, most students passed." }
    ],
    stage3_practice: [
        { question: "1. Qual conector de adição formal substitui 'In addition' em um artigo científico?", options: [{ label: "Furthermore / Moreover", isCorrect: true }, { label: "Besides that informal", isCorrect: false }, { label: "Although", isCorrect: false }] },
        { question: "2. O conector 'Nevertheless' é um sinônimo formalíssimo de:", options: [{ label: "However / Nonetheless (No entanto)", isCorrect: true }, { label: "Because (Porque)", isCorrect: false }, { label: "Therefore (Portanto)", isCorrect: false }] },
        { question: "3. Complete a frase acadêmica: 'The study had limitations. ___, the findings provide valuable insights.'", options: [{ label: "Nevertheless", isCorrect: true }, { label: "Furthermore", isCorrect: false }, { label: "In addition to", isCorrect: false }] },
        { question: "4. Qual a pontuação correta ao usar 'Furthermore' no início de uma frase?", options: [{ label: "Furthermore, + [oração]", isCorrect: true }, { label: "Furthermore + [sem vírgula]", isCorrect: false }, { label: "Furthermore. + [maiúscula]", isCorrect: false }] },
        { question: "5. 'In light of the new evidence' traduz-se como:", options: [{ label: "Diante das / Em vista das novas evidências", isCorrect: true }, { label: "Na luz da lâmpada", isCorrect: false }, { label: "Apesar de não ter evidências", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "The proposal is financially viable; furthermore, it aligns with our long-term goals.", translation: "A proposta é financeiramente viável; além disso, ela se alinha com nossos objetivos de longo prazo.", chunks: ["The", "proposal", "is", "financially", "viable", ";", "furthermore", ",", "it", "aligns", "with", "our", "long-term", "goals", "."] },
        { sentenceEn: "The results were inconclusive; nevertheless, the research will continue.", translation: "Os resultados foram inconclusivos; não obstante, a pesquisa continuará.", chunks: ["The", "results", "were", "inconclusive", ";", "nevertheless", ",", "the", "research", "will", "continue", "."] }
    ],
    stage4_dialog: [
        { npcName: "Professor", npcMessage: "What is your main argument regarding the expansion of AI?", options: [{ text: "AI increases productivity; furthermore, it opens new avenues for scientific research.", isCorrect: true, feedback: "Uso impecável de 'furthermore' para somar argumentos!" }, { text: "AI is good, nevertheless it is good.", isCorrect: false, feedback: "'Nevertheless' indica oposição, não adição." }, { text: "Furthermore it good.", isCorrect: false, feedback: "Falta estrutura gramatical." }] },
        { npcName: "Debater", npcMessage: "The economic climate is highly volatile right now.", options: [{ text: "That is true. Nevertheless, companies must continue to innovate to survive.", isCorrect: true, feedback: "Contraponto acadêmico perfeito com 'Nevertheless'!" }, { text: "Furthermore we stop investing.", isCorrect: false, feedback: "Uso inadequado de 'furthermore'." }, { text: "Nevertheless, so yes.", isCorrect: false, feedback: "Sem sentido." }] },
        { npcName: "Researcher", npcMessage: "How should we proceed after the failed experiment?", options: [{ text: "In light of the recent data, we should adjust our hypothesis and retest.", isCorrect: true, feedback: "Uso brilhante de 'In light of' para fundamentar a ação!" }, { text: "In light data we test.", isCorrect: false, feedback: "Faltam artigos." }, { text: "Moreover we cancel.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Furthermore' e 'Moreover' são conectores que indicam:", options: [{ label: "Adição de argumentos formais (Além disso)", isCorrect: true }, { label: "Oposição e contraste (Por outro lado)", isCorrect: false }, { label: "Causa e efeito (Portanto)", isCorrect: false }] },
        { question: "2. 'Nevertheless' introduz uma ideia de:", options: [{ label: "Concessão / Contraste (No entanto / Não obstante)", isCorrect: true }, { label: "Exemplo prático", isCorrect: false }, { label: "Conclusão de cálculo", isCorrect: false }] },
        { question: "3. 'In light of' significa:", options: [{ label: "Em vista de / Diante de (considerando determinado fato)", isCorrect: true }, { label: "Acendendo a luz de", isCorrect: false }, { label: "No escuro sem", isCorrect: false }] },
        { question: "4. Em artigos científicos em inglês, 'Besides' informal deve ser substituído por:", options: [{ label: "Furthermore / In addition", isCorrect: true }, { label: "But / So", isCorrect: false }, { label: "Anyway", isCorrect: false }] },
        { question: "5. Escolha a frase acadêmica com coesão textualmente perfeita:", options: [{ label: "The experiment yielded positive results. Moreover, no side effects were observed.", isCorrect: true }, { label: "The experiment was good. Besides it was good.", isCorrect: false }, { label: "Furthermore the experiment failed.", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_14 = {
    id: "en_b2_mod_14",
    title: "Defending Thesis & Points of View",
    section: 4,
    sectionTitle: "Argumentation, Debates & Academic Texts",
    level: "B2",
    xpReward: 230,
    stage1_context: {
        audioGuide: "It can be argued that technology isolates individuals. However, it is undeniable that it also connects people globally.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Construir e defender teses acadêmicas usando estruturas impessoais de argumentação (It can be argued that, It is undeniable that, In light of the evidence)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "It can be argued that / It is undeniable that", romaji: "/ɪt kæn biː ˈɑːrɡjuːd ðæt/", translation: "Pode-se argumentar que / É inegável que", timeContext: "Estruturas impessoais de defesa de tese." },
        { type: "vocab", kanji: "In light of the evidence / Assert that", romaji: "/əˈsɜːrt/", translation: "À luz das evidências / Afirmar/Sustentar categoricamente", timeContext: "Vocabulário de debates formais e artigos acadêmicos." },
        { type: "grammar_pill", title: "Argumentação Impessoal em Ensaios", rule: "Em textos de nível B2/C1, evita-se o uso excessivo de 'I think'. Prefere-se a Voz Passiva Impessoal para conferir autoridade científica à tese.", formula: "It is + [argued / believed / established / undeniable] + THAT + Clause", example: "IT IS UNDENIABLE THAT education changes lives." },
        { type: "grammar_pill", title: "O Verbo 'Assert'", rule: "'Assert' significa afirmar ou sustentar uma tese com convicção e evidências.", formula: "Subject + assert that + Clause", example: "The author ASSERTS THAT economic growth is slowing down." }
    ],
    stage3_practice: [
        { question: "1. Como formular uma tese impessoal e acadêmica para abrir um ensaio?", options: [{ label: "It can be argued that urban green spaces improve mental health.", isCorrect: true }, { label: "I think green space is good for head.", isCorrect: false }, { label: "Me argue that park is nice.", isCorrect: false }] },
        { question: "2. Qual a expressão que indica uma verdade irrefutável suportada por dados?", options: [{ label: "It is undeniable that...", isCorrect: true }, { label: "It is doubtable that...", isCorrect: false }, { label: "Maybe or not that...", isCorrect: false }] },
        { question: "3. Complete a frase acadêmica: 'The researchers ___ that the new drug will revolutionize treatment.'", options: [{ label: "assert", isCorrect: true }, { label: "asserting to", isCorrect: false }, { label: "are assert", isCorrect: false }] },
        { question: "4. O que significa 'In light of the evidence'?", options: [{ label: "À luz / Em vista das evidências apresentadas", isCorrect: true }, { label: "Sem nenhuma prova concreta", isCorrect: false }, { label: "Na escuridão dos fatos", isCorrect: false }] },
        { question: "5. 'It is widely believed that' introduz:", options: [{ label: "Uma crença amplamente aceita pela sociedade ou comunidade científica", isCorrect: true }, { label: "Uma opinião secreta de um único indivíduo", isCorrect: false }, { label: "Uma mentira desmascarada", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "It can be argued that social media has reshaped modern communication.", translation: "Pode-se argumentar que as redes sociais remodelaram a comunicação moderna.", chunks: ["It", "can", "be", "argued", "that", "social", "media", "has", "reshaped", "modern", "communication", "."] },
        { sentenceEn: "It is undeniable that global temperatures have risen over the last century.", translation: "É inegável que as temperaturas globais subiram ao longo do último século.", chunks: ["It", "is", "undeniable", "that", "global", "temperatures", "have", "risen", "over", "the", "last", "century", "."] }
    ],
    stage4_dialog: [
        { npcName: "Debate Moderator", npcMessage: "What is your stance on remote education versus traditional schooling?", options: [{ text: "It can be argued that remote learning offers flexibility, though traditional schooling builds vital social skills.", isCorrect: true, feedback: "Defesa de tese equilibrada, madura e muito bem estruturada!" }, { text: "I think online school good.", isCorrect: false, feedback: "Muito simplório para B2." }, { text: "Me argue online better.", isCorrect: false, feedback: "Sintaxe incorreta." }] },
        { npcName: "Academic Panelist", npcMessage: "Is there sufficient proof that climate change affects biodiversity?", options: [{ text: "In light of the evidence, it is undeniable that habitat loss is accelerating extinction rates.", isCorrect: true, feedback: "Articulação acadêmica irrefutável com 'In light of the evidence'!" }, { text: "It is deny that climate change bad.", isCorrect: false, feedback: "Use 'undeniable'." }, { text: "I assert evidence good.", isCorrect: false, feedback: "Fraco." }] },
        { npcName: "Journal Referee", npcMessage: "Does your paper provide a clear conclusion on economic growth?", options: [{ text: "Yes, we assert that sustainable investments lead to long-term stability.", isCorrect: true, feedback: "Defesa de conclusão precisa com o verbo 'assert'!" }, { text: "We think stability comes.", isCorrect: false, feedback: "Prefira 'assert' em artigos." }, { text: "It can argue stability.", isCorrect: false, feedback: "Construção incorreta." }] }
    ],
    stage5_quiz: [
        { question: "1. 'It can be argued that...' é uma estrutura usada para:", options: [{ label: "Apresentar uma tese ou ponto de vista de forma impessoal e acadêmica", isCorrect: true }, { label: "Discutir agressivamente em um bar", isCorrect: false }, { label: "Declarar amor por alguém", isCorrect: false }] },
        { question: "2. 'It is undeniable that' transmite a ideia de que um fato é:", options: [{ label: "Inquestionável / Irrefutável", isCorrect: true }, { label: "Duvidoso e incerto", isCorrect: false }, { label: "Totalmente falso", isCorrect: false }] },
        { question: "3. 'Assert that' significa:", options: [{ label: "Afirmar / Sustentar categoricamente uma posição", isCorrect: true }, { label: "Duvidar de um fato", isCorrect: false }, { label: "Pedir desculpas por um erro", isCorrect: false }] },
        { question: "4. Por que ensaios acadêmicos evitam 'I think' no nível B2?", options: [{ label: "Para tornar o texto objetivo, impessoal e baseado em evidências", isCorrect: true }, { label: "Porque a palavra 'think' foi banida do inglês", isCorrect: false }, { label: "Porque 'I' é uma letra proibida em ensaios", isCorrect: false }] },
        { question: "5. 'In light of the evidence' deve ser seguido de:", options: [{ label: "Uma oração baseada nos dados ou fatos observados", isCorrect: true }, { label: "Um verbo no imperativo", isCorrect: false }, { label: "Uma pergunta de incerteza", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_15 = {
    id: "en_b2_mod_15",
    title: "Literary Analysis & Reading Native Texts",
    section: 4,
    sectionTitle: "Argumentation, Debates & Academic Texts",
    level: "B2",
    xpReward: 240,
    stage1_context: {
        audioGuide: "The novel explores themes of isolation. The author employs vivid metaphors to convey a sense of longing.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Analisar obras literárias, tom de narrativa, metáforas e voz de autores nativos em textos clássicos e modernos (employ metaphors, convey a sense of, underlying theme)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Convey a sense of / Underlying theme", romaji: "/kənˈveɪ/", translation: "Transmitir a sensação de / Tema subjacente/profundo", timeContext: "Vocabulário de crítica literária e análise textual." },
        { type: "vocab", kanji: "Employ metaphors / Narrative voice", romaji: "/ɪmˈplɔɪ ˈmetəfɔːrz/", translation: "Empregar/Usar metáforas / Voz narrativa", timeContext: "Termos técnicos de teoria literária." },
        { type: "grammar_pill", title: "O Verbo 'Convey' em Análise de Texto", rule: "Usa-se 'convey' em vez de 'show' ou 'tell' para descrever como um autor transmite sentimentos, ideias ou atmosferas em um texto.", formula: "Author / Passage + convey + [Emotion / Meaning]", example: "The poem CONVEYS A SENSE OF MELANCHOLY." },
        { type: "grammar_pill", title: "'Employ' como uso de recursos estilísticos", rule: "Em análises literárias, 'employ' significa utilizar conscientemente figuras de linguagem ou técnicas de escrita.", formula: "Author + employ + [Literary Device / Metaphor / Symbolism]", example: "Shakespeare EMPLOYS SYMBOLISM to highlight the tragedy." }
    ],
    stage3_practice: [
        { question: "1. Qual o verbo acadêmico ideal para dizer que um autor 'transmite uma sensação de esperança'?", options: [{ label: "The author conveys a sense of hope.", isCorrect: true }, { label: "The author gives a sense of hope.", isCorrect: false }, { label: "The author carries a sense of hope.", isCorrect: false }] },
        { question: "2. O termo 'underlying theme' refere-se ao:", options: [{ label: "Tema profundo ou mensagem subjacente da obra", isCorrect: true }, { label: "Título impresso na capa do livro", isCorrect: false }, { label: "Índice de capítulos", isCorrect: false }] },
        { question: "3. Complete a análise literária: 'The poet ___ vivid imagery to evoke strong emotions.'", options: [{ label: "employs", isCorrect: true }, { label: "employing", isCorrect: false }, { label: "is employ", isCorrect: false }] },
        { question: "4. O que significa 'narrative voice' em um romance?", options: [{ label: "A voz e a perspectiva de quem conta a história (narrador)", isCorrect: true }, { label: "O volume de som do audiobook", isCorrect: false }, { label: "A voz do autor falando em um podcast", isCorrect: false }] },
        { question: "5. 'Vivid metaphors' são metáforas:", options: [{ label: "Vivas, marcantes e expressivas", isCorrect: true }, { label: "Confusas e sem sentido", isCorrect: false }, { label: "Escritas em cores brilhantes", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "The author employs vivid metaphors to convey a sense of nostalgia.", translation: "O autor emprega metáforas vivas para transmitir uma sensação de nostalgia.", chunks: ["The", "author", "employs", "vivid", "metaphors", "to", "convey", "a", "sense", "of", "nostalgia", "."] },
        { sentenceEn: "The underlying theme of the novel is the struggle for identity.", translation: "O tema subjacente do romance é a luta pela identidade.", chunks: ["The", "underlying", "theme", "of", "the", "novel", "is", "the", "struggle", "for", "identity", "."] }
    ],
    stage4_dialog: [
        { npcName: "Literary Critic", npcMessage: "How does George Orwell build tension in his masterpiece?", options: [{ text: "He employs stark imagery and a cynical narrative voice to convey atmosphere.", isCorrect: true, feedback: "Análise literária de altíssimo nível B2!" }, { text: "He shows tension with words.", isCorrect: false, feedback: "Muito simplório." }, { text: "He convey sense of tension.", isCorrect: false, feedback: "Flexione o verbo: 'conveys'." }] },
        { npcName: "Book Club Host", npcMessage: "What was the main message behind the protagonist's journey?", options: [{ text: "The underlying theme explores how ambition can lead to self-destruction.", isCorrect: true, feedback: "Excelente identificação de 'underlying theme'!" }, { text: "The theme is ambition bad.", isCorrect: false, feedback: "Fraco." }, { text: "It employs theme story.", isCorrect: false, feedback: "Uso incorreto." }] },
        { npcName: "Professor", npcMessage: "What impression did you get from the opening paragraph?", options: [{ text: "The descriptive passage conveys a deep sense of isolation and despair.", isCorrect: true, feedback: "Uso impecável do verbo 'conveys'!" }, { text: "Paragraph conveys isolation.", isCorrect: false, feedback: "Falta o artigo 'a deep sense of'." }, { text: "It employ isolation.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. O verbo 'convey' em crítica literária significa:", options: [{ label: "Transmitir / Comunicar um sentimento ou ideia através do texto", isCorrect: true }, { label: "Transportar passageiros de ônibus", isCorrect: false }, { label: "Comprar um livro caro", isCorrect: false }] },
        { question: "2. 'Underlying theme' é a mensagem que está:", options: [{ label: "Nas entrelinhas / Subjacente à trama principal", isCorrect: true }, { label: "No rodapé da página", isCorrect: false }, { label: "Na dedicatória do livro", isCorrect: false }] },
        { question: "3. 'Employ' em análise de texto é equivalente a:", options: [{ label: "Utilizar / Fazer uso estilístico de um recurso", isCorrect: true }, { label: "Demitir um autor", isCorrect: false }, { label: "Contratar um funcionário", isCorrect: false }] },
        { question: "4. 'Stark imagery' refere-se a descrições:", options: [{ label: "Austeras, marcantes e diretas", isCorrect: true }, { label: "Coloridas e alegres", isCorrect: false }, { label: "Completamente ilegíveis", isCorrect: false }] },
        { question: "5. Escolha a análise literária escrita em norma culta B2:", options: [{ label: "The poem masterfully conveys a sense of longing for the past.", isCorrect: true }, { label: "The poem gives a sense of past.", isCorrect: false }, { label: "The poem is conveying nostalgic.", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_16 = {
    id: "en_b2_mod_16",
    title: "Advanced Cause, Effect & Catalysts",
    section: 4,
    sectionTitle: "Argumentation, Debates & Academic Texts",
    level: "B2",
    xpReward: 250,
    stage1_context: {
        audioGuide: "The policy reform served as a catalyst for economic growth, stemming from years of technological innovation.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Expressar dinâmicas complexas de causa, efeito e catalisadores históricos/sociais (serve as a catalyst, stem from, as a consequence of, give rise to)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Serve as a catalyst / Stem from", romaji: "/sɜːrv æz ə ˈkætəlɪst/", translation: "Servir como um catalisador (impulsionador) / Derivar de, originar-se de", timeContext: "Conexões causais profundas em debates." },
        { type: "vocab", kanji: "Give rise to / As a consequence of", romaji: "/ɡɪv raɪz tuː/", translation: "Dar origem a / Como consequência de", timeContext: "Relações de efeito em estudos de caso." },
        { type: "grammar_pill", title: "Causas Originais: 'Stem from'", rule: "Usa-se 'stem from' para explicar a origem primária de um fenómeno ou problema presente.", formula: "Effect + stem from + Root Cause", example: "His anxiety STEMS FROM past traumatic experiences." },
        { type: "grammar_pill", title: "Ação Catalisadora: 'Serve as a catalyst for'", rule: "Para descrever um evento que acelerou dramaticamente uma transformação social ou econômica, usa-se 'serve as a catalyst for'.", formula: "Event + serve as a catalyst for + Transformation", example: "The new law SERVED AS A CATALYST FOR clean energy adoption." }
    ],
    stage3_practice: [
        { question: "1. Como expressar que a inovação 'serviu como um catalisador' para o desenvolvimento?", options: [{ label: "Innovation served as a catalyst for growth.", isCorrect: true }, { label: "Innovation was a catalyst to growth.", isCorrect: false }, { label: "Innovation made a catalyst of growth.", isCorrect: false }] },
        { question: "2. O Phrasal Verb 'stem from' significa:", options: [{ label: "Originar-se de / Derivar de uma causa raiz", isCorrect: true }, { label: "Desaparecer sem deixar vestígios", isCorrect: false }, { label: "Cortar uma árvore", isCorrect: false }] },
        { question: "3. Complete a frase acadêmica: 'The economic crisis gave ___ to widespread social protests.'", options: [{ label: "rise to", isCorrect: true }, { label: "raise for", isCorrect: false }, { label: "rising of", isCorrect: false }] },
        { question: "4. 'As a consequence of the pandemic' é equivalente a:", options: [{ label: "Como consequência da pandemia", isCorrect: true }, { label: "Antes da pandemia acontecer", isCorrect: false }, { label: "Apesar da pandemia", isCorrect: false }] },
        { question: "5. Qual a preposição correta para o verbo 'stem' no sentido causal?", options: [{ label: "from (stem from)", isCorrect: true }, { label: "to (stem to)", isCorrect: false }, { label: "of (stem of)", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "The invention of the internet served as a catalyst for global connectivity.", translation: "A invenção da internet serviu como um catalisador para a conectividade global.", chunks: ["The", "invention", "of", "the", "internet", "served", "as", "a", "catalyst", "for", "global", "connectivity", "."] },
        { sentenceEn: "Most of the current problems stem from poor strategic planning.", translation: "A maioria dos problemas atuais deriva de um planejamento estratégico deficiente.", chunks: ["Most", "of", "the", "current", "problems", "stem", "from", "poor", "strategic", "planning", "."] }
    ],
    stage4_dialog: [
        { npcName: "Historian", npcMessage: "What triggered the rapid industrialization of the 19th century?", options: [{ text: "The steam engine served as a catalyst for unprecedented economic growth.", isCorrect: true, feedback: "Aplicação magistral de 'served as a catalyst for'!" }, { text: "Steam engine gave rise for growth.", isCorrect: false, feedback: "A expressão correta é 'gave rise TO'." }, { text: "Growth stemmed of steam engine.", isCorrect: false, feedback: "Use 'stemmed FROM'." }] },
        { npcName: "Financial Analyst", npcMessage: "What was the root cause of the market crash?", options: [{ text: "The collapse stemmed from unregulated lending practices in the housing sector.", isCorrect: true, feedback: "Análise causal brilhante com 'stemmed from'!" }, { text: "Crash stemmed to bad loans.", isCorrect: false, feedback: "Diga 'stemmed FROM'." }, { text: "It gave rise for crash.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Sociologist", npcMessage: "How did the new policy impact urban communities?", options: [{ text: "It gave rise to new community initiatives and reduced crime rates as a consequence.", isCorrect: true, feedback: "Uso impecável de 'gave rise to' e 'as a consequence'!" }, { text: "It gave rise of crime reduction.", isCorrect: false, feedback: "Diga 'gave rise TO'." }, { text: "It served catalyst.", isCorrect: false, feedback: "Falta 'as a'." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Serve as a catalyst for' descreve algo que:", options: [{ label: "Acelera ou desencadeia uma grande transformação", isCorrect: true }, { label: "Bloqueia o progresso de um projeto", isCorrect: false }, { label: "Custa muito dinheiro", isCorrect: false }] },
        { question: "2. 'Stem from' é utilizado para revelar:", options: [{ label: "A causa primária ou a origem de um problema/fenômeno", isCorrect: true }, { label: "O resultado futuro de um investimento", isCorrect: false }, { label: "O preço de uma mercadoria", isCorrect: false }] },
        { question: "3. 'Give rise to' significa:", options: [{ label: "Dar origem a / Causar o aparecimento de algo", isCorrect: true }, { label: "Subir em uma montanha", isCorrect: false }, { label: "Aumentar os salários de todos", isCorrect: false }] },
        { question: "4. 'As a consequence of' exige qual classe de palavras logo após?", options: [{ label: "Substantivo ou grupo nominal", isCorrect: true }, { label: "Verbo no futuro com will", isCorrect: false }, { label: "Um pronome interrogativo", isCorrect: false }] },
        { question: "5. Escolha a frase com norma culta perfeita:", options: [{ label: "Many health issues stem from lack of sleep.", isCorrect: true }, { label: "Many health issues stem to lack of sleep.", isCorrect: false }, { label: "Many health issues stem of lack of sleep.", isCorrect: false }] }
    ]
};

// ------------------------------------------
// SEÇÃO 5: TOTAL IMMERSION & MASTERY (MÓDULOS 17 A 20)
// ------------------------------------------

const MODULO_EN_B2_17 = {
    id: "en_b2_mod_17",
    title: "Global English Dialects & Accents",
    section: 5,
    sectionTitle: "Total Immersion & Mastery",
    level: "B2",
    xpReward: 250,
    stage1_context: {
        audioGuide: "Whether you say 'apartment' in America or 'flat' in Britain, understanding global dialects expands your fluency.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Diferenciar variações de vocabulário, ortografia e sotaques entre o Inglês Americano, Britânico e Australiano (flat vs. apartment, lorry vs. truck, mate)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Flat / Apartment", romaji: "/flæt / əˈpɑːrtmənt/", translation: "Apartamento (UK) / Apartamento (US)", timeContext: "Diferenças de vocabulário entre variantes de inglês." },
        { type: "vocab", kanji: "Lorry / Truck / Mate", romaji: "/ˈlɔːri / trʌk/", translation: "Caminhão (UK) / Caminhão (US) / Amigo, parceiro (UK/AU)", timeContext: "Termos regionais do cotidiano." },
        { type: "grammar_pill", title: "Diferenças Gramaticais: 'Have got' vs. 'Have'", rule: "No inglês britânico, é muito comum usar 'I've got' para posse no presente. No americano, prefere-se 'I have'.", formula: "UK: Subject + have got + Object | US: Subject + have + Object", example: "UK: I've got a new car. | US: I have a new car." },
        { type: "grammar_pill", title: "Ortografia: -ize vs. -ise & -or vs. -our", rule: "EUA usam -ize e -or (organize, color). Reino Unido usa -ise e -our (organise, colour). Ambas são corretas no padrão internacional.", formula: "US: color, organize | UK: colour, organise", example: "US: Labor and Honor. | UK: Labour and Honour." }
    ],
    stage3_practice: [
        { question: "1. Como se diz 'caminhão' no inglês britânico e no americano, respectivamente?", options: [{ label: "Lorry (UK) / Truck (US)", isCorrect: true }, { label: "Truck (UK) / Lorry (US)", isCorrect: false }, { label: "Car (UK) / Van (US)", isCorrect: false }] },
        { question: "2. Qual a grafia britânica correta para a palavra 'color'?", options: [{ label: "colour", isCorrect: true }, { label: "colore", isCorrect: false }, { label: "colorr", isCorrect: false }] },
        { question: "3. O termo 'mate' é amplamente usado na Austrália e Reino Unido para significar:", options: [{ label: "Friend / Pal (Amigo/Parceiro)", isCorrect: true }, { label: "Enemy (Inimigo)", isCorrect: false }, { label: "Teacher (Professor)", isCorrect: false }] },
        { question: "4. No inglês britânico, 'gasoline' (US) é chamada de:", options: [{ label: "petrol", isCorrect: true }, { label: "diesel", isCorrect: false }, { label: "oil", isCorrect: false }] },
        { question: "5. 'I've got a flat in London' significa que a pessoa tem:", options: [{ label: "Um apartamento em Londres", isCorrect: true }, { label: "Um pneu furado em Londres", isCorrect: false }, { label: "Uma foto plana de Londres", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "He parked his lorry outside his flat in London.", translation: "Ele estacionou seu caminhão do lado de fora do seu apartamento em Londres.", chunks: ["He", "parked", "his", "lorry", "outside", "his", "flat", "in", "London", "."] },
        { sentenceEn: "G'day mate, welcome to Sydney!", translation: "Bom dia parceiro, bem-vindo a Sydney!", chunks: ["G'day", "mate", ",", "welcome", "to", "Sydney", "!"] }
    ],
    stage4_dialog: [
        { npcName: "Londoner", npcMessage: "Mind if I take the lift to the top floor?", options: [{ text: "Not at all! In America we call it the elevator, but go right ahead.", isCorrect: true, feedback: "Excelente domínio de vocabulário comparativo UK/US!" }, { text: "I take lift with hands.", isCorrect: false, feedback: "'Lift' significa elevador no Reino Unido." }, { text: "No take lift.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Australian", npcMessage: "G'day mate! Are you coming to the barbie this afternoon?", options: [{ text: "Sounds great, mate! I'd love to join your barbecue.", isCorrect: true, feedback: "Compreensão perfeita do dialeto e gíria australiana 'barbie' (churrasco)!" }, { text: "I don't play with Barbie dolls.", isCorrect: false, feedback: "'Barbie' na Austrália é churrasco (barbecue)." }, { text: "G'day is bad day.", isCorrect: false, feedback: "'G'day' significa Good day." }] },
        { npcName: "American", npcMessage: "Where can I find the restroom around here?", options: [{ text: "In Britain we say 'toilet' or 'loo', but there's one down the hall.", isCorrect: true, feedback: "Conhecimento cultural e dialetal irretocável!" }, { text: "Restroom is for sleep.", isCorrect: false, feedback: "'Restroom' nos EUA é banheiro." }, { text: "You can't rest here.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. No Reino Unido, 'elevator' é chamado de:", options: [{ label: "lift", isCorrect: true }, { label: "escalator", isCorrect: false }, { label: "stairs", isCorrect: false }] },
        { question: "2. Na Austrália, 'barbie' é um termo coloquial para:", options: [{ label: "Barbecue (Churrasco)", isCorrect: true }, { label: "Boneca infantil", isCorrect: false }, { label: "Barbeiro", isCorrect: false }] },
        { question: "3. 'Subway' (trem subterrâneo nos EUA) é chamado em Londres de:", options: [{ label: "The Tube / The Underground", isCorrect: true }, { label: "The Metro Train", isCorrect: false }, { label: "The Railway", isCorrect: false }] },
        { question: "4. Qual das opções representa ortografia americana e britânica corretas?", options: [{ label: "Organize (US) / Organise (UK)", isCorrect: true }, { label: "Organise (US) / Organize (UK)", isCorrect: false }, { label: "Organiz (US) / Organiss (UK)", isCorrect: false }] },
        { question: "5. 'Cheerio' é uma despedida informal típica do:", options: [{ label: "Inglês Britânico", isCorrect: true }, { label: "Inglês Americano do Texas", isCorrect: false }, { label: "Inglês Canadense", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_18 = {
    id: "en_b2_mod_18",
    title: "Onomatopoeia, Sound Effects & Vivid Descriptions",
    section: 5,
    sectionTitle: "Total Immersion & Mastery",
    level: "B2",
    xpReward: 260,
    stage1_context: {
        audioGuide: "The bacon began to sizzle in the pan while he whispered a secret. The sudden clatter startled everyone.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Enriquecer a descrição de histórias usando onomatopeias e verbos de som expressivos (buzz, clatter, whisper, sizzle, mumble, creak)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Sizzle / Whisper / Clatter", romaji: "/ˈsɪzl/", translation: "Chiar (fritar) / Sussurrar / Barulho de objetos colidindo", timeContext: "Verbos de som e descrição sensorial avançada." },
        { type: "vocab", kanji: "Mumble / Creak / Buzz", romaji: "/ˈmʌmbl/", translation: "Resmungar, falar entre os dentes / Ranger / Zumbir", timeContext: "Sensações auditivas em narrativa fluida." },
        { type: "grammar_pill", title: "Sensações Auditivas na Narrativa", rule: "No nível B2/C1, evita-se usar verbos genéricos como 'said softly' ou 'made a noise'. Substituem-se por verbos de som específicos como 'whispered', 'mumbled', 'clattered'.", formula: "Subject + Sound Verb (whispered / mumbled) + Clause", example: "He WHISPERED the password in her ear." },
        { type: "grammar_pill", title: "Participios como Adjetivos de Som", rule: "Os verbos de som podem vir no particípio presente (-ing) para descrever a atmosfera contínua de um ambiente.", formula: "The + Sound Verb(-ing) + Noun", example: "The SIZZLING bacon smelled delicious. | The CREAKING door scared us." }
    ],
    stage3_practice: [
        { question: "1. Qual o verbo de som correto para o barulho de bacon ou carne fritando na frigideira?", options: [{ label: "sizzle", isCorrect: true }, { label: "whisper", isCorrect: false }, { label: "mumble", isCorrect: false }] },
        { question: "2. Como se diz 'ranger' (como uma porta velha de madeira abrindo devagar)?", options: [{ label: "creak", isCorrect: true }, { label: "buzz", isCorrect: false }, { label: "clatter", isCorrect: false }] },
        { question: "3. Complete a frase narrativa: 'He was so nervous that he began to ___ his words incoherentely.'", options: [{ label: "mumble", isCorrect: true }, { label: "sizzle", isCorrect: false }, { label: "clatter", isCorrect: false }] },
        { question: "4. O barulho de pratos e talheres caindo no chão com estrondo chama-se:", options: [{ label: "clatter", isCorrect: true }, { label: "whisper", isCorrect: false }, { label: "buzz", isCorrect: false }] },
        { question: "5. O som emitido por abelhas ou um telefone no modo vibracão é:", options: [{ label: "buzz", isCorrect: true }, { label: "sizzle", isCorrect: false }, { label: "creak", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "The old wooden door began to creak in the middle of the night.", translation: "A velha porta de madeira começou a ranger no meio da noite.", chunks: ["The", "old", "wooden", "door", "began", "to", "creak", "in", "the", "middle", "of", "the", "night", "."] },
        { sentenceEn: "She whispered the secret so that nobody else could hear.", translation: "Ela sussurrou o segredo para que mais ninguém pudesse ouvir.", chunks: ["She", "whispered", "the", "secret", "so", "that", "nobody", "else", "could", "hear", "."] }
    ],
    stage4_dialog: [
        { npcName: "Storyteller", npcMessage: "How was the atmosphere in the haunted mansion?", options: [{ text: "Spooky! Every time we walked, the floorboards would creak loudly.", isCorrect: true, feedback: "Descrição sensorial e narrativa magistral com 'creak'!" }, { text: "The floorboards sizzled.", isCorrect: false, feedback: "'Sizzle' é para frituras ou calor intenso." }, { text: "Floorboards whispered loud.", isCorrect: false, feedback: "Verbo incorreto." }] },
        { npcName: "Chef", npcMessage: "Is the steak ready to be served?", options: [{ text: "Almost! It is still sizzling on the grill.", isCorrect: true, feedback: "Uso impecável de 'sizzling'!" }, { text: "It is mumbling on grill.", isCorrect: false, feedback: "'Mumble' é resmungar/falar baixo." }, { text: "Steak is creaking.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Teacher", npcMessage: "Why did you ask the student to speak up?", options: [{ text: "Because he was mumbling and nobody could understand his answer.", isCorrect: true, feedback: "Diferenciação vocal perfeita com 'mumbling'!" }, { text: "Because he was buzzing loudly.", isCorrect: false, feedback: "'Buzz' é zumbido." }, { text: "He was clattering.", isCorrect: false, feedback: "Incorreto." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Whisper' significa:", options: [{ label: "Sussurrar / Falar bem baixinho ao ouvido", isCorrect: true }, { label: "Gritar bem alto no estádio", isCorrect: false }, { label: "Cantar ópera", isCorrect: false }] },
        { question: "2. 'Sizzle' é associado a:", options: [{ label: "Alimentos fritando em óleo ou grelha quente", isCorrect: true }, { label: "Passos na neve", isCorrect: false }, { label: "O vento nas árvores", isCorrect: false }] },
        { question: "3. 'Mumble' significa:", options: [{ label: "Falar de forma indistinta, resmungada ou entre os dentes", isCorrect: true }, { label: "Falar com clareza absoluta", isCorrect: false }, { label: "Escrever uma carta formal", isCorrect: false }] },
        { question: "4. 'Clatter' descreve o som de:", options: [{ label: "Objetos duros (como pratos, talheres ou louças) se chocando", isCorrect: true }, { label: "Um gato miando", isCorrect: false }, { label: "Água correndo no rio", isCorrect: false }] },
        { question: "5. 'Buzz' é o som produzido por:", options: [{ label: "Insetos como abelhas ou aparelhos em vibração", isCorrect: true }, { label: "Portas de madeira rangendo", isCorrect: false }, { label: "Chuva caindo no telhado", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_19 = {
    id: "en_b2_mod_19",
    title: "Cultural Etiquette & Philosophical Concepts",
    section: 5,
    sectionTitle: "Total Immersion & Mastery",
    level: "B2",
    xpReward: 270,
    stage1_context: {
        audioGuide: "Achieving work-life balance and practicing mindfulness are key to developing cultural intelligence.",
        missionTitle: "Objetivo do Módulo",
        missionDescription: "Discutir conceitos filosóficos, inteligência cultural, bem-estar e equilíbrio entre vida pessoal e profissional (mindfulness, work-life balance, cultural intelligence)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Work-life balance / Mindfulness", romaji: "/wɜːrk laɪf ˈbæləns/", translation: "Equilíbrio entre vida pessoal e trabalho / Atenção plena", timeContext: "Conceitos modernos de saúde mental e estilo de vida." },
        { type: "vocab", kanji: "Cultural intelligence / Cultural faux pas", romaji: "/ˈkʌltʃərəl ɪnˈtelɪdʒəns/", translation: "Inteligência cultural / Gafe cultural", timeContext: "Etiqueta e diplomacia interpessoal global." },
        { type: "grammar_pill", title: "Discussão de Conceitos Abstratos", rule: "Para articular visões filosóficas e culturais avançadas, combinam-se substantivos abstratos com conectores de utilidade social.", formula: "Practicing + [Substantivo Abstrato] + leads to / enhances + [Benefício]", example: "PRACTICING MINDFULNESS ENHANCES emotional resilience." },
        { type: "grammar_pill", title: "A Expressão 'Commit a faux pas'", rule: "'Faux pas' (do francês, incorporado ao inglês) significa uma gafe social ou violação de etiqueta. Usa-se com o verbo 'commit'.", formula: "Commit a + cultural faux pas", example: "He COMMITTED A CULTURAL FAUX PAS by wearing shoes indoors." }
    ],
    stage3_practice: [
        { question: "1. O que significa a expressão 'work-life balance'?", options: [{ label: "Equilíbrio saudável entre o trabalho e a vida pessoal", isCorrect: true }, { label: "Trabalhar 24 horas por dia sem parar", isCorrect: false }, { label: "Demandar demissão do emprego", isCorrect: false }] },
        { question: "2. O termo de origem francesa 'faux pas' incorporado ao inglês significa:", options: [{ label: "Uma gafe ou deslize social de etiqueta", isCorrect: true }, { label: "Um passo de dança perfeito", isCorrect: false }, { label: "Um prato de comida refinado", isCorrect: false }] },
        { question: "3. Complete a frase sobre inteligência cultural: 'Developing cultural ___ is essential for global leaders.'", options: [{ label: "intelligence", isCorrect: true }, { label: "intelligently", isCorrect: false }, { label: "intellectualism", isCorrect: false }] },
        { question: "4. 'Mindfulness' refere-se à prática de:", options: [{ label: "Atenção plena e consciência no momento presente", isCorrect: true }, { label: "Esquecimento de compromissos", isCorrect: false }, { label: "Aprender matemática rápida", isCorrect: false }] },
        { question: "5. Qual o verbo correto para acompanhar 'a cultural faux pas'?", options: [{ label: "commit", isCorrect: true }, { label: "make", isCorrect: false }, { label: "do", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Maintaining a healthy work-life balance is crucial for avoiding burnout.", translation: "Manter um equilíbrio saudável entre vida e trabalho é crucial para evitar a exaustão (burnout).", chunks: ["Maintaining", "a", "healthy", "work-life", "balance", "is", "crucial", "for", "avoiding", "burnout", "."] },
        { sentenceEn: "Understanding local customs helps travelers avoid committing a cultural faux pas.", translation: "Compreender os costumes locais ajuda os viajantes a evitar cometer uma gafe cultural.", chunks: ["Understanding", "local", "customs", "helps", "travelers", "avoid", "committing", "a", "cultural", "faux", "pas", "."] }
    ],
    stage4_dialog: [
        { npcName: "HR Manager", npcMessage: "How does our company promote employee well-being?", options: [{ text: "We encourage flexible hours to help employees achieve a better work-life balance.", isCorrect: true, feedback: "Conceito de gestão corporativa humana de alto nível B2!" }, { text: "We force people work more for balance.", isCorrect: false, feedback: "Contradição." }, { text: "Work-life balance is forbidden.", isCorrect: false, feedback: "Incorreto." }] },
        { npcName: "Expat", npcMessage: "I accidentally handed a business card with one hand in Japan!", options: [{ text: "Don't worry too much, but in Japan that is considered a minor cultural faux pas.", isCorrect: true, feedback: "Uso impecável da expressão 'cultural faux pas'!" }, { text: "You committed a faux pass yesterday.", isCorrect: false, feedback: "Ortografia correta é 'faux pas'." }, { text: "It is mindfulness error.", isCorrect: false, feedback: "Fora de contexto." }] },
        { npcName: "Wellness Coach", npcMessage: "What is the primary benefit of practicing mindfulness every morning?", options: [{ text: "It enhances focus, reduces stress, and improves emotional regulation.", isCorrect: true, feedback: "Explicação filosófica e prática impecável!" }, { text: "Mindfulness makes you sleep forever.", isCorrect: false, feedback: "Incorreto." }, { text: "It is faux pas.", isCorrect: false, feedback: "Sem sentido." }] }
    ],
    stage5_quiz: [
        { question: "1. 'Work-life balance' é fundamental para prevenir:", options: [{ label: "Burnout / Exaustão profissional", isCorrect: true }, { label: "Aumento de salário", isCorrect: false }, { label: "Férias remuneradas", isCorrect: false }] },
        { question: "2. 'Cultural faux pas' refere-se a:", options: [{ label: "Um erro ou gafe de etiqueta em outra cultura", isCorrect: true }, { label: "Uma comida típica saborosa", isCorrect: false }, { label: "Um passaporte diplomático", isCorrect: false }] },
        { question: "3. 'Mindfulness' é uma prática focada em:", options: [{ label: "Estar presente e consciente no momento atual", isCorrect: true }, { label: "Pensar obsessivamente no futuro remoto", isCorrect: false }, { label: "Memorizar listas de compras", isCorrect: false }] },
        { question: "4. Qual o verbo usado com 'cultural faux pas'?", options: [{ label: "commit (commit a faux pas)", isCorrect: true }, { label: "make (make a faux pas)", isCorrect: false }, { label: "build (build a faux pas)", isCorrect: false }] },
        { question: "5. 'Cultural intelligence' (EQ) é a habilidade de:", options: [{ label: "Relacionar-se e trabalhar eficazmente em contextos multiculturais", isCorrect: true }, { label: "Falar apenas um idioma fluentemente", isCorrect: false }, { label: "Decorar mapas geográficos", isCorrect: false }] }
    ]
};

const MODULO_EN_B2_20 = {
    id: "en_b2_mod_20",
    title: "🏆 The Great B2 Final Challenge: Capstone Project & Fluency Assessment",
    section: 5,
    sectionTitle: "Total Immersion & Mastery",
    level: "B2",
    xpReward: 300,
    stage1_context: {
        audioGuide: "Welcome to the B2 Final Examination! This comprehensive capstone project evaluates your complete mastery of English from A1 to B2.",
        missionTitle: "Desafio Final do Certificado B2",
        missionDescription: "Parabéns por alcançar a etapa final! Este simulado com 30 questões integrativas avaliará toda a sua trajetória no curso (A1, A2, B1 e B2) para a emissão do seu Certificado de Fluência."
    },
    stage2_drops: [
        { type: "vocab", kanji: "Capstone project / Fluency Certification", romaji: "/ˈkæpstoʊn/", translation: "Projeto de conclusão / Certificação de fluência", timeContext: "Avaliação final do nível Upper-Intermediate B2." },
        { type: "vocab", kanji: "Mastery / Advanced proficiency", romaji: "/ˈmæstəri/", translation: "Domínio completo / Proficiência avançada", timeContext: "Nível final atingido no curso." },
        { type: "grammar_pill", title: "Revisão Geral de Inversão & Modais Avançados", rule: "Inversão sintática (Not only did he... / Hardly had I...), modais de cortesia (Could, Would, May) e linguagem diplomática de liderança (Hedging).", formula: "Not only + Aux + S + V | I'm afraid that... is not feasible", example: "Not only did he succeed, but he also inspired everyone." },
        { type: "grammar_pill", title: "Revisão Geral de Conectores & Passiva Impessoal", rule: "Conectores formais (Furthermore, Nevertheless, Whereas, Despite) e estruturas passivas impessoais de tese (It is undeniable that...).", formula: "Despite + Noun | It can be argued that...", example: "Despite the challenges, it is undeniable that progress was made." }
    ],
    stage3_practice: [
        { question: "1. (Revisão B2) Qual a frase com a inversão sintática CORRETA?", options: [{ label: "Not only did he complete the project, but he also reduced costs.", isCorrect: true }, { label: "Not only he completed the project, but also reduced costs.", isCorrect: false }, { label: "Not only did complete he project.", isCorrect: false }] },
        { question: "2. (Revisão B2) Qual conector exige substantivo ou gerúndio logo após?", options: [{ label: "Despite", isCorrect: true }, { label: "Even though", isCorrect: false }, { label: "Whereas", isCorrect: false }] },
        { question: "3. (Revisão B2) Como recusar uma proposta financeira com máxima polidez executiva?", options: [{ label: "I'm afraid that proposal is not feasible from a financial standpoint.", isCorrect: true }, { label: "No, that price is horrible.", isCorrect: false }, { label: "We refuse price now.", isCorrect: false }] },
        { question: "4. (Revisão B2) Qual a estrutura correta para expressar sucessão imediata?", options: [{ label: "No sooner had I arrived THAN the meeting began.", isCorrect: true }, { label: "No sooner had I arrived WHEN the meeting began.", isCorrect: false }, { label: "No sooner I arrived than meeting began.", isCorrect: false }] },
        { question: "5. (Revisão B2) O que significa a expressão 'bite the bullet'?", options: [{ label: "Encarar uma situação difícil com coragem e determinação", isCorrect: true }, { label: "Desistir de um plano", isCorrect: false }, { label: "Morder um objeto de metal", isCorrect: false }] }
    ],
    stage3_5_sentenceBuilder: [
        { sentenceEn: "Not only did she master advanced grammar, but she also achieved complete fluency.", translation: "Não apenas ela dominou a gramática avançada, como também alcançou a fluência completa.", chunks: ["Not", "only", "did", "she", "master", "advanced", "grammar", ",", "but", "she", "also", "achieved", "complete", "fluency", "."] },
        { sentenceEn: "In spite of all the challenges, it is undeniable that our team succeeded.", translation: "Apesar de todos os desafios, é inegável que a nossa equipe triunfou.", chunks: ["In", "spite", "of", "all", "the", "challenges", ",", "it", "is", "undeniable", "that", "our", "team", "succeeded", "."] }
    ],
    stage4_dialog: [
        { npcName: "Certification Evaluator", npcMessage: "Welcome to your B2 Capstone Evaluation! Are you ready to demonstrate complete fluency?", options: [{ text: "Thank you! I have worked hard from A1 to B2 and I am ready to demonstrate my advanced skills.", isCorrect: true, feedback: "Postura confiante e digna da Certificação B2!" }, { text: "I am ready for capstone maybe.", isCorrect: false, feedback: "Demonstre total confiança." }, { text: "I dunno if I pass.", isCorrect: false, feedback: "Informal." }] },
        { npcName: "Global Executive", npcMessage: "What would you do if a key international client challenged your project timeline?", options: [{ text: "I would acknowledge their concern diplomatically, explain our operational standpoint, and present a feasible alternative.", isCorrect: true, feedback: "Resposta executiva brilhante e madura!" }, { text: "I bite bullet and cry.", isCorrect: false, feedback: "Incorreto." }, { text: "I say no to client.", isCorrect: false, feedback: "Falta diplomacia." }] },
        { npcName: "Panel Master", npcMessage: "Congratulations! You have completed the B2 Upper-Intermediate Level!", options: [{ text: "It is an honor to receive this certification. Thank you for this incredible learning journey!", isCorrect: true, feedback: "Encerramento triunfal e emocionante do Curso de Inglês!" }, { text: "Piece of cake bye.", isCorrect: false, feedback: "Falta formalidade na cerimônia." }, { text: "I finish English forever.", isCorrect: false, feedback: "O aprendizado é contínuo." }] }
    ],
    stage5_quiz: [
        { question: "1. (A1) Qual o verbo 'To Be' correto para 'She ___ a doctor'?", options: [{ label: "is", isCorrect: true }, { label: "am", isCorrect: false }, { label: "are", isCorrect: false }] },
        { question: "2. (A1) Como se diz 'Onde você mora?' em inglês?", options: [{ label: "Where do you live?", isCorrect: true }, { label: "Where you live?", isCorrect: false }, { label: "Where living you?", isCorrect: false }] },
        { question: "3. (A1) Qual a preposição correta para dias da semana (ex: Monday)?", options: [{ label: "on", isCorrect: true }, { label: "in", isCorrect: false }, { label: "at", isCorrect: false }] },
        { question: "4. (A2) Qual o passado simples do verbo irregular 'go'?", options: [{ label: "went", isCorrect: true }, { label: "goed", isCorrect: false }, { label: "gone", isCorrect: false }] },
        { question: "5. (A2) Como fica o comparativo do adjetivo 'big'?", options: [{ label: "bigger", isCorrect: true }, { label: "more big", isCorrect: false }, { label: "biggest", isCorrect: false }] },
        { question: "6. (A2) 'I am going to travel next week' expressa:", options: [{ label: "Uma intenção/plano futuro", isCorrect: true }, { label: "Uma ação concluída no passado", isCorrect: false }, { label: "Um hábito da infância", isCorrect: false }] },
        { question: "7. (B1) Qual o tempo verbal formado por 'Have/Has + Past Participle'?", options: [{ label: "Present Perfect", isCorrect: true }, { label: "Past Continuous", isCorrect: false }, { label: "First Conditional", isCorrect: false }] },
        { question: "8. (B1) Qual frase exemplifica o First Conditional?", options: [{ label: "If it rains, I will stay home.", isCorrect: true }, { label: "If it rained, I would stay home.", isCorrect: false }, { label: "If it will rain, I stay home.", isCorrect: false }] },
        { question: "9. (B1) Qual frase exemplifica o Second Conditional?", options: [{ label: "If I won the lottery, I would buy a house.", isCorrect: true }, { label: "If I win the lottery, I will buy a house.", isCorrect: false }, { label: "If I win the lottery, I bought a house.", isCorrect: false }] },
        { question: "10. (B1) O que significa 'used to play'?", options: [{ label: "Costumava jogar no passado (não joga mais)", isCorrect: true }, { label: "Está se acostumando a jogar agora", isCorrect: false }, { label: "Vai jogar amanhã", isCorrect: false }] },
        { question: "11. (B1) Em Reported Speech, 'I am busy' dito por ele vira:", options: [{ label: "He said that he was busy.", isCorrect: true }, { label: "He said that he is busy.", isCorrect: false }, { label: "He told he is busy.", isCorrect: false }] },
        { question: "12. (B1) Qual a expressão para desejar boa sorte em apresentações?", options: [{ label: "Break a leg!", isCorrect: true }, { label: "Piece of cake!", isCorrect: false }, { label: "Hit the nail!", isCorrect: false }] },
        { question: "13. (B2) Qual a estrutura invertida correta após 'Not only'?", options: [{ label: "Not only did he study, but he also passed.", isCorrect: true }, { label: "Not only he studied, but also passed.", isCorrect: false }, { label: "Not only did study he, but passed.", isCorrect: false }] },
        { question: "14. (B2) A estrutura 'No sooner had I left...' é correlacionada com:", options: [{ label: "than", isCorrect: true }, { label: "when", isCorrect: false }, { label: "where", isCorrect: false }] },
        { question: "15. (B2) Qual conector exige substantivo ou gerúndio em vez de oração direta?", options: [{ label: "Despite", isCorrect: true }, { label: "Even though", isCorrect: false }, { label: "Whereas", isCorrect: false }] },
        { question: "16. (B2) O que significa a metáfora corporativa 'bite the bullet'?", options: [{ label: "Encarar uma decisão inevitável e difícil", isCorrect: true }, { label: "Trabalhar de madrugada", isCorrect: false }, { label: "Demitir um estagiário", isCorrect: false }] },
        { question: "17. (B2) A técnica de 'hedging' na liderança serve para:", options: [{ label: "Suavizar afirmações e opiniões diplomáticas", isCorrect: true }, { label: "Dar ordens autoritárias", isCorrect: false }, { label: "Aumentar imposto", isCorrect: false }] },
        { question: "18. (B2) Em e-mails executivos, 'Further to our conversation' é usado para:", options: [{ label: "Retomar um contato anterior com formalidade", isCorrect: true }, { label: "Despedir-se de um amigo", isCorrect: false }, { label: "Cancelar uma compra", isCorrect: false }] },
        { question: "19. (B2) Em negociações, 'I'm afraid that is not feasible' significa que a oferta é:", options: [{ label: "Inviável / Não praticável", isCorrect: true }, { label: "Muito barata", isCorrect: false }, { label: "Aceita imediatamente", isCorrect: false }] },
        { question: "20. (B2) Em apresentações, 'Moving on to...' serve para:", options: [{ label: "Mudar para o próximo tópico/slide", isCorrect: true }, { label: "Desligar o microfone", isCorrect: false }, { label: "Pedir desculpas por atraso", isCorrect: false }] },
        { question: "21. (B2) O advérbio 'allegedly' em notícias serve para:", options: [{ label: "Relatar fatos não comprovados em tribunal com neutralidade", isCorrect: true }, { label: "Confirmar um crime", isCorrect: false }, { label: "Elogiar um político", isCorrect: false }] },
        { question: "22. (B2) O verbo 'comply' exige qual preposição?", options: [{ label: "with (comply with)", isCorrect: true }, { label: "to (comply to)", isCorrect: false }, { label: "at (comply at)", isCorrect: false }] },
        { question: "23. (B2) O que significa 'binge-watch'?", options: [{ label: "Maratonar episódios de uma série", isCorrect: true }, { label: "Assistir a um filme no cinema", isCorrect: false }, { label: "Desligar a TV", isCorrect: false }] },
        { question: "24. (B2) 'Carbon footprint' refere-se a:", options: [{ label: "Medida das emissões de carbono causadas por atividades humanas", isCorrect: true }, { label: "Uma marca de sapato", isCorrect: false }, { label: "Fumaça de chaminé", isCorrect: false }] },
        { question: "25. (B2) 'Furthermore' e 'Moreover' são conectores de:", options: [{ label: "Adição formal de argumentos", isCorrect: true }, { label: "Causa e efeito", isCorrect: false }, { label: "Tempo passado", isCorrect: false }] },
        { question: "26. (B2) 'It is undeniable that...' significa:", options: [{ label: "É inegável / irrefutável que", isCorrect: true }, { label: "É muito duvidoso que", isCorrect: false }, { label: "É totalmente falso que", isCorrect: false }] },
        { question: "27. (B2) O verbo 'convey' em análise literária significa:", options: [{ label: "Transmitir / Comunicar um sentimento ou ideia", isCorrect: true }, { label: "Transportar mercadorias", isCorrect: false }, { label: "Desenhar figuras", isCorrect: false }] },
        { question: "28. (B2) 'Serve as a catalyst for' indica algo que:", options: [{ label: "Impulsiona ou acelera uma transformação", isCorrect: true }, { label: "Bloqueia o desenvolvimento", isCorrect: false }, { label: "Provoca falência", isCorrect: false }] },
        { question: "29. (B2) No inglês britânico, 'caminhão' e 'apartamento' são chamados de:", options: [{ label: "Lorry e Flat", isCorrect: true }, { label: "Truck e Apartment", isCorrect: false }, { label: "Van e House", isCorrect: false }] },
        { question: "30. (B2) Parabéns! O Nível B2 (Upper-Intermediate) capacita você a:", options: [{ label: "Comunicar-se com fluência, negociar, liderar reuniões e compreender inglês nativo sem legendas!", isCorrect: true }, { label: "Apenas falar palavras isoladas", isCorrect: false }, { label: "Ler apenas cardápios de restaurantes", isCorrect: false }] }
    ]
};

// ==========================================
// VETOR DE DADOS CONSOLIDADO DO NÍVEL B2 (20 MÓDULOS)
// ==========================================
const CURSO_ENGLISH_B2_DADOS = [
    MODULO_EN_B2_01, MODULO_EN_B2_02, MODULO_EN_B2_03, MODULO_EN_B2_04,
    MODULO_EN_B2_05, MODULO_EN_B2_06, MODULO_EN_B2_07, MODULO_EN_B2_08,
    MODULO_EN_B2_09, MODULO_EN_B2_10, MODULO_EN_B2_11, MODULO_EN_B2_12,
    MODULO_EN_B2_13, MODULO_EN_B2_14, MODULO_EN_B2_15, MODULO_EN_B2_16,
    MODULO_EN_B2_17, MODULO_EN_B2_18, MODULO_EN_B2_19, MODULO_EN_B2_20
];

// Exportação e Compatibilidade Global
if (typeof window !== 'undefined') {
    window.CURSO_ENGLISH_B2_DADOS = CURSO_ENGLISH_B2_DADOS;
    if (typeof window.CURSO_B2_DADOS === 'undefined') {
        window.CURSO_B2_DADOS = CURSO_ENGLISH_B2_DADOS;
    }
}
