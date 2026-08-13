// ============================================================================
// DATASET CURSO ITALIANO B2 - HANDCRAFTED 24 MÓDULOS (it-IT)
// IDIOMAS ACADEMY
// ============================================================================

const CURSO_ITALIANO_B2_DADOS = [];

function criarModuloItalianoB2(numero, titulo, contexto, vocabulario, gramatica, frases, dialogo, customQuiz = null) {
    const id = `it_b2_mod_${String(numero).padStart(2, '0')}`;
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
        level: 'B2',
        language: 'it-IT',
        title: `Módulo ${numero}: ${titulo}`,
        desc: contexto,
        description: contexto,
        stage1_context: {
            title: titulo,
            missionTitle: `Missão: ${titulo}`,
            situation: contexto,
            missionDescription: `Domine a comunicação complexa e avançada em italiano para interação fluida.`,
            audioGuide: `Ouça atentamente o ritmo e a sintaxe avançada em italiano it-IT e repita praticando a dicção.`
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

const MODULOS_ITALIANO_B2 = [
    {
        "titulo": "Il congiuntivo passato e imperfetto",
        "contexto": "Expressar ações passadas concluídas ou hipóteses contemporâneas usando o congiuntivo passato (abbia parlato) e imperfetto (parlassi).",
        "vocabulario": [
            [
                "abbia detto",
                "tenha dito",
                "Congiuntivo passato di dire."
            ],
            [
                "sia andata",
                "tenha ido (fem.)",
                "Congiuntivo passato con essere."
            ],
            [
                "studiassi",
                "se eu/você estudasse",
                "Congiuntivo imperfetto di studiare."
            ],
            [
                "facesse",
                "se ele/ela fizesse",
                "Congiuntivo imperfetto di fare."
            ],
            [
                "pensassi",
                "se eu/você pensasse",
                "Congiuntivo imperfetto di pensare."
            ],
            [
                "ipotesi",
                "hipótese / suposição",
                "Presunzione o possibilità nel presente."
            ]
        ],
        "gramatica": [
            [
                "Congiuntivo passato (Formação e uso)",
                "O subjuntivo passado é formado por presente do subjuntivo de avere/essere + particípio passado. Expressa uma ação anterior concluída em relação ao verbo principal.",
                "abbia/sia + particípio passado",
                "Credo che Marco sia già partito per Roma."
            ],
            [
                "Congiuntivo imperfetto (Desinências)",
                "O subjuntivo imperfeito é usado para hipóteses, dúvidas ou estados simultâneos ao passado. Terminações: -ssi, -ssi, -sse, -ssimo, -ste, -ssero.",
                "radical + -ssi / -sse / -ssimo...",
                "Se tu studiassi di più, supereresti l'esame."
            ],
            [
                "Concordância temporal (Consecutio temporum)",
                "Quando o verbo principal está no presente, usa-se o congiuntivo passato para anterioridade e o congiuntivo imperfetto para contemporaneidade/hipótese.",
                "Penso che [passato / imperfetto]",
                "Penso che ieri abbia piovuto. / Se facesse bel tempo, uscirei."
            ]
        ],
        "frases": [
            [
                "Credo che Giulia abbia già superato l'esame di guida.",
                "Acredito que Giulia já tenha passado no exame de direção."
            ],
            [
                "Se Luca studiasse con più costanza, otterrebbe risultati migliori.",
                "Se Luca estudasse com mais constância, obteria resultados melhores."
            ]
        ],
        "dialogo": [
            [
                "Professore",
                "Pensate che gli studenti abbiano compreso la spiegazione sul congiuntivo?",
                "Vocês pensam que os estudantes tenham compreendido a explicação sobre o subjuntivo?"
            ],
            [
                "Tutor",
                "Credo di sì, ma se facessimo altri esercizi pratici sarebbe ancora meglio.",
                "Acredito que sim, mas se fizéssemos outros exercícios práticos seria ainda melhor."
            ]
        ]
    },
    {
        "titulo": "Il congiuntivo trapassato e la consecutio temporum",
        "contexto": "Expressar anterioridade no passado e desejos não realizados usando o congiuntivo trapassato (avessi parlato / fossi andato).",
        "vocabulario": [
            [
                "avessi saputo",
                "se eu/você soubesse / tivesse sabido",
                "Congiuntivo trapassato di sapere."
            ],
            [
                "fossi stato",
                "se eu/você tivesse sido/estado",
                "Congiuntivo trapassato di essere."
            ],
            [
                "avesse finito",
                "se ele/ela tivesse terminado",
                "Congiuntivo trapassato di finire."
            ],
            [
                "consecutio temporum",
                "sequência de tempos verbais",
                "Regole di concordanza dei tempi."
            ],
            [
                "rammarico",
                "lamento / arrependimento",
                "Sentimento per qualcosa non fatto."
            ],
            [
                "anteriorità",
                "anterioridade",
                "Azione avvenuta prima di un'altra."
            ]
        ],
        "gramatica": [
            [
                "Formação do congiuntivo trapassato",
                "Forma-se com o congiuntivo imperfetto de avere/essere + particípio passado.",
                "avessi/fossi + particípio passado",
                "Se avessi saputo della festa, sarei venuto."
            ],
            [
                "Uso para lamentação e anterioridade no passado",
                "Expressa fatos passados não ocorridos ou anterioridade em relação a um verbo principal no passado (Pensavo che fosse partito).",
                "verbo no passado + che + congiuntivo trapassato",
                "Pensavo che avessero già firmato il contratto."
            ],
            [
                "Sequência completa dos tempos (Consecutio)",
                "Verbo principal no passado (pensavo, credevo) exige congiuntivo imperfetto (contemporaneidade) ou trapassato (anterioridade).",
                "Pensavo ➔ che studiassi (contemporâneo) / che avessi studiato (anterior)",
                "Credevo che avessi già finito di lavorare."
            ]
        ],
        "frases": [
            [
                "Se avessi saputo che eri a casa, ti avrei fatto una visita.",
                "Se eu soubesse que você estava em casa, teria te feito uma visita."
            ],
            [
                "Pensavo che i miei colleghi avessero già inviato l'email al cliente.",
                "Eu pensava que meus colegas já tivessem enviado o e-mail ao cliente."
            ]
        ],
        "dialogo": [
            [
                "Matteo",
                "Perché non sei venuto alla conferenza ieri sera?",
                "Por que você não veio à conferência ontem à noite?"
            ],
            [
                "Stefano",
                "Se me lo avessi detto in tempo, ci sarei andato volentieri!",
                "Se você tivesse me dito a tempo, teria ido lá com prazer!"
            ]
        ]
    },
    {
        "titulo": "Il periodo ipotetico I e II (Realtà e possibilità)",
        "contexto": "Construir orações condicionais de realidade (1º tipo: se + presente/futuro) e de possibilidade (2º tipo: se + congiuntivo imperfetto, condizionale semplice).",
        "vocabulario": [
            [
                "se studio",
                "se estudo",
                "Periodo ipotetico della realtà (1° tipo)."
            ],
            [
                "se studiassi",
                "se eu/você estudasse",
                "Periodo ipotetico della possibilità (2° tipo)."
            ],
            [
                "passerei",
                "eu passaria",
                "Condizionale semplice nella apodosi."
            ],
            [
                "probabilità",
                "probabilidade",
                "Grado di certezza di un evento."
            ],
            [
                "condizione",
                "condição",
                "Requisito necessario perché avvenga un fatto."
            ],
            [
                "conseguenza",
                "consequência",
                "Risultato della condizione."
            ]
        ],
        "gramatica": [
            [
                "1º Tipo (Realtà / Certezza)",
                "Estrutura: Se + Indicativo Presente/Futuro ➔ Indicativo Presente/Futuro. Expressa fatos certos ou muito prováveis.",
                "Se + presente/futuro ➔ presente/futuro",
                "Se piove, prendo l'ombrello. / Se studierai, passerai."
            ],
            [
                "2º Tipo (Possibilità nel presente/futuro)",
                "Estrutura: Se + Congiuntivo Imperfetto ➔ Condizionale Semplice. Expressa hipóteses possíveis mas não certas.",
                "Se + congiuntivo imperfetto ➔ condizionale semplice",
                "Se avessi più tempo libero, farei più sport."
            ],
            [
                "Diferença entre 1º e 2º Tipo",
                "O 1º tipo trata a condição como real (Se ho soldi, compro la macchina); o 2º tipo trata como hipótese (Se avessi soldi, comprerei la macchina).",
                "Realidade vs Possibilidade",
                "Se tempo permite ➔ vado vs Se tempo permettesse ➔ andrei"
            ]
        ],
        "frases": [
            [
                "Se stasera fa bel tempo, andremo a fare una passeggiata in centro.",
                "Se hoje à noite fizer tempo bom, iremos fazer um passeio no centro."
            ],
            [
                "Se avessi una macchina fotografica migliore, scatterei foto bellissime.",
                "Se eu tivesse uma câmera fotográfica melhor, tiraria fotos lindas."
            ]
        ],
        "dialogo": [
            [
                "Chiara",
                "Cosa faresti se vincessi un viaggio in Italia?",
                "O que você faria se ganhasse uma viagem à Itália?"
            ],
            [
                "Marco",
                "Se vincessi il viaggio, visiterei subito Firenze e Venezia!",
                "Se eu ganhasse a viagem, visitaria imediatamente Florença e Veneza!"
            ]
        ]
    },
    {
        "titulo": "Il periodo ipotetico III (Impossibilità nel passato)",
        "contexto": "Expressar condições irrealizáveis e fatos não ocorridos no passado usando se + congiuntivo trapassato e condizionale composto.",
        "vocabulario": [
            [
                "se avessi studiato",
                "se eu/você tivesse estudado",
                "Protasi con congiuntivo trapassato."
            ],
            [
                "sarei passato",
                "teria passado",
                "Apodosi con condizionale composto."
            ],
            [
                "irrealità",
                "irrealidade",
                "Condizione impossibile o non verificata."
            ],
            [
                "rimpianto",
                "reminiscência / saudade / mágoa",
                "Rammarico per il passato."
            ],
            [
                "occasione persa",
                "oportunidade perdida",
                "Evento non sfruttato nel tempo."
            ],
            [
                "se fossi andato",
                "se eu tivesse ido",
                "Congiuntivo trapassato con essere."
            ]
        ],
        "gramatica": [
            [
                "3º Tipo (Impossibilità nel passato)",
                "Estrutura: Se + Congiuntivo Trapassato ➔ Condizionale Composto. Expressa hipóteses sobre o passado que não podem mais ser alteradas.",
                "Se + congiuntivo trapassato ➔ condizionale composto",
                "Se avessi studiato di più, avrei superato l'esame."
            ],
            [
                "Condizionale composto nell'apodosi",
                "Forma-se com o condicional de avere/essere + particípio passado (avrei fatto / sarei andato).",
                "avrei/sarei + particípio passado",
                "Sarei venuto volentieri se mi avessi invitato."
            ],
            [
                "Hipótese mista (Passado ➔ Presente)",
                "Quando uma condição passada tem consequência no presente: Se avessi fatto quel corso (passado), ora parlerei l'italiano (presente).",
                "Se + congiuntivo trapassato ➔ condizionale semplice",
                "Se fossi nato in Italia, ora parlerei italiano perfettamente."
            ]
        ],
        "frases": [
            [
                "Se fossimo partiti un'ora prima, non avremmo perso il treno per Milano.",
                "Se tivéssemos partido uma hora antes, não teríamos perdido o trem para Milão."
            ],
            [
                "Se mi avessi ascoltato, non avresti commesso questo errore nel lavoro.",
                "Se você tivesse me ouvido, não teria cometido este erro no trabalho."
            ]
        ],
        "dialogo": [
            [
                "Alessia",
                "Perché non hai partecipato al concorso fotografico?",
                "Por que você não participou do concurso fotográfico?"
            ],
            [
                "Paolo",
                "Se avessi saputo della scadenza, avrei inviato le mie immagini migliori!",
                "Se eu soubesse do prazo, teria enviado minhas melhores imagens!"
            ]
        ]
    },
    {
        "titulo": "La forma passiva con 'essere' e 'venire'",
        "contexto": "Transformar frases ativas em passivas usando essere e venire para enfatizar a ação e o objeto.",
        "vocabulario": [
            [
                "è stato scritto",
                "foi escrito",
                "Passivo composto con essere."
            ],
            [
                "viene organizzato",
                "é organizado",
                "Passivo semplice con venire."
            ],
            [
                "agente",
                "agente da passiva (da)",
                "Chi compie l'azione nella forma passiva."
            ],
            [
                "trasformazione",
                "transformação",
                "Passaggio da attivo a passivo."
            ],
            [
                "viene celebrata",
                "é celebrada",
                "Forma passiva di celebrare."
            ],
            [
                "è stato pubblicato",
                "foi publicado",
                "Forma passiva di pubblicare."
            ]
        ],
        "gramatica": [
            [
                "Forma passiva com ESSERE",
                "Forma-se com o verbo essere no tempo adequado + particípio passado (que concorda com o sujeito em gênero e número).",
                "essere + particípio passado (concordado)",
                "Il libro è stato scritto da un famoso autore."
            ],
            [
                "Forma passiva com VENIRE (apenas tempos simples)",
                "Venire substitui essere nos tempos simples (presente, imperfeito, futuro) para dar dinamismo à ação.",
                "venire + particípio passado",
                "La mostra viene inaugurata dal sindaco domani. (vs è inaugurata)"
            ],
            [
                "Preposição DA para o agente",
                "O complemento agente é sempre introduzido pela preposição da (articulada se necessário).",
                "substantivo passivo + verbo passivo + DA + agente",
                "La decisione è stata presa dal direttore dell'azienda."
            ]
        ],
        "frases": [
            [
                "Il nuovo museo d'arte contemporanea viene inaugurato questa sera dal ministro della cultura.",
                "O novo museu de arte contemporânea é inaugurado esta noite pelo ministro da cultura."
            ],
            [
                "Questa legge importante è stata approvata dal parlamento con una vasta maggioranza.",
                "Esta lei importante foi aprovada pelo parlamento com uma ampla maioria."
            ]
        ],
        "dialogo": [
            [
                "Giornalista",
                "Da chi è stato dipinto questo famoso affresco nel duomo?",
                "Por quem foi pintado este famoso afresco na catedral?"
            ],
            [
                "Guida",
                "L'affresco è stato realizzato nel Quattrocento da un artista toscano.",
                "O afresco foi realizado no século XV por um artista toscano."
            ]
        ]
    },
    {
        "titulo": "La forma passiva con 'andare' e 'si passivante'",
        "contexto": "Expressar necessidade/obrigação passiva com andare (va fatto) e usar o si passivante para anúncios e descrições gerais.",
        "vocabulario": [
            [
                "va fatto",
                "deve ser feito / precisa ser feito",
                "Passivo di necessità con andare."
            ],
            [
                "si vendono libri",
                "vendem-se livros",
                "Si passivante con soggetto plurale."
            ],
            [
                "vanno conservati",
                "devem ser conservados",
                "Andare + participio al plurale."
            ],
            [
                "si affitta",
                "aluga-se",
                "Si passivante con soggetto singolare."
            ],
            [
                "obbligo",
                "obrigação / dever",
                "Dovere o necessità espresso con andare."
            ],
            [
                "annuncio",
                "anúncio / aviso",
                "Messaggio pubblicitario o informativo."
            ]
        ],
        "gramatica": [
            [
                "Passivo de necessidade com ANDARE",
                "Andare + particípio passado expressa dever ou necessidade imediata (equivalente a deve essere + particípio). Usado apenas nos tempos simples.",
                "andare (presente/imperfeito) + particípio passado",
                "Questa decisione va presa subito. (= deve essere presa)"
            ],
            [
                "Si Passivante (Diferença do Si Impersonale)",
                "O Si passivante tem um sujeito paciente expresso. O verbo concorda em número com esse sujeito (Si vende casa / Si vendono case).",
                "si + verbo 3ª pers. sing/plur + sujeito",
                "In questo negozio si vendono prodotti biologici."
            ],
            [
                "Concordância no Si Passivante",
                "Se o objeto/sujeito for singular, o verbo fica no singular (Si affitta appartamento). Se for plural, o verbo fica no plural (Si affittano appartamenti).",
                "Si + singular ➔ verbo singular | Si + plural ➔ verbo plural",
                "Si cercano collaboratori qualificati per l'azienda."
            ]
        ],
        "frases": [
            [
                "I documenti riservati vanno conservati con la massima cura nell'archivio aziendale.",
                "Os documentos confidenciais devem ser conservados com o máximo cuidado no arquivo da empresa."
            ],
            [
                "In questo centro commerciale si vendono prodotti d'artigianato locale di altissima qualità.",
                "Neste centro comercial vendem-se produtos de artesanato local de altíssima qualidade."
            ]
        ],
        "dialogo": [
            [
                "Direttore",
                "Quando va inviata la relazione finale sul progetto?",
                "Quando deve ser enviada a relação final sobre o projeto?"
            ],
            [
                "Segretaria",
                "La relazione va inviata entro domani mattina prima della riunione generale.",
                "A relação deve ser enviada até amanhã de manhã antes da reunião geral."
            ]
        ]
    },
    {
        "titulo": "Il discorso indiretto nei tempi passati",
        "contexto": "Relatar o discurso de terceiros quando o verbo introdutório está no passado (discorso indiretto nel passato).",
        "vocabulario": [
            [
                "ha detto che sarebbe venuto",
                "disse que viria",
                "Condizionale composto per il futuro nel passato."
            ],
            [
                "riferire",
                "relatar / referir",
                "Riportare le parole di qualcuno."
            ],
            [
                "affermare",
                "afirmar",
                "Dichiarare con sicurezza."
            ],
            [
                "spiegare",
                "explicar",
                "Chiarire una situazione."
            ],
            [
                "futuro nel passato",
                "futuro do passado",
                "Uso del condizionale composto."
            ],
            [
                "trasposizione",
                "transposição",
                "Cambiamento dei tempi e pronomi."
            ]
        ],
        "gramatica": [
            [
                "Futuro no Passado (Condizionale Composto)",
                "Quando se relata no passado uma intenção futura original (Marco disse: \"Viria amanhã\" ➔ Marco disse que viria), usa-se o condizionale composto.",
                "verbo no passado + che + condizionale composto",
                "Ha detto che sarebbe arrivato alle otto."
            ],
            [
                "Mudança de tempos verbais no discurso indireto",
                "Presente no discurso direto ➔ Imperfeito no indireto. Passato prossimo ➔ Trapassato prossimo. Futuro ➔ Condizionale composto.",
                "Presente ➔ Imperfetto | Passato ➔ Trapassato",
                "Ha detto: \"Studio\" ➔ Ha detto che studiava."
            ],
            [
                "Mudança de pronomes e advérbios de tempo/lugar",
                "Qui/qua ➔ lì/là; oggi ➔ quel giorno; domani ➔ il giorno seguente; ieri ➔ il giorno prima; questo ➔ quello.",
                "oggi ➔ quel giorno | domani ➔ il giorno dopo",
                "Mi ha detto che sarebbe partito il giorno seguente."
            ]
        ],
        "frases": [
            [
                "Il professore ha spiegato che l'esame si sarebbe svolto nella biblioteca dell'università.",
                "O professor explicou que o exame se realizaria na biblioteca da universidade."
            ],
            [
                "Marco mi ha riferito che il giorno prima aveva incontrato la nostra vecchia amica.",
                "Marco me relatou que no dia anterior tinha encontrado nossa velha amiga."
            ]
        ],
        "dialogo": [
            [
                "Sara",
                "Cosa ti ha detto il direttore durante il colloquio?",
                "O que o diretor te disse durante a entrevista?"
            ],
            [
                "Elena",
                "Mi ha detto che avrebbe valutato il mio curriculum e che mi avrebbe risposto la settimana seguente.",
                "Ele me disse que avaliaria meu currículo e que me responderia na semana seguinte."
            ]
        ]
    },
    {
        "titulo": "Gerundio, participio e infinito implicito",
        "contexto": "Sintetizar orações subordinadas usando formas nominais do verbo (gerúndio simples/composto, particípio e infinitivo com preposição).",
        "vocabulario": [
            [
                "facendo",
                "fazendo",
                "Gerundio semplice di fare."
            ],
            [
                "avendo fatto",
                "tendo feito",
                "Gerundio composto di fare."
            ],
            [
                "prima di uscire",
                "antes de sair",
                "Infinito implicito temporale con prima di."
            ],
            [
                "essendo arrivato",
                "tendo chegado / sendo chegado",
                "Gerundio composto con essere."
            ],
            [
                "visto che",
                "visto que / dado que",
                "Causale esplicita equivalente al gerundio."
            ],
            [
                "implicito",
                "implícito",
                "Modo verbale non finito (senza persona)."
            ]
        ],
        "gramatica": [
            [
                "Gerúndio Simples vs Composto",
                "Gerúndio simples (studando) expressa simultaneidade ou modo no presente/passado. Gerúndio composto (avendo studiato) expressa anterioridade.",
                "studando (simultâneo) vs avendo studiato (anterior)",
                "Essendo stanco, sono andato a dormire. / Avendo finito il lavoro, sono uscito."
            ],
            [
                "Infinitivo Implícito com preposições",
                "Usa-se infinitivo quando o sujeito da oração principal e subordinada é o mesmo: prima di + infinitivo, dopo + infinitivo composto (dopo aver parlato), per + infinitivo.",
                "prima di / dopo aver / per + infinitivo",
                "Prima di uscire, ho spento tutte le luci."
            ],
            [
                "Particípio Absoluto (Participio assoluto)",
                "O particípio passado pode formar uma oração reduzida de tempo ou causa sem sujeito expresso: Finito il lavoro, siamo usciti.",
                "Participio passato + substantivo",
                "Arrivata la sera, la città si è riempita di luci."
            ]
        ],
        "frases": [
            [
                "Avendo completato tutti i moduli del corso, lo studente ha concluso il percorso di livello B2.",
                "Tendo concluído todos os módulos do curso, o estudante completou o percurso de nível B2."
            ],
            [
                "Prima di prendere una decisione importante, è bene riflettere con molta attenzione.",
                "Antes de tomar uma decisão importante, é bom refletir com muita atenção."
            ]
        ],
        "dialogo": [
            [
                "Lorenzo",
                "Come hai fatto a migliorare così tanto la tua pronuncia in italiano?",
                "Como você fez para melhorar tanto a sua pronúncia em italiano?"
            ],
            [
                "Giacomo",
                "Ascoltando podcast ogni giorno e parlando con madrelingua durante i miei viaggi.",
                "Escutando podcasts todos os dias e falando com falantes nativos durante as minhas viagens."
            ]
        ]
    },
    {
        "titulo": "Registro formale e informale nella comunicazione",
        "contexto": "Alternar adequadamente entre o registro formal (Lei, fórmulas de cortesia, estilo burocrático) e o coloquial da vida diária.",
        "vocabulario": [
            [
                "Distinti Saluti",
                "Atenciosamente / Cordiais cumprimentos",
                "Formula di chiusura formale nelle lettere."
            ],
            [
                "Egregio Signore",
                "Prezado Senhor",
                "Formula di apertura formale."
            ],
            [
                "Le sarei grato",
                "Eu lhe seria grato",
                "Espressione di cortesia formale."
            ],
            [
                "dar del Lei",
                "tratar por \"Lei\" (formal)",
                "Usare il registro formale con sconosciuti."
            ],
            [
                "dar del tu",
                "tratar por \"tu\" (informal)",
                "Usare il registro informale con amici e colleghi."
            ],
            [
                "colloquiale",
                "coloquial",
                "Linguaggio informale della conversazione quotidiana."
            ]
        ],
        "gramatica": [
            [
                "Dar del Lei vs Dar del tu",
                "Usa-se \"Lei\" (com maiúscula de cortesia em cartas) em contextos profissionais, com desconhecidos ou autoridades. Usa-se \"tu\" com amigos, familiares e jovens.",
                "Lei (formal) vs Tu (informal)",
                "Le chiedo scusa, Signore. / Ciao Marco, come stai?"
            ],
            [
                "Fórmulas de abertura e encerramento formais",
                "Abertura: Egregio Dottore / Gentile Signora. Encerramento: Cordiali Saluti / In attesa di un Riscontro, Distinti Saluti.",
                "Egregio/Gentile ➔ Cordiali Saluti",
                "Gentile Dottoressa Rossi, Le scrivo per chiederLe un appuntamento."
            ],
            [
                "Pronomes possessivos e indiretos de cortesia",
                "Os pronomes e possessivos formais referem-se à 3ª pessoa do feminino: Le (a você), Suo/Sua (seu/sua).",
                "Le / La / Suo / Sua",
                "In allegato Le invio la Sua documentazione."
            ]
        ],
        "frases": [
            [
                "Egregio Direttore, Le scrivo per confermare la mia partecipazione alla conferenza di lunedì prossimo.",
                "Prezado Diretor, escrevo-Lhe para confirmar a minha participação na conferência de segunda-feira que vem."
            ],
            [
                "In attesa di un Suo cortese riscontro, Le porgo i miei più distinti saluti.",
                "No aguardo de um gentil retorno Seu, apresento-Lhe os meus mais cordiais cumprimentos."
            ]
        ],
        "dialogo": [
            [
                "Impiegato",
                "Buongiorno Signora, come posso esserLe utile oggi?",
                "Bom dia Senhora, como posso ser-Lhe útil hoje?"
            ],
            [
                "Cliente",
                "Buongiorno. Vorrei chiedere se Le è possibile verificare lo stato della mia pratica.",
                "Bom dia. Gostaria de perguntar se Lhe é possível verificar o estado do meu processo."
            ]
        ]
    },
    {
        "titulo": "Coesione testuale e connettivi avanzati",
        "contexto": "Empregar conectores avançados de oposição, concessão e explicação (bensì, quantunque, ciò nonostante) para articular textos complexos.",
        "vocabulario": [
            [
                "bensì",
                "mas sim / antes",
                "Connettivo sostitutivo di forte contrapposizione."
            ],
            [
                "quantunque",
                "embora / ainda que",
                "Connettivo concessivo con il congiuntivo."
            ],
            [
                "ciò nonostante",
                "apesar disso / não obstante",
                "Connettivo avversativo."
            ],
            [
                "ovvero",
                "ou seja / isto é",
                "Connettivo esplicativo o disgiuntivo."
            ],
            [
                "purché",
                "contanto que / desde que",
                "Connettivo condizionale con il congiuntivo."
            ],
            [
                "coesione",
                "coesão",
                "Legame logico e grammaticale del testo."
            ]
        ],
        "gramatica": [
            [
                "Bensì (Contraposição corretiva)",
                "Usa-se bensì após uma negação para introduzir a alternativa correta (Non è una sconfitta, bensì un'opportunità).",
                "Non A, bensì B",
                "Non abbiamo scelto la via più breve, bensì quella più panoramica."
            ],
            [
                "Quantunque e Purché (Requerem Subjuntivo)",
                "Quantunque (embora) e purché (contanto que) exigem o subjuntivo na oração subordinada.",
                "quantunque / purché + congiuntivo",
                "Ti prestero l'auto, purché tu guida con prudenza."
            ],
            [
                "Ciò nonostante / Ciononostante (Conclusão adversativa)",
                "Inicia uma frase para conectar ao parágrafo anterior expressando superação de obstáculo.",
                "Ciò nonostante + indicativo",
                "Pioveva a dirotto; ciò nonostante siamo usciti per fare la passeggiata."
            ]
        ],
        "frases": [
            [
                "Il progetto non rappresenta una spesa inutile, bensì un investimento fondamentale per il futuro della città.",
                "O projeto não representa um gasto inútil, mas sim um investimento fundamental para o futuro da cidade."
            ],
            [
                "La situazione economica era complessa; ciò ciononostante l'azienda è riuscita ad aumentare le vendite.",
                "A situação econômica era complexa; apesar disso a empresa conseguiu aumentar as vendas."
            ]
        ],
        "dialogo": [
            [
                "Relatore",
                "Possiamo accettare la proposta del partner commerciale, purché vengano rispettate le nostre condizioni.",
                "Podemos aceitar a proposta do parceiro comercial, contanto que sejam respeitadas as nossas condições."
            ],
            [
                "Collega",
                "Sono d'accordo: non dobbiamo affrettare la decisione, bensì negoziare con molta fermezza.",
                "Concordo: não devemos apressar a decisão, mas sim negociar com muita firmeza."
            ]
        ]
    },
    {
        "titulo": "Espressioni idiomatiche e modi di dire italiani",
        "contexto": "Compreender e utilizar expressões idiomáticas e provérbios populares da cultura italiana na comunicação cotidiana.",
        "vocabulario": [
            [
                "in bocca al lupo",
                "boa sorte! (resposta: Crepi il lupo!)",
                "Augurio di successo."
            ],
            [
                "avere le mani in pasta",
                "ter influência / estar metido no assunto",
                "Essere coinvolto in un affare."
            ],
            [
                "costare un occhio della testa",
                "custar os olhos da cara",
                "Essere molto costoso."
            ],
            [
                "rompere il ghiaccio",
                "quebrar o gelo",
                "Superare l'imbarazzo iniziale."
            ],
            [
                "toccando ferro",
                "batendo na madeira (superstição)",
                "Gesto scaramantico."
            ],
            [
                "modo di dire",
                "expressão idiomática / ditado",
                "Espressione figurata tradizionale."
            ]
        ],
        "gramatica": [
            [
                "Valore culturale dei modi di dire",
                "As expressões idiomáticas não devem ser traduzidas literalmente, pois possuem sentido conotativo fixo na cultura italiana.",
                "significato figurato",
                "In bocca al lupo! ➔ Crepi! (Nunca responder \"grazie\")."
            ],
            [
                "Uso figurativo dei verbi di movimento e stato",
                "Avere le mani in pasta (envolvimento), dare una mano (ajudar), prendere due piccioni con una fava (matar dois coelhos com uma cajadada só).",
                "verbi figurati",
                "Se hai bisogno di aiuto per il trasloco, ti do volentieri una mano."
            ],
            [
                "Integrare gli idiomi nel discorso parlato",
                "Usar expressões com naturalidade no registro informal e semicoloquial.",
                "uso nel parlato",
                "Questa giacca di pelle è bellissima, ma costa un occhio della testa!"
            ]
        ],
        "frases": [
            [
                "Domani ho l'ultimo esame all'università! — In bocca al lupo! — Crepi il lupo!",
                "Amanhã tenho o último exame na universidade! — Boa sorte! — Que o lobo morra!"
            ],
            [
                "Quel politico ha le mani in pasta in molti settori dell'economia regionale.",
                "Aquele político tem influência em muitos setores da economia regional."
            ]
        ],
        "dialogo": [
            [
                "Francesca",
                "Come è andato il primo giorno di lavoro nella nuova azienda?",
                "Como foi o primeiro dia de trabalho na nova empresa?"
            ],
            [
                "Marco",
                "Benissimo! Il direttore ha fatto una battuta per rompere il ghiaccio e mi ha dato una mano.",
                "Muitíssimo bem! O diretor fez uma piada para quebrar o gelo e me deu uma ajuda."
            ]
        ]
    },
    {
        "titulo": "Argomentazione e negoziazione complessa",
        "contexto": "Desenvolver técnicas de persuasão, negociação contratual e resolução de conflitos em conversações avançadas.",
        "vocabulario": [
            [
                "negoziazione",
                "negociação",
                "Trattativa per raggiungere un accordo."
            ],
            [
                "persuasione",
                "persuasão",
                "Capacità di convincere gli altri."
            ],
            [
                "tattica",
                "tática",
                "Strategia usata in un dibattito."
            ],
            [
                "punto d'incontro",
                "ponto de encontro / consenso",
                "Soluzione condivisa."
            ],
            [
                "concedere",
                "conceder",
                "Cedere su un punto della trattativa."
            ],
            [
                "irremovibile",
                "irremovível / inflexível",
                "Fermo sulle proprie posizioni."
            ]
        ],
        "gramatica": [
            [
                "Táticas de concessão e contraproposta",
                "Usar estruturas como: Sebbene la Sua offerta sia interessante, dobbiamo chiedere una riduzione dei costi.",
                "concessione + contrapposta",
                "Se da un lato comprendiamo le Sue esigenze, dall'altro dobbiamo tutelare il nostro budget."
            ],
            [
                "Expressar condições de compromisso",
                "Formular propostas negociadas com condicional e subjuntivo: Saremmo disposti ad accettare a patto che...",
                "a patto che / a condizione che + congiuntivo",
                "Accetteremo il contratto a patto che ci garantiate la consegna entro un mese."
            ],
            [
                "Sintetizar o consenso alcançado",
                "Fórmulas para fechar a negociação: Possiamo dunque concludere che... Siamo giunti a un punto d'incontro.",
                "fasi della negoziazione",
                "Siamo felici di essere giunti a un punto d'incontro soddisfacente per entrambi."
            ]
        ],
        "frases": [
            [
                "Saremmo disposti a firmare l'accordo a patto che vengano modificate le clausole sulla garanzia.",
                "Estaríamos dispostos a assinar o acordo contanto que sejam modificadas as cláusulas sobre a garantia."
            ],
            [
                "Dopo una lunga negoziazione, siamo riusciti a trovare un punto d'incontro vantaggioso per entrambe le parti.",
                "Após uma longa negociação, conseguimos encontrar um ponto de consenso vantajoso para ambas as partes."
            ]
        ],
        "dialogo": [
            [
                "Negoziatore A",
                "Comprendiamo la vostra posizione, tuttavia non possiamo ridurre ulteriormente il prezzo di vendita.",
                "Compreendemos a sua posição, contudo não podemos reduzir ainda mais o preço de venda."
            ],
            [
                "Negoziatore B",
                "In tal caso, potremmo accettare questo prezzo a condizione che includiate i servizi di assistenza gratuiti.",
                "Nesse caso, poderíamos aceitar este preço sob a condição de que incluam os serviços de assistência gratuitos."
            ]
        ]
    },
    {
        "titulo": "Economia, finanza e mercato italiano",
        "contexto": "Compreender o panorama econômico da Itália, o setor Made in Italy, pequenas e médias empresas (PMI) e mercado de capitais.",
        "vocabulario": [
            [
                "Made in Italy",
                "Made in Italy / excelência italiana",
                "Marchio di qualità dei prodotti italiani."
            ],
            [
                "piccola e media impresa (PMI)",
                "pequena e média empresa (PME)",
                "Ossatura del sistema produttivo italiano."
            ],
            [
                "PIL (Prodotto Interno Lordo)",
                "PIB (Produto Interno Bruto)",
                "Indice della ricchezza prodotta."
            ],
            [
                "mercato azionario",
                "mercado acionário / bolsa",
                "Borsa valori di Milano (Piazza Affari)."
            ],
            [
                "esportazione",
                "exportação",
                "Vendita di merci all'estero."
            ],
            [
                "innovazione tecnologica",
                "inovação tecnológica",
                "Sviluppo di nuove tecnologie aziendali."
            ]
        ],
        "gramatica": [
            [
                "Lessico economico e finanziario in italiano",
                "Termos como inflazione, tasso di interesse, fatturato, utile netto, investimento.",
                "vocabolario di settore",
                "L'azienda ha registrato un aumento del fatturato del dieci per cento."
            ],
            [
                "Analise de tendências econômicas",
                "Usar verbos de crescimento e queda: crescere, aumentare, diminuire, calare, stabilizzarsi.",
                "verbi di tendenza",
                "Le esportazioni del Made in Italy sono cresciute nel settore della moda e del design."
            ],
            [
                "Estruturas impessoais em relatórios econômicos",
                "Si osserva una crescita, si prevede che l'economia si riprenda nel prossimo trimestre.",
                "previsioni economiche",
                "Si stima che il PIL aumenti dell'uno virgola cinque per cento quest'anno."
            ]
        ],
        "frases": [
            [
                "Le piccole e medie imprese costituiscono la spina dorsale dell'economia italiana e del marchio Made in Italy.",
                "As pequenas e médias empresas constituem a espinha dorsal da economia italiana e da marca Made in Italy."
            ],
            [
                "La Borsa di Milano ha chiuso la giornata finanziaria con un rialzo significativo degli indici principali.",
                "A Bolsa de Milão fechou a jornada financeira com uma alta significativa dos índices principais."
            ]
        ],
        "dialogo": [
            [
                "Analista",
                "Quali sono i settori trainanti delle esportazioni italiane nell'ultimo anno?",
                "Quais são os setores líderes das exportações italianas no último ano?"
            ],
            [
                "Economista",
                "Il settore agroalimentare, la meccanica di precisione e la moda di alta gamma hanno ottenuto i risultati migliori.",
                "O setor agroalimentar, a mecânica de precisão e a moda de alta gama obtiveram os melhores resultados."
            ]
        ]
    },
    {
        "titulo": "Diritto, istituzioni e politica in Italia",
        "contexto": "Analisar a estrutura política da Itália, a Constituição da República, o Parlamento e o sistema jurídico.",
        "vocabulario": [
            [
                "Costituzione",
                "Constituição",
                "Carta fondamentale della Repubblica Italiana (1948)."
            ],
            [
                "Parlamento",
                "Parlamento",
                "Organo legislativo (Camera dei Deputati e Senato)."
            ],
            [
                "Presidente della Repubblica",
                "Presidente da República",
                "Capo dello Stato e garante della Costituzione."
            ],
            [
                "decreto legge",
                "decreto-lei",
                "Provvedimento provvisorio con forza di legge."
            ],
            [
                "Corte Costituzionale",
                "Corte Constitucional",
                "Organo di controllo di costituzionalità."
            ],
            [
                "democrazia parlamentare",
                "democracia parlamentar",
                "Sistema politico italiano."
            ]
        ],
        "gramatica": [
            [
                "Linguagem jurídica e institucional",
                "Termos técnicos como promulgare, approvare, abrogare, violare, garantire, sancire.",
                "verbi istituzionali",
                "La Costituzione sancisce la libertà di espressione e l'uguaglianza di tutti i cittadini."
            ],
            [
                "Uso de frases relativas formais no direito",
                "O uso de il quale, la quale, cui em textos jurídicos para dar precisão inequívoca.",
                "relativi complessi",
                "La legge della quale si discute entrerà in vigore il mese prossimo."
            ],
            [
                "Expressar obrigações legais com o passivo",
                "I diritti fondamentali sono garantiti dall'articolo 3 della Costituzione.",
                "passivo giuridico",
                "Il decreto legge deve essere convertito in legge entro sessanta giorni."
            ]
        ],
        "frases": [
            [
                "L'articolo 1 della Costituzione italiana afferma che l'Italia è una Repubblica democratica fondata sul lavoro.",
                "O artigo 1 da Constituição italiana afirma que a Itália é uma República democrática fundada no trabalho."
            ],
            [
                "Il Parlamento italiano è composto dalla Camera dei Deputati e dal Senato della Repubblica.",
                "O Parlamento italiano é composto pela Câmara dos Deputados e pelo Senado da República."
            ]
        ],
        "dialogo": [
            [
                "Studente",
                "Qual è il ruolo del Presidente della Repubblica nel sistema politico italiano?",
                "Qual é o papel do Presidente da República no sistema político italiano?"
            ],
            [
                "Docente",
                "Il Presidente della Repubblica rappresenta l'unità nazionale e garantisce il rispetto della Costituzione.",
                "O Presidente da República representa a unidade nacional e garante o respeito da Constituição."
            ]
        ]
    },
    {
        "titulo": "Scienza, innovazione e ricerca",
        "contexto": "Debater descobertas científicas, inovação médica, astronômica e a contribuição histórica dos pesquisadores italianos.",
        "vocabulario": [
            [
                "ricerca scientifica",
                "pesquisa científica",
                "Attività di studio per nuove scoperte."
            ],
            [
                "scoperta",
                "descoberta",
                "Ritrovamento di nuove conoscenze."
            ],
            [
                "laboratorio",
                "laboratório",
                "Luogo di esperimenti e analisi."
            ],
            [
                "biotecnologia",
                "biotecnologia",
                "Applicazione tecnologica della biologia."
            ],
            [
                "ricercatore",
                "pesquisador",
                "Studioso che si dedica alla ricerca."
            ],
            [
                "brevetto",
                "patente",
                "Tutela legale di un'invenzione."
            ]
        ],
        "gramatica": [
            [
                "Discurso científico e objetividade",
                "Uso preferencial da voz passiva e construções impessoais (Si è osservato che, È stato dimostrato che).",
                "stile scientifico impersonale",
                "È stato dimostrato che il nuovo trattamento riduce i tempi di guarigione."
            ],
            [
                "Expressar hipóteses científicas com subjuntivo",
                "I ricercatori ritengono che questo fenomeno dipenda dalle variazioni climatiche.",
                "ritenere che + congiuntivo",
                "Gli scienziati ipotizzano che ci siano altre fonti di energia pulita."
            ],
            [
                "Vocabulário de progresso e tecnologia",
                "Consolidare termos como sviluppo, sperimentazione, progresso, impatto ambientale.",
                "scienza e società",
                "La sperimentazione ha dato risultati molto promettenti."
            ]
        ],
        "frases": [
            [
                "I ricercatori italiani hanno sviluppato un nuovo brevetto nel campo delle biotecnologie mediche.",
                "Os pesquisadores italianos desenvolveram uma nova patente no campo das biotecnologias médicas."
            ],
            [
                "La ricerca scientifica richiede importanti investimenti pubblici e privati per stimolare l'innovazione.",
                "A pesquisa científica exige importantes investimentos públicos e privados para estimular a inovação."
            ]
        ],
        "dialogo": [
            [
                "Giornalista",
                "Quali sono stati i risultati principali dell'ultimo esperimento di laboratorio?",
                "Quais foram os resultados principais do último experimento de laboratório?"
            ],
            [
                "Scienziato",
                "Gli esperimenti hanno confermato la nostra ipotesi iniziale, dimostrando l'efficacia del nuovo materiale.",
                "Os experimentos confirmaram a nossa hipótese inicial, demonstrando a eficácia do novo material."
            ]
        ]
    },
    {
        "titulo": "Letteratura italiana contemporanea",
        "contexto": "Analisar obras e autores da literatura italiana moderna (Calvino, Eco, Ferrante) e técnicas narrativas avançadas.",
        "vocabulario": [
            [
                "romanzo",
                "romance (livro)",
                "Opera narrativa in prosa di lunga estensione."
            ],
            [
                "narratore",
                "narrador",
                "Chi racconta la storia nel testo."
            ],
            [
                "metafora",
                "metáfora",
                "Figura retorica di similitudine implicita."
            ],
            [
                "stile letterario",
                "estilo literário",
                "Caratteristiche espressive dell'autore."
            ],
            [
                "trama",
                "enredo / trama",
                "Insieme degli eventi della storia."
            ],
            [
                "saggio",
                "ensaio (texto crítico)",
                "Testo critico di approfondimento."
            ]
        ],
        "gramatica": [
            [
                "Análise de figuras de linguagem",
                "Reconhecer metáforas, similes, personificações e ironia nos textos literários.",
                "figure retoriche",
                "L'autore usa una metafora suggestiva per descrivere la solitudine del protagonista."
            ],
            [
                "Uso dos tempos do passado no texto literário",
                "Contraste entre passato remoto (fatos narrativos), imperfetto (descrições) e trapassato remoto.",
                "tempi narrativi letterari",
                "All'improvviso si udì un rumore e il vecchio si alzò dalla sedia."
            ],
            [
                "Resenha literária e juízo crítico",
                "Expressar análises de obras: Il romanzo si caratteriza per uno stile fluido ed evocativo.",
                "critica letteraria",
                "Consiglio la lettura di questo saggio per la profondità delle sue riflessioni."
            ]
        ],
        "frases": [
            [
                "Il romanzo \"Il nome della rosa\" di Umberto Eco unisce la trama poliziesca alla ricostruzione storica medievale.",
                "O romance \"O nome da rosa\" de Umberto Eco une o enredo policial à reconstrução histórica medieval."
            ],
            [
                "Lo stile narrativo di Italo Calvino si distingue per la leggerezza, l'ironia e la straordinaria fantasia.",
                "O estilo narrativo de Italo Calvino distingue-se pela leveza, a ironia e a extraordinária fantasia."
            ]
        ],
        "dialogo": [
            [
                "Critico",
                "Che cosa rende la letteratura di Elena Ferrante così apprezzata a livello internazionale?",
                "O que torna a literatura de Elena Ferrante tão apreciada em nível internacional?"
            ],
            [
                "Lettore",
                "La capacità di descrivere le relazioni umane con straordinaria autenticità e profondità psicologica.",
                "A capacidade de descrever as relações humanas com extraordinária autenticidade e profundidade psicológica."
            ]
        ]
    },
    {
        "titulo": "Il linguaggio dei media avanzato e giornalismo",
        "contexto": "Analisar a linguagem jornalística avançada, editoriais, reportagens investigativas e viés midiático.",
        "vocabulario": [
            [
                "giornalismo d'inchiesta",
                "jornalismo de investigação",
                "Giornalismo di approfondimento e ricerca."
            ],
            [
                "editoriale",
                "editorial",
                "Articolo di opinione della direzione."
            ],
            [
                "fonte d'informazione",
                "fonte de informação",
                "Origine verificata di una notizia."
            ],
            [
                "libertà di stampa",
                "liberdade de imprensa",
                "Diritto di informare senza censura."
            ],
            [
                "bufala / fake news",
                "notícia falsa / farsa",
                "Notizia falsa diffusa sui media."
            ],
            [
                "comunicato stampa",
                "comunicado de imprensa / release",
                "Testo informativo per i giornalisti."
            ]
        ],
        "gramatica": [
            [
                "Uso do condicional jornalístico para fontes não confirmadas",
                "O condicional é usado pela imprensa para evitar acusações diretas antes da confirmação oficial.",
                "condizionale di riserva",
                "Il sospettato avrebbe lasciato il paese ieri sera."
            ],
            [
                "Técnicas de síntese nos títulos de jornal",
                "Títulos omitem artigos e verbos auxiliares para dar impacto imediato (Approvata la legge sulla privacy).",
                "sintassi dei titoli",
                "Incendio in centro: nessun ferito."
            ],
            [
                "Avaliação da credibilidade das fontes",
                "Expressões de cautela: Secondo fonti ufficiose, da quanto si apprende, la notizia va presa con le pinze.",
                "analisi delle fonti",
                "La notizia è stata smentita ufficialmente dalla redazione del quotidiano."
            ]
        ],
        "frases": [
            [
                "Il giornalismo d'inchiesta svolge un ruolo fondamentale nel verificare le fonti e difendere la verità.",
                "O jornalismo de investigação desempenha um papel fundamental em verificar as fontes e defender a verdade."
            ],
            [
                "È necessario verificare la veridicità delle notizie prima di condividerle sulle piattaforme digitali.",
                "É necessário verificar a veracidade das notícias antes de compartilhá-las nas plataformas digitais."
            ]
        ],
        "dialogo": [
            [
                "Giornalista A",
                "Avete verificato la fonte di questa notizia prima di pubblicare l'articolo in prima pagina?",
                "Vocês verificaram a fonte desta notícia antes de publicar o artigo na primeira página?"
            ],
            [
                "Giornalista B",
                "Sì, la notizia è stata confermata da due fonti indipendenti e dal comunicato stampa ufficiale.",
                "Sim, a notícia foi confirmada por duas fontes independentes e pelo comunicado de imprensa oficial."
            ]
        ]
    },
    {
        "titulo": "Cinema d'autore e teatro d'avanguardia",
        "contexto": "Explorar o cinema autoral italiano (Neorrealismo a Sorrentino), a dramaturgia e o teatro de vanguarda.",
        "vocabulario": [
            [
                "Neorealismo",
                "Neorrealismo (movimento de cinema)",
                "Movimento cinematografico italiano del dopoguerra."
            ],
            [
                "cinematografia",
                "cinematografia",
                "Arte e industria del cinema."
            ],
            [
                "sceneggiatura",
                "roteiro cinematográfico",
                "Testo scritto del film."
            ],
            [
                "teatro d'avanguardia",
                "teatro de vanguarda",
                "Teatro di sperimentazione e innovazione."
            ],
            [
                "interpretazione",
                "interpretação / atuação",
                "Recitazione degli attori."
            ],
            [
                "palcoscenico",
                "palco do teatro",
                "Spazio del teatro dove recitano gli attori."
            ]
        ],
        "gramatica": [
            [
                "Vocabulário técnico de crítica cinematográfica",
                "Termos como inquadratura, montaggio, colonna sonora, regia, cast, interpretazione.",
                "lessico del cinema",
                "Il film si distingue per una colonna sonora straordinaria e una fotografia suggestiva."
            ],
            [
                "Expressar julgamento estético sofisticado",
                "Usar subjuntivo e estruturas complexas em críticas: Ritengo che il regista abbia espresso al meglio la poetica del neorealismo.",
                "critica cinematografica",
                "Non penso che questa sia la migliore sceneggiatura dell'autore."
            ],
            [
                "História e evolução das artes cênicas na Itália",
                "Compreender expressões como Commedia dell'Arte, Neorealismo, Mostra del Cinema di Venezia.",
                "storia del cinema e teatro",
                "Il Neorealismo ha rivoluzionato il modo di raccontare la realtà sociale."
            ]
        ],
        "frases": [
            [
                "Il Neorealismo italiano ha segnato la storia della cinematografia mondiale con registi come De Sica e Fellini.",
                "O Neorrealismo italiano marcou a história da cinematografia mundial com diretores como De Sica e Fellini."
            ],
            [
                "Gli attori hanno calcato il palcoscenico con una recitazione intensa che ha emozionato tutto il pubblico.",
                "Os atores pisaram no palco com uma atuação intensa que emocionou todo o público."
            ]
        ],
        "dialogo": [
            [
                "Critico",
                "Che cosa caratterizza lo stile del nuovo cinema d'autore italiano negli ultimi anni?",
                "O que caracteriza o estilo do novo cinema autoral italiano nos últimos anos?"
            ],
            [
                "Cinefilo",
                "Una forte attenzione ai dettagli visivi, la bellezza dei paesaggi e l'analisi delle fragilità umane.",
                "Uma forte atenção aos detalhes visuais, a beleza das paisagens e a análise das fragilidades humanas."
            ]
        ]
    },
    {
        "titulo": "Architettura, design e moda italiana",
        "contexto": "Discutir a excelência do design italiano (Milão), a história da alta-costura (alta moda) e a arquitetura histórica e contemporânea.",
        "vocabulario": [
            [
                "alta moda / alta sartoria",
                "alta-costura / alfaiataria",
                "Settore del lusso e dell'abbigliamento."
            ],
            [
                "design industriale",
                "design industrial",
                "Progettazione di oggetti d'uso quotidiano."
            ],
            [
                "stile architettonico",
                "estilo arquitetônico",
                "Caratteristiche degli edifici."
            ],
            [
                "Salone del Mobile",
                "Salão do Móvel de Milão",
                "Fiera mondiale del design."
            ],
            [
                "sostenibilità estetica",
                "sustentabilidade estética",
                "Unione di bellezza e rispetto ambientale."
            ],
            [
                "patrimonio artistico",
                "patrimônio artístico",
                "Insieme delle opere d'arte di una nazione."
            ]
        ],
        "gramatica": [
            [
                "Adjetivos descritivos de estética e estilo",
                "Innovativo, elegante, raffinato, essenziale, sfarzoso, armonioso, avveniristico.",
                "aggettivi estetici",
                "L'edificio combina linee essenziali ed elementi di architettura sostenibile."
            ],
            [
                "Superlativos absolutos eruditos em -errimo / -issimo",
                "Formas eruditas como celeberrimo (muito célebre), miserrimo, integerrimo.",
                "superlativi dotti",
                "Milano è una città celeberrima per la moda e il design industriale."
            ],
            [
                "Voz passiva nas descrições de patrimônio arquitetônico",
                "I monumenti rinascimentali vengono tutelati dalle soprintendenze ai beni culturali.",
                "tutela del patrimonio",
                "La cattedrale fu progettata nel Trecento ed è stata completata nei secoli successivi."
            ]
        ],
        "frases": [
            [
                "Milano è considerata la capitale mondiale della moda e del design industriale grazie al Salone del Mobile.",
                "Milão é considerada a capital mundial da moda e do design industrial graças ao Salão do Móvel."
            ],
            [
                "L'architettura italiana unisce la maestosità del patrimonio storico alla ricerca di soluzioni ecosostenibili.",
                "A arquitetura italiana une a majestade do patrimônio histórico à busca de soluções ecossustentáveis."
            ]
        ],
        "dialogo": [
            [
                "Designer",
                "Quali sono i principi fondamentali che guidano il nuovo design industriale italiano?",
                "Quais são os princípios fundamentais que guiam o novo design industrial italiano?"
            ],
            [
                "Architetto",
                "La combinazione indissolubile tra funzionalità quotidiana, eleganza delle forme e sostenibilità dei materiali.",
                "A combinação indissolúvel entre funcionalidade cotidiana, elegância das formas e sustentabilidade dos materiais."
            ]
        ]
    },
    {
        "titulo": "Filosofia e storia delle idee in Italia",
        "contexto": "Explorar o Humanismo, o Renascimento (Umanesimo e Rinascimento), o Iluminismo e os grandes pensadores italianos (Maquiavel, Vico, Gramsci).",
        "vocabulario": [
            [
                "Umanesimo",
                "Humanismo",
                "Movimento culturale incentrato sull'uomo."
            ],
            [
                "Rinascimento",
                "Renascimento",
                "Periodo di straordinaria rinascita artistica e scientifica."
            ],
            [
                "pensiero critico",
                "pensamento crítico",
                "Capacità di analizzare le idee autonomamente."
            ],
            [
                "filosofia politica",
                "filosofia política",
                "Studio delle istituzioni e del potere."
            ],
            [
                "Illuminismo",
                "Iluminismo",
                "Movimento fondato sui lumi della ragione."
            ],
            [
                "intellettuale",
                "intelectual",
                "Persona di cultura attiva nella società."
            ]
        ],
        "gramatica": [
            [
                "Subjuntivo em reflexões filosóficas e abstratas",
                "Espressioni abstratas: Si ritiene che la ragione debba guidare le azioni umane.",
                "pensiero astratto",
                "Machiavelli riteneva che la politica fosse autonoma dalla morale."
            ],
            [
                "Conetores lógicos de argumentação filosófica",
                "Poiché, laddove, per il fatto che, in quanto.",
                "connettivi filosofici",
                "L'Umanesimo pose l'uomo al centro dell'universo, laddove il Medioevo era teocentrico."
            ],
            [
                "Vocabulário de história do pensamento",
                "Termos como visione del mondo, etica, morale, razionalismo, idealismo.",
                "lessico filosofico",
                "Il pensiero di Giordano Bruno ha influenzato la moderna visione dell'universo."
            ]
        ],
        "frases": [
            [
                "L'Umanesimo e il Rinascimento hanno rivoluzionato la storia del pensiero ponendo l'uomo al centro dell'universo.",
                "O Humanismo e o Renascimento revolucionaram a história do pensamento colocando o homem no centro do universo."
            ],
            [
                "Il pensiero politico di Niccolò Machiavelli ha gettato le basi per la scienza politica moderna.",
                "O pensamento político de Niccolò Machiavelli lançou as bases para a ciência política moderna."
            ]
        ],
        "dialogo": [
            [
                "Professore",
                "Come ha influenzato l'Illuminismo italiano il dibattito sul diritto di punire?",
                "Como o Iluminismo italiano influenciou o debate sobre o direito de punir?"
            ],
            [
                "Studente",
                "Grazie all'opera di Cesare Beccaria \"Dei delitti e delle pene\", che sostenne l'abolizione della tortura e della pena di morte.",
                "Graças à obra de Cesare Beccaria \"Dos delitos e das penas\", que defendeu a abolição da tortura e da pena de morte."
            ]
        ]
    },
    {
        "titulo": "Società italiana: cambiamenti e sfide",
        "contexto": "Analisar as transformações demográficas na Itália, a nova estrutura familiar, a imigração e o envelhecimento populacional.",
        "vocabulario": [
            [
                "calo demografico",
                "queda demográfica / denatalidade",
                "Riduzione delle nascite."
            ],
            [
                "invecchiamento della popolazione",
                "envelhecimento da população",
                "Aumento dell'età media dei cittadini."
            ],
            [
                "integrazione culturale",
                "integração cultural",
                "Processo di inclusione delle minoranze."
            ],
            [
                "struttura familiare",
                "estrutura familiar",
                "Organizzazione del nucleo familiare."
            ],
            [
                "pari opportunità",
                "igualdade de oportunidades",
                "Uguaglianza tra uomini e donne."
            ],
            [
                "coesione sociale",
                "coesão social",
                "Solidarietà e unione nella società."
            ]
        ],
        "gramatica": [
            [
                "Estruturas sociológicas e estatísticas",
                "Percentuais, proporções e comparações sociais (Un terzo della popolazione, la maggior parte dei giovani).",
                "dati sociologici",
                "Oltre il venti per cento degli abitanti ha superato i sessantacinque anni."
            ],
            [
                "Subjuntivo em análises de desafios sociais",
                "È auspicabile che il governo promuova politiche a sostegno della famiglia.",
                "auspicare che + congiuntivo",
                "Ci si augura che le nuove generazioni trovino lavoro stabile."
            ],
            [
                "Substantivos coletivos e abstratos da sociologia",
                "Cittadinanza, welfare, integrazione, diversità, pari opportunità, inclusione.",
                "lessico sociale",
                "Il sistema di welfare deve rispondere alle esigenze di una popolazione che invecchia."
            ]
        ],
        "frases": [
            [
                "La società italiana affronta la sfida del calo demografico e dell'invecchiamento progressivo della popolazione.",
                "A sociedade italiana enfrenta o desafio da queda demográfica e do envelhecimento progressivo da população."
            ],
            [
                "Le pari opportunità e la conciliazione tra lavoro e famiglia sono obiettivi fondamentali per il futuro del Paese.",
                "A igualdade de oportunidades e a conciliação entre trabalho e família são objetivos fundamentais para o futuro do País."
            ]
        ],
        "dialogo": [
            [
                "Sociologo",
                "Quali sono le trasformazioni più evidenti nella struttura familiare italiana negli ultimi decenni?",
                "Quais são as transformações mais evidentes na estrutura familiar italiana nas últimas décadas?"
            ],
            [
                "Ricercatore",
                "Una maggiore diversità dei nuclei familiari e un rinvio dell'età in cui i giovani lasciano la casa dei genitori.",
                "Uma maior diversidade dos núcleos familiares e um adiamento da idade em que os jovens deixam a casa dos pais."
            ]
        ]
    },
    {
        "titulo": "Oratoria e presentazione pubblica",
        "contexto": "Dominar a arte do discurso público em italiano (oratoria), o ritmo da voz, o contato visual e a estrutura persuasiva.",
        "vocabulario": [
            [
                "oratoria",
                "oratória / arte do discurso",
                "Arte di parlare in pubblico in modo persuasivo."
            ],
            [
                "discorso pubblico",
                "discurso público",
                "Intervento parlato davanti a un uditorio."
            ],
            [
                "uditorio / pubblico",
                "auditório / público",
                "Insieme delle persone che ascoltano."
            ],
            [
                "dizione",
                "dicção / pronúncia clara",
                "Modo di pronunciare le parole."
            ],
            [
                "chiarezza espositiva",
                "clareza expositiva",
                "Capacità di farsi comprendere."
            ],
            [
                "contatto visivo",
                "contato visual",
                "Guardare negli occhi gli ascoltatori."
            ]
        ],
        "gramatica": [
            [
                "Técnicas de estrutura do discurso persuasivo",
                "Introdução impactante, desenvolvimento com dados e conclusão memorável (Exordium, Narratio, Peroratio).",
                "struttura della presentazione",
                "Signore e Signori, vorrei iniziare la mia presentazione con un dato fondamentale."
            ],
            [
                "Uso de perguntas retóricas para captar atenção",
                "Perguntas sem resposta direta para provocar reflexão no público (Ci siamo mai chiesti perché...?).",
                "domande retoriche",
                "Ci siamo mai chiesti quale sarà l'impatto di questa decisione per le future generazioni?"
            ],
            [
                "Modulação de tom, pausas e dicção",
                "Usar pausas estratégicas e ritmo controlado para dar ênfase aos pontos chave.",
                "ritmo e pause nel discorso",
                "È questo... il momento di agire con coraggio e determinazione."
            ]
        ],
        "frases": [
            [
                "Per parlare in pubblico in modo efficace è fondamentale curare la dizione, il ritmo della voce e il contatto visivo.",
                "Para falar em público de modo eficaz é fundamental cuidar da dicção, do ritmo da voz e do contato visual."
            ],
            [
                "Signore e Signori, vi ringrazio per l'attenzione e sono a vostra disposizione per rispondere alle vostre domande.",
                "Senhoras e Senhores, agradeço-lhes pela atenção e estou à vossa disposição para responder às vossas perguntas."
            ]
        ],
        "dialogo": [
            [
                "Formatore",
                "Qual è il consiglio principale per gestire l'ansia prima di un intervento in pubblico?",
                "Qual é o conselho principal para gerenciar a ansiedade antes de uma fala em público?"
            ],
            [
                "Oratore",
                "Preparare con cura la struttura del discorso, respirare con calma e stabilire fin da subito un contatto visivo positivo con il pubblico.",
                "Preparar com cuidado a estrutura do discurso, respirar com calma e estabelecer desde o início um contato visual positivo com o público."
            ]
        ]
    },
    {
        "titulo": "Revisione generale B2 e sintassi complessa",
        "contexto": "Consolidar todo o sistema do subjuntivo avançado, período hipotético, voz passiva, discurso indireto e conectores eruditos.",
        "vocabulario": [
            [
                "sintassi complessa",
                "sintaxe complexa",
                "Struttura grammaticale articolata."
            ],
            [
                "padronanza avanzata",
                "domínio avançado",
                "Livello B2 del Quadro Comune Europeo."
            ],
            [
                "perfezionamento",
                "aperfeiçoamento",
                "Affinamento delle competenze linguistiche."
            ],
            [
                "sfumatura",
                "matiz / nuance de significado",
                "Piccola variazione di significato."
            ],
            [
                "fluidità",
                "fluidez",
                "Capacità di parlare senza esitazioni."
            ],
            [
                "sicurezza espressiva",
                "segurança expressiva",
                "Fiducia nella comunicazione formale."
            ]
        ],
        "gramatica": [
            [
                "Síntese do Subjuntivo e Período Hipotético (B2)",
                "Revisão dos 4 tempos do subjuntivo e dos 3 tipos de período hipotético (realidade, possibilidade, irrealidade).",
                "congiuntivo + periodo ipotetico I/II/III",
                "Se avessi saputo che l'esame era così difficile, avrei studiato di più."
            ],
            [
                "Síntese da Voz Passiva e Discurso Indireto",
                "Revisão de essere, venire, andare e si passivante + transposição temporal no passado.",
                "passivo + discorso indiretto nel passato",
                "Ha detto che la relazione sarebbe stata inviata dal direttore."
            ],
            [
                "Síntese do Registro Formal e Conectores",
                "Uso consciente de bensì, quantunque, ciò nonostante e fórmulas formais de cortesia (Lei / Distinti Saluti).",
                "connettivi avanzati + registro formale",
                "Le sarei grato se potesse inviarmi i documenti richiesti."
            ]
        ],
        "frases": [
            [
                "Con il completamento del livello B2 si raggiunge un pieno controllo della sintassi complessa e una grande fluidità espressiva.",
                "Com a conclusão do nível B2 atinge-se um pleno controle da sintaxe complexa e uma grande fluidez expressiva."
            ],
            [
                "Siamo in grado di comprendere testi articolati, sostenere dibattiti complessi e utilizzare un registro formale impeccabile.",
                "Somos capazes de compreender textos articulados, sustentar debates complexos e utilizar um registro formal impecável."
            ]
        ],
        "dialogo": [
            [
                "Insegnante",
                "Complimenti a tutti! Avete completato con successo l'intero programma di grammatica e sintassi del livello B2.",
                "Parabéns a todos! Vocês completaram com sucesso todo o programa de gramática e sintaxe do nível B2."
            ],
            [
                "Studente",
                "Grazie di cuore! Ora mi sento pronto ad affrontare l'esame integrato di padronanza e la sfida finale B2.",
                "Muito obrigado do fundo do coração! Agora me sinto pronto para enfrentar o exame integrado de domínio e o desafio final B2."
            ]
        ]
    },
    {
        "titulo": "Sfida Finale B2: Esame integrato di padronanza",
        "contexto": "Exame integrado final de 30 questões avaliando o domínio completo do nível B2 de italiano (subjuntivo, voz passiva, período hipotético e cultura).",
        "vocabulario": [
            [
                "esame integrato",
                "exame integrado",
                "Valutazione globale di livello B2."
            ],
            [
                "padronanza",
                "domínio completo / fluência B2",
                "Livello di autonomia avanzata."
            ],
            [
                "completamento del livello B2",
                "conclusão do nível B2",
                "Conclusione del percorso formativo interno."
            ],
            [
                "eccellenza linguistica",
                "excelência linguística",
                "Massimo risultato nelle competenze."
            ],
            [
                "traguardo finale",
                "meta final do curso",
                "Completamento dei 108 moduli di italiano."
            ],
            [
                "successo formativo",
                "sucesso formativo",
                "Raggiungimento degli obiettivi."
            ]
        ],
        "gramatica": [
            [
                "Integração total do programa B2 (108 Módulos)",
                "O exame final testa rigorosamente o subjuntivo, período hipotético, voz passiva, discurso indireto, gerúndio e conectores avançados.",
                "avaliação global B2",
                "Se avessi studiato di più, ora parlerei l'italiano fluentemente."
            ],
            [
                "Estratégias de resolução e análise sintática",
                "Analisar com atenção as regências verbais, a concordância dos tempos no passado e as transformações passivas.",
                "atenção à concordância e regência",
                "Credo che la relazione sia stata inviata ieri sera."
            ],
            [
                "Validação da autonomia B2 (CEFR)",
                "A atividade final verifica, dentro do curso, a capacidade de interagir com autonomia e compreender textos abstratos.",
                "nível de autonomia avançada B2",
                "Il candidato ha dimostrato una straordinaria padronanza della lingua italiana!"
            ]
        ],
        "frases": [
            [
                "Benvenuti alla sfida finale del livello B2 di italiano: trenta domande di alta sintassi per attestare la vostra padronanza!",
                "Bem-vindos ao desafio final do nível B2 de italiano: trinta perguntas de alta sintaxe para atestar o seu domínio!"
            ],
            [
                "Ho superato la sfida finale B2 e ho completato l'intero corso di 108 moduli di italiano con grande successo!",
                "Passei no desafio final B2 e completei todo o curso de 108 módulos de italiano com grande sucesso!"
            ]
        ],
        "dialogo": [
            [
                "Esaminatore",
                "Siete pronti per l'esame integrato di padronanza B2 sul programma completo del corso di italiano?",
                "Vocês estão prontos para o exame integrado de domínio B2 sobre o programa completo do curso de italiano?"
            ],
            [
                "Studente",
                "Sì, sono prontissimo! Ho ripassato ogni regola sintattica ed esprimo le mie idee in italiano con sicurezza.",
                "Sim, estou prontíssimo! Revisei cada regra sintática e me expresso em italiano com segurança."
            ]
        ]
    }
];

const SFIDA_FINALE_QUIZ_B2 = [
    {
        "question": "Quale frase contiene la forma corretta del congiuntivo passato?",
        "options": [
            "Penso che Marco sia andato a casa.",
            "Penso che Marco fosse andato a casa.",
            "Penso che Marco è andato a casa.",
            "Penso che Marco andrà a casa."
        ],
        "correctIndex": 0,
        "explanation": "Il congiuntivo passato esprime anteriorità rispetto al presente (sia andato)."
    },
    {
        "question": "Completa con il congiuntivo trapassato: \"Se tu mi _____ (avvisare) in tempo, sarei venuto.\"",
        "options": [
            "avessi avvisato",
            "hai avvisato",
            "avessi avvisare",
            "avrai avvisato"
        ],
        "correctIndex": 0,
        "explanation": "Il periodo ipotetico dell'impossibilità (3° tipo) usa il congiuntivo trapassato nella protasi."
    },
    {
        "question": "Identifica il periodo ipotetico del 2° tipo (Possibilità nel presente):",
        "options": [
            "Se piove, non esco.",
            "Se piovesse, non uscirei.",
            "Se avesse piovuto, non sarei uscito.",
            "Se pioverà, non uscirò."
        ],
        "correctIndex": 1,
        "explanation": "2° tipo: Se + congiuntivo imperfetto (piovesse) ➔ condizionale semplice (uscirei)."
    },
    {
        "question": "Completa il periodo ipotetico del 3° tipo: \"Se noi _____ (partire) prima, non avremmo perso il volo.\"",
        "options": [
            "fossimo partiti",
            "siamo partiti",
            "saremmo partiti",
            "partissimo"
        ],
        "correctIndex": 0,
        "explanation": "3° tipo per il passato: Se + congiuntivo trapassato (fossimo partiti)."
    },
    {
        "question": "Trasforma al passivo con VENIRE: \"Il comune organizza la mostra\" ➔ \"La mostra _____ dal comune.\"",
        "options": [
            "viene organizzata",
            "è stata organizzata",
            "va organizzata",
            "si organizza"
        ],
        "correctIndex": 0,
        "explanation": "Venire si usa per esprimere il passivo nei tempi semplici (viene organizzata)."
    },
    {
        "question": "Quale frase esprime un passivo di NECESSITÀ con il verbo ANDARE?",
        "options": [
            "La lettera va spedita subito.",
            "La lettera è spedita subito.",
            "La lettera viene spedita subito.",
            "Si spedisce la lettera."
        ],
        "correctIndex": 0,
        "explanation": "Andare + participio passato esprime un obbligo o una necessità (va spedita = deve essere spedita)."
    },
    {
        "question": "Identifica la forma corretta del Si Passivante al plurale:",
        "options": [
            "In questo negozio si vende libri.",
            "In questo negozio si vendono libri.",
            "In questo negozio si vendessi libri.",
            "In questo negozio si è venduto libri."
        ],
        "correctIndex": 1,
        "explanation": "Il Si Passivante concorda al plurale con il soggetto paziente (si vendono libri)."
    },
    {
        "question": "Nel discorso indiretto al passato, come cambia il futuro semplice (\"Partirò domani\")?",
        "options": [
            "Diventa imperfetto",
            "Diventa condizionale composto (disse che sarebbe partito)",
            "Rimane futuro semplice",
            "Diventa congiuntivo presente"
        ],
        "correctIndex": 1,
        "explanation": "Il futuro nel passato si esprime con il condizionale composto."
    },
    {
        "question": "Completa con la forma implicita: \"_____ (aver finito) il lavoro, sono andato a casa.\"",
        "options": [
            "Avendo finito",
            "Finendo",
            "Essendo finito",
            "Per finire"
        ],
        "correctIndex": 0,
        "explanation": "Il gerundio composto (avendo finito) esprime un'azione anteriore a quella principale."
    },
    {
        "question": "Quale formula di chiusura si usa in una lettera formale (\"dar del Lei\")?",
        "options": [
            "Un abbraccio e a presto!",
            "Distinti Saluti",
            "Ciao a tutti!",
            "Baci"
        ],
        "correctIndex": 1,
        "explanation": "\"Distinti Saluti\" o \"Cordiali Saluti\" è la chiusura standard nelle lettere formali."
    },
    {
        "question": "Quale connettivo sostitutivo significa \"mas sim / antes\" dopo una negazione?",
        "options": [
            "Tuttavia",
            "Bensì",
            "Quantunque",
            "Purché"
        ],
        "correctIndex": 1,
        "explanation": "\"Bensì\" si usa dopo una frase negativa per introdurre la vera alternativa (Non A, bensì B)."
    },
    {
        "question": "Che cosa significa l'espressione idiomatica \"In bocca al lupo!\"?",
        "options": [
            "Buona fortuna! (si risponde \"Crepi il lupo!\")",
            "Fai attenzione ai cani!",
            "Mangia molto!",
            "Vai a dormire!"
        ],
        "correctIndex": 0,
        "explanation": "\"In bocca al lupo!\" è un augurio scaramantico di successo."
    },
    {
        "question": "Quale struttura si usa per esprimere una condizione concessa in una negoziazione?",
        "options": [
            "A patto che + congiuntivo",
            "Perché + indicativo",
            "Siccome + futuro",
            "Dopo che + gerundio"
        ],
        "correctIndex": 0,
        "explanation": "\"A patto che\" o \"a condizione che\" richiedono il congiuntivo per indicare l'accordo."
    },
    {
        "question": "Quale settore produttivo è simboleggiato dal marchio \"Made in Italy\"?",
        "options": [
            "La produzione industriale e di qualità italiana (moda, cibo, design)",
            "Solo l'importazione di prodotti esteri",
            "Il mercato azionario americano",
            "L'agricoltura biologica straniera"
        ],
        "correctIndex": 0,
        "explanation": "\"Made in Italy\" definisce le eccellenze produttive e il design italiano nel mondo."
    },
    {
        "question": "Qual è il testo fondamentale del diritto e delle istituzioni della Repubblica Italiana?",
        "options": [
            "Il Codice Civile del 1800",
            "La Costituzione del 1948",
            "La Carta di Roma",
            "Il Decreto Regio"
        ],
        "correctIndex": 1,
        "explanation": "La Costituzione entrata in vigore il 1° gennaio 1948 è la carta fondamentale dell'Italia."
    },
    {
        "question": "Nei testi scientifici e accademici, quale registro si predilige per garantire oggettività?",
        "options": [
            "Linguaggio colloquiale e informale",
            "Forma passiva e costrutti impersonali (È stato dimostrato che...)",
            "Dialetto regionale",
            "Linguaggio poetico"
        ],
        "correctIndex": 1,
        "explanation": "La forma passiva e le costruzioni impersonali garantiscono obiettività nei testi scientifici."
    },
    {
        "question": "Quale autore italiano ha scritto il famoso romanzo \"Il nome della rosa\"?",
        "options": [
            "Italo Calvino",
            "Umberto Eco",
            "Elena Ferrante",
            "Luigi Pirandello"
        ],
        "correctIndex": 1,
        "explanation": "Umberto Eco ha pubblicato \"Il nome della rosa\" nel 1980."
    },
    {
        "question": "Che cos'è il \"condizionale giornalistico\" nei media italiani?",
        "options": [
            "Un tempo per raccontare fiabe",
            "L'uso del condizionale per riferire notizie non ancora confermate ufficialmente",
            "Un errore di sintassi",
            "Una forma imperativa"
        ],
        "correctIndex": 1,
        "explanation": "Il condizionale giornalistico evita affermazioni perentorie su notizie da verificare."
    },
    {
        "question": "Quale movimento cinematografico italiano del dopoguerra ha reso famosi registi come De Sica e Fellini?",
        "options": [
            "Neorealismo",
            "Futurismo",
            "Romanticismo",
            "Barocco"
        ],
        "correctIndex": 0,
        "explanation": "Il Neorealismo è il movimento cinematografico fondamentale nato in Italia nel dopoguerra."
    },
    {
        "question": "In quale città italiana si svolge ogni anno il celebre \"Salone del Mobile\" per il design?",
        "options": [
            "Roma",
            "Milano",
            "Napoli",
            "Palermo"
        ],
        "correctIndex": 1,
        "explanation": "Milano è la capitale mondiale del design e ospita il Salone del Mobile."
    },
    {
        "question": "Quale movimento culturale del Quattrocento ha posto l'uomo al centro del pensiero e dell'arte in Italia?",
        "options": [
            "Umanesimo e Rinascimento",
            "Illuminismo francese",
            "Medioevo teocentrico",
            "Feudalesimo"
        ],
        "correctIndex": 0,
        "explanation": "L'Umanesimo e il Rinascimento hanno rivoluzionato la visione dell'uomo nel mondo."
    },
    {
        "question": "Quale sfida demografica affronta attualmente la società italiana?",
        "options": [
            "Aumento vertiginoso delle nascite",
            "Calo demografico e progressivo invecchiamento della popolazione",
            "Emigrazione di massa verso l'Asia",
            "Assenza di anziani"
        ],
        "correctIndex": 1,
        "explanation": "L'Italia affronta la denatalità e il progressivo invecchiamento demografico."
    },
    {
        "question": "Che cos'è la \"dizione\" nella presentazione e oratoria pubblica?",
        "options": [
            "La capacità di cantare in opera",
            "La pronuncia chiara, corretta e articolata delle parole",
            "La scrittura di un testo scritto",
            "Il contatto visivo"
        ],
        "correctIndex": 1,
        "explanation": "La dizione indica la pronuncia corretta e la chiarezza dell'articolazione vocale."
    },
    {
        "question": "Completa con la sintassi complessa corretta: \"Se _____ (sapere) che l'esame era oggi, mi sarei preparato.\"",
        "options": [
            "avessi saputo",
            "so",
            "sapessi",
            "avrei saputo"
        ],
        "correctIndex": 0,
        "explanation": "Se + congiuntivo trapassato (avessi saputo) per un'impossibilità nel passato."
    },
    {
        "question": "Scegli la forma corretta per il futuro nel passato: \"Marco mi disse che _____ (arrivare) il giorno dopo.\"",
        "options": [
            "sarebbe arrivato",
            "arriverà",
            "è arrivato",
            "sia arrivato"
        ],
        "correctIndex": 0,
        "explanation": "Disse (passato) + che + sarebbe arrivato (condizionale composto per il futuro nel passato)."
    },
    {
        "question": "Completa con la forma passiva con ANDARE: \"Queste regole _____ (dovere rispettare) da tutti.\"",
        "options": [
            "vanno rispettate",
            "vengono rispettate",
            "sono state rispettate",
            "si rispettano"
        ],
        "correctIndex": 0,
        "explanation": "Andare + participio (vanno rispettate) esprime l'obbligo o dovere di rispettare le regole."
    },
    {
        "question": "Sostituisci il connettivo concessivo che richiede il congiuntivo: \"_____ (Sebbene) sia stanco, continuerò a studiare.\"",
        "options": [
            "Quantunque",
            "Tuttavia",
            "Quindi",
            "Bensì"
        ],
        "correctIndex": 0,
        "explanation": "\"Quantunque\" è un connettivo concessivo sinonimo di sebbene e regge il congiuntivo."
    },
    {
        "question": "Come si risponde tradizionalmente all'augurio \"In bocca al lupo!\"?",
        "options": [
            "Grazie mille!",
            "Crepi il lupo!",
            "Altrettanto a te!",
            "Non importa!"
        ],
        "correctIndex": 1,
        "explanation": "La risposta scaramantica rituale è sempre \"Crepi!\" o \"Crepi il lupo!\"."
    },
    {
        "question": "Qual è il numero totale di moduli completati con il superamento del livello B2 di italiano?",
        "options": [
            "30 moduli",
            "60 moduli",
            "84 moduli",
            "108 moduli"
        ],
        "correctIndex": 3,
        "explanation": "Il corso completo comprende 30 (A1) + 30 (A2) + 24 (B1) + 24 (B2) = 108 moduli di italiano."
    },
    {
        "question": "Che livello del Quadro Comune Europeo (CEFR) attesta il pieno dominio dell'autonomia comunicativa?",
        "options": [
            "Livello A1",
            "Livello A2",
            "Livello B1",
            "Livello B2"
        ],
        "correctIndex": 3,
        "explanation": "Il livello B2 attesta la padronanza e la piena autonomia nella comunicazione complessa."
    }
];

MODULOS_ITALIANO_B2.forEach((modulo, index) => {
    const isLast = (index === 23);
    CURSO_ITALIANO_B2_DADOS.push(criarModuloItalianoB2(
        index + 1,
        modulo.titulo,
        modulo.contexto,
        modulo.vocabulario,
        modulo.gramatica,
        modulo.frases,
        modulo.dialogo,
        isLast ? SFIDA_FINALE_QUIZ_B2 : null
    ));
});

if (typeof window !== 'undefined') window.CURSO_ITALIANO_B2_DADOS = CURSO_ITALIANO_B2_DADOS;
if (typeof module !== 'undefined' && module.exports) module.exports = { CURSO_ITALIANO_B2_DADOS };
