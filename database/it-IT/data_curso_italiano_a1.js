const CURSO_ITALIANO_A1_DADOS = [];

function criarModuloItalianoA1(numero, titulo, contexto, vocabulario, gramatica, frases, dialogo) {
    const id = `it_a1_mod_${String(numero).padStart(2, '0')}`;
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
    const quiz = vocabulario.slice(0, 5).map((item, index) => {
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

    return {
        id,
        level: 'A1',
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

const MODULOS_ITALIANO_A1 = [
    {
        titulo: 'Saluti e cortesia',
        contexto: 'Cumprimente, agradeça e despeça-se em situações formais e informais.',
        vocabulario: [
            ['ciao', 'oi / tchau', 'Informal, usado ao chegar ou sair.'],
            ['buongiorno', 'bom dia', 'Saudação cortês até o começo da tarde.'],
            ['buonasera', 'boa tarde / boa noite', 'Usado do fim da tarde em diante.'],
            ['grazie', 'obrigado(a)', 'Forma neutra de agradecer.'],
            ['per favore', 'por favor', 'Acompanha pedidos educados.'],
            ['arrivederci', 'até logo', 'Despedida cortês e neutra.']
        ],
        gramatica: [
            ['Registro formal e informal', 'Use ciao com pessoas próximas; buongiorno, buonasera e arrivederci são seguros em contextos formais.', 'ciao ↔ buongiorno / buonasera', 'Ciao, Luca! / Buongiorno, signora!'],
            ['Responder a um agradecimento', 'A resposta mais comum a grazie é prego.', 'grazie → prego', 'Grazie mille! — Prego!']
        ],
        frases: [['Buongiorno, come sta?', 'Bom dia, como vai o senhor / a senhora?'], ['Grazie mille, arrivederci!', 'Muito obrigado(a), até logo!']],
        dialogo: [['Anna', 'Buongiorno! Un caffè, per favore.', 'Bom dia! Um café, por favor.'], ['Marco', 'Certo. Grazie e arrivederci!', 'Claro. Obrigado e até logo!']]
    },
    {
        titulo: 'Alfabeto, suoni e doppie',
        contexto: 'Soletre palavras e reconheça sons essenciais e consoantes duplas.',
        vocabulario: [
            ['acca', 'nome da letra H', 'Em italiano, h não tem som próprio.'],
            ['ci', 'nome da letra C', 'C soa /tch/ diante de e ou i.'],
            ['gi', 'nome da letra G', 'G soa /dj/ diante de e ou i.'],
            ['che', 'que / o que', 'CH mantém o som forte de c diante de e ou i.'],
            ['ghiaccio', 'gelo', 'GH mantém o som forte de g diante de i.'],
            ['notte', 'noite', 'O tt deve ser articulado como consoante dupla.']
        ],
        gramatica: [
            ['C e G antes de E/I', 'C e G têm som suave diante de e/i; h restaura o som forte.', 'ce/ci, ge/gi ↔ che/chi, ghe/ghi', 'cena, cinema, gelato, chiave, spaghetti'],
            ['Consoantes duplas', 'A duração da consoante pode distinguir palavras; faça uma pequena pausa antes da dupla.', 'pala ≠ palla', 'sete (sede) / sette (sete)']
        ],
        frases: [['Come si scrive il tuo nome?', 'Como se escreve o seu nome?'], ['La parola notte ha due t.', 'A palavra notte tem dois t.']],
        dialogo: [['Paolo', 'Come si scrive Chiara?', 'Como se escreve Chiara?'], ['Chiara', 'Ci, acca, i, a, erre, a.', 'C, h, i, a, r, a.']]
    },
    {
        titulo: 'Presentazioni e verbo essere',
        contexto: 'Apresente-se, diga quem você é e pergunte o nome de outra pessoa.',
        vocabulario: [
            ['mi chiamo', 'eu me chamo', 'Expressão natural para dizer o nome.'],
            ['sono', 'eu sou / estou', 'Primeira pessoa singular de essere.'],
            ['sei', 'você é / está', 'Segunda pessoa singular de essere.'],
            ['è', 'é / está', 'Terceira pessoa singular, sempre com acento.'],
            ['piacere', 'prazer', 'Usado ao conhecer alguém.'],
            ['nome', 'nome', 'Substantivo masculino: il nome.']
        ],
        gramatica: [
            ['Presente de essere', 'As formas básicas são sono, sei, è, siamo, siete e sono.', 'io sono; tu sei; lui/lei è', 'Io sono brasiliana. Lui è italiano.'],
            ['Apresentar o nome', 'Mi chiamo + nome é mais idiomático que traduzir literalmente “meu nome é”.', 'mi chiamo + nome', 'Mi chiamo Beatriz.']
        ],
        frases: [['Mi chiamo Rafael e sono brasiliano.', 'Eu me chamo Rafael e sou brasileiro.'], ['Lei è Sofia, la mia amica.', 'Ela é Sofia, minha amiga.']],
        dialogo: [['Rafael', 'Ciao, mi chiamo Rafael. E tu?', 'Oi, eu me chamo Rafael. E você?'], ['Giulia', 'Io sono Giulia. Piacere!', 'Eu sou Giulia. Prazer!']]
    },
    {
        titulo: 'Pronomi personali e formalità con Lei',
        contexto: 'Escolha pronomes adequados e trate alguém formalmente com Lei.',
        vocabulario: [
            ['io', 'eu', 'O pronome pode ser omitido quando a forma verbal é clara.'],
            ['tu', 'você (informal)', 'Usado com amigos, família e crianças.'],
            ['lui', 'ele', 'Pronome masculino singular.'],
            ['lei', 'ela', 'Pronome feminino singular.'],
            ['Lei', 'o senhor / a senhora', 'Com inicial maiúscula, marca tratamento formal.'],
            ['voi', 'vocês', 'Segunda pessoa do plural.']
        ],
        gramatica: [
            ['Pronomes frequentemente omitidos', 'A terminação verbal já indica a pessoa, então io e tu aparecem sobretudo para contraste ou ênfase.', '(io) sono; (tu) sei', 'Sono di Roma, e tu sei di Milano.'],
            ['Lei formal', 'Lei usa verbos na terceira pessoa do singular, mesmo ao falar diretamente com alguém.', 'Lei + verbo na 3ª pessoa', 'Lei come si chiama?']
        ],
        frases: [['Lei è la dottoressa Bianchi?', 'A senhora é a doutora Bianchi?'], ['Noi siamo studenti e voi siete insegnanti.', 'Nós somos estudantes e vocês são professores.']],
        dialogo: [['Cliente', 'Scusi, Lei parla inglese?', 'Com licença, o senhor / a senhora fala inglês?'], ['Impiegata', 'Sì, parlo inglese e italiano.', 'Sim, falo inglês e italiano.']]
    },
    {
        titulo: 'Numeri, età e verbo avere',
        contexto: 'Diga números, informe a idade e use as formas básicas de avere.',
        vocabulario: [
            ['uno', 'um', 'Número cardinal masculino e forma de contagem.'],
            ['dieci', 'dez', 'Número 10.'],
            ['venti', 'vinte', 'Número 20.'],
            ['anni', 'anos', 'Plural de anno; usado para idade.'],
            ['ho', 'eu tenho', 'Primeira pessoa de avere; h não é pronunciado.'],
            ['quanti', 'quantos', 'Concorda no plural masculino.']
        ],
        gramatica: [
            ['Idade com avere', 'Em italiano, a idade é expressa com ter, não com ser ou estar.', 'avere + número + anni', 'Ho ventidue anni.'],
            ['Presente de avere', 'As formas básicas são ho, hai, ha, abbiamo, avete, hanno.', 'io ho; tu hai; lui/lei ha', 'Hai trent’anni?']
        ],
        frases: [['Quanti anni hai?', 'Quantos anos você tem?'], ['Ho venticinque anni e mia sorella ne ha venti.', 'Tenho vinte e cinco anos e minha irmã tem vinte.']],
        dialogo: [['Luca', 'Quanti anni hai, Marta?', 'Quantos anos você tem, Marta?'], ['Marta', 'Ho diciannove anni.', 'Tenho dezenove anos.']]
    },
    {
        titulo: 'Paesi e nazionalità',
        contexto: 'Diga de onde você vem e fale de países, cidades e nacionalidades.',
        vocabulario: [
            ['Italia', 'Itália', 'Nome de país feminino.'],
            ['Brasile', 'Brasil', 'Nome de país masculino.'],
            ['italiano', 'italiano', 'Nacionalidade e idioma; varia em gênero e número.'],
            ['brasiliana', 'brasileira', 'Forma feminina singular.'],
            ['paese', 'país', 'Também pode significar vila ou cidade pequena.'],
            ['vengo da', 'venho de', 'Usado com cidade e origem.']
        ],
        gramatica: [
            ['Origem com essere e venire', 'Use essere di para identidade/origem e venire da para procedência.', 'essere di / venire da', 'Sono di Recife. Vengo dal Brasile.'],
            ['Nacionalidades', 'Nacionalidades em -o variam -o/-a/-i/-e; formas em -e usam plural -i.', 'italiano, italiana, italiani, italiane', 'Lei è francese; loro sono francesi.']
        ],
        frases: [['Sono brasiliano e vengo da Salvador.', 'Sou brasileiro e venho de Salvador.'], ['Maria è italiana, di Napoli.', 'Maria é italiana, de Nápoles.']],
        dialogo: [['Elena', 'Di dove sei?', 'De onde você é?'], ['Tiago', 'Sono del Brasile, ma abito a Torino.', 'Sou do Brasil, mas moro em Turim.']]
    },
    {
        titulo: 'Genere e plurale dei sostantivi',
        contexto: 'Reconheça o gênero e forme o plural dos substantivos mais frequentes.',
        vocabulario: [
            ['ragazzo', 'rapaz', 'Masculino em -o; plural ragazzi.'],
            ['ragazza', 'moça', 'Feminino em -a; plural ragazze.'],
            ['studente', 'estudante', 'Forma em -e; plural studenti.'],
            ['casa', 'casa', 'Feminino; plural case.'],
            ['libro', 'livro', 'Masculino; plural libri.'],
            ['lezione', 'aula / lição', 'Feminino em -e; plural lezioni.']
        ],
        gramatica: [
            ['Plurais regulares', 'Em geral, -o vira -i, -a vira -e e -e vira -i.', '-o → -i; -a → -e; -e → -i', 'libro/libri; casa/case; lezione/lezioni'],
            ['Gênero não é apenas terminação', 'A terminação ajuda, mas há exceções; aprenda o substantivo com seu artigo.', 'artigo + substantivo', 'il problema; la mano']
        ],
        frases: [['I ragazzi leggono due libri.', 'Os rapazes leem dois livros.'], ['Le studentesse hanno tre lezioni.', 'As estudantes têm três aulas.']],
        dialogo: [['Insegnante', 'Quanti studenti ci sono?', 'Quantos estudantes há?'], ['Sara', 'Ci sono due studenti e tre studentesse.', 'Há dois estudantes e três estudantes.']]
    },
    {
        titulo: 'Articoli determinativi e indeterminativi',
        contexto: 'Escolha artigos definidos e indefinidos conforme gênero e som inicial.',
        vocabulario: [
            ['il libro', 'o livro', 'Il precede a maioria das consoantes masculinas.'],
            ['lo studente', 'o estudante', 'Lo precede s + consoante, z, gn, ps e x.'],
            ['la casa', 'a casa', 'La acompanha feminino singular antes de consoante.'],
            ['l’amica', 'a amiga', 'L’ ocorre diante de vogal.'],
            ['un amico', 'um amigo', 'Un não recebe apóstrofo no masculino.'],
            ['un’amica', 'uma amiga', 'Una vira un’ antes de vogal.']
        ],
        gramatica: [
            ['Artigos definidos', 'Use il/i, lo/gli, l’ e la/le conforme gênero, número e som inicial.', 'il libro; lo zaino; l’albero; la porta', 'Gli studenti aprono i libri.'],
            ['Artigos indefinidos', 'Use un, uno, una ou un’; só o feminino diante de vogal leva apóstrofo.', 'un libro; uno zaino; una casa; un’amica', 'Ho uno zaino e un’agenda.']
        ],
        frases: [['Lo studente apre il libro.', 'O estudante abre o livro.'], ['Un’amica compra una rivista.', 'Uma amiga compra uma revista.']],
        dialogo: [['Cliente', 'Vorrei un panino e un’aranciata.', 'Eu gostaria de um sanduíche e uma soda de laranja.'], ['Barista', 'Il panino è pronto.', 'O sanduíche está pronto.']]
    },
    {
        titulo: 'Famiglia e possessivi',
        contexto: 'Apresente familiares e use adjetivos possessivos básicos.',
        vocabulario: [
            ['madre', 'mãe', 'Com parente singular, costuma aparecer sem artigo após possessivo.'],
            ['padre', 'pai', 'Substantivo masculino singular.'],
            ['fratello', 'irmão', 'Plural fratelli.'],
            ['sorella', 'irmã', 'Plural sorelle.'],
            ['figlio', 'filho', 'A combinação gli aparece no plural figli.'],
            ['genitori', 'pais', 'Plural coletivo para mãe e pai.']
        ],
        gramatica: [
            ['Possessivos concordam com a coisa', 'Mio, tuo, suo etc. concordam com o substantivo possuído, não com o possuidor.', 'mio fratello / mia sorella', 'Anna parla con suo padre.'],
            ['Parentes no singular', 'Geralmente não se usa artigo com possessivo + parente singular não modificado.', 'mia madre; tuo fratello', 'Mia sorella abita a Roma.']
        ],
        frases: [['Mio padre e mia madre vivono in Brasile.', 'Meu pai e minha mãe vivem no Brasil.'], ['I nostri figli sono piccoli.', 'Nossos filhos são pequenos.']],
        dialogo: [['Giulia', 'Hai fratelli o sorelle?', 'Você tem irmãos ou irmãs?'], ['Paolo', 'Sì, ho un fratello e due sorelle.', 'Sim, tenho um irmão e duas irmãs.']]
    },
    {
        titulo: 'Professioni e luoghi di lavoro',
        contexto: 'Fale sobre profissões e os locais onde as pessoas trabalham.',
        vocabulario: [
            ['insegnante', 'professor(a)', 'Forma comum aos dois gêneros.'],
            ['medico', 'médico', 'Feminino medica ou dottoressa conforme contexto.'],
            ['cuoco', 'cozinheiro', 'Feminino cuoca.'],
            ['ufficio', 'escritório', 'Masculino; plural uffici.'],
            ['scuola', 'escola', 'Feminino singular.'],
            ['ospedale', 'hospital', 'Masculino em -e.']
        ],
        gramatica: [
            ['Profissão sem artigo', 'Depois de essere, a profissão costuma aparecer sem artigo quando apenas identifica a ocupação.', 'essere + profissão', 'Sono insegnante. Lei è medica.'],
            ['Trabalhar em ou como', 'Use lavorare in para setor/local, a para cidade e come para função.', 'lavorare in / a / come', 'Lavoro in ufficio come traduttore.']
        ],
        frases: [['Marta è cuoca e lavora in un ristorante.', 'Marta é cozinheira e trabalha em um restaurante.'], ['Lavoro come medico in ospedale.', 'Trabalho como médico no hospital.']],
        dialogo: [['Carlo', 'Che lavoro fai?', 'Qual é o seu trabalho?'], ['Elisa', 'Sono insegnante e lavoro in una scuola.', 'Sou professora e trabalho em uma escola.']]
    },
    {
        titulo: 'Giorni, mesi e date',
        contexto: 'Marque datas e diga dias da semana, meses e aniversários.',
        vocabulario: [
            ['lunedì', 'segunda-feira', 'Os dias úteis terminados em -dì são invariáveis.'],
            ['sabato', 'sábado', 'Masculino singular.'],
            ['gennaio', 'janeiro', 'Meses normalmente ficam em minúscula.'],
            ['agosto', 'agosto', 'Mês associado ao verão italiano.'],
            ['oggi', 'hoje', 'Advérbio de tempo.'],
            ['compleanno', 'aniversário', 'Fare il compleanno = fazer aniversário.']
        ],
        gramatica: [
            ['Datas com artigo', 'Para dizer a data, use è il + número; o primeiro dia pode ser il primo.', 'oggi è il + número + mês', 'Oggi è il dodici maggio.'],
            ['Dias recorrentes', 'Sem artigo, lunedì indica a próxima/esta segunda; com il, pode indicar hábito.', 'lunedì / il lunedì', 'Lunedì parto. Il lunedì studio.']
        ],
        frases: [['Oggi è lunedì dieci giugno.', 'Hoje é segunda-feira, dez de junho.'], ['Il mio compleanno è il primo agosto.', 'Meu aniversário é primeiro de agosto.']],
        dialogo: [['Luca', 'Quando è il tuo compleanno?', 'Quando é seu aniversário?'], ['Sara', 'È il venti novembre.', 'É em vinte de novembro.']]
    },
    {
        titulo: 'Ore e appuntamenti',
        contexto: 'Pergunte as horas e combine compromissos com horários precisos.',
        vocabulario: [
            ['ora', 'hora / agora', 'O sentido depende do contexto.'],
            ['mezzogiorno', 'meio-dia', 'Literalmente “meio do dia”.'],
            ['mezzanotte', 'meia-noite', 'Substantivo feminino.'],
            ['e mezzo', 'e meia', 'Usado após a hora.'],
            ['meno un quarto', 'quinze para', 'Subtrai quinze minutos da próxima hora.'],
            ['appuntamento', 'compromisso / encontro marcado', 'Usado para consultas e reuniões.']
        ],
        gramatica: [
            ['Che ora è?', 'Use è l’una para uma hora e sono le para as demais.', 'è l’una / sono le due', 'Sono le tre e mezzo.'],
            ['Horário de eventos', 'Use a che ora para perguntar e alle + hora para responder; all’una é singular.', 'a che ora? → alle / all’una', 'Ci vediamo alle otto.']
        ],
        frases: [['Sono le nove e un quarto.', 'São nove e quinze.'], ['L’appuntamento è all’una e mezzo.', 'O compromisso é à uma e meia.']],
        dialogo: [['Anna', 'A che ora ci vediamo?', 'A que horas nos vemos?'], ['Marco', 'Alle sette davanti al cinema.', 'Às sete, em frente ao cinema.']]
    },
    {
        titulo: 'Verbi regolari in -are',
        contexto: 'Conjugue verbos regulares em -are para falar de ações presentes.',
        vocabulario: [
            ['parlare', 'falar', 'Verbo regular em -are.'],
            ['studiare', 'estudar', 'Mantém apenas um i em studiamo.'],
            ['lavorare', 'trabalhar', 'Regular no presente.'],
            ['abitare', 'morar', 'Usado com a + cidade e in + país.'],
            ['ascoltare', 'escutar', 'Normalmente transitivo direto.'],
            ['guardare', 'olhar / assistir', 'Guardare la TV = assistir televisão.']
        ],
        gramatica: [
            ['Presente de -are', 'Retire -are e acrescente -o, -i, -a, -iamo, -ate, -ano.', 'parl-o, parl-i, parl-a...', 'Parliamo italiano ogni giorno.'],
            ['Negação', 'Coloque non imediatamente antes do verbo conjugado.', 'non + verbo', 'Non lavoro il sabato.']
        ],
        frases: [['Studio italiano e ascolto la radio.', 'Estudo italiano e escuto rádio.'], ['Abitiamo a Firenze ma lavoriamo a Prato.', 'Moramos em Florença, mas trabalhamos em Prato.']],
        dialogo: [['Gianni', 'Parli italiano?', 'Você fala italiano?'], ['Clara', 'Sì, studio e parlo un po’.', 'Sim, estudo e falo um pouco.']]
    },
    {
        titulo: 'Verbi regolari in -ere e -ire',
        contexto: 'Use verbos regulares em -ere e -ire no presente.',
        vocabulario: [
            ['leggere', 'ler', 'Conjugação em -ere: leggo, leggi...'],
            ['scrivere', 'escrever', 'Particípio futuro; aqui, presente scrivo.'],
            ['prendere', 'pegar / tomar', 'Prendere il treno = pegar o trem.'],
            ['dormire', 'dormir', 'Verbo regular em -ire.'],
            ['aprire', 'abrir', 'Presente apro, apri, apre...'],
            ['partire', 'partir', 'Usado para viagens e horários.']
        ],
        gramatica: [
            ['Presente de -ere', 'As terminações são -o, -i, -e, -iamo, -ete, -ono.', 'legg-o, legg-i, legg-e...', 'Leggete molti libri.'],
            ['Presente de -ire', 'Muitos verbos seguem -o, -i, -e, -iamo, -ite, -ono; alguns recebem -isc-.', 'dorm-o, dorm-i, dorm-e...', 'Dormono otto ore.']
        ],
        frases: [['Leggo il giornale e scrivo un messaggio.', 'Leio o jornal e escrevo uma mensagem.'], ['Il treno parte alle sei.', 'O trem parte às seis.']],
        dialogo: [['Nina', 'Prendi l’autobus o il treno?', 'Você pega o ônibus ou o trem?'], ['Fabio', 'Prendo il treno e leggo durante il viaggio.', 'Pego o trem e leio durante a viagem.']]
    },
    {
        titulo: 'Verbi irregolari frequenti',
        contexto: 'Empregue verbos irregulares indispensáveis em conversas cotidianas.',
        vocabulario: [
            ['andare', 'ir', 'Presente vado, vai, va, andiamo, andate, vanno.'],
            ['fare', 'fazer', 'Presente faccio, fai, fa...'],
            ['venire', 'vir', 'Presente vengo, vieni, viene...'],
            ['uscire', 'sair', 'Presente esco, esci, esce...'],
            ['dire', 'dizer', 'Presente dico, dici, dice...'],
            ['stare', 'estar / ficar', 'Usado em Come stai? e estados temporários.']
        ],
        gramatica: [
            ['Formas irregulares', 'Aprenda as formas de alta frequência como unidades; a raiz pode mudar no singular e na terceira pessoa plural.', 'vado/vai/va; faccio/fai/fa', 'Vado al lavoro e faccio una pausa.'],
            ['Preposições articuladas', 'Com andare, a + il vira al; a + la vira alla.', 'a + artigo → al, alla, allo...', 'Andiamo al cinema.']
        ],
        frases: [['Vengo da casa e vado in ufficio.', 'Venho de casa e vou ao escritório.'], ['Che cosa fai stasera?', 'O que você faz hoje à noite?']],
        dialogo: [['Marta', 'Dove vai dopo il lavoro?', 'Aonde você vai depois do trabalho?'], ['Enzo', 'Vado a casa, poi esco con gli amici.', 'Vou para casa, depois saio com os amigos.']]
    },
    {
        titulo: 'Routine quotidiana e riflessivi',
        contexto: 'Descreva sua rotina com horários e verbos reflexivos.',
        vocabulario: [
            ['svegliarsi', 'acordar', 'Reflexivo: mi sveglio.'],
            ['alzarsi', 'levantar-se', 'Reflexivo: mi alzo.'],
            ['lavarsi', 'lavar-se', 'Reflexivo: mi lavo.'],
            ['vestirsi', 'vestir-se', 'Reflexivo em -ire: mi vesto.'],
            ['fare colazione', 'tomar café da manhã', 'Expressão com fare.'],
            ['andare a letto', 'ir para a cama', 'Locução cotidiana.']
        ],
        gramatica: [
            ['Pronomes reflexivos', 'Mi, ti, si, ci, vi, si vêm antes do verbo conjugado.', 'mi alzo; ti alzi; si alza', 'Ci svegliamo alle sette.'],
            ['Sequência da rotina', 'Use prima, poi e dopo para ordenar ações.', 'prima... poi... dopo...', 'Prima mi lavo, poi mi vesto.']
        ],
        frases: [['Mi sveglio alle sette e faccio colazione.', 'Acordo às sete e tomo café da manhã.'], ['La sera ci laviamo e andiamo a letto.', 'À noite nos lavamos e vamos para a cama.']],
        dialogo: [['Leo', 'A che ora ti alzi?', 'A que horas você se levanta?'], ['Mia', 'Mi alzo alle sei e mezzo.', 'Levanto-me às seis e meia.']]
    },
    {
        titulo: 'Casa, stanze, c’è e ci sono',
        contexto: 'Descreva uma casa, seus cômodos e o que existe nela.',
        vocabulario: [
            ['cucina', 'cozinha', 'Cômodo onde se prepara comida.'],
            ['camera', 'quarto', 'Camera da letto = quarto de dormir.'],
            ['bagno', 'banheiro', 'Masculino singular.'],
            ['soggiorno', 'sala de estar', 'Também pode significar estadia.'],
            ['tavolo', 'mesa', 'Masculino; plural tavoli.'],
            ['finestra', 'janela', 'Feminino; plural finestre.']
        ],
        gramatica: [
            ['C’è e ci sono', 'Use c’è com singular e ci sono com plural.', 'c’è + singular; ci sono + plural', 'C’è un balcone. Ci sono due camere.'],
            ['Localização com preposições', 'Use in, su, sotto, davanti a e accanto a para localizar objetos.', 'sul tavolo / sotto il letto', 'La sedia è accanto al tavolo.']
        ],
        frases: [['In cucina c’è un tavolo grande.', 'Na cozinha há uma mesa grande.'], ['Ci sono due finestre nel soggiorno.', 'Há duas janelas na sala.']],
        dialogo: [['Agente', 'Quante camere ci sono?', 'Quantos quartos há?'], ['Cliente', 'Ci sono due camere e un soggiorno.', 'Há dois quartos e uma sala.']]
    },
    {
        titulo: 'Città, luoghi e indicazioni',
        contexto: 'Peça e dê direções simples pela cidade.',
        vocabulario: [
            ['piazza', 'praça', 'Espaço público central.'],
            ['stazione', 'estação', 'Feminino; stazione ferroviaria.'],
            ['farmacia', 'farmácia', 'A sílaba tônica é -ci-.'],
            ['a destra', 'à direita', 'Expressão de direção.'],
            ['a sinistra', 'à esquerda', 'Expressão de direção.'],
            ['sempre dritto', 'sempre em frente', 'Instrução comum em trajetos.']
        ],
        gramatica: [
            ['Dov’è...?', 'Dov’è é a contração de dove è e pergunta a localização de algo singular.', 'Dov’è + lugar?', 'Dov’è la stazione?'],
            ['Imperativo cortês básico', 'Para instruções simples, use formas como vada, giri e continui ao tratar alguém por Lei.', 'vada / giri / continui', 'Vada sempre dritto e giri a destra.']
        ],
        frases: [['La farmacia è accanto alla banca.', 'A farmácia fica ao lado do banco.'], ['Vada dritto e giri a sinistra.', 'Siga em frente e vire à esquerda.']],
        dialogo: [['Turista', 'Scusi, dov’è la stazione?', 'Com licença, onde fica a estação?'], ['Passante', 'Sempre dritto, poi a destra.', 'Sempre em frente, depois à direita.']]
    },
    {
        titulo: 'Cibi, bevande e ordinazioni',
        contexto: 'Nomeie alimentos e bebidas e faça um pedido simples.',
        vocabulario: [
            ['pane', 'pão', 'Masculino singular.'],
            ['pasta', 'massa / macarrão', 'Feminino singular.'],
            ['acqua', 'água', 'Feminino; l’acqua.'],
            ['caffè', 'café', 'Invariável e com acento final.'],
            ['vino', 'vinho', 'Masculino singular.'],
            ['vorrei', 'eu gostaria', 'Forma cortês do condicional de volere.']
        ],
        gramatica: [
            ['Pedidos com vorrei', 'Vorrei é mais cortês que voglio ao pedir em bares e restaurantes.', 'vorrei + substantivo', 'Vorrei un caffè, per favore.'],
            ['Artigo partitivo introdutório', 'Del, della e dell’ podem indicar uma quantidade não especificada.', 'del pane; della pasta; dell’acqua', 'Prendo dell’acqua.']
        ],
        frases: [['Vorrei una pasta e dell’acqua.', 'Eu gostaria de uma massa e água.'], ['Prendiamo due caffè, per favore.', 'Vamos querer dois cafés, por favor.']],
        dialogo: [['Cameriere', 'Che cosa prende?', 'O que o senhor / a senhora vai querer?'], ['Cliente', 'Vorrei del pane e un bicchiere di vino.', 'Gostaria de pão e uma taça de vinho.']]
    },
    {
        titulo: 'Ristorante, prezzi e conto',
        contexto: 'Interaja no restaurante, pergunte preços e peça a conta.',
        vocabulario: [
            ['menù', 'cardápio', 'Também se escreve menu; plural invariável.'],
            ['antipasto', 'entrada', 'Prato servido antes do primeiro prato.'],
            ['primo', 'primeiro prato', 'Geralmente massa, arroz ou sopa.'],
            ['secondo', 'prato principal', 'Geralmente carne ou peixe.'],
            ['conto', 'conta', 'Il conto, per favore.'],
            ['quanto costa', 'quanto custa', 'Pergunta de preço no singular.']
        ],
        gramatica: [
            ['Quanto costa / quanto costano', 'Use costa com singular e costano com plural.', 'quanto costa? / quanto costano?', 'Quanto costano questi piatti?'],
            ['Pedir a conta', 'Il conto, per favore é uma fórmula completa e natural.', 'il conto, per favore', 'Scusi, il conto, per favore.']
        ],
        frases: [['Quanto costa il menù del giorno?', 'Quanto custa o menu do dia?'], ['Per me un primo e un secondo.', 'Para mim, um primeiro prato e um prato principal.']],
        dialogo: [['Cliente', 'Scusi, possiamo avere il conto?', 'Com licença, podemos receber a conta?'], ['Cameriere', 'Certo, sono trentacinque euro.', 'Claro, são trinta e cinco euros.']]
    },
    {
        titulo: 'Negozi, vestiti, colori e taglie',
        contexto: 'Compre roupas, escolha cor e tamanho e pergunte se pode experimentar.',
        vocabulario: [
            ['maglietta', 'camiseta', 'Feminino singular.'],
            ['pantaloni', 'calças', 'Usado normalmente no plural.'],
            ['scarpe', 'sapatos', 'Plural feminino.'],
            ['rosso', 'vermelho', 'Adjetivo que concorda com o substantivo.'],
            ['taglia', 'tamanho de roupa', 'La taglia media = tamanho médio.'],
            ['camerino', 'provador', 'Local para experimentar roupas.']
        ],
        gramatica: [
            ['Cores concordam', 'Cores em -o mudam conforme gênero e número; cores em -e fazem plural em -i.', 'rosso/rossa/rossi/rosse', 'Una maglietta rossa e pantaloni neri.'],
            ['Questo e quello', 'Demonstrativos concordam com o substantivo e seguem padrões próximos aos artigos.', 'questa gonna / quei pantaloni', 'Preferisco questa camicia.']
        ],
        frases: [['Cerco una maglietta verde, taglia media.', 'Procuro uma camiseta verde, tamanho médio.'], ['Posso provare queste scarpe?', 'Posso experimentar estes sapatos?']],
        dialogo: [['Commessa', 'Che taglia porta?', 'Que tamanho o senhor / a senhora usa?'], ['Cliente', 'La taglia quaranta. Dov’è il camerino?', 'Tamanho quarenta. Onde fica o provador?']]
    },
    {
        titulo: 'Quantità e partitivi di base',
        contexto: 'Fale de quantidades e compre alimentos usando medidas e partitivos.',
        vocabulario: [
            ['chilo', 'quilo', 'Un chilo di mele.'],
            ['etto', 'cem gramas', 'Medida muito usada em mercados italianos.'],
            ['litro', 'litro', 'Un litro d’acqua.'],
            ['bottiglia', 'garrafa', 'Una bottiglia di vino.'],
            ['pezzo', 'pedaço / unidade', 'Un pezzo di formaggio.'],
            ['abbastanza', 'bastante / suficiente', 'Advérbio de quantidade.']
        ],
        gramatica: [
            ['Recipiente ou medida + di', 'Depois de uma medida ou recipiente, use di sem artigo.', 'quantidade + di + nome', 'Due etti di prosciutto.'],
            ['Partitivo', 'Del, dello, della, dei, degli e delle indicam quantidade indefinida.', 'artigo partitivo + nome', 'Compro delle arance.']
        ],
        frases: [['Vorrei un chilo di pomodori.', 'Eu gostaria de um quilo de tomates.'], ['Compriamo una bottiglia d’acqua e del pane.', 'Compramos uma garrafa de água e pão.']],
        dialogo: [['Cliente', 'Mi dà due etti di formaggio?', 'Pode me dar duzentos gramas de queijo?'], ['Venditore', 'Certo. Vuole anche del pane?', 'Claro. Quer também pão?']]
    },
    {
        titulo: 'Tempo atmosferico e stagioni',
        contexto: 'Descreva o clima e fale das quatro estações.',
        vocabulario: [
            ['primavera', 'primavera', 'Estação de março a junho no hemisfério norte.'],
            ['estate', 'verão', 'Substantivo feminino: l’estate.'],
            ['autunno', 'outono', 'Substantivo masculino.'],
            ['inverno', 'inverno', 'Substantivo masculino.'],
            ['piove', 'chove / está chovendo', 'Verbo impessoal piovere.'],
            ['fa caldo', 'faz calor', 'Expressão meteorológica com fare.']
        ],
        gramatica: [
            ['Clima com fare e essere', 'Use fa caldo/freddo para temperatura geral e è nuvoloso/sereno para condição.', 'fa + temperatura; è + adjetivo', 'Oggi fa freddo ed è nuvoloso.'],
            ['Fenômenos impessoais', 'Piove e nevica aparecem na terceira pessoa do singular sem sujeito expresso.', 'piove / nevica', 'In montagna nevica.']
        ],
        frases: [['In estate fa caldo e c’è il sole.', 'No verão faz calor e há sol.'], ['Oggi piove, ma domani è sereno.', 'Hoje chove, mas amanhã o céu estará limpo.']],
        dialogo: [['Lia', 'Che tempo fa oggi?', 'Como está o tempo hoje?'], ['Nico', 'Fa freddo e piove molto.', 'Faz frio e chove muito.']]
    },
    {
        titulo: 'Gusti, hobby e verbo piacere',
        contexto: 'Conte do que gosta e converse sobre hobbies.',
        vocabulario: [
            ['musica', 'música', 'Mi piace la musica.'],
            ['cinema', 'cinema', 'Masculino apesar de terminar em -a.'],
            ['viaggiare', 'viajar', 'Infinitivo regular em -are.'],
            ['cucinare', 'cozinhar', 'Verbo regular em -are.'],
            ['sport', 'esporte', 'Palavra invariável.'],
            ['mi piace', 'eu gosto de', 'Literalmente “agrada a mim”.']
        ],
        gramatica: [
            ['Piace ou piacciono', 'Use piace com singular ou infinitivo e piacciono com substantivos plurais.', 'mi piace + singular/infinitivo; mi piacciono + plural', 'Mi piace leggere. Mi piacciono i libri.'],
            ['Pronomes indiretos', 'Mi, ti, gli, le, ci, vi e gli indicam a quem algo agrada.', 'a + pessoa → pronome indireto', 'A Marta piace il cinema.']
        ],
        frases: [['Mi piace viaggiare e ascoltare musica.', 'Gosto de viajar e ouvir música.'], ['Ci piacciono gli sport e i film italiani.', 'Gostamos de esportes e filmes italianos.']],
        dialogo: [['Eva', 'Che cosa ti piace fare?', 'O que você gosta de fazer?'], ['Dario', 'Mi piace cucinare e andare al cinema.', 'Gosto de cozinhar e ir ao cinema.']]
    },
    {
        titulo: 'Potere, volere e dovere',
        contexto: 'Expresse capacidade, vontade e obrigação com verbos modais.',
        vocabulario: [
            ['potere', 'poder', 'Posso, puoi, può...'],
            ['volere', 'querer', 'Voglio, vuoi, vuole...'],
            ['dovere', 'dever / precisar', 'Devo, devi, deve...'],
            ['posso', 'eu posso', 'Primeira pessoa de potere.'],
            ['voglio', 'eu quero', 'Direto; vorrei é mais cortês em pedidos.'],
            ['devo', 'eu devo / preciso', 'Primeira pessoa de dovere.']
        ],
        gramatica: [
            ['Modal + infinitivo', 'O verbo modal é conjugado e o segundo verbo permanece no infinitivo.', 'modal conjugado + infinitivo', 'Devo lavorare. Possiamo entrare?'],
            ['Pronome com modal', 'Um pronome átono pode vir antes do modal ou unido ao infinitivo.', 'lo posso fare / posso farlo', 'Ti voglio aiutare.']
        ],
        frases: [['Posso pagare con la carta?', 'Posso pagar com cartão?'], ['Dobbiamo partire ma vogliamo restare.', 'Precisamos partir, mas queremos ficar.']],
        dialogo: [['Cliente', 'Posso entrare adesso?', 'Posso entrar agora?'], ['Addetta', 'Sì, ma deve mostrare il biglietto.', 'Sim, mas deve mostrar a passagem.']]
    },
    {
        titulo: 'Trasporti e spostamenti',
        contexto: 'Escolha meios de transporte e descreva deslocamentos urbanos.',
        vocabulario: [
            ['autobus', 'ônibus', 'Invariável; l’autobus.'],
            ['treno', 'trem', 'Prendere il treno.'],
            ['metropolitana', 'metrô', 'Também chamada metro.'],
            ['bicicletta', 'bicicleta', 'Andare in bicicletta.'],
            ['biglietto', 'passagem / bilhete', 'Bilhete de transporte ou entrada.'],
            ['fermata', 'ponto / parada', 'Fermata dell’autobus.']
        ],
        gramatica: [
            ['Andare in ou a piedi', 'Use in com a maioria dos transportes, mas a piedi para ir andando.', 'in treno / in autobus / a piedi', 'Vado al lavoro in metro.'],
            ['Da... a...', 'Da indica origem e a indica destino, com contrações quando há artigo.', 'da + origem → a + destino', 'Il treno va da Roma a Firenze.']
        ],
        frases: [['Prendo l’autobus alla prossima fermata.', 'Pego o ônibus no próximo ponto.'], ['Andiamo in bicicletta o a piedi?', 'Vamos de bicicleta ou a pé?']],
        dialogo: [['Marta', 'Come vai all’università?', 'Como você vai à universidade?'], ['Pietro', 'Vado in metropolitana e poi a piedi.', 'Vou de metrô e depois a pé.']]
    },
    {
        titulo: 'Viaggio, stazione e aeroporto',
        contexto: 'Compre passagens e encontre serviços na estação e no aeroporto.',
        vocabulario: [
            ['partenza', 'partida', 'Opposto de arrivo.'],
            ['arrivo', 'chegada', 'Painel de chegadas: arrivi.'],
            ['binario', 'plataforma / linha do trem', 'Il treno parte dal binario tre.'],
            ['volo', 'voo', 'Volo diretto = voo direto.'],
            ['bagaglio', 'bagagem', 'Bagaglio a mano = bagagem de mão.'],
            ['ritardo', 'atraso', 'Essere in ritardo = estar atrasado.']
        ],
        gramatica: [
            ['Destino com per', 'Em anúncios e bilhetes, per introduz o destino.', 'treno/volo per + destino', 'Il volo per Milano è in ritardo.'],
            ['Partire da, arrivare a', 'Partire usa da para origem; arrivare usa a/in para destino.', 'partire da; arrivare a/in', 'Partiamo da Bologna e arriviamo a Venezia.']
        ],
        frases: [['Il treno per Roma parte dal binario cinque.', 'O trem para Roma parte da plataforma cinco.'], ['Il mio volo ha un’ora di ritardo.', 'Meu voo está uma hora atrasado.']],
        dialogo: [['Viaggiatrice', 'Scusi, dov’è il banco del check-in?', 'Com licença, onde fica o balcão de check-in?'], ['Addetto', 'È a sinistra, vicino alle partenze.', 'Fica à esquerda, perto das partidas.']]
    },
    {
        titulo: 'Albergo e prenotazioni',
        contexto: 'Faça uma reserva e resolva necessidades básicas em um hotel.',
        vocabulario: [
            ['camera singola', 'quarto individual', 'Quarto para uma pessoa.'],
            ['camera doppia', 'quarto duplo', 'Quarto para duas pessoas.'],
            ['prenotazione', 'reserva', 'Avere una prenotazione.'],
            ['chiave', 'chave', 'La chiave della camera.'],
            ['reception', 'recepção', 'Empréstimo frequente; invariável.'],
            ['colazione inclusa', 'café da manhã incluído', 'Pergunta comum em reservas.']
        ],
        gramatica: [
            ['A nome di', 'Use a nome di para identificar o titular de uma reserva.', 'prenotazione a nome di + pessoa', 'Ho una prenotazione a nome di Silva.'],
            ['Per + duração', 'Per introduz a duração prevista de uma estadia.', 'per + período', 'Vorrei una camera per tre notti.']
        ],
        frases: [['Ho una prenotazione per due notti.', 'Tenho uma reserva por duas noites.'], ['La colazione è inclusa nel prezzo?', 'O café da manhã está incluído no preço?']],
        dialogo: [['Ospite', 'Buonasera, ho una prenotazione a nome di Costa.', 'Boa noite, tenho uma reserva em nome de Costa.'], ['Receptionist', 'Benvenuto. Ecco la chiave della camera.', 'Bem-vindo. Aqui está a chave do quarto.']]
    },
    {
        titulo: 'Corpo, salute e bisogni semplici',
        contexto: 'Descreva sintomas simples e peça ajuda em uma farmácia ou consulta.',
        vocabulario: [
            ['testa', 'cabeça', 'Mal di testa = dor de cabeça.'],
            ['stomaco', 'estômago', 'Mal di stomaco = dor de estômago.'],
            ['febbre', 'febre', 'Avere la febbre.'],
            ['dolore', 'dor', 'Un dolore forte = uma dor forte.'],
            ['medicina', 'remédio / medicina', 'Prendere una medicina.'],
            ['farmacia', 'farmácia', 'Local para comprar medicamentos.']
        ],
        gramatica: [
            ['Avere mal di', 'Use avere mal di + parte do corpo para dores comuns.', 'avere mal di + nome', 'Ho mal di testa.'],
            ['Sentirsi', 'Sentirsi descreve como alguém se sente e concorda com a pessoa.', 'mi sento / ti senti / si sente', 'Non mi sento bene.']
        ],
        frases: [['Ho la febbre e mal di testa.', 'Estou com febre e dor de cabeça.'], ['Devo andare in farmacia.', 'Preciso ir à farmácia.']],
        dialogo: [['Farmacista', 'Come si sente?', 'Como o senhor / a senhora se sente?'], ['Cliente', 'Non mi sento bene e ho mal di stomaco.', 'Não me sinto bem e estou com dor de estômago.']]
    },
    {
        titulo: 'Ripasso A1 e missione finale',
        contexto: 'Integre apresentações, transporte, hotel, alimentação e saúde em uma viagem completa.',
        vocabulario: [
            ['benvenuto', 'bem-vindo', 'Varia: benvenuta, benvenuti, benvenute.'],
            ['informazione', 'informação', 'Plural informazioni.'],
            ['aiuto', 'ajuda', 'Aiuto! também é uma exclamação.'],
            ['disponibile', 'disponível', 'Adjetivo em -e, plural -i.'],
            ['necessario', 'necessário', 'Concorda com o substantivo.'],
            ['capisco', 'eu entendo', 'Primeira pessoa de capire, verbo em -isc-.']
        ],
        gramatica: [
            ['Conectar ideias', 'Use e, ma, perché e quindi para formar mensagens A1 mais completas.', 'ideia + conector + ideia', 'Sono stanco, ma devo partire.'],
            ['Pedido de esclarecimento', 'Non capisco, può ripetere? é uma estratégia essencial de comunicação.', 'non capisco + richiesta cortese', 'Scusi, può parlare più lentamente?']
        ],
        frases: [['Ho una prenotazione, ma non trovo l’albergo.', 'Tenho uma reserva, mas não encontro o hotel.'], ['Non capisco: può ripetere più lentamente?', 'Não entendo: pode repetir mais devagar?']],
        dialogo: [['Viaggiatore', 'Buongiorno, ho bisogno di aiuto. Dov’è la stazione?', 'Bom dia, preciso de ajuda. Onde fica a estação?'], ['Addetta', 'È qui vicino. Vada dritto e giri a destra.', 'É aqui perto. Siga em frente e vire à direita.']]
    }
];

MODULOS_ITALIANO_A1.forEach((modulo, index) => {
    CURSO_ITALIANO_A1_DADOS.push(criarModuloItalianoA1(
        index + 1,
        modulo.titulo,
        modulo.contexto,
        modulo.vocabulario,
        modulo.gramatica,
        modulo.frases,
        modulo.dialogo
    ));
});

if (typeof window !== 'undefined') window.CURSO_ITALIANO_A1_DADOS = CURSO_ITALIANO_A1_DADOS;
if (typeof module !== 'undefined' && module.exports) module.exports = { CURSO_ITALIANO_A1_DADOS };
