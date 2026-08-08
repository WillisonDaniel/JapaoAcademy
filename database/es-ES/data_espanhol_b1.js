/**
 * Banco de Dados Central do Curso de Espanhol - Nível B1 (Conteúdo Pedagógico Autêntico)
 */
const CURSO_ESPANHOL_B1_DADOS = [
    {
        "id": "es_b1_mod_1",
        "title": "1. O Que é o Subjuntivo e Como Formar",
        "level": "B1",
        "description": "Entenda o conceito de modo subjuntivo (desejo/subjetividade) e aprenda a conjugação do Presente de Subjuntivo.",
        "icon": "🧠",
        "stage1_context": {
            "missionTitle": "Módulo 1: O Que é o Subjuntivo e Como Formar",
            "missionDescription": "Compreenda a diferença entre fatos reais (Indicativo) e desejos/hipóteses (Subjuntivo) e domine as desinências do Presente de Subjuntivo.",
            "audioGuide": "El indicativo expresa hechos reales; el subjuntivo expresa deseos e hipótesis. Espero que estudies mucho."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Que hables",
                "Portuguese": "Que você fale (Subjuntivo AR ➔ e)",
                "Audio": "Que hables",
                "timeContext": "Forma de presente de subjuntivo para verbos em -AR."
            },
            {
                "type": "vocab",
                "Spanish": "Que comas",
                "Portuguese": "Que você coma (Subjuntivo ER ➔ a)",
                "Audio": "Que comas",
                "timeContext": "Forma de presente de subjuntivo para verbos em -ER."
            },
            {
                "type": "vocab",
                "Spanish": "Que vivas",
                "Portuguese": "Que você viva (Subjuntivo IR ➔ a)",
                "Audio": "Que vivas",
                "timeContext": "Forma de presente de subjuntivo para verbos em -IR."
            },
            {
                "type": "vocab",
                "Spanish": "Ojalá apruebes",
                "Portuguese": "Tomara que você passe (aprovação)",
                "Audio": "Ojalá apruebes",
                "timeContext": "Expressão de desejo com subjuntivo."
            },
            {
                "type": "vocab",
                "Spanish": "Espero que vengas",
                "Portuguese": "Espero que você venha",
                "Audio": "Espero que vengas",
                "timeContext": "Oração subordinada com verbo de desejo."
            },
            {
                "type": "grammar_pill",
                "title": "Conceito do Modo Subjuntivo",
                "rule": "O indicativo expressa certeza e fatos reais ('Estudias mucho'). O subjuntivo expressa desejos, incertezas, emoções e hipóteses ('Espero que estudies mucho').",
                "formula": "Indicativo = Fato | Subjuntivo = Desejo/Incerteza",
                "example": "Sé que vienes (Indicativo) vs Quiero que vengas (Subjuntivo)."
            },
            {
                "type": "grammar_pill",
                "title": "Formação do Presente de Subjuntivo",
                "rule": "Troca-se a vogal temática no presente: Verbos em -AR usam desinências com -E (hable, hables, hable, hablemos, habléis, hablen). Verbos em -ER/-IR usam desinências com -A (coma, comas, coma... / viva, vivas, viva...).",
                "formula": "-AR ➔ -e, -es, -e, -emos, -éis, -en | -ER/-IR ➔ -a, -as, -a, -amos, -áis, -an",
                "example": "Hablar ➔ que yo hable | Comer ➔ que tú comas."
            },
            {
                "type": "grammar_pill",
                "title": "Raiz Irregular da 1ª Pessoa (Yo Presente de Indicativo)",
                "rule": "Verbos irregulares no indicativo mantêm essa mesma raiz irregular na 1ª pessoa para todo o subjuntivo: Tener (tengo) ➔ tenga, tengas, tenga... / Hacer (hago) ➔ haga / Decir (digo) ➔ diga.",
                "formula": "Yo indicativo (tengo/hago/digo) ➔ Raiz para Subjuntivo",
                "example": "Hacer (hago) ➔ que yo haga, que tú hagas."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual é a 2ª pessoa do singular (tú) do verbo 'hablar' no Presente de Subjuntivo?",
                "options": [
                    "hables (que tú hables)",
                    "hablas",
                    "hablares",
                    "hable"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como conjugamos o verbo 'tener' para 'yo' no Presente de Subjuntivo?",
                "options": [
                    "tenga",
                    "tiena",
                    "teno",
                    "tengais"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Espero que comas bien durante tu viaje a México.'",
                "options": [
                    "Espero que você coma bem durante sua viagem ao México.",
                    "Sei que você come bem no México.",
                    "Você comeu bem na viagem.",
                    "Coma bem agora."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual é a principal diferença conceitual entre o modo Indicativo e o Subjuntivo?",
                "options": [
                    "Indicativo expressa fatos reais/certeza; Subjuntivo expressa desejos, incertezas e hipóteses",
                    "Indicativo é só no passado",
                    "Subjuntivo é usado apenas em perguntas",
                    "Não há diferença"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual a forma correta do verbo 'hacer' na 3ª pessoa do singular no Presente de Subjuntivo?",
                "options": [
                    "haga",
                    "hace",
                    "hacia",
                    "hagais"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Espero que estudies mucho para el examen de español de mañana.",
                "words": [
                    "Espero",
                    "que",
                    "estudies",
                    "mucho",
                    "para",
                    "el",
                    "examen",
                    "de",
                    "español",
                    "de",
                    "mañana."
                ],
                "translation": "Espero que você estude muito para a prova de espanhol de amanhã."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Profesor",
                "npcName": "Profesor",
                "text": "Hola Mateo, espero que estudies para el examen final.",
                "npcMessage": "Hola Mateo, espero que estudies para el examen final.",
                "translation": "Olá Mateo, espero que você estude para a prova final."
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "Sí, profesor. Ojalá apruebe el examen con buena nota.",
                "npcMessage": "Sí, profesor. Ojalá apruebe el examen con buena nota.",
                "translation": "Sim, professor. Tomara que eu passe na prova com uma boa nota."
            },
            {
                "speaker": "Profesor",
                "npcName": "Profesor",
                "text": "¡Seguro que sí! Es importante que repases la gramática hoy.",
                "npcMessage": "¡Seguro que sí! Es importante que repases la gramática hoy.",
                "translation": "Com certeza sim! É importante que você revise a gramática hoje."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Ojalá' em espanhol?",
                "options": [
                    {
                        "label": "Tomara que / Oxalá",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Jamais",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que dizemos 'Espero que vengas' e não 'Espero que vienes'?",
                "options": [
                    {
                        "label": "Porque o verbo 'esperar que' exige o verbo subordinado no Presente de Subjuntivo",
                        "isCorrect": true,
                        "explanation": "Exato! Gatilho de desejo exige subjuntivo."
                    },
                    {
                        "label": "Porque vienes é passado",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer desejar a um amigo que ele aprenda muito na Espanha. O que diz?",
                "options": [
                    {
                        "label": "Espero que aprendas mucho en España.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Sé que aprendes nada",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Quiero que hagas los deberes antes de salir.'",
                "options": [
                    {
                        "label": "Quero que você faça o dever de casa antes de sair.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Você fez os deveres ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Quais são os únicos 6 verbos totalmente irregulares no Presente de Subjuntivo?",
                "options": [
                    {
                        "label": "DAR (dé), IR (vaya), SER (sea), HABER (haya), ESTAR (esté), SABER (sepa)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Os 6 irregulares absolutos do subjuntivo."
                    },
                    {
                        "label": "Hablar, comer, vivir, trabajar, estudiar, escribir",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_2",
        "title": "2. Expressando Desejos e Esperanças",
        "level": "B1",
        "description": "Utilize gatilhos de desejo como espero que, deseo que, ojalá e ¡que tengas...! com presente de subjuntivo.",
        "icon": "🌟",
        "stage1_context": {
            "missionTitle": "Módulo 2: Expressando Desejos e Esperanças",
            "missionDescription": "Aprenda a expressar votos de felicidades, desejos pessoais e esperanças usando o subjuntivo.",
            "audioGuide": "¡Ojalá haga buen tiempo mañana! Espero que tengas un buen viaje a España."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Espero que...",
                "Portuguese": "Espero que...",
                "Audio": "Espero que...",
                "timeContext": "Expressão de esperança pessoal."
            },
            {
                "type": "vocab",
                "Spanish": "Deseo que...",
                "Portuguese": "Desejo que...",
                "Audio": "Deseo que...",
                "timeContext": "Voto formal de felicidades."
            },
            {
                "type": "vocab",
                "Spanish": "Ojalá + Subjuntivo",
                "Portuguese": "Tomara que... / Oxalá...",
                "Audio": "Ojalá",
                "timeContext": "Partícula árabe para desejos intensos."
            },
            {
                "type": "vocab",
                "Spanish": "¡Que tengas buen día!",
                "Portuguese": "Tenha um bom dia! (desejo direto)",
                "Audio": "¡Que tengas buen día!",
                "timeContext": "Despedida cotidiana com voto positivo."
            },
            {
                "type": "vocab",
                "Spanish": "¡Que te mejores!",
                "Portuguese": "Melhoras! / Que você melhore!",
                "Audio": "¡Que te mejores!",
                "timeContext": "Desejo de rápida recuperação de saúde."
            },
            {
                "type": "grammar_pill",
                "title": "Gatilhos de Desejo com 'Que' + Subjuntivo",
                "rule": "Verbos como esperar, desear e querer exigem 'que + Subjuntivo' quando os sujeitos da oração principal e subordinada são diferentes (Yo espero que tú vengas).",
                "formula": "[Verbo de Desejo: Sujeito 1] + que + [Subjuntivo: Sujeito 2]",
                "example": "Yo espero que tú apruebes el examen."
            },
            {
                "type": "grammar_pill",
                "title": "A Partícula Árabe 'Ojalá'",
                "rule": "Derivada do árabe law šāʾ Allāh ('se Deus quiser'), a palavra Ojalá pode vir acompanhada ou não de 'que' e exige obrigatoriamente o verbo no Subjuntivo (¡Ojalá apruebe!).",
                "formula": "Ojalá + (que) + Presente de Subjuntivo",
                "example": "¡Ojalá no llueva mañana por la tarde!"
            },
            {
                "type": "grammar_pill",
                "title": "Expressões Curtas de Voto Direto (¡Que + Subjuntivo!)",
                "rule": "Para desejar algo rápido a alguém na despedida, omite-se o verbo principal e usa-se '¡Que + Subjuntivo!': ¡Que te vaya bien!, ¡Que tengas buen viaje!, ¡Que aproveche!.",
                "formula": "¡Que + Subjuntivo + [voto corto]!",
                "example": "¡Que cumplas muchos años más!"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como desejar 'Tenha um bom dia!' informalmente em espanhol usando subjuntivo?",
                "options": [
                    "¡Que tengas un buen día!",
                    "Tenga un día bueno",
                    "Tienes buen día",
                    "Que tiene buen día"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual estrutura está correta com a partícula 'Ojalá' para desejar que faça bom tempo?",
                "options": [
                    "¡Ojalá haga buen tiempo!",
                    "¡Ojalá hace buen tiempo!",
                    "¡Ojalá haciendo tiempo!",
                    "¡Ojalá hizo buen tiempo!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: '¡Que te mejores pronto de la gripe!'",
                "options": [
                    "Melhoras rápidas da gripe!",
                    "Você teve gripe ontem.",
                    "Não fique gripado.",
                    "A gripe é ruim."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Quando se usa infinitivo em vez de subjuntivo após o verbo 'esperar'?",
                "options": [
                    "Quando os sujeitos da frase principal e subordinada são os mesmos (ex: Yo espero viajar)",
                    "Nunca",
                    "Sempre",
                    "Quando a frase é negativa"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. O que se deseja ao dizer '¡Que aproveche!' antes de comer?",
                "options": [
                    "Bom apetite! / Bom proveito!",
                    "Boa viagem!",
                    "Bom dia!",
                    "Boa sorte!"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¡Ojalá consigas el trabajo y que tengas mucho éxito en tu nueva etapa!",
                "words": [
                    "¡Ojalá",
                    "consigas",
                    "el",
                    "trabajo",
                    "y",
                    "que",
                    "tengas",
                    "mucho",
                    "éxito",
                    "en",
                    "tu",
                    "nueva",
                    "etapa!"
                ],
                "translation": "Tomara que você consiga o trabalho e tenha muito sucesso na sua nova etapa!"
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "Mañana tengo la entrevista de trabajo en la empresa.",
                "npcMessage": "Mañana tengo la entrevista de trabajo en la empresa.",
                "translation": "Amanhã tenho a entrevista de trabalho na empresa."
            },
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¡Qué bien! ¡Ojalá te vaya súper bien y que consigas el puesto!",
                "npcMessage": "¡Qué bien! ¡Ojalá te vaya súper bien y que consigas el puesto!",
                "translation": "Que bom! Tomara que vá super bem e que consiga a vaga!"
            },
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "¡Muchas gracias Carlos! Espero que todo salga perfecto.",
                "npcMessage": "¡Muchas gracias Carlos! Espero que todo salga perfecto.",
                "translation": "Muito obrigada Carlos! Espero que tudo saia perfeito."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa '¡Que aproveche!'?",
                "options": [
                    {
                        "label": "Bom apetite! / Bom proveito!",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Boa sorte!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual a diferença entre 'Espero viajar' e 'Espero que viajes'?",
                "options": [
                    {
                        "label": "'Espero viajar' = Eu mesmo espero viajar; 'Espero que viajes' = Espero que VOCÊ viaje",
                        "isCorrect": true,
                        "explanation": "Exato! Mudança de sujeito exige subjuntivo."
                    },
                    {
                        "label": "São idênticos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Seu colega de trabalho está doente em casa. O que você escreve em uma mensagem?",
                "options": [
                    {
                        "label": "¡Que te mejores pronto!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡Que aproveche!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¡Deseamos que tengáis una feliz Navidad!'",
                "options": [
                    {
                        "label": "Desejamos que vocês tenham um feliz Natal!",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Tivemos um feliz Natal ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) De qual idioma provém a palavra 'Ojalá'?",
                "options": [
                    {
                        "label": "Do Árabe (law šāʾ Allāh = se Deus quiser)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Herança cultural e linguística árabe na Península Ibérica."
                    },
                    {
                        "label": "Do Latim vulgar",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_3",
        "title": "3. Expressando Dúvidas e Incertezas",
        "level": "B1",
        "description": "Aprenda a usar o subjuntivo com estruturas de dúvida (dudo que, no creo que, tal vez, quizás).",
        "icon": "❓",
        "stage1_context": {
            "missionTitle": "Módulo 3: Expressando Dúvidas e Incertezas",
            "missionDescription": "Contraste a certeza do indicativo com a dúvida e incerteza do subjuntivo ao expressar opiniões negativas e possibilidades.",
            "audioGuide": "Creo que viene (Indicativo) vs No creo que venga (Subjuntivo). Dudo que sea verdad."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Dudo que...",
                "Portuguese": "Duvido que...",
                "Audio": "Dudo que...",
                "timeContext": "Expressão explícita de dúvida."
            },
            {
                "type": "vocab",
                "Spanish": "No creo que...",
                "Portuguese": "Não acho que... / Não creio que...",
                "Audio": "No creo que...",
                "timeContext": "Negação de opinião no indicativo."
            },
            {
                "type": "vocab",
                "Spanish": "No pienso que...",
                "Portuguese": "Não penso que...",
                "Audio": "No pienso que...",
                "timeContext": "Negação de pensamento ou hipótese."
            },
            {
                "type": "vocab",
                "Spanish": "Tal vez / Quizás",
                "Portuguese": "Talvez / Quem sabe",
                "Audio": "Tal vez / Quizás",
                "timeContext": "Advérbios de dúvida e probabilidade."
            },
            {
                "type": "vocab",
                "Spanish": "Puede que...",
                "Portuguese": "Pode ser que...",
                "Audio": "Puede que...",
                "timeContext": "Estrutura impessoal de possibilidade com subjuntivo."
            },
            {
                "type": "grammar_pill",
                "title": "Contraste de Opinião: Afirmativa (Indicativo) vs. Negativa (Subjuntivo)",
                "rule": "Verbos de opinião (creer, pensar, parecer) usam Indicativo na forma afirmativa ('Creo que es verdad'), mas EXIGEM Subjuntivo quando negados ('No creo que sea verdad').",
                "formula": "Creo que + Indicativo | No creo que + Subjuntivo",
                "example": "Creo que viene hoy. vs No creo que venga hoy."
            },
            {
                "type": "grammar_pill",
                "title": "Verbo 'Dudar que'",
                "rule": "O verbo dudar já expressa incerteza por natureza, exigindo sempre subjuntivo na oração subordinada ('Dudo que vengan a la fiesta').",
                "formula": "Dudar que + Subjuntivo",
                "example": "Dudo mucho que el tren llegue a tiempo."
            },
            {
                "type": "grammar_pill",
                "title": "Advérbios de Dúvida (Tal vez, Quizás, Puede que)",
                "rule": "'Puede que' sempre exige Subjuntivo ('Puede que llueva'). 'Tal vez' e 'Quizás' usam Subjuntivo quando a dúvida é maior ou refere-se ao futuro ('Quizás vaya al concierto').",
                "formula": "Puede que + Subjuntivo | Tal vez/Quizás + Subjuntivo",
                "example": "Puede que tengamos examen el viernes."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como completar a frase de opinião negativa: 'No creo que _____ (ser) una buena idea.'?",
                "options": [
                    "sea (Subjuntivo)",
                    "es",
                    "fuera",
                    "sido"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual tempo verbal usamos após a expressão impessoal 'Puede que...'?",
                "options": [
                    "Presente de Subjuntivo (ex: Puede que llueva)",
                    "Presente de Indicativo",
                    "Pretérito Indefinido",
                    "Imperativo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Dudo que Juan tenga suficiente dinero para comprar esa casa.'",
                "options": [
                    "Duvido que Juan tenha dinheiro suficiente para comprar essa casa.",
                    "Sei que Juan tem dinheiro para a casa.",
                    "Juan comprou a casa ontem.",
                    "Juan não quer comprar a casa."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a diferença entre 'Creo que viene' e 'No creo que venga'?",
                "options": [
                    "'Creo que viene' expressa certeza (Indicativo); 'No creo que venga' expressa dúvida (Subjuntivo)",
                    "Ambas expressam certeza",
                    "Ambas expressam dúvida",
                    "Não há diferença"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'Quizás _____ (ir) al cine esta tarde con mis amigos.'",
                "options": [
                    "vaya (Subjuntivo)",
                    "voy",
                    "iba",
                    "ido"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "No creo que el tren llegue a tiempo porque hay mucha nieve en la vía.",
                "words": [
                    "No",
                    "creo",
                    "que",
                    "el",
                    "tren",
                    "llegue",
                    "a",
                    "tiempo",
                    "porque",
                    "hay",
                    "mucha",
                    "nieve",
                    "en",
                    "la",
                    "vía."
                ],
                "translation": "Não acho que o trem chegue a tempo porque há muita neve na via."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Gabriel",
                "npcName": "Gabriel",
                "text": "¿Crees que nuestro equipo gane el partido de hoy?",
                "npcMessage": "¿Crees que nuestro equipo gane el partido de hoy?",
                "translation": "Você acha que nosso time ganha o jogo de hoje?"
            },
            {
                "speaker": "Elena",
                "npcName": "Elena",
                "text": "No creo que ganemos fácilmente, el rival es muy fuerte.",
                "npcMessage": "No creo que ganemos fácilmente, el rival es muy fuerte.",
                "translation": "Não acho que ganhemos facilmente, o rival é muito forte."
            },
            {
                "speaker": "Gabriel",
                "npcName": "Gabriel",
                "text": "Bueno, pero puede que tengamos suerte en la segunda parte.",
                "npcMessage": "Bueno, pero puede que tengamos suerte en la segunda parte.",
                "translation": "Bueno, mas pode ser que tenhamos sorte no segundo tempo."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Puede que...'?",
                "options": [
                    {
                        "label": "Pode ser que... / É possível que...",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Tenho certeza que...",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que usamos o subjuntivo em 'No pienso que sea correcto'?",
                "options": [
                    {
                        "label": "Porque a negação do verbo de pensamento 'no pienso que' exige subjuntivo",
                        "isCorrect": true,
                        "explanation": "Exato! Regra da opinião negada."
                    },
                    {
                        "label": "Porque é uma ordem",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer expressar dúvida sobre a chegada de uma encomenda hoje. O que diz?",
                "options": [
                    {
                        "label": "Dudo que el paquete llegue hoy.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "El paquete llegó ayer",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Tal vez viajemos a España en verano si ahorramos dinero.'",
                "options": [
                    {
                        "label": "Talvez viajemos para a Espanha no verão se economizarmos dinheiro.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Viajamos para a Espanha no verão passado.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Em qual destas frases o verbo DEVE ir no Indicativo em vez do Subjuntivo?",
                "options": [
                    {
                        "label": "Es verdad que Juan viene hoy.",
                        "isCorrect": true,
                        "explanation": "Fantástico! Construção de certeza impessoal usa Indicativo."
                    },
                    {
                        "label": "No es verdad que Juan venga hoy.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_4",
        "title": "4. Valorativa e Julgamentos Impessoais",
        "level": "B1",
        "description": "Avalie fatos e dê opiniões impessoais com Es importante que..., Es necesario que..., Es una lástima que...",
        "icon": "⚖️",
        "stage1_context": {
            "missionTitle": "Módulo 4: Valorativa e Julgamentos Impessoais",
            "missionDescription": "Aprenda a construir julgamentos de valor sobre ações usando construções impessoais seguidas de subjuntivo ou infinitivo.",
            "audioGuide": "Es importante que comas sano. Es una lástima que no puedas venir con nosotros."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Es importante que...",
                "Portuguese": "É importante que...",
                "Audio": "Es importante que...",
                "timeContext": "Avaliação de importância."
            },
            {
                "type": "vocab",
                "Spanish": "Es necesario que...",
                "Portuguese": "É necessário que...",
                "Audio": "Es necesario que...",
                "timeContext": "Avaliação de necessidade."
            },
            {
                "type": "vocab",
                "Spanish": "Es una lástima / pena que...",
                "Portuguese": "É uma pena que...",
                "Audio": "Es una lástima que...",
                "timeContext": "Expressão de pesar por um fato."
            },
            {
                "type": "vocab",
                "Spanish": "Es raro / extraño que...",
                "Portuguese": "É estranho que...",
                "Audio": "Es raro que...",
                "timeContext": "Avaliação de estranheza ou incomum."
            },
            {
                "type": "vocab",
                "Spanish": "Es mejor que...",
                "Portuguese": "É melhor que...",
                "Audio": "Es mejor que...",
                "timeContext": "Recomendação impessoal."
            },
            {
                "type": "grammar_pill",
                "title": "Construção Impessoal Valorativa (Es + Adjetivo/Substantivo + que + Subjuntivo)",
                "rule": "Quando se expressa um julgamento de valor geral direcionado a uma pessoa, usa-se 'Es + adjetivo/substantivo + que + Subjuntivo' (Es necesario que tú leas el informe).",
                "formula": "Es + [adjetivo/substantivo] + que + Subjuntivo",
                "example": "Es fundamental que estudies para el examen."
            },
            {
                "type": "grammar_pill",
                "title": "Regra do Infinitivo sem Sujeito Determinado",
                "rule": "Se a avaliação for uma recomendação genérica sem a conjunção 'que' nem sujeito específico, usa-se o Infinitivo (Es importante comer sano vs Es importante que comas sano).",
                "formula": "Es + [adjetivo] + Infinitivo (Sem que)",
                "example": "Es necesario descansar ocho horas diarias."
            },
            {
                "type": "grammar_pill",
                "title": "Construções de Certeza Impessoal no Indicativo",
                "rule": "Se a expressão impessoal indicar certeza absoluta (Es verdad que, Es cierto que, Es evidente que), usa-se o INDICATIVO (Es verdad que viene). No entanto, se for negada, volta ao Subjuntivo (No es verdad que venga).",
                "formula": "Es verdad/cierto/evidente que + Indicativo",
                "example": "Es evidente que María trabaja mucho."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como completar a frase impessoal: 'Es importante que tú _____ (dormir) bien.'?",
                "options": [
                    "duermas (Subjuntivo)",
                    "duermes",
                    "dormir",
                    "durmió"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual forma usamos quando NÃO há a conjunção 'que' na frase: 'Es necesario _____ (estudiar) todos los días.'?",
                "options": [
                    "estudiar (Infinitivo)",
                    "estudies",
                    "estudia",
                    "estudiando"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Es una lástima que no puedas venir a la cena de graduación.'",
                "options": [
                    "É uma pena que você não possa vir ao jantar de formatura.",
                    "Você veio ao jantar de formatura.",
                    "É bom vir ao jantar.",
                    "O jantar foi cancelado."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual é a forma correta após 'Es cierto que...' (expressão de certeza)?",
                "options": [
                    "llegó / llega (Indicativo)",
                    "llegue (Subjuntivo)",
                    "llegando",
                    "llegar"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'Es raro que Mateo _____ (llegar) tarde al trabajo.'",
                "options": [
                    "llegue (Subjuntivo)",
                    "llega",
                    "llegó",
                    "llegar"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Es una lástima que no puedas asistir a la reunión de trabajo hoy.",
                "words": [
                    "Es",
                    "una",
                    "lástima",
                    "que",
                    "no",
                    "puedas",
                    "asistir",
                    "a",
                    "la",
                    "reunión",
                    "de",
                    "trabajo",
                    "hoy."
                ],
                "translation": "É uma pena que você não possa comparecer à reunião de trabalho hoje."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Martín",
                "npcName": "Martín",
                "text": "Es extraño que la oficina esté tan silenciosa hoy.",
                "npcMessage": "Es extraño que la oficina esté tan silenciosa hoy.",
                "translation": "É estranho que o escritório esteja tão silencioso hoje."
            },
            {
                "speaker": "Laura",
                "npcName": "Laura",
                "text": "Es que es necesario que todos trabajen concentrados en el informe.",
                "npcMessage": "Es que es necesario que todos trabajen concentrados en el informe.",
                "translation": "É que é necessário que todos trabalhem concentrados no relatório."
            },
            {
                "speaker": "Martín",
                "npcName": "Martín",
                "text": "Entiendo. Es mejor que vayamos a la sala de reuniones para hablar.",
                "npcMessage": "Entiendo. Es mejor que vayamos a la sala de reuniones para hablar.",
                "translation": "Entendo. É melhor que vamos para a sala de reuniões para conversar."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Es una lástima que...'?",
                "options": [
                    {
                        "label": "É uma pena que... / É lamentável que...",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "É ótimo que...",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que dizemos 'Es importante comer sano' com infinitivo?",
                "options": [
                    {
                        "label": "Porque não há a conjunção 'que' nem um sujeito específico a quem se dirige o conselho",
                        "isCorrect": true,
                        "explanation": "Exato! Regra da generalização com infinitivo."
                    },
                    {
                        "label": "Porque comer é verbo irregular",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Um amigo está muito cansado e você quer dar um conselho impessoal. O que diz?",
                "options": [
                    {
                        "label": "Es conveniente que descanses este fin de semana.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Es verdad que trabajas",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Es necesario que presentéis la documentación antes del viernes.'",
                "options": [
                    {
                        "label": "É necessário que vocês apresentem a documentação antes de sexta-feira.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Apresentamos a documentação na sexta-feira passada.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual destas frases exige INDICATIVO no verbo principal?",
                "options": [
                    {
                        "label": "Es seguro que Juan sabe la respuesta.",
                        "isCorrect": true,
                        "explanation": "Fantástico! 'Es seguro que' é expressão de certeza e exige Indicativo."
                    },
                    {
                        "label": "Es posible que Juan sepa la respuesta.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_5",
        "title": "5. Recomendações e Conselhos com Subjuntivo",
        "level": "B1",
        "description": "Aconselhe pessoas e dê sugestões formais/informais com Te aconsejo que..., Te recomiendo que...",
        "icon": "💡",
        "stage1_context": {
            "missionTitle": "Módulo 5: Recomendações e Conselhos com Subjuntivo",
            "missionDescription": "Domine as estruturas de aconselhamento interpessoal avançado utilizando verbos de influência mais subjuntivo.",
            "audioGuide": "Te recomiendo que visites el museo Prados. Te sugiero que descanses un poco."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Te aconsejo que...",
                "Portuguese": "Aconselho-o(a) a... / Aconselho que...",
                "Audio": "Te aconsejo que...",
                "timeContext": "Conselho direto a um amigo."
            },
            {
                "type": "vocab",
                "Spanish": "Te recomiendo que...",
                "Portuguese": "Recomendo-lhe que... / Recomendo que...",
                "Audio": "Te recomiendo que...",
                "timeContext": "Recomendação pessoal útil."
            },
            {
                "type": "vocab",
                "Spanish": "Te sugiero que...",
                "Portuguese": "Sugiro-lhe que... / Sugiro que...",
                "Audio": "Te sugiero que...",
                "timeContext": "Sugestão suave."
            },
            {
                "type": "vocab",
                "Spanish": "Le recomiendo (usted)",
                "Portuguese": "Recomendo ao senhor / à senhora",
                "Audio": "Le recomiendo",
                "timeContext": "Recomendação formal com tratamento de usted."
            },
            {
                "type": "vocab",
                "Spanish": "Proponer que...",
                "Portuguese": "Propor que...",
                "Audio": "Proponer que...",
                "timeContext": "Proposta de plano com subjuntivo."
            },
            {
                "type": "grammar_pill",
                "title": "Verbos de Influência e Conselho com Objeto Indireto",
                "rule": "Verbos como aconsejar, recomendar e sugerir usam pronome de objeto indireto para indicar a quem se aconselha (te / le / nos) + 'que + Subjuntivo' (Te aconsejo que estudies).",
                "formula": "[Pronome te/le/nos] + verbo conselho + que + Subjuntivo",
                "example": "Te recomiendo que leas este libro."
            },
            {
                "type": "grammar_pill",
                "title": "Tratamento Formal (Usted) vs. Informal (Tú) em Conselhos",
                "rule": "Em contextos formais usa-se 'Le recomiendo que + subjuntivo' (com 3ª pessoa); em contextos informais usa-se 'Te recomiendo que + subjuntivo' (2ª pessoa).",
                "formula": "Informal: Te recomiendo | Formal: Le recomiendo",
                "example": "Le sugiero (a usted) que hable con el director."
            },
            {
                "type": "grammar_pill",
                "title": "Aconselhamento sem 'Que' (Uso do Infinitivo)",
                "rule": "Quando o conselho é dado diretamente como objeto do verbo sem a conjunção 'que', pode-se usar a estrutura alternativa 'Te aconsejo ir temprano' (infinitivo).",
                "formula": "Te aconsejo / recomiendo + Infinitivo",
                "example": "Te recomiendo visitar el centro histórico."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dar uma recomendação informal a um amigo para visitar Madri?",
                "options": [
                    "Te recomiendo que visites Madrid",
                    "Le recomiendo que visites Madrid",
                    "Te recomiendo visitas Madrid",
                    "Te recomiendo visitar que"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual pronome de objeto usamos ao aconselhar formalmente um cliente (Usted)?",
                "options": [
                    "Le (ex: Le sugiero que compruebe la factura)",
                    "Te",
                    "Os",
                    "Me"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Te aconsejo que hables con el médico antes de tomar ese medicamento.'",
                "options": [
                    "Aconselho-o a falar com o médico antes de tomar esse remédio.",
                    "Falei com o médico sobre o remédio.",
                    "O médico aconselhou tomar o remédio.",
                    "Não tome o remédio."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a forma correta do verbo 'descansar' em: 'Te sugiero que _____ (descansar) este fin de semana.'?",
                "options": [
                    "descanses (Subjuntivo)",
                    "descansas",
                    "descansar",
                    "descansaste"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a recomendação sem 'que': 'Te recomiendo _____ (reservar) la mesa con antelación.'",
                "options": [
                    "reservar (Infinitivo)",
                    "reserves",
                    "reserva",
                    "reservado"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Te recomiendo que visites la catedral por la mañana para evitar las colas.",
                "words": [
                    "Te",
                    "recomiendo",
                    "que",
                    "visites",
                    "la",
                    "catedral",
                    "por",
                    "la",
                    "mañana",
                    "para",
                    "evitar",
                    "las",
                    "colas."
                ],
                "translation": "Recomendo-lhe que visite a catedral de manhã para evitar as filas."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Turista",
                "npcName": "Turista",
                "text": "Disculpe, ¿qué me recomienda que visite en la ciudad?",
                "npcMessage": "Disculpe, ¿qué me recomienda que visite en la ciudad?",
                "translation": "Com licença, o que o senhor me recomenda visitar na cidade?"
            },
            {
                "speaker": "Recepcionista",
                "npcName": "Recepcionista",
                "text": "Le recomiendo que empiece por el museo de arte y que pasee por el parque.",
                "npcMessage": "Le recomiendo que empiece por el museo de arte y que pasee por el parque.",
                "translation": "Recomendo-lhe que comece pelo museu de arte e passeie pelo parque."
            },
            {
                "speaker": "Turista",
                "npcName": "Turista",
                "text": "¡Muchas gracias! Le agradezco mucho su consejo.",
                "npcMessage": "¡Muchas gracias! Le agradezco mucho su consejo.",
                "translation": "Muito obrigada! Agradeço-lhe muito o seu conselho."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Te sugiero que...'?",
                "options": [
                    {
                        "label": "Sugiro-lhe que... / Sugiro que...",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Proibo-o de...",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que dizemos 'Le recomiendo que vaya' para tratamento formal?",
                "options": [
                    {
                        "label": "Porque 'Le' refere-se a usted (3ª pessoa) e exige o verbo no subjuntivo correspondente",
                        "isCorrect": true,
                        "explanation": "Exato! Regra de cortesia formal."
                    },
                    {
                        "label": "Porque é passado",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Seu amigo está planejando viajar para o Chile e você recomenda um hotel. O que diz?",
                "options": [
                    {
                        "label": "Te recomiendo que reserves en este hotel.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Fui al hotel ayer",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'El médico me aconsejó que hiciera reposo durante tres días.'",
                "options": [
                    {
                        "label": "O médico aconselhou-me a fazer repouso durante três dias.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O médico trabalhou três dias.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'aconsejar' e 'proponer'?",
                "options": [
                    {
                        "label": "'Aconsejar' é dar uma orientação útil; 'Proponer' é sugerir um plano conjunto para realizar",
                        "isCorrect": true,
                        "explanation": "Fantástico! Nuance de intenção pragmática."
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
        "id": "es_b1_mod_6",
        "title": "6. Expressando Sentimentos e Emoções",
        "level": "B1",
        "description": "Reaja a fatos com sentimentos e emoções usando Me alegra que..., Me molesta que..., Me da miedo que...",
        "icon": "😍",
        "stage1_context": {
            "missionTitle": "Módulo 6: Expressando Sentimentos e Emoções",
            "missionDescription": "Aprenda a expressar suas reações emocionais diante de acontecimentos e ações de outras pessoas usando o subjuntivo.",
            "audioGuide": "Me alegra mucho que estés aquí. Me molesta que la gente hable tan alto."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Me alegra que...",
                "Portuguese": "Alegra-me que... / Fico feliz que...",
                "Audio": "Me alegra que...",
                "timeContext": "Reação de alegria por um fato."
            },
            {
                "type": "vocab",
                "Spanish": "Me molesta / irrita que...",
                "Portuguese": "Incomoda-me / Irrita-me que...",
                "Audio": "Me molesta que...",
                "timeContext": "Reação de incômodo."
            },
            {
                "type": "vocab",
                "Spanish": "Me preocupa que...",
                "Portuguese": "Preocupa-me que...",
                "Audio": "Me preocupa que...",
                "timeContext": "Expressão de preocupação."
            },
            {
                "type": "vocab",
                "Spanish": "Me da miedo / vergüenza que...",
                "Portuguese": "Dá-me medo / vergonha que...",
                "Audio": "Me da miedo que...",
                "timeContext": "Expressão de medo ou timidez."
            },
            {
                "type": "vocab",
                "Spanish": "Siento mucho que...",
                "Portuguese": "Sinto muito que...",
                "Audio": "Siento mucho que...",
                "timeContext": "Empatia por uma notícia ruim."
            },
            {
                "type": "grammar_pill",
                "title": "Verbos de Reação Emocional Tipo 'Gustar'",
                "rule": "Verbos como alegrar, molestar, preocupar, encantar e dar miedo exigem pronome reflexivo/indireto (me, te, le, nos) + 'que + Subjuntivo' quando se reage a uma ação alheia (Me alegra que apruebes).",
                "formula": "[Pronome me/te/le] + verbo emoção + que + Subjuntivo",
                "example": "Me molesta que la gente llegue tarde."
            },
            {
                "type": "grammar_pill",
                "title": "Regra de Sujeitos Diferentes vs. Mesmo Sujeito",
                "rule": "Se a emoção e a ação pertencem ao mesmo sujeito, usa-se Infinitivo (Me alegra estar aquí). Se os sujeitos forem diferentes, exige-se Subjuntivo (Me alegra que estés aquí).",
                "formula": "Mesmo Sujeito ➔ Infinitivo | Sujeitos Diferentes ➔ Subjuntivo",
                "example": "Me alegra viajar (mesmo sujeto) vs Me alegra que viajes (sujeitos diferentes)."
            },
            {
                "type": "grammar_pill",
                "title": "O Verbo 'Sentir' para Pêsames e Desculpas",
                "rule": "O verbo sentir (lamentar) usa-se em 'Siento mucho que + Subjuntivo' para expressar empatia ou pêsames perante notícias ruins (Siento mucho que estés enfermo).",
                "formula": "Siento mucho que + Subjuntivo",
                "example": "Siento mucho que no puedas acompañarnos."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como expressar alegria por um amigo ter chegado bem de viagem?",
                "options": [
                    "Me alegra mucho que hayas llegado bien",
                    "Me alegra que llegas bien",
                    "Me alegro llegar bien",
                    "Alegro que llegaste"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual forma verbal usamos quando o sujeito da emoção e da ação é o mesmo (ex: Eu fico feliz por estar aqui)?",
                "options": [
                    "Infinitivo (ex: Me alegra estar aquí)",
                    "Subjuntivo",
                    "Imperativo",
                    "Gerúndio"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Me preocupa que no haya noticias de la expedición.'",
                "options": [
                    "Preocupa-me que não haja notícias da expedição.",
                    "Sei que a expedição chegou.",
                    "A expedição enviou notícias ontem.",
                    "Não me importo com a expedição."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a forma correta do verbo 'hablar' em: 'Me molesta que la gente _____ (hablar) tan alto por teléfono.'?",
                "options": [
                    "hable (Subjuntivo)",
                    "habla",
                    "hablar",
                    "habló"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Como expressar pêsames/empatia a alguém que perdeu um compromisso importante?",
                "options": [
                    "Siento mucho que hayas perdido la cita.",
                    "Siento mucho que pierdes",
                    "Me gusta que pierdas",
                    "No me importa"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Me alegra mucho que hayas venido a mi fiesta de cumpleaños este fin de semana.",
                "words": [
                    "Me",
                    "alegra",
                    "mucho",
                    "que",
                    "hayas",
                    "venido",
                    "a",
                    "mi",
                    "fiesta",
                    "de",
                    "cumpleaños",
                    "este",
                    "fin",
                    "de",
                    "semana."
                ],
                "translation": "Fico muito feliz que você tenha vindo à minha festa de aniversário este fim de semana."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "¡Hola Marcos! Me alegra mucho que estés aquí en la ciudad.",
                "npcMessage": "¡Hola Marcos! Me alegra mucho que estés aquí en la ciudad.",
                "translation": "Olá Marcos! Fico muito feliz que você esteja aqui na cidade."
            },
            {
                "speaker": "Marcos",
                "npcName": "Marcos",
                "text": "¡Gracias Sofía! A mí también me encanta que podamos vernos hoy.",
                "npcMessage": "¡Gracias Sofía! A mí también me encanta que podamos vernos hoy.",
                "translation": "Obrigado Sofía! Eu também adoro que possamos nos ver hoje."
            },
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "Siento mucho que ayer no pudiéramos cenar juntos.",
                "npcMessage": "Siento mucho que ayer no pudiéramos cenar juntos.",
                "translation": "Sinto muito que ontem não pudéssemos jantar juntos."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Me molesta que...'?",
                "options": [
                    {
                        "label": "Incomoda-me / Irrita-me que...",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Alegra-me que...",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que dizemos 'Me da miedo volar' com infinitivo?",
                "options": [
                    {
                        "label": "Porque quem sente medo e quem voa é a mesma pessoa (mesmo sujeito)",
                        "isCorrect": true,
                        "explanation": "Exato! Regra do mesmo sujeito exige infinitivo."
                    },
                    {
                        "label": "Porque volar é substantivo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer reclamar educadamente que o barulho dos vizinhos te incomoda. O que diz?",
                "options": [
                    {
                        "label": "Me molesta que hagáis tanto ruido por la noche.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Me alegra el ruido",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'A mis padres les preocupa que no encontremos trabajo pronto.'",
                "options": [
                    {
                        "label": "Aos meus pais preocupa-os que não encontremos trabalho logo.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Meus pais encontraram trabalho ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual verbo de emoção exige a preposição 'de' antes do 'que'? (ex: Arrepentirse / Alegrarse)",
                "options": [
                    {
                        "label": "Alegrarse de que... / Arrepentirse de que... (Verbos pronominais de sentimento)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Régimen preposicional de verbos pronominais de emoção."
                    },
                    {
                        "label": "Molestar que",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_7",
        "title": "7. Imperativo Afirmativo e Negativo",
        "level": "B1",
        "description": "Domine ordens, pedidos e instruções no Imperativo Afirmativo (habla, come) e Negativo (no hables, no comas).",
        "icon": "📢",
        "stage1_context": {
            "missionTitle": "Módulo 7: Imperativo Afirmativo e Negativo",
            "missionDescription": "Aprenda a dar instruções claras, comandos e conselhos diretos tanto na forma afirmativa quanto na negativa.",
            "audioGuide": "¡Habla más despacio! ¡No hables tan rápido! ¡Haz la tarea ahora mismo!"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "¡Habla! / ¡No hables!",
                "Portuguese": "Fale! / Não fale!",
                "Audio": "¡Habla! / ¡No hables!",
                "timeContext": "Comando afirmativo e negativo para verbos -AR."
            },
            {
                "type": "vocab",
                "Spanish": "¡Come! / ¡No comas!",
                "Portuguese": "Coma! / Não coma!",
                "Audio": "¡Come! / ¡No comas!",
                "timeContext": "Comando afirmativo e negativo para verbos -ER."
            },
            {
                "type": "vocab",
                "Spanish": "¡Escribe! / ¡No escribas!",
                "Portuguese": "Escreva! / Não escreva!",
                "Audio": "¡Escribe! / ¡No escribas!",
                "timeContext": "Comando afirmativo e negativo para verbos -IR."
            },
            {
                "type": "vocab",
                "Spanish": "¡Haz! / ¡No hagas!",
                "Portuguese": "Faça! / Não faça! (Verbo hacer)",
                "Audio": "¡Haz! / ¡No hagas!",
                "timeContext": "Imperativo irregular do verbo hacer."
            },
            {
                "type": "vocab",
                "Spanish": "¡Ven! / ¡No vengas!",
                "Portuguese": "Venha! / Não venha! (Verbo venir)",
                "Audio": "¡Ven! / ¡No vengas!",
                "timeContext": "Imperativo irregular do verbo venir."
            },
            {
                "type": "grammar_pill",
                "title": "Formação do Imperativo Afirmativo (Tú / Usted / Vosotros)",
                "rule": "Para tú, usa-se a 3ª pessoa do presente do indicativo (habla, come, vive). Para usted, usa-se a 3ª pessoa do presente do subjuntivo (hable, coma, viva). Para vosotros, troca-se a 'r' do infinitivo por 'd' (hablad, comed, vivid).",
                "formula": "Tú: 3ª p. indicativo | Usted: Subjuntivo | Vosotros: Infinitivo com -D",
                "example": "¡Habla tú! / ¡Hable usted! / ¡Hablad vosotros!"
            },
            {
                "type": "grammar_pill",
                "title": "Os 8 Irregulares Irresistíveis do Imperativo Afirmativo (Tú)",
                "rule": "Hacer ➔ haz / Poner ➔ pon / Tener ➔ ten / Venir ➔ ven / Salir ➔ sal / Decir ➔ di / Ir ➔ ve / Ser ➔ sé.",
                "formula": "Haz, Pon, Ten, Ven, Sal, Di, Ve, Sé",
                "example": "¡Haz tu cama! / ¡Pon la mesa! / ¡Sé bueno!"
            },
            {
                "type": "grammar_pill",
                "title": "Imperativo Negativo = 100% Presente de Subjuntivo",
                "rule": "O Imperativo Negativo usa SEMPRE e integralmente as formas do Presente do Subjuntivo precedidas de 'No': ¡No hables!, ¡No comas!, ¡No hagas!, ¡No vengas!.",
                "formula": "No + Presente de Subjuntivo",
                "example": "¡No hables con la boca llena! / ¡No vengas tarde!"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual é a forma afirmativa do imperativo para 'tú' do verbo 'hacer'?",
                "options": [
                    "¡Haz! (ex: ¡Haz la tarea!)",
                    "¡Hace!",
                    "¡Hagas!",
                    "¡Haces!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como dizer 'Não fale!' no imperativo negativo para 'tú' em espanhol?",
                "options": [
                    "¡No hables!",
                    "¡No habla!",
                    "¡No hablares!",
                    "¡No hablas!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: '¡Pon la mesa para la cena y no salgas a la calle sin abrigo!'",
                "options": [
                    "Ponha a mesa para o jantar e não saia à rua sem casaco!",
                    "A mesa do jantar está pronta.",
                    "Saí sem casaco ontem.",
                    "Não coma na mesa."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual é a forma do imperativo afirmativo para 'vosotros' do verbo 'comer'?",
                "options": [
                    "¡Comed!",
                    "¡Coman!",
                    "¡Comes!",
                    "¡Comer!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual a forma negativa do verbo 'venir' para 'tú'?",
                "options": [
                    "¡No vengas!",
                    "¡No ven!",
                    "¡No vienes!",
                    "¡No vengaes!"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¡Haz tu trabajo con cuidado y no hagas ruido mientras los niños duermen!",
                "words": [
                    "¡Haz",
                    "tu",
                    "trabajo",
                    "con",
                    "cuidado",
                    "y",
                    "no",
                    "hagas",
                    "ruido",
                    "mientras",
                    "los",
                    "niños",
                    "duermen!"
                ],
                "translation": "Faça seu trabalho com cuidado e não faça barulho enquanto as crianças dormem!"
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Jefe",
                "npcName": "Jefe",
                "text": "Mateo, por favor, ¡haz este informe ahora y sal de la oficina temprano!",
                "npcMessage": "Mateo, por favor, ¡haz este informe ahora y sal de la oficina temprano!",
                "translation": "Mateo, por favor, faça este relatório agora e saia do escritório cedo!"
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "Entendido señor. ¿Y con respecto a las llamadas?",
                "npcMessage": "Entendido señor. ¿Y con respecto a las llamadas?",
                "translation": "Entendido senhor. E com relação às ligações?"
            },
            {
                "speaker": "Jefe",
                "npcName": "Jefe",
                "text": "¡No atiendas llamadas personales durante el trabajo!",
                "npcMessage": "¡No atiendas llamadas personales durante el trabajo!",
                "translation": "Não atenda ligações pessoais durante o trabalho!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa '¡Hazlo!'?",
                "options": [
                    {
                        "label": "Faça-o! / Faça isso!",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Não faça!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual tempo verbal é usado no Imperativo Negativo?",
                "options": [
                    {
                        "label": "100% o Presente de Subjuntivo (ex: No comas, No hables)",
                        "isCorrect": true,
                        "explanation": "Exato! Regra de ouro do imperativo negativo."
                    },
                    {
                        "label": "Presente do indicativo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer mandar um amigo vir rápido à sua casa. O que grita?",
                "options": [
                    {
                        "label": "¡Ven rápido a mi casa!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡No vengas!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¡Diga la verdad al juez y no mienta!'",
                "options": [
                    {
                        "label": "Diga a verdade ao juiz e não minta! (Usted)",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Ele disse a verdade ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Como fica a ordem 'seja bom' no imperativo afirmativo de 'tú' para o verbo SER?",
                "options": [
                    {
                        "label": "¡Sé bueno! (com acento gráfico para diferir de 'se')",
                        "isCorrect": true,
                        "explanation": "Fantástico! Ortografia vital da língua espanhola."
                    },
                    {
                        "label": "¡Sea bueno!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_8",
        "title": "8. Colocação de Pronomes com Imperativo",
        "level": "B1",
        "description": "Aprenda a anexar pronomes no Imperativo Afirmativo (Dímelo, hazlo) e separá-los no Negativo (No me lo digas).",
        "icon": "🔗",
        "stage1_context": {
            "missionTitle": "Módulo 8: Colocação de Pronomes com Imperativo",
            "missionDescription": "Domine a regra de enclise obrigatória no imperativo afirmativo e a próclise no imperativo negativo.",
            "audioGuide": "¡Dímelo ahora! (Afirmativo anexo) vs ¡No me lo digas! (Negativo separado)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Dímelo",
                "Portuguese": "Diga-me / Diga-me isso (Diga + me + lo)",
                "Audio": "Dímelo",
                "timeContext": "Imperativo afirmativo com pronomes anexados."
            },
            {
                "type": "vocab",
                "Spanish": "Hazlo",
                "Portuguese": "Faça-o / Faça isso (Haz + lo)",
                "Audio": "Hazlo",
                "timeContext": "Comando com objeto direto anexado."
            },
            {
                "type": "vocab",
                "Spanish": "Pónselo",
                "Portuguese": "Ponha-lhe isso / Coloque-lhe (Pon + se + lo)",
                "Audio": "Pónselo",
                "timeContext": "Imperativo com regra de transformação le ➔ se."
            },
            {
                "type": "vocab",
                "Spanish": "No me lo digas",
                "Portuguese": "Não me diga / Não me fale isso",
                "Audio": "No me lo digas",
                "timeContext": "Imperativo negativo com pronomes separados."
            },
            {
                "type": "vocab",
                "Spanish": "No lo hagas",
                "Portuguese": "Não o faça / Não faça isso",
                "Audio": "No lo hagas",
                "timeContext": "Comando negativo com objeto direto anteposto."
            },
            {
                "type": "grammar_pill",
                "title": "Anexo Pronominal Obrigatório no Imperativo Afirmativo (Ênclise)",
                "rule": "No Imperativo Afirmativo, os pronomes de objeto (OD e OI) grudam obrigatoriamente NO FINAL do verbo formando uma só palavra acentuada graficamente (Dí + me + lo ➔ Dímelo, Haz + lo ➔ Hazlo).",
                "formula": "Imperativo Afirmativo + [Pronome OI] + [Pronome OD]",
                "example": "Dime el secreto ➔ Dímelo."
            },
            {
                "type": "grammar_pill",
                "title": "Pronomes Separados no Imperativo Negativo (Próclise)",
                "rule": "No Imperativo Negativo, os pronomes ficam ANTES do verbo e SEPARADOS dele, logo após a negação 'no' (No + me + lo + digas ➔ No me lo digas).",
                "formula": "No + [Pronome OI] + [Pronome OD] + Subjuntivo",
                "example": "No me digas el secreto ➔ No me lo digas."
            },
            {
                "type": "grammar_pill",
                "title": "A Regra de Ouro 'Le/Les ➔ Se' antes de Lo/La/Los/Las",
                "rule": "Quando se combinam objeto indireto (le/les) e objeto direto (lo/la/los/las), o le/les transforma-se em 'se': Da el libro a Juan ➔ Dáselo (e no negativo: No se lo des).",
                "formula": "Le/Les + Lo/La ➔ SE + Lo/La",
                "example": "Compra las flores a María ➔ Cómpraselas."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como fica a ordem 'Diga-me o segredo' anexando o pronome direto e indireto ao verbo afirmativo 'decir'?",
                "options": [
                    "¡Dímelo!",
                    "¡Me lo di!",
                    "¡Dilo me!",
                    "¡Dime lo!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como fica a frase negativa 'Não diga o segredo a mim' usando pronomes?",
                "options": [
                    "¡No me lo digas!",
                    "¡No dímelo!",
                    "¡No digas me lo!",
                    "¡No lo me digas!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Si compras la revista para Carlos, dásela hoy mismo.'",
                "options": [
                    "Se você comprar a revista para Carlos, dê-lha hoje mesmo.",
                    "Comprei a revista para Carlos ontem.",
                    "Não dê a revista a Carlos.",
                    "Carlos comprou a revista."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Por que a palavra 'Dímelo' leva acento gráfico?",
                "options": [
                    "Porque ao anexar dois pronomes ao verbo tornou-se uma palavra esdrúxula (proparoxítona)",
                    "Porque o verbo decir tem acento",
                    "Porque todos os pronomes têm acento",
                    "É opcional"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual a forma negativa correta para '¡Cómpraselo!'?",
                "options": [
                    "¡No se lo compres!",
                    "¡No le lo compres!",
                    "¡No cómpraselo!",
                    "¡No compres se lo!"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Si tienes el documento listo, dámelo ahora y no se lo des a nadie más.",
                "words": [
                    "Si",
                    "tienes",
                    "el",
                    "documento",
                    "listo,",
                    "dámelo",
                    "ahora",
                    "y",
                    "no",
                    "se",
                    "lo",
                    "des",
                    "a",
                    "nadie",
                    "más."
                ],
                "translation": "Se você tem o documento pronto, dê-mo agora e não o dê a mais ninguém."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "¿Tengo que enviarle este correo al cliente ahora?",
                "npcMessage": "¿Tengo que enviarle este correo al cliente ahora?",
                "translation": "Tenho que enviar este e-mail ao cliente agora?"
            },
            {
                "speaker": "Jefe",
                "npcName": "Jefe",
                "text": "Sí, envíaselo inmediatamente y no se lo olvides adjuntar el contrato.",
                "npcMessage": "Sí, envíaselo inmediatamente y no se lo olvides adjuntar el contrato.",
                "translation": "Sim, envie-lho imediatamente e não se esqueça de anexar o contrato."
            },
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "De acuerdo. ¡Voy a enviárselo ahora mismo!",
                "npcMessage": "De acuerdo. ¡Voy a enviárselo ahora mismo!",
                "translation": "De acordo. Vou enviar-lho agora mesmo!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa '¡No me lo digas!'?",
                "options": [
                    {
                        "label": "Não me diga! / Não me fale isso! (Expressão de surpresa ou negação)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Diga-me tudo!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é a ordem dos pronomes quando se usam Objeto Direto (OD) e Objeto Indireto (OI) juntos?",
                "options": [
                    {
                        "label": "O Objeto Indireto vem SEMPRE antes do Objeto Direto (OI + OD: me lo, te lo, se lo)",
                        "isCorrect": true,
                        "explanation": "Exato! Regra absoluta de colocação pronominal."
                    },
                    {
                        "label": "OD vem antes de OI",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer mandar um amigo fazer a tarefa e te mostrar. O que diz?",
                "options": [
                    {
                        "label": "¡Hazla y muéstramela!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡No la hagas!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¡No se lo cuentes a nadie, es un secreto!'",
                "options": [
                    {
                        "label": "Não conte isso a ninguém, é um segredo!",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Conte o segredo para todos.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Por que dizemos 'Dáselo' em vez de 'Dálelo'?",
                "options": [
                    {
                        "label": "Porque a cacofonia do encontro 'le + lo' exige a transformação do pronome indireto le para 'se'",
                        "isCorrect": true,
                        "explanation": "Fantástico! A clássica regra do 'Se' eufônico do espanhol."
                    },
                    {
                        "label": "Porque le não existe",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_9",
        "title": "9. Futuro Simple de Indicativo",
        "level": "B1",
        "description": "Forme o futuro simples com o infinitivo completo + terminações acentuadas (-é, -ás, -á, -emos, -éis, -án).",
        "icon": "🔮",
        "stage1_context": {
            "missionTitle": "Módulo 9: Futuro Simple de Indicativo",
            "missionDescription": "Aprenda a expressar promessas, planos formais e previsões futuras com as desinências do Futuro Simples.",
            "audioGuide": "Hablaré español con fluidez. El año que viene viajaré a Madrid y trabajaré allí."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Hablaré / Comeré / Viviré",
                "Portuguese": "Falarei / Comerei / Viverei",
                "Audio": "Hablaré / Comeré / Viviré",
                "timeContext": "1ª pessoa do singular no futuro simples."
            },
            {
                "type": "vocab",
                "Spanish": "Tendré / Habré / Haré",
                "Portuguese": "Terei / Haverei / Farei (Irregulares)",
                "Audio": "Tendré / Habré / Haré",
                "timeContext": "Futuros irregulares de raízes contraídas."
            },
            {
                "type": "vocab",
                "Spanish": "Podré / Saldré / Pondré",
                "Portuguese": "Poderei / Sairei / Porei (Irregulares)",
                "Audio": "Podré / Saldré / Pondré",
                "timeContext": "Outros verbos irregulares de raiz no futuro."
            },
            {
                "type": "vocab",
                "Spanish": "Mañana viajaré",
                "Portuguese": "Amanhã viajarei",
                "Audio": "Mañana viajaré",
                "timeContext": "Plano formal ou promessa para amanhã."
            },
            {
                "type": "vocab",
                "Spanish": "Será un gran día",
                "Portuguese": "Será um grande dia",
                "Audio": "Será un gran día",
                "timeContext": "Previsão positiva sobre o futuro."
            },
            {
                "type": "grammar_pill",
                "title": "Formação Regular Única para -AR, -ER e -IR",
                "rule": "O Futuro Simple forma-se mantendo todo o verbo no Infinitivo e adicionando as terminações: -é, -ás, -á, -emos, -éis, -án. Todas as pessoas levam acento gráfico na desinência, exceto nosotros (-emos).",
                "formula": "Infinitivo + -é, -ás, -á, -emos, -éis, -án",
                "example": "Hablaré, hablarás, hablará, hablaremos, hablaréis, hablarán."
            },
            {
                "type": "grammar_pill",
                "title": "Principais Raízes Irregulares do Futuro Simple",
                "rule": "Alguns verbos perdem a vogal da terminação ou adicionam 'd' na raiz: tener ➔ tendr-, poner ➔ pondr-, salir ➔ saldr-, venir ➔ vendr-, hacer ➔ har-, decir ➔ dir-, poder ➔ podr-, haber ➔ habr-.",
                "formula": "Tener ➔ tendr- | Hacer ➔ har- | Salir ➔ saldr-",
                "example": "Yo tendré un buen trabajo. / Él hará la tarea."
            },
            {
                "type": "grammar_pill",
                "title": "Diferença entre Futuro Próximo (Ir a + Inf) e Futuro Simple",
                "rule": "O Futuro Próximo (voy a viajar) é informal e usado na fala cotidiana. O Futuro Simple (viajaré) é mais formal, usado em promessas, notícias e previsões escritas.",
                "formula": "Fala cotidiana ➔ Ir a + Inf | Discurso Formal/Notícias ➔ Futuro Simple",
                "example": "Voy a comer ahora (fala) vs El presidente asistirá a la cumbre (notícia)."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual é a 1ª pessoa do singular (Yo) no Futuro Simple do verbo 'hablar'?",
                "options": [
                    "hablaré",
                    "hablarás",
                    "hablará",
                    "hablaba"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a raiz irregular do verbo 'hacer' no Futuro Simple?",
                "options": [
                    "har- (ex: Yo haré)",
                    "hacer-",
                    "hacr-",
                    "hiz-"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'El año próximo nos mudaremos a una casa más grande en la playa.'",
                "options": [
                    "No ano que vem nos mudaremos para uma casa maior na praia.",
                    "Mudamo-nos para a praia ano passado.",
                    "Moramos numa casa grande.",
                    "Vendemos a casa da praia."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a conjugação de 'tener' no futuro para a 3ª pessoa do singular (él/ella)?",
                "options": [
                    "tendrá",
                    "tenerá",
                    "tenrá",
                    "tuviera"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'Mañana los alumnos _____ (hacer) el examen final de español.'",
                "options": [
                    "harán",
                    "hacerán",
                    "hicieron",
                    "hagan"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "El año que viene me graduaré en la universidad y haré un máster en España.",
                "words": [
                    "El",
                    "año",
                    "que",
                    "viene",
                    "me",
                    "graduaré",
                    "en",
                    "la",
                    "universidad",
                    "y",
                    "haré",
                    "un",
                    "máster",
                    "en",
                    "España."
                ],
                "translation": "No ano que vem vou me formar na universidade e farei um mestrado na Espanha."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Periodista",
                "npcName": "Periodista",
                "text": "¿Qué proyectos tendrá la compañía el próximo año?",
                "npcMessage": "¿Qué proyectos tendrá la compañía el próximo año?",
                "translation": "Quais projetos a empresa terá no próximo ano?"
            },
            {
                "speaker": "Director",
                "npcName": "Director",
                "text": "Abriremos tres nuevas sedes en América Latina y contrataremos más personal.",
                "npcMessage": "Abriremos tres nuevas sedes en América Latina y contrataremos más personal.",
                "translation": "Abriremos três novas sedes na América Latina e contrataremos mais pessoal."
            },
            {
                "speaker": "Periodista",
                "npcName": "Periodista",
                "text": "¡Excelente noticia! Seguro que será todo un éxito.",
                "npcMessage": "¡Excelente noticia! Seguro que será todo un éxito.",
                "translation": "Excelente notícia! Com certeza será um grande sucesso."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Será un gran día'?",
                "options": [
                    {
                        "label": "Será um grande dia!",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Foi um grande dia!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Quais são as terminações do Futuro Simple para verbos em -AR, -ER e -IR?",
                "options": [
                    {
                        "label": "-é, -ás, -á, -emos, -éis, -án (iguais para todas as três conjugações)",
                        "isCorrect": true,
                        "explanation": "Exato! Desinências universais do futuro."
                    },
                    {
                        "label": "-o, -as, -a, -amos, -áis, -an",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você faz uma promessa solene de estudar todos os dias. O que diz no futuro?",
                "options": [
                    {
                        "label": "Prometo que estudiaré todos los días.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Estudié ayer",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¿Qué harás cuando termines la carrera universitaria?'",
                "options": [
                    {
                        "label": "O que você fará quando terminar a faculdade?",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O que você fez na faculdade?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é o futuro do verbo impessoal 'haber' (há ➔ haverá)?",
                "options": [
                    {
                        "label": "Habrá (ex: Habrá mucha gente en la fiesta)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Forma impessoal do futuro de haber."
                    },
                    {
                        "label": "Haberá",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_10",
        "title": "10. Previsões e Hipóteses sobre o Presente",
        "level": "B1",
        "description": "Utilize o Futuro Simple para expressar probabilidade, suposição e conjectura no momento presente (¿Qué hora será?).",
        "icon": "💭",
        "stage1_context": {
            "missionTitle": "Módulo 10: Previsões e Hipóteses sobre o Presente",
            "missionDescription": "Descubra o uso epistêmico do futuro em espanhol para formular hipóteses sobre o que está acontecendo agora.",
            "audioGuide": "¿Dónde está Juan? Estará en el trabajo. ¿Qué hora será? Serán las tres de la tarde."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "¿Qué hora será?",
                "Portuguese": "Que horas serão? (Dúvida sobre hora atual)",
                "Audio": "¿Qué hora será?",
                "timeContext": "Pergunta conjectural sobre a hora no presente."
            },
            {
                "type": "vocab",
                "Spanish": "Estará en casa",
                "Portuguese": "Deve estar em casa / Provavelmente está em casa",
                "Audio": "Estará en casa",
                "timeContext": "Suposição sobre a localização atual de alguém."
            },
            {
                "type": "vocab",
                "Spanish": "Tendrá unos treinta años",
                "Portuguese": "Deve ter cerca de trinta anos",
                "Audio": "Tendrá unos treinta años",
                "timeContext": "Estimativa de idade sem certeza."
            },
            {
                "type": "vocab",
                "Spanish": "Estará durmiendo",
                "Portuguese": "Deve estar dormindo agora",
                "Audio": "Estará durmiendo",
                "timeContext": "Hipótese de ação contínua no presente."
            },
            {
                "type": "vocab",
                "Spanish": "¿Quién será?",
                "Portuguese": "Quem será? (Alguém bate à porta)",
                "Audio": "¿Quién será?",
                "timeContext": "Dúvida sobre a identidade atual de alguém."
            },
            {
                "type": "grammar_pill",
                "title": "O Futuro Epistêmico (Probabilidade no Presente)",
                "rule": "Em espanhol, o Futuro Simple é frequentemente usado não para falar do futuro, mas para expressar uma suposição ou hipótese sobre uma situação atual incerta (¿Dónde está la llave? Estará en la cocina = Acho que está na cozinha).",
                "formula": "Futuro Simple = Suposição sobre o Presente",
                "example": "Juan no está aquí, estará en la biblioteca."
            },
            {
                "type": "grammar_pill",
                "title": "Perguntas Conjecturais com Futuro Simple",
                "rule": "Ao fazer perguntas reflexivas sobre algo incerto no presente, usa-se o futuro: ¿Qué hora será? (Que horas serão?), ¿Quién será a estas horas? (Quem será a estas horas?).",
                "formula": "¿Qué/Quién/Dónde + Futuro Simple?",
                "example": "¿Dónde estarán mis gafas?"
            },
            {
                "type": "grammar_pill",
                "title": "Estimativa de Idades e Quantidades com Futuro",
                "rule": "Para estimar a idade de alguém ou uma quantidade aproximada no presente sem ter certeza absoluta, usa-se o futuro: Tendrá unos cuarenta años (Ele deve ter uns quarenta anos), Costará unos cien euros (Deve custar uns cem euros).",
                "formula": "Tendrá / Costará + unos + [número]",
                "example": "Esa chaqueta costará unos cincuenta euros."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como expressar a hipótese no presente de que María deve estar na cozinha agora em espanhol?",
                "options": [
                    "María estará en la cocina",
                    "María está en la cocina (certeza)",
                    "María estuvo en la cocina",
                    "María vaya a la cocina"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual pergunta expressa dúvida/curiosidade conjectural sobre quem está batendo à porta agora?",
                "options": [
                    "¿Quién será?",
                    "¿Quién es?",
                    "¿Quién fue?",
                    "¿Quién era?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Ese hombre tendrá unos cincuenta años, más o menos.'",
                "options": [
                    "Esse homem deve ter uns cinquenta anos, mais ou menos.",
                    "Esse homem fará cinquenta anos no mês que vem.",
                    "O homem tem cinquenta filhos.",
                    "Esse homem nasceu há cinquenta anos."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a interpretação da frase '¿Por qué no responde? Estará durmiendo'?",
                "options": [
                    "Indica uma suposição/hipótese provável sobre a razão presente dele não atender",
                    "Indica que ele vai dormir amanhã",
                    "Indica que ele dormiu ontem",
                    "Indica uma ordem para dormir"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a estimativa de preço incerto: 'Ese reloj _____ (costar) unos doscientos euros.'",
                "options": [
                    "costará (Futuro de hipótese)",
                    "costó",
                    "cuesta seguro",
                    "costaría"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¿Dónde está María? Estará en la biblioteca estudiando para el examen de mañana.",
                "words": [
                    "¿Dónde",
                    "está",
                    "María?",
                    "Estará",
                    "en",
                    "la",
                    "biblioteca",
                    "estudiando",
                    "para",
                    "el",
                    "examen",
                    "de",
                    "mañana."
                ],
                "translation": "Onde está María? Deve estar na biblioteca estudando para a prova de amanhã."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Carmen",
                "npcName": "Carmen",
                "text": "¿Sabes qué hora es? No llevo reloj.",
                "npcMessage": "¿Sabes qué hora es? No llevo reloj.",
                "translation": "Você sabe que horas são? Não estou com relógio."
            },
            {
                "speaker": "Raúl",
                "npcName": "Raúl",
                "text": "No sé exactamente. Serán las cuatro de la tarde, más o menos.",
                "npcMessage": "No sé exactamente. Serán las cuatro de la tarde, más o menos.",
                "translation": "Não sei exatamente. Devem ser quatro da tarde, mais ou menos."
            },
            {
                "speaker": "Carmen",
                "npcName": "Carmen",
                "text": "¡Madre mía! Entonces el tren estará a punto de salir.",
                "npcMessage": "¡Madre mía! Entonces el tren estará a punto de salir.",
                "translation": "Nossa! Então o trem deve estar prestes a sair."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa '¿Qué hora será?'?",
                "options": [
                    {
                        "label": "Que horas serão? / Que horas devem ser agora?",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "A que horas nos vemos amanhã?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que usamos o Futuro Simple na frase 'Estará en su despacho' se a pessoa se refere ao momento presente?",
                "options": [
                    {
                        "label": "Porque em espanhol o futuro expressa hipótese e probabilidade sobre o presente",
                        "isCorrect": true,
                        "explanation": "Exato! Função epistêmica do futuro."
                    },
                    {
                        "label": "Porque é um erro de português",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você vê um carro muito elegante e quer chutar o valor aproximado no presente. O que diz?",
                "options": [
                    {
                        "label": "Ese coche costará unos cincuenta mil euros.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Compré ese coche ayer",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¿Dónde estarán mis llaves? No las encuentro por ninguna parte.'",
                "options": [
                    {
                        "label": "Onde estarão / devem estar minhas chaves? Não as encontro em lugar nenhum.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Perdi minhas chaves ano passado.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'Juan está en casa' e 'Juan estará en casa'?",
                "options": [
                    {
                        "label": "'Está' = Certeza comprovada; 'Estará' = Hipótese/suposição provável do falante",
                        "isCorrect": true,
                        "explanation": "Fantástico! Nuance pragmática essencial do nível B1."
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
        "id": "es_b1_mod_11",
        "title": "11. O Modo Condicional Simple",
        "level": "B1",
        "description": "Forme desejos e cortesias com hablaría, me gustaría, debería, tendría.",
        "icon": "💭",
        "stage1_context": {
            "missionTitle": "Módulo 11: O Modo Condicional Simple",
            "missionDescription": "Aprenda a formação do Condicional Simples para expressar cortesia, desejos hipotéticos e conselhos suaves.",
            "audioGuide": "Me gustaría pedir un café. ¿Podrías ayudarme? Yo en tu lugar descansaría más."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Me gustaría...",
                "Portuguese": "Eu gostaria de...",
                "Audio": "Me gustaría...",
                "timeContext": "Expressão cortês de desejo."
            },
            {
                "type": "vocab",
                "Spanish": "¿Podrías...?",
                "Portuguese": "Você poderia...?",
                "Audio": "¿Podrías...?",
                "timeContext": "Solicitação cortês de ajuda ou serviço."
            },
            {
                "type": "vocab",
                "Spanish": "Deberías + Infinitivo",
                "Portuguese": "Você deveria...",
                "Audio": "Deberías",
                "timeContext": "Conselho suave ou sugestão amigável."
            },
            {
                "type": "vocab",
                "Spanish": "Tendría / Haría / Saldría",
                "Portuguese": "Teria / Faria / Sairia (Irregulares)",
                "Audio": "Tendría / Haría / Saldría",
                "timeContext": "Formas de condicional com raízes irregulares."
            },
            {
                "type": "vocab",
                "Spanish": "Sería genial",
                "Portuguese": "Seria ótimo",
                "Audio": "Sería genial",
                "timeContext": "Avaliação hipotética positiva."
            },
            {
                "type": "grammar_pill",
                "title": "Formação Regular do Condicional Simple",
                "rule": "O Condicional Simple forma-se mantendo todo o infinitivo e adicionando as desinências: -ía, -ías, -ía, -íamos, -íais, -ían. Todas as pessoas levam acento gráfico no 'í'.",
                "formula": "Infinitivo + -ía, -ías, -ía, -íamos, -íais, -ían",
                "example": "Hablaría, comerías, viviría, trabajaríamos."
            },
            {
                "type": "grammar_pill",
                "title": "Raízes Irregulares do Condicional Simple",
                "rule": "As raízes irregulares do Condicional são EXATAMENTE AS MESMAS do Futuro Simple: tener ➔ tendr-, hacer ➔ har-, poner ➔ pondr-, salir ➔ saldr-, decir ➔ dir-, poder ➔ podr-, haber ➔ habr-.",
                "formula": "Tener ➔ tendr- | Hacer ➔ har- | Poder ➔ podr-",
                "example": "Yo tendría tiempo. / Él haría el trabajo."
            },
            {
                "type": "grammar_pill",
                "title": "Usos de Cortesia e Desejo Hipotético",
                "rule": "Usa-se o condicional para atenuação polida (¿Podrías abrir la ventana?) e para expressar vontades hipotéticas no presente (Me gustaría viajar a Japón).",
                "formula": "Cortesia: Podrías/Querrías | Desejo: Me gustaría",
                "example": "¿Podría darme una copa de agua, por favor?"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual é a 1ª pessoa do singular (Yo) no Condicional Simple do verbo 'hablar'?",
                "options": [
                    "hablaría",
                    "hablaba",
                    "hablaré",
                    "hable"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual é a forma correta do verbo 'hacer' para 'tú' no Condicional Simple?",
                "options": [
                    "harías",
                    "hacerías",
                    "hacías",
                    "hicieras"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: '¿Podrías decirme dónde está la estación de metro más cercana?'",
                "options": [
                    "Você poderia dizer-me onde fica a estação de metrô mais próxima?",
                    "Onde fica a estação de metrô?",
                    "Você foi à estação de metrô ontem?",
                    "Não gosto de pegar o metrô."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual frase expressa um conselho suave com o verbo 'deber' no condicional?",
                "options": [
                    "Deberías descansar más este fin de semana.",
                    "Debes trabajar hoy.",
                    "Tuviste que descansar.",
                    "No debiste ir."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'A mi hermano le _____ (gustar) vivir en España algún día.'",
                "options": [
                    "gustaría",
                    "gustaba",
                    "gustará",
                    "guste"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "¿Podrías traerme un vaso de agua, por favor? Me gustaría tomarlo ahora.",
                "words": [
                    "¿Podrías",
                    "traerme",
                    "un",
                    "vaso",
                    "de",
                    "agua,",
                    "por",
                    "favor?",
                    "Me",
                    "gustaría",
                    "tomarlo",
                    "ahora."
                ],
                "translation": "Você poderia trazer-me um copo de água, por favor? Eu gostaria de tomá-lo agora."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Camarero",
                "npcName": "Camarero",
                "text": "Buenas noches. ¿Qué les gustaría tomar para cenar?",
                "npcMessage": "Buenas noches. ¿Qué les gustaría tomar para cenar?",
                "translation": "Boas noites. O que os senhores gostariam de pedir para jantar?"
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "Hola. A mí me gustaría una paella de mariscos y ¿podría traernos una copa de vino?",
                "npcMessage": "Hola. A mí me gustaría una paella de mariscos y ¿podría traernos una copa de vino?",
                "translation": "Olá. Eu gostaria de uma paella de frutos do mar e o senhor poderia trazer-nos uma taça de vinho?"
            },
            {
                "speaker": "Camarero",
                "npcName": "Camarero",
                "text": "¡Por supuesto! Se lo traigo enseguida.",
                "npcMessage": "¡Por supuesto! Se lo traigo enseguida.",
                "translation": "Com certeza! Trago-lho em seguida."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Me gustaría...'?",
                "options": [
                    {
                        "label": "Eu gostaria de...",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Eu gosto de...",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Quais são as raízes irregulares dos verbos tener, hacer e poder no Condicional?",
                "options": [
                    {
                        "label": "Tendr-, har-, podr- (idênticas às do futuro simple)",
                        "isCorrect": true,
                        "explanation": "Exato! Raízes compartilhadas entre futuro e condicional."
                    },
                    {
                        "label": "Ten-, hac-, pod-",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você deseja pedir ajuda a um desconhecido na rua com polidez extrema. O que diz?",
                "options": [
                    {
                        "label": "¿Podría ayudarme un momento, por favor?",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡Ayúdame ya!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Yo en tu lugar no compraría ese coche tan caro.'",
                "options": [
                    {
                        "label": "Eu no seu lugar não compraria esse carro tão caro.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Comprei um carro muito caro ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a função da desinência acentuada '-ía' no Condicional Simple?",
                "options": [
                    {
                        "label": "É a terminação única e obrigatória para todas as três conjugações (-ar, -er, -ir)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Padronização absoluta do condicional."
                    },
                    {
                        "label": "Apenas para verbos -ar",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_12",
        "title": "12. Dar Conselhos Hipotéticos",
        "level": "B1",
        "description": "Dê recomendações no condicional com Yo en tu lugar iría al médico e Yo que tú...",
        "icon": "🧑‍⚕️",
        "stage1_context": {
            "missionTitle": "Módulo 12: Dar Conselhos Hipotéticos",
            "missionDescription": "Aprenda a colocar-se no lugar do interlocutor para dar conselhos empáticos e sugestões hipotéticas.",
            "audioGuide": "Yo en tu lugar iría al médico inmediatamente. Yo que tú no hablaría con él."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Yo en tu lugar...",
                "Portuguese": "Eu no seu lugar...",
                "Audio": "Yo en tu lugar...",
                "timeContext": "Expressão de empatia para conselhos."
            },
            {
                "type": "vocab",
                "Spanish": "Yo que tú...",
                "Portuguese": "Se eu fosse você... / Eu se fosse você...",
                "Audio": "Yo que tú...",
                "timeContext": "Fórmula coloquial de conselho hipotético."
            },
            {
                "type": "vocab",
                "Spanish": "Si fuera tú...",
                "Portuguese": "Se eu fosse você...",
                "Audio": "Si fuera tú...",
                "timeContext": "Estrutura condicional com subjuntivo."
            },
            {
                "type": "vocab",
                "Spanish": "Yo hablaría con él",
                "Portuguese": "Eu falaria com ele",
                "Audio": "Yo hablaría con él",
                "timeContext": "Aplicação do condicional em conselhos."
            },
            {
                "type": "vocab",
                "Spanish": "Yo no compraría eso",
                "Portuguese": "Eu não compraria isso",
                "Audio": "Yo no compraría eso",
                "timeContext": "Recomendação negativa no condicional."
            },
            {
                "type": "grammar_pill",
                "title": "A Fórmula Empática 'Yo en tu lugar + Condicional'",
                "rule": "Para aconselhar alguém de forma suave colocando-se na situação da pessoa, usa-se a locução 'Yo en tu lugar + Condicional Simple' (Yo en tu lugar aceptaría el trabajo).",
                "formula": "Yo en tu lugar + Condicional Simple",
                "example": "Yo en tu lugar descansaría este fin de semana."
            },
            {
                "type": "grammar_pill",
                "title": "A Expressão Idiomática 'Yo que tú + Condicional'",
                "rule": "Na fala cotidiana da Espanha e América Latina, a expressão fixada 'Yo que tú' equivale a 'se eu fosse você' e é seguida de condicional (Yo que tú no iría allí).",
                "formula": "Yo que tú + Condicional Simple",
                "example": "Yo que tú cambiaría de coche pronto."
            },
            {
                "type": "grammar_pill",
                "title": "A Estrutura Se-Conditional 'Si fuera tú + Condicional'",
                "rule": "Outra fórmula equivalente muito comum que introduz o Imperfeito do Subjuntivo do verbo ser (Si fuera tú) seguido do Condicional (Si fuera tú, hablaría con el profesor).",
                "formula": "Si fuera tú + Condicional Simple",
                "example": "Si fuera tú, iría a hablar con el director."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dar um conselho a um amigo dizendo 'Se eu fosse você...' de forma muito comum na fala cotidiana?",
                "options": [
                    "Yo que tú iría al médico",
                    "Yo que ti iría al médico",
                    "Yo si tú iría",
                    "Yo tú iría"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual tempo verbal DEVE acompanhar a locução 'Yo en tu lugar...' ao dar um conselho?",
                "options": [
                    "Condicional Simple (ex: Yo en tu lugar aceptaría)",
                    "Presente de Subjuntivo",
                    "Pretérito Indefinido",
                    "Imperativo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Yo en tu lugar hablaría con el jefe y le explicaría el problema.'",
                "options": [
                    "Eu no seu lugar falaria com o chefe e explicaria-lhe o problema.",
                    "Falei com o chefe ontem sobre o problema.",
                    "O chefe quer falar com você.",
                    "Não fale com o chefe."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a estrutura equivalente a 'Yo que tú' usando o subjuntivo do verbo ser?",
                "options": [
                    "Si fuera tú... (ex: Si fuera tú, iría)",
                    "Si soy tú",
                    "Si era tú",
                    "Si fuera ti"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete o conselho: 'Yo que tú no _____ (comprar) esa chaqueta tan cara.'",
                "options": [
                    "compraría",
                    "comprarás",
                    "compraste",
                    "compro"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Yo en tu lugar hablaría con el jefe y le explicaría la situación con calma.",
                "words": [
                    "Yo",
                    "en",
                    "tu",
                    "lugar",
                    "hablaría",
                    "con",
                    "el",
                    "jefe",
                    "y",
                    "le",
                    "explicaría",
                    "la",
                    "situación",
                    "con",
                    "calma."
                ],
                "translation": "Eu no seu lugar falaria com o chefe e explicaria-lhe a situação com calma."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "Tengo mucho trabajo acumulado y no sé si aceptar este nuevo proyecto.",
                "npcMessage": "Tengo mucho trabajo acumulado y no sé si aceptar este nuevo proyecto.",
                "translation": "Tenho muito trabalho acumulado e não sei se aceito este novo projeto."
            },
            {
                "speaker": "Diego",
                "npcName": "Diego",
                "text": "¡Uf! Yo en tu lugar descansaría un poco antes de tomar más responsabilidad.",
                "npcMessage": "¡Uf! Yo en tu lugar descansaría un poco antes de tomar más responsabilidad.",
                "translation": "Uf! Eu no seu lugar descansaria um pouco antes de assumir mais responsabilidade."
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "Tienes razón. Yo que tú haría lo mismo. Gracias por el consejo.",
                "npcMessage": "Tienes razón. Yo que tú haría lo mismo. Gracias por el consejo.",
                "translation": "Você tem razão. Se eu fosse você faria o mesmo. Obrigado pelo conselho."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Yo que tú...'?",
                "options": [
                    {
                        "label": "Se eu fosse você... / Eu se fosse você...",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Eu sei que você...",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que usamos o Condicional Simple em 'Yo en tu lugar iría al médico'?",
                "options": [
                    {
                        "label": "Porque expressa uma ação hipotética que o falante realizaria se estivesse naquela circunstância",
                        "isCorrect": true,
                        "explanation": "Exato! Função hipotética e empática do condicional."
                    },
                    {
                        "label": "Porque é uma certeza do passado",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Seu amigo quer vender o carro por um preço muito baixo. O que você aconselha?",
                "options": [
                    {
                        "label": "Yo que tú no lo vendería por tan poco dinero.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Vendí mi coche ayer",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Si fuera tú, pediría una segunda opinión médica.'",
                "options": [
                    {
                        "label": "Se eu fosse você, pediria uma segunda opinião médica.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Pedi uma opinião médica semana passada.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual das seguintes frases de conselho está INCORRETA gramaticalmente?",
                "options": [
                    {
                        "label": "Yo que tú fueras al médico (Incorreto: deve ser 'iría')",
                        "isCorrect": true,
                        "explanation": "Fantástico! 'Yo que tú' exige Condicional, não subjuntivo direto."
                    },
                    {
                        "label": "Yo que tú iría al médico",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_13",
        "title": "13. Estilo Indirecto (Relatar fala dos outros)",
        "level": "B1",
        "description": "Relate discursos e mensagens com Me dijo que viniera / que estaba cansado.",
        "icon": "💬",
        "stage1_context": {
            "missionTitle": "Módulo 13: Estilo Indirecto (Relatar fala dos outros)",
            "missionDescription": "Aprenda a transmitir a outras pessoas o que alguém disse, pediu ou ordenou no passado.",
            "audioGuide": "Juan me dijo: 'Tengo hambre' ➔ Juan me dijo que tenía hambre. Me pidió que le ayudara."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Me dijo que...",
                "Portuguese": "Disse-me que...",
                "Audio": "Me dijo que...",
                "timeContext": "Relato de declaração no passado."
            },
            {
                "type": "vocab",
                "Spanish": "Me pidió que...",
                "Portuguese": "Pediu-me que...",
                "Audio": "Me pidió que...",
                "timeContext": "Relato de pedido ou favor no passado."
            },
            {
                "type": "vocab",
                "Spanish": "Preguntó si...",
                "Portuguese": "Perguntou se...",
                "Audio": "Preguntó si...",
                "timeContext": "Relato de pergunta total (sim/não)."
            },
            {
                "type": "vocab",
                "Spanish": "Comentó que...",
                "Portuguese": "Comentou que...",
                "Audio": "Comentó que...",
                "timeContext": "Relato de comentário factual."
            },
            {
                "type": "vocab",
                "Spanish": "Me recomendó que...",
                "Portuguese": "Recomendou-me que...",
                "Audio": "Me recomendó que...",
                "timeContext": "Relato de conselho recebido."
            },
            {
                "type": "grammar_pill",
                "title": "Transposição de Informações do Presente ao Imperfeito",
                "rule": "Quando se relata uma afirmação dita no passado, o Presente do Indicativo transforma-se em Pretérito Imperfeito ('Tengo tiempo' ➔ Me dijo que tenía tiempo).",
                "formula": "Discurso Direto (Presente) ➔ Discurso Indireto (Imperfeito)",
                "example": "Juan: 'Estoy cansado' ➔ Juan dijo que estaba cansado."
            },
            {
                "type": "grammar_pill",
                "title": "Transposição de Comandos e Ordens (Imperativo ➔ Subjuntivo)",
                "rule": "Quando se relata uma ordem ou pedido do passado, o Imperativo/Subjuntivo transforma-se em Pretérito Imperfeito de Subjuntivo ('Ven aquí' ➔ Me dijo que viniera/viniese).",
                "formula": "Imperativo / Subjuntivo ➔ Pretérito Imperfecto de Subjuntivo",
                "example": "Mamá: '¡Lava los platos!' ➔ Mamá me dijo que lavara los platos."
            },
            {
                "type": "grammar_pill",
                "title": "Transposição de Perguntas com 'Si' ou Pronomes",
                "rule": "Perguntas totais (de sim/não) relatam-se com 'preguntó si' ('¿Tienes coche?' ➔ Me preguntó si tenía coche). Perguntas parciais mantêm o pronome interrogativo ('¿Dónde vives?' ➔ Me preguntó dónde vivía).",
                "formula": "Pergunta Sim/Não ➔ Preguntó SI | Pergunta com Pronome ➔ Preguntó [Dónde/Qué...]",
                "example": "¿Dónde vas? ➔ Me preguntó dónde iba."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como transmitir no estilo indireto a fala original de Juan: 'Tengo mucho trabajo'?",
                "options": [
                    "Juan dijo que tenía mucho trabajo",
                    "Juan dijo que tengo mucho trabajo",
                    "Juan dijo que tendrá mucho trabajo",
                    "Juan dijo tener trabajo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como relatar a ordem da professora: '¡Abrid el libro en la página 20!'?",
                "options": [
                    "La profesora nos dijo que abriéramos el libro en la página 20",
                    "La profesora dijo abrid el libro",
                    "La profesora dijo que abrimos",
                    "La profesora dijo abrir"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'María me preguntó si quería ir al cine con ella este fin de semana.'",
                "options": [
                    "María perguntou-me se eu queria ir ao cinema com ela este fim de semana.",
                    "María vai ao cinema comigo.",
                    "Perguntei a María se ela queria ir ao cinema.",
                    "María não gosta de cinema."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Como se relata a pergunta '¿Dónde vives?' no passado?",
                "options": [
                    "Me preguntó dónde vivía",
                    "Me preguntó si vivía",
                    "Me preguntó dónde vivo",
                    "Me preguntó vivir"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete o relato do conselho do médico ('Descansa'): 'El médico me recomendó que _____ (descansar) unos días.'",
                "options": [
                    "descansara / descansase (Imperfeito de Subjuntivo)",
                    "descanso",
                    "descanses",
                    "descansar"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "María me dijo que no tenía tiempo hoy y me pidió que le enviara el informe.",
                "words": [
                    "María",
                    "me",
                    "dijo",
                    "que",
                    "no",
                    "tenía",
                    "tiempo",
                    "hoy",
                    "y",
                    "me",
                    "pidió",
                    "que",
                    "le",
                    "enviara",
                    "el",
                    "informe."
                ],
                "translation": "María disse-me que não tinha tempo hoje e pediu-me que lhe enviasse o relatório."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¿Qué te dijo el jefe en la reunión esta mañana, Lucía?",
                "npcMessage": "¿Qué te dijo el jefe en la reunión esta mañana, Lucía?",
                "translation": "O que o chefe te disse na reunião esta manhã, Lucía?"
            },
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "Me dijo que el proyecto marchaba bien y me pidió que terminara el informe antes del viernes.",
                "npcMessage": "Me dijo que el proyecto marchaba bien y me pidió que terminara el informe antes del viernes.",
                "translation": "Disse-me que o projeto ia bem e pediu-me que terminasse o relatório antes de sexta."
            },
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¡Qué bien! También me preguntó si tú tenías tiempo para ayudarme.",
                "npcMessage": "¡Qué bien! También me preguntó si tú tenías tiempo para ayudarme.",
                "translation": "Que bom! Também me perguntou se você tinha tempo para me ajudar."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Me pidió que...'?",
                "options": [
                    {
                        "label": "Pediu-me que...",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Disse-me que...",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que o Presente do Indicativo 'estoy cansado' vira Imperfeito 'estaba cansado' no estilo indireto?",
                "options": [
                    {
                        "label": "Porque ao relatar uma fala do passado, o tempo verbal recua um grau para o imperfeito",
                        "isCorrect": true,
                        "explanation": "Exato! Regra da concordância de tempos verbais."
                    },
                    {
                        "label": "Porque é futuro",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Alguém perguntou se você sabia falar espanhol. Como relata essa pergunta?",
                "options": [
                    {
                        "label": "Me preguntó si sabía hablar español.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Dijo que hablo español",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'El policía nos ordenó que bajáramos del coche inmediatamente.'",
                "options": [
                    {
                        "label": "O policial ordenou-nos que descêssemos do carro imediatamente.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O policial subiu no carro.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Como se transforma a pergunta '¿A qué hora empieza la película?' no estilo indireto?",
                "options": [
                    {
                        "label": "Me preguntó a qué hora empezaba la película.",
                        "isCorrect": true,
                        "explanation": "Fantástico! Mantém o pronome interrogativo a qué hora + imperfeito."
                    },
                    {
                        "label": "Me preguntó si empieza la película",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_14",
        "title": "14. Conectores de Argumentação",
        "level": "B1",
        "description": "Conecte ideias complexas com Sin embargo, por lo tanto, además, aunque, en cambio, por eso.",
        "icon": "🧩",
        "stage1_context": {
            "missionTitle": "Módulo 14: Conectores de Argumentação",
            "missionDescription": "Melhore a coesão do seu discurso falado e escrito utilizando conectores formais de oposição, causa e adição.",
            "audioGuide": "Estudié mucho; sin embargo, el examen fue difícil. Por lo tanto, debo repasar más."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Sin embargo",
                "Portuguese": "No entanto / Porém / Todavia",
                "Audio": "Sin embargo",
                "timeContext": "Conector de oposição e ressalva formal."
            },
            {
                "type": "vocab",
                "Spanish": "Por lo tanto",
                "Portuguese": "Portanto / Por conseguinte",
                "Audio": "Por lo tanto",
                "timeContext": "Conector de conclusão e consequência."
            },
            {
                "type": "vocab",
                "Spanish": "Además",
                "Portuguese": "Além disso",
                "Audio": "Además",
                "timeContext": "Conector aditivo para somar informações."
            },
            {
                "type": "vocab",
                "Spanish": "En cambio",
                "Portuguese": "Por outro lado / Em contrapartida",
                "Audio": "En cambio",
                "timeContext": "Conector para contrastar dois fatos/sujeitos."
            },
            {
                "type": "vocab",
                "Spanish": "Por eso",
                "Portuguese": "Por isso",
                "Audio": "Por eso",
                "timeContext": "Conector de causa e efeito cotidiano."
            },
            {
                "type": "grammar_pill",
                "title": "Conectores Adversativos de Oposição (Sin embargo vs. En cambio)",
                "rule": "Sin embargo introduz um contraste que atenua ou contrapõe a afirmação anterior (Trabajó mucho; sin embargo, no terminó). En cambio contrapõe dois sujeitos ou fatos opostos (Juan prefiere el mar; en cambio, Pedro prefiere la montaña).",
                "formula": "Sin embargo ➔ Ressalva | En cambio ➔ Contraste entre 2 elementos",
                "example": "El piso es pequeño; sin embargo, es muy luminoso."
            },
            {
                "type": "grammar_pill",
                "title": "Conectores Conclusivos de Causa e Efeito (Por lo tanto vs. Por eso)",
                "rule": "Por eso é mais comum na linguagem falada informal (Tenía hambre, por eso comí). Por lo tanto é mais formal e usado em artigos/ensaios (El informe está incompleto; por lo tanto, se aplaza la reunión).",
                "formula": "Informal: Por eso | Formal: Por lo tanto",
                "example": "Llegó tarde y por eso perdió el autobús."
            },
            {
                "type": "grammar_pill",
                "title": "Conectores Aditivos (Además / Asimismo)",
                "rule": "Para somar novos argumentos com coesão, usa-se 'Además + frase' (El hotel es céntrico; además, ofrece desayuno gratuito).",
                "formula": "Afirmação + Además + novo argumento",
                "example": "Es un profesional excelente; además, habla cuatro idiomas."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual conector de oposição formal significa 'no entanto / porém' em espanhol?",
                "options": [
                    "Sin embargo",
                    "Por lo tanto",
                    "Además",
                    "Por eso"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como dizer 'além disso' para adicionar um argumento positivo em espanhol?",
                "options": [
                    "Además",
                    "En cambio",
                    "Sin embargo",
                    "Por causa"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Estudiamos duro para la oposición; por lo tanto, esperamos conseguir la plaza.'",
                "options": [
                    "Estudamos duro para o concurso; portanto, esperamos conseguir a vaga.",
                    "Não estudamos para o concurso.",
                    "Estudamos porém reprovamos.",
                    "O concurso foi cancelado."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual conector expressa contraste entre a preferência de duas pessoas diferentes?",
                "options": [
                    "En cambio (ex: A mí me gusta el té; en cambio, a él le gusta el café)",
                    "Por eso",
                    "Por lo tanto",
                    "Además"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a frase de causa e efeito cotidiana: 'Estaba lloviendo mucho y _____ me quedé en casa.'",
                "options": [
                    "por eso",
                    "sin embargo",
                    "además",
                    "en cambio"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "El proyecto es ambicioso; sin embargo, tenemos el presupuesto necesario y además contamos con expertos.",
                "words": [
                    "El",
                    "proyecto",
                    "es",
                    "ambicioso;",
                    "sin",
                    "embargo,",
                    "tenemos",
                    "el",
                    "presupuesto",
                    "necesario",
                    "y",
                    "además",
                    "contamos",
                    "con",
                    "expertos."
                ],
                "translation": "O projeto é ambicioso; no entanto, temos o orçamento necessário e além disso contamos com especialistas."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Andrés",
                "npcName": "Andrés",
                "text": "El piso que vimos ayer es bastante caro, ¿no crees?",
                "npcMessage": "El piso que vimos ayer es bastante caro, ¿no crees?",
                "translation": "O apartamento que vimos ontem é bastante caro, não acha?"
            },
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "Sí, es verdad; sin embargo, está en el centro y además está totalmente reformado.",
                "npcMessage": "Sí, es verdad; sin embargo, está en el centro y además está totalmente reformado.",
                "translation": "Sim, é verdade; no entanto, fica no centro e além disso está totalmente reformado."
            },
            {
                "speaker": "Andrés",
                "npcName": "Andrés",
                "text": "Por lo tanto, vale la pena hacer una oferta por él.",
                "npcMessage": "Por lo tanto, vale la pena hacer una oferta por él.",
                "translation": "Portanto, vale a pena fazer uma oferta por ele."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Sin embargo'?",
                "options": [
                    {
                        "label": "No entanto / Porém / Todavia",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Por conseguinte",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual a diferença de registro entre 'Por eso' e 'Por lo tanto'?",
                "options": [
                    {
                        "label": "'Por eso' é informal/cotidiano; 'Por lo tanto' é formal e escrito",
                        "isCorrect": true,
                        "explanation": "Exato! Nuance de registro formal."
                    },
                    {
                        "label": "São opostos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer acrescentar uma vantagem adicional em um relatório profissional. O que usa?",
                "options": [
                    {
                        "label": "Además, el servicio ofrece garantía de dos años.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Sin embargo no hay garantía",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'No teníamos reservas; sin embargo, el camarero nos consiguió una mesa.'",
                "options": [
                    {
                        "label": "Não tínhamos reservas; no entanto, o garçom conseguiu-nos uma mesa.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Tínhamos reservas para o jantar.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual pontuação é recomendável antes de 'sin embargo' e 'por lo tanto' em frases longas?",
                "options": [
                    {
                        "label": "Ponto e vírgula (;) ou ponto final (.) seguido de vírgula",
                        "isCorrect": true,
                        "explanation": "Fantástico! Norma de pontuação e coesão da língua espanhola."
                    },
                    {
                        "label": "Nenhuma pontuação",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_15",
        "title": "15. Aunque + Indicativo vs. Subjuntivo",
        "level": "B1",
        "description": "Contraste o uso de aunque com fato real (indicativo) vs hipótese / irrelevância (subjuntivo).",
        "icon": "⚖️",
        "stage1_context": {
            "missionTitle": "Módulo 15: Aunque + Indicativo vs. Subjuntivo",
            "missionDescription": "Aprenda a sutil diferença entre informar um obstáculo real (Indicativo) e desconsiderar uma hipótese (Subjuntivo).",
            "audioGuide": "Aunque llueve, voy al parque (Fato real). Aunque llueva, iré al parque (Não importa se chover)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Aunque hace frío (Indicativo)",
                "Portuguese": "Embora faça frio (Sei que faz frio agora)",
                "Audio": "Aunque hace frío",
                "timeContext": "Obstáculo real confirmado pelo falante."
            },
            {
                "type": "vocab",
                "Spanish": "Aunque haga frío (Subjuntivo)",
                "Portuguese": "Mesmo que faça frio (Não me importa se fizer)",
                "Audio": "Aunque haga frío",
                "timeContext": "Obstáculo hipotético ou irrelevante."
            },
            {
                "type": "vocab",
                "Spanish": "Aunque es difícil",
                "Portuguese": "Embora seja difícil (Reconheço que é difícil)",
                "Audio": "Aunque es difícil",
                "timeContext": "Fato real reconhecido."
            },
            {
                "type": "vocab",
                "Spanish": "Aunque sea difícil",
                "Portuguese": "Mesmo que seja difícil (Ainda assim farei)",
                "Audio": "Aunque sea difícil",
                "timeContext": "Declaração de determinação hipotética."
            },
            {
                "type": "vocab",
                "Spanish": "A pesar de que",
                "Portuguese": "Apesar de que",
                "Audio": "A pesar de que",
                "timeContext": "Locução concessiva equivalente."
            },
            {
                "type": "grammar_pill",
                "title": "Aunque + Indicativo (Fato Real Conhecido)",
                "rule": "Quando o falante afirma ou reconhece um obstáculo real que ele confirma como verdadeiro no momento, usa-se o Indicativo (Aunque llueve, voy al cine = Sei que está chovendo agora e vou assim mesmo).",
                "formula": "Aunque + Indicativo ➔ Fato Real/Informação conhecida",
                "example": "Aunque hace calor, llevo chaqueta."
            },
            {
                "type": "grammar_pill",
                "title": "Aunque + Subjuntivo (Hipótese ou Obstáculo Irrelevante)",
                "rule": "Quando a informação é uma hipótese futura ou o falante declara que o obstáculo é totalmente irrelevante para sua decisão, usa-se o Subjuntivo (Aunque llueva, iré al cine = Não importa se chover ou não, eu irei).",
                "formula": "Aunque + Subjuntivo ➔ Hipótese/Indiferença ao obstáculo",
                "example": "Aunque me digan que no, lo intentaré."
            },
            {
                "type": "grammar_pill",
                "title": "A Locução 'A pesar de que'",
                "rule": "A locução concessiva A pesar de que segue a mesma regra: com Indicativo para fatos conhecidos (A pesar de que trabaja mucho, gana poco) e com Subjuntivo para hipóteses (A pesar de que trabaje mucho, no lo conseguirá).",
                "formula": "A pesar de que + Indicativo / Subjuntivo",
                "example": "A pesar de que sea tarde, iré a la reunión."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual frase indica que a pessoa SABE que está chovendo agora e vai sair assim mesmo?",
                "options": [
                    "Aunque llueve, saldré a caminar (Indicativo)",
                    "Aunque llueva, saldré a caminar (Subjuntivo)",
                    "Aunque lloviera",
                    "Aunque llovía"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual frase significa 'Não importa se fizer frio amanhã, eu irei à praia'?",
                "options": [
                    "Aunque haga frío mañana, iré a la playa (Subjuntivo)",
                    "Aunque hace frío mañana, iré",
                    "Aunque hizo frío",
                    "Aunque hacer frío"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Aunque sea difícil conseguir las entradas, lo voy a intentar.'",
                "options": [
                    "Mesmo que seja difícil conseguir os ingressos, vou tentar.",
                    "Sei que foi fácil conseguir os ingressos.",
                    "Não comprei os ingressos.",
                    "Os ingressos acabaram ontem."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual tempo verbal usamos após 'Aunque...' para declarar indiferença total a um obstáculo futuro?",
                "options": [
                    "Presente de Subjuntivo (ex: Aunque me cueste caro, lo compraré)",
                    "Pretérito Indefinido",
                    "Imperativo",
                    "Pretérito Imperfeito"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'A pesar de que _____ (estar) cansado, Juan terminó el informe ayer.'",
                "options": [
                    "estaba / estaba (Indicativo de fato real)",
                    "esté",
                    "estuviera",
                    "estar"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Aunque haga mucho calor este fin de semana, vamos a hacer la excursión por la montaña.",
                "words": [
                    "Aunque",
                    "haga",
                    "mucho",
                    "calor",
                    "este",
                    "fin",
                    "de",
                    "semana,",
                    "vamos",
                    "a",
                    "hacer",
                    "la",
                    "excursión",
                    "por",
                    "la",
                    "montaña."
                ],
                "translation": "Mesmo que faça muito calor este fim de semana, vamos fazer a excursão pela montanha."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Carmen",
                "npcName": "Carmen",
                "text": "Mira el cielo, parece que va a llover esta tarde.",
                "npcMessage": "Mira el cielo, parece que va a llover esta tarde.",
                "translation": "Olhe o céu, parece que vai chover esta tarde."
            },
            {
                "speaker": "Diego",
                "npcName": "Diego",
                "text": "Aunque llueva a mares, voy a salir a correr. Necesito hacer ejercicio.",
                "npcMessage": "Aunque llueva a mares, voy a salir a correr. Necesito hacer ejercicio.",
                "translation": "Mesmo que chova a canecos, vou sair para correr. Preciso fazer exercício."
            },
            {
                "speaker": "Carmen",
                "npcName": "Carmen",
                "text": "¡Estás loco! Yo aunque haga un poco de viento me quedo en casa.",
                "npcMessage": "¡Estás loco! Yo aunque haga un poco de viento me quedo en casa.",
                "translation": "Você é louco! Eu mesmo que faça um pouco de vento fico em casa."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Aunque sea difícil'?",
                "options": [
                    {
                        "label": "Mesmo que seja difícil (Subjuntivo de hipótese/determinação)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Embora tenha sido fácil",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é a chave para escolher entre Indicativo e Subjuntivo após 'aunque'?",
                "options": [
                    {
                        "label": "Indicativo = O falante afirmativamente sabe/informa o fato; Subjuntivo = Hipótese ou obstáculo irrelevante",
                        "isCorrect": true,
                        "explanation": "Exato! Nuance de atitude do falante em relação à informação."
                    },
                    {
                        "label": "Indicativo é só no passado",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer dizer que vai comprar o livro mesmo que seja caro. O que diz?",
                "options": [
                    {
                        "label": "Compraré el libro aunque sea caro.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "El libro era barato",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Aunque tiene 80 años, mi abuelo corre todos los días.'",
                "options": [
                    {
                        "label": "Embora tenha 80 anos (fato real sabido), meu avô corre todos os dias.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Meu avô fará 80 anos amanhã.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é o sentido de 'Aunque me lo pida por favor, no le daré el dinero'?",
                "options": [
                    {
                        "label": "Mesmo que me peça por favor (subjuntivo), não lhe darei o dinheiro",
                        "isCorrect": true,
                        "explanation": "Fantástico! Rejeição antecipada de hipótese."
                    },
                    {
                        "label": "Já me pediu por favor e eu dei",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_16",
        "title": "16. Descrever Filmes, Livros e Séries",
        "level": "B1",
        "description": "Resuma enredos e personagens com argumento, personajes, resumen, recomendación.",
        "icon": "🎬",
        "stage1_context": {
            "missionTitle": "Módulo 16: Descrever Filmes, Livros e Séries",
            "missionDescription": "Aprenda a fazer críticas de cinema, resumos de livros e recomendar séries de TV com vocabulário técnico e fluido.",
            "audioGuide": "La película trata de un detective. Está basada en una novela famosa y se la recomiendo a todos."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Trata de...",
                "Portuguese": "Trata-se de... / É sobre...",
                "Audio": "Trata de...",
                "timeContext": "Explicação do tema da obra."
            },
            {
                "type": "vocab",
                "Spanish": "Está basada en...",
                "Portuguese": "É baseada em...",
                "Audio": "Está basada en...",
                "timeContext": "Inspiração ou adaptação da obra."
            },
            {
                "type": "vocab",
                "Spanish": "El argumento / La trama",
                "Portuguese": "O enredo / A trama",
                "Audio": "El argumento / La trama",
                "timeContext": "Desenvolvimento da história."
            },
            {
                "type": "vocab",
                "Spanish": "Los personajes principales",
                "Portuguese": "Os personagens principais",
                "Audio": "Los personajes principales",
                "timeContext": "Atores e papéis da obra."
            },
            {
                "type": "vocab",
                "Spanish": "Se la recomiendo a...",
                "Portuguese": "Recomendo-a a...",
                "Audio": "Se la recomiendo a...",
                "timeContext": "Recomendação com pronomes duplos."
            },
            {
                "type": "grammar_pill",
                "title": "Estrutura de Resumo de Enredo com 'Trata de...'",
                "rule": "O verbo tratar de é a forma natural em espanhol para explicar o tema de um livro ou filme (La película trata de un viaje en el tiempo).",
                "formula": "La película / El libro + trata de + [resumo]",
                "example": "La serie trata de la vida de unos investigadores."
            },
            {
                "type": "grammar_pill",
                "title": "Ambientação e Origem (Está basada en / Se desarrolla en)",
                "rule": "Para explicar o cenário e inspiração, usam-se 'Está basada en una historia real' e 'La historia se desarrolla en el siglo XIX en Madrid'.",
                "formula": "Está basada en + [fonte] | Se desarrolla en + [local/época]",
                "example": "La novela se desarrolla en Barcelona."
            },
            {
                "type": "grammar_pill",
                "title": "Recomendar com Pronomes Duplos (Se la recomiendo)",
                "rule": "Ao recomendar uma obra (ex: la película) a alguém (ex: a ti/ustedes), usa-se a combinação pronominal 'Se la recomiendo' (onde se = le/te e la = la película).",
                "formula": "Se + la/lo + recomiendo + a + [pessoa]",
                "example": "Es una película fantástica, se la recomiendo a todos."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como explicar o tema de um filme dizendo 'Trata-se de um detetive privado' em espanhol?",
                "options": [
                    "La película trata de un detective privado",
                    "La película es de un detective",
                    "La película habla un detective",
                    "La película hace detective"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual expressão usamos para dizer que o romance se passa na Espanha do século XVIII?",
                "options": [
                    "La novela se desarrolla en España en el siglo XVIII",
                    "La novela hace en España",
                    "La novela está en España",
                    "La novela vive en España"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Esta serie está basada en una novela muy famosa de literatura hispana.'",
                "options": [
                    "Esta série é baseada em um romance muito famoso de literatura hispânica.",
                    "A série criou um livro novo.",
                    "Não gosto de romances de literatura.",
                    "O romance é desconhecido."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Como recomendar uma série (feminino: la serie) aos seus amigos com pronomes duplos?",
                "options": [
                    "¡Se la recomiendo a todos!",
                    "¡La recomiendo se!",
                    "¡Le recomiendo la!",
                    "¡La se recomiendo!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual palavra significa 'o enredo' de uma história em espanhol?",
                "options": [
                    "La trama / El argumento",
                    "El final",
                    "El papel",
                    "El cine"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Esta serie está basada en hechos reales y se la recomiendo a todos los amantes del misterio.",
                "words": [
                    "Esta",
                    "serie",
                    "está",
                    "basada",
                    "en",
                    "hechos",
                    "reales",
                    "y",
                    "se",
                    "la",
                    "recomiendo",
                    "a",
                    "todos",
                    "los",
                    "amantes",
                    "del",
                    "misterio."
                ],
                "translation": "Esta série é baseada em fatos reais e recomendo-a a todos os amantes do mistério."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "¿Viste la nueva serie de televisión de la que todos hablan?",
                "npcMessage": "¿Viste la nueva serie de televisión de la que todos hablan?",
                "translation": "Você viu a nova série de televisão de que todos falam?"
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "Sí, la vi el fin de semana. Trata de un misterio sin resolver en Galicia.",
                "npcMessage": "Sí, la vi el fin de semana. Trata de un misterio sin resolver en Galicia.",
                "translation": "Sim, vi no fim de semana. Trata-se de um mistério sem solução na Galícia."
            },
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "¡Qué interesante! Los personajes principales son fantásticos. ¡Te la recomiendo!",
                "npcMessage": "¡Qué interesante! Los personajes principales son fantásticos. ¡Te la recomiendo!",
                "translation": "Que interessante! Os personagens principais são fantásticos. Recomendo-a a você!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'La trama'?",
                "options": [
                    {
                        "label": "O enredo / A história",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "O ator",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) O que significa 'tratar de' no contexto cultural?",
                "options": [
                    {
                        "label": "Abordar um tema ou enredo específico (ex: La película trata de amor)",
                        "isCorrect": true,
                        "explanation": "Exato! Uso idiomático para resumos de obras."
                    },
                    {
                        "label": "Tratar mal uma pessoa",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer recomendar um livro maravilhoso para a sua professora de espanhol. O que diz?",
                "options": [
                    {
                        "label": "Profesora, se lo recomiendo mucho, es fascinante.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "No me gusta el libro",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'El personaje principal es un joven que descubre un secreto familiar.'",
                "options": [
                    {
                        "label": "O personagem principal é um jovem que descobre um segredo familiar.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O personagem morreu no início do filme.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'El actor' e 'El personaje'?",
                "options": [
                    {
                        "label": "'El actor' é a pessoa real que atua; 'El personaje' é o papel ficcional na história",
                        "isCorrect": true,
                        "explanation": "Fantástico! Distinção conceitual importante em crítica de arte."
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
        "id": "es_b1_mod_17",
        "title": "17. Redação de E-mails Formais",
        "level": "B1",
        "description": "Escreva correspondências profissionais com Estimado/a, Atentamente, Quedo a la espera de...",
        "icon": "📧",
        "stage1_context": {
            "missionTitle": "Módulo 17: Redação de E-mails Formais",
            "missionDescription": "Domine a estrutura padrão de correspondência corporativa em espanhol, saudações de respeito e fechamentos formais.",
            "audioGuide": "Estimado Sr. García: Le escribo para solicitar información. Atentamente, Juan Pérez."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Estimado/a Señor/a...",
                "Portuguese": "Prezado(a) Senhor(a)...",
                "Audio": "Estimado Señor",
                "timeContext": "Saudação formal de abertura."
            },
            {
                "type": "vocab",
                "Spanish": "Le escribo para informarle que...",
                "Portuguese": "Escrevo-lhe para informá-lo(a) que...",
                "Audio": "Le escribo para informarle",
                "timeContext": "Declaração do objetivo da mensagem."
            },
            {
                "type": "vocab",
                "Spanish": "Le agradecería que me enviara...",
                "Portuguese": "Agradeceria-lhe se me enviasse...",
                "Audio": "Le agradecería que me enviara",
                "timeContext": "Solicitação formal no condicional/subjuntivo."
            },
            {
                "type": "vocab",
                "Spanish": "Quedo a la espera de su respuesta",
                "Portuguese": "Fico no aguardo de sua resposta",
                "Audio": "Quedo a la espera de su respuesta",
                "timeContext": "Fechamento profissional de expectativa."
            },
            {
                "type": "vocab",
                "Spanish": "Atentamente / Cordialmente",
                "Portuguese": "Atenciosamente / Cordialmente",
                "Audio": "Atentamente / Cordialmente",
                "timeContext": "Despedida formal cortês."
            },
            {
                "type": "grammar_pill",
                "title": "Fórmulas de Saudação Formal de Abertura",
                "rule": "Em e-mails corporativos, usam-se 'Estimado Sr. [Sobrenome]:' ou 'Estimada Sra. [Sobrenome]:' seguidos obrigatoriamente de dois pontos (:) e nunca de vírgula.",
                "formula": "Estimado/a + Sr./Sra. + [Sobrenome] + :",
                "example": "Estimada Sra. Martínez: / Estimado Sr. Blanco:"
            },
            {
                "type": "grammar_pill",
                "title": "Solicitações Corteses no Corpo do E-mail",
                "rule": "Para solicitar informações ou documentos de forma elegante, combina-se o condicional com o subjuntivo: 'Le agradecería que me enviara la factura' / 'Le rogaría que me confirmara la cita'.",
                "formula": "Le agradecería + que + Imperfeito de Subjuntivo",
                "example": "Le agradecería que me enviara el presupuesto."
            },
            {
                "type": "grammar_pill",
                "title": "Fórmulas de Fechamento e Despedida",
                "rule": "Encerra-se o e-mail com frases de disponibilidade (Quedo a su entera disposición para cualquier duda) e despedida formal (Atentamente, ou Un cordial saludo,).",
                "formula": "Quedo a la espera de... + Atentamente,",
                "example": "Quedo a su disposición. Atentamente,"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual sinal de pontuação é OBRIGATÓRIO após a saudação de abertura 'Estimado Sr. García' em um e-mail em espanhol?",
                "options": [
                    "Dois pontos (:) ex: Estimado Sr. García:",
                    "Vírgula (,)",
                    "Ponto e vírgula (;)",
                    "Travessão (-)"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como solicitar elegantemente um orçamento em um e-mail formal?",
                "options": [
                    "Le agradecería que me enviara el presupuesto",
                    "Mándame el presupuesto ya",
                    "Quiero presupuesto",
                    "Dame presupuesto rápido"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Quedo a su entera disposición para resolver cualquier duda sobre la propuesta.'",
                "options": [
                    "Fico à sua inteira disposição para resolver qualquer dúvida sobre a proposta.",
                    "Não tenho dúvidas sobre a proposta.",
                    "A proposta foi rejeitada.",
                    "Enviei a proposta ontem."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual palavra equivale a 'Atenciosamente' na assinatura de uma carta comercial em espanhol?",
                "options": [
                    "Atentamente / Cordialmente",
                    "Hasta luego",
                    "Chau",
                    "Besos"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a abertura formal: '_____ Sra. Gómez: Le escribo para...'?",
                "options": [
                    "Estimada",
                    "Querida",
                    "Hola",
                    "Señora sólo"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Estimado Sr. López: Le escribo para solicitar el presupuesto y quedo a la espera de su respuesta.",
                "words": [
                    "Estimado",
                    "Sr.",
                    "López:",
                    "Le",
                    "escribo",
                    "para",
                    "solicitar",
                    "el",
                    "presupuesto",
                    "y",
                    "quedo",
                    "a",
                    "la",
                    "espera",
                    "de",
                    "su",
                    "respuesta."
                ],
                "translation": "Prezado Sr. López: Escrevo-lhe para solicitar o orçamento e fico no aguardo de sua resposta."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Ejecutivo A",
                "npcName": "Ejecutivo A",
                "text": "Estimado Sr. Ruiz: Le escribo para solicitar una reunión la próxima semana.",
                "npcMessage": "Estimado Sr. Ruiz: Le escribo para solicitar una reunión la próxima semana.",
                "translation": "Prezado Sr. Ruiz: Escrevo-lhe para solicitar uma reunião na próxima semana."
            },
            {
                "speaker": "Ejecutivo B",
                "npcName": "Ejecutivo B",
                "text": "Estimado Sr. Silva: Le agradecería que me enviara su disponibilidad de horarios.",
                "npcMessage": "Estimado Sr. Silva: Le agradecería que me enviara su disponibilidad de horarios.",
                "translation": "Prezado Sr. Silva: Agradeceria-lhe se me enviasse sua disponibilidade de horários."
            },
            {
                "speaker": "Ejecutivo A",
                "npcName": "Ejecutivo A",
                "text": "Con mucho gusto. Le adjunto el calendario. Quedo a su disposición. Atentamente.",
                "npcMessage": "Con mucho gusto. Le adjunto el calendario. Quedo a su disposición. Atentamente.",
                "translation": "Com muito gosto. Anexo-lhe o calendário. Fico à sua disposição. Atenciosamente."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Atentamente' ao final de um e-mail?",
                "options": [
                    {
                        "label": "Atenciosamente / Respeitosamente",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Com atenção rápida",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que se usam dois pontos (:) após 'Estimado cliente' em espanhol em vez de vírgula?",
                "options": [
                    {
                        "label": "Porque é a regra ortográfica padrão de correspondência na língua espanhola",
                        "isCorrect": true,
                        "explanation": "Exato! Vírgula é vício do inglês/português."
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
                "question": "3. (Contexto) Você precisa enviar um documento anexado ao cliente. O que escreve no e-mail?",
                "options": [
                    {
                        "label": "Le adjunto el documento solicitado para su revisión.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "No tengo el documento",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Quedo a la espera de sus noticias. Un cordial saludo.'",
                "options": [
                    {
                        "label": "Fico no aguardo de suas notícias. Um cordial abraço/saudação.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Não quero mais notícias.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa o verbo 'Adjuntar' em correspondência técnica?",
                "options": [
                    {
                        "label": "Anexar um arquivo ou documento ao e-mail",
                        "isCorrect": true,
                        "explanation": "Fantástico! Vocabulário de escritório indispensável."
                    },
                    {
                        "label": "Juntar duas pessoas",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_18",
        "title": "18. Entrevistas de Trabajo en Español",
        "level": "B1",
        "description": "Navegue por entrevistas de emprego destacando fortalezas, debilidades e experiência prévia.",
        "icon": "👔",
        "stage1_context": {
            "missionTitle": "Módulo 18: Entrevistas de Trabajo en Español",
            "missionDescription": "Aprenda o vocabulário executivo e as expressões necessárias para se destacar em entrevistas de emprego em espanhol.",
            "audioGuide": "Mis principales fortalezas son el trabajo en equipo y la resolución de problemas. He trabajado tres años en..."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Mis fortalezas / puntos fuertes",
                "Portuguese": "Minhas forças / pontos fortes",
                "Audio": "Mis fortalezas",
                "timeContext": "Qualidades profissionais do candidato."
            },
            {
                "type": "vocab",
                "Spanish": "Mis áreas de mejora / debilidades",
                "Portuguese": "Minhas áreas de melhoria / pontos fracos",
                "Audio": "Mis áreas de mejora",
                "timeContext": "Pontos a aprimorar declarados com modéstia."
            },
            {
                "type": "vocab",
                "Spanish": "Experiencia previa en el sector",
                "Portuguese": "Experiência prévia no setor",
                "Audio": "Experiencia previa",
                "timeContext": "Histórico profissional acumulado."
            },
            {
                "type": "vocab",
                "Spanish": "Me considero una persona proactiva",
                "Portuguese": "Considero-me uma pessoa proativa",
                "Audio": "Me considero proactiva",
                "timeContext": "Perfil comportamental no trabalho."
            },
            {
                "type": "vocab",
                "Spanish": "Aportar valor a la empresa",
                "Portuguese": "Agregar valor à empresa",
                "Audio": "Aportar valor",
                "timeContext": "Objetivo profissional em contratações."
            },
            {
                "type": "grammar_pill",
                "title": "Apresentação de Perfil Profissional (Me considero + adjetivo)",
                "rule": "Para descrever qualidades de trabalho com modéstia e firmeza, usa-se a fórmula 'Me considero una persona proactiva / organizada / comprometida'.",
                "formula": "Me considero una persona + [adjetivo]",
                "example": "Me considero una persona muy orientada a resultados."
            },
            {
                "type": "grammar_pill",
                "title": "Relato de Conquistas com Pretérito Perfecto",
                "rule": "Para relatar conquistas acumuladas na carreira que ainda têm relevância no presente, usa-se o Pretérito Perfecto: 'He liderado proyectos internacionales', 'He trabajado durante cinco años en contabilidad'.",
                "formula": "Haber + particípio + [conquista profissional]",
                "example": "He gestionado equipos de más de diez personas."
            },
            {
                "type": "grammar_pill",
                "title": "Expressão de Objetivos Profissionais no Subjuntivo",
                "rule": "Ao responder sobre o que busca na empresa, usam-se orações com subjuntivo: 'Busco un puesto que me permita crecer profesionalmente' / 'Quiero una empresa donde pueda aportar mi experiencia'.",
                "formula": "Busco un puesto que + Subjuntivo",
                "example": "Busco una empresa que valore la innovación."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como descrever seus pontos fortes em uma entrevista de emprego em espanhol?",
                "options": [
                    "Mis principales fortalezas son la organización y el liderazgo",
                    "Mis fuertes son buenos",
                    "Tengo fortalezas muy altas",
                    "Soy fuerte de cuerpo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual a forma elegante de falar sobre seus pontos fracos sem se prejudicar?",
                "options": [
                    "Mis áreas de mejora son la impaciencia y la autoexigencia",
                    "Tengo muchas cosas malas",
                    "No sirvo para nada",
                    "Mis debilidades son secretas"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'He trabajado durante cuatro años en el departamento de marketing digital.'",
                "options": [
                    "Trabalhei durante quatro anos no departamento de marketing digital.",
                    "Vou trabalhar em marketing no ano que vem.",
                    "Não gosto de marketing digital.",
                    "Trabalho em marketing desde ontem."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a estrutura correta para expressar o que você busca na vaga de trabalho com subjuntivo?",
                "options": [
                    "Busco un puesto que me permita desarrollar mis habilidades",
                    "Busco un puesto que me permite",
                    "Busco puesto permitir",
                    "Busco puesto que me permitirá"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. O que significa a expressão 'Aportar valor a la empresa'?",
                "options": [
                    "Agregar valor / contribuir positivamente com a empresa",
                    "Comprar ações da empresa",
                    "Vender a empresa",
                    "Pedir aumento salarial"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Me considero una persona responsable y busco una empresa donde pueda aportar mi experiencia.",
                "words": [
                    "Me",
                    "considero",
                    "una",
                    "persona",
                    "responsable",
                    "y",
                    "busco",
                    "una",
                    "empresa",
                    "donde",
                    "pueda",
                    "aportar",
                    "mi",
                    "experiencia."
                ],
                "translation": "Considero-me uma pessoa responsável e busco uma empresa onde possa agregar minha experiência."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Reclutador",
                "npcName": "Reclutador",
                "text": "Buenas tardes. ¿Por qué le gustaría trabajar en nuestra empresa?",
                "npcMessage": "Buenas tardes. ¿Por qué le gustaría trabajar en nuestra empresa?",
                "translation": "Boa tarde. Por que o senhor gostaria de trabalhar na nossa empresa?"
            },
            {
                "speaker": "Candidato",
                "npcName": "Candidato",
                "text": "Buenas tardes. Porque me considero una persona proactiva y busco un proyecto que me permita crecer.",
                "npcMessage": "Buenas tardes. Porque me considero una persona proactiva y busco un proyecto que me permita crecer.",
                "translation": "Boa tarde. Porque me considero uma pessoa proativa e busco um projeto que me permita crescer."
            },
            {
                "speaker": "Reclutador",
                "npcName": "Reclutador",
                "text": "Excelente. Hábleme de su experiencia previa en este sector.",
                "npcMessage": "Excelente. Hábleme de su experiencia previa en este sector.",
                "translation": "Excelente. Fale-me de sua experiência prévia neste setor."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Fortalezas' no currículo?",
                "options": [
                    {
                        "label": "Pontos fortes / Qualidades profissionais",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Castelos fortes",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que se usa o subjuntivo em 'Busco una empresa que valore a sus empleados'?",
                "options": [
                    {
                        "label": "Porque a empresa desejada é um elemento indeterminado/hipotético na mente do falante",
                        "isCorrect": true,
                        "explanation": "Exato! Oração relativa com elemento indeterminado exige Subjuntivo."
                    },
                    {
                        "label": "Porque é uma pergunta",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) O entrevistador pergunta qual o seu principal objetivo na carreira. O que responde?",
                "options": [
                    {
                        "label": "Mi objetivo es asumir responsabilidades y aportar valor a la organización.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Quiero ganar dinero sin trabajar",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Tengo capacidad para trabajar bajo presión y resolver problemas.'",
                "options": [
                    {
                        "label": "Tenho capacidade para trabalhar sob pressão e resolver problemas.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Não me gosto de trabalhar com pressão.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a sigla 'CV' no mercado de trabalho hispânico?",
                "options": [
                    {
                        "label": "Currículum Vitae (Hoja de vida em alguns países da América Latina)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Documento indispensável em contratações."
                    },
                    {
                        "label": "Carta de Ventas",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_19",
        "title": "19. Llamadas Telefónicas y Videoconferencias",
        "level": "B1",
        "description": "Comunique-se por telefone e reuniões online com ¿Con quién hablo?, Se oye mal, Se ha cortado.",
        "icon": "📞",
        "stage1_context": {
            "missionTitle": "Módulo 19: Llamadas Telefónicas y Videoconferencias",
            "missionDescription": "Domine as frases indispensáveis para atender ligações corporativas e lidar com falhas de áudio e vídeo em reuniões remotas.",
            "audioGuide": "¿Con quién tengo el gusto de hablar? Se oye un poco de interferencia. ¿Me escuchan bien?"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "¿Con quién hablo? / ¿De parte de quién?",
                "Portuguese": "Com quem falo? / De parte de quem?",
                "Audio": "Con quién hablo",
                "timeContext": "Perguntas de identificação ao atender ligações."
            },
            {
                "type": "vocab",
                "Spanish": "Le paso con el departamento de ventas",
                "Portuguese": "Passo-lhe com o departamento de vendas",
                "Audio": "Le paso con ventas",
                "timeContext": "Transferência de chamada corporativa."
            },
            {
                "type": "vocab",
                "Spanish": "Se oye mal / Hay interferencia",
                "Portuguese": "Ouve-se mal / Há interferência",
                "Audio": "Se oye mal",
                "timeContext": "Reporte de problema de áudio."
            },
            {
                "type": "vocab",
                "Spanish": "Se ha cortado la comunicación",
                "Portuguese": "A comunicação caiu / cortou",
                "Audio": "Se ha cortado",
                "timeContext": "Queda na transmissão ou ligação."
            },
            {
                "type": "vocab",
                "Spanish": "¿Me escuchan bien / Se me ve?",
                "Portuguese": "Escutam-me bem / Estão me vendo?",
                "Audio": "Me escuchan bien",
                "timeContext": "Verificação de áudio e câmera em videoconferência."
            },
            {
                "type": "grammar_pill",
                "title": "Identificação Telefônica Cortês",
                "rule": "Ao atender chamadas profissionais, usam-se as fórmulas: '¿Con quién tengo el gusto de hablar?', '¿De parte de quién, por favor?', 'Habla Juan Pérez'.",
                "formula": "¿Con quién tengo el gusto de hablar? / Habla + [Nome]",
                "example": "Dígame. Habla Carlos de la empresa ABC."
            },
            {
                "type": "grammar_pill",
                "title": "Transferência de Ligações (Pasar con)",
                "rule": "Para transferir chamadas a um colega, usa-se 'Le paso con + pessoa/departamento' ou 'Un momento, le pongo con el Sr. García'.",
                "formula": "Le paso con / Le pongo con + [pessoa/depto]",
                "example": "Un momento, le paso con el departamento técnico."
            },
            {
                "type": "grammar_pill",
                "title": "Reportar Problemas Técnicos em Videoconferências",
                "rule": "Frases indispensáveis de suporte remoto: 'Tienes el micrófono silenciado' (seu microfone está no mudo), 'Se te ve bien pero no se te oye' (estamos te vendo, mas não te ouvindo), 'La pantalla se ha quedado congelada' (a tela travou).",
                "formula": "Tienes el micrófono silenciado / Se oye con retraso",
                "example": "Perdón, tenías el micrófono en silencio."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como perguntar cortesmente quem está ligando em uma chamada profissional?",
                "options": [
                    "¿De parte de quién, por favor?",
                    "¿Quién llama ya?",
                    "¿Tú quién eres?",
                    "¿Por qué llamas?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. O que dizer a um colega numa videoconferência quando o microfone dele está desligado?",
                "options": [
                    "Tienes el micrófono silenciado / en silencio",
                    "Tu micrófono está muerto",
                    "No tienes voz",
                    "Cierra el micrófono"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Disculpen la demora, es que se me había congelado la pantalla de la aplicación.'",
                "options": [
                    "Desculpem a demora, é que minha tela do aplicativo tinha travado.",
                    "Desculpe a demora, perdi a aplicação.",
                    "Não me ouço na aplicação.",
                    "A tela desligou ontem."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Como transferir uma ligação para o setor de atendimento ao cliente?",
                "options": [
                    "Le paso con el servicio de atención al cliente",
                    "Le tiro la llamada",
                    "Vete a atención al cliente",
                    "Llama tú a atención"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. O que significa quando alguém diz em uma chamada 'Se ha cortado la llamada'?",
                "options": [
                    "A ligação caiu / foi interrompida abruptamente",
                    "A chamada foi muito boa",
                    "A pessoa desligou porque quis",
                    "A chamada gravou tudo"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Disculpe, se oye con interferencia y parece que la comunicación se ha cortado.",
                "words": [
                    "Disculpe,",
                    "se",
                    "oye",
                    "con",
                    "interferencia",
                    "y",
                    "parece",
                    "que",
                    "la",
                    "comunicación",
                    "se",
                    "ha",
                    "cortado."
                ],
                "translation": "Com licença, ouve-se com interferência e parece que a comunicação caiu."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Recepcionista",
                "npcName": "Recepcionista",
                "text": "Empresa Soluciones. ¿Con quién tengo el gusto de hablar?",
                "npcMessage": "Empresa Soluciones. ¿Con quién tengo el gusto de hablar?",
                "translation": "Empresa Soluções. Com quem tenho o prazer de falar?"
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "Habla María Torres. Quisiera hablar con el departamento de contabilidad.",
                "npcMessage": "Habla María Torres. Quisiera hablar con el departamento de contabilidad.",
                "translation": "Fala María Torres. Gostaria de falar com o departamento de contabilidade."
            },
            {
                "speaker": "Recepcionista",
                "npcName": "Recepcionista",
                "text": "Un momento, Sra. Torres. Le paso enseguida. No cuelgue, por favor.",
                "npcMessage": "Un momento, Sra. Torres. Le paso enseguida. No cuelgue, por favor.",
                "translation": "Um momento, Sra. Torres. Passo-lhe em seguida. Não desligue, por favor."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'No cuelgue' ao telefone?",
                "options": [
                    {
                        "label": "Não desligue (a chamada) / Aguarde na linha",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Não ligue mais",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que usamos o pretérito perfecto em 'Se ha cortado la línea'?",
                "options": [
                    {
                        "label": "Porque a queda da ligação acabou de ocorrer e impacta o momento atual da conversa",
                        "isCorrect": true,
                        "explanation": "Exato! Ação recente ligada ao presente."
                    },
                    {
                        "label": "Porque é futuro",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está em uma reunião online e quer saber se todos conseguem ver sua apresentação compartilhada. O que pergunta?",
                "options": [
                    {
                        "label": "¿Pueden ver mi pantalla compartida?",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¿Dónde están mis gafas?",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Le escucho muy flojo, ¿podría hablar más alto por favor?'",
                "options": [
                    {
                        "label": "Escuto-o muito baixo, você poderia falar mais alto por favor?",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Você fala muito rápido no telefone.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa o verbo 'Colgar' no contexto telefônico hispânico?",
                "options": [
                    {
                        "label": "Desligar a ligação (origem: desligar o gancho do telefone fixo)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Verbo essencial para ligações."
                    },
                    {
                        "label": "Atender a ligação",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_20",
        "title": "20. Pretérito Pluscuamperfecto",
        "level": "B1",
        "description": "Relate ações anteriores a outra no passado com Ya había comido cuando llegó.",
        "icon": "⏮️",
        "stage1_context": {
            "missionTitle": "Módulo 20: Pretérito Pluscuamperfecto",
            "missionDescription": "Domine a estrutura do passado do passado para narrar acontecimentos que ocorreram antes de outro momento já concluído.",
            "audioGuide": "Cuando llegué a la estación, el tren ya había salido. Nunca había visto algo tan bonito."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Ya había salido",
                "Portuguese": "Já tinha saído",
                "Audio": "Ya había salido",
                "timeContext": "Ação anterior a um marco no passado."
            },
            {
                "type": "vocab",
                "Spanish": "Habías comido",
                "Portuguese": "Você tinha comido",
                "Audio": "Habías comido",
                "timeContext": "Passado anterior na 2ª pessoa."
            },
            {
                "type": "vocab",
                "Spanish": "Habíamos estudiado",
                "Portuguese": "Tínhamos estudado",
                "Audio": "Habíamos estudiado",
                "timeContext": "1ª pessoa do plural do pluscuamperfecto."
            },
            {
                "type": "vocab",
                "Spanish": "Nunca había visto",
                "Portuguese": "Nunca tinha visto (experiência prévia)",
                "Audio": "Nunca había visto",
                "timeContext": "Experiência anterior a um momento passado."
            },
            {
                "type": "vocab",
                "Spanish": "Cuando llegué, él ya se había ido",
                "Portuguese": "Quando cheguei, ele já tinha ido embora",
                "Audio": "Ya se había ido",
                "timeContext": "Exemplo clássico de sequência temporal do passado."
            },
            {
                "type": "grammar_pill",
                "title": "Formação do Pretérito Pluscuamperfecto de Indicativo",
                "rule": "Forma-se com o verbo auxiliar HABER no Pretérito Imperfeito (había, habías, había, habíamos, habíais, habían) + PARTICÍPIO INVARIÁVEL (-ado/-ido).",
                "formula": "HABER (había/habías...) + Participio (-ado/-ido)",
                "example": "Había hablado, habías comido, habíamos vivido."
            },
            {
                "type": "grammar_pill",
                "title": "Conceito do 'Passado do Passado'",
                "rule": "O Pluscuamperfecto expressa uma ação totalmente concluída que ocorreu ANTES de outra ação também no passado (Cuando llegué al cine [passado 2], la película ya había empezado [passado 1 anterior]).",
                "formula": "Passado 1 (Pluscuamperfecto) < Passado 2 (Indefinido/Imperfeito)",
                "example": "Cuando llamé a María, ella ya se había dormido."
            },
            {
                "type": "grammar_pill",
                "title": "Uso com o Advérbio 'Ya' e Experiências Prévias ('Nunca había...')",
                "rule": "É quase sempre acompanhado pelo advérbio ya (Ya había cenado) ou por nunca / jamás para falar de experiências anteriores a um marco no passado (Nunca había viajado en avión hasta aquel día).",
                "formula": "Ya / Nunca + haber (había...) + participio",
                "example": "Nunca había probado la comida mexicana antes de ir a Cancún."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual é a forma correta do Pluscuamperfecto para 'Yo' do verbo 'comer'?",
                "options": [
                    "había comido",
                    "he comido",
                    "hube comido",
                    "comiera"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como traduzir a frase 'Quando cheguei, o trem já tinha saído' em espanhol?",
                "options": [
                    "Cuando llegué, el tren ya había salido",
                    "Cuando llegué, el tren ya salió",
                    "Cuando llegué, el tren ha salido",
                    "Cuando llegué, el tren salía"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Nunca había visto una puesta de sol tan maravillosa hasta aquel día.'",
                "options": [
                    "Nunca tinha visto um pôr do sol tão maravilhoso até aquele dia.",
                    "Nunca vejo o pôr do sol.",
                    "Vi o pôr do sol ontem.",
                    "Pôr do sol é bonito."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual é a ordem cronológica dos fatos em: 'Cuando llamó Carlos, yo ya había cenado'?",
                "options": [
                    "1º Eu jantei ➔ 2º Carlos ligou",
                    "1º Carlos ligou ➔ 2º Eu jantei",
                    "Aconteceram ao mesmo tempo",
                    "Nenhuma ação aconteceu"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'Antes de viajar a España, nosotros nunca _____ (estudiar) español.'",
                "options": [
                    "habíamos estudiado",
                    "hemos estudiado",
                    "estudiamos",
                    "habiendo estudiado"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Cuando llegué al aeropuerto, el avión ya había despegado hacía diez minutos.",
                "words": [
                    "Cuando",
                    "llegué",
                    "al",
                    "aeropuerto,",
                    "el",
                    "avión",
                    "ya",
                    "había",
                    "despegado",
                    "hacía",
                    "diez",
                    "minutos."
                ],
                "translation": "Quando cheguei ao aeroporto, o avião já tinha decolado há dez minutos."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "¿Pudiste hablar con el director antes de la reunión de ayer?",
                "npcMessage": "¿Pudiste hablar con el director antes de la reunión de ayer?",
                "translation": "Você conseguiu falar com o diretor antes da reunião de ontem?"
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "No, cuando llegué a su oficina, él ya se había ido a una comida de negocios.",
                "npcMessage": "No, cuando llegué a su oficina, él ya se había ido a una comida de negocios.",
                "translation": "Não, quando cheguei ao escritório dele, ele já tinha ido embora para um almoço de negócios."
            },
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "¡Vaya! Qué pena que ya hubiera salido.",
                "npcMessage": "¡Vaya! Qué pena que ya hubiera salido.",
                "translation": "Poxa! Que pena que já tinha saído."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Ya había salido'?",
                "options": [
                    {
                        "label": "Já tinha saído (ação anterior a outro momento no passado)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Saiu agora",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que o Pluscuamperfecto é chamado de 'o passado do passado'?",
                "options": [
                    {
                        "label": "Porque expressa um evento concluído anterior a outro marco temporal já passado",
                        "isCorrect": true,
                        "explanation": "Exato! Regra da anterioridade no passado."
                    },
                    {
                        "label": "Porque se refere ao futuro",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você chegou ao restaurante às 9h, mas seus amigos já tinham jantado às 8h. O que diz?",
                "options": [
                    {
                        "label": "Cuando llegué a las nueve, mis amigos ya habían cenado.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Mis amigos cenan ahora",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Jamás habíamos probado una paella tan rica antes de nuestro viaje a Valencia.'",
                "options": [
                    {
                        "label": "Jamais tínhamos provado uma paella tão gostosa antes da nossa viagem a Valência.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Comemos paella em Valência ano passado.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a conjugação do auxiliar 'haber' no Pluscuamperfecto para a forma 'vosotros'?",
                "options": [
                    {
                        "label": "Habíais (ex: Vosotros ya habíais comido)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Forma perfeita do espanhol."
                    },
                    {
                        "label": "Habíais comiendo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_21",
        "title": "21. Variações América Latina vs. Espanha",
        "level": "B1",
        "description": "Compreenda sinônimos regionais como Coche/Auto/Carro, Celular/Móvil, Zumo/Jugo.",
        "icon": "🌎",
        "stage1_context": {
            "missionTitle": "Módulo 21: Variações América Latina vs. Espanha",
            "missionDescription": "Descubra a riqueza e diversidade do vocabulário e gramática entre o espanhol da Espanha e da América Latina.",
            "audioGuide": "En España se dice ordenador y móvil; en América Latina decimos computadora y celular. Ambos son 100% correctos."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Coche (ES) / Auto (AR/CL) / Carro (MX/CO)",
                "Portuguese": "Carro / Automóvel",
                "Audio": "Coche / Auto / Carro",
                "timeContext": "Variação léxica regional para carro."
            },
            {
                "type": "vocab",
                "Spanish": "Móvil (ES) / Celular (América)",
                "Portuguese": "Telemóvel / Celular",
                "Audio": "Móvil / Celular",
                "timeContext": "Variação regional para telefone móvel."
            },
            {
                "type": "vocab",
                "Spanish": "Zumo (ES) / Jugo (América)",
                "Portuguese": "Suco / Sumo",
                "Audio": "Zumo / Jugo",
                "timeContext": "Variação para suco de frutas."
            },
            {
                "type": "vocab",
                "Spanish": "Ordenador (ES) / Computadora (América)",
                "Portuguese": "Computador",
                "Audio": "Ordenador / Computadora",
                "timeContext": "Variação para computador."
            },
            {
                "type": "vocab",
                "Spanish": "Gafas (ES) / Lentes (América)",
                "Portuguese": "Óculos",
                "Audio": "Gafas / Lentes",
                "timeContext": "Variação para óculos de vista."
            },
            {
                "type": "grammar_pill",
                "title": "Vocabulário Tecnológico e Cotidiano (Espanha vs. América)",
                "rule": "Algumas palavras do dia a dia mudam de continente para continente sem alterar o sentido: Ordenador (ES) ➔ Computadora (América), Móvil (ES) ➔ Celular (América), Coche (ES) ➔ Carro / Auto (América).",
                "formula": "Espanha: Ordenador, Móvil, Coche | América: Computadora, Celular, Auto/Carro",
                "example": "En España compran un coche; en México compran un carro."
            },
            {
                "type": "grammar_pill",
                "title": "Alimentos e Bebidas (Zumo vs. Jugo / Patatas vs. Papas)",
                "rule": "Na Espanha usa-se zumo (suco de frutas) e patatas (batatas). Na maior parte da América Latina usam-se jugo e papas. Ambas as formas são reconhecidas e cultas.",
                "formula": "Zumo/Patatas (ES) vs Jugo/Papas (América)",
                "example": "Un zumo de naranja (ES) vs Un jugo de naranja (MX)."
            },
            {
                "type": "grammar_pill",
                "title": "Uso de Vosotros vs. Ustedes",
                "rule": "Na Espanha peninsular, vosotros/as é a forma informal para o plural de 'vocês' (com conjugação própria: tenéis, habláis). Na América Latina, usa-se exclusivamente ustedes para contextos informais e formais (com verbo na 3ª pessoa do plural: tienen, hablan).",
                "formula": "Espanha: Vosotros (informal) | América Latina: Ustedes (universal)",
                "example": "¿Vosotros coméis paella? (ES) vs ¿Ustedes comen tacos? (MX)."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se diz 'computador' no espanhol da Espanha vs. América Latina?",
                "options": [
                    "Ordenador na Espanha / Computadora na América Latina",
                    "Móvil na Espanha / Celular na América",
                    "Coche na Espanha / Auto na América",
                    "Zumo na Espanha / Jugo na América"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como pedir um 'suco de laranja' em um restaurante na Colômbia?",
                "options": [
                    "Un jugo de naranja",
                    "Un zumo de naranja",
                    "Una patata de naranja",
                    "Un refresco de naranja"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'En España se usa vosotros para hablar con amigos, pero en América se usa ustedes.'",
                "options": [
                    "Na Espanha usa-se vosotros para falar com amigos, mas na América usa-se ustedes.",
                    "Espanha e América usam as mesmas palavras.",
                    "Vosotros não é usado em nenhum lugar.",
                    "Ustedes é só para reis."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual das alternativas contém a variação correta para 'óculos' na Espanha vs. América?",
                "options": [
                    "Gafas (Espanha) / Lentes ou anteojos (América)",
                    "Zumo / Jugo",
                    "Ordenador / Computadora",
                    "Patatas / Papas"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'En Argentina dicen _____ para referirse al automóvil.'",
                "options": [
                    "auto",
                    "coche",
                    "móvil",
                    "ordenador"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "En España dicen ordenador y móvil, mientras que en México dicen computadora y celular.",
                "words": [
                    "En",
                    "España",
                    "dicen",
                    "ordenador",
                    "y",
                    "móvil,",
                    "mientras",
                    "que",
                    "en",
                    "México",
                    "dicen",
                    "computadora",
                    "y",
                    "celular."
                ],
                "translation": "Na Espanha dizem computador e celular, enquanto no México dizem computador e celular."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Javier (ES)",
                "npcName": "Javier (ES)",
                "text": "Voy a buscar mi portátil y mi móvil para llamar al taxi.",
                "npcMessage": "Voy a buscar mi portátil y mi móvil para llamar al taxi.",
                "translation": "Vou buscar meu notebook e meu celular para chamar o táxi."
            },
            {
                "speaker": "Mariana (MX)",
                "npcName": "Mariana (MX)",
                "text": "¡De acuerdo! Yo guardo mi computadora en la mochila y agarro el carro.",
                "npcMessage": "¡De acuerdo! Yo guardo mi computadora en la mochila y agarro el carro.",
                "translation": "De acordo! Eu guardo meu computador na mochila e pego o carro."
            },
            {
                "speaker": "Javier (ES)",
                "npcName": "Javier (ES)",
                "text": "¡Qué curioso cómo cambian las palabras entre nuestros países!",
                "npcMessage": "¡Qué curioso cómo cambian las palabras entre nuestros países!",
                "translation": "Que curioso como as palavras mudam entre nossos países!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Computadora' na América Latina?",
                "options": [
                    {
                        "label": "Computador (equivalente a ordenador na Espanha)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Calculadora",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual a diferença de uso de 'Ustedes' entre a América Latina e a Espanha?",
                "options": [
                    {
                        "label": "Na América Latina é a forma universal para vocês (informal e formal); na Espanha é apenas formal",
                        "isCorrect": true,
                        "explanation": "Exato! Diferença pronominal essencial."
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
                "question": "3. (Contexto) Você está em um mercado em Buenos Aires e quer comprar batatas. O que pede?",
                "options": [
                    {
                        "label": "Un kilo de papas, por favor.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Un kilo de patatas",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: '¿Nos tomamos un jugo de zumo de frutas?'",
                "options": [
                    {
                        "label": "Tomamos um suco de frutas?",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Comemos batatas ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a palavra usada para o ônibus urbano na Argentina e Uruguai?",
                "options": [
                    {
                        "label": "Colectivo (em vez de autobús na Espanha ou camión no México)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Regionalismo rioplatense clássico."
                    },
                    {
                        "label": "Coche",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_22",
        "title": "22. Expressões Idiomáticas Hispânicas I",
        "level": "B1",
        "description": "Domine modismos como Estar en las nubes, Ser pan comido, Tomar el pelo.",
        "icon": "🎭",
        "stage1_context": {
            "missionTitle": "Módulo 22: Expressões Idiomáticas Hispânicas I",
            "missionDescription": "Aprenda os modismos mais populares do espanhol cotidiano para entender conversas de nativos com naturalidade.",
            "audioGuide": "El examen fue pan comido. ¿Me estás tomando el pelo? ¡No estés en las nubes!"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Ser pan comido",
                "Portuguese": "Ser moleza / Ser muito fácil",
                "Audio": "Ser pan comido",
                "timeContext": "Modismo de facilidade extrema."
            },
            {
                "type": "vocab",
                "Spanish": "Estar en las nubes",
                "Portuguese": "Estar no mundo da lua / Distraído",
                "Audio": "Estar en las nubes",
                "timeContext": "Modismo de distração mental."
            },
            {
                "type": "vocab",
                "Spanish": "Tomar el pelo a alguien",
                "Portuguese": "Zombar / Tirar sarro de alguém",
                "Audio": "Tomar el pelo",
                "timeContext": "Modismo de brincadeira ou ironia."
            },
            {
                "type": "vocab",
                "Spanish": "Dar en el clavo",
                "Portuguese": "Acertar na mosca / Acertar em cheio",
                "Audio": "Dar en el clavo",
                "timeContext": "Modismo de precisão máxima."
            },
            {
                "type": "vocab",
                "Spanish": "Tirar la casa por la ventana",
                "Portuguese": "Gastar muito / Fazer uma festa ostentosa",
                "Audio": "Tirar la casa por la ventana",
                "timeContext": "Modismo de celebração ostensiva."
            },
            {
                "type": "grammar_pill",
                "title": "Expressões de Facilidade e Dificuldade (Ser pan comido)",
                "rule": "A expressão Ser pan comido usa-se exclusivamente com o verbo SER para indicar que uma tarefa é extremamente simples (El examen de español fue pan comido).",
                "formula": "SER + pan comido",
                "example": "Aprender este concepto es pan comido."
            },
            {
                "type": "grammar_pill",
                "title": "Expressões de Estado Mental (Estar en las nubes / Estar hecho un flan)",
                "rule": "Usam-se com o verbo ESTAR para estados temporários: Estar en las nubes (estar distraído) e Estar hecho un flan (estar muito nervoso/trêmulo).",
                "formula": "ESTAR + en las nubes / hecho un flan",
                "example": "Pedro está en las nubes hoy, no escucha."
            },
            {
                "type": "grammar_pill",
                "title": "Expressões de Interação Social (Tomar el pelo / Tirar la casa por la ventana)",
                "rule": "Tomar el pelo significa brincar ou enganar amigavelmente alguém (¿Me estás tomando el pelo?). Tirar la casa por la ventana significa comemorar ostensivamente sem poupar despesas.",
                "formula": "Tomar el pelo a + [pessoa] | Tirar la casa por la ventana",
                "example": "Celebraron la boda tirando la casa por la ventana."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. O que significa a expressão 'El examen fue pan comido'?",
                "options": [
                    "A prova foi super fácil / uma moleza",
                    "A prova tinha comida",
                    "A prova foi horrível",
                    "A prova foi cancelada"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. O que dizer a um amigo que está totalmente distraído durante a aula?",
                "options": [
                    "¡Estás en las nubes!",
                    "¡Estás en el pan!",
                    "¡Tiras la casa!",
                    "¡Tomas el pelo!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: '¿No me digas que ganaste la lotería! ¿Me estás tomando el pelo?'",
                "options": [
                    "Não me diga que ganhou a loteria! Você está tirando sarro de mim?",
                    "Ganhei a loteria ontem.",
                    "Cortei o cabelo ontem.",
                    "Vou comprar a loteria."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual expressão significa 'acertar na mosca / acertar em cheio' em espanhol?",
                "options": [
                    "Dar en el clavo",
                    "Dar en la ventana",
                    "Tirar la casa",
                    "Estar en el pan"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. O que fez uma família que 'Tiró la casa por la ventana' no aniversário da filha?",
                "options": [
                    "Fez uma celebração grande e gastou bastante dinheiro sem poupar",
                    "Vendeu a casa",
                    "Jogou objetos pela janela",
                    "Cancelou o aniversário"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "El examen de matemáticas fue pan comido porque estudié mucho ayer por la tarde.",
                "words": [
                    "El",
                    "examen",
                    "de",
                    "matemáticas",
                    "fue",
                    "pan",
                    "comido",
                    "porque",
                    "estudié",
                    "mucho",
                    "ayer",
                    "por",
                    "la",
                    "tarde."
                ],
                "translation": "A prova de matemática foi moleza porque estudei muito ontem à tarde."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "¿Qué tal el examen de conducir hoy, Elena?",
                "npcMessage": "¿Qué tal el examen de conducir hoy, Elena?",
                "translation": "Que tal a prova de direção hoje, Elena?"
            },
            {
                "speaker": "Elena",
                "npcName": "Elena",
                "text": "¡Fue pan comido! Di en el clavo en todas las maniobras y aprobé.",
                "npcMessage": "¡Fue pan comido! Di en el clavo en todas las maniobras y aprobé.",
                "translation": "Foi moleza! Acertei em cheio em todas as manobras e passei."
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "¡Genial! Esta noche tiramos la casa por la ventana para celebrar.",
                "npcMessage": "¡Genial! Esta noche tiramos la casa por la ventana para celebrar.",
                "translation": "Genial! Esta noite vamos fazer uma baita comemoração para festejar."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Tomar el pelo'?",
                "options": [
                    {
                        "label": "Brincar / Tirar sarro / Zombar amigavelmente",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Cortar o cabelo de alguém",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que se usa o verbo SER em 'Es pan comido'?",
                "options": [
                    {
                        "label": "Porque caracteriza a essência simples de uma tarefa ou atividade",
                        "isCorrect": true,
                        "explanation": "Exato! SER para qualidades inerentes."
                    },
                    {
                        "label": "É com ESTAR",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Alguém respondeu exatamente a resposta certa do enigma. O que você exclama?",
                "options": [
                    {
                        "label": "¡Has dado en el clavo!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "¡Estás en las nubes!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Antes del examen oral, todos los alumnos estaban hechos un flan.'",
                "options": [
                    {
                        "label": "Antes da prova oral, todos os alunos estavam super nervosos / feitos um pudim.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Comemos pudim antes da prova.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual expressão idiomática significa 'fazer vista grossa / fingir que não viu algo'?",
                "options": [
                    {
                        "label": "Hacer la vista gorda",
                        "isCorrect": true,
                        "explanation": "Fantástico! Modismo de complacência muito usado."
                    },
                    {
                        "label": "Tirar la casa",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_23",
        "title": "23. Pretérito Imperfecto de Subjuntivo",
        "level": "B1",
        "description": "Forme hipóteses irrealizáveis no presente/passado com Si tuviera..., Si pudiera...",
        "icon": "🏛️",
        "stage1_context": {
            "missionTitle": "Módulo 23: Pretérito Imperfecto de Subjuntivo",
            "missionDescription": "Aprenda a construir o Imperfeito do Subjuntivo para expressar desejos irrealizáveis, pedidos polidos e hipóteses.",
            "audioGuide": "Si tuviera más tiempo, viajaría por el mundo. Quisiera pedir una información."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Si tuviera / tuviese...",
                "Portuguese": "Se eu tivesse... (Duo de desinências -ra/-se)",
                "Audio": "Si tuviera / tuviese",
                "timeContext": "Hipótese de posse no imperfeito de subjuntivo."
            },
            {
                "type": "vocab",
                "Spanish": "Si pudiera / pudiese...",
                "Portuguese": "Se eu pudesse...",
                "Audio": "Si pudiera / pudiese",
                "timeContext": "Hipótese de capacidade."
            },
            {
                "type": "vocab",
                "Spanish": "Si fuera / fuese...",
                "Portuguese": "Se eu fosse / estivesse...",
                "Audio": "Si fuera / fuese",
                "timeContext": "Forma de imperfeito de subjuntivo de ser/ir."
            },
            {
                "type": "vocab",
                "Spanish": "Quisiera pedir...",
                "Portuguese": "Gostaria de pedir... (Pedido polido extremo)",
                "Audio": "Quisiera pedir",
                "timeContext": "Solicitação cortês polida."
            },
            {
                "type": "vocab",
                "Spanish": "¡Ojalá lloviera!",
                "Portuguese": "Tomara que chovesse!",
                "Audio": "¡Ojalá lloviera!",
                "timeContext": "Desejo irrealizável ou remoto."
            },
            {
                "type": "grammar_pill",
                "title": "Formação a partir da 3ª Pessoa Plural do Pretérito Indefinido",
                "rule": "Para formar o Imperfeito do Subjuntivo, pega-se a 3ª pessoa do plural do Pretérito Indefinido (dijeron, tuvieron, fueron), remove-se a terminação -ron e adicionam-se as desinências -ra, -ras, -ra, -ramos, -rais, -ran (ou -se, -ses, -se, -semos, -seis, -sen).",
                "formula": "3ª p. plural Indefinido (-ron) + -ra/-ras/-ra... ou -se/-ses/-se...",
                "example": "Tuvieron ➔ tuvie- ➔ tuviera / tuviese."
            },
            {
                "type": "grammar_pill",
                "title": "Acento Obrigatório em Nosotros/as",
                "rule": "Na forma nosotros/as, a vogal anterior à terminação leva SEMPRE acento gráfico: tuviéramos / tuviésemos, hiciéramos / hiciésemos, fuéramos / fuésemos.",
                "formula": "Nosotros/as ➔ sempre leva acento circunflexo/agudo na vogal anterior",
                "example": "Si habláramos más despacio, nos entenderían mejor."
            },
            {
                "type": "grammar_pill",
                "title": "Hipóteses Irrealizáveis no Presente (Si + Imperfeito Subjuntivo + Condicional)",
                "rule": "A estrutura condicional irreal no presente forma-se com Si + Imperfeito do Subjuntivo + Condicional Simple (Si tuviera dinero, compraría un coche).",
                "formula": "Si + Imperfeito de Subjuntivo + Condicional Simple",
                "example": "Si tuviera tiempo, iría al gimnasio todos los días."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como formar o Pretérito Imperfeito de Subjuntivo para 'yo' do verbo 'tener'?",
                "options": [
                    "tuviera / tuviese",
                    "tenga",
                    "tenía",
                    "tuve"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual a frase condicional hipotética correta para 'Se eu tivesse tempo, viajaria'?",
                "options": [
                    "Si tuviera tiempo, viajaría",
                    "Si tengo tiempo, viajaría",
                    "Si tendría tiempo, viajara",
                    "Si tuviese tiempo, viajo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Quisiera pedir una mesa para dos personas cerca de la ventana, por favor.'",
                "options": [
                    "Gostaria de pedir uma mesa para duas pessoas perto da janela, por favor.",
                    "Pedi uma mesa ontem.",
                    "Quero duas mesas na janela.",
                    "Não há mesas disponíveis."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Onde leva acento a forma 'nosotros' do verbo 'hacer' no Imperfeito de Subjuntivo?",
                "options": [
                    "hiciéramos / hiciésemos",
                    "hicieramos",
                    "hiciéramosno",
                    "hicíamos"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'Si yo _____ (ser) tú, hablaría directamente con el director.'",
                "options": [
                    "fuera / fuese",
                    "sea",
                    "era",
                    "fui"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Si tuviera más tiempo libre este fin de semana, viajaría a la playa con mis amigos.",
                "words": [
                    "Si",
                    "tuviera",
                    "más",
                    "tiempo",
                    "libre",
                    "este",
                    "fin",
                    "de",
                    "semana,",
                    "viajaría",
                    "a",
                    "la",
                    "playa",
                    "con",
                    "mis",
                    "amigos."
                ],
                "translation": "Se eu tivesse mais tempo livre este fim de semana, viajaria para a praia com meus amigos."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Andrés",
                "npcName": "Andrés",
                "text": "¿Qué harías si te tocara la lotería de Navidad?",
                "npcMessage": "¿Qué harías si te tocara la lotería de Navidad?",
                "translation": "O que você faria se ganhasse na loteria de Natal?"
            },
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "Si me tocara el premio, me compraría una casa en la playa y viajaría por el mundo.",
                "npcMessage": "Si me tocara el premio, me compraría una casa en la playa y viajaría por el mundo.",
                "translation": "Se eu ganhasse o prêmio, compraria uma casa na praia e viajaria pelo mundo."
            },
            {
                "speaker": "Andrés",
                "npcName": "Andrés",
                "text": "¡Ojalá tuviéramos esa suerte! Yo haría exactamente lo mismo.",
                "npcMessage": "¡Ojalá tuviéramos esa suerte! Yo haría exactamente lo mismo.",
                "translation": "Tomara que tivéssemos essa sorte! Eu faria exatamente o mesmo."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Quisiera...'?",
                "options": [
                    {
                        "label": "Gostaria de... / Quisera... (Solicitação cortês polida)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Quero agora",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) De qual forma verbal derivam as desinências do Imperfeito de Subjuntivo?",
                "options": [
                    {
                        "label": "Da 3ª pessoa do plural do Pretérito Indefinido (ex: tuvieron ➔ tuviera)",
                        "isCorrect": true,
                        "explanation": "Exato! Regra absoluta de derivação histórica."
                    },
                    {
                        "label": "Do presente do indicativo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você deseja fantasiar o que faria se soubesse falar 10 idiomas. O que diz?",
                "options": [
                    {
                        "label": "Si supiera hablar diez idiomas, trabajaría como traductor en la ONU.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Hablo diez idiomas ayer",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Me pidió que me quedara un rato más con ella.'",
                "options": [
                    {
                        "label": "Pediu-me que ficasse mais um pouco com ela.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Fiquei com ela ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) As duas terminações '-ra' (tuviera) e '-se' (tuviese) são equivalentes?",
                "options": [
                    {
                        "label": "Sim, são 100% intercambiáveis e corretas em todos os países hispânicos",
                        "isCorrect": true,
                        "explanation": "Fantástico! Sinônimos gramaticais absolutos."
                    },
                    {
                        "label": "Não, tuviese é erro",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b1_mod_24",
        "title": "24. Desafío Final B1: Debate Simulado e Apresentação",
        "level": "B1",
        "description": "Desafio final integrador do nível B1: prova de revisão com 30 exercícios cobrindo todos os módulos do nível B1.",
        "icon": "🏆",
        "stage1_context": {
            "missionTitle": "Módulo 24: Desafío Final B1: Debate Simulado e Apresentação",
            "missionDescription": "Integre todo o conhecimento acumulado no Nível B1 (Subjuntivo, Condicional, Imperativo, Conectores e Expressões) no teste de proficiência B1.",
            "audioGuide": "¡Bienvenido al Desafío Final B1! Demuestra tu autonomía comunicativa en español."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Desde mi punto de vista...",
                "Portuguese": "Do meu ponto de vista...",
                "Audio": "Desde mi punto de vista",
                "timeContext": "Introdução de opinião estruturada em debate."
            },
            {
                "type": "vocab",
                "Spanish": "En lo que respecta a...",
                "Portuguese": "No que diz respeito a...",
                "Audio": "En lo que respecta a",
                "timeContext": "Transição temática formal."
            },
            {
                "type": "vocab",
                "Spanish": "No cabe duda de que...",
                "Portuguese": "Não há dúvida de que...",
                "Audio": "No cabe duda de que",
                "timeContext": "Declaração de certeza argumentativa."
            },
            {
                "type": "vocab",
                "Spanish": "Para resumir mi presentación...",
                "Portuguese": "Para resumir minha apresentação...",
                "Audio": "Para resumir mi presentación",
                "timeContext": "Conclusão de discurso de alto nível."
            },
            {
                "type": "vocab",
                "Spanish": "Agradezco su atención",
                "Portuguese": "Agradeço sua atenção",
                "Audio": "Agradezco su atención",
                "timeContext": "Fechamento formal de apresentação."
            },
            {
                "type": "grammar_pill",
                "title": "Síntese do Uso do Modo Subjuntivo no Nível B1",
                "rule": "O Subjuntivo é a marca de proficiência B1, sendo usado para Desejos (Espero que), Dúvidas (No creo que), Valorações (Es importante que), Conselhos (Te recomiendo que) e Reações Emocionais (Me alegra que).",
                "formula": "Desejo + Dúvida + Valoração + Conselho + Emoção ➔ Subjuntivo",
                "example": "Espero que apruebes, no creo que sea difícil y me alegra que estudies."
            },
            {
                "type": "grammar_pill",
                "title": "Estruturação de Apresentações e Debates",
                "rule": "Um discurso fluído B1 organiza-se em três partes: Abertura com saudações formais, Desenvolvimento com conectores de argumentação (sin embargo, por lo tanto, además), e Conclusão com resumo de ideias.",
                "formula": "Abertura ➔ Desenvolvimento (Conectores) ➔ Conclusão",
                "example": "Estimados oyentes: Desde mi punto de vista... Sin embargo... Para concluir..."
            },
            {
                "type": "grammar_pill",
                "title": "Certificação Interna B1 (CEFR)",
                "rule": "Ao dominar o Nível B1, o aluno é capaz de compreender os pontos principais de textos claros em língua padrão, lidar com a maioria das situações em viagens e produzir textos simples e coerentes sobre temas familiares.",
                "formula": "Nível B1 CEFR = Usuario Independiente / Autónomo",
                "example": "¡Felicidades por alcanzar la autonomía en lengua española!"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como iniciar uma opinião bem fundamentada em um debate formal em espanhol?",
                "options": [
                    "Desde mi punto de vista...",
                    "Yo digo que...",
                    "Por causa de...",
                    "Chau a todos..."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual estrutura é usada para declarar certeza absoluta em um argumento?",
                "options": [
                    "No cabe duda de que...",
                    "Dudo que...",
                    "Tal vez sea...",
                    "Puede que..."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Para concluir mi presentación, me gustaría agradecerles a todos su amable atención.'",
                "options": [
                    "Para concluir minha apresentação, gostaria de agradecer a todos a sua gentil atenção.",
                    "Começo minha apresentação agora.",
                    "Não quero fazer apresentações.",
                    "A apresentação foi ontem."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual conector é ideal para introduzir uma ressalva em um debate?",
                "options": [
                    "Sin embargo",
                    "Por lo tanto",
                    "Además",
                    "Por eso"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. O que caracteriza o perfil de um falante de nível B1 do CEFR?",
                "options": [
                    "Capacidade de comunicar-se com autonomia em situações cotidianas, expressar desejos, dúvidas, hipóteses e argumentar",
                    "Conhecimento de apenas saludos",
                    "Capacidade de escrever teses doutorais sem dicionário",
                    "Nenhum conhecimento"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Desde mi punto de vista, es fundamental que sigamos aprendiendo español para comunicarnos con fluidez.",
                "words": [
                    "Desde",
                    "mi",
                    "punto",
                    "de",
                    "vista,",
                    "es",
                    "fundamental",
                    "que",
                    "sigamos",
                    "aprendiendo",
                    "español",
                    "para",
                    "comunicarnos",
                    "con",
                    "fluidez."
                ],
                "translation": "Do meu ponto de vista, é fundamental que continuemos aprendendo espanhol para nos comunicarmos com fluência."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Moderador",
                "npcName": "Moderador",
                "text": "Bienvenidos al debate sobre el futuro del trabajo remoto en la sociedad.",
                "npcMessage": "Bienvenidos al debate sobre el futuro del trabajo remoto en la sociedad.",
                "translation": "Bem-vindos ao debate sobre o futuro do trabalho remoto na sociedade."
            },
            {
                "speaker": "Participante A",
                "npcName": "Participante A",
                "text": "Desde mi punto de vista, es necesario que las empresas ofrezcan flexibilidad. Sin embargo, debemos cuidar la salud mental.",
                "npcMessage": "Desde mi punto de vista, es necesario que las empresas ofrezcan flexibilidad. Sin embargo, debemos cuidar la salud mental.",
                "translation": "Do meu ponto de vista, é necessário que as empresas ofereçam flexibilidade. No entanto, devemos cuidar da saúde mental."
            },
            {
                "speaker": "Participante B",
                "npcName": "Participante B",
                "text": "Estoy de acuerdo. Por lo tanto, si tuviéramos un equilibrio perfecto, todos ganaríamos.",
                "npcMessage": "Estoy de acuerdo. Por lo tanto, si tuviéramos un equilibrio perfecto, todos ganaríamos.",
                "translation": "Estou de acordo. Portanto, se tivéssemos um equilíbrio perfeito, todos ganharíamos."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Mod 1: Subjuntivo Regular) Qual a forma correta do Presente do Subjuntivo: 'Espero que tú _____ (hablar) con él'?",
                "options": [
                    {
                        "label": "hables",
                        "isCorrect": true,
                        "explanation": "Correto! Verbos -AR fazem -es no subjuntivo com tú."
                    },
                    {
                        "label": "hablas",
                        "isCorrect": false,
                        "explanation": "Incorreto. Hablas é indicativo."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Mod 2: Desejos) Qual expressão exige obrigatoriamente o Subjuntivo para expressar um desejo futuro?",
                "options": [
                    {
                        "label": "¡Ojalá apruebes el examen!",
                        "isCorrect": true,
                        "explanation": "Exato! Ojalá exige o modo Subjuntivo."
                    },
                    {
                        "label": "Sé que apruebas",
                        "isCorrect": false,
                        "explanation": "Incorreto. Sé é certeza (indicativo)."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Mod 3: Dúvidas) Como completar com o modo correto: 'No creo que él _____ (venir) hoy'?",
                "options": [
                    {
                        "label": "venga (Subjuntivo)",
                        "isCorrect": true,
                        "explanation": "Perfeito! 'No creo que' nega crença e exige Subjuntivo."
                    },
                    {
                        "label": "viene (Indicativo)",
                        "isCorrect": false,
                        "explanation": "Incorreto. 'Creo que' afirmativo usa vem, mas 'No creo que' usa subjuntivo."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Mod 4: Valorativa Impessoal) Complete: 'Es importante que nosotros _____ (estudiar) todos los días.'",
                "options": [
                    {
                        "label": "estudiemos",
                        "isCorrect": true,
                        "explanation": "Excelente! Estrutura impessoal de valor exige Subjuntivo."
                    },
                    {
                        "label": "estudiamos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Mod 5: Conselhos) Como aconselhar um amigo usando o subjuntivo?",
                "options": [
                    {
                        "label": "Te recomiendo que descanses más.",
                        "isCorrect": true,
                        "explanation": "Correto! Recomendação direta com Subjuntivo."
                    },
                    {
                        "label": "Te recomiendo descansar tú",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "6. (Mod 6: Sentimentos) Como expressar alegria por uma notícia de um amigo?",
                "options": [
                    {
                        "label": "Me alegra mucho que hayas conseguido el empleo.",
                        "isCorrect": true,
                        "explanation": "Exato! Me alegra que + Subjuntivo."
                    },
                    {
                        "label": "Me alegra que consigues",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "7. (Mod 7: Imperativo) Qual é o Imperativo Afirmativo e Negativo de 'hablar' para tú?",
                "options": [
                    {
                        "label": "¡Habla! / ¡No hables!",
                        "isCorrect": true,
                        "explanation": "Perfeito! Afirmativo fala (indicativo 3ª p.), negativo no hables (subjuntivo)."
                    },
                    {
                        "label": "¡Hables! / ¡No habla!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "8. (Mod 8: Colocação de Pronomes com Imperativo) Qual a posição do pronome em 'Diga a ele agora' vs 'Não diga a ele'?",
                "options": [
                    {
                        "label": "Díselo / No se lo digas",
                        "isCorrect": true,
                        "explanation": "Excelente! No afirmativo é anexo (díjelo ➔ díselo), no negativo é anterior."
                    },
                    {
                        "label": "No díselo / Se lo di",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "9. (Mod 9: Futuro Simple) Qual é o futuro irregular de 'hacer' e 'tener' para 'yo'?",
                "options": [
                    {
                        "label": "Haré / Tendré",
                        "isCorrect": true,
                        "explanation": "Correto! Hacer ➔ haré, Tener ➔ tendré."
                    },
                    {
                        "label": "Haceré / Teneré",
                        "isCorrect": false,
                        "explanation": "Incorreto. São verbos irregulares no futuro."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "10. (Mod 10: Previsão no Presente) O que significa a pergunta '¿Qué hora será?'?",
                "options": [
                    {
                        "label": "Expressa uma hipótese/dúvida sobre a hora atual no presente (Que horas serão?)",
                        "isCorrect": true,
                        "explanation": "Exato! Uso de probabilidade do Futuro Simple."
                    },
                    {
                        "label": "Pergunta a hora do futuro amanhã",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "11. (Mod 11: Condicional Simple) Como fazer um pedido de forma muito cortês em um restaurante?",
                "options": [
                    {
                        "label": "Me gustaría pedir un vaso de agua, por favor.",
                        "isCorrect": true,
                        "explanation": "Perfeito! Condicional de cortesia me gustaría."
                    },
                    {
                        "label": "Quiero agua ya",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "12. (Mod 12: Conselhos Hipotéticos) Como dar um conselho se colocando no lugar do outro?",
                "options": [
                    {
                        "label": "Yo en tu lugar hablaría con el director.",
                        "isCorrect": true,
                        "explanation": "Excelente! Yo en tu lugar / Yo que tú + Condicional."
                    },
                    {
                        "label": "Yo en tu lugar hablo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "13. (Mod 13: Estilo Indirecto B1) Como relatar no passado a frase original 'Estoy cansado'?",
                "options": [
                    {
                        "label": "Juan dijo que estaba cansado.",
                        "isCorrect": true,
                        "explanation": "Correto! Presente no discurso direto vira Imperfecto no estilo indireto."
                    },
                    {
                        "label": "Juan dijo que está cansado hoy",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "14. (Mod 14: Conectores) Qual conector expressa oposição/contraste argumentativo em textos formais?",
                "options": [
                    {
                        "label": "Sin embargo / No obstante",
                        "isCorrect": true,
                        "explanation": "Exato! Equivalem a 'no entanto / contudo'."
                    },
                    {
                        "label": "Por lo tanto",
                        "isCorrect": false,
                        "explanation": "Incorreto. Por lo tanto é consequência."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "15. (Mod 15: Aunque + Subjuntivo vs Indicativo) Qual a diferença entre 'Aunque llueve voy' e 'Aunque llueva voy'?",
                "options": [
                    {
                        "label": "'llueve' = fato real de que está chovendo; 'llueva' = hipótese (mesmo que chova)",
                        "isCorrect": true,
                        "explanation": "Perfeito! Nuance fundamental do nível B1."
                    },
                    {
                        "label": "Ambas são hipóteses futuras",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "16. (Mod 16: Reseñas) Como descrever o tema principal de um filme?",
                "options": [
                    {
                        "label": "La película trata de la historia de dos hermanos en la guerra.",
                        "isCorrect": true,
                        "explanation": "Excelente! 'Tratar de' expressa o enredo."
                    },
                    {
                        "label": "La película es de cine",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "17. (Mod 17: Emails Formais) Como iniciar e encerrar uma carta formal em espanhol?",
                "options": [
                    {
                        "label": "Estimado Sr. Pérez: ... Atentamente,",
                        "isCorrect": true,
                        "explanation": "Correto! Vocabulário de correspondência formal."
                    },
                    {
                        "label": "¡Hola amigo! ... Un beso,",
                        "isCorrect": false,
                        "explanation": "Incorreto. Esse é registro informal."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "18. (Mod 18: Entrevistas de Trabajo) Como destacar suas qualidades em uma entrevista de emprego?",
                "options": [
                    {
                        "label": "Me considero una persona proactiva y responsable.",
                        "isCorrect": true,
                        "explanation": "Exato! Linguagem de entrevista corporativa."
                    },
                    {
                        "label": "No me gusta trabajar mucho",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "19. (Mod 19: Videoconferencias) Como relatar um problema de áudio em uma reunião online?",
                "options": [
                    {
                        "label": "Disculpe, se oye mal y se ha cortado la comunicación.",
                        "isCorrect": true,
                        "explanation": "Perfeito! Vocabulário de reuniões virtuais."
                    },
                    {
                        "label": "No hay teléfono aquí",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "20. (Mod 20: Pretérito Pluscuamperfecto) Como expressar uma ação passada anterior a outra ação passada?",
                "options": [
                    {
                        "label": "Cuando llegué a la estación, el tren ya había salido.",
                        "isCorrect": true,
                        "explanation": "Excelente! Pluscuamperfecto (había salido) para o passado do passado."
                    },
                    {
                        "label": "Cuando llegué el tren sale",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "21. (Mod 21: Variaciones Léxicas) Como se diz 'carro' e 'computador' na Espanha vs América Latina?",
                "options": [
                    {
                        "label": "Coche / Ordenador (Espanha) vs Auto / Computadora (América Latina)",
                        "isCorrect": true,
                        "explanation": "Correto! Variações regionais B1."
                    },
                    {
                        "label": "Coche é apenas em inglês",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "22. (Mod 22: Expresiones Idiomáticas I) O que significa a expressão 'Esta prueba es pan comido'?",
                "options": [
                    {
                        "label": "Esta prova é muito fácil / um pão comido",
                        "isCorrect": true,
                        "explanation": "Exato! 'Ser pan comido' = ser facílimo."
                    },
                    {
                        "label": "A prova é sobre gastronomia",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "23. (Mod 23: Pretérito Imperfecto de Subjuntivo) Complete: 'Si yo _____ (tener) más dinero, viajaría por todo el mundo.'",
                "options": [
                    {
                        "label": "tuviera / tuviese",
                        "isCorrect": true,
                        "explanation": "Perfeito! Condicional irreal do presente: Si + Imperfeito Subjuntivo ➔ Condicional."
                    },
                    {
                        "label": "tengo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "24. (Mod 24: Integrador B1) Qual frase demonstra domínio das estruturas do Nível B1?",
                "options": [
                    {
                        "label": "Espero que tengas un buen viaje y que me avises tan pronto como llegues.",
                        "isCorrect": true,
                        "explanation": "¡ENHORABUENA! Combinação perfeita de Subjuntivo de desejo e conector temporal de futuro do Nível B1!"
                    },
                    {
                        "label": "Espero tú tienes buen viaje",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "25. (Revisão B1 - Subjuntivo) Qual verbo exige Subjuntivo na oração subordinada?",
                "options": [
                    {
                        "label": "Dudar (Dudo que sea verdad)",
                        "isCorrect": true,
                        "explanation": "Correto! Verbos de dúvida exigem Subjuntivo."
                    },
                    {
                        "label": "Saber (Sé que es verdad)",
                        "isCorrect": false,
                        "explanation": "Incorreto. Saber afirmativo usa Indicativo."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "26. (Revisão B1 - Futuro) Qual é a 1ª pessoa do plural do futuro do verbo 'decir'?",
                "options": [
                    {
                        "label": "Diremos",
                        "isCorrect": true,
                        "explanation": "Exato! Decir ➔ diré, dirás, diremos."
                    },
                    {
                        "label": "Deciremos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "27. (Revisão B1 - Imperativo) Como dar uma ordem negativa a um colega (tú)?",
                "options": [
                    {
                        "label": "¡No comas tan rápido!",
                        "isCorrect": true,
                        "explanation": "Perfeito! Imperativo negativo usa Subjuntivo no comas."
                    },
                    {
                        "label": "¡No comes tan rápido!",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "28. (Revisão B1 - Expressões) O que significa 'Estar en las nubes'?",
                "options": [
                    {
                        "label": "Estar distraído / pensando em outra coisa",
                        "isCorrect": true,
                        "explanation": "Excelente! Expressão idiomática de distração."
                    },
                    {
                        "label": "Viajar de avião",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "29. (Revisão B1 - Redação) Qual locução introduz uma conclusão formal em um ensaio B1?",
                "options": [
                    {
                        "label": "En conclusión / Por consiguiente",
                        "isCorrect": true,
                        "explanation": "Correto! Conectores de encerramento acadêmico."
                    },
                    {
                        "label": "Primero que nada",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "30. (Mod 24: Prova de Certificação B1) Qual a sua conquista ao finalizar os 24 módulos do Nível B1?",
                "options": [
                    {
                        "label": "Capacidade de expressar desejos, dúvidas, hipóteses, recomendações, opiniões e narrar fatos passados e futuros com fluidez independente!",
                        "isCorrect": true,
                        "explanation": "¡Felicidades! Conquista fantástica de nível intermediário B1!"
                    },
                    {
                        "label": "Nenhuma conquista",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CURSO_ESPANHOL_B1_DADOS;
}
if (typeof window !== 'undefined') {
    window.CURSO_ESPANHOL_B1_DADOS = CURSO_ESPANHOL_B1_DADOS;
}
