const CURSO_B2_DADOS = [
    {
        "id": "b2_mod_01",
        "title": "Expressando Expectativas e Decepções: ~ni nihonki e ~koto ni natte iru",
        "section": 1,
        "sectionTitle": "Nuances Avançadas & Expressão de Emoções",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Ashita wa ame ga furu koto ni natte iru.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Explore os sentimentos sutis do japonês avançado: expressar regras e agendamentos oficiais (~koto ni natte iru) e a quebra de expectativas/decepções com polidez."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "～ことになっている",
                "romaji": "~koto ni natte iru",
                "translation": "Está estabelecido que... / É regra que...",
                "timeContext": "Regras sociais e compromissos pré-fixados."
            },
            {
                "type": "vocab",
                "kanji": "期待 (きたい)",
                "romaji": "Kitai",
                "translation": "Expectativa / Esperança",
                "timeContext": "Sentimento em relação ao futuro."
            },
            {
                "type": "grammar_pill",
                "title": "Expressando Regras e Convenções Socialmente Estabelecidas",
                "rule": "Usa-se Frase Dicionário/Nai + ことになっている (koto ni natte iru) para indicar acordos ou regras que não dependem da decisão do momento.",
                "formula": "[Verbo Dicionário/Nai] + ことになっている",
                "example": "Kono heya de wa sho o nugu koto ni natte iru (Está estabelecido que se tiram os sapatos nesta sala)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como dizer 'Está estabelecido pela regra que a reunião começa às 9h'?",
                "options": [
                    {
                        "label": "Kaigi wa ku-ji kara hajimaru koto ni natte imasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Kaigi wa ku-ji kara hajimaru to omoimasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Kaigi wa ku-ji kara hajimatte kudasai",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como expressar a decepção 'Apesar das expectativas, o filme foi sem graça'?",
                "options": [
                    {
                        "label": "Kitai shite ita wari ni wa, eiga wa tsumaranakatta desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Kitai wa oishii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Eiga o tabemashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Koko de wa shashin o toranai koto ni natte imasu'",
                "options": [
                    {
                        "label": "É regra aqui não tirar fotos",
                        "isCorrect": true
                    },
                    {
                        "label": "Tire fotos aqui por favor",
                        "isCorrect": false
                    },
                    {
                        "label": "Gosto de fotos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual a diferença de '~koto ni natte iru' para '~koto ni suru'?",
                "options": [
                    {
                        "label": "~koto ni natte iru é uma regra/acordo coletivo; ~koto ni suru é uma decisão individual",
                        "isCorrect": true
                    },
                    {
                        "label": "Não há diferença",
                        "isCorrect": false
                    },
                    {
                        "label": "Usados apenas para bebidas",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como dizer 'Está previsto que o contrato expira no mês que vem'?",
                "options": [
                    {
                        "label": "Raigetsu keiyaku ga kireru koto ni natte imasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Raigetsu keiyaku o kirete kudasai",
                        "isCorrect": false
                    },
                    {
                        "label": "Raigetsu keiyaku o shimasu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "けいざい の へんか に ともない けいかく を みなおします",
                "translation": "Acompanhando as mudanças econômicas, revisaremos o plano.",
                "chunks": [
                    "けいざい",
                    "の",
                    "へんか",
                    "に",
                    "ともない",
                    "けいかく",
                    "を",
                    "みなおします"
                ]
            },
            {
                "sentenceJp": "ビジネス において しんらい が いちばん じゅうよう です",
                "translation": "No mundo dos negócios, a confiança é o mais importante.",
                "chunks": [
                    "ビジネス",
                    "において",
                    "しんらい",
                    "が",
                    "いちばん",
                    "じゅうよう",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: No condomínio japonês, você conversa com o síndico sobre as regras de coleta de lixo.",
                "npcName": "Síndico Noguchi",
                "npcMessage": "[Seu Nome]-san, kanri kisho ni yoru to, gomi wa asa hachi-ji maeni dasu koto ni natte imasu yo. (Segundo o regulamento, está estabelecido que o lixo deve ser colocado antes das 8h.)",
                "options": [
                    {
                        "text": "Ha! Shouchi shimashita! Kakunin shite okimasu! (Ah! Compreendido! Vou deixar confirmado!)",
                        "feedback": "Respeito e compreensão de norma social avançada!",
                        "isCorrect": true
                    },
                    {
                        "text": "Gomi wa oishii desu.",
                        "feedback": "Sem nexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O síndico explica que houve reclamações de vizinhos por ruído.",
                "npcName": "Síndico Noguchi",
                "npcMessage": "Yoru juu-ji以降 (ikou) wa shizuka ni suru koto ni natte iru node, ki o tsukete kudasai. (Como é regra ficar em silêncio após as 22h, por favor tome cuidado.)",
                "options": [
                    {
                        "text": "Gok迷惑 (meiwaku) o okake shite moushiwake arimasen. Zettai ni ki o tsukemasu. (Mil desculpas por causar transtorno. Com certeza terei mais cuidado.)",
                        "feedback": "Linguagem corporativa e polidez social exemplar!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai desu.",
                        "feedback": "Pouco formal.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O síndico agradece sua cooperação.",
                "npcName": "Síndico Noguchi",
                "npcMessage": "Wakatte kurete tasukaru yo. Yoroshiku. (Ajuda muito você compreender. Conto com você.)",
                "options": [
                    {
                        "text": "Kochira koso, kongo to mo yoroshiku o-negai itashimasu. (Eu é quem agradeço, conto com a sua orientação constante.)",
                        "feedback": "Etiqueta avançada de nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que indica a estrutura gramatical '~koto ni natte iru'?",
                "options": [
                    "Uma regra, norma ou agendamento socialmente estabelecido",
                    "Uma decisão individual recente",
                    "Uma proibição informal"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～ことになっている' (~koto ni natte iru)?",
                "options": [
                    "Está estabelecido que... / É regra que...",
                    "Expectativa / Esperança",
                    "Desculpe"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '期待 (きたい)' (Kitai)?",
                "options": [
                    "Está estabelecido que... / É regra que...",
                    "Expectativa / Esperança",
                    "Desculpe"
                ],
                "correctIndex": 1
            },
            {
                "question": "Sobre a regra 'Expressando Regras e Convenções Socialmente Estabelecidas': qual afirmação é correta?",
                "options": [
                    "Usa-se Frase Dicionário/Nai + ことになっている (koto ni natte iru) para indicar acordos ou regras que não dependem da decisão do momento.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "Como dizer 'Está estabelecido pela regra que a reunião começa às 9h'?",
                "options": [
                    "Kaigi wa ku-ji kara hajimaru koto ni natte imasu",
                    "Kaigi wa ku-ji kara hajimaru to omoimasu",
                    "Kaigi wa ku-ji kara hajimatte kudasai"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_02",
        "title": "Nuances de 'Apenas' e 'Somente' Avançados: ~dake de naku e ~ni suginai",
        "section": 1,
        "sectionTitle": "Nuances Avançadas & Expressão de Emoções",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Nihon-go dake de naku, Kanji mo benkyou shite imasu. Kore wa ippo ni suginai.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Eleve seu repertório expressativo para além do simples 'dake'. Domine estruturas refinadas como 'Não apenas X, mas também Y' (~dake de naku) e a modéstia avançada 'Nada mais é do que...' (~ni suginai)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "～だけでなく",
                "romaji": "~dake de naku",
                "translation": "Não apenas... como também...",
                "timeContext": "Adicionar argumentos e nuances."
            },
            {
                "type": "vocab",
                "kanji": "～にすぎない",
                "romaji": "~ni suginai",
                "translation": "Nada mais é do que... / Não passa de...",
                "timeContext": "Modéstia ou limitação consciente."
            },
            {
                "type": "grammar_pill",
                "title": "Construindo Frases de Acréscimo e Modéstia Avançada",
                "rule": "1) Frase A + だけでなく (dake de naku) + Frase B = Não só A, como B. 2) Substantivo/Verbo Casual + にすぎない (ni suginai) = Não passa de X.",
                "formula": "[A] だけでなく [B] | [Frase] + にすぎない",
                "example": "Kare wa kashikoi dake de naku, yasashii desu (Ele não é apenas inteligente, mas também gentil)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como dizer 'Ele fala não apenas japonês, mas também chinês'?",
                "options": [
                    {
                        "label": "Kare wa Nihon-go dake de naku, Chuugoku-go mo hanasemasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Kare wa Nihon-go dake hanasemasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Kare wa Nihon-go to Chuugoku-go ga kirai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como expressar a modéstia 'Isso é apenas um pequeno passo no meu aprendizado'?",
                "options": [
                    {
                        "label": "Kore wa watashi no gokushin no ippo ni suginai",
                        "isCorrect": true
                    },
                    {
                        "label": "Kore wa ippo desu ka",
                        "isCorrect": false
                    },
                    {
                        "label": "Kore wa ippo o tabemashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Kono shouhin wa kirei na dake de naku, benri desu'",
                "options": [
                    {
                        "label": "Este produto não é apenas bonito, como é prático",
                        "isCorrect": true
                    },
                    {
                        "label": "Este produto é muito feio",
                        "isCorrect": false
                    },
                    {
                        "label": "Não compre este produto",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual o efeito diplomático de usar '~ni suginai' ao se referir à própria conquista?",
                "options": [
                    {
                        "label": "Demonstrar modéstia profissional avançada",
                        "isCorrect": true
                    },
                    {
                        "label": "Exagera e ostenta",
                        "isCorrect": false
                    },
                    {
                        "label": "Despede-se da pessoa",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como dizer 'O sucesso não passa de um resultado do esforço diário'?",
                "options": [
                    {
                        "label": "Seikou wa mainichi no doryoku no kekka ni suginai",
                        "isCorrect": true
                    },
                    {
                        "label": "Seikou wa doryoku desu ka",
                        "isCorrect": false
                    },
                    {
                        "label": "Seikou wa arimasen deshita",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "環境 問題 に 対して 対策 を たてる 必要 が あります",
                "translation": "É necessário tomar medidas contra os problemas ambientais.",
                "chunks": [
                    "環境",
                    "問題",
                    "に",
                    "対して",
                    "対策",
                    "を",
                    "たてる",
                    "必要",
                    "が",
                    "あります"
                ]
            },
            {
                "sentenceJp": "新しい 技術 を 導入 する こと になりました",
                "translation": "Ficou decidido introduzir novas tecnologias.",
                "chunks": [
                    "新しい",
                    "技術",
                    "を",
                    "導入",
                    "する",
                    "こと",
                    "になりました"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Em um simpósio acadêmico, o mediador elogia a sua apresentação.",
                "npcName": "Mediador Simpósio",
                "npcMessage": "[Seu Nome]-san, subarashii bunseki deshita! (Foi uma análise espetacular!)",
                "options": [
                    {
                        "text": "Koure wa watashi no shiron ni suginai desu ga, kounai ni oyobaneba saiwaikou desu. (Nada mais é do que a minha modesta tese, mas seria uma honra se servir de contribuição.)",
                        "feedback": "Modéstia acadêmica avançada perfeita!",
                        "isCorrect": true
                    },
                    {
                        "text": "Watashi wa天才 (tensai) desu!",
                        "feedback": "Arrogante e inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida sem sentido.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O mediador ressalta que seus dados beneficiarão a empresa inteira.",
                "npcName": "Mediador Simpósio",
                "npcMessage": "Team dake de naku, kaisha zenntai no shien ni narimasu yo. (Beneficiará não apenas a equipe, mas a empresa toda.)",
                "options": [
                    {
                        "text": "Kono seika wa team minasan no doryoku no kekka dake de naku, shien no okage desu. (Este resultado não é só fruto do esforço da equipe, como também do apoio de todos.)",
                        "feedback": "Uso magnífico de dake de naku!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Sem motivo para desculpas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O mediador deseja sucesso nos próximos passos do projeto.",
                "npcName": "Mediador Simpósio",
                "npcMessage": "Kongo no katsudou mo kitai shite orimasu. (Esperamos grandes realizações nas suas próximas atividades.)",
                "options": [
                    {
                        "text": "Kitai ni kotaerareuよう, kongo mo精進 (shoujin) itashimasu! (Me dedicarei ao máximo para corresponder às expectativas!)",
                        "feedback": "Kenjougo corporativo refinado!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Pouco profissional.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que expressa a estrutura '~dake de naku'?",
                "options": [
                    "Acréscimo enfático ('não apenas X, mas também Y')",
                    "Uma escolha exclusiva de apenas um item",
                    "Uma proibição severa"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～だけでなく' (~dake de naku)?",
                "options": [
                    "Não apenas... como também...",
                    "Nada mais é do que... / Não passa de...",
                    "Desculpe"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～にすぎない' (~ni suginai)?",
                "options": [
                    "Não apenas... como também...",
                    "Nada mais é do que... / Não passa de...",
                    "Desculpe"
                ],
                "correctIndex": 1
            },
            {
                "question": "Sobre a regra 'Construindo Frases de Acréscimo e Modéstia Avançada': qual afirmação é correta?",
                "options": [
                    "1) Frase A + だけでなく (dake de naku) + Frase B = Não só A, como B. 2) Substantivo/Verbo Casual + にすぎない (ni suginai) = Não passa de X.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "Como dizer 'Ele fala não apenas japonês, mas também chinês'?",
                "options": [
                    "Kare wa Nihon-go dake de naku, Chuugoku-go mo hanasemasu",
                    "Kare wa Nihon-go dake hanasemasu",
                    "Kare wa Nihon-go to Chuugoku-go ga kirai desu"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_03",
        "title": "Expressando Julgamentos e Críticas Sutis: ~kuse ni e ~wari ni wa",
        "section": 1,
        "sectionTitle": "Nuances Avançadas & Expressão de Emoções",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Shiranai kuse ni, hanasanaide. Nedan no wari ni wa oishii.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Domine a gramática das contradições e expectativas: expressar críticas sutis ('Apesar de não saber, fala como se soubesse') com ~kuse ni e relações de custo-benefício ('Considerando o preço, está ótimo') com ~wari ni wa."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "～くせに",
                "romaji": "~kuse ni",
                "translation": "Apesar de... / Sendo que... (Crítica/Irritação)",
                "timeContext": "Expressar contradição de atitude negativa de alguém."
            },
            {
                "type": "vocab",
                "kanji": "～わりに（は）",
                "romaji": "~wari ni (wa)",
                "translation": "Considerando que... / Em proporção a...",
                "timeContext": "Avaliação de custo-benefício ou proporção."
            },
            {
                "type": "grammar_pill",
                "title": "Contradição Emocional vs Avaliação Proporcional",
                "rule": "1) ~kuse ni indica irritação quando a ação de alguém contradiz sua condição (Kodomo no kuse ni = Sendo apenas uma criança...). 2) ~wari ni wa avalia se o resultado supera ou não o esperado para a proporção.",
                "formula": "[Forma Casual] + くせに | [Forma Casual] + わりに(は)",
                "example": "Shiranai kuse ni ibaru na (Não se gabe sendo que nem sabe) | Kono mise wa nedan no wari ni wa oishii (Esta loja é gostosa considerando o preço)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como expressar irritação: 'Ele não faz nada, apesar de reclamar sempre'?",
                "options": [
                    {
                        "label": "Kare wa monku o iu kuse ni, nani mo shinai",
                        "isCorrect": true
                    },
                    {
                        "label": "Kare wa monku o iu wari ni wa, nani mo shinai",
                        "isCorrect": false
                    },
                    {
                        "label": "Kare wa monku o itte kudasai",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como elogiar um hotel econômico: 'Considerando que é barato, o quarto é bem limpo'?",
                "options": [
                    {
                        "label": "Yasui wari ni wa, heya ga kirei desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Yasui kuse ni, heya ga kirei desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Yasui to omoimasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Nihon-jin no kuse ni, Kanji ga yomenai'",
                "options": [
                    {
                        "label": "Apesar de ser japonês, não consegue ler Kanji (Contradição)",
                        "isCorrect": true
                    },
                    {
                        "label": "Todo japonês lê Kanji",
                        "isCorrect": false
                    },
                    {
                        "label": "Kanji é gostoso",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual a diferença de tom entre '~kuse ni' e '~wari ni wa'?",
                "options": [
                    {
                        "label": "~kuse ni traz forte tom de crítica/reprovação; ~wari ni wa é uma comparação proporcional objetiva",
                        "isCorrect": true
                    },
                    {
                        "label": "Não há diferença",
                        "isCorrect": false
                    },
                    {
                        "label": "Ambos são usados apenas para animais",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como dizer 'Para a idade dele, ele parece muito jovem'?",
                "options": [
                    {
                        "label": "Neshirai no wari ni wa, wakaku miemasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Neshirai no kuse ni, wakaku miemasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Neshirai wa ikura desu ka",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "少子化 に 伴い 労働力 が 減少 しています",
                "translation": "Acompanhando a baixa natalidade, a força de trabalho está diminuindo.",
                "chunks": [
                    "少子化",
                    "に",
                    "伴い",
                    "労働力",
                    "が",
                    "減少",
                    "しています"
                ]
            },
            {
                "sentenceJp": "高齢化 社会 への 対策 が 急務 です",
                "translation": "As medidas para a sociedade envelhecida são urgentes.",
                "chunks": [
                    "高齢化",
                    "社会",
                    "への",
                    "対策",
                    "が",
                    "急務",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você e seu colega comentam sobre uma nova loja de departamento na cidade.",
                "npcName": "Kenji",
                "npcMessage": "[Seu Nome]-san, ano atarashii mise, nedan ga takai ne. (Aquela loja nova é cara, né.)",
                "options": [
                    {
                        "text": "Un, demo nedan no wari ni wa quoriti (shiina) ga yoshiku nai ne. (É, mas considerando o preço alto, a qualidade não é tão boa, né.)",
                        "feedback": "Avaliação de custo-benefício refinada com wari ni wa!",
                        "isCorrect": true
                    },
                    {
                        "text": "Mise o tabemashita.",
                        "feedback": "Sem sentido.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Kenji comenta sobre um influenciador que critica a loja sem ter ido lá.",
                "npcName": "Kenji",
                "npcMessage": "Ano reviewer, itta koto nai kuse ni, warui koto bakari kaite iru yo. (Aquele crítico, apesar de nunca ter ido lá, só escreve coisa ruim.)",
                "options": [
                    {
                        "text": "Hontou da ne! Jissai ni itte inai kuse ni, hihan suru no wa ikenai yo ne. (Verdade! Criticismo sem nem ter ido lá de verdade é feio, né.)",
                        "feedback": "Uso perfeito da crítica empática com kuse ni!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Sem motivo para desculpas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Vocês decidem ir testar a loja por conta própria antes de julgar.",
                "npcName": "Kenji",
                "npcMessage": "Jibun-tachi de itte tashikameyou! (Vamos nós mesmos lá verificar!)",
                "options": [
                    {
                        "text": "Un! Jibun no me de miteru no ga ichiban da ne! (É! Ver com os próprios olhos é a melhor coisa!)",
                        "feedback": "Conexão fluida de nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a nuance emocional carregada pela expressão '~kuse ni'?",
                "options": [
                    "Crítica ou reprovação diante de uma contradição de atitude de alguém",
                    "Gratidão profunda por um favor",
                    "Uma ordem de trabalho"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～くせに' (~kuse ni)?",
                "options": [
                    "Apesar de... / Sendo que... (Crítica/Irritação)",
                    "Considerando que... / Em proporção a...",
                    "Desculpe"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～わりに（は）' (~wari ni (wa))?",
                "options": [
                    "Apesar de... / Sendo que... (Crítica/Irritação)",
                    "Considerando que... / Em proporção a...",
                    "Desculpe"
                ],
                "correctIndex": 1
            },
            {
                "question": "Sobre a regra 'Contradição Emocional vs Avaliação Proporcional': qual afirmação é correta?",
                "options": [
                    "1) ~kuse ni indica irritação quando a ação de alguém contradiz sua condição (Kodomo no kuse ni = Sendo apenas uma criança...). 2) ~wari ni wa avalia se o resultado supera ou não o esperado para a proporção.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "Como expressar irritação: 'Ele não faz nada, apesar de reclamar sempre'?",
                "options": [
                    "Kare wa monku o iu kuse ni, nani mo shinai",
                    "Kare wa monku o iu wari ni wa, nani mo shinai",
                    "Kare wa monku o itte kudasai"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_04",
        "title": "Linguagem Figurada e Expressões Idiomáticas (Kanyouku)",
        "section": 1,
        "sectionTitle": "Nuances Avançadas & Expressão de Emoções",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Me ga回 (mawa) ru isogashisa. Kao ga hiroi desu ne.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Aprenda os Kanyouku (Expressões Idiomáticas Japonesas)! Dominar metáforas com partes do corpo ('ter olhos atentos', 'ter um rosto largo/ser famoso', 'dar uma mãozinha') é o verdadeiro diferencial do japonês fluente."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "かんようく (慣用句)",
                "romaji": "Kanyouku",
                "translation": "Expressão idiomática",
                "timeContext": "Metáforas culturais da língua japonesa."
            },
            {
                "type": "vocab",
                "kanji": "顔が広い (かおがひろい)",
                "romaji": "Kao ga hiroi",
                "translation": "Ter o rosto largo (Ser muito bem conectado/famoso)",
                "timeContext": "Expressão idiomática de contatos sociais."
            },
            {
                "type": "vocab",
                "kanji": "手を貸す (てをかす)",
                "romaji": "Te o kasu",
                "translation": "Emprestar a mão (Dar uma ajuda)",
                "timeContext": "Oferecer auxílio."
            },
            {
                "type": "grammar_pill",
                "title": "Metáforas com Partes do Corpo (Kanyouku)",
                "rule": "1) Me ga mawaru (A cabeça/olhos giram = Estar extremamente ocupado). 2) Kao ga hiroi (Conhecer muita gente). 3) Te o kasu (Ajudar). 4) Kuchi ga karai (Boca leve = Não guardar segredo).",
                "formula": "[Parte do Corpo] + [Verbo/Adjetivo Idiomático]",
                "example": "Saikin me ga mawaru isogashisa desu (Ultimamente estou num ritmo de trabalho vertiginoso)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. O que significa a expressão idiomática 'Kao ga hiroi (顔が広い)'?",
                "options": [
                    {
                        "label": "Ser uma pessoa muito popular e bem conectada",
                        "isCorrect": true
                    },
                    {
                        "label": "Ter um rosto grande fisicamente",
                        "isCorrect": false
                    },
                    {
                        "label": "Estar com dor de dente",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como pedir ajuda a um colega usando a metáfora 'Emprestar a mão'?",
                "options": [
                    {
                        "label": "Chotto te o kashte kure nai?",
                        "isCorrect": true
                    },
                    {
                        "label": "Chotto te o tabete kudasai",
                        "isCorrect": false
                    },
                    {
                        "label": "Chotto me o kashte kudasai",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. O que expressa a frase 'Saikin me ga mawaru isogashisa desu'?",
                "options": [
                    {
                        "label": "Estou tão ocupado que meus olhos estão girando / ritmo insano",
                        "isCorrect": true
                    },
                    {
                        "label": "Estou com tontura médica",
                        "isCorrect": false
                    },
                    {
                        "label": "Não tenho nada para fazer",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza: 'Kare wa kuchi ga karai node, himitsu o hanasani de'",
                "options": [
                    {
                        "label": "Como a boca dele é leve (fofoqueiro), não conte segredos a ele",
                        "isCorrect": true
                    },
                    {
                        "label": "Ele gosta de comida apimentada",
                        "isCorrect": false
                    },
                    {
                        "label": "Ele não fala japonês",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual expressão idiomática significa 'Ficar de olho em algo/cuidar'?",
                "options": [
                    {
                        "label": "Me o kubaru / Me o tsukeru",
                        "isCorrect": true
                    },
                    {
                        "label": "Mimi o taberu",
                        "isCorrect": false
                    },
                    {
                        "label": "Te o kiki",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "プロジェクト の 成功 に 向けて 全力 を つくします",
                "translation": "Daremos o nosso melhor em direção ao sucesso do projeto.",
                "chunks": [
                    "プロジェクト",
                    "の",
                    "成功",
                    "に",
                    "向けて",
                    "全力",
                    "を",
                    "つくします"
                ]
            },
            {
                "sentenceJp": "チーム の 協力 なし には 達成 できません",
                "translation": "Sem a cooperação da equipe, não se pode alcançar.",
                "chunks": [
                    "チーム",
                    "の",
                    "協力",
                    "なし",
                    "には",
                    "達成",
                    "できません"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você e seu colega corporativo estão sobrecarregados de projetos no escritório.",
                "npcName": "Satoshi",
                "npcMessage": "[Seu Nome]-san, saikin shigoto de me ga mawaru isogashisa da ne... (Nossa, ultimamente estamos ocupados a ponto dos olhos girarem...)",
                "options": [
                    {
                        "text": "Hontou ni! Te o kashite kureru hito ga ireba ii n da kedo ne. (Verdade! Seria ótimo se tivesse alguém para nos dar uma mãozinha, né.)",
                        "feedback": "Metáfora de ajuda (te o kasu) perfeitamente aplicada!",
                        "isCorrect": true
                    },
                    {
                        "text": "Te o tabemashita.",
                        "feedback": "Sem sentido.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Satoshi lembra que o gerente tem muitos contatos em outros setores.",
                "npcName": "Satoshi",
                "npcMessage": "Sato-buchou wa kao ga hiroi kara, dare ka shoukai shite kureru kamo! (Como o chefe Sato é muito bem conectado, pode ser que nos apresente alguém!)",
                "options": [
                    {
                        "text": "Sou da ne! Buchou ni相談 (soudan) shite miru koto ni suru yo! (É verdade! Decidi tentar consultar o chefe!)",
                        "feedback": "Uso brilhante de kamo, te miru e koto ni suru!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Desnecessário.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Satoshi deseja sorte na conversa com o chefe.",
                "npcName": "Satoshi",
                "npcMessage": "Yoroshiku頼 (tano) mu yo! (Conto com você nessa!)",
                "options": [
                    {
                        "text": "Un! Ii henji o moraeru you ganbaru yo! (Beleza! Vou me esforçar para conseguir uma boa resposta!)",
                        "feedback": "Conversa empolgante de nível avançado B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que significa a metáfora japonesa 'Te o kasu (手を貸す)'?",
                "options": [
                    "Dar uma mãozinha / Ajudar alguém em uma tarefa",
                    "Emprestar dinheiro",
                    "Cortar a mão"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'かんようく (慣用句)' (Kanyouku)?",
                "options": [
                    "Expressão idiomática",
                    "Ter o rosto largo (Ser muito bem conectado/famoso)",
                    "Emprestar a mão (Dar uma ajuda)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '顔が広い (かおがひろい)' (Kao ga hiroi)?",
                "options": [
                    "Expressão idiomática",
                    "Ter o rosto largo (Ser muito bem conectado/famoso)",
                    "Emprestar a mão (Dar uma ajuda)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra '手を貸す (てをかす)' (Te o kasu)?",
                "options": [
                    "Ter o rosto largo (Ser muito bem conectado/famoso)",
                    "Expressão idiomática",
                    "Emprestar a mão (Dar uma ajuda)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre a regra 'Metáforas com Partes do Corpo (Kanyouku)': qual afirmação é correta?",
                "options": [
                    "1) Me ga mawaru (A cabeça/olhos giram = Estar extremamente ocupado). 2) Kao ga hiroi (Conhecer muita gente). 3) Te o kasu (Ajudar). 4) Kuchi ga karai (Boca leve = Não guardar segredo).",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_05",
        "title": "Keigo Avançado: Sonkeigo e Kenjougo Profundos na Alta Liderança",
        "section": 2,
        "sectionTitle": "O Mundo dos Negócios & Etiqueta Corporativa",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Go-zanran ni narimashita. O-me ni kakarete koue desu.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Suba o último degrau da linguagem corporativa! Domine as formas mais elevadas de Keigo profissional usadas diante de diretoria, CEOs e governantes: O-me ni kakarer (Encontrar) e Guran ni naru."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "お目にかかる",
                "romaji": "O-me ni kakaru",
                "translation": "Encontrar (Kenjougo avançado de Aimeu)",
                "timeContext": "Dizer que você encontrou/conheceu um cliente/chefe."
            },
            {
                "type": "vocab",
                "kanji": "ご覧になる",
                "romaji": "Guran ni naru",
                "translation": "Ver / Olhar (Sonkeigo de Miru)",
                "timeContext": "Convidar o cliente a olhar um documento."
            },
            {
                "type": "grammar_pill",
                "title": "Verbos Supremos de Keigo Corporativo",
                "rule": "1) Aru ➔ Gozaimasu. 2) Au (Encontrar) ➔ O-me ni kakaru. 3) Shiru (Saber) ➔ Go-zonji desu (Sonkeigo) / Zonji-agesuru (Kenjougo). 4) Taberu ➔ Meshiagaru (Sonkeigo) / Itadaku (Kenjougo).",
                "formula": "Sonkeigo (Outro) vs Kenjougo (Eu)",
                "example": "Shachou ni o-me ni kakarete, taihen koue de gozaimasu (Foi uma honra imensa encontrar o Presidente)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Qual o verbo em Kenjougo avançado para dizer a um CEO 'É uma honra conhecê-lo/encontrá-lo'?",
                "options": [
                    {
                        "label": "O-me ni kakarete koue desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Aite koudou desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Mite kudasai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como perguntar respeitosamente a um cliente 'O senhor já tomou conhecimento deste projeto?'",
                "options": [
                    {
                        "label": "Kono project o go-zonji desu ka?",
                        "isCorrect": true
                    },
                    {
                        "label": "Kono project o shirimashita ka?",
                        "isCorrect": false
                    },
                    {
                        "label": "Kono project o shiru tsumori desu ka?",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Kozutsumi o guran ni natte kudasai'",
                "options": [
                    {
                        "label": "Por favor, observe/verifique o documento",
                        "isCorrect": true
                    },
                    {
                        "label": "Olhe para mim",
                        "isCorrect": false
                    },
                    {
                        "label": "Não olhe para nada",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual é o verbo de Kenjougo (humildade própria) para 'Saber / Ter conhecimento'?",
                "options": [
                    {
                        "label": "Zonji-agesuru (存じ上げる)",
                        "isCorrect": true
                    },
                    {
                        "label": "Go-zonji desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Shiru",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como dizer 'Temos todas as respostas prontas' na polidez Keigo suprema?",
                "options": [
                    {
                        "label": "Kanzen na answer ga gozaimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Answer ga arimasu yo",
                        "isCorrect": false
                    },
                    {
                        "label": "Answer wa nai desu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "本日は お忙しい ところ お越しいただき ありがとうございます",
                "translation": "Muito obrigado por vir hoje apesar de sua agenda ocupada.",
                "chunks": [
                    "本日は",
                    "お忙しい",
                    "ところ",
                    "お越しいただき",
                    "ありがとうございます"
                ]
            },
            {
                "sentenceJp": "ご検討 の ほど よろしく お願い申し上げます",
                "translation": "Solicito cordialmente a sua consideração.",
                "chunks": [
                    "ご検討",
                    "の",
                    "ほど",
                    "よろしく",
                    "お願い申し上げます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está em uma reunião com o Presidente da empresa investidora internacional.",
                "npcName": "Presidente Investidor",
                "npcMessage": "[Seu Nome]-san, saikin no business performance wa ikaga desu ka? (Como está o desempenho recente dos negócios?)",
                "options": [
                    {
                        "text": "Honjitsu wa o-me ni kakarete taihen koue de gozaimasu. Shiryou o go-junbi itashimashita node, guran ni natte kudasai. (Hoje é uma honra imensa encontrá-lo. Preparei os documentos, por favor os aprecie.)",
                        "feedback": "Keigo corporativo supremo irretocável de nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Performance wa oishii desu.",
                        "feedback": "Sem nexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O Presidente Investidor folheia o relatório com entusiasmo.",
                "npcName": "Presidente Investidor",
                "npcMessage": "Subarashii data da. Kono plan wa sude ni go-zonji datta no ka? (Dados excelentes. Você já conhecia este plano?)",
                "options": [
                    {
                        "text": "Hai, sude ni zonji-agete orimashita. Keikaku-dori ni shinkou itashimasu. (Sim, já tinha conhecimento prévio. Prosseguiremos exatamente conforme o planejamento.)",
                        "feedback": "Uso impecável de zonji-ageru e itashimasu!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Desnecessário.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O Presidente aprova o investimento com um aperto de mão.",
                "npcName": "Presidente Investidor",
                "npcMessage": "Kongo no katsudou ni kitai shite iru yo. (Conto com suas atividades futuras.)",
                "options": [
                    {
                        "text": "Kitai ni kotaerareruよう, zenshin-zenshin de shoujin itashimasu. Domo arigatou gozaimashita! (Me dedicarei com todo o corpo e alma para corresponder! Muito obrigado!)",
                        "feedback": "Encerramento de reunião executiva de altíssimo nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual verbo Kenjougo é usado para dizer que VOCÊ encontrou um cliente/superior com extremo respeito?",
                "options": [
                    "O-me ni kakaru (お目にかかる)",
                    "Irassharu",
                    "Meshiagaru"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'お目にかかる' (O-me ni kakaru)?",
                "options": [
                    "Encontrar (Kenjougo avançado de Aimeu)",
                    "Ver / Olhar (Sonkeigo de Miru)",
                    "Desculpe"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ご覧になる' (Guran ni naru)?",
                "options": [
                    "Encontrar (Kenjougo avançado de Aimeu)",
                    "Ver / Olhar (Sonkeigo de Miru)",
                    "Desculpe"
                ],
                "correctIndex": 1
            },
            {
                "question": "Sobre a regra 'Verbos Supremos de Keigo Corporativo': qual afirmação é correta?",
                "options": [
                    "1) Aru ➔ Gozaimasu. 2) Au (Encontrar) ➔ O-me ni kakaru. 3) Shiru (Saber) ➔ Go-zonji desu (Sonkeigo) / Zonji-agesuru (Kenjougo). 4) Taberu ➔ Meshiagaru (Sonkeigo) / Itadaku (Kenjougo).",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual o verbo em Kenjougo avançado para dizer a um CEO 'É uma honra conhecê-lo/encontrá-lo'?",
                "options": [
                    "O-me ni kakarete koue desu",
                    "Aite koudou desu",
                    "Mite kudasai desu"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_06",
        "title": "Redação de E-mails Corporativos & Relatórios: Aisatsu, Hondai e Musubi",
        "section": 2,
        "sectionTitle": "O Mundo dos Negócios & Etiqueta Corporativa",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Kono ken ni tsuite, ki-shou-ten-ketsu de report o sakusei shimashita.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Domine a arte da escrita de negócios em japonês! Aprenda a estrutura tripartite dos e-mails corporativos formais: Saudação Inicial (Aisatsu), Tópico Principal (Hondai) e Encerramento (Musubi)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "あいさつ (挨拶)",
                "romaji": "Aisatsu",
                "translation": "Saudação formal de e-mail",
                "timeContext": "Primeira linha corporativa obrigatória."
            },
            {
                "type": "vocab",
                "kanji": "ほんだい (本題)",
                "romaji": "Hondai",
                "translation": "Assunto / Tópico principal",
                "timeContext": "O corpo da mensagem."
            },
            {
                "type": "vocab",
                "kanji": "むすび (結び)",
                "romaji": "Musubi",
                "translation": "Encerramento / Conclusão",
                "timeContext": "Linhas finais de polidez."
            },
            {
                "type": "grammar_pill",
                "title": "A Estrutura Perfeita do E-mail Corporativo B2",
                "rule": "1) Aisatsu: Itsumo osewa ni natte orimasu. 2) Hondai: Kono ken ni tsuite go-renraku itashimashita (Entro em contato referente a este assunto). 3) Musubi: Kiso yoroshiku o-negai itashimasu.",
                "formula": "Aisatsu ➔ Hondai ➔ Musubi",
                "example": "Kono ken ni tsuite, tenpu-shiryou o go-kakunin kudasai (Referente a este assunto, favor verificar o anexo)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como iniciar o corpo principal (Hondai) de um e-mail de negócios pós-saudação?",
                "options": [
                    {
                        "label": "Kono ken ni tsuite go-renraku itashimashita",
                        "isCorrect": true
                    },
                    {
                        "label": "Konnichiwa, genki desu ka",
                        "isCorrect": false
                    },
                    {
                        "label": "Sayounara, mata ashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual a expressão formal usada ao anexar um documento de proposta ao e-mail?",
                "options": [
                    {
                        "label": "Kikaku-sho o tenpu itashimashita node, go-kakunin kudasai",
                        "isCorrect": true
                    },
                    {
                        "label": "Kikaku-sho o tabemashita",
                        "isCorrect": false
                    },
                    {
                        "label": "Kikaku-sho wa arimasen",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza o fecho de e-mail: 'Kongo to mo kawaranu go-koujo o tamawari masu you...'",
                "options": [
                    {
                        "label": "Solicito respeitosamente a continuidade da nossa valiosa parceria",
                        "isCorrect": true
                    },
                    {
                        "label": "Estou cancelando o contrato",
                        "isCorrect": false
                    },
                    {
                        "label": "Não me mande mais e-mails",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual a ordem correta das 3 partes de um e-mail corporativo em japonês?",
                "options": [
                    {
                        "label": "Aisatsu (Saudação) ➔ Hondai (Assunto) ➔ Musubi (Encerramento)",
                        "isCorrect": true
                    },
                    {
                        "label": "Musubi ➔ Hondai ➔ Aisatsu",
                        "isCorrect": false
                    },
                    {
                        "label": "Apenas Hondai",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como pedir desculpas em um e-mail por uma resposta tardia com elegância Keigo?",
                "options": [
                    {
                        "label": "Go-renraku ga osoku narimashita koto, mukai-shou itashimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Go-renraku wa kirai desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Gomen ne!",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "契約 の 条件 を 慎重 に 確認 する 必要があります",
                "translation": "É necessário confirmar cuidadosamente as condições do contrato.",
                "chunks": [
                    "契約",
                    "の",
                    "条件",
                    "を",
                    "慎重",
                    "に",
                    "確認",
                    "する",
                    "必要があります"
                ]
            },
            {
                "sentenceJp": "双方 の 合意 に 基づいて 進めます",
                "translation": "Avançaremos com base no acordo de ambas as partes.",
                "chunks": [
                    "双方",
                    "の",
                    "合意",
                    "に",
                    "基づいて",
                    "進めます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você revisa com seu supervisor a minuta do e-mail comercial para o cliente.",
                "npcName": "Supervisor Mori",
                "npcMessage": "[Seu Nome]-san, B2 project no e-meeru draft, dekita? (O rascunho do e-mail do projeto B2 ficou pronto?)",
                "options": [
                    {
                        "text": "Hai! Aisatsu kara Musubi kore de tenpu shimashita. Go-kakunin itadakemasu ka? (Sim! Anexei da saudação ao encerramento. O senhor pode verificar?)",
                        "feedback": "Estruturação corporativa perfeita!",
                        "isCorrect": true
                    },
                    {
                        "text": "E-meeru o tabemashita.",
                        "feedback": "Sem nexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O supervisor elogia a clareza do texto.",
                "npcName": "Supervisor Mori",
                "npcMessage": "Hondai ga meikaku de, sugbara shii bunshou da ne! (O assunto está claro, um excelente texto!)",
                "options": [
                    {
                        "text": "Arigatou gozaimasu! Dewa, konoまま (mama) soshin itashimasu! (Muito obrigado! Então enviarei exatamente assim!)",
                        "feedback": "Profissionalismo e agilidade corporativa!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Sem motivo para desculpas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O supervisor aprova o envio imediato.",
                "npcName": "Supervisor Mori",
                "npcMessage": "Yoroshiku o-negai suru yo! (Conto com você!)",
                "options": [
                    {
                        "text": "Shouchi itashimashita. Soshin kanryou-go, re-report itashimasu! (Compreendido. Após o envio, me reporto novamente!)",
                        "feedback": "Comunicação de escritório impecável de nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Quais são os 3 blocos obrigatórios de um e-mail de negócios japonês?",
                "options": [
                    "Aisatsu (Saudação), Hondai (Tópico principal) e Musubi (Encerramento)",
                    "Apenas o nome do remetente",
                    "Código de barras"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'あいさつ (挨拶)' (Aisatsu)?",
                "options": [
                    "Saudação formal de e-mail",
                    "Assunto / Tópico principal",
                    "Encerramento / Conclusão"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ほんだい (本題)' (Hondai)?",
                "options": [
                    "Saudação formal de e-mail",
                    "Assunto / Tópico principal",
                    "Encerramento / Conclusão"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'むすび (結び)' (Musubi)?",
                "options": [
                    "Assunto / Tópico principal",
                    "Saudação formal de e-mail",
                    "Encerramento / Conclusão"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre a regra 'A Estrutura Perfeita do E-mail Corporativo B2': qual afirmação é correta?",
                "options": [
                    "1) Aisatsu: Itsumo osewa ni natte orimasu. 2) Hondai: Kono ken ni tsuite go-renraku itashimashita (Entro em contato referente a este assunto). 3) Musubi: Kiso yoroshiku o-negai itashimasu.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_07",
        "title": "Negociação & Resolução de Conflitos: Discordar com Polidez",
        "section": 2,
        "sectionTitle": "O Mundo dos Negócios & Etiqueta Corporativa",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Moushiwake gozaimasen ga, kono jeiken wa uketori-kanemasu.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "No Japão, discordar diretamente é considerado indelicado. Aprenda a arte da negociação diplomática: recusar ou propor alternativas usando ~kanemasu ('Fica difícil/impossível') e expressões amortecedoras."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "～かねます",
                "romaji": "~kanemasu",
                "translation": "É difícil/impossível aceitar...",
                "timeContext": "Recusa diplomática em negócios."
            },
            {
                "type": "vocab",
                "kanji": "あいにく",
                "romaji": "Ainiku",
                "translation": "Infelizmente / Lamentavelmente",
                "timeContext": "Amortecedor antes de uma recusa."
            },
            {
                "type": "grammar_pill",
                "title": "A Gramática da Discordância Diplomática",
                "rule": "Em vez de dizer 'Dekimasen' (Não posso), conecte o Verbo sem masu + かねます (kanemasu) para expressar imposição institucional suave.",
                "formula": "[Verbo stem sem masu] + かねます",
                "example": "Kono shoujin wa o-tsuke-kanemasu (Fica difícil aceitar este pedido nas condições atuais)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como recusar diplomaticamente uma proposta em uma reunião dizendo 'É difícil aceitar'?",
                "options": [
                    {
                        "label": "Ainiku desu ga, kono keikaku wa uketori-kanemasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Kono keikaku wa dekimasen!",
                        "isCorrect": false
                    },
                    {
                        "label": "Kono keikaku wa oishii desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual a função da palavra amortecedora 'Ainiku (あいにく)' antes de uma resposta?",
                "options": [
                    {
                        "label": "Suavizar a má notícia/recusa demonstrando empatia",
                        "isCorrect": true
                    },
                    {
                        "label": "Fazer uma piada",
                        "isCorrect": false
                    },
                    {
                        "label": "Gritar com o cliente",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Go-kitai ni soi-kanemasu koto o o-yurushi kudasai'",
                "options": [
                    {
                        "label": "Por favor nos perdoe por não podermos atender às suas expectativas",
                        "isCorrect": true
                    },
                    {
                        "label": "Atendemos tudo o que você pediu",
                        "isCorrect": false
                    },
                    {
                        "label": "Não queremos conversa",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Como propor uma alternativa sem confrontar o cliente diretamente?",
                "options": [
                    {
                        "label": "Kono plan no kawari ni, B-plan wa ikaga desu ka?",
                        "isCorrect": true
                    },
                    {
                        "label": "A-plan wa dame desu",
                        "isCorrect": false
                    },
                    {
                        "label": "A-plan o tabemashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Por que a estrutura '~kanemasu' é tão valorizada no japonês corporativo N2/B2?",
                "options": [
                    {
                        "label": "Porque mantém a harmonia (Wa) ao negar a ação sem agredir verbalmente",
                        "isCorrect": true
                    },
                    {
                        "label": "Porque é a palavra mais curta do dicionário",
                        "isCorrect": false
                    },
                    {
                        "label": "Porque é usada apenas para crianças",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "市場 の ニーズ に 応じて 商品 を 開発 します",
                "translation": "Desenvolvemos produtos de acordo com as necessidades do mercado.",
                "chunks": [
                    "市場",
                    "の",
                    "ニーズ",
                    "に",
                    "応じて",
                    "商品",
                    "を",
                    "開発",
                    "します"
                ]
            },
            {
                "sentenceJp": "競合 他社 との 差別化 が 鍵 となります",
                "translation": "A diferenciação com empresas concorrentes torna-se a chave.",
                "chunks": [
                    "競合",
                    "他社",
                    "との",
                    "差別化",
                    "が",
                    "鍵",
                    "となります"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Um cliente solicita um desconto inviável de 50% no contrato.",
                "npcName": "Cliente Exigente",
                "npcMessage": "Kono nedan kara 50% discount shite kure nai ka? (Não dá para dar 50% de desconto neste valor?)",
                "options": [
                    {
                        "text": "Ainiku desu ga, kono nedan de wa shounin-kanemasu. Kawari ni 10% no bonus o-tsuke itashimasu ga, ikaga desu ka? (Infelizmente fica difícil aprovar por esse valor. Em alternativa, podemos incluir um bônus de 10%, o que acha?)",
                        "feedback": "Negociação diplomática perfeita com kanemasu e proposta alternativa!",
                        "isCorrect": true
                    },
                    {
                        "text": "Muri desu! Dame desu!",
                        "feedback": "Excessivamente agressivo e anti-profissional.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Não abandone a negociação.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O cliente considera a proposta alternativa atraente.",
                "npcName": "Cliente Exigente",
                "npcMessage": "Fumu... 10% no bonus nara, bad ja nai ne. (Hmm... se for com o bônus de 10%, não é nada mau.)",
                "options": [
                    {
                        "text": "Go-lingai itadaki arigatou gozaimasu! Dewa, B-plan de keiyaku-sho o o-machi itashimasu! (Obrigado por sua compreensão! Então prepararei o contrato pelo Plano B!)",
                        "feedback": "Fechamento de negócio magistral!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Desnecessário.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O cliente aperta a mão em acordo.",
                "npcName": "Cliente Exigente",
                "npcMessage": "Yoroshiku頼 (tano) mu yo! (Conto com você!)",
                "options": [
                    {
                        "text": "Kono-tabi wa seiritsu itashi, taihen koue de gozaimasu! (É uma imensa honra concretizarmos este acordo!)",
                        "feedback": "Fluência corporativa avançada de nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que a forma gramatical '~kanemasu' expressa no ambiente de negócios?",
                "options": [
                    "Uma recusa diplomática e respeitosa ('Fica difícil/impossível realizar...')",
                    "Um elogio caloroso",
                    "Uma confirmação imediata"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～かねます' (~kanemasu)?",
                "options": [
                    "É difícil/impossível aceitar...",
                    "Infelizmente / Lamentavelmente",
                    "Desculpe"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'あいにく' (Ainiku)?",
                "options": [
                    "É difícil/impossível aceitar...",
                    "Infelizmente / Lamentavelmente",
                    "Desculpe"
                ],
                "correctIndex": 1
            },
            {
                "question": "Sobre a regra 'A Gramática da Discordância Diplomática': qual afirmação é correta?",
                "options": [
                    "Em vez de dizer 'Dekimasen' (Não posso), conecte o Verbo sem masu + かねます (kanemasu) para expressar imposição institucional suave.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "Como recusar diplomaticamente uma proposta em uma reunião dizendo 'É difícil aceitar'?",
                "options": [
                    "Ainiku desu ga, kono keikaku wa uketori-kanemasu",
                    "Kono keikaku wa dekimasen!",
                    "Kono keikaku wa oishii desu"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_08",
        "title": "Apresentações e Discursos de Negócios: Pitch Executivo B2",
        "section": 2,
        "sectionTitle": "O Mundo dos Negócios & Etiqueta Corporativa",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Kyou wa B2 project ni tsuite発表 (happyou) itashimasu.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Domine a estrutura de um discurso e apresentação executiva (Pitch): introdução do tema, exposição de dados estatísticos, resposta a perguntas difíceis da plateia e encerramento memorável."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "はっぴょう (発表)",
                "romaji": "Happyou",
                "translation": "Apresentação / Anúncio público",
                "timeContext": "Exposição de projetos corporativos."
            },
            {
                "type": "vocab",
                "kanji": "とうけい (統計)",
                "romaji": "Toukei",
                "translation": "Estatística / Dados",
                "timeContext": "Fundamentação de argumentos em relatórios."
            },
            {
                "type": "grammar_pill",
                "title": "A Estrutura de uma Apresentação Executiva",
                "rule": "1) Abertura: Kyou wa [Tema] ni tsuite happyou itashimasu. 2) Apresentação de dados: Kono toukei ni yoru to... 3) Pergunta da plateia: Go-shitsumon wa gozaimasu ka?",
                "formula": "Happyou ➔ Toukei ➔ Shitsumon",
                "example": "Toukei ni yoru to, uritage ga 20% zouta itashimashita (Segundo os dados estatísticos, as vendas subiram 20%)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como abrir um discurso formal de apresentação dizendo 'Hoje apresentarei sobre o projeto B2'?",
                "options": [
                    {
                        "label": "Honjitsu wa B2 project ni tsuite happyou itashimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Kyou wa B2 project o tabemasu",
                        "isCorrect": false
                    },
                    {
                        "label": "B2 project wa arimasen",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como introduzir um gráfico de dados 'Segundo as estatísticas deste ano...'?",
                "options": [
                    {
                        "label": "Kotoshi no toukei ni yoru to...",
                        "isCorrect": true
                    },
                    {
                        "label": "Kotoshi no toukei wa oishii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Kotoshi no toukei ni ikimashou",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Nanika go-shitsumon wa gozaimasu ka?'",
                "options": [
                    {
                        "label": "Alguém possui alguma pergunta?",
                        "isCorrect": true
                    },
                    {
                        "label": "Não façam perguntas",
                        "isCorrect": false
                    },
                    {
                        "label": "A apresentação acabou",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Como responder com polidez a uma pergunta da plateia antes de explicar?",
                "options": [
                    {
                        "label": "Kicho na go-shitsumon, arigatou gozaimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Daraku na shitsumon desu ne",
                        "isCorrect": false
                    },
                    {
                        "label": "Shitsumon wa kirai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como encerrar a apresentação agradecendo a atenção dos diretores?",
                "options": [
                    {
                        "label": "Go-seichou, hontou ni arigatou gozaimashita",
                        "isCorrect": true
                    },
                    {
                        "label": "Sayounara, ja ne",
                        "isCorrect": false
                    },
                    {
                        "label": "Owari desu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "事故 を 未然 に 防ぐ ための 研修 を 行います",
                "translation": "Realizamos treinamentos para prevenir acidentes com antecedência.",
                "chunks": [
                    "事故",
                    "を",
                    "未然",
                    "に",
                    "防ぐ",
                    "ための",
                    "研修",
                    "を",
                    "行います"
                ]
            },
            {
                "sentenceJp": "安全 管理 の 徹底 が 求められています",
                "translation": "Exige-se rigor na gestão de segurança.",
                "chunks": [
                    "安全",
                    "管理",
                    "の",
                    "徹底",
                    "が",
                    "求められています"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está no palco do auditório corporativo iniciando seu Pitch para os executivos.",
                "npcName": "Plateia de Executivos",
                "npcMessage": "(Silêncio respeitoso aguardando o início do seu discurso)",
                "options": [
                    {
                        "text": "Honjitsu wa o-isogashii naka, go-seichou itadaki arigatou gozaimasu. B2 project no happyou o hajimemasu. (Hoje, apesar da agenda corrida de todos, agradeço pela atenção. Daremos início à apresentação do projeto B2.)",
                        "feedback": "Abertura executiva de altíssimo nível!",
                        "isCorrect": true
                    },
                    {
                        "text": "Konnichiwa! Minna genki?",
                        "feedback": "Muito informal para auditório executivo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Não fuja antes de apresentar.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Um dos diretores levanta a mão para fazer uma Pergunta sobre o orçamento.",
                "npcName": "Diretor Financeiro",
                "npcMessage": "Yosan no toukei ni tsuite, sukishi setsumei kure nai ka? (Pode explicar um pouco sobre a estatística do orçamento?)",
                "options": [
                    {
                        "text": "Kicho na go-shitsumon, arigatou gozaimasu. Toukei ni yoru to, ROI wa 150% ni reached itashimasu. (Agradeço a valiosa pergunta. Segundo os dados estatísticos, o ROI atingirá 150%.)",
                        "feedback": "Resposta precisa e altamente polida!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Sem motivo para desculpas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O auditório aplaude a sua apresentação.",
                "npcName": "Plateia de Executivos",
                "npcMessage": "(Aplausos entusiasmados dos diretores)",
                "options": [
                    {
                        "text": "Go-seichou, hontou ni arigatou gozaimashita! (Muito obrigado a todos pela atenção!)",
                        "feedback": "Encerramento memorável de nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual a expressão clássica Keigo para agradecer a atenção da plateia ao fim de uma palestra?",
                "options": [
                    "Go-seichou, arigatou gozaimashita (ご清聴ありがとうございました)",
                    "Itadakimasu",
                    "O-yasumi nasai"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'はっぴょう (発表)' (Happyou)?",
                "options": [
                    "Apresentação / Anúncio público",
                    "Estatística / Dados",
                    "Desculpe"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'とうけい (統計)' (Toukei)?",
                "options": [
                    "Apresentação / Anúncio público",
                    "Estatística / Dados",
                    "Desculpe"
                ],
                "correctIndex": 1
            },
            {
                "question": "Sobre a regra 'A Estrutura de uma Apresentação Executiva': qual afirmação é correta?",
                "options": [
                    "1) Abertura: Kyou wa [Tema] ni tsuite happyou itashimasu. 2) Apresentação de dados: Kono toukei ni yoru to... 3) Pergunta da plateia: Go-shitsumon wa gozaimasu ka?",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "Como abrir um discurso formal de apresentação dizendo 'Hoje apresentarei sobre o projeto B2'?",
                "options": [
                    "Honjitsu wa B2 project ni tsuite happyou itashimasu",
                    "Kyou wa B2 project o tabemasu",
                    "B2 project wa arimasen"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_09",
        "title": "Leitura de Notícias e Jornalismo: NHK News e Vocabulário Técnico",
        "section": 3,
        "sectionTitle": "Análise de Mídia, Notícias & Atualidades",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Keizai no toukei ni yoru to, keiki ga kaizou shite imasu.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Desenvolva a capacidade de ler e entender notícias reais da imprensa japonesa (NHK News)! Aprenda o vocabulário de economia, política, tecnologia e atualidades internacionais."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "けいざい (経済)",
                "romaji": "Keizai",
                "translation": "Economia",
                "timeContext": "Noticiário financeiro e de negócios."
            },
            {
                "type": "vocab",
                "kanji": "せいじ (政治)",
                "romaji": "Seiji",
                "translation": "Política",
                "timeContext": "Assuntos governamentais."
            },
            {
                "type": "grammar_pill",
                "title": "A Linguagem Jornalística Japonesa (Da/Dewa arimasen)",
                "rule": "Notícias e jornais usam estilo objetivo direto (~de aru em vez de ~desu) e passiva jornalística. Estrutura: [Fonte] によると (ni yoru to) = Segundo X.",
                "formula": "[Fonte/Notícia] + によると (ni yoru to)",
                "example": "NHK no news ni yoru to, keizai ga seichou shite iru (Segundo as notícias da NHK, a economia está crescendo)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Traduza a manchete jornalística: 'Nihon no keizai ga seichou shite iru to報道 (houdo) sa reta'",
                "options": [
                    {
                        "label": "Foi noticiado que a economia do Japão está crescendo",
                        "isCorrect": true
                    },
                    {
                        "label": "A economia do Japão acabou",
                        "isCorrect": false
                    },
                    {
                        "label": "Japão não tem notícias",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual a expressão usada em matérias jornalísticas para indicar 'Segundo as fontes...'?",
                "options": [
                    {
                        "label": "Houdo ni yoru to (報道によると)",
                        "isCorrect": true
                    },
                    {
                        "label": "Houdo wa oishii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Houdo ni ikimashou",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. O que significa a palavra jornalística 'Seiji (政治)'?",
                "options": [
                    {
                        "label": "Política / Governança",
                        "isCorrect": true
                    },
                    {
                        "label": "Alimentação saudável",
                        "isCorrect": false
                    },
                    {
                        "label": "Estação de trem",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza: 'Atarashii gijutsu no kaihatsu ga hajimatta'",
                "options": [
                    {
                        "label": "Começou o desenvolvimento de uma nova tecnologia",
                        "isCorrect": true
                    },
                    {
                        "label": "A tecnologia foi destruída",
                        "isCorrect": false
                    },
                    {
                        "label": "Não há tecnologia no país",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Em que estilo gramatical as notícias formais impressas e na TV costumam ser escritas?",
                "options": [
                    {
                        "label": "Estilo objetivo direto de relatórios (~de aru / passiva jornalística)",
                        "isCorrect": true
                    },
                    {
                        "label": "Estilo informal com gírias e desu/masu exagerado",
                        "isCorrect": false
                    },
                    {
                        "label": "Apenas em Romaji",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "世界 経済 の 動向 を 注視 する 必要 が あります",
                "translation": "É necessário observar atentamente as tendências da economia mundial.",
                "chunks": [
                    "世界",
                    "経済",
                    "の",
                    "動向",
                    "を",
                    "注視",
                    "する",
                    "必要",
                    "が",
                    "あります"
                ]
            },
            {
                "sentenceJp": "為替 の 変動 が 業績 に 影響 を 与えます",
                "translation": "A flutuação cambial afeta o desempenho financeiro.",
                "chunks": [
                    "為替",
                    "の",
                    "変動",
                    "が",
                    "業績",
                    "に",
                    "影響",
                    "を",
                    "与えます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você e seu colega discutem as notícias de economia no café matinal.",
                "npcName": "Colega Hiro",
                "npcMessage": "[Seu Nome]-san, kyou no NHK news, mita? (Viu as notícias da NHK de hoje?)",
                "options": [
                    {
                        "text": "Un! News ni yoru to, Keizai no toukei ga kaizou shita to houdo sarete ita ne! (Sim! Segundo as notícias, foi noticiado que os dados da economia melhoraram, né!)",
                        "feedback": "Vocabulário jornalístico de Nível B2 impecável!",
                        "isCorrect": true
                    },
                    {
                        "text": "News o tabemashita.",
                        "feedback": "Sem sentido.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Hiro comenta sobre os investimentos na área de inteligência artificial e tecnologia.",
                "npcName": "Colega Hiro",
                "npcMessage": "AI to gijutsu no kaihatsu mo sugoi seichou da ne. (O desenvolvimento de IA e tecnologia também tá num crescimento incrível, né.)",
                "options": [
                    {
                        "text": "Hontou da ne! Kono gijutsu no okage de, shakai ga yori benri ni naru to omoimasu. (Verdade! Graças a essa tecnologia, acho que a sociedade ficará mais prática.)",
                        "feedback": "Análise crítica de mídia excelente!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Sem motivo para desculpas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Hiro propõe continuarem acompanhando o noticiário para o relatório.",
                "npcName": "Colega Hiro",
                "npcMessage": "Kashikoi bunseki da! Mainichi news o check shiyou! (Análise inteligente! Vamos checar as notícias todo dia!)",
                "options": [
                    {
                        "text": "Un! Kokusai seiji no news mo check shite okou! (É! Vamos deixar checadas as notícias de política internacional também!)",
                        "feedback": "Fluência jornalística madura de nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "Qual estrutura introduz a fonte de uma informação em matérias jornalísticas ('Segundo X...')?",
                "options": [
                    "[Fonte] に yoru to (によると)",
                    "[Fonte] o tabemasu",
                    "[Fonte] wa doko"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'けいざい (経済)' (Keizai)?",
                "options": [
                    "Economia",
                    "Política",
                    "Desculpe"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'せいじ (政治)' (Seiji)?",
                "options": [
                    "Economia",
                    "Política",
                    "Desculpe"
                ],
                "correctIndex": 1
            },
            {
                "question": "Sobre a regra 'A Linguagem Jornalística Japonesa (Da/Dewa arimasen)': qual afirmação é correta?",
                "options": [
                    "Notícias e jornais usam estilo objetivo direto (~de aru em vez de ~desu) e passiva jornalística. Estrutura: [Fonte] によると (ni yoru to) = Segundo X.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "Traduza a manchete jornalística: 'Nihon no keizai ga seichou shite iru to報道 (houdo) sa reta'",
                "options": [
                    "Foi noticiado que a economia do Japão está crescendo",
                    "A economia do Japão acabou",
                    "Japão não tem notícias"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_10",
        "title": "Anúncios, Editais e Avisos Governamentais: Burocracia no Japão",
        "section": 3,
        "sectionTitle": "Análise de Mídia, Notícias & Atualidades",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Shiyakusho no shourui ni tsuite go-annai itashimasu.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Navegue pela burocracia japonesa com autonomia! Aprenda a ler documentos de prefeitura (Shiyakusho), formulários de visto, editais formais e avisos governamentais."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "しやくしょ (市役所)",
                "romaji": "Shiyakusho",
                "translation": "Prefeitura municipal",
                "timeContext": "Centro burocrático administrativo."
            },
            {
                "type": "vocab",
                "kanji": "しょうるい (書類)",
                "romaji": "Shourui",
                "translation": "Documentos / Formulários",
                "timeContext": "Papéis oficiais."
            },
            {
                "type": "grammar_pill",
                "title": "Linguagem Oficial Administrativa",
                "rule": "Avisos governamentais usam Keigo oficial extremo: ご + [Substantivo] + いただきます (go-... itadakimasu) = Solicitamos a gentileza de...",
                "formula": "ご + [Substantivo Kanji] + ください / いただきます",
                "example": "Shourui no teishutsu o go-kinyuu kudasai (Favor preencher e submeter os documentos)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. O que significa a palavra 'Shiyakusho (市役所)'?",
                "options": [
                    {
                        "label": "Prefeitura Municipal / Centro administrativo",
                        "isCorrect": true
                    },
                    {
                        "label": "Restaurante de ramem",
                        "isCorrect": false
                    },
                    {
                        "label": "Estação de metrô",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como ler a instrução oficial em um formulário público: 'Go-kinyuu kudasai'?",
                "options": [
                    {
                        "label": "Por favor, preencha os dados solicitados",
                        "isCorrect": true
                    },
                    {
                        "label": "Não escreva nada",
                        "isCorrect": false
                    },
                    {
                        "label": "Rasgue este papel",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Juuminkyou (住民票) no teishutsu ga hitsuyou desu'",
                "options": [
                    {
                        "label": "É necessária a submissão do comprovante de residência",
                        "isCorrect": true
                    },
                    {
                        "label": "Não precisa de comprovante",
                        "isCorrect": false
                    },
                    {
                        "label": "Comprei uma casa",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual a palavra oficial usada para a entrega/submissão de papéis no balcão da prefeitura?",
                "options": [
                    {
                        "label": "Teishutsu (提出)",
                        "isCorrect": true
                    },
                    {
                        "label": "Tabemono",
                        "isCorrect": false
                    },
                    {
                        "label": "Kaisatsu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como solicitar informações no guichê de atendimento: 'Gostaria de saber sobre os documentos do visto'?",
                "options": [
                    {
                        "label": "Visa no shourui ni tsuite o-kiki itashitai desu ga...",
                        "isCorrect": true
                    },
                    {
                        "label": "Visa wa oishii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Visa o tabemashita",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "持続 可能な 社会 の 実現 を 目指します",
                "translation": "Visamos a realização de uma sociedade sustentável.",
                "chunks": [
                    "持続",
                    "可能な",
                    "社会",
                    "の",
                    "実現",
                    "を",
                    "目指します"
                ]
            },
            {
                "sentenceJp": "環境 保全 と 経済 成長 の 両立 を 図ります",
                "translation": "Buscamos o equilíbrio entre preservação ambiental e crescimento econômico.",
                "chunks": [
                    "環境",
                    "保全",
                    "と",
                    "経済",
                    "成長",
                    "の",
                    "両立",
                    "を",
                    "図ります"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você está no balcão de atendimento da prefeitura (Shiyakusho) para renovar seu registro de residência.",
                "npcName": "Atendente da Prefeitura",
                "npcMessage": "Irasshaimase. Honjitsu wa douno you na go-yongen desu ka? (Seja bem-vindo. Qual assunto o senhor deseja tratar hoje?)",
                "options": [
                    {
                        "text": "Juuminkyou no teishutsu to shourui no kakunin o o-negai itashitai desu. (Gostaria de solicitar a entrega do comprovante de residência e confirmação de documentos.)",
                        "feedback": "Vocabulário burocrático administrativo perfeito!",
                        "isCorrect": true
                    },
                    {
                        "text": "Juuminkyou o taberu?",
                        "feedback": "Muito informal e sem sentido.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O atendente entrega o formulário e orienta sobre os campos obrigatórios.",
                "npcName": "Atendente da Prefeitura",
                "npcMessage": "Dewa, kono shourui ni namae to juusho o go-kinyuu itadakemasu ka? (Bem, o senhor poderia por gentileza preencher seu nome e endereço neste documento?)",
                "options": [
                    {
                        "text": "Shouchi shimashita! Koko ni kinyuu shite, teishutsu itashimasu. (Compreendido! Preencherei aqui e farei a entrega.)",
                        "feedback": "Resposta oficial polida e segura!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Sem motivos para desculpas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O atendente confere e carimba a aprovação dos seus documentos.",
                "npcName": "Atendente da Prefeitura",
                "npcMessage": "Kakunin itashimashita. Kono de suki naku kanryou desu. (Conferido. O procedimento foi concluído sem problemas.)",
                "options": [
                    {
                        "text": "Teinei na go-annai, hontou ni arigatou gozaimashita! (Muito obrigado pelo atendimento impecável e atencioso!)",
                        "feedback": "Autonomia burocrática total de Nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que significa a instrução formal 'Go-kinyuu kudasai' em formulários oficiais?",
                "options": [
                    "Por favor, preencha as informações no documento",
                    "Por favor, assine com caneta vermelha",
                    "Por favor, rasgue o papel"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'しやくしょ (市役所)' (Shiyakusho)?",
                "options": [
                    "Prefeitura municipal",
                    "Documentos / Formulários",
                    "Desculpe"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'しょうるい (書類)' (Shourui)?",
                "options": [
                    "Prefeitura municipal",
                    "Documentos / Formulários",
                    "Desculpe"
                ],
                "correctIndex": 1
            },
            {
                "question": "Sobre a regra 'Linguagem Oficial Administrativa': qual afirmação é correta?",
                "options": [
                    "Avisos governamentais usam Keigo oficial extremo: ご + [Substantivo] + いただきます (go-... itadakimasu) = Solicitamos a gentileza de...",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "O que significa a palavra 'Shiyakusho (市役所)'?",
                "options": [
                    "Prefeitura Municipal / Centro administrativo",
                    "Restaurante de ramem",
                    "Estação de metrô"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_11",
        "title": "Entendendo Mídia & Animes sem Legendas: Kansai-ben e Gírias Modernas",
        "section": 3,
        "sectionTitle": "Análise de Mídia, Notícias & Atualidades",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Mecha honmani eeya n! Yabai desu yo!",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Conquiste a capacidade de assistir filmes, animes e programas de TV sem legendas! Aprenda as estruturas do famoso dialeto de Kansai (Kansai-ben: ~ya, ~honmani) e gírias modernas da internet (Yabai, Mecha)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "かんさいべん (関西弁)",
                "romaji": "Kansai-ben",
                "translation": "Dialeto de Kansai (Osaka/Kyoto)",
                "timeContext": "Dialeto regional mais famoso do Japão na mídia e comédia."
            },
            {
                "type": "vocab",
                "kanji": "ほんまに",
                "romaji": "Honmani",
                "translation": "De verdade / Sério (Kansai-ben de Hontou ni)",
                "timeContext": "Enfático coloquial."
            },
            {
                "type": "vocab",
                "kanji": "めっちゃ / めちゃ",
                "romaji": "Mecha / Metcha",
                "translation": "Muito / Demais (Gíria moderna)",
                "timeContext": "Intensificador de fala informal."
            },
            {
                "type": "grammar_pill",
                "title": "Gramática Básica do Dialeto de Kansai (Kansai-ben)",
                "rule": "1) Desu ➔ Ya (や). 2) Nai ➔ N (Nai ➔ N: Shiranai ➔ Shiran). 3) Ii ➔ Ee (ええ). 4) Hontou ni ➔ Honmani (ほんまに).",
                "formula": "Desu ➔ や (ya) | Nai ➔ ん (n)",
                "example": "Honmani mecha ee ya n! (É bom demais de verdade, né!)"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. O que significa a palavra em Kansai-ben 'Honmani (ほんまに)'?",
                "options": [
                    {
                        "label": "De verdade / Sério mesmo (Hontou ni)",
                        "isCorrect": true
                    },
                    {
                        "label": "Falso",
                        "isCorrect": false
                    },
                    {
                        "label": "Amanhã",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como se diz 'Eu não sei' no dialeto informal de Osaka/Kansai?",
                "options": [
                    {
                        "label": "Shiran! (しらん)",
                        "isCorrect": true
                    },
                    {
                        "label": "Shirimashita",
                        "isCorrect": false
                    },
                    {
                        "label": "Shiru desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. O que a gíria multifacetada moderna 'Yabai! (ヤバい)' pode significar dependendo do tom de voz?",
                "options": [
                    {
                        "label": "Tanto 'Incrível/Demais!' quanto 'Caramba, deu ruim!'",
                        "isCorrect": true
                    },
                    {
                        "label": "Apenas comida ruim",
                        "isCorrect": false
                    },
                    {
                        "label": "Um tipo de peixe",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza a frase em Kansai-ben: 'Kore, mecha ee ya n!'",
                "options": [
                    {
                        "label": "Isso é bom demais, né!",
                        "isCorrect": true
                    },
                    {
                        "label": "Isso é muito ruim",
                        "isCorrect": false
                    },
                    {
                        "label": "Não quero isso",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual a versão equivalente do verbo 'Desu' no dialeto de Kansai?",
                "options": [
                    {
                        "label": "や (ya)",
                        "isCorrect": true
                    },
                    {
                        "label": "だ (da)",
                        "isCorrect": false
                    },
                    {
                        "label": "ね (ne)",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "AI の 進化 は 働き方 を 根本 から 変えます",
                "translation": "A evolução da IA muda radicalmente o modo de trabalhar.",
                "chunks": [
                    "AI",
                    "の",
                    "進化",
                    "は",
                    "働き方",
                    "を",
                    "根本",
                    "から",
                    "変えます"
                ]
            },
            {
                "sentenceJp": "デジタル 化 への 対応 が 遅れると 生き残れません",
                "translation": "Se o envio à digitalização atrasar, não haverá sobrevivência.",
                "chunks": [
                    "デジタル",
                    "化",
                    "への",
                    "対応",
                    "が",
                    "遅れると",
                    "生き残れません"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você assiste a uma comédia (Manzai) de Osaka com seu amigo de Kansai.",
                "npcName": "Amigo de Osaka",
                "npcMessage": "Kono komedi, honmani mecha omoshiroi ya ro? (Essa comédia é boa demais de verdade, né não?)",
                "options": [
                    {
                        "text": "Honmani da ne! Yabai shiru de mecha waratta yo! (Verdade mesmo! Foi incrível demais, rachei de rir!)",
                        "feedback": "Uso espetacular de gírias e dialecto entendidos com fluência!",
                        "isCorrect": true
                    },
                    {
                        "text": "Komedi wa oishii desu.",
                        "feedback": "Sem sentido.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O amigo pergunta se você entende animes sem legendas agora.",
                "npcName": "Amigo de Osaka",
                "npcMessage": "Nihon no anime mo字幕 (jimaku) nashi de wakaru n desu ka? (Consegue entender animes em japonês sem legendas também?)",
                "options": [
                    {
                        "text": "Un! Kansai-ben mo slang mo wakaru you ni narimashita! (Sim! Passei a conseguir entender tanto dialeto de Kansai quanto gírias!)",
                        "feedback": "Demonstração de autonomia cultural de Nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Desnecessário.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O amigo celebra o seu nível de japonês nativo.",
                "npcName": "Amigo de Osaka",
                "npcMessage": "Mochiron ya! Mou Kansai-jin to onaji ya n! (Com certeza! Você já é igualzinho a um nativo de Kansai!)",
                "options": [
                    {
                        "text": "Ookini! Motto benkyou shite, B2 master suru ya de! (Muito obrigado [em Kansai-ben]! Vou estudar mais e dominar o B2!)",
                        "feedback": "Imersão cultural plena de nível avançado B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que significa a palavra 'Honmani (ほんまに)' no dialeto de Kansai?",
                "options": [
                    "De verdade / Realmente (equivalente a Hontou ni)",
                    "De jeito nenhum",
                    "Talvez"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'かんさいべん (関西弁)' (Kansai-ben)?",
                "options": [
                    "Dialeto de Kansai (Osaka/Kyoto)",
                    "De verdade / Sério (Kansai-ben de Hontou ni)",
                    "Muito / Demais (Gíria moderna)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ほんまに' (Honmani)?",
                "options": [
                    "Dialeto de Kansai (Osaka/Kyoto)",
                    "De verdade / Sério (Kansai-ben de Hontou ni)",
                    "Muito / Demais (Gíria moderna)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'めっちゃ / めちゃ' (Mecha / Metcha)?",
                "options": [
                    "De verdade / Sério (Kansai-ben de Hontou ni)",
                    "Dialeto de Kansai (Osaka/Kyoto)",
                    "Muito / Demais (Gíria moderna)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre a regra 'Gramática Básica do Dialeto de Kansai (Kansai-ben)': qual afirmação é correta?",
                "options": [
                    "1) Desu ➔ Ya (や). 2) Nai ➔ N (Nai ➔ N: Shiranai ➔ Shiran). 3) Ii ➔ Ee (ええ). 4) Hontou ni ➔ Honmani (ほんまに).",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_12",
        "title": "Temas Sociais e Ambientais: Sociedade Envelhecida e Sustentabilidade",
        "section": 3,
        "sectionTitle": "Análise de Mídia, Notícias & Atualidades",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Koureika shakai to kankyou mondai ni tsuite kousatsu shimasu.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Desenvolva repertório para debates maduros! Aprenda a discutir grandes temas da sociedade moderna japonesa: o envelhecimento populacional (Koureika shakai), a queda de natalidade (Shoushika) e a sustentabilidade ambiental."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "こうれいかしゃかい (高齢化社会)",
                "romaji": "Koureika shakai",
                "translation": "Sociedade envelhecida",
                "timeContext": "Desafio demográfico central do Japão."
            },
            {
                "type": "vocab",
                "kanji": "かんきょうもんだい (環境問題)",
                "romaji": "Kankyou mondai",
                "translation": "Problema ambiental",
                "timeContext": "Sustentabilidade e ecologia."
            },
            {
                "type": "grammar_pill",
                "title": "Expressando Causas de Impacto Social (~ni yotte / ~tame)",
                "rule": "Para explicar grandes fenômenos sociais: [Causa] に yotte / のため + [Resultado Social].",
                "formula": "[Fenômeno Social] + に伴って (ni tomonatte) / に yotte",
                "example": "Shoushika ni yotte, gakkou no kazu ga减少 (genshou) shite iru (Devido à baixa natalidade, o número de escolas está diminuindo)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. O que significa o termo socioeconômico japonês 'Koureika shakai (高齢化社会)'?",
                "options": [
                    {
                        "label": "Sociedade com população envelhecida",
                        "isCorrect": true
                    },
                    {
                        "label": "Sociedade jovem e populosa",
                        "isCorrect": false
                    },
                    {
                        "label": "Sociedade de robôs",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como dizer 'Precisamos pensar em soluções para os problemas ambientais'?",
                "options": [
                    {
                        "label": "Kankyou mondai no kaiketzu-san o kangerukeru hitsuyou ga arimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Kankyou mondai o tabemasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Kankyou mondai wa nai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Shoushika ni yotte, koureika ga tiếnmuto iru'",
                "options": [
                    {
                        "label": "Devido à baixa natalidade, o envelhecimento populacional avança",
                        "isCorrect": true
                    },
                    {
                        "label": "Há muitas crianças no país",
                        "isCorrect": false
                    },
                    {
                        "label": "O país não tem escolas",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual a palavra usada para definir 'Sustentabilidade / Meio Ambiente' em debates?",
                "options": [
                    {
                        "label": "Kankyou (環境) / Sutenaburiti",
                        "isCorrect": true
                    },
                    {
                        "label": "Tabemono",
                        "isCorrect": false
                    },
                    {
                        "label": "Oshirase",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como expressar a opinião 'É necessário usar energia renovável para o futuro'?",
                "options": [
                    {
                        "label": "Mirai no tame ni saisei-enokyo o tsukau hitsuyou ga arimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Mirai wa kirai desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Denki o tabemashou",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "少子化 に よって 高齢化 が 進んで います",
                "translation": "Devido à baixa natalidade, o envelhecimento populacional está avançando.",
                "chunks": [
                    "少子化",
                    "に",
                    "よって",
                    "高齢化",
                    "が",
                    "進んで",
                    "います"
                ]
            },
            {
                "sentenceJp": "未来 の ため に 再生可能エネルギー を 使う 必要 が あります",
                "translation": "É necessário usar energia renovável para o futuro.",
                "chunks": [
                    "未来",
                    "の",
                    "ため",
                    "に",
                    "再生可能エネルギー",
                    "を",
                    "使う",
                    "必要",
                    "が",
                    "あります"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Em um painel de discussão na universidade, o mediador levanta a pauta demográfica.",
                "npcName": "Mediador Painel",
                "npcMessage": "[Seu Nome]-san, Nihon no koureika shakai ni tsuite dou kangaemasu ka? (O que pensa sobre a sociedade envelhecida no Japão?)",
                "options": [
                    {
                        "text": "Shoushika ni yotte roudou-ryoku ga减少 (genshou) shite iru node, atarashii gijutsu no katsuyou ga hitsuyou da to omoimasu. (Como a força de trabalho diminui pela baixa natalidade, acho que a aplicação de novas tecnologias é necessária.)",
                        "feedback": "Argumentação sociológica refinada de Nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Koureika wa oishii desu.",
                        "feedback": "Sem nexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O mediador pergunta sobre a questão ambiental associada.",
                "npcName": "Mediador Painel",
                "npcMessage": "Kankyou mondai to no balance mo taisetsu desu ne. (O equilíbrio com a questão ambiental também é essencial, né.)",
                "options": [
                    {
                        "text": "Mochiron desu! Kankyou o mamo-rarei baga, keizai o seichou saseru koto ga kadai desu. (Com certeza! O desafio é fazer a economia crescer enquanto se protege o meio ambiente.)",
                        "feedback": "Combinação espetacular de causativa e argumentação B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Sem motivo para desculpas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O mediador encerra o painel elogiando a sua contribuição.",
                "npcName": "Mediador Painel",
                "npcMessage": "Kicho na go-意見 (iken), arigatou gozaimashita! (Muito obrigado por sua valiosa opinião!)",
                "options": [
                    {
                        "text": "Domo arigatou gozaimashita! Kisa de fururu ni kangaerarete koue desu. (Muito obrigado! Foi uma honra poder refletir profundamente sobre este tema!)",
                        "feedback": "Encerramento de debate de alto nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que significa o termo socioeconômico 'Shoushika (少子化)'?",
                "options": [
                    "Tendência de diminuição do número de nascimentos/filhos",
                    "Aumento da população jovem",
                    "Construção de novas praças"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'こうれいかしゃかい (高齢化社会)' (Koureika shakai)?",
                "options": [
                    "Sociedade envelhecida",
                    "Problema ambiental",
                    "Desculpe"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'かんきょうもんだい (環境問題)' (Kankyou mondai)?",
                "options": [
                    "Sociedade envelhecida",
                    "Problema ambiental",
                    "Desculpe"
                ],
                "correctIndex": 1
            },
            {
                "question": "Sobre a regra 'Expressando Causas de Impacto Social (~ni yotte / ~tame)': qual afirmação é correta?",
                "options": [
                    "Para explicar grandes fenômenos sociais: [Causa] に yotte / のため + [Resultado Social].",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "O que significa o termo socioeconômico japonês 'Koureika shakai (高齢化社会)'?",
                "options": [
                    "Sociedade com população envelhecida",
                    "Sociedade jovem e populosa",
                    "Sociedade de robôs"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_13",
        "title": "Conectores Lógicos e Transição Acadêmica: ~sae ~ba e ~ni mo karawazu",
        "section": 4,
        "sectionTitle": "Argumentação, Debates & Textos Acadêmicos",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Okane sae ireba, daijoubu. Toshiawase ni mo karawazu, shuppan shita.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Domine a coesão textual de nível acadêmico (N2/B2)! Aprenda as condicionais de garantia mínima ('Basta ter X que...') com ~sae ~ba e a oposição enfática 'Apesar de / Não obstante' com ~ni mo karawazu."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "～さえ～ば",
                "romaji": "~sae ~ba",
                "translation": "Basta ter/fazer X que...",
                "timeContext": "Condição suficiente e única."
            },
            {
                "type": "vocab",
                "kanji": "～にもかかわらず",
                "romaji": "~ni mo karawazu",
                "translation": "Apesar de... / Não obstante...",
                "timeContext": "Contradição forte em ensaios acadêmicos."
            },
            {
                "type": "grammar_pill",
                "title": "Conectores de Redação Acadêmica Avançada",
                "rule": "1) Substantivo + さえ (sae) + Verbo condicional ば (ba) = Basta apenas X. 2) Frase Casual / Substantivo + にもかかわらず (ni mo karawazu) = Não obstante a situação de X.",
                "formula": "[Substantivo] さえ [Verbo-ba] | [Frase] にもかかわらず",
                "example": "Jikan sae araba, dekiru (Basta ter tempo que dá para fazer) | Tai-ten ni mo karawazu, shuppan shita (Não obstante a forte tempestade, partiu)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como dizer na escrita acadêmica 'Basta ter paixão que qualquer objetivo é possível'?",
                "options": [
                    {
                        "label": "情熱 (jounetsu) sae araba, douno goal mo dekiru",
                        "isCorrect": true
                    },
                    {
                        "label": "Jounetsu wa oishii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Jounetsu o tabemashita",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como expressar a contradição formal 'Apesar da chuva torrencial, o jogo continuou'?",
                "options": [
                    {
                        "label": "Oome ni mo karawazu, shiai wa tsuzukimashita",
                        "isCorrect": true
                    },
                    {
                        "label": "Oome node, shiai wa yamimashita",
                        "isCorrect": false
                    },
                    {
                        "label": "Oome ni ikimashou",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Kare wa shoshinsha ni mo karawazu, pro mitai ni jouzu desu'",
                "options": [
                    {
                        "label": "Não obstante ser um iniciante, ele é bom como um profissional",
                        "isCorrect": true
                    },
                    {
                        "label": "Como ele é iniciante, não sabe nada",
                        "isCorrect": false
                    },
                    {
                        "label": "Ele odeia profissionais",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual conector expressa a ideia de 'condição única e suficiente' ('Basta apenas...')?",
                "options": [
                    {
                        "label": "~sae ~ba (～さえ～ば)",
                        "isCorrect": true
                    },
                    {
                        "label": "~kara",
                        "isCorrect": false
                    },
                    {
                        "label": "~demo",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como dizer 'Basta ter saúde que o resto se resolve'?",
                "options": [
                    {
                        "label": "Kenkou sae araba, ok",
                        "isCorrect": true
                    },
                    {
                        "label": "Kenkou wa kirai desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Kenkou o taberu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "情熱 さえ あれば どんな 目標 も 達成 できる",
                "translation": "Basta ter paixão que qualquer objetivo pode ser alcançado.",
                "chunks": [
                    "情熱",
                    "さえ",
                    "あれば",
                    "どんな",
                    "目標",
                    "も",
                    "達成",
                    "できる"
                ]
            },
            {
                "sentenceJp": "大雨 にもかかわらず 試合 は 続けられた",
                "translation": "Não obstante a chuva forte, a partida continuou.",
                "chunks": [
                    "大雨",
                    "にもかかわらず",
                    "試合",
                    "は",
                    "続けられた"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você apresenta a introdução do seu artigo acadêmico na faculdade.",
                "npcName": "Orientador Acadêmico",
                "npcMessage": "[Seu Nome]-san, kono ronbun no logic, meikaku da ne. (A lógica deste artigo está bem clara.)",
                "options": [
                    {
                        "text": "Arigatou gozaimasu! Jikan sae araba, moro kousatsu o深 (fuka) me rarenu to omotte orimasu. (Muito obrigado! Basta eu ter mais tempo que poderei aprofundar ainda mais a análise.)",
                        "feedback": "Uso espetacular do conector sae araba!",
                        "isCorrect": true
                    },
                    {
                        "text": "Ronbun o tabemashita.",
                        "feedback": "Sem nexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O orientador nota a relevância da sua pesquisa sobre dados adversos.",
                "npcName": "Orientador Acadêmico",
                "npcMessage": "Koushou-na jcondition ni mo karawazu, kekka o dashita ne. (Não obstante as condições adversas, você obteve resultados.)",
                "options": [
                    {
                        "text": "Hai! Shiren ni mo karawazu, data o collect shita kai ga arimashita! (Sim! Não obstante as dificuldades, valeu a pena coletar os dados!)",
                        "feedback": "Coesão textual de nível acadêmico N2/B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Desnecessário.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O orientador aprova a submissão da tese.",
                "npcName": "Orientador Acadêmico",
                "npcMessage": "Subarashii desu! Gakkai ni submit shimashou! (Excelente! Vamos submeter ao simpósio acadêmico!)",
                "options": [
                    {
                        "text": "Kicho na go-shidou, hontou ni arigatou gozaimashita! (Muito obrigado por sua valiosa orientação acadêmica!)",
                        "feedback": "Gratidão e fluência acadêmica impecável!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que significa o conector acadêmico '~ni mo karawazu'?",
                "options": [
                    "Apesar de... / Não obstante a situação de X",
                    "Porque aconteceu X",
                    "Se por acaso acontecer X"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～さえ～ば' (~sae ~ba)?",
                "options": [
                    "Basta ter/fazer X que...",
                    "Apesar de... / Não obstante...",
                    "Desculpe"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～にもかかわらず' (~ni mo karawazu)?",
                "options": [
                    "Basta ter/fazer X que...",
                    "Apesar de... / Não obstante...",
                    "Desculpe"
                ],
                "correctIndex": 1
            },
            {
                "question": "Sobre a regra 'Conectores de Redação Acadêmica Avançada': qual afirmação é correta?",
                "options": [
                    "1) Substantivo + さえ (sae) + Verbo condicional ば (ba) = Basta apenas X. 2) Frase Casual / Substantivo + にもかかわらず (ni mo karawazu) = Não obstante a situação de X.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "Como dizer na escrita acadêmica 'Basta ter paixão que qualquer objetivo é possível'?",
                "options": [
                    "情熱 (jounetsu) sae araba, douno goal mo dekiru",
                    "Jounetsu wa oishii desu",
                    "Jounetsu o tabemashita"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_14",
        "title": "Defendendo Teses e Pontos de Vista: ~to ieru darou e ~ni hokanaranai",
        "section": 4,
        "sectionTitle": "Argumentação, Debates & Textos Acadêmicos",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Kore wa seikou to ieru darou. Mainichi no doryoku ni hokanaranai.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Defenda pontos de vista com persuasão e autoridade elegante! Aprenda a formular teses ('Pode-se afirmar que...') com ~to ieru darou e conclusões categóricas ('Não é nada além de...') com ~ni hokanaranai."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "～と言えるだろう",
                "romaji": "~to ieru darou",
                "translation": "Pode-se afirmar que... / Seria correto dizer que...",
                "timeContext": "Conclusão elegante em teses e ensaios."
            },
            {
                "type": "vocab",
                "kanji": "～にほかならない",
                "romaji": "~ni hokanaranai",
                "translation": "Não é nada além de... / É precisamente...",
                "timeContext": "Afirmação categórica de causa raiz."
            },
            {
                "type": "grammar_pill",
                "title": "Defesa de Tese Acadêmica B2",
                "rule": "1) Frase + と言えるだろう (to ieru darou) suaviza a afirmação para um tom acadêmico aceitável. 2) Substantivo + にほかならない (ni hokanaranai) afirma com convicção absoluta a causa única.",
                "formula": "[Frase Casual] + と言えるだろう | [Substantivo] + にほかならない",
                "example": "Kono kekka wa minasan no doryoku no賜 (tamamono) ni hokanaranai (Este resultado nada mais é do que o fruto do esforço de todos)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como afirmar com elegância acadêmica 'Pode-se dizer que a inovação é essencial para o futuro'?",
                "options": [
                    {
                        "label": "Inovation wa mirai ni hitsuyou to ieru darou",
                        "isCorrect": true
                    },
                    {
                        "label": "Inovation wa mirai ni tabemasu",
                        "isCorrect": false
                    },
                    {
                        "label": "Inovation wa nai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como expressar convicção absoluta: 'Este sucesso não é nada além do fruto do seu trabalho diário'?",
                "options": [
                    {
                        "label": "Kono seikou wa mainichi no doryoku ni hokanaranai",
                        "isCorrect": true
                    },
                    {
                        "label": "Kono seikou wa doryoku desu ka",
                        "isCorrect": false
                    },
                    {
                        "label": "Kono seikou wa kirai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Kare no shippai wa準備 (junbi)不足 (busoku) ni hokanaranai'",
                "options": [
                    {
                        "label": "A falha dele não foi nada além de falta de preparação",
                        "isCorrect": true
                    },
                    {
                        "label": "Ele se preparou muito bem",
                        "isCorrect": false
                    },
                    {
                        "label": "Ele não teve falhas",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual a função da expressão '~to ieru darou' em um ensaio acadêmico?",
                "options": [
                    {
                        "label": "Formular conclusões ponderadas e defensáveis de forma persuasiva",
                        "isCorrect": true
                    },
                    {
                        "label": "Fazer uma pergunta sobre o preço de um item",
                        "isCorrect": false
                    },
                    {
                        "label": "Pedir desculpas por um atraso",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como dizer 'Esta descoberta é um grande avanço para a ciência' com tom avançado?",
                "options": [
                    {
                        "label": "Kono hakken wa kagaku no ooki na advance to ieru darou",
                        "isCorrect": true
                    },
                    {
                        "label": "Kono hakken wa kagaku o tabemashita",
                        "isCorrect": false
                    },
                    {
                        "label": "Kono hakken wa arimasen",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "イノベーション は 未来 に 不可欠 と 言えるだろう",
                "translation": "Pode-se dizer que a inovação é indispensável para o futuro.",
                "chunks": [
                    "イノベーション",
                    "は",
                    "未来",
                    "に",
                    "不可欠",
                    "と",
                    "言えるだろう"
                ]
            },
            {
                "sentenceJp": "この 成功 は 毎日の 努力 に ほかならない",
                "translation": "Este sucesso não é nada além do esforço diário.",
                "chunks": [
                    "この",
                    "成功",
                    "は",
                    "毎日の",
                    "努力",
                    "に",
                    "ほかならない"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Durante a defesa da sua tese de conclusão perante a banca examinadora.",
                "npcName": "Presidente da Banca",
                "npcMessage": "[Seu Nome]-san, kono data no kousatsu o matomete kudasai. (Resuma a análise destes dados por gentileza.)",
                "options": [
                    {
                        "text": "Hai! Kono data yori, atarashii strategy ga yukou desu to ieru darou. Soshite, kono seika wa team no doryoku ni hokanaranai to omotte orimasu. (Sim! A partir destes dados, seria correto dizer que a nova estratégia é eficaz. E penso que este resultado não é nada além do esforço da equipe.)",
                        "feedback": "Defesa de tese brilhante e persuasiva!",
                        "isCorrect": true
                    },
                    {
                        "text": "Data wa oishii desu.",
                        "feedback": "Sem sentido.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: A banca elogia o seu rigor metodológico.",
                "npcName": "Presidente da Banca",
                "npcMessage": "Meikaku de kounai na tese da ne. Argumentation ga sugoi yo. (Uma tese clara e de alto valor. Sua argumentação é incrível.)",
                "options": [
                    {
                        "text": "Kicho na go-shiki to go-意見 (iken) o itadaki, hontou ni arigatou gozaimasu! (Muito obrigado por me conceder suas valiosas considerações e opiniões!)",
                        "feedback": "Polidez acadêmica de nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Desnecessário.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: A banca aprova a tese com distinção.",
                "npcName": "Presidente da Banca",
                "npcMessage": "Goukaku desu! Omedetou gozaimasu! (Aprovado! Parabéns!)",
                "options": [
                    {
                        "text": "Domo arigatou gozaimashita! Kongo mo kenkyuu ni shoujin itashimasu! (Muito obrigado! Continuarei me dedicando às pesquisas!)",
                        "feedback": "Vitória acadêmica memorável de nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que a expressão categórica '~ni hokanaranai' afirma?",
                "options": [
                    "Que o fato não é nada além de X / É precisamente X a causa única",
                    "Que o fato é uma dúvida",
                    "Que o fato não aconteceu"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～と言えるだろう' (~to ieru darou)?",
                "options": [
                    "Pode-se afirmar que... / Seria correto dizer que...",
                    "Não é nada além de... / É precisamente...",
                    "Desculpe"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～にほかならない' (~ni hokanaranai)?",
                "options": [
                    "Pode-se afirmar que... / Seria correto dizer que...",
                    "Não é nada além de... / É precisamente...",
                    "Desculpe"
                ],
                "correctIndex": 1
            },
            {
                "question": "Sobre a regra 'Defesa de Tese Acadêmica B2': qual afirmação é correta?",
                "options": [
                    "1) Frase + と言えるだろう (to ieru darou) suaviza a afirmação para um tom acadêmico aceitável. 2) Substantivo + にほかならない (ni hokanaranai) afirma com convicção absoluta a causa única.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "Como afirmar com elegância acadêmica 'Pode-se dizer que a inovação é essencial para o futuro'?",
                "options": [
                    "Inovation wa mirai ni hitsuyou to ieru darou",
                    "Inovation wa mirai ni tabemasu",
                    "Inovation wa nai desu"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_15",
        "title": "Leitura Dramática & Literatura Japonesa: Análise de Contos Nativos",
        "section": 4,
        "sectionTitle": "Argumentação, Debates & Textos Acadêmicos",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Kokoro o utsu bungaku no sekai. Natsume Souseki no sakuhin o yomu.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Adentre a literatura japonesa (Bungaku)! Aprenda a ler e interpretar excertos de contos e ensaios clássicos nativos (Natsume Souseki, Dazai Osamu) identificando metáforas poéticas e profundidade narrativa."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "ぶんがく (文学)",
                "romaji": "Bungaku",
                "translation": "Literatura",
                "timeContext": "Estudo literário de obras nativas."
            },
            {
                "type": "vocab",
                "kanji": "さくひん (作品)",
                "romaji": "Sakuhin",
                "translation": "Obra literária / Criação artística",
                "timeContext": "Livros, romances e contos."
            },
            {
                "type": "grammar_pill",
                "title": "Linguagem Literária Japonesa (Estilo ~Nari / ~Dewa)",
                "rule": "A literatura nativa utiliza metáforas ricas, conectores poéticos e o estilo descritivo direto para tocar as emoções humanas (Kokoro o utsu).",
                "formula": "[Metáfora Literária] + に心 (kokoro) を打つ",
                "example": "Kono sakuhin wa dokusha no kokoro o utsu (Esta obra toca o coração dos leitores)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. O que significa a expressão poética literária 'Kokoro o utsu (心を打つ)'?",
                "options": [
                    {
                        "label": "Tocar o coração / Emocionar profundamente o leitor",
                        "isCorrect": true
                    },
                    {
                        "label": "Bater no peito com raiva",
                        "isCorrect": false
                    },
                    {
                        "label": "Estudar matemática",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Quem é um dos maiores autores da literatura clássica japonesa moderna (autor de 'Kokoro' e 'Botchan')?",
                "options": [
                    {
                        "label": "Natsume Souseki (夏目漱石)",
                        "isCorrect": true
                    },
                    {
                        "label": "Pikachu",
                        "isCorrect": false
                    },
                    {
                        "label": "Naruto",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza a crítica literária: 'Kono bungaku sakuhin wa fukai imi ga arimasu'",
                "options": [
                    {
                        "label": "Esta obra literária possui um significado profundo",
                        "isCorrect": true
                    },
                    {
                        "label": "Este livro não tem páginas",
                        "isCorrect": false
                    },
                    {
                        "label": "Não gosto de ler",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual a palavra usada para definir uma 'Obra de arte / Livro romântico' em japonês?",
                "options": [
                    {
                        "label": "Sakuhin (作品)",
                        "isCorrect": true
                    },
                    {
                        "label": "Gomi",
                        "isCorrect": false
                    },
                    {
                        "label": "Kippu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como descrever a atmosfera de um conto dramático clássico?",
                "options": [
                    {
                        "label": "Kanjou ga fukaku, kanojo no kokoro ga meikaku ni描 (ega) karete iru",
                        "isCorrect": true
                    },
                    {
                        "label": "Sakuhin wa oishii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Sakuhin wa arimasen",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "リーダーシップ を 発揮 して 組織 を 導きます",
                "translation": "Exerço liderança para guiar a organização.",
                "chunks": [
                    "リーダーシップ",
                    "を",
                    "発揮",
                    "して",
                    "組織",
                    "を",
                    "導きます"
                ]
            },
            {
                "sentenceJp": "メンバー の 意欲 を 引き出す ことが 鍵 です",
                "translation": "Extrair a motivação dos membros é a chave.",
                "chunks": [
                    "メンバー",
                    "の",
                    "意欲",
                    "を",
                    "引き出す",
                    "ことが",
                    "鍵",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Em um clube de leitura em Jimbocho (bairro dos livros em Tóquio), você debate sobre Natsume Souseki.",
                "npcName": "Membro do Clube de Leitura",
                "npcMessage": "[Seu Nome]-san, Natsume Souseki no sakuhin o yonda koto aru? (Você já leu alguma obra de Natsume Souseki?)",
                "options": [
                    {
                        "text": "Hai! 'Kokoro' o yomimashita ga, person no sentiment ga fukaku描 (ega) karete ite, kokoro o utsamashita! (Sim! Li 'Kokoro' e a emoção das personagens é retratada tão profundamente que tocou meu coração!)",
                        "feedback": "Análise literária brilhante com vocabulário de Nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Hon o tabemashita.",
                        "feedback": "Sem sentido.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O membro concorda e sugere a leitura de Dazai Osamu a seguir.",
                "npcName": "Membro do Clube de Leitura",
                "npcMessage": "Dazai Osamu no sakuhin mo bungaku-teki ni mecha fukai yo. (As obras de Dazai Osamu também são absurdamente profundas literariamente.)",
                "options": [
                    {
                        "text": "Tsugi wa Dazai Osamu no sakuhin o yonde miru koto ni suru yo! (Decidi que a seguir vou experimentar ler a obra de Dazai Osamu!)",
                        "feedback": "Uso perfeito de te miru e koto ni suru!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Desnecessário.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O membro fica empolgado para discutir o próximo livro no mês que vem.",
                "npcName": "Membro do Clube de Leitura",
                "npcMessage": "Raigetsu no discussion, tanoshimi ni shiteru yo! (Fico ansioso pela nossa discussão no mês que vem!)",
                "options": [
                    {
                        "text": "Un! Watashi mo fukai discussion o tanoshimi ni shite iru yo! (É! Eu também fico ansioso por uma discussão profunda!)",
                        "feedback": "Troca cultural literária impecável!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que significa a expressão poética 'Kokoro o utsu' ao descrever uma obra de arte ou livro?",
                "options": [
                    "Emocionar profundamente o coração do leitor/espectador",
                    "Ter dor de cabeça ao ler",
                    "Fechamento de contrato"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ぶんがく (文学)' (Bungaku)?",
                "options": [
                    "Literatura",
                    "Obra literária / Criação artística",
                    "Desculpe"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'さくひん (作品)' (Sakuhin)?",
                "options": [
                    "Literatura",
                    "Obra literária / Criação artística",
                    "Desculpe"
                ],
                "correctIndex": 1
            },
            {
                "question": "Sobre a regra 'Linguagem Literária Japonesa (Estilo ~Nari / ~Dewa)': qual afirmação é correta?",
                "options": [
                    "A literatura nativa utiliza metáforas ricas, conectores poéticos e o estilo descritivo direto para tocar as emoções humanas (Kokoro o utsu).",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "O que significa a expressão poética literária 'Kokoro o utsu (心を打つ)'?",
                "options": [
                    "Tocar o coração / Emocionar profundamente o leitor",
                    "Bater no peito com raiva",
                    "Estudar matemática"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_16",
        "title": "Análise de Causa e Efeito Avançados: ~no kekka, ~ni yotte e ~o kikkake ni",
        "section": 4,
        "sectionTitle": "Argumentação, Debates & Textos Acadêmicos",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Chousa no kekka, atarashii gijutsu ga umareta. Kono deai o kikkake ni...",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Conecte eventos complexos com precisão de nível N2/B2: expor resultados de pesquisas (~no kekka), causas indiretas (~ni yotte) e momentos catalisadores de mudança ('A partir daquele evento marco...') com ~o kikkake ni."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "～の結果 (～のけっか)",
                "romaji": "~no kekka",
                "translation": "Como resultado de...",
                "timeContext": "Relatar consequências de estudos ou ações."
            },
            {
                "type": "vocab",
                "kanji": "～をきっかけに",
                "romaji": "~o kikkake ni",
                "translation": "Tendo X como gatilho/marco catalisador...",
                "timeContext": "O evento que deu início a uma grande mudança."
            },
            {
                "type": "grammar_pill",
                "title": "Causa, Efeito e Catalisadores de Vida",
                "rule": "1) Substantivo + の結果 (no kekka) = Como resultado de X. 2) Evento + をきっかけに (o kikkake ni) = A partir/tendo como gatilho aquele evento inicial.",
                "formula": "[Ação] の結果 | [Evento] をきっかけに",
                "example": "Nihon ryokou o kikkake ni, Nihon-go no benkyou o hajimemashita (Tendo a viagem ao Japão como gatilho, comecei a estudar japonês)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como expressar o marco inicial de um hábito: 'Tendo a viagem ao Japão como gatilho, comecei a estudar o idioma'?",
                "options": [
                    {
                        "label": "Nihon ryokou o kikkake ni, Nihon-go no benkyou o hajimemashita",
                        "isCorrect": true
                    },
                    {
                        "label": "Nihon ryokou o tabemashita",
                        "isCorrect": false
                    },
                    {
                        "label": "Nihon ryokou wa arimasen",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como relatar em uma conferência 'Como resultado da pesquisa, descobrimos novos dados'?",
                "options": [
                    {
                        "label": "Chousa no kekka, atarashii data o hakken itashimashita",
                        "isCorrect": true
                    },
                    {
                        "label": "Chousa no kekka wa oishii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Chousa ni ikimashou",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Kono deai o kikkake ni, futari wa partner ni narimashita'",
                "options": [
                    {
                        "label": "Tendo este encontro como ponto de virada/gatilho, os dois se tornaram parceiros",
                        "isCorrect": true
                    },
                    {
                        "label": "Eles nunca se encontraram",
                        "isCorrect": false
                    },
                    {
                        "label": "O encontro foi cancelado",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual a função do conector '~o kikkake ni' na fala e redação B2?",
                "options": [
                    {
                        "label": "Indicar o evento inicial que serviu de catalisador/gatilho para uma transformação",
                        "isCorrect": true
                    },
                    {
                        "label": "Pedir comida no restaurante",
                        "isCorrect": false
                    },
                    {
                        "label": "Dizer as horas",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como dizer 'Como resultado de 5 anos de esforço, passei no exame N2'?",
                "options": [
                    {
                        "label": "Go-nenkan no doryoku no kekka, N2 shiken ni goukaku shimashita",
                        "isCorrect": true
                    },
                    {
                        "label": "N2 shiken wa kirai desu",
                        "isCorrect": false
                    },
                    {
                        "label": "N2 shiken o taberu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "リスク を 最小限 に 抑える 対策 を 講じます",
                "translation": "Tomamos medidas para conter os riscos ao mínimo.",
                "chunks": [
                    "リスク",
                    "を",
                    "最小限",
                    "に",
                    "抑える",
                    "対策",
                    "を",
                    "講じます"
                ]
            },
            {
                "sentenceJp": "危機 管理 体制 の 強化 が 急務 です",
                "translation": "O fortalecimento do sistema de gestão de crises é urgente.",
                "chunks": [
                    "危機",
                    "管理",
                    "体制",
                    "の",
                    "強化",
                    "が",
                    "急務",
                    "です"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Em uma entrevista de podcast cultural, perguntam como começou seu amor pelo Japão.",
                "npcName": "Entrevistador Podcast",
                "npcMessage": "[Seu Nome]-san, Nihon-go no benkyou o hajimeta kikkake wa nani desu ka? (O que serviu de gatilho para você começar a estudar japonês?)",
                "options": [
                    {
                        "text": "Kodomo no koro ni mita anime o kikkake ni, Nihon no bunka ni kyoumi o motsu you ni narimashita! (Tendo os animes que assistia quando criança como gatilho, passei a ter interesse pela cultura do Japão!)",
                        "feedback": "Narrativa pessoal perfeita com kikkake ni e you ni narimashita!",
                        "isCorrect": true
                    },
                    {
                        "text": "Anime o tabemashita.",
                        "feedback": "Sem sentido.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O entrevistador pergunta sobre os resultados do seu esforço diário de estudo.",
                "npcName": "Entrevistador Podcast",
                "npcMessage": "Mainichi no doryoku no kekka, ima wa fluently ni hanasemasu ne! (Como resultado do seu esforço diário, agora fala fluentemente, né!)",
                "options": [
                    {
                        "text": "Arigatou gozaimasu! Mainichi no benkyou no kekka, B2 level ni reached dekite hontou ni ureshii desu! (Muito obrigado! Como resultado do estudo diário, estou muito feliz em ter atingido o nível B2!)",
                        "feedback": "Uso impecável de no kekka em conquistas!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Sem motivo para desculpas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O entrevistador encerra o programa parabenizando sua jornada.",
                "npcName": "Entrevistador Podcast",
                "npcMessage": "Subarashii story desu! Listener no minasan no motivation ni narimashita! (Uma história incrível! Serviu de motivação para todos os ouvintes!)",
                "options": [
                    {
                        "text": "Kichou na o-jikan o itadaki, hontou ni arigatou gozaimashita! (Muito obrigado por me conceder este tempo tão valioso!)",
                        "feedback": "Polidez e carisma fluida de nível avançado B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que expressa a estrutura gramatical '~o kikkake ni'?",
                "options": [
                    "O evento inicial que serviu de gatilho/marco catalisador para uma mudança",
                    "O preço de uma mercadoria",
                    "Uma proibição temporária"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～の結果 (～のけっか)' (~no kekka)?",
                "options": [
                    "Como resultado de...",
                    "Tendo X como gatilho/marco catalisador...",
                    "Desculpe"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '～をきっかけに' (~o kikkake ni)?",
                "options": [
                    "Como resultado de...",
                    "Tendo X como gatilho/marco catalisador...",
                    "Desculpe"
                ],
                "correctIndex": 1
            },
            {
                "question": "Sobre a regra 'Causa, Efeito e Catalisadores de Vida': qual afirmação é correta?",
                "options": [
                    "1) Substantivo + の結果 (no kekka) = Como resultado de X. 2) Evento + をきっかけに (o kikkake ni) = A partir/tendo como gatilho aquele evento inicial.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            },
            {
                "question": "Como expressar o marco inicial de um hábito: 'Tendo a viagem ao Japão como gatilho, comecei a estudar o idioma'?",
                "options": [
                    "Nihon ryokou o kikkake ni, Nihon-go no benkyou o hajimemashita",
                    "Nihon ryokou o tabemashita",
                    "Nihon ryokou wa arimasen"
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_17",
        "title": "Dialetos e Variações Regionais: Kansai, Kyushu e Tohoku",
        "section": 5,
        "sectionTitle": "Imersão Total & Maestria",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Ookini! Suitoo yo! Mensoore!",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "O Japão vai muito além do japonês padrão de Tóquio (Hyoujungo)! Conheça as ricas variações regionais (Hougen): Kansai-ben (Ookini), Kyushu-ben (Suitoo yo = Amo você) e a acolhida de Okinawa (Mensoore)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "ほうげん (方言)",
                "romaji": "Hougen",
                "translation": "Dialeto regional",
                "timeContext": "Variações linguísticas por região."
            },
            {
                "type": "vocab",
                "kanji": "おおきに",
                "romaji": "Ookini",
                "translation": "Muito obrigado (Dialeto de Kansai)",
                "timeContext": "Agradecimento tradicional em Osaka/Kyoto."
            },
            {
                "type": "vocab",
                "kanji": "すいとーよ",
                "romaji": "Suitoo yo",
                "translation": "Gosto de você / Amo você (Dialeto de Kyushu/Fukuoka)",
                "timeContext": "Expressão de afeto no sul do Japão."
            },
            {
                "type": "grammar_pill",
                "title": "O Mosaico dos Dialetos Regionais (Hougen)",
                "rule": "1) Kansai: Arigatou ➔ Ookini / DAME ➔ Akan. 2) Kyushu: Suki desu ➔ Suitoo yo / ~tai (em vez de ~desu). 3) Okinawa: Irasshai ➔ Mensoore.",
                "formula": "Hyoujungo (Tóquio) ➔ Hougen (Regional)",
                "example": "Fukuoka de wa 'Suki' o 'Suitoo yo' to iimasu (Em Fukuoka se diz 'Suitoo yo' para expressar gosto/afeto)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. O que significa o agradecimento tradicional 'Ookini (おおきに)' em Kansai?",
                "options": [
                    {
                        "label": "Muito obrigado! (Arigatou gozaimasu)",
                        "isCorrect": true
                    },
                    {
                        "label": "Com licença",
                        "isCorrect": false
                    },
                    {
                        "label": "Boa noite",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como se expressa afeto ('Gosto de você / Amo você') no dialeto de Fukuoka/Kyushu?",
                "options": [
                    {
                        "label": "Suitoo yo! (すいとーよ)",
                        "isCorrect": true
                    },
                    {
                        "label": "Kirai desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Tabetai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza a saudação de boas-vindas das ilhas de Okinawa: 'Mensoore!'",
                "options": [
                    {
                        "label": "Seja muito bem-vindo! (Irasshaimase)",
                        "isCorrect": true
                    },
                    {
                        "label": "Até logo",
                        "isCorrect": false
                    },
                    {
                        "label": "Está chovendo",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual a palavra usada para dizer 'Não pode / É proibido' no dialeto de Osaka?",
                "options": [
                    {
                        "label": "Akan! (あかん)",
                        "isCorrect": true
                    },
                    {
                        "label": "Ii yo",
                        "isCorrect": false
                    },
                    {
                        "label": "Ookini",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual o nome dado em japonês para os 'dialetos regionais' (Hougen)?",
                "options": [
                    {
                        "label": "Hougen (方言)",
                        "isCorrect": true
                    },
                    {
                        "label": "Keigo",
                        "isCorrect": false
                    },
                    {
                        "label": "Kanji",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "顧客 の 満足度 を 向上 させる 施策 を 実施 します",
                "translation": "Executamos ações para elevar a satisfação do cliente.",
                "chunks": [
                    "顧客",
                    "の",
                    "満足度",
                    "を",
                    "向上",
                    "させる",
                    "施策",
                    "を",
                    "実施",
                    "します"
                ]
            },
            {
                "sentenceJp": "フィードバック を 迅速 に 業務 に 反映 させます",
                "translation": "Refletimos o feedback rapidamente no trabalho.",
                "chunks": [
                    "フィードバック",
                    "を",
                    "迅速",
                    "に",
                    "業務",
                    "に",
                    "反映",
                    "させます"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você viaja para Fukuoka (Kyushu) e conversa com uma moradora local amigável.",
                "npcName": "Moradora de Fukuoka",
                "npcMessage": "Fukuoka no ramen, suitoo yo? (Você tá gostando do ramen de Fukuoka?)",
                "options": [
                    {
                        "text": "Un! Mecha suitoo yo! Tonkotsu ramen ga ichiban oishii ya ne! (Sim! Tô amando demais! O ramen Tonkotsu é o mais gostoso, né!)",
                        "feedback": "Integração linguística regional de nível B2 espetacular!",
                        "isCorrect": true
                    },
                    {
                        "text": "Ramen o tabemashita.",
                        "feedback": "Sem sentido.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: A moradora fica encantada ao ver você usar expressões locais.",
                "npcName": "Moradora de Fukuoka",
                "npcMessage": "Fukuoka no hougen mo shitteru n da! Sugoi tai! (Você até conhece o dialeto de Fukuoka! Que incrível!)",
                "options": [
                    {
                        "text": "Nihon kakuchi no hougen o benkyou suru no ga mecha tanoshii n desu! (Estudar os dialetos de cada canto do Japão é divertido demais!)",
                        "feedback": "Entusiasmo e imersão cultural elevados!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Sem motivo para desculpas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: A moradora te deseja uma boa viagem pelo país.",
                "npcName": "Moradora de Fukuoka",
                "npcMessage": "Mata Fukuoka ni kiti ne! (Vem de novo para Fukuoka, tá!)",
                "options": [
                    {
                        "text": "Hai! Mata zettai ni mairimasu! Ookini! (Sim! Com certeza virei de novo! Muito obrigado!)",
                        "feedback": "Harmonia perfeita entre respeito e carinho regional B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que a palavra 'Ookini (おおきに)' significa no dialeto tradicional de Kansai?",
                "options": [
                    "Muito obrigado!",
                    "Por favor",
                    "Desculpe-me"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ほうげん (方言)' (Hougen)?",
                "options": [
                    "Dialeto regional",
                    "Muito obrigado (Dialeto de Kansai)",
                    "Gosto de você / Amo você (Dialeto de Kyushu/Fukuoka)"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'おおきに' (Ookini)?",
                "options": [
                    "Dialeto regional",
                    "Muito obrigado (Dialeto de Kansai)",
                    "Gosto de você / Amo você (Dialeto de Kyushu/Fukuoka)"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'すいとーよ' (Suitoo yo)?",
                "options": [
                    "Muito obrigado (Dialeto de Kansai)",
                    "Dialeto regional",
                    "Gosto de você / Amo você (Dialeto de Kyushu/Fukuoka)"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre a regra 'O Mosaico dos Dialetos Regionais (Hougen)': qual afirmação é correta?",
                "options": [
                    "1) Kansai: Arigatou ➔ Ookini / DAME ➔ Akan. 2) Kyushu: Suki desu ➔ Suitoo yo / ~tai (em vez de ~desu). 3) Okinawa: Irasshai ➔ Mensoore.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_18",
        "title": "Onomatopeias e Mimetismos Avançados: Gitaijo e Giseigo",
        "section": 5,
        "sectionTitle": "Imersão Total & Maestria",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Wakuwaku shite imasu. Pika-pika ni migakimashita.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "As onomatopeias (Giseigo) e mimetismos de sensação (Gitaijo) são a alma da expressividade nativa japonesa! Aprenda a usar Waku-waku (Empolgação), Pika-pika (Brilhando limpo) e Peko-peko (Fome)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "ワクワク (わくわく)",
                "romaji": "Waku-waku",
                "translation": "Empolgação / Coração acelerado de expectativa",
                "timeContext": "Sensação de ansiedade positiva."
            },
            {
                "type": "vocab",
                "kanji": "ピカピカ (ぴかぴか)",
                "romaji": "Pika-pika",
                "translation": "Brilhando de limpo / Reluzente",
                "timeContext": "Estado visual de algo bem polido."
            },
            {
                "type": "vocab",
                "kanji": "ペコペコ (ぺこぺこ)",
                "romaji": "Peko-peko",
                "translation": "Roncando de fome / Estômago vazio",
                "timeContext": "Sensação física de fome."
            },
            {
                "type": "grammar_pill",
                "title": "Como Usar Onomatopeias e Mimetismos (Giseigo/Gitaijo)",
                "rule": "Onomatopeias conectam-se diretamente com o verbo する (suru) para sensações emocionais ou com と (to) para modos de ação.",
                "formula": "[Onomatopeia] + する / と [Verbo]",
                "example": "Ashita no ryokou de waku-waku shite imasu (Estou super empolgado com a viagem de amanhã)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. O que expressa a onomatopeia de sensação 'Waku-waku shite imasu'?",
                "options": [
                    {
                        "label": "Estar com o coração saltando de empolgação e expectativa",
                        "isCorrect": true
                    },
                    {
                        "label": "Estar com muita dor de barriga",
                        "isCorrect": false
                    },
                    {
                        "label": "Estar com sono profundo",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Como descrever um carro que acabou de ser lavado e está reluzindo?",
                "options": [
                    {
                        "label": "Kuruma ga pika-pika desu",
                        "isCorrect": true
                    },
                    {
                        "label": "Kuruma ga peko-peko desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Kuruma ga waku-waku desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza: 'Onaka ga peko-peko da kara, ramen tabeyou!'",
                "options": [
                    {
                        "label": "Como meu estômago tá roncando de fome, bora comer ramen!",
                        "isCorrect": true
                    },
                    {
                        "label": "Estou muito cheio",
                        "isCorrect": false
                    },
                    {
                        "label": "Não gosto de ramen",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Qual a onomatopeia usada para descrever o estado de estar 'Chovendo fininho / garoa suave'?",
                "options": [
                    {
                        "label": "Shito-shito (しとしと)",
                        "isCorrect": true
                    },
                    {
                        "label": "Pika-pika",
                        "isCorrect": false
                    },
                    {
                        "label": "Gaza-gaza",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Qual a onomatopeia usada para descrever o som de 'Rir às gargalhadas / dar risadinhas'?",
                "options": [
                    {
                        "label": "Niko-niko (Sorriso radiante) / Gera-gera (Gargalhada)",
                        "isCorrect": true
                    },
                    {
                        "label": "Peko-peko",
                        "isCorrect": false
                    },
                    {
                        "label": "Matsu-matsu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "長期 的な 視点 に 立って 戦略 を 練ります",
                "translation": "Elaboramos estratégias sob uma perspectiva de longo prazo.",
                "chunks": [
                    "長期",
                    "的な",
                    "視点",
                    "に",
                    "立って",
                    "戦略",
                    "を",
                    "練ります"
                ]
            },
            {
                "sentenceJp": "変化 に 柔軟 に 対応 する 組織 を 作ります",
                "translation": "Criamos uma organização que responde com flexibilidade às mudanças.",
                "chunks": [
                    "変化",
                    "に",
                    "柔軟",
                    "に",
                    "対応",
                    "する",
                    "組織",
                    "を",
                    "作ります"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Você e seu amigo estão prestes a entrar num parque de diversões famoso em Tóquio.",
                "npcName": "Sora",
                "npcMessage": "[Seu Nome]-san, tenki mo ii shi, amusement park da ne! (Tempo bom e parque de diversões, né!)",
                "options": [
                    {
                        "text": "Un! Ashita kara waku-waku shite nemurenai kurai datta yo! (É! Eu tava tão empolgado desde ontem que nem conseguia dormir!)",
                        "feedback": "Uso perfeito da onomatopeia de emoção waku-waku!",
                        "isCorrect": true
                    },
                    {
                        "text": "Onaka ga peko-peko desu.",
                        "feedback": "Assunto trocado sem nexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: Após brincar em várias montanhas-russas, meio-dia chega.",
                "npcName": "Sora",
                "npcMessage": "Tanoshii-! Demo shuumatsu wa onaka ga peko-peko ni natta ne! (Divertido demais-! Mas o estômago ficou roncando de fome, né!)",
                "options": [
                    {
                        "text": "Hontou da! Watashi mo peko-peko! Pika-pika na ano restaurant de tabeyou! (Verdade! Eu também tô roncando de fome! Bora comer naquele restaurante reluzente!)",
                        "feedback": "Combinação magistral das duas onomatopeias peko-peko e pika-pika!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Sem motivo para desculpas.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: Vocês encontram uma mesa e fazem o pedido felizes.",
                "npcName": "Sora",
                "npcMessage": "Niko-niko de tabeyou! (Vamos comer com um sorriso radiante no rosto!)",
                "options": [
                    {
                        "text": "Un! Kanpai! Kyou wa saikou no hi da ne! (É! Um brinde! Hoje é o melhor dia!)",
                        "feedback": "Expressividade e alegria nativa de Nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que expressa a onomatopeia 'Peko-peko (ペコペコ)' em relação ao corpo humano?",
                "options": [
                    "Sensação física de fome intensa / estômago roncando",
                    "Dormir bastante",
                    "Estar limpo"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ワクワク (わくわく)' (Waku-waku)?",
                "options": [
                    "Empolgação / Coração acelerado de expectativa",
                    "Brilhando de limpo / Reluzente",
                    "Roncando de fome / Estômago vazio"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'ピカピカ (ぴかぴか)' (Pika-pika)?",
                "options": [
                    "Empolgação / Coração acelerado de expectativa",
                    "Brilhando de limpo / Reluzente",
                    "Roncando de fome / Estômago vazio"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'ペコペコ (ぺこぺこ)' (Peko-peko)?",
                "options": [
                    "Brilhando de limpo / Reluzente",
                    "Empolgação / Coração acelerado de expectativa",
                    "Roncando de fome / Estômago vazio"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre a regra 'Como Usar Onomatopeias e Mimetismos (Giseigo/Gitaijo)': qual afirmação é correta?",
                "options": [
                    "Onomatopeias conectam-se diretamente com o verbo する (suru) para sensações emocionais ou com と (to) para modos de ação.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_19",
        "title": "Etiqueta Cultural Avançada & Filosofia Japonesa: Omotenashi, Wabi-Sabi e Ikigai",
        "section": 5,
        "sectionTitle": "Imersão Total & Maestria",
        "level": "B2",
        "xpReward": 120,
        "stage1_context": {
            "audioGuide": "Omotenashi no kokoro to Ikigai o大切 (taisetsu) ni shimasu.",
            "missionTitle": "Objetivo de Hoje",
            "missionDescription": "Conecte-se com a alma da cultura japonesa! Compreenda os conceitos filosóficos universais que moldam o idioma: Omotenashi (Hospitalidade desinteressada de coração), Wabi-Sabi (A beleza da imperfeição) e Ikigai (A razão de viver)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "おもてなし",
                "romaji": "Omotenashi",
                "translation": "Hospitalidade desinteressada suprema de coração",
                "timeContext": "Filosofia de serviço e acolhimento japonês."
            },
            {
                "type": "vocab",
                "kanji": "生きがい (いきがい)",
                "romaji": "Ikigai",
                "translation": "Razão de viver / Propósito de vida",
                "timeContext": "Motivação diária para se levantar."
            },
            {
                "type": "vocab",
                "kanji": "わびさび (侘寂)",
                "romaji": "Wabi-Sabi",
                "translation": "Estética da imperfeição e efemeridade",
                "timeContext": "Apreciação da simplicidade rústica."
            },
            {
                "type": "grammar_pill",
                "title": "A Filosofia Aplicada à Língua Japonesa",
                "rule": "Expressar esses conceitos demonstra a mais alta sensibilidade cultural no idioma N2/B2. Estrutura: [Conceito] o 大切 (taisetsu) ni suru = Valorizar/prezar por X.",
                "formula": "[Conceito Filosófico] を大切にする (o taisetsu ni suru)",
                "example": "Watashi-tachi wa Omotenashi no kokoro o taisetsu ni shite imasu (Nós prezamos pelo espírito do Omotenashi)."
            }
        ],
        "stage3_practice": [
            {
                "question": "1. O que define a filosofia tradicional japonesa de acolhimento 'Omotenashi (おもてなし)'?",
                "options": [
                    {
                        "label": "A hospitalidade suprema, atenciosa e desinteressada de coração",
                        "isCorrect": true
                    },
                    {
                        "label": "Vender produtos caros",
                        "isCorrect": false
                    },
                    {
                        "label": "Fazer greve de trabalho",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. O que significa o conceito vitalício 'Ikigai (生きがい)'?",
                "options": [
                    {
                        "label": "A razão de viver / o propósito que dá sentido à vida diária",
                        "isCorrect": true
                    },
                    {
                        "label": "Uma comida típica de Inverno",
                        "isCorrect": false
                    },
                    {
                        "label": "Um tipo de arte marcial",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Traduza o valor estético 'Wabi-Sabi (侘寂)':",
                "options": [
                    {
                        "label": "A apreciação da beleza na simplicidade, imperfeição e efemeridade do tempo",
                        "isCorrect": true
                    },
                    {
                        "label": "Construções modernas de arranha-céus",
                        "isCorrect": false
                    },
                    {
                        "label": "Música pop japonesa",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Como dizer 'Nossa empresa valoriza o espírito de Omotenashi' em Keigo?",
                "options": [
                    {
                        "label": "Kisha wa Omotenashi no kokoro o taisetsu ni shite orimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Omotenashi wa kirai desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Omotenashi o tabemasu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como responder a uma pergunta de entrevista sobre seu propósito: 'Encontrei meu Ikigai no estudo do idioma'?",
                "options": [
                    {
                        "label": "Nihon-go no benkyou ni ikigai o mitsukemashita",
                        "isCorrect": true
                    },
                    {
                        "label": "Ikigai wa arimasen",
                        "isCorrect": false
                    },
                    {
                        "label": "Ikigai wa oishii desu",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "これまでの 研究 成果 を 学会 で 発表 します",
                "translation": "Apresentaremos os resultados das pesquisas até aqui no simpósio.",
                "chunks": [
                    "これまでの",
                    "研究",
                    "成果",
                    "を",
                    "学会",
                    "で",
                    "発表",
                    "します"
                ]
            },
            {
                "sentenceJp": "論文 の 査読 を 経て 出版 されました",
                "translation": "Após revisão por pares, o artigo foi publicado.",
                "chunks": [
                    "論文",
                    "の",
                    "査読",
                    "を",
                    "経て",
                    "出版",
                    "されました"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: Em um Ryokan centenário em Kyoto, o mestre de chá explica a recepção dos hóspedes.",
                "npcName": "Mestre de Chá",
                "npcMessage": "[Seu Nome]-san, Omotenashi to wa, aite no kokoro o omou koto desu. (Omotenashi é pensar no coração do outro.)",
                "options": [
                    {
                        "text": "Subarashii oshie desu. Wabi-Sabi to Omotenashi no kokoro, taihen koudou shimasu. (Um ensinamento maravilhoso. Fico profundamente emocionado com o espírito de Wabi-Sabi e Omotenashi.)",
                        "feedback": "Sensibilidade cultural e filosófica de Nível B2 espetacular!",
                        "isCorrect": true
                    },
                    {
                        "text": "Omotenashi o tabemashita.",
                        "feedback": "Sem sentido.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O mestre pergunta o que te dá motivação diária no aprendizado do japonês.",
                "npcName": "Mestre de Chá",
                "npcMessage": "[Seu Nome]-san no Ikigai wa nani desu ka? (Qual é o seu Ikigai / razão de viver?)",
                "options": [
                    {
                        "text": "Nihon no bunka to manabi, hito toつながる (tsunagaru) koto ga watashi no Ikigai desu! (Aprender a cultura japonesa e me conectar com as pessoas é o meu Ikigai!)",
                        "feedback": "Resposta poética e profunda!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Desnecessário.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O mestre serve uma xícara de Matcha artesanal em uma tigela histórica.",
                "npcName": "Mestre de Chá",
                "npcMessage": "Douzo, Wabi-Sabi no aji o o-tanoshimi kudasai. (Por favor, aprecie o sabor do Wabi-Sabi.)",
                "options": [
                    {
                        "text": "O-temae, arigatou gozaimasu. Kokoro o komete itadakimasu. (Agradeço por preparar o chá com tanto carinho. Beberei de todo o coração.)",
                        "feedback": "Etiqueta e imersão filosófica máxima B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "O que expressa a filosofia vitalícia 'Ikigai (生きがい)'?",
                "options": [
                    "A razão de viver / o propósito que nos motiva diariamente a acordar",
                    "Uma técnica de cozinhar peixe",
                    "Um tipo de vestimenta"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra 'おもてなし' (Omotenashi)?",
                "options": [
                    "Hospitalidade desinteressada suprema de coração",
                    "Razão de viver / Propósito de vida",
                    "Estética da imperfeição e efemeridade"
                ],
                "correctIndex": 0
            },
            {
                "question": "Qual é o significado correto da palavra '生きがい (いきがい)' (Ikigai)?",
                "options": [
                    "Hospitalidade desinteressada suprema de coração",
                    "Razão de viver / Propósito de vida",
                    "Estética da imperfeição e efemeridade"
                ],
                "correctIndex": 1
            },
            {
                "question": "Qual é o significado correto da palavra 'わびさび (侘寂)' (Wabi-Sabi)?",
                "options": [
                    "Razão de viver / Propósito de vida",
                    "Hospitalidade desinteressada suprema de coração",
                    "Estética da imperfeição e efemeridade"
                ],
                "correctIndex": 2
            },
            {
                "question": "Sobre a regra 'A Filosofia Aplicada à Língua Japonesa': qual afirmação é correta?",
                "options": [
                    "Expressar esses conceitos demonstra a mais alta sensibilidade cultural no idioma N2/B2. Estrutura: [Conceito] o 大切 (taisetsu) ni suru = Valorizar/prezar por X.",
                    "Esta regra é utilizada exclusivamente para contagem de animais pequenos.",
                    "Esta estrutura é uma forma arcaica e não deve ser usada no cotidiano."
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "b2_mod_20",
        "title": "O Grande Desafio B2: Trabalho de Conclusão de Curso & Avaliação Integrativa",
        "section": 5,
        "sectionTitle": "Imersão Total & Maestria",
        "level": "B2",
        "xpReward": 300,
        "stage1_context": {
            "audioGuide": "Omedetou gozaimasu! Subete no level kanryou desu!",
            "missionTitle": "Grande Desafio de Maestria B2: Trabalho de Conclusão de Curso",
            "missionDescription": "Você chegou ao cume da montanha! Este é o grande teste de conclusão integrativo de toda a plataforma Japão Academy. O Quiz final reunirá 30 questões abrangendo os Níveis A1, A2, B1 e B2 para consagrar a sua fluência avançada!"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "kanji": "かんぜん (完全)",
                "romaji": "Kanzen",
                "translation": "Perfeição / Totalidade",
                "timeContext": "Maestria absoluta atingida."
            },
            {
                "type": "vocab",
                "kanji": "しょうめい (証明)",
                "romaji": "Shoumei",
                "translation": "Certificação / Prova",
                "timeContext": "Comprovação de competência em japonês."
            },
            {
                "type": "vocab",
                "kanji": "おめでとう ございます",
                "romaji": "Omedetou gozaimasu",
                "translation": "Parabéns!",
                "timeContext": "Celebração de conquista máxima da plataforma."
            },
            {
                "type": "grammar_pill",
                "title": "O Troféu de Maestria Japão Academy",
                "rule": "Você percorreu uma jornada extraordinária: do 'Konnichiwa' A1 às negociações Keigo e filosofias avançadas B2. Você possui agora fluência e autonomia no idioma!",
                "formula": "[A1 + A2 + B1 + B2] = 日本語 Master (Japonês Fluente)!",
                "example": "Nihon-go de kanzen ni seikatsu shite, shigoto dekiru you ni narimashita! (Passei a conseguir viver e trabalhar plenamente em japonês!)"
            }
        ],
        "stage3_practice": [
            {
                "question": "1. Como abrir seu discurso de conclusão de curso diante da banca examinadora?",
                "options": [
                    {
                        "label": "Honjitsu wa subete no level kanryou ni tsuite happyou itashimasu",
                        "isCorrect": true
                    },
                    {
                        "label": "Kyou wa tabemashou",
                        "isCorrect": false
                    },
                    {
                        "label": "Sayounara",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "2. Qual a frase Keigo de maior respeito para agradecer aos instrutores ao fim da jornada?",
                "options": [
                    {
                        "label": "Kicho na go-shidou, hontou ni arigatou gozaimashita",
                        "isCorrect": true
                    },
                    {
                        "label": "Arigatou ne",
                        "isCorrect": false
                    },
                    {
                        "label": "Gomen nasai",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "3. Como expressar a virada de vida 'Tendo o estudo de japonês como gatilho, minha vida mudou'?",
                "options": [
                    {
                        "label": "Nihon-go no benkyou o kikkake ni, jinsei ga karamashita",
                        "isCorrect": true
                    },
                    {
                        "label": "Nihon-go wa oishii desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Nihon-go wa nai desu",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "4. Traduza a conquista: 'Jiritsu shite Nihon-go o hanaseru you ni narimashita'",
                "options": [
                    {
                        "label": "Passei a conseguir falar japonês com total autonomia e independência",
                        "isCorrect": true
                    },
                    {
                        "label": "Não falo nada de japonês",
                        "isCorrect": false
                    },
                    {
                        "label": "Japonês é muito difícil",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "5. Como encerrar a apresentação prometendo continuar a jornada de aprendizado?",
                "options": [
                    {
                        "label": "Kongo mo Nihon-go no shoujin o tsuzukete mairimasu!",
                        "isCorrect": true
                    },
                    {
                        "label": "Nihon-go o yameru tsumori desu",
                        "isCorrect": false
                    },
                    {
                        "label": "Sayounara, ja ne",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceJp": "日本語 の 学習 を きっかけ に 人生 が 大きく 変わりました",
                "translation": "Tendo o estudo de japonês como marco, minha vida mudou grandemente.",
                "chunks": [
                    "日本語",
                    "の",
                    "学習",
                    "を",
                    "きっかけ",
                    "に",
                    "人生",
                    "が",
                    "大きく",
                    "変わりました"
                ]
            },
            {
                "sentenceJp": "自立 して 日本語 で 業務 を 遂行 できる ようになりました",
                "translation": "Passei a conseguir executar tarefas de trabalho autonomamente em japonês.",
                "chunks": [
                    "自立",
                    "して",
                    "日本語",
                    "で",
                    "業務",
                    "を",
                    "遂行",
                    "できる",
                    "ようになりました"
                ]
            }
        ],
        "stage4_dialog": [
            {
                "scenario": "Situação 1: O Reitor e a Banca Examinadora da Japão Academy sobem ao palco para o anúncio de conclusão.",
                "npcName": "Reitor Japão Academy",
                "npcMessage": "[Seu Nome]-san, congratulations! Kono 4-level no journey, taihen subarashii desu! (Parabéns! Esta jornada de 4 níveis foi espetacular!)",
                "options": [
                    {
                        "text": "Sensei-tachi no kicho na go-shidou no okage desu! Honjitsu wo kanryou dekite, taihen koue de gozaimasu! (É graças à valiosa orientação dos professores! É uma imensa honra poder concluir hoje!)",
                        "feedback": "Demonstração de gratidão Keigo impecável!",
                        "isCorrect": true
                    },
                    {
                        "text": "Watashi wa sugoi desu!",
                        "feedback": "Muito arrogante.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 2: O Reitor pergunta sobre seus planos com o idioma fluente agora.",
                "npcName": "Reitor Japão Academy",
                "npcMessage": "Kongo, Nihon-go o tsukatte nani o shitai desu ka? (No futuro, o que deseja fazer usando o japonês?)",
                "options": [
                    {
                        "text": "Nihon-go de business o shite, Nihon to sekai o tsunagu koudou ni kouken itashitai desu! (Pretendo fazer negócios em japonês e contribuir para conectar o Japão com o mundo!)",
                        "feedback": "Visão de futuro e liderança inspiradora de nível B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Iie, tabemashita.",
                        "feedback": "Desconexo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gomen nasai!",
                        "feedback": "Desnecessário.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "scenario": "Situação 3: O Reitor entrega o Troféu de Maestria B2 e o Certificado da Japão Academy sob aplausos!",
                "npcName": "Reitor Japão Academy",
                "npcMessage": "Subarashii desu! Nihon-go Master Certificate o shouyo itashimasu! Omedetou gozaimasu! (Incrível! Outorgamos a você o Certificado de Mestre em Japonês! Parabéns!)",
                "options": [
                    {
                        "text": "Domo arigatou gozaimashita! Minasan no Omotenashi to taisetsu na manabi, zettai ni wasuremasen! (Muito obrigado! Jamais esquecerei o Omotenashi de todos e este aprendizado tão valioso!)",
                        "feedback": "🏆 PARABÉNS! VOCÊ ZEROU A JORNADA COMPLETA DA JAPÃO ACADEMY E CONQUISTOU A MAESTRIA B2!",
                        "isCorrect": true
                    },
                    {
                        "text": "Nani desu ka?",
                        "feedback": "Inadequado.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sayounara!",
                        "feedback": "Despedida seca.",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. [Nível A1] Qual a saudação formal para 'Bom dia' usada até às 10h?",
                "options": [
                    "Konnichiwa",
                    "Ohayou gozaimasu",
                    "Konbanwa"
                ],
                "correctIndex": 1
            },
            {
                "question": "2. [Nível A1] Como pedir água educadamente na loja de conveniência?",
                "options": [
                    "Mizu wa doko",
                    "Mizu o taberu",
                    "Mizu o kudasai"
                ],
                "correctIndex": 2
            },
            {
                "question": "3. [Nível A1] Qual partícula indica a pergunta no final da frase?",
                "options": [
                    "Ka (か)",
                    "Wa (は)",
                    "Ni (に)"
                ],
                "correctIndex": 0
            },
            {
                "question": "4. [Nível A1] Qual palavra demonstrativa indica um objeto distante de ambos os falantes?",
                "options": [
                    "Kore (これ)",
                    "Are (あれ)",
                    "Sore (それ)"
                ],
                "correctIndex": 1
            },
            {
                "question": "5. [Nível A1] Qual verbo indica a existência de seres vivos (pessoas/animais)?",
                "options": [
                    "Arimasu (あります)",
                    "Nomimasu",
                    "Imasu (います)"
                ],
                "correctIndex": 2
            },
            {
                "question": "6. [Nível A1] Como perguntar o preço de uma mercadoria?",
                "options": [
                    "Ikura desu ka?",
                    "Nan-ji desu ka?",
                    "Dare desu ka?"
                ],
                "correctIndex": 0
            },
            {
                "question": "7. [Nível A1] Qual partícula indica a direção do movimento ('Ir para a escola')?",
                "options": [
                    "De (で)",
                    "Ni (に) / E (へ)",
                    "O (を)"
                ],
                "correctIndex": 1
            },
            {
                "question": "8. [Nível A2] Como expressar a ação contínua 'Estou estudando agora'?",
                "options": [
                    "Ima benkyou shimashita",
                    "Ima benkyou shita",
                    "Ima benkyou shite imasu"
                ],
                "correctIndex": 2
            },
            {
                "question": "9. [Nível A2] Como pedir permissão 'Posso entrar no quarto?'",
                "options": [
                    "Heya ni hairte mo ii desu ka?",
                    "Heya ni hairte wa ikemasen",
                    "Heya ni hairimasen"
                ],
                "correctIndex": 0
            },
            {
                "question": "10. [Nível A2] Como expressar a proibição 'Não é permitido tirar fotos aqui'?",
                "options": [
                    "Shashin o totte mo ii desu",
                    "Shashin o totte wa ikemasen",
                    "Shashin o torimashou"
                ],
                "correctIndex": 1
            },
            {
                "question": "11. [Nível A2] Como dizer no passado de verbo 'Ontem assisti a um filme'?",
                "options": [
                    "Kinou eiga o mimasu",
                    "Kinou eiga o miru",
                    "Kinou eiga o mimashita"
                ],
                "correctIndex": 2
            },
            {
                "question": "12. [Nível A2] Qual a estrutura para comparar dois elementos ('A é mais bonito que B')?",
                "options": [
                    "A wa B yori kirei desu",
                    "A to B wa kirei",
                    "A wa B kara kirei"
                ],
                "correctIndex": 0
            },
            {
                "question": "13. [Nível A2] Como expressar a obrigação 'Tenho que tomar o remédio'?",
                "options": [
                    "Kusuri o nomitai desu",
                    "Kusuri o nomanakereba narimasen",
                    "Kusuri o nomimashou"
                ],
                "correctIndex": 1
            },
            {
                "question": "14. [Nível A2] Como dizer 'Pretendo viajar no mês que vem'?",
                "options": [
                    "Raigetsu ryokou shimashita",
                    "Raigetsu ryokou shite kudasai",
                    "Raigetsu ryokou suru tsumori desu"
                ],
                "correctIndex": 2
            },
            {
                "question": "15. [Nível B1] Qual a contração informal cotidiana de 'Ikanakereba' (Tenho que ir)?",
                "options": [
                    "Ikanakya",
                    "Ikamashita",
                    "Ikaitai"
                ],
                "correctIndex": 0
            },
            {
                "question": "16. [Nível B1] Como expressar citação indireta 'Ele disse que vai comprar'?",
                "options": [
                    "Kare wa kaimashita",
                    "Kare wa koutu to iimashita",
                    "Kare wa kaku desu"
                ],
                "correctIndex": 1
            },
            {
                "question": "17. [Nível B1] Como explicar um motivo com polidez e suavidade em uma desculpa?",
                "options": [
                    "Usando ~demo",
                    "Usando ~kara desu ka",
                    "Usando a partícula ~node (ので)"
                ],
                "correctIndex": 2
            },
            {
                "question": "18. [Nível B1] O que expressa a estrutura '~te shimaimashita'?",
                "options": [
                    "Lamento/arrependimento por um erro ou conclusão total não planejada",
                    "Um convite festivo",
                    "Um pedido de desconto"
                ],
                "correctIndex": 0
            },
            {
                "question": "19. [Nível B1] Traduza a Passiva de Incômodo: 'Ame ni furaremashita'",
                "options": [
                    "Gosto da chuva",
                    "Fui pego pela chuva de surpresa",
                    "Não choveu"
                ],
                "correctIndex": 1
            },
            {
                "question": "20. [Nível B1] O que expressa o favor prestado de você para outra pessoa (~te ageru)?",
                "options": [
                    "Receber um favor do chefe",
                    "Pedir dinheiro",
                    "Fazer um favor/ajuda para um amigo"
                ],
                "correctIndex": 2
            },
            {
                "question": "21. [Nível B1] Qual o verbo de humildade (Kenjougo) para dizer seu próprio nome profissionalmente?",
                "options": [
                    "Moushimasu (申します)",
                    "Irassharu",
                    "Oshiaru"
                ],
                "correctIndex": 0
            },
            {
                "question": "22. [Nível B1] Qual a frase de despedida ao sair do escritório antes dos colegas?",
                "options": [
                    "Itadakimasu",
                    "Osaki ni shitsurei shimasu",
                    "O-yasumi nasai"
                ],
                "correctIndex": 1
            },
            {
                "question": "23. [Nível B2] O que expressa a estrutura gramatical '~koto ni natte iru'?",
                "options": [
                    "Uma proibição informal",
                    "Uma escolha de comida",
                    "Uma regra, norma ou agendamento socialmente estabelecido"
                ],
                "correctIndex": 2
            },
            {
                "question": "24. [Nível B2] Traduza o conector de acréscimo: '~dake de naku'",
                "options": [
                    "Não apenas X, como também Y",
                    "Apenas X",
                    "Nenhum dos dois"
                ],
                "correctIndex": 0
            },
            {
                "question": "25. [Nível B2] Qual a nuance da contradição '~kuse ni'?",
                "options": [
                    "Gratidão amorosa",
                    "Crítica ou reprovação por uma atitude contraditória de alguém",
                    "Uma ordem de trabalho"
                ],
                "correctIndex": 1
            },
            {
                "question": "26. [Nível B2] O que significa a metáfora idiomática 'Kao ga hiroi (顔が広い)'?",
                "options": [
                    "Ter um rosto largo fisicamente",
                    "Estar triste",
                    "Ser uma pessoa muito bem conectada / conhecer muita gente"
                ],
                "correctIndex": 2
            },
            {
                "question": "27. [Nível B2] Qual o verbo honorífico Sonkeigo supremo para a ação do cliente 'Comer/Beber'?",
                "options": [
                    "Meshiagaru (召し上がる)",
                    "Itadaku",
                    "Taberu"
                ],
                "correctIndex": 0
            },
            {
                "question": "28. [Nível B2] Como recusar diplomaticamente uma proposta em negócios sem dizer 'Dekimasen'?",
                "options": [
                    "Dizendo 'Dame desu'",
                    "Usando a forma ~kanemasu (かねます)",
                    "Gritando 'Iie'"
                ],
                "correctIndex": 1
            },
            {
                "question": "29. [Nível B2] O que expressa a estrutura de causa catalisadora '~o kikkake ni'?",
                "options": [
                    "O preço do bilhete",
                    "Um erro de digitação",
                    "O evento inicial que serviu de gatilho/marco para uma grande mudança"
                ],
                "correctIndex": 2
            },
            {
                "question": "30. [Nível B2] O que define a filosofia vitalícia tradicional japonesa 'Ikigai (生きがい)'?",
                "options": [
                    "A razão de viver / o propósito que motiva a jornada diária da vida",
                    "Uma técnica de artes marciais",
                    "Uma dança típica"
                ],
                "correctIndex": 0
            }
        ]
    }
];

// Contrato textual editorial da Fase 3C. Conteúdo pendente de revisão humana qualificada.
const B2_EDITORIAL_AUDIO = [
    ["明日は雨が降ることになっている。", "Explicar uma regra, expectativa ou situação estabelecida."],
    ["日本語だけでなく、漢字も勉強しています。これは一歩にすぎない。", "Distinguir maneiras avançadas de limitar ou ampliar uma afirmação."],
    ["知らないくせに、話さないで。値段の割にはおいしい。", "Expressar uma avaliação crítica com nuance adequada ao contexto."],
    ["目が回る忙しさ。顔が広いですね。", "Interpretar expressões idiomáticas japonesas em contexto."],
    ["ご覧になりました。お目にかかれて光栄です。", "Reconhecer formas avançadas de respeito e humildade."],
    ["この件について、起承転結でレポートを作成しました。", "Organizar um e-mail ou relatório profissional com clareza."],
    ["申し訳ございませんが、この条件はお受けしかねます。", "Discordar ou recusar uma proposta com polidez profissional."],
    ["今日はB2プロジェクトについて発表いたします。", "Apresentar uma proposta profissional de forma estruturada."],
    ["経済の統計によると、景気が回復しています。", "Identificar informações principais em uma notícia."],
    ["市役所の書類についてご案内いたします。", "Compreender instruções formais de um procedimento público."],
    ["めっちゃ、ほんまにええやん！やばいですよ！", "Reconhecer marcas frequentes do dialeto de Kansai e da fala informal."],
    ["高齢化社会と環境問題について考察します。", "Expor uma opinião fundamentada sobre um tema social."],
    ["お金さえあれば、大丈夫。悪天候にもかかわらず、出発した。", "Conectar argumentos com estruturas acadêmicas avançadas."],
    ["これは成功と言えるだろう。毎日の努力にほかならない。", "Defender uma conclusão usando evidências e modalização."],
    ["心を打つ文学の世界。夏目漱石の作品を読む。", "Comentar tema e impressão de um trecho literário."],
    ["調査の結果、新しい技術が生まれた。この出会いをきっかけに……。", "Relacionar causa, resultado e ponto de partida de um acontecimento."],
    ["おおきに！好いとうよ！めんそーれ！", "Identificar diferenças básicas entre variedades regionais."],
    ["わくわくしています。ぴかぴかに磨きました。", "Usar onomatopeias para descrever estado, som ou movimento."],
    ["おもてなしの心と生きがいを大切にします。", "Explicar um conceito cultural japonês sem generalizações absolutas."],
    ["おめでとうございます！すべてのレベル修了です！", "Integrar os recursos da trilha B2 em uma apresentação final guiada."]
];

function separarDialogoLegadoB2(dialogue, displayText, audioText = displayText, scenario = "") {
    const legacy = String(dialogue.npcMessage || "");
    const translationStart = legacy.lastIndexOf(" (");
    const hasTranslation = translationStart >= 0 && legacy.endsWith(")");
    const romaji = hasTranslation ? legacy.slice(0, translationStart) : legacy;
    const translation = hasTranslation ? legacy.slice(translationStart + 2, -1) : "";
    return { displayText, audioText, furigana: "", romaji, translation, scenario };
}

// Fase 21B.4 — auditoria editorial integral dos módulos B2-01 a B2-20.
function applyB2Phase21BEditorialReview() {
    const builders = {
        b2_mod_01: [["この 会社 では 毎週 月曜日 に 会議 を 開く こと に なっています", "Nesta empresa, está estabelecido que haverá uma reunião toda segunda-feira."], ["予定 の 割 に 早く 終わりました", "Terminou cedo considerando o que estava previsto."]],
        b2_mod_02: [["日本語 だけ で なく 中国語 も 話せます", "Ele fala não apenas japonês, mas também chinês."], ["これ は 一つ の 提案 に すぎません", "Isto não passa de uma proposta."]],
        b2_mod_03: [["知らない くせ に 知っている よう に 話します", "Mesmo sem saber, fala como se soubesse."], ["この 店 は 値段 の 割 に おいしい です", "Este restaurante é bom considerando o preço."]],
        b2_mod_04: [["佐藤さん は 顔 が 広い です", "Sato conhece muita gente."], ["忙しい ので 手 を 貸して ください", "Estou ocupado; dê-me uma ajuda, por favor."]],
        b2_mod_05: [["本日 は お目 に かかれて 光栄 です", "É uma honra encontrá-lo hoje."], ["こちら の 資料 を ご覧 ください", "Veja este material, por favor."]],
        b2_mod_06: [["添付 資料 を ご確認 ください", "Confira o documento anexo, por favor."], ["ご不明 な 点 が ございましたら お知らせ ください", "Caso haja alguma dúvida, avise-nos, por favor."]],
        b2_mod_07: [["あいにく その 条件 は お受け しかねます", "Infelizmente, não podemos aceitar essa condição."], ["代案 として 別 の プラン を ご提案 します", "Como alternativa, propomos outro plano."]],
        b2_mod_08: [["本日 は 調査 結果 について 発表 いたします", "Hoje apresentarei os resultados da pesquisa."], ["統計 に よる と 売上 は 十パーセント 増加 しました", "Segundo as estatísticas, as vendas aumentaram dez por cento."]],
        b2_mod_09: [["報道 に よる と 景気 は 回復 して います", "Segundo as notícias, a economia está se recuperando."], ["政府 は 新しい 方針 を 発表 しました", "O governo anunciou uma nova política."]],
        b2_mod_10: [["申請書 に 名前 と 住所 を ご記入 ください", "Preencha seu nome e endereço no formulário, por favor."], ["必要 書類 を 窓口 に 提出 して ください", "Entregue os documentos necessários no balcão, por favor."]],
        b2_mod_11: [["この 映画 ほんま に おもろい な", "Este filme é realmente engraçado."], ["この 曲 めっちゃ ええ やん", "Esta música é muito boa, não é?"]],
        b2_mod_12: [["少子化 に よって 労働 人口 が 減って います", "A população economicamente ativa está diminuindo devido à baixa natalidade."], ["環境 を 守る ため に 再生 可能 エネルギー を 利用 します", "Usamos energia renovável para proteger o meio ambiente."]],
        b2_mod_13: [["時間 さえ あれば 完成 できます", "Basta haver tempo para conseguirmos concluir."], ["強い 雨 にも かかわらず 試合 は 続きました", "A partida continuou apesar da chuva forte."]],
        b2_mod_14: [["この 方法 は 有効 だ と 言える でしょう", "Pode-se dizer que este método é eficaz."], ["この 成果 は 毎日 の 努力 に ほかなりません", "Este resultado se deve precisamente ao esforço diário."]],
        b2_mod_15: [["この 作品 は 読者 の 心 を 打ちます", "Esta obra comove os leitores."], ["主人公 の 心情 が 丁寧 に 描かれて います", "Os sentimentos do protagonista são retratados cuidadosamente."]],
        b2_mod_16: [["調査 の 結果 新しい 問題 が 分かりました", "Como resultado da pesquisa, identificou-se um novo problema."], ["留学 を きっかけ に 日本語 を 学び 始めました", "Comecei a estudar japonês a partir da experiência de intercâmbio."]],
        b2_mod_17: [["方言 は 地域 や 世代 に よって 異なります", "Os dialetos variam conforme a região e a geração."], ["大阪 で おおきに と 言われました", "Em Osaka, disseram-me 'ookini'."]],
        b2_mod_18: [["明日 の 旅行 が 楽しみ で わくわく して います", "Estou empolgado com a viagem de amanhã."], ["机 を ぴかぴか に 磨きました", "Poli a mesa até ela ficar brilhando."]],
        b2_mod_19: [["仕事 に 生きがい を 感じて います", "Sinto que meu trabalho dá sentido à minha vida."], ["旅館 では 客 を 迎える 心遣い を 大切 に して います", "No ryokan, valoriza-se o cuidado ao receber hóspedes."]],
        b2_mod_20: [["これまで に 学んだ 内容 を 復習 しました", "Revisei o conteúdo estudado até aqui."], ["これから も 日本語 の 学習 を 続けます", "Continuarei estudando japonês."]]
    };
    const rules = {
        b2_mod_01: ["Regras e decisões vigentes com 〜ことになっている", "〜ことになっている apresenta uma decisão, regra ou arranjo que continua válido. A estrutura não indica, por si só, previsão meteorológica, sentimento ou decisão espontânea do falante.", "Vる／Vない + ことになっている", "この会社では、毎週月曜日に会議を開くことになっています。— Nesta empresa, está estabelecido que haverá uma reunião toda segunda-feira."],
        b2_mod_02: ["Acréscimo com 〜だけでなく e limitação com 〜にすぎない", "〜だけでなく acrescenta outro elemento ao primeiro. 〜にすぎない limita a avaliação a ‘não passar de’; pode produzir modéstia em certos contextos, mas não possui essa função obrigatoriamente.", "X だけでなく Y も | N／forma simples + にすぎない", "これは一つの提案にすぎません。— Isto não passa de uma proposta."],
        b2_mod_03: ["Contraste avaliativo com 〜くせに e 〜わりに", "〜くせに costuma transmitir crítica, reprovação ou surpresa negativa e exige atenção à relação entre os interlocutores. 〜わりに apresenta um resultado diferente do esperado considerando uma referência.", "forma simples + くせに | N の／forma simples + わりに", "この店は値段のわりにおいしいです。— Este restaurante é bom considerando o preço."],
        b2_mod_04: ["Expressões idiomáticas dependem do contexto", "Expressões como 顔が広い e 手を貸す têm sentidos convencionais que não resultam apenas da soma literal das palavras. Registro, colocação e situação determinam se uma expressão é adequada.", "顔が広い | 手を貸す | 心を打つ", "困っている友達に手を貸しました。— Dei uma ajuda ao amigo que estava com dificuldades."],
        b2_mod_05: ["Distinções essenciais de sonkeigo e kenjougo", "Sonkeigo eleva ações da pessoa respeitada; kenjougo apresenta com humildade ações do falante ou de seu grupo relacionadas a ela. お目にかかる é humilde para 会う, enquanto ご覧になる é respeitoso para 見る. As formas devem acompanhar a relação e a situação.", "会う→お目にかかる | 見る→ご覧になる", "本日はお目にかかれて光栄です。— É uma honra encontrá-lo hoje."],
        b2_mod_06: ["Organização de e-mails profissionais", "E-mails profissionais costumam apresentar saudação, identificação, assunto, pedido ou informação e encerramento, mas a composição varia conforme relação, finalidade e convenções da organização. Não há uma fórmula tripartite universal.", "saudação・identificação + assunto + ação solicitada + encerramento", "添付資料をご確認くださいますよう、お願いいたします。— Solicitamos que confira o documento anexo."],
        b2_mod_07: ["Recusa e impossibilidade com 〜かねる", "〜かねる, ligado à base em ます, indica que o falante não pode ou não se dispõe a realizar algo. É frequente em atendimento e negócios, mas pode soar firme; explicação e alternativa ajudam a ajustar a recusa.", "Vます sem ます + かねる", "その条件はお受けしかねます。— Não podemos aceitar essa condição."],
        b2_mod_08: ["Estrutura contextual de apresentações", "Uma apresentação pode situar tema e objetivo, desenvolver evidências e encerrar com síntese ou próximos passos. Fórmulas de abertura, tratamento da plateia e grau de polidez variam conforme evento e público.", "tema・objetivo + evidências + síntese・próximos passos", "本日は調査結果について発表いたします。— Hoje apresentarei os resultados da pesquisa."],
        b2_mod_09: ["Fontes e estilo informativo", "Expressões como 〜によると e 〜と報じられている apresentam a fonte ou o caráter reportado da informação. O estilo jornalístico alterna formas simples, construções nominais e registro polido conforme veículo e gênero.", "fonte + によると | oração + と報じられている", "報道によると、景気は回復しているそうです。— Segundo as notícias, a economia estaria se recuperando."],
        b2_mod_10: ["Instruções e linguagem administrativa", "Avisos e formulários usam expressões como ご記入ください, ご提出ください e 〜が必要です. A formulação depende do órgão e do procedimento; prefixos honoríficos e いただく não podem ser combinados mecanicamente com qualquer substantivo.", "N にご記入ください | N をご提出ください | N が必要です", "申請書にお名前と住所をご記入ください。— Preencha seu nome e endereço no formulário."],
        b2_mod_11: ["Reconhecimento de Kansai-ben e linguagem informal", "Formas como や, ほんま e めっちゃ aparecem em variedades de Kansai e na fala informal, com distribuição que varia por região, geração, identidade e mídia. Reconhecê-las não implica que sejam adequadas em todo contexto.", "だ→や | 本当に→ほんまに | とても→めっちゃ", "この映画、ほんまにおもろいな。— Este filme é realmente engraçado."],
        b2_mod_12: ["Apresentar causas em temas sociais", "〜によって pode apresentar causa ou meio em construções compatíveis; 〜ため（に） pode indicar causa ou finalidade conforme a forma precedente. Relações sociais complexas normalmente exigem evidências, não uma única causa gramaticalmente simplificada.", "N によって | forma simples + ため（に）", "少子化によって、労働人口が減っています。— A população economicamente ativa está diminuindo devido à baixa natalidade."],
        b2_mod_13: ["Condição mínima e contraste com 〜さえ〜ば e 〜にもかかわらず", "〜さえ〜ば apresenta um requisito considerado suficiente dentro do enunciado. 〜にもかかわらず introduz um fato que contrasta com o resultado esperado; a conexão muda conforme substantivo, verbo ou adjetivo.", "N さえ Vば | N／forma simples + にもかかわらず", "強い雨にもかかわらず、試合は続きました。— A partida continuou apesar da chuva forte."],
        b2_mod_14: ["Conclusão modalizada e conclusão enfática", "〜と言えるだろう apresenta uma conclusão com modalização, enquanto 〜にほかならない identifica enfaticamente uma causa ou natureza. A força retórica de ambas exige apoio no argumento e adequação ao gênero textual.", "oração + と言えるだろう | N + にほかならない", "この成果は皆の努力にほかなりません。— Este resultado se deve precisamente ao esforço de todos."],
        b2_mod_15: ["Leitura e comentário de textos literários", "Textos literários podem empregar estilos, vocabulário e recursos retóricos variados. Formas clássicas como なり aparecem em certos textos, mas não definem toda literatura japonesa; a análise deve apoiar-se no trecho efetivamente lido.", "trecho + evidência textual + interpretação", "主人公の心情が丁寧に描かれています。— Os sentimentos do protagonista são retratados cuidadosamente."],
        b2_mod_16: ["Resultado com 〜の結果 e marco com 〜をきっかけに", "〜の結果 apresenta um resultado decorrente de processo, ação ou investigação. 〜をきっかけに marca um acontecimento que deu início ou impulso a uma mudança, sem afirmar sozinho uma relação causal total.", "N の結果 | N をきっかけに", "留学をきっかけに、日本語を学び始めました。— Comecei a estudar japonês a partir da experiência de intercâmbio."],
        b2_mod_17: ["Variação regional sem equivalências absolutas", "方言 abrange variedades regionais internamente diversas. おおきに é associado a Kansai, e formas como 好いとう aparecem em partes de Kyushu, mas uso, pronúncia e nuance variam por localidade, geração e falante.", "forma regional + região・falante・situação", "方言は地域や世代によって異なります。— Os dialetos variam conforme a região e a geração."],
        b2_mod_18: ["Giongo, giseigo e gitaigo", "Palavras miméticas podem representar sons, vozes, movimentos, estados ou sensações. わくわく descreve expectativa animada, ぴかぴか pode descrever brilho e ぺこぺこ pode indicar muita fome; partícula e verbo dependem da construção.", "わくわくする | ぴかぴかに磨く | お腹がぺこぺこだ", "明日の旅行が楽しみで、わくわくしています。— Estou empolgado com a viagem de amanhã."],
        b2_mod_19: ["Conceitos culturais com contexto e diversidade", "おもてなし, わび・さび e 生きがい possuem histórias e usos variados. São conceitos úteis para leitura e discussão cultural, mas não definem uma essência universal do Japão nem têm uma única tradução suficiente em todo contexto.", "termo + contexto histórico・social + uso no texto", "仕事に生きがいを感じています。— Sinto que meu trabalho dá sentido à minha vida."],
        b2_mod_20: ["Revisão de conclusão B2", "A conclusão registra a realização das atividades internas da trilha A1–B2 e o resultado de sua avaliação. Ela não certifica competência linguística externa, capacidade profissional ou equivalência oficial com exames.", "conteúdos estudados + avaliação interna", "これからも日本語の学習を続けます。— Continuarei estudando japonês."]
    };
    const missions = {
        b2_mod_01: "Apresente regras, decisões e arranjos que permanecem vigentes com 〜ことになっている.",
        b2_mod_02: "Acrescente informações com 〜だけでなく e limite uma avaliação com 〜にすぎない.",
        b2_mod_03: "Compare as nuances críticas de 〜くせに com a discrepância avaliativa de 〜わりに.",
        b2_mod_04: "Reconheça e use algumas expressões idiomáticas frequentes sem interpretá-las literalmente.",
        b2_mod_05: "Distinga formas respeitosas e humildes frequentes em encontros profissionais.",
        b2_mod_06: "Organize um e-mail profissional de acordo com destinatário, objetivo e ação solicitada.",
        b2_mod_07: "Recuse uma condição com polidez e apresente uma alternativa adequada ao contexto.",
        b2_mod_08: "Estruture uma apresentação com tema, evidências, resposta a perguntas e encerramento.",
        b2_mod_09: "Identifique fontes, fatos reportados e escolhas de registro em textos informativos.",
        b2_mod_10: "Compreenda instruções frequentes em formulários e procedimentos administrativos.",
        b2_mod_11: "Reconheça formas selecionadas de Kansai-ben e avalie seu registro antes de usá-las.",
        b2_mod_12: "Apresente causas e consequências sem reduzir temas sociais complexos a uma única explicação.",
        b2_mod_13: "Construa condição mínima e contraste com 〜さえ〜ば e 〜にもかかわらず.",
        b2_mod_14: "Defenda uma conclusão usando modalização e ênfase compatíveis com as evidências.",
        b2_mod_15: "Comente um texto literário com base em elementos efetivamente presentes no trecho.",
        b2_mod_16: "Relacione processo, resultado e acontecimento inicial com 〜の結果 e 〜をきっかけに.",
        b2_mod_17: "Reconheça exemplos de variação regional sem tratá-los como equivalências universais.",
        b2_mod_18: "Use palavras miméticas para descrever expectativa, brilho e fome em construções naturais.",
        b2_mod_19: "Discuta conceitos culturais japoneses com contexto e sem generalizações essencialistas.",
        b2_mod_20: "Revise os conteúdos da trilha e conclua a avaliação interna sem alegação de proficiência externa."
    };
    const correctAnswers = {
        b2_mod_01: ["分かりました。規則を確認します。 (Entendi. Vou conferir as regras.)", "申し訳ありません。今後、気をつけます。 (Peço desculpas. Tomarei cuidado daqui em diante.)", "ご説明ありがとうございます。 (Obrigado pela explicação.)"],
        b2_mod_02: ["ご評価ありがとうございます。今後も検討を続けます。 (Obrigado pela avaliação. Continuarei examinando o tema.)", "この成果はチームだけでなく、会社全体にも役立ちます。 (Este resultado será útil não apenas à equipe, mas à empresa toda.)", "ご期待に応えられるよう、努力いたします。 (Vou me esforçar para corresponder às expectativas.)"],
        b2_mod_03: ["そうですね。値段のわりに、品質がよくありません。 (É verdade. A qualidade não é boa considerando o preço.)", "実際に見ていないくせに批判するのはよくないですね。 (Não é bom criticar sem ter visto de fato.)", "まず、自分たちで確かめましょう。 (Primeiro, vamos conferir por conta própria.)"],
        b2_mod_04: ["手を貸してくれる人がいると助かりますね。 (Seria uma grande ajuda se alguém pudesse colaborar.)", "部長に相談してみましょう。 (Vamos tentar consultar o gerente.)", "ありがとうございます。私から頼んでみます。 (Obrigado. Vou tentar pedir.)"],
        b2_mod_05: ["本日はお目にかかれて光栄です。資料をご覧いただけますか。 (É uma honra encontrá-lo. Poderia ver os documentos?)", "はい、存じておりました。計画どおり進めてまいります。 (Sim, eu já sabia. Prosseguiremos conforme o plano.)", "ご期待に応えられるよう、努力してまいります。 (Continuaremos nos esforçando para corresponder às expectativas.)"],
        b2_mod_06: ["下書きができました。ご確認いただけますか。 (O rascunho ficou pronto. Poderia conferi-lo?)", "ありがとうございます。確認してから送信します。 (Obrigado. Vou conferir antes de enviar.)", "承知しました。送信後にご報告します。 (Entendido. Informarei após o envio.)"],
        b2_mod_07: ["あいにく、その条件はお受けしかねます。代案をご提案してもよろしいでしょうか。 (Infelizmente, não podemos aceitar essa condição. Podemos propor uma alternativa?)", "ご検討いただき、ありがとうございます。 (Obrigado por considerar a proposta.)", "では、契約書を準備いたします。 (Então prepararei o contrato.)"],
        b2_mod_08: ["本日はお忙しい中、お越しいただきありがとうございます。調査結果について発表いたします。 (Obrigado por virem apesar da agenda. Apresentarei os resultados.)", "ご質問ありがとうございます。予算の内訳をご説明します。 (Obrigado pela pergunta. Explicarei a composição do orçamento.)", "ご清聴ありがとうございました。 (Obrigado pela atenção.)"],
        b2_mod_09: ["はい。経済指標の変化が報じられていましたね。 (Sim. Foi noticiada uma mudança nos indicadores econômicos.)", "技術の影響についても慎重に考える必要がありますね。 (Também precisamos considerar cuidadosamente os impactos da tecnologia.)", "国際情勢も続けて確認しましょう。 (Vamos continuar acompanhando a situação internacional.)"],
        b2_mod_10: ["手続きについて伺いたいのですが。 (Gostaria de perguntar sobre o procedimento.)", "はい。こちらに記入すればよろしいですか。 (Sim. Devo preencher aqui?)", "ご案内ありがとうございました。 (Obrigado pela orientação.)"],
        b2_mod_11: ["ほんまやな。めっちゃおもろいわ。 (É verdade. É muito engraçado.)", "標準語との違いを確認しながら見ています。 (Assisto conferindo as diferenças em relação à língua padrão.)", "おおきに。もっと練習するわ。 (Obrigado. Vou praticar mais.)"],
        b2_mod_12: ["複数の要因を資料に基づいて考える必要があります。 (Precisamos considerar vários fatores com base nos dados.)", "環境への影響とのバランスも大切ですね。 (O equilíbrio com os impactos ambientais também é importante.)", "関連する資料も確認してみます。 (Também vou conferir materiais relacionados.)"],
        b2_mod_13: ["時間さえあれば、考察をさらに深められると思います。 (Basta haver tempo para eu aprofundar a análise.)", "厳しい条件にもかかわらず、データを集めることができました。 (Conseguimos coletar dados apesar das condições difíceis.)", "貴重なご指導をありがとうございました。 (Muito obrigado pela valiosa orientação.)"],
        b2_mod_14: ["このデータから、新しい方法は有効だと言えるでしょう。 (A partir dos dados, pode-se dizer que o novo método é eficaz.)", "貴重なご意見をいただき、ありがとうございます。 (Obrigado pelas valiosas observações.)", "今後も研究を続けてまいります。 (Continuarei realizando a pesquisa.)"],
        b2_mod_15: ["はい。『こころ』を読みました。人物の心情が丁寧に描かれていました。 (Sim. Li Kokoro. Os sentimentos das personagens foram retratados cuidadosamente.)", "次は太宰治の作品も読んでみます。 (Na próxima vez, experimentarei ler uma obra de Dazai Osamu.)", "来月の話し合いを楽しみにしています。 (Estou ansioso pela conversa do próximo mês.)"],
        b2_mod_16: ["子どものころに見た映画をきっかけに、日本文化に興味を持ちました。 (Um filme que vi na infância despertou meu interesse pela cultura japonesa.)", "毎日の学習の結果、以前より話せるようになりました。 (Como resultado do estudo diário, passei a falar melhor do que antes.)", "貴重なお時間をいただき、ありがとうございました。 (Muito obrigado por seu valioso tempo.)"],
        b2_mod_17: ["福岡では、この言い方を使う人もいるんですね。 (Em Fukuoka, há pessoas que usam essa forma, não é?)", "方言は地域や話す人によって違うので、もっと調べたいです。 (Os dialetos variam por região e falante; quero pesquisar mais.)", "ありがとうございます。また福岡に伺います。 (Obrigado. Visitarei Fukuoka novamente.)"],
        b2_mod_18: ["うん。昨日からわくわくしていました。 (Sim. Estou empolgado desde ontem.)", "私もお腹がぺこぺこです。まず食事にしましょう。 (Também estou morrendo de fome. Vamos comer primeiro.)", "うん。楽しく食べよう。 (Sim. Vamos aproveitar a refeição.)"],
        b2_mod_19: ["お話を聞けて勉強になりました。 (Aprendi muito ouvindo sua explicação.)", "人と学び続けることに生きがいを感じます。 (Sinto propósito em continuar aprendendo com as pessoas.)", "ありがとうございます。ゆっくり味わいます。 (Obrigado. Vou apreciar com calma.)"],
        b2_mod_20: ["これまでのご指導に感謝いたします。 (Agradeço pela orientação até aqui.)", "これからも日本語を学び、できる場面で活用したいです。 (Quero continuar estudando e usar o japonês nas situações em que puder.)", "ありがとうございます。今後も学習を続けます。 (Obrigado. Continuarei estudando.)"]
    };
    const missingDialogueContent = {
        b2_mod_01: { 1: ["夜十時以降は静かにすることになっています。", "Yoru juuji ikou wa shizuka ni suru koto ni natte imasu.", "Está estabelecido que se mantenha silêncio depois das dez da noite."] },
        b2_mod_04: { 2: ["よろしく頼むよ。", "Yoroshiku tanomu yo.", "Conto com você."] },
        b2_mod_07: { 2: ["よろしく頼むよ。", "Yoroshiku tanomu yo.", "Conto com você."] },
        b2_mod_11: { 1: ["日本のアニメでも関西弁が分かるんですか。", "Nihon no anime demo Kansai-ben ga wakaru n desu ka?", "Você também reconhece Kansai-ben em animes japoneses?"] },
        b2_mod_12: { 2: ["資料を確認して、また話し合いましょう。", "Shiryou o kakunin shite, mata hanashiaimashou.", "Vamos conferir os dados e conversar novamente."] }
    };
    const titles = {
        b2_mod_01: "Regras e decisões vigentes: 〜ことになっている",
        b2_mod_02: "Acréscimo e limitação: 〜だけでなく e 〜にすぎない",
        b2_mod_03: "Crítica e discrepância: 〜くせに e 〜わりに",
        b2_mod_05: "Keigo em encontros profissionais: お目にかかる e ご覧になる",
        b2_mod_06: "E-mails profissionais: organização, pedido e encerramento",
        b2_mod_08: "Apresentações profissionais: tema, evidências e conclusão",
        b2_mod_09: "Leitura de notícias: fonte, registro e vocabulário informativo",
        b2_mod_10: "Formulários e avisos administrativos",
        b2_mod_12: "Temas sociais e ambientais: causas, dados e argumentos",
        b2_mod_13: "Condição e contraste: 〜さえ〜ば e 〜にもかかわらず",
        b2_mod_14: "Conclusões argumentativas: 〜と言えるだろう e 〜にほかならない",
        b2_mod_15: "Leitura literária: observação e interpretação textual",
        b2_mod_16: "Resultado e marco de mudança: 〜の結果 e 〜をきっかけに",
        b2_mod_17: "Dialetos e variações regionais em contexto",
        b2_mod_18: "Palavras miméticas: sons, estados e sensações",
        b2_mod_19: "Conceitos culturais japoneses em contexto",
        b2_mod_20: "Avaliação integrativa de conclusão B2"
    };
    const exactReplacements = new Map([
        ["Qual verbo Kenjougo é usado para dizer que VOCÊ encontrou um cliente/superior com extremo respeito?", "Qual forma humilde pode ser usada para dizer que você encontrou uma pessoa tratada com respeito?"],
        ["Qual o verbo em Kenjougo avançado para dizer a um CEO 'É uma honra conhecê-lo/encontrá-lo'?", "Qual expressão usa お目にかかる para dizer que foi uma honra encontrar alguém?"],
        ["Quais são os 3 blocos obrigatórios de um e-mail de negócios japonês?", "Quais componentes podem organizar um e-mail profissional nesta atividade?"],
        ["No Japão, discordar diretamente é considerado indelicado.", "Em muitos contextos profissionais, uma discordância pode ser formulada com explicação e alternativa."],
        ["Desenvolva a capacidade de ler e entender notícias reais da imprensa japonesa (NHK News)!", "Pratique a leitura de frases informativas inspiradas no vocabulário jornalístico."],
        ["Navegue pela burocracia japonesa com autonomia!", "Pratique instruções frequentes em formulários e procedimentos administrativos."],
        ["1. [Nível A1] Qual a saudação formal para 'Bom dia' usada até às 10h?", "1. [Nível A1] Qual saudação polida significa 'Bom dia'?"],
        ["Kare wa koutu to iimashita", "Kare wa kau to iimashita"],
        ["Qual o verbo honorífico Sonkeigo supremo para a ação do cliente 'Comer/Beber'?", "Qual verbo respeitoso pode apresentar a ação de comer ou beber de outra pessoa?"],
        ["O que define a filosofia vitalícia tradicional japonesa 'Ikigai (生きがい)'?", "A que ideia a palavra 生きがい pode se referir?"],
        ["A razão de viver / o propósito que motiva a jornada diária da vida", "Aquilo que dá sentido, valor ou motivação à vida de alguém"],
        ["Comprovação de competência em japonês.", "Prova ou demonstração, conforme o contexto da palavra."],
        ["Celebração de conquista máxima da plataforma.", "Expressão de congratulação pela conclusão da trilha."],
        ["Nihon-go de kanzen ni seikatsu shite, shigoto dekiru you ni narimashita! (Passei a conseguir viver e trabalhar plenamente em japonês!)", "Korekara mo Nihongo no gakushuu o tsuzukemasu. (Continuarei estudando japonês.)"]
    ]);
    const normalizeText = value => {
        if (typeof value !== "string") return value;
        let text = exactReplacements.get(value) || value;
        return text
            .replace(/\[Seu Nome\](?:さん|-san)?[！、,]?\s*/g, "")
            .replace(/\bGuran\b/g, "Goran")
            .replace(/\bO-me ni kakarer\b/g, "O-me ni kakaru")
            .replace(/\bAimeu\b/g, "au")
            .replace(/\bre-report\b/gi, "houkoku")
            .replace(/\breached\b/gi, "tasshita")
            .replace(/\bquoriti \(shiina\)\b/gi, "hinshitsu")
            .replace(/\bNews\b/g, "Nyuusu")
            .replace(/\bdata\b/gi, "deeta")
            .replace(/\bdiscussion\b/gi, "hanashiai")
            .replace(/\bperson no sentiment\b/gi, "jinbutsu no shinjou")
            .replace(/\bkotaerareu\b/gi, "kotaerareru")
            .replace(/\bmoro kousatsu o fukame rarenu\b/gi, "motto kousatsu o fukamerareru")
            .replace(/\bshourui\b/gi, "shorui")
            .replace(/\bzouta\b/gi, "zouka");
    };
    const normalizeObject = value => {
        if (Array.isArray(value)) return value.map(normalizeObject);
        if (!value || typeof value !== "object") return normalizeText(value);
        Object.keys(value).forEach(key => { value[key] = normalizeObject(value[key]); });
        return value;
    };
    const makeBuilder = ([sentenceJp, translation]) => ({ sentenceJp, translation, chunks: sentenceJp.split(" ") });
    CURSO_B2_DADOS.forEach(module => {
        module.title = titles[module.id] || module.title;
        module.stage1_context.missionDescription = missions[module.id];
        module.stage3_5_sentenceBuilder = builders[module.id].map(makeBuilder);
        const pill = module.stage2_drops.find(item => item.type === "grammar_pill");
        const rule = rules[module.id];
        Object.assign(pill, { title: rule[0], rule: rule[1], formula: rule[2], example: rule[3] });
        const ruleQuiz = module.stage5_quiz.find(item => /Sobre (?:a regra|a revisão)/i.test(item.question));
        if (ruleQuiz) {
            ruleQuiz.question = `Sobre a regra '${rule[0]}': qual afirmação é correta?`;
            ruleQuiz.options[ruleQuiz.correctIndex] = rule[1];
        }
        Object.entries(missingDialogueContent[module.id] || {}).forEach(([index, values]) => {
            const [displayText, romaji, translation] = values;
            module.stage4_dialog[Number(index)].content = { displayText, audioText: displayText, furigana: "", romaji, translation, scenario: "" };
        });
        normalizeObject(module);
        module.stage4_dialog.forEach((dialogue, index) => {
            if (dialogue.content && dialogue.content.displayText) dialogue.npcMessage = dialogue.content.displayText;
            const correct = dialogue.options.find(option => option.isCorrect);
            if (correct) correct.text = correctAnswers[module.id][index];
            dialogue.options.forEach(option => {
                option.feedback = option.isCorrect
                    ? "A resposta corresponde ao contexto e à estrutura praticada."
                    : "A resposta não corresponde à pergunta ou à estrutura praticada neste contexto.";
            });
        });
        module.editorialReview = { status: "corrected", phase: "21B.4", scope: "all-editorial-targets", sources: ["quartet-2-textbook", "tobira-2009"] };
    });
    const m01 = CURSO_B2_DADOS.find(module => module.id === "b2_mod_01");
    Object.assign(m01.stage2_drops[1], { kanji: "よてい (予定)", romaji: "Yotei", translation: "Plano / programação", timeContext: "Plano ou evento programado." });
    const m05 = CURSO_B2_DADOS.find(module => module.id === "b2_mod_05");
    Object.assign(m05.stage2_drops[0], { romaji: "O-me ni kakaru", translation: "Encontrar alguém (forma humilde de 会う)", timeContext: "Apresentar humildemente o encontro do falante com uma pessoa tratada com respeito." });
    Object.assign(m05.stage2_drops[1], { romaji: "Goran ni naru", translation: "Ver / olhar (forma respeitosa de 見る)", timeContext: "Apresentar respeitosamente a ação de ver de outra pessoa." });
    const m10 = CURSO_B2_DADOS.find(module => module.id === "b2_mod_10");
    Object.assign(m10.stage2_drops[1], { kanji: "しょるい (書類)", romaji: "Shorui", translation: "Documento / documentação", timeContext: "Documentos exigidos em um procedimento." });
    const m17 = CURSO_B2_DADOS.find(module => module.id === "b2_mod_17");
    Object.assign(m17.stage2_drops[2], { kanji: "好いとう", romaji: "Suitou", translation: "Forma regional associada a ‘gostar’", timeContext: "Uso e nuance variam dentro de Kyushu e entre falantes." });
    const m19 = CURSO_B2_DADOS.find(module => module.id === "b2_mod_19");
    Object.assign(m19.stage2_drops[0], { translation: "Hospitalidade / acolhimento atento", timeContext: "Conceito usado em discursos sobre atendimento e recepção, com sentidos dependentes do contexto." });
    Object.assign(m19.stage2_drops[1], { translation: "Aquilo que dá sentido ou valor à vida", timeContext: "A fonte de sentido pode variar de pessoa para pessoa." });
    Object.assign(m19.stage2_drops[2], { translation: "Conceito estético ligado, entre outros aspectos, à transitoriedade e à imperfeição", timeContext: "O significado depende do período, da tradição e do texto em análise." });
    const culturalReplacements = new Map([
        ["A hospitalidade suprema, atenciosa e desinteressada de coração", "Hospitalidade ou acolhimento atento, conforme o contexto"],
        ["Hospitalidade desinteressada suprema de coração", "Hospitalidade ou acolhimento atento, conforme o contexto"],
        ["A apreciação da beleza na simplicidade, imperfeição e efemeridade do tempo", "Conceito estético ligado à transitoriedade e à imperfeição"],
        ["Estética da imperfeição e efemeridade", "Conceito estético ligado à transitoriedade e à imperfeição"]
    ]);
    const replaceCulturalClaims = value => {
        if (Array.isArray(value)) {
            value.forEach((item, index) => {
                if (typeof item === "string" && culturalReplacements.has(item)) value[index] = culturalReplacements.get(item);
                else replaceCulturalClaims(item);
            });
            return;
        }
        if (!value || typeof value !== "object") return;
        Object.entries(value).forEach(([key, item]) => {
            if (typeof item === "string" && culturalReplacements.has(item)) value[key] = culturalReplacements.get(item);
            else replaceCulturalClaims(item);
        });
    };
    replaceCulturalClaims(m19);
    const m20 = CURSO_B2_DADOS.find(module => module.id === "b2_mod_20");
    Object.assign(m20.stage2_drops[0], { translation: "Completude / integridade", timeContext: "Vocabulário revisto sem alegar domínio linguístico total." });
    Object.assign(m20.stage2_drops[1], { translation: "Prova / demonstração", timeContext: "Nesta plataforma, o documento registra apenas a conclusão interna da trilha." });
    Object.assign(m20.stage2_drops[2], { timeContext: "Congratulação pela conclusão das atividades da trilha." });
    m20.stage3_practice.forEach(item => {
        (item.options || []).forEach(option => {
            if (/total autonomia e independência/i.test(option.label || "")) {
                option.label = "Concluí as atividades da trilha e continuarei estudando japonês";
            }
        });
    });
    m20.stage5_quiz[20].options[2] = "Ossharu (おっしゃる)";
    m20.stage5_quiz[26].question = "27. [Nível B2] Qual verbo respeitoso pode apresentar a ação de comer ou beber de outra pessoa?";
    const m02 = CURSO_B2_DADOS.find(module => module.id === "b2_mod_02");
    if (m02.stage4_dialog[0].content) m02.stage4_dialog[0].content.translation = "Foi uma análise excelente!";
    const m05Practice = CURSO_B2_DADOS.find(module => module.id === "b2_mod_05").stage3_practice;
    m05Practice.forEach(item => {
        item.question = String(item.question || "")
            .replace(/guran/gi, "goran")
            .replace(/polidez Keigo suprema/gi, "registro de Keigo adequado");
    });
    normalizeObject(CURSO_B2_DADOS);
}

CURSO_B2_DADOS.forEach((module, index) => {
    const [displayText, canDo] = B2_EDITORIAL_AUDIO[index];
    module.stage1_context.audio = {
        displayText,
        audioText: displayText,
        furigana: "",
        romaji: module.stage1_context.audioGuide || "",
        translation: "",
        scenario: ""
    };
    module.canDo = canDo;
    module.editorialReview = { status: "pending-human-review", phase: "3C" };
});

const B2_DIALOGUE_CONTRACT = {
    b2_mod_01: [
        ["[Seu Nome]さん、管理規則によると、ごみは朝八時前に出すことになっていますよ。", "管理規則によると、ごみは朝八時前に出すことになっていますよ。"],
        null,
        ["分かってくれて助かるよ。よろしく。"]
    ],
    b2_mod_02: [
        ["[Seu Nome]さん、素晴らしい分析でした！", "素晴らしい分析でした！"],
        ["チームだけでなく、会社全体の支援になりますよ。"],
        ["今後の活動も期待しております。"]
    ],
    b2_mod_03: [
        ["[Seu Nome]さん、あの新しい店、値段が高いね。", "あの新しい店、値段が高いね。"],
        ["あの評論家、行ったことがないくせに、悪いことばかり書いているよ。"],
        ["自分たちで行って確かめよう！"]
    ],
    b2_mod_04: [
        ["[Seu Nome]さん、最近、仕事で目が回る忙しさだね……", "最近、仕事で目が回る忙しさだね……"],
        ["佐藤部長は顔が広いから、誰か紹介してくれるかも！"],
        null
    ],
    b2_mod_05: [
        ["[Seu Nome]さん、最近の業績はいかがですか。", "最近の業績はいかがですか。"],
        ["素晴らしいデータだ。この計画はすでにご存じだったのか。"],
        ["今後の活動に期待しているよ。"]
    ],
    b2_mod_06: [
        ["[Seu Nome]さん、B2プロジェクトのメールの下書き、できた？", "B2プロジェクトのメールの下書き、できた？"],
        ["本題が明確で、素晴らしい文章だね！"],
        ["よろしくお願いするよ！"]
    ],
    b2_mod_07: [
        ["この値段から五十パーセント割引してくれないか。"],
        ["ふむ……十パーセントの特典なら、悪くないね。"],
        null
    ],
    b2_mod_08: [
        ["", "", "役員たちは静かに発表の開始を待っている。"],
        ["予算の統計について、少し説明してくれないか。"],
        ["", "", "役員たちが発表に拍手を送っている。"]
    ],
    b2_mod_09: [
        ["[Seu Nome]さん、今日のNHKニュース、見た？", "今日のNHKニュース、見た？"],
        ["AIと技術の開発も、すごい成長だね。"],
        ["賢い分析だ！毎日ニュースを確認しよう！"]
    ],
    b2_mod_10: [
        ["いらっしゃいませ。本日はどのようなご用件ですか。"],
        ["では、この書類にお名前と住所をご記入いただけますか。"],
        ["確認いたしました。これで問題なく完了です。"]
    ],
    b2_mod_11: [
        ["このコメディ、ほんまにめっちゃおもろいやろ？"],
        null,
        ["もちろんや！もう関西人と同じやん！"]
    ],
    b2_mod_12: [
        ["[Seu Nome]さん、日本の高齢化社会についてどう考えますか。", "日本の高齢化社会についてどう考えますか。"],
        ["環境問題とのバランスも大切ですね。"],
        null
    ],
    b2_mod_13: [
        ["[Seu Nome]さん、この論文の論理は明確だね。", "この論文の論理は明確だね。"],
        ["厳しい条件にもかかわらず、結果を出したね。"],
        ["素晴らしいです！学会に投稿しましょう！"]
    ],
    b2_mod_14: [
        ["[Seu Nome]さん、このデータの考察をまとめてください。", "このデータの考察をまとめてください。"],
        ["明確で価値の高い論旨だね。議論の組み立てが素晴らしいよ。"],
        ["合格です！おめでとうございます！"]
    ],
    b2_mod_15: [
        ["[Seu Nome]さん、夏目漱石の作品を読んだことある？", "夏目漱石の作品を読んだことある？"],
        ["太宰治の作品も、文学的にとても深いよ。"],
        ["来月の議論、楽しみにしているよ！"]
    ],
    b2_mod_16: [
        ["[Seu Nome]さん、日本語の勉強を始めたきっかけは何ですか。", "日本語の勉強を始めたきっかけは何ですか。"],
        ["毎日の努力の結果、今は自然に話せますね！"],
        ["素晴らしい話です！聞いている皆さんの励みになりました！"]
    ],
    b2_mod_17: [
        ["福岡のラーメン、好いとうと？"],
        ["福岡の方言も知っとうと！すごかたい！"],
        ["また福岡に来てね！"]
    ],
    b2_mod_18: [
        ["[Seu Nome]さん、天気もいいし、遊園地日和だね！", "天気もいいし、遊園地日和だね！"],
        ["楽しい！でも、もうお腹がぺこぺこになったね！"],
        ["にこにこ笑って食べよう！"]
    ],
    b2_mod_19: [
        ["[Seu Nome]さん、おもてなしとは、相手の心を思うことです。", "おもてなしとは、相手の心を思うことです。"],
        ["[Seu Nome]さんの生きがいは何ですか。", "生きがいは何ですか。"],
        ["どうぞ、わび・さびの味わいをお楽しみください。"]
    ],
    b2_mod_20: [
        ["[Seu Nome]さん、おめでとうございます。この四つのレベルの学習は、本当に素晴らしかったです！", "おめでとうございます。この四つのレベルの学習は、本当に素晴らしかったです！"],
        ["今後、日本語を使って何をしたいですか。"],
        ["素晴らしいです！B2コースの修了証をお渡しいたします。おめでとうございます！"]
    ]
};

CURSO_B2_DADOS.forEach(module => {
    const contracts = B2_DIALOGUE_CONTRACT[module.id] || [];
    contracts.forEach((contract, index) => {
        if (!contract || !module.stage4_dialog[index]) return;
        const [displayText, audioText = displayText, scenario = ""] = contract;
        module.stage4_dialog[index].content = separarDialogoLegadoB2(module.stage4_dialog[index], displayText, audioText, scenario);
    });
});

if (typeof window !== "undefined") { window.CURSO_B2_DADOS = CURSO_B2_DADOS; }

const B2_PHASE18_AUDIO_CORRECTIONS = {
    b2_mod_01: ["明日は雨が降ることになっている。", "Ashita wa ame ga furu koto ni natte iru.", "Está previsto que chova amanhã."],
    b2_mod_02: ["日本語だけでなく、漢字も勉強しています。これは一歩にすぎない。", "Nihongo dake de naku, kanji mo benkyou shite imasu. Kore wa ippo ni suginai.", "Estudo não apenas japonês, mas também Kanji. Isto não passa de um primeiro passo."],
    b2_mod_03: ["知らないくせに、話さないで。値段の割にはおいしい。", "Shiranai kuse ni, hanasanaide. Nedan no wari ni wa oishii.", "Não fale como se soubesse, quando não sabe. É saboroso considerando o preço."],
    b2_mod_04: ["目が回る忙しさ。顔が広いですね。", "Me ga mawaru isogashisa. Kao ga hiroi desu ne.", "Uma correria de deixar a cabeça girando. Você conhece muita gente, não é?"],
    b2_mod_05: ["ご覧になりましたか。お目にかかれて光栄です。", "Goran ni narimashita ka. O-me ni kakarete kouei desu.", "O senhor viu? É uma honra conhecê-lo."],
    b2_mod_06: ["この件について、起承転結でレポートを作成しました。", "Kono ken ni tsuite, kishoutenketsu de repooto o sakusei shimashita.", "Elaborei um relatório sobre este assunto com estrutura kishoutenketsu."],
    b2_mod_07: ["申し訳ございませんが、この条件はお受けしかねます。", "Moushiwake gozaimasen ga, kono jouken wa o-uke shikanemasu.", "Lamento, mas não podemos aceitar esta condição."],
    b2_mod_08: ["今日はB2プロジェクトについて発表いたします。", "Kyou wa B2 purojekuto ni tsuite happyou itashimasu.", "Hoje farei uma apresentação sobre o projeto B2."],
    b2_mod_09: ["経済の統計によると、景気が回復しています。", "Keizai no toukei ni yoru to, keiki ga kaifuku shite imasu.", "Segundo as estatísticas econômicas, a economia está se recuperando."],
    b2_mod_10: ["市役所の書類についてご案内いたします。", "Shiyakusho no shorui ni tsuite go-annai itashimasu.", "Vou orientá-lo sobre os documentos da prefeitura."],
    b2_mod_11: ["めっちゃ、ほんまにええやん！やばいですよ！", "Meccha, honma ni ee yan! Yabai desu yo!", "É muito bom mesmo! É impressionante!"],
    b2_mod_12: ["高齢化社会と環境問題について考察します。", "Koureika shakai to kankyou mondai ni tsuite kousatsu shimasu.", "Analisaremos a sociedade em envelhecimento e os problemas ambientais."],
    b2_mod_13: ["お金さえあれば、大丈夫。悪天候にもかかわらず、出発した。", "Okane sae areba, daijoubu. Akutenkou ni mo kakawarazu, shuppatsu shita.", "Desde que haja dinheiro, ficará tudo bem. Partimos apesar do mau tempo."],
    b2_mod_14: ["これは成功と言えるだろう。毎日の努力にほかならない。", "Kore wa seikou to ieru darou. Mainichi no doryoku ni hoka naranai.", "Pode-se dizer que isto foi um sucesso. Não é nada além do resultado do esforço diário."],
    b2_mod_15: ["心を打つ文学の世界。夏目漱石の作品を読む。", "Kokoro o utsu bungaku no sekai. Natsume Souseki no sakuhin o yomu.", "O mundo comovente da literatura. Ler uma obra de Natsume Souseki."],
    b2_mod_16: ["調査の結果、新しい技術が生まれた。この出会いをきっかけに……。", "Chousa no kekka, atarashii gijutsu ga umareta. Kono deai o kikkake ni...", "Como resultado da pesquisa, surgiu uma nova tecnologia. A partir deste encontro..."],
    b2_mod_17: ["おおきに！好いとうよ！めんそーれ！", "Ookini! Suitou yo! Mensooree!", "Muito obrigado! Gosto de você! Bem-vindo!"],
    b2_mod_18: ["わくわくしています。ぴかぴかに磨きました。", "Wakuwaku shite imasu. Pikapika ni migakimashita.", "Estou empolgado. Poli até ficar brilhando."],
    b2_mod_19: ["おもてなしの心と生きがいを大切にします。", "Omotenashi no kokoro to ikigai o taisetsu ni shimasu.", "Valorizamos o espírito de hospitalidade e aquilo que dá sentido à vida."],
    b2_mod_20: ["おめでとうございます！すべてのレベル修了です！", "Omedetou gozaimasu! Subete no reberu shuuryou desu!", "Parabéns! Todos os níveis foram concluídos!"]
};

const B2_PHASE18_DIALOGUE_CORRECTIONS = {
    b2_mod_02: { 1: ["チームだけでなく、会社全体の支援になりますよ。", "Chiimu dake de naku, kaisha zentai no shien ni narimasu yo.", "Isso apoiará não apenas a equipe, mas a empresa inteira."] },
    b2_mod_03: { 1: ["あの評論家、行ったことがないくせに、悪いことばかり書いているよ。", "Ano hyouronka, itta koto ga nai kuse ni, warui koto bakari kaite iru yo.", "Aquele crítico só escreve coisas ruins, embora nunca tenha ido lá."] },
    b2_mod_04: { 0: ["[Seu Nome]さん、最近、仕事で目が回る忙しさだね……", "[Seu Nome]-san, saikin shigoto de me ga mawaru isogashisa da ne...", "Ultimamente o trabalho está numa correria de deixar a cabeça girando..."] },
    b2_mod_05: {
        0: ["[Seu Nome]さん、最近の業績はいかがですか。", "[Seu Nome]-san, saikin no gyouseki wa ikaga desu ka?", "Como está o desempenho recente?"],
        1: ["素晴らしいデータだ。この計画はすでにご存じだったのか。", "Subarashii deeta da. Kono keikaku wa sude ni gozonji datta no ka?", "São dados excelentes. Você já conhecia este plano?"]
    },
    b2_mod_06: {
        0: ["[Seu Nome]さん、B2プロジェクトのメールの下書き、できた？", "[Seu Nome]-san, B2 purojekuto no meeru no shitagaki, dekita?", "O rascunho do e-mail do projeto B2 ficou pronto?"],
        1: ["本題が明確で、素晴らしい文章だね！", "Hondai ga meikaku de, subarashii bunshou da ne!", "O assunto principal está claro; é um excelente texto!"],
        2: ["よろしくお願いするよ！", "Yoroshiku onegai suru yo!", "Conto com você!"]
    },
    b2_mod_07: {
        0: ["この値段から五十パーセント割引してくれないか。", "Kono nedan kara gojuu paasento waribiki shite kurenai ka?", "Não poderia dar cinquenta por cento de desconto neste preço?"],
        1: ["ふむ……十パーセントの特典なら、悪くないね。", "Fumu... Juu paasento no tokuten nara, warukunai ne.", "Hum... Se for um benefício de dez por cento, não está mal."]
    },
    b2_mod_08: { 1: ["予算の統計について、少し説明してくれないか。", "Yosan no toukei ni tsuite, sukoshi setsumei shite kurenai ka?", "Poderia explicar um pouco as estatísticas do orçamento?"] },
    b2_mod_09: {
        0: ["[Seu Nome]さん、今日のNHKニュース、見た？", "[Seu Nome]-san, kyou no NHK nyuusu, mita?", "Viu o noticiário da NHK de hoje?"],
        2: ["賢い分析だ！毎日ニュースを確認しよう！", "Kashikoi bunseki da! Mainichi nyuusu o kakunin shiyou!", "É uma análise inteligente! Vamos conferir as notícias todos os dias!"]
    },
    b2_mod_10: {
        0: ["いらっしゃいませ。本日はどのようなご用件ですか。", "Irasshaimase. Honjitsu wa dono you na goyouken desu ka?", "Bem-vindo. Em que posso ajudá-lo hoje?"],
        2: ["確認いたしました。これで問題なく完了です。", "Kakunin itashimashita. Kore de mondai naku kanryou desu.", "Conferi. Com isso, o procedimento foi concluído sem problemas."]
    },
    b2_mod_11: {
        0: ["このコメディ、ほんまにめっちゃおもろいやろ？", "Kono komedi, honma ni meccha omoroi yaro?", "Esta comédia é muito engraçada mesmo, não é?"],
        2: ["もちろんや！もう関西人と同じやん！", "Mochiron ya! Mou Kansai-jin to onaji yan!", "Claro! Você já fala como alguém de Kansai!"]
    },
    b2_mod_12: { 1: ["環境問題とのバランスも大切ですね。", "Kankyou mondai to no baransu mo taisetsu desu ne.", "O equilíbrio com as questões ambientais também é importante."] },
    b2_mod_13: {
        0: ["[Seu Nome]さん、この論文の論理は明確だね。", "[Seu Nome]-san, kono ronbun no ronri wa meikaku da ne.", "A lógica deste artigo está clara."],
        1: ["厳しい条件にもかかわらず、結果を出したね。", "Kibishii jouken ni mo kakawarazu, kekka o dashita ne.", "Você obteve resultados apesar das condições difíceis."],
        2: ["素晴らしいです！学会に投稿しましょう！", "Subarashii desu! Gakkai ni toukou shimashou!", "Excelente! Vamos submeter o trabalho à sociedade acadêmica!"]
    },
    b2_mod_14: {
        0: ["[Seu Nome]さん、このデータの考察をまとめてください。", "[Seu Nome]-san, kono deeta no kousatsu o matomete kudasai.", "Resuma a análise destes dados, por favor."],
        1: ["明確で価値の高い論旨だね。議論の組み立てが素晴らしいよ。", "Meikaku de kachi no takai ronshi da ne. Giron no kumitate ga subarashii yo.", "É uma tese clara e valiosa. A estrutura da argumentação está excelente."]
    },
    b2_mod_15: {
        1: ["太宰治の作品も、文学的にとても深いよ。", "Dazai Osamu no sakuhin mo, bungakuteki ni totemo fukai yo.", "As obras de Dazai Osamu também têm grande profundidade literária."],
        2: ["来月の議論、楽しみにしているよ！", "Raigetsu no giron, tanoshimi ni shite iru yo!", "Estou ansioso pela discussão do mês que vem!"]
    },
    b2_mod_16: {
        1: ["毎日の努力の結果、今は自然に話せますね！", "Mainichi no doryoku no kekka, ima wa shizen ni hanasemasu ne!", "Como resultado do esforço diário, agora você consegue falar com naturalidade!"],
        2: ["素晴らしい話です！聞いている皆さんの励みになりました！", "Subarashii hanashi desu! Kiite iru minasan no hagemi ni narimashita!", "É uma história excelente! Ela incentivou todos que estavam ouvindo!"]
    },
    b2_mod_17: {
        0: ["福岡のラーメン、好いとうと？", "Fukuoka no raamen, suitou to?", "Você gosta do ramen de Fukuoka?"],
        1: ["福岡の方言も知っとうと！すごかたい！", "Fukuoka no hougen mo shittou to! Sugoka tai!", "Você conhece até o dialeto de Fukuoka! Que incrível!"],
        2: ["また福岡に来てね！", "Mata Fukuoka ni kite ne!", "Venha novamente a Fukuoka!"]
    },
    b2_mod_18: {
        0: ["[Seu Nome]さん、天気もいいし、遊園地日和だね！", "[Seu Nome]-san, tenki mo ii shi, yuuenchi biyori da ne!", "O tempo está bom; é um dia perfeito para o parque de diversões!"],
        1: ["楽しい！でも、もうお腹がぺこぺこになったね！", "Tanoshii! Demo, mou onaka ga pekopeko ni natta ne!", "Está divertido! Mas já ficamos morrendo de fome!"],
        2: ["にこにこ笑って食べよう！", "Nikoniko waratte tabeyou!", "Vamos comer sorrindo!"]
    },
    b2_mod_19: { 2: ["どうぞ、わび・さびの趣をお楽しみください。", "Douzo, wabi-sabi no omomuki o o-tanoshimi kudasai.", "Aprecie a estética de wabi-sabi, por favor."] },
    b2_mod_20: {
        0: ["[Seu Nome]さん、おめでとうございます。この四つのレベルの学習は、本当に素晴らしかったです！", "[Seu Nome]-san, omedetou gozaimasu. Kono yottsu no reberu no gakushuu wa, hontou ni subarashikatta desu!", "Parabéns! Seu trabalho ao longo destes quatro níveis foi realmente excelente!"],
        2: ["素晴らしいです！B2コースの修了証をお渡しいたします。おめでとうございます！", "Subarashii desu! B2 koosu no shuuryoushou o owatashi itashimasu. Omedetou gozaimasu!", "Excelente! Entregaremos o certificado de conclusão do curso B2. Parabéns!"]
    }
};

Object.entries(B2_PHASE18_AUDIO_CORRECTIONS).forEach(([moduleId, values]) => {
    const module = CURSO_B2_DADOS.find(item => item.id === moduleId);
    const [displayText, romaji, translation] = values;
    module.stage1_context.audioGuide = romaji;
    Object.assign(module.stage1_context.audio, { displayText, audioText: displayText, romaji, translation });
});
Object.entries(B2_PHASE18_DIALOGUE_CORRECTIONS).forEach(([moduleId, corrections]) => {
    const module = CURSO_B2_DADOS.find(item => item.id === moduleId);
    Object.entries(corrections).forEach(([index, values]) => {
        const dialogue = module.stage4_dialog[Number(index)];
        const [displayText, romaji, translation] = values;
        const audioText = displayText.replace(/\[Seu Nome\](?:さん|君)?[！、]?/gu, "").trim();
        Object.assign(dialogue.content, { displayText, audioText, romaji, translation });
        dialogue.npcMessage = `${romaji} (${translation})`;
    });
});
CURSO_B2_DADOS.forEach(module => {
    module.editorialReview.phase18 = { status: "in-progress", correctedAudio: true };
});

const B2_PHASE18_TEXT_REPLACEMENTS = new Map([
    ["Expressando Expectativas e Decepções: ~ni nihonki e ~koto ni natte iru", "Expressando regras e expectativas: ~koto ni natte iru e ~wari ni"],
    ["Mecha", "Meccha"],
    ["mecha", "meccha"],
    ["karawazu", "kakawarazu"],
    ["hokanaranai", "hoka naranai"],
    ["dialecto", "dialeto"],
    ["Honmani", "Honma ni"],
    ["honmani", "honma ni"],
    ["Mecha / Metcha", "Meccha / Mecha"],
    ["Honma ni meccha ee ya n!", "Honma ni meccha ee yan!"],
    ["情熱 (jounetsu) sae araba, douno goal mo dekiru", "Jounetsu sae areba, donna mokuhyou demo tassei dekiru"],
    ["Oome ni mo kakawarazu", "Ooame ni mo kakawarazu"],
    ["Tai-ten ni mo kakawarazu", "Ooame ni mo kakawarazu"],
    ["Kare wa shoshinsha ni mo kakawarazu, pro mitai ni jouzu desu", "Kare wa shoshinsha ni mo kakawarazu, puro nami ni jouzu desu"],
    ["Kono kekka wa minasan no doryoku no賜 (tamamono) ni hoka naranai", "Kono kekka wa minasan no doryoku no tamamono ni hoka naranai"],
    ["Kare no shippai wa準備 (junbi)不足 (busoku) ni hoka naranai", "Kare no shippai wa junbi busoku ni hoka naranai"],
    ["Koushou-na jcondition ni mo kakawarazu", "Kibishii jouken ni mo kakawarazu"],
    ["Shiren ni mo kakawarazu, data o collect shita kai ga arimashita!", "Konnan ni mo kakawarazu, deeta o shuushuu shita kai ga arimashita!"],
    ["Kono data yori, atarashii strategy ga yukou desu to ieru darou. Soshite, kono seika wa team no doryoku ni hoka naranai to omotte orimasu.", "Kono deeta kara, atarashii senryaku wa yuukou da to ieru darou. Soshite, kono seika wa chiimu no doryoku no tamamono ni hoka naranai to kangaete orimasu."],
    ["Entendendo Mídia & Animes sem Legendas: Kansai-ben e Gírias Modernas", "Kansai-ben e gírias modernas na mídia"],
    ["Conquiste a capacidade de assistir filmes, animes e programas de TV sem legendas! Aprenda as estruturas do famoso dialeto de Kansai (Kansai-ben: ~ya, ~honmani) e gírias modernas da internet (Yabai, Mecha).", "Reconheça em trechos de mídia algumas formas do dialeto de Kansai, como ~ya e honma ni, e gírias modernas como yabai e meccha."],
    ["Uso espetacular de gírias e dialeto entendidos com fluência!", "Você reconheceu as formas coloquiais apresentadas nesta atividade!"],
    ["Fluência corporativa avançada de nível B2!", "Resposta adequada ao contexto corporativo desta atividade!"],
    ["Fluência jornalística madura de nível B2!", "Uso adequado do vocabulário jornalístico apresentado!"],
    ["Gratidão e fluência acadêmica impecável!", "Agradecimento adequado ao contexto acadêmico!"],
    ["Imersão Total & Maestria", "Integração e conclusão"],
    ["Grande Desafio de Maestria B2: Trabalho de Conclusão de Curso", "Avaliação integrativa de conclusão B2"],
    ["Você chegou ao cume da montanha! Este é o grande teste de conclusão integrativo de toda a plataforma Japão Academy. O Quiz final reunirá 30 questões abrangendo os Níveis A1, A2, B1 e B2 para consagrar a sua fluência avançada!", "Esta avaliação interna de conclusão reúne 30 questões sobre conteúdos apresentados nas trilhas A1, A2, B1 e B2."],
    ["Maestria absoluta atingida.", "Trilha A1–B2 concluída."],
    ["O Troféu de Maestria Japão Academy", "Registro de conclusão da trilha"],
    ["Você percorreu uma jornada extraordinária: do 'Konnichiwa' A1 às negociações Keigo e filosofias avançadas B2. Você possui agora fluência e autonomia no idioma!", "Você concluiu os conteúdos e as atividades previstos na trilha japonesa A1–B2 da plataforma."],
    ["[A1 + A2 + B1 + B2] = 日本語 Master (Japonês Fluente)!", "[A1 + A2 + B1 + B2] = trilha japonesa concluída"],
    ["Situação 3: O Reitor entrega o Troféu de Maestria B2 e o Certificado da Japão Academy sob aplausos!", "Situação 3: O responsável pela atividade registra a conclusão da trilha B2."],
    ["🏆 PARABÉNS! VOCÊ ZEROU A JORNADA COMPLETA DA JAPÃO ACADEMY E CONQUISTOU A MAESTRIA B2!", "Parabéns! Você concluiu as atividades da trilha japonesa A1–B2."],
    ["日本語 Master", "trilha japonesa concluída"]
]);
(function applyB2Phase18Text(value) {
    if (Array.isArray(value)) return value.forEach(applyB2Phase18Text);
    if (!value || typeof value !== "object") return;
    Object.entries(value).forEach(([key, item]) => {
        if (typeof item !== "string") return applyB2Phase18Text(item);
        let corrected = item;
        B2_PHASE18_TEXT_REPLACEMENTS.forEach((replacement, original) => { corrected = corrected.split(original).join(replacement); });
        value[key] = corrected;
    });
})(CURSO_B2_DADOS);
{
    const rulesModule = CURSO_B2_DADOS.find(module => module.id === "b2_mod_01");
    rulesModule.title = "Regras estabelecidas e resultados esperados: ~koto ni natte iru e ~wari ni";
    Object.assign(rulesModule.stage1_context.audio, {
        displayText: "この会社では、毎週月曜日に会議を開くことになっている。",
        audioText: "この会社では、毎週月曜日に会議を開くことになっている。",
        romaji: "Kono kaisha de wa, maishuu getsuyoubi ni kaigi o hiraku koto ni natte iru.",
        translation: "Nesta empresa, está estabelecido que haverá uma reunião toda segunda-feira."
    });
    rulesModule.stage1_context.audioGuide = rulesModule.stage1_context.audio.romaji;

    const mediaModule = CURSO_B2_DADOS.find(module => module.id === "b2_mod_11");
    mediaModule.stage1_context.missionDescription = "Reconheça em trechos de mídia algumas formas do dialeto de Kansai, como ~ya e honma ni, e gírias modernas como yabai e meccha.";
    mediaModule.stage4_dialog[1].scenario = "Situação 2: O amigo pergunta quais formas você reconheceu no trecho de anime.";
    mediaModule.stage4_dialog[1].npcMessage = "日本のアニメでも関西弁が分かるんですか。 (Você também reconhece o dialeto de Kansai em animes japoneses?)";
    mediaModule.stage4_dialog[2].options[0].text = "Ookini! Motto benkyou shite, Kansai-ben no renshuu o tsuzukeru de! (Muito obrigado! Vou continuar praticando o dialeto de Kansai!)";

    const connectorsModule = CURSO_B2_DADOS.find(module => module.id === "b2_mod_13");
    connectorsModule.stage5_quiz[3].options[0] = "1) Substantivo + さえ (sae) + Verbo condicional ば (ba) = Basta apenas X. 2) Frase casual / Substantivo + にもかかわらず (ni mo kakawarazu) = Apesar da situação de X.";

    const thesisModule = CURSO_B2_DADOS.find(module => module.id === "b2_mod_14");
    thesisModule.stage5_quiz[3].options[0] = "1) Frase + と言えるだろう (to ieru darou) suaviza a afirmação. 2) Substantivo + にほかならない (ni hoka naranai) apresenta uma conclusão enfática.";

    const dialectModule = CURSO_B2_DADOS.find(module => module.id === "b2_mod_17");
    Object.assign(dialectModule.stage4_dialog[1].content, {
        displayText: "福岡の方言も知っとうと！すごかね！",
        audioText: "福岡の方言も知っとうと！すごかね！",
        romaji: "Fukuoka no hougen mo shittou to! Sugoka ne!",
        translation: "Você conhece até o dialeto de Fukuoka! Que incrível!"
    });
    dialectModule.stage4_dialog[1].npcMessage = "Fukuoka no hougen mo shittou to! Sugoka ne! (Você conhece até o dialeto de Fukuoka! Que incrível!)";
}

applyB2Phase21BEditorialReview();
