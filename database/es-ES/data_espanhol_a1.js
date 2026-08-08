/**
 * Banco de Dados Central do Curso de Espanhol - Nível A1 (Conteúdo Pedagógico Autêntico)
 */
const CURSO_ESPANHOL_A1_DADOS = [
    {
        "id": "es_a1_mod_1",
        "title": "1. Saludos y Despedidas",
        "level": "A1",
        "description": "Aprenda as saudações e despedidas mais usadas no mundo hispânico para os diferentes momentos do dia.",
        "icon": "👋",
        "stage1_context": {
            "missionTitle": "Módulo 1: Saludos y Despedidas",
            "missionDescription": "Domine os cumprimentos e despedidas essenciais do dia a dia, entendendo a etiqueta social e os horários de uso na Espanha e América Latina.",
            "audioGuide": "¡Hola! Buenos días, buenas tardes, buenas noches. ¡Hasta luego!"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "¡Hola!",
                "Portuguese": "Olá!",
                "Audio": "¡Hola!",
                "timeContext": "Saudação universal informal usada a qualquer hora do dia em todos os países hispânicos. Lembre-se de que a letra 'H' é totalmente muda."
            },
            {
                "type": "vocab",
                "Spanish": "Buenos días",
                "Portuguese": "Bom dia",
                "Audio": "Buenos días",
                "timeContext": "Usado do amanhecer até a hora do almoço. Na Espanha e na América Latina, o almoço ocorre mais tarde (entre 14:00 e 15:00)."
            },
            {
                "type": "vocab",
                "Spanish": "Buenas tardes",
                "Portuguese": "Boa tarde",
                "Audio": "Buenas tardes",
                "timeContext": "Usado a partir do almoço (~14h/15h) até o anoitecer (por volta das 20:00 ou 21:00 durante o verão europeu)."
            },
            {
                "type": "vocab",
                "Spanish": "Buenas noches",
                "Portuguese": "Boa noite",
                "Audio": "Buenas noches",
                "timeContext": "Serve tanto para cumprimentar alguém ao chegar a um local à noite quanto para se despedir ao ir dormir."
            },
            {
                "type": "vocab",
                "Spanish": "¡Hasta luego!",
                "Portuguese": "Até logo!",
                "Audio": "¡Hasta luego!",
                "timeContext": "Despedida muito comum quando se prevê rever a pessoa no mesmo dia ou em um futuro próximo."
            },
            {
                "type": "vocab",
                "Spanish": "Chau / Adiós",
                "Portuguese": "Tchau / Adeus",
                "Audio": "Chau / Adiós",
                "timeContext": "'Chau' (também escrito 'Chao') é super popular na América Latina (como Argentina e Colômbia); 'Adiós' soa mais formal ou definitivo na Espanha."
            },
            {
                "type": "grammar_pill",
                "title": "Pontuação Obrigatória: Sinais Invertidos (¡ e ¿)",
                "rule": "Em espanhol, todas as frases exclamativas e interrogativas começam obrigatoriamente com um sinal invertido (¡ e ¿) no início da oração.",
                "formula": "¡ + Frase Exclamativa ! | ¿ + Frase Interrogativa ?",
                "example": "¡Hola! ¿Cómo estás? ➔ (Olá! Como você está?)"
            },
            {
                "type": "grammar_pill",
                "title": "Horários de Transição dos Cumprimentos",
                "rule": "Diferente do português, a transição de 'Buenos días' para 'Buenas tardes' ocorre apenas após o almoço (em torno das 14:00/15:00).",
                "formula": "Amanhecer até o almoço ➔ Buenos días | Pós-almoço ➔ Buenas tardes | Noite ➔ Buenas noches",
                "example": "¡Buenos días! (às 11:30) | ¡Buenas tardes! (às 15:30)"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Bom dia' em espanhol?",
                "options": [
                    "Buenos días",
                    "Buenas tardes",
                    "Buenas noches",
                    "¡Hasta luego!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a tradução exata de '¡Hasta luego!'?",
                "options": [
                    "Até logo!",
                    "Bom dia",
                    "Por favor",
                    "Muito obrigado"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Ao chegar a um restaurante às 15:30 na Espanha, qual saudação você deve usar?",
                "options": [
                    "Buenas tardes",
                    "Buenos días",
                    "Buenas noches",
                    "Adiós"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza para o português: 'Buenas noches'.",
                "options": [
                    "Boa noite",
                    "Boa tarde",
                    "Bom dia",
                    "Olá"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual sinal é usado no INÍCIO de perguntas em espanhol?",
                "options": [
                    "¿ (Interrogação invertida)",
                    "! (Exclamação comum)",
                    "? (Interrogação comum)",
                    "; (Ponto e vírgula)"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¡Hola! Buenos días, ¿cómo estás?",
                "words": [
                    "¡Hola!",
                    "Buenos",
                    "días",
                    ",",
                    "¿cómo",
                    "estás?"
                ],
                "translation": "Olá! Bom dia, como você está?"
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¡Hola! Buenos días, ¿cómo estás?",
                "npcMessage": "¡Hola! Buenos días, ¿cómo estás?",
                "translation": "Olá! Bom dia, como você está?"
            },
            {
                "speaker": "María",
                "npcName": "María",
                "text": "¡Hola, Carlos! Muy bien, ¿y tú?",
                "npcMessage": "¡Hola, Carlos! Muy bien, ¿y tú?",
                "translation": "Olá, Carlos! Muito bem, e você?"
            },
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¡Excelente! Hasta luego, María.",
                "npcMessage": "¡Excelente! Hasta luego, María.",
                "translation": "Excelente! Até logo, María."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) ¿Cuál es el significado de 'Buenos días'?",
                "options": [
                    {
                        "label": "Bom dia",
                        "isCorrect": true,
                        "explanation": "Correto! 'Buenos días' usa-se da manhã até a hora do almoço."
                    },
                    {
                        "label": "Boa tarde",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual regra de pontuação é exclusiva da língua espanhola?",
                "options": [
                    {
                        "label": "Uso de sinais de exclamativo e interrogativo invertidos (¡ e ¿) no início de frases",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Uso de três pontos no final de saudações",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está saindo de uma loja às 18:00 e deseja se despedir gentilmente. O que diz?",
                "options": [
                    {
                        "label": "¡Hasta luego, buenas tardes!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡Buenos días!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza a frase completa: '¡Hola! Buenas noches y hasta luego.'",
                "options": [
                    {
                        "label": "Olá! Boa noite e até logo.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Bom dia! Boa tarde e adeus.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Pegadinha fonética: Como se pronuncia a letra 'H' na palavra '¡Hola!'?",
                "options": [
                    {
                        "label": "É completamente muda (soa como 'Óla')",
                        "isCorrect": true,
                        "explanation": "Correto! H é sempre mudo em espanhol."
                    },
                    {
                        "label": "Tem som de R forte",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_2",
        "title": "2. Presentaciones Personales",
        "level": "A1",
        "description": "Aprenda a se apresentar, dizer seu nome, país de origem e demonstrar cortesia ao conhecer novas pessoas.",
        "icon": "🤝",
        "stage1_context": {
            "missionTitle": "Módulo 2: Presentaciones Personales",
            "missionDescription": "Pratique a arte de se apresentar em espanhol, perguntando o nome dos outros e expressando prazer em conhecê-los.",
            "audioGuide": "¡Hola! Me llamo Ana. ¿Cómo te llamas? Soy de Brasil. Mucho gusto."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Me llamo...",
                "Portuguese": "Meu nome é...",
                "Audio": "Me llamo...",
                "timeContext": "Forma mais comum e natural de dizer seu nome. Literalmente significa 'Eu me chamo...'."
            },
            {
                "type": "vocab",
                "Spanish": "¿Cómo te llamas?",
                "Portuguese": "Como você se chama?",
                "Audio": "¿Cómo te llamas?",
                "timeContext": "Pergunta informal usada entre pessoas da mesma idade, estudantes ou colegas de trabalho."
            },
            {
                "type": "vocab",
                "Spanish": "Soy de...",
                "Portuguese": "Sou de...",
                "Audio": "Soy de...",
                "timeContext": "Usado com o verbo SER para indicar seu país ou cidade de nascimento: 'Soy de Brasil', 'Soy de Lisboa'."
            },
            {
                "type": "vocab",
                "Spanish": "Mucho gusto",
                "Portuguese": "Muito prazer",
                "Audio": "Mucho gusto",
                "timeContext": "Expressão invariável de cortesia usada ao conhecer alguém, válida tanto para homens quanto para mulheres."
            },
            {
                "type": "vocab",
                "Spanish": "Encantado / Encantada",
                "Portuguese": "Encantado / Encantada",
                "Audio": "Encantado / Encantada",
                "timeContext": "Varia conforme o gênero da pessoa que está falando: homem diz 'Encantado', mulher diz 'Encantada'."
            },
            {
                "type": "grammar_pill",
                "title": "O Verbo Reflexivo LLAMARSE",
                "rule": "Para se apresentar em espanhol usa-se o verbo reflexivo 'llamarse': yo me llamo, tú te llamas, él/ella se llama.",
                "formula": "Me llamo + [Seu Nome] | ¿Cómo te llamas?",
                "example": "Me llamo Luis. ¿Y tú, cómo te llamas? ➔ (Meu nome é Luis. E você, como se chama?)"
            },
            {
                "type": "grammar_pill",
                "title": "Concordância de Gênero em Encantado / Encantada",
                "rule": "O adjetivo de cortesia concorda com QUEM FALA. Um homem sempre dirá 'Encantado', enquanto uma mulher dirá 'Encantada'.",
                "formula": "Homem ➔ Encantado | Mulher ➔ Encantada",
                "example": "Homem: 'Mucho gusto, encantado.' | Mulher: 'Mucho gusto, encantada.'"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como uma mulher deve dizer 'Encantada' ao se apresentar?",
                "options": [
                    "Encantada",
                    "Encantado",
                    "Mucho gusto",
                    "Soy de"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a tradução de 'Soy de Brasil'?",
                "options": [
                    "Sou do Brasil",
                    "Moro no Brasil",
                    "Gosto do Brasil",
                    "Vou ao Brasil"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Como perguntar o nome de alguém de forma informal?",
                "options": [
                    "¿Cómo te llamas?",
                    "¿De dónde eres?",
                    "¿Cómo estás?",
                    "¿Qué hora es?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Me llamo Mateo, mucho gusto.'",
                "options": [
                    "Meu nome é Mateo, muito prazer.",
                    "Eu sou Mateo, até logo.",
                    "Como vai Mateo, muito obrigado.",
                    "Sou de Mateo, por favor."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual expressão de cortesia NÃO muda de gênero (serve para homens e mulheres)?",
                "options": [
                    "Mucho gusto",
                    "Encantado",
                    "Encantada",
                    "Bienvenido"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Me llamo Ana y soy de Brasil.",
                "words": [
                    "Me",
                    "llamo",
                    "Ana",
                    "y",
                    "soy",
                    "de",
                    "Brasil."
                ],
                "translation": "Meu nome é Ana e sou do Brasil."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Ana",
                "npcName": "Ana",
                "text": "¡Hola! Me llamo Ana, ¿y tú?",
                "npcMessage": "¡Hola! Me llamo Ana, ¿y tú?",
                "translation": "Olá! Meu nome é Ana, e você?"
            },
            {
                "speaker": "Luis",
                "npcName": "Luis",
                "text": "¡Hola Ana! Me llamo Luis. Soy de México.",
                "npcMessage": "¡Hola Ana! Me llamo Luis. Soy de México.",
                "translation": "Olá Ana! Meu nome é Luis. Sou do México."
            },
            {
                "speaker": "Ana",
                "npcName": "Ana",
                "text": "Mucho gusto, Luis.",
                "npcMessage": "Mucho gusto, Luis.",
                "translation": "Muito prazer, Luis."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Soy de México'?",
                "options": [
                    {
                        "label": "Sou do México",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Vou para o México",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Como se conjugam os pronomes reflexivos com o verbo 'llamarse'?",
                "options": [
                    {
                        "label": "Yo me llamo, tú te llamas, él/ella se llama",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Yo llamo, tú llamas",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você acabou de ser apresentado a uma colega de classe. O que diz?",
                "options": [
                    {
                        "label": "¡Mucho gusto! Encantado / Encantada de conocerte.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡Buenas noches y adiós!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¡Hola! Me llamo Sofia, soy de España.'",
                "options": [
                    {
                        "label": "Olá! Meu nome é Sofia, sou da Espanha.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Oi! Sou a Sofia da Espanha.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'Mucho gusto' e 'Encantado/a'?",
                "options": [
                    {
                        "label": "'Mucho gusto' é invariável; 'Encantado/a' varia com o gênero de quem fala",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Não há diferença",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_3",
        "title": "3. Las Palabras Mágicas",
        "level": "A1",
        "description": "Fórmulas de cortesia essenciais para pedir favores, agradecer e pedir desculpas em qualquer situação social.",
        "icon": "✨",
        "stage1_context": {
            "missionTitle": "Módulo 3: Las Palabras Mágicas",
            "missionDescription": "Aprenda as expressões de educação que abrem portas em restaurantes, lojas e na rua em países de língua espanhola.",
            "audioGuide": "Por favor, muchas gracias, de nada, con gusto, disculpe, perdón."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Por favor",
                "Portuguese": "Por favor",
                "Audio": "Por favor",
                "timeContext": "Adicionado ao início ou fim de pedidos para demonstrar respeito e boa educação."
            },
            {
                "type": "vocab",
                "Spanish": "Muchas gracias",
                "Portuguese": "Muito obrigado(a)",
                "Audio": "Muchas gracias",
                "timeContext": "Invariável em gênero: tanto homens quanto mulheres dizem 'Muchas gracias'."
            },
            {
                "type": "vocab",
                "Spanish": "De nada",
                "Portuguese": "De nada",
                "Audio": "De nada",
                "timeContext": "A resposta padrão universal para agradecer alguém."
            },
            {
                "type": "vocab",
                "Spanish": "Con gusto",
                "Portuguese": "Com prazer",
                "Audio": "Con gusto",
                "timeContext": "Muito popular na Colômbia e América Central como resposta calorosa ao 'gracias'."
            },
            {
                "type": "vocab",
                "Spanish": "Disculpe / Perdón",
                "Portuguese": "Com licença / Desculpe",
                "Audio": "Disculpe / Perdón",
                "timeContext": "'Disculpe' serve para abordar um estranho na rua; 'Perdón' serve para pedir desculpas por um esbarrão."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença entre Disculpe e Perdón",
                "rule": "Use 'Disculpe' (formal) para chamar a atenção de alguém educadamente. Use 'Perdón' para pedir desculpas por um erro cometido.",
                "formula": "Chamar atenção ➔ Disculpe | Pedir desculpas ➔ Perdón",
                "example": "Disculpe, ¿dónde está el metro? vs. ¡Perdón, no te vi!"
            },
            {
                "type": "grammar_pill",
                "title": "Invariabilidade de 'Muchas gracias'",
                "rule": "Em espanhol, a palavra 'gracias' é um substantivo plural feminino. Portanto, diz-se sempre 'Muchas gracias' (nunca 'mucho gracias').",
                "formula": "Muchas (feminino plural) + gracias",
                "example": "¡Muchas gracias por la ayuda!"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Muito obrigado' em espanhol?",
                "options": [
                    "Muchas gracias",
                    "Mucho gracias",
                    "De nada",
                    "Por favor"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como abordar um garçom educadamente para chamar sua atenção?",
                "options": [
                    "Disculpe",
                    "Perdón",
                    "De nada",
                    "Adiós"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual é a resposta mais calorosa e comum na Colômbia para 'Gracias'?",
                "options": [
                    "Con gusto",
                    "Por favor",
                    "Disculpe",
                    "Hasta luego"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Un café, por favor.'",
                "options": [
                    "Um café, por favor.",
                    "Um café, muito obrigado.",
                    "Um café com leite.",
                    "Um café, de nada."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Por que NUNCA devemos dizer 'Mucho gracias'?",
                "options": [
                    "Porque 'gracias' é feminino plural e exige 'muchas'",
                    "Porque 'mucho' só se usa no final da frase",
                    "Porque significa 'de nada'",
                    "Porque não existe essa palavra"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Un agua, por favor. — Muchas gracias.",
                "words": [
                    "Un",
                    "agua",
                    ",",
                    "por",
                    "favor",
                    ".",
                    "—",
                    "Muchas",
                    "gracias."
                ],
                "translation": "Uma água, por favor. — Muito obrigado."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "Un café por favor.",
                "npcMessage": "Un café por favor.",
                "translation": "Um café por favor."
            },
            {
                "speaker": "Camarero",
                "npcName": "Camarero",
                "text": "Aquí tiene. ¡Disfrute!",
                "npcMessage": "Aquí tiene. ¡Disfrute!",
                "translation": "Aqui está. Aproveite!"
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "Muchas gracias. — De nada.",
                "npcMessage": "Muchas gracias. — De nada.",
                "translation": "Muito obrigado. — De nada."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) Qual é o significado de 'De nada'?",
                "options": [
                    {
                        "label": "De nada (resposta ao obrigado)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Por favor",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é a forma correta de intensificar o agradecimento?",
                "options": [
                    {
                        "label": "Muchas gracias",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Mucho gracias",
                        "isCorrect": false,
                        "explanation": "Incorreto!"
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você esbarrou sem querer em alguém no metrô. O que diz imediatamente?",
                "options": [
                    {
                        "label": "¡Perdón! / ¡Disculpe!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡De nada!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Disculpe, ¿dónde está la estación?'",
                "options": [
                    {
                        "label": "Com licença, onde fica a estação?",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Por favor, obrigado.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a expressão 'Con gusto' quando dita por um atendente?",
                "options": [
                    {
                        "label": "É uma forma simpática de dizer 'Com prazer / De nada'",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Significa que a comida está gostosa",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_4",
        "title": "4. ¿Sí o No? y Afirmaciones",
        "level": "A1",
        "description": "Aprenda a concordar, discordar, expressar certeza com 'Por supuesto' e incerteza com 'Tal vez'.",
        "icon": "❓",
        "stage1_context": {
            "missionTitle": "Módulo 4: ¿Sí o No? y Afirmaciones",
            "missionDescription": "Saiba como aceitar ofertas, fazer negações educadas e responder a perguntas simples do cotidiano.",
            "audioGuide": "Sí, claro. No, gracias. Tal vez, quizás. Por supuesto. No lo sé."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Sí, claro",
                "Portuguese": "Sim, claro",
                "Audio": "Sí, claro",
                "timeContext": "'Sí' afirmativo leva acento obrigatoriamente para se diferenciar do 'si' condicional."
            },
            {
                "type": "vocab",
                "Spanish": "No, gracias",
                "Portuguese": "Não, obrigado(a)",
                "Audio": "No, gracias",
                "timeContext": "Forma mais cortês de recusar algo que lhe oferecem."
            },
            {
                "type": "vocab",
                "Spanish": "Tal vez / Quizás",
                "Portuguese": "Talvez",
                "Audio": "Tal vez / Quizás",
                "timeContext": "Ambos significam 'talvez'. 'Quizás' é muito comum na Espanha."
            },
            {
                "type": "vocab",
                "Spanish": "Por supuesto",
                "Portuguese": "Com certeza",
                "Audio": "Por supuesto",
                "timeContext": "Expressão de forte afirmação, equivalente a 'claro que sim' ou 'sem dúvida'."
            },
            {
                "type": "vocab",
                "Spanish": "No lo sé",
                "Portuguese": "Não sei",
                "Audio": "No lo sé",
                "timeContext": "O pronome 'lo' é neutro e refere-se ao assunto perguntado."
            },
            {
                "type": "grammar_pill",
                "title": "Acentuação Diacrítica: Sí vs. Si",
                "rule": "'Sí' com acento é a afirmação (Sim). 'Si' sem acento introduz uma condição (Se).",
                "formula": "Afirmação ➔ Sí | Condição ➔ Si",
                "example": "Sí, quiero ir. / Si tienes tiempo, vamos."
            },
            {
                "type": "grammar_pill",
                "title": "Expressando Afirmações Enfáticas",
                "rule": "Para enfatizar que concorda totalmente com algo, use 'Por supuesto' ou 'Claro que sí'.",
                "formula": "Por supuesto = Claro que sí",
                "example": "¿Vienes a la reunión? — ¡Por supuesto!"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dizer 'Com certeza!' em espanhol?",
                "options": [
                    "Por supuesto",
                    "No lo sé",
                    "Tal vez",
                    "No, gracias"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a diferença entre 'Sí' e 'Si'?",
                "options": [
                    "'Sí' com acento é afirmação (Sim); 'Si' sem acento é condição (Se)",
                    "'Sí' é formal e 'Si' é informal",
                    "Não há diferença",
                    "'Sí' é plural"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Como recusar uma sobremesa educadamente?",
                "options": [
                    "No, gracias",
                    "Sí, claro",
                    "Por supuesto",
                    "No lo sé"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'No lo sé, tal vez mañana.'",
                "options": [
                    "Não sei, talvez amanhã.",
                    "Sim claro, até amanhã.",
                    "Com certeza, muito obrigado.",
                    "Não obrigado, até logo."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual palavra significa 'Talvez'?",
                "options": [
                    "Quizás",
                    "Por supuesto",
                    "Gracias",
                    "Buenas"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¿Quieres un café? — Sí, por supuesto.",
                "words": [
                    "¿Quieres",
                    "un",
                    "café?",
                    "—",
                    "Sí,",
                    "por",
                    "supuesto."
                ],
                "translation": "Você quer um café? — Sim, com certeza."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Gabriel",
                "npcName": "Gabriel",
                "text": "¿Quieres un agua?",
                "npcMessage": "¿Quieres un agua?",
                "translation": "Você quer uma água?"
            },
            {
                "speaker": "Elena",
                "npcName": "Elena",
                "text": "Sí, por supuesto. Muchas gracias.",
                "npcMessage": "Sí, por supuesto. Muchas gracias.",
                "translation": "Sim, com certeza. Muito obrigada."
            },
            {
                "speaker": "Gabriel",
                "npcName": "Gabriel",
                "text": "¿Quieres también un café? — No, gracias.",
                "npcMessage": "¿Quieres también un café? — No, gracias.",
                "translation": "Quer também um café? — Não, obrigada."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Por supuesto'?",
                "options": [
                    {
                        "label": "Com certeza / Claro que sim",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Talvez",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que o 'Sí' de afirmação deve levar tilde (acento)?",
                "options": [
                    {
                        "label": "Para se diferenciar do 'si' condicional que não leva acento",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Porque todas as palavras levam acento",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Alguém pergunta se você sabe onde fica o museu, mas você não tem certeza. O que responde?",
                "options": [
                    {
                        "label": "No lo sé exactamente, tal vez por allí.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡Por supuesto!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¿Puedes ayudarme? — Sí, claro.'",
                "options": [
                    {
                        "label": "Pode me ajudar? — Sim, claro.",
                        "isCorrect": true,
                        "explanation": "Tradução exata!"
                    },
                    {
                        "label": "Quer ajuda? — Não.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que o pronome 'lo' faz na frase 'No lo sé'?",
                "options": [
                    {
                        "label": "Refere-se de forma neutra à informação ou pergunta que foi feita",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Significa 'ele'",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_5",
        "title": "5. Personas y Pronombres Sujeto",
        "level": "A1",
        "description": "Conheça os pronomes pessoais retos (Yo, Tú, Él, Ella, Usted, Nosotros, Ellos, Ustedes) e as formas de tratamento.",
        "icon": "👥",
        "stage1_context": {
            "missionTitle": "Módulo 5: Personas y Pronombres Sujeto",
            "missionDescription": "Compreenda como se referir às pessoas em espanhol e quando usar o tratamento formal (Usted) ou informal (Tú).",
            "audioGuide": "Yo, tú, usted, él, ella, nosotros, nosotras, ellos, ellas, ustedes."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Yo",
                "Portuguese": "Eu",
                "Audio": "Yo",
                "timeContext": "Pronúncia: soa como 'iô' ou 'jô'. Em espanhol costuma ser omitido nas frases."
            },
            {
                "type": "vocab",
                "Spanish": "Tú / Usted",
                "Portuguese": "Você / O senhor, A senhora",
                "Audio": "Tú / Usted",
                "timeContext": "'Tú' é informal (amigos/família). 'Usted' (abreviado Ud.) é formal e concorda com a 3ª pessoa."
            },
            {
                "type": "vocab",
                "Spanish": "Él / Ella",
                "Portuguese": "Ele / Ela",
                "Audio": "Él / Ella",
                "timeContext": "'Él' com acento é o pronome Ele. 'Ella' pronuncia-se 'eia' ou 'edja'."
            },
            {
                "type": "vocab",
                "Spanish": "Nosotros / Nosotras",
                "Portuguese": "Nós",
                "Audio": "Nosotros / Nosotras",
                "timeContext": "Possui gênero: 'Nosotros' (masculino/misto) e 'Nosotras' (100% feminino)."
            },
            {
                "type": "vocab",
                "Spanish": "Ellos / Ellas / Ustedes",
                "Portuguese": "Eles / Elas / Vocês",
                "Audio": "Ellos / Ellas / Ustedes",
                "timeContext": "Na América Latina, 'Ustedes' é usado para 'vocês' em todas as situações (informal e formal)."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença entre Tú e Usted",
                "rule": "Use 'Tú' para tratar com informalidade pessoas próximas. Use 'Usted' (Ud.) para demonstrar respeito a idosos, autoridades ou desconhecidos.",
                "formula": "Informal ➔ Tú (verbo na 2ª pessoa) | Formal ➔ Usted (verbo na 3ª pessoa)",
                "example": "¿Cómo estás tú? (informal) vs. ¿Cómo está usted? (formal)"
            },
            {
                "type": "grammar_pill",
                "title": "Diferença entre 'Él' (pronome) e 'El' (artigo)",
                "rule": "'Él' com acento significa 'Ele'. 'El' sem acento é o artigo definido masculino 'O'.",
                "formula": "Él = Ele | El = O",
                "example": "Él es profesor en el colegio. ➔ (Ele é professor na escola.)"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Eu' em espanhol?",
                "options": [
                    "Yo",
                    "Tú",
                    "Él",
                    "Nosotros"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual pronome deve ser usado para falar formalmente com um idoso?",
                "options": [
                    "Usted",
                    "Tú",
                    "Yo",
                    "Ellos"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual é a forma feminina para 'Nós' quando o grupo é formado apenas por mulheres?",
                "options": [
                    "Nosotras",
                    "Nosotros",
                    "Ellas",
                    "Ustedes"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Él es médico y ella es estudiante.'",
                "options": [
                    "Ele é médico e ela é estudante.",
                    "Eu sou médico e você é estudante.",
                    "Você é médico e ele é estudante.",
                    "Eles são médicos."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. O que significa 'Ustedes' na América Latina?",
                "options": [
                    "Vocês (tanto formal quanto informal)",
                    "Apenas nós",
                    "Eles e elas",
                    "Eu e você"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Nosotros somos estudiantes y usted es el profesor.",
                "words": [
                    "Nosotros",
                    "somos",
                    "estudiantes",
                    "y",
                    "usted",
                    "es",
                    "el",
                    "profesor."
                ],
                "translation": "Nós somos estudantes e o senhor é o professor."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Profesor",
                "npcName": "Profesor",
                "text": "Hola. Yo soy el profesor García. ¿Usted es el nuevo alumno?",
                "npcMessage": "Hola. Yo soy el profesor García. ¿Usted es el nuevo alumno?",
                "translation": "Olá. Eu sou o professor García. O senhor é o novo aluno?"
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "Sí, yo soy Mateo. Nosotros somos los nuevos estudiantes.",
                "npcMessage": "Sí, yo soy Mateo. Nosotros somos los nuevos estudiantes.",
                "translation": "Sim, eu sou Mateo. Nós somos os novos estudantes."
            },
            {
                "speaker": "Profesor",
                "npcName": "Profesor",
                "text": "¡Bienvenidos a todos ustedes!",
                "npcMessage": "¡Bienvenidos a todos ustedes!",
                "translation": "Bem-vindos a todos vocês!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) Qual pronome significa 'Ela' em espanhol?",
                "options": [
                    {
                        "label": "Ella",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Él",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) O que diferencia 'Él' de 'El'?",
                "options": [
                    {
                        "label": "'Él' com tilde é o pronome 'Ele'; 'El' sem tilde é o artigo 'O'",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Não há diferença",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você vai conversar com o diretor de uma empresa espanhola. Qual pronome deve usar para se dirigir a ele?",
                "options": [
                    {
                        "label": "Usted",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Tú",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Ellos son de Brasil y nosotras somos de España.'",
                "options": [
                    {
                        "label": "Eles são do Brasil e nós (mulheres) somos da Espanha.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Vocês são do Brasil e eles da Espanha.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Como o pronome 'Vosotros/as' é usado no mundo hispânico?",
                "options": [
                    {
                        "label": "É usado na Espanha para 'vocês' (informal plural), enquanto a América Latina usa 'Ustedes'",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "É usado para falar de reis",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_6",
        "title": "6. Países y Nacionalidades",
        "level": "A1",
        "description": "Aprenda a dizer seu país de origem, perguntar a procedência dos outros e usar os sufixos de nacionalidade.",
        "icon": "🌍",
        "stage1_context": {
            "missionTitle": "Módulo 6: Países y Nacionalidades",
            "missionDescription": "Descubra como expressar origens geográficas e formar adjetivos pátrios em espanhol com concordância correta de gênero.",
            "audioGuide": "España, español, española. México, mexicano. Argentina, argentino. Brasil, brasileño. ¿De dónde eres?"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "España / Español / Española",
                "Portuguese": "Espanha / Espanhol / Espanhola",
                "Audio": "España / Español / Española",
                "timeContext": "Nacionalidade da Espanha. Note que a forma masculina termina em consoante '-ol' e a feminina ganha '-a'."
            },
            {
                "type": "vocab",
                "Spanish": "México / Mexicano / Mexicana",
                "Portuguese": "México / Mexicano / Mexicana",
                "Audio": "México / Mexicano / Mexicana",
                "timeContext": "País hispanohablante mais populoso do mundo. O 'X' em México pronuncia-se como 'J' forte espanhol (/Méjico/)."
            },
            {
                "type": "vocab",
                "Spanish": "Argentina / Argentino / Argentina",
                "Portuguese": "Argentina / Argentino / Argentina",
                "Audio": "Argentina / Argentino / Argentina",
                "timeContext": "O 'G' em Argentina diante de 'I' tem som aspirado (/Arjentina/)."
            },
            {
                "type": "vocab",
                "Spanish": "Brasil / Brasileño / Brasileña",
                "Portuguese": "Brasil / Brasileiro / Brasileira",
                "Audio": "Brasil / Brasileño / Brasileña",
                "timeContext": "A grafia de Brasil em espanhol é com S. O sufixo da nacionalidade é '-eño/a' com Ñ."
            },
            {
                "type": "vocab",
                "Spanish": "¿De dónde eres?",
                "Portuguese": "De onde você é?",
                "Audio": "¿De dónde eres?",
                "timeContext": "Pergunta informal clássica para saber o país ou cidade de origem de alguém."
            },
            {
                "type": "grammar_pill",
                "title": "Uso da Preposição 'DE' para Origem",
                "rule": "Para expressar de qual país ou cidade você vem, usa-se o verbo SER acompanhado da preposição DE.",
                "formula": "Verbo SER (soy, eres, es) + DE + [País / Cidade]",
                "example": "Soy de Brasil. / Valeria es de Argentina."
            },
            {
                "type": "grammar_pill",
                "title": "Formação de Gênero nas Nacionalidades",
                "rule": "Nacionalidades terminadas em -o mudam para -a (mexicano/a). As terminadas em consoante ganham -a no feminino (español/española).",
                "formula": "-o ➔ -a | Consoante ➔ +a",
                "example": "Él es mexicano, ella es mexicana. / Él es español, ella es española."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como perguntar de onde alguém é de forma informal?",
                "options": [
                    "¿De dónde eres?",
                    "¿Cómo te llamas?",
                    "¿Dónde vives?",
                    "¿Qué tal?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como se escreve a nacionalidade feminina de alguém da Espanha?",
                "options": [
                    "Española",
                    "Español",
                    "Espanhola",
                    "Spanish"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual é a grafia correta do país Brasil e da nacionalidade brasileira em espanhol?",
                "options": [
                    "Brasil / Brasileño",
                    "Brazil / Brasileiro",
                    "Brasil / Brazileño",
                    "Brasilera"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Valeria es de Argentina, es argentina.'",
                "options": [
                    "Valeria é da Argentina, é argentina.",
                    "Valeria vai para a Argentina.",
                    "Valeria mora na Argentina.",
                    "Valeria gosta da Argentina."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual sufixo é usado no feminino de 'español'?",
                "options": [
                    "Adiciona-se '-a' (española)",
                    "Permanece igual",
                    "Muda para '-ita'",
                    "Adiciona-se '-es'"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Soy de Brasil y hablo español.",
                "words": [
                    "Soy",
                    "de",
                    "Brasil",
                    "y",
                    "hablo",
                    "español."
                ],
                "translation": "Sou do Brasil e falo espanhol."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Lucas",
                "npcName": "Lucas",
                "text": "¿De dónde eres, Valeria?",
                "npcMessage": "¿De dónde eres, Valeria?",
                "translation": "De onde você é, Valeria?"
            },
            {
                "speaker": "Valeria",
                "npcName": "Valeria",
                "text": "Soy de Argentina, de Buenos Aires. ¿Y tú?",
                "npcMessage": "Soy de Argentina, de Buenos Aires. ¿Y tú?",
                "translation": "Sou da Argentina, de Buenos Aires. E você?"
            },
            {
                "speaker": "Lucas",
                "npcName": "Lucas",
                "text": "Yo soy de España, soy español.",
                "npcMessage": "Yo soy de España, soy español.",
                "translation": "Eu sou da Espanha, sou espanhol."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) Como se diz a nacionalidade de uma mulher nascida no México?",
                "options": [
                    {
                        "label": "Mexicana",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Mexicano",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual estrutura expressa origem geográfica corretamente?",
                "options": [
                    {
                        "label": "Verbo SER + DE + País (ex: Soy de Brasil)",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Verbo ESTAR + EN + País",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Em um evento internacional você deseja saber o país de um colega. O que pergunta?",
                "options": [
                    {
                        "label": "¿De dónde eres?",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¿De dónde estás?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Mis amigos son de Colombia y son colombianos.'",
                "options": [
                    {
                        "label": "Meus amigos são da Colômbia e são colombianos.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Meus amigos vão à Colômbia.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Pegadinha fonética: Como se pronuncia o nome do país 'México' em espanhol?",
                "options": [
                    {
                        "label": "O 'X' soa como um 'J' forte espanhol (/Méjico/)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "O 'X' soa como 'KS'",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_7",
        "title": "7. Profesiones y Trabajos I",
        "level": "A1",
        "description": "Fale sobre profissões cotidianas, ocupações e entenda as regras de gênero para cargos de trabalho.",
        "icon": "💼",
        "stage1_context": {
            "missionTitle": "Módulo 7: Profesiones y Trabajos I",
            "missionDescription": "Aprenda a perguntar a profissão dos outros e a descrever seu trabalho usando a estrutura 'Soy + profissão'.",
            "audioGuide": "Profesor, médica, estudiante, ingeniero, abogado, enfermero. ¿A qué te dedicas?"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Profesor / Profesora",
                "Portuguese": "Professor / Professora",
                "Audio": "Profesor / Profesora",
                "timeContext": "Profissão muito comum. No feminino ganha '-a': la profesora."
            },
            {
                "type": "vocab",
                "Spanish": "Médico / Médica",
                "Portuguese": "Médico / Médica",
                "Audio": "Médico / Médica",
                "timeContext": "Profissional da saúde em hospitais e clínicas."
            },
            {
                "type": "vocab",
                "Spanish": "Estudiante",
                "Portuguese": "Estudante",
                "Audio": "Estudiante",
                "timeContext": "Invariável em gênero: 'el estudiante' para homens e 'la estudiante' para mulheres."
            },
            {
                "type": "vocab",
                "Spanish": "Ingeniero / Ingeniera",
                "Portuguese": "Engenheiro / Engenheira",
                "Audio": "Ingeniero / Ingeniera",
                "timeContext": "Profissional da área de engenharia e tecnologia."
            },
            {
                "type": "vocab",
                "Spanish": "¿A qué te dedicas?",
                "Portuguese": "O que você faz? / A que se dedica?",
                "Audio": "¿A qué te dedicas?",
                "timeContext": "Pergunta natural para saber a ocupação profissional de alguém de forma educada."
            },
            {
                "type": "grammar_pill",
                "title": "Omissão de Artigos em Profissões",
                "rule": "Em espanhol, NÃO se usa o artigo indefinido (un/una) antes de profissões quando acompanhadas pelo verbo SER, a menos que haja adjetivo.",
                "formula": "Soy + Profissão (sem artigo)",
                "example": "Soy médico. (NÃO 'Soy un médico') vs. Soy un médico famoso."
            },
            {
                "type": "grammar_pill",
                "title": "Profissões Invariáveis em -ISTA e -ANTE",
                "rule": "Profissões terminadas em -ista (taxista, dentista) e -ante (estudiante, cantante) não mudam a terminação no feminino; altera-se apenas o artigo.",
                "formula": "El dentista / La dentista | El estudiante / La estudiante",
                "example": "Juan es dentista. María es dentista también."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dizer 'Sou médico' corretamente em espanhol?",
                "options": [
                    "Soy médico",
                    "Soy un médico",
                    "Estoy médico",
                    "Tengo médico"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual pergunta é usada para saber a ocupação profissional de alguém?",
                "options": [
                    "¿A qué te dedicas?",
                    "¿De dónde eres?",
                    "¿Dónde estás?",
                    "¿Cómo te llamas?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Como se diz 'A estudante' (feminino) em espanhol?",
                "options": [
                    "La estudiante",
                    "La estudianta",
                    "Una estudiante",
                    "Ella estudiante"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Carmen es profesora y Diego es ingeniero.'",
                "options": [
                    "Carmen é professora e Diego é engenheiro.",
                    "Carmen é médica e Diego é professor.",
                    "Carmen é estudante e Diego é dentista.",
                    "Carmen trabalha com Diego."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Por que dizemos 'Soy dentista' sem adicionar a palavra 'un'?",
                "options": [
                    "Porque em espanhol o artigo indefinido é omitido antes de profissões",
                    "Porque 'dentista' é uma palavra curta",
                    "Porque o verbo é ter",
                    "Porque é uma pergunta"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Soy médica en un hospital de Madrid.",
                "words": [
                    "Soy",
                    "médica",
                    "en",
                    "un",
                    "hospital",
                    "de",
                    "Madrid."
                ],
                "translation": "Sou médica em um hospital de Madri."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Diego",
                "npcName": "Diego",
                "text": "¿A qué te dedicas, Carmen?",
                "npcMessage": "¿A qué te dedicas, Carmen?",
                "translation": "O que você faz, Carmen?"
            },
            {
                "speaker": "Carmen",
                "npcName": "Carmen",
                "text": "Soy médica en un hospital. ¿Y tú?",
                "npcMessage": "Soy médica en un hospital. ¿Y tú?",
                "translation": "Sou médica em um hospital. E você?"
            },
            {
                "speaker": "Diego",
                "npcName": "Diego",
                "text": "Yo soy profesor de idiomas.",
                "npcMessage": "Yo soy profesor de idiomas.",
                "translation": "Eu sou professor de idiomas."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa '¿A qué te dedicas?'?",
                "options": [
                    {
                        "label": "O que você faz profissionalmente?",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Onde você mora?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual frase contém um erro comum cometido por brasileiros ao falar sua profissão em espanhol?",
                "options": [
                    {
                        "label": "'Soy un ingeniero' (o correto é 'Soy ingeniero' sem o 'un')",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "'Soy ingeniero'",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Em uma festa de networking, como você se apresenta profissionalmente?",
                "options": [
                    {
                        "label": "¡Hola! Soy abogado en una empresa.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡Hola! Estoy abogado hoy.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Mi hermano es taxista y mi hermana es cantante.'",
                "options": [
                    {
                        "label": "Meu irmão é taxista e minha irmã é cantora.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Meu pai é médico.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Como fica a profissão 'el periodista' (o jornalista) no feminino?",
                "options": [
                    {
                        "label": "La periodista (a terminação -ista não muda)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "La periodisto",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_8",
        "title": "8. Ser vs. Estar I",
        "level": "A1",
        "description": "Compreenda a diferença fundamental entre caraterísticas permanentes (SER) e estados temporários (ESTAR).",
        "icon": "⚖️",
        "stage1_context": {
            "missionTitle": "Módulo 8: Ser vs. Estar I",
            "missionDescription": "Domine a distinção crucial da língua espanhola: usar SER para identidade/origem e ESTAR para emoções, saúde e localização.",
            "audioGuide": "Yo soy alto. Yo estoy cansado. ¿Dónde estás? Es importante."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Yo soy alto",
                "Portuguese": "Eu sou alto (característica física permanente)",
                "Audio": "Yo soy alto",
                "timeContext": "O verbo SER descreve características inerentes ou permanentes de uma pessoa."
            },
            {
                "type": "vocab",
                "Spanish": "Yo estoy cansado",
                "Portuguese": "Eu estou cansado (estado temporário)",
                "Audio": "Yo estoy cansado",
                "timeContext": "O verbo ESTAR descreve estados físicos, emocionais ou temporários que podem mudar."
            },
            {
                "type": "vocab",
                "Spanish": "¿Dónde estás?",
                "Portuguese": "Onde você está?",
                "Audio": "¿Dónde estás?",
                "timeContext": "A localização de pessoas ou objetos sempre exige o verbo ESTAR."
            },
            {
                "type": "vocab",
                "Spanish": "Es importante",
                "Portuguese": "É importante",
                "Audio": "Es importante",
                "timeContext": "Generalizações e avaliações impessoais usam o verbo SER ('Es necesario', 'Es bueno')."
            },
            {
                "type": "vocab",
                "Spanish": "Estamos felices",
                "Portuguese": "Estamos felizes",
                "Audio": "Estamos felices",
                "timeContext": "Emoções atuais usam o verbo ESTAR."
            },
            {
                "type": "grammar_pill",
                "title": "Usos Fundamentais do Verbo SER",
                "rule": "Usa-se o verbo SER para: Identidade, Nacionalidade/Origem, Profissão, Características físicas permanentes e Horas/Datas.",
                "formula": "SER ➔ Identidade | Origem | Profissão | Característica Permanente",
                "example": "Soy estudiante. Soy de Brasil. Soy alto. Son las dos."
            },
            {
                "type": "grammar_pill",
                "title": "Usos Fundamentais do Verbo ESTAR",
                "rule": "Usa-se o verbo ESTAR para: Localização física, Estados de saúde temporários, Emoções do momento e Ações em andamento.",
                "formula": "ESTAR ➔ Localização | Estado Físico / Emocional Temporário",
                "example": "Estoy en casa. Estoy enfermo. Estoy contento."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual verbo usar para dizer 'Eu sou brasileiro'?",
                "options": [
                    "Soy (Verbo SER)",
                    "Estoy (Verbo ESTAR)",
                    "Tengo (Verbo TENER)",
                    "Hago (Verbo HACER)"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual verbo usar para dizer 'Onde você está?'",
                "options": [
                    "Estás (Verbo ESTAR)",
                    "Eres (Verbo SER)",
                    "Tienes (Verbo TENER)",
                    "Vives (Verbo VIVIR)"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Complete: 'Hoy yo ______ muy cansado por el trabajo.'",
                "options": [
                    "estoy",
                    "soy",
                    "tengo",
                    "hago"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'María es simpática pero hoy está triste.'",
                "options": [
                    "María é simpática mas hoje está triste.",
                    "María está simpática e é triste.",
                    "María tem simpatia e tristeza.",
                    "María foi simpática e triste."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Por que dizemos 'El museo ESTÁ en el centro' com o verbo Estar?",
                "options": [
                    "Porque localização espacial exige sempre o verbo ESTAR",
                    "Porque o museu pode mudar de lugar",
                    "Porque é uma característica física",
                    "Porque é uma profissão"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Yo soy brasileño y estoy en Madrid.",
                "words": [
                    "Yo",
                    "soy",
                    "brasileño",
                    "y",
                    "estoy",
                    "en",
                    "Madrid."
                ],
                "translation": "Eu sou brasileiro e estou em Madri."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "¿Cómo estás hoy, Mateo?",
                "npcMessage": "¿Cómo estás hoy, Mateo?",
                "translation": "Como você está hoje, Mateo?"
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "Estoy un poco cansado, pero estoy feliz. ¿Y tú?",
                "npcMessage": "Estoy un poco cansado, pero estoy feliz. ¿Y tú?",
                "translation": "Estou um pouco cansado, mas estou feliz. E você?"
            },
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "¡Qué bueno! Tú eres muy trabajador.",
                "npcMessage": "¡Qué bueno! Tú eres muy trabajador.",
                "translation": "Que bom! Você é muito trabalhador."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que diferencia 'Soy feliz' de 'Estoy feliz'?",
                "options": [
                    {
                        "label": "'Soy feliz' indica essência de felicidade; 'Estoy feliz' indica um momento atual de felicidade",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Não há diferença alguma",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual frase usa os verbos SER e ESTAR de forma 100% correta?",
                "options": [
                    {
                        "label": "Carlos es médico y ahora está en el hospital.",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Carlos está médico y es en el hospital.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer perguntar a um amigo onde fica a farmácia mais próxima. O que diz?",
                "options": [
                    {
                        "label": "Disculpe, ¿dónde está la farmacia?",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Disculpe, ¿dónde es la farmacia?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'El café está caliente pero es delicioso.'",
                "options": [
                    {
                        "label": "O café está quente (estado atual) mas é delicioso (característica).",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O café é quente.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que acontece com o adjetivo 'listo' ao mudar de SER para ESTAR (Es listo vs. Está listo)?",
                "options": [
                    {
                        "label": "'Es listo' significa ser inteligente/esperto; 'Está listo' significa estar pronto/preparado",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Significa exatamente a mesma coisa",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_9",
        "title": "9. La Arte de Preguntar",
        "level": "A1",
        "description": "Formule perguntas essenciais usando ¿Qué?, ¿Dónde?, ¿Cuándo?, ¿Por qué?, ¿Quién? e ¿Cuánto?.",
        "icon": "🔍",
        "stage1_context": {
            "missionTitle": "Módulo 9: La Arte de Preguntar",
            "missionDescription": "Aprenda os pronomes e advérbios interrogativos mais importantes para se comunicar na rua, em lojas e em viagens.",
            "audioGuide": "¿Qué es esto? ¿Dónde está el museo? ¿Cuándo es el examen? ¿Por qué estudias?"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "¿Qué?",
                "Portuguese": "O que? / Qual?",
                "Audio": "¿Qué?",
                "timeContext": "Pergunta sobre coisas, definições ou ações: '¿Qué es esto?' (O que é isto?)."
            },
            {
                "type": "vocab",
                "Spanish": "¿Dónde?",
                "Portuguese": "Onde?",
                "Audio": "¿Dónde?",
                "timeContext": "Pergunta sobre localização espacial de lugares ou pessoas: '¿Dónde vives?' (Onde você mora?)."
            },
            {
                "type": "vocab",
                "Spanish": "¿Cuándo?",
                "Portuguese": "Quando?",
                "Audio": "¿Cuándo?",
                "timeContext": "Pergunta sobre datas, momentos ou tempo: '¿Cuándo es tu cumpleaños?' (Quando é o seu aniversário?)."
            },
            {
                "type": "vocab",
                "Spanish": "¿Por qué?",
                "Portuguese": "Por quê?",
                "Audio": "¿Por qué?",
                "timeContext": "Escrito separado e com acento em perguntas. A resposta usa 'Porque' junto e sem acento."
            },
            {
                "type": "vocab",
                "Spanish": "¿Quién? / ¿Cuánto?",
                "Portuguese": "Quem? / Quanto?",
                "Audio": "¿Quién? / ¿Cuánto?",
                "timeContext": "'¿Quién?' pergunta por pessoas; '¿Cuánto?' pergunta por quantidades ou preços."
            },
            {
                "type": "grammar_pill",
                "title": "Acentuação Obrigatória em Palavras Interrogativas",
                "rule": "Todas as palavras usadas para fazer perguntas (qué, dónde, cuándo, por qué, quién, cuánto, cómo) levam acento ortográfico obrigatório.",
                "formula": "¿ + [Interrogativo Acentuado] + Verbo + ?",
                "example": "¿Qué quieres? / ¿Dónde está? / ¿Cuándo llega? / ¿Por qué ríes?"
            },
            {
                "type": "grammar_pill",
                "title": "Diferença entre Por qué (pergunta) e Porque (resposta)",
                "rule": "Para perguntar a causa usa-se 'Por qué' (separado e com acento no qué). Para responder usa-se 'Porque' (junto e sem acento).",
                "formula": "Pergunta ➔ ¿Por qué...? | Resposta ➔ Porque...",
                "example": "¿Por qué estudias español? — Porque quiero viajar a España."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual palavra interrogativa significa 'Onde?' em espanhol?",
                "options": [
                    "¿Dónde?",
                    "¿Qué?",
                    "¿Cuándo?",
                    "¿Quién?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como se escreve 'Por quê?' em uma pergunta direta?",
                "options": [
                    "¿Por qué?",
                    "Porque",
                    "Por que",
                    "Porqué"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual palavra usar para perguntar a hora de um evento ('Quando é?')?",
                "options": [
                    "¿Cuándo?",
                    "¿Quién?",
                    "¿Dónde?",
                    "¿Qué?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: '¿Dónde está el baño, por favor?'",
                "options": [
                    "Onde fica o banheiro, por favor?",
                    "O que é o banheiro, por favor?",
                    "Quando abre o banheiro, por favor?",
                    "Quem está no banheiro?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Por que as palavras 'qué', 'dónde' e 'cuándo' levam acento em perguntas?",
                "options": [
                    "Porque todas as palavras interrogativas levam acento diacrítico ao fazer perguntas",
                    "Porque são palavras oxítonas",
                    "Porque estão no início da frase",
                    "É opcional colocar acento"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¿Por qué estudias español? — Porque me gusta.",
                "words": [
                    "¿Por",
                    "qué",
                    "estudias",
                    "español?",
                    "—",
                    "Porque",
                    "me",
                    "gusta."
                ],
                "translation": "Por que você estuda espanhol? — Porque eu gosto."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Turista",
                "npcName": "Turista",
                "text": "Disculpe, ¿dónde está el museo de arte?",
                "npcMessage": "Disculpe, ¿dónde está el museo de arte?",
                "translation": "Com licença, onde fica o museu de arte?"
            },
            {
                "speaker": "Guía",
                "npcName": "Guía",
                "text": "Está cerca de la plaza central. ¿Por qué quieres ir hoy?",
                "npcMessage": "Está cerca de la plaza central. ¿Por qué quieres ir hoy?",
                "translation": "Fica perto da praça central. Por que você quer ir hoje?"
            },
            {
                "speaker": "Turista",
                "npcName": "Turista",
                "text": "Porque hoy la entrada es gratis.",
                "npcMessage": "Porque hoy la entrada es gratis.",
                "translation": "Porque hoje a entrada é gratuita."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) Qual pronome interrogativo é usado para perguntar por pessoas ('Quem é ele?')?",
                "options": [
                    {
                        "label": "¿Quién?",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "¿Qué?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é a diferença gráfica entre a pergunta 'Por que?' e a resposta 'Porque'?",
                "options": [
                    {
                        "label": "A pergunta é 'Por qué' (duas palavras com acento); a resposta é 'Porque' (uma palavra sem acento)",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Não há diferença",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está em um hotel e quer saber o horário do café da manhã. O que pergunta?",
                "options": [
                    {
                        "label": "Disculpe, ¿a qué hora es el desayuno?",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Disculpe, ¿quién es el desayuno?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¿Dónde está mi pasaporte y quién lo tiene?'",
                "options": [
                    {
                        "label": "Onde está meu passaporte e quem está com ele?",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Quando chega meu passaporte?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que acontece com a palavra 'cuánto' ao concordar com um substantivo feminino plural (ex: quantas pessoas)?",
                "options": [
                    {
                        "label": "Muda para 'cuántas' (ex: ¿Cuántas personas hay?)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Permanece sempre 'cuánto'",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_10",
        "title": "10. Números 1 a 30 y la Edad",
        "level": "A1",
        "description": "Conte de 1 a 30 em espanhol e aprenda a falar sua idade usando o verbo tener.",
        "icon": "🔢",
        "stage1_context": {
            "missionTitle": "Módulo 10: Números 1 a 30 y la Edad",
            "missionDescription": "Domine a contagem numérica de 1 a 30, entendendo a ortografia dos números compostos e a estrutura para dizer a idade.",
            "audioGuide": "Uno, dos, tres, diez, quince, veinte, veintiuno, treinta. Tengo veinticinco años."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Uno, dos, tres, diez",
                "Portuguese": "Um, dois, três, dez",
                "Audio": "Uno, dos, tres, diez",
                "timeContext": "Primeiros números fundamentais. 'Uno' vira 'un' antes de substantivos masculinos ('un libro')."
            },
            {
                "type": "vocab",
                "Spanish": "Once, doce, trece, catorce, quince",
                "Portuguese": "Onze, doze, treze, quatorze, quinze",
                "Audio": "Once, doce, trece, catorce, quince",
                "timeContext": "Números de 11 a 15 possuem terminação especial em '-ce'."
            },
            {
                "type": "vocab",
                "Spanish": "Veinte, veintiuno, veintidós, treinta",
                "Portuguese": "Vinte, vinte e um, vinte e dois, trinta",
                "Audio": "Veinte, veintiuno, veintidós, treinta",
                "timeContext": "Números de 21 a 29 escrevem-se em uma única palavra começada por 'veinti-' (veintiuno, veintidós com acento)."
            },
            {
                "type": "vocab",
                "Spanish": "Tengo 25 años",
                "Portuguese": "Tenho 25 anos",
                "Audio": "Tengo 25 años",
                "timeContext": "A idade em espanhol é expressa obrigatoriamente com o verbo TENER (ter)."
            },
            {
                "type": "vocab",
                "Spanish": "¿Cuántos años tienes?",
                "Portuguese": "Quantos anos você tem?",
                "Audio": "¿Cuántos años tienes?",
                "timeContext": "Pergunta informal padrão para saber a idade de alguém."
            },
            {
                "type": "grammar_pill",
                "title": "Grafia dos Números de 21 a 29 (Palavra Única)",
                "rule": "Os números de 21 a 29 escrevem-se numa só palavra: veintiuno, veintidós, veintitrés, veintiséis (com acento nos números 22, 23 e 26). A partir do 31 escrevem-se separados com 'y' (treinta y uno).",
                "formula": "21-29 ➔ veinti + número (palavra única com tilde em 22, 23, 26)",
                "example": "veintiuno (21), veintidós (22), veintitrés (23), treinta y uno (31)"
            },
            {
                "type": "grammar_pill",
                "title": "Uso do Verbo TENER para Idade",
                "rule": "Em espanhol, para dizer a idade usa-se o verbo TENER (tengo, tienes, tiene) seguido do número e da palavra 'años'. Jamais use o verbo ser/estar.",
                "formula": "TENER + [Número] + años",
                "example": "Tengo veinticinco años. (NÃO 'Soy veinticinco años')"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se escreve o número 22 em espanhol numa só palavra?",
                "options": [
                    "Veintidós",
                    "Veinte y dos",
                    "Vinte e dos",
                    "Dos y veinte"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como se diz 'Tenho 20 anos' em espanhol?",
                "options": [
                    "Tengo veinte años",
                    "Soy veinte años",
                    "Estoy veinte años",
                    "Hago veinte años"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Como perguntar a idade de um amigo?",
                "options": [
                    "¿Cuántos años tienes?",
                    "¿Qué edad eres?",
                    "¿Cuántos años estás?",
                    "¿De dónde eres?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Mi hermano tiene quince años.'",
                "options": [
                    "Meu irmão tem quinze anos.",
                    "Meu irmão tem cinquenta anos.",
                    "Meu irmão tem cinco anos.",
                    "Meu irmão tem doze anos."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. O que acontece com o número 'uno' antes de um substantivo masculino (ex: 1 livro)?",
                "options": [
                    "Apocopa para 'un' (un libro)",
                    "Permanece 'uno libro'",
                    "Muda para 'una libro'",
                    "Muda para 'primer'"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Tengo veinticuatro años y mi amigo tiene treinta.",
                "words": [
                    "Tengo",
                    "veinticuatro",
                    "años",
                    "y",
                    "mi",
                    "amigo",
                    "tiene",
                    "treinta."
                ],
                "translation": "Tenho vinte e quatro anos e meu amigo tem trinta."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Javier",
                "npcName": "Javier",
                "text": "¿Cuántos años tienes, Laura?",
                "npcMessage": "¿Cuántos años tienes, Laura?",
                "translation": "Quantos anos você tem, Laura?"
            },
            {
                "speaker": "Laura",
                "npcName": "Laura",
                "text": "Tengo veinticuatro años. ¿Y tú?",
                "npcMessage": "Tengo veinticuatro años. ¿Y tú?",
                "translation": "Tenho vinte e quatro anos. E você?"
            },
            {
                "speaker": "Javier",
                "npcName": "Javier",
                "text": "Yo tengo treinta años.",
                "npcMessage": "Yo tengo treinta años.",
                "translation": "Eu tenho trinta anos."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) Como se diz o número 15 em espanhol?",
                "options": [
                    {
                        "label": "Quince",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Diecinco",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é a regra correta para os números de 21 a 29?",
                "options": [
                    {
                        "label": "Escrevem-se numa única palavra começada por 'veinti-' (ex: veintisiete)",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Escrevem-se sempre separados com 'y'",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está preenchendo um formulário no aeroporto de Madri e precisa informar sua idade (28 anos). O que escreve?",
                "options": [
                    {
                        "label": "Veintiocho años",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Veinte y ocho años",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¿Cuántos años tiene el profesor? — Tiene treinta años.'",
                "options": [
                    {
                        "label": "Quantos anos o professor tem? — Ele tem trinta anos.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Quem é o professor?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Por que os números 22 (veintidós), 23 (veintitrés) e 26 (veintiséis) levam acento ortográfico?",
                "options": [
                    {
                        "label": "Porque ao se tornarem palavras agudas (oxítonas) terminadas em -s ou vocal, ganham acento pela regra geral da língua",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "É uma exceção sem regra",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_11",
        "title": "11. Demonstrativos (Este, Ese, Aquel)",
        "level": "A1",
        "description": "Aprenda a apontar objetos e localizar coisas no espaço usando este, ese e aquel.",
        "icon": "👉",
        "stage1_context": {
            "missionTitle": "Módulo 11: Demonstrativos (Este, Ese, Aquel)",
            "missionDescription": "Domine a indicação de proximidade física em relação ao falante e ao ouvinte em espanhol.",
            "audioGuide": "Este libro aquí. Ese cuaderno ahí. Aquel coche allí. ¿Qué es esto?"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Este / Esta / Esto",
                "Portuguese": "Este / Esta / Isto",
                "Audio": "Este / Esta / Esto",
                "timeContext": "Aponta para objetos muito próximos do falante (aqui). 'Esto' é a forma neutra para coisas não identificadas."
            },
            {
                "type": "vocab",
                "Spanish": "Ese / Esa / Eso",
                "Portuguese": "Esse / Essa / Isso",
                "Audio": "Ese / Esa / Eso",
                "timeContext": "Aponta para objetos perto da pessoa com quem se fala (aí). 'Eso' é a forma neutra."
            },
            {
                "type": "vocab",
                "Spanish": "Aquel / Aquella / Aquello",
                "Portuguese": "Aquele / Aquela / Aquilo",
                "Audio": "Aquel / Aquella / Aquello",
                "timeContext": "Aponta para objetos distantes tanto do falante quanto do ouvinte (lá/ali)."
            },
            {
                "type": "vocab",
                "Spanish": "¿Qué es esto?",
                "Portuguese": "O que é isto?",
                "Audio": "¿Qué es esto?",
                "timeContext": "Pergunta clássica ao ver um objeto desconhecido perto de você. Usa a forma neutra 'esto'."
            },
            {
                "type": "vocab",
                "Spanish": "Este libro es mío",
                "Portuguese": "Este livro é meu",
                "Audio": "Este libro es mío",
                "timeContext": "Uso do demonstrativo masculino 'este' acompanhando o substantivo 'libro'."
            },
            {
                "type": "grammar_pill",
                "title": "Três Graus de Distância dos Demonstrativos",
                "rule": "O espanhol possui 3 graus de distância: 'Este' (perto de mim / aquí), 'Ese' (perto de você / ahí) e 'Aquel' (longe de ambos / allí).",
                "formula": "Aquí ➔ Este | Ahí ➔ Ese | Allí ➔ Aquel",
                "example": "Este coche (aquí), ese bolso (ahí), aquel avión (allí)."
            },
            {
                "type": "grammar_pill",
                "title": "Formas Neutras (Esto, Eso, Aquello) Sem Substantivo",
                "rule": "As formas neutras 'esto', 'eso' e 'aquello' referem-se a objetos não identificados ou ideias abstratas. NUNCA acompanham um substantivo (NÃO existe 'esto libro').",
                "formula": "Esto / Eso / Aquello ➔ Sem substantivo",
                "example": "¿Qué es esto? / Eso es verdad. (NÃO diga 'esto bolígrafo')"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como apontar para uma caneta que está na sua própria mão?",
                "options": [
                    "Esta pluma",
                    "Esa pluma",
                    "Aquella pluma",
                    "Esto pluma"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como perguntar 'O que é isto?' ao ver algo desconhecido?",
                "options": [
                    "¿Qué es esto?",
                    "¿Qué es este?",
                    "¿Qué es ese?",
                    "¿Qué es aquello?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual demonstrativo usar para um carro distante de ambas as pessoas?",
                "options": [
                    "Aquel coche",
                    "Este coche",
                    "Ese coche",
                    "Esto coche"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Esa camisa es bonita pero aquella es elegante.'",
                "options": [
                    "Essa camisa é bonita mas aquela é elegante.",
                    "Esta camisa é bonita mas essa é elegante.",
                    "Aquela camisa é bonita.",
                    "Esta camisa é elegante."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Por que é ERRADO dizer 'esto bolso'?",
                "options": [
                    "Porque 'esto' é neutro e não pode acompanhar substantivos masculinos (o correto é 'este bolso')",
                    "Porque 'bolso' é feminino",
                    "Porque falta acento",
                    "Não é errado"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¿Qué es esto? — Es un libro antiguo.",
                "words": [
                    "¿Qué",
                    "es",
                    "esto?",
                    "—",
                    "Es",
                    "un",
                    "libro",
                    "antiguo."
                ],
                "translation": "O que é isto? — É um livro antigo."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Elena",
                "npcName": "Elena",
                "text": "Mira esto, Carlos. ¿De quién es este cuaderno?",
                "npcMessage": "Mira esto, Carlos. ¿De quién es este cuaderno?",
                "translation": "Olhe isto, Carlos. De quem é este caderno?"
            },
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "Ese cuaderno es de María. Y aquel bolso allá también.",
                "npcMessage": "Ese cuaderno es de María. Y aquel bolso allá también.",
                "translation": "Esse caderno é da María. E aquela bolsa lá também."
            },
            {
                "speaker": "Elena",
                "npcName": "Elena",
                "text": "Muchas gracias, Carlos.",
                "npcMessage": "Muchas gracias, Carlos.",
                "translation": "Muito obrigada, Carlos."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Ese teléfono'?",
                "options": [
                    {
                        "label": "Esse telefone (que está perto de você)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Este telefone que está na minha mão",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é a diferença fundamental entre 'este' e 'esto'?",
                "options": [
                    {
                        "label": "'Este' é masculino e acompanha substantivos ('este libro'); 'Esto' é neutro e é usado sozinho ('¿Qué es esto?')",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Não há diferença",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está em uma loja de roupas e aponta para um casaco pendurado perto do vendedor. O que diz?",
                "options": [
                    {
                        "label": "Quiero ver ese abrigo, por favor.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Quiero ver esto abrigo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Aquella casa en la montaña es muy bonita.'",
                "options": [
                    {
                        "label": "Aquela casa na montanha é muito bonita.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Esta casa na montanha é bonita.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Como ficam as formas masculinas plurais de 'este', 'ese' e 'aquel'?",
                "options": [
                    {
                        "label": "Estos, esos, aquellos (note que 'este' vira 'estos', não 'estes')",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Estes, eses, aquelles",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_12",
        "title": "12. Kit de Sobrevivencia Pessoal",
        "level": "A1",
        "description": "Expressões de emergência física e necessidades básicas: fome, sede, dor e pedido de ajuda.",
        "icon": "🎒",
        "stage1_context": {
            "missionTitle": "Módulo 12: Kit de Sobrevivencia Pessoal",
            "missionDescription": "Aprenda a comunicar necessidades urgentes de saúde, mal-estar e pedido de auxílio imediato.",
            "audioGuide": "Tengo hambre. Tengo sed. Me duele la cabeza. ¡Ayuda, por favor! Necesito un médico."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Tengo hambre",
                "Portuguese": "Estou com fome",
                "Audio": "Tengo hambre",
                "timeContext": "Sensação física expressa obrigatoriamente com o verbo TENER + substantivo 'hambre'."
            },
            {
                "type": "vocab",
                "Spanish": "Tengo sed",
                "Portuguese": "Estou com sede",
                "Audio": "Tengo sed",
                "timeContext": "Sensação de sede expressa com o verbo TENER + 'sed'."
            },
            {
                "type": "vocab",
                "Spanish": "Me duele la cabeza",
                "Portuguese": "Dói minha cabeça / Estou com dor de cabeça",
                "Audio": "Me duele la cabeza",
                "timeContext": "Verbo DOLER concorda com a parte do corpo. No singular usa-se 'duele'."
            },
            {
                "type": "vocab",
                "Spanish": "¡Ayuda! / ¡Socorro!",
                "Portuguese": "Ajuda! / Socorro!",
                "Audio": "¡Ayuda! / ¡Socorro!",
                "timeContext": "Pedido de socorro ou auxílio urgente em situações de perigo ou emergência."
            },
            {
                "type": "vocab",
                "Spanish": "Necesito un médico",
                "Portuguese": "Preciso de um médico",
                "Audio": "Necesito un médico",
                "timeContext": "Uso do verbo 'necesitar' para requerer assistência médica imediata."
            },
            {
                "type": "grammar_pill",
                "title": "Sensações Físicas com o Verbo TENER",
                "rule": "Em espanhol, sensações corporais como fome, sede, frio, calor, sono e medo usam o verbo TENER seguido de substantivo.",
                "formula": "TENER + hambre / sed / frío / calor / sueño / miedo",
                "example": "Tengo mucha hambre. / ¿Tienes frío? ➔ (Estou com muita fome. / Você está com frio?)"
            },
            {
                "type": "grammar_pill",
                "title": "Funcionamento do Verbo DOLER (Dores)",
                "rule": "O verbo 'doler' concorda com o que dói: usa-se 'duele' para o singular (la cabeza) e 'duelen' para o plural (los pies).",
                "formula": "Me / Te / Le + DUELE (singular) / DUELEN (plural)",
                "example": "Me duele el estómago. / Me duelen los ojos."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dizer 'Estou com fome' corretamente em espanhol?",
                "options": [
                    "Tengo hambre",
                    "Estoy hambre",
                    "Soy hambre",
                    "Hago hambre"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como expressar que os seus pés estão doendo (plural)?",
                "options": [
                    "Me duelen los pies",
                    "Me duele los pies",
                    "Tengo dolor los pies",
                    "Soy dolor de pies"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual palavra usar em uma situação de perigo extremo para pedir socorro?",
                "options": [
                    "¡Socorro!",
                    "¡Buenas noches!",
                    "¡De nada!",
                    "¡Por supuesto!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Necesito agua porque tengo mucha sed.'",
                "options": [
                    "Preciso de água porque estou com muita sede.",
                    "Preciso de comida porque tenho fome.",
                    "Quero água porque está frio.",
                    "Não preciso de água."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Por que é INCORRETO dizer 'Estoy frío' para dizer que sente frio?",
                "options": [
                    "Porque sensações físicas exigem o verbo TENER ('Tengo frío')",
                    "Porque 'frío' é verbo",
                    "Porque deve usar SER",
                    "Não é incorreto"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Me duele la cabeza y tengo fiebre.",
                "words": [
                    "Me",
                    "duele",
                    "la",
                    "cabeza",
                    "y",
                    "tengo",
                    "fiebre."
                ],
                "translation": "Minha cabeça dói e estou com febre."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Paciente",
                "npcName": "Paciente",
                "text": "Disculpe, doctor. Me duele mucho la cabeza y tengo frío.",
                "npcMessage": "Disculpe, doctor. Me duele mucho la cabeza y tengo frío.",
                "translation": "Com licença, doutor. Minha cabeça dói muito e estou com frio."
            },
            {
                "speaker": "Médico",
                "npcName": "Médico",
                "text": "Comprendo. Vamos a revisar si tiene fiebre.",
                "npcMessage": "Comprendo. Vamos a revisar si tiene fiebre.",
                "translation": "Compreendo. Vamos checar se o senhor tem febre."
            },
            {
                "speaker": "Paciente",
                "npcName": "Paciente",
                "text": "Muchas gracias, doctor.",
                "npcMessage": "Muchas gracias, doctor.",
                "translation": "Muito obrigado, doutor."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Tengo sueño'?",
                "options": [
                    {
                        "label": "Estou com sono",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Tenho um sonho",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Como se diz 'Minhas costas doem' (las espaldas / la espalda)?",
                "options": [
                    {
                        "label": "Me duele la espalda",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Me duelen la espalda",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está passando mal na rua em Madri e precisa ir a um hospital. O que diz a um taxista?",
                "options": [
                    {
                        "label": "¡Por favor, al hospital más cercano! Necesito un médico.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡Hola, buenas noches!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Los niños tienen hambre y quieren comer.'",
                "options": [
                    {
                        "label": "As crianças estão com fome e querem comer.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "As crianças estão com sede.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Como intensificar que está com MUITA fome em espanhol?",
                "options": [
                    {
                        "label": "Tengo mucha hambre (usa o adjetivo 'mucha' antes de hambre)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Tengo muy hambre",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_13",
        "title": "13. Lugares Esenciales de la Ciudad",
        "level": "A1",
        "description": "Localize estabelecimentos urbanos fundamentais como farmácias, bancos, hospitais e supermercados.",
        "icon": "🏛️",
        "stage1_context": {
            "missionTitle": "Módulo 13: Lugares Esenciales de la Ciudad",
            "missionDescription": "Aprenda o vocabulário urbano e saiba perguntar se existe um determinado serviço ou lugar por perto.",
            "audioGuide": "La farmacia, el banco, el hospital, el supermercado, la estación de metro. ¿Hay un banco cerca?"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "La farmacia",
                "Portuguese": "A farmácia",
                "Audio": "La farmacia",
                "timeContext": "Estabelecimento de saúde. Na Espanha costuma ter uma cruz verde iluminada na fachada."
            },
            {
                "type": "vocab",
                "Spanish": "El banco / El cajero",
                "Portuguese": "O banco / O caixa eletrônico",
                "Audio": "El banco / El cajero",
                "timeContext": "'El cajero automático' é o local para sacar dinheiro com cartão de débito/crédito."
            },
            {
                "type": "vocab",
                "Spanish": "El hospital",
                "Portuguese": "O hospital",
                "Audio": "El hospital",
                "timeContext": "Lembre-se de que a letra H é muda na pronúncia de hospital (/ospital/)."
            },
            {
                "type": "vocab",
                "Spanish": "El supermercado",
                "Portuguese": "O supermercado",
                "Audio": "El supermercado",
                "timeContext": "Local para compras de alimentos. Abrevia-se frequentemente como 'el súper'."
            },
            {
                "type": "vocab",
                "Spanish": "La estación de metro",
                "Portuguese": "A estação de metrô",
                "Audio": "La estación de metro",
                "timeContext": "Ponto essencial de transporte público nas grandes capitais hispânicas."
            },
            {
                "type": "grammar_pill",
                "title": "O Verbo Impessoal HAY (Existência)",
                "rule": "O verbo 'hay' (do verbo haber) indica a existência de coisas ou lugares indeterminados. É invariável no singular e no plural.",
                "formula": "HAY + artigo indefinido (un/una) ou plural",
                "example": "¿Hay una farmacia por aquí? / Hay dos bancos en esta calle."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença entre HAY (existência) e ESTÁ (localização)",
                "rule": "Use HAY para saber se um lugar indeterminado EXISTE na área. Use ESTÁ para saber ONDE FICA um lugar específico já conhecido.",
                "formula": "¿Hay un banco? (existência) vs. ¿Dónde está el banco Santander? (localização)",
                "example": "¿Hay un supermercado cerca? vs. ¿Dónde está el supermercado Mercadona?"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como perguntar se existe um caixa eletrônico por perto?",
                "options": [
                    "¿Hay un cajero cerca?",
                    "¿Dónde está el cajero?",
                    "¿Es un cajero?",
                    "¿Tiene cajero?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como se diz 'O caixa eletrônico' em espanhol?",
                "options": [
                    "El cajero automático",
                    "El banco de caja",
                    "La caja electrónica",
                    "El dinero rápido"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual é a forma correta do verbo haver no presente para expressar existência?",
                "options": [
                    "Hay",
                    "Ha",
                    "Hacen",
                    "Tiene"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: '¿Dónde está la estación de metro más cercana?'",
                "options": [
                    "Onde fica a estação de metrô mais próxima?",
                    "Há uma estação de metrô perto?",
                    "Quando abre o metrô?",
                    "Como vai de metrô?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Por que dizemos '¿HAY una farmacia?' mas dizemos '¿Dónde ESTÁ la farmacia de la esquina?'",
                "options": [
                    "Porque 'hay' busca existência indeterminada e 'está' localiza algo específico",
                    "Porque farmácia é feminino",
                    "Porque é uma pergunta",
                    "Não há diferença"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¿Hay una farmacia cerca de la estación?",
                "words": [
                    "¿Hay",
                    "una",
                    "farmacia",
                    "cerca",
                    "de",
                    "la",
                    "estación?"
                ],
                "translation": "Há uma farmácia perto da estação?"
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Peatón",
                "npcName": "Peatón",
                "text": "Disculpe, ¿hay un banco por aquí?",
                "npcMessage": "Disculpe, ¿hay un banco por aquí?",
                "translation": "Com licença, há um banco por aqui?"
            },
            {
                "speaker": "Vecino",
                "npcName": "Vecino",
                "text": "Sí, hay uno en la esquina, al lado del supermercado.",
                "npcMessage": "Sí, hay uno en la esquina, al lado del supermercado.",
                "translation": "Sim, há um na esquina, ao lado do supermercado."
            },
            {
                "speaker": "Peatón",
                "npcName": "Peatón",
                "text": "Muchas gracias por la información.",
                "npcMessage": "Muchas gracias por la información.",
                "translation": "Muito obrigado pela informação."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'El súper' na linguagem cotidiana?",
                "options": [
                    {
                        "label": "O supermercado (abreviação comum)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Um super-herói",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) O verbo impessoal 'HAY' muda para o plural quando a frase se refere a vários lugares (ex: 'várias farmácias')?",
                "options": [
                    {
                        "label": "Não! Permanece sempre 'HAY' (ex: Hay tres farmacias en la calle)",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Sim, muda para 'Hayan'",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você precisa comprar um remédio para dor de cabeça em Buenos Aires. O que procura na rua?",
                "options": [
                    {
                        "label": "Una farmacia",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Un banco",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'El hospital está lejos pero el supermercado está cerca.'",
                "options": [
                    {
                        "label": "O hospital fica longe mas o supermercado fica perto.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O hospital fica perto.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre as palavras 'Cerca' e 'Lejos'?",
                "options": [
                    {
                        "label": "'Cerca' significa perto e 'Lejos' significa longe",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Ambos significam perto",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_14",
        "title": "14. La Casa y la Habitación",
        "level": "A1",
        "description": "Nomeie os cômodos da casa, os móveis essenciais e descreva onde estão localizados os objetos.",
        "icon": "🏠",
        "stage1_context": {
            "missionTitle": "Módulo 14: La Casa y la Habitación",
            "missionDescription": "Conheça o vocabulário das dependências domésticas (cozinha, quarto, banheiro, sala) e mobiliário principal.",
            "audioGuide": "La cocina, el dormitorio, el baño, el salón, la cama, la mesa, la silla."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "La cocina",
                "Portuguese": "A cozinha",
                "Audio": "La cocina",
                "timeContext": "Cômodo onde se preparam as refeições e onde fica o fogão e a geladeira."
            },
            {
                "type": "vocab",
                "Spanish": "El dormitorio / La habitación",
                "Portuguese": "O quarto de dormir",
                "Audio": "El dormitorio / La habitación",
                "timeContext": "'Dormitorio' ou 'habitación' (ou 'cuarto' na América Latina) referem-se ao dormitório."
            },
            {
                "type": "vocab",
                "Spanish": "El baño",
                "Portuguese": "O banheiro",
                "Audio": "El baño",
                "timeContext": "Cômodo higiênico com chuveiro, vaso sanitário e lavatório."
            },
            {
                "type": "vocab",
                "Spanish": "El salón / La sala",
                "Portuguese": "A sala de estar",
                "Audio": "El salón / La sala",
                "timeContext": "'El salón' é o termo mais usado na Espanha para a sala de estar principal com sofá e TV."
            },
            {
                "type": "vocab",
                "Spanish": "La cama / La mesa / La silla",
                "Portuguese": "A cama / A mesa / A cadeira",
                "Audio": "La cama / La mesa / La silla",
                "timeContext": "Móveis domésticos essenciais. Lembre-se de que 'silla' (cadeira) tem o som de LL (/siia/)."
            },
            {
                "type": "grammar_pill",
                "title": "Artigos Definidos e Indefinidos em Substantivos da Casa",
                "rule": "Substantivos masculinos usam artigos masculinos (el salón, un baño) e os femininos usam artigos femininos (la cocina, una mesa).",
                "formula": "El / Un + Substantivo Masculino | La / Una + Substantivo Feminino",
                "example": "El baño está al lado de la cocina. / Tengo una mesa grande."
            },
            {
                "type": "grammar_pill",
                "title": "Preposições de Posição Espacial (En, Sobre, Debajo de)",
                "rule": "Para descrever a localização dos móveis na casa usam-se: 'en' (em/no/na), 'sobre' (em cima de) e 'debajo de' (embaixo de).",
                "formula": "Objeto + ESTÁ + en / sobre / debajo de + Local",
                "example": "La televisión está en el salón. El libro está sobre la mesa."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'A cozinha' em espanhol?",
                "options": [
                    "La cocina",
                    "El salón",
                    "El baño",
                    "La cama"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a palavra para 'Cadeira' em espanhol?",
                "options": [
                    "Silla",
                    "Mesa",
                    "Cama",
                    "Sofá"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Como dizer que a cama está no quarto de dormir?",
                "options": [
                    "La cama está en el dormitorio",
                    "La cama es en el baño",
                    "La cama hay el dormitorio",
                    "La cama tiene sala"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Mi casa tiene tres dormitorios y dos baños.'",
                "options": [
                    "Minha casa tem três quartos e dois banheiros.",
                    "Minha casa tem duas cozinhas.",
                    "Minha casa tem três salas.",
                    "Minha casa é pequena."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual preposição usar para dizer que o gato está EMBAIXO da mesa?",
                "options": [
                    "Debajo de la mesa",
                    "Sobre la mesa",
                    "En la mesa",
                    "Al lado de"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "La mesa está en la cocina y la cama en el dormitorio.",
                "words": [
                    "La",
                    "mesa",
                    "está",
                    "en",
                    "la",
                    "cocina",
                    "y",
                    "la",
                    "cama",
                    "en",
                    "el",
                    "dormitorio."
                ],
                "translation": "A mesa está na cozinha e a cama no quarto."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Inquilino",
                "npcName": "Inquilino",
                "text": "El piso es muy bonito. ¿Dónde está el salón?",
                "npcMessage": "El piso es muy bonito. ¿Dónde está el salón?",
                "translation": "O apartamento é muito bonito. Onde fica a sala?"
            },
            {
                "speaker": "Propietario",
                "npcName": "Propietario",
                "text": "El salón está aquí, a la derecha de la cocina.",
                "npcMessage": "El salón está aquí, a la derecha de la cocina.",
                "translation": "A sala fica aqui, à direita da cozinha."
            },
            {
                "speaker": "Inquilino",
                "npcName": "Inquilino",
                "text": "¡Excelente! Es un espacio muy amplio.",
                "npcMessage": "¡Excelente! Es un espacio muy amplio.",
                "translation": "Excelente! É um espaço muito amplo."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa a palavra 'Piso' na Espanha quando se fala de moradia?",
                "options": [
                    {
                        "label": "Apartamento / Moradia em prédio",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Piso do chão",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Como se escreve a preposição 'em cima de' em espanhol?",
                "options": [
                    {
                        "label": "Sobre / Encima de",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Debajo de",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer saber onde fica o banheiro na casa de um amigo. O que pergunta educadamente?",
                "options": [
                    {
                        "label": "Disculpe, ¿dónde está el baño?",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Disculpe, ¿dónde hay baño?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'La silla está al lado de la mesa en el salón.'",
                "options": [
                    {
                        "label": "A cadeira está ao lado da mesa na sala de estar.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "A cama está na cozinha.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Pegadinha de falso amigo: O que significa a palavra 'Cuarto' além de significar o número ordinal quatro?",
                "options": [
                    {
                        "label": "Significa 'Quarto de dormir' na América Latina",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Significa a cozinha",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_15",
        "title": "15. Posesivos Básicos",
        "level": "A1",
        "description": "Aprenda a usar os adjetivos possessivos (mi, tu, su, nuestro/a) para falar de pertences e relações sociais.",
        "icon": "🔑",
        "stage1_context": {
            "missionTitle": "Módulo 15: Posesivos Básicos",
            "missionDescription": "Domine a indicação de posse e parentesco em espanhol, entendendo as regras de concordância com o substantivo.",
            "audioGuide": "Mi casa, mis amigos. Tu libro, tus llaves. Su coche. Nuestra familia."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Mi / Mis",
                "Portuguese": "Meu, minha / Meus, minhas",
                "Audio": "Mi / Mis",
                "timeContext": "Possessivo de 1ª pessoa do singular. Não muda de gênero: 'mi padre', 'mi madre'."
            },
            {
                "type": "vocab",
                "Spanish": "Tu / Tus",
                "Portuguese": "Teu, tua, seu, sua / Teus, tuas",
                "Audio": "Tu / Tus",
                "timeContext": "Possessivo informal de 2ª pessoa (tú). Escrito sem acento para não confundir com o pronome 'Tú'."
            },
            {
                "type": "vocab",
                "Spanish": "Su / Sus",
                "Portuguese": "Dele, dela, do senhor, de vocês",
                "Audio": "Su / Sus",
                "timeContext": "Possessivo de 3ª pessoa e de tratamento formal (él, ella, usted, ustedes)."
            },
            {
                "type": "vocab",
                "Spanish": "Nuestro / Nuestra",
                "Portuguese": "Nosso / Nossa",
                "Audio": "Nuestro / Nuestra",
                "timeContext": "Possessivo de 1ª pessoa do plural. É o único que concorda em gênero e número (nuestro/a/os/as)."
            },
            {
                "type": "vocab",
                "Spanish": "Mis llaves / Tu pasaporte",
                "Portuguese": "Minhas chaves / Teu passaporte",
                "Audio": "Mis llaves / Tu pasaporte",
                "timeContext": "Exemplos práticos do dia a dia ao procurar pertences pessoais."
            },
            {
                "type": "grammar_pill",
                "title": "Invariabilidade de Gênero em Mi, Tu e Su",
                "rule": "Os adjetivos possessivos 'mi', 'tu' e 'su' possuem a mesma forma para masculino e feminino; concordam apenas em número (singular/plural).",
                "formula": "Mi / Tu / Su + Singular | Mis / Tus / Sus + Plural",
                "example": "Mi hermano / Mi hermana | Mis hermanos / Mis hermanas."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença Ortográfica: Pronome 'Tú' vs Possessivo 'Tu'",
                "rule": "'Tú' com acento é o pronome sujeito (Você). 'Tu' sem acento é o adjetivo possessivo (Teu/Seu).",
                "formula": "Tú (com tilde) = Pronome Sujeito | Tu (sem tilde) = Possessivo",
                "example": "Tú estudias con tu libro. ➔ (Você estuda com o seu livro.)"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Minha casa' em espanhol?",
                "options": [
                    "Mi casa",
                    "Mía casa",
                    "Mis casa",
                    "Yo casa"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a diferença gráfica entre o pronome 'Tú' e o possessivo 'Tu'?",
                "options": [
                    "O pronome 'Tú' leva acento; o possessivo 'Tu' não leva acento",
                    "Não há acento",
                    "O possessivo leva acento",
                    "O pronome tem H"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Como dizer 'Nossa família' com concordância de gênero correta?",
                "options": [
                    "Nuestra familia",
                    "Nuestro familia",
                    "Nuestros familia",
                    "Nuestras familia"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Mis amigos están en su casa.'",
                "options": [
                    "Meus amigos estão na casa deles.",
                    "Meu amigo está na minha casa.",
                    "Seus amigos estão na nossa casa.",
                    "Nossos amigos estão longe."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual possessivo concorda tanto em GÊNERO quanto em NÚMERO com o substantivo?",
                "options": [
                    "Nuestro / Nuestra / Nuestros / Nuestras",
                    "Mi / Mis",
                    "Tu / Tus",
                    "Su / Sus"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Mi hermano habla con nuestra madre por teléfono.",
                "words": [
                    "Mi",
                    "hermano",
                    "habla",
                    "con",
                    "nuestra",
                    "madre",
                    "por",
                    "teléfono."
                ],
                "translation": "Meu irmão fala com a nossa mãe pelo telefone."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Pablo",
                "npcName": "Pablo",
                "text": "Hola, Lucía. ¿Dónde están tus llaves?",
                "npcMessage": "Hola, Lucía. ¿Dónde están tus llaves?",
                "translation": "Olá, Lucía. Onde estão as suas chaves?"
            },
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "Mis llaves están en mi bolso. ¿Y tus cosas?",
                "npcMessage": "Mis llaves están en mi bolso. ¿Y tus cosas?",
                "translation": "Minhas chaves estão na minha bolsa. E as suas coisas?"
            },
            {
                "speaker": "Pablo",
                "npcName": "Pablo",
                "text": "Mis cosas están en nuestro coche.",
                "npcMessage": "Mis cosas están en nuestro coche.",
                "translation": "Minhas coisas estão no nosso carro."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) Qual é a tradução de 'Mis hermanos'?",
                "options": [
                    {
                        "label": "Meus irmãos",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Meu irmão",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que se diz 'Mi padre' e 'Mi madre' usando exatamente o mesmo termo 'mi'?",
                "options": [
                    {
                        "label": "Porque os possessivos 'mi', 'tu' e 'su' não flexionam em gênero (são iguais para masculino e feminino)",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Porque 'madre' é masculino",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está apresentando sua irmã a um colega de trabalho. O que diz?",
                "options": [
                    {
                        "label": "Te presento a mi hermana.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Te presento a yo hermana",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Nuestra casa es muy bonita y su jardín es grande.'",
                "options": [
                    {
                        "label": "Nossa casa é muito bonita e o seu jardim é grande.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Minha casa é bonita.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que a frase 'Tú tienes tu pasaporte' significa e por que há dois 'tu' diferentes?",
                "options": [
                    {
                        "label": "Significa 'Você tem seu passaporte'. O primeiro 'Tú' com acento é o pronome sujeito e o segundo 'tu' sem acento é o possessivo",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "É uma repetição errada",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_16",
        "title": "16. En el Restaurante",
        "level": "A1",
        "description": "Pedir a conta, consultar o cardápio, solicitar pratos e interagir educadamente com o garçom.",
        "icon": "🍽️",
        "stage1_context": {
            "missionTitle": "Módulo 16: En el Restaurante",
            "missionDescription": "Pratique frases essenciais para fazer pedidos em um restaurante, pedir a conta e entender o menu hispânico.",
            "audioGuide": "La carta, por favor. El menú del día. La cuenta, por favor. Para mí, una paella."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "La carta / El menú",
                "Portuguese": "O cardápio / O menu do dia",
                "Audio": "La carta / El menú",
                "timeContext": "'La carta' é o cardápio completo à la carte. 'El menú del día' é a refeição completa com preço fixo."
            },
            {
                "type": "vocab",
                "Spanish": "La cuenta, por favor",
                "Portuguese": "A conta, por favor",
                "Audio": "La cuenta, por favor",
                "timeContext": "Forma mais cortês e padrão de pedir a conta ao garçom ao finalizar a refeição."
            },
            {
                "type": "vocab",
                "Spanish": "El camarero / La camarera",
                "Portuguese": "O garçom / A garçonete",
                "Audio": "El camarero / La camarera",
                "timeContext": "Nome da profissão de quem atende as mesas em bares e restaurantes na Espanha."
            },
            {
                "type": "vocab",
                "Spanish": "Para mí...",
                "Portuguese": "Para mim (eu quero)...",
                "Audio": "Para mí...",
                "timeContext": "A expressão mais elegante e natural em espanhol para fazer um pedido no restaurante."
            },
            {
                "type": "vocab",
                "Spanish": "¿Qué me recomienda?",
                "Portuguese": "O que você me recomenda?",
                "Audio": "¿Qué me recomienda?",
                "timeContext": "Pergunta simpática ao garçom para saber a especialidade da casa."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença Cultural: La Carta vs. El Menú del Día",
                "rule": "Na Espanha, 'La carta' traz todas as opções de pratos individuais. 'El menú del día' é um combinado completo por preço fixo (primeiro prato, segundo prato, sobremesa e bebida).",
                "formula": "Opções individuais ➔ La carta | Refeição completa preço fixo ➔ El menú",
                "example": "Camarero, ¿me trae la carta? vs. ¿Tienen menú del día hoy?"
            },
            {
                "type": "grammar_pill",
                "title": "Formas Elegantes de Fazer Pedidos (Para mí / Quisiera)",
                "rule": "Para pedir comida, evite a frase direta 'Yo quiero' (soa imperativa). Prefira 'Para mí... ', 'Quisiera... ' ou 'Me trae... por favor'.",
                "formula": "Para mí + [prato] | Quisiera + [prato] | Me trae + [prato]",
                "example": "Para mí una paella de marisco y agua. / Quisiera un té caliente."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como pedir a conta ao garçom no final da refeição?",
                "options": [
                    "La cuenta, por favor",
                    "El menú, por favor",
                    "La carta, por favor",
                    "El dinero, por favor"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a forma mais natural e educada de pedir seu prato ao garçom?",
                "options": [
                    "Para mí, una ensalada",
                    "Yo quiero ensalada ya",
                    "Dame una ensalada",
                    "Tráeme ensalada"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Como se chama o garçom na Espanha?",
                "options": [
                    "El camarero",
                    "El mesero",
                    "El sirviente",
                    "El cocinero"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: '¿Nos trae la carta de postres, por favor?'",
                "options": [
                    "Traz o cardápio de sobremesas para nós, por favor?",
                    "Traz a conta agora, por favor?",
                    "Onde fica a cozinha?",
                    "Traz mais pão, por favor?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. O que inclui o tradicional 'Menú del día' nos restaurantes espanhóis?",
                "options": [
                    "Refeição completa por preço fixo (primeiro prato, segundo prato, sobremesa e bebida)",
                    "Apenas o café da manhã",
                    "Apenas petiscos e bebidas",
                    "Lista de bebidas alcoólicas"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Para mí una paella y la cuenta, por favor.",
                "words": [
                    "Para",
                    "mí",
                    "una",
                    "paella",
                    "y",
                    "la",
                    "cuenta,",
                    "por",
                    "favor."
                ],
                "translation": "Para mim uma paella e a conta, por favor."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Camarero",
                "npcName": "Camarero",
                "text": "Buenas tardes. ¿Qué van a tomar?",
                "npcMessage": "Buenas tardes. ¿Qué van a tomar?",
                "translation": "Boa tarde. O que vão pedir?"
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "Buenas tardes. Para mí, el menú del día con paella y agua.",
                "npcMessage": "Buenas tardes. Para mí, el menú del día con paella y agua.",
                "translation": "Boa tarde. Para mim, o menu do dia com paella e água."
            },
            {
                "speaker": "Camarero",
                "npcName": "Camarero",
                "text": "¡Excelente elección! Enseguida se lo traigo.",
                "npcMessage": "¡Excelente elección! Enseguida se lo traigo.",
                "translation": "Excelente escolha! Trago em seguida."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) Qual termo se usa na Espanha para 'cardápio completo'?",
                "options": [
                    {
                        "label": "La carta",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "El billete",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que a expressão 'Para mí...' usa 'mí' com acento?",
                "options": [
                    {
                        "label": "Porque é um pronome tônico antecedido por preposição (para mí)",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Porque é o verbo ser",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você terminou de almoçar na Espanha e quer pagar a refeição. O que faz?",
                "options": [
                    {
                        "label": "Levanta a mão e diz: 'Disculpe, la cuenta, por favor.'",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Grita: '¡Quiero pagar dinero!'",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¿Qué me recomienda el camarero para cenar?'",
                "options": [
                    {
                        "label": "O que o garçom me recomenda para jantar?",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Quando o garçom traz o almoço?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a palavra 'Propina' em um restaurante hispânico?",
                "options": [
                    {
                        "label": "Gorjeta deixada voluntariamente ao garçom pelo bom serviço",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Suborno para furar a fila",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_17",
        "title": "17. Comida y Bebida I",
        "level": "A1",
        "description": "Nomeie alimentos essenciais, bebidas e aprenda a eufonia gramatical de 'el agua'.",
        "icon": "☕",
        "stage1_context": {
            "missionTitle": "Módulo 17: Comida y Bebida I",
            "missionDescription": "Amplie seu vocabulário gastronômico cotidiano: água, pão, café, carnes, peixes e frutas.",
            "audioGuide": "El agua fría, el pan, el café con leche, la carne, el pollo, el pescado, la manzana."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "El agua",
                "Portuguese": "A água",
                "Audio": "El agua",
                "timeContext": "Substantivo feminino que exige o artigo masculino 'EL' no singular por razões de eufonia sonora."
            },
            {
                "type": "vocab",
                "Spanish": "El pan",
                "Portuguese": "O pão",
                "Audio": "El pan",
                "timeContext": "Alimento básico em todas as refeições hispânicas."
            },
            {
                "type": "vocab",
                "Spanish": "El café con leche",
                "Portuguese": "O café com leite",
                "Audio": "El café con leche",
                "timeContext": "Bebida clássica do café da manhã (desayuno)."
            },
            {
                "type": "vocab",
                "Spanish": "La carne / El pollo / El pescado",
                "Portuguese": "A carne / O frango / O peixe (preparado)",
                "Audio": "La carne / El pollo / El pescado",
                "timeContext": "'El pescado' é o peixe comestível já preparado. 'El pez' é o animal vivo na água."
            },
            {
                "type": "vocab",
                "Spanish": "La manzana / La fruta",
                "Portuguese": "A maçã / A fruta",
                "Audio": "La manzana / La fruta",
                "timeContext": "Vocabulário de frutas e sobremesas saudáveis."
            },
            {
                "type": "grammar_pill",
                "title": "Regra da Eufonia com 'El agua'",
                "rule": "Substantivos femininos iniciados por 'A' ou 'HA' tônico usam 'EL' no singular para evitar o choque de vogais, mas continuam femininos (ex: el agua fría / las aguas).",
                "formula": "EL + [substantivo fem. iniciado por A/HA tônico] | LAS no plural",
                "example": "El agua está muy fría. / Las aguas minerales son buenas."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença entre Pescado e Pez",
                "rule": "Use 'Pez' para o animal vivo que nada no mar ou aquário. Use 'Pescado' para o peixe capturado e preparado como alimento.",
                "formula": "Vivo na água ➔ El pez | Alimento no prato ➔ El pescado",
                "example": "Hay peces en el río. / Me gusta el pescado frito."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dizer 'A água está fria' com a concordância de eufonia correta?",
                "options": [
                    "El agua está fría",
                    "La agua está fría",
                    "El agua está frío",
                    "Un agua está frío"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como se chama o peixe quando já está preparado no prato para comer?",
                "options": [
                    "El pescado",
                    "El pez",
                    "La pesca",
                    "El pescador"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual é a tradução de 'El pollo'?",
                "options": [
                    "O frango",
                    "O peixe",
                    "O pão",
                    "A maçã"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Quiero un café con leche y un pan con mantequilla.'",
                "options": [
                    "Quero um café com leite e um pão com manteiga.",
                    "Quero um chá com pão.",
                    "Quero água e fruta.",
                    "Quero café puro com bolo."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. O que acontece com o artigo de 'el agua' quando colocamos no plural?",
                "options": [
                    "Muda para o feminino 'las' (las aguas)",
                    "Permanece masculino 'los' (los aguas)",
                    "Muda para 'unos aguas'",
                    "Não tem plural"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "El agua está fría y el pollo está delicioso.",
                "words": [
                    "El",
                    "agua",
                    "está",
                    "fría",
                    "y",
                    "el",
                    "pollo",
                    "está",
                    "delicioso."
                ],
                "translation": "A água está fria e o frango está delicioso."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Camarero",
                "npcName": "Camarero",
                "text": "¿Qué desea para beber?",
                "npcMessage": "¿Qué desea para beber?",
                "translation": "O que deseja para beber?"
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "Un agua mineral sin gas, por favor.",
                "npcMessage": "Un agua mineral sin gas, por favor.",
                "translation": "Uma água mineral sem gás, por favor."
            },
            {
                "speaker": "Camarero",
                "npcName": "Camarero",
                "text": "¿Y para comer?",
                "npcMessage": "¿Y para comer?",
                "translation": "E para comer?"
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "Pescado con ensalada y pan.",
                "npcMessage": "Pescado con ensalada y pan.",
                "translation": "Peixe com salada e pão."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) Qual é o significado de 'El pollo a la brasa'?",
                "options": [
                    {
                        "label": "Frango assado na brasa",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Peixe cozido",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que o adjetivo 'fría' fica no feminino na frase 'El agua fría' se o artigo usado é 'El'?",
                "options": [
                    {
                        "label": "Porque a palavra 'agua' é feminina; usa-se 'el' apenas por eufonia, mas os adjetivos continuam no feminino",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Porque 'fría' é erro",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está em uma cafeteria em Madri às 9:00 da manhã. O que pede para acompanhar o pão?",
                "options": [
                    {
                        "label": "Un café con leche",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Un pescado frito",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'La manzana es una fruta muy saludable.'",
                "options": [
                    {
                        "label": "A maçã é uma fruta muito saudável.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "A fruta é uma maçã gostosa.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'Zumo de naranja' (Espanha) e 'Jugo de naranja' (América Latina)?",
                "options": [
                    {
                        "label": "Ambos significam 'suco de laranja'; 'zumo' usa-se na Espanha e 'jugo' na América Latina",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "'Zumo' é refrigerante",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_18",
        "title": "18. Sabores y Gustos",
        "level": "A1",
        "description": "Expressar preferências culinárias com o verbo GUSTAR e descrever sabores: doce, salgado, picante.",
        "icon": "🍕",
        "stage1_context": {
            "missionTitle": "Módulo 18: Sabores y Gustos",
            "missionDescription": "Aprenda a dizer do que você gosta ou não gosta usando o verbo GUSTAR e a descrever os sabores dos pratos.",
            "audioGuide": "Me gusta el chocolate. Me gustan las frutas. Dulce, salado, picante, amargo, rico."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Dulce / Salado",
                "Portuguese": "Doce / Salgado",
                "Audio": "Dulce / Salado",
                "timeContext": "Sabores fundamentais. 'Un postre dulce' (uma sobremesa doce)."
            },
            {
                "type": "vocab",
                "Spanish": "Picante / Amargo",
                "Portuguese": "Apimentado / Amargo",
                "Audio": "Picante / Amargo",
                "timeContext": "'Picante' é marca registrada da culinária mexicana e peruana."
            },
            {
                "type": "vocab",
                "Spanish": "Rico / Sabroso",
                "Portuguese": "Gostoso / Saboroso",
                "Audio": "Rico / Sabroso",
                "timeContext": "Elogios culinários cotidianos: '¡Esta comida está muy rica!'."
            },
            {
                "type": "vocab",
                "Spanish": "Me gusta...",
                "Portuguese": "Eu gosto de... (singular ou verbo)",
                "Audio": "Me gusta...",
                "timeContext": "Usado quando a coisa que você gosta está no singular ou é uma ação: 'Me gusta el café'."
            },
            {
                "type": "vocab",
                "Spanish": "Me gustan...",
                "Portuguese": "Eu gosto de... (plural)",
                "Audio": "Me gustan...",
                "timeContext": "Usado obrigatoriamente quando a coisa que você gosta está no plural: 'Me gustan las manzanas'."
            },
            {
                "type": "grammar_pill",
                "title": "Estrutura e Concordância do Verbo GUSTAR",
                "rule": "O verbo 'gustar' concorda com o OBJETO que se gosta. Usa-se 'Me gusta' para singular/infinitivo e 'Me gustan' para o plural.",
                "formula": "Me / Te / Le + GUSTA (singular / infinitivo) | GUSTAN (plural)",
                "example": "Me gusta el queso. / Me gusta cantar. / Me gustan las tapas."
            },
            {
                "type": "grammar_pill",
                "title": "Uso de 'Rico / Riquísimo' para Elogiar Refeições",
                "rule": "Em espanhol, 'rico' significa saboroso/gostoso quando aplicado a comidas. Para dizer que estava excelente, diz-se 'está riquísimo/a'.",
                "formula": "Estar + rico / rica / riquísimo / riquísima",
                "example": "¡La paella está riquísima! (NÃO significa que a paella tem dinheiro)"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dizer 'Eu gosto de tacos' (plural) em espanhol?",
                "options": [
                    "Me gustan los tacos",
                    "Me gusta los tacos",
                    "Yo gusto tacos",
                    "Tengo gusto tacos"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como elogiar que um prato de comida está extremamente gostoso?",
                "options": [
                    "¡Está riquísimo!",
                    "¡Tiene dinero!",
                    "¡Es rico de dinero!",
                    "¡Está dulce de plata!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual é a palavra para 'Apimentado' em espanhol?",
                "options": [
                    "Picante",
                    "Salado",
                    "Dulce",
                    "Amargo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'No me gusta el café amargo.'",
                "options": [
                    "Não gosto de café amargo.",
                    "Gosto de café doce.",
                    "O café é picante.",
                    "Não tomo café salgado."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Por que dizemos 'Me GUSTA viajar' no singular?",
                "options": [
                    "Porque após o verbo gustar, ações no infinitivo exigem a forma singular 'gusta'",
                    "Porque viajar é plural",
                    "Porque falta acento",
                    "Não é a forma correta"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Me gusta la comida mexicana porque es picante y rica.",
                "words": [
                    "Me",
                    "gusta",
                    "la",
                    "comida",
                    "mexicana",
                    "porque",
                    "es",
                    "picante",
                    "y",
                    "rica."
                ],
                "translation": "Gosto da comida mexicana porque é apimentada e gostosa."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "¿Te gusta la comida picante, Sofia?",
                "npcMessage": "¿Te gusta la comida picante, Sofia?",
                "translation": "Você gosta de comida apimentada, Sofia?"
            },
            {
                "speaker": "Sofia",
                "npcName": "Sofia",
                "text": "¡Sí, me encanta! Y a ti, ¿qué te gusta?",
                "npcMessage": "¡Sí, me encanta! Y a ti, ¿qué te gusta?",
                "translation": "Sim, eu adoro! E você, do que gosta?"
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "A mí me gustan más los postres dulces.",
                "npcMessage": "A mí me gustan más los postres dulces.",
                "translation": "Eu gosto mais de sobremesas doces."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa a palavra 'Postre'?",
                "options": [
                    {
                        "label": "Sobremesa (doce servido após a refeição)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Poste de iluminação",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual frase sobre preferências está gramaticalmente CORRETA?",
                "options": [
                    {
                        "label": "Me gustan las frutas y me gusta la leche.",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Me gusta las frutas",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) O garçom pergunta se a comida estava boa. Como você responde com um grande elogio em espanhol?",
                "options": [
                    {
                        "label": "¡Muchas gracias! Todo estaba riquísimo.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡Todo estaba millonario!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'A mi hermano no le gustan las comidas saladas.'",
                "options": [
                    {
                        "label": "Meu irmão não gosta de comidas salgadas.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Eu não gosto de comida doce.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a expressão '¡Qué rico!' dita após provar um suco?",
                "options": [
                    {
                        "label": "Que delicioso! / Que gostoso!",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Que suco caro de dinheiro!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_19",
        "title": "19. Compras y Precios",
        "level": "A1",
        "description": "Aprenda a perguntar preços com '¿Cuánto cuesta?', avaliar se algo é caro ou barato e negociar.",
        "icon": "💰",
        "stage1_context": {
            "missionTitle": "Módulo 19: Compras y Precios",
            "missionDescription": "Domine as expressões de comércio: perguntar valores, formas de pagamento e pechinchar em feiras e lojas.",
            "audioGuide": "¿Cuánto cuesta esto? ¿Cuánto cuestan las manzanas? Es muy caro. Es barato."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "¿Cuánto cuesta? / ¿Cuánto cuestan?",
                "Portuguese": "Quanto custa? / Quanto custam?",
                "Audio": "¿Cuánto cuesta? / ¿Cuánto cuestan?",
                "timeContext": "'Cuesta' para um item no singular; 'cuestan' para múltiplos itens no plural."
            },
            {
                "type": "vocab",
                "Spanish": "Es muy caro / Es barato",
                "Portuguese": "É muito caro / É barato",
                "Audio": "Es muy caro / Es barato",
                "timeContext": "Avaliação do preço de um produto nas compras."
            },
            {
                "type": "vocab",
                "Spanish": "Pagar con tarjeta",
                "Portuguese": "Pagar com cartão",
                "Audio": "Pagar con tarjeta",
                "timeContext": "Forma de pagamento eletrônico (crédito ou débito)."
            },
            {
                "type": "vocab",
                "Spanish": "Pagar en efectivo / en metálico",
                "Portuguese": "Pagar em dinheiro vivo",
                "Audio": "Pagar en efectivo / en metálico",
                "timeContext": "'En efectivo' é universal; 'en metálico' é muito usado na Espanha para moedas e notas."
            },
            {
                "type": "vocab",
                "Spanish": "El precio / El descuento",
                "Portuguese": "O preço / O desconto",
                "Audio": "El precio / El descuento",
                "timeContext": "Termos comerciais essenciais nas lojas."
            },
            {
                "type": "grammar_pill",
                "title": "Concordância em Perguntas de Preço (Cuesta vs. Cuestan)",
                "rule": "O verbo 'costar' concorda com a quantidade de objetos perguntados: usa-se 'cuesta' no singular e 'cuestan' no plural.",
                "formula": "¿Cuánto CUESTA + Singular? | ¿Cuánto CUESTAN + Plural?",
                "example": "¿Cuánto cuesta esta camiseta? / ¿Cuánto cuestan estos pantalones?"
            },
            {
                "type": "grammar_pill",
                "title": "Preposições de Meio de Pagamento (Con / En)",
                "rule": "Diz-se 'pagar CON tarjeta' (com cartão) e 'pagar EN efectivo' ou 'EN metálico' (em dinheiro vivo).",
                "formula": "Pagar CON tarjeta | Pagar EN efectivo / EN metálico",
                "example": "¿Puedo pagar con tarjeta? — No, solo en efectivo."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como perguntar o preço de um único livro em espanhol?",
                "options": [
                    "¿Cuánto cuesta este libro?",
                    "¿Cuánto cuestan este libro?",
                    "¿Qué precio es este libro?",
                    "¿Cuánto vale los libros?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como perguntar se aceita pagamento com cartão?",
                "options": [
                    "¿Puedo pagar con tarjeta?",
                    "¿Puedo pagar en tarjeta?",
                    "¿Puedo pagar de tarjeta?",
                    "¿Puedo pagar por tarjeta?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Como dizer que uma camisa está com preço muito alto?",
                "options": [
                    "Es muy cara",
                    "Es muy barata",
                    "Es muy rica",
                    "Es muy dulce"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: '¿Cuánto cuestan estas tres manzanas?'",
                "options": [
                    "Quanto custam estas três maçãs?",
                    "Quanto custa esta maçã?",
                    "Quantas maçãs tem aí?",
                    "Onde vende maçã?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual expressão é usada na Espanha para pagamento em dinheiro vivo?",
                "options": [
                    "Pagar en metálico",
                    "Pagar en papel",
                    "Pagar con billete",
                    "Pagar en moneda"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¿Cuánto cuesta el libro? — Cuesta diez euros.",
                "words": [
                    "¿Cuánto",
                    "cuesta",
                    "el",
                    "libro?",
                    "—",
                    "Cuesta",
                    "diez",
                    "euros."
                ],
                "translation": "Quanto custa o livro? — Custa dez euros."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "Buenos días. ¿Cuánto cuestan estos pantalones?",
                "npcMessage": "Buenos días. ¿Cuánto cuestan estos pantalones?",
                "translation": "Bom dia. Quanto custam estas calças?"
            },
            {
                "speaker": "Vendedor",
                "npcName": "Vendedor",
                "text": "Cuestan treinta euros. Están en oferta.",
                "npcMessage": "Cuestan treinta euros. Están en oferta.",
                "translation": "Custam trinta euros. Estão em promoção."
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "¡Qué bien! ¿Puedo pagar con tarjeta?",
                "npcMessage": "¡Qué bien! ¿Puedo pagar con tarjeta?",
                "translation": "Que ótimo! Posso pagar com cartão?"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Pagar en efectivo'?",
                "options": [
                    {
                        "label": "Pagar em dinheiro vivo / cédulas",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Pagar com cheque",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual pergunta sobre preços está gramaticalmente CORRETA?",
                "options": [
                    {
                        "label": "¿Cuánto cuestan los zapatos?",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "¿Cuánto cuesta los zapatos?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você vai comprar uma lembrança na feira e acha o valor excessivo. O que diz?",
                "options": [
                    {
                        "label": "Disculpe, es un poco caro. ¿Tiene algún descuento?",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡Es muy barato!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Esta camiseta es muy barata, solo cuesta cinco euros.'",
                "options": [
                    {
                        "label": "Esta camiseta é muito barata, só custa cinco euros.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Esta camiseta é cara.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a expressão 'Rebajas' nas vitrines das lojas na Espanha?",
                "options": [
                    {
                        "label": "Liquidação / Promoção de saldos",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Loja fechada",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_20",
        "title": "20. En la Tienda y Supermercado",
        "level": "A1",
        "description": "Vocabulário de compras cotidianas: sacolas, comprovante de compra, troco e ofertas.",
        "icon": "🛒",
        "stage1_context": {
            "missionTitle": "Módulo 20: En la Tienda y Supermercado",
            "missionDescription": "Aprenda a interagir no caixa do supermercado, solicitar comprovante de compra e gerenciar a sacola.",
            "audioGuide": "La bolsa, por favor. El ticket de compra. El cambio. ¿Tiene cambio de 50 euros?"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "La bolsa",
                "Portuguese": "A sacola",
                "Audio": "La bolsa",
                "timeContext": "Sacola de plástico ou papel para levar as compras no supermercado."
            },
            {
                "type": "vocab",
                "Spanish": "El ticket / El recibo",
                "Portuguese": "O comprovante de compra / Nota fiscal",
                "Audio": "El ticket / El recibo",
                "timeContext": "'El ticket' é o termo mais popular na Espanha para o comprovante do caixa."
            },
            {
                "type": "vocab",
                "Spanish": "El cambio",
                "Portuguese": "O troco",
                "Audio": "El cambio",
                "timeContext": "O dinheiro devolvido quando se paga com nota superior ao valor da compra."
            },
            {
                "type": "vocab",
                "Spanish": "La oferta / El descuento",
                "Portuguese": "A oferta / O desconto",
                "Audio": "La oferta / El descuento",
                "timeContext": "Preços reduzidos ou promoções de produtos."
            },
            {
                "type": "vocab",
                "Spanish": "¿Desea una bolsa?",
                "Portuguese": "Deseja uma sacola?",
                "Audio": "¿Desea una bolsa?",
                "timeContext": "Pergunta clássica feita pelo caixa ao finalizar a compra."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença entre Bolsa, Bolso e Bolsillo",
                "rule": "'La bolsa' é a sacola de compras. 'El bolso' é a bolsa feminina de carregar pertences. 'El bolsillo' é o bolso da roupa.",
                "formula": "Sacola de compras ➔ La bolsa | Bolsa pessoal ➔ El bolso | Bolso da roupa ➔ El bolsillo",
                "example": "Llevo la compra en la bolsa y las llaves en el bolsillo."
            },
            {
                "type": "grammar_pill",
                "title": "Solicitações Educadas com QUISIERA / QUIERO",
                "rule": "Ao solicitar um produto ou serviço no mercado, 'Quisiera...' é uma forma extremamente cortês, equivalente a 'eu gostaria'.",
                "formula": "Quisiera + [produto] + por favor",
                "example": "Quisiera dos kilos de naranjas y una bolsa, por favor."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como pedir a nota/comprovante de compra ao caixa?",
                "options": [
                    "El ticket, por favor",
                    "La bolsa, por favor",
                    "El cambio, por favor",
                    "La oferta, por favor"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a palavra para a SACOLA de supermercado em espanhol?",
                "options": [
                    "Bolsa",
                    "Bolso",
                    "Bolsillo",
                    "Bolsón"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Como se chama o troco devolvido pelo caixa?",
                "options": [
                    "El cambio",
                    "El ticket",
                    "La moneda",
                    "El vuelto"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Aquí tiene su ticket y su cambio. ¡Gracias!'",
                "options": [
                    "Aqui está o seu comprovante e o seu troco. Obrigado!",
                    "Aqui está sua sacola e seu cartão.",
                    "Quanto custa essa oferta?",
                    "Não tenho troco agora."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Onde você guarda as moedas do seu troco na calça?",
                "options": [
                    "En el bolsillo",
                    "En la bolsa",
                    "En el ticket",
                    "En la oferta"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Aquí tiene su ticket de compra y su cambio.",
                "words": [
                    "Aquí",
                    "tiene",
                    "su",
                    "ticket",
                    "de",
                    "compra",
                    "y",
                    "su",
                    "cambio."
                ],
                "translation": "Aqui está a sua nota fiscal e o seu troco."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Cajera",
                "npcName": "Cajera",
                "text": "Son quince euros en total. ¿Desea una bolsa?",
                "npcMessage": "Son quince euros en total. ¿Desea una bolsa?",
                "translation": "São quinze euros no total. Deseja uma sacola?"
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "Sí, una bolsa por favor. Pago en efectivo con este billete de 20.",
                "npcMessage": "Sí, una bolsa por favor. Pago en efectivo con este billete de 20.",
                "translation": "Sim, uma sacola por favor. Pago em dinheiro com esta nota de 20."
            },
            {
                "speaker": "Cajera",
                "npcName": "Cajera",
                "text": "Aquí tiene su cambio de 5 euros y su ticket. ¡Buen día!",
                "npcMessage": "Aquí tiene su cambio de 5 euros y su ticket. ¡Buen día!",
                "translation": "Aqui está o seu troco de 5 euros e a sua nota. Bom dia!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'El cambio' no caixa da loja?",
                "options": [
                    {
                        "label": "O troco recebido de uma compra",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "A troca de roupa",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual palavra usar para a 'bolsa de mão' feminina?",
                "options": [
                    {
                        "label": "El bolso (masculino)",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "La bolsa",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) O caixa pergunta se você quer levar o recibo da compra. Como você confirma educadamente?",
                "options": [
                    {
                        "label": "Sí, el ticket por favor.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Sí, el bolso por favor.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Quisiera dos bolsas de plástico, por favor.'",
                "options": [
                    {
                        "label": "Eu gostaria de duas sacolas de plástico, por favor.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Quero dois bolsos.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Como se diz 'Nota de dinheiro' (cédula) em espanhol?",
                "options": [
                    {
                        "label": "Un billete (ex: un billete de 20 euros)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Un ticket",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_21",
        "title": "21. ¿Qué hora es?",
        "level": "A1",
        "description": "Pergunte e informe as horas com precisão usando Es la una, Son las dos, y cuarto, y media e menos cuarto.",
        "icon": "⏰",
        "stage1_context": {
            "missionTitle": "Módulo 21: ¿Qué hora es?",
            "missionDescription": "Aprenda a perguntar e responder as horas em espanhol, entendendo as construções no singular (1h) e no plural (2h em diante).",
            "audioGuide": "¿Qué hora es? Es la una en punto. Son las tres y media. Son las cuatro menos cuarto."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Es la una...",
                "Portuguese": "É uma hora...",
                "Audio": "Es la una...",
                "timeContext": "Forma singular usada exclusivamente para a 1 hora (da manhã ou da tarde)."
            },
            {
                "type": "vocab",
                "Spanish": "Son las dos / tres / cuatro...",
                "Portuguese": "São duas / três / quatro horas...",
                "Audio": "Son las dos / tres / cuatro...",
                "timeContext": "Forma plural usada para todas as horas a partir das 2 até as 12."
            },
            {
                "type": "vocab",
                "Spanish": "...y cuarto",
                "Portuguese": "...e quinze minutos / e um quarto de hora",
                "Audio": "...y cuarto",
                "timeContext": "Usado para indicar 15 minutos passados da hora (ex: 2:15 = son las dos y cuarto)."
            },
            {
                "type": "vocab",
                "Spanish": "...y media",
                "Portuguese": "...e meia / e trinta minutos",
                "Audio": "...y media",
                "timeContext": "Usado para indicar 30 minutos (ex: 3:30 = son las tres y media)."
            },
            {
                "type": "vocab",
                "Spanish": "...menos cuarto / En punto",
                "Portuguese": "...quinze para as / Em ponto",
                "Audio": "...menos cuarto / En punto",
                "timeContext": "'En punto' indica hora exata. 'Menos cuarto' indica 15 minutos restantes para a hora seguinte (3:45 = son las cuatro menos cuarto)."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença entre 'Es la' (1h) e 'Son las' (2h-12h)",
                "rule": "Em espanhol, usa-se 'Es la una' apenas para a hora 1. Para todas as outras horas (2 a 12), usa-se 'Son las'.",
                "formula": "1h ➔ Es la una... | 2h-12h ➔ Son las [número]...",
                "example": "Es la una y diez. (1:10) / Son las cinco y veinte. (5:20)"
            },
            {
                "type": "grammar_pill",
                "title": "Divisão do Relógio: Y Cuarto, Y Media e Menos Cuarto",
                "rule": "Para os minutos: 15 min ➔ 'y cuarto', 30 min ➔ 'y media'. A partir dos 35 min subtrai-se da hora seguinte: 45 min ➔ 'menos cuarto'.",
                "formula": "Hora + y cuarto (15m) | y media (30m) | Hora seguinte + menos cuarto (45m)",
                "example": "Son las cuatro y cuarto. (4:15) / Son las seis menos cuarto. (5:45)"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como responder 'São três e meia' em espanhol?",
                "options": [
                    "Son las tres y media",
                    "Es la tres y media",
                    "Son las tres y treinta",
                    "Son tres y media"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como dizer 'É uma hora em ponto'?",
                "options": [
                    "Es la una en punto",
                    "Son las una en punto",
                    "Es una hora punto",
                    "Son la una punto"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Como dizer que são 4:45 (quinze para as cinco)?",
                "options": [
                    "Son las cinco menos cuarto",
                    "Son las cuatro y cuarenta y cinco",
                    "Son las cinco y cuarto",
                    "Es la cinco menos cuarto"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: '¿A qué hora es la clase de español? — Es a las dos y cuarto.'",
                "options": [
                    "A que horas é a aula de espanhol? — É às duas e quinze.",
                    "Que hora é a aula? — É às uma hora.",
                    "Onde é a aula? — É na sala dois.",
                    "A aula dura quinze minutos."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Por que dizemos 'ES LA una' e não 'SON LAS una'?",
                "options": [
                    "Porque 'una' é número singular e exige o verbo 'ser' no singular",
                    "Porque é feminino",
                    "Porque falta o artigo",
                    "Não há motivo"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¿Qué hora es? — Son las cuatro menos cuarto.",
                "words": [
                    "¿Qué",
                    "hora",
                    "es?",
                    "—",
                    "Son",
                    "las",
                    "cuatro",
                    "menos",
                    "cuarto."
                ],
                "translation": "Que horas são? — São quinze para as quatro."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Viajero",
                "npcName": "Viajero",
                "text": "Disculpe, ¿qué hora es?",
                "npcMessage": "Disculpe, ¿qué hora es?",
                "translation": "Com licença, que horas são?"
            },
            {
                "speaker": "Transeúnte",
                "npcName": "Transeúnte",
                "text": "Son las dos y media en punto.",
                "npcMessage": "Son las dos y media en punto.",
                "translation": "São duas e meia em ponto."
            },
            {
                "speaker": "Viajero",
                "npcName": "Viajero",
                "text": "¡Madre mía! Mi tren sale a las tres menos cuarto.",
                "npcMessage": "¡Madre mía! Mi tren sale a las tres menos cuarto.",
                "translation": "Nossa! Meu trem sai às quinze para as três."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'y cuarto' no relógio?",
                "options": [
                    {
                        "label": "E quinze minutos (um quarto de hora)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "E quatro minutos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual expressão das horas usa a forma verbal 'Es la'?",
                "options": [
                    {
                        "label": "Es la una y quince.",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Es la dos en punto.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está no aeroporto de Madri e a frase no alto-falante diz: 'El vuelo sale a las ocho menos cuarto'. A que horas sai o voo?",
                "options": [
                    {
                        "label": "Às 7:45 (quinze para as oito)",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Às 8:15",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Son las doce de la noche, es medianoche.'",
                "options": [
                    {
                        "label": "São doze horas da noite, é meia-noite.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "São doze horas do dia.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Como se pergunta 'A que horas é o evento?' (diferente de perguntar que horas são agora)?",
                "options": [
                    {
                        "label": "¿A qué hora es el evento?",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "¿Qué hora es el evento?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_22",
        "title": "22. Días de la Semana y Meses",
        "level": "A1",
        "description": "Aprenda os dias da semana (Lunes a Domingo), meses do ano e as regras de uso do artigo 'el'.",
        "icon": "📅",
        "stage1_context": {
            "missionTitle": "Módulo 22: Días de la Semana y Meses",
            "missionDescription": "Domine o calendário em espanhol: agende compromissos, diga os dias da semana e os meses do ano.",
            "audioGuide": "Lunes, martes, miércoles, jueves, viernes, sábado, domingo. Enero, febrero, marzo, abril."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Lunes, Martes, Miércoles",
                "Portuguese": "Segunda, Terça, Quarta-feira",
                "Audio": "Lunes, Martes, Miércoles",
                "timeContext": "Dias úteis de trabalho. Na origem romana, vêm de Lua, Marte e Mercúrio."
            },
            {
                "type": "vocab",
                "Spanish": "Jueves, Viernes",
                "Portuguese": "Quinta, Sexta-feira",
                "Audio": "Jueves, Viernes",
                "timeContext": "Origem nos astros Júpiter e Vênus."
            },
            {
                "type": "vocab",
                "Spanish": "Sábado, Domingo / El fin de semana",
                "Portuguese": "Sábado, Domingo / O fim de semana",
                "Audio": "Sábado, Domingo / El fin de semana",
                "timeContext": "Dias de descanso. 'El fin de semana' abrevia-se popularmente como 'el finde'."
            },
            {
                "type": "vocab",
                "Spanish": "Enero, Febrero, Marzo, Abril...",
                "Portuguese": "Janeiro, Fevereiro, Março, Abril...",
                "Audio": "Enero, Febrero, Marzo, Abril...",
                "timeContext": "Meses do ano. Escrevem-se obrigatoriamente com letra minúscula em espanhol."
            },
            {
                "type": "vocab",
                "Spanish": "El lunes / Los sábados",
                "Portuguese": "Na segunda-feira / Aos sábados",
                "Audio": "El lunes / Los sábados",
                "timeContext": "Em espanhol usa-se o artigo 'el/los' para indicar os dias em que ocorrem ações (sem usar a preposição 'en')."
            },
            {
                "type": "grammar_pill",
                "title": "Uso do Artigo Definido 'EL' para Dias da Semana",
                "rule": "Para dizer 'na segunda' ou 'aos sábados', NÃO se usa a preposição 'en'. Usa-se o artigo 'el' no singular ou 'los' no plural.",
                "formula": "EL + dia no singular (na segunda) | LOS + dia no plural (às segundas)",
                "example": "Tengo un examen el lunes. / Trabajo los sábados. (NÃO diga 'en el lunes')"
            },
            {
                "type": "grammar_pill",
                "title": "Minúsculas em Dias da Semana e Meses",
                "rule": "Em espanhol, os dias da semana e os meses do ano escrevem-se com inicial MINÚSCULA (lunes, mayo), exceto no início de frases.",
                "formula": "dias e meses em minúsculas",
                "example": "Hoy es lunes, 5 de mayo. (NÃO 'Lunes, 5 de Mayo')"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Sexta-feira' em espanhol?",
                "options": [
                    "Viernes",
                    "Jueves",
                    "Miércoles",
                    "Martes"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como traduzir corretamente 'Na segunda-feira eu estudo espanhol'?",
                "options": [
                    "El lunes estudio español",
                    "En lunes estudio español",
                    "En el lunes estudio español",
                    "Por lunes estudio español"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual é o termo coloquial para 'fim de semana' na Espanha?",
                "options": [
                    "El finde",
                    "El fin",
                    "La semana",
                    "El descanso"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Mi cumpleaños es el 12 de octubre.'",
                "options": [
                    "Meu aniversário é no dia 12 de outubro.",
                    "Tenho um evento em outubro.",
                    "O ano começa em outubro.",
                    "Trabalho em outubro."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Como devem ser escritos os dias e meses no meio de um texto em espanhol?",
                "options": [
                    "Com inicial minúscula (ex: el próximo viernes en mayo)",
                    "Sempre com maiúscula",
                    "Com hífen",
                    "Em inglês"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "El examen es el viernes y mi cumpleaños es en mayo.",
                "words": [
                    "El",
                    "examen",
                    "es",
                    "el",
                    "viernes",
                    "y",
                    "mi",
                    "cumpleaños",
                    "es",
                    "en",
                    "mayo."
                ],
                "translation": "A prova é na sexta-feira e meu aniversário é em maio."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Ana",
                "npcName": "Ana",
                "text": "¿Qué haces el fin de semana, Mateo?",
                "npcMessage": "¿Qué haces el fin de semana, Mateo?",
                "translation": "O que você faz no fim de semana, Mateo?"
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "El sábado voy al cine y el domingo descanso.",
                "npcMessage": "El sábado voy al cine y el domingo descanso.",
                "translation": "No sábado vou ao cinema e no domingo descanso."
            },
            {
                "speaker": "Ana",
                "npcName": "Ana",
                "text": "¡Qué buen plan! Nos vemos el lunes en la escuela.",
                "npcMessage": "¡Qué buen plan! Nos vemos el lunes en la escuela.",
                "translation": "Que ótimo plano! Nos vemos na segunda na escola."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) Qual dia da semana vem imediatamente após 'Miércoles'?",
                "options": [
                    {
                        "label": "Jueves (Quinta-feira)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Martes",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual frase contém um erro comum cometido por lusófonos ao falar de datas?",
                "options": [
                    {
                        "label": "'En el lunes tengo clase' (o correto é 'El lunes tengo clase' sem o 'en')",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "'El lunes tengo clase'",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer agendar um compromisso médico para o próximo sábado. O que diz na recepção?",
                "options": [
                    {
                        "label": "Quisiera una cita para el próximo sábado, por favor.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Quiero una cita en el sábado.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Las vacaciones son en julio y agosto.'",
                "options": [
                    {
                        "label": "As férias são em julho e agosto.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "As férias são em junho e maio.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Quais dias da semana possuem forma plural idêntica à forma singular em espanhol?",
                "options": [
                    {
                        "label": "Os dias de segunda a sexta (el lunes / los lunes, el martes / los martes)",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Apenas sábado e domingo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_23",
        "title": "23. Momentos del Día y Frecuencia",
        "level": "A1",
        "description": "Fale sobre horários do dia (por la mañana, por la tarde) e advérbios de frequência (siempre, a veces, nunca).",
        "icon": "🌅",
        "stage1_context": {
            "missionTitle": "Módulo 23: Momentos del Día y Frecuencia",
            "missionDescription": "Descreva a frequência das suas atividades diárias e localize ações nas diferentes etapas do dia.",
            "audioGuide": "Por la mañana estudio. Por la tarde trabajo. Siempre desayuno. A veces voy al parque. Nunca fumo."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Por la mañana / tarde / noche",
                "Portuguese": "De manhã / De tarde / De noite",
                "Audio": "Por la mañana / tarde / noche",
                "timeContext": "Estrutura padrão em espanhol para indicar o período do dia em que ocorre uma ação."
            },
            {
                "type": "vocab",
                "Spanish": "A mediodía / A medianoche",
                "Portuguese": "Ao meio-dia / À meia-noite",
                "Audio": "A mediodía / A medianoche",
                "timeContext": "Expressões de momentos exatos de transição do dia e da noite."
            },
            {
                "type": "vocab",
                "Spanish": "Siempre / Todos los días",
                "Portuguese": "Sempre / Todos os dias",
                "Audio": "Siempre / Todos los días",
                "timeContext": "Advérbios de frequência máxima (100% de ocorrência)."
            },
            {
                "type": "vocab",
                "Spanish": "A veces / De vez en cuando",
                "Portuguese": "Às vezes / De vez em quando",
                "Audio": "A veces / De vez en cuando",
                "timeContext": "Advérbios de frequência intermediária ou ocasional."
            },
            {
                "type": "vocab",
                "Spanish": "Nunca / Jamás",
                "Portuguese": "Nunca / Jamais",
                "Audio": "Nunca / Jamás",
                "timeContext": "Advérbios de negação total e frequência nula (0%)."
            },
            {
                "type": "grammar_pill",
                "title": "Estrutura 'Por la' para Períodos do Dia",
                "rule": "Para indicar o período em que se realiza uma ação sem especificar as horas, usa-se a preposição POR: 'por la mañana', 'por la tarde', 'por la noche'.",
                "formula": "POR LA + mañana / tarde / noche",
                "example": "Estudio español por la mañana y trabajo por la tarde."
            },
            {
                "type": "grammar_pill",
                "title": "Regra da Dupla Negação com 'Nunca'",
                "rule": "Se o advérbio 'nunca' é colocado DEPOIS do verbo, a partícula de negação 'no' deve obrigatoriamente vir ANTES do verbo. Se 'nunca' vier antes, o 'no' é omitido.",
                "formula": "No + Verbo + NUNCA | NUNCA + Verbo",
                "example": "No voy nunca al cine los lunes. / Nunca voy al cine los lunes."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dizer 'Eu estudo de manhã' em espanhol?",
                "options": [
                    "Estudio por la mañana",
                    "Estudio en la mañana",
                    "Estudio de mañana",
                    "Estudio para mañana"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual frase de negação com 'nunca' está gramaticalmente CORRETA?",
                "options": [
                    "No como nunca carne / Nunca como carne",
                    "Nunca no como carne",
                    "Como nunca carne",
                    "No como carne nunca no"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual expressão significa 'De vez em quando'?",
                "options": [
                    "De vez en cuando",
                    "Siempre",
                    "Todos los días",
                    "A mediodía"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Siempre desayuno a las ocho de la mañana.'",
                "options": [
                    "Sempre tomo café da manhã às oito da manhã.",
                    "Às vezes almoço às oito.",
                    "Nunca tomo café da manhã.",
                    "Tomo café à tarde."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual preposição usar para especificar o momento exato de meio-dia?",
                "options": [
                    "A mediodía",
                    "En mediodía",
                    "Por mediodía",
                    "De mediodía"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Siempre trabajo por la mañana y a veces leo por la noche.",
                "words": [
                    "Siempre",
                    "trabajo",
                    "por",
                    "la",
                    "mañana",
                    "y",
                    "a",
                    "veces",
                    "leo",
                    "por",
                    "la",
                    "noche."
                ],
                "translation": "Sempre trabalho de manhã e às vezes leio de noite."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Laura",
                "npcName": "Laura",
                "text": "¿Qué haces por la tarde después de clase?",
                "npcMessage": "¿Qué haces por la tarde después de clase?",
                "translation": "O que você faz de tarde depois da aula?"
            },
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "A veces voy al gimnasio y siempre estudio en la biblioteca.",
                "npcMessage": "A veces voy al gimnasio y siempre estudio en la biblioteca.",
                "translation": "Às vezes vou à academia e sempre estudo na biblioteca."
            },
            {
                "speaker": "Laura",
                "npcName": "Laura",
                "text": "¡Yo nunca voy al gimnasio! Prefiero caminar.",
                "npcMessage": "¡Yo nunca voy al gimnasio! Prefiero caminar.",
                "translation": "Eu nunca vou à academia! Prefiro caminhar."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa a expressão 'A mediodía'?",
                "options": [
                    {
                        "label": "Ao meio-dia (12:00h)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "À meia-noite",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que a frase 'No voy nunca' é permitida em espanhol?",
                "options": [
                    {
                        "label": "Porque a língua espanhola aceita e exige a dupla negação quando 'nunca' vem após o verbo",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Porque é uma exceção da internet",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer contar à sua professora que pratica espanhol diariamente sem falhar. O que diz?",
                "options": [
                    {
                        "label": "Practico español todos los días.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Practico español nunca.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'De vez en cuando voy a cenar a un restaurante italiano.'",
                "options": [
                    {
                        "label": "De vez em quando vou jantar em um restaurante italiano.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Sempre vou almoçar no italiano.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Como se diz a palavra 'Madrugada' em espanhol ao referir-se ao período entre a meia-noite e o amanhecer?",
                "options": [
                    {
                        "label": "La madrugada (ex: por la madrugada)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "La nochecita",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_24",
        "title": "24. Verbos de Rutina I",
        "level": "A1",
        "description": "Descreva sua rotina diária usando verbos reflexivos como levantarse, ducharse, desayunar e acostarse.",
        "icon": "🔄",
        "stage1_context": {
            "missionTitle": "Módulo 24: Verbos de Rutina I",
            "missionDescription": "Aprenda a narrar as ações do seu dia a dia, desde o momento de acordar até a hora de ir dormir.",
            "audioGuide": "Me levanto a las 7:00. Me ducho, desayuno, trabajo y me acuesto a las 11:00."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Levantarse",
                "Portuguese": "Levantar-se (Yo me levanto)",
                "Audio": "Levantarse",
                "timeContext": "Verbo reflexivo de abertura da rotina matinal."
            },
            {
                "type": "vocab",
                "Spanish": "Ducharse / Lavarse",
                "Portuguese": "Tomar banho de chuveiro / Lavar-se",
                "Audio": "Ducharse / Lavarse",
                "timeContext": "'Ducharse' (tomar ducha/banho) é o termo padrão na Espanha."
            },
            {
                "type": "vocab",
                "Spanish": "Desayunar / Comer / Cenar",
                "Portuguese": "Tomar café da manhã / Almoçar / Jantar",
                "Audio": "Desayunar / Comer / Cenar",
                "timeContext": "Em espanhol há verbos próprios para as refeições cotidianas no infinitivo."
            },
            {
                "type": "vocab",
                "Spanish": "Trabajar / Estudiar",
                "Portuguese": "Trabalhar / Estudar",
                "Audio": "Trabajar / Estudiar",
                "timeContext": "Atividades centrais do período diurno."
            },
            {
                "type": "vocab",
                "Spanish": "Acostarse",
                "Portuguese": "Deitar-se / Ir dormir (Yo me acuesto)",
                "Audio": "Acostarse",
                "timeContext": "Verbo reflexivo com mudança vocálica O ➔ UE na conjugação no presente (me acuesto)."
            },
            {
                "type": "grammar_pill",
                "title": "Colocação dos Pronomes Reflexivos na Rotina",
                "rule": "Verbos de rotina reflexivos usam pronomes reflexivos antes do verbo conjugado: me, te, se, nos, os, se.",
                "formula": "Pronome Reflexivo (me/te/se) + Verbo Conjugado",
                "example": "Yo me levanto a las siete. / ¿A qué hora te acuestas tú?"
            },
            {
                "type": "grammar_pill",
                "title": "Verbos Próprios para Refeições (Sem 'Tomar')",
                "rule": "Diferente do português 'tomar café / jantar', em espanhol usam-se os verbos diretos: desayunar, almorzar e cenar.",
                "formula": "Desayunar = tomar café | Almorzar = almoçar | Cenar = jantar",
                "example": "Desayuno pan con café. / Ceno una ensalada suave."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dizer 'Eu me levanto às 7 da manhã'?",
                "options": [
                    "Me levanto a las siete de la mañana",
                    "Yo levanto a las siete",
                    "Me levanto en las siete",
                    "Soy levanto a las siete"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como se diz o verbo 'Tomar café da manhã' como uma única palavra em espanhol?",
                "options": [
                    "Desayunar",
                    "Tomar café",
                    "Comer mañana",
                    "Hacer desayuno"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual é a conjugação correta de 1ª pessoa para o verbo reflexivo 'acostarse' (deitar-se)?",
                "options": [
                    "Me acuesto",
                    "Me acosto",
                    "Yo acuesto",
                    "Me acostar"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Primero me ducho y después desayuno.'",
                "options": [
                    "Primeiro tomo banho e depois tomo café da manhã.",
                    "Primeiro me levanto e depois trabalho.",
                    "Tomando banho de noite.",
                    "Não tomo café."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual pronome reflexivo acompanha o pronome 'tú' (tu/você)?",
                "options": [
                    "Te (ex: tú te duchas)",
                    "Me",
                    "Se",
                    "Nos"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Me levanto a las siete y me acuesto a las diez.",
                "words": [
                    "Me",
                    "levanto",
                    "a",
                    "las",
                    "siete",
                    "y",
                    "me",
                    "acuesto",
                    "a",
                    "las",
                    "diez."
                ],
                "translation": "Levanto-me às sete e deito-me às dez."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¿A qué hora te levantas normalmente, Elena?",
                "npcMessage": "¿A qué hora te levantas normalmente, Elena?",
                "translation": "A que horas você se levanta normalmente, Elena?"
            },
            {
                "speaker": "Elena",
                "npcName": "Elena",
                "text": "Me levanto a las seis y media. Me ducho y desayuno rápido.",
                "npcMessage": "Me levanto a las seis y media. Me ducho y desayuno rápido.",
                "translation": "Levanto-me às seis e meia. Tomo banho e tomo café rápido."
            },
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¡Qué temprano! Yo me levanto a las ocho.",
                "npcMessage": "¡Qué temprano! Yo me levanto a las ocho.",
                "translation": "Que cedo! Eu me levanto às oito."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa a palavra 'Temprano' em frases sobre rotina?",
                "options": [
                    {
                        "label": "Cedo (em relação ao horário)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Tarde",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que o verbo 'acostarse' muda de 'o' para 'ue' ao conjugar (yo me acuesto)?",
                "options": [
                    {
                        "label": "Porque é um verbo irregular com ditongação (O ➔ UE) no presente do indicativo",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "É um erro de escrita",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Alguém pergunta o que você faz à noite antes de dormir. O que responde?",
                "options": [
                    {
                        "label": "Ceno con mi familia y me acuesto.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Desayuno en la cama",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Mis padres se levantan a las siete de la mañana.'",
                "options": [
                    {
                        "label": "Meus pais se levantam às sete da manhã.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Meus pais vão dormir às sete.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Como se diz 'Almoçar' em espanhol na América Latina e Espanha?",
                "options": [
                    {
                        "label": "Almorzar (ou 'comer' na Espanha)",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Almoçar",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_25",
        "title": "25. Verbos de Movimiento",
        "level": "A1",
        "description": "Expressões de deslocamento no espaço usando Ir, Venir, Llegar e Salir com contrações obrigatórias.",
        "icon": "🚶",
        "stage1_context": {
            "missionTitle": "Módulo 25: Verbos de Movimiento",
            "missionDescription": "Aprenda a descrever seus trajetos cotidianos e saiba quando usar os verbos Ir, Venir, Llegar e Salir.",
            "audioGuide": "Voy al trabajo. Vengo de casa. Llego a las nueve. Salgo de la oficina."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Ir (Yo voy, tú vas, él va)",
                "Portuguese": "Ir (Eu vou, você vai, ele vai)",
                "Audio": "Ir",
                "timeContext": "Verbo totalmente irregular no presente. Deslocamento para longe de onde você está."
            },
            {
                "type": "vocab",
                "Spanish": "Venir (Yo vengo, tú vienes)",
                "Portuguese": "Vir (Eu venho, você vem)",
                "Audio": "Venir",
                "timeContext": "Deslocamento em direção ao lugar onde o falante se encontra no momento."
            },
            {
                "type": "vocab",
                "Spanish": "Llegar (Yo llego)",
                "Portuguese": "Chegar (Eu chego)",
                "Audio": "Llegar",
                "timeContext": "Indica o ponto final de um trajeto ou horário de chegada."
            },
            {
                "type": "vocab",
                "Spanish": "Salir (Yo salgo)",
                "Portuguese": "Sair (Eu saio)",
                "Audio": "Salir",
                "timeContext": "Primeira pessoa irregular (yo salgo). Indica partida de um local."
            },
            {
                "type": "vocab",
                "Spanish": "Volver / Regresar",
                "Portuguese": "Voltar / Regressar",
                "Audio": "Volver / Regresar",
                "timeContext": "Retorno a um local de origem (yo vuelvo / yo regreso)."
            },
            {
                "type": "grammar_pill",
                "title": "Contracões Obrigatórias AL e DEL",
                "rule": "Em espanhol existem APENAS duas contrações obrigatórias na língua inteira: 'a + el = AL' e 'de + el = DEL'.",
                "formula": "a + el ➔ AL | de + el ➔ DEL",
                "example": "Voy al trabajo (a + el trabajo). / Vengo del gimnasio (de + el gimnasio)."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença entre IR (afastar-se) e VENIR (aproximar-se)",
                "rule": "Use IR para ir a um lugar onde você NÃO está agora. Use VENIR para mover-se em direção ao local onde você ESTÁ no momento em que fala.",
                "formula": "Ir ➔ deslocar-se para longe | Venir ➔ deslocar-se para onde estou",
                "example": "Voy a la universidad. (estou em casa) / Ven a mi casa ahora. (estou em casa)"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dizer 'Eu vou ao mercado' aplicando a contração correta?",
                "options": [
                    "Voy al mercado",
                    "Voy a el mercado",
                    "Voy en el mercado",
                    "Voy para mercado"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como dizer 'Eu venho do trabalho' com a contração correta?",
                "options": [
                    "Vengo del trabajo",
                    "Vengo de el trabajo",
                    "Vengo desde el trabajo",
                    "Vengo al trabajo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual é a conjugação correta de 1ª pessoa (Yo) para o verbo 'Salir'?",
                "options": [
                    "Yo salgo",
                    "Yo salo",
                    "Yo salgo de",
                    "Yo saler"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Llego a Madrid a las tres de la tarde.'",
                "options": [
                    "Chego a Madri às três da tarde.",
                    "Saio de Madri às três.",
                    "Vou a Madri de tarde.",
                    "Moro em Madri há três anos."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Quantas contrações gramaticais existem na língua espanhola?",
                "options": [
                    "Apenas duas: AL e DEL",
                    "Quatro: al, del, nel, pel",
                    "Nenhuma",
                    "Mais de dez como no português"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Voy al centro por la mañana y vuelvo a casa por la tarde.",
                "words": [
                    "Voy",
                    "al",
                    "centro",
                    "por",
                    "la",
                    "mañana",
                    "y",
                    "vuelvo",
                    "a",
                    "casa",
                    "por",
                    "la",
                    "tarde."
                ],
                "translation": "Vou ao centro de manhã e volto para casa de tarde."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "¿A qué hora sales del trabajo hoy, Valeria?",
                "npcMessage": "¿A qué hora sales del trabajo hoy, Valeria?",
                "translation": "A que horas você sai do trabalho hoje, Valeria?"
            },
            {
                "speaker": "Valeria",
                "npcName": "Valeria",
                "text": "Salgo a las seis y voy directamente al gimnasio. ¿Y tú?",
                "npcMessage": "Salgo a las seis y voy directamente al gimnasio. ¿Y tú?",
                "translation": "Saio às seis e vou diretamente à academia. E você?"
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "Yo llego a casa a las siete y me quedo a descansar.",
                "npcMessage": "Yo llego a casa a las siete y me quedo a descansar.",
                "translation": "Eu chego em casa às sete e fico descansando."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Salir de fiesta'?",
                "options": [
                    {
                        "label": "Sair para balada / festejar com amigos",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Ir embora de uma festa chata",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Quais são as únicas contrações possíveis da junção preposição + artigo masculino no espanhol?",
                "options": [
                    {
                        "label": "AL (a + el) e DEL (de + el)",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "EM (en + el) e DA (de + la)",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está em um restaurante e telefona para um amigo dizendo para ele VIR ao restaurante onde você já está sentado. O que diz?",
                "options": [
                    {
                        "label": "¡Ven al restaurante ahora, te espero aquí!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡Va al restaurante!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Mañana viajamos al sur de España.'",
                "options": [
                    {
                        "label": "Amanhã viajamos para o sul da Espanha.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Hoje chegamos do sul da Espanha.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que o verbo 'Volver' faz no presente para 1ª pessoa (Yo)?",
                "options": [
                    {
                        "label": "Yo vuelvo (irregular com ditongação O ➔ UE)",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Yo volvo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_26",
        "title": "26. Estaciones y Clima",
        "level": "A1",
        "description": "Fale sobre as quatro estações do ano, condições meteorológicas e previsões do tempo.",
        "icon": "☀️",
        "stage1_context": {
            "missionTitle": "Módulo 26: Estaciones y Clima",
            "missionDescription": "Aprenda a descrever o clima e o tempo atmosférico em espanhol usando o verbo impessoal HACER e verbos meteorológicos.",
            "audioGuide": "El verano, el invierno, la primavera, el otoño. Hace frío, hace calor, llueve mucho."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "El verano / El invierno",
                "Portuguese": "O verão / O inverno",
                "Audio": "El verano / El invierno",
                "timeContext": "Estações extremas do ano. Verão (quente) e inverno (frio)."
            },
            {
                "type": "vocab",
                "Spanish": "La primavera / El otoño",
                "Portuguese": "A primavera / O outono",
                "Audio": "La primavera / El otoño",
                "timeContext": "Estações intermediárias do ano."
            },
            {
                "type": "vocab",
                "Spanish": "Hace frío / Hace calor",
                "Portuguese": "Faz frio / Faz calor",
                "Audio": "Hace frío / Hace calor",
                "timeContext": "Condição do clima expressa obrigatoriamente com o verbo impessoal HACER."
            },
            {
                "type": "vocab",
                "Spanish": "Hace buen tiempo / Hace mal tiempo",
                "Portuguese": "Faz bom tempo / Faz tempo ruim",
                "Audio": "Hace buen tiempo / Hace mal tiempo",
                "timeContext": "Avaliação geral das condições meteorológicas do dia."
            },
            {
                "type": "vocab",
                "Spanish": "Llueve / Nieva",
                "Portuguese": "Chove / Neva",
                "Audio": "Llueve / Nieva",
                "timeContext": "Verbos impessoal de fenômenos da natureza: llover ➔ llueve e nevar ➔ nieva."
            },
            {
                "type": "grammar_pill",
                "title": "Uso do Verbo Impessoal HACER para Clima",
                "rule": "Em espanhol, o tempo atmosférico é expressado com o verbo HACER no singular: hace frío, hace calor, hace viento, hace sol. Não use o verbo estar/tener.",
                "formula": "Hace + frío / calor / viento / sol / buen tiempo",
                "example": "Hoy hace mucho calor en Sevilla. / En invierno hace frío."
            },
            {
                "type": "grammar_pill",
                "title": "Verbos Meteorológicos Irregulares (Llover e Nevar)",
                "rule": "Os verbos 'llover' e 'nevar' são impessoais e sofrem ditongação no presente: llover ➔ llueve (O➔UE) e nevar ➔ nieva (E➔IE).",
                "formula": "Llover ➔ Llueve | Nevar ➔ Nieva",
                "example": "En otoño llueve frecuentemente. / En la montaña nieva."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dizer 'Hoje está fazendo muito calor' em espanhol?",
                "options": [
                    "Hoy hace mucho calor",
                    "Hoy está mucho calor",
                    "Hoy tiene mucho calor",
                    "Hoy es mucho calor"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como se diz 'Chove' (tempo presente) em espanhol?",
                "options": [
                    "Llueve",
                    "Lliove",
                    "Lluvia",
                    "Lloviendo está"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual é a estação do ano 'O inverno' em espanhol?",
                "options": [
                    "El invierno",
                    "El verano",
                    "El otoño",
                    "La primavera"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'En verano hace sol y hace buen tiempo.'",
                "options": [
                    "No verão faz sol e faz bom tempo.",
                    "No inverno faz frio.",
                    "Na primavera chove muito.",
                    "No outono neva."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Por que é INCORRETO dizer 'Está frío' para dizer que o tempo lá fora está frio?",
                "options": [
                    "Porque clima atmosférico exige o verbo impessoal HACER ('Hace frío')",
                    "Porque 'frío' é verbo",
                    "Porque falta o artigo",
                    "Não é incorreto"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "En invierno hace mucho frío y a veces nieva.",
                "words": [
                    "En",
                    "invierno",
                    "hace",
                    "mucho",
                    "frío",
                    "y",
                    "a",
                    "veces",
                    "nieva."
                ],
                "translation": "No inverno faz muito frio e às vezes neva."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Turista",
                "npcName": "Turista",
                "text": "¿Qué tal el clima en Madrid hoy?",
                "npcMessage": "¿Qué tal el clima en Madrid hoy?",
                "translation": "Como está o clima em Madri hoje?"
            },
            {
                "speaker": "Guía",
                "npcName": "Guía",
                "text": "Hoy hace muy buen tiempo, hace sol y no llueve.",
                "npcMessage": "Hoy hace muy buen tiempo, hace sol y no llueve.",
                "translation": "Hoje faz um tempo muito bom, faz sol e não chove."
            },
            {
                "speaker": "Turista",
                "npcName": "Turista",
                "text": "¡Qué fantástico! Vamos a pasear por el parque.",
                "npcMessage": "¡Qué fantástico! Vamos a pasear por el parque.",
                "translation": "Que fantástico! Vamos passear pelo parque."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) Qual é a tradução de 'La primavera'?",
                "options": [
                    {
                        "label": "A primavera",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "O outono",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual verbo impessoal é usado para dizer que faz vento (ventania)?",
                "options": [
                    {
                        "label": "Hace viento (Verbo Hacer)",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Está viento",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está olhando pela janela na Espanha e vê flocos de neve caindo. O que diz?",
                "options": [
                    {
                        "label": "¡Mira, nieva! Hace mucho frío.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡Hace mucho calor!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Hoy hace mal tiempo porque llueve y hace viento.'",
                "options": [
                    {
                        "label": "Hoje faz tempo ruim porque chove e faz vento.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Hoje faz bom tempo e faz sol.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a forma ditongada do verbo 'nevar' na 3ª pessoa?",
                "options": [
                    {
                        "label": "Nieva (troca E por IE)",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Neva",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_27",
        "title": "27. Descripción Física y Personalidad",
        "level": "A1",
        "description": "Descreva aparência física, traços de caráter e traços corporais usando SER e TENER.",
        "icon": "👤",
        "stage1_context": {
            "missionTitle": "Módulo 27: Descripción Física y Personalidad",
            "missionDescription": "Aprenda a descrever pessoas de forma detalhada: altura, cor de cabelo, olhos e virtudes de personalidade.",
            "audioGuide": "Ella es alta, simpática e inteligente. Tiene los ojos verdes y el pelo rizado."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Alto / Bajo",
                "Portuguese": "Alto / Baixo",
                "Audio": "Alto / Bajo",
                "timeContext": "Adjetivos de estatura física."
            },
            {
                "type": "vocab",
                "Spanish": "Rubio / Moreno / Pelirrojo",
                "Portuguese": "Loiro / Moreno / Ruivo",
                "Audio": "Rubio / Moreno / Pelirrojo",
                "timeContext": "Cor de cabelo e pele. 'Pelirrojo/a' é a pessoa ruiva."
            },
            {
                "type": "vocab",
                "Spanish": "Simpático / Amable",
                "Portuguese": "Simpático / Gentil, Amável",
                "Audio": "Simpático / Amable",
                "timeContext": "Traços de personalidade positiva."
            },
            {
                "type": "vocab",
                "Spanish": "Trabajador / Inteligente",
                "Portuguese": "Trabalhador / Inteligente",
                "Audio": "Trabajador / Inteligente",
                "timeContext": "Qualidades morais e intelectuais."
            },
            {
                "type": "vocab",
                "Spanish": "Tiene ojos azules / Tiene pelo largo",
                "Portuguese": "Tem olhos azuis / Tem cabelo comprido",
                "Audio": "Tiene ojos azules / Tiene pelo largo",
                "timeContext": "Descrição de características específicas do corpo com o verbo TENER."
            },
            {
                "type": "grammar_pill",
                "title": "Uso de SER vs TENER para Descrição Pessoal",
                "rule": "Use SER para características físicas gerais e caráter (es alto, es amable). Use TENER para partes do corpo específicas (tiene ojos verdes, tiene pelo liso).",
                "formula": "SER + [adjetivo geral] | TENER + [parte do corpo]",
                "example": "Él es alto y simpático. Tiene los ojos castaños y el pelo corto."
            },
            {
                "type": "grammar_pill",
                "title": "Vocabulário de Cabelo (Pelo) e Olhos (Ojos)",
                "rule": "A palavra para cabelo humano é 'el pelo'. Cabelo cacheado é 'pelo rizado', liso é 'pelo liso' e ruivo é o adjetivo 'pelirrojo/a'.",
                "formula": "Pelo liso / rizado / largo / corto | Pelirrojo/a",
                "example": "Mi hermana es pelirroja y tiene el pelo rizado."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como descrever uma pessoa que é ruiva em espanhol?",
                "options": [
                    "Es pelirroja",
                    "Es roja",
                    "Tiene pelo rojo persona",
                    "Es rubia roja"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual verbo usar para falar da cor dos olhos de alguém?",
                "options": [
                    "Tiene los ojos verdes (Verbo TENER)",
                    "Es los ojos verdes (Verbo SER)",
                    "Está los ojos verdes",
                    "Hace los ojos verdes"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual é a palavra para cabelo cacheado/crespo em espanhol?",
                "options": [
                    "Pelo rizado",
                    "Pelo liso",
                    "Pelo corto",
                    "Pelo largo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Mi hermano es alto, muy amable y tiene el pelo negro.'",
                "options": [
                    "Meu irmão é alto, muito gentil e tem o cabelo preto.",
                    "Meu irmão é baixo e simpático.",
                    "Meu irmão tem olhos pretos.",
                    "Meu irmão é loiro."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Por que dizemos 'Él ES inteligente' mas dizemos 'Él TIENE los ojos azules'?",
                "options": [
                    "Porque inteligente é adjetivo de caráter (SER) e olhos é parte do corpo (TENER)",
                    "Porque inteligente é plural",
                    "Porque olhos é verbo",
                    "Não há motivo"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Mi amiga Sofía es alta, rubia y muy inteligente.",
                "words": [
                    "Mi",
                    "amiga",
                    "Sofía",
                    "es",
                    "alta,",
                    "rubia",
                    "y",
                    "muy",
                    "inteligente."
                ],
                "translation": "Minha amiga Sofía é alta, loira e muito inteligente."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¿Cómo es tu nueva profesora, Lucía?",
                "npcMessage": "¿Cómo es tu nueva profesora, Lucía?",
                "translation": "Como é a sua nova professora, Lucía?"
            },
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "Es muy alta, simpática y paciente. Tiene el pelo rizado.",
                "npcMessage": "Es muy alta, simpática y paciente. Tiene el pelo rizado.",
                "translation": "É muito alta, simpática e paciente. Tem o cabelo cacheado."
            },
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¡Qué suerte! Las buenas profesoras son geniales.",
                "npcMessage": "¡Qué suerte! Las buenas profesoras son geniales.",
                "translation": "Que sorte! As boas professoras são geniais."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Pelirrojo'?",
                "options": [
                    {
                        "label": "Ruivo (pessoa com cabelo vermelho natural)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Loiro",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Como se escreve 'cabelo comprido' em espanhol?",
                "options": [
                    {
                        "label": "Pelo largo (lembre-se que 'largo' significa comprido)",
                        "isCorrect": true,
                        "explanation": "Exato! 'Largo' é um falso amigo famoso."
                    },
                    {
                        "label": "Pelo ancho",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você vai descrever seu melhor amigo em uma redação. O que escreve?",
                "options": [
                    {
                        "label": "Mi amigo es muy trabajador, inteligente y alegre.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Mi amigo tiene muy inteligente",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'La chica rubia tiene los ojos azules y es muy baja.'",
                "options": [
                    {
                        "label": "A garota loira tem olhos azuis e é muito baixa.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "A garota morena é alta.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'Amable' e 'Simpático'?",
                "options": [
                    {
                        "label": "'Amable' refere-se à gentileza/educação no tratamento; 'Simpático' ao carisma agradável",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Não há diferença",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_28",
        "title": "28. La Familia y Parentesco",
        "level": "A1",
        "description": "Nomeie os membros da família (padres, hijos, abuelos, tíos, primos) e entenda termos de parentesco.",
        "icon": "👨‍👩‍👧‍👦",
        "stage1_context": {
            "missionTitle": "Módulo 28: La Familia y Parentesco",
            "missionDescription": "Conheça o vocabulário da árvore genealógica em espanhol e saiba falar dos seus parentes.",
            "audioGuide": "Mis padres, mi madre, mi padre, mis hermanos, mis abuelos, mis tíos, mis primos."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "El padre / La madre (Los padres)",
                "Portuguese": "O pai / A mãe (Os pais)",
                "Audio": "El padre / La madre (Los padres)",
                "timeContext": "'Los padres' refere-se especificamente ao pai e à mãe reunidos."
            },
            {
                "type": "vocab",
                "Spanish": "El hijo / La hija",
                "Portuguese": "O filho / A filha",
                "Audio": "El hijo / La hija",
                "timeContext": "Descendentes diretos de uma família."
            },
            {
                "type": "vocab",
                "Spanish": "El hermano / La hermana",
                "Portuguese": "O irmão / A irmã",
                "Audio": "El hermano / La hermana",
                "timeContext": "Irmãos. O plural 'los hermanos' pode referir-se a irmãos e irmãs."
            },
            {
                "type": "vocab",
                "Spanish": "El abuelo / La abuela",
                "Portuguese": "O avô / A avó",
                "Audio": "El abuelo / La abuela",
                "timeContext": "Avós. 'Los abuelos' refere-se ao avô e à avó."
            },
            {
                "type": "vocab",
                "Spanish": "El tío / La tía / El primo / La prima",
                "Portuguese": "O tio / A tia / O primo / A prima",
                "Audio": "El tío / La tía / El primo / La prima",
                "timeContext": "Parentes da família estendida."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença entre 'Los padres' e 'Los parientes'",
                "rule": "'Los padres' significa unicamente Pai e Mãe. Para falar do grupo geral de parentes (tios, primos, avós), usa-se o termo 'los parientes'.",
                "formula": "Los padres = Pai + Mãe | Los parientes = Parentes em geral",
                "example": "Mis padres viven conmigo. Mis parientes viven en Argentina."
            },
            {
                "type": "grammar_pill",
                "title": "Plural Masculino Genérico em Parentesco",
                "rule": "O plural masculino reúne o casal ou grupo misto: 'los abuelos' (avô e avó), 'los hijos' (filhos e filhas), 'los tíos' (tio e tia).",
                "formula": "Los abuelos = avô + avó | Los hijos = filhos + filhas",
                "example": "Mis abuelos son ancianos. / Tengo dos hijos (un niño y una niña)."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Meus pais' (pai e mãe) em espanhol?",
                "options": [
                    "Mis padres",
                    "Mis parientes",
                    "Mis papás solos",
                    "Mis familias"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a palavra para 'Parentes' em geral (tios, primos, avós)?",
                "options": [
                    "Los parientes",
                    "Los padres",
                    "Los primos solos",
                    "Las familias"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Como se diz 'Minha avó' em espanhol?",
                "options": [
                    "Mi abuela",
                    "Mi tía",
                    "Mi madre",
                    "Mi prima"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Tengo dos hermanos y tres primos.'",
                "options": [
                    "Tenho dois irmãos e três primos.",
                    "Tenho dois pais e três tios.",
                    "Tenho dois avós e três filhos.",
                    "Tenho três irmãos."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Por que é um erro dizer 'mis parientes' quando você quer falar apenas do seu pai e da sua mãe?",
                "options": [
                    "Porque 'parientes' inclui toda a família e 'padres' é exclusivo para pai e mãe",
                    "Porque parientes é espanhol antigo",
                    "Porque falta acento",
                    "Não é erro"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Mi madre es profesora y mi padre es médico.",
                "words": [
                    "Mi",
                    "madre",
                    "es",
                    "profesora",
                    "y",
                    "mi",
                    "padre",
                    "es",
                    "médico."
                ],
                "translation": "Minha mãe é professora e meu pai é médico."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Gabriel",
                "npcName": "Gabriel",
                "text": "¿Tienes una familia grande, Sofía?",
                "npcMessage": "¿Tienes una familia grande, Sofía?",
                "translation": "Você tem uma família grande, Sofía?"
            },
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "Sí, tengo tres hermanos, cuatro tíos y muchos primos.",
                "npcMessage": "Sí, tengo tres hermanos, cuatro tíos y muchos primos.",
                "translation": "Sim, tenho três irmãos, quatro tios e muitos primos."
            },
            {
                "speaker": "Gabriel",
                "npcName": "Gabriel",
                "text": "¡Qué familia más numerosa y bonita!",
                "npcMessage": "¡Qué familia más numerosa y bonita!",
                "translation": "Que família tão numerosa e bonita!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) Qual é a tradução de 'Los abuelos'?",
                "options": [
                    {
                        "label": "Os avós (avô e avó)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Os tios",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) O que significa a palavra 'Los parientes' em um texto em espanhol?",
                "options": [
                    {
                        "label": "Os parentes em geral (tios, primos, sobrinhos)",
                        "isCorrect": true,
                        "explanation": "Exato! É um falso amigo parcial muito importante."
                    },
                    {
                        "label": "Apenas o pai e a mãe",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está mostrando uma foto da sua mãe e do seu pai juntos. Como os apresenta?",
                "options": [
                    {
                        "label": "Ellos son mis padres.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Ellos son mis parientes directos solo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Mi tía Carmen es la hermana de mi madre.'",
                "options": [
                    {
                        "label": "Minha tia Carmen é a irmã da minha mãe.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Minha avó é a mãe da minha mãe.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Como se diz 'Gêmeos' (irmãos nascidos do mesmo parto) em espanhol?",
                "options": [
                    {
                        "label": "Mellizos / Gemelos",
                        "isCorrect": true,
                        "explanation": "Fantástico! Ambos os termos são usados."
                    },
                    {
                        "label": "Dobles",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_29",
        "title": "29. Falsos Amigos e Heterotónicos",
        "level": "A1",
        "description": "Evite gafes de comunicação dominando os falsos cognatos (embarazada, exquisito, polvo, tapas) e heterotónicos.",
        "icon": "⚠️",
        "stage1_context": {
            "missionTitle": "Módulo 29: Falsos Amigos e Heterotónicos",
            "missionDescription": "Previna mal-entendidos culturais dominando os falsos amigos mais comuns entre o português e o espanhol.",
            "audioGuide": "Embarazada significa grávida. Exquisito significa delicioso. Polvo significa poeira. Tapas são petiscos."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Embarazada",
                "Portuguese": "Grávida (NÃO significa envergonhada)",
                "Audio": "Embarazada",
                "timeContext": "Falso amigo clássico! Envergonhada em espanhol é 'avergonzada'."
            },
            {
                "type": "vocab",
                "Spanish": "Exquisito / Exquisita",
                "Portuguese": "Delicioso(a) / Refinado(a) (NÃO significa estranho/esquisito)",
                "Audio": "Exquisito / Exquisita",
                "timeContext": "Elogio culinário ou de elegância. Algo estranho em espanhol é 'raro'."
            },
            {
                "type": "vocab",
                "Spanish": "Polvo",
                "Portuguese": "Poeira / Pó (NÃO é o molusco polvo do mar)",
                "Audio": "Polvo",
                "timeContext": "Poeira do chão ou pó de maquiagem. O animal marinho em espanhol é 'pulpo'."
            },
            {
                "type": "vocab",
                "Spanish": "Tapas",
                "Portuguese": "Petiscos / Aperitivos gastronômicos",
                "Audio": "Tapas",
                "timeContext": "Porções de comida típicas da Espanha servidas com bebidas nos bares."
            },
            {
                "type": "vocab",
                "Spanish": "Largo / Larga",
                "Portuguese": "Longo(a) / Comprido(a) (NÃO significa largo de largura)",
                "Audio": "Largo / Larga",
                "timeContext": "Dimensão de comprimento. Largo de largura em espanhol é 'ancho'."
            },
            {
                "type": "grammar_pill",
                "title": "Falsos Amigos Cruciais (Heterosemânticos)",
                "rule": "Cuidado com cognatos enganosos: Embarazada = Grávida | Exquisito = Delicioso | Polvo = Poeira | Largo = Comprido.",
                "formula": "Embarazada ➔ Grávida | Exquisito ➔ Delicioso | Largo ➔ Comprido",
                "example": "La comida está exquisita. / El vestido es muy largo."
            },
            {
                "type": "grammar_pill",
                "title": "Heterotónicos (Sílabas Tônicas Diferentes)",
                "rule": "Palavras idênticas em grafia mas com pronúncia de sílaba tônica diferente: Límite (li-mi-te), Elogio (e-lo-gio), Academia (a-ca-de-mia na penúltima sílaba).",
                "formula": "Sílaba tônica alterada sem acento gráfico",
                "example": "El límite de velocidad. / Hizo un gran elogio."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. O que significa uma mulher dizer 'Estoy embarazada' em espanhol?",
                "options": [
                    "Estou grávida",
                    "Estou envergonhada",
                    "Estou embaraçada",
                    "Estou com pressa"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Ao provar um prato em um restaurante e dizer '¡Esta paella está exquisita!', o que você está dizendo?",
                "options": [
                    "Esta paella está deliciosa/saborosa!",
                    "Esta paella está esquisita/estranha!",
                    "Esta paella está ruim!",
                    "Esta paella está fria!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. O que são as tradicionais 'tapas' na Espanha?",
                "options": [
                    "Petiscos / Aperitivos saborosos servidos em bares",
                    "Tapas na cara",
                    "Tampas de panela",
                    "Capas de livros"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Limpié el polvo de la mesa antes de comer.'",
                "options": [
                    "Limpei a poeira da mesa antes de comer.",
                    "Comi polvo do mar na mesa.",
                    "Limpei o prato.",
                    "Não comi nada."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Como se diz 'Estou envergonhada' em espanhol sem cometer o erro de usar embarazada?",
                "options": [
                    "Estoy avergonzada",
                    "Estoy embarazada",
                    "Estoy larga",
                    "Estoy exquisita"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "La comida está exquisita y mi esposa está embarazada.",
                "words": [
                    "La",
                    "comida",
                    "está",
                    "exquisita",
                    "y",
                    "mi",
                    "esposa",
                    "está",
                    "embarazada."
                ],
                "translation": "A comida está deliciosa e minha esposa está grávida."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Camarero",
                "npcName": "Camarero",
                "text": "¿Qué tal estuvieron las tapas, señora?",
                "npcMessage": "¿Qué tal estuvieron las tapas, señora?",
                "translation": "Como estavam os petiscos, senhora?"
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "¡Estuvieron exquisitas! Todo estuvo delicioso.",
                "npcMessage": "¡Estuvieron exquisitas! Todo estuvo delicioso.",
                "translation": "Estavam deliciosos! Tudo esteve excelente."
            },
            {
                "speaker": "Camarero",
                "npcName": "Camarero",
                "text": "¡Muchas gracias! Nos alegra mucho.",
                "npcMessage": "¡Muchas gracias! Nos alegra mucho.",
                "translation": "Muito obrigado! Ficamos muito alegres."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) Qual é o significado da palavra 'Polvo' na frase 'Hay mucho polvo en el mueble'?",
                "options": [
                    {
                        "label": "Poeira / Pó",
                        "isCorrect": true,
                        "explanation": "Correto! 'Polvo' significa poeira."
                    },
                    {
                        "label": "Polvo do mar",
                        "isCorrect": false,
                        "explanation": "Incorreto. O animal é 'pulpo'."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Como se diz que uma rua é 'larga' (com muita largura) em espanhol?",
                "options": [
                    {
                        "label": "Una calle ancha ('ancho' significa largo de largura)",
                        "isCorrect": true,
                        "explanation": "Exato! 'Largo' em espanhol significa comprido/longo."
                    },
                    {
                        "label": "Una calle larga",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Uma amiga espanhola teve um bebê recentemente. Como você se refere ao período em que ela esperava o filho?",
                "options": [
                    {
                        "label": "Cuando estabas embarazada.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Cuando estabas avergonzada.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'El viaje en autobús fue muy largo.'",
                "options": [
                    {
                        "label": "A viagem de ônibus foi muito longa/comprida.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "A viagem foi larga de espaço.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a palavra 'Raro' em espanhol?",
                "options": [
                    {
                        "label": "Estranho / Esquisito (ex: Es un comportamiento muy raro)",
                        "isCorrect": true,
                        "explanation": "Fantástico! 'Raro' em espanhol significa esquisito."
                    },
                    {
                        "label": "Raro de raridade",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a1_mod_30",
        "title": "30. Proyecto Integrador A1: Mi Viaje Hispánico",
        "level": "A1",
        "description": "Projeto final integrador do nível A1: prova de revisão com 30 exercícios cobrindo todos os módulos do nível A1.",
        "icon": "🎓",
        "stage1_context": {
            "missionTitle": "Módulo 30: Proyecto Integrador A1: Mi Viaje Hispánico",
            "missionDescription": "Parabéns por chegar ao módulo final do Nível A1! Integre todo o vocabulário e estruturas aprendidas em uma jornada completa.",
            "audioGuide": "¡Bienvenidos al proyecto final A1! Hoy consolidamos todo nuestro aprendizaje de español."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "El viaje / El vuelo",
                "Portuguese": "A viagem / O voo",
                "Audio": "El viaje / El vuelo",
                "timeContext": "Vocabulário de encerramento da jornada de aprendizado e viagem."
            },
            {
                "type": "vocab",
                "Spanish": "La reserva / El hotel",
                "Portuguese": "A reserva / O hotel",
                "Audio": "La reserva / El hotel",
                "timeContext": "Hospedagem e serviços de turismo."
            },
            {
                "type": "vocab",
                "Spanish": "Disfrutar / Conocer",
                "Portuguese": "Aproveitar, Desfrutar / Conhecer",
                "Audio": "Disfrutar / Conocer",
                "timeContext": "Verbos de experiência e turismo cultural."
            },
            {
                "type": "vocab",
                "Spanish": "El pasaporte / El equipaje",
                "Portuguese": "O passaporte / A bagagem",
                "Audio": "El pasaporte / El equipaje",
                "timeContext": "Documentos e pertences de viagem."
            },
            {
                "type": "vocab",
                "Spanish": "¡Buen viaje!",
                "Portuguese": "Boa viagem!",
                "Audio": "¡Buen viaje!",
                "timeContext": "Desejo de boa viagem ao concluir com sucesso o nível A1."
            },
            {
                "type": "grammar_pill",
                "title": "Síntese dos Verbos Fundamentais do Nível A1",
                "rule": "O nível A1 consolida o uso de SER (identidade), ESTAR (localização/estado), TENER (posse/idade), HAY (existência) e GUSTAR (preferências).",
                "formula": "SER + ESTAR + TENER + HAY + GUSTAR",
                "example": "Soy estudiante, estoy en Madrid, tengo 20 años, hay un hotel cerca y me gusta aprender."
            },
            {
                "type": "grammar_pill",
                "title": "Concordância de Gênero e Número em Textos Completos",
                "rule": "Em textos longos de integração, certifique-se de que artigos, adjetivos e numerais concordem rigorosamente com os substantivos.",
                "formula": "Artigo + Substantivo + Adjetivo em harmonia",
                "example": "Nuestra primera reserva en este hermoso hotel hispánico."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual frase sintetiza corretamente o uso de SER, ESTAR e TENER no Nível A1?",
                "options": [
                    "Soy brasileño, estoy en Madrid y tengo 25 años",
                    "Estoy brasileño, soy en Madrid y hago 25 años",
                    "Tengo brasileño, soy en Madrid y estoy 25 años",
                    "Soy brasileño, tengo en Madrid y estoy 25 años"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como desejar 'Boa viagem!' a alguém que concluiu o curso?",
                "options": [
                    "¡Buen viaje!",
                    "¡Buenas noches!",
                    "¡Por supuesto!",
                    "¡Muchas gracias!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual verbo usar para dizer que você quer 'Aproveitar' as férias?",
                "options": [
                    "Disfrutar",
                    "Desayunar",
                    "Llamar",
                    "Costar"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Tengo mi pasaporte listo y mi reserva en el hotel.'",
                "options": [
                    "Tenho meu passaporte pronto e minha reserva no hotel.",
                    "Não tenho passaporte.",
                    "O hotel é caro.",
                    "Perdi minha reserva."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual é o objetivo do Projeto Integrador A1?",
                "options": [
                    "Consolidar todo o vocabulário, gramática e conversação do Nível A1 em situações reais",
                    "Apenas fazer contas",
                    "Aprender uma palavra",
                    "Nenhum objetivo"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¡Hola! Soy estudiante, hablo español y disfruto mi viaje.",
                "words": [
                    "¡Hola!",
                    "Soy",
                    "estudiante,",
                    "hablo",
                    "español",
                    "y",
                    "disfruto",
                    "mi",
                    "viaje."
                ],
                "translation": "Olá! Sou estudante, falo espanhol e aproveito minha viagem."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Profesor",
                "npcName": "Profesor",
                "text": "¡Felicidades por completar todo el Nivel A1 de Español!",
                "npcMessage": "¡Felicidades por completar todo el Nivel A1 de Español!",
                "translation": "Parabéns por concluir todo o Nível A1 de Espanhol!"
            },
            {
                "speaker": "Estudiante",
                "npcName": "Estudiante",
                "text": "¡Muchas gracias, profesor! Ahora hablo, comprendo y disfruto el idioma.",
                "npcMessage": "¡Muchas gracias, profesor! Ahora hablo, comprendo y disfruto el idioma.",
                "translation": "Muito obrigado, professor! Agora falo, entendo e aproveito o idioma."
            },
            {
                "speaker": "Profesor",
                "npcName": "Profesor",
                "text": "¡Excelente trabajo! ¡Nos vemos en el Nivel A2!",
                "npcMessage": "¡Excelente trabajo! ¡Nos vemos en el Nivel A2!",
                "translation": "Excelente trabalho! Nos vemos no Nível A2!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Módulo 1: Saludos) Como saudar formalmente no período da tarde em espanhol?",
                "options": [
                    {
                        "label": "Buenas tardes",
                        "isCorrect": true,
                        "explanation": "Correto! Usa-se 'Buenas tardes' do meio-dia até o anoitecer."
                    },
                    {
                        "label": "Buenos días",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Buenos días' é usado pela manhã."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Módulo 2: Presentación) Qual frase expressa nome e nacionalidade com correção gramatical?",
                "options": [
                    {
                        "label": "Me llamo Carlos y soy brasileño.",
                        "isCorrect": true,
                        "explanation": "Perfeito! 'Me llamo' para nome e 'soy' (SER) para nacionalidade."
                    },
                    {
                        "label": "Me llamo Carlos y estoy brasileño.",
                        "isCorrect": false,
                        "explanation": "Incorreto. Nacionalidade exige o verbo SER."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Módulo 3: Alfabeto) Qual letra do alfabeto espanhol é sempre muda na pronúncia?",
                "options": [
                    {
                        "label": "La letra H (hache)",
                        "isCorrect": true,
                        "explanation": "Exato! A letra 'H' não tem som em espanhol."
                    },
                    {
                        "label": "La letra J (jota)",
                        "isCorrect": false,
                        "explanation": "Incorreto. A letra 'J' tem som gutural."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Módulo 4: Números y Edad) Como expressar a idade 'Tenho 28 anos' em espanhol?",
                "options": [
                    {
                        "label": "Tengo veintiocho años.",
                        "isCorrect": true,
                        "explanation": "Correto! Em espanhol usa-se o verbo TENER para idade."
                    },
                    {
                        "label": "Soy veintiocho años.",
                        "isCorrect": false,
                        "explanation": "Incorreto. Não se usa o verbo SER para idade."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Módulo 5: Fechas) Como dizer 'Hoje é segunda-feira, 15 de maio' em espanhol?",
                "options": [
                    {
                        "label": "Hoy es lunes, quince de mayo.",
                        "isCorrect": true,
                        "explanation": "Excelente! 'Lunes' é segunda-feira e 'mayo' é maio."
                    },
                    {
                        "label": "Hoy es domingo, quince de mayo.",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Domingo' significa domingo."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "6. (Módulo 6: Colores) Traduza: 'O livro vermelho e a mesa branca':",
                "options": [
                    {
                        "label": "El libro rojo y la mesa blanca.",
                        "isCorrect": true,
                        "explanation": "Correto! Rojo = vermelho e blanca = branca."
                    },
                    {
                        "label": "El libro negro y la mesa verde.",
                        "isCorrect": false,
                        "explanation": "Incorreto. Negro = preto e verde = verde."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "7. (Módulo 7: Artículos) Quais são os artigos definidos no plural (os / as) em espanhol?",
                "options": [
                    {
                        "label": "Los / Las",
                        "isCorrect": true,
                        "explanation": "Exato! 'Los' (masculino plural) e 'Las' (feminino plural)."
                    },
                    {
                        "label": "Unos / Unas",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Unos/Unas' são artigos indefinidos."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "8. (Módulo 8: Pronombres) Qual pronome pessoal expressa o tratamento formal singular (senhor/senhora)?",
                "options": [
                    {
                        "label": "Usted",
                        "isCorrect": true,
                        "explanation": "Perfeito! 'Usted' é o tratamento formal singular."
                    },
                    {
                        "label": "Tú",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Tú' é o tratamento informal."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "9. (Módulo 9: Verbo SER) Como conjugar o verbo SER para o pronome 'nosotros'?",
                "options": [
                    {
                        "label": "Nosotros somos",
                        "isCorrect": true,
                        "explanation": "Correto! Yo soy, tú eres, nosotros somos."
                    },
                    {
                        "label": "Nosotros estamos",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Estamos' pertence ao verbo ESTAR."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "10. (Módulo 10: Verbo ESTAR) Como dizer 'Nós estamos no hotel'?",
                "options": [
                    {
                        "label": "Nosotros estamos en el hotel.",
                        "isCorrect": true,
                        "explanation": "Exato! ESTAR expressa localização espacial."
                    },
                    {
                        "label": "Nosotros somos en el hotel.",
                        "isCorrect": false,
                        "explanation": "Incorreto. Não se usa SER para localização."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "11. (Módulo 11: SER vs ESTAR) Qual frase usa SER para característica e ESTAR para estado temporário?",
                "options": [
                    {
                        "label": "María es alta pero hoy está cansada.",
                        "isCorrect": true,
                        "explanation": "Perfeito! 'Es alta' (permanente) e 'está cansada' (temporário)."
                    },
                    {
                        "label": "María está alta pero hoy es cansada.",
                        "isCorrect": false,
                        "explanation": "Incorreto. Inverteu o uso dos verbos."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "12. (Módulo 12: Verbo TENER) Qual a tradução correta para 'Eles têm dois filhos'?",
                "options": [
                    {
                        "label": "Ellos tienen dos hijos.",
                        "isCorrect": true,
                        "explanation": "Excelente! 'Tienen' é a 3ª pessoa do plural de TENER."
                    },
                    {
                        "label": "Ellos son dos hijos.",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Son' significa eles são."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "13. (Módulo 13: HAY) Como expressar a existência 'Há três cadeiras na sala'?",
                "options": [
                    {
                        "label": "Hay tres sillas en la sala.",
                        "isCorrect": true,
                        "explanation": "Correto! 'Hay' é a forma impessoal para existência."
                    },
                    {
                        "label": "Están tres sillas en la sala.",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Están' indica localização específica."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "14. (Módulo 14: Familia) O que significa a palavra 'Los abuelos'?",
                "options": [
                    {
                        "label": "Os avós",
                        "isCorrect": true,
                        "explanation": "Exato! 'El abuelo' (avô) e 'la abuela' (avó)."
                    },
                    {
                        "label": "Os tios",
                        "isCorrect": false,
                        "explanation": "Incorreto. Tios em espanhol é 'los tíos'."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "15. (Módulo 15: Casa) Em qual cômodo da casa preparamos as refeições?",
                "options": [
                    {
                        "label": "En la cocina",
                        "isCorrect": true,
                        "explanation": "Perfeito! 'La cocina' é a cozinha."
                    },
                    {
                        "label": "En el dormitorio",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'El dormitorio' é o quarto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "16. (Módulo 16: Ropa) Como se traduz 'A camisa e a calça' em espanhol?",
                "options": [
                    {
                        "label": "La camisa y los pantalones",
                        "isCorrect": true,
                        "explanation": "Correto! Pantalones usa-se geralmente no plural."
                    },
                    {
                        "label": "La falda y los zapatos",
                        "isCorrect": false,
                        "explanation": "Incorreto. Falda = saia, zapatos = sapatos."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "17. (Módulo 17: Comida) O que significa a refeição 'El desayuno'?",
                "options": [
                    {
                        "label": "O café da manhã",
                        "isCorrect": true,
                        "explanation": "Excelente! Primeira refeição do dia."
                    },
                    {
                        "label": "O almoço",
                        "isCorrect": false,
                        "explanation": "Incorreto. Almoço é 'el almuerzo'."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "18. (Módulo 18: Restaurante) Como solicitar o valor a pagar ao garçom no restaurante?",
                "options": [
                    {
                        "label": "La cuenta, por favor",
                        "isCorrect": true,
                        "explanation": "Exato! Expressão universal para pedir a conta."
                    },
                    {
                        "label": "La carta, por favor",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'La carta' é o cardápio."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "19. (Módulo 19: Horas) Como responder 'São três e meia' em espanhol?",
                "options": [
                    {
                        "label": "Son las tres y media.",
                        "isCorrect": true,
                        "explanation": "Correto! Usa-se 'Son las' para horas a partir de 2."
                    },
                    {
                        "label": "Es las tres y media.",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Es la' só é usado para 1 hora (Es la una)."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "20. (Módulo 20: Verbos -AR) Como conjugar o verbo 'hablar' para a 1ª pessoa 'yo'?",
                "options": [
                    {
                        "label": "Yo hablo",
                        "isCorrect": true,
                        "explanation": "Perfeito! A terminação regular de 1ª pessoa é -o."
                    },
                    {
                        "label": "Yo habla",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Habla' é 3ª pessoa (él/ella/usted)."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "21. (Módulo 21: Verbos -ER/-IR) Como conjugar 'comer' e 'vivir' para 'nosotros'?",
                "options": [
                    {
                        "label": "Nosotros comemos y vivimos",
                        "isCorrect": true,
                        "explanation": "Exato! -ER faz -emos, -IR faz -imos."
                    },
                    {
                        "label": "Nosotros comamos y vivamos",
                        "isCorrect": false,
                        "explanation": "Incorreto. Essas são formas do subjuntivo."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "22. (Módulo 22: Cambio Vocálico) Qual é a conjugação do verbo 'querer' (e->ie) para 'tú'?",
                "options": [
                    {
                        "label": "Tú quieres",
                        "isCorrect": true,
                        "explanation": "Excelente! A vogal 'e' muda para o ditongo 'ie'."
                    },
                    {
                        "label": "Tú queres",
                        "isCorrect": false,
                        "explanation": "Incorreto. Não sofreu a ditongação e->ie."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "23. (Módulo 23: Posesivos) Traduza: 'Meu livro e sua casa (dela)':",
                "options": [
                    {
                        "label": "Mi libro y su casa",
                        "isCorrect": true,
                        "explanation": "Correto! 'Mi' = meu, 'su' = dele/dela/seu."
                    },
                    {
                        "label": "Tu libro y mi casa",
                        "isCorrect": false,
                        "explanation": "Incorreto. Inverteu os possessivos."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "24. (Módulo 24: Demostrativos) Qual demonstrativo indica algo próximo do interlocutor ('esse')?",
                "options": [
                    {
                        "label": "Ese",
                        "isCorrect": true,
                        "explanation": "Perfeito! 'Este' (comigo), 'Ese' (com você), 'Aquel' (distante de ambos)."
                    },
                    {
                        "label": "Este",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Este' é perto do falante."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "25. (Módulo 25: GUSTAR) Como expressar a preferência 'Eu gosto de viajar'?",
                "options": [
                    {
                        "label": "Me gusta viajar.",
                        "isCorrect": true,
                        "explanation": "Exato! Estrutura de GUSTAR com pronome de objeto indireto (me)."
                    },
                    {
                        "label": "Yo gusto viajar.",
                        "isCorrect": false,
                        "explanation": "Incorreto. Não se usa pronome reto com GUSTAR."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "26. (Módulo 26: Ciudad) O que significa '¿Dónde está la estación de tren?'?",
                "options": [
                    {
                        "label": "Onde fica a estação de trem?",
                        "isCorrect": true,
                        "explanation": "Correto! '¿Dónde está...?' para pedir localizações na cidade."
                    },
                    {
                        "label": "Quando sai o trem?",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Quando sai' seria '¿Cuándo sale...?'."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "27. (Módulo 27: Tiempo) Como dizer 'Está fazendo calor hoje' em espanhol?",
                "options": [
                    {
                        "label": "Hace calor hoy.",
                        "isCorrect": true,
                        "explanation": "Excelente! Usa-se o verbo HACER para condições do tempo (hace calor/frío)."
                    },
                    {
                        "label": "Está calor hoy.",
                        "isCorrect": false,
                        "explanation": "Incorreto. Não se usa ESTAR com calor/frio."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "28. (Módulo 28: Salud) Como expressar o sintoma 'Minha cabeça dói'?",
                "options": [
                    {
                        "label": "Me duele la cabeza.",
                        "isCorrect": true,
                        "explanation": "Correto! Usa-se 'Me duele' no singular para partes do corpo no singular."
                    },
                    {
                        "label": "Me duelen la cabeza.",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Me duelen' só no plural (Me duelen los pies)."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "29. (Módulo 29: Transporte) Qual preposição é usada com meios de transporte (ir de trem/avião)?",
                "options": [
                    {
                        "label": "En (Voy en tren / Voy en avión)",
                        "isCorrect": true,
                        "explanation": "Exato! Em espanhol diz-se 'en tren', 'en avión', 'en coche'."
                    },
                    {
                        "label": "De (Voy de tren / Voy de avión)",
                        "isCorrect": false,
                        "explanation": "Incorreto. Em espanhol não se usa 'de' para meios de transporte."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "30. (Módulo 30: Integrador A1) Qual frase demonstra domínio completo das competências do Nível A1?",
                "options": [
                    {
                        "label": "¡Hola! Me llamo Lucas, tengo 25 años, soy de Brasil y me gusta aprender español.",
                        "isCorrect": true,
                        "explanation": "¡ENHORABUENA! Integração perfeita de saudações, nome, idade, origem e gostos do Nível A1!"
                    },
                    {
                        "label": "Hola yo Lucas 25 años ser Brasil gustar español",
                        "isCorrect": false,
                        "explanation": "Incorreto. Falta concordância e conjugação."
                    }
                ],
                "correctIndex": 0
            }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CURSO_ESPANHOL_A1_DADOS;
}
if (typeof window !== 'undefined') {
    window.CURSO_ESPANHOL_A1_DADOS = CURSO_ESPANHOL_A1_DADOS;
}
