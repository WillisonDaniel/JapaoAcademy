/**
 * Banco de Dados Oficial da Trilha de Falsos Cognatos de Espanhol (A1 a B2)
 * 16 Módulos Handcrafted de Aprendizado Anti-Portunhol.
 */
const DADOS_ESPANHOL_FALSOS_AMIGOS_TRILHA = [
    // ==========================================
    // 🟢 NÍVEL A1: FALSOS COGNATOS DE SOBREVIVÊNCIA (MÓDULOS 1 A 4)
    // ==========================================
    {
        id: "fa_mod_1",
        level: "A1",
        title: "Módulo 1: Na Mesa do Restaurante",
        description: "Aprenda os falsos cognatos mais perigosos na hora de pedir comida e bebida.",
        stage1_context: {
            missionTitle: "🚨 Cuidado na Hora de Comer!",
            missionDescription: "Em um restaurante hispânico, pedir um 'vaso de agua' ou elogiar a comida como 'exquisita' pode soar muito diferente do que você pensa!",
            audioGuide: "Na Mesa do Restaurante"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Exquisito",
                rule: "Em espanhol, 'exquisito' significa delicioso, saboroso e de alta qualidade.",
                formula: "Exquisito = Delicioso 🟢 | 🔴 NÃO significa Esquisito (estranho é 'raro')",
                example: "La paella estuvo exquisita."
            },
            {
                type: "grammar_pill",
                title: "Polvo",
                rule: "'Polvo' significa poeira ou pó. O molusco do mar chama-se 'pulpo'.",
                formula: "Polvo = Poeira/Pó 🟢 | 🔴 NÃO é o molusco Polvo ('pulpo')",
                example: "Hay mucho polvo sobre la mesa."
            },
            {
                type: "grammar_pill",
                title: "Tapas",
                rule: "'Tapas' são aperitivos ou petiscos tradicionais servidos em bares na Espanha.",
                formula: "Tapas = Petiscos/Aperitivos 🟢 | 🔴 NÃO são bofetadas",
                example: "Vamos a comer unas tapas en el bar."
            },
            {
                type: "grammar_pill",
                title: "Vaso",
                rule: "'Vaso' é o copo de vidro para beber. Vaso de planta chama-se 'maceta'.",
                formula: "Vaso = Copo de vidro 🟢 | 🔴 NÃO é vaso de flores ('maceta')",
                example: "Quiero un vaso de agua fría, por favor."
            },
            {
                type: "grammar_pill",
                title: "Salada",
                rule: "'Salada' significa salgada. Salada de alface e vegetais chama-se 'ensalada'.",
                formula: "Salada = Salgada 🟢 | 🔴 NÃO é salada de vegetais ('ensalada')",
                example: "La sopa está un poco salada."
            }
        ],
        stage3_practice: [
            {
                question: "Como elogiar uma prato delicioso em um restaurante hispânico?",
                options: [
                    { label: "¡La comida estuvo exquisita!", isCorrect: true, explanation: "Exato! Exquisito significa delicioso." },
                    { label: "¡La comida estuvo rara!", isCorrect: false, explanation: "Incorreto. Rara significa esquisita/estranha." }
                ],
                correctIndex: 0
            },
            {
                question: "Se você pedir 'un vaso de agua', o garçom trará:",
                options: [
                    { label: "Um copo de água para beber", isCorrect: true, explanation: "Perfeito! Vaso = copo." },
                    { label: "Um vaso com planta e água", isCorrect: false, explanation: "Incorreto. Vaso de planta é maceta." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "Pedí un vaso de agua y la paella estaba exquisita.",
                words: ["Pedí", "un", "vaso", "de", "agua", "y", "la", "paella", "estaba", "exquisita."],
                translation: "Pedi um copo de água e a paella estava deliciosa."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Garçom",
                npcName: "Camarero",
                text: "¿Qué desea tomar de bebida, señor?",
                npcMessage: "¿Qué desea tomar de bebida, señor?",
                translation: "O que deseja tomar de bebida, senhor?"
            },
            {
                speaker: "Cliente",
                "npcName": "Cliente",
                text: "Un vaso de agua fría y unas tapas de jamón. ¡La comida estuvo exquisita!",
                npcMessage: "Un vaso de agua fría y unas tapas de jamón. ¡La comida estuvo exquisita!",
                translation: "Um copo de água fria e uns petiscos de presunto. A comida estava deliciosa!"
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa a palavra 'Exquisito' em espanhol?",
                options: [
                    { label: "Delicioso / Refinado", isCorrect: true, explanation: "Correto! Exquisito = delicioso." },
                    { label: "Estranho / Esquisito", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "2. Como se diz 'polvo' (o molusco do mar) em espanhol?",
                options: [
                    { label: "Pulpo", isCorrect: true, explanation: "Exato! Polvo em espanhol significa poeira." },
                    { label: "Polvo", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "3. O que são 'tapas' na Espanha?",
                options: [
                    { label: "Aperitivos / Petiscos típicos", isCorrect: true, explanation: "Perfeito! Prato tradicional." },
                    { label: "Golpes no rosto", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "4. Traduza: 'Quiero un vaso de jugo.'",
                options: [
                    { label: "Quero um copo de suco.", isCorrect: true, explanation: "Excelente! Vaso = copo." },
                    { label: "Quero um vaso de flor com suco.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "5. Se a sopa está 'salada', ela está:",
                options: [
                    { label: "Salgada", isCorrect: true, explanation: "Correto! Salada = salgada." },
                    { label: "Com alface e tomate", isCorrect: false, explanation: "Incorreto. Salada de vegetais é ensalada." }
                ],
                correctIndex: 0
            }
        ]
    },

    {
        id: "fa_mod_2",
        level: "A1",
        title: "Módulo 2: Pessoas, Corpo e Aparência",
        description: "Evite gafe e confusões ao descrever características físicas e estados de pessoas.",
        stage1_context: {
            missionTitle: "🚨 Não Confunda Grávida com Envergonhada!",
            missionDescription: "Dizer que uma mulher está 'embarazada' não significa que ela está com vergonha!",
            audioGuide: "Pessoas e Aparência"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Embarazada",
                rule: "'Embarazada' significa grávida. Com vergonha diz-se 'avergonzada'.",
                formula: "Embarazada = Grávida 🟢 | 🔴 NÃO é Envergonhada ('avergonzada')",
                example: "Mi hermana está embarazada de cuatro meses."
            },
            {
                type: "grammar_pill",
                title: "Rubia",
                rule: "'Rubia' significa loira. Ruiva chama-se 'pelirroja'.",
                formula: "Rubia = Loira 🟢 | 🔴 NÃO é Ruiva ('pelirroja')",
                example: "Ella tiene el pelo rubio y ojos azules."
            },
            {
                type: "grammar_pill",
                title: "Cuello",
                rule: "'Cuello' significa pescoço ou gola de camisa. Coelho animal é 'conejo'.",
                formula: "Cuello = Pescoço/Gola 🟢 | 🔴 NÃO é Coelho ('conejo')",
                example: "Me duele el cuello después de trabajar."
            },
            {
                type: "grammar_pill",
                title: "Chato",
                rule: "'Chato' significa nariz achatado ou plano. Chato/aborrecido diz-se 'aburrido' ou 'pesado'.",
                formula: "Chato = Achatado/Baixo 🟢 | 🔴 NÃO é Chato/Aborrecido ('pesado')",
                example: "El perro tiene la nariz chata."
            }
        ],
        stage3_practice: [
            {
                question: "Como dizer que uma amiga está grávida?",
                options: [
                    { label: "Mi amiga está embarazada.", isCorrect: true, explanation: "Excelente! Embarazada = grávida." },
                    { label: "Mi amiga está avergonzada.", isCorrect: false, explanation: "Incorreto. Avergonzada = com vergonha." }
                ],
                correctIndex: 0
            },
            {
                question: "Como dizer 'Ela é loira e ele é ruivo'?",
                options: [
                    { label: "Ella es rubia y él es pelirrojo.", isCorrect: true, explanation: "Exato! Rubia = loira, pelirrojo = ruivo." },
                    { label: "Ella es ruiva y él es rubio.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "Mi hermana rubia está embarazada.",
                words: ["Mi", "hermana", "rubia", "está", "embarazada."],
                translation: "Minha irmã loira está grávida."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Ana",
                "npcName": "Ana",
                text: "¡Tengo una gran noticia! Estoy embarazada.",
                npcMessage: "¡Tengo una gran noticia! Estoy embarazada.",
                translation: "Tenho uma grande notícia! Estou grávida."
            },
            {
                speaker: "Carlos",
                "npcName": "Carlos",
                text: "¡Felicidades! Vas a ser mamá. Tu hermana rubia estará muy feliz.",
                npcMessage: "¡Felicidades! Vas a ser mamá. Tu hermana rubia estará muy feliz.",
                translation: "Parabéns! Você vai ser mãe. Sua irmã loira estará muito feliz."
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa 'Embarazada'?",
                options: [
                    { label: "Grávida", isCorrect: true, explanation: "Correto! Embarazada = grávida." },
                    { label: "Com vergonha", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "2. Como se diz 'loira' em espanhol?",
                options: [
                    { label: "Rubia", isCorrect: true, explanation: "Exato! Rubia = loira." },
                    { label: "Ruiva", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "3. O que é 'cuello' no corpo humano?",
                options: [
                    { label: "Pescoço", isCorrect: true, explanation: "Perfeito! Cuello = pescoço." },
                    { label: "Coelho", isCorrect: false, explanation: "Incorreto. Coelho é conejo." }
                ],
                correctIndex: 0
            },
            {
                question: "4. Como se diz 'ruivo' em espanhol?",
                options: [
                    { label: "Pelirrojo", isCorrect: true, explanation: "Excelente! Pelirrojo = ruivo." },
                    { label: "Rubio", isCorrect: false, explanation: "Incorreto. Rubio é loiro." }
                ],
                correctIndex: 0
            },
            {
                question: "5. O que significa 'chato' ao falar de um rosto?",
                options: [
                    { label: "Nariz achatado / plano", isCorrect: true, explanation: "Correto! Chato = achatado." },
                    { label: "Pessoa chata e chata", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ]
    },

    {
        id: "fa_mod_3",
        level: "A1",
        title: "Módulo 3: Na Cidade e Lugares",
        description: "Aprenda a pedir direções sem confundir oficinas, escritórios e sacadas.",
        stage1_context: {
            missionTitle: "🚨 Onde Fica o Escritório?",
            missionDescription: "Se você procurar uma 'oficina' para consertar o carro ou um 'balcón' para comprar roupas, vai se perder!",
            audioGuide: "Na Cidade e Lugares"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Taller",
                rule: "'Taller' é a oficina mecânica ou estúdio de arte. Talheres de comer chamam-se 'cubiertos'.",
                formula: "Taller = Oficina mecânica / Estúdio 🟢 | 🔴 NÃO são Talheres ('cubiertos')",
                example: "Llevé el coche al taller."
            },
            {
                type: "grammar_pill",
                title: "Balcón",
                rule: "'Balcón' é a sacada ou varanda do apartamento. Balcão de loja chama-se 'mostrador'.",
                formula: "Balcón = Sacada / Varanda 🟢 | 🔴 NÃO é Balcão de loja ('mostrador')",
                example: "Me gusta tomar café en el balcón."
            },
            {
                type: "grammar_pill",
                title: "Dirección",
                rule: "'Dirección' significa endereço de residência ou direção de caminho.",
                formula: "Dirección = Endereço / Direção 🟢 | 🔴 NÃO é apenas direção",
                example: "¿Cuál es tu dirección en Madrid?"
            },
            {
                type: "grammar_pill",
                title: "Oficina",
                rule: "'Oficina' é o escritório de trabalho. Oficina mecânica chama-se 'taller'.",
                formula: "Oficina = Escritório 🟢 | 🔴 NÃO é Oficina mecânica ('taller')",
                example: "Trabajo en una oficina en el centro."
            },
            {
                type: "grammar_pill",
                title: "Cerca",
                rule: "'Cerca' como advérbio significa perto. Cerca de jardim chama-se 'valla'.",
                formula: "Cerca = Perto 🟢 | 🔴 NÃO é cerca de jardim ('valla')",
                example: "La estación está muy cerca."
            }
        ],
        stage3_practice: [
            {
                question: "Se o seu carro quebrar na Espanha, você deve levá-lo ao:",
                options: [
                    { label: "Taller mecánico", isCorrect: true, explanation: "Correto! Taller = oficina mecânica." },
                    { label: "Oficina del centro", isCorrect: false, explanation: "Incorreto. Oficina = escritório." }
                ],
                correctIndex: 0
            },
            {
                question: "Como perguntar o endereço de alguém em espanhol?",
                options: [
                    { label: "¿Cuál es tu dirección?", isCorrect: true, explanation: "Exato! Dirección = endereço." },
                    { label: "¿Cuál es tu enderezo?", isCorrect: false, explanation: "Incorreto. Enderezo é portunhol." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "Mi oficina está cerca del balcón del parque.",
                words: ["Mi", "oficina", "está", "cerca", "del", "balcón", "del", "parque."],
                translation: "Meu escritório fica perto da sacada do parque."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Pedro",
                "npcName": "Pedro",
                text: "Disculpe, ¿dónde está la oficina de información?",
                npcMessage: "Disculpe, ¿dónde está la oficina de información?",
                translation: "Com licença, onde fica o escritório de informações?"
            },
            {
                speaker: "Guia",
                "npcName": "Guia",
                text: "Está muy cerca, al lado del taller de coches.",
                npcMessage: "Está muy cerca, al lado del taller de coches.",
                translation: "Fica muito perto, ao lado da oficina mecânica."
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa 'Taller' em espanhol?",
                options: [
                    { label: "Oficina mecânica / Estúdio", isCorrect: true, explanation: "Correto! Taller = oficina." },
                    { label: "Talher de comer", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "2. O que significa 'Oficina'?",
                options: [
                    { label: "Escritório de trabalho", isCorrect: true, explanation: "Exato! Oficina = escritório." },
                    { label: "Oficina mecânica", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "3. Traduza: '¿Cuál es tu dirección?'",
                options: [
                    { label: "Qual é o seu endereço?", isCorrect: true, explanation: "Perfeito! Dirección = endereço." },
                    { label: "Qual é a sua direção?", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "4. O que significa 'Balcón'?",
                options: [
                    { label: "Sacada / Varanda", isCorrect: true, explanation: "Excelente! Balcón = sacada." },
                    { label: "Balcão de atendimento", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "5. O advérbio 'Cerca' significa:",
                options: [
                    { label: "Perto", isCorrect: true, explanation: "Correto! Cerca = perto." },
                    { label: "Longe", isCorrect: false, explanation: "Incorreto. Longe é lejos." }
                ],
                correctIndex: 0
            }
        ]
    },

    {
        id: "fa_mod_4",
        level: "A1",
        title: "Módulo 4: Adjetivos Enganosos I",
        description: "Desvende adjetivos de tempo e espaço que confundem a maioria dos falantes de português.",
        stage1_context: {
            missionTitle: "🚨 Cuidado com o Caminho Largo!",
            missionDescription: "'Largo' não é amplo, 'pronto' não é preparado e 'borracho' não é borracha de apagar!",
            audioGuide: "Adjetivos Enganosos I"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Largo",
                rule: "'Largo' significa comprido ou longo no tempo/espaço. Amplo chama-se 'ancho'.",
                formula: "Largo = Comprido/Longo 🟢 | 🔴 NÃO é Largo/Amplo ('ancho')",
                example: "El camino hacia la montaña es muy largo."
            },
            {
                type: "grammar_pill",
                title: "Borracho",
                rule: "'Borracho' significa bêbado ou embriagado. Borracha de apagar chama-se 'goma'.",
                formula: "Borracho = Bêbado 🟢 | 🔴 NÃO é Borracha ('goma')",
                example: "Bebió vino y quedó borracho."
            },
            {
                type: "grammar_pill",
                title: "Pronto",
                rule: "'Pronto' significa em breve ou rápido. Estar pronto/preparado diz-se 'listo'.",
                formula: "Pronto = Em breve / Rápido 🟢 | 🔴 NÃO é Pronto ('listo')",
                example: "Nos vemos pronto."
            },
            {
                type: "grammar_pill",
                title: "Calvo",
                rule: "'Calvo' significa careca (sem cabelo).",
                formula: "Calvo = Careca 🟢 | 🔴 NÃO é cavar buraco",
                example: "Mi abuelo es calvo."
            }
        ],
        stage3_practice: [
            {
                question: "Como dizer 'Nos vemos em breve' em espanhol?",
                options: [
                    { label: "Nos vemos pronto.", isCorrect: true, explanation: "Correto! Pronto = em breve." },
                    { label: "Nos vemos listo.", isCorrect: false, explanation: "Incorreto. Listo = pronto/preparado." }
                ],
                correctIndex: 0
            },
            {
                question: "Se uma rua é muito comprida, ela é:",
                options: [
                    { label: "Una calle muy larga.", isCorrect: true, explanation: "Exato! Larga = comprida." },
                    { label: "Una calle muy ancha.", isCorrect: false, explanation: "Incorreto. Ancha = larga/ampla." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "El viaje fue largo pero nos vemos pronto.",
                words: ["El", "viaje", "fue", "largo", "pero", "nos", "vemos", "pronto."],
                translation: "A viagem foi longa mas nos vemos em breve."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Luis",
                "npcName": "Luis",
                text: "¡Hola! ¿La reunión ya está lista?",
                npcMessage: "¡Hola! ¿La reunión ya está lista?",
                translation: "Olá! A reunião já está pronta?"
            },
            {
                speaker: "Maria",
                "npcName": "Maria",
                text: "Sí, todo está listo. Empezamos pronto, en cinco minutos.",
                npcMessage: "Sí, todo está listo. Empezamos pronto, en cinco minutos.",
                translation: "Sim, tudo está pronto. Começamos em breve, em cinco minutos."
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa 'Largo' em espanhol?",
                options: [
                    { label: "Comprido / Longo", isCorrect: true, explanation: "Correto! Largo = comprido." },
                    { label: "Amplo / Largo", isCorrect: false, explanation: "Incorreto. Amplo é ancho." }
                ],
                correctIndex: 0
            },
            {
                question: "2. Como dizer 'Estou pronto / preparado'?",
                options: [
                    { label: "Estoy listo.", isCorrect: true, explanation: "Exato! Listo = pronto." },
                    { label: "Estoy pronto.", isCorrect: false, explanation: "Incorreto. Pronto = em breve." }
                ],
                correctIndex: 0
            },
            {
                question: "3. O que significa a palavra 'Borracho'?",
                options: [
                    { label: "Bêbado / Embriagado", isCorrect: true, explanation: "Perfeito! Borracho = bêbado." },
                    { label: "Borracha de apagar", isCorrect: false, explanation: "Incorreto. Borracha é goma." }
                ],
                correctIndex: 0
            },
            {
                question: "4. O adjetivo 'Calvo' significa:",
                options: [
                    { label: "Careca", isCorrect: true, explanation: "Excelente! Calvo = careca." },
                    { label: "Magro", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "5. Traduza: 'Hasta pronto.'",
                options: [
                    { label: "Até breve / Até logo.", isCorrect: true, explanation: "Correto! Pronto = em breve." },
                    { label: "Até pronto preparado.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ]
    },

    // ==========================================
    // 🟡 NÍVEL A2: FALSOS COGNATOS DO DIA A DIA (MÓDULOS 5 A 8)
    // ==========================================
    {
        id: "fa_mod_5",
        level: "A2",
        title: "Módulo 5: Trabalho e Documentos",
        description: "Não erre ao assinar contratos, preencher fichas e falar de matérias de estudo.",
        stage1_context: {
            missionTitle: "🚨 Firma não é Empresa!",
            missionDescription: "Ao assinar um contrato corporativo, 'firma' é a sua assinatura e 'apellido' é o seu sobrenome de família!",
            audioGuide: "Trabalho e Documentos"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Apellido",
                rule: "'Apellido' é o sobrenome de família. Apelido/alcunha chama-se 'apodo'.",
                formula: "Apellido = Sobrenome 🟢 | 🔴 NÃO é Apelido ('apodo')",
                example: "Mi apellido es García."
            },
            {
                type: "grammar_pill",
                title: "Firma",
                rule: "'Firma' é a assinatura em um documento. Empresa de trabalho chama-se 'empresa'.",
                formula: "Firma = Assinatura 🟢 | 🔴 NÃO é Firma/Empresa ('empresa')",
                example: "Ponga su firma aquí."
            },
            {
                type: "grammar_pill",
                title: "Escritorio",
                rule: "'Escritorio' é a escrivaninha ou mesa de trabalho. O cômodo escritório chama-se 'oficina'.",
                formula: "Escritorio = Escrivaninha/Mesa 🟢 | 🔴 NÃO é o cômodo escritório ('oficina')",
                example: "El ordenador está sobre el escritorio."
            },
            {
                type: "grammar_pill",
                title: "Asignatura",
                rule: "'Asignatura' é a matéria escolar ou disciplina universitária.",
                formula: "Asignatura = Matéria escolar 🟢 | 🔴 NÃO é Assinatura ('firma')",
                example: "La matemática es mi asignatura favorita."
            }
        ],
        stage3_practice: [
            {
                question: "Ao assinar um contrato, onde você deve colocar a sua 'firma'?",
                options: [
                    { label: "No campo da assinatura do documento", isCorrect: true, explanation: "Correto! Firma = assinatura." },
                    { label: "No prédio da sua empresa", isCorrect: false, explanation: "Incorreto. Empresa = empresa." }
                ],
                correctIndex: 0
            },
            {
                question: "Se alguém perguntar o seu 'apellido', você deve responder:",
                options: [
                    { label: "Seu sobrenome de família (ex: Silva)", isCorrect: true, explanation: "Exato! Apellido = sobrenome." },
                    { label: "Seu apelido carinhoso (ex: Beto)", isCorrect: false, explanation: "Incorreto. Apelido carinhoso é apodo." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "Puse mi firma en el documento sobre el escritorio.",
                words: ["Puse", "mi", "firma", "en", "el", "documento", "sobre", "el", "escritorio."],
                translation: "Coloquei minha assinatura no documento sobre a escrivaninha."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Secretária",
                "npcName": "Secretaria",
                text: "Por favor, escriba su nombre y apellido en el formulario.",
                npcMessage: "Por favor, escriba su nombre y apellido en el formulario.",
                translation: "Por favor, escreva seu nome e sobrenome no formulário."
            },
            {
                speaker: "Cliente",
                "npcName": "Cliente",
                text: "Muy bien. ¿Dónde pongo la firma?",
                npcMessage: "Muy bien. ¿Dónde pongo la firma?",
                translation: "Muito bem. Onde coloco a assinatura?"
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa 'Apellido'?",
                options: [
                    { label: "Sobrenome", isCorrect: true, explanation: "Correto! Apellido = sobrenome." },
                    { label: "Apelido carinhoso", isCorrect: false, explanation: "Incorreto. Apelido é apodo." }
                ],
                correctIndex: 0
            },
            {
                question: "2. O que significa a palavra 'Firma' em um contrato?",
                options: [
                    { label: "Assinatura", isCorrect: true, explanation: "Exato! Firma = assinatura." },
                    { label: "Empresa corporativa", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "3. O que é um 'escritorio'?",
                options: [
                    { label: "Mesa / Escrivaninha de trabalho", isCorrect: true, explanation: "Perfeito! Escritorio = escrivaninha." },
                    { label: "Cômodo escritório", isCorrect: false, explanation: "Incorreto. Cômodo é oficina." }
                ],
                correctIndex: 0
            },
            {
                question: "4. O que significa 'Asignatura' na universidade?",
                options: [
                    { label: "Matéria / Disciplina escolar", isCorrect: true, explanation: "Excelente! Asignatura = matéria." },
                    { label: "Assinatura digital", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "5. Como se diz 'apelido' (alcunha carinhosa) em espanhol?",
                options: [
                    { label: "Apodo", isCorrect: true, explanation: "Correto! Apodo = apelido." },
                    { label: "Apellido", isCorrect: false, explanation: "Incorreto. Apellido é sobrenome." }
                ],
                correctIndex: 0
            }
        ]
    },

    {
        id: "fa_mod_6",
        level: "A2",
        title: "Módulo 6: Tempo e Ações Frequentes",
        description: "Domine advérbios de tempo e verbos cotidianos sem cair na armadilha do Portunhol.",
        stage1_context: {
            missionTitle: "🚨 'Un Rato' não é um Roedor!",
            missionDescription: "Esperar 'un rato' significa esperar um momento, e 'acordar' significa entrar em acordo!",
            audioGuide: "Tempo e Ações Frequentes"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Rato",
                rule: "'Rato' significa um curto período de tempo ou momento. O animal rato chama-se 'ratón'.",
                formula: "Rato = Momento 🟢 | 🔴 NÃO é o animal Rato ('ratón')",
                example: "Espérame un rato, por favor."
            },
            {
                type: "grammar_pill",
                title: "Acordar",
                rule: "'Acordar' significa concordar ou entrar em acordo. Acordar do sono diz-se 'despertar'.",
                formula: "Acordar = Entrar em acordo 🟢 | 🔴 NÃO é Despertar ('despertar')",
                example: "Acordamos el precio de la venta."
            },
            {
                type: "grammar_pill",
                title: "Todavía",
                rule: "'Todavía' significa ainda. A conjunção todavia/contudo diz-se 'sin embargo'.",
                formula: "Todavía = Ainda 🟢 | 🔴 NÃO é a conjunção Todavia ('sin embargo')",
                example: "Todavía no he terminado la tarea."
            },
            {
                type: "grammar_pill",
                title: "Luego",
                rule: "'Luego' significa depois ou mais tarde. Imensamente rápido diz-se 'inmediatamente'.",
                formula: "Luego = Depois / Mais tarde 🟢 | 🔴 NÃO é imediato",
                example: "Nos vemos luego."
            }
        ],
        stage3_practice: [
            {
                question: "Se um amigo diz 'Espérame un rato', o que ele quer dizer?",
                options: [
                    { label: "Espere-me um momento", isCorrect: true, explanation: "Correto! Rato = momento." },
                    { label: "Traga um rato roedor", isCorrect: false, explanation: "Incorreto. O animal é ratón." }
                ],
                correctIndex: 0
            },
            {
                question: "Como dizer 'Ele ainda não chegou' em espanhol?",
                options: [
                    { label: "Él todavía no ha llegado.", isCorrect: true, explanation: "Exato! Todavía = ainda." },
                    { label: "Él todavía ha llegado.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "Acordamos la reunión y luego nos vemos.",
                words: ["Acordamos", "la", "reunión", "y", "luego", "nos", "vemos."],
                translation: "Combinamos a reunião e depois nos vemos."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Juan",
                "npcName": "Juan",
                text: "¿Todavía estás en la oficina?",
                npcMessage: "¿Todavía estás en la oficina?",
                translation: "Você ainda está no escritório?"
            },
            {
                speaker: "Elena",
                "npcName": "Elena",
                text: "Sí, pero salgo en un rato. Nos vemos luego.",
                npcMessage: "Sí, pero salgo en un rato. Nos vemos luego.",
                translation: "Sim, mas saio em um momento. Nos vemos depois."
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa 'Rato' em espanhol?",
                options: [
                    { label: "Momento / Curto tempo", isCorrect: true, explanation: "Correto! Rato = momento." },
                    { label: "Animal roedor", isCorrect: false, explanation: "Incorreto. Animal é ratón." }
                ],
                correctIndex: 0
            },
            {
                question: "2. O verbo 'Acordar' significa:",
                options: [
                    { label: "Concordar / Combinar", isCorrect: true, explanation: "Exato! Acordar = combinar." },
                    { label: "Acordar do sono", isCorrect: false, explanation: "Incorreto. Acordar do sono é despertar." }
                ],
                correctIndex: 0
            },
            {
                question: "3. O que significa 'Todavía'?",
                options: [
                    { label: "Ainda", isCorrect: true, explanation: "Perfeito! Todavía = ainda." },
                    { label: "Contudo / Todavia", isCorrect: false, explanation: "Incorreto. Contudo é sin embargo." }
                ],
                correctIndex: 0
            },
            {
                question: "4. Traduza: 'Hasta luego.'",
                options: [
                    { label: "Até mais tarde / Até depois.", isCorrect: true, explanation: "Excelente! Luego = depois." },
                    { label: "Até logo imediato agora.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "5. Como se diz o animal 'rato' em espanhol?",
                options: [
                    { label: "Ratón", isCorrect: true, explanation: "Correto! Ratón = o animal." },
                    { label: "Rato", isCorrect: false, explanation: "Incorreto. Rato = momento." }
                ],
                correctIndex: 0
            }
        ]
    },

    {
        id: "fa_mod_7",
        level: "A2",
        title: "Módulo 7: Objetos e Roupas",
        description: "Aprenda a comprar roupas e utensílios sem confundir sacos, jaquetas e garrafas.",
        stage1_context: {
            missionTitle: "🚨 'Saco' é Paletó de Terno!",
            missionDescription: "Na Colômbia e Argentina, 'saco' é um paletó elegante ou suéter, não um saco de lixo!",
            audioGuide: "Objetos e Roupas"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Saco",
                rule: "'Saco' em espanhol significa paletó de terno ou casaco. Saco de lixo chama-se 'bolsa de basura'.",
                formula: "Saco = Paletó / Terno 🟢 | 🔴 NÃO é Saco de lixo ('bolsa')",
                example: "Lleva un saco elegante para la fiesta."
            },
            {
                type: "grammar_pill",
                title: "Cubierto",
                rule: "'Cubierto' no plural significa os talheres de refeição (garfo, faca, colher).",
                formula: "Cubiertos = Talheres 🟢 | 🔴 NÃO é apenas algo coberto",
                example: "Puso los cubiertos en la mesa."
            },
            {
                type: "grammar_pill",
                title: "Botella",
                rule: "'Botella' significa garrafa de bebida.",
                formula: "Botella = Garrafa 🟢 | 🔴 NÃO é bota pequena",
                example: "Compramos una botella de vino."
            },
            {
                type: "grammar_pill",
                title: "Chaqueta",
                rule: "'Chaqueta' significa jaqueta ou casaco.",
                formula: "Chaqueta = Jaqueta / Casaco 🟢",
                example: "Hace frío, ponte la chaqueta."
            }
        ],
        stage3_practice: [
            {
                question: "Como se diz 'talheres de comer' em espanhol?",
                options: [
                    { label: "Los cubiertos", isCorrect: true, explanation: "Correto! Cubiertos = talheres." },
                    { label: "Los talleres", isCorrect: false, explanation: "Incorreto. Talleres = oficinas." }
                ],
                correctIndex: 0
            },
            {
                question: "Se você comprar 'una botella de agua', receberá:",
                options: [
                    { label: "Uma garrafa de água", isCorrect: true, explanation: "Exato! Botella = garrafa." },
                    { label: "Uma bota de chuva", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "Puso los cubiertos y abrió la botella de agua.",
                words: ["Puso", "los", "cubiertos", "y", "abrió", "la", "botella", "de", "agua."],
                translation: "Colocou os talheres e abriu a garrafa de água."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Garçom",
                "npcName": "Camarero",
                text: "Aquí tiene los cubiertos y la botella de vino.",
                npcMessage: "Aquí tiene los cubiertos y la botella de vino.",
                translation: "Aqui estão os talheres e a garrafa de vinho."
            },
            {
                speaker: "Cliente",
                "npcName": "Cliente",
                text: "Muchas gracias. Me voy a quitar la chaqueta porque hace calor.",
                npcMessage: "Muchas gracias. Me voy a quitar la chaqueta porque hace calor.",
                translation: "Muito obrigado. Vou tirar a jaqueta porque está calor."
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa 'Saco' na vestimenta hispânica?",
                options: [
                    { label: "Paletó de terno / Casaco", isCorrect: true, explanation: "Correto! Saco = paletó." },
                    { label: "Saco de plástico / lixo", isCorrect: false, explanation: "Incorreto. É bolsa de basura." }
                ],
                correctIndex: 0
            },
            {
                question: "2. Como se diz 'talheres' em espanhol?",
                options: [
                    { label: "Los cubiertos", isCorrect: true, explanation: "Exato! Cubiertos = talheres." },
                    { label: "Los talleres", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "3. O que é 'una botella'?",
                options: [
                    { label: "Uma garrafa", isCorrect: true, explanation: "Perfeito! Botella = garrafa." },
                    { label: "Uma bota pequena", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "4. O que significa 'Chaqueta'?",
                options: [
                    { label: "Jaqueta / Casaco", isCorrect: true, explanation: "Excelente! Chaqueta = jaqueta." },
                    { label: "Chapéu", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "5. Traduza: 'Trae una botella de vino.'",
                options: [
                    { label: "Traga uma garrafa de vinho.", isCorrect: true, explanation: "Correto!" },
                    { label: "Traga um saco de vinho.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ]
    },

    {
        id: "fa_mod_8",
        level: "A2",
        title: "Módulo 8: Sentimentos e Expressões",
        description: "Expressões de emoção, nojo, raiva e vontades sem gerar mal-entendidos morais.",
        stage1_context: {
            missionTitle: "🚨 'Molesto' é Incomodado!",
            missionDescription: "Se alguém diz que está 'molesto', significa que está chateado, não tarado!",
            audioGuide: "Sentimentos e Expressões"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Enojado",
                rule: "'Enojado' significa irritado ou com raiva. Com enjoo/náusea diz-se 'mareado'.",
                formula: "Enojado = Com raiva / Irritado 🟢 | 🔴 NÃO é Enjoado ('mareado')",
                example: "Está enojado porque perdió el autobús."
            },
            {
                type: "grammar_pill",
                title: "Molesto",
                rule: "'Molesto' significa incomodado, chateado ou importunado.",
                formula: "Molesto = Chateado / Incomodado 🟢 | 🔴 NÃO é tarado/molestador",
                example: "Disculpa si te molesto con mi pregunta."
            },
            {
                type: "grammar_pill",
                title: "Asco",
                rule: "'Asco' significa nojo ou repulsa profunda.",
                formula: "Asco = Nojo / Repulsa 🟢 | 🔴 NÃO é asma",
                example: "Me da asco la comida podrida."
            },
            {
                type: "grammar_pill",
                title: "Ganas",
                rule: "'Ganas' significa vontade ou desejo de fazer algo.",
                formula: "Tener ganas de = Ter vontade de 🟢 | 🔴 NÃO é o verbo ganhar",
                example: "Tengo ganas de comer helado."
            }
        ],
        stage3_practice: [
            {
                question: "Como dizer 'Estou com vontade de viajar' em espanhol?",
                options: [
                    { label: "Tengo ganas de viajar.", isCorrect: true, explanation: "Correto! Ganas = vontade." },
                    { label: "Gano de viajar.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "Se alguém diz 'Estoy molesto', essa pessoa está:",
                options: [
                    { label: "Chateada / Incomodada", isCorrect: true, explanation: "Exato! Molesto = incomodado." },
                    { label: "Doente com enjoo", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "Tengo ganas de salir pero estoy muy mareado.",
                words: ["Tengo", "ganas", "de", "salir", "pero", "estoy", "muy", "mareado."],
                translation: "Tenho vontade de sair mas estou muito enjoado."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Pablo",
                "npcName": "Pablo",
                text: "¿Por qué estás enojado?",
                npcMessage: "¿Por qué estás enojado?",
                translation: "Por que você está com raiva?"
            },
            {
                speaker: "Sofia",
                "npcName": "Sofia",
                text: "Estoy molesta porque no tengo ganas de estudiar hoy.",
                npcMessage: "Estoy molesta porque no tengo ganas de estudiar hoy.",
                translation: "Estou chateada porque não tenho vontade de estudar hoje."
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa 'Enojado' em espanhol?",
                options: [
                    { label: "Irritado / Com raiva", isCorrect: true, explanation: "Correto! Enojado = com raiva." },
                    { label: "Com enjoo no estômago", isCorrect: false, explanation: "Incorreto. Enjoado é mareado." }
                ],
                correctIndex: 0
            },
            {
                question: "2. O que significa 'Molesto'?",
                options: [
                    { label: "Incomodado / Chateado", isCorrect: true, explanation: "Exato! Molesto = chateado." },
                    { label: "Molestador moral", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "3. Traduza: 'Me da asco.'",
                options: [
                    { label: "Me dá nojo.", isCorrect: true, explanation: "Perfeito! Asco = nojo." },
                    { label: "Me dá asma.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "4. O que significa a expressão 'Tener ganas'?",
                options: [
                    { label: "Ter vontade / desejo", isCorrect: true, explanation: "Excelente! Ganas = vontade." },
                    { label: "Ganhar dinheiro", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "5. Como se diz 'enjoado' (tonto de viagem) em espanhol?",
                options: [
                    { label: "Mareado", isCorrect: true, explanation: "Correto! Mareado = enjoado." },
                    { label: "Enojado", isCorrect: false, explanation: "Incorreto. Enojado é com raiva." }
                ],
                correctIndex: 0
            }
        ]
    },

    // ==========================================
    // 🟠 NÍVEL B1: FALSOS COGNATOS SOCIAIS & PROFISSIONAIS (MÓDULOS 9 A 12)
    // ==========================================
    {
        id: "fa_mod_9",
        level: "B1",
        title: "Módulo 9: No Ambiente Corporativo",
        description: "Termos do mundo do trabalho: gorjetas, concursos, bolsas de estudo e sucessos.",
        stage1_context: {
            missionTitle: "🚨 'Propina' é Gorjeta Honesta!",
            missionDescription: "Dar uma 'propina' ao garçom é dar uma gorjeta polida, não um ato de corrupção!",
            audioGuide: "No Ambiente Corporativo"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Propina",
                rule: "'Propina' significa gorjeta de agradecimento por serviço. Suborno/propina ilícita chama-se 'soborno'.",
                formula: "Propina = Gorjeta polida 🟢 | 🔴 NÃO é suborno ilícito ('soborno')",
                example: "Dejé una propina generosa al camarero."
            },
            {
                type: "grammar_pill",
                title: "Suceso",
                rule: "'Suceso' significa acontecimento ou evento. Sucesso profissional chama-se 'éxito'.",
                formula: "Suceso = Acontecimento / Evento 🟢 | 🔴 NÃO é Sucesso ('éxito')",
                example: "Fue un suceso histórico importante."
            },
            {
                type: "grammar_pill",
                title: "Beca",
                rule: "'Beca' é a bolsa de estudos acadêmica.",
                formula: "Beca = Bolsa de estudos 🟢 | 🔴 NÃO é a beca de formatura",
                example: "Obtuvo una beca para estudiar en Madrid."
            },
            {
                type: "grammar_pill",
                title: "Concurso",
                rule: "'Concurso' pode ser qualquer competição, torneio ou processo seletivo público.",
                formula: "Concurso = Competição / Torneio 🟢",
                example: "Ganó el concurso de fotografía."
            }
        ],
        stage3_practice: [
            {
                question: "Ao finalizar a refeição, você deixa ao garçom uma:",
                options: [
                    { label: "Propina (gorjeta)", isCorrect: true, explanation: "Correto! Propina = gorjeta." },
                    { label: "Soborno (suborno)", isCorrect: false, explanation: "Incorreto. Soborno é crime de suborno." }
                ],
                correctIndex: 0
            },
            {
                question: "Como parabenizar um profissional pelo sucesso em um projeto?",
                options: [
                    { label: "¡Felicidades por tu éxito!", isCorrect: true, explanation: "Exato! Éxito = sucesso." },
                    { label: "¡Felicidades por tu suceso!", isCorrect: false, explanation: "Incorreto. Suceso = acontecimento." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "Ganó una beca y tuvo gran éxito académico.",
                words: ["Ganó", "una", "beca", "y", "tuvo", "gran", "éxito", "académico."],
                translation: "Ganhou uma bolsa de estudos e teve grande sucesso acadêmico."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Diretor",
                "npcName": "Director",
                text: "Felicidades por ganar la beca de investigación.",
                npcMessage: "Felicidades por ganar la beca de investigación.",
                translation: "Parabéns por ganhar a bolsa de estudos de pesquisa."
            },
            {
                speaker: "Bolsista",
                "npcName": "Becario",
                text: "Muchas gracias. Ha sido un gran éxito para nuestro equipo.",
                npcMessage: "Muchas gracias. Ha sido un gran éxito para nuestro equipo.",
                translation: "Muito obrigado. Foi um grande sucesso para nossa equipe."
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa 'Propina' em um restaurante?",
                options: [
                    { label: "Gorjeta polida ao garçom", isCorrect: true, explanation: "Correto! Propina = gorjeta." },
                    { label: "Suborno ilícito", isCorrect: false, explanation: "Incorreto. Suborno é soborno." }
                ],
                correctIndex: 0
            },
            {
                question: "2. Como se diz 'sucesso' em espanhol?",
                options: [
                    { label: "Éxito", isCorrect: true, explanation: "Exato! Éxito = sucesso." },
                    { label: "Suceso", isCorrect: false, explanation: "Incorreto. Suceso é evento." }
                ],
                correctIndex: 0
            },
            {
                question: "3. O que é uma 'beca' no ambiente universitário?",
                options: [
                    { label: "Bolsa de estudos", isCorrect: true, explanation: "Perfeito! Beca = bolsa de estudos." },
                    { label: "Roupa de formatura", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "4. O que significa 'Suceso'?",
                options: [
                    { label: "Acontecimento / Evento", isCorrect: true, explanation: "Excelente! Suceso = acontecimento." },
                    { label: "Sucesso corporativo", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "5. Como se diz 'suborno' em espanhol?",
                options: [
                    { label: "Soborno", isCorrect: true, explanation: "Correto! Soborno = suborno." },
                    { label: "Propina", isCorrect: false, explanation: "Incorreto. Propina é gorjeta." }
                ],
                correctIndex: 0
            }
        ]
    },

    {
        id: "fa_mod_10",
        level: "B1",
        title: "Módulo 10: Saúde e Corpo Avançado",
        description: "Saúde e alimentos: resfriados, suposições, gorduras e machucados.",
        stage1_context: {
            missionTitle: "🚨 'Constipado' é Resfriado!",
            missionDescription: "Se você estiver 'constipado', peça remédio para resfriado e gripe, pois não é prisão de ventre!",
            audioGuide: "Saúde e Corpo Avançado"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Constipado",
                rule: "'Constipado' significa resfriado ou gripado. Prisão de ventre diz-se 'estreñido'.",
                formula: "Constipado = Resfriado/Gripado 🟢 | 🔴 NÃO é prisão de ventre ('estreñido')",
                example: "Tengo tos y fiebre, estoy constipado."
            },
            {
                type: "grammar_pill",
                title: "Presunto",
                rule: "'Presunto' como adjetivo significa suposto ou presumível. O alimento presunto chama-se 'jamón'.",
                formula: "Presunto = Suposto 🟢 | 🔴 NÃO é a carne Presunto ('jamón')",
                example: "El presunto autor del delito fue detenido."
            },
            {
                type: "grammar_pill",
                title: "Graso",
                rule: "'Graso' significa gorduroso ou oleoso. Graxa industrial chama-se 'grasa'.",
                formula: "Graso = Gorduroso 🟢 | 🔴 NÃO é graxa",
                example: "No debo comer alimentos grasos."
            },
            {
                type: "grammar_pill",
                title: "Herida",
                rule: "'Herida' significa ferida ou machucado.",
                formula: "Herida = Ferida 🟢 | 🔴 NÃO é erguida",
                example: "La herida sanó rápidamente."
            }
        ],
        stage3_practice: [
            {
                question: "Na farmácia na Espanha, se você diz 'Estoy constipado', o farmacêutico entenderá:",
                options: [
                    { label: "Que você está com resfriado/gripe", isCorrect: true, explanation: "Correto! Constipado = resfriado." },
                    { label: "Que você está com prisão de ventre", isCorrect: false, explanation: "Incorreto. Prisão de ventre é estreñido." }
                ],
                correctIndex: 0
            },
            {
                question: "Como pedir presunto de pão na padaria?",
                options: [
                    { label: "Un bocadillo de jamón, por favor.", isCorrect: true, explanation: "Exato! Jamón = presunto." },
                    { label: "Un bocadillo de presunto, por favor.", isCorrect: false, explanation: "Incorreto. Presunto = suposto." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "Comí un bocadillo de jamón y me siento constipado.",
                words: ["Comí", "un", "bocadillo", "de", "jamón", "y", "me", "siento", "constipado."],
                translation: "Comi um sanduíche de presunto e me sinto resfriado."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Médico",
                "npcName": "Doctor",
                text: "¿Qué síntomas tiene?",
                npcMessage: "¿Qué síntomas tiene?",
                translation: "Quais sintomas você tem?"
            },
            {
                speaker: "Paciente",
                "npcName": "Paciente",
                text: "Estoy constipado, tengo tos y dolor de cabeza.",
                npcMessage: "Estoy constipado, tengo tos y dolor de cabeza.",
                translation: "Estou resfriado, tenho tosse e dor de cabeça."
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa 'Constipado' em espanhol?",
                options: [
                    { label: "Resfriado / Gripado", isCorrect: true, explanation: "Correto! Constipado = resfriado." },
                    { label: "Com prisão de ventre", isCorrect: false, explanation: "Incorreto. É estreñido." }
                ],
                correctIndex: 0
            },
            {
                question: "2. Como se diz a carne 'presunto' em espanhol?",
                options: [
                    { label: "Jamón", isCorrect: true, explanation: "Exato! Jamón = presunto." },
                    { label: "Presunto", isCorrect: false, explanation: "Incorreto. Presunto = suposto." }
                ],
                correctIndex: 0
            },
            {
                question: "3. O adjetivo 'Presunto' no contexto jurídico significa:",
                options: [
                    { label: "Suposto / Presumível", isCorrect: true, explanation: "Perfeito! Presunto = suposto." },
                    { label: "Fatia de presunto", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "4. O que significa 'Herida'?",
                options: [
                    { label: "Ferida / Machucado", isCorrect: true, explanation: "Excelente! Herida = ferida." },
                    { label: "Erguida / Levantada", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "5. Alimento 'graso' significa alimento:",
                options: [
                    { label: "Gorduroso / Oleoso", isCorrect: true, explanation: "Correto! Graso = gorduroso." },
                    { label: "Com graxa de motor", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ]
    },

    {
        id: "fa_mod_11",
        level: "B1",
        title: "Módulo 11: Adjetivos Enganosos II",
        description: "Aprenda sobre delicadeza, grosseria, formidável e iniciantes.",
        stage1_context: {
            missionTitle: "🚨 'Novel' é Novato!",
            missionDescription: "Um escritor 'novel' é um autor iniciante, e 'bruto' refere-se ao estado rústico sem lapidação!",
            audioGuide: "Adjetivos Enganosos II"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Novel",
                rule: "'Novel' significa novato, principiante ou inexperiente. Novela de TV chama-se 'telenovela'.",
                formula: "Novel = Novato / Iniciante 🟢 | 🔴 NÃO é novela de televisão ('telenovela')",
                example: "Es un autor novel muy prometedor."
            },
            {
                type: "grammar_pill",
                title: "Bruto",
                rule: "'Bruto' refere-se a algo não lapidado (diamante bruto) ou pessoa rústica/grosseira.",
                formula: "Bruto = Não lapidado / Grosseiro 🟢",
                example: "El diamante en bruto fue pulido."
            },
            {
                type: "grammar_pill",
                title: "Formidable",
                rule: "'Formidable' é altamente positivo e significa maravilhoso, fantástico ou incrível.",
                formula: "Formidable = Maravilhoso / Incrível 🟢 | 🔴 NÃO é assustador",
                example: "Hiciste un trabajo formidable."
            },
            {
                type: "grammar_pill",
                title: "Delicado",
                rule: "'Delicado' expressa tanto fragilidade física quanto polidez extrema.",
                formula: "Delicado = Frágil / Educado 🟢",
                example: "Es un asunto muy delicado."
            }
        ],
        stage3_practice: [
            {
                question: "Se um colega fez um trabalho 'formidable', você deve:",
                options: [
                    { label: "Parabenizá-lo pelo trabalho incrível", isCorrect: true, explanation: "Correto! Formidable = maravilhoso." },
                    { label: "Ficar assustado com o trabalho", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "O que é um 'escritor novel'?",
                options: [
                    { label: "Um escritor iniciante / novato", isCorrect: true, explanation: "Exato! Novel = novato." },
                    { label: "Um roteirista de novela de TV", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "El autor novel escribió un libro formidable.",
                words: ["El", "autor", "novel", "escribió", "un", "libro", "formidable."],
                translation: "O autor iniciante escreveu um livro incrível."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Editor",
                "npcName": "Editor",
                text: "Leí el manuscrito del autor novel. Es formidable.",
                npcMessage: "Leí el manuscrito del autor novel. Es formidable.",
                translation: "Li o manuscrito do autor iniciante. É maravilhoso."
            },
            {
                speaker: "Crítico",
                "npcName": "Crítico",
                text: "Coincido contigo, tiene un talento impresionante.",
                npcMessage: "Coincido contigo, tiene un talento impresionante.",
                translation: "Concordo com você, ele tem um talento impressionante."
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa 'Novel' em espanhol?",
                options: [
                    { label: "Iniciante / Novato", isCorrect: true, explanation: "Correto! Novel = novato." },
                    { label: "Novela de televisão", isCorrect: false, explanation: "Incorreto. Novela de TV é telenovela." }
                ],
                correctIndex: 0
            },
            {
                question: "2. O adjetivo 'Formidable' significa:",
                options: [
                    { label: "Maravilhoso / Incrível", isCorrect: true, explanation: "Exato! Formidable = maravilhoso." },
                    { label: "Assustador", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "3. Como se diz 'novela de televisão' em espanhol?",
                options: [
                    { label: "Telenovela", isCorrect: true, explanation: "Perfeito! Telenovela." },
                    { label: "Novel", isCorrect: false, explanation: "Incorreto. Novel é novato." }
                ],
                correctIndex: 0
            },
            {
                question: "4. O termo 'diamante en bruto' refere-se a:",
                options: [
                    { label: "Diamante bruto não lapidado", isCorrect: true, explanation: "Excelente!" },
                    { label: "Diamante violento", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "5. Traduza: 'Fue una experiencia formidable.'",
                options: [
                    { label: "Foi uma experiência incrível / maravilhosa.", isCorrect: true, explanation: "Correto!" },
                    { label: "Foi uma experiência horrível.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ]
    },

    {
        id: "fa_mod_12",
        level: "B1",
        title: "Módulo 12: Verbos Traiçoeiros",
        description: "Verbos de intenção, presença e memória que pregam peças aos lusófonos.",
        stage1_context: {
            missionTitle: "🚨 Pretender é Ter Intenção!",
            missionDescription: "'Pretender' significa planejar ou ter intenção, fingir diz-se 'fingir'!",
            audioGuide: "Verbos Traiçoeiros"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Pretender",
                rule: "'Pretender' significa planejar, tencionar ou ter intenção de. Fingir chama-se 'fingir'.",
                formula: "Pretender = Ter intenção / Planejar 🟢 | 🔴 NÃO é Fingir ('fingir')",
                example: "Pretendo viajar a España en verano."
            },
            {
                type: "grammar_pill",
                title: "Asistir",
                rule: "'Asistir' com preposição 'a' significa presenciar ou assistir a um evento. Dar assistência diz-se 'atender'.",
                formula: "Asistir a = Presenciar / Comparecer 🟢 | 🔴 NÃO é dar assistência física",
                example: "Asistí a la conferencia universitaria."
            },
            {
                type: "grammar_pill",
                title: "Recordar",
                rule: "'Recordar' significa lembrar-se de algo ou trazer à memória. Gravar em áudio diz-se 'grabar'.",
                formula: "Recordar = Lembrar 🟢 | 🔴 NÃO é gravar áudio ('grabar')",
                example: "No recuerdo dónde dejé las llaves."
            }
        ],
        stage3_practice: [
            {
                question: "Como dizer 'Tenho intenção de estudar medicina'?",
                options: [
                    { label: "Pretendo estudiar medicina.", isCorrect: true, explanation: "Correto! Pretender = ter intenção." },
                    { label: "Finjo estudiar medicina.", isCorrect: false, explanation: "Incorreto. Fingir = fingir." }
                ],
                correctIndex: 0
            },
            {
                question: "Traduza: 'Asistí a la reunión ayer.'",
                options: [
                    { label: "Fui / Compareci à reunião ontem.", isCorrect: true, explanation: "Exato! Asistir a = comparecer." },
                    { label: "Dói assistência médica à reunião.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "Pretendo asistir a la clase de español mañana.",
                words: ["Pretendo", "asistir", "a", "la", "clase", "de", "español", "mañana."],
                translation: "Planejo ir à aula de espanhol amanhã."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Gabriel",
                "npcName": "Gabriel",
                text: "¿Pretendes asistir al congreso de mañana?",
                npcMessage: "¿Pretendes asistir al congreso de mañana?",
                translation: "Você planeja ir ao congresso de amanhã?"
            },
            {
                speaker: "Laura",
                "npcName": "Laura",
                text: "Sí, pretendo ir muy temprano si lo recuerdo.",
                npcMessage: "Sí, pretendo ir muy temprano si lo recuerdo.",
                translation: "Sim, planejo ir bem cedo se eu me lembrar."
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa 'Pretender' em espanhol?",
                options: [
                    { label: "Ter intenção / Planejar", isCorrect: true, explanation: "Correto! Pretender = planejar." },
                    { label: "Fingir uma mentira", isCorrect: false, explanation: "Incorreto. Fingir é fingir." }
                ],
                correctIndex: 0
            },
            {
                question: "2. Traduza: 'Asistí a la clase.'",
                options: [
                    { label: "Fui / Compareci à aula.", isCorrect: true, explanation: "Exato! Asistir a = ir." },
                    { label: "Ajudei a aula.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "3. O verbo 'Recordar' significa:",
                options: [
                    { label: "Lembrar-se de algo", isCorrect: true, explanation: "Perfeito! Recordar = lembrar." },
                    { label: "Gravar voz no microfone", isCorrect: false, explanation: "Incorreto. Gravar é grabar." }
                ],
                correctIndex: 0
            },
            {
                question: "4. Como se diz 'fingir' em espanhol?",
                options: [
                    { label: "Fingir", isCorrect: true, explanation: "Excelente! Fingir." },
                    { label: "Pretender", isCorrect: false, explanation: "Incorreto. Pretender é planejar." }
                ],
                correctIndex: 0
            },
            {
                question: "5. Como se diz 'gravar um vídeo' em espanhol?",
                options: [
                    { label: "Grabar un video", isCorrect: true, explanation: "Correto! Grabar = gravar." },
                    { label: "Recordar un video", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ]
    },

    // ==========================================
    // 🔴 NÍVEL B2: FALSOS COGNATOS AVANÇADOS & NUANCES (MÓDULOS 13 A 16)
    // ==========================================
    {
        id: "fa_mod_13",
        level: "B2",
        title: "Módulo 13: Direito e Burocracia",
        description: "Distingua 'Prejuicio' de 'Perjuicio' e evite gafes em contextos formais.",
        stage1_context: {
            missionTitle: "🚨 Prejuicio vs. Perjuicio!",
            missionDescription: "'Prejuicio' é preconceito moral e 'Perjuicio' é prejuízo/dano financeiro ou material!",
            audioGuide: "Direito e Burocracia"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Prejuicio",
                rule: "'Prejuicio' significa preconceito social ou julgamento prévio.",
                formula: "Prejuicio = Preconceito 🟢 | 🔴 NÃO é prejuízo financeiro",
                example: "Debemos luchar contra los prejuicios sociales."
            },
            {
                type: "grammar_pill",
                title: "Perjuicio",
                rule: "'Perjuicio' significa prejuízo financeiro, dano material ou perda.",
                formula: "Perjuicio = Prejuízo / Dano financeiro 🟢",
                example: "El accidente causó graves perjuicios económicos."
            },
            {
                type: "grammar_pill",
                title: "Cuestión",
                rule: "'Cuestión' é assunto, tema ou tópico em debate. Pergunta de prova chama-se 'pregunta'.",
                formula: "Cuestión = Tópico / Assunto 🟢 | 🔴 NÃO é pergunta de prova ('pregunta')",
                example: "Es una cuestión de gran importancia."
            },
            {
                type: "grammar_pill",
                title: "Desacato",
                rule: "'Desacato' é o crime formal de desobediência a autoridades.",
                formula: "Desacato = Desobediência formal a autoridade 🟢",
                example: "Fue juzgado por desacato a la autoridad."
            }
        ],
        stage3_practice: [
            {
                question: "Se uma empresa sofreu perdas financeiras após um contrato rompido, ela teve:",
                options: [
                    { label: "Un gran perjuicio económico.", isCorrect: true, explanation: "Correto! Perjuicio = prejuízo." },
                    { label: "Un gran prejuicio económico.", isCorrect: false, explanation: "Incorreto. Prejuicio = preconceito." }
                ],
                correctIndex: 0
            },
            {
                question: "Como combater a discriminação na sociedade?",
                options: [
                    { label: "Eliminando los prejuicios sociales.", isCorrect: true, explanation: "Exato! Prejuicio = preconceito." },
                    { label: "Eliminando los perjuicios sociales.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "El juez analizó la cuestión y evitó un perjuicio.",
                words: ["El", "juez", "analizó", "la", "cuestión", "y", "evitó", "un", "perjuicio."],
                translation: "O juiz analisou o assunto e evitou um prejuízo."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Advogado",
                "npcName": "Abogado",
                text: "La demanda busca reparar el perjuicio causado a la empresa.",
                npcMessage: "La demanda busca reparar el perjuicio causado a la empresa.",
                translation: "O processo busca reparar o prejuízo causado à empresa."
            },
            {
                speaker: "Juiz",
                "npcName": "Juez",
                text: "Analizaremos la cuestión sin ningún prejuicio.",
                npcMessage: "Analizaremos la cuestión sin ningún prejuicio.",
                translation: "Analisaremos o assunto sem nenhum preconceito."
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa 'Prejuicio' em espanhol?",
                options: [
                    { label: "Preconceito", isCorrect: true, explanation: "Correto! Prejuicio = preconceito." },
                    { label: "Prejuízo financeiro", isCorrect: false, explanation: "Incorreto. Prejuízo financeiro é perjuicio." }
                ],
                correctIndex: 0
            },
            {
                question: "2. Como se diz 'prejuízo financeiro' em espanhol?",
                options: [
                    { label: "Perjuicio", isCorrect: true, explanation: "Exato! Perjuicio = prejuízo." },
                    { label: "Prejuicio", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "3. O termo 'Cuestión' refere-se a:",
                options: [
                    { label: "Tópico / Assunto em debate", isCorrect: true, explanation: "Perfeito! Cuestión = assunto." },
                    { label: "Pergunta de prova escolar", isCorrect: false, explanation: "Incorreto. Pergunta é pregunta." }
                ],
                correctIndex: 0
            },
            {
                question: "4. Como se diz 'pergunta de prova' em espanhol?",
                options: [
                    { label: "Pregunta", isCorrect: true, explanation: "Excelente! Pregunta = pergunta." },
                    { label: "Cuestión", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "5. O termo 'Desacato' é:",
                options: [
                    { label: "Desobediência formal a uma autoridade", isCorrect: true, explanation: "Correto!" },
                    { label: "Falta de tato na conversa", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ]
    },

    {
        id: "fa_mod_14",
        level: "B2",
        title: "Módulo 14: Verbos de Nuance Avançada",
        description: "Explore os verbos 'explotar', 'constatar' e 'calificar' em nível executivo.",
        stage1_context: {
            missionTitle: "🚨 Verbos Executivos de Precisão",
            missionDescription: "'Explotar' pode significar explodir uma bomba ou explorar recursos minerais/comerciais!",
            audioGuide: "Verbos de Nuance Avançada"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Explotar",
                rule: "'Explotar' significa tanto explodir quanto explorar minas, recursos naturais ou negócios.",
                formula: "Explotar = Explodir ou Explorar negócios 🟢",
                example: "La empresa explota minas de cobre."
            },
            {
                type: "grammar_pill",
                title: "Constatar",
                rule: "'Constatar' significa verificar, confirmar com evidências ou comprovar.",
                formula: "Constatar = Verificar / Comprovar com fatos 🟢",
                example: "Constatamos que los datos son correctos."
            },
            {
                type: "grammar_pill",
                title: "Calificar",
                rule: "'Calificar' significa dar nota, avaliar ou classificar um desempenho.",
                formula: "Calificar = Dar nota / Classificar 🟢",
                example: "El profesor calificó los exámenes."
            }
        ],
        stage3_practice: [
            {
                question: "Se um relatório executivo comprova a veracidade dos dados, ele:",
                options: [
                    { label: "Constata los resultados con evidencia", isCorrect: true, explanation: "Correto! Constatar = comprovar." },
                    { label: "Constata los resultados de memoria", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "Como dizer 'A empresa explora recursos sustentáveis'?",
                options: [
                    { label: "La empresa explota recursos sostenibles.", isCorrect: true, explanation: "Exato! Explotar = explorar recursos." },
                    { label: "La empresa destruye recursos.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "El auditor logró constatar la calidad del proyecto.",
                words: ["El", "auditor", "logró", "constatar", "la", "calidad", "del", "proyecto."],
                translation: "O auditor conseguiu comprovar a qualidade do projeto."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Gerente",
                "npcName": "Gerente",
                text: "¿Pudiste constatar los informes financieros?",
                npcMessage: "¿Pudiste constatar los informes financieros?",
                translation: "Você pôde comprovar os relatórios financeiros?"
            },
            {
                speaker: "Auditor",
                "npcName": "Auditor",
                text: "Sí, constatamos que el proyecto explota recursos con eficiencia.",
                npcMessage: "Sí, constatamos que el proyecto explota recursos con eficiencia.",
                translation: "Sim, comprovamos que o projeto explora recursos com eficiência."
            }
        ],
        stage5_quiz: [
            {
                question: "1. O verbo 'Explotar' pode significar:",
                options: [
                    { label: "Explodir ou Explorar recursos/negócios", isCorrect: true, explanation: "Correto! Ambas as acepções." },
                    { label: "Ficar bravo apenas", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "2. O que significa 'Constatar'?",
                options: [
                    { label: "Verificar / Comprovar evidências", isCorrect: true, explanation: "Exato! Constatar = comprovar." },
                    { label: "Contar uma piada", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "3. O termo 'Calificar' na escola significa:",
                options: [
                    { label: "Dar notas / Avaliar provas", isCorrect: true, explanation: "Perfeito! Calificar = dar nota." },
                    { label: "Qualificar profissão", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "4. Traduza: 'Calificar las pruebas.'",
                options: [
                    { label: "Dar nota às provas.", isCorrect: true, explanation: "Excelente!" },
                    { label: "Calificar as provas.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "5. Comprovar um fato com dados é:",
                options: [
                    { label: "Constatar los hechos", isCorrect: true, explanation: "Correto!" },
                    { label: "Inventar los hechos", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ]
    },

    {
        id: "fa_mod_15",
        level: "B2",
        title: "Módulo 15: O Humor Hispânico e Duplo Sentido",
        description: "Entenda trocadilhos, piadas e anedotas baseadas nos mal-entendidos entre PT e ES.",
        stage1_context: {
            missionTitle: "🎭 A Arte do Humor Anti-Portunhol",
            missionDescription: "Descubra como os nativos brincam com o espanhol e o português através dos falsos cognatos clássicos!",
            audioGuide: "Humor Hispânico"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Aperitivos vs. Golpes",
                rule: "Na piada clássica: '¡Voy a pedir unas tapas!' ➔ O brasileiro se assustou achando que ia apanhar!",
                formula: "Tapas = Petiscos no restaurante 🟢",
                example: "Comimos tapas variadas en Sevilla."
            },
            {
                type: "grammar_pill",
                title: "Poeira na Comida",
                rule: "'Camarero, hay polvo en la mesa' ➔ O cliente apenas pediu para limpar a poeira da mesa!",
                formula: "Polvo = Poeira 🟢",
                example: "Limpió el polvo con un paño."
            },
            {
                type: "grammar_pill",
                title: "A Sobrenome Enganosa",
                rule: "'Mi apellido es Blanco' ➔ 'Seu apelido é Blanco?' 'No, mi apellido es mi sobrenombre de familia'.",
                formula: "Apellido = Sobrenome 🟢 | Apodo = Apelido 🟢",
                example: "García es su apellido."
            }
        ],
        stage3_practice: [
            {
                question: "Na piada do restaurante, quando o turista espanhol pede 'tapas', o garçom brasileiro não entendia porque achava que eram:",
                options: [
                    { label: "Tapas de dar bofetada", isCorrect: true, explanation: "Correto! Esse é o trocadilho cômico." },
                    { label: "Pratos de sobremesa", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "Qual dupla de palavras causa a confusão mais engraçada em recepções de hotel?",
                options: [
                    { label: "Apellido (sobrenome) vs. Apodo (apelido)", isCorrect: true, explanation: "Exato!" },
                    { label: "Hola vs. Adiós", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "El chiste del apellido y la firma fue muy divertido.",
                words: ["El", "chiste", "del", "apellido", "y", "la", "firma", "fue", "muy", "divertido."],
                translation: "A piada do sobrenome e da assinatura foi muito divertida."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Comediante",
                "npcName": "Comediante",
                text: "¿Conocen la historia del brasileño que pidió un vaso y le trajeron una maceta?",
                npcMessage: "¿Conocen la historia del brasileño que pidió un vaso y le trajeron una maceta?",
                translation: "Conhecem a história do brasileiro que pediu um vaso e trouxeram um vaso de flor?"
            },
            {
                speaker: "Público",
                "npcName": "Público",
                text: "¡Sí, es el clásico malentendido entre vaso y maceta!",
                npcMessage: "¡Sí, es el clásico malentendido entre vaso y maceta!",
                translation: "Sim, é o clássico mal-entendido entre copo e vaso de flores!"
            }
        ],
        stage5_quiz: [
            {
                question: "1. 'Un chiste' em espanhol significa:",
                options: [
                    { label: "Uma piada / trocadilho engraçado", isCorrect: true, explanation: "Correto! Chiste = piada." },
                    { label: "Um chiclete de mascar", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "2. Por que a frase 'Estoy embarazada' gera risadas quando dita por engano?",
                options: [
                    { label: "Porque significa grávida e não envergonhada", isCorrect: true, explanation: "Exato!" },
                    { label: "Porque significa alegre", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "3. O termo 'maceta' em espanhol significa:",
                options: [
                    { label: "Vaso de planta / flores", isCorrect: true, explanation: "Perfeito! Maceta = vaso de flor." },
                    { label: "Marreta de obra", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "4. Traduza: 'Contó un chiste excelente.'",
                options: [
                    { label: "Contou uma piada excelente.", isCorrect: true, explanation: "Excelente!" },
                    { label: "Contou um chiclete excelente.", isCorrect: false, explanation: "Incorreto." }
                ],
                correctIndex: 0
            },
            {
                question: "5. 'Apodo' em espanhol equivale a:",
                options: [
                    { label: "Apelido carinhoso", isCorrect: true, explanation: "Correto! Apodo = apelido." },
                    { label: "Sobrenome", isCorrect: false, explanation: "Incorreto. Sobrenome é apellido." }
                ],
                correctIndex: 0
            }
        ]
    },

    {
        id: "fa_mod_16",
        level: "B2",
        title: "Módulo 16: Desafio Final Anti-Portunhol",
        description: "Exame integrado de certificação dos 16 Módulos de Falsos Cognatos de Espanhol.",
        stage1_context: {
            missionTitle: "🏆 Exame de Certificação Anti-Portunhol",
            missionDescription: "Demonstre domínio total sobre os 16 módulos de falsos cognatos do A1 ao B2 e elimine o Portunhol da sua fala!",
            audioGuide: "Exame Final Anti-Portunhol"
        },
        stage2_drops: [
            {
                type: "grammar_pill",
                title: "Síntese dos Falsos Cognatos",
                rule: "Revisão integrada: Exquisito (Delicioso), Embarazada (Grávida), Apellido (Sobrenome), Propina (Gorjeta), Constipado (Resfriado), Prejuicio (Preconceito).",
                formula: "Espanhol Autêntico sem Portunhol! 🟢",
                example: "Dominio total de los falsos amigos."
            }
        ],
        stage3_practice: [
            {
                question: "Qual frase está 100% CORRETA em espanhol autêntico?",
                options: [
                    { label: "La comida estuvo exquisita, dejé propina y luego firmé con mi apellido.", isCorrect: true, explanation: "¡Excelente! Todas as palavras usadas corretamente com seus significados reais." },
                    { label: "La comida estuvo esquisita y dejé soborno.", isCorrect: false, explanation: "Incorreto. Portunhol." }
                ],
                correctIndex: 0
            }
        ],
        stage3_5_sentenceBuilder: [
            {
                sentenceEs: "Aprobé el examen final de falsos amigos con éxito.",
                words: ["Aprobé", "el", "examen", "final", "de", "falsos", "amigos", "con", "éxito."],
                translation: "Passei no exame final de falsos cognatos com sucesso."
            }
        ],
        stage4_dialog: [
            {
                speaker: "Examinador",
                "npcName": "Examinador",
                text: "¡Felicidades! Has superado el Desafío Final Anti-Portunhol.",
                npcMessage: "¡Felicidades! Has superado el Desafío Final Anti-Portunhol.",
                translation: "Parabéns! Você superou o Desafio Final Anti-Portunhol."
            },
            {
                speaker: "Estudante",
                "npcName": "Estudiante",
                text: "¡Muchas gracias! Ahora domino los falsos amigos a la perfección.",
                npcMessage: "¡Muchas gracias! Ahora domino los falsos amigos a la perfección.",
                translation: "Muito obrigado! Agora domino os falsos cognatos com perfeição."
            }
        ],
        stage5_quiz: [
            {
                question: "1. O que significa 'Exquisito'?",
                options: [{ label: "Delicioso", isCorrect: true, explanation: "Correto!" }, { label: "Esquisito", isCorrect: false, explanation: "Incorreto." }],
                correctIndex: 0
            },
            {
                question: "2. O que significa 'Embarazada'?",
                options: [{ label: "Grávida", isCorrect: true, explanation: "Correto!" }, { label: "Envergonhada", isCorrect: false, explanation: "Incorreto." }],
                correctIndex: 0
            },
            {
                question: "3. O que significa 'Apellido'?",
                options: [{ label: "Sobrenome", isCorrect: true, explanation: "Correto!" }, { label: "Apelido carinhoso", isCorrect: false, explanation: "Incorreto." }],
                correctIndex: 0
            },
            {
                question: "4. O que significa 'Propina'?",
                options: [{ label: "Gorjeta", isCorrect: true, explanation: "Correto!" }, { label: "Suborno", isCorrect: false, explanation: "Incorreto." }],
                correctIndex: 0
            },
            {
                question: "5. O que significa 'Constipado'?",
                options: [{ label: "Resfriado / Gripado", isCorrect: true, explanation: "Correto!" }, { label: "Com prisão de ventre", isCorrect: false, explanation: "Incorreto." }],
                correctIndex: 0
            },
            {
                question: "6. O que significa 'Prejuicio'?",
                options: [{ label: "Preconceito", isCorrect: true, explanation: "Correto!" }, { label: "Prejuízo financeiro", isCorrect: false, explanation: "Incorreto." }],
                correctIndex: 0
            },
            {
                question: "7. O que significa 'Perjuicio'?",
                options: [{ label: "Prejuízo / Dano financeiro", isCorrect: true, explanation: "Correto!" }, { label: "Preconceito", isCorrect: false, explanation: "Incorreto." }],
                correctIndex: 0
            },
            {
                question: "8. O que significa 'Polvo'?",
                options: [{ label: "Poeira / Pó", isCorrect: true, explanation: "Correto!" }, { label: "Molusco do mar", isCorrect: false, explanation: "Incorreto." }],
                correctIndex: 0
            },
            {
                question: "9. O que significa 'Rato'?",
                options: [{ label: "Momento / Pouco tempo", isCorrect: true, explanation: "Correto!" }, { label: "Animal roedor", isCorrect: false, explanation: "Incorreto." }],
                correctIndex: 0
            },
            {
                question: "10. Qual a sua conquista ao finalizar os 16 Módulos Anti-Portunhol?",
                options: [{ label: "Domínio total dos falsos cognatos de espanhol do A1 ao B2 com eliminação do Portunhol!", isCorrect: true, explanation: "¡FELICIDADES! Certificação oficial da Trilha Anti-Portunhol!" }, { label: "Nenhuma conquista", isCorrect: false, explanation: "Incorreto." }],
                correctIndex: 0
            }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DADOS_ESPANHOL_FALSOS_AMIGOS_TRILHA;
}
if (typeof window !== 'undefined') {
    window.DADOS_ESPANHOL_FALSOS_AMIGOS_TRILHA = DADOS_ESPANHOL_FALSOS_AMIGOS_TRILHA;
}
