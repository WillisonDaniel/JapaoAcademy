const CURSO_RUSSO_B2_DADOS = [];

const criarModuloB2Handcrafted = (id, title, desc, missionDesc, audioGuide, grammarPills, dropsList, sentencesList, dialogueList, quizList) => {
    const normalizedQuiz = quizList.map(item => ({
        question: item.question || item.q,
        q: item.q || item.question,
        options: item.options,
        correctIndex: item.correctIndex,
        explanation: item.explanation
    }));

    const pillDrops = (Array.isArray(grammarPills) ? grammarPills : []).map(pill => ({
        type: 'grammar_pill',
        title: pill.title || 'Pílula Gramatical B2',
        rule: pill.rule || pill.explanation || '',
        formula: pill.formula || '',
        example: pill.example ? (pill.exampleTranslation ? `${pill.example} — "${pill.exampleTranslation}"` : pill.example) : ''
    }));

    const enrichedVocabDrops = dropsList.map(item => {
        if (!item || typeof item !== 'object') return item;
        let dicaText = item.dica || item.tip || item.example || item.timeContext || '';
        if (!dicaText) {
            dicaText = `Termo avançado B2: "${item.word || ''}" (${item.romaji || ''})`;
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
        level: 'B2',
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
        stage3_practice: normalizedQuiz,
        stage5_quiz: normalizedQuiz,
        quiz: normalizedQuiz
    };
};

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_01",
        "Módulo 1: Причастие I (Particípios Ativos no Presente e Passado)",
        "Aprenda os particípios ativos no presente (-ущ-/-ющ-, -ащ-/-ящ-) e no passado (-вш-/-ш-).",
        "Identifique e empregue particípios ativos para qualificar substantivos em ação.",
        "Студент, читающий книгу, говорит по-русски.",
        [
          {
                    "title": "Particípio Ativo Presente (-ущ-/-ющ- & -ащ-/-ящ-)",
                    "rule": "Derivado do tema do presente. Verbos de 1ª conjugação usam -ущ-/-ющ- (читающий, работающий), e de 2ª conjugação usam -ащ-/-ящ- (говорящий, смотрящий).",
                    "formula": "[Verbo Presente 3ª Pl] - т + щий / щая / щее / щие",
                    "example": "Студент, читающий книгу ➔ O estudante que lê o livro",
                    "exampleTranslation": "O estudante lendo o livro"
          },
          {
                    "title": "Particípio Ativo Passado (-вш-/-ш-)",
                    "rule": "Forma-se a partir do tema do passado: o sufixo -вш- é frequente após tema vocálico (читавший, живший), enquanto -ш- aparece após certos temas consonantais; formas irregulares, como пришедший, devem ser aprendidas separadamente.",
                    "formula": "[Verbo Passado Masc] + вший / вшая / вшее / вшие",
                    "example": "Человек, живший в Москве ➔ A pessoa que viveu em Moscou",
                    "exampleTranslation": "A pessoa que morava em Moscou"
          },
          {
                    "title": "Concordância e Declinação dos Particípios",
                    "rule": "Os particípios funcionam como adjetivos e declinam nos 6 casos gramaticais concordando com o substantivo que modificam.",
                    "formula": "Concordância em Gênero + Número + Caso",
                    "example": "Я знаю студента, читающего книгу. (Caso Acusativo Animado)",
                    "exampleTranslation": "Conheço o estudante que está lendo o livro."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Читающий",
                    "romaji": "Chitayushchiy",
                    "translation": "Que lê / Lendo (Particípio Ativo Presente)",
                    "audio": "Читающий",
                    "dica": "Particípio ativo presente de Читать."
          },
          {
                    "type": "vocab",
                    "word": "Говорящий",
                    "romaji": "Govoryashchiy",
                    "translation": "Que fala / Falando",
                    "audio": "Говорящий",
                    "dica": "Particípio ativo presente de Говорить."
          },
          {
                    "type": "vocab",
                    "word": "Живший",
                    "romaji": "Zhivshiy",
                    "translation": "Que viveu / Morava",
                    "audio": "Живший",
                    "dica": "Particípio ativo passado de Жить."
          },
          {
                    "type": "vocab",
                    "word": "Пришедший",
                    "romaji": "Prishedshiy",
                    "translation": "Que chegou / Veio",
                    "audio": "Пришедший",
                    "dica": "Particípio ativo passado de Прийти."
          },
          {
                    "type": "vocab",
                    "word": "Работающий",
                    "romaji": "Rabotayushchiy",
                    "translation": "Que trabalha / Trabalhando",
                    "audio": "Работающий",
                    "dica": "Particípio ativo presente de Работать."
          }
],
        [
          {
                    "sentence": "Студент, читающий книгу, хорошо говорит по-русски.",
                    "translation": "O estudante que está lendo o livro fala russo bem.",
                    "tokens": [
                              "Студент,",
                              "читающий",
                              "книгу,",
                              "хорошо",
                              "говорит",
                              "по-русски."
                    ],
                    "audio": "Студент, читающий книгу, хорошо говорит по-русски."
          },
          {
                    "sentence": "Мы встретили человека, жившего в Санкт-Петербурге.",
                    "translation": "Encontramos a pessoa que morou em São Petersburgo.",
                    "tokens": [
                              "Мы",
                              "встретили",
                              "человека,",
                              "жившего",
                              "в",
                              "Санкт-Петербурге."
                    ],
                    "audio": "Мы встретили человека, жившего в Санкт-Петербурге."
          }
],
        [
          {
                    "speaker": "Maxim",
                    "text": "Кто этот человек, выступающий на сцене?",
                    "translation": "Quem é essa pessoa discursando no palco?",
                    "audio": "Кто этот человек, выступающий на сцене?"
          },
          {
                    "speaker": "Elena",
                    "text": "Это профессор, приехавший из Москвы.",
                    "translation": "É o professor que veio de Moscou.",
                    "audio": "Это профессор, приехавший из Москвы."
          }
],
        [
          {
                    "q": "Qual o sufixo do particípio ativo presente para verbos da 1ª conjugação (ex: Читать)?",
                    "options": [
                              "-ущ- / -ющ-",
                              "-ащ- / -ящ-",
                              "-вш-",
                              "-ем-"
                    ],
                    "correctIndex": 0,
                    "explanation": "Verbos da 1ª conjugação usam -ущ-/-ющ-: читающий."
          },
          {
                    "q": "Qual a forma no particípio ativo passado de \"Жить\"?",
                    "options": [
                              "Живущий",
                              "Живший",
                              "Жимость",
                              "Живаем"
                    ],
                    "correctIndex": 1,
                    "explanation": "O passado de Жить forma живший (-вш-)."
          },
          {
                    "q": "Traduza: \"Студент, читающий книгу...\"",
                    "options": [
                              "O estudante que leu o livro",
                              "O estudante lendo o livro",
                              "O estudante lerá o livro",
                              "O livro lido pelo estudante"
                    ],
                    "correctIndex": 1,
                    "explanation": "Читающий indica ação ativa no presente."
          },
          {
                    "q": "Como declina \"Читающий\" no Acusativo Masculino Animado (молодой человек)?",
                    "options": [
                              "Читающий",
                              "Читающего",
                              "Читающему",
                              "Читающим"
                    ],
                    "correctIndex": 1,
                    "explanation": "Animação no Acusativo igual ao Genitivo (-его): читающего."
          },
          {
                    "q": "Particípio ativo de \"Говорить\" (2ª conjugação) no presente masculino:",
                    "options": [
                              "Говорящий",
                              "Говорущий",
                              "Говоривший",
                              "Говоримый"
                    ],
                    "correctIndex": 0,
                    "explanation": "2ª conjugação usa -ащ-/-ящ-: говорящий."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_02",
        "Módulo 2: Причастие II (Particípios Passivos no Presente e Passado)",
        "Formação dos particípios passivos no presente (-ем-/-им-) e passado (-нн-/-т-).",
        "Descreva objetos sofrendo ações usando particípios passivos longos.",
        "Книга, прочитанная студентом, очень интересная.",
        [
          {
                    "title": "Particípio Passivo Presente (-ем-/-им-)",
                    "rule": "Derivado da 1ª pessoa do plural do presente + adjetivo: читаем ➔ читаемый, любим ➔ любимый. Indica ação contínua sofrida pelo objeto.",
                    "formula": "[1ª pessoa Plural Presente] + ый / ая / ое / ые",
                    "example": "Любимый город ➔ Cidade amada",
                    "exampleTranslation": "Cidade favorita/amada"
          },
          {
                    "title": "Particípio Passivo Passado (-нн- e -т-)",
                    "rule": "Formado do tema do infinitivo/passado de verbos perfeitos. Verbos em -ать/-ять ganham -нный (прочитанный), em -ить ganham -енный (решённый), e radicais monosilábicos ganham -тый (открытый, запертый).",
                    "formula": "[Infinitivo SV] ➔ -нный / -енный / -тый",
                    "example": "Прочитанная книга / Открытая дверь",
                    "exampleTranslation": "Livro lido / Porta aberta"
          },
          {
                    "title": "Agente da Ação no Caso Instrumental",
                    "rule": "O agente que realiza a ação passiva fica obrigatoriamente no Caso Instrumental.",
                    "formula": "[Objeto] + [Particípio Passivo] + [Agente no Instrumental]",
                    "example": "Статья, написанная журналистом. (написанная + журналистом)",
                    "exampleTranslation": "Artigo escrito pelo jornalista."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Прочитанный",
                    "romaji": "Prochitannyy",
                    "translation": "Lido (Particípio Passivo Passado)",
                    "audio": "Прочитанный",
                    "dica": "De Прочитать."
          },
          {
                    "type": "vocab",
                    "word": "Любимый",
                    "romaji": "Lyubimyy",
                    "translation": "Amado / Favorito",
                    "audio": "Любимый",
                    "dica": "Particípio passivo presente de Любить."
          },
          {
                    "type": "vocab",
                    "word": "Открытый",
                    "romaji": "Otkrytyy",
                    "translation": "Aberto",
                    "audio": "Открытый",
                    "dica": "Particípio passivo passado de Открыть (-тый)."
          },
          {
                    "type": "vocab",
                    "word": "Решённый",
                    "romaji": "Reshyonnyy",
                    "translation": "Resolvido / Decidido",
                    "audio": "Решённый",
                    "dica": "De Решить."
          },
          {
                    "type": "vocab",
                    "word": "Написанный",
                    "romaji": "Napisannyy",
                    "translation": "Escrito",
                    "audio": "Написанный",
                    "dica": "De Написать."
          }
],
        [
          {
                    "sentence": "Книга, прочитанная мной, была очень увлекательной.",
                    "translation": "O livro lido por mim foi muito envolvente.",
                    "tokens": [
                              "Книга,",
                              "прочитанная",
                              "мной,",
                              "была",
                              "очень",
                              "увлекательной."
                    ],
                    "audio": "Книга, прочитанная мной, была очень увлекательной."
          },
          {
                    "sentence": "Мы обсуждаем вопрос, решаемый нашей командой.",
                    "translation": "Estamos discutindo a questão que está sendo resolvida por nossa equipe.",
                    "tokens": [
                              "Мы",
                              "обсуждаем",
                              "вопрос,",
                              "решаемый",
                              "нашей",
                              "командой."
                    ],
                    "audio": "Мы обсуждаем вопрос, решаемый нашей командой."
          }
],
        [
          {
                    "speaker": "Boris",
                    "text": "Ты видел письмо, полученное сегодня утром?",
                    "translation": "Você viu a carta recebida hoje de manhã?",
                    "audio": "Ты видел письмо, полученное сегодня утром?"
          },
          {
                    "speaker": "Olga",
                    "text": "Да, оно написано директором компании.",
                    "translation": "Sim, ela foi escrita pelo diretor da empresa.",
                    "audio": "Да, оно написано директором компании."
          }
],
        [
          {
                    "q": "Particípio passivo passado de \"Прочитать\" (feminino singular):",
                    "options": [
                              "Прочитанная",
                              "Прочитанный",
                              "Прочитающее",
                              "Прочитаемая"
                    ],
                    "correctIndex": 0,
                    "explanation": "Книга (Feminino): прочитанная."
          },
          {
                    "q": "Em qual caso fica o agente de uma frase passiva (\"написанная [журналист]\")?",
                    "options": [
                              "Genitivo",
                              "Dativo",
                              "Instrumental",
                              "Acusativo"
                    ],
                    "correctIndex": 2,
                    "explanation": "O agente fica no Instrumental: журналистом."
          },
          {
                    "q": "Forma do particípio passivo passado de \"Открыть\":",
                    "options": [
                              "Открытый",
                              "Открынный",
                              "Открываемый",
                              "Открывший"
                    ],
                    "correctIndex": 0,
                    "explanation": "Verbos em -ыть/ monosilábicos usam o sufixo -т-: открытый."
          },
          {
                    "q": "Particípio passivo presente de \"Любить\":",
                    "options": [
                              "Любящий",
                              "Любимый",
                              "Любленный",
                              "Любивший"
                    ],
                    "correctIndex": 1,
                    "explanation": "Любим + ый ➔ любимый (amado/favorito)."
          },
          {
                    "q": "Traduza: \"Задача, решённая студентом.\"",
                    "options": [
                              "A tarefa que o estudante resolverá",
                              "A tarefa resolvida pelo estudante",
                              "O estudante resolvendo a tarefa",
                              "A tarefa fácil do estudante"
                    ],
                    "correctIndex": 1,
                    "explanation": "Решённая = resolvida (passado passivo)."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_03",
        "Módulo 3: Краткие причастия (Particípios Curtos na Voz Passiva)",
        "Uso dos particípios passivos curtos (-ен, -ена, -ено, -ены / -т, -та, -то, -ты) como predicado.",
        "Formule orações passivas concisas em contextos formais e notícias.",
        "Дом построен, а работа завершена.",
        [
          {
                    "title": "Formação dos Particípios Curtos Passivos",
                    "rule": "As formas curtas são derivadas dos particípios passivos longos retirando a terminação adjetival. Masculino: -ен/-н/-т, Feminino: -ена/-на/-та, Neutro: -ено/-но/-то, Plural: -ены/-ны/-ты.",
                    "formula": "Написанный ➔ Написан (M), Написана (F), Написано (N), Написаны (Pl)",
                    "example": "Дом построен. / Дверь открыта.",
                    "exampleTranslation": "A casa está construída. / A porta está aberta."
          },
          {
                    "title": "Concordância Predicativa no Sujeito",
                    "rule": "O particípio curto funciona como predicado nominal da oração e concorda estritamente com o sujeito em gênero e número.",
                    "formula": "[Sujeito] + [Particípio Curto]",
                    "example": "Работа (F) завершена. / Письма (Pl) отправлены.",
                    "exampleTranslation": "O trabalho foi concluído. / As cartas foram enviadas."
          },
          {
                    "title": "Expressando Tempo com o Verbo Быть",
                    "rule": "No presente, Быть é omitido. No passado usa-se Был/Была/Было/Были e no futuro Будет/Будут.",
                    "formula": "Presente: [Particípio Curto] | Passado: Был + [Particípio] | Futuro: Будет + [Particípio]",
                    "example": "Проект был завершён вчера.",
                    "exampleTranslation": "O projeto foi concluído ontem."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Построен",
                    "romaji": "Postroyen",
                    "translation": "Construído (Forma curta M)",
                    "audio": "Построен",
                    "dica": "Forma curta masc de Построенный."
          },
          {
                    "type": "vocab",
                    "word": "Завершена",
                    "romaji": "Zavershena",
                    "translation": "Concluída (Forma curta F)",
                    "audio": "Завершена",
                    "dica": "Forma curta fem de Завершённый."
          },
          {
                    "type": "vocab",
                    "word": "Открыто",
                    "romaji": "Otkryto",
                    "translation": "Aberto (Forma curta N)",
                    "audio": "Открыто",
                    "dica": "Forma curta neutra de Открытый."
          },
          {
                    "type": "vocab",
                    "word": "Отправлены",
                    "romaji": "Otpravleny",
                    "translation": "Enviados (Forma curta Pl)",
                    "audio": "Отправлены",
                    "dica": "Forma curta plural de Отправленный."
          },
          {
                    "type": "vocab",
                    "word": "Принят",
                    "romaji": "Prinyat",
                    "translation": "Aceito / Adotado",
                    "audio": "Принят",
                    "dica": "Forma curta masc de Принятый."
          }
],
        [
          {
                    "sentence": "Новый мост уже построен и открыт для движения.",
                    "translation": "A nova ponte já está construída e aberta para o tráfego.",
                    "tokens": [
                              "Новый",
                              "мост",
                              "уже",
                              "построен",
                              "и",
                              "открыт",
                              "для",
                              "движения."
                    ],
                    "audio": "Новый мост уже построен и открыт для движения."
          },
          {
                    "sentence": "Все документы были успешно отправлены вчера.",
                    "translation": "Todos os documentos foram enviados com sucesso ontem.",
                    "tokens": [
                              "Все",
                              "документы",
                              "были",
                              "успешно",
                              "отправлены",
                              "вчера."
                    ],
                    "audio": "Все документы были успешно отправлены вчера."
          }
],
        [
          {
                    "speaker": "Dmitry",
                    "text": "Закон уже принят парламентом?",
                    "translation": "O projeto de lei já foi aprovado pelo parlamento?",
                    "audio": "Закон уже принят парламентом?"
          },
          {
                    "speaker": "Maria",
                    "text": "Да, он был принят единогласно.",
                    "translation": "Sim, ele foi aprovado unanimemente.",
                    "audio": "Да, он был принят единогласно."
          }
],
        [
          {
                    "q": "Forma curta feminina singular de \"Построенный\" (construído):",
                    "options": [
                              "Построен",
                              "Построена",
                              "Построено",
                              "Построены"
                    ],
                    "correctIndex": 1,
                    "explanation": "Feminino singular em -а: построена."
          },
          {
                    "q": "Traduza: \"Дом построен.\"",
                    "options": [
                              "A casa será construída",
                              "A casa foi/está construída",
                              "Eles constroem a casa",
                              "Construindo a casa"
                    ],
                    "correctIndex": 1,
                    "explanation": "Forma curta predicativa no presente."
          },
          {
                    "q": "Forma curta plural de \"Отправленный\" (enviado):",
                    "options": [
                              "Отправлен",
                              "Отправлена",
                              "Отправлено",
                              "Отправлены"
                    ],
                    "correctIndex": 3,
                    "explanation": "Plural da forma curta termina em -ы/-и: отправлены."
          },
          {
                    "q": "Como expressar \"O projeto foi concluído ontem\" em russo?",
                    "options": [
                              "Проект завершён вчера",
                              "Проект был завершён вчера",
                              "Проект будет завершён вчера",
                              "Проект завершивший вчера"
                    ],
                    "correctIndex": 1,
                    "explanation": "Passado passivo exige o verbo auxiliar Был."
          },
          {
                    "q": "Forma curta neutra singular de \"Открытый\" (aberto):",
                    "options": [
                              "Открыт",
                              "Открыта",
                              "Открыто",
                              "Открыты"
                    ],
                    "correctIndex": 2,
                    "explanation": "Neutro singular termina em -о: открыто."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_04",
        "Módulo 4: Деепричастие I (Gerúndios no Imperfeito - Ações Simultâneas)",
        "Formação e uso dos gerúndios imperfeitos (-а/-я) para ações simultâneas ao verbo principal.",
        "Enriqueça suas frases expressando duas ações que ocorrem ao mesmo tempo.",
        "Читая книгу, он пил горячий чай.",
        [
          {
                    "title": "Formação do Gerúndio Imperfeito (-а/-я)",
                    "rule": "Formado do tema do presente retirando a terminação da 3ª pessoa do plural e adicionando -я (ou -а após consoantes chiantes ж, ч, ш, щ).",
                    "formula": "[3ª pessoa plural] sem -ут/-ют/-ат/-ят + -я/-а",
                    "example": "Читают ➔ Читая / Сидят ➔ Сидя / Слышат ➔ Слыша",
                    "exampleTranslation": "Lendo / Sentando / Ouvindo"
          },
          {
                    "title": "Identidade de Sujeito Obrigatória",
                    "rule": "O gerúndio e o verbo principal DEVEM ser realizados rigorosamente pela MESMA pessoa/sujeito.",
                    "formula": "[Sujeito] + [Gerúndio] + [Verbo Principal]",
                    "example": "Слушая музыку, я отдыхаю.",
                    "exampleTranslation": "Escutando música, eu relaxo."
          },
          {
                    "title": "Isolamento por Vírgulas (Деепричастный оборот)",
                    "rule": "Toda oração reduzida de gerúndio é isolada por vírgula na escrita em russo, esteja no início, meio ou fim da frase.",
                    "formula": "..., [Gerúndio + Complementos], ...",
                    "example": "Он шёл по улице, напевая песню.",
                    "exampleTranslation": "Ele andava pela rua, cantarolando uma canção."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Читая",
                    "romaji": "Chitaya",
                    "translation": "Lendo (Gerúndio Imperfeito)",
                    "audio": "Читая",
                    "dica": "Gerúndio de Читать."
          },
          {
                    "type": "vocab",
                    "word": "Говоря",
                    "romaji": "Govorya",
                    "translation": "Falando",
                    "audio": "Говоря",
                    "dica": "Gerúndio de Говорить."
          },
          {
                    "type": "vocab",
                    "word": "Сидя",
                    "romaji": "Sidya",
                    "translation": "Sentando / Sentado",
                    "audio": "Сидя",
                    "dica": "Gerúndio de Сидеть."
          },
          {
                    "type": "vocab",
                    "word": "Слушая",
                    "romaji": "Slushaya",
                    "translation": "Escutando",
                    "audio": "Слушая",
                    "dica": "Gerúndio de Слушать."
          },
          {
                    "type": "vocab",
                    "word": "Улыбаясь",
                    "romaji": "Ulybayas",
                    "translation": "Sorrindo (Reflexivo)",
                    "audio": "Улыбаясь",
                    "dica": "Gerúndio de Улыбаться (-сь)."
          }
],
        [
          {
                    "sentence": "Читая книгу, он пил горячий чай.",
                    "translation": "Lendo o livro, ele bebia chá quente.",
                    "tokens": [
                              "Читая",
                              "книгу,",
                              "он",
                              "пил",
                              "горячий",
                              "чай."
                    ],
                    "audio": "Читая книгу, он пил горячий чай."
          },
          {
                    "sentence": "Она отвечает на вопросы, улыбаясь собеседнику.",
                    "translation": "Ela responde às perguntas, sorrindo para o interlocutor.",
                    "tokens": [
                              "Она",
                              "отвечает",
                              "на",
                              "вопросы,",
                              "улыбаясь",
                              "собеседнику."
                    ],
                    "audio": "Она отвечает на вопросы, улыбаясь собеседнику."
          }
],
        [
          {
                    "speaker": "Pavel",
                    "text": "Как ты обычно учишь русские слова?",
                    "translation": "Como você costuma aprender palavras russas?",
                    "audio": "Как ты обычно учишь русские слова?"
          },
          {
                    "speaker": "Svetlana",
                    "text": "Я слушаю подкасты, выписывая новые выражения.",
                    "translation": "Eu escuto podcasts, anotando novas expressões.",
                    "audio": "Я слушаю подкасты, выписывая новые выражения."
          }
],
        [
          {
                    "q": "Gerúndio imperfeito de \"Читать\":",
                    "options": [
                              "Читая",
                              "Прочитав",
                              "Читающий",
                              "Читаемый"
                    ],
                    "correctIndex": 0,
                    "explanation": "Formado com sufixo -я: читая (lendo)."
          },
          {
                    "q": "Qual regra é OBRIGATÓRIA ao usar gerúndio em russo?",
                    "options": [
                              "O verbo deve estar no futuro",
                              "O gerúndio e o verbo principal devem ter o mesmo sujeito",
                              "Não usar vírgula",
                              "Usar apenas com verbos de movimento"
                    ],
                    "correctIndex": 1,
                    "explanation": "Ambas as ações devem pertencer ao mesmo sujeito."
          },
          {
                    "q": "Gerúndio do verbo reflexivo \"Улыбаться\" (sorrir):",
                    "options": [
                              "Улыбая",
                              "Улыбаясь",
                              "Улыбавшись",
                              "Улыбающийся"
                    ],
                    "correctIndex": 1,
                    "explanation": "Verbos reflexivos adicionam -сь após vogal: улыбаясь."
          },
          {
                    "q": "Traduza: \"Слушая музыку, он работал.\"",
                    "options": [
                              "Ele ouvia música depois de trabalhar",
                              "Escutando música, ele trabalhava",
                              "Ele parou de ouvir música para trabalhar",
                              "Música para trabalhar"
                    ],
                    "correctIndex": 1,
                    "explanation": "Indica duas ações simultâneas."
          },
          {
                    "q": "Sufixo usado para formar o gerúndio imperfeito após consoantes chiantes (ж, ч, ш, щ):",
                    "options": [
                              "-я",
                              "-а",
                              "-в",
                              "-ем"
                    ],
                    "correctIndex": 1,
                    "explanation": "Após consoantes chiantes, aparece -а, como em слыша; outras formas, como сидя, seguem seu próprio tema."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_05",
        "Módulo 5: Деепричастие II (Gerúndios no Perfeito - Ações Anteriores)",
        "Formação e uso dos gerúndios perfeitos (-в/-вши/-ши) para ações já concluídas.",
        "Estruture narrativas sequenciais refinadas relacionando causa e antecedência.",
        "Прочитав письмо, он сразу ушёл.",
        [
          {
                    "title": "Formação do Gerúndio Perfeito (-в/-вши)",
                    "rule": "Formado do tema do passado de verbos de aspecto perfeito retirando a terminação -л e adicionando -в (ou -вши em contexto poético/coloquial e verbos reflexivos em -вшись).",
                    "formula": "[Tema do Passado Perfectivo] + в / вши / вшись",
                    "example": "Прочитал ➔ Прочитав / Вернулся ➔ Вернувшись",
                    "exampleTranslation": "Tendo lido / Tendo voltado"
          },
          {
                    "title": "Formas Irregulares em -я",
                    "rule": "Alguns verbos perfeitos, especialmente verbos de movimento em -ти, formam o gerúndio com -я e apresentam alteração de tema; essas formas devem ser aprendidas individualmente.",
                    "formula": "Принести ➔ принеся / Прийти ➔ придя / Войти ➔ войдя",
                    "example": "Принеся документы, он вошёл в кабинет.",
                    "exampleTranslation": "Tendo trazido os documentos, ele entrou no escritório."
          },
          {
                    "title": "Relação de Causa e Antecedência Temporal",
                    "rule": "O gerúndio perfeito expressa uma ação totalmente CONCLUÍDA ANTES do evento principal, atuando muitas vezes como causa da ação principal.",
                    "formula": "[Gerúndio Perfeito (Ação 1 Aconteceu Primeiro)] ➔ [Verbo Principal (Ação 2)]",
                    "example": "Узнав новости, она позвонила маме.",
                    "exampleTranslation": "Ao saber das notícias (tendo sabido), ela ligou para a mãe."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Прочитав",
                    "romaji": "Prochitav",
                    "translation": "Tendo lido / Após ler",
                    "audio": "Прочитав",
                    "dica": "Gerúndio perfeito de Прочитать."
          },
          {
                    "type": "vocab",
                    "word": "Узнав",
                    "romaji": "Uznav",
                    "translation": "Tendo sabido / Ao descobrir",
                    "audio": "Узнав",
                    "dica": "Gerúndio perfeito de Узнать."
          },
          {
                    "type": "vocab",
                    "word": "Вернувшись",
                    "romaji": "Vernuvshis",
                    "translation": "Tendo voltado / Ao retornar",
                    "audio": "Вернувшись",
                    "dica": "Gerúndio perfeito reflexivo de Вернуться."
          },
          {
                    "type": "vocab",
                    "word": "Закончив",
                    "romaji": "Zakonchiv",
                    "translation": "Tendo terminado / Concluindo",
                    "audio": "Закончив",
                    "dica": "Gerúndio perfeito de Закончить."
          },
          {
                    "type": "vocab",
                    "word": "Посмотрев",
                    "romaji": "Posmotrev",
                    "translation": "Tendo assistido / Tendo olhado",
                    "audio": "Посмотрев",
                    "dica": "Gerúndio perfeito de Посмотреть."
          }
],
        [
          {
                    "sentence": "Прочитав письмо, он сразу ушёл из офиса.",
                    "translation": "Tendo lido a carta, ele saiu imediatamente do escritório.",
                    "tokens": [
                              "Прочитав",
                              "письмо,",
                              "он",
                              "сразу",
                              "ушёл",
                              "из",
                              "офиса."
                    ],
                    "audio": "Прочитав письмо, он сразу ушёл из офиса."
          },
          {
                    "sentence": "Вернувшись домой, она приготовила ужин.",
                    "translation": "Tendo voltado para casa, ela preparou o jantar.",
                    "tokens": [
                              "Вернувшись",
                              "домой,",
                              "она",
                              "приготовила",
                              "ужин."
                    ],
                    "audio": "Вернувшись домой, она приготовила ужин."
          }
],
        [
          {
                    "speaker": "Anton",
                    "text": "Что он сделал, окончив университет?",
                    "translation": "O que ele fez após concluir a universidade?",
                    "audio": "Что он сделал, окончив университет?"
          },
          {
                    "speaker": "Yulia",
                    "text": "Закончив учёбу, он переехал работать в Москву.",
                    "translation": "Tendo terminado os estudos, mudou-se para trabalhar em Moscou.",
                    "audio": "Закончив учёбу, он переехал работать в Москву."
          }
],
        [
          {
                    "q": "Gerúndio perfeito de \"Прочитать\":",
                    "options": [
                              "Читая",
                              "Прочитав",
                              "Прочитанный",
                              "Прочитающий"
                    ],
                    "correctIndex": 1,
                    "explanation": "Perfeito em -в: прочитав (tendo lido)."
          },
          {
                    "q": "Forma do gerúndio perfeito reflexivo de \"Вернуться\" (voltar):",
                    "options": [
                              "Вернуя",
                              "Вернувшись",
                              "Вернувшийся",
                              "Вернуем"
                    ],
                    "correctIndex": 1,
                    "explanation": "Verbos reflexivos terminam em -вшись: вернувшись."
          },
          {
                    "q": "Traduza: \"Узнав правду, он удивился.\"",
                    "options": [
                              "Buscando a verdade ele se surpreendeu",
                              "Ao saber da verdade, ele se surpreendeu",
                              "Ele saberá a verdade amanhã",
                              "Ele fala a verdade"
                    ],
                    "correctIndex": 1,
                    "explanation": "Узнав indica ação já concluída antes."
          },
          {
                    "q": "Qual a diferença entre \"Читая\" e \"Прочитав\"?",
                    "options": [
                              "Читая é futuro, Прочитав é passado",
                              "Читая é ação simultânea (imperfeito), Прочитав é ação anterior concluída (perfeito)",
                              "São idênticos",
                              "Прочитав é passivo"
                    ],
                    "correctIndex": 1,
                    "explanation": "Gerúndio imperfeito (simultâneo) vs Gerúndio perfeito (concluído antes)."
          },
          {
                    "q": "Gerúndio perfeito de \"Посмотреть\":",
                    "options": [
                              "Посмотрев",
                              "Смотря",
                              "Посмотришь",
                              "Посмотренный"
                    ],
                    "correctIndex": 0,
                    "explanation": "Tema do passado посмотре- + в ➔ посмотрев."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_06",
        "Módulo 6: Переговоры и бизнес (Negociação Executiva e Resolução de Conflitos)",
        "Vocabulário corporativo de alto nível, negociação de acordos e gestão diplomática de conflitos.",
        "Conduza reuniões de negócios com linguagem diplomática, polida e persuasiva.",
        "Мы готовы обсудить условия взаимовыгодного сотрудничества.",
        [
          {
                    "title": "Fórmulas Diplomáticas de Proposta Comercial",
                    "rule": "Em negociações corporativas em russo, usam-se estruturas formais como \"Мы предлагаем рассмотреть...\" (Propomos considerar...) e \"Взаимовыгодное сотрудничество\" para criar ambiente propício ao acordo.",
                    "formula": "Мы предлагаем + [Infinitivo] / Взаимовыгодное + [Substantivo]",
                    "example": "Мы предлагаем рассмотреть новые условия договора.",
                    "exampleTranslation": "Propomos considerar as novas condições do contrato."
          },
          {
                    "title": "Expressando Objeções com Polidez Corporativa",
                    "rule": "Para discordar sem gerar tensão, usa-se a atenuação \"К сожалению, мы не можем согласиться с...\" ou a antítese \"С одной стороны..., но с другой...\".",
                    "formula": "К сожалению, + [oração] / Согласиться с + [Instrumental]",
                    "example": "К сожалению, эти условия нам не подходят.",
                    "exampleTranslation": "Infelizmente estas condições não nos atendem."
          },
          {
                    "title": "Fechamento e Registro de Acordos",
                    "rule": "Usa-se \"Прийти к компромиссу\" (Chegar a um compromisso/acordo) e \"Подписать протокол намерений\" (Assinar memorando de intenções).",
                    "formula": "Прийти к + [Dativo: компромиссу / соглашению]",
                    "example": "Стороны пришли к взаимовыгодному соглашению.",
                    "exampleTranslation": "As partes chegaram a um acordo mutuamente vantajoso."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Взаимовыгодный",
                    "romaji": "Vzaimovygodnyy",
                    "translation": "Mutuamente vantajoso / De benefício mútuo",
                    "audio": "Взаимовыгодный",
                    "dica": "Adjetivo comercial B2 essencial."
          },
          {
                    "type": "vocab",
                    "word": "Переговоры",
                    "romaji": "Peregovory",
                    "translation": "Negociações / Reunião de negócios",
                    "audio": "Переговоры",
                    "dica": "Substantivo plural para conversações comerciais."
          },
          {
                    "type": "vocab",
                    "word": "Сотрудничество",
                    "romaji": "Sotrudnichestvo",
                    "translation": "Cooperação / Parceria empresarial",
                    "audio": "Сотрудничество",
                    "dica": "Termo neutro corporativo."
          },
          {
                    "type": "vocab",
                    "word": "Компромисс",
                    "romaji": "Kompromiss",
                    "translation": "Compromisso / Acordo amigável",
                    "audio": "Компромисс",
                    "dica": "Solução amigável de conflito."
          },
          {
                    "type": "vocab",
                    "word": "Соглашение",
                    "romaji": "Soglasheniye",
                    "translation": "Acordo / Pacto assinado",
                    "audio": "Соглашение",
                    "dica": "Documento legal de entendimento."
          }
],
        [
          {
                    "sentence": "Мы готовы подписать взаимовыгодное соглашение о сотрудничестве.",
                    "translation": "Estamos prontos para assinar um acordo de cooperação mutuamente vantajoso.",
                    "tokens": [
                              "Мы",
                              "готовы",
                              "подписать",
                              "взаимовыгодное",
                              "соглашение",
                              "о",
                              "сотрудничестве."
                    ],
                    "audio": "Мы готовы подписать взаимовыгодное соглашение о сотрудничестве."
          },
          {
                    "sentence": "Стороны смогли прийти к компромиссу в ходе сложнейших переговоров.",
                    "translation": "As partes conseguiram chegar a um compromisso no decorrer das negociações mais complexas.",
                    "tokens": [
                              "Стороны",
                              "смогли",
                              "прийти",
                              "к",
                              "компромиссу",
                              "в",
                              "ходе",
                              "сложнейших",
                              "переговоров."
                    ],
                    "audio": "Стороны смогли прийти к компромиссу в ходе сложнейших переговоров."
          }
],
        [
          {
                    "speaker": "Maxim",
                    "text": "Вы согласны с предлагаемыми условиями нового контракта?",
                    "translation": "Você concorda com as condições propostas do novo contrato?",
                    "audio": "Вы согласны с предлагаемыми условиями нового контракта?"
          },
          {
                    "speaker": "Elena",
                    "text": "Да, эти условия кажутся нам вполне взаимовыгодными.",
                    "translation": "Sim, estas condições nos parecem bastante vantajosas para ambas as partes.",
                    "audio": "Да, эти условия кажутся нам вполне взаимовыгодными."
          }
],
        [
          {
                    "q": "O que significa o adjetivo corporativo \"Взаимовыгодный\"?",
                    "options": [
                              "Unilateral e arriscado",
                              "Mutuamente vantajoso",
                              "Muito caro e inviável",
                              "Temporário e informal"
                    ],
                    "correctIndex": 1,
                    "explanation": "Взаимо- (mútuo) + выгодный (vantajoso) = de benefício mútuo."
          },
          {
                    "q": "Qual expressão é recomendada para recusar uma proposta de forma polida em negociações?",
                    "options": [
                              "Мы категорически против!",
                              "К сожалению, эти условия нам не подходят.",
                              "Уходите отсюда!",
                              "Мне всё равно."
                    ],
                    "correctIndex": 1,
                    "explanation": "К сожалению... atenua a recusa comercial."
          },
          {
                    "q": "Qual a regência do verbo \"Прийти к...\" para expressar \"chegar a um compromisso\"?",
                    "options": [
                              "Caso Acusativo",
                              "Caso Genitivo",
                              "Caso Dativo (компромиссу)",
                              "Caso Preposicional"
                    ],
                    "correctIndex": 2,
                    "explanation": "Прийти к + Dativo: прийти к компромиссу / соглашению."
          },
          {
                    "q": "Traduza: \"Вести переговоры о сотрудничестве.\"",
                    "options": [
                              "Cancelar um projeto",
                              "Conduzir negociações sobre cooperação",
                              "Assinar uma demissão",
                              "Vender ações da empresa"
                    ],
                    "correctIndex": 1,
                    "explanation": "Вести переговоры = conduzir negociações."
          },
          {
                    "q": "Substantivo neutro que significa \"Cooperação / Parceria\":",
                    "options": [
                              "Переговоры",
                              "Сотрудничество",
                              "Компромисс",
                              "Сделка"
                    ],
                    "correctIndex": 1,
                    "explanation": "Сотрудничество = cooperação / parceria."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_07",
        "Módulo 7: Юридический язык (Linguagem Jurídica e Burocrática Básica)",
        "Vocabulário de vistos, contratos de aluguel, cláusulas legais e direitos civis.",
        "Interprete cláusulas contratuais e documentos oficiais em russo.",
        "Договор вступает в силу с момента его подписания.",
        [
          {
                    "title": "Entrada em Vigor de Documentos Legais",
                    "rule": "Em contratos russos, a cláusula de vigência usa o verbo \"вступать в силу\" (entrar em vigor) acompanhado da preposição \"с момента\" (+ Genitivo).",
                    "formula": "Договор вступает в силу с момента + [Genitivo]",
                    "example": "Договор вступает в силу с момента подписания.",
                    "exampleTranslation": "O contrato entra em vigor a partir do momento da assinatura."
          },
          {
                    "title": "Expressão de Obrigações Jurídicas (Обязываться)",
                    "rule": "Nas cláusulas contratuais, as partes são referidas como \"Стороны\", e o verbo reflexivo \"обязываться\" (+ infinitivo) indica compromisso legal.",
                    "formula": "Стороны обязуются + [Infinitivo]",
                    "example": "Арендатор обязуется своевременно оплачивать аренду.",
                    "exampleTranslation": "O inquilino se obriga a pagar o aluguel pontualmente."
          },
          {
                    "title": "Responsabilidade por Incumprimento (Ответственность)",
                    "rule": "A responsabilidade por violação de cláusulas é expressa por \"нести ответственность за\" (+ Acusativo).",
                    "formula": "Нести ответственность за + [Acusativo]",
                    "example": "Сторона несёт ответственность за нарушение условий.",
                    "exampleTranslation": "A parte responde pela violação das condições."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Договор",
                    "romaji": "Dogovor",
                    "translation": "Contrato / Acordo assinado",
                    "audio": "Договор",
                    "dica": "Documento jurídico central."
          },
          {
                    "type": "vocab",
                    "word": "Обязанность",
                    "romaji": "Obyazannost",
                    "translation": "Obrigação / Dever legal",
                    "audio": "Обязанность",
                    "dica": "Substantivo feminino em -сть."
          },
          {
                    "type": "vocab",
                    "word": "Ответственность",
                    "romaji": "Otvetstvennost",
                    "translation": "Responsabilidade civil / penal",
                    "audio": "Ответственность",
                    "dica": "Exige a preposição за."
          },
          {
                    "type": "vocab",
                    "word": "Действителен",
                    "romaji": "Deystvitelen",
                    "translation": "Válido (Forma curta masc)",
                    "audio": "Действителен",
                    "dica": "Forma curta adjetival para documentos."
          },
          {
                    "type": "vocab",
                    "word": "Арендатор",
                    "romaji": "Arendator",
                    "translation": "Inquilino / Locatário",
                    "audio": "Арендатор",
                    "dica": "Quem aluga um imóvel."
          }
],
        [
          {
                    "sentence": "Настоящий договор вступает в силу с момента его подписания сторонами.",
                    "translation": "O presente contrato entra em vigor a partir do momento de sua assinatura pelas partes.",
                    "tokens": [
                              "Настоящий",
                              "договор",
                              "вступает",
                              "в",
                              "силу",
                              "с",
                              "момента",
                              "его",
                              "подписания",
                              "сторонами."
                    ],
                    "audio": "Настоящий договор вступает в силу с момента его подписания сторонами."
          },
          {
                    "sentence": "Арендатор обязуется своевременно оплачивать коммунальные услуги.",
                    "translation": "O locatário se obriga a pagar pontualmente as despesas de condomínio/utilidades.",
                    "tokens": [
                              "Арендатор",
                              "обязуется",
                              "своевременно",
                              "оплачивать",
                              "коммунальные",
                              "услуги."
                    ],
                    "audio": "Арендатор обязуется своевременно оплачивать коммунальные услуги."
          }
],
        [
          {
                    "speaker": "Lawyer",
                    "text": "Вы внимательно прочитали все пункты данного договора?",
                    "translation": "Você leu atentamente todos os pontos deste contrato?",
                    "audio": "Вы внимательно прочитали все пункты данного договора?"
          },
          {
                    "speaker": "Client",
                    "text": "Да, я полностью согласен со всеми обязательствами сторон.",
                    "translation": "Sim, concordo plenamente com todas as obrigações das partes.",
                    "audio": "Да, я полностью согласен со всеми обязательствами сторон."
          }
],
        [
          {
                    "q": "O que significa a expressão jurídica \"Договор вступает в силу\"?",
                    "options": [
                              "O contrato foi cancelado",
                              "O contrato entra em vigor",
                              "O contrato expira amanhã",
                              "O contrato está em rascunho"
                    ],
                    "correctIndex": 1,
                    "explanation": "Вступать в силу = entrar em vigor."
          },
          {
                    "q": "Qual a tradução de \"Действителен до 31 декабря\"?",
                    "options": [
                              "Assinado em 31 de dezembro",
                              "Válido até 31 de dezembro",
                              "Cancelado em 31 de dezembro",
                              "Renovado em 31 de dezembro"
                    ],
                    "correctIndex": 1,
                    "explanation": "Действителен до = válido até."
          },
          {
                    "q": "Como se diz \"Locatário / Inquilino\" em documentos de aluguel?",
                    "options": [
                              "Арендодатель",
                              "Арендатор",
                              "Адвокат",
                              "Нотариус"
                    ],
                    "correctIndex": 1,
                    "explanation": "Арендатор = locatário/inquilino (Арендодатель = locador)."
          },
          {
                    "q": "Qual verbo expressa a obrigação formal contratual \"obrigar-se a\"?",
                    "options": [
                              "Отказываться",
                              "Обязываться",
                              "Сомневаться",
                              "Надеяться"
                    ],
                    "correctIndex": 1,
                    "explanation": "Обязываться + infinitivo."
          },
          {
                    "q": "Qual a preposição exigida pela locução \"нести ответственность\" (responder por)?",
                    "options": [
                              "на",
                              "в",
                              "за (+ Acusativo)",
                              "с"
                    ],
                    "correctIndex": 2,
                    "explanation": "Нести ответственность за нарушение."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_08",
        "Módulo 8: Экономика и финансы (Economia e Mercado)",
        "Terminologia macroeconômica, mercados de capitais, inflação e investimentos.",
        "Compreenda relatórios financeiros e análises de mercado em russo.",
        "Инфляция замедлилась, а инвестиции в технологический сектор выросли.",
        [
          {
                    "title": "Indicadores Macroeconômicos Globais",
                    "rule": "Termos fundamentais da economia: ВВП (Внутренний валовой продукт - PIB), Инфляция (Inflação), e Процентная ставка (Taxa de juros bancária).",
                    "formula": "ВВП / Инфляция / Процентная ставка",
                    "example": "Рост ВВП составил три процента.",
                    "exampleTranslation": "O crescimento do PIB somou três por cento."
          },
          {
                    "title": "Expressando Variação Percentual (На + porcentagem)",
                    "rule": "Para indicar aumento ou redução percentual, usa-se a preposição НА seguida do numeral cardinal no Acusativo.",
                    "formula": "Вырасти / Снизиться + на + [Porcentagem]",
                    "example": "Инфляция снизилась на два процента.",
                    "exampleTranslation": "A inflação reduziu em dois por cento."
          },
          {
                    "title": "Verbos de Aplicação Financeira (Инвестировать)",
                    "rule": "O verbo \"инвестировать\" (investir) exige a preposição В acompanhada do Caso Acusativo.",
                    "formula": "Инвестировать в + [Acusativo]",
                    "example": "Компания инвестирует средства в искусственный интеллект.",
                    "exampleTranslation": "A empresa investe recursos em inteligência artificial."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Инфляция",
                    "romaji": "Inflyatsiya",
                    "translation": "Inflação / Alta de preços",
                    "audio": "Инфляция",
                    "dica": "Indicador econômico chave."
          },
          {
                    "type": "vocab",
                    "word": "Инвестиции",
                    "romaji": "Investitsii",
                    "translation": "Investimentos de capital",
                    "audio": "Инвестиции",
                    "dica": "Substantivo plural em -ии."
          },
          {
                    "type": "vocab",
                    "word": "Прибыль",
                    "romaji": "Pribyl",
                    "translation": "Lucro / Rendimento financeiro",
                    "audio": "Прибыль",
                    "dica": "Substantivo feminino em -ль."
          },
          {
                    "type": "vocab",
                    "word": "Ставка",
                    "romaji": "Stavka",
                    "translation": "Taxa (de juros / de câmbio)",
                    "audio": "Ставка",
                    "dica": "Процентная ставка = taxa de juros."
          },
          {
                    "type": "vocab",
                    "word": "Экономика",
                    "romaji": "Ekonomika",
                    "translation": "Economia / Sistema financeiro",
                    "audio": "Экономика",
                    "dica": "Ciência e mercado econômico."
          }
],
        [
          {
                    "sentence": "В этом году ВВП страны вырос на три процента благодаря экспорту.",
                    "translation": "Este ano o PIB do país cresceu três por cento graças à exportação.",
                    "tokens": [
                              "В",
                              "этом",
                              "году",
                              "ВВП",
                              "страны",
                              "вырос",
                              "на",
                              "три",
                              "процента",
                              "благодаря",
                              "экспорту."
                    ],
                    "audio": "В этом году ВВП страны вырос на три процента благодаря экспорту."
          },
          {
                    "sentence": "Инвесторы активно вкладывают средства в развивающиеся рынки.",
                    "translation": "Os investidores aplicam ativamente recursos em mercados emergentes.",
                    "tokens": [
                              "Инвесторы",
                              "активно",
                              "вкладывают",
                              "средства",
                              "в",
                              "развивающиеся",
                              "рынки."
                    ],
                    "audio": "Инвесторы активно вкладывают средства в развивающиеся рынки."
          }
],
        [
          {
                    "speaker": "Analyst",
                    "text": "Каковы последние прогнозы по инфляции на следующий квартал?",
                    "translation": "Quais as últimas previsões de inflação para o próximo trimestre?",
                    "audio": "Каковы последние прогнозы по инфляции на следующий квартал?"
          },
          {
                    "speaker": "Economist",
                    "text": "Ожидается постепенное снижение инфляции до четырёх процентов.",
                    "translation": "Espera-se uma redução gradual da inflação para quatro por cento.",
                    "audio": "Ожидается постепенное снижение инфляции до четырёх процентов."
          }
],
        [
          {
                    "q": "O que significa a sigla econômica russa ВВП?",
                    "options": [
                              "Valor de Venda Principal",
                              "Produto Interno Bruto (PIB)",
                              "Índice de Preços ao Consumidor",
                              "Orçamento Geral do Estado"
                    ],
                    "correctIndex": 1,
                    "explanation": "ВВП = Внутренний валовой продукт (PIB)."
          },
          {
                    "q": "Como se diz \"Taxa de juros\" em russo financeiro?",
                    "options": [
                              "Курс валют",
                              "Процентная ставка",
                              "Чистая прибыль",
                              "Налоговая ставка"
                    ],
                    "correctIndex": 1,
                    "explanation": "Процентная ставка = taxa de juros."
          },
          {
                    "q": "Qual a preposição usada para indicar a porcentagem de variação (\"cresceu 5%\")?",
                    "options": [
                              "в",
                              "на (+ Acusativo)",
                              "из",
                              "к"
                    ],
                    "correctIndex": 1,
                    "explanation": "Вырасти на 5% (crescer em 5%)."
          },
          {
                    "q": "Qual a tradução de \"Прибыль\"?",
                    "options": [
                              "Prejuízo",
                              "Lucro / Rendimento",
                              "Dívida",
                              "Imposto"
                    ],
                    "correctIndex": 1,
                    "explanation": "Прибыль = lucro financeiro."
          },
          {
                    "q": "O que significa o verbo \"Инвестировать в технологии\"?",
                    "options": [
                              "Vender tecnologias",
                              "Investir em tecnologias",
                              "Proibir tecnologias",
                              "Estudar tecnologias"
                    ],
                    "correctIndex": 1,
                    "explanation": "Инвестировать в = investir em."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_09",
        "Módulo 9: Анализ прессы (Análise de Periódicos Nativos - TASS, RIA Novosti)",
        "Estilo jornalístico informativo, manchetes e termos de agências de notícias.",
        "Leia e interprete notícias jornalísticas autênticas sem dicionário.",
        "По сообщению информационного агентства, переговоры завершились успешно.",
        [
          {
                    "title": "Citação de Fontes de Informação Jornalística",
                    "rule": "Matérias de imprensa usam fórmulas fixas para atrelar a notícia à fonte: \"По данным...\" (Segundo dados de...), \"Как сообщает ТАСС...\" (Como informa a TASS...), ou \"Со ссылкой на источник...\" (Citando fonte...).",
                    "formula": "По данным + [Genitivo] / Как сообщает + [Nome da Agência]",
                    "example": "По данным министерства, проект завершён.",
                    "exampleTranslation": "Segundo dados do ministério, o projeto foi concluído."
          },
          {
                    "title": "Verbos Principais da Redação Jornalística",
                    "rule": "A imprensa nativa emprega verbos de alta formalidade: \"заявлять\" (declarar), \"подчёркивать\" (sublinhar/destacar), e \"отмечать\" (notar/observar).",
                    "formula": "Заявлять / Подчёркивать / Отмечать, что...",
                    "example": "Пресс-секретарь подчеркнул важность соглашения.",
                    "exampleTranslation": "O porta-voz destacou a importância do acordo."
          },
          {
                    "title": "Sintaxe Concisa das Manchetes (Заголовки)",
                    "rule": "Nas manchetes russas, o verbo ser/estar e conjunções são frequentemente omitidos, priorizando particípios e formas diretas para dar agilidade à notícia.",
                    "formula": "[Substantivo Chave] + [Particípio / Ação Direta]",
                    "example": "Саммит в Москве: приняты ключевые решения.",
                    "exampleTranslation": "Cúpula em Moscou: tomadas decisões chave."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Пресса",
                    "romaji": "Pressa",
                    "translation": "Imprensa / Periódicos de notícia",
                    "audio": "Пресса",
                    "dica": "Mídia impressa e digital."
          },
          {
                    "type": "vocab",
                    "word": "Заголовок",
                    "romaji": "Zagolovok",
                    "translation": "Manchete / Título da notícia",
                    "audio": "Заголовок",
                    "dica": "Título de capa jornalística."
          },
          {
                    "type": "vocab",
                    "word": "Источник",
                    "romaji": "Istochnik",
                    "translation": "Fonte de informação",
                    "audio": "Источник",
                    "dica": "Origem dos dados citados."
          },
          {
                    "type": "vocab",
                    "word": "Сообщение",
                    "romaji": "Soobshcheniye",
                    "translation": "Comunicado / Reportagem informativa",
                    "audio": "Сообщение",
                    "dica": "Nota enviada à imprensa."
          },
          {
                    "type": "vocab",
                    "word": "Событие",
                    "romaji": "Sobytiye",
                    "translation": "Acontecimento / Evento coberto",
                    "audio": "Событие",
                    "dica": "Fato de interesse público."
          }
],
        [
          {
                    "sentence": "По сообщениям СМИ, международный саммит состоится в мае в Санкт-Петербурге.",
                    "translation": "Segundo reportagens da mídia, a cúpula internacional ocorrerá em maio em São Petersburgo.",
                    "tokens": [
                              "По",
                              "сообщениям",
                              "СМИ,",
                              "международный",
                              "саммит",
                              "состоится",
                              "в",
                              "мае",
                              "в",
                              "Санкт-Петербурге."
                    ],
                    "audio": "По сообщениям СМИ, международный саммит состоится в мае в Санкт-Петербурге."
          },
          {
                    "sentence": "Пресс-секретарь подчеркнул особое значение принятого решения.",
                    "translation": "O porta-voz destacou o significado especial da decisão tomada.",
                    "tokens": [
                              "Пресс-секретарь",
                              "подчеркнул",
                              "особое",
                              "значение",
                              "принятого",
                              "решения."
                    ],
                    "audio": "Пресс-секретарь подчеркнул особое значение принятого решения."
          }
],
        [
          {
                    "speaker": "Journalist 1",
                    "text": "Вы читали сегодняшнюю главную статью в газете?",
                    "translation": "Você leu o principal artigo de hoje no jornal?",
                    "audio": "Вы читали сегодняшнюю главную статью в газете?"
          },
          {
                    "speaker": "Journalist 2",
                    "text": "Да, заголовок сразу привлёк внимание всей общественности.",
                    "translation": "Sim, a manchete atraiu imediatamente a atenção de todo o público.",
                    "audio": "Да, заголовок сразу привлёк внимание всей общественности."
          }
],
        [
          {
                    "q": "O que significa a fórmula de citação \"По данным ТАСС\"?",
                    "options": [
                              "Segundo dados da agência TASS",
                              "Sem o consentimento da TASS",
                              "Crítica contra a agência TASS",
                              "Opinião pessoal do jornalista"
                    ],
                    "correctIndex": 0,
                    "explanation": "По данным = segundo dados de."
          },
          {
                    "q": "Qual a palavra em russo para \"Manchete de Notícia\"?",
                    "options": [
                              "Статья",
                              "Заголовок",
                              "Источник",
                              "Интервью"
                    ],
                    "correctIndex": 1,
                    "explanation": "Заголовок = manchete / título."
          },
          {
                    "q": "O que expressa o verbo jornalístico \"Подчёркивать\"?",
                    "options": [
                              "Sublinhar / Destacar / Enfatizar",
                              "Esconder uma notícia",
                              "Duvidar de uma fonte",
                              "Traduzir um texto"
                    ],
                    "correctIndex": 0,
                    "explanation": "Подчёркивать = enfatizar/destacar."
          },
          {
                    "q": "Qual o significado de \"Источник информации\"?",
                    "options": [
                              "Jornal impresso",
                              "Fonte de informação",
                              "Rádio local",
                              "Entrevista de TV"
                    ],
                    "correctIndex": 1,
                    "explanation": "Источник = fonte."
          },
          {
                    "q": "Qual sigla russa representa os Meios de Comunicação Social (Mídia)?",
                    "options": [
                              "ВВП",
                              "СМИ (Средства массовой информации)",
                              "ИИ",
                              "ТРКИ"
                    ],
                    "correctIndex": 1,
                    "explanation": "СМИ = imprensa / mídia."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_10",
        "Módulo 10: Подкасты и радио (Compreensão de Podcasts Nativos em Velocidade Real)",
        "Treino auditivo de velocidade real, entonações nativas e marcadores discursivos.",
        "Acompanhe debates em podcasts e rádio entendendo matizes de opinião.",
        "Честно говоря, эта тема вызывает жаркие споры среди экспертов.",
        [
          {
                    "title": "Introdução de Opinião Pessoal em Fala Rápida",
                    "rule": "Em conversas nativas e podcasts, usam-se marcadores de franqueza como \"Честно говоря...\" (Pra ser sincero...) e \"На мой взгляд...\" (Do meu ponto de vista...) para sinalizar posição individual.",
                    "formula": "Честно говоря, / На мой взгляд, + [Oração]",
                    "example": "Честно говоря, я не ожидал такого результата.",
                    "exampleTranslation": "Pra ser sincero, eu não esperava tal resultado."
          },
          {
                    "title": "Conectores Oratoriais de Resumo e Transição",
                    "rule": "Para fazer transições rápidas na fala nativa, usam-se \"Собственно говоря...\" (A bem da verdade...) e \"Короче говоря...\" (Em resumo / Enfim...).",
                    "formula": "Короче говоря, / Собственно говоря,",
                    "example": "Короче говоря, мы решили остаться.",
                    "exampleTranslation": "Em resumo, decidimos ficar."
          },
          {
                    "title": "Pausas Preenchidas e Modulação de Tom",
                    "rule": "Marcadores de fluência como \"Ну, знаете...\", \"Так сказать...\", e \"В общем-то...\" são usados para organizar o raciocínio sem perder o turno da fala.",
                    "formula": "Ну, знаете... / Так сказать...",
                    "example": "Это был, так сказать, интересный опыт.",
                    "exampleTranslation": "Foi uma experiência, por assim dizer, interessante."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Подкаст",
                    "romaji": "Podkast",
                    "translation": "Podcast de áudio / vídeo",
                    "audio": "Подкаст",
                    "dica": "Mídia de áudio sob demanda."
          },
          {
                    "type": "vocab",
                    "word": "Ведущий",
                    "romaji": "Vedushchiy",
                    "translation": "Apresentador / Host do programa",
                    "audio": "Ведущий",
                    "dica": "Quem conduz a transmissão."
          },
          {
                    "type": "vocab",
                    "word": "Честно",
                    "romaji": "Chestno",
                    "translation": "Sinceramente / Honestamente",
                    "audio": "Честно",
                    "dica": "Честно говоря = para ser sincero."
          },
          {
                    "type": "vocab",
                    "word": "Дискуссия",
                    "romaji": "Diskussiya",
                    "translation": "Discussão / Debate oral",
                    "audio": "Дискуссия",
                    "dica": "Debate de pontos de vista."
          },
          {
                    "type": "vocab",
                    "word": "Мнение",
                    "romaji": "Mneniye",
                    "translation": "Opinião / Ponto de vista",
                    "audio": "Мнение",
                    "dica": "На мой взгляд = na minha opinião."
          }
],
        [
          {
                    "sentence": "Честно говоря, данный выпуск подкаста был самым интересным за весь месяц.",
                    "translation": "Pra ser sincero, este episódio do podcast foi o mais interessante de todo o mês.",
                    "tokens": [
                              "Честно",
                              "говоря,",
                              "данный",
                              "выпуск",
                              "подкаста",
                              "был",
                              "самым",
                              "интересным",
                              "за",
                              "весь",
                              "месяц."
                    ],
                    "audio": "Честно говоря, данный выпуск подкаста был самым интересным за весь месяц."
          },
          {
                    "sentence": "Ведущий программы задал гостю весьма неожиданный и острый вопрос.",
                    "translation": "O apresentador do programa fez uma pergunta bastante inesperada e afiada ao convidado.",
                    "tokens": [
                              "Ведущий",
                              "программы",
                              "задал",
                              "гостю",
                              "весьма",
                              "неожиданный",
                              "и",
                              "острый",
                              "вопрос."
                    ],
                    "audio": "Ведущий программы задал гостю весьма неожиданный и острый вопрос."
          }
],
        [
          {
                    "speaker": "Listener",
                    "text": "Ты регулярно слушаешь этот еженедельный подкаст про культуру?",
                    "translation": "Você escuta regularmente este podcast semanal sobre cultura?",
                    "audio": "Ты регулярно слушаешь этот еженедельный подкаст про культуру?"
          },
          {
                    "speaker": "Friend",
                    "text": "Да, ведущий отлично умеет вести увлекательную дискуссию.",
                    "translation": "Sim, o apresentador sabe perfeitamente conduzir uma discussão fascinante.",
                    "audio": "Да, ведущий отлично умеет вести увлекательную дискуссию."
          }
],
        [
          {
                    "q": "O que significa a expressão oral nativa \"Честно говоря\"?",
                    "options": [
                              "Para ser sincero / Honestamente",
                              "Mentira deslavada",
                              "Sem sombra de dúvida",
                              "Fale mais alto"
                    ],
                    "correctIndex": 0,
                    "explanation": "Честно говоря = para ser sincero."
          },
          {
                    "q": "Como se diz \"Apresentador de podcast/rádio\" em russo?",
                    "options": [
                              "Слушатель",
                              "Ведущий",
                              "Редактор",
                              "Писатель"
                    ],
                    "correctIndex": 1,
                    "explanation": "Ведущий = apresentador / host."
          },
          {
                    "q": "Qual marcador discursivo é usado para resumir uma ideia (\"Em resumo / Enfim\")?",
                    "options": [
                              "В-третьих",
                              "Короче говоря",
                              "Прежде всего",
                              "Никогда"
                    ],
                    "correctIndex": 1,
                    "explanation": "Короче говоря = em resumo."
          },
          {
                    "q": "Qual expressão introduz ponto de vista pessoal?",
                    "options": [
                              "На мой взгляд",
                              "Завтра утром",
                              "В прошлом году",
                              "Без сомнения"
                    ],
                    "correctIndex": 0,
                    "explanation": "На мой взгляд = a meu ver."
          },
          {
                    "q": "O que significa a muleta discursiva \"Так сказать\"?",
                    "options": [
                              "Por assim dizer",
                              "Fale a verdade",
                              "Nunca diga isso",
                              "Não sei nada"
                    ],
                    "correctIndex": 0,
                    "explanation": "Так сказать = por assim dizer."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_11",
        "Módulo 11: Кино и сериалы (Cinema e Séries Russas sem Legendas)",
        "Linguagem coloquial moderna, gírias contemporâneas e expressões do cinema russo moderno.",
        "Decodifique diálogos informais em filmes e produções russas modernas.",
        "Слушай, это просто бомба! Не могу оторваться от просмотра.",
        [
          {
                    "title": "Gírias Nativas de Entusiasmo em Diálogos de Filme",
                    "rule": "No cinema e séries russas modernas, usam-se termos informais de forte impacto emotivo: \"Это просто бомба!\" (É sensacional / bombástico!), \"Круто!\" (Demais!), e \"Клёво!\".",
                    "formula": "Это просто бомба! / Круто! / Клёво!",
                    "example": "Фильм — просто бомба!",
                    "exampleTranslation": "O filme é sensacional!"
          },
          {
                    "title": "Reduções e Elipses Fonéticas da Fala Coloquial",
                    "rule": "A fala veloz de personagens de filmes reduz formas padrão: \"Сейчас\" vira \"Щас\", \"Что\" vira \"Чё\", e \"Только\" vira \"Тока\".",
                    "formula": "Сейчас ➔ Щас / Что ➔ Чё / Только ➔ Тока",
                    "example": "Щас приду, подожди!",
                    "exampleTranslation": "Já tô indo, espera!"
          },
          {
                    "title": "Expressões de Impacto e Imersão Auditiva",
                    "rule": "Para expressar o envolvimento com o enredo de uma série, usam-se \"Не могу оторваться!\" (Não consigo parar de assistir!) e \"Затягивает!\" (É viciante!).",
                    "formula": "Не могу оторваться! / Затягивает!",
                    "example": "Сериал так затягивает, что смотришь всю ночь.",
                    "exampleTranslation": "A série vicia tanto que você assiste a noite toda."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Фильм",
                    "romaji": "Film",
                    "translation": "Filme cinematográfico",
                    "audio": "Фильм",
                    "dica": "Obra de cinema."
          },
          {
                    "type": "vocab",
                    "word": "Сериал",
                    "romaji": "Serial",
                    "translation": "Série de TV / Streaming",
                    "audio": "Сериал",
                    "dica": "Produção em episódios."
          },
          {
                    "type": "vocab",
                    "word": "Круто",
                    "romaji": "Kruto",
                    "translation": "Legal / Daora / Excelente",
                    "audio": "Круто",
                    "dica": "Gíria coloquial amplamente usada."
          },
          {
                    "type": "vocab",
                    "word": "Бомба",
                    "romaji": "Bomba",
                    "translation": "Algo bombástico / Sensacional",
                    "audio": "Бомба",
                    "dica": "Expressão de grande entusiasmo."
          },
          {
                    "type": "vocab",
                    "word": "Сюжет",
                    "romaji": "Syuzhet",
                    "translation": "Enredo / Trama da história",
                    "audio": "Сюжет",
                    "dica": "Linha narrativa da produção."
          }
],
        [
          {
                    "sentence": "Этот новый сериал — просто бомба, его сюжет держит в постоянном напряжении.",
                    "translation": "Esta nova série é sensacional, seu enredo mantém em constante tensão.",
                    "tokens": [
                              "Этот",
                              "новый",
                              "сериал",
                              "—",
                              "просто",
                              "бомба,",
                              "его",
                              "сюжет",
                              "держит",
                              "в",
                              "постоянном",
                              "напряжении."
                    ],
                    "audio": "Этот новый сериал — просто бомба, его сюжет держит в постоянном напряжении."
          },
          {
                    "sentence": "Щас досмотрю последнюю серию и обязательно скажу своё мнение.",
                    "translation": "Já já vou terminar de assistir ao último episódio e com certeza darei minha opinião.",
                    "tokens": [
                              "Щас",
                              "досмотрю",
                              "последнюю",
                              "серию",
                              "и",
                              "обязательно",
                              "скажу",
                              "своё",
                              "мнение."
                    ],
                    "audio": "Щас досмотрю последнюю серию и обязательно скажу своё мнение."
          }
],
        [
          {
                    "speaker": "Alex",
                    "text": "Как тебе тот российский фильм, который ты смотрел вчера вечером?",
                    "translation": "O que achou daquele filme russo que assistiu ontem à noite?",
                    "audio": "Как тебе тот российский фильм, который ты смотрел вчера вечером?"
          },
          {
                    "speaker": "Nina",
                    "text": "Круто! Актёры сыграли просто потрясающе, не могла оторваться.",
                    "translation": "Demais! Os atores atuaram de forma simplesmente fantástica, não consegui parar de ver.",
                    "audio": "Круто! Актёры сыграли просто потрясающе, не могла оторваться."
          }
],
        [
          {
                    "q": "O que significa a gíria coloquial \"Это просто бомба!\" em avaliações de filmes?",
                    "options": [
                              "É um filme muito ruim",
                              "É sensacional / incrível",
                              "O filme explodiu o cinema",
                              "É um documentário militar"
                    ],
                    "correctIndex": 1,
                    "explanation": "Бомба = algo incrível/bombástico."
          },
          {
                    "q": "Como a linguagem cotidiana de filmes costuma pronunciar \"Сейчас\"?",
                    "options": [
                              "Щас",
                              "Сей",
                              "Час",
                              "Шо"
                    ],
                    "correctIndex": 0,
                    "explanation": "Сейчас reduz para Щас na fala rápida."
          },
          {
                    "q": "Qual expressão significa \"Não consigo parar de assistir\"?",
                    "options": [
                              "Не хочу смотреть",
                              "Не могу оторваться",
                              "Забыл название",
                              "Пойду спать"
                    ],
                    "correctIndex": 1,
                    "explanation": "Не могу оторваться = engajamento total."
          },
          {
                    "q": "O que significa a palavra \"Сюжет\"?",
                    "options": [
                              "Diretor do filme",
                              "Enredo / Trama da história",
                              "Ingresso do cinema",
                              "Legenda em russo"
                    ],
                    "correctIndex": 1,
                    "explanation": "Сюжет = enredo/trama."
          },
          {
                    "q": "Qual gíria jovem expressa \"Legal / Bacana / Excelente\"?",
                    "options": [
                              "Ужасно",
                              "Круто",
                              "Скучно",
                              "Плохо"
                    ],
                    "correctIndex": 1,
                    "explanation": "Круто = legal / excelente."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_12",
        "Módulo 12: Научные тексты (Redação Acadêmica e Científica)",
        "Estruturação de artigos acadêmicos, teses e linguagem de pesquisa.",
        "Redija resumos (аннотация) e relatórios de pesquisa acadêmica.",
        "Целью данного исследования является анализ социальных процессов.",
        [
          {
                    "title": "Formulação do Objetivo Acadêmico",
                    "rule": "Em artigos científicos e teses russas, o objetivo principal é formulado com \"Целью данного исследования является...\" (O objetivo desta pesquisa é...) ou \"Предметом анализа выступает...\".",
                    "formula": "Целью + [Genitivo] является + [Substantivo]",
                    "example": "Целью работы является анализ данных.",
                    "exampleTranslation": "O objetivo do trabalho é a análise de dados."
          },
          {
                    "title": "Impessoalidade e Voz Passiva Acadêmica",
                    "rule": "A redação científica russa evita o uso de \"я\" (eu) ou \"мы\" (nós), optando por construções reflexivas impessoais: \"Рассматривается...\" (Examina-se...), \"Исследуется...\" (Investiga-se...), \"Следует отметить...\" (Cabe ressaltar...).",
                    "formula": "Рассматривается / Исследуется + [Sujeito]",
                    "example": "В статье рассматривается проблема экологии.",
                    "exampleTranslation": "No artigo examina-se a questão da ecologia."
          },
          {
                    "title": "Fundamentação das Conclusões Científicas",
                    "rule": "Conclusões acadêmicas são introduzidas por \"На основе полученных данных...\" (Com base nos dados obtidos...) e \"Таким образом, доказано, что...\".",
                    "formula": "На основе полученных данных, ...",
                    "example": "На основе полученных данных сделаны выводы.",
                    "exampleTranslation": "Com base nos dados obtidos foram feitas conclusões."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Исследование",
                    "romaji": "Issledovaniye",
                    "translation": "Pesquisa / Estudo acadêmico",
                    "audio": "Исследование",
                    "dica": "Trabalho de investigação científica."
          },
          {
                    "type": "vocab",
                    "word": "Цель",
                    "romaji": "Tsel",
                    "translation": "Objetivo / Meta do estudo",
                    "audio": "Цель",
                    "dica": "Substantivo feminino terminado em -ль."
          },
          {
                    "type": "vocab",
                    "word": "Анализ",
                    "romaji": "Analiz",
                    "translation": "Análise rigorosa de dados",
                    "audio": "Анализ",
                    "dica": "Exame minucioso."
          },
          {
                    "type": "vocab",
                    "word": "Гипотеза",
                    "romaji": "Gipoteza",
                    "translation": "Hipótese de pesquisa",
                    "audio": "Гипотеза",
                    "dica": "Proposição a ser testada."
          },
          {
                    "type": "vocab",
                    "word": "Вывод",
                    "romaji": "Vyvod",
                    "translation": "Conclusão acadêmica",
                    "audio": "Вывод",
                    "dica": "Resultado fundamentado."
          }
],
        [
          {
                    "sentence": "Целью данного исследования является анализ влияния новых технологий на экономику.",
                    "translation": "O objetivo desta pesquisa é a análise do impacto de novas tecnologias na economia.",
                    "tokens": [
                              "Целью",
                              "данного",
                              "исследования",
                              "является",
                              "анализ",
                              "влияния",
                              "новых",
                              "технологий",
                              "на",
                              "экономику."
                    ],
                    "audio": "Целью данного исследования является анализ влияния новых технологий на экономику."
          },
          {
                    "sentence": "В первой главе статьи подробно рассматриваются основные методы обработки данных.",
                    "translation": "No primeiro capítulo do artigo examinam-se detalhadamente os principais métodos de processamento de dados.",
                    "tokens": [
                              "В",
                              "первой",
                              "главе",
                              "статьи",
                              "подробно",
                              "рассматриваются",
                              "основные",
                              "методы",
                              "обработки",
                              "данных."
                    ],
                    "audio": "В первой главе статьи подробно рассматриваются основные методы обработки данных."
          }
],
        [
          {
                    "speaker": "Researcher",
                    "text": "Вы уже закончили написание аннотации к вашей научной статье?",
                    "translation": "Você já terminou de escrever o resumo para seu artigo científico?",
                    "audio": "Вы уже закончили написание аннотации к вашей научной статье?"
          },
          {
                    "speaker": "Professor",
                    "text": "Да, цель, гипотеза и методы исследования уже полностью сформулированы.",
                    "translation": "Sim, o objetivo, a hipótese e os métodos de pesquisa já foram totalmente formulados.",
                    "audio": "Да, цель, гипотеза и методы исследования уже полностью сформулированы."
          }
],
        [
          {
                    "q": "Como se formula o objetivo de um artigo acadêmico em russo?",
                    "options": [
                              "Я хочу написать про...",
                              "Целью данного исследования является...",
                              "Мне интересно узнать...",
                              "Посмотрим, что будет..."
                    ],
                    "correctIndex": 1,
                    "explanation": "Целью исследования является... é a norma padrão."
          },
          {
                    "q": "Qual verbo impessoal expressa \"examina-se / analisa-se\" em teses?",
                    "options": [
                              "Рассматривается",
                              "Думается",
                              "Смотрится",
                              "Читается"
                    ],
                    "correctIndex": 0,
                    "explanation": "Рассматривается = examina-se."
          },
          {
                    "q": "Qual a tradução de \"Аннотация\" num artigo acadêmico?",
                    "options": [
                              "Agradecimentos finais",
                              "Resumo / Abstract",
                              "Lista de compras",
                              "Índice de capítulos"
                    ],
                    "correctIndex": 1,
                    "explanation": "Аннотация = resumo/abstract."
          },
          {
                    "q": "Como se traduz \"Com base nos dados obtidos\"?",
                    "options": [
                              "Без каких-либо данных",
                              "На основе полученных данных",
                              "Несмотря на данные",
                              "До получения данных"
                    ],
                    "correctIndex": 1,
                    "explanation": "На основе полученных данных = com base nos dados obtidos."
          },
          {
                    "q": "Qual substantivo significa \"Conclusão\" em trabalho científico?",
                    "options": [
                              "Введение",
                              "Вывод",
                              "Гипотеза",
                              "Метод"
                    ],
                    "correctIndex": 1,
                    "explanation": "Вывод = conclusão."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_13",
        "Módulo 13: Русская литература II (Dostoiévski e Tolstói)",
        "Análise literária de grandes romances russos (Crime e Castigo, Guerra e Paz).",
        "Analise temas psicológicos e filosóficos da grande prosa russa.",
        "Тварь ли я дрожащая или право имею? — философский вопрос Раскольникова.",
        [
          {
                    "title": "Dilemas Morais Dostoiévskianos",
                    "rule": "A prosa de Fiódor Dostoiévski aborda conceitos éticos centrais: \"Совесть\" (Consciência moral), \"Искупление\" (Redenção/Expiação), e \"Душевные терзания\" (Tormentos da alma).",
                    "formula": "Совесть / Искупление / Душевные терзания",
                    "example": "Раскольников испытывал душевные терзания.",
                    "exampleTranslation": "Raskólnikov sofria tormentos da alma."
          },
          {
                    "title": "A Dialética da Alma de Tolstói",
                    "rule": "Liev Tolstói destaca a evolução moral contínua dos personagens, retratando o conflito entre o dever social e a busca pela verdade interna.",
                    "formula": "Внутренняя эволюция / Поиск истины",
                    "example": "Герои Толстого находятся в поиске истины.",
                    "exampleTranslation": "Os personagens de Tolstói estão em busca da verdade."
          },
          {
                    "title": "Recursos Estilísticos da Prosa Clássica",
                    "rule": "Uso de monólogos interiores profundos (\"внутренний монолог\") e antíteses dramáticas para retratar a psicologia humana.",
                    "formula": "Внутренний монолог / Психологизм",
                    "example": "Роман насыщен внутренними монологами.",
                    "exampleTranslation": "O romance é repleto de monólogos interiores."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Роман",
                    "romaji": "Roman",
                    "translation": "Romance (Gênero literário)",
                    "audio": "Роман",
                    "dica": "Obra narrativa longa."
          },
          {
                    "type": "vocab",
                    "word": "Герой",
                    "romaji": "Geroy",
                    "translation": "Personagem principal / Herói",
                    "audio": "Герой",
                    "dica": "Protagonista da narrativa."
          },
          {
                    "type": "vocab",
                    "word": "Совесть",
                    "romaji": "Sovest",
                    "translation": "Consciência moral",
                    "audio": "Совесть",
                    "dica": "Feminino em -сть."
          },
          {
                    "type": "vocab",
                    "word": "Нравственность",
                    "romaji": "Nravstvennost",
                    "translation": "Moralidade / Ética viva",
                    "audio": "Нравственность",
                    "dica": "Valores morais."
          },
          {
                    "type": "vocab",
                    "word": "Судьба",
                    "romaji": "Sudba",
                    "translation": "Destino / Fado dos personagens",
                    "audio": "Судьба",
                    "dica": "Substantivo feminino."
          }
],
        [
          {
                    "sentence": "Роман Достоевского \"Преступление и наказание\" исследует глубины человеческой души.",
                    "translation": "O romance de Dostoiévski \"Crime e Castigo\" explora as profundezas da alma humana.",
                    "tokens": [
                              "Роман",
                              "Достоевского",
                              "\"Преступление",
                              "и",
                              "наказание\"",
                              "исследует",
                              "глубины",
                              "человеческой",
                              "души."
                    ],
                    "audio": "Роман Достоевского \"Преступление и наказание\" исследует глубины человеческой души."
          },
          {
                    "sentence": "Толстой мастерски показывает внутреннюю эволюцию своих главных героев.",
                    "translation": "Tolstói mostra com maestria a evolução interior de seus personagens principais.",
                    "tokens": [
                              "Толстой",
                              "мастерски",
                              "показывает",
                              "внутреннюю",
                              "эволюцию",
                              "своих",
                              "главных",
                              "героев."
                    ],
                    "audio": "Толстой мастерски показывает внутреннюю эволюцию своих главных героев."
          }
],
        [
          {
                    "speaker": "Student",
                    "text": "Какой главный философский вопрос поднимает Раскольников в романе?",
                    "translation": "Qual a principal pergunta filosófica que Raskólnikov levanta no romance?",
                    "audio": "Какой главный философский вопрос поднимает Раскольников в романе?"
          },
          {
                    "speaker": "Professor",
                    "text": "Он пытается понять границы своей моральной свободы и проверить свою теорию.",
                    "translation": "Ele tenta entender os limites da sua liberdade moral e testar sua teoria.",
                    "audio": "Он пытается понять границы своей моральной свободы и проверить свою теорию."
          }
],
        [
          {
                    "q": "Quem é o autor do célebre romance \"Преступление и наказание\" (Crime e Castigo)?",
                    "options": [
                              "Александр Пушкин",
                              "Фёдор Достоевский",
                              "Лев Толстой",
                              "Антон Чехов"
                    ],
                    "correctIndex": 1,
                    "explanation": "Fiódor Dostoiévski escreveu Crime e Castigo."
          },
          {
                    "q": "O que significa o conceito psicológico \"Совесть\" em Dostoiévski?",
                    "options": [
                              "Fame",
                              "Consciência moral",
                              "Riqueza material",
                              "Conhecimento científico"
                    ],
                    "correctIndex": 1,
                    "explanation": "Совесть = consciência moral."
          },
          {
                    "q": "Quem escreveu o romance épico \"Война и мир\" (Guerra e Paz)?",
                    "options": [
                              "Лев Толстой",
                              "Фёдор Достоевский",
                              "Николай Гоголь",
                              "Иван Тургенев"
                    ],
                    "correctIndex": 0,
                    "explanation": "Liev Tolstói escreveu Guerra e Paz."
          },
          {
                    "q": "O que caracteriza a \"dialética da alma\" na prosa de Tolstói?",
                    "options": [
                              "Foco apenas na descrição de roupas",
                              "A constante evolução moral interna dos personagens",
                              "Ausência de diálogos",
                              "Uso de rimas poéticas"
                    ],
                    "correctIndex": 1,
                    "explanation": "A evolução moral e interna dos personagens."
          },
          {
                    "q": "Como se diz \"Personagem principal\" em russo literário?",
                    "options": [
                              "Писатель",
                              "Главный герой",
                              "Читатель",
                              "Критик"
                    ],
                    "correctIndex": 1,
                    "explanation": "Главный герой = personagem principal."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_14",
        "Módulo 14: Русская поэзия (Poesia Russa: Esenin, Akhmatova, Tsvetaeva)",
        "Análise poética da Era de Prata (Серебряный век) e poesia russa do séc. XX.",
        "Aprecie ritmos, imagens poéticas e recursos estilísticos em versos russos.",
        "Я не жалею, не зову, не плачу... — строки Сергея Есенина.",
        [
          {
                    "title": "Vocabulário de Análise Poética",
                    "rule": "Na apreciação poética russa, usam-se: \"Стихотворение\" (Poema), \"Строфа\" (Estrofe), \"Рифма\" (Rima), e \"Метафора\" (Metáfora).",
                    "formula": "Стихотворение / Строфа / Рифма",
                    "example": "Стихотворение написано точным ямбом.",
                    "exampleTranslation": "O poema foi escrito em jambo preciso."
          },
          {
                    "title": "A Poesia da Era de Prata (Серебряный век)",
                    "rule": "Período poético do início do séc. XX marcado por simbolismo, acmeísmo e expressividade emotiva profunda nas obras de Akhmatova e Tsvetaeva.",
                    "formula": "Серебряный век / Лирика",
                    "example": "Ахматова — яркая представительница Серебряного века.",
                    "exampleTranslation": "Akhmatova é marcante representante da Era de Prata."
          },
          {
                    "title": "Lirismo Natureza e Melancolia em Esenin",
                    "rule": "Sergei Esenin utilizava imagens rurais e melancólicas da natureza russa (\"русская природа\") para expressar sentimentos humanos.",
                    "formula": "Образ природы / Меланхолия",
                    "example": "Есенин воспевал красоту родной природы.",
                    "exampleTranslation": "Esenin cantava a beleza da natureza pátria."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Поэзия",
                    "romaji": "Poeziya",
                    "translation": "Poesia / Arte dos versos",
                    "audio": "Поэзия",
                    "dica": "Lírica e versos."
          },
          {
                    "type": "vocab",
                    "word": "Стих",
                    "romaji": "Stikh",
                    "translation": "Verso / Poema curto",
                    "audio": "Стих",
                    "dica": "Linha ou poema completo."
          },
          {
                    "type": "vocab",
                    "word": "Рифма",
                    "romaji": "Rifma",
                    "translation": "Rima poética",
                    "audio": "Рифма",
                    "dica": "Consoante sonora final."
          },
          {
                    "type": "vocab",
                    "word": "Метафора",
                    "romaji": "Metafora",
                    "translation": "Metáfora figurada",
                    "audio": "Метафора",
                    "dica": "Figura de linguagem."
          },
          {
                    "type": "vocab",
                    "word": "Вдохновение",
                    "romaji": "Vdokhnoveniye",
                    "translation": "Inspiração poética",
                    "audio": "Вдохновение",
                    "dica": "Estado criativo."
          }
],
        [
          {
                    "sentence": "Поэзия Серебряного века отличается глубоким лиризмом и новаторством форм.",
                    "translation": "A poesia da Era de Prata distingue-se por um profundo lirismo e inovação de formas.",
                    "tokens": [
                              "Поэзия",
                              "Серебряного",
                              "века",
                              "отличается",
                              "глубоким",
                              "лиризмом",
                              "и",
                              "новаторством",
                              "форм."
                    ],
                    "audio": "Поэзия Серебряного века отличается глубоким лиризмом и новаторством форм."
          },
          {
                    "sentence": "Сергей Есенин писал невероятно трогательные стихи о русской природе.",
                    "translation": "Sergei Esenin escrevia versos incrivelmente comoventes sobre a natureza russa.",
                    "tokens": [
                              "Сергей",
                              "Есенин",
                              "писал",
                              "невероятно",
                              "трогательные",
                              "стихи",
                              "о",
                              "русской",
                              "природе."
                    ],
                    "audio": "Сергей Есенин писал невероятно трогательные стихи о русской природе."
          }
],
        [
          {
                    "speaker": "Reader A",
                    "text": "Чьи стихи тебе ближе по настроению: Ахматовой или Цветаевой?",
                    "translation": "De quem são os versos mais próximos do seu estado de espírito: Akhmatova ou Tsvetaeva?",
                    "audio": "Чьи стихи тебе ближе по настроению: Ахматовой или Цветаевой?"
          },
          {
                    "speaker": "Reader B",
                    "text": "Мне очень нравится яркая эмоциональная поэзия Марины Цветаевой.",
                    "translation": "Eu gosto muito da poesia viva e emocional de Marina Tsvetaeva.",
                    "audio": "Мне очень нравится яркая эмоциональная поэзия Марины Цветаевой."
          }
],
        [
          {
                    "q": "Como se denomina o influente período poético russo do início do século XX?",
                    "options": [
                              "Золотой век",
                              "Серебряный век (Era de Prata)",
                              "Бронзовый век",
                              "Железный век"
                    ],
                    "correctIndex": 1,
                    "explanation": "Серебряный век (Era de Prata)."
          },
          {
                    "q": "Quem escreveu os versos célebres \"Я не жалею, не зову, не плачу...\"?",
                    "options": [
                              "Сергей Есенин",
                              "Александр Блок",
                              "Владимир Маяковский",
                              "Борис Пастернак"
                    ],
                    "correctIndex": 0,
                    "explanation": "Sergei Esenin."
          },
          {
                    "q": "Qual palavra significa \"Rima\" em russo poético?",
                    "options": [
                              "Строфа",
                              "Рифма",
                              "Ритм",
                              "Аллегория"
                    ],
                    "correctIndex": 1,
                    "explanation": "Рифма = rima."
          },
          {
                    "q": "O que significa a palavra \"Стихотворение\"?",
                    "options": [
                              "Romance em prosa",
                              "Poema / Versos",
                              "Peça de teatro",
                              "Dicionário de palavras"
                    ],
                    "correctIndex": 1,
                    "explanation": "Стихотворение = poema."
          },
          {
                    "q": "Qual poetisa é um dos maiores nomes da Era de Prata ao lado de Anna Akhmatova?",
                    "options": [
                              "Марина Цветаева",
                              "Наталья Гончарова",
                              "Екатерина Великая",
                              "Татьяна Ларина"
                    ],
                    "correctIndex": 0,
                    "explanation": "Marina Tsvetaeva."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_15",
        "Módulo 15: Политика и международные отношения (Relações Internacionais)",
        "Discursos diplomáticos, geopolítica, tratados multilaterais e cooperação.",
        "Debata questões geopolíticas e de relações internacionais com precisão.",
        "Стороны подтвердили намерение укреплять международное сотрудничество.",
        [
          {
                    "title": "Declarações Diplomáticas Oficiais",
                    "rule": "Discursos de relações internacionais empregam estruturas consagradas: \"Стороны подтвердили намерение...\" (As partes confirmaram a intenção de...) e \"На основе взаимного уважения\" (Com base no respeito mútuo).",
                    "formula": "Стороны подтвердили намерение + [Infinitivo]",
                    "example": "Стороны подтвердили намерение развивать диалог.",
                    "exampleTranslation": "As partes confirmaram a intenção de desenvolver o diálogo."
          },
          {
                    "title": "Tratados Bilaterais e Cúpulas (Саммит)",
                    "rule": "Usam-se \"Двустороннее соглашение\" (Acordo bilateral) e \"Саммит\" (Cúpula de líderes) para descrever eventos diplomáticos globais.",
                    "formula": "Двустороннее соглашение / Международный саммит",
                    "example": "На саммите подписано двустороннее соглашение.",
                    "exampleTranslation": "Na cúpula foi assinado um acordo bilateral."
          },
          {
                    "title": "Direito Internacional e Soberania",
                    "rule": "Fórmulas do direito global: \"Суверенитет\" (Soberania), \"В рамках международного права\" (No âmbito do direito internacional).",
                    "formula": "Суверенитет / Международное право",
                    "example": "Решение принято в рамках международного права.",
                    "exampleTranslation": "A decisão foi tomada no âmbito do direito internacional."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Дипломатия",
                    "romaji": "Diplomatiya",
                    "translation": "Diplomacia / Relações externas",
                    "audio": "Дипломатия",
                    "dica": "Arte das negociações globais."
          },
          {
                    "type": "vocab",
                    "word": "Саммит",
                    "romaji": "Sammit",
                    "translation": "Cúpula / Encontro de líderes mundiais",
                    "audio": "Саммит",
                    "dica": "Reunião de chefes de Estado."
          },
          {
                    "type": "vocab",
                    "word": "Суверенитет",
                    "romaji": "Suverenitet",
                    "translation": "Soberania estatal",
                    "audio": "Суверенитет",
                    "dica": "Autonomia política."
          },
          {
                    "type": "vocab",
                    "word": "Договор",
                    "romaji": "Dogovor",
                    "translation": "Tratado internacional / Acordo",
                    "audio": "Договор",
                    "dica": "Tratado de Estado."
          },
          {
                    "type": "vocab",
                    "word": "Соглашение",
                    "romaji": "Soglasheniye",
                    "translation": "Acordo diplomático",
                    "audio": "Соглашение",
                    "dica": "Pacto bilateral ou multilateral."
          }
],
        [
          {
                    "sentence": "На международном саммите в Женеве были подробно обсуждены вопросы глобальной безопасности.",
                    "translation": "Na cúpula internacional em Genebra foram discutidas detalhadamente questões de segurança global.",
                    "tokens": [
                              "На",
                              "международном",
                              "саммите",
                              "в",
                              "Женеве",
                              "были",
                              "подробно",
                              "обсуждены",
                              "вопросы",
                              "глобальной",
                              "безопасности."
                    ],
                    "audio": "На международном саммите в Женеве были подробно обсуждены вопросы глобальной безопасности."
          },
          {
                    "sentence": "Дипломаты подписали новое двустороннее соглашение о торговом сотрудничестве.",
                    "translation": "Os diplomatas assinaram um novo acordo bilateral sobre cooperação comercial.",
                    "tokens": [
                              "Дипломаты",
                              "подписали",
                              "новое",
                              "двустороннее",
                              "соглашение",
                              "о",
                              "торговом",
                              "сотрудничестве."
                    ],
                    "audio": "Дипломаты подписали новое двустороннее соглашение о торговом сотрудничестве."
          }
],
        [
          {
                    "speaker": "Diplomat A",
                    "text": "Каковы основные результаты прошедшего международного саммита?",
                    "translation": "Quais os principais resultados da cúpula internacional realizada?",
                    "audio": "Каковы основные результаты прошедшего международного саммита?"
          },
          {
                    "speaker": "Diplomat B",
                    "text": "Стороны достигли важнейшего соглашения по всем ключевым вопросам.",
                    "translation": "As partes chegaram a um acordo importantíssimo sobre todas as questões chave.",
                    "audio": "Стороны достигли важнейшего соглашения по всем ключевым вопросам."
          }
],
        [
          {
                    "q": "O que significa o termo diplomático \"Двустороннее соглашение\"?",
                    "options": [
                              "Acordo unilateral",
                              "Acordo bilateral",
                              "Cancelamento de tratado",
                              "Guerra declarada"
                    ],
                    "correctIndex": 1,
                    "explanation": "Двустороннее = bilateral (de dois lados)."
          },
          {
                    "q": "Qual o significado da palavra \"Саммит\" em geopolítica?",
                    "options": [
                              "Montanha alta",
                              "Encontro/Cúpula de chefes de Estado",
                              "Eleição local",
                              "Festa popular"
                    ],
                    "correctIndex": 1,
                    "explanation": "Саммит = cúpula diplomática."
          },
          {
                    "q": "Como se diz \"Direito Internacional\" em russo?",
                    "options": [
                              "Внутренний закон",
                              "Международное право",
                              "Гражданский кодекс",
                              "Правила дорожного движения"
                    ],
                    "correctIndex": 1,
                    "explanation": "Международное право = direito internacional."
          },
          {
                    "q": "O que expressa a fórmula \"На основе взаимного уважения\"?",
                    "options": [
                              "Com base no respeito mútuo",
                              "Por força militar",
                              "Sem prestar atenção",
                              "De forma unilateral"
                    ],
                    "correctIndex": 0,
                    "explanation": "На основе взаимного уважения = com base no respeito mútuo."
          },
          {
                    "q": "Qual a tradução de \"Суверенитет\"?",
                    "options": [
                              "Submissão",
                              "Soberania",
                              "Dependência",
                              "Colônia"
                    ],
                    "correctIndex": 1,
                    "explanation": "Суверенитет = soberania."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_16",
        "Módulo 16: Технологии и ИИ (Tecnologia e Inteligência Artificial)",
        "Termos da indústria de TI, inteligência artificial, computação e cibersegurança.",
        "Discuta inovações tecnológicas e sistemas digitais na era da IA.",
        "Искусственный интеллект кардинально меняет подход к обработке данных.",
        [
          {
                    "title": "Terminologia de Inteligência Artificial e Redes Neurais",
                    "rule": "Na área de tecnologia em russo, usam-se \"Искусственный интеллект (ИИ)\" (Inteligência Artificial), \"Нейросеть\" (Rede Neural) e \"Машинное обучение\" (Aprendizado de Máquina).",
                    "formula": "Искусственный интеллект (ИИ) / Нейросеть",
                    "example": "Нейросеть генерирует текст и изображения.",
                    "exampleTranslation": "A rede neural gera texto e imagens."
          },
          {
                    "title": "Processamento de Dados e Algoritmos",
                    "rule": "Para tratar de computação e dados, usam-se \"Обработка данных\" (Processamento de dados), \"База данных\" (Banco de dados) e \"Алгоритм\".",
                    "formula": "Обработка данных / База данных",
                    "example": "Алгоритм ускоряет обработку данных.",
                    "exampleTranslation": "O algoritmo acelera o processamento de dados."
          },
          {
                    "title": "Verbos de Inovação Digital (Внедрять e Оптимизировать)",
                    "rule": "Verbos técnicos de TI: \"внедрять\" (implementar/introduzir) e \"оптимизировать\" (otimizar processos).",
                    "formula": "Внедрять / Оптимизировать + [Acusativo]",
                    "example": "Разработчики внедряют новые методы защиты.",
                    "exampleTranslation": "Os desenvolvedores implementam novos métodos de proteção."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Интеллект",
                    "romaji": "Intellekt",
                    "translation": "Inteligência (Искусственный интеллект = IA)",
                    "audio": "Интеллект",
                    "dica": "ИИ = Inteligência Artificial."
          },
          {
                    "type": "vocab",
                    "word": "Нейросеть",
                    "romaji": "Neyroset",
                    "translation": "Rede Neural / Modelo de IA",
                    "audio": "Нейросеть",
                    "dica": "Rede neural artificial."
          },
          {
                    "type": "vocab",
                    "word": "Алгоритм",
                    "romaji": "Algoritm",
                    "translation": "Algoritmo de computação",
                    "audio": "Алгоритм",
                    "dica": "Sequência lógica."
          },
          {
                    "type": "vocab",
                    "word": "Данные",
                    "romaji": "Danneye",
                    "translation": "Dados / Informações computacionais",
                    "audio": "Данные",
                    "dica": "Substantivo plural."
          },
          {
                    "type": "vocab",
                    "word": "Инновация",
                    "romaji": "Innovatsiya",
                    "translation": "Inovação tecnológica",
                    "audio": "Инновация",
                    "dica": "Novo avanço técnico."
          }
],
        [
          {
                    "sentence": "Искусственный интеллект помогает существенно оптимизировать сложные рабочие процессы.",
                    "translation": "A inteligência artificial ajuda a otimizar substancialmente processos de trabalho complexos.",
                    "tokens": [
                              "Искусственный",
                              "интеллект",
                              "помогает",
                              "существенно",
                              "оптимизировать",
                              "сложные",
                              "рабочие",
                              "процессы."
                    ],
                    "audio": "Искусственный интеллект помогает существенно оптимизировать сложные рабочие процессы."
          },
          {
                    "sentence": "Команда разработчиков успешно внедряет новые алгоритмы машинного обучения.",
                    "translation": "A equipe de desenvolvedores implementa com sucesso novos algoritmos de aprendizado de máquina.",
                    "tokens": [
                              "Команда",
                              "разработчиков",
                              "успешно",
                              "внедряет",
                              "новые",
                              "алгоритмы",
                              "машинного",
                              "обучения."
                    ],
                    "audio": "Команда разработчиков успешно внедряет новые алгоритмы машинного обучения."
          }
],
        [
          {
                    "speaker": "Developer",
                    "text": "Как ваша новая нейросеть справляется с обработкой больших объёмов данных?",
                    "translation": "Como sua nova rede neural lida com o processamento de grandes volumes de dados?",
                    "audio": "Как ваша новая нейросеть справляется с обработкой больших объёмов данных?"
          },
          {
                    "speaker": "Tech Lead",
                    "text": "Она обрабатывает и анализирует информацию в считанные секунды.",
                    "translation": "Ela processa e analisa as informações em questão de segundos.",
                    "audio": "Она обрабатывает и анализирует информацию в считанные секунды."
          }
],
        [
          {
                    "q": "Qual a sigla em russo para Inteligência Artificial?",
                    "options": [
                              "IT",
                              "ИИ (Искусственный интеллект)",
                              "ЭВМ",
                              "СМИ"
                    ],
                    "correctIndex": 1,
                    "explanation": "ИИ = Искусственный интеллект."
          },
          {
                    "q": "Como se diz \"Rede Neural\" em russo de TI?",
                    "options": [
                              "Интернет",
                              "Нейросеть",
                              "Компьютер",
                              "Программа"
                    ],
                    "correctIndex": 1,
                    "explanation": "Нейросеть = rede neural."
          },
          {
                    "q": "O que significa o verbo tecnológico \"Внедрять\"?",
                    "options": [
                              "Deletar código",
                              "Implementar / Introduzir",
                              "Desligar o servidor",
                              "Vender computador"
                    ],
                    "correctIndex": 1,
                    "explanation": "Внедрять = implementar/introduzir."
          },
          {
                    "q": "Qual a tradução de \"Обработка данных\"?",
                    "options": [
                              "Perda de arquivos",
                              "Processamento de dados",
                              "Envio de e-mail",
                              "Impressão de papel"
                    ],
                    "correctIndex": 1,
                    "explanation": "Обработка данных = processamento de dados."
          },
          {
                    "q": "Como se traduz \"Aprendizado de máquina\"?",
                    "options": [
                              "Машинное обучение",
                              "Ручной труд",
                              "Школьный урок",
                              "Быстрая печать"
                    ],
                    "correctIndex": 0,
                    "explanation": "Машинное обучение = machine learning."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_17",
        "Módulo 17: Сложный синтаксис (Sintaxe Avançada e Períodos Compostos)",
        "Orações subordinadas concessivas (Несмотря на то что...), condicionais e causais complexas.",
        "Construa períodos compostos encadeados com elegância sintática.",
        "Несмотря на то что погода была ужасной, мы решили продолжить путь.",
        [
          {
                    "title": "Conjunção Subordinada Concessiva (Несмотря на то что...)",
                    "rule": "Expressa uma concessão formal (\"apesar de que / embora\"). A oração principal ocorre contrariando a expectativa da oração subordinada.",
                    "formula": "Несмотря на то что + [Oração 1], [Oração Principal 2]",
                    "example": "Несмотря на то что шёл дождь, мы пошли гулять.",
                    "exampleTranslation": "Apesar de estar chovendo, fomos passear."
          },
          {
                    "title": "Conjunções Causais Formais (В связи с тем что...)",
                    "rule": "Em textos burocráticos e acadêmicos, \"В связи с тем что...\" (Em razão de que...) e \"Ввиду того что...\" substituem o simples \"Потому что\".",
                    "formula": "В связи с тем что / Ввиду того что + [Oração]",
                    "example": "В связи с тем что рейс отменён, мы остались.",
                    "exampleTranslation": "Em razão de o voo ter sido cancelado, ficamos."
          },
          {
                    "title": "Conjunção Integrante de Propósito (С тем, чтобы...)",
                    "rule": "Substitui \"Чтобы\" em registros de alta formalidade para indicar uma finalidade planejada com cuidado.",
                    "formula": "С тем, чтобы + [Infinitivo / Verbo na forma do passado]",
                    "example": "Документы подписаны с тем, чтобы ускорить проект.",
                    "exampleTranslation": "Os documentos foram assinados com o intuito de acelerar o projeto."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Несмотря",
                    "romaji": "Nesmotrya",
                    "translation": "Apesar de (Несмотря на то что = embora)",
                    "audio": "Несмотря",
                    "dica": "Conjunção concessiva."
          },
          {
                    "type": "vocab",
                    "word": "Связь",
                    "romaji": "Svyaz",
                    "translation": "Relação / Conexão (В связи с = em razão de)",
                    "audio": "Связь",
                    "dica": "Conector de causa formal."
          },
          {
                    "type": "vocab",
                    "word": "Причина",
                    "romaji": "Prichina",
                    "translation": "Causa / Razão motivadora",
                    "audio": "Причина",
                    "dica": "Motivo de um fato."
          },
          {
                    "type": "vocab",
                    "word": "Следствие",
                    "romaji": "Sledstviye",
                    "translation": "Consequência / Efeito decorrente",
                    "audio": "Следствие",
                    "dica": "Resultado de uma causa."
          },
          {
                    "type": "vocab",
                    "word": "Условие",
                    "romaji": "Usloviye",
                    "translation": "Condição necessária",
                    "audio": "Условие",
                    "dica": "Premissa condicional."
          }
],
        [
          {
                    "sentence": "Несмотря на то что проект был чрезвычайно сложным, мы завершили его точно в срок.",
                    "translation": "Apesar de o projeto ser extremamente difícil, nós o concluímos exatamente no prazo.",
                    "tokens": [
                              "Несмотря",
                              "на",
                              "то",
                              "что",
                              "проект",
                              "был",
                              "чрезвычайно",
                              "сложным,",
                              "мы",
                              "завершили",
                              "его",
                              "точно",
                              "в",
                              "срок."
                    ],
                    "audio": "Несмотря на то что проект был чрезвычайно сложным, мы завершили его точно в срок."
          },
          {
                    "sentence": "В связи с тем что начался сильный ливень, культурное мероприятие перенесли на завтра.",
                    "translation": "Em razão de ter começado um forte temporal, o evento cultural foi adiado para amanhã.",
                    "tokens": [
                              "В",
                              "связи",
                              "с",
                              "тем",
                              "что",
                              "начался",
                              "сильный",
                              "ливень,",
                              "культурное",
                              "мероприятие",
                              "перенесли",
                              "на",
                              "завтра."
                    ],
                    "audio": "В связи с тем что начался сильный ливень, культурное мероприятие перенесли на завтра."
          }
],
        [
          {
                    "speaker": "Colleague 1",
                    "text": "Вы пойдёте на вечернюю встречу, несмотря на плохую погоду?",
                    "translation": "Você vai à reunião noturna, apesar do mau tempo?",
                    "audio": "Вы пойдёте на вечернюю встречу, несмотря на плохую погоду?"
          },
          {
                    "speaker": "Colleague 2",
                    "text": "Да, несмотря на то что идёт дождь, встреча обязательно состоится.",
                    "translation": "Sim, apesar de estar chovendo, a reunião com certeza ocorrerá.",
                    "audio": "Да, несмотря на то что идёт дождь, встреча обязательно состоится."
          }
],
        [
          {
                    "q": "Qual estrutura sintática significa \"Apesar de que / Embora\"?",
                    "options": [
                              "Потому что",
                              "Несмотря на то что...",
                              "Так как",
                              "Для того чтобы"
                    ],
                    "correctIndex": 1,
                    "explanation": "Несмотря на то что... = concessiva (embora/apesar de)."
          },
          {
                    "q": "O que expressa a conjunção formal \"В связи с тем что...\"?",
                    "options": [
                              "Relação causal formal (\"Em razão de que...\")",
                              "Tempo futuro",
                              "Dúvida extrema",
                              "Negação total"
                    ],
                    "correctIndex": 0,
                    "explanation": "В связи с тем что... = em razão de."
          },
          {
                    "q": "Qual conjunção substitui \"Чтобы\" em registros formais de propósito?",
                    "options": [
                              "Ввиду того что",
                              "С тем, чтобы...",
                              "Следственно",
                              "Хотя"
                    ],
                    "correctIndex": 1,
                    "explanation": "С тем, чтобы... = com a finalidade de."
          },
          {
                    "q": "Qual a tradução de \"Следствие\" em análise sintática?",
                    "options": [
                              "Causa",
                              "Consequência / Efeito",
                              "Condição",
                              "Dúvida"
                    ],
                    "correctIndex": 1,
                    "explanation": "Следствие = consequência."
          },
          {
                    "q": "Traduza: \"Несмотря на сложности, мы победили.\"",
                    "options": [
                              "Por causa das dificuldades perdemo",
                              "Apesar das dificuldades, nós vencemos",
                              "Sem dificuldades não há vitória",
                              "Dificuldades amanhã"
                    ],
                    "correctIndex": 1,
                    "explanation": "Несмотря на = apesar de."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_18",
        "Módulo 18: Стилистика русского языка (Estilística e Registros de Fala)",
        "Diferenciação precisa entre os registros formal (официально-деловой), científico, publicitário e coloquial (разговорная речь).",
        "Adapte seu discurso ao ambiente social com adequação estilística impecável.",
        "В официальной обстановке используйте книжную лексику, а в дружеской — разговорную.",
        [
          {
                    "title": "Registro Oficial-Corporativo (Официально-деловой стиль)",
                    "rule": "Estilo de leis, contratos e e-mails formais. Caracteriza-se por concisão, ausência de emotividade e uso de jargão burocrático (\"настоящий договор\", \"уведомлять\").",
                    "formula": "Официально-деловой стиль / Книжная лексика",
                    "example": "Уведомляем вас о принятом решении.",
                    "exampleTranslation": "Notificamos-lhe sobre a decisão tomada."
          },
          {
                    "title": "Registro Acadêmico e Jornalístico (Научный и публицистический)",
                    "rule": "Usado em teses e notícias. Foco na objetividade, clareza lógica e léxico erudito (\"согласно исследованию\", \"по данным экспертов\").",
                    "formula": "Научный стиль / Публицистика",
                    "example": "Согласно исследованию, факт подтверждён.",
                    "exampleTranslation": "Conforme o estudo, o fato foi confirmado."
          },
          {
                    "title": "Registro Coloquial (Разговорный стиль)",
                    "rule": "Usado entre amigos e familiares. Permite diminutivos, abreviações e palavras emotivas (\"привет\", \"круто\", \"щас\").",
                    "formula": "Разговорный стиль / Эмоциональность",
                    "example": "Привет! Как делишки?",
                    "exampleTranslation": "Oi! Como vão as coisas?"
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Стиль",
                    "romaji": "Stil",
                    "translation": "Estilo / Registro sociolinguístico",
                    "audio": "Стиль",
                    "dica": "Adequação ao contexto."
          },
          {
                    "type": "vocab",
                    "word": "Официальный",
                    "romaji": "Ofitsialnyy",
                    "translation": "Formal / Oficial / Erudito",
                    "audio": "Официальный",
                    "dica": "Usado em corporações e leis."
          },
          {
                    "type": "vocab",
                    "word": "Разговорный",
                    "romaji": "Razgovornyy",
                    "translation": "Coloquial / Informal / Cotidiano",
                    "audio": "Разговорный",
                    "dica": "Usado entre amigos."
          },
          {
                    "type": "vocab",
                    "word": "Контекст",
                    "romaji": "Kontekst",
                    "translation": "Contexto de comunicação",
                    "audio": "Контекст",
                    "dica": "Situação social de fala."
          },
          {
                    "type": "vocab",
                    "word": "Лексика",
                    "romaji": "Leksika",
                    "translation": "Léxico / Vocabulário selecionado",
                    "audio": "Лексика",
                    "dica": "Conjunto de palavras."
          }
],
        [
          {
                    "sentence": "В официальных документах используется строго официально-деловой стиль речи.",
                    "translation": "Em documentos oficiais usa-se um estilo de fala estritamente corporativo-oficial.",
                    "tokens": [
                              "В",
                              "официальных",
                              "документах",
                              "используется",
                              "строго",
                              "официально-деловой",
                              "стиль",
                              "речи."
                    ],
                    "audio": "В официальных документах используется строго официально-деловой стиль речи."
          },
          {
                    "sentence": "В дружеской непринуждённой беседе вполне уместен разговорный стиль речи.",
                    "translation": "Numa conversa amigável e descontraída é totalmente apropriado o estilo coloquial de fala.",
                    "tokens": [
                              "В",
                              "дружеской",
                              "непринуждённой",
                              "беседе",
                              "вполне",
                              "уместен",
                              "разговорный",
                              "стиль",
                              "речи."
                    ],
                    "audio": "В дружеской непринуждённой беседе вполне уместен разговорный стиль речи."
          }
],
        [
          {
                    "speaker": "Student",
                    "text": "Какая основная разница между книжной и разговорной лексикой?",
                    "translation": "Qual a principal diferença entre o vocabulário erudito e o coloquial?",
                    "audio": "Какая основная разница между книжной и разговорной лексикой?"
          },
          {
                    "speaker": "Teacher",
                    "text": "Книжная лексика используется в документах, а разговорная — в повседневном общении.",
                    "translation": "O vocabulário erudito é usado em documentos, e o coloquial na comunicação cotidiana.",
                    "audio": "Книжная лексика используется в документах, а разговорная — в повседневном общении."
          }
],
        [
          {
                    "q": "Qual registro de fala russa é exigido em contratos jurídicos e e-mails de trabalho?",
                    "options": [
                              "Разговорный стиль",
                              "Официально-деловой стиль",
                              "Поэтический стиль",
                              "Детский стиль"
                    ],
                    "correctIndex": 1,
                    "explanation": "Официально-деловой стиль."
          },
          {
                    "q": "O que caracteriza o estilo coloquial (Разговорный стиль)?",
                    "options": [
                              "Uso de fórmulas latinas rígidas",
                              "Expressividade, diminutivos e informalidade",
                              "Proibição de usar verbos",
                              "Texto apenas impresso"
                    ],
                    "correctIndex": 1,
                    "explanation": "Expressividade e informalidade cotidiana."
          },
          {
                    "q": "Qual registro é recomendado para teses e relatórios científicos?",
                    "options": [
                              "Разговорный",
                              "Научный стиль (Estilo Acadêmico)",
                              "Сленг",
                              "Жаргон"
                    ],
                    "correctIndex": 1,
                    "explanation": "Научный стиль = estilo acadêmico."
          },
          {
                    "q": "O que significa o conceito linguístico \"Книжная лексика\"?",
                    "options": [
                              "Vocabulário erudito/escrito padrão",
                              "Nomes de livrarias",
                              "Linguagem infantil",
                              "Gírias de rua"
                    ],
                    "correctIndex": 0,
                    "explanation": "Книжная лексика = vocabulário culto/escrito."
          },
          {
                    "q": "Como se diz \"Registro / Estilo de fala\" em russo?",
                    "options": [
                              "Стиль речи",
                              "Вид глагола",
                              "Падеж существительного",
                              "Буква алфавита"
                    ],
                    "correctIndex": 0,
                    "explanation": "Стиль речи = registro de fala."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_19",
        "Módulo 19: Идиоматика высокого уровня (Expressões Idiomáticas Avançadas)",
        "Provérbios, locuções idiomáticas e metáforas consolidadas da língua russa.",
        "Utilize metáforas e provérbios populares russos no contexto exato.",
        "Семь раз отмерь, один раз отрежь — мудрая русская пословица.",
        [
          {
                    "title": "Provérbio de Cautela e Planejamento",
                    "rule": "O ditado popular \"Семь раз отмерь, один раз отрежь\" (Meça sete vezes, corte uma) aconselha a refletir e planejar com extremo cuidado antes de tomar uma decisão irrevogável.",
                    "formula": "Семь раз отмерь, один раз отрежь",
                    "example": "Не спеши с решением: семь раз отмерь, один раз отрежь.",
                    "exampleTranslation": "Não se apresse na decisão: meça 7 vezes, corte 1."
          },
          {
                    "title": "Provérbio sobre Esforço e Conquista",
                    "rule": "O ditado \"Без труда не выловишь и рыбу из пруда\" (Sem trabalho não se tira nem peixe do lago) ensina que nenhuma conquista expressiva vem sem esforço dedicado.",
                    "formula": "Без труда не выловишь и рыбу из пруда",
                    "example": "Нужно учиться: без труда не выловишь и рыбу из пруда.",
                    "exampleTranslation": "É preciso estudar: sem esforço não se pesca peixe."
          },
          {
                    "title": "Locuções Idiomáticas Frequentes",
                    "rule": "Usam-se expressões consolidadas como \"Делать из мухи слона\" (Fazer de uma mosca um elefante / tempestade em copo d'água) e \"Бить баклуши\" (Vadiar / Ficar sem fazer nada).",
                    "formula": "Делать из мухи слона / Бить баклуши",
                    "example": "Хватит бить баклуши, пора работать!",
                    "exampleTranslation": "Chega de vadiar, hora de trabalhar!"
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Пословица",
                    "romaji": "Poslovitsa",
                    "translation": "Provérbio / Ditado popular tradicional",
                    "audio": "Пословица",
                    "dica": "Sabedoria popular acumulada."
          },
          {
                    "type": "vocab",
                    "word": "Идиома",
                    "romaji": "Idioma",
                    "translation": "Expressão idiomática figurada",
                    "audio": "Идиома",
                    "dica": "Frase com sentido metafórico."
          },
          {
                    "type": "vocab",
                    "word": "Мудрость",
                    "romaji": "Mudrost",
                    "translation": "Sabedoria moral",
                    "audio": "Мудрость",
                    "dica": "Feminino em -сть."
          },
          {
                    "type": "vocab",
                    "word": "Смысл",
                    "romaji": "Smysl",
                    "translation": "Sentido / Significado profundo",
                    "audio": "Смысл",
                    "dica": "Essência da expressão."
          },
          {
                    "type": "vocab",
                    "word": "Метафора",
                    "romaji": "Metafora",
                    "translation": "Metáfora / Comparação implícita",
                    "audio": "Метафора",
                    "dica": "Figura de linguagem."
          }
],
        [
          {
                    "sentence": "Не стоит делать из мухи слона, эта небольшая проблема легко решается.",
                    "translation": "Não vale a pena fazer tempestade em copo d'água, este pequeno problema se resolve facilmente.",
                    "tokens": [
                              "Не",
                              "стоит",
                              "делать",
                              "из",
                              "мухи",
                              "слона,",
                              "эта",
                              "небольшая",
                              "проблема",
                              "легко",
                              "решается."
                    ],
                    "audio": "Не стоит делать из мухи слона, эта небольшая проблема легко решается."
          },
          {
                    "sentence": "Бабушка часто повторяла мудрую пословицу: Семь раз отмерь, один раз отрежь.",
                    "translation": "A vovó costumava repetir o sábio provérbio: meça sete vezes, corte uma.",
                    "tokens": [
                              "Бабушка",
                              "часто",
                              "повторяла",
                              "мудрую",
                              "пословицу:",
                              "Семь",
                              "раз",
                              "отмерь,",
                              "один",
                              "раз",
                              "отрежь."
                    ],
                    "audio": "Бабушка часто повторяла мудрую пословицу: Семь раз отмерь, один раз отрежь."
          }
],
        [
          {
                    "speaker": "Friend 1",
                    "text": "Зачем ты так сильно переживаешь из-за этой мелкой ошибки?",
                    "translation": "Por que você está se preocupando tanto por esse erro pequeno?",
                    "audio": "Зачем ты так сильно переживаешь из-за этой мелкой ошибки?"
          },
          {
                    "speaker": "Friend 2",
                    "text": "Ты прав, я опять делаю из мухи слона и преувеличиваю всё.",
                    "translation": "Você tem razão, estou de novo fazendo tempestade em copo d'água e exagerando tudo.",
                    "audio": "Ты прав, я опять делаю из мухи слона и преувеличиваю всё."
          }
],
        [
          {
                    "q": "Qual provérbio russo recomenda planejar cuidadosamente antes de agir?",
                    "options": [
                              "Семь раз отмерь, один раз отрежь",
                              "Век живи — век учись",
                              "Яблоко от яблони не далеко падает",
                              "Тише едешь — дальше будешь"
                    ],
                    "correctIndex": 0,
                    "explanation": "Семь раз отмерь, один раз отрежь."
          },
          {
                    "q": "O que significa a locução idiomática \"Делать из мухи слона\"?",
                    "options": [
                              "Criar elefantes na fazenda",
                              "Fazer tempestade em copo d'água / Exagerar um problema",
                              "Caçar insetos no verão",
                              "Comprar animais raros"
                    ],
                    "correctIndex": 1,
                    "explanation": "Делать из мухи слона = exagerar um detalhe pequeno."
          },
          {
                    "q": "Qual o significado de \"Без труда не выловишь и рыбу из пруда\"?",
                    "options": [
                              "Peixes gostam de água limpa",
                              "Nenhuma conquista vem sem trabalho e esforço",
                              "É proibido pescar no lago",
                              "Comer peixe faz bem"
                    ],
                    "correctIndex": 1,
                    "explanation": "Ensina o valor do trabalho dedicado."
          },
          {
                    "q": "O que significa a locução popular \"Бить баклуши\"?",
                    "options": [
                              "Trabalhar duro",
                              "Vadiar / Ficar sem fazer nada útil",
                              "Tocar bateria em shows",
                              "Cozinhar sopa"
                    ],
                    "correctIndex": 1,
                    "explanation": "Бить баклуши = vadiar."
          },
          {
                    "q": "Qual a tradução de \"Пословица\"?",
                    "options": [
                              "Provérbio / Ditado popular",
                              "Regra de gramática",
                              "Verbo de ação",
                              "Título de livro"
                    ],
                    "correctIndex": 0,
                    "explanation": "Пословица = provérbio."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_20",
        "Módulo 20: Публичное выступление (Oratória e Discursos Públicos)",
        "Técnicas de oratória, estrutura de apresentações e controle da atenção do público.",
        "Faça uma apresentação em público em russo com confiança e clareza.",
        "Уважаемая аудитория, позвольте представить вам результаты нашего проекта.",
        [
          {
                    "title": "Abertura Formal de Discurso Público",
                    "rule": "Discursos e apresentações perante um auditório abrem-se com \"Уважаемая аудитория...\" (Prezado público...) e \"Позвольте представить вам...\" (Permitam-me apresentar-lhes...).",
                    "formula": "Уважаемая аудитория, позвольте представить + [Acusativo]",
                    "example": "Позвольте представить тему нашей презентации.",
                    "exampleTranslation": "Permitam-me apresentar o tema da nossa apresentação."
          },
          {
                    "title": "Encadeamento Oratório de Pontos (Во-первых...)",
                    "rule": "Estruturação lógica de tópicos em apresentações: \"Во-первых...\" (Em 1º lugar...), \"Во-вторых...\" (Em 2º lugar...), e a transição \"Перейдём к следующему пункту\" (Passemos ao próximo ponto).",
                    "formula": "Во-первых, ... Во-вторых, ... / Перейдём к...",
                    "example": "Перейдём к следующему пункту доклада.",
                    "exampleTranslation": "Passemos ao próximo ponto do relatório."
          },
          {
                    "title": "Encerramento e Sessão de Perguntas",
                    "rule": "Fórmulas de fechamento polido: \"Благодарю за внимание!\" (Obrigado pela atenção!) e \"Я с удовольствием отвечу на ваши вопросы\" (Responderei com prazer a suas perguntas).",
                    "formula": "Благодарю за внимание! / Отвечу на ваши вопросы",
                    "example": "Благодарю за внимание! Жду ваших вопросов.",
                    "exampleTranslation": "Obrigado pela atenção! Fico no aguardo de suas perguntas."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Выступление",
                    "romaji": "Vystupleniye",
                    "translation": "Discurso / Apresentação em público",
                    "audio": "Выступление",
                    "dica": "Fala perante audiência."
          },
          {
                    "type": "vocab",
                    "word": "Аудитория",
                    "romaji": "Auditoriya",
                    "translation": "Auditório / Público ouvinte",
                    "audio": "Аудитория",
                    "dica": "Plateia presencial ou online."
          },
          {
                    "type": "vocab",
                    "word": "Презентация",
                    "romaji": "Prezentatsiya",
                    "translation": "Apresentação visual de slides",
                    "audio": "Презентация",
                    "dica": "Exposição de projeto."
          },
          {
                    "type": "vocab",
                    "word": "Внимание",
                    "romaji": "Vnimaniye",
                    "translation": "Atenção (Благодарю за внимание!)",
                    "audio": "Внимание",
                    "dica": "Foco do público."
          },
          {
                    "type": "vocab",
                    "word": "Доклад",
                    "romaji": "Doklad",
                    "translation": "Palestra / Relatório oral formal",
                    "audio": "Доклад",
                    "dica": "Exposição de tema."
          }
],
        [
          {
                    "sentence": "Позвольте представить вам результаты нашего масштабного научного проекта.",
                    "translation": "Permitam-me apresentar-lhes os resultados do nosso projeto científico de grande escala.",
                    "tokens": [
                              "Позвольте",
                              "представить",
                              "вам",
                              "результаты",
                              "нашего",
                              "масштабного",
                              "научного",
                              "проекта."
                    ],
                    "audio": "Позвольте представить вам результаты нашего масштабного научного проекта."
          },
          {
                    "sentence": "В заключение своего выступления хочу искренне поблагодарить всех за внимание.",
                    "translation": "Em conclusão do meu discurso quero agradecer sinceramente a todos pela atenção.",
                    "tokens": [
                              "В",
                              "заключение",
                              "своего",
                              "выступления",
                              "хочу",
                              "искренне",
                              "поблагодарить",
                              "всех",
                              "за",
                              "внимание."
                    ],
                    "audio": "В заключение своего выступления хочу искренне поблагодарить всех за внимание."
          }
],
        [
          {
                    "speaker": "Speaker",
                    "text": "Здравствуйте! Сегодня я расскажу вам о развитии технологий в нашей стране.",
                    "translation": "Olá! Hoje vou falar-lhes sobre o desenvolvimento de tecnologias em nosso país.",
                    "audio": "Здравствуйте! Сегодня я расскажу вам о развитии технологий в нашей стране."
          },
          {
                    "speaker": "Audience",
                    "text": "Мы с большим удовольствием послушаем ваш интереснейший доклад.",
                    "translation": "Nós ouviremos com muito prazer sua palestra interessantíssima.",
                    "audio": "Мы с большим удовольствием послушаем ваш интереснейший доклад."
          }
],
        [
          {
                    "q": "Como abrir formalmente um discurso em auditório em russo?",
                    "options": [
                              "Всем привет, короче...",
                              "Уважаемая аудитория, позвольте представить...",
                              "Я тут постоять пришёл...",
                              "Тишина в зале!"
                    ],
                    "correctIndex": 1,
                    "explanation": "Уважаемая аудитория, позвольте представить..."
          },
          {
                    "q": "Qual frase é usada no encerramento de palestras ao público?",
                    "options": [
                              "Благодарю за внимание!",
                              "Идите домой!",
                              "Конец фильма!",
                              "Я всё сказал."
                    ],
                    "correctIndex": 0,
                    "explanation": "Благодарю за внимание! = Obrigado pela atenção!"
          },
          {
                    "q": "Como indicar a mudança para o próximo slide da apresentação?",
                    "options": [
                              "Забудьте прошлый слайд",
                              "Перейдём к следующему пункту",
                              "Я всё выключу",
                              "Слайдов больше нет"
                    ],
                    "correctIndex": 1,
                    "explanation": "Перейдём к следующему пункту/слайду."
          },
          {
                    "q": "Qual a tradução de \"Доклад\"?",
                    "options": [
                              "Carta pessoal",
                              "Palestra / Relatório oral",
                              "Livro impresso",
                              "Notícia de jornal"
                    ],
                    "correctIndex": 1,
                    "explanation": "Доклад = palestra/relatório oral."
          },
          {
                    "q": "Como colocar-se à disposição para perguntas ao final?",
                    "options": [
                              "Не задавайте мне вопросов",
                              "Я с удовольствием отвечу на ваши вопросы",
                              "Вопросы запрещены",
                              "Я тороплюсь"
                    ],
                    "correctIndex": 1,
                    "explanation": "Я с удовольствием отвечу на ваши вопросы."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_21",
        "Módulo 21: Симуляция интервью (Simulação de Entrevista na Mídia Nativa)",
        "Técnicas de resposta sob pressão, entrevistas em rádio/TV e posicionamento pessoal.",
        "Responda a perguntas complexas e provocativas em entrevistas de mídia.",
        "Это отличный вопрос, и я хотел бы прокомментировать его подробно.",
        [
          {
                    "title": "Ganhar Tempo de Reflexão Elegante",
                    "rule": "Em entrevistas ao vivo sob pressão, ganha-se tempo para estruturar a resposta com frases de valorização: \"Это действительно важный вопрос...\" (Esta é realmente uma pergunta importante...) e \"Спасибо за интересную тему...\".",
                    "formula": "Это действительно важный вопрос... / Спасибо за вопрос...",
                    "example": "Это действительно актуальный вопрос.",
                    "exampleTranslation": "Esta é realmente uma pergunta atual."
          },
          {
                    "title": "Reformular Perguntas Hostis com Polidez",
                    "rule": "Para suavizar uma provocação, reformula-se o foco com \"Я бы сформулировал это иначе...\" (Eu formularia isto de outra forma...) e \"Главный аспект заключается в том, что...\".",
                    "formula": "Я бы сформулировал это иначе, ...",
                    "example": "Я бы сформулировал этот вопрос иначе.",
                    "exampleTranslation": "Eu formularia esta pergunta de outra forma."
          },
          {
                    "title": "Síntese de Posicionamento Pessoal (Подводя итог)",
                    "rule": "Encerra-se a resposta em entrevista sintetizando a postura pessoal com \"Подводя итог, хочу подчеркнуть...\" (Sumarizando, quero destacar...).",
                    "formula": "Подводя итог, хочу подчеркнуть, что...",
                    "example": "Подводя итог, хочу подчеркнуть, что наша позиция неизменна.",
                    "exampleTranslation": "Resumindo, quero enfatizar que nossa posição permanece inalterada."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Интервью",
                    "romaji": "Intervyu",
                    "translation": "Entrevista de mídia (TV/Rádio)",
                    "audio": "Интервью",
                    "dica": "Substantivo neutro indeclinável."
          },
          {
                    "type": "vocab",
                    "word": "Вопрос",
                    "romaji": "Vopros",
                    "translation": "Pergunta formulada",
                    "audio": "Вопрос",
                    "dica": "Interrogação."
          },
          {
                    "type": "vocab",
                    "word": "Ответ",
                    "romaji": "Otvet",
                    "translation": "Resposta / Esclarecimento dado",
                    "audio": "Ответ",
                    "dica": "Réplica à pergunta."
          },
          {
                    "type": "vocab",
                    "word": "Позиция",
                    "romaji": "Pozitsiya",
                    "translation": "Posicionamento / Postura oficial",
                    "audio": "Позиция",
                    "dica": "Ponto de vista defendido."
          },
          {
                    "type": "vocab",
                    "word": "Комментарий",
                    "romaji": "Kommentariy",
                    "translation": "Comentário / Esclarecimento",
                    "audio": "Комментарий",
                    "dica": "Declaração aos repórteres."
          }
],
        [
          {
                    "sentence": "Это очень актуальный вопрос, и я с радостью подробно прокомментирую его.",
                    "translation": "Esta é uma pergunta muito atual, e comentá-la-ei detalhadamente com prazer.",
                    "tokens": [
                              "Это",
                              "очень",
                              "актуальный",
                              "вопрос,",
                              "и",
                              "я",
                              "с",
                              "радостью",
                              "подробно",
                              "прокомментирую",
                              "его."
                    ],
                    "audio": "Это очень актуальный вопрос, и я с радостью подробно прокомментирую его."
          },
          {
                    "sentence": "Подводя итог беседе, хочу сказать, что мы полностью достигли намеченной цели.",
                    "translation": "Resumindo a conversa, quero dizer que alcançamos totalmente o objetivo traçado.",
                    "tokens": [
                              "Подводя",
                              "итог",
                              "беседе,",
                              "хочу",
                              "сказать,",
                              "что",
                              "мы",
                              "полностью",
                              "достигли",
                              "намеченной",
                              "цели."
                    ],
                    "audio": "Подводя итог беседе, хочу сказать, что мы полностью достигли намеченной цели."
          }
],
        [
          {
                    "speaker": "Reporter",
                    "text": "Как вы прокомментируете резкую критику вашего нового проекта в прессе?",
                    "translation": "Como você comenta as duras críticas ao seu novo projeto na imprensa?",
                    "audio": "Как вы прокомментируете резкую критику вашего нового проекта в прессе?"
          },
          {
                    "speaker": "Guest",
                    "text": "Это важный вопрос, и я готов спокойно объяснить нашу позицию.",
                    "translation": "Esta é uma pergunta importante, e estou pronto para explicar calmamente nossa posição.",
                    "audio": "Это важный вопрос, и я готов спокойно объяснить нашу позицию."
          }
],
        [
          {
                    "q": "Qual frase é útil para ganhar tempo de reflexão elegante numa entrevista?",
                    "options": [
                              "Без комментариев!",
                              "Это действительно важный вопрос...",
                              "Не ваше дело!",
                              "Я забыл русский язык"
                    ],
                    "correctIndex": 1,
                    "explanation": "Это действительно важный вопрос... ganha tempo."
          },
          {
                    "q": "Como reformular polidamente uma pergunta provocativa em rádio/TV?",
                    "options": [
                              "Я бы сформулировал это иначе...",
                              "Вы не умеете задавать вопросы!",
                              "Молчите!",
                              "Следующий вопрос!"
                    ],
                    "correctIndex": 0,
                    "explanation": "Я бы сформулировал это иначе..."
          },
          {
                    "q": "Qual expressão introduz o resumo final de uma resposta de entrevista?",
                    "options": [
                              "Прежде всего",
                              "Подводя итог...",
                              "Никогда",
                              "К счастью"
                    ],
                    "correctIndex": 1,
                    "explanation": "Подводя итог... = sumarizando."
          },
          {
                    "q": "Como dizer \"Comentarei com prazer\" em russo formal?",
                    "options": [
                              "Я с радостью прокомментирую",
                              "Я не буду говорить",
                              "Мне всё равно",
                              "Спросите другого"
                    ],
                    "correctIndex": 0,
                    "explanation": "Я с радостью прокомментирую."
          },
          {
                    "q": "Qual substantivo significa \"Posicionamento / Postura\"?",
                    "options": [
                              "Позиция",
                              "Сумма",
                              "Ошибка",
                              "Улица"
                    ],
                    "correctIndex": 0,
                    "explanation": "Позиция = posicionamento."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_22",
        "Módulo 22: Эссе и публицистика (Redação de Ensaios Pessoais)",
        "Redação de ensaios opinativos, artigos de opinião (колонка) e sínteses de argumentos.",
        "Escreva ensaios bem estruturados defendendo sua tese com evidências.",
        "С одной стороны, технологический прогресс неизбежен, но с другой — требует осторожности.",
        [
          {
                    "title": "Contraponto Argumentativo (С одной стороны..., с другой стороны...)",
                    "rule": "Em ensaios e artigos de opinião, pesa-se os prós e contras com a antítese \"С одной стороны...\" (Por um lado...) e \"С другой стороны...\" (Por outro lado...).",
                    "formula": "С одной стороны, ... но с другой стороны, ...",
                    "example": "С одной стороны, это плюсы, но с другой — минусы.",
                    "exampleTranslation": "Por um lado são prós, por outro contras."
          },
          {
                    "title": "Encadeamento Lógico de Argumentos",
                    "rule": "Para encadear premissas no ensaio: \"Во-первых...\" (Em 1º lugar...), \"Во-вторых...\" (Em 2º lugar...), e a conclusão \"Следовательно...\" (Consequentemente...).",
                    "formula": "Во-первых, ... Во-вторых, ... Следовательно, ...",
                    "example": "Следовательно, выбор очевиден.",
                    "exampleTranslation": "Consequentemente, a escolha é óbvia."
          },
          {
                    "title": "Síntese Reflexiva da Tese",
                    "rule": "O parágrafo final do ensaio sintetiza os argumentos com \"Таким образом, мы приходим к выводу, что...\" (Deste modo, chegamos à conclusão de que...).",
                    "formula": "Таким образом, мы приходим к выводу, что...",
                    "example": "Таким образом, тезис подтверждён.",
                    "exampleTranslation": "Deste modo, a tese é confirmada."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Эссе",
                    "romaji": "Esse",
                    "translation": "Ensaio pessoal / Texto opinativo",
                    "audio": "Эссе",
                    "dica": "Substantivo neutro indeclinável."
          },
          {
                    "type": "vocab",
                    "word": "Тезис",
                    "romaji": "Tezis",
                    "translation": "Tese / Proposição defendida",
                    "audio": "Тезис",
                    "dica": "Ideia central do ensaio."
          },
          {
                    "type": "vocab",
                    "word": "Аргумент",
                    "romaji": "Argument",
                    "translation": "Argumento / Prova fundamentada",
                    "audio": "Аргумент",
                    "dica": "Sustentação da tese."
          },
          {
                    "type": "vocab",
                    "word": "Контраргумент",
                    "romaji": "Kontrargument",
                    "translation": "Contra-argumento / Refutação",
                    "audio": "Контраргумент",
                    "dica": "Objeção à tese."
          },
          {
                    "type": "vocab",
                    "word": "Вывод",
                    "romaji": "Vyvod",
                    "translation": "Conclusão final do texto",
                    "audio": "Вывод",
                    "dica": "Fechamento do raciocínio."
          }
],
        [
          {
                    "sentence": "С одной стороны, этот проект экономит время, но с другой — требует больших финансовых затрат.",
                    "translation": "Por um lado, este projeto economiza tempo, mas por outro requer custos financeiros elevados.",
                    "tokens": [
                              "С",
                              "одной",
                              "стороны,",
                              "этот",
                              "проект",
                              "экономит",
                              "время,",
                              "но",
                              "с",
                              "другой",
                              "—",
                              "требует",
                              "больших",
                              "финансовых",
                              "затрат."
                    ],
                    "audio": "С одной стороны, этот проект экономит время, но с другой — требует больших финансовых затрат."
          },
          {
                    "sentence": "Таким образом, в процессе исследования автор приходит к убедительному выводу.",
                    "translation": "Deste modo, no processo de pesquisa o autor chega a uma conclusão convincente.",
                    "tokens": [
                              "Таким",
                              "образом,",
                              "в",
                              "процессе",
                              "исследования",
                              "автор",
                              "приходит",
                              "к",
                              "убедительному",
                              "выводу."
                    ],
                    "audio": "Таким образом, в процессе исследования автор приходит к убедительному выводу."
          }
],
        [
          {
                    "speaker": "Editor",
                    "text": "Ваше эссе содержит отличные и глубокие аргументы в защиту главной темы.",
                    "translation": "Seu ensaio contém excelentes e profundos argumentos em defesa do tema principal.",
                    "audio": "Ваше эссе содержит отличные и глубокие аргументы в защиту главной темы."
          },
          {
                    "speaker": "Writer",
                    "text": "Спасибо, я старался максимально логично выстроить структуру каждого абзаца.",
                    "translation": "Obrigado, procurei construir de forma o mais lógica possível a estrutura de cada parágrafo.",
                    "audio": "Спасибо, я старался максимально логично выстроить структуру каждого абзаца."
          }
],
        [
          {
                    "q": "Qual par de conectores expressa contraponto (\"Por um lado..., por outro lado...\")?",
                    "options": [
                              "Вчера..., завтра...",
                              "С одной стороны..., с другой стороны...",
                              "Там..., тут...",
                              "Быстро..., медленно..."
                    ],
                    "correctIndex": 1,
                    "explanation": "С одной стороны..., с другой стороны..."
          },
          {
                    "q": "Como formular a conclusão reflexiva de um ensaio opinativo?",
                    "options": [
                              "Таким образом, мы приходим к выводу, что...",
                              "Я ничего не знаю...",
                              "Конец текста.",
                              "Забудьте то, что я писал..."
                    ],
                    "correctIndex": 0,
                    "explanation": "Таким образом, мы приходим к выводу..."
          },
          {
                    "q": "Qual palavra significa a tese/ideia central de um ensaio?",
                    "options": [
                              "Тезис",
                              "Буква",
                              "Ошибка",
                              "Скидка"
                    ],
                    "correctIndex": 0,
                    "explanation": "Тезис = tese."
          },
          {
                    "q": "O que significa o conector \"Следовательно\" em ensaios?",
                    "options": [
                              "Consequentemente / Logo",
                              "Nunca",
                              "Antes de tudo",
                              "Apesar de"
                    ],
                    "correctIndex": 0,
                    "explanation": "Следовательно = consequentemente."
          },
          {
                    "q": "Como se chama um artigo de opinião em imprensa russa?",
                    "options": [
                              "Публицистическая колонка / Эссе",
                              "Словарь",
                              "Учебник",
                              "Сказка"
                    ],
                    "correctIndex": 0,
                    "explanation": "Публицистическая колонка / Эссе."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_23",
        "Módulo 23: Регламент и сертификация (Revisão Geral B2)",
        "Consolidação das competências de uso independente no nível B2 e do modelo de exames TORFL / ТРКИ-II.",
        "Revise gramática avançada, léxico e estruturas para a certificação oficial.",
        "Успешное прохождение теста ТРКИ-II подтверждает высокий уровень владения языком.",
        [
          {
                    "title": "Estrutura do Exame Oficial ТРКИ-II / TORFL-2",
                    "rule": "O exame de certificação oficial de nível B2 (ТРКИ-2) é dividido em 5 subtestes obrigatórios: Léxico/Gramática, Leitura de textos autênticos, Audição, Escrita e Fala.",
                    "formula": "ТРКИ-2 / 5 субтестов",
                    "example": "Экзамен состоит из пяти субтестов.",
                    "exampleTranslation": "O exame é composto por cinco subtestes."
          },
          {
                    "title": "Checklist Sintático de Revisão B2",
                    "rule": "Dominar a conversão fluida entre particípios (\"читающий / прочитанный\"), gerúndios (\"читая / прочитав\") e orações subordinadas concessivas (*Несмотря на то что*).",
                    "formula": "Причастия + Деепричастия + Сложный синтаксис",
                    "example": "Прочитав текст, напишите аннотацию.",
                    "exampleTranslation": "Tendo lido o texto, escreva um resumo."
          },
          {
                    "title": "Уверенное владение языком (Competência B2)",
                    "rule": "No nível B2, espera-se comunicação relativamente espontânea, precisão adequada de regência e capacidade de adaptar o registro à situação social.",
                    "formula": "Владеть + [Substantivo no Instrumental]",
                    "example": "Он уверенно владеет русским языком.",
                    "exampleTranslation": "Ele tem domínio seguro da língua russa."
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Сертификация",
                    "romaji": "Sertifikatsiya",
                    "translation": "Certificação oficial de proficiência",
                    "audio": "Сертификация",
                    "dica": "Acreditação de nível."
          },
          {
                    "type": "vocab",
                    "word": "Экзамен",
                    "romaji": "Ekzamen",
                    "translation": "Exame / Prova de avaliação",
                    "audio": "Экзамен",
                    "dica": "Teste de proficiência."
          },
          {
                    "type": "vocab",
                    "word": "Уровень",
                    "romaji": "Uroven",
                    "translation": "Nível de domínio (ex: B2)",
                    "audio": "Уровень",
                    "dica": "Grau de conhecimento."
          },
          {
                    "type": "vocab",
                    "word": "Владение",
                    "romaji": "Vladeniye",
                    "translation": "Domínio / Fluência no idioma",
                    "audio": "Владение",
                    "dica": "Свободное владение = fluência."
          },
          {
                    "type": "vocab",
                    "word": "Регламент",
                    "romaji": "Reglament",
                    "translation": "Regulamento e regras do teste",
                    "audio": "Регламент",
                    "dica": "Normas do exame."
          }
],
        [
          {
                    "sentence": "Успешная сдача экзамена ТРКИ-2 подтверждает владение русским языком на уровне B2.",
                    "translation": "A aprovação no exame TORFL-II confirma o domínio do idioma russo no nível B2.",
                    "tokens": [
                              "Успешная",
                              "сдача",
                              "экзамена",
                              "ТРКИ-2",
                              "подтверждает",
                              "владение",
                              "русским",
                              "языком",
                              "на",
                              "уровне",
                              "B2."
                    ],
                    "audio": "Успешная сдача экзамена ТРКИ-2 подтверждает владение русским языком на уровне B2."
          },
          {
                    "sentence": "Мы тщательно повторили все ключевые темы грамматики продвинутого уровня B2.",
                    "translation": "Revisamos minuciosamente todos os tópicos chave de gramática do nível avançado B2.",
                    "tokens": [
                              "Мы",
                              "тщательно",
                              "повторили",
                              "все",
                              "ключевые",
                              "темы",
                              "грамматики",
                              "продвинутого",
                              "уровня",
                              "B2."
                    ],
                    "audio": "Мы тщательно повторили все ключевые темы грамматики продвинутого уровня B2."
          }
],
        [
          {
                    "speaker": "Candidate",
                    "text": "Вы готовы к прохождению всех пяти субтестов государственного экзамена ТРКИ?",
                    "translation": "Você está pronto para realizar todos os cinco subtestes do exame estatal TORFL?",
                    "audio": "Вы готовы к прохождению всех пяти субтестов государственного экзамена ТРКИ?"
          },
          {
                    "speaker": "Instructor",
                    "text": "Да, вы отлично усвоили всю сложную грамматику и лексику уровня B2.",
                    "translation": "Sim, você assimilou perfeitamente toda a gramática complexa e o léxico do nível B2.",
                    "audio": "Да, вы отлично усвоили всю сложную грамматику и лексику уровня B2."
          }
],
        [
          {
                    "q": "O que significa a sigla oficial ТРКИ / TORFL?",
                    "options": [
                              "Teste de Russo como Língua Estrangeira",
                              "Torneio de Futebol da Rússia",
                              "Transporte Rápido de Moscou",
                              "Técnica de Redação Infantil"
                    ],
                    "correctIndex": 0,
                    "explanation": "ТРКИ = Тест по русскому языку как иностранному (TORFL)."
          },
          {
                    "q": "Quantos subtestes compõem o exame oficial ТРКИ-II (Nível B2)?",
                    "options": [
                              "2 subtestes",
                              "3 subtestes",
                              "5 subtestes (Gramática, Leitura, Audição, Escrita, Fala)",
                              "10 subtestes"
                    ],
                    "correctIndex": 2,
                    "explanation": "5 subtestes obrigatórios."
          },
          {
                    "q": "Qual expressão significa \"Domínio fluente da língua\"?",
                    "options": [
                              "Свободное владение языком",
                              "Плохое знание слов",
                              "Полное молчание",
                              "Чтение со словарём"
                    ],
                    "correctIndex": 0,
                    "explanation": "Свободное владение языком = fluência."
          },
          {
                    "q": "O que confirma a aprovação no exame oficial ТРКИ-II?",
                    "options": [
                              "Nível B1 básico",
                              "Nível B2 avançado de fluência",
                              "Apenas saber o alfabeto",
                              "Nível A1 iniciante"
                    ],
                    "correctIndex": 1,
                    "explanation": "ТРКИ-II corresponde ao Nível B2."
          },
          {
                    "q": "Qual a forma correta do gerúndio perfeito do verbo \"Сдать\" (passar no exame)?",
                    "options": [
                              "Сдавая",
                              "Сдав",
                              "Сданный",
                              "Сдающий"
                    ],
                    "correctIndex": 1,
                    "explanation": "Сдать ➔ Сдав (tendo passado/prestado)."
          }
]
    )
);

CURSO_RUSSO_B2_DADOS.push(
    criarModuloB2Handcrafted(
        "ru_b2_mod_24",
        "Módulo 24: Desafio Final B2: Exame Integrado de Competências e Certificação Interna",
        "Exame abrangente do Nível B2 avaliando gramática avançada, estilo, vocabulário e compreensão cultural.",
        "Complete com sucesso o Desafio Final de 30 questões e demonstre as competências trabalhadas no Nível B2!",
        "Поздравляем! Вы прошли весь курс русского языка от уровня А1 до B2!",
        [
          {
                    "title": "Síntese Integrada do Nível B2",
                    "rule": "Consolidação total de particípios ativos/passivos, gerúndios imperfeitos/perfeitos, estilo oficial-corporativo, termos jurídicos, jornalismo e orações concessivas (*Несмотря на то что*).",
                    "formula": "A1 + A2 + B1 + B2 ➔ 96 Módulos Concluídos",
                    "example": "Вы отлично владеете русским языком!",
                    "exampleTranslation": "Você domina perfeitamente o idioma russo!"
          },
          {
                    "title": "Autonomia Comunicativa e Adequação Estilística",
                    "rule": "Capacidade de alternar entre o estilo oficial-corporativo em documentos, acadêmico em relatórios e coloquial expressivo em conversas sociais.",
                    "formula": "Adequação estilística em nível B2",
                    "example": "Курс уровня B2 успешно завершён.",
                    "exampleTranslation": "O curso de nível B2 foi concluído com sucesso."
          },
          {
                    "title": "Certificação Interna Idiomas Academy",
                    "rule": "Conquista do certificado interno de conclusão do percurso B2 da plataforma após aprovação no Exame Integrado.",
                    "formula": "Certificado interno de conclusão B2",
                    "example": "Поздравляем с победой!",
                    "exampleTranslation": "Parabéns pela vitória!"
          }
],
        [
          {
                    "type": "vocab",
                    "word": "Сертификат",
                    "romaji": "Sertifikat",
                    "translation": "Certificado interno de conclusão B2",
                    "audio": "Сертификат",
                    "dica": "Comprovante interno de conclusão do percurso."
          },
          {
                    "type": "vocab",
                    "word": "Победа",
                    "romaji": "Pobeda",
                    "translation": "Vitória / Conquista final",
                    "audio": "Победа",
                    "dica": "Conclusão dos 96 módulos."
          },
          {
                    "type": "vocab",
                    "word": "Свобода",
                    "romaji": "Svoboda",
                    "translation": "Liberdade",
                    "audio": "Свобода",
                    "dica": "Substantivo abstrato associado à independência."
          },
          {
                    "type": "vocab",
                    "word": "Результат",
                    "romaji": "Rezultat",
                    "translation": "Resultado de excelência",
                    "audio": "Результат",
                    "dica": "Desempenho no teste."
          },
          {
                    "type": "vocab",
                    "word": "Успех",
                    "romaji": "Uspekh",
                    "translation": "Sucesso absoluto",
                    "audio": "Успех",
                    "dica": "Parabéns pela conquista!"
          }
],
        [
          {
                    "sentence": "Поздравляем вас с успешным завершением полного курса русского языка от A1 до B2!",
                    "translation": "Parabéns pela conclusão com sucesso do curso completo de língua russa de A1 a B2!",
                    "tokens": [
                              "Поздравляем",
                              "вас",
                              "с",
                              "успешным",
                              "завершением",
                              "полного",
                              "курса",
                              "русского",
                              "языка",
                              "от",
                              "A1",
                              "до",
                              "B2!"
                    ],
                    "audio": "Поздравляем вас с успешным завершением полного курса русского языка от A1 до B2!"
          },
          {
                    "sentence": "Вы успешно завершили курс русского языка уровня B2.",
                    "translation": "Você concluiu com sucesso o curso de língua russa de nível B2.",
                    "tokens": [
                              "Вы",
                              "успешно",
                              "завершили",
                              "курс",
                              "русского",
                              "языка",
                              "уровня",
                              "B2."
                    ],
                    "audio": "Вы успешно завершили курс русского языка уровня B2."
          }
],
        [
          {
                    "speaker": "Examiner",
                    "text": "Поздравляю! Вы успешно сдали финальный комплексный экзамен уровня B2!",
                    "translation": "Parabéns! Você passou com sucesso no exame final integrado do nível B2!",
                    "audio": "Поздравляю! Вы успешно сдали финальный комплексный экзамен уровня B2!"
          },
          {
                    "speaker": "Student",
                    "text": "Огромное спасибо! Это был замечательный путь к уверенному владению русским языком!",
                    "translation": "Muito obrigado! Foi uma jornada maravilhosa rumo a um domínio seguro do idioma russo!",
                    "audio": "Огромное спасибо! Это был замечательный путь к уверенному владению русским языком!"
          }
],
        [
          {
                    "q": "[1/30] Qual o sufixo do particípio ativo presente para verbos em -ать/-ять (1ª conjugação, ex: Читать)?",
                    "options": [
                              "-ущ- / -ющ-",
                              "-ащ- / -ящ-",
                              "-вш-",
                              "-ем-"
                    ],
                    "correctIndex": 0,
                    "explanation": "1ª conjugação usa -ущ-/-ющ-: читающий."
          },
          {
                    "q": "[2/30] Particípio ativo passado de \"Жить\":",
                    "options": [
                              "Живущий",
                              "Живший",
                              "Жимость",
                              "Живаемый"
                    ],
                    "correctIndex": 1,
                    "explanation": "Tema do passado жи- + -вший = живший."
          },
          {
                    "q": "[3/30] Particípio passivo passado de \"Прочитать\" (feminino singular):",
                    "options": [
                              "Прочитанная",
                              "Прочитанный",
                              "Прочитающее",
                              "Прочитаемый"
                    ],
                    "correctIndex": 0,
                    "explanation": "Книга (Feminino) прочитанная."
          },
          {
                    "q": "[4/30] Em qual caso fica o agente numa oração passiva (\"статья, написанная [журналист]\")?",
                    "options": [
                              "Genitivo",
                              "Dativo",
                              "Instrumental (журналистом)",
                              "Acusativo"
                    ],
                    "correctIndex": 2,
                    "explanation": "O agente passivo fica no Instrumental."
          },
          {
                    "q": "[5/30] Forma curta neutra singular do particípio \"Открытый\":",
                    "options": [
                              "Открыт",
                              "Открыта",
                              "Открыто",
                              "Открыты"
                    ],
                    "correctIndex": 2,
                    "explanation": "Neutro singular termina em -о: открыто."
          },
          {
                    "q": "[6/30] Qual o sufixo do gerúndio imperfeito (Ação simultânea, ex: Читать)?",
                    "options": [
                              "-я / -а",
                              "-в / -вши",
                              "-емый",
                              "-нный"
                    ],
                    "correctIndex": 0,
                    "explanation": "Gerúndio imperfeito usa -я/-а: читая."
          },
          {
                    "q": "[7/30] Qual a regra OBRIGATÓRIA ao utilizar gerúndios em russo?",
                    "options": [
                              "Sempre usar no passado",
                              "O gerúndio e o verbo principal devem compartilhar o mesmo sujeito",
                              "Não usar vírgulas",
                              "Usar apenas com verbos de movimento"
                    ],
                    "correctIndex": 1,
                    "explanation": "Ambas as ações pertencem ao mesmo sujeito."
          },
          {
                    "q": "[8/30] Gerúndio perfeito do verbo reflexivo \"Вернуться\" (voltar):",
                    "options": [
                              "Вернуя",
                              "Вернувшись",
                              "Вернувшийся",
                              "Вернуем"
                    ],
                    "correctIndex": 1,
                    "explanation": "Verbos reflexivos terminam em -вшись: вернувшись."
          },
          {
                    "q": "[9/30] O que significa o adjetivo corporativo \"Взаимовыгодный\"?",
                    "options": [
                              "Unilateral",
                              "Mutuamente vantajoso / De benefício mútuo",
                              "Muito caro",
                              "Sem garantia"
                    ],
                    "correctIndex": 1,
                    "explanation": "Взаимовыгодный = mutuamente vantajoso."
          },
          {
                    "q": "[10/30] Qual a regência da locução \"Прийти к...\" (chegar a um compromisso)?",
                    "options": [
                              "Acusativo",
                              "Genitivo",
                              "Dativo (компромиссу)",
                              "Preposicional"
                    ],
                    "correctIndex": 2,
                    "explanation": "Прийти к + Dativo: к компромиссу."
          },
          {
                    "q": "[11/30] O que significa a cláusula jurídica \"Договор вступает в силу\"?",
                    "options": [
                              "O contrato foi cancelado",
                              "O contrato entra em vigor",
                              "O contrato expira",
                              "O contrato é rascunho"
                    ],
                    "correctIndex": 1,
                    "explanation": "Вступать в силу = entrar em vigor."
          },
          {
                    "q": "[12/30] O que indica a fórmula \"Действителен до 31 декабря\"?",
                    "options": [
                              "Assinado em 31 de dezembro",
                              "Válido até 31 de dezembro",
                              "Cancelado em 31 de dezembro",
                              "Renovado"
                    ],
                    "correctIndex": 1,
                    "explanation": "Действителен до = válido até."
          },
          {
                    "q": "[13/30] Qual a sigla em russo para Produto Interno Bruto (PIB)?",
                    "options": [
                              "СМИ",
                              "ВВП (Внутренний валовой продукт)",
                              "ИИ",
                              "ТРКИ"
                    ],
                    "correctIndex": 1,
                    "explanation": "ВВП = PIB."
          },
          {
                    "q": "[14/30] Como se diz \"Taxa de juros\" em economia?",
                    "options": [
                              "Процентная ставка",
                              "Курс валют",
                              "Чистая прибыль",
                              "Налог"
                    ],
                    "correctIndex": 0,
                    "explanation": "Процентная ставка = taxa de juros."
          },
          {
                    "q": "[15/30] O que significa a expressão jornalística \"По данным ТАСС\"?",
                    "options": [
                              "Segundo dados da agência TASS",
                              "Sem consultar a TASS",
                              "Crítica contra a TASS",
                              "Opinião do leitor"
                    ],
                    "correctIndex": 0,
                    "explanation": "По данным = segundo dados de."
          },
          {
                    "q": "[16/30] Qual palavra significa \"Manchete de Notícia\" em russo?",
                    "options": [
                              "Заголовок",
                              "Статья",
                              "Источник",
                              "Газета"
                    ],
                    "correctIndex": 0,
                    "explanation": "Заголовок = manchete."
          },
          {
                    "q": "[17/30] O que significa a expressão oral nativa \"Честно говоря\"?",
                    "options": [
                              "Para ser sincero / Honestamente",
                              "Com certeza não",
                              "Fale mais rápido",
                              "Mentira pura"
                    ],
                    "correctIndex": 0,
                    "explanation": "Честно говоря = para ser sincero."
          },
          {
                    "q": "[18/30] Como a fala cotidiana reduz a palavra \"Сейчас\"?",
                    "options": [
                              "Щас",
                              "Час",
                              "Сей",
                              "Шо"
                    ],
                    "correctIndex": 0,
                    "explanation": "Сейчас ➔ Щас."
          },
          {
                    "q": "[19/30] O que significa a gíria coloquial \"Это просто бомба!\"?",
                    "options": [
                              "É péssimo",
                              "É sensacional / incrível",
                              "Explodiu o cinema",
                              "É perigoso"
                    ],
                    "correctIndex": 1,
                    "explanation": "Бомба = algo incrível."
          },
          {
                    "q": "[20/30] Como se formula o objetivo de um trabalho acadêmico em russo?",
                    "options": [
                              "Целью данного исследования является...",
                              "Я хочу рассказать...",
                              "Мне интересно...",
                              "Посмотрим..."
                    ],
                    "correctIndex": 0,
                    "explanation": "Целью исследования является..."
          },
          {
                    "q": "[21/30] Quem escreveu o romance \"Преступление и наказание\" (Crime e Castigo)?",
                    "options": [
                              "Фёдор Достоевский",
                              "Лев Толстой",
                              "Александр Пушкин",
                              "Антон Чехов"
                    ],
                    "correctIndex": 0,
                    "explanation": "Fiódor Dostoiévski."
          },
          {
                    "q": "[22/30] Quem escreveu \"Война и мир\" (Guerra e Paz)?",
                    "options": [
                              "Лев Толстой",
                              "Фёдор Достоевский",
                              "Николай Гоголь",
                              "Иван Тургенев"
                    ],
                    "correctIndex": 0,
                    "explanation": "Liev Tolstói."
          },
          {
                    "q": "[23/30] Como se chama o influente período poético russo do início do século XX?",
                    "options": [
                              "Серебряный век (Era de Prata)",
                              "Золотой век",
                              "Бронзовый век",
                              "Темный век"
                    ],
                    "correctIndex": 0,
                    "explanation": "Серебряный век."
          },
          {
                    "q": "[24/30] O que significa o termo diplomático \"Двустороннее соглашение\"?",
                    "options": [
                              "Acordos unilaterais",
                              "Acordo bilateral",
                              "Guerra declarada",
                              "Cancelamento de pacto"
                    ],
                    "correctIndex": 1,
                    "explanation": "Двустороннее = bilateral."
          },
          {
                    "q": "[25/30] Qual a sigla russa para Inteligência Artificial?",
                    "options": [
                              "ИИ (Искусственный интеллект)",
                              "IT",
                              "СМИ",
                              "ЭВМ"
                    ],
                    "correctIndex": 0,
                    "explanation": "ИИ = Inteligência Artificial."
          },
          {
                    "q": "[26/30] Qual conjunção expressa concessão formal (\"Apesar de que / Embora\")?",
                    "options": [
                              "Несмотря на то что...",
                              "Потому что",
                              "Так как",
                              "Для того чтобы"
                    ],
                    "correctIndex": 0,
                    "explanation": "Несмотря на то что..."
          },
          {
                    "q": "[27/30] Qual registro de linguagem é exigido em contratos e documentos oficiais?",
                    "options": [
                              "Официально-деловой стиль",
                              "Разговорный стиль",
                              "Сленг",
                              "Поэтический"
                    ],
                    "correctIndex": 0,
                    "explanation": "Официально-деловой стиль."
          },
          {
                    "q": "[28/30] Qual provérbio russo recomenda pensar cuidadosamente antes de agir?",
                    "options": [
                              "Семь раз отмерь, один раз отрежь",
                              "Век живи — век учись",
                              "Тише едешь — дальше будешь",
                              "Без труда не выловишь рыбу"
                    ],
                    "correctIndex": 0,
                    "explanation": "Семь раз отмерь, один раз отрежь."
          },
          {
                    "q": "[29/30] O que significa a locução idiomática \"Делать из мухи слона\"?",
                    "options": [
                              "Fazer tempestade em copo d'água / Exagerar um detalhe",
                              "Criar animais",
                              "Caçar moscas",
                              "Viajar de avião"
                    ],
                    "correctIndex": 0,
                    "explanation": "Делать из мухи слона = exagerar."
          },
          {
                    "q": "[30/30] Quantos subtestes compõem o exame oficial de proficiência ТРКИ-II (TORFL-2)?",
                    "options": [
                              "5 subtestes (Gramática, Leitura, Audição, Escrita, Fala)",
                              "2 subtestes",
                              "1 subteste",
                              "10 subtestes"
                    ],
                    "correctIndex": 0,
                    "explanation": "5 subtestes obrigatórios no exame TORFL-2."
          }
]
    )
);
