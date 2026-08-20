const CURSO_A1_DADOS = [
    {
        "id": "a1_mod_01",
        "title": "Saudações Básicas & A Magia do 'Desu'",
        "section": 1,
        "sectionTitle": "Primeiros Passos & Etiqueta",
        "level": "A1",
        "xpReward": 70,
        "stage1_context": {
            "audioGuide": "Ohayou gozaimasu!",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Vamos aprender saudações usadas em diferentes momentos do dia e uma estrutura nominal polida para se apresentar."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "おはようございます",
                "romaji": "Ohayou gozaimasu",
                "translation": "Bom dia (Formal)",
                "timeContext": "Saudação de bom-dia; ございます torna a expressão mais polida."
            },
            {
                "type": "vocab",
                "kanji": "こんにちは",
                "romaji": "Konnichiwa",
                "translation": "Boa tarde / Olá",
                "timeContext": "Saudação usada ao encontrar alguém durante o dia."
            },
            {
                "type": "vocab",
                "kanji": "こんばんは",
                "romaji": "Konbanwa",
                "translation": "Boa noite",
                "timeContext": "Saudação usada ao encontrar alguém à noite; antes de dormir, usa-se おやすみなさい."
            },
            {
                "type": "grammar_pill",
                "title": "O Camaleão 'です (Desu)'",
                "rule": "No padrão nominal X は Y です, です marca o predicado como polido. Conforme o contexto, a tradução pode usar formas de 'ser', mas です não corresponde sozinho a todos os usos de 'ser' ou 'estar'.",
                "formula": "[ Tópico ] は [ Nome ou identificação ] です",
                "example": "わたしはカルロスです。 ➔ Eu sou o Carlos. Na fala corrente, a vogal final de です pode ser pouco audível."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Selecione o momento correto do dia para usar a saudação: 'Konnichiwa'",
                "options": [
                    {
                        "label": "🌅 Manhã bem cedo",
                        "isCorrect": false
                    },
                    {
                        "label": "☀️ Durante o dia",
                        "isCorrect": true
                    },
                    {
                        "label": "🌙 Noite (Ao chegar)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como você deve cumprimentar o recepcionista do seu hotel às 07h30 da manhã?",
                "options": [
                    {
                        "label": "☀️ こんにちは (Konnichiwa)",
                        "isCorrect": false
                    },
                    {
                        "label": "🌅 おはようございます (Ohayou gozaimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "🌙 こんばんは (Konbanwa)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. No padrão nominal afirmativo X は Y です, onde aparece です?",
                "options": [
                    {
                        "label": "Sempre no início absoluto da frase",
                        "isCorrect": false
                    },
                    {
                        "label": "No meio, entre o nome e a saudação",
                        "isCorrect": false
                    },
                    {
                        "label": "Depois do nome ou identificação que forma o predicado",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "4. Você chega a um restaurante tradicional em Quioto às 20h30. O que você diz ao garçom?",
                "options": [
                    {
                        "label": "🌙 こんばんは (Konbanwa)",
                        "isCorrect": true
                    },
                    {
                        "label": "🌅 おはようございます (Ohayou gozaimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "☀️ こんにちは (Konnichiwa)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual opção segue o padrão nominal polido X は Y です para dizer 'Sou a Ana'?",
                "options": [
                    {
                        "label": "わたしはアナです (Watashi wa Ana desu)",
                        "isCorrect": true
                    },
                    {
                        "label": "です Ana (Desu Ana)",
                        "isCorrect": false
                    },
                    {
                        "label": "Ana おはよう (Ana ohayou)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "おはようございます",
                "translation": "Bom dia!",
                "chunks": [
                    "おはようございます"
                ]
            },
            {
                "sentenceJp": "わたし は カルロス です",
                "translation": "Eu sou o Carlos.",
                "chunks": [
                    "わたし",
                    "は",
                    "カルロス",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está no elevador do hotel em Tóquio durante a tarde e outro hóspede inicia uma conversa.",
                "npcName": "Kenji",
                "npcMessage": "こんにちは。ケンジです。 (Konnichiwa. Kenji desu.)",
                "options": [
                    {
                        "text": "おはようございます！",
                        "feedback": "Esta não é a saudação diurna trabalhada nesta situação.",
                        "isCorrect": false
                    },
                    {
                        "text": "こんにちは。[Seu Nome]です。",
                        "feedback": "Correto: você usou a saudação diurna e o padrão nominal polido do módulo.",
                        "isCorrect": true
                    },
                    {
                        "text": "ケンジ です！",
                        "feedback": "Incorreto: Você acabou de dizer que se chama Kenji!",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Você entra em uma padaria local às 08:00 da manhã e o padeiro acena com um sorriso.",
                "npcName": "Padeiro Sato",
                "npcMessage": "あ、おはようございます。 (A, ohayou gozaimasu.)",
                "options": [
                    {
                        "text": "こんばんは。[Seu Nome]です。",
                        "feedback": "Esta não é a saudação de bom-dia trabalhada nesta situação.",
                        "isCorrect": false
                    },
                    {
                        "text": "おはようございます。",
                        "feedback": "Correto: você respondeu com a saudação polida de bom-dia.",
                        "isCorrect": true
                    },
                    {
                        "text": "こんにちは！",
                        "feedback": "Esta não é a saudação de bom-dia trabalhada nesta situação.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Você chega ao seu ryokan (pousada tradicional) às 19:45 e a anfitriã abre a porta de correr.",
                "npcName": "Anfitriã Suzuki",
                "npcMessage": "いらっしゃいませ。こんばんは。 (Bem-vindo(a). Boa noite.)",
                "options": [
                    {
                        "text": "こんばんは。",
                        "feedback": "Correto: você respondeu com a saudação noturna trabalhada no módulo.",
                        "isCorrect": true
                    },
                    {
                        "text": "おはようございます！",
                        "feedback": "Esta não é a saudação noturna trabalhada nesta situação.",
                        "isCorrect": false
                    },
                    {
                        "text": "です [Seu Nome]！",
                        "feedback": "Essa ordem não segue o padrão nominal X は Y です trabalhado no módulo.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual é a saudação polida de bom-dia trabalhada no módulo?",
                "options": [
                    "こんにちは (Konnichiwa)",
                    "おはようございます (Ohayou gozaimasu)",
                    "こんばんは (Konbanwa)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'おはようございます' (Ohayou gozaimasu)?",
                "options": [
                    "Bom dia (Formal)",
                    "Boa tarde / Olá",
                    "Boa noite"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'こんにちは' (Konnichiwa)?",
                "options": [
                    "Bom dia (Formal)",
                    "Boa tarde / Olá",
                    "Boa noite"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'こんばんは' (Konbanwa)?",
                "options": [
                    "Boa tarde / Olá",
                    "Bom dia (Formal)",
                    "Boa noite"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre a regra 'O Camaleão 'です (Desu)'': qual afirmação é correta?",
                "options": [
                    "No padrão X は Y です, です marca o predicado nominal como polido.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_02",
        "title": "Prazer em Conhecer & Primeiras Apresentações",
        "section": 1,
        "sectionTitle": "Primeiros Passos & Etiqueta",
        "level": "A1",
        "xpReward": 75,
        "stage1_context": {
            "audioGuide": "Hajimemashite! Yoroshiku onegaishimasu.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Aprenda expressões frequentes de uma primeira apresentação e pratique uma troca breve e polida."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "はじめまして",
                "romaji": "Hajimemashite",
                "translation": "Muito prazer / Prazer em conhecer você",
                "timeContext": "Usado ao encontrar alguém pela primeira vez."
            },
            {
                "type": "vocab",
                "kanji": "よろしくおねがいします",
                "romaji": "Yoroshiku onegaishimasu",
                "translation": "Muito prazer / Espero contar com você",
                "timeContext": "Expressão contextual frequentemente usada ao encerrar uma apresentação."
            },
            {
                "type": "vocab",
                "kanji": "こちらこそ",
                "romaji": "Kochira koso",
                "translation": "Igualmente / Eu é que agradeço",
                "timeContext": "Em uma apresentação, pode introduzir a resposta こちらこそ、よろしくおねがいします."
            },
            {
                "type": "grammar_pill",
                "title": "Modelo básico de apresentação",
                "rule": "Um modelo comum combina a saudação inicial, a identificação e uma expressão de cortesia.",
                "formula": "はじめまして + [Nome] です + よろしくおねがいします",
                "example": "Hajimemashite. Ana desu. Yoroshiku onegaishimasu."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Qual expressão é adequada ao encontrar alguém pela primeira vez?",
                "options": [
                    {
                        "label": "🤝 はじめまして (Hajimemashite)",
                        "isCorrect": true
                    },
                    {
                        "label": "🙇 よろしくおねがいします (Yoroshiku onegaishimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "🙏 こちらこそ (Kochirakoso)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como você responde se um colega japonês se apresenta e diz: 'Yoroshiku onegaishimasu'?",
                "options": [
                    {
                        "label": "🤝 こちらこそ、よろしくおねがいします (Kochira koso, yoroshiku onegaishimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "🌅 おはようございます (Ohayou gozaimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "👋 さようなら (Sayounara)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual expressão é frequentemente usada ao encerrar uma apresentação polida?",
                "options": [
                    {
                        "label": "はじめまして (Hajimemashite)",
                        "isCorrect": false
                    },
                    {
                        "label": "よろしくおねがいします (Yoroshiku onegaishimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "こんにちは (Konnichiwa)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. No modelo básico apresentado, o que aparece entre as duas expressões de cortesia?",
                "options": [
                    {
                        "label": "A saudação inicial Hajimemashite",
                        "isCorrect": false
                    },
                    {
                        "label": "O seu nome acompanhado de 'です (desu)'",
                        "isCorrect": true
                    },
                    {
                        "label": "O agradecimento Kochirakoso",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Culturalmente, o que a expressão 'Yoroshiku onegaishimasu' transmite ao interlocutor?",
                "options": [
                    {
                        "label": "'Espero construirmos uma boa relação / Conto com sua gentileza'",
                        "isCorrect": true
                    },
                    {
                        "label": "'Que horas são agora?'",
                        "isCorrect": false
                    },
                    {
                        "label": "'Me desculpe pelo incômodo'",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "はじめまして。タナカです。",
                "translation": "Prazer em conhecê-lo. Sou Tanaka.",
                "chunks": [
                    "はじめまして。",
                    "タナカ",
                    "です。"
                ]
            },
            {
                "sentenceJp": "よろしくおねがいします。",
                "translation": "Conto com sua gentileza.",
                "chunks": [
                    "よろしく",
                    "おねがいします。"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está em uma reunião na empresa e o diretor Tanaka se aproxima para trocar cartões.",
                "npcName": "Tanaka",
                "npcMessage": "はじめまして。タナカです。よろしくおねがいします。",
                "options": [
                    {
                        "text": "はじめまして。こちらこそ、よろしくおねがいします。",
                        "feedback": "Adequado: você respondeu à apresentação e retribuiu a expressão de cortesia.",
                        "isCorrect": true
                    },
                    {
                        "text": "こんばんは！ タナカです。",
                        "feedback": "Incorreto: Você não se chama Tanaka e usou boa noite!",
                        "isCorrect": false
                    },
                    {
                        "text": "はじめまして！",
                        "feedback": "Possível como saudação inicial, mas a outra opção responde de modo mais completo ao contexto proposto.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Você se mudou para uma sharehouse (casa compartilhada) em Tóquio e encontra seu novo colega de quarto na sala.",
                "npcName": "Hiro",
                "npcMessage": "あ、こんにちは！ はじめまして、ヒロ です。",
                "options": [
                    {
                        "text": "よろしくおねがいします！",
                        "feedback": "A expressão é polida, mas a outra opção também responde à saudação de primeiro encontro.",
                        "isCorrect": false
                    },
                    {
                        "text": "はじめまして。よろしくおねがいします！",
                        "feedback": "Adequado: você respondeu à saudação de primeiro encontro e acrescentou a expressão de cortesia.",
                        "isCorrect": true
                    },
                    {
                        "text": "こちらこそ！ ヒロです。",
                        "feedback": "Inadequado neste diálogo: você se identificou como Hiro, que é o nome do interlocutor.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Em um encontro de intercâmbio, você acaba de dizer 'Hajimemashite, [Seu Nome] desu. Yoroshiku onegaishimasu' para uma estudante.",
                "npcName": "Estudante Sakura",
                "npcMessage": "こちらこそ、よろしくおねがいします！",
                "options": [
                    {
                        "text": "こちらこそ、よろしくおねがいします！",
                        "feedback": "Adequado: você retribuiu a cortesia de forma completa.",
                        "isCorrect": true
                    },
                    {
                        "text": "はじめまして！",
                        "feedback": "Pouco adequado aqui: a saudação de primeiro encontro já ocorreu no início do diálogo.",
                        "isCorrect": false
                    },
                    {
                        "text": "おはようございます！",
                        "feedback": "Fora de contexto gramatical e situacional.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual expressão é frequentemente usada ao encerrar uma apresentação pessoal polida?",
                "options": [
                    "はじめまして (Hajimemashite)",
                    "よろしくおねがいします (Yoroshiku onegaishimasu)",
                    "こんにちは (Konnichiwa)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'はじめまして' (Hajimemashite)?",
                "options": [
                    "Muito prazer / Prazer em conhecer você",
                    "Muito prazer / Espero contar com você",
                    "Igualmente / Eu é que agradeço"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'よろしくおねがいします' (Yoroshiku onegaishimasu)?",
                "options": [
                    "Muito prazer / Prazer em conhecer você",
                    "Muito prazer / Espero contar com você",
                    "Igualmente / Eu é que agradeço"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado contextual de 'こちらこそ' (Kochira koso)?",
                "options": [
                    "Muito prazer / Espero contar com você",
                    "Muito prazer / Prazer em conhecer você",
                    "Igualmente / Eu é que agradeço"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre o modelo básico de apresentação: qual afirmação é correta?",
                "options": [
                    "Um modelo comum combina saudação inicial, identificação e expressão de cortesia.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_03",
        "title": "Agradecer, Pedir Licença e Desculpar-se",
        "section": 1,
        "sectionTitle": "Primeiros Passos & Etiqueta",
        "level": "A1",
        "xpReward": 75,
        "stage1_context": {
            "audioGuide": "Arigatou gozaimasu! Sumimasen!",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Pratique expressões frequentes para agradecer, pedir licença e fazer uma desculpa breve em situações cotidianas."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "ありがとうございます",
                "romaji": "Arigatou gozaimasu",
                "translation": "Muito obrigado / Obrigado",
                "timeContext": "Forma polida de agradecimento, adequada em situações com desconhecidos e atendimento."
            },
            {
                "type": "vocab",
                "kanji": "すみません",
                "romaji": "Sumimasen",
                "translation": "Com licença / Desculpe",
                "timeContext": "Pode chamar a atenção de alguém, pedir licença, desculpar-se e, em certos contextos, reconhecer o incômodo causado por um favor."
            },
            {
                "type": "vocab",
                "kanji": "ごめんなさい",
                "romaji": "Gomennasai",
                "translation": "Desculpe / Perdão",
                "timeContext": "É uma desculpa mais direta e costuma aparecer em contextos pessoais ou menos formais."
            },
            {
                "type": "grammar_pill",
                "title": "Usos frequentes de すみません",
                "rule": "O sentido de すみません depende da situação: pode iniciar um pedido, pedir licença ou expressar uma desculpa breve.",
                "formula": "1. Chamar atenção | 2. Pedir licença ou desculpar-se | 3. Reconhecer o esforço associado a um favor",
                "example": "Ao receber um favor, すみません pode reconhecer o trabalho que a outra pessoa teve; ありがとうございます deixa o agradecimento explícito."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Você entra em um restaurante no Japão e quer chamar o garçom até a sua mesa. O que você grita educadamente?",
                "options": [
                    {
                        "label": "🙏 ごめんなさい (Gomennasai!)",
                        "isCorrect": false
                    },
                    {
                        "label": "🙋‍♂️ すみません！ (Sumimasen!)",
                        "isCorrect": true
                    },
                    {
                        "label": "🤝 はじめまして (Hajimemashite)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual descrição diferencia melhor 'Sumimasen' e 'Gomennasai'?",
                "options": [
                    {
                        "label": "Gomennasai é social/leve; Sumimasen é apenas para a família",
                        "isCorrect": false
                    },
                    {
                        "label": "Gomennasai é uma desculpa mais direta e pessoal; Sumimasen também pode pedir licença ou chamar atenção",
                        "isCorrect": true
                    },
                    {
                        "label": "Não há diferença, significam exatamente a mesma coisa em tudo",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Por que 'Arigatou gozaimasu' é uma escolha segura ao agradecer um vendedor?",
                "options": [
                    {
                        "label": "Porque é uma forma polida de agradecimento adequada ao atendimento",
                        "isCorrect": true
                    },
                    {
                        "label": "Porque 'Arigatou' significa 'Adeus'",
                        "isCorrect": false
                    },
                    {
                        "label": "Porque os vendedores não entendem essa palavra",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Você está no trem lotado e precisa passar pelas pessoas para descer na estação. O que você vai dizendo?",
                "options": [
                    {
                        "label": "ありがとうございます (Arigatou gozaimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "すみません (Sumimasen - Com licença!)",
                        "isCorrect": true
                    },
                    {
                        "label": "こんばんは (Konbanwa)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Se alguém segura a porta do elevador para você, por que 'Sumimasen' pode acompanhar o agradecimento?",
                "options": [
                    {
                        "label": "Para xingar a pessoa que segurou a porta",
                        "isCorrect": false
                    },
                    {
                        "label": "Porque pode reconhecer o incômodo ou esforço causado pelo favor, junto de um agradecimento explícito",
                        "isCorrect": true
                    },
                    {
                        "label": "Porque o elevador quebrou",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "ありがとうございます。",
                "translation": "Muito obrigado.",
                "chunks": [
                    "ありがとうございます。"
                ]
            },
            {
                "sentenceJp": "すみません。",
                "translation": "Com licença / Desculpe.",
                "chunks": [
                    "すみません。"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está saindo do metrô lotado em Tóquio e acidentalmente pisa de leve no pé de uma senhora.",
                "npcName": "Senhora no Metrô",
                "npcMessage": "痛っ！",
                "options": [
                    {
                        "text": "ありがとうございます！",
                        "feedback": "Inadequado: neste contexto, é necessário pedir desculpas primeiro.",
                        "isCorrect": false
                    },
                    {
                        "text": "あ、すみません！",
                        "feedback": "Adequado: você fez uma desculpa breve após esbarrar na pessoa.",
                        "isCorrect": true
                    },
                    {
                        "text": "よろしくおねがいします！",
                        "feedback": "Incorreto: Isso é usado em apresentações pessoais.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Você deixa sua carteira cair na rua e um pedestre corre atrás de você para devolvê-la.",
                "npcName": "Pedestre Gentil",
                "npcMessage": "あの、これ、落としましたよ。",
                "options": [
                    {
                        "text": "ごめんなさい！",
                        "feedback": "Menos adequado: a situação pede principalmente agradecimento pela devolução.",
                        "isCorrect": false
                    },
                    {
                        "text": "あ！ ありがとうございます！ すみません！",
                        "feedback": "Adequado: você agradeceu e também reconheceu o trabalho da pessoa ao devolver a carteira.",
                        "isCorrect": true
                    },
                    {
                        "text": "はじめまして！",
                        "feedback": "Incorreto: Não é hora de se apresentar, é hora de agradecer!",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Você entra em um Izakaya (bar tradicional) barulhento e está pronto para fazer seu pedido.",
                "npcName": "Garçom (De costas, longe da mesa)",
                "npcMessage": "*(Limpando o balcão do outro lado da sala)*",
                "options": [
                    {
                        "text": "すみません！",
                        "feedback": "Adequado: すみません é uma forma frequente de chamar a atenção de um atendente.",
                        "isCorrect": true
                    },
                    {
                        "text": "こんにちは！",
                        "feedback": "Incomum para chamar garçons em restaurantes.",
                        "isCorrect": false
                    },
                    {
                        "text": "こちらこそ！",
                        "feedback": "Completamente sem sentido no contexto.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual descrição diferencia melhor 'Sumimasen' e 'Gomennasai'?",
                "options": [
                    "Não há nenhuma diferença, são idênticos em tudo.",
                    "Gomennasai é uma desculpa mais direta e pessoal; Sumimasen também pode pedir licença ou chamar atenção.",
                    "Sumimasen só pode ser usado à noite."
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'ありがとうございます' (Arigatou gozaimasu)?",
                "options": [
                    "Muito obrigado / Obrigado",
                    "Com licença / Desculpe",
                    "Desculpe / Perdão"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'すみません' (Sumimasen)?",
                "options": [
                    "Muito obrigado / Obrigado",
                    "Com licença / Desculpe",
                    "Desculpe / Perdão"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'ごめんなさい' (Gomennasai)?",
                "options": [
                    "Com licença / Desculpe",
                    "Muito obrigado / Obrigado",
                    "Desculpe / Perdão"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre os usos frequentes de 'Sumimasen': qual afirmação é correta?",
                "options": [
                    "O sentido de Sumimasen depende da situação e pode incluir pedir licença, desculpar-se ou chamar atenção.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_04",
        "title": "Despedidas: registro e contexto",
        "section": 1,
        "sectionTitle": "Primeiros Passos & Etiqueta",
        "level": "A1",
        "xpReward": 80,
        "stage1_context": {
            "audioGuide": "Otsukaresama deshita! Jaa ne!",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Escolha despedidas adequadas à relação e ao contexto: casual entre amigos, profissional e mais formal."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "さようなら",
                "romaji": "Sayounara",
                "translation": "Adeus / despedida",
                "timeContext": "Pode sugerir uma separação maior ou mais marcada pelo contexto. É comum, por exemplo, quando alunos se despedem do professor; não é o equivalente universal de 'tchau'."
            },
            {
                "type": "vocab",
                "kanji": "じゃあね / またね",
                "romaji": "Jaa ne / Mata ne",
                "translation": "Até mais / Até logo",
                "timeContext": "Formas casuais entre pessoas próximas quando se espera se ver novamente em breve."
            },
            {
                "type": "vocab",
                "kanji": "おつかれさまでした",
                "romaji": "Otsukaresama deshita",
                "translation": "Obrigado pelo esforço / Bom trabalho",
                "timeContext": "Expressão frequente ao encerrar uma atividade, especialmente em contextos de trabalho; a outra pessoa pode responder com a mesma expressão."
            },
            {
                "type": "vocab",
                "kanji": "しつれいします",
                "romaji": "Shitsurei shimasu",
                "translation": "Com licença (ao me retirar)",
                "timeContext": "Forma polida para sair, por exemplo, do escritório de um professor. Em empresas, também se ouve お先に失礼します ao sair antes dos demais."
            },
            {
                "type": "grammar_pill",
                "title": "Escolha pelo contexto",
                "rule": "Há várias despedidas em japonês. A escolha depende da proximidade, da situação e de quando se espera ver a pessoa outra vez.",
                "formula": "Amigos ➔ じゃあ、またね | Trabalho ➔ おつかれさまでした | Saída formal ➔ 失礼します",
                "example": "Ao deixar o escritório de um professor, 失礼します é uma opção polida; com um amigo, じゃあ、またね combina melhor."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Você terminou seu turno de trabalho na loja e está indo para casa enquanto seus colegas ainda estão lá. O que você diz?",
                "options": [
                    {
                        "label": "👋 さようなら (Sayounara)",
                        "isCorrect": false
                    },
                    {
                        "label": "💼 おつかれさまでした (Otsukaresama deshita)",
                        "isCorrect": true
                    },
                    {
                        "label": "🌅 おはようございます (Ohayou gozaimasu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como você se despede do seu melhor amigo japonês ao final de um passeio no shopping?",
                "options": [
                    {
                        "label": "🙇 しつれいします (Shitsurei shimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "👋 じゃあね！ / またね！ (Jaa ne! / Mata ne!)",
                        "isCorrect": true
                    },
                    {
                        "label": "😭 さようなら (Sayounara)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual despedida tende a ser mais natural ao sair de casa de manhã, esperando voltar depois?",
                "options": [
                    {
                        "label": "いってきます (Ittekimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "さようなら (Sayounara)",
                        "isCorrect": false
                    },
                    {
                        "label": "いただきます (Itadakimasu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Você está na sala de um professor universitário tirando dúvidas. Ao fechar a porta para ir embora, o que você diz?",
                "options": [
                    {
                        "label": "じゃあね！ (Jaa ne!)",
                        "isCorrect": false
                    },
                    {
                        "label": "しつれいします (Shitsurei shimasu - Com licença ao me retirar)",
                        "isCorrect": true
                    },
                    {
                        "label": "こんにちは (Konnichiwa)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Quando um colega de trabalho diz 'Otsukaresama deshita' para você no elevador da empresa, qual é a melhor resposta?",
                "options": [
                    {
                        "label": "Repetir: おつかれさまでした (Otsukaresama deshita!)",
                        "isCorrect": true
                    },
                    {
                        "label": "Dizer: はじめまして (Hajimemashite)",
                        "isCorrect": false
                    },
                    {
                        "label": "Dizer: ごめんなさい (Gomennasai)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "じゃあ また ね",
                "translation": "Então, até mais.",
                "chunks": [
                    "じゃあ",
                    "また",
                    "ね"
                ]
            },
            {
                "sentenceJp": "しつれい します",
                "translation": "Com licença (ao me retirar).",
                "chunks": [
                    "しつれい",
                    "します"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Sua aula de japonês acabou e você está se despedindo do seu colega de classe, Kenji, no portão da escola.",
                "npcName": "Kenji",
                "npcMessage": "きょうは たのしかったね！ また あした！ (Hoje foi divertido! Até amanhã!)",
                "options": [
                    {
                        "text": "しつれいします (Shitsurei shimasu)",
                        "feedback": "É uma despedida polida, mas aqui a relação é casual; uma forma como じゃあね combina melhor.",
                        "isCorrect": false
                    },
                    {
                        "text": "うん、じゃあね！ またね！ (Un, jaa ne! Mata ne!)",
                        "feedback": "Boa escolha: é casual e adequada entre colegas próximos que esperam se ver no dia seguinte.",
                        "isCorrect": true
                    },
                    {
                        "text": "さようなら... (Sayounara...)",
                        "feedback": "Não é a opção mais usual aqui: さようなら pode transmitir uma separação mais marcada do que a situação pede.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: São 18:00 na empresa de TI. Seu chefe, o Sr. Sato, pega a pasta e se levanta para ir embora.",
                "npcName": "Chefe Sato",
                "npcMessage": "おさきに しつれいします。 (Com licença, estou indo na frente.)",
                "options": [
                    {
                        "text": "じゃあね、佐藤さん！",
                        "feedback": "É casual demais para esta interação profissional. Prefira uma despedida polida.",
                        "isCorrect": false
                    },
                    {
                        "text": "おつかれさまでした！ (Otsukaresama deshita!)",
                        "feedback": "Boa resposta: reconhece o esforço em um contexto de trabalho.",
                        "isCorrect": true
                    },
                    {
                        "text": "こんにちは！",
                        "feedback": "Incorreto: Isso é saudação de chegada à tarde, não de saída à noite.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Você termina uma entrevista de emprego de 30 minutos na empresa dos seus sonhos e se levanta da cadeira.",
                "npcName": "Entrevistador",
                "npcMessage": "きょうは ありがとうございました。 けっか は メール で おくり ます。 (Obrigado por hoje. Enviaremos o resultado por e-mail.)",
                "options": [
                    {
                        "text": "ありがとうございます！ しつれいします！",
                        "feedback": "Boa escolha: agradece pela entrevista e usa uma despedida polida ao sair.",
                        "isCorrect": true
                    },
                    {
                        "text": "またね！ バイバイ！ (Até logo! Bye bye!)",
                        "feedback": "É informal para uma entrevista. Escolha uma despedida polida.",
                        "isCorrect": false
                    },
                    {
                        "text": "さようなら！",
                        "feedback": "Não é a despedida mais adequada a esta situação profissional; agradeça e retire-se de modo polido.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Por que さようなら não é a escolha padrão para colegas ao sair do trabalho?",
                "options": [
                    "Porque é uma gíria muito informal de adolescentes.",
                    "Porque pode sugerir uma separação mais marcada; おつかれさまでした é mais comum nesse contexto.",
                    "Porque é proibido por lei no Japão."
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'さようなら' (Sayounara)?",
                "options": [
                    "Adeus / despedida, às vezes com separação mais marcada",
                    "Até mais / Até logo",
                    "Obrigado pelo esforço / Bom trabalho"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'じゃあね / またね' (Ja ne / Mata ne)?",
                "options": [
                    "Adeus / despedida, às vezes com separação mais marcada",
                    "Até mais / Até logo",
                    "Obrigado pelo esforço / Bom trabalho"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'おつかれさまでした' (Otsukaresama deshita)?",
                "options": [
                    "Até mais / Até logo",
                    "Adeus / despedida, às vezes com separação mais marcada",
                    "Obrigado pelo esforço / Bom trabalho"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'しつれいします' (Shitsurei shimasu)?",
                "options": [
                    "Com licença (ao me retirar)",
                    "Adeus / despedida, às vezes com separação mais marcada",
                    "Até mais / Até logo"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_05",
        "title": "Pessoas e formas de tratamento",
        "section": 1,
        "sectionTitle": "Primeiros Passos & Etiqueta",
        "level": "A1",
        "xpReward": 85,
        "stage1_context": {
            "audioGuide": "Tanaka-sensei, konnichiwa!",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Aprenda formas básicas de tratamento e escolha uma maneira neutra de falar de si em apresentações."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "～さん",
                "romaji": "~san",
                "translation": "Sr. / Sra. / -san",
                "timeContext": "Sufixo de tratamento comum após o nome de outra pessoa. Em uma apresentação, normalmente não o usamos no próprio nome."
            },
            {
                "type": "vocab",
                "kanji": "～せんせい",
                "romaji": "~sensei",
                "translation": "Professor(a) / médico(a) / -sensei",
                "timeContext": "Título usado para professores e, em muitos contextos, médicos e outras profissões. Pode vir após o nome: 佐藤先生."
            },
            {
                "type": "vocab",
                "kanji": "わたし",
                "romaji": "Watashi",
                "translation": "Eu",
                "timeContext": "Forma neutra e polida para 'eu', útil em apresentações e em muitos contextos formais."
            },
            {
                "type": "grammar_pill",
                "title": "Tratamento de si e do outro",
                "rule": "Em apresentações, o padrão é dizer o próprio nome sem さん. Para outra pessoa, escolha o tratamento de acordo com a relação e a situação.",
                "formula": "Outra pessoa ➔ 佐藤さん / 佐藤先生 | Eu ➔ わたしは ペドロ です",
                "example": "はじめまして。わたしは ペドロ です。よろしく おねがいします。"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Qual apresentação usa o próprio nome de modo natural?",
                "options": [
                    {
                        "label": "こんにちは！ わたしは ペドロさん です。 (Sou o Pedro-san)",
                        "isCorrect": false
                    },
                    {
                        "label": "はじめまして！ わたしは ペドロ です。 (Sou o Pedro)",
                        "isCorrect": true
                    },
                    {
                        "label": "はじめまして！ わたしは 先生 です。 (Sou professor.)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Você vai se consultar com a Dra. Takahashi. Qual forma é usual para tratá-la diretamente?",
                "options": [
                    {
                        "label": "高橋先生 (Takahashi-sensei)",
                        "isCorrect": true
                    },
                    {
                        "label": "高橋さん (Takahashi-san)",
                        "isCorrect": false
                    },
                    {
                        "label": "タカハシ (Apenas Takahashi sem sufixo)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Por que uma apresentação normalmente não usa ～さん no próprio nome?",
                "options": [
                    {
                        "label": "Porque ～さん é normalmente usado ao tratar outra pessoa; apresente seu próprio nome sem esse sufixo",
                        "isCorrect": true
                    },
                    {
                        "label": "Porque '~san' significa 'criança'",
                        "isCorrect": false
                    },
                    {
                        "label": "Porque só estrangeiros têm permissão para usar",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual forma é neutra e polida para dizer 'eu' em uma apresentação?",
                "options": [
                    {
                        "label": "俺 (Ore - muito masculino/gíria)",
                        "isCorrect": false
                    },
                    {
                        "label": "わたし (Watashi)",
                        "isCorrect": true
                    },
                    {
                        "label": "あなた (Anata)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Ao falar com um cliente chamado Yamamoto, qual opção é normalmente mais polida?",
                "options": [
                    {
                        "label": "Usar 山本さん (Yamamoto-san)",
                        "isCorrect": true
                    },
                    {
                        "label": "Usar apenas 山本 (Yamamoto)",
                        "isCorrect": false
                    },
                    {
                        "label": "Usar 俺 (ore)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "わたし は ペドロ です",
                "translation": "Eu sou Pedro.",
                "chunks": [
                    "わたし",
                    "は",
                    "ペドロ",
                    "です"
                ]
            },
            {
                "sentenceJp": "さとう せんせい です",
                "translation": "É o professor Sato.",
                "chunks": [
                    "さとう",
                    "せんせい",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você encontra seu professor de japonês no corredor da universidade.",
                "npcName": "Professor Sato",
                "npcMessage": "あ！ こんにちは！ おげんき ですか？ (Ah! Olá! Como você está?)",
                "options": [
                    {
                        "text": "こんにちは、佐藤さん！ (Konnichiwa, Satou-san!)",
                        "feedback": "É uma forma polida, mas ao falar diretamente com um professor, 先生 é a escolha mais usual neste contexto.",
                        "isCorrect": false
                    },
                    {
                        "text": "こんにちは、佐藤先生！ げんき です！ (Olá, Sato-sensei! Estou bem!)",
                        "feedback": "Boa escolha: 佐藤先生 é uma forma comum de tratar um professor diretamente.",
                        "isCorrect": true
                    },
                    {
                        "text": "おい！ サトウ！ (Oi! Sato!)",
                        "feedback": "Soa casual demais para um encontro com o professor na universidade.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Você está se apresentando em uma importante convenção de negócios em Osaka.",
                "npcName": "Diretor Suzuki",
                "npcMessage": "はじめまして。スズキ です。よろしくおねがいします。",
                "options": [
                    {
                        "text": "はじめまして！ ペドロさん です。よろしく おねがいします！",
                        "feedback": "Em uma apresentação, é mais natural dizer o próprio nome sem さん.",
                        "isCorrect": false
                    },
                    {
                        "text": "はじめまして！ ペドロ です。こちらこそ、よろしく おねがいします！",
                        "feedback": "Boa apresentação: usa o próprio nome sem さん e responde de forma polida.",
                        "isCorrect": true
                    },
                    {
                        "text": "こんにちは、スズキ！",
                        "feedback": "Fica informal demais para uma primeira conversa de negócios.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Na clínica médica, o enfermeiro precisa confirmar de quem é a vez para a consulta com o Dr. Tanaka.",
                "npcName": "Enfermeiro",
                "npcMessage": "ペドロさん！ 田中先生が お待ちです。 (Sr. Pedro! O Dr. Tanaka está esperando.)",
                "options": [
                    {
                        "text": "はい、わたしです。ありがとうございます。 (Hai, watashi desu. Arigatou gozaimasu.)",
                        "feedback": "Boa resposta: confirma sua identidade e agradece de forma polida.",
                        "isCorrect": true
                    },
                    {
                        "text": "はい！ わたし・せんせい です！",
                        "feedback": "先生 é um título para a pessoa tratada; aqui ele não se aplica a você.",
                        "isCorrect": false
                    },
                    {
                        "text": "いいえ、田中さんです。",
                        "feedback": "Além de negar a chamada, esta resposta não corresponde à pessoa que o enfermeiro chamou.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Por que uma apresentação normalmente evita 'Watashi wa Maria-san desu'?",
                "options": [
                    "Porque '-san' é usado exclusivamente para homens.",
                    "Porque ～さん é normalmente usado para tratar outra pessoa, não para apresentar o próprio nome.",
                    "Porque a palavra 'Watashi' significa 'Você'."
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra '～さん' (~san)?",
                "options": [
                    "Sr. / Sra. / Senhorita",
                    "Professor(a) / Médico(a) / Mestre",
                    "Eu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～せんせい' (~sensei)?",
                "options": [
                    "Sr. / Sra. / Senhorita",
                    "Professor(a) / Médico(a) / Mestre",
                    "Eu"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'わたし' (Watashi)?",
                "options": [
                    "Professor(a) / Médico(a) / Mestre",
                    "Sr. / Sra. / Senhorita",
                    "Eu"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre o tratamento com ～さん, qual afirmação é correta?",
                "options": [
                    "Em apresentações, normalmente dizemos o próprio nome sem ～さん e usamos ～さん para tratar outra pessoa.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_06",
        "title": "Nacionalidades e Países (Jin & Go)",
        "section": 2,
        "sectionTitle": "Identidade & Profissões",
        "level": "A1",
        "xpReward": 85,
        "stage1_context": {
            "audioGuide": "Watashi wa Burajiru-jin desu. Nihon-go desu.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "De onde você é e qual língua você fala? No Japão, dizer sua nacionalidade é o primeiro passo para criar amizades internacionais. Vamos dominar os sufixos mágicos de país e idioma!"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "にほん (日本)",
                "romaji": "Nihon",
                "translation": "Japão",
                "timeContext": "Nome comum do Japão em japonês."
            },
            {
                "type": "vocab",
                "kanji": "ブラジル",
                "romaji": "Burajiru",
                "translation": "Brasil",
                "timeContext": "Nome de país estrangeiro geralmente escrito em katakana: ブラジル."
            },
            {
                "type": "vocab",
                "kanji": "～じん (人)",
                "romaji": "~jin",
                "translation": "Pessoa de / nacionalidade",
                "timeContext": "Forma muitas nacionalidades, como 日本人 e ブラジル人. Aprenda cada forma de país como vocabulário, pois há exceções."
            },
            {
                "type": "vocab",
                "kanji": "～ご (語)",
                "romaji": "~go",
                "translation": "Idioma / língua",
                "timeContext": "Aparece em nomes de idiomas, como 日本語. Nem todo idioma segue apenas 'nome do país + 語'; 英語 é um exemplo importante."
            },
            {
                "type": "grammar_pill",
                "title": "Nacionalidade e idioma",
                "rule": "日本人 indica uma pessoa japonesa e 日本語 indica o idioma japonês. Muitos nomes seguem padrões parecidos, mas convém aprender cada forma frequente.",
                "formula": "日本 + 人 = 日本人 | 日本 + 語 = 日本語",
                "example": "日本人 (Nihonjin) = pessoa japonesa; 日本語 (Nihongo) = língua japonesa; ブラジル人 (Burajirujin) = pessoa brasileira."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como dizer 'Sou brasileiro(a)' em uma apresentação simples?",
                "options": [
                    {
                        "label": "🇧🇷 わたしは ブラジルじん です (Watashi wa Burajiru-jin desu)",
                        "isCorrect": true
                    },
                    {
                        "label": "🗣️ わたしは ブラジルご です (Watashi wa Burajiru-go desu)",
                        "isCorrect": false
                    },
                    {
                        "label": "🗾 わたしは にほんじん です (Watashi wa Nihon-jin desu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. O que há de inadequado em dizer 'Watashi wa Burajiru-go desu' para informar sua nacionalidade?",
                "options": [
                    {
                        "label": "Você estará dizendo corretamente que nasceu no Brasil",
                        "isCorrect": false
                    },
                    {
                        "label": "ブラジル語 é um idioma; para informar nacionalidade, use ブラジル人",
                        "isCorrect": true
                    },
                    {
                        "label": "Você estará ofendendo a pessoa com uma gíria rude",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual é o sufixo correto para se referir ao IDIOMA japonês?",
                "options": [
                    {
                        "label": "～じん (~jin)",
                        "isCorrect": false
                    },
                    {
                        "label": "～さん (~san)",
                        "isCorrect": false
                    },
                    {
                        "label": "～ご (~go)",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "4. Por que ブラジル (Burajiru) aparece em katakana?",
                "options": [
                    {
                        "label": "Porque é a grafia convencional desse nome estrangeiro em japonês",
                        "isCorrect": true
                    },
                    {
                        "label": "Porque é uma palavra sagrada",
                        "isCorrect": false
                    },
                    {
                        "label": "Porque os japoneses não conseguem pronunciar o Hiragana",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Se 'Eigo' (英語) significa 'Língua Inglesa', qual seria a tradução lógica de 'Furansu-jin' (フランス人)?",
                "options": [
                    {
                        "label": "Língua Francesa",
                        "isCorrect": false
                    },
                    {
                        "label": "Pessoa Francesa / Francês (Nacionalidade)",
                        "isCorrect": true
                    },
                    {
                        "label": "A cidade de Paris",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "わたし は ブラジルじん です",
                "translation": "Eu sou brasileiro(a).",
                "chunks": [
                    "わたし",
                    "は",
                    "ブラジルじん",
                    "です"
                ]
            },
            {
                "sentenceJp": "にほんご の ほん です",
                "translation": "É um livro de japonês.",
                "chunks": [
                    "にほんご",
                    "の",
                    "ほん",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você passa pela imigração no Aeroporto de Narita e o oficial pergunta sua nacionalidade.",
                "npcName": "Oficial de Imigração",
                "npcMessage": "こんにちは。どちらの ご出身ですか？ (Olá. De onde você é?)",
                "options": [
                    {
                        "text": "ブラジルじん です。 (Burajiru-jin desu.)",
                        "feedback": "Boa resposta para praticar nacionalidade: ブラジル人 identifica uma pessoa brasileira.",
                        "isCorrect": true
                    },
                    {
                        "text": "ブラジルご です！",
                        "feedback": "ブラジル語 se refere a um idioma, não à nacionalidade da pessoa.",
                        "isCorrect": false
                    },
                    {
                        "text": "さようなら！",
                        "feedback": "Não responde à pergunta sobre sua origem.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Em uma recepção de estudantes em Tóquio, uma japonesa simpatiza com você.",
                "npcName": "Estudante Haruka",
                "npcMessage": "わあ！ はじめまして！ わたし は にほんじん です。",
                "options": [
                    {
                        "text": "はじめまして！ ペドロ です。わたし は ブラジルじん です！",
                        "feedback": "Boa apresentação: informa seu nome e usa ブラジル人 para a nacionalidade.",
                        "isCorrect": true
                    },
                    {
                        "text": "こちらこそ！ にほんじん です！",
                        "feedback": "Você se descreve como japonês(a), o que não corresponde ao cenário proposto.",
                        "isCorrect": false
                    },
                    {
                        "text": "おはようございます！",
                        "feedback": "Fora de contexto e não responde à apresentação dela.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Em uma livraria em Quioto, você está procurando um livro para estudar o idioma local.",
                "npcName": "Atendente da Livraria",
                "npcMessage": "いらっしゃいませ！ なに を おさがし ですか？ (Bem-vindo! O que está procurando?)",
                "options": [
                    {
                        "text": "すみません。にほんご の ほん は ありますか？",
                        "feedback": "Boa pergunta: 日本語 indica o idioma e 本 indica o livro procurado.",
                        "isCorrect": true
                    },
                    {
                        "text": "にほんじん です！",
                        "feedback": "日本人 descreve uma pessoa, não o livro procurado.",
                        "isCorrect": false
                    },
                    {
                        "text": "よろしくおねがいします！",
                        "feedback": "Incompleto e sem sentido para um pedido de ajuda em loja.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a diferença estrutural entre 'Nihon-jin' e 'Nihon-go'?",
                "options": [
                    "Nihon-jin é formal e Nihon-go é gíria.",
                    "Nihon-jin se refere à nacionalidade/pessoa e Nihon-go se refere ao idioma japonês.",
                    "Não há diferença, significam a mesma coisa."
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'にほん (日本)' (Nihon)?",
                "options": [
                    "Japão",
                    "Brasil",
                    "Pessoa de / nacionalidade"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ブラジル' (Burajiru)?",
                "options": [
                    "Japão",
                    "Brasil",
                    "Pessoa de / nacionalidade"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra '～じん (人)' (~jin)?",
                "options": [
                    "Brasil",
                    "Japão",
                    "Sufixo de Nacionalidade (Pessoa de...)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra '～ご (語)' (~go)?",
                "options": [
                    "Idioma / língua",
                    "Japão",
                    "Brasil"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_07",
        "title": "Ocupações e o tópico は",
        "section": 2,
        "sectionTitle": "Identidade & Profissões",
        "level": "A1",
        "xpReward": 90,
        "stage1_context": {
            "audioGuide": "Watashi wa gakusei desu. Watashi wa kaishain desu.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Fale sobre estudos e trabalho com frases nominais simples e use は para marcar o tópico quando ele precisa ficar explícito."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "がくせい (学生)",
                "romaji": "Gakusei",
                "translation": "Estudante / Aluno(a)",
                "timeContext": "Pessoa que estuda em uma instituição de ensino; o contexto esclarece o tipo de curso."
            },
            {
                "type": "vocab",
                "kanji": "かいしゃいん (会社員)",
                "romaji": "Kaishain",
                "translation": "Funcionário(a) de empresa",
                "timeContext": "Pessoa empregada por uma empresa; não indica uma função específica."
            },
            {
                "type": "vocab",
                "kanji": "いしゃ (医者)",
                "romaji": "Isha",
                "translation": "Médico(a)",
                "timeContext": "Pessoa cuja profissão é a medicina. Ao se dirigir a um médico, 先生 é frequente em muitos contextos."
            },
            {
                "type": "vocab",
                "kanji": "エンジニア",
                "romaji": "Enjinia",
                "translation": "Engenheiro(a)",
                "timeContext": "Empréstimo escrito em katakana; pode abranger diferentes especialidades de engenharia."
            },
            {
                "type": "grammar_pill",
                "title": "A partícula de tópico は",
                "rule": "Quando funciona como partícula, は é pronunciada wa. Ela introduz o tópico sobre o qual a frase faz uma afirmação; o tópico pode ser omitido quando já está claro.",
                "formula": "X は Y です (X wa Y desu)",
                "example": "わたし は エンジニア です = Eu sou engenheiro(a). けんじさん は かいしゃいん です = Kenji trabalha em uma empresa."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como você diz formalmente em japonês: 'Eu sou estudante'?",
                "options": [
                    {
                        "label": "🧑‍🎓 わたし は がくせい です (Watashi wa gakusei desu)",
                        "isCorrect": true
                    },
                    {
                        "label": "💼 わたし は かいしゃいん です (Watashi wa kaishain desu)",
                        "isCorrect": false
                    },
                    {
                        "label": "🏥 がくせい は いしゃ です (Gakusei wa isha desu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Por que a partícula gramatical de tópico 'は' é considerada especial na pronúncia?",
                "options": [
                    {
                        "label": "Porque ela nunca deve ser pronunciada em voz alta",
                        "isCorrect": false
                    },
                    {
                        "label": "Porque é escrita com o hiragana 'ha', mas quando funciona como partícula deve ser pronunciada como 'WA'",
                        "isCorrect": true
                    },
                    {
                        "label": "Porque ela só pode ser usada por médicos e professores",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Se você trabalha em um escritório corporativo em Tóquio, qual é o seu título profissional padrão?",
                "options": [
                    {
                        "label": "がくせい (Gakusei)",
                        "isCorrect": false
                    },
                    {
                        "label": "いしゃ (Isha)",
                        "isCorrect": false
                    },
                    {
                        "label": "かいしゃいん (Kaishain)",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "4. Qual frase apresenta Tanaka como engenheiro?",
                "options": [
                    {
                        "label": "田中さん は エンジニア です (Tanaka-san wa enjinia desu)",
                        "isCorrect": true
                    },
                    {
                        "label": "エンジニア は 田中さん です (Enjinia wa Tanaka-san desu)",
                        "isCorrect": false
                    },
                    {
                        "label": "田中さん エンジニア は です (Tanaka-san enjinia wa desu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Você está conversando sobre carreiras. O que significa a frase 'Watashi wa isha desu'?",
                "options": [
                    {
                        "label": "Eu sou estudante",
                        "isCorrect": false
                    },
                    {
                        "label": "Eu sou médico(a)",
                        "isCorrect": true
                    },
                    {
                        "label": "Eu estou doente",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "わたし は がくせい です",
                "translation": "Eu sou estudante.",
                "chunks": [
                    "わたし",
                    "は",
                    "がくせい",
                    "です"
                ]
            },
            {
                "sentenceJp": "けんじさん は かいしゃいん です",
                "translation": "Kenji trabalha em uma empresa.",
                "chunks": [
                    "けんじさん",
                    "は",
                    "かいしゃいん",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está em uma festa de boas-vindas na universidade em Tóquio e se apresenta para uma colega.",
                "npcName": "Yuki",
                "npcMessage": "はじめまして！ ユキ です。 わたし は がくせい です。 よろしくおねがいします！ (Prazer! Sou a Yuki. Sou estudante. Conto com sua gentileza!)",
                "options": [
                    {
                        "text": "はじめまして！ ペドロ です。わたし は エンジニア です。よろしく おねがいします。",
                        "feedback": "Boa apresentação: informa nome e ocupação com a estrutura X は Y です.",
                        "isCorrect": true
                    },
                    {
                        "text": "こんにちは！ ユキ は かいしゃいん です。",
                        "feedback": "Incorreto: Você acabou de dizer que a Yuki é funcionária de empresa!",
                        "isCorrect": false
                    },
                    {
                        "text": "ありがとう！ わたし です。",
                        "feedback": "Incompleto e estranho: 'Obrigado! Sou eu.'",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Em um coquetel de networking em Osaka, um empresário se aproxima de você.",
                "npcName": "Sr. Yamamoto",
                "npcMessage": "はじめまして。ヤマモト です。 わたし は かいしゃいん です。",
                "options": [
                    {
                        "text": "こちらこそ。ペドロ です。わたし は がくせい です。よろしく おねがいします。",
                        "feedback": "Boa resposta: apresenta-se e informa que é estudante de modo polido.",
                        "isCorrect": true
                    },
                    {
                        "text": "おつかれさまでした！",
                        "feedback": "Inadequado: 'Otsukaresama' é para despedida de trabalho, não para quando alguém se apresenta no início de uma festa.",
                        "isCorrect": false
                    },
                    {
                        "text": "わたし は ヤマモト です！",
                        "feedback": "Você se apresenta com o nome da outra pessoa, o que não corresponde à situação.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Na recepção do hospital, a atendente precisa preencher seu cadastro profissional.",
                "npcName": "Atendente do Hospital",
                "npcMessage": "ペドロさん、おしごと は なん ですか？",
                "options": [
                    {
                        "text": "わたし は エンジニア です！",
                        "feedback": "Boa resposta: informa uma ocupação com a estrutura estudada.",
                        "isCorrect": true
                    },
                    {
                        "text": "わたし は ブラジルじん です！",
                        "feedback": "A pergunta é sobre trabalho; a resposta fornece nacionalidade.",
                        "isCorrect": false
                    },
                    {
                        "text": "よろしくおねがいします！",
                        "feedback": "Não responde à pergunta do cadastro do hospital.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual é a função gramatical da partícula 'は' (wa) em uma frase?",
                "options": [
                    "Indicar o fim da frase e transformar em pergunta.",
                    "Indicar o TÓPICO da frase (de quem ou do que estamos falando).",
                    "Substituir a palavra 'Obrigado'."
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'がくせい (学生)' (Gakusei)?",
                "options": [
                    "Estudante / Aluno(a)",
                    "Funcionário(a) de Empresa / Office Worker",
                    "Médico(a)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'かいしゃいん (会社員)' (Kaishain)?",
                "options": [
                    "Estudante / Aluno(a)",
                    "Funcionário(a) de Empresa / Office Worker",
                    "Médico(a)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'いしゃ (医者)' (Isha)?",
                "options": [
                    "Funcionário(a) de Empresa / Office Worker",
                    "Estudante / Aluno(a)",
                    "Médico(a)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'エンジニア' (Enjinia)?",
                "options": [
                    "Engenheiro(a) / Programador(a)",
                    "Estudante / Aluno(a)",
                    "Funcionário(a) de Empresa / Office Worker"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_08",
        "title": "Perguntas com か, だれ e なん",
        "section": 2,
        "sectionTitle": "Identidade & Profissões",
        "level": "A1",
        "xpReward": 90,
        "stage1_context": {
            "audioGuide": "Gakusei desu ka? Ano hito wa dare desu ka?",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Forme perguntas simples com か e escolha palavras interrogativas adequadas ao que deseja perguntar."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "～か",
                "romaji": "~ka",
                "translation": "Partícula de pergunta",
                "timeContext": "Em perguntas polidas simples, か costuma vir ao fim da frase. Na escrita contemporânea, o ponto de interrogação também pode aparecer."
            },
            {
                "type": "vocab",
                "kanji": "あなた",
                "romaji": "Anata",
                "translation": "Você",
                "timeContext": "Pode significar 'você', mas seu uso depende de relação e contexto. Muitas vezes o japonês omite o pronome ou usa o nome/título da pessoa."
            },
            {
                "type": "vocab",
                "kanji": "だれ / どなた",
                "romaji": "Dare / Donata",
                "translation": "Quem? / quem? (polido)",
                "timeContext": "だれ pergunta quem é alguém; どなた é uma alternativa mais polida."
            },
            {
                "type": "vocab",
                "kanji": "なん / なに",
                "romaji": "Nan / Nani",
                "translation": "O que? / Qual?",
                "timeContext": "A famosa palavra para perguntar sobre coisas ou profissões."
            },
            {
                "type": "grammar_pill",
                "title": "Perguntas básicas",
                "rule": "Uma pergunta polida de sim/não pode ser formada ao acrescentar か ao enunciado. Perguntas também podem usar palavras como なん e だれ.",
                "formula": "Afirmação: がくせいです。 → Pergunta: がくせいですか。",
                "example": "あの ひと は だれ ですか。 = Quem é aquela pessoa? せんこう は なん ですか。 = Qual é sua área de estudo?"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Se você quer perguntar educadamente 'Você é brasileiro?' para alguém, como você monta a frase em japonês?",
                "options": [
                    {
                        "label": "❓ ブラジルじん です か？ (Burajiru-jin desu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "❗ ブラジルじん です。 (Burajiru-jin desu.)",
                        "isCorrect": false
                    },
                    {
                        "label": "🗣️ ブラジルご です か？ (Burajiru-go desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual orientação é mais segura sobre あなた em uma conversa direta?",
                "options": [
                    {
                        "label": "Porque 'Anata' é um palavrão proibido no Japão",
                        "isCorrect": false
                    },
                    {
                        "label": "O contexto decide: muitas vezes o pronome é omitido ou se usa nome/título, mas あなた não é um palavrão",
                        "isCorrect": true
                    },
                    {
                        "label": "Porque 'Anata' só pode ser usado para falar com animais",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Como você pergunta educadamente 'Quem é aquela pessoa?' usando a palavra formal para 'Quem'?",
                "options": [
                    {
                        "label": "あの ひと は なに です か？ (Ano hito wa NANI desu ka?)",
                        "isCorrect": false
                    },
                    {
                        "label": "あの ひと は どなた です か？ (Ano hito wa DONATA desu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "あの ひと は どこ です か？ (Ano hito wa DOKO desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual é o papel da partícula 'か' (ka) colocada no final absoluto de uma frase?",
                "options": [
                    {
                        "label": "Transformar a afirmação em uma PERGUNTA",
                        "isCorrect": true
                    },
                    {
                        "label": "Dar ênfase de raiva na frase",
                        "isCorrect": false
                    },
                    {
                        "label": "Indicar que a frase está no tempo passado",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Se alguém te pergunta 'Anata wa kaishain desu ka?' e você é um funcionário de empresa, como responde afirmando?",
                "options": [
                    {
                        "label": "いいえ、がくせい です (Iie, gakusei desu - Não, sou estudante)",
                        "isCorrect": false
                    },
                    {
                        "label": "はい、かいしゃいん です (Hai, kaishain desu - Sim, sou funcionário)",
                        "isCorrect": true
                    },
                    {
                        "label": "はい、いしゃ です か？ (Hai, isha desu ka?)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "がくせい です か",
                "translation": "Você é estudante?",
                "chunks": [
                    "がくせい",
                    "です",
                    "か"
                ]
            },
            {
                "sentenceJp": "あの ひと は だれ です か",
                "translation": "Quem é aquela pessoa?",
                "chunks": [
                    "あの ひと",
                    "は",
                    "だれ",
                    "です",
                    "か"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está na recepção de um hotel em Quioto e o atendente quer confirmar sua identidade e profissão.",
                "npcName": "Atendente do Hotel",
                "npcMessage": "ペドロさん です か？ かいしゃいん です か？ (Você é o Pedro? É funcionário de empresa?)",
                "options": [
                    {
                        "text": "はい、ペドロ です。がくせい です。",
                        "feedback": "Boa resposta: confirma a identidade e informa a ocupação.",
                        "isCorrect": true
                    },
                    {
                        "text": "いいえ、だれ です か？ (Não, quem é você?)",
                        "feedback": "Não responde às perguntas de confirmação feitas pelo atendente.",
                        "isCorrect": false
                    },
                    {
                        "text": "はい、かいしゃいん です か？",
                        "feedback": "A resposta repete a pergunta em vez de confirmar ou corrigir a informação.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Você vê uma foto na mesa do seu colega Kenji com uma pessoa desconhecida e quer perguntar quem é de forma educada.",
                "npcName": "Kenji",
                "npcMessage": "あ、これ は わたし の しゃしん (foto) です！",
                "options": [
                    {
                        "text": "ケンジさん、この ひと は どなた です か？ (Kenji-san, quem é esta pessoa?)",
                        "feedback": "Boa escolha: どなた é uma forma polida de perguntar quem é uma pessoa.",
                        "isCorrect": true
                    },
                    {
                        "text": "この ひと は なに です か？ (O que é esta pessoa?)",
                        "feedback": "なに pergunta 'o que'; para identificar uma pessoa, use だれ ou どなた.",
                        "isCorrect": false
                    },
                    {
                        "text": "さようなら！",
                        "feedback": "Incorreto: Sair correndo sem motivo no meio da conversa.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Em uma aula de conversação em Tóquio, o professor quer testar se você entendeu a partícula de pergunta.",
                "npcName": "Professor Sato",
                "npcMessage": "ペドロさん は、にほんじん です か？ ブラジルじん です か？",
                "options": [
                    {
                        "text": "はい！ にほんじん です か？",
                        "feedback": "Incorreto: Você não respondeu, apenas fez outra pergunta aleatória.",
                        "isCorrect": false
                    },
                    {
                        "text": "わたし は ブラジルじん です！",
                        "feedback": "Boa resposta: responde afirmativamente com a nacionalidade proposta.",
                        "isCorrect": true
                    },
                    {
                        "text": "いいえ、ブラジルご です。",
                        "feedback": "ブラジル語 se refere a um idioma, não à nacionalidade da pessoa.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Como transformamos uma frase afirmativa como 'Kenji wa isha desu' em uma pergunta?",
                "options": [
                    "Mudamos a ordem das palavras para 'Isha wa Kenji desu'.",
                    "Gritamos a frase bem alto.",
                    "Adicionamos a partícula 'か' (ka) no final: 'Kenji wa isha desu ka?'."
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra '～か' (~ka)?",
                "options": [
                    "Partícula de Pergunta (O ponto de interrogação falado)",
                    "Você",
                    "Quem? / Quem? (Mais formal)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'あなた' (Anata)?",
                "options": [
                    "Partícula de Pergunta (O ponto de interrogação falado)",
                    "Você",
                    "Quem? / Quem? (Mais formal)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'だれ / どなた' (Dare / Donata)?",
                "options": [
                    "Você",
                    "Partícula de Pergunta (O ponto de interrogação falado)",
                    "Quem? / Quem? (Mais formal)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'なん / なに' (Nan / Nani)?",
                "options": [
                    "O que? / Qual?",
                    "Partícula de Pergunta (O ponto de interrogação falado)",
                    "Você"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_09",
        "title": "Números de 1 a 10 & Dizendo sua Idade (-sai)",
        "section": 2,
        "sectionTitle": "Identidade & Profissões",
        "level": "A1",
        "xpReward": 95,
        "stage1_context": {
            "audioGuide": "Ichi, ni, san! Ni-juu-go sai desu.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Contar em japonês é lógico e super fácil! Hoje vamos dominar os números de 1 a 10 e aprender o sufixo 'sai' para responder à clássica pergunta: 'Quantos anos você tem?'."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "いち、に、さん",
                "romaji": "Ichi, Ni, San",
                "translation": "1, 2, 3",
                "timeContext": "A base da contagem japonesa."
            },
            {
                "type": "vocab",
                "kanji": "よん (し) 、 ご 、 ろく",
                "romaji": "Yon (Shi), Go, Roku",
                "translation": "4, 5, 6",
                "timeContext": "O número 4 é mais dito como 'Yon' porque 'Shi' tem o mesmo som da palavra 'Morte' (死)!"
            },
            {
                "type": "vocab",
                "kanji": "なな (しち) 、 はち 、 きゅう 、 じゅう",
                "romaji": "Nana (Shichi), Hachi, Kyuu, Juu",
                "translation": "7, 8, 9, 10",
                "timeContext": "Com o 'Juu' (10), você já consegue formar números até 99!"
            },
            {
                "type": "grammar_pill",
                "title": "O Lego da Idade (～さい)",
                "rule": "Para formar números maiores, basta juntar as peças: 20 é 2 dez (にじゅう - Ni-juu), 25 é 2 dez 5 (にじゅうご - Ni-juu-go). Para dizer a idade, colamos o sufixo さい (sai) no final!",
                "formula": "[ Número ] + さい (sai) です",
                "example": "25 anos ➔ にじゅうご・さい です (Ni-juu-go sai desu). 🚨 EXCEÇÃO CULTURAL DE OURO: Para dizer 20 anos exatos, NUNCA diga 'Ni-juu sai'. A palavra especial para a maioridade japonesa de 20 anos é はたち (HATACHI)!"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Sabendo que 3 é 'San' e 10 é 'Juu', como se diz '30 anos de idade' em japonês?",
                "options": [
                    {
                        "label": "🎂 さんじゅう・さい (San-juu sai)",
                        "isCorrect": true
                    },
                    {
                        "label": "🎂 じゅうさん・さい (Juu-san sai)",
                        "isCorrect": false
                    },
                    {
                        "label": "🎂 はたち (Hatachi)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual é a palavra ESPECIAL E OBRIGATÓRIA para dizer que você tem exatamente 20 anos de idade no Japão?",
                "options": [
                    {
                        "label": "にじゅう・さい (Ni-juu sai)",
                        "isCorrect": false
                    },
                    {
                        "label": "はたち (Hatachi)",
                        "isCorrect": true
                    },
                    {
                        "label": "じゅうに・さい (Juu-ni sai)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Por que os japoneses preferem dizer 'Yon' para o número 4 em vez de 'Shi' na maioria das situações?",
                "options": [
                    {
                        "label": "Porque 'Shi' tem a mesma pronúncia da palavra 'Morte' (死) em japonês",
                        "isCorrect": true
                    },
                    {
                        "label": "Porque 'Yon' é muito mais curto de falar",
                        "isCorrect": false
                    },
                    {
                        "label": "Porque 'Shi' é um número exclusivo do imperador",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Se você quer perguntar educadamente 'Quantos anos você tem?', qual é a frase correta?",
                "options": [
                    {
                        "label": "なんご です か？ (Nan-go desu ka?)",
                        "isCorrect": false
                    },
                    {
                        "label": "なんさい です か？ (Nan-sai desu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "だれ です か？ (Dare desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Sabendo a lógica do Lego dos números, como se diz '18 anos' em japonês (10 = Juu, 8 = Hachi)?",
                "options": [
                    {
                        "label": "はちじゅう・さい (Hachi-juu sai - 80 anos)",
                        "isCorrect": false
                    },
                    {
                        "label": "じゅうはち・さい (Juu-hachi sai - 18 anos)",
                        "isCorrect": true
                    },
                    {
                        "label": "はたち (Hatachi - 20 anos)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "きのう ほん を よみました",
                "translation": "Ontem li um livro.",
                "chunks": [
                    "きのう",
                    "ほん",
                    "を",
                    "よみました"
                ]
            },
            {
                "sentenceJp": "けさ おちゃ を のみました",
                "translation": "Hoje de manhã tomei chá.",
                "chunks": [
                    "けさ",
                    "おちゃ",
                    "を",
                    "のみました"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está jantando com a Sra. Suzuki, sua anfitriã no Japão, e ela pergunta sobre você.",
                "npcName": "Sra. Suzuki",
                "npcMessage": "[Seu Nome]・さん は、 なん・さい です か？ (Sr(a). [Seu Nome], quantos anos você tem?)",
                "options": [
                    {
                        "text": "わたし は にじゅうご・さい です！ (Tenho 25 anos!)",
                        "feedback": "Perfeito! Você entendeu a pergunta 'Nan-sai desu ka' e respondeu com o sufixo de idade correto.",
                        "isCorrect": true
                    },
                    {
                        "text": "わたし は にじゅうご・じん です！ (Sou 25 pessoas/nacionalidade!)",
                        "feedback": "Ops! Você usou o sufixo '-jin' (de nacionalidade) em vez de '-sai' (idade)!",
                        "isCorrect": false
                    },
                    {
                        "text": "いち、に、さん です！ (Sou 1, 2, 3!)",
                        "feedback": "Incorreto: Você apenas contou até 3!",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Em um clube universitário de Tóquio, um calouro quer saber se você já atingiu a maioridade de 20 anos.",
                "npcName": "Calouro Kenji",
                "npcMessage": "[Seu Nome]・さん、もしかして はたち (20 anos) です か？",
                "options": [
                    {
                        "text": "いいえ、わたし は じゅうきゅう・さい (19 anos) です！",
                        "feedback": "Excelente! Você entendeu a palavra especial 'Hatachi' e respondeu sua idade correta usando a lógica dos números.",
                        "isCorrect": true
                    },
                    {
                        "text": "はい、にじゅう・さい です！",
                        "feedback": "Atenção cultural! Para 20 anos nunca dizemos 'Ni-juu sai', devemos confirmar dizendo 'Hatachi desu'!",
                        "isCorrect": false
                    },
                    {
                        "text": "こんにちは！",
                        "feedback": "Não responde a pergunta sobre a sua idade.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Você está comprando ingressos para um museu em Osaka e a atendente pergunta a idade para o desconto.",
                "npcName": "Atendente do Museu",
                "npcMessage": "すみません、がくせい・さん です か？ なん・さい です か？",
                "options": [
                    {
                        "text": "はい、がくせい です。 にじゅう・さい です！",
                        "feedback": "Lembre-se da regra de ouro: para 20 anos, o correto é sempre HATACHI!",
                        "isCorrect": false
                    },
                    {
                        "text": "はい、がくせい です。 にじゅうに・さい (22 anos) です！",
                        "feedback": "Impecável! Confirmou o status de estudante e disse sua idade 'Ni-juu-ni sai' com perfeição para garantir o desconto!",
                        "isCorrect": true
                    },
                    {
                        "text": "ありがとう！",
                        "feedback": "Incompleto: Esqueceu de dizer sua idade para o ingresso.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a pronúncia correta para o número 35 em japonês?",
                "options": [
                    "さんじゅうご (San-juu-go)",
                    "ごじゅうさん (Go-juu-san)",
                    "さんごじゅう (San-go-juu)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'いち、に、さん' (Ichi, Ni, San)?",
                "options": [
                    "1, 2, 3",
                    "4, 5, 6",
                    "7, 8, 9, 10"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'よん (し) 、 ご 、 ろく' (Yon (Shi), Go, Roku)?",
                "options": [
                    "1, 2, 3",
                    "4, 5, 6",
                    "7, 8, 9, 10"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'なな (しち) 、 はち 、 きゅう 、 じゅう' (Nana (Shichi), Hachi, Kyuu, Juu)?",
                "options": [
                    "4, 5, 6",
                    "1, 2, 3",
                    "7, 8, 9, 10"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre a regra 'O Lego da Idade (～さい)': qual afirmação é correta?",
                "options": [
                    "Para formar números maiores, basta juntar as peças: 20 é 2 dez (にじゅう - Ni-juu), 25 é 2 dez 5 (にじゅうご - Ni-juu-go). Para dizer a idade, colamos o sufixo さい (sai) no final!",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_10",
        "title": "O Conector da Empatia: Partícula 'Mo' & Revisão",
        "section": 2,
        "sectionTitle": "Identidade & Profissões",
        "level": "A1",
        "xpReward": 110,
        "stage1_context": {
            "audioGuide": "Watashi mo Burajiru-jin desu! Sou desu ka!",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Para criar conexões reais, nada melhor do que encontrar pontos em comum! Vamos aprender a dizer 'Eu também!' com a partícula 'mo' (も) e enfrentar o Desafio Final da Seção 2!"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "～も",
                "romaji": "~mo",
                "translation": "Também (Partícula de inclusão)",
                "timeContext": "Atenção: Ela SUBSTITUI a partícula 'wa' (は)! Nunca diga 'wa mo'."
            },
            {
                "type": "vocab",
                "kanji": "わたし・も",
                "romaji": "Watashi mo",
                "translation": "Eu também!",
                "timeContext": "A resposta mais útil e empática para gerar conexão imediata em conversas."
            },
            {
                "type": "vocab",
                "kanji": "そう です",
                "romaji": "Sou desu",
                "translation": "É verdade / É isso mesmo / Exatamente",
                "timeContext": "Usado para concordar com uma afirmação que alguém fez."
            },
            {
                "type": "vocab",
                "kanji": "そう です か",
                "romaji": "Sou desu ka",
                "translation": "Ah, é mesmo? / Entendi! / Que legal!",
                "timeContext": "Dito com entonação caindo ou neutra para demonstrar que você está ouvindo e interessado."
            },
            {
                "type": "grammar_pill",
                "title": "A Regra da Troca: は (Wa) ➔ も (Mo)",
                "rule": "Quando você quer dizer que TAMBÉM é algo ou TAMBÉM faz algo, você deve pegar a partícula de tópico は (Wa) e trocá-la diretamente pela partícula も (Mo)!",
                "formula": "Frase 1: ケンジ は がくせい です (Kenji é estudante) ➔ Frase 2 (Você): わたし も がくせい です (Eu TAMBÉM sou estudante)",
                "example": "Se o Tanaka diz: 'Sou japonês' (Nihon-jin desu), e seu amigo também é, você aponta e diz: 'Kenji-san MO Nihon-jin desu' (O Kenji TAMBÉM é japonês)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Seu colega diz: 'Watashi wa kaishain desu' (Sou funcionário de empresa). Você TAMBÉM é. Como você responde?",
                "options": [
                    {
                        "label": "🤝 わたし も かいしゃいん です！ (Watashi MO kaishain desu!)",
                        "isCorrect": true
                    },
                    {
                        "label": "❌ わたし は も かいしゃいん です！ (Watashi WA MO kaishain desu!)",
                        "isCorrect": false
                    },
                    {
                        "label": "❓ わたし は かいしゃいん です か？ (Watashi wa kaishain desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Por que é gramaticalmente INCORRETO dizer 'Watashi wa mo Burajiru-jin desu'?",
                "options": [
                    {
                        "label": "Porque a partícula 'mo' (também) SUBSTITUI a partícula 'wa' (tópico); elas nunca podem ser usadas juntas na mesma palavra",
                        "isCorrect": true
                    },
                    {
                        "label": "Porque 'mo' só pode ser usado no início da frase",
                        "isCorrect": false
                    },
                    {
                        "label": "Porque 'wa' é apenas para homens",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Quando um nativo te conta algo novo ou interessante sobre o Japão, qual expressão demonstra empatia e atenção ('Ah, é mesmo? / Entendi!')?",
                "options": [
                    {
                        "label": "🤔 そう です か (Sou desu ka)",
                        "isCorrect": true
                    },
                    {
                        "label": "👋 さようなら (Sayounara)",
                        "isCorrect": false
                    },
                    {
                        "label": "🙅‍♂️ いいえ (Iie)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. [REVISÃO GERAL] Como você diria: 'O Sr. Kenji TAMBÉM é médico (isha)'?",
                "options": [
                    {
                        "label": "ケンジさん は いしゃ です (Kenji-san wa isha desu)",
                        "isCorrect": false
                    },
                    {
                        "label": "いしゃ も ケンジさん です (Isha mo Kenji-san desu)",
                        "isCorrect": false
                    },
                    {
                        "label": "ケンジさん も いしゃ です (Kenji-san MO isha desu)",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "5. [REVISÃO GERAL] Se você quer concordar com algo dizendo 'Exatamente / É isso mesmo', o que você diz?",
                "options": [
                    {
                        "label": "そう です (Sou desu)",
                        "isCorrect": true
                    },
                    {
                        "label": "だれ です か (Dare desu ka)",
                        "isCorrect": false
                    },
                    {
                        "label": "じゃあね (Ja ne)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "どこ へ いきます か",
                "translation": "Aonde você vai?",
                "chunks": [
                    "どこ",
                    "へ",
                    "いきます",
                    "か"
                ]
            },
            {
                "sentenceJp": "スーパー へ いきます",
                "translation": "Vou ao supermercado.",
                "chunks": [
                    "スーパー",
                    "へ",
                    "いきます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está conversando com um estudante brasileiro que conheceu em um café em Tóquio.",
                "npcName": "Lucas",
                "npcMessage": "あ！ [Seu Nome]・さん！ わたし は ブラジルじん です。 ぎんこういん (Bancário) です。",
                "options": [
                    {
                        "text": "そう です か！ わたし も ブラジルじん です！ よろしく！",
                        "feedback": "Excepcional! Você demonstrou interesse com 'Sou desu ka', usou 'Watashi MO' para criar conexão e fechou com simpatia!",
                        "isCorrect": true
                    },
                    {
                        "text": "いいえ、わたし は ブラジルじん です。",
                        "feedback": "Estranho: Você disse 'Não, eu sou brasileiro' quando ele acabou de dizer que também é!",
                        "isCorrect": false
                    },
                    {
                        "text": "さようなら！",
                        "feedback": "Incorreto: Você se despediu dramaticamente no meio da conversa!",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Em um congresso internacional, a Dra. Takahashi descobre sua profissão.",
                "npcName": "Dra. Takahashi",
                "npcMessage": "[Seu Nome]・さん は エンジニア です か？ わたし の あに (meu irmão) も エンジニア です よ！",
                "options": [
                    {
                        "text": "そう です か！ すごい です ね！ (Ah, é mesmo? Que incrível!)",
                        "feedback": "Perfeito! Você ouviu com atenção, usou 'Sou desu ka' para demonstrar interesse e elogiou a coincidência!",
                        "isCorrect": true
                    },
                    {
                        "text": "わたし は も エンジニア です！",
                        "feedback": "Erro gramatical: Nunca junte 'wa' com 'mo' (wa mo) na mesma frase!",
                        "isCorrect": false
                    },
                    {
                        "text": "だれ です か？",
                        "feedback": "Incorreto e rude perguntar 'Quem é você?' para a doutora no meio de um papo amigável.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3 [BOSS FINAL]: Você está no jantar de encerramento da Seção 2 com seus novos amigos em Tóquio e o anfitrião faz um brinde a você.",
                "npcName": "Anfitrião Tanaka",
                "npcMessage": "[Seu Nome]・さん、にほんご の べんきょう (Estudo) は どう ですか？ がくせい・さん です ね！",
                "options": [
                    {
                        "text": "はい！ がくせい です。 毎日 (Todo dia) べんきょう です。 よろしくおねがいします！",
                        "feedback": "🎉 VITÓRIA ÉPICA! Você confirmou seu status com orgulho, demonstrou dedicação e encerrou a Seção 2 como um verdadeiro mestre da etiqueta japonesa! +110 XP!",
                        "isCorrect": true
                    },
                    {
                        "text": "いいえ、だれ です か？",
                        "feedback": "Ops! Você não pode fingir que não conhece o anfitrião no final da festa!",
                        "isCorrect": false
                    },
                    {
                        "text": "ブラジルご です！",
                        "feedback": "Incorreto: 'Burajiru-go' não faz sentido nessa resposta.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a regra fundamental de substituição para usar a partícula 'も' (mo - também)?",
                "options": [
                    "Ela deve ser usada sempre antes do verbo.",
                    "Ela SUBSTITUI completamente a partícula de tópico 'は' (wa) na frase.",
                    "Ela só pode ser usada em perguntas."
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra '～も' (~mo)?",
                "options": [
                    "Também (Partícula de inclusão)",
                    "Eu também!",
                    "É verdade / É isso mesmo / Exatamente"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'わたし・も' (Watashi mo)?",
                "options": [
                    "Também (Partícula de inclusão)",
                    "Eu também!",
                    "É verdade / É isso mesmo / Exatamente"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'そう です' (Sou desu)?",
                "options": [
                    "Eu também!",
                    "Também (Partícula de inclusão)",
                    "É verdade / É isso mesmo / Exatamente"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'そう です か' (Sou desu ka)?",
                "options": [
                    "Ah, é mesmo? / Entendi! / Que legal!",
                    "Também (Partícula de inclusão)",
                    "Eu também!"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_11",
        "title": "Onde Fica? (Kore, Sore, Are & Koko, Soko, Asoko)",
        "section": 3,
        "sectionTitle": "Localização, Lugares & Movimento",
        "level": "A1",
        "xpReward": 95,
        "stage1_context": {
            "audioGuide": "Sore wa nan desu ka?",
            "missionTitle": "Objetivo de Hoje: Mestre do Espaço",
            "missionDescription": "Aprenda o sistema 'Ko-So-A-Do' para apontar para objetos e lugares perto de você (Ko-), perto do ouvinte (So-), longe de ambos (A-) e para perguntar (Do-)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "これ",
                "romaji": "Kore",
                "translation": "Isto (Perto de quem fala)",
                "timeContext": "Para objetos que você pode tocar ou que estão ao seu lado."
            },
            {
                "type": "vocab",
                "kanji": "それ",
                "romaji": "Sore",
                "translation": "Isso (Perto de quem ouve)",
                "timeContext": "Para objetos que estão perto da pessoa com quem você conversa."
            },
            {
                "type": "vocab",
                "kanji": "あれ",
                "romaji": "Are",
                "translation": "Aquilo (Longe de ambos)",
                "timeContext": "Para objetos que estão distantes tanto de você quanto do ouvinte."
            },
            {
                "type": "vocab",
                "kanji": "ここ / そこ / あそこ",
                "romaji": "Koko / Soko / Asoko",
                "translation": "Aqui / Aí / Ali",
                "timeContext": "A mesma lógica de proximidade, mas para LUGARES em vez de objetos."
            },
            {
                "type": "grammar_pill",
                "title": "O GPS Japonês: Ko-So-A-Do",
                "rule": "O japonês tem um sistema genial para indicar distância. Tudo que começa com 'Ko' está perto de você. 'So' está perto do ouvinte. 'A' está longe de ambos. E 'Do' é sempre para perguntar!",
                "formula": "これ (Isto) / それ (Isso) / あれ (Aquilo) / どれ (Qual?)",
                "example": "Para perguntar 'Onde fica o banheiro?', usamos a forma 'Do-': トイレはどこですか (Toire wa DOKO desu ka?)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Você está segurando uma caneta na mão e quer perguntar 'O que é ISTO?'. Qual palavra você usa?",
                "options": [
                    {
                        "label": "👉 これ (Kore)",
                        "isCorrect": true
                    },
                    {
                        "label": "👇 それ (Sore)",
                        "isCorrect": false
                    },
                    {
                        "label": "👆 あれ (Are)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Seu amigo está do outro lado da sala segurando um livro. Como você pergunta 'O que é ISSO aí?'",
                "options": [
                    {
                        "label": "これ は なん です か？ (Kore wa nan desu ka?)",
                        "isCorrect": false
                    },
                    {
                        "label": "それ は なん です か？ (Sore wa nan desu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "あれ は なん です か？ (Are wa nan desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Você e seu amigo veem um prédio estranho bem longe no horizonte. Como você diz 'O que é AQUILO?'",
                "options": [
                    {
                        "label": "👆 あれ は なん です か？ (Are wa nan desu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "👉 これ は なん です か？ (Kore wa nan desu ka?)",
                        "isCorrect": false
                    },
                    {
                        "label": "👇 それ は なん です か？ (Sore wa nan desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Para perguntar 'Onde fica a estação?', qual é a palavra interrogativa correta?",
                "options": [
                    {
                        "label": "えき は ここ です か？ (Eki wa koko desu ka?)",
                        "isCorrect": false
                    },
                    {
                        "label": "えき は どこ です か？ (Eki wa doko desu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "えき は あそこ です か？ (Eki wa asoko desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Se a estação está bem na sua frente, como você responde 'A estação é AQUI.'?",
                "options": [
                    {
                        "label": "えき は そこ です (Eki wa soko desu)",
                        "isCorrect": false
                    },
                    {
                        "label": "えき は ここ です (Eki wa koko desu)",
                        "isCorrect": true
                    },
                    {
                        "label": "えき は あそこ です (Eki wa asoko desu)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "でんしゃ で がっこう へ いきます",
                "translation": "Vou para a escola de trem.",
                "chunks": [
                    "でんしゃ",
                    "で",
                    "がっこう",
                    "へ",
                    "いきます"
                ]
            },
            {
                "sentenceJp": "ともだち と うち へ かえります",
                "translation": "Volto para casa com meu amigo.",
                "chunks": [
                    "ともだち",
                    "と",
                    "うち",
                    "へ",
                    "かえります"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está em uma loja de conveniência (Konbini) e aponta para um salgadinho na prateleira perto do atendente.",
                "npcName": "Atendente",
                "npcMessage": "いらっしゃいませ！ (Bem-vindo!)",
                "options": [
                    {
                        "text": "すみません、それ は なん です か？",
                        "feedback": "Perfeito! Você usou 'Sore' (isso) corretamente para algo perto do atendente.",
                        "isCorrect": true
                    },
                    {
                        "text": "すみません、これ は なん です か？",
                        "feedback": "Incorreto. 'Kore' (isto) seria para algo que está na sua mão.",
                        "isCorrect": false
                    },
                    {
                        "text": "すみません、あれ は なん です か？",
                        "feedback": "Incorreto. 'Are' (aquilo) seria para algo longe de vocês dois.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Um turista perdido te aborda na rua e pergunta onde fica a estação de Shibuya.",
                "npcName": "Turista",
                "npcMessage": "Excuse me... Shibuya Station... どこ です か？",
                "options": [
                    {
                        "text": "ああ、しぶやえき は あそこ です！",
                        "feedback": "Excelente! Você entendeu a pergunta com 'doko' e apontou para longe usando 'asoko' (ali).",
                        "isCorrect": true
                    },
                    {
                        "text": "しぶやえき は ここ です。",
                        "feedback": "Incorreto, a menos que vocês estivessem exatamente na porta da estação.",
                        "isCorrect": false
                    },
                    {
                        "text": "わたし は がくせい です。",
                        "feedback": "Ops! Ele perguntou 'onde', não 'quem é você'!",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a diferença entre 'kore' e 'koko'?",
                "options": [
                    "Nenhuma, são iguais.",
                    "Kore é para objetos, Koko é para lugares.",
                    "Kore é formal, Koko é informal."
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'これ' (Kore)?",
                "options": [
                    "Isto (Perto de quem fala)",
                    "Isso (Perto de quem ouve)",
                    "Aquilo (Longe de ambos)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'それ' (Sore)?",
                "options": [
                    "Isto (Perto de quem fala)",
                    "Isso (Perto de quem ouve)",
                    "Aquilo (Longe de ambos)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'あれ' (Are)?",
                "options": [
                    "Isso (Perto de quem ouve)",
                    "Isto (Perto de quem fala)",
                    "Aquilo (Longe de ambos)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'ここ / そこ / あそこ' (Koko / Soko / Asoko)?",
                "options": [
                    "Aqui / Aí / Ali",
                    "Isto (Perto de quem fala)",
                    "Isso (Perto de quem ouve)"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_12",
        "title": "Existência com います e あります",
        "section": 3,
        "sectionTitle": "Localização, Lugares & Movimento",
        "level": "A1",
        "xpReward": 100,
        "stage1_context": {
            "audioGuide": "Neko ga imasu. Hon ga arimasu.",
            "missionTitle": "Objetivo de hoje",
            "missionDescription": "Distinga います, usado com pessoas e outros seres sencientes, de あります, usado com coisas, acontecimentos e certas relações de posse."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "います",
                "romaji": "Imasu",
                "translation": "haver / existir / estar (pessoas e outros seres sencientes)",
                "timeContext": "Use em exemplos de existência com pessoas e animais."
            },
            {
                "type": "vocab",
                "kanji": "あります",
                "romaji": "Arimasu",
                "translation": "haver / existir / ter (coisas e acontecimentos)",
                "timeContext": "Use com coisas; あります também pode indicar posse ou a ocorrência de um evento."
            },
            {
                "type": "vocab",
                "kanji": "ねこ / いぬ",
                "romaji": "Neko / Inu",
                "translation": "Gato / Cachorro",
                "timeContext": "Exemplos de animais apresentados com います."
            },
            {
                "type": "vocab",
                "kanji": "つくえ / ほん",
                "romaji": "Tsukue / Hon",
                "translation": "Mesa / Livro",
                "timeContext": "Exemplos de objetos apresentados com あります."
            },
            {
                "type": "grammar_pill",
                "title": "Existência com に e が",
                "rule": "Na construção básica de existência, o lugar pode ser marcado por に e o elemento apresentado por が.",
                "formula": "[Lugar] に [Pessoa/coisa] が います / あります",
                "example": "へやに つくえが あります (Heya ni tsukue ga arimasu.) — Há uma mesa no quarto."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Para dizer 'Há um cachorro no parque', qual verbo você deve usar?",
                "options": [
                    {
                        "label": "🐾 います (Imasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "📦 あります (Arimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "🚶 いきます (Ikimasu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Para dizer 'Tem uma caneta na mesa', qual verbo é o correto?",
                "options": [
                    {
                        "label": "🐾 います (Imasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "📦 あります (Arimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "🗣️ はなします (Hanashimasu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Complete a frase: あそこ に せんせい ___ います。",
                "options": [
                    {
                        "label": "は (wa)",
                        "isCorrect": false
                    },
                    {
                        "label": "が (ga)",
                        "isCorrect": true
                    },
                    {
                        "label": "を (o)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Complete a frase: かばん の なか に ほん ___ あります。",
                "options": [
                    {
                        "label": "も (mo)",
                        "isCorrect": false
                    },
                    {
                        "label": "で (de)",
                        "isCorrect": false
                    },
                    {
                        "label": "が (ga)",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "5. Na divisão elementar apresentada, qual verbo é normalmente usado para indicar a existência de uma planta?",
                "options": [
                    {
                        "label": "あります (Arimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "います (Imasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "いきます (Ikimasu)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "こうえん に いぬ が います",
                "translation": "Há um cachorro no parque.",
                "chunks": [
                    "こうえん",
                    "に",
                    "いぬ",
                    "が",
                    "います"
                ]
            },
            {
                "sentenceJp": "へや に つくえ が あります",
                "translation": "Há uma mesa no quarto.",
                "chunks": [
                    "へや",
                    "に",
                    "つくえ",
                    "が",
                    "あります"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está descrevendo seu quarto para um amigo japonês.",
                "npcName": "Amigo Kenji",
                "npcMessage": "へやには なにが ありますか。 (O que há no quarto?)",
                "options": [
                    {
                        "text": "ベッド が あります。 それから、ねこ が あります。",
                        "feedback": "Quase! Gatos são seres vivos, então deveriam usar 'imasu'!",
                        "isCorrect": false
                    },
                    {
                        "text": "ベッド が あります。 それから、ねこ が います。",
                        "feedback": "A resposta usa あります para a cama e います para o gato.",
                        "isCorrect": true
                    },
                    {
                        "text": "ベッド が います。 ねこ が います。",
                        "feedback": "Para a existência de uma cama, use あります neste padrão.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Na apresentação básica, como se distingue います de あります?",
                "options": [
                    "Formal vs. Informal",
                    "Pessoas e outros seres sencientes vs. coisas e acontecimentos",
                    "Presente vs. Passado"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'います' (Imasu)?",
                "options": [
                    "haver / existir / estar (pessoas e outros seres sencientes)",
                    "haver / existir / ter (coisas e acontecimentos)",
                    "Gato / Cachorro"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'あります' (Arimasu)?",
                "options": [
                    "haver / existir / estar (pessoas e outros seres sencientes)",
                    "haver / existir / ter (coisas e acontecimentos)",
                    "Gato / Cachorro"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'ねこ / いぬ' (Neko / Inu)?",
                "options": [
                    "haver / existir / ter (coisas e acontecimentos)",
                    "haver / existir / estar (pessoas e outros seres sencientes)",
                    "Gato / Cachorro"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'つくえ / ほん' (Tsukue / Hon)?",
                "options": [
                    "Mesa / Livro",
                    "haver / existir / estar (pessoas e outros seres sencientes)",
                    "haver / existir / ter (coisas e acontecimentos)"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_13",
        "title": "Movimento com 行きます・来ます・帰ります",
        "section": 3,
        "sectionTitle": "Localização, Lugares & Movimento",
        "level": "A1",
        "xpReward": 100,
        "stage1_context": {
            "audioGuide": "Gakkou e ikimasu.",
            "missionTitle": "Objetivo de hoje",
            "missionDescription": "Pratique os verbos ir, vir e retornar, marcando o destino do movimento com へ ou に."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "いきます (行きます)",
                "romaji": "Ikimasu",
                "translation": "Ir (para algum lugar)",
                "timeContext": "Indica deslocamento para um destino visto como “ir”."
            },
            {
                "type": "vocab",
                "kanji": "きます (来ます)",
                "romaji": "Kimasu",
                "translation": "Vir",
                "timeContext": "Indica movimento em direção ao lugar tomado como referência pelo falante."
            },
            {
                "type": "vocab",
                "kanji": "かえります (帰ります)",
                "romaji": "Kaerimasu",
                "translation": "Voltar / retornar",
                "timeContext": "Indica retorno a casa ou a outro lugar entendido como base ou origem."
            },
            {
                "type": "vocab",
                "kanji": "がっこう / えき / うち",
                "romaji": "Gakkou / Eki / Uchi",
                "translation": "Escola / Estação / Casa",
                "timeContext": "Destinos comuns para os verbos de movimento."
            },
            {
                "type": "grammar_pill",
                "title": "Destino com へ e に",
                "rule": "Com verbos de movimento, へ e に podem marcar o destino. へ é pronunciado e. Essa substituição não vale para todos os outros usos de に.",
                "formula": "[Lugar] + へ/に + [Verbo de Movimento]",
                "example": "とうきょうへ いきます (Toukyou e ikimasu.) — Vou para Tóquio."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Para dizer 'Eu vou para a escola', qual é a frase correta?",
                "options": [
                    {
                        "label": "わたし は がっこう へ いきます",
                        "isCorrect": true
                    },
                    {
                        "label": "わたし は がっこう が あります",
                        "isCorrect": false
                    },
                    {
                        "label": "わたし は がっこう を たべます",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Seu amigo te liga e pergunta 'Você vem para a festa?'. Qual verbo ele usaria?",
                "options": [
                    {
                        "label": "きます か？ (Kimasu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "かえります か？ (Kaerimasu ka?)",
                        "isCorrect": false
                    },
                    {
                        "label": "あります か？ (Arimasu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Você está no trabalho e diz 'Vou voltar para casa'. Qual verbo é o mais apropriado?",
                "options": [
                    {
                        "label": "うち へ いきます (Uchi e ikimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "うち へ かえります (Uchi e kaerimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "うち へ きます (Uchi e kimasu)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "がっこう へ いきます",
                "translation": "Vou para a escola.",
                "chunks": ["がっこう", "へ", "いきます"]
            },
            {
                "sentenceJp": "うち に かえります",
                "translation": "Volto para casa.",
                "chunks": ["うち", "に", "かえります"]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você encontra seu professor no corredor e ele pergunta sobre seus planos para depois da aula.",
                "npcName": "Sato-sensei",
                "npcMessage": "このあと どこへ いきますか。 (Depois daqui, para onde você vai?)",
                "options": [
                    {
                        "text": "うち へ かえります。",
                        "feedback": "A resposta usa 帰ります para indicar o retorno a casa.",
                        "isCorrect": true
                    },
                    {
                        "text": "うち が あります。",
                        "feedback": "Incorreto. Você disse 'Existe uma casa'.",
                        "isCorrect": false
                    },
                    {
                        "text": "うち です。",
                        "feedback": "Incorreto. Você disse 'É uma casa'.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual contraste básico existe entre 行きます e 来ます?",
                "options": [
                    "行きます é ir; 来ます é vir em relação ao ponto de referência.",
                    "'Ikimasu' é formal, 'kimasu' é informal.",
                    "Não há diferença."
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'いきます (行きます)' (Ikimasu)?",
                "options": [
                    "Ir (para algum lugar)",
                    "Vir",
                    "Voltar / retornar"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'きます (来ます)' (Kimasu)?",
                "options": [
                    "Ir (para algum lugar)",
                    "Vir",
                    "Voltar / retornar"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'かえります (帰ります)' (Kaerimasu)?",
                "options": [
                    "Vir",
                    "Ir (para algum lugar)",
                    "Voltar / retornar"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'がっこう / えき / うち' (Gakkou / Eki / Uchi)?",
                "options": [
                    "Escola / Estação / Casa",
                    "Ir (para algum lugar)",
                    "Vir"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_14",
        "title": "Meios e instrumentos com で",
        "section": 3,
        "sectionTitle": "Localização, Lugares & Movimento",
        "level": "A1",
        "xpReward": 105,
        "stage1_context": {
            "audioGuide": "Densha de ikimasu.",
            "missionTitle": "Objetivo de hoje",
            "missionDescription": "Use で para indicar meio de transporte, instrumento ou idioma empregado em uma ação."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "でんしゃ (電車)",
                "romaji": "Densha",
                "translation": "Trem",
                "timeContext": "Exemplo de meio de transporte marcado por で."
            },
            {
                "type": "vocab",
                "kanji": "くるま (車)",
                "romaji": "Kuruma",
                "translation": "Carro",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "バス",
                "romaji": "Basu",
                "translation": "Ônibus",
                "timeContext": "Empréstimo linguístico normalmente escrito em katakana."
            },
            {
                "type": "vocab",
                "kanji": "はし",
                "romaji": "Hashi",
                "translation": "hashi / palitos para comer",
                "timeContext": "Exemplo de instrumento marcado por で."
            },
            {
                "type": "grammar_pill",
                "title": "Meio ou instrumento com で",
                "rule": "A partícula で pode marcar o meio de transporte, o instrumento ou o idioma usado para realizar uma ação.",
                "formula": "[Meio/Ferramenta] + で + [Verbo]",
                "example": "バスで えきまで いきました (Basu de eki made ikimashita.) — Fui até a estação de ônibus."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se diz 'Eu vou para a escola de ônibus'?",
                "options": [
                    {
                        "label": "バス で がっこう へ いきます",
                        "isCorrect": true
                    },
                    {
                        "label": "バス を がっこう へ いきます",
                        "isCorrect": false
                    },
                    {
                        "label": "バス が がっこう へ いきます",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Para dizer 'Eu como sushi com hashi', qual a estrutura correta?",
                "options": [
                    {
                        "label": "はし に すし を たべます",
                        "isCorrect": false
                    },
                    {
                        "label": "はし で すし を たべます",
                        "isCorrect": true
                    },
                    {
                        "label": "はし へ すし を たべます",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Complete a frase: わたし は にほんご ___ はなします (Eu falo em japonês).",
                "options": [
                    {
                        "label": "で (de)",
                        "isCorrect": true
                    },
                    {
                        "label": "も (mo)",
                        "isCorrect": false
                    },
                    {
                        "label": "か (ka)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "はし で すし を たべます",
                "translation": "Como sushi com palitos (hashi).",
                "chunks": [
                    "はし",
                    "で",
                    "すし",
                    "を",
                    "たべます"
                ]
            },
            {
                "sentenceJp": "にほんご で てがみ を かきます",
                "translation": "Escrevo uma carta em japonês.",
                "chunks": [
                    "にほんご",
                    "で",
                    "てがみ",
                    "を",
                    "かきます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Seu colega pergunta como você vai para o trabalho todos os dias.",
                "npcName": "Colega",
                "npcMessage": "かいしゃへ なにで いきますか。 (Com que meio você vai para a empresa?)",
                "options": [
                    {
                        "text": "でんしゃ で いきます。",
                        "feedback": "A resposta marca o meio de transporte com で.",
                        "isCorrect": true
                    },
                    {
                        "text": "でんしゃ を いきます。",
                        "feedback": "Incorreto. A partícula 'o' (を) indica objeto direto, não o meio.",
                        "isCorrect": false
                    },
                    {
                        "text": "でんしゃ が あります。",
                        "feedback": "Incorreto. Você disse 'Existe um trem'.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual é a função de で em くるまで いきます?",
                "options": [
                    "Indicar o destino.",
                    "Indicar o meio de transporte.",
                    "Indicar o sujeito da frase."
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'でんしゃ (電車)' (Densha)?",
                "options": [
                    "Trem",
                    "Carro",
                    "Ônibus"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'くるま (車)' (Kuruma)?",
                "options": [
                    "Trem",
                    "Carro",
                    "Ônibus"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'バス' (Basu)?",
                "options": [
                    "Carro",
                    "Trem",
                    "Ônibus"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'はし' (Hashi)?",
                "options": [
                    "hashi / palitos para comer",
                    "Trem",
                    "Carro"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_15",
        "title": "いつ e datas do calendário",
        "section": 3,
        "sectionTitle": "Localização, Lugares & Movimento",
        "level": "A1",
        "xpReward": 110,
        "stage1_context": {
            "audioGuide": "Tanjoubi wa itsu desu ka?",
            "missionTitle": "Objetivo de hoje",
            "missionDescription": "Pratique いつ e as leituras de meses e dias para perguntar e informar datas."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "いつ",
                "romaji": "itsu",
                "translation": "quando?",
                "timeContext": "Palavra interrogativa usada para perguntar quando algo acontece."
            },
            {
                "type": "vocab",
                "kanji": "きょう / あした / きのう",
                "romaji": "kyou / ashita / kinou",
                "translation": "hoje / amanhã / ontem",
                "timeContext": "Em usos temporais básicos, normalmente aparecem sem に; outras partículas dependem da função na frase."
            },
            {
                "type": "vocab",
                "kanji": "～月（～がつ）",
                "romaji": "-gatsu",
                "translation": "mês do calendário",
                "timeContext": "Exemplo: 一月（いちがつ） = janeiro. Algumas leituras, como 四月（しがつ）, precisam ser aprendidas como formas do calendário."
            },
            {
                "type": "vocab",
                "kanji": "～日（～にち）",
                "romaji": "-nichi",
                "translation": "dia do mês",
                "timeContext": "As datas incluem leituras especiais, entre elas ついたち, ふつか, じゅうよっか, はつか e にじゅうよっか. Exemplo: 15日 = じゅうごにち."
            },
            {
                "type": "grammar_pill",
                "title": "Perguntar e informar datas",
                "rule": "Para perguntar quando, use いつ. Uma data pode combinar mês e dia, respeitando as leituras próprias do calendário.",
                "formula": "たんじょうびは いつですか。 (Tanjoubi wa itsu desu ka.)",
                "example": "しがつ じゅうごにちです。 (Shigatsu juugonichi desu.) — É 15 de abril."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se pergunta “Quando é a festa?”",
                "options": [
                    {
                        "label": "パーティーは どこですか。",
                        "isCorrect": false
                    },
                    {
                        "label": "パーティーは いつですか。",
                        "isCorrect": true
                    },
                    {
                        "label": "パーティーは だれですか。",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual é a leitura de 二月?",
                "options": [
                    {
                        "label": "にがつ (nigatsu)",
                        "isCorrect": true
                    },
                    {
                        "label": "ににち (ninichi)",
                        "isCorrect": false
                    },
                    {
                        "label": "にじ (niji)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "たんじょうび は いつ です か",
                "translation": "Quando é o aniversário?",
                "chunks": [
                    "たんじょうび",
                    "は",
                    "いつ",
                    "です",
                    "か"
                ]
            },
            {
                "sentenceJp": "しがつ じゅうごにち です",
                "translation": "É 15 de abril.",
                "chunks": [
                    "しがつ",
                    "じゅうごにち",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você quer marcar um encontro com um amigo e pergunta quando ele está livre.",
                "npcName": "Amigo Kenji",
                "npcMessage": "いいね！ いつが いいですか。 (Boa ideia! Quando seria bom?)",
                "options": [
                    {
                        "text": "あしたは どうですか。 (Que tal amanhã?)",
                        "feedback": "A resposta propõe amanhã de forma adequada ao contexto.",
                        "isCorrect": true
                    },
                    {
                        "text": "あした で いきます。",
                        "feedback": "Esta forma não é usada para fazer a sugestão apresentada.",
                        "isCorrect": false
                    },
                    {
                        "text": "あした が あります。",
                        "feedback": "あります expressa existência e não responde adequadamente à escolha de uma data.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual palavra é usada para perguntar “quando?”",
                "options": [
                    "Doko",
                    "Dare",
                    "Itsu"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o sentido de いつ (itsu)?",
                "options": [
                    "Quando?",
                    "Hoje / Amanhã / Ontem",
                    "Sufixo para Mês"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o sentido de きょう / あした / きのう?",
                "options": [
                    "Quando?",
                    "Hoje / Amanhã / Ontem",
                    "Sufixo para Mês"
                ],
                "correctIndex": 1
            },
            {
                "question": "O que ～月（～がつ） indica em uma data?",
                "options": [
                    "Hoje / Amanhã / Ontem",
                    "Quando?",
                    "Sufixo para Mês"
                ],
                "correctIndex": 2
            },
            {
                "question": "O que ～日（～にち） indica em uma data?",
                "options": [
                    "Sufixo para Dia do Mês",
                    "Quando?",
                    "Hoje / Amanhã / Ontem"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_16",
        "title": "Números de 1 a 10",
        "section": 4,
        "sectionTitle": "Números, Dinheiro & Compras",
        "level": "A1",
        "xpReward": 90,
        "stage1_context": {
            "audioGuide": "Ichi, ni, san, yon...",
            "missionTitle": "Objetivo de hoje",
            "missionDescription": "Reconheça e pronuncie os números de 1 a 10, observando que algumas leituras mudam conforme o contexto."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "いち, に, さん",
                "romaji": "ichi, ni, san",
                "translation": "1, 2, 3",
                "timeContext": "Leituras básicas dos números 1, 2 e 3 quando aparecem isolados."
            },
            {
                "type": "vocab",
                "kanji": "よん (し), ご, ろく",
                "romaji": "yon (shi), go, roku",
                "translation": "4, 5, 6",
                "timeContext": "O número 4 pode ter as leituras よん ou し; a escolha depende da palavra ou do contador associado."
            },
            {
                "type": "vocab",
                "kanji": "なな (しち), はち, きゅう",
                "romaji": "nana (shichi), hachi, kyuu",
                "translation": "7, 8, 9",
                "timeContext": "O número 7 pode ter as leituras なな ou しち; a forma adequada depende do contexto."
            },
            {
                "type": "vocab",
                "kanji": "じゅう",
                "romaji": "juu",
                "translation": "10",
                "timeContext": "じゅう é 10 e também participa da formação das dezenas, como にじゅう (20)."
            },
            {
                "type": "grammar_pill",
                "title": "Leituras que dependem do contexto",
                "rule": "Os números 4 e 7 possuem mais de uma leitura. Não há uma única forma correta para todos os usos: horas, datas, idade e contadores podem selecionar leituras específicas.",
                "formula": "4: よん / し　　7: なな / しち",
                "example": "Na sequência básica, é possível praticar いち、に、さん、よん、ご、ろく、なな、はち、きゅう、じゅう."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Qual destas é uma leitura do número 4?",
                "options": [
                    {
                        "label": "よん (yon)",
                        "isCorrect": true
                    },
                    {
                        "label": "さん (san)",
                        "isCorrect": false
                    },
                    {
                        "label": "なな (nana)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como se diz o número 8 em japonês?",
                "options": [
                    {
                        "label": "はち (hachi)",
                        "isCorrect": true
                    },
                    {
                        "label": "ろく (roku)",
                        "isCorrect": false
                    },
                    {
                        "label": "じゅう (juu)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "いち に さん よん ご",
                "translation": "Um, dois, três, quatro, cinco.",
                "chunks": [
                    "いち",
                    "に",
                    "さん",
                    "よん",
                    "ご"
                ]
            },
            {
                "sentenceJp": "ろく なな はち きゅう じゅう",
                "translation": "Seis, sete, oito, nove, dez.",
                "chunks": [
                    "ろく",
                    "なな",
                    "はち",
                    "きゅう",
                    "じゅう"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Um colega pede que você leia os quatro primeiros dígitos de um número de telefone.",
                "npcName": "Colega",
                "npcMessage": "さいしょの よんけたは なんですか。 (Quais são os quatro primeiros dígitos?)",
                "options": [
                    {
                        "text": "いち、に、さん、よんです。 (São 1, 2, 3 e 4.)",
                        "feedback": "A resposta lê os quatro dígitos na ordem solicitada.",
                        "isCorrect": true
                    },
                    {
                        "text": "いち、に、さんです。",
                        "feedback": "A resposta informa somente três dígitos.",
                        "isCorrect": false
                    },
                    {
                        "text": "よん、さん、に、いちです。",
                        "feedback": "Os mesmos dígitos foram lidos na ordem inversa.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual número corresponde a きゅう (kyuu)?",
                "options": [
                    "9",
                    "7",
                    "4"
                ],
                "correctIndex": 0
            },
            {
                "question": "Quais números correspondem a いち、に、さん?",
                "options": [
                    "1, 2, 3",
                    "4, 5, 6",
                    "7, 8, 9"
                ],
                "correctIndex": 0
            },
            {
                "question": "Quais números correspondem a よん（し）、ご、ろく?",
                "options": [
                    "1, 2, 3",
                    "4, 5, 6",
                    "7, 8, 9"
                ],
                "correctIndex": 1
            },
            {
                "question": "Quais números correspondem a なな（しち）、はち、きゅう?",
                "options": [
                    "4, 5, 6",
                    "1, 2, 3",
                    "7, 8, 9"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual número corresponde a じゅう (juu)?",
                "options": [
                    "10",
                    "1, 2, 3",
                    "4, 5, 6"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_17",
        "title": "Preços e ienes",
        "section": 4,
        "sectionTitle": "Números, Dinheiro & Compras",
        "level": "A1",
        "xpReward": 100,
        "stage1_context": {
            "audioGuide": "Kore wa ikura desu ka?",
            "missionTitle": "Objetivo de hoje",
            "missionDescription": "Pergunte preços com いくら e leia valores básicos em ienes, incluindo centenas e milhares."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "いくら",
                "romaji": "ikura",
                "translation": "quanto?; quanto custa?",
                "timeContext": "Em これはいくらですか, pergunta o preço de um item."
            },
            {
                "type": "vocab",
                "kanji": "円（えん）",
                "romaji": "en",
                "translation": "iene; unidade monetária do Japão",
                "timeContext": "Ao indicar um valor, 円 aparece depois da quantia: 100円（ひゃくえん）."
            },
            {
                "type": "vocab",
                "kanji": "百（ひゃく）",
                "romaji": "hyaku",
                "translation": "100; cem",
                "timeContext": "Há mudanças sonoras em algumas centenas: 300 = さんびゃく, 600 = ろっぴゃく e 800 = はっぴゃく."
            },
            {
                "type": "vocab",
                "kanji": "千（せん）",
                "romaji": "sen",
                "translation": "1.000; mil",
                "timeContext": "Há mudanças sonoras em 3.000（さんぜん）e 8.000（はっせん）."
            },
            {
                "type": "grammar_pill",
                "title": "Centenas e milhares em preços",
                "rule": "Combine as unidades de mil e cem na ordem do maior valor para o menor, observando as mudanças de som próprias de certas combinações.",
                "formula": "[milhar] + 千 + [centena] + 百 + 円",
                "example": "3.200円 = さんぜん にひゃくえん (sanzen nihyaku en)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se pergunta “Quanto custa isto?”",
                "options": [
                    {
                        "label": "これは いくらですか。 (Kore wa ikura desu ka.)",
                        "isCorrect": true
                    },
                    {
                        "label": "これは なんさいですか。",
                        "isCorrect": false
                    },
                    {
                        "label": "これは どこですか。",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual é a leitura de 3.000 ienes?",
                "options": [
                    {
                        "label": "さんぜんえん (sanzen en)",
                        "isCorrect": true
                    },
                    {
                        "label": "さんびゃくえん (sanbyaku en)",
                        "isCorrect": false
                    },
                    {
                        "label": "さんじゅうえん (sanjuu en)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "これ は いくら です か",
                "translation": "Quanto custa isto?",
                "chunks": [
                    "これ",
                    "は",
                    "いくら",
                    "です",
                    "か"
                ]
            },
            {
                "sentenceJp": "さんぜん にひゃく えん です",
                "translation": "São 3.200 ienes.",
                "chunks": [
                    "さんぜん",
                    "にひゃく",
                    "えん",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está em uma loja de lembrancinhas e aponta para um chaveiro.",
                "npcName": "Vendedor",
                "npcMessage": "いらっしゃいませ！ (Bem-vindo!)",
                "options": [
                    {
                        "text": "すみません、これは いくらですか。",
                        "feedback": "A resposta chama a atenção do atendente e pergunta o preço do item.",
                        "isCorrect": true
                    },
                    {
                        "text": "これ は わたし の です。",
                        "feedback": "Essa frase identifica o objeto como seu, mas não pergunta o preço.",
                        "isCorrect": false
                    },
                    {
                        "text": "これ は なな です。",
                        "feedback": "A resposta não usa いくら nem informa uma quantia em 円.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que significa 百円（ひゃくえん）?",
                "options": [
                    "100 ienes",
                    "1.000 ienes",
                    "10 ienes"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o sentido de いくら em uma pergunta de preço?",
                "options": [
                    "Quanto custa?",
                    "Iene (Moeda do Japão)",
                    "100 (Cem)"
                ],
                "correctIndex": 0
            },
            {
                "question": "O que 円（えん）indica depois de uma quantia?",
                "options": [
                    "Quanto custa?",
                    "Iene (Moeda do Japão)",
                    "100 (Cem)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual número corresponde a 百（ひゃく）?",
                "options": [
                    "Iene (Moeda do Japão)",
                    "Quanto custa?",
                    "100 (Cem)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual número corresponde a 千（せん）?",
                "options": [
                    "1.000 (Mil)",
                    "Quanto custa?",
                    "Iene (Moeda do Japão)"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_18",
        "title": "Pedidos e pagamento em lojas",
        "section": 4,
        "sectionTitle": "Números, Dinheiro & Compras",
        "level": "A1",
        "xpReward": 105,
        "stage1_context": {
            "audioGuide": "Kore o kudasai.",
            "missionTitle": "Objetivo de hoje",
            "missionDescription": "Peça um item com ～をください e pratique vocabulário básico para sacola e pagamento com cartão."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "～をください",
                "romaji": "o kudasai",
                "translation": "~ por favor; dê-me ~, por favor",
                "timeContext": "Expressão polida e frequente para solicitar um item em situações de atendimento."
            },
            {
                "type": "vocab",
                "kanji": "袋（ふくろ）",
                "romaji": "fukuro",
                "translation": "saco; sacola",
                "timeContext": "Em uma loja, pode referir-se à sacola para levar a compra."
            },
            {
                "type": "vocab",
                "kanji": "カード",
                "romaji": "kaado",
                "translation": "cartão",
                "timeContext": "Em um pagamento, カード pode indicar o cartão usado na transação."
            },
            {
                "type": "grammar_pill",
                "title": "Pedir um item com ～をください",
                "rule": "Coloque o item antes de をください para fazer um pedido polido. ください integra a expressão de solicitação; não é apresentado aqui como um verbo independente.",
                "formula": "[Item] + を + ください",
                "example": "おみずをください。 (Omizu o kudasai.) — Água, por favor."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Você quer comprar um pão. Como você pede ao atendente?",
                "options": [
                    {
                        "label": "パンをください。 (Pan o kudasai.)",
                        "isCorrect": true
                    },
                    {
                        "label": "パンは いくらですか。",
                        "isCorrect": false
                    },
                    {
                        "label": "パンが あります。",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. O atendente pergunta 袋はいりますか（Fukuro wa irimasu ka）. O que ele quer saber?",
                "options": [
                    {
                        "label": "Se você quer uma sacola.",
                        "isCorrect": true
                    },
                    {
                        "label": "Se você vai pagar com cartão.",
                        "isCorrect": false
                    },
                    {
                        "label": "Se você quer um desconto.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "この パン を ください",
                "translation": "Este pão, por favor.",
                "chunks": [
                    "この",
                    "パン",
                    "を",
                    "ください"
                ]
            },
            {
                "sentenceJp": "カード で おねがいします",
                "translation": "Com cartão, por favor.",
                "chunks": [
                    "カード",
                    "で",
                    "おねがいします"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: No caixa do konbini, você quer pagar com seu cartão.",
                "npcName": "Atendente",
                "npcMessage": "おかいけいは ごひゃくえんです。 (A conta é 500 ienes.)",
                "options": [
                    {
                        "text": "カードで おねがいします。 (Com cartão, por favor.)",
                        "feedback": "A resposta indica o cartão como forma de pagamento.",
                        "isCorrect": true
                    },
                    {
                        "text": "ふくろ を ください。",
                        "feedback": "Essa frase pede uma sacola, mas não informa a forma de pagamento.",
                        "isCorrect": false
                    },
                    {
                        "text": "はい、ごひゃくえん です。",
                        "feedback": "Essa frase apenas repete o valor informado.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual estrutura pode ser usada para pedir um item em uma loja?",
                "options": [
                    "～をください",
                    "~ wa doko desu ka",
                    "~ ga suki desu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o sentido de ～をください?",
                "options": [
                    "Me dê ~, por favor",
                    "Sacola",
                    "Cartão (de crédito/débito)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o sentido de 袋（ふくろ）?",
                "options": [
                    "Me dê ~, por favor",
                    "Sacola",
                    "Cartão (de crédito/débito)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o sentido de カード?",
                "options": [
                    "Sacola",
                    "Me dê ~, por favor",
                    "Cartão (de crédito/débito)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre ～をください, qual afirmação é correta?",
                "options": [
                    "O item pode aparecer antes de をください para formar um pedido polido.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_19",
        "title": "Comidas e bebidas básicas",
        "section": 4,
        "sectionTitle": "Números, Dinheiro & Compras",
        "level": "A1",
        "xpReward": 95,
        "stage1_context": {
            "audioGuide": "Mizu o nomimasu.",
            "missionTitle": "Objetivo de hoje",
            "missionDescription": "Reconheça palavras básicas de comida e bebida e pratique como marcar o objeto de comer ou beber."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "みず (水)",
                "romaji": "mizu",
                "translation": "água",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "おちゃ (お茶)",
                "romaji": "ocha",
                "translation": "chá",
                "timeContext": "Pode designar chá em geral; o contexto indica o tipo de chá."
            },
            {
                "type": "vocab",
                "kanji": "ごはん (ご飯)",
                "romaji": "gohan",
                "translation": "arroz cozido; refeição",
                "timeContext": "O sentido pode ser “arroz cozido” ou “refeição”, conforme a frase."
            },
            {
                "type": "vocab",
                "kanji": "パン",
                "romaji": "pan",
                "translation": "pão",
                "timeContext": "Empréstimo histórico do português, normalmente escrito em katakana."
            },
            {
                "type": "vocab",
                "kanji": "にく (肉)",
                "romaji": "niku",
                "translation": "carne",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "さかな (魚)",
                "romaji": "sakana",
                "translation": "peixe",
                "timeContext": ""
            },
            {
                "type": "grammar_pill",
                "title": "O objeto direto com を",
                "rule": "Em frases como comer, beber ou ver, を marca o objeto direto: aquilo sobre o qual a ação recai.",
                "formula": "[comida ou bebida] を [verbo]",
                "example": "わたしは パンを たべます。 (Watashi wa pan o tabemasu.) — Eu como pão."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Qual palavra pode significar “arroz cozido” ou “refeição”, conforme o contexto?",
                "options": [
                    {
                        "label": "ごはん (gohan)",
                        "isCorrect": true
                    },
                    {
                        "label": "みず (mizu)",
                        "isCorrect": false
                    },
                    {
                        "label": "にく (niku)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como se diz 'Eu bebo chá'?",
                "options": [
                    {
                        "label": "おちゃを のみます。 (Ocha o nomimasu.)",
                        "isCorrect": true
                    },
                    {
                        "label": "おちゃが あります。",
                        "isCorrect": false
                    },
                    {
                        "label": "おちゃです。",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "みず を のみます",
                "translation": "Bebo água.",
                "chunks": [
                    "みず",
                    "を",
                    "のみます"
                ]
            },
            {
                "sentenceJp": "パン を たべます",
                "translation": "Como pão.",
                "chunks": [
                    "パン",
                    "を",
                    "たべます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Em um restaurante, o garçom pergunta o que você quer beber.",
                "npcName": "Garçom",
                "npcMessage": "お飲み物は 何にしますか。 (O que vai querer de bebida?)",
                "options": [
                    {
                        "text": "みずを おねがいします。 (Água, por favor.)",
                        "feedback": "A resposta pede uma bebida de maneira adequada ao contexto.",
                        "isCorrect": true
                    },
                    {
                        "text": "さかな です。",
                        "feedback": "A resposta nomeia um alimento, não uma bebida.",
                        "isCorrect": false
                    },
                    {
                        "text": "はい、そうです。",
                        "feedback": "A resposta não especifica qual bebida você quer.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual palavra significa “carne”?",
                "options": [
                    "Niku",
                    "Sakana",
                    "Pan"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o sentido de 水（みず）?",
                "options": [
                    "Água",
                    "Chá (geralmente verde)",
                    "Arroz cozido / Refeição"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o sentido de お茶（おちゃ）?",
                "options": [
                    "Água",
                    "Chá (geralmente verde)",
                    "Arroz cozido / Refeição"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o sentido de ご飯（ごはん）?",
                "options": [
                    "Chá (geralmente verde)",
                    "Água",
                    "Arroz cozido / Refeição"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o sentido de パン?",
                "options": [
                    "Pão",
                    "Água",
                    "Chá (geralmente verde)"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_20",
        "title": "Alimentos e adjetivos básicos",
        "section": 4,
        "sectionTitle": "Números, Dinheiro & Compras",
        "level": "A1",
        "xpReward": 110,
        "stage1_context": {
            "audioGuide": "Kono ramen wa oishii desu.",
            "missionTitle": "Objetivo de hoje",
            "missionDescription": "Amplie o vocabulário de alimentos e use adjetivos básicos para descrever sabor e preço."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "やさい (野菜)",
                "romaji": "yasai",
                "translation": "verduras; legumes; vegetais",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "くだもの (果物)",
                "romaji": "kudamono",
                "translation": "fruta; frutas",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "おいしい",
                "romaji": "oishii",
                "translation": "gostoso; delicioso",
                "timeContext": "Descreve algo saboroso, especialmente comida ou bebida."
            },
            {
                "type": "vocab",
                "kanji": "たかい (高い)",
                "romaji": "takai",
                "translation": "caro; alto",
                "timeContext": "Pode descrever preço elevado ou altura; o contexto define o sentido."
            },
            {
                "type": "vocab",
                "kanji": "やすい (安い)",
                "romaji": "yasui",
                "translation": "barato; de baixo preço",
                "timeContext": ""
            },
            {
                "type": "grammar_pill",
                "title": "Descrever com adjetivos em い",
                "rule": "Muitos adjetivos que terminam em い podem vir antes do substantivo ou aparecer no predicado com です. As formas deste módulo são exemplos básicos desse padrão.",
                "formula": "[adjetivo] + [substantivo] / [substantivo] は [adjetivo] です",
                "example": "おいしいラーメン / このラーメンは おいしいです。 (Kono ramen wa oishii desu.)"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Você provou um prato e quer dizer que ele é gostoso. Qual resposta é adequada?",
                "options": [
                    {
                        "label": "おいしいです。 (Oishii desu.)",
                        "isCorrect": true
                    },
                    {
                        "label": "やすいです。",
                        "isCorrect": false
                    },
                    {
                        "label": "たかいです。",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Em uma conversa sobre preço, qual palavra descreve algo caro?",
                "options": [
                    {
                        "label": "たかい (takai)",
                        "isCorrect": true
                    },
                    {
                        "label": "やすい (yasui)",
                        "isCorrect": false
                    },
                    {
                        "label": "おいしい (oishii)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "この ラーメン は おいしい です",
                "translation": "Este ramen é gostoso.",
                "chunks": [
                    "この",
                    "ラーメン",
                    "は",
                    "おいしい",
                    "です"
                ]
            },
            {
                "sentenceJp": "この くだもの は やすい です",
                "translation": "Esta fruta é barata.",
                "chunks": [
                    "この",
                    "くだもの",
                    "は",
                    "やすい",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está comendo com um amigo japonês e prova o prato dele.",
                "npcName": "Amigo Kenji",
                "npcMessage": "どうですか。おいしいですか。 (Como está? É gostoso?)",
                "options": [
                    {
                        "text": "はい、とても おいしいです。 (Sim, está muito gostoso.)",
                        "feedback": "A resposta avalia o sabor do prato de maneira adequada.",
                        "isCorrect": true
                    },
                    {
                        "text": "はい、やすい です。",
                        "feedback": "A frase avalia o preço, não o sabor perguntado.",
                        "isCorrect": false
                    },
                    {
                        "text": "いいえ、やさい です。",
                        "feedback": "A resposta nomeia uma categoria de alimento, mas não avalia o sabor.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual adjetivo pode significar “barato”?",
                "options": [
                    "Yasui",
                    "Takai",
                    "Oishii"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o sentido de 野菜（やさい）?",
                "options": [
                    "Vegetais / Legumes",
                    "Fruta(s)",
                    "Delicioso / Gostoso"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o sentido de 果物（くだもの）?",
                "options": [
                    "Vegetais / Legumes",
                    "Fruta(s)",
                    "Delicioso / Gostoso"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o sentido de おいしい?",
                "options": [
                    "Fruta(s)",
                    "Vegetais / Legumes",
                    "Delicioso / Gostoso"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é um sentido possível de 高い（たかい）?",
                "options": [
                    "Caro / Alto",
                    "Vegetais / Legumes",
                    "Fruta(s)"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_21",
        "title": "Que Horas São? (...ji, ...fun, Han)",
        "section": 5,
        "sectionTitle": "Tempo, Horários & Rotina",
        "level": "A1",
        "xpReward": 100,
        "stage1_context": {
            "audioGuide": "Ima nan-ji desu ka?",
            "missionTitle": "Objetivo de Hoje: Mestre do Relógio",
            "missionDescription": "Aprenda a perguntar e dizer as horas em japonês, usando os sufixos para horas (ji) e minutos (fun), além da palavra mágica para 'meia hora' (han)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "いま (今)",
                "romaji": "Ima",
                "translation": "Agora",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "～じ (時)",
                "romaji": "-ji",
                "translation": "Sufixo para Horas",
                "timeContext": "Ex: いちじ (ichi-ji) = 1 hora."
            },
            {
                "type": "vocab",
                "kanji": "～ふん / ぷん (分)",
                "romaji": "-fun / -pun",
                "translation": "Sufixo para Minutos",
                "timeContext": "A pronúncia muda dependendo do número. Ex: ごふん (go-fun), じゅっぷん (juppun)."
            },
            {
                "type": "vocab",
                "kanji": "はん (半)",
                "romaji": "Han",
                "translation": "Meia (hora)",
                "timeContext": "Usado para indicar 'e meia'. Ex: にじはん (ni-ji han) = 2 e meia."
            },
            {
                "type": "grammar_pill",
                "title": "A Fórmula do Tempo",
                "rule": "Para dizer as horas, junte o número com 'ji' (hora) e 'fun' (minuto). Para perguntar, use 'nan-ji desu ka?'.",
                "formula": "[Hora]-ji [Minuto]-fun / [Hora]-ji han",
                "example": "いま は ごじ はん です (Ima wa go-ji han desu) ➔ Agora são 5 e meia."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se pergunta 'Que horas são agora?'",
                "options": [
                    {
                        "label": "いま なんじ です か？ (Ima nan-ji desu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "いま いくら です か？ (Ima ikura desu ka?)",
                        "isCorrect": false
                    },
                    {
                        "label": "いま どこ です か？ (Ima doko desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como se diz 'São 2 e meia'?",
                "options": [
                    {
                        "label": "にじ はん です (Ni-ji han desu)",
                        "isCorrect": true
                    },
                    {
                        "label": "にふん です (Ni-fun desu)",
                        "isCorrect": false
                    },
                    {
                        "label": "にじ です (Ni-ji desu)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "りんご を みっつ ください",
                "translation": "Três maçãs, por favor.",
                "chunks": [
                    "りんご",
                    "を",
                    "みっつ",
                    "ください"
                ]
            },
            {
                "sentenceJp": "へや に がくせい が ごにん います",
                "translation": "Há 5 estudantes na sala.",
                "chunks": [
                    "へや",
                    "に",
                    "がくせい",
                    "が",
                    "ごにん",
                    "います"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está na estação de trem e precisa saber as horas para não perder sua viagem.",
                "npcName": "Pessoa na estação",
                "npcMessage": "...",
                "options": [
                    {
                        "text": "すみません、いま なんじ です か？",
                        "feedback": "Perfeito! Você usou 'sumimasen' para chamar a atenção educadamente e fez a pergunta correta.",
                        "isCorrect": true
                    },
                    {
                        "text": "でんしゃ は おいしい です。",
                        "feedback": "Incorreto. Você disse 'O trem é delicioso'.",
                        "isCorrect": false
                    },
                    {
                        "text": "わたし は がくせい です。",
                        "feedback": "Incorreto. Você se apresentou em vez de perguntar as horas.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que significa 'han' (半) em um horário como 'san-ji han'?",
                "options": [
                    "Meia hora",
                    "15 minutos",
                    "Em ponto"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'いま (今)' (Ima)?",
                "options": [
                    "Agora",
                    "Sufixo para Horas",
                    "Sufixo para Minutos"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～じ (時)' (-ji)?",
                "options": [
                    "Agora",
                    "Sufixo para Horas",
                    "Sufixo para Minutos"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra '～ふん / ぷん (分)' (-fun / -pun)?",
                "options": [
                    "Sufixo para Horas",
                    "Agora",
                    "Sufixo para Minutos"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'はん (半)' (Han)?",
                "options": [
                    "Meia (hora)",
                    "Agora",
                    "Sufixo para Horas"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_22",
        "title": "Os Dias da Semana",
        "section": 5,
        "sectionTitle": "Tempo, Horários & Rotina",
        "level": "A1",
        "xpReward": 100,
        "stage1_context": {
            "audioGuide": "Kyou wa getsuyoubi desu.",
            "missionTitle": "Objetivo de Hoje: O Calendário dos Elementos",
            "missionDescription": "Domine os dias da semana, que no Japão são ligados aos elementos da natureza: Lua, Fogo, Água, Madeira, Ouro, Terra e Sol."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "げつようび (月曜日)",
                "romaji": "Getsuyoubi",
                "translation": "Segunda-feira (Dia da Lua)",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "かようび (火曜日)",
                "romaji": "Kayoubi",
                "translation": "Terça-feira (Dia do Fogo)",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "すいようび (水曜日)",
                "romaji": "Suiyoubi",
                "translation": "Quarta-feira (Dia da Água)",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "もくようび (木曜日)",
                "romaji": "Mokuyoubi",
                "translation": "Quinta-feira (Dia da Madeira)",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "きんようび (金曜日)",
                "romaji": "Kinyoubi",
                "translation": "Sexta-feira (Dia do Ouro)",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "どようび (土曜日)",
                "romaji": "Doyoubi",
                "translation": "Sábado (Dia da Terra)",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "にちようび (日曜日)",
                "romaji": "Nichiyoubi",
                "translation": "Domingo (Dia do Sol)",
                "timeContext": ""
            },
            {
                "type": "grammar_pill",
                "title": "A Fórmula dos Dias",
                "rule": "Todos os dias da semana terminam com 'youbi' (曜日). Basta memorizar o primeiro som/kanji de cada um!",
                "formula": "[Elemento] + ようび",
                "example": "にちようび (日曜日) ➔ Dia do Sol ➔ Domingo."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Qual dia da semana é 'Kayoubi' (火曜日)?",
                "options": [
                    {
                        "label": "Terça-feira",
                        "isCorrect": true
                    },
                    {
                        "label": "Quinta-feira",
                        "isCorrect": false
                    },
                    {
                        "label": "Sexta-feira",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como se diz 'Sábado' em japonês?",
                "options": [
                    {
                        "label": "どようび (Doyoubi)",
                        "isCorrect": true
                    },
                    {
                        "label": "すいようび (Suiyoubi)",
                        "isCorrect": false
                    },
                    {
                        "label": "げつようび (Getsuyoubi)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "きのう は あめ でした",
                "translation": "Ontem foi chuva (choveu).",
                "chunks": [
                    "きのう",
                    "は",
                    "あめ",
                    "でした"
                ]
            },
            {
                "sentenceJp": "せんしゅう は ひま でした",
                "translation": "Semana passada eu estava livre.",
                "chunks": [
                    "せんしゅう",
                    "は",
                    "ひま",
                    "でした"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você quer marcar um encontro com um amigo e pergunta que dia da semana é a festa.",
                "npcName": "Amigo Kenji",
                "npcMessage": "パーティー に いきましょう！ (Vamos para a festa!)",
                "options": [
                    {
                        "text": "いいね！ なんようび です か？ (Legal! Que dia da semana é?)",
                        "feedback": "Perfeito! Você usou 'nan'youbi' para perguntar o dia da semana.",
                        "isCorrect": true
                    },
                    {
                        "text": "なんじ です か？ (Que horas são?)",
                        "feedback": "Incorreto. Você perguntou as horas, não o dia.",
                        "isCorrect": false
                    },
                    {
                        "text": "どようび です。",
                        "feedback": "Incorreto. Você afirmou que é sábado, em vez de perguntar.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "'Kinyoubi' (金曜日) é o dia de qual elemento?",
                "options": [
                    "Ouro/Metal",
                    "Água",
                    "Fogo"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'げつようび (月曜日)' (Getsuyoubi)?",
                "options": [
                    "Segunda-feira (Dia da Lua)",
                    "Terça-feira (Dia do Fogo)",
                    "Quarta-feira (Dia da Água)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'かようび (火曜日)' (Kayoubi)?",
                "options": [
                    "Segunda-feira (Dia da Lua)",
                    "Terça-feira (Dia do Fogo)",
                    "Quarta-feira (Dia da Água)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'すいようび (水曜日)' (Suiyoubi)?",
                "options": [
                    "Terça-feira (Dia do Fogo)",
                    "Segunda-feira (Dia da Lua)",
                    "Quarta-feira (Dia da Água)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'もくようび (木曜日)' (Mokuyoubi)?",
                "options": [
                    "Quinta-feira (Dia da Madeira)",
                    "Segunda-feira (Dia da Lua)",
                    "Terça-feira (Dia do Fogo)"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_23",
        "title": "As Partes do Dia e do Tempo",
        "section": 5,
        "sectionTitle": "Tempo, Horários & Rotina",
        "level": "A1",
        "xpReward": 95,
        "stage1_context": {
            "audioGuide": "Kinou, eiga o mimashita.",
            "missionTitle": "Objetivo de Hoje: Sua Linha do Tempo Pessoal",
            "missionDescription": "Aprenda a se situar no tempo com as palavras essenciais para hoje, amanhã e ontem, e as partes do dia como manhã, tarde e noite."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "きょう (今日)",
                "romaji": "Kyou",
                "translation": "Hoje",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "あした (明日)",
                "romaji": "Ashita",
                "translation": "Amanhã",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "きのう (昨日)",
                "romaji": "Kinou",
                "translation": "Ontem",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "あさ (朝)",
                "romaji": "Asa",
                "translation": "Manhã",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "ひる (昼)",
                "romaji": "Hiru",
                "translation": "Tarde / Meio-dia",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "よる (夜)",
                "romaji": "Yoru",
                "translation": "Noite",
                "timeContext": ""
            },
            {
                "type": "grammar_pill",
                "title": "Tempo Sem Partícula",
                "rule": "Palavras como 'kyou', 'ashita' e 'kinou' são tão específicas que geralmente não precisam da partícula de tempo 'ni'.",
                "formula": "❌ Ashita ni ikimasu. ✅ Ashita ikimasu.",
                "example": "Kinou sushi o tabemashita. (Comi sushi ontem.)"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se diz 'manhã' em japonês?",
                "options": [
                    {
                        "label": "あさ (Asa)",
                        "isCorrect": true
                    },
                    {
                        "label": "よる (Yoru)",
                        "isCorrect": false
                    },
                    {
                        "label": "ひる (Hiru)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Se hoje é 'kyou', como se diz 'ontem'?",
                "options": [
                    {
                        "label": "きのう (Kinou)",
                        "isCorrect": true
                    },
                    {
                        "label": "あした (Ashita)",
                        "isCorrect": false
                    },
                    {
                        "label": "あさ (Asa)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "うみ と やま と どちら が すき です か",
                "translation": "Entre praia e montanha, de qual você gosta mais?",
                "chunks": [
                    "うみ",
                    "と",
                    "やま",
                    "と",
                    "どちら",
                    "が",
                    "すき",
                    "です",
                    "か"
                ]
            },
            {
                "sentenceJp": "うみ の ほう が すき です",
                "translation": "Gosto mais da praia.",
                "chunks": [
                    "うみ",
                    "の",
                    "ほう",
                    "が",
                    "すき",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Um colega de trabalho pergunta sobre seus planos para amanhã.",
                "npcName": "Colega",
                "npcMessage": "あした、なに を します か？ (O que você vai fazer amanhã?)",
                "options": [
                    {
                        "text": "かいしゃ へ いきます。(Vou para a empresa.)",
                        "feedback": "Correto. Uma resposta simples e direta sobre seu plano.",
                        "isCorrect": true
                    },
                    {
                        "text": "きのう いきました。(Eu fui ontem.)",
                        "feedback": "Incorreto. Ele perguntou sobre amanhã, não sobre ontem.",
                        "isCorrect": false
                    },
                    {
                        "text": "きょう です。(É hoje.)",
                        "feedback": "Incorreto. Não responde à pergunta sobre o que você vai fazer.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual palavra significa 'noite'?",
                "options": [
                    "Yoru",
                    "Asa",
                    "Hiru"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'きょう (今日)' (Kyou)?",
                "options": [
                    "Hoje",
                    "Amanhã",
                    "Ontem"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'あした (明日)' (Ashita)?",
                "options": [
                    "Hoje",
                    "Amanhã",
                    "Ontem"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'きのう (昨日)' (Kinou)?",
                "options": [
                    "Amanhã",
                    "Hoje",
                    "Ontem"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'あさ (朝)' (Asa)?",
                "options": [
                    "Manhã",
                    "Hoje",
                    "Amanhã"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_24",
        "title": "Verbos de Ação I - Consumo",
        "section": 5,
        "sectionTitle": "Tempo, Horários & Rotina",
        "level": "A1",
        "xpReward": 105,
        "stage1_context": {
            "audioGuide": "Gohan o tabemasu.",
            "missionTitle": "Objetivo de Hoje: O que você faz?",
            "missionDescription": "Aprenda os 4 verbos de 'consumo' mais comuns do dia a dia: comer, beber, ver e ouvir. E domine a partícula 'wo' (を) para indicar o que você consome."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "たべます (食べます)",
                "romaji": "Tabemasu",
                "translation": "Comer",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "のみます (飲みます)",
                "romaji": "Nomimasu",
                "translation": "Beber",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "みます (見ます)",
                "romaji": "Mimasu",
                "translation": "Ver / Assistir",
                "timeContext": ""
            },
            {
                "type": "vocab",
                "kanji": "ききます (聞きます)",
                "romaji": "Kikimasu",
                "translation": "Ouvir / Escutar",
                "timeContext": ""
            },
            {
                "type": "grammar_pill",
                "title": "O Objeto da Ação: Partícula を (o)",
                "rule": "A partícula を (pronunciada 'o') marca o que sofre a ação do verbo. É o 'alvo' do seu consumo.",
                "formula": "[Objeto] を [Verbo]",
                "example": "ジュース を のみます (Juusu o nomimasu) ➔ Bebo suco."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Para dizer 'Eu assisto TV', qual verbo você usa?",
                "options": [
                    {
                        "label": "みます (Mimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "ききます (Kikimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "たべます (Tabemasu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Complete a frase: おんがく ___ ききます。",
                "options": [
                    {
                        "label": "を (o)",
                        "isCorrect": true
                    },
                    {
                        "label": "へ (e)",
                        "isCorrect": false
                    },
                    {
                        "label": "で (de)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "1ねん で なつ が いちばん すき です",
                "translation": "No ano, o verão é a estação de que mais gosto.",
                "chunks": [
                    "1ねん",
                    "で",
                    "なつ",
                    "が",
                    "いちばん",
                    "すき",
                    "です"
                ]
            },
            {
                "sentenceJp": "にほん で ふじさん が いちばん たかい です",
                "translation": "O Monte Fuji é o mais alto do Japão.",
                "chunks": [
                    "にほん",
                    "で",
                    "ふじさん",
                    "が",
                    "いちばん",
                    "たかい",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Em um restaurante, o garçom pergunta o que você vai comer.",
                "npcName": "Garçom",
                "npcMessage": "なに を たべます か？",
                "options": [
                    {
                        "text": "ラーメン を たべます。(Vou comer ramen.)",
                        "feedback": "Perfeito! Resposta direta usando o objeto e o verbo corretamente.",
                        "isCorrect": true
                    },
                    {
                        "text": "みず を のみます。(Vou beber água.)",
                        "feedback": "Correto, mas ele perguntou o que você vai COMER.",
                        "isCorrect": false
                    },
                    {
                        "text": "はい、たべます。(Sim, vou comer.)",
                        "feedback": "Incompleto. Você não disse O QUE vai comer.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual partícula marca o objeto direto de um verbo como 'tabemasu'?",
                "options": [
                    "を (o)",
                    "が (ga)",
                    "に (ni)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'たべます (食べます)' (Tabemasu)?",
                "options": [
                    "Comer",
                    "Beber",
                    "Ver / Assistir"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'のみます (飲みます)' (Nomimasu)?",
                "options": [
                    "Comer",
                    "Beber",
                    "Ver / Assistir"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'みます (見ます)' (Mimasu)?",
                "options": [
                    "Beber",
                    "Comer",
                    "Ver / Assistir"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'ききます (聞きます)' (Kikimasu)?",
                "options": [
                    "Ouvir / Escutar",
                    "Comer",
                    "Beber"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_25",
        "title": "Verbos de Ação II - Movimento",
        "section": 5,
        "sectionTitle": "Tempo, Horários & Rotina",
        "level": "A1",
        "xpReward": 110,
        "stage1_context": {
            "audioGuide": "Gakkou e ikimasu.",
            "missionTitle": "Objetivo de Hoje: Colocando o Mundo em Movimento",
            "missionDescription": "Domine os três verbos essenciais de movimento: ir, vir e voltar para casa. Aprenda a usar as partículas de destino 'e' (へ) e 'ni' (に)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "いきます (行きます)",
                "romaji": "Ikimasu",
                "translation": "Ir",
                "timeContext": "Movimento para longe de onde você está."
            },
            {
                "type": "vocab",
                "kanji": "きます (来ます)",
                "romaji": "Kimasu",
                "translation": "Vir",
                "timeContext": "Movimento em direção a onde você está."
            },
            {
                "type": "vocab",
                "kanji": "かえります (帰ります)",
                "romaji": "Kaerimasu",
                "translation": "Voltar (para casa/país)",
                "timeContext": "Verbo especial para retornar ao seu ponto de origem."
            },
            {
                "type": "grammar_pill",
                "title": "Partículas de Destino: へ (e) vs に (ni)",
                "rule": "Ambas indicam o destino. 'へ' (pronuncia-se 'e') foca na direção do movimento, enquanto 'に' foca no ponto de chegada. Para iniciantes, são quase intercambiáveis.",
                "formula": "[Lugar] へ/に [Verbo de Movimento]",
                "example": "Toshokan e ikimasu. (Vou para a biblioteca.)"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Você está no trabalho e vai para casa. Qual verbo é o mais apropriado?",
                "options": [
                    {
                        "label": "かえります (Kaerimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "いきます (Ikimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "きます (Kimasu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Seu amigo te chama para a festa dele. Ele pergunta se você...",
                "options": [
                    {
                        "label": "きますか？ (Kimasu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "いきますか？ (Ikimasu ka?)",
                        "isCorrect": false
                    },
                    {
                        "label": "かえりますか？ (Kaerimasu ka?)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "わたし は あたらしい カメラ が ほしい です",
                "translation": "Eu quero uma câmera nova.",
                "chunks": [
                    "わたし",
                    "は",
                    "あたらしい",
                    "カメラ",
                    "が",
                    "ほしい",
                    "です"
                ]
            },
            {
                "sentenceJp": "にほん へ いきたい です",
                "translation": "Quero ir para o Japão.",
                "chunks": [
                    "にほん",
                    "へ",
                    "いきたい",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Seu chefe pergunta para onde você vai depois do trabalho.",
                "npcName": "Chefe",
                "npcMessage": "このあと、どこ へ いきます か？",
                "options": [
                    {
                        "text": "うち へ かえります。(Vou voltar para casa.)",
                        "feedback": "Perfeito! Você usou o verbo de retorno 'kaerimasu' corretamente.",
                        "isCorrect": true
                    },
                    {
                        "text": "うち へ きます。(Vou vir para casa.)",
                        "feedback": "Incorreto. 'Kimasu' indica movimento em direção ao falante. Soaria estranho.",
                        "isCorrect": false
                    },
                    {
                        "text": "パン を たべます。(Como pão.)",
                        "feedback": "Incorreto. Não responde à pergunta sobre para onde você vai.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a principal diferença entre 'ikimasu' e 'kimasu'?",
                "options": [
                    "Ir vs. Vir",
                    "Formal vs. Informal",
                    "Presente vs. Passado"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'いきます (行きます)' (Ikimasu)?",
                "options": [
                    "Ir",
                    "Vir",
                    "Voltar (para casa/país)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'きます (来ます)' (Kimasu)?",
                "options": [
                    "Ir",
                    "Vir",
                    "Voltar (para casa/país)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'かえります (帰ります)' (Kaerimasu)?",
                "options": [
                    "Vir",
                    "Ir",
                    "Voltar (para casa/país)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre a regra 'Partículas de Destino: へ (e) vs に (ni)': qual afirmação é correta?",
                "options": [
                    "Ambas indicam o destino. 'へ' (pronuncia-se 'e') foca na direção do movimento, enquanto 'に' foca no ponto de chegada. Para iniciantes, são quase intercambiáveis.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_26",
        "title": "Pelo Transporte Público (Densha, Basu, Takushi)",
        "section": 6,
        "sectionTitle": "Navegação, Existência & Desafio Final",
        "level": "A1",
        "xpReward": 110,
        "stage1_context": {
            "audioGuide": "Densha de ikimasu.",
            "missionTitle": "Objetivo de Hoje: Locomoção em Redes de Transporte",
            "missionDescription": "Aprenda a andar de trem, metrô, ônibus e táxi no Japão! Vamos usar a partícula 'de' (で) para indicar o meio de transporte."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "でんしゃ (電車)",
                "romaji": "Densha",
                "translation": "Trem elétrico",
                "timeContext": "O principal meio de transporte nas metrópoles japonesas."
            },
            {
                "type": "vocab",
                "kanji": "ちかてつ (地下鉄)",
                "romaji": "Chikatetsu",
                "translation": "Metrô",
                "timeContext": "Sistema subterrâneo rápido em cidades como Tóquio e Osaka."
            },
            {
                "type": "vocab",
                "kanji": "バス",
                "romaji": "Basu",
                "translation": "Ônibus",
                "timeContext": "Palavra importada do inglês, por isso escrita em Katakana."
            },
            {
                "type": "vocab",
                "kanji": "タクシー",
                "romaji": "Takushi",
                "translation": "Táxi",
                "timeContext": "Lembre-se: as portas traseiras dos táxis abrem e fecham automaticamente!"
            },
            {
                "type": "grammar_pill",
                "title": "Partícula de Meio de Transporte: で (de)",
                "rule": "Para indicar o meio de transporte usado para ir a algum lugar, coloque a partícula で após o veículo.",
                "formula": "[Meio de Transporte] で [Verbo de Movimento]",
                "example": "Densha de ikimasu. (Vou de trem.) | Basu de kaerimasu. (Volto de ônibus.)"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se diz formalmente em japonês: 'Vou de trem'?",
                "options": [
                    {
                        "label": "🚆 でんしゃ で いきます (Densha de ikimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "🚌 バス で いきます (Basu de ikimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "🚕 タクシー で いきます (Takushi de ikimasu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual partícula é usada após o meio de transporte para indicar o meio de locomoção?",
                "options": [
                    {
                        "label": "は (wa)",
                        "isCorrect": false
                    },
                    {
                        "label": "で (de)",
                        "isCorrect": true
                    },
                    {
                        "label": "に (ni)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Como você pede ao motorista de táxi para ir até a Estação de Tóquio?",
                "options": [
                    {
                        "label": "とうきょう えき まで おねがいします (Toukyou eki made onegaishimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "とうきょう えき ですか？ (Toukyou eki desu ka?)",
                        "isCorrect": false
                    },
                    {
                        "label": "とうきょう えき は どこ ですか？ (Toukyou eki wa doko desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Exceção especial: Para dizer 'Vou a pé' (sem veículo), qual expressão deve usar?",
                "options": [
                    {
                        "label": "あるいて いきます (Aruite ikimasu - Sem a partícula de)",
                        "isCorrect": true
                    },
                    {
                        "label": "あし で いきます (Ashi de ikimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "あるく で いきます (Aruku de ikimasu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual o significado correto de 'Chikatetsu de ikimasu'?",
                "options": [
                    {
                        "label": "Vou de metrô",
                        "isCorrect": true
                    },
                    {
                        "label": "Vou de táxi",
                        "isCorrect": false
                    },
                    {
                        "label": "Vou de ônibus",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "ちょっと まって ください",
                "translation": "Espere um pouco, por favor.",
                "chunks": [
                    "ちょっと",
                    "まって",
                    "ください"
                ]
            },
            {
                "sentenceJp": "ここに なまえ を かいて ください",
                "translation": "Por favor, escreva seu nome aqui.",
                "chunks": [
                    "ここに",
                    "なまえ",
                    "を",
                    "かいて",
                    "ください"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está na bilheteria da estação de Shinjuku comprando passagem.",
                "npcName": "Atendente da Estação",
                "npcMessage": "どちら まで ですか？ (Até onde você vai?)",
                "options": [
                    {
                        "text": "とうきょう えき まで でんしゃ で いきます。(Vou de trem até a Estação de Tóquio.)",
                        "feedback": "Excelente! Resposta perfeita usando a partícula 'de' e o destino com 'made'.",
                        "isCorrect": true
                    },
                    {
                        "text": "バス です！",
                        "feedback": "Inadequado. Ele perguntou o destino, não apenas o veículo.",
                        "isCorrect": false
                    },
                    {
                        "text": "こんばんは！",
                        "feedback": "Fora de contexto no balcão de passagens.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Você entra em um táxi em Ginza e fala com o motorista.",
                "npcName": "Motorista de Táxi",
                "npcMessage": "どちら まで おねがいしますか？ (Para onde deseja ir?)",
                "options": [
                    {
                        "text": "ホテル まで おねがいします。(Para o hotel, por favor.)",
                        "feedback": "Mandou muito bem! Frase clássica e educada para andar de táxi no Japão.",
                        "isCorrect": true
                    },
                    {
                        "text": "タクシー で いきます！",
                        "feedback": "Incorreto. Você já está dentro do táxi!",
                        "isCorrect": false
                    },
                    {
                        "text": "はじめまして！ [Seu Nome] です。",
                        "feedback": "Não é necessário fazer apresentação formal completa ao motorista.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Um colega de trabalho pergunta como você vai para a empresa todos os dias.",
                "npcName": "Colega Sato",
                "npcMessage": "まいにし、なに で かいしゃ へ いきます か？ (Todos os dias, de que você vai para a empresa?)",
                "options": [
                    {
                        "text": "ちかてつ で いきます！ (Vou de metrô!)",
                        "feedback": "Perfeito! Comunicação rápida, precisa e natural.",
                        "isCorrect": true
                    },
                    {
                        "text": "かいしゃいん です！",
                        "feedback": "Ops! Você respondeu 'Sou funcionário de empresa' em vez do meio de transporte.",
                        "isCorrect": false
                    },
                    {
                        "text": "さようなら！",
                        "feedback": "Completamente fora de sentido.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual é a partícula usada para indicar o meio de transporte?",
                "options": [
                    "で (de)",
                    "に (ni)",
                    "を (o)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'でんしゃ (電車)' (Densha)?",
                "options": [
                    "Trem elétrico",
                    "Metrô",
                    "Ônibus"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ちかてつ (地下鉄)' (Chikatetsu)?",
                "options": [
                    "Trem elétrico",
                    "Metrô",
                    "Ônibus"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'バス' (Basu)?",
                "options": [
                    "Metrô",
                    "Trem elétrico",
                    "Ônibus"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'タクシー' (Takushi)?",
                "options": [
                    "Táxi",
                    "Trem elétrico",
                    "Metrô"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_27",
        "title": "Perdido na Rua: Onde Fica? (Doko & Koko, Soko, Asoko)",
        "section": 6,
        "sectionTitle": "Navegação, Existência & Desafio Final",
        "level": "A1",
        "xpReward": 115,
        "stage1_context": {
            "audioGuide": "Eki wa doko desu ka?",
            "missionTitle": "Objetivo de Hoje: Pedindo Direções na Cidade",
            "missionDescription": "Ficou perdido em Shinjuku ou Akihabara? Domine a pergunta sagrada '...wa doko desu ka?' e os demonstrativos de lugar koko, soko e asoko."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "どこ",
                "romaji": "Doko",
                "translation": "Onde? / Qual lugar?",
                "timeContext": "Pronome interrogativo de lugar."
            },
            {
                "type": "vocab",
                "kanji": "ここ",
                "romaji": "Koko",
                "translation": "Aqui",
                "timeContext": "Lugar próximo do falante."
            },
            {
                "type": "vocab",
                "kanji": "そこ",
                "romaji": "Soko",
                "translation": "Aí",
                "timeContext": "Lugar próximo do ouvinte."
            },
            {
                "type": "vocab",
                "kanji": "あそこ",
                "romaji": "Asoko",
                "translation": "Lá / Ali distante",
                "timeContext": "Lugar distante tanto do falante quanto do ouvinte."
            },
            {
                "type": "grammar_pill",
                "title": "A Pergunta de Localização: ...は どこ ですか？",
                "rule": "Para perguntar onde fica qualquer lugar (banheiro, estação, hotel), coloque o nome do local + は どこ ですか？",
                "formula": "[Lugar] は どこ ですか？",
                "example": "Toire wa doko desu ka? (Onde fica o banheiro?) | Eki wa doko desu ka? (Onde fica a estação?)"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como perguntar educadamente a um pedestre onde fica o banheiro?",
                "options": [
                    {
                        "label": "🚽 すみません、トイレ は どこ ですか？ (Sumimasen, toire wa doko desu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "🏢 トイレ は ここ ですか？ (Toire wa koko desu ka?)",
                        "isCorrect": false
                    },
                    {
                        "label": "❓ トイレ は なん ですか？ (Toire wa nan desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Se o local indicado fica longe de ambos, apontando para o horizonte, qual palavra se usa?",
                "options": [
                    {
                        "label": "ここ (Koko)",
                        "isCorrect": false
                    },
                    {
                        "label": "そこ (Soko)",
                        "isCorrect": false
                    },
                    {
                        "label": "あそこ (Asoko)",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "3. O que significa a expressão 'Koko desu'?",
                "options": [
                    {
                        "label": "É aqui",
                        "isCorrect": true
                    },
                    {
                        "label": "É lá longe",
                        "isCorrect": false
                    },
                    {
                        "label": "Onde é?",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual das opções abaixo significa 'Onde fica a estação de trem?'",
                "options": [
                    {
                        "label": "えき は どこ ですか？ (Eki wa doko desu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "えき は あそこ です (Eki wa asoko desu)",
                        "isCorrect": false
                    },
                    {
                        "label": "えき は なん ですか？ (Eki wa nan desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual palavra substitui 'Doko' de forma extremamente polida e refinada em hotéis?",
                "options": [
                    {
                        "label": "どちら (Dochira)",
                        "isCorrect": true
                    },
                    {
                        "label": "どれ (Dore)",
                        "isCorrect": false
                    },
                    {
                        "label": "だれ (Dare)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "いま あめ が ふっています",
                "translation": "Está chovendo agora.",
                "chunks": [
                    "いま",
                    "あめ",
                    "が",
                    "ふっています"
                ]
            },
            {
                "sentenceJp": "ミラーさん は でんわ を しています",
                "translation": "O Sr. Miller está ao telefone.",
                "chunks": [
                    "ミラーさん",
                    "は",
                    "でんわ",
                    "を",
                    "しています"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você desembarcou em Akihabara e procura uma loja de conveniência na rua.",
                "npcName": "Pedestre Nativo",
                "npcMessage": "何かお困りですか？ (Precisa de ajuda?)",
                "options": [
                    {
                        "text": "すみません、コンビニ は どこ ですか？",
                        "feedback": "Perfeito! 'Com licença, onde fica a loja de conveniência?' é super natural.",
                        "isCorrect": true
                    },
                    {
                        "text": "コンビニ は あそこ です！",
                        "feedback": "Incorreto: Você está afirmando em vez de perguntar onde fica!",
                        "isCorrect": false
                    },
                    {
                        "text": "ありがとう！",
                        "feedback": "Ainda não é hora de agradecer, você precisa pedir a informação primeiro.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O pedestre aponta para um prédio bem no fim do quarteirão.",
                "npcName": "Pedestre Nativo",
                "npcMessage": "あそこ ですよ！ ビル の 1かい です。(É lá! No primeiro andar do prédio.)",
                "options": [
                    {
                        "text": "あそこ ですね！ ありがとうございます！",
                        "feedback": "Excelente! Você entendeu a indicação 'Asoko' (lá longe) e agradeceu.",
                        "isCorrect": true
                    },
                    {
                        "text": "ここ ですか？",
                        "feedback": "Incorreto: Ele apontou para 'Asoko' (lá longe), não 'Koko' (aqui).",
                        "isCorrect": false
                    },
                    {
                        "text": "ごめんなさい！",
                        "feedback": "Inadequado: Usar desculpas emotivas ao receber uma ajuda simples.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Na recepção do hotel em Quioto, você deseja encontrar a sala de café da manhã.",
                "npcName": "Recepcionista do Hotel",
                "npcMessage": "いらっしゃいませ！ [Seu Nome]・様。",
                "options": [
                    {
                        "text": "すみません、レストラン は どこ ですか？",
                        "feedback": "Impecável! Pergunta clara, educada e direta ao ponto.",
                        "isCorrect": true
                    },
                    {
                        "text": "レストラン は ここ です！",
                        "feedback": "Errado: Você está dizendo à recepcionista onde fica o restaurante!",
                        "isCorrect": false
                    },
                    {
                        "text": "じゃあね！",
                        "feedback": "Completamente inapropriado para falar com a recepção.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a diferença entre Koko, Soko e Asoko?",
                "options": [
                    "Aqui, Aí, Lá longe",
                    "Eu, Você, Ele",
                    "Hoje, Amanhã, Ontem"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'どこ' (Doko)?",
                "options": [
                    "Onde? / Qual lugar?",
                    "Aqui",
                    "Aí"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ここ' (Koko)?",
                "options": [
                    "Onde? / Qual lugar?",
                    "Aqui",
                    "Aí"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'そこ' (Soko)?",
                "options": [
                    "Aqui",
                    "Onde? / Qual lugar?",
                    "Aí"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'あそこ' (Asoko)?",
                "options": [
                    "Lá / Ali distante",
                    "Onde? / Qual lugar?",
                    "Aqui"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_28",
        "title": "Coisas que Existem - Arimasu (Existência Inanimada)",
        "section": 6,
        "sectionTitle": "Navegação, Existência & Desafio Final",
        "level": "A1",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Hon ga arimasu.",
            "missionTitle": "Objetivo de Hoje: Expressando a Existência de Objetos",
            "missionDescription": "Aprenda a dizer que um objeto, livro, prédio ou planta EXISTE ou ESTÁ em determinado lugar usando o verbo Arimasu (あります) e a partícula Ga (가)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "あります (有ります)",
                "romaji": "Arimasu",
                "translation": "Haver / Existir / Ter (para coisas inanimadas)",
                "timeContext": "Verbo de existência exclusivo para objetos e plantas."
            },
            {
                "type": "vocab",
                "kanji": "ありません",
                "romaji": "Arimasen",
                "translation": "Não haver / Não ter / Não existir",
                "timeContext": "Forma negativa de Arimasu."
            },
            {
                "type": "vocab",
                "kanji": "ほん (本)",
                "romaji": "Hon",
                "translation": "Livro",
                "timeContext": "Objeto inanimado clássico."
            },
            {
                "type": "vocab",
                "kanji": "くるま (車)",
                "romaji": "Kuruma",
                "translation": "Carro / Veículo",
                "timeContext": "Meio inanimado de transporte."
            },
            {
                "type": "grammar_pill",
                "title": "Existência Inanimada com あります (Arimasu)",
                "rule": "Usamos あります exclusivamente para objetos, móveis, plantas e coisas sem vida própria. A partícula de sujeito é が (ga).",
                "formula": "[Objeto/Coisa] が あります",
                "example": "Pen ga arimasu. (Tem uma caneta / Há uma caneta.) | Kuruma ga arimasu. (Há um carro.)"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se diz 'Há um livro' ou 'Tem um livro' em japonês?",
                "options": [
                    {
                        "label": "📖 ほん が あります (Hon ga arimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "📖 ほん が います (Hon ga imasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "📖 ほん は です (Hon wa desu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual verbo deve ser usado para objetos inanimados (livro, celular, mesa)?",
                "options": [
                    {
                        "label": "あります (Arimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "います (Imasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "いきます (Ikimasu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Como dizer 'Não há dinheiro / Não tenho dinheiro' de forma formal?",
                "options": [
                    {
                        "label": "おかね が ありません (Okane ga arimasen)",
                        "isCorrect": true
                    },
                    {
                        "label": "おかね が あります (Okane ga arimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "おかね は どこ です (Okane wa doko desu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual a partícula correta usada para marcar o objeto que 'existe' antes do verbo Arimasu?",
                "options": [
                    {
                        "label": "が (ga)",
                        "isCorrect": true
                    },
                    {
                        "label": "を (o)",
                        "isCorrect": false
                    },
                    {
                        "label": "へ (e)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual frase indica que 'Há um computador na mesa'?",
                "options": [
                    {
                        "label": "つくえ に パソコン が あります (Tsukue ni pasokon ga arimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "つくえ に パソコン が います (Tsukue ni pasokon ga imasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "つくえ で パソコン です (Tsukue de pasokon desu)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "しゃしん を とっても いい です か",
                "translation": "Posso tirar fotos?",
                "chunks": [
                    "しゃしん",
                    "を",
                    "とっても",
                    "いい",
                    "です",
                    "か"
                ]
            },
            {
                "sentenceJp": "ここで たばこ を すってはいけません",
                "translation": "Não se pode fumar aqui.",
                "chunks": [
                    "ここで",
                    "たばこ",
                    "を",
                    "すってはいけません"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Na livraria de Quioto, você quer saber se há dicionários de japonês.",
                "npcName": "Atendente da Livraria",
                "npcMessage": "いらっしゃいませ！ なに を おさがし ですか？",
                "options": [
                    {
                        "text": "じしょ (Dicionário) が あります か？",
                        "feedback": "Mandou muito bem! Usou a partícula 'ga' e o verbo 'arimasu ka?' perfeitamente.",
                        "isCorrect": true
                    },
                    {
                        "text": "じしょ が います か？",
                        "feedback": "Incorreto: Dicionário é um objeto inanimado, não se usa 'imasu'!",
                        "isCorrect": false
                    },
                    {
                        "text": "じしょ です！",
                        "feedback": "Incompleto para perguntar sobre existência em uma loja.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Você chega ao seu quarto de hotel e pergunta se há conexão Wi-Fi.",
                "npcName": "Recepcionista",
                "npcMessage": "おへや の せつめい は いかが ですか？ (Alguma dúvida sobre o quarto?)",
                "options": [
                    {
                        "text": "Wi-Fi が あります か？",
                        "feedback": "Excelente! Pergunta prática, direta e indispensável na viagem.",
                        "isCorrect": true
                    },
                    {
                        "text": "Wi-Fi が います か？",
                        "feedback": "Incorreto: Wi-Fi não é um ser vivo!",
                        "isCorrect": false
                    },
                    {
                        "text": "Wi-Fi は どこ ですか？",
                        "feedback": "Também é possível, mas para perguntar se 'tem/existe', 'arimasu ka' é a resposta perfeita.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: No restaurante, o garçom traz o prato mas você nota que faltam os palitinhos (hashi).",
                "npcName": "Garçom",
                "npcMessage": "おまたせいたしました！ (Aqui está o seu pedido!)",
                "options": [
                    {
                        "text": "すみません、はし が ありません。(Com licença, não há palitinhos.)",
                        "feedback": "Perfeito! Usou a forma negativa 'arimasen' com polidez exemplar.",
                        "isCorrect": true
                    },
                    {
                        "text": "はし が います！",
                        "feedback": "Incorreto: Erro duplo (afirmação + verbo de seres vivos).",
                        "isCorrect": false
                    },
                    {
                        "text": "ごめんなさい！",
                        "feedback": "Não é motivo para se desculpar, você apenas precisa pedir os palitos.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O verbo 'Arimasu' pode ser usado para pessoas?",
                "options": [
                    "Não, é exclusivo para coisas inanimadas e objetos.",
                    "Sim, pode ser usado para qualquer coisa.",
                    "Apenas para professores."
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'あります (有ります)' (Arimasu)?",
                "options": [
                    "Haver / Existir / Ter (para coisas inanimadas)",
                    "Não haver / Não ter / Não existir",
                    "Livro"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ありません' (Arimasen)?",
                "options": [
                    "Haver / Existir / Ter (para coisas inanimadas)",
                    "Não haver / Não ter / Não existir",
                    "Livro"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'ほん (本)' (Hon)?",
                "options": [
                    "Não haver / Não ter / Não existir",
                    "Haver / Existir / Ter (para coisas inanimadas)",
                    "Livro"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'くるま (車)' (Kuruma)?",
                "options": [
                    "Carro / Veículo",
                    "Haver / Existir / Ter (para coisas inanimadas)",
                    "Não haver / Não ter / Não existir"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_29",
        "title": "Pessoas e Animais que Existem - Imasu (Existência Animada)",
        "section": 6,
        "sectionTitle": "Navegação, Existência & Desafio Final",
        "level": "A1",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Inu ga imasu. Tomodachi ga imasu.",
            "missionTitle": "Objetivo de Hoje: Expressando a Existência de Seres Vivos",
            "missionDescription": "Descubra a regra de ouro do japonês: para seres que se movem por conta própria (pessoas, cães, gatos, insetos), trocamos Arimasu pelo verbo Imasu (います)!"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "います (居ます)",
                "romaji": "Imasu",
                "translation": "Haver / Estar / Existir (para seres vivos)",
                "timeContext": "Verbo de existência exclusivo para pessoas e animais."
            },
            {
                "type": "vocab",
                "kanji": "いません",
                "romaji": "Imasen",
                "translation": "Não haver / Não estar (para seres vivos)",
                "timeContext": "Forma negativa de Imasu."
            },
            {
                "type": "vocab",
                "kanji": "いぬ (犬)",
                "romaji": "Inu",
                "translation": "Cão / Cachorro",
                "timeContext": "Ser vivo (animal)."
            },
            {
                "type": "vocab",
                "kanji": "ねこ (猫)",
                "romaji": "Neko",
                "translation": "Gato",
                "timeContext": "Ser vivo (animal)."
            },
            {
                "type": "grammar_pill",
                "title": "O Duelo: あります (Arimasu) vs います (Imasu)",
                "rule": "Arimasu = Coisas inanimadas (livro, celular, mesa). Imasu = Seres vivos (amigo, professor, cão, gato).",
                "formula": "[Ser Vivo] が います",
                "example": "Sensei ga imasu. (O professor está aqui.) | Inu ga imasu. (Há um cachorro.)"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Qual verbo você deve usar para dizer 'Há um gato no jardim'?",
                "options": [
                    {
                        "label": "🐱 ねこ が います (Neko ga imasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "🐱 ねこ が あります (Neko ga arimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "🐱 ねこ です (Neko desu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como dizer 'O professor Tanaka está na sala de aula'?",
                "options": [
                    {
                        "label": "タナカ・せんせい が います (Tanaka-sensei ga imasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "タナカ・せんせい が あります (Tanaka-sensei ga arimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "タナカ・せんせい は どこ (Tanaka-sensei wa doko)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Como dizer 'Não há ninguém / Não tem ninguém aqui'?",
                "options": [
                    {
                        "label": "だれ も いません (Dare mo imasen)",
                        "isCorrect": true
                    },
                    {
                        "label": "なに も ありません (Nani mo arimasen)",
                        "isCorrect": false
                    },
                    {
                        "label": "だれ は です (Dare wa desu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Se você quer perguntar se um amigo tem um cão de estimação, qual a frase correta?",
                "options": [
                    {
                        "label": "いぬ が います か？ (Inu ga imasu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "いぬ が あります か？ (Inu ga arimasu ka?)",
                        "isCorrect": false
                    },
                    {
                        "label": "いぬ は なん ですか？ (Inu wa nan desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual a diferença fundamental entre 'Hon ga arimasu' e 'Inu ga imasu'?",
                "options": [
                    {
                        "label": "Hon é inanimado (Arimasu); Inu é um ser vivo (Imasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "Não há diferença, são idênticos",
                        "isCorrect": false
                    },
                    {
                        "label": "Imasu só se usa para plantas",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "あさ おきて しんぶん を よみます",
                "translation": "Acordo de manhã e leio o jornal.",
                "chunks": [
                    "あさ",
                    "おきて",
                    "しんぶん",
                    "を",
                    "よみます"
                ]
            },
            {
                "sentenceJp": "シャワー を あびて がっこう へ いきます",
                "translation": "Tomo banho e vou para a escola.",
                "chunks": [
                    "シャワー",
                    "を",
                    "あびて",
                    "がっこう",
                    "へ",
                    "いきます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você chega ao escritório procurando pelo diretor Tanaka.",
                "npcName": "Secretária",
                "npcMessage": "いらっしゃいませ！ 何かご用ですか？ (Pois não, em que posso ajudar?)",
                "options": [
                    {
                        "text": "すみません、タナカ・さん は います か？",
                        "feedback": "Perfeito! Usou o verbo 'imasu ka?' para perguntar se uma pessoa está presente.",
                        "isCorrect": true
                    },
                    {
                        "text": "タナカ・さん は あります か？",
                        "feedback": "Incorreto: Tanaka é uma pessoa, nunca use 'arimasu' para pessoas!",
                        "isCorrect": false
                    },
                    {
                        "text": "タナカ・さん です！",
                        "feedback": "Incompleto para verificar a presença de alguém.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Em um parque em Quioto, você vê uma senhora passeando com um lindo animal.",
                "npcName": "Senhora no Parque",
                "npcMessage": "こんにちは！ いい おてんき ですね。(Olá! Belíssimo dia, não?)",
                "options": [
                    {
                        "text": "こんにちは！ かわいい (fofo) いぬ が いますね！",
                        "feedback": "Excelente! Notou o cãozinho e usou 'imasu' corretamente para o animal.",
                        "isCorrect": true
                    },
                    {
                        "text": "かわいい いぬ が ありますね！",
                        "feedback": "Incorreto: Cães são seres vivos, exigem 'imasu'!",
                        "isCorrect": false
                    },
                    {
                        "text": "さようなら！",
                        "feedback": "Despediu-se logo no início da conversa.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Seu amigo Kenji pergunta se você mora sozinho ou com mais alguém.",
                "npcName": "Kenji",
                "npcMessage": "[Seu Nome]・さん、いえ に だれ か います か？ (Tem alguém na sua casa?)",
                "options": [
                    {
                        "text": "いいえ、だれ も いません。ひとりで すんでいます。(Não, não tem ninguém. Moro sozinho.)",
                        "feedback": "Impecável! Resposta avançada, natural e gramaticalmente impecável.",
                        "isCorrect": true
                    },
                    {
                        "text": "いいえ、だれ も ありません。",
                        "feedback": "Incorreto: 'Arimasen' não se aplica a pessoas.",
                        "isCorrect": false
                    },
                    {
                        "text": "はい、ほん が あります。",
                        "feedback": "Fora de contexto: Ele perguntou sobre pessoas na casa, não livros!",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual verbo deve ser usado para a existência de um gato ou cachorro?",
                "options": [
                    "います (Imasu)",
                    "あります (Arimasu)",
                    "です (Desu)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'います (居ます)' (Imasu)?",
                "options": [
                    "Haver / Estar / Existir (para seres vivos)",
                    "Não haver / Não estar (para seres vivos)",
                    "Cão / Cachorro"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'いません' (Imasen)?",
                "options": [
                    "Haver / Estar / Existir (para seres vivos)",
                    "Não haver / Não estar (para seres vivos)",
                    "Cão / Cachorro"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'いぬ (犬)' (Inu)?",
                "options": [
                    "Não haver / Não estar (para seres vivos)",
                    "Haver / Estar / Existir (para seres vivos)",
                    "Cão / Cachorro"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'ねこ (猫)' (Neko)?",
                "options": [
                    "Gato",
                    "Haver / Estar / Existir (para seres vivos)",
                    "Não haver / Não estar (para seres vivos)"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_30",
        "title": "Conectando Ideias Básicas (Soshite, Demo, Mo)",
        "section": 6,
        "sectionTitle": "Navegação, Existência & Desafio Final",
        "level": "A1",
        "xpReward": 125,
        "stage1_context": {
            "audioGuide": "Soshite, demo, watashi mo ikimasu.",
            "missionTitle": "Objetivo de Hoje: Articulando Frases Complexas",
            "missionDescription": "Deixe de falar em frases picadas! Aprenda os conectivos essenciais 'Soshite' (E/Além disso), 'Demo' (Mas/Porém) e a partícula inclusiva 'Mo' (Também)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "そして",
                "romaji": "Soshite",
                "translation": "E / E também / Além disso",
                "timeContext": "Conectivo para somar ideias positivas ou sequências."
            },
            {
                "type": "vocab",
                "kanji": "でも",
                "romaji": "Demo",
                "translation": "Mas / Porém / No entanto",
                "timeContext": "Conectivo de oposição para contrastar frases."
            },
            {
                "type": "vocab",
                "kanji": "～も",
                "romaji": "~mo",
                "translation": "Também / Nem",
                "timeContext": "Partícula que substitui は (wa) ou が (ga) para incluir itens equivalentes."
            },
            {
                "type": "vocab",
                "kanji": "たのしい (楽しい)",
                "romaji": "Tanoshii",
                "translation": "Divertido / Agradável",
                "timeContext": "Adjetivo de experiência."
            },
            {
                "type": "grammar_pill",
                "title": "A Partícula Inclusiva 'も' (Mo)",
                "rule": "Substitua as partículas は (wa) ou が (ga) pela partícula も (mo) para dizer 'também'!",
                "formula": "[Nome/Pronome] も [Complemento]",
                "example": "Watashi wa gakusei desu. Kenji-san mo gakusei desu. (Eu sou estudante. O Kenji também é estudante.)"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como dizer 'Eu também sou brasileiro(a)' em japonês?",
                "options": [
                    {
                        "label": "🇧🇷 わたし も ブラジルじん です (Watashi mo Burajiru-jin desu)",
                        "isCorrect": true
                    },
                    {
                        "label": "🇧🇷 わたし は ブラジルじん です (Watashi wa Burajiru-jin desu)",
                        "isCorrect": false
                    },
                    {
                        "label": "🇧🇷 わたし で ブラジルじん です (Watashi de Burajiru-jin desu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual conectivo usar para contrastar ideias (ex: 'O Japão é lindo, MAS é distante')?",
                "options": [
                    {
                        "label": "でも (Demo)",
                        "isCorrect": true
                    },
                    {
                        "label": "そして (Soshite)",
                        "isCorrect": false
                    },
                    {
                        "label": "だから (Dakara)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual a função da palavra 'Soshite' no início de uma frase?",
                "options": [
                    {
                        "label": "Conectar e adicionar uma nova informação ('E também...', 'Além disso...')",
                        "isCorrect": true
                    },
                    {
                        "label": "Pedir desculpas por um erro",
                        "isCorrect": false
                    },
                    {
                        "label": "Dizer adeus",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Como transformar 'Watashi wa ikimasu' (Eu vou) em 'Eu também vou'?",
                "options": [
                    {
                        "label": "わたし も いきます (Watashi mo ikimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "わたし は いきます (Watashi wa ikimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "わたし で いきます (Watashi de ikimasu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Escolha a palavra correta para preencher a lacuna: 'Nihon-go wa tanoshii desu. _____ muzukashii desu.' (O japonês é divertido. _____ é difícil.)",
                "options": [
                    {
                        "label": "でも (Demo - Mas)",
                        "isCorrect": true
                    },
                    {
                        "label": "そして (Soshite - E)",
                        "isCorrect": false
                    },
                    {
                        "label": "はい (Hai - Sim)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "くすり を のまなければ なりません",
                "translation": "Preciso tomar o remédio.",
                "chunks": [
                    "くすり",
                    "を",
                    "のまなければ",
                    "なりません"
                ]
            },
            {
                "sentenceJp": "パスポート を みせなくても いい です",
                "translation": "Não precisa mostrar o passaporte.",
                "chunks": [
                    "パスポート",
                    "を",
                    "みせなくても",
                    "いい",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você conversa com um colega japonês sobre ramen.",
                "npcName": "Colega Hiro",
                "npcMessage": "ラーメン は すき です か？ (Você gosta de ramen?)",
                "options": [
                    {
                        "text": "はい！ すき です。 そして、すし も すき です！ (Sim! Gosto. E também gosto de sushi!)",
                        "feedback": "Fantástico! Usou 'Soshite' e a partícula 'Mo' (também) com enorme fluência!",
                        "isCorrect": true
                    },
                    {
                        "text": "いいえ、ラーメン です。",
                        "feedback": "Confuso e sem conexão.",
                        "isCorrect": false
                    },
                    {
                        "text": "さようなら！",
                        "feedback": "Fora de contexto.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Você está avaliando um hotel com um amigo em Tóquio.",
                "npcName": "Amigo Kenji",
                "npcMessage": "この ホテル は どう ですか？ (O que acha deste hotel?)",
                "options": [
                    {
                        "text": "きれい です。 でも、たかい です。(É bonito. Mas é caro.)",
                        "feedback": "Excelente! Usou 'Demo' perfeitamente para ponderar os prós e contras.",
                        "isCorrect": true
                    },
                    {
                        "text": "きれい です。 そして、たかい です。",
                        "feedback": "Menos natural para uma oposição de qualidade vs preço.",
                        "isCorrect": false
                    },
                    {
                        "text": "はじめまして！",
                        "feedback": "Incorreto no contexto de avaliação.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Na aula de idiomas, o professor pergunta sobre suas conquistas de estudo.",
                "npcName": "Sensei Sato",
                "npcMessage": "ひらがな が できます か？ (Você sabe Hiragana?)",
                "options": [
                    {
                        "text": "はい！ ひらがな が できます。 そして、カタカナ も できます！",
                        "feedback": "Impecável! Demonstrou entusiasmo conectando seus conhecimentos com 'Soshite' e 'Mo'.",
                        "isCorrect": true
                    },
                    {
                        "text": "いいえ、ひらがな も です。",
                        "feedback": "Gramaticalmente incompleto.",
                        "isCorrect": false
                    },
                    {
                        "text": "ごめんなさい！",
                        "feedback": "Sem motivo para desculpas ao responder ao professor.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a função da partícula 'Mo' (も)?",
                "options": [
                    "Substituir 'Wa'/'Ga' para significar 'Também'",
                    "Indicar o meio de transporte",
                    "Perguntar 'Onde'"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'そして' (Soshite)?",
                "options": [
                    "E / E também / Além disso",
                    "Mas / Porém / No entanto",
                    "Também / Nem"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'でも' (Demo)?",
                "options": [
                    "E / E também / Além disso",
                    "Mas / Porém / No entanto",
                    "Também / Nem"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra '～も' (~mo)?",
                "options": [
                    "Mas / Porém / No entanto",
                    "E / E também / Além disso",
                    "Também / Nem"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'たのしい (楽しい)' (Tanoshii)?",
                "options": [
                    "Divertido / Agradável",
                    "E / E também / Além disso",
                    "Mas / Porém / No entanto"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a1_mod_31",
        "title": "Revisão Geral & O Desafio do Aeroporto (Simulação Prática A1)",
        "section": 6,
        "sectionTitle": "Navegação, Existência & Desafio Final",
        "level": "A1",
        "xpReward": 150,
        "stage1_context": {
            "audioGuide": "Omedetou gozaimasu! A1 kanryou!",
            "missionTitle": "Desafio Final A1: Sobrevivência Total no Aeroporto de Haneda",
            "missionDescription": "Chegou a hora de provar sua fluência A1! Enfrente o grande teste integrando saudações, pronomes, compras, valores, direções e existências na chegada ao Japão."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "くうこう (空港)",
                "romaji": "Kuukou",
                "translation": "Aeroporto",
                "timeContext": "Ponto de partida e chegada internacional."
            },
            {
                "type": "vocab",
                "kanji": "パスポート",
                "romaji": "Pasupooto",
                "translation": "Passaporte",
                "timeContext": "Documento oficial escrito em Katakana."
            },
            {
                "type": "vocab",
                "kanji": "おめでとうございます",
                "romaji": "Omedetou gozaimasu",
                "translation": "Parabéns! / Felicitacões!",
                "timeContext": "Usado para celebrar grandes conquistas e conclusões."
            },
            {
                "type": "vocab",
                "kanji": "かんりょう (完了)",
                "romaji": "Kanryou",
                "translation": "Conclusão / Finalizado",
                "timeContext": "Terminar um nível com sucesso."
            },
            {
                "type": "grammar_pill",
                "title": "O Passaporte da Fluência A1",
                "rule": "Você dominou os 31 Módulos A1! Agora consegue se apresentar, comprar no Konbini, pegar trens, pedir comida e se orientar no Japão.",
                "formula": "[Esforço] + [Prática] = 日本語 A1 Master!",
                "example": "Watashi wa Nihon-go A1 desu! (Eu sou Nível A1 em Japonês!)"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. No desembarque do Aeroporto de Haneda às 15h, como você saúda o oficial da imigração?",
                "options": [
                    {
                        "label": "☀️ こんにちは！ (Konnichiwa!)",
                        "isCorrect": true
                    },
                    {
                        "label": "🌅 おはようございます！ (Ohayou gozaimasu!)",
                        "isCorrect": false
                    },
                    {
                        "label": "🌙 こんばんは！ (Konbanwa!)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como pedir educadamente uma garrafa de água na loja de conveniência do aeroporto?",
                "options": [
                    {
                        "label": "🥤 みず を ください (Mizu o kudasai)",
                        "isCorrect": true
                    },
                    {
                        "label": "🥤 みず は どこ ですか (Mizu wa doko desu ka)",
                        "isCorrect": false
                    },
                    {
                        "label": "🥤 みず ですか (Mizu desu ka)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Como perguntar onde fica a estação de trem dentro do aeroporto?",
                "options": [
                    {
                        "label": "🚆 えき は どこ ですか？ (Eki wa doko desu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "🚆 えき が あります (Eki ga arimasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "🚆 えき で いきます (Eki de ikimasu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Ao pagar uma passagem de 500 Ienes no caixa, qual a forma correta de perguntar o valor?",
                "options": [
                    {
                        "label": "💴 いくら ですか？ (Ikura desu ka?)",
                        "isCorrect": true
                    },
                    {
                        "label": "💴 なん ですか？ (Nan desu ka?)",
                        "isCorrect": false
                    },
                    {
                        "label": "💴 だれ ですか？ (Dare desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual frase encerra sua jornada com chave de ouro agradecendo ao seu instrutor?",
                "options": [
                    {
                        "label": "🏆 せんせい、ほんとうに ありがとうございました！ (Sensei, hontou ni arigatou gozaimasu!)",
                        "isCorrect": true
                    },
                    {
                        "label": "😭 さようなら (Sayounara)",
                        "isCorrect": false
                    },
                    {
                        "label": "❓ なに ですか？ (Nani desu ka?)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "6. Como se apresentar formalmente dizendo 'Prazer em conhecê-lo'?",
                "options": [
                    {
                        "label": "Hajimemashite",
                        "isCorrect": true
                    },
                    {
                        "label": "Arigatou gozaimasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Gomen nasai",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "7. Como dizer a frase negativa 'Eu não sou estudante'?",
                "options": [
                    {
                        "label": "Gakusei ja arimasen",
                        "isCorrect": true
                    },
                    {
                        "label": "Gakusei desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Gakusei desu ka",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "8. Qual palavra usar ao esbarrar acidentalmente em alguém na rua?",
                "options": [
                    {
                        "label": "Sumimasen",
                        "isCorrect": true
                    },
                    {
                        "label": "Konnichiwa",
                        "isCorrect": false
                    },
                    {
                        "label": "Itadakimasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "9. Como se despedir informalmente de um amigo que você verá amanhã?",
                "options": [
                    {
                        "label": "Mata ashita!",
                        "isCorrect": true
                    },
                    {
                        "label": "Sayounara",
                        "isCorrect": false
                    },
                    {
                        "label": "Hajimemashite",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "10. Como perguntar o nome de alguém de forma polida?",
                "options": [
                    {
                        "label": "O-namae wa nan desu ka?",
                        "isCorrect": true
                    },
                    {
                        "label": "Kore wa nan desu ka?",
                        "isCorrect": false
                    },
                    {
                        "label": "Doko desu ka?",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "11. Como dizer 'Sou brasileiro(a)'?",
                "options": [
                    {
                        "label": "Burajiru-jin desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Burajiru-go desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Burajiru ni ikimasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "12. Qual sufixo de respeito deve ser adicionado ao nome dos amigos/conhecidos?",
                "options": [
                    {
                        "label": "-san",
                        "isCorrect": true
                    },
                    {
                        "label": "-go",
                        "isCorrect": false
                    },
                    {
                        "label": "-jin",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "13. O que a partícula 'Ka' no final da frase indica?",
                "options": [
                    {
                        "label": "Uma pergunta / ponto de interrogação",
                        "isCorrect": true
                    },
                    {
                        "label": "Uma negação",
                        "isCorrect": false
                    },
                    {
                        "label": "Um comando de ordem",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "14. Como dizer 'Tenho 20 anos'?",
                "options": [
                    {
                        "label": "Ni-juu sai desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Ni-juu jin desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Ni-juu en desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "15. Traduza: 'Watashi no baggu'",
                "options": [
                    {
                        "label": "Minha bolsa",
                        "isCorrect": true
                    },
                    {
                        "label": "Bolsa de alguém",
                        "isCorrect": false
                    },
                    {
                        "label": "Comprei uma bolsa",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "16. Qual palavra demonstrativa usar para um objeto que está na SUA própria mão?",
                "options": [
                    {
                        "label": "Kore (これ)",
                        "isCorrect": true
                    },
                    {
                        "label": "Sore (それ)",
                        "isCorrect": false
                    },
                    {
                        "label": "Are (あれ)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "17. Qual palavra usar para indicar um prédio distante de ambos os falantes?",
                "options": [
                    {
                        "label": "Are (あれ) / Asoko (あそこ)",
                        "isCorrect": true
                    },
                    {
                        "label": "Kore (これ) / Koko (ここ)",
                        "isCorrect": false
                    },
                    {
                        "label": "Sore (それ) / Soko (そこ)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "18. Qual verbo expressa a existência de coisas inanimadas (livros, chaves, mesas)?",
                "options": [
                    {
                        "label": "Arimasu (あります)",
                        "isCorrect": true
                    },
                    {
                        "label": "Imasu (います)",
                        "isCorrect": false
                    },
                    {
                        "label": "Tabemasu (たべます)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "19. Qual verbo expressa a existência de seres vivos (pessoas, cachorros, gatos)?",
                "options": [
                    {
                        "label": "Imasu (います)",
                        "isCorrect": true
                    },
                    {
                        "label": "Arimasu (あります)",
                        "isCorrect": false
                    },
                    {
                        "label": "Nomimasu (のみます)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "20. Como dizer 'Vou para a escola'?",
                "options": [
                    {
                        "label": "Gakkou ni ikimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Gakkou de ikimasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Gakkou o ikimasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "21. Qual partícula indica o meio de transporte ('ir de trem')?",
                "options": [
                    {
                        "label": "で (de)",
                        "isCorrect": true
                    },
                    {
                        "label": "に (ni)",
                        "isCorrect": false
                    },
                    {
                        "label": "を (o)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "22. Quanto é 'San-juu' (30) em ienes?",
                "options": [
                    {
                        "label": "30 Ienes",
                        "isCorrect": true
                    },
                    {
                        "label": "3 Ienes",
                        "isCorrect": false
                    },
                    {
                        "label": "300 Ienes",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "23. Traduza: 'Ocha o nomimasu'",
                "options": [
                    {
                        "label": "Bebo chá",
                        "isCorrect": true
                    },
                    {
                        "label": "Como chá",
                        "isCorrect": false
                    },
                    {
                        "label": "Compro chá",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "24. Como elogiar uma refeição durante o almoço dizendo 'É delicioso'?",
                "options": [
                    {
                        "label": "Oishii desu!",
                        "isCorrect": true
                    },
                    {
                        "label": "Takai desu!",
                        "isCorrect": false
                    },
                    {
                        "label": "Furui desu!",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "25. Como perguntar 'Que horas são agora?'",
                "options": [
                    {
                        "label": "Ima nan-ji desu ka?",
                        "isCorrect": true
                    },
                    {
                        "label": "Ima nan-nichi desu ka?",
                        "isCorrect": false
                    },
                    {
                        "label": "Ima ikura desu ka?",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "26. Qual é o dia da semana 'Getsuyoubi'?",
                "options": [
                    {
                        "label": "Segunda-feira",
                        "isCorrect": true
                    },
                    {
                        "label": "Domingo",
                        "isCorrect": false
                    },
                    {
                        "label": "Sexta-feira",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "27. Como se diz 'Manhã' em japonês?",
                "options": [
                    {
                        "label": "Asa (朝)",
                        "isCorrect": true
                    },
                    {
                        "label": "Hiru (昼)",
                        "isCorrect": false
                    },
                    {
                        "label": "Yoru (夜)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "28. Como dizer 'Compro no Konbini'?",
                "options": [
                    {
                        "label": "Konbini de kaimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Konbini ni kaimasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Konbini o kaimasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "29. Traduza: 'Watashi mo gakusei desu'",
                "options": [
                    {
                        "label": "Eu também sou estudante",
                        "isCorrect": true
                    },
                    {
                        "label": "Eu não sou estudante",
                        "isCorrect": false
                    },
                    {
                        "label": "Aquele é o estudante",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "30. Qual palavra conectiva significa 'E / Além disso' entre frases?",
                "options": [
                    {
                        "label": "Soshite (そして)",
                        "isCorrect": true
                    },
                    {
                        "label": "Demo (でも)",
                        "isCorrect": false
                    },
                    {
                        "label": "Karasu (から)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "わたし の しゅみ は えいが を みる こと です",
                "translation": "Meu hobby é assistir a filmes.",
                "chunks": [
                    "わたし",
                    "の",
                    "しゅみ",
                    "は",
                    "えいが",
                    "を",
                    "みる",
                    "こと",
                    "です"
                ]
            },
            {
                "sentenceJp": "にほんご の べんきょう は とても たのしい です",
                "translation": "Estudar japonês é muito divertido.",
                "chunks": [
                    "にほんご",
                    "の",
                    "べんきょう",
                    "は",
                    "とても",
                    "たのしい",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: No guichê de imigração do Aeroporto de Haneda, o oficial checa seus documentos.",
                "npcName": "Oficial de Imigração",
                "npcMessage": "パスポート を おねがいします。 おくに は どちら ですか？",
                "options": [
                    {
                        "text": "はい！ パスポート です。 ブラジルじん です。 よろしくおねがいします！",
                        "feedback": "Impecável! Entrega do passaporte, indicação da nacionalidade e polidez total!",
                        "isCorrect": true
                    },
                    {
                        "text": "ブラジルご です！",
                        "feedback": "Incorreto: 'Burajiru-go' é o idioma, não a nacionalidade!",
                        "isCorrect": false
                    },
                    {
                        "text": "さようなら！",
                        "feedback": "Não se despeça antes de receber o visto de entrada!",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Na casa de câmbio do aeroporto, você quer trocar dinheiro.",
                "npcName": "Atendente do Câmbio",
                "npcMessage": "いらっしゃいませ！ 両替(りょうがえ) ですか？ (Deseja trocar moedas?)",
                "options": [
                    {
                        "text": "はい！ これ を えん に おねがいします。 (Sim! Este [dinheiro] em ienes, por favor.)",
                        "feedback": "Mandou muito bem! Expressão perfeita para operações bancárias básicas.",
                        "isCorrect": true
                    },
                    {
                        "text": "いいえ、トイレ は どこ ですか？",
                        "feedback": "Fora de contexto para o balcão de câmbio.",
                        "isCorrect": false
                    },
                    {
                        "text": "はじめまして！",
                        "feedback": "Inadequado para iniciar o atendimento no banco.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Você chega à plataforma do trem-bala e o condutor confirma sua jornada de sucesso no Nível A1!",
                "npcName": "Condutor do Trem A1",
                "npcMessage": "おめでとうございます！ [Seu Nome]・さん！ A1 コース 完了 です！ (Parabéns, [Seu Nome]-san! Curso A1 concluído!)",
                "options": [
                    {
                        "text": "ありがとうございます！ にほんご が たのしい です！ (Muito obrigado! Japonês é divertido!)",
                        "feedback": "Sensacional! 🎉 VOCÊ ZEROU O NÍVEL A1 DO JAPÃO ACADEMY COM LOUVOR!",
                        "isCorrect": true
                    },
                    {
                        "text": "いいえ、ごめんなさい！",
                        "feedback": "Não peça desculpas no momento da sua vitória!",
                        "isCorrect": false
                    },
                    {
                        "text": "なに ですか？",
                        "feedback": "Incorreto: Celebre seu troféu com orgulho!",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Parabéns! O que significa 'A1 Kanryou'?",
                "options": [
                    "Conclusão com sucesso do Nível A1!",
                    "Erro no sistema",
                    "Estação fechada"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'くうこう (空港)' (Kuukou)?",
                "options": [
                    "Aeroporto",
                    "Passaporte",
                    "Parabéns! / Felicitacões!"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'パスポート' (Pasupooto)?",
                "options": [
                    "Aeroporto",
                    "Passaporte",
                    "Parabéns! / Felicitacões!"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'おめでとうございます' (Omedetou gozaimasu)?",
                "options": [
                    "Passaporte",
                    "Aeroporto",
                    "Parabéns! / Felicitacões!"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'かんりょう (完了)' (Kanryou)?",
                "options": [
                    "Conclusão / Finalizado",
                    "Aeroporto",
                    "Passaporte"
                ],
                "correctIndex": 0
            },
            {
                "question": "Sobre a regra 'O Passaporte da Fluência A1': qual afirmação é correta?",
                "options": [
                    "Você dominou os 31 Módulos A1! Agora consegue se apresentar, comprar no Konbini, pegar trens, pedir comida e se orientar no Japão.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "No desembarque do Aeroporto de Haneda às 15h, como você saúda o oficial da imigração?",
                "options": [
                    "☀️ こんにちは！ (Konnichiwa!)",
                    "🌅 おはようございます！ (Ohayou gozaimasu!)",
                    "🌙 こんばんは！ (Konbanwa!)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como pedir educadamente uma garrafa de água na loja de conveniência do aeroporto?",
                "options": [
                    "🥤 みず を ください (Mizu o kudasai)",
                    "🥤 みず は どこ ですか (Mizu wa doko desu ka)",
                    "🥤 みず ですか (Mizu desu ka)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como perguntar onde fica a estação de trem dentro do aeroporto?",
                "options": [
                    "🚆 えき は どこ ですか？ (Eki wa doko desu ka?)",
                    "🚆 えき が あります (Eki ga arimasu)",
                    "🚆 えき で いきます (Eki de ikimasu)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Ao pagar uma passagem de 500 Ienes no caixa, qual a forma correta de perguntar o valor?",
                "options": [
                    "💴 いくら ですか？ (Ikura desu ka?)",
                    "💴 なん ですか？ (Nan desu ka?)",
                    "💴 だれ ですか？ (Dare desu ka?)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual frase encerra sua jornada com chave de ouro agradecendo ao seu instrutor?",
                "options": [
                    "🏆 せんせい、ほんとうに ありがとうございました！ (Sensei, hontou ni arigatou gozaimasu!)",
                    "😭 さようなら (Sayounara)",
                    "❓ なに ですか？ (Nani desu ka?)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como se apresentar formalmente dizendo 'Prazer em conhecê-lo'?",
                "options": [
                    "Hajimemashite",
                    "Arigatou gozaimasu",
                    "Gomen nasai"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como dizer a frase negativa 'Eu não sou estudante'?",
                "options": [
                    "Gakusei ja arimasen",
                    "Gakusei desu",
                    "Gakusei desu ka"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual palavra usar ao esbarrar acidentalmente em alguém na rua?",
                "options": [
                    "Sumimasen",
                    "Konnichiwa",
                    "Itadakimasu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como se despedir informalmente de um amigo que você verá amanhã?",
                "options": [
                    "Mata ashita!",
                    "Sayounara",
                    "Hajimemashite"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como perguntar o nome de alguém de forma polida?",
                "options": [
                    "O-namae wa nan desu ka?",
                    "Kore wa nan desu ka?",
                    "Doko desu ka?"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como dizer 'Sou brasileiro(a)'?",
                "options": [
                    "Burajiru-jin desu",
                    "Burajiru-go desu",
                    "Burajiru ni ikimasu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual sufixo de respeito deve ser adicionado ao nome dos amigos/conhecidos?",
                "options": [
                    "-san",
                    "-go",
                    "-jin"
                ],
                "correctIndex": 0
            },
            {
                "question": "O que a partícula 'Ka' no final da frase indica?",
                "options": [
                    "Uma pergunta / ponto de interrogação",
                    "Uma negação",
                    "Um comando de ordem"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como dizer 'Tenho 20 anos'?",
                "options": [
                    "Ni-juu sai desu",
                    "Ni-juu jin desu",
                    "Ni-juu en desu"
                ],
                "correctIndex": 0
            }
        ]
    }
];

// Contrato textual editorial da Fase 3B. Conteúdo pendente de revisão humana qualificada.
const A1_EDITORIAL_CONTRACT = [
    ["おはようございます。", "Ohayou gozaimasu.", "Bom dia.", "Cumprimentar alguém de modo adequado ao período do dia."],
    ["はじめまして。よろしくお願いします。", "Hajimemashite. Yoroshiku onegaishimasu.", "Muito prazer. Espero contar com você.", "Apresentar-se brevemente em um primeiro encontro."],
    ["ありがとうございます。すみません。", "Arigatou gozaimasu. Sumimasen.", "Muito obrigado. Com licença.", "Agradecer e pedir licença com expressões básicas."],
    ["お疲れ様でした。じゃあね。", "Otsukaresama deshita. Jaa ne.", "Obrigado pelo esforço. Até mais.", "Escolher uma despedida adequada à situação."],
    ["田中さん。先生、こんにちは。", "Tanaka-san. Sensei, konnichiwa.", "Sr. Tanaka. Professor, boa tarde.", "Usar formas básicas de tratamento com respeito."],
    ["私はブラジル人です。日本語です。", "Watashi wa Burajiru-jin desu. Nihon-go desu.", "Sou brasileiro. É japonês.", "Dizer nacionalidade e identificar um idioma."],
    ["私は学生です。会社員です。", "Watashi wa gakusei desu. Kaishain desu.", "Sou estudante. Sou funcionário de empresa.", "Dizer uma ocupação com uma frase nominal simples."],
    ["あなたは学生ですか。誰ですか。", "Anata wa gakusei desu ka. Dare desu ka.", "Você é estudante? Quem é?", "Formar perguntas básicas com か e 誰."],
    ["一、二、三！二十五歳です。", "Ichi, ni, san! Nijuu-go sai desu.", "Um, dois, três! Tenho 25 anos.", "Contar até dez e dizer a própria idade."],
    ["私もブラジル人です！そうですか！", "Watashi mo Burajiru-jin desu! Sou desu ka!", "Eu também sou brasileiro! É mesmo?", "Usar も para indicar inclusão em uma frase simples."],
    ["それは何ですか。", "Sore wa nan desu ka.", "O que é isso?", "Perguntar e indicar a localização básica de objetos."],
    ["猫がいます。本があります。", "Neko ga imasu. Hon ga arimasu.", "Há um gato. Há um livro.", "Distinguir います e あります em frases de existência."],
    ["学校へ行きます。", "Gakkou e ikimasu.", "Vou à escola.", "Descrever um deslocamento simples com verbo de movimento."],
    ["電車で行きます。", "Densha de ikimasu.", "Vou de trem.", "Indicar o meio usado para realizar uma ação."],
    ["誕生日はいつですか。", "Tanjoubi wa itsu desu ka.", "Quando é seu aniversário?", "Perguntar e informar uma data simples."],
    ["一、二、三、四……", "Ichi, ni, san, yon...", "Um, dois, três, quatro...", "Contar de um a dez em japonês."],
    ["これはいくらですか。", "Kore wa ikura desu ka.", "Quanto custa isto?", "Perguntar e compreender um preço básico."],
    ["これをください。", "Kore o kudasai.", "Isto, por favor.", "Pedir um produto de forma simples em uma loja."],
    ["水を飲みます。", "Mizu o nomimasu.", "Bebo água.", "Falar sobre uma ação básica de comer ou beber."],
    ["このラーメンはおいしいです。", "Kono raamen wa oishii desu.", "Este ramen é saboroso.", "Descrever um alimento com um adjetivo básico."],
    ["今、何時ですか。", "Ima, nan-ji desu ka.", "Que horas são agora?", "Perguntar e informar as horas."],
    ["今日は月曜日です。", "Kyou wa getsuyoubi desu.", "Hoje é segunda-feira.", "Identificar os dias da semana em uma frase."],
    ["昨日、映画を見ました。", "Kinou, eiga o mimashita.", "Ontem, assisti a um filme.", "Situar uma ação em uma parte do dia ou no passado recente."],
    ["ご飯を食べます。", "Gohan o tabemasu.", "Como uma refeição.", "Construir uma frase simples com objeto e verbo de consumo."],
    ["学校へ行きます。", "Gakkou e ikimasu.", "Vou à escola.", "Construir uma frase simples sobre deslocamento."],
    ["電車で行きます。", "Densha de ikimasu.", "Vou de trem.", "Escolher um transporte e dizer como irá a um lugar."],
    ["駅はどこですか。", "Eki wa doko desu ka.", "Onde fica a estação?", "Pedir a localização de um lugar."],
    ["本があります。", "Hon ga arimasu.", "Há um livro.", "Dizer que um objeto inanimado existe."],
    ["犬がいます。友達がいます。", "Inu ga imasu. Tomodachi ga imasu.", "Há um cachorro. Há um amigo.", "Dizer que uma pessoa ou animal existe."],
    ["そして、でも、私も行きます。", "Soshite, demo, watashi mo ikimasu.", "E então, mas eu também vou.", "Conectar duas ideias básicas com uma conjunção."],
    ["おめでとうございます！A1修了です！", "Omedetou gozaimasu! A1 shuuryou desu!", "Parabéns! O A1 foi concluído!", "Usar os recursos do A1 em uma simulação guiada." ]
];

CURSO_A1_DADOS.forEach((module, index) => {
    const [displayText, romaji, translation, canDo] = A1_EDITORIAL_CONTRACT[index];
    module.stage1_context.audio = {
        displayText,
        audioText: displayText,
        furigana: "",
        romaji,
        translation,
        scenario: ""
    };
    module.canDo = canDo;
    module.editorialReview = { status: "pending-human-review", phase: "3B" };
});

CURSO_A1_DADOS[2].stage4_dialog[2].content = {
    displayText: "",
    audioText: "",
    furigana: "",
    romaji: "",
    translation: "",
    scenario: "O garçom está de costas, limpando o balcão do outro lado da sala."
};
CURSO_A1_DADOS[20].stage4_dialog[0].content = {
    displayText: "",
    audioText: "",
    furigana: "",
    romaji: "",
    translation: "",
    scenario: "A pessoa aguarda você iniciar a conversa."
};

if (typeof window !== "undefined") { window.CURSO_A1_DADOS = CURSO_A1_DADOS; }

const A1_PHASE18_AUDIO_CORRECTIONS = {
    a1_mod_05: ["田中さん、こんにちは。先生、こんにちは。", "Tanaka-san, konnichiwa. Sensei, konnichiwa.", "Olá, Sr. Tanaka. Olá, professor."],
    a1_mod_06: ["私はブラジル人です。日本語を勉強しています。", "Watashi wa Burajiru-jin desu. Nihongo o benkyou shite imasu.", "Sou brasileiro e estudo japonês."],
    a1_mod_07: ["私は学生です。田中さんは会社員です。", "Watashi wa gakusei desu. Tanaka-san wa kaishain desu.", "Sou estudante. O Sr. Tanaka é funcionário de uma empresa."],
    a1_mod_08: ["あなたは学生ですか。あの人は誰ですか。", "Anata wa gakusei desu ka. Ano hito wa dare desu ka.", "Você é estudante? Quem é aquela pessoa?"],
    a1_mod_10: ["「私もブラジル人です。」「そうですか！」", "Watashi mo Burajiru-jin desu. Sou desu ka!", "Eu também sou brasileiro. É mesmo?"],
    a1_mod_24: ["ご飯を食べます。", "Gohan o tabemasu.", "Como arroz."],
    a1_mod_30: ["友達は行きます。そして、私も行きます。でも、田中さんは行きません。", "Tomodachi wa ikimasu. Soshite, watashi mo ikimasu. Demo, Tanaka-san wa ikimasen.", "Meu amigo vai. Eu também vou. Mas o Sr. Tanaka não vai."]
};
Object.entries(A1_PHASE18_AUDIO_CORRECTIONS).forEach(([moduleId, values]) => {
    const module = CURSO_A1_DADOS.find(item => item.id === moduleId);
    const [displayText, romaji, translation] = values;
    module.stage1_context.audioGuide = romaji;
    Object.assign(module.stage1_context.audio, { displayText, audioText: displayText, romaji, translation });
    module.editorialReview.phase18 = { status: "corrected", target: "stage1_context.audio" };
});

const A1_PHASE18_TEXT_REPLACEMENTS = new Map([
    ["Perfeito! O combo 'Muito obrigado + Desculpe o incômodo' é o auge da fluência cultural!", "Perfeito! Você combinou agradecimento e pedido de desculpas de modo adequado ao contexto."],
    ["Aprenda a perguntar 'quando?' (itsu) e a formar datas básicas com os sufixos de mês (-gatsu) e dia (-nichi), e finalize a Seção 3 com maestria!", "Aprenda a perguntar 'quando?' (itsu), a formar datas básicas com os sufixos de mês (-gatsu) e dia (-nichi) e conclua a Seção 3."],
    ["Fantástico! Usou 'Soshite' e a partícula 'Mo' (também) com enorme fluência!", "Fantástico! Você usou 'soshite' e a partícula 'mo' (também) de forma adequada."],
    ["Chegou a hora de provar sua fluência A1! Enfrente o grande teste integrando saudações, pronomes, compras, valores, direções e existências na chegada ao Japão.", "Chegou a hora de revisar a trilha A1. Este teste integra saudações, pronomes, compras, valores, direções e expressões de existência."],
    ["O Passaporte da Fluência A1", "Revisão de conclusão A1"],
    ["[Esforço] + [Prática] = 日本語 A1 Master!", "[Conteúdo A1] + [Prática] = trilha A1 concluída"],
    ["Sobre a regra 'O Passaporte da Fluência A1': qual afirmação é correta?", "Sobre a revisão de conclusão A1: qual afirmação é correta?"]
]);
(function applyA1Phase18Text(value) {
    if (Array.isArray(value)) return value.forEach(applyA1Phase18Text);
    if (!value || typeof value !== "object") return;
    Object.entries(value).forEach(([key, item]) => {
        if (typeof item === "string" && A1_PHASE18_TEXT_REPLACEMENTS.has(item)) value[key] = A1_PHASE18_TEXT_REPLACEMENTS.get(item);
        else applyA1Phase18Text(item);
    });
})(CURSO_A1_DADOS);

CURSO_A1_DADOS[0].editorialReview = {
    status: "approved",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "quartet-1-textbook"]
};

CURSO_A1_DADOS[1].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "quartet-1-textbook"]
};

CURSO_A1_DADOS[2].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

CURSO_A1_DADOS[3].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

CURSO_A1_DADOS[4].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

CURSO_A1_DADOS[5].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

CURSO_A1_DADOS[6].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

CURSO_A1_DADOS[7].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

(function reviewA1Module09() {
    const module = CURSO_A1_DADOS[8];
    module.title = "Números de 1 a 10 e idades com ～歳";
    Object.assign(module.stage1_context, {
        audioGuide: "Ichi, ni, san. Ni-juu-go-sai desu.",
        missionDescription: "Pratique os números de 1 a 10 e a forma ～歳 (sai) para falar de idade em exemplos simples."
    });
    Object.assign(module.stage2_drops[0], {
        romaji: "Ichi, ni, san",
        timeContext: "Números básicos usados em contagens e combinações."
    });
    Object.assign(module.stage2_drops[1], {
        kanji: "よん（し）、ご、ろく",
        romaji: "Yon (shi), go, roku",
        timeContext: "よん é uma leitura básica de 4; し também aparece em combinações, como しがつ (abril)."
    });
    Object.assign(module.stage2_drops[2], {
        kanji: "なな（しち）、はち、きゅう、じゅう",
        romaji: "Nana (shichi), hachi, kyuu, juu",
        timeContext: "Algumas leituras variam conforme o contador ou a palavra seguinte."
    });
    Object.assign(module.stage2_drops[3], {
        title: "Números e idade com ～歳",
        rule: "Em números compostos, 20 é にじゅう e 25 é にじゅうご. Para indicar idade, usa-se ～歳 (さい) após o número.",
        formula: "[Número] + 歳（さい）です",
        example: "25 anos → にじゅうごさいです (Ni-juu-go-sai desu). Para 20 anos, はたち é uma leitura comum de 二十歳."
    });
    Object.assign(module.stage3_practice[0], {
        question: "1. Sabendo que 3 é さん e 10 é じゅう, como se diz “30 anos” em japonês?",
        options: [
            { label: "🎂 さんじゅうさいです (San-juu-sai desu)", isCorrect: true },
            { label: "🎂 じゅうさんさいです (Juu-san-sai desu)", isCorrect: false },
            { label: "🎂 はたちです (Hatachi desu)", isCorrect: false }
        ]
    });
    Object.assign(module.stage3_practice[1], {
        question: "2. Qual leitura é frequentemente usada para a idade de 20 anos?",
        options: [
            { label: "にじゅうさい (Ni-juu-sai)", isCorrect: false },
            { label: "はたち (Hatachi)", isCorrect: true },
            { label: "じゅうにさい (Juu-ni-sai)", isCorrect: false }
        ]
    });
    Object.assign(module.stage3_practice[2], {
        question: "3. Qual leitura básica de 4 aparece na lista de números do módulo?",
        options: [
            { label: "よん (Yon)", isCorrect: true },
            { label: "ご (Go)", isCorrect: false },
            { label: "きゅう (Kyuu)", isCorrect: false }
        ]
    });
    Object.assign(module.stage3_practice[3], {
        question: "4. Qual frase pergunta a idade de alguém? Use-a apenas quando o contexto tornar a pergunta apropriada.",
        options: [
            { label: "なんごですか？ (Nan-go desu ka?)", isCorrect: false },
            { label: "なんさいですか？ (Nan-sai desu ka?)", isCorrect: true },
            { label: "だれですか？ (Dare desu ka?)", isCorrect: false }
        ]
    });
    Object.assign(module.stage3_practice[4], {
        question: "5. Como se diz “18 anos” com 10 = じゅう e 8 = はち?",
        options: [
            { label: "はちじゅうさい (Hachi-juu-sai — 80 anos)", isCorrect: false },
            { label: "じゅうはっさい (Juu-hassai — 18 anos)", isCorrect: true },
            { label: "はたち (Hatachi — 20 anos)", isCorrect: false }
        ]
    });
    module.stage3_5_sentenceBuilder = [
        { sentenceJp: "わたし は にじゅうごさい です", translation: "Tenho 25 anos.", chunks: ["わたし", "は", "にじゅうごさい", "です"] },
        { sentenceJp: "メアリーさん は じゅうきゅうさい です", translation: "Mary tem 19 anos.", chunks: ["メアリーさん", "は", "じゅうきゅうさい", "です"] }
    ];
    module.stage4_dialog = [
        {
            scenario: "Situação 1: Em uma atividade de apresentação, a professora pede uma resposta-modelo sobre idade.",
            npcName: "Professora Suzuki",
            npcMessage: "たとえば、なんさいですか。 (Por exemplo: quantos anos você tem?)",
            options: [
                { text: "わたし は にじゅうごさい です。 (Tenho 25 anos.)", feedback: "Boa resposta-modelo: ela usa um número seguido de ～歳です.", isCorrect: true },
                { text: "わたし は にじゅうごじん です。", feedback: "-人 não indica idade. Use ～歳 para este significado.", isCorrect: false },
                { text: "いち、に、さん です。", feedback: "A resposta precisa informar uma idade completa.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 2: Em um exercício de leitura, Kenji pergunta pela idade de uma pessoa de 20 anos.",
            npcName: "Kenji",
            npcMessage: "はたち です か。 (Você tem 20 anos?)",
            options: [
                { text: "いいえ、わたし は じゅうきゅうさい です。 (Não, tenho 19 anos.)", feedback: "A resposta usa じゅうきゅうさい para 19 anos.", isCorrect: true },
                { text: "はい、じゅうさい です。", feedback: "じゅうさい significa 10 anos, não 20.", isCorrect: false },
                { text: "こんにちは。", feedback: "A frase não responde à pergunta sobre idade.", isCorrect: false }
            ]
        },
        {
            scenario: "Situação 3: Ao comprar um ingresso com desconto estudantil, a atendente pergunta sua idade.",
            npcName: "Atendente do museu",
            npcMessage: "すみません。がくせいですか。なんさいですか。 (Com licença. Você é estudante? Quantos anos tem?)",
            options: [
                { text: "はい、がくせいです。はたちです。", feedback: "A resposta usa a leitura apresentada para 20 anos.", isCorrect: false },
                { text: "はい、がくせいです。にじゅうにさいです。 (Sim, sou estudante. Tenho 22 anos.)", feedback: "Boa resposta: ela confirma a condição e informa a idade com ～歳です.", isCorrect: true },
                { text: "ありがとう。", feedback: "Ainda falta responder à pergunta sobre a idade.", isCorrect: false }
            ]
        }
    ];
    module.stage5_quiz[0].question = "Qual é a leitura de 35 em japonês?";
    module.stage5_quiz[0].options = ["さんじゅうご (San-juu-go)", "ごじゅうさん (Go-juu-san)", "さんごじゅう (San-go-juu)"];
    module.stage5_quiz[1].question = "Qual é o significado de いち、に、さん?";
    module.stage5_quiz[2].question = "Qual é o significado de よん（し）、ご、ろく?";
    module.stage5_quiz[3].question = "Qual é o significado de なな（しち）、はち、きゅう、じゅう?";
    module.stage5_quiz[4].question = "Sobre números e idade com ～歳, qual afirmação é correta?";
    module.stage5_quiz[4].options[0] = "25 anos pode ser expresso como にじゅうごさいです (Ni-juu-go-sai desu); はたち é uma leitura comum para 20 anos.";
    module.editorialReview = {
        status: "corrected",
        phase: "21B.1",
        scope: "all-editorial-targets",
        sources: ["genki-2e-1-textbook", "tobira-2009"]
    };
})();

(function reviewA1Module10() {
    const module = CURSO_A1_DADOS[9];
    module.title = "Partícula も e そうですか";
    Object.assign(module.stage1_context, { audioGuide: "Watashi mo Burajiru-jin desu. Sou desu ka.", missionDescription: "Use も para incluir um segundo tópico e pratique そうですか para indicar que você compreendeu uma informação." });
    Object.assign(module.stage2_drops[0], { romaji: "Mo", translation: "também; até (partícula de inclusão)", timeContext: "Em わたしも, も ocupa o lugar de は para marcar “eu também”." });
    Object.assign(module.stage2_drops[1], { kanji: "わたしも", romaji: "Watashi mo", timeContext: "Uma resposta possível quando a mesma informação também se aplica a você." });
    Object.assign(module.stage2_drops[2], { kanji: "そうです", romaji: "Sou desu", translation: "É isso; é verdade", timeContext: "Pode confirmar uma informação, conforme o contexto." });
    Object.assign(module.stage2_drops[3], { kanji: "そうですか", romaji: "Sou desu ka", translation: "É mesmo?; entendo.", timeContext: "Indica que você recebeu e compreendeu a informação anterior." });
    Object.assign(module.stage2_drops[4], { title: "Inclusão com は e も", rule: "Quando も marca que o mesmo predicado também se aplica ao tópico, ele pode ocupar a posição de は: わたしは学生です → わたしも学生です. Outras combinações de partículas exigem estudo posterior.", formula: "A は B です。→ C も B です。", example: "ケンジさんは学生です。わたしも学生です。 (Kenji é estudante. Eu também sou estudante.)" });
    module.stage3_practice = [
        { question: "1. Seu colega diz: “わたしは会社員です”. Você também é funcionário. Como responde?", options: [{ label: "🤝 わたしも会社員です。 (Watashi mo kaishain desu.)", isCorrect: true }, { label: "❌ わたしはも会社員です。", isCorrect: false }, { label: "❓ わたしは会社員ですか。", isCorrect: false }] },
        { question: "2. Nesta frase, qual forma marca “eu também sou brasileiro”?", options: [{ label: "わたしもブラジル人です。", isCorrect: true }, { label: "わたしはもブラジル人です。", isCorrect: false }, { label: "もわたしはブラジル人です。", isCorrect: false }] },
        { question: "3. Qual expressão mostra que você entendeu uma informação nova?", options: [{ label: "🤔 そうですか。 (Sou desu ka.)", isCorrect: true }, { label: "👋 さようなら。", isCorrect: false }, { label: "🙅 いいえ。", isCorrect: false }] },
        { question: "4. Como dizer “Kenji também é médico”?", options: [{ label: "ケンジさんはいしゃです。", isCorrect: false }, { label: "いしゃもケンジさんです。", isCorrect: false }, { label: "ケンジさんもいしゃです。", isCorrect: true }] },
        { question: "5. Qual é um sentido possível de そうです?", options: [{ label: "É isso; é verdade.", isCorrect: true }, { label: "Quem é?", isCorrect: false }, { label: "Até logo.", isCorrect: false }] }
    ];
    module.stage3_5_sentenceBuilder = [
        { sentenceJp: "わたし も がくせい です", translation: "Eu também sou estudante.", chunks: ["わたし", "も", "がくせい", "です"] },
        { sentenceJp: "ケンジさん も いしゃ です", translation: "Kenji também é médico.", chunks: ["ケンジさん", "も", "いしゃ", "です"] }
    ];
    module.stage4_dialog = [
        { scenario: "Situação 1: Em uma apresentação, Lucas diz que é brasileiro.", npcName: "Lucas", npcMessage: "わたしはブラジル人です。", options: [{ text: "そうですか。わたしもブラジル人です。", feedback: "Você reconheceu a informação e indicou que ela também se aplica a você.", isCorrect: true }, { text: "いいえ、わたしはブラジル人です。", feedback: "いいえ contradiz a informação anterior, embora sua frase seguinte diga o mesmo.", isCorrect: false }, { text: "さようなら。", feedback: "A resposta não continua a apresentação.", isCorrect: false }] },
        { scenario: "Situação 2: A Dra. Takahashi comenta que seu irmão é engenheiro.", npcName: "Dra. Takahashi", npcMessage: "わたしのあにもエンジニアです。", options: [{ text: "そうですか。", feedback: "そうですか mostra que você compreendeu o comentário.", isCorrect: true }, { text: "わたしはもエンジニアです。", feedback: "Nesta construção, も ocupa a posição de は.", isCorrect: false }, { text: "だれですか。", feedback: "A pergunta não responde ao comentário apresentado.", isCorrect: false }] },
        { scenario: "Situação 3: Em uma revisão, o professor pergunta se você é estudante.", npcName: "Professor Tanaka", npcMessage: "学生ですか。", options: [{ text: "はい、学生です。", feedback: "A resposta confirma diretamente a informação solicitada.", isCorrect: true }, { text: "いいえ、だれですか。", feedback: "A frase não responde à pergunta.", isCorrect: false }, { text: "ブラジル語です。", feedback: "A resposta precisa indicar se você é estudante.", isCorrect: false }] }
    ];
    module.stage5_quiz[0] = { question: "Em わたしも学生です, qual é a função de も?", options: ["Indicar que a mesma informação também se aplica ao tópico.", "Aparecer sempre antes do verbo.", "Formar uma pergunta."], correctIndex: 0 };
    module.stage5_quiz[1].question = "Qual é um significado possível de ～も?";
    module.stage5_quiz[2].question = "Qual é o sentido de わたしも?";
    module.stage5_quiz[3].question = "Qual é o sentido de そうです?";
    module.stage5_quiz[4].question = "Qual é o sentido de そうですか?";
    module.editorialReview = { status: "corrected", phase: "21B.1", scope: "all-editorial-targets", sources: ["genki-2e-1-textbook", "tobira-2009"] };
})();

(function reviewA1Module11() {
    const module = CURSO_A1_DADOS[10];
    module.title = "これ・それ・あれ e lugares";
    Object.assign(module.stage1_context, { audioGuide: "Sore wa nan desu ka?", missionTitle: "Objetivo de hoje", missionDescription: "Pratique palavras que apontam para objetos e lugares, escolhendo a forma de acordo com a relação entre falante, ouvinte e referente." });
    Object.assign(module.stage2_drops[0], { romaji: "Kore", translation: "isto; este aqui", timeContext: "Refere-se, em regra, a algo próximo de quem fala." });
    Object.assign(module.stage2_drops[1], { romaji: "Sore", translation: "isso; esse aí", timeContext: "Refere-se, em regra, a algo próximo de quem ouve ou já saliente na conversa." });
    Object.assign(module.stage2_drops[2], { romaji: "Are", translation: "aquilo; aquele lá", timeContext: "Refere-se a algo distante de falante e ouvinte." });
    Object.assign(module.stage2_drops[3], { romaji: "Koko / soko / asoko", translation: "aqui / aí / ali", timeContext: "São palavras para lugares; a escolha também depende da situação de fala." });
    Object.assign(module.stage2_drops[4], { title: "Palavras que apontam", rule: "これ・それ・あれ apontam para coisas. ここ・そこ・あそこ apontam para lugares. A proximidade é interpretada na situação de fala.", formula: "これ / それ / あれ / どれ; ここ / そこ / あそこ / どこ", example: "トイレはどこですか。 (Toire wa doko desu ka.) — Onde fica o banheiro?" });
    module.stage3_practice[0].question = "1. Você segura uma caneta e pergunta “O que é isto?”. Qual palavra usa?";
    module.stage3_practice[1].question = "2. Seu interlocutor segura um livro. Como pergunta “O que é isso?”";
    module.stage3_practice[2].question = "3. Vocês veem um prédio distante. Como pergunta “O que é aquilo?”";
    module.stage3_practice[3].question = "4. Para perguntar onde fica a estação, qual pergunta é adequada?";
    module.stage3_practice[4].question = "5. Se a estação está no local onde você está, qual resposta usa ここ?";
    module.stage3_5_sentenceBuilder = [
        { sentenceJp: "これ は なん です か", translation: "O que é isto?", chunks: ["これ", "は", "なん", "です", "か"] },
        { sentenceJp: "トイレ は どこ です か", translation: "Onde fica o banheiro?", chunks: ["トイレ", "は", "どこ", "です", "か"] }
    ];
    module.stage4_dialog = [
        { scenario: "Situação 1: Em uma loja, o produto está perto do atendente.", npcName: "Atendente", npcMessage: "いらっしゃいませ。", options: [{ text: "すみません。それはなんですか。", feedback: "A resposta usa それ para o item perto do atendente.", isCorrect: true }, { text: "すみません。これはなんですか。", feedback: "Neste cenário, o item está perto do atendente, não de quem pergunta.", isCorrect: false }, { text: "すみません。あれはなんですか。", feedback: "あれ indicaria algo distante de ambas as pessoas.", isCorrect: false }] },
        { scenario: "Situação 2: A estação que você indica fica distante de vocês.", npcName: "Turista", npcMessage: "しぶや駅はどこですか。", options: [{ text: "しぶや駅はあそこです。", feedback: "あそこ aponta para o lugar distante indicado.", isCorrect: true }, { text: "しぶや駅はここです。", feedback: "ここ seria usado se a estação estivesse no local atual.", isCorrect: false }, { text: "わたしは学生です。", feedback: "A resposta não informa um lugar.", isCorrect: false }] }
    ];
    module.stage5_quiz[0].question = "Qual é a diferença principal entre これ e ここ?";
    module.stage5_quiz[0].options[1] = "これ aponta para uma coisa; ここ aponta para um lugar.";
    module.stage5_quiz[1].question = "Qual é um sentido de これ?";
    module.stage5_quiz[2].question = "Qual é um sentido de それ?";
    module.stage5_quiz[3].question = "Qual é um sentido de あれ?";
    module.stage5_quiz[4].question = "Qual é o sentido de ここ / そこ / あそこ?";
    module.editorialReview = { status: "corrected", phase: "21B.1", scope: "all-editorial-targets", sources: ["genki-2e-1-textbook", "tobira-2009"] };
})();

CURSO_A1_DADOS[11].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

CURSO_A1_DADOS[12].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

CURSO_A1_DADOS[13].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

CURSO_A1_DADOS[14].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

CURSO_A1_DADOS[15].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

CURSO_A1_DADOS[16].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

CURSO_A1_DADOS[17].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

CURSO_A1_DADOS[18].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

CURSO_A1_DADOS[19].editorialReview = {
    status: "corrected",
    phase: "21B.1",
    scope: "all-editorial-targets",
    sources: ["genki-2e-1-textbook", "tobira-2009"]
};

(function reviewA1Module21() {
    const module = CURSO_A1_DADOS[20];
    module.title = "Horas, minutos e meia hora";
    Object.assign(module.stage1_context, {
        audioGuide: "Ima nanji desu ka?",
        missionTitle: "Objetivo de hoje",
        missionDescription: "Pergunte e informe horas básicas, minutos e meia hora com as leituras próprias do relógio."
    });
    Object.assign(module.stage2_drops[0], { kanji: "今（いま）", romaji: "ima", translation: "agora", timeContext: "Usado para indicar o momento atual." });
    Object.assign(module.stage2_drops[1], { kanji: "～時（～じ）", romaji: "ji", translation: "hora", timeContext: "Forma horários como 一時（いちじ）. Algumas horas têm leituras próprias, como 四時（よじ）e 七時（しちじ）." });
    Object.assign(module.stage2_drops[2], { kanji: "～分（～ふん／～ぷん）", romaji: "fun / pun", translation: "minuto", timeContext: "A leitura varia conforme o número: 五分（ごふん）, 八分（はっぷん）e 十分（じゅっぷん）são exemplos." });
    Object.assign(module.stage2_drops[3], { kanji: "半（はん）", romaji: "han", translation: "meia hora", timeContext: "Depois da hora, indica “e meia”: 二時半（にじはん）." });
    Object.assign(module.stage2_drops[4], { title: "Informar uma hora", rule: "Combine a hora com 時; acrescente minutos ou 半 quando necessário. Para perguntar as horas, use 今何時ですか.", formula: "[hora]時 [minutos]分 / [hora]時半", example: "今は五時半です。 (Ima wa goji han desu.) — Agora são cinco e meia." });
    module.stage3_practice[0] = { question: "1. Como se pergunta “Que horas são agora?”", options: [{ label: "いま なんじですか。 (Ima nanji desu ka.)", isCorrect: true }, { label: "いま いくらですか。", isCorrect: false }, { label: "いま どこですか。", isCorrect: false }] };
    module.stage3_practice[1] = { question: "2. Como se diz “São duas e meia”?", options: [{ label: "にじはんです。 (Niji han desu.)", isCorrect: true }, { label: "にふんです。", isCorrect: false }, { label: "にじです。", isCorrect: false }] };
    module.stage3_5_sentenceBuilder = [
        { sentenceJp: "いま は ごじ はん です", translation: "Agora são cinco e meia.", chunks: ["いま", "は", "ごじ", "はん", "です"] },
        { sentenceJp: "いま なんじ です か", translation: "Que horas são agora?", chunks: ["いま", "なんじ", "です", "か"] }
    ];
    module.stage4_dialog = [{ scenario: "Situação 1: Na estação, você quer confirmar a hora.", npcName: "Pessoa na estação", npcMessage: "どうしましたか。 (O que houve?)", options: [{ text: "すみません、いま なんじですか。", feedback: "A resposta chama a atenção da pessoa e pergunta a hora atual.", isCorrect: true }, { text: "でんしゃは おいしいです。", feedback: "A frase não faz uma pergunta sobre horário.", isCorrect: false }, { text: "わたしは がくせいです。", feedback: "A apresentação não responde à situação.", isCorrect: false }] }];
    module.stage5_quiz[0].question = "O que 半（はん）indica em 三時半?";
    module.stage5_quiz[1].question = "Qual é o sentido de 今（いま）?";
    module.stage5_quiz[2].question = "O que ～時（～じ）indica em um horário?";
    module.stage5_quiz[3].question = "O que ～分（～ふん／～ぷん）indica em um horário?";
    module.stage5_quiz[4].question = "Qual é o sentido de 半（はん）depois de uma hora?";
    module.editorialReview = { status: "corrected", phase: "21B.1", scope: "all-editorial-targets", sources: ["genki-2e-1-textbook", "tobira-2009"] };
})();

(function reviewA1Module22() {
    const module = CURSO_A1_DADOS[21];
    module.title = "Dias da semana";
    Object.assign(module.stage1_context, {
        audioGuide: "Kyou wa getsuyoubi desu.",
        missionTitle: "Objetivo de hoje",
        missionDescription: "Reconheça e use os dias da semana em perguntas e compromissos simples."
    });
    const days = [
        ["月曜日（げつようび）", "getsuyoubi", "segunda-feira", "O primeiro kanji é 月, “lua”."],
        ["火曜日（かようび）", "kayoubi", "terça-feira", "O primeiro kanji é 火, “fogo”."],
        ["水曜日（すいようび）", "suiyoubi", "quarta-feira", "O primeiro kanji é 水, “água”."],
        ["木曜日（もくようび）", "mokuyoubi", "quinta-feira", "O primeiro kanji é 木, “árvore/madeira”."],
        ["金曜日（きんようび）", "kinyoubi", "sexta-feira", "O primeiro kanji é 金, “ouro/metal”."],
        ["土曜日（どようび）", "doyoubi", "sábado", "O primeiro kanji é 土, “terra/solo”."],
        ["日曜日（にちようび）", "nichiyoubi", "domingo", "O primeiro kanji é 日, “sol/dia”."]
    ];
    days.forEach(([kanji, romaji, translation, timeContext], index) => Object.assign(module.stage2_drops[index], { kanji, romaji, translation, timeContext }));
    Object.assign(module.stage2_drops[7], {
        title: "Formação dos dias da semana",
        rule: "Os nomes dos dias da semana terminam em 曜日（ようび）. O primeiro kanji distingue cada dia.",
        formula: "[kanji do dia] + 曜日（ようび）",
        example: "日曜日（にちようび）é domingo; 月曜日（げつようび）é segunda-feira."
    });
    module.stage3_practice[0].question = "1. Qual dia da semana é 火曜日（かようび）?";
    module.stage3_practice[1].question = "2. Como se diz “sábado” em japonês?";
    module.stage3_5_sentenceBuilder = [
        { sentenceJp: "きょう は げつようび です", translation: "Hoje é segunda-feira.", chunks: ["きょう", "は", "げつようび", "です"] },
        { sentenceJp: "パーティー は どようび です", translation: "A festa é no sábado.", chunks: ["パーティー", "は", "どようび", "です"] }
    ];
    module.stage4_dialog = [{
        scenario: "Situação 1: Você quer saber quando será a festa.",
        npcName: "Amigo Kenji",
        npcMessage: "パーティー に いきましょう。 (Vamos à festa.)",
        options: [
            { text: "パーティー は なんようび です か。", feedback: "A pergunta identifica corretamente o dia da semana da festa.", isCorrect: true },
            { text: "なんじ です か。", feedback: "A pergunta pede o horário, não o dia.", isCorrect: false },
            { text: "どようび です。", feedback: "A frase dá uma resposta sem antes perguntar o dia.", isCorrect: false }
        ]
    }];
    module.stage5_quiz[0].question = "Qual é a leitura de 金曜日?";
    module.stage5_quiz[1].question = "Qual é o significado de 月曜日（げつようび）?";
    module.stage5_quiz[2].question = "Qual é o significado de 火曜日（かようび）?";
    module.stage5_quiz[3].question = "Qual é o significado de 水曜日（すいようび）?";
    module.stage5_quiz[4].question = "Qual é o significado de 木曜日（もくようび）?";
    module.editorialReview = { status: "corrected", phase: "21B.1", scope: "all-editorial-targets", sources: ["genki-2e-1-textbook", "tobira-2009"] };
})();

(function reviewA1Module23() {
    const module = CURSO_A1_DADOS[22];
    module.title = "Hoje, amanhã e partes do dia";
    Object.assign(module.stage1_context, {
        audioGuide: "Kinou, eiga o mimashita.",
        missionTitle: "Objetivo de hoje",
        missionDescription: "Situe ações em hoje, amanhã, ontem, manhã, meio-dia e noite."
    });
    const words = [
        ["今日（きょう）", "kyou", "hoje", "Expressão relativa ao momento presente."],
        ["明日（あした）", "ashita", "amanhã", "Expressão relativa ao momento presente."],
        ["昨日（きのう）", "kinou", "ontem", "Expressão relativa ao momento presente."],
        ["朝（あさ）", "asa", "manhã", "Pode ser usado como expressão de tempo."],
        ["昼（ひる）", "hiru", "meio-dia; período diurno", "O sentido preciso depende do contexto."],
        ["夜（よる）", "yoru", "noite", "Pode ser usado como expressão de tempo."]
    ];
    words.forEach(([kanji, romaji, translation, timeContext], index) => Object.assign(module.stage2_drops[index], { kanji, romaji, translation, timeContext }));
    Object.assign(module.stage2_drops[6], {
        title: "Expressões de tempo e に",
        rule: "Hoje, amanhã e ontem normalmente não usam に. Com partes do dia, como 朝 e 夜, に pode aparecer conforme o estilo, a ênfase e a preferência do falante.",
        formula: "今日／明日／昨日 + [ação]；朝（に）／夜（に）+ [ação]",
        example: "明日 京都に行きます。朝（に）新聞を読みます。"
    });
    module.stage3_practice[0].question = "1. Como se diz “manhã” em japonês?";
    module.stage3_practice[1].question = "2. Se hoje é 今日（きょう）, como se diz “ontem”?";
    module.stage3_5_sentenceBuilder = [
        { sentenceJp: "きのう えいが を みました", translation: "Ontem assisti a um filme.", chunks: ["きのう", "えいが", "を", "みました"] },
        { sentenceJp: "あした かいしゃ へ いきます", translation: "Amanhã vou à empresa.", chunks: ["あした", "かいしゃ", "へ", "いきます"] }
    ];
    module.stage4_dialog = [{
        scenario: "Situação 1: Um colega pergunta sobre seus planos para amanhã.",
        npcName: "Colega",
        npcMessage: "あした、なに を します か。 (O que você vai fazer amanhã?)",
        options: [
            { text: "かいしゃ へ いきます。", feedback: "A resposta informa uma ação planejada para amanhã.", isCorrect: true },
            { text: "きのう いきました。", feedback: "A frase se refere a ontem, não ao plano para amanhã.", isCorrect: false },
            { text: "きょう です。", feedback: "A frase não diz qual ação você fará.", isCorrect: false }
        ]
    }];
    module.stage5_quiz[0].question = "Qual palavra significa “noite”?";
    module.stage5_quiz[1].question = "Qual é o significado de 今日（きょう）?";
    module.stage5_quiz[2].question = "Qual é o significado de 明日（あした）?";
    module.stage5_quiz[3].question = "Qual é o significado de 昨日（きのう）?";
    module.stage5_quiz[4].question = "Qual é o significado de 朝（あさ）?";
    module.editorialReview = { status: "corrected", phase: "21B.1", scope: "all-editorial-targets", sources: ["genki-2e-1-textbook", "tobira-2009"] };
})();

(function reviewA1Module24() {
    const module = CURSO_A1_DADOS[23];
    module.title = "Verbos de ação: comer, beber, ver e ouvir";
    Object.assign(module.stage1_context, {
        audioGuide: "Gohan o tabemasu.",
        missionTitle: "Objetivo de hoje",
        missionDescription: "Use quatro verbos frequentes com を para indicar o objeto da ação."
    });
    const verbs = [
        ["食べます（たべます）", "tabemasu", "comer", "Usado para alimentos e refeições."],
        ["飲みます（のみます）", "nomimasu", "beber", "Usado para bebidas."],
        ["見ます（みます）", "mimasu", "ver; assistir", "Pode descrever ver TV, filmes e outras coisas."],
        ["聞きます（ききます）", "kikimasu", "ouvir; escutar", "Neste módulo, é usado para ouvir música."]
    ];
    verbs.forEach(([kanji, romaji, translation, timeContext], index) => Object.assign(module.stage2_drops[index], { kanji, romaji, translation, timeContext }));
    Object.assign(module.stage2_drops[4], {
        title: "Objeto direto com を",
        rule: "A partícula を, pronunciada “o”, marca o objeto diretamente envolvido na ação do verbo.",
        formula: "[objeto] を [verbo]",
        example: "音楽を聞きます。 (Ongaku o kikimasu.) — Ouço música."
    });
    module.stage3_practice[0].question = "1. Para dizer “Eu assisto TV”, qual verbo você usa?";
    module.stage3_practice[1].question = "2. Complete: おんがく ___ ききます。";
    module.stage3_5_sentenceBuilder = [
        { sentenceJp: "テレビ を みます", translation: "Assisto TV.", chunks: ["テレビ", "を", "みます"] },
        { sentenceJp: "おんがく を ききます", translation: "Ouço música.", chunks: ["おんがく", "を", "ききます"] }
    ];
    module.stage4_dialog = [{
        scenario: "Situação 1: Em um restaurante, o garçom pergunta o que você vai comer.",
        npcName: "Garçom",
        npcMessage: "なに を たべます か。 (O que você vai comer?)",
        options: [
            { text: "ラーメン を たべます。", feedback: "A resposta informa o alimento e usa を com o verbo corretamente.", isCorrect: true },
            { text: "みず を のみます。", feedback: "A frase fala de uma bebida, não do alimento solicitado.", isCorrect: false },
            { text: "はい、たべます。", feedback: "A resposta não informa o que você vai comer.", isCorrect: false }
        ]
    }];
    module.stage5_quiz[0].question = "Qual partícula marca o objeto direto em 食べます?";
    module.stage5_quiz[1].question = "Qual é o significado de 食べます（たべます）?";
    module.stage5_quiz[2].question = "Qual é o significado de 飲みます（のみます）?";
    module.stage5_quiz[3].question = "Qual é o significado de 見ます（みます）?";
    module.stage5_quiz[4].question = "Qual é o significado trabalhado de 聞きます（ききます）?";
    module.editorialReview = { status: "corrected", phase: "21B.1", scope: "all-editorial-targets", sources: ["genki-2e-1-textbook", "tobira-2009"] };
})();

(function reviewA1Module25() {
    const module = CURSO_A1_DADOS[24];
    module.title = "Verbos de movimento: ir, vir e voltar";
    Object.assign(module.stage1_context, {
        audioGuide: "Gakkou e ikimasu.",
        missionTitle: "Objetivo de hoje",
        missionDescription: "Descreva deslocamentos com ir, vir e voltar e marque destinos com へ ou に."
    });
    Object.assign(module.stage2_drops[0], { kanji: "行きます（いきます）", romaji: "ikimasu", translation: "ir", timeContext: "Indica movimento que parte do ponto de referência do falante." });
    Object.assign(module.stage2_drops[1], { kanji: "来ます（きます）", romaji: "kimasu", translation: "vir", timeContext: "Indica movimento em direção ao ponto de referência do falante ou do ouvinte." });
    Object.assign(module.stage2_drops[2], { kanji: "帰ります（かえります）", romaji: "kaerimasu", translation: "voltar; ir para casa", timeContext: "Usado para voltar a um lugar de referência, frequentemente a casa." });
    Object.assign(module.stage2_drops[3], {
        title: "Destino com へ e に",
        rule: "Com verbos de movimento, へ e に podem marcar o destino. へ, pronunciado “e”, destaca a direção; に apresenta o destino como ponto de chegada.",
        formula: "[lugar] へ／に [verbo de movimento]",
        example: "図書館へ行きます。／図書館に行きます。 — Vou à biblioteca."
    });
    module.stage3_practice[0].question = "1. Você está no trabalho e vai para casa. Qual verbo é apropriado?";
    module.stage3_practice[1].question = "2. Seu amigo, que estará na festa, pergunta se você vai até lá. Qual verbo ele usa?";
    module.stage3_5_sentenceBuilder = [
        { sentenceJp: "がっこう へ いきます", translation: "Vou à escola.", chunks: ["がっこう", "へ", "いきます"] },
        { sentenceJp: "うち に かえります", translation: "Volto para casa.", chunks: ["うち", "に", "かえります"] }
    ];
    module.stage4_dialog = [{
        scenario: "Situação 1: Seu chefe pergunta para onde você vai depois do trabalho.",
        npcName: "Chefe",
        npcMessage: "このあと、どこ へ いきます か。 (Para onde você vai depois?)",
        options: [
            { text: "うち へ かえります。", feedback: "A resposta informa que você voltará para casa.", isCorrect: true },
            { text: "うち へ きます。", feedback: "A escolha de 来ます depende de o ponto de referência ser a casa do interlocutor; não é a resposta esperada neste cenário.", isCorrect: false },
            { text: "パン を たべます。", feedback: "A frase não informa o destino do deslocamento.", isCorrect: false }
        ]
    }];
    module.stage5_quiz[0].question = "Qual é a diferença básica entre 行きます e 来ます?";
    module.stage5_quiz[1].question = "Qual é o significado de 行きます（いきます）?";
    module.stage5_quiz[2].question = "Qual é o significado de 来ます（きます）?";
    module.stage5_quiz[3].question = "Qual é o significado de 帰ります（かえります）?";
    module.stage5_quiz[4].question = "Qual afirmação descreve へ e に com verbos de movimento?";
    module.stage5_quiz[4].options = [
        "As duas podem marcar o destino; へ destaca a direção e に o ponto de chegada.",
        "São usadas apenas para contar animais pequenos.",
        "São formas arcaicas que não aparecem no cotidiano."
    ];
    module.editorialReview = { status: "corrected", phase: "21B.1", scope: "all-editorial-targets", sources: ["genki-2e-1-textbook", "tobira-2009"] };
})();
