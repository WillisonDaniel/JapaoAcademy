// ============================================================================
// BANCO DE DADOS OFICIAL - CURSO DO ALFABETO CIRÍLICO (КИРИЛЛИЦА)
// RUSSO ACADEMY - 6 MÓDULOS COM VOCABULÁRIO PRÁTICO E TREINO MOTOR
// ============================================================================

const DADOS_RUSSO_CIRILICO = {
    title: "Alfabeto Cirílico",
    desc: "Domine as 33 letras cirílicas com treino motor no Canvas, dicas mnemônicas, áudios nativos e exercícios práticos de fixação.",
    modules: [
        {
            id: 1,
            title: "Módulo 1: Amigos Verdadeiros & Falsos Cognatos Visuais",
            desc: "Aprenda as 9 primeiras letras que lembram o alfabeto latino, mas tome cuidado com as pegadinhas de som dos falsos cognatos visuais (В, Р, С, Х)!",
            badge: "9 Letras",
            chars: [
                {
                    char: "А а",
                    romaji: "A",
                    type: "Vogal",
                    mnemonic: "Exatamente igual ao 'A' em português! Pronúncia clara e aberta como em 'água'.",
                    stroke: "2 traços inclinados unidos no topo + 1 barra horizontal central."
                },
                {
                    char: "К к",
                    romaji: "K",
                    type: "Consoante",
                    mnemonic: "Idêntico ao 'K' latino. Som seco de 'k' como em 'kiwi' ou 'casa'.",
                    stroke: "1 linha vertical + 2 traços diagonais partindo do centro."
                },
                {
                    char: "М м",
                    romaji: "M",
                    type: "Consoante",
                    mnemonic: "Idêntico ao 'M' em português. Lembre de 'Mãe' (Мама)!",
                    stroke: "2 hastes verticais conectadas por um 'V' no centro."
                },
                {
                    char: "О о",
                    romaji: "O",
                    type: "Vogal",
                    mnemonic: "Idêntico ao 'O' latino. Quando tônico soa como 'Ó', quando átono soa suave como 'A'.",
                    stroke: "1 círculo contínuo desenhado no sentido anti-horário."
                },
                {
                    char: "Т т",
                    romaji: "T",
                    type: "Consoante",
                    mnemonic: "Idêntico ao 'T' latino. Som firme e seco de 'T'.",
                    stroke: "1 barra horizontal no topo + 1 haste vertical central."
                },
                {
                    char: "В в",
                    romaji: "V",
                    type: "Consoante",
                    mnemonic: "⚠️ PEGADINHA VISUAL! Parece um 'B', mas tem som de 'V' como em 'Vinho' ou 'Vitória'!",
                    stroke: "1 haste vertical + 2 barrigas curvas no lado direito."
                },
                {
                    char: "Р р",
                    romaji: "R",
                    type: "Consoante",
                    mnemonic: "⚠️ PEGADINHA VISUAL! Parece um 'P', mas tem som de 'R' vibrante como em 'Restaurante'!",
                    stroke: "1 haste vertical + 1 barriga curva no topo direito."
                },
                {
                    char: "С с",
                    romaji: "S",
                    type: "Consoante",
                    mnemonic: "⚠️ PEGADINHA VISUAL! Parece um 'C', mas tem som de 'S' como em 'Suco' ou 'Sol'!",
                    stroke: "1 arco curvo aberto para a direita."
                },
                {
                    char: "Х х",
                    romaji: "KH",
                    type: "Consoante",
                    mnemonic: "⚠️ PEGADINHA VISUAL! Parece um 'X', mas tem som de 'R' forte/raspado como em 'Carro' ou 'Khleb'!",
                    stroke: "2 traços diagonais cruzados pelo centro."
                }
            ],
            vocab: [
                { word: "Автобус", romaji: "Avtóbus", meaning: "Ônibus" },
                { word: "Кот", romaji: "Kot", meaning: "Gato" },
                { word: "Мама", romaji: "Máma", meaning: "Mãe" },
                { word: "Окно", romaji: "Oknó", meaning: "Janela" },
                { word: "Такси", romaji: "Taksí", meaning: "Táxi" },
                { word: "Вода", romaji: "Vadá", meaning: "Água" },
                { word: "Ресторан", romaji: "Restarán", meaning: "Restaurante" },
                { word: "Сок", romaji: "Sok", meaning: "Suco" },
                { word: "Хлеб", romaji: "Khleb", meaning: "Pão" }
            ],
            quiz: [
                {
                    q: "Qual letra cirílica tem o som de 'V' em português?",
                    options: ["В", "Б", "Р", "С"],
                    correctIndex: 0,
                    explanation: "A letra В cirílica parece um B latino, mas pronuncia-se 'V' como em 'Vadá' (Água)."
                },
                {
                    q: "Como se lê a palavra cirílica 'Ресторан'?",
                    options: ["Restaurante", "Pestorana", "Pastelaria", "Posto"],
                    correctIndex: 0,
                    explanation: "Р tem som de R e C tem som de S, portanto 'Ресторан' lê-se Restarán (Restaurante)."
                },
                {
                    q: "CUIDADO: A letra Р cirílica representa qual som?",
                    options: ["Som de R vibrante", "Som de P de pato", "Som de V de vitória", "Som de S de sol"],
                    correctIndex: 0,
                    explanation: "Em cirílico, Р é a letra R (como no grego Rho)."
                },
                {
                    q: "Qual é o significado da palavra cirílica 'Сок'?",
                    options: ["Suco", "Sopa", "Soco", "Sol"],
                    correctIndex: 0,
                    explanation: "С (S) + О (O) + К (K) = Sok, que significa Suco em russo."
                },
                {
                    q: "Como se escreve 'Mãe' em russo com os caracteres do Módulo 1?",
                    options: ["Мама", "Папа", "Бабушка", "Кот"],
                    correctIndex: 0,
                    explanation: "Мама (Máma) combina a letra М (M) com А (A)."
                }
            ]
        },

        {
            id: 2,
            title: "Módulo 2: Formas Gregas e Novas",
            desc: "Aprenda 6 novas letras com formatos característicos derivados da tradição grega (como o Delta Д e o Pi П)!",
            badge: "6 Letras",
            chars: [
                {
                    char: "Б б",
                    romaji: "B",
                    type: "Consoante",
                    mnemonic: "Esta SIM é a letra B! Note a barra horizontal no topo parecendo um boné.",
                    stroke: "1 haste vertical com barriga inferior + 1 traço horizontal no topo."
                },
                {
                    char: "Г г",
                    romaji: "G",
                    type: "Consoante",
                    mnemonic: "Parece um ganchinho ou suporte. Tem som de 'G' duro como em 'Gato' ou 'Gol'.",
                    stroke: "1 barra horizontal no topo + 1 haste vertical descendente à esquerda."
                },
                {
                    char: "Д д",
                    romaji: "D",
                    type: "Consoante",
                    mnemonic: "Derivada do Delta grego! Parece uma casinha ou portal com duas pezinhas apoiadas.",
                    stroke: "Topo trapezoidal com base horizontal larga e 2 pezinhos inferiores."
                },
                {
                    char: "З з",
                    romaji: "Z",
                    type: "Consoante",
                    mnemonic: "Parece o número 3! Tem som de 'Z' como em 'Zebra' ou 'Zima' (Inverno).",
                    stroke: "2 arcos semicirculares empilhados abertos para a esquerda."
                },
                {
                    char: "П п",
                    romaji: "P",
                    type: "Consoante",
                    mnemonic: "Derivada da letra grega Pi (π)! É a letra 'P' com som de 'Pato' ou 'Privét' (Olá).",
                    stroke: "2 hastes verticais unidas por 1 traço horizontal no topo."
                },
                {
                    char: "Л л",
                    romaji: "L",
                    type: "Consoante",
                    mnemonic: "Derivada do Lambda grego (λ)! Parece uma barraca de camping com som de 'L'.",
                    stroke: "2 hastes inclinadas em formato de V invertido com gancho esquerdo."
                }
            ],
            vocab: [
                { word: "Бабушка", romaji: "Bábushka", meaning: "Avó" },
                { word: "Город", romaji: "Górad", meaning: "Cidade" },
                { word: "Дом", romaji: "Dom", meaning: "Casa" },
                { word: "Зима", romaji: "Zimá", meaning: "Inverno" },
                { word: "Привет", romaji: "Privét", meaning: "Olá!" },
                { word: "Лимон", romaji: "Limón", meaning: "Limão" }
            ],
            quiz: [
                {
                    q: "A letra cirílica Д (Delta) se parece com qual objeto visual?",
                    options: ["Uma casinha / portal com pés", "Um número 3", "Um ganchinho", "Uma bola"],
                    correctIndex: 0,
                    explanation: "A letra Д tem base plana com apoios inferiores, lembrando uma estrutura de casinha."
                },
                {
                    q: "Qual letra cirílica representa o som de 'Z' como em 'Zebra'?",
                    options: ["З", "Б", "Г", "П"],
                    correctIndex: 0,
                    explanation: "A letra З (que se parece com o número 3) representa o som de Z."
                },
                {
                    q: "Como se traduz a famosa saudação russa 'Привет'?",
                    options: ["Olá!", "Tchau!", "Obrigado", "Por favor"],
                    correctIndex: 0,
                    explanation: "Привет (Privét) significa Olá! em contextos informais."
                },
                {
                    q: "Qual é a diferença entre Б (B) e В (V)?",
                    options: ["Б tem som de B e В tem som de V", "Ambas têm som de B", "Б tem som de V e В tem som de B", "Ambas têm som de P"],
                    correctIndex: 0,
                    explanation: "Б = B (com traço no topo) e В = V (parece o B latino)."
                },
                {
                    q: "Ouça ou leia 'Дом'. O que significa esta palavra?",
                    options: ["Casa", "Cidade", "Inverno", "Limão"],
                    correctIndex: 0,
                    explanation: "Дом (Dom) significa Casa em russo."
                }
            ]
        },

        {
            id: 3,
            title: "Módulo 3: Vogais Especiais e Suaves",
            desc: "Descubra as vogais iotizadas russa (Е, Ё, И, Й, Э, Ю, Я). Aprenda a letra Я (que significa 'EU') e a regra do Ё!",
            badge: "7 Letras",
            chars: [
                {
                    char: "Е е",
                    romaji: "YE",
                    type: "Vogal",
                    mnemonic: "Parece o 'E' latino, mas pronuncia-se 'YE' (como em 'Ye-sti' ou 'Yes').",
                    stroke: "1 haste vertical + 3 traços horizontais paralelos à direita."
                },
                {
                    char: "Ё ё",
                    romaji: "YO",
                    type: "Vogal",
                    mnemonic: "⚠️ REGRA DE OURO: A letra Ё SEMPRE carrega a sílaba tônica da palavra! Som de 'YO'.",
                    stroke: "Letra E com 2 pingos distintos no topo."
                },
                {
                    char: "И и",
                    romaji: "I",
                    type: "Vogal",
                    mnemonic: "Parece um 'N' invertido! Tem som de 'I' claro como em 'Ímya' (Nome).",
                    stroke: "2 hastes verticais unidas por 1 diagonal ascendente da esquerda para a direita."
                },
                {
                    char: "Й й",
                    romaji: "Y",
                    type: "Semivogal",
                    mnemonic: "É o 'I curto' com um acento curvo no topo. Funciona como semivogal ao final de sílabas (ex: Чай - Chá).",
                    stroke: "Letra И com 1 chapéu curvo (breve) flutuando no topo."
                },
                {
                    char: "Э э",
                    romaji: "E",
                    type: "Vogal",
                    mnemonic: "É o 'E' aberto puro (sem o som 'Y' no início), como em 'Éto' (Isto).",
                    stroke: "1 arco semicircular virado para a esquerda + 1 traço horizontal no centro."
                },
                {
                    char: "Ю ю",
                    romaji: "YU",
                    type: "Vogal",
                    mnemonic: "Parece um 'I' conectado a um 'O'! Som de 'YU' como em 'Yug' (Sul).",
                    stroke: "1 haste vertical + 1 traço de união central + 1 círculo direito."
                },
                {
                    char: "Я я",
                    romaji: "YA",
                    type: "Vogal",
                    mnemonic: "⚠️ ÚNICA E ESPECIAL: Parece um 'R' invertido. Quando isolada, significa o pronome 'EU' (Я)!",
                    stroke: "1 barriga superior esquerda + 1 perna diagonal + 1 haste vertical direita."
                }
            ],
            vocab: [
                { word: "Если", romaji: "Yésli", meaning: "Se (condicional)" },
                { word: "Ёлка", romaji: "Yólka", meaning: "Árvore de Natal" },
                { word: "Имя", romaji: "Ímya", meaning: "Nome" },
                { word: "Чай", romaji: "Chai", meaning: "Chá" },
                { word: "Это", romaji: "Éto", meaning: "Isto / Isso" },
                { word: "Юг", romaji: "Yug", meaning: "Sul" },
                { word: "Яблоко", romaji: "Yáblaka", meaning: "Maçã" }
            ],
            quiz: [
                {
                    q: "Qual é o significado da letra Я quando usada sozinha como palavra?",
                    options: ["EU (pronome pessoal)", "Nós", "Ele", "Você"],
                    correctIndex: 0,
                    explanation: "A letra Я sozinha é o pronome da 1ª pessoa do singular em russo: 'Я' = 'EU'."
                },
                {
                    q: "Qual é a regra gramatical infalível da letra Ё (com dois pontos)?",
                    options: ["Ela é SEMPRE a sílaba tônica da palavra", "Ela é sempre muda", "Ela só aparece no final", "Ela muda o som de R"],
                    correctIndex: 0,
                    explanation: "Em russo, onde quer que a letra Ё apareça, a tônica cai obrigatoriamente sobre ela."
                },
                {
                    q: "Qual letra representa o som de 'I' limpo e parece um N invertido?",
                    options: ["И", "Й", "Е", "Э"],
                    correctIndex: 0,
                    explanation: "A letra И tem o formato de N invertido e pronuncia-se 'I'."
                },
                {
                    q: "Como se traduz a palavra 'Яблоко'?",
                    options: ["Maçã", "Chá", "Nome", "Sul"],
                    correctIndex: 0,
                    explanation: "Яблоко (Yáblaka) significa Maçã."
                },
                {
                    q: "Qual vogal representa o som aberto 'É' puro (sem o som 'Y' inicial)?",
                    options: ["Э", "Е", "Ю", "Я"],
                    correctIndex: 0,
                    explanation: "A letra Э representa o som de 'É' aberto puro."
                },
                {
                    q: "Na palavra 'Чай' (Chá), qual é a função da letra Й final?",
                    options: ["Funciona como semivogal 'I curto'", "É uma consoante muda", "Tem som de J", "Muda o gênero"],
                    correctIndex: 0,
                    explanation: "Й é a semivogal 'I curto' que fecha ditongos em russo."
                }
            ]
        },

        {
            id: 4,
            title: "Módulo 4: Os Sons Chiados & Sibilantes",
            desc: "Domine o grupo dos sons chiados russa (Ж, Ч, Ш, Щ, Ц). Aprenda a diferenciar o som duro de Ш do som suave de Щ!",
            badge: "5 Letras",
            chars: [
                {
                    char: "Ж ж",
                    romaji: "ZH",
                    type: "Consoante",
                    mnemonic: "Parece uma borboleta ou besouro! Tem o som de 'J' como em 'Janela' ou 'Zhurnál' (Revista).",
                    stroke: "1 haste vertical central + 2 arcos laterais espelhados cruzados."
                },
                {
                    char: "Ч ч",
                    romaji: "CH",
                    type: "Consoante",
                    mnemonic: "Parece o número '4'! Tem som de 'TCH' como em 'Tchau' ou 'Chasý' (Relógio).",
                    stroke: "1 gancho em L no topo + 1 haste vertical descendente à direita."
                },
                {
                    char: "Ш ш",
                    romaji: "SH",
                    type: "Consoante",
                    mnemonic: "Parece um tridente com 3 dentes verticais. Som de 'CH' seco/duro como em 'Shkóla' (Escola).",
                    stroke: "3 hastes verticais paralelas conectadas por 1 base horizontal."
                },
                {
                    char: "Щ щ",
                    romaji: "SHCH",
                    type: "Consoante",
                    mnemonic: "É a letra Ш com um rabo/gancho no canto inferior direito! Som suave longo de 'SHCH' como em 'Borsch'.",
                    stroke: "Letra Ш com 1 pequeno rabo/gancho descendente no canto inferior direito."
                },
                {
                    char: "Ц ц",
                    romaji: "TS",
                    type: "Consoante",
                    mnemonic: "Parece um 'U' de ponta cabeça com ganchinho! Som de 'TS' como em 'Tsunami' ou 'Tsar' (Imperador).",
                    stroke: "2 hastes verticais unidas por base + 1 rabo/gancho inferior direito."
                }
            ],
            vocab: [
                { word: "Журнал", romaji: "Zhurnál", meaning: "Revista" },
                { word: "Часы", romaji: "Chasý", meaning: "Relógio" },
                { word: "Школа", romaji: "Shkóla", meaning: "Escola" },
                { word: "Борщ", romaji: "Borsch", meaning: "Sopa típica russa" },
                { word: "Царь", romaji: "Tsar", meaning: "Imperador / Tsar" }
            ],
            quiz: [
                {
                    q: "A letra Ж se parece visualmente com qual inseto e representa qual som?",
                    options: ["Borboleta / Besouro (som de J de janela)", "Uma cobra (som de S)", "Uma aranha (som de R)", "Um pássaro (som de F)"],
                    correctIndex: 0,
                    explanation: "Ж tem formato simétrico de asas de borboleta e pronuncia-se 'J' (Zh)."
                },
                {
                    q: "A letra Ч se parece com qual número latino?",
                    options: ["Número 4 (som de TCH)", "Número 7", "Número 1", "Número 9"],
                    correctIndex: 0,
                    explanation: "Ч lembra a forma do número 4 e pronuncia-se 'TCH' como em 'Tchau'."
                },
                {
                    q: "Como diferenciar visualmente a letra Ш da letra Щ?",
                    options: ["A letra Щ possui um rabo/gancho no canto inferior direito", "Ш é redonda e Щ é quadrada", "Щ tem duas barras", "Não há diferença"],
                    correctIndex: 0,
                    explanation: "Щ é a versão suave com gancho inferior no canto direito."
                },
                {
                    q: "Qual letra representa o som de 'TS' como em 'Tsunami' ou 'Tsar'?",
                    options: ["Ц", "Ч", "Ж", "Ш"],
                    correctIndex: 0,
                    explanation: "A letra Ц representa o som de TS."
                },
                {
                    q: "A famosa sopa russa 'Борщ' termina com qual letra sibilante suave?",
                    options: ["Щ", "Ш", "Ц", "Ж"],
                    correctIndex: 0,
                    explanation: "Борщ termina com Щ (Shch)."
                },
                {
                    q: "Como se traduz a palavra 'Школа'?",
                    options: ["Escola", "Revista", "Relógio", "Sopa"],
                    correctIndex: 0,
                    explanation: "Школа (Shkóla) significa Escola."
                }
            ]
        },

        {
            id: 5,
            title: "Módulo 5: Vogal Gutural e Sinais Mutos",
            desc: "Aprenda a pronúncia da vogal gutural Ы e descubra a função essencial dos Sinais Mutos: Sinal Suave (Ь) e Sinal Duro (Ъ)!",
            badge: "3 Letras",
            chars: [
                {
                    char: "Ы ы",
                    romaji: "Y",
                    type: "Vogal",
                    mnemonic: "Parece um 'b' conectado a um 'i'! É a vogal gutural russa emitida com a língua no fundo da boca.",
                    stroke: "1 haste curta com barriga + 1 haste vertical paralela separada."
                },
                {
                    char: "Ъ ъ",
                    romaji: "[ Hard Sign ]",
                    type: "Sinal Muto",
                    mnemonic: "🚫 SINAL DURO (Sem som próprio!): Impede que a consoante anterior se funda com a vogal seguinte.",
                    stroke: "1 pequeno traço horizontal superior esquerdo + haste com barriga inferior."
                },
                {
                    char: "Ь ь",
                    romaji: "[ Soft Sign ]",
                    type: "Sinal Muto",
                    mnemonic: "🌸 SINAL SUAVE (Sem som próprio!): Suaviza e palataliza a consoante que vem logo antes dele.",
                    stroke: "1 haste vertical + 1 barriga inferior direita (parece um 'b' minúsculo)."
                }
            ],
            vocab: [
                { word: "Сыр", romaji: "Syr", meaning: "Queijo" },
                { word: "Объект", romaji: "Abyékt", meaning: "Objeto" },
                { word: "Мать", romaji: "Mat'", meaning: "Mãe (forma solene)" }
            ],
            quiz: [
                {
                    q: "O Sinal Suave (Ь) possui som próprio quando lido em uma palavra?",
                    options: ["Não! Ele apenas suaviza/palataliza a consoante anterior", "Sim, tem som de I", "Sim, tem som de E", "Sim, tem som de U"],
                    correctIndex: 0,
                    explanation: "Sinais mutos não possuem som vocal isolado; Ь apenas amacia a consoante anterior."
                },
                {
                    q: "Qual é a função gramatical do Sinal Duro (Ъ)?",
                    options: ["Impede a fusão da consoante anterior com a vogal seguinte", "Torna a vogal mais longa", "Muda o tom da voz", "Indica pergunta"],
                    correctIndex: 0,
                    explanation: "Ъ atua como uma barreira de separação fonética entre a consoante e a vogal."
                },
                {
                    q: "Como se pronuncia a vogal Ы em 'Сыр' (Queijo)?",
                    options: ["Som de 'I' gutural emitido no fundo da garganta", "Som de A", "Som de U", "Som mudo"],
                    correctIndex: 0,
                    explanation: "Ы é uma vogal central/gutural alta característica do russo."
                },
                {
                    q: "Como se traduz a palavra 'Сыр'?",
                    options: ["Queijo", "Mãe", "Objeto", "Leite"],
                    correctIndex: 0,
                    explanation: "Сыр (Syr) significa Queijo."
                },
                {
                    q: "Qual das palavras contém o Sinal Duro (Ъ)?",
                    options: ["Объект", "Мать", "Сыр", "Школа"],
                    correctIndex: 0,
                    explanation: "Объект (Abyékt) usa Ъ após o prefixo Об-."
                },
                {
                    q: "Entre as 33 letras do alfabeto cirílico, quantas letras são SINAIS MUTOS?",
                    options: ["Exatamente 2 letras (Ъ e Ь)", "1 letra", "3 letras", "Nenhuma"],
                    correctIndex: 0,
                    explanation: "Existem 2 sinais mutos: Ъ (sinal duro) e Ь (sinal suave)."
                }
            ]
        },

        {
            id: 6,
            title: "Módulo 6: Tabela Interativa Completa do Alfabeto Cirílico (33 Letras)",
            desc: "Central de referência e consolidação do Alfabeto Cirílico. Explore todas as 33 letras com filtros por categoria, pronúncias e treino motor no Canvas!",
            badge: "33 Letras",
            isFullTable: true,
            alphabet: [
                { char: "А а", name: "Ah", type: "Vogal", romaji: "A", example: "Автобус", meaning: "Ônibus" },
                { char: "Б б", name: "Beh", type: "Consoante", romaji: "B", example: "Бабушка", meaning: "Avó" },
                { char: "В в", name: "Veh", type: "Consoante", romaji: "V", example: "Вода", meaning: "Água" },
                { char: "Г г", name: "Geh", type: "Consoante", romaji: "G", example: "Город", meaning: "Cidade" },
                { char: "Д д", name: "Deh", type: "Consoante", romaji: "D", example: "Дом", meaning: "Casa" },
                { char: "Е е", name: "Yeh", type: "Vogal", romaji: "YE", example: "Если", meaning: "Se" },
                { char: "Ё ё", name: "Yoh", type: "Vogal", romaji: "YO", example: "Ёлка", meaning: "Árvore de Natal" },
                { char: "Ж ж", name: "Zheh", type: "Consoante", romaji: "ZH", example: "Журнал", meaning: "Revista" },
                { char: "З з", name: "Zeh", type: "Consoante", romaji: "Z", example: "Зима", meaning: "Inverno" },
                { char: "И и", name: "Ee", type: "Vogal", romaji: "I", example: "Имя", meaning: "Nome" },
                { char: "Й й", name: "I curto", type: "Consoante", romaji: "Y", example: "Чай", meaning: "Chá" },
                { char: "К к", name: "Kah", type: "Consoante", romaji: "K", example: "Кот", meaning: "Gato" },
                { char: "Л л", name: "El", type: "Consoante", romaji: "L", example: "Лимон", meaning: "Limão" },
                { char: "М м", name: "Em", type: "Consoante", romaji: "M", example: "Мама", meaning: "Mãe" },
                { char: "Н н", name: "En", type: "Consoante", romaji: "N", example: "Нос", meaning: "Nariz" },
                { char: "О о", name: "Oh", type: "Vogal", romaji: "O", example: "Окно", meaning: "Janela" },
                { char: "П п", name: "Peh", type: "Consoante", romaji: "P", example: "Привет", meaning: "Olá" },
                { char: "Р р", name: "Er", type: "Consoante", romaji: "R", example: "Ресторан", meaning: "Restaurante" },
                { char: "С с", name: "Es", type: "Consoante", romaji: "S", example: "Сок", meaning: "Suco" },
                { char: "Т т", name: "Teh", type: "Consoante", romaji: "T", example: "Такси", meaning: "Táxi" },
                { char: "У у", name: "Oo", type: "Vogal", romaji: "U", example: "Утро", meaning: "Manhã" },
                { char: "Ф ф", name: "Ef", type: "Consoante", romaji: "F", example: "Фото", meaning: "Foto" },
                { char: "Х х", name: "Kha", type: "Consoante", romaji: "KH", example: "Хлеб", meaning: "Pão" },
                { char: "Ц ц", name: "Tseh", type: "Consoante", romaji: "TS", example: "Царь", meaning: "Tsar" },
                { char: "Ч ч", name: "Cheh", type: "Consoante", romaji: "CH", example: "Часы", meaning: "Relógio" },
                { char: "Ш ш", name: "Shah", type: "Consoante", romaji: "SH", example: "Школа", meaning: "Escola" },
                { char: "Щ щ", name: "Shchah", type: "Consoante", romaji: "SHCH", example: "Борщ", meaning: "Borsch" },
                { char: "Ъ ъ", name: "Sinal Duro", type: "Sinal Muto", romaji: "-", example: "Объект", meaning: "Objeto" },
                { char: "Ы ы", name: "Yh", type: "Vogal", romaji: "Y", example: "Сыр", meaning: "Queijo" },
                { char: "Ь ь", name: "Sinal Suave", type: "Sinal Muto", romaji: "'", example: "Мать", meaning: "Mãe" },
                { char: "Э э", name: "Eh", type: "Vogal", romaji: "E", example: "Это", meaning: "Isto" },
                { char: "Ю ю", name: "Yoo", type: "Vogal", romaji: "YU", example: "Юг", meaning: "Sul" },
                { char: "Я я", name: "Yah", type: "Vogal", romaji: "YA", example: "Яблоко", meaning: "Maçã" }
            ],
            quiz: [
                {
                    q: "Quantas letras compõem o Alfabeto Cirílico completo em russo?",
                    options: ["33 letras", "26 letras", "40 letras", "30 letras"],
                    correctIndex: 0,
                    explanation: "O alfabeto russo cirílico moderno é composto por exatamente 33 letras (10 vogais, 21 consoantes e 2 sinais mutos)."
                },
                {
                    q: "Quantas VOGAIS existem no alfabeto cirílico?",
                    options: ["10 vogais (А, Е, Ё, И, О, У, Ы, Э, Ю, Я)", "5 vogais", "12 vogais", "8 vogais"],
                    correctIndex: 0,
                    explanation: "Existem 10 vogais no alfabeto cirílico."
                },
                {
                    q: "Qual letra é a ÚLTIMA do alfabeto cirílico russo?",
                    options: ["Я (Yah)", "А", "Ъ", "Ш"],
                    correctIndex: 0,
                    explanation: "O alfabeto cirílico vai de А a Я!"
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DADOS_RUSSO_CIRILICO };
}
