// ============================================================================
// BANCO DE DADOS OFICIAL - DICIONÁRIO CIRÍLICO & GLOSSÁRIO
// RUSSO ACADEMY - ALFABETO, VOCABULÁRIO A1-B2 & OS 6 CASOS GRAMATICAIS
// ============================================================================

const DADOS_RUSSO_DICIONARIO = {
    title: "Dicionário & Glossário Cirílico Universal",
    desc: "Consulta unificada de 33 letras cirílicas, vocabulário temático A1-B2 e os 6 Casos Gramaticais com áudio nativo em ru-RU.",

    // 1. ALFABETO CIRÍLICO COMPLETO (33 LETRAS)
    alphabet: [
        { letter: "А а", romaji: "A", type: "Vogal", name: "A", mnemonic: "Igual ao 'A' em português. Pronúncia aberta como em 'água'.", stroke: "2 hastes diagonais unidas no topo + 1 barra horizontal central.", example: "Автобус", translation: "Ônibus" },
        { letter: "Б б", romaji: "B", type: "Consoante", name: "Be", mnemonic: "Tem som de 'B' como em 'bola'. Note a barra no topo parecendo um boné.", stroke: "1 haste vertical com barriga inferior + traço superior direito.", example: "Бабушка", translation: "Avó" },
        { letter: "В в", romaji: "V", type: "Consoante", name: "Ve", mnemonic: "⚠️ Falso Cognato Visual! Parece um 'B', mas tem som de 'V' como em 'vinho'.", stroke: "1 linha vertical + 2 barrigas curvas no lado direito.", example: "Вода", translation: "Água" },
        { letter: "Г г", romaji: "G", type: "Consoante", name: "Ge", mnemonic: "Som de 'G' duro como em 'gato' ou 'gol'. Formato de ganchinho.", stroke: "1 barra horizontal superior + 1 linha vertical à esquerda.", example: "Город", translation: "Cidade" },
        { letter: "Д д", romaji: "D", type: "Consoante", name: "De", mnemonic: "Derivada do Delta grego. Som de 'D' como em 'dado'.", stroke: "Topo trapezoidal com base larga e 2 pezinhos na parte inferior.", example: "Дом", translation: "Casa / Lar" },
        { letter: "Е е", romaji: "YE / E", type: "Vogal Suave", name: "Ye", mnemonic: "Soa como 'iê' no início de palavras ou após vogais. Suafiza consoantes anteriores.", stroke: "1 linha vertical + 3 barras horizontais (topo, centro, base).", example: "Еда", translation: "Comida" },
        { letter: "Ё ё", romaji: "YO", type: "Vogal Suave", name: "Yo", mnemonic: "Soa como 'ió' (sempre tônica). Os dois pontos sobre a letra marcam a tônica.", stroke: "Letra Е acrescida de 2 pontos superiores.", example: "Ёлка", translation: "Árvore de Natal / Pinheiro" },
        { letter: "Ж ж", romaji: "ZH", type: "Consoante", name: "Zhe", mnemonic: "Som de 'J' forte e chiado como em 'janela' ou 'jornal'. Formato de besouro.", stroke: "1 haste vertical central cruzada por 2 arcos diagonais opostos.", example: "Журнал", translation: "Revista" },
        { letter: "З з", romaji: "Z", type: "Consoante", name: "Ze", mnemonic: "Som de 'Z' como em 'zebra'. Lembra o número 3 desenhado de lado.", stroke: "2 curvas concêntricas abertas para a esquerda.", example: "Зима", translation: "Inverno" },
        { letter: "И и", romaji: "I", type: "Vogal Suave", name: "I", mnemonic: "Som de 'I' como em 'ilha'. Parece um 'N' latino invertido.", stroke: "2 hastes verticais conectadas por 1 diagonal ascendente.", example: "Изучать", translation: "Estudar" },
        { letter: "Й й", romaji: "Y (I curto)", name: "I kratkoye", mnemonic: "Semivogal curta 'i'. Forma ditongos como em 'май' (mai).", stroke: "Letra И acrescida de um pequeno chapéu curvo no topo.", example: "Chai (Чай)", translation: "Chá" },
        { letter: "К к", romaji: "K", type: "Consoante", name: "Ka", mnemonic: "Idêntico ao 'K' latino. Som seco de 'K' como em 'kiwi'.", stroke: "1 haste vertical + 2 traços diagonais partindo do centro.", example: "Книга", translation: "Livro" },
        { letter: "Л л", romaji: "L", type: "Consoante", name: "El", mnemonic: "Som de 'L' palatal ou velar como em 'lua' ou 'lago'. Formato de tenda.", stroke: "2 hastes inclinadas formando uma cobertura curvinha.", example: "Лето", translation: "Verão" },
        { letter: "М м", romaji: "M", type: "Consoante", name: "Em", mnemonic: "Idêntico ao 'M' em português. Lembre de 'Мама' (Mãe).", stroke: "2 hastes verticais unidas por um 'V' no centro.", example: "Мама", translation: "Mãe" },
        { letter: "Н н", romaji: "N", type: "Consoante", name: "En", mnemonic: "⚠️ Falso Cognato Visual! Parece um 'H', mas tem som de 'N' de 'navio'.", stroke: "2 hastes verticais unidas por 1 barra horizontal central.", example: "Ночь", translation: "Noite" },
        { letter: "О о", romaji: "O", type: "Vogal", name: "O", mnemonic: "Igual ao 'O' latino. Quando tônico soa 'Ó', quando átono soa suave 'A'.", stroke: "1 círculo contínuo no sentido anti-horário.", example: "Окно", translation: "Janela" },
        { letter: "П п", romaji: "P", type: "Consoante", name: "Pe", mnemonic: "Derivada do Pi grego (П). Som seco de 'P' de 'pato'.", stroke: "2 hastes verticais unidas por 1 traço horizontal no topo.", example: "Привет", translation: "Olá / Oi" },
        { letter: "Р р", romaji: "R", type: "Consoante", name: "Er", mnemonic: "⚠️ Falso Cognato Visual! Parece um 'P', mas tem som de 'R' vibrante.", stroke: "1 haste vertical + 1 barriga curva superior direita.", example: "Работа", translation: "Trabalho" },
        { letter: "С с", romaji: "S", type: "Consoante", name: "Es", mnemonic: "⚠️ Falso Cognato Visual! Parece um 'C', mas tem som de 'S' de 'sol'.", stroke: "1 arco curvo aberto para a direita.", example: "Спасибо", translation: "Obrigado" },
        { letter: "Т т", romaji: "T", type: "Consoante", name: "Te", mnemonic: "Idêntico ao 'T' latino. Som firme de 'T' de 'táxi'.", stroke: "1 barra horizontal no topo + 1 haste vertical central.", example: "Такси", translation: "Táxi" },
        { letter: "У у", romaji: "U", type: "Vogal", name: "U", mnemonic: "⚠️ Falso Cognato Visual! Parece um 'Y', mas tem som de 'U' de 'uva'.", stroke: "1 traço diagonal curto à esquerda + 1 diagonal longa descendente à direita.", example: "Утро", translation: "Manhã" },
        { letter: "Ф ф", romaji: "F", type: "Consoante", name: "Ef", mnemonic: "Derivada do Phi grego (Ф). Som de 'F' como em 'foto'.", stroke: "1 haste vertical central cortando um círculo simétrico.", example: "Фильм", translation: "Filme" },
        { letter: "Х х", romaji: "KH", type: "Consoante", name: "Kha", mnemonic: "Som de 'R' forte e raspado como em 'carro' ou 'khleb' (pão).", stroke: "2 hastes diagonais cruzadas no centro.", example: "Хлеб", translation: "Pão" },
        { letter: "Ц ц", romaji: "TS", type: "Consoante", name: "Tse", mnemonic: "Som de 'TS' conjunto como em 'tsunami' ou 'pizza'. Note o pezinho no canto.", stroke: "Caixa em U aberta no topo com 1 pequeno laço inferior direito.", example: "Центр", translation: "Centro" },
        { letter: "Ч ч", romaji: "CH", type: "Consoante", name: "Che", mnemonic: "Som de 'TCH' de 'tchau' ou 'chocolate'. Lembra o número 4 invertido.", stroke: "1 gancho curvo superior + 1 haste vertical direita.", example: "Час", translation: "Hora" },
        { letter: "Ш ш", romaji: "SH", type: "Consoante", name: "Sha", mnemonic: "Som de 'CH' de 'chá' ou 'xícara'. Consoante dura e soprada.", stroke: "3 hastes verticais apoiadas sobre 1 base horizontal.", example: "Школа", translation: "Escola" },
        { letter: "Щ щ", romaji: "SCH", type: "Consoante Suave", name: "Shcha", mnemonic: "Som suave e palatal de 'SH' prolongado (como em 'sushi'). Possui pezinho.", stroke: "Desenho da letra Ш acrescido de um pequeno laço inferior direito.", example: "Борщ", translation: "Borsch (Sopa tradicional)" },
        { letter: "Ъ ъ", romaji: "Sinal Duro", type: "Sinal Ortográfico", name: "Tvyordyy znak", mnemonic: "Não possui som próprio. Impede a palatização da consoante anterior.", stroke: "Linha vertical curta com topo para a esquerda e barriga inferior direita.", example: "Объект", translation: "Objeto" },
        { letter: "Ы ы", romaji: "YI (I gutural)", type: "Vogal Central", name: "Yery", mnemonic: "Som gutural fundo produzido no fundo da garganta com dentes cerrados.", stroke: "1 combinação da letra Ь + 1 linha vertical paralela.", example: "Мы", translation: "Nós" },
        { letter: "Ь ь", romaji: "Sinal Suave", type: "Sinal Ortográfico", name: "Myagkiy znak", mnemonic: "Não tem som. Palatiza e suaviza a consoante que a antecede (som molhado).", stroke: "1 linha vertical + 1 barriga inferior à direita.", example: "День", translation: "Dia" },
        { letter: "Э э", romaji: "E (aberto)", type: "Vogal", name: "E oborotnoye", mnemonic: "Som de 'É' aberto como em 'éla' ou 'época'.", stroke: "1 arco curvo aberto para a esquerda com 1 traço horizontal central.", example: "Это", translation: "Isto / Este" },
        { letter: "Ю ю", romaji: "YU", type: "Vogal Suave", name: "Yu", mnemonic: "Soa como 'iú' de 'universo'. Combinação do som I + U.", stroke: "1 linha vertical conectada por 1 traço central a um círculo direito.", example: "Юг", translation: "Sul" },
        { letter: "Я я", romaji: "YA", type: "Vogal Suave", name: "Ya", mnemonic: "Soa como 'iá' de 'iatismo'. Significa também o pronome 'Eu' (Я).", stroke: "1 haste vertical direita + 1 barriga e perninha esquerda.", example: "Яблоко", translation: "Maçã" }
    ],

    // 2. VOCABULÁRIO TEMÁTICO DA TRILHA A1 A B2
    vocabulary: [
        { word: "Здравствуйте", romaji: "Zdravstvuyte", translation: "Olá / Como vai? (Formal)", category: "Saudações", level: "A1", example: "Здравствуйте, меня зовут Анна." },
        { word: "Привет", romaji: "Privet", translation: "Oi / Olá (Informal)", category: "Saudações", level: "A1", example: "Привет! Как дела?" },
        { word: "Спасибо", romaji: "Spasibo", translation: "Obrigado(a)", category: "Cortesia", level: "A1", example: "Большое спасибо за помощь!" },
        { word: "Пожалуйста", romaji: "Pozhaluysta", translation: "Por favor / De nada", category: "Cortesia", level: "A1", example: "Скажите, пожалуйста, где метро?" },
        { word: "До свидания", romaji: "Do svidaniya", translation: "Até logo / Adeus", category: "Saudações", level: "A1", example: "До свидания! До завтра!" },
        { word: "Меня зовут...", romaji: "Menya zovut...", translation: "Meu nome é...", category: "Apresentações", level: "A1", example: "Меня зовут Виктор." },
        { word: "Очень приятно", romaji: "Ochen priyatno", translation: "Muito prazer", category: "Apresentações", level: "A1", example: "Очень приятно с вами познакомиться!" },
        { word: "Семья", romaji: "Sem'ya", translation: "Família", category: "Família", level: "A1", example: "Моя семья очень дружная." },
        { word: "Отец", romaji: "Otets", translation: "Pai", category: "Família", level: "A1", example: "Мой отец работает инженером." },
        { word: "Мать", romaji: "Mat'", translation: "Mãe", category: "Família", level: "A1", example: "Моя мать очень хорошо готовит." },
        { word: "Друг", romaji: "Drug", translation: "Amigo", category: "Relacionamentos", level: "A1", example: "Иван — мой лучший друг." },
        { word: "Город", romaji: "Gorod", translation: "Cidade", category: "Cidade", level: "A1", example: "Москва — красивый город." },
        { word: "Улица", romaji: "Ulitsa", translation: "Rua", category: "Cidade", level: "A1", example: "Мы живём на этой улице." },
        { word: "Дом", romaji: "Dom", translation: "Casa / Edifício", category: "Habitação", level: "A1", example: "Наш дом находится в центре." },
        { word: "Вода", romaji: "Vada", translation: "Água", category: "Alimentação", level: "A1", example: "Принесите, пожалуйста, воду." },
        { word: "Хлеб", romaji: "Khleb", translation: "Pão", category: "Alimentação", level: "A1", example: "Свежий хлеб очень вкусный." },
        { word: "Ресторан", romaji: "Restaran", translation: "Restaurante", category: "Alimentação", level: "A1", example: "Мы ужинаем в ресторане." },
        { word: "Работа", romaji: "Rabota", translation: "Trabalho / Emprego", category: "Trabalho", level: "A2", example: "Моя работа интересная и важная." },
        { word: "Время", romaji: "Vremya", translation: "Tempo / Hora", category: "Tempo", level: "A2", example: "Который час? У нас мало времени." },
        { word: "Путешествие", romaji: "Puteshestviye", translation: "Viagem", category: "Turismo", level: "A2", example: "Путешествие по России было незабываемым." },
        { word: "Билет", romaji: "Bilet", translation: "Ingresso / Passagem", category: "Turismo", level: "A2", example: "Я купил билет на поезд в Санкт-Петербург." },
        { word: "Аэропорт", romaji: "Aeroport", translation: "Aeroporto", category: "Transporte", level: "A2", example: "Самолет прилетает в аэропорт." },
        { word: "Свобода", romaji: "Svoboda", translation: "Liberdade", category: "Sociedade", level: "B1", example: "Свобода слова является важным принципом." },
        { word: "Развитие", romaji: "Razvitiye", translation: "Desenvolvimento", category: "Educação", level: "B1", example: "Экономическое развитие страны ускоряется." },
        { word: "Образование", romaji: "Obrazovaniye", translation: "Educação / Ensino", category: "Educação", level: "B1", example: "Высшее образование открывает новые возможности." },
        { word: "Сотрудничество", romaji: "Sotrudnichestvo", translation: "Cooperação / Parceria", category: "Negócios", level: "B2", example: "Мы надеемся на долгосрочное взаимовыгодное сотрудничество." },
        { word: "Законодательство", romaji: "Zakonodatel'stvo", translation: "Legislação / Direito", category: "Jurídico", level: "B2", example: "Новое законодательство вступает в силу с следующего месяца." },
        { word: "Искусственный интеллект", romaji: "Iskusstvennyy intellekt", translation: "Inteligência Artificial", category: "Tecnologia", level: "B2", example: "Развитие искусственного интеллекта меняет рынок труда." }
    ],

    // 3. GUIA MESTRE DOS 6 CASOS GRAMATICAIS & SINTAXE
    grammar: [
        {
            title: "Именительный падеж (Caso Nominativo)",
            formula: "Sujeito da oração (Кто? Что? - Quem? O quê?)",
            rule: "É a forma inicial/dicionário do substantivo sem declinação. Indica o sujeito que executa a ação principal da frase.",
            example: "Студент читает книгу. (O estudante lê um livro.)",
            level: "A1",
            category: "Casos Gramaticais"
        },
        {
            title: "Винительный падеж (Caso Acusativo)",
            formula: "Objeto Direto (Кого? Что? - Quem? O quê?)",
            rule: "Indica o objeto direto afetado pela ação transitiva ou o destino de movimento (в / на + Acusativo).",
            example: "Я люблю музыку. Я иду в парк.",
            level: "A1",
            category: "Casos Gramaticais"
        },
        {
            title: "Предложный падеж (Caso Preposicional)",
            formula: "Localização e Assunto (О ком? О чём? Где? - Onde? Sobre o quê?)",
            rule: "Sempre precedido por preposição (в, на, о/об). Usado para indicar localização estática e tema de conversa.",
            example: "Я живу в Москве. Мы говорим о работе.",
            level: "A1",
            category: "Casos Gramaticais"
        },
        {
            title: "Родительный падеж (Caso Genitivo)",
            formula: "Posse, Ausência e Quantidade (Кому? Чего? У кого? - De quem? Sem o quê?)",
            rule: "Indica posse (livro do professor), negação com НЕТ (нет времени) e numerais (2, 3, 4 + genitivo singular; 5+ genitivo plural).",
            example: "У меня нет машины. Это книга анны.",
            level: "A2",
            category: "Casos Gramaticais"
        },
        {
            title: "Дательный падеж (Caso Dativo)",
            formula: "Objeto Indireto e Idade (Кому? Чему? - Para quem? A quem?)",
            rule: "Indica o receptor da ação, destinatário de mensagens/presentes e expressão de idade (Мне 20 лет).",
            example: "Я звоню другу. Мне тридцать лет.",
            level: "A2",
            category: "Casos Gramaticais"
        },
        {
            title: "Творительный падеж (Caso Instrumental)",
            formula: "Instrumento e Companhia (Кем? Чем? С кем? - Com o quê? Com quem?)",
            rule: "Indica o instrumento utilizado para realizar uma ação, profissão com o verbo ser/estar no passado (работать/быть + Instrumental) ou companhia com С.",
            example: "Я пишу ручкой. Я работаю врачом. Мы с другом ужинаем.",
            level: "B1",
            category: "Casos Gramaticais"
        },
        {
            title: "Виды глагола (Aspectos Verbais: НСВ vs СВ)",
            formula: "Imperfeito (НСВ - Processo/Hábito) vs Perfeito (СВ - Resultado)",
            rule: "Em russo, os verbos possuem dois aspectos: Imperfeito (processo contínuo, hábito, repetição) e Perfeito (ação concluída com resultado pontual único).",
            example: "Я долго читал книгу (НСВ - processo) vs Я прочитал книгу (СВ - resultado concluído).",
            level: "B1",
            category: "Verbos"
        },
        {
            title: "Причастие (Particípios em Russo)",
            formula: "Adjetivos Verbais (Ativos -ущ-/-вш- e Passivos -енн-/-т-)",
            rule: "Particípios modificam substantivos conectando ação e qualidade. Podem ser ativos (quem faz) ou passivos (quem sofre a ação).",
            example: "Студент, читающий книгу (O estudante que está lendo a livro).",
            level: "B2",
            category: "Sintaxe Avançada"
        },
        {
            title: "Деепричастие (Gerúndios em Russo)",
            formula: "Advérbios Verbais (-а/-я no Imperfeito e -в/-вши no Perfeito)",
            rule: "Indica uma ação secundária simultânea ou anterior realizada pelo mesmo sujeito da frase principal.",
            example: "Читая книгу, я пил кофе. (Lendo o livro, eu bebia café.)",
            level: "B2",
            category: "Sintaxe Avançada"
        }
    ]
};

// ============================================================================
// GUIA MESTRE DOS 6 CASOS GRAMATICAIS (Шесть падежей)
// ============================================================================
const CASOS_GRAMATICAIS_RUSSO = {
    title: "Guia Mestre dos 6 Casos Gramaticais (Шесть падежей)",
    description: "Matriz completa de sufixos por gênero e simulador de declinação de palavras modelo com áudio nativo em ru-RU.",
    
    // 1. Matriz de Declinações por Gênero
    matrix: [
        {
            id: 1,
            name: "Именительный (Nominativo)",
            question: "Кто? Что? (Quem? O quê?)",
            function: "Sujeito da oração (forma inicial do dicionário).",
            endings: {
                masculine: "Cons. dura / -ь / -й",
                feminine: "-а / -я / -ь",
                neuter: "-о / -е",
                plural: "-ы / -и / -а / -я"
            },
            color: "#0284c7"
        },
        {
            id: 2,
            name: "Родительный (Genitivo)",
            question: "Кого? Чего? / У кого? (De quem? Sem o quê?)",
            function: "Posse, ausência (нет), quantidade (2-4), origem (из/с).",
            endings: {
                masculine: "-а / -я",
                feminine: "-ы / -и",
                neuter: "-а / -я",
                plural: "Ø (sem vogal) / -ей / -ев / -ов"
            },
            color: "#d97706"
        },
        {
            id: 3,
            name: "Дательный (Dativo)",
            question: "Кому? Чему? (A quem? Para quem?)",
            function: "Objeto indireto, receptor, idade (Мне 20 лет), destino (к).",
            endings: {
                masculine: "-у / -ю",
                feminine: "-е / -и",
                neuter: "-у / -ю",
                plural: "-ам / -ям"
            },
            color: "#059669"
        },
        {
            id: 4,
            name: "Винительный (Acusativo)",
            question: "Кого? Что? (Quem? O quê?)",
            function: "Objeto direto, movimento com destino (в / на).",
            endings: {
                masculine: "Inanimado: Nom / Animado: -а / -я",
                feminine: "-у / -ю / -ь",
                neuter: "-о / -е",
                plural: "Inanimado: Nom / Animado: Gen"
            },
            color: "#dc2626"
        },
        {
            id: 5,
            name: "Творительный (Instrumental)",
            question: "Кем? Чем? С кем? (Com o quê? Com quem?)",
            function: "Instrumento, meio, companhia (с), profissão (быть/работать).",
            endings: {
                masculine: "-ом / -ем",
                feminine: "-ой / -ей",
                neuter: "-ом / -ем",
                plural: "-ами / -ями"
            },
            color: "#7e22ce"
        },
        {
            id: 6,
            name: "Предложный (Preposicional)",
            question: "О ком? О чём? Где? (Onde? Sobre quem/o quê?)",
            function: "Localização estática (в / на), assunto de conversa (о / об).",
            endings: {
                masculine: "-е / -и",
                feminine: "-е / -и",
                neuter: "-е / -и",
                plural: "-ах / -ях"
            },
            color: "#0891b2"
        }
    ],

    // 2. Palavras Modelo com Declinação Integral nos 6 Casos
    modelWords: [
        {
            word: "Дом",
            translation: "Casa / Lar",
            gender: "Masculino Inanimado (Duro)",
            icon: "🏠",
            cases: [
                { case: "Nominativo", question: "Кто? Что?", form: "Дом", example: "Это мой новый дом.", pt: "Esta é a minha casa nova.", audio: "Это мой новый дом." },
                { case: "Genitivo", question: "Кого? Чего?", form: "Дома", example: "Около дома растёт дерево.", pt: "Perto da casa cresce uma árvore.", audio: "Около дома растёт дерево." },
                { case: "Dativo", question: "Кому? Чему?", form: "Дому", example: "Я подхожу к дому.", pt: "Eu me aproximo da casa.", audio: "Я подхожу к дому." },
                { case: "Acusativo", question: "Кого? Что?", form: "Дом", example: "Я вижу большой дом.", pt: "Eu vejo uma casa grande.", audio: "Я вижу большой дом." },
                { case: "Instrumental", question: "Кем? Чем?", form: "Домом", example: "Перед домом стоит машина.", pt: "Em frente da casa tem um carro.", audio: "Перед домом стоит машина." },
                { case: "Preposicional", question: "О ком? Где?", form: "в Доме", example: "Мы сейчас в доме.", pt: "Nós estamos agora na casa.", audio: "Мы сейчас в доме." }
            ]
        },
        {
            word: "Друг",
            translation: "Amigo",
            gender: "Masculino Animado (Duro)",
            icon: "👨‍🌾",
            cases: [
                { case: "Nominativo", question: "Кто? Что?", form: "Друг", example: "Мой друг живёт в Москве.", pt: "Meu amigo mora em Moscou.", audio: "Мой друг живёт в Москве." },
                { case: "Genitivo", question: "Кого? Чего?", form: "Друга", example: "У меня нет друга.", pt: "Eu não tenho um amigo (aqui).", audio: "У меня нет друга." },
                { case: "Dativo", question: "Кому? Чему?", form: "Другу", example: "Я звоню другу.", pt: "Eu estou ligando para o amigo.", audio: "Я звоню другу." },
                { case: "Acusativo", question: "Кого? Что?", form: "Друга", example: "Я жду друга.", pt: "Eu estou esperando o amigo.", audio: "Я жду друга." },
                { case: "Instrumental", question: "Кем? Чем?", form: "с Другом", example: "Я гуляю с другом.", pt: "Eu estou passeando com o amigo.", audio: "Я гуляю с другом." },
                { case: "Preposicional", question: "О ком? Где?", form: "о Друге", example: "Мы говорим о друге.", pt: "Nós estamos falando sobre o amigo.", audio: "Мы говорим о друге." }
            ]
        },
        {
            word: "Книга",
            translation: "Livro",
            gender: "Feminino Duro (-а)",
            icon: "📖",
            cases: [
                { case: "Nominativo", question: "Кто? Что?", form: "Книга", example: "Эта книга интересная.", pt: "Este livro é interessante.", audio: "Эта книга интересная." },
                { case: "Genitivo", question: "Кого? Чего?", form: "Книги", example: "У меня нет этой книги.", pt: "Eu não tenho este livro.", audio: "У меня нет этой книги." },
                { case: "Dativo", question: "Кому? Чему?", form: "Книге", example: "Я рад этой книге.", pt: "Fico feliz com este livro.", audio: "Я рад этой книге." },
                { case: "Acusativo", question: "Кого? Что?", form: "Книгу", example: "Я читаю книгу.", pt: "Eu estou lendo um livro.", audio: "Я читаю книгу." },
                { case: "Instrumental", question: "Кем? Чем?", form: "Книгой", example: "Я увлекаюсь этой книгой.", pt: "Sou fascinado por este livro.", audio: "Я увлекаюсь этой книгой." },
                { case: "Preposicional", question: "О ком? Где?", form: "о Книге", example: "Мы спорим о книге.", pt: "Nós discutimos sobre o livro.", audio: "Мы спорим о книге." }
            ]
        },
        {
            word: "Вода",
            translation: "Água",
            gender: "Feminino Duro (-а)",
            icon: "💧",
            cases: [
                { case: "Nominativo", question: "Кто? Что?", form: "Вода", example: "Вода в реке холодная.", pt: "A água no rio está fria.", audio: "Вода в реке холодная." },
                { case: "Genitivo", question: "Кого? Чего?", form: "Воды", example: "Дайте, пожалуйста, воды.", pt: "Dê-me um pouco de água, por favor.", audio: "Дайте, пожалуйста, воды." },
                { case: "Dativo", question: "Кому? Чему?", form: "Воде", example: "Растениям нужна вода.", pt: "As plantas precisam de água.", audio: "Растениям нужна вода." },
                { case: "Acusativo", question: "Кого? Что?", form: "Воду", example: "Я пью воду.", pt: "Eu bebo água.", audio: "Я пью воду." },
                { case: "Instrumental", question: "Кем? Чем?", form: "Водой", example: "Умываться холодной водой.", pt: "Lavar o rosto com água fria.", audio: "Умываться холодной водой." },
                { case: "Preposicional", question: "О ком? Где?", form: "в Воде", example: "Рыбы живут в воде.", pt: "Os peixes vivem na água.", audio: "Рыбы живут в воде." }
            ]
        },
        {
            word: "Окно",
            translation: "Janela",
            gender: "Neutro Duro (-о)",
            icon: "🪟",
            cases: [
                { case: "Nominativo", question: "Кто? Что?", form: "Окно", example: "Окно открыто.", pt: "A janela está aberta.", audio: "Окно открыто." },
                { case: "Genitivo", question: "Кого? Чего?", form: "Окна", example: "Около окна стоит стол.", pt: "Perto da janela tem uma mesa.", audio: "Около окна стоит стол." },
                { case: "Dativo", question: "Кому? Чему?", form: "Окну", example: "Он подошёл к окну.", pt: "Ele foi até a janela.", audio: "Он подошёл к окну." },
                { case: "Acusativo", question: "Кого? Что?", form: "Окно", example: "Я вижу окно.", pt: "Eu vejo a janela.", audio: "Я вижу окно." },
                { case: "Instrumental", question: "Кем? Чем?", form: "Окном", example: "За окном идёт дождь.", pt: "Atrás da janela está chovendo.", audio: "За окном идёт дождь." },
                { case: "Preposicional", question: "О ком? Где?", form: "в Окне", example: "Свет горит в окне.", pt: "A luz está acesa na janela.", audio: "Свет горит в окне." }
            ]
        }
    ]
};

DADOS_RUSSO_DICIONARIO.casos = CASOS_GRAMATICAIS_RUSSO;

// Exportação compatível com ambientes Node e Browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DADOS_RUSSO_DICIONARIO, CASOS_GRAMATICAIS_RUSSO };
} else if (typeof window !== 'undefined') {
    window.DADOS_RUSSO_DICIONARIO = DADOS_RUSSO_DICIONARIO;
    window.CASOS_GRAMATICAIS_RUSSO = CASOS_GRAMATICAIS_RUSSO;
}

