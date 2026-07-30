// ==========================================
// BANCO DE DADOS DE PHRASAL VERBS & EXPRESSÕES
// ORGANIZADO EM 28 MÓDULOS POR NÍVEIS CEFR (A1, A2, B1, B2)
// 6 ITENS ÚNICOS E TEMÁTICOS + 10 QUESTÕES DE FIXAÇÃO POR MÓDULO
// ==========================================

const PHRASAL_VERBS_DATA = [
    {
        "module": 1,
        "level": "A1",
        "title": "Module 1: Home Routines & Waking Up",
        "description": "Aprenda os Phrasal Verbs essenciais para descrever a rotina matinal e o ato de acordar e levantar em casa.",
        "items": [
            {
                "id": "pv_mod01_wake_up",
                "verb": "Wake up",
                "meaning": "Acordar (despertar)",
                "breakdown": {
                    "root": "Wake (despertar)",
                    "particle": "Up (para cima)",
                    "type": "Separable"
                },
                "explanation": "Indica o momento em que a pessoa abre os olhos e deixa de dormir.",
                "examples": [
                    {
                        "sentence": "I usually wake up at 6:30 AM every morning.",
                        "translation": "Eu geralmente me acordo às 6h30 todas as manhãs."
                    },
                    {
                        "sentence": "The loud alarm woke her up.",
                        "translation": "O alarme alto a acordou."
                    }
                ]
            },
            {
                "id": "pv_mod01_get_up",
                "verb": "Get up",
                "meaning": "Levantar-se (da cama ou cadeira)",
                "breakdown": {
                    "root": "Get (obter/mover)",
                    "particle": "Up (para cima)",
                    "type": "Inseparable"
                },
                "explanation": "Refere-se à ação de sair da cama ou ficar de pé após ter acordado.",
                "examples": [
                    {
                        "sentence": "He gets up at 7:00 AM on weekdays.",
                        "translation": "Ele se levanta às 7h nos dias de semana."
                    },
                    {
                        "sentence": "Get up, it's time for school!",
                        "translation": "Levante-se, é hora de ir para a escola!"
                    }
                ]
            },
            {
                "id": "pv_mod01_dress_up",
                "verb": "Dress up",
                "meaning": "Arrumar-se / Vestir roupa elegante ou fantasia",
                "breakdown": {
                    "root": "Dress (vestir)",
                    "particle": "Up (completamente)",
                    "type": "Separable"
                },
                "explanation": "Usado quando alguém veste roupas mais elegantes para um evento ou se fantasia.",
                "examples": [
                    {
                        "sentence": "We need to dress up for the wedding tonight.",
                        "translation": "Nós precisamos nos arrumar para o casamento hoje à noite."
                    },
                    {
                        "sentence": "Kids love to dress up for Halloween.",
                        "translation": "Crianças adoram se fantasiar no Halloween."
                    }
                ]
            },
            {
                "id": "pv_mod01_lie_down",
                "verb": "Lie down",
                "meaning": "Deitar-se (para descansar)",
                "breakdown": {
                    "root": "Lie (repolar/deitar)",
                    "particle": "Down (para baixo)",
                    "type": "Inseparable"
                },
                "explanation": "Ação de colocar o corpo na horizontal para descansar ou dormir um pouco.",
                "examples": [
                    {
                        "sentence": "I feel dizzy, I need to lie down for a minute.",
                        "translation": "Estou tonto, preciso me deitar por um minuto."
                    },
                    {
                        "sentence": "She lay down on the sofa to rest.",
                        "translation": "Ela se deitou no sofá para descansar."
                    }
                ]
            },
            {
                "id": "pv_mod01_sleep_in",
                "verb": "Sleep in",
                "meaning": "Dormir até mais tarde",
                "breakdown": {
                    "root": "Sleep (dormir)",
                    "particle": "In (adentro)",
                    "type": "Inseparable"
                },
                "explanation": "Ação de dormir além do horário habitual, geralmente nos fins de semana.",
                "examples": [
                    {
                        "sentence": "On Sundays, I love to sleep in until 10 AM.",
                        "translation": "Aos domingos, eu adoro dormir até mais tarde, até as 10h."
                    },
                    {
                        "sentence": "We can sleep in tomorrow because it's a holiday.",
                        "translation": "Nós podemos dormir até mais tarde amanhã porque é feriado."
                    }
                ]
            },
            {
                "id": "pv_mod01_wash_up",
                "verb": "Wash up",
                "meaning": "Lavar as mãos/rosto ou lavar a louça",
                "breakdown": {
                    "root": "Wash (lavar)",
                    "particle": "Up (completamente)",
                    "type": "Separable"
                },
                "explanation": "Significa lavar as mãos e o rosto antes de comer ou lavar a louça pós-refeição.",
                "examples": [
                    {
                        "sentence": "Go wash up before dinner, kids!",
                        "translation": "Vão lavar as mãos antes do jantar, crianças!"
                    },
                    {
                        "sentence": "I'll wash up the dishes after we finish eating.",
                        "translation": "Eu vou lavar a louça depois que terminarmos de comer."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "My alarm clock rings at 6:00 AM, but I usually don't ___ until 6:20 AM.",
                "options": [
                    "get up",
                    "wash up",
                    "sleep in",
                    "dress up"
                ],
                "a": "get up",
                "explanation": "'Get up' refere-se ao ato de sair fisicamente da cama após ter acordado.",
                "type": "choice"
            },
            {
                "q": "It's Sunday morning! I don't have to work, so I can ___ until 10:00 AM.",
                "options": [
                    "sleep in",
                    "wake up",
                    "lie down",
                    "dress up"
                ],
                "a": "sleep in",
                "explanation": "'Sleep in' significa dormir até mais tarde do que o habitual.",
                "type": "choice"
            },
            {
                "q": "Before we sit down at the dinner table, please go to the bathroom and ___.",
                "options": [
                    "wash up",
                    "lie down",
                    "wake up",
                    "get up"
                ],
                "a": "wash up",
                "explanation": "'Wash up' significa lavar as mãos e o rosto antes de comer.",
                "type": "choice"
            },
            {
                "q": "We are going to a fancy wedding tonight, so everyone needs to ___.",
                "options": [
                    "dress up",
                    "sleep in",
                    "lie down",
                    "get up"
                ],
                "a": "dress up",
                "explanation": "'Dress up' é vestir-se de forma elegante ou com roupas especiais.",
                "type": "choice"
            },
            {
                "q": "Você está conversando com colegas e quer explicar que seu alarme toca às 6h, mas você só sai fisicamente da cama às 6h30. Qual frase expressa isso?",
                "options": [
                    "I wake up at 6:00, but I don't get up until 6:30.",
                    "I sleep in at 6:00, but I wash up at 6:30.",
                    "I dress up at 6:00, but I lie down at 6:30.",
                    "I wash up at 6:00, but I wake up at 6:30."
                ],
                "a": "I wake up at 6:00, but I don't get up until 6:30.",
                "explanation": "'Wake up' é abrir os olhos; 'get up' é sair da cama.",
                "type": "choice"
            },
            {
                "q": "Se o seu filho está prestes a almoçar sem higienizar as mãos, qual instrução direta você deve dar a ele?",
                "options": [
                    "Go wash up before eating!",
                    "Go sleep in before eating!",
                    "Go dress up before eating!",
                    "Go get up before eating!"
                ],
                "a": "Go wash up before eating!",
                "explanation": "'Wash up' é lavar as mãos e o rosto.",
                "type": "choice"
            },
            {
                "q": "Qual atitude é descrita pela frase: 'On Sundays, I love to sleep in until 10 AM'?",
                "options": [
                    "Aproveitar o dia de folga para dormir até mais tarde",
                    "Ir para a cama muito cedo no domingo",
                    "Acordar assustado com o alarme às 10h",
                    "Lavar a louça do café às 10h"
                ],
                "a": "Aproveitar o dia de folga para dormir até mais tarde",
                "explanation": "'Sleep in' é continuar dormindo além do horário normal.",
                "type": "choice"
            },
            {
                "q": "Você sente uma forte tontura durante o trabalho e precisa repousar na horizontal. Como pedir licença?",
                "options": [
                    "I feel dizzy, I need to lie down for a minute.",
                    "I feel dizzy, I need to dress up for a minute.",
                    "I feel dizzy, I need to get up for a minute.",
                    "I feel dizzy, I need to wash up for a minute."
                ],
                "a": "I feel dizzy, I need to lie down for a minute.",
                "explanation": "'Lie down' é deitar-se para descansar.",
                "type": "choice"
            },
            {
                "q": "Sua família foi convidada para um casamento elegante. Como você avisa a todos que devem se vestir formalmente?",
                "options": [
                    "We need to dress up for the event tonight.",
                    "We need to lie down for the event tonight.",
                    "We need to wash up for the event tonight.",
                    "We need to sleep in for the event tonight."
                ],
                "a": "We need to dress up for the event tonight.",
                "explanation": "'Dress up' é vestir-se de forma elegante.",
                "type": "choice"
            },
            {
                "q": "Ao dizer 'I'll wash up the dishes after dinner', qual tarefa doméstica você está assumindo?",
                "options": [
                    "Lavar a louça do jantar",
                    "Arrumar as camas dos quartos",
                    "Varrer o chão da cozinha",
                    "Tirar o lixo da casa"
                ],
                "a": "Lavar a louça do jantar",
                "explanation": "'Wash up' também se refere a lavar a louça.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 2,
        "level": "A1",
        "title": "Module 2: Clothing, Dressing & Appearance",
        "description": "Phrasal Verbs essenciais sobre vestuário, experimentar roupas e cuidados com a aparência.",
        "items": [
            {
                "id": "pv_mod02_put_on",
                "verb": "Put on",
                "meaning": "Vestir / Colocar (roupa, sapatos, maquiagem)",
                "breakdown": {
                    "root": "Put (colocar)",
                    "particle": "On (sobre)",
                    "type": "Separable"
                },
                "explanation": "Ação de colocar uma peça de vestuário ou acessório no corpo.",
                "examples": [
                    {
                        "sentence": "Put on your coat, it's freezing outside!",
                        "translation": "Vista seu casaco, está congelando lá fora!"
                    },
                    {
                        "sentence": "She put on her glasses to read the menu.",
                        "translation": "Ela colocou os óculos para ler o cardápio."
                    }
                ]
            },
            {
                "id": "pv_mod02_take_off",
                "verb": "Take off",
                "meaning": "Tirar (roupa ou sapatos)",
                "breakdown": {
                    "root": "Take (pegar/remover)",
                    "particle": "Off (fora)",
                    "type": "Separable"
                },
                "explanation": "O oposto de 'put on'; despir uma roupa ou tirar os sapatos.",
                "examples": [
                    {
                        "sentence": "Please take off your shoes at the door.",
                        "translation": "Por favor, tire seus sapatos na porta."
                    },
                    {
                        "sentence": "He took off his jacket when he got indoors.",
                        "translation": "Ele tirou o paletó quando entrou em casa."
                    }
                ]
            },
            {
                "id": "pv_mod02_try_on",
                "verb": "Try on",
                "meaning": "Experimentar roupa",
                "breakdown": {
                    "root": "Try (testar)",
                    "particle": "On (sobre o corpo)",
                    "type": "Separable"
                },
                "explanation": "Vestir uma roupa na loja para verificar se o tamanho e o caimento servem.",
                "examples": [
                    {
                        "sentence": "Can I try on this blue dress, please?",
                        "translation": "Posso experimentar este vestido azul, por favor?"
                    },
                    {
                        "sentence": "She tried on three pairs of shoes before buying one.",
                        "translation": "Ela experimentou três pares de sapatos antes de comprar um."
                    }
                ]
            },
            {
                "id": "pv_mod02_hang_up",
                "verb": "Hang up",
                "meaning": "Pendurar (roupas no cabide/varal)",
                "breakdown": {
                    "root": "Hang (pendurar)",
                    "particle": "Up (no alto)",
                    "type": "Separable"
                },
                "explanation": "Colocar as roupas penduradas em cabides ou no armário.",
                "examples": [
                    {
                        "sentence": "Please hang up your shirt in the closet.",
                        "translation": "Por favor, pendure sua camisa no armário."
                    },
                    {
                        "sentence": "Hang up your wet coat by the door.",
                        "translation": "Pendure seu casaco molhado junto à porta."
                    }
                ]
            },
            {
                "id": "pv_mod02_zip_up",
                "verb": "Zip up",
                "meaning": "Fechar o zíper",
                "breakdown": {
                    "root": "Zip (zíper)",
                    "particle": "Up (até o topo)",
                    "type": "Separable"
                },
                "explanation": "Puxar o fecho ecler (zíper) para fechar uma jaqueta ou calça.",
                "examples": [
                    {
                        "sentence": "Zip up your jacket, the wind is cold.",
                        "translation": "Feche o zíper da sua jaqueta, o vento está frio."
                    },
                    {
                        "sentence": "Can you help me zip up this dress?",
                        "translation": "Você pode me ajudar a fechar o zíper deste vestido?"
                    }
                ]
            },
            {
                "id": "pv_mod02_fit_in",
                "verb": "Fit in",
                "meaning": "Servir / Encaixar-se (em uma roupa ou grupo)",
                "breakdown": {
                    "root": "Fit (caber)",
                    "particle": "In (dentro)",
                    "type": "Inseparable"
                },
                "explanation": "Refere-se ao caimento adequado da roupa ou a sentir-se parte de um grupo.",
                "examples": [
                    {
                        "sentence": "These jeans don't fit in my suitcase.",
                        "translation": "Esta calça jeans não cabe na minha mala."
                    },
                    {
                        "sentence": "I hope I fit in with the new team.",
                        "translation": "Espero me encaixar com a nova equipe."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "It's freezing outside! Make sure to ___ your thick coat before going out.",
                "options": [
                    "put on",
                    "take off",
                    "try on",
                    "fit in"
                ],
                "a": "put on",
                "explanation": "'Put on' significa vestir uma peça de roupa.",
                "type": "choice"
            },
            {
                "q": "Please ___ your wet shoes at the entrance door so you don't dirty the carpet.",
                "options": [
                    "take off",
                    "put on",
                    "zip up",
                    "hang up"
                ],
                "a": "take off",
                "explanation": "'Take off' é despir ou remover calçados e roupas.",
                "type": "choice"
            },
            {
                "q": "Excuse me, where is the fitting room? I'd like to ___ this dress.",
                "options": [
                    "try on",
                    "zip up",
                    "fit in",
                    "take off"
                ],
                "a": "try on",
                "explanation": "'Try on' é provar/experimentar roupas na loja.",
                "type": "choice"
            },
            {
                "q": "The cold wind is blowing hard. Can you help me ___ my jacket?",
                "options": [
                    "zip up",
                    "take off",
                    "fit in",
                    "hang up"
                ],
                "a": "zip up",
                "explanation": "'Zip up' é puxar o zíper para fechar a jaqueta.",
                "type": "choice"
            },
            {
                "q": "Está congelando lá fora e seu amigo está saindo de camiseta. Como avisá-lo para vestir o casaco?",
                "options": [
                    "Put on your heavy jacket, it's freezing!",
                    "Take off your heavy jacket, it's freezing!",
                    "Try on your heavy jacket, it's freezing!",
                    "Fit in your heavy jacket, it's freezing!"
                ],
                "a": "Put on your heavy jacket, it's freezing!",
                "explanation": "'Put on' significa vestir uma roupa.",
                "type": "choice"
            },
            {
                "q": "Você chega em um apartamento com carpete e o anfitrião pede para remover os sapatos sujos na porta. O que ele diz?",
                "options": [
                    "Please take off your shoes at the entrance.",
                    "Please put on your shoes at the entrance.",
                    "Please zip up your shoes at the entrance.",
                    "Please hang up your shoes at the entrance."
                ],
                "a": "Please take off your shoes at the entrance.",
                "explanation": "'Take off' é despir ou remover calçados.",
                "type": "choice"
            },
            {
                "q": "Em uma loja de roupas, como pedir educadamente para testar o tamanho de um vestido antes de comprar?",
                "options": [
                    "Can I try on this dress, please?",
                    "Can I take off this dress, please?",
                    "Can I zip up this dress, please?",
                    "Can I hang up this dress, please?"
                ],
                "a": "Can I try on this dress, please?",
                "explanation": "'Try on' é provar roupas numa loja.",
                "type": "choice"
            },
            {
                "q": "Se você diz 'these jeans don't fit in my bag', qual é o problema encontrado?",
                "options": [
                    "A calça jeans não cabe na minha bolsa",
                    "A calça jeans está rasgada na bolsa",
                    "A calça jeans é cara demais na loja",
                    "A calça jeans mudou de cor"
                ],
                "a": "A calça jeans não cabe na minha bolsa",
                "explanation": "'Fit in' indica se um objeto cabe num determinado espaço.",
                "type": "choice"
            },
            {
                "q": "Como você pede para um amigo ajudar a fechar o zíper da sua jaqueta contra o vento frio?",
                "options": [
                    "Can you help me zip up my jacket?",
                    "Can you help me take off my jacket?",
                    "Can you help me try on my jacket?",
                    "Can you help me hang up my jacket?"
                ],
                "a": "Can you help me zip up my jacket?",
                "explanation": "'Zip up' é fechar o zíper da jaqueta.",
                "type": "choice"
            },
            {
                "q": "Qual instrução pede para pendurar a camisa limpa no armário em vez de deixá-la na cama?",
                "options": [
                    "Please hang up your shirt in the closet.",
                    "Please put on your shirt in the closet.",
                    "Please take off your shirt in the closet.",
                    "Please try on your shirt in the closet."
                ],
                "a": "Please hang up your shirt in the closet.",
                "explanation": "'Hang up' significa pendurar roupas em cabides.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 3,
        "level": "A1",
        "title": "Module 3: Physical Movement & Social Basics",
        "description": "Phrasal Verbs de movimentação física e comandos sociais básicos do cotidiano.",
        "items": [
            {
                "id": "pv_mod03_go_out",
                "verb": "Go out",
                "meaning": "Sair (para passear, divertir-se ou jantar)",
                "breakdown": {
                    "root": "Go (ir)",
                    "particle": "Out (para fora)",
                    "type": "Inseparable"
                },
                "explanation": "Sair de casa para lazer, compras ou encontros sociais.",
                "examples": [
                    {
                        "sentence": "Let's go out for dinner tonight!",
                        "translation": "Vamos sair para jantar hoje à noite!"
                    },
                    {
                        "sentence": "She loves to go out with her friends on Saturdays.",
                        "translation": "Ela adora sair com as amigas aos sábados."
                    }
                ]
            },
            {
                "id": "pv_mod03_come_in",
                "verb": "Come in",
                "meaning": "Entrar (em uma sala ou casa)",
                "breakdown": {
                    "root": "Come (vir)",
                    "particle": "In (para dentro)",
                    "type": "Inseparable"
                },
                "explanation": "Convidar alguém ou mover-se para o interior de um ambiente.",
                "examples": [
                    {
                        "sentence": "Knock on the door before you come in.",
                        "translation": "Bata na porta antes de entrar."
                    },
                    {
                        "sentence": "Please come in and sit down!",
                        "translation": "Por favor, entre e sente-se!"
                    }
                ]
            },
            {
                "id": "pv_mod03_sit_down",
                "verb": "Sit down",
                "meaning": "Sentar-se",
                "breakdown": {
                    "root": "Sit (sentar)",
                    "particle": "Down (para baixo)",
                    "type": "Inseparable"
                },
                "explanation": "Ação física de abaixar o corpo e sentar em uma cadeira ou sofá.",
                "examples": [
                    {
                        "sentence": "Take a seat and sit down.",
                        "translation": "Pegue uma cadeira e sente-se."
                    },
                    {
                        "sentence": "The teacher asked the students to sit down.",
                        "translation": "O professor pediu aos alunos que se sentassem."
                    }
                ]
            },
            {
                "id": "pv_mod03_stand_up",
                "verb": "Stand up",
                "meaning": "Ficar de pé / Levantar-se",
                "breakdown": {
                    "root": "Stand (ficar de pé)",
                    "particle": "Up (para cima)",
                    "type": "Inseparable"
                },
                "explanation": "Levantar-se da posição sentada para a posição ereta.",
                "examples": [
                    {
                        "sentence": "Everyone stood up when the judge entered.",
                        "translation": "Todos se levantaram quando o juiz entrou."
                    },
                    {
                        "sentence": "Stand up and stretch your legs.",
                        "translation": "Fique de pé e estique as pernas."
                    }
                ]
            },
            {
                "id": "pv_mod03_move_in",
                "verb": "Move in",
                "meaning": "Mudar-se para uma casa nova",
                "breakdown": {
                    "root": "Move (mover)",
                    "particle": "In (para dentro)",
                    "type": "Inseparable"
                },
                "explanation": "Iniciar a residência em um novo imóvel ou apartamento.",
                "examples": [
                    {
                        "sentence": "We are moving in to our new apartment next Monday.",
                        "translation": "Nós vamos nos mudar para o nosso apartamento novo na próxima segunda-feira."
                    },
                    {
                        "sentence": "My new roommate moves in tomorrow.",
                        "translation": "Meu novo colega de quarto se muda amanhã."
                    }
                ]
            },
            {
                "id": "pv_mod03_walk_away",
                "verb": "Walk away",
                "meaning": "Afastar-se / Ir embora caminhando",
                "breakdown": {
                    "root": "Walk (caminhar)",
                    "particle": "Away (para longe)",
                    "type": "Inseparable"
                },
                "explanation": "Caminhar para longe de uma pessoa, discussão ou local.",
                "examples": [
                    {
                        "sentence": "Don't just walk away when I am talking to you!",
                        "translation": "Não vá embora simplesmente quando estou falando com você!"
                    },
                    {
                        "sentence": "He decided to walk away from the argument.",
                        "translation": "Ele decidiu se afastar da discussão."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "When the judge entered the courtroom, everyone had to ___.",
                "options": [
                    "stand up",
                    "sit down",
                    "walk away",
                    "move in"
                ],
                "a": "stand up",
                "explanation": "'Stand up' é a ação de levantar-se e ficar de pé.",
                "type": "choice"
            },
            {
                "q": "Knock on the door and wait until someone says 'Please, ___!'.",
                "options": [
                    "come in",
                    "go out",
                    "walk away",
                    "move in"
                ],
                "a": "come in",
                "explanation": "'Come in' é o convite cordial para entrar num recinto.",
                "type": "choice"
            },
            {
                "q": "It's Friday evening! Let's ___ for dinner and drinks with friends.",
                "options": [
                    "go out",
                    "move in",
                    "sit down",
                    "walk away"
                ],
                "a": "go out",
                "explanation": "'Go out' significa sair de casa para se divertir.",
                "type": "choice"
            },
            {
                "q": "Don't just ___ while I'm trying to talk to you about our problem!",
                "options": [
                    "walk away",
                    "sit down",
                    "come in",
                    "stand up"
                ],
                "a": "walk away",
                "explanation": "'Walk away' é afastar-se caminhando de uma conversa ou local.",
                "type": "choice"
            },
            {
                "q": "Quando o juiz entra no tribunal, qual ordem física todos os presentes devem seguir imediatamente?",
                "options": [
                    "Levantar-se da cadeira e ficar de pé (stand up)",
                    "Sentar-se no chão da sala (sit down)",
                    "Sair correndo pelo corredor (walk away)",
                    "Mudar-se de residência (move in)"
                ],
                "a": "Levantar-se da cadeira e ficar de pé (stand up)",
                "explanation": "'Stand up' é ficar de pé.",
                "type": "choice"
            },
            {
                "q": "Alguém bate à porta do seu escritório. Qual a forma mais cortês de convidá-la para entrar?",
                "options": [
                    "Please come in and have a seat!",
                    "Please go out and have a seat!",
                    "Please walk away and have a seat!",
                    "Please move in and have a seat!"
                ],
                "a": "Please come in and have a seat!",
                "explanation": "'Come in' é o convite para adentrar o recinto.",
                "type": "choice"
            },
            {
                "q": "É sexta-feira à noite e seus amigos querem comemorar o fim de semana em um restaurante. O que propor?",
                "options": [
                    "Let's go out for dinner tonight!",
                    "Let's move in for dinner tonight!",
                    "Let's stand up for dinner tonight!",
                    "Let's walk away for dinner tonight!"
                ],
                "a": "Let's go out for dinner tonight!",
                "explanation": "'Go out' significa sair de casa para se divertir.",
                "type": "choice"
            },
            {
                "q": "Se alguém se recusa a continuar ouvindo uma discussão e se afasta caminhando, essa pessoa resolveu:",
                "options": [
                    "Walk away from the argument",
                    "Sit down from the argument",
                    "Come in from the argument",
                    "Stand up from the argument"
                ],
                "a": "Walk away from the argument",
                "explanation": "'Walk away' é afastar-se a pé de uma conversa.",
                "type": "choice"
            },
            {
                "q": "Como anunciar aos amigos que você vai começar a morar no seu novo apartamento na próxima semana?",
                "options": [
                    "I am moving in to my new apartment next week.",
                    "I am going out to my new apartment next week.",
                    "I am walking away to my new apartment next week.",
                    "I am sitting down to my new apartment next week."
                ],
                "a": "I am moving in to my new apartment next week.",
                "explanation": "'Move in' é a mudança para nova residência.",
                "type": "choice"
            },
            {
                "q": "Ao receber visitas na sua sala de estar, como convidá-las simpaticamente para se acomodarem?",
                "options": [
                    "Please sit down and make yourselves comfortable.",
                    "Please stand up and make yourselves comfortable.",
                    "Please walk away and make yourselves comfortable.",
                    "Please move in and make yourselves comfortable."
                ],
                "a": "Please sit down and make yourselves comfortable.",
                "explanation": "'Sit down' é tomar lugar na cadeira ou sofá.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 4,
        "level": "A1",
        "title": "Module 4: Shopping, Money & Transactions",
        "description": "Phrasal Verbs essenciais para lidar com dinheiro, compras, pagamentos e economias.",
        "items": [
            {
                "id": "pv_mod04_pay_for",
                "verb": "Pay for",
                "meaning": "Pagar por algo",
                "breakdown": {
                    "root": "Pay (pagar)",
                    "particle": "For (por)",
                    "type": "Inseparable"
                },
                "explanation": "Entregar dinheiro em troca de um bem, produto ou serviço.",
                "examples": [
                    {
                        "sentence": "How much did you pay for that smartphone?",
                        "translation": "Quanto você pagou por aquele smartphone?"
                    },
                    {
                        "sentence": "I will pay for the lunch today.",
                        "translation": "Eu vou pagar pelo almoço hoje."
                    }
                ]
            },
            {
                "id": "pv_mod04_save_up",
                "verb": "Save up",
                "meaning": "Juntar dinheiro / Economizar para uma meta",
                "breakdown": {
                    "root": "Save (salvar/guardar)",
                    "particle": "Up (acumular)",
                    "type": "Separable"
                },
                "explanation": "Acumular dinheiro gradualmente para comprar algo caro no futuro.",
                "examples": [
                    {
                        "sentence": "I am saving up to buy a new car.",
                        "translation": "Estou juntando dinheiro para comprar um carro novo."
                    },
                    {
                        "sentence": "She saved up enough money for a trip to Japan.",
                        "translation": "Ela juntou dinheiro suficiente para uma viagem ao Japão."
                    }
                ]
            },
            {
                "id": "pv_mod04_pay_back",
                "verb": "Pay back",
                "meaning": "Devolver dinheiro emprestado / Reembolsar",
                "breakdown": {
                    "root": "Pay (pagar)",
                    "particle": "Back (de volta)",
                    "type": "Separable"
                },
                "explanation": "Devolver uma quantia que lhe foi emprestada anteriormente.",
                "examples": [
                    {
                        "sentence": "I will pay you back as soon as I get my salary.",
                        "translation": "Eu vou te pagar de volta assim que receber meu salário."
                    },
                    {
                        "sentence": "Don't forget to pay back the loan.",
                        "translation": "Não se esqueça de pagar o empréstimo."
                    }
                ]
            },
            {
                "id": "pv_mod04_sell_out",
                "verb": "Sell out",
                "meaning": "Esgotar o estoque de um produto",
                "breakdown": {
                    "root": "Sell (vender)",
                    "particle": "Out (completamente)",
                    "type": "Inseparable"
                },
                "explanation": "Vender todas as unidades disponíveis de um item ou ingresso.",
                "examples": [
                    {
                        "sentence": "The concert tickets sold out in ten minutes!",
                        "translation": "Os ingressos do show se esgotaram em dez minutos!"
                    },
                    {
                        "sentence": "Sorry, we are completely sold out of bread.",
                        "translation": "Desculpe, nós estamos com o estoque de pão totalmente esgotado."
                    }
                ]
            },
            {
                "id": "pv_mod04_shop_around",
                "verb": "Shop around",
                "meaning": "Pesquisar preços em várias lojas",
                "breakdown": {
                    "root": "Shop (comprar)",
                    "particle": "Around (em volta)",
                    "type": "Inseparable"
                },
                "explanation": "Comparar preços e condições em estabelecimentos diferentes antes de comprar.",
                "examples": [
                    {
                        "sentence": "Don't buy the first one you see; shop around first!",
                        "translation": "Não compre o primeiro que vir; pesquise os preços antes!"
                    },
                    {
                        "sentence": "I saved money by shopping around online.",
                        "translation": "Economizei dinheiro pesquisando preços online."
                    }
                ]
            },
            {
                "id": "pv_mod04_rip_off",
                "verb": "Rip off",
                "meaning": "Cobrar um preço abusivo / Passar a perna",
                "breakdown": {
                    "root": "Rip (rasgar)",
                    "particle": "Off (fora)",
                    "type": "Separable"
                },
                "explanation": "Cobrar muito mais caro do que um produto ou serviço realmente vale.",
                "examples": [
                    {
                        "sentence": "That taxi driver ripped us off!",
                        "translation": "Aquele taxista cobrou um preço abusivo da gente!"
                    },
                    {
                        "sentence": "Ten dollars for a bottle of water is a complete rip-off.",
                        "translation": "Dez dólares por uma garrafa de água é um roubo absurdo."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "I'm currently ___ to buy a brand new computer next year.",
                "options": [
                    "saving up",
                    "selling out",
                    "ripping off",
                    "paying back"
                ],
                "a": "saving up",
                "explanation": "'Save up' é juntar/economizar dinheiro com uma meta.",
                "type": "choice"
            },
            {
                "q": "Thanks for lending me $50! I promise to ___ you ___ next payday.",
                "options": [
                    "pay / back",
                    "sell / out",
                    "rip / off",
                    "save / up"
                ],
                "a": "pay / back",
                "explanation": "'Pay back' é devolver dinheiro emprestado.",
                "type": "choice"
            },
            {
                "q": "Before buying expensive headphones, you should ___ to compare prices.",
                "options": [
                    "shop around",
                    "rip off",
                    "sell out",
                    "pay for"
                ],
                "a": "shop around",
                "explanation": "'Shop around' é pesquisar preços em várias lojas.",
                "type": "choice"
            },
            {
                "q": "The concert tickets were so popular that they ___ in less than ten minutes.",
                "options": [
                    "sold out",
                    "paid back",
                    "shopped around",
                    "saved up"
                ],
                "a": "sold out",
                "explanation": "'Sold out' é o passado de esgotar o estoque.",
                "type": "choice"
            },
            {
                "q": "Você quer comprar um notebook novo no fim do ano e começou a guardar R$ 300 todo mês. Como descrever isso?",
                "options": [
                    "I am saving up to buy a new laptop.",
                    "I am ripping off to buy a new laptop.",
                    "I am selling out to buy a new laptop.",
                    "I am paying back to buy a new laptop."
                ],
                "a": "I am saving up to buy a new laptop.",
                "explanation": "'Save up' é juntar dinheiro com um objetivo.",
                "type": "choice"
            },
            {
                "q": "Seu amigo lhe emprestou R$ 100 na semana passada. Como garantir a ele que você devolverá a quantia?",
                "options": [
                    "I will pay you back as soon as I get my salary.",
                    "I will rip you off as soon as I get my salary.",
                    "I will sell you out as soon as I get my salary.",
                    "I will shop you around as soon as I get my salary."
                ],
                "a": "I will pay you back as soon as I get my salary.",
                "explanation": "'Pay back' é reembolsar quantia devida.",
                "type": "choice"
            },
            {
                "q": "Antes de comprar um smartphone caro, qual a melhor recomendação para economizar e encontrar o menor preço?",
                "options": [
                    "Pesquisar preços em várias lojas (shop around)",
                    "Pagar o primeiro preço sem olhar (pay for)",
                    "Cobrar um valor abusivo (rip off)",
                    "Esgotar todo o estoque da loja (sell out)"
                ],
                "a": "Pesquisar preços em várias lojas (shop around)",
                "explanation": "'Shop around' é comparar valores em lojas diferentes.",
                "type": "choice"
            },
            {
                "q": "Uma lojinha de turismo cobrou R$ 50 por uma garrafa de água mineral. Como expressar sua indignação?",
                "options": [
                    "That tourist shop completely ripped us off!",
                    "That tourist shop completely saved us up!",
                    "That tourist shop completely shopped us around!",
                    "That tourist shop completely paid us back!"
                ],
                "a": "That tourist shop completely ripped us off!",
                "explanation": "'Rip off' é cobrar um preço abusivo.",
                "type": "choice"
            },
            {
                "q": "Os ingressos do show de rock esgotaram totalmente em 5 minutos. Como noticiar esse fato?",
                "options": [
                    "The concert tickets sold out in 5 minutes.",
                    "The concert tickets paid back in 5 minutes.",
                    "The concert tickets saved up in 5 minutes.",
                    "The concert tickets shopped around in 5 minutes."
                ],
                "a": "The concert tickets sold out in 5 minutes.",
                "explanation": "'Sell out' é ter o estoque de ingressos esgotado.",
                "type": "choice"
            },
            {
                "q": "Quando você vai ao caixa do restaurante para quitar a conta da refeição familiar, você vai:",
                "options": [
                    "Pay for the family meal",
                    "Rip off the family meal",
                    "Sell out the family meal",
                    "Shop around the family meal"
                ],
                "a": "Pay for the family meal",
                "explanation": "'Pay for' é arcar com o custo de um serviço ou produto.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 5,
        "level": "A1",
        "title": "Module 5: Food, Cooking & Dining Out",
        "description": "Phrasal Verbs utilizados no preparo de refeições, alimentação e jantar fora.",
        "items": [
            {
                "id": "pv_mod05_eat_out",
                "verb": "Eat out",
                "meaning": "Comer fora (em restaurante)",
                "breakdown": {
                    "root": "Eat (comer)",
                    "particle": "Out (fora)",
                    "type": "Inseparable"
                },
                "explanation": "Fazer uma refeição em um restaurante ou lanchonete em vez de cozinhar em casa.",
                "examples": [
                    {
                        "sentence": "We are too tired to cook, let's eat out.",
                        "translation": "Estamos cansados demais para cozinhar, vamos comer fora."
                    },
                    {
                        "sentence": "How often do you eat out every month?",
                        "translation": "Com que frequência você come fora por mês?"
                    }
                ]
            },
            {
                "id": "pv_mod05_drink_up",
                "verb": "Drink up",
                "meaning": "Beber tudo / Esbanjar a bebida",
                "breakdown": {
                    "root": "Drink (beber)",
                    "particle": "Up (até o fim)",
                    "type": "Separable"
                },
                "explanation": "Terminar completamente a bebida no copo.",
                "examples": [
                    {
                        "sentence": "Drink up your juice, we have to leave now!",
                        "translation": "Beba todo o seu suco, nós temos que ir embora agora!"
                    },
                    {
                        "sentence": "They drank up their coffee and left.",
                        "translation": "Eles beberam todo o café e saíram."
                    }
                ]
            },
            {
                "id": "pv_mod05_warm_up",
                "verb": "Warm up",
                "meaning": "Esquentar comida no micro-ondas/fogão",
                "breakdown": {
                    "root": "Warm (aquecer)",
                    "particle": "Up (completamente)",
                    "type": "Separable"
                },
                "explanation": "Reaquecer uma refeição previamente pronta.",
                "examples": [
                    {
                        "sentence": "I will warm up the leftover pizza for lunch.",
                        "translation": "Vou esquentar a sobra de pizza para o almoço."
                    },
                    {
                        "sentence": "Can you warm up some milk for the baby?",
                        "translation": "Você pode esquentar um pouco de leite para o bebê?"
                    }
                ]
            },
            {
                "id": "pv_mod05_chop_up",
                "verb": "Chop up",
                "meaning": "Picar comida em pedacinhos",
                "breakdown": {
                    "root": "Chop (cortar)",
                    "particle": "Up (em pedaços pequenos)",
                    "type": "Separable"
                },
                "explanation": "Cortar ingredientes como vegetais ou carnes em pequenos pedaços com faca.",
                "examples": [
                    {
                        "sentence": "Please chop up the onions and carrots.",
                        "translation": "Por favor, pique as cebolas e as cenouras."
                    },
                    {
                        "sentence": "She chopped up the chicken for the soup.",
                        "translation": "Ela picou o frango para a sopa."
                    }
                ]
            },
            {
                "id": "pv_mod05_cut_down",
                "verb": "Cut down on",
                "meaning": "Reduzir o consumo de algum alimento",
                "breakdown": {
                    "root": "Cut (cortar)",
                    "particle": "Down on (reduzir em)",
                    "type": "Inseparable"
                },
                "explanation": "Diminuir a ingestão de açúcar, café, sal ou gordura por saúde.",
                "examples": [
                    {
                        "sentence": "My doctor told me to cut down on sugar.",
                        "translation": "Meu médico me disse para reduzir o açúcar."
                    },
                    {
                        "sentence": "I am trying to cut down on coffee.",
                        "translation": "Estou tentando reduzir o café."
                    }
                ]
            },
            {
                "id": "pv_mod05_serve_up",
                "verb": "Serve up",
                "meaning": "Servir a refeição no prato",
                "breakdown": {
                    "root": "Serve (servir)",
                    "particle": "Up (pronto)",
                    "type": "Separable"
                },
                "explanation": "Colocar a comida pronta nos pratos da mesa.",
                "examples": [
                    {
                        "sentence": "Dinner is ready! I am serving it up now.",
                        "translation": "O jantar está pronto! Estou servindo os pratos agora."
                    },
                    {
                        "sentence": "She served up a delicious roast chicken.",
                        "translation": "Ela serviu um frango assado delicioso."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "We don't feel like cooking tonight, so let's ___ at the new Italian place.",
                "options": [
                    "eat out",
                    "drink up",
                    "chop up",
                    "serve up"
                ],
                "a": "eat out",
                "explanation": "'Eat out' significa comer fora em um restaurante.",
                "type": "choice"
            },
            {
                "q": "My doctor strongly recommended that I ___ sugar and soft drinks.",
                "options": [
                    "cut down on",
                    "drink up",
                    "warm up",
                    "serve up"
                ],
                "a": "cut down on",
                "explanation": "'Cut down on' significa reduzir o consumo.",
                "type": "choice"
            },
            {
                "q": "Take a sharp knife and ___ the onions and carrots into small cubes.",
                "options": [
                    "chop up",
                    "eat out",
                    "warm up",
                    "drink up"
                ],
                "a": "chop up",
                "explanation": "'Chop up' é picar ingredientes com faca.",
                "type": "choice"
            },
            {
                "q": "Can you put the leftover soup in the microwave to ___ it ___?",
                "options": [
                    "warm / up",
                    "drink / up",
                    "eat / out",
                    "chop / up"
                ],
                "a": "warm / up",
                "explanation": "'Warm up' significa reaquecer refeição já pronta.",
                "type": "choice"
            },
            {
                "q": "Vocês estão cansados após o trabalho e decidem jantar num restaurante de massas. Como sugerir isso?",
                "options": [
                    "Let's eat out tonight!",
                    "Let's drink up tonight!",
                    "Let's chop up tonight!",
                    "Let's serve up tonight!"
                ],
                "a": "Let's eat out tonight!",
                "explanation": "'Eat out' significa comer fora num restaurante.",
                "type": "choice"
            },
            {
                "q": "Seu médico recomendou diminuir drasticamente o consumo diário de refrigerantes. Qual é a instrução dele?",
                "options": [
                    "You need to cut down on soda.",
                    "You need to drink up soda.",
                    "You need to warm up soda.",
                    "You need to serve up soda."
                ],
                "a": "You need to cut down on soda.",
                "explanation": "'Cut down on' significa reduzir o consumo.",
                "type": "choice"
            },
            {
                "q": "Como você pede ao seu ajudante de cozinha para fatiar as cebolas em pequenos cubos?",
                "options": [
                    "Please chop up the onions into small pieces.",
                    "Please eat out the onions into small pieces.",
                    "Please warm up the onions into small pieces.",
                    "Please drink up the onions into small pieces."
                ],
                "a": "Please chop up the onions into small pieces.",
                "explanation": "'Chop up' é picar ingredientes com faca.",
                "type": "choice"
            },
            {
                "q": "A sopa sobrou do almoço e esfriou. O que você faz antes de servir no jantar?",
                "options": [
                    "I will warm up the leftover soup.",
                    "I will drink up the leftover soup.",
                    "I will chop up the leftover soup.",
                    "I will cut down on the leftover soup."
                ],
                "a": "I will warm up the leftover soup.",
                "explanation": "'Warm up' é esquentar comida já pronta.",
                "type": "choice"
            },
            {
                "q": "Como a mãe incentiva a criança a beber todo o copo de leite antes de sair para a escola?",
                "options": [
                    "Drink up your milk, honey!",
                    "Eat out your milk, honey!",
                    "Chop up your milk, honey!",
                    "Warm up your milk, honey!"
                ],
                "a": "Drink up your milk, honey!",
                "explanation": "'Drink up' é beber até o fim.",
                "type": "choice"
            },
            {
                "q": "Ao anunciar que a refeição está pronta na panela e você colocará nos pratos, você diz:",
                "options": [
                    "I am going to serve up lunch now.",
                    "I am going to eat out lunch now.",
                    "I am going to chop up lunch now.",
                    "I am going to cut down lunch now."
                ],
                "a": "I am going to serve up lunch now.",
                "explanation": "'Serve up' é servir a comida nos pratos.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 6,
        "level": "A1",
        "title": "Module 6: Basic Communication & Technology",
        "description": "Phrasal Verbs de tecnologia básica, ligações telefônicas e conexões digitais.",
        "items": [
            {
                "id": "pv_mod06_turn_on",
                "verb": "Turn on",
                "meaning": "Ligar (aparelho eletrônico, luz)",
                "breakdown": {
                    "root": "Turn (girar/mudar)",
                    "particle": "On (ligado)",
                    "type": "Separable"
                },
                "explanation": "Acionar a energia ou chave de um dispositivo eletrônico ou lâmpada.",
                "examples": [
                    {
                        "sentence": "Turn on the light, it's too dark in here.",
                        "translation": "Ligue a luz, está muito escuro aqui dentro."
                    },
                    {
                        "sentence": "He turned on his laptop to work.",
                        "translation": "Ele ligou o notebook para trabalhar."
                    }
                ]
            },
            {
                "id": "pv_mod06_turn_off",
                "verb": "Turn off",
                "meaning": "Desligar (aparelho, luz)",
                "breakdown": {
                    "root": "Turn (girar/mudar)",
                    "particle": "Off (desligado)",
                    "type": "Separable"
                },
                "explanation": "Desativar a energia de um aparelho eletrônico.",
                "examples": [
                    {
                        "sentence": "Don't forget to turn off the TV before going to bed.",
                        "translation": "Não se esqueça de desligar a TV antes de ir dormir."
                    },
                    {
                        "sentence": "Please turn off your mobile phones during the movie.",
                        "translation": "Por favor, desliguem seus celulares durante o filme."
                    }
                ]
            },
            {
                "id": "pv_mod06_call_back",
                "verb": "Call back",
                "meaning": "Retornar a ligação telefônica",
                "breakdown": {
                    "root": "Call (chamar)",
                    "particle": "Back (de volta)",
                    "type": "Separable"
                },
                "explanation": "Ligar de volta para alguém que te telefonou anteriormente.",
                "examples": [
                    {
                        "sentence": "I'm busy right now, can I call you back later?",
                        "translation": "Estou ocupado agora, posso te ligar de volta mais tarde?"
                    },
                    {
                        "sentence": "She promised to call me back in five minutes.",
                        "translation": "Ela prometeu me retornar a ligação em cinco minutos."
                    }
                ]
            },
            {
                "id": "pv_mod06_pick_up_phone",
                "verb": "Pick up",
                "meaning": "Atender o telefone",
                "breakdown": {
                    "root": "Pick (pegar)",
                    "particle": "Up (erguer)",
                    "type": "Separable"
                },
                "explanation": "Atender a uma chamada telefônica em vez de deixar tocar.",
                "examples": [
                    {
                        "sentence": "I called him three times, but he didn't pick up.",
                        "translation": "Liguei para ele três vezes, mas ele não atendeu."
                    },
                    {
                        "sentence": "Pick up the phone, it's ringing!",
                        "translation": "Atenda o telefone, está tocando!"
                    }
                ]
            },
            {
                "id": "pv_mod06_hang_up_phone",
                "verb": "Hang up",
                "meaning": "Desligar a ligação telefônica",
                "breakdown": {
                    "root": "Hang (pendurar)",
                    "particle": "Up (no gancho)",
                    "type": "Separable"
                },
                "explanation": "Encerrar uma chamada telefônica (antigamente pendurava-se o fone no gancho).",
                "examples": [
                    {
                        "sentence": "Don't hang up on me, I haven't finished talking!",
                        "translation": "Não desligue na minha cara, eu não terminei de falar!"
                    },
                    {
                        "sentence": "He said goodbye and hung up the phone.",
                        "translation": "Ele disse tchau e desligou o telefone."
                    }
                ]
            },
            {
                "id": "pv_mod06_log_in",
                "verb": "Log in / Log on",
                "meaning": "Fazer login / Entrar em um sistema com senha",
                "breakdown": {
                    "root": "Log (registrar)",
                    "particle": "In / On (dentro)",
                    "type": "Inseparable"
                },
                "explanation": "Inserir usuário e senha para acessar uma conta ou computador.",
                "examples": [
                    {
                        "sentence": "You need your password to log in to your email.",
                        "translation": "Você precisa da sua senha para fazer login no seu e-mail."
                    },
                    {
                        "sentence": "I can't log in because I forgot my password.",
                        "translation": "Não consigo fazer login porque esqueci minha senha."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "It's getting pitch dark in here. Could you please ___ the lights?",
                "options": [
                    "turn on",
                    "turn off",
                    "hang up",
                    "call back"
                ],
                "a": "turn on",
                "explanation": "'Turn on' é acionar a luz ou eletrônico.",
                "type": "choice"
            },
            {
                "q": "I'm driving right now. Can I ___ you ___ in 20 minutes?",
                "options": [
                    "call / back",
                    "turn / off",
                    "pick / up",
                    "log / in"
                ],
                "a": "call / back",
                "explanation": "'Call back' é retornar a chamada telefônica.",
                "type": "choice"
            },
            {
                "q": "The phone on the desk has been ringing for a minute! Why doesn't someone ___?",
                "options": [
                    "pick up",
                    "hang up",
                    "log in",
                    "turn off"
                ],
                "a": "pick up",
                "explanation": "'Pick up' é atender o telefone.",
                "type": "choice"
            },
            {
                "q": "Remember to ___ your laptop when you leave the office for the weekend.",
                "options": [
                    "turn off",
                    "turn on",
                    "call back",
                    "pick up"
                ],
                "a": "turn off",
                "explanation": "'Turn off' é desligar o dispositivo eletrônico.",
                "type": "choice"
            },
            {
                "q": "O quarto está muito escuro para leitura. Como pedir a alguém para acionar o interruptor?",
                "options": [
                    "Can you please turn on the lamp?",
                    "Can you please turn off the lamp?",
                    "Can you please hang up the lamp?",
                    "Can you please call back the lamp?"
                ],
                "a": "Can you please turn on the lamp?",
                "explanation": "'Turn on' é ligar um aparelho ou luz.",
                "type": "choice"
            },
            {
                "q": "Você está no meio de uma reunião importante quando seu celular toca. O que dizer à pessoa?",
                "options": [
                    "I will call you back as soon as I finish.",
                    "I will turn you off as soon as I finish.",
                    "I will log you in as soon as I finish.",
                    "I will hang you up as soon as I finish."
                ],
                "a": "I will call you back as soon as I finish.",
                "explanation": "'Call back' é retornar a ligação mais tarde.",
                "type": "choice"
            },
            {
                "q": "O telefone fixo da recepção está tocando há mais de um minuto. Qual a ordem para a secretária?",
                "options": [
                    "Please pick up the phone!",
                    "Please hang up the phone!",
                    "Please log in the phone!",
                    "Please turn off the phone!"
                ],
                "a": "Please pick up the phone!",
                "explanation": "'Pick up' é atender a chamada telefônica.",
                "type": "choice"
            },
            {
                "q": "Ao encerrar o expediente no escritório, qual o hábito de segurança recomendado?",
                "options": [
                    "Desligar todos os computadores (turn off)",
                    "Ligar todas as luzes da sala (turn on)",
                    "Autenticar-se no sistema (log in)",
                    "Atender as chamadas perdidas (pick up)"
                ],
                "a": "Desligar todos os computadores (turn off)",
                "explanation": "'Turn off' é desativar a energia dos aparelhos.",
                "type": "choice"
            },
            {
                "q": "Para acessar sua conta bancária pelo aplicativo, qual ação com senha é exigida?",
                "options": [
                    "Fazer login no aplicativo (log in)",
                    "Desligar a ligação do aplicativo (hang up)",
                    "Retornar a chamada do aplicativo (call back)",
                    "Ligar a iluminação do aplicativo (turn on)"
                ],
                "a": "Fazer login no aplicativo (log in)",
                "explanation": "'Log in' é autenticar-se no sistema.",
                "type": "choice"
            },
            {
                "q": "O cliente encerrou a conversa telefônica bruscamente e desligou. Como descrever isso?",
                "options": [
                    "He said goodbye and hung up the phone.",
                    "He said goodbye and turned on the phone.",
                    "He said goodbye and logged in the phone.",
                    "He said goodbye and picked up the phone."
                ],
                "a": "He said goodbye and hung up the phone.",
                "explanation": "'Hang up' (passado hung up) é desligar a ligação.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 7,
        "level": "A2",
        "title": "Module 7: Transit, Vehicles & Travel",
        "description": "Phrasal Verbs de embarque, transporte público, hospedagem e deslocamentos de viagem.",
        "items": [
            {
                "id": "pv_mod07_get_on",
                "verb": "Get on",
                "meaning": "Embarcar (ônibus, trem, avião, navio)",
                "breakdown": {
                    "root": "Get (entrar/subir)",
                    "particle": "On (sobre)",
                    "type": "Inseparable"
                },
                "explanation": "Subir em meios de transporte coletivo onde se pode andar de pé.",
                "examples": [
                    {
                        "sentence": "We got on the bus at the central station.",
                        "translation": "Nós embarcamos no ônibus na estação central."
                    },
                    {
                        "sentence": "Get on the train before the doors close!",
                        "translation": "Embarque no trem antes que as portas se fechem!"
                    }
                ]
            },
            {
                "id": "pv_mod07_get_off",
                "verb": "Get off",
                "meaning": "Desembarcar (ônibus, trem, avião, navio)",
                "breakdown": {
                    "root": "Get (sair/descer)",
                    "particle": "Off (fora)",
                    "type": "Inseparable"
                },
                "explanation": "Descer de um veículo coletivo.",
                "examples": [
                    {
                        "sentence": "You need to get off at the next stop.",
                        "translation": "Você precisa desembarcar no próximo ponto."
                    },
                    {
                        "sentence": "They got off the plane and went to passport control.",
                        "translation": "Eles desceram do avião e foram para o controle de passaportes."
                    }
                ]
            },
            {
                "id": "pv_mod07_check_in",
                "verb": "Check in",
                "meaning": "Fazer o check-in (hotel/aeroporto)",
                "breakdown": {
                    "root": "Check (verificar)",
                    "particle": "In (entrada)",
                    "type": "Inseparable"
                },
                "explanation": "Registrar a chegada no hotel ou despachar malas e pegar bilhete no aeroporto.",
                "examples": [
                    {
                        "sentence": "We must check in two hours before our flight.",
                        "translation": "Nós devemos fazer o check-in duas horas antes do nosso voo."
                    },
                    {
                        "sentence": "What time can we check in at the hotel?",
                        "translation": "A que horas podemos fazer o check-in no hotel?"
                    }
                ]
            },
            {
                "id": "pv_mod07_check_out",
                "verb": "Check out",
                "meaning": "Fazer o check-out do hotel / Conferir",
                "breakdown": {
                    "root": "Check (verificar)",
                    "particle": "Out (saída)",
                    "type": "Inseparable"
                },
                "explanation": "Pagar a conta e devolver as chaves do hotel na saída.",
                "examples": [
                    {
                        "sentence": "We checked out of the hotel at 11 AM.",
                        "translation": "Fizemos o check-out do hotel às 11h."
                    },
                    {
                        "sentence": "Check out this view from our window!",
                        "translation": "Confira esta vista da nossa janela!"
                    }
                ]
            },
            {
                "id": "pv_mod07_drop_off",
                "verb": "Drop off",
                "meaning": "Deixar alguém de carro em algum lugar",
                "breakdown": {
                    "root": "Drop (soltar/deixar)",
                    "particle": "Off (desembarque)",
                    "type": "Separable"
                },
                "explanation": "Levar alguém de carro até certo ponto e deixá-lo lá.",
                "examples": [
                    {
                        "sentence": "Can you drop me off at the train station?",
                        "translation": "Você pode me deixar na estação de trem?"
                    },
                    {
                        "sentence": "I dropped off my brother at his school.",
                        "translation": "Deixei meu irmão na escola dele de carro."
                    }
                ]
            },
            {
                "id": "pv_mod07_set_off",
                "verb": "Set off / Set out",
                "meaning": "Partir / Iniciar uma viagem",
                "breakdown": {
                    "root": "Set (ajustar)",
                    "particle": "Off (em direção)",
                    "type": "Inseparable"
                },
                "explanation": "Dar início a uma jornada ou percurso de viagem.",
                "examples": [
                    {
                        "sentence": "We set off early in the morning to avoid traffic.",
                        "translation": "Nós partimos bem cedo pela manhã para evitar o trânsito."
                    },
                    {
                        "sentence": "They set off on a journey across Europe.",
                        "translation": "Eles partiram em uma jornada pela Europa."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "We need to ___ at the central station to catch the connecting bus.",
                "options": [
                    "get off",
                    "check in",
                    "drop off",
                    "set off"
                ],
                "a": "get off",
                "explanation": "'Get off' significa desembarcar de um veículo coletivo.",
                "type": "choice"
            },
            {
                "q": "Passengers must ___ at the airline counter at least two hours before departure.",
                "options": [
                    "check in",
                    "check out",
                    "get off",
                    "drop off"
                ],
                "a": "check in",
                "explanation": "'Check in' significa fazer o registro e despachar bagagens no aeroporto.",
                "type": "choice"
            },
            {
                "q": "Could you please ___ me ___ near the library on your way home?",
                "options": [
                    "drop / off",
                    "check / in",
                    "get / on",
                    "set / off"
                ],
                "a": "drop / off",
                "explanation": "'Drop off' é deixar alguém de carro em um determinado ponto.",
                "type": "choice"
            },
            {
                "q": "They decided to ___ at sunrise to avoid the heavy highway traffic.",
                "options": [
                    "set off",
                    "check out",
                    "get on",
                    "drop off"
                ],
                "a": "set off",
                "explanation": "'Set off' é dar início a uma viagem ou jornada.",
                "type": "choice"
            },
            {
                "q": "Vocês estão no ônibus urbano e se aproximam do ponto onde devem desembarcar. Como avisar seu amigo?",
                "options": [
                    "We need to get off at the next stop.",
                    "We need to check in at the next stop.",
                    "We need to drop off at the next stop.",
                    "We need to set off at the next stop."
                ],
                "a": "We need to get off at the next stop.",
                "explanation": "'Get off' é desembarcar de veículos coletivos.",
                "type": "choice"
            },
            {
                "q": "No aeroporto, qual procedimento obrigatório você realiza no balcão da companhia aérea para despachar malas?",
                "options": [
                    "Fazer o check-in e pegar o bilhete de embarque",
                    "Fazer o check-out do voo",
                    "Desembarcar da aeronave",
                    "Deixar o carro no estacionamento"
                ],
                "a": "Fazer o check-in e pegar o bilhete de embarque",
                "explanation": "'Check in' é o registro de entrada no voo/hotel.",
                "type": "choice"
            },
            {
                "q": "Você vai passar perto do trabalho do seu irmão. Como se oferecer para levá-lo de carro e deixá-lo lá?",
                "options": [
                    "I can drop you off at your office.",
                    "I can check you in at your office.",
                    "I can get you off at your office.",
                    "I can set you off at your office."
                ],
                "a": "I can drop you off at your office.",
                "explanation": "'Drop off' é transportar e deixar alguém de carro.",
                "type": "choice"
            },
            {
                "q": "Sua família organizou uma viagem de carro e quer sair de madrugada para evitar o tráfego. Como expressar isso?",
                "options": [
                    "We will set off early in the morning.",
                    "We will check out early in the morning.",
                    "We will get off early in the morning.",
                    "We will drop off early in the morning."
                ],
                "a": "We will set off early in the morning.",
                "explanation": "'Set off' é dar início a uma viagem.",
                "type": "choice"
            },
            {
                "q": "Ao encerrar sua estada no hotel às 11h, devolver a chave e pagar a conta, você está efetuando:",
                "options": [
                    "O check-out formal do hotel",
                    "O check-in de chegada no hotel",
                    "O desembarque do traslado",
                    "A partida para a viagem"
                ],
                "a": "O check-out formal do hotel",
                "explanation": "'Check out' é encerrar a hospedagem.",
                "type": "choice"
            },
            {
                "q": "Como você incentiva seu amigo a embarcar logo no trem antes que as portas automáticas se fechem?",
                "options": [
                    "Get on the train quickly!",
                    "Get off the train quickly!",
                    "Check out the train quickly!",
                    "Drop off the train quickly!"
                ],
                "a": "Get on the train quickly!",
                "explanation": "'Get on' é entrar/subir em meios de transporte.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 8,
        "level": "A2",
        "title": "Module 8: Cleaning, Housework & Organizing",
        "description": "Phrasal Verbs de tarefas domésticas, limpeza profunda e organização da casa.",
        "items": [
            {
                "id": "pv_mod08_clean_up",
                "verb": "Clean up",
                "meaning": "Fazer uma limpeza geral / Limpar a sujeira",
                "breakdown": {
                    "root": "Clean (limpar)",
                    "particle": "Up (completamente)",
                    "type": "Separable"
                },
                "explanation": "Organizar e tirar a sujeira de um ambiente completamente.",
                "examples": [
                    {
                        "sentence": "Please clean up your room before going out.",
                        "translation": "Por favor, limpe seu quarto antes de sair."
                    },
                    {
                        "sentence": "We spent two hours cleaning up the kitchen after the party.",
                        "translation": "Passamos duas horas limpando a cozinha depois da festa."
                    }
                ]
            },
            {
                "id": "pv_mod08_throw_away",
                "verb": "Throw away / Throw out",
                "meaning": "Jogar fora no lixo",
                "breakdown": {
                    "root": "Throw (arremessar)",
                    "particle": "Away (para longe)",
                    "type": "Separable"
                },
                "explanation": "Descartar coisas velhas ou inúteis na lixeira.",
                "examples": [
                    {
                        "sentence": "Don't throw away those old boxes, I need them.",
                        "translation": "Não jogue fora aquelas caixas velhas, eu preciso delas."
                    },
                    {
                        "sentence": "He threw away his broken umbrella.",
                        "translation": "Ele jogou fora seu guarda-chuva quebrado."
                    }
                ]
            },
            {
                "id": "pv_mod08_clear_out",
                "verb": "Clear out",
                "meaning": "Esvaziar e desentulhar um espaço",
                "breakdown": {
                    "root": "Clear (limpar/desbloquear)",
                    "particle": "Out (para fora)",
                    "type": "Separable"
                },
                "explanation": "Remover coisas desnecessárias de uma gaveta, armário ou garagem.",
                "examples": [
                    {
                        "sentence": "I need to clear out my garage this weekend.",
                        "translation": "Preciso desentulhar minha garagem neste fim de semana."
                    },
                    {
                        "sentence": "She cleared out her old clothes to donate.",
                        "translation": "Ela esvaziou as roupas velhas do armário para doação."
                    }
                ]
            },
            {
                "id": "pv_mod08_put_away",
                "verb": "Put away",
                "meaning": "Guardar as coisas em seu devido lugar",
                "breakdown": {
                    "root": "Put (colocar)",
                    "particle": "Away (guardado)",
                    "type": "Separable"
                },
                "explanation": "Retornar objetos para seus lugares originais (ex: guardar compras/brinquedos).",
                "examples": [
                    {
                        "sentence": "Put away your toys after playing.",
                        "translation": "Guarde seus brinquedos depois de brincar."
                    },
                    {
                        "sentence": "She put away the groceries in the fridge.",
                        "translation": "Ela guardou as compras na geladeira."
                    }
                ]
            },
            {
                "id": "pv_mod08_tidy_up",
                "verb": "Tidy up",
                "meaning": "Arrumar / Dar uma ajeitada rápida",
                "breakdown": {
                    "root": "Tidy (ordenar)",
                    "particle": "Up (completamente)",
                    "type": "Separable"
                },
                "explanation": "Colocar as coisas em ordem rápida para deixar o ambiente limpo.",
                "examples": [
                    {
                        "sentence": "Let's tidy up the living room before the guests arrive.",
                        "translation": "Vamos dar uma ajeitada na sala antes que os convidados cheguem."
                    },
                    {
                        "sentence": "He tidied up his desk after finishing work.",
                        "translation": "Ele arrumou sua escrivaninha depois de terminar o trabalho."
                    }
                ]
            },
            {
                "id": "pv_mod08_wipe_off",
                "verb": "Wipe off",
                "meaning": "Limpar com pano (passar pano)",
                "breakdown": {
                    "root": "Wipe (esfregar)",
                    "particle": "Off (remover)",
                    "type": "Separable"
                },
                "explanation": "Passar pano umedecido para tirar poeira ou líquidos da mesa.",
                "examples": [
                    {
                        "sentence": "Wipe off the table after lunch, please.",
                        "translation": "Passe um pano na mesa depois do almoço, por favor."
                    },
                    {
                        "sentence": "She wiped off the dust from the TV screen.",
                        "translation": "Ela limpou a poeira da tela da TV com um pano."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "Don't ___ those old magazines! I'm planning to read them later.",
                "options": [
                    "throw away",
                    "put away",
                    "wipe off",
                    "clear out"
                ],
                "a": "throw away",
                "explanation": "'Throw away' significa descartar no lixo.",
                "type": "choice"
            },
            {
                "q": "After playing, the children were told to ___ all their toys into the box.",
                "options": [
                    "put away",
                    "clean up",
                    "wipe off",
                    "clear out"
                ],
                "a": "put away",
                "explanation": "'Put away' é guardar coisas no lugar correto.",
                "type": "choice"
            },
            {
                "q": "Please use a damp cloth to ___ the food spilled on the kitchen table.",
                "options": [
                    "wipe off",
                    "throw away",
                    "put away",
                    "tidy up"
                ],
                "a": "wipe off",
                "explanation": "'Wipe off' é passar pano para remover sujeira.",
                "type": "choice"
            },
            {
                "q": "We spent the entire afternoon trying to ___ the messy basement.",
                "options": [
                    "clear out",
                    "throw away",
                    "wipe off",
                    "put away"
                ],
                "a": "clear out",
                "explanation": "'Clear out' é esvaziar e desentulhar um espaço.",
                "type": "choice"
            },
            {
                "q": "Sua mesa de trabalho está repleta de papéis inútil e rascunhos velhos. O que fazer com o lixo?",
                "options": [
                    "I will throw away these old papers.",
                    "I will put away these old papers.",
                    "I will wipe off these old papers.",
                    "I will clear out these old papers."
                ],
                "a": "I will throw away these old papers.",
                "explanation": "'Throw away' é descartar no lixo.",
                "type": "choice"
            },
            {
                "q": "Após a brincadeira das crianças na sala, qual orientação dar para guardarem os brinquedos no baú?",
                "options": [
                    "Put away your toys in the box!",
                    "Throw away your toys in the box!",
                    "Wipe off your toys in the box!",
                    "Clear out your toys in the box!"
                ],
                "a": "Put away your toys in the box!",
                "explanation": "'Put away' é guardar objetos no seu devido lugar.",
                "type": "choice"
            },
            {
                "q": "O molho de tomate respingou na bancada da cozinha. Como pedir para passar um pano úmido?",
                "options": [
                    "Please wipe off the sauce from the counter.",
                    "Please throw away the sauce from the counter.",
                    "Please put away the sauce from the counter.",
                    "Please tidy up the sauce from the counter."
                ],
                "a": "Please wipe off the sauce from the counter.",
                "explanation": "'Wipe off' é limpar com pano.",
                "type": "choice"
            },
            {
                "q": "Sua garagem está entulhada de caixas velhas há anos. O que você planeja fazer no fim de semana?",
                "options": [
                    "Esvaziar e desentulhar a garagem (clear out)",
                    "Jogar a garagem inteira no lixo (throw away)",
                    "Passar pano no teto da garagem (wipe off)",
                    "Guardar a garagem no armário (put away)"
                ],
                "a": "Esvaziar e desentulhar a garagem (clear out)",
                "explanation": "'Clear out' é desentulhar um espaço acumulado.",
                "type": "choice"
            },
            {
                "q": "Antes dos convidados chegarem para o jantar, como pedir para dar uma arrumada rápida na sala de estar?",
                "options": [
                    "Let's tidy up the living room quickly.",
                    "Let's throw away the living room quickly.",
                    "Let's wipe off the living room quickly.",
                    "Let's clear out the living room quickly."
                ],
                "a": "Let's tidy up the living room quickly.",
                "explanation": "'Tidy up' é dar uma ajeitada rápida no ambiente.",
                "type": "choice"
            },
            {
                "q": "Após a festa de aniversário, os donos da casa passaram duas horas fazendo a limpeza geral. Como descrever isso?",
                "options": [
                    "They spent hours cleaning up the house.",
                    "They spent hours putting away the house.",
                    "They spent hours wiping off the house.",
                    "They spent hours throwing away the house."
                ],
                "a": "They spent hours cleaning up the house.",
                "explanation": "'Clean up' é fazer a limpeza completa do local.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 9,
        "level": "A2",
        "title": "Module 9: Family, Growth & Life Stages",
        "description": "Phrasal Verbs sobre fases da vida, criação de filhos, hereditariedade e amadurecimento.",
        "items": [
            {
                "id": "pv_mod09_grow_up",
                "verb": "Grow up",
                "meaning": "Crescer / Criar-se (passar da infância à fase adulta)",
                "breakdown": {
                    "root": "Grow (crescer)",
                    "particle": "Up (para cima)",
                    "type": "Inseparable"
                },
                "explanation": "O desenvolvimento físico e de maturidade da criança até ser adulto.",
                "examples": [
                    {
                        "sentence": "I grew up in a small town in Canada.",
                        "translation": "Eu cresci em uma pequena cidade no Canadá."
                    },
                    {
                        "sentence": "What do you want to be when you grow up?",
                        "translation": "O que você quer ser quando crescer?"
                    }
                ]
            },
            {
                "id": "pv_mod09_bring_up",
                "verb": "Bring up",
                "meaning": "Criar/Educar filhos ou Introduzir um assunto",
                "breakdown": {
                    "root": "Bring (trazer)",
                    "particle": "Up (à tona)",
                    "type": "Separable"
                },
                "explanation": "Maternar/paternar criando uma criança ou trazer um tema à tona na conversa.",
                "examples": [
                    {
                        "sentence": "She was brought up by her grandparents.",
                        "translation": "Ela foi criada pelos avós dela."
                    },
                    {
                        "sentence": "Don't bring up politics during dinner.",
                        "translation": "Não traga política à tona durante o jantar."
                    }
                ]
            },
            {
                "id": "pv_mod09_pass_away",
                "verb": "Pass away",
                "meaning": "Falecer (eufemismo carinhoso para morrer)",
                "breakdown": {
                    "root": "Pass (passar)",
                    "particle": "Away (para longe)",
                    "type": "Inseparable"
                },
                "explanation": "Maneira educada e empática de dizer que alguém morreu.",
                "examples": [
                    {
                        "sentence": "His grandfather passed away peacefully at age 90.",
                        "translation": "O avô dele faleceu pacificamente aos 90 anos."
                    },
                    {
                        "sentence": "I was sad to hear that her cat passed away.",
                        "translation": "Fiquei triste ao saber que o gato dela faleceu."
                    }
                ]
            },
            {
                "id": "pv_mod09_settle_down",
                "verb": "Settle down",
                "meaning": "Criar raízes / Estabilizar a vida (casar/comprar casa)",
                "breakdown": {
                    "root": "Settle (estabelecer)",
                    "particle": "Down (firmemente)",
                    "type": "Inseparable"
                },
                "explanation": "Decidir ter uma vida calma, casar-se e morar fixamente em um lugar.",
                "examples": [
                    {
                        "sentence": "After years of traveling, he decided to settle down in Spain.",
                        "translation": "Após anos viajando, ele decidiu criar raízes na Espanha."
                    },
                    {
                        "sentence": "They want to get married and settle down.",
                        "translation": "Eles querem se casar e constituir família."
                    }
                ]
            },
            {
                "id": "pv_mod09_take_after",
                "verb": "Take after",
                "meaning": "Puxar a alguém da família (aparência ou gênio)",
                "breakdown": {
                    "root": "Take (tomar)",
                    "particle": "After (semelhante a)",
                    "type": "Inseparable"
                },
                "explanation": "Ter traços de personalidade ou físicos semelhantes aos pais ou parentes.",
                "examples": [
                    {
                        "sentence": "She takes after her mother in temperament.",
                        "translation": "Ela puxou à mãe dela no gênio/temperamento."
                    },
                    {
                        "sentence": "He takes after his father; both love fishing.",
                        "translation": "Ele puxou ao pai; ambos adoram pescar."
                    }
                ]
            },
            {
                "id": "pv_mod09_look_back",
                "verb": "Look back (on)",
                "meaning": "Olhar para trás / Relembrar o passado",
                "breakdown": {
                    "root": "Look (olhar)",
                    "particle": "Back (para trás)",
                    "type": "Inseparable"
                },
                "explanation": "Pensar ou refletir sobre eventos passados da própria vida.",
                "examples": [
                    {
                        "sentence": "When I look back on my childhood, I feel happy.",
                        "translation": "Quando olho para trás e lembro da minha infância, me sinto feliz."
                    },
                    {
                        "sentence": "Don't look back with regret.",
                        "translation": "Não olhe para trás com arrependimento."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "I was born in Chicago, but I ___ in a quiet countryside town.",
                "options": [
                    "grew up",
                    "brought up",
                    "passed away",
                    "took after"
                ],
                "a": "grew up",
                "explanation": "'Grew up' (passado de grow up) é crescer e se criar durante a infância.",
                "type": "choice"
            },
            {
                "q": "She was loving and caring; she ___ four children all on her own.",
                "options": [
                    "brought up",
                    "settled down",
                    "passed away",
                    "grew up"
                ],
                "a": "brought up",
                "explanation": "'Bring up' (passado brought up) é criar/educar filhos.",
                "type": "choice"
            },
            {
                "q": "Everyone says he ___ his grandfather because they share the same sense of humor.",
                "options": [
                    "takes after",
                    "grows up",
                    "passes away",
                    "settles down"
                ],
                "a": "takes after",
                "explanation": "'Take after' é puxar traços de personalidade ou aparência de alguém da família.",
                "type": "choice"
            },
            {
                "q": "After years of traveling the world, he decided to buy a house and ___ in Boston.",
                "options": [
                    "settle down",
                    "grow up",
                    "pass away",
                    "take after"
                ],
                "a": "settle down",
                "explanation": "'Settle down' é estabilizar a vida e criar raízes num lugar.",
                "type": "choice"
            },
            {
                "q": "Você nasceu em uma metrópole, mas passou toda a infância e adolescência em uma cidadezinha do interior. Como dizer?",
                "options": [
                    "I grew up in a small town.",
                    "I brought up in a small town.",
                    "I passed away in a small town.",
                    "I took after in a small town."
                ],
                "a": "I grew up in a small town.",
                "explanation": "'Grow up' (passado grew up) é crescer e se criar durante a infância.",
                "type": "choice"
            },
            {
                "q": "Sua mãe trabalhou muito e conseguiu criar e educar três filhos sozinha com muito amor. Como descrever?",
                "options": [
                    "She brought up three children on her own.",
                    "She grew up three children on her own.",
                    "She passed away three children on her own.",
                    "She settled down three children on her own."
                ],
                "a": "She brought up three children on her own.",
                "explanation": "'Bring up' (passado brought up) é criar e educar filhos.",
                "type": "choice"
            },
            {
                "q": "Todos os seus parentes dizem que seu filho herdou o mesmo senso de humor do avô. Qual expressão usar?",
                "options": [
                    "He takes after his grandfather.",
                    "He grows up his grandfather.",
                    "He passes away his grandfather.",
                    "He settles down his grandfather."
                ],
                "a": "He takes after his grandfather.",
                "explanation": "'Take after' é puxar traços de alguém da família.",
                "type": "choice"
            },
            {
                "q": "Após anos viajando e trabalhando em vários países, seu colega decidiu comprar uma casa e constituir família. Ele resolveu:",
                "options": [
                    "Sossegar a vida e criar raízes num lugar (settle down)",
                    "Falecer pacificamente em casa (pass away)",
                    "Crescer novamente como criança (grow up)",
                    "Puxar a personalidade do pai (take after)"
                ],
                "a": "Sossegar a vida e criar raízes num lugar (settle down)",
                "explanation": "'Settle down' é estabilizar a vida e criar raízes num local.",
                "type": "choice"
            },
            {
                "q": "Como expressar com condolência e empatia que o avô de um amigo faleceu na noite anterior?",
                "options": [
                    "His grandfather passed away last night.",
                    "His grandfather grew up last night.",
                    "His grandfather settled down last night.",
                    "His grandfather brought up last night."
                ],
                "a": "His grandfather passed away last night.",
                "explanation": "'Pass away' é o eufemismo empático para falecer.",
                "type": "choice"
            },
            {
                "q": "Ao recordar com saudade os momentos da infância durante um encontro de família, você está:",
                "options": [
                    "Looking back on childhood memories",
                    "Bringing up childhood memories",
                    "Passing away childhood memories",
                    "Settling down childhood memories"
                ],
                "a": "Looking back on childhood memories",
                "explanation": "'Look back (on)' é recordar/relembrar o passado.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 10,
        "level": "A2",
        "title": "Module 10: Friendship, Dating & Social Dynamics",
        "description": "Phrasal Verbs de relacionamentos interpessoais, encontros amorosos e amizades.",
        "items": [
            {
                "id": "pv_mod10_get_along",
                "verb": "Get along with",
                "meaning": "Dar-se bem com alguém",
                "breakdown": {
                    "root": "Get (mover)",
                    "particle": "Along with (junto de)",
                    "type": "Inseparable"
                },
                "explanation": "Ter uma relação harmoniosa e sem brigas com outra pessoa.",
                "examples": [
                    {
                        "sentence": "I get along very well with my neighbors.",
                        "translation": "Eu me dou muito bem com meus vizinhos."
                    },
                    {
                        "sentence": "Do you get along with your sister?",
                        "translation": "Você se dá bem com a sua irmã?"
                    }
                ]
            },
            {
                "id": "pv_mod10_break_up",
                "verb": "Break up",
                "meaning": "Terminar um relacionamento amoroso",
                "breakdown": {
                    "root": "Break (quebrar)",
                    "particle": "Up (separação)",
                    "type": "Inseparable"
                },
                "explanation": "Encerrar um namoro ou casamento.",
                "examples": [
                    {
                        "sentence": "They broke up after dating for two years.",
                        "translation": "Eles terminaram depois de namorar por dois anos."
                    },
                    {
                        "sentence": "She is sad because her boyfriend broke up with her.",
                        "translation": "Ela está triste porque o namorado terminou com ela."
                    }
                ]
            },
            {
                "id": "pv_mod10_ask_out",
                "verb": "Ask out",
                "meaning": "Convidar alguém para um encontro amoroso",
                "breakdown": {
                    "root": "Ask (pedir/convidar)",
                    "particle": "Out (para sair)",
                    "type": "Separable"
                },
                "explanation": "Convidar romanticamente uma pessoa para jantar ou ir ao cinema.",
                "examples": [
                    {
                        "sentence": "He finally asked her out for coffee.",
                        "translation": "Ele finalmente a convidou para sair e tomar um café."
                    },
                    {
                        "sentence": "Are you going to ask him out?",
                        "translation": "Você vai convidá-lo para sair?"
                    }
                ]
            },
            {
                "id": "pv_mod10_hang_out",
                "verb": "Hang out",
                "meaning": "Passar tempo junto / Curtir com amigos",
                "breakdown": {
                    "root": "Hang (ficar)",
                    "particle": "Out (por aí)",
                    "type": "Inseparable"
                },
                "explanation": "Passar tempo de lazer de forma relaxada com amigos.",
                "examples": [
                    {
                        "sentence": "We usually hang out at the mall on weekends.",
                        "translation": "Nós geralmente passamos o tempo juntos no shopping nos fins de semana."
                    },
                    {
                        "sentence": "Come over, let's hang out!",
                        "translation": "Venha cá, vamos curtir um tempo juntos!"
                    }
                ]
            },
            {
                "id": "pv_mod10_make_up",
                "verb": "Make up",
                "meaning": "Fazer as pazes após uma briga",
                "breakdown": {
                    "root": "Make (fazer)",
                    "particle": "Up (restabelecer)",
                    "type": "Inseparable"
                },
                "explanation": "Reconciliar-se e perdoar o outro após um desentendimento.",
                "examples": [
                    {
                        "sentence": "They had an argument, but they quickly made up.",
                        "translation": "Eles tiveram uma discussão, mas logo fizeram as pazes."
                    },
                    {
                        "sentence": "Kiss and make up!",
                        "translation": "Deem um beijo e façam as pazes!"
                    }
                ]
            },
            {
                "id": "pv_mod10_run_into",
                "verb": "Run into",
                "meaning": "Encontrar alguém por acaso na rua",
                "breakdown": {
                    "root": "Run (correr)",
                    "particle": "Into (de encontro a)",
                    "type": "Inseparable"
                },
                "explanation": "Esbarrar não planejado com um conhecido em local público.",
                "examples": [
                    {
                        "sentence": "I ran into an old classmate at the supermarket.",
                        "translation": "Esbarrei com um antigo colega de classe no supermercado."
                    },
                    {
                        "sentence": "Guess who I ran into today!",
                        "translation": "Adivinhe quem eu encontrei por acaso hoje!"
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "I have a great relationship with my sister; we ___ really well.",
                "options": [
                    "get along",
                    "break up",
                    "run into",
                    "make up"
                ],
                "a": "get along",
                "explanation": "'Get along (with)' significa dar-se bem com alguém.",
                "type": "choice"
            },
            {
                "q": "After five years of dating, they decided to ___ due to different life goals.",
                "options": [
                    "break up",
                    "get along",
                    "ask out",
                    "make up"
                ],
                "a": "break up",
                "explanation": "'Break up' é terminar um relacionamento amoroso.",
                "type": "choice"
            },
            {
                "q": "He was nervous, but he finally gathered the courage to ___ her ___ to dinner.",
                "options": [
                    "ask / out",
                    "break / up",
                    "run / into",
                    "make / up"
                ],
                "a": "ask / out",
                "explanation": "'Ask out' é convidar alguém para sair num encontro.",
                "type": "choice"
            },
            {
                "q": "On weekends, teenagers love to ___ at the local shopping mall.",
                "options": [
                    "hang out",
                    "break up",
                    "run into",
                    "ask out"
                ],
                "a": "hang out",
                "explanation": "'Hang out' significa passar tempo junto/curtir com amigos.",
                "type": "choice"
            },
            {
                "q": "Você e seu novo colega de quarto têm excelente sintonia e nunca brigam. Como descrever essa relação?",
                "options": [
                    "We get along really well.",
                    "We break up really well.",
                    "We run into really well.",
                    "We ask out really well."
                ],
                "a": "We get along really well.",
                "explanation": "'Get along (with)' é ter boa convivência com alguém.",
                "type": "choice"
            },
            {
                "q": "Após cinco anos de namoro, o casal percebeu que tinha objetivos opostos e decidiu terminar. O que fizeram?",
                "options": [
                    "They decided to break up.",
                    "They decided to get along.",
                    "They decided to ask out.",
                    "They decided to make up."
                ],
                "a": "They decided to break up.",
                "explanation": "'Break up' é encerrar um relacionamento amoroso.",
                "type": "choice"
            },
            {
                "q": "Seu amigo criou coragem e convidou a colega de trabalho para jantar num restaurante romântico. Ele resolveu:",
                "options": [
                    "Ask her out for dinner",
                    "Break her up for dinner",
                    "Run into her for dinner",
                    "Make her up for dinner"
                ],
                "a": "Ask her out for dinner",
                "explanation": "'Ask out' é convidar alguém para sair num encontro.",
                "type": "choice"
            },
            {
                "q": "Nos fins de semana, adolescentes gostam de se reunir no shopping para passear e conversar. Qual o termo usado?",
                "options": [
                    "They love to hang out at the mall.",
                    "They love to break up at the mall.",
                    "They love to run into at the mall.",
                    "They love to ask out at the mall."
                ],
                "a": "They love to hang out at the mall.",
                "explanation": "'Hang out' é passar tempo de lazer junto com amigos.",
                "type": "choice"
            },
            {
                "q": "Você estava no supermercado e encontrou por acaso um antigo colega de escola. Como contar a novidade?",
                "options": [
                    "I ran into an old friend at the supermarket.",
                    "I broke up an old friend at the supermarket.",
                    "I asked out an old friend at the supermarket.",
                    "I made up an old friend at the supermarket."
                ],
                "a": "I ran into an old friend at the supermarket.",
                "explanation": "'Run into' é cruzar/encontrar alguém inesperadamente.",
                "type": "choice"
            },
            {
                "q": "Após uma pequena discussão, o casal conversou, pediu desculpas e fez as pazes. O que eles fizeram?",
                "options": [
                    "They decided to make up.",
                    "They decided to break up.",
                    "They decided to run into.",
                    "They decided to hang out."
                ],
                "a": "They decided to make up.",
                "explanation": "'Make up' é fazer as pazes após um desentendimento.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 11,
        "level": "A2",
        "title": "Module 11: Health, Physical States & Fitness",
        "description": "Phrasal Verbs para sintomas corporais, atividades físicas e estados de saúde.",
        "items": [
            {
                "id": "pv_mod11_pass_out",
                "verb": "Pass out",
                "meaning": "Desmaiar (perder a consciência)",
                "breakdown": {
                    "root": "Pass (passar)",
                    "particle": "Out (apagar)",
                    "type": "Inseparable"
                },
                "explanation": "Ficar inconsciente de forma repentina por calor, cansaço ou dor.",
                "examples": [
                    {
                        "sentence": "It was so hot in the room that she passed out.",
                        "translation": "Estava tão quente na sala que ela desmaiou."
                    },
                    {
                        "sentence": "He drank too much alcohol and passed out.",
                        "translation": "Ele bebeu muito álcool e apagou/desmaiou."
                    }
                ]
            },
            {
                "id": "pv_mod11_throw_up",
                "verb": "Throw up",
                "meaning": "Vomitar",
                "breakdown": {
                    "root": "Throw (lançar)",
                    "particle": "Up (para cima)",
                    "type": "Inseparable"
                },
                "explanation": "Expulsar o conteúdo do estômago pela boca devido a indisposição.",
                "examples": [
                    {
                        "sentence": "The baby threw up on my shirt.",
                        "translation": "O bebê vomitou na minha camisa."
                    },
                    {
                        "sentence": "I feel nauseous, I think I am going to throw up.",
                        "translation": "Estou enjoado, acho que vou vomitar."
                    }
                ]
            },
            {
                "id": "pv_mod11_work_out",
                "verb": "Work out",
                "meaning": "Fazer exercícios físicos / Treinar na academia",
                "breakdown": {
                    "root": "Work (trabalhar)",
                    "particle": "Out (para fora)",
                    "type": "Inseparable"
                },
                "explanation": "Praticar musculação ou corrida para manter o corpo em boa forma.",
                "examples": [
                    {
                        "sentence": "I work out at the gym three times a week.",
                        "translation": "Eu treinos na academia três vezes por semana."
                    },
                    {
                        "sentence": "She works out every morning before breakfast.",
                        "translation": "Ela faz exercícios todas as manhãs antes do café."
                    }
                ]
            },
            {
                "id": "pv_mod11_warm_up_fit",
                "verb": "Warm up",
                "meaning": "Fazer aquecimento físico antes de um esporte",
                "breakdown": {
                    "root": "Warm (aquecer)",
                    "particle": "Up (o corpo)",
                    "type": "Inseparable"
                },
                "explanation": "Exercitar-se levemente para preparar os músculos para o treino.",
                "examples": [
                    {
                        "sentence": "Always warm up before running to avoid injuries.",
                        "translation": "Sempre faça aquecimento antes de correr para evitar lesões."
                    },
                    {
                        "sentence": "The players are warming up on the field.",
                        "translation": "Os jogadores estão se aquecendo no campo."
                    }
                ]
            },
            {
                "id": "pv_mod11_ease_off",
                "verb": "Ease off / Ease up",
                "meaning": "Aliviar a dor / Diminuir o ritmo de intensidade",
                "breakdown": {
                    "root": "Ease (aliviar)",
                    "particle": "Off (para baixo)",
                    "type": "Inseparable"
                },
                "explanation": "Quando a dor diminui de intensidade ou a chuva amaina.",
                "examples": [
                    {
                        "sentence": "Take this medicine and the pain will ease off.",
                        "translation": "Tome este remédio e a dor vai aliviar."
                    },
                    {
                        "sentence": "The rain started to ease off around noon.",
                        "translation": "A chuva começou a amainar por volta do meio-dia."
                    }
                ]
            },
            {
                "id": "pv_mod11_heal_up",
                "verb": "Heal up",
                "meaning": "Cicatrizar / Curar-se de uma ferida",
                "breakdown": {
                    "root": "Heal (curar)",
                    "particle": "Up (completamente)",
                    "type": "Inseparable"
                },
                "explanation": "Processo pelo qual um corte ou machucado se regenera por completo.",
                "examples": [
                    {
                        "sentence": "The cut on my knee is healing up nicely.",
                        "translation": "O corte no meu joelho está cicatrizando muito bem."
                    },
                    {
                        "sentence": "It takes time for broken bones to heal up.",
                        "translation": "Leva tempo para ossos quebrados se curarem por completo."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "It was so hot in the crowded room that one student lost consciousness and ___.",
                "options": [
                    "passed out",
                    "worked out",
                    "warmed up",
                    "healed up"
                ],
                "a": "passed out",
                "explanation": "'Pass out' significa desmaiar / perder os sentidos.",
                "type": "choice"
            },
            {
                "q": "I go to the gym four times a week to ___ and stay fit.",
                "options": [
                    "work out",
                    "pass out",
                    "throw up",
                    "ease off"
                ],
                "a": "work out",
                "explanation": "'Work out' é fazer exercícios físicos / malhar.",
                "type": "choice"
            },
            {
                "q": "Always remember to ___ your muscles before starting intense exercise.",
                "options": [
                    "warm up",
                    "pass out",
                    "throw up",
                    "heal up"
                ],
                "a": "warm up",
                "explanation": "'Warm up' significa fazer aquecimento físico.",
                "type": "choice"
            },
            {
                "q": "After resting for a week, the cut on his leg began to ___ nicely.",
                "options": [
                    "heal up",
                    "pass out",
                    "throw up",
                    "work out"
                ],
                "a": "heal up",
                "explanation": "'Heal up' significa cicatrizar / curar totalmente.",
                "type": "choice"
            },
            {
                "q": "A sala estava abafada e sem ventilação, fazendo com que uma aluna perdesse a consciência. O que aconteceu?",
                "options": [
                    "She passed out due to the heat.",
                    "She worked out due to the heat.",
                    "She warmed up due to the heat.",
                    "She healed up due to the heat."
                ],
                "a": "She passed out due to the heat.",
                "explanation": "'Pass out' significa desmaiar / perder a consciência.",
                "type": "choice"
            },
            {
                "q": "Você frequenta a academia quatro vezes por semana para praticar musculação e manter o corpo ativo. O que você faz?",
                "options": [
                    "I work out at the gym regularly.",
                    "I pass out at the gym regularly.",
                    "I throw up at the gym regularly.",
                    "I ease off at the gym regularly."
                ],
                "a": "I work out at the gym regularly.",
                "explanation": "'Work out' é fazer exercícios físicos / malhar.",
                "type": "choice"
            },
            {
                "q": "Antes de iniciar uma corrida intensa, qual a orientação médica indispensável para evitar distensões?",
                "options": [
                    "Fazer aquecimento nos músculos (warm up)",
                    "Desmaiar no chão de cansaço (pass out)",
                    "Vomitar antes de começar (throw up)",
                    "Cicatrizar uma ferida antiga (heal up)"
                ],
                "a": "Fazer aquecimento nos músculos (warm up)",
                "explanation": "'Warm up' é aquecer a musculatura.",
                "type": "choice"
            },
            {
                "q": "O atleta sentiu uma fisgada no joelho e o treinador ordenou diminuir o ritmo do treino. Qual a ordem dada?",
                "options": [
                    "Ease off on the training intensity",
                    "Pass out on the training intensity",
                    "Throw up on the training intensity",
                    "Heal up on the training intensity"
                ],
                "a": "Ease off on the training intensity",
                "explanation": "'Ease off / ease up' é reduzir o ritmo ou intensidade.",
                "type": "choice"
            },
            {
                "q": "Seu amigo comeu algo estragado no almoço e precisou ir ao banheiro vomitar. Como relatar a situação?",
                "options": [
                    "He felt sick and threw up.",
                    "He felt sick and worked out.",
                    "He felt sick and warmed up.",
                    "He felt sick and healed up."
                ],
                "a": "He felt sick and threw up.",
                "explanation": "'Throw up' significa vomitar.",
                "type": "choice"
            },
            {
                "q": "Após sofrer um corte no braço e tratar o local por uma semana, a ferida começou a cicatrizar. Você diz:",
                "options": [
                    "The wound is healing up nicely.",
                    "The wound is working out nicely.",
                    "The wound is passing out nicely.",
                    "The wound is easing off nicely."
                ],
                "a": "The wound is healing up nicely.",
                "explanation": "'Heal up' é cicatrizar totalmente uma lesão.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 12,
        "level": "A2",
        "title": "Module 12: Information, Learning & Studies",
        "description": "Phrasal Verbs para leitura, anotações de estudo e busca de informações.",
        "items": [
            {
                "id": "pv_mod12_look_up",
                "verb": "Look up",
                "meaning": "Procurar uma informação (no dicionário/Google)",
                "breakdown": {
                    "root": "Look (olhar)",
                    "particle": "Up (busca de dados)",
                    "type": "Separable"
                },
                "explanation": "Buscar o significado de uma palavra ou dado em uma fonte de referência.",
                "examples": [
                    {
                        "sentence": "If you don't know the word, look it up in the dictionary.",
                        "translation": "Se não souber a palavra, procure-a no dicionário."
                    },
                    {
                        "sentence": "I looked up his address online.",
                        "translation": "Procurei o endereço dele na internet."
                    }
                ]
            },
            {
                "id": "pv_mod12_read_over",
                "verb": "Read over / Read through",
                "meaning": "Ler atentamente do início ao fim para revisar",
                "breakdown": {
                    "root": "Read (ler)",
                    "particle": "Over (por inteiro)",
                    "type": "Separable"
                },
                "explanation": "Examinar um documento ou texto para conferir se há erros.",
                "examples": [
                    {
                        "sentence": "Read over your essay before submitting it.",
                        "translation": "Leia sua redação atentamente antes de enviá-la."
                    },
                    {
                        "sentence": "She read through the agreement carefully.",
                        "translation": "Ela leu o contrato de ponta a ponta com cuidado."
                    }
                ]
            },
            {
                "id": "pv_mod12_note_down",
                "verb": "Note down / Take down",
                "meaning": "Anotar rapidamente no papel",
                "breakdown": {
                    "root": "Note (notar)",
                    "particle": "Down (escrever no papel)",
                    "type": "Separable"
                },
                "explanation": "Registrar por escrito pontos importantes durante uma aula ou palestra.",
                "examples": [
                    {
                        "sentence": "Note down the homework assignment on your notebook.",
                        "translation": "Anote o dever de casa no seu caderno."
                    },
                    {
                        "sentence": "He noted down her phone number.",
                        "translation": "Ele anotou o número de telefone dela."
                    }
                ]
            },
            {
                "id": "pv_mod12_catch_up",
                "verb": "Catch up (with/on)",
                "meaning": "Pôr a matéria em dia / Colocar o papo em dia",
                "breakdown": {
                    "root": "Catch (pegar)",
                    "particle": "Up (o nível)",
                    "type": "Inseparable"
                },
                "explanation": "Alcançar o mesmo nível de estudos de outros colegas ou atualizar-se.",
                "examples": [
                    {
                        "sentence": "I missed three classes, so I need to catch up.",
                        "translation": "Faltei a três aulas, então preciso colocar a matéria em dia."
                    },
                    {
                        "sentence": "Let's meet for coffee to catch up!",
                        "translation": "Vamos nos encontrar para tomar um café e colocar o papo em dia!"
                    }
                ]
            },
            {
                "id": "pv_mod12_read_out",
                "verb": "Read out",
                "meaning": "Ler em voz alta para outros ouvir",
                "breakdown": {
                    "root": "Read (ler)",
                    "particle": "Out (para fora)",
                    "type": "Separable"
                },
                "explanation": "Pronunciar um texto em voz alta diante de uma sala ou público.",
                "examples": [
                    {
                        "sentence": "The teacher asked Maria to read out the sentence.",
                        "translation": "O professor pediu à Maria para ler a frase em voz alta."
                    },
                    {
                        "sentence": "He read out the contest winners' names.",
                        "translation": "Ele leu em voz alta os nomes dos vencedores do concurso."
                    }
                ]
            },
            {
                "id": "pv_mod12_fill_out",
                "verb": "Fill out / Fill in",
                "meaning": "Preencher um formulário ou ficha",
                "breakdown": {
                    "root": "Fill (encher)",
                    "particle": "Out (completamente)",
                    "type": "Separable"
                },
                "explanation": "Completar os campos vazios de um documento impresso ou digital.",
                "examples": [
                    {
                        "sentence": "Please fill out this registration form.",
                        "translation": "Por favor, preencha esta ficha de inscrição."
                    },
                    {
                        "sentence": "You must fill in your name and email.",
                        "translation": "Você deve preencher seu nome e e-mail."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "If you don't know the meaning of a word, you should ___ it in the dictionary.",
                "options": [
                    "look up",
                    "fill out",
                    "read out",
                    "note down"
                ],
                "a": "look up",
                "explanation": "'Look up' significa pesquisar uma informação em uma fonte/dicionário.",
                "type": "choice"
            },
            {
                "q": "Please ___ this application form with your full name and address.",
                "options": [
                    "fill out",
                    "read out",
                    "look up",
                    "catch up"
                ],
                "a": "fill out",
                "explanation": "'Fill out' significa preencher os campos de um formulário.",
                "type": "choice"
            },
            {
                "q": "The secretary began to ___ the key points of the presentation on her pad.",
                "options": [
                    "note down",
                    "read out",
                    "fill out",
                    "look up"
                ],
                "a": "note down",
                "explanation": "'Note down' é anota/registrar rapidamente no papel.",
                "type": "choice"
            },
            {
                "q": "I missed classes last week, so I need to study hard to ___ with my classmates.",
                "options": [
                    "catch up",
                    "fill out",
                    "read out",
                    "look up"
                ],
                "a": "catch up",
                "explanation": "'Catch up' significa pôr a matéria/ritmo em dia.",
                "type": "choice"
            },
            {
                "q": "Ao encontrar uma palavra desconhecida em um texto em inglês, qual a recomendação para descobrir o significado?",
                "options": [
                    "Look it up in a dictionary",
                    "Fill it out in a dictionary",
                    "Read it out in a dictionary",
                    "Catch it up in a dictionary"
                ],
                "a": "Look it up in a dictionary",
                "explanation": "'Look up' é buscar uma informação numa referência/dicionário.",
                "type": "choice"
            },
            {
                "q": "Na recepção do evento, você recebe um cadastro em papel e a atendente pede para preencher seus dados. O que ela diz?",
                "options": [
                    "Please fill out this form.",
                    "Please look up this form.",
                    "Please read out this form.",
                    "Please catch up this form."
                ],
                "a": "Please fill out this form.",
                "explanation": "'Fill out' é preencher campos de um documento.",
                "type": "choice"
            },
            {
                "q": "Durante uma palestra importante, você pega a caneta para anotas as ideias principais no bloco. Você vai:",
                "options": [
                    "Note down the key ideas",
                    "Read out the key ideas",
                    "Fill out the key ideas",
                    "Look up the key ideas"
                ],
                "a": "Note down the key ideas",
                "explanation": "'Note down / take down' é tomar nota por escrito.",
                "type": "choice"
            },
            {
                "q": "Você esteve doente e perdeu uma semana de aulas na faculdade. O que precisa fazer agora?",
                "options": [
                    "Estudar bastante para colocar a matéria em dia (catch up)",
                    "Ler a prova em voz alta para a turma (read out)",
                    "Preencher a ficha da biblioteca (fill out)",
                    "Procurar uma palavra no dicionário (look up)"
                ],
                "a": "Estudar bastante para colocar a matéria em dia (catch up)",
                "explanation": "'Catch up' é atualizar-se e pôr o ritmo em dia.",
                "type": "choice"
            },
            {
                "q": "O advogado pediu para revisar o contrato cuidadosamente do início ao fim antes de assinar. Ele vai:",
                "options": [
                    "Read over the contract carefully",
                    "Look up the contract carefully",
                    "Fill out the contract carefully",
                    "Read out the contract carefully"
                ],
                "a": "Read over the contract carefully",
                "explanation": "'Read over / read through' é ler e examinar atentamente.",
                "type": "choice"
            },
            {
                "q": "O professor pede a um aluno para ler o primeiro parágrafo do livro em voz alta para a sala. Qual o comando?",
                "options": [
                    "Read out the first paragraph!",
                    "Look up the first paragraph!",
                    "Fill out the first paragraph!",
                    "Note down the first paragraph!"
                ],
                "a": "Read out the first paragraph!",
                "explanation": "'Read out' é fazer a leitura em voz alta.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 13,
        "level": "B1",
        "title": "Module 13: Problem Solving & Decision Making",
        "description": "Phrasal Verbs para resolução de desafios, análise de opções e tomadas de decisão.",
        "items": [
            {
                "id": "pv_mod13_figure_out",
                "verb": "Figure out",
                "meaning": "Compreender / Encontrar a solução de um problema",
                "breakdown": {
                    "root": "Figure (calcular/raciocinar)",
                    "particle": "Out (para fora)",
                    "type": "Separable"
                },
                "explanation": "Usar o raciocínio mental até entender a resposta de uma questão difícil.",
                "examples": [
                    {
                        "sentence": "I can't figure out how to solve this math equation.",
                        "translation": "Não consigo descobrir/entender como resolver esta equação de matemática."
                    },
                    {
                        "sentence": "They finally figured out what was wrong with the machine.",
                        "translation": "Eles finalmente descobriram o que havia de errado com a máquina."
                    }
                ]
            },
            {
                "id": "pv_mod13_work_out_prob",
                "verb": "Work out",
                "meaning": "Resolver com sucesso / Dar certo um plano",
                "breakdown": {
                    "root": "Work (trabalhar)",
                    "particle": "Out (resultado)",
                    "type": "Separable"
                },
                "explanation": "Chegar a uma solução negociada ou dar um bom resultado final.",
                "examples": [
                    {
                        "sentence": "Don't worry, everything will work out in the end.",
                        "translation": "Não se preocupe, tudo vai dar certo no final."
                    },
                    {
                        "sentence": "We need to work out a new strategy for the project.",
                        "translation": "Precisamos elaborar/construir uma nova estratégia para o projeto."
                    }
                ]
            },
            {
                "id": "pv_mod13_find_out",
                "verb": "Find out",
                "meaning": "Descobrir uma informação novidade",
                "breakdown": {
                    "root": "Find (achar)",
                    "particle": "Out (à tona)",
                    "type": "Separable"
                },
                "explanation": "Tomar conhecimento de um fato novo que você não sabia antes.",
                "examples": [
                    {
                        "sentence": "She found out that her friend was moving away.",
                        "translation": "Ela descobriu que o amigo dela estava se mudando."
                    },
                    {
                        "sentence": "Call the school to find out the exam date.",
                        "translation": "Ligue para a escola para saber/descobrir a data da prova."
                    }
                ]
            },
            {
                "id": "pv_mod13_sort_out",
                "verb": "Sort out",
                "meaning": "Organizar / Resolver uma confusão",
                "breakdown": {
                    "root": "Sort (ordenar)",
                    "particle": "Out (esclarecer)",
                    "type": "Separable"
                },
                "explanation": "Organizar um mal-entendido ou colocar em ordem papéis bagunçados.",
                "examples": [
                    {
                        "sentence": "We have to sort out these billing issues today.",
                        "translation": "Nós temos que resolver estes problemas de cobrança hoje."
                    },
                    {
                        "sentence": "Let me sort out my documents first.",
                        "translation": "Deixe-me organizar meus documentos primeiro."
                    }
                ]
            },
            {
                "id": "pv_mod13_deal_with",
                "verb": "Deal with",
                "meaning": "Lidar com um problema ou pessoa difícil",
                "breakdown": {
                    "root": "Deal (negociar)",
                    "particle": "With (com)",
                    "type": "Inseparable"
                },
                "explanation": "Assumir a responsabilidade para gerenciar ou resolver uma complicação.",
                "examples": [
                    {
                        "sentence": "As a manager, she deals with customer complaints daily.",
                        "translation": "Como gerente, ela lida com reclamações de clientes diariamente."
                    },
                    {
                        "sentence": "I don't want to deal with that hassle right now.",
                        "translation": "Não quero lidar com essa complicação agora."
                    }
                ]
            },
            {
                "id": "pv_mod13_rule_out",
                "verb": "Rule out",
                "meaning": "Descartar uma possibilidade",
                "breakdown": {
                    "root": "Rule (regrar)",
                    "particle": "Out (fora)",
                    "type": "Separable"
                },
                "explanation": "Excluir uma opção por ser inviável ou impossível.",
                "examples": [
                    {
                        "sentence": "The doctor ruled out any heart problems after the tests.",
                        "translation": "O médico descartou quaisquer problemas cardíacos após os exames."
                    },
                    {
                        "sentence": "We cannot rule out the possibility of a delay.",
                        "translation": "Nós não podemos descartar a possibilidade de um atraso."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "It took me hours of troubleshooting to ___ why the software was crashing.",
                "options": [
                    "figure out",
                    "rule out",
                    "deal with",
                    "sort out"
                ],
                "a": "figure out",
                "explanation": "'Figure out' significa compreender ou resolver um problema lógico.",
                "type": "choice"
            },
            {
                "q": "Don't worry about the scheduling conflict; our team will ___ it ___ quickly.",
                "options": [
                    "sort / out",
                    "rule / out",
                    "find / out",
                    "deal / with"
                ],
                "a": "sort / out",
                "explanation": "'Sort out' é organizar e resolver uma complicação.",
                "type": "choice"
            },
            {
                "q": "As a manager, you have to ___ difficult customer complaints every day.",
                "options": [
                    "deal with",
                    "figure out",
                    "rule out",
                    "work out"
                ],
                "a": "deal with",
                "explanation": "'Deal with' significa lidar com ou tratar de um assunto/problema.",
                "type": "choice"
            },
            {
                "q": "The doctor ran a few tests to ___ any underlying viral infections.",
                "options": [
                    "rule out",
                    "figure out",
                    "deal with",
                    "sort out"
                ],
                "a": "rule out",
                "explanation": "'Rule out' significa descartar uma hipótese ou possibilidade.",
                "type": "choice"
            },
            {
                "q": "Após horas analisando os relatórios de erro, o programador conseguiu compreender a causa do problema. O que ele fez?",
                "options": [
                    "He figured out what caused the error.",
                    "He ruled out what caused the error.",
                    "He dealt with what caused the error.",
                    "He sorted out what caused the error."
                ],
                "a": "He figured out what caused the error.",
                "explanation": "'Figure out' é compreender ou decifrar um enigma/problema.",
                "type": "choice"
            },
            {
                "q": "Como gerente de atendimento, sua principal atribuição diária é tratar com clientes insatisfeitos. Você precisa:",
                "options": [
                    "Deal with demanding clients",
                    "Rule out demanding clients",
                    "Find out demanding clients",
                    "Work out demanding clients"
                ],
                "a": "Deal with demanding clients",
                "explanation": "'Deal with' é lidar com ou tratar de algo/alguém.",
                "type": "choice"
            },
            {
                "q": "Após exames detalhados, o médico descartou completamente a suspeita de uma fratura óssea. Como dizer?",
                "options": [
                    "The doctor ruled out a bone fracture.",
                    "The doctor figured out a bone fracture.",
                    "The doctor dealt with a bone fracture.",
                    "The doctor sorted out a bone fracture."
                ],
                "a": "The doctor ruled out a bone fracture.",
                "explanation": "'Rule out' é eliminar ou descartar uma possibilidade.",
                "type": "choice"
            },
            {
                "q": "Houve um mal-entendido na entrega de mercadorias, mas a equipe conseguiu resolver a complicação. Eles conseguiram:",
                "options": [
                    "Sort out the delivery issue",
                    "Rule out the delivery issue",
                    "Find out the delivery issue",
                    "Deal with the delivery issue"
                ],
                "a": "Sort out the delivery issue",
                "explanation": "'Sort out' é organizar e resolver uma pendência.",
                "type": "choice"
            },
            {
                "q": "Como perguntar se seu colega conseguiu descobrir onde será realizada a reunião de amanhã?",
                "options": [
                    "Did you find out where the meeting is?",
                    "Did you rule out where the meeting is?",
                    "Did you deal with where the meeting is?",
                    "Did you sort out where the meeting is?"
                ],
                "a": "Did you find out where the meeting is?",
                "explanation": "'Find out' é descobrir uma informação.",
                "type": "choice"
            },
            {
                "q": "Apesar das divergências iniciais no projeto, o plano funcionou e deu tudo certo no final. Como expressar?",
                "options": [
                    "Everything worked out well in the end.",
                    "Everything ruled out well in the end.",
                    "Everything dealt with well in the end.",
                    "Everything sorted out well in the end."
                ],
                "a": "Everything worked out well in the end.",
                "explanation": "'Work out' é dar certo ou chegar a um bom resultado.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 14,
        "level": "B1",
        "title": "Module 14: Events, Changes & Occurrences",
        "description": "Phrasal Verbs para falar de desfechos inesperados, surgimento e mudanças de acontecimentos.",
        "items": [
            {
                "id": "pv_mod14_turn_out",
                "verb": "Turn out",
                "meaning": "Acontecer que / Resultar no final",
                "breakdown": {
                    "root": "Turn (mudar)",
                    "particle": "Out (resultado)",
                    "type": "Inseparable"
                },
                "explanation": "Ter um desfecho ou revelar-se de determinada maneira no final.",
                "examples": [
                    {
                        "sentence": "The party turned out to be amazing despite the rain.",
                        "translation": "A festa acabou sendo incrível apesar da chuva."
                    },
                    {
                        "sentence": "It turned out that he was right all along.",
                        "translation": "Acontece que ele estava certo o tempo todo."
                    }
                ]
            },
            {
                "id": "pv_mod14_come_about",
                "verb": "Come about",
                "meaning": "Acontecer / Ocorrer (como resultado de algo)",
                "breakdown": {
                    "root": "Come (vir)",
                    "particle": "About (ao redor)",
                    "type": "Inseparable"
                },
                "explanation": "Como um evento ou mudança veio a existir ou acontecer.",
                "examples": [
                    {
                        "sentence": "How did this misunderstanding come about?",
                        "translation": "Como esse mal-entendido veio a acontecer?"
                    },
                    {
                        "sentence": "Major economic changes came about after the war.",
                        "translation": "Grandes mudanças econômicas ocorreram após a guerra."
                    }
                ]
            },
            {
                "id": "pv_mod14_show_up",
                "verb": "Show up / Turn up",
                "meaning": "Aparecer / Chegar a um compromisso",
                "breakdown": {
                    "root": "Show (mostrar)",
                    "particle": "Up (surgir)",
                    "type": "Inseparable"
                },
                "explanation": "Chegar a um evento, festa ou reunião onde era esperado.",
                "examples": [
                    {
                        "sentence": "He showed up two hours late for the interview.",
                        "translation": "Ele apareceu/chegou duas horas atrasado para a entrevista."
                    },
                    {
                        "sentence": "Only five people showed up for the meeting.",
                        "translation": "Apenas cinco pessoas compareceram à reunião."
                    }
                ]
            },
            {
                "id": "pv_mod14_end_up",
                "verb": "End up",
                "meaning": "Acabar por (fazer algo ou ir parar em lugar não planejado)",
                "breakdown": {
                    "root": "End (fim)",
                    "particle": "Up (resultado)",
                    "type": "Inseparable"
                },
                "explanation": "Terminar em uma situação ou local que não estava nos planos iniciais.",
                "examples": [
                    {
                        "sentence": "We got lost and ended up in a different city.",
                        "translation": "Nós nos perdemos e acabamos em uma cidade diferente."
                    },
                    {
                        "sentence": "If you don't study, you might end up failing.",
                        "translation": "Se não estudar, você pode acabar reprovando."
                    }
                ]
            },
            {
                "id": "pv_mod14_wind_up",
                "verb": "Wind up",
                "meaning": "Encerrar um evento ou terminar em certo estado",
                "breakdown": {
                    "root": "Wind (dar corda)",
                    "particle": "Up (conclusão)",
                    "type": "Inseparable"
                },
                "explanation": "Finalizar uma reunião ou acabar caindo em uma situação desagradável.",
                "examples": [
                    {
                        "sentence": "Let's wind up this meeting by 5 PM.",
                        "translation": "Vamos encerrar esta reunião até as 17h."
                    },
                    {
                        "sentence": "He wound up paying the entire bill himself.",
                        "translation": "Ele acabou tendo que pagar a conta inteira sozinho."
                    }
                ]
            },
            {
                "id": "pv_mod14_turn_up_lost",
                "verb": "Turn up",
                "meaning": "Aparecer de repente (algo perdido)",
                "breakdown": {
                    "root": "Turn (virar)",
                    "particle": "Up (surgir)",
                    "type": "Inseparable"
                },
                "explanation": "Quando um objeto sumido é reencontrado inesperadamente.",
                "examples": [
                    {
                        "sentence": "My lost keys turned up under the couch.",
                        "translation": "Minhas chaves perdidas apareceram debaixo do sofá."
                    },
                    {
                        "sentence": "Don't worry, I'm sure your passport will turn up.",
                        "translation": "Não se preocupe, tenho certeza de que seu passaporte vai aparecer."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "Despite the gloomy weather forecast, the event ___ to be a huge success.",
                "options": [
                    "turned out",
                    "phased out",
                    "showed up",
                    "came about"
                ],
                "a": "turned out",
                "explanation": "'Turn out' significa resultar ou revelar-se no final.",
                "type": "choice"
            },
            {
                "q": "We waited for two hours, but he didn't ___ for the interview.",
                "options": [
                    "show up",
                    "phase out",
                    "come about",
                    "turn out"
                ],
                "a": "show up",
                "explanation": "'Show up' (ou turn up) significa aparecer ou chegar a um compromisso.",
                "type": "choice"
            },
            {
                "q": "We got lost in the city and ___ spending the night at a quiet motel.",
                "options": [
                    "ended up",
                    "phased out",
                    "came about",
                    "turned out"
                ],
                "a": "ended up",
                "explanation": "'End up' (ou wind up) significa acabar ficando numa situação não planejada.",
                "type": "choice"
            },
            {
                "q": "The company plans to ___ plastic packaging over the next two years.",
                "options": [
                    "phase out",
                    "show up",
                    "turn out",
                    "come about"
                ],
                "a": "phase out",
                "explanation": "'Phase out' significa descontinuar gradualmente um produto ou prática.",
                "type": "choice"
            },
            {
                "q": "Apesar do mau tempo previsto, o festival ao ar livre revelou-se um enorme sucesso. Como relatar?",
                "options": [
                    "The festival turned out to be a huge success.",
                    "The festival phased out to be a huge success.",
                    "The festival came about to be a huge success.",
                    "The festival winded up to be a huge success."
                ],
                "a": "The festival turned out to be a huge success.",
                "explanation": "'Turn out' significa revelar-se ou ter certo desfecho.",
                "type": "choice"
            },
            {
                "q": "Esperamos durante uma hora na frente do restaurante, mas o convidado não compareceu. O que aconteceu?",
                "options": [
                    "He didn't show up for dinner.",
                    "He didn't phase out for dinner.",
                    "He didn't come about for dinner.",
                    "He didn't turn out for dinner."
                ],
                "a": "He didn't show up for dinner.",
                "explanation": "'Show up' (ou turn up) é aparecer ou chegar ao compromisso.",
                "type": "choice"
            },
            {
                "q": "Nós nos perdemos na estrada à noite e acabamos parando em uma cidadezinha desconhecida. Como dizer?",
                "options": [
                    "We ended up in an unknown town.",
                    "We phased out in an unknown town.",
                    "We came about in an unknown town.",
                    "We turned out in an unknown town."
                ],
                "a": "We ended up in an unknown town.",
                "explanation": "'End up' (ou wind up) é acabar indo parar em certo lugar/situação.",
                "type": "choice"
            },
            {
                "q": "A diretoria da empresa decidiu descontinuar gradualmente a produção do modelo antigo. Eles decidiram:",
                "options": [
                    "Phase out the old model",
                    "Show up the old model",
                    "Turn out the old model",
                    "Come about the old model"
                ],
                "a": "Phase out the old model",
                "explanation": "'Phase out' é retirar de linha/descontinuar aos poucos.",
                "type": "choice"
            },
            {
                "q": "Qual a melhor pergunta para saber como um evento inesperado aconteceu na empresa?",
                "options": [
                    "How did this situation come about?",
                    "How did this situation phase out?",
                    "How did this situation show up?",
                    "How did this situation turn out?"
                ],
                "a": "How did this situation come about?",
                "explanation": "'Come about' é acontecer ou surgir.",
                "type": "choice"
            },
            {
                "q": "Após várias decisões erradas na viagem, eles acabaram indo parar num hotel péssimo. Como resumir?",
                "options": [
                    "They wound up staying at a terrible hotel.",
                    "They phased out staying at a terrible hotel.",
                    "They came about staying at a terrible hotel.",
                    "They turned out staying at a terrible hotel."
                ],
                "a": "They wound up staying at a terrible hotel.",
                "explanation": "'Wind up' é acabar em determinada situação.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 15,
        "level": "B1",
        "title": "Module 15: Habits, Continuation & Quitting",
        "description": "Phrasal Verbs para insistência, dar continuidade ou desistir de hábitos.",
        "items": [
            {
                "id": "pv_mod15_give_up",
                "verb": "Give up",
                "meaning": "Desistir de algo ou parar um hábito",
                "breakdown": {
                    "root": "Give (dar)",
                    "particle": "Up (entregar)",
                    "type": "Separable"
                },
                "explanation": "Abandonar uma tentativa por dificuldade ou parar de consumir algo (ex: fumar).",
                "examples": [
                    {
                        "sentence": "Never give up on your dreams!",
                        "translation": "Nunca desista dos seus sonhos!"
                    },
                    {
                        "sentence": "He decided to give up smoking for his health.",
                        "translation": "Ele decidiu parar de fumar pela saúde dele."
                    }
                ]
            },
            {
                "id": "pv_mod15_keep_on",
                "verb": "Keep on",
                "meaning": "Continuar fazendo algo repetidamente",
                "breakdown": {
                    "root": "Keep (manter)",
                    "particle": "On (em frente)",
                    "type": "Inseparable"
                },
                "explanation": "Manter uma ação continuamente sem parar.",
                "examples": [
                    {
                        "sentence": "She kept on working even though she was tired.",
                        "translation": "Ela continuou trabalhando mesmo estando cansada."
                    },
                    {
                        "sentence": "Keep on trying and you will succeed.",
                        "translation": "Continue tentando e você terá sucesso."
                    }
                ]
            },
            {
                "id": "pv_mod15_carry_on",
                "verb": "Carry on",
                "meaning": "Dar continuidade a uma tarefa após interrupção",
                "breakdown": {
                    "root": "Carry (carregar)",
                    "particle": "On (adiante)",
                    "type": "Inseparable"
                },
                "explanation": "Prosseguir com o trabalho após uma pausa ou obstáculo.",
                "examples": [
                    {
                        "sentence": "Please carry on with your reading while I answer the phone.",
                        "translation": "Por favor, continuem com a leitura de vocês enquanto atendo o telefone."
                    },
                    {
                        "sentence": "Carry on the good work!",
                        "translation": "Continue o ótimo trabalho!"
                    }
                ]
            },
            {
                "id": "pv_mod15_go_on",
                "verb": "Go on",
                "meaning": "Acontecer / Prosseguir dizendo algo",
                "breakdown": {
                    "root": "Go (ir)",
                    "particle": "On (em frente)",
                    "type": "Inseparable"
                },
                "explanation": "Continuar falando ou indicar 'O que está acontecendo?'.",
                "examples": [
                    {
                        "sentence": "What is going on here?",
                        "translation": "O que está acontecendo aqui?"
                    },
                    {
                        "sentence": "Please go on, I am listening.",
                        "translation": "Por favor prossiga, estou ouvindo."
                    }
                ]
            },
            {
                "id": "pv_mod15_give_in",
                "verb": "Give in",
                "meaning": "Ceder à pressão / Render-se",
                "breakdown": {
                    "root": "Give (dar)",
                    "particle": "In (para dentro)",
                    "type": "Inseparable"
                },
                "explanation": "Parar de resistir a um pedido insistente de outra pessoa.",
                "examples": [
                    {
                        "sentence": "The parents gave in and bought the toy for the child.",
                        "translation": "Os pais cederam e compraram o brinquedo para a criança."
                    },
                    {
                        "sentence": "He refused to give in to their demands.",
                        "translation": "Ele se recusou a ceder às exigências deles."
                    }
                ]
            },
            {
                "id": "pv_mod15_phase_out",
                "verb": "Phase out",
                "meaning": "Eliminar gradualmente um processo ou produto",
                "breakdown": {
                    "root": "Phase (etapa)",
                    "particle": "Out (para fora)",
                    "type": "Separable"
                },
                "explanation": "Reduzir o uso de algo aos poucos até sua descontinuação total.",
                "examples": [
                    {
                        "sentence": "The government plans to phase out plastic bags by next year.",
                        "translation": "O governo planeja eliminar gradualmente as sacolas plásticas até o ano que vem."
                    },
                    {
                        "sentence": "Old models are being phased out.",
                        "translation": "Modelos antigos estão sendo descontinuados gradualmente."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "Never ___ on your dreams, even when facing tough challenges!",
                "options": [
                    "give up",
                    "keep on",
                    "carry on",
                    "give in"
                ],
                "a": "give up",
                "explanation": "'Give up' significa desistir de um objetivo.",
                "type": "choice"
            },
            {
                "q": "If you ___ practicing every day, you will achieve fluency quickly.",
                "options": [
                    "keep on",
                    "give up",
                    "give in",
                    "phase out"
                ],
                "a": "keep on",
                "explanation": "'Keep on' é continuar executando uma ação sem parar.",
                "type": "choice"
            },
            {
                "q": "Please ___ with your speech; don't let my interruption stop you.",
                "options": [
                    "carry on",
                    "give up",
                    "give in",
                    "phase out"
                ],
                "a": "carry on",
                "explanation": "'Carry on' significa prosseguir ou continuar uma tarefa.",
                "type": "choice"
            },
            {
                "q": "After hours of relentless negotiation, the opponent finally ___ to our terms.",
                "options": [
                    "gave in",
                    "gave up",
                    "kept on",
                    "carried on"
                ],
                "a": "gave in",
                "explanation": "'Give in' (passado gave in) significa ceder ou render-se.",
                "type": "choice"
            },
            {
                "q": "Diante de desafios difíceis no aprendizado de um idioma, qual é o conselho de incentivo?",
                "options": [
                    "Never give up on your goals!",
                    "Never keep on your goals!",
                    "Never carry on your goals!",
                    "Never give in your goals!"
                ],
                "a": "Never give up on your goals!",
                "explanation": "'Give up' é desistir de um objetivo.",
                "type": "choice"
            },
            {
                "q": "Se você continuar praticando os exercícios diariamente, alcançará a fluência rápida. Como dizer?",
                "options": [
                    "If you keep on practicing, you will improve.",
                    "If you give up practicing, you will improve.",
                    "If you give in practicing, you will improve.",
                    "If you phase out practicing, you will improve."
                ],
                "a": "If you keep on practicing, you will improve.",
                "explanation": "'Keep on' é continuar executando uma ação.",
                "type": "choice"
            },
            {
                "q": "O palestrante foi interrompido por um barulho, mas logo em seguida prosseguiu com a aula. Ele resolveu:",
                "options": [
                    "Carry on with the lecture",
                    "Give up with the lecture",
                    "Give in with the lecture",
                    "Phase out with the lecture"
                ],
                "a": "Carry on with the lecture",
                "explanation": "'Carry on' é prosseguir com uma tarefa.",
                "type": "choice"
            },
            {
                "q": "Após horas de insistência das crianças por doces, os pais finalmente cederam. O que fizeram?",
                "options": [
                    "The parents finally gave in.",
                    "The parents finally gave up.",
                    "The parents finally kept on.",
                    "The parents finally carried on."
                ],
                "a": "The parents finally gave in.",
                "explanation": "'Give in' (passado gave in) é ceder à pressão/pedido.",
                "type": "choice"
            },
            {
                "q": "O médico alertou o paciente sobre a urgência de abandonar definitivamente o hábito de fumar. O conselho foi:",
                "options": [
                    "You must give up smoking immediately.",
                    "You must keep on smoking immediately.",
                    "You must carry on smoking immediately.",
                    "You must give in smoking immediately."
                ],
                "a": "You must give up smoking immediately.",
                "explanation": "'Give up' é abandonar um vício ou hábito.",
                "type": "choice"
            },
            {
                "q": "Qual a melhor frase para encorajar a continuidade de uma apresentação sem parar?",
                "options": [
                    "Please go on with your story!",
                    "Please give up with your story!",
                    "Please give in with your story!",
                    "Please phase out with your story!"
                ],
                "a": "Please go on with your story!",
                "explanation": "'Go on' é continuar a falar ou agir.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 16,
        "level": "B1",
        "title": "Module 16: Workplace Basics & Office Tasks",
        "description": "Phrasal Verbs essenciais para o dia a dia corporativo, relatórios e tarefas de escritório.",
        "items": [
            {
                "id": "pv_mod16_fill_in_for",
                "verb": "Fill in for",
                "meaning": "Substituir temporariamente um colega no trabalho",
                "breakdown": {
                    "root": "Fill (preencher)",
                    "particle": "In for (no lugar de)",
                    "type": "Inseparable"
                },
                "explanation": "Assumir os deveres de um funcionário que se ausentou.",
                "examples": [
                    {
                        "sentence": "Can you fill in for me while I'm on vacation?",
                        "translation": "Você pode me substituir enquanto eu estiver de férias?"
                    },
                    {
                        "sentence": "She is filling in for the sick manager today.",
                        "translation": "Ela está substituindo a gerente doente hoje."
                    }
                ]
            },
            {
                "id": "pv_mod16_take_over",
                "verb": "Take over",
                "meaning": "Assumir o controle/comando de uma tarefa ou empresa",
                "breakdown": {
                    "root": "Take (tomar)",
                    "particle": "Over (sobre)",
                    "type": "Separable"
                },
                "explanation": "Ganhar o controle ou responsabilidade de uma gerência ou função.",
                "examples": [
                    {
                        "sentence": "The new CEO will take over the company next month.",
                        "translation": "O novo CEO vai assumir a empresa no próximo mês."
                    },
                    {
                        "sentence": "Can you take over driving? I am getting sleepy.",
                        "translation": "Você pode assumir a direção do carro? Estou ficando com sono."
                    }
                ]
            },
            {
                "id": "pv_mod16_hand_in",
                "verb": "Hand in / Turn in",
                "meaning": "Entregar um trabalho/relatório a um superior",
                "breakdown": {
                    "root": "Hand (mão)",
                    "particle": "In (para dentro)",
                    "type": "Separable"
                },
                "explanation": "Entregar fisicamente ou digitalmente um documento a um chefe ou professor.",
                "examples": [
                    {
                        "sentence": "Please hand in your monthly reports by Friday afternoon.",
                        "translation": "Por favor, entreguem seus relatórios mensais até sexta à tarde."
                    },
                    {
                        "sentence": "He handed in his resignation letter yesterday.",
                        "translation": "Ele entregou sua carta de demissão ontem."
                    }
                ]
            },
            {
                "id": "pv_mod16_lay_off",
                "verb": "Lay off",
                "meaning": "Demitir por razões econômicas / Corte de pessoal",
                "breakdown": {
                    "root": "Lay (deitar)",
                    "particle": "Off (fora)",
                    "type": "Separable"
                },
                "explanation": "Encerrar o contrato de trabalhadores por redução de custos da empresa.",
                "examples": [
                    {
                        "sentence": "The factory laid off 200 workers due to poor sales.",
                        "translation": "A fábrica demitiu 200 trabalhadores devido às baixas vendas."
                    },
                    {
                        "sentence": "Many tech companies are laying off staff this year.",
                        "translation": "Muitas empresas de tecnologia estão demitindo funcionários este ano."
                    }
                ]
            },
            {
                "id": "pv_mod16_set_up",
                "verb": "Set up",
                "meaning": "Configurar / Agendar uma reunião ou estrutura",
                "breakdown": {
                    "root": "Set (ajustar)",
                    "particle": "Up (pronto)",
                    "type": "Separable"
                },
                "explanation": "Montar equipamentos ou agendar um compromisso formal de negócios.",
                "examples": [
                    {
                        "sentence": "Please set up a video call with the client for 3 PM.",
                        "translation": "Por favor, agende uma chamada de vídeo com o cliente para as 15h."
                    },
                    {
                        "sentence": "We need to set up the projector before the presentation.",
                        "translation": "Nós precisamos montar o projetor antes da apresentação."
                    }
                ]
            },
            {
                "id": "pv_mod16_wrap_up",
                "verb": "Wrap up",
                "meaning": "Concluir / Encerrar uma reunião ou trabalho",
                "breakdown": {
                    "root": "Wrap (embrulhar)",
                    "particle": "Up (completamente)",
                    "type": "Separable"
                },
                "explanation": "Finalizar os últimos detalhes de uma reunião ou projeto.",
                "examples": [
                    {
                        "sentence": "Let's wrap up this meeting, we are out of time.",
                        "translation": "Vamos encerrar esta reunião, nosso tempo acabou."
                    },
                    {
                        "sentence": "I need another ten minutes to wrap up my work.",
                        "translation": "Preciso de mais dez minutos para concluir meu trabalho."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "Sarah is on maternity leave, so Mark will ___ her as department manager.",
                "options": [
                    "fill in for",
                    "take over",
                    "lay off",
                    "wrap up"
                ],
                "a": "fill in for",
                "explanation": "'Fill in for' significa substituir temporariamente alguém no trabalho.",
                "type": "choice"
            },
            {
                "q": "The tech giant decided to ___ the smaller startup for $50 million.",
                "options": [
                    "take over",
                    "fill in for",
                    "hand in",
                    "lay off"
                ],
                "a": "take over",
                "explanation": "'Take over' é assumir o controle ou adquirir uma empresa.",
                "type": "choice"
            },
            {
                "q": "Make sure to ___ your final report before the 5 PM deadline today.",
                "options": [
                    "hand in",
                    "fill in for",
                    "lay off",
                    "take over"
                ],
                "a": "hand in",
                "explanation": "'Hand in' (ou turn in) é entregar uma tarefa/relatório ao superior.",
                "type": "choice"
            },
            {
                "q": "Due to budget cuts, the company had to ___ fifty factory workers.",
                "options": [
                    "lay off",
                    "set up",
                    "wrap up",
                    "fill in for"
                ],
                "a": "lay off",
                "explanation": "'Lay off' é demitir funcionários por cortes de custos.",
                "type": "choice"
            },
            {
                "q": "A gerente de projetos entrou em licença-maternidade e o coordenador assumirá o cargo temporariamente. Ele vai:",
                "options": [
                    "Fill in for the manager during her leave",
                    "Take over the manager during her leave",
                    "Lay off the manager during her leave",
                    "Wrap up the manager during her leave"
                ],
                "a": "Fill in for the manager during her leave",
                "explanation": "'Fill in for' é substituir temporariamente alguém no trabalho.",
                "type": "choice"
            },
            {
                "q": "Uma grande corporação de tecnologia comprou a startup concorrente e assumiu o controle total. Ela resolveu:",
                "options": [
                    "Take over the rival startup",
                    "Fill in for the rival startup",
                    "Hand in the rival startup",
                    "Lay off the rival startup"
                ],
                "a": "Take over the rival startup",
                "explanation": "'Take over' é assumir o controle de uma empresa.",
                "type": "choice"
            },
            {
                "q": "O prazo limite para entregar o relatório de vendas encerra-se às 17h. Qual a instrução para a equipe?",
                "options": [
                    "Hand in your reports before 5 PM.",
                    "Fill in for your reports before 5 PM.",
                    "Lay off your reports before 5 PM.",
                    "Take over your reports before 5 PM."
                ],
                "a": "Hand in your reports before 5 PM.",
                "explanation": "'Hand in / turn in' é entregar tarefas ao superior.",
                "type": "choice"
            },
            {
                "q": "Devido a uma grave crise financeira, a fábrica precisou demitir 50 operários por corte de custos. Como dizer?",
                "options": [
                    "The company had to lay off 50 workers.",
                    "The company had to set up 50 workers.",
                    "The company had to wrap up 50 workers.",
                    "The company had to fill in for 50 workers."
                ],
                "a": "The company had to lay off 50 workers.",
                "explanation": "'Lay off' é demitir por corte de custos.",
                "type": "choice"
            },
            {
                "q": "Ao chegar ao final de uma reunião produtiva de duas horas, o diretor diz que é hora de concluir:",
                "options": [
                    "Let me wrap up today's meeting.",
                    "Let me lay off today's meeting.",
                    "Let me fill in for today's meeting.",
                    "Let me hand in today's meeting."
                ],
                "a": "Let me wrap up today's meeting.",
                "explanation": "'Wrap up' é finalizar/encerrar um trabalho ou reunião.",
                "type": "choice"
            },
            {
                "q": "O novo funcionário recebeu o computador e precisa configurar sua estação de trabalho. Ele vai:",
                "options": [
                    "Set up his new workstation",
                    "Lay off his new workstation",
                    "Wrap up his new workstation",
                    "Hand in his new workstation"
                ],
                "a": "Set up his new workstation",
                "explanation": "'Set up' é montar/configurar uma estrutura de trabalho.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 17,
        "level": "B1",
        "title": "Module 17: Tri-Prepositional Phrasal Verbs I",
        "description": "Phrasal Verbs de três palavras (verbo + duas partículas) de alta frequência no inglês falado.",
        "items": [
            {
                "id": "pv_mod17_look_forward_to",
                "verb": "Look forward to",
                "meaning": "Aguardar ansiosamente por algo positivo",
                "breakdown": {
                    "root": "Look",
                    "particle": "Forward to",
                    "type": "Inseparable"
                },
                "explanation": "Estar animado e na expectativa de um evento futuro agradável (exige verbo com -ing após 'to').",
                "examples": [
                    {
                        "sentence": "I am looking forward to meeting you next week.",
                        "translation": "Estou aguardando ansiosamente por conhecê-lo na semana que vem."
                    },
                    {
                        "sentence": "We look forward to our summer vacation.",
                        "translation": "Nós aguardamos ansiosamente por nossas férias de verão."
                    }
                ]
            },
            {
                "id": "pv_mod17_run_out_of",
                "verb": "Run out of",
                "meaning": "Ficar sem / Esgotar o suprimento de algo",
                "breakdown": {
                    "root": "Run",
                    "particle": "Out of",
                    "type": "Inseparable"
                },
                "explanation": "Quando o estoque de um item (café, dinheiro, tempo, gasolina) acaba completamente.",
                "examples": [
                    {
                        "sentence": "We ran out of milk, so I need to go to the store.",
                        "translation": "Nós ficamos sem leite, então preciso ir ao mercado."
                    },
                    {
                        "sentence": "Hurry up! We are running out of time!",
                        "translation": "Apresse-se! Estamos ficando sem tempo!"
                    }
                ]
            },
            {
                "id": "pv_mod17_cut_down_on",
                "verb": "Cut down on",
                "meaning": "Reduzir o consumo ou frequência de algo",
                "breakdown": {
                    "root": "Cut",
                    "particle": "Down on",
                    "type": "Inseparable"
                },
                "explanation": "Diminuir a quantidade de algo ingerido ou feito por motivo de saúde ou orçamento.",
                "examples": [
                    {
                        "sentence": "I need to cut down on eating fast food.",
                        "translation": "Preciso reduzir o consumo de fast food."
                    },
                    {
                        "sentence": "The doctor advised him to cut down on alcohol.",
                        "translation": "O médico o aconselhou a reduzir o álcool."
                    }
                ]
            },
            {
                "id": "pv_mod17_come_up_with",
                "verb": "Come up with",
                "meaning": "Ideia / Inventar ou propor uma solução inovadora",
                "breakdown": {
                    "root": "Come",
                    "particle": "Up with",
                    "type": "Inseparable"
                },
                "explanation": "Criar de forma criativa um plano, resposta ou ideia técnica.",
                "examples": [
                    {
                        "sentence": "She came up with a brilliant marketing strategy.",
                        "translation": "Ela teve/inventou uma estratégia de marketing brilhante."
                    },
                    {
                        "sentence": "Can you come up with a better solution?",
                        "translation": "Você consegue propor uma solução melhor?"
                    }
                ]
            },
            {
                "id": "pv_mod17_face_up_to",
                "verb": "Face up to",
                "meaning": "Encarar uma realidade difícil de frente",
                "breakdown": {
                    "root": "Face",
                    "particle": "Up to",
                    "type": "Inseparable"
                },
                "explanation": "Aceitar a verdade dolorosa de uma situação em vez de ignorá-la.",
                "examples": [
                    {
                        "sentence": "You must face up to your responsibilities.",
                        "translation": "Você deve encarar as suas responsabilidades de frente."
                    },
                    {
                        "sentence": "He needs to face up to the fact that he failed.",
                        "translation": "Ele precisa encarar o fato de que falhou."
                    }
                ]
            },
            {
                "id": "pv_mod17_keep_up_with",
                "verb": "Keep up with",
                "meaning": "Acompanhar o ritmo de velocidade de alguém",
                "breakdown": {
                    "root": "Keep",
                    "particle": "Up with",
                    "type": "Inseparable"
                },
                "explanation": "Manter a mesma velocidade de caminhada, estudo ou atualização que outros.",
                "examples": [
                    {
                        "sentence": "Slow down! I can't keep up with you!",
                        "translation": "Vá devagar! Não consigo acompanhar o seu ritmo!"
                    },
                    {
                        "sentence": "It's hard to keep up with the latest tech trends.",
                        "translation": "É difícil acompanhar as últimas tendências de tecnologia."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "I am really ___ going on vacation to Hawaii next month!",
                "options": [
                    "looking forward to",
                    "running out of",
                    "facing up to",
                    "cutting down on"
                ],
                "a": "looking forward to",
                "explanation": "'Look forward to' é aguardar ansiosamente por algo bom.",
                "type": "choice"
            },
            {
                "q": "We can't bake the cake because we have ___ sugar and flour.",
                "options": [
                    "run out of",
                    "come up with",
                    "kept up with",
                    "faced up to"
                ],
                "a": "run out of",
                "explanation": "'Run out of' é ficar sem estoque de determinado item.",
                "type": "choice"
            },
            {
                "q": "Our creative team needs to ___ a brilliant marketing strategy fast.",
                "options": [
                    "come up with",
                    "run out of",
                    "look forward to",
                    "face up to"
                ],
                "a": "come up with",
                "explanation": "'Come up with' é bolar, propor ou inventar uma solução/ideia.",
                "type": "choice"
            },
            {
                "q": "It's time to ___ the reality that our business model needs improvement.",
                "options": [
                    "face up to",
                    "run out of",
                    "come up with",
                    "look forward to"
                ],
                "a": "face up to",
                "explanation": "'Face up to' é encarar de frente uma realidade ou problema.",
                "type": "choice"
            },
            {
                "q": "Você comprou passagens para viajar nas férias no próximo mês e está muito entusiasmado. Como expressar?",
                "options": [
                    "I am really looking forward to my vacation.",
                    "I am really running out of my vacation.",
                    "I am really facing up to my vacation.",
                    "I am really cutting down on my vacation."
                ],
                "a": "I am really looking forward to my vacation.",
                "explanation": "'Look forward to' é aguardar ansiosamente por algo bom.",
                "type": "choice"
            },
            {
                "q": "Você estava preparando um bolo e percebeu que o açúcar da despensa acabou. Como dizer em inglês?",
                "options": [
                    "We have run out of sugar.",
                    "We have come up with sugar.",
                    "We have kept up with sugar.",
                    "We have faced up to sugar."
                ],
                "a": "We have run out of sugar.",
                "explanation": "'Run out of' é ficar sem estoque de algo.",
                "type": "choice"
            },
            {
                "q": "Sua equipe de marketing precisa criar uma solução inovadora para a campanha até amanhã. Vocês precisam:",
                "options": [
                    "Come up with an innovative idea",
                    "Run out of an innovative idea",
                    "Look forward to an innovative idea",
                    "Face up to an innovative idea"
                ],
                "a": "Come up with an innovative idea",
                "explanation": "'Come up with' é conceber/propor uma ideia nova.",
                "type": "choice"
            },
            {
                "q": "É preciso encarar de frente a realidade de que os gastos da empresa excederam o orçamento. Você deve:",
                "options": [
                    "Face up to the financial reality",
                    "Run out of the financial reality",
                    "Come up with the financial reality",
                    "Look forward to the financial reality"
                ],
                "a": "Face up to the financial reality",
                "explanation": "'Face up to' é encarar de frente um problema/realidade.",
                "type": "choice"
            },
            {
                "q": "O médico sugeriu reduzir a ingestão de café para diminuir a ansiedade. A recomendação foi:",
                "options": [
                    "Cut down on caffeine intake",
                    "Run out of caffeine intake",
                    "Look forward to caffeine intake",
                    "Face up to caffeine intake"
                ],
                "a": "Cut down on caffeine intake",
                "explanation": "'Cut down on' é reduzir a quantidade consumida.",
                "type": "choice"
            },
            {
                "q": "Em uma corrida ou no ritmo de estudos, você precisa manter a mesma velocidade dos demais para não ficar para trás:",
                "options": [
                    "Keep up with the group",
                    "Run out of the group",
                    "Face up to the group",
                    "Come up with the group"
                ],
                "a": "Keep up with the group",
                "explanation": "'Keep up with' é acompanhar o mesmo ritmo.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 18,
        "level": "B1",
        "title": "Module 18: Tri-Prepositional Phrasal Verbs II",
        "description": "Mais Phrasal Verbs avançados de três partes para tolerância, desculpas e livrar-se de culpas.",
        "items": [
            {
                "id": "pv_mod18_get_away_with",
                "verb": "Get away with",
                "meaning": "Sair impune de uma infração / Livrar-se da culpa",
                "breakdown": {
                    "root": "Get",
                    "particle": "Away with",
                    "type": "Inseparable"
                },
                "explanation": "Fazer algo errado ou ilegal sem sofrer punição ou consequência.",
                "examples": [
                    {
                        "sentence": "He stole a candy and thought he could get away with it.",
                        "translation": "Ele roubou um doce e achou que sairia impune."
                    },
                    {
                        "sentence": "You can't get away with cheating on tests forever.",
                        "translation": "Você não pode sair impune de colar nas provas para sempre."
                    }
                ]
            },
            {
                "id": "pv_mod18_put_up_with",
                "verb": "Put up with",
                "meaning": "Tolerar / Aturar uma pessoa ou barulho chato",
                "breakdown": {
                    "root": "Put",
                    "particle": "Up with",
                    "type": "Inseparable"
                },
                "explanation": "Aguentar uma situação incômoda sem reclamar.",
                "examples": [
                    {
                        "sentence": "I cannot put up with your constant complaining anymore!",
                        "translation": "Eu não consigo mais aturar a sua reclamação constante!"
                    },
                    {
                        "sentence": "How do you put up with the noise from the street?",
                        "translation": "Como você tolera/aguenta o barulho vindo da rua?"
                    }
                ]
            },
            {
                "id": "pv_mod18_stand_up_for",
                "verb": "Stand up for",
                "meaning": "Defender com firmeza os direitos de alguém",
                "breakdown": {
                    "root": "Stand",
                    "particle": "Up for",
                    "type": "Inseparable"
                },
                "explanation": "Lutar ou expressar defesa em favor de si mesmo ou dos fracos.",
                "examples": [
                    {
                        "sentence": "You must stand up for your rights at work.",
                        "translation": "Você deve defender os seus direitos no trabalho com firmeza."
                    },
                    {
                        "sentence": "He always stands up for his younger brother.",
                        "translation": "Ele sempre defende o irmão mais novo."
                    }
                ]
            },
            {
                "id": "pv_mod18_look_down_on",
                "verb": "Look down on",
                "meaning": "Menosprezar / Olhar com superioridade",
                "breakdown": {
                    "root": "Look",
                    "particle": "Down on",
                    "type": "Inseparable"
                },
                "explanation": "Considerar-se superior a alguém por motivos econômicos ou sociais.",
                "examples": [
                    {
                        "sentence": "It's wrong to look down on people who have less money.",
                        "translation": "É errado menosprezar as pessoas que têm menos dinheiro."
                    },
                    {
                        "sentence": "She never looks down on anyone.",
                        "translation": "Ela nunca olha com superioridade para ninguém."
                    }
                ]
            },
            {
                "id": "pv_mod18_catch_up_on",
                "verb": "Catch up on",
                "meaning": "Colocar atraso em dia (sono/trabalho)",
                "breakdown": {
                    "root": "Catch",
                    "particle": "Up on",
                    "type": "Inseparable"
                },
                "explanation": "Dedicar tempo para recuperar trabalho, leitura ou sono pendente.",
                "examples": [
                    {
                        "sentence": "I need to catch up on sleep this weekend.",
                        "translation": "Preciso colocar o meu sono em dia neste fim de semana."
                    },
                    {
                        "sentence": "She is catching up on her unread emails.",
                        "translation": "Ela está colocando seus e-mails não lidos em dia."
                    }
                ]
            },
            {
                "id": "pv_mod18_make_up_for",
                "verb": "Make up for",
                "meaning": "Compensar uma falha ou atraso com algo bom",
                "breakdown": {
                    "root": "Make",
                    "particle": "Up for",
                    "type": "Inseparable"
                },
                "explanation": "Oferecer algo bom para reequilibrar um erro ou ausência passada.",
                "examples": [
                    {
                        "sentence": "He bought her flowers to make up for being late.",
                        "translation": "Ele comprou flores para ela para compensar o atraso."
                    },
                    {
                        "sentence": "Nothing can make up for the lost time.",
                        "translation": "Nada pode compensar o tempo perdido."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "I cannot ___ your rude behavior in this office any longer!",
                "options": [
                    "put up with",
                    "get away with",
                    "look down on",
                    "catch up on"
                ],
                "a": "put up with",
                "explanation": "'Put up with' significa tolerar ou suportar algo desagradável.",
                "type": "choice"
            },
            {
                "q": "He thought he could ___ cheating on the test, but the teacher caught him.",
                "options": [
                    "get away with",
                    "stand up for",
                    "make up for",
                    "catch up on"
                ],
                "a": "get away with",
                "explanation": "'Get away with' é sair impune de algo incorreto.",
                "type": "choice"
            },
            {
                "q": "You should always ___ your beliefs and defend your rights.",
                "options": [
                    "stand up for",
                    "look down on",
                    "put up with",
                    "make up for"
                ],
                "a": "stand up for",
                "explanation": "'Stand up for' é defender firmemente uma causa ou pessoa.",
                "type": "choice"
            },
            {
                "q": "I need to work this weekend to ___ missed assignments.",
                "options": [
                    "catch up on",
                    "look down on",
                    "get away with",
                    "put up with"
                ],
                "a": "catch up on",
                "explanation": "'Catch up on' é colocar tarefas pendentes em dia.",
                "type": "choice"
            },
            {
                "q": "Você não tolera mais a falta de educação e o barulho excessivo no ambiente de trabalho. Como desabafar?",
                "options": [
                    "I can't put up with this noise anymore.",
                    "I can't get away with this noise anymore.",
                    "I can't look down on this noise anymore.",
                    "I can't catch up on this noise anymore."
                ],
                "a": "I can't put up with this noise anymore.",
                "explanation": "'Put up with' é tolerar ou suportar algo desagradável.",
                "type": "choice"
            },
            {
                "q": "O aluno colou na prova achando que não seria pego, mas o professor percebeu. Ele não conseguiu:",
                "options": [
                    "Get away with cheating on the exam",
                    "Stand up for cheating on the exam",
                    "Make up for cheating on the exam",
                    "Catch up on cheating on the exam"
                ],
                "a": "Get away with cheating on the exam",
                "explanation": "'Get away with' é sair impune de uma falta.",
                "type": "choice"
            },
            {
                "q": "É fundamental defender seus princípios e direitos quando alguém tenta prejudicá-lo. Você deve:",
                "options": [
                    "Stand up for your rights",
                    "Look down on your rights",
                    "Put up with your rights",
                    "Make up for your rights"
                ],
                "a": "Stand up for your rights",
                "explanation": "'Stand up for' é defender firmemente uma causa/pessoa.",
                "type": "choice"
            },
            {
                "q": "Você trabalhou no fim de semana para colocar os relatórios acumulados em dia. Você precisava:",
                "options": [
                    "Catch up on pending reports",
                    "Look down on pending reports",
                    "Get away with pending reports",
                    "Put up with pending reports"
                ],
                "a": "Catch up on pending reports",
                "explanation": "'Catch up on' é colocar tarefas pendentes em dia.",
                "type": "choice"
            },
            {
                "q": "Nenhum profissional deve tratar colegas com ar de superioridade ou desprezo. Ninguém deve:",
                "options": [
                    "Look down on other team members",
                    "Stand up for other team members",
                    "Make up for other team members",
                    "Put up with other team members"
                ],
                "a": "Look down on other team members",
                "explanation": "'Look down on' é menosprezar ou julgar-se superior.",
                "type": "choice"
            },
            {
                "q": "Você chegou muito atrasado ao compromisso e comprou um presente para compensar sua falha. Você queria:",
                "options": [
                    "Make up for being late",
                    "Look down on being late",
                    "Get away with being late",
                    "Stand up for being late"
                ],
                "a": "Make up for being late",
                "explanation": "'Make up for' é compensar um erro ou prejuízo.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 19,
        "level": "B1",
        "title": "Module 19: Essential Everyday Idioms I (Conversational)",
        "description": "Expressões idiomáticas cotidianas essenciais para um diálogo natural e fluente.",
        "items": [
            {
                "id": "pv_mod19_piece_of_cake",
                "verb": "Piece of cake",
                "meaning": "Mamão com açúcar (muito fácil)",
                "breakdown": {
                    "root": "Piece (pedaço)",
                    "particle": "Of cake (de bolo)",
                    "type": "Idiom"
                },
                "explanation": "Metáfora para descrever uma tarefa ou teste extremamente fácil de fazer.",
                "examples": [
                    {
                        "sentence": "Don't worry about the exam, it was a piece of cake!",
                        "translation": "Não se preocupe com a prova, foi um mamão com açúcar!"
                    },
                    {
                        "sentence": "Fixing this problem is a piece of cake for an expert.",
                        "translation": "Consertar este problema é mamão com açúcar para um especialista."
                    }
                ]
            },
            {
                "id": "pv_mod19_break_a_leg",
                "verb": "Break a leg",
                "meaning": "Boa sorte! (Desejo tradicional)",
                "breakdown": {
                    "root": "Break (quebrar)",
                    "particle": "A leg (uma perna)",
                    "type": "Idiom"
                },
                "explanation": "Forma cultural de desejar sorte antes de uma apresentação pública ou teatro.",
                "examples": [
                    {
                        "sentence": "You're going on stage now? Break a leg!",
                        "translation": "Você vai subir ao palco agora? Boa sorte!"
                    },
                    {
                        "sentence": "I told him to break a leg before his job interview.",
                        "translation": "Desejei boa sorte a ele antes da entrevista de emprego."
                    }
                ]
            },
            {
                "id": "pv_mod19_under_the_weather",
                "verb": "Under the weather",
                "meaning": "Sentir-se indisposto / Um pouco doente",
                "breakdown": {
                    "root": "Under (sob)",
                    "particle": "The weather (o clima)",
                    "type": "Idiom"
                },
                "explanation": "Estar com mal-estar leve, gripe ou cansaço sem ser algo grave.",
                "examples": [
                    {
                        "sentence": "I won't come to work today because I feel under the weather.",
                        "translation": "Não irei trabalhar hoje porque me sinto um pouco indisposto."
                    },
                    {
                        "sentence": "She looks a bit under the weather.",
                        "translation": "Ela parece estar um pouco indisposta."
                    }
                ]
            },
            {
                "id": "pv_mod19_hit_the_sack",
                "verb": "Hit the sack / Hit the hay",
                "meaning": "Ir para a cama dormir",
                "breakdown": {
                    "root": "Hit (bater)",
                    "particle": "The sack (no saco/colchão)",
                    "type": "Idiom"
                },
                "explanation": "Expressão informal muito comum para dizer que vai dormir por estar exausto.",
                "examples": [
                    {
                        "sentence": "I am exhausted, I am going to hit the sack.",
                        "translation": "Estou exausto, vou para a cama dormir."
                    },
                    {
                        "sentence": "What time do you usually hit the hay?",
                        "translation": "Que horas você costuma ir pra cama dormir?"
                    }
                ]
            },
            {
                "id": "pv_mod19_speak_of_the_devil",
                "verb": "Speak of the devil",
                "meaning": "Falando no mau (olha quem chega!)",
                "breakdown": {
                    "root": "Speak (falar)",
                    "particle": "Of the devil (do diabo)",
                    "type": "Idiom"
                },
                "explanation": "Dito quando a pessoa de quem se estava falando aparece de repente no local.",
                "examples": [
                    {
                        "sentence": "Speak of the devil! We were just talking about you, John!",
                        "translation": "Falando no mau! Estávamos justamente falando de você, John!"
                    },
                    {
                        "sentence": "And speak of the devil, here she comes!",
                        "translation": "E falando no mau, olha ela vindo aí!"
                    }
                ]
            },
            {
                "id": "pv_mod19_once_in_a_blue_moon",
                "verb": "Once in a blue moon",
                "meaning": "Raramente / Uma vez a cada morte de bispo",
                "breakdown": {
                    "root": "Once (uma vez)",
                    "particle": "Blue moon (lua azul)",
                    "type": "Idiom"
                },
                "explanation": "Evento que acontece com frequência extremamente baixa.",
                "examples": [
                    {
                        "sentence": "I only eat fast food once in a blue moon.",
                        "translation": "Eu só como fast food muito raramente."
                    },
                    {
                        "sentence": "He visits his home town once in a blue moon.",
                        "translation": "Ele visita sua cidade natal uma vez a cada morte de bispo."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "Don't worry about the exam! You studied well, so it will be a ___.",
                "options": [
                    "piece of cake",
                    "break a leg",
                    "under the weather",
                    "speak of the devil"
                ],
                "a": "piece of cake",
                "explanation": "'Piece of cake' é o idioma para algo muito fácil ('mamão com açúcar').",
                "type": "choice"
            },
            {
                "q": "Before the actor went on stage, his friends wished him to '___!'.",
                "options": [
                    "break a leg",
                    "hit the sack",
                    "piece of cake",
                    "once in a blue moon"
                ],
                "a": "break a leg",
                "explanation": "'Break a leg' é a expressão tradicional para desejar boa sorte no teatro/apresentações.",
                "type": "choice"
            },
            {
                "q": "I can't come to work today because I'm feeling a bit ___.",
                "options": [
                    "under the weather",
                    "piece of cake",
                    "break a leg",
                    "once in a blue moon"
                ],
                "a": "under the weather",
                "explanation": "'Under the weather' significa sentir-se indisposto ou meio doente.",
                "type": "choice"
            },
            {
                "q": "I'm completely exhausted after a long day; I'm going to ___.",
                "options": [
                    "hit the sack",
                    "speak of the devil",
                    "piece of cake",
                    "break a leg"
                ],
                "a": "hit the sack",
                "explanation": "'Hit the sack' (ou hit the hay) significa ir para a cama dormir.",
                "type": "choice"
            },
            {
                "q": "A prova de inglês estava muito simples e você respondeu tudo em 10 minutos. Como dizer que foi fácil?",
                "options": [
                    "The exam was a piece of cake!",
                    "The exam was under the weather!",
                    "The exam was speak of the devil!",
                    "The exam was once in a blue moon!"
                ],
                "a": "The exam was a piece of cake!",
                "explanation": "'Piece of cake' é o idioma para algo muito fácil ('mamão com açúcar').",
                "type": "choice"
            },
            {
                "q": "Antes de o ator entrar no palco para a estreia do espetáculo, qual o desejo tradicional de boa sorte em inglês?",
                "options": [
                    "Break a leg!",
                    "Hit the sack!",
                    "Piece of cake!",
                    "Speak of the devil!"
                ],
                "a": "Break a leg!",
                "explanation": "'Break a leg' é a expressão usada no teatro para desejar boa sorte.",
                "type": "choice"
            },
            {
                "q": "Você acordou indisposto, com dor de cabeça e febre baixa, e resolveu não ir trabalhar. Como explicar?",
                "options": [
                    "I am feeling a bit under the weather today.",
                    "I am feeling a bit piece of cake today.",
                    "I am feeling a bit break a leg today.",
                    "I am feeling a bit once in a blue moon today."
                ],
                "a": "I am feeling a bit under the weather today.",
                "explanation": "'Under the weather' significa sentir-se indisposto/doente.",
                "type": "choice"
            },
            {
                "q": "Depois de trabalhar por 12 horas seguidas, você está exausto e só quer ir dormir. O que você diz?",
                "options": [
                    "I'm so exhausted, I'm going to hit the sack.",
                    "I'm so exhausted, I'm going to speak of the devil.",
                    "I'm so exhausted, I'm going to break a leg.",
                    "I'm so exhausted, I'm going to piece of cake."
                ],
                "a": "I'm so exhausted, I'm going to hit the sack.",
                "explanation": "'Hit the sack / hit the hay' significa recolher-se para dormir.",
                "type": "choice"
            },
            {
                "q": "Vocês estavam comentando sobre um colega ausente e, no mesmo instante, ele entra na sala. O que exclamar?",
                "options": [
                    "Speak of the devil!",
                    "Break a leg!",
                    "Piece of cake!",
                    "Under the weather!"
                ],
                "a": "Speak of the devil!",
                "explanation": "'Speak of the devil' é o famoso 'falando no mau...'.",
                "type": "choice"
            },
            {
                "q": "Como descrever um hábito muito raro, como ir ao cinema apenas uma ou duas vezes por ano?",
                "options": [
                    "I go to the movies once in a blue moon.",
                    "I go to the movies under the weather.",
                    "I go to the movies break a leg.",
                    "I go to the movies hit the sack."
                ],
                "a": "I go to the movies once in a blue moon.",
                "explanation": "'Once in a blue moon' significa muito raramente.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 20,
        "level": "B1",
        "title": "Module 20: Essential Everyday Idioms II (Decisions & Action)",
        "description": "Expressões idiomáticas de ação, decisões, trabalho e interrupção de conversas.",
        "items": [
            {
                "id": "pv_mod20_bite_the_bullet",
                "verb": "Bite the bullet",
                "meaning": "Encarar uma decisão difícil com coragem",
                "breakdown": {
                    "root": "Bite (morder)",
                    "particle": "The bullet (a bala)",
                    "type": "Idiom"
                },
                "explanation": "Enfrentar uma situação dolorosa ou inevitável sem mais procrastinar.",
                "examples": [
                    {
                        "sentence": "I decided to bite the bullet and pay for the expensive car repair.",
                        "translation": "Decidi encarar a realidade e pagar pelo conserto caro do carro."
                    },
                    {
                        "sentence": "Just bite the bullet and apologize to her.",
                        "translation": "Apenas encare a situação e peça desculpas a ela."
                    }
                ]
            },
            {
                "id": "pv_mod20_hit_the_nail",
                "verb": "Hit the nail on the head",
                "meaning": "Acertar na mosca / Falar a verdade exata",
                "breakdown": {
                    "root": "Hit (bater)",
                    "particle": "The nail (no prego)",
                    "type": "Idiom"
                },
                "explanation": "Descrever com precisão exata a causa de um problema ou raciocínio.",
                "examples": [
                    {
                        "sentence": "Your analysis hit the nail on the head!",
                        "translation": "Sua análise acertou na mosca!"
                    },
                    {
                        "sentence": "He hit the nail on the head when he pointed out the budget mistake.",
                        "translation": "Ele acertou em cheio quando apontou o erro no orçamento."
                    }
                ]
            },
            {
                "id": "pv_mod20_call_it_a_day",
                "verb": "Call it a day",
                "meaning": "Encerrar o expediente de trabalho",
                "breakdown": {
                    "root": "Call (chamar)",
                    "particle": "It a day (o dia)",
                    "type": "Idiom"
                },
                "explanation": "Decidir parar de trabalhar pelo resto do dia atual.",
                "examples": [
                    {
                        "sentence": "We have worked for nine hours, let's call it a day.",
                        "translation": "Trabalhamos por nove horas, vamos encerrar o expediente por hoje."
                    },
                    {
                        "sentence": "The boss told us to call it a day early on Friday.",
                        "translation": "O chefe nos disse para encerrar mais cedo na sexta-feira."
                    }
                ]
            },
            {
                "id": "pv_mod20_spill_the_beans",
                "verb": "Spill the beans",
                "meaning": "Dar com a língua nos dentes / Contar um segredo",
                "breakdown": {
                    "root": "Spill (derramar)",
                    "particle": "The beans (os feijões)",
                    "type": "Idiom"
                },
                "explanation": "Revelar informações confidenciais não intencionalmente ou por fofoca.",
                "examples": [
                    {
                        "sentence": "Don't spill the beans about the surprise party!",
                        "translation": "Não dê com a língua nos dentes sobre a festa surpresa!"
                    },
                    {
                        "sentence": "Who spilled the beans to the press?",
                        "translation": "Quem contou o segredo para a imprensa?"
                    }
                ]
            },
            {
                "id": "pv_mod20_burn_midnight_oil",
                "verb": "Burn the midnight oil",
                "meaning": "Trabalhar/estudar até de madrugada",
                "breakdown": {
                    "root": "Burn (queimar)",
                    "particle": "Midnight oil (óleo da meia-noite)",
                    "type": "Idiom"
                },
                "explanation": "Estender a jornada de estudo ou trabalho noite adentro.",
                "examples": [
                    {
                        "sentence": "She is burning the midnight oil to prepare for final exams.",
                        "translation": "Ela está estudando até de madrugada para se preparar para as provas finais."
                    },
                    {
                        "sentence": "We had to burn the midnight oil to meet the deadline.",
                        "translation": "Tivemos que trabalhar de madrugada para cumprir o prazo."
                    }
                ]
            },
            {
                "id": "pv_mod20_beat_around_bush",
                "verb": "Beat around the bush",
                "meaning": "Fazer rodeios / Enrolar sem ir ao ponto",
                "breakdown": {
                    "root": "Beat (bater)",
                    "particle": "Around bush (no mato)",
                    "type": "Idiom"
                },
                "explanation": "Evitar falar do assunto principal por vergonha ou desconforto.",
                "examples": [
                    {
                        "sentence": "Stop beating around the bush and tell me what happened!",
                        "translation": "Pare de fazer rodeios e me diga o que aconteceu!"
                    },
                    {
                        "sentence": "Don't beat around the bush, give me a clear answer.",
                        "translation": "Não enrole, me dê uma resposta clara."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "Stop wasting time and telling stories; don't ___ and tell me the news!",
                "options": [
                    "beat around the bush",
                    "bite the bullet",
                    "call it a day",
                    "spill the beans"
                ],
                "a": "beat around the bush",
                "explanation": "'Beat around the bush' significa fazer rodeios / enrolar sem ir direto ao ponto.",
                "type": "choice"
            },
            {
                "q": "We've worked hard for eight hours straight. Let's ___ and go home.",
                "options": [
                    "call it a day",
                    "bite the bullet",
                    "spill the beans",
                    "burn the midnight oil"
                ],
                "a": "call it a day",
                "explanation": "'Call it a day' é encerrar o expediente ou o trabalho do dia.",
                "type": "choice"
            },
            {
                "q": "He was preparing for final exams, so he had to ___ every night.",
                "options": [
                    "burn the midnight oil",
                    "hit the nail on the head",
                    "call it a day",
                    "bite the bullet"
                ],
                "a": "burn the midnight oil",
                "explanation": "'Burn the midnight oil' é estudar ou trabalhar até altas horas da madrugada.",
                "type": "choice"
            },
            {
                "q": "You ___ when you identified the main cause of the project's delay.",
                "options": [
                    "hit the nail on the head",
                    "spilled the beans",
                    "bit the bullet",
                    "called it a day"
                ],
                "a": "hit the nail on the head",
                "explanation": "'Hit the nail on the head' é acertar na mosca / dizer a verdade exata.",
                "type": "choice"
            },
            {
                "q": "Seu colega fica dando rodeios sem dizer abertamente o valor do orçamento. O que pedir a ele?",
                "options": [
                    "Stop beating around the bush and tell me the price!",
                    "Stop biting the bullet and tell me the price!",
                    "Stop calling it a day and tell me the price!",
                    "Stop spilling the beans and tell me the price!"
                ],
                "a": "Stop beating around the bush and tell me the price!",
                "explanation": "'Beat around the bush' é fazer rodeios sem ir direto ao ponto.",
                "type": "choice"
            },
            {
                "q": "A equipe trabalhou duro durante oito horas e resolveu encerrar o expediente por hoje. O que disseram?",
                "options": [
                    "Let's call it a day, team!",
                    "Let's bite the bullet, team!",
                    "Let's spill the beans, team!",
                    "Let's burn the midnight oil, team!"
                ],
                "a": "Let's call it a day, team!",
                "explanation": "'Call it a day' é encerrar o trabalho do dia.",
                "type": "choice"
            },
            {
                "q": "Durante a semana de provas da faculdade, o estudante precisou estudar até de madrugada todas as noites. Ele teve que:",
                "options": [
                    "Burn the midnight oil",
                    "Hit the nail on the head",
                    "Call it a day",
                    "Bite the bullet"
                ],
                "a": "Burn the midnight oil",
                "explanation": "'Burn the midnight oil' é estudar/trabalhar até tarde da noite.",
                "type": "choice"
            },
            {
                "q": "Na reunião, a analista identificou exatamente a causa do problema no sistema. O chefe disse que ela:",
                "options": [
                    "Hit the nail on the head",
                    "Spilled the beans",
                    "Bit the bullet",
                    "Called it a day"
                ],
                "a": "Hit the nail on the head",
                "explanation": "'Hit the nail on the head' é acertar na mosca / ser exato.",
                "type": "choice"
            },
            {
                "q": "Sem querer, seu irmão contou o segredo da festa surpresa para a aniversariante. Como dizer que ele deu com a língua nos dentes?",
                "options": [
                    "He spilled the beans about the party.",
                    "He bit the bullet about the party.",
                    "He called it a day about the party.",
                    "He hit the nail on the head about the party."
                ],
                "a": "He spilled the beans about the party.",
                "explanation": "'Spill the beans' é revelar um segredo.",
                "type": "choice"
            },
            {
                "q": "Você tem um tratamento dentário desagradável pela frente e decide encará-lo com coragem sem adiar. Você resolveu:",
                "options": [
                    "Bite the bullet and face the treatment",
                    "Beat around the bush and face the treatment",
                    "Call it a day and face the treatment",
                    "Spill the beans and face the treatment"
                ],
                "a": "Bite the bullet and face the treatment",
                "explanation": "'Bite the bullet' é encarar uma situação difícil com firmeza.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 21,
        "level": "B2",
        "title": "Module 21: Executive Business & Work Communication",
        "description": "Phrasal Verbs corporativos executivos para alinhamento estratégico, execução de projetos e acompanhamento.",
        "items": [
            {
                "id": "pv_mod21_touch_base",
                "verb": "Touch base (with)",
                "meaning": "Fazer um contato rápido para alinhamento",
                "breakdown": {
                    "root": "Touch (tocar)",
                    "particle": "Base (base)",
                    "type": "Inseparable"
                },
                "explanation": "Entrar em contato brevemente com um colega ou cliente para atualizar o status.",
                "examples": [
                    {
                        "sentence": "I will touch base with you after the client meeting.",
                        "translation": "Farei um contato rápido com você após a reunião com o cliente."
                    },
                    {
                        "sentence": "Let's touch base next week regarding the budget.",
                        "translation": "Vamos fazer um alinhamento rápido na próxima semana referente ao orçamento."
                    }
                ]
            },
            {
                "id": "pv_mod21_follow_up",
                "verb": "Follow up (on)",
                "meaning": "Acompanhar o andamento de um processo/e-mail",
                "breakdown": {
                    "root": "Follow (seguir)",
                    "particle": "Up (em frente)",
                    "type": "Inseparable"
                },
                "explanation": "Dar continuidade ou verificar se uma tarefa anterior foi cumprida.",
                "examples": [
                    {
                        "sentence": "I am writing to follow up on my previous email.",
                        "translation": "Estou escrevendo para acompanhar o andamento do meu e-mail anterior."
                    },
                    {
                        "sentence": "Make sure to follow up on the customer leads.",
                        "translation": "Certifique-se de fazer o acompanhamento dos contatos de clientes."
                    }
                ]
            },
            {
                "id": "pv_mod21_bring_up_topic",
                "verb": "Bring up",
                "meaning": "Trazer um assunto à tona em reunião",
                "breakdown": {
                    "root": "Bring (trazer)",
                    "particle": "Up (ao debate)",
                    "type": "Separable"
                },
                "explanation": "Mencionar ou introduzir um novo tema durante uma discussão de negócios.",
                "examples": [
                    {
                        "sentence": "He brought up the issue of salary increases during the conference.",
                        "translation": "Ele trouxe o assunto de aumentos salariais à tona durante a conferência."
                    },
                    {
                        "sentence": "I'd like to bring up another point.",
                        "translation": "Gostaria de trazer outro ponto em pauta."
                    }
                ]
            },
            {
                "id": "pv_mod21_carry_out",
                "verb": "Carry out",
                "meaning": "Executar/Realizar uma tarefa ou pesquisa",
                "breakdown": {
                    "root": "Carry (carregar)",
                    "particle": "Out (para o fim)",
                    "type": "Separable"
                },
                "explanation": "Executar rigorosamente um plano, experimento, pesquisa ou instrução.",
                "examples": [
                    {
                        "sentence": "The team carried out extensive market research.",
                        "translation": "A equipe realizou uma extensa pesquisa de mercado."
                    },
                    {
                        "sentence": "He carried out the director's orders without hesitation.",
                        "translation": "Ele executou as ordens do diretor sem hesitar."
                    }
                ]
            },
            {
                "id": "pv_mod21_back_up_data",
                "verb": "Back up",
                "meaning": "Fazer cópia de segurança / Apoiar uma ideia",
                "breakdown": {
                    "root": "Back (trás/apoio)",
                    "particle": "Up (segurança)",
                    "type": "Separable"
                },
                "explanation": "Fazer cópia de arquivos de computador ou dar suporte moral/evidência a um colega.",
                "examples": [
                    {
                        "sentence": "Always back up your files before updating the software.",
                        "translation": "Sempre faça backup dos seus arquivos antes de atualizar o software."
                    },
                    {
                        "sentence": "My team backed me up during the proposal defense.",
                        "translation": "Minha equipe me apoiou durante a defesa da proposta."
                    }
                ]
            },
            {
                "id": "pv_mod21_roll_out",
                "verb": "Roll out",
                "meaning": "Lançar um produto ou sistema oficialmente",
                "breakdown": {
                    "root": "Roll (rolar)",
                    "particle": "Out (para o mercado)",
                    "type": "Separable"
                },
                "explanation": "Apresentar ou disponibilizar uma novidade tecnológica ou serviço para o mercado público.",
                "examples": [
                    {
                        "sentence": "The company plans to roll out the new software feature nationwide.",
                        "translation": "A empresa planeja lançar o novo recurso do software em todo o país."
                    },
                    {
                        "sentence": "The product rollout will happen in Q3.",
                        "translation": "O lançamento do produto ocorrerá no 3º trimestre."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "I'll ___ with the supplier tomorrow morning to confirm our shipment details.",
                "options": [
                    "touch base",
                    "roll out",
                    "carry out",
                    "bring up"
                ],
                "a": "touch base",
                "explanation": "'Touch base (with)' significa fazer um contato rápido para alinhamento profissional.",
                "type": "choice"
            },
            {
                "q": "Our engineering department is ready to ___ the new research experiment.",
                "options": [
                    "carry out",
                    "touch base",
                    "bring up",
                    "roll out"
                ],
                "a": "carry out",
                "explanation": "'Carry out' significa executar ou realizar uma tarefa/pesquisa técnica.",
                "type": "choice"
            },
            {
                "q": "Always remember to ___ your critical server files to prevent data loss.",
                "options": [
                    "back up",
                    "roll out",
                    "touch base",
                    "bring up"
                ],
                "a": "back up",
                "explanation": "'Back up' significa criar uma cópia de segurança dos dados.",
                "type": "choice"
            },
            {
                "q": "The company is preparing to ___ its latest flagship smartphone worldwide next month.",
                "options": [
                    "roll out",
                    "bring up",
                    "touch base",
                    "carry out"
                ],
                "a": "roll out",
                "explanation": "'Roll out' significa lançar oficialmente um produto ou sistema no mercado.",
                "type": "choice"
            },
            {
                "q": "Você deseja agendar uma rápida conversa de 5 minutos com o fornecedor para alinhar detalhes do pedido. O que propor?",
                "options": [
                    "I'd like to touch base with you tomorrow.",
                    "I'd like to roll out with you tomorrow.",
                    "I'd like to back up with you tomorrow.",
                    "I'd like to carry out with you tomorrow."
                ],
                "a": "I'd like to touch base with you tomorrow.",
                "explanation": "'Touch base (with)' é fazer um contato rápido de alinhamento.",
                "type": "choice"
            },
            {
                "q": "O departamento de pesquisa da empresa concluiu a fase teórica e vai executar os testes práticos. Eles vão:",
                "options": [
                    "Carry out the practical tests",
                    "Touch base the practical tests",
                    "Bring up the practical tests",
                    "Roll out the practical tests"
                ],
                "a": "Carry out the practical tests",
                "explanation": "'Carry out' é executar ou realizar uma tarefa/pesquisa.",
                "type": "choice"
            },
            {
                "q": "Qual o procedimento de segurança recomendado para os arquivos do servidor corporativo?",
                "options": [
                    "Back up all critical files daily",
                    "Roll out all critical files daily",
                    "Bring up all critical files daily",
                    "Touch base all critical files daily"
                ],
                "a": "Back up all critical files daily",
                "explanation": "'Back up' é criar cópias de segurança de dados.",
                "type": "choice"
            },
            {
                "q": "A multinacional está se preparando para lançar seu novo sistema operacional no mercado global no mês que vem. Ela vai:",
                "options": [
                    "Roll out the new system worldwide",
                    "Bring up the new system worldwide",
                    "Touch base the new system worldwide",
                    "Carry out the new system worldwide"
                ],
                "a": "Roll out the new system worldwide",
                "explanation": "'Roll out' é o lançamento oficial de um produto/sistema.",
                "type": "choice"
            },
            {
                "q": "Durante a reunião de conselho, o diretor decidiu mencionar a necessidade de cortes no orçamento. Ele resolveu:",
                "options": [
                    "Bring up the budget cuts during the meeting",
                    "Roll out the budget cuts during the meeting",
                    "Back up the budget cuts during the meeting",
                    "Touch base the budget cuts during the meeting"
                ],
                "a": "Bring up the budget cuts during the meeting",
                "explanation": "'Bring up' é trazer um assunto à tona em pauta.",
                "type": "choice"
            },
            {
                "q": "Após enviar uma proposta comercial a um cliente potencial, qual a ação recomendada após 2 dias para dar acompanhamento?",
                "options": [
                    "Follow up on the commercial proposal",
                    "Back up on the commercial proposal",
                    "Roll out on the commercial proposal",
                    "Carry out on the commercial proposal"
                ],
                "a": "Follow up on the commercial proposal",
                "explanation": "'Follow up (on)' é dar acompanhamento a um processo.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 22,
        "level": "B2",
        "title": "Module 22: Negotiation, Strategy & Rejection",
        "description": "Phrasal Verbs de negociações avançadas, ofertas, recusas diplomáticas e estratégias de mercado.",
        "items": [
            {
                "id": "pv_mod22_turn_down",
                "verb": "Turn down",
                "meaning": "Recusar uma proposta ou convite",
                "breakdown": {
                    "root": "Turn (mudar)",
                    "particle": "Down (para baixo)",
                    "type": "Separable"
                },
                "explanation": "Rejeitar formalmente uma oferta de emprego, proposta financeira ou pedido.",
                "examples": [
                    {
                        "sentence": "She turned down the job offer because the salary was too low.",
                        "translation": "Ela recusou a oferta de emprego porque o salário era muito baixo."
                    },
                    {
                        "sentence": "Why did you turn down their invitation?",
                        "translation": "Por que você recusou o convite deles?"
                    }
                ]
            },
            {
                "id": "pv_mod22_back_off",
                "verb": "Back off",
                "meaning": "Recuar em uma exigência / Dar um passo atrás",
                "breakdown": {
                    "root": "Back (trás)",
                    "particle": "Off (afastar)",
                    "type": "Inseparable"
                },
                "explanation": "Ceder ou afastar-se de uma postura de pressão em negociações agressivas.",
                "examples": [
                    {
                        "sentence": "The union backed off from their strike threat.",
                        "translation": "O sindicato recuou de sua ameaça de greve."
                    },
                    {
                        "sentence": "Tell the hostile investor to back off.",
                        "translation": "Diga ao investidor hostil para recuar."
                    }
                ]
            },
            {
                "id": "pv_mod22_stand_firm",
                "verb": "Stand firm / Stand ground",
                "meaning": "Manter-se firme na negociação sem ceder",
                "breakdown": {
                    "root": "Stand (permanecer)",
                    "particle": "Firm (firme)",
                    "type": "Inseparable"
                },
                "explanation": "Manter a posição negociada apesar de fortes pressões externas.",
                "examples": [
                    {
                        "sentence": "Our team stood firm on the price terms.",
                        "translation": "Nossa equipe manteve-se firme nos termos de preço."
                    },
                    {
                        "sentence": "You must stand your ground during negotiations.",
                        "translation": "Você deve manter a sua posição com firmeza durante as negociações."
                    }
                ]
            },
            {
                "id": "pv_mod22_weigh_up",
                "verb": "Weigh up",
                "meaning": "Ponderar prós e contras de uma decisão",
                "breakdown": {
                    "root": "Weigh (pesar)",
                    "particle": "Up (cuidadosamente)",
                    "type": "Separable"
                },
                "explanation": "Avaliar detalhadamente vantagens e desvantagens antes de optar.",
                "examples": [
                    {
                        "sentence": "We need to weigh up the risks against the benefits.",
                        "translation": "Precisamos ponderar os riscos em relação aos benefícios."
                    },
                    {
                        "sentence": "She is weighing up her career options.",
                        "translation": "Ela está ponderando as opções de carreira dela."
                    }
                ]
            },
            {
                "id": "pv_mod22_compromise_on",
                "verb": "Compromise on",
                "meaning": "Fazer concessões mútuas para fechar acordo",
                "breakdown": {
                    "root": "Compromise (conciliar)",
                    "particle": "On (sobre)",
                    "type": "Inseparable"
                },
                "explanation": "Ceder em alguns pontos para chegar a um consenso benéfico para ambas as partes.",
                "examples": [
                    {
                        "sentence": "Both parties had to compromise on the final price.",
                        "translation": "Ambas as partes tiveram que fazer concessões no preço final."
                    },
                    {
                        "sentence": "We cannot compromise on product quality.",
                        "translation": "Não podemos fazer concessões na qualidade do produto."
                    }
                ]
            },
            {
                "id": "pv_mod22_hammer_out",
                "verb": "Hammer out",
                "meaning": "Chegar a um acordo após longas discussões",
                "breakdown": {
                    "root": "Hammer (martelar)",
                    "particle": "Out (forjar resultado)",
                    "type": "Separable"
                },
                "explanation": "Forjar e finalizar os termos de um contrato difícil após horas de debates.",
                "examples": [
                    {
                        "sentence": "Lawyers managed to hammer out a settlement agreement.",
                        "translation": "Advogados conseguiram forjar e finalizar um acordo de conciliação."
                    },
                    {
                        "sentence": "They worked late into the night to hammer out the deal.",
                        "translation": "Eles trabalharam até tarde para fechar os termos do negócio."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "The candidate decided to ___ the job offer because the salary was too low.",
                "options": [
                    "turn down",
                    "hammer out",
                    "back off",
                    "stand firm"
                ],
                "a": "turn down",
                "explanation": "'Turn down' significa recusar ou rejeitar uma proposta ou convite.",
                "type": "choice"
            },
            {
                "q": "Before launching the project, we must carefully ___ the potential risks and benefits.",
                "options": [
                    "weigh up",
                    "turn down",
                    "back off",
                    "hammer out"
                ],
                "a": "weigh up",
                "explanation": "'Weigh up' significa ponderar ou avaliar prós e contras.",
                "type": "choice"
            },
            {
                "q": "After negotiating for twelve straight hours, the executives managed to ___ an agreement.",
                "options": [
                    "hammer out",
                    "turn down",
                    "back off",
                    "stand firm"
                ],
                "a": "hammer out",
                "explanation": "'Hammer out' é chegar a um acordo sólido após intensas negociações.",
                "type": "choice"
            },
            {
                "q": "The negotiator warned the union leader to ___ and reduce aggressive demands.",
                "options": [
                    "back off",
                    "hammer out",
                    "turn down",
                    "weigh up"
                ],
                "a": "back off",
                "explanation": "'Back off' significa recuar ou diminuir a pressão numa exigência.",
                "type": "choice"
            },
            {
                "q": "A empresa recebeu uma oferta de compra muito abaixo do valor de mercado e decidiu recusá-la imediatamente. Ela resolveu:",
                "options": [
                    "Turn down the low offer",
                    "Hammer out the low offer",
                    "Back off the low offer",
                    "Stand firm the low offer"
                ],
                "a": "Turn down the low offer",
                "explanation": "'Turn down' é recusar ou rejeitar uma proposta.",
                "type": "choice"
            },
            {
                "q": "Antes de fechar um grande investimento internacional, a diretoria precisa ponderar os prós e contras com cautela. Ela deve:",
                "options": [
                    "Weigh up the potential risks and benefits",
                    "Turn down the potential risks and benefits",
                    "Back off the potential risks and benefits",
                    "Hammer out the potential risks and benefits"
                ],
                "a": "Weigh up the potential risks and benefits",
                "explanation": "'Weigh up' é avaliar e ponderar prós e contras.",
                "type": "choice"
            },
            {
                "q": "Após doze horas ininterruptas de negociação, os executivos forjaram um acordo definitivo. Como dizer?",
                "options": [
                    "They managed to hammer out a contract.",
                    "They managed to turn down a contract.",
                    "They managed to back off a contract.",
                    "They managed to weigh up a contract."
                ],
                "a": "They managed to hammer out a contract.",
                "explanation": "'Hammer out' é chegar a um acordo após árdua negociação.",
                "type": "choice"
            },
            {
                "q": "O mediador sugeriu que o sindicato reduzisse suas exigências agressivas para permitir o avanço do diálogo. O conselho foi:",
                "options": [
                    "Back off and reduce harsh demands",
                    "Hammer out and reduce harsh demands",
                    "Turn down and reduce harsh demands",
                    "Weigh up and reduce harsh demands"
                ],
                "a": "Back off and reduce harsh demands",
                "explanation": "'Back off' é recuar ou diminuir a pressão numa negociação.",
                "type": "choice"
            },
            {
                "q": "Se a sua empresa se recusa a ceder no preço mínimo estipulado durante uma rodada de compras, vocês decidiram:",
                "options": [
                    "Stand firm on the agreed price",
                    "Back off on the agreed price",
                    "Turn down on the agreed price",
                    "Compromise off on the agreed price"
                ],
                "a": "Stand firm on the agreed price",
                "explanation": "'Stand firm / stand ground' é manter-se firme sem ceder.",
                "type": "choice"
            },
            {
                "q": "Quando duas partes envolvidas em um litígio fazem concessões mútuas para alcançar um consenso pacificamente, elas decidem:",
                "options": [
                    "Compromise on key issues",
                    "Hammer out on key issues",
                    "Back off on key issues",
                    "Turn down on key issues"
                ],
                "a": "Compromise on key issues",
                "explanation": "'Compromise on' é fazer concessões recíprocas.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 23,
        "level": "B2",
        "title": "Module 23: Finance, Markets & Corporate Strategy",
        "description": "Phrasal Verbs de finanças empresariais, investimentos, balanços e mercado de capitais.",
        "items": [
            {
                "id": "pv_mod23_bail_out",
                "verb": "Bail out",
                "meaning": "Socorrer financeiramente uma empresa prestes a falir",
                "breakdown": {
                    "root": "Bail (resgatar)",
                    "particle": "Out (fora da crise)",
                    "type": "Separable"
                },
                "explanation": "Injetar capital financeiro para salvar uma instituição em colapso.",
                "examples": [
                    {
                        "sentence": "The government decided to bail out the struggling bank.",
                        "translation": "O governo decidiu socorrer financeiramente o banco em crise."
                    },
                    {
                        "sentence": "Taxpayers shouldn't have to bail out mismanaged corporations.",
                        "translation": "Contribuintes não deveriam ter que resgatar corporações mal geridas."
                    }
                ]
            },
            {
                "id": "pv_mod23_write_off",
                "verb": "Write off",
                "meaning": "Dar um débito/dívida como perdido no balanço",
                "breakdown": {
                    "root": "Write (escrever)",
                    "particle": "Off (baixa)",
                    "type": "Separable"
                },
                "explanation": "Reconhecer contabilmente que uma dívida não será recuperada.",
                "examples": [
                    {
                        "sentence": "The company wrote off $2 million in bad debts.",
                        "translation": "A empresa deu baixa em US$ 2 milhões em dívidas perdidas."
                    },
                    {
                        "sentence": "Don't write off that investment just yet.",
                        "translation": "Não dê esse investimento como perdido ainda."
                    }
                ]
            },
            {
                "id": "pv_mod23_cash_in_on",
                "verb": "Cash in on",
                "meaning": "Lucrar em cima de uma oportunidade ou tendência",
                "breakdown": {
                    "root": "Cash (dinheiro)",
                    "particle": "In on (tirar proveito)",
                    "type": "Inseparable"
                },
                "explanation": "Aproveitar comercialmente um momento para obter altos ganhos financeiros.",
                "examples": [
                    {
                        "sentence": "Many tech firms cashed in on the demand for remote tools.",
                        "translation": "Muitas empresas de tecnologia lucraram em cima da demanda por ferramentas remotas."
                    },
                    {
                        "sentence": "He is trying to cash in on his sudden fame.",
                        "translation": "Ele está tentando lucrar em cima da sua fama repentina."
                    }
                ]
            },
            {
                "id": "pv_mod23_scale_up",
                "verb": "Scale up",
                "meaning": "Expandir o tamanho/escala de operações de um negócio",
                "breakdown": {
                    "root": "Scale (escala)",
                    "particle": "Up (ampliar)",
                    "type": "Separable"
                },
                "explanation": "Aumentar a capacidade produtiva e de mercado de uma startup ou fábrica.",
                "examples": [
                    {
                        "sentence": "The startup received funding to scale up its production.",
                        "translation": "A startup recebeu financiamento para expandir a sua produção em escala."
                    },
                    {
                        "sentence": "We need to scale up our marketing efforts globally.",
                        "translation": "Precisamos ampliar nossos esforços de marketing globalmente."
                    }
                ]
            },
            {
                "id": "pv_mod23_branch_out",
                "verb": "Branch out",
                "meaning": "Diversificar ramos de atuação de uma empresa",
                "breakdown": {
                    "root": "Branch (ramificar)",
                    "particle": "Out (expansão)",
                    "type": "Inseparable"
                },
                "explanation": "Expandir os negócios para novos setores ou linhas de produtos não tradicionais.",
                "examples": [
                    {
                        "sentence": "The publisher is branching out into digital audiobooks.",
                        "translation": "A editora está se diversificando para o ramo de audiolivros digitais."
                    },
                    {
                        "sentence": "It is risky to branch out into markets you don't know.",
                        "translation": "É arriscado se diversificar para mercados que você não conhece."
                    }
                ]
            },
            {
                "id": "pv_mod23_float_on",
                "verb": "Float on / Go public",
                "meaning": "Lançar ações na bolsa de valores (abrir capital)",
                "breakdown": {
                    "root": "Float (flutuar)",
                    "particle": "On (no mercado)",
                    "type": "Separable"
                },
                "explanation": "Realizar uma Oferta Pública Inicial (IPO) de ações do mercado financeiro.",
                "examples": [
                    {
                        "sentence": "The company was floated on the London Stock Exchange.",
                        "translation": "A empresa teve suas ações lançadas na Bolsa de Valores de Londres."
                    },
                    {
                        "sentence": "They plan to float the firm on NASDAQ next year.",
                        "translation": "Eles planejam abrir o capital da empresa na NASDAQ no ano que vem."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "The central bank had to interventionally ___ the failing financial institution.",
                "options": [
                    "bail out",
                    "branch out",
                    "write off",
                    "scale up"
                ],
                "a": "bail out",
                "explanation": "'Bail out' significa prestar socorro financeiro a uma empresa em crise.",
                "type": "choice"
            },
            {
                "q": "The tech startup intends to ___ its operations to meet surging global demand.",
                "options": [
                    "scale up",
                    "bail out",
                    "write off",
                    "float on"
                ],
                "a": "scale up",
                "explanation": "'Scale up' é expandir o tamanho ou volume de produção/operações.",
                "type": "choice"
            },
            {
                "q": "Unscrupulous investors tried to ___ the sudden surge in commodity prices.",
                "options": [
                    "cash in on",
                    "branch out",
                    "scale up",
                    "write off"
                ],
                "a": "cash in on",
                "explanation": "'Cash in on' significa tirar proveito/lucrar em cima de uma oportunidade.",
                "type": "choice"
            },
            {
                "q": "The board of directors decided to ___ into renewable energy technologies.",
                "options": [
                    "branch out",
                    "bail out",
                    "scale up",
                    "write off"
                ],
                "a": "branch out",
                "explanation": "'Branch out' é diversificar áreas ou ramos de negócios.",
                "type": "choice"
            },
            {
                "q": "O governo precisou intervir emergencialmente com recursos públicos para salvar o banco da falência. O governo resolveu:",
                "options": [
                    "Bail out the failing bank",
                    "Branch out the failing bank",
                    "Write off the failing bank",
                    "Scale up the failing bank"
                ],
                "a": "Bail out the failing bank",
                "explanation": "'Bail out' é prestar socorro financeiro a empresa em crise.",
                "type": "choice"
            },
            {
                "q": "Com a altíssima demanda pelo novo produto, a fábrica precisa ampliar rapidamente sua escala de produção. Ela vai:",
                "options": [
                    "Scale up operations to meet demand",
                    "Bail out operations to meet demand",
                    "Write off operations to meet demand",
                    "Float on operations to meet demand"
                ],
                "a": "Scale up operations to meet demand",
                "explanation": "'Scale up' é expandir o tamanho de operações de um negócio.",
                "type": "choice"
            },
            {
                "q": "Investidores oportunistas tentaram lucrar em cima da súbita alta do preço das commodities. Eles tentaram:",
                "options": [
                    "Cash in on the market surge",
                    "Branch out the market surge",
                    "Scale up the market surge",
                    "Write off the market surge"
                ],
                "a": "Cash in on the market surge",
                "explanation": "'Cash in on' é tirar proveito/lucrar com uma oportunidade.",
                "type": "choice"
            },
            {
                "q": "A empresa de tecnologia decidiu diversificar seus negócios e entrar no setor de energia solar. Ela resolveu:",
                "options": [
                    "Branch out into solar energy",
                    "Bail out into solar energy",
                    "Scale up into solar energy",
                    "Write off into solar energy"
                ],
                "a": "Branch out into solar energy",
                "explanation": "'Branch out' é diversificar ramos de atuação.",
                "type": "choice"
            },
            {
                "q": "Após confirmar a falência de um cliente devedor, a empresa deu a dívida como perda irrecuperável no balanço. Ela fez o:",
                "options": [
                    "Write off of the unpaid debt",
                    "Scale up of the unpaid debt",
                    "Bail out of the unpaid debt",
                    "Cash in of the unpaid debt"
                ],
                "a": "Write off of the unpaid debt",
                "explanation": "'Write off' é abater/dar um débito como perdido na contabilidade.",
                "type": "choice"
            },
            {
                "q": "A startup de tecnologia abriu capital e lançou suas primeiras ações na bolsa de valores. Ela decidiu:",
                "options": [
                    "Go public on the stock market",
                    "Bail out on the stock market",
                    "Write off on the stock market",
                    "Branch out on the stock market"
                ],
                "a": "Go public on the stock market",
                "explanation": "'Go public / float on' é abrir capital na bolsa de valores.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 24,
        "level": "B2",
        "title": "Module 24: Advanced Figurative Verbs & Nuances",
        "description": "Phrasal Verbs de conotação abstrata, nuances figurativas e análise conceitual.",
        "items": [
            {
                "id": "pv_mod24_stem_from",
                "verb": "Stem from",
                "meaning": "Derivar de / Ter sua causa raiz em",
                "breakdown": {
                    "root": "Stem (haste/caule)",
                    "particle": "From (de)",
                    "type": "Inseparable"
                },
                "explanation": "Explicar a origem primária de um comportamento ou problema social.",
                "examples": [
                    {
                        "sentence": "His lack of confidence stems from childhood experiences.",
                        "translation": "A falta de confiança dele deriva de experiências da infância."
                    },
                    {
                        "sentence": "Many economic issues stem from poor regulation.",
                        "translation": "Muitos problemas econômicos derivam de má regulamentação."
                    }
                ]
            },
            {
                "id": "pv_mod24_give_rise_to",
                "verb": "Give rise to",
                "meaning": "Dar origem a / Desencadear",
                "breakdown": {
                    "root": "Give",
                    "particle": "Rise to",
                    "type": "Inseparable"
                },
                "explanation": "Causar o aparecimento de novas circunstâncias ou controvérsias.",
                "examples": [
                    {
                        "sentence": "The new tax policy gave rise to widespread public protests.",
                        "translation": "A nova política fiscal deu origem a protestos públicos generalizados."
                    },
                    {
                        "sentence": "Scientific breakthroughs give rise to new ethical questions.",
                        "translation": "Avanços científicos dão origem a novas questões éticas."
                    }
                ]
            },
            {
                "id": "pv_mod24_serve_as",
                "verb": "Serve as (a catalyst)",
                "meaning": "Servir como (um catalisador / elemento impulsionador)",
                "breakdown": {
                    "root": "Serve (servir)",
                    "particle": "As (como)",
                    "type": "Inseparable"
                },
                "explanation": "Atuar no papel de um fator acelerador de transformações.",
                "examples": [
                    {
                        "sentence": "The crisis served as a catalyst for political reform.",
                        "translation": "A crise serviu como um catalisador para a reforma política."
                    },
                    {
                        "sentence": "This document serves as proof of ownership.",
                        "translation": "Este documento serve como prova de propriedade."
                    }
                ]
            },
            {
                "id": "pv_mod24_fall_short_of",
                "verb": "Fall short of",
                "meaning": "Ficar aquém de (metas/expectativas)",
                "breakdown": {
                    "root": "Fall (cair)",
                    "particle": "Short of (curto de)",
                    "type": "Inseparable"
                },
                "explanation": "Não atingir um padrão ou objetivo numérico previamente exigido.",
                "examples": [
                    {
                        "sentence": "The company's quarterly revenue fell short of target by 5%.",
                        "translation": "A receita trimestral da empresa ficou 5% aquém da meta."
                    },
                    {
                        "sentence": "His performance fell short of expectations.",
                        "translation": "O desempenho dele ficou aquém das expectativas."
                    }
                ]
            },
            {
                "id": "pv_mod24_single_out",
                "verb": "Single out",
                "meaning": "Destacar / Selecionar alguém individualmente",
                "breakdown": {
                    "root": "Single (único)",
                    "particle": "Out (para fora)",
                    "type": "Separable"
                },
                "explanation": "Separar uma pessoa ou item de um grupo para elogiar ou criticar.",
                "examples": [
                    {
                        "sentence": "The teacher singled out John for his excellent essay.",
                        "translation": "O professor destacou o John por sua excelente redação."
                    },
                    {
                        "sentence": "Why do you always single me out for criticism?",
                        "translation": "Por que você sempre me escolhe para criticar?"
                    }
                ]
            },
            {
                "id": "pv_mod24_gloss_over",
                "verb": "Gloss over",
                "meaning": "Passar por cima de um erro / Encobrir superficiavelmente",
                "breakdown": {
                    "root": "Gloss (brilho)",
                    "particle": "Over (sobre)",
                    "type": "Separable"
                },
                "explanation": "Tratar um assunto sério de forma superficial para esconder falhas.",
                "examples": [
                    {
                        "sentence": "The report glossed over the security vulnerabilities.",
                        "translation": "O relatório passou por cima das vulnerabilidades de segurança."
                    },
                    {
                        "sentence": "Don't try to gloss over your mistakes.",
                        "translation": "Não tente encobrir os seus erros de maneira superficial."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "Most of the current conflicts in the organization ___ poor internal communication.",
                "options": [
                    "stem from",
                    "single out",
                    "gloss over",
                    "fall short of"
                ],
                "a": "stem from",
                "explanation": "'Stem from' significa ter origem ou causa raiz em algo.",
                "type": "choice"
            },
            {
                "q": "The sudden policy change could ___ widespread public protests.",
                "options": [
                    "give rise to",
                    "fall short of",
                    "gloss over",
                    "single out"
                ],
                "a": "give rise to",
                "explanation": "'Give rise to' significa desencadear ou dar origem a uma reação.",
                "type": "choice"
            },
            {
                "q": "The quarterly revenue figures unfortunately ___ the board's high expectations.",
                "options": [
                    "fell short of",
                    "glossed over",
                    "stemmed from",
                    "singled out"
                ],
                "a": "fell short of",
                "explanation": "'Fall short of' significa ficar aquém das metas ou expectativas.",
                "type": "choice"
            },
            {
                "q": "In his speech, the CEO chose to ___ one engineer for her outstanding contribution.",
                "options": [
                    "single out",
                    "gloss over",
                    "stem from",
                    "give rise to"
                ],
                "a": "single out",
                "explanation": "'Single out' significa destacar ou selecionar um indivíduo do grupo.",
                "type": "choice"
            },
            {
                "q": "A maioria dos conflitos internos na equipe deriva diretamente da falta de comunicação transparente. Os problemas:",
                "options": [
                    "Stem from poor communication",
                    "Single out poor communication",
                    "Gloss over poor communication",
                    "Fall short of poor communication"
                ],
                "a": "Stem from poor communication",
                "explanation": "'Stem from' é ter sua origem ou causa raiz em algo.",
                "type": "choice"
            },
            {
                "q": "A mudança repentina na legislação trabalhista pode desencadear uma onda de protestos sindicais. A mudança pode:",
                "options": [
                    "Give rise to widespread protests",
                    "Fall short of widespread protests",
                    "Gloss over widespread protests",
                    "Single out widespread protests"
                ],
                "a": "Give rise to widespread protests",
                "explanation": "'Give rise to' é dar origem a ou desencadear.",
                "type": "choice"
            },
            {
                "q": "Infelizmente, os números de vendas deste trimestre ficaram aquém das expectativas da diretoria. Os resultados:",
                "options": [
                    "Fell short of board expectations",
                    "Glossed over board expectations",
                    "Stemmed from board expectations",
                    "Singled out board expectations"
                ],
                "a": "Fell short of board expectations",
                "explanation": "'Fall short of' é ficar aquém de metas estipuladas.",
                "type": "choice"
            },
            {
                "q": "No seu discurso anual, o presidente fez questão de destacar individualmente o engenheiro pelo projeto. Ele resolveu:",
                "options": [
                    "Single out the lead engineer for praise",
                    "Gloss over the lead engineer for praise",
                    "Stem from the lead engineer for praise",
                    "Give rise to the lead engineer for praise"
                ],
                "a": "Single out the lead engineer for praise",
                "explanation": "'Single out' é destacar/selecionar alguém de um grupo.",
                "type": "choice"
            },
            {
                "q": "O relatório de auditoria tentou encobrir levianamente os erros contábeis sem dar a devida atenção. O relatório tentou:",
                "options": [
                    "Gloss over accounting errors",
                    "Single out accounting errors",
                    "Stem from accounting errors",
                    "Give rise to accounting errors"
                ],
                "a": "Gloss over accounting errors",
                "explanation": "'Gloss over' é passar por cima de erros sem tratar com seriedade.",
                "type": "choice"
            },
            {
                "q": "A contratação do novo diretor serviu como elemento impulsionador para a modernização da empresa. Sua chegada:",
                "options": [
                    "Served as a catalyst for reform",
                    "Fell short of a catalyst for reform",
                    "Glossed over a catalyst for reform",
                    "Stemmed from a catalyst for reform"
                ],
                "a": "Served as a catalyst for reform",
                "explanation": "'Serve as a catalyst' é atuar como agente acelerador de mudanças.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 25,
        "level": "B2",
        "title": "Module 25: Diplomatic Communication & Persuasion",
        "description": "Phrasal Verbs para persuasão, gestão de conflitos interpessoais e diplomacia de alta gerência.",
        "items": [
            {
                "id": "pv_mod25_smooth_over",
                "verb": "Smooth over",
                "meaning": "Acalmar / Suavizar um mal-entendido ou atrito",
                "breakdown": {
                    "root": "Smooth (suave)",
                    "particle": "Over (sobre)",
                    "type": "Separable"
                },
                "explanation": "Tentar resolver divergências de forma conciliadora para manter a paz.",
                "examples": [
                    {
                        "sentence": "He tried to smooth over the disagreement between the two departments.",
                        "translation": "Ele tentou suavizar o desentendimento entre os dois departamentos."
                    },
                    {
                        "sentence": "Diplomats are working to smooth over relation issues.",
                        "translation": "Diplomatas estão trabalhando para suavizar conflitos relacionais."
                    }
                ]
            },
            {
                "id": "pv_mod25_talk_into",
                "verb": "Talk into",
                "meaning": "Convencer / Persuadir alguém a fazer algo",
                "breakdown": {
                    "root": "Talk (falar)",
                    "particle": "Into (para dentro)",
                    "type": "Separable"
                },
                "explanation": "Usar a fala persuasiva para fazer outra pessoa concordar com um plano.",
                "examples": [
                    {
                        "sentence": "She talked me into joining the new project.",
                        "translation": "Ela me convenceu a me juntar ao novo projeto."
                    },
                    {
                        "sentence": "Don't let them talk you into signing anything without reading.",
                        "translation": "Não deixe que eles te convençam a assinar nada sem ler."
                    }
                ]
            },
            {
                "id": "pv_mod25_soften_up",
                "verb": "Soften up",
                "meaning": "Amaciar alguém antes de fazer um pedido difícil",
                "breakdown": {
                    "root": "Soften (amolecer)",
                    "particle": "Up (completamente)",
                    "type": "Separable"
                },
                "explanation": "Tratar alguém com agrados ou elogios prévios para facilitar um favor.",
                "examples": [
                    {
                        "sentence": "They took the client to an expensive dinner to soften him up.",
                        "translation": "Eles levaram o cliente para um jantar caro para amaciá-lo."
                    },
                    {
                        "sentence": "He is being nice just to soften me up.",
                        "translation": "Ele está sendo gentil apenas para me amaciar."
                    }
                ]
            },
            {
                "id": "pv_mod25_win_over",
                "verb": "Win over",
                "meaning": "Conquistar a simpatia ou apoio de alguém hesitante",
                "breakdown": {
                    "root": "Win (ganhar)",
                    "particle": "Over (para o seu lado)",
                    "type": "Separable"
                },
                "explanation": "Converter a opinião desfavorável de uma pessoa ao seu lado.",
                "examples": [
                    {
                        "sentence": "His passionate presentation won over the skeptical investors.",
                        "translation": "Sua apresentação apaixonada conquistou o apoio dos investidores céticos."
                    },
                    {
                        "sentence": "It takes time to win over a hostile audience.",
                        "translation": "Leva tempo para conquistar a simpatia de um público hostil."
                    }
                ]
            },
            {
                "id": "pv_mod25_play_down",
                "verb": "Play down",
                "meaning": "Minimizar a gravidade de um problema em público",
                "breakdown": {
                    "root": "Play (jogar)",
                    "particle": "Down (para baixo)",
                    "type": "Separable"
                },
                "explanation": "Tentar fazer com que uma crise ou falha pareça menos importante do que é.",
                "examples": [
                    {
                        "sentence": "The spokesperson played down the impact of the data leak.",
                        "translation": "O porta-voz minimizou a gravidade do impacto do vazamento de dados."
                    },
                    {
                        "sentence": "Don't play down the seriousness of this situation.",
                        "translation": "Não minimize a gravidade desta situação."
                    }
                ]
            },
            {
                "id": "pv_mod25_iron_out",
                "verb": "Iron out",
                "meaning": "Eliminar pequenos detalhes ou divergências de um plano",
                "breakdown": {
                    "root": "Iron (passar a ferro)",
                    "particle": "Out (lisinho)",
                    "type": "Separable"
                },
                "explanation": "Resolver pendências menores e deixar um contrato ou estratégia impecável.",
                "examples": [
                    {
                        "sentence": "We need another meeting to iron out the remaining contract details.",
                        "translation": "Precisamos de outra reunião para eliminar os últimos detalhes do contrato."
                    },
                    {
                        "sentence": "They ironed out their differences and agreed to work together.",
                        "translation": "Eles resolveram suas divergências e concordaram em trabalhar juntos."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "The diplomat managed to ___ the political misunderstanding between the nations.",
                "options": [
                    "smooth over",
                    "talk into",
                    "soften up",
                    "play down"
                ],
                "a": "smooth over",
                "explanation": "'Smooth over' significa suavizar ou acalmar um atrito/mal-entendido.",
                "type": "choice"
            },
            {
                "q": "My colleague managed to ___ me ___ presenting the proposal to the board.",
                "options": [
                    "talk / into",
                    "smooth / over",
                    "play / down",
                    "iron / out"
                ],
                "a": "talk / into",
                "explanation": "'Talk into' significa persuadir/convencer alguém a fazer algo.",
                "type": "choice"
            },
            {
                "q": "Before asking for a budget increase, we should ___ the financial director with good news.",
                "options": [
                    "soften up",
                    "play down",
                    "iron out",
                    "talk into"
                ],
                "a": "soften up",
                "explanation": "'Soften up' significa amaciar/preparar alguém favoravelmente.",
                "type": "choice"
            },
            {
                "q": "Our team needs to ___ the final minor details of the contract before signing.",
                "options": [
                    "iron out",
                    "smooth over",
                    "soften up",
                    "talk into"
                ],
                "a": "iron out",
                "explanation": "'Iron out' significa alinhar/ajustar pequenos detalhes pendentes.",
                "type": "choice"
            },
            {
                "q": "O diplomata conseguiu acalmar e suavizar o mal-entendido político entre os dois ministros. Ele conseguiu:",
                "options": [
                    "Smooth over the political incident",
                    "Talk into the political incident",
                    "Soften up the political incident",
                    "Play down the political incident"
                ],
                "a": "Smooth over the political incident",
                "explanation": "'Smooth over' é acalmar ou suavizar atritos e mal-entendidos.",
                "type": "choice"
            },
            {
                "q": "Seu colega de trabalho conseguiu convencê-lo a apresentar o projeto no lugar dele. Ele conseguiu:",
                "options": [
                    "Talk me into presenting the project",
                    "Smooth me over presenting the project",
                    "Play me down presenting the project",
                    "Iron me out presenting the project"
                ],
                "a": "Talk me into presenting the project",
                "explanation": "'Talk into' é persuadir/convencer alguém a fazer algo.",
                "type": "choice"
            },
            {
                "q": "Antes de solicitar um aumento substancial de verba, o gerente resolveu amaciar o diretor com bons resultados. Ele quis:",
                "options": [
                    "Soften up the director first",
                    "Play down the director first",
                    "Iron out the director first",
                    "Talk into the director first"
                ],
                "a": "Soften up the director first",
                "explanation": "'Soften up' é amaciar/preparar alguém favoravelmente.",
                "type": "choice"
            },
            {
                "q": "Nossa equipe jurídica precisa eliminar as últimas divergências e detalhes pendentes da minuta do contrato. Precisamos:",
                "options": [
                    "Iron out the final details",
                    "Smooth over the final details",
                    "Soften up the final details",
                    "Talk into the final details"
                ],
                "a": "Iron out the final details",
                "explanation": "'Iron out' é ajustar/eliminar pequenos detalhes pendentes.",
                "type": "choice"
            },
            {
                "q": "O candidato discursou com habilidade e conseguiu conquistar o apoio de eleitores indecisos. Ele conseguiu:",
                "options": [
                    "Win over hesitant voters",
                    "Soften up hesitant voters",
                    "Play down hesitant voters",
                    "Talk into hesitant voters"
                ],
                "a": "Win over hesitant voters",
                "explanation": "'Win over' é conquistar a simpatia ou o apoio.",
                "type": "choice"
            },
            {
                "q": "O assessores de imprensa tentaram minimizar a gravidade do vazamento de dados perante os jornalistas. Eles tentaram:",
                "options": [
                    "Play down the leak severity",
                    "Iron out the leak severity",
                    "Soften up the leak severity",
                    "Talk into the leak severity"
                ],
                "a": "Play down the leak severity",
                "explanation": "'Play down' é minimizar a relevância/gravidade de um fato.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 26,
        "level": "B2",
        "title": "Module 26: Advanced Business & Leadership Idioms",
        "description": "Expressões idiomáticas avançadas de liderança corporativa, estratégia e tomada de decisões.",
        "items": [
            {
                "id": "pv_mod26_ahead_of_curve",
                "verb": "Ahead of the curve",
                "meaning": "À frente do seu tempo / Inovador em relação à concorrência",
                "breakdown": {
                    "root": "Ahead (à frente)",
                    "particle": "Of the curve (da curva)",
                    "type": "Idiom"
                },
                "explanation": "Estar mais avançado ou preparado do que os concorrentes do mercado.",
                "examples": [
                    {
                        "sentence": "To stay ahead of the curve, our company invests heavily in R&D.",
                        "translation": "Para ficar à frente da concorrência, nossa empresa investe pesado em P&D."
                    },
                    {
                        "sentence": "Her innovative ideas always keep her ahead of the curve.",
                        "translation": "As ideias inovadoras dela a mantêm sempre à frente do seu tempo."
                    }
                ]
            },
            {
                "id": "pv_mod26_ball_in_court",
                "verb": "The ball is in your court",
                "meaning": "A decisão/próximo passo é com você",
                "breakdown": {
                    "root": "Ball (bola)",
                    "particle": "In your court (na sua quadra)",
                    "type": "Idiom"
                },
                "explanation": "Metáfora do tênis para dizer que agora é a vez da outra pessoa agir.",
                "examples": [
                    {
                        "sentence": "We made our final offer; now the ball is in their court.",
                        "translation": "Fizemos nossa oferta final; agora a decisão é deles."
                    },
                    {
                        "sentence": "I've done all I can, the ball is in your court now.",
                        "translation": "Fiz tudo o que podia, o próximo passo é com você agora."
                    }
                ]
            },
            {
                "id": "pv_mod26_behind_scenes",
                "verb": "Behind the scenes",
                "meaning": "Bastidores / Nos bastidores (sem alarde público)",
                "breakdown": {
                    "root": "Behind (atrás)",
                    "particle": "The scenes (das cenas)",
                    "type": "Idiom"
                },
                "explanation": "Trabalho ou negociações feitas em ambiente reservado longe dos holofotes.",
                "examples": [
                    {
                        "sentence": "A lot of hard work happens behind the scenes in event management.",
                        "translation": "Muito trabalho duro acontece nos bastidores na gestão de eventos."
                    },
                    {
                        "sentence": "Diplomats worked behind the scenes to negotiate the release.",
                        "translation": "Diplomatas trabalharam nos bastidores para negociar a libertação."
                    }
                ]
            },
            {
                "id": "pv_mod26_raise_the_bar",
                "verb": "Raise the bar",
                "meaning": "Elevar o nível / Elevar os padrões de exigência",
                "breakdown": {
                    "root": "Raise (subir)",
                    "particle": "The bar (a barra)",
                    "type": "Idiom"
                },
                "explanation": "Aumentar os padrões de qualidade esperados para superar limites.",
                "examples": [
                    {
                        "sentence": "The new iPhone model really raised the bar for smartphone cameras.",
                        "translation": "O novo modelo de iPhone realmente elevou o nível para câmeras de celular."
                    },
                    {
                        "sentence": "Our team aims to raise the bar in customer service.",
                        "translation": "Nossa equipe visa elevar os padrões no atendimento ao cliente."
                    }
                ]
            },
            {
                "id": "pv_mod26_cutting_edge",
                "verb": "Cutting-edge / Game changer",
                "meaning": "Tecnologia de ponta / Algo que muda o jogo completamente",
                "breakdown": {
                    "root": "Cutting (corte)",
                    "particle": "Edge (aresta)",
                    "type": "Idiom"
                },
                "explanation": "Uso das tecnologias mais avançadas ou inovações revolucionárias.",
                "examples": [
                    {
                        "sentence": "This medical facility uses cutting-edge technology.",
                        "translation": "Este centro médico usa tecnologia de ponta."
                    },
                    {
                        "sentence": "The introduction of AI was a true game changer for our industry.",
                        "translation": "A introdução de IA foi algo que mudou as regras do jogo para nossa indústria."
                    }
                ]
            },
            {
                "id": "pv_mod26_touch_and_go",
                "verb": "Touch and go",
                "meaning": "Situação incerta / Na corda bamba com risco de falha",
                "breakdown": {
                    "root": "Touch (tocar)",
                    "particle": "And go (e ir)",
                    "type": "Idiom"
                },
                "explanation": "Momento crítico de risco em que o resultado positivo não é garantido.",
                "examples": [
                    {
                        "sentence": "The surgery was touch and go for a few hours, but he recovered.",
                        "translation": "A cirurgia esteve na corda bamba por algumas horas, mas ele se recuperou."
                    },
                    {
                        "sentence": "It was touch and go whether we would meet the project deadline.",
                        "translation": "Estava incerto se conseguiríamos cumprir o prazo do projeto."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "By investing heavily in AI early on, the company stayed ___.",
                "options": [
                    "ahead of the curve",
                    "behind the scenes",
                    "touch and go",
                    "raising the bar"
                ],
                "a": "ahead of the curve",
                "explanation": "'Ahead of the curve' significa estar à frente do tempo / ser inovador.",
                "type": "choice"
            },
            {
                "q": "We have submitted our best offer; now ___.",
                "options": [
                    "the ball is in your court",
                    "the bar is raised",
                    "it is behind the scenes",
                    "it is ahead of the curve"
                ],
                "a": "the ball is in your court",
                "explanation": "'The ball is in your court' significa que a decisão/próxima ação é sua.",
                "type": "choice"
            },
            {
                "q": "Much of the crucial diplomatic work happens quietly ___.",
                "options": [
                    "behind the scenes",
                    "ahead of the curve",
                    "touch and go",
                    "raising the bar"
                ],
                "a": "behind the scenes",
                "explanation": "'Behind the scenes' significa nos bastidores / sem alarde público.",
                "type": "choice"
            },
            {
                "q": "The surgeon said the patient's condition after surgery was ___ for a few hours.",
                "options": [
                    "touch and go",
                    "ahead of the curve",
                    "behind the scenes",
                    "cutting-edge"
                ],
                "a": "touch and go",
                "explanation": "'Touch and go' indica uma situação incerta ou arriscada.",
                "type": "choice"
            },
            {
                "q": "Ao investir pioneiramente em inteligência artificial há anos, a empresa manteve-se à frente dos concorrentes. Ela esteve:",
                "options": [
                    "Ahead of the curve in tech innovation",
                    "Behind the scenes in tech innovation",
                    "Touch and go in tech innovation",
                    "Raising the bar in tech innovation"
                ],
                "a": "Ahead of the curve in tech innovation",
                "explanation": "'Ahead of the curve' é estar à frente do tempo / ser inovador.",
                "type": "choice"
            },
            {
                "q": "Nós já enviamos nossa proposta comercial final; agora a decisão de fechar o negócio está com o cliente. Ou seja:",
                "options": [
                    "The ball is in the client's court",
                    "The bar is raised for the client",
                    "It is behind the scenes for the client",
                    "It is ahead of the curve for the client"
                ],
                "a": "The ball is in the client's court",
                "explanation": "'The ball is in your court' significa que o próximo passo é do outro.",
                "type": "choice"
            },
            {
                "q": "As negociações diplomáticas mais decisivas costumam acontecer discretamente nos bastidores. Elas ocorrem:",
                "options": [
                    "Behind the scenes",
                    "Ahead of the curve",
                    "Touch and go",
                    "Raising the bar"
                ],
                "a": "Behind the scenes",
                "explanation": "'Behind the scenes' é nos bastidores / sem alarde público.",
                "type": "choice"
            },
            {
                "q": "O estado de saúde do paciente após a cirurgia delicada permaneceu incerto e na corda bamba durante horas. Esteve:",
                "options": [
                    "Touch and go for several hours",
                    "Ahead of the curve for several hours",
                    "Behind the scenes for several hours",
                    "Cutting-edge for several hours"
                ],
                "a": "Touch and go for several hours",
                "explanation": "'Touch and go' é uma situação incerta ou arriscada.",
                "type": "choice"
            },
            {
                "q": "A nova política de qualidade da empresa elevou os padrões de exigência do mercado. Ela conseguiu:",
                "options": [
                    "Raise the bar for competitors",
                    "Touch and go for competitors",
                    "Behind the scenes for competitors",
                    "The ball in court for competitors"
                ],
                "a": "Raise the bar for competitors",
                "explanation": "'Raise the bar' é elevar o nível de exigência/qualidade.",
                "type": "choice"
            },
            {
                "q": "O lançamento desse novo smartphone dobrável foi considerado um marco disruptivo que muda o jogo. Foi um:",
                "options": [
                    "Game changer in the mobile industry",
                    "Touch and go in the mobile industry",
                    "Behind the scenes in the mobile industry",
                    "Raise the bar in the mobile industry"
                ],
                "a": "Game changer in the mobile industry",
                "explanation": "'Game changer / cutting-edge' é uma inovação revolucionária.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 27,
        "level": "B2",
        "title": "Module 27: Native Slang & Informal Nuances",
        "description": "Gírias nativas e marcadores de informalidade usados na cultura moderna e mídias sociais.",
        "items": [
            {
                "id": "pv_mod27_binge_watch",
                "verb": "Binge-watch",
                "meaning": "Maratonar séries ou filmes sem parar",
                "breakdown": {
                    "root": "Binge (excesso)",
                    "particle": "Watch (assistir)",
                    "type": "Slang"
                },
                "explanation": "Assistir a múltiplos episódios de uma série de TV de uma só vez.",
                "examples": [
                    {
                        "sentence": "I binge-watched the entire season of Stranger Things in one weekend.",
                        "translation": "Eu maratonei a temporada inteira de Stranger Things em um único fim de semana."
                    },
                    {
                        "sentence": "Do you like to binge-watch series on Netflix?",
                        "translation": "Você gosta de maratonar séries na Netflix?"
                    }
                ]
            },
            {
                "id": "pv_mod27_catch_on_slang",
                "verb": "Catch on",
                "meaning": "Virar moda / Entender uma piada sutil",
                "breakdown": {
                    "root": "Catch (pegar)",
                    "particle": "On (em frente)",
                    "type": "Inseparable"
                },
                "explanation": "Tornar-se muito popular ou perceber o sentido de algo após um tempo.",
                "examples": [
                    {
                        "sentence": "This new social media trend is catching on quickly among teenagers.",
                        "translation": "Esta nova tendência de rede social está virando moda rapidamente entre os adolescentes."
                    },
                    {
                        "sentence": "He finally caught on to the joke.",
                        "translation": "Ele finalmente entendeu o sentido da piada."
                    }
                ]
            },
            {
                "id": "pv_mod27_bail_on",
                "verb": "Bail on",
                "meaning": "Dar o cano em alguém / Furar um compromisso",
                "breakdown": {
                    "root": "Bail (abandonar)",
                    "particle": "On (alguém)",
                    "type": "Inseparable"
                },
                "explanation": "Desistir de um encontro combinado com amigos na última hora.",
                "examples": [
                    {
                        "sentence": "I can't believe he bailed on us at the last minute!",
                        "translation": "Não acredito que ele deu o cano na gente no último minuto!"
                    },
                    {
                        "sentence": "Don't bail on me tonight, we had plans!",
                        "translation": "Não fure comigo hoje à noite, nós tínhamos planos!"
                    }
                ]
            },
            {
                "id": "pv_mod27_chill_out",
                "verb": "Chill out",
                "meaning": "Relaxar / Ficar de boa",
                "breakdown": {
                    "root": "Chill (esfriar)",
                    "particle": "Out (completamente)",
                    "type": "Inseparable"
                },
                "explanation": "Acalmar-se ou passar tempo descansando sem estresse.",
                "examples": [
                    {
                        "sentence": "Chill out! Everything is going to be fine.",
                        "translation": "Relaxe / Fique de boa! Tudo vai ficar bem."
                    },
                    {
                        "sentence": "We spent Sunday chilling out by the pool.",
                        "translation": "Passamos o domingo relaxando à beira da piscina."
                    }
                ]
            },
            {
                "id": "pv_mod27_flake_out",
                "verb": "Flake out / Flake",
                "meaning": "Ser uma pessoa não confiável que sempre fura compromissos",
                "breakdown": {
                    "root": "Flake (lasca)",
                    "particle": "Out (fora)",
                    "type": "Inseparable"
                },
                "explanation": "Ação de alguém que constantemente cancela planos em cima da hora.",
                "examples": [
                    {
                        "sentence": "She always flakes out when we plan a trip.",
                        "translation": "Ela sempre fura quando planejamos uma viagem."
                    },
                    {
                        "sentence": "He is so unreliable, a total flaker.",
                        "translation": "Ele é tão pouco confiável, fura todos os compromissos."
                    }
                ]
            },
            {
                "id": "pv_mod27_hyped_up",
                "verb": "Hyped up",
                "meaning": "Empolgado / Entusiasmado ao extremo",
                "breakdown": {
                    "root": "Hype (euforia)",
                    "particle": "Up (elevado)",
                    "type": "Slang"
                },
                "explanation": "Estar em estado de grande expectativa e energia por um evento futuro.",
                "examples": [
                    {
                        "sentence": "The fans are hyped up for the new album release.",
                        "translation": "Os fãs estão eufóricos/empolgados para o lançamento do novo álbum."
                    },
                    {
                        "sentence": "Don't get too hyped up before knowing the details.",
                        "translation": "Não fique eufórico demais antes de saber os detalhes."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "During the rainy weekend, we decided to ___ the entire new season of the show.",
                "options": [
                    "binge-watch",
                    "bail on",
                    "flake out",
                    "chill out"
                ],
                "a": "binge-watch",
                "explanation": "'Binge-watch' significa maratonar vários episódios de série seguidos.",
                "type": "choice"
            },
            {
                "q": "It took a few months, but the fashion trend finally began to ___ among teenagers.",
                "options": [
                    "catch on",
                    "bail on",
                    "flake out",
                    "binge-watch"
                ],
                "a": "catch on",
                "explanation": "'Catch on' significa virar moda / pegar entre o público.",
                "type": "choice"
            },
            {
                "q": "Don't ___ me tonight! We bought the movie tickets three days ago.",
                "options": [
                    "bail on",
                    "chill out",
                    "binge-watch",
                    "catch on"
                ],
                "a": "bail on",
                "explanation": "'Bail on' significa dar o cano ou furar com alguém em um compromisso.",
                "type": "choice"
            },
            {
                "q": "After taking his final exam, he just wanted to stay home and ___.",
                "options": [
                    "chill out",
                    "bail on",
                    "flake out",
                    "binge-watch"
                ],
                "a": "chill out",
                "explanation": "'Chill out' significa relaxar e ficar descontraído.",
                "type": "choice"
            },
            {
                "q": "No fim de semana chuvoso, o casal resolveu maratonar todos os episódios da nova temporada de uma série. Eles decidiram:",
                "options": [
                    "Binge-watch the entire series",
                    "Bail on the entire series",
                    "Flake out the entire series",
                    "Chill out the entire series"
                ],
                "a": "Binge-watch the entire series",
                "explanation": "'Binge-watch' é maratonar vários episódios de uma vez.",
                "type": "choice"
            },
            {
                "q": "A nova gíria usada na internet levou alguns meses, mas acabou virando moda entre os jovens. A gíria conseguiu:",
                "options": [
                    "Catch on among teenagers",
                    "Bail on among teenagers",
                    "Flake out among teenagers",
                    "Binge-watch among teenagers"
                ],
                "a": "Catch on among teenagers",
                "explanation": "'Catch on' é virar moda / pegar entre o público.",
                "type": "choice"
            },
            {
                "q": "Você comprou o ingresso do show com antecedência e seu amigo deu o cano na última hora. O que ele fez?",
                "options": [
                    "He bailed on me at the last minute.",
                    "He chilled out on me at the last minute.",
                    "He caught on me at the last minute.",
                    "He binge-watched on me at the last minute."
                ],
                "a": "He bailed on me at the last minute.",
                "explanation": "'Bail on' é dar o cano ou furar um compromisso.",
                "type": "choice"
            },
            {
                "q": "Após uma semana exaustiva de exames finais, o estudante só queria ficar em casa e relaxar de boa. Ele queria:",
                "options": [
                    "Chill out at home",
                    "Bail on at home",
                    "Flake out at home",
                    "Binge-watch at home"
                ],
                "a": "Chill out at home",
                "explanation": "'Chill out' é relaxar e ficar de boa.",
                "type": "choice"
            },
            {
                "q": "Como qualificar em tom informal uma pessoa não confiável que sempre fura compromissos assumidos?",
                "options": [
                    "He is a total flake.",
                    "He is a total hype.",
                    "He is a total binge.",
                    "He is a total chill."
                ],
                "a": "He is a total flake.",
                "explanation": "'Flake / flake out' é a pessoa furona.",
                "type": "choice"
            },
            {
                "q": "Os fãs da banda estão extremamente empolgados e entusiasmados com o anúncio da turnê. Eles estão:",
                "options": [
                    "Hyped up about the tour",
                    "Bailed on about the tour",
                    "Chilled out about the tour",
                    "Flaked out about the tour"
                ],
                "a": "Hyped up about the tour",
                "explanation": "'Hyped up' é estar extremamente empolgado com algo.",
                "type": "choice"
            }
        ]
    },
    {
        "module": 28,
        "level": "B2",
        "title": "Module 28: B2 Master Mastery - Literature & Media Nuances",
        "description": "Módulo Final Capstone de Maestria B2 integrando análise de textos, figuras estilísticas e nuances narrativas.",
        "items": [
            {
                "id": "pv_mod28_convey_sense",
                "verb": "Convey a sense of",
                "meaning": "Transmitir a sensação / atmosfera de algo no texto",
                "breakdown": {
                    "root": "Convey (transmitir)",
                    "particle": "A sense of (uma sensação de)",
                    "type": "Mastery"
                },
                "explanation": "Utilizar palavras para evocar um sentimento de saudade, tensão ou alegria na literatura.",
                "examples": [
                    {
                        "sentence": "The author uses vivid descriptions to convey a sense of solitude.",
                        "translation": "O autor usa descrições vivas para transmitir uma sensação de solidão."
                    },
                    {
                        "sentence": "The music conveys a sense of freedom.",
                        "translation": "A música transmite uma sensação de liberdade."
                    }
                ]
            },
            {
                "id": "pv_mod28_underlying_theme",
                "verb": "Underlying theme",
                "meaning": "Tema subjacente / Mensagem nas entrelinhas de uma obra",
                "breakdown": {
                    "root": "Underlying (subjacente)",
                    "particle": "Theme (tema)",
                    "type": "Mastery"
                },
                "explanation": "A mensagem filosófica oculta por trás da narrativa da história.",
                "examples": [
                    {
                        "sentence": "The underlying theme of the novel is the conflict between tradition and modernity.",
                        "translation": "O tema subjacente do romance é o conflito entre tradição e modernidade."
                    },
                    {
                        "sentence": "Critics analyzed the underlying themes of the film.",
                        "translation": "Críticos analisaram os temas subjacentes do filme."
                    }
                ]
            },
            {
                "id": "pv_mod28_employ_metaphors",
                "verb": "Employ metaphors",
                "meaning": "Empregar / Fazer uso de metáforas expressivas",
                "breakdown": {
                    "root": "Employ (utilizar)",
                    "particle": "Metaphors (metáforas)",
                    "type": "Mastery"
                },
                "explanation": "Uso consciente de figuras de linguagem em discursos ou ensaios acadêmicos.",
                "examples": [
                    {
                        "sentence": "The poet employs metaphors of nature to represent human emotions.",
                        "translation": "O poeta emprega metáforas da natureza para representar emoções humanas."
                    },
                    {
                        "sentence": "Effective speakers employ metaphors to make complex ideas simple.",
                        "translation": "Oradores eficazes empregam metáforas para simplificar ideias complexas."
                    }
                ]
            },
            {
                "id": "pv_mod28_stark_contrast",
                "verb": "Stark contrast / Set in contrast",
                "meaning": "Contraste nítido e gritante entre duas ideias",
                "breakdown": {
                    "root": "Stark (nítido/bruto)",
                    "particle": "Contrast (contraste)",
                    "type": "Mastery"
                },
                "explanation": "Destacar a diferença marcante e oposta entre dois conceitos.",
                "examples": [
                    {
                        "sentence": "Her quiet personality is in stark contrast to her loud brother.",
                        "translation": "A personalidade quieta dela está em contraste nítido com seu irmão barulhento."
                    },
                    {
                        "sentence": "The luxury of the hotel stood in stark contrast to the poverty outside.",
                        "translation": "O luxo do hotel estava em contraste gritante com a pobreza do lado de fora."
                    }
                ]
            },
            {
                "id": "pv_mod28_set_the_stage",
                "verb": "Set the stage (for)",
                "meaning": "Preparar o terreno para um evento futuro histórico",
                "breakdown": {
                    "root": "Set (ajustar)",
                    "particle": "The stage (o palco)",
                    "type": "Mastery"
                },
                "explanation": "Criar as condições que viabilizam um grande acontecimento subsequente.",
                "examples": [
                    {
                        "sentence": "The agreement set the stage for economic recovery.",
                        "translation": "O acordo preparou o terreno para a recuperação econômica."
                    },
                    {
                        "sentence": "This discovery sets the stage for new medical treatments.",
                        "translation": "Esta descoberta prepara o terreno para novos tratamentos médicos."
                    }
                ]
            },
            {
                "id": "pv_mod28_master_capstone",
                "verb": "Master Capstone Project",
                "meaning": "Projeto de maestria B2 concluído com sucesso",
                "breakdown": {
                    "root": "Master (mestre)",
                    "particle": "Capstone (pedra angular)",
                    "type": "Mastery"
                },
                "explanation": "Atingimento da proficiência Upper-Intermediate completa no curso.",
                "examples": [
                    {
                        "sentence": "Congratulations! You have completed the Master Capstone of B2 Phrasal Verbs & Idioms!",
                        "translation": "Parabéns! Você concluiu o Projeto Master Capstone de Phrasal Verbs e Idiomas B2!"
                    },
                    {
                        "sentence": "You have now mastered native nuances, business idioms, and advanced phrasal verbs.",
                        "translation": "Você agora dominou nuances nativas, idiomas corporativos e phrasal verbs avançados."
                    }
                ]
            }
        ],
        "quiz": [
            {
                "q": "The author uses vivid descriptions to ___ nostalgia throughout the novel.",
                "options": [
                    "convey a sense of",
                    "set the stage for",
                    "employ metaphors",
                    "set in contrast"
                ],
                "a": "convey a sense of",
                "explanation": "'Convey a sense of' significa transmitir a sensação ou atmosfera de algo.",
                "type": "choice"
            },
            {
                "q": "The major international treaty helped to ___ future economic cooperation.",
                "options": [
                    "set the stage for",
                    "convey a sense of",
                    "gloss over",
                    "fall short of"
                ],
                "a": "set the stage for",
                "explanation": "'Set the stage for' significa preparar o terreno para eventos futuros.",
                "type": "choice"
            },
            {
                "q": "In her literary essay, she analyzed how poets ___ to express inner grief.",
                "options": [
                    "employ metaphors",
                    "convey a sense of",
                    "set the stage for",
                    "set in contrast"
                ],
                "a": "employ metaphors",
                "explanation": "'Employ metaphors' significa empregar metáforas expressivas na obra.",
                "type": "choice"
            },
            {
                "q": "The bright primary colors stand in ___ to the dark, monochromatic background.",
                "options": [
                    "stark contrast",
                    "underlying theme",
                    "master capstone",
                    "sense of nostalgia"
                ],
                "a": "stark contrast",
                "explanation": "'Stark contrast' é o contraste nítido e gritante entre elementos.",
                "type": "choice"
            },
            {
                "q": "Em seu romance, a autora utiliza descrições detalhadas para transmitir uma profunda sensação de nostalgia. Ela consegue:",
                "options": [
                    "Convey a sense of nostalgia",
                    "Set the stage for nostalgia",
                    "Employ metaphors for nostalgia",
                    "Set in contrast for nostalgia"
                ],
                "a": "Convey a sense of nostalgia",
                "explanation": "'Convey a sense of' é transmitir a sensação/atmosfera.",
                "type": "choice"
            },
            {
                "q": "A assinatura do tratado internacional ajudou a preparar o terreno para a cooperação econômica futura. O tratado conseguiu:",
                "options": [
                    "Set the stage for future cooperation",
                    "Convey a sense of future cooperation",
                    "Gloss over future cooperation",
                    "Fall short of future cooperation"
                ],
                "a": "Set the stage for future cooperation",
                "explanation": "'Set the stage (for)' é preparar o terreno para eventos.",
                "type": "choice"
            },
            {
                "q": "No ensaio acadêmico, a aluna analisou como o poeta emprega metáforas para expressar a dor. Ela analisou como ele pode:",
                "options": [
                    "Employ metaphors to express pain",
                    "Convey a sense to express pain",
                    "Set the stage to express pain",
                    "Set in contrast to express pain"
                ],
                "a": "Employ metaphors to express pain",
                "explanation": "'Employ metaphors' é usar metáforas expressivas.",
                "type": "choice"
            },
            {
                "q": "As cores vibrantes do primeiro plano estão em contraste nítido e gritante com o fundo escuro. Elas estão em:",
                "options": [
                    "Stark contrast to the background",
                    "Underlying theme to the background",
                    "Master capstone to the background",
                    "Sense of nostalgia to the background"
                ],
                "a": "Stark contrast to the background",
                "explanation": "'Stark contrast' é a oposição visual nítida.",
                "type": "choice"
            },
            {
                "q": "Ao analisar a mensagem implícita nas entrelinhas de um clássico da literatura, você está identificando o seu:",
                "options": [
                    "Underlying theme",
                    "Stark contrast",
                    "Master capstone",
                    "Employ metaphor"
                ],
                "a": "Underlying theme",
                "explanation": "'Underlying theme' é o tema subjacente/mensagem implícita.",
                "type": "choice"
            },
            {
                "q": "A realização bem-sucedida do Projeto Culminante de Maestria B2 consolida todo o seu aprendizado no curso. É o seu:",
                "options": [
                    "Master Capstone Project",
                    "Stark Contrast Project",
                    "Underlying Theme Project",
                    "Employ Metaphor Project"
                ],
                "a": "Master Capstone Project",
                "explanation": "'Master Capstone Project' é o projeto final de maestria B2.",
                "type": "choice"
            }
        ]
    }
];

if (typeof window !== 'undefined') { window.PHRASAL_VERBS_DATA = PHRASAL_VERBS_DATA; }
if (typeof global !== 'undefined') { global.PHRASAL_VERBS_DATA = PHRASAL_VERBS_DATA; }
