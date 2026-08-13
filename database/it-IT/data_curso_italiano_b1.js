// ============================================================================
// DATASET CURSO ITALIANO B1 - HANDCRAFTED 24 MÓDULOS (it-IT)
// IDIOMAS ACADEMY
// ============================================================================

const CURSO_ITALIANO_B1_DADOS = [];

function criarModuloItalianoB1(numero, titulo, contexto, vocabulario, gramatica, frases, dialogo, customQuiz = null) {
    const id = `it_b1_mod_${String(numero).padStart(2, '0')}`;
    const drops = gramatica.map(regra => ({
        type: 'grammar_pill',
        title: regra[0],
        rule: regra[1],
        formula: regra[2],
        example: regra[3]
    })).concat(vocabulario.map(item => ({
        type: 'vocab',
        word: item[0],
        translation: item[1],
        audio: item[0],
        dica: item[2]
    })));
    const sentenceBuilder = frases.map(item => ({
        sentence: item[0],
        target: item[0],
        translation: item[1],
        tokens: item[0].split(/\s+/),
        audio: item[0]
    }));
    const dialogue = dialogo.map(item => ({
        speaker: item[0],
        text: item[1],
        translation: item[2],
        audio: item[1]
    }));

    let quiz = customQuiz;
    if (!quiz) {
        quiz = vocabulario.slice(0, 5).map((item, index) => {
            const distractors = [1, 2, 3].map(offset => vocabulario[(index + offset) % vocabulario.length][0]);
            const correctIndex = index % 4;
            const options = distractors.slice();
            options.splice(correctIndex, 0, item[0]);
            return {
                question: `Como se diz “${item[1]}” em italiano?`,
                q: `Como se diz “${item[1]}” em italiano?`,
                options,
                correctIndex,
                explanation: `“${item[0]}” significa “${item[1]}”.`
            };
        });
    }

    return {
        id,
        level: 'B1',
        language: 'it-IT',
        title: `Módulo ${numero}: ${titulo}`,
        desc: contexto,
        description: contexto,
        stage1_context: {
            title: titulo,
            missionTitle: `Missão: ${titulo}`,
            situation: contexto,
            missionDescription: `Compreenda e use o italiano desta situação intermediária em uma interação fluida.`,
            audioGuide: `Ouça a articulação em italiano it-IT e preste atenção às formas do subjuntivo, condicional e partículas.`
        },
        grammar_pills: gramatica.map(regra => ({ title: regra[0], rule: regra[1], formula: regra[2], example: regra[3] })),
        drops,
        stage2_drops: drops,
        stage3_sentences: sentenceBuilder,
        stage3_5_sentenceBuilder: sentenceBuilder,
        stage4_dialogue: dialogue,
        stage4_dialog: dialogue,
        quiz,
        stage3_practice: quiz,
        stage5_quiz: quiz
    };
}

const MODULOS_ITALIANO_B1 = [
    {
        "titulo": "Contrasto passato prossimo e imperfetto",
        "contexto": "Narrar eventos passados e biografias combinando ações concluídas (passato prossimo) e contextos/hábitos duradouros (imperfetto).",
        "vocabulario": [
            [
                "biografia",
                "biografia",
                "Racconto della vita di una persona."
            ],
            [
                "infanzia",
                "infância",
                "Il periodo della vita da bambino."
            ],
            [
                "svolta",
                "virada / ponto de virada",
                "Un momento di grande cambiamento nella vita."
            ],
            [
                "mentre",
                "enquanto",
                "Congiunzione per azioni simultanee."
            ],
            [
                "all'improvviso",
                "de repente",
                "Espressione per un evento inaspettato."
            ],
            [
                "successo",
                "sucesso / acontecimento",
                "Ottenere successo o un fatto accaduto."
            ]
        ],
        "gramatica": [
            [
                "Passato prossimo per azioni concluse",
                "O passado próximo é usado para ações pontuais, delimitadas no tempo e concluídas no passado.",
                "avere/essere + particípio passado",
                "Nello stesso anno ha vinto il premio Nobel."
            ],
            [
                "Imperfetto per descrizioni e abitudini",
                "O imperfeito é usado para descrever estados de espírito, condições físicas, ambientais e hábitos passados.",
                "radical + avo/evo/ivo",
                "Abitava a Roma ed era uno studente brillante."
            ],
            [
                "Combinazione narrativa nei testi",
                "Em uma narrativa histórica ou biográfica, o imperfeito cria o cenário de fundo e o passado próximo faz a ação avançar.",
                "imperfeito (cenário) + passado próximo (evento)",
                "Mentre lavorava in laboratorio, ha fatto una grande scoperta."
            ]
        ],
        "frases": [
            [
                "Mentre studiava all'università, ha conosciuto la sua futura moglie.",
                "Enquanto estudava na universidade, conheceu sua futura esposa."
            ],
            [
                "Nel 1995 si è trasferito a Milano dove abitava già suo fratello.",
                "Em 1995 mudou-se para Milão onde já morava seu irmão."
            ]
        ],
        "dialogo": [
            [
                "Intervistatore",
                "Come è iniziata la carriera dello scrittore?",
                "Como começou a carreira do escritor?"
            ],
            [
                "Critico",
                "Quando era giovane scriveva articoli per un giornale locale, finché ha pubblicato il suo primo romanzo nel 2005.",
                "Quando era jovem escrevia artigos para um jornal local, até que publicou seu primeiro romance em 2005."
            ]
        ]
    },
    {
        "titulo": "Il futuro anteriore e le relazioni temporali",
        "contexto": "Expressar ações futuras concluídas antes de outra ação futura usando o futuro anteriore e conjunções de tempo.",
        "vocabulario": [
            [
                "appena",
                "assim que / logo que",
                "Indica un'azione immediatamente precedente."
            ],
            [
                "dopo che",
                "depois que",
                "Congiunzione temporale per il futuro anteriore."
            ],
            [
                "quando",
                "quando",
                "Usato per collegare due azioni nel futuro."
            ],
            [
                "sarò arrivato",
                "terei chegado",
                "Futuro anteriore di arrivare con essere."
            ],
            [
                "avrò finito",
                "terei terminado",
                "Futuro anteriore di finire con avere."
            ],
            [
                "risultato",
                "resultado",
                "Esito di un lavoro o esame."
            ]
        ],
        "gramatica": [
            [
                "Formazione del futuro anteriore",
                "Forma-se com o futuro simples de avere ou essere + o particípio passado do verbo.",
                "avrò/sarò + particípio passado",
                "Appena sarò arrivato a casa, ti telefonerò."
            ],
            [
                "Relazione temporale futuro anteriore vs futuro semplice",
                "A ação no futuro anterior ocorre ANTES da ação no futuro simples.",
                "Futuro anterior (1ª ação) ➔ Futuro simples (2ª ação)",
                "Dopo che avrò sostenuto l'esame, andrò in vacanza."
            ],
            [
                "Uso di congiunzioni temporali",
                "Usa-se frequentemente após expressões como appena, dopo che, quando, non appena.",
                "appena / dopo che + futuro anterior",
                "Appena avrò finito il lavoro, uscirò con gli amici."
            ]
        ],
        "frases": [
            [
                "Appena avrò ricevuto l'email di conferma, ti avviserò subito.",
                "Assim que tiver recebido o e-mail de confirmação, te avisarei imediatamente."
            ],
            [
                "Quando saranno arrivati gli ospiti, inizieremo la cena.",
                "Quando os convidados tiverem chegado, começaremos o jantar."
            ]
        ],
        "dialogo": [
            [
                "Marco",
                "A che ora usciamo stasera per andare al cinema?",
                "A que horas saímos hoje à noite para ir ao cinema?"
            ],
            [
                "Giulia",
                "Appena avrò finito di studiare per l'esame, ti chiamerò e partiremo.",
                "Assim que eu tiver terminado de estudar para o exame, te ligarei e partiremos."
            ]
        ]
    },
    {
        "titulo": "Il condizionale semplice (Espressivo e cortese)",
        "contexto": "Formular pedidos corteses, desejos, conselhos e hipóteses realizáveis no presente.",
        "vocabulario": [
            [
                "vorrei",
                "eu gostaria",
                "Condizionale di volere (cortesia e desideri)."
            ],
            [
                "potrei",
                "eu poderia",
                "Condizionale di potere (richiesta di permesso)."
            ],
            [
                "dovresti",
                "você deveria",
                "Condizionale di dovere (consiglio)."
            ],
            [
                "bisognerebbe",
                "seria necessário / precisaria",
                "Forma impersonale del condizionale di bisognare."
            ],
            [
                "piacerebbe",
                "agradaria / gostaria",
                "Condizionale di piacere."
            ],
            [
                "consiglio",
                "conselho / sugestão",
                "Un suggerimento utile per qualcuno."
            ]
        ],
        "gramatica": [
            [
                "Desinenze del condizionale semplice",
                "Todos os verbos compartilham as terminações: -erei, -eresti, -erebbe, -eremmo, -ereste, -errebbero. Verbos em -are mudam a ➔ e.",
                "radical + -erei, -eresti, -erebbe...",
                "parlare ➔ parlerei, prendere ➔ prenderei"
            ],
            [
                "Uso per cortesia e desideri",
                "Vorrei e potrei suavizam pedidos (Vorrei un caffè em vez de Voglio un caffè).",
                "Vorrei + nome / infinitivo",
                "Vorrei prenotare un tavolo per due stasera."
            ],
            [
                "Uso per consigli ed ipotesi",
                "Dovresti e bisognerebbe usam-se para dar conselhos úteis de modo gentil.",
                "dovresti + infinitivo",
                "Dovresti riposare di più se ti senti stanco."
            ]
        ],
        "frases": [
            [
                "Vorrei chiedere un'informazione sugli orari del museo, se possibile.",
                "Gostaria de pedir uma informação sobre os horários do museu, se possível."
            ],
            [
                "Dovresti parlare con il professore prima di prendere una decisione.",
                "Você deveria falar com o professor antes de tomar uma decisão."
            ]
        ],
        "dialogo": [
            [
                "Cliente",
                "Vorrei un'insalata mista e un bicchiere d'acqua, per favore.",
                "Gostaria de uma salada mista e um copo d'água, por favor."
            ],
            [
                "Cameriere",
                "Certamente! Le porterei anche del pane fresco?",
                "Certamente! Eu lhe traria também pão fresco?"
            ]
        ]
    },
    {
        "titulo": "I pronomi combinati",
        "contexto": "Combinar pronomes indiretos (mi, ti, gli, le, ci, vi) com pronomes diretos (lo, la, li, le) ou ne.",
        "vocabulario": [
            [
                "me lo",
                "me o / mo",
                "Combinazione di mi + lo (mi ➔ me davanti a lo/la/li/le/ne)."
            ],
            [
                "te la",
                "te a / ta",
                "Combinazione di ti + la."
            ],
            [
                "glielo",
                "lhe o / a ele o",
                "Combinazione di gli/le + lo (unito in un'unica parola)."
            ],
            [
                "ce li",
                "nos os",
                "Combinazione di ci + li (ci ➔ ce)."
            ],
            [
                "ve ne",
                "vos disso / vos deles",
                "Combinazione di vi + ne."
            ],
            [
                "spiegazione",
                "explicação",
                "Chiarimento di un concetto."
            ]
        ],
        "gramatica": [
            [
                "Modifica della vocale i ➔ e",
                "Os pronomes mi, ti, ci, vi mudam a vogal i para e diante de lo, la, li, le, ne: me lo, te la, ce li, ve ne.",
                "mi/ti/ci/vi ➔ me/te/ce/ve + lo/la/li/le/ne",
                "Me lo puoi prestare per un giorno?"
            ],
            [
                "Forma unica glielo, gliela, glieli, gliele, gliene",
                "Para a 3ª pessoa (gli/le), os pronomes se unem com a vogal e de ligação em uma única palavra para masculino e feminino.",
                "gli/le + lo/la/li/le/ne ➔ glielo/gliela/glieli/gliele/gliene",
                "Marco ha chiesto il libro a Sara e lei glielo ha dato."
            ],
            [
                "Accordo del participio passato con pronomi combinati",
                "Nos tempos compostos, o particípio concorda com o objeto direto (lo, la, li, le).",
                "pronome combinado + avere + particípio concordado",
                "Hai inviato la lettera a Maria? — Sì, gliel'ho inviata."
            ]
        ],
        "frases": [
            [
                "Hai detto la verità a Luca? — Sì, gliel'ho detta ieri sera.",
                "Você disse a verdade ao Luca? — Sim, eu lha disse ontem à noite."
            ],
            [
                "Ci puoi prestare i tuoi appunti? — Certamente, ce li ho qui e ve li do subito.",
                "Pode nos emprestar suas anotações? — Certamente, eu as tenho aqui e vo-las dou imediatamente."
            ]
        ],
        "dialogo": [
            [
                "Matteo",
                "Chi ti ha regalato questo bel libro d'arte?",
                "Quem te deu este belo livro de arte de presente?"
            ],
            [
                "Laura",
                "Mio fratello me lo ha comprato per il mio compleanno!",
                "Meu irmão mo comprou no meu aniversário!"
            ]
        ]
    },
    {
        "titulo": "La particella 'ci' (Luogo e verbi con ci)",
        "contexto": "Utilizar o pronome adverbial ci para substituir lugares (lá/ali) e em verbos pronominais frequentes (volerci, metterci, pensarci).",
        "vocabulario": [
            [
                "ci vado",
                "vou lá / vou ali",
                "Ci sostituisce un luogo espresso con a, in, su, da."
            ],
            [
                "ci penso",
                "penso nisso",
                "Ci sostituisce a + cosa (pensare a qualcosa)."
            ],
            [
                "volerci",
                "ser necessário tempo (impessoal)",
                "Ci vuole un'ora / Ci vogliono due ore."
            ],
            [
                "metterci",
                "gastar tempo (pessoal)",
                "Ci metto mezz'ora per arrivare."
            ],
            [
                "crederci",
                "acreditar nisso",
                "Crederci ➔ Non ci credo!"
            ],
            [
                "riuscirci",
                "conseguir / ter êxito nisso",
                "Ci sono riuscito! (Consegui!)"
            ]
        ],
        "gramatica": [
            [
                "Ci locativo (substituição de lugar)",
                "O Ci substitui um lugar mencionado anteriormente (a Roma ➔ ci vado, in ufficio ➔ ci sono).",
                "ci + verbo de movimento/estado",
                "Sei stato a Firenze? — Sì, ci sono stato l'anno scorso."
            ],
            [
                "Ci con verbi che reggono la preposizione A",
                "O Ci substitui a questo / a ciò com verbos como pensare a, credere a, riuscire a.",
                "ci + pensare/credere/riuscire",
                "Hai pensato alla proposta? — Sì, ci penso da ieri."
            ],
            [
                "Differenza tra volerci e metterci",
                "Volerci usa-se de modo impessoal para a duração objetiva (Ci vogliono tre ore); Metterci indica o tempo gasto por um sujeito específico (Io ci metto tre ore).",
                "Ci vuole/vogliono vs ci metto/metti/mette",
                "Quanto ci metti per andare al lavoro?"
            ]
        ],
        "frases": [
            [
                "Sei mai stato a Venezia? — Sì, ci sono andato tre volte ed è bellissima.",
                "Você já esteve em Veneza? — Sim, fui lá três vezes e é linda."
            ],
            [
                "Quanto tempo ci vuole per preparare questa ricetta? — Ci vogliono circa quarantacinque minuti.",
                "Quanto tempo leva para preparar esta receita? — Leva cerca de quarenta e cinco minutos."
            ]
        ],
        "dialogo": [
            [
                "Paolo",
                "Vai alla festa di compleanno di Stefano stasera?",
                "Você vai à festa de aniversário do Stefano hoje à noite?"
            ],
            [
                "Elena",
                "Sì, ci vado volentieri! Ci credi che compie già trent'anni?",
                "Sim, vou lá com prazer! Acredita nisso que ele já faz trinta anos?"
            ]
        ]
    },
    {
        "titulo": "La particella 'ne' (Partitivo e argomento)",
        "contexto": "Usar a partícula ne para expressar quantidades partitivas (deles/disso/alguns) e falar de um assunto (parlare di).",
        "vocabulario": [
            [
                "ne voglio tre",
                "quero três deles/delas",
                "Ne partitivo espresso con un numero."
            ],
            [
                "non ne posso più",
                "não aguento mais",
                "Espressione idiomatica con ne."
            ],
            [
                "ne parliamo domani",
                "falamos disso amanhã",
                "Ne sostituisce di + argomento (parlare di qualcosa)."
            ],
            [
                "alcuni ne",
                "alguns deles",
                "Partitivo con quantificatori."
            ],
            [
                "ne ho abbastanza",
                "já chega disso para mim",
                "Espressione di sazietà o limite."
            ],
            [
                "argomento",
                "assunto / tema",
                "Il tema principale di un discorso."
            ]
        ],
        "gramatica": [
            [
                "Ne partitivo per quantità espresse",
                "O Ne substitui uma parte de um conjunto quando se especifica um número ou quantidade (molti, pochi, tre, un chilo).",
                "ne + verbo + quantidade",
                "Quanti caffè bevi al giorno? — Ne bevo due."
            ],
            [
                "Accordo del participio con Ne partitivo",
                "Quando se usa ne com o passado próximo, o particípio passado concorda com a quantidade expressa.",
                "ne + avere + particípio concordado",
                "Quante mele hai comprato? — Ne ho comprate tre."
            ],
            [
                "Ne per argomento (di + cosa/persona)",
                "O Ne substitui di questo / di ciò com verbos como parlare di, discutere di, sapere di.",
                "ne + parlare/sapere/pensare",
                "Che ne pensi di questo film? — Ne penso molto bene."
            ]
        ],
        "frases": [
            [
                "Quanti libri hai letto questo mese? — Ne ho letti due molto interessanti.",
                "Quantos livros você leu este mês? — Li dois muito interessantes deles."
            ],
            [
                "Abbiamo parlato a lungo del nuovo progetto e ne discuteremo ancora domani.",
                "Falamos bastante sobre o novo projeto e discutiremos mais sobre isso amanhã."
            ]
        ],
        "dialogo": [
            [
                "Commesso",
                "Signora, quante arance desidera?",
                "Senhora, quantas laranjas deseja?"
            ],
            [
                "Cliente",
                "Ne prendo due chili, grazie! Sembrano molto fresche.",
                "Vou levar dois quilos delas, obrigado! Parecem muito frescas."
            ]
        ]
    },
    {
        "titulo": "I pronomi relativi",
        "contexto": "Conectar orações usando os pronomes relativos che (invariável), cui (com preposição) e il quale / la quale.",
        "vocabulario": [
            [
                "che",
                "que / o qual",
                "Pronome relativo invariabile per soggetto e oggetto diretto."
            ],
            [
                "cui",
                "cujo / ao qual / em que",
                "Pronome relativo per complementi indiretti con preposizione."
            ],
            [
                "il quale",
                "o qual",
                "Pronome relativo variabile per genere e numero (il quale / la quale / i quali / le quali)."
            ],
            [
                "in cui",
                "em que / no qual",
                "Usato per luogo o tempo (il giorno in cui...)."
            ],
            [
                "di cui",
                "do qual / de que",
                "Usato per specificazione (l'argomento di cui parliamo)."
            ],
            [
                "connessione",
                "conexão / ligação",
                "Legame tra due frasi."
            ]
        ],
        "gramatica": [
            [
                "Che relativo invariabile",
                "O Che substitui um sujeito ou complemento direto sem preposição para pessoas, animais e coisas.",
                "substantivo + che + verbo",
                "Il ragazzo che parla con Marco è mio cugino."
            ],
            [
                "Cui preceduto da preposizione",
                "O Cui usa-se para todos os complementos indiretos precedido pelas preposições a, di, in, da, con, su, per.",
                "preposição + cui",
                "La città in cui abito è molto tranquilla. / L'amico di cui ti ho parlato."
            ],
            [
                "Il quale / la quale (formale)",
                "Il quale concorda em gênero e número e evita ambiguidade nas frases complexas.",
                "artigo + quale/quali",
                "La professoressa della quale ti ho parlato è andata in pensione."
            ]
        ],
        "frases": [
            [
                "La casa in cui abito si trova vicino al centro storico della città.",
                "A casa em que moro fica perto do centro histórico da cidade."
            ],
            [
                "Il collega con cui lavoro mi ha aiutato a completare la presentazione.",
                "O colega com quem trabalho me ajudou a completar a apresentação."
            ]
        ],
        "dialogo": [
            [
                "Stefano",
                "Hai visto il film che ha vinto il festival di Venezia?",
                "Você viu o filme que ganhou o festival de Veneza?"
            ],
            [
                "Claudia",
                "Sì! È la storia di una donna di cui tutti ammirano il coraggio.",
                "Sim! É a história de uma mulher de quem todos admiram a coragem."
            ]
        ]
    },
    {
        "titulo": "L'imperativo diretto con pronomi",
        "contexto": "Dar ordens, instruções e conselhos diretos (tu, noi, voi) anexando pronomes no final do verbo.",
        "vocabulario": [
            [
                "guardalo",
                "olha para ele / veja-o",
                "Imperativo di guardare + lo (guarda + lo)."
            ],
            [
                "non farlo",
                "não faça isso",
                "Imperativo negativo di 2ª persona (non + infinito + pronome)."
            ],
            [
                "dimmi",
                "diga-me / me diz",
                "Imperativo di dire (di' + mi ➔ raddoppiamento sintattico)."
            ],
            [
                "vacci",
                "vai lá / vá ali",
                "Imperativo di andare con ci (va' + ci ➔ vacci)."
            ],
            [
                "fallo",
                "faça isso",
                "Imperativo di fare + lo (fa' + lo ➔ fallo)."
            ],
            [
                "ascoltami",
                "escuta-me / me ouça",
                "Ascolta + mi."
            ]
        ],
        "gramatica": [
            [
                "Posizione dei pronomi nell'imperativo diretto",
                "No imperativo informal (tu, noi, voi), os pronomes unem-se ao final do verbo formando uma única palavra (ênclise).",
                "verbo imperativo + pronome",
                "Prendi il libro ➔ Prendilo! / Ascoltate me ➔ Ascoltatemi!"
            ],
            [
                "Raddoppiamento con verbi monosillabici",
                "Com va', da', fa', sta', di', a consoante do pronome duplica-se (exceto com gli): dimmi, vacci, fammi, dillo, dille.",
                "va'/da'/fa'/sta'/di' + pronome ➔ duplicação",
                "Di' a me ➔ Dimmi! / Fa' a me ➔ Fammi un favore!"
            ],
            [
                "Imperativo negativo informale (tu)",
                "Forma-se com non + infinitivo. O pronome pode ficar antes do verbo separado ou unido ao infinitivo final sem e.",
                "non + pronome + infinitivo OU non + infinitivo+pronome",
                "Non farlo! / Non lo fare!"
            ]
        ],
        "frases": [
            [
                "Se hai un problema, dimmi tutto e cercherò di aiutarti.",
                "Se você tem um problema, diga-me tudo e tentarei te ajudar."
            ],
            [
                "Questo è un bel museo: vacci con i tuoi amici quando hai tempo!",
                "Este é um lindo museu: vá lá com seus amigos quando tiver tempo!"
            ]
        ],
        "dialogo": [
            [
                "Roberto",
                "Non so come risolvere questo esercizio di grammatica.",
                "Não sei como resolver este exercício de gramática."
            ],
            [
                "Silvia",
                "Fammi vedere la pagina e spiegami cosa non capisci!",
                "Deixe-me ver a página e explique-me o que não entende!"
            ]
        ]
    },
    {
        "titulo": "La forma impersonale con 'si'",
        "contexto": "Generalizar regras, costumes e costumes sociais usando a construção impessoal \"si + verbo\".",
        "vocabulario": [
            [
                "si mangia",
                "come-se / come-se bem",
                "Forma impersonale di mangiare (3ª persona singolare)."
            ],
            [
                "si dice che",
                "diz-se que / dizem que",
                "Espressione impersonale per voci e opinioni comuni."
            ],
            [
                "si vive bene",
                "vive-se bem",
                "Descrizione generale di qualità della vita."
            ],
            [
                "si devono fare",
                "deve-se fazer / devem ser feitos",
                "Forma impersonale con verbi modali al plurale."
            ],
            [
                "si parla",
                "fala-se",
                "Si parla italiano in questo negozio."
            ],
            [
                "costume",
                "costume / hábito social",
                "Uso o tradizione di una comunità."
            ]
        ],
        "gramatica": [
            [
                "Si impersonale con verbo alla 3ª persona singolare",
                "Usa-se SI + verbo na 3ª pessoa do singular para indicar um sujeito genérico (as pessoas, todos).",
                "si + verbo 3ª pers. singular",
                "In Italia si mangia molta pasta e si beve il caffè espresso."
            ],
            [
                "Si passante con oggetto plurale",
                "Se o verbo for seguido por um substantivo plural, o verbo concorda no plural (Si passativante).",
                "si + verbo 3ª pers. plural + substantivo plural",
                "In quella trattoria si mangiano ottime lasagne."
            ],
            [
                "Si impersonale con verbi riflessivi (ci si)",
                "Com os verbos reflexivos, para evitar a repetição \"si si\", usa-se a forma CI SI.",
                "ci si + verbo reflexivo",
                "La domenica ci si sveglia più tardi."
            ]
        ],
        "frases": [
            [
                "In Italia si mangia benissimo e si apprezza molto la buona cucina.",
                "Na Itália come-se muitíssimo bem e aprecia-se muito a boa culinária."
            ],
            [
                "In biblioteca non si può parlare ad alta voce e si devono rispettare le regole.",
                "Na biblioteca não se pode falar em voz alta e devem-se respeitar as regras."
            ]
        ],
        "dialogo": [
            [
                "Turista",
                "Come si vive in questa città della Toscana?",
                "Como se vive nesta cidade da Toscana?"
            ],
            [
                "Residente",
                "Si vive molto bene: si cammina a piedi nel centro e ci si rilassa nei parchi.",
                "Vive-se muito bem: caminha-se a pé no centro e relaxa-se nos parques."
            ]
        ]
    },
    {
        "titulo": "Il congiuntivo presente I (Opinioni e dubbi)",
        "contexto": "Expressar opiniões, dúvidas e incertezas usando o subjuntivo presente com verbos como pensare, credere, ritenere.",
        "vocabulario": [
            [
                "penso che sia",
                "penso que seja / acho que é",
                "Congiuntivo presente di essere (sia, sia, sia, siamo, siate, siano)."
            ],
            [
                "credo che vada",
                "creio que vá / acho que vai",
                "Congiuntivo presente di andare (vada, vada, vada...)."
            ],
            [
                "ritengo che",
                "considero que / entendo que",
                "Verbo di opinione formale che regge il congiuntivo."
            ],
            [
                "ho l'impressione che",
                "tenho a impressão de que",
                "Espressione di opinione personale."
            ],
            [
                "dubito che",
                "duvido que",
                "Espressione di dubbio."
            ],
            [
                "incertezza",
                "incerteza",
                "Mancanza di sicurezza su un fatto."
            ]
        ],
        "gramatica": [
            [
                "Uso del congiuntivo per opinioni e dubbi",
                "O subjuntivo usa-se nas frases subordinadas introduzidas por che após verbos de opinião, dúvida e incerteza (pensare, credere, dubitare, non essere sicuro).",
                "verbo de opinião + che + subjuntivo",
                "Penso che Marco sia un ragazzo molto intelligente."
            ],
            [
                "Desinenze del congiuntivo presente",
                "Verbos em -are ➔ -i, -i, -i, -iamo, -iate, -ino. Verbos em -ere/-ire ➔ -a, -a, -a, -iamo, -iate, -ano.",
                "-are ➔ -i | -ere/-ire ➔ -a",
                "che io parli / che tu prenda / che lui parta"
            ],
            [
                "Congiuntivo presente di essere e avere",
                "Essere: sia, sia, sia, siamo, siate, siano. Avere: abbia, abbia, abbia, abbiamo, abbiate, abbiano.",
                "essere ➔ sia | avere ➔ abbia",
                "Credo che abbiano ragione loro."
            ]
        ],
        "frases": [
            [
                "Penso che questo sia il modo migliore per risolvere il problema.",
                "Penso que este seja o melhor modo para resolver o problema."
            ],
            [
                "Credo che i miei amici arrivino in ritardo a causa del traffico.",
                "Acredito que meus amigos cheguem atrasados por causa do trânsito."
            ]
        ],
        "dialogo": [
            [
                "Gianni",
                "Pensi che il treno sia già partito dalla stazione?",
                "Você pensa que o trem já partiu da estação?"
            ],
            [
                "Valeria",
                "Non sono sicura, ma dubito che sia in orario con questo tempo.",
                "Não tenho certeza, mas duvido que esteja no horário com este tempo."
            ]
        ]
    },
    {
        "titulo": "Il congiuntivo presente II (Sentimenti e desideri)",
        "contexto": "Expressar sentimentos, vontades, desejos, medos e estados impessoais com o subjuntivo presente.",
        "vocabulario": [
            [
                "spero che veniate",
                "espero que venham",
                "Congiuntivo di venire (venuto/veniate)."
            ],
            [
                "ho paura che piova",
                "tenho medo de que chova",
                "Esprimere timore con il congiuntivo."
            ],
            [
                "è necessario che",
                "é necessário que",
                "Costruzione impersonale che richiede il congiuntivo."
            ],
            [
                "desidero che",
                "desejo que",
                "Esprimere un forte desiderio."
            ],
            [
                "mi rallegro che",
                "alegro-me de que",
                "Esprimere gioia per qualcosa."
            ],
            [
                "timore",
                "temor / receio",
                "Paura o preoccupazione per un evento."
            ]
        ],
        "gramatica": [
            [
                "Congiuntivo dopo verbi di sentimento e volontà",
                "Usa-se o subjuntivo após verbos que expressam estados de espírito (sperare, temere, avere paura, desiderare, volere).",
                "verbo de sentimento/vontade + che + subjuntivo",
                "Spero che tu possa venire alla mia festa."
            ],
            [
                "Congiuntivo dopo espressioni impersonali",
                "Usa-se o subjuntivo após è necessario che, è importante che, è bene che, sembra che, bisogna che.",
                "è + adjetivo + che + subjuntivo",
                "È importante che tutti studino la grammatica."
            ],
            [
                "Regola dei soggetti diversi",
                "O subjuntivo usa-se apenas se os sujeitos da frase principal e subordinada forem DIFERENTES. Se o sujeito for o mesmo, usa-se o infinitivo.",
                "Sujeitos diferentes ➔ che + subjuntivo | Mesmo sujeito ➔ di + infinitivo",
                "Spero di venire (io/io) vs Spero che tu venga (io/tu)."
            ]
        ],
        "frases": [
            [
                "Spero che il tempo sia bello questo fine settimana per fare una gita.",
                "Espero que o tempo esteja bom neste fim de semana para fazer um passeio."
            ],
            [
                "È necessario che tutti i partecipanti compilino il modulo di iscrizione.",
                "É necessário que todos os participantes preencham o formulário de inscrição."
            ]
        ],
        "dialogo": [
            [
                "Marta",
                "Ho paura che stasera piova e si debba annullare il concerto all'aperto.",
                "Tenho medo de que hoje à noite chova e se deva cancelar o show ao ar livre."
            ],
            [
                "Luca",
                "Speriamo che il cielo si schiarisca presto e che tutto vada bene!",
                "Esperemos que o céu limpe logo e que tudo corra bem!"
            ]
        ]
    },
    {
        "titulo": "I connettivi testuali e l'argomentazione",
        "contexto": "Articular textos complexos, conectar ideias e estruturar argumentos usando conetores lógicos.",
        "vocabulario": [
            [
                "tuttavia",
                "contudo / no entanto",
                "Connettivo avversativo di forte contrasto."
            ],
            [
                "quindi",
                "portanto / logo",
                "Connettivo conclusivo."
            ],
            [
                "infatti",
                "de fato / com efeito",
                "Connettivo esplicativo di conferma."
            ],
            [
                "siccome",
                "já que / como",
                "Connettivo causale (posto all'inizio della frase)."
            ],
            [
                "inoltre",
                "além disso",
                "Connettivo aggiuntivo."
            ],
            [
                "sebbene",
                "embora / posto que",
                "Connettivo concessivo che regge il congiuntivo."
            ]
        ],
        "gramatica": [
            [
                "Connettivi di causa ed effetto (siccome, quindi, perché)",
                "Siccome usa-se no início da frase (Siccome piove, resto a casa). Quindi expressa a consequência (Piove, quindi resto a casa).",
                "Siccome [causa], [consequência] | [causa], quindi [consequência]",
                "Siccome fa freddo, ho preso il cappotto."
            ],
            [
                "Connettivi di contrasto e concessione (tuttavia, sebbene)",
                "Tuttavia introduz uma oposição com o indicativo. Sebbene exige o subjuntivo.",
                "tuttavia + indicativo | sebbene + subjuntivo",
                "È un corso difficile, tuttavia è molto utile. / Sebbene sia stanco, continuo a studiare."
            ],
            [
                "Connettivi di aggiunta e conferma (inoltre, infatti)",
                "Inoltre acrescenta argumentos (Inoltre bisogna considerare...). Infatti confirma o que foi dito antes.",
                "inoltre / infatti + frase",
                "Ha studiato molto, infatti ha superato l'esame con il massimo dei voti."
            ]
        ],
        "frases": [
            [
                "Siccome il museo era chiuso per restauri, abbiamo deciso di visitare la galleria d'arte.",
                "Como o museu estava fechado para restauração, decidimos visitar a galeria de arte."
            ],
            [
                "Il progetto è complesso, tuttavia abbiamo tutte le risorse necessarie per completarlo.",
                "O projeto é complexo, contudo temos todos os recursos necessários para completá-lo."
            ]
        ],
        "dialogo": [
            [
                "Relatore",
                "Il trasporto pubblico è efficiente, inoltre i costi sono accessibili a tutti.",
                "O transporte público é eficiente, além disso os custos são acessíveis a todos."
            ],
            [
                "Ascoltatore",
                "Infatti, molti cittadini preferiscono lasciare l'automobile a casa.",
                "De fato, muitos cidadãos preferem deixar o automóvel em casa."
            ]
        ]
    },
    {
        "titulo": "Raccontare un evento storico o personale",
        "contexto": "Construir uma narrativa histórica ou autobiográfica coesa articulando cronologia e tempos do passado.",
        "vocabulario": [
            [
                "avvenimento",
                "acontecimento / evento",
                "Un fatto di grande rilievo storico o personale."
            ],
            [
                "secolo",
                "século",
                "Periodo di cento anni."
            ],
            [
                "protagonista",
                "protagonista",
                "Il personaggio principale di una storia."
            ],
            [
                "conseguenza",
                "consequência",
                "Il risultato finale di un evento."
            ],
            [
                "memorabile",
                "memorável",
                "Degno di essere ricordato."
            ],
            [
                "ricostruzione",
                "reconstrução",
                "Ricostruzione dettagliata dei fatti."
            ]
        ],
        "gramatica": [
            [
                "Uso del passato remoto nel racconto storico",
                "Nas narrativas históricas formais e literárias encontra-se o passado remoto para ações distantes e concluídas.",
                "radical + -ai/-ei/-ii",
                "Dante Alighieri nacque a Firenze nel 1265."
            ],
            [
                "Articolazione cronologica del racconto",
                "Estruturar a história com marcadores temporais: inizialmente, in seguito, nel frattempo, infine.",
                "inizialmente ➔ in seguito ➔ infine",
                "Inizialmente ha studiato legge, in seguito si è dedicato alla pittura."
            ],
            [
                "Coerenza verbale nella narrazione",
                "Manter o tempo de referência no relato e evitar saltos temporais injustificados.",
                "coerência entre imperfeito e passado próximo/remoto",
                "Nel 1945 è finita la guerra e la città è stata ricostruita."
            ]
        ],
        "frases": [
            [
                "Inizialmente la città era un piccolo villaggio, ma in seguito è diventata un centro commerciale fondamentale.",
                "Inicialmente a cidade era uma pequena vila, mas em seguida tornou-se um centro comercial fundamental."
            ],
            [
                "Nel 1969 l'uomo è sbarcato sulla Luna: un avvenimento che ha cambiato la storia dell'umanità.",
                "Em 1969 o homem pisou na Lua: um acontecimento que mudou a história da humanidade."
            ]
        ],
        "dialogo": [
            [
                "Guida",
                "Questo palazzo fu costruito nel Rinascimento dal famoso architetto Brunelleschi.",
                "Este palácio foi construído no Renascimento pelo famoso arquiteto Brunelleschi."
            ],
            [
                "Turista",
                "Quali sono state le conseguenze principali della sua costruzione per la città?",
                "Quais foram as consequências principais da sua construção para a cidade?"
            ]
        ]
    },
    {
        "titulo": "Esprimere opinioni e dibattere",
        "contexto": "Debater temas da atualidade, concordar, discordar com cortesia e defender pontos de vista.",
        "vocabulario": [
            [
                "sono d'accordo",
                "estou de acordo / concordo",
                "Espressione di consenso."
            ],
            [
                "non condivido",
                "não compartilho / discordo",
                "Modo gentile per esprimere dissenso."
            ],
            [
                "dal mio punto di vista",
                "do meu ponto de vista",
                "Introdurre una prospettiva personale."
            ],
            [
                "obiezione",
                "objeção",
                "Argomento contrario in un dibattito."
            ],
            [
                "compromesso",
                "compromisso / acordo mútuo",
                "Accordo tra posizioni diverse."
            ],
            [
                "argomentazione",
                "argumentação",
                "Insieme di ragioni a supporto di un'idea."
            ]
        ],
        "gramatica": [
            [
                "Espressioni di accordo e dissenso cortese",
                "Concordar: Sono perfettamente d'accordo con te / Ha ragione. Discordar com cortesia: Capisco il tuo punto di vista, tuttavia non condivido la tua opinione.",
                "acordo | desacordo cortês",
                "Sono d'accordo con la tua analisi, ma vorrei aggiungere un dettaglio."
            ],
            [
                "Strutturare un intervento in un dibattito",
                "Organizar as ideias no debate usando conectores: In primo luogo... In secondo luogo... Bisogna considerare che... Per concludere...",
                "organizar ideias com conectores",
                "In primo luogo bisogna analizzare i costi del progetto."
            ],
            [
                "Uso del congiuntivo nelle opinioni contrapposte",
                "Quando se contesta uma opinião alheia usa-se o subjuntivo: Non penso che questa sia la soluzione migliore.",
                "non credere/pensare + che + subjuntivo",
                "Non credo che questo provvedimento sia efficace."
            ]
        ],
        "frases": [
            [
                "Dal mio punto di vista, è fondamentale investire nell'istruzione e nella ricerca scientifica.",
                "Do meu ponto de vista, é fundamental investir na educação e na pesquisa científica."
            ],
            [
                "Capisco la tua obiezione, tuttavia ritengo che dobbiamo considerare anche i vantaggi a lungo termine.",
                "Entendo a sua objeção, contudo entendo que devemos considerar também as vantagens a longo prazo."
            ]
        ],
        "dialogo": [
            [
                "Moderatore",
                "Qual è la vostra opinione sullo smart working e il lavoro da casa?",
                "Qual é a opinião de vocês sobre o trabalho remoto e de casa?"
            ],
            [
                "Partecipante",
                "Sono d'accordo sull'aumento della flessibilità, ma non credo che debba sostituire completamente il contatto umano.",
                "Concordo com o aumento da flexibilidade, mas não creio que deva substituir completamente o contato humano."
            ]
        ]
    },
    {
        "titulo": "Il mondo del lavoro in Italia",
        "contexto": "Preparar um currículo em italiano, realizar entrevistas de emprego e compreender termos contratuais.",
        "vocabulario": [
            [
                "curriculum vitae",
                "currículo (CV)",
                "Documento con le esperienze professionali e di studio."
            ],
            [
                "colloquio di lavoro",
                "entrevista de emprego",
                "Incontro formale di selezione."
            ],
            [
                "contratto a tempo indeterminato",
                "contrato por tempo indeterminado",
                "Contratto di lavoro stabile senza scadenza."
            ],
            [
                "candidato",
                "candidato",
                "Persona che partecipa alla selezione."
            ],
            [
                "competenze",
                "competências / habilidades",
                "Abilità e conoscenze professionali."
            ],
            [
                "assunzione",
                "contratação / admissão",
                "Atto di assumere un lavoratore."
            ]
        ],
        "gramatica": [
            [
                "Registro formale nelle interviste di lavoro",
                "Usar sempre a forma de cortesia (Lei) com verbos no subjuntivo de cortesia ou condicional.",
                "uso do Lei formal",
                "Le dispiacerebbe descrivere le Sue precedenti esperienze professionali?"
            ],
            [
                "Espressioni nel Curriculum Vitae",
                "Usar substantivos de ação e verbos no passado para descrever as tarefas realizadas (gestione di, responsabilità di, coordinamento).",
                "gestão / coordenação / desenvolvimento",
                "Ho maturato un'esperienza pluriennale nel settore delle vendite."
            ],
            [
                "Lessico dei contratti di lavoro",
                "Distinguição entre tempo determinado (provisório) e indeterminado (estável), part-time e full-time.",
                "tipologias contratuais",
                "Il candidato ha firmato un contratto a tempo indeterminato."
            ]
        ],
        "frases": [
            [
                "Ho inviato il mio curriculum vitae in risposta all'annuncio di lavoro e mi hanno chiamato per un colloquio.",
                "Enviei meu currículo em resposta ao anúncio de emprego e me chamaram para uma entrevista."
            ],
            [
                "Possiedo ottime competenze informatiche e una buona conoscenza delle lingue straniere.",
                "Possuo ótimas competências informáticas e um bom conhecimento de línguas estrangeiras."
            ]
        ],
        "dialogo": [
            [
                "Selezionatore",
                "Buongiorno! Mi descriva brevemente le Sue esperienze principali nel settore.",
                "Bom dia! Descreva-me brevemente suas experiências principais no setor."
            ],
            [
                "Candidato",
                "Buongiorno. Negli ultimi tre anni mi sono occupato della gestione dei clienti e dello sviluppo di progetti software.",
                "Bom dia. Nos últimos três anos ocupei-me da gestão de clientes e do desenvolvimento de projetos de software."
            ]
        ]
    },
    {
        "titulo": "Università e sistema scolastico italiano",
        "contexto": "Compreender a estrutura de ensino na Itália (laurea triennale, magistrale, esami, tesi, lode).",
        "vocabulario": [
            [
                "laurea triennale",
                "graduação (3 anos)",
                "Primo livello di studi universitari in Italia."
            ],
            [
                "laurea magistrale",
                "mestrado (2 anos)",
                "Secondo livello di studi universitari."
            ],
            [
                "esame universitario",
                "exame universitário",
                "Prova scritta o orale per superare un insegnamento."
            ],
            [
                "tesi di laurea",
                "trabalho de conclusão / tese",
                "Elaborato finale presentato davanti alla commissione."
            ],
            [
                "libretto universitario",
                "histórico escolar universitário",
                "Documento con i voti degli esami."
            ],
            [
                "lode",
                "louvor (voto máximo 30 e lode)",
                "Riconoscimento di eccellenza nel voto d'esame."
            ]
        ],
        "gramatica": [
            [
                "Espressioni del sistema universitario italiano",
                "Usar dare un esame (fazer prova) vs superare un esame (passar na prova) e laurearsi in (graduar-se em).",
                "dare un esame / superare un esame / laurearsi in",
                "Marco si è laureato in Economia con trenta e lode."
            ],
            [
                "Voti e valutazioni in Italia",
                "Na universidade italiana as notas vão de 18 (mínimo) a 30 e lode (máximo). Nas escolas de 1 a 10.",
                "notas de 18 a 30 e lode",
                "Ha superato l'esame di diritto privato con ventotto."
            ],
            [
                "Uso di espressioni di tempo negli studi",
                "Frequentare l'università, fare un tirocinio, discutere la tesi.",
                "frequentar / prestar / defender",
                "Nel mese di luglio discuterà la tesi di laurea."
            ]
        ],
        "frases": [
            [
                "Mio fratello frequenta l'Università di Bologna e sta preparando la tesi di laurea magistrale.",
                "Meu irmão frequenta a Universidade de Bolonha e está preparando a tese de mestrado."
            ],
            [
                "Per superare questo esame universitario è necessario studiare tre libri di testo.",
                "Para passar neste exame universitário é necessário estudar três livros didáticos."
            ]
        ],
        "dialogo": [
            [
                "Studente A",
                "A che ora hai l'esame orale di storia contemporanea oggi?",
                "A que horas você tem o exame oral de história contemporânea hoje?"
            ],
            [
                "Studente B",
                "Alle undici in aula magna! Spero che il professore mi chieda gli argomenti che ho ripassato meglio.",
                "Às onze na aula magna! Espero que o professor me pergunte os assuntos que revisei melhor."
            ]
        ]
    },
    {
        "titulo": "I media, i giornali e la TV italiana",
        "contexto": "Analisar artigos de jornal, notícias de TV, reportagens e programas culturais da mídia italiana.",
        "vocabulario": [
            [
                "giornale",
                "jornal",
                "Quotidiano di informazione stampato o digitale."
            ],
            [
                "quotidiano",
                "jornal diário",
                "Giornale pubblicato tutti i giorni."
            ],
            [
                "notizia",
                "notícia",
                "Informazione su un fatto recente."
            ],
            [
                "telegiornale",
                "telejornal (TG)",
                "Programma televisivo di notizie."
            ],
            [
                "articolo di fondo",
                "artigo de opinião / editorial",
                "Articolo principale firmato dal direttore."
            ],
            [
                "redazione",
                "redação",
                "Insieme dei giornalisti di una testata."
            ]
        ],
        "gramatica": [
            [
                "Il discorso indiretto nei media (Secondo quanto riferito...)",
                "Nos jornais usa-se frequentemente o discurso indireto para relatar notícias e declarações.",
                "segundo o declarado por / afirmou que",
                "Secondo la stampa locale, il sindaco ha firmato l'ordinanza."
            ],
            [
                "Uso del condizionale di notizia non confermata (Condizionale giornalistico)",
                "O condicional expressa notícias ainda não confirmadas oficialmente pela imprensa.",
                "condicional para notícias presumidas",
                "Secondo il telegiornale, l'accordo sarebbe stato già raggiunto."
            ],
            [
                "Vocabolario dei generi di comunicazione",
                "Distinguição entre cronaca rosa, cronaca nera, politica estera e cultura.",
                "seções do jornal",
                "L'articolo è stato pubblicato nella sezione cultura e spettacoli."
            ]
        ],
        "frases": [
            [
                "Abbiamo letto la notizia sul quotidiano di stamattina nella sezione di politica estera.",
                "Lemos a notícia no jornal diário de hoje de manhã na seção de política externa."
            ],
            [
                "Secondo il telegiornale di stasera, il governo avrebbe approvato la nuova legge sul lavoro.",
                "Segundo o telejornal de hoje à noite, o governo teria aprovado a nova lei de trabalho."
            ]
        ],
        "dialogo": [
            [
                "Lettore",
                "Hai letto l'articolo di fondo sulla prima pagina del giornale oggi?",
                "Você leu o artigo de opinião na primeira página do jornal hoje?"
            ],
            [
                "Giornalista",
                "Sì, l'autore analizza con molta chiarezza i cambiamenti sociali degli ultimi anni.",
                "Sim, o autor analisa com muita clareza as mudanças sociais dos últimos anos."
            ]
        ]
    },
    {
        "titulo": "Arte, musica e cinema italiano",
        "contexto": "Compreender críticas de arte, resenhas de cinema, grandes diretores e o patrimônio da ópera lírica italiana.",
        "vocabulario": [
            [
                "opera lirica",
                "ópera lírica",
                "Genere teatrale e musicale nato in Italia."
            ],
            [
                "regista",
                "diretor de cinema / teatro",
                "Chi dirige la realizzazione di un film."
            ],
            [
                "capolavoro",
                "obra-prima",
                "Opera d'arte di altissimo valore."
            ],
            [
                "mostra d'arte",
                "exposição de arte",
                "Esposizione di dipinti o sculture in un museo."
            ],
            [
                "recensione",
                "resenha / crítica",
                "Analisi critica di un film o libro."
            ],
            [
                "scenografia",
                "cenografia",
                "Allestimento della scena in teatro o cinema."
            ]
        ],
        "gramatica": [
            [
                "Lessico speciale per la critica artistica e cinematografica",
                "Usar adjetivos apreciativos (emozionante, coinvolgente, straordinario) e verbos como rappresentare, narrare, interpretare.",
                "adjetivos de julgamento crítico",
                "Questo film è un capolavoro straordinario del cinema neorealista."
            ],
            [
                "La forma passiva con venire ed essere",
                "Nas descrições artísticas a forma passiva é frequentíssima: L'opera viene conservata nel museo / È stata dipinta da da Vinci.",
                "venire / essere + particípio passado",
                "Il quadro è stato dipinto nel 1503 da Leonardo da Vinci."
            ],
            [
                "Esprimere un giudizio su uno spettacolo",
                "Aconselhar ou desaconselhar um filme: Vi consiglio vivamente di vedere questo spettacolo.",
                "aconselhar a + infinitivo",
                "Vi consiglio di visitare la mostra di pittura contemporanea."
            ]
        ],
        "frases": [
            [
                "La Traviata di Giuseppe Verdi è una delle opere liriche più famose e amate al mondo.",
                "La Traviata de Giuseppe Verdi é uma das óperas líricas mais famosas e amadas no mundo."
            ],
            [
                "Questo film è stato diretto da un giovane regista ed è stato premiato alla Mostra del Cinema di Venezia.",
                "Este filme foi dirigido por um jovem diretor e foi premiado na Mostra de Cinema de Veneza."
            ]
        ],
        "dialogo": [
            [
                "Spettatore A",
                "Che cosa ne pensi del nuovo film proiettato al cinema stasera?",
                "O que você acha do novo filme exibido no cinema hoje à noite?"
            ],
            [
                "Spettatore B",
                "Trovo che la scenografia sia bellissima e che gli attori abbiano recitato in modo emozionante.",
                "Acho que a cenografia seja linda e que os atores tenham atuado de modo emocionante."
            ]
        ]
    },
    {
        "titulo": "I problemi quotidiani e la burocrazia",
        "contexto": "Lidar com trâmites burocráticos na Itália, preencher formulários e apresentar reclamações formais.",
        "vocabulario": [
            [
                "modulo",
                "formulário",
                "Documento da compilare con i propri dati."
            ],
            [
                "reclamo",
                "reclamação / queixa",
                "Protesto formale per un disservizio."
            ],
            [
                "sportello pubblico",
                "guichê de atendimento público",
                "Ufficio aperto al pubblico."
            ],
            [
                "certificato di residenza",
                "comprovante de residência",
                "Documento ufficiale dell'anagrafe."
            ],
            [
                "marca da bollo",
                "selo fiscal / taxa burocrática",
                "Tassa statale adesiva per documenti."
            ],
            [
                "permesso di soggiorno",
                "autorização de permanência / visto",
                "Documento per cittadini stranieri."
            ]
        ],
        "gramatica": [
            [
                "Compilare moduli e documenti ufficiali",
                "Instruções burocráticas no particípio ou infinitivo: compilare in stampatello (preencher em letra de forma), allegare copia del documento.",
                "preencher em letra de forma / anexar",
                "Si prega di compilare il modulo in stampatello leggibile."
            ],
            [
                "Formulare un reclamo formale",
                "Expressões formais: Vorrei sporgere reclamo per... / Desidero segnalare un disservizio...",
                "apresentar reclamação / assinalar falha",
                "Vorrei sporgere reclamo per il ritardo del rimborso."
            ],
            [
                "Uso della forma passiva e costrutti formali",
                "A solicitação deve ser apresentada dentro do prazo: La domanda deve essere presentata entro il 30 del mese.",
                "dever ser + particípio",
                "La documentazione richiesta deve essere allegata alla domanda."
            ]
        ],
        "frases": [
            [
                "Per richiedere il certificato di residenza è necessario compilare questo modulo e pagare la marca da bollo.",
                "Para solicitar o comprovante de residência é necessário preencher este formulário e pagar o selo fiscal."
            ],
            [
                "Desidero segnalare un disservizio riguardo al ritardo nella consegna dei documenti ufficiali.",
                "Desejo comunicar uma falha de serviço a respeito do atraso na entrega dos documentos oficiais."
            ]
        ],
        "dialogo": [
            [
                "Impiegato",
                "Buongiorno. Ha portato con sé la copia del documento di identità e il permesso di soggiorno?",
                "Bom dia. Trouxe consigo a cópia do documento de identidade e a autorização de permanência?"
            ],
            [
                "Cittadino",
                "Sì, ecco tutti i documenti richiesti allegati al modulo di domanda.",
                "Sim, aqui estão todos os documentos solicitados anexados ao formulário de requerimento."
            ]
        ]
    },
    {
        "titulo": "Ambiente, sostenibilità e territorio",
        "contexto": "Conversar sobre ecologia, reciclagem, energias renováveis e a preservação do patrimônio natural da Itália.",
        "vocabulario": [
            [
                "raccolta differenziata",
                "coleta seletiva de lixo",
                "Separazione dei rifiuti per il riciclaggio."
            ],
            [
                "energia rinnovabile",
                "energia renovável",
                "Energia solare, eolica o idroelettrica."
            ],
            [
                "parco nazionale",
                "parque nacional",
                "Area naturale protetta dallo Stato."
            ],
            [
                "riciclaggio",
                "reciclagem",
                "Processo di riutilizzo dei materiali."
            ],
            [
                "inquinamento",
                "poluição",
                "Contaminazione dell'ambiente."
            ],
            [
                "sostenibilità",
                "sustentabilidade",
                "Uso responsabile delle risorse naturali."
            ]
        ],
        "gramatica": [
            [
                "Esprimere necessità ambientali",
                "Usar expressões como è fondamentale che, bisogna ridurre, è urgente proteggere.",
                "é fundamental que + subjuntivo",
                "È fondamentale che si riduca l'uso della plastica monouso."
            ],
            [
                "Lessico della tutela ambientale",
                "Distinguição entre resíduos orgânicos, vidro, papel, plástico e indiferenciado.",
                "tipologias de resíduos",
                "In questo comune la raccolta differenziata è obbligatoria per tutti."
            ],
            [
                "Costrutti di causa-effetto nei problemi ecologici",
                "A causa di, di conseguenza, porta a.",
                "por causa de ➔ consequência",
                "A causa dell'inquinamento molte specie animali sono a rischio."
            ]
        ],
        "frases": [
            [
                "Nel nostro quartiere facciamo la raccolta differenziata per separare la carta, il vetro e la plastica.",
                "No nosso bairro fazemos a coleta seletiva para separar o papel, o vidro e o plástico."
            ],
            [
                "L'Italia possiede straordinari parchi nazionali che proteggono la biodiversità del territorio.",
                "A Itália possui extraordinários parques nacionais que protegem a biodiversidade do território."
            ]
        ],
        "dialogo": [
            [
                "Ecologista",
                "È urgente che la nostra città investa maggiormente nelle energie rinnovabili come i pannelli solari.",
                "É urgente que a nossa cidade invista mais nas energias renováveis como os painéis solares."
            ],
            [
                "Cittadino",
                "Sono d'accordo! Inoltre dovremmo usare di più i mezzi pubblici e la bicicletta.",
                "Concordo! Além disso deveríamos usar mais os transportes públicos e a bicicleta."
            ]
        ]
    },
    {
        "titulo": "Tradizioni regionali e feste popolari",
        "contexto": "Explorar a diversidade cultural da Itália, festas populares (Palio, Carnevale) e feiras gastronômicas (sagre).",
        "vocabulario": [
            [
                "sagra",
                "feira / festa gastronômica regional",
                "Festa popolare dedicata a un prodotto tipico locale."
            ],
            [
                "palio",
                "corrida / competição tradicional (ex: Palio di Siena)",
                "Competizione storica tra rioni o contrade."
            ],
            [
                "carnevale",
                "carnaval",
                "Festa tradizionale con maschere e sfilate."
            ],
            [
                "patrimonio culturale",
                "patrimônio cultural",
                "Insieme dei beni culturali e tradizioni."
            ],
            [
                "artigianato",
                "artesanato",
                "Produzione manuale di oggetti tradizionali."
            ],
            [
                "folclore",
                "folclore / tradições locais",
                "Usi, canti e danze popolari di una regione."
            ]
        ],
        "gramatica": [
            [
                "Desentire tradizioni con verbi al presente e imperfetto",
                "Explicar as origens históricas das festas regionais italianas.",
                "celebra-se / remonta a / realiza-se",
                "La festa del Carnevale di Venezia risale al XII secolo."
            ],
            [
                "Aggettivi di appartenenza regionale",
                "Toscano, siciliano, napoletano, emiliano, veneto, sardo, lombardo.",
                "adjetivos de origem regional",
                "Abbiamo assaggiato le specialità della cucina emiliana durante la sagra."
            ],
            [
                "Espressioni per descrivere eventi popolari",
                "Ter lugar, realizar-se, atrair milhares de visitantes.",
                "realizar-se / atrair visitantes",
                "Il Palio di Siena si svolge ogni anno in Piazza del Campo."
            ]
        ],
        "frases": [
            [
                "La sagra del tartufo in Piemonte attira ogni anno migliaia di turisti e appassionati di enogastronomia.",
                "A feira do cogumelo trufa no Piemonte atrai todos os anos milhares de turistas e apaixonados por enogastronomia."
            ],
            [
                "Durante il Carnevale di Venezia le persone indossano maschere tradizionali ed eleganti costumi d'epoca.",
                "Durante o Carnaval de Veneza as pessoas vestem máscaras tradicionais e elegantes figurinos de época."
            ]
        ],
        "dialogo": [
            [
                "Guida",
                "Il Palio di Siena è una competizione storica tra le diciassette contrade della città.",
                "O Palio de Siena é uma competição histórica entre os dezesseis bairros tradicionais da cidade."
            ],
            [
                "Turista",
                "È affascinante come queste tradizioni medievali siano ancora così vive e sentite dalla popolazione!",
                "É fascinante como estas tradições medievais ainda são tão vivas e sentidas pela população!"
            ]
        ]
    },
    {
        "titulo": "Tecnologia e vita digitale",
        "contexto": "Discutir o impacto das redes sociais, inteligência artificial, compras virtuais e privacidade na vida moderna.",
        "vocabulario": [
            [
                "rete sociale",
                "rede social",
                "Piattaforma digitale di condivisione."
            ],
            [
                "intelligenza artificiale",
                "inteligência artificial (IA)",
                "Tecnologia di simulazione del pensiero umano."
            ],
            [
                "privacy",
                "privacidade",
                "Tutela dei dati personali online."
            ],
            [
                "commercio elettronico",
                "comércio eletrônico / compras online",
                "Acquisto di beni su Internet."
            ],
            [
                "applicazione",
                "aplicativo (app)",
                "Software per dispositivi mobili."
            ],
            [
                "dispositivo",
                "dispositivo / aparelho",
                "Smartphone, tablet o computer."
            ]
        ],
        "gramatica": [
            [
                "Esprimere dubbi e speranze sulla tecnologia",
                "Usar o subjuntivo para avaliar o impacto das novas tecnologias.",
                "temer que / esperar que + subjuntivo",
                "Temo che l'uso eccessivo dei social network riduca la concentrazione dei giovani."
            ],
            [
                "Verbi del mondo digitale in italiano",
                "Scaricare (baixar/fazer download), caricare (enviar/fazer upload), navigare in rete, proteggere i dati.",
                "baixar / navegar / proteger",
                "È importante scaricare solo applicazioni da fonti sicure."
            ],
            [
                "Connettivi di sintesi e argomentazione tecnologica",
                "Por um lado... por outro lado..., em conclusão.",
                "por um lado / por outro lado",
                "Da un lato la tecnologia semplifica la vita, dall'altro crea dipendenza."
            ]
        ],
        "frases": [
            [
                "Le applicazioni di commercio elettronico permettono di acquistare prodotti da tutto il mondo in pochi clic.",
                "Os aplicativos de comércio eletrônico permitem comprar produtos do mundo todo em poucos cliques."
            ],
            [
                "È necessario che gli utenti proteggano la propria privacy quando condividono informazioni personali in rete.",
                "É necessário que os usuários protejam sua própria privacidade quando compartilham informações pessoais na rede."
            ]
        ],
        "dialogo": [
            [
                "Esperto",
                "L'intelligenza artificiale sta trasformando il modo in cui lavoriamo e comunichiamo ogni giorno.",
                "A inteligência artificial está transformando o modo como trabalhamos e nos comunicamos todos os dias."
            ],
            [
                "Utente",
                "Speriamo che questo sviluppo tecnologico porti benefici reali senza minacciare i posti di lavoro.",
                "Esperemos que este desenvolvimento tecnológico traga benefícios reais sem ameaçar os postos de trabalho."
            ]
        ]
    },
    {
        "titulo": "Revisione generale B1",
        "contexto": "Consolidar subjuntivo presente, condicional, partículas ci/ne, pronomes combinados e conectores lógicos.",
        "vocabulario": [
            [
                "consolidamento",
                "consolidação",
                "Rafforzamento delle competenze grammaticali B1."
            ],
            [
                "padronanza",
                "domínio / fluência",
                "Capacità di usare la lingua con autonomia."
            ],
            [
                "articolazione",
                "articulação",
                "Capacità di collegare le frasi in modo fluido."
            ],
            [
                "registro formale",
                "registro formal",
                "Linguaggio formale per contesti di lavoro e burocrazia."
            ],
            [
                "autonomia",
                "autonomia",
                "Capacità di comunicare senza esitazione."
            ],
            [
                "valutazione",
                "avaliação",
                "Verifica finale dei progressi raggiunti."
            ]
        ],
        "gramatica": [
            [
                "Sintesi del congiuntivo e condizionale",
                "Revisão dos verbos de opinião (penso che sia) e pedidos corteses (vorrei / potrei).",
                "subjuntivo presente + condicional simples",
                "Vorrei che tutti gli studenti partecipassero alla discussione."
            ],
            [
                "Sintesi di ci, ne e pronomi combinati",
                "Substituição avançada de lugares (ci vado), quantitativos (ne voglio tre) e combinados (glielo do).",
                "ci / ne / pronomes combinados",
                "Se hai bisogno del libro, glielo chiedo e te lo porto."
            ],
            [
                "Sintesi dei connettivi e della forma impersonale",
                "Uso de tuttavia, siccome, sebbene e si impessoal (si mangia / si vive).",
                "conectores textuais + si impessoal",
                "Siccome in Italia si mangia bene, tutti i turisti ne sono entusiasti."
            ]
        ],
        "frases": [
            [
                "In questo livello B1 abbiamo consolidato il congiuntivo, il condizionale, le particelle ci e ne e i pronomi combinati.",
                "Neste nível B1 consolidamos o subjuntivo, o condicional, as partículas ci e ne e os pronomes combinados."
            ],
            [
                "Ora siamo in grado di esprimere opinioni dettagliate, argomentare in un dibattito e gestire contesti formali.",
                "Agora somos capazes de expressar opiniões detalhadas, argumentar em um debate e gerenciar contextos formais."
            ]
        ],
        "dialogo": [
            [
                "Insegnante",
                "Complimenti per il vostro percorso! Avete raggiunto un ottimo livello di autonomia comunicativa in italiano.",
                "Parabéns pelo percurso de vocês! Atingiram um ótimo nível de autonomia comunicativa em italiano."
            ],
            [
                "Studente",
                "Grazie mille! Ora mi sento pronto per affrontare la sfida finale e discutere argomenti culturali complessi.",
                "Muito obrigado! Agora me sinto pronto para enfrentar o desafio final e discutir assuntos culturais complexos."
            ]
        ]
    },
    {
        "titulo": "Sfida Finale B1: Presentazione e dibattito culturale",
        "contexto": "Teste final abrangente de 30 questões integrando todos os conteúdos gramaticais e comunicativos do Nível B1.",
        "vocabulario": [
            [
                "sfida finale",
                "desafio final",
                "Il test di valutazione finale del livello B1."
            ],
            [
                "presentazione",
                "apresentação",
                "Esposizione orale o scritta di un tema culturale."
            ],
            [
                "dibattito",
                "debate",
                "Discussione strutturata su opinioni contrapposte."
            ],
            [
                "traguardo B1",
                "meta B1",
                "Raggiungimento della soglia intermedia di autonomia."
            ],
            [
                "certificazione",
                "certificação",
                "Attestato di competenza linguistica B1."
            ],
            [
                "eccellenza",
                "excelência",
                "Risultato eccellente nel test finale."
            ]
        ],
        "gramatica": [
            [
                "Integrazione totale delle competenze B1",
                "O teste final verifica o uso correto do subjuntivo, condicional, partículas pronominais, conectores e registro formal.",
                "síntese gramatical global B1",
                "Penso che tu debba dirglielo appena sarai arrivato."
            ],
            [
                "Strategie di risoluzione per le domande complesse",
                "Prestar atenção às regências verbais com o subjuntivo, à concordância do particípio com ne/pronomes combinados e ao uso das preposições com cui.",
                "atenção a subjuntivo, pronomes e concordância",
                "Gliel'ho detta ieri sera prima di uscire."
            ],
            [
                "Conferma dell'autonomia comunicativa B1",
                "Superando a prova demonstra-se a capacidade de compreender e produzir textos articulados e sustentar debates.",
                "nível limite B1 (CEFR)",
                "Ha superato la sfida finale con un punteggio eccellente!"
            ]
        ],
        "frases": [
            [
                "Benvenuti alla sfida finale del livello B1 di italiano: trenta domande per dimostrare la vostra piena autonomia linguistica!",
                "Bem-vindos ao desafio final do nível B1 de italiano: trinta perguntas para demonstrar sua plena autonomia linguística!"
            ],
            [
                "Ho superato la sfida finale B1 con successo e ora posso esprimere opinioni, argomentare e dibattere in italiano!",
                "Passei no desafio final B1 com sucesso e agora posso expressar opiniões, argumentar e debater em italiano!"
            ]
        ],
        "dialogo": [
            [
                "Esaminatore",
                "Siete pronti per la prova finale B1 che valuterà il congiuntivo, il condizionale, le particelle e il linguaggio formale?",
                "Vocês estão prontos para a prova final B1 que avaliará o subjuntivo, o condicional, as partículas e a linguagem formal?"
            ],
            [
                "Studente",
                "Sì, sono prontissimo! Ho ripassato tutte le regole e i connettivi testuali per affrontare al meglio il test.",
                "Sim, estou prontíssimo! Revisei todas as regras e os conectores textuais para enfrentar da melhor forma o teste."
            ]
        ]
    }
];

const SFIDA_FINALE_QUIZ_B1 = [
    {
        "question": "Quale tempo verbale si usa per esprimere lo sfondo e gli stati duraturi nel passato?",
        "options": [
            "Passato prossimo",
            "Imperfetto",
            "Futuro anteriore",
            "Passato remoto"
        ],
        "correctIndex": 1,
        "explanation": "L'imperfetto si usa per descrizioni, stati d'animo e azioni durature nel passato."
    },
    {
        "question": "Completa con la forma corretta del futuro anteriore: \"Appena _____ (arriverà), inizieremo la riunione.\"",
        "options": [
            "sarà arrivato",
            "è arrivato",
            "arriverà",
            "fosse arrivato"
        ],
        "correctIndex": 0,
        "explanation": "Futuro anteriore con essere per indicare un'azione antecedente a un altro evento futuro."
    },
    {
        "question": "Quale frase esprime una richiesta cortese al condizionale semplice?",
        "options": [
            "Voglio un bicchiere d'acqua.",
            "Vorrei un bicchiere d'acqua, per favore.",
            "Bevo un bicchiere d'acqua.",
            "Bevi un bicchiere d'acqua!"
        ],
        "correctIndex": 1,
        "explanation": "\"Vorrei\" è la forma cortese del condizionale per fare richieste gentili."
    },
    {
        "question": "Trasforma con il pronome combinato: \"Ho inviato la lettera a Marco\" ➔ \"_____ ho inviata.\"",
        "options": [
            "Gliela",
            "Glielo",
            "Te la",
            "Me la"
        ],
        "correctIndex": 0,
        "explanation": "A Marco (gli) + la lettera (la) = Gliela (con accordo del participio in -a)."
    },
    {
        "question": "Sostituisci il luogo con la particella corretta: \"Sei mai stato a Roma?\" ➔ \"Sì, _____ sono stato.\"",
        "options": [
            "ne",
            "ci",
            "lo",
            "le"
        ],
        "correctIndex": 1,
        "explanation": "\"Ci\" sostituisce un luogo espresso con a, in, su, da (a Roma ➔ ci)."
    },
    {
        "question": "Sostituisci il partitivo: \"Quanti caffè bevi al giorno?\" ➔ \"_____ bevo due.\"",
        "options": [
            "Ci",
            "Ne",
            "Li",
            "Lo"
        ],
        "correctIndex": 1,
        "explanation": "\"Ne\" si usa per esprimere quantità partitive specificate da un numero."
    },
    {
        "question": "Completa con il relativo corretto: \"La città _____ vivo è molto bella.\"",
        "options": [
            "che",
            "in cui",
            "di cui",
            "il quale"
        ],
        "correctIndex": 1,
        "explanation": "\"In cui\" (o nella quale) si usa per complementi di luogo con preposizione."
    },
    {
        "question": "Unisci verbo e pronome all'imperativo informale: \"Di' a me la verità!\" ➔ \"____!\"",
        "options": [
            "Dimmi",
            "Dimi",
            "Dillo",
            "Digli"
        ],
        "correctIndex": 0,
        "explanation": "Con di' + mi si ha il raddoppiamento sintattico della consonante: Dimmi."
    },
    {
        "question": "Quale frase contiene la forma impersonale con \"si\" corretta?",
        "options": [
            "In Italia si mangiano molta pasta.",
            "In Italia si mangia molta pasta.",
            "In Italia si mangiasse molta pasta.",
            "In Italia si mangiati molta pasta."
        ],
        "correctIndex": 1,
        "explanation": "Si + verbo alla 3ª persona singolare con sostantivo singolare o di massa."
    },
    {
        "question": "Completa con il congiuntivo presente: \"Penso che Marco _____ (essere) in ritardo.\"",
        "options": [
            "è",
            "sia",
            "sarà",
            "fosse"
        ],
        "correctIndex": 1,
        "explanation": "I verbi di opinione (pensare che) reggono il congiuntivo presente (sia)."
    },
    {
        "question": "Completa con il congiuntivo presente: \"Spero che voi _____ (venire) alla festa.\"",
        "options": [
            "venite",
            "veniate",
            "verrete",
            "venissi"
        ],
        "correctIndex": 1,
        "explanation": "2ª persona plurale del congiuntivo presente di venire = veniate."
    },
    {
        "question": "Quale connettivo esprime una causa ed è posto all'INIZIO della frase?",
        "options": [
            "Quindi",
            "Tuttavia",
            "Siccome",
            "Infatti"
        ],
        "correctIndex": 2,
        "explanation": "\"Siccome\" si usa all'inizio della frase per introdurre la causa."
    },
    {
        "question": "Quale connettivo avversativo regge l'INDICATIVO per esprimere un contrasto?",
        "options": [
            "Sebbene",
            "Tuttavia",
            "Quantunque",
            "Affinché"
        ],
        "correctIndex": 1,
        "explanation": "\"Tuttavia\" si usa con l'indicativo, a differenza di sebbene che richiede il congiuntivo."
    },
    {
        "question": "In un racconto storico, quale tempo verbale letterario si usa per azioni lontane?",
        "options": [
            "Passato remoto",
            "Imperfetto",
            "Presente",
            "Futuro anteriore"
        ],
        "correctIndex": 0,
        "explanation": "Il passato remoto è il tempo classico della narrazione storica e letteraria."
    },
    {
        "question": "Come si esprime cortesemente un dissenso in un dibattito?",
        "options": [
            "Hai torto marcio!",
            "Capisco il tuo punto di vista, tuttavia non condivido.",
            "Non me ne importa nulla.",
            "Stai dicendo una sciocchezza."
        ],
        "correctIndex": 1,
        "explanation": "\"Capisco il tuo punto di vista, tuttavia...\" è la forma educata di dissenso."
    },
    {
        "question": "Che cos'è un \"contratto a tempo indeterminato\" nel mondo del lavoro?",
        "options": [
            "Un contratto temporaneo di un mese.",
            "Un contratto di lavoro stabile senza data di scadenza.",
            "Un tirocinio non retribuito.",
            "Un contratto a ore flessibili."
        ],
        "correctIndex": 1,
        "explanation": "Un contratto a tempo indeterminato è una posizione lavorativa stabile e fissa."
    },
    {
        "question": "Qual è il voto Massimo con lode in un esame universitario italiano?",
        "options": [
            "10 e lode",
            "30 e lode",
            "100 e lode",
            "110 e lode"
        ],
        "correctIndex": 1,
        "explanation": "Gli esami universitari singoli in Italia sono valutati in trentesimi (massimo 30 e lode)."
    },
    {
        "question": "Quale forma verbale si usa nei giornali per notizie NON ancora confermate ufficialmente?",
        "options": [
            "Indicativo presente",
            "Condizionale giornalistico",
            "Imperativo",
            "Gerundio"
        ],
        "correctIndex": 1,
        "explanation": "Il condizionale giornalistico esprime notizie presunte o non verificate."
    },
    {
        "question": "Come si chiama il regista in un film cinematografico?",
        "options": [
            "L'attore principale",
            "Chi dirige la realizzazione del film",
            "Il produttore esecutivo",
            "Lo scenografo"
        ],
        "correctIndex": 1,
        "explanation": "Il regista è il responsabile della regia e della direzione artistica del film."
    },
    {
        "question": "Cosa si incolla su un documento ufficiale italiano per pagare la tassa di bollo?",
        "options": [
            "Un francobollo postale",
            "Una marca da bollo",
            "Uno scontrino fiscale",
            "Una ricevuta bancaria"
        ],
        "correctIndex": 1,
        "explanation": "La marca da bollo è una tassa adesiva richiesta per documenti burocratici."
    },
    {
        "question": "Come si chiama la raccolta differenziata dei rifiuti organici e riciclabili?",
        "options": [
            "Discarica abusiva",
            "Raccolta differenziata",
            "Inquinamento urbano",
            "Traffico cittadino"
        ],
        "correctIndex": 1,
        "explanation": "La raccolta differenziata consiste nello separare i rifiuti per il riciclaggio."
    },
    {
        "question": "Che cos'è una \"sagra\" nelle tradizioni regionali italiane?",
        "options": [
            "Un esame universitario",
            "Una festa popolare gastronomica dedicata a un prodotto locale",
            "Una gara automobilistica",
            "Un tipo di contratto"
        ],
        "correctIndex": 1,
        "explanation": "Una sagra è una festa popolare regionale legata ai prodotti tipici del territorio."
    },
    {
        "question": "Quale verbo descrive l'azione di scaricare un file o app da Internet?",
        "options": [
            "Caricare",
            "Scaricare",
            "Navigare",
            "Cancellare"
        ],
        "correctIndex": 1,
        "explanation": "\"Scaricare\" significa effettuare il download di dati o applicazioni."
    },
    {
        "question": "Completa con il pronome relativo: \"Il libro _____ ti ho parlato è molto interessante.\"",
        "options": [
            "che",
            "di cui",
            "in cui",
            "il quale"
        ],
        "correctIndex": 1,
        "explanation": "Parlare richiede \"di\", quindi il relativo con preposizione è \"di cui\"."
    },
    {
        "question": "Completa: \"Se avessi tempo, _____ (andare) al cinema.\"",
        "options": [
            "andrei",
            "andrò",
            "andavo",
            "sono andato"
        ],
        "correctIndex": 0,
        "explanation": "\"Andrei\" è il condizionale semplice del verbo andare."
    },
    {
        "question": "Qual è il participio passato accordato con NE: \"Quante mele hai mangiato?\" ➔ \"Ne ho _____ due.\"",
        "options": [
            "mangiatu",
            "mangiato",
            "mangiate",
            "mangiati"
        ],
        "correctIndex": 2,
        "explanation": "Mele è femminile plurale, quindi il participio passato concorda in -e (mangiate)."
    },
    {
        "question": "Completa con il verbo riflessivo impersonale: \"La domenica ci si _____ (svegliare) tardi.\"",
        "options": [
            "svegliamo",
            "sveglia",
            "svegliano",
            "svegliate"
        ],
        "correctIndex": 1,
        "explanation": "Con ci si + verbo alla 3ª persona singolare (ci si sveglia)."
    },
    {
        "question": "Scegli la forma corretta del congiuntivo: \"È importante che voi _____ (studiare).\"",
        "options": [
            "studiate",
            "studierete",
            "studiaste",
            "studiassi"
        ],
        "correctIndex": 0,
        "explanation": "2ª persona plurale del congiuntivo presente di studiare = studiate."
    },
    {
        "question": "Completa il pronome combinato: \"Marco voleva il libro e io _____ (a lui + esso) ho dato.\"",
        "options": [
            "glielo",
            "gliela",
            "te lo",
            "me lo"
        ],
        "correctIndex": 0,
        "explanation": "A lui (gli) + il libro (lo) = Glielo."
    },
    {
        "question": "Che livello di competenza linguistica si raggiunge con il completamento del corso B1?",
        "options": [
            "Principiante assoluto",
            "Autonomia comunicativa intermedia (Livello Soglia)",
            "Madrelingua avanzato",
            "Solo lettura"
        ],
        "correctIndex": 1,
        "explanation": "Il livello B1 (CEFR) rappresenta la soglia di autonomia comunicativa intermedia."
    }
];

MODULOS_ITALIANO_B1.forEach((modulo, index) => {
    const isLast = (index === 23);
    CURSO_ITALIANO_B1_DADOS.push(criarModuloItalianoB1(
        index + 1,
        modulo.titulo,
        modulo.contexto,
        modulo.vocabulario,
        modulo.gramatica,
        modulo.frases,
        modulo.dialogo,
        isLast ? SFIDA_FINALE_QUIZ_B1 : null
    ));
});

if (typeof window !== 'undefined') window.CURSO_ITALIANO_B1_DADOS = CURSO_ITALIANO_B1_DADOS;
if (typeof module !== 'undefined' && module.exports) module.exports = { CURSO_ITALIANO_B1_DADOS };
