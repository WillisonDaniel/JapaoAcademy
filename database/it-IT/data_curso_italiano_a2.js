// ============================================================================
// DATASET CURSO ITALIANO A2 - HANDCRAFTED 30 MÓDULOS (it-IT)
// IDIOMAS ACADEMY
// ============================================================================

const CURSO_ITALIANO_A2_DADOS = [];

function criarModuloItalianoA2(numero, titulo, contexto, vocabulario, gramatica, frases, dialogo, customQuiz = null) {
    const id = `it_a2_mod_${String(numero).padStart(2, '0')}`;
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
        level: 'A2',
        language: 'it-IT',
        title: `Módulo ${numero}: ${titulo}`,
        desc: contexto,
        description: contexto,
        stage1_context: {
            title: titulo,
            missionTitle: `Missão: ${titulo}`,
            situation: contexto,
            missionDescription: `Compreenda e use o italiano desta situação em uma interação curta e realista.`,
            audioGuide: `Ouça os exemplos em italiano e repita respeitando o ritmo e as consoantes.`
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

const MODULOS_ITALIANO_A2 = [
    {
        "titulo": "Il passato prossimo con avere",
        "contexto": "Expressar ações concluídas no passado recente usando o auxiliar avere e particípios passados regulares (-ato, -uto, -ito).",
        "vocabulario": [
            [
                "parlato",
                "falado",
                "Particípio passado de parlare (-are ➔ -ato)."
            ],
            [
                "ricevuto",
                "recebido",
                "Particípio passado de ricevere (-ere ➔ -uto)."
            ],
            [
                "dormito",
                "dormido",
                "Particípio passado de dormire (-ire ➔ -ito)."
            ],
            [
                "mangiato",
                "comido",
                "Particípio passado de mangiare (-are ➔ -ato)."
            ],
            [
                "venduto",
                "vendido",
                "Particípio passado de vendere (-ere ➔ -uto)."
            ],
            [
                "finito",
                "acabado / terminado",
                "Particípio passado de finire (-ire ➔ -ito)."
            ]
        ],
        "gramatica": [
            [
                "Formação com avere",
                "O passato prossimo com avere é formado por avere no presente + particípio passado. O particípio em -ato, -uto, -ito permanece invariável.",
                "avere (ho/hai/ha/abbiamo/avete/hanno) + particípio",
                "Ho parlato con Marco ieri."
            ],
            [
                "Regra de desinências",
                "Verbos em -are fazem -ato; verbos em -ere fazem -uto; verbos em -ire fazem -ito.",
                "-are ➔ -ato | -ere ➔ -uto | -ire ➔ -ito",
                "Abbiamo venduto la macchina e finito il lavoro."
            ]
        ],
        "frases": [
            [
                "Ieri ho parlato con il professore di italiano.",
                "Ontem falei com o professor de italiano."
            ],
            [
                "Abbiamo mangiato una pizza e dormito bene.",
                "Comemos uma pizza e dormimos bem."
            ]
        ],
        "dialogo": [
            [
                "Luca",
                "Hai comprato il biglietto per il treno?",
                "Você comprou a passagem para o trem?"
            ],
            [
                "Giulia",
                "Sì, ho comprato il biglietto e ho già pagato.",
                "Sim, comprei a passagem e já paguei."
            ]
        ]
    },
    {
        "titulo": "Il passato prossimo con essere",
        "contexto": "Expressar movimento, mudança de estado e permanência com o auxiliar essere e concordância de gênero e número.",
        "vocabulario": [
            [
                "andato",
                "ido (masc.)",
                "Concorda com o sujeito: andato / andata / andati / andate."
            ],
            [
                "venuta",
                "vinda (fem.)",
                "Particípio feminino singular de venire com essere."
            ],
            [
                "partiti",
                "partidos / saídos (masc. pl.)",
                "Plural masculino de partire."
            ],
            [
                "tornata",
                "retornada / voltada (fem.)",
                "Particípio feminino singular de tornare."
            ],
            [
                "stato",
                "estado / sido (masc.)",
                "Particípio de essere (e stare)."
            ],
            [
                "arrivati",
                "chegados (masc. pl.)",
                "Particípio plural masculino de arrivare."
            ]
        ],
        "gramatica": [
            [
                "Verbos com essere",
                "Verbos de movimento (andare, venire, partire, tornare), permanência (stare, rimanere) e mudança de estado usam essere.",
                "essere (sono/sei/è/siamo/siete/sono) + particípio flexionado",
                "Maria è andata a Roma."
            ],
            [
                "Concordância de gênero e número",
                "Quando o auxiliar é essere, a terminação do particípio concorda com o sujeito (-o, -a, -i, -e).",
                "sujeito masc/fem/sg/pl ➔ -o / -a / -i / -e",
                "I ragazzi sono partiti, le ragazze sono tornate."
            ]
        ],
        "frases": [
            [
                "Sono andato a Milano la settimana scorsa.",
                "Fui a Milão na semana passada."
            ],
            [
                "Chiara è arrivata in ritardo alla stazione.",
                "Chiara chegou atrasada à estação."
            ]
        ],
        "dialogo": [
            [
                "Paolo",
                "Dove sei andata questo fine settimana, Sofia?",
                "Aonde você foi neste fim de semana, Sofia?"
            ],
            [
                "Sofia",
                "Sono stata a Firenze con le mie amiche e siamo tornate domenica.",
                "Estive em Florença com minhas amigas e voltamos no domingo."
            ]
        ]
    },
    {
        "titulo": "Participi passati irregolari frequenti",
        "contexto": "Reconhecer e empregar os particípios passados irregulares mais usados na comunicação cotidiana.",
        "vocabulario": [
            [
                "fatto",
                "feito",
                "Particípio passado de fare."
            ],
            [
                "visto",
                "visto",
                "Particípio passado de vedere."
            ],
            [
                "preso",
                "pego / tomado",
                "Particípio passado de prendere."
            ],
            [
                "aperto",
                "aberto",
                "Particípio passado de aprire."
            ],
            [
                "detto",
                "dito",
                "Particípio passado de dire."
            ],
            [
                "scritto",
                "escrito",
                "Particípio passado de scrivere."
            ]
        ],
        "gramatica": [
            [
                "Estrutura de particípios irregulares",
                "Muitos verbos essenciais têm particípio passado irregular em -tto (fare ➔ fatto, dire ➔ detto) ou -so (prendere ➔ preso).",
                "verbo ➔ particípio irregular",
                "Ho fatto colazione e ho preso il treno."
            ],
            [
                "Uso sintático",
                "Mesmo com particípio irregular, o auxiliar (avere ou essere) segue as regras gerais de transitividade.",
                "avere/essere + particípio irregular",
                "Hai visto quel film? Abbiamo aperto la finestra."
            ]
        ],
        "frases": [
            [
                "Ho scritto una lettera al direttore e ho detto la verità.",
                "Escrevi uma carta ao diretor e disse a verdade."
            ],
            [
                "Avete preso il caffè e aperto le finestre?",
                "Vocês tomaram o café e abriram as janelas?"
            ]
        ],
        "dialogo": [
            [
                "Matteo",
                "Hai visto il nuovo museo in centro?",
                "Você viu o novo museu no centro?"
            ],
            [
                "Elena",
                "Sì, ho preso una mappa e ho fatto un giro bellissimo.",
                "Sim, peguei um mapa e fiz um passeio lindo."
            ]
        ]
    },
    {
        "titulo": "I pronomi diretti",
        "contexto": "Substituir substantivos complemento direto (quem? o quê?) por mi, ti, lo, la, ci, vi, li, le.",
        "vocabulario": [
            [
                "lo",
                "o / ele (obj. direto)",
                "Substitui um substantivo masculino singular (es: il libro ➔ lo leggo)."
            ],
            [
                "la",
                "a / ela (obj. direto)",
                "Substitui um substantivo feminino singular (es: la pizza ➔ la mangio)."
            ],
            [
                "li",
                "os / eles (obj. direto)",
                "Substitui um substantivo masculino plural (es: i biglietti ➔ li compro)."
            ],
            [
                "le",
                "as / elas (obj. direto)",
                "Substitui um substantivo feminino plural (es: le chiavi ➔ le trovo)."
            ],
            [
                "mi",
                "me",
                "Primeira pessoa singular objeto direto."
            ],
            [
                "ti",
                "te",
                "Segunda pessoa singular objeto direto."
            ]
        ],
        "gramatica": [
            [
                "Função dos pronomes diretos",
                "Os pronomes diretos substituem o objeto direto sem preposição antecedendo o verbo conjugado.",
                "pronome direto + verbo",
                "Conosci Marco? — Sì, lo conosco."
            ],
            [
                "Posição na frase",
                "O pronome precede o verbo conjugado (Lo vedo), mas se une ao infinitivo se houver verbo modal (Voglio vederlo / Lo voglio vedere).",
                "pronome + verbo ou infinitivo+pronome",
                "Mangio la pasta ➔ La mangio."
            ]
        ],
        "frases": [
            [
                "Conosci quella ragazza? — Sì, la conosco molto bene.",
                "Você conhece aquela garota? — Sim, eu a conheço muito bem."
            ],
            [
                "Compri i biglietti? — Sì, li compro subito.",
                "Você vai comprar os ingressos? — Sim, vou comprá-los imediatamente."
            ]
        ],
        "dialogo": [
            [
                "Stefano",
                "Dove sono le mie chiavi? Le vedi?",
                "Onde estão minhas chaves? Você as vê?"
            ],
            [
                "Laura",
                "Sì, le vedo sul tavolo vicino alla borsa!",
                "Sim, eu as vejo na mesa perto da bolsa!"
            ]
        ]
    },
    {
        "titulo": "I pronomi diretti nei tempi composti",
        "contexto": "Combinar pronomes diretos com o passato prossimo e aplicar a concordância obrigatória do particípio.",
        "vocabulario": [
            [
                "l'ho visto",
                "eu o vi",
                "Contração de lo ho visto (masculino singular)."
            ],
            [
                "l'ho vista",
                "eu a vi",
                "Contração de la ho vista (feminino singular)."
            ],
            [
                "li ho visti",
                "eu os vi",
                "Forma plural masculina com concordância em -i."
            ],
            [
                "le ho viste",
                "eu as vi",
                "Forma plural feminina com concordância em -e."
            ],
            [
                "l'ho comprato",
                "eu o comprei",
                "Contração com particípio masculino em -o."
            ],
            [
                "l'ho letta",
                "eu a li",
                "Contração com particípio feminino em -a."
            ]
        ],
        "gramatica": [
            [
                "Concordância obrigatória no passato prossimo",
                "Ao usar lo, la, li, le com passato prossimo (avere), o particípio concorda em gênero e número com o pronome.",
                "lo/la ➔ l' + ha/ho + -o/-a | li/le ➔ -i/-e",
                "Hai visto la lettera? — Sì, l'ho letta."
            ],
            [
                "Apostrofação com lo/la",
                "Lo e la se tornam l' diante do verbo avere no presente (l'ho visto / l'ha vista), mas li e le nunca se apostrofam.",
                "l'ho / l'hai / l'ha vs li ho / le ho",
                "Li ho incontrati ieri sera."
            ]
        ],
        "frases": [
            [
                "Hai comprato le mele? — Sì, le ho comprate tutte.",
                "Você comprou as maçãs? — Sim, comprei-as todas."
            ],
            [
                "Hai conosciuto il nuovo collega? — Sì, l'ho conosciuto stamattina.",
                "Você conheceu o novo colega? — Sim, eu o conheci hoje de manhã."
            ]
        ],
        "dialogo": [
            [
                "Andrea",
                "Hai inviato le email al cliente?",
                "Você enviou os e-mails ao cliente?"
            ],
            [
                "Marta",
                "Sì, le ho inviate mezz'ora fa.",
                "Sim, eu os enviei há meia hora."
            ]
        ]
    },
    {
        "titulo": "I pronomi indiretti",
        "contexto": "Usar mi, ti, gli, le, ci, vi, gli para indicar o complemento indireto (a quem / para quem).",
        "vocabulario": [
            [
                "gli",
                "a ele / a eles",
                "Pronome indireto para a ele (masculino singular) e também a eles (plural)."
            ],
            [
                "le",
                "a ela",
                "Pronome indireto para a ela (feminino singular)."
            ],
            [
                "mi",
                "a mim / me",
                "Pronome indireto primeira pessoa singular (a me)."
            ],
            [
                "ti",
                "a ti / te",
                "Pronome indireto segunda pessoa singular (a te)."
            ],
            [
                "ci",
                "a nós / nos",
                "Pronome indireto primeira pessoa plural (a noi)."
            ],
            [
                "vi",
                "a vós / vos",
                "Pronome indireto segunda pessoa plural (a voi)."
            ]
        ],
        "gramatica": [
            [
                "Complemento indireto (a chi?)",
                "Os pronomes indiretos respondem à pergunta \"a quem?\" e acompanham verbos como parlare a, telefonare a, scrivere a, dare a.",
                "pronome indireto + verbo",
                "Gli parlo domani. (Falo com ele amanhã.)"
            ],
            [
                "Diferença entre le e gli",
                "Le significa \"a ela\" (Le ho parlato = Falei com ela), enquanto Gli significa \"a ele\" (Gli ho parlato = Falei com ele).",
                "Le = a lei | Gli = a lui",
                "Telefoni a Sara? — Sì, le telefono."
            ]
        ],
        "frases": [
            [
                "Gli ho regalato un libro per il suo compleanno.",
                "Dei um livro a ele no seu aniversário."
            ],
            [
                "Le abbiamo scritto un'email ieri sera.",
                "Escrevemos um e-mail a ela ontem à noite."
            ]
        ],
        "dialogo": [
            [
                "Roberto",
                "Hai parlato a Marco del progetto?",
                "Você falou com o Marco sobre o projeto?"
            ],
            [
                "Francesca",
                "Sì, gli ho telefonato ieri e gli ho spiegato tutto.",
                "Sim, liguei para ele ontem e explicai tudo a ele."
            ]
        ]
    },
    {
        "titulo": "Il futuro semplice (Verbi regolari)",
        "contexto": "Expressar projetos futuros, previsões e promessas com verbos regulares em -are, -ere, -ire.",
        "vocabulario": [
            [
                "parlerò",
                "falarei",
                "1ª pessoa singular do futuro de parlare (-are ➔ -erò)."
            ],
            [
                "prenderai",
                "tomarás / pegará",
                "2ª pessoa singular do futuro de prendere (-ere ➔ -erai)."
            ],
            [
                "dormirà",
                "dormirá",
                "3ª pessoa singular do futuro de dormire (-ire ➔ -irà)."
            ],
            [
                "viaggeremo",
                "viajaremos",
                "1ª pessoa plural do futuro de viaggiare."
            ],
            [
                "partirete",
                "partireis / partirão",
                "2ª pessoa plural do futuro de partire."
            ],
            [
                "scriveranno",
                "escreverão",
                "3ª pessoa plural do futuro de scrivere."
            ]
        ],
        "gramatica": [
            [
                "Desinências do futuro simples",
                "Todos os verbos no futuro compartilham as terminações: -ò, -ai, -à, -emo, -ete, -anno. Verbos em -are mudam o a do radical para e (-erò).",
                "radical + -erò / -erai / -erà / -eremo / -erete / -eranno",
                "parlare ➔ parlerò"
            ],
            [
                "Verbos em -ere e -ire",
                "Verbos em -ere usam -erò (prenderò), e verbos em -ire usam -irò (dormirò).",
                "-ere ➔ -erò | -ire ➔ -irò",
                "Domani partirò per Roma."
            ]
        ],
        "frases": [
            [
                "L'anno prossimo visiteremo Firenze e Venezia.",
                "No ano que vem visitaremos Florença e Veneza."
            ],
            [
                "Domani scriverò una lettera e risponderò al messaggio.",
                "Amanhã escreverei uma carta e responderei à mensagem."
            ]
        ],
        "dialogo": [
            [
                "Fabio",
                "Cosa farai questo fine settimana?",
                "O que você fará neste fim de semana?"
            ],
            [
                "Silvia",
                "Resto a casa e studierò per l'esame di italiano.",
                "Ficarei em casa e estudarei para o exame de italiano."
            ]
        ]
    },
    {
        "titulo": "Il futuro semplice (Verbi irregolari)",
        "contexto": "Conjugar e utilizar os verbos irregulares mais importantes no futuro simples (essere, avere, andare, fare, vedere, venire).",
        "vocabulario": [
            [
                "sarò",
                "serei / estarei",
                "Futuro de essere (sarò, sarai, sarà, saremo, sarete, saranno)."
            ],
            [
                "avrò",
                "terei",
                "Futuro de avere (avrò, avrai, avrà, avremo, avrete, avranno)."
            ],
            [
                "andrò",
                "irei",
                "Futuro de andare (andrò, andrai, andrà, andremo...)."
            ],
            [
                "vedrò",
                "verei",
                "Futuro de vedere (vedrò, vedrai, vedrà...)."
            ],
            [
                "farò",
                "farei",
                "Futuro de fare (farò, farai, farà, faremo...)."
            ],
            [
                "verrò",
                "virei",
                "Futuro de venire (verrò, verrai, verrà, verremo...)."
            ]
        ],
        "gramatica": [
            [
                "Radicais irregulares encurtados",
                "Muitos verbos perdem a vogal temática no futuro: avere ➔ avr-, andare ➔ andr-, vedere ➔ vedr-, vivere ➔ vivr-.",
                "raiz encurtada + desinências (-ò, -ai, -à...)",
                "avrò, andrò, vedrò"
            ],
            [
                "Radicais com consoante dupla (rr)",
                "Verbos como venire, rimanere, volere formam o futuro com -rr-: venire ➔ verrò, rimanere ➔ rimarrò, volere ➔ vorrò.",
                "venire ➔ verrò | volere ➔ vorrò",
                "Verrò a casa tua domani."
            ]
        ],
        "frases": [
            [
                "Domani sarò a Roma e vedrò i miei amici.",
                "Amanhã estarei em Roma e verei meus amigos."
            ],
            [
                "Se avrò tempo, farò una passeggiata in centro.",
                "Se eu tiver tempo, farei um passeio no centro."
            ]
        ],
        "dialogo": [
            [
                "Matteo",
                "Verrai alla festa di stasera?",
                "Você virá à festa de hoje à noite?"
            ],
            [
                "Chiara",
                "Sì, vorrò venire, ma prima farò la spesa.",
                "Sim, vou querer ir, mas antes farei as compras."
            ]
        ]
    },
    {
        "titulo": "L'imperfetto indicativo (Usi e forme)",
        "contexto": "Descrever ações habituais, estados duradouros e cenários passados com o imperfeito.",
        "vocabulario": [
            [
                "parlavo",
                "eu falava",
                "Primeira pessoa singular do imperfeito de parlare."
            ],
            [
                "prendevi",
                "tu tomavas / pegavas",
                "Segunda pessoa singular do imperfeito de prendere."
            ],
            [
                "dormiva",
                "ele/ela dormia",
                "Terceira pessoa singular do imperfeito de dormire."
            ],
            [
                "eravamo",
                "nós éramos / estávamos",
                "Primeira pessoa plural do imperfeito de essere."
            ],
            [
                "avevate",
                "vós tínheis / vocês tinham",
                "Segunda pessoa plural do imperfeito de avere."
            ],
            [
                "facevano",
                "eles faziam",
                "Terceira pessoa plural do imperfeito de fare (fac-evo)."
            ]
        ],
        "gramatica": [
            [
                "Formação do imperfeito",
                "Insere-se o sufixo -v- entre a vogal temática (-a-, -e-, -i-) e as desinências: -vo, -vi, -va, -vamo, -vate, -vano.",
                "radical + a/e/i + v + desinência",
                "parlavo, leggevo, partivo"
            ],
            [
                "Usos principais do imperfeito",
                "O imperfeito descreve hábitos passados (Da piccolo giocavo sempre), estados físicos/mentais e descrições de clima/cenário.",
                "hábito / descrição / estado duradouro",
                "Quando ero giovane, abitavo a Firenze."
            ]
        ],
        "frases": [
            [
                "Da bambino giocavo sempre nel parco con i miei amici.",
                "Quando criança eu sempre brincava no parque com meus amigos."
            ],
            [
                "Il tempo era bellissimo e il sole splendeva in cielo.",
                "O tempo estava lindo e o sol brilhava no céu."
            ]
        ],
        "dialogo": [
            [
                "Gianni",
                "Cosa facevi da piccolo durante l'estate?",
                "O que você fazia quando criança durante o verão?"
            ],
            [
                "Simona",
                "Andavo sempre al mare con la mia famiglia e mangiavo molti gelati.",
                "Eu ia sempre ao mar com minha família e comia muitos sorvetes."
            ]
        ]
    },
    {
        "titulo": "Passato prossimo vs. Imperfetto",
        "contexto": "Distinguir ações pontuais e concluídas (passato prossimo) de contextos, hábitos e ações contínuas no passado (imperfeito).",
        "vocabulario": [
            [
                "mentre",
                "enquanto",
                "Conjunção típica que introduz ação contínua no imperfeito."
            ],
            [
                "quando",
                "quando",
                "Introduz uma ação pontual ou interrupção."
            ],
            [
                "all'improvviso",
                "de repente",
                "Indica evento pontual que interrompe um estado."
            ],
            [
                "tutti i giorni",
                "todos os dias",
                "Expressão de frequência que pede imperfeito."
            ],
            [
                "quella volta",
                "aquela vez",
                "Expressão de evento único no passato prossimo."
            ],
            [
                "durante",
                "durante",
                "Preposição usada para descrever a duração de um estado."
            ]
        ],
        "gramatica": [
            [
                "Ação concluída vs. Fundo da narrativa",
                "Passato prossimo narra eventos pontuais e concluídos (Ho comprato il pane); Imperfetto descreve o cenário ou o estado (Faceva freddo).",
                "passato prossimo (evento) | imperfetto (fundo)",
                "Mentre studiavo, è suonato il telefono."
            ],
            [
                "Estrutura com mentre e quando",
                "Mentre + Imperfetto descreve duas ações simultâneas ou o contexto; Quando + Passato prossimo indica o evento que interrompe.",
                "Mentre [imperfetto], [passato prossimo]",
                "Mentre camminavo, ho incontrato Marco."
            ]
        ],
        "frases": [
            [
                "Mentre guardavo la televisione, è arrivata mia sorella.",
                "Enquanto eu assistia à televisão, minha irmã chegou."
            ],
            [
                "Ieri pioveva, ma siamo usciti lo stesso per fare la spesa.",
                "Ontem chovia, mas saímos assim mesmo para fazer compras."
            ]
        ],
        "dialogo": [
            [
                "Lorenzo",
                "Cosa è successo ieri sera al ristorante?",
                "O que aconteceu ontem à noite no restaurante?"
            ],
            [
                "Valeria",
                "Mentre mangiavamo, è entrato un musicista e ha suonato la chitarra.",
                "Enquanto comíamos, entrou um músico e tocou violão."
            ]
        ]
    },
    {
        "titulo": "I verbi riflessivi al passato",
        "contexto": "Conjugar verbos reflexivos no passado usando obrigatoriamente o auxiliar essere e fazendo a concordância do particípio.",
        "vocabulario": [
            [
                "mi sono svegliato",
                "eu acordei (masc.)",
                "Passato prossimo reflexivo de svegliarsi."
            ],
            [
                "si è vestita",
                "ela se vestiu",
                "Passato prossimo reflexivo feminino singular."
            ],
            [
                "ci siamo incontrati",
                "nós nos encontramos (masc. pl.)",
                "Ação recíproca/reflexiva no plural."
            ],
            [
                "ti sei alzato",
                "você se levantou (masc.)",
                "2ª pessoa singular reflexiva."
            ],
            [
                "si sono lavati",
                "eles se lavaram",
                "3ª pessoa plural reflexiva."
            ],
            [
                "vi siete divertiti",
                "vocês se divertiram (masc. pl.)",
                "2ª pessoa plural de divertirsi."
            ]
        ],
        "gramatica": [
            [
                "Auxiliar essere obrigatório",
                "Todos os verbos reflexivos usam o auxiliar essere no passato prossimo com o pronome reflexivo (mi, ti, si, ci, vi, si) antes do auxiliar.",
                "pronome reflexivo + essere + particípio",
                "Mi sono svegliato alle sette."
            ],
            [
                "Concordância do particípio",
                "O particípio passado dos verbos reflexivos sempre concorda em gênero e número com o sujeito.",
                "sujeito masc/fem/sg/pl ➔ -o / -a / -i / -e",
                "Maria si è svegliata tardi. I ragazzi si sono vestiti."
            ]
        ],
        "frases": [
            [
                "Stamattina mi sono svegliato presto e mi sono fatto una doccia.",
                "Hoje de manhã acordei cedo e tomei um banho."
            ],
            [
                "Ieri sera le ragazze si sono divertite molto alla festa.",
                "Ontem à noite as garotas se divertiram muito na festa."
            ]
        ],
        "dialogo": [
            [
                "Marco",
                "A che ora ti sei alzato stamattina, Filippo?",
                "A que horas você se levantou hoje de manhã, Filippo?"
            ],
            [
                "Filippo",
                "Mi sono alzato alle otto, mi sono preparato e sono uscito.",
                "Levantei-me às oito, preparei-me e saí."
            ]
        ]
    },
    {
        "titulo": "Le preposizioni articolate I",
        "contexto": "Formar e usar as preposições articuladas compostas com di (del, dello, della, dei, degli, delle) para posse, especificação e partitivo.",
        "vocabulario": [
            [
                "del",
                "do (di + il)",
                "Usado antes de substantivos masculinos singulares com consoante simples."
            ],
            [
                "dello",
                "do (di + lo)",
                "Usado antes de masculinos singulares com s+consoante, z, gn, etc."
            ],
            [
                "della",
                "da (di + la)",
                "Usado antes de substantivos femininos singulares."
            ],
            [
                "dei",
                "dos (di + i)",
                "Usado antes de masculinos plurais com consoante."
            ],
            [
                "degli",
                "dos (di + gli)",
                "Usado antes de masculinos plurais com vogal, s+consoante ou z."
            ],
            [
                "delle",
                "das (di + le)",
                "Usado antes de substantivos femininos plurais."
            ]
        ],
        "gramatica": [
            [
                "Combinação de di + artigo determinado",
                "A preposição di funde-se com os artigos determinados: di+il=del, di+lo=dello, di+la=della, di+l'=dell', di+i=dei, di+gli=degli, di+le=delle.",
                "di + artigo ➔ preposição articulada",
                "Il libro del professore / Le chiavi della casa."
            ],
            [
                "Uso partitivo de di + artigo",
                "Del, della, dei, delle também significam \"um pouco de\" ou \"alguns/algumas\" diante de substantivos de massa ou plurais.",
                "comprare + del/della/dei/delle",
                "Vorrei del pane e delle mele."
            ]
        ],
        "frases": [
            [
                "Ho comprato del formaggio e delle arance al mercato.",
                "Comprei um pouco de queijo e algumas laranjas no mercado."
            ],
            [
                "La macchina dello studente è parcheggiata davanti al cancello.",
                "O carro do estudante está estacionado em frente ao portão."
            ]
        ],
        "dialogo": [
            [
                "Commesso",
                "Buongiorno! Cosa desidera?",
                "Bom dia! O que deseja?"
            ],
            [
                "Cliente",
                "Vorrei del prosciutto cotto e della mozzarella fresca, grazie.",
                "Gostaria de um pouco de presunto cozido e de muçarela fresca, obrigado."
            ]
        ]
    },
    {
        "titulo": "Le preposizioni articolate II",
        "contexto": "Dominar a fusão das preposições a, da, in, su com os artigos determinados (al, dal, nel, sul e suas combinações).",
        "vocabulario": [
            [
                "al",
                "ao / no (a + il)",
                "Es: Vado al bar / al cinema."
            ],
            [
                "dal",
                "do / da casa de (da + il)",
                "Es: Vado dal medico / Torno dal lavoro."
            ],
            [
                "nel",
                "no / dentro do (in + il)",
                "Es: Nel libro / nel cassetto."
            ],
            [
                "sul",
                "sobre o / no (su + il)",
                "Es: Sul tavolo / sul muro."
            ],
            [
                "alla",
                "à / na (a + la)",
                "Es: Alla stazione / alla festa."
            ],
            [
                "negli",
                "nos (in + gli)",
                "Es: Negli Stati Uniti / negli armadi."
            ]
        ],
        "gramatica": [
            [
                "Tabela de fusão com a, da, in, su",
                "A(al, allo, alla, ai, agli, alle), DA(dal, dallo, dalla, dai, dagli, dalle), IN(nel, nello, nella, nei, negli, nelle), SU(sul, sullo, sulla, sui, sugli, sulle).",
                "preposição + artigo ➔ articulada",
                "al cinema, dal medico, nel barattolo, sul tavolo"
            ],
            [
                "Diferença de uso entre a, da e in",
                "Usamos a para cidades/locais específicos (al bar), da para pessoas/origem (dal medico, dal Brasile), e in para países/locais fechados (nel ristorante).",
                "a (destino/local) | da (pessoa/origem) | in (espaço/país)",
                "Vado dal dentista e poi al supermercato."
            ]
        ],
        "frases": [
            [
                "Oggi vado dal medico e poi mangiamo al ristorante.",
                "Hoje vou ao médico e depois comemos no restaurante."
            ],
            [
                "I documenti sono nel cassetto sul tavolo della cucina.",
                "Os documentos estão na gaveta sobre a mesa da cozinha."
            ]
        ],
        "dialogo": [
            [
                "Matteo",
                "Dove vai questo pomeriggio?",
                "Aonde você vai esta tarde?"
            ],
            [
                "Sara",
                "Vado alla posta per spedire un pacco e poi dal parrucchiere.",
                "Vou aos correios para enviar um pacote e depois ao cabeleireiro."
            ]
        ]
    },
    {
        "titulo": "I comparativi di maggioranza e minoranza",
        "contexto": "Comparar qualidades, quantidades e ações usando più... di / meno... di e più... che.",
        "vocabulario": [
            [
                "più ... di",
                "mais ... do que",
                "Comparativo de superioridade entre dois elementos com substantivo/pronome."
            ],
            [
                "meno ... di",
                "menos ... do que",
                "Comparativo de inferioridade entre dois elementos."
            ],
            [
                "più ... che",
                "mais ... do que (qualidades)",
                "Usado ao comparar dois adjetivos ou dois verbos para o mesmo sujeito."
            ],
            [
                "veloce",
                "rápido",
                "Adjetivo comum em comparações."
            ],
            [
                "costoso",
                "caro",
                "Adjetivo para comparar preços."
            ],
            [
                "pesante",
                "pesado",
                "Adjetivo para comparar peso ou dificuldade."
            ]
        ],
        "gramatica": [
            [
                "Uso de di vs che",
                "Usa-se di quando se comparam dois substantivos ou pronomes (Roma è più grande di Firenze). Usa-se che para comparar dois adjetivos, verbos ou advérbios.",
                "substantivo ➔ di | adjetivo/verbo ➔ che",
                "Il treno è più veloce della macchina."
            ],
            [
                "Estrutura de superioridade e inferioridade",
                "più + adjetivo + di/che (superioridade) | meno + adjetivo + di/che (inferioridade).",
                "più/meno + agg + di/che",
                "Questo libro è meno difficile di quello."
            ]
        ],
        "frases": [
            [
                "Il treno ad alta velocità è più veloce dell'autobus.",
                "O trem de alta velocidade é mais rápido do que o ônibus."
            ],
            [
                "Questo albergo è meno costoso di quello vicino alla stazione.",
                "Este hotel é menos caro do que aquele perto da estação."
            ]
        ],
        "dialogo": [
            [
                "Giacomo",
                "Preferisci viaggiare in aereo o in treno?",
                "Você prefere viajar de avião ou de trem?"
            ],
            [
                "Elena",
                "Preferisco il treno perché è più comodo e meno stressante dell'aereo.",
                "Prefiro o trem porque é mais confortável e menos estressante do que o avião."
            ]
        ]
    },
    {
        "titulo": "Il superlativo relativo e assoluto",
        "contexto": "Expressar o grau máximo de adjetivos com o superlativo relativo (il più...) e absoluto (-issimo).",
        "vocabulario": [
            [
                "il più alto",
                "o mais alto",
                "Superlativo relativo masculino singular."
            ],
            [
                "la più bella",
                "a mais bela",
                "Superlativo relativo feminino singular."
            ],
            [
                "bellissimo",
                "lindo / belíssimo",
                "Superlativo absoluto (bello + issimo)."
            ],
            [
                "buonissimo",
                "gostosíssimo / muito bom",
                "Superlativo absoluto de buono."
            ],
            [
                "utilissimo",
                "utilíssimo / muito útil",
                "Superlativo absoluto de utile."
            ],
            [
                "ottimo",
                "ótimo / excelente",
                "Forma especial irregular de superlativo."
            ]
        ],
        "gramatica": [
            [
                "Superlativo relativo",
                "Formado por artigo determinado + più/meno + adjetivo (+ di/tra). Destaca um elemento em um grupo.",
                "artigo + più/meno + adjetivo + di/tra",
                "Roma è la città più antica d'Italia."
            ],
            [
                "Superlativo absoluto (-issimo)",
                "Formado retirando a última vogal do adjetivo e adicionando -issimo, -issima, -issimi, -issime.",
                "radical + -issimo/a/i/e",
                "Questa pizza è buonissima!"
            ]
        ],
        "frases": [
            [
                "Il Colosseo è il monumento più famoso di Roma.",
                "O Coliseu é o monumento mais famoso de Roma."
            ],
            [
                "Abbiamo cenato in un ristorante bellissimo e la cena era buonissima.",
                "Jantamos em um restaurante lindo e o jantar estava gostosíssimo."
            ]
        ],
        "dialogo": [
            [
                "Valerio",
                "Come è stata la tua vacanza in Sicilia?",
                "Como foi sua viagem à Sicília?"
            ],
            [
                "Beatrice",
                "È stata un'esperienza facilissima e il mare era pulitissimo!",
                "Foi uma experiência muito fácil e o mar estava limpíssimo!"
            ]
        ]
    },
    {
        "titulo": "I quantificatori e indefiniti",
        "contexto": "Expressar quantidades imprecisas usando molto, poco, troppo, qualche, alcuni e nessuno.",
        "vocabulario": [
            [
                "molto",
                "muito",
                "Concorda com o substantivo quando funciona como adjetivo (molti libri)."
            ],
            [
                "poco",
                "pouco",
                "Poco/poca/pochi/poche."
            ],
            [
                "troppo",
                "demais / excessivo",
                "Troppo tempo, troppa gente."
            ],
            [
                "qualche",
                "algum / alguns",
                "Invariável e seguido SEMPRE de substantivo no singular (qualche giorno)."
            ],
            [
                "alcuni",
                "alguns (masc. pl.)",
                "Alcuni / alcune seguido de substantivo no plural."
            ],
            [
                "nessuno",
                "nenhum",
                "Nessuno / nessuna (nessun amico). Usado com negação."
            ]
        ],
        "gramatica": [
            [
                "Qualche vs. Alcuni/e",
                "Qualche exige substantivo no SINGULAR com sentido plural (qualche amico = alguns amigos). Alcuni exige PLURAL (alcuni amici).",
                "qualche + singular | alcuni/e + plural",
                "Ho qualche dubbio / Ho alcuni dubbi."
            ],
            [
                "Concordância de adjetivos indefinidos",
                "Molto, poco, troppo concordam em gênero e número com o substantivo quando o modificam diretamente.",
                "molto/a/i/e + substantivo",
                "Ci sono troppe persone in piazza."
            ]
        ],
        "frases": [
            [
                "Ci sono molti turisti in centro e troppe macchine in strada.",
                "Há muitos turistas no centro e carros demais na rua."
            ],
            [
                "Ho qualche domanda da fare e alcuni dubbi sulla lezione.",
                "Tenho algumas perguntas para fazer e dúvidas sobre a aula."
            ]
        ],
        "dialogo": [
            [
                "Claudia",
                "Hai tempo per prendere un caffè oggi?",
                "Você tem tempo para tomar um café hoje?"
            ],
            [
                "Roberto",
                "Ho poco tempo stamattina, ma possiamo vederci fra qualche ora.",
                "Tenho pouco tempo hoje de manhã, mas podemos nos ver daqui a algumas horas."
            ]
        ]
    },
    {
        "titulo": "In viaggio: Alla stazione e all'aeroporto",
        "contexto": "Comprar passagens, entender anúncios de trem e voo, perguntar por plataformas, atrasos e conexões.",
        "vocabulario": [
            [
                "biglietto",
                "passagem / bilhete",
                "Biglietto di andata e ritorno = passagem de ida e volta."
            ],
            [
                "binario",
                "plataforma / trilho",
                "Il treno parte dal binario 4."
            ],
            [
                "coincidenza",
                "conexão / baldeação",
                "Perdere la coincidenza = perder a conexão."
            ],
            [
                "ritardo",
                "atraso",
                "Il volo ha 20 minuti di ritardo."
            ],
            [
                "carta d'imbarco",
                "cartão de embarque",
                "Documento para entrar no avião."
            ],
            [
                "bagaglio",
                "bagagem",
                "Bagaglio a mano = bagagem de mão."
            ]
        ],
        "gramatica": [
            [
                "Perguntas em estações e aeroportos",
                "Expressões úteis: Da quale binario parte...?, A che ora arriva...?, Il treno è in orario o in ritardo?",
                "Da quale binario...? / A che ora...?",
                "Da quale binario parte il treno per Firenze?"
            ],
            [
                "Expressões de tempo de viagem",
                "Usar in orario (no horário), in ritardo (atrasado), in anticipo (adiantado) e cancellato (cancelado).",
                "stato del volo/treno",
                "Il volo per Milano è in ritardo di mezz'ora."
            ]
        ],
        "frases": [
            [
                "Vorrei un biglietto di andata e ritorno per Roma Termini, per favore.",
                "Gostaria de uma passagem de ida e volta para Roma Termini, por favor."
            ],
            [
                "Il treno Eurostar da Milano parte dal binario 7 in ritardo di dieci minuti.",
                "O trem Eurostar de Milão parte da plataforma 7 com dez minutos de atraso."
            ]
        ],
        "dialogo": [
            [
                "Viaggiatore",
                "Scusi, da quale binario parte il treno regionale per Pisa?",
                "Com licença, de qual plataforma parte o trem regional para Pisa?"
            ],
            [
                "Capostazione",
                "Parte dal binario 3 tra cinque minuti. Si affretti!",
                "Parte da plataforma 3 daqui a cinco minutos. Apresse-se!"
            ]
        ]
    },
    {
        "titulo": "In hotel e in vacanza",
        "contexto": "Fazer reservas, pedir serviços no hotel, checar horários de check-in/out e fazer solicitações educadas.",
        "vocabulario": [
            [
                "prenotazione",
                "reserva",
                "Ho una prenotazione a nome Rossi."
            ],
            [
                "camera singola",
                "quarto individual",
                "Camera per una sola persona."
            ],
            [
                "camera doppia",
                "quarto duplo (casal/duas camas)",
                "Camera matrimoniale o con letti separati."
            ],
            [
                "prima colazione",
                "café da manhã",
                "Prima colazione inclusa nel prezzo."
            ],
            [
                "aria condizionata",
                "ar-condicionado",
                "Serviço essencial no verão."
            ],
            [
                "chiave",
                "chave",
                "La chiave della camera 204."
            ]
        ],
        "gramatica": [
            [
                "Formular solicitações corteses em hotel",
                "Usar vorrei + infinitivo/substantivo (Vorrei prenotare, Vorrei chiedere) e c'è / ci sono para perguntar por comodidades.",
                "vorrei + nome/verbo",
                "Vorrei una camera doppia con vista mare."
            ],
            [
                "Perguntas sobre horários e serviços",
                "A che ora è la prima colazione?, A che ora devo fare il check-out?, Il Wi-Fi è gratuito?",
                "A che ora...? / C'è il Wi-Fi...?",
                "A che ora si serve la colazione?"
            ]
        ],
        "frases": [
            [
                "Buongiorno, ho una prenotazione per due notti a nome di Rossi.",
                "Bom dia, tenho uma reserva para duas noites em nome de Rossi."
            ],
            [
                "Vorrei una camera tranquilla con aria condizionata e connessione Wi-Fi.",
                "Gostaria de um quarto tranquilo com ar-condicionado e conexão Wi-Fi."
            ]
        ],
        "dialogo": [
            [
                "Cliente",
                "Buonasera, posso avere la chiave della camera 105?",
                "Boa noite, posso pegar a chave do quarto 105?"
            ],
            [
                "Receptionist",
                "Certamente! Ecco la chiave. La colazione è servita dalle 7 alle 10.",
                "Certamente! Aqui está a chave. O café da manhã é servido das 7 às 10."
            ]
        ]
    },
    {
        "titulo": "Al ristorante e al bar (Livello A2)",
        "contexto": "Fazer pedidos completos de menu italiano (antipasto, primo, secondo, dolce), indicar preferências e pedir a conta.",
        "vocabulario": [
            [
                "primo piatto",
                "primeiro prato (massa/sopa/risoto)",
                "Geralmente pasta ou risotto."
            ],
            [
                "secondo piatto",
                "segundo prato (carne/peixe)",
                "Carne ou pesce acompanhado de contorno."
            ],
            [
                "contorno",
                "acompanhamento / guarnição",
                "Insalata, patate, verdure grigliate."
            ],
            [
                "dolce",
                "sobremesa",
                "Tiramisù, panna cotta, gelato."
            ],
            [
                "il conto",
                "a conta",
                "Chiedere il conto al cameriere."
            ],
            [
                "coperto",
                "taxa de serviço / coberto",
                "Taxa fixa por pessoa na mesa."
            ]
        ],
        "gramatica": [
            [
                "Pedir pratos e bebidas com cortesia",
                "Usar prendo... / Vorrei... / Per me... para escolher os pratos no restaurante.",
                "Prendo + prato | Per me + prato",
                "Per me come primo gli spaghetti alla carbonara."
            ],
            [
                "Pedir a conta e esclarecer o pagamento",
                "Scusi, ci porta il conto, per favore?, Possiamo pagare separatamente / insieme?, Il servizio è incluso?",
                "Ci porta il conto? / Pagare insieme",
                "Possiamo pagare con carta di credito?"
            ]
        ],
        "frases": [
            [
                "Come primo prendo le lasagne e come secondo la bistecca alla griglia.",
                "De primeiro prato aceito a lasanha e de segundo prato o bife grelhado."
            ],
            [
                "Scusi, ci può portare il conto e un litro d'acqua minerale?",
                "Com licença, pode nos trazer a conta e um litro de água mineral?"
            ]
        ],
        "dialogo": [
            [
                "Cameriere",
                "Cosa prendete come dolce oggi?",
                "O que vocês vão pedir de sobremesa hoje?"
            ],
            [
                "Cliente",
                "Un tiramisù e due caffè espresso, e poi il conto, grazie!",
                "Um tiramisu e dois cafés expressos, e depois a conta, obrigado!"
            ]
        ]
    },
    {
        "titulo": "La casa e l'arredamento",
        "contexto": "Descrever cômodos, móveis, condições de moradia e conversar sobre aluguel e despesas domésticas.",
        "vocabulario": [
            [
                "soggiorno",
                "sala de estar",
                "La stanza principale della casa."
            ],
            [
                "cucina",
                "cozinha",
                "Dove si cucina e si mangia."
            ],
            [
                "camera da letto",
                "quarto de dormir",
                "Dove si dorme."
            ],
            [
                "bagno",
                "banheiro",
                "Stanza con doccia o vasca."
            ],
            [
                "affitto",
                "aluguel",
                "Pagare l'affitto ogni mese."
            ],
            [
                "bollette",
                "contas de consumo (luz, água, gás)",
                "Le bollette della luce e del gas."
            ]
        ],
        "gramatica": [
            [
                "Descrever localização de objetos na casa",
                "Usar preposições articuladas (sul tavolo, nell'armadio, accanto al divano) para situar objetos e móveis.",
                "objeto + verbo + preposição articulada + local",
                "Il televisore è nel soggiorno sul mobile."
            ],
            [
                "Expressar custos de moradia",
                "Usar quanto costa l'affitto?, le spese sono incluse?, l'appartamento è luminoso e ben arredato.",
                "quanto costa...? / spese incluse",
                "L'affitto è di 600 euro al mese con spese incluse."
            ]
        ],
        "frases": [
            [
                "Il mio nuovo appartamento ha due camere da letto, un grande soggiorno e un balcone.",
                "Meu novo apartamento tem dois quartos, uma sala de estar grande e uma varanda."
            ],
            [
                "L'affitto costa seicento euro al mese e le bollette sono escluse.",
                "O aluguel custa seiscentos euros por mês e as contas estão excluídas."
            ]
        ],
        "dialogo": [
            [
                "Proprietario",
                "L'appartamento è al secondo piano con ascensore ed è molto luminoso.",
                "O apartamento fica no segundo andar com elevador e é muito iluminado."
            ],
            [
                "Inquilino",
                "È bellissimo! Le spese condominiali sono incluse nell'affitto?",
                "É lindo! As despesas do condomínio estão incluídas no aluguel?"
            ]
        ]
    },
    {
        "titulo": "Il lavoro e le professioni",
        "contexto": "Falar sobre profissões, rotinas de trabalho, reuniões e entrevistas de emprego simples.",
        "vocabulario": [
            [
                "ufficio",
                "escritório",
                "Lavorare in ufficio."
            ],
            [
                "azienda",
                "empresa / firma",
                "Un'azienda internazionale."
            ],
            [
                "collega",
                "colega de trabalho",
                "Il mio collega di lavoro."
            ],
            [
                "orario di lavoro",
                "horário de trabalho",
                "Dalle nove alle diciassette."
            ],
            [
                "stipendio",
                "salário / remuneração",
                "Ricevere lo stipendio a fine mese."
            ],
            [
                "riunione",
                "reunião",
                "Avere una riunione importante."
            ]
        ],
        "gramatica": [
            [
                "Expressar obrigações e tarefas no trabalho",
                "Usar dovere + infinitivo (Devo preparare una presentazione) e occuparsi di (Mi occupo di vendite).",
                "devo + infinitivo | mi occupo di + substantivo",
                "Mi occupo della gestione dei clienti."
            ],
            [
                "Falar sobre horários de trabalho",
                "Usar lavoro dalle... alle... / il mio orario è flessibile / faccio gli straordinari.",
                "lavorare dalle [ora] alle [ora]",
                "Lavoro dal lunedì al venerdì dalle 9 alle 18."
            ]
        ],
        "frases": [
            [
                "Lavoro in un'azienda informatica dal lunedì al venerdì.",
                "Trabalho em uma empresa de informática de segunda a sexta-feira."
            ],
            [
                "Oggi ho due riunioni importanti con i miei colleghi e il direttore.",
                "Hoje tenho duas reuniões importantes com meus colegas e o diretor."
            ]
        ],
        "dialogo": [
            [
                "Intervistatore",
                "Quali sono le sue responsabilità principali nel lavoro attuale?",
                "Quais são suas responsabilidades principais no trabalho atual?"
            ],
            [
                "Candidato",
                "Mi occupo della gestione delle vendite e parlo ogni giorno con i clienti.",
                "Ocupo-me da gestão de vendas e falo todos os dias com os clientes."
            ]
        ]
    },
    {
        "titulo": "Salute e visite mediche",
        "contexto": "Descrever sintomas físicos ao médico, pedir remédios na farmácia e compreender prescrições.",
        "vocabulario": [
            [
                "sintomo",
                "sintoma",
                "Quali sono i suoi sintomi?"
            ],
            [
                "febbre",
                "febre",
                "Avere la febbre alta."
            ],
            [
                "tosse",
                "tosse",
                "Avere una forte tosse."
            ],
            [
                "ricetta medica",
                "receita médica",
                "Serve la ricetta per questo farmaco."
            ],
            [
                "sciroppo",
                "xarope",
                "Uno sciroppo per la tosse."
            ],
            [
                "pillola",
                "pílula / comprimido",
                "Prendere due pillole al giorno."
            ]
        ],
        "gramatica": [
            [
                "Expressar sintomas e dores corporais",
                "Usar ho + sintoma (Ho la febbre / Ho la tosse) e mi fa male / mi fanno male + parte do corpo.",
                "mi fa male + singular | mi fanno male + plural",
                "Mi fa male la gola e mi fanno male le gambe."
            ],
            [
                "Dar conselhos médicos com dever/imperativo leve",
                "Deve prendere questa medicina due volte al giorno dopo i pasti.",
                "dovere + infinitivo + indicazione",
                "Deve riposare e bere molta acqua."
            ]
        ],
        "frases": [
            [
                "Ho una forte tosse e la febbre a trentotto da due giorni.",
                "Estou com uma tosse forte e febre de 38 graus há dois dias."
            ],
            [
                "Il medico mi ha prescritto uno sciroppo e due pillole al giorno.",
                "O médico me receitou um xarope e dois comprimidos por dia."
            ]
        ],
        "dialogo": [
            [
                "Medico",
                "Buongiorno, cosa le succede? Dove le fa male?",
                "Bom dia, o que está acontecendo com o senhor? Onde dói?"
            ],
            [
                "Paziente",
                "Ho mal di gola, mi fa male la testa e mi sento molto stanco.",
                "Estou com dor de garganta, dói-me a cabeça e sinto-me muito cansado."
            ]
        ]
    },
    {
        "titulo": "Servizi in città",
        "contexto": "Utilizar serviços públicos na cidade (correios, banco) e pedir/dar orientações detalhadas de direção.",
        "vocabulario": [
            [
                "ufficio postale",
                "agência dos correios",
                "Spedire una lettera o una raccomandata."
            ],
            [
                "banca",
                "banco",
                "Cambiare i soldi o prelevare al Bancomat."
            ],
            [
                "sportello",
                "guichê / caixa",
                "Fare la fila allo sportello."
            ],
            [
                "incrocio",
                "cruzamento / esquina",
                "Girare all'incrocio."
            ],
            [
                "semaforo",
                "semáforo",
                "Al semaforo vada dritto."
            ],
            [
                "prelevare",
                "sacar (dinheiro)",
                "Prelevare contanti al Bancomat."
            ]
        ],
        "gramatica": [
            [
                "Pedir e dar orientações detalhadas de caminho",
                "Usar verbos no imperativo de cortesia ou presente: vada dritto (siga direto), giri a destra/sinistra (vire à direita/esquerda), attraversi la strada.",
                "vada dritto / giri a destra / attraversi",
                "Al semaforo giri a sinistra e vada dritto."
            ],
            [
                "Expressar ações em serviços públicos",
                "Devo spedire un pacco, vorrei fare un versamento, dove si trova il bancomat più vicino?",
                "devo/vorrei + verbos de serviço",
                "Vorrei prelevare 100 euro dallo sportello."
            ]
        ],
        "frases": [
            [
                "Per andare alla posta, vada dritto fino al semaforo e poi giri a destra.",
                "Para ir aos correios, siga direto até o semaforo e depois vire à direita."
            ],
            [
                "Ho bisogno di prelevare contanti al bancomat prima di andare al mercato.",
                "Preciso sacar dinheiro no caixa eletrônico antes de ir ao mercado."
            ]
        ],
        "dialogo": [
            [
                "Turista",
                "Scusi, sa dov'è la banca più vicina?",
                "Com licença, sabe onde fica o banco mais próximo?"
            ],
            [
                "Passante",
                "Sì, vada dritto per cento metri, all'incrocio giri a sinistra e la trova di fronte alla farmacia.",
                "Sim, siga direto por cem metros, no cruzamento vire à esquerda e o encontrará em frente à farmácia."
            ]
        ]
    },
    {
        "titulo": "Vita sociale e tempo libero",
        "contexto": "Fazer convites sociais, aceitar, recusar educadamente e organizar atividades de lazer.",
        "vocabulario": [
            [
                "ti va di",
                "você a fim de / topa... ?",
                "Expressão informal de convite (Ti va di uscire?)."
            ],
            [
                "volentieri",
                "com muito prazer!",
                "Forma entusiasta de aceitar um convite."
            ],
            [
                "mi dispiace",
                "sinto muito / desculpe",
                "Forma educada de recusar um convite."
            ],
            [
                "purtroppo",
                "infelizmente",
                "Usado ao dar uma justificativa de recusa."
            ],
            [
                "mostra",
                "exposição / mostra de arte",
                "Una mostra d'arte al museo."
            ],
            [
                "concerto",
                "show / concerto musical",
                "Andare a un concerto dal vivo."
            ]
        ],
        "gramatica": [
            [
                "Fazer convites em italiano",
                "Estruturas comuns: Ti va di + infinitivo?, Che ne dici di + infinitivo?, Vuoi venire a...?",
                "Ti va di / Che ne dici di + verbo",
                "Ti va di andare al cinema stasera?"
            ],
            [
                "Aceitar e recusar convites com cortesia",
                "Aceitar: Sì, volentieri! / Con piacere! Recusar: Mi dispiace, purtroppo non posso perché devo studiare.",
                "Sì, volentieri! | Mi dispiace, ma...",
                "Mi dispiace, stasera sono occupato."
            ]
        ],
        "frases": [
            [
                "Ti va di venire al concerto di musica classica sabato sera? — Sì, volentieri!",
                "Você está a fim de vir ao concerto de música clássica no sábado à noite? — Sim, com prazer!"
            ],
            [
                "Mi dispiace, purtroppo non posso uscire perché devo preparare l'esame.",
                "Sinto muito, infelizmente não posso sair porque preciso preparar o exame."
            ]
        ],
        "dialogo": [
            [
                "Matteo",
                "Che ne dici di andare a vedere la nuova mostra d'arte questo pomeriggio?",
                "Que tal irmos ver a nova exposição de arte esta tarde?"
            ],
            [
                "Giulia",
                "È un'ottima idea! A che ora ci incontriamo davanti al museo?",
                "É uma ótima ideia! A que horas nos encontramos na frente do museu?"
            ]
        ]
    },
    {
        "titulo": "Fare acquisti e vestiti",
        "contexto": "Comprar roupas e sapatos, escolher tamanhos e cores, pedir descontos e efetuar o pagamento.",
        "vocabulario": [
            [
                "taglia",
                "tamanho de roupa",
                "Che taglia porta? (Qual tamanho o senhor/a senhora veste?)"
            ],
            [
                "numero",
                "número de sapato",
                "Che numero di scarpe porta?"
            ],
            [
                "colore",
                "cor",
                "Di che colore lo preferisce?"
            ],
            [
                "camerino",
                "provador",
                "I camerini sono in fondo a destra."
            ],
            [
                "sconto",
                "desconto",
                "C'è uno sconto del venti per cento."
            ],
            [
                "scontrino",
                "recibo / cupom fiscal",
                "Ecco lo scontrino della spesa."
            ]
        ],
        "gramatica": [
            [
                "Expressões de compra de vestuário",
                "Posso provare questa maglia?, Che taglia porta?, Mi sta bene / mi sta grande / mi sta stretta.",
                "posso provare...? / mi sta bene",
                "Questa camicia mi sta molto bene."
            ],
            [
                "Perguntar sobre preços e descontos",
                "Quanto costa?, C'è lo sconto?, Posso pagare con la carta o solo in contanti?",
                "quanto costa...? / pagamento",
                "È in saldo e costa solo trenta euro."
            ]
        ],
        "frases": [
            [
                "Posso provare questi pantaloni blu nel camerino? — Certamente, la taglia M è disponibile.",
                "Posso provar estas calças azuis no provador? — Certamente, o tamanho M está disponível."
            ],
            [
                "Questo vestito è in saldo con uno sconto del trenta per cento.",
                "Este vestido está em liquidação com um desconto de trinta por cento."
            ]
        ],
        "dialogo": [
            [
                "Cliente",
                "Buongiorno, vorrei provare queste scarpe nere. Porta il numero 38.",
                "Bom dia, gostaria de provar estes sapatos pretos. Calço o número 38."
            ],
            [
                "Commessa",
                "Subito! Le preparo il numero 38 e le mostro il camerino.",
                "Já vou! Vou preparar o número 38 para você e mostrar o provador."
            ]
        ]
    },
    {
        "titulo": "Espressioni di tempo nel passato e futuro",
        "contexto": "Situar eventos no tempo usando fa, fra/tra, l'anno scorso, il mese prossimo, ieri l'altro, dopodomani.",
        "vocabulario": [
            [
                "fa",
                "há (tempo passado)",
                "Colocado DEPOIS do tempo (due giorni fa = há dois dias)."
            ],
            [
                "fra / tra",
                "daqui a (tempo futuro)",
                "Fra due giorni = daqui a dois dias."
            ],
            [
                "l'anno scorso",
                "no ano passado",
                "Refere-se ao ano anterior."
            ],
            [
                "il mese prossimo",
                "no próximo mês",
                "Refere-se ao mês seguinte."
            ],
            [
                "ieri l'altro",
                "anteontem",
                "Também dito l'altro ieri."
            ],
            [
                "dopodomani",
                "depois de amanhã",
                "O dia a seguir a amanhã."
            ]
        ],
        "gramatica": [
            [
                "Uso de fa (passado) vs fra/tra (futuro)",
                "Fa vem DEPOIS da quantidade de tempo (tre anni fa = há três anos). Fra/tra vem ANTES (fra tre anni = daqui a três anos).",
                "[tempo] + fa (passado) | fra/tra + [tempo] (futuro)",
                "Sono arrivato due ore fa. Partirò fra tre giorni."
            ],
            [
                "Expressões com scorso e prossimo",
                "L'anno scorso / la settimana scorsa (passado) ↔ L'anno prossimo / la settimana prossima (futuro). Concordam em gênero.",
                "[substantivo] + scorso/prossimo",
                "La settimana scorsa siamo stati a Venezia."
            ]
        ],
        "frases": [
            [
                "Sono arrivato in Italia tre mesi fa e ripartirò fra due settimane.",
                "Cheguei à Itália há três meses e partirei de volta daqui a duas semanas."
            ],
            [
                "L'anno scorso abbiamo visitato Roma e il mese prossimo andremo a Napoli.",
                "No ano passado visitamos Roma e no próximo mês iremos a Nápoles."
            ]
        ],
        "dialogo": [
            [
                "Luca",
                "Quando hai visto Marco per l'ultima volta?",
                "Quando você viu o Marco pela última vez?"
            ],
            [
                "Stefano",
                "L'ho visto tre giorni fa e ci rivedremo dopodomani per cena.",
                "Eu o vi há três dias e nos reveremos depois de amanhã para o jantar."
            ]
        ]
    },
    {
        "titulo": "Descrivere persone e luoghi nel passato",
        "contexto": "Descrever características físicas e psicológicas de pessoas e transformações de lugares no passado usando o imperfeito.",
        "vocabulario": [
            [
                "era",
                "era / estava",
                "Terceira pessoa do imperfeito de essere."
            ],
            [
                "aveva",
                "tinha",
                "Terceira pessoa do imperfeito de avere."
            ],
            [
                "tranquillo",
                "tranquilo / calmo",
                "Adjetivo descritivo de lugares ou pessoas."
            ],
            [
                "affollato",
                "lotado / movimentado",
                "Lugar cheio de gente no passado."
            ],
            [
                "capelli lunghi",
                "cabelos compridos",
                "Descrição física no passado."
            ],
            [
                "timido",
                "tímido",
                "Traço de personalidade no passado."
            ]
        ],
        "gramatica": [
            [
                "Descrever pessoas no passado",
                "Usar essere e avere no imperfeito (era alto, aveva i capelli biondi, portava gli occhiali) para descrições físicas e de caráter.",
                "era + adjetivo | aveva + substantivo",
                "Da bambina aveva i capelli lunghi ed era molto timida."
            ],
            [
                "Descrever lugares no passado",
                "Usar c'era / c'erano e adjetivos no imperfeito para descrever como uma cidade ou lugar costumava ser.",
                "c'era / c'erano + imperfetto",
                "Una volta in questa piazza c'erano molti alberi ed era più tranquilla."
            ]
        ],
        "frases": [
            [
                "Quando ero piccolo, il mio quartiere era molto tranquillo e c'erano pochi negozi.",
                "Quando eu era pequeno, meu bairro era muito tranquilo e havia poucas lojas."
            ],
            [
                "Mio nonno era un uomo alto, aveva i capelli neri ed era sempre molto simpatico.",
                "Meu avô era um homem alto, tinha cabelos pretos e era sempre muito simpático."
            ]
        ],
        "dialogo": [
            [
                "Alessia",
                "Come era la tua città dieci anni fa?",
                "Como era a sua cidade há dez anos?"
            ],
            [
                "Davide",
                "Era più piccola e meno affollata, ma c'erano tanti parchi verdi dove giocare.",
                "Era menor e menos movimentada, mas havia muitos parques verdes onde brincar."
            ]
        ]
    },
    {
        "titulo": "Raccontare un'esperienza di viaggio",
        "contexto": "Relatar diários de viagem, férias e impressões pessoais combinando passato prossimo e imperfetto.",
        "vocabulario": [
            [
                "esperienza",
                "experiência",
                "Un'esperienza indimenticabile."
            ],
            [
                "indimenticabile",
                "inesquecível",
                "Adjetivo marcante para viagens."
            ],
            [
                "monumento",
                "monumento",
                "Visitare i monumenti storici."
            ],
            [
                "paesaggio",
                "paisagem",
                "Un paesaggio mozzafiato."
            ],
            [
                "ricordo",
                "lembrança / recordação",
                "Ho un bellissimo ricordo di quella vacanza."
            ],
            [
                "scoprire",
                "descobrir",
                "Abbiamo scoperto posti bellissimi."
            ]
        ],
        "gramatica": [
            [
                "Estruturação do relato de viagem",
                "Começa-se situando no tempo e local (Siamo stati a Firenze...), descreve-se o clima/ambiente no imperfeito e os eventos marcantes no passato prossimo.",
                "introdução + descrição (imperfetto) + eventos (passato prossimo)",
                "Il tempo era bellissimo e abbiamo visitato molti musei."
            ],
            [
                "Expressar impressões e lembranças",
                "Usar mi è piaciuto molto... / è stata un'esperienza indimenticabile / non dimenticherò mai...",
                "mi è piaciuto/a + nome | è stato/a + adjetivo",
                "Mi è piaciuta molto la cucina toscana."
            ]
        ],
        "frases": [
            [
                "L'estate scorsa siamo stati in Toscana: il paesaggio era mozzafiato e abbiamo mangiato benissimo.",
                "No verão passado estivemos na Toscana: a paisagem era deslumbrante e comemos muitíssimo bem."
            ],
            [
                "È stata un'esperienza indimenticabile e ho un bellissimo ricordo di tutte le città visitate.",
                "Foi uma experiência inesquecível e tenho uma linda lembrança de todas as cidades visitadas."
            ]
        ],
        "dialogo": [
            [
                "Claudio",
                "Qual è stato il momento più bello del tuo viaggio in Italia?",
                "Qual foi o momento mais bonito da sua viagem à Itália?"
            ],
            [
                "Francesca",
                "Quando abbiamo visto il tramonto a Venezia: il cielo era rosso ed era tutto magico!",
                "Quando vimos o pôr do sol em Veneza: o céu estava vermelho e tudo era mágico!"
            ]
        ]
    },
    {
        "titulo": "Revisione generale A2",
        "contexto": "Revisar e consolidar passado próximo, futuro simples, pronomes diretos/indiretos e preposizioni articuladas.",
        "vocabulario": [
            [
                "ripasso",
                "revisão",
                "Fare un ripasso generale dei contenuti."
            ],
            [
                "consolidare",
                "consolidar",
                "Consolidare la grammatica e il lessico A2."
            ],
            [
                "obiettivo",
                "objetivo",
                "Raggiungere l'obiettivo di comunicazione A2."
            ],
            [
                "conoscenza",
                "conhecimento",
                "Le conoscenze grammaticali acquisite."
            ],
            [
                "progresso",
                "progresso",
                "Fare molti progressi in italiano."
            ],
            [
                "pronto",
                "pronto / preparado",
                "Essere pronto per la sfida finale."
            ]
        ],
        "gramatica": [
            [
                "Síntese dos tempos verbais A2",
                "No nível A2 aprendemos o Passato Prossimo (ações concluídas), Imperfetto (descrições/hábitos) e Futuro Semplice (projetos).",
                "passato prossimo | imperfetto | futuro semplice",
                "Ieri ho studiato, da piccolo giocavo, domani viaggerò."
            ],
            [
                "Síntese de pronomes e preposições",
                "Combinação de pronomes diretos (lo/la/li/le com particípio), indiretos (gli/le) e preposições articuladas (del, al, dal, nel, sul).",
                "pronomi + preposizioni articolate",
                "Gli ho parlato ieri al ristorante."
            ]
        ],
        "frases": [
            [
                "In questo corso A2 abbiamo imparato il passato prossimo, l'imperfetto, il futuro e i pronomi.",
                "Neste curso A2 aprendemos o passado próximo, o imperfeito, o futuro e os pronomes."
            ],
            [
                "Ora sono pronto per parlare italiano con più sicurezza e affrontare la sfida finale!",
                "Agora estou pronto para falar italiano com mais segurança e enfrentar o desafio final!"
            ]
        ],
        "dialogo": [
            [
                "Insegnante",
                "Complimenti! Avete completato tutti i moduli di grammatica e vocabolario A2.",
                "Parabéns! Vocês completaram todos os módulos de gramática e vocabulário A2."
            ],
            [
                "Studente",
                "Grazie mille! Ora mi sento molto più sicuro nel raccontare le mie esperienze al passato e al futuro.",
                "Muito obrigado! Agora me sinto muito mais seguro em relatar minhas experiências no passado e no futuro."
            ]
        ]
    },
    {
        "titulo": "Sfida Finale A2: La giornata ideale in Italia",
        "contexto": "Teste final abrangente de 30 questões integrando passado próximo, imperfeito, futuro, pronomes, preposições e cenários da vida real.",
        "vocabulario": [
            [
                "sfida finale",
                "desafio final",
                "Il test finale del livello A2."
            ],
            [
                "giornata ideale",
                "dia ideal",
                "Il racconto di una giornata perfetta in Italia."
            ],
            [
                "certificato",
                "certificado",
                "Ottenere il certificato di livello A2."
            ],
            [
                "valutazione",
                "avaliação",
                "Valutazione delle competenze linguistiche."
            ],
            [
                "successo",
                "sucesso",
                "Completare il corso con successo."
            ],
            [
                "traguardo",
                "meta / conquista",
                "Raggiungere un importante traguardo."
            ]
        ],
        "gramatica": [
            [
                "Integração total do Nível A2",
                "O teste integrado desafia a compreensão de passado próximo (avere/essere), imperfeito, futuro, pronomes diretos/indiretos e preposições articuladas.",
                "síntese A2",
                "Ieri sono andato al bar, ho preso un caffè e domani viaggerò."
            ],
            [
                "Estratégias de resolução",
                "Leia com atenção a concordância do particípio com essere e pronomes diretos, o uso de di vs che nos comparativos e as preposições articuladas.",
                "concordância e uso dos pronomes",
                "L'ho vista ieri sera al cinema."
            ]
        ],
        "frases": [
            [
                "Benvenuti alla sfida finale del livello A2 di italiano: dimostrate tutto ciò che avete imparato!",
                "Bem-vindos ao desafio final do nível A2 de italiano: demonstrem tudo o que vocês aprenderam!"
            ],
            [
                "Ho superato la sfida finale A2 con successo e adesso posso comunicare con autonomia in italiano.",
                "Passei no desafio final A2 com sucesso e agora posso me comunicar com autonomia em italiano."
            ]
        ],
        "dialogo": [
            [
                "Esaminatore",
                "Siete pronti per la sfida finale A2 con trenta domande sul programma completo?",
                "Vocês estão prontos para o desafio final A2 com trinta perguntas sobre o programa completo?"
            ],
            [
                "Studente",
                "Sì, sono prontissimo! Ho ripassato tutta la grammatica e il vocabolario.",
                "Sim, estou prontíssimo! Revisei toda a gramática e o vocabulário."
            ]
        ]
    }
];

const SFIDA_FINALE_QUIZ_A2 = [
    {
        "question": "Quale ausiliare si usa per la maggior parte dei verbi transitivi al passato prossimo?",
        "options": [
            "avere",
            "essere",
            "stare",
            "fare"
        ],
        "correctIndex": 0,
        "explanation": "Verbos transitivos no passado próximo usam o auxiliar \"avere\"."
    },
    {
        "question": "Completa: \"Ieri Marco e Luca sono _____ al cinema.\"",
        "options": [
            "andato",
            "andata",
            "andati",
            "andate"
        ],
        "correctIndex": 2,
        "explanation": "Com o auxiliar essere, o particípio concorda em gênero e número (Marco e Luca = masculinos plurais -> andati)."
    },
    {
        "question": "Qual è il participio passato del verbo \"fare\"?",
        "options": [
            "farato",
            "fatto",
            "facito",
            "facuto"
        ],
        "correctIndex": 1,
        "explanation": "Fare é irregular e faz \"fatto\"."
    },
    {
        "question": "Qual è il participio passato del verbo \"prendere\"?",
        "options": [
            "prenduto",
            "prendito",
            "preso",
            "prendato"
        ],
        "correctIndex": 2,
        "explanation": "Prendere é irregular e faz \"preso\"."
    },
    {
        "question": "Sostituisci il nome con il pronome diretto: \"Vedi la chiave?\" ➔ \"Sì, _____ vedo.\"",
        "options": [
            "lo",
            "la",
            "li",
            "le"
        ],
        "correctIndex": 1,
        "explanation": "La chiave é feminino singular, portanto o pronome direto é \"la\"."
    },
    {
        "question": "Completa con il pronome e il participio: \"Hai visto Maria?\" ➔ \"Sì, l'ho _____.\"",
        "options": [
            "visto",
            "vista",
            "visti",
            "viste"
        ],
        "correctIndex": 1,
        "explanation": "Com pronomes diretos (la/l') no passado próximo com avere, o particípio concorda com o objeto (Maria -> vista)."
    },
    {
        "question": "Sostituisci con il pronome indiretto: \"Ho parlato _____ (a Marco).\"",
        "options": [
            "lo",
            "gli",
            "le",
            "ci"
        ],
        "correctIndex": 1,
        "explanation": "A Marco = a ele (masculino singular) = pronome indireto \"gli\"."
    },
    {
        "question": "Quale pronome indiretto si usa per \"a lei\" (a ela)?",
        "options": [
            "gli",
            "le",
            "la",
            "ci"
        ],
        "correctIndex": 1,
        "explanation": "\"Le\" é o pronome indireto feminino singular (a ela)."
    },
    {
        "question": "Completa al futuro semplice: \"Domani io _____ (parlare) con il direttore.\"",
        "options": [
            "parlavo",
            "parlerò",
            "parlerai",
            "parlerà"
        ],
        "correctIndex": 1,
        "explanation": "1ª pessoa singular do futuro simples de parlare = parlerò."
    },
    {
        "question": "Qual è il futuro semplice irregolare di \"essere\" (io)?",
        "options": [
            "sarò",
            "esserò",
            "fui",
            "ero"
        ],
        "correctIndex": 0,
        "explanation": "Essere no futuro faz sarò, sarai, sarà, saremo, sarete, saranno."
    },
    {
        "question": "Qual è il futuro semplice irregolare di \"andare\" (noi)?",
        "options": [
            "anderemo",
            "andremo",
            "andavamo",
            "andassimo"
        ],
        "correctIndex": 1,
        "explanation": "Andare no futuro encurta o radical para andr- (andremo)."
    },
    {
        "question": "Completa all'imperfetto: \"Da bambino io _____ (giocare) sempre nel parco.\"",
        "options": [
            "ho giocato",
            "giocavo",
            "giocherò",
            "giocai"
        ],
        "correctIndex": 1,
        "explanation": "Hábito contínuo no passado exige imperfeito (giocavo)."
    },
    {
        "question": "Qual è la 1a persona plurale dell'imperfetto di \"essere\"?",
        "options": [
            "eravamo",
            "siamo stati",
            "saremo",
            "eravate"
        ],
        "correctIndex": 0,
        "explanation": "Essere no imperfeito: ero, eri, era, eravamo, eravate, erano."
    },
    {
        "question": "Scegli il tempo corretto: \"Mentre io _____ (studiare), è suonato il telefono.\"",
        "options": [
            "ho studiato",
            "studiavo",
            "studierò",
            "studiassi"
        ],
        "correctIndex": 1,
        "explanation": "Ação contínua de fundo com \"mentre\" pede o imperfeito (studiavo)."
    },
    {
        "question": "Completa con il verbo riflessivo al passato: \"Stamattina Maria si è _____ presto.\"",
        "options": [
            "svegliato",
            "svegliata",
            "svegliati",
            "svegliate"
        ],
        "correctIndex": 1,
        "explanation": "Com verbos reflexivos no passato próximo o particípio concorda com o sujeito (Maria -> svegliata)."
    },
    {
        "question": "Qual è la preposizione articolata composta da \"di + il\"?",
        "options": [
            "dal",
            "del",
            "nel",
            "sul"
        ],
        "correctIndex": 1,
        "explanation": "di + il = del."
    },
    {
        "question": "Qual è la preposizione articolata composta da \"a + la\"?",
        "options": [
            "alla",
            "dalla",
            "nella",
            "sulla"
        ],
        "correctIndex": 0,
        "explanation": "a + la = alla."
    },
    {
        "question": "Qual è la preposizione articolata composta da \"in + il\"?",
        "options": [
            "del",
            "dal",
            "nel",
            "sul"
        ],
        "correctIndex": 2,
        "explanation": "in + il = nel."
    },
    {
        "question": "Completa il comparativo: \"Il treno è più veloce _____ macchina.\"",
        "options": [
            "di",
            "della",
            "che",
            "da"
        ],
        "correctIndex": 1,
        "explanation": "Di + artigo la = della (più veloce della macchina)."
    },
    {
        "question": "Qual è il superlativo assoluto dell'aggettivo \"bello\"?",
        "options": [
            "il più bello",
            "bellissimo",
            "ottimo",
            "bellamente"
        ],
        "correctIndex": 1,
        "explanation": "O superlativo absoluto em -issimo de bello é bellissimo."
    },
    {
        "question": "Completa con l'indefinito corretto: \"In piazza ci sono _____ persone.\" (muitas)",
        "options": [
            "molto",
            "molti",
            "molte",
            "qualche"
        ],
        "correctIndex": 2,
        "explanation": "Persone é feminino plural, portanto concorda em \"molte\"."
    },
    {
        "question": "Quale parola si usa SEMPRE con il sostantivo al SINGOLARE?",
        "options": [
            "alcuni",
            "qualche",
            "molti",
            "troppi"
        ],
        "correctIndex": 1,
        "explanation": "\"Qualche\" é invariável e exige substantivo no singular (qualche giorno)."
    },
    {
        "question": "Dove si prende il treno in stazione?",
        "options": [
            "al ristorante",
            "dal binario",
            "in farmacia",
            "alla porta"
        ],
        "correctIndex": 1,
        "explanation": "Em uma estação de trem pega-se o trem na plataforma (\"dal binario\")."
    },
    {
        "question": "Cosa chiedi per avere una camera per due persone in hotel?",
        "options": [
            "una camera singola",
            "una camera doppia",
            "un tavolo per tre",
            "un biglietto"
        ],
        "correctIndex": 1,
        "explanation": "Quarto para duas pessoas é uma \"camera doppia\"."
    },
    {
        "question": "Come si chiama il piatto che viene DOPO il primo piatto in Italia?",
        "options": [
            "il contorno",
            "il secondo piatto",
            "il dolce",
            "l'antipasto"
        ],
        "correctIndex": 1,
        "explanation": "O prato principal de carne/peixe após a massa é o \"secondo piatto\"."
    },
    {
        "question": "Quale stanza della casa è destinata a preparare il cibo?",
        "options": [
            "il bagno",
            "il soggiorno",
            "la cucina",
            "il balcone"
        ],
        "correctIndex": 2,
        "explanation": "Cozinha em italiano é \"la cucina\"."
    },
    {
        "question": "Come dici al medico che hai dolore alla testa?",
        "options": [
            "Ho mal di stomaco.",
            "Ho mal di testa.",
            "Ho la tosse.",
            "Ho la febbre."
        ],
        "correctIndex": 1,
        "explanation": "Dor de cabeça é \"mal di testa\"."
    },
    {
        "question": "Come rispondi gentilmente per ACCETTARE un invito?",
        "options": [
            "Mi dispiace, non posso.",
            "Sì, volentieri!",
            "Purtroppo devo lavorare.",
            "No, mai."
        ],
        "correctIndex": 1,
        "explanation": "\"Sì, volentieri!\" significa \"Sim, com prazer!\"."
    },
    {
        "question": "Se un vestito costa meno perché c'è una promozione, diciamo che è in _____",
        "options": [
            "ritardo",
            "affitto",
            "saldo",
            "scorta"
        ],
        "correctIndex": 2,
        "explanation": "Em promoção de roupas diz-se \"in saldo\" (em liquidação)."
    },
    {
        "question": "Come dici che un evento avverrà \"daqui a tre giorni\"?",
        "options": [
            "tre giorni fa",
            "fra tre giorni",
            "l'anno scorso",
            "ieri l'altro"
        ],
        "correctIndex": 1,
        "explanation": "Tempo futuro no sentido de \"daqui a\" usa \"fra\" ou \"tra\" (fra tre giorni)."
    }
];

MODULOS_ITALIANO_A2.forEach((modulo, index) => {
    const isLast = (index === 29);
    CURSO_ITALIANO_A2_DADOS.push(criarModuloItalianoA2(
        index + 1,
        modulo.titulo,
        modulo.contexto,
        modulo.vocabulario,
        modulo.gramatica,
        modulo.frases,
        modulo.dialogo,
        isLast ? SFIDA_FINALE_QUIZ_A2 : null
    ));
});

if (typeof window !== 'undefined') window.CURSO_ITALIANO_A2_DADOS = CURSO_ITALIANO_A2_DADOS;
if (typeof module !== 'undefined' && module.exports) module.exports = { CURSO_ITALIANO_A2_DADOS };
