/**
 * Banco de Dados Central do Curso de Espanhol - Nível A2 (Conteúdo Pedagógico Autêntico)
 */
const CURSO_ESPANHOL_A2_DADOS = [
    {
        "id": "es_a2_mod_1",
        "title": "1. Verbos Regulares no Passado (Indefinido)",
        "level": "A2",
        "description": "Aprenda a conjugar e usar os verbos regulares (-AR, -ER, -IR) no Pretérito Indefinido para fatos concluídos no passado (hablé, comí, viví).",
        "icon": "📜",
        "stage1_context": {
            "missionTitle": "Módulo 1: Verbos Regulares no Passado (Indefinido)",
            "missionDescription": "Domine o passado pontual e acabado em espanhol com os verbos regulares.",
            "audioGuide": "Ayer hablé con Juan. Comí una paella deliciosa y viví en Madrid."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Hablé",
                "Portuguese": "Falei (verbo hablar)",
                "Audio": "Hablé",
                "timeContext": "1ª pessoa do singular (Yo) no Pretérito Indefinido dos verbos em -AR."
            },
            {
                "type": "vocab",
                "Spanish": "Comí",
                "Portuguese": "Comi (verbo comer)",
                "Audio": "Comí",
                "timeContext": "1ª pessoa do singular (Yo) no Pretérito Indefinido dos verbos em -ER."
            },
            {
                "type": "vocab",
                "Spanish": "Viví",
                "Portuguese": "Vivi / Morei (verbo vivir)",
                "Audio": "Viví",
                "timeContext": "1ª pessoa do singular (Yo) no Pretérito Indefinido dos verbos em -IR."
            },
            {
                "type": "vocab",
                "Spanish": "Ayer",
                "Portuguese": "Ontem",
                "Audio": "Ayer",
                "timeContext": "Marcador temporal clássico do Pretérito Indefinido."
            },
            {
                "type": "vocab",
                "Spanish": "Terminó",
                "Portuguese": "Terminou (verbo terminar)",
                "Audio": "Terminó",
                "timeContext": "3ª pessoa do singular (Él/Ella/Usted) no Pretérito Indefinido."
            },
            {
                "type": "grammar_pill",
                "title": "Terminações Regulares dos Verbos em -AR no Indefinido",
                "rule": "Para os verbos regulares em -AR, trocamos a terminação por: -é (yo), -aste (tú), -ó (él/ella), -amos (nosotros), -asteis (vosotros), -aron (ellos). Note as tildes em -é e -ó.",
                "formula": "Hablar ➔ hablé, hablaste, habló, hablamos, hablasteis, hablaron",
                "example": "Ayer trabajé hasta tarde. / Él habló con el director."
            },
            {
                "type": "grammar_pill",
                "title": "Terminações Regulares dos Verbos em -ER e -IR no Indefinido",
                "rule": "Os verbos em -ER e -IR compartilham exatamente as mesmas terminações no Pretérito Indefinido: -í, -iste, -ió, -imos, -isteis, -ieron. Tildes em -í e -ió.",
                "formula": "Comer/Vivir ➔ comí/viví, comiste/viviste, comió/vivió, comimos/vivimos, comisteis/vivisteis, comieron/vivieron",
                "example": "Yo comí pescado. / Ellos vivieron en España cinco años."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual é a conjugação correta de 'hablar' para a 1ª pessoa (Yo) no Pretérito Indefinido?",
                "options": [
                    "Hablé",
                    "Hablo",
                    "Hablaba",
                    "Hablaré"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como se diz 'Nós comemos paella ontem' em espanhol?",
                "options": [
                    "Ayer comimos paella",
                    "Ayer comemos paella",
                    "Ayer comíamos paella",
                    "Ayer comeremos paella"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual é a 3ª pessoa do singular (Él/Ella) do verbo 'vivir' no passado indefinido?",
                "options": [
                    "Vivió",
                    "Viví",
                    "Vivió sem tilde",
                    "Viviendo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Ayer trabajé ocho horas.'",
                "options": [
                    "Ontem trabalhei oito horas.",
                    "Hoje trabalho oito horas.",
                    "Amanhã trabalharei oito horas.",
                    "Trabalhava oito horas."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual terminação é usada para a 2ª pessoa do singular (Tú) em verbos -AR no Indefinido?",
                "options": [
                    "-aste (ex: hablaste)",
                    "-ó",
                    "-é",
                    "-aron"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Ayer hablé con mi madre y comí en un restaurante.",
                "words": [
                    "Ayer",
                    "hablé",
                    "con",
                    "mi",
                    "madre",
                    "y",
                    "comí",
                    "en",
                    "un",
                    "restaurante."
                ],
                "translation": "Ontem falei com minha mãe e comi em um restaurante."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¿Qué hiciste ayer, Sofía? ¿Saliste de casa?",
                "npcMessage": "¿Qué hiciste ayer, Sofía? ¿Saliste de casa?",
                "translation": "O que você fez ontem, Sofía? Saiu de casa?"
            },
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "Sí, hablé con María, comí en el centro y escribí un informe.",
                "npcMessage": "Sí, hablé con María, comí en el centro y escribí un informe.",
                "translation": "Sim, falei com a María, comi no centro e escrevi um relatório."
            },
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¡Qué día tan productivo tuviste!",
                "npcMessage": "¡Qué día tan productivo tuviste!",
                "translation": "Que dia tão produtivo você teve!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa a palavra 'Ayer'?",
                "options": [
                    {
                        "label": "Ontem",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Hoje",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Quais pessoas do verbo no Pretérito Indefinido regular obrigatoriamente recebem tilde (acento gráfico)?",
                "options": [
                    {
                        "label": "1ª pessoa do singular (Yo) e 3ª pessoa do singular (Él/Ella/Usted)",
                        "isCorrect": true,
                        "explanation": "Exato! Hablé / Habló, Comí / Comió."
                    },
                    {
                        "label": "Apenas o plural",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer contar que morou em Madri em 2020. O que diz?",
                "options": [
                    {
                        "label": "En 2020 viví en Madrid.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "En 2020 vivo en Madrid.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Ellos compraron una casa el mes pasado.'",
                "options": [
                    {
                        "label": "Eles compraram uma casa no mês passado.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Eles compram uma casa este mês.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a 1ª pessoa do plural (Nosotros) do verbo 'estudiar' no Pretérito Indefinido?",
                "options": [
                    {
                        "label": "Estudiamos (idêntico ao presente, diferendo pelo contexto)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Em -AR e -IR, 'nosotros' tem a mesma forma no presente e no indefinido."
                    },
                    {
                        "label": "Estudiamos con tilde",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_2",
        "title": "2. Verbos Irregulares Clássicos",
        "level": "A2",
        "description": "Aprenda os verbos irregulares fundamentais no passado indefinido: fui (ser/ir), estuve (estar), tuve (tener), hice (hacer), vine (venir).",
        "icon": "⚡",
        "stage1_context": {
            "missionTitle": "Módulo 2: Verbos Irregulares Clássicos",
            "missionDescription": "Domine a conjugação das raízes irregulares mais importantes do passado em espanhol.",
            "audioGuide": "Ayer fui al cine. Estuve en la oficina, tuve mucho trabajo e hice la cena."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Fui",
                "Portuguese": "Fui (verbo SER ou IR)",
                "Audio": "Fui",
                "timeContext": "Forma idêntica para SER e IR no Pretérito Indefinido."
            },
            {
                "type": "vocab",
                "Spanish": "Estuve",
                "Portuguese": "Estive / Fiquei (verbo estar)",
                "Audio": "Estuve",
                "timeContext": "1ª pessoa do singular (Yo) de estar no Indefinido."
            },
            {
                "type": "vocab",
                "Spanish": "Tuve",
                "Portuguese": "Tive (verbo tener)",
                "Audio": "Tuve",
                "timeContext": "1ª pessoa do singular (Yo) de tener no Indefinido."
            },
            {
                "type": "vocab",
                "Spanish": "Hice",
                "Portuguese": "Fiz (verbo hacer)",
                "Audio": "Hice",
                "timeContext": "1ª pessoa do singular (Yo) de hacer no Indefinido."
            },
            {
                "type": "vocab",
                "Spanish": "Vine",
                "Portuguese": "Vim (verbo venir)",
                "Audio": "Vine",
                "timeContext": "1ª pessoa do singular (Yo) de venir no Indefinido."
            },
            {
                "type": "grammar_pill",
                "title": "Raízes Irregulares Fortes sem Acento",
                "rule": "Os verbos com raiz irregular no Indefinido (estuv-, tuv-, hic-, vin-, pus-, pud-) recebem as terminações: -e, -iste, -o, -imos, -isteis, -ieron. NENHUMA dessas formas leva acento!",
                "formula": "Raiz Irregular + -e, -iste, -o, -imos, -isteis, -ieron",
                "example": "Yo tuve (sem acento) / Él tuvo (sem acento) / Yo hice la tarea."
            },
            {
                "type": "grammar_pill",
                "title": "Identidade Total entre SER e IR no Indefinido",
                "rule": "Os verbos SER e IR compartilham exatamente as mesmas formas no Pretérito Indefinido: fui, fuiste, fue, fuimos, fuisteis, fueron. O contexto define a ação.",
                "formula": "SER / IR ➔ fui, fuiste, fue, fuimos, fuisteis, fueron",
                "example": "Ayer fui al médico (IR). / El examen fue difícil (SER)."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Eu fiz a comida' no passado em espanhol?",
                "options": [
                    "Hice la comida",
                    "Hací la comida",
                    "Hago la comida",
                    "Hizo la comida"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. As formas irregulares com raiz forte (tuve, estuve, hice, vine) levam acento gráfico?",
                "options": [
                    "NUNCA levam acento",
                    "Sempre levam acento na última letra",
                    "Apenas no plural",
                    "Depende da região"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual é a 3ª pessoa do singular (Él/Ella) do verbo 'hacer' no Indefinido?",
                "options": [
                    "Hizo (com z)",
                    "Hice",
                    "Haco",
                    "Hicié"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Ayer estuve enfermo pero hoy estoy mejor.'",
                "options": [
                    "Ontem estive doente, mas hoje estou melhor.",
                    "Estou doente hoje.",
                    "Amanhã estarei doente.",
                    "Nunca fico doente."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual frase usa o verbo 'fui' significando o verbo IR?",
                "options": [
                    "Ayer fui al supermercado.",
                    "Yo fui un buen alumno.",
                    "La fiesta fue divertida.",
                    "Fui médico durante diez años."
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Ayer estuve en la universidad y luego fui a la casa de Pedro.",
                "words": [
                    "Ayer",
                    "estuve",
                    "en",
                    "la",
                    "universidad",
                    "y",
                    "luego",
                    "fui",
                    "a",
                    "la",
                    "casa",
                    "de",
                    "Pedro."
                ],
                "translation": "Ontem estive na universidade e logo fui à casa do Pedro."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "¿Dónde estuviste anoche, Mateo?",
                "npcMessage": "¿Dónde estuviste anoche, Mateo?",
                "translation": "Onde você esteve ontem à noite, Mateo?"
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "Estuve en el cine con Juan. Vimos una película y luego fuimos a cenar.",
                "npcMessage": "Estuve en el cine con Juan. Vimos una película y luego fuimos a cenar.",
                "translation": "Estive no cinema com o Juan. Vimos um filme e depois fomos jantar."
            },
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "¡Qué bien! Yo me quedé en casa porque tuve dolor de cabeza.",
                "npcMessage": "¡Qué bien! Yo me quedé en casa porque tuve dolor de cabeza.",
                "translation": "Que bom! Eu fiquei em casa porque tive dor de cabeça."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Tuve mucho trabajo'?",
                "options": [
                    {
                        "label": "Tive muito trabalho",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Tenho pouco trabalho",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que o verbo 'hacer' muda para 'hizo' na 3ª pessoa do singular (él/ella)?",
                "options": [
                    {
                        "label": "Para manter o som de /z/ ou /s/ suave antes da vogal 'o'",
                        "isCorrect": true,
                        "explanation": "Exato! Em espanhol 'co' soaria como 'ko', por isso usa-se 'zo'."
                    },
                    {
                        "label": "É uma exceção opcional",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer dizer a um colega que esteve em uma reunião importante. O que diz?",
                "options": [
                    {
                        "label": "Estuve en una reunión importante.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Fui uma reunião",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Mis amigos vinieron a mi casa el domingo.'",
                "options": [
                    {
                        "label": "Meus amigos vieram à minha casa no domingo.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Meus amigos vão à minha casa domingo.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a conjugação de 'estar' para 'nosotros' no Indefinido?",
                "options": [
                    {
                        "label": "Estuvimos (sem acento)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Forma perfeita de estar no passado."
                    },
                    {
                        "label": "Estávamos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_3",
        "title": "3. Marcadores Temporais do Passado",
        "level": "A2",
        "description": "Localize fatos passados no tempo com marcadores precisos: ayer, anoche, anteayer, el año pasado, la semana pasada, hace dos días.",
        "icon": "🗓️",
        "stage1_context": {
            "missionTitle": "Módulo 3: Marcadores Temporais do Passado",
            "missionDescription": "Aprenda as expressões de tempo essenciais para contextualizar quando uma ação ocorreu no passado.",
            "audioGuide": "Ayer fui al parque. Anoche cené con mis padres. El año pasado viajé a Colombia."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Ayer",
                "Portuguese": "Ontem",
                "Audio": "Ayer",
                "timeContext": "O dia imediatamente anterior ao dia de hoje."
            },
            {
                "type": "vocab",
                "Spanish": "Anoche",
                "Portuguese": "Ontem à noite",
                "Audio": "Anoche",
                "timeContext": "A noite do dia anterior."
            },
            {
                "type": "vocab",
                "Spanish": "Anteayer",
                "Portuguese": "Anteontem",
                "Audio": "Anteayer",
                "timeContext": "Dois dias antes do dia atual."
            },
            {
                "type": "vocab",
                "Spanish": "El año pasado",
                "Portuguese": "No ano passado",
                "Audio": "El año pasado",
                "timeContext": "Período anual já concluído."
            },
            {
                "type": "vocab",
                "Spanish": "La semana pasada",
                "Portuguese": "Na semana passada",
                "Audio": "La semana pasada",
                "timeContext": "Período semanal encerrado."
            },
            {
                "type": "grammar_pill",
                "title": "A Estrutura Temporal 'Hace + Período de Tempo'",
                "rule": "Para expressar tempo decorrido desde o passado até o presente, usa-se a fórmula 'Hace + quantidade de tempo + verbo no passado'.",
                "formula": "Hace + [días/meses/años] + [verbo no Indefinido]",
                "example": "Hace dos meses compré un coche. / Llegué a España hace tres días."
            },
            {
                "type": "grammar_pill",
                "title": "Concordância dos Marcadores com 'Pasado / Pasada'",
                "rule": "O adjetivo 'pasado/a' concorda em gênero com o substantivo temporal: el año pasado (masculino), la semana pasada (feminino), el mes pasado (masculino).",
                "formula": "El [substantivo masc] pasado / La [substantivo fem] pasada",
                "example": "El verano pasado viajamos a la playa."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Ontem à noite' em espanhol numa única palavra?",
                "options": [
                    "Anoche",
                    "Ayer noche",
                    "Pasada noche",
                    "Anteayer"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a tradução exata de 'Anteayer'?",
                "options": [
                    "Anteontem",
                    "Ontem",
                    "Amanhã",
                    "Ano passado"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Como dizer 'Há dois anos moro em Madri' usando a estrutura de tempo decorrido?",
                "options": [
                    "Hace dos años vine a Madrid",
                    "Tiene dos años vine",
                    "Hace dos años atrás",
                    "Pasado dos años"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'El mes pasado aprobé el examen de español.'",
                "options": [
                    "No mês passado passei no exame de espanhol.",
                    "Este mês farei o exame.",
                    "Mês que vem tenho exame.",
                    "Passei no exame ontem."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual opção completa corretamente: 'La _____ pasada fuimos al teatro'?",
                "options": [
                    "semana",
                    "año",
                    "mes",
                    "día"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "La semana pasada hablé con mi jefe y anteayer recibí la confirmación.",
                "words": [
                    "La",
                    "semana",
                    "pasada",
                    "hablé",
                    "con",
                    "mi",
                    "jefe",
                    "y",
                    "anteayer",
                    "recibí",
                    "la",
                    "confirmación."
                ],
                "translation": "Na semana passada falei com meu chefe e anteontem recebi a confirmação."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Diego",
                "npcName": "Diego",
                "text": "¿Cuándo llegaste a la ciudad, Laura?",
                "npcMessage": "¿Cuándo llegaste a la ciudad, Laura?",
                "translation": "Quando você chegou à cidade, Laura?"
            },
            {
                "speaker": "Laura",
                "npcName": "Laura",
                "text": "Llegué anteayer por la tarde. Y anoche cené en un restaurante muy bonito.",
                "npcMessage": "Llegué anteayer por la tarde. Y anoche cené en un restaurante muy bonito.",
                "translation": "Cheguei anteontem de tarde. E ontem à noite jantei em um restaurante muito bonito."
            },
            {
                "speaker": "Diego",
                "npcName": "Diego",
                "text": "¡Excelente! El año pasado yo también estuve allí.",
                "npcMessage": "¡Excelente! El año pasado yo también estuve allí.",
                "translation": "Excelente! No ano passado eu também estive lá."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'La semana pasada'?",
                "options": [
                    {
                        "label": "Na semana passada",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Na próxima semana",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é a diferença gramatical entre 'Ayer' e 'Anoche'?",
                "options": [
                    {
                        "label": "'Ayer' refere-se ao dia de ontem como um todo; 'Anoche' refere-se especificamente à noite de ontem",
                        "isCorrect": true,
                        "explanation": "Exato! Nuance temporal precisa."
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
                "question": "3. (Contexto) Você quer dizer que viajou para a Argentina há três anos. O que diz?",
                "options": [
                    {
                        "label": "Viajé a Argentina hace tres años.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Viajé a Argentina tiene tres años.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Anteayer comimos en casa de mis tíos.'",
                "options": [
                    {
                        "label": "Anteontem comemos na casa dos meus tios.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Ontem jantamos com meus tios.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Como se escreve 'ano passado' em espanhol respeitando a concordância?",
                "options": [
                    {
                        "label": "El año pasado (masculino)",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "La año pasada",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_4",
        "title": "4. Relatando o Fim de Semana / Viagem",
        "level": "A2",
        "description": "Organize relatos de viagens e finais de semana sequenciando ações com 'Primero', 'Luego', 'Después' e 'Lo pasé genial'.",
        "icon": "✈️",
        "stage1_context": {
            "missionTitle": "Módulo 4: Relatando o Fim de Semana / Viagem",
            "missionDescription": "Aprenda a estruturar uma narrativa fluida e expressar sua opinião sobre viagens e passeios passados.",
            "audioGuide": "El fin de semana fui a la playa. Primero descansé, luego nadé en el mar. ¡Lo pasé genial!"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Lo pasé genial",
                "Portuguese": "Passei muito bem / Foi muito legal",
                "Audio": "Lo pasé genial",
                "timeContext": "Expressão idiomática clássica para avaliar uma experiência passada."
            },
            {
                "type": "vocab",
                "Spanish": "Primero...",
                "Portuguese": "Primeiro...",
                "Audio": "Primero",
                "timeContext": "Conector de sequência temporal inicial."
            },
            {
                "type": "vocab",
                "Spanish": "Luego...",
                "Portuguese": "Depois / Logo...",
                "Audio": "Luego",
                "timeContext": "Conector de sequência temporal intermediário."
            },
            {
                "type": "vocab",
                "Spanish": "Después...",
                "Portuguese": "Depois...",
                "Audio": "Después",
                "timeContext": "Conector temporal para ações subsequentes."
            },
            {
                "type": "vocab",
                "Spanish": "Por último...",
                "Portuguese": "Por último / Finalmente...",
                "Audio": "Por último",
                "timeContext": "Conector para a conclusão de uma história."
            },
            {
                "type": "grammar_pill",
                "title": "Estruturas de Avaliação da Experiência no Passado",
                "rule": "Para dar sua opinião sobre uma viagem ou evento, usam-se expressões no passado com o pronome 'lo': 'Lo pasé genial' (diverti-me muito), 'Lo pasé bien/mal', ou 'Fue increíble/divertido'.",
                "formula": "Lo pasé + [adverbio] | Fue + [adjetivo]",
                "example": "El viaje fue increíble y lo pasamos muy bien."
            },
            {
                "type": "grammar_pill",
                "title": "Conectores de Ordenação Narrativa no Passado",
                "rule": "Para narrar um dia de férias ou fim de semana, conectam-se as frases com: Primero ➔ Luego ➔ Después ➔ Al final / Por último.",
                "formula": "Primero + [Ação 1], luego + [Ação 2], por último + [Ação 3]",
                "example": "Primero fui al museo, luego comí paella y después volví al hotel."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Eu me diverti muito / Passei super bem' em espanhol?",
                "options": [
                    "Lo pasé genial",
                    "Paso genial",
                    "Fue pasé bien",
                    "Me pasé fantástico"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual sequência de conectores narrativos está na ordem lógica correta?",
                "options": [
                    "Primero..., luego..., por último...",
                    "Por último..., primero..., luego...",
                    "Luego..., primero..., después...",
                    "Después..., por último..., primero..."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'El fin de semana fui al cine con mis amigos y lo pasamos muy bien.'",
                "options": [
                    "No fim de semana fui ao cinema com meus amigos e nos divertimos muito.",
                    "No fim de semana vou ao cinema.",
                    "Fui ao cinema sozinho.",
                    "Não gostei do filme."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual palavra significa 'depois / em seguida'?",
                "options": [
                    "Luego / Después",
                    "Antes",
                    "Ahora",
                    "Nunca"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Como dizer 'A viagem foi incrível' em espanhol?",
                "options": [
                    "El viaje fue increíble",
                    "El viaje estuvo increíble sólo",
                    "Fue un viaje increíblemente",
                    "El viaje es increíble"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Primero fuimos al museo, luego comimos en la plaza y lo pasamos genial.",
                "words": [
                    "Primero",
                    "fuimos",
                    "al",
                    "museo,",
                    "luego",
                    "comimos",
                    "en",
                    "la",
                    "plaza",
                    "y",
                    "lo",
                    "pasamos",
                    "genial."
                ],
                "translation": "Primeiro fomos ao museu, depois comemos na praça e foi muito legal."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Elena",
                "npcName": "Elena",
                "text": "¿Qué tal el fin de semana, Javier?",
                "npcMessage": "¿Qué tal el fin de semana, Javier?",
                "translation": "Que tal o fim de semana, Javier?"
            },
            {
                "speaker": "Javier",
                "npcName": "Javier",
                "text": "¡Lo pasé genial! Primero fui a la montaña, luego visité un pueblo antiguo y después volví a casa.",
                "npcMessage": "¡Lo pasé genial! Primero fui a la montaña, luego visité un pueblo antiguo y después volví a casa.",
                "translation": "Passei muito bem! Primeiro fui à montanha, depois visitei um povoado antigo e depois voltei para casa."
            },
            {
                "speaker": "Elena",
                "npcName": "Elena",
                "text": "¡Qué plan tan estupendo!",
                "npcMessage": "¡Qué plan tan estupendo!",
                "translation": "Que plano fantástico!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Lo pasé bien'?",
                "options": [
                    {
                        "label": "Diverti-me / Passei bem",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Passei mal",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que usa-se o pronome 'Lo' na frase 'Lo pasé genial'?",
                "options": [
                    {
                        "label": "O 'Lo' refere-se de forma neutra ao tempo decorrido ou à experiência vivida",
                        "isCorrect": true,
                        "explanation": "Exato! Estrutura fixa neutra em espanhol."
                    },
                    {
                        "label": "É opcional e pode ser retirado",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Um amigo pergunta como foram suas férias na praia. O que diz?",
                "options": [
                    {
                        "label": "¡Fueron geniales, lo pasé muy bien!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Lo paso genial mañana",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Por último, compramos recuerdos para la familia.'",
                "options": [
                    {
                        "label": "Por último, compramos lembrancinhas para a família.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Primeiro compramos presentes.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'Luego' e 'Luego luego' (usado no México)?",
                "options": [
                    {
                        "label": "'Luego' significa depois/logo; no México 'luego luego' significa 'imediatamente/agora mesmo'",
                        "isCorrect": true,
                        "explanation": "Fantástico! Nuance regional valiosa."
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
        "id": "es_a2_mod_5",
        "title": "5. Biografias e Marcos da Vida",
        "level": "A2",
        "description": "Relate os principais fatos da vida de alguém: nacer, estudiar, mudarse, casarse, jubilarse.",
        "icon": "🎓",
        "stage1_context": {
            "missionTitle": "Módulo 5: Biografias e Marcos da Vida",
            "missionDescription": "Aprenda os verbos e estruturas para contar a história de vida de personalidades ou familiares no passado.",
            "audioGuide": "Nací en 1995. Estudié medicina, me mudé a Madrid y me casé en 2022."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Nací",
                "Portuguese": "Nasci (verbo nacer)",
                "Audio": "Nací",
                "timeContext": "1ª pessoa do singular no passado Indefinido."
            },
            {
                "type": "vocab",
                "Spanish": "Se mudó",
                "Portuguese": "Mudou-se (verbo mudarse)",
                "Audio": "Se mudó",
                "timeContext": "Verbo reflexivo para troca de cidade/casa."
            },
            {
                "type": "vocab",
                "Spanish": "Se casó",
                "Portuguese": "Casou-se (verbo casarse)",
                "Audio": "Se casó",
                "timeContext": "Marco de casamento no passado."
            },
            {
                "type": "vocab",
                "Spanish": "Se jubiló",
                "Portuguese": "Aposentou-se (verbo jubilarse)",
                "Audio": "Se jubiló",
                "timeContext": "Aposentadoria no passado."
            },
            {
                "type": "vocab",
                "Spanish": "Falleció",
                "Portuguese": "Faleceu / Morreu (verbo fallecer)",
                "Audio": "Falleció",
                "timeContext": "Verbo formal para encerramento da vida."
            },
            {
                "type": "grammar_pill",
                "title": "Verbos Reflexivos no Pretérito Indefinido (Mudarse, Casarse)",
                "rule": "Os verbos reflexivos colocam o pronome (me, te, se, nos, os, se) ANTES do verbo conjugado no Indefinido.",
                "formula": "[Me/Te/Se/Nos] + verbo no Indefinido",
                "example": "Yo me mudé a Barcelona. / Ellos se casaron en 2018."
            },
            {
                "type": "grammar_pill",
                "title": "Expressão de Anos e Datas na Biografia",
                "rule": "Para indicar o ano de um marco biográfico, usa-se a preposição 'en' diretamente antes do número (ex: en 1998, en 2015).",
                "formula": "En + [ano em números]",
                "example": "Gabriel García Márquez nació en 1927 y falleció en 2014."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Eu nasci no Brasil' em espanhol?",
                "options": [
                    "Nací en Brasil",
                    "Naceo en Brasil",
                    "Soy nacido en Brasil",
                    "Nací de Brasil"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a forma correta do verbo 'mudarse' para a 3ª pessoa do singular (Él/Ella) no passado?",
                "options": [
                    "Se mudó",
                    "Me mudé",
                    "Te mudaste",
                    "Se mudaron"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Mi abuelo se jubiló el año pasado a los 65 años.'",
                "options": [
                    "Meu avô se aposentou no ano passado aos 65 anos.",
                    "Meu avô trabalha há 65 anos.",
                    "Meu pai comprou uma casa.",
                    "Meu avô faleceu aos 65 anos."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual verbo significa 'aposentar-se' em espanhol?",
                "options": [
                    "Jubilarse",
                    "Retirarse sólo",
                    "Casarse",
                    "Mudarse"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual preposição conecta o marco biográfico ao ano correspondente?",
                "options": [
                    "En (ex: en 2015)",
                    "De",
                    "A",
                    "Por"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Nací en Brasil, estudié derecho y me mudé a España.",
                "words": [
                    "Nací",
                    "en",
                    "Brasil,",
                    "estudié",
                    "derecho",
                    "y",
                    "me",
                    "mudé",
                    "a",
                    "España."
                ],
                "translation": "Nasci no Brasil, estudei direito e mudei-me para a Espanha."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Entrevistador",
                "npcName": "Entrevistador",
                "text": "¿Dónde nació usted, profesor García?",
                "npcMessage": "¿Dónde nació usted, profesor García?",
                "translation": "Onde o senhor nasceu, professor García?"
            },
            {
                "speaker": "Profesor",
                "npcName": "Profesor",
                "text": "Nací en Argentina. Estudié en Buenos Aires y en 2015 me mudé a Madrid.",
                "npcMessage": "Nací en Argentina. Estudié en Buenos Aires y en 2015 me mudé a Madrid.",
                "translation": "Nasci na Argentina. Estudei em Buenos Aires e em 2015 mudei-me para Madri."
            },
            {
                "speaker": "Entrevistador",
                "npcName": "Entrevistador",
                "text": "¡Una trayectoria maravillosa!",
                "npcMessage": "¡Una trayectoria maravillosa!",
                "translation": "Uma trajetória maravilhosa!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Me mudé de casa'?",
                "options": [
                    {
                        "label": "Mudei de casa (troquei de residência)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Mudei de ideia",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é a 3ª pessoa do singular (él/ella) do verbo 'nacer' no passado?",
                "options": [
                    {
                        "label": "Nació (com tilde no 'ó')",
                        "isCorrect": true,
                        "explanation": "Exato!"
                    },
                    {
                        "label": "Naceó",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está apresentando um resumo da sua vida na aula. O que diz?",
                "options": [
                    {
                        "label": "Nací en Brasil, estudié idiomas y ahora trabajo en una empresa.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Soy nacido hoy",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Mis abuelos se jubilaron y compraron una casa cerca del mar.'",
                "options": [
                    {
                        "label": "Meus avós se aposentaram e compraram uma casa perto do mar.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Meus pais trabalham perto do mar.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que diferencia o verbo 'casar' em português do equivalente 'casarse' em espanhol?",
                "options": [
                    {
                        "label": "Em espanhol exige obrigatoriamente o pronome reflexivo 'se' (se casó / me casé)",
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
        "id": "es_a2_mod_6",
        "title": "6. Como as Coisas Eram (Imperfecto)",
        "level": "A2",
        "description": "Aprenda o Pretérito Imperfeito do Indicativo para descrever ações habituais, estados e cenários no passado (hablaba, comía, era, iba, veía).",
        "icon": "🕰️",
        "stage1_context": {
            "missionTitle": "Módulo 6: Como as Coisas Eram (Imperfecto)",
            "missionDescription": "Descubra como descrever rotinas passadas e características contínuas sem um momento de início ou fim definido.",
            "audioGuide": "Antes hablaba mucho. Comía frutas todos los días. Era un chico tranquilo."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Hablaba",
                "Portuguese": "Falava (verbo hablar)",
                "Audio": "Hablaba",
                "timeContext": "1ª e 3ª pessoa do singular no Pretérito Imperfeito (-AR)."
            },
            {
                "type": "vocab",
                "Spanish": "Comía",
                "Portuguese": "Comia (verbo comer)",
                "Audio": "Comía",
                "timeContext": "1ª e 3ª pessoa do singular no Pretérito Imperfeito com acento no 'í'."
            },
            {
                "type": "vocab",
                "Spanish": "Vivía",
                "Portuguese": "Vivia / Morava (verbo vivir)",
                "Audio": "Vivía",
                "timeContext": "1ª e 3ª pessoa do singular dos verbos em -IR no Imperfeito."
            },
            {
                "type": "vocab",
                "Spanish": "Era",
                "Portuguese": "Era (verbo ser)",
                "Audio": "Era",
                "timeContext": "Forma irregular do verbo SER no Pretérito Imperfeito."
            },
            {
                "type": "vocab",
                "Spanish": "Iba",
                "Portuguese": "Ia (verbo ir)",
                "Audio": "Iba",
                "timeContext": "Forma irregular do verbo IR no Pretérito Imperfeito."
            },
            {
                "type": "grammar_pill",
                "title": "Terminações Regulares em -ABA e -ÍA no Imperfeito",
                "rule": "Verbos em -AR usam -aba, -abas, -aba, -ábamos, -abais, -aban. Verbos em -ER e -IR compartilham -ía, -ías, -ía, -íamos, -íais, -ían (todos com acento no 'í').",
                "formula": "-AR ➔ -aba | -ER/-IR ➔ -ía",
                "example": "Yo trabajaba en una tienda. / Tú comías pizza los domingos."
            },
            {
                "type": "grammar_pill",
                "title": "Os Três Únicos Verbos Irregulares do Imperfeito (SER, IR, VER)",
                "rule": "No Pretérito Imperfeito existem apenas 3 verbos irregulares em toda a língua espanhola: SER (era), IR (iba) e VER (veía).",
                "formula": "SER ➔ era | IR ➔ iba | VER ➔ veía",
                "example": "Cuando era joven, iba al parque y veía las estrellas."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual é a terminação do Pretérito Imperfeito para a 1ª pessoa (Yo) dos verbos em -AR?",
                "options": [
                    "-aba (ex: hablaba)",
                    "-é",
                    "-ía",
                    "-aría"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Quantos verbos irregulares existem em todo o Pretérito Imperfeito em espanhol?",
                "options": [
                    "Apenas 3 verbos (SER ➔ era, IR ➔ iba, VER ➔ veía)",
                    "Dezenas de verbos",
                    "Nenhum",
                    "Mais de vinte"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Como conjugamos o verbo 'vivir' para a 1ª pessoa no Pretérito Imperfeito?",
                "options": [
                    "Vivía",
                    "Viví",
                    "Vivera",
                    "Vivo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: 'Antes comíamos en casa de mis abuelos los domingos.'",
                "options": [
                    "Antes comíamos na casa dos meus avós aos domingos.",
                    "Domingo vamos comer nos avós.",
                    "Comemos nos avós ontem.",
                    "Nunca comemos nos avós."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual palavra abaixo está no Pretérito Imperfeito do verbo IR?",
                "options": [
                    "Iba",
                    "Fui",
                    "Vaya",
                    "Iría"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Antes vivía en un pueblo y trabajaba en un colegio.",
                "words": [
                    "Antes",
                    "vivía",
                    "en",
                    "un",
                    "pueblo",
                    "y",
                    "trabajaba",
                    "en",
                    "un",
                    "colegio."
                ],
                "translation": "Antes eu vivia em um povoado e trabalhava em um colégio."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Manuel",
                "npcName": "Manuel",
                "text": "¿Dónde vivías cuando eras joven, Sofía?",
                "npcMessage": "¿Dónde vivías cuando eras joven, Sofía?",
                "translation": "Onde você morava quando era jovem, Sofía?"
            },
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "Vivía en Valencia. Todos los días iba a la playa y comía paella.",
                "npcMessage": "Vivía en Valencia. Todos los días iba a la playa y comía paella.",
                "translation": "Morava em Valência. Todos os dias ia à praia e comia paella."
            },
            {
                "speaker": "Manuel",
                "npcName": "Manuel",
                "text": "¡Qué vida tan tranquila tenías!",
                "npcMessage": "¡Qué vida tan tranquila tenías!",
                "translation": "Que vida tão tranquila você tinha!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Hablábamos' no Pretérito Imperfeito?",
                "options": [
                    {
                        "label": "Falávamos (nós falávamos habitualmente)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Falamos (passado concluído)",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que todos os verbos regulares em -ER e -IR levam tilde no 'í' no Pretérito Imperfeito?",
                "options": [
                    {
                        "label": "Porque se forma um hiato na terminação -ía, -ías, -ía, -íamos, -íais, -ían",
                        "isCorrect": true,
                        "explanation": "Exato! Regra do hiato acentuado."
                    },
                    {
                        "label": "Porque são oxítonas",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer dizer que na infância você era um menino muito tímido. O que diz?",
                "options": [
                    {
                        "label": "Cuando era niño, era un chico muy tímido.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Ayer fui tímido",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Mis padres iban al cine todos los viernes.'",
                "options": [
                    {
                        "label": "Meus pais iam ao cinema todas as sextas-feiras.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Meus pais foram ao cinema ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a 1ª pessoa do plural (Nosotros) do verbo SER no Pretérito Imperfeito?",
                "options": [
                    {
                        "label": "Éramos (com acento na letra É)",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Eramos sem acento",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_7",
        "title": "7. Infância e Hábitos Antigos",
        "level": "A2",
        "description": "Relate memórias da infância e brincadeiras antigas com 'Cuando era niño/a'.",
        "icon": "🪁",
        "stage1_context": {
            "missionTitle": "Módulo 7: Infância e Hábitos Antigos",
            "missionDescription": "Pratique falar sobre hábitos de infância, brinquedos e momentos nostálgicos usando a expressão 'Cuando era niño/a'.",
            "audioGuide": "Cuando era niño, jugaba en la calle. Tenía un perro pequeño y leía cómics."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Cuando era niño/a",
                "Portuguese": "Quando eu era criança",
                "Audio": "Cuando era niño/a",
                "timeContext": "Expressão introdutória clássica para memórias de infância."
            },
            {
                "type": "vocab",
                "Spanish": "Jugaba al fútbol",
                "Portuguese": "Jogava futebol",
                "Audio": "Jugaba al fútbol",
                "timeContext": "Atividade de lazer da infância no Pretérito Imperfeito."
            },
            {
                "type": "vocab",
                "Spanish": "Tenía muchos juguetes",
                "Portuguese": "Tinha muitos brinquedos",
                "Audio": "Tenía muchos juguetes",
                "timeContext": "Posse de brinquedos no passado."
            },
            {
                "type": "vocab",
                "Spanish": "Montaba en bicicleta",
                "Portuguese": "Andava de bicicleta",
                "Audio": "Montaba en bicicleta",
                "timeContext": "Brincadeira ao ar livre."
            },
            {
                "type": "vocab",
                "Spanish": "Veía dibujos animados",
                "Portuguese": "Assistia a desenhos animados",
                "Audio": "Veía dibujos animados",
                "timeContext": "Hábito de lazer infantil."
            },
            {
                "type": "grammar_pill",
                "title": "Estrutura Nostálgica 'Cuando era + substantivo'",
                "rule": "Para introduzir relatos de infância ou fases anteriores da vida, usa-se a expressão 'Cuando era niño/a / joven / estudiante + Pretérito Imperfeito'.",
                "formula": "Cuando era + [fase da vida] + [verbo no Imperfeito]",
                "example": "Cuando era niño, jugaba con mis primos en el jardín."
            },
            {
                "type": "grammar_pill",
                "title": "Construção de Ações de Lazer no Passado",
                "rule": "Usam-se estruturas como 'jugaba a + jogo/esporte' (jugaba al fútbol) e 'montaba en + transporte/brinquedo' (montaba en bici).",
                "formula": "Jugar a + [jogo] | Montar en + [veículo]",
                "example": "De pequeño jugaba a las canicas y montaba en bicicleta."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Quando eu era criança' em espanhol?",
                "options": [
                    "Cuando era niño/a",
                    "Cuando fui niño",
                    "Cuando soy niño",
                    "Cuando era chico sólo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual preposição acompanha o verbo 'montar' para dizer 'andar de bicicleta'?",
                "options": [
                    "En (ex: montaba en bicicleta)",
                    "De",
                    "A",
                    "Por"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'De pequeño tenía un perro blanco y negro.'",
                "options": [
                    "Quando pequeno eu tinha um cachorro branco e preto.",
                    "Tenho um cachorro pequeno.",
                    "Perdi um cachorro.",
                    "Quero um cachorro."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual é a conjugação do verbo 'ver' para 1ª pessoa no Pretérito Imperfeito?",
                "options": [
                    "Veía",
                    "Vi",
                    "Veo",
                    "Veía sem acento"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Como dizer 'Nós jogávamos videogame' no Pretérito Imperfeito?",
                "options": [
                    "Jugábamos a los videojuegos",
                    "Jugamos videojuegos",
                    "Jugarán videojuegos",
                    "Jugó videojuegos"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Cuando era niño, jugaba al fútbol y montaba en bicicleta.",
                "words": [
                    "Cuando",
                    "era",
                    "niño,",
                    "jugaba",
                    "al",
                    "fútbol",
                    "y",
                    "montaba",
                    "en",
                    "bicicleta."
                ],
                "translation": "Quando eu era criança, jogava futebol e andava de bicicleta."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "¿A qué jugabas cuando eras niña, María?",
                "npcMessage": "¿A qué jugabas cuando eras niña, María?",
                "translation": "Do que você brincava quando era criança, María?"
            },
            {
                "speaker": "María",
                "npcName": "María",
                "text": "De pequeña jugaba con muñecas y veía dibujos animados por la tarde.",
                "npcMessage": "De pequeña jugaba con muñecas y veía dibujos animados por la tarde.",
                "translation": "Quando pequena brincava com bonecas e assistia a desenhos animados de tarde."
            },
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "¡Yo también! ¡Qué buenos tiempos!",
                "npcMessage": "¡Yo también! ¡Qué buenos tiempos!",
                "translation": "Eu também! Que bons tempos!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Juguetes'?",
                "options": [
                    {
                        "label": "Brinquedos",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Jogos de mesa",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que dizemos 'jugaba al fútbol' com a preposição 'a'?",
                "options": [
                    {
                        "label": "Porque o verbo 'jugar' em espanhol exige a preposição 'a' antes de jogos e esportes (jugar a + deporte)",
                        "isCorrect": true,
                        "explanation": "Exato! Regra de regência do verbo jugar (al = a + el)."
                    },
                    {
                        "label": "É opcional",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer contar que quando era criança lia muitos gibis. O que diz?",
                "options": [
                    {
                        "label": "Cuando era niño, leía muchos tebeos / cómics.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Hoy leo cómics",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Mis primos y yo pasábamos los veranos en el pueblo.'",
                "options": [
                    {
                        "label": "Meus primos e eu passávamos os verões no povoado.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Meus primos viajam no verão.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual expressão espanhola equivale coloquialmente ao português 'Quando eu era pequeno'?",
                "options": [
                    {
                        "label": "De pequeño / De pequeña",
                        "isCorrect": true,
                        "explanation": "Fantástico! Expressão extremamente autêntica."
                    },
                    {
                        "label": "En pequeño",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_8",
        "title": "8. Indefinido vs. Imperfecto",
        "level": "A2",
        "description": "Combine ações em andamento (Imperfecto) interrompidas por eventos pontuais (Indefinido) com 'Mientras' e 'Cuando'.",
        "icon": "⚡",
        "stage1_context": {
            "missionTitle": "Módulo 8: Indefinido vs. Imperfecto",
            "missionDescription": "Domine o contraste definitivo entre o cenário de fundo (Imperfecto) e a ação pontual que o interrompe (Indefinido).",
            "audioGuide": "Mientras estudiaba, sonó el teléfono. Llovía cuando salí de casa."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Mientras",
                "Portuguese": "Enquanto",
                "Audio": "Mientras",
                "timeContext": "Conector de simultaneidade ou ação de fundo."
            },
            {
                "type": "vocab",
                "Spanish": "Sonó el teléfono",
                "Portuguese": "Tocou o telefone",
                "Audio": "Sonó el teléfono",
                "timeContext": "Ação pontual de interrupção no Pretérito Indefinido."
            },
            {
                "type": "vocab",
                "Spanish": "Llovía mucho",
                "Portuguese": "Chovia muito",
                "Audio": "Llovía mucho",
                "timeContext": "Descrição do cenário de fundo no Imperfeito."
            },
            {
                "type": "vocab",
                "Spanish": "Llegó mi amigo",
                "Portuguese": "Chegou meu amigo",
                "Audio": "Llegó mi amigo",
                "timeContext": "Evento repentino no Indefinido."
            },
            {
                "type": "vocab",
                "Spanish": "Estaba durmiendo",
                "Portuguese": "Estava dormindo",
                "Audio": "Estaba durmiendo",
                "timeContext": "Ação contínua no passado."
            },
            {
                "type": "grammar_pill",
                "title": "Ação de Fundo vs Ação Interruptora",
                "rule": "O Pretérito Imperfeito descreve a ação que estava em andamento (cenário de fundo), enquanto o Pretérito Indefinido expressa o fato pontual que interrompe o fluxo.",
                "formula": "[Imperfeito - cenário] + cuando + [Indefinido - interrupção]",
                "example": "Estudiaba cuando entró el profesor. / Llovía cuando salí."
            },
            {
                "type": "grammar_pill",
                "title": "Uso do Conector 'Mientras' para Ações Simultâneas",
                "rule": "Quando duas ações no passado ocorriam ao mesmo tempo em paralelo, ambas ficam no Pretérito Imperfeito ligadas por 'mientras'.",
                "formula": "[Imperfeito] + mientras + [Imperfeito]",
                "example": "Yo leía un libro mientras mi hermano escuchaba música."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Na frase 'Mientras cenaba, _____ (llamar) Juan', qual tempo verbal preenche a interrupção?",
                "options": [
                    "llamó (Pretérito Indefinido)",
                    "llamaba",
                    "llama",
                    "llamaría"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual tempo verbal usamos para descrever o clima de fundo de uma história passada (ex: Chovia muito)?",
                "options": [
                    "Pretérito Imperfeito (Llovía mucho)",
                    "Pretérito Indefinido",
                    "Presente",
                    "Futuro"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Yo dormía cuando sonó la alarma.'",
                "options": [
                    "Eu dormia quando tocou o alarme.",
                    "Eu dormi com alarme.",
                    "Eu durmo cedo.",
                    "O alarme tocou de manhã."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Quando duas ações ocorrem paralelamente ao mesmo tempo com 'mientras', qual tempo verbal usam?",
                "options": [
                    "Ambas usam Pretérito Imperfeito",
                    "Ambas usam Indefinido",
                    "Uma usa futuro",
                    "Não se usam passados"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual frase contrasta corretamente o cenário e a interrupção?",
                "options": [
                    "Caminaba por la calle cuando vi a mi amigo.",
                    "Caminé cuando veía a mi amigo.",
                    "Camino cuando vi.",
                    "Caminaba cuando veía."
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Mientras estudiaba en mi habitación, sonó el teléfono.",
                "words": [
                    "Mientras",
                    "estudiaba",
                    "en",
                    "mi",
                    "habitación,",
                    "sonó",
                    "el",
                    "teléfono."
                ],
                "translation": "Enquanto eu estudava no meu quarto, tocou o telefone."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¿Qué pasaba cuando llegaste a la oficina?",
                "npcMessage": "¿Qué pasaba cuando llegaste a la oficina?",
                "translation": "O que estava acontecendo quando você chegou ao escritório?"
            },
            {
                "speaker": "Ana",
                "npcName": "Ana",
                "text": "Todos hablaban acaloradamente cuando entré en la sala.",
                "npcMessage": "Todos hablaban acaloradamente cuando entré en la sala.",
                "translation": "Todos falavam calorosamente quando entrei na sala."
            },
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¡Seguro que tenían una reunión importante!",
                "npcMessage": "¡Seguro que tenían una reunión importante!",
                "translation": "Com certeza tinham uma reunião importante!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Sonó el teléfono'?",
                "options": [
                    {
                        "label": "Tocou o telefone (ação pontual concluída)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Tocava o telefone sem parar",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual a diferença de sentido entre 'Ayer llovió' e 'Ayer llovía'?",
                "options": [
                    {
                        "label": "'Ayer llovió' relata um fato pontual/concluído; 'Ayer llovía' descreve o clima de fundo enquanto outra coisa acontecia",
                        "isCorrect": true,
                        "explanation": "Exato! Nuance fundamental entre os dois passados."
                    },
                    {
                        "label": "Não há diferença nenhuma",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer contar que estava tomando banho quando acabou a luz. O que diz?",
                "options": [
                    {
                        "label": "Me duchaba cuando se fue la luz.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Me duché cuando se iba la luz",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Mientras la madre cocinaba, los niños jugaban en el salón.'",
                "options": [
                    {
                        "label": "Enquanto a mãe cozinhava, as crianças brincavam na sala.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "A mãe cozinhou para as crianças.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual palavra introduz habitualmente a ação pontual interruptora?",
                "options": [
                    {
                        "label": "Cuando (ex: Estudiaba CUANDO llamó)",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Mientras",
                        "isCorrect": false,
                        "explanation": "Incorreto (mientras introduz a ação contínua)."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_9",
        "title": "9. Pretérito Perfecto (Haber + Participio)",
        "level": "A2",
        "description": "Aprenda a falar sobre experiências e ações recentes ligadas ao presente: he hablado, has comido, hemos ido.",
        "icon": "☕",
        "stage1_context": {
            "missionTitle": "Módulo 9: Pretérito Perfecto (Haber + Participio)",
            "missionDescription": "Aprenda a formar o Pretérito Perfecto composto com o auxiliar haber no presente + particípio para fatos do dia ou experiências de vida.",
            "audioGuide": "Hoy he desayunado café. ¿Has visitado España alguna vez? Hemos hablado con el director."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Hoy he desayunado",
                "Portuguese": "Hoje tomei café da manhã",
                "Audio": "Hoy he desayunado",
                "timeContext": "Ação realizada hoje (tempo não concluído)."
            },
            {
                "type": "vocab",
                "Spanish": "¿Has comido paella?",
                "Portuguese": "Você já comeu paella?",
                "Audio": "¿Has comido paella?",
                "timeContext": "Pergunta sobre experiência de vida."
            },
            {
                "type": "vocab",
                "Spanish": "Hemos visto una película",
                "Portuguese": "Vimos um filme",
                "Audio": "Hemos visto una película",
                "timeContext": "Ação recente do grupo."
            },
            {
                "type": "vocab",
                "Spanish": "Ha llegado mi hermano",
                "Portuguese": "Chegou meu irmão",
                "Audio": "Ha llegado mi hermano",
                "timeContext": "Ação recém-ocorrida."
            },
            {
                "type": "vocab",
                "Spanish": "Nunca he viajado en avión",
                "Portuguese": "Nunca viajei de avião",
                "Audio": "Nunca he viajado en avión",
                "timeContext": "Experiência acumulada até o presente."
            },
            {
                "type": "grammar_pill",
                "title": "Formação do Pretérito Perfecto Composto",
                "rule": "Forma-se com o verbo AUXILIAR HABER no presente (he, has, ha, hemos, habéis, han) + PARTICÍPIO do verbo principal (-ado para -AR, -ido para -ER/-IR). O particípio é invariável.",
                "formula": "Haber (he, has, ha, hemos, han) + Participio (-ado/-ido)",
                "example": "Hoy he trabajado mucho. / María ha vuelto de viaje."
            },
            {
                "type": "grammar_pill",
                "title": "Marcadores de Tempo Presente / Não Concluídos",
                "rule": "Usa-se o Pretérito Perfecto com marcadores que incluem o momento atual: hoy, esta semana, este año, últimamente, nunca, alguna vez.",
                "formula": "Hoy / Esta semana / Nunca + Pretérito Perfecto",
                "example": "Esta mañana he tomado café. / ¿Alguna vez has estado en México?"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como conjugamos a 1ª pessoa do singular (Yo) no Pretérito Perfecto?",
                "options": [
                    "He + particípio (ex: He hablado)",
                    "Ha hablado",
                    "Hemos hablado",
                    "Han hablado"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é o particípio regular dos verbos em -AR e em -ER/-IR?",
                "options": [
                    "-ado para -AR e -ido para -ER/-IR",
                    "-ido para todos",
                    "-to para todos",
                    "-ando e -iendo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Qual marcador de tempo exige o Pretérito Perfecto por incluir o dia de hoje?",
                "options": [
                    "Hoy / Esta mañana",
                    "Ayer",
                    "El año pasado",
                    "En 1990"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Traduza: '¿Has estado alguna vez en Madrid?'",
                "options": [
                    "Você já esteve alguma vez em Madri?",
                    "Você vai a Madri?",
                    "Você mora em Madri?",
                    "Você esteve em Madri ano passado?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. O particípio no Pretérito Perfecto (he comido / hemos comido) muda de gênero ou número?",
                "options": [
                    "Nunca muda, permanece invariável em -o (-ado / -ido)",
                    "Muda para o feminino",
                    "Muda para o plural",
                    "Muda com o sujeito"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Hoy he trabajado mucho pero no he terminado el informe.",
                "words": [
                    "Hoy",
                    "he",
                    "trabajado",
                    "mucho",
                    "pero",
                    "no",
                    "he",
                    "terminado",
                    "el",
                    "informe."
                ],
                "translation": "Hoje trabalhei muito mas não terminei o relatório."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "¿Qué has hecho hoy, Sofía?",
                "npcMessage": "¿Qué has hecho hoy, Sofía?",
                "translation": "O que você fez hoje, Sofía?"
            },
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "Hoy he tenido tres reuniones y he comido con un cliente.",
                "npcMessage": "Hoy he tenido tres reuniones y he comido con un cliente.",
                "translation": "Hoje tive três reuniões e comi com um cliente."
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "¡Menudo día tan ocupado has tenido!",
                "npcMessage": "¡Menudo día tan ocupado has tenido!",
                "translation": "Que dia tão ocupado você teve!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'He desayunado'?",
                "options": [
                    {
                        "label": "Tomei café da manhã (hoje)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Almocei",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é o particípio irregular dos verbos 'hacer', 'ver' e 'escribir'?",
                "options": [
                    {
                        "label": "hecho, visto, escrito",
                        "isCorrect": true,
                        "explanation": "Exato! Três particípios irregulares essenciais."
                    },
                    {
                        "label": "hacido, vedo, escribido",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer perguntar a um colega se ele já tomou café hoje de manhã. O que diz?",
                "options": [
                    {
                        "label": "¿Has tomado café esta mañana?",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¿Tomaste café ayer?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Esta semana hemos aprendido muchas palabras nuevas.'",
                "options": [
                    {
                        "label": "Esta semana aprendemos muitas palavras novas.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Semana passada aprendemos palavras.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Na Espanha peninsular, qual tempo verbal é predominantemente usado para ações do dia de hoje (Hoy)?",
                "options": [
                    {
                        "label": "Pretérito Perfecto (Hoy he comido)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Uso característico do espanhol de Espanha."
                    },
                    {
                        "label": "Pretérito Indefinido",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_10",
        "title": "10. Comparando Épocas e Mudanças",
        "level": "A2",
        "description": "Compare o passado com o presente usando 'Antes... pero ahora...', 'más que', 'menos que' e 'tan... como'.",
        "icon": "⚖️",
        "stage1_context": {
            "missionTitle": "Módulo 10: Comparando Épocas e Mudanças",
            "missionDescription": "Aprenda a expressar transformações de hábitos e comparações de quantidade/qualidade entre o passado e a vida atual.",
            "audioGuide": "Antes vivía en un pueblo, pero ahora vivo en la ciudad. Esta ciudad es más ruidosa que mi pueblo."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Antes... pero ahora...",
                "Portuguese": "Antes... mas agora...",
                "Audio": "Antes... pero ahora...",
                "timeContext": "Estrutura principal de contraste de épocas."
            },
            {
                "type": "vocab",
                "Spanish": "Más... que...",
                "Portuguese": "Mais... do que...",
                "Audio": "Más... que...",
                "timeContext": "Comparativo de superioridade."
            },
            {
                "type": "vocab",
                "Spanish": "Menos... que...",
                "Portuguese": "Menos... do que...",
                "Audio": "Menos... que...",
                "timeContext": "Comparativo de inferioridade."
            },
            {
                "type": "vocab",
                "Spanish": "Tan... como...",
                "Portuguese": "Tão... quanto...",
                "Audio": "Tan... como...",
                "timeContext": "Comparativo de igualdade com adjetivos."
            },
            {
                "type": "vocab",
                "Spanish": "Ha cambiado mucho",
                "Portuguese": "Mudou muito",
                "Audio": "Ha cambiado mucho",
                "timeContext": "Avaliação de transformação."
            },
            {
                "type": "grammar_pill",
                "title": "Estrutura de Contraste Temporal 'Antes vs. Ahora'",
                "rule": "Combina-se o Pretérito Imperfeito para o hábito antigo com o Presente do Indicativo para a situação atual usando o conector 'pero ahora'.",
                "formula": "Antes + [Imperfeito], pero ahora + [Presente]",
                "example": "Antes no hacía deporte, pero ahora voy al gimnasio diariamente."
            },
            {
                "type": "grammar_pill",
                "title": "Estruturas Comparativas de Superioridade, Inferioridade e Igualdade",
                "rule": "Para comparar dois elementos usam-se: 'más + adjetivo + que' (superioridade), 'menos + adjetivo + que' (inferioridade) e 'tan + adjetivo + como' (igualdade).",
                "formula": "Más... que | Menos... que | Tan... como",
                "example": "Madrid es más grande que Sevilla. / Este coche es tan rápido como aquel."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como completar a frase de mudança: 'Antes no _____ (estudiar) español, pero ahora estudio todos los días.'?",
                "options": [
                    "estudiaba",
                    "estudié",
                    "estudio",
                    "estudiaré"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual estrutura é usada para fazer uma comparação de igualdade com adjetivos (ex: tão inteligente quanto)?",
                "options": [
                    "Tan + adjetivo + como",
                    "Más + adjetivo + que",
                    "Menos + adjetivo + que",
                    "Tanto + adjetivo + que"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Esta ciudad es más tranquila que la capital.'",
                "options": [
                    "Esta cidade é mais tranquila do que a capital.",
                    "Esta cidade é menos tranquila.",
                    "A capital é tranquila.",
                    "Nenhuma é tranquila."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual palavra usamos para expressar oposição entre o passado e o presente ('Antes... ___ ahora...')?",
                "options": [
                    "pero (ex: pero ahora)",
                    "porque",
                    "cuando",
                    "mientras"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Como dizer 'Ele é mais alto do que eu' em espanhol?",
                "options": [
                    "Él es más alto que yo",
                    "Él es tan alto como yo",
                    "Él es menos alto",
                    "Él es alto de yo"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Antes vivía en un pueblo tranquilo, pero ahora vivo en una ciudad grande.",
                "words": [
                    "Antes",
                    "vivía",
                    "en",
                    "un",
                    "pueblo",
                    "tranquilo,",
                    "pero",
                    "ahora",
                    "vivo",
                    "en",
                    "una",
                    "ciudad",
                    "grande."
                ],
                "translation": "Antes eu vivia em um povoado tranquilo, mas agora vivo em uma cidade grande."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Diego",
                "npcName": "Diego",
                "text": "¿Cómo ha cambiado tu vida en los últimos años, Elena?",
                "npcMessage": "¿Cómo ha cambiado tu vida en los últimos años, Elena?",
                "translation": "Como mudou sua vida nos últimos anos, Elena?"
            },
            {
                "speaker": "Elena",
                "npcName": "Elena",
                "text": "Antes trabajaba en una oficina ruidosa, pero ahora trabajo desde casa y estoy más contenta.",
                "npcMessage": "Antes trabajaba en una oficina ruidosa, pero ahora trabajo desde casa y estoy más contenta.",
                "translation": "Antes trabalhava em um escritório barulhento, mas agora trabalho de casa e estou mais feliz."
            },
            {
                "speaker": "Diego",
                "npcName": "Diego",
                "text": "¡Trabajar desde casa es tan cómodo como parece!",
                "npcMessage": "¡Trabajar desde casa es tan cómodo como parece!",
                "translation": "Trabalhar de casa é tão confortável quanto parece!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Ha cambiado mucho'?",
                "options": [
                    {
                        "label": "Mudou muito (transformou-se bastante)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Não mudou nada",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é a diferença entre 'tan' e 'tanto' em comparações?",
                "options": [
                    {
                        "label": "'Tan' é usado com adjetivos/advérbios (tan alto como), e 'tanto' com substantivos (tanto dinero como)",
                        "isCorrect": true,
                        "explanation": "Exato! Regra clássica de comparativos."
                    },
                    {
                        "label": "São idênticos sem diferença",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer dizer que antes não gostava de legumes, mas agora ama. O que diz?",
                "options": [
                    {
                        "label": "Antes no me gustaban las verduras, pero ahora me encantan.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Hoy no me gustan las verduras",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Este curso es menos difícil que el año pasado.'",
                "options": [
                    {
                        "label": "Este curso é menos difícil do que o ano passado.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Este curso é muito difícil.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Quais são os comparativos irregulares para 'bueno/bien' e 'malo/mal'?",
                "options": [
                    {
                        "label": "Mejor (melhor) e Peor (pior) — sem usar 'más bueno' ou 'más malo'",
                        "isCorrect": true,
                        "explanation": "Fantástico! Comparativos irregulares idênticos ao português."
                    },
                    {
                        "label": "Más bueno e Más malo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_11",
        "title": "11. El Verbo \"Gustar\" y Similares",
        "level": "A2",
        "description": "Aprenda a expressar gostos e sentimentos com me gusta / me gustan, me encanta, me molesta, me interesa, me duele.",
        "icon": "❤️",
        "stage1_context": {
            "missionTitle": "Módulo 11: El Verbo \"Gustar\" y Similares",
            "missionDescription": "Domine a estrutura especial dos verbos de afeção em espanhol, onde a coisa amada ou incômoda é o sujeito gramatical.",
            "audioGuide": "Me gusta la música latina. Me encantan las frutas. ¿Te molesta el ruido?"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Me gusta / Me gustan",
                "Portuguese": "Eu gosto (de algo singular / plural)",
                "Audio": "Me gusta / Me gustan",
                "timeContext": "Verbo concorda com o elemento gostado."
            },
            {
                "type": "vocab",
                "Spanish": "Me encanta / Me encantan",
                "Portuguese": "Adoro / Eu amo",
                "Audio": "Me encanta / Me encantan",
                "timeContext": "Expressa um entusiasmo maior do que 'gustar'."
            },
            {
                "type": "vocab",
                "Spanish": "Me molesta",
                "Portuguese": "Me incomoda",
                "Audio": "Me molesta",
                "timeContext": "Expressa incômodo ou irritação."
            },
            {
                "type": "vocab",
                "Spanish": "Me interesa",
                "Portuguese": "Me interessa",
                "Audio": "Me interesa",
                "timeContext": "Demonstra interesse por um tema ou atividade."
            },
            {
                "type": "vocab",
                "Spanish": "Me duele la cabeza",
                "Portuguese": "Dói-me a cabeça / Estou com dor de cabeça",
                "Audio": "Me duele la cabeza",
                "timeContext": "Expressa dor física em partes do corpo."
            },
            {
                "type": "grammar_pill",
                "title": "Concordância dos Verbos de Afeção (Gusta vs. Gustan)",
                "rule": "Os verbos como 'gustar', 'encantar', 'molestar' usam pronomes de objeto (me, te, le, nos, os, les) e concordam com a coisa: singular/infinitivo ➔ gusta/encanta; plural ➔ gustan/encantan.",
                "formula": "[Pronome me/te/le...] + gusta + [singular/infinitivo] | gustan + [plural]",
                "example": "Me gusta bailar. / Me gustan los deportes."
            },
            {
                "type": "grammar_pill",
                "title": "Enfase com A mí, A ti, A él...",
                "rule": "Para enfatizar ou contrastar de quem é o gosto, antecede-se a estrutura com 'A mí me gusta', 'A ti te gusta', 'A él le gusta'.",
                "formula": "A + [pronome tônico] + [pronome me/te/le] + gusta",
                "example": "A mí me encantan las verduras, pero a Juan no."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dizemos 'Eu gosto de livros' em espanhol?",
                "options": [
                    "Me gustan los libros",
                    "Yo gusto los libros",
                    "Me gusta los libros",
                    "A mí gusto libros"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual forma do verbo 'encantar' usamos antes de uma ação no infinitivo (ex: viajar)?",
                "options": [
                    "Me encanta viajar (singular)",
                    "Me encantan viajar",
                    "Yo encanto viajar",
                    "Me encantado viajar"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: '¿Te molesta el humo del cigarrillo?'",
                "options": [
                    "A fumaça do cigarro te incomoda?",
                    "Você gosta de fumaça?",
                    "Você fuma cigarro?",
                    "Onde está o cigarro?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual pronome reflexivo/objeto usamos para 'Nós gostamos'?",
                "options": [
                    "Nos gusta / Nos gustan",
                    "Les gusta",
                    "Te gusta",
                    "Os gusta"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Como expressar dor de dente em espanhol?",
                "options": [
                    "Me duelen los dientes",
                    "Me duelo los dientes",
                    "Tengo dolor de dientes solamente",
                    "Me doliendo los dientes"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "A mí me gusta la comida mexicana y me encantan los tacos.",
                "words": [
                    "A",
                    "mí",
                    "me",
                    "gusta",
                    "la",
                    "comida",
                    "mexicana",
                    "y",
                    "me",
                    "encantan",
                    "los",
                    "tacos."
                ],
                "translation": "Eu gosto de comida mexicana e adoro tacos."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Valeria",
                "npcName": "Valeria",
                "text": "¿Te gusta el fútbol, Mateo?",
                "npcMessage": "¿Te gusta el fútbol, Mateo?",
                "translation": "Você gosta de futebol, Mateo?"
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "No mucho, prefiero el baloncesto. Pero me encantan los partidos internacionales.",
                "npcMessage": "No mucho, prefiero el baloncesto. Pero me encantan los partidos internacionales.",
                "translation": "Não muito, prefiro basquete. Mas adoro as partidas internacionais."
            },
            {
                "speaker": "Valeria",
                "npcName": "Valeria",
                "text": "A mí me apasionan todos los deportes.",
                "npcMessage": "A mí me apasionan todos los deportes.",
                "translation": "Eu sou apaixonada por todos os esportes."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Me molesta el ruido'?",
                "options": [
                    {
                        "label": "O barulho me incomoda",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Gosto de barulho",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que dizemos 'Me gustan los gatos' em vez de 'Me gusta los gatos'?",
                "options": [
                    {
                        "label": "Porque 'los gatos' está no plural e é o sujeito gramatical da frase",
                        "isCorrect": true,
                        "explanation": "Exato! Regra fundamental do verbo gustar."
                    },
                    {
                        "label": "Por causa do pronome Me",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer dizer de forma polida que tem muito interesse em aprender arte. O que diz?",
                "options": [
                    {
                        "label": "Me interesa mucho aprender historia del arte.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Yo gusto arte",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'A mi hermana le encantan los animales.'",
                "options": [
                    {
                        "label": "Minha irmã adora os animais.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Minha irmã tem animais.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a função do 'A mí' na frase 'A mí me gusta la paella'?",
                "options": [
                    {
                        "label": "Enfatizar o sujeito/pessoa de quem é o gosto",
                        "isCorrect": true,
                        "explanation": "Fantástico! Redundância enfática natural em espanhol."
                    },
                    {
                        "label": "É um erro gramatical",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_12",
        "title": "12. Describiendo Personas y Lugares",
        "level": "A2",
        "description": "Domine adjetivos de caráter, aparência e atmosfera (simpático, aburrido, acogedor, ruidoso, tranquilo, moderno).",
        "icon": "🏞️",
        "stage1_context": {
            "missionTitle": "Módulo 12: Describiendo Personas y Lugares",
            "missionDescription": "Aprenda a fazer descrições vívidas de personalidade de pessoas e qualidades de bairros, cidades e locais.",
            "audioGuide": "Esta ciudad es muy acogedora. Mi vecino es simpático y tranquilo."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Simpático / Amable",
                "Portuguese": "Simpático / Amável",
                "Audio": "Simpático / Amable",
                "timeContext": "Qualidade positiva de personalidade."
            },
            {
                "type": "vocab",
                "Spanish": "Acogedor / Acogedora",
                "Portuguese": "Achegado / Acolhedor",
                "Audio": "Acogedor / Acogedora",
                "timeContext": "Adjetivo para lugares calorosos e agradáveis."
            },
            {
                "type": "vocab",
                "Spanish": "Ruidoso / Ruidosa",
                "Portuguese": "Barulhento / Barulhenta",
                "Audio": "Ruidoso / Ruidosa",
                "timeContext": "Característica de lugares com muito barulho."
            },
            {
                "type": "vocab",
                "Spanish": "Tranquilo / Calmo",
                "Portuguese": "Tranquilo / Calmo",
                "Audio": "Tranquilo / Calmo",
                "timeContext": "Ambiente ou pessoa sossegada."
            },
            {
                "type": "vocab",
                "Spanish": "Aburrido / Aburrida",
                "Portuguese": "Chato / Entediante",
                "Audio": "Aburrido / Aburrida",
                "timeContext": "Pessoa chata ou lugar monótono."
            },
            {
                "type": "grammar_pill",
                "title": "Concordância e Gênero dos Adjetivos",
                "rule": "Adjetivos terminados em -o mudam para -a no feminino (simpático/simpática). Adjetivos em -or ganham -ora (acogedor/acogedora). Adjetivos em -e ou consoante mantêm a forma (amable, grande).",
                "formula": "-o ➔ -a | -or ➔ -ora | -e ➔ invariável",
                "example": "Un pueblo acogedor. / Una casa acogedora. / Un chico amable."
            },
            {
                "type": "grammar_pill",
                "title": "Ser vs. Estar com Adjetivos de Qualidade",
                "rule": "Usa-se SER para características inerentes (Esta ciudad es ruidosa) e ESTAR para estados temporários (El restaurante está lleno hoy).",
                "formula": "SER + qualidade permanente | ESTAR + estado temporário",
                "example": "Juan es aburrido (ele é chato). / Juan está aburrido (ele está entediado)."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como descrever um restaurante acolhedor em espanhol?",
                "options": [
                    "Un restaurante muy acogedor",
                    "Un restaurante simpático",
                    "Un restaurante ruidosa",
                    "Un restaurante aburridor"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual a diferença entre 'Es aburrido' e 'Está aburrido'?",
                "options": [
                    "'Es aburrido' = É chato; 'Está aburrido' = Está entediado",
                    "São idênticos",
                    "Ambos significam divertido",
                    "Nenhum existe"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Nuestra nueva oficina es amplia y muy luminosa.'",
                "options": [
                    "Nosso novo escritório é amplo e muito luminoso.",
                    "Nosso escritório é antigo.",
                    "O escritório é escuro.",
                    "Mudei de escritório."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual é o feminino de 'trabajador' (trabalhador)?",
                "options": [
                    "Trabajadora",
                    "Trabajadore",
                    "Trabajadora de más",
                    "Trabajadorita"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual adjetivo descreve uma rua com muito tráfego e barulho?",
                "options": [
                    "Ruidosa",
                    "Tranquila",
                    "Silenciosa",
                    "Acogedora"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Madrid es una ciudad muy acogedora, pero algunas calles son ruidosas.",
                "words": [
                    "Madrid",
                    "es",
                    "una",
                    "ciudad",
                    "muy",
                    "acogedora,",
                    "pero",
                    "algunas",
                    "calles",
                    "son",
                    "ruidosas."
                ],
                "translation": "Madri é uma cidade muito acolhedora, mas algumas ruas são barulhentas."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Pablo",
                "npcName": "Pablo",
                "text": "¿Cómo es tu nuevo barrio, Carmen?",
                "npcMessage": "¿Cómo es tu nuevo barrio, Carmen?",
                "translation": "Como é seu novo bairro, Carmen?"
            },
            {
                "speaker": "Carmen",
                "npcName": "Carmen",
                "text": "Es muy tranquilo y bonito. Los vecinos son amables.",
                "npcMessage": "Es muy tranquilo y bonito. Los vecinos son amables.",
                "translation": "É muito tranquilo e bonito. Os vizinhos são amáveis."
            },
            {
                "speaker": "Pablo",
                "npcName": "Pablo",
                "text": "¡Qué suerte! El mío es un poco ruidoso.",
                "npcMessage": "¡Qué suerte! El mío es un poco ruidoso.",
                "translation": "Que sorte! O meu é um pouco barulhento."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Una persona amable'?",
                "options": [
                    {
                        "label": "Uma pessoa gentil / amável",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Uma pessoa brava",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é a forma correta do adjetivo no feminino plural para 'acogedor'?",
                "options": [
                    {
                        "label": "Acogedoras",
                        "isCorrect": true,
                        "explanation": "Exato! Acogedor ➔ acogedora ➔ acogedoras."
                    },
                    {
                        "label": "Acogedores",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer elogiar o ambiente de uma pousada na praia. O que diz?",
                "options": [
                    {
                        "label": "La posada es muy acogedora y tranquila.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "La posada es ruidosa",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Mis compañeros de clase son muy simpáticos.'",
                "options": [
                    {
                        "label": "Meus colegas de classe são muito simpáticos.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Meus colegas são velhos.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa 'Ser listo' vs 'Estar listo'?",
                "options": [
                    {
                        "label": "'Ser listo' = Ser esperto/inteligente; 'Estar listo' = Estar pronto/preparado",
                        "isCorrect": true,
                        "explanation": "Fantástico! Nuance clássica de Ser e Estar."
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
        "id": "es_a2_mod_13",
        "title": "13. Comparativos y Superlativos",
        "level": "A2",
        "description": "Forme comparativos avançados e superlativos absolutos (el mejor, el peor, grandísimo, facilísimo, riquísimo).",
        "icon": "🏆",
        "stage1_context": {
            "missionTitle": "Módulo 13: Comparativos y Superlativos",
            "missionDescription": "Aprenda a destacar elementos no grau máximo de qualidade usando superlativos relativos e o sufixo -ísimo/a.",
            "audioGuide": "Esta paella está riquísima. Es el mejor restaurante de la ciudad."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "El mejor / La mejor",
                "Portuguese": "O melhor / A melhor",
                "Audio": "El mejor / La mejor",
                "timeContext": "Superlativo irregular de bueno."
            },
            {
                "type": "vocab",
                "Spanish": "El peor / La peor",
                "Portuguese": "O pior / A pior",
                "Audio": "El peor / La peor",
                "timeContext": "Superlativo irregular de malo."
            },
            {
                "type": "vocab",
                "Spanish": "Riquísimo / Riquísima",
                "Portuguese": "Deliciosíssimo / Muito gostoso",
                "Audio": "Riquísimo / Riquísima",
                "timeContext": "Superlativo absoluto de rico (saboroso)."
            },
            {
                "type": "vocab",
                "Spanish": "Facilísimo / Facilísima",
                "Portuguese": "Facílimo / Muito fácil",
                "Audio": "Facilísimo / Facilísima",
                "timeContext": "Superlativo absoluto de fácil."
            },
            {
                "type": "vocab",
                "Spanish": "El más alto / La más alta",
                "Portuguese": "O mais alto / A mais alta",
                "Audio": "El más alto / La más alta",
                "timeContext": "Superlativo relativo em um grupo."
            },
            {
                "type": "grammar_pill",
                "title": "Superlativos Relativos com Artigo + Más/Menos",
                "rule": "Para indicar o grau máximo dentro de um grupo, usa-se: Artigo definido (el/la/los/las) + más/menos + adjetivo + de...",
                "formula": "El/La + más + adjetivo + de + [grupo]",
                "example": "María es la chica más inteligente de la clase."
            },
            {
                "type": "grammar_pill",
                "title": "Formação do Superlativo Absoluto (-ísimo)",
                "rule": "Retira-se a última vogal do adjetivo e adiciona-se -ísimo/a/os/as. Se terminar em -c muda para -qu- (rico ➔ riquísimo); se em -g muda para -gu- (largo ➔ larguísimo).",
                "formula": "Adjetivo (-o) + -ísimo/a",
                "example": "Un examen facilísimo. / Una comida riquísima."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'O melhor restaurante da cidade' em espanhol?",
                "options": [
                    "El mejor restaurante de la ciudad",
                    "El más bueno restaurante",
                    "El mayor restaurante",
                    "El restaurante mejorísimo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é o superlativo absoluto de 'rico' (saboroso)?",
                "options": [
                    "Riquísimo",
                    "Ricoísimo",
                    "Riquísimo com c",
                    "Ricísimo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Este examen fue facilísimo.'",
                "options": [
                    "Esta prova foi extremamente fácil.",
                    "Esta prova foi difícil.",
                    "A prova foi amanhã.",
                    "Não teve prova."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual é o oposto de 'el mejor'?",
                "options": [
                    "El peor",
                    "El más malo",
                    "El menor",
                    "El peorísimo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Como transformar o adjetivo 'largo' (comprido) em superlativo absoluto?",
                "options": [
                    "Larguísimo (com -gu-)",
                    "Largoísimo",
                    "Largísimo",
                    "Muy largo sólo"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Esta tarta de chocolate está riquísima, es la mejor de la pastelería.",
                "words": [
                    "Esta",
                    "tarta",
                    "de",
                    "chocolate",
                    "está",
                    "riquísima,",
                    "es",
                    "la",
                    "mejor",
                    "de",
                    "la",
                    "pastelería."
                ],
                "translation": "Esta torta de chocolate está deliciosíssima, é a melhor da confeitaria."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Gabriel",
                "npcName": "Gabriel",
                "text": "¿Qué tal la cena en el nuevo restaurante?",
                "npcMessage": "¿Qué tal la cena en el nuevo restaurante?",
                "translation": "Que tal o jantar no novo restaurante?"
            },
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "¡Increíble! La comida estaba riquísima y el servicio fue buenísimo.",
                "npcMessage": "¡Increíble! La comida estaba riquísima y el servicio fue buenísimo.",
                "translation": "Incrível! A comida estava deliciosíssima e o serviço foi muito bom."
            },
            {
                "speaker": "Gabriel",
                "npcName": "Gabriel",
                "text": "¡Entonces es el mejor sitio de la zona!",
                "npcMessage": "¡Entonces es el mejor sitio de la zona!",
                "translation": "Então é o melhor lugar da região!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Buenísimo'?",
                "options": [
                    {
                        "label": "Muitíssimo bom / Excelente",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Ruim",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que o adjetivo 'rico' vira 'riquísimo' com 'qu'?",
                "options": [
                    {
                        "label": "Para manter a sonoridade dura do /k/ antes da vogal 'i'",
                        "isCorrect": true,
                        "explanation": "Exato! Regra ortográfica do espanhol (c ➔ qu antes de e/i)."
                    },
                    {
                        "label": "É uma exceção sem regra",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você provou um prato maravilhoso e quer fazer um elogio no nível máximo. O que diz?",
                "options": [
                    {
                        "label": "¡Este plato está riquísimo!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Está más bueno",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Es el coche más rápido de la carrera.'",
                "options": [
                    {
                        "label": "É o carro mais rápido da corrida.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O carro é lento.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Quais são os superlativos irregulares para 'alto' e 'bajo' no sentido de hierarquia?",
                "options": [
                    {
                        "label": "El supremo / El inferior",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "El altísimo sólo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_14",
        "title": "14. Expressando Desejos e Intenções",
        "level": "A2",
        "description": "Expresse vontades, planos e preferências com Querer + Infinitivo, Me gustaría..., Tengo ganas de...",
        "icon": "🎯",
        "stage1_context": {
            "missionTitle": "Módulo 14: Expressando Desejos e Intenções",
            "missionDescription": "Aprenda as fórmulas ideais para declarar seus planos futuros e desejos pessoais em conversas reais.",
            "audioGuide": "Quiero aprender español. Me gustaría viajar a Perú este año."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Quiero + Infinitivo",
                "Portuguese": "Quero + verbo",
                "Audio": "Quiero",
                "timeContext": "Desejo direto e decidido."
            },
            {
                "type": "vocab",
                "Spanish": "Me gustaría + Infinitivo",
                "Portuguese": "Gostaria de + verbo",
                "Audio": "Me gustaría",
                "timeContext": "Expressão de desejo polida e cortês."
            },
            {
                "type": "vocab",
                "Spanish": "Tengo ganas de + Infinitivo",
                "Portuguese": "Estou com vontade de + verbo",
                "Audio": "Tengo ganas de",
                "timeContext": "Desejo espontâneo ou apetite por algo."
            },
            {
                "type": "vocab",
                "Spanish": "Prefiero + Infinitivo",
                "Portuguese": "Prefiro + verbo",
                "Audio": "Prefiero",
                "timeContext": "Expressão de escolha entre alternativas."
            },
            {
                "type": "vocab",
                "Spanish": "Pienso + Infinitivo",
                "Portuguese": "Penso em / Pretendo + verbo",
                "Audio": "Pienso",
                "timeContext": "Intenção ou plano já estruturado."
            },
            {
                "type": "grammar_pill",
                "title": "Uso do Infinitivo após Verbos de Desejo",
                "rule": "Em espanhol, os verbos 'querer', 'preferir', 'pensar' e a estrutura 'me gustaría' são seguidos diretamente pelo infinitivo, sem a preposição 'de'. Apenas 'tener ganas de' exige 'de'.",
                "formula": "Querer / Preferir / Me gustaría + Infinitivo (sem preposição)",
                "example": "Quiero comprar un coche. (E não: Quiero de comprar)."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença de Tom: Quiero vs. Me gustaría",
                "rule": "Usar 'Quiero' é muito direto (ex: em restaurantes ou decisões firmes). Usar 'Me gustaría' (condicional cortês) suaviza o pedido de forma elegante.",
                "formula": "Quiero (direto) vs. Me gustaría (cortês)",
                "example": "Me gustaría reservar una mesa para dos personas."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Eu gostaria de viajar para o Peru' em espanhol?",
                "options": [
                    "Me gustaría viajar a Perú",
                    "Quiero de viajar a Perú",
                    "Tengo ganas viajar Perú",
                    "Me gusto viajar Perú"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual estrutura exige obrigatoriamente a preposição 'de' antes do infinitivo?",
                "options": [
                    "Tengo ganas de + infinitivo",
                    "Quiero + infinitivo",
                    "Me gustaría + infinitivo",
                    "Prefiero + infinitivo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Tengo ganas de comer tacos esta noche.'",
                "options": [
                    "Estou com vontade de comer tacos esta noite.",
                    "Comi tacos ontem.",
                    "Não gosto de tacos.",
                    "Vou comprar tacos amanhã."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Como expressar a intenção firme de estudar amanhã?",
                "options": [
                    "Pienso estudiar mañana",
                    "Pienso de estudiar mañana",
                    "Pensando estudiar mañana",
                    "Pensé estudiar"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual é a forma cortês de pedir uma informação no balcão?",
                "options": [
                    "Me gustaría hacer una pregunta",
                    "Quiero preguntar ya",
                    "Tengo ganas hablar",
                    "Prefiero información"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Este año me gustaría viajar a España y aprender más español.",
                "words": [
                    "Este",
                    "año",
                    "me",
                    "gustaría",
                    "viajar",
                    "a",
                    "España",
                    "y",
                    "aprender",
                    "más",
                    "español."
                ],
                "translation": "Este ano eu gostaria de viajar para a Espanha e aprender mais espanhol."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Lorena",
                "npcName": "Lorena",
                "text": "¿Qué quieres hacer este fin de semana, Diego?",
                "npcMessage": "¿Qué quieres hacer este fin de semana, Diego?",
                "translation": "O que você quer fazer este fim de semana, Diego?"
            },
            {
                "speaker": "Diego",
                "npcName": "Diego",
                "text": "Tengo ganas de ir al cine. ¿Y tú?",
                "npcMessage": "Tengo ganas de ir al cine. ¿Y tú?",
                "translation": "Estou com vontade de ir ao cinema. E você?"
            },
            {
                "speaker": "Lorena",
                "npcName": "Lorena",
                "text": "A mí me gustaría descansar en casa y leer un libro.",
                "npcMessage": "A mí me gustaría descansar en casa y leer un libro.",
                "translation": "Eu gostaria de descansar em casa e ler um livro."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Tengo ganas de descansar'?",
                "options": [
                    {
                        "label": "Estou com vontade de descansar",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Não quero descansar",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) É correto dizer 'Quiero de ir al cine' em espanhol?",
                "options": [
                    {
                        "label": "Incorreto, não se usa a preposição 'de' após o verbo 'querer'",
                        "isCorrect": true,
                        "explanation": "Exato! O correto é 'Quiero ir'."
                    },
                    {
                        "label": "Sim, é perfeito",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está em um hotel e quer pedir um quarto silencioso educadamente. O que diz?",
                "options": [
                    {
                        "label": "Me gustaría una habitación tranquila, por favor.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Dame una habitación",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Prefiero tomar agua en lugar de refresco.'",
                "options": [
                    {
                        "label": "Prefiro tomar água em vez de refrigerante.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Quero refrigerante com água.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual verbo da lista também altera sua raiz no presente (e ➔ ie) para expressar preferência?",
                "options": [
                    {
                        "label": "Preferir (yo prefiero, tú prefieres)",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Gostar",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_15",
        "title": "15. Pedindo e Dando Conselhos Leves",
        "level": "A2",
        "description": "Ofereça conselhos e sugestões amigáveis com Deberías..., Tienes que..., Es mejor..., Te recomiendo...",
        "icon": "💡",
        "stage1_context": {
            "missionTitle": "Módulo 15: Pedindo e Dando Conselhos Leves",
            "missionDescription": "Aprenda a dar sugestões amigáveis e conselhos úteis para amigos e colegas no dia a dia.",
            "audioGuide": "Deberías beber más agua. Es mejor salir temprano para evitar el tráfico."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Deberías + Infinitivo",
                "Portuguese": "Você deveria + verbo",
                "Audio": "Deberías",
                "timeContext": "Conselho amigável e moderado."
            },
            {
                "type": "vocab",
                "Spanish": "Tienes que + Infinitivo",
                "Portuguese": "Você tem que + verbo",
                "Audio": "Tienes que",
                "timeContext": "Recomendação forte ou necessidade."
            },
            {
                "type": "vocab",
                "Spanish": "Es mejor + Infinitivo",
                "Portuguese": "É melhor + verbo",
                "Audio": "Es mejor",
                "timeContext": "Sugestão impessoal de boa prática."
            },
            {
                "type": "vocab",
                "Spanish": "Te recomiendo + Infinitivo/Substantivo",
                "Portuguese": "Recomendo-te / Recomendo a você",
                "Audio": "Te recomiendo",
                "timeContext": "Recomendação pessoal de um lugar ou ação."
            },
            {
                "type": "vocab",
                "Spanish": "Hay que + Infinitivo",
                "Portuguese": "É preciso / Há que + verbo",
                "Audio": "Hay que",
                "timeContext": "Dever geral aplicável a todos."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença entre 'Tienes que' e 'Hay que'",
                "rule": "'Tienes que + infinitivo' dirige-se a uma pessoa específica (Tú tienes que estudiar). 'Hay que + infinitivo' é uma obrigação ou conselho impessoal geral (Hay que cuidar la naturaleza).",
                "formula": "Tienes que + persona específica | Hay que + regra geral",
                "example": "Tienes que descansar hoy. / Hay que llegar a tiempo a los exámenes."
            },
            {
                "type": "grammar_pill",
                "title": "Uso do Condicional Suave 'Deberías'",
                "rule": "Usar o verbo 'deber' no condicional (deberías) suaviza a recomendação para que não pareça uma ordem imposta.",
                "formula": "Deberías + Infinitivo",
                "example": "Deberías hablar con el médico antes de viajar."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dar um conselho amigável 'Você deveria descansar mais' em espanhol?",
                "options": [
                    "Deberías descansar más",
                    "Tienes descansar más",
                    "Hay que tú descansas",
                    "Debes de descansar"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual estrutura usamos para expressar uma regra geral impessoal (ex: É preciso ter paciência)?",
                "options": [
                    "Hay que tener paciencia",
                    "Tienes que tener paciencia",
                    "Deberías paciencia",
                    "Es recomendado paciencia"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Es mejor salir con tiempo para no perder el tren.'",
                "options": [
                    "É melhor sair com tempo para não perder o trem.",
                    "O trem já saiu.",
                    "Você perdeu o trem.",
                    "O trem é rápido."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. O que significa a expressão 'Te recomiendo visitar la catedral'?",
                "options": [
                    "Recomendo que você visite a catedral",
                    "Visitei a catedral",
                    "A catedral está fechada",
                    "Não vá à catedral"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual frase expressa uma recomendação direta e firme?",
                "options": [
                    "Tienes que comer algo antes de salir.",
                    "Quizás comas algo.",
                    "Comiste algo.",
                    "Comer es bueno."
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Si tienes dolor de cabeza, deberías tomar agua y descansar.",
                "words": [
                    "Si",
                    "tienes",
                    "dolor",
                    "de",
                    "cabeza,",
                    "deberías",
                    "tomar",
                    "agua",
                    "y",
                    "descansar."
                ],
                "translation": "Se você tem dor de cabeça, deveria tomar água e descansar."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "Me siento muy cansada últimamente, Marcos.",
                "npcMessage": "Me siento muy cansada últimamente, Marcos.",
                "translation": "Sinto-me muito cansada ultimamente, Marcos."
            },
            {
                "speaker": "Marcos",
                "npcName": "Marcos",
                "text": "Deberías acostarte más temprano y hacer ejercicio.",
                "npcMessage": "Deberías acostarte más temprano y hacer ejercicio.",
                "translation": "Você deveria se deitar mais cedo e fazer exercício."
            },
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "Tienes razón. Es mejor cambiar mis hábitos.",
                "npcMessage": "Tienes razón. Es melhor mudar meus hábitos.",
                "translation": "Você tem razão. É melhor mudar meus hábitos."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Tienes razón'?",
                "options": [
                    {
                        "label": "Você tem razão / Está certo",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Você está errado",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual a diferença entre 'Deberías ir' e 'Tienes que ir'?",
                "options": [
                    {
                        "label": "'Deberías ir' é um conselho suave; 'Tienes que ir' é uma indicação mais forte/obrigatória",
                        "isCorrect": true,
                        "explanation": "Exato! Gradação de intensidade no conselho."
                    },
                    {
                        "label": "Não há diferença nenhuma",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Um amigo está gripado e pergunta sua opinião. O que diz?",
                "options": [
                    {
                        "label": "Deberías ir al médico y tomar un té caliente.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Hay que bailar",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Para aprender idiomas, hay que practicar todos los días.'",
                "options": [
                    {
                        "label": "Para aprender idiomas, é preciso praticar todos os dias.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Aprendi idiomas praticando ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual verbo é usado na expressão 'Es mejor'?",
                "options": [
                    {
                        "label": "Verbo SER (Es = 3ª pessoa do singular do Presente)",
                        "isCorrect": true,
                        "explanation": "Fantástico!"
                    },
                    {
                        "label": "Verbo ESTAR",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_16",
        "title": "16. Partes del Cuerpo Humano",
        "level": "A2",
        "description": "Aprenda o vocabulário das partes do corpo e a expressar dores físicas com me duele / me duelen.",
        "icon": "🩺",
        "stage1_context": {
            "missionTitle": "Módulo 16: Partes del Cuerpo Humano",
            "missionDescription": "Aprenda a identificar as partes do corpo e a explicar exatamente onde sente dor ou incômodo físico.",
            "audioGuide": "Me duele la cabeza. Me duelen los pies tras caminar mucho. ¿Qué te duele?"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "La cabeza",
                "Portuguese": "A cabeça",
                "Audio": "La cabeza",
                "timeContext": "Parte superior do corpo."
            },
            {
                "type": "vocab",
                "Spanish": "El estómago",
                "Portuguese": "O estômago",
                "Audio": "El estómago",
                "timeContext": "Região abdominal."
            },
            {
                "type": "vocab",
                "Spanish": "La espalda",
                "Portuguese": "As costas",
                "Audio": "La espalda",
                "timeContext": "Região posterior do tronco."
            },
            {
                "type": "vocab",
                "Spanish": "Los ojos / Las manos",
                "Portuguese": "Os olhos / As mãos",
                "Audio": "Los ojos / Las manos",
                "timeContext": "Órgãos da visão e extremidades superiores."
            },
            {
                "type": "vocab",
                "Spanish": "Los pies",
                "Portuguese": "Os pés",
                "Audio": "Los pies",
                "timeContext": "Extremidades inferiores de sustentação."
            },
            {
                "type": "grammar_pill",
                "title": "Estrutura de Dor Física (Me duele vs. Me duelen)",
                "rule": "O verbo 'doler' concorda com a parte do corpo: singular ➔ me duele (me duele la cabeza); plural ➔ me duelen (me duelen los pies). Usa-se obrigatoriamente artigo definido (la/los) e não pronome possessivo.",
                "formula": "[Me/Te/Le/Nos] + duele + [artigo + singular] | duelen + [artigo + plural]",
                "example": "Me duele la espalda. / A Juan le duelen las piernas."
            },
            {
                "type": "grammar_pill",
                "title": "Expressão Alternativa 'Tener dolor de + substantivo'",
                "rule": "Outra forma comum de expressar dores em espanhol é com o verbo 'tener': 'Tengo dolor de muelas' (dor de dente), 'Tengo dolor de cabeza'.",
                "formula": "Tener + dolor de + [parte do corpo sem artigo]",
                "example": "Tengo dolor de estómago desde esta mañana."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Dói-me a cabeça' em espanhol?",
                "options": [
                    "Me duele la cabeza",
                    "Me duelo mi cabeza",
                    "Yo me duele la cabeza",
                    "Me duelen la cabeza"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual forma do verbo 'doler' usamos quando a dor é nos pés (plural)?",
                "options": [
                    "Me duelen los pies (plural)",
                    "Me duele los pies",
                    "Me dolió los pies sólo",
                    "Tengo doler los pies"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Tengo dolor de espalda después de trabajar en el jardín.'",
                "options": [
                    "Tenho dor nas costas depois de trabalhar no jardim.",
                    "Estou com dor de cabeça no trabalho.",
                    "Minhas pernas doem.",
                    "Trabalhei no jardim ontem."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Em espanhol, usa-se artigo definido ou pronome possessivo com 'me duele' (ex: minha cabeça)?",
                "options": [
                    "Usa-se obrigatoriamente artigo definido (la cabeza) e nunca possessivo",
                    "Usa-se possessivo (mi cabeza)",
                    "Tanto faz",
                    "Não se usa nada"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual palavra significa 'as costas' em espanhol?",
                "options": [
                    "La espalda",
                    "Los hombros",
                    "El pecho",
                    "El cuello"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Me duele la cabeza y me duelen los ojos tras trabajar en el ordenador.",
                "words": [
                    "Me",
                    "duele",
                    "la",
                    "cabeza",
                    "y",
                    "me",
                    "duelen",
                    "los",
                    "ojos",
                    "tras",
                    "trabajar",
                    "en",
                    "el",
                    "ordenador."
                ],
                "translation": "Dói-me a cabeça e doem-me os olhos depois de trabalhar no computador."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Médico",
                "npcName": "Médico",
                "text": "Buenas tardes. ¿Qué le pasa? ¿Qué le duele?",
                "npcMessage": "Buenas tardes. ¿Qué le pasa? ¿Qué le duele?",
                "translation": "Boa tarde. O que o senhor tem? O que lhe dói?"
            },
            {
                "speaker": "Paciente",
                "npcName": "Paciente",
                "text": "Me duele mucho la garganta y me duelen los oídos.",
                "npcMessage": "Me duele mucho la garganta y me duelen los oídos.",
                "translation": "Dói-me muito a garganta e doem-me os ouvidos."
            },
            {
                "speaker": "Médico",
                "npcName": "Médico",
                "text": "Vamos a examinar su garganta. Abras la boca, por favor.",
                "npcMessage": "Vamos a examinar su garganta. Abras la boca, por favor.",
                "translation": "Vamos examinar sua garganta. Abra a boca, por favor."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'La espalda'?",
                "options": [
                    {
                        "label": "As costas",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "A garganta",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) É correto dizer 'Me duele mi cabeza' em espanhol?",
                "options": [
                    {
                        "label": "Incorreto, deve-se usar artigo definido: 'Me duele la cabeza'",
                        "isCorrect": true,
                        "explanation": "Exato! Em espanhol não se usam possessivos com partes do corpo."
                    },
                    {
                        "label": "Sim, é a forma padrão",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Um colega está mancando e você pergunta o que ele sente. O que diz?",
                "options": [
                    {
                        "label": "¿Te duelen los pies o las piernas?",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¿Tienes dolor de cabeza?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'A María le duelen las manos por el frío.'",
                "options": [
                    {
                        "label": "A María doem as mãos por causa do frio.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "María tem as mãos frias.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'El oído' e 'La oreja'?",
                "options": [
                    {
                        "label": "'El oído' é o órgão interno da audição; 'La oreja' é a parte externa da orelha",
                        "isCorrect": true,
                        "explanation": "Fantástico! Distinção anátomica importante em espanhol."
                    },
                    {
                        "label": "São sinônimos exatos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_17",
        "title": "17. En el Médico / En la Farmacia",
        "level": "A2",
        "description": "Descreva sintomas de doenças (fiebre, gripe), peça medicamentos na farmácia e entenda prescrições.",
        "icon": "💊",
        "stage1_context": {
            "missionTitle": "Módulo 17: En el Médico / En la Farmacia",
            "missionDescription": "Domine a comunicação em consultas médicas e farmácias para explicar como se sente e comprar medicamentos.",
            "audioGuide": "Tengo fiebre y tos. Necesito un jarabe para la tos y unas pastillas para la cabeza."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Tengo fiebre / tos",
                "Portuguese": "Estou com febre / tosse",
                "Audio": "Tengo fiebre / tos",
                "timeContext": "Sintoma de doença expresso com o verbo tener."
            },
            {
                "type": "vocab",
                "Spanish": "Estoy resfriado/a",
                "Portuguese": "Estou resfriado(a)",
                "Audio": "Estoy resfriado/a",
                "timeContext": "Estado temporário de resfriado comum."
            },
            {
                "type": "vocab",
                "Spanish": "El jarabe",
                "Portuguese": "O xarope",
                "Audio": "El jarabe",
                "timeContext": "Medicamento líquido para tosse."
            },
            {
                "type": "vocab",
                "Spanish": "Las pastillas / Comprimidos",
                "Portuguese": "As pílulas / Comprimidos",
                "Audio": "Las pastillas / Comprimidos",
                "timeContext": "Medicamentos em comprimido."
            },
            {
                "type": "vocab",
                "Spanish": "La receta médica",
                "Portuguese": "A receita médica",
                "Audio": "La receta médica",
                "timeContext": "Documento com indicação médica de remédios."
            },
            {
                "type": "grammar_pill",
                "title": "Expressão de Sintomas (Tener vs. Estar)",
                "rule": "Usam-se 'tener + substantivo' para sintomas e dores específicas (tengo fiebre, tengo gripe, tengo dolor) e 'estar + adjetivo' para estados de saúde (estoy enfermo, estoy resfriado, estoy mareado).",
                "formula": "Tener + [substantivo de sintoma] | Estar + [adjetivo de estado]",
                "example": "Tengo fiebre pero no estoy resfriado."
            },
            {
                "type": "grammar_pill",
                "title": "Fazer Pedidos na Farmácia com Cortesia",
                "rule": "Para pedir medicamentos, usam-se as fórmulas: '¿Tiene algo para...?', 'Quisiera unas pastillas para...', 'Necesito una crema para...'.",
                "formula": "¿Tiene algo para / Quisiera + [remédio] + para + [sintoma]",
                "example": "¿Tiene algo para el dolor de estómago?"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como pedir algo para a tosse na farmácia em espanhol?",
                "options": [
                    "¿Tiene algo para la tos, por favor?",
                    "Quiero tos medicamento",
                    "Dame tos remedio",
                    "Tengo tos remedio"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual estrutura está correta para expressar que você está com febre?",
                "options": [
                    "Tengo fiebre",
                    "Estoy fiebre",
                    "Soy fiebre",
                    "Hago fiebre"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'El médico me dio una receta para comprar el antibiótico.'",
                "options": [
                    "O médico deu-me uma receita para comprar o antibiótico.",
                    "O médico comprou remédio.",
                    "Fui à farmácia sem receita.",
                    "O antibiótico acabou."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual palavra significa 'xarope' em espanhol?",
                "options": [
                    "El jarabe",
                    "La pastilla",
                    "La cura",
                    "El té"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Como dizer 'Estou resfriado' usando o verbo correto?",
                "options": [
                    "Estoy resfriado/a",
                    "Tengo resfriado sólo",
                    "Soy resfriado",
                    "Hago resfriado"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Tengo fiebre y me duele la garganta, necesito una receta médica.",
                "words": [
                    "Tengo",
                    "fiebre",
                    "y",
                    "me",
                    "duele",
                    "la",
                    "garganta,",
                    "necesito",
                    "una",
                    "receta",
                    "médica."
                ],
                "translation": "Tenho febre e dói-me a garganta, preciso de uma receita médica."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Farmacéutico",
                "npcName": "Farmacéutico",
                "text": "Buenos días. ¿En qué puedo ayudarle?",
                "npcMessage": "Buenos días. ¿En qué puedo ayudarle?",
                "translation": "Bons dias. Em que posso ajudá-lo(a)?"
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "Hola. Tengo mucha tos y fiebre. ¿Tiene algún jarabe eficaz?",
                "npcMessage": "Hola. Tengo mucha tos y fiebre. ¿Tiene algún jarabe eficaz?",
                "translation": "Olá. Tenho muita tosse e febre. O senhor tem algum xarope eficaz?"
            },
            {
                "speaker": "Farmacéutico",
                "npcName": "Farmacéutico",
                "text": "Sí, este jarabe es excelente. Tome ocho mililitros cada ocho horas.",
                "npcMessage": "Sí, este jarabe es excelente. Tome ocho mililitros cada ocho horas.",
                "translation": "Sim, este xarope é excelente. Tome oito mililitros a cada oito horas."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'El jarabe'?",
                "options": [
                    {
                        "label": "O xarope",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "O comprimido",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que dizemos 'Tengo fiebre' com o verbo 'tener'?",
                "options": [
                    {
                        "label": "Porque 'fiebre' é um substantivo que expressa uma condição que se possui no momento",
                        "isCorrect": true,
                        "explanation": "Exato! Sintomas em espanhol usam o verbo tener."
                    },
                    {
                        "label": "Porque se usa estar para tudo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você entra na farmácia querendo remédio para dor de cabeça. O que diz?",
                "options": [
                    {
                        "label": "Quisiera unas pastillas para el dolor de cabeza, por favor.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Tengo cabeza grande",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'El farmacéutico me recomendó descansar dos días.'",
                "options": [
                    {
                        "label": "O farmacêutico recomendou-me descansar dois dias.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O médico mandou trabalhar.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'Constipado' na Espanha e em países da América Latina?",
                "options": [
                    {
                        "label": "Na Espanha 'Estar constipado' significa estar resfriado/gripado (falso amigo com o português!)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Alerta crucial de falso cognato médico."
                    },
                    {
                        "label": "Significa prisão de ventre na Espanha",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_18",
        "title": "18. Estada em Hotéis e Hostales",
        "level": "A2",
        "description": "Aprenda a fazer check-in, solicitar serviços de quarto e relatar problemas técnicos na recepção.",
        "icon": "🏨",
        "stage1_context": {
            "missionTitle": "Módulo 18: Estada em Hotéis e Hostales",
            "missionDescription": "Pratique frases essenciais para reservas, pedidos na recepção e resolução de imprevistos em hotéis.",
            "audioGuide": "Tengo una reserva a nombre de García. No funciona el aire acondicionado en mi habitación."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Reserva a nombre de...",
                "Portuguese": "Reserva em nome de...",
                "Audio": "Reserva a nombre de...",
                "timeContext": "Frase de identificação ao fazer check-in."
            },
            {
                "type": "vocab",
                "Spanish": "Habitación individual / doble",
                "Portuguese": "Quarto de solteiro / casal (duplo)",
                "Audio": "Habitación individual / doble",
                "timeContext": "Tipos padrão de acomodação."
            },
            {
                "type": "vocab",
                "Spanish": "La llave / La tarjeta",
                "Portuguese": "A chave / O cartão",
                "Audio": "La llave / La tarjeta",
                "timeContext": "Dispositivo de acesso ao quarto."
            },
            {
                "type": "vocab",
                "Spanish": "El aire acondicionado",
                "Portuguese": "O ar-condicionado",
                "Audio": "El aire acondicionado",
                "timeContext": "Equipamento de refrigeração do quarto."
            },
            {
                "type": "vocab",
                "Spanish": "La calefacción",
                "Portuguese": "O aquecimento",
                "Audio": "La calefacción",
                "timeContext": "Sistema de aquecimento para o inverno."
            },
            {
                "type": "grammar_pill",
                "title": "Pedidos Corteses no Hotel com Quisiera / Querría",
                "rule": "Para fazer pedidos na recepção de forma elegante, usa-se 'Quisiera + verbo/substantivo' ou 'Querría + verbo/substantivo'.",
                "formula": "Quisiera / Querría + [pedido cortês]",
                "example": "Quisiera pedir una toalla extra, por favor."
            },
            {
                "type": "grammar_pill",
                "title": "Relatar Defeitos Técnicos (No funciona... / No hay...)",
                "rule": "Para comunicar falhas no quarto, usam-se as estruturas simples 'No funciona + equipamento' ou 'No hay + item em falta'.",
                "formula": "No funciona + [aparelho] | No hay + [item]",
                "example": "No funciona el aire acondicionado. / No hay agua caliente."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como informar à recepção do hotel que o ar-condicionado não funciona?",
                "options": [
                    "No funciona el aire acondicionado",
                    "Aire no trabaja",
                    "El aire está malo",
                    "Sin aire acondicionado"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a expressão correta para indicar em nome de quem está a reserva?",
                "options": [
                    "Tengo una reserva a nombre de García",
                    "Tengo reserva en nombre García",
                    "Reserva de García por mi",
                    "Mi nombre tiene reserva"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: '¿A qué hora es el desayuno por la mañana?'",
                "options": [
                    "A que horas é o café da manhã de manhã?",
                    "Onde fica o restaurante?",
                    "A que horas é o jantar?",
                    "O café da manhã é gratuito?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual palavra é usada para 'quarto de casal' em espanhol?",
                "options": [
                    "Habitación doble",
                    "Habitación de pareja",
                    "Habitación casada",
                    "Habitación dos"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Como pedir educadamente uma chave extra na recepção?",
                "options": [
                    "Quisiera una copia de la llave, por favor.",
                    "Dame la llave ya.",
                    "Quiero llave extra.",
                    "Llave por favor."
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Tengo una reserva para dos noches y quisiera una habitación tranquila.",
                "words": [
                    "Tengo",
                    "una",
                    "reserva",
                    "para",
                    "dos",
                    "noches",
                    "y",
                    "quisiera",
                    "una",
                    "habitación",
                    "tranquila."
                ],
                "translation": "Tenho uma reserva para duas noites e gostaria de um quarto tranquilo."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Recepcionista",
                "npcName": "Recepcionista",
                "text": "¡Buenas tardes! Bienvenido al Hotel Real. ¿Tiene reserva?",
                "npcMessage": "¡Buenas tardes! Bienvenido al Hotel Real. ¿Tiene reserva?",
                "translation": "Boa tarde! Bem-vindo ao Hotel Real. O senhor tem reserva?"
            },
            {
                "speaker": "Huésped",
                "npcName": "Huésped",
                "text": "Buenas tardes. Sí, tengo una reserva a nombre de Mateo Silva.",
                "npcMessage": "Buenas tardes. Sí, tengo una reserva a nombre de Mateo Silva.",
                "translation": "Boa tarde. Sim, tenho uma reserva em nome de Mateo Silva."
            },
            {
                "speaker": "Recepcionista",
                "npcName": "Recepcionista",
                "text": "Perfecto. Aquí tiene su tarjeta para la habitación 304.",
                "npcMessage": "Perfecto. Aquí tiene su tarjeta para la habitación 304.",
                "translation": "Perfeito. Aqui está seu cartão para o quarto 304."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'La habitación doble'?",
                "options": [
                    {
                        "label": "O quarto duplo / de casal",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "O quarto individual",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual a vantagem de usar 'Quisiera' em vez de 'Quiero' no hotel?",
                "options": [
                    {
                        "label": "'Quisiera' demonstra cortesia e polidez ao fazer solicitações aos funcionários",
                        "isCorrect": true,
                        "explanation": "Exato! É a norma de etiqueta hispânica em serviços."
                    },
                    {
                        "label": "Não faz diferença",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você percebe que não há água quente no seu chuveiro. O que fala com a recepção?",
                "options": [
                    {
                        "label": "Disculpe, no hay agua caliente en mi habitación.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "El agua es fría siempre",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¿El servicio de wifi está incluido en el precio?'",
                "options": [
                    {
                        "label": "O serviço de wi-fi está incluído no preço?",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Qual a senha do wi-fi?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a palavra 'Hostal' na Espanha?",
                "options": [
                    {
                        "label": "Pequeno hotel / hospedaria familiar de boa qualidade (não confundir com albergue 'hostel')",
                        "isCorrect": true,
                        "explanation": "Fantástico! Nuance cultural de hospedagem na Espanha."
                    },
                    {
                        "label": "Albergue de juventude obrigatoriamente",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_19",
        "title": "19. Compras de Roupas e Calçados",
        "level": "A2",
        "description": "Pergunte por tamanhos (talla/número), experimente roupas (probador) e comente o caimento (me queda bien/mal).",
        "icon": "🛍️",
        "stage1_context": {
            "missionTitle": "Módulo 19: Compras de Roupas e Calçados",
            "missionDescription": "Aprenda o vocabulário e as expressões necessárias para comprar roupas, provar peças e pedir tamanhos diferentes.",
            "audioGuide": "¿Tiene esta camiseta en una talla más grande? ¿Dónde está el probador?"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "La talla",
                "Portuguese": "O tamanho (de roupa: S, M, L, XL)",
                "Audio": "La talla",
                "timeContext": "Medida para peças de vestuário."
            },
            {
                "type": "vocab",
                "Spanish": "El número",
                "Portuguese": "O número (de calçado)",
                "Audio": "El número",
                "timeContext": "Tamanho para sapatos e tênis."
            },
            {
                "type": "vocab",
                "Spanish": "El probador",
                "Portuguese": "O provador",
                "Audio": "El probador",
                "timeContext": "Cabine para experimentar as roupas."
            },
            {
                "type": "vocab",
                "Spanish": "Me queda bien / mal",
                "Portuguese": "Fica bem / mal em mim (caimento)",
                "Audio": "Me queda bien / mal",
                "timeContext": "Avaliação do caimento da peça no corpo."
            },
            {
                "type": "vocab",
                "Spanish": "Probarse",
                "Portuguese": "Experimentar / Provar (roupa)",
                "Audio": "Probarse",
                "timeContext": "Verbo reflexivo para vestir roupas antes de comprar."
            },
            {
                "type": "grammar_pill",
                "title": "O Verbo de Afeção 'Quedar' para Caimento de Roupas",
                "rule": "O verbo 'quedar' funciona como 'gustar' para indicar se uma peça veste bem ou se fica grande/pequena: 'Me queda bien', 'Te queda grande', 'Nos quedan estrechos los zapatos'.",
                "formula": "[Pronome me/te/le...] + queda/quedan + [adjetivo/advérbio]",
                "example": "Esta camisa me queda muy bien. / Esos pantalones le quedan largos."
            },
            {
                "type": "grammar_pill",
                "title": "Uso do Verbo Reflexivo 'Probarse'",
                "rule": "Ao usar 'probarse' acompanhado de infinitivo ou verbo auxiliar, o pronome reflexivo pode ir antes do verbo conjugado ou preso ao infinitivo.",
                "formula": "Me voy a probar esto | Voy a probarme esto",
                "example": "¿Puedo probarme este vestido? / Me lo voy a probar."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como perguntar se há um tamanho maior de uma camiseta em espanhol?",
                "options": [
                    "¿Tiene esta camiseta en una talla más grande?",
                    "¿Tiene número más grande de camisa?",
                    "¿La talla es mayor?",
                    "¿Hay ropa grande?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual termo é usado especificamente para o tamanho de calçados (ex: calço 40)?",
                "options": [
                    "El número (ex: Mi número es el 40)",
                    "La talla",
                    "El tamaño",
                    "La medida"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Este pantalón me queda un poco estrecho en la cintura.'",
                "options": [
                    "Esta calça fica um pouco apertada na cintura.",
                    "Esta calça fica larga.",
                    "Gostei desta calça.",
                    "Comprei uma calça nova."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Como perguntar onde fica a cabine de experimentar roupas?",
                "options": [
                    "¿Dónde están los probadores?",
                    "¿Dónde está la prueba?",
                    "¿Dónde se prueba?",
                    "¿Dónde está la habitación?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual é o significado da expressão 'Te queda genial ese color'?",
                "options": [
                    "Essa cor fica ótima em você",
                    "Essa cor é feia",
                    "Não compre essa cor",
                    "Você não gosta dessa cor"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¿Dónde están los probadores? Quiero probarme este pantalón en una talla más pequeña.",
                "words": [
                    "¿Dónde",
                    "están",
                    "los",
                    "probadores?",
                    "Quiero",
                    "probarme",
                    "este",
                    "pantalón",
                    "en",
                    "una",
                    "talla",
                    "más",
                    "pequeña."
                ],
                "translation": "Onde estão os provadores? Quero provar esta calça em um tamanho menor."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Dependiente",
                "npcName": "Dependiente",
                "text": "Hola, ¿necesita ayuda o busca una talla en particular?",
                "npcMessage": "Hola, ¿necesita ayuda o busca una talla en particular?",
                "translation": "Olá, precisa de ajuda ou procura um tamanho em particular?"
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "Hola. Esta chaqueta me queda un poco grande. ¿Tiene una talla M?",
                "npcMessage": "Hola. Esta chaqueta me queda un poco grande. ¿Tiene una talla M?",
                "translation": "Olá. Esta jaqueta fica um pouco grande em mim. Tem um tamanho M?"
            },
            {
                "speaker": "Dependiente",
                "npcName": "Dependiente",
                "text": "Sí, aquí tiene la M. Los probadores están al fondo a la izquierda.",
                "npcMessage": "Sí, aquí tiene la M. Los probadores están al fondo a la izquierda.",
                "translation": "Sim, aqui está a M. Os provadores ficam ao fundo à esquerda."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'La talla' no contexto de loja de roupas?",
                "options": [
                    {
                        "label": "O tamanho da roupa (P, M, G, GG)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "O preço da peça",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que dizemos 'Los zapatos me quedan pequeños' no plural 'quedan'?",
                "options": [
                    {
                        "label": "Porque o sujeito 'los zapatos' é plural e exige a concordância do verbo quedar",
                        "isCorrect": true,
                        "explanation": "Exato! Regra do verbo de afeção quedar."
                    },
                    {
                        "label": "Porque o pronome é me",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está provando uma calça e ela ficou perfeita. O que diz ao vendedor?",
                "options": [
                    {
                        "label": "¡Me queda perfecta, me la llevo!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "No me queda nada bien",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¿Puedo pagar con tarjeta de crédito?'",
                "options": [
                    {
                        "label": "Posso pagar com cartão de crédito?",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Você aceita dinheiro em espécie?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Quais são as siglas das tallas em espanhol (Equivalentes a P, M, G, GG)?",
                "options": [
                    {
                        "label": "S (Pequeña/Small), M (Mediana), L (Grande), XL (Extra Grande)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Padrão internacional amplamente usado nos países hispânicos."
                    },
                    {
                        "label": "P, M, G, GG exactamente igual",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_20",
        "title": "20. Pronombres de Objeto Directo e Indirecto I",
        "level": "A2",
        "description": "Substitua substantivos por pronomes de objeto direto (lo, la, los, las) e indireto (me, te, le, nos, les) para evitar repetições.",
        "icon": "🔄",
        "stage1_context": {
            "missionTitle": "Módulo 20: Pronombres de Objeto Directo e Indirecto I",
            "missionDescription": "Domine a substituição de complementos na frase em espanhol para obter um discurso mais fluido e natural.",
            "audioGuide": "¿Compraste el libro? Sí, lo compré ayer. ¿Escribiste a María? Sí, le escribí una carta."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Lo / La",
                "Portuguese": "O / A (Objeto Direto Singular)",
                "Audio": "Lo / La",
                "timeContext": "Substitui substantivo masculino/feminino singular."
            },
            {
                "type": "vocab",
                "Spanish": "Los / Las",
                "Portuguese": "Os / As (Objeto Direto Plural)",
                "Audio": "Los / Las",
                "timeContext": "Substitui substantivo masculino/feminino plural."
            },
            {
                "type": "vocab",
                "Spanish": "Le / Les",
                "Portuguese": "Lhe / Lhes (Objeto Indireto Singular/Plural)",
                "Audio": "Le / Les",
                "timeContext": "Substitui a pessoa recebedora da ação."
            },
            {
                "type": "vocab",
                "Spanish": "Me / Te / Nos",
                "Portuguese": "Me / Te / Nos (Objeto Direto/Indireto)",
                "Audio": "Me / Te / Nos",
                "timeContext": "Pronomes de 1ª e 2ª pessoas do singular e plural."
            },
            {
                "type": "vocab",
                "Spanish": "Ya lo sé",
                "Portuguese": "Já sei / Já o sei",
                "Audio": "Ya lo sé",
                "timeContext": "Expressão comum que substitui toda uma frase prévia por 'lo'."
            },
            {
                "type": "grammar_pill",
                "title": "Pronomes de Objeto Direto (OD: Lo, La, Los, Las)",
                "rule": "Os pronomes de objeto direto substituem a coisa ou pessoa sobre a qual recai a ação direta. Colocam-se IMEDIATAMENTE ANTES do verbo conjugado.",
                "formula": "[Objeto Direto: Lo/La/Los/Las] + verbo conjugado",
                "example": "¿Has visto la película? ➔ Sí, la vi ayer."
            },
            {
                "type": "grammar_pill",
                "title": "Pronomes de Objeto Indireto (OI: Me, Te, Le, Nos, Os, Les)",
                "rule": "Os pronomes de objeto indireto indicam para quem ou a quem se destina a ação. 'Le' e 'les' referem-se à 3ª pessoa (a él/ella/usted/ellos).",
                "formula": "[Objeto Indireto: Me/Te/Le...] + verbo conjugado",
                "example": "Compré un regalo a Juan. ➔ Le compré un regalo."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como substituir 'el coche' na frase 'Compré el coche ayer' usando pronome de objeto direto?",
                "options": [
                    "Lo compré ayer",
                    "La compré ayer",
                    "Le compré ayer",
                    "Se compré ayer"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Na pergunta '¿Conoces a María?', qual é a resposta correta substituindo 'a María' por pronome?",
                "options": [
                    "Sí, la conozco",
                    "Sí, lo conozco",
                    "Sí, le conozco",
                    "Sí, me conozco"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Le envié un mensaje a mi hermano.'",
                "options": [
                    "Enviei uma mensagem ao meu irmão.",
                    "Meu irmão enviou-me uma mensagem.",
                    "Enviei a mensagem ontem.",
                    "Irmão escreveu um livro."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Onde se posiciona o pronome de objeto em relação ao verbo conjugado simples?",
                "options": [
                    "Imediatamente antes do verbo (ex: Lo compré)",
                    "Imediatamente depois do verbo",
                    "No final da frase",
                    "Depende da vontade do falante"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Como substituir 'las llaves' na frase 'Busco las llaves'?",
                "options": [
                    "Las busco",
                    "Los busco",
                    "La busco",
                    "Le busco"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¿Has visto mis llaves? Sí, las vi sobre la mesa de la cocina.",
                "words": [
                    "¿Has",
                    "visto",
                    "mis",
                    "llaves?",
                    "Sí,",
                    "las",
                    "vi",
                    "sobre",
                    "la",
                    "mesa",
                    "de",
                    "la",
                    "cocina."
                ],
                "translation": "Você viu minhas chaves? Sim, vi-as sobre a mesa da cozinha."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "¿Tienes el libro de español, Mateo?",
                "npcMessage": "¿Tienes el libro de español, Mateo?",
                "translation": "Você tem o livro de espanhol, Mateo?"
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "Sí, lo tengo en mi mochila. ¿Lo necesitas?",
                "npcMessage": "Sí, lo tengo en mi mochila. ¿Lo necesitas?",
                "translation": "Sim, tenho-o na minha mochila. Você precisa dele?"
            },
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "Sí, por favor. ¿Me lo puedes prestar?",
                "npcMessage": "Sí, por favor. ¿Me lo puedes prestar?",
                "translation": "Sim, por favor. Você pode emprestar-me?"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Ya lo sé'?",
                "options": [
                    {
                        "label": "Já sei / Já estou ciente",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Não sei nada",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual a diferença entre 'Lo vi' e 'Le hablé'?",
                "options": [
                    {
                        "label": "'Lo vi' usa objeto direto (ver alguém); 'Le hablé' usa objeto indireto (falar A alguém)",
                        "isCorrect": true,
                        "explanation": "Exato! Regência dos verbos ver (direto) e hablar (indireto)."
                    },
                    {
                        "label": "Não há diferença nenhuma",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Alguém pergunta se você trouxe as malas. O que responde usando pronomes?",
                "options": [
                    {
                        "label": "Sí, las traje todas.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Sí, los traje",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¿Nos llamas esta noche?'",
                "options": [
                    {
                        "label": "Você nos liga esta noite?",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Ligamos para você ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que é o fenômeno do 'Leísmo' aceito na Espanha?",
                "options": [
                    {
                        "label": "Uso de 'le' em vez de 'lo' para objeto direto masculino referente a uma pessoa (ex: Le veo a Juan)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Fenômeno dialetal reconhecido pela Real Academia Española."
                    },
                    {
                        "label": "Erro grave não permitido",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_21",
        "title": "21. Hacer y Aceptar Invitaciones",
        "level": "A2",
        "description": "Convide amigos para passeios com ¿Quedamos? e aceite com entusiasmo usando ¡Vale!, Genial e Me encantaría.",
        "icon": "🎉",
        "stage1_context": {
            "missionTitle": "Módulo 21: Hacer y Aceptar Invitaciones",
            "missionDescription": "Aprenda a propor planos sociais e aceitar convites de forma amigável e entusiasmada.",
            "audioGuide": "¿Quedamos para tomar un café esta tarde? ¡Vale, genial! Me encantaría."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "¿Quedamos a las...?",
                "Portuguese": "Combinamos às...? / Vamos nos encontrar às...?",
                "Audio": "¿Quedamos a las...?",
                "timeContext": "Expressão clássica para agendar encontros sociais."
            },
            {
                "type": "vocab",
                "Spanish": "¿Te apetece ir a...?",
                "Portuguese": "Você tem vontade de ir a...? / Te apetece ir a...?",
                "Audio": "¿Te apetece ir a...?",
                "timeContext": "Pergunta sobre apetite/vontade de fazer um plano."
            },
            {
                "type": "vocab",
                "Spanish": "¡Vale!",
                "Portuguese": "Tudo bem! / Beleza! / Combinado!",
                "Audio": "¡Vale!",
                "timeContext": "Confirmação e aceitação universal na Espanha."
            },
            {
                "type": "vocab",
                "Spanish": "¡Genial! / ¡Estupendo!",
                "Portuguese": "Genial! / Maravilhoso!",
                "Audio": "¡Genial! / ¡Estupendo!",
                "timeContext": "Reação entusiasmada a uma boa proposta."
            },
            {
                "type": "vocab",
                "Spanish": "Me encantaría",
                "Portuguese": "Eu adoraria",
                "Audio": "Me encantaría",
                "timeContext": "Forma elegante de aceitar um convite."
            },
            {
                "type": "grammar_pill",
                "title": "Uso do Verbo 'Quedar' para Encontros Sociais",
                "rule": "Em espanhol, o verbo 'quedar' é usado para combinar encontros com amigos: '¿Quedamos a las seis?' (Combinamos às seis?), 'Quedamos en la plaza' (Nos encontramos na praça).",
                "formula": "Quedar + a las [hora] / en [local]",
                "example": "¿A qué hora quedamos mañana?"
            },
            {
                "type": "grammar_pill",
                "title": "Verbo de Afeção 'Apetecer' para Propostas",
                "rule": "O verbo 'apetecer' funciona exatamente como 'gustar' para perguntar se alguém quer fazer algo no momento: '¿Te apetece tomar algo?' / '¿Os apetece ir al cine?'.",
                "formula": "[Pronome me/te/le...] + apetece + [infinitivo / substantivo]",
                "example": "¿Te apetece una pizza?"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como propor um encontro com amigos às oito horas em espanhol?",
                "options": [
                    "¿Quedamos a las ocho?",
                    "¿Encontramos a las ocho?",
                    "¿Combinamos ocho horas?",
                    "¿Hacemos cita a las ocho?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a resposta curta e entusiasmada para aceitar um convite na Espanha?",
                "options": [
                    "¡Vale, genial!",
                    "No quiero",
                    "Quizás no",
                    "Lo siento"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: '¿Te apetece ir a la playa este sábado?'",
                "options": [
                    "Você tem vontade de ir à praia este sábado?",
                    "Você vai à praia sozinho?",
                    "A praia está cheia no sábado?",
                    "Não gosto da praia."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual é a forma cortês e elegante de dizer 'Eu adoraria' ao aceitar um convite?",
                "options": [
                    "Me encantaría",
                    "Me encanto",
                    "Yo encantar",
                    "Yo gusto"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. O que significa a expressão 'Quedamos en el centro'?",
                "options": [
                    "Nos encontramos / Combinamos no centro",
                    "Ficamos presos no centro",
                    "Saimos do centro",
                    "Perdemos o centro"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¿Te apetece tomar un café esta tarde? ¡Vale, me encantaría!",
                "words": [
                    "¿Te",
                    "apetece",
                    "tomar",
                    "un",
                    "café",
                    "esta",
                    "tarde?",
                    "¡Vale,",
                    "me",
                    "encantaría!"
                ],
                "translation": "Você tem vontade de tomar um café esta tarde? Tudo bem, eu adoraria!"
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Gonzalo",
                "npcName": "Gonzalo",
                "text": "Hola Elena, ¿te apetece ir al cine este viernes?",
                "npcMessage": "Hola Elena, ¿te apetece ir al cine este viernes?",
                "translation": "Olá Elena, você tem vontade de ir ao cinema esta sexta?"
            },
            {
                "speaker": "Elena",
                "npcName": "Elena",
                "text": "¡Me encantaría! ¿A qué hora quedamos?",
                "npcMessage": "¡Me encantaría! ¿A qué hora quedamos?",
                "translation": "Eu adoraria! A que horas combinamos?"
            },
            {
                "speaker": "Gonzalo",
                "npcName": "Gonzalo",
                "text": "¿Quedamos a las siete en la entrada del cine?",
                "npcMessage": "¿Quedamos a las siete en la entrada del cine?",
                "translation": "Combinamos às sete na entrada do cinema?"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa '¡Vale!' em espanhol da Espanha?",
                "options": [
                    {
                        "label": "Tudo bem / Ok / Combinado",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Não vale nada",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que dizemos '¿Te apetece...?' com o verbo na 3ª pessoa?",
                "options": [
                    {
                        "label": "Porque 'apetecer' é um verbo de afeção (como gustar) e concorda com a ação ou objeto proposto",
                        "isCorrect": true,
                        "explanation": "Exato! Regra fundamental do verbo apetecer."
                    },
                    {
                        "label": "Porque o sujeito é te",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Um colega convida você para jantar e você quer aceitar com entusiasmo. O que diz?",
                "options": [
                    {
                        "label": "¡Estupendo, me encantaría ir!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "No me apetece",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¿A qué hora quedamos mañana para estudiar?'",
                "options": [
                    {
                        "label": "A que horas nos encontramos amanhã para estudar?",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Estudamos ontem até tarde?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'Quedar' e 'Quedarse'?",
                "options": [
                    {
                        "label": "'Quedar' = Combinar/marcar um encontro; 'Quedarse' = Permanecer/ficar num lugar",
                        "isCorrect": true,
                        "explanation": "Fantástico! Diferença semântica essencial entre a forma simples e a reflexiva."
                    },
                    {
                        "label": "São sinônimos idênticos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_22",
        "title": "22. Rejeitar Convites com Polidez",
        "level": "A2",
        "description": "Recuse convites de forma educada justificando com Lo siento, es que tengo que... e Me gustaría pero...",
        "icon": "🤝",
        "stage1_context": {
            "missionTitle": "Módulo 22: Rejeitar Convites com Polidez",
            "missionDescription": "Aprenda as fórmulas sociais para recusar convites com polidez e sem soar indelicado.",
            "audioGuide": "Lo siento, es que tengo que trabajar esta tarde. Me gustaría ir, pero no puedo."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Lo siento",
                "Portuguese": "Sinto muito / Desculpe",
                "Audio": "Lo siento",
                "timeContext": "Fórmula inicial de desculpas sutis."
            },
            {
                "type": "vocab",
                "Spanish": "Es que...",
                "Portuguese": "É que... (introduz justificativa suave)",
                "Audio": "Es que...",
                "timeContext": "Conector clássico para justificar a recusa."
            },
            {
                "type": "vocab",
                "Spanish": "Me gustaría, pero...",
                "Portuguese": "Eu gostaria, mas...",
                "Audio": "Me gustaría, pero...",
                "timeContext": "Apreço ao convite seguido de impedimento."
            },
            {
                "type": "vocab",
                "Spanish": "Lamentablemente no puedo",
                "Portuguese": "Lamentavelmente não posso",
                "Audio": "Lamentablemente no puedo",
                "timeContext": "Recusa formal e educada."
            },
            {
                "type": "vocab",
                "Spanish": "Otra vez será",
                "Portuguese": "Fica para uma próxima vez",
                "Audio": "Otra vez será",
                "timeContext": "Encerramento cortês mantendo a porta aberta."
            },
            {
                "type": "grammar_pill",
                "title": "O Atenuador Justificativo 'Es que...'",
                "rule": "Em espanhol, após pedir desculpas por não poder aceitar um plano, usa-se 'Es que + justificativa' para explicar a razão de forma natural e informal.",
                "formula": "Lo siento + es que + [motivo / compromisso]",
                "example": "Lo siento, es que tengo un examen mañana."
            },
            {
                "type": "grammar_pill",
                "title": "Combinação 'Me gustaría + pero'",
                "rule": "Demonstra-se boa vontade usando a estrutura do condicional 'Me gustaría' acompanhada do conector de oposição 'pero' antes de declarar a impossibilidade.",
                "formula": "Me gustaría + [infinitivo] + pero + [impedimento]",
                "example": "Me gustaría ir a la fiesta, pero tengo que trabajar."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como recusar educadamente um convite explicando que você tem que trabalhar?",
                "options": [
                    "Lo siento, es que tengo que trabajar",
                    "No quiero ir a trabajar",
                    "Yo no voy porque no",
                    "Trabajo es malo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual expressão introduz suavemente uma justificativa de recusa em espanhol?",
                "options": [
                    "Es que...",
                    "Por eso...",
                    "Sin embargo...",
                    "Además..."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Me gustaría ir a tu cumpleaños, pero lamentablemente no puedo.'",
                "options": [
                    "Eu gostaria de ir ao seu aniversário, mas lamentavelmente não posso.",
                    "Vou ao seu aniversário amanhã.",
                    "Não gosto de festas de aniversário.",
                    "Aniversários são divertidos."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Como encerrar uma recusa mantendo a amizade e sugerindo uma oportunidade futura?",
                "options": [
                    "Otra vez será (Fica para a próxima)",
                    "Nunca más iré",
                    "No me hables más",
                    "Adiós para siempre"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual frase demonstra a combinação perfeita de desculpa e justificativa polida?",
                "options": [
                    "Lo siento mucho, es que tengo un compromiso familiar.",
                    "No voy a tu casa.",
                    "Tengo cosas que hacer.",
                    "No me apetece salir."
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Lo siento, me gustaría ir al cine, pero es que tengo que estudiar.",
                "words": [
                    "Lo",
                    "siento,",
                    "me",
                    "gustaría",
                    "ir",
                    "al",
                    "cine,",
                    "pero",
                    "es",
                    "que",
                    "tengo",
                    "que",
                    "estudiar."
                ],
                "translation": "Sinto muito, eu gostaria de ir ao cinema, mas é que tenho que estudar."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Raquel",
                "npcName": "Raquel",
                "text": "¿Vienes a cenar con nosotros esta noche, Marcos?",
                "npcMessage": "¿Vienes a cenar con nosotros esta noche, Marcos?",
                "translation": "Você vem jantar conosco esta noite, Marcos?"
            },
            {
                "speaker": "Marcos",
                "npcName": "Marcos",
                "text": "¡Uf, me gustaría mucho! Pero es que mañana me levanto muy temprano.",
                "npcMessage": "¡Uf, me gustaría mucho! Pero es que mañana me levanto muy temprano.",
                "translation": "Uf, eu gostaria muito! Mas é que amanhã me levanto muito cedo."
            },
            {
                "speaker": "Raquel",
                "npcName": "Raquel",
                "text": "¡Vaya, qué pena! No te preocupes, ¡otra vez será!",
                "npcMessage": "¡Vaya, qué pena! No te preocupes, ¡otra vez será!",
                "translation": "Poxa, que pena! Não se preocupe, fica para a próxima!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Otra vez será'?",
                "options": [
                    {
                        "label": "Fica para uma próxima vez / Deixa para a próxima",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Nunca mais nos veremos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é a função da partícula 'es que' ao recusar um convite?",
                "options": [
                    {
                        "label": "Suavizar a justificativa para que a negação não pareça ríspida ou seca",
                        "isCorrect": true,
                        "explanation": "Exato! É o conector de polidez explicativa mais comum do espanhol."
                    },
                    {
                        "label": "É uma pergunta direta",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Um amigo convida para uma viagem no fim de semana e você tem provas na faculdade. O que responde?",
                "options": [
                    {
                        "label": "Me gustaría ir, pero es que tengo exámenes este fin de semana.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "No viajo nunca",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Lamentablemente tengo otros planes para el domingo.'",
                "options": [
                    {
                        "label": "Lamentavelmente tenho outros planos para o domingo.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Domingo vou viajar com você.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Por que é recomendável usar o condicional 'Me gustaría' antes do 'pero' ao recusar?",
                "options": [
                    {
                        "label": "Porque valoriza a intenção de quem convidou antes de apresentar o obstáculo real",
                        "isCorrect": true,
                        "explanation": "Fantástico! Regra de etiqueta social e pragmática hispânica."
                    },
                    {
                        "label": "É obrigatório por lei gramatical",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_23",
        "title": "23. Futuro Próximo (Ir a + Infinitivo)",
        "level": "A2",
        "description": "Expresse planos e ações futuras imediatas com a estrutura perifrástica ir a + infinitivo.",
        "icon": "🚀",
        "stage1_context": {
            "missionTitle": "Módulo 23: Futuro Próximo (Ir a + Infinitivo)",
            "missionDescription": "Domine a estrutura de futuro mais usada na linguagem falada cotidiana para expressar o que vai fazer.",
            "audioGuide": "Esta noche voy a cenar con mis amigos. ¿Qué vas a hacer el próximo fin de semana?"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Voy a + Infinitivo",
                "Portuguese": "Eu vou + verbo",
                "Audio": "Voy a",
                "timeContext": "1ª pessoa do futuro próximo."
            },
            {
                "type": "vocab",
                "Spanish": "Vas a + Infinitivo",
                "Portuguese": "Você vai + verbo",
                "Audio": "Vas a",
                "timeContext": "2ª pessoa (tú) do futuro próximo."
            },
            {
                "type": "vocab",
                "Spanish": "Vamos a + Infinitivo",
                "Portuguese": "Nós vamos + verbo / Vamos + verbo",
                "Audio": "Vamos a",
                "timeContext": "1ª pessoa do plural do futuro próximo."
            },
            {
                "type": "vocab",
                "Spanish": "Va a llover",
                "Portuguese": "Vai chover",
                "Audio": "Va a llover",
                "timeContext": "Previsão iminente do tempo."
            },
            {
                "type": "vocab",
                "Spanish": "El próximo año",
                "Portuguese": "No próximo ano",
                "Audio": "El próximo año",
                "timeContext": "Marcador temporal futuro."
            },
            {
                "type": "grammar_pill",
                "title": "Estrutura Obrigatória Perifrástica (IR + A + Infinitivo)",
                "rule": "O futuro próximo é formado por: Verbo IR no presente (voy, vas, va, vamos, vais, van) + PREPOSIÇÃO 'A' (obrigatoria!) + VERBO NO INFINITIVO.",
                "formula": "IR (voy/vas/va...) + A + Infinitivo",
                "example": "Voy a estudiar. / Vamos a comer paella. (Nunca dizer: Voy estudiar)."
            },
            {
                "type": "grammar_pill",
                "title": "Marcadores Temporais de Futuro (Próximo / Que viene)",
                "rule": "Utilizam-se marcadores de tempo futuro como: esta noche, mañana, el próximo fin de semana, el mes que viene.",
                "formula": "Marcador Futuro + Ir a + Infinitivo",
                "example": "El mes que viene voy a cambiar de coche."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'Eu vou estudar espanhol amanhã' usando o futuro próximo?",
                "options": [
                    "Mañana voy a estudiar español",
                    "Mañana voy estudiar español",
                    "Mañana va a estudiar",
                    "Mañana fui a estudiar"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual elemento é OBRIGATÓRIO entre o verbo 'ir' e o infinitivo no futuro próximo em espanhol?",
                "options": [
                    "A preposição 'a' (ex: voy A comer)",
                    "A preposição 'de'",
                    "A conjunção 'que'",
                    "Nenhum elemento"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: '¿Qué vas a hacer el próximo fin de semana?'",
                "options": [
                    "O que você vai fazer no próximo fim de semana?",
                    "O que você fez no fim de semana passado?",
                    "Você vai trabalhar sábado?",
                    "Onde você mora no fim de semana?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Como dizer 'Nós vamos viajar para a Espanha no ano que vem'?",
                "options": [
                    "El año que viene vamos a viajar a España",
                    "Año que viene ir a viajar",
                    "Año pasado fuimos a España",
                    "Vamos viajar a España"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual frase expressa uma previsão evidente sobre o clima?",
                "options": [
                    "Mira las nubes negras, va a llover.",
                    "Ayer llovió mucho.",
                    "Siempre llueve aquí.",
                    "No me gusta la lluvia."
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "El próximo verano vamos a viajar a México y vamos a visitar las pirámides.",
                "words": [
                    "El",
                    "próximo",
                    "verano",
                    "vamos",
                    "a",
                    "viajar",
                    "a",
                    "México",
                    "y",
                    "vamos",
                    "a",
                    "visitar",
                    "las",
                    "pirámides."
                ],
                "translation": "No próximo verão vamos viajar para o México e vamos visitar as pirâmides."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Andrés",
                "npcName": "Andrés",
                "text": "¿Qué vas a hacer esta noche, Carmen?",
                "npcMessage": "¿Qué vas a hacer esta noche, Carmen?",
                "translation": "O que você vai fazer esta noite, Carmen?"
            },
            {
                "speaker": "Carmen",
                "npcName": "Carmen",
                "text": "Voy a cenar con mis padres y luego voy a ver una película.",
                "npcMessage": "Voy a cenar con mis padres y luego voy a ver una película.",
                "translation": "Vou jantar com meus pais e depois vou ver um filme."
            },
            {
                "speaker": "Andrés",
                "npcName": "Andrés",
                "text": "¡Qué bien! Yo voy a quedarme en casa descansando.",
                "npcMessage": "¡Qué bien! Yo voy a quedarme en casa descansando.",
                "translation": "Que bom! Eu vou ficar em casa descansando."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'El próximo año'?",
                "options": [
                    {
                        "label": "No próximo ano / Ano que vem",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "No ano passado",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é o erro na frase 'Yo voy comer paella'?",
                "options": [
                    {
                        "label": "Falta a preposição 'a' entre 'voy' e o infinitivo 'comer' (deve ser 'voy A comer')",
                        "isCorrect": true,
                        "explanation": "Exato! A preposição A é indispensável na perífrase de futuro."
                    },
                    {
                        "label": "O verbo comer está errado",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer avisar aos colegas que a reunião vai começar em cinco minutos. O que diz?",
                "options": [
                    {
                        "label": "La reunión va a empezar en cinco minutos.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "La reunión empezó ayer",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Mis hermanos van a comprar un piso en Madrid.'",
                "options": [
                    {
                        "label": "Meus irmãos vão comprar um apartamento em Madri.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Meus irmãos compraram uma casa.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'el mes próximo' e 'el mes que viene'?",
                "options": [
                    {
                        "label": "Não há diferença de significado, ambas indicam o mês futuro seguinte",
                        "isCorrect": true,
                        "explanation": "Fantástico! Expressões perfeitamente equivalentes em espanhol."
                    },
                    {
                        "label": "Uma é no passado e a outra no futuro",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_24",
        "title": "24. Verbos Reflexivos da Rutina Completa",
        "level": "A2",
        "description": "Descreva todas as etapas da rotina diária pessoal com verbos reflexivos em -se e alternâncias vocálicas.",
        "icon": "🧼",
        "stage1_context": {
            "missionTitle": "Módulo 24: Verbos Reflexivos da Rutina Completa",
            "missionDescription": "Aprenda a narrar com precisão toda a sua rotina diária do momento em que acorda até a hora de se deitar.",
            "audioGuide": "Me despierto a las siete, me ducho, me visto y por la noche me acuesto temprano."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Despertarse (me despierto)",
                "Portuguese": "Acordar-se (acordo)",
                "Audio": "Despertarse",
                "timeContext": "Verbo reflexivo com mudança vocálica e > ie."
            },
            {
                "type": "vocab",
                "Spanish": "Ducharse (me ducho)",
                "Portuguese": "Tomar banho (tomo banho)",
                "Audio": "Ducharse",
                "timeContext": "Hábito de higiene matinal ou noturno."
            },
            {
                "type": "vocab",
                "Spanish": "Vestirse (me visto)",
                "Portuguese": "Vestir-se (visto-me)",
                "Audio": "Vestirse",
                "timeContext": "Verbo reflexivo com mudança vocálica e > i."
            },
            {
                "type": "vocab",
                "Spanish": "Acostarse (me acuesto)",
                "Portuguese": "Deitar-se / Ir para a cama (deito-me)",
                "Audio": "Acostarse",
                "timeContext": "Verbo reflexivo com mudança vocálica o > ue."
            },
            {
                "type": "vocab",
                "Spanish": "Peinarse / Maquillarse",
                "Portuguese": "Pentear-se / Maquiar-se",
                "Audio": "Peinarse / Maquillarse",
                "timeContext": "Ações de cuidado pessoal na rotina."
            },
            {
                "type": "grammar_pill",
                "title": "Alternâncias Vocálicas em Verbos Reflexivos no Presente",
                "rule": "Alguns verbos reflexivos de rotina sofrem alteração na vogal da raiz no Presente (exceto nas formas nosotros e vosotros): e > ie (despertarse ➔ me despierto), o > ue (acostarse ➔ me acuesto), e > i (vestirse ➔ me visto).",
                "formula": "Despertarse (e>ie) | Acostarse (o>ue) | Vestirse (e>i)",
                "example": "Yo me despierto a las 7:00, pero mi hermano se despierta a las 8:00."
            },
            {
                "type": "grammar_pill",
                "title": "Posicionamento dos Pronomes Reflexivos (Me, Te, Se, Nos, Os, Se)",
                "rule": "Os pronomes reflexivos colocam-se ANTES do verbo conjugado ('Me ducho todos los días') ou ANEXADOS AO FINAL de verbos no infinitivo ou gerúndio ('Voy a ducharme' / 'Estoy duchándome').",
                "formula": "[Me/Te/Se...] + verbo conjugado OR infinitivo + [me/te/se]",
                "example": "Tengo que levantarme temprano mañana."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como conjugamos a 1ª pessoa (Yo) do verbo reflexivo 'despertarse' (e>ie) no presente?",
                "options": [
                    "Me despierto",
                    "Me desperto",
                    "Yo despierto sólo",
                    "Me despierto sem pronome"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a conjugação correta do verbo 'acostarse' (o>ue) para a 3ª pessoa do singular (él/ella)?",
                "options": [
                    "Se acuesta",
                    "Se acosta",
                    "Me acuesto",
                    "Nos acostamos"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Todas las mañanas me ducho y me visto en diez minutos.'",
                "options": [
                    "Todas as manhãs tomo banho e me visto em dez minutos.",
                    "Tomo banho de noite.",
                    "Levanto-me em dez minutos.",
                    "Não me visto de manhã."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual é a alteração vocálica que ocorre no verbo 'vestirse' no presente?",
                "options": [
                    "e > i (yo me visto, tú te vistes)",
                    "e > ie",
                    "o > ue",
                    "Não altera"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Onde pode ser colocado o pronome reflexivo na frase 'Voy a duchar____'?",
                "options": [
                    "Anexado ao final do infinitivo (ducharme)",
                    "Antes de voy somente",
                    "Não se coloca pronome",
                    "Em lugar nenhum"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Normalmente me despierto a las siete de la mañana, me ducho y me visto rápido.",
                "words": [
                    "Normalmente",
                    "me",
                    "despierto",
                    "a",
                    "las",
                    "siete",
                    "de",
                    "la",
                    "mañana,",
                    "me",
                    "ducho",
                    "y",
                    "me",
                    "visto",
                    "rápido."
                ],
                "translation": "Normalmente acordo às sete da manhã, tomo banho e me visto rápido."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "¿A qué hora te despiertas normalmente, Javier?",
                "npcMessage": "¿A qué hora te despiertas normalmente, Javier?",
                "translation": "A que horas você acorda normalmente, Javier?"
            },
            {
                "speaker": "Javier",
                "npcName": "Javier",
                "text": "Me despierto a las seis y media. Me ducho, me visto y desayuno rápido.",
                "npcMessage": "Me despierto a las seis y media. Me ducho, me visto y desayuno rápido.",
                "translation": "Acordo às seis e meia. Tomo banho, me visto e tomo café da manhã rápido."
            },
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "¡Qué temprano! Yo me acuesto muy tarde y me despierto a las ocho.",
                "npcMessage": "¡Qué temprano! Yo me acuesto muy tarde y me despierto a las ocho.",
                "translation": "Que cedo! Eu me deito muito tarde e acordo às oito."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Me acuesto temprano'?",
                "options": [
                    {
                        "label": "Deito-me / Vou para a cama cedo",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Acordo cedo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que as formas 'nosotros' e 'vosotros' não sofrem alternância vocálica (ex: nos acostamos)?",
                "options": [
                    {
                        "label": "Porque a tônica da conjugação recai na terminação e não na raiz do verbo",
                        "isCorrect": true,
                        "explanation": "Exato! Regra universal das alternâncias no presente em espanhol."
                    },
                    {
                        "label": "É uma exceção aleatória",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer contar que costuma se pentear e se maquiar antes de sair. O que diz?",
                "options": [
                    {
                        "label": "Antes de salir me peino y me maquillo.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Me acuesto antes de salir",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Mi hermano se afeita todos los días por la mañana.'",
                "options": [
                    {
                        "label": "Meu irmão se barbea todos os dias de manhã.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Meu irmão toma banho de manhã.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'Lavar' e 'Lavarse'?",
                "options": [
                    {
                        "label": "'Lavar' é transição sobre algo (lavar los platos); 'Lavarse' é ação reflexiva no próprio corpo (lavarse las manos)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Uso reflexivo essencial do espanhol."
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
        "id": "es_a2_mod_25",
        "title": "25. Descrever Clima e Estações Avançado",
        "level": "A2",
        "description": "Fale sobre o clima nas quatro estações do ano e condições meteorológicas detalhadas.",
        "icon": "🌤️",
        "stage1_context": {
            "missionTitle": "Módulo 25: Descrever Clima e Estações Avançado",
            "missionDescription": "Domine a conversa sobre as quatro estações, variações de temperatura e fenômenos do tempo em espanhol.",
            "audioGuide": "En primavera hace buen tiempo. En invierno hace mucho frío y a veces nieva."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "La primavera / El verano",
                "Portuguese": "A primavera / O verão",
                "Audio": "La primavera / El verano",
                "timeContext": "Estações quentes e temperadas do ano."
            },
            {
                "type": "vocab",
                "Spanish": "El otoño / El invierno",
                "Portuguese": "O outono / O inverno",
                "Audio": "El otoño / El invierno",
                "timeContext": "Estações frias e de transição."
            },
            {
                "type": "vocab",
                "Spanish": "Hace viento / Hace fresco",
                "Portuguese": "Faz vento / Está fresco",
                "Audio": "Hace viento / Hace fresco",
                "timeContext": "Condições atmosféricas com o verbo hacer."
            },
            {
                "type": "vocab",
                "Spanish": "Hay niebla / tormenta",
                "Portuguese": "Há neblina / tempestade",
                "Audio": "Hay niebla / tormenta",
                "timeContext": "Fenômenos meteorológicos com o verbo haber (hay)."
            },
            {
                "type": "vocab",
                "Spanish": "Está nublado / lloviendo",
                "Portuguese": "Está nublado / chovendo",
                "Audio": "Está nublado / lloviendo",
                "timeContext": "Estados temporários do céu e precipitação."
            },
            {
                "type": "grammar_pill",
                "title": "Construções Impessoais de Clima (Hacer vs. Hay vs. Estar)",
                "rule": "Usam-se 'Hacer + substantivo' para sensações de temperatura e vento (hace frío, hace calor, hace viento), 'Hay + substantivo' para fenômenos visíveis (hay niebla, hay tormenta) e 'Estar + adjetivo/gerúndio' (está nublado, está lloviendo).",
                "formula": "Hacer + [frio/calor/viento] | Hay + [niebla/tormenta] | Estar + [nublado]",
                "example": "Hoy hace mucho calor y el cielo está despejado."
            },
            {
                "type": "grammar_pill",
                "title": "Verbos Climáticos Puros (Llover e Nievar com Alternância)",
                "rule": "Os verbos 'llover' e 'nievar' usam-se exclusivamente na 3ª pessoa do singular (impessoais) e sofrem alternância vocálica no presente: Llover ➔ Llueve (o > ue) e Nievar ➔ Nieva (e > ie).",
                "formula": "Llueve (llover: o>ue) | Nieva (nievar: e>ie)",
                "example": "En invierno nieva en la montaña y en otoño llueve mucho."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como descrever que está fazendo muito frio e vento no inverno em espanhol?",
                "options": [
                    "En invierno hace mucho frío y hace viento",
                    "En invierno está frío y viento",
                    "En invierno hay frío",
                    "En invierno hace nieve sólo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a conjugação correta do verbo 'nievar' (e>ie) no presente para indicar que neva?",
                "options": [
                    "Nieva (ex: Hoy nieva en la sierra)",
                    "Neva",
                    "Nieve",
                    "Nievando"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'En otoño las hojas caen de los árboles y hay mucha niebla por la mañana.'",
                "options": [
                    "No outono as folhas caem das árvores e há muita neblina de manhã.",
                    "No verão faz muito calor.",
                    "Na primavera chove muito.",
                    "O inverno é frio."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual verbo impessoal acompanha a palavra 'niebla' (neblina) em espanhol?",
                "options": [
                    "Hay (ex: Hay niebla)",
                    "Hace niebla",
                    "Es niebla",
                    "Tiene niebla"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual é a 3ª pessoa do singular do verbo 'llover' (o>ue) no presente?",
                "options": [
                    "Llueve",
                    "Llove",
                    "Lluvia",
                    "Lloviendo"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "En invierno en el norte hace mucho frío, hay niebla y a veces nieva.",
                "words": [
                    "En",
                    "invierno",
                    "en",
                    "el",
                    "norte",
                    "hace",
                    "mucho",
                    "frío,",
                    "hay",
                    "niebla",
                    "y",
                    "a",
                    "veces",
                    "nieva."
                ],
                "translation": "No inverno no norte faz muito frio, há neblina e às vezes neva."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Diego",
                "npcName": "Diego",
                "text": "¿Qué tal el tiempo en tu ciudad durante el verano, Sofía?",
                "npcMessage": "¿Qué tal el tiempo en tu ciudad durante el verano, Sofía?",
                "translation": "Que tal o tempo na sua cidade durante o verão, Sofía?"
            },
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "En verano hace muchísimo calor y el cielo siempre está despejado.",
                "npcMessage": "En verano hace muchísimo calor y el cielo siempre está despejado.",
                "translation": "No verão faz muitíssimo calor e o céu sempre está limpo."
            },
            {
                "speaker": "Diego",
                "npcName": "Diego",
                "text": "Aquí en cambio suele llover y estar nublado a menudo.",
                "npcMessage": "Aquí en cambio suele llover y estar nublado a menudo.",
                "translation": "Aqui por outro lado costuma chover e estar nublado com frequência."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Está nublado'?",
                "options": [
                    {
                        "label": "Está nublado / com nuvens",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Está ensolarado",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que se diz 'Hace calor' e não 'Está calor'?",
                "options": [
                    {
                        "label": "Porque com condições atmosféricas de temperatura e vento usa-se o verbo impessoal hacer",
                        "isCorrect": true,
                        "explanation": "Exato! Regra clássica da meteorologia hispânica."
                    },
                    {
                        "label": "Porque 'calor' é adjetivo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você olha pela janela e vê que o céu está preto com trovões. O que avisa?",
                "options": [
                    {
                        "label": "¡Hay una tormenta fuerte y va a llover!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Hace buen tiempo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'En primavera las flores florecen y hace una temperatura muy agradable.'",
                "options": [
                    {
                        "label": "Na primavera as flores florescem e faz uma temperatura muito agradável.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "No outono chove muito.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença gramatical entre 'Lluvia' e 'Llueve'?",
                "options": [
                    {
                        "label": "'Lluvia' é substantivo (a chuva); 'Llueve' é verbo conjugado (chove)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Distinção fundamental entre substantivo e verbo."
                    },
                    {
                        "label": "São idênticos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_26",
        "title": "26. Resolver Imprevistos e Reclamações",
        "level": "A2",
        "description": "Resolva problemas em viagens como bagagens perdidas, atrasos e solicitações de folhas de reclamação.",
        "icon": "🧳",
        "stage1_context": {
            "missionTitle": "Módulo 26: Resolver Imprevistos e Reclamações",
            "missionDescription": "Aprenda a expressar reclamações formais, reportar malas perdidas e solicitar reembolsos ou soluções.",
            "audioGuide": "He perdido mi equipaje en el vuelo. Quisiera una hoja de reclamaciones, por favor."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Equipaje perdido / Maleta perdida",
                "Portuguese": "Bagagem perdida / Mala perdida",
                "Audio": "Equipaje perdido / Maleta perdida",
                "timeContext": "Perda de bagagem no transporte aéreo ou terrestre."
            },
            {
                "type": "vocab",
                "Spanish": "Retraso de vuelo",
                "Portuguese": "Atraso de voo",
                "Audio": "Retraso de vuelo",
                "timeContext": "Atrasos em horários de voos."
            },
            {
                "type": "vocab",
                "Spanish": "Hoja de reclamaciones",
                "Portuguese": "Livro/Folha de reclamações",
                "Audio": "Hoja de reclamaciones",
                "timeContext": "Documento oficial de reclamação em estabelecimentos."
            },
            {
                "type": "vocab",
                "Spanish": "Una reclamación formal",
                "Portuguese": "Uma reclamação formal",
                "Audio": "Una reclamación formal",
                "timeContext": "Ação de registrar queixa perante o serviço."
            },
            {
                "type": "vocab",
                "Spanish": "Indemnización / Reembolso",
                "Portuguese": "Indenização / Reembolso",
                "Audio": "Indemnización / Reembolso",
                "timeContext": "Compensação financeira por prejuízo."
            },
            {
                "type": "grammar_pill",
                "title": "Formular Reclamações no Passado Recente (Pretérito Perfecto)",
                "rule": "Para relatar imprevistos que acabaram de acontecer, usa-se o Pretérito Perfecto com 'haber + particípio': 'He perdido mi maleta', 'Mi vuelo ha sufrido un retraso de tres horas'.",
                "formula": "Haber (presente) + particípio + [problema]",
                "example": "El hotel ha cancelado mi reserva sin avisar."
            },
            {
                "type": "grammar_pill",
                "title": "Conectores Causais (Porque vs. Ya que)",
                "rule": "Para fundamentar a causa de uma reclamação, usam-se 'porque' (causa direta) e 'ya que' (causa conhecida e formal em correspondências/reclamações).",
                "formula": "Reclamação + ya que / porque + [justificativa]",
                "example": "Solicito un reembolso ya que el vuelo fue cancelado."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como reportar que a sua bagagem foi perdida após um voo em espanhol?",
                "options": [
                    "He perdido mi equipaje en el vuelo",
                    "Mi equipaje fue feliz",
                    "No tengo ropa nueva",
                    "El avión voló bien"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual documento oficial deve ser solicitado em um estabelecimento na Espanha para registrar uma queixa formal?",
                "options": [
                    "Una hoja de reclamaciones",
                    "Una carta de amor",
                    "Un pasaporte nuevo",
                    "Un billete de autobús"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Solicito un reembolso ya que el vuelo ha sufrido un retraso de cuatro horas.'",
                "options": [
                    "Solicito um reembolso já que o voo sofreu um atraso de quatro horas.",
                    "O voo partiu no horário previsto.",
                    "Perdi quatro horas no hotel.",
                    "Comprei quatro bilhetes de avião."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual palavra significa 'atraso' no contexto de transportes em espanhol?",
                "options": [
                    "El retraso",
                    "El avance",
                    "El reloj",
                    "La prisa"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Como pedir educadamente para falar com o gerente ou responsável?",
                "options": [
                    "Quisiera hablar con el responsable del servicio, por favor.",
                    "Llama al jefe ya.",
                    "Quiero hablar solo.",
                    "Dónde está la gente."
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Mi vuelo ha tenido un retraso de tres horas y he perdido mi maleta en el aeropuerto.",
                "words": [
                    "Mi",
                    "vuelo",
                    "ha",
                    "tenido",
                    "un",
                    "retraso",
                    "de",
                    "tres",
                    "horas",
                    "y",
                    "he",
                    "perdido",
                    "mi",
                    "maleta",
                    "en",
                    "el",
                    "aeropuerto."
                ],
                "translation": "Meu voo teve um atraso de três horas e perdi minha mala no aeroporto."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Pasajero",
                "npcName": "Pasajero",
                "text": "Disculpe, mi vuelo ha llegado con dos horas de retraso y no encuentro mi maleta.",
                "npcMessage": "Disculpe, mi vuelo ha llegado con dos horas de retraso y no encuentro mi maleta.",
                "translation": "Com licença, meu voo chegou com duas horas de atraso e não encontro minha mala."
            },
            {
                "speaker": "Agente",
                "npcName": "Agente",
                "text": "Lamento el inconveniente. Vamos a rellenar el parte de pérdida de equipaje.",
                "npcMessage": "Lamento el inconveniente. Vamos a rellenar el parte de pérdida de equipaje.",
                "translation": "Lamento o inconveniente. Vamos preencher o formulário de perda de bagagem."
            },
            {
                "speaker": "Pasajero",
                "npcName": "Pasajero",
                "text": "Muchas gracias. También quisiera una hoja de reclamaciones.",
                "npcMessage": "Muchas gracias. También quisiera una hoja de reclamaciones.",
                "translation": "Muito obrigado. Também gostaria de uma folha de reclamações."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'La hoja de reclamaciones'?",
                "options": [
                    {
                        "label": "O formulário / folha de reclamações oficial",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "O menu do restaurante",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que usamos 'ya que' em uma reclamação formal?",
                "options": [
                    {
                        "label": "Porque 'ya que' é um conector causal formal ideal para apresentar razões explicativas",
                        "isCorrect": true,
                        "explanation": "Exato! Confere tom respeitoso e formal ao texto."
                    },
                    {
                        "label": "Porque substitui o verbo ir",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Sua reserva no hotel foi cancelada por engano e você quer indenização. O que solicita?",
                "options": [
                    {
                        "label": "Quisiera solicitar una indemnización o reembolso por las molestias.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "No me importa la reserva",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'El retraso del autobús nos hizo perder la conexión.'",
                "options": [
                    {
                        "label": "O atraso do ônibus fez-nos perder a conexão.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O ônibus chegou adiantado.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'Perder el vuelo' e 'Perder la maleta'?",
                "options": [
                    {
                        "label": "'Perder el vuelo' = Não conseguir embarcar no avião a tempo; 'Perder la maleta' = Extravio da bagagem",
                        "isCorrect": true,
                        "explanation": "Fantástico! Distinção fundamental em vocabulário de aeroporto."
                    },
                    {
                        "label": "São idênticos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_27",
        "title": "27. En el Aeropuerto y Aduana",
        "level": "A2",
        "description": "Navegue pelo aeroporto, cartão de embarque, controle de segurança, raio-x e aduana.",
        "icon": "✈️",
        "stage1_context": {
            "missionTitle": "Módulo 27: En el Aeropuerto y Aduana",
            "missionDescription": "Aprenda a se orientar no aeroporto, passar pelo controle de segurança e responder ao agente de imigração.",
            "audioGuide": "¿Dónde se encuentra la puerta de embarque B12? Tengo que mostrar mi tarjeta de embarque y pasaporte."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "La tarjeta de embarque",
                "Portuguese": "O cartão de embarque",
                "Audio": "La tarjeta de embarque",
                "timeContext": "Bilhete físico ou digital de acesso ao avião."
            },
            {
                "type": "vocab",
                "Spanish": "La puerta de salida / embarque",
                "Portuguese": "O portão de saída / embarque",
                "Audio": "La puerta de salida / embarque",
                "timeContext": "Portão do aeroporto de onde parte o voo."
            },
            {
                "type": "vocab",
                "Spanish": "El equipaje de mano",
                "Portuguese": "A bagagem de mão",
                "Audio": "El equipaje de mano",
                "timeContext": "Mala levada dentro da cabine do avião."
            },
            {
                "type": "vocab",
                "Spanish": "El control de seguridad",
                "Portuguese": "O controle de segurança / raio-x",
                "Audio": "El control de seguridad",
                "timeContext": "Verificação de raio-x e inspeção antes do embarque."
            },
            {
                "type": "vocab",
                "Spanish": "La aduana / Pasar aduana",
                "Portuguese": "A alfândega / Passar pela alfândega",
                "Audio": "La aduana / Pasar aduana",
                "timeContext": "Inspeção alfandegária e de imigração."
            },
            {
                "type": "grammar_pill",
                "title": "Perguntar por Localizações no Aeroporto (¿Dónde se encuentra...?)",
                "rule": "Para localizar portões e serviços no aeroporto com cortesia, usam-se as fórmulas: '¿Dónde se encuentra + lugar?', '¿Hacia dónde queda + lugar?'.",
                "formula": "¿Dónde se encuentra / queda + [local do aeroporto]?",
                "example": "¿Dónde se encuentra la puerta de embarque número 15?"
            },
            {
                "type": "grammar_pill",
                "title": "Declarações na Alfândega (Tener que declarar / Nada que declarar)",
                "rule": "Nas entrevistas de aduana, usam-se as respostas padrão: 'No tengo nada que declarar' (não trago bens tributáveis) ou 'Tengo que declarar estos artículos'.",
                "formula": "Tener + algo/nada + que declarar",
                "example": "No tengo nada que declarar en mi maleta."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como perguntar cortesmente onde fica o portão de embarque B12 no aeroporto?",
                "options": [
                    "¿Dónde se encuentra la puerta de embarque B12?",
                    "¿Puerta B12 dónde?",
                    "¿Dónde embarca avión?",
                    "¿Hay puerta B12?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual documento deve ser apresentado junto com o passaporte para embarcar?",
                "options": [
                    "La tarjeta de embarque",
                    "El permiso de conducir",
                    "La hoja de reclamaciones",
                    "La receta médica"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Debe colocar su equipaje de mano y su portátil en la bandeja de seguridad.'",
                "options": [
                    "Deve colocar sua bagagem de mão e seu notebook na bandeja de segurança.",
                    "Deixe suas malas no hotel.",
                    "Leve seu notebook no avião.",
                    "Abra sua bagagem agora."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual é a resposta padrão ao agente de alfândega quando você não traz nada sujeito a impostos?",
                "options": [
                    "No tengo nada que declarar",
                    "Tengo muchas cosas",
                    "Declarar no sé",
                    "Mi maleta está llena"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual palavra designa o raio-x e inspeção de passageiros antes dos portões de embarque?",
                "options": [
                    "El control de seguridad",
                    "La oficina de turismo",
                    "El mostrador de facturación",
                    "La tienda libre de impuestos"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Por favor, tenga a mano su tarjeta de embarque y su pasaporte para pasar el control.",
                "words": [
                    "Por",
                    "favor,",
                    "tenga",
                    "a",
                    "mano",
                    "su",
                    "tarjeta",
                    "de",
                    "embarque",
                    "y",
                    "su",
                    "pasaporte",
                    "para",
                    "pasar",
                    "el",
                    "control."
                ],
                "translation": "Por favor, tenha em mãos seu cartão de embarque e seu passaporte para passar pelo controle."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Agente de Aduana",
                "npcName": "Agente de Aduana",
                "text": "Buenas tardes. Su pasaporte y tarjeta de embarque, por favor.",
                "npcMessage": "Buenas tardes. Su pasaporte y tarjeta de embarque, por favor.",
                "translation": "Boa tarde. Seu passaporte e cartão de embarque, por favor."
            },
            {
                "speaker": "Pasajero",
                "npcName": "Pasajero",
                "text": "Aquí tiene. ¿Tengo que abrir mi equipaje de mano?",
                "npcMessage": "Aquí tiene. ¿Tengo que abrir mi equipaje de mano?",
                "translation": "Aqui está. Tenho que abrir minha bagagem de mão?"
            },
            {
                "speaker": "Agente de Aduana",
                "npcName": "Agente de Aduana",
                "text": "No es necesario. ¿Tiene algo que declarar?",
                "npcMessage": "No es necesario. ¿Tiene algo que declarar?",
                "translation": "Não é necessário. Tem algo a declarar?"
            },
            {
                "speaker": "Pasajero",
                "npcName": "Pasajero",
                "text": "No, nada. Solo llevo efectos personales.",
                "npcMessage": "No, nada. Solo llevo efectos personales.",
                "translation": "Não, nada. Só levo pertences pessoais."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'La tarjeta de embarque'?",
                "options": [
                    {
                        "label": "O cartão de embarque",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "O cartão de crédito",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual a utilidade da estrutura '¿Dónde se encuentra...?' em serviços públicos?",
                "options": [
                    {
                        "label": "Oferece um tom mais educado e formal do que perguntar apenas '¿Dónde está...?'",
                        "isCorrect": true,
                        "explanation": "Exato! É a norma culta de cortesia em locais públicos."
                    },
                    {
                        "label": "Não tem utilidade especial",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está no raio-x do aeroporto. O que o agente pede para fazer com moedas e cinto?",
                "options": [
                    {
                        "label": "Ponga las monedas y el cinturón en la bandeja de seguridad.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Compre una tarjeta de embarque",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'El vuelo con destino a Lima sale por la puerta A4.'",
                "options": [
                    {
                        "label": "O voo com destino a Lima sai pelo portão A4.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O avião de Lima acabou de chegar.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a expressão 'Facturar el equipaje'?",
                "options": [
                    {
                        "label": "Despachar as malas no balcão da companhia aérea antes de ir para o embarque",
                        "isCorrect": true,
                        "explanation": "Fantástico! Vocabulário essencial de aeroporto em espanhol."
                    },
                    {
                        "label": "Pagar a conta do restaurante",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_28",
        "title": "28. Pronúncia e Variações Dialetais I",
        "level": "A2",
        "description": "Compreenda as diferenças de pronúncia entre Seseo, Yeísmo e o uso de Vosotros na Espanha vs. Ustedes na América Latina.",
        "icon": "🗣️",
        "stage1_context": {
            "missionTitle": "Módulo 28: Pronúncia e Variações Dialetais I",
            "missionDescription": "Conheça as principais variações fonéticas e pronominais do mundo hispânico (Espanha vs. América Latina).",
            "audioGuide": "En España se diferencia la Z de la S (zapato / sapo). En América Latina predomina el seseo."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "El Seseo",
                "Portuguese": "Pronúncia de Z e C (ante e, i) como som de S",
                "Audio": "El Seseo",
                "timeContext": "Fenômeno fonético dominante na América Latina e Ilhas Canárias."
            },
            {
                "type": "vocab",
                "Spanish": "La distinción (Z/C vs S)",
                "Portuguese": "Pronúncia interdental th (como em 'think') na Espanha",
                "Audio": "La distinción",
                "timeContext": "Diferenciação fonética clássica na Espanha peninsular."
            },
            {
                "type": "vocab",
                "Spanish": "El Yeísmo",
                "Portuguese": "Pronúncia de LL e Y com som igual (j, y, sh)",
                "Audio": "El Yeísmo",
                "timeContext": "Fusão dos sons de ll e y presente na maioria do mundo hispânico."
            },
            {
                "type": "vocab",
                "Spanish": "Vosotros / Vosotras",
                "Portuguese": "Vós / Vocês (informal plural na Espanha)",
                "Audio": "Vosotros / Vosotras",
                "timeContext": "Pronome de 2ª pessoa do plural exclusivo da Espanha."
            },
            {
                "type": "vocab",
                "Spanish": "Ustedes",
                "Portuguese": "Vocês (geral na América Latina / formal na Espanha)",
                "Audio": "Ustedes",
                "timeContext": "Tratamento de plural universal em toda a América Latina."
            },
            {
                "type": "grammar_pill",
                "title": "Distinção Z/C vs. S na Espanha vs. Seseo na América Latina",
                "rule": "Na Espanha peninsular, a letra Z e o C (antes de e/i) pronunciam-se com a língua entre os dentes (/θ/ como em 'think' em inglês: zapato ➔ /θapato/). Na América Latina, pronunciam-se todos com som de S (/s/ seseo: zapato ➔ /sapato/).",
                "formula": "Espanha: Z/C = /θ/, S = /s/ | América Latina: Z/C/S = /s/",
                "example": "Cerveza: /θerbeθa/ (Espanha) vs /serbesa/ (América Latina)."
            },
            {
                "type": "grammar_pill",
                "title": "Uso Pronominal de Vosotros (Espanha) vs. Ustedes (América Latina)",
                "rule": "Na Espanha usa-se 'vosotros' para falar com amigos/familiares no plural ('¿Vosotros coméis?'). Na América Latina, 'ustedes' substitui o vosotros em todas as situações ('¿Ustedes comen?').",
                "formula": "Espanha: Vosotros (informal) / Ustedes (formal) | América Latina: Ustedes (universal)",
                "example": "¿Vosotros vais al cine? (Espanha) = ¿Ustedes van al cine? (América Latina)."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual é a principal diferença de pronúncia entre a Espanha peninsular e a América Latina na palavra 'zapato'?",
                "options": [
                    "Na Espanha pronuncia-se Z com som interdental (th); na América Latina soa como S (seseo)",
                    "São exatamente iguais",
                    "Na América Latina pronuncia-se como Z em português",
                    "Na Espanha não se usa a letra Z"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual pronome de plural informal é usado na Espanha, mas NÃO é usado na América Latina cotidiana?",
                "options": [
                    "Vosotros / Vosotras",
                    "Ustedes",
                    "Ellos",
                    "Nosotros"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza a frase latina equivalente a '¿Vosotros queréis café?':",
                "options": [
                    "¿Ustedes quieren café?",
                    "¿Ellos quieren café?",
                    "¿Tú quieres café?",
                    "¿Vos querés café?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. O que é o fenômeno do 'Yeísmo' no espanhol moderno?",
                "options": [
                    "Pronunciar as letras 'LL' e 'Y' com som idêntico (ex: calle soa como caye)",
                    "Falar apenas a letra Y",
                    "Não pronunciar vogais",
                    "Trocar R por L"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Como um latino-americano diria a frase 'Vocês vão sair hoje à noite'?",
                "options": [
                    "Ustedes van a salir esta noche",
                    "Vosotros vais a salir esta noche",
                    "Ustedes vais a salir",
                    "Ellos salen hoy"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "En España se usa vosotros para hablar con amigos, pero en América Latina se usa ustedes.",
                "words": [
                    "En",
                    "España",
                    "se",
                    "usa",
                    "vosotros",
                    "para",
                    "hablar",
                    "con",
                    "amigos,",
                    "pero",
                    "en",
                    "América",
                    "Latina",
                    "se",
                    "usa",
                    "ustedes."
                ],
                "translation": "Na Espanha usa-se vosotros para falar com amigos, mas na América Latina usa-se ustedes."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Mateo (Madrid)",
                "npcName": "Mateo (Madrid)",
                "text": "¡Hola! ¿Vosotros vais a comer una paella esta tarde?",
                "npcMessage": "¡Hola! ¿Vosotros vais a comer una paella esta tarde?",
                "translation": "Olá! Vocês vão comer uma paella esta tarde?"
            },
            {
                "speaker": "Camila (Buenos Aires)",
                "npcName": "Camila (Buenos Aires)",
                "text": "¡Hola Mateo! Sí, nosotros con los chicos vamos a comer paella en el centro.",
                "npcMessage": "¡Hola Mateo! Sí, nosotros con los chicos vamos a comer paella en el centro.",
                "translation": "Olá Mateo! Sim, nós com o pessoal vamos comer paella no centro."
            },
            {
                "speaker": "Mateo (Madrid)",
                "npcName": "Mateo (Madrid)",
                "text": "¡Qué bueno! Me encanta cómo suena el acento rioplatense.",
                "npcMessage": "¡Qué bueno! Me encanta cómo suena el acento rioplatense.",
                "translation": "Que bom! Adoro como soa o sotaque rioplatense."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa a palavra 'Seseo' na linguística hispânica?",
                "options": [
                    {
                        "label": "Pronunciar as grafias Z e C (ante e,i) com som da fricativa alveolar /s/",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Falar sussurrando",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Na América Latina, a conjugação do verbo para 'Ustedes' usa qual pessoa gramatical?",
                "options": [
                    {
                        "label": "3ª pessoa do plural (Ustedes comen / van / hablan)",
                        "isCorrect": true,
                        "explanation": "Exato! Mesma conjugação usada para ellos/ellas."
                    },
                    {
                        "label": "2ª pessoa do plural de vosotros",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você viaja à Argentina e ouve a palavra 'calle' pronunciada como 'cashe'. Como se chama essa variação?",
                "options": [
                    {
                        "label": "Yeísmo reajustado rioplatense (zheísmo / sheísmo)",
                        "isCorrect": true,
                        "explanation": "Perfeito! Característica marcante da Argentina e Uruguai."
                    },
                    {
                        "label": "Seseo espanhol",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¿Ustedes van al concierto esta noche?'",
                "options": [
                    {
                        "label": "Vocês vão ao show esta noite?",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Eles foram ao cinema ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual das seguintes afirmações sobre o espanhol é VERDADEIRA?",
                "options": [
                    {
                        "label": "Tanto o espanhol da Espanha quanto o da América Latina são 100% corretos e compreendidos mutuamente",
                        "isCorrect": true,
                        "explanation": "Fantástico! O espanhol é uma língua rica, pluricêntrica e unificada."
                    },
                    {
                        "label": "Apenas o espanhol da Espanha é correto",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_29",
        "title": "29. Revisão Geral A2",
        "level": "A2",
        "description": "Consolide os conteúdos essenciais do Nível A2: Pretérito Indefinido, Imperfecto, Perfecto, Gustar e Pronomes.",
        "icon": "📊",
        "stage1_context": {
            "missionTitle": "Módulo 29: Revisão Geral A2",
            "missionDescription": "Revise e integre os três tempos do passado, o verbo gustar, pronomes de objeto e o futuro próximo.",
            "audioGuide": "Ayer fui al parque, cuando era niño jugaba allí, hoy he comido con mi familia y mañana voy a viajar."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Pretérito Indefinido",
                "Portuguese": "Passado concluído pontual (fui, hablé)",
                "Audio": "Pretérito Indefinido",
                "timeContext": "Ação concluída em tempo finalizado no passado."
            },
            {
                "type": "vocab",
                "Spanish": "Pretérito Imperfecto",
                "Portuguese": "Passado habitual e descritivo (iba, hablaba)",
                "Audio": "Pretérito Imperfecto",
                "timeContext": "Hábitos antigos e cenários de fundo."
            },
            {
                "type": "vocab",
                "Spanish": "Pretérito Perfecto",
                "Portuguese": "Passado recente ligado ao presente (he hablado)",
                "Audio": "Pretérito Perfecto",
                "timeContext": "Ações em tempo não concluído ou experiências."
            },
            {
                "type": "vocab",
                "Spanish": "Pronombres de Objeto",
                "Portuguese": "Substituição direta e indireta (lo, la, le)",
                "Audio": "Pronombres de Objeto",
                "timeContext": "Substituição de nomes para fluência."
            },
            {
                "type": "vocab",
                "Spanish": "Futuro Próximo",
                "Portuguese": "Estrutura perifrástica de planos (ir a + infinitivo)",
                "Audio": "Futuro Próximo",
                "timeContext": "Expressão de planos futuros."
            },
            {
                "type": "grammar_pill",
                "title": "Quadro Comparativo dos Três Tempos do Passado de A2",
                "rule": "1. Indefinido: Momento concluído ('Ayer hablé'). 2. Imperfecto: Hábito/descrição ('Antes hablaba'). 3. Perfecto: Tempo recente/não finalizado ('Hoy he hablado').",
                "formula": "Ayer ➔ Indefinido | Antes ➔ Imperfecto | Hoy ➔ Perfecto",
                "example": "Ayer comí paella, antes no me gustaba, pero hoy he comido dos platos."
            },
            {
                "type": "grammar_pill",
                "title": "Integração de Pronomes e Estruturas de A2",
                "rule": "Os pronomes de objeto de 3ª pessoa colocam-se ANTES do verbo conjugado simples ('Lo compré') ou preso ao infinitivo/gerúndio ('Voy a comprarlo').",
                "formula": "[Lo/La/Le] + verbo OR verbo + [lo/la/le]",
                "example": "¿El libro? Sí, lo he leído esta semana."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual tempo do passado usaria para completar a frase: 'Ayer _____ (ir) al museo de arte.'?",
                "options": [
                    "fui (Pretérito Indefinido)",
                    "iba",
                    "he ido",
                    "vaya"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual tempo do passado usaria para completar: 'Esta mañana _____ (desayunar) café con tostadas.'?",
                "options": [
                    "he desayunado (Pretérito Perfecto)",
                    "desayuné",
                    "desayunaba",
                    "desayuno"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza a frase com contraste de passados: 'Cuando era joven, vivía en el campo, pero ayer me mudé a la ciudad.'",
                "options": [
                    "Quando era jovem, morava no campo, mas ontem mudei-me para a cidade.",
                    "Moro na cidade desde jovem.",
                    "Ontem fui ao campo passear.",
                    "Gosto de morar no campo."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual é a forma correta do futuro próximo para 'Nós vamos estudar para a prova amanhã'?",
                "options": [
                    "Mañana vamos a estudiar para el examen",
                    "Mañana vamos estudiar",
                    "Mañana estudiamos fui",
                    "Mañana ir estudiar"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Substitua o objeto na frase 'Compré el regalo para María' por pronomes:",
                "options": [
                    "Se lo compré (ou Le compré el regalo)",
                    "Lo compré a ella",
                    "La compré el regalo",
                    "Yo compré regalo"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Ayer trabajé mucho, pero hoy he descansado y mañana voy a salir con mis amigos.",
                "words": [
                    "Ayer",
                    "trabajé",
                    "mucho,",
                    "pero",
                    "hoy",
                    "he",
                    "descansado",
                    "y",
                    "mañana",
                    "voy",
                    "a",
                    "salir",
                    "con",
                    "mis",
                    "amigos."
                ],
                "translation": "Ontem trabalhei muito, mas hoje descansei e amanhã vou sair com meus amigos."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Profesor",
                "npcName": "Profesor",
                "text": "¡Enhorabuena! Han repasado todos los tiempos verbales del nivel A2.",
                "npcMessage": "¡Enhorabuena! Han repasado todos los tiempos verbales del nivel A2.",
                "translation": "Parabéns! Vocês revisaram todos os tempos verbais do nível A2."
            },
            {
                "speaker": "Estudiante",
                "npcName": "Estudiante",
                "text": "Gracias. Ahora entiendo la diferencia entre fui, iba y he ido.",
                "npcMessage": "Gracias. Ahora entiendo la diferencia entre fui, iba y he ido.",
                "translation": "Obrigado. Agora entendo a diferença entre fui, iba e he ido."
            },
            {
                "speaker": "Profesor",
                "npcName": "Profesor",
                "text": "¡Excelente! Están listos para el desafío final de viaje.",
                "npcMessage": "¡Excelente! Están listos para el desafío final de viaje.",
                "translation": "Excelente! Vocês estão prontos para o desafio final de viagem."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que distingue o Pretérito Indefinido do Pretérito Imperfecto?",
                "options": [
                    {
                        "label": "Indefinido = evento concluído; Imperfecto = hábito contínuo ou cenário no passado",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "São o mesmo tempo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Na frase 'Cuando caminaba por la calle, vi un accidente', qual é o papel de cada tempo?",
                "options": [
                    {
                        "label": "'Caminaba' (Imperfecto) é a ação de fundo; 'vi' (Indefinido) é o evento que a interrompe",
                        "isCorrect": true,
                        "explanation": "Exato! Regra clássica do contraste no passado em A2."
                    },
                    {
                        "label": "Ambas são ações pontuais",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer contar que nunca viajou ao Japão. O que diz usando o Pretérito Perfecto?",
                "options": [
                    {
                        "label": "Nunca he viajado a Japón.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Ayer no fui a Japón",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Le di las llaves a Carlos ayer por la tarde.'",
                "options": [
                    {
                        "label": "Dei as chaves a Carlos ontem à tarde.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Carlos deu-me as chaves de manhã.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual marcador exige Pretérito Perfecto em vez de Indefinido?",
                "options": [
                    {
                        "label": "'Esta semana' / 'Hoy' / 'Este mes' (tempo ainda não concluído)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Regra de Ouro do Pretérito Perfecto em espanhol."
                    },
                    {
                        "label": "'Ayer' / 'En 1990'",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_a2_mod_30",
        "title": "30. Desafío Final A2: Simulación Completa de Férias",
        "level": "A2",
        "description": "Projeto final integrador do nível A2: prova de revisão com 30 exercícios cobrindo todos os módulos do nível A2.",
        "icon": "🏆",
        "stage1_context": {
            "missionTitle": "Módulo 30: Desafío Final A2",
            "missionDescription": "Enfrente o grande desafio final de A2: navegue do aeroporto ao hotel, peça no restaurante, vá ao médico e conte suas memórias de viagem.",
            "audioGuide": "¡Bienvenidos al desafío final de nivel A2! Demuestra todo lo que has aprendido en tu viaje por el mundo hispano."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "¡Buen viaje!",
                "Portuguese": "Boa viagem!",
                "Audio": "¡Buen viaje!",
                "timeContext": "Desejo de boa viagem aos viajantes."
            },
            {
                "type": "vocab",
                "Spanish": "La aventura",
                "Portuguese": "A aventura",
                "Audio": "La aventura",
                "timeContext": "Experiência envolvente de viagem."
            },
            {
                "type": "vocab",
                "Spanish": "La experiencia inolvidable",
                "Portuguese": "A experiência inesquecível",
                "Audio": "La experiencia inolvidable",
                "timeContext": "Memória memorável no mundo hispânico."
            },
            {
                "type": "vocab",
                "Spanish": "Dominar el nivel A2",
                "Portuguese": "Dominar o nível A2",
                "Audio": "Dominar el nivel A2",
                "timeContext": "Conquista de autonomia na linguagem cotidiana."
            },
            {
                "type": "vocab",
                "Spanish": "Certificado de logro",
                "Portuguese": "Certificado de conquista",
                "Audio": "Certificado de logro",
                "timeContext": "Reconhecimento da conclusão com sucesso de A2."
            },
            {
                "type": "grammar_pill",
                "title": "Síntese Geral de Competências Comunicativas do Nível A2",
                "rule": "Ao concluir o A2, o estudante é capaz de: narrar acontecimentos passados, relatar rotinas e hábitos antigos, fazer compras, pedir refeições, entender instruções em hotéis/aeroportos, dar conselhos leves e expressar planos futuros.",
                "formula": "Passados (Indefinido/Imperfecto/Perfecto) + Futuro Próximo + Pronomes + Situações Reais",
                "example": "¡Has completado el nivel A2 con éxito absoluto!"
            },
            {
                "type": "grammar_pill",
                "title": "Prontidão para o Nível B1 (Subjuntivo e Comunicação Avançada)",
                "rule": "Com a base sólida do Nível A2, você está totalmente preparado para ingressar no Nível B1, onde aprenderá o Modo Subjuntivo, opiniões complexas e hipóteses.",
                "formula": "Nível A2 Concluído ➔ Rumo ao Nível B1",
                "example": "¡Felicidades por tu dedicación y logro histórico!"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Em uma simulação de aeroporto, como dizer ao agente que você vai passar as férias em Madri?",
                "options": [
                    "Voy a pasar mis vacaciones en Madrid",
                    "Fui a vacaciones Madrid",
                    "Vacaciones es Madrid",
                    "Yo Madrid vacaciones"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. No hotel, qual frase expressa uma solicitação elegante de quarto com vista?",
                "options": [
                    "Quisiera una habitación con vistas a la plaza, por favor.",
                    "Dame cuarto plaza.",
                    "Habitación plaza quiero.",
                    "Habitación sin vista."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Na farmácia, como informar que você sente dor de cabeça e precisa de comprimidos?",
                "options": [
                    "Me duele la cabeza y necesito unas pastillas, por favor.",
                    "Tengo cabeza dolor remedio",
                    "Dolor cabeza farmacia",
                    "Remedio cabeza dame"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Ao contar suas férias para amigos, qual frase combina adequadamente o passado e as sensações?",
                "options": [
                    "El viaje fue genial y lo pasé fenomenal en la playa.",
                    "El viaje es hoy.",
                    "No fui a la playa.",
                    "Playa no me gusta."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual mensagem marca a conclusão vitoriosa dos 30 módulos de A2?",
                "options": [
                    "¡Enhorabuena! Has superado con éxito todos los módulos del Nivel A2.",
                    "Modulo 1 empieza",
                    "Estudia más A1",
                    "No completaste"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¡Felicidades por completar los treinta módulos del nivel A2 de español con éxito!",
                "words": [
                    "¡Felicidades",
                    "por",
                    "completar",
                    "los",
                    "treinta",
                    "módulos",
                    "del",
                    "nivel",
                    "A2",
                    "de",
                    "español",
                    "con",
                    "éxito!"
                ],
                "translation": "Parabéns por completar os trinta módulos do nível A2 de espanhol com sucesso!"
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Guía Turístico",
                "npcName": "Guía Turístico",
                "text": "¡Bienvenidos al final de su recorrido por España y América Latina!",
                "npcMessage": "¡Bienvenidos al final de su recorrido por España y América Latina!",
                "translation": "Bem-vindos ao final do seu percurso pela Espanha e América Latina!"
            },
            {
                "speaker": "Estudiante",
                "npcName": "Estudiante",
                "text": "¡Ha sido un viaje increíble! Ahora puedo comunicarme con fluidez en español.",
                "npcMessage": "¡Ha sido un viaje increíble! Ahora puedo comunicarme con fluidez en español.",
                "translation": "Foi uma viagem incrível! Agora posso me comunicar com fluidez em espanhol."
            },
            {
                "speaker": "Guía Turístico",
                "npcName": "Guía Turístico",
                "text": "¡Excelente trabajo! ¡Nos vemos en el Nivel B1!",
                "npcMessage": "¡Excelente trabajo! ¡Nos vemos en el Nivel B1!",
                "translation": "Excelente trabalho! Nos vemos no Nível B1!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Mod 1: Pretérito Perfecto) Como dizer 'Eu comi uma paella hoje'?",
                "options": [
                    {
                        "label": "Hoy he comido una paella.",
                        "isCorrect": true,
                        "explanation": "Correto! Usa-se Pretérito Perfecto para tempo não acabado (hoy)."
                    },
                    {
                        "label": "Hoy comí una paella.",
                        "isCorrect": false,
                        "explanation": "Incorreto. Em espanhol padrão usa-se he comido para 'hoy'."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Mod 2: Pretérito Indefinido Reg.) Como dizer 'Ontem viajei para Madri'?",
                "options": [
                    {
                        "label": "Ayer viajé a Madrid.",
                        "isCorrect": true,
                        "explanation": "Exato! Pretérito Indefinido para ação acabada no passado (ayer)."
                    },
                    {
                        "label": "Ayer he viajado a Madrid.",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Ayer' exige Indefinido."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Mod 3: Indefinido Irregular) Qual é a 1ª pessoa de 'ir/ser' e 'hacer' no Pretérito Indefinido?",
                "options": [
                    {
                        "label": "Fui / Hice",
                        "isCorrect": true,
                        "explanation": "Perfeito! Fui (ir/ser) e Hice (hacer)."
                    },
                    {
                        "label": "Iba / Hacía",
                        "isCorrect": false,
                        "explanation": "Incorreto. Essas formas são do Imperfecto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Mod 4: Pretérito Imperfecto) Como descrever um hábito de infância: 'Quando eu era criança, brincava no parque'?",
                "options": [
                    {
                        "label": "Cuando era niño, jugaba en el parque.",
                        "isCorrect": true,
                        "explanation": "Excelente! Imperfecto para hábitos e descrições no passado."
                    },
                    {
                        "label": "Cuando fui niño, jugué en el parque.",
                        "isCorrect": false,
                        "explanation": "Incorreto. Fui/jugué indicam evento pontual."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Mod 5: Indefinido vs Imperfecto) Complete: 'Ayer _____ (llover) mientras yo _____ (caminar) por la calle.'",
                "options": [
                    {
                        "label": "empezó a llover / caminaba",
                        "isCorrect": true,
                        "explanation": "Correto! Acción pontual (empezó) interrompendo ação em curso (caminaba)."
                    },
                    {
                        "label": "empezaba a llover / caminé",
                        "isCorrect": false,
                        "explanation": "Incorreto. Inverteu o aspecto da ação."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "6. (Mod 6: Marcadores Temporais) Qual marcador exige Pretérito Indefinido?",
                "options": [
                    {
                        "label": "Anoche (ontem à noite)",
                        "isCorrect": true,
                        "explanation": "Exato! 'Anoche' indica tempo determinado acabado."
                    },
                    {
                        "label": "Esta mañana",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Esta mañana' usa Pretérito Perfecto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "7. (Mod 7: Descripción Física) Como dizer 'Ela é alta e tem olhos castanhos'?",
                "options": [
                    {
                        "label": "Ella es alta y tiene ojos castaños.",
                        "isCorrect": true,
                        "explanation": "Perfeito! SER para altura e TENER para olhos."
                    },
                    {
                        "label": "Ella está alta y es ojos castaños.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "8. (Mod 8: Estados Físicos) Como expressar 'Estou cansado e com fome'?",
                "options": [
                    {
                        "label": "Estoy cansado y tengo hambre.",
                        "isCorrect": true,
                        "explanation": "Excelente! ESTAR para cansado e TENER para hambre."
                    },
                    {
                        "label": "Soy cansado y estoy hambre.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "9. (Mod 9: Comparativos) Como dizer 'Madri é maior que Valência'?",
                "options": [
                    {
                        "label": "Madrid es más grande que Valencia.",
                        "isCorrect": true,
                        "explanation": "Correto! Estrutura más + adjetivo + que."
                    },
                    {
                        "label": "Madrid es mayor de Valencia.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "10. (Mod 10: Objeto Directo) Como substituir o objeto em 'Compré la carta'?",
                "options": [
                    {
                        "label": "La compré.",
                        "isCorrect": true,
                        "explanation": "Exato! 'La' substitui o substantivo feminino singular 'la carta'."
                    },
                    {
                        "label": "Le compré.",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Le' é objeto indireto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "11. (Mod 11: Objeto Indirecto) Como dizer 'Enviei uma mensagem para Carlos'?",
                "options": [
                    {
                        "label": "Le envié un mensaje.",
                        "isCorrect": true,
                        "explanation": "Perfeito! 'Le' refere-se a 3ª pessoa singular (Carlos)."
                    },
                    {
                        "label": "Lo envié un mensaje.",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Lo' é objeto direto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "12. (Mod 12: Combinación OD + OI) Como substituir 'Dije la verdad a Juan'?",
                "options": [
                    {
                        "label": "Se la dije.",
                        "isCorrect": true,
                        "explanation": "Correto! 'Le la' transforma-se em 'Se la'."
                    },
                    {
                        "label": "Le la dije.",
                        "isCorrect": false,
                        "explanation": "Incorreto. Não se diz 'le la' em espanhol."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "13. (Mod 13: Verbos Reflexivos) Como conjugar 'levantarse' para 'yo' no presente?",
                "options": [
                    {
                        "label": "Yo me levanto",
                        "isCorrect": true,
                        "explanation": "Excelente! Pronome reflexivo me + levanto."
                    },
                    {
                        "label": "Yo levanto me",
                        "isCorrect": false,
                        "explanation": "Incorreto. Pronome vem antes do verbo conjugado."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "14. (Mod 14: Obligación) Como expressar obrigação pessoal: 'Tenho que estudar para a prova'?",
                "options": [
                    {
                        "label": "Tengo que estudiar para el examen.",
                        "isCorrect": true,
                        "explanation": "Correto! Tener que + infinitivo indica obrigação."
                    },
                    {
                        "label": "Hay que estudiar yo.",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Hay que' é impessoal."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "15. (Mod 15: Dolor y Síntomas) Como dizer 'Minha garganta dói e tenho febre'?",
                "options": [
                    {
                        "label": "Me duele la garganta y tengo fiebre.",
                        "isCorrect": true,
                        "explanation": "Exato! Me duele (singular) e tengo fiebre."
                    },
                    {
                        "label": "Me duelen la garganta y soy fiebre.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "16. (Mod 16: Comprar Ropa) O que dizer ao experimentar uma roupa na loja?",
                "options": [
                    {
                        "label": "¿Dónde están los probadores para probarme esta camisa?",
                        "isCorrect": true,
                        "explanation": "Perfeito! 'Los probadores' = os provadores."
                    },
                    {
                        "label": "¿Dónde están los talleres?",
                        "isCorrect": false,
                        "explanation": "Incorreto. Taller = oficina mecânica."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "17. (Mod 17: Restaurante A2) Como solicitar uma reserva de mesa para dois?",
                "options": [
                    {
                        "label": "Quisiera reservar una mesa para dos personas a las nueve.",
                        "isCorrect": true,
                        "explanation": "Excelente! Fórmulas polidas de solicitação em restaurantes."
                    },
                    {
                        "label": "Quiero dos comidos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "18. (Mod 18: Turismo) O que significa 'Alojarse en pensión completa'?",
                "options": [
                    {
                        "label": "Hospedar-se com todas as refeições incluídas (café, almoço e jantar)",
                        "isCorrect": true,
                        "explanation": "Correto! Vocabulário de hotelaria A2."
                    },
                    {
                        "label": "Hospedar-se sem refeições",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "19. (Mod 19: Indicaciones) Como orientar alguém a 'virar à direita e seguir em frente'?",
                "options": [
                    {
                        "label": "Gire a la derecha y siga todo recto.",
                        "isCorrect": true,
                        "explanation": "Exato! Girar = virar, todo recto = em frente."
                    },
                    {
                        "label": "Gire a la izquierda y suba arriba.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "20. (Mod 20: Clima A2) O que significa 'Hay una tormenta con granizo'?",
                "options": [
                    {
                        "label": "Há uma tempestade com granizo",
                        "isCorrect": true,
                        "explanation": "Perfeito! Vocabulário de meteorologia avançada A2."
                    },
                    {
                        "label": "Está fazendo sol e calor",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "21. (Mod 21: Preposiciones de Lugar) Traduza: ' As chaves estão em cima da mesa, ao lado do livro':",
                "options": [
                    {
                        "label": "Las llaves están encima de la mesa, al lado del libro.",
                        "isCorrect": true,
                        "explanation": "Excelente! Encima de = em cima de, al lado de = ao lado de."
                    },
                    {
                        "label": "Las llaves están debajo de la mesa.",
                        "isCorrect": false,
                        "explanation": "Incorreto. Debajo de = embaixo de."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "22. (Mod 22: Falsos Amigos A2) O que significa a frase 'María está embarazada'?",
                "options": [
                    {
                        "label": "María está grávida",
                        "isCorrect": true,
                        "explanation": "Correto! Embarazada = grávida. Com vergonha é avergonzada."
                    },
                    {
                        "label": "María está com vergonha",
                        "isCorrect": false,
                        "explanation": "Incorreto. Falso amigo clássico!"
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "23. (Mod 23: Opinión y Acuerdo) Como concordar com a opinião do colega?",
                "options": [
                    {
                        "label": "Estoy totalmente de acuerdo contigo.",
                        "isCorrect": true,
                        "explanation": "Exato! Expressão de concordância em debates."
                    },
                    {
                        "label": "No estoy de acuerdo en absoluto.",
                        "isCorrect": false,
                        "explanation": "Incorreto. Essa é discordância."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "24. (Mod 24: Futuro Próximo) Como expressar o plano de amanhã: 'Vou estudar espanhol'?",
                "options": [
                    {
                        "label": "Mañana voy a estudiar español.",
                        "isCorrect": true,
                        "explanation": "Perfeito! Ir a + infinitivo para futuro próximo."
                    },
                    {
                        "label": "Mañana fui a estudiar español.",
                        "isCorrect": false,
                        "explanation": "Incorreto. Fui é passado."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "25. (Mod 25: Vacaciones) O que significa 'Hacer la maleta'?",
                "options": [
                    {
                        "label": "Arrumar / fazer a mala de viagem",
                        "isCorrect": true,
                        "explanation": "Excelente! Expressão idiomática de viagem."
                    },
                    {
                        "label": "Comprar uma bolsa nova",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "26. (Mod 26: Tecnología) Como pedir para carregar o celular: 'Preciso carregar a bateria'?",
                "options": [
                    {
                        "label": "Necesito cargar la batería del móvil.",
                        "isCorrect": true,
                        "explanation": "Correto! Móvil = telefone celular."
                    },
                    {
                        "label": "Necesito comprar la batería",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "27. (Mod 27: Profesiones) O que faz um 'abogado'?",
                "options": [
                    {
                        "label": "Trabalha com leis e defende clientes na justiça (advogado)",
                        "isCorrect": true,
                        "explanation": "Exato! Abogado = advogado."
                    },
                    {
                        "label": "Cozinha em um restaurante",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "28. (Mod 28: Naturaleza) Como se diz 'cachorro' e 'gato' em espanhol?",
                "options": [
                    {
                        "label": "El perro y el gato",
                        "isCorrect": true,
                        "explanation": "Perfeito! Perro = cachorro, gato = gato."
                    },
                    {
                        "label": "El pájaro y el pez",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "29. (Mod 29: Tradiciones) O que os espanhóis comem à meia-noite na Nochevieja (Ano Novo)?",
                "options": [
                    {
                        "label": "Las doce uvas de la suerte al compás de las campanadas",
                        "isCorrect": true,
                        "explanation": "Excelente! Tradição espanhola das 12 uvas."
                    },
                    {
                        "label": "Panetone com chocolate",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "30. (Mod 30: Integrador A2) Qual frase demonstra proficiência completa no Nível A2?",
                "options": [
                    {
                        "label": "Ayer fui al centro, compré ropa, comí en un restaurante y mañana voy a viajar con mi familia.",
                        "isCorrect": true,
                        "explanation": "¡ENHORABUENA! Integração completa dos tempos passados, rotinas, compras e futuro do Nível A2!"
                    },
                    {
                        "label": "Ayer ser en el centro y comer paella",
                        "isCorrect": false,
                        "explanation": "Incorreto. Falta estrutura gramatical."
                    }
                ],
                "correctIndex": 0
            }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CURSO_ESPANHOL_A2_DADOS;
}
if (typeof window !== 'undefined') {
    window.CURSO_ESPANHOL_A2_DADOS = CURSO_ESPANHOL_A2_DADOS;
}
