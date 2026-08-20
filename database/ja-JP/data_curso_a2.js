const CURSO_A2_DADOS = [
    {
        "id": "a2_mod_01",
        "title": "A Minha Rotina Diária",
        "section": 1,
        "sectionTitle": "Minha Rotina & Estilo de Vida",
        "level": "A2",
        "xpReward": 80,
        "stage1_context": {
            "audioGuide": "Maasa okimasu!",
            "missionTitle": "Descrevendo o Dia a Dia",
            "missionDescription": "Bem-vindo ao Nível A2! Vamos aprender a falar sobre os hábitos da sua rotina diária: acordar, tomar banho, escovar os dentes e ir para a cama."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "おきます",
                "romaji": "Okimasu",
                "translation": "Acordar / Levantar",
                "timeContext": "Usado para o ato de sair da cama pela manhã."
            },
            {
                "type": "vocab",
                "kanji": "ねます",
                "romaji": "Nemasu",
                "translation": "Dormir / Ir para a cama",
                "timeContext": "Usado ao se deitar à noite."
            },
            {
                "type": "vocab",
                "kanji": "シャワー を あびます",
                "romaji": "Shawaa o abimasu",
                "translation": "Tomar banho de chuveiro",
                "timeContext": "Ação de higiene pessoal diária."
            },
            {
                "type": "vocab",
                "kanji": "は を みがきます",
                "romaji": "Ha o migakimasu",
                "translation": "Escovar os dentes",
                "timeContext": "Realizado após as refeições."
            },
            {
                "type": "grammar_pill",
                "title": "Rotina com Partícula に (Ni)",
                "rule": "Usamos a partícula に (ni) após um horário específico para indicar o momento exato em que realizamos uma ação.",
                "formula": "[ Horário ] + に + [ Verbo ]",
                "example": "7じ に おきます ➔ Acordo às 7 horas."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se diz 'Acordar' em japonês formal?",
                "options": [
                    {
                        "label": "おきます (Okimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "ねます (Nemasu)",
                        "isCorrect": false
                    },
                    {
                        "label": "たべます (Tabemasu)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Escolha a tradução correta de: '7-ji ni okimasu'",
                "options": [
                    {
                        "label": "Acordo às 7 horas",
                        "isCorrect": true
                    },
                    {
                        "label": "Vou dormir às 7 horas",
                        "isCorrect": false
                    },
                    {
                        "label": "Tomo banho às 7 horas",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual é a expressão para 'Escovar os dentes'?",
                "options": [
                    {
                        "label": "は を みがきます (Ha o migakimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "シャワー を あびます",
                        "isCorrect": false
                    },
                    {
                        "label": "お茶 を のみます",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Complete a frase para 'Dormir às 11 horas': 11-ji ___ nemasu.",
                "options": [
                    {
                        "label": "に (ni)",
                        "isCorrect": true
                    },
                    {
                        "label": "を (o)",
                        "isCorrect": false
                    },
                    {
                        "label": "で (de)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual frase indica 'Tomar banho de chuveiro'?",
                "options": [
                    {
                        "label": "シャワー を あびます",
                        "isCorrect": true
                    },
                    {
                        "label": "みず を のみます",
                        "isCorrect": false
                    },
                    {
                        "label": "ほん を よみます",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "まいあさ 7じ に おきます",
                "translation": "Acordo todas as manhãs às 7 horas.",
                "chunks": [
                    "まいあさ",
                    "7じ",
                    "に",
                    "おきます"
                ]
            },
            {
                "sentenceJp": "ねる まえ に は を みがきます",
                "translation": "Escovo os dentes antes de ir para a cama.",
                "chunks": [
                    "ねる",
                    "まえ",
                    "に",
                    "は",
                    "を",
                    "みがきます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Um colega de trabalho pergunta sobre seus horários matinais.",
                "npcName": "Kenji",
                "npcMessage": "[Seu Nome]-san, maasa nan-ji ni okimasu ka? (A que horas você acorda de manhã?)",
                "options": [
                    {
                        "text": "6-ji ni okimasu! (Acordo às 6 horas!)",
                        "feedback": "Excelente resposta natural!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Respondeu que não e vai dormir, contradição!",
                        "isCorrect": false
                    },
                    {
                        "text": "Arigatou gozaimasu!",
                        "feedback": "Agradeceu em vez de dizer o horário.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Kenji quer saber sobre a sua rotina da noite.",
                "npcName": "Kenji",
                "npcMessage": "Konban, nan-ji ni nemasu ka? (A que horas vai dormir esta noite?)",
                "options": [
                    {
                        "text": "11-ji ni nemasu. (Vou dormir às 11 horas.)",
                        "feedback": "Perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Tabemasu!",
                        "feedback": "Disse que vai comer.",
                        "isCorrect": false
                    },
                    {
                        "text": "Doko desu ka?",
                        "feedback": "Perguntou onde fica.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Conversando sobre hábitos de higiene.",
                "npcName": "Kenji",
                "npcMessage": "Neru mae ni ha o migakimasu ka? (Você escova os dentes antes de dormir?)",
                "options": [
                    {
                        "text": "Hai, ha o migakimasu! (Sim, escovo os dentes!)",
                        "feedback": "Muito bom!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, okimasu.",
                        "feedback": "Disse que acorda.",
                        "isCorrect": false
                    },
                    {
                        "text": "Konbanwa!",
                        "feedback": "Apenas cumprimentou boa noite.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que a partícula に (ni) indica quando usada com horários?",
                "options": [
                    "O momento exato da ação",
                    "O local da ação",
                    "O meio de transporte"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'おきます' (Okimasu)?",
                "options": [
                    "Acordar / Levantar",
                    "Dormir / Ir para a cama",
                    "Tomar banho de chuveiro"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ねます' (Nemasu)?",
                "options": [
                    "Acordar / Levantar",
                    "Dormir / Ir para a cama",
                    "Tomar banho de chuveiro"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'シャワー を あびます' (Shawaa o abimasu)?",
                "options": [
                    "Dormir / Ir para a cama",
                    "Acordar / Levantar",
                    "Tomar banho de chuveiro"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'は を みがきます' (Ha o migakimasu)?",
                "options": [
                    "Escovar os dentes",
                    "Acordar / Levantar",
                    "Dormir / Ir para a cama"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_02",
        "title": "Com que Frequência?",
        "section": 1,
        "sectionTitle": "Minha Rotina & Estilo de Vida",
        "level": "A2",
        "xpReward": 80,
        "stage1_context": {
            "audioGuide": "Itsumo eiga o mimasu!",
            "missionTitle": "Advérbios de Frequência",
            "missionDescription": "Aprenda a expressar a frequência de seus hábitos diários: sempre, às vezes, raramente e nunca."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "いつも",
                "romaji": "Itsumo",
                "translation": "Sempre",
                "timeContext": "Frequência de 100% dos dias."
            },
            {
                "type": "vocab",
                "kanji": "ときどき",
                "romaji": "Tokidoki",
                "translation": "Às vezes",
                "timeContext": "Frequência média / ocasional."
            },
            {
                "type": "vocab",
                "kanji": "たまに",
                "romaji": "Tamani",
                "translation": "Raramente / De vez em quando",
                "timeContext": "Pouca frequência."
            },
            {
                "type": "vocab",
                "kanji": "ぜんぜん (...ない)",
                "romaji": "Zenzen (...masen)",
                "translation": "Nunca / De forma alguma",
                "timeContext": "Requer verbo na forma negativa!"
            },
            {
                "type": "grammar_pill",
                "title": "A Regra do ぜんぜん (Zenzen)",
                "rule": "O advérbio ぜんぜん (zenzen) DEVE SEMPRE ser acompanhado por um verbo na forma negativa (masen) para significar 'nunca'.",
                "formula": "ぜんぜん + [ Verbo Negativo ]",
                "example": "ぜんぜん おさけ を のみません ➔ Nunca bebo bebida alcoólica."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se diz 'Sempre' em japonês?",
                "options": [
                    {
                        "label": "いつも (Itsumo)",
                        "isCorrect": true
                    },
                    {
                        "label": "ときどき (Tokidoki)",
                        "isCorrect": false
                    },
                    {
                        "label": "たまに (Tamani)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual advérbio significa 'Às vezes'?",
                "options": [
                    {
                        "label": "ときどき (Tokidoki)",
                        "isCorrect": true
                    },
                    {
                        "label": "いつも (Itsumo)",
                        "isCorrect": false
                    },
                    {
                        "label": "ぜんぜん (Zenzen)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. O advérbio 'Zenzen' exige o verbo em qual forma?",
                "options": [
                    {
                        "label": "Forma Negativa (masen)",
                        "isCorrect": true
                    },
                    {
                        "label": "Forma Afirmativa (masu)",
                        "isCorrect": false
                    },
                    {
                        "label": "Forma Passada (mashita)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza: 'Itsumo ocha o nomimasu'",
                "options": [
                    {
                        "label": "Sempre bebo chá",
                        "isCorrect": true
                    },
                    {
                        "label": "Nunca bebo chá",
                        "isCorrect": false
                    },
                    {
                        "label": "Às vezes bebo chá",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Escolha a frase para 'Nunca assisto TV':",
                "options": [
                    {
                        "label": "Zenzen terebi o mimasen",
                        "isCorrect": true
                    },
                    {
                        "label": "Itsumo terebi o mimasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Tokidoki terebi o mimasu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "しゅうまつ は たいてい うち で やすみます",
                "translation": "Geralmente me descanso em casa no fim de semana.",
                "chunks": [
                    "しゅうまつ",
                    "は",
                    "たいてい",
                    "うち",
                    "で",
                    "やすみます"
                ]
            },
            {
                "sentenceJp": "たまに ともだち と おちゃ を のみます",
                "translation": "De vez em quando tomo chá com amigos.",
                "chunks": [
                    "たまに",
                    "ともだち",
                    "と",
                    "おちゃ",
                    "を",
                    "のみます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Conversando sobre hábitos no café da manhã.",
                "npcName": "Yumi",
                "npcMessage": "[Seu Nome]-san, asa itsumo kohii o nomimasu ka? (Você sempre bebe café de manhã?)",
                "options": [
                    {
                        "text": "Hai, itsumo nomimasu! (Sim, sempre bebo!)",
                        "feedback": "Ótimo uso de itsumo!",
                        "isCorrect": true
                    },
                    {
                        "text": "Zenzen nomimasu.",
                        "feedback": "Erro: zenzen exige verbo negativo!",
                        "isCorrect": false
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Fora de contexto.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Perguntando sobre esportes.",
                "npcName": "Yumi",
                "npcMessage": "Tokidoki suportsusimasu ka? (Você faz esportes às vezes?)",
                "options": [
                    {
                        "text": "Tamani shimasu. (Faço raramente.)",
                        "feedback": "Perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Konnichiwa!",
                        "feedback": "Cumprimentou em vez de responder.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hai, zenzen shimasu.",
                        "feedback": "Erro gramatical com zenzen.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Falando sobre bebidas alcoólicas em festas.",
                "npcName": "Yumi",
                "npcMessage": "Osake o nomimasu ka? (Você bebe bebida alcoólica?)",
                "options": [
                    {
                        "text": "Iie, zenzen nomimase n. (Não, nunca bebo.)",
                        "feedback": "Excelente uso da negação com zenzen!",
                        "isCorrect": true
                    },
                    {
                        "text": "Itsumo nomimase n.",
                        "feedback": "Contradição entre sempre e negação.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hai, oishii desu.",
                        "feedback": "Respondeu que é gostoso sem dizer se bebe.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual é o significado de 'Tamani'?",
                "options": [
                    "Raramente / De vez em quando",
                    "Sempre",
                    "Todos os dias"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'いつも' (Itsumo)?",
                "options": [
                    "Sempre",
                    "Às vezes",
                    "Raramente / De vez em quando"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ときどき' (Tokidoki)?",
                "options": [
                    "Sempre",
                    "Às vezes",
                    "Raramente / De vez em quando"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'たまに' (Tamani)?",
                "options": [
                    "Às vezes",
                    "Sempre",
                    "Raramente / De vez em quando"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'ぜんぜん (...ない)' (Zenzen (...masen))?",
                "options": [
                    "Nunca / De forma alguma",
                    "Sempre",
                    "Às vezes"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_03",
        "title": "Fim de Semana e Hobbies",
        "section": 1,
        "sectionTitle": "Minha Rotina & Estilo de Vida",
        "level": "A2",
        "xpReward": 80,
        "stage1_context": {
            "audioGuide": "Shuumatsu nani o shimasu ka?",
            "missionTitle": "Falando dos seus Hobbies",
            "missionDescription": "Aprenda a contar o que você gosta de fazer no fim de semana: ler livros, ver animes, jogar videogame e praticar esportes."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "しゅうまつ",
                "romaji": "Shuumatsu",
                "translation": "Fim de semana",
                "timeContext": "Sábado e domingo."
            },
            {
                "type": "vocab",
                "kanji": "ほん を よみます",
                "romaji": "Hon o yomimasu",
                "translation": "Ler livros",
                "timeContext": "Hobby de leitura."
            },
            {
                "type": "vocab",
                "kanji": "アニメ を みます",
                "romaji": "Anime o mimasu",
                "translation": "Assistir animes",
                "timeContext": "Hobby audiovisual popular."
            },
            {
                "type": "vocab",
                "kanji": "ゲーム を します",
                "romaji": "Geemu o shimasu",
                "translation": "Jogar videogame",
                "timeContext": "Atividade de lazer."
            },
            {
                "type": "grammar_pill",
                "title": "Perguntando Hobbies com 趣味 (Shumi)",
                "rule": "Para perguntar o hobby de alguém, usamos a estrutura Shumi wa nan desu ka?",
                "formula": "しゅみ は なん です か ➔ Qual é o seu hobby?",
                "example": "Shumi wa anime o miru koto desu ➔ Meu hobby é assistir animes."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. O que significa 'Shuumatsu'?",
                "options": [
                    {
                        "label": "Fim de semana",
                        "isCorrect": true
                    },
                    {
                        "label": "Manhã bem cedo",
                        "isCorrect": false
                    },
                    {
                        "label": "Próximo mês",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como se diz 'Ler livros' em japonês?",
                "options": [
                    {
                        "label": "ほん を よみます (Hon o yomimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "アニメ を みます",
                        "isCorrect": false
                    },
                    {
                        "label": "おんがく を ききます",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual é a expressão para 'Jogar videogame'?",
                "options": [
                    {
                        "label": "ゲーム を します (Geemu o shimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "スポーツ を します",
                        "isCorrect": false
                    },
                    {
                        "label": "ほん を よみます",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza: 'Shuumatsu nani o shimasu ka?'",
                "options": [
                    {
                        "label": "O que você faz no fim de semana?",
                        "isCorrect": true
                    },
                    {
                        "label": "O que você comeu hoje?",
                        "isCorrect": false
                    },
                    {
                        "label": "Onde você mora?",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como responder 'Assisto animes'?",
                "options": [
                    {
                        "label": "Anime o mimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Anime o nomimasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Anime o ikimasu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "わたし は すし が だいすき です",
                "translation": "Eu adoro sushi.",
                "chunks": [
                    "わたし",
                    "は",
                    "すし",
                    "が",
                    "だいすき",
                    "です"
                ]
            },
            {
                "sentenceJp": "からい たべもの は ちょっと にがて です",
                "translation": "Comida apimentada é um pouco difícil para mim.",
                "chunks": [
                    "からい",
                    "たべもの",
                    "は",
                    "ちょっと",
                    "にがて",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Na cafeteria, um amigo pergunta dos seus planos de fim de semana.",
                "npcName": "Sora",
                "npcMessage": "[Seu Nome]-san, shuumatsu nani o shimasu ka? (O que você faz no fim de semana?)",
                "options": [
                    {
                        "text": "Geemu o shimasu! (Jogo videogame!)",
                        "feedback": "Resposta natural e precisa!",
                        "isCorrect": true
                    },
                    {
                        "text": "Gakkou ni ikimasu.",
                        "feedback": "Iria para a escola no fim de semana?",
                        "isCorrect": false
                    },
                    {
                        "text": "Ohayou gozaimasu!",
                        "feedback": "Saudação fora de contexto.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Conversando sobre gostos pessoais.",
                "npcName": "Sora",
                "npcMessage": "Hon o yomimasu ka? (Você lê livros?)",
                "options": [
                    {
                        "text": "Hai, tokidoki yomimasu. (Sim, leio às vezes.)",
                        "feedback": "Excelente!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemasu.",
                        "feedback": "Disse que come livros!",
                        "isCorrect": false
                    },
                    {
                        "text": "Oishii desu!",
                        "feedback": "Disse que é gostoso.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Pergunta direta sobre seu hobby principal.",
                "npcName": "Sora",
                "npcMessage": "[Seu Nome]-san no shumi wa nan desu ka? (Qual é o seu hobby?)",
                "options": [
                    {
                        "text": "Anime o miru koto desu! (É assistir animes!)",
                        "feedback": "Sensacional!",
                        "isCorrect": true
                    },
                    {
                        "text": "Kore wa hon desu.",
                        "feedback": "Disse 'isto é um livro'.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sumimasen!",
                        "feedback": "Pediu desculpas sem responder.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Como se traduz 'Hon o yomimasu'?",
                "options": [
                    "Ler livros",
                    "Escrever cartas",
                    "Ouvir música"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'しゅうまつ' (Shuumatsu)?",
                "options": [
                    "Fim de semana",
                    "Ler livros",
                    "Assistir animes"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ほん を よみます' (Hon o yomimasu)?",
                "options": [
                    "Fim de semana",
                    "Ler livros",
                    "Assistir animes"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'アニメ を みます' (Anime o mimasu)?",
                "options": [
                    "Ler livros",
                    "Fim de semana",
                    "Assistir animes"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'ゲーム を します' (Geemu o shimasu)?",
                "options": [
                    "Jogar videogame",
                    "Fim de semana",
                    "Ler livros"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_04",
        "title": "Adjetivos em Ação (Parte 1: Adjetivos -i)",
        "section": 1,
        "sectionTitle": "Minha Rotina & Estilo de Vida",
        "level": "A2",
        "xpReward": 85,
        "stage1_context": {
            "audioGuide": "Kono ramen wa oishii desu!",
            "missionTitle": "Descrevendo Coisas com Adjetivos -i",
            "missionDescription": "Domine os adjetivos que terminam em -i para descrever comida, lugares e objetos (gostoso, grande, pequeno, novo, antigo)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "おいしい",
                "romaji": "Oishii",
                "translation": "Gostoso / Delicioso",
                "timeContext": "Usado para comidas e bebidas."
            },
            {
                "type": "vocab",
                "kanji": "おおきい",
                "romaji": "Ookii",
                "translation": "Grande",
                "timeContext": "Tamanho de objetos/lugares."
            },
            {
                "type": "vocab",
                "kanji": "ちいさい",
                "romaji": "Chiisai",
                "translation": "Pequeno",
                "timeContext": "Tamanho reduzido."
            },
            {
                "type": "vocab",
                "kanji": "あたらしい",
                "romaji": "Atarashii",
                "translation": "Novo",
                "timeContext": "Objetos ou informações recentes."
            },
            {
                "type": "grammar_pill",
                "title": "Negação dos Adjetivos -i (Kunai)",
                "rule": "Para negar um adjetivo -i, trocamos o 'i' final por くない (kunai) + desu.",
                "formula": "Adjetivo(sem i) + くない です",
                "example": "Oishii ➔ Oishikunai desu (Não é gostoso)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Qual é o oposto de Ookii (Grande)?",
                "options": [
                    {
                        "label": "ちいさい (Chiisai)",
                        "isCorrect": true
                    },
                    {
                        "label": "あたらしい (Atarashii)",
                        "isCorrect": false
                    },
                    {
                        "label": "おいしい (Oishii)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como se diz 'Não é gostoso' em japonês?",
                "options": [
                    {
                        "label": "おいしくない です (Oishikunai desu)",
                        "isCorrect": true
                    },
                    {
                        "label": "おいしい じゃありません",
                        "isCorrect": false
                    },
                    {
                        "label": "おいしい ない",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual adjetivo significa 'Novo'?",
                "options": [
                    {
                        "label": "あたらしい (Atarashii)",
                        "isCorrect": true
                    },
                    {
                        "label": "ふるい (Furui)",
                        "isCorrect": false
                    },
                    {
                        "label": "たかい (Takai)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Como negar 'Atarashii' (Novo)?",
                "options": [
                    {
                        "label": "Atarashikunai desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Atarashii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Atarashii ja arimasen",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Traduza: 'Kono heya wa ookii desu'",
                "options": [
                    {
                        "label": "Este quarto é grande",
                        "isCorrect": true
                    },
                    {
                        "label": "Este quarto é pequeno",
                        "isCorrect": false
                    },
                    {
                        "label": "Este quarto é novo",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "みず を ふたつ おねがいします",
                "translation": "Dois copos de água, por favor.",
                "chunks": [
                    "みず",
                    "を",
                    "ふたつ",
                    "おねがいします"
                ]
            },
            {
                "sentenceJp": "メニュー を みせて ください",
                "translation": "Por favor, me mostre o cardápio.",
                "chunks": [
                    "メニュー",
                    "を",
                    "みせて",
                    "ください"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Provando um prato típico num restaurante em Tokyo.",
                "npcName": "Garçom",
                "npcMessage": "Ramen wa ikaga desu ka? (O que achou do ramen?)",
                "options": [
                    {
                        "text": "Totemo oishii desu! (É muito gostoso!)",
                        "feedback": "Excelente elogio ao chefe!",
                        "isCorrect": true
                    },
                    {
                        "text": "Chiisai desu.",
                        "feedback": "Dizer que é pequeno não responde ao sabor.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas sem motivo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Comentando sobre o seu novo celular com um amigo.",
                "npcName": "Takuya",
                "npcMessage": "Atarashii sumaho desu ka? (É um celular novo?)",
                "options": [
                    {
                        "text": "Hai, atarashii desu! (Sim, é novo!)",
                        "feedback": "Perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, oishii desu.",
                        "feedback": "Disse que o celular é gostoso!",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despediu-se do nada.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Opinião sobre o quarto do hotel.",
                "npcName": "Takuya",
                "npcMessage": "Hotel no heya wa ookii desu ka? (O quarto do hotel é grande?)",
                "options": [
                    {
                        "text": "Iie, ookikunai desu. Chiisai desu. (Não, não é grande. É pequeno.)",
                        "feedback": "Sensacional! Usou a negação correta com kunai!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hai, ookii ja arimasen.",
                        "feedback": "Forma de negação incorreta para adjetivos -i.",
                        "isCorrect": false
                    },
                    {
                        "text": "Itadakimasu!",
                        "feedback": "Disse bom apetite.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual é a forma correta de negar o adjetivo 'Chiisai'?",
                "options": [
                    "Chiisakunai desu",
                    "Chiisai ja arimasen",
                    "Chiisai masen"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'おいしい' (Oishii)?",
                "options": [
                    "Gostoso / Delicioso",
                    "Grande",
                    "Pequeno"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'おおきい' (Ookii)?",
                "options": [
                    "Gostoso / Delicioso",
                    "Grande",
                    "Pequeno"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'ちいさい' (Chiisai)?",
                "options": [
                    "Grande",
                    "Gostoso / Delicioso",
                    "Pequeno"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'あたらしい' (Atarashii)?",
                "options": [
                    "Novo",
                    "Gostoso / Delicioso",
                    "Grande"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_05",
        "title": "Adjetivos em Ação (Parte 2: Adjetivos -na)",
        "section": 1,
        "sectionTitle": "Minha Rotina & Estilo de Vida",
        "level": "A2",
        "xpReward": 85,
        "stage1_context": {
            "audioGuide": "Shizuka na machi desu!",
            "missionTitle": "Descrevendo Lugares e Pessoas com -na",
            "missionDescription": "Aprenda a usar os adjetivos do tipo -na para descrever cidades calmas, pessoas gentis e lugares famosos."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "しずか (な)",
                "romaji": "Shizuka (na)",
                "translation": "Calmo / Silencioso",
                "timeContext": "Usado para ambientes ou pessoas calmas."
            },
            {
                "type": "vocab",
                "kanji": "にぎやか (な)",
                "romaji": "Nigiyaka (na)",
                "translation": "Movimentado / Animado",
                "timeContext": "Cidades, festas ou ruas cheias."
            },
            {
                "type": "vocab",
                "kanji": "しんせつ (な)",
                "romaji": "Shinsetsu (na)",
                "translation": "Gentil / Atencioso",
                "timeContext": "Qualidade de pessoas."
            },
            {
                "type": "vocab",
                "kanji": "ゆうめい (な)",
                "romaji": "Yuumei (na)",
                "translation": "Famoso",
                "timeContext": "Lugares, obras ou celebridades."
            },
            {
                "type": "grammar_pill",
                "title": "Negação dos Adjetivos -na",
                "rule": "Adjetivos -na usam a negação じゃありません (ja arimasen) ou ではありません (dewa arimasen), exatamente como os substantivos!",
                "formula": "Adjetivo + じゃありません",
                "example": "Shizuka ➔ Shizuka ja arimasen (Não é calmo)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se diz 'Movimentado / Animado' em japonês?",
                "options": [
                    {
                        "label": "にぎやか (Nigiyaka)",
                        "isCorrect": true
                    },
                    {
                        "label": "しずか (Shizuka)",
                        "isCorrect": false
                    },
                    {
                        "label": "ゆうめい (Yuumei)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual é a negação correta para 'Shizuka' (Calmo)?",
                "options": [
                    {
                        "label": "しずか じゃありません (Shizuka ja arimasen)",
                        "isCorrect": true
                    },
                    {
                        "label": "しずかくない です",
                        "isCorrect": false
                    },
                    {
                        "label": "しずか ない",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. O que significa 'Shinsetsu na hito'?",
                "options": [
                    {
                        "label": "Pessoa gentil",
                        "isCorrect": true
                    },
                    {
                        "label": "Pessoa famosa",
                        "isCorrect": false
                    },
                    {
                        "label": "Pessoa quieta",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Onde a partícula 'na' deve ser colocada?",
                "options": [
                    {
                        "label": "Entre o adjetivo e o substantivo que ele modifica",
                        "isCorrect": true
                    },
                    {
                        "label": "No final absoluto da frase",
                        "isCorrect": false
                    },
                    {
                        "label": "Antes do sujeito",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Traduza: 'Kyoto wa yuumei na machi desu'",
                "options": [
                    {
                        "label": "Kyoto é uma cidade famosa",
                        "isCorrect": true
                    },
                    {
                        "label": "Kyoto é uma cidade calmo",
                        "isCorrect": false
                    },
                    {
                        "label": "Kyoto é uma cidade pequena",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "この ほん は いくら です か",
                "translation": "Quanto custa este livro?",
                "chunks": [
                    "この",
                    "ほん",
                    "は",
                    "いくら",
                    "です",
                    "か"
                ]
            },
            {
                "sentenceJp": "ぜんぶ で 3000えん です",
                "translation": "Ao todo são 3000 ienes.",
                "chunks": [
                    "ぜんぶ",
                    "で",
                    "3000えん",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Um amigo pergunta sobre o bairro onde você está hospedado.",
                "npcName": "Hana",
                "npcMessage": "[Seu Nome]-san, soko wa shizuka na machi desu ka? (Aí é uma cidade/bairro calmo?)",
                "options": [
                    {
                        "text": "Iie, nigiyaka desu! (Não, é movimentado!)",
                        "feedback": "Ótimo contraste de adjetivos!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hai, oishii desu.",
                        "feedback": "Disse que o bairro é gostoso.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ohayou!",
                        "feedback": "Saudação fora de hora.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Perguntando sobre a atitude dos japoneses que te ajudaram.",
                "npcName": "Hana",
                "npcMessage": "Nihonjin wa shinsetsu desu ka? (Os japoneses são gentis?)",
                "options": [
                    {
                        "text": "Hai, totemo shinsetsu desu! (Sim, são muito gentis!)",
                        "feedback": "Perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, shinsetsu kunai desu.",
                        "feedback": "Erro: kunai é apenas para adjetivos -i!",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas à toa.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Falando sobre um ponto turístico em Tokyo.",
                "npcName": "Hana",
                "npcMessage": "Asakusa wa yuumei desu ka? (Asakusa é famosa?)",
                "options": [
                    {
                        "text": "Hai, yuumei na basho desu! (Sim, é um lugar famoso!)",
                        "feedback": "Excelente uso de 'na' antes de substantivo!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemasu.",
                        "feedback": "Disse que vai comer.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hai, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Como se nega o adjetivo -na 'Yuumei'?",
                "options": [
                    "Yuumei ja arimasen",
                    "Yuumekunai desu",
                    "Yuumei masen"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'しずか (な)' (Shizuka (na))?",
                "options": [
                    "Calmo / Silencioso",
                    "Movimentado / Animado",
                    "Gentil / Atencioso"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'にぎやか (な)' (Nigiyaka (na))?",
                "options": [
                    "Calmo / Silencioso",
                    "Movimentado / Animado",
                    "Gentil / Atencioso"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'しんせつ (な)' (Shinsetsu (na))?",
                "options": [
                    "Movimentado / Animado",
                    "Calmo / Silencioso",
                    "Gentil / Atencioso"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'ゆうめい (な)' (Yuumei (na))?",
                "options": [
                    "Famoso",
                    "Calmo / Silencioso",
                    "Movimentado / Animado"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_06",
        "title": "O Passado dos Verbos",
        "section": 2,
        "sectionTitle": "Passado, Experiências e Histórias",
        "level": "A2",
        "xpReward": 90,
        "stage1_context": {
            "audioGuide": "Kinou sushi o tabemashita!",
            "missionTitle": "Contando o que Aconteceu",
            "missionDescription": "Aprenda a conjugar os verbos no passado formal (-mashita) e passado negativo (-masen deshita) para contar o que você fez ontem."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "きのう",
                "romaji": "Kinou",
                "translation": "Ontem",
                "timeContext": "Marcador temporal de passado recente."
            },
            {
                "type": "vocab",
                "kanji": "たべました",
                "romaji": "Tabemashita",
                "translation": "Comi / Comeu (Passado)",
                "timeContext": "Ação de comer concluída."
            },
            {
                "type": "vocab",
                "kanji": "のみました",
                "romaji": "Nomimashita",
                "translation": "Bebi / Bebeu (Passado)",
                "timeContext": "Ação de beber concluída."
            },
            {
                "type": "vocab",
                "kanji": "いきましてい / いきました",
                "romaji": "Ikimashita",
                "translation": "Fui / Foi (Passado)",
                "timeContext": "Deslocamento concluído."
            },
            {
                "type": "grammar_pill",
                "title": "Conjugação do Passado Verbal",
                "rule": "Para o passado afirmativo, trocamos ~masu por ~mashita. Para o passado negativo, usamos ~masen deshita.",
                "formula": "~masu ➔ ~mashita / ~masen deshita",
                "example": "Tabemasu (Como) ➔ Tabemashita (Comi) / Tabemasen deshita (Não comi)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como fica o verbo 'Tabemasu' (Comer) no passado afirmativo?",
                "options": [
                    {
                        "label": "たべました (Tabemashita)",
                        "isCorrect": true
                    },
                    {
                        "label": "たべません (Tabemasen)",
                        "isCorrect": false
                    },
                    {
                        "label": "たべました deshita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual é o passado negativo de 'Ikimasu' (Ir)?",
                "options": [
                    {
                        "label": "いきませんでした (Ikimasen deshita)",
                        "isCorrect": true
                    },
                    {
                        "label": "いきまさんでした",
                        "isCorrect": false
                    },
                    {
                        "label": "いきなかった",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. O que significa 'Kinou kaffee o nomimashita'?",
                "options": [
                    {
                        "label": "Ontem bebi café",
                        "isCorrect": true
                    },
                    {
                        "label": "Hoje bebo café",
                        "isCorrect": false
                    },
                    {
                        "label": "Amanhã beberei café",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual palavra indica 'Ontem'?",
                "options": [
                    {
                        "label": "きのう (Kinou)",
                        "isCorrect": true
                    },
                    {
                        "label": "きょう (Kyou)",
                        "isCorrect": false
                    },
                    {
                        "label": "あした (Ashita)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Escolha a frase correta para 'Não assisti TV ontem':",
                "options": [
                    {
                        "label": "Kinou terebi o mimasen deshita",
                        "isCorrect": true
                    },
                    {
                        "label": "Kinou terebi o mimasen",
                        "isCorrect": false
                    },
                    {
                        "label": "Kinou terebi o mimashita",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "えき は どこ に あります か",
                "translation": "Onde fica a estação?",
                "chunks": [
                    "えき",
                    "は",
                    "どこ",
                    "に",
                    "あります",
                    "か"
                ]
            },
            {
                "sentenceJp": "ぎんこう の となり に あります",
                "translation": "Fica ao lado do banco.",
                "chunks": [
                    "ぎんこう",
                    "の",
                    "となり",
                    "に",
                    "あります"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Segunda-feira de manhã na empresa. Um colega pergunta do fim de semana.",
                "npcName": "Daiki",
                "npcMessage": "[Seu Nome]-san, kinou nani o shimashita ka? (O que você fez ontem?)",
                "options": [
                    {
                        "text": "Tokyo ni ikimashita! (Fui para Tokyo!)",
                        "feedback": "Perfeito! Usou o passado ikimashita!",
                        "isCorrect": true
                    },
                    {
                        "text": "Tokyo ni ikimasu.",
                        "feedback": "Disse 'vou para Tokyo' no presente.",
                        "isCorrect": false
                    },
                    {
                        "text": "Konbanwa!",
                        "feedback": "Saudação noturna de manhã.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Perguntando sobre o jantar da noite anterior.",
                "npcName": "Daiki",
                "npcMessage": "Kinou ramen o tabemashita ka? (Ontem você comeu ramen?)",
                "options": [
                    {
                        "text": "Iie, tabemasen deshita. (Não, não comi.)",
                        "feedback": "Excelente uso do passado negativo!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hai, tabemasen.",
                        "feedback": "Misturou 'sim' com 'não como'.",
                        "isCorrect": false
                    },
                    {
                        "text": "Oishii desu!",
                        "feedback": "Resposta no presente.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Comentando se estudou japonês ontem à noite.",
                "npcName": "Daiki",
                "npcMessage": "Kino nihongo o benkyou shimashita ka? (Estudou japonês ontem?)",
                "options": [
                    {
                        "text": "Hai, 2-jikan benkyou shimashita! (Sim, estudei por 2 horas!)",
                        "feedback": "Sensacional!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, benkyou shimasu.",
                        "feedback": "Presente em vez de passado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Arigatou!",
                        "feedback": "Agradeceu sem responder.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a terminação formal para o passado negativo dos verbos?",
                "options": [
                    "~masen deshita",
                    "~mashita",
                    "~kunai desu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'きのう' (Kinou)?",
                "options": [
                    "Ontem",
                    "Comi / Comeu (Passado)",
                    "Bebi / Bebeu (Passado)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'たべました' (Tabemashita)?",
                "options": [
                    "Ontem",
                    "Comi / Comeu (Passado)",
                    "Bebi / Bebeu (Passado)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'のみました' (Nomimashita)?",
                "options": [
                    "Comi / Comeu (Passado)",
                    "Ontem",
                    "Bebi / Bebeu (Passado)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'いきましてい / いきました' (Ikimashita)?",
                "options": [
                    "Fui / Foi (Passado)",
                    "Ontem",
                    "Comi / Comeu (Passado)"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_07",
        "title": "O Passado dos Adjetivos",
        "section": 2,
        "sectionTitle": "Passado, Experiências e Histórias",
        "level": "A2",
        "xpReward": 90,
        "stage1_context": {
            "audioGuide": "Kinou wa atsukatta desu!",
            "missionTitle": "Descrevendo o Estado Passado",
            "missionDescription": "Aprenda a falar que ontem o dia estava quente, que a viagem foi divertida ou que a prova não foi difícil."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "あつかった",
                "romaji": "Atsukatta",
                "translation": "Estava quente (Passado de Atsui)",
                "timeContext": "Clima ou temperatura passada."
            },
            {
                "type": "vocab",
                "kanji": "たのしかった",
                "romaji": "Tanoshikatta",
                "translation": "Foi divertido (Passado de Tanoshii)",
                "timeContext": "Experiência concluída."
            },
            {
                "type": "vocab",
                "kanji": "しずか でした",
                "romaji": "Shizuka deshita",
                "translation": "Estava calmo (Passado de Shizuka)",
                "timeContext": "Adjetivo -na no passado."
            },
            {
                "type": "vocab",
                "kanji": "ひま でした",
                "romaji": "Hima deshita",
                "translation": "Estava livre/desocupado",
                "timeContext": "Tempo livre passado."
            },
            {
                "type": "grammar_pill",
                "title": "Passado dos Adjetivos -i vs -na",
                "rule": "Para adjetivos -i: trocamos o 'i' por かった (katta). Para adjetivos -na: adicionamos でした (deshita).",
                "formula": "-i ➔ ~katta desu / -na ➔ ~deshita",
                "example": "Atsui ➔ Atsukatta desu | Shizuka ➔ Shizuka deshita."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como fica o adjetivo -i 'Tanoshii' (Divertido) no passado?",
                "options": [
                    {
                        "label": "たのしかった (Tanoshikatta)",
                        "isCorrect": true
                    },
                    {
                        "label": "たのしい でした",
                        "isCorrect": false
                    },
                    {
                        "label": "たのしくない",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como fica o adjetivo -na 'Shizuka' (Calmo) no passado?",
                "options": [
                    {
                        "label": "しずか でした (Shizuka deshita)",
                        "isCorrect": true
                    },
                    {
                        "label": "しずかった",
                        "isCorrect": false
                    },
                    {
                        "label": "しずか ました",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Kinou wa atsukatta desu'",
                "options": [
                    {
                        "label": "Ontem estava quente",
                        "isCorrect": true
                    },
                    {
                        "label": "Hoje está quente",
                        "isCorrect": false
                    },
                    {
                        "label": "Ontem estava frio",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual é o passado de 'Oishii' (Gostoso)?",
                "options": [
                    {
                        "label": "Oishikatta desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Oishii deshita",
                        "isCorrect": false
                    },
                    {
                        "label": "Oishii mashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Escolha a frase para 'A viagem foi divertida':",
                "options": [
                    {
                        "label": "Ryokou wa tanoshikatta desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Ryokou wa tanoshii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Ryokou wa tanoshii deshita",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "でんしゃ で とうきょう へ いきます",
                "translation": "Vou para Tóquio de trem.",
                "chunks": [
                    "でんしゃ",
                    "で",
                    "とうきょう",
                    "へ",
                    "いきます"
                ]
            },
            {
                "sentenceJp": "バス を のりかえます",
                "translation": "Vou fazer baldeação de ônibus.",
                "chunks": [
                    "バス",
                    "を",
                    "のりかえます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você voltou de uma viagem a Kyoto e conversa com um amigo.",
                "npcName": "Naoki",
                "npcMessage": "Kyoto no ryokou wa dou deshita ka? (Como foi a viagem a Kyoto?)",
                "options": [
                    {
                        "text": "Totemo tanoshikatta desu! (Foi muito divertida!)",
                        "feedback": "Excelente uso de tanoshikatta!",
                        "isCorrect": true
                    },
                    {
                        "text": "Tanoshii deshita.",
                        "feedback": "Erro: adjetivos -i não usam deshita!",
                        "isCorrect": false
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Disse 'não, comi'.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Perguntando sobre o clima de ontem.",
                "npcName": "Naoki",
                "npcMessage": "Kinou wa samukatta desu ka? (Ontem estava frio?)",
                "options": [
                    {
                        "text": "Iie, samukunakatta desu. (Não, não estava frio.)",
                        "feedback": "Perfeito! Passado negativo de adjetivo -i!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hai, samui desu.",
                        "feedback": "Respondeu no presente.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas à toa.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Comentando sobre o exame de japonês.",
                "npcName": "Naoki",
                "npcMessage": "Testo wa muzukashikatta desu ka? (A prova foi difícil?)",
                "options": [
                    {
                        "text": "Iie, muzukashikunakatta desu! (Não, não foi difícil!)",
                        "feedback": "Sensacional!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hai, muzukashii deshita.",
                        "feedback": "Erro de gramática.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ohayou!",
                        "feedback": "Saudação inadequada.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a regra para passar adjetivos -i para o passado?",
                "options": [
                    "Trocar o 'i' por 'katta desu'",
                    "Adicionar 'deshita' no final",
                    "Trocar o 'i' por 'mashita'"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'あつかった' (Atsukatta)?",
                "options": [
                    "Estava quente (Passado de Atsui)",
                    "Foi divertido (Passado de Tanoshii)",
                    "Estava calmo (Passado de Shizuka)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'たのしかった' (Tanoshikatta)?",
                "options": [
                    "Estava quente (Passado de Atsui)",
                    "Foi divertido (Passado de Tanoshii)",
                    "Estava calmo (Passado de Shizuka)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'しずか でした' (Shizuka deshita)?",
                "options": [
                    "Foi divertido (Passado de Tanoshii)",
                    "Estava quente (Passado de Atsui)",
                    "Estava calmo (Passado de Shizuka)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'ひま でした' (Hima deshita)?",
                "options": [
                    "Estava livre/desocupado",
                    "Estava quente (Passado de Atsui)",
                    "Foi divertido (Passado de Tanoshii)"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_08",
        "title": "Onde Você Esteve?",
        "section": 2,
        "sectionTitle": "Passado, Experiências e Histórias",
        "level": "A2",
        "xpReward": 90,
        "stage1_context": {
            "audioGuide": "Doko ni ikimashita ka?",
            "missionTitle": "Relatando Eventos e Viagens",
            "missionDescription": "Saiba como contar para onde você viajou, com quem foi e como foi a experiência nas suas férias passadas."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "どこ に も",
                "romaji": "Doko ni mo",
                "translation": "A lugar nenhum (com negação)",
                "timeContext": "Indica ausência de deslocamento."
            },
            {
                "type": "vocab",
                "kanji": "だれ と",
                "romaji": "Dare to",
                "translation": "Com quem?",
                "timeContext": "Pergunta sobre companhia."
            },
            {
                "type": "vocab",
                "kanji": "とうきょう えき",
                "romaji": "Tokyo Eki",
                "translation": "Estação de Tokyo",
                "timeContext": "Ponto de transporte famoso."
            },
            {
                "type": "vocab",
                "kanji": "ひとり で",
                "romaji": "Hitori de",
                "translation": "Sozinho(a)",
                "timeContext": "Sem companhia de terceiros."
            },
            {
                "type": "grammar_pill",
                "title": "Companhia com Partícula と (To)",
                "rule": "Usamos a partícula と (to) após um nome ou pessoa para indicar a companhia com quem realizamos uma ação.",
                "formula": "[ Pessoa ] + と + [ Verbo ]",
                "example": "Tomodachi to ikimashita ➔ Fui com um amigo."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se diz 'Com um amigo' em japonês?",
                "options": [
                    {
                        "label": "ともだち と (Tomodachi to)",
                        "isCorrect": true
                    },
                    {
                        "label": "ともだち に (Tomodachi ni)",
                        "isCorrect": false
                    },
                    {
                        "label": "ともだち で (Tomodachi de)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual é a expressão para 'Sozinho(a)'?",
                "options": [
                    {
                        "label": "ひとり で (Hitori de)",
                        "isCorrect": true
                    },
                    {
                        "label": "ふたり で (Futari de)",
                        "isCorrect": false
                    },
                    {
                        "label": "みんな で (Minna de)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Doko ni mo ikimasen deshita'",
                "options": [
                    {
                        "label": "Não fui a lugar nenhum",
                        "isCorrect": true
                    },
                    {
                        "label": "Fui a todos os lugares",
                        "isCorrect": false
                    },
                    {
                        "label": "Quero ir a Tokyo",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual partícula indica companhia ('com')?",
                "options": [
                    {
                        "label": "と (to)",
                        "isCorrect": true
                    },
                    {
                        "label": "へ (he)",
                        "isCorrect": false
                    },
                    {
                        "label": "を (o)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Escolha a resposta para 'Com quem você foi?':",
                "options": [
                    {
                        "label": "Tomodachi to ikimashita",
                        "isCorrect": true
                    },
                    {
                        "label": "Kyoto ni ikimashita",
                        "isCorrect": false
                    },
                    {
                        "label": "Densha de ikimashita",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "うち から えき まで 15ふん かかります",
                "translation": "Leva 15 minutos da minha casa até a estação.",
                "chunks": [
                    "うち",
                    "から",
                    "えき",
                    "まで",
                    "15ふん",
                    "かかります"
                ]
            },
            {
                "sentenceJp": "あるいて 5ふん で つきます",
                "translation": "Chega em 5 minutos a pé.",
                "chunks": [
                    "あるいて",
                    "5ふん",
                    "で",
                    "つきます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Conversando com um colega no trabalho após o feriado.",
                "npcName": "Ren",
                "npcMessage": "[Seu Nome]-san, yasumi ni doko ni ikimashita ka? (Para onde você foi no feriado?)",
                "options": [
                    {
                        "text": "Kyoto ni ikimashita! (Fui para Kyoto!)",
                        "feedback": "Perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nemasu.",
                        "feedback": "Disse que dorme.",
                        "isCorrect": false
                    },
                    {
                        "text": "Arigatou!",
                        "feedback": "Agradeceu sem responder.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O colega pergunta com quem você viajou.",
                "npcName": "Ren",
                "npcMessage": "Dare to ikimashita ka? (Com quem você foi?)",
                "options": [
                    {
                        "text": "Kazoku to ikimashita. (Fui com minha família.)",
                        "feedback": "Excelente uso da partícula to!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hitori ni ikimashita.",
                        "feedback": "Uso incorreto da partícula com hitori.",
                        "isCorrect": false
                    },
                    {
                        "text": "Konnichiwa!",
                        "feedback": "Saudação fora de hora.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Perguntando se você viajou sozinho.",
                "npcName": "Ren",
                "npcMessage": "Hitori de ikimashita ka? (Você foi sozinho?)",
                "options": [
                    {
                        "text": "Iie, tomodachi to ikimashita. (Não, fui com um amigo.)",
                        "feedback": "Muito bem!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hai, tabemashita.",
                        "feedback": "Disse que comeu.",
                        "isCorrect": false
                    },
                    {
                        "text": "Doko desu ka?",
                        "feedback": "Perguntou onde fica.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que significa 'Hitori de'?",
                "options": [
                    "Sozinho(a)",
                    "Com duas pessoas",
                    "Em grupo"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'どこ に も' (Doko ni mo)?",
                "options": [
                    "A lugar nenhum (com negação)",
                    "Com quem?",
                    "Estação de Tokyo"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'だれ と' (Dare to)?",
                "options": [
                    "A lugar nenhum (com negação)",
                    "Com quem?",
                    "Estação de Tokyo"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'とうきょう えき' (Tokyo Eki)?",
                "options": [
                    "Com quem?",
                    "A lugar nenhum (com negação)",
                    "Estação de Tokyo"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'ひとり で' (Hitori de)?",
                "options": [
                    "Sozinho(a)",
                    "A lugar nenhum (com negação)",
                    "Com quem?"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_09",
        "title": "Expressando Gostos e Habilidades",
        "section": 2,
        "sectionTitle": "Passado, Experiências e Histórias",
        "level": "A2",
        "xpReward": 90,
        "stage1_context": {
            "audioGuide": "Nihongo ga suki desu!",
            "missionTitle": "Gostos, Desgostos e Talentos",
            "missionDescription": "Aprenda a dizer do que você gosta (Suki), do que não gosta (Kirai), no que é bom (Jouzu) e no que é ruim (Heta)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "すき",
                "romaji": "Suki",
                "translation": "Gostar de",
                "timeContext": "Usado para preferências positivas."
            },
            {
                "type": "vocab",
                "kanji": "きらい",
                "romaji": "Kirai",
                "translation": "Detestar / Não gostar",
                "timeContext": "Usado para aversões (cuidado ao usar!)."
            },
            {
                "type": "vocab",
                "kanji": "じょうず",
                "romaji": "Jouzu",
                "translation": "Habilidoso / Bom em algo",
                "timeContext": "Elogio para habilidades de terceiros."
            },
            {
                "type": "vocab",
                "kanji": "へた",
                "romaji": "Heta",
                "translation": "Inábil / Ruim em algo",
                "timeContext": "Usado de forma humilde para si mesmo."
            },
            {
                "type": "grammar_pill",
                "title": "Objeto do Gosto com Partícula が (Ga)",
                "rule": "Em japonês, a coisa de que gostamos ou em que somos bons é marcada pela partícula が (ga), e não pela partícula を (o).",
                "formula": "[ Objeto ] + が + すき / じょうず です",
                "example": "Nihongo ga suki desu ➔ Gosto de japonês."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Qual partícula marca o objeto com 'Suki' (Gostar)?",
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
                        "label": "に (ni)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como se diz 'Gosto de Ramen'?",
                "options": [
                    {
                        "label": "Ramen ga suki desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Ramen o suki desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Ramen ni suki desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual palavra significa 'Habilidoso / Bom em algo'?",
                "options": [
                    {
                        "label": "じょうず (Jouzu)",
                        "isCorrect": true
                    },
                    {
                        "label": "へた (Heta)",
                        "isCorrect": false
                    },
                    {
                        "label": "きらい (Kirai)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Como dizer com humildade 'Sou ruim em futebol'?",
                "options": [
                    {
                        "label": "Sakkaraa ga heta desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Sakkaraa ga jouzu desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Sakkaraa ga kirai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Traduza: 'Nihongo ga suki desu'",
                "options": [
                    {
                        "label": "Gosto do idioma japonês",
                        "isCorrect": true
                    },
                    {
                        "label": "Falo japonês muito bem",
                        "isCorrect": false
                    },
                    {
                        "label": "Estudo japonês ontem",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "いっしょ に おちゃ を のみませんか",
                "translation": "Gostaria de tomar um chá juntos?",
                "chunks": [
                    "いっしょ",
                    "に",
                    "おちゃ",
                    "を",
                    "のみませんか"
                ]
            },
            {
                "sentenceJp": "ぜひ いきましょう",
                "translation": "Com certeza, vamos!",
                "chunks": [
                    "ぜひ",
                    "いきましょう"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Um amigo japonês te pergunta sobre comida.",
                "npcName": "Kaito",
                "npcMessage": "[Seu Nome]-san, Nihon no tabemono ga suki desu ka? (Você gosta de comida japonesa?)",
                "options": [
                    {
                        "text": "Daisuki desu! Sushi ga suki desu! (Adoro! Gosto de sushi!)",
                        "feedback": "Resposta super animada e correta!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, jouzu desu.",
                        "feedback": "Disse 'não, sou habilidoso'.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despediu-se do nada.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O amigo elogia o seu japonês.",
                "npcName": "Kaito",
                "npcMessage": "[Seu Nome]-san wa nihongo ga jouzu desu ne! (Você é muito bom em japonês!)",
                "options": [
                    {
                        "text": "Iie, mada mada heta desu. (Não, ainda sou ruim/estou aprendendo.)",
                        "feedback": "Modéstia perfeita em japonês!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hai, daisuki desu!",
                        "feedback": "Aceitou com vaidade exagerada.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas pelo elogio.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Conversando sobre esportes.",
                "npcName": "Kaito",
                "npcMessage": "Sports ga suki desu ka? (Gosta de esportes?)",
                "options": [
                    {
                        "text": "Hai, sakkaraa ga suki desu! (Sim, gosto de futebol!)",
                        "feedback": "Excelente!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse que dorme.",
                        "isCorrect": false
                    },
                    {
                        "text": "Kore wa hon desu.",
                        "feedback": "Fora de assunto.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Por que não devemos dizer 'Watashi wa jouzu desu' de si mesmo?",
                "options": [
                    "Soa arrogante; devemos ser modestos em relação às nossas habilidades",
                    "É gramaticalmente proibido",
                    "Significa que não gostamos da atividade"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'すき' (Suki)?",
                "options": [
                    "Gostar de",
                    "Detestar / Não gostar",
                    "Habilidoso / Bom em algo"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'きらい' (Kirai)?",
                "options": [
                    "Gostar de",
                    "Detestar / Não gostar",
                    "Habilidoso / Bom em algo"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'じょうず' (Jouzu)?",
                "options": [
                    "Detestar / Não gostar",
                    "Gostar de",
                    "Habilidoso / Bom em algo"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'へた' (Heta)?",
                "options": [
                    "Inábil / Ruim em algo",
                    "Gostar de",
                    "Detestar / Não gostar"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_10",
        "title": "Comparando Coisas",
        "section": 2,
        "sectionTitle": "Passado, Experiências e Histórias",
        "level": "A2",
        "xpReward": 95,
        "stage1_context": {
            "audioGuide": "A wa B yori takai desu!",
            "missionTitle": "Fazendo Comparações em Japonês",
            "missionDescription": "Aprenda a comparar dois elementos: 'A é mais caro que B' e a perguntar 'Qual dos dois é melhor?'."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "より",
                "romaji": "Yori",
                "translation": "Do que / Em comparação a",
                "timeContext": "Ponto de referência da comparação."
            },
            {
                "type": "vocab",
                "kanji": "ほう が",
                "romaji": "Hou ga",
                "translation": "O lado de / A opção...",
                "timeContext": "Indica a opção que ganha a comparação."
            },
            {
                "type": "vocab",
                "kanji": "どちら / どっち",
                "romaji": "Dochira / Docchi",
                "translation": "Qual dos dois?",
                "timeContext": "Perguntando a preferência entre duas opções."
            },
            {
                "type": "vocab",
                "kanji": "ずっと",
                "romaji": "Zutto",
                "translation": "Muito mais",
                "timeContext": "Intensificador de comparação."
            },
            {
                "type": "grammar_pill",
                "title": "Estrutura de Comparação (A wa B yori)",
                "rule": "Para dizer que A é mais [Adjetivo] do que B, colocamos A no início e usamos yori após B.",
                "formula": "A は B より [ Adjetivo ] です",
                "example": "Shinkansen wa basu yori hayai desu ➔ O trem-bala é mais rápido que o ônibus."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como dizer 'A é mais caro que B'?",
                "options": [
                    {
                        "label": "A wa B yori takai desu",
                        "isCorrect": true
                    },
                    {
                        "label": "A yori B wa takai desu",
                        "isCorrect": false
                    },
                    {
                        "label": "A wa B hou ga takai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual palavra significa 'Qual dos dois?'",
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
                        "label": "どこ (Doko)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Ramen wa sushi yori yasui desu'",
                "options": [
                    {
                        "label": "Ramen é mais barato que sushi",
                        "isCorrect": true
                    },
                    {
                        "label": "Sushi é mais barato que ramen",
                        "isCorrect": false
                    },
                    {
                        "label": "Ramen e sushi têm o mesmo preço",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. O que a expressão 'Hou ga' indica na resposta?",
                "options": [
                    {
                        "label": "A opção preferida / que ganha a comparação",
                        "isCorrect": true
                    },
                    {
                        "label": "A opção descartada",
                        "isCorrect": false
                    },
                    {
                        "label": "Uma pergunta incerta",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como responder 'Prefiro café' entre chá e café?",
                "options": [
                    {
                        "label": "Kohii no hou ga suki desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Kohii yori suki desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Ocha no hou ga suki desu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
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
            },
            {
                "sentenceJp": "ドア を あけて ください",
                "translation": "Por favor, abra a porta.",
                "chunks": [
                    "ドア",
                    "を",
                    "あけて",
                    "ください"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Escolhendo um meio de transporte com o guia de viagem.",
                "npcName": "Guia Sakamoto",
                "npcMessage": "Shinkansen to basu, dochira ga ii desu ka? (Trem-bala ou ônibus, qual é melhor?)",
                "options": [
                    {
                        "text": "Shinkansen no hou ga hayai desu! (O trem-bala é mais rápido!)",
                        "feedback": "Excelente escolha e uso de hou ga!",
                        "isCorrect": true
                    },
                    {
                        "text": "Basu wa oishii desu.",
                        "feedback": "Disse que o ônibus é gostoso.",
                        "isCorrect": false
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Comparando o clima de duas cidades.",
                "npcName": "Guia Sakamoto",
                "npcMessage": "Tokyo to Hokkaido, dochira ga samui desu ka? (Tokyo ou Hokkaido, qual é mais frio?)",
                "options": [
                    {
                        "text": "Hokkaido no hou ga samui desu. (Hokkaido é mais frio.)",
                        "feedback": "Perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Tokyo wa oishii desu.",
                        "feedback": "Elogiou o sabor de Tokyo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Arigatou gozaimasu!",
                        "feedback": "Agradeceu em vez de responder.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Um amigo pergunta qual estação você prefere: Verão ou Inverno.",
                "npcName": "Guia Sakamoto",
                "npcMessage": "Natsu to fuyu, dochira ga suki desu ka? (Verão ou inverno, de qual gosta mais?)",
                "options": [
                    {
                        "text": "Fuyu no hou ga suki desu! (Gosto mais do inverno!)",
                        "feedback": "Muito bem!",
                        "isCorrect": true
                    },
                    {
                        "text": "Natsu yori nemasu.",
                        "feedback": "Frase sem sentido gramatical.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida repentina.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a fórmula para comparar dois elementos?",
                "options": [
                    "A wa B yori [Adjetivo] desu",
                    "A yori B wa [Adjetivo] desu",
                    "A no B wa [Adjetivo] desu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'より' (Yori)?",
                "options": [
                    "Do que / Em comparação a",
                    "O lado de / A opção...",
                    "Qual dos dois?"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ほう が' (Hou ga)?",
                "options": [
                    "Do que / Em comparação a",
                    "O lado de / A opção...",
                    "Qual dos dois?"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'どちら / どっち' (Dochira / Docchi)?",
                "options": [
                    "O lado de / A opção...",
                    "Do que / Em comparação a",
                    "Qual dos dois?"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'ずっと' (Zutto)?",
                "options": [
                    "Muito mais",
                    "Do que / Em comparação a",
                    "O lado de / A opção..."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_11",
        "title": "A Mágica da Forma TE (Regras de Conjunção)",
        "section": 3,
        "sectionTitle": "Conexão, Pedidos e Regras",
        "level": "A2",
        "xpReward": 100,
        "stage1_context": {
            "audioGuide": "Te-kei no benkyou o shimashou!",
            "missionTitle": "Dominando a Forma TE",
            "missionDescription": "A Forma TE é o divisor de águas no japonês! Ela permite conectar frases, pedir favores, falar de ações em andamento e regras."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "たべて",
                "romaji": "Tabete",
                "translation": "Comendo / Coma (Forma TE de Tabemasu)",
                "timeContext": "Verbo Grupo 2 (Ru-verbs)."
            },
            {
                "type": "vocab",
                "kanji": "みて",
                "romaji": "Mite",
                "translation": "Olhando / Olhe (Forma TE de Mimasu)",
                "timeContext": "Verbo Grupo 2."
            },
            {
                "type": "vocab",
                "kanji": "いって",
                "romaji": "Itte",
                "translation": "Indo / Vá (Forma TE de Ikimasu)",
                "timeContext": "Exceção do Grupo 1."
            },
            {
                "type": "vocab",
                "kanji": "きて",
                "romaji": "Kite",
                "translation": "Vindo / Venha (Forma TE de Kimasu)",
                "timeContext": "Verbo Irregular Grupo 3."
            },
            {
                "type": "grammar_pill",
                "title": "Regra Básica do Grupo 2 (Verbos em -emasu / -imasu)",
                "rule": "Para os verbos do Grupo 2 (como Tabemasu e Mimasu), basta remover o ~masu e adicionar ~te!",
                "formula": "Verbo(sem masu) + て (te)",
                "example": "Tabemasu ➔ Tabete | Mimasu ➔ Mite."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Qual é a Forma TE do verbo 'Tabemasu' (Comer)?",
                "options": [
                    {
                        "label": "たべて (Tabete)",
                        "isCorrect": true
                    },
                    {
                        "label": "たべてmasu",
                        "isCorrect": false
                    },
                    {
                        "label": "たべた",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual é a Forma TE do verbo 'Mimasu' (Assistir/Olhar)?",
                "options": [
                    {
                        "label": "みて (Mite)",
                        "isCorrect": true
                    },
                    {
                        "label": "みてmasu",
                        "isCorrect": false
                    },
                    {
                        "label": "みた",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Verbos do Grupo 3 (Irregulares): Qual a Forma TE de 'Kimasu' (Vir)?",
                "options": [
                    {
                        "label": "きて (Kite)",
                        "isCorrect": true
                    },
                    {
                        "label": "きてmasu",
                        "isCorrect": false
                    },
                    {
                        "label": "きた",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual a Forma TE da exceção 'Ikimasu' (Ir)?",
                "options": [
                    {
                        "label": "いって (Itte)",
                        "isCorrect": true
                    },
                    {
                        "label": "いきて",
                        "isCorrect": false
                    },
                    {
                        "label": "いいた",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Para que serve a Forma TE no japonês?",
                "options": [
                    {
                        "label": "Conectar frases, fazer pedidos e expressar ações contínuas",
                        "isCorrect": true
                    },
                    {
                        "label": "Apenas para o passado",
                        "isCorrect": false
                    },
                    {
                        "label": "Apenas para o futuro distante",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "いま にほんご を べんきょう しています",
                "translation": "Estou estudando japonês agora.",
                "chunks": [
                    "いま",
                    "にほんご",
                    "を",
                    "べんきょう",
                    "しています"
                ]
            },
            {
                "sentenceJp": "ともだち と でんわ を しています",
                "translation": "Estou falando ao telefone com meu amigo.",
                "chunks": [
                    "ともだち",
                    "と",
                    "でんわ",
                    "を",
                    "しています"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: O professor explica um exercício em sala de aula.",
                "npcName": "Sensei Takahashi",
                "npcMessage": "Minna-san, hon o mite kudasai. (Todos, por favor olhem o livro.)",
                "options": [
                    {
                        "text": "Hai, mimasu! (Sim, vou olhar!)",
                        "feedback": "Entendeu a instrução perfeitamente!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemasu.",
                        "feedback": "Disse que vai comer.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ohayou!",
                        "feedback": "Saudação inadequada.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Pedindo para o amigo esperar um instante.",
                "npcName": "Amigo",
                "npcMessage": "Chotto matte kudasai! (Por favor, espere um pouco!)",
                "options": [
                    {
                        "text": "Hai, machimasu! (Sim, esperarei!)",
                        "feedback": "Excelente!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas sem motivo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Um amigo te chama para entrar na casa dele.",
                "npcName": "Amigo",
                "npcMessage": "Douzo, hairatte / haitte kudasai! (Por favor, entre!)",
                "options": [
                    {
                        "text": "Arigatou gozaimasu! Ojama shimasu! (Muito obrigado! Com licença!)",
                        "feedback": "Etiqueta perfeita ao entrar na casa de alguém!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemasen.",
                        "feedback": "Disse que não come.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despediu-se na porta de entrada.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a Forma TE do verbo 'Mimasu'?",
                "options": [
                    "Mite",
                    "Mitate",
                    "Mimashite"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'たべて' (Tabete)?",
                "options": [
                    "Comendo / Coma (Forma TE de Tabemasu)",
                    "Olhando / Olhe (Forma TE de Mimasu)",
                    "Indo / Vá (Forma TE de Ikimasu)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'みて' (Mite)?",
                "options": [
                    "Comendo / Coma (Forma TE de Tabemasu)",
                    "Olhando / Olhe (Forma TE de Mimasu)",
                    "Indo / Vá (Forma TE de Ikimasu)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'いって' (Itte)?",
                "options": [
                    "Olhando / Olhe (Forma TE de Mimasu)",
                    "Comendo / Coma (Forma TE de Tabemasu)",
                    "Indo / Vá (Forma TE de Ikimasu)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'きて' (Kite)?",
                "options": [
                    "Vindo / Venha (Forma TE de Kimasu)",
                    "Comendo / Coma (Forma TE de Tabemasu)",
                    "Olhando / Olhe (Forma TE de Mimasu)"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_12",
        "title": "Pedindo Favores com Educação",
        "section": 3,
        "sectionTitle": "Conexão, Pedidos e Regras",
        "level": "A2",
        "xpReward": 100,
        "stage1_context": {
            "audioGuide": "Koko ni kaite kudasai!",
            "missionTitle": "Fazendo Pedidos com ~te kudasai",
            "missionDescription": "Aprenda a pedir favores com cortesia no dia a dia: pedir para escrever algo, falar mais devagar ou abrir a janela."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "かいて ください",
                "romaji": "Kaite kudasai",
                "translation": "Por favor, escreva",
                "timeContext": "Pedido de escrita/preenchimento."
            },
            {
                "type": "vocab",
                "kanji": "ゆっくり はなして ください",
                "romaji": "Yukkuri hanashite kudasai",
                "translation": "Por favor, fale devagar",
                "timeContext": "Essencial para estudantes de japonês!"
            },
            {
                "type": "vocab",
                "kanji": "みせて ください",
                "romaji": "Misete kudasai",
                "translation": "Por favor, mostre-me",
                "timeContext": "Usado em lojas ou balcões."
            },
            {
                "type": "vocab",
                "kanji": "まって ください",
                "romaji": "Matte kudasai",
                "translation": "Por favor, espere",
                "timeContext": "Solicitação de pausa."
            },
            {
                "type": "grammar_pill",
                "title": "Estrutura do Pedido Educado (~te kudasai)",
                "rule": "Colocamos ください (kudasai) logo após a Forma TE do verbo para fazer um pedido cortês.",
                "formula": "[ Verbo na Forma TE ] + ください",
                "example": "Yukkuri hanashite kudasai ➔ Por favor, fale mais devagar."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como pedir 'Por favor, fale mais devagar' em japonês?",
                "options": [
                    {
                        "label": "Yukkuri hanashite kudasai",
                        "isCorrect": true
                    },
                    {
                        "label": "Yukkuri hanashimasu kudasai",
                        "isCorrect": false
                    },
                    {
                        "label": "Yukkuri hanashite desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. O que significa 'Misete kudasai' numa loja?",
                "options": [
                    {
                        "label": "Por favor, mostre-me",
                        "isCorrect": true
                    },
                    {
                        "label": "Por favor, venda-me",
                        "isCorrect": false
                    },
                    {
                        "label": "Por favor, embrulhe",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Como pedir para alguém preencher um formulário ('Escreva aqui')?",
                "options": [
                    {
                        "label": "Koko ni kaite kudasai",
                        "isCorrect": true
                    },
                    {
                        "label": "Koko ni kaimasu kudasai",
                        "isCorrect": false
                    },
                    {
                        "label": "Koko ni kakimasu desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual palavra significa 'Devagar'?",
                "options": [
                    {
                        "label": "ゆっくり (Yukkuri)",
                        "isCorrect": true
                    },
                    {
                        "label": "はやく (Hayaku)",
                        "isCorrect": false
                    },
                    {
                        "label": "もっと (Motto)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Traduza: 'Chotto matte kudasai'",
                "options": [
                    {
                        "label": "Por favor, espere um pouco",
                        "isCorrect": true
                    },
                    {
                        "label": "Por favor, coma um pouco",
                        "isCorrect": false
                    },
                    {
                        "label": "Por favor, olhe para cá",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "ここで しゃしん を とっても いい です か",
                "translation": "Posso tirar foto aqui?",
                "chunks": [
                    "ここで",
                    "しゃしん",
                    "を",
                    "とっても",
                    "いい",
                    "です",
                    "か"
                ]
            },
            {
                "sentenceJp": "ここ に はいってはいけません",
                "translation": "Não se pode entrar aqui.",
                "chunks": [
                    "ここ",
                    "に",
                    "はいってはいけません"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você não entendeu o que o atendente da estação disse rapidamente.",
                "npcName": "Atendente da Estação",
                "npcMessage": "Kyuukou densha wa 3-ban sen kara shuppatsu shimasu! (O trem expresso parte da plataforma 3!)",
                "options": [
                    {
                        "text": "Sumimasen, yukkuri hanashite kudasai. (Com licença, por favor fale devagar.)",
                        "feedback": "Frase salva-vidas perfeita!",
                        "isCorrect": true
                    },
                    {
                        "text": "Arigatou, tabemasu!",
                        "feedback": "Disse que vai comer.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Foi embora sem entender.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Na recepção do hotel preenchendo a ficha de check-in.",
                "npcName": "Recepcionista",
                "npcMessage": "Koko ni onamae to jusho o kaite kudasai. (Por favor, escreva seu nome e endereço aqui.)",
                "options": [
                    {
                        "text": "Hai, wakarimashita! (Sim, entendi!)",
                        "feedback": "Excelente!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Recusou e disse que vai dormir.",
                        "isCorrect": false
                    },
                    {
                        "text": "Doko desu ka?",
                        "feedback": "Perguntou onde fica.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Numa loja olhando uma vitrine de relógios.",
                "npcName": "Vendedor",
                "npcMessage": "Irasshaimase! Nani o o-sagashi desu ka? (Bem-vindo! O que procura?)",
                "options": [
                    {
                        "text": "Ano tokei o misete kudasai. (Por favor, mostre-me aquele relógio.)",
                        "feedback": "Pedido muito natural e educado!",
                        "isCorrect": true
                    },
                    {
                        "text": "Kore wa oishii desu.",
                        "feedback": "Disse que o relógio é gostoso.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas sem motivo.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a estrutura para pedir um favor com educação?",
                "options": [
                    "Forma TE + kudasai",
                    "Forma Masu + kudasai",
                    "Forma Nai + kudasai"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'かいて ください' (Kaite kudasai)?",
                "options": [
                    "Por favor, escreva",
                    "Por favor, fale devagar",
                    "Por favor, mostre-me"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ゆっくり はなして ください' (Yukkuri hanashite kudasai)?",
                "options": [
                    "Por favor, escreva",
                    "Por favor, fale devagar",
                    "Por favor, mostre-me"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'みせて ください' (Misete kudasai)?",
                "options": [
                    "Por favor, fale devagar",
                    "Por favor, escreva",
                    "Por favor, mostre-me"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'まって ください' (Matte kudasai)?",
                "options": [
                    "Por favor, espere",
                    "Por favor, escreva",
                    "Por favor, fale devagar"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_13",
        "title": "O que você está fazendo agora?",
        "section": 3,
        "sectionTitle": "Conexão, Pedidos e Regras",
        "level": "A2",
        "xpReward": 100,
        "stage1_context": {
            "audioGuide": "Ima nihongo o benkyou shite imasu!",
            "missionTitle": "Expressando Ações Contínuas (~te imasu)",
            "missionDescription": "Aprenda a falar sobre o que está acontecendo exatamente no momento da fala: 'Estou estudando', 'Estou comendo' ou 'Estou trabalhando'."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "たべて います",
                "romaji": "Tabete imasu",
                "translation": "Estou comendo",
                "timeContext": "Ação contínua no presente."
            },
            {
                "type": "vocab",
                "kanji": "べんきょう して います",
                "romaji": "Benkyou shite imasu",
                "translation": "Estou estudando",
                "timeContext": "Ação em andamento."
            },
            {
                "type": "vocab",
                "kanji": "はたらいて います",
                "romaji": "Hataraite imasu",
                "translation": "Estou trabalhando",
                "timeContext": "Ocupação atual."
            },
            {
                "type": "vocab",
                "kanji": "すんで います",
                "romaji": "Sunde imasu",
                "translation": "Moro / Resido em...",
                "timeContext": "Estado contínuo de moradia."
            },
            {
                "type": "grammar_pill",
                "title": "Ação Contínua com ~te imasu",
                "rule": "A combinação da Forma TE + います (imasu) equivale ao gerúndio em português (-ndo: fazendo, comendo, estudando).",
                "formula": "[ Verbo Forma TE ] + います",
                "example": "Ima nihongo o benkyou shite imasu ➔ Estou estudando japonês agora."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se diz 'Estou estudando' em japonês?",
                "options": [
                    {
                        "label": "べんきょう して います (Benkyou shite imasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "べんきょう します",
                        "isCorrect": false
                    },
                    {
                        "label": "べんきょう しました",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como expressar 'Moro em Tokyo'?",
                "options": [
                    {
                        "label": "Tokyo ni sunde imasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Tokyo ni sumimasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Tokyo ni sumimashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Ima nani o shite imasu ka?'",
                "options": [
                    {
                        "label": "O que você está fazendo agora?",
                        "isCorrect": true
                    },
                    {
                        "label": "O que você fez ontem?",
                        "isCorrect": false
                    },
                    {
                        "label": "Para onde você vai?",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual forma verbal é usada antes de 'imasu' para criar o gerúndio?",
                "options": [
                    {
                        "label": "Forma TE",
                        "isCorrect": true
                    },
                    {
                        "label": "Forma Masu",
                        "isCorrect": false
                    },
                    {
                        "label": "Forma Nai",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Escolha a resposta para 'Estou comendo ramen':",
                "options": [
                    {
                        "label": "Ramen o tabete imasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Ramen o tabemasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Ramen o tabemashita",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "あさごはん を たべて がっこう へ いきます",
                "translation": "Tomo café da manhã e vou para a escola.",
                "chunks": [
                    "あさごはん",
                    "を",
                    "たべて",
                    "がっこう",
                    "へ",
                    "いきます"
                ]
            },
            {
                "sentenceJp": "かさ を もって でかけます",
                "translation": "Levo o guarda-chuva e saio.",
                "chunks": [
                    "かさ",
                    "を",
                    "もって",
                    "でかけます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Uma ligação telefônica de um amigo perguntando o que você está fazendo.",
                "npcName": "Haruto",
                "npcMessage": "Moshimoshi! [Seu Nome]-san, ima nani o shite imasu ka? (Alô! O que você está fazendo agora?)",
                "options": [
                    {
                        "text": "Nihongo o benkyou shite imasu! (Estou estudando japonês!)",
                        "feedback": "Excelente resposta no gerúndio!",
                        "isCorrect": true
                    },
                    {
                        "text": "Kinou benkyou shimashita.",
                        "feedback": "Respondeu no passado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Konbanwa!",
                        "feedback": "Iniciou saudação de chegada no telefone.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Haruto pergunta onde você está morando atualmente.",
                "npcName": "Haruto",
                "npcMessage": "Ima doko ni sunde imasu ka? (Onde você está morando agora?)",
                "options": [
                    {
                        "text": "Tokyo ni sunde imasu. (Estou morando em Tokyo.)",
                        "feedback": "Perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Tokyo ni ikimasu.",
                        "feedback": "Disse que vai para Tokyo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Oishii desu!",
                        "feedback": "Disse que é gostoso.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Encontrando um amigo num café.",
                "npcName": "Haruto",
                "npcMessage": "Nani o nomimashita ka? / Nani o nomimasu ka? (O que está bebendo?)",
                "options": [
                    {
                        "text": "Ocha o nomimashita / Kohii o nonde imasu! (Estou bebendo café!)",
                        "feedback": "Sensacional!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas à toa.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a função da estrutura ~te imasu?",
                "options": [
                    "Expressar ações contínuas no gerúndio (-ndo) ou estados permanentes",
                    "Expressar um desejo futuro",
                    "Expressar uma proibição"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'たべて います' (Tabete imasu)?",
                "options": [
                    "Estou comendo",
                    "Estou estudando",
                    "Estou trabalhando"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'べんきょう して います' (Benkyou shite imasu)?",
                "options": [
                    "Estou comendo",
                    "Estou estudando",
                    "Estou trabalhando"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'はたらいて います' (Hataraite imasu)?",
                "options": [
                    "Estou estudando",
                    "Estou comendo",
                    "Estou trabalhando"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'すんで います' (Sunde imasu)?",
                "options": [
                    "Moro / Resido em...",
                    "Estou comendo",
                    "Estou estudando"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_14",
        "title": "Pedindo Permissão",
        "section": 3,
        "sectionTitle": "Conexão, Pedidos e Regras",
        "level": "A2",
        "xpReward": 100,
        "stage1_context": {
            "audioGuide": "Shashin o toridemo ii desu ka?",
            "missionTitle": "Perguntando 'Posso...?'",
            "missionDescription": "Aprenda a pedir permissão de forma extremamente educada no Japão: tirar fotos, entrar num recinto ou sentar-se a uma mesa."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "はいっても いい です か",
                "romaji": "Haitte mo ii desu ka",
                "translation": "Posso entrar?",
                "timeContext": "Pedido de entrada em ambiente privado."
            },
            {
                "type": "vocab",
                "kanji": "しゃしん を とっても いい です か",
                "romaji": "Shashin o totte mo ii desu ka",
                "translation": "Posso tirar foto?",
                "timeContext": "Comum em museus, templos e lojas."
            },
            {
                "type": "vocab",
                "kanji": "すわっても いい です か",
                "romaji": "Suwatte mo ii desu ka",
                "translation": "Posso me sentar?",
                "timeContext": "Perguntando se o assento está vago."
            },
            {
                "type": "vocab",
                "kanji": "いい です よ",
                "romaji": "Ii desu yo",
                "translation": "Claro! Pode sim!",
                "timeContext": "Resposta afirmativa gentil."
            },
            {
                "type": "grammar_pill",
                "title": "Pedindo Permissão (~te mo ii desu ka)",
                "rule": "Usamos a Forma TE + も いい です か (mo ii desu ka) para perguntar se é permitido realizar uma ação.",
                "formula": "[ Verbo Forma TE ] + も いい です か",
                "example": "Koko ni suwatte mo ii desu ka ➔ Posso me sentar aqui?"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como perguntar 'Posso tirar uma foto aqui?'",
                "options": [
                    {
                        "label": "Shashin o totte mo ii desu ka?",
                        "isCorrect": true
                    },
                    {
                        "label": "Shashin o torimasu ka?",
                        "isCorrect": false
                    },
                    {
                        "label": "Shashin o torite kudasai?",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como pedir permissão para sentar?",
                "options": [
                    {
                        "label": "Suwatte mo ii desu ka?",
                        "isCorrect": true
                    },
                    {
                        "label": "Suwarimasu kudasai?",
                        "isCorrect": false
                    },
                    {
                        "label": "Suwatte mo ii desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. O que significa a resposta 'Ii desu yo'?",
                "options": [
                    {
                        "label": "Claro! Pode sim!",
                        "isCorrect": true
                    },
                    {
                        "label": "Não pode de jeito nenhum",
                        "isCorrect": false
                    },
                    {
                        "label": "Por favor espere",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza: 'Haitte mo ii desu ka?'",
                "options": [
                    {
                        "label": "Posso entrar?",
                        "isCorrect": true
                    },
                    {
                        "label": "Posso sair?",
                        "isCorrect": false
                    },
                    {
                        "label": "Posso comer?",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual particula vem após a Forma TE na estrutura de permissão?",
                "options": [
                    {
                        "label": "も (mo)",
                        "isCorrect": true
                    },
                    {
                        "label": "は (wa)",
                        "isCorrect": false
                    },
                    {
                        "label": "を (o)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "きのう ともだち と えいが を みました",
                "translation": "Ontem assisti a um filme com meu amigo.",
                "chunks": [
                    "きのう",
                    "ともだち",
                    "と",
                    "えいが",
                    "を",
                    "みました"
                ]
            },
            {
                "sentenceJp": "せんしゅう きょうと へ いきました",
                "translation": "Fui para Quioto semana passada.",
                "chunks": [
                    "せんしゅう",
                    "きょうと",
                    "へ",
                    "いきました"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Na entrada de um templo histórico em Kyoto.",
                "npcName": "Monge / Guarda",
                "npcMessage": "Irasshaimase. (Bem-vindo.)",
                "options": [
                    {
                        "text": "Sumimasen, shashin o totte mo ii desu ka? (Com licença, posso tirar foto?)",
                        "feedback": "Educação impecável!",
                        "isCorrect": true
                    },
                    {
                        "text": "Shashin o tabemasu ka?",
                        "feedback": "Disse 'posso comer a foto?'.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despediu-se na entrada.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O guarda responde à sua pergunta sobre a foto.",
                "npcName": "Monge / Guarda",
                "npcMessage": "Hai, ii desu yo! Douzo. (Sim, pode sim! Fique à vontade.)",
                "options": [
                    {
                        "text": "Arigatou gozaimasu! (Muito obrigado!)",
                        "feedback": "Agradecimento gentil!",
                        "isCorrect": true
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas sem precisar.",
                        "isCorrect": false
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Restaurante movimentado, perguntando se uma cadeira está vaga.",
                "npcName": "Cliente da mesa ao lado",
                "npcMessage": "Konnichiwa. (Olá.)",
                "options": [
                    {
                        "text": "Koko ni suwatte mo ii desu ka? (Posso me sentar aqui?)",
                        "feedback": "Perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Kore wa oishii desu ka?",
                        "feedback": "Perguntou se o assento é gostoso.",
                        "isCorrect": false
                    },
                    {
                        "text": "Doko desu ka?",
                        "feedback": "Perguntou onde fica.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a estrutura correta para pedir permissão?",
                "options": [
                    "Forma TE + mo ii desu ka",
                    "Forma Masu + mo ii desu ka",
                    "Forma Nai + mo ii desu ka"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'はいっても いい です か' (Haitte mo ii desu ka)?",
                "options": [
                    "Posso entrar?",
                    "Posso tirar foto?",
                    "Posso me sentar?"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'しゃしん を とっても いい です か' (Shashin o totte mo ii desu ka)?",
                "options": [
                    "Posso entrar?",
                    "Posso tirar foto?",
                    "Posso me sentar?"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'すわっても いい です か' (Suwatte mo ii desu ka)?",
                "options": [
                    "Posso tirar foto?",
                    "Posso entrar?",
                    "Posso me sentar?"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'いい です よ' (Ii desu yo)?",
                "options": [
                    "Claro! Pode sim!",
                    "Posso entrar?",
                    "Posso tirar foto?"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_15",
        "title": "Proibições e Regras",
        "section": 3,
        "sectionTitle": "Conexão, Pedidos e Regras",
        "level": "A2",
        "xpReward": 100,
        "stage1_context": {
            "audioGuide": "Koko de shashin o torite wa ikemasen!",
            "missionTitle": "Entendendo Proibições e Placas",
            "missionDescription": "Entenda avisos de proibição e regras sociais no Japão: 'Não pode tirar fotos', 'Não pode entrar' e 'Não pode fumar'."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "はいって は いけません",
                "romaji": "Haitte wa ikemasen",
                "translation": "Proibido entrar",
                "timeContext": "Aviso de área restrita."
            },
            {
                "type": "vocab",
                "kanji": "しゃしん を とって は いけません",
                "romaji": "Shashin o totte wa ikemasen",
                "translation": "Proibido tirar fotos",
                "timeContext": "Regra de museus ou templos."
            },
            {
                "type": "vocab",
                "kanji": "たばこ を すって は いけません",
                "romaji": "Tabako o sutte wa ikemasen",
                "translation": "Proibido fumar",
                "timeContext": "Área livre de fumo."
            },
            {
                "type": "vocab",
                "kanji": "きんえん",
                "romaji": "Kin'en",
                "translation": "Proibido Fumar (Placa)",
                "timeContext": "Vocabulário de sinalização."
            },
            {
                "type": "grammar_pill",
                "title": "Expressando Proibição (~te wa ikemasen)",
                "rule": "A estrutura Forma TE + は いけません (wa ikemasen) indica uma regra estrita ou proibição formal.",
                "formula": "[ Verbo Forma TE ] + は いけません",
                "example": "Koko de shashin o totte wa ikemasen ➔ Não pode tirar fotos aqui."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. O que significa 'Haitte wa ikemasen' numa porta?",
                "options": [
                    {
                        "label": "Proibido entrar",
                        "isCorrect": true
                    },
                    {
                        "label": "Pode entrar à vontade",
                        "isCorrect": false
                    },
                    {
                        "label": "Por favor entre devagar",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como se diz 'Não pode tirar foto aqui'?",
                "options": [
                    {
                        "label": "Koko de shashin o totte wa ikemasen",
                        "isCorrect": true
                    },
                    {
                        "label": "Koko de shashin o totte mo ii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Koko de shashin o torimasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual é a palavra de sinalização para 'Proibido Fumar'?",
                "options": [
                    {
                        "label": "きんえん (Kin'en)",
                        "isCorrect": true
                    },
                    {
                        "label": "いりぐち (Iriguchi)",
                        "isCorrect": false
                    },
                    {
                        "label": "ふね (Fune)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza: 'Tabako o sutte wa ikemasen'",
                "options": [
                    {
                        "label": "Proibido fumar cigarro",
                        "isCorrect": true
                    },
                    {
                        "label": "Por favor fume aqui",
                        "isCorrect": false
                    },
                    {
                        "label": "Não compre cigarro",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Na proibição com a Forma TE, como se pronuncia a partícula は?",
                "options": [
                    {
                        "label": "WA",
                        "isCorrect": true
                    },
                    {
                        "label": "HA",
                        "isCorrect": false
                    },
                    {
                        "label": "WO",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "とうきょう は にぎやかな まち です",
                "translation": "Tóquio é uma cidade movimentada.",
                "chunks": [
                    "とうきょう",
                    "は",
                    "にぎやかな",
                    "まち",
                    "です"
                ]
            },
            {
                "sentenceJp": "この おてら は とても しずか です",
                "translation": "Este templo é muito silencioso.",
                "chunks": [
                    "この",
                    "おてら",
                    "は",
                    "とても",
                    "しずか",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você saca a câmera num museu e o segurança se aproxima educadamente.",
                "npcName": "Segurança do Museu",
                "npcMessage": "Sumimasen, koko de shashin o totte wa ikemasen. (Com licença, não pode tirar fotos aqui.)",
                "options": [
                    {
                        "text": "Ah, sumimasen! Wakarimashita. (Ah, desculpe! Entendi.)",
                        "feedback": "Reação perfeita e respeitosa!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hai, totte mo ii desu!",
                        "feedback": "Disse que pode tirar foto sim.",
                        "isCorrect": false
                    },
                    {
                        "text": "Oishii desu!",
                        "feedback": "Fora de contexto.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Procurando uma área para fumar perto da estação.",
                "npcName": "Passante",
                "npcMessage": "Koko wa kinen desu. Tabako o sutte wa ikemasen. (Aqui é proibido fumar. Não pode fumar.)",
                "options": [
                    {
                        "text": "Wakarimashita. Kitsuen-jo wa doko desu ka? (Entendi. Onde fica a área de fumantes?)",
                        "feedback": "Excelente pergunta!",
                        "isCorrect": true
                    },
                    {
                        "text": "Arigatou, tabemasu!",
                        "feedback": "Disse que vai comer.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida sem nexo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Diante de uma porta com sinalização vermelha em um laboratório.",
                "npcName": "Guia",
                "npcMessage": "Koko wa haitte wa ikemasen. (Não pode entrar aqui.)",
                "options": [
                    {
                        "text": "Hai, shouchi shimashita. (Sim, compreendido.)",
                        "feedback": "Muito formal e correto!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, hairimasu!",
                        "feedback": "Insistiu em entrar.",
                        "isCorrect": false
                    },
                    {
                        "text": "Itadakimasu!",
                        "feedback": "Agradeceu a comida.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a estrutura de proibição em japonês?",
                "options": [
                    "Forma TE + wa ikemasen",
                    "Forma Masu + wa ikemasen",
                    "Forma Nai + wa ikemasen"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'はいって は いけません' (Haitte wa ikemasen)?",
                "options": [
                    "Proibido entrar",
                    "Proibido tirar fotos",
                    "Proibido fumar"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'しゃしん を とって は いけません' (Shashin o totte wa ikemasen)?",
                "options": [
                    "Proibido entrar",
                    "Proibido tirar fotos",
                    "Proibido fumar"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'たばこ を すって は いけません' (Tabako o sutte wa ikemasen)?",
                "options": [
                    "Proibido tirar fotos",
                    "Proibido entrar",
                    "Proibido fumar"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'きんえん' (Kin'en)?",
                "options": [
                    "Proibido Fumar (Placa)",
                    "Proibido entrar",
                    "Proibido tirar fotos"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_16",
        "title": "Conectando Ações em Sequência",
        "section": 4,
        "sectionTitle": "Compras, Viagens e Navegação Avançada",
        "level": "A2",
        "xpReward": 105,
        "stage1_context": {
            "audioGuide": "Uchi ni kaette, gohan o tabete, nemasu!",
            "missionTitle": "Encadeando Ações do Dia",
            "missionDescription": "Aprenda a conectar várias ações em ordem cronológica numa única frase: 'Fui para casa, comi e depois dormi'."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "かえって",
                "romaji": "Kaette",
                "translation": "Voltando (Forma TE de Kaerimasu)",
                "timeContext": "Ação de retornar."
            },
            {
                "type": "vocab",
                "kanji": "それから",
                "romaji": "Sorekara",
                "translation": "E depois / Em seguida",
                "timeContext": "Conectivo de sequência temporal."
            },
            {
                "type": "vocab",
                "kanji": "かいもの して",
                "romaji": "Kaimono shite",
                "translation": "Fazer compras (Forma TE)",
                "timeContext": "Atividade comercial."
            },
            {
                "type": "vocab",
                "kanji": "おきて",
                "romaji": "Okite",
                "translation": "Acordando (Forma TE)",
                "timeContext": "Primeira ação da manhã."
            },
            {
                "type": "grammar_pill",
                "title": "Conexão de Verbos com a Forma TE",
                "rule": "Para listar ações em sequência, conjugamos todos os verbos anteriores na Forma TE, e APENAS o último verbo define o tempo da frase (presente ou passado)!",
                "formula": "[ Verbo 1 Forma TE ], [ Verbo 2 Forma TE ], [ Verbo 3 Final ]",
                "example": "Asa okite, shawaa o abite,朝gohan o tabemashita ➔ De manhã acordei, tomei banho e comi o café da manhã."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como conectar as ações 'Ir para casa' e 'Comer' em sequência?",
                "options": [
                    {
                        "label": "Uchi ni kaette, tabemasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Uchi ni kaerimasu, tabemasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Uchi ni kaeru, tabemasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual conectivo significa 'E depois / Em seguida'?",
                "options": [
                    {
                        "label": "それから (Sorekara)",
                        "isCorrect": true
                    },
                    {
                        "label": "<ctrl42>しかし (Shikashi)",
                        "isCorrect": false
                    },
                    {
                        "label": "だから (Dakara)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Em qual verbo da sequência fica o tempo da frase (passado/presente)?",
                "options": [
                    {
                        "label": "No último verbo absoluto da frase",
                        "isCorrect": true
                    },
                    {
                        "label": "No primeiro verbo",
                        "isCorrect": false
                    },
                    {
                        "label": "Em todos os verbos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza: 'Kinou kaimono shite, eiga o mimashita'",
                "options": [
                    {
                        "label": "Ontem fiz compras e assisti a um filme",
                        "isCorrect": true
                    },
                    {
                        "label": "Hoje farei compras e assistirei a um filme",
                        "isCorrect": false
                    },
                    {
                        "label": "Fui ao cinema sem fazer compras",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como fica a frase 'Acordar e tomar café':",
                "options": [
                    {
                        "label": "Okite, kohii o nomimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Okimasu, kohii o nomimasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Okimashita, kohii o nomimasu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "しんかんせん は でんしゃ より はやい です",
                "translation": "O Shinkansen é mais rápido que o trem comum.",
                "chunks": [
                    "しんかんせん",
                    "は",
                    "でんしゃ",
                    "より",
                    "はやい",
                    "です"
                ]
            },
            {
                "sentenceJp": "にほん は ブラジル より ちいさい です",
                "translation": "O Japão é menor que o Brasil.",
                "chunks": [
                    "にほん",
                    "は",
                    "ブラジル",
                    "より",
                    "ちいさい",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Perguntando sobre a sua rotina da noite anterior.",
                "npcName": "Mio",
                "npcMessage": "[Seu Nome]-san, kinou wa uchi ni kaette kara nani o shimashita ka? (Ontem depois de voltar para casa, o que fez?)",
                "options": [
                    {
                        "text": "Gohan o tabete, terebi o mimashita! (Comi e assisti TV!)",
                        "feedback": "Excelente encadeamento na Forma TE!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemasen.",
                        "feedback": "Disse que não comeu.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ohayou gozaimasu!",
                        "feedback": "Saudação incorreta.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Mio pergunta sobre os seus planos para o sábado.",
                "npcName": "Mio",
                "npcMessage": "Doyoubi wa nani o shimasu ka? (O que faz no sábado?)",
                "options": [
                    {
                        "text": "Toshokan ni ikite/itte, hon o yomimasu. (Vou à biblioteca e leio livros.)",
                        "feedback": "Perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nemasu, nemasu, nemasu.",
                        "feedback": "Repetiu o mesmo verbo sem usar a Forma TE.",
                        "isCorrect": false
                    },
                    {
                        "text": "Kore wa ikura desu ka?",
                        "feedback": "Perguntou o preço de algo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Explicando como foi a sua manhã.",
                "npcName": "Mio",
                "npcMessage": "Kesa nani o shimashita ka? (O que fez hoje de manhã?)",
                "options": [
                    {
                        "text": "7-ji ni okite, shawaa o abimashita. (Acordei às 7 e tomei banho.)",
                        "feedback": "Sensacional!",
                        "isCorrect": true
                    },
                    {
                        "text": "Okimasu, abimasu.",
                        "feedback": "Faltou conectar com a Forma TE.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas sem motivo.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que acontece com os verbos anteriores quando encadeamos ações em sequência?",
                "options": [
                    "Ficam na Forma TE",
                    "Ficam no passado -mashita",
                    "Ficam na forma negativa -masen"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'かえって' (Kaette)?",
                "options": [
                    "Voltando (Forma TE de Kaerimasu)",
                    "E depois / Em seguida",
                    "Fazer compras (Forma TE)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'それから' (Sorekara)?",
                "options": [
                    "Voltando (Forma TE de Kaerimasu)",
                    "E depois / Em seguida",
                    "Fazer compras (Forma TE)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'かいもの して' (Kaimono shite)?",
                "options": [
                    "E depois / Em seguida",
                    "Voltando (Forma TE de Kaerimasu)",
                    "Fazer compras (Forma TE)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'おきて' (Okite)?",
                "options": [
                    "Acordando (Forma TE)",
                    "Voltando (Forma TE de Kaerimasu)",
                    "E depois / Em seguida"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_17",
        "title": "Comprando Passagens e Traslados",
        "section": 4,
        "sectionTitle": "Compras, Viagens e Navegação Avançada",
        "level": "A2",
        "xpReward": 105,
        "stage1_context": {
            "audioGuide": "Kyoto-eki de norikae desu!",
            "missionTitle": "Navegando nos Trens Japoneses",
            "missionDescription": "Aprenda a comprar passagens guichê/máquina, perguntar sobre baldeações (norikae) e linhas expressas."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "のりかえ",
                "romaji": "Norikae",
                "translation": "Baldeação / Troca de trem",
                "timeContext": "Troca de linha ferroviária."
            },
            {
                "type": "vocab",
                "kanji": "きっぷ",
                "romaji": "Kippu",
                "translation": "Bilhete / Passagem",
                "timeContext": "Ingresso de transporte."
            },
            {
                "type": "vocab",
                "kanji": "かたみち",
                "romaji": "Katamichi",
                "translation": "Somente ida (Passagem)",
                "timeContext": "Tipo de bilhete."
            },
            {
                "type": "vocab",
                "kanji": "おうふく",
                "romaji": "Oufuku",
                "translation": "Ida e volta",
                "timeContext": "Passagem completa."
            },
            {
                "type": "grammar_pill",
                "title": "Perguntando o Ponto de Baldeação",
                "rule": "Para perguntar onde fazer a troca de trem, usamos a estrutura: [ Destino ] de norikae desu ka?",
                "formula": "[ Local ] で のりかえ です か",
                "example": "Tokyo-eki de norikae desu ka ➔ A baldeação é na estação de Tokyo?"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. O que significa 'Norikae' na estação?",
                "options": [
                    {
                        "label": "Baldeação / Troca de linha",
                        "isCorrect": true
                    },
                    {
                        "label": "Saída de emergência",
                        "isCorrect": false
                    },
                    {
                        "label": "Bilhete de ida e volta",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como pedir 'Uma passagem de ida e volta para Kyoto'?",
                "options": [
                    {
                        "label": "Kyoto made oufuku kippu o kudasai",
                        "isCorrect": true
                    },
                    {
                        "label": "Kyoto made katamichi kippu o kudasai",
                        "isCorrect": false
                    },
                    {
                        "label": "Kyoto made norikae o kudasai",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual é o termo para passagem 'Somente ida'?",
                "options": [
                    {
                        "label": "かたみち (Katamichi)",
                        "isCorrect": true
                    },
                    {
                        "label": "おうふく (Oufuku)",
                        "isCorrect": false
                    },
                    {
                        "label": "のりかえ (Norikae)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza: 'Koko de norikae desu ka?'",
                "options": [
                    {
                        "label": "A baldeação é aqui?",
                        "isCorrect": true
                    },
                    {
                        "label": "O trem vai para onde?",
                        "isCorrect": false
                    },
                    {
                        "label": "Quanto custa o bilhete?",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como pedir '2 bilhetes de ida'?",
                "options": [
                    {
                        "label": "Katamichi kippu o ni-mai kudasai",
                        "isCorrect": true
                    },
                    {
                        "label": "Oufuku kippu o ni-mai kudasai",
                        "isCorrect": false
                    },
                    {
                        "label": "Norikae o ni-mai kudasai",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
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
            },
            {
                "sentenceJp": "スポーツ で サッカー が いちばん すき です",
                "translation": "Entre os esportes, o futebol é o que mais gosto.",
                "chunks": [
                    "スポーツ",
                    "で",
                    "サッカー",
                    "が",
                    "いちばん",
                    "すき",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: No guichê de atendimento da JR na Estação de Shinjuku.",
                "npcName": "Atendente JR",
                "npcMessage": "Irasshaimase! Doko made desu ka? (Bem-vindo! Até onde vai?)",
                "options": [
                    {
                        "text": "Kyoto-eki made katamichi kippu o ichi-mai kudasai. (Uma passagem de ida para a Estação de Kyoto, por favor.)",
                        "feedback": "Pedido perfeito e claríssimo!",
                        "isCorrect": true
                    },
                    {
                        "text": "Kyoto wa oishii desu.",
                        "feedback": "Disse que Kyoto é gostosa.",
                        "isCorrect": false
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Perguntando se precisa trocar de trem no caminho.",
                "npcName": "Atendente JR",
                "npcMessage": "Hai, 13,000-en desu. (Sim, são 13.000 ienes.)",
                "options": [
                    {
                        "text": "Norikae wa arimasu ka? (Tem baldeação?)",
                        "feedback": "Pergunta super útil e precisa!",
                        "isCorrect": true
                    },
                    {
                        "text": "Doko de tabemasu ka?",
                        "feedback": "Perguntou onde comer.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despediu-se antes de pagar.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O atendente explica onde fazer a troca de trem.",
                "npcName": "Atendente JR",
                "npcMessage": "Nagoya-eki de norikae desu. (A baldeação é na Estação de Nagoya.)",
                "options": [
                    {
                        "text": "Nagoya-eki desu ne. Wakarimashita, arigatou! (Na Estação de Nagoya, né. Entendi, obrigado!)",
                        "feedback": "Confirmação excelente!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nagoya wa kirai desu.",
                        "feedback": "Disse que odeia Nagoya.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas sem motivo.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a diferença entre 'Katamichi' e 'Oufuku'?",
                "options": [
                    "Katamichi é só ida; Oufuku é ida e volta",
                    "Katamichi é trem bala; Oufuku é trem comum",
                    "Katamichi é de graça; Oufuku é pago"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'のりかえ' (Norikae)?",
                "options": [
                    "Baldeação / Troca de trem",
                    "Bilhete / Passagem",
                    "Somente ida (Passagem)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'きっぷ' (Kippu)?",
                "options": [
                    "Baldeação / Troca de trem",
                    "Bilhete / Passagem",
                    "Somente ida (Passagem)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'かたみち' (Katamichi)?",
                "options": [
                    "Bilhete / Passagem",
                    "Baldeação / Troca de trem",
                    "Somente ida (Passagem)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'おうふく' (Oufuku)?",
                "options": [
                    "Ida e volta",
                    "Baldeação / Troca de trem",
                    "Bilhete / Passagem"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_18",
        "title": "No Hotel e Ryokan",
        "section": 4,
        "sectionTitle": "Compras, Viagens e Navegação Avançada",
        "level": "A2",
        "xpReward": 105,
        "stage1_context": {
            "audioGuide": "Chekkuin o negai shimasu!",
            "missionTitle": "Hospedagem no Japão",
            "missionDescription": "Aprenda a fazer check-in no hotel ou ryokan (hospedaria tradicional), solicitar itens no quarto e perguntar sobre o café da manhã."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "チェックイン",
                "romaji": "Chekkuin",
                "translation": "Check-in",
                "timeContext": "Procedimento de entrada na hospedagem."
            },
            {
                "type": "vocab",
                "kanji": "よやく",
                "romaji": "Yoyaku",
                "translation": "Reserva",
                "timeContext": "Registro prévio de quarto."
            },
            {
                "type": "vocab",
                "kanji": "ちょうしょく / あさごはん",
                "romaji": "Choushoku / Asa-gohan",
                "translation": "Café da manhã",
                "timeContext": "Refeição matinal do hotel."
            },
            {
                "type": "vocab",
                "kanji": "タオル",
                "romaji": "Taoru",
                "translation": "Toalha",
                "timeContext": "Item de banheiro."
            },
            {
                "type": "grammar_pill",
                "title": "Fazendo Pedidos com ~o negai shimasu",
                "rule": "Para solicitar serviços ou fazer reservas de forma cortês, usamos おねがいします (o-negai shimasu) após o objeto.",
                "formula": "[ Objeto / Ação ] + を おねがいします",
                "example": "Chekkuin o o-negai shimasu ➔ Gostaria de fazer o check-in, por favor."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como dizer 'Gostaria de fazer o check-in' na recepção?",
                "options": [
                    {
                        "label": "Chekkuin o o-negai shimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Chekkuin o tabemasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Chekkuin o ikimasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como se diz 'Eu tenho uma reserva'?",
                "options": [
                    {
                        "label": "Yoyaku ga arimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Yoyaku ga imasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Yoyaku o nomimasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual é a palavra para 'Café da manhã' formal?",
                "options": [
                    {
                        "label": "ちょうしょく (Choushoku)",
                        "isCorrect": true
                    },
                    {
                        "label": "夕食 (Yuumeshi)",
                        "isCorrect": false
                    },
                    {
                        "label": "昼食 (Chuushoku)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Como pedir mais uma toalha na recepção?",
                "options": [
                    {
                        "label": "Taoru o mo ichi-mai o-negai shimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Taoru o tabete kudasai",
                        "isCorrect": false
                    },
                    {
                        "label": "Taoru ni suwari-masu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Traduza: 'Choushoku wa nan-ji kara desu ka?'",
                "options": [
                    {
                        "label": "A partir de que horas é o café da manhã?",
                        "isCorrect": true
                    },
                    {
                        "label": "Onde fica o restaurante?",
                        "isCorrect": false
                    },
                    {
                        "label": "Quanto custa o café da manhã?",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "にほん へ たび に いきたい です",
                "translation": "Quero ir viajar para o Japão.",
                "chunks": [
                    "にほん",
                    "へ",
                    "たび",
                    "に",
                    "いきたい",
                    "です"
                ]
            },
            {
                "sentenceJp": "あたしい パソコン が ほしい です",
                "translation": "Quero um computador novo.",
                "chunks": [
                    "あたしい",
                    "パソコン",
                    "が",
                    "ほしい",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você chega ao balcão do hotel em Kyoto às 15h.",
                "npcName": "Recepcionista de Hotel",
                "npcMessage": "Irasshaimase! Konnichiwa. (Bem-vindo! Boa tarde.)",
                "options": [
                    {
                        "text": "Konnichiwa. Yoyaku shita [Seu Nome] desu. Chekkuin o o-negai shimasu. (Boa tarde. Sou o [Seu Nome] que fez reserva. Check-in por favor.)",
                        "feedback": "Aresentação impecável!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Recusa sem sentido na recepção.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida no início do atendimento.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: A recepcionista confirma a sua reserva e entrega a chave.",
                "npcName": "Recepcionista de Hotel",
                "npcMessage": "[Seu Nome]-sama, o-heya wa 402-gou shitsu desu. Kore wa kagi desu. (Sr. [Seu Nome], seu quarto é o 402. Aqui está a chave.)",
                "options": [
                    {
                        "text": "Arigatou gozaimasu. Choushoku wa nan-ji kara desu ka? (Obrigado. A partir de que horas é o café?)",
                        "feedback": "Pergunta super relevante!",
                        "isCorrect": true
                    },
                    {
                        "text": "Kagi wa oishii desu.",
                        "feedback": "Disse que a chave é gostosa.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas à toa.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: A recepcionista responde sobre o horário do café da manhã.",
                "npcName": "Recepcionista de Hotel",
                "npcMessage": "Choushoku wa朝 7-ji kara 9-ji30-fun made desu. (O café é das 7h às 9h30 da manhã.)",
                "options": [
                    {
                        "text": "Wakarimashita. Arigatou gozaimasu! (Entendi. Muito obrigado!)",
                        "feedback": "Encerramento cortês e perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, 10-ji ni nemasu.",
                        "feedback": "Comentário fora do assunto.",
                        "isCorrect": false
                    },
                    {
                        "text": "Kore wa ikura desu ka?",
                        "feedback": "Perguntou o preço desnecessariamente.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que significa a expressão 'o-negai shimasu' ao pedir algo?",
                "options": [
                    "Por favor / Solicito por gentileza",
                    "Não preciso disso",
                    "Quanto custa este item?"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'チェックイン' (Chekkuin)?",
                "options": [
                    "Check-in",
                    "Reserva",
                    "Café da manhã"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'よやく' (Yoyaku)?",
                "options": [
                    "Check-in",
                    "Reserva",
                    "Café da manhã"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'ちょうしょく / あさごはん' (Choushoku / Asa-gohan)?",
                "options": [
                    "Reserva",
                    "Check-in",
                    "Café da manhã"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'タオル' (Taoru)?",
                "options": [
                    "Toalha",
                    "Check-in",
                    "Reserva"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_19",
        "title": "Dando e Recebendo Direções Detalhadas",
        "section": 4,
        "sectionTitle": "Compras, Viagens e Navegação Avançada",
        "level": "A2",
        "xpReward": 105,
        "stage1_context": {
            "audioGuide": "Migi ni magatte kudasai!",
            "missionTitle": "Orientação e Posição no Espaço",
            "missionDescription": "Aprenda a entender e dar orientações de caminho: virar à direita/esquerda, passar a ponte e caminhar em frente."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "まっすぐ",
                "romaji": "Massugu",
                "translation": "Em frente / Reto",
                "timeContext": "Direção contínua sem dobrar."
            },
            {
                "type": "vocab",
                "kanji": "みぎ に まがります",
                "romaji": "Migi ni magarimasu",
                "translation": "Dobrar à direita",
                "timeContext": "Mudança de direção à direita."
            },
            {
                "type": "vocab",
                "kanji": "ひだり に まがります",
                "romaji": "Hidari ni magarimasu",
                "translation": "Dobrar à esquerda",
                "timeContext": "Mudança de direção à esquerda."
            },
            {
                "type": "vocab",
                "kanji": "しんごう",
                "romaji": "Shingou",
                "translation": "Semáforo",
                "timeContext": "Ponto de referência no trânsito."
            },
            {
                "type": "grammar_pill",
                "title": "Direção com Partícula に + まがります",
                "rule": "Usamos a partícula に (ni) para indicar o lado ou direção em que vamos virar com o verbo まがります (magarimasu).",
                "formula": "[ Migi / Hidari ] + に + まがります / まがって ください",
                "example": "Kousaten o migi ni magatte kudasai ➔ Vire à direita no cruzamento, por favor."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como pedir para alguém 'Seguir reto/em frente'?",
                "options": [
                    {
                        "label": "Massugu itte kudasai",
                        "isCorrect": true
                    },
                    {
                        "label": "Migi ni magatte kudasai",
                        "isCorrect": false
                    },
                    {
                        "label": "Hidari ni magatte kudasai",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. O que significa 'Hidari ni magarimasu'?",
                "options": [
                    {
                        "label": "Virar à esquerda",
                        "isCorrect": true
                    },
                    {
                        "label": "Virar à direita",
                        "isCorrect": false
                    },
                    {
                        "label": "Seguir reto",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual a palavra para 'Semáforo' em japonês?",
                "options": [
                    {
                        "label": "しんごう (Shingou)",
                        "isCorrect": true
                    },
                    {
                        "label": "こうさと (Kousaten)",
                        "isCorrect": false
                    },
                    {
                        "label": "はし (Hashi)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza: 'Migi ni magatte kudasai'",
                "options": [
                    {
                        "label": "Por favor, vire à direita",
                        "isCorrect": true
                    },
                    {
                        "label": "Por favor, vire à esquerda",
                        "isCorrect": false
                    },
                    {
                        "label": "Por favor, pare no semáforo",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual partícula indica a direção da virada (Migi/Hidari)?",
                "options": [
                    {
                        "label": "に (ni)",
                        "isCorrect": true
                    },
                    {
                        "label": "を (o)",
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
                "sentenceJp": "ともだち に プレゼント を あげました",
                "translation": "Dei um presente para o meu amigo.",
                "chunks": [
                    "ともだち",
                    "に",
                    "プレゼント",
                    "を",
                    "あげました"
                ]
            },
            {
                "sentenceJp": "せんせい に ほん を もらいました",
                "translation": "Recebi um livro do professor.",
                "chunks": [
                    "せんせい",
                    "に",
                    "ほん",
                    "を",
                    "もらいました"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está procurando o Konbini e pede ajuda a um policial no Koban.",
                "npcName": "Policial do Koban",
                "npcMessage": "Sumimasen! Konbini wa doko desu ka? -> Konbini desu ka? Ano shingou o migi ni magatte kudasai. (O konbini? Vire à direita naquele semáforo.)",
                "options": [
                    {
                        "text": "Shingou o migi desu ne. Arigatou gozaimasu! (No semáforo à direita, né. Obrigado!)",
                        "feedback": "Entendimento perfeito da orientação!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemasen.",
                        "feedback": "Disse que não come.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ohayou!",
                        "feedback": "Saudação fora de hora.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Um turista te pede orientação na rua.",
                "npcName": "Turista",
                "npcMessage": "Eki wa doko desu ka? (Onde fica a estação?)",
                "options": [
                    {
                        "text": "Kono道 o massugu itte kudasai. (Siga reto por esta rua, por favor.)",
                        "feedback": "Resposta super solícita e correta!",
                        "isCorrect": true
                    },
                    {
                        "text": "Eki wa oishii desu.",
                        "feedback": "Disse que a estação é gostosa.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: No táxi explicando o caminho ao motorista.",
                "npcName": "Motorista de Táxi",
                "npcMessage": "Tsuugi no kousaten o dochira ni magarimasu ka? (No próximo cruzamento, vira para qual lado?)",
                "options": [
                    {
                        "text": "Hidari ni magatte kudasai. (Vire à esquerda, por favor.)",
                        "feedback": "Orientação precisa!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hai, 1000-en desu.",
                        "feedback": "Respondeu um valor em dinheiro.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despediu-se dentro do táxi.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual o significado de 'Massugu'?",
                "options": [
                    "Em frente / Reto",
                    "À direita",
                    "À esquerda"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'まっすぐ' (Massugu)?",
                "options": [
                    "Em frente / Reto",
                    "Dobrar à direita",
                    "Dobrar à esquerda"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'みぎ に まがります' (Migi ni magarimasu)?",
                "options": [
                    "Em frente / Reto",
                    "Dobrar à direita",
                    "Dobrar à esquerda"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'ひだり に まがります' (Hidari ni magarimasu)?",
                "options": [
                    "Dobrar à direita",
                    "Em frente / Reto",
                    "Dobrar à esquerda"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'しんごう' (Shingou)?",
                "options": [
                    "Semáforo",
                    "Em frente / Reto",
                    "Dobrar à direita"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_20",
        "title": "Expressando Desejos Pessoais",
        "section": 4,
        "sectionTitle": "Compras, Viagens e Navegação Avançada",
        "level": "A2",
        "xpReward": 110,
        "stage1_context": {
            "audioGuide": "Nihon ni ikitai desu!",
            "missionTitle": "Dizendo o que Você Quer Fazer (~tai)",
            "missionDescription": "Domine a conjugação de desejos com a terminação -tai: 'Quero ir ao Japão', 'Quero comer ramen' e 'Quero comprar souvenirs'."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "いきたい",
                "romaji": "Ikitai",
                "translation": "Quero ir",
                "timeContext": "Desejo de deslocamento."
            },
            {
                "type": "vocab",
                "kanji": "たべたい",
                "romaji": "Tabetai",
                "translation": "Quero comer",
                "timeContext": "Desejo gastronômico."
            },
            {
                "type": "vocab",
                "kanji": "かいたい",
                "romaji": "Kaitai",
                "translation": "Quero comprar",
                "timeContext": "Desejo de consumo."
            },
            {
                "type": "vocab",
                "kanji": "あいたい",
                "romaji": "Aitai",
                "translation": "Quero encontrar / Saudades",
                "timeContext": "Desejo de ver alguém."
            },
            {
                "type": "grammar_pill",
                "title": "Conjugação do Desejo (~tai desu)",
                "rule": "Troca-se a terminação ~masu do verbo por ~tai desu. O verbo passa a se comportar gramaticalmente como um adjetivo -i!",
                "formula": "Verbo(sem masu) + たい です",
                "example": "Ikimasu ➔ Ikitai desu | Tabemasu ➔ Tabetai desu."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como fica o verbo 'Tabemasu' (Comer) na forma de desejo 'Quero comer'?",
                "options": [
                    {
                        "label": "たべたい です (Tabetai desu)",
                        "isCorrect": true
                    },
                    {
                        "label": "たべたい ます",
                        "isCorrect": false
                    },
                    {
                        "label": "たべたくない ます",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como se diz 'Quero ir ao Japão' em japonês?",
                "options": [
                    {
                        "label": "Nihon ni ikitai desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Nihon ni ikimasu desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Nihon ni ikitai mashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual é a forma de desejo para 'Kaimasu' (Comprar)?",
                "options": [
                    {
                        "label": "かいたい です (Kaitai desu)",
                        "isCorrect": true
                    },
                    {
                        "label": "かいいたい です",
                        "isCorrect": false
                    },
                    {
                        "label": "かいます たい",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza: 'Ramen ga tabetai desu'",
                "options": [
                    {
                        "label": "Quero comer ramen",
                        "isCorrect": true
                    },
                    {
                        "label": "Comi ramen ontem",
                        "isCorrect": false
                    },
                    {
                        "label": "Não gosto de ramen",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como negar o desejo ('Não quero ir')?",
                "options": [
                    {
                        "label": "Ikitakunai desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Ikitai ja arimasen",
                        "isCorrect": false
                    },
                    {
                        "label": "Ikitai masen",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "あたま が いたい です から くすり を のみます",
                "translation": "Estou com dor de cabeça, então vou tomar remédio.",
                "chunks": [
                    "あたま",
                    "が",
                    "いたい",
                    "です",
                    "から",
                    "くすり",
                    "を",
                    "のみます"
                ]
            },
            {
                "sentenceJp": "ねつ が あります から やすみます",
                "translation": "Estou com febre, por isso vou descansar.",
                "chunks": [
                    "ねつ",
                    "が",
                    "あります",
                    "から",
                    "やすみます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Planejando as férias com um amigo japonês.",
                "npcName": "Sota",
                "npcMessage": "[Seu Nome]-san, Nihon de nani o shitai desu ka? (O que você quer fazer no Japão?)",
                "options": [
                    {
                        "text": "Fuji-san ni ikitai desu! (Quero ir ao Monte Fuji!)",
                        "feedback": "Desejo expressado perfeitamente com ~tai!",
                        "isCorrect": true
                    },
                    {
                        "text": "Fuji-san wa oishii desu.",
                        "feedback": "Disse que o Monte Fuji é gostoso.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas sem motivo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Na hora do almoço escolhendo o cardápio.",
                "npcName": "Sota",
                "npcMessage": "Kyou no hirugohan wa nani ga tabetai desu ka? (O que quer comer no almoço hoje?)",
                "options": [
                    {
                        "text": "Sushi ga tabetai desu! (Quero comer sushi!)",
                        "feedback": "Sensacional!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ohayou gozaimasu!",
                        "feedback": "Saudação matinal totalmente fora de hora.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Caminhando pelo bairro de Akihabara.",
                "npcName": "Sota",
                "npcMessage": "Akihabara de nani o kaitai desu ka? (O que quer comprar em Akihabara?)",
                "options": [
                    {
                        "text": "Atarashii geemu o kaitai desu! (Quero comprar um jogo novo!)",
                        "feedback": "Perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Geemu o tabetai desu.",
                        "feedback": "Disse que quer comer o videogame!",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despediu-se no meio do passeio.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Como se conjuga o desejo de um verbo em ~masu?",
                "options": [
                    "Troca-se ~masu por ~tai desu",
                    "Adiciona-se ~desu após ~masu",
                    "Troca-se ~masu por ~mashita"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'いきたい' (Ikitai)?",
                "options": [
                    "Quero ir",
                    "Quero comer",
                    "Quero comprar"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'たべたい' (Tabetai)?",
                "options": [
                    "Quero ir",
                    "Quero comer",
                    "Quero comprar"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'かいたい' (Kaitai)?",
                "options": [
                    "Quero comer",
                    "Quero ir",
                    "Quero comprar"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'あいたい' (Aitai)?",
                "options": [
                    "Quero encontrar / Saudades",
                    "Quero ir",
                    "Quero comer"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_21",
        "title": "O Clima e as Estações do Ano",
        "section": 5,
        "sectionTitle": "Saúde, Clima e Sentimentos",
        "level": "A2",
        "xpReward": 110,
        "stage1_context": {
            "audioGuide": "Kyou wa ame ga furite imasu!",
            "missionTitle": "Falando do Tempo e das Estações",
            "missionDescription": "Aprenda a falar sobre as 4 estações do Japão (Primavera, Verão, Outono, Inverno) e sobre o tempo: chuva, neve e sol."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "あめ",
                "romaji": "Ame",
                "translation": "Chuva",
                "timeContext": "Fenômeno meteorológico."
            },
            {
                "type": "vocab",
                "kanji": "ゆき",
                "romaji": "Yuki",
                "translation": "Neve",
                "timeContext": "Comum no inverno em Hokkaido/Nagano."
            },
            {
                "type": "vocab",
                "kanji": "はれ",
                "romaji": "Hare",
                "translation": "Tempo limpo / Ensolarado",
                "timeContext": "Dia de sol."
            },
            {
                "type": "vocab",
                "kanji": "あめ が ふります",
                "romaji": "Ame ga furimasu",
                "translation": "Chover / Cair chuva",
                "timeContext": "Verbo de precipitação."
            },
            {
                "type": "grammar_pill",
                "title": "Previsão do Tempo com ...to omoimasu",
                "rule": "Para expressar uma opinião ou previsão ('Acho que vai chover'), usamos a forma neutra/simples + と おもいます (to omoimasu).",
                "formula": "[ Frase Neutra ] + と おもいます",
                "example": "Ashita wa ame ga furu to omoimasu ➔ Acho que amanhã vai chover."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se diz 'Neve' em japonês?",
                "options": [
                    {
                        "label": "ゆき (Yuki)",
                        "isCorrect": true
                    },
                    {
                        "label": "あめ (Ame)",
                        "isCorrect": false
                    },
                    {
                        "label": "はれ (Hare)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual a tradução de 'Ame ga furimasu'?",
                "options": [
                    {
                        "label": "Está chovendo / Vai chover",
                        "isCorrect": true
                    },
                    {
                        "label": "Está fazendo sol",
                        "isCorrect": false
                    },
                    {
                        "label": "Está nevando",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. O que significa a expressão 'to omoimasu' no final da frase?",
                "options": [
                    {
                        "label": "Acho que... / Penso que...",
                        "isCorrect": true
                    },
                    {
                        "label": "Com certeza...",
                        "isCorrect": false
                    },
                    {
                        "label": "Não quero...",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Como se diz 'Tempo ensolarado / limpo'?",
                "options": [
                    {
                        "label": "はれ (Hare)",
                        "isCorrect": true
                    },
                    {
                        "label": "くもり (Kumori)",
                        "isCorrect": false
                    },
                    {
                        "label": "あめ (Ame)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Traduza: 'Kyou wa ii tenki desu'",
                "options": [
                    {
                        "label": "Hoje o tempo está bom",
                        "isCorrect": true
                    },
                    {
                        "label": "Hoje vai chover muito",
                        "isCorrect": false
                    },
                    {
                        "label": "Hoje está muito frio",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "きょう は はれ て いい てんき です",
                "translation": "Hoje está ensolarado e um tempo bom.",
                "chunks": [
                    "きょう",
                    "は",
                    "はれ",
                    "て",
                    "いい",
                    "てんき",
                    "です"
                ]
            },
            {
                "sentenceJp": "あした は あめ が ふる でしょう",
                "translation": "Amanhã provavelmente choverá.",
                "chunks": [
                    "あした",
                    "は",
                    "あめ",
                    "が",
                    "ふる",
                    "でしょう"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Olhando para o céu nublado de Tokyo de manhã.",
                "npcName": "Hinata",
                "npcMessage": "Kyou no tenki wa dou desu ka? (Como está o tempo hoje?)",
                "options": [
                    {
                        "text": "Ame ga furu to omoimasu. (Acho que vai chover.)",
                        "feedback": "Excelente uso de 'to omoimasu'!",
                        "isCorrect": true
                    },
                    {
                        "text": "Ame o tabemasu.",
                        "feedback": "Disse que come chuva.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ohayou gozaimasu!",
                        "feedback": "Saudação fora de assunto.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Hinata pergunta sobre a sua estação do ano favorita no Japão.",
                "npcName": "Hinata",
                "npcMessage": "Nihon no kisetsu de dore ga一番 suki desu ka? (Das estações do Japão, de qual gosta mais?)",
                "options": [
                    {
                        "text": "Haru ga suki desu! Sakura ga kirei desu kara. (Gosto da primavera! Porque a cerejeira é bonita.)",
                        "feedback": "Resposta riquíssima!",
                        "isCorrect": true
                    },
                    {
                        "text": "Fuyu wa oishii desu.",
                        "feedback": "Disse que o inverno é gostoso.",
                        "isCorrect": false
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Conversando sobre o inverno em Hokkaido.",
                "npcName": "Hinata",
                "npcMessage": "Hokkaido no fuyu wa samui desu ka? (O inverno em Hokkaido é frio?)",
                "options": [
                    {
                        "text": "Hai, yuki gaたくさん furimasu! (Sim, cai muita neve!)",
                        "feedback": "Perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, atsui desu.",
                        "feedback": "Disse que o inverno em Hokkaido é quente.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida sem nexo.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Como se traduz 'Ashita wa hare to omoimasu'?",
                "options": [
                    "Acho que amanhã estará ensolarado",
                    "Amanhã com certeza vai chover",
                    "Hoje o dia está ensolarado"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'あめ' (Ame)?",
                "options": [
                    "Chuva",
                    "Neve",
                    "Tempo limpo / Ensolarado"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ゆき' (Yuki)?",
                "options": [
                    "Chuva",
                    "Neve",
                    "Tempo limpo / Ensolarado"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'はれ' (Hare)?",
                "options": [
                    "Neve",
                    "Chuva",
                    "Tempo limpo / Ensolarado"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'あめ が ふります' (Ame ga furimasu)?",
                "options": [
                    "Chover / Cair chuva",
                    "Chuva",
                    "Neve"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_22",
        "title": "Na Farmácia e no Médico",
        "section": 5,
        "sectionTitle": "Saúde, Clima e Sentimentos",
        "level": "A2",
        "xpReward": 110,
        "stage1_context": {
            "audioGuide": "Atama ga itai desu!",
            "missionTitle": "Expressando Sintomas de Saúde",
            "missionDescription": "Aprenda a explicar o que está sentindo ao farmaucêutico ou médico: dor de cabeça, febre, dor de barriga ou resfriado."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "いたい",
                "romaji": "Itai",
                "translation": "Dói / Com dor",
                "timeContext": "Sensação dolorosa num local do corpo."
            },
            {
                "type": "vocab",
                "kanji": "あたま",
                "romaji": "Atama",
                "translation": "Cabeça",
                "timeContext": "Parte do corpo."
            },
            {
                "type": "vocab",
                "kanji": "おなか",
                "romaji": "Onaka",
                "translation": "Barriga / Estômago",
                "timeContext": "Região abdominal."
            },
            {
                "type": "vocab",
                "kanji": "ねつ",
                "romaji": "Netsu",
                "translation": "Febre",
                "timeContext": "Sintoma de infecção/resfriado."
            },
            {
                "type": "grammar_pill",
                "title": "Explicando Dor no Corpo",
                "rule": "Para dizer que uma parte do corpo está doendo, usamos a estrutura: [ Parte do Corpo ] + が いたい です (ga itai desu).",
                "formula": "[ Parte do Corpo ] + が いたい です",
                "example": "Atama ga itai desu ➔ Estou com dor de cabeça."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se diz 'Estou com dor de cabeça' em japonês?",
                "options": [
                    {
                        "label": "Atama ga itai desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Atama o tabemasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Atama ni ikimasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como informar que está com dor de barriga na farmácia?",
                "options": [
                    {
                        "label": "Onaka ga itai desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Onaka ga suki desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Onaka ga oishii desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual é a palavra para 'Febre'?",
                "options": [
                    {
                        "label": "ねつ (Netsu)",
                        "isCorrect": true
                    },
                    {
                        "label": "くすり (Kusuri)",
                        "isCorrect": false
                    },
                    {
                        "label": "びょういん (Byouin)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. O que significa 'Kaze' no contexto de saúde?",
                "options": [
                    {
                        "label": "Resfriado / Gripe",
                        "isCorrect": true
                    },
                    {
                        "label": "Remédio para dor",
                        "isCorrect": false
                    },
                    {
                        "label": "Injeção",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como pedir 'Remédio por favor' na farmácia?",
                "options": [
                    {
                        "label": "Kusuri o o-negai shimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Kusuri o tabete imasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Kusuri o nomitai desu ka",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "わたしの しゅみ は おんがく を きく こと です",
                "translation": "Meu hobby é ouvir música.",
                "chunks": [
                    "わたしの",
                    "しゅみ",
                    "は",
                    "おんがく",
                    "を",
                    "きく",
                    "こと",
                    "です"
                ]
            },
            {
                "sentenceJp": "しゃしん を とる こと が すき です",
                "translation": "Gosto de tirar fotos.",
                "chunks": [
                    "しゃしん",
                    "を",
                    "とる",
                    "こと",
                    "が",
                    "すき",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você entra numa farmácia (Drugstore) japonesa sem se sentir bem.",
                "npcName": "Farmacêutico",
                "npcMessage": "Dou shimashita ka? (O que aconteceu / O que está sentindo?)",
                "options": [
                    {
                        "text": "Kino kara atama ga itai desu. Kusuri o o-negai shimasu. (Desde ontem estou com dor de cabeça. Remédio por favor.)",
                        "feedback": "Explicação clara e precisa!",
                        "isCorrect": true
                    },
                    {
                        "text": "Atama ga oishii desu.",
                        "feedback": "Disse que a cabeça é gostosa.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Foi embora sem comprar o remédio.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O médico examina e pergunta sobre febre.",
                "npcName": "Médico",
                "npcMessage": "Netsu ga arimasu ka? (Você está com febre?)",
                "options": [
                    {
                        "text": "Hai, 38-do no netsu ga arimasu. (Sim, estou com 38 graus de febre.)",
                        "feedback": "Informação médica excelente!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    },
                    {
                        "text": "Arigatou gozaimasu!",
                        "feedback": "Agradeceu sem responder à medição.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O médico entrega a receita e dá orientações.",
                "npcName": "Médico",
                "npcMessage": "Kono kusuri o 1-nichi 3-kai nonde kudasai. (Tome este remédio 3 vezes ao dia.)",
                "options": [
                    {
                        "text": "Wakarimashita. Arigatou gozaimasu! (Entendi. Muito obrigado!)",
                        "feedback": "Agradecimento perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Kusuri wa kirai desu.",
                        "feedback": "Disse que odeia remédio na frente do médico.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas sem motivo.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a fórmula para dizer que uma parte do corpo dói?",
                "options": [
                    "[Parte do Corpo] + ga itai desu",
                    "[Parte do Corpo] + o itai desu",
                    "[Parte do Corpo] + ni itai desu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'いたい' (Itai)?",
                "options": [
                    "Dói / Com dor",
                    "Cabeça",
                    "Barriga / Estômago"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'あたま' (Atama)?",
                "options": [
                    "Dói / Com dor",
                    "Cabeça",
                    "Barriga / Estômago"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'おなか' (Onaka)?",
                "options": [
                    "Cabeça",
                    "Dói / Com dor",
                    "Barriga / Estômago"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'ねつ' (Netsu)?",
                "options": [
                    "Febre",
                    "Dói / Com dor",
                    "Cabeça"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_23",
        "title": "Expressando Necessidade",
        "section": 5,
        "sectionTitle": "Saúde, Clima e Sentimentos",
        "level": "A2",
        "xpReward": 115,
        "stage1_context": {
            "audioGuide": "Kusuri o nomanakereba narimasen!",
            "missionTitle": "Dizendo 'Tenho que fazer...'",
            "missionDescription": "Aprenda a expressar obrigações e necessidades essenciais do dia a dia: 'Tenho que tomar o remédio', 'Tenho que estudar' ou 'Tenho que ir para casa'."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "のまなければ なりません",
                "romaji": "Nomanakereba narimasen",
                "translation": "Tenho que tomar / Devo beber",
                "timeContext": "Obrigação medicamentosa ou de consumo."
            },
            {
                "type": "vocab",
                "kanji": "いかなければ なりません",
                "romaji": "Ikanakereba narimasen",
                "translation": "Tenho que ir / Devo ir",
                "timeContext": "Compromisso inadiável."
            },
            {
                "type": "vocab",
                "kanji": "べんきょう しなければ なりません",
                "romaji": "Benkyou shinakereba narimasen",
                "translation": "Tenho que estudar",
                "timeContext": "Dever acadêmico."
            },
            {
                "type": "vocab",
                "kanji": "かえらなければ なりません",
                "romaji": "Kaeranakereba narimasen",
                "translation": "Tenho que voltar / ir para casa",
                "timeContext": "Horário limite."
            },
            {
                "type": "grammar_pill",
                "title": "Expressando Obrigação (~nakereba narimasen)",
                "rule": "A estrutura Forma NAI (sem nai) + ければ なりません (kereba narimasen) indica uma necessidade absoluta ('tenho que...').",
                "formula": "[ Verbo Forma NAI (sem nai) ] + ければ なりません",
                "example": "Kusuri o nomanakereba narimasen ➔ Tenho que tomar o remédio."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como se diz 'Tenho que estudar' em japonês?",
                "options": [
                    {
                        "label": "Benkyou shinakereba narimasen",
                        "isCorrect": true
                    },
                    {
                        "label": "Benkyou shite mo ii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Benkyou shite wa ikemasen",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual expressão indica 'Tenho que tomar o remédio'?",
                "options": [
                    {
                        "label": "Kusuri o nomanakereba narimasen",
                        "isCorrect": true
                    },
                    {
                        "label": "Kusuri o nomitai desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Kusuri o nonde imasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Uchi ni kaeranakereba narimasen'",
                "options": [
                    {
                        "label": "Tenho que voltar para casa",
                        "isCorrect": true
                    },
                    {
                        "label": "Quero ir para casa",
                        "isCorrect": false
                    },
                    {
                        "label": "Não posso ir para casa",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. O que a estrutura ~nakereba narimasen expressa?",
                "options": [
                    {
                        "label": "Uma obrigação / necessidade incontornável",
                        "isCorrect": true
                    },
                    {
                        "label": "Um pedido educado de favor",
                        "isCorrect": false
                    },
                    {
                        "label": "Uma permissão simples",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como fica a obrigação de 'Ir' (Ikimasu ➔ Ikanai):",
                "options": [
                    {
                        "label": "Ikanakereba narimasen",
                        "isCorrect": true
                    },
                    {
                        "label": "Ikite wa ikemasen",
                        "isCorrect": false
                    },
                    {
                        "label": "Ikitai desu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "わたし は にほんご を はなす こと が できます",
                "translation": "Eu consigo falar japonês.",
                "chunks": [
                    "わたし",
                    "は",
                    "にほんご",
                    "を",
                    "はなす",
                    "こと",
                    "が",
                    "できます"
                ]
            },
            {
                "sentenceJp": "かんじ を よむ こと が できます か",
                "translation": "Você consegue ler kanji?",
                "chunks": [
                    "かんじ",
                    "を",
                    "よむ",
                    "こと",
                    "が",
                    "できます",
                    "か"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Está ficando tarde num encontro de amigos e você precisa ir embora.",
                "npcName": "Renan",
                "npcMessage": "[Seu Nome]-san, mou kaerimasu ka? (Você já vai para casa?)",
                "options": [
                    {
                        "text": "Hai, ashita shigoto ga arimasu kara, kaeranakereba narimasen. (Sim, como tenho trabalho amanhã, tenho que voltar.)",
                        "feedback": "Explicação lógica e correta!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse 'não, durmo'.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ohayou gozaimasu!",
                        "feedback": "Saudação matinal de noite.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Um amigo te convida para passear na véspera da prova.",
                "npcName": "Renan",
                "npcMessage": "Ashita eiga ni ikimasu ka? (Vamos ao cinema amanhã?)",
                "options": [
                    {
                        "text": "Gomen nasai, ashita testo ga arimasu kara, benkyou shinakereba narimasen. (Desculpe, como tenho prova amanhã, tenho que estudar.)",
                        "feedback": "Recusa extremamente bem justificada!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hai, benkyou shite wa ikemasen.",
                        "feedback": "Disse que é proibido estudar.",
                        "isCorrect": false
                    },
                    {
                        "text": "Oishii desu!",
                        "feedback": "Disse que é gostoso.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Lembrete de tomar a medicação.",
                "npcName": "Renan",
                "npcMessage": "Daijoubu desu ka? Kaoiro ga warui desu yo. (Tudo bem? Sua cara não está boa.)",
                "options": [
                    {
                        "text": "Kusuri o nomanakereba narimasen. Chotto matte kudasai. (Tenho que tomar o remédio. Espere um pouco por favor.)",
                        "feedback": "Muito bem!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hai, tabemashita.",
                        "feedback": "Disse que comeu.",
                        "isCorrect": false
                    },
                    {
                        "text": "Doko desu ka?",
                        "feedback": "Perguntou onde fica.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual o significado da estrutura ~nakereba narimasen?",
                "options": [
                    "Tenho que... / É necessário...",
                    "Posso fazer...",
                    "Não debo fazer..."
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'のまなければ なりません' (Nomanakereba narimasen)?",
                "options": [
                    "Tenho que tomar / Devo beber",
                    "Tenho que ir / Devo ir",
                    "Tenho que estudar"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'いかなければ なりません' (Ikanakereba narimasen)?",
                "options": [
                    "Tenho que tomar / Devo beber",
                    "Tenho que ir / Devo ir",
                    "Tenho que estudar"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'べんきょう しなければ なりません' (Benkyou shinakereba narimasen)?",
                "options": [
                    "Tenho que ir / Devo ir",
                    "Tenho que tomar / Devo beber",
                    "Tenho que estudar"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'かえらなければ なりません' (Kaeranakereba narimasen)?",
                "options": [
                    "Tenho que voltar / ir para casa",
                    "Tenho que tomar / Devo beber",
                    "Tenho que ir / Devo ir"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_24",
        "title": "Dando Conselhos Leves",
        "section": 5,
        "sectionTitle": "Saúde, Clima e Sentimentos",
        "level": "A2",
        "xpReward": 115,
        "stage1_context": {
            "audioGuide": "Motto yasundahou ga ii desu yo!",
            "missionTitle": "Recomendando Cuidados (...hou ga ii)",
            "missionDescription": "Aprenda a dar conselhos empáticos e leves a amigos que estão cansados ou doentes: 'É melhor você descansar', 'É melhor ir ao médico'."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "やすんだ ほう が いい",
                "romaji": "Yasunda hou ga ii",
                "translation": "É melhor descansar",
                "timeContext": "Conselho para quem está cansado."
            },
            {
                "type": "vocab",
                "kanji": "びょういん に いった ほう が いい",
                "romaji": "Byouin ni itta hou ga ii",
                "translation": "É melhor ir ao médico",
                "timeContext": "Recomendação de saúde."
            },
            {
                "type": "vocab",
                "kanji": "くすり を のんだ ほう が いい",
                "romaji": "Kusuri o nonda hou ga ii",
                "translation": "É melhor tomar remédio",
                "timeContext": "Conselho farmacêutico."
            },
            {
                "type": "vocab",
                "kanji": "もっと",
                "romaji": "Motto",
                "translation": "Mais",
                "timeContext": "Intensificador de quantidade/grau."
            },
            {
                "type": "grammar_pill",
                "title": "Dando Conselhos (...ta hou ga ii)",
                "rule": "Usamos o verbo no passado informal (Forma TA) + ほう が いい です (hou ga ii desu) para dizer 'é melhor você fazer tal coisa'.",
                "formula": "[ Verbo Forma TA ] + ほう が いい です",
                "example": "Motto yasunda hou ga ii desu ➔ É melhor você descansar mais."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como dar o conselho 'É melhor descansar mais'?",
                "options": [
                    {
                        "label": "Motto yasunda hou ga ii desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Motto yasumimasu hou ga ii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Motto yasumi hou ga ii desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como recomendar a um amigo 'É melhor ir ao médico'?",
                "options": [
                    {
                        "label": "Byouin ni itta hou ga ii desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Byouin ni ikimasu hou ga ii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Byouin ni ikitai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual forma verbal antecede a expressão 'hou ga ii desu' para conselhos afirmativos?",
                "options": [
                    {
                        "label": "Forma TA (Passado informal)",
                        "isCorrect": true
                    },
                    {
                        "label": "Forma TE",
                        "isCorrect": false
                    },
                    {
                        "label": "Forma MASU",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza: 'Kusuri o nonda hou ga ii desu'",
                "options": [
                    {
                        "label": "É melhor tomar remédio",
                        "isCorrect": true
                    },
                    {
                        "label": "Tenho que tomar remédio",
                        "isCorrect": false
                    },
                    {
                        "label": "Não posso tomar remédio",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. O que a partícula 'yo' no final da frase reforça no conselho?",
                "options": [
                    {
                        "label": "Um tom amigável e empático de recomendação",
                        "isCorrect": true
                    },
                    {
                        "label": "Uma dúvida",
                        "isCorrect": false
                    },
                    {
                        "label": "Uma proibição severa",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "あした は はやく おきなければ なりません",
                "translation": "Amanhã preciso acordar cedo.",
                "chunks": [
                    "あした",
                    "は",
                    "はやく",
                    "おきなければ",
                    "なりません"
                ]
            },
            {
                "sentenceJp": "しゅくだい を しなければ なりません",
                "translation": "Preciso fazer a lição de casa.",
                "chunks": [
                    "しゅくだい",
                    "を",
                    "しなければ",
                    "なりません"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Seu amigo japonês parece muito cansado após o trabalho.",
                "npcName": "Takashi",
                "npcMessage": "Kyoo wa totemo tsukaremashita... (Hoje estou muito cansado...)",
                "options": [
                    {
                        "text": "Konban wa motto yasunda hou ga ii desu yo. (É melhor você descansar mais esta noite.)",
                        "feedback": "Conselho empático e carinhoso!",
                        "isCorrect": true
                    },
                    {
                        "text": "Motto tabete wa ikemasen.",
                        "feedback": "Disse que é proibido comer mais.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O amigo reclama de febre alta.",
                "npcName": "Takashi",
                "npcMessage": "Netsu ga 38-do arimasu... (Estou com 38 graus de febre...)",
                "options": [
                    {
                        "text": "Haaku byouin ni itta hou ga ii desu yo! (É melhor ir ao médico logo!)",
                        "feedback": "Conselho indispensável!",
                        "isCorrect": true
                    },
                    {
                        "text": "Gakkou ni ikitai desu.",
                        "feedback": "Disse que quer ir à escola.",
                        "isCorrect": false
                    },
                    {
                        "text": "Oishii desu!",
                        "feedback": "Fora do assunto.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O amigo agradece a sua recomendação.",
                "npcName": "Takashi",
                "npcMessage": "Arigatou gozaimasu. Sou shimasu. (Obrigado. Farei isso.)",
                "options": [
                    {
                        "text": "O-daiji ni! (Estimadas melhoras!)",
                        "feedback": "Expressão japonesa perfeita para quem está doente!",
                        "isCorrect": true
                    },
                    {
                        "text": "Itadakimasu!",
                        "feedback": "Disse bom apetite.",
                        "isCorrect": false
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a expressão usada em japonês para desejar melhoras a alguém doente?",
                "options": [
                    "おだいじに (O-daiji ni)",
                    "おめでとう (Omedetou)",
                    "いただきます (Itadakimasu)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'やすんだ ほう が いい' (Yasunda hou ga ii)?",
                "options": [
                    "É melhor descansar",
                    "É melhor ir ao médico",
                    "É melhor tomar remédio"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'びょういん に いった ほう が いい' (Byouin ni itta hou ga ii)?",
                "options": [
                    "É melhor descansar",
                    "É melhor ir ao médico",
                    "É melhor tomar remédio"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'くすり を のんだ ほう が いい' (Kusuri o nonda hou ga ii)?",
                "options": [
                    "É melhor ir ao médico",
                    "É melhor descansar",
                    "É melhor tomar remédio"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'もっと' (Motto)?",
                "options": [
                    "Mais",
                    "É melhor descansar",
                    "É melhor ir ao médico"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_25",
        "title": "Explicando Motivos e Razões",
        "section": 5,
        "sectionTitle": "Saúde, Clima e Sentimentos",
        "level": "A2",
        "xpReward": 115,
        "stage1_context": {
            "audioGuide": "Ame ga furite imasu kara, ikimasen!",
            "missionTitle": "Conectando Causa e Efeito (Kara & Nde)",
            "missionDescription": "Aprenda a explicar o motivo das suas decisões: 'Não fui porque estava doente' ou 'Vou levar guarda-chuva porque vai chover'."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "から",
                "romaji": "Kara",
                "translation": "Porque / Pois (Razão direta)",
                "timeContext": "Usado para explicar o motivo no final da causa."
            },
            {
                "type": "vocab",
                "kanji": "ので / んで",
                "romaji": "Node / Nde",
                "translation": "Porque / Como (Razão suave)",
                "timeContext": "Explicação suave/educada."
            },
            {
                "type": "vocab",
                "kanji": "びょうき",
                "romaji": "Byouki",
                "translation": "Doença / Doente",
                "timeContext": "Estado de saúde."
            },
            {
                "type": "vocab",
                "kanji": "じかん が ない",
                "romaji": "Jikan ga nai",
                "translation": "Não ter tempo",
                "timeContext": "Motivo de falta de tempo."
            },
            {
                "type": "grammar_pill",
                "title": "Explicando Razões com から (Kara)",
                "rule": "Colocamos から (kara) logo após a causa ou motivo. A ordem no japonês é: [ Causa ] + から + [ Consequência ].",
                "formula": "[ Causa / Motivo ] + から + [ Ação / Consequência ]",
                "example": "Jikan ga arimasen kara, ikimasen ➔ Porque não tenho tempo, não irei."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Onde é colocada a palavra から (kara) para indicar 'porque'?",
                "options": [
                    {
                        "label": "Logo após a frase que explica o motivo/causa",
                        "isCorrect": true
                    },
                    {
                        "label": "No início absoluto de toda a frase",
                        "isCorrect": false
                    },
                    {
                        "label": "Após a consequência",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Traduza: 'Atsui desu kara, mizu o nomimasu'",
                "options": [
                    {
                        "label": "Porque está quente, beberei água",
                        "isCorrect": true
                    },
                    {
                        "label": "Bebo água porque está frio",
                        "isCorrect": false
                    },
                    {
                        "label": "Não bebo água no calor",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual é a ordem das ideias na frase comparada ao português?",
                "options": [
                    {
                        "label": "Causa primeiro + Kara, depois a Consequência",
                        "isCorrect": true
                    },
                    {
                        "label": "Consequência primeiro, depois Kara + Causa",
                        "isCorrect": false
                    },
                    {
                        "label": "A ordem é exatamente idêntica ao português",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Como explicar 'Não fui porque estava doente'?",
                "options": [
                    {
                        "label": "Byouki deshita kara, ikimasen deshita",
                        "isCorrect": true
                    },
                    {
                        "label": "Ikimasen deshita kara, byouki deshita",
                        "isCorrect": false
                    },
                    {
                        "label": "Byouki kara ikimasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual a diferença de tom entre 'Kara' e 'Node'?",
                "options": [
                    {
                        "label": "Node é mais suave e educado; Kara é mais direto",
                        "isCorrect": true
                    },
                    {
                        "label": "Kara é só para o passado; Node é para o futuro",
                        "isCorrect": false
                    },
                    {
                        "label": "Não há diferença alguma",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "もっと やさい を たべた ほう が いい です",
                "translation": "É melhor comer mais verduras.",
                "chunks": [
                    "もっと",
                    "やさい",
                    "を",
                    "たべた",
                    "ほう",
                    "が",
                    "いい",
                    "です"
                ]
            },
            {
                "sentenceJp": "きょう は はやく ねた ほう が いい です",
                "translation": "É melhor ir dormir cedo hoje.",
                "chunks": [
                    "きょう",
                    "は",
                    "はやく",
                    "ねた",
                    "ほう",
                    "が",
                    "いい",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: O professor pergunta por que você faltou à aula ontem.",
                "npcName": "Sensei",
                "npcMessage": "[Seu Nome]-san, kinou wa naze yasumimashita ka? (Por que você faltou ontem?)",
                "options": [
                    {
                        "text": "Netsu ga arimashita kara, yasumimashita. (Porque eu estava com febre, faltei.)",
                        "feedback": "Explicação gramatical impecável!",
                        "isCorrect": true
                    },
                    {
                        "text": "Kinou wa oishii desu kara.",
                        "feedback": "Disse 'porque ontem estava gostoso'.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ohayou gozaimasu!",
                        "feedback": "Saudação fora de contexto.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Um amigo pergunta por que você não comeu o bolo.",
                "npcName": "Emi",
                "npcMessage": "Kooki o tabemasen ka? (Não vai comer o bolo?)",
                "options": [
                    {
                        "text": "O-naka ga ippai desu kara, tabemasen. (Porque estou cheio, não vou comer.)",
                        "feedback": "Perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Kooki wa nemasu kara.",
                        "feedback": "Disse 'porque o bolo dorme'.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despediu-se de repente.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Explicando por que você vai de táxi em vez de ir a pé.",
                "npcName": "Emi",
                "npcMessage": "Naze takushi-i ni norimasu ka? (Por que vai pegar táxi?)",
                "options": [
                    {
                        "text": "Jikan ga arimasen kara! (Porque não tenho tempo!)",
                        "feedback": "Excelente justificativa!",
                        "isCorrect": true
                    },
                    {
                        "text": "Jikan ga oishii desu kara.",
                        "feedback": "Frase sem sentido.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas à toa.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a ordem da estrutura de causa e efeito com 'kara'?",
                "options": [
                    "[Causa] + kara + [Consequência]",
                    "[Consequência] + kara + [Causa]",
                    "kara + [Causa] + [Consequência]"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'から' (Kara)?",
                "options": [
                    "Porque / Pois (Razão direta)",
                    "Porque / Como (Razão suave)",
                    "Doença / Doente"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ので / んで' (Node / Nde)?",
                "options": [
                    "Porque / Pois (Razão direta)",
                    "Porque / Como (Razão suave)",
                    "Doença / Doente"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'びょうき' (Byouki)?",
                "options": [
                    "Porque / Como (Razão suave)",
                    "Porque / Pois (Razão direta)",
                    "Doença / Doente"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'じかん が ない' (Jikan ga nai)?",
                "options": [
                    "Não ter tempo",
                    "Porque / Pois (Razão direta)",
                    "Porque / Como (Razão suave)"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_26",
        "title": "Fazendo Convites",
        "section": 6,
        "sectionTitle": "Vida Social, Interações e Convites",
        "level": "A2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Issho ni kohii o nomimashou!",
            "missionTitle": "Convidando Amigos (...mashou / ...masen ka)",
            "missionDescription": "Aprenda as estruturas para fazer convites sociais em japonês: 'Vamos tomar um café juntos?' ou 'Que tal irmos ao cinema?'."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "いっしょ に",
                "romaji": "Issho ni",
                "translation": "Juntos(as)",
                "timeContext": "Companhia em atividades sociais."
            },
            {
                "type": "vocab",
                "kanji": "いきましょう",
                "romaji": "Ikimashou",
                "translation": "Vamos ir! / Vamos lá!",
                "timeContext": "Proposição entusiasmada."
            },
            {
                "type": "vocab",
                "kanji": "いきませんか",
                "romaji": "Ikimasen ka",
                "translation": "Gostaria de ir? / Que tal irmos?",
                "timeContext": "Convite educado e considerado."
            },
            {
                "type": "vocab",
                "kanji": "いい です ね",
                "romaji": "Ii desu ne",
                "translation": "Que boa ideia! / Vamos sim!",
                "timeContext": "Aceitação entusiasmada."
            },
            {
                "type": "grammar_pill",
                "title": "Convites com ~masen ka vs ~mashou",
                "rule": "~masen ka é um convite cortês ('não gostaria de...?'), dando espaço para o outro recusar. ~mashou é uma proposta animada ('vamos fazer!').",
                "formula": "[ Verbo (sem masu) ] + ませんか / ましょう",
                "example": "Issho ni tabemasen ka ➔ Não gostaria de comer comigo? | Tabemashou! ➔ Vamos comer!"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como convidar educadamente 'Que tal tomarmos um café juntos?'",
                "options": [
                    {
                        "label": "Issho ni kohii o nomimasen ka?",
                        "isCorrect": true
                    },
                    {
                        "label": "Issho ni kohii o nomimashou ka?",
                        "isCorrect": false
                    },
                    {
                        "label": "Issho ni kohii o nomitai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual expressão significa 'Vamos!' de forma animada?",
                "options": [
                    {
                        "label": "~mashou! (ましょう)",
                        "isCorrect": true
                    },
                    {
                        "label": "~masen! (ません)",
                        "isCorrect": false
                    },
                    {
                        "label": "~mashita! (ました)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. O que significa a palavra 'Issho ni'?",
                "options": [
                    {
                        "label": "Juntos(as)",
                        "isCorrect": true
                    },
                    {
                        "label": "Sozinho(a)",
                        "isCorrect": false
                    },
                    {
                        "label": "Amanhã",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza a resposta entusiasta: 'Ii desu ne!'",
                "options": [
                    {
                        "label": "Que boa ideia! / Vamos sim!",
                        "isCorrect": true
                    },
                    {
                        "label": "Não posso ir",
                        "isCorrect": false
                    },
                    {
                        "label": "Quanto custa?",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Escolha o convite para 'Vamos almoçar juntos':",
                "options": [
                    {
                        "label": "Issho ni hirugohan o tabemashou!",
                        "isCorrect": true
                    },
                    {
                        "label": "Issho ni hirugohan o tabemasen",
                        "isCorrect": false
                    },
                    {
                        "label": "Issho ni hirugohan o tabemashita",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "らいねん にほん に いこう と おもっています",
                "translation": "Pretendo ir ao Japão no ano que vem.",
                "chunks": [
                    "らいねん",
                    "にほん",
                    "に",
                    "いこう",
                    "と",
                    "おもっています"
                ]
            },
            {
                "sentenceJp": "あたらしい くるま を かう つもり です",
                "translation": "Pretendo comprar um carro novo.",
                "chunks": [
                    "あたらしい",
                    "くるま",
                    "を",
                    "かう",
                    "つもり",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Sexta-feira no fim do expediente, convidando um colega para tomar café.",
                "npcName": "Ren",
                "npcMessage": "[Seu Nome]-san, issho ni kohii o nomimasen ka? (Não quer tomar um café comigo?)",
                "options": [
                    {
                        "text": "Ii desu ne! Ikimashou! (Que boa ideia! Vamos sim!)",
                        "feedback": "Aceitação perfeita e animada!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Recusa seca dizendo que vai dormir.",
                        "isCorrect": false
                    },
                    {
                        "text": "Kore wa ikura desu ka?",
                        "feedback": "Perguntou o preço do convite.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Propondo ir ao cinema no fim de semana.",
                "npcName": "Ren",
                "npcMessage": "Shuumatsu eiga o mimasen ka? (Que tal vermos um filme no fim de semana?)",
                "options": [
                    {
                        "text": "Ii desu ne! Nani o mimasu ka? (Ótimo! O que vamos assistir?)",
                        "feedback": "Engajamento excelente no diálogo!",
                        "isCorrect": true
                    },
                    {
                        "text": "Eiga wa oishii desu.",
                        "feedback": "Disse que o filme é gostoso.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai, sayounara!",
                        "feedback": "Despediu-se de forma estranha.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Na hora de ir embora do restaurante, propondo pegar o trem juntos.",
                "npcName": "Ren",
                "npcMessage": "Issho ni eki made arukimashou! (Vamos caminhar até a estação juntos!)",
                "options": [
                    {
                        "text": "Hai, arukimashou! (Sim, vamos caminhar!)",
                        "feedback": "Sensacional!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemasu.",
                        "feedback": "Disse que vai comer.",
                        "isCorrect": false
                    },
                    {
                        "text": "Kore wa hon desu.",
                        "feedback": "Fora de assunto.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Por que ~masen ka é considerado um convite mais educado do que ~mashou?",
                "options": [
                    "Porque dá espaço e liberdade para a outra pessoa recusar sem constrangimento",
                    "Porque é no passado",
                    "Porque significa que você não quer ir"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'いっしょ に' (Issho ni)?",
                "options": [
                    "Juntos(as)",
                    "Vamos ir! / Vamos lá!",
                    "Gostaria de ir? / Que tal irmos?"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'いきましょう' (Ikimashou)?",
                "options": [
                    "Juntos(as)",
                    "Vamos ir! / Vamos lá!",
                    "Gostaria de ir? / Que tal irmos?"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'いきませんか' (Ikimasen ka)?",
                "options": [
                    "Vamos ir! / Vamos lá!",
                    "Juntos(as)",
                    "Gostaria de ir? / Que tal irmos?"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'いい です ね' (Ii desu ne)?",
                "options": [
                    "Que boa ideia! / Vamos sim!",
                    "Juntos(as)",
                    "Vamos ir! / Vamos lá!"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_27",
        "title": "Aceitando e Recusando com Delicadeza",
        "section": 6,
        "sectionTitle": "Vida Social, Interações e Convites",
        "level": "A2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Sumimasen, chotto...",
            "missionTitle": "Etiqueta Social ao Responder Convites",
            "missionDescription": "Aprenda a recusar convites com a extrema delicadeza japonesa usando 'Chotto...' sem soar indelicado ou direto demais."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "ぜひ",
                "romaji": "Zehi",
                "translation": "Com certeza! / Adoraria!",
                "timeContext": "Entusiasmo ao aceitar um convite."
            },
            {
                "type": "vocab",
                "kanji": "ちょっと...",
                "romaji": "Chotto...",
                "translation": "É que... (Recusa sutil)",
                "timeContext": "Frase incompleta usada para recusar polidamente."
            },
            {
                "type": "vocab",
                "kanji": "つぎ は ぜひ",
                "romaji": "Tsugi wa zehi",
                "translation": "Na próxima com certeza!",
                "timeContext": "Promessa para uma ocasião futura."
            },
            {
                "type": "vocab",
                "kanji": "ざんねん です が",
                "romaji": "Zannen desu ga",
                "translation": "Infelizmente / É uma pena, mas...",
                "timeContext": "Expressão de lamento ao recusar."
            },
            {
                "type": "grammar_pill",
                "title": "A Arte do 'Chotto...' para Recusar",
                "rule": "No Japão, dizer 'Iie' (Não) direto a um convite é visto como indelicado. Em vez disso, dizemos 'Chotto...' (É meio complicado/inconveniente) deixando a frase suspensa.",
                "formula": "[ Convite ] ➔ ざんねん です が、ちょっと... (Infelizmente, é meio inconveniente...)",
                "example": "Ashita wa chotto... ➔ Amanhã fica um pouco difícil para mim..."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como recusar delicadamente um convite em japonês?",
                "options": [
                    {
                        "label": "Zannen desu ga, chotto... (Infelizmente, fica meio difícil...)",
                        "isCorrect": true
                    },
                    {
                        "label": "Iie, kirai desu! (Não, odeio!)",
                        "isCorrect": false
                    },
                    {
                        "label": "Iie, ikimasen! (Não, não vou!)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. O que significa responder 'Zehi!' a um convite?",
                "options": [
                    {
                        "label": "Com certeza! / Adoraria!",
                        "isCorrect": true
                    },
                    {
                        "label": "Talvez outro dia",
                        "isCorrect": false
                    },
                    {
                        "label": "De jeito nenhum",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Por que se evita usar 'Iie' diretamente ao recusar um convite?",
                "options": [
                    {
                        "label": "Por ser considerado muito duro e indelicado na etiqueta japonesa",
                        "isCorrect": true
                    },
                    {
                        "label": "Porque é gramaticalmente errado",
                        "isCorrect": false
                    },
                    {
                        "label": "Porque significa 'sim'",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza: 'Tsugi wa zehi!'",
                "options": [
                    {
                        "label": "Na próxima com certeza!",
                        "isCorrect": true
                    },
                    {
                        "label": "Nunca mais nos veremos",
                        "isCorrect": false
                    },
                    {
                        "label": "Vamos agora mesmo",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual palavra indica lamento ('É uma pena / Infelizmente')?",
                "options": [
                    {
                        "label": "ざんねん (Zannen)",
                        "isCorrect": true
                    },
                    {
                        "label": "たのしい (Tanoshii)",
                        "isCorrect": false
                    },
                    {
                        "label": "うれしい (Ureshii)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "だんだん さむく なって きました",
                "translation": "Está ficando gradualmente frio.",
                "chunks": [
                    "だんだん",
                    "さむく",
                    "なって",
                    "きました"
                ]
            },
            {
                "sentenceJp": "にほんご が じょうず に なりました",
                "translation": "Ficou bom em japonês.",
                "chunks": [
                    "にほんご",
                    "が",
                    "じょうず",
                    "に",
                    "なりました"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Um colega te convida para jantar hoje à noite, mas você já tem outro compromisso.",
                "npcName": "Ken",
                "npcMessage": "[Seu Nome]-san, konban issho ni gohan o tabemasen ka? (Não quer jantar comigo hoje à noite?)",
                "options": [
                    {
                        "text": "Zannen desu ga, konban wa chotto... (Infelizmente, hoje à noite fica meio difícil...)",
                        "feedback": "Recusa perfeita dentro da etiqueta japonesa!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, kirai desu!",
                        "feedback": "Muito rude!",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Ken entende a recusa sutil e propõe marcar em outra data.",
                "npcName": "Ken",
                "npcMessage": "Sou desu ka. Ja, tsugi wa zehi! (Entendi. Então na próxima com certeza!)",
                "options": [
                    {
                        "text": "Hai, tsugi wa zehi! Arigatou gozaimasu. (Sim, na próxima com certeza! Obrigado.)",
                        "feedback": "Fechamento impecável!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    },
                    {
                        "text": "Kore wa ikura desu ka?",
                        "feedback": "Fora de assunto.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Um amigo te convida para uma viagem no fim de semana e você PODE ir.",
                "npcName": "Ken",
                "npcMessage": "Shuumatsu onsenn ni ikimasen ka? (Que tal irmos a uma fonte termal no fim de semana?)",
                "options": [
                    {
                        "text": "Zehi! Ikitai desu! (Adoraria! Quero muito ir!)",
                        "feedback": "Entusiasmo excelente!",
                        "isCorrect": true
                    },
                    {
                        "text": "Chotto... ikimasen.",
                        "feedback": "Misturou recusa sutil com negação direta.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas ao aceitar.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a forma mais educada de recusar um convite no Japão?",
                "options": [
                    "Zannen desu ga, chotto...",
                    "Iie, ikimasen",
                    "Dame desu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ぜひ' (Zehi)?",
                "options": [
                    "Com certeza! / Adoraria!",
                    "É que... (Recusa sutil)",
                    "Na próxima com certeza!"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ちょっと...' (Chotto...)?",
                "options": [
                    "Com certeza! / Adoraria!",
                    "É que... (Recusa sutil)",
                    "Na próxima com certeza!"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'つぎ は ぜひ' (Tsugi wa zehi)?",
                "options": [
                    "É que... (Recusa sutil)",
                    "Com certeza! / Adoraria!",
                    "Na próxima com certeza!"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'ざんねん です が' (Zannen desu ga)?",
                "options": [
                    "Infelizmente / É uma pena, mas...",
                    "Com certeza! / Adoraria!",
                    "É que... (Recusa sutil)"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_28",
        "title": "Dar e Receber Presentes/Favores",
        "section": 6,
        "sectionTitle": "Vida Social, Interações e Convites",
        "level": "A2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Ageru, Morau, Kureru!",
            "missionTitle": "Verbos de Dar e Receber",
            "missionDescription": "Entenda a perspectiva das trocas de presentes e favores em japonês: Ageru (dar), Morau (receber) e Kureru (dar para mim)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "あげる",
                "romaji": "Ageru",
                "translation": "Dar (para os outros)",
                "timeContext": "Ação de dar de mim para alguém."
            },
            {
                "type": "vocab",
                "kanji": "もらう",
                "romaji": "Morau",
                "translation": "Receber (de alguém)",
                "timeContext": "Ação de receber algo."
            },
            {
                "type": "vocab",
                "kanji": "くれる",
                "romaji": "Kureru",
                "translation": "Dar (alguém dá para MIM)",
                "timeContext": "Perspectiva de presente recebido por mim."
            },
            {
                "type": "vocab",
                "kanji": "おみやげ",
                "romaji": "Omiyage",
                "translation": "Lembrancinha / Souvenir",
                "timeContext": "Presentes de viagem tradicionais."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença entre Ageru e Kureru",
                "rule": "Ageru = Eu dou para alguém. Kureru = Alguém dá para MIM (ou para meu grupo familiar). Nunca use Ageru para quando alguém te dá algo!",
                "formula": "[ Eu ] は [ Pessoa ] に あげます | [ Pessoa ] は [ Mim ] に くれます",
                "example": "Tanaka-san ga watashi ni omiyage o kuremashita ➔ O Sr. Tanaka me deu uma lembrancinha."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Qual verbo usar quando ALGUÉM dá um presente para VOCÊ?",
                "options": [
                    {
                        "label": "くれる (Kureru)",
                        "isCorrect": true
                    },
                    {
                        "label": "あげる (Ageru)",
                        "isCorrect": false
                    },
                    {
                        "label": "もらう (Morau)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual verbo usar quando VOCÊ dá um presente para um amigo?",
                "options": [
                    {
                        "label": "あげる (Ageru)",
                        "isCorrect": true
                    },
                    {
                        "label": "くれる (Kureru)",
                        "isCorrect": false
                    },
                    {
                        "label": "もらう (Morau)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Tomodachi ni omiyage o agemashita'",
                "options": [
                    {
                        "label": "Dei uma lembrancinha para o meu amigo",
                        "isCorrect": true
                    },
                    {
                        "label": "Meu amigo me deu uma lembrancinha",
                        "isCorrect": false
                    },
                    {
                        "label": "Comprei uma lembrancinha",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. O que significa 'Omiyage' no Japão?",
                "options": [
                    {
                        "label": "Lembrancinha / Souvenir trazido de viagem",
                        "isCorrect": true
                    },
                    {
                        "label": "Comida estragada",
                        "isCorrect": false
                    },
                    {
                        "label": "Troco em dinheiro",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Se você RECEBEU algo de alguém, qual verbo pode usar?",
                "options": [
                    {
                        "label": "もらう (Morau) / もらいました",
                        "isCorrect": true
                    },
                    {
                        "label": "あげる (Ageru)",
                        "isCorrect": false
                    },
                    {
                        "label": "いります (Irimasu)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "ちょっと あたま が いたい ん です",
                "translation": "É que estou com um pouco de dor de cabeça.",
                "chunks": [
                    "ちょっと",
                    "あたま",
                    "が",
                    "いたい",
                    "ん",
                    "です"
                ]
            },
            {
                "sentenceJp": "バス が こなかった ん です",
                "translation": "É que o ônibus não veio.",
                "chunks": [
                    "バス",
                    "が",
                    "こなかった",
                    "ん",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você voltou do Japão e entrega um presente ao seu colega.",
                "npcName": "Hiro",
                "npcMessage": "Kore wa nan desu ka? (O que é isto?)",
                "options": [
                    {
                        "text": "Nihon no omiyage desu. Hiro-san ni agemasu! (É uma lembrancinha do Japão. Estou te dando!)",
                        "feedback": "Uso perfeito de agemasu!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hiro-san ni kuremasu.",
                        "feedback": "Erro: kureru é para quando dão para mim!",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida sem entrega.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Hiro fica super feliz com o presente.",
                "npcName": "Hiro",
                "npcMessage": "Wa! Arigatou gozaimasu! Ureshii desu! (Uau! Muito obrigado! Estou muito feliz!)",
                "options": [
                    {
                        "text": "Dou itashimashite! (De nada!)",
                        "feedback": "Resposta de nada cortês e adequada!",
                        "isCorrect": true
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas sem motivo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Um amigo te pergunta de onde veio o chaveiro bonito que você usa.",
                "npcName": "Hiro",
                "npcMessage": "Kono keyholder wa dou shimashita ka? (Como conseguiu este chaveiro?)",
                "options": [
                    {
                        "text": "Tanaka-san ga kuremashita! (O Sr. Tanaka me deu!)",
                        "feedback": "Sensacional uso de kuremashita!",
                        "isCorrect": true
                    },
                    {
                        "text": "Watashi ga agemashita.",
                        "feedback": "Disse que você deu a si mesmo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Oishii desu!",
                        "feedback": "Disse que é gostoso.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual verbo deve ser usado quando outra pessoa te dá um presente?",
                "options": [
                    "くれる (Kureru)",
                    "あげる (Ageru)",
                    "うる (Uru)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'あげる' (Ageru)?",
                "options": [
                    "Dar (para os outros)",
                    "Receber (de alguém)",
                    "Dar (alguém dá para MIM)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'もらう' (Morau)?",
                "options": [
                    "Dar (para os outros)",
                    "Receber (de alguém)",
                    "Dar (alguém dá para MIM)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'くれる' (Kureru)?",
                "options": [
                    "Receber (de alguém)",
                    "Dar (para os outros)",
                    "Dar (alguém dá para MIM)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'おみやげ' (Omiyage)?",
                "options": [
                    "Lembrancinha / Souvenir",
                    "Dar (para os outros)",
                    "Receber (de alguém)"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_29",
        "title": "Planos e Intenções para o Futuro",
        "section": 6,
        "sectionTitle": "Vida Social, Interações e Convites",
        "level": "A2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Rainen Nihon ni iku tsumori desu!",
            "missionTitle": "Expressando Planos com ...tsumori desu",
            "missionDescription": "Aprenda a falar sobre seus planos e metas para o futuro: 'Pretendo viajar no ano que vem', 'Pretendo comprar um carro'."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "つもり です",
                "romaji": "Tsumori desu",
                "translation": "Pretendo / Tenho a intenção de",
                "timeContext": "Planos e metas futuras."
            },
            {
                "type": "vocab",
                "kanji": "らいねん",
                "romaji": "Rainen",
                "translation": "Ano que vem",
                "timeContext": "Marcador de futuro de médio prazo."
            },
            {
                "type": "vocab",
                "kanji": "らいげつ",
                "romaji": "Raigetsu",
                "translation": "Mês que vem",
                "timeContext": "Futuro de curto prazo."
            },
            {
                "type": "vocab",
                "kanji": "りょこう する つもり です",
                "romaji": "Ryokou suru tsumori desu",
                "translation": "Pretendo viajar",
                "timeContext": "Plano de viagem."
            },
            {
                "type": "grammar_pill",
                "title": "Expressando Intenção (...tsumori desu)",
                "rule": "Usamos o verbo na forma neutra/dicionário + つもり です (tsumori desu) para afirmar uma intenção decidida de fazer algo.",
                "formula": "[ Verbo Forma Dicionário ] + つもり です",
                "example": "Rainen Nihon ni iku tsumori desu ➔ Pretendo ir ao Japão no ano que vem."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como expressar 'Pretendo viajar no mês que vem'?",
                "options": [
                    {
                        "label": "Raigetsu ryokou suru tsumori desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Raigetsu ryokou shimasu tsumori desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Raigetsu ryokou shimashita tsumori desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual palavra significa 'Ano que vem'?",
                "options": [
                    {
                        "label": "らいねん (Rainen)",
                        "isCorrect": true
                    },
                    {
                        "label": "きょねん (Kyonen)",
                        "isCorrect": false
                    },
                    {
                        "label": "ことし (Kotoshi)",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Qual forma verbal antecede a expressão 'tsumori desu'?",
                "options": [
                    {
                        "label": "Forma Dicionário / Neutra",
                        "isCorrect": true
                    },
                    {
                        "label": "Forma MASU",
                        "isCorrect": false
                    },
                    {
                        "label": "Forma TE",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza: 'Nihongo o benkyou suru tsumori desu'",
                "options": [
                    {
                        "label": "Pretendo estudar japonês",
                        "isCorrect": true
                    },
                    {
                        "label": "Estudei japonês ano passado",
                        "isCorrect": false
                    },
                    {
                        "label": "Não quero estudar japonês",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como negar uma intenção ('Não pretendo ir')?",
                "options": [
                    {
                        "label": "Ikanai tsumori desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Iku tsumori ja arimasen",
                        "isCorrect": false
                    },
                    {
                        "label": "Ikimasen tsumori desu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "じかん が あったら いっしょ に いきましょう",
                "translation": "Se houver tempo, vamos juntos.",
                "chunks": [
                    "じかん",
                    "が",
                    "あったら",
                    "いっしょ",
                    "に",
                    "いきましょう"
                ]
            },
            {
                "sentenceJp": "やすみ に なったら たび に いきます",
                "translation": "Quando chegar o feriado, irei viajar.",
                "chunks": [
                    "やすみ",
                    "に",
                    "なったら",
                    "たび",
                    "に",
                    "いきます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Conversando com o professor sobre seus planos de estudo.",
                "npcName": "Sensei",
                "npcMessage": "[Seu Nome]-san, raigetsu nani o suru tsumori desu ka? (O que pretende fazer mês que vem?)",
                "options": [
                    {
                        "text": "JLPT N5 no testo o ukeru tsumori desu! (Pretendo prestar o exame JLPT N5!)",
                        "feedback": "Meta espetacular e perfeita gramaticalmente!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, nemasu.",
                        "feedback": "Disse que vai dormir.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ohayou gozaimasu!",
                        "feedback": "Saudação fora de hora.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Um amigo pergunta sobre suas próximas férias.",
                "npcName": "Kenji",
                "npcMessage": "Rainen no yasumi wa doko ni iku tsumori desu ka? (Nas férias do ano que vem, onde pretende ir?)",
                "options": [
                    {
                        "text": "Nihon ni iku tsumori desu! (Pretendo ir ao Japão!)",
                        "feedback": "Sensacional!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nihon wa oishii tsumori desu.",
                        "feedback": "Frase sem sentido com oishii.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida inapropriada.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Perguntando sobre a compra de um carro.",
                "npcName": "Kenji",
                "npcMessage": "Atarashii kuruma o kaisu tsumori desu ka? / kau tsumori desu ka? (Pretende comprar um carro novo?)",
                "options": [
                    {
                        "text": "Hai, kuruma o kau tsumori desu. (Sim, pretendo comprar um carro.)",
                        "feedback": "Excelente uso da forma dicionário kau + tsumori!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemasu.",
                        "feedback": "Disse que vai comer.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas à toa.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a estrutura correta para expressar planos futuros com tsumori?",
                "options": [
                    "Verbo Forma Dicionário + tsumori desu",
                    "Verbo Forma Masu + tsumori desu",
                    "Verbo Forma TE + tsumori desu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'つもり です' (Tsumori desu)?",
                "options": [
                    "Pretendo / Tenho a intenção de",
                    "Ano que vem",
                    "Mês que vem"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'らいねん' (Rainen)?",
                "options": [
                    "Pretendo / Tenho a intenção de",
                    "Ano que vem",
                    "Mês que vem"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'らいげつ' (Raigetsu)?",
                "options": [
                    "Ano que vem",
                    "Pretendo / Tenho a intenção de",
                    "Mês que vem"
                ],
                "correctIndex": 2
            },
            {
                "question": "Qual é o significado correto da palavra 'りょこう する つもり です' (Ryokou suru tsumori desu)?",
                "options": [
                    "Pretendo viajar",
                    "Pretendo / Tenho a intenção de",
                    "Ano que vem"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "a2_mod_30",
        "title": "Desafio de Simulação A2",
        "section": 6,
        "sectionTitle": "Vida Social, Interações e Convites",
        "level": "A2",
        "xpReward": 150,
        "stage1_context": {
            "audioGuide": "A2 Coosu Kanryou desu!",
            "missionTitle": "Projeto Integrado: Viagem Completa A2",
            "missionDescription": "Parabéns! Chegamos ao grande desafio final do Nível A2! Você vai simular o planejamento completo de uma viagem em grupo ao Japão, desde o check-in no hotel até fazer convites e dar opiniões."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "かんりょう",
                "romaji": "Kanryou",
                "translation": "Conclusão / Concluído",
                "timeContext": "Marco de encerramento do curso."
            },
            {
                "type": "vocab",
                "kanji": "けいかく",
                "romaji": "Keikaku",
                "translation": "Plano / Planejamento",
                "timeContext": "Organização de roteiro."
            },
            {
                "type": "vocab",
                "kanji": "おめでとう ございます",
                "romaji": "Omedetou gozaimasu",
                "translation": "Parabéns!",
                "timeContext": "Celebração de conquista."
            },
            {
                "type": "grammar_pill",
                "title": "Sua Jornada até o Nível B1",
                "rule": "Com a conclusão do Nível A2, você já consegue comunicar sua rotina, passados, desejos, fazer pedidos com a Forma TE e planejar viagens com autonomia total!",
                "formula": "Sucesso Nível A2 ➔ Rumo ao Nível B1!",
                "example": "Nihongo ga dandan jouzu ni narimashita! (Seu japonês melhorou passo a passo!)"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como pedir permissão educadamente para tirar foto no hotel?",
                "options": [
                    {
                        "label": "Shashin o totte mo ii desu ka?",
                        "isCorrect": true
                    },
                    {
                        "label": "Shashin o totte wa ikemasen",
                        "isCorrect": false
                    },
                    {
                        "label": "Shashin o torinakereba narimasen",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como convidar um amigo para almoçar juntos?",
                "options": [
                    {
                        "label": "Issho ni hirugohan o tabemasen ka?",
                        "isCorrect": true
                    },
                    {
                        "label": "Issho ni hirugohan o tabenai desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Issho ni hirugohan o tabemashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Como expressar a obrigação 'Tenho que ir'?",
                "options": [
                    {
                        "label": "Ikanakereba narimasen",
                        "isCorrect": true
                    },
                    {
                        "label": "Ikitai desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Itta hou ga ii desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Como dizer 'Pretendo ir ao Japão no ano que vem'?",
                "options": [
                    {
                        "label": "Rainen Nihon ni iku tsumori desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Rainen Nihon ni ikimashita",
                        "isCorrect": false
                    },
                    {
                        "label": "Rainen Nihon ni ikite kudasai",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual frase indica um conselho empático 'É melhor descansar'?",
                "options": [
                    {
                        "label": "Yasunda hou ga ii desu yo",
                        "isCorrect": true
                    },
                    {
                        "label": "Yasumite wa ikemasen",
                        "isCorrect": false
                    },
                    {
                        "label": "Yasumi taikunai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "6. Como dizer 'Eu sempre me levanto às 7h da manhã'?",
                "options": [
                    {
                        "label": "Itsumo asa shichi-ji ni okimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Zenzen okimasen",
                        "isCorrect": false
                    },
                    {
                        "label": "Tokidoki okimashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "7. Como expressar o passado do adjetivo-i 'Ontem estava quente'?",
                "options": [
                    {
                        "label": "Kinou wa atsukatta desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Kinou wa atsu desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Kinou wa atsui deshita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "8. Como expressar o passado do adjetivo-na 'O parque era calmo'?",
                "options": [
                    {
                        "label": "Kouen wa shizuka deshita",
                        "isCorrect": true
                    },
                    {
                        "label": "Kouen wa shizukatta desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Kouen wa shizuka ja nai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "9. Como dizer no passado 'Assisti a um filme ontem'?",
                "options": [
                    {
                        "label": "Kinou eiga o mimashita",
                        "isCorrect": true
                    },
                    {
                        "label": "Kinou eiga o mimasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Kinou eiga o mite kudasai",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "10. Como dizer na negação do passado 'Não comi nada de manhã'?",
                "options": [
                    {
                        "label": "Asa nani mo tabemasen deshita",
                        "isCorrect": true
                    },
                    {
                        "label": "Asa nani mo tabenasai desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Asa nani mo tabemashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "11. Como expressar seu gosto por comida japonesa?",
                "options": [
                    {
                        "label": "Nihon-ryouri ga suki desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Nihon-ryouri ga kirai desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Nihon-ryouri ga jouzu desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "12. Traduza a comparação: 'Shinkansen wa basu yori hayai desu'",
                "options": [
                    {
                        "label": "O trem-bala é mais rápido que o ônibus",
                        "isCorrect": true
                    },
                    {
                        "label": "O ônibus é mais rápido que o trem-bala",
                        "isCorrect": false
                    },
                    {
                        "label": "Ambos têm a mesma velocidade",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "13. Como responder qual opção você prefere entre duas?",
                "options": [
                    {
                        "label": "Metoroo no hou ga ii desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Metoroo yori desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Metoroo no kara desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "14. Como conectar duas ações em ordem cronológica usando a Forma TE?",
                "options": [
                    {
                        "label": "Gohan o tabete, mizu o nomimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Gohan o tabemasu soshite mizu o nomimashita",
                        "isCorrect": false
                    },
                    {
                        "label": "Gohan o tabeta kara mizu o nomimashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "15. Como pedir polidamente ao atendente 'Por favor, escreva aqui'?",
                "options": [
                    {
                        "label": "Koko ni kaite kudasai",
                        "isCorrect": true
                    },
                    {
                        "label": "Koko ni kaimasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Koko ni kaku tsumori desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "16. Como dizer 'Estou lendo um livro agora' (Ação Contínua)?",
                "options": [
                    {
                        "label": "Ima hon o yonde imasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Ima hon o yomimashita",
                        "isCorrect": false
                    },
                    {
                        "label": "Ima hon o yomu tsumori desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "17. Como expressar a proibição 'Não é permitido tirar fotos aqui'?",
                "options": [
                    {
                        "label": "Koko de shashin o totte wa ikemasen",
                        "isCorrect": true
                    },
                    {
                        "label": "Koko de shashin o totte mo ii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Koko de shashin o torimashou",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "18. Como explicar uma baldeação 'Fazer troca de trem em Shinjuku'?",
                "options": [
                    {
                        "label": "Shinjuku de densha ni norikaemasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Shinjuku ni densha o orimasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Shinjuku kara densha ga arimasen",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "19. Como solicitar o check-in na recepção do Ryokan?",
                "options": [
                    {
                        "label": "Chekku-in o onegai shimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Chekku-in o ikimasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Chekku-in o tabemasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "20. Como dar a direção 'Vá direto e dobre à direita'?",
                "options": [
                    {
                        "label": "Massugu itte, migi ni magatte kudasai",
                        "isCorrect": true
                    },
                    {
                        "label": "Massugu iku kara hidari desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Migi ni magaru tsumori desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "21. Como expressar o desejo 'Quero ir a Kyushu'?",
                "options": [
                    {
                        "label": "Kyuushuu ni ikitai desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Kyuushuu ni ikemasen",
                        "isCorrect": false
                    },
                    {
                        "label": "Kyuushuu ni iku hou ga ii desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "22. Como descrever o tempo 'Está chovendo agora'?",
                "options": [
                    {
                        "label": "Ima ame ga furite imasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Ima ame ga furi-tai desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Ima ame ga furimasen deshita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "23. Na farmácia, como informar o sintoma 'Estou com dor de cabeça'?",
                "options": [
                    {
                        "label": "Atama ga itai desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Atama ga suki desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Atama ga shizuka desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "24. Como explicar a razão 'Como está quente, vou beber água'?",
                "options": [
                    {
                        "label": "Atsui desu kara, mizu o nomimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Atsui desu demo, mizu o nomimasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Atsui desu to, mizu o nomimasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "25. Como aceitar um convite com entusiasmo 'Boa ideia! Vamos!'?",
                "options": [
                    {
                        "label": "Ii desu ne! Ikimashou!",
                        "isCorrect": true
                    },
                    {
                        "label": "Chotto... ikemasen",
                        "isCorrect": false
                    },
                    {
                        "label": "Iku tsumori ja arimasen",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "26. Como recusar um convite com polidez e delicadeza?",
                "options": [
                    {
                        "label": "Chotto... komarimasu / yotei ga arimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Iie, absolute ni ikite wa ikemasen",
                        "isCorrect": false
                    },
                    {
                        "label": "Dame desu!",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "27. Como dizer 'Dei um presente ao meu amigo'?",
                "options": [
                    {
                        "label": "Tomodachi ni purezento o agemashita",
                        "isCorrect": true
                    },
                    {
                        "label": "Tomodachi ni purezento o moraimashita",
                        "isCorrect": false
                    },
                    {
                        "label": "Tomodachi ni purezento o kuremashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "28. Como dizer 'Recebi um livro do professor'?",
                "options": [
                    {
                        "label": "Sensei ni hon o moraimashita",
                        "isCorrect": true
                    },
                    {
                        "label": "Sensei ni hon o agemashita",
                        "isCorrect": false
                    },
                    {
                        "label": "Sensei ni hon o kaimashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "29. Como pedir ao garçom 'Por favor, traga chá'?",
                "options": [
                    {
                        "label": "O-cha o motte kite kudasai",
                        "isCorrect": true
                    },
                    {
                        "label": "O-cha o motte ikite kudasai",
                        "isCorrect": false
                    },
                    {
                        "label": "O-cha o nomina desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "30. Qual frase resume sua conquista A2?",
                "options": [
                    {
                        "label": "Nihongo ga dandan jouzu ni narimashita! (Meu japonês melhorou muito!)",
                        "isCorrect": true
                    },
                    {
                        "label": "Nihongo ga zenzen wakarimasen",
                        "isCorrect": false
                    },
                    {
                        "label": "Nihongo o yameru tsumori desu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "まいにち にほんご を れんしゅう して じょうず に なりました",
                "translation": "Pratiquei japonês todos os dias e fiquei bom.",
                "chunks": [
                    "まいにち",
                    "にほんご",
                    "を",
                    "れんしゅう",
                    "して",
                    "じょうず",
                    "に",
                    "なりました"
                ]
            },
            {
                "sentenceJp": "これからも にほんご の べんきょう を つづけます",
                "translation": "Continuarei estudando japonês daqui para frente.",
                "chunks": [
                    "これからも",
                    "にほんご",
                    "の",
                    "べんきょう",
                    "を",
                    "つづけます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: No balcão de informações turísticas em Kyoto organizando o roteiro.",
                "npcName": "Agente de Turismo A2",
                "npcMessage": "[Seu Nome]-san, konnichiwa! Kyoto de nani o shitai desu ka? (Boa tarde! O que quer fazer em Kyoto?)",
                "options": [
                    {
                        "text": "Yuumei na o-dera ni ikitai desu! (Quero ir a um templo famoso!)",
                        "feedback": "Excelente expressão de desejo!",
                        "isCorrect": true
                    },
                    {
                        "text": "O-dera wa oishii desu.",
                        "feedback": "Disse que o templo é gostoso.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despediu-se imediatamente.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O agente sugere ir de ônibus ou de metrô.",
                "npcName": "Agente de Turismo A2",
                "npcMessage": "Basu to chikatetsu, dochira ga ii desu ka? (Ônibus ou metrô, qual é melhor?)",
                "options": [
                    {
                        "text": "Chikatetsu no hou ga hayai desu kara, chikatetsu ni norimasu! (Como o metrô é mais rápido, vou de metrô!)",
                        "feedback": "Excelente combinação de comparação (hou ga) e causa (kara)!",
                        "isCorrect": true
                    },
                    {
                        "text": "Chikatetsu wa nemasu.",
                        "feedback": "Disse que o metrô dorme.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Pediu desculpas à toa.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Você conclui com sucesso a simulação e o agente te parabeniza!",
                "npcName": "Agente de Turismo A2",
                "npcMessage": "Subarashii desu! [Seu Nome]-san, A2 Coosu Kanryou desu! Omedetou gozaimasu! (Incrível! [Seu Nome]-san, Curso A2 Concluído! Parabéns!)",
                "options": [
                    {
                        "text": "Domo arigatou gozaimasu! Nihongo no benkyou ga totemo tanoshii desu! (Muito obrigado! Estudar japonês é muito divertido!)",
                        "feedback": "🏆 PARABÉNS! VOCÊ CONCLUIU O NÍVEL A2 DO JAPÃO ACADEMY COM SUCESSO ABSOLUTO!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, gomen nasai!",
                        "feedback": "Não peça desculpas no momento da vitória!",
                        "isCorrect": false
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Não duvide da sua conquista!",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Parabéns! O que você conquistou ao finalizar o Nível A2?",
                "options": [
                    "Capacidade de comunicar sua rotina, passados, desejos, Forma TE e planos com autonomia!",
                    "Apenas palavras isoladas",
                    "Nenhum progresso"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'かんりょう' (Kanryou)?",
                "options": [
                    "Conclusão / Concluído",
                    "Plano / Planejamento",
                    "Parabéns!"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'けいかく' (Keikaku)?",
                "options": [
                    "Conclusão / Concluído",
                    "Plano / Planejamento",
                    "Parabéns!"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'おめでとう ございます' (Omedetou gozaimasu)?",
                "options": [
                    "Plano / Planejamento",
                    "Conclusão / Concluído",
                    "Parabéns!"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre a regra 'Sua Jornada até o Nível B1': qual afirmação é correta?",
                "options": [
                    "Com a conclusão do Nível A2, você já consegue comunicar sua rotina, passados, desejos, fazer pedidos com a Forma TE e planejar viagens com autonomia total!",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "Como pedir permissão educadamente para tirar foto no hotel?",
                "options": [
                    "Shashin o totte mo ii desu ka?",
                    "Shashin o totte wa ikemasen",
                    "Shashin o torinakereba narimasen"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como convidar um amigo para almoçar juntos?",
                "options": [
                    "Issho ni hirugohan o tabemasen ka?",
                    "Issho ni hirugohan o tabenai desu",
                    "Issho ni hirugohan o tabemashita"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como expressar a obrigação 'Tenho que ir'?",
                "options": [
                    "Ikanakereba narimasen",
                    "Ikitai desu",
                    "Itta hou ga ii desu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como dizer 'Pretendo ir ao Japão no ano que vem'?",
                "options": [
                    "Rainen Nihon ni iku tsumori desu",
                    "Rainen Nihon ni ikimashita",
                    "Rainen Nihon ni ikite kudasai"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual frase indica um conselho empático 'É melhor descansar'?",
                "options": [
                    "Yasunda hou ga ii desu yo",
                    "Yasumite wa ikemasen",
                    "Yasumi taikunai desu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como dizer 'Eu sempre me levanto às 7h da manhã'?",
                "options": [
                    "Itsumo asa shichi-ji ni okimasu",
                    "Zenzen okimasen",
                    "Tokidoki okimashita"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como expressar o passado do adjetivo-i 'Ontem estava quente'?",
                "options": [
                    "Kinou wa atsukatta desu",
                    "Kinou wa atsu desu",
                    "Kinou wa atsui deshita"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como expressar o passado do adjetivo-na 'O parque era calmo'?",
                "options": [
                    "Kouen wa shizuka deshita",
                    "Kouen wa shizukatta desu",
                    "Kouen wa shizuka ja nai desu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como dizer no passado 'Assisti a um filme ontem'?",
                "options": [
                    "Kinou eiga o mimashita",
                    "Kinou eiga o mimasu",
                    "Kinou eiga o mite kudasai"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como dizer na negação do passado 'Não comi nada de manhã'?",
                "options": [
                    "Asa nani mo tabemasen deshita",
                    "Asa nani mo tabenasai desu",
                    "Asa nani mo tabemashita"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como expressar seu gosto por comida japonesa?",
                "options": [
                    "Nihon-ryouri ga suki desu",
                    "Nihon-ryouri ga kirai desu",
                    "Nihon-ryouri ga jouzu desu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Traduza a comparação: 'Shinkansen wa basu yori hayai desu'",
                "options": [
                    "O trem-bala é mais rápido que o ônibus",
                    "O ônibus é mais rápido que o trem-bala",
                    "Ambos têm a mesma velocidade"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como responder qual opção você prefere entre duas?",
                "options": [
                    "Metoroo no hou ga ii desu",
                    "Metoroo yori desu",
                    "Metoroo no kara desu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como conectar duas ações em ordem cronológica usando a Forma TE?",
                "options": [
                    "Gohan o tabete, mizu o nomimasu",
                    "Gohan o tabemasu soshite mizu o nomimashita",
                    "Gohan o tabeta kara mizu o nomimashita"
                ],
                "correctIndex": 0
            },
            {
                "question": "Como pedir polidamente ao atendente 'Por favor, escreva aqui'?",
                "options": [
                    "Koko ni kaite kudasai",
                    "Koko ni kaimasu",
                    "Koko ni kaku tsumori desu"
                ],
                "correctIndex": 0
            }
        ]
    }
];

// Contrato textual editorial da Fase 3B. Conteúdo pendente de revisão humana qualificada.
const A2_EDITORIAL_AUDIO = [
    ["朝、起きます！", "Asa, okimasu!", "Acordo de manhã!", "Descrever horários e ações da rotina diária."],
    ["いつも映画を見ます！", "Itsumo eiga o mimasu!", "Sempre assisto a filmes!", "Dizer com que frequência realiza uma atividade."],
    ["週末、何をしますか。", "Shuumatsu, nani o shimasu ka.", "O que você faz no fim de semana?", "Falar sobre atividades de lazer e hobbies."],
    ["このラーメンはおいしいです！", "Kono raamen wa oishii desu!", "Este ramen é saboroso!", "Descrever pessoas e coisas com adjetivos い."],
    ["静かな町です！", "Shizuka na machi desu!", "É uma cidade tranquila!", "Descrever pessoas e lugares com adjetivos な."],
    ["昨日、寿司を食べました！", "Kinou, sushi o tabemashita!", "Ontem, comi sushi!", "Relatar uma ação concluída no passado."],
    ["昨日は暑かったです！", "Kinou wa atsukatta desu!", "Ontem estava quente!", "Descrever no passado usando adjetivos."],
    ["どこに行きましたか。", "Doko ni ikimashita ka.", "Aonde você foi?", "Perguntar e responder aonde alguém foi."],
    ["日本語が好きです！", "Nihongo ga suki desu!", "Gosto de japonês!", "Expressar gostos e habilidades pessoais."],
    ["AはBより高いです！", "A wa B yori takai desu!", "A é mais caro que B!", "Comparar duas opções com より e どちら."],
    ["て形の勉強をしましょう！", "Te-kei no benkyou o shimashou!", "Vamos estudar a forma て!", "Formar e usar a forma て em ações conectadas."],
    ["ここに書いてください！", "Koko ni kaite kudasai!", "Escreva aqui, por favor!", "Fazer um pedido educado com てください."],
    ["今、日本語を勉強しています！", "Ima, nihongo o benkyou shite imasu!", "Estou estudando japonês agora!", "Dizer o que alguém está fazendo agora."],
    ["写真を撮ってもいいですか。", "Shashin o totte mo ii desu ka.", "Posso tirar uma foto?", "Pedir e conceder permissão com てもいいです."],
    ["ここで写真を撮ってはいけません！", "Koko de shashin o totte wa ikemasen!", "Não é permitido tirar fotos aqui!", "Compreender e expressar uma proibição."],
    ["家に帰って、ご飯を食べて、寝ます！", "Uchi ni kaette, gohan o tabete, nemasu!", "Volto para casa, janto e durmo!", "Conectar ações em sequência com a forma て."],
    ["京都駅で乗り換えです！", "Kyouto-eki de norikae desu!", "A baldeação é na Estação de Kyoto!", "Comprar uma passagem e compreender uma baldeação."],
    ["チェックインをお願いします！", "Chekkuin o onegai shimasu!", "Gostaria de fazer o check-in!", "Realizar interações básicas de entrada em uma hospedagem."],
    ["右に曲がってください！", "Migi ni magatte kudasai!", "Vire à direita, por favor!", "Pedir e fornecer direções com etapas simples."],
    ["日本に行きたいです！", "Nihon ni ikitai desu!", "Quero ir ao Japão!", "Expressar algo que deseja fazer."],
    ["今日は雨が降っています！", "Kyou wa ame ga futte imasu!", "Hoje está chovendo!", "Descrever o clima e uma estação do ano."],
    ["頭が痛いです！", "Atama ga itai desu!", "Minha cabeça dói!", "Descrever um sintoma e compreender uma orientação básica."],
    ["薬を飲まなければなりません！", "Kusuri o nomanakereba narimasen!", "Preciso tomar o remédio!", "Expressar uma necessidade ou obrigação."],
    ["もっと休んだほうがいいですよ！", "Motto yasunda hou ga ii desu yo!", "É melhor descansar mais!", "Dar um conselho leve com ほうがいい."],
    ["雨が降っていますから、行きません！", "Ame ga futte imasu kara, ikimasen!", "Como está chovendo, não vou!", "Explicar uma decisão com から."],
    ["一緒にコーヒーを飲みましょう！", "Issho ni koohii o nomimashou!", "Vamos tomar café juntos!", "Fazer um convite simples e cordial."],
    ["すみません、ちょっと……", "Sumimasen, chotto...", "Desculpe, é um pouco difícil...", "Aceitar ou recusar um convite com delicadeza."],
    ["あげる、もらう、くれる！", "Ageru, morau, kureru!", "Dar, receber e alguém dar para mim!", "Distinguir あげる, もらう e くれる."],
    ["来年、日本に行くつもりです！", "Rainen, Nihon ni iku tsumori desu!", "Pretendo ir ao Japão no ano que vem!", "Expressar um plano ou intenção futura."],
    ["A2コース修了です！", "A2 koosu shuuryou desu!", "O curso A2 foi concluído!", "Usar os recursos do A2 em uma simulação guiada."]
];

function criarConteudoEditorialA2(displayText, romaji, translation, audioText = displayText, scenario = "") {
    return { displayText, audioText, furigana: "", romaji, translation, scenario };
}

CURSO_A2_DADOS.forEach((module, index) => {
    const [displayText, romaji, translation, canDo] = A2_EDITORIAL_AUDIO[index];
    module.stage1_context.audio = criarConteudoEditorialA2(displayText, romaji, translation);
    module.canDo = canDo;
    module.editorialReview = { status: "pending-human-review", phase: "3B" };
});

const A2_DIALOGUE_CONTRACT = {
    a2_mod_01: [
        ["[Seu Nome]さん、朝、何時に起きますか。", "[Seu Nome]-san, asa, nan-ji ni okimasu ka.", "A que horas você acorda de manhã?", "朝、何時に起きますか。"],
        ["今晩、何時に寝ますか。", "Konban, nan-ji ni nemasu ka.", "A que horas vai dormir esta noite?"],
        ["寝る前に歯を磨きますか。", "Neru mae ni ha o migakimasu ka.", "Você escova os dentes antes de dormir?"]
    ],
    a2_mod_02: [
        ["[Seu Nome]さん、朝、いつもコーヒーを飲みますか。", "[Seu Nome]-san, asa, itsumo koohii o nomimasu ka.", "Você sempre bebe café de manhã?", "朝、いつもコーヒーを飲みますか。"],
        ["時々スポーツをしますか。", "Tokidoki supootsu o shimasu ka.", "Você pratica esportes às vezes?"],
        ["お酒を飲みますか。", "Osake o nomimasu ka.", "Você bebe bebida alcoólica?"]
    ],
    a2_mod_03: [
        ["[Seu Nome]さん、週末、何をしますか。", "[Seu Nome]-san, shuumatsu, nani o shimasu ka.", "O que você faz no fim de semana?", "週末、何をしますか。"],
        ["本を読みますか。", "Hon o yomimasu ka.", "Você lê livros?"],
        ["[Seu Nome]さんの趣味は何ですか。", "[Seu Nome]-san no shumi wa nan desu ka.", "Qual é o seu hobby?", "趣味は何ですか。"]
    ],
    a2_mod_04: [
        ["ラーメンはいかがですか。", "Raamen wa ikaga desu ka.", "O que achou do ramen?"],
        ["新しいスマホですか。", "Atarashii sumaho desu ka.", "É um celular novo?"],
        ["ホテルの部屋は大きいですか。", "Hoteru no heya wa ookii desu ka.", "O quarto do hotel é grande?"]
    ],
    a2_mod_05: [
        ["[Seu Nome]さん、そこは静かな町ですか。", "[Seu Nome]-san, soko wa shizuka na machi desu ka.", "Aí é uma cidade tranquila?", "そこは静かな町ですか。"],
        ["日本人は親切ですか。", "Nihonjin wa shinsetsu desu ka.", "Os japoneses são gentis?"],
        ["浅草は有名ですか。", "Asakusa wa yuumei desu ka.", "Asakusa é famosa?"]
    ],
    a2_mod_06: [
        ["[Seu Nome]さん、昨日、何をしましたか。", "[Seu Nome]-san, kinou, nani o shimashita ka.", "O que você fez ontem?", "昨日、何をしましたか。"],
        ["昨日、ラーメンを食べましたか。", "Kinou, raamen o tabemashita ka.", "Ontem você comeu ramen?"],
        ["昨日、日本語を勉強しましたか。", "Kinou, nihongo o benkyou shimashita ka.", "Estudou japonês ontem?"]
    ],
    a2_mod_07: [
        ["京都の旅行はどうでしたか。", "Kyouto no ryokou wa dou deshita ka.", "Como foi a viagem a Kyoto?"],
        ["昨日は寒かったですか。", "Kinou wa samukatta desu ka.", "Ontem estava frio?"],
        ["テストは難しかったですか。", "Tesuto wa muzukashikatta desu ka.", "A prova foi difícil?"]
    ],
    a2_mod_08: [
        ["[Seu Nome]さん、休みにどこへ行きましたか。", "[Seu Nome]-san, yasumi ni doko e ikimashita ka.", "Para onde você foi no feriado?", "休みにどこへ行きましたか。"],
        ["誰と行きましたか。", "Dare to ikimashita ka.", "Com quem você foi?"],
        ["一人で行きましたか。", "Hitori de ikimashita ka.", "Você foi sozinho?"]
    ],
    a2_mod_09: [
        ["[Seu Nome]さん、日本の食べ物が好きですか。", "[Seu Nome]-san, Nihon no tabemono ga suki desu ka.", "Você gosta de comida japonesa?", "日本の食べ物が好きですか。"],
        ["[Seu Nome]さんは日本語が上手ですね！", "[Seu Nome]-san wa nihongo ga jouzu desu ne!", "Você é muito bom em japonês!", "日本語が上手ですね！"],
        ["スポーツが好きですか。", "Supootsu ga suki desu ka.", "Gosta de esportes?"]
    ],
    a2_mod_10: [
        ["新幹線とバス、どちらがいいですか。", "Shinkansen to basu, dochira ga ii desu ka.", "Trem-bala ou ônibus, qual é melhor?"],
        ["東京と北海道、どちらが寒いですか。", "Toukyou to Hokkaidou, dochira ga samui desu ka.", "Tokyo ou Hokkaido, qual é mais frio?"],
        ["夏と冬、どちらが好きですか。", "Natsu to fuyu, dochira ga suki desu ka.", "Verão ou inverno, de qual gosta mais?"]
    ],
    a2_mod_11: [
        ["皆さん、本を見てください。", "Minna-san, hon o mite kudasai.", "Todos, por favor, olhem o livro."],
        ["ちょっと待ってください！", "Chotto matte kudasai!", "Por favor, espere um pouco!"],
        ["どうぞ、入ってください！", "Douzo, haitte kudasai!", "Por favor, entre!"]
    ],
    a2_mod_12: [
        ["急行電車は三番線から出発します！", "Kyuukou densha wa san-ban sen kara shuppatsu shimasu!", "O trem expresso parte da plataforma 3!"],
        ["ここにお名前と住所を書いてください。", "Koko ni onamae to juusho o kaite kudasai.", "Por favor, escreva seu nome e endereço aqui."],
        ["いらっしゃいませ！何をお探しですか。", "Irasshaimase! Nani o osagashi desu ka.", "Bem-vindo! O que procura?"]
    ],
    a2_mod_13: [
        ["もしもし！[Seu Nome]さん、今、何をしていますか。", "Moshimoshi! [Seu Nome]-san, ima, nani o shite imasu ka.", "Alô! O que você está fazendo agora?", "もしもし！今、何をしていますか。"],
        ["今、どこに住んでいますか。", "Ima, doko ni sunde imasu ka.", "Onde você está morando agora?"],
        ["何を飲んでいますか。", "Nani o nonde imasu ka.", "O que está bebendo?"]
    ],
    a2_mod_14: [
        ["いらっしゃいませ。", "Irasshaimase.", "Bem-vindo."],
        ["はい、いいですよ！どうぞ。", "Hai, ii desu yo! Douzo.", "Sim, pode! Fique à vontade."],
        ["こんにちは。", "Konnichiwa.", "Olá."]
    ],
    a2_mod_15: [
        ["すみません、ここで写真を撮ってはいけません。", "Sumimasen, koko de shashin o totte wa ikemasen.", "Com licença, não pode tirar fotos aqui."],
        ["ここは禁煙です。タバコを吸ってはいけません。", "Koko wa kin'en desu. Tabako o sutte wa ikemasen.", "Aqui é proibido fumar. Não pode fumar."],
        ["ここに入ってはいけません。", "Koko ni haitte wa ikemasen.", "Não pode entrar aqui."]
    ],
    a2_mod_16: [
        ["[Seu Nome]さん、昨日は家に帰ってから何をしましたか。", "[Seu Nome]-san, kinou wa uchi ni kaette kara nani o shimashita ka.", "Ontem, depois de voltar para casa, o que fez?", "昨日は家に帰ってから何をしましたか。"],
        ["土曜日は何をしますか。", "Doyoubi wa nani o shimasu ka.", "O que faz no sábado?"],
        ["今朝、何をしましたか。", "Kesa, nani o shimashita ka.", "O que fez hoje de manhã?"]
    ],
    a2_mod_17: [
        ["いらっしゃいませ！どこまでですか。", "Irasshaimase! Doko made desu ka.", "Bem-vindo! Até onde vai?"],
        ["はい、一万三千円です。", "Hai, ichi-man san-zen en desu.", "Sim, são 13.000 ienes."],
        ["名古屋駅で乗り換えです。", "Nagoya-eki de norikae desu.", "A baldeação é na Estação de Nagoya."]
    ],
    a2_mod_18: [
        ["いらっしゃいませ！こんにちは。", "Irasshaimase! Konnichiwa.", "Bem-vindo! Boa tarde."],
        ["[Seu Nome]様、お部屋は四〇二号室です。これは鍵です。", "[Seu Nome]-sama, oheya wa yon-maru-ni gou-shitsu desu. Kore wa kagi desu.", "Sr. [Seu Nome], seu quarto é o 402. Aqui está a chave.", "お客様、お部屋は四〇二号室です。これは鍵です。"]
    ],
    a2_mod_19: [
        ["すみません！コンビニはどこですか。コンビニですか。あの信号を右に曲がってください。", "Sumimasen! Konbini wa doko desu ka. Konbini desu ka. Ano shingou o migi ni magatte kudasai.", "Com licença! Onde fica a loja de conveniência? Vire à direita naquele semáforo."],
        ["駅はどこですか。", "Eki wa doko desu ka.", "Onde fica a estação?"],
        ["次の交差点をどちらに曲がりますか。", "Tsugi no kousaten o dochira ni magarimasu ka.", "No próximo cruzamento, vira para qual lado?"]
    ],
    a2_mod_20: [
        ["[Seu Nome]さん、日本で何をしたいですか。", "[Seu Nome]-san, Nihon de nani o shitai desu ka.", "O que você quer fazer no Japão?", "日本で何をしたいですか。"],
        ["今日の昼ご飯は何が食べたいですか。", "Kyou no hirugohan wa nani ga tabetai desu ka.", "O que quer comer no almoço hoje?"],
        ["秋葉原で何を買いたいですか。", "Akihabara de nani o kaitai desu ka.", "O que quer comprar em Akihabara?"]
    ],
    a2_mod_21: [
        ["今日の天気はどうですか。", "Kyou no tenki wa dou desu ka.", "Como está o tempo hoje?"],
        null,
        ["北海道の冬は寒いですか。", "Hokkaidou no fuyu wa samui desu ka.", "O inverno em Hokkaido é frio?"]
    ],
    a2_mod_22: [
        ["どうしましたか。", "Dou shimashita ka.", "O que aconteceu? O que está sentindo?"],
        ["熱がありますか。", "Netsu ga arimasu ka.", "Você está com febre?"],
        ["この薬を一日三回飲んでください。", "Kono kusuri o ichi-nichi san-kai nonde kudasai.", "Tome este remédio três vezes ao dia."]
    ],
    a2_mod_23: [
        ["[Seu Nome]さん、もう帰りますか。", "[Seu Nome]-san, mou kaerimasu ka.", "Você já vai para casa?", "もう帰りますか。"],
        ["明日、映画に行きますか。", "Ashita, eiga ni ikimasu ka.", "Vamos ao cinema amanhã?"],
        ["大丈夫ですか。顔色が悪いですよ。", "Daijoubu desu ka. Kaoiro ga warui desu yo.", "Tudo bem? Sua aparência não está boa."]
    ],
    a2_mod_24: [
        ["今日はとても疲れました……", "Kyou wa totemo tsukaremashita...", "Hoje estou muito cansado..."],
        ["熱が三十八度あります……", "Netsu ga sanjuu-hachi do arimasu...", "Estou com 38 graus de febre..."],
        ["ありがとうございます。そうします。", "Arigatou gozaimasu. Sou shimasu.", "Obrigado. Farei isso."]
    ],
    a2_mod_25: [
        ["[Seu Nome]さん、昨日はなぜ休みましたか。", "[Seu Nome]-san, kinou wa naze yasumimashita ka.", "Por que você faltou ontem?", "昨日はなぜ休みましたか。"],
        ["ケーキを食べませんか。", "Keeki o tabemasen ka.", "Não vai comer o bolo?"],
        ["なぜタクシーに乗りますか。", "Naze takushii ni norimasu ka.", "Por que vai pegar táxi?"]
    ],
    a2_mod_26: [
        ["[Seu Nome]さん、一緒にコーヒーを飲みませんか。", "[Seu Nome]-san, issho ni koohii o nomimasen ka.", "Não quer tomar um café comigo?", "一緒にコーヒーを飲みませんか。"],
        ["週末、映画を見ませんか。", "Shuumatsu, eiga o mimasen ka.", "Que tal vermos um filme no fim de semana?"],
        ["一緒に駅まで歩きましょう！", "Issho ni eki made arukimashou!", "Vamos caminhar até a estação juntos!"]
    ],
    a2_mod_27: [
        ["[Seu Nome]さん、今晩、一緒にご飯を食べませんか。", "[Seu Nome]-san, konban, issho ni gohan o tabemasen ka.", "Não quer jantar comigo hoje à noite?", "今晩、一緒にご飯を食べませんか。"],
        ["そうですか。じゃあ、次はぜひ！", "Sou desu ka. Jaa, tsugi wa zehi!", "Entendi. Então, na próxima, com certeza!"],
        ["週末、温泉に行きませんか。", "Shuumatsu, onsen ni ikimasen ka.", "Que tal irmos a uma fonte termal no fim de semana?"]
    ],
    a2_mod_28: [
        ["これは何ですか。", "Kore wa nan desu ka.", "O que é isto?"],
        ["わあ！ありがとうございます！うれしいです！", "Waa! Arigatou gozaimasu! Ureshii desu!", "Uau! Muito obrigado! Estou muito feliz!"],
        ["このキーホルダーはどうしましたか。", "Kono kiihorudaa wa dou shimashita ka.", "Como conseguiu este chaveiro?"]
    ],
    a2_mod_29: [
        ["[Seu Nome]さん、来月、何をするつもりですか。", "[Seu Nome]-san, raigetsu, nani o suru tsumori desu ka.", "O que pretende fazer mês que vem?", "来月、何をするつもりですか。"],
        ["来年の休みはどこに行くつもりですか。", "Rainen no yasumi wa doko ni iku tsumori desu ka.", "Nas férias do ano que vem, onde pretende ir?"],
        ["新しい車を買うつもりですか。", "Atarashii kuruma o kau tsumori desu ka.", "Pretende comprar um carro novo?"]
    ],
    a2_mod_30: [
        ["[Seu Nome]さん、こんにちは！京都で何をしたいですか。", "[Seu Nome]-san, konnichiwa! Kyouto de nani o shitai desu ka.", "Boa tarde! O que quer fazer em Kyoto?", "こんにちは！京都で何をしたいですか。"],
        ["バスと地下鉄、どちらがいいですか。", "Basu to chikatetsu, dochira ga ii desu ka.", "Ônibus ou metrô, qual é melhor?"],
        ["素晴らしいです！[Seu Nome]さん、A2コース修了です！おめでとうございます！", "Subarashii desu! [Seu Nome]-san, A2 koosu shuuryou desu! Omedetou gozaimasu!", "Incrível! [Seu Nome], o curso A2 foi concluído! Parabéns!", "素晴らしいです！A2コース修了です！おめでとうございます！"]
    ]
};

CURSO_A2_DADOS.forEach(module => {
    const dialogueContracts = A2_DIALOGUE_CONTRACT[module.id] || [];
    dialogueContracts.forEach((contract, index) => {
        if (!contract || !module.stage4_dialog[index]) return;
        const [displayText, romaji, translation, audioText = displayText, scenario = ""] = contract;
        module.stage4_dialog[index].content = criarConteudoEditorialA2(displayText, romaji, translation, audioText, scenario);
    });
});

if (typeof window !== "undefined") { window.CURSO_A2_DADOS = CURSO_A2_DADOS; }

const A2_PHASE18_AUDIO_CORRECTIONS = {
    a2_mod_01: ["毎朝七時に起きます。", "Maiasa shichi-ji ni okimasu.", "Acordo às sete horas todas as manhãs."],
    a2_mod_02: ["週末はいつも映画を見ます。", "Shuumatsu wa itsumo eiga o mimasu.", "Sempre assisto a filmes no fim de semana."],
    a2_mod_17: ["京都駅で乗り換えます。", "Kyouto-eki de norikaemasu.", "Faço baldeação na Estação de Kyoto."],
    a2_mod_28: ["友達に本をあげます。母にプレゼントをもらいます。先生が辞書をくれます。", "Tomodachi ni hon o agemasu. Haha ni purezento o moraimasu. Sensei ga jisho o kuremasu.", "Dou um livro a um amigo. Recebo um presente da minha mãe. O professor me dá um dicionário."]
};
Object.entries(A2_PHASE18_AUDIO_CORRECTIONS).forEach(([moduleId, values]) => {
    const module = CURSO_A2_DADOS.find(item => item.id === moduleId);
    const [displayText, romaji, translation] = values;
    module.stage1_context.audioGuide = romaji;
    Object.assign(module.stage1_context.audio, { displayText, audioText: displayText, romaji, translation });
    module.editorialReview.phase18 = { status: "corrected", target: "stage1_context.audio" };
});

const A2_PHASE18_TEXT_REPLACEMENTS = new Map([
    ["Com a conclusão do Nível A2, você já consegue comunicar sua rotina, passados, desejos, fazer pedidos com a Forma TE e planejar viagens com autonomia total!", "A conclusão do Nível A2 registra que você estudou formas para falar da rotina, de fatos passados e desejos, fazer pedidos com a forma て e planejar viagens."]
]);
(function applyA2Phase18Text(value) {
    if (Array.isArray(value)) return value.forEach(applyA2Phase18Text);
    if (!value || typeof value !== "object") return;
    Object.entries(value).forEach(([key, item]) => {
        if (typeof item === "string" && A2_PHASE18_TEXT_REPLACEMENTS.has(item)) value[key] = A2_PHASE18_TEXT_REPLACEMENTS.get(item);
        else applyA2Phase18Text(item);
    });
})(CURSO_A2_DADOS);
CURSO_A2_DADOS.find(module => module.id === "a2_mod_30").stage5_quiz[4].options[0] = A2_PHASE18_TEXT_REPLACEMENTS.get("Com a conclusão do Nível A2, você já consegue comunicar sua rotina, passados, desejos, fazer pedidos com a Forma TE e planejar viagens com autonomia total!");

(function applyA2Phase21BEditorialReview() {
    const builders = {
        a2_mod_01: [["まいあさ 7じ に おきます", "Acordo todas as manhãs às 7 horas."], ["ねる まえ に は を みがきます", "Escovo os dentes antes de dormir."]],
        a2_mod_02: [["しゅうまつ は たいてい うち で やすみます", "Geralmente descanso em casa no fim de semana."], ["たまに ともだち と おちゃ を のみます", "De vez em quando tomo chá com amigos."]],
        a2_mod_03: [["わたし の しゅみ は えいが です", "Meu hobby é cinema."], ["しゅうまつ に しゃしん を とります", "Tiro fotos no fim de semana."]],
        a2_mod_04: [["この へや は おおきい です", "Este quarto é grande."], ["この りょうり は おいしくない です", "Esta comida não está gostosa."]],
        a2_mod_05: [["ここ は しずかな まち です", "Aqui é uma cidade tranquila."], ["この みせ は にぎやか です", "Esta loja é movimentada."]],
        a2_mod_06: [["きのう えいが を みました", "Ontem assisti a um filme."], ["せんしゅう べんきょう しませんでした", "Na semana passada não estudei."]],
        a2_mod_07: [["きのう は あつかった です", "Ontem fez calor."], ["まち は しずか でした", "A cidade era tranquila."]],
        a2_mod_08: [["ともだち と きょうと へ いきました", "Fui a Kyoto com um amigo."], ["しゅうまつ は うち に いました", "Fiquei em casa no fim de semana."]],
        a2_mod_09: [["おんがく が すき です", "Gosto de música."], ["りょうり が じょうず です", "Sou bom em cozinhar."]],
        a2_mod_10: [["でんしゃ は バス より はやい です", "O trem é mais rápido que o ônibus."], ["ねこ と いぬ と どちら が すき です か", "De qual você gosta mais, gatos ou cachorros?"]],
        a2_mod_11: [["ほん を よんで ください", "Leia o livro, por favor."], ["まど を あけて ください", "Abra a janela, por favor."]],
        a2_mod_12: [["ここ に なまえ を かいて ください", "Escreva seu nome aqui, por favor."], ["ちょっと まって ください", "Espere um pouco, por favor."]],
        a2_mod_13: [["いま にほんご を べんきょう しています", "Estou estudando japonês agora."], ["ともだち と でんわ を しています", "Estou falando ao telefone com um amigo."]],
        a2_mod_14: [["ここ で しゃしん を とっても いい です か", "Posso tirar uma foto aqui?"], ["ここ に すわっても いい です か", "Posso sentar aqui?"]],
        a2_mod_15: [["ここ で たばこ を すってはいけません", "Não é permitido fumar aqui."], ["ここ に はいってはいけません", "Não é permitido entrar aqui."]],
        a2_mod_16: [["あさ おきて は を みがきます", "Acordo de manhã e escovo os dentes."], ["えき に いって でんしゃ に のります", "Vou à estação e pego o trem."]],
        a2_mod_17: [["きょうと えき で のりかえます", "Faço baldeação na Estação de Kyoto."], ["とうきょう まで でんしゃ で いきます", "Vou de trem até Tóquio."]],
        a2_mod_18: [["いっぱく おねがいします", "Uma diária, por favor."], ["この へや を おねがいします", "Este quarto, por favor."]],
        a2_mod_19: [["つぎ の かど を みぎ に まがります", "Vire à direita na próxima esquina."], ["えき は ぎんこう の となり です", "A estação fica ao lado do banco."]],
        a2_mod_20: [["にほん へ いきたい です", "Quero ir ao Japão."], ["あたらしい パソコン が ほしい です", "Quero um computador novo."]],
        a2_mod_21: [["きょう は はれて いい てんき です", "Hoje está ensolarado e o tempo está bom."], ["あした は あめ が ふる と おもいます", "Acho que amanhã vai chover."]],
        a2_mod_22: [["あたま が いたい です", "Estou com dor de cabeça."], ["ねつ が あります", "Estou com febre."]],
        a2_mod_23: [["くすり を のまなければ なりません", "Tenho que tomar o remédio."], ["あした は はやく おきなければ なりません", "Tenho que acordar cedo amanhã."]],
        a2_mod_24: [["きょう は はやく ねた ほう が いい です", "É melhor dormir cedo hoje."], ["びょういん へ いった ほう が いい です", "É melhor ir ao hospital."]],
        a2_mod_25: [["あめ です から うち に います", "Como está chovendo, fico em casa."], ["つかれました から はやく ねます", "Como estou cansado, vou dormir cedo."]],
        a2_mod_26: [["いっしょ に おちゃ を のみません か", "Não quer tomar chá comigo?"], ["いっしょ に いきましょう", "Vamos juntos."]],
        a2_mod_27: [["すみません きょう は ちょっと", "Desculpe, hoje está um pouco difícil..."], ["また こんど おねがいします", "Em outra ocasião, por favor."]],
        a2_mod_28: [["ともだち に ほん を あげました", "Dei um livro a um amigo."], ["せんせい が じしょ を くれました", "O professor me deu um dicionário."]],
        a2_mod_29: [["らいねん にほん に いく つもり です", "Pretendo ir ao Japão no ano que vem."], ["くるま は かわない つもり です", "Não pretendo comprar um carro."]],
        a2_mod_30: [["まいにち にほんご を れんしゅう しました", "Pratiquei japonês todos os dias."], ["これからも にほんご を べんきょう します", "Continuarei estudando japonês."]]
    };
    const rules = {
        a2_mod_02: ["Frequência e ぜんぜん", "No sentido básico de “nem um pouco”, ぜんぜん combina com uma forma negativa. No japonês contemporâneo também há usos afirmativos coloquiais, fora do foco deste módulo.", "ぜんぜん + forma negativa", "ぜんぜん テレビを見ません。 — Não assisto TV de jeito nenhum."],
        a2_mod_11: ["Regra Básica do Grupo 2 e Forma TE", "Nos verbos do grupo 2 trabalhados aqui, retire ます e acrescente て. A terminação em います, por si só, não identifica com segurança o grupo verbal.", "食べます → 食べて／見ます → 見て", "食べます ➔ 食べて | 見ます ➔ 見て | 起きます ➔ 起きて"],
        a2_mod_13: ["Usos iniciais de 〜ています", "A forma て + います pode descrever uma ação em andamento; outros usos, como estados resultantes e hábitos, dependem do verbo e do contexto.", "forma て + います", "今、日本語を勉強しています。 — Estou estudando japonês agora."],
        a2_mod_16: ["Ações em sequência com a forma て", "A forma て conecta ações; a forma do predicado final normalmente situa a sequência no tempo, enquanto o contexto também contribui para a interpretação.", "Vて、Vて、Vます／ました", "起きて、朝ご飯を食べました。 — Acordei e tomei café da manhã."],
        a2_mod_17: ["Perguntar onde fazer baldeação", "Use どこで乗り換えますか para perguntar em que lugar ocorre a baldeação.", "どこで 乗り換えますか", "どこで乗り換えますか。— Onde faço baldeação?"],
        a2_mod_23: ["Expressar obrigação com 〜なければなりません", "A estrutura 〜なければなりません expressa que algo precisa ser feito. A força pragmática depende da situação.", "forma ない sem い + ければなりません", "薬を飲まなければなりません。 — Tenho que tomar o remédio."],
        a2_mod_27: ["Recusar de modo indireto com ちょっと", "Em convites, ちょっと… pode sinalizar hesitação ou recusa indireta. A escolha depende da relação, do contexto e do grau de formalidade.", "すみません、[circunstância] は ちょっと…", "今日はちょっと…。 — Hoje está um pouco difícil..."],
        a2_mod_28: ["Perspectiva em あげる e くれる", "あげる descreve uma dádiva do ponto de vista de quem dá; くれる descreve alguém dando ao falante ou a alguém de seu grupo. A escolha depende da direção e da perspectiva da dádiva.", "A は B に X を あげる／A が 私に X を くれる", "先生が私に本をくれました。 — O professor me deu um livro."],
        a2_mod_29: ["Intenção com つもりです", "Use a forma simples não passada antes de つもりです: a forma de dicionário para intenção afirmativa e a forma ない para intenção negativa.", "Vる／Vない + つもりです", "日本へ行くつもりです。— Pretendo ir ao Japão."]
    };
    const normalizeDialogueText = value => {
        if (typeof value !== "string") return value;
        return value
            .replace(/\[Seu Nome\](?:さん|-san|-sama)?[、,]?\s*/g, "")
            .replace(/\bmaasa\b/gi, "maiasa")
            .replace(/\bnomimase\s+n\b/gi, "nomimasen")
            .replace(/\bsuportsusimasu\b/gi, "supootsu o shimasu")
            .replace(/あたしい/g, "あたらしい");
    };
    const normalizeDialogue = value => {
        if (Array.isArray(value)) return value.map(normalizeDialogue);
        if (!value || typeof value !== "object") return normalizeDialogueText(value);
        Object.keys(value).forEach(key => { value[key] = normalizeDialogue(value[key]); });
        return value;
    };
    const makeBuilder = ([sentenceJp, translation]) => ({ sentenceJp, translation, chunks: sentenceJp.split(" ") });
    CURSO_A2_DADOS.forEach(module => {
        module.stage3_5_sentenceBuilder = builders[module.id].map(makeBuilder);
        const rule = rules[module.id];
        if (rule) {
            const pill = module.stage2_drops.find(item => item.type === "grammar_pill");
            Object.assign(pill, { title: rule[0], rule: rule[1], formula: rule[2], example: rule[3] });
        }
        if (module.id === "a2_mod_01") module.stage1_context.audioGuide = "Maiasa shichi-ji ni okimasu.";
        module.stage4_dialog.forEach(dialogue => {
            normalizeDialogue(dialogue);
            if (dialogue.content && dialogue.content.displayText) dialogue.npcMessage = dialogue.content.displayText;
            dialogue.options.forEach(option => {
                option.feedback = option.isCorrect
                    ? "A resposta corresponde ao contexto e à estrutura praticada."
                    : "A resposta não corresponde à pergunta ou à estrutura praticada neste contexto.";
            });
        });
        module.editorialReview = { status: "corrected", phase: "21B.2", scope: "all-editorial-targets", sources: ["genki-2e-1-textbook", "tobira-2009"] };
    });
})();
