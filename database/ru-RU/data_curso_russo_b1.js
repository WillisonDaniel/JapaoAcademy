const CURSO_RUSSO_B1_DADOS = [];

// Gerador padronizado de módulos handcrafted para o Nível B1 (Mínimo 3 Pílulas Gramaticais + Dicas + Quizes)
const criarModuloB1Handcrafted = (id, title, desc, missionDesc, audioGuide, grammarPills, dropsList, sentencesList, dialogueList, quizList) => {
    const normalizedQuiz = quizList.map(item => ({
        question: item.question || item.q,
        q: item.q || item.question,
        options: item.options,
        correctIndex: item.correctIndex,
        explanation: item.explanation
    }));

    const pillDrops = (Array.isArray(grammarPills) ? grammarPills : []).map(pill => ({
        type: 'grammar_pill',
        title: pill.title || 'Pílula Gramatical B1',
        rule: pill.rule || pill.explanation || '',
        formula: pill.formula || '',
        example: pill.example ? (pill.exampleTranslation ? `${pill.example} — "${pill.exampleTranslation}"` : pill.example) : ''
    }));

    const enrichedVocabDrops = dropsList.map(item => {
        if (!item || typeof item !== 'object') return item;
        let dicaText = item.dica || item.tip || item.example || item.timeContext || '';
        if (!dicaText) {
            dicaText = `Expressão essencial B1: "${item.word || item.kanji || ''}" (${item.romaji || ''})`;
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
        level: 'B1',
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

CURSO_RUSSO_B1_DADOS.push(
    // Módulo 1
    criarModuloB1Handcrafted(
        'ru_b1_mod_01',
        'Módulo 1: Дательный падеж I (Caso Dativo - Objeto Indireto)',
        'Aprenda o Caso Dativo para indicar o objeto indireto (destinatário de uma ação ou ligação).',
        'Domine as terminações do Dativo (-у/-ю para masculino/neutro e -е para feminino) com verbos como Давать, Звонить e Писать.',
        'Я звоню другу и пишу письмо сестре.',
        [
            { title: 'Dativo: Objeto Indireto (Destinatário)', rule: 'O Caso Dativo responde a Кому? (A quem?). Substantivos masculinos e neutros ganham -у (ou -ю), e femininos terminados em -а mudam para -е.', formula: 'Masc/Neutro: -у/-ю | Fem: -е', example: 'Друг ➔ Другу / Сестра ➔ Сестре', exampleTranslation: 'ao amigo / à irmã' },
            { title: 'Verbos de Comunicação + Dativo', rule: 'Verbos como Звонить (ligar), Писать (escrever), Давать (dar) e Помогать (ajudar) exigem obrigatoriamente o Caso Dativo.', formula: 'Звонить / Писать / Помогать + [Dativo]', example: 'Я звоню маме. / Он помогает брату.', exampleTranslation: 'Ligo para a mãe. / Ele ajuda o irmão.' },
            { title: 'Pronomes Pessoais no Caso Dativo', rule: 'Os pronomes no Dativo são: Мне (a mim), Тебе (a ti), Ему (a ele), Ей (a ela), Нам (a nós), Вам (a vocês), Им (a eles).', formula: 'Мне / Тебе / Ему / Ей / Нам / Вам / Им', example: 'Он дал мне книгу.', exampleTranslation: 'Ele me deu o livro.' }
        ],
        [
            { type: 'vocab', word: 'Другу', romaji: 'Drugu', translation: 'Ao amigo (dativo)', audio: 'Другу', dica: 'Dativo de Друг (-у).' },
            { type: 'vocab', word: 'Сестре', romaji: 'Sestre', translation: 'À irmã (dativo)', audio: 'Сестре', dica: 'Dativo de Сестра (-а ➔ -е).' },
            { type: 'vocab', word: 'Звонить', romaji: 'Zvonit', translation: 'Ligar por telefone (+ Dativo)', audio: 'Звонить', dica: 'Exige objeto no Dativo.' },
            { type: 'vocab', word: 'Помогать', romaji: 'Pomogat', translation: 'Ajudar (+ Dativo)', audio: 'Помогать', dica: 'Exige o destinatário no Dativo.' },
            { type: 'vocab', word: 'Мне', romaji: 'Mne', translation: 'A mim / Para mim', audio: 'Мне', dica: 'Dativo do pronome Я.' }
        ],
        [
            { sentence: 'Я ежедневно звоню своему другу.', translation: 'Eu ligo diariamente para o meu amigo.', tokens: ['Я', 'ежедневно', 'звоню', 'своему', 'другу.'], audio: 'Я ежедневно звоню своему другу.' },
            { sentence: 'Она пишет письмо своей сестре.', translation: 'Ela escreve uma carta para sua irmã.', tokens: ['Она', 'пишет', 'письмо', 'своей', 'сестре.'], audio: 'Она пишет письмо своей сестре.' }
        ],
        [
            { speaker: 'Victor', text: 'Кому ты звонишь?', translation: 'Para quem você está ligando?', audio: 'Кому ты звонишь?' },
            { speaker: 'Anna', text: 'Я звоню моему брату.', translation: 'Eu estou ligando para o meu irmão.', audio: 'Я звоню моему брату.' }
        ],
        [
            { q: 'Qual a terminação do Dativo Singular Masculino para "Друг"?', options: ['Друга', 'Другу', 'Другом', 'Друге'], correctIndex: 1, explanation: 'Masculino no Dativo ganha -у: Другу.' },
            { q: 'Qual caso gramatical é exigido pelo verbo "Звонить" (ligar)?', options: ['Acusativo', 'Dativo', 'Genitivo', 'Instrumental'], correctIndex: 1, explanation: 'Звонить exige o Caso Dativo.' },
            { q: 'Forma no Dativo de "Сестра" (irmã)?', options: ['Сестру', 'Сестры', 'Сестре', 'Сестрой'], correctIndex: 2, explanation: 'Feminino em -а muda para -е: Сестре.' },
            { q: 'Traduza: "Он дал мне книгу."', options: ['Ele me deu o livro', 'Eu dei o livro a ele', 'Ele viu meu livro', 'Ele pegou meu livro'], correctIndex: 0, explanation: 'Мне = a mim (Dativo).' },
            { q: 'Pergunta usada para identificar o objeto indireto no Dativo (A quem)?', options: ['Кого', 'Кому', 'Кем', 'О ком'], correctIndex: 1, explanation: 'Кому? = A quem?' }
        ]
    ),

    // Módulo 2
    criarModuloB1Handcrafted(
        'ru_b1_mod_02',
        'Módulo 2: Дательный падеж II (Idade e Frases Impessoais)',
        'Aprenda a expressar idade e estados de necessidade (нужно, можно, нельзя) com o Caso Dativo.',
        'Domine estruturas impessoais em russo com o sujeito lógico no Dativo.',
        'Мне 25 лет. Мне нужно заниматься e вам можно войти.',
        [
            { title: 'Expressando Idade com Dativo', rule: 'Em russo, para dizer a idade de alguém, coloca-se a pessoa no Caso Dativo + o número + лет/goda.', formula: '[Pessoa no Dativo] + [Número] + лет / года / год', example: 'Мне 25 лет. / Ему 3 года.', exampleTranslation: 'Eu tenho 25 anos. / Ele tem 3 anos.' },
            { title: 'Necessidade Impessoal (Мне нужно)', rule: 'Para dizer que precisa de algo, usa-se a construção: [Dativo] + нужно / надо + [Infinitivo].', formula: 'Мне / Тебе / Ему + нужно + [Infinitivo]', example: 'Мне нужно купить хлеб.', exampleTranslation: 'Eu preciso comprar pão.' },
            { title: 'Permissão e Proibição (Можно / Нельзя)', rule: 'Usa-se Можно (é permitido / pode-se) e Нельзя (é proibido / não se pode) com o Dativo.', formula: 'Вам можно войти. / Здесь нельзя курить.', example: 'Você pode entrar. / Aqui é proibido fumar.', exampleTranslation: 'Pode entrar. / Proibido fumar aqui.' }
        ],
        [
            { type: 'vocab', word: 'Мне нужно', romaji: 'Mne nuzhno', translation: 'Eu preciso', audio: 'Мне нужно', dica: 'Estrutura impessoal de necessidade.' },
            { type: 'vocab', word: 'Можно', romaji: 'Mozhno', translation: 'Pode-se / É permitido', audio: 'Можно', dica: 'Expressa permissão.' },
            { type: 'vocab', word: 'Нельзя', romaji: 'Nelsya', translation: 'É proibido / Não se pode', audio: 'Нельзя', dica: 'Expressa proibição estrita.' },
            { type: 'vocab', word: 'Ему', romaji: 'Yemu', translation: 'A ele / Para ele', audio: 'Ему', dica: 'Dativo do pronome Он.' },
            { type: 'vocab', word: 'Надо', romaji: 'Nado', translation: 'É preciso / É necessário', audio: 'Надо', dica: 'Sinônimo de нужно.' }
        ],
        [
            { sentence: 'Мне нужно сегодня усердно заниматься.', translation: 'Eu preciso estudar bastante hoje.', tokens: ['Мне', 'нужно', 'сегодня', 'усердно', 'заниматься.'], audio: 'Мне нужно сегодня усердно заниматься.' },
            { sentence: 'Здесь нельзя разговаривать по телефону.', translation: 'Aqui é proibido falar ao telefone.', tokens: ['Здесь', 'нельзя', 'разговаривать', 'по', 'телефону.'], audio: 'Здесь нельзя разговаривать по телефону.' }
        ],
        [
            { speaker: 'Visitante', text: 'Можно войти?', translation: 'Posso entrar?', audio: 'Можно войти?' },
            { speaker: 'Recepcionista', text: 'Да, конечно, вам можно войти.', translation: 'Sim, claro, o senhor pode entrar.', audio: 'Да, конечно, вам можно войти.' }
        ],
        [
            { q: 'Qual pronome usa-se em "___ 30 лет" (Eu tenho 30 anos)?', options: ['Я', 'Меня', 'Мне', 'Мной'], correctIndex: 2, explanation: 'Expressar idade exige Caso Dativo: Мне.' },
            { q: 'O que significa "Мне нужно"?', options: ['Eu quero', 'Eu preciso', 'Eu gosto', 'Eu sei'], correctIndex: 1, explanation: 'Мне нужно = Eu preciso.' },
            { q: 'Palavra que indica PROIBIÇÃO estrita ("É proibido")?', options: ['Можно', 'Нельзя', 'Нужно', 'Хорошо'], correctIndex: 1, explanation: 'Нельзя = É proibido.' },
            { q: 'Palavra que indica PERMISSÃO ("Pode-se")?', options: ['Нельзя', 'Можно', 'Нет', 'Плохо'], correctIndex: 1, explanation: 'Можно = Pode-se / É permitido.' },
            { q: 'Traduza: "Ему нужно работать."', options: ['Ele quer trabalhar', 'Ele precisa trabalhar', 'Ele trabalha muito', 'Ele não trabalha'], correctIndex: 1, explanation: 'Ему нужно = Ele precisa.' }
        ]
    ),

    // Módulo 3
    criarModuloB1Handcrafted(
        'ru_b1_mod_03',
        'Módulo 3: Творительный падеж I (Caso Instrumental - Instrumento e Companhia)',
        'Aprenda o Caso Instrumental para indicar companhia (с + Instrumental) e instrumentos ou meios.',
        'Domine as terminações (-ом/-ем para masc/neutro e -ой/-ей para fem).',
        'Я иду в ресторан с другом и ем салат вилкой.',
        [
            { title: 'Companhia com a Preposição С', rule: 'Para indicar a companhia de alguém ("com"), usa-se a preposição С seguida obrigatoriamente do Caso Instrumental.', formula: 'С + [Substantivo no Instrumental]', example: 'С другом / С сестрой / С коллегой', exampleTranslation: 'Com o amigo / Com a irmã / Com o colega' },
            { title: 'Instrumento / Ferramenta (Sem Preposição)', rule: 'Para indicar a ferramenta ou objeto com o qual se realiza uma ação, usa-se o Caso Instrumental DIRETO (sem preposição).', formula: '[Substantivo no Instrumental sem preposição]', example: 'Писать ручкой (escrever com caneta) / Есть вилкой (comer com garfo)', exampleTranslation: 'Escrever a caneta / Comer de garfo' },
            { title: 'Terminações do Instrumental Singular', rule: 'Substantivos masculinos e neutros ganham -ом (ou -ем). Femininos em -а/-я trocam por -ой (ou -ей).', formula: 'Masc/Neutro: -ом/-ем | Fem: -ой/-ей', example: 'Брат ➔ Братом / Машина ➔ Машиной', exampleTranslation: 'com o irmão / de carro' }
        ],
        [
            { type: 'vocab', word: 'С другом', romaji: 'S drugom', translation: 'Com o amigo (instrumental)', audio: 'С другом', dica: 'Companhia com preposição С.' },
            { type: 'vocab', word: 'С сестрой', romaji: 'S sestroi', translation: 'Com a irmã (instrumental)', audio: 'С сестрой', dica: 'Feminino em -а vira -ой: Сестрой.' },
            { type: 'vocab', word: 'Ручкой', romaji: 'Ruchkoi', translation: 'Com/de caneta (instrumental)', audio: 'Ручкой', dica: 'Instrumento de escrita.' },
            { type: 'vocab', word: 'Вилкой', romaji: 'Vilkoi', translation: 'Com/de garfo (instrumental)', audio: 'Вилкой', dica: 'Utensílio para comer.' },
            { type: 'vocab', word: 'С кем', romaji: 'S kem', translation: 'Com quem?', audio: 'С кем', dica: 'Pergunta no Caso Instrumental.' }
        ],
        [
            { sentence: 'Вчера я ходил в кино с другом.', translation: 'Ontem eu fui ao cinema com um amigo.', tokens: ['Вчера', 'я', 'ходил', 'в', 'кино', 'с', 'другом.'], audio: 'Вчера я ходил в кино с другом.' },
            { sentence: 'Он пишет письмо синей ручкой.', translation: 'Ele escreve a carta com uma caneta azul.', tokens: ['Он', 'пишет', 'письмо', 'синей', 'ручкой.'], audio: 'Он пишет письмо синей ручкой.' }
        ],
        [
            { speaker: 'Dmitry', text: 'С кем ты идёшь в театр?', translation: 'Com quem você vai ao teatro?', audio: 'С кем ты идёшь в театр?' },
            { speaker: 'Elena', text: 'Я иду в театр с моей сестрой.', translation: 'Eu vou ao teatro com a minha irmã.', audio: 'Я иду в театр с моей сестрой.' }
        ],
        [
            { q: 'Qual preposição indica COMPANHIA com o Caso Instrumental?', options: ['В', 'На', 'С', 'Из'], correctIndex: 2, explanation: 'Companhia usa a preposição С.' },
            { q: 'Forma no Instrumental de "Друг" em "com o amigo" (С ___)?', options: ['Друга', 'Другу', 'Другом', 'Друге'], correctIndex: 2, explanation: 'Masculino no Instrumental ganha -ом: Другом.' },
            { q: 'Forma no Instrumental de "Сестра" em "com a irmã" (С ___)?', options: ['Сестру', 'Сестры', 'Сестре', 'Сестрой'], correctIndex: 3, explanation: 'Feminino em -а muda para -ой: Сестрой.' },
            { q: 'Pergunta usada para companhia (Com quem)?', options: ['Кого', 'Кому', 'С кем', 'О ком'], correctIndex: 2, explanation: 'С кем? = Com quem?' },
            { q: 'Usa-se preposição ao indicar o instrumento/ferramenta (ex: comer com garfo)?', options: ['Sim, usa-se В', 'Não, usa-se o Instrumental direto sem preposição', 'Sim, usa-se На', 'Sim, usa-se Из'], correctIndex: 1, explanation: 'Instrumento físico não leva preposição.' }
        ]
    ),

    // Módulo 4
    criarModuloB1Handcrafted(
        'ru_b1_mod_04',
        'Módulo 4: Творительный падеж II (Profissão e Mudança de Estado)',
        'Aprenda a usar o Caso Instrumental com verbos de profissão e mudança de estado (Работать, Стать, Быть).',
        'Entenda a regência dos verbos que indicam papel profissional ou transformação.',
        'Он работает инженером e хочет стать директором.',
        [
            { title: 'Profissões com Работать + Instrumental', rule: 'Em russo, para dizer a profissão de alguém com o verbo Работать (trabalhar), o cargo/profissão entra obrigatoriamente no Caso Instrumental.', formula: 'Работать + [Profissão no Instrumental]', example: 'Работать врачом / Работать учителем / Работать инженером', exampleTranslation: 'Trabalhar como médico / professor / engenheiro' },
            { title: 'Mudança de Estado com Стать + Instrumental', rule: 'O verbo Стать (tornar-se) exige o Caso Instrumental.', formula: 'Стать + [Substantivo no Instrumental]', example: 'Он стал врачом.', exampleTranslation: 'Ele se tornou médico.' },
            { title: 'Verbo Быть no Passado/Futuro', rule: 'Quando o verbo Быть é usado no passado ou futuro para definir uma profissão ou papel temporário, a profissão fica no Instrumental.', formula: 'Был / Будет + [Profissão no Instrumental]', example: 'Раньше он был студентом.', exampleTranslation: 'Antes ele era estudante.' }
        ],
        [
            { type: 'vocab', word: 'Врачом', romaji: 'Vrachom', translation: 'Como médico (instrumental)', audio: 'Врачом', dica: 'Instrumental de Врач (работать врачом).' },
            { type: 'vocab', word: 'Учителем', romaji: 'Uchitelem', translation: 'Como professor (instrumental)', audio: 'Учителем', dica: 'Instrumental de Учитель.' },
            { type: 'vocab', word: 'Стать', romaji: 'Stat', translation: 'Tornar-se (+ Instrumental)', audio: 'Стать', dica: 'Verbo de mudança de estado.' },
            { type: 'vocab', word: 'Работать', romaji: 'Rabotat', translation: 'Trabalhar (+ Instrumental para cargo)', audio: 'Работать', dica: 'Exige profissão no Instrumental.' },
            { type: 'vocab', word: 'Кем', romaji: 'Kem', translation: 'Como o quê? / De quê?', audio: 'Кем', dica: 'Pergunta no Instrumental (Кем ты работаешь?).' }
        ],
        [
            { sentence: 'Мой брат работает инженером в крупной компании.', translation: 'Meu irmão trabalha como engenheiro em uma grande empresa.', tokens: ['Мой', 'брат', 'работает', 'инженером', 'в', 'крупной', 'компании.'], audio: 'Мой брат работает инженером в крупной компании.' },
            { sentence: 'Она хочет стать известным врачом.', translation: 'Ela quer se tornar uma médica famosa.', tokens: ['Она', 'хочет', 'стать', 'известным', 'врачом.'], audio: 'Она хочет стать известным врачом.' }
        ],
        [
            { speaker: 'Pavel', text: 'Кем ты работаешь?', translation: 'Como o quê você trabalha?', audio: 'Кем ты работаешь?' },
            { speaker: 'Olga', text: 'Я работаю учителем русского языка.', translation: 'Eu trabalho como professora de língua russa.', audio: 'Я работаю учителем русского языка.' }
        ],
        [
            { q: 'Qual caso gramatical é exigido após o verbo "Работать" ao indicar a profissão?', options: ['Nominativo', 'Acusativo', 'Instrumental', 'Genitivo'], correctIndex: 2, explanation: 'Работать exige Caso Instrumental.' },
            { q: 'Forma no Instrumental de "Врач" em "Ele trabalha como médico"?', options: ['Врач', 'Врача', 'Врачом', 'Враче'], correctIndex: 2, explanation: 'Врач ➔ Врачом.' },
            { q: 'Verbo que significa "Tornar-se"?', options: ['Быть', 'Стать', 'Делать', 'Идти'], correctIndex: 1, explanation: 'Стать = Tornar-se.' },
            { q: 'Pergunta usada para profissões (Como o quê você trabalha)?', options: ['Кто ты работаешь?', 'Кого ты работаешь?', 'Кем ты работаешь?', 'Где ты работаешь?'], correctIndex: 2, explanation: 'Кем ты работаешь?' },
            { q: 'Traduza: "Он стал директором."', options: ['Ele viu o diretor', 'Ele se tornou diretor', 'Ele falou com o diretor', 'Ele busca o diretor'], correctIndex: 1, explanation: 'Стал директором = tornou-se diretor.' }
        ]
    ),

    // Módulo 5
    criarModuloB1Handcrafted(
        'ru_b1_mod_05',
        'Módulo 5: Глаголы движения I (Verbos de Movimento Sem Prefixo - Ir a pé)',
        'Diferencie os verbos de movimento a pé sem prefixo: Unidirecional (Идти) vs Multidirecional (Ходить).',
        'Compreenda quando usar movimento em andamento (Идти) ou hábitos e ida-e-volta (Ходить).',
        'Сейчас я иду в университет, а обычно я хожу туда пешком.',
        [
            { title: 'Unidirecional a Pé: Идти', rule: 'O verbo Идти indica um movimento A PÉ acontecendo AGORA em uma única direção específica em direção a um objetivo.', formula: 'Идти (одно направление / сейчас)', example: 'Сейчас я иду в магазин.', exampleTranslation: 'Agora estou indo à loja (a pé).' },
            { title: 'Multidirecional a Pé: Ходить', rule: 'O verbo Ходить indica um movimento A PÉ habitual (frequência), sem direção única, ou uma viagem completa de IDA E VOLTA já concluída.', formula: 'Ходить (повторение / туда и обратно)', example: 'Каждый день я хожу в парк. / Вчера я ходил в музей.', exampleTranslation: 'Todo dia vou ao parque. / Ontem fui ao museu (e voltei).' },
            { title: 'Conjugação dos Verbos Идти e Ходить', rule: 'Идти: иду, идёшь, идут. Passado: шёл, шла, шли. | Ходить: хожу, ходишь, ходят. Passado: ходил, ходила, ходили.', formula: 'Идти (шёл/шла) vs. Ходить (ходил/ходила)', example: 'Вчера он ходил в кино.', exampleTranslation: 'Ontem ele foi ao cinema (ida e volta).' }
        ],
        [
            { type: 'vocab', word: 'Идти', romaji: 'Idti', translation: 'Ir a pé (unidirecional/em andamento)', audio: 'Идти', dica: 'Movimento contínuo em uma direção.' },
            { type: 'vocab', word: 'Ходить', romaji: 'Khodit', translation: 'Ir/Andar a pé (multidirecional/hábito)', audio: 'Ходить', dica: 'Movimento habitual ou ida e volta.' },
            { type: 'vocab', word: 'Шёл', romaji: 'Shyol', translation: 'Ia a pé / Foi (masculino passado de идти)', audio: 'Шёл', dica: 'Passado irregular de идти.' },
            { type: 'vocab', word: 'Шла', romaji: 'Shla', translation: 'Ia a pé / Foi (feminino passado de идти)', audio: 'Шла', dica: 'Passado feminino de идти.' },
            { type: 'vocab', word: 'Пешком', romaji: 'Peshkom', translation: 'A pé', audio: 'Пешком', dica: 'Advérbio de modo para caminhada.' }
        ],
        [
            { sentence: 'Куда ты идёшь сейчас? Я иду на работу.', translation: 'Aonde você está indo a pé agora? Estou indo ao trabalho.', tokens: ['Куда', 'ты', 'идёшь', 'сейчас?', 'Я', 'иду', 'на', 'работу.'], audio: 'Куда ты идёшь сейчас? Я иду на работу.' },
            { sentence: 'Каждое утро он ходит в школу пешком.', translation: 'Toda manhã ele vai à escola a pé.', tokens: ['Каждое', 'утро', 'он', 'ходит', 'в', 'школу', 'пешком.'], audio: 'Каждое утро он ходит в школу пешком.' }
        ],
        [
            { speaker: 'Victor', text: 'Где ты был вчера?', translation: 'Onde você esteve ontem?', audio: 'Где ты был вчера?' },
            { speaker: 'Maxim', text: 'Я ходил в музей.', translation: 'Eu fui ao museu (e voltei).', audio: 'Я ходил в музей.' }
        ],
        [
            { q: 'Qual verbo usa-se para um movimento A PÉ acontecendo AGORA em direção a um local?', options: ['Ходить', 'Идти', 'Ехать', 'Ездить'], correctIndex: 1, explanation: 'Идти indica movimento unidirecional em andamento.' },
            { q: 'Qual verbo usa-se para HÁBITOS diários de caminhar (ex: "Toda manhã eu vou a pé...")?', options: ['Идти', 'Ходить', 'Ехать', 'Бежать'], correctIndex: 1, explanation: 'Ходить indica hábitos e repetições.' },
            { q: 'Passado masculino do verbo "идти"?', options: ['Идел', 'Ходил', 'Шёл', 'Шла'], correctIndex: 2, explanation: 'Passado irregular de идти: Шёл.' },
            { q: 'O que significa "Пешком"?', options: ['De carro', 'A pé', 'De trem', 'De avião'], correctIndex: 1, explanation: 'Пешком = A pé.' },
            { q: 'Se alguém diz "Вчера я ходил в театр", a pessoa já voltou do teatro?', options: ['Sim, foi e voltou (ida e volta)', 'Não, ainda está lá', 'Não sabemos', 'Ela não foi'], correctIndex: 0, explanation: 'Ходил no passado indica viagem completa de ida e volta.' }
        ]
    ),

    // Módulo 6
    criarModuloB1Handcrafted(
        'ru_b1_mod_06',
        'Módulo 6: Глаголы движения II (Verbos de Movimento Sem Prefixo - Ir de Transporte)',
        'Diferencie os verbos de transporte sem prefixo: Еехать (unidirecional) vs. Ездить (multidirecional).',
        'Domine o uso dos verbos de transporte no presente, passado e futuro.',
        'Сейчас я еду в Москву, а летом я часто езжу на море.',
        [
            { title: 'Unidirecional de Transporte: Ехать', rule: 'O verbo Ехать indica que a pessoa está viajando POR UM VEÍCULO agora, em uma direção específica.', formula: 'Ехать (транспорт / одно направление)', example: 'Сейчас мы едем в Санкт-Петербург.', exampleTranslation: 'Agora estamos indo para São Petersburgo (de transporte).' },
            { title: 'Multidirecional de Transporte: Ездить', rule: 'O verbo Ездить indica viagens de transporte repetidas, hábitos ou passeios de ida e volta já concluídos.', formula: 'Ездить (транспорт / повторение / туда и обратно)', example: 'Каждое лето мы ездим на море.', exampleTranslation: 'Todo verão nós viajamos para o mar.' },
            { title: 'Meios de Transporte no Caso Preposicional', rule: 'Para indicar o meio de transporte, usa-se a preposição НА + Preposicional (-е).', formula: 'На + [Transporte no Preposicional]', example: 'На машине / На автобусе / На поезде', exampleTranslation: 'De carro / De ônibus / De trem' }
        ],
        [
            { type: 'vocab', word: 'Ехать', romaji: 'Yekhat', translation: 'Ir de veículo (unidirecional)', audio: 'Ехать', dica: 'Viagem de transporte em andamento.' },
            { type: 'vocab', word: 'Ездить', romaji: 'Yezdit', translation: 'Viajar/Ir de veículo (multidirecional/hábito)', audio: 'Ездить', dica: 'Hábitos e repetições de transporte.' },
            { type: 'vocab', word: 'На машине', romaji: 'Na mashine', translation: 'De carro', audio: 'На машине', dica: 'Preposição На + Preposicional.' },
            { type: 'vocab', word: 'На автобусе', romaji: 'Na avtobuse', translation: 'De ônibus', audio: 'На автобусе', dica: 'Meio de transporte coletivo.' },
            { type: 'vocab', word: 'Еду', romaji: 'Yedu', translation: 'Eu vou (de veículo)', audio: 'Еду', dica: 'Primeira pessoa de ехать.' }
        ],
        [
            { sentence: 'Сейчас я еду на работу на метро.', translation: 'Agora estou indo ao trabalho de metrô.', tokens: ['Сейчас', 'я', 'еду', 'на', 'работу', 'на', 'метро.'], audio: 'Сейчас я еду на работу на метро.' },
            { sentence: 'Мы часто ездим в деревню на машине.', translation: 'Nós frequentemente viajamos para o vilarejo de carro.', tokens: ['Мы', 'часто', 'ездим', 'в', 'деревню', 'на', 'машине.'], audio: 'Мы часто ездим в деревню на машине.' }
        ],
        [
            { speaker: 'Anton', text: 'Как ты обычно ездишь на работу?', translation: 'Como você geralmente vai ao trabalho?', audio: 'Как ты обычно ездишь на работу?' },
            { speaker: 'Sofia', text: 'Я обычно езжу на автобусе.', translation: 'Eu geralmente vou de ônibus.', audio: 'Я обычно езжу на автобусе.' }
        ],
        [
            { q: 'Qual verbo usa-se para uma viagem DE TRANSPORTE acontecendo AGORA?', options: ['Идти', 'Ехать', 'Ходить', 'Ездить'], correctIndex: 1, explanation: 'Ехать indica viagem por veículo em andamento.' },
            { q: 'Qual verbo usa-se para HÁBITOS de viagem por transporte ("Todo verão nós viajamos...")?', options: ['Ехать', 'Ездить', 'Идти', 'Гулять'], correctIndex: 1, explanation: 'Ездить indica hábitos de transporte.' },
            { q: 'Como se diz "De carro"?', options: ['В машине', 'На машине', 'С машиной', 'Из машины'], correctIndex: 1, explanation: 'Transportes usam На + Preposicional: На машине.' },
            { q: 'Conjugação de "ехать" para "Я"?', options: ['Езжу', 'Еду', 'Едешь', 'Едет'], correctIndex: 1, explanation: 'Я еду.' },
            { q: 'Conjugação de "ездить" para "Я"?', options: ['Еду', 'Езжу', 'Езжусь', 'Ездим'], correctIndex: 1, explanation: 'Я езжу.' }
        ]
    ),

    // Módulo 7
    criarModuloB1Handcrafted(
        'ru_b1_mod_07',
        'Módulo 7: Глаголы движения III (Prefixos de Movimento: По-, При-, У-)',
        'Aprenda o significado dos prefixos de movimento de partida (По-), chegada (При-) e saída definitiva (У-).',
        'Entenda como os prefixos alteram o sentido exato dos verbos de movimento.',
        'Поезд пошёл, мы приехали в Москву, а он уехал навсегда.',
        [
            { title: 'Prefixo По-: Partida / Início do Movimento', rule: 'O prefixo По- adicionado a um verbo de movimento indica o INÍCIO da viagem ou a decisão de partir.', formula: 'По- + [Verbo de Movimento]', example: 'Пойти (começar a ir a pé) / Поехать (partir de transporte)', exampleTranslation: 'Partir a pé / Partir de veículo' },
            { title: 'Prefixo При-: Chegada ao Destino', rule: 'O prefixo При- indica CHEGADA ou aproximação final ao local de destino.', formula: 'При- + [Verbo de Movimento]', example: 'Прийти (chegar a pé) / Приехать (chegar de transporte)', exampleTranslation: 'Chegar a pé / Chegar de veículo' },
            { title: 'Prefixo У-: Partida Definitiva / Ausência', rule: 'O prefixo У- indica que o sujeito SAIS E FICOU AUSENTE do local.', formula: 'У- + [Verbo de Movimento]', example: 'Уйти (sair/ir embora a pé) / Уехать (viajar para fora/embora)', exampleTranslation: 'Ir embora a pé / Viajar para longe' }
        ],
        [
            { type: 'vocab', word: 'Поехать', romaji: 'Poyekhat', translation: 'Partir de veículo / Viajar', audio: 'Поехать', dica: 'Prefixo По- (início da viagem).' },
            { type: 'vocab', word: 'Приехать', romaji: 'Priyekhat', translation: 'Chegar de veículo', audio: 'Приехать', dica: 'Prefixo При- (chegada ao destino).' },
            { type: 'vocab', word: 'Уехать', romaji: 'Uyekhat', translation: 'Viajar para longe / Ir embora de transporte', audio: 'Уехать', dica: 'Prefixo У- (ausência/distanciamento).' },
            { type: 'vocab', word: 'Прийти', romaji: 'Priyti', translation: 'Chegar a pé', audio: 'Прийти', dica: 'Chegada a pé.' },
            { type: 'vocab', word: 'Уйти', romaji: 'Uyti', translation: 'Sair / Ir embora a pé', audio: 'Уйти', dica: 'Saída a pé.' }
        ],
        [
            { sentence: 'Мы приехали в Москву в 8 часов утра.', translation: 'Nós chegamos a Moscou às 8 horas da manhã.', tokens: ['Мы', 'приехали', 'в', 'Москву', 'в', '8', 'часов', 'утра.'], audio: 'Мы приехали в Москву в 8 часов утра.' },
            { sentence: 'Он уехал в другой город навсегда.', translation: 'Ele viajou para outra cidade para sempre.', tokens: ['Он', 'уехал', 'в', 'другой', 'город', 'навсегда.'], audio: 'Он уехал в другой город навсегда.' }
        ],
        [
            { speaker: 'Marina', text: 'Когда ты приедешь домой?', translation: 'Quando você vai chegar em casa?', audio: 'Когда ты приедешь домой?' },
            { speaker: 'Ivan', text: 'Я приеду через час.', translation: 'Eu vou chegar daqui a uma hora.', audio: 'Я приеду через час.' }
        ],
        [
            { q: 'Qual prefixo de movimento indica CHEGADA ao destino?', options: ['По-', 'При-', 'У-', 'В-'], correctIndex: 1, explanation: 'При- indica chegada (приехать, прийти).' },
            { q: 'Qual prefixo de movimento indica PARTIDA / INÍCIO do movimento?', options: ['При-', 'По-', 'У-', 'Вы-'], correctIndex: 1, explanation: 'По- indica início/partida (поехать, пойти).' },
            { q: 'Qual prefixo indica SAÍDA DEFINITIVA ou ausência de um local?', options: ['При-', 'По-', 'У-', 'Про-'], correctIndex: 2, explanation: 'У- indica ausência/partida para longe (уехать, уйти).' },
            { q: 'Traduza: "Мы приехали."', options: ['Nós partimos', 'Nós chegamos (de transporte)', 'Nós fomos a pé', 'Nós saímos'], correctIndex: 1, explanation: 'Приехали = chegamos.' },
            { q: 'Traduza: "Он ушёл."', options: ['Ele chegou', 'Ele foi embora a pé', 'Ele está dormindo', 'Ele voltou'], correctIndex: 1, explanation: 'Ушёл = foi embora a pé.' }
        ]
    ),

    // Módulo 8
    criarModuloB1Handcrafted(
        'ru_b1_mod_08',
        'Módulo 8: Глаголы движения IV (Prefixos de Movimento: В-, Вы-, Про-, Пере-)',
        'Domine os prefixos de movimento direcional: Entrar (В-), Sair (Вы-), Passar por (Про-) e Atravessar (Пере-).',
        'Aprenda a descrever trajetos complexos com prefixos espaciais.',
        'Он вошёл в здание, вышел на улицу e перешёл дорогу.',
        [
            { title: 'Prefixos В- (Entrar) e Вы- (Sair)', rule: 'O prefixo В- indica ENTRAR em um espaço fechado (exige preposição В), enquanto Вы- indica SAIR de dentro (exige preposição Из).', formula: 'В- + [Verbo] + в / Вы- + [Verbo] + из', example: 'Войти в комнату / Выйти из комнаты', exampleTranslation: 'Entrar no quarto / Sair do quarto' },
            { title: 'Prefixo Про-: Passar por / Percorrer', rule: 'O prefixo Про- indica passar ao lado de algo, percorrer uma distância ou passar reto sem parar.', formula: 'Про- + [Verbo] + мимо / через', example: 'Пройти мимо дома / Проехать 100 километров', exampleTranslation: 'Passar ao lado da casa / Percorrer 100 km' },
            { title: 'Prefixo Пере-: Atravessar / Mudar', rule: 'O prefixo Пере- indica atravessar de um lado ao outro (rua, rio) ou mudar de residência.', formula: 'Пере- + [Verbo] + через', example: 'Перейти улицу / Переехать в новую квартиру', exampleTranslation: 'Atravessar a rua / Mudar-se para novo apartamento' }
        ],
        [
            { type: 'vocab', word: 'Войти', romaji: 'Voyti', translation: 'Entrar a pé', audio: 'Войти', dica: 'Prefixo В- (entrar).' },
            { type: 'vocab', word: 'Выйти', romaji: 'Vyti', translation: 'Sair a pé', audio: 'Выйти', dica: 'Prefixo Вы- (sair).' },
            { type: 'vocab', word: 'Перейти', romaji: 'Pereyti', translation: 'Atravessar a pé', audio: 'Перейти', dica: 'Prefixo Пере- (atravessar).' },
            { type: 'vocab', word: 'Пройти', romaji: 'Proyti', translation: 'Passar por / Percorrer a pé', audio: 'Пройти', dica: 'Prefixo Про- (percorrer).' },
            { type: 'vocab', word: 'Переехать', romaji: 'Pereyekhat', translation: 'Mudar-se (de residência)', audio: 'Переехать', dica: 'Mudar de casa ou cidade.' }
        ],
        [
            { sentence: 'Осторожно переходите улицу по пешеходному переходу.', translation: 'Com cuidado atravessem a rua na faixa de pedestres.', tokens: ['Осторожно', 'переходите', 'улицу', 'по', 'пешеходному', 'переходу.'], audio: 'Осторожно переходите улицу по пешеходному переходу.' },
            { sentence: 'Студент вошёл в аудиторию и сел на место.', translation: 'O estudante entrou na sala de aula e sentou no lugar.', tokens: ['Студент', 'вошёл', 'в', 'аудиторию', 'и', 'сел', 'на', 'место.'], audio: 'Студент вошёл в аудиторию и сел на место.' }
        ],
        [
            { speaker: 'Passante', text: 'Как мне пройти к метро?', translation: 'Como faço para passar/chegar ao metrô?', audio: 'Как мне пройти к метро?' },
            { speaker: 'Pedestre', text: 'Перейдите улицу e идите прямо.', translation: 'Atravesse a rua e vá direto.', audio: 'Перейдите улицу e идите прямо.' }
        ],
        [
            { q: 'Qual prefixo indica ENTRAR em um recinto?', options: ['Вы-', 'В-', 'Пере-', 'Про-'], correctIndex: 1, explanation: 'В- (ou во-) indica entrada.' },
            { q: 'Qual prefixo indica SAIR de um recinto?', options: ['В-', 'Вы-', 'При-', 'По-'], correctIndex: 1, explanation: 'Вы- indica saída.' },
            { q: 'Qual prefixo indica ATRAVESSAR uma rua ou mudar de casa?', options: ['Пере-', 'Про-', 'В-', 'У-'], correctIndex: 0, explanation: 'Пере- indica travessia ou mudança.' },
            { q: 'Traduza: "Перейти улицу"', options: ['Entrar na rua', 'Sair da rua', 'Atravessar a rua', 'Olhar a rua'], correctIndex: 2, explanation: 'Перейти улицу = Atravessar a rua.' },
            { q: 'Traduza: "Выйти из комнаты"', options: ['Entrar no quarto', 'Sair do quarto', 'Limpar o quarto', 'Pintar o quarto'], correctIndex: 1, explanation: 'Выйти из комнаты = Sair do quarto.' }
        ]
    ),

    // Módulo 9
    criarModuloB1Handcrafted(
        'ru_b1_mod_09',
        'Módulo 9: Аспект глагола II (Aspecto no Passado e Futuro)',
        'Aprofunde a distinção de aspecto verbal (Imperfeito vs Perfeito) no tempo passado e futuro.',
        'Diferencie ações habituais ou duradouras de realizações pontuais concluídas.',
        'Я долго решал задачу e наконец решил её.',
        [
            { title: 'Passado: Processo (НСВ) vs. Conclusão (СВ)', rule: 'No passado, usa-se o Imperfeito (НСВ) para enfatizar o TEMPO GASTO ou a repetição, e o Perfeito (СВ) para celebrar o RESULTADO OBTIDO.', formula: 'Долго + [НСВ] ➔ Наконец + [СВ]', example: 'Я долго готовил ужин и приготовил его.', exampleTranslation: 'Cozinhei por muito tempo e (finalmente) preparei a janta.' },
            { title: 'Futuro: Intenção Geral vs. Compromisso de Entrega', rule: 'No futuro, o Imperfeito (Буду делать) indica a intenção de estar fazendo a ação, enquanto o Perfeito (Сделаю) garante o resultado final.', formula: 'Буду делать (НСВ) vs Сделаю (СВ)', example: 'Завтра я буду читать. / Завтра я прочитаю эту статью.', exampleTranslation: 'Amanhã estarei lendo. / Amanhã lerei (e terminarei) este artigo.' },
            { title: 'Pares Verbais Essenciais B1', rule: 'Pares frequentes: Решать / Решить (resolver), Готовить / Приготовить (cozinhar), Покупать / Купить (comprar).', formula: '[Imperfeito] / [Perfeito]', example: 'Покупать / Купить', exampleTranslation: 'Comprar (processo) / Comprar (conclusão)' }
        ],
        [
            { type: 'vocab', word: 'Решать', romaji: 'Reshat', translation: 'Resolver / Tentar resolver (imperfeito)', audio: 'Решать', dica: 'Ação em andamento ou hábito.' },
            { type: 'vocab', word: 'Решить', romaji: 'Reshit', translation: 'Resolver / Concluir a solução (perfeito)', audio: 'Решить', dica: 'Resultado obtido com sucesso.' },
            { type: 'vocab', word: 'Готовить', romaji: 'Gotovit', translation: 'Cozinhar / Preparar (imperfeito)', audio: 'Готовить', dica: 'Processo na cozinha.' },
            { type: 'vocab', word: 'Приготовить', romaji: 'Prigotovit', translation: 'Preparar / Deixar pronto (perfeito)', audio: 'Приготовить', dica: 'Prato pronto e finalizado.' },
            { type: 'vocab', word: 'Купить', romaji: 'Kupit', translation: 'Comprar (perfeito)', audio: 'Купить', dica: 'Compra efetuada.' }
        ],
        [
            { sentence: 'Я долго решал эту сложную задачу и наконец решил её.', translation: 'Fiquei muito tempo tentando resolver este problema difícil e finalmente o resolvi.', tokens: ['Я', 'долго', 'решал', 'эту', 'сложную', 'задачу', 'и', 'наконец', 'решил', 'её.'], audio: 'Я долго решал эту сложную задачу и наконец решил её.' },
            { sentence: 'Завтра я обязательно прочитаю этот отчёт.', translation: 'Amanhã eu com certeza vou ler (até o fim) este relatório.', tokens: ['Завтра', 'я', 'обязательно', 'прочитаю', 'этот', 'отчёт.'], audio: 'Завтра я обязательно прочитаю этот отчёт.' }
        ],
        [
            { speaker: 'Chefe', text: 'Ты сделал этот отчёт?', translation: 'Você fez (e concluiu) este relatório?', audio: 'Ты сделал этот отчёт?' },
            { speaker: 'Funcionário', text: 'Да, я приготовил все документы.', translation: 'Sim, eu preparei todos os documentos.', audio: 'Да, я приготовил все документы.' }
        ],
        [
            { q: 'Qual verbo indica que o problema foi EFETIVAMENTE RESOLVIDO com sucesso?', options: ['Решать', 'Решить', 'Думать', 'Писать'], correctIndex: 1, explanation: 'Решить (СВ) foca na resolução concluída.' },
            { q: 'Qual tempo futuro garante o RESULTADO final da ação (Futuro do Aspecto Perfeito)?', options: ['Futuro composto (Буду делать)', 'Futuro simples perfeito (Сделаю)', 'Presente', 'Passado'], correctIndex: 1, explanation: 'O Perfeito no futuro (ex: сделаю, прочитаю) garante o resultado.' },
            { q: 'Qual palavra costuma acompanhar o aspecto Perfeito indicando desfecho?', options: ['Долго', 'Наконец', 'Всегда', 'Обычно'], correctIndex: 1, explanation: 'Наконец (finalmente) acompanha a conclusão (СВ).' },
            { q: 'Par perfeito do verbo "покупать" (comprar)?', options: ['Покупать', 'Купить', 'Продать', 'Брать'], correctIndex: 1, explanation: 'Покупать ➔ Купить.' },
            { q: 'Traduza: "Я приготовил обед."', options: ['Estou cozinhando o almoço', 'Preparei (e terminei) o almoço', 'Vou cozinhar o almoço', 'Não sei cozinhar'], correctIndex: 1, explanation: 'Приготовил indica almoço pronto.' }
        ]
    ),

    // Módulo 10
    criarModuloB1Handcrafted(
        'ru_b1_mod_10',
        'Módulo 10: Аспект глагола III (Aspecto no Imperativo e Infinitivo)',
        'Aprenda as nuances do uso de aspectos no Modo Imperativo (convites corteses vs ordens diretas).',
        'Domine quando convidar com o Imperfeito (Садитесь!) ou instruir com o Perfeito (Откройте!).',
        'Проходите, садитесь! Прочитайте этот текст.',
        [
            { title: 'Imperativo Imperfeito: Convites Corteses', rule: 'Para convidar alguém de forma cortês e calorosa a iniciar uma ação, usa-se o Imperativo do verbo IMPERFEITO.', formula: 'Imperativo НСВ (приглашение / вежливость)', example: 'Садитесь! (Sente-se!) / Проходите! (Entre!) / Ешьте! (Coma!)', exampleTranslation: 'Sente-se, por favor! / Entre!' },
            { title: 'Imperativo Perfeito: Ordens e Pedidos Diretos', rule: 'Para dar uma instrução pontual, ordem ou pedido de execução imediata, usa-se o verbo PERFEITO.', formula: 'Imperativo СВ (конкретная просьба / приказ)', example: 'Откройте окно! / Прочитайте первую страницу!', exampleTranslation: 'Abra a janela! / Leia a primeira página!' },
            { title: 'Negação no Imperativo (Не + НСВ vs Не + СВ)', rule: 'Не + Imperfeito proíbe um hábito ou ação ("Не делай" = Não faça). Не + Perfeito é um AVISO para evitar um acidente ("Не сделай ошибку!" = Cuidado para não errar!).', formula: 'Не + НСВ (запрет) vs Не + СВ (предостережение)', example: 'Не курите здесь! vs Не упадите!', exampleTranslation: 'Não fume aqui! vs Cuidado para não cair!' }
        ],
        [
            { type: 'vocab', word: 'Садитесь!', romaji: 'Sadites!', translation: 'Sente-se! (convite cortês)', audio: 'Садитесь!', dica: 'Imperfeito de cortesia para acomodar visitas.' },
            { type: 'vocab', word: 'Проходите!', romaji: 'Prokhodite!', translation: 'Entre! / Pode passar!', audio: 'Проходите!', dica: 'Convite para entrar em uma casa ou sala.' },
            { type: 'vocab', word: 'Откройте!', romaji: 'Otkroyte!', translation: 'Abra! (instrução direta)', audio: 'Откройте!', dica: 'Perfeito de ação pontual.' },
            { type: 'vocab', word: 'Прочитайте!', romaji: 'Prochitayte!', translation: 'Leia! (instrução de leitura)', audio: 'Прочитайте!', dica: 'Perfeito para concluir a leitura.' },
            { type: 'vocab', word: 'Не упадите!', romaji: 'Ne upadite!', translation: 'Cuidado para não cair!', audio: 'Не упадите!', dica: 'Aviso de segurança com Perfeito.' }
        ],
        [
            { sentence: 'Здравствуйте, проходите и садитесь, пожалуйста!', translation: 'Olá, entre e sente-se, por favor!', tokens: ['Здравствуйте,', 'проходите', 'и', 'садитесь,', 'пожалуйста!'], audio: 'Здравствуйте, проходите и садитесь, пожалуйста!' },
            { sentence: 'Откройте учебники на странице 10 и прочитайте текст.', translation: 'Abram os livros na página 10 e leiam o texto.', tokens: ['Откройте', 'учебники', 'на', 'странице', '10', 'и', 'прочитайте', 'текст.'], audio: 'Откройте учебники на странице 10 и прочитайте текст.' }
        ],
        [
            { speaker: 'Anfitrião', text: 'Проходите! Чай будете?', translation: 'Entre! Vai querer chá?', audio: 'Проходите! Чай будете?' },
            { speaker: 'Convidado', text: 'Спасибо! С удовольствием.', translation: 'Obrigado! Com prazer.', audio: 'Спасибо! С удовольствием.' }
        ],
        [
            { q: 'Qual aspecto verbal é usado para CONVITES CORTESES e acolhedores no Imperativo (ex: Sente-se!)?', options: ['Imperfeito (НСВ)', 'Perfeito (СВ)', 'Futuro', 'Passado'], correctIndex: 0, explanation: 'Convites corteses usam o Imperfeito (Садитесь!).' },
            { q: 'Qual aspecto verbal é usado para INSTRUÇÕES PONTUAIS diretas (ex: Abra a janela!)?', options: ['Imperfeito (НСВ)', 'Perfeito (СВ)', 'Condicional', 'Gerúndio'], correctIndex: 1, explanation: 'Instruções pontuais usam o Perfeito (Откройте!).' },
            { q: 'O que significa "Проходите!"?', options: ['Saia!', 'Entre! / Pode passar!', 'Leia!', 'Escreva!'], correctIndex: 1, explanation: 'Проходите! = Entre / Pode passar!' },
            { q: 'Qual a diferença de "Не делай!" (НСВ) vs "Не сделай ошибку!" (СВ)?', options: ['Proibição de hábito vs Aviso para não errar', 'Nenhuma diferença', 'Passado vs Futuro', 'Formal vs Informal'], correctIndex: 0, explanation: 'Не + НСВ proíbe; Не + СВ adverte contra um erro.' },
            { q: 'Traduza: "Садитесь, пожалуйста!"', options: ['Sente-se, por favor!', 'Levante-se, por favor!', 'Saia, por favor!', 'Escreva, por favor!'], correctIndex: 0, explanation: 'Садитесь = Sente-se.' }
        ]
    ),

    // Módulo 11
    criarModuloB1Handcrafted(
        'ru_b1_mod_11',
        'Módulo 11: Сравнительная степень (Comparativos e Superlativos Avançados)',
        'Aprenda formas sintéticas de comparativo (-ее / -е) e o superlativo com Самый.',
        'Domine alterações fonéticas no comparativo (быстрее, громче, дороже, лучше).',
        'Этот поезд быстрее, а это самый красивый город.',
        [
            { title: 'Comparativo Sintético em -ее / -е', rule: 'A maioria dos adjetivos forma o comparativo adicionando a terminação -ее (ou -е com alternância de consoantes: к➔ч, г➔ж, т➔ч).', formula: 'Быстрый ➔ Быстрее | Громкий ➔ Громче | Высокий ➔ Выше', example: 'Поезд едет быстрее.', exampleTranslation: 'O trem vai mais rápido.' },
            { title: 'Comparativos Irregulares Frequentes', rule: 'Formas especiais: Хороший ➔ Лучше (melhor), Плохой ➔ Хуже (pior), Большой ➔ Больше (maior), Маленький ➔ Меньше (menor).', formula: 'Лучше / Хуже / Больше / Меньше', example: 'Сегодня погода лучше.', exampleTranslation: 'Hoje o tempo está melhor.' },
            { title: 'Superlativo com Самый', rule: 'Para formar o superlativo ("o mais..."), coloca-se a palavra Самый (concordando em gênero/número) antes do adjetivo.', formula: 'Самый (M) / Самая (F) / Самое (N) / Самые (Pl) + [Adjetivo]', example: 'Самый красивый город / Самая высокая гора', exampleTranslation: 'A cidade mais bonita / A montanha mais alta' }
        ],
        [
            { type: 'vocab', word: 'Быстрее', romaji: 'Bystreye', translation: 'Mais rápido', audio: 'Быстрее', dica: 'Comparativo de Быстрый.' },
            { type: 'vocab', word: 'Громче', romaji: 'Gromche', translation: 'Mais alto (som/voz)', audio: 'Громче', dica: 'Comparativo de Громкий (к ➔ че).' },
            { type: 'vocab', word: 'Самый', romaji: 'Samy', translation: 'O mais... (superlativo masculino)', audio: 'Самый', dica: 'Palavra de grau superlativo.' },
            { type: 'vocab', word: 'Самая', romaji: 'Samaya', translation: 'A mais... (superlativo feminino)', audio: 'Самая', dica: 'Superlativo feminino.' },
            { type: 'vocab', word: 'Выше', romaji: 'Vyshe', translation: 'Mais alto (estatura/altitude)', audio: 'Выше', dica: 'Comparativo de Высокий.' }
        ],
        [
            { sentence: 'Самолёт летит намного быстрее, чем поезд.', translation: 'O avião voa muito mais rápido do que o trem.', tokens: ['Самолёт', 'летит', 'намного', 'быстрее,', 'чем', 'поезд.'], audio: 'Самолёт летит намного быстрее, чем поезд.' },
            { sentence: 'Москва — самый большой город в России.', translation: 'Moscou é a maior cidade da Rússia.', tokens: ['Москва', '—', 'самый', 'большой', 'город', 'в', 'России.'], audio: 'Москва — самый большой город в России.' }
        ],
        [
            { speaker: 'Guia', text: 'Какое самое глубокое озеро в мире?', translation: 'Qual é o lago mais profundo do mundo?', audio: 'Какое самое глубокое озеро в мире?' },
            { speaker: 'Turista', text: 'Озеро Байкал — самое глубокое!', translation: 'O Lago Baikal é o mais profundo!', audio: 'Озеро Байкал — самое глубокое!' }
        ],
        [
            { q: 'Qual é o comparativo sintético de "Быстрый" (rápido)?', options: ['Быстро', 'Быстрее', 'Самый быстрый', 'Более быстрый'], correctIndex: 1, explanation: 'Быстрый ➔ Быстрее.' },
            { q: 'Qual é o comparativo de "Громкий" (barulhento/alto)?', options: ['Громче', 'Громченее', 'Громчеть', 'Самый громкий'], correctIndex: 0, explanation: 'Громкий ➔ Громче (к ➔ че).' },
            { q: 'Como se forma o superlativo "A cidade mais bonita"?', options: ['Более красивый город', 'Красивее город', 'Самый красивый город', 'Красивый город'], correctIndex: 2, explanation: 'Superlativo usa Самый + adjetivo.' },
            { q: 'Qual é o comparativo irregular de "Хороший" (bom)?', options: ['Хорошее', 'Лучше', 'Быстрее', 'Дороже'], correctIndex: 1, explanation: 'Хороший ➔ Лучше.' },
            { q: 'Qual é o lago mais profundo do mundo (самое глубокое озеро)?', options: ['Lago Titicaca', 'Lago Baikal (Байкал)', 'Mar Caspio', 'Lago Michigan'], correctIndex: 1, explanation: 'O Lago Baikal na Sibéria é o mais profundo do planeta.' }
        ]
    ),

    // Módulo 12
    criarModuloB1Handcrafted(
        'ru_b1_mod_12',
        'Módulo 12: Условное наклонение (Modo Condicional e Hipóteses)',
        'Aprenda a construir frases hipotéticas e expressar desejos usando a partícula Бы.',
        'Domine a estrutura do condicional russo (Если бы + verbo no passado + бы).',
        'Если бы у меня было время, я бы поехал в Сибирь.',
        [
            { title: 'Estrutura Hipotética com Если бы', rule: 'Para dizer "Se eu tivesse... eu iria...", usa-se a partícula Бы após a conjunção Если, e os verbos de ambas as orações ficam no TEMPO PASSADO.', formula: 'Если бы + [Verbo no Passado] ..., [Verbo no Passado] + бы', example: 'Если бы я знал, я бы пришёл.', exampleTranslation: 'Se eu soubesse, eu teria vindo.' },
            { title: 'Expressando Desejos Corteses с Я хотел бы', rule: 'Para expressar um desejo de forma muito educada ("Eu gostaria de..."), usa-se o verbo no passado + бы.', formula: 'Я хотел бы (M) / Я хотела бы (F) + [Infinitivo]', example: 'Я хотел бы заказать кофе.', exampleTranslation: 'Eu gostaria de pedir um café.' },
            { title: 'Invariabilidade da Partícula Бы', rule: 'A partícula Бы não flexiona jamais. Ela pode vir logo após o verbo no passado ou após os pronomes.', formula: 'Бы (sempre invariável)', example: 'Что бы ты сделал?', exampleTranslation: 'O que você faria?' }
        ],
        [
            { type: 'vocab', word: 'Бы', romaji: 'By', translation: 'Partícula do modo condicional', audio: 'Бы', dica: 'Transforma o passado em hipótese/condicional.' },
            { type: 'vocab', word: 'Если бы', romaji: 'Yesli by', translation: 'Se (em hipóteses / "Se fosse o caso")', audio: 'Если бы', dica: 'Introduz a condição irreal.' },
            { type: 'vocab', word: 'Я хотел бы', romaji: 'Ya khotel by', translation: 'Eu gostaria (masculino)', audio: 'Я хотел бы', dica: 'Pedido cortês masculino.' },
            { type: 'vocab', word: 'Я хотела бы', romaji: 'Ya khotela by', translation: 'Eu gostaria (feminino)', audio: 'Я хотела бы', dica: 'Pedido cortês feminino.' },
            { type: 'vocab', word: 'Знать', romaji: 'Znat', translation: 'Saber / Conhecer', audio: 'Знать', dica: 'Если бы я знал = Se eu soubesse.' }
        ],
        [
            { sentence: 'Если бы у меня было больше денег, я бы путешествовал по всему миру.', translation: 'Se eu tivesse mais dinheiro, eu viajaria pelo mundo todo.', tokens: ['Если', 'бы', 'у', 'меня', 'было', 'больше', 'денег,', 'я', 'бы', 'путешествовал', 'по', 'всему', 'миру.'], audio: 'Если бы у меня было больше денег, я бы путешествовал по всему миру.' },
            { sentence: 'Я хотел бы заказать столик на двоих.', translation: 'Eu gostaria de reservar uma mesa para dois.', tokens: ['Я', 'хотел', 'бы', 'заказать', 'столик', 'на', 'двоих.'], audio: 'Я хотел бы заказать столик на двоих.' }
        ],
        [
            { speaker: 'Cliente', text: 'Здравствуйте! Я хотела бы купить билет.', translation: 'Olá! Eu gostaria de comprar uma passagem.', audio: 'Здравствуйте! Я хотела бы купить билет.' },
            { speaker: 'Atendente', text: 'Конечно! Куда вы хотите поехать?', translation: 'Claro! Para onde você deseja ir?', audio: 'Конечно! Куда вы хотите поехать?' }
        ],
        [
            { q: 'Qual partícula forma o Modo Condicional (hipótese) em russo?', options: ['Ли', 'Бы', 'Же', 'Ведь'], correctIndex: 1, explanation: 'A partícula Бы forma o condicional.' },
            { q: 'Em qual tempo verbal devem ficar os verbos nas orações hipotéticas com "Если бы"?', options: ['Presente', 'Passado', 'Futuro', 'Imperativo'], correctIndex: 1, explanation: 'Verbos no condicional ficam no Passado.' },
            { q: 'Como uma mulher diz "Eu gostaria de um chá"?', options: ['Я хочу чай', 'Я хотела бы чай', 'Я хотел бы чай', 'Я буду чай'], correctIndex: 1, explanation: 'Feminino: Я хотела бы.' },
            { q: 'Traduza: "Если бы я знал..."', options: ['Se eu souber...', 'Se eu soubesse...', 'Eu sei disso...', 'Quando eu souber...'], correctIndex: 1, explanation: 'Se eu soubesse...' },
            { q: 'A partícula "Бы" sofre flexão de gênero ou número?', options: ['Sim, vira Бы/Была', 'Não, é 100% invariável', 'Muda no plural', 'Depende do caso'], correctIndex: 1, explanation: 'Бы é 100% invariável.' }
        ]
    ),

    // Módulo 13
    criarModuloB1Handcrafted(
        'ru_b1_mod_13',
        'Módulo 13: Косвенная речь (Discurso Indireto e Relatos)',
        'Aprenda a relatar o discurso alheio usando os conectores Что, Чтобы, Где e Как.',
        'Domine a transformação de discurso direto em discurso indireto.',
        'Он сказал, что приедет завтра, e попросил, чтобы мы встретили его.',
        [
            { title: 'Relatando Afirmações com Что', rule: 'Para relatar o que alguém disse (afirmação), usa-se a conjunção Что (que).', formula: '[Pessoa] сказал(а), что + [Oração]', example: 'Анна сказала, что она занята.', exampleTranslation: 'Anna disse que está ocupada.' },
            { title: 'Relatando Pedidos e Ordens com Чтобы', rule: 'Para relatar um pedido ou ordem de outra pessoa, usa-se Чтобы + verbo no Infinitivo ou Passado.', formula: '[Pessoa] попросил(а), чтобы + [Oração]', example: 'Он попросил, чтобы я позвонил ему.', exampleTranslation: 'Ele pediu para eu ligar para ele.' },
            { title: 'Perguntas Indiretas com Conectores', rule: 'Para relatar perguntas usa-se o conector interrogativo original (Где, Как, Когда) ou a partícula Ли.', formula: 'Он спросил, где / как / когда...', example: 'Иван спросил, где находится банк.', exampleTranslation: 'Ivan perguntou onde fica o banco.' }
        ],
        [
            { type: 'vocab', word: 'Что', romaji: 'Chto', translation: 'Que (conector de discurso indireto)', audio: 'Что', dica: 'Relata afirmações.' },
            { type: 'vocab', word: 'Чтобы', romaji: 'Chtoby', translation: 'Para que / Para (relata pedidos)', audio: 'Чтобы', dica: 'Relata pedidos e ordens.' },
            { type: 'vocab', word: 'Сказал', romaji: 'Skazal', translation: 'Disse (masculino)', audio: 'Сказал', dica: 'Verbo dizer no passado.' },
            { type: 'vocab', word: 'Спросил', romaji: 'Sprosil', translation: 'Perguntou (masculino)', audio: 'Спросил', dica: 'Verbo perguntar no passado.' },
            { type: 'vocab', word: 'Попросил', romaji: 'Poprosil', translation: 'Pediu (masculino)', audio: 'Попросил', dica: 'Verbo pedir no passado.' }
        ],
        [
            { sentence: 'Анна сказала, что она приедет на встречу вовремя.', translation: 'Anna disse que chegará para a reunião a tempo.', tokens: ['Анна', 'сказала,', 'что', 'она', 'приедет', 'на', 'встречу', 'вовремя.'], audio: 'Анна сказала, что она приедет на встречу вовремя.' },
            { sentence: 'Учитель попросил, чтобы студенты тише говорили.', translation: 'O professor pediu para que os estudantes falassem mais baixo.', tokens: ['Учитель', 'попросил,', 'чтобы', 'студенты', 'тише', 'говорили.'], audio: 'Учитель попросил, чтобы студенты тише говорили.' }
        ],
        [
            { speaker: 'Victor', text: 'Что сказал директор?', translation: 'O que o diretor disse?', audio: 'Что сказал директор?' },
            { speaker: 'Beatriz', text: 'Он сказал, что собрание будет в 3 часа.', translation: 'Ele disse que a reunião será às 3 horas.', audio: 'Он сказал, что собрание будет в 3 часа.' }
        ],
        [
            { q: 'Qual conjunção usa-se para relatar uma AFIRMAÇÃO em discurso indireto ("Ele disse que...")?', options: ['Чтобы', 'Что', 'Как', 'Если'], correctIndex: 1, explanation: 'Afirmações usam Что.' },
            { q: 'Qual conjunção usa-se para relatar um PEDIDO ("Ele pediu para...")?', options: ['Что', 'Чтобы', 'Где', 'Когда'], correctIndex: 1, explanation: 'Pedidos usam Чтобы.' },
            { q: 'Traduza: "Он спросил, где банк."', options: ['Ele disse onde é o banco', 'Ele perguntou onde fica o banco', 'Ele foi ao banco', 'Ele fechou o banco'], correctIndex: 1, explanation: 'Спросил = perguntou.' },
            { q: 'Traduza: "Она сказала, что устала."', options: ['Ela disse que está cansada', 'Ela pediu para descansar', 'Ela não está cansada', 'Ela vai trabalhar'], correctIndex: 0, explanation: 'Сказала, что... = disse que...' },
            { q: 'Verbo que significa "Pedir" no passado masculino?', options: ['Сказал', 'Спросил', 'Попросил', 'Ответил'], correctIndex: 2, explanation: 'Попросил = pediu.' }
        ]
    ),

    // Módulo 14
    criarModuloB1Handcrafted(
        'ru_b1_mod_14',
        'Módulo 14: Деловая переписка (E-mails Formais e Protocolo Corporativo)',
        'Aprenda o protocolo corporativo e a redação de e-mails formais em russo.',
        'Domine fórmulas de tratamento institucional, solicitações e encerramentos profissionais.',
        'Уважаемый коллега! Просим вас подтвердить получение файла. С уважением.',
        [
            { title: 'Saudações Formais Corporativas', rule: 'Em correspondências comerciais usam-se "Уважаемый" (Prezado) + Nome/Cargo para homens, e "Уважаемая" para mulheres.', formula: 'Уважаемый господин / Уважаемая госпожа / Уважаемые коллеги', example: 'Уважаемый Александр Викторович!', exampleTranslation: 'Prezado Aleksandr Viktorovitch!' },
            { title: 'Fórmulas de Solicitação Profissional', rule: 'Para fazer pedidos formais usam-se estruturas como "Просим вас + [Infinitivo]" (Pedimos-lhe que...) ou "Будем признательны за..." (Ficaremos gratos por...).', formula: 'Просим вас [Infinitivo] / Будем признательны за [Acusativo]', example: 'Просим вас выслать счёт.', exampleTranslation: 'Pedimos-lhe que nos envie a fatura.' },
            { title: 'Encerramento e Anexos', rule: 'Standard de encerramento: "С уважением" (Atenciosamente) e indicação de arquivos anexos com "В приложении" (Em anexo).', formula: 'С уважением, [Seu Nome] | В приложении: [Arquivo]', example: 'В приложении направляем договор.', exampleTranslation: 'Em anexo enviamos o contrato.' }
        ],
        [
            { type: 'vocab', word: 'Уважаемый', romaji: 'Uvazhayemy', translation: 'Prezado(a) / Respeitável', audio: 'Уважаемый', dica: 'Saudação corporativa oficial.' },
            { type: 'vocab', word: 'Просим вас', romaji: 'Prosim vas', translation: 'Pedimos-lhe / Solicitamos a você', audio: 'Просим вас', dica: 'Fórmula de cortesia comercial.' },
            { type: 'vocab', word: 'В приложении', romaji: 'V prilozhenii', translation: 'Em anexo', audio: 'В приложении', dica: 'Indicação de arquivo anexado.' },
            { type: 'vocab', word: 'Договор', romaji: 'Dogovor', translation: 'Contrato', audio: 'Договор', dica: 'Documento jurídico de acordo.' },
            { type: 'vocab', word: 'Подтвердить', romaji: 'Podtverdit', translation: 'Confirmar', audio: 'Подтвердить', dica: 'Confirmar recebimento ou presença.' }
        ],
        [
            { sentence: 'Уважаемые коллеги, просим вас подтвердить участие в конференции.', translation: 'Prezados colegas, pedimos que confirmem a participação na conferência.', tokens: ['Уважаемые', 'коллеги,', 'просим', 'вас', 'подтвердить', 'участие', 'в', 'конференции.'], audio: 'Уважаемые коллеги, просим вас подтвердить участие в конференции.' },
            { sentence: 'В приложении к письму вы найдёте signed договор.', translation: 'Em anexo à carta os senhores encontrarão o contrato assinado.', tokens: ['В', 'приложении', 'к', 'письму', 'вы', 'найдёте', 'signed', 'договор.'], audio: 'В приложении к письму вы найдёте signed договор.' }
        ],
        [
            { speaker: 'Secretária', text: 'Вы получили наше письмо?', translation: 'O senhor recebeu nossa carta?', audio: 'Вы получили наше письмо?' },
            { speaker: 'Parceiro', text: 'Да, спасибо! Файл в приложении открылся.', translation: 'Sim, obrigado! O arquivo em anexo abriu.', audio: 'Да, спасибо! Файл в приложении открылся.' }
        ],
        [
            { q: 'Qual saudação é usada em e-mails corporativos formais em russo?', options: ['Привет!', 'Уважаемый господин...', 'Здорово!', 'Пока!'], correctIndex: 1, explanation: 'Уважаемый... = Prezado...' },
            { q: 'Como se diz "Em anexo" no protocolo de e-mails?', options: ['В письме', 'В приложении', 'На столе', 'В связи'], correctIndex: 1, explanation: 'В приложении = Em anexo.' },
            { q: 'Fórmula cortês para solicitar algo corporativamente ("Pedimos-lhe...")?', options: ['Дай мне', 'Просим вас', 'Хочу', 'Быстро'], correctIndex: 1, explanation: 'Просим вас + infinitivo.' },
            { q: 'Traduza: "Договор"', options: ['E-mail', 'Contrato', 'Fatura', 'Reunião'], correctIndex: 1, explanation: 'Договор = Contrato.' },
            { q: 'Fórmula padrão de encerramento corporativo?', options: ['Целую', 'С уважением', 'Пока', 'До завтра'], correctIndex: 1, explanation: 'С уважением = Atenciosamente.' }
        ]
    ),

    // Módulo 15
    criarModuloB1Handcrafted(
        'ru_b1_mod_15',
        'Módulo 15: Собеседование (Entrevistas de Emprego em Russo)',
        'Aprenda a apresentar seu currículo (Резюме), competências e trajetória profissional em entrevistas.',
        'Domine o vocabulário de qualificações e verbos de realização corporativa.',
        'У меня есть опыт работы в IT e я свободно говорю по-английски.',
        [
            { title: 'Apresentando Experiência (Опыт работы)', rule: 'Para falar da sua experiência anterior usa-se "У меня есть опыт работы в + [Área no Preposicional/Locativo]".', formula: 'У меня есть опыт работы в + [Área]', example: 'У меня есть опыт работы в маркетинге.', exampleTranslation: 'Tenho experiência profissional em marketing.' },
            { title: 'Fluência em Idiomas', rule: 'Usa-se "Свободно говорить по-..." para indicar fluência em línguas estrangeiras.', formula: 'Свободно говорить по-русски / по-английски', example: 'Я свободно говорю по-русски.', exampleTranslation: 'Falo russo fluentemente.' },
            { title: 'Qualidades Pessoais no Currículo', rule: 'Adjetivos valorizados: Ответственный (responsável), Коммуникабельный (comunicativo), Пунктуальный (pontual).', formula: 'Я + [Adjetivo Masculino/Feminino]', example: 'Я очень ответственный сотрудник.', exampleTranslation: 'Sou um funcionário muito responsável.' }
        ],
        [
            { type: 'vocab', word: 'Резюме', romaji: 'Rezyume', translation: 'Currículo (CV)', audio: 'Резюме', dica: 'Documento de histórico profissional.' },
            { type: 'vocab', word: 'Опыт работы', romaji: 'Opyt raboty', translation: 'Experiência de trabalho', audio: 'Опыт работы', dica: 'Bagagem profissional.' },
            { type: 'vocab', word: 'Собеседование', romaji: 'Sobesedovaniye', translation: 'Entrevista de emprego', audio: 'Собеседование', dica: 'Entrevista de seleção profissional.' },
            { type: 'vocab', word: 'Ответственный', romaji: 'Otvetstvenny', translation: 'Responsável', audio: 'Ответственный', dica: 'Qualidade profissional valorizada.' },
            { type: 'vocab', word: 'Должность', romaji: 'Dolzhnost', translation: 'Cargo / Função', audio: 'Должность', dica: 'Posto de trabalho na empresa.' }
        ],
        [
            { sentence: 'У меня есть пятилетний опыт работы в сфере IT.', translation: 'Eu tenho cinco anos de experiência profissional no setor de TI.', tokens: ['У', 'меня', 'есть', 'пятилетний', 'опыт', 'работы', 'в', 'сфере', 'IT.'], audio: 'У меня есть пятилетний опыт работы в сфере IT.' },
            { sentence: 'Я ответственный сотрудник e умею работать в команде.', translation: 'Sou um funcionário responsável e sei trabalhar em equipe.', tokens: ['Я', 'ответственный', 'сотрудник', 'e', 'умею', 'работать', 'в', 'команде.'], audio: 'Я ответственный сотрудник e умею работать в команде.' }
        ],
        [
            { speaker: 'Entrevistador', text: 'Расскажите о вашем опыте работы.', translation: 'Fale-nos sobre sua experiência de trabalho.', audio: 'Расскажите о вашем опыте работы.' },
            { speaker: 'Candidato', text: 'Я три года работал менеджером проектов.', translation: 'Eu trabalhei por três anos como gerente de projetos.', audio: 'Я три года работал менеджером проектов.' }
        ],
        [
            { q: 'O que significa a palavra "Резюме"?', options: ['Resumo de livro', 'Currículo profissional (CV)', 'Entrevista', 'Contrato'], correctIndex: 1, explanation: 'Резюме = Currículo profissional.' },
            { q: 'Como se diz "Entrevista de emprego" em russo?', options: ['Встреча', 'Собеседование', 'Конференция', 'Урок'], correctIndex: 1, explanation: 'Собеседование = Entrevista de emprego.' },
            { q: 'Traduza: "Опыт работы"', options: ['Horário de trabalho', 'Experiência de trabalho', 'Local de trabalho', 'Salário'], correctIndex: 1, explanation: 'Опыт работы = Experiência de trabalho.' },
            { q: 'Qual adjetivo significa "Responsável"?', options: ['Добрый', 'Умный', 'Ответственный', 'Красивый'], correctIndex: 2, explanation: 'Ответственный = Responsável.' },
            { q: 'Como se diz "Trabalhar em equipe"?', options: ['Работать в команде', 'Работать дома', 'Работать быстро', 'Работать один'], correctIndex: 0, explanation: 'Работать в команде.' }
        ]
    ),

    // Módulo 16
    criarModuloB1Handcrafted(
        'ru_b1_mod_16',
        'Módulo 16: Сложные предлоги (Preposições Complexas dos Casos)',
        'Aprenda preposições causais e temporais avançadas: Из-за (+ Genitivo), Благодаря (+ Dativo) e Во время (+ Genitivo).',
        'Diferencie causas de impacto negativo (Из-за) de causas de gratidão/impacto positivo (Благодаря).',
        'Из-за дождя мы остались дома, но благодаря другу всё закончилось хорошо.',
        [
            { title: 'Preposição Из-за + Genitivo (Causa Negativa)', rule: 'A preposição Из-за (por causa de) é usada para indicar motivos desfavoráveis, imprevistos ou problemas.', formula: 'Из-за + [Genitivo]', example: 'Из-за дождя / Из-за пробки', exampleTranslation: 'Por causa da chuva / Por causa do engarrafamento' },
            { title: 'Preposição Благодаря + Dativo (Causa Positiva)', rule: 'A preposição Благодаря (graças a) é usada para indicar causas benéficas, ajuda ou fatores positivos.', formula: 'Благодаря + [Dativo]', example: 'Благодаря врачу / Благодаря помощи', exampleTranslation: 'Graças ao médico / Graças à ajuda' },
            { title: 'Preposição Temporal Во время + Genitivo', rule: 'Significa "Durante" a realização de um evento.', formula: 'Во время + [Genitivo]', example: 'Во время концерта / Во время обеда', exampleTranslation: 'Durante o show / Durante o almoço' }
        ],
        [
            { type: 'vocab', word: 'Из-за', romaji: 'Iz-za', translation: 'Por causa de (causa negativa + Genativo)', audio: 'Из-за', dica: 'Indica imprevisto ou problema.' },
            { type: 'vocab', word: 'Благодаря', romaji: 'Blagodarya', translation: 'Graças a (causa positiva + Dativo)', audio: 'Благодаря', dica: 'Indica gratidão ou fator favorável.' },
            { type: 'vocab', word: 'Во время', romaji: 'Vo vremya', translation: 'Durante (+ Genitivo)', audio: 'Во время', dica: 'Preposição temporal.' },
            { type: 'vocab', word: 'Пробки', romaji: 'Probki', translation: 'Engarrafamento / Trânsito (genitivo)', audio: 'Пробки', dica: 'Causa clássica de atrasos.' },
            { type: 'vocab', word: 'Помощи', romaji: 'Pomoschi', translation: 'Ajuda (dativo/genitivo)', audio: 'Помощи', dica: 'Благодаря помощи = Graças à ajuda.' }
        ],
        [
            { sentence: 'Из-за сильного дождя матч был отменён.', translation: 'Por causa da forte chuva o jogo foi cancelado.', tokens: ['Из-за', 'сильного', 'дождя', 'матч', 'был', 'отменён.'], audio: 'Из-за сильного дождя матч был отменён.' },
            { sentence: 'Благодаря поддержке друзей он успешно сдал экзамен.', translation: 'Graças ao apoio dos amigos ele passou com sucesso no exame.', tokens: ['Благодаря', 'поддержке', 'друзей', 'он', 'успешно', 'сдал', 'экзамен.'], audio: 'Благодаря поддержке друзей он успешно сдал экзамен.' }
        ],
        [
            { speaker: 'Katya', text: 'Почему ты опоздал?', translation: 'Por que você se atrasou?', audio: 'Почему ты опоздал?' },
            { speaker: 'Boris', text: 'Из-за ужасной пробки на дороге.', translation: 'Por causa de um trânsito terrível na estrada.', audio: 'Из-за ужасной пробки на дороге.' }
        ],
        [
            { q: 'Qual preposição e caso usam-se para uma CAUSA NEGATIVA (ex: por causa da chuva)?', options: ['Благодаря + Dativo', 'Из-за + Genitivo', 'Во время + Acusativo', 'Для + Instrumental'], correctIndex: 1, explanation: 'Из-за + Genitivo indica motivo negativo.' },
            { q: 'Qual preposição e caso usam-se para uma CAUSA POSITIVA (ex: graças ao médico)?', options: ['Из-за + Genitivo', 'Благодаря + Dativo', 'Без + Genitivo', 'Под + Instrumental'], correctIndex: 1, explanation: 'Благодаря + Dativo indica motivo favorável.' },
            { q: 'O que significa "Во время обеда"?', options: ['Antes do almoço', 'Durante o almoço', 'Depois do almoço', 'Sem almoço'], correctIndex: 1, explanation: 'Во время = Durante.' },
            { q: 'Traduza: "Из-за пробки"', options: ['Graças ao trânsito', 'Por causa do engarrafamento', 'Durante o trânsito', 'Sem trânsito'], correctIndex: 1, explanation: 'Из-за пробки = Por causa do engarrafamento.' },
            { q: 'Qual caso gramatical segue a preposição "Благодаря"?', options: ['Genitivo', 'Dativo', 'Acusativo', 'Preposicional'], correctIndex: 1, explanation: 'Благодаря exige Caso Dativo.' }
        ]
    ),

    // Módulo 17
    criarModuloB1Handcrafted(
        'ru_b1_mod_17',
        'Módulo 17: Русская литература I (Introdução aos Clássicos)',
        'Introdução aos grandes clássicos da literatura russa (Aleksandr Pushkin e Anton Tchekhov).',
        'Aprenda vocabulário poético, descritivo e expressivo de textos adaptados.',
        'Пушкин — солнце русской поэзии, а Чехов — мастер рассказа.',
        [
            { title: 'Aleksandr Pushkin (Александр Пушкин)', rule: 'Considerado o fundador da literatura russa moderna e "o sol da poesia russa" (Солнце русской поэзии).', formula: 'Поэзия (Poesia) / Стихотворение (Poema)', example: 'Я помню чудное мгновенье...', exampleTranslation: 'Recordo o momento maravilhoso...' },
            { title: 'Anton Tchekhov (Антон Чехов)', rule: 'Mestre mundial do conto curto (рассказ) e da dramaturgia (пьеса).', formula: 'Рассказ (Conto) / Пьеса (Peça de teatro)', example: 'Чехов писал замечательные рассказы.', exampleTranslation: 'Tchekhov escrevia contos fabulosos.' },
            { title: 'Vocabulário Literário e Poético', rule: 'Substantivos e adjetivos literários: Поэт (poeta), Писатель (escritor), Произведение (obra literária).', formula: 'Произведение / Повесть / Роман', example: 'Это великое произведение.', exampleTranslation: 'Esta é uma grande obra literária.' }
        ],
        [
            { type: 'vocab', word: 'Поэт', romaji: 'Poet', translation: 'Poeta', audio: 'Поэт', dica: 'Autor de poesias.' },
            { type: 'vocab', word: 'Писатель', romaji: 'Pisatel', translation: 'Escritor', audio: 'Писатель', dica: 'Autor de prosa e romances.' },
            { type: 'vocab', word: 'Рассказ', romaji: 'Rasskaz', translation: 'Conto curto', audio: 'Рассказ', dica: 'Gênero literário famoso de Tchekhov.' },
            { type: 'vocab', word: 'Стихотворение', romaji: 'Stikhotvoreniye', translation: 'Poema', audio: 'Стихотворение', dica: 'Texto poético.' },
            { type: 'vocab', word: 'Произведение', romaji: 'Proizvedeniye', translation: 'Obra literária / artística', audio: 'Произведение', dica: 'Criação de um artista ou escritor.' }
        ],
        [
            { sentence: 'Александр Пушкин — великий русский поэт.', translation: 'Aleksandr Pushkin é um grande poeta russo.', tokens: ['Александр', 'Пушкин', '—', 'великий', 'русский', 'поэт.'], audio: 'Александр Пушкин — великий русский поэт.' },
            { sentence: 'Мы читаем рассказы Чехова на уроке литературы.', translation: 'Nós lemos os contos de Tchekhov na aula de literatura.', tokens: ['Мы', 'читаем', 'рассказы', 'Чехова', 'на', 'уроке', 'литературы.'], audio: 'Мы читаем рассказы Чехова на уроке литературы.' }
        ],
        [
            { speaker: 'Estudante', text: 'Кто твой любимый русский писатель?', translation: 'Quem é seu escritor russo favorito?', audio: 'Кто твой любимый русский писатель?' },
            { speaker: 'Professor', text: 'Мой любимый писатель — Антон Чехов.', translation: 'Meu escritor favorito é Anton Tchekhov.', audio: 'Мой любимый писатель — Антон Чехов.' }
        ],
        [
            { q: 'Quem é considerado "o sol da poesia russa" (Солнце русской поэзии)?', options: ['Tolstoi', 'Dostoiévski', 'Pushkin (Александр Пушкин)', 'Tchekhov'], correctIndex: 2, explanation: 'Aleksandr Pushkin é o fundador da literatura russa moderna.' },
            { q: 'Por qual gênero literário Anton Tchekhov é mundialmente famoso?', options: ['Poemas épicos', 'Contos curtos (Рассказы)', 'Romances policiais', 'Fábulas'], correctIndex: 1, explanation: 'Tchekhov é o mestre dos contos curtos (рассказы).' },
            { q: 'O que significa a palavra "Произведение"?', options: ['Editora', 'Obra literária / artística', 'Livraria', 'Prefácio'], correctIndex: 1, explanation: 'Произведение = Obra literária.' },
            { q: 'Traduza: "Стихотворение"', options: ['Romance', 'Poema', 'Teatro', 'Biografia'], correctIndex: 1, explanation: 'Стихотворение = Poema.' },
            { q: 'Como se diz "Escritor" em russo?', options: ['Поэт', 'Писатель', 'Художник', 'Учитель'], correctIndex: 1, explanation: 'Писатель = Escritor.' }
        ]
    ),

    // Módulo 18
    criarModuloB1Handcrafted(
        'ru_b1_mod_18',
        'Módulo 18: СМИ и новости (Leitura de Notícias em Russo)',
        'Aprenda o vocabulário jornalístico e expressões da imprensa russa (СМИ).',
        'Domine a leitura de manchetes, vocabulário de economia e política.',
        'По сообщению СМИ, экономика страны демонстрирует рост.',
        [
            { title: 'A Sigla СМИ (Meios de Comunicação)', rule: 'СМИ significa Средства Массовой Информации (Meios de Comunicação de Massa / Imprensa).', formula: 'СМИ (Imprensa / Mídia)', example: 'По данным СМИ...', exampleTranslation: 'De acordo com a mídia...' },
            { title: 'Manchetes e Relatos Informativos', rule: 'Usa-se "Сообщается, что..." (Informa-se que...) ou "По сообщению..." (Segundo o relato de...).', formula: 'Сообщается, что... / По сообщению...', example: 'Сообщается, что переговоры прошли успешно.', exampleTranslation: 'Informa-se que as negociações foram bem-sucedidas.' },
            { title: 'Vocabulário Econômico e Político', rule: 'Termos frequentes: Экономика (economia), Президент (presidente), Новости (notícias), Событие (acontecimento).', formula: 'Новости / Экономика / Событие', example: 'Главные события дня.', exampleTranslation: 'Os principais acontecimentos do dia.' }
        ],
        [
            { type: 'vocab', word: 'СМИ', romaji: 'SMI', translation: 'Imprensa / Mídia de massa', audio: 'СМИ', dica: 'Sigla de Средства Массовой Информации.' },
            { type: 'vocab', word: 'Новости', romaji: 'Novosti', translation: 'Notícias', audio: 'Новости', dica: 'Informaçõess jornalísticas.' },
            { type: 'vocab', word: 'Событие', romaji: 'Sobytiye', translation: 'Acontecimento / Evento', audio: 'Событие', dica: 'Fato noticioso.' },
            { type: 'vocab', word: 'Сообщается', romaji: 'Soobschayetsya', translation: 'Informa-se / É noticiado', audio: 'Сообщается', dica: 'Voz passiva jornalística.' },
            { type: 'vocab', word: 'Экономика', romaji: 'Ekonomika', translation: 'Economia', audio: 'Экономика', dica: 'Setor de finanças e produção.' }
        ],
        [
            { sentence: 'По сообщению СМИ, сегодня состоялись важные переговоры.', translation: 'Segundo a mídia, hoje ocorreram negociações importantes.', tokens: ['По', 'сообщению', 'СМИ,', 'сегодня', 'состоялись', 'важные', 'переговоры.'], audio: 'По сообщению СМИ, сегодня состоялись важные переговоры.' },
            { sentence: 'Мы каждый вечер смотрим новости по телевизору.', translation: 'Nós assistimos às notícias na televisão toda noite.', tokens: ['Мы', 'каждый', 'вечер', 'смотрим', 'новости', 'по', 'телевизору.'], audio: 'Мы каждый вечер смотрим новости по телевизору.' }
        ],
        [
            { speaker: 'Jornalista', text: 'Какие главные новости сегодня?', translation: 'Quais são as principais notícias hoje?', audio: 'Какие главные новости сегодня?' },
            { speaker: 'Âncora', text: 'Главное событие — открытие нового моста.', translation: 'O principal acontecimento é a inauguração da nova ponte.', audio: 'Главное событие — открытие нового моста.' }
        ],
        [
            { q: 'O que significa a sigla "СМИ" no russo?', options: ['Sistema Médico', 'Meios de Comunicação de Massa / Imprensa', 'Sociedade Militar', 'Escola de Idiomas'], correctIndex: 1, explanation: 'СМИ = Imprensa / Mídia.' },
            { q: 'Traduza: "Новости"', options: ['Novelas', 'Notícias', 'Livros', 'Artigos'], correctIndex: 1, explanation: 'Новости = Notícias.' },
            { q: 'O que significa "Событие"?', options: ['Acontecimento / Evento', 'Problema', 'Pergunta', 'Resposta'], correctIndex: 0, explanation: 'Событие = Acontecimento / Evento.' },
            { q: 'Expressão jornalística que significa "Informa-se que..."?', options: ['Сообщается, что...', 'Думается, что...', 'Хочется, что...', 'Кажется, что...'], correctIndex: 0, explanation: 'Сообщается, что...' },
            { q: 'Traduza: "Экономика"', options: ['Ecologia', 'Economia', 'Matemática', 'Física'], correctIndex: 1, explanation: 'Экономика = Economia.' }
        ]
    ),

    // Módulo 19
    criarModuloB1Handcrafted(
        'ru_b1_mod_19',
        'Módulo 19: Экология и общество (Meio Ambiente e Sociedade)',
        'Aprenda a expressar opiniões estruturadas sobre meio ambiente e sociedade.',
        'Domine estruturas como Я считаю, что... e По моему мнению...',
        'Я считаю, что мы должны защищать природу e экологию.',
        [
            { title: 'Expressando Opinião: Я считаю, что...', rule: 'Para expressar um posicionamento forte e considerado, usa-se "Я считаю, что..." (Eu considero/acho que...).', formula: 'Я считаю, что + [Opinião]', example: 'Я считаю, что это важно.', exampleTranslation: 'Eu considero que isto é importante.' },
            { title: 'Expressando Ponto de Vista: По-моему', rule: 'Usa-se "По-моему" (Na minha opinião) ou "По моему мнению" para introduzir um ponto de vista.', formula: 'По-моему, / По моему мнению,', example: 'По-моему, природа в опасности.', exampleTranslation: 'Na minha opinião, a natureza está em perigo.' },
            { title: 'Vocabulário Ambiental e Social', rule: 'Termos essenciais: Природа (natureza), Экология (ecologia), Защищать (proteger), Общество (sociedade).', formula: 'Природа / Защищать / Общество', example: 'Мы должны защищать природу.', exampleTranslation: 'Nós devemos proteger a natureza.' }
        ],
        [
            { type: 'vocab', word: 'Я считаю, что', romaji: 'Ya schitayu, chto', translation: 'Eu considero/acho que', audio: 'Я считаю, что', dica: 'Introdução de opinião fundamentada.' },
            { type: 'vocab', word: 'По-моему', romaji: 'Po-moyemu', translation: 'Na minha opinião', audio: 'По-моему', dica: 'Marcador de ponto de vista.' },
            { type: 'vocab', word: 'Защищать', romaji: 'Zaschischat', translation: 'Proteger / Defender', audio: 'Защищать', dica: 'Verbo de proteção ambiental ou social.' },
            { type: 'vocab', word: 'Общество', romaji: 'Obschestvo', translation: 'Sociedade', audio: 'Общество', dica: 'Coletividade humana.' },
            { type: 'vocab', word: 'Природа', romaji: 'Priroda', translation: 'Natureza', audio: 'Природа', dica: 'Meio ambiente.' }
        ],
        [
            { sentence: 'Я считаю, что общество должно больше заботиться об экологии.', translation: 'Eu considero que a sociedade deve cuidar mais da ecologia.', tokens: ['Я', 'считаю,', 'что', 'общество', 'должно', 'больше', 'заботиться', 'об', 'экологии.'], audio: 'Я считаю, что общество должно больше заботиться об экологии.' },
            { sentence: 'По-моему, защищать природу — это duty каждого человека.', translation: 'Na minha opinião, proteger a natureza é dever de cada pessoa.', tokens: ['По-моему,', 'защищать', 'природу', '—', 'это', 'duty', 'каждого', 'человека.'], audio: 'По-моему, защищать природу — это duty каждого человека.' }
        ],
        [
            { speaker: 'Ativista', text: 'Как вы относитесь к экологии?', translation: 'O que você pensa sobre a ecologia?', audio: 'Как вы относитесь к экологии?' },
            { speaker: 'Cidadão', text: 'Я считаю, что это самый важный вопрос.', translation: 'Eu considero que este é o assunto mais importante.', audio: 'Я считаю, что это самый важный вопрос.' }
        ],
        [
            { q: 'Qual estrutura é usada para expressar uma opinião fundamentada ("Eu considero que...")?', options: ['Я знаю, что', 'Я считаю, что', 'Я вижу, что', 'Я слышу, что'], correctIndex: 1, explanation: 'Я считаю, что = Eu considero que...' },
            { q: 'O que significa "По-моему"?', options: ['Na minha opinião', 'Por favor', 'De nada', 'Talvez'], correctIndex: 0, explanation: 'По-моему = Na minha opinião.' },
            { q: 'Verbo que significa "Proteger / Defender"?', options: ['Ломать', 'Защищать', 'Забывать', 'Смотреть'], correctIndex: 1, explanation: 'Защищать = Proteger / Defender.' },
            { q: 'Traduza: "Общество"', options: ['Empresa', 'Sociedade', 'Governo', 'Família'], correctIndex: 1, explanation: 'Общество = Sociedade.' },
            { q: 'Traduza: "Я считаю, что это важно."', options: ['Eu acho que é difícil', 'Eu considero que isto é importante', 'Eu não me importo', 'Eu sei disso'], correctIndex: 1, explanation: 'Eu considero que isto é importante.' }
        ]
    ),

    // Módulo 20
    criarModuloB1Handcrafted(
        'ru_b1_mod_20',
        'Módulo 20: Выражение причины и следствия (Causa e Consequência)',
        'Domine os conectores lógicos de causa e consequência: Потому что, Поэтому e Так как.',
        'Aprenda a estruturar argumentos lógicos fluidos em russo.',
        'Он не пришёл, потому что заболел; поэтому мы перенесли встречу.',
        [
            { title: 'Causa com Потому что (Porque)', rule: 'Usa-se "Потому что" para responder diretamente à pergunta Почему? (Por quê?).', formula: '[Fato] +, потому что + [Causa]', example: 'Я не пришёл, потому что был занят.', exampleTranslation: 'Não fui porque estava ocupado.' },
            { title: 'Consequência com Поэтому (Por isso / Portanto)', rule: 'Usa-se "Поэтому" para introduzir o resultado ou consequência de um fato anterior.', formula: '[Fato] +, поэтому + [Consequência]', example: 'Погода была плохая, поэтому мы остались дома.', exampleTranslation: 'O tempo estava ruim, por isso ficamos em casa.' },
            { title: 'Causa Formal / Explicativa com Так как', rule: 'Usa-se "Так как" (Visto que / Já que) frequentemente no início da frase para enunciar a causa motivadora.', formula: 'Так как + [Causa] ..., [Consequência]', example: 'Так как идёт дождь, мы возьмём зонт.', exampleTranslation: 'Já que está chovendo, levaremos um guarda-chuva.' }
        ],
        [
            { type: 'vocab', word: 'Потому что', romaji: 'Potomu chto', translation: 'Porque (causa)', audio: 'Потому что', dica: 'Responde a Por quê?' },
            { type: 'vocab', word: 'Поэтому', romaji: 'Poetomu', translation: 'Por isso / Portanto (consequência)', audio: 'Поэтому', dica: 'Introduz o resultado lógico.' },
            { type: 'vocab', word: 'Так как', romaji: 'Tak kak', translation: 'Visto que / Já que (causa inicial)', audio: 'Так как', dica: 'Usado no início de orações causais.' },
            { type: 'vocab', word: 'Почему', romaji: 'Pochemu', translation: 'Por quê?', audio: 'Почему', dica: 'Pergunta causal.' },
            { type: 'vocab', word: 'Заболел', romaji: 'Zabolel', translation: 'Adoeceu', audio: 'Заболел', dica: 'Causa comum de faltas.' }
        ],
        [
            { sentence: 'Он не пришёл на урок, потому что заболел.', translation: 'Ele não veio à aula porque adoeceu.', tokens: ['Он', 'не', 'пришёл', 'на', 'урок,', 'потому', 'что', 'заболел.'], audio: 'Он не пришёл на урок, потому что заболел.' },
            { sentence: 'Так как на улице холодно, мы надели тёплые куртки.', translation: 'Já que está frio na rua, nós vestimos jaquetas quentes.', tokens: ['Так', 'как', 'на', 'улице', 'холодно,', 'мы', 'надели', 'тёплые', 'куртки.'], audio: 'Так как на улице холодно, мы надели тёплые куртки.' }
        ],
        [
            { speaker: 'Maria', text: 'Почему ты не позвонил?', translation: 'Por que você não ligou?', audio: 'Почему ты не позвонил?' },
            { speaker: 'Ivan', text: 'У меня разрядился телефон, поэтому я не смог.', translation: 'Meu telefone descarregou, por isso não consegui.', audio: 'У меня разрядился телефон, поэтому я не смог.' }
        ],
        [
            { q: 'Qual conector introduz a CAUSA para responder a "Почему?" (Porque)?', options: ['Поэтому', 'Потому что', 'Так как', 'Чтобы'], correctIndex: 1, explanation: 'Потому что = Porque.' },
            { q: 'Qual conector introduz a CONSEQUÊNCIA / RESULTADO (Por isso)?', options: ['Потому что', 'Поэтому', 'Если', 'Хотя'], correctIndex: 1, explanation: 'Поэтому = Por isso / Portanto.' },
            { q: 'Qual conector causal é comumente colocado no INÍCIO da frase ("Já que / Visto que...")?', options: ['Потому что', 'Так как', 'Поэтому', 'Зачем'], correctIndex: 1, explanation: 'Так как = Visto que / Já que.' },
            { q: 'Traduza: "Почему ты опоздал?"', options: ['Onde você estava?', 'Por que você se atrasou?', 'Quando você chega?', 'Como você vai?'], correctIndex: 1, explanation: 'Почему = Por quê?' },
            { q: 'Traduza: "Я устал, поэтому иду спать."', options: ['Estou cansado porque vou dormir', 'Estou cansado, por isso vou dormir', 'Não estou cansado', 'Vou trabalhar'], correctIndex: 1, explanation: 'Поэтому = por isso.' }
        ]
    ),

    // Módulo 21
    criarModuloB1Handcrafted(
        'ru_b1_mod_21',
        'Módulo 21: Выражение цели (Orações Finais e Propósito)',
        'Aprenda a expressar objetivos e propósitos com Para que / A fim de (Чтобы, Для того чтобы) e Para (+ Genitivo).',
        'Domine orações subordinadas finais e a preposição Для.',
        'Я учу русский язык, чтобы работать в России, e покупаю книги для этого.',
        [
            { title: 'Propósito com Чтобы + Infinitivo', rule: 'Quando o sujeito da oração principal e da subordinada é O MESMO, usa-se Чтобы seguido do verb no Infinitivo.', formula: '[Ação] +, чтобы + [Infinitivo]', example: 'Я приехал в Москву, чтобы учиться.', exampleTranslation: 'Vim a Moscou para estudar.' },
            { title: 'Estrutura Formal Для того чтобы', rule: 'Em contextos formais ou e-mails corporativos, usa-se a expressão "Для того чтобы" (A fim de que / Com a finalidade de).', formula: 'Для того чтобы + [Infinitivo / Subjuntivo]', example: 'Для того чтобы получить визу, нужно заполнить анкету.', exampleTranslation: 'A fim de obter o visto, é preciso preencher o formulário.' },
            { title: 'Preposição Для + Genitivo', rule: 'Para indicar a quem ou a que se destina algo ("para"), usa-se a preposição Для + Caso Genitivo.', formula: 'Для + [Genitivo]', example: 'Подарок для мамы / Учебник для студентов', exampleTranslation: 'Presente para a mãe / Livro para estudantes' }
        ],
        [
            { type: 'vocab', word: 'Чтобы', romaji: 'Chtoby', translation: 'Para / Com o fim de (+ Infinitivo)', audio: 'Чтобы', dica: 'Conector de propósito final.' },
            { type: 'vocab', word: 'Для того чтобы', romaji: 'Dlya togo chtoby', translation: 'A fim de que / Com o objetivo de', audio: 'Для того чтобы', dica: 'Estrutura formal de propósito.' },
            { type: 'vocab', word: 'Для', romaji: 'Dlya', translation: 'Para (destinado a + Genitivo)', audio: 'Для', dica: 'Preposição de destinação.' },
            { type: 'vocab', word: 'Цель', romaji: 'Tsel', translation: 'Objetivo / Meta', audio: 'Цель', dica: 'Substantivo de propósito.' },
            { type: 'vocab', word: 'Получить', romaji: 'Poluchit', translation: 'Obter / Receber', audio: 'Получить', dica: 'Verbo de conquista de meta.' }
        ],
        [
            { sentence: 'Я занимаюсь каждый день, чтобы свободно говорить по-русски.', translation: 'Eu estudo todo dia para falar russo fluentemente.', tokens: ['Я', 'занимаюсь', 'каждый', 'день,', 'чтобы', 'свободно', 'говорить', 'по-русски.'], audio: 'Я занимаюсь каждый день, чтобы свободно говорить по-русски.' },
            { sentence: 'Это подарок для моего лучшего друга.', translation: 'Este é um presente para o meu melhor amigo.', tokens: ['Это', 'подарок', 'для', 'моего', 'лучшего', 'друга.'], audio: 'Это подарок для моего лучшего друга.' }
        ],
        [
            { speaker: 'Entrevistador', text: 'Зачем вы учите русский язык?', translation: 'Para que você estuda a língua russa?', audio: 'Зачем вы учите русский язык?' },
            { speaker: 'Estudante', text: 'Чтобы работать e жить в России.', translation: 'Para trabalhar e morar na Rússia.', audio: 'Чтобы работать e жить в России.' }
        ],
        [
            { q: 'Qual conector é usado para expressar o PROPÓSITO ("para estudar") quando o sujeito é o mesmo?', options: ['Потому что', 'Чтобы (+ Infinitivo)', 'Так как', 'Поэтому'], correctIndex: 1, explanation: 'Чтобы + Infinitivo expressa propósito.' },
            { q: 'Qual preposição significa "Destinado a / Para" e exige o Caso Genitivo?', options: ['В', 'На', 'Для', 'Из'], correctIndex: 2, explanation: 'Для + Genitivo = Para (destinado a).' },
            { q: 'Traduza: "Подарок для сестры"', options: ['Presente da irmã', 'Presente para a irmã', 'Presente com a irmã', 'Presente sem a irmã'], correctIndex: 1, explanation: 'Для сестры = para a irmã.' },
            { q: 'O que significa a expressão formal "Для того чтобы"?', options: ['Por causa de', 'A fim de que / Com a finalidade de', 'Já que', 'Por isso'], correctIndex: 1, explanation: 'Для того чтобы = A fim de que.' },
            { q: 'Traduza a palavra "Цель"', options: ['Caminho', 'Objetivo / Meta', 'Início', 'Fim'], correctIndex: 1, explanation: 'Цель = Objetivo / Meta.' }
        ]
    ),

    // Módulo 22
    criarModuloB1Handcrafted(
        'ru_b1_mod_22',
        'Módulo 22: Русский юмор и выражения (Humor Russo e Expressões)',
        'Conheça o humor russa e expressões idiomáticas clássicas do dia a dia.',
        'Domine expressões populares como Ни пуха ни пера!, Делать из мухи слона e Дойти до ручки.',
        'Ни пуха ни пера! — К чёрту! Не делай из мухи слона.',
        [
            { title: 'Desejo de Boa Sorte: Ни пуха ни пера!', rule: 'Expressão idiomática tradicional usada antes de exames ou desafios ("Boa sorte!"). A única resposta aceita por superstição é "К чёрту!" (Ao diabo!).', formula: 'Ни пуха ни пера! ➔ Ответ: К чёрту!', example: 'Завтра экзамен? Ни пуха ни пера! — К чёрту!', exampleTranslation: 'Exame amanhã? Boa sorte! — Valeu / Ao diabo!' },
            { title: 'Expressão: Делать из мухи слона', rule: 'Significa "Fazer tempestade em copo d\'água" (Literalmente: fazer de uma mosca um elefante).', formula: 'Делать из мухи слона', example: 'Не переживай, не делай из мухи слона!', exampleTranslation: 'Não se preocupe, não faça tempestade em copo d\'água!' },
            { title: 'Expressão: Дойти до ручки', rule: 'Significa "Chegar ao limite / ao fundo do poço / estar esgotado extrema e desesperadamente".', formula: 'Дойти до ручки', example: 'Он так много работал, что дошёл до ручки.', exampleTranslation: 'Ele trabalhou tanto que chegou ao limite exausto.' }
        ],
        [
            { type: 'vocab', word: 'Ни пуха ни пера!', romaji: 'Ni pukha ni pera!', translation: 'Boa sorte! (em exames/testes)', audio: 'Ни пуха ни пера!', dica: 'Expressão supersticiosa de boa sorte.' },
            { type: 'vocab', word: 'К чёрту!', romaji: 'K chortu!', translation: 'Ao diabo! (resposta ritual a boa sorte)', audio: 'К чёрту!', dica: 'Resposta obrigatória a Ни пуха ни пера!' },
            { type: 'vocab', word: 'Из мухи слона', romaji: 'Iz mukhi slona', translation: 'Tempestade em copo d\'água (de mosca a elefante)', audio: 'Из мухи слона', dica: 'Exagerar um problema pequeno.' },
            { type: 'vocab', word: 'Дойти до ручки', romaji: 'Doyti do ruchki', translation: 'Chegar ao limite / exaustão total', audio: 'Дойти до ручки', dica: 'Estar no fundo do poço.' },
            { type: 'vocab', word: 'Юмор', romaji: 'Yumor', translation: 'Humor', audio: 'Юмор', dica: 'Sensibilidade de espírito russa.' }
        ],
        [
            { sentence: 'Завтра у меня итоговый экзамен. — Ни пуха ни пера! — К чёрту!', translation: 'Amanhã tenho o exame final. — Boa sorte! — Valeu / Ao diabo!', tokens: ['Завтра', 'у', 'меня', 'итоговый', 'экзамен.', '—', 'Ни', 'пуха', 'ни', 'пера!', '—', 'К', 'чёрту!'], audio: 'Завтра у меня итоговый экзамен. — Ни пуха ни пера! — К чёрту!' },
            { sentence: 'Не стоит так переживать, ты делаешь из мухи слона.', translation: 'Não vale a pena se preocupar tanto, você está fazendo tempestade em copo d\'água.', tokens: ['Не', 'стоит', 'так', 'переживать,', 'ты', 'делаешь', 'из', 'мухи', 'слона.'], audio: 'Не стоит так переживать, ты делаешь из мухи слона.' }
        ],
        [
            { speaker: 'Amigo 1', text: 'Я ужасно волнуюсь перед тестом.', translation: 'Estou terrivelmente nervoso antes do teste.', audio: 'Я ужасно волнуюсь перед тестом.' },
            { speaker: 'Amigo 2', text: 'Успокойся! Ни пуха ни пера!', translation: 'Calma! Boa sorte!', audio: 'Успокойся! Ни пуха ни пера!' }
        ],
        [
            { q: 'Qual a única resposta ritual aceita ao desejar "Ни пуха ни пера!"?', options: ['Спасибо', 'К чёрту!', 'Пожалуйста', 'До свидания'], correctIndex: 1, explanation: 'A resposta supersticiosa aceita é "К чёрту!".' },
            { q: 'O que significa a expressão "Делать из мухи слона"?', options: ['Comprar um elefante', 'Fazer tempestade em copo d\'água (exagerar)', 'Ir ao zoológico', 'Cozinhar moscas'], correctIndex: 1, explanation: 'Exagerar um problema pequeno.' },
            { q: 'O que significa "Дойти до ручки"?', options: ['Comprar uma caneta', 'Chegar ao limite / exaustão total', 'Abrir uma porta', 'Escrever um livro'], correctIndex: 1, explanation: 'Chegar ao limite da exaustão.' },
            { q: 'Quando se usa o desejo "Ни пуха ни пера!"?', options: ['Ao ir dormir', 'Antes de um exame ou grande teste', 'No aniversário', 'Ao comer'], correctIndex: 1, explanation: 'Antes de testes e desafios.' },
            { q: 'Traduza: "К чёрту!"', options: ['Com prazer', 'Ao diabo! / Valeu! (resposta)', 'Muito obrigado', 'Até logo'], correctIndex: 1, explanation: 'К чёрту! = Ao diabo! / Valeu!' }
        ]
    ),

    // Módulo 23
    criarModuloB1Handcrafted(
        'ru_b1_mod_23',
        'Módulo 23: Revisão Geral B1',
        'Consolide os 6 Casos gramaticais e a matriz de Verbos de Movimento com Prefixo.',
        'Recapitule o Dativo, Instrumental, prefixos de movimento e conectores complexos.',
        'Поздравляем! Вы освоили все 6 падежей и глаголы движения.',
        [
            { title: 'Os 6 Casos Gramaticais do Russo', rule: 'Revisão: 1. Nominativo (sujeito), 2. Genitivo (posse/ausência), 3. Dativo (destinatário/idade), 4. Acusativo (objeto), 5. Instrumental (companhia/profissão), 6. Preposicional (localização).', formula: 'Именительный, Родительный, Дательный, Винительный, Творительный, Предложный', example: 'Друг ➔ Друга ➔ Другу ➔ Друга ➔ Другом ➔ О друге', exampleTranslation: 'Todas as 6 formas do substantivo "Друг"' },
            { title: 'Prefixos de Movimento Em Matriz', rule: 'Revisão: По- (partida), При- (chegada), У- (ausência), В- (entrar), Вы- (sair), Про- (passar), Пере- (atravessar).', formula: 'По- / При- / У- / В- / Вы- / Про- / Пере-', example: 'Приехать ➔ Уехать ➔ Войти ➔ Выйти ➔ Перейти', exampleTranslation: 'Chegar ➔ Sair longe ➔ Entrar ➔ Sair ➔ Atravessar' },
            { title: 'Sintaxe de Orações Subordinadas B1', rule: 'Revisão dos conectores: Что (discurso), Чтобы (propósito/pedido), Из-за (causa-), Благодаря (causa+), Потому что / Поэтому (lógica).', formula: 'Что / Чтобы / Из-за / Благодаря / Потому что / Поэтому', example: 'Я учился, чтобы сдать экзамен.', exampleTranslation: 'Estudei para passar no exame.' }
        ],
        [
            { type: 'vocab', word: 'Падеж', romaji: 'Padezh', translation: 'Caso gramatical', audio: 'Падеж', dica: 'Cada um dos 6 casos russos.' },
            { type: 'vocab', word: 'Дательный', romaji: 'Datelny', translation: 'Caso Dativo', audio: 'Дательный', dica: 'Caso do objeto indireto e idade.' },
            { type: 'vocab', word: 'Творительный', romaji: 'Tvoritelny', translation: 'Caso Instrumental', audio: 'Творительный', dica: 'Caso de companhia e profissões.' },
            { type: 'vocab', word: 'Движение', romaji: 'Dvizheniye', translation: 'Movimento', audio: 'Движение', dica: 'Verbos de movimento.' },
            { type: 'vocab', word: 'Автономия', romaji: 'Avtonomiya', translation: 'Autonomia', audio: 'Автономия', dica: 'Fluência intermediária conquistada no B1.' }
        ],
        [
            { sentence: 'Мы успешно повторили все 6 падежей русского языка.', translation: 'Nós revisamos com sucesso todos os 6 casos da língua russa.', tokens: ['Мы', 'успешно', 'повторили', 'все', '6', 'падежей', 'русского', 'языка.'], audio: 'Мы успешно повторили все 6 падежей русского языка.' },
            { sentence: 'Теперь я свободно использую глаголы движения с prefixами.', translation: 'Agora eu uso livremente os verbos de movimento com prefixos.', tokens: ['Теперь', 'я', 'свободно', 'использую', 'глаголы', 'движения', 'с', 'prefixами.'], audio: 'Теперь я свободно использую глаголы движения с prefixами.' }
        ],
        [
            { speaker: 'Professor', text: 'Вы готовы к итоговому экзамену B1?', translation: 'Vocês estão prontos para o exame final B1?', audio: 'Вы готовы к итоговому экзамену B1?' },
            { speaker: 'Estudante', text: 'Да, мы готовы к debate e apresentação!', translation: 'Sim, estamos prontos para o debate e apresentação!', audio: 'Да, мы готовы к debate e apresentação!' }
        ],
        [
            { q: 'Quantos casos gramaticais existem no sistema da língua russa?', options: ['4 casos', '5 casos', '6 casos', '7 casos'], correctIndex: 2, explanation: 'A língua russa possui 6 casos gramaticais.' },
            { q: 'Qual caso gramatical indica a profissão com o verbo Работать (ex: trabalhar como médico)?', options: ['Dativo', 'Acusativo', 'Instrumental', 'Preposicional'], correctIndex: 2, explanation: 'Работать exige Caso Instrumental.' },
            { q: 'Qual prefixo de movimento indica CHEGADA ao local (ex: приехать)?', options: ['По-', 'При-', 'У-', 'Вы-'], correctIndex: 1, explanation: 'При- indica chegada.' },
            { q: 'Qual conector expressa CAUSA POSITIVA (Graças a...)?', options: ['Из-за', 'Благодаря', 'Потому что', 'Чтобы'], correctIndex: 1, explanation: 'Благодаря + Dativo indica causa favorável.' },
            { q: 'Qual caso gramatical é usado para indicar o destinatário da ação (A quem...)?', options: ['Genitivo', 'Dativo', 'Instrumental', 'Acusativo'], correctIndex: 1, explanation: 'O Caso Dativo responde a Кому? (A quem?).' }
        ]
    ),

    // Módulo 24
    criarModuloB1Handcrafted(
        'ru_b1_mod_24',
        'Módulo 24: Desafio Final B1 (Debate Simulado e Apresentação de Projeto)',
        'Exame Integrado de Certificação do Nível B1 com 30 questões cobrindo os 6 Casos e Autonomia Gramatical.',
        'Responda às 30 questões do teste integrado de autonomia gramatical para conquistar seu certificado do Nível B1!',
        'Поздравляем с успешным прохождением экзамена уровня B1!',
        [
            { title: 'Certificação Interna Nível B1', rule: 'Ao concluir este teste com sucesso, você terá conquistado a Autonomia Gramatical Intermediária Superior (Nível B1).', formula: 'Autonomia Gramatical (Nível B1 Concluído)', example: 'Поздравляем с уровнем B1!', exampleTranslation: 'Parabéns pelo Nível B1!' },
            { title: 'Domínio dos 6 Casos e Verbos de Movimento', rule: 'Certificação em todos os 6 Casos Gramaticais, Verbos com Prefixo, Discurso Indireto e Sintaxe Complexa.', formula: 'Visão Geral do Nível B1 (Rumo ao Nível B2)', example: 'Вы отлично говорите по-русски!', exampleTranslation: 'Você fala russo muito bem!' },
            { title: 'Debate e Apresentação de Projetos', rule: 'Capacidade de expor ideias com Я считаю, que... e defender pontos de vista corporativos e sociais.', formula: 'Debate & Fluência Autônoma', example: 'Я считаю, что этот проект успешный.', exampleTranslation: 'Considero que este projeto é bem-sucedido.' }
        ],
        [
            { type: 'vocab', word: 'Экзамен', romaji: 'Ekzamen', translation: 'Exame / Teste de certificação', audio: 'Экзамен', dica: 'Desafio final B1.' },
            { type: 'vocab', word: 'Дискуссия', romaji: 'Diskussiya', translation: 'Debate / Discussão', audio: 'Дискуссия', dica: 'Troca de argumentos autônoma.' },
            { type: 'vocab', word: 'Проект', romaji: 'Proyekt', translation: 'Projeto', audio: 'Проект', dica: 'Apresentação corporativa ou acadêmica.' },
            { type: 'vocab', word: 'Успех', romaji: 'Uspekh', translation: 'Sucesso', audio: 'Успех', dica: 'Conquista do nível B1.' },
            { type: 'vocab', word: 'Поздравляем!', romaji: 'Pozdravlyayem!', translation: 'Parabéns!', audio: 'Поздравляем!', dica: 'Felicitação final pela fluência B1!' }
        ],
        [
            { sentence: 'Мы успешно защитили проект e получили уровень B1!', translation: 'Nós defendemos o projeto com sucesso e conquistamos o Nível B1!', tokens: ['Мы', 'успешно', 'защитили', 'проект', 'e', 'получили', 'уровень', 'B1!'], audio: 'Мы успешно защитили проект e получили уровень B1!' },
            { sentence: 'Теперь я свободно говорю и пишу по-русски!', translation: 'Agora eu falo e escrevo em russo com autonomia e fluência!', tokens: ['Теперь', 'я', 'свободно', 'говорю', 'и', 'пишу', 'по-русски!'], audio: 'Теперь я свободно говорю и пишу по-русски!' }
        ],
        [
            { speaker: 'Avaliador', text: 'Поздравляем! Вы отлично сдали итоговый тест B1.', translation: 'Parabéns! Você passou com excelência no teste final B1.', audio: 'Поздравляем! Вы отлично сдали итоговый тест B1.' },
            { speaker: 'Estudante', text: 'Большое спасибо! Я очень рад этому успеху.', translation: 'Muito obrigado! Estou muito feliz com este sucesso.', audio: 'Большое спасибо! Я очень рад этому успеху.' }
        ],
        [
            { q: 'Qual a terminação do Dativo Singular Masculino para "Друг"?', options: ['Друга', 'Другу', 'Другом', 'Друге'], correctIndex: 1, explanation: 'Masculino no Dativo ganha -у: Другу.' },
            { q: 'Qual caso gramatical é exigido pelo verbo "Звонить" (ligar)?', options: ['Acusativo', 'Dativo', 'Genitivo', 'Instrumental'], correctIndex: 1, explanation: 'Звонить exige Caso Dativo.' },
            { q: 'Como se diz "Eu preciso estudar" usando a estrutura impessoal?', options: ['Я хочу учиться', 'Мне нужно учиться', 'Я учусь', 'Мне học'], correctIndex: 1, explanation: 'Мне нужно + infinitivo.' },
            { q: 'Qual preposição indica COMPANHIA com o Caso Instrumental (com o amigo)?', options: ['В', 'На', 'С', 'Из'], correctIndex: 2, explanation: 'Companhia usa a preposição С.' },
            { q: 'Forma no Instrumental de "Друг" em "com o amigo" (С ___)?', options: ['Друга', 'Другу', 'Другом', 'Друге'], correctIndex: 2, explanation: 'С другом.' },
            { q: 'Qual caso gramatical indica a profissão após o verbo "Работать"?', options: ['Nominativo', 'Acusativo', 'Instrumental', 'Genitivo'], correctIndex: 2, explanation: 'Работать exige Caso Instrumental.' },
            { q: 'Qual verbo usa-se para um movimento A PÉ acontecendo AGORA em direção a um local?', options: ['Ходить', 'Идти', 'Ехать', 'Ездить'], correctIndex: 1, explanation: 'Идти = ir a pé agora.' },
            { q: 'Qual verbo usa-se para HÁBITOS diários de caminhar?', options: ['Идти', 'Ходить', 'Ехать', 'Гулять'], correctIndex: 1, explanation: 'Ходить = caminhar habitualmente.' },
            { q: 'Qual verbo usa-se para viajar DE TRANSPORTE agora em uma direção?', options: ['Идти', 'Ехать', 'Ходить', 'Ездить'], correctIndex: 1, explanation: 'Ехать = ir de veículo.' },
            { q: 'Qual prefixo de movimento indica CHEGADA ao destino (ex: приехать)?', options: ['По-', 'При-', 'У-', 'Вы-'], correctIndex: 1, explanation: 'При- indica chegada.' },
            { q: 'Qual prefixo de movimento indica SAÍDA DEFINITIVA ou ausência (ex: уехать)?', options: ['При-', 'По-', 'У-', 'В-'], correctIndex: 2, explanation: 'У- indica ausência.' },
            { q: 'Qual prefixo de movimento indica ENTRAR em um recinto (ex: войти)?', options: ['Вы-', 'В-', 'Пере-', 'Про-'], correctIndex: 1, explanation: 'В- indica entrada.' },
            { q: 'Qual prefixo de movimento indica ATRAVESSAR uma rua (ex: перейти)?', options: ['Пере-', 'Про-', 'В-', 'У-'], correctIndex: 0, explanation: 'Пере- indica travessia.' },
            { q: 'Qual verbo indica que um problema foi EFETIVAMENTE RESOLVIDO com sucesso?', options: ['Решать', 'Решить', 'Думать', 'Писать'], correctIndex: 1, explanation: 'Решить (СВ) foca na resolução concluída.' },
            { q: 'Qual aspecto verbal usa-se para CONVITES CORTESES no Imperativo (ex: Sente-se!)?', options: ['Imperfeito (НСВ)', 'Perfeito (СВ)', 'Futuro', 'Passado'], correctIndex: 0, explanation: 'Convites corteses usam Imperfeito (Садитесь!).' },
            { q: 'Qual é o comparativo sintético de "Быстрый" (rápido)?', options: ['Быстро', 'Быстрее', 'Самый быстрый', 'Более быстрый'], correctIndex: 1, explanation: 'Быстрый ➔ Быстрее.' },
            { q: 'Qual é o comparativo irregular de "Хороший" (bom)?', options: ['Хорошее', 'Лучше', 'Быстрее', 'Дороже'], correctIndex: 1, explanation: 'Хороший ➔ Лучше.' },
            { q: 'Qual partícula forma o Modo Condicional (hipótese) em russo?', options: ['Ли', 'Бы', 'Же', 'Ведь'], correctIndex: 1, explanation: 'A partícula Бы forma o condicional.' },
            { q: 'Qual conjunção usa-se para relatar uma AFIRMAÇÃO em discurso indireto ("Ele disse que...")?', options: ['Чтобы', 'Что', 'Как', 'Если'], correctIndex: 1, explanation: 'Discurso indireto afirmativo usa Что.' },
            { q: 'Como se diz "Em anexo" no protocolo corporativo de e-mails?', options: ['В письме', 'В приложении', 'На столе', 'В связи'], correctIndex: 1, explanation: 'В приложении = Em anexo.' },
            { q: 'O que significa a palavra "Резюме"?', options: ['Resumo de livro', 'Currículo profissional (CV)', 'Entrevista', 'Contrato'], correctIndex: 1, explanation: 'Резюме = Currículo profissional.' },
            { q: 'Qual preposição e caso indicam CAUSA NEGATIVA (ex: por causa do trânsito)?', options: ['Благодаря + Dativo', 'Из-за + Genitivo', 'Во время + Acusativo', 'Для + Instrumental'], correctIndex: 1, explanation: 'Из-за + Genitivo = Por causa de (motivo negativo).' },
            { q: 'Qual preposição e caso indicam CAUSA POSITIVA (ex: graças à ajuda)?', options: ['Из-за + Genitivo', 'Благодаря + Dativo', 'Без + Genitivo', 'Под + Instrumental'], correctIndex: 1, explanation: 'Благодаря + Dativo = Graças a.' },
            { q: 'Quem é considerado "o sol da poesia russa" (Солнце русской поэзии)?', options: ['Tolstoi', 'Dostoiévski', 'Pushkin (Александр Пушкин)', 'Tchekhov'], correctIndex: 2, explanation: 'Aleksandr Pushkin.' },
            { q: 'O que significa a sigla "СМИ" no russo?', options: ['Sistema Médico', 'Meios de Comunicação de Massa / Imprensa', 'Sociedade Militar', 'Escola de Idiomas'], correctIndex: 1, explanation: 'СМИ = Imprensa / Mídia.' },
            { q: 'Qual estrutura é usada para expressar opinião fundamentada ("Eu considero que...")?', options: ['Я знаю, что', 'Я считаю, что', 'Я вижу, что', 'Я слышу, что'], correctIndex: 1, explanation: 'Я считаю, что = Eu considero que...' },
            { q: 'Qual conector introduz a CAUSA para responder a "Почему?" (Porque)?', options: ['Поэтому', 'Потому что', 'Так как', 'Чтобы'], correctIndex: 1, explanation: 'Потому что = Porque.' },
            { q: 'Qual conector expressa PROPÓSITO ("para estudar") quando o sujeito é o mesmo?', options: ['Потому что', 'Чтобы (+ Infinitivo)', 'Так как', 'Поэтому'], correctIndex: 1, explanation: 'Чтобы + Infinitivo.' },
            { q: 'Qual a resposta supersticiosa única aceita ao desejar "Ни пуха ни пера!"?', options: ['Спасибо', 'К чёрту!', 'Пожалуйста', 'До свидания'], correctIndex: 1, explanation: 'A resposta supersticiosa é "К чёрту!".' },
            { q: 'Quantos casos gramaticais existem na língua russa?', options: ['4 casos', '5 casos', '6 casos', '7 casos'], correctIndex: 2, explanation: 'A língua russa possui 6 casos gramaticais.' }
        ]
    )
);

if (typeof window !== "undefined") {
    window.CURSO_RUSSO_B1_DADOS = CURSO_RUSSO_B1_DADOS;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { CURSO_RUSSO_B1_DADOS };
}
