const CURSO_RUSSO_A1_DADOS = [];

// Gerador padronizado de módulos handcrafted para o Nível A1 (Pílulas Gramaticais + Dicas + Quizes)
const criarModuloA1Handcrafted = (id, title, desc, missionDesc, audioGuide, grammarPills, dropsList, sentencesList, dialogueList, quizList) => {
    const normalizedQuiz = quizList.map(item => ({
        question: item.question || item.q,
        q: item.q || item.question,
        options: item.options,
        correctIndex: item.correctIndex,
        explanation: item.explanation
    }));

    const pillDrops = (Array.isArray(grammarPills) ? grammarPills : []).map(pill => ({
        type: 'grammar_pill',
        title: pill.title || 'Pílula Gramatical',
        rule: pill.rule || pill.explanation || '',
        formula: pill.formula || '',
        example: pill.example ? (pill.exampleTranslation ? `${pill.example} — "${pill.exampleTranslation}"` : pill.example) : ''
    }));

    const enrichedVocabDrops = dropsList.map(item => {
        if (!item || typeof item !== 'object') return item;
        let dicaText = item.dica || item.tip || item.example || item.timeContext || '';
        if (!dicaText) {
            dicaText = `Uso essencial em russo: "${item.word || item.kanji || ''}" (${item.romaji || ''})`;
        }
        return {
            ...item,
            dica: dicaText,
            tip: dicaText,
            timeContext: dicaText
        };
    });

    const allStage1Drops = [...pillDrops, ...enrichedVocabDrops];

    return {
        id,
        level: 'A1',
        title,
        desc,
        description: desc,
        stage1_context: {
            title,
            missionTitle: title,
            situation: desc,
            missionDescription: missionDesc,
            audioGuide
        },
        grammar_pills: grammarPills,
        drops: allStage1Drops,
        stage2_drops: allStage1Drops,
        stage3_sentences: sentencesList,
        stage3_5_sentenceBuilder: sentencesList,
        stage4_dialogue: dialogueList,
        stage4_dialog: dialogueList,
        quiz: normalizedQuiz,
        stage3_practice: normalizedQuiz,
        stage5_quiz: normalizedQuiz
    };
};

CURSO_RUSSO_A1_DADOS.push(
    criarModuloA1Handcrafted(
        'ru_a1_mod_01',
        'Módulo 1: Здравствуйте! (Saudações e Cortesia)',
        'Aprenda as saudações essenciais, expressões formais e informais de cortesia em russo.',
        'Aprenda a diferença entre a saudação formal "Здравствуйте" e a informal "Привет".',
        'Em russo, a cortesia depende do grau de formalidade. Use "Здравствуйте" para pessoas mais velhas ou desconhecidos, e "Привет" entre amigos.',
        [
            { title: 'Здравствуйте vs. Привет', rule: 'Em russo, a cortesia depende do grau de formalidade. Use a saudação formal com pessoas mais velhas ou desconhecidos e a informal entre amigos.', formula: 'Здравствуйте (Formal) / Привет (Informal)', example: 'Здравствуйте, Anna! / Привет, Ivan!', exampleTranslation: 'Olá, Anna! / Oi, Ivan!' },
            { title: 'Cortesia Básica', rule: 'A expressão "Пожалуйста" é multifuncional e serve tanto para pedir cortesia quanto para responder a um agradecimento.', formula: 'Спасибо ➔ Пожалуйста (De nada)', example: 'Кофе, пожалуйста. — Спасибо!', exampleTranslation: 'Café, por favor. — Obrigado(a)!' }
        ],
        [
            { type: 'vocab', word: 'Здравствуйте', romaji: 'Zdravstvuyte', translation: 'Olá (formal)', audio: 'Здравствуйте', dica: 'Saudação formal usada com pessoas mais velhas, desconhecidos ou autoridades.' },
            { type: 'vocab', word: 'Привет', romaji: 'Privet', translation: 'Oi / Olá (informal)', audio: 'Привет', dica: 'Saudação informal entre amigos, colegas e familiares.' },
            { type: 'vocab', word: 'Спасибо', romaji: 'Spasibo', translation: 'Obrigado(a)', audio: 'Спасибо', dica: 'Palavra universal de agradecimento em qualquer situação.' },
            { type: 'vocab', word: 'Пожалуйста', romaji: 'Pozhaluysta', translation: 'Por favor / De nada', audio: 'Пожалуйста', dica: 'Usado tanto para pedir cortesia ("por favor") quanto para responder a um agradecimento ("de nada").' },
            { type: 'vocab', word: 'До свидания', romaji: 'Do svidaniya', translation: 'Até logo', audio: 'До свидания', dica: 'Literalmente "Até a vista", despedida formal clássica.' }
        ],
        [
            { sentence: 'Здравствуйте, спасибо!', translation: 'Olá, obrigado(a)!', tokens: ['Здравствуйте,', 'спасибо!'], audio: 'Здравствуйте, спасибо!' },
            { sentence: 'Привет, пока!', translation: 'Oi, tchau!', tokens: ['Привет,', 'пока!'], audio: 'Привет, пока!' }
        ],
        [
            { speaker: 'Ivan', text: 'Здравствуйте! Как вас зовут?', translation: 'Olá! Como você se chama?', audio: 'Здравствуйте! Как вас зовут?' },
            { speaker: 'Ana', text: 'Здравствуйте! Меня зовут Ana.', translation: 'Olá! Meu nome é Ana.', audio: 'Здравствуйте! Меня зовут Ana.' }
        ],
        [
            { q: 'Como se diz "Olá" de forma formal em russo?', options: ['Привет', 'Здравствуйте', 'Пока', 'Спасибо'], correctIndex: 1, explanation: 'Здравствуйте é a saudação formal.' },
            { q: 'Qual palavra significa "Obrigado(a)"?', options: ['Пожалуйста', 'Спасибо', 'Привет', 'До свидания'], correctIndex: 1, explanation: 'Спасибо significa Obrigado(a).' },
            { q: 'O que significa "Пока"?', options: ['Por favor', 'Olá', 'Tchau (informal)', 'Até amanhã'], correctIndex: 2, explanation: 'Пока é despedida informal.' },
            { q: 'Qual é a resposta para "Спасибо"?', options: ['Здравствуйте', 'Пожалуйста', 'Привет', 'Извините'], correctIndex: 1, explanation: 'Пожалуйста significa de nada.' },
            { q: 'Como se diz "Até logo" de forma formal?', options: ['До свидания', 'Пока', 'Привет', 'Доброе утро'], correctIndex: 0, explanation: 'До свидания = Até logo.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_02',
        'Módulo 2: Меня зовут... (Apresentações)',
        'Aprenda a dizer seu nome e perguntar o nome de outras pessoas em russo.',
        'Domine a estrutura "Меня зовут..." e a pergunta "Как вас зовут?".',
        'Para dizer seu nome em russo, usa-se a expressão "Меня зовут" seguida do seu nome.',
        [
            { title: 'Estrutura Меня зовут...', rule: 'Toda apresentação pessoal em russo usa a estrutura "Меня зовут" (literalmente "Me chamam de...").', formula: 'Меня зовут + [Seu Nome]', example: 'Меня зовут Игорь.', exampleTranslation: 'Meu nome é Igor.' },
            { title: 'Perguntando o Nome', rule: 'Para perguntar o nome de alguém, diferencie a forma formal da informal.', formula: 'Как вас зовут? (Formal) / Как тебя зовут? (Informal)', example: 'Как вас зовут? — Меня зовут Анна.', exampleTranslation: 'Como você se chama? — Meu nome é Anna.' }
        ],
        [
            { type: 'vocab', word: 'Меня зовут', romaji: 'Menya zovut', translation: 'Meu nome é...', audio: 'Меня зовут', dica: 'Literalmente significa "Me chamam de...". É a forma natural de dizer seu nome.' },
            { type: 'vocab', word: 'Как вас зовут?', romaji: 'Kak vas zovut?', translation: 'Como você se chama? (formal)', audio: 'Как вас зовут?', dica: 'Pergunta cortês usada em contextos formais ou com desconhecidos.' },
            { type: 'vocab', word: 'Как тебя зовут?', romaji: 'Kak tebya zovut?', translation: 'Como você se chama? (informal)', audio: 'Как тебя зовут?', dica: 'Pergunta amigável usada entre jovens ou em situações casuais.' },
            { type: 'vocab', word: 'Очень приятно', romaji: 'Ochen priyatno', translation: 'Muito prazer', audio: 'Очень приятно', dica: 'Dito ao cumprimentar alguém após saber seu nome.' }
        ],
        [
            { sentence: 'Меня зовут Иван.', translation: 'Meu nome é Ivan.', tokens: ['Меня', 'зовут', 'Иван.'], audio: 'Меня зовут Иван.' },
            { sentence: 'Как вас зовут?', translation: 'Como você se chama?', tokens: ['Как', 'вас', 'зовут?'], audio: 'Как вас зовут?' }
        ],
        [
            { speaker: 'Dmitry', text: 'Здравствуйте! Как вас зовут?', translation: 'Olá! Como você se chama?', audio: 'Здравствуйте! Как вас зовут?' },
            { speaker: 'Elena', text: 'Здравствуйте! Меня зовут Елена.', translation: 'Olá! Meu nome é Elena.', audio: 'Здравствуйте! Меня зовут Елена.' }
        ],
        [
            { q: 'O que significa "Меня зовут"?', options: ['Meu nome é...', 'Eu sou de...', 'Eu moro em...', 'Prazer'], correctIndex: 0, explanation: 'Меня зовут = Meu nome é...' },
            { q: 'Como se pergunta o nome de forma formal?', options: ['Как тебя зовут?', 'Как вас зовут?', 'Кто это?', 'Где ты?'], correctIndex: 1, explanation: 'Как вас зовут? é formal.' },
            { q: 'Resposta para "Очень приятно"?', options: ['Мне тоже', 'Спасибо', 'До свидания', 'Здравствуйте'], correctIndex: 0, explanation: 'Мне тоже = Para mim também.' },
            { q: 'Qual palavra significa "Nome"?', options: ['Фамилия', 'Имя', 'Город', 'Дом'], correctIndex: 1, explanation: 'Имя = Nome.' },
            { q: 'Traduza: "Меня зовут Игорь."', options: ['Eu sou Igor.', 'Meu nome é Igor.', 'Prazer, Igor.', 'Cadê o Igor?'], correctIndex: 1, explanation: 'Meu nome é Igor.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_03',
        'Módulo 3: Кто это? Что это? (Identificação de Pessoas e Objetos)',
        'Aprenda a identificar pessoas com "Кто это?" e objetos com "Что это?".',
        'Aprenda a usar "Кто" (Quem) para seres animados e "Что" (O que) para inanimados.',
        'Em russo, "Это" funciona como um pronome demonstrativo universal para "Isto é / Este é / Esta é".',
        [
            { title: 'O Pronome Demonstrativo Это', rule: 'Em russo, "Это" funciona como pronome demonstrativo universal (Isto é / Este é / Esta é) sem mudar por gênero.', formula: 'Это + [Substantivo]', example: 'Это кот. Это книга.', exampleTranslation: 'Isto é um gato. Isto é um livro.' },
            { title: 'Кто vs. Что', rule: 'Usa-se "Кто" exclusivamente para seres animados (pessoas e animais) e "Что" para objetos inanimados.', formula: 'Кто это? (Pessoas/Animais) / Что это? (Objetos)', example: 'Кто это? — Это врач. / Что это? — Это книга.', exampleTranslation: 'Quem é este? — É um médico. / O que é isto? — É um livro.' }
        ],
        [
            { type: 'vocab', word: 'Кто', romaji: 'Kto', translation: 'Quem', audio: 'Кто', dica: 'Pronome interrogativo exclusivo para seres animados (pessoas e animais).' },
            { type: 'vocab', word: 'Что', romaji: 'Shto', translation: 'O que / Que', audio: 'Что', dica: 'Pronuncia-se "Shto". Usado para objetos, coisas e seres inanimados.' },
            { type: 'vocab', word: 'Это', romaji: 'Eto', translation: 'Isto / Este / Esta', audio: 'Это', dica: 'Pronome demonstrativo universal em russo (não muda por gênero nem número).' },
            { type: 'vocab', word: 'Кто это?', romaji: 'Kto eto?', translation: 'Quem é este(a)?', audio: 'Кто это?', dica: 'Usado para perguntar sobre a identidade de uma pessoa.' },
            { type: 'vocab', word: 'Что это?', romaji: 'Shto eto?', translation: 'O que é isto?', audio: 'Что это?', dica: 'Usado para identificar objetos ou coisas desconhecidas.' }
        ],
        [
            { sentence: 'Кто это? Это врач.', translation: 'Quem é este? É um médico.', tokens: ['Кто', 'это?', 'Это', 'врач.'], audio: 'Кто это? Это врач.' },
            { sentence: 'Что это? Это книга.', translation: 'O que é isto? É um livro.', tokens: ['Что', 'это?', 'Это', 'книга.'], audio: 'Что это? Это книга.' }
        ],
        [
            { speaker: 'Boris', text: 'Маша, кто это?', translation: 'Masha, quem é este?', audio: 'Маша, кто это?' },
            { speaker: 'Masha', text: 'Это мой брат.', translation: 'Este é meu irmão.', audio: 'Это мой брат.' }
        ],
        [
            { q: 'Pergunta usada para pessoas (Quem)?', options: ['Что', 'Кто', 'Где', 'Как'], correctIndex: 1, explanation: 'Кто = Quem.' },
            { q: 'Como se pergunta "O que é isto?"', options: ['Кто это?', 'Что это?', 'Где это?', 'Как это?'], correctIndex: 1, explanation: 'Что это? = O que é isto?' },
            { q: 'Traduza: "Это дом."', options: ['Isto é uma casa.', 'Quem é aquele?', 'Eu estou em casa.', 'Onde fica?'], correctIndex: 0, explanation: 'Это дом = Isto é uma casa.' },
            { q: 'Como se pronuncia "Что"?', options: ['Tchto', 'Shto', 'Kto', 'Chto'], correctIndex: 1, explanation: 'Что pronuncia-se Shto.' },
            { q: 'Complete: "___ это? — Это кот."', options: ['Что', 'Кто', 'Где', 'Куда'], correctIndex: 1, explanation: 'Gatos são animados, usam Кто.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_04',
        'Módulo 4: Я из Бразилии (Países e Nacionalidades)',
        'Aprenda a dizer sua origem com a preposição Из e o Caso Genitivo.',
        'Aprenda a dizer de qual país você é usando "Я из...".',
        'A preposição Из (de) exige que o nome do país mude para o Caso Genitivo (ex: Бразилия ➔ из Бразилии).',
        [
            { title: 'A Preposição Из + Genitivo', rule: 'Para dizer de qual país você é, usa-se a preposição Из seguida do nome do país no Caso Genitivo.', formula: 'Я из + [País no Genitivo]', example: 'Я из Бразилии. / Он из России.', exampleTranslation: 'Eu sou do Brasil. / Ele é da Rússia.' },
            { title: 'Perguntando a Origem', rule: 'Para perguntar de onde alguém é, use Откуда com a pessoa correspondente.', formula: 'Откуда вы? (Formal) / Откуда ты? (Informal)', example: 'Откуда вы? — Я из Бразилии.', exampleTranslation: 'De onde você é? — Eu sou do Brasil.' }
        ],
        [
            { type: 'vocab', word: 'Откуда', romaji: 'Otkuda', translation: 'De onde', audio: 'Откуда', dica: 'Pergunta sobre origem geográfica ("Vindo de onde").' },
            { type: 'vocab', word: 'Бразилия', romaji: 'Braziliya', translation: 'Brasil', audio: 'Бразилия', dica: 'Nome do país no Nominativo. Vira "из Бразилии" para exprimir origem.' },
            { type: 'vocab', word: 'Россия', romaji: 'Rossiya', translation: 'Rússia', audio: 'Россия', dica: 'Nome do país no Nominativo. Vira "из России" para exprimir origem.' },
            { type: 'vocab', word: 'Из', romaji: 'Iz', translation: 'De / Vindo de', audio: 'Из', dica: 'Preposição de origem que exige a forma no Caso Genitivo.' }
        ],
        [
            { sentence: 'Откуда вы? Я из Бразилии.', translation: 'De onde você é? Eu sou do Brasil.', tokens: ['Откуда', 'вы?', 'Я', 'из', 'Бразилии.'], audio: 'Откуда вы? Я из Бразилии.' },
            { sentence: 'Он из России.', translation: 'Ele é da Rússia.', tokens: ['Он', 'из', 'России.'], audio: 'Он из России.' }
        ],
        [
            { speaker: 'Olga', text: 'Привет! Откуда ты?', translation: 'Oi! De onde você é?', audio: 'Привет! Откуда ты?' },
            { speaker: 'Lucas', text: 'Привет! Я из Бразилии. А ты?', translation: 'Oi! Eu sou do Brasil. E você?', audio: 'Привет! Я из Бразилии. А ты?' }
        ],
        [
            { q: 'Como se pergunta "De onde você é?"', options: ['Где ты?', 'Откуда ты?', 'Кто ты?', 'Как ты?'], correctIndex: 1, explanation: 'Откуда ты? = De onde você é?' },
            { q: 'Forma correta de "do Brasil" após Из?', options: ['из Бразилия', 'из Бразилии', 'из Бразилию', 'из Бразилией'], correctIndex: 1, explanation: 'Genitivo de Бразилия é из Бразилии.' },
            { q: 'Traduza: "Я из России."', options: ['Vou para a Rússia.', 'Sou da Rússia.', 'Moro na Rússia.', 'Amo a Rússia.'], correctIndex: 1, explanation: 'Я из России = Sou da Rússia.' },
            { q: 'Qual preposição indica "de" (origem)?', options: ['В', 'На', 'Из', 'К'], correctIndex: 2, explanation: 'Из indica origem.' },
            { q: 'O que significa "Добро пожаловать"?', options: ['Até logo', 'Seja bem-vindo(a)', 'Obrigado', 'Por favor'], correctIndex: 1, explanation: 'Добро пожаловать = Seja bem-vindo(a).' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_05',
        'Módulo 5: Моя семья (Família e Possessivos)',
        'Aprenda os membros da família e os pronomes possessivos no Nominativo (Мой, Моя, Моё, Мои).',
        'Domine a concordância de gênero dos pronomes possessivos (Мой, Моя, Моё, Мои).',
        'Em russo, os possessivos concordam com o gênero da pessoa/objeto possuído: Мой (Masc), Моя (Fem), Моё (Neutro), Мои (Plural).',
        [
            { title: 'Concordância de Possessivos', rule: 'Os pronomes possessivos em russo concordam em gênero e número com o objeto possuído.', formula: 'Мой (Masc) / Моя (Fem) / Моё (Neutro) / Мои (Plural)', example: 'Это мой брат и моя сестра.', exampleTranslation: 'Este é meu irmão e esta é minha irmã.' },
            { title: 'Possessivos de Segunda Pessoa', rule: 'Assim como "Мой", o possessivo "Твой" concorda com o substantivo.', formula: 'Твой (Masc) / Твоя (Fem) / Твоё (Neutro) / Твои (Plural)', example: 'Где твой дом?', exampleTranslation: 'Onde fica sua casa?' }
        ],
        [
            { type: 'vocab', word: 'Мама', romaji: 'Mama', translation: 'Mãe', audio: 'Мама', dica: 'Substantivo feminino. Exige o possessivo "Моя мама".' },
            { type: 'vocab', word: 'Папа', romaji: 'Papa', translation: 'Pai', audio: 'Папа', dica: 'Substantivo masculino com terminação em -a. Exige o possessivo "Мой папа".' },
            { type: 'vocab', word: 'Брат', romaji: 'Brat', translation: 'Irmão', audio: 'Брат', dica: 'Substantivo masculino. Exige o possessivo "Мой брат".' },
            { type: 'vocab', word: 'Сестра', romaji: 'Sestra', translation: 'Irmã', audio: 'Сестра', dica: 'Substantivo feminino. Exige o possessivo "Моя сестра".' },
            { type: 'vocab', word: 'Семья', romaji: 'Semya', translation: 'Família', audio: 'Семья', dica: 'Palavra feminina terminada em soft sign (ь) + я.' }
        ],
        [
            { sentence: 'Это моя мама и мой папа.', translation: 'Esta é minha mãe e este é meu pai.', tokens: ['Это', 'моя', 'мама', 'и', 'мой', 'папа.'], audio: 'Это моя мама и мой папа.' },
            { sentence: 'Это мои друзья.', translation: 'Estes são meus amigos.', tokens: ['Это', 'мои', 'друзья.'], audio: 'Это мои друзья.' }
        ],
        [
            { speaker: 'Maxim', text: 'Это твоя семья?', translation: 'Esta é sua família?', audio: 'Это твоя семья?' },
            { speaker: 'Anna', text: 'Да, это моя мама и мой папа.', translation: 'Sim, esta é minha mãe e meu pai.', audio: 'Да, это моя мама и мой папа.' }
        ],
        [
            { q: 'Possessivo para "мама" (feminino)?', options: ['Мой', 'Моя', 'Моё', 'Мои'], correctIndex: 1, explanation: 'Моя мама.' },
            { q: 'Possessivo para "папа" (masculino)?', options: ['Моя', 'Мой', 'Моё', 'Мои'], correctIndex: 1, explanation: 'Мой папа.' },
            { q: 'Traduza: "Это мой брат."', options: ['Este é meu irmão.', 'Esta é minha irmã.', 'Meus pais.', 'Quem é?'], correctIndex: 0, explanation: 'Este é meu irmão.' },
            { q: 'Como se diz "minha família"?', options: ['Мой семья', 'Моя семья', 'Моё семья', 'Мои семья'], correctIndex: 1, explanation: 'Моя семья.' },
            { q: 'Forma plural de meu/minha (meus/minhas)?', options: ['Мой', 'Моя', 'Моё', 'Мои'], correctIndex: 3, explanation: 'Мои (ex: Мои друзья).' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_06',
        'Módulo 6: Профессии (Profissões e Trabalho)',
        'Aprenda nomes de profissões e a omissão do verbo SER no presente (Я врач).',
        'Entenda como o verbo SER (быть) não é usado no presente em russo.',
        'Em russo no presente, não se usa o verbo SER. Dizer "Eu sou médico" fica simplesmente "Я врач".',
        [
            { title: 'Omissão do Verbo SER', rule: 'No presente em russo, o verbo SER (быть) é completamente omitido entre o pronome e a profissão.', formula: '[Pronome] + [Profissão]', example: 'Я студент. / Она врач.', exampleTranslation: 'Eu sou estudante. / Ela é médica.' },
            { title: 'Perguntando a Profissão', rule: 'A pergunta educada padrão para saber a ocupação de alguém.', formula: 'Кто вы по профессии?', example: 'Кто вы по профессии? — Я инженер.', exampleTranslation: 'Qual é sua profissão? — Eu sou engenheiro.' }
        ],
        [
            { type: 'vocab', word: 'Врач', romaji: 'Vrach', translation: 'Médico(a)', audio: 'Врач', dica: 'Profissão usada tanto para homens quanto para mulheres em russo.' },
            { type: 'vocab', word: 'Учитель', romaji: 'Uchitel', translation: 'Professor(a)', audio: 'Учитель', dica: 'Profissão masculina. Para professora pode-se dizer "Учительница".' },
            { type: 'vocab', word: 'Инженер', romaji: 'Inzhener', translation: 'Engenheiro(a)', audio: 'Инженер', dica: 'Profissão de engenheiro. Não usa verbo SER no presente ("Я инженер").' },
            { type: 'vocab', word: 'Студент', romaji: 'Student', translation: 'Estudante (masc)', audio: 'Студент', dica: 'Estudante universitário masculino. O feminino é "Студентка".' }
        ],
        [
            { sentence: 'Я студент, а она врач.', translation: 'Eu sou estudante e ela é médica.', tokens: ['Я', 'студент,', 'а', 'она', 'врач.'], audio: 'Я студент, а она врач.' },
            { sentence: 'Кто вы по профессии?', translation: 'Qual é sua profissão?', tokens: ['Кто', 'вы', 'по', 'профессии?'], audio: 'Кто вы по профессии?' }
        ],
        [
            { speaker: 'Victor', text: 'Анна, кто вы по профессии?', translation: 'Anna, qual é sua profissão?', audio: 'Анна, кто вы по профессии?' },
            { speaker: 'Anna', text: 'Я учительница. А вы?', translation: 'Eu sou professora. E o senhor?', audio: 'Я учительница. А вы?' }
        ],
        [
            { q: 'Como se diz "Eu sou médico" em russo?', options: ['Я есть врач', 'Я врач', 'Я быть врач', 'Меня врач'], correctIndex: 1, explanation: 'Verbo ser omitido: Я врач.' },
            { q: 'Qual palavra significa "Professor"?', options: ['Врач', 'Учитель', 'Студент', 'Инженер'], correctIndex: 1, explanation: 'Учитель = Professor.' },
            { q: 'Traduza: "Она инженер."', options: ['Ela é professora.', 'Ela é médica.', 'Ela é engenheira.', 'Ela é estudante.'], correctIndex: 2, explanation: 'Ela é engenheira.' },
            { q: 'Pergunta educada de profissão?', options: ['Где вы?', 'Кто вы по профессии?', 'Откуда вы?', 'Как вас зовут?'], correctIndex: 1, explanation: 'Кто вы по профессии?' },
            { q: 'Significado de "Студент"?', options: ['Professor', 'Estudante', 'Médico', 'Policial'], correctIndex: 1, explanation: 'Студент = Estudante.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_07',
        'Módulo 7: Где ты живешь? (Caso Preposicional I - Lugares)',
        'Aprenda a dizer onde você mora ou está usando o Caso Preposicional (terminação -е).',
        'Aprenda a usar a preposição В / НА com a terminação -е no Caso Preposicional.',
        'Para indicar localização ("em"), os substantivos masculinos e femininos geralmente recebem a terminação -е (ex: Москва ➔ в Москве).',
        [
            { title: 'O Caso Preposicional (Localização)', rule: 'Para responder a "Где?" (Onde?), os substantivos masculinos e femininos geralmente recebem a terminação -е.', formula: 'В/НА + [Substantivo + е]', example: 'Москва ➔ в Москве / Город ➔ в городе', exampleTranslation: 'em Moscou / na cidade' },
            { title: 'Diferença entre В e НА', rule: 'Usa-se В para cidades e espaços fechados e НА para ruas, praças e espaços abertos.', formula: 'В [Cidade/Prédio] / НА [Rua/Praça]', example: 'Я живу в Москве на улице Тверская.', exampleTranslation: 'Eu moro em Moscou na rua Tverskaya.' }
        ],
        [
            { type: 'vocab', word: 'Где', romaji: 'Gde', translation: 'Onde', audio: 'Где', dica: 'Pergunta sobre localização estática ("Onde está/mora").' },
            { type: 'vocab', word: 'Жить', romaji: 'Zhit', translation: 'Morar / Viver', audio: 'Жить', dica: 'Verbo base. No presente para "Я" vira "Я живу".' },
            { type: 'vocab', word: 'в Москве', romaji: 'v Moskve', translation: 'em Moscou', audio: 'в Москве', dica: 'Caso Preposicional de Москва: terminação -е indica localização.' },
            { type: 'vocab', word: 'в городе', romaji: 'v gorode', translation: 'na cidade', audio: 'в городе', dica: 'Caso Preposicional de Город: masculino ganha terminação -е.' }
        ],
        [
            { sentence: 'Где ты живешь? Я живу в Москве.', translation: 'Onde você mora? Eu moro em Moscou.', tokens: ['Где', 'ты', 'живешь?', 'Я', 'живу', 'в', 'Москве.'], audio: 'Где ты живешь? Я живу в Москве.' },
            { sentence: 'Он живет в городе.', translation: 'Ele mora na cidade.', tokens: ['Он', 'живет', 'в', 'городе.'], audio: 'Он живет в городе.' }
        ],
        [
            { speaker: 'Pavel', text: 'Привет! Где ты живешь?', translation: 'Oi! Onde você mora?', audio: 'Привет! Где ты живешь?' },
            { speaker: 'Maria', text: 'Я живу в Москве.', translation: 'Eu moro em Moscou.', audio: 'Я живу в Москве.' }
        ],
        [
            { q: 'Terminação de "Москва" em "em Moscou"?', options: ['в Москва', 'в Москве', 'в Москву', 'в Москвой'], correctIndex: 1, explanation: 'в Москве (terminação -е).' },
            { q: 'Palavra que significa "Onde"?', options: ['Откуда', 'Где', 'Когда', 'Почему'], correctIndex: 1, explanation: 'Где = Onde.' },
            { q: 'Traduza: "Я живу в городе."', options: ['Eu moro na cidade.', 'Vou à cidade.', 'Sou da cidade.', 'Quem mora?'], correctIndex: 0, explanation: 'Eu moro na cidade.' },
            { q: 'Conjugação de жить para "Я"?', options: ['Я живу', 'Я живешь', 'Я живет', 'Я живем'], correctIndex: 0, explanation: 'Я живу.' },
            { q: 'Preposição usada para ruas (на улице)?', options: ['В', 'На', 'Из', 'Под'], correctIndex: 1, explanation: 'На улице.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_08',
        'Módulo 8: Числа 1-20 (Números e Contagem)',
        'Aprenda os números de 1 a 20 e a concordância especial de 1 e 2.',
        'Aprenda os números de 1 a 20 e observe que 1 (Один/Одна) e 2 (Два/Две) mudam com gênero.',
        'O número 1 concorda em gênero: Один (masc), Одна (fem). O número 2 tem duas formas: Два (masc/neutro), Две (fem).',
        [
            { title: 'Concordância dos Números 1 e 2', rule: 'Os números 1 e 2 em russo mudam de acordo com o gênero do substantivo.', formula: 'Один / Одна (1) — Два / Две (2)', example: 'Один кот, одна кошка, два рубля, две книги.', exampleTranslation: 'Um gato, uma gata, dois rublos, duas palavras.' },
            { title: 'Formação dos Números 11 a 19', rule: 'Adiciona-se o sufixo -надцать ao número base.', formula: '[Número Base] + надцать', example: '11 = одиннадцать, 12 = двенадцать.', exampleTranslation: '11 = onze, 12 = doze.' }
        ],
        [
            { type: 'vocab', word: 'Один', romaji: 'Odin', translation: 'Um (masc)', audio: 'Один', dica: 'Concorda em gênero: Один (masculino), Одна (feminino).' },
            { type: 'vocab', word: 'Два', romaji: 'Dva', translation: 'Dois (masc)', audio: 'Два', dica: 'Usado para substantivos masculinos e neutros (ex: dois rublos = два рубля).' },
            { type: 'vocab', word: 'Три', romaji: 'Tri', translation: 'Três', audio: 'Три', dica: 'Número 3. Exige substantivo no genitivo singular.' },
            { type: 'vocab', word: 'Пять', romaji: 'Pyat', translation: 'Cinco', audio: 'Пять', dica: 'Termina com sinal brando (ь). A partir de 5 usa-se genitivo plural (пять рублей).' },
            { type: 'vocab', word: 'Десять', romaji: 'Desyat', translation: 'Dez', audio: 'Десять', dica: 'Número 10 em russo.' }
        ],
        [
            { sentence: 'Один, два, три, четыре, пять!', translation: 'Um, dois, três, quatro, cinco!', tokens: ['Один,', 'два,', 'три,', 'четыре,', 'пять!'], audio: 'Один, два, три, четыре, пять!' },
            { sentence: 'У меня есть два рубля.', translation: 'Eu tenho dois rublos.', tokens: ['У', 'меня', 'есть', 'два', 'рубля.'], audio: 'У меня есть два рубля.' }
        ],
        [
            { speaker: 'Vendedor', text: 'Сколько вы хотите?', translation: 'Quantos você quer?', audio: 'Сколько вы хотите?' },
            { speaker: 'Cliente', text: 'Два кофе, пожалуйста.', translation: 'Dois cafés, por favor.', audio: 'Два кофе, пожалуйста.' }
        ],
        [
            { q: 'Número 5 em russo?', options: ['Один', 'Три', 'Пять', 'Десять'], correctIndex: 2, explanation: 'Пять = 5.' },
            { q: 'Feminino do número 1?', options: ['Один', 'Одна', 'Одно', 'Одни'], correctIndex: 1, explanation: 'Одна = uma.' },
            { q: 'Como se diz "12"?', options: ['Десять', 'Двенадцать', 'Пятнадцать', 'Двадцать'], correctIndex: 1, explanation: '12 = Двенадцать.' },
            { q: 'Feminino do número 2?', options: ['Два', 'Две', 'Второй', 'Двоим'], correctIndex: 1, explanation: 'Две = duas.' },
            { q: 'Traduza: "Десять рублей."', options: ['Um rublo', 'Dois rublos', 'Cinco rublos', 'Dez rublos'], correctIndex: 3, explanation: 'Dez rublos.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_09',
        'Módulo 9: В ресторане (Restaurante e Pedidos)',
        'Aprenda a fazer pedidos em restaurantes usando a expressão "Я буду..." + Acusativo.',
        'Aprenda a dizer "Я буду..." (Lit. "Eu vou querer...") e pedir a conta com "Счёт, пожалуйста".',
        'Na Rússia, a forma mais natural de pedir algo no restaurante é usar "Я буду..." seguido do prato no Acusativo.',
        [
            { title: 'A Expressão Я буду...', rule: 'A forma mais natural de pedir comida ou bebida em restaurantes na Rússia é usando "Я буду...".', formula: 'Я буду + [Pedido no Acusativo]', example: 'Я буду кофе. / Я буду воду.', exampleTranslation: 'Eu vou querer café. / Eu vou querer água.' },
            { title: 'Pedindo a Conta', rule: 'Expressão curta e cortês para solicitar a conta ao garçom.', formula: 'Счёт, пожалуйста!', example: 'Дайте счёт, пожалуйста.', exampleTranslation: 'Me dê a conta, por favor.' }
        ],
        [
            { type: 'vocab', word: 'Меню', romaji: 'Menyu', translation: 'Cardápio / Menu', audio: 'Меню', dica: 'Palavra de origem estrangeira indeclinável em russo.' },
            { type: 'vocab', word: 'Вода', romaji: 'Voda', translation: 'Água', audio: 'Вода', dica: 'Substantivo feminino. No restaurante dize-se "Я буду воду" (Acusativo).' },
            { type: 'vocab', word: 'Чай', romaji: 'Chai', translation: 'Chá', audio: 'Чай', dica: 'A bebida mais consumida na Rússia ao longo do dia.' },
            { type: 'vocab', word: 'Кофе', romaji: 'Kofe', translation: 'Café', audio: 'Кофе', dica: 'Palavra masculina e indeclinável em russo ("Один кофе").' },
            { type: 'vocab', word: 'Счёт', romaji: 'Schot', translation: 'Conta', audio: 'Счёт', dica: 'Pronuncia-se "Schot". Pedido de conta: "Счёт, пожалуйста!".' }
        ],
        [
            { sentence: 'Я буду чай, пожалуйста.', translation: 'Eu vou querer chá, por favor.', tokens: ['Я', 'буду', 'чай,', 'пожалуйста.'], audio: 'Я буду чай, пожалуйста.' },
            { sentence: 'Счёт, пожалуйста!', translation: 'A conta, por favor!', tokens: ['Счёт,', 'пожалуйста!'], audio: 'Счёт, пожалуйста!' }
        ],
        [
            { speaker: 'Garçom', text: 'Здравствуйте! Что вы будете?', translation: 'Olá! O que os senhores vão querer?', audio: 'Здравствуйте! Что вы будете?' },
            { speaker: 'Cliente', text: 'Здравствуйте! Я буду борщ и чай.', translation: 'Olá! Eu vou querer borsch e chá.', audio: 'Здравствуйте! Я буду борщ и чай.' }
        ],
        [
            { q: 'Como se diz "Eu vou querer..." no restaurante?', options: ['Я хочу', 'Я буду', 'Я даю', 'Я ем'], correctIndex: 1, explanation: 'Я буду... é a expressão padrão.' },
            { q: 'O que ocorre com "вода" em "Я буду воду"?', options: ['Não muda', 'Muda para -у no Acusativo', 'Muda para -e', 'Muda para -i'], correctIndex: 1, explanation: 'Вода ➔ Воду no Acusativo.' },
            { q: 'Como pedir a conta?', options: ['Меню, пожалуйста', 'Счёт, пожалуйста', 'Воду, пожалуйста', 'Спасибо'], correctIndex: 1, explanation: 'Счёт, пожалуйста!' },
            { q: 'Qual bebida é "Чай"?', options: ['Café', 'Vinho', 'Chá', 'Cerveja'], correctIndex: 2, explanation: 'Чай = Chá.' },
            { q: 'Traduza: "Я буду кофе."', options: ['Eu vou querer café.', 'Eu tenho café.', 'Eu gosto de café.', 'Cadê o café?'], correctIndex: 0, explanation: 'Eu vou querer café.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_10',
        'Módulo 10: Русская кухня (Comidas Típicas)',
        'Conheça pratos tradicionais russos e aprenda a usar adjetivos de sabor.',
        'Conheça pratos como Борщ, Блины, Пельмени e elogie com "Вкусный!".',
        'A culinária russa é rica em sopas quentes, panquecas (блины) e massas recheadas (пельмени).',
        [
            { title: 'Concordância do Adjetivo Вкусный', rule: 'O adjetivo "saboroso" concorda com o gênero do prato.', formula: 'Вкусный (Masc) / Вкусная (Fem) / Вкусное (Neutro)', example: 'Вкусный борщ / Вкусная рыба.', exampleTranslation: 'Borsch saboroso / Peixe saboroso.' },
            { title: 'Expressando Gosto (Мне нравится)', rule: 'Para dizer que gosta de algo em russo, usa-se "Мне нравится" (singular) ou "Мне нравятся" (plural).', formula: 'Мне нравится + [Singular] / Мне нравятся + [Plural]', example: 'Мне нравится борщ.', exampleTranslation: 'Eu gosto de borsch.' }
        ],
        [
            { type: 'vocab', word: 'Борщ', romaji: 'Borsch', translation: 'Borsch (Sopa de beterraba)', audio: 'Борщ', dica: 'Tradicional sopa russa servida quente com creme azedo (smetana).' },
            { type: 'vocab', word: 'Блины', romaji: 'Bliny', translation: 'Panquecas russas', audio: 'Блины', dica: 'Panquecas finas russas servidas doces ou salgadas.' },
            { type: 'vocab', word: 'Пельмени', romaji: 'Pelmeni', translation: 'Massa recheada russa', audio: 'Пельмени', dica: 'Pequeños bolinhos de massa cozida recheados com carne.' },
            { type: 'vocab', word: 'Вкусный', romaji: 'Vkusny', translation: 'Saboroso / Gostoso', audio: 'Вкусный', dica: 'Adjetivo masculino para comida saborosa.' }
        ],
        [
            { sentence: 'Это очень вкусный борщ!', translation: 'Este é um borsch muito saboroso!', tokens: ['Это', 'очень', 'вкусный', 'борщ!'], audio: 'Это очень вкусный борщ!' },
            { sentence: 'Мне нравятся пельмени.', translation: 'Eu gosto de pelmeni.', tokens: ['Мне', 'нравятся', 'пельмени.'], audio: 'Мне нравятся пельмени.' }
        ],
        [
            { speaker: 'Katya', text: 'Попробуй борщ! Как тебе?', translation: 'Experimente o borsch! O que achou?', audio: 'Попробуй борщ! Как тебе?' },
            { speaker: 'Pedro', text: 'Ммм, это очень вкусно!', translation: 'Mmm, está muito gostoso!', audio: 'Ммм, это очень вкусно!' }
        ],
        [
            { q: 'O que é o "Борщ"?', options: ['Sopa de beterraba', 'Bebida', 'Bolo', 'Pão'], correctIndex: 0, explanation: 'Sopa de beterraba tradicional.' },
            { q: 'Como se diz "Muito gostoso!"?', options: ['Очень красиво', 'Очень вкусно', 'Очень плохо', 'Очень дорого'], correctIndex: 1, explanation: 'Очень вкусно = Muito gostoso!' },
            { q: 'Nome das panquecas russas?', options: ['Пельмени', 'Блины', 'Борщ', 'Сырники'], correctIndex: 1, explanation: 'Блины = Panquecas.' },
            { q: 'Adjetivo para "борщ" (masculino)?', options: ['Вкусная', 'Вкусный', 'Вкусное', 'Вкусные'], correctIndex: 1, explanation: 'Вкусный (masculino).' },
            { q: 'O que são "Пельмени"?', options: ['Bolinhos de massa recheados com carne', 'Salada', 'Chá', 'Sopa de peixe'], correctIndex: 0, explanation: 'Bolinhos recheados cozidos.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_11',
        'Módulo 11: В метро Москвы (Metrô de Moscou)',
        'Aprenda a se locomover nas estações do Metrô de Moscou usando o Caso Preposicional.',
        'Aprenda termos de transporte e o uso de В / НА no metrô.',
        'O Metrô de Moscou é um palácio subterrâneo. Termos principais: Станция, Вход, Выход.',
        [
            { title: 'Estações no Preposicional', rule: 'Substantivos femininos terminados em -ция mudam para -ции no Caso Preposicional.', formula: 'На + [Estação + ции]', example: 'Я на станции "Арбатская".', exampleTranslation: 'Estou na estação Arbatskaya.' },
            { title: 'Sinalizações de Entrada e Saída', rule: 'Palavras essenciais para se orientar em estações de metrô e prédios públicos.', formula: 'Вход (Entrada) / Выход (Saída)', example: 'Где выход в город?', exampleTranslation: 'Onde fica a saída?' }
        ],
        [
            { type: 'vocab', word: 'Метро', romaji: 'Metro', translation: 'Metrô', audio: 'Метро', dica: 'Palavra neutra indeclinável. O metrô de Moscou é famoso no mundo todo.' },
            { type: 'vocab', word: 'Станция', romaji: 'Stantsiya', translation: 'Estação', audio: 'Станция', dica: 'No preposicional muda para "на станции" (-ции).' },
            { type: 'vocab', word: 'Поезд', romaji: 'Poyezd', translation: 'Trem', audio: 'Поезд', dica: 'Substantivo masculino que indica o trem do metrô ou de linha.' },
            { type: 'vocab', word: 'Вход', romaji: 'Vkhod', translation: 'Entrada', audio: 'Вход', dica: 'Sinalização azul que indica a entrada da estação.' },
            { type: 'vocab', word: 'Выход', romaji: 'Vykhod', translation: 'Saída', audio: 'Выход', dica: 'Placa essencial no metrô para encontrar a saída ("выход в город").' }
        ],
        [
            { sentence: 'Где станция метро?', translation: 'Onde fica a estação de metrô?', tokens: ['Где', 'станция', 'метро?'], audio: 'Где станция метро?' },
            { sentence: 'Где выход в город?', translation: 'Onde fica a saída para a cidade?', tokens: ['Где', 'выход', 'в', 'город?'], audio: 'Где выход в город?' }
        ],
        [
            { speaker: 'Passageiro', text: 'Где станция "Театральная"?', translation: 'Onde fica a estação "Teatralnaya"?', audio: 'Где станция "Театральная"?' },
            { speaker: 'Guia', text: 'Прямо и налево.', translation: 'Em frente e à esquerda.', audio: 'Прямо и налево.' }
        ],
        [
            { q: 'O que significa "Выход"?', options: ['Entrada', 'Saída', 'Trem', 'Estação'], correctIndex: 1, explanation: 'Выход = Saída.' },
            { q: 'Como se diz "Estação de metrô"?', options: ['Станция метро', 'Поезд метро', 'Вход метро', 'Автобус'], correctIndex: 0, explanation: 'Станция метро.' },
            { q: 'Terminação de "Станция" em "na estação"?', options: ['На станция', 'На станции', 'На станцию', 'На станцией'], correctIndex: 1, explanation: 'На станции (-ции).' },
            { q: 'Traduza: "Где поезд?"', options: ['Onde está a saída?', 'Onde está o trem?', 'Onde está a entrada?', 'Onde é a rua?'], correctIndex: 1, explanation: 'Поезд = Trem.' },
            { q: 'O que significa "Большое спасибо"?', options: ['De nada', 'Muito obrigado(a)', 'Até logo', 'Com licença'], correctIndex: 1, explanation: 'Muito obrigado(a).' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_12',
        'Módulo 12: Который час? (Horas e Tempo)',
        'Aprenda a perguntar e informar as horas cheias e momentos do dia em russo.',
        'Domine a pergunta "Который час?" (Que horas são?) e responda horas cheias.',
        'Para horas cheias usa-se o número seguido de час / часа / часов.',
        [
            { title: 'Perguntando as Horas', rule: 'Para perguntar as horas em russo, usa-se a expressão "Который час?".', formula: 'Который час? (Que horas são?)', example: 'Который час? — Сейчас три часа.', exampleTranslation: 'Que horas são? — Agora são três horas.' },
            { title: 'Formas de Hora (Час / Часа / Часов)', rule: 'O substantivo "час" concorda com o número de horas.', formula: '1 час / 2,3,4 часа / 5-20 часов', example: 'Один час, два часа, пять часов.', exampleTranslation: '1h, 2h, 5h.' }
        ],
        [
            { type: 'vocab', word: 'Час', romaji: 'Chas', translation: 'Hora', audio: 'Час', dica: 'Forma singular usada após o número 1 ("Один час").' },
            { type: 'vocab', word: 'Минута', romaji: 'Minuta', translation: 'Minuto', audio: 'Минута', dica: 'Substantivo feminino para indicar minutos.' },
            { type: 'vocab', word: 'Утро', romaji: 'Utro', translation: 'Manhã', audio: 'Утро', dica: 'Momento da manhã. "Bom dia" de manhã é "Доброе утро".' },
            { type: 'vocab', word: 'День', romaji: 'Den', translation: 'Dia / Tarde', audio: 'День', dica: 'Momento da tarde. "Boa tarde" é "Добрый день".' },
            { type: 'vocab', word: 'Вечер', romaji: 'Vecher', translation: 'Noite', audio: 'Вечер', dica: 'Momento do começo da noite. "Boa noite" é "Добрый вечер".' }
        ],
        [
            { sentence: 'Который сейчас час?', translation: 'Que horas são agora?', tokens: ['Который', 'сейчас', 'час?'], audio: 'Который сейчас час?' },
            { sentence: 'Сейчас пять часов вечера.', translation: 'Agora são cinco horas da noite.', tokens: ['Сейчас', 'пять', 'часов', 'вечера.'], audio: 'Сейчас пять часов вечера.' }
        ],
        [
            { speaker: 'Anton', text: 'Извините, который час?', translation: 'Com licença, que horas são?', audio: 'Извините, который час?' },
            { speaker: 'Nina', text: 'Сейчас два часа дня.', translation: 'Agora são duas horas da tarde.', audio: 'Сейчас два часа дня.' }
        ],
        [
            { q: 'Pergunta para "Que horas são?"', options: ['Где час?', 'Который час?', 'Кто час?', 'Сколько час?'], correctIndex: 1, explanation: 'Который час?' },
            { q: 'Forma de "час" após o número 5?', options: ['Час', 'Часа', 'Часов', 'Часе'], correctIndex: 2, explanation: 'Пять часов.' },
            { q: 'Qual palavra significa "Manhã"?', options: ['Утро', 'День', 'Вечер', 'Ночь'], correctIndex: 0, explanation: 'Утро = Manhã.' },
            { q: 'Traduza: "Сейчас три часа."', options: ['Agora é 1h.', 'Agora são 2h.', 'Agora são 3h.', 'Agora são 5h.'], correctIndex: 2, explanation: 'Agora são três horas.' },
            { q: 'O que significa "Извините"?', options: ['Obrigado', 'Com licença / Desculpe', 'Por favor', 'Tchau'], correctIndex: 1, explanation: 'Com licença / Desculpe.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_13',
        'Módulo 13: Дни недели и месяцы (Dias e Meses)',
        'Aprenda os dias da semana e meses em russo com a preposição В + Acusativo.',
        'Aprenda os dias da semana e use "В + Acusativo" para dizer "Na segunda, na terça...".',
        'Para expressar "em qual dia", usa-se a preposição В com Acusativo (ex: В понедельник = Na segunda-feira).',
        [
            { title: 'Dias da Semana com В', rule: 'Para indicar em qual dia da semana algo acontece, usa-se В + Acusativo.', formula: 'В + [Dia da Semana no Acusativo]', example: 'В понедельник я работаю.', exampleTranslation: 'Na segunda eu trabalho.' },
            { title: 'Meses do Ano no Preposicional', rule: 'Para dizer "em tal mês", usa-se В + Caso Preposicional.', formula: 'В + [Mês no Preposicional]', example: 'В январе холодно.', exampleTranslation: 'Em janeiro faz frio.' }
        ],
        [
            { type: 'vocab', word: 'Понедельник', romaji: 'Ponedelnik', translation: 'Segunda-feira', audio: 'Понедельник', dica: 'Primeiro dia útil. "Na segunda" é "в понедельник".' },
            { type: 'vocab', word: 'Вторник', romaji: 'Vtornik', translation: 'Terça-feira', audio: 'Вторник', dica: 'Segundo dia útil. "Na terça" é "во вторник".' },
            { type: 'vocab', word: 'Среда', romaji: 'Sreda', translation: 'Quarta-feira', audio: 'Среда', dica: 'Meio da semana. No acusativo vira "в среду".' },
            { type: 'vocab', word: 'Суббота', romaji: 'Subbota', translation: 'Sábado', audio: 'Суббота', dica: 'Fim de semana. No acusativo vira "в субботу".' },
            { type: 'vocab', word: 'Воскресенье', romaji: 'Voskresenye', translation: 'Domingo', audio: 'Воскресенье', dica: 'Literalmente "Ressurreição". "No domingo" é "в воскресенье".' }
        ],
        [
            { sentence: 'В понедельник я работаю.', translation: 'Na segunda-feira eu trabalho.', tokens: ['В', 'понедельник', 'я', 'работаю.'], audio: 'В понедельник я работаю.' },
            { sentence: 'В субботу я отдыхаю.', translation: 'No sábado eu descanso.', tokens: ['В', 'субботу', 'я', 'отдыхаю.'], audio: 'В субботу я отдыхаю.' }
        ],
        [
            { speaker: 'Serafima', text: 'Когда мы встретимся?', translation: 'Quando nós vamos nos encontrar?', audio: 'Когда мы встретимся?' },
            { speaker: 'Yuri', text: 'Давай в субботу!', translation: 'Vamos no sábado!', audio: 'Давай в субботу!' }
        ],
        [
            { q: 'Como se diz "Segunda-feira"?', options: ['Среда', 'Вторник', 'Понедельник', 'Суббота'], correctIndex: 2, explanation: 'Понедельник = Segunda-feira.' },
            { q: 'Forma de "na quarta-feira" (среда)?', options: ['в среда', 'в среду', 'в среде', 'в средой'], correctIndex: 1, explanation: 'в среду (Acusativo).' },
            { q: 'Qual palavra significa "Domingo"?', options: ['Воскресенье', 'Суббота', 'Пятница', 'Четверг'], correctIndex: 0, explanation: 'Воскресенье = Domingo.' },
            { q: 'Traduza: "В субботу."', options: ['Na segunda', 'Na terça', 'No sábado', 'No domingo'], correctIndex: 2, explanation: 'No sábado.' },
            { q: 'O que significa "Когда"?', options: ['Onde', 'Quando', 'Quem', 'Como'], correctIndex: 1, explanation: 'Когда = Quando.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_14',
        'Módulo 14: Мой день (Rotina e 1ª Conjugação)',
        'Aprenda verbos da 1ª Conjugação (-ать) para descrever sua rotina diária.',
        'Aprenda a conjugar verbos da 1ª Conjugação terminados em -ать (читать, делать, работать).',
        'Na 1ª conjugação, as terminações no presente são: Я -ю, Ты -ешь, Он/Она -ет, Мы -ем, Вы -ете, Они -ют.',
        [
            { title: '1ª Conjugação (-ать)', rule: 'Os verbos da 1ª conjugação em -ать seguem um padrão regular de terminações no presente.', formula: 'Я -ю, Ты -ешь, Он -ет, Мы -ем, Вы -ете, Они -ют', example: 'Я читаю книгу.', exampleTranslation: 'Eu leio um livro.' },
            { title: 'Perguntando a Ação Atual', rule: 'Para perguntar o que alguém está fazendo no momento.', formula: 'Что ты делаешь? (Informal) / Что вы делаете? (Formal)', example: 'Что ты делаешь? — Я работаю.', exampleTranslation: 'O que faz? — Trabalhando.' }
        ],
        [
            { type: 'vocab', word: 'Читать', romaji: 'Chitat', translation: 'Ler', audio: 'Читать', dica: 'Verbo em -ать: Я читаю, Ты читаешь, Он читает.' },
            { type: 'vocab', word: 'Делать', romaji: 'Delat', translation: 'Fazer', audio: 'Делать', dica: 'Verbo em -ать: "Что ты делаешь?" = O que você está fazendo?' },
            { type: 'vocab', word: 'Работать', romaji: 'Rabotat', translation: 'Trabalhar', audio: 'Работать', dica: 'Verbo em -ать: Я работаю (Eu trabalho).' },
            { type: 'vocab', word: 'Отдыхать', romaji: 'Otdykhat', translation: 'Descansar', audio: 'Отдыхать', dica: 'Verbo em -ать: Я отдыхаю (Eu descanso).' }
        ],
        [
            { sentence: 'Что ты делаешь? Я читаю.', translation: 'O que você está fazendo? Eu estou lendo.', tokens: ['Что', 'ты', 'делаешь?', 'Я', 'читаю.'], audio: 'Что ты делаешь? Я читаю.' },
            { sentence: 'Мы работаем и отдыхаем.', translation: 'Nós trabalhamos e descansamos.', tokens: ['Мы', 'работаем', 'и', 'отдыхаем.'], audio: 'Мы работаем и отдыхаем.' }
        ],
        [
            { speaker: 'Maxim', text: 'Привет! Что ты делаешь?', translation: 'Oi! O que você está fazendo?', audio: 'Привет! Что ты делаешь?' },
            { speaker: 'Sofia', text: 'Я читаю книгу. А ты?', translation: 'Eu estou lendo um livro. E você?', audio: 'Я читаю книгу. А ты?' }
        ],
        [
            { q: 'Conjugação de "читать" para "Я"?', options: ['Я читаешь', 'Я читает', 'Я читаю', 'Я читаем'], correctIndex: 2, explanation: 'Я читаю.' },
            { q: 'Traduza: "Что ты делаешь?"', options: ['Onde mora?', 'O que está fazendo?', 'Como está?', 'Quem é?'], correctIndex: 1, explanation: 'O que está fazendo?' },
            { q: 'Verbo que significa "Trabalhar"?', options: ['Читать', 'Работать', 'Знать', 'Отдыхать'], correctIndex: 1, explanation: 'Работать = Trabalhar.' },
            { q: 'Conjugação de "работать" para "Он"?', options: ['Он работаю', 'Он работаешь', 'Он работает', 'Он работают'], correctIndex: 2, explanation: 'Он работает.' },
            { q: 'Significado de "Отдыхать"?', options: ['Comer', 'Estudar', 'Descansar', 'Dormir'], correctIndex: 2, explanation: 'Descansar.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_15',
        'Módulo 15: Что ты делаешь? (2ª Conjugação)',
        'Aprenda verbos da 2ª Conjugação (-ить) como говорить, смотреть e жить.',
        'Aprenda as terminações da 2ª conjugação em -ить (говорить, смотреть, учить).',
        'Verbos da 2ª conjugação recebem no presente: Я -ю/у, Ты -ишь, Он -ит, Мы -им, Вы -ите, Они -ят/ат.',
        [
            { title: '2ª Conjugação (-ить)', rule: 'Os verbos da 2ª conjugação em -ить possuem terminações características no presente.', formula: 'Я -ю/у, Ты -ишь, Он -ит, Мы -им, Вы -ите, Они -ят/ат', example: 'Я говорю по-русски.', exampleTranslation: 'Eu falo russo.' },
            { title: 'Falar Idiomas (по-...)', rule: 'Ao usar o verbo "говорить", adiciona-se o prefixo "по-" ao idioma.', formula: 'Говорить + по-[idioma]', example: 'Вы говорите по-русски?', exampleTranslation: 'Você fala russo?' }
        ],
        [
            { type: 'vocab', word: 'Говорить', romaji: 'Govorit', translation: 'Falar', audio: 'Говорить', dica: 'Verbo da 2ª conjugação: Я говорю, Ты говоришь, Вы говорите.' },
            { type: 'vocab', word: 'Смотреть', romaji: 'Smotret', translation: 'Olhar / Assistir', audio: 'Смотреть', dica: 'Verbo da 2ª conjugação (exceção em -еть): Я смотрю.' },
            { type: 'vocab', word: 'Учить', romaji: 'Uchit', translation: 'Aprender / Estudar', audio: 'Учить', dica: 'Verbo da 2ª conjugação: Я учу русский язык.' },
            { type: 'vocab', word: 'по-русски', romaji: 'po-russki', translation: 'russo (idioma)', audio: 'по-русски', dica: 'Advérbio usado com o verbo говорить: "Я говорю по-русски".' }
        ],
        [
            { sentence: 'Я говорю по-русски.', translation: 'Eu falo russo.', tokens: ['Я', 'говорю', 'по-русски.'], audio: 'Я говорю по-русски.' },
            { sentence: 'Вы говорите по-португальски?', translation: 'Você fala português?', tokens: ['Вы', 'говорите', 'по-португальски?'], audio: 'Вы говорите по-португальски?' }
        ],
        [
            { speaker: 'Nikolai', text: 'Вы говорите по-русски?', translation: 'Você fala russo?', audio: 'Вы говорите по-русски?' },
            { speaker: 'Beatriz', text: 'Да, я немного говорю по-русски.', translation: 'Sim, eu falo um pouco de russo.', audio: 'Да, я немного говорю по-русски.' }
        ],
        [
            { q: 'Como se diz "Eu falo russo"?', options: ['Я говорю русский', 'Я говорю по-русски', 'Я читать по-русски', 'Я знаю русский'], correctIndex: 1, explanation: 'Я говорю по-русски.' },
            { q: 'Terminação de "Ты" na 2ª conjugação (говорить)?', options: ['Ты говоришь', 'Ты говориешь', 'Ты говорят', 'Ты говорите'], correctIndex: 0, explanation: 'Ты говоришь.' },
            { q: 'Verbo para "Assistir / Olhar"?', options: ['Учить', 'Смотреть', 'Говорить', 'Жить'], correctIndex: 1, explanation: 'Смотреть = Assistir.' },
            { q: 'Traduza: "Я немного говорю по-русски."', options: ['Falo muito bem.', 'Não falo nada.', 'Falo um pouco de russo.', 'Estudo russo.'], correctIndex: 2, explanation: 'Немного = Um pouco.' },
            { q: 'Idioma português falado?', options: ['по-русски', 'по-португальски', 'по-английски', 'по-испански'], correctIndex: 1, explanation: 'по-португальски.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_16',
        'Módulo 16: В магазине (Compras e Preços)',
        'Aprenda a perguntar preços com "Сколько стоит...?" e a usar os rublos.',
        'Domine a expressão "Сколько стоит...?" (Quanto custa...?) e a moeda Rublo (Рубль).',
        'Para perguntar o preço no singular usa-se "Сколько стоит...?" e no plural "Сколько стоят...?".',
        [
            { title: 'Perguntando Preços (Сколько стоит)', rule: 'Diferencie o preço no singular (стоит) do plural (стоят).', formula: 'Сколько стоит [Singular]? / Сколько стоят [Plural]?', example: 'Сколько стоит книга? / Сколько стоят сувениры?', exampleTranslation: 'Quanto custa o livro? / Quanto custam os souvenirs?' },
            { title: 'Flexão de Rublos', rule: 'O substantivo "рубль" muda de acordo com o número que o antecede.', formula: '1 рубль / 2,3,4 рубля / 5-20 рублей', example: 'Один рубль, два рубля, сто рублей.', exampleTranslation: '1 rublo, 2 rublos, 100 rublos.' }
        ],
        [
            { type: 'vocab', word: 'Сколько', romaji: 'Skolko', translation: 'Quanto(s)', audio: 'Сколько', dica: 'Pergunta sobre quantidade ou preço.' },
            { type: 'vocab', word: 'Стоить', romaji: 'Stoit', translation: 'Custar', audio: 'Стоить', dica: 'Verbo de valor: "Сколько стоит...?" = Quanto custa?' },
            { type: 'vocab', word: 'Рубль', romaji: 'Rubl', translation: 'Rublo (moeda)', audio: 'Рубль', dica: 'Moeda nacional da Rússia.' },
            { type: 'vocab', word: 'Магазин', romaji: 'Magazin', translation: 'Loja', audio: 'Магазин', dica: 'Falso amigo! Significa "loja" ou "supermercado" (não revista).' }
        ],
        [
            { sentence: 'Сколько это стоит?', translation: 'Quanto custa isto?', tokens: ['Сколько', 'это', 'стоит?'], audio: 'Сколько это стоит?' },
            { sentence: 'Это стоит сто рублей.', translation: 'Isto custa cem rublos.', tokens: ['Это', 'стоит', 'сто', 'рублей.'], audio: 'Это стоит сто рублей.' }
        ],
        [
            { speaker: 'Comprador', text: 'Сколько стоит эта матрёшка?', translation: 'Quanto custa esta matrioska?', audio: 'Сколько стоит эта матрёшка?' },
            { speaker: 'Vendedor', text: 'Она стоит 500 рублей.', translation: 'Ela custa 500 rublos.', audio: 'Она стоит 500 рублей.' }
        ],
        [
            { q: 'Pergunta para "Quanto custa isto?"', options: ['Где это стоит?', 'Сколько это стоит?', 'Кто это стоит?', 'Как это стоит?'], correctIndex: 1, explanation: 'Сколько это стоит?' },
            { q: 'Moeda oficial da Rússia?', options: ['Dólar', 'Euro', 'Rublo (Рубль)', 'Peso'], correctIndex: 2, explanation: 'Rublo.' },
            { q: 'Forma no plural (Quanto custam)?', options: ['Стоит', 'Стоят', 'Стою', 'Стоим'], correctIndex: 1, explanation: 'Сколько стоят...?' },
            { q: 'Traduza: "Магазин"', options: ['Revista', 'Loja', 'Massa', 'Museu'], correctIndex: 1, explanation: 'Магазин = Loja.' },
            { q: 'Palavra para "Dinheiro"?', options: ['Рубль', 'Деньги', 'Счёт', 'Цена'], correctIndex: 1, explanation: 'Деньги = Dinheiro.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_17',
        'Módulo 17: Одежда и цвета (Roupas e Cores)',
        'Aprenda peças de vestuário, cores e a concordância dos adjetivos.',
        'Aprenda os nomes das cores e a concordância dos adjetivos (-ый, -ая, -ое, -ые).',
        'Adjetivos em russo concordam em gênero e número: красный (masc), красная (fem), красное (neutro), красные (plural).',
        [
            { title: 'Concordância dos Adjetivos de Cor', rule: 'Adjetivos de cor concordam com o gênero e número do substantivo.', formula: 'Красный (Masc) / Красная (Fem) / Красное (Neutro) / Красные (Plural)', example: 'Красный шарф / Красная рубашка.', exampleTranslation: 'Cachecol vermelho / Camisa vermelha.' },
            { title: 'Roupas de Inverno', rule: 'Vocabulário essencial para vestuário de frio intenso.', formula: 'Пальто (Indeclinável) / Шапка / Шарф', example: 'Тёплое пальто и чёрная шапка.', exampleTranslation: 'Casaco quente e gorro preto.' }
        ],
        [
            { type: 'vocab', word: 'Красный', romaji: 'Krasny', translation: 'Vermelho', audio: 'Красный', dica: 'Cor vermelha. Também historicamente ligada a "bonito" em russo arcaico.' },
            { type: 'vocab', word: 'Синий', romaji: 'Siny', translation: 'Azul escuro', audio: 'Синий', dica: 'Azul escuro intenso (diferente de голубой que é azul claro).' },
            { type: 'vocab', word: 'Чёрный', romaji: 'Chorny', translation: 'Preto', audio: 'Чёрный', dica: 'Adjetivo masculino para a cor preta.' },
            { type: 'vocab', word: 'Шапка', romaji: 'Shapka', translation: 'Gorro / Touca', audio: 'Шапка', dica: 'Acessório de inverno essencial na Rússia.' },
            { type: 'vocab', word: 'Пальто', romaji: 'Palto', translation: 'Sobretudo / Casaco', audio: 'Пальто', dica: 'Palavra neutra e indeclinável em russo.' }
        ],
        [
            { sentence: 'Это красивая красная шапка.', translation: 'Este é um gorro vermelho bonito.', tokens: ['Это', 'красивая', 'красная', 'шапка.'], audio: 'Это красивая красная шапка.' },
            { sentence: 'Я хочу чёрное пальто.', translation: 'Eu quero um sobretudo preto.', tokens: ['Я', 'хочу', 'чёрное', 'пальто.'], audio: 'Я хочу чёрное пальто.' }
        ],
        [
            { speaker: 'Vendedora', text: 'Какая шапка вам нравится?', translation: 'De qual gorro a senhora gosta?', audio: 'Какая шапка вам нравится?' },
            { speaker: 'Marina', text: 'Мне нравится эта синяя шапка.', translation: 'Eu gosto deste gorro azul.', audio: 'Мне нравится эта синяя шапка.' }
        ],
        [
            { q: 'Feminino da cor vermelha (красный)?', options: ['Красный', 'Красная', 'Красное', 'Красные'], correctIndex: 1, explanation: 'Красная шапка.' },
            { q: 'Gorro / Touca de inverno em russo?', options: ['Рубашка', 'Шапка', 'Брюки', 'Юбка'], correctIndex: 1, explanation: 'Шапка.' },
            { q: 'Cor da palavra "Чёрный"?', options: ['Branco', 'Azul', 'Preto', 'Verde'], correctIndex: 2, explanation: 'Чёрный = Preto.' },
            { q: 'A palavra "Пальто" altera terminação?', options: ['Sim', 'Não, é indeclinável', 'Muda no plural', 'Muda no feminino'], correctIndex: 1, explanation: 'Пальто é indeclinável.' },
            { q: 'Traduza: "Синяя шапка."', options: ['Gorro vermelho', 'Gorro preto', 'Gorro azul', 'Gorro branco'], correctIndex: 2, explanation: 'Gorro azul.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_18',
        'Módulo 18: Погода в России (O Clima na Rússia)',
        'Aprenda a falar sobre o tempo e o clima na Rússia com frases impessoais.',
        'Aprenda expressões impessoais de clima como "Холодно" (Faz frio) e "Идёт снег" (Está nevando).',
        'Para clima em russo usam-se advérbios curtos: Холодно (Frio), Тепло (Agradável/Quente), Жарко (Muito quente).',
        [
            { title: 'Frases Impessoais de Clima', rule: 'Para falar sobre a temperatura e o clima usam-se advérbios impessoais.', formula: 'Сегодня + [Холодно / Тепло / Жарко]', example: 'Сегодня очень холодно.', exampleTranslation: 'Hoje está muito frio.' },
            { title: 'Precipitações (Neve e Chuva)', rule: 'Para dizer que está nevando ou chovendo usa-se o verbo "идти".', formula: 'Идёт снег (Nevando) / Идёт дождь (Chovendo)', example: 'На улице идёт снег.', exampleTranslation: 'Está nevando na rua.' }
        ],
        [
            { type: 'vocab', word: 'Холодно', romaji: 'Kholodno', translation: 'Frio', audio: 'Холодно', dica: 'Advérbio impessoal: "Сегодня холодно" = Hoje está frio.' },
            { type: 'vocab', word: 'Тепло', romaji: 'Teplo', translation: 'Agradável / Morno', audio: 'Тепло', dica: 'Temperatura amena e agradável.' },
            { type: 'vocab', word: 'Жарко', romaji: 'Zharko', translation: 'Quente / Calor', audio: 'Жарко', dica: 'Usado para dias quentes de verão.' },
            { type: 'vocab', word: 'Снег', romaji: 'Sneg', translation: 'Neve', audio: 'Снег', dica: 'Está nevando = "Идёт снег".' },
            { type: 'vocab', word: 'Дождь', romaji: 'Dozhd', translation: 'Chuva', audio: 'Дождь', dica: 'Está chovendo = "Идёт дождь".' }
        ],
        [
            { sentence: 'Сегодня на улице очень холодно.', translation: 'Hoje está muito frio na rua.', tokens: ['Сегодня', 'на', 'улице', 'очень', 'холодно.'], audio: 'Сегодня на улице очень холодно.' },
            { sentence: 'Смотри, идёт снег!', translation: 'Olhe, está nevando!', tokens: ['Смотри,', 'идёт', 'снег!'], audio: 'Смотри, идёт снег!' }
        ],
        [
            { speaker: 'Ivan', text: 'Какая сегодня погода?', translation: 'Como está o clima hoje?', audio: 'Какая сегодня погода?' },
            { speaker: 'Olga', text: 'Очень холодно и идёт снег.', translation: 'Está muito frio e nevando.', audio: 'Очень холодно и идёт снег.' }
        ],
        [
            { q: 'Como se diz "Está frio"?', options: ['Жарко', 'Холодно', 'Тепло', 'Хорошо'], correctIndex: 1, explanation: 'Холодно = Frio.' },
            { q: 'O que significa "Идёт снег"?', options: ['Está chovendo', 'Ventando', 'Está nevando', 'Fazendo sol'], correctIndex: 2, explanation: 'Идёт снег = Está nevando.' },
            { q: 'Palavra para "Chuva"?', options: ['Снег', 'Дождь', 'Солнце', 'Ветер'], correctIndex: 1, explanation: 'Дождь = Chuva.' },
            { q: 'Traduza: "Сегодня жарко."', options: ['Hoje está frio.', 'Está chovendo.', 'Hoje está calor.', 'Está escuro.'], correctIndex: 2, explanation: 'Жарко = Calor.' },
            { q: 'Palavra para "Clima / Tempo"?', options: ['Погода', 'Природа', 'Вода', 'Зима'], correctIndex: 0, explanation: 'Погода = Clima.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_19',
        'Módulo 19: В отеле (Check-in e Hospedagem)',
        'Aprenda a fazer check-in no hotel e fazer pedidos polidos com "Будьте добры...".',
        'Aprenda termos de hospedagem e pedidos com a expressão formal "Будьте добры...".',
        'A expressão "Будьте добры..." (Lit. "Seja tão bom...") é a forma mais cortês de pedir algo na recepção.',
        [
            { title: 'Pedidos Polidos com Будьте добры', rule: 'A expressão mais cortês para solicitar atendimento em hotéis ou serviços.', formula: 'Будьте добры + [Pedido]', example: 'Будьте добры, мой ключ.', exampleTranslation: 'Tenha a gentileza, minha chave.' },
            { title: 'Vocabulário de Hotel', rule: 'Termos fundamentais para check-in e hospedagem.', formula: 'Номер (Quarto) / Ключ (Chave) / Бронь (Reserva)', example: 'У меня забронирован номер.', exampleTranslation: 'Eu tenho um quarto reservado.' }
        ],
        [
            { type: 'vocab', word: 'Отель', romaji: 'Otel', translation: 'Hotel', audio: 'Отель', dica: 'Palavra masculina terminada em sinal brando (ь).' },
            { type: 'vocab', word: 'Номер', romaji: 'Nomer', translation: 'Quarto de hotel / Número', audio: 'Номер', dica: 'Em hotéis significa "quarto reservado".' },
            { type: 'vocab', word: 'Ключ', romaji: 'Klyuch', translation: 'Chave', audio: 'Ключ', dica: 'Chave do quarto ou fechadura.' },
            { type: 'vocab', word: 'Бронь', romaji: 'Bron', translation: 'Reserva', audio: 'Бронь', dica: 'Reserva confirmada no hotel.' }
        ],
        [
            { sentence: 'Здравствуйте! У меня есть бронь.', translation: 'Olá! Eu tenho uma reserva.', tokens: ['Здравствуйте!', 'У', 'меня', 'есть', 'бронь.'], audio: 'Здравствуйте! У меня есть бронь.' },
            { sentence: 'Будьте добры, мой ключ.', translation: 'Por favor, minha chave.', tokens: ['Будьте', 'добры,', 'мой', 'ключ.'], audio: 'Будьте добры, мой ключ.' }
        ],
        [
            { speaker: 'Recepcionista', text: 'Здравствуйте! Ваша фамилия?', translation: 'Olá! Qual o seu sobrenome?', audio: 'Здравствуйте! Ваша фамилия?' },
            { speaker: 'Hóspede', text: 'Моя фамилия Сильва. У меня бронь.', translation: 'Meu sobrenome é Silva. Eu tenho uma reserva.', audio: 'Моя фамилия Сильва. У меня бронь.' }
        ],
        [
            { q: 'O que significa "Номер" no hotel?', options: ['Telefone', 'Quarto de hotel', 'Andar', 'Passaporte'], correctIndex: 1, explanation: 'Номер = Quarto de hotel.' },
            { q: 'Como se diz "Chave"?', options: ['Ключ', 'Бронь', 'Номер', 'Паспорт'], correctIndex: 0, explanation: 'Ключ = Chave.' },
            { q: 'Significado de "Будьте добры"?', options: ['Bom dia', 'Tenha a gentileza / Por favor', 'Até mais', 'Obrigado'], correctIndex: 1, explanation: 'Будьте добры = Tenha a gentileza.' },
            { q: 'Traduza: "У меня есть бронь."', options: ['Tenho mala.', 'Tenho reserva.', 'Quero café.', 'Cadê meu quarto?'], correctIndex: 1, explanation: 'Eu tenho uma reserva.' },
            { q: 'Palavra para "Sobrenome"?', options: ['Имя', 'Фамилия', 'Адрес', 'Город'], correctIndex: 1, explanation: 'Фамилия = Sobrenome.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_20',
        'Módulo 20: Здоровье и аптека (Saúde e Farmácia)',
        'Aprenda a expressar dores e sintomas com a estrutura "У меня болит...".',
        'Domine a expressão "У меня болит..." (Estou com dor em...) e vocabulário de farmácia.',
        'Para dor no singular usa-se "У меня болит..." e no plural "У меня болят...".',
        [
            { title: 'Estrutura У меня болит...', rule: 'Para expressar dores no corpo, diferencie singular e plural.', formula: 'У меня болит + [Singular] / У меня болят + [Plural]', example: 'У меня болит голова (sing) / У меня болят зубы (plural)', exampleTranslation: 'Dor de cabeça / Dor nos dentes' },
            { title: 'Pedidos na Farmácia', rule: 'Para solicitar um medicamento específico na farmácia.', formula: 'Дайте, пожалуйста, лекарство от + [Sintoma]', example: 'Дайте лекарство от боли.', exampleTranslation: 'Remédio para dor.' }
        ],
        [
            { type: 'vocab', word: 'Аптека', romaji: 'Apteka', translation: 'Farmácia', audio: 'Аптека', dica: 'Estabelecimento comercial onde se compram remédios.' },
            { type: 'vocab', word: 'Лекарство', romaji: 'Lekarstvo', translation: 'Remédio', audio: 'Лекарство', dica: 'Medicamento em geral.' },
            { type: 'vocab', word: 'Голова', romaji: 'Golova', translation: 'Cabeça', audio: 'Голова', dica: 'Dor de cabeça = "У меня болит голова".' },
            { type: 'vocab', word: 'Болеть', romaji: 'Bolet', translation: 'Doer', audio: 'Болеть', dica: 'Verbo de dor ou doença.' }
        ],
        [
            { sentence: 'У меня болит голова.', translation: 'Estou com dor de cabeça.', tokens: ['У', 'меня', 'болит', 'голова.'], audio: 'У меня болит голова.' },
            { sentence: 'Где находится аптека?', translation: 'Onde fica a farmácia?', tokens: ['Где', 'находится', 'аптека?'], audio: 'Где находится аптека?' }
        ],
        [
            { speaker: 'Farmacêutica', text: 'Здравствуйте! Чем могу помочь?', translation: 'Olá! Como posso ajudar?', audio: 'Здравствуйте! Чем могу помочь?' },
            { speaker: 'Cliente', text: 'У меня очень болит голова.', translation: 'Estou com muita dor de cabeça.', audio: 'У меня очень болит голова.' }
        ],
        [
            { q: 'Como se diz "Estou com dor de cabeça"?', options: ['У меня есть голова', 'У меня болит голова', 'Я голова', 'Голова боль'], correctIndex: 1, explanation: 'У меня болит голова.' },
            { q: 'Palavra para "Farmácia"?', options: ['Больница', 'Аптека', 'Отель', 'Магазин'], correctIndex: 1, explanation: 'Аптека = Farmácia.' },
            { q: 'O que é "Лекарство"?', options: ['Médico', 'Remédio', 'Hospital', 'Receita'], correctIndex: 1, explanation: 'Лекарство = Remédio.' },
            { q: 'Verbo para dores no plural (dentes)?', options: ['Болит', 'Болят', 'Болею', 'Боль'], correctIndex: 1, explanation: 'У меня болят...' },
            { q: 'Traduza: "Голова"', options: ['Barriga', 'Braço', 'Cabeça', 'Dente'], correctIndex: 2, explanation: 'Голова = Cabeça.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_21',
        'Módulo 21: Транспорт в городе (Transportes Urbanos)',
        'Aprenda os meios de transporte urbano e o uso de На + Caso Preposicional.',
        'Aprenda a dizer "ir de ônibus/táxi" usando a preposição На + Preposicional (на автобусе).',
        'Para indicar o meio de transporte utilizado, usa-se a preposição На no Caso Preposicional.',
        [
            { title: 'Meios de Transporte com НА', rule: 'Para indicar o meio de transporte utilizado, usa-se Na no Preposicional.', formula: 'НА + [Transporte no Preposicional]', example: 'Я еду на автобусе.', exampleTranslation: 'Estou indo de ônibus.' },
            { title: 'Verbo de Deslocamento Ехать', rule: 'Diferença entre deslocar-se a pé (идти) e por veículo (ехать).', formula: 'Я еду / Ты едешь / Он едет / Мы едем / Они едут', example: 'Мы едем в центр на такси.', exampleTranslation: 'Vamos ao centro de táxi.' }
        ],
        [
            { type: 'vocab', word: 'Автобус', romaji: 'Avtobus', translation: 'Ônibus', audio: 'Автобус', dica: 'Meio de transporte urbano. Ir de ônibus = "на автобусе".' },
            { type: 'vocab', word: 'Такси', romaji: 'Taksi', translation: 'Táxi', audio: 'Такси', dica: 'Palavra indeclinável. Ir de táxi = "на такси".' },
            { type: 'vocab', word: 'Трамвай', romaji: 'Tramvay', translation: 'Bonde', audio: 'Трамвай', dica: 'Bonde elétrico tradicional de cidade.' },
            { type: 'vocab', word: 'Ехать', romaji: 'Yekhat', translation: 'Ir de transporte', audio: 'Ехать', dica: 'Usado exclusivamente para deslocamento por veículo.' }
        ],
        [
            { sentence: 'Я еду в центр на автобусе.', translation: 'Eu estou indo ao centro de ônibus.', tokens: ['Я', 'еду', 'в', 'центр', 'на', 'автобусе.'], audio: 'Я еду в центр на автобусе.' },
            { sentence: 'Мы едем в отель на такси.', translation: 'Nós estamos indo ao hotel de táxi.', tokens: ['Мы', 'едем', 'в', 'отель', 'на', 'такси.'], audio: 'Мы едем в отель на такси.' }
        ],
        [
            { speaker: 'Turista', text: 'Как доехать до Кремля?', translation: 'Como chegar ao Kremlin de transporte?', audio: 'Как доехать до Кремля?' },
            { speaker: 'Passante', text: 'Вы можете поехать на метро.', translation: 'Você pode ir de metrô.', audio: 'Вы можете поехать на метро.' }
        ],
        [
            { q: 'Como se diz "de ônibus"?', options: ['в автобус', 'на автобусе', 'с автобусом', 'из автобуса'], correctIndex: 1, explanation: 'на автобусе.' },
            { q: 'A palavra "Такси" muda de terminação?', options: ['Sim', 'Não, é indeclinável', 'Muda no plural', 'Muda no feminino'], correctIndex: 1, explanation: 'Такси é indeclinável.' },
            { q: 'Verbo para "ir de transporte"?', options: ['Идти', 'Ехать', 'Жить', 'Читать'], correctIndex: 1, explanation: 'Ехать.' },
            { q: 'Traduza: "Трамвай"', options: ['Trem de alta velocidade', 'Bonde', 'Avião', 'Navio'], correctIndex: 1, explanation: 'Трамвай = Bonde.' },
            { q: 'Preposição para meios de transporte (ir DE metrô)?', options: ['В', 'На', 'Из', 'К'], correctIndex: 1, explanation: 'На (на метро).' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_22',
        'Módulo 22: Ориентация в городе (Direções e Localização)',
        'Aprenda advérbios de direção como Направо, Налево, Прямо para pedir e dar orientações.',
        'Domine advérbios fundamentais: Направо (Direita), Налево (Esquerda), Прямо (Em frente).',
        'Para orientar alguém na cidade usam-se advérbios indeclináveis de direção.',
        [
            { title: 'Advérbios de Direção', rule: 'Termos essenciais para dar e seguir orientações na cidade.', formula: 'Прямо (Em frente) / Направо (Direita) / Налево (Esquerda)', example: 'Идите прямо, потом направо.', exampleTranslation: 'Vá em frente, depois à direita.' },
            { title: 'Advérbios de Proximidade', rule: 'Expressando distância ou proximidade de pontos de interesse.', formula: 'Рядом (Perto) / Далеко (Longe)', example: 'Метро рядом? — Нет, далеко.', exampleTranslation: 'O metrô é perto? — Não, longe.' }
        ],
        [
            { type: 'vocab', word: 'Прямо', romaji: 'Pryamo', translation: 'Em frente', audio: 'Прямо', dica: 'Advérbio de direção para seguir reto em frente.' },
            { type: 'vocab', word: 'Направо', romaji: 'Napravo', translation: 'À direita', audio: 'Направо', dica: 'Advérbio de direção para virar à direita.' },
            { type: 'vocab', word: 'Налево', romaji: 'Nalevo', translation: 'À esquerda', audio: 'Налево', dica: 'Advérbio de direção para virar à esquerda.' },
            { type: 'vocab', word: 'Рядом', romaji: 'Ryadom', translation: 'Perto / Ao lado', audio: 'Рядом', dica: 'Indica proximidade imediata.' },
            { type: 'vocab', word: 'Далеко', romaji: 'Daleko', translation: 'Longe', audio: 'Далеко', dica: 'Indica longa distância.' }
        ],
        [
            { sentence: 'Идите прямо и потом налево.', translation: 'Siga em frente e depois à esquerda.', tokens: ['Идите', 'прямо', 'и', 'потом', 'налево.'], audio: 'Идите прямо и потом налево.' },
            { sentence: 'Красная площадь рядом.', translation: 'A Praça Vermelha fica perto.', tokens: ['Красная', 'площадь', 'рядом.'], audio: 'Красная площадь рядом.' }
        ],
        [
            { speaker: 'Pedestre', text: 'Извините, где Красная площадь?', translation: 'Com licença, onde fica a Praça Vermelha?', audio: 'Извините, где Красная площадь?' },
            { speaker: 'Local', text: 'Идите прямо, а потом поверните направо.', translation: 'Vá em frente e depois vire à direita.', audio: 'Идите прямо, а потом поверните направо.' }
        ],
        [
            { q: 'Como se diz "À direita"?', options: ['Прямо', 'Налево', 'Направо', 'Рядом'], correctIndex: 2, explanation: 'Направо = À direita.' },
            { q: 'Palavra para "Em frente"?', options: ['Налево', 'Прямо', 'Далеко', 'Рядом'], correctIndex: 1, explanation: 'Прямо = Em frente.' },
            { q: 'Significado de "Далеко"?', options: ['Perto', 'Longe', 'Aqui', 'Lá'], correctIndex: 1, explanation: 'Далеко = Longe.' },
            { q: 'Traduza: "Идите налево."', options: ['Vá em frente.', 'Vá à direita.', 'Vá à esquerda.', 'Fique aqui.'], correctIndex: 2, explanation: 'Налево = À esquerda.' },
            { q: 'Palavra para "Perto / Ao lado"?', options: ['Далеко', 'Рядом', 'Там', 'Здесь'], correctIndex: 1, explanation: 'Рядом = Perto.' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_23',
        'Módulo 23: Revisão Geral A1',
        'Consolide os conteúdos essenciais do Nível A1: Nominativo, Preposicional e Conjugações.',
        'Recapitule saudações, apresentações, o Caso Preposicional, o Caso Genitivo e conjugações verbais.',
        'Parabéns por chegar ao penúltimo módulo do Nível A1! Revise os pontos principais para o desafio final.',
        [
            { title: 'Resumo dos Casos Principais A1', rule: 'Síntese das 3 funções essenciais aprendidas no nível iniciante.', formula: 'Nominativo (Sujeito) / Preposicional (Local) / Genitivo (Origem)', example: 'Я из Бразилии (Gen). Я живу в Москве (Prep).', exampleTranslation: 'Sou do Brasil. Moro em Moscou.' },
            { title: 'Resumo das Conjugações', rule: 'Comparativo dos dois grandes grupos verbais em russo.', formula: '1ª Conjugação (-ать) vs 2ª Conjugação (-ить)', example: 'Я читаю (1ª) / Я говорю (2ª).', exampleTranslation: 'Eu leio / Eu falo.' }
        ],
        [
            { type: 'vocab', word: 'Здравствуйте', romaji: 'Zdravstvuyte', translation: 'Olá (formal)', audio: 'Здравствуйте', dica: 'Revisão A1: Saudação formal principal em russo.' },
            { type: 'vocab', word: 'Спасибо', romaji: 'Spasibo', translation: 'Obrigado(a)', audio: 'Спасибо', dica: 'Revisão A1: Agradecimento padrão universal.' },
            { type: 'vocab', word: 'в Москве', romaji: 'v Moskve', translation: 'em Moscou', audio: 'в Москве', dica: 'Revisão A1: Exemplo clássico do Caso Preposicional.' },
            { type: 'vocab', word: 'по-русски', romaji: 'po-russki', translation: 'russo (idioma)', audio: 'по-русски', dica: 'Revisão A1: Advérbio para o idioma russo com o verbo говорить.' }
        ],
        [
            { sentence: 'Здравствуйте! Я говорю по-русски.', translation: 'Olá! Eu falo russo.', tokens: ['Здравствуйте!', 'Я', 'говорю', 'по-русски.'], audio: 'Здравствуйте! Я говорю по-русски.' },
            { sentence: 'Я живу в Москве и работаю здесь.', translation: 'Eu moro em Moscou e trabalho aqui.', tokens: ['Я', 'живу', 'в', 'Москве', 'и', 'работаю', 'здесь.'], audio: 'Я живу в Москве и работаю здесь.' }
        ],
        [
            { speaker: 'Professor', text: 'Вы готовы к тесту?', translation: 'Você está pronto para o teste?', audio: 'Вы готовы к тесту?' },
            { speaker: 'Aluno', text: 'Да, я готов!', translation: 'Sim, estou pronto!', audio: 'Да, я готов!' }
        ],
        [
            { q: 'Qual preposição exige Genitivo para origem?', options: ['В', 'На', 'Из', 'К'], correctIndex: 2, explanation: 'Из indica origem (из Бразилии).' },
            { q: 'Terminação padrão do Preposicional singular?', options: ['-а', '-у', '-е', '-om'], correctIndex: 2, explanation: 'Terminação -е (в Москве).' },
            { q: 'Como se diz "Boa sorte!" em russo?', options: ['Желаю удачи!', 'Спасибо', 'До свидания', 'Очень приятно'], correctIndex: 0, explanation: 'Желаю удачи! = Boa sorte!' },
            { q: 'Como se diz "Eu moro"?', options: ['Я живу', 'Я живет', 'Я живешь', 'Я живет'], correctIndex: 0, explanation: 'Я живу.' },
            { q: 'Expressão para perguntar preços?', options: ['Сколько стоит?', 'Который час?', 'Как вас зовут?', 'Откуда вы?'], correctIndex: 0, explanation: 'Сколько стоит?' }
        ]
    ),
    criarModuloA1Handcrafted(
        'ru_a1_mod_24',
        'Módulo 24: Desafio Final A1 (Aeroporto de Moscou)',
        'Exame Integrado do Nível A1 simulando imigração, táxi, hotel e compras em Moscou.',
        'Demonstre seu domínio do Russo de Sobrevivência (A1) respondendo às 30 questões do desafio final.',
        'Bem-vindo ao Desafio Final A1! Este teste integrado avalia todos os seus conhecimentos de conversação básica em russo.',
        [
            { title: 'Certificação Interna A1', rule: 'Ao concluir este teste com aproveitamento, você estará preparado para o Nível A2.', formula: 'Russo de Sobrevivência (Nível A1 Concluído)', example: 'Поздравляем! (Parabéns!)', exampleTranslation: 'Parabéns!' },
            { title: 'Estruturas Fundamentais A1', rule: 'Revisão das expressões chave de cortesia, localização e compras.', formula: 'Здравствуйте / Меня зовут / Я из / Я живу / Сколько стоит', example: 'Здравствуйте! Я из Бразилии.', exampleTranslation: 'Olá! Sou do Brasil.' }
        ],
        [
            { type: 'vocab', word: 'Здравствуйте', romaji: 'Zdravstvuyte', translation: 'Olá (formal)', audio: 'Здравствуйте', dica: 'Desafio A1: Saudação inicial na imigração.' },
            { type: 'vocab', word: 'Спасибо', romaji: 'Spasibo', translation: 'Obrigado(a)', audio: 'Спасибо', dica: 'Desafio A1: Agradecimento ao atendente.' },
            { type: 'vocab', word: 'Пожалуйста', romaji: 'Pozhaluysta', translation: 'Por favor / De nada', audio: 'Пожалуйста', dica: 'Desafio A1: Cortesia na alfândega e táxi.' },
            { type: 'vocab', word: 'До свидания', romaji: 'Do svidaniya', translation: 'Até logo', audio: 'До свидания', dica: 'Desafio A1: Despedida ao concluir a viagem.' },
            { type: 'vocab', word: 'Поздравляем', romaji: 'Pozdravlyayem', translation: 'Parabéns!', audio: 'Поздравляем', dica: 'Mensagem final de vitória do nível A1!' }
        ],
        [
            { sentence: 'Здравствуйте! Я из Бразилии.', translation: 'Olá! Eu sou do Brasil.', tokens: ['Здравствуйте!', 'Я', 'из', 'Бразилии.'], audio: 'Здравствуйте! Я из Бразилии.' },
            { sentence: 'Я хочу заказать номер в отеле.', translation: 'Eu quero reservar um quarto no hotel.', tokens: ['Я', 'хочу', 'заказать', 'номер', 'в', 'отеле.'], audio: 'Я хочу заказать номер в отеле.' }
        ],
        [
            { speaker: 'Agente de Imigração', text: 'Здравствуйте! Ваш паспорт, пожалуйста.', translation: 'Olá! Seu passaporte, por favor.', audio: 'Здравствуйте! Ваш паспорт, пожалуйста.' },
            { speaker: 'Viajante', text: 'Здравствуйте! Вот мой паспорт.', translation: 'Olá! Aqui está meu passaporte.', audio: 'Здравствуйте! Вот мой паспорт.' },
            { speaker: 'Agente de Imigração', text: 'Откуда вы?', translation: 'De onde você é?', audio: 'Откуда вы?' },
            { speaker: 'Viajante', text: 'Я из Бразилии.', translation: 'Eu sou do Brasil.', audio: 'Я из Бразилии.' },
            { speaker: 'Agente de Imigração', text: 'Добро пожаловать в Россию!', translation: 'Seja bem-vindo à Rússia!', audio: 'Добро пожаловать в Россию!' }
        ],
        [
            { q: ' Como se diz "Olá" de forma formal?', options: ['Привет', 'Здравствуйте', 'Пока', 'Спасибо'], correctIndex: 1, explanation: 'Здравствуйте é a saudação formal.' },
            { q: ' O que significa "Спасибо"?', options: ['Por favor', 'Obrigado(a)', 'Tchau', 'Sim'], correctIndex: 1, explanation: 'Спасибо significa Obrigado(a).' },
            { q: ' Qual é a tradução de "Меня зовут"?', options: ['Meu nome é...', 'Eu sou de...', 'Eu moro em...', 'Onde fica...'], correctIndex: 0, explanation: 'Меня зовут = Meu nome é...' },
            { q: ' Como se pergunta "Como você se chama?" de forma formal?', options: ['Как тебя зовут?', 'Как вас зовут?', 'Кто это?', 'Где вы?'], correctIndex: 1, explanation: 'Как вас зовут? é a forma formal.' },
            { q: ' O que significa "Очень приятно"?', options: ['Até logo', 'Muito prazer', 'Com licença', 'Desculpe'], correctIndex: 1, explanation: 'Очень приятно = Muito prazer.' },
            { q: ' Como se pergunta "De onde você é?"', options: ['Где ты?', 'Откуда ты?', 'Кто ты?', 'Как ты?'], correctIndex: 1, explanation: 'Откуда ты? = De onde você é?' },
            { q: ' Qual preposição indica origem "de"?', options: ['В', 'На', 'Из', 'К'], correctIndex: 2, explanation: 'Из indica origem (ex: из Бразилии).' },
            { q: ' Traduza: "Я из России."', options: ['Eu vou ao Brasil.', 'Eu sou da Rússia.', 'Eu moro na Rússia.', 'Eu amo a Rússia.'], correctIndex: 1, explanation: 'Я из России = Eu sou da Rússia.' },
            { q: ' Qual possessivo feminino usamos para "мама"?', options: ['Мой', 'Моя', 'Моё', 'Мои'], correctIndex: 1, explanation: 'Моя é a forma feminina (Моя мама).' },
            { q: ' Qual possessivo usamos para "папа"?', options: ['Моя', 'Мой', 'Моё', 'Мои'], correctIndex: 1, explanation: 'Папа é masculino, logo exige Мой папа.' },
            { q: ' Como se diz "Eu sou médico" em russo (omissão do verbo ser)?', options: ['Я есть врач', 'Я врач', 'Я быть врач', 'Меня врач'], correctIndex: 1, explanation: 'O verbo ser é omitido no presente: Я врач.' },
            { q: ' O que significa "Учитель"?', options: ['Estudante', 'Professor', 'Engenheiro', 'Médico'], correctIndex: 1, explanation: 'Учитель = Professor.' },
            { q: ' Qual é a terminação do Caso Preposicional singular (em Moscou)?', options: ['-а', '-у', '-е', '-om'], correctIndex: 2, explanation: 'Terminação padrão: в Москве.' },
            { q: ' Como se pergunta "Onde você mora?"', options: ['Где ты живешь?', 'Откуда ты?', 'Кто ты?', 'Что ты?'], correctIndex: 0, explanation: 'Где ты живешь? = Onde você mora?' },
            { q: ' Qual é o número 5 em russo?', options: ['Один', 'Три', 'Пять', 'Десять'], correctIndex: 2, explanation: 'Пять = 5.' },
            { q: ' Qual a forma feminina do número 1?', options: ['Один', 'Одна', 'Одно', 'Одни'], correctIndex: 1, explanation: 'Одна é o feminino de 1.' },
            { q: ' Como se diz "Eu vou querer..." no restaurante?', options: ['Я хочу', 'Я буду', 'Я даю', 'Я ем'], correctIndex: 1, explanation: 'Я буду... é a forma padrão para pedir comida/bebida.' },
            { q: ' Como se pede a conta?', options: ['Меню, пожалуйста', 'Счёт, пожалуйста', 'Воду, пожалуйста', 'Спасибо'], correctIndex: 1, explanation: 'Счёт, пожалуйста! = A conta, por favor!' },
            { q: ' O que é "Борщ"?', options: ['Sopa de beterraba', 'Panqueca', 'Massa com carne', 'Chá preto'], correctIndex: 0, explanation: 'Борщ é a famosa sopa russa de beterraba.' },
            { q: ' Como se diz "Muito gostoso!"?', options: ['Очень вкусно', 'Очень красиво', 'Очень плохо', 'Очень хорошо'], correctIndex: 0, explanation: 'Очень вкусно = Muito gostoso!' },
            { q: ' O que significa "Выход" no metrô?', options: ['Entrada', 'Saída', 'Trem', 'Estação'], correctIndex: 1, explanation: 'Выход = Saída.' },
            { q: ' Como se pergunta "Que horas são?"', options: ['Который час?', 'Где час?', 'Сколько час?', 'Кто час?'], correctIndex: 0, explanation: 'Который час? = Que horas são?' },
            { q: ' Como se diz "Segunda-feira" em russo?', options: ['Вторник', 'Среда', 'Понедельник', 'Суббота'], correctIndex: 2, explanation: 'Понедельник = Segunda-feira.' },
            { q: ' Qual é o verbo para "Trabalhar"?', options: ['Читать', 'Работать', 'Знать', 'Отдыхать'], correctIndex: 1, explanation: 'Работать = Trabalhar.' },
            { q: ' Como se diz "Eu falo russo"?', options: ['Я говорю русский', 'Я говорю по-русски', 'Я читать по-русски', 'Я знаю русский'], correctIndex: 1, explanation: 'Я говорю по-русски.' },
            { q: ' Como se pergunta "Quanto custa isto?"', options: ['Сколько это стоит?', 'Где это стоит?', 'Кто это стоит?', 'Как это стоит?'], correctIndex: 0, explanation: 'Сколько это стоит? = Quanto custa isto?' },
            { q: ' Qual é a cor "Чёрный"?', options: ['Azul', 'Branco', 'Preto', 'Vermelho'], correctIndex: 2, explanation: 'Чёрный = Preto.' },
            { q: ' O que significa "Холодно"?', options: ['Está calor', 'Está frio', 'Está chovendo', 'Está escuro'], correctIndex: 1, explanation: 'Холодно = Frio.' },
            { q: ' O que significa "У меня болит голова"?', options: ['Estou com dor de dente', 'Estou com dor de cabeça', 'Estou com dor de barriga', 'Estou com febre'], correctIndex: 1, explanation: 'У меня болит голова = Estou com dor de cabeça.' },
            { q: ' Qual palavra significa "Parabéns!"?', options: ['Поздравляем', 'Спасибо', 'Пожалуйста', 'Здравствуйте'], correctIndex: 0, explanation: 'Поздравляем [Pozdravlyayem] significa "Parabéns!".' }
        ]
    )
);

if (typeof window !== "undefined") {
    window.CURSO_RUSSO_A1_DADOS = CURSO_RUSSO_A1_DADOS;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { CURSO_RUSSO_A1_DADOS };
}
