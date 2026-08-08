/**
 * Banco de Dados Central do Curso de Espanhol - Nível B2 (Conteúdo Pedagógico Autêntico)
 */
const CURSO_ESPANHOL_B2_DADOS = [
    {
        "id": "es_b2_mod_1",
        "title": "1. Condicionais Irreais do Passado",
        "level": "B2",
        "description": "Forme hipóteses no passado que não se concretizaram com Si hubiera sabido, habría ido.",
        "icon": "⏮️",
        "stage1_context": {
            "missionTitle": "Módulo 1: Condicionais Irreais do Passado",
            "missionDescription": "Domine a estrutura de condicional irreal do passado para expressar arrependimentos, hipóteses contrafatuais e desfechos alternativos.",
            "audioGuide": "Si hubiera sabido la verdad, no habría tomado esa decisión. Si me hubieras llamado, habría ido."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Si hubiera / hubiese sabido",
                "Portuguese": "Se eu soubesse / tivesse sabido",
                "Audio": "Si hubiera sabido",
                "timeContext": "Hipótese no mais-que-perfeito de subjuntivo."
            },
            {
                "type": "vocab",
                "Spanish": "Habría ido",
                "Portuguese": "Teria ido",
                "Audio": "Habría ido",
                "timeContext": "Resultado contrafatual no condicional composto."
            },
            {
                "type": "vocab",
                "Spanish": "Si me hubieras avisado",
                "Portuguese": "Se você tivesse me avisado",
                "Audio": "Si me hubieras avisado",
                "timeContext": "Hipótese de aviso prévio no passado."
            },
            {
                "type": "vocab",
                "Spanish": "Habríamos conseguido",
                "Portuguese": "Teríamos conseguido",
                "Audio": "Habríamos conseguido",
                "timeContext": "Resultado coletivo hipotético."
            },
            {
                "type": "vocab",
                "Spanish": "De haberlo sabido...",
                "Portuguese": "Se eu soubesse... (Infinitivo composto)",
                "Audio": "De haberlo sabido",
                "timeContext": "Fórmula literária/formal de hipótese passada."
            },
            {
                "type": "grammar_pill",
                "title": "Formação da Condicional Irreal do Passado",
                "rule": "Utiliza-se a estrutura Si + Pretérito Pluscuamperfecto de Subjuntivo (hubiera/hubiese + participio) na oração subordinada e Condicional Compuesto (habría + participio) na oração principal.",
                "formula": "Si + hubiera/hubiese + participio ➔ habría + participio",
                "example": "Si hubiera estudiado, habría aprobado el examen."
            },
            {
                "type": "grammar_pill",
                "title": "Expressão de Arrependimento e Contrafactualidade",
                "rule": "Expressa acontecimentos que NÃO ocorreram no passado e suas consequências impossíveis (Si hubieras estudiado más, habrías aprobado el examen = Você não estudou e não passou).",
                "formula": "Hipótese Passada Não Ocorrida ➔ Consequência Impossível",
                "example": "Si no hubiera llovido, habríamos ido al parque."
            },
            {
                "type": "grammar_pill",
                "title": "Variante com Infinitivo Composto (De haber + participio)",
                "rule": "Na linguagem formal e literária B2, a estrutura Si hubiera + participio pode ser substituída por De haber + participio: De haber sabido el precio, no lo habría comprado.",
                "formula": "De haber + participio ➔ Condicional Compuesto",
                "example": "De haber tenido tiempo, habría asistido a la conferencia."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como completar a oração hipotética passada: 'Si yo _____ (saber) la verdad, te la habría contado'?",
                "options": [
                    "hubiera sabido / hubiese sabido",
                    "había sabido",
                    "supiera",
                    "sabía"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual a forma correta do verbo na oração principal contrafatual: 'Si hubiéramos salido antes, _____ (llegar) a tiempo'?",
                "options": [
                    "habríamos llegado",
                    "hubiéramos llegado",
                    "llegábamos",
                    "llegaremos"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'De haber sabido que venías a Madrid, te habría reservado una habitación en mi hotel.'",
                "options": [
                    "Se eu soubesse que você vinha a Madri, teria reservado um quarto para você no meu hotel.",
                    "Sei que você veio a Madri ontem.",
                    "Reservei o hotel para você ontem.",
                    "Não venha a Madri."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a interpretação da frase 'Si hubieras venido ayer, habrías conocido a mi hermano'?",
                "options": [
                    "A pessoa NÃO veio ontem e por isso NÃO conheceu o irmão (hipótese irreal passada)",
                    "A pessoa veio ontem e conheceu o irmão",
                    "A pessoa virá amanhã",
                    "O irmão não estava lá"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a frase contrafatual: 'Si no _____ (llover) tanto el domingo, habríamos ido a la excursión.'",
                "options": [
                    "hubiera llovido",
                    "lloviera",
                    "había llovido",
                    "llovió"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Si me hubieras llamado a tiempo, habría ido a la fiesta contigo.",
                "words": [
                    "Si",
                    "me",
                    "hubieras",
                    "llamado",
                    "a",
                    "tiempo,",
                    "habría",
                    "ido",
                    "a",
                    "la",
                    "fiesta",
                    "contigo."
                ],
                "translation": "Se você tivesse me ligado a tempo, eu teria ido à festa com você."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¡Hola Lucía! No te vi ayer en la conferencia de tecnología.",
                "npcMessage": "¡Hola Lucía! No te vi ayer en la conferencia de tecnología.",
                "translation": "Olá Lucía! Não te vi ontem na conferência de tecnologia."
            },
            {
                "speaker": "Lucía",
                "npcName": "Lucía",
                "text": "Es que se me rompió el coche por la mañana. Si me hubieras llamado, habría ido contigo.",
                "npcMessage": "Es que se me rompió el coche por la mañana. Si me hubieras llamado, habría ido contigo.",
                "translation": "É que meu carro quebrou de manhã. Se você tivesse me ligado, eu teria ido com você."
            },
            {
                "speaker": "Carlos",
                "npcName": "Carlos",
                "text": "¡Qué pena! De haberlo sabido, te habría pasado a recoger por tu casa.",
                "npcMessage": "¡Qué pena! De haberlo sabido, te habría pasado a recoger por tu casa.",
                "translation": "Que pena! Se eu soubesse, teria passado para te buscar na sua casa."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'De haberlo sabido...'?",
                "options": [
                    {
                        "label": "Se eu soubesse... / Tendo eu sabido disso...",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Sabendo que vou...",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Quais são os dois tempos verbais que compõem a estrutura condicional irreal do passado?",
                "options": [
                    {
                        "label": "Pretérito Pluscuamperfecto de Subjuntivo + Condicional Compuesto",
                        "isCorrect": true,
                        "explanation": "Exato! Combinação gramatical clássica de hipótese contrafatual."
                    },
                    {
                        "label": "Presente de indicativo + futuro",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Seu amigo perdeu o voo porque não usou o despertador. O que você comenta?",
                "options": [
                    {
                        "label": "Si hubieras puesto el despertador, no habrías perdido el vuelo.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Puse el despertador ayer",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Si hubiéramos tenido más presupuesto, habríamos contratado a más profesionales.'",
                "options": [
                    {
                        "label": "Se tivéssemos tido mais orçamento, teríamos contratado mais profissionais.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Contratamos muitos profissionais ano passado.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) As formas 'hubiera sabido' e 'hubiese sabido' têm alguma diferença de significado?",
                "options": [
                    {
                        "label": "Não, são 100% equivalentes e intercambiáveis",
                        "isCorrect": true,
                        "explanation": "Fantástico! Sinônimos absolutos no subjuntivo composto."
                    },
                    {
                        "label": "Sim, hubiese é futuro",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_2",
        "title": "2. Orações Relativas com Subjuntivo",
        "level": "B2",
        "description": "Busque elementos hipotéticos ou inexistentes com Busco un piso que tenga balcón y sea luminoso.",
        "icon": "🔍",
        "stage1_context": {
            "missionTitle": "Módulo 2: Orações Relativas com Subjuntivo",
            "missionDescription": "Aprenda a alternar entre o Indicativo (antecedente conhecido/real) e o Subjuntivo (antecedente indeterminado/inexistente).",
            "audioGuide": "Conozco a una persona que habla tres idiomas (Indicativo) vs Busco a alguien que hable tres idiomas (Subjuntivo)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Busco un piso que tenga...",
                "Portuguese": "Busco um apartamento que tenha...",
                "Audio": "Busco un piso que tenga",
                "timeContext": "Busca de imóvel com requisitos indeterminados."
            },
            {
                "type": "vocab",
                "Spanish": "Necesito a alguien que sepa...",
                "Portuguese": "Preciso de alguém que saiba...",
                "Audio": "Necesito a alguien que sepa",
                "timeContext": "Requisito de perfil profissional indeterminado."
            },
            {
                "type": "vocab",
                "Spanish": "No hay nadie que pueda...",
                "Portuguese": "Não há ninguém que possa...",
                "Audio": "No hay nadie que pueda",
                "timeContext": "Declaração de inexistência com subjuntivo."
            },
            {
                "type": "vocab",
                "Spanish": "Cualquiera que desee...",
                "Portuguese": "Qualquer um que deseje...",
                "Audio": "Cualquiera que desee",
                "timeContext": "Pronome indefinido concessivo."
            },
            {
                "type": "vocab",
                "Spanish": "El lugar que elijas",
                "Portuguese": "O lugar que você escolher",
                "Audio": "El lugar que elijas",
                "timeContext": "Escolha hipotética dependente do interlocutor."
            },
            {
                "type": "grammar_pill",
                "title": "Antecedente Conhecido (Indicativo) vs. Indeterminado (Subjuntivo)",
                "rule": "Se o antecedente da oração relativa é uma pessoa ou coisa real e conhecida pelo falante, usa-se o Indicativo (Busco el libro que me recomendaste). Se for hipotético, desconhecido ou indefinido, usa-se o Subjuntivo (Busco un libro que sea interesante).",
                "formula": "Antecedente Real ➔ Indicativo | Antecedente Indeterminado ➔ Subjuntivo",
                "example": "Tengo un coche que consume poco (real) vs Quiero un coche que consuma poco (desejado)."
            },
            {
                "type": "grammar_pill",
                "title": "Antecedentes Negados ou Inexistentes (No hay nadie que...)",
                "rule": "Quando o antecedente é negado ou declarado inexistente, EXIGE-SE obrigatoriamente o Subjuntivo (No hay nadie en la empresa que hable japonés).",
                "formula": "No hay nadie / nada / ninguno + que + Subjuntivo",
                "example": "No conozco a nadie que entienda esta ley."
            },
            {
                "type": "grammar_pill",
                "title": "Pronomes Indefinidos Concessivos (Cualquiera que / Dondequiera que)",
                "rule": "Expressões indefinidas como cualquiera que (qualquer um que) e dondequiera que (onde quer que) exigem sempre o verbo subordinado no Subjuntivo (Cualquiera que quiera participar debe registrarse).",
                "formula": "Cualquiera / Dondequiera + que + Subjuntivo",
                "example": "Dondequiera que vayas, te recordaré."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como completar a frase de busca por um candidato indeterminado: 'Necesitamos un empleado que _____ (hablar) inglés y alemán'?",
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
                "question": "2. Qual a forma correta do verbo após um antecedente negado: 'No hay nada en este restaurante que me _____ (gustar)'?",
                "options": [
                    "guste (Subjuntivo)",
                    "gusta",
                    "gustar",
                    "gustó"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Conozco a un médico que vive en este barrio y trabaja en el hospital central.'",
                "options": [
                    "Conheço um médico que mora neste bairro e trabalha no hospital central.",
                    "Busco um médico que more no bairro.",
                    "Não há médicos no hospital.",
                    "O médico mudou de bairro."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a diferença entre 'Busco al guía que habla español' e 'Busco a un guía que hable español'?",
                "options": [
                    "'habla' = Sei quem é o guia específico; 'hable' = Procuro qualquer guia que saiba espanhol",
                    "Ambas referem-se ao mesmo guia",
                    "Ambas são hipóteses",
                    "Não há diferença"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'Cualquiera que _____ (tener) dudas puede preguntar al profesor.'",
                "options": [
                    "tenga (Subjuntivo)",
                    "tiene",
                    "tuviera",
                    "teniendo"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Busco un piso que tenga balcón, sea céntrico y no cueste demasiado dinero.",
                "words": [
                    "Busco",
                    "un",
                    "piso",
                    "que",
                    "tenga",
                    "balcón,",
                    "sea",
                    "céntrico",
                    "y",
                    "no",
                    "cueste",
                    "demasiado",
                    "dinero."
                ],
                "translation": "Busco um apartamento que tenha sacada, seja central e não custe dinheiro demais."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "Hola. Busco una casa que tenga jardín amplio y esté cerca de la playa.",
                "npcMessage": "Hola. Busco una casa que tenga jardín amplio y esté cerca de la playa.",
                "translation": "Olá. Busco uma casa que tenha jardim amplo e esteja perto da praia."
            },
            {
                "speaker": "Agente",
                "npcName": "Agente",
                "text": "Tengo justamente una propiedad que cumple con todos sus requisitos.",
                "npcMessage": "Tengo justamente una propiedad que cumple con todos sus requisitos.",
                "translation": "Tenho justamente uma propriedade que cumpre com todos os seus requisitos."
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "¡Excelente! ¿Hay alguna otra que sea un poco más económica?",
                "npcMessage": "¡Excelente! ¿Hay alguna otra que sea un poco más económica?",
                "translation": "Excelente! Há alguma outra que seja um pouco mais econômica?"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Busco un piso que tenga balcón'?",
                "options": [
                    {
                        "label": "Procuro um apartamento que tenha sacada/varanda",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Moro num apartamento com varanda",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que usamos o subjuntivo em 'No hay nadie que sepa la solución'?",
                "options": [
                    {
                        "label": "Porque o antecedente 'nadie' é negado/inexistente",
                        "isCorrect": true,
                        "explanation": "Exato! Regra do antecedente inexistente."
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
                "question": "3. (Contexto) Você precisa contratar um tradutor qualquer que saiba chinês. Como faz o anúncio?",
                "options": [
                    {
                        "label": "Se busca un traductor que sepa chino mandarín.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Contraté al traductor que sabe chino",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Cualquiera que visite esta ciudad quedará enamorado de su arquitectura.'",
                "options": [
                    {
                        "label": "Qualquer um que visite esta cidade ficará apaixonado pela sua arquitetura.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Visitei a cidade ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual frase está gramaticalmente INCORRETA?",
                "options": [
                    {
                        "label": "No conozco a nadie que habla japonés (Incorreto: deve ser 'hable')",
                        "isCorrect": true,
                        "explanation": "Fantástico! Antecedente negado exige subjuntivo hable."
                    },
                    {
                        "label": "No conozco a nadie que hable japonés",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_3",
        "title": "3. Subjuntivo em Orações Temporais e Modais",
        "level": "B2",
        "description": "Conecte ações futuras e comparações hipotéticas com antes de que, tan pronto como, como si.",
        "icon": "⏳",
        "stage1_context": {
            "missionTitle": "Módulo 3: Subjuntivo em Orações Temporais e Modais",
            "missionDescription": "Domine os conectores temporais de futuro e as comparações irrealizáveis no modo subjuntivo.",
            "audioGuide": "Tan pronto como llegues a casa, avísame. Habla como si lo supiera todo."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Tan pronto como...",
                "Portuguese": "Assim que... / Logo que...",
                "Audio": "Tan pronto como",
                "timeContext": "Conector temporal de iminência futura."
            },
            {
                "type": "vocab",
                "Spanish": "Antes de que...",
                "Portuguese": "Antes que...",
                "Audio": "Antes de que",
                "timeContext": "Conector temporal que exige subjuntivo sempre."
            },
            {
                "type": "vocab",
                "Spanish": "Hasta que...",
                "Portuguese": "Até que...",
                "Audio": "Hasta que",
                "timeContext": "Conector de limite temporal."
            },
            {
                "type": "vocab",
                "Spanish": "Como si fuera...",
                "Portuguese": "Como se fosse...",
                "Audio": "Como si fuera",
                "timeContext": "Comparação modal irrealizável."
            },
            {
                "type": "vocab",
                "Spanish": "Sin que nadie se entere",
                "Portuguese": "Sem que ninguém saiba/perceba",
                "Audio": "Sin que nadie se entere",
                "timeContext": "Conector modal privativo."
            },
            {
                "type": "grammar_pill",
                "title": "Conectores Temporais de Futuro (Tan pronto como / Cuando / Hasta que + Subjuntivo)",
                "rule": "Quando conectores como cuando, tan pronto como, hasta que e en cuanto referem-se a uma ação futura que ainda não ocorreu, o verbo subordinado DEVE ir no Presente do Subjuntivo (En cuanto termine el informe, te llamaré).",
                "formula": "Conector Temporal + [Ação Futura] ➔ Presente de Subjuntivo",
                "example": "Te avisaré tan pronto como llegue al aeropuerto."
            },
            {
                "type": "grammar_pill",
                "title": "A Conjunção 'Antes de que' (Subjuntivo Sempre)",
                "rule": "Diferente de outros conectores temporais, Antes de que EXIGE SEMPRE o Subjuntivo, seja a ação futura ou passada (Llegamos antes de que empezara la película / Avísame antes de que salgas).",
                "formula": "Antes de que + Subjuntivo (Sempre)",
                "example": "Limpia la mesa antes de que vengan los invitados."
            },
            {
                "type": "grammar_pill",
                "title": "A Locução Modal Irreal 'Como si + Imperfeito Subjuntivo'",
                "rule": "A locução como si (como se) introduz uma comparação irreal e exige SEMPRE o Pretérito Imperfeito de Subjuntivo (Habla como si fuera el dueño de la empresa).",
                "formula": "Como si + Imperfeito de Subjuntivo",
                "example": "Gasta dinero como si fuera millonario."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como completar a oração temporal de futuro: 'Tan pronto como _____ (llegar) a casa, te enviaré un mensaje'?",
                "options": [
                    "llegues (Subjuntivo)",
                    "llegas",
                    "llegaste",
                    "llegar"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual tempo verbal DEVE acompanhar a expressão modal 'como si'?",
                "options": [
                    "Pretérito Imperfeito de Subjuntivo (ex: como si fuera)",
                    "Presente do indicativo",
                    "Futuro simple",
                    "Imperativo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Debemos terminar el proyecto antes de que sea demasiado tarde.'",
                "options": [
                    "Devemos terminar o projeto antes que seja tarde demais.",
                    "Terminamos o projeto antes de ser tarde.",
                    "O projeto terminou tarde ontem.",
                    "Não terminaremos o projeto."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a diferença entre 'Cuando voy a Madrid, me quedo en ese hotel' e 'Cuando vaya a Madrid, me quedaré en ese hotel'?",
                "options": [
                    "'voy' = Hábito habitual no presente; 'vaya' = Viagem futura planejada",
                    "São idênticas",
                    "Ambas são passadas",
                    "Não há diferença"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a oração privativa: 'Salió de la oficina sin que nadie lo _____ (ver).'?",
                "options": [
                    "viera / viese (Subjuntivo)",
                    "vio",
                    "ve",
                    "visto"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Tan pronto como llegues al hotel, envíame un mensaje antes de que salgas a cenar.",
                "words": [
                    "Tan",
                    "pronto",
                    "como",
                    "llegues",
                    "al",
                    "hotel,",
                    "envíame",
                    "un",
                    "mensaje",
                    "antes",
                    "de",
                    "que",
                    "salgas",
                    "a",
                    "cenar."
                ],
                "translation": "Assim que chegar ao hotel, envie-me uma mensagem antes que saia para jantar."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "¿Cuándo me entregarás el informe de ventas, Mateo?",
                "npcMessage": "¿Cuándo me entregarás el informe de ventas, Mateo?",
                "translation": "Quando você vai me entregar o relatório de vendas, Mateo?"
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "Tan pronto como el departamento contable me envíe los datos, te lo mandaré.",
                "npcMessage": "Tan pronto como el departamento contable me envíe los datos, te lo mandaré.",
                "translation": "Assim que o departamento contábil me enviar os dados, eu o mandarei para você."
            },
            {
                "speaker": "Sofía",
                "npcName": "Sofía",
                "text": "Perfecto. Por favor, dázmelo antes de que empiece la reunión de las tres.",
                "npcMessage": "Perfecto. Por favor, dázmelo antes de que empiece la reunión de las tres.",
                "translation": "Perfeito. Por favor, dê-mo antes que comece a reunião das três."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Tan pronto como...'?",
                "options": [
                    {
                        "label": "Assim que... / Logo que...",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Muito tarde",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que se usa o subjuntivo após 'cuando' na frase 'Cuando sea mayor viajaré'?",
                "options": [
                    {
                        "label": "Porque a oração se refere a um evento futuro que ainda não se concretizou",
                        "isCorrect": true,
                        "explanation": "Exato! Regra da referência temporal futura."
                    },
                    {
                        "label": "Porque é um hábito",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer dizer que seu colega gasta dinheiro como se fosse rico. O que diz?",
                "options": [
                    {
                        "label": "Gasta dinero como si fuera rico.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Es rico y gasta",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Esperaremos aquí hasta que pare de llover por completo.'",
                "options": [
                    {
                        "label": "Esperaremos aqui até que pare de chover por completo.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Parou de chover e fomos embora.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual a diferença entre 'antes de comer' e 'antes de que comas'?",
                "options": [
                    {
                        "label": "'antes de comer' = Infinitivo (mesmo sujeito); 'antes de que comas' = Subjuntivo (sujeitos diferentes)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Presença da conjunção 'que' altera a estrutura."
                    },
                    {
                        "label": "São idênticas",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_4",
        "title": "4. Usos Avançados de \"Se\"",
        "level": "B2",
        "description": "Domine a estrutura de ações não intencionais com Se me cayeron las llaves e Se le olvidó.",
        "icon": "🔑",
        "stage1_context": {
            "missionTitle": "Módulo 4: Usos Avançados de \"Se\"",
            "missionDescription": "Aprenda o uso idiomático do 'Se involuntário/acidental' para relatar imprevistos sem culpar diretamente o sujeito.",
            "audioGuide": "No rompí el vaso ➔ Se me rompió el vaso. Se me olvidó la reunión por completo."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Se me cayó",
                "Portuguese": "Caiu-me / Deixei cair sem querer",
                "Audio": "Se me cayó",
                "timeContext": "Ação acidental no singular."
            },
            {
                "type": "vocab",
                "Spanish": "Se me olvidó",
                "Portuguese": "Esqueci-me sem querer",
                "Audio": "Se me olvidó",
                "timeContext": "Esquecimento não intencional."
            },
            {
                "type": "vocab",
                "Spanish": "Se le rompió",
                "Portuguese": "Quebrou-se-lhe",
                "Audio": "Se le rompió",
                "timeContext": "Acidente doméstico com objeto de 3ª pessoa."
            },
            {
                "type": "vocab",
                "Spanish": "Se nos perdió",
                "Portuguese": "Perdeu-se-nos",
                "Audio": "Se nos perdió",
                "timeContext": "Perda acidental coletiva."
            },
            {
                "type": "vocab",
                "Spanish": "Se te quedó en casa",
                "Portuguese": "Ficou-te em casa / Esqueceu no carro",
                "Audio": "Se te quedó en casa",
                "timeContext": "Objeto deixado involuntariamente para trás."
            },
            {
                "type": "grammar_pill",
                "title": "A Estrutura do 'Se Involuntário' (Se + Pronome OI + Verbo + Objeto)",
                "rule": "Em espanhol, quando um acidente ou esquecimento acontece sem intenção, usa-se a construção pasiva acidental: Se + [me/te/le/nos/os/les] + [Verbo em 3ª pessoa] + [Objeto]. O verbo concorda com o objeto que caiu/quebrou (Se me cayó la llave [singular] vs Se me cayeron las llaves [plural]).",
                "formula": "SE + [OI: me/te/le...] + Verbo 3ª p. + Sujeito Pasivo",
                "example": "Se me cayeron las gafas al suelo."
            },
            {
                "type": "grammar_pill",
                "title": "Verbos Frequentes de Ação Acidental",
                "rule": "Os verbos mais comuns nesta construção são caer (cair), olvidar (esquecer), romper (quebrar), perder (perder), quedar (esquecer/deixar para trás) e quemar (queimar).",
                "formula": "Se me + cayó / olvidó / rompió / perdió / quedó",
                "example": "Se me quedó el ordenador en la oficina."
            },
            {
                "type": "grammar_pill",
                "title": "Efeito Pragmático de Atenuação de Culpa",
                "rule": "Em vez de dizer 'Rompí la taza' (Eu quebrei a xícara - culpa direta), o nativo diz 'Se me rompió la taza' (A xícara se me quebrou - o evento aconteceu acidentalmente comigo).",
                "formula": "Culpa direta (Rompí) vs Evento Involuntário (Se me rompió)",
                "example": "Disculpa la tardanza, se me olvidó la llave."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como relatar acidentalmente que suas chaves caíram no chão em espanhol?",
                "options": [
                    "Se me cayeron las llaves al suelo",
                    "Yo caí las llaves",
                    "Me caí las llaves",
                    "Se cayeron a mí las llaves"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como concordar o verbo na frase involuntária 'Esqueci o documento' vs 'Esqueci os documentos'?",
                "options": [
                    "Se me olvidó el documento (singular) / Se me olvidaron los documentos (plural)",
                    "Se me olvidó para ambos",
                    "Se me olvidaron el documento",
                    "Yo me olvidé los documentos"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: '¡Vaya! Se me quedó el teléfono móvil encima de la mesa de la cocina.'",
                "options": [
                    "Poxa! Esqueci meu telefone celular em cima da mesa da cozinha.",
                    "Comprei um celular novo.",
                    "O celular quebrou na cozinha.",
                    "Deixei o celular na oficina."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a intenção pragmática do uso de 'Se me rompió el vaso' em vez de 'Rompí el vaso'?",
                "options": [
                    "Atenuar a responsabilidade direta, enfatizando que foi um acidente não intencional",
                    "Dizer que quebrou de propósito",
                    "Dizer que o copo era velho",
                    "Não há diferença"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a frase involuntária: 'A Juan _____ (quemar) la comida porque estaba distraído.'",
                "options": [
                    "se le quemó",
                    "se quemó le",
                    "le quemó",
                    "se quemó"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Disculpe el retraso, es que se me cayeron las llaves del coche al suelo y no las encontraba.",
                "words": [
                    "Disculpe",
                    "el",
                    "retraso,",
                    "es",
                    "que",
                    "se",
                    "me",
                    "cayeron",
                    "las",
                    "llaves",
                    "del",
                    "coche",
                    "al",
                    "suelo",
                    "y",
                    "no",
                    "las",
                    "encontraba."
                ],
                "translation": "Desculpe o atraso, é que minhas chaves do carro caíram no chão e eu não as encontrava."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Elena",
                "npcName": "Elena",
                "text": "¿Por qué no me llamaste ayer a la hora acordada, Mateo?",
                "npcMessage": "¿Por qué no me llamaste ayer a la hora acordada, Mateo?",
                "translation": "Por que você não me ligou ontem na hora combinada, Mateo?"
            },
            {
                "speaker": "Mateo",
                "npcName": "Mateo",
                "text": "¡Lo siento muchísimo! Es que se me olvidó por completo con el trabajo.",
                "npcMessage": "¡Lo siento muchísimo! Es que se me olvidó por completo con el trabajo.",
                "translation": "Sinto muitíssimo! É que me esqueci por completo com o trabalho."
            },
            {
                "speaker": "Elena",
                "npcName": "Elena",
                "text": "Bueno, no pasa nada. A mí también se me quedan las cosas a veces.",
                "npcMessage": "Bueno, no pasa nada. A mí también se me quedan las cosas a veces.",
                "translation": "Bem, não tem problema. Eu também esqueço as coisas às vezes."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Se me olvidó'?",
                "options": [
                    {
                        "label": "Esqueci-me sem querer / Ocorreu-me um esquecimento",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Lembrei perfeitamente",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Com o que concorda o verbo na construção 'Se me cayeron los platos'?",
                "options": [
                    {
                        "label": "Concorda com o objeto paciente 'los platos' (3ª pessoa do plural)",
                        "isCorrect": true,
                        "explanation": "Exato! Regra de concordância do Se involuntário."
                    },
                    {
                        "label": "Concorda com o pronome me",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você deixou a carteira em casa sem querer ao sair. O que diz em espanhol?",
                "options": [
                    {
                        "label": "Se me quedó la cartera en casa.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Tiré la cartera",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'A mi hermano se le rompió la pantalla del ordenador ayer.'",
                "options": [
                    {
                        "label": "A tela do computador do meu irmão quebrou ontem (acidentalmente).",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Meu irmão vendeu a tela ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual pronome indireto usamos quando a ação acidental acontece com nós (nosotros)?",
                "options": [
                    {
                        "label": "Nos (ex: Se nos perdió la maleta en el aeropuerto)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Pronome nos correto."
                    },
                    {
                        "label": "Les",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_5",
        "title": "5. Negociación y Resolución de Conflictos",
        "level": "B2",
        "description": "Negocie com diplomacia corporativa usando proponer alternativas, ceder diplomáticamente e contrapropuestas.",
        "icon": "🤝",
        "stage1_context": {
            "missionTitle": "Módulo 5: Negociación y Resolución de Conflictos",
            "missionDescription": "Domine a linguagem executiva de mediação, negociação de cláusulas e obtenção de acordos mútuos.",
            "audioGuide": "Comprendemos su postura; no obstante, proponemos una alternativa. Estaríamos dispuestos a ceder si..."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Comprendemos su postura",
                "Portuguese": "Compreendemos sua posição",
                "Audio": "Comprendemos su postura",
                "timeContext": "Validação diplomática do interlocutor."
            },
            {
                "type": "vocab",
                "Spanish": "Estaríamos dispuestos a ceder...",
                "Portuguese": "Estaríamos dispostos a ceder...",
                "Audio": "Estaríamos dispuestos a ceder",
                "timeContext": "Disposição para concessões condicionadas."
            },
            {
                "type": "vocab",
                "Spanish": "Llegar a un acuerdo mutuo",
                "Portuguese": "Chegar a um acordo mútuo",
                "Audio": "Llegar a un acuerdo mutuo",
                "timeContext": "Objetivo final de consenso."
            },
            {
                "type": "vocab",
                "Spanish": "Proponer una alternativa viable",
                "Portuguese": "Propor uma alternativa viável",
                "Audio": "Proponer una alternativa",
                "timeContext": "Apresentação de contraproposta."
            },
            {
                "type": "vocab",
                "Spanish": "Un punto de encuentro",
                "Portuguese": "Um ponto de convergência / consenso",
                "Audio": "Un punto de encuentro",
                "timeContext": "Termo de conciliação."
            },
            {
                "type": "grammar_pill",
                "title": "Reconhecimento da Posição do Outro com 'No obstante'",
                "rule": "Em negociações formais, começa-se validando o argumento da outra parte antes de apresentar a contraproposta: Entendemos su punto de vista; no obstante, debemos ajustar el presupuesto.",
                "formula": "Validación + ; no obstante, + Contraproposta",
                "example": "Comprendemos su solicitud; no obstante, es inviable financieramente."
            },
            {
                "type": "grammar_pill",
                "title": "Condicionamento de Concessões (Estaríamos dispuestos a + Infinitivo + si)",
                "rule": "Para ceder em uma negociação impondo uma contrapartida, usa-se o Condicional: Estaríamos dispuestos a reducir el plazo si ustedes asumen los costes de transporte.",
                "formula": "Estaríamos dispuestos a + Infinitivo + si + Subjuntivo/Indicativo",
                "example": "Estaríamos dispuestos a ceder si amplían el contrato."
            },
            {
                "type": "grammar_pill",
                "title": "Fórmulas de Fechamento de Acordo Corporativo",
                "rule": "Frases para selar a negociação: Llegar a un punto de encuentro, Firmar el acuerdo en estos términos, Dar por resuelto el conflicto de forma satisfactoria para ambas partes.",
                "formula": "Llegar a un punto de encuentro / Firmar el acuerdo",
                "example": "Hemos llegado a un acuerdo beneficioso para ambas partes."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como expressar diplomacia ao discordar em uma reunião de negociação corporativa?",
                "options": [
                    "Comprendemos su postura; no obstante, proponemos una alternativa",
                    "No estoy para nada de acuerdo",
                    "Eso es absurdo",
                    "No me importa su opinión"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual estrutura é ideal para oferecer uma concessão condicionada?",
                "options": [
                    "Estaríamos dispuestos a reducir el precio si firman por dos años",
                    "No vamos a ceder nada",
                    "Queremos todo gratis",
                    "Exigimos descuento ya"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Tras horas de negociación, logramos llegar a un punto de encuentro satisfactorio para ambas partes.'",
                "options": [
                    "Após horas de negociação, conseguimos chegar a um ponto de consenso satisfatório para ambas as partes.",
                    "Cancelamos a reunião de negociação.",
                    "Não houve acordo nas negociações.",
                    "A negociação começou às duas horas."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual palavra formal equivale a 'todavia / no entanto' em negociações executivas?",
                "options": [
                    "No obstante",
                    "Por eso",
                    "Además",
                    "Porque"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a fórmula de encerramento: 'Si aceptan la cláusula, podemos _____ (dar) por resuelto el conflicto.'",
                "options": [
                    "dar",
                    "dado",
                    "dando",
                    "diéramos"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Comprendemos su postura; no obstante, estaríamos dispuestos a ceder si ajustamos los plazos de entrega.",
                "words": [
                    "Comprendemos",
                    "su",
                    "postura;",
                    "no",
                    "obstante,",
                    "estaríamos",
                    "dispuestos",
                    "a",
                    "ceder",
                    "si",
                    "ajustamos",
                    "los",
                    "plazos",
                    "de",
                    "entrega."
                ],
                "translation": "Compreendemos sua posição; no entanto, estaríamos dispostos a ceder se ajustarmos os prazos de entrega."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Director A",
                "npcName": "Director A",
                "text": "Entendemos sus exigencias de precio; no obstante, el coste de producción es muy elevado.",
                "npcMessage": "Entendemos sus exigencias de precio; no obstante, el coste de producción es muy elevado.",
                "translation": "Entendemos suas exigências de preço; no entanto, o custo de produção é muito elevado."
            },
            {
                "speaker": "Director B",
                "npcName": "Director B",
                "text": "Estaríamos dispuestos a revisar la tarifa si nos ofrecen garantía de distribución prioritaria.",
                "npcMessage": "Estaríamos dispuestos a revisar la tarifa si nos ofrecen garantía de distribución prioritaria.",
                "translation": "Estaríamos dispostos a revisar a tarifa se nos oferecerem garantia de distribuição prioritária."
            },
            {
                "speaker": "Director A",
                "npcName": "Director A",
                "text": "Nos parece un punto de encuentro justo. Firmemos el acuerdo.",
                "npcMessage": "Nos parece un punto de encuentro justo. Firmemos el acuerdo.",
                "translation": "Parece-nos um ponto de consenso justo. Assinemos o acordo."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Un punto de encuentro' em negociação?",
                "options": [
                    {
                        "label": "Um ponto de consenso / acordo mutuamente vantajoso",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Um local físico para encontrar pessoas",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que se usa o condicional 'Estaríamos dispuestos' na negociação?",
                "options": [
                    {
                        "label": "Porque demonstra polidez, flexibilidade e abertura para diálogo hipotético",
                        "isCorrect": true,
                        "explanation": "Exato! Atenuação polida executiva."
                    },
                    {
                        "label": "Porque é imposição rígida",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer aceitar a proposta do cliente desde que ele pague à vista. O que diz?",
                "options": [
                    {
                        "label": "Aceptamos la propuesta si el pago se realiza al contado.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "No aceptamos nada",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Las partes acordaron revisar las cláusulas financieras del contrato.'",
                "options": [
                    {
                        "label": "As partes concordaram em revisar as cláusulas financeiras do contrato.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O contrato foi cancelado por ambas as partes.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa o verbo 'Ceder' em negociações corporativas?",
                "options": [
                    {
                        "label": "Fazer uma concessão ou flexibilizar uma exigência inicial",
                        "isCorrect": true,
                        "explanation": "Fantástico! Vocabulário essencial de negociação."
                    },
                    {
                        "label": "Vender ações",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_6",
        "title": "6. Presentaciones Ejecutivas y Discursos",
        "level": "B2",
        "description": "Estruture discursos de alto impacto com En primer lugar cabe señalar, A continuación abordaremos.",
        "icon": "📊",
        "stage1_context": {
            "missionTitle": "Módulo 6: Presentaciones Ejecutivas y Discursos",
            "missionDescription": "Desenvolva oratória executiva avançada para realizar apresentações em público, palestras e reuniões de diretoria.",
            "audioGuide": "En primer lugar, cabe señalar el crecimiento del mercado. A continuación abordaremos las cifras clave."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "En primer lugar, cabe señalar que...",
                "Portuguese": "Em primeiro lugar, cabe destacar que...",
                "Audio": "En primer lugar cabe señalar",
                "timeContext": "Abertura estruturada de apresentação."
            },
            {
                "type": "vocab",
                "Spanish": "A continuación abordaremos...",
                "Portuguese": "A seguir abordaremos...",
                "Audio": "A continuación abordaremos",
                "timeContext": "Transição para o próximo tópico."
            },
            {
                "type": "vocab",
                "Spanish": "Como se aprecia en el gráfico...",
                "Portuguese": "Como se observa no gráfico...",
                "Audio": "Como se aprecia en el gráfico",
                "timeContext": "Referência a dados visuais/slides."
            },
            {
                "type": "vocab",
                "Spanish": "Hacer hincapié en...",
                "Portuguese": "Enfatizar / Relevar...",
                "Audio": "Hacer hincapié en",
                "timeContext": "Destaque de ponto crucial."
            },
            {
                "type": "vocab",
                "Spanish": "Para concluir mi intervención...",
                "Portuguese": "Para concluir minha intervenção...",
                "Audio": "Para concluir mi intervención",
                "timeContext": "Fechamento de discurso oratório."
            },
            {
                "type": "grammar_pill",
                "title": "Marcadores de Ordenação do Discurso",
                "rule": "Estrutura-se a apresentação formal com marcadores cultos: En primer lugar / En segundo lugar, Por un lado / Por otro lado, A continuación e Finalmente.",
                "formula": "En primer lugar ➔ A continuación ➔ Por último",
                "example": "En primer lugar analizaremos los datos; a continuación veremos los gráficos."
            },
            {
                "type": "grammar_pill",
                "title": "Fórmulas de Ênfase e Foco (Cabe señalar / Hacer hincapié)",
                "rule": "Para direcionar a atenção da audiência para dados cruciais, usam-se as locuções: Cabe señalar que... (Cabe ressaltar que) e Quisiera hacer hincapié en los resultados del último trimestre.",
                "formula": "Cabe señalar / destacar + que | Hacer hincapié en",
                "example": "Quisiera hacer hincapié en la importancia de la innovación."
            },
            {
                "type": "grammar_pill",
                "title": "Descrição de Dados Visuais em Apresentações",
                "rule": "Frases para apresentar slides e gráficos: Como pueden apreciar en la diapositiva, Tal como muestra el gráfico de barras, Los datos reflejan una tendencia al alza.",
                "formula": "Como pueden apreciar / ver en + [slide/gráfico]",
                "example": "Como pueden apreciar en el gráfico, las ventas han subido."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como iniciar uma apresentação corporativa com estilo executivo elegante?",
                "options": [
                    "En primer lugar, cabe señalar los logros del trimestre",
                    "Hola a todos, voy a hablar rápido",
                    "Bueno, a ver qué tengo aquí",
                    "Empiezo con los datos"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual expressão idiomática formal significa 'enfatizar / colocar destaque em algo'?",
                "options": [
                    "Hacer hincapié en...",
                    "Hacer pie en...",
                    "Tener hincapié...",
                    "Dar hincapié..."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'A continuación abordaremos los desafíos del mercado internacional para el próximo año.'",
                "options": [
                    "A seguir abordaremos os desafios do mercado internacional para o próximo ano.",
                    "Abordamos o mercado ano passado.",
                    "Não há desafios no mercado.",
                    "Concluímos a reunião sobre o mercado."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Como direcionar a atenção dos diretores para um gráfico no slide?",
                "options": [
                    "Como pueden apreciar en el gráfico de la pantalla",
                    "Miren el dibujo",
                    "Ahí hay números",
                    "No miren la pantalla"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete o fechamento oratório: 'Para _____ (concluir) mi intervención, quiero agradecer al equipo su dedicación.'",
                "options": [
                    "concluir",
                    "concluido",
                    "concluyendo",
                    "concluirá"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "En primer lugar cabe señalar el crecimiento del sector y a continuación abordaremos las cifras clave.",
                "words": [
                    "En",
                    "primer",
                    "lugar",
                    "cabe",
                    "señalar",
                    "el",
                    "crecimiento",
                    "del",
                    "sector",
                    "y",
                    "a",
                    "continuación",
                    "abordaremos",
                    "las",
                    "cifras",
                    "clave."
                ],
                "translation": "Em primeiro lugar cabe destacar o crescimento do setor e a seguir abordaremos os números chave."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Orador",
                "npcName": "Orador",
                "text": "Buenos días a todos. En primer lugar, cabe señalar el excelente rendimiento de nuestras Filiales.",
                "npcMessage": "Buenos días a todos. En primer lugar, cabe señalar el excelente rendimiento de nuestras Filiales.",
                "translation": "Bons dias a todos. Em primeiro lugar, cabe destacar o excelente rendimento das nossas filiais."
            },
            {
                "speaker": "Orador",
                "npcName": "Orador",
                "text": "Como pueden apreciar en el gráfico, las ventas crecieron un quince por ciento. Quisiera hacer hincapié en la región norte.",
                "npcMessage": "Como pueden apreciar en el gráfico, las ventas crecieron un quince por ciento. Quisiera hacer hincapié en la región norte.",
                "translation": "Como podem observar no gráfico, as vendas cresceram 15%. Gostaria de enfatizar a região norte."
            },
            {
                "speaker": "Orador",
                "npcName": "Orador",
                "text": "A continuación abordaremos los planes para el próximo año.",
                "npcMessage": "A continuación abordaremos los planes para el próximo año.",
                "translation": "A seguir abordaremos os planos para o próximo ano."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Hacer hincapié en...'?",
                "options": [
                    {
                        "label": "Enfatizar / Sublinhar a importância de algo",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Fazer um pé de meia",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) O que significa a construção impessoal 'Cabe señalar que...'?",
                "options": [
                    {
                        "label": "Cabe ressaltar / Vale a pena destacar que...",
                        "isCorrect": true,
                        "explanation": "Exato! Marcador de ênfase impessoal culto."
                    },
                    {
                        "label": "Não se deve apontar",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você está apresentando um slide com o orçamento anual. O que diz?",
                "options": [
                    {
                        "label": "Como pueden apreciar en la diapositiva, el presupuesto se ha optimizado.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "No sé qué dice el slide",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Para concluir mi exposición, quisiera destacar el papel del equipo de desarrollo.'",
                "options": [
                    {
                        "label": "Para concluir minha exposição, gostaria de destacar o papel da equipe de desenvolvimento.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Começo minha palestra apresentando a equipe.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a palavra em espanhol para 'slide' de apresentação no contexto de PowerPoint?",
                "options": [
                    {
                        "label": "La diapositiva",
                        "isCorrect": true,
                        "explanation": "Fantástico! Termo técnico indispensável."
                    },
                    {
                        "label": "El cuadro",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_7",
        "title": "7. Lenguaje Jurídico y Burocrático Básico",
        "level": "B2",
        "description": "Compreenda contratos e trâmites com De conformidad con lo dispuesto, rescisión, cláusulas.",
        "icon": "📜",
        "stage1_context": {
            "missionTitle": "Módulo 7: Lenguaje Jurídico y Burocrático Básico",
            "missionDescription": "Entenda a estrutura formal de documentos legais, contratos de aluguel/trabalho e requerimentos oficiais.",
            "audioGuide": "De conformidad con lo dispuesto en el artículo cinco del contrato, ambas partes acuerdan..."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "De conformidad con lo dispuesto en...",
                "Portuguese": "De conformidade com o disposto em...",
                "Audio": "De conformidad con lo dispuesto",
                "timeContext": "Citação de norma jurídica ou cláusula."
            },
            {
                "type": "vocab",
                "Spanish": "Las partes contratantes",
                "Portuguese": "As partes contratantes",
                "Audio": "Las partes contratantes",
                "timeContext": "Partes assinantes do contrato."
            },
            {
                "type": "vocab",
                "Spanish": "La rescisión del contrato",
                "Portuguese": "A rescisão do contrato",
                "Audio": "La rescisión del contrato",
                "timeContext": "Cancelamento legal de contrato."
            },
            {
                "type": "vocab",
                "Spanish": "Vigor y vigencia",
                "Portuguese": "Vigor e vigência",
                "Audio": "Vigor y vigencia",
                "timeContext": "Período de validade legal."
            },
            {
                "type": "vocab",
                "Spanish": "Expedir una certificación",
                "Portuguese": "Expedir uma certidão/certificado",
                "Audio": "Expedir una certificación",
                "timeContext": "Emissão de documento oficial."
            },
            {
                "type": "grammar_pill",
                "title": "Fórmulas de Abertura Jurídica (De conformidad con / A tenor de)",
                "rule": "Em documentos legais, usam-se locuções formais fixadas para citar artigos ou leis: De conformidad con lo dispuesto en el artículo X... / A tenor de lo establecido en la normativa vigente...",
                "formula": "De conformidad con / A tenor de + [artigo/norma]",
                "example": "De conformidad con la ley orgánica vigente."
            },
            {
                "type": "grammar_pill",
                "title": "Linguagem Impessoal e Voz Passiva em Contratos",
                "rule": "Contratos usam a voz passiva e a passiva reflexa para impessoalidade jurídica: Se establece que..., Queda terminantemente prohibido..., El presente contrato será rescindido si...",
                "formula": "Se + establece / prohíbe | Queda + prohibido/establecido",
                "example": "Queda prohibida la subarrendación de la vivienda."
            },
            {
                "type": "grammar_pill",
                "title": "Vocabulário Técnico de Contratos (Vigencia, Cláusula, Rescisión)",
                "rule": "Entrar en vigor (passar a valer), Cláusula de rescisión (condição de cancelamento), Partes contratantes (locador/locatário ou contratante/contratado).",
                "formula": "Entrar en vigor ➔ Validade | Rescisión ➔ Cancelamento",
                "example": "El contrato entrará en vigor el primero de enero."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como se cita um artigo legal de forma oficial em um documento burocrático?",
                "options": [
                    "De conformidad con lo dispuesto en el artículo 5...",
                    "Según dice el punto 5...",
                    "Como pone en la ley...",
                    "Mirando el contrato..."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual expressão juridicamente válida significa 'passar a ter validade legal'?",
                "options": [
                    "Entrar en vigor / Entrar en vigencia",
                    "Ponerse en marcha",
                    "Empezar a funcionar",
                    "Abrir la ley"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Ambas partes contratantes acuerdan rescindir el contrato de mutuo acuerdo.'",
                "options": [
                    "Ambas as partes contratantes concordam em rescindir o contrato de mútuo acordo.",
                    "O contrato foi assinado por três anos.",
                    "Não houve acordo entre as partes.",
                    "O contrato é nulo."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Como expressar a proibição absoluta de um ato em um contrato de aluguel?",
                "options": [
                    "Queda terminantemente prohibido el subarriendo de la propiedad",
                    "No se puede subarrendar casi nunca",
                    "Subarrendar es feo",
                    "Prohibido subarrendar si no quieres"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a cláusula técnica: 'El presente documento será _____ (expedir) por la autoridad competente.'",
                "options": [
                    "expedido",
                    "expedir",
                    "expidiendo",
                    "expediera"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "De conformidad con lo dispuesto en el contrato, la rescisión deberá comunicarse con un mes de antelación.",
                "words": [
                    "De",
                    "conformidad",
                    "con",
                    "lo",
                    "dispuesto",
                    "en",
                    "el",
                    "contrato,",
                    "la",
                    "rescisión",
                    "deberá",
                    "comunicarse",
                    "con",
                    "un",
                    "mes",
                    "de",
                    "antelación."
                ],
                "translation": "De conformidade com o disposto no contrato, a rescisão deverá ser comunicada com um mês de antecedência."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Abogado",
                "npcName": "Abogado",
                "text": "De conformidad con la cláusula tercera, el arrendatario debe abonar la fianza hoy.",
                "npcMessage": "De conformidad con la cláusula tercera, el arrendatario debe abonar la fianza hoy.",
                "translation": "De conformidade com a cláusula terceira, o locatário deve pagar o depósito caução hoje."
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "Entendido. ¿Y en qué fecha entrará en vigor el contrato de alquiler?",
                "npcMessage": "Entendido. ¿Y en qué fecha entrará en vigor el contrato de alquiler?",
                "translation": "Entendido. E em que data entrará em vigor o contrato de aluguel?"
            },
            {
                "speaker": "Abogado",
                "npcName": "Abogado",
                "text": "Entrará en vigor el primero del mes próximo, tras expedir el certificado de habitabilidad.",
                "npcMessage": "Entrará en vigor el primero del mes próximo, tras expedir el certificado de habitabilidad.",
                "translation": "Entrará em vigor no primeiro dia do próximo mês, após a expedição do certificado de habitabilidade."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Entrar en vigor'?",
                "options": [
                    {
                        "label": "Passar a ter validade legal / Entrar em vigência",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Ganhar força física",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que se usa a estrutura 'Queda prohibido' em contratos?",
                "options": [
                    {
                        "label": "Para estabelecer normas impessoais com caráter mandatório jurídico",
                        "isCorrect": true,
                        "explanation": "Exato! Linguagem de proibição impessoal contratual."
                    },
                    {
                        "label": "É uma dúvida",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você precisa solicitar um certificado oficial na prefeitura. O que pede?",
                "options": [
                    {
                        "label": "Solicito que se me expida la certificación correspondiente.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Quiero un papel impreso",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'La cláusula de rescisión establece una penalización por incumplimiento.'",
                "options": [
                    {
                        "label": "A cláusula de rescisão estabelece uma penalização por descumprimento.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O contrato não tem penalização.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Como se chama o 'depósito caução' pago na assinatura de um aluguel na Espanha?",
                "options": [
                    {
                        "label": "La fianza",
                        "isCorrect": true,
                        "explanation": "Fantástico! Termo jurídico do mercado imobiliário espanhol."
                    },
                    {
                        "label": "El importe",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_8",
        "title": "8. Redacción de Informes y Textos Académicos",
        "level": "B2",
        "description": "Escreva relatórios técnicos com A tenor de los datos, los resultados sugieren que, cabe destacar.",
        "icon": "📝",
        "stage1_context": {
            "missionTitle": "Módulo 8: Redacción de Informes y Textos Académicos",
            "missionDescription": "Domine a redação formal acadêmica e técnica com coesão avançada, objetividade e citações.",
            "audioGuide": "A tenor de los datos analizados, los resultados sugieren una correlación directa entre ambos factores."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "A tenor de los datos...",
                "Portuguese": "Diante dos / Em vista dos dados...",
                "Audio": "A tenor de los datos",
                "timeContext": "Introdução factual de análise de dados."
            },
            {
                "type": "vocab",
                "Spanish": "Los resultados sugieren que...",
                "Portuguese": "Os resultados sugerem que...",
                "Audio": "Los resultados sugieren que",
                "timeContext": "Conclusão prudente acadêmica."
            },
            {
                "type": "vocab",
                "Spanish": "Un análisis exhaustivo",
                "Portuguese": "Uma análise exaustiva/detalhada",
                "Audio": "Un análisis exhaustivo",
                "timeContext": "Metodologia de investigação."
            },
            {
                "type": "vocab",
                "Spanish": "En lo referente a...",
                "Portuguese": "No que tange a... / Em relação a...",
                "Audio": "En lo referente a",
                "timeContext": "Transição temática de seção."
            },
            {
                "type": "vocab",
                "Spanish": "Cabe concluir que...",
                "Portuguese": "Cabe concluir que...",
                "Audio": "Cabe concluir que",
                "timeContext": "Fechamento de ensaio acadêmico."
            },
            {
                "type": "grammar_pill",
                "title": "Objetividade e Impessoalidade Acadêmica",
                "rule": "Em relatórios técnicos, evita-se a 1ª pessoa do singular (yo). Usa-se a 1ª pessoa do plural acadêmica (hemos analizado) ou o se impessoal (se ha analizado el impacto).",
                "formula": "1ª p. plural (hemos constatado) OU Se + verbo (se constata)",
                "example": "En este estudio se analiza el impacto socioeconómico."
            },
            {
                "type": "grammar_pill",
                "title": "Modulação de Afirmações (Los resultados sugieren que...)",
                "rule": "Na linguagem científica e acadêmica B2, evita-se o dogmatismo usando verbos de modulação: Los datos sugieren que..., Los hallazgos parecen indicar que..., Se podría inferir que...",
                "formula": "Los datos sugieren / sugieren indicar / inferir",
                "example": "Los hallazgos sugieren un aumento progresivo de la demanda."
            },
            {
                "type": "grammar_pill",
                "title": "Conectores de Coesão Acadêmica (A tenor de / En lo referente a)",
                "rule": "Para introduzir seções de relatórios com elegância: A tenor de los datos presentados..., En lo referente al impacto ambiental..., Sin perjuicio de lo anterior...",
                "formula": "A tenor de + [substantivo] | En lo referente a + [tema]",
                "example": "En lo referente a la metodología, se emplearon encuestas."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como introduzir a conclusão de um estudo acadêmico com modulação científica prudente?",
                "options": [
                    "Los resultados sugieren que existe una correlación directa",
                    "Está 100% probado sin duda alguna",
                    "Yo creo que es verdad",
                    "Sin datos digo que sí"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual locução de transição formal significa 'no que tange a / em relação a' em relatórios?",
                "options": [
                    "En lo referente a...",
                    "Por causa de...",
                    "Como sea...",
                    "A decir verdad..."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Tras realizar un análisis exhaustivo, cabe concluir que las medidas adoptadas han sido eficaces.'",
                "options": [
                    "Após realizar uma análise exaustiva, cabe concluir que as medidas adotadas foram eficazes.",
                    "Não analisamos as medidas.",
                    "As medidas falharam totalmente.",
                    "A análise foi feita ano passado."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a melhor escolha de estilo para manter a impessoalidade acadêmica em um relatório?",
                "options": [
                    "Se han analizado las variables más relevantes (Se impessoal)",
                    "Analicé yo solo la variable",
                    "Mi opinión personal es la variable",
                    "Yo digo las variables"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: '_____ (A tenor) de los datos expuestos, la propuesta resulta viable.'",
                "options": [
                    "A tenor",
                    "A tiempo",
                    "A causa",
                    "A favor"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "A tenor de los datos analizados en el informe, los resultados sugieren una tendencia positiva.",
                "words": [
                    "A",
                    "tenor",
                    "de",
                    "los",
                    "datos",
                    "analizados",
                    "en",
                    "el",
                    "informe,",
                    "los",
                    "resultados",
                    "sugieren",
                    "una",
                    "tendencia",
                    "positiva."
                ],
                "translation": "Em vista dos dados analisados no relatório, os resultados sugerem uma tendência positiva."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Investigador A",
                "npcName": "Investigador A",
                "text": "Tras revisar las estadísticas, ¿qué podemos inferir de la muestra?",
                "npcMessage": "Tras revisar las estadísticas, ¿qué podemos inferir de la muestra?",
                "translation": "Após revisar as estatísticas, o que podemos inferir da amostra?"
            },
            {
                "speaker": "Investigador B",
                "npcName": "Investigador B",
                "text": "A tenor de los datos, los resultados sugieren un incremento constante en la participación.",
                "npcMessage": "A tenor de los datos, los resultados sugieren un incremento constante en la participación.",
                "translation": "Em vista dos dados, os resultados sugerem um incremento constante na participação."
            },
            {
                "speaker": "Investigador A",
                "npcName": "Investigador A",
                "text": "Perfecto. En lo referente a la conclusión, lo redactaremos con prudencia.",
                "npcMessage": "Perfecto. En lo referente a la conclusión, lo redactaremos con prudencia.",
                "translation": "Perfeito. No que tange à conclusão, vamos redigi-la com prudência."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'A tenor de...'?",
                "options": [
                    {
                        "label": "Em vista de / Diante de / Em conformidade com",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Apesar de",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que se usam verbos como 'sugerir' ou 'parecer indicar' em artigos científicos?",
                "options": [
                    {
                        "label": "Para evitar afirmações categóricas dogmáticas e manter o rigor metodológico prudente",
                        "isCorrect": true,
                        "explanation": "Exato! Princípio de modulação acadêmica."
                    },
                    {
                        "label": "Por dúvida ortográfica",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer iniciar a seção metodológica de um trabalho de conclusão. O que escreve?",
                "options": [
                    {
                        "label": "En lo referente a la metodología empleada, se seleccionó una muestra aleatoria.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Hice la metodología como pude",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Los hallazgos de este estudio abren nuevas líneas de investigación futura.'",
                "options": [
                    {
                        "label": "As descobertas deste estudo abrem novas linhas de investigação futura.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O estudo não encontrou nada.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a palavra 'Los hallazgos' em relatórios de pesquisa?",
                "options": [
                    {
                        "label": "As descobertas / achados científicos da pesquisa",
                        "isCorrect": true,
                        "explanation": "Fantástico! Vocabulário acadêmico de alto nível."
                    },
                    {
                        "label": "Os erros do relatório",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_9",
        "title": "9. Análisis de Noticias y Periódicos",
        "level": "B2",
        "description": "Interprete a imprensa hispânica com titulares de prensa, pasiva refleja e estilo periodístico.",
        "icon": "📰",
        "stage1_context": {
            "missionTitle": "Módulo 9: Análisis de Noticias y Periódicos",
            "missionDescription": "Aprenda a ler e interpretar notícias, manchetes de jornais e editoriais de grandes veículos do mundo hispânico.",
            "audioGuide": "Se aprueba la nueva ley de transporte público. El gobierno anuncia medidas económicas."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Los titulares de prensa",
                "Portuguese": "As manchetes dos jornais",
                "Audio": "Los titulares de prensa",
                "timeContext": "Manchetes principais dos jornais."
            },
            {
                "type": "vocab",
                "Spanish": "Se aprueba la ley (Pasiva refleja)",
                "Portuguese": "Aprova-se a lei",
                "Audio": "Se aprueba la ley",
                "timeContext": "Sintaxe jornalística de pasiva reflexa."
            },
            {
                "type": "vocab",
                "Spanish": "Según fuentes oficiales",
                "Portuguese": "Segundo fontes oficiais",
                "Audio": "Según fuentes oficiales",
                "timeContext": "Atribuição de citação de imprensa."
            },
            {
                "type": "vocab",
                "Spanish": "Un portavoz del gobierno",
                "Portuguese": "Um porta-voz do governo",
                "Audio": "Un portavoz del gobierno",
                "timeContext": "Fonte institucional de imprensa."
            },
            {
                "type": "vocab",
                "Spanish": "Emitir un comunicado oficial",
                "Portuguese": "Emitir um comunicado oficial",
                "Audio": "Emitir un comunicado",
                "timeContext": "Divulgação de nota de imprensa."
            },
            {
                "type": "grammar_pill",
                "title": "A Pasiva Refleja na Linguagem Jornalística (Se + Verbo 3ª p.)",
                "rule": "Os jornais usam intensamente a pasiva reflexa para sintetizar fatos sem mencionar o agente: Se aprueba la reforma fiscal, Se celebran las elecciones generales.",
                "formula": "SE + Verbo 3ª p. (singular/plural) + Sujeito Paciente",
                "example": "Se anuncian nuevas medidas contra la inflación."
            },
            {
                "type": "grammar_pill",
                "title": "A Voz Pasiva Analítica (Ser + Participio + por)",
                "rule": "Usada em notícias formais para destacar o sujeito paciente: El acuerdo fue firmado por los delegados de ambos países.",
                "formula": "Sujeito Paciente + SER + Participio + por + Agente",
                "example": "La ley fue ratificada por el Congreso."
            },
            {
                "type": "grammar_pill",
                "title": "Citação de Fontes e Distanciamento (Según / De acuerdo con)",
                "rule": "Jornalistas usam fórmulas para atribuir declarações a terceiros: Según fuentes del ministerio, De acuerdo con las declaraciones del portavoz, Al parecer (ao que tudo indica).",
                "formula": "Según / De acuerdo con + [fonte jornalística]",
                "example": "Según informan medios locales, no hay heridos."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como a imprensa redige a manchete 'Aprova-se a nova lei de habitação' usando a pasiva reflexa?",
                "options": [
                    "Se aprueba la nueva ley de vivienda",
                    "Aprueban la ley ellos",
                    "La ley aprueba",
                    "Se aprobando la ley"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual locução é utilizada por jornalistas para citar informações atribuídas a governos ou ministérios?",
                "options": [
                    "Según fuentes oficiales",
                    "Por mi cuenta",
                    "Yo digo que",
                    "Sin ninguna fuente"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'El portavoz del ministerio emitió un comunicado oficial sobre el acuerdo comercial.'",
                "options": [
                    "O porta-voz do ministério emitiu um comunicado oficial sobre o acordo comercial.",
                    "O ministro escreveu um jornal ontem.",
                    "O acordo foi cancelado pela imprensa.",
                    "Não houve comunicados oficiais."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a voz passiva analítica correta para 'O presidente assinou a lei'?",
                "options": [
                    "La ley fue firmada por el presidente",
                    "Se firmó la ley por el presidente",
                    "El presidente es firmado",
                    "La ley firma el presidente"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a manchete de jornal: '_____ (Se convocar) elecciones anticipadas para el próximo mes.'",
                "options": [
                    "Se convocan",
                    "Convocan se",
                    "Se convocó él",
                    "Convocando se"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Según fuentes oficiales, se aprueba la nueva normativa sobre energías renovables en el parlamento.",
                "words": [
                    "Según",
                    "fuentes",
                    "oficiales,",
                    "se",
                    "aprueba",
                    "la",
                    "nueva",
                    "normativa",
                    "sobre",
                    "energías",
                    "renovables",
                    "en",
                    "el",
                    "parlamento."
                ],
                "translation": "Segundo fontes oficiais, aprova-se a nova regulamentação sobre energias renováveis no parlamento."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Lector A",
                "npcName": "Lector A",
                "text": "¿Viste los titulares de prensa de hoy en El País?",
                "npcMessage": "¿Viste los titulares de prensa de hoy en El País?",
                "translation": "Você viu as manchetes dos jornais de hoje no El País?"
            },
            {
                "speaker": "Lector B",
                "npcName": "Lector B",
                "text": "Sí, según fuentes oficiales se convocan elecciones para mayo.",
                "npcMessage": "Sí, según fuentes oficiales se convocan elecciones para mayo.",
                "translation": "Sim, segundo fontes oficiais convocam-se eleições para maio."
            },
            {
                "speaker": "Lector A",
                "npcName": "Lector A",
                "text": "Además, el portavoz anunció que el acuerdo fue firmado por todos los partidos.",
                "npcMessage": "Además, el portavoz anunció que el acuerdo fue firmado por todos los partidos.",
                "translation": "Além disso, o porta-voz anunciou que o acordo foi assinado por todos os partidos."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Los titulares' em um jornal?",
                "options": [
                    {
                        "label": "As manchetes / títulos principais das notícias",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Os donos do jornal",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que os jornais preferem 'Se aprueba la ley' em manchetes?",
                "options": [
                    {
                        "label": "Porque é uma construção sintética e impessoal focada na ação e no fato",
                        "isCorrect": true,
                        "explanation": "Exato! Estilo conciso da linguagem jornalística."
                    },
                    {
                        "label": "Porque falta espaço para o verbo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer citar uma notícia atribuída ao ministério sem garantir 100% como sua a opinião. O que diz?",
                "options": [
                    {
                        "label": "Según fuentes del ministerio, se prevé un aumento de las exportaciones.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Yo inventé la noticia",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'El nuevo tratado internacional fue firmado ayer por los Jefes de Estado.'",
                "options": [
                    {
                        "label": "O novo tratado internacional foi assinado ontem pelos Chefes de Estado.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Os chefes cancelaram o tratado ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a palavra 'El portavoz' na imprensa institucional?",
                "options": [
                    {
                        "label": "O porta-voz (pessoa incumbida de dar declarações oficiais em nome de uma entidade)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Vocabulário de imprensa e política."
                    },
                    {
                        "label": "O repórter fotográfico",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_10",
        "title": "10. Comprensión de Podcasts y Radio Nativa",
        "level": "B2",
        "description": "Compreenda velocidade real de fala, muletas de fala (o sea, bueno) e sotaques abertos/fechados.",
        "icon": "🎧",
        "stage1_context": {
            "missionTitle": "Módulo 10: Comprensión de Podcasts y Radio Nativa",
            "missionDescription": "Prepare seu ouvido para compreender programas de rádio nativos, podcasts informais e conversas em ritmo acelerado.",
            "audioGuide": "O sea, la cosa es que bueno, a ver, al fin y al cabo todos estamos de acuerdo en eso."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "O sea...",
                "Portuguese": "Ou seja... / Quer dizer...",
                "Audio": "O sea",
                "timeContext": "Muleta de esclarecimento ou reformulação."
            },
            {
                "type": "vocab",
                "Spanish": "A ver...",
                "Portuguese": "Vejamos... / Vamos ver...",
                "Audio": "A ver",
                "timeContext": "Muleta de pausa para pensar."
            },
            {
                "type": "vocab",
                "Spanish": "Al fin y al cabo",
                "Portuguese": "Afinal de contas",
                "Audio": "Al fin y al cabo",
                "timeContext": "Locução de síntese em conversação."
            },
            {
                "type": "vocab",
                "Spanish": "En fin...",
                "Portuguese": "Enfim...",
                "Audio": "En fin",
                "timeContext": "Conclusão informal."
            },
            {
                "type": "vocab",
                "Spanish": "¿Sabes? / ¿Me explico?",
                "Portuguese": "Sabe? / Fui claro?",
                "Audio": "Me explico",
                "timeContext": "Checagem de compreensão no discurso."
            },
            {
                "type": "grammar_pill",
                "title": "Marcadores de Discurso Informais e Muletas de Fala (Muletillas)",
                "rule": "Na fala nativa espontânea, usam-se muletas para ganhar tempo de pensamento: O sea (ou seja), A ver (vejamos), Bueno (bom/bem), En fin (enfim).",
                "formula": "O sea / A ver / Bueno / En fin ➔ Muletas de fala espontânea",
                "example": "Bueno, o sea, a ver lo que pasa mañana."
            },
            {
                "type": "grammar_pill",
                "title": "Fenômenos de Enlace e Elisão de Sons Na Fala Rápida",
                "rule": "Em velocidade nativa, ocorrem ligamentos de vogais iguais (para aprender ➔ paraprender) e supressão da 'd' intervocálica na fala informal da Espanha (cansado ➔ cansao). O aluno B2 aprende a reconhecer esses fenômenos sem se confundir.",
                "formula": "Enlace vocálico e elisão informal de consonantes",
                "example": "Está cansao de trabajar (fala informal por cansado)."
            },
            {
                "type": "grammar_pill",
                "title": "Expressões de Conclusão Espontânea (Al fin y al cabo)",
                "rule": "A locução Al fin y al cabo usa-se para resumir uma reflexão informal após um debate longo (Al fin y al cabo, lo importante es que todos estamos bien).",
                "formula": "Al fin y al cabo + [resumo da conclusão]",
                "example": "Al fin y al cabo, valió la pena el esfuerzo."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual muleta de fala (muletilla) significa 'ou seja / quer dizer' em conversas espontâneas?",
                "options": [
                    "O sea...",
                    "A ver...",
                    "En fin...",
                    "Al cabo..."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como se traduz a locução de síntese informal 'Al fin y al cabo'?",
                "options": [
                    "Afinal de contas",
                    "Ao final do cabo",
                    "Sem fim nem cabo",
                    "No fim da rua"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Bueno, o sea, a ver qué decide el equipo mañana en la reunión.'",
                "options": [
                    "Bem, ou seja, vejamos o que a equipe decide amanhã na reunião.",
                    "A equipe decidiu tudo ontem.",
                    "Não haverá reunião amanhã.",
                    "Onde está a equipe?"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. O que significa o fenômeno de escuta 'cansao' na fala espontânea de um nativo da Espanha?",
                "options": [
                    "Redução fonética informal da palavra 'cansado' (supressão da 'd' intervocálica)",
                    "Uma palavra nova sem relação com cansado",
                    "Um erro de gramática escrita",
                    "Nome de uma cidade"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a expressão de síntese: '_____ (Al fin) y al cabo, la decisión es tuya.'",
                "options": [
                    "Al fin",
                    "El fin",
                    "Un fin",
                    "Sin fin"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "O sea, a ver, al fin y al cabo lo más importante es que alcanzamos el objetivo del equipo.",
                "words": [
                    "O",
                    "sea,",
                    "a",
                    "ver,",
                    "al",
                    "fin",
                    "y",
                    "al",
                    "cabo",
                    "lo",
                    "más",
                    "importante",
                    "es",
                    "que",
                    "alcanzamos",
                    "el",
                    "objetivo",
                    "del",
                    "equipo."
                ],
                "translation": "Ou seja, vejamos, afinal de contas o mais importante é que atingimos o objetivo da equipe."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Locutor 1",
                "npcName": "Locutor 1",
                "text": "Bienvenidos de nuevo al podcast. Hoy estamos con un tema polémico, ¿sabes?",
                "npcMessage": "Bienvenidos de nuevo al podcast. Hoy estamos con un tema polémico, ¿sabes?",
                "translation": "Bem-vindos de volta ao podcast. Hoje estamos com um tema polêmico, sabe?"
            },
            {
                "speaker": "Locutor 2",
                "npcName": "Locutor 2",
                "text": "Bueno, a ver... O sea, hay opiniones muy diversas al respecto.",
                "npcMessage": "Bueno, a ver... O sea, hay opiniones muy diversas al respecto.",
                "translation": "Bem, vejamos... Ou seja, há opiniões muito diversas a esse respeito."
            },
            {
                "speaker": "Locutor 1",
                "npcName": "Locutor 1",
                "text": "Totalmente. Pero al fin y al cabo lo enriquecedor es el debate.",
                "npcMessage": "Totalmente. Pero al fin y al cabo lo enriquecedor es el debate.",
                "translation": "Totalmente. Mas afinal de contas o enriquecedor é o debate."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Al fin y al cabo' em conversas espontâneas?",
                "options": [
                    {
                        "label": "Afinal de contas / Em última análise",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "No começo de tudo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) O que são as 'muletillas' na fala dos nativos em podcasts?",
                "options": [
                    {
                        "label": "Palavras e expressões de apoio (muletas de fala) usadas para ligar ideias e ganhar tempo",
                        "isCorrect": true,
                        "explanation": "Exato! Recurso pragmático de fluência oral."
                    },
                    {
                        "label": "Erros graves de vocabulário",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer reformular uma ideia que acabou de dizer no podcast para ficar mais claro. O que fala?",
                "options": [
                    {
                        "label": "O sea, lo que quiero decir es que debemos ser más precavidos.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "No sé qué hablo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'A ver, dejadme explicar mi punto de vista sin interrupciones.'",
                "options": [
                    {
                        "label": "Vejamos, deixem-me explicar meu ponto de vista sem interrupções.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Não quero explicar nada.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa '¿Me explico?' ao final de uma explicação em espanhol?",
                "options": [
                    {
                        "label": "Fui claro? / Me fiz entender? (Maneira de checar a transmissão da mensagem)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Marcador de interação do falante."
                    },
                    {
                        "label": "Explique para mim",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_11",
        "title": "11. Cine, Series y Música Hispanoamericana",
        "level": "B2",
        "description": "Compreenda gírias de rua, lunfardo e modismos em produções culturais hispânicas.",
        "icon": "🎭",
        "stage1_context": {
            "missionTitle": "Módulo 11: Cine, Series y Música Hispanoamericana",
            "missionDescription": "Aprenda a interpretar as gírias urbanas e referências culturais do cinema, séries de streaming e música do mundo hispânico.",
            "audioGuide": "En la película usan jerga callejera de Madrid y lunfardo de Buenos Aires. ¡Está muy chulo!"
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Estar guay / Molar (ES)",
                "Portuguese": "Ser legal / Curtir muito (Espanha)",
                "Audio": "Estar guay / Molar",
                "timeContext": "Gíria urbana de apreciação na Espanha."
            },
            {
                "type": "vocab",
                "Spanish": "Está chido / padre (MX)",
                "Portuguese": "É legal / bacana (México)",
                "Audio": "Está chido",
                "timeContext": "Gíria urbana de apreciação no México."
            },
            {
                "type": "vocab",
                "Spanish": "Está re copado / Che (AR)",
                "Portuguese": "É muito legal / Cara! (Argentina)",
                "Audio": "Está re copado",
                "timeContext": "Gíria rplatense de apreciação."
            },
            {
                "type": "vocab",
                "Spanish": "El guion / El doblaje",
                "Portuguese": "O roteiro / A dublagem",
                "Audio": "El guion / El doblaje",
                "timeContext": "Vocabulário técnico de produção audiovisual."
            },
            {
                "type": "vocab",
                "Spanish": "La banda sonora",
                "Portuguese": "A trilha sonora",
                "Audio": "La banda sonora",
                "timeContext": "Música de acompanhamento do filme."
            },
            {
                "type": "grammar_pill",
                "title": "Gírias Urbanas de Apreciação Positiva (Molar/Guay vs. Chido vs. Copado)",
                "rule": "Na Espanha usa-se molar e guay (¡Esta película mola mucho!). No México usa-se chido ou padre (¡Está muy chida la serie!). Na Argentina usa-se copado ou re bueno (¡Está re copada la banda sonora!).",
                "formula": "ES: Molar/Guay | MX: Chido/Padre | AR: Copado",
                "example": "¡Qué guay es la película! / ¡Está muy chida la serie!"
            },
            {
                "type": "grammar_pill",
                "title": "Terminologia Técnica de Produção Audiovisual",
                "rule": "El guion (roteiro), El doblaje (dublagem), Los subtítulos (legendas), La banda sonora (trilha sonora), El reparto (elenco de atores).",
                "formula": "Guion ➔ Roteiro | Doblaje ➔ Dublagem | Reparto ➔ Elenco",
                "example": "El reparto de la película cuenta con actores famosos."
            },
            {
                "type": "grammar_pill",
                "title": "O Lunfardo Rioplatense no Cinema e Tangos",
                "rule": "O lunfardo é o jargão urbano surgido em Buenos Aires e Montevidéu no final do século XIX, presente no tango e no cinema argentino (pibe = jovem, laburo = trabalho, mina = mulher, chamuyo = conversa fiada).",
                "formula": "Lunfardo: Pibe, Laburo, Mina, Chamuyo",
                "example": "Che pibe, ¿qué tal el laburo?"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como expressar que um filme é 'muito legal' na gíria urbana da Espanha vs. México?",
                "options": [
                    "Mola mucho (Espanha) / Está muy chido (México)",
                    "Está copado na Espanha",
                    "Es guay no México",
                    "Está padre na Espanha"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual termo técnico significa 'o roteiro' de um filme em espanhol?",
                "options": [
                    "El guion",
                    "El reparto",
                    "El doblaje",
                    "La banda sonora"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'La banda sonora de esta serie argentina es re buena y los actores son de primera.'",
                "options": [
                    "A trilha sonora desta série argentina é muito boa e os atores são de primeira.",
                    "A dublagem da série foi ruim.",
                    "Não gosto de séries argentinas.",
                    "A série não tem música."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. O que significa a palavra 'Laburo' no jargão lunfardo da Argentina?",
                "options": [
                    "Trabalho / Emprego",
                    "Festa",
                    "Comida",
                    "Carro"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'Prefiero ver las películas en versión original con _____ (subtítulos) en español.'",
                "options": [
                    "subtítulos",
                    "doblajes",
                    "guiones",
                    "repartos"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "La banda sonora de la película es fantástica y el guion está muy bien adaptado.",
                "words": [
                    "La",
                    "banda",
                    "sonora",
                    "de",
                    "la",
                    "película",
                    "es",
                    "fantástica",
                    "y",
                    "el",
                    "guion",
                    "está",
                    "muy",
                    "bien",
                    "adaptado."
                ],
                "translation": "A trilha sonora do filme é fantástica e o roteiro está muito bem adaptado."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Pablo (ES)",
                "npcName": "Pablo (ES)",
                "text": "¡Tío! La nueva película de ciencia ficción mola un montón.",
                "npcMessage": "¡Tío! La nueva película de ciencia ficción mola un montón.",
                "translation": "Cara! O novo filme de ficção científica é muito legal."
            },
            {
                "speaker": "Mateo (MX)",
                "npcName": "Mateo (MX)",
                "text": "¡Sí, carnal! Los efectos especiales están bien chidos y el guion es buenísimo.",
                "npcMessage": "¡Sí, carnal! Los efectos especiales están bien chidos y el guion es buenísimo.",
                "translation": "Sim, irmão! Os efeitos especiais são bem legais e o roteiro é super bom."
            },
            {
                "speaker": "Pablo (ES)",
                "npcName": "Pablo (ES)",
                "text": "Además, la banda sonora es una pasada.",
                "npcMessage": "Además, la banda sonora es una pasada.",
                "translation": "Além disso, a trilha sonora é incrível."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'El guion' de um filme?",
                "options": [
                    {
                        "label": "O roteiro escrito do filme",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "O cartaz de cinema",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) De onde provém o jargão 'lunfardo' presente no cinema rioplatense?",
                "options": [
                    {
                        "label": "Dos bairros populares de Buenos Aires e Montevidéu no final do século XIX",
                        "isCorrect": true,
                        "explanation": "Exato! Herança cultural rioplatense."
                    },
                    {
                        "label": "Do espanhol antigo de Madri",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você assistiu a uma série mexicana excelente e quer elogiar usando uma gíria local. O que diz?",
                "options": [
                    {
                        "label": "¡Esta serie está bien padre!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Esta serie mola en México",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'El reparto de la obra teatral incluye a los mejores actores del país.'",
                "options": [
                    {
                        "label": "O elenco da peça teatral inclui os melhores atores do país.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O roteiro do teatro foi cancelado.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a gíria espanhola '¡Es una pasada!'?",
                "options": [
                    {
                        "label": "É algo incrível / sensacional / impressionante",
                        "isCorrect": true,
                        "explanation": "Fantástico! Modismo espanhol de alta frequência."
                    },
                    {
                        "label": "É algo passado que já acabou",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_12",
        "title": "12. Debates sobre Temas Sociales y Tecnología",
        "level": "B2",
        "description": "Debate meio ambiente, inteligência artificial e sociedade com conectores avançados.",
        "icon": "🌐",
        "stage1_context": {
            "missionTitle": "Módulo 12: Debates sobre Temas Sociales y Tecnología",
            "missionDescription": "Desenvolva a capacidade de defender teses, rebater argumentos e analisar o impacto da inteligência artificial e sustentabilidade.",
            "audioGuide": "En lo que atañe a la inteligencia artificial, es imperativo que garanticemos la ética."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "En lo que atañe a...",
                "Portuguese": "No que tange a... / Quanto a...",
                "Audio": "En lo que atañe a",
                "timeContext": "Introdução temática formal de debate."
            },
            {
                "type": "vocab",
                "Spanish": "La brecha digital",
                "Portuguese": "A exclusão / fosso digital",
                "Audio": "La brecha digital",
                "timeContext": "Desigualdade de acesso tecnológico."
            },
            {
                "type": "vocab",
                "Spanish": "La sostenibilidad ambiental",
                "Portuguese": "A sustentabilidade ambiental",
                "Audio": "La sostenibilidad",
                "timeContext": "Preservação ecológica e desenvolvimento."
            },
            {
                "type": "vocab",
                "Spanish": "Es imperativo que...",
                "Portuguese": "É imperativo que...",
                "Audio": "Es imperativo que",
                "timeContext": "Exigência ética ou política."
            },
            {
                "type": "vocab",
                "Spanish": "Poner de manifiesto",
                "Portuguese": "Evidenciar / Deixar claro",
                "Audio": "Poner de manifiesto",
                "timeContext": "Demonstração factual em debates."
            },
            {
                "type": "grammar_pill",
                "title": "Locuções de Introdução Temática Formal (En lo que atañe a...)",
                "rule": "Para introduzir tópicos de debate em fóruns acadêmicos e corporativos, usa-se a locução refinada En lo que atañe a + substantivo (En lo que atañe al cambio climático...).",
                "formula": "En lo que atañe a + [tópico de debate]",
                "example": "En lo que atañe al desarrollo sostenible, se requieren acciones inmediatas."
            },
            {
                "type": "grammar_pill",
                "title": "Construções Impessoais de Exigência Ética (Es imperativo que + Subjuntivo)",
                "rule": "Em debates sobre o futuro da sociedade e tecnologia, usam-se estruturas impessoais de alta exigência: Es imperativo que la IA se regule / Es crucial que preservemos la biodiversidad.",
                "formula": "Es imperativo / crucial / urgente + que + Subjuntivo",
                "example": "Es imperativo que los gobiernos protejan los datos personales."
            },
            {
                "type": "grammar_pill",
                "title": "A Expressão Idiomática Argumentativa 'Poner de manifiesto'",
                "rule": "Significa evidenciar, demonstrar ou tornar patente uma realidade em um debate: El informe pone de manifiesto la urgencia de reducir las emisiones.",
                "formula": "Poner de manifiesto + [fato/evidência]",
                "example": "El debate puso de manifiesto la necesidad de consensos."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como introduzir com elegância o tema da inteligência artificial em um painel de debate?",
                "options": [
                    "En lo que atañe a la inteligencia artificial...",
                    "Hablando de robots...",
                    "Para la máquina...",
                    "Sobre computadoras..."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual estrutura expressa exigência ética com o modo subjuntivo?",
                "options": [
                    "Es imperativo que garanticemos la privacidad de los usuarios",
                    "Es imperativo garantizar seguro",
                    "Garantizamos datos",
                    "Imperativo es datos"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'El último informe del panel ecológico pone de manifiesto la gravedad del calentamiento global.'",
                "options": [
                    "O último relatório do painel ecológico evidencia a gravidade do aquecimento global.",
                    "O relatório escondeu os dados climáticos.",
                    "O aquecimento global terminou.",
                    "Não há relatórios ecológicos."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. O que significa a expressão 'La brecha digital' no contexto social?",
                "options": [
                    "A desigualdade ou distância de acesso às tecnologias de informação entre diferentes grupos sociais",
                    "Uma falha de computador",
                    "Um cabo de internet quebrado",
                    "Uma senha digital"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'Es crucial que las empresas _____ (adoptar) políticas de sostenibilidad.'",
                "options": [
                    "adopten (Subjuntivo)",
                    "adoptan",
                    "adoptaron",
                    "adoptar"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "En lo que atañe a la tecnología, es imperativo que reduzcamos la brecha digital en la sociedad.",
                "words": [
                    "En",
                    "lo",
                    "que",
                    "atañe",
                    "a",
                    "la",
                    "tecnología,",
                    "es",
                    "imperativo",
                    "que",
                    "reduzcamos",
                    "la",
                    "brecha",
                    "digital",
                    "en",
                    "la",
                    "sociedad."
                ],
                "translation": "No que tange à tecnologia, é imperativo que reduzamos a exclusão digital na sociedade."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Sociólogo",
                "npcName": "Sociólogo",
                "text": "En lo que atañe a la inteligencia artificial, debemos analizar su impacto laboral.",
                "npcMessage": "En lo que atañe a la inteligencia artificial, debemos analizar su impacto laboral.",
                "translation": "No que tange à inteligência artificial, devemos analisar seu impacto trabalhista."
            },
            {
                "speaker": "Ingeniero",
                "npcName": "Ingeniero",
                "text": "Coincido. El avance pone de manifiesto la necesidad de reciclar competencias profesionales.",
                "npcMessage": "Coincido. El avance pone de manifiesto la necesidad de reciclar competencias profesionales.",
                "translation": "Concordo. O avanço evidencia a necessidade de reciclar competências profissionais."
            },
            {
                "speaker": "Sociólogo",
                "npcName": "Sociólogo",
                "text": "Por ello, es imperativo que garanticemos una transición justa para los trabajadores.",
                "npcMessage": "Por ello, es imperativo que garanticemos una transición justa para los trabajadores.",
                "translation": "Por isso, é imperativo que garantamos uma transição justa para os trabalhadores."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'En lo que atañe a...'?",
                "options": [
                    {
                        "label": "No que tange a... / No que diz respeito a...",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "No que atrapalha a...",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que se usa o subjuntivo em 'Es urgente que aprobemos la ley'?",
                "options": [
                    {
                        "label": "Porque 'Es urgente que' é uma estrutura impessoal de valoração/exigência",
                        "isCorrect": true,
                        "explanation": "Exato! Regra da exigência impessoal."
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
                "question": "3. (Contexto) Você quer enfatizar que a reunião evidenciou os desafios da empresa. O que diz?",
                "options": [
                    {
                        "label": "La reunión puso de manifiesto los principales retos de la empresa.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "La reunión borró los retos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Debemos fomentar la sostenibilidad ambiental para las futuras generaciones.'",
                "options": [
                    {
                        "label": "Devemos fomentar a sustentabilidade ambiental para as futuras gerações.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Destruímos o meio ambiente no passado.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a tradução mais precisa para 'La brecha generacional'?",
                "options": [
                    {
                        "label": "O abismo / conflito de gerações",
                        "isCorrect": true,
                        "explanation": "Fantástico! Uso metafórico da palavra brecha."
                    },
                    {
                        "label": "Uma ponte de gerações",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_13",
        "title": "13. Literatura Hispánica",
        "level": "B2",
        "description": "Explore excertos de García Márquez, Cervantes, Cortázar e Lorca com realismo mágico e metáforas.",
        "icon": "📚",
        "stage1_context": {
            "missionTitle": "Módulo 13: Literatura Hispánica",
            "missionDescription": "Aprecie a beleza estética e estilística das grandes obras-primas da literatura espanhola e hispano-americana.",
            "audioGuide": "En un lugar de la Mancha, de cuyo nombre no quiero acordarme... El realismo mágico de García Márquez."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "En un lugar de la Mancha...",
                "Portuguese": "Num lugar da Mancha... (Abertura de Dom Quixote)",
                "Audio": "En un lugar de la Mancha",
                "timeContext": "Abertura célebre de Miguel de Cervantes."
            },
            {
                "type": "vocab",
                "Spanish": "El realismo mágico",
                "Portuguese": "O realismo mágico (García Márquez / Isabel Allende)",
                "Audio": "El realismo mágico",
                "timeContext": "Movimento literário hispano-americano."
            },
            {
                "type": "vocab",
                "Spanish": "La metáfora poética",
                "Portuguese": "A metáfora poética",
                "Audio": "La metáfora poética",
                "timeContext": "Recurso estilístico de linguagem."
            },
            {
                "type": "vocab",
                "Spanish": "Una obra cumbre",
                "Portuguese": "Uma obra-prima / obra cume",
                "Audio": "Una obra cumbre",
                "timeContext": "Classificação de grande obra clássica."
            },
            {
                "type": "vocab",
                "Spanish": "Evocar emociones",
                "Portuguese": "Evocar emoções",
                "Audio": "Evocar emociones",
                "timeContext": "Impacto estético da literatura."
            },
            {
                "type": "grammar_pill",
                "title": "Análise de Aberturas Clássicas da Literatura (Cervantes)",
                "rule": "O romance moderno nasce com Don Quijote de la Mancha (1605). Estuda-se a sintaxe arcaica refinada de Miguel de Cervantes: En un lugar de la Mancha, de cuyo nombre no quiero acordarme...",
                "formula": "Cervantes ➔ Don Quijote de la Mancha (1605)",
                "example": "Cuyo nombre ➔ Cujo nome (pronome relativo possessivo culto)."
            },
            {
                "type": "grammar_pill",
                "title": "O Realismo Mágico Hispano-Americano",
                "rule": "O movimento liderado por Gabriel García Márquez (Cien años de soledad) funde o cotidiano realista com o fantástico como algo natural: Muchos años después, frente al pelotón de fusilamiento...",
                "formula": "Realismo Mágico ➔ Cotidiano + Elementos Fantásticos naturais",
                "example": "Macondo es la aldea mítica creada por García Márquez."
            },
            {
                "type": "grammar_pill",
                "title": "A Poética de Federico García Lorca e Julio Cortázar",
                "rule": "Lorca (Romancero Gitano) traz a riqueza lírica e metafórica da Espanha, enquanto Cortázar (Rayuela) revoluciona a estrutura narrativa com o jogo de leitura não linear.",
                "formula": "Lorca ➔ Poesia e Simbolismo | Cortázar ➔ Narrativa não linear",
                "example": "La poesía de Lorca utiliza símbolos como la luna y el caballo."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual é a célebre frase de abertura do romance Don Quijote de la Mancha de Miguel de Cervantes?",
                "options": [
                    "En un lugar de la Mancha, de cuyo nombre no quiero acordarme...",
                    "Muchos años después frente al pelotón...",
                    "Puedo escribir los versos más tristes...",
                    "Caminante no hay camino..."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual movimento literário é mundialmente associado ao autor colombiano Gabriel García Márquez?",
                "options": [
                    "El realismo mágico",
                    "El romanticismo oscuro",
                    "El ultraísmo",
                    "El neoclasicismo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Rayuela de Julio Cortázar es una obra cumbre que propone múltiples ordenes de lectura.'",
                "options": [
                    "Rayuela de Julio Cortázar é uma obra-prima que propõe múltiplas ordens de leitura.",
                    "Rayuela é um poema sobre a lua.",
                    "Cortázar não escreveu romances.",
                    "Rayuela foi proibido."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual poeta espanhol é o autor de 'Romancero Gitano' e 'La casa de Bernarda Alba'?",
                "options": [
                    "Federico García Lorca",
                    "Pablo Neruda",
                    "Jorge Luis Borges",
                    "Mario Vargas Llosa"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. O que significa a expressão literária 'Una obra cumbre'?",
                "options": [
                    "Uma obra-prima / o ponto máximo da produção de um autor",
                    "Um livro pequeno",
                    "Uma poesia antiga",
                    "Um rascunho incompleto"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Cien años de soledad es una obra cumbre de la literatura hispana y del realismo mágico.",
                "words": [
                    "Cien",
                    "años",
                    "de",
                    "soledad",
                    "es",
                    "una",
                    "obra",
                    "cumbre",
                    "de",
                    "la",
                    "literatura",
                    "hispana",
                    "y",
                    "del",
                    "realismo",
                    "mágico."
                ],
                "translation": "Cem anos de solidão é uma obra-prima da literatura hispânica e do realismo mágico."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Profesor",
                "npcName": "Profesor",
                "text": "Hoy analizaremos la apertura de Cien años de soledad de Gabriel García Márquez.",
                "npcMessage": "Hoy analizaremos la apertura de Cien años de soledad de Gabriel García Márquez.",
                "translation": "Hoje analisaremos a abertura de Cem anos de solidão de Gabriel García Márquez."
            },
            {
                "speaker": "Estudiante",
                "npcName": "Estudiante",
                "text": "Es fascinante cómo introduce el realismo mágico desde la primera frase.",
                "npcMessage": "Es fascinante cómo introduce el realismo mágico desde la primera frase.",
                "translation": "É fascinante como introduz o realismo mágico desde a primeira frase."
            },
            {
                "speaker": "Profesor",
                "npcName": "Profesor",
                "text": "Efectivamente. Es una obra cumbre que cambió la literatura universal.",
                "npcMessage": "Efectivamente. Es una obra cumbre que cambió la literatura universal.",
                "translation": "Efetivamente. É uma obra-prima que mudou a literatura universal."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Una obra cumbre'?",
                "options": [
                    {
                        "label": "Uma obra-prima / ápice literário",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Um livro de montanha",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) O que caracteriza o pronome relativo 'cuyo' em 'de cuyo nombre no quiero acordarme'?",
                "options": [
                    {
                        "label": "É um relativo possessivo culto que concorda em gênero e número com o substantivo seguinte (nombre)",
                        "isCorrect": true,
                        "explanation": "Exato! Sintaxe clássica erudita."
                    },
                    {
                        "label": "É um verbo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer referir-se à vila mítica onde se passa a história de Cien Años de Soledad. Qual é?",
                "options": [
                    {
                        "label": "Macondo",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Comala",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Las metáforas poéticas de Lorca evocan la fuerza de la naturaleza y la tragedia.'",
                "options": [
                    {
                        "label": "As metáforas poéticas de Lorca evocam a força da natureza e a tragédia.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Lorca escreveu contos cômicos.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Quem é o autor argentino de 'El Aleph' e 'Ficciones', mestre do conto filosófico?",
                "options": [
                    {
                        "label": "Jorge Luis Borges",
                        "isCorrect": true,
                        "explanation": "Fantástico! Ícone da literatura hispano-americana."
                    },
                    {
                        "label": "Octavio Paz",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_14",
        "title": "14. Comprensión del Humor, Ironía y Sarcasmo",
        "level": "B2",
        "description": "Identifique duplo sentido, trocadilhos, ironia e o humor característico do mundo hispânico.",
        "icon": "😏",
        "stage1_context": {
            "missionTitle": "Módulo 14: Comprensión del Humor, Ironía y Sarcasmo",
            "missionDescription": "Domine as nuances de duplo sentido, ironia fina e o estilo de humor irônico indispensável para a fluência cultural.",
            "audioGuide": "¡Qué rápido eres! (dito quando alguém se atrasa duas horas). Entender el doble sentido."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "El doble sentido",
                "Portuguese": "O duplo sentido",
                "Audio": "El doble sentido",
                "timeContext": "Ambivalência semântica humorística."
            },
            {
                "type": "vocab",
                "Spanish": "Hablar con ironía / sarcasmo",
                "Portuguese": "Falar com ironia / sarcasmo",
                "Audio": "Hablar con ironía",
                "timeContext": "Tom de voz irônico na comunicação."
            },
            {
                "type": "vocab",
                "Spanish": "¡No me digas!",
                "Portuguese": "Não me diga! (Expressão irônica de falsa surpresa)",
                "Audio": "No me digas",
                "timeContext": "Reação irônica a fatos óbvios."
            },
            {
                "type": "vocab",
                "Spanish": "¡Qué gracioso! / ¡Qué chistoso!",
                "Portuguese": "Que engraçado! / Que divertido!",
                "Audio": "Qué gracioso",
                "timeContext": "Elogio ao humor de uma piada."
            },
            {
                "type": "vocab",
                "Spanish": "Captar la broma",
                "Portuguese": "Entender a piada/brincadeira",
                "Audio": "Captar la broma",
                "timeContext": "Compreensão pragmática de humor."
            },
            {
                "type": "grammar_pill",
                "title": "Ironia por Antífrase na Fala Cotidiana",
                "rule": "Dizer o oposto do que se quer expressar com entonação específica: ¡Qué puntual eres! (quando a pessoa chega muito atrasada) ou ¡Qué día más bonito! (durante um temporal).",
                "formula": "Antífrase ➔ Afirmação positiva em situação negativa",
                "example": "¡Qué rápido conduces! (a quem dirige muito devagar)."
            },
            {
                "type": "grammar_pill",
                "title": "Trocadilhos e Jogos de Palavras (Juegos de palabras / Chistes)",
                "rule": "O humor hispânico usa frequentemente a polissemia e semelhança sonora de palavras (¿Por qué el libro de matemáticas estaba triste? Porque tenía muchos problemas).",
                "formula": "Duplo sentido lexico ➔ Trocadilho humorístico",
                "example": "Un chiste basado en el doble significado de 'problema'."
            },
            {
                "type": "grammar_pill",
                "title": "Marcadores Pragmáticos de Ironia (¡No me digas! / ¡Mira tú por dónde!)",
                "rule": "Expressões fixas usadas para responder com ironia e sarcasmo a fatos óbvios trazidos pelo interlocutor.",
                "formula": "¡No me digas! / ¡Mira tú por dónde!",
                "example": "- ¡Ha empezado a llover! - ¡No me digas, si está el cielo negro!"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. O que significa quando alguém diz '¡Qué puntual eres!' a uma pessoa que chegou 2 horas atrasada?",
                "options": [
                    "É uma ironia por antífrase (quer dizer que a pessoa está muito atrasada)",
                    "É um elogio sincero",
                    "É uma promessa de pontualidade",
                    "É uma despedida"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual expressão exclamativa é usada para responder ironicamente a uma obviedade?",
                "options": [
                    "¡No me digas!",
                    "¡Hasta luego!",
                    "¡Buen provecho!",
                    "¡De nada!"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Llegaste dos horas tarde y me dijiste con ironía que el tráfico estaba estupendo.'",
                "options": [
                    "Você chegou duas horas atrasado e me disse com ironia que o trânsito estava ótimo.",
                    "O trânsito estava muito bom ontem.",
                    "Não havia trânsito na rua.",
                    "Cheguei no horário combinado."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. O que significa a locução 'Captar la broma'?",
                "options": [
                    "Compreender a piada ou a intenção bem-humorada de uma frase",
                    "Fazer uma piada ruim",
                    "Contar uma história triste",
                    "Escrever um livro de humor"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'Ese comediante utiliza mucho el _____ (doble sentido) en sus monólogos.'",
                "options": [
                    "doble sentido",
                    "doble tiempo",
                    "doble espacio",
                    "doble verso"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Llegaste dos horas tarde y me dijiste con ironía que el tráfico estaba estupendo.",
                "words": [
                    "Llegaste",
                    "dos",
                    "horas",
                    "tarde",
                    "y",
                    "me",
                    "dijiste",
                    "con",
                    "ironía",
                    "que",
                    "el",
                    "tráfico",
                    "estaba",
                    "estupendo."
                ],
                "translation": "Você chegou duas horas atrasado e me disse com ironia que o trânsito estava ótimo."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Marcos",
                "npcName": "Marcos",
                "text": "¡Vaya! Parece que se ha caído todo el café sobre el informe recién impreso.",
                "npcMessage": "¡Vaya! Parece que se ha caído todo el café sobre el informe recién impreso.",
                "translation": "Poxa! Parece que caiu todo o café sobre o relatório recém-impresso."
            },
            {
                "speaker": "Elena",
                "npcName": "Elena",
                "text": "¡Qué campeones somos! ¡Qué gran manera de empezar el lunes!",
                "npcMessage": "¡Qué campeones somos! ¡Qué gran manera de empezar el lunes!",
                "translation": "Que campeões somos! Que grande maneira de começar a segunda-feira!"
            },
            {
                "speaker": "Marcos",
                "npcName": "Marcos",
                "text": "Me encanta tu ironía mañanera. Vamos a imprimirlo otra vez.",
                "npcMessage": "Me encanta tu ironía mañanera. Vamos a imprimirlo otra vez.",
                "translation": "Adoro sua ironia matinal. Vamos imprimi-lo outra vez."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'El doble sentido'?",
                "options": [
                    {
                        "label": "O duplo sentido / ambiguidade humorística",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Uma rua com duas direções",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Como a entonação ajuda a identificar a ironia em espanhol?",
                "options": [
                    {
                        "label": "Alterando o tom para enfatizar o contraste irônico em relação à realidade",
                        "isCorrect": true,
                        "explanation": "Exato! Marcador prosódico da ironia."
                    },
                    {
                        "label": "Gritando sempre",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Alguém te conta que o sol nasce no leste como se fosse uma grande descoberta. O que responde ironicamente?",
                "options": [
                    {
                        "label": "¡No me digas! ¡Qué descubrimiento tan fascinante!",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "No lo sabía",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'No te tomes sus palabras al pie de la letra, estaba hablando con sarcasmo.'",
                "options": [
                    {
                        "label": "Não leve as palavras dele ao pé da letra, ele estava falando com sarcasmo.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Ele escreveu uma carta com sarcasmo.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a expressão 'Al pie de la letra'?",
                "options": [
                    {
                        "label": "Literalmente / Exatamente como está escrito sem interpretações figuradas",
                        "isCorrect": true,
                        "explanation": "Fantástico! Expressão idiomática de interpretação."
                    },
                    {
                        "label": "No rodapé da página",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_15",
        "title": "15. Refranes y Proverbios Populares",
        "level": "B2",
        "description": "Domine provérbios como No por mucho madrugar amanece más temprano e A caballo regalado...",
        "icon": "🦉",
        "stage1_context": {
            "missionTitle": "Módulo 15: Refranes y Proverbios Populares",
            "missionDescription": "Aprenda a sabedoria popular tradicional contida nos provérbios e ditados mais célebres da língua espanhola.",
            "audioGuide": "No por mucho madrugar amanece más temprano. A caballo regalado no se le mira el diente."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "No por mucho madrugar amanece más temprano",
                "Portuguese": "Não adianta acordar muito cedo para o sol nascer mais rápido (Tudo tem seu tempo)",
                "Audio": "No por mucho madrugar",
                "timeContext": "Ditado popular de paciência."
            },
            {
                "type": "vocab",
                "Spanish": "A caballo regalado no se le mira el diente",
                "Portuguese": "Em cavalo dado não se olha os dentes",
                "Audio": "A caballo regalado",
                "timeContext": "Ditado popular de gratidão."
            },
            {
                "type": "vocab",
                "Spanish": "Más vale pájaro en mano que ciento volando",
                "Portuguese": "Mais vale um pássaro na mão do que dois voando",
                "Audio": "Más vale pájaro en mano",
                "timeContext": "Ditado popular de prudência."
            },
            {
                "type": "vocab",
                "Spanish": "En boca cerrada no entran moscas",
                "Portuguese": "Em boca fechada não entra mosca",
                "Audio": "En boca cerrada",
                "timeContext": "Ditado popular de discrição."
            },
            {
                "type": "vocab",
                "Spanish": "De tal palo, tal astilla",
                "Portuguese": "Tal pai, tal filho / Filho de peixe, peixinho é",
                "Audio": "De tal palo tal astilla",
                "timeContext": "Ditado de hereditariedade."
            },
            {
                "type": "grammar_pill",
                "title": "Estrutura Sintática dos Refranes (Paralelismo e Rima)",
                "rule": "Provérbios populares usam paralelismo sintático e rima interna para facilitar a memorização oral (No por mucho madrugar / amanece más temprano).",
                "formula": "Estrutura A (Rima) ➔ Estrutura B (Moral)",
                "example": "El que busca, encuentra."
            },
            {
                "type": "grammar_pill",
                "title": "Uso Pragmático de Cortar o Ditado pela Metade",
                "rule": "Na fala nativa cotidianas, é muito comum mencionar apenas a primeira metade do provérbio, deixando o restante subentendido (Bueno, ya sabes, más vale pájaro en mano...).",
                "formula": "Metade inicial do ditado + [...] subentendido",
                "example": "En boca cerrada..."
            },
            {
                "type": "grammar_pill",
                "title": "Equivalências Culturais de Ditados Populares",
                "rule": "Muitos ditados possuem equivalentes exatos em português por compartilharem raízes ibéricas e latinas (De tal palo, tal astilla ➔ Tal pai, tal filho).",
                "formula": "Ditado Hispânico ➔ Ditado Lusófono equivalente",
                "example": "A caballo regalado no se le mira el diente."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual provérbio recomenda paciência lembrando que não adianta apressar o tempo natural das coisas?",
                "options": [
                    "No por mucho madrugar amanece más temprano",
                    "A caballo regalado no se le mira el diente",
                    "En boca cerrada no entran moscas",
                    "De tal palo tal astilla"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. O que significa o ditado popular 'Más vale pájaro en mano que ciento volando'?",
                "options": [
                    "É melhor ter algo seguro agora do que arriscar tudo por expectativas incertas",
                    "Pássaros voam alto",
                    "Caçar pássaros é difícil",
                    "Não se deve ter pássaros"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'De tal palo, tal astilla: el hijo de Juan es tan buen fotógrafo como su padre.'",
                "options": [
                    "Tal pai, tal filho: o filho de Juan é tão bom fotógrafo como seu pai.",
                    "Juan não gosta de fotografia.",
                    "O filho de Juan é diferente dele.",
                    "A madeira era de boa qualidade."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a versão em espanhol para 'Em boca fechada não entra mosca'?",
                "options": [
                    "En boca cerrada no entran moscas",
                    "En boca abierta entran pájaros",
                    "Boca callada comemos",
                    "No hables en la mesa"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete o provérbio: 'A caballo regalado no se le mira el _____ (diente).'?",
                "options": [
                    "diente",
                    "ojo",
                    "pelo",
                    "pie"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Como dice el refrán popular, más vale pájaro en mano que ciento volando.",
                "words": [
                    "Como",
                    "dice",
                    "el",
                    "refrán",
                    "popular,",
                    "más",
                    "vale",
                    "pájaro",
                    "en",
                    "mano",
                    "que",
                    "ciento",
                    "volando."
                ],
                "translation": "Como diz o ditado popular, mais vale um pássaro na mão do que dois voando."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Abuela",
                "npcName": "Abuela",
                "text": "No te impacientes por los resultados del examen, nieto. No por mucho madrugar amanece más temprano.",
                "npcMessage": "No te impacientes por los resultados del examen, nieto. No por mucho madrugar amanece más temprano.",
                "translation": "Não fique impaciente pelos resultados da prova, neto. Não adianta acordar muito cedo para o sol nascer mais rápido."
            },
            {
                "speaker": "Nieto",
                "npcName": "Nieto",
                "text": "Tienes razón, abuela. Además me conformo con la oferta que tengo: más vale pájaro en mano.",
                "npcMessage": "Tienes razón, abuela. Además me conformo con la oferta que tengo: más vale pájaro en mano.",
                "translation": "Você tem razão, vovó. Além disso conformo-me com a oferta que tenho: mais vale um pássaro na mão."
            },
            {
                "speaker": "Abuela",
                "npcName": "Abuela",
                "text": "¡De tal palo, tal astilla! Eres tan prudente como tu padre.",
                "npcMessage": "¡De tal palo, tal astilla! Eres tan prudente como tu padre.",
                "translation": "Filho de peixe, peixinho é! Você é tão prudente como seu pai."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'El refrán'?",
                "options": [
                    {
                        "label": "O provérbio / O ditado popular",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "O poema culto",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que é comum cortar provérbios pela metade na fala nativa?",
                "options": [
                    {
                        "label": "Porque pertencem à memória cultural compartilhada e a segunda metade é subentendida",
                        "isCorrect": true,
                        "explanation": "Exato! Fenômeno de economia linguística pragmática."
                    },
                    {
                        "label": "Por esquecimento",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Alguém te deu um presente simples e você quer aceitar sem criticar. Qual ditado usa?",
                "options": [
                    {
                        "label": "Bueno, a caballo regalado no se le mira el diente.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "En boca cerrada no entran moscas",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Al mal tiempo, buena cara: debemos mantener el optimismo.'",
                "options": [
                    {
                        "label": "Fazer cara boa ao tempo ruim (Em tempos difíceis, manter o otimismo).",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O tempo está chuvoso hoje.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é o provérbio espanhol equivalente a 'Quem tudo quer, tudo perde'?",
                "options": [
                    {
                        "label": "El que mucho abarca, poco aprieta",
                        "isCorrect": true,
                        "explanation": "Fantástico! Provérbio clássico sobre ganância e dispersão."
                    },
                    {
                        "label": "Más vale pájaro en mano",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_16",
        "title": "16. Conectores de Matiz Avanzados",
        "level": "B2",
        "description": "Use matizes complexos como De ahí que + Subjuntivo, Por ende, Si bien, Máxime teniendo en cuenta.",
        "icon": "🔀",
        "stage1_context": {
            "missionTitle": "Módulo 16: Conectores de Matiz Avanzados",
            "missionDescription": "Eleve a sofisticação do seu espanhol escrito e falado utilizando conectores formais de nuances precisas.",
            "audioGuide": "Llovió mucho; de ahí que se cancelara el evento. Si bien es cierto, por ende debemos actuar."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "De ahí que + Subjuntivo",
                "Portuguese": "Daí que... / Por essa razão (exige subjuntivo)",
                "Audio": "De ahí que",
                "timeContext": "Conector conclusivo de consequência lógica com subjuntivo."
            },
            {
                "type": "vocab",
                "Spanish": "Por ende",
                "Portuguese": "Por conseguinte / Portanto (registro culto)",
                "Audio": "Por ende",
                "timeContext": "Conector conclusivo de alta formalidade."
            },
            {
                "type": "vocab",
                "Spanish": "Si bien + Indicativo",
                "Portuguese": "Se bem que... / Embora (com indicativo)",
                "Audio": "Si bien",
                "timeContext": "Conector concessivo formal."
            },
            {
                "type": "vocab",
                "Spanish": "Máxime teniendo en cuenta...",
                "Portuguese": "Principalmente / Especialmente tendo em vista...",
                "Audio": "Máxime teniendo en cuenta",
                "timeContext": "Reforço de argumento crucial."
            },
            {
                "type": "vocab",
                "Spanish": "Aun cuando + Subjuntivo",
                "Portuguese": "Ainda quando / Mesmo quando...",
                "Audio": "Aun cuando",
                "timeContext": "Conector concessivo hipotético."
            },
            {
                "type": "grammar_pill",
                "title": "A Regra de Ouro 'De ahí que + Subjuntivo'",
                "rule": "O conector conclusivo de consequência De ahí que EXIGE SEMPRE o verbo subordinado no Subjuntivo (Había mucha nieve; de ahí que se suspendieran los vuelos).",
                "formula": "Causa + ; de ahí que + Subjuntivo",
                "example": "El informe era confidencial; de ahí que no pudiera revelarlo."
            },
            {
                "type": "grammar_pill",
                "title": "Contraste Concessivo Culto 'Si bien + Indicativo'",
                "rule": "A locução concessiva formal Si bien é seguida obrigatoriamente de Indicativo para introduzir uma concessão aceita (Si bien el precio es elevado, la calidad es excelente).",
                "formula": "Si bien + Indicativo ➔ Concessão aceita",
                "example": "Si bien no tenemos los datos finales, podemos avanzar."
            },
            {
                "type": "grammar_pill",
                "title": "Conector Conclusivo 'Por ende' e Ênfase 'Máxime'",
                "rule": "Por ende equivale ao latim per consequens (portanto culto). Máxime teniendo en cuenta... usa-se para reforçar uma razão primordial em um ensaio executivo.",
                "formula": "Por ende ➔ Portanto culto | Máxime ➔ Especialmente",
                "example": "No hay acuerdo; por ende, se cancela el proyecto."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual o tempo verbal OBRIGATÓRIO após o conector de consequência 'De ahí que...'?",
                "options": [
                    "Modo Subjuntivo (ex: De ahí que se cancelara el concierto)",
                    "Presente do Indicativo",
                    "Pretérito Indefinido",
                    "Imperativo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual conector conclusivo culto equivale a 'portanto / por conseguinte' em ensaios executivos?",
                "options": [
                    "Por ende",
                    "De ahí",
                    "Si bien",
                    "Máxime"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Si bien el mercado es competitivo, la empresa ha obtenido beneficios récord este año.'",
                "options": [
                    "Embora o mercado seja competitivo, a empresa obteve lucros recorde este ano.",
                    "O mercado não é competitivo.",
                    "A empresa teve prejuízo este ano.",
                    "Não vendemos nada no mercado."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a locução usada para reforçar a razão mais importante de um argumento?",
                "options": [
                    "Máxime teniendo en cuenta las circunstancias actuales",
                    "Por ende teniendo",
                    "De ahí teniendo",
                    "Si bien teniendo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'Había mucha niebla en la pista; de ahí que los vuelos se _____ (retrasar).'?",
                "options": [
                    "retrasaran / retrasasen (Subjuntivo)",
                    "retrasaron",
                    "retrasan",
                    "retrasado"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "El tráfico estaba colapsado; de ahí que la reunión se retrasara media hora.",
                "words": [
                    "El",
                    "tráfico",
                    "estaba",
                    "colapsado;",
                    "de",
                    "ahí",
                    "que",
                    "la",
                    "reunión",
                    "se",
                    "retrasara",
                    "media",
                    "hora."
                ],
                "translation": "O trânsito estava parado; daí que a reunião se atrasou meia hora."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Analista A",
                "npcName": "Analista A",
                "text": "La inflación ha subido un tres por ciento; por ende, los tipos de interés se ajustarán.",
                "npcMessage": "La inflación ha subido un tres por ciento; por ende, los tipos de interés se ajustarán.",
                "translation": "A inflação subiu três por cento; portanto, as taxas de juros serão ajustadas."
            },
            {
                "speaker": "Analista B",
                "npcName": "Analista B",
                "text": "Si bien la medida es impopular, de ahí que el banco central actúe con firmeza.",
                "npcMessage": "Si bien la medida es impopular, de ahí que el banco central actúe con firmeza.",
                "translation": "Embora a medida seja impopular, daí que o banco central atue com firmeza."
            },
            {
                "speaker": "Analista A",
                "npcName": "Analista A",
                "text": "Es lo correcto, máxime teniendo en cuenta la inestabilidad internacional.",
                "npcMessage": "Es lo correcto, máxime teniendo en cuenta la inestabilidad internacional.",
                "translation": "É o correto, especialmente tendo em vista a instabilidade internacional."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Por ende'?",
                "options": [
                    {
                        "label": "Por conseguinte / Portanto (registro culto)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Por enquanto",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que dizemos 'De ahí que sea difícil' com subjuntivo sea?",
                "options": [
                    {
                        "label": "Porque 'De ahí que' exige obrigatoriamente a oração subordinada no Subjuntivo",
                        "isCorrect": true,
                        "explanation": "Exato! Regra absoluta deste conector conclusivo."
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
                "question": "3. (Contexto) Você quer reforçar uma decisão considerando a crise atual. O que usa?",
                "options": [
                    {
                        "label": "Debemos ser cautos, máxime teniendo en cuenta la situación actual.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Sin embargo la situación",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Aun cuando las pruebas sean difíciles, mantendremos el compromiso.'",
                "options": [
                    {
                        "label": "Mesmo quando / Ainda quando as provas sejam difíceis, manteremos o compromisso.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "As provas foram fáceis ontem.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual é a diferença entre 'Si bien' e 'Aunque'?",
                "options": [
                    {
                        "label": "'Si bien' é sempre formal e seguido de Indicativo; 'Aunque' aceita Indicativo e Subjuntivo",
                        "isCorrect": true,
                        "explanation": "Fantástico! Nuance gramatical avançada do nível B2."
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
        "id": "es_b2_mod_17",
        "title": "17. El Valor de las Preposiciones Complejas",
        "level": "B2",
        "description": "Aplique locuções como A causa de, en virtud de, con respecto a, a raíz de, con vistas a.",
        "icon": "📍",
        "stage1_context": {
            "missionTitle": "Módulo 17: El Valor de las Preposiciones Complejas",
            "missionDescription": "Domine as locuções prepositivas de nível avançado para expressar causa, finalidade, origem e ressalva.",
            "audioGuide": "A raíz de la nueva ley, la empresa cambió su política. Con vistas a mejorar los resultados..."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "A raíz de...",
                "Portuguese": "Em decorrência de... / A partir de...",
                "Audio": "A raíz de",
                "timeContext": "Locução causal de origem."
            },
            {
                "type": "vocab",
                "Spanish": "Con vistas a + Infinitivo",
                "Portuguese": "Com vistas a... / Visando...",
                "Audio": "Con vistas a",
                "timeContext": "Locução final de objetivo futuro."
            },
            {
                "type": "vocab",
                "Spanish": "En virtud de...",
                "Portuguese": "Em virtude de... / Com base em...",
                "Audio": "En virtud de",
                "timeContext": "Locução de fundamentação legal ou lógica."
            },
            {
                "type": "vocab",
                "Spanish": "Al margen de...",
                "Portuguese": "À margem de... / Deixando de lado...",
                "Audio": "Al margen de",
                "timeContext": "Locução de ressalva/exclusão."
            },
            {
                "type": "vocab",
                "Spanish": "A tenor de...",
                "Portuguese": "De acordo com... / Tendo em vista...",
                "Audio": "A tenor de",
                "timeContext": "Locução de conformidade factual."
            },
            {
                "type": "grammar_pill",
                "title": "Locução Causal de Origem 'A raíz de'",
                "rule": "Usa-se para indicar o fato desencadeador original de uma sequência de acontecimentos (A raíz de la crisis sanitaria, se implementó el teletrabajo).",
                "formula": "A raíz de + [fato desencadeador]",
                "example": "A raíz del accidente, se modificaron las normas de seguridad."
            },
            {
                "type": "grammar_pill",
                "title": "Locução Final de Perspectiva 'Con vistas a + Infinitivo/Substantivo'",
                "rule": "Indica o objetivo ou meta futura em prol do qual uma ação presente se realiza (Trabajamos duro con vistas a expandir la marca).",
                "formula": "Con vistas a + Infinitivo / Substantivo",
                "example": "Se han reunido con vistas a firmar la paz."
            },
            {
                "type": "grammar_pill",
                "title": "Locuções de Exclusão e Fundamentação (Al margen de / En virtud de)",
                "rule": "Al margen de significa colocar um tema de lado por enquanto (Al margen de la polémica, el proyecto es bueno). En virtud de invoca autoridade ou poder legal (En virtud de las facultades otorgadas...).",
                "formula": "Al margen de ➔ Ressalva | En virtud de ➔ Fundamentação",
                "example": "En virtud de lo acordado, se firma el decreto."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual locução prepositiva expressa a causa desencadeadora de um evento ('em decorrência de / a partir de')?",
                "options": [
                    "A raíz de...",
                    "Con vistas a...",
                    "Al margen de...",
                    "En virtud de..."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como dizer 'visando / com vistas a melhorar a qualidade' usando uma locução prepositiva?",
                "options": [
                    "Con vistas a mejorar la calidad",
                    "A raíz de mejorar",
                    "Al margen de mejorar",
                    "Por virtud de mejorar"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Al margen de las opiniones personales, el resultado técnico ha sido impecable.'",
                "options": [
                    "À margem das opiniões pessoais, o resultado técnico foi impecável.",
                    "As opiniões pessoais foram aceitas.",
                    "O resultado técnico foi ruim.",
                    "Não houve opiniões."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual locução invoca uma prerrogativa legal ou autoridade formal?",
                "options": [
                    "En virtud de las atribuciones concedidas por la ley",
                    "A raíz de las leyes",
                    "Al margen de las leyes",
                    "Con vistas a las leyes"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: '_____ (Con vistas) a la expansión del negocio, contrataron más comerciales.'",
                "options": [
                    "Con vistas",
                    "A raíz",
                    "Al margen",
                    "En virtud"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "A raíz de las nuevas medidas, la empresa contrató personal con vistas a mejorar el servicio.",
                "words": [
                    "A",
                    "raíz",
                    "de",
                    "las",
                    "nuevas",
                    "medidas,",
                    "la",
                    "empresa",
                    "contrató",
                    "personal",
                    "con",
                    "vistas",
                    "a",
                    "mejorar",
                    "el",
                    "servicio."
                ],
                "translation": "Em decorrência das novas medidas, a empresa contratou pessoal visando melhorar o serviço."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Director A",
                "npcName": "Director A",
                "text": "A raíz de la auditoría interna, debemos reestructurar el departamento.",
                "npcMessage": "A raíz de la auditoría interna, debemos reestructurar el departamento.",
                "translation": "Em decorrência da auditoria interna, devemos reestruturar o departamento."
            },
            {
                "speaker": "Director B",
                "npcName": "Director B",
                "text": "De acuerdo. Trabajemos con vistas a presentar la nueva propuesta el lunes.",
                "npcMessage": "De acuerdo. Trabajemos con vistas a presentar la nueva propuesta el lunes.",
                "translation": "De acordo. Trabalhemos visando apresentar a nova proposta na segunda-feira."
            },
            {
                "speaker": "Director A",
                "npcName": "Director A",
                "text": "Perfecto. Al margen de los costes, lo importante es la eficiencia.",
                "npcMessage": "Perfecto. Al margen de los costes, lo important es la eficiencia.",
                "translation": "Perfeito. Deixando de lado os custos, o importante é a eficiência."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'A raíz de...'?",
                "options": [
                    {
                        "label": "Em decorrência de... / Em consequência direta de...",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Na raiz da planta",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) O que expressa a locução 'Con vistas a + Infinitivo'?",
                "options": [
                    {
                        "label": "Finalidade e perspectiva futura de um plano ou projeto",
                        "isCorrect": true,
                        "explanation": "Exato! Locução prepositiva de finalidade."
                    },
                    {
                        "label": "Visão ocular",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer deixar de lado uma controvérsia política e focar nos fatos. O que diz?",
                "options": [
                    {
                        "label": "Al margen de la controversia política, los hechos son claros.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "A raíz de la política",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'En virtud de lo dispuesto en el artículo cuatro, se concede la licencia.'",
                "options": [
                    {
                        "label": "Em virtude do disposto no artigo quatro, concede-se a licença.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "A licença foi negada.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual locução prepositiva equivale a 'no que diz respeito a / em relação a'?",
                "options": [
                    {
                        "label": "Con respecto a / En relación con",
                        "isCorrect": true,
                        "explanation": "Fantástico! Locução de referência temática."
                    },
                    {
                        "label": "Al margen de",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_18",
        "title": "18. Estilo Directo e Indirecto Avanzado en Noticiero",
        "level": "B2",
        "description": "Transponha discursos jornalísticos complexos em telejornais e declarações de imprensa.",
        "icon": "📺",
        "stage1_context": {
            "missionTitle": "Módulo 18: Estilo Directo e Indirecto Avanzado en Noticiero",
            "missionDescription": "Aprenda a transpor discursos jornalísticos de alta complexidade com mudanças de tempo, espaço e pronomes.",
            "audioGuide": "El ministro declaró: 'Habíamos tomado las medidas' ➔ El ministro declaró que habían tomado las medidas."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Declaró que...",
                "Portuguese": "Declarou que...",
                "Audio": "Declaró que",
                "timeContext": "Verbo de dicção jornalística."
            },
            {
                "type": "vocab",
                "Spanish": "Aseveró que...",
                "Portuguese": "Asseverou / Afirmou categoricamente que...",
                "Audio": "Aseveró que",
                "timeContext": "Afirmação firme jornalística."
            },
            {
                "type": "vocab",
                "Spanish": "Puso de relieve que...",
                "Portuguese": "Destacou / Pôs em relevo que...",
                "Audio": "Puso de relieve que",
                "timeContext": "Destaque de declaração."
            },
            {
                "type": "vocab",
                "Spanish": "Desmintió que + Subjuntivo",
                "Portuguese": "Desmentiu que + Subjuntivo",
                "Audio": "Desmintió que",
                "timeContext": "Negação de boato ou acusação."
            },
            {
                "type": "vocab",
                "Spanish": "Manifestó su intención de...",
                "Portuguese": "Manifestou sua intenção de...",
                "Audio": "Manifestó su intención",
                "timeContext": "Declaração de metas políticas/corporativas."
            },
            {
                "type": "grammar_pill",
                "title": "Verbos de Dicção Jornalística Avançados",
                "rule": "Em telejornais, substitui-se o simples decir por verbos de maior precisão semântica: aseverar, manifestar, sostener, desmentir, apuntar.",
                "formula": "Aseverar / Manifestar / Sostener + que",
                "example": "El presidente aseveró que las reformas continuarán."
            },
            {
                "type": "grammar_pill",
                "title": "Negação de Declarações (Desmentir que + Subjuntivo)",
                "rule": "O verbo desmentir exige Subjuntivo na oração subordinada ao contestar um fato (El portavoz desmintió que hubiera habido heridos).",
                "formula": "Desmentir + que + Subjuntivo",
                "example": "El ministerio desmintió que se fueran a subir los impuestos."
            },
            {
                "type": "grammar_pill",
                "title": "Concordância de Tempos Compostos no Estilo Indireto",
                "rule": "O Pretérito Perfecto transforma-se em Pretérito Pluscuamperfecto ('Hemos firmado el pacto' ➔ Afirmó que habían firmado el pacto). O Futuro Simple transforma-se em Condicional Simple ('Viajaré mañana' ➔ Dijo que viajaría al día siguiente).",
                "formula": "Perfecto ➔ Pluscuamperfecto | Futuro ➔ Condicional",
                "example": "Dijo que viajaría al día siguiente."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como transpor para o estilo indireto a declaração do ministro: 'Aprobaremos la ley mañana'?",
                "options": [
                    "El ministro dijo que aprobarían la ley al día siguiente (Condicional)",
                    "El ministro dijo aprobar la ley",
                    "El ministro dijo que aprueban hoy",
                    "El ministro dijo aprobaremos"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual tempo verbal DEVE acompanhar o verbo de dicção 'desmentir que...'?",
                "options": [
                    "Modo Subjuntivo (ex: Desmintió que hubiera pérdidas)",
                    "Modo Indicativo presente",
                    "Futuro simple",
                    "Imperativo"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'El portavoz aseveró que el presupuesto estaba garantizado y puso de relieve la estabilidad.'",
                "options": [
                    "O porta-voz afirmou categoricamente que o orçamento estava garantido e destacou a estabilidade.",
                    "O porta-voz cancelou o orçamento.",
                    "Não havia estabilidade no orçamento.",
                    "O porta-voz não falou com a imprensa."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Como se transforma a frase original 'Hemos terminado el informe' no estilo indireto jornalístico?",
                "options": [
                    "Declaró que habían terminado el informe (Pluscuamperfecto)",
                    "Declaró que han terminado",
                    "Declaró terminar",
                    "Declaró terminaron"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete o relato do noticiário: 'El presidente desmintió que _____ (haber) discrepancias en el gabinete.'",
                "options": [
                    "hubiera / hubiese (Subjuntivo)",
                    "había",
                    "hay",
                    "habrá"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "El portavoz desmintió que hubiera pérdidas y aseveró que el presupuesto estaba garantizado.",
                "words": [
                    "El",
                    "portavoz",
                    "desmintió",
                    "que",
                    "hubiera",
                    "pérdidas",
                    "y",
                    "aseveró",
                    "que",
                    "el",
                    "presupuesto",
                    "estaba",
                    "garantizado."
                ],
                "translation": "O porta-voz desmentiu que houvesse perdas e afirmou categoricamente que o orçamento estava garantido."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Periodista",
                "npcName": "Periodista",
                "text": "Última hora: el portavoz del gobierno acaba de ofrecer declaraciones en rueda de prensa.",
                "npcMessage": "Última hora: el portavoz del gobierno acaba de ofrecer declaraciones en rueda de prensa.",
                "translation": "Última hora: o porta-voz do governo acaba de dar declarações em coletiva de imprensa."
            },
            {
                "speaker": "Presentadora",
                "npcName": "Presentadora",
                "text": "Sí, aseveró que la reunión había sido muy fructífera y desmintió que hubiera desacuerdos.",
                "npcMessage": "Sí, aseveró que la reunión había sido muy fructífera y desmintió que hubiera desacuerdos.",
                "translation": "Sim, afirmou categoricamente que a reunião tinha sido muito frutífera e desmentiu que houvesse desacordos."
            },
            {
                "speaker": "Periodista",
                "npcName": "Periodista",
                "text": "Además, manifestó su intención de firmar el tratado mañana.",
                "npcMessage": "Además, manifestó su intención de firmar el tratado mañana.",
                "translation": "Além disso, manifestou sua intenção de assinar o tratado amanhã."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Aseverar' na imprensa?",
                "options": [
                    {
                        "label": "Afirmar com firmeza e certeza categórica",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Duvidar abertamente",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que o Futuro Simple 'viajaré' vira Condicional 'viajaría' no estilo indireto passado?",
                "options": [
                    {
                        "label": "Porque representa o futuro visto a partir de um momento no passado",
                        "isCorrect": true,
                        "explanation": "Exato! Regra da transposição temporal do futuro."
                    },
                    {
                        "label": "Porque é dúvida",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) A autoridade nega publicamente que vá renunciar. O que o noticiário relata?",
                "options": [
                    {
                        "label": "El ministro desmintió que fuera a dimitir de su cargo.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "El ministro dijo que dimite hoy",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Puso de relieve la importancia del consenso para la estabilidad económica.'",
                "options": [
                    {
                        "label": "Pôs em relevo / destacou a importância do consenso para a estabilidade econômica.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Escondeu a importância da economia.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a expressão jornalística 'En rueda de prensa'?",
                "options": [
                    {
                        "label": "Em coletiva de imprensa",
                        "isCorrect": true,
                        "explanation": "Fantástico! Expressão jornalística clássica."
                    },
                    {
                        "label": "Numa rodada de jornalistas",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_19",
        "title": "19. Cambios de Significado según Ser/Estar",
        "level": "B2",
        "description": "Diferencie Ser listo vs Estar listo; Ser rico vs Estar rico; Ser verde vs Estar verde.",
        "icon": "🔄",
        "stage1_context": {
            "missionTitle": "Módulo 19: Cambios de Significado según Ser/Estar",
            "missionDescription": "Domine as drásticas mudanças de significado de adjetivos conforme o uso dos verbos SER ou ESTAR.",
            "audioGuide": "Juan es listo (inteligente) vs Juan está listo (pronto). La manzana es verde (cor) vs está verde (não madura)."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Ser listo (esperto/inteligente) / Estar listo (pronto/preparado)",
                "Portuguese": "Ser esperto / Estar pronto",
                "Audio": "Ser listo / Estar listo",
                "timeContext": "Diferença entre inteligência inerente e prontidão."
            },
            {
                "type": "vocab",
                "Spanish": "Ser rico (abastado) / Estar rico (delicioso - comida)",
                "Portuguese": "Ser rico / Estar saboroso",
                "Audio": "Ser rico / Estar rico",
                "timeContext": "Diferença entre riqueza financeira e sabor."
            },
            {
                "type": "vocab",
                "Spanish": "Ser verde (cor/ecológico) / Estar verde (não maduro/inexperiente)",
                "Portuguese": "Ser verde / Estar imaturo",
                "Audio": "Ser verde / Estar verde",
                "timeContext": "Diferença entre cor e imaturidade."
            },
            {
                "type": "vocab",
                "Spanish": "Ser atento (gentil/educado) / Estar atento (prestando atenção)",
                "Portuguese": "Ser atencioso / Estar atento",
                "Audio": "Ser atento / Estar atento",
                "timeContext": "Diferença entre gentileza e foco mental."
            },
            {
                "type": "vocab",
                "Spanish": "Ser malo (ruim/mau) / Estar malo (doente/estragado)",
                "Portuguese": "Ser mau / Estar doente",
                "Audio": "Ser malo / Estar malo",
                "timeContext": "Diferença entre essência má e estado de saúde/sabor."
            },
            {
                "type": "grammar_pill",
                "title": "Adjetivos de Inteligência e Preparação (Listo / Atento)",
                "rule": "Ser listo = ser inteligente/esperto. Estar listo = estar pronto/preparado. Ser atento = ser educado/atencioso. Estar atento = prestar atenção no momento.",
                "formula": "Ser listo (inteligente) vs Estar listo (preparado)",
                "example": "Juan es muy listo (inteligente) y ya está listo para salir (preparado)."
            },
            {
                "type": "grammar_pill",
                "title": "Adjetivos de Alimentos e Sabores (Rico / Bueno / Malo / Verde)",
                "rule": "Ser rico = ter muito dinheiro. Estar rico = comida deliciosa. Ser bueno = ser boa pessoa/de boa qualidade. Estar bueno = estar saboroso/saudável. Estar verde = fruta não madura ou pessoa sem experiência.",
                "formula": "Ser rico (dinheiro) vs Estar rico (comida saborosa)",
                "example": "El multimillonario es rico; la paella está rica."
            },
            {
                "type": "grammar_pill",
                "title": "Adjetivos de Caráter e Saúde (Malo / Orgulloso / Vivo)",
                "rule": "Ser malo = pessoa má por natureza. Estar malo = pessoa doente ou comida estragada. Ser orgulloso = pessoa soberba/arrogante. Estar orgulloso de = sentir orgulho positivo de alguém.",
                "formula": "Ser malo (caráter mau) vs Estar malo (doente)",
                "example": "No fue a trabajar porque está malo (doente)."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como dizer que uma paella está 'deliciosa' em espanhol?",
                "options": [
                    "La paella está rica",
                    "La paella es rica",
                    "La paella es verde",
                    "La paella está lista"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. O que significa quando dizemos 'Juan es muy listo'?",
                "options": [
                    "Juan é muito inteligente / esperto",
                    "Juan está pronto para sair",
                    "Juan é rico",
                    "Juan está doente"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'No te comas ese plátano todavía porque está verde y te va a doler el estómago.'",
                "options": [
                    "Não coma essa banana ainda porque está imatura / não madura e vai te dar dor de barriga.",
                    "A banana é verde de cor.",
                    "A banana é rica.",
                    "A banana está pronta."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a diferença entre 'Mi hermano está malo' e 'Mi hermano es malo'?",
                "options": [
                    "'está malo' = Está doente hoje; 'es malo' = Tem mau caráter / é uma pessoa má",
                    "Ambas significam doente",
                    "Ambas significam mau",
                    "Não há diferença"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'Los alumnos deben _____ (estar) atentos durante la explicación del profesor.'",
                "options": [
                    "estar (prestando atenção)",
                    "ser",
                    "haber",
                    "tener"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "María es una persona muy lista y educada, y ya está lista para empezar la reunión.",
                "words": [
                    "María",
                    "es",
                    "una",
                    "persona",
                    "muy",
                    "lista",
                    "y",
                    "educada,",
                    "y",
                    "ya",
                    "está",
                    "lista",
                    "para",
                    "empezar",
                    "la",
                    "reunión."
                ],
                "translation": "María é uma pessoa muito esperta e educada, e já está pronta para começar a reunião."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Camarero",
                "npcName": "Camarero",
                "text": "¿Qué tal está la sopa de mariscos, señor?",
                "npcMessage": "¿Qué tal está la sopa de mariscos, señor?",
                "translation": "Que tal está a sopa de frutos do mar, senhor?"
            },
            {
                "speaker": "Cliente",
                "npcName": "Cliente",
                "text": "¡Está riquísima! Felicitaciones al cocinero.",
                "npcMessage": "¡Está riquísima! Felicitaciones al cocinero.",
                "translation": "Está deliciosíssima! Parabéns ao cozinheiro."
            },
            {
                "speaker": "Camarero",
                "npcName": "Camarero",
                "text": "Muchas gracias. ¿Están listos para pedir el segundo plato?",
                "npcMessage": "Muchas gracias. ¿Están listos para pedir el segundo plato?",
                "translation": "Muito obrigado. Estão prontos para pedir o segundo prato?"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Estar listo'?",
                "options": [
                    {
                        "label": "Estar pronto / preparado para algo",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Ser inteligente",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que usamos ESTAR em 'La tarta está rica'?",
                "options": [
                    {
                        "label": "Porque refere-se ao sabor delicioso circunstancial do alimento",
                        "isCorrect": true,
                        "explanation": "Exato! ESTAR para avaliação de sabor."
                    },
                    {
                        "label": "Porque a torta tem dinheiro",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Um colega de trabalho está doente na cama. O que você relata?",
                "options": [
                    {
                        "label": "Hoy no viene porque está malo con fiebre.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Es un hombre malo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Estamos muy orgullosos de tus logros académicos.'",
                "options": [
                    {
                        "label": "Estamos muito orgulhosos (sentimento positivo) das suas conquistas acadêmicas.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Somos pessoas arrogantes.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa 'Estar verde' quando dito sobre um profissional novo na empresa?",
                "options": [
                    {
                        "label": "Estar sem experiência ainda / imaturo no cargo",
                        "isCorrect": true,
                        "explanation": "Fantástico! Uso figurado de imaturidade profissional."
                    },
                    {
                        "label": "Estar vestido de verde",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_20",
        "title": "20. El Subjuntivo en Frases Hechas",
        "level": "B2",
        "description": "Aplique expressões fixadas como Sea como sea, caiga quien caiga, cueste lo que cueste.",
        "icon": "💬",
        "stage1_context": {
            "missionTitle": "Módulo 20: El Subjuntivo en Frases Hechas",
            "missionDescription": "Domine as estruturas duplicadas e expressões fixas no subjuntivo para expressar determinação incondicional.",
            "audioGuide": "Sea como sea, lo conseguiremos. Cueste lo que cueste, digan lo que digan, pase lo que pase."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Sea como sea",
                "Portuguese": "Seja como for / De qualquer maneira",
                "Audio": "Sea como sea",
                "timeContext": "Modismo de indeterminação modal."
            },
            {
                "type": "vocab",
                "Spanish": "Cueste lo que cueste",
                "Portuguese": "Custe o que custar",
                "Audio": "Cueste lo que cueste",
                "timeContext": "Modismo de esforço/determinação máxima."
            },
            {
                "type": "vocab",
                "Spanish": "Digan lo que digan",
                "Portuguese": "Digam o que disserem",
                "Audio": "Digan lo que digan",
                "timeContext": "Modismo de indiferença à opinião alheia."
            },
            {
                "type": "vocab",
                "Spanish": "Pase lo que pase",
                "Portuguese": "Passe o que passar / Aconteça o que acontecer",
                "Audio": "Pase lo que pase",
                "timeContext": "Modismo de firmeza incondicional."
            },
            {
                "type": "vocab",
                "Spanish": "Caiga quien caiga",
                "Portuguese": "Caia quem cair / Doa a quem doer",
                "Audio": "Caiga quien caiga",
                "timeContext": "Modismo de justiça ou rigor inflexível."
            },
            {
                "type": "grammar_pill",
                "title": "Estrutura de Verbo Subjuntivo Duplicado (Pase lo que pase / Digan lo que digan)",
                "rule": "A estrutura [Verbo Subjuntivo] + [Relativo: lo que/quien/como] + [Verbo Subjuntivo] expressa determinação absoluta e indiferença a qualquer obstáculo.",
                "formula": "Subjuntivo + lo que / quien / como + Subjuntivo",
                "example": "Haga lo que haga, nadie le cree."
            },
            {
                "type": "grammar_pill",
                "title": "Locuções de Concessão Incondicional (Sea como sea / Haga lo que haga)",
                "rule": "Sea como sea significa de qualquer modo/forma. Haga lo que haga significa faça ele o que fizer.",
                "formula": "Sea como sea / Haga lo que haga",
                "example": "Sea como sea, debemos presentar el informe el lunes."
            },
            {
                "type": "grammar_pill",
                "title": "Expressão de Justiça Imparcial (Caiga quien caiga / Cueste lo que cueste)",
                "rule": "Caiga quien caiga usa-se em contextos éticos ou judiciais para afirmar que a lei/regra será aplicada sem privilégios. Cueste lo que cueste expressa um compromisso inabalável.",
                "formula": "Caiga quien caiga / Cueste lo que cueste",
                "example": "Investigaremos la corrupción, caiga quien caiga."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual expressão fixa no subjuntivo significa 'custe o que custar' em espanhol?",
                "options": [
                    "Cueste lo que cueste",
                    "Cuesta lo que cuesta",
                    "Costando lo que cueste",
                    "Cueste la costa"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como expressar determinação dizendo 'aconteça o que acontecer' em espanhol?",
                "options": [
                    "Pase lo que pase",
                    "Pasa lo que pasa",
                    "Pasando lo que pase",
                    "Pase lo que pasa"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Sea como sea, tenemos que encontrar una solución a este problema antes de mañana.'",
                "options": [
                    "Seja como for, temos que encontrar uma solução para este problema antes de amanhã.",
                    "O problema foi resolvido ontem.",
                    "Não há solução para o problema.",
                    "Seja amanhã a reunião."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a locução usada por juízes e investigadores para afirmar imparcialidade total ('doa a quem doer')?",
                "options": [
                    "Caiga quien caiga",
                    "Caiga lo que caiga",
                    "Caiga como caiga",
                    "Caiga cuando caiga"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a expressão duplicada: '_____ (digan) lo que digan, seguiré mi camino.'",
                "options": [
                    "Digan",
                    "Dicen",
                    "Dirán",
                    "Dijeron"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Pase lo que pase y digan lo que digan, vamos a terminar este proyecto a tiempo.",
                "words": [
                    "Pase",
                    "lo",
                    "que",
                    "pase",
                    "y",
                    "digan",
                    "lo",
                    "que",
                    "digan,",
                    "vamos",
                    "a",
                    "terminar",
                    "este",
                    "proyecto",
                    "a",
                    "tiempo."
                ],
                "translation": "Aconteça o que acontecer e digam o que disserem, vamos terminar este projeto a tempo."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Socio A",
                "npcName": "Socio A",
                "text": "La competencia está lanzando campañas muy agresivas contra nosotros.",
                "npcMessage": "La competencia está lanzando campañas muy agresivas contra nosotros.",
                "translation": "A concorrência está lançando campanhas muito agressivas contra nós."
            },
            {
                "speaker": "Socio B",
                "npcName": "Socio B",
                "text": "Digan lo que digan, nuestra calidad habla por sí sola. Sea como sea, mantendremos el rumbo.",
                "npcMessage": "Digan lo que digan, nuestra calidad habla por sí sola. Sea como sea, mantendremos el rumbo.",
                "translation": "Digam o que disserem, nossa qualidade fala por si só. Seja como for, manteremos o rumo."
            },
            {
                "speaker": "Socio A",
                "npcName": "Socio A",
                "text": "¡Así se habla! Cueste lo que cueste, lograremos el objetivo.",
                "npcMessage": "¡Así se habla! Cueste lo que cueste, lograremos el objetivo.",
                "translation": "Assim é que se fala! Custe o que custar, atingiremos o objetivo."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Pase lo que pase'?",
                "options": [
                    {
                        "label": "Aconteça o que acontecer / Passe o que passar",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Passou o tempo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual modo verbal é usado em ambas as posições na estrutura 'Haga lo que haga'?",
                "options": [
                    {
                        "label": "Presente do Subjuntivo em ambas as ocorrências do verbo",
                        "isCorrect": true,
                        "explanation": "Exato! Estrutura gramatical fixa de subjuntivo duplicado."
                    },
                    {
                        "label": "Indicativo no primeiro",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer prometer ajuda incondicional a um amigo em qualquer situação. O que diz?",
                "options": [
                    {
                        "label": "Estaré a tu lado, pase lo que pase.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Estuve a tu lado ayer",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'Aplicaremos la ley con rigor, caiga quien caiga.'",
                "options": [
                    {
                        "label": "Aplicaremos a lei com rigor, caia quem cair / doa a quem doer.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "A lei caiu ontem no tribunal.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a expressão 'Salga con lo que salga'?",
                "options": [
                    {
                        "label": "Venha ele com a desculpa/ideia que vier",
                        "isCorrect": true,
                        "explanation": "Fantástico! Estrutura duplicada de imprevisibilidade."
                    },
                    {
                        "label": "Saia de casa agora",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_21",
        "title": "21. Simulación de Entrevista en Medios / Conferencia",
        "level": "B2",
        "description": "Simule uma coletiva de imprensa com rueda de prensa, preguntas incómodas e portavocía.",
        "icon": "🎙️",
        "stage1_context": {
            "missionTitle": "Módulo 21: Simulación de Entrevista en Medios / Conferencia",
            "missionDescription": "Domine a comunicação sob pressão em coletivas de imprensa, entrevistas com repórteres e declarações corporativas.",
            "audioGuide": "En respuesta a su pregunta, quisiera matizar que hemos actuado conforme a la ley."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Rueda de prensa",
                "Portuguese": "Coletiva de imprensa",
                "Audio": "Rueda de prensa",
                "timeContext": "Evento de atendimento à imprensa."
            },
            {
                "type": "vocab",
                "Spanish": "Preguntas incómodas",
                "Portuguese": "Perguntas indiscretas/difíceis",
                "Audio": "Preguntas incómodas",
                "timeContext": "Questionamentos sob pressão."
            },
            {
                "type": "vocab",
                "Spanish": "Quisiera matizar que...",
                "Portuguese": "Gostaria de matizar / pontuar que...",
                "Audio": "Quisiera matizar",
                "timeContext": "Pontuação diplomática em resposta."
            },
            {
                "type": "vocab",
                "Spanish": "Sin entrar en detalles confidenciales",
                "Portuguese": "Sem entrar em detalhes confidenciais",
                "Audio": "Sin entrar en detalles",
                "timeContext": "Ressalva de sigilo profissional."
            },
            {
                "type": "vocab",
                "Spanish": "Una declaración tajante",
                "Portuguese": "Uma declaração categórica/inquestionável",
                "Audio": "Una declaración tajante",
                "timeContext": "Afirmação firme e definitiva."
            },
            {
                "type": "grammar_pill",
                "title": "Estratégias de Matização em Respostas sob Pressão (Quisiera matizar que...)",
                "rule": "Em entrevistas de imprensa, evita-se confirmar ou negar categoricamente de imediato. Usa-se o condicional de polidez: Quisiera matizar que..., Convendría aclarar que..., Cabe precisar que...",
                "formula": "Condicional de polidez + que + [matiz]",
                "example": "Quisiera matizar que la cifra es preliminar."
            },
            {
                "type": "grammar_pill",
                "title": "Linguagem Evasiva Diplomática (Sin entrar en detalles...)",
                "rule": "Fórmulas para responder a perguntas indiscretas mantendo o sigilo profissional: Sin entrar en detalles confidenciales, puedo asegurarles que... / Por razones de confidencialidad, no me es posible detallar esa cifra.",
                "formula": "Sin entrar en detalles + [garantia]",
                "example": "Sin entrar en detalles, el acuerdo beneficia a todos."
            },
            {
                "type": "grammar_pill",
                "title": "Reorganização da Pergunta (En relación con lo que apunta...)",
                "rule": "O porta-voz retoma a pergunta do jornalista redirecionando para a mensagem principal: En relación con lo que usted plantea, lo realmente relevante es...",
                "formula": "En relación con + [pergunta] ➔ Mensagem chave",
                "example": "En relación con su pregunta, estamos enfocados en la calidad."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como matizar diplomaticamente a resposta em uma coletiva de imprensa?",
                "options": [
                    "Quisiera matizar que los datos presentados son preliminares",
                    "No voy a responder eso",
                    "Esa pregunta es ridícula",
                    "Pase a la siguiente persona"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual locução é ideal para proteger informações confidenciais em uma entrevista ao vivo?",
                "options": [
                    "Sin entrar en detalles confidenciales...",
                    "Contando todo lo secreto...",
                    "Sin saber qué decir...",
                    "Mirando el contrato..."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'El portavoz ofreció una declaración tajante para desmentir los rumores de la prensa.'",
                "options": [
                    "O porta-voz ofereceu uma declaração categórica para desmentir os boatos da imprensa.",
                    "O porta-voz confirmou os boatos.",
                    "Não houve declarações à imprensa.",
                    "A entrevista foi cancelada."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. O que significa a expressão 'Rueda de prensa'?",
                "options": [
                    "Coletiva de imprensa com vários jornalistas",
                    "Uma roda de conversa informal entre amigos",
                    "Uma notícia impressa",
                    "Uma entrevista por telefone"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a resposta diplomática: 'En relación con lo que usted plantea, convendría _____ (aclarar) los términos.'",
                "options": [
                    "aclarar",
                    "aclarado",
                    "aclarando",
                    "aclarará"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "En respuesta a su pregunta en la rueda de prensa, quisiera matizar que actuamos conforme a la norma.",
                "words": [
                    "En",
                    "respuesta",
                    "a",
                    "su",
                    "pregunta",
                    "en",
                    "la",
                    "rueda",
                    "de",
                    "prensa,",
                    "quisiera",
                    "matizar",
                    "que",
                    "actuamos",
                    "conforme",
                    "a",
                    "la",
                    "norma."
                ],
                "translation": "Em resposta à sua pergunta na coletiva de imprensa, gostaria de matizar que atuamos conforme a norma."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Periodista",
                "npcName": "Periodista",
                "text": "¿Es cierto que la empresa prevé recortes de personal este trimestre?",
                "npcMessage": "¿Es cierto que la empresa prevé recortes de personal este trimestre?",
                "translation": "É verdade que a empresa prevê cortes de pessoal este trimestre?"
            },
            {
                "speaker": "Portavoz",
                "npcName": "Portavoz",
                "text": "En respuesta a su pregunta, quisiera matizar que estamos optimizando recursos sin entrar en detalles confidenciales.",
                "npcMessage": "En respuesta a su pregunta, quisiera matizar que estamos optimizando recursos sin entrar en detalles confidenciales.",
                "translation": "Em resposta à sua pergunta, gostaria de matizar que estamos otimizando recursos sem entrar em detalhes confidenciais."
            },
            {
                "speaker": "Periodista",
                "npcName": "Periodista",
                "text": "¿Puede ofrecer una declaración tajante al respecto?",
                "npcMessage": "¿Puede ofrecer una declaración tajante al respecto?",
                "translation": "Pode oferecer uma declaração categórica a respeito?"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'Rueda de prensa'?",
                "options": [
                    {
                        "label": "Coletiva de imprensa",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Rodada de perguntas informais",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que se usa o condicional 'Quisiera matizar' na porta-voz?",
                "options": [
                    {
                        "label": "Para expressar polidez e abrandar o tom da declaração oficial",
                        "isCorrect": true,
                        "explanation": "Exato! Uso do condicional de polidez."
                    },
                    {
                        "label": "Porque é dúvida",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Um repórter faz uma pergunta indiscreta sobre finanças secretas. Como responde com elegância?",
                "options": [
                    {
                        "label": "Por razones de confidencialidad, no puedo responder a esa pregunta.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "No me importa tu pregunta",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'El director hizo una precisión importante en relación con lo planteado por los medios.'",
                "options": [
                    {
                        "label": "O diretor fez uma precisão importante em relação ao que foi colocado pelos meios de comunicação.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O diretor não falou com os meios.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que significa a expressão 'Una declaración tajante'?",
                "options": [
                    {
                        "label": "Uma declaração firme, clara e categórica que não deixa dúvidas",
                        "isCorrect": true,
                        "explanation": "Fantástico! Vocabulário de mídia corporativa."
                    },
                    {
                        "label": "Uma declaração curta por escrito",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_22",
        "title": "22. Redacción Creativa y Ensayo Personal",
        "level": "B2",
        "description": "Redija ensaios e textos criativos com estilo, recursos retóricos e variedade sintática.",
        "icon": "✍️",
        "stage1_context": {
            "missionTitle": "Módulo 22: Redacción Creativa y Ensayo Personal",
            "missionDescription": "Desenvolva sua própria voz de escrita em espanhol com fluidez retórica, riqueza de adjetivação e ritmo narrativo.",
            "audioGuide": "Desde mi perspectiva, la belleza de la escritura radica en la capacidad de evocar mundos."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Desde mi perspectiva",
                "Portuguese": "Da minha perspectiva / Na minha visão",
                "Audio": "Desde mi perspectiva",
                "timeContext": "Introdução de tese pessoal em ensaio."
            },
            {
                "type": "vocab",
                "Spanish": "A mi modo de ver",
                "Portuguese": "A meu modo de ver",
                "Audio": "A mi modo de ver",
                "timeContext": "Expressão de opinião estética ou filosófica."
            },
            {
                "type": "vocab",
                "Spanish": "La riqueza léxica",
                "Portuguese": "A riqueza lexical/vocabular",
                "Audio": "La riqueza léxica",
                "timeContext": "Qualidade de estilo literário."
            },
            {
                "type": "vocab",
                "Spanish": "Recursos estilísticos",
                "Portuguese": "Recursos estilísticos",
                "Audio": "Recursos estilísticos",
                "timeContext": "Ferramentas de escrita criativa."
            },
            {
                "type": "vocab",
                "Spanish": "Una reflexión profunda",
                "Portuguese": "Uma reflexão profunda",
                "Audio": "Una reflexión profunda",
                "timeContext": "Objetivo de ensaio filosófico."
            },
            {
                "type": "grammar_pill",
                "title": "Expressões de Ponto de Vista Pessoal (Desde mi perspectiva / A mi modo de ver)",
                "rule": "Em ensaios de opinião, introduzem-se teses pessoais refinadas com Desde mi perspectiva, A mi modo de ver, A mi juicio, evitando a repetição de creo que.",
                "formula": "Desde mi perspectiva / A mi modo de ver + [tese]",
                "example": "A mi modo de ver, el arte debe emocionar al espectador."
            },
            {
                "type": "grammar_pill",
                "title": "Variedade de Adjetivação e Figuras de Linguagem",
                "rule": "A escrita B2 enriquece-se com adjetivos pós-postos expressivos (una tarde apacible, un silencio ensordecedor) e metáforas conceituais.",
                "formula": "Substantivo + Adjetivo expressivo (ex: silencio ensordecedor)",
                "example": "Caminaba por la ciudad envuelto en un silencio ensordecedor."
            },
            {
                "type": "grammar_pill",
                "title": "Ritmo Narrativo e Alternância de Conectores",
                "rule": "Em ensaios criativos, alterna-se a extensão das frases (frases curtas para impacto, orações compostas para argumentação) utilizando conectores como asimismo, no obstante, en cambio, de ahí que.",
                "formula": "Alternância sintática + Conectores cultos",
                "example": "asimismo, cabe destacar la belleza del paisaje."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Como introduzir uma tese pessoal em um ensaio de opinião com estilo refinado?",
                "options": [
                    "Desde mi perspectiva...",
                    "Yo pienso que sí...",
                    "Creo creo que...",
                    "A decir de mí..."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Qual figura de linguagem oxímora é um exemplo clássico de recurso estilístico ('um silêncio ensurdecedor')?",
                "options": [
                    "Un silencio ensordecedor",
                    "Un ruido silencioso",
                    "Una voz lejana",
                    "Un día soleado"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'A mi modo de ver, el valor de la literatura radica en su capacidad de suscitar una reflexión profunda.'",
                "options": [
                    "A meu modo de ver, o valor da literatura reside na sua capacidade de suscitar uma reflexão profunda.",
                    "A literatura não tem valor.",
                    "Não gosto de ler ensaios.",
                    "A escrita é fácil."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual expressão significa 'riqueza de vocabulário' na avaliação de um texto escrito?",
                "options": [
                    "La riqueza léxica",
                    "La riqueza de dinero",
                    "El vocabulario pobre",
                    "Las palabras largas"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete: 'El autor empleó variados recursos _____ (estilísticos) para cautivar al lector.'",
                "options": [
                    "estilísticos",
                    "estilo",
                    "estilizado",
                    "estilar"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Desde mi perspectiva, el ensayo personal requiere rigor argumentativo y riqueza léxica.",
                "words": [
                    "Desde",
                    "mi",
                    "perspectiva,",
                    "el",
                    "ensayo",
                    "personal",
                    "requiere",
                    "rigor",
                    "argumentativo",
                    "y",
                    "riqueza",
                    "léxica."
                ],
                "translation": "Da minha perspectiva, o ensaio pessoal requer rigor argumentativo e riqueza lexical."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Editor",
                "npcName": "Editor",
                "text": "He leído tu borrador del ensayo personal. Destaco la gran riqueza léxica que muestras.",
                "npcMessage": "He leído tu borrador del ensayo personal. Destaco la gran riqueza léxica que muestras.",
                "translation": "Lendo seu rascunho do ensaio pessoal. Destaco a grande riqueza lexical que você demonstra."
            },
            {
                "speaker": "Autor",
                "npcName": "Autor",
                "text": "Muchas gracias. Desde mi perspectiva, quería transmitir una reflexión profunda sobre la memoria.",
                "npcMessage": "Muchas gracias. Desde mi perspectiva, quería transmitir una reflexión profunda sobre la memoria.",
                "translation": "Muito obrigado. Da minha perspectiva, queria transmitir uma reflexão profunda sobre a memória."
            },
            {
                "speaker": "Editor",
                "npcName": "Editor",
                "text": "Lo has conseguido con excelentes recursos estilísticos.",
                "npcMessage": "Lo has conseguido con excelentes recursos estilísticos.",
                "translation": "Você conseguiu isso com excelentes recursos estilísticos."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa 'La riqueza léxica'?",
                "options": [
                    {
                        "label": "Variedade e precisão no uso do vocabulário",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Ter dinheiro para comprar livros",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Por que se recomenda evitar a repetição excessiva de 'creo que' em ensaios B2?",
                "options": [
                    {
                        "label": "Para variar o registro formal e demonstrar domínio de conectores de opinião refinados",
                        "isCorrect": true,
                        "explanation": "Exato! Elevação de registro linguístico."
                    },
                    {
                        "label": "Porque 'creo' é proibido",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer dar sua opinião sobre uma obra de arte sem usar 'yo creo'. O que escreve?",
                "options": [
                    {
                        "label": "A mi juicio, la obra transmite una serenidad incomparable.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "Yo creo que me gusta",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'El uso acertado de las metáforas enriquece el ritmo narrativo del cuento.'",
                "options": [
                    {
                        "label": "O uso acertado das metáforas enriquece o ritmo narrativo do conto.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "O conto não tem metáforas.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) O que é um 'borrador' no processo de redação de um livro ou ensaio?",
                "options": [
                    {
                        "label": "O rascunho / versão preliminar antes da edição final",
                        "isCorrect": true,
                        "explanation": "Fantástico! Vocabulário de produção textual."
                    },
                    {
                        "label": "Uma borracha de apagar lápis",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_23",
        "title": "23. Repaso General de Maestría B2",
        "level": "B2",
        "description": "Consolide todas as estruturas avançadas: subjuntivo em relativas, condicional irreal, usos de Se.",
        "icon": "🎓",
        "stage1_context": {
            "missionTitle": "Módulo 23: Repaso General de Maestría B2",
            "missionDescription": "Revisão integral e consolidação de todo o arcabouço gramatical e pragmático do Nível B2.",
            "audioGuide": "Si hubiera sabido que buscabas un piso que tuviera balcón, te lo habría dicho antes de que salieras."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Si hubiera sabido... habría...",
                "Portuguese": "Se eu soubesse... teria... (Condicional irreal passado)",
                "Audio": "Si hubiera sabido",
                "timeContext": "Estrutura condicional irreal contrafatual."
            },
            {
                "type": "vocab",
                "Spanish": "Busco a alguien que hable...",
                "Portuguese": "Busco alguém que fale... (Subjuntivo em relativas)",
                "Audio": "Busco a alguien que hable",
                "timeContext": "Antecedente indeterminado no subjuntivo."
            },
            {
                "type": "vocab",
                "Spanish": "Tan pronto como llegues...",
                "Portuguese": "Assim que chegar... (Subjuntivo temporal futuro)",
                "Audio": "Tan pronto como llegues",
                "timeContext": "Conector temporal de futuro."
            },
            {
                "type": "vocab",
                "Spanish": "Se me olvidó por completo",
                "Portuguese": "Esqueci-me por completo (Se involuntário)",
                "Audio": "Se me olvidó",
                "timeContext": "Pasiva acidental não intencional."
            },
            {
                "type": "vocab",
                "Spanish": "De ahí que sea necesario",
                "Portuguese": "Daí que seja necessário (Conector com subjuntivo)",
                "Audio": "De ahí que sea necesario",
                "timeContext": "Conector de consequência com subjuntivo."
            },
            {
                "type": "grammar_pill",
                "title": "Síntese das Estruturas de Subjuntivo B2",
                "rule": "Revisão combinada de relativas indeterminadas (busco algo que tenga), temporais futuras (cuando llegues) e conectores causais conclusivos (de ahí que sea).",
                "formula": "Subjuntivo: Relativa Indeterminada | Temporal Futura | Conector Conclusivo",
                "example": "Busco un piso que tenga balcón y lo alquilaré cuando llegue el verano."
            },
            {
                "type": "grammar_pill",
                "title": "Revisão do Condicional Irreal e Se Involuntário",
                "rule": "Reinterpretação de hipóteses passadas (Si hubiera estudiado, habría aprobado) e atenuação pragmática (Se me cayeron las llaves).",
                "formula": "Si hubiera + part. ➔ habría + part. | Se me + verbo 3ª p.",
                "example": "Si me hubieras avisado, no se me habría olvidado la cita."
            },
            {
                "type": "grammar_pill",
                "title": "Nuances de Ser/Estar e Expressões Fixas",
                "rule": "Consolidação das alterações de sentido (Ser listo vs Estar listo; Ser rico vs Estar rico) e construções fixas (Pase lo que pase, cueste lo que cueste).",
                "formula": "Ser (essência) vs Estar (estado/percepção) | Subjuntivo duplicado",
                "example": "Sea como sea, el informe está listo."
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual frase combina corretamente o condicional irreal do passado com o subjuntivo?",
                "options": [
                    "Si hubiera sabido la verdad, habría actuado de otra forma",
                    "Si sabía la verdad, actuaba de otra forma",
                    "Si sé la verdad, actuaré",
                    "Si supiera la verdad ayer, actuaría"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como integrar a regra 'De ahí que' na frase: 'No vino el tren; _____ (por esa razón) llegamos tarde'?",
                "options": [
                    "de ahí que llegáramos tarde (Subjuntivo)",
                    "de ahí que llegamos tarde",
                    "por ahí que llegamos",
                    "de ahí llegar"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: 'Si me hubieras llamado a tiempo, habríamos encontrado una solución antes de que fuera tarde.'",
                "options": [
                    "Se você tivesse me ligado a tempo, teríamos encontrado uma solução antes que fosse tarde.",
                    "Ligou para mim a tempo ontem.",
                    "Não havia soluções para o problema.",
                    "Chegamos tarde à reunião."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual a diferença gramatical entre 'Juan es listo' e 'Juan está listo'?",
                "options": [
                    "'es listo' = inteligente (característica); 'está listo' = preparado (estado temporário)",
                    "Ambas significam inteligente",
                    "Ambas significam preparado",
                    "Não há diferença"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Complete a expressão de determinação incondicional: '_____ (Pase) lo que pase, mantendremos el compromiso.'",
                "options": [
                    "Pase",
                    "Pasa",
                    "Pasado",
                    "Pasando"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Si hubiera sabido que buscabas un piso que tuviera balcón, te habría llamado tan pronto como lo vi.",
                "words": [
                    "Si",
                    "hubiera",
                    "sabido",
                    "que",
                    "buscabas",
                    "un",
                    "piso",
                    "que",
                    "tuviera",
                    "balcón,",
                    "te",
                    "habría",
                    "llamado",
                    "tan",
                    "pronto",
                    "como",
                    "lo",
                    "vi."
                ],
                "translation": "Se eu soubesse que você buscava um apartamento que tivesse sacada, teria te ligado assim que o vi."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Profesor",
                "npcName": "Profesor",
                "text": "¡Enhorabuena! Han repasado todas las estructuras complejas del nivel B2.",
                "npcMessage": "¡Enhorabuena! Han repasado todas las estructuras complejas del nivel B2.",
                "translation": "Parabéns! Revisaram todas as estruturas complexas do nível B2."
            },
            {
                "speaker": "Estudiante",
                "npcName": "Estudiante",
                "text": "Ha sido un recorrido exigente. Si no me lo hubiera explicado así, no lo habría entendido tan bien.",
                "npcMessage": "Ha sido un recorrido exigente. Si no me lo hubiera explicado así, no lo habría entendido tan bien.",
                "translation": "Foi um percurso exigente. Se você não tivesse me explicado assim, não teria entendido tão bem."
            },
            {
                "speaker": "Profesor",
                "npcName": "Profesor",
                "text": "Sea como sea, ahora están preparados para el examen final.",
                "npcMessage": "Sea como sea, ahora están preparados para el examen final.",
                "translation": "Seja como for, agora estão preparados para o exame final."
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Vocabulário) O que significa a locução 'Si hubiera sabido... habría...'?",
                "options": [
                    {
                        "label": "Se eu tivesse sabido... eu teria... (Condicional irreal passado)",
                        "isCorrect": true,
                        "explanation": "Correto!"
                    },
                    {
                        "label": "Quando eu souber... eu vou...",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Gramática) Qual é a principal característica dos conectores lógicos de nível B2?",
                "options": [
                    {
                        "label": "Exigem precisão sintática entre os modos Indicativo e Subjuntivo conforme a intenção comunicativa",
                        "isCorrect": true,
                        "explanation": "Exato! Domínio sintático do nível B2."
                    },
                    {
                        "label": "São todos seguidos de infinitivo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "3. (Contexto) Você quer resumir que, apesar dos obstáculos, o objetivo foi atingido. O que fala?",
                "options": [
                    {
                        "label": "Pase lo que pase y cueste lo que cueste, lo hemos logrado.",
                        "isCorrect": true,
                        "explanation": "Perfeito!"
                    },
                    {
                        "label": "No hicimos nada",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Tradução) Traduza: 'A raíz de las explicaciones, se nos aclararon todas las dudas.'",
                "options": [
                    {
                        "label": "Em decorrência das explicações, esclareceram-se-nos todas as dúvidas.",
                        "isCorrect": true,
                        "explanation": "Excelente!"
                    },
                    {
                        "label": "Não entendemos as explicações.",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Desafio) Qual nível de proficiência do Quadro Europeu você dominou ao concluir esta revisão?",
                "options": [
                    {
                        "label": "Nível B2 (Usuário Independente Avançado / Fluidez Autônoma)",
                        "isCorrect": true,
                        "explanation": "Fantástico! Conquista acadêmica de alto valor."
                    },
                    {
                        "label": "Nível A1 iniciante",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            }
        ]
    },
    {
        "id": "es_b2_mod_24",
        "title": "24. Desafío Final B2: Examen Integrado de Fluidez",
        "level": "B2",
        "description": "Exame final de certificação B2: prova de revisão integrada com 30 exercícios cobrindo todos os módulos do nível B2.",
        "icon": "🏆",
        "stage1_context": {
            "missionTitle": "Módulo 24: Desafío Final B2: Examen Integrado de Fluidez",
            "missionDescription": "Exame de certificação simulado (estilo DELE B2) avaliando a proficiência completa em leitura, audição, gramática e conversação.",
            "audioGuide": "¡Enhorabuena! Has llegado al examen final de maestría B2 del curso de español."
        },
        "stage2_drops": [
            {
                "type": "vocab",
                "Spanish": "Acreditar la competencia B2",
                "Portuguese": "Acreditar a competência B2",
                "Audio": "Acreditar la competencia",
                "timeContext": "Certificação oficial de fluência."
            },
            {
                "type": "vocab",
                "Spanish": "Dominio lingüístico autónomo",
                "Portuguese": "Domínio linguístico autônomo",
                "Audio": "Dominio lingüístico autónomo",
                "timeContext": "Independência de comunicação em espanhol."
            },
            {
                "type": "vocab",
                "Spanish": "Fluidez y corrección gramatical",
                "Portuguese": "Fluidez e correção gramatical",
                "Audio": "Fluidez y corrección",
                "timeContext": "Critério de avaliação DELE B2."
            },
            {
                "type": "vocab",
                "Spanish": "Superar la prueba integrada",
                "Portuguese": "Superar a prova integrada",
                "Audio": "Superar la prueba",
                "timeContext": "Aprovação no exame final."
            },
            {
                "type": "vocab",
                "Spanish": "¡Enhorabuena por tu esfuerzo!",
                "Portuguese": "Parabéns pelo seu esforço!",
                "Audio": "Enhorabuena por tu esfuerzo",
                "timeContext": "Felicitations de graduação."
            },
            {
                "type": "grammar_pill",
                "title": "Certificação DELE B2 e Critérios de Fluência",
                "rule": "O nível B2 do Quadro Europeu Comum de Referência exige compreensão de textos complexos, fala espontânea sem esforço para nativos e produção de textos claros e detalhados.",
                "formula": "DELE B2 ➔ Compreensão de textos complexos + Fala fluida autônoma",
                "example": "El estudiante B2 interactúa con fluidez con hablantes nativos."
            },
            {
                "type": "grammar_pill",
                "title": "Autonomia Comunicativa em Diversos Registros",
                "rule": "O aluno B2 transita com naturalidade entre a linguagem informal cotidiana (gírias, muletas, provérbios) e a linguagem formal executiva/acadêmica (contratos, relatórios, imprensa).",
                "formula": "Registro Informal ⟷ Registro Formal Executivo/Acadêmico",
                "example": "Capacidad de negociar contratos y conversar informalmente."
            },
            {
                "type": "grammar_pill",
                "title": "Consolidação do Aprendizado e Próximos Passos",
                "rule": "Finalização oficial da trilha B2 com capacidade comprovada de debater, negociar, analisar literatura e escrever ensaios.",
                "formula": "A1 + A2 + B1 + B2 ➔ Dominio Avanzado del Idioma Español",
                "example": "¡Felicidades por completar todos los niveles del curso de español!"
            }
        ],
        "stage3_practice": [
            {
                "type": "choice",
                "question": "1. Qual é a principal garantia de proficiência de um aluno aprovado no exame B2?",
                "options": [
                    "Capacidade de se comunicar de forma autônoma, fluida e precisa em cenários sociais e profissionais",
                    "Saber apenas saudações básicas",
                    "Traduzir palavra por palavra com dicionário",
                    "Conhecer apenas o tempo presente"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "2. Como completar a frase oficial de certificação: 'El candidato ha demostrado un _____ (domínio) autónomo del idioma'?",
                "options": [
                    "dominio",
                    "dominado",
                    "dominante",
                    "dominar"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "3. Traduza: '¡Enhorabuena! Has superado con éxito todas las pruebas del nivel B2 del curso de español.'",
                "options": [
                    "Parabéns! Você superou com sucesso todas as provas do nível B2 do curso de espanhol.",
                    "Você precisa repetiu o nível A1.",
                    "O curso de espanhol foi cancelado.",
                    "Não houve provas no curso."
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "4. Qual é o principal critério de avaliação de fluência no nível B2 do Quadro Europeu?",
                "options": [
                    "Capacidade de interagir com fluidez, precisão e espontaneidade com falantes nativos",
                    "Saber apenas saudações básicas de memória",
                    "Traduzir palavra por palavra com dicionário",
                    "Conhecer apenas o tempo presente"
                ],
                "correctIndex": 0
            },
            {
                "type": "choice",
                "question": "5. Qual a expressão em espanhol para dar os parabéns por uma grande conquista acadêmica?",
                "options": [
                    "¡Enhorabuena! / ¡Muchas felicidades!",
                    "¡Hasta luego!",
                    "¡Lo siento!",
                    "¡De nada!"
                ],
                "correctIndex": 0
            }
        ],
        "stage3_5_sentenceBuilder": [
            {
                "sentenceEs": "Has completado exitosamente el curso de español demostrando un dominio autónomo y fluido del idioma.",
                "words": [
                    "Has",
                    "completado",
                    "exitosamente",
                    "el",
                    "curso",
                    "de",
                    "español",
                    "demostrando",
                    "un",
                    "dominio",
                    "autónomo",
                    "y",
                    "fluido",
                    "del",
                    "idioma."
                ],
                "translation": "Você completou com sucesso o curso de espanhol demonstrando um domínio autônomo e fluido do idioma."
            }
        ],
        "stage4_dialog": [
            {
                "speaker": "Examinador",
                "npcName": "Examinador",
                "text": "¡Enhorabuena, estudiante! Has aprobado el Examen Integrado de Fluidez B2.",
                "npcMessage": "¡Enhorabuena, estudiante! Has aprobado el Examen Integrado de Fluidez B2.",
                "translation": "Parabéns, estudante! Você foi aprovado no Exame Integrado de Fluidez B2."
            },
            {
                "speaker": "Graduado",
                "npcName": "Graduado",
                "text": "¡Muchas gracias! Ha sido un viaje increíble a través de todos los módulos del curso.",
                "npcMessage": "¡Muchas gracias! Ha sido un viaje increíble a través de todos los módulos del curso.",
                "translation": "Muito obrigado! Foi uma jornada incrível através de todos os módulos do curso."
            },
            {
                "speaker": "Examinador",
                "npcName": "Examinador",
                "text": "Tu dominio lingüístico autónomo es excelente. ¡Te deseamos mucho éxito!",
                "npcMessage": "Tu dominio lingüístico autónomo es excelente. ¡Te deseamos mucho éxito!",
                "translation": "Seu domínio linguístico autônomo é excelente. Desejamos-lhe muito sucesso!"
            }
        ],
        "stage5_quiz": [
            {
                "question": "1. (Mod 1: Condicional Irreal Passado) Complete: 'Si yo _____ (saber) que venías, habría preparado la cena.'",
                "options": [
                    {
                        "label": "hubiera sabido / hubiese sabido",
                        "isCorrect": true,
                        "explanation": "Correto! Pluscuamperfecto de Subjuntivo + Condicional Compuesto."
                    },
                    {
                        "label": "había sabido",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "2. (Mod 2: Relativas com Subjuntivo) Por que se usa subjuntivo em 'Busco un candidato que hable chino'?",
                "options": [
                    {
                        "label": "Porque o antecedente (candidato) é indeterminado / não identificado",
                        "isCorrect": true,
                        "explanation": "Exato! Regra do antecedente indeterminado."
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
                "question": "3. (Mod 3: Temporais e Modais) Complete: 'Tan pronto como _____ (llegar) al hotel, envíame un mensaje.'",
                "options": [
                    {
                        "label": "llegues (Subjuntivo)",
                        "isCorrect": true,
                        "explanation": "Perfeito! Ação futura com conector temporal exige Subjuntivo."
                    },
                    {
                        "label": "llegas",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "4. (Mod 4: Se Involuntário) Como dizer 'Esqueci as chaves sem querer' em espanhol?",
                "options": [
                    {
                        "label": "Se me olvidaron las llaves.",
                        "isCorrect": true,
                        "explanation": "Excelente! Se + OI (me) + verbo 3ª p. plural (olvidaron) + sujeito paciente (las llaves)."
                    },
                    {
                        "label": "Yo me olvidé las llaves",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "5. (Mod 5: Negociación) Como fazer uma concessão diplomática em negociações executivas?",
                "options": [
                    {
                        "label": "Comprendemos su postura; no obstante, estaríamos dispuestos a ceder si...",
                        "isCorrect": true,
                        "explanation": "Correto! Fórmulas polidas de negociação B2."
                    },
                    {
                        "label": "No aceptamos nada",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "6. (Mod 6: Presentaciones) Qual expressão formal é ideal para enfatizar um dado num slide?",
                "options": [
                    {
                        "label": "Quisiera hacer hincapié en el crecimiento del sector.",
                        "isCorrect": true,
                        "explanation": "Exato! 'Hacer hincapié en' = enfatizar/destacar."
                    },
                    {
                        "label": "Miren el dibujo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "7. (Mod 7: Lenguaje Jurídico) O que significa a locução contratual 'De conformidad con lo dispuesto en el artículo 5'?",
                "options": [
                    {
                        "label": "De conformidade / acordo com o disposto no artigo 5",
                        "isCorrect": true,
                        "explanation": "Perfeito! Fórmulas formais de contratos B2."
                    },
                    {
                        "label": "Sem olhar o artigo 5",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "8. (Mod 8: Redacción Académica) Como introduzir conclusões acadêmicas com modulação científica?",
                "options": [
                    {
                        "label": "A tenor de los datos, los resultados sugieren una correlación positiva.",
                        "isCorrect": true,
                        "explanation": "Excelente! Prudência e rigor metodológico acadêmico."
                    },
                    {
                        "label": "Yo creo que es verdad sin datos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "9. (Mod 9: Prensa) Como a imprensa redige manchetes usando a pasiva reflexa?",
                "options": [
                    {
                        "label": "Se aprueba la nueva ley de transporte en el congreso.",
                        "isCorrect": true,
                        "explanation": "Correto! Sintaxe impessoal jornalística."
                    },
                    {
                        "label": "Aprueban la ley ellos",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "10. (Mod 10: Radio y Podcasts) O que significa a muleta de fala (muletilla) 'Al fin y al cabo'?",
                "options": [
                    {
                        "label": "Afinal de contas / Em última análise",
                        "isCorrect": true,
                        "explanation": "Exato! Locução de síntese em conversação espontânea."
                    },
                    {
                        "label": "No fim da corda",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "11. (Mod 11: Cine y Jerga) O que significa a gíria espanhola '¡Esta película mola un montón!'?",
                "options": [
                    {
                        "label": "Este filme é muito legal / bacana!",
                        "isCorrect": true,
                        "explanation": "Perfeito! Gíria de apreciação na Espanha."
                    },
                    {
                        "label": "Este filme é chato",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "12. (Mod 12: Debates Sociales) Como introduzir o tema de sustentabilidade em um debate formal?",
                "options": [
                    {
                        "label": "En lo que atañe a la sostenibilidad ambiental, es imperativo actuar.",
                        "isCorrect": true,
                        "explanation": "Excelente! Locução de introdução temática de alto nível."
                    },
                    {
                        "label": "Hablando de plantas",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "13. (Mod 13: Literatura) Qual movimento literário caracteriza a obra Cien años de soledad de Gabriel García Márquez?",
                "options": [
                    {
                        "label": "El realismo mágico",
                        "isCorrect": true,
                        "explanation": "Correto! Fusão do cotidiano com o fantástico."
                    },
                    {
                        "label": "El neoclasicismo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "14. (Mod 14: Humor e Ironía) O que significa quando alguém diz ironicamente '¡Qué puntual eres!' a quem chegou 2 horas atrasado?",
                "options": [
                    {
                        "label": "Ironia por antífrase (destaca o atraso absurdo)",
                        "isCorrect": true,
                        "explanation": "Exato! Recurso pragmático de ironia."
                    },
                    {
                        "label": "Elogio sincero de pontualidade",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "15. (Mod 15: Refranes) O que ensina o provérbio 'No por mucho madrugar amanece más temprano'?",
                "options": [
                    {
                        "label": "As coisas têm seu tempo natural e não adianta tentar apressar o inevitável",
                        "isCorrect": true,
                        "explanation": "Perfeito! Sabedoria popular de paciência."
                    },
                    {
                        "label": "Devemos acordar às 4 da manhã",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "16. (Mod 16: Conectores Avançados) Qual tempo verbal é OBRIGATÓRIO após o conector 'De ahí que...'?",
                "options": [
                    {
                        "label": "Modo Subjuntivo (ex: De ahí que fuera necesario)",
                        "isCorrect": true,
                        "explanation": "Excelente! Regra absoluta de consequência conclusiva."
                    },
                    {
                        "label": "Presente do Indicativo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "17. (Mod 17: Preposiciones Complejas) Qual locução expressa a origem desencadeadora de um evento?",
                "options": [
                    {
                        "label": "A raíz de (ex: A raíz de la crisis...)",
                        "isCorrect": true,
                        "explanation": "Correto! 'A raíz de' = em decorrência de."
                    },
                    {
                        "label": "Con vistas a",
                        "isCorrect": false,
                        "explanation": "Incorreto. Con vistas a é finalidade."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "18. (Mod 18: Estilo Indirecto Avanzado) Como a imprensa nega um boato oficialmente?",
                "options": [
                    {
                        "label": "El portavoz desmintió que hubiera habido irregularidades.",
                        "isCorrect": true,
                        "explanation": "Exato! Desmintió que + Subjuntivo."
                    },
                    {
                        "label": "El portavoz dijo que sí",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "19. (Mod 19: Ser vs Estar B2) Qual a diferença entre 'Juan es listo' e 'La paella está rica'?",
                "options": [
                    {
                        "label": "'es listo' = inteligente (caráter); 'está rica' = deliciosa (sabor de comida)",
                        "isCorrect": true,
                        "explanation": "Perfeito! Nuances avançadas de Ser/Estar."
                    },
                    {
                        "label": "Ambas usam SER",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "20. (Mod 20: Subjuntivo en Frases Hechas) Qual expressão fixa expressa determinação absoluta?",
                "options": [
                    {
                        "label": "Pase lo que pase / Cueste lo que cueste",
                        "isCorrect": true,
                        "explanation": "Excelente! Estrutura de subjuntivo duplicado."
                    },
                    {
                        "label": "Pasa lo que pasa",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "21. (Mod 21: Entrevistas en Medios) Como matizar diplomaticamente em uma coletiva sob pressão?",
                "options": [
                    {
                        "label": "Quisiera matizar que los datos presentados son preliminares.",
                        "isCorrect": true,
                        "explanation": "Correto! Fórmulas de porta-voz corporativo."
                    },
                    {
                        "label": "No me importa la pregunta",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "22. (Mod 22: Redacción Creativa) Qual locução introduz uma tese pessoal em um ensaio de opinião?",
                "options": [
                    {
                        "label": "Desde mi perspectiva / A mi modo de ver",
                        "isCorrect": true,
                        "explanation": "Exato! Elevação de registro sem repetir 'creo que'."
                    },
                    {
                        "label": "Yo digo que",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "23. (Mod 23: Repaso B2) Como combinar condicional irreal com subjuntivo em relativas?",
                "options": [
                    {
                        "label": "Si hubiera encontrado un piso que tuviera balcón, lo habría alquilado.",
                        "isCorrect": true,
                        "explanation": "Perfeito! Síntese sintática avançada de nível B2."
                    },
                    {
                        "label": "Si encuentro un piso que tiene balcón alquilo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "24. (Mod 24: Examen Integrado B2) Qual a garantia de proficiência do aluno aprovado no exame DELE B2?",
                "options": [
                    {
                        "label": "Domínio linguístico autônomo, capacidade de debater, negociar e interagir com fluidez natural com falantes nativos!",
                        "isCorrect": true,
                        "explanation": "¡ENHORABUENA! Nível B2 concluído com maestria e excelência!"
                    },
                    {
                        "label": "Nenhuma fluência",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "25. (Revisão B2 - Conectores) Qual conector conclusivo formal equivale a 'portanto / por conseguinte'?",
                "options": [
                    {
                        "label": "Por ende",
                        "isCorrect": true,
                        "explanation": "Correto! Registro culto conclusivo."
                    },
                    {
                        "label": "De vez en cuando",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "26. (Revisão B2 - Subjuntivo) Qual conjunção EXIGE SEMPRE o modo Subjuntivo, seja a ação passada ou futura?",
                "options": [
                    {
                        "label": "Antes de que (ex: Antes de que salgas)",
                        "isCorrect": true,
                        "explanation": "Exato! 'Antes de que' exige subjuntivo sempre."
                    },
                    {
                        "label": "Después de",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "27. (Revisão B2 - Vocabulário) O que significa 'La fianza' em um contrato de aluguel na Espanha?",
                "options": [
                    {
                        "label": "O depósito caução de garantia do aluguel",
                        "isCorrect": true,
                        "explanation": "Perfeito! Termo técnico do mercado imobiliário espanhol."
                    },
                    {
                        "label": "A chave da porta",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "28. (Revisão B2 - Expressões) O que significa 'Caiga quien caiga'?",
                "options": [
                    {
                        "label": "Doa a quem doer / Caia quem cair (aplicação imparcial da lei)",
                        "isCorrect": true,
                        "explanation": "Excelente! Expressão de justiça e rigor inflexível."
                    },
                    {
                        "label": "Cair no chão",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "29. (Revisão B2 - Estilo) Qual a melhor forma de manter a impessoalidade em relatórios técnicos?",
                "options": [
                    {
                        "label": "Uso da passiva reflexa (Se han analizado las variables) ou 1ª p. plural acadêmica",
                        "isCorrect": true,
                        "explanation": "Correto! Padrão de redação científica B2."
                    },
                    {
                        "label": "Escrever na 1ª pessoa 'yo' o tempo todo",
                        "isCorrect": false,
                        "explanation": "Incorreto."
                    }
                ],
                "correctIndex": 0
            },
            {
                "question": "30. (Mod 24: Certificação Final) Qual é a principal conquista alcançada ao finalizar o Nível B2 de Espanhol?",
                "options": [
                    {
                        "label": "Domínio linguístico autônomo para comunicar-se com desenvoltura em cenários acadêmicos e profissionais!",
                        "isCorrect": true,
                        "explanation": "¡FELICIDADES! Certificação oficial do Curso de Espanhol!"
                    },
                    {
                        "label": "Conhecimento apenas básico de vocabulário",
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
    module.exports = CURSO_ESPANHOL_B2_DADOS;
}
if (typeof window !== 'undefined') {
    window.CURSO_ESPANHOL_B2_DADOS = CURSO_ESPANHOL_B2_DADOS;
}
