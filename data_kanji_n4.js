// ==========================================
// JAPÃO ACADEMY - DADOS DO CURSO KANJI N4 (COM REGRAS DE GRAMÁTICA N4 E 10 QUESTÕES POR MÓDULO)
// ==========================================

const kanjiN4Data = [
  {
    module: 1,
    title: "Módulo 1: Família e Relacionamentos",
    description: "Vocabulário e ideogramas para laços familiares, pessoas e convivência.",
    grammar: {
      title: "Tratamento Familiar (ウチ vs ソト) & Partícula ～と一緒に",
      explanation: "No Japão (nível N4), usa-se um vocabulário humilde para a SUA própria família (ウチ - Uchi: 夫 *otto*, 妻 *tsuma*, 兄 *ani*) e termos de respeito para a família de OUTRA PESSOA (ソト - Soto: ご主人 *goshujin*, 奥さん *okusan*, お兄さん *oniisan*). A partícula ～と一緒に (to issho ni) expressa 'junto com alguém'.",
      example: "友達と一緒に家族の写真を見ました。",
      translation: "Olhei as fotos da família junto com meu amigo."
    },
    kanjis: [
      {
        character: "親",
        meaning: "Pais / Parentes / Intimidade",
        kunyomi: "おや (oya) / した・しい (shita-shii)",
        onyomi: "シン (SHIN)",
        mnemonic: "Ver (見) os pais de cima de uma árvore (木) com carinho.",
        examples: [
          { word: "両親 (ryoushin)", wordMeaning: "Ambos os pais", sentence: "両親と一緒に住んでいます。", sentenceMeaning: "Moro junto com meus pais." },
          { word: "親切 (shinsetsu)", wordMeaning: "Gentil / Atencioso", sentence: "彼はとても親切な人です。", sentenceMeaning: "Ele é uma pessoa muito gentil." }
        ]
      },
      {
        character: "族",
        meaning: "Tribo / Família / Clan",
        kunyomi: "zoku (conceito)",
        onyomi: "ゾク (ZOKU)",
        mnemonic: "Uma bandeira 🚩 sob a qual uma família inteira se une com flechas.",
        examples: [
          { word: "家族 (kazoku)", wordMeaning: "Família", sentence: "私の家族は４人です。", sentenceMeaning: "Minha família tem 4 pessoas." }
        ]
      },
      {
        character: "兄",
        meaning: "Irmão Mais Velho",
        kunyomi: "あに (ani) / おにいさん (oniisan)",
        onyomi: "ケイ (KEI) / キョウ (KYOU)",
        mnemonic: "Uma pessoa com uma boca grande (口) falando como irmão mais velho.",
        examples: [
          { word: "お兄さん (oniisan)", wordMeaning: "Irmão mais velho (de alguém)", sentence: "お兄さんは学生ですか。", sentenceMeaning: "O seu irmão mais velho é estudante?" }
        ]
      },
      {
        character: "姉",
        meaning: "Irmã Mais Velha",
        kunyomi: "あね (ane) / おねえさん (oneesan)",
        onyomi: "シ (SHI)",
        mnemonic: "Mulher (女) que nasceu na cidade (市) antes da irmã.",
        examples: [
          { word: "姉 (ane)", wordMeaning: "Minha irmã mais velha", sentence: "姉は東京に住んでいます。", sentenceMeaning: "Minha irmã mais velha mora em Tóquio." }
        ]
      },
      {
        character: "弟",
        meaning: "Irmão Mais Novo",
        kunyomi: "おとうと (otouto)",
        onyomi: "テイ (TEI) / ダイ (DAI)",
        mnemonic: "Corda enrolada num mastro como o irmão mais novo brincando.",
        examples: [
          { word: "弟 (otouto)", wordMeaning: "Irmão mais novo", sentence: "弟はサッカーが好きです。", sentenceMeaning: "Meu irmão mais novo gosta de futebol." }
        ]
      },
      {
        character: "妹",
        meaning: "Irmã Mais Nova",
        kunyomi: "いもうと (imouto)",
        onyomi: "マイ (MAI)",
        mnemonic: "Mulher (女) ainda não (未) totalmente adulta.",
        examples: [
          { word: "妹 (imouto)", wordMeaning: "Irmã mais nova", sentence: "妹は高校生です。", sentenceMeaning: "Minha irmã mais nova é aluna do ensino médio." }
        ]
      },
      {
        character: "主",
        meaning: "Senhor / Principal / Marido",
        kunyomi: "ぬし (nushi) / おも (omo)",
        onyomi: "シュ (SHU)",
        mnemonic: "Chama de uma vela no castiçal representando a autoridade principal.",
        examples: [
          { word: "ご主人 (goshujin)", wordMeaning: "Marido (de outra pessoa)", sentence: "ご主人はお元気ですか。", sentenceMeaning: "Seu marido está bem?" }
        ]
      },
      {
        character: "夫",
        meaning: "Marido / Homem Adulto",
        kunyomi: "おっと (otto)",
        onyomi: "フ (FU) / フウ (FUU)",
        mnemonic: "Pessoa com um traço no topo representando o chapéu de casado.",
        examples: [
          { word: "夫 (otto)", wordMeaning: "Meu marido", sentence: "夫は会社員です。", sentenceMeaning: "Meu marido é funcionário de uma empresa." }
        ]
      },
      {
        character: "妻",
        meaning: "Esposa",
        kunyomi: "つま (tsuma)",
        onyomi: "サイ (SAI)",
        mnemonic: "Mulher (女) segurando uma vassoura cuidando do lar.",
        examples: [
          { word: "妻 (tsuma)", wordMeaning: "Minha esposa", sentence: "妻と旅行に行きました。", sentenceMeaning: "Fui viajar com minha esposa." }
        ]
      },
      {
        character: "彼",
        meaning: "Ele / Namorado",
        kunyomi: "かれ (kare) / かの (kano)",
        onyomi: "ヒ (HI)",
        mnemonic: "Pessoa que caminha apontando para aquele homem ali.",
        examples: [
          { word: "彼 (kare)", wordMeaning: "Ele", sentence: "彼は日本語が上手です。", sentenceMeaning: "Ele é bom em japonês." },
          { word: "彼女 (kanojo)", wordMeaning: "Ela / Namorada", sentence: "彼女は本を読んでいます。", sentenceMeaning: "Ela está lendo um livro." }
        ]
      }
    ],
    quiz: [
      { type: "typing", q: "Digite a leitura Kunyomi de 親 (Pais):", a: "oya" },
      { type: "typing", q: "Digite em romaji a palavra 家族 (Família):", a: "kazoku" },
      { type: "typing", q: "Digite a leitura Kunyomi de 妻 (Esposa):", a: "tsuma" },
      { type: "typing", q: "Digite em romaji a palavra 弟 (Irmão Mais Novo):", a: "otouto" },
      { type: "typing", q: "Digite a leitura em romaji da palavra 彼女 (Ela/Namorada):", a: "kanojo" },
      { type: "choice", q: "Qual é a leitura de 親切 (Gentil)?", options: ["しんせつ (shinsetsu)", "りょうしん (ryoushin)", "かぞく (kazoku)", "おや (oya)"], a: "しんせつ (shinsetsu)" },
      { type: "choice", q: "Qual Kanji representa 'Irmã Mais Velha'?", options: ["姉", "妹", "兄", "弟"], a: "姉" },
      { type: "choice", q: "O termo ご主人 (goshujin) refere-se a:", options: ["Marido de outra pessoa", "Esposa", "Filho", "Irmão"], a: "Marido de outra pessoa" },
      { type: "choice", q: "Qual o significado do Kanji 夫?", options: ["Marido / Homem Adulto", "Esposa", "Mãe", "Pai"], a: "Marido / Homem Adulto" },
      { type: "choice", q: "O ideograma 彼 em 彼女 (kanojo) significa:", options: ["Ele / Aquele homem", "Mulher", "Criança", "Velho"], a: "Ele / Aquele homem" }
    ]
  },
  {
    module: 2,
    title: "Módulo 2: Tempo, Estações e Frequência",
    description: "Ideogramas para as estações do ano, partes do dia e marcador de dias.",
    grammar: {
      title: "Marcadores Temporais ～ときに (Quando) & ～ために (Para)",
      explanation: "No N4, usa-se a forma simples + とき(に) para indicar 'Quando [ação ocorre]'. A estrutura ～ために (tame ni) expressa propósito/finalidade em ações com marcação temporal.",
      example: "夏休みになると、海に行くために準備をします。",
      translation: "Quando chegam as férias de verão, me preparo para ir à praia."
    },
    kanjis: [
      { character: "春", meaning: "Primavera", kunyomi: "はる (haru)", onyomi: "シュン (SHUN)", mnemonic: "O sol (日) brilhando forte sob as plantas.", examples: [{ word: "春 (haru)", wordMeaning: "Primavera", sentence: "春には桜が咲きます。", sentenceMeaning: "Na primavera as cerejeiras florescem." }] },
      { character: "夏", meaning: "Verão", kunyomi: "なつ (natsu)", onyomi: "カ (KA)", mnemonic: "Pessoa dançando com pernas ágeis no calor.", examples: [{ word: "夏休み (natsuyasumi)", wordMeaning: "Férias de verão", sentence: "夏休みに海へ行きます。", sentenceMeaning: "Vou à praia nas férias de verão." }] },
      { character: "秋", meaning: "Outono", kunyomi: "あき (aki)", onyomi: "シュウ (SHUU)", mnemonic: "Grãos (禾) vermelhos como fogo (火) no outono.", examples: [{ word: "秋 (aki)", wordMeaning: "Outono", sentence: "秋は果物が美味しいです。", sentenceMeaning: "As frutas são gostosas no outono." }] },
      { character: "冬", meaning: "Inverno", kunyomi: "ふゆ (fuyu)", onyomi: "トウ (TOU)", mnemonic: "Gotas de gelo caindo ao final da caminhada.", examples: [{ word: "冬 (fuyu)", wordMeaning: "Inverno", sentence: "冬はとても寒いです。", sentenceMeaning: "O inverno é muito frio." }] },
      { character: "朝", meaning: "Manhã", kunyomi: "あさ (asa)", onyomi: "チョウ (CHOU)", mnemonic: "O sol nascendo no horizonte com a lua de manhã.", examples: [{ word: "今朝 (kesa)", wordMeaning: "Esta manhã", sentence: "今朝は６時に起きました。", sentenceMeaning: "Esta manhã acordei às 6h." }] },
      { character: "昼", meaning: "Tarde / Meio-dia", kunyomi: "ひる (hiru)", onyomi: "チュウ (CHUU)", mnemonic: "O sol (日) no ponto mais alto cobrindo o dia.", examples: [{ word: "昼ご飯 (hirugohan)", wordMeaning: "Almoço", sentence: "昼ご飯を食べましょう。", sentenceMeaning: "Vamos almoçar." }] },
      { character: "夜", meaning: "Noite", kunyomi: "よる (yoru)", onyomi: "ヤ (YA)", mnemonic: "Pessoa caminhando sob a lua noturna.", examples: [{ word: "夜 (yoru)", wordMeaning: "Noite", sentence: "夜９時に寝ます。", sentenceMeaning: "Vou dormir às 9h da noite." }] },
      { character: "夕", meaning: "Entardecer", kunyomi: "ゆう (yuu)", onyomi: "セキ (SEKI)", mnemonic: "A lua (月) aparecendo pela metade ao pôr do sol.", examples: [{ word: "夕方 (yuugata)", wordMeaning: "Fim da tarde", sentence: "夕方に雨が降りました。", sentenceMeaning: "Choveu no fim da tarde." }] },
      { character: "曜", meaning: "Dia da Semana", kunyomi: "you", onyomi: "ヨウ (YOU)", mnemonic: "O sol (日) brilhando a cada dia da semana.", examples: [{ word: "何曜日 (nanyoubi)", wordMeaning: "Qual dia da semana?", sentence: "今日は何曜日ですか。", sentenceMeaning: "Que dia da semana é hoje?" }] },
      { character: "止", meaning: "Parar", kunyomi: "と・まる (tomaru)", onyomi: "シ (SHI)", mnemonic: "Pegada firme no chão para parar.", examples: [{ word: "止まる (tomaru)", wordMeaning: "Parar", sentence: "バスが止まりました。", sentenceMeaning: "O ônibus parou." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite a leitura de 春 (Primavera):", a: "haru" },
      { type: "typing", q: "Digite em romaji a palavra 夏 (Verão):", a: "natsu" },
      { type: "typing", q: "Digite em romaji a leitura de 今朝 (Esta manhã):", a: "kesa" },
      { type: "typing", q: "Digite a leitura Kunyomi de 夜 (Noite):", a: "yoru" },
      { type: "typing", q: "Digite em romaji o verbo 止まる (Parar):", a: "tomaru" },
      { type: "choice", q: "Qual o Kanji de 'Inverno'?", options: ["冬", "春", "夏", "秋"], a: "冬" },
      { type: "choice", q: "A expressão 昼ご飯 (hirugohan) significa:", options: ["Almoço", "Café da manhã", "Jantar", "Lanche"], a: "Almoço" },
      { type: "choice", q: "Qual o significado de 夕方 (yuugata)?", options: ["Fim da tarde", "Manhã cedo", "Meia-noite", "Madrugada"], a: "Fim da tarde" },
      { type: "choice", q: "O Kanji 曜 em 何曜日 indica:", options: ["Dia da semana", "Mês", "Ano", "Hora"], a: "Dia da semana" },
      { type: "choice", q: "Qual o Kunyomi de 秋 (Outono)?", options: ["あき (aki)", "はる (haru)", "なつ (natsu)", "ふゆ (fuyu)"], a: "あき (aki)" }
    ]
  },
  {
    module: 3,
    title: "Módulo 3: Geografia e Natureza",
    description: "Ideogramas de paisagens naturais, oceanos, ilhas e fenômenos climáticos.",
    grammar: {
      title: "Condicional ～たら (Se / Quando) & Comparativo ～より / ～ほうが",
      explanation: "Use a forma condicional N4 ～たら (Verbo no passado た + ら) para expressar condições na natureza e viagens ('Se for ao mar...'). Para comparações, use A は B より... (A é mais ... que B).",
      example: "海へ行ったら、山より広い景色が見られます。",
      translation: "Se você for ao mar, poderá ver uma paisagem mais ampla que a montanha."
    },
    kanjis: [
      { character: "地", meaning: "Terra / Solo", kunyomi: "ji / chi", onyomi: "チ (CHI)", mnemonic: "Terra (土) onde seres habitam.", examples: [{ word: "地下鉄 (chikatetsu)", wordMeaning: "Metrô", sentence: "地下鉄に乗ります。", sentenceMeaning: "Vou pegar o metrô." }] },
      { character: "池", meaning: "Lagoa", kunyomi: "いけ (ike)", onyomi: "チ (CHI)", mnemonic: "Água (水) acumulada no solo.", examples: [{ word: "池 (ike)", wordMeaning: "Lagoa", sentence: "池に魚がいます。", sentenceMeaning: "Há peixes na lagoa." }] },
      { character: "海", meaning: "Mar", kunyomi: "うみ (umi)", onyomi: "カイ (KAI)", mnemonic: "Água (水) onde cada pessoa nasce.", examples: [{ word: "海外 (kaigai)", wordMeaning: "Exterior", sentence: "海外旅行に行きたいです。", sentenceMeaning: "Quero viajar para o exterior." }] },
      { character: "界", meaning: "Mundo", kunyomi: "kai", onyomi: "カイ (KAI)", mnemonic: "Campos de arroz (田) delimitados.", examples: [{ word: "世界 (sekai)", wordMeaning: "Mundo", sentence: "世界は広いですね。", sentenceMeaning: "O mundo é grande." }] },
      { character: "島", meaning: "Ilha", kunyomi: "しま (shima)", onyomi: "トウ (TOU)", mnemonic: "Pássaro (鳥) pousado na montanha (山) no mar.", examples: [{ word: "島 (shima)", wordMeaning: "Ilha", sentence: "日本は島国です。", sentenceMeaning: "O Japão é um país insular." }] },
      { character: "野", meaning: "Campo", kunyomi: "の (no)", onyomi: "ヤ (YA)", mnemonic: "Vila perto da terra cultivada.", examples: [{ word: "野菜 (yasai)", wordMeaning: "Verdura", sentence: "毎日野菜を食べます。", sentenceMeaning: "Como verduras todos os dias." }] },
      { character: "原", meaning: "Origem / Campo", kunyomi: "はら (hara)", onyomi: "ゲン (GEN)", mnemonic: "Nascente de água saindo do penhasco.", examples: [{ word: "秋葉原 (Akihabara)", wordMeaning: "Akihabara", sentence: "秋葉原に行きます。", sentenceMeaning: "Vou a Akihabara." }] },
      { character: "森", meaning: "Floresta Densa", kunyomi: "もり (mori)", onyomi: "シン (SHIN)", mnemonic: "Três árvores (木木木) formando uma floresta.", examples: [{ word: "森 (mori)", wordMeaning: "Floresta", sentence: "森の中を歩きます。", sentenceMeaning: "Caminho na floresta." }] },
      { character: "林", meaning: "Bosque", kunyomi: "はやし (hayashi)", onyomi: "リン (RIN)", mnemonic: "Duas árvores (木木) formando um bosque.", examples: [{ word: "林 (hayashi)", wordMeaning: "Bosque", sentence: "静かな林です。", sentenceMeaning: "É um bosque silencioso." }] },
      { character: "風", meaning: "Vento", kunyomi: "かぜ (kaze)", onyomi: "フウ (FUU)", mnemonic: "Insetos sendo carregados pelas rajadas de ar.", examples: [{ word: "風 (kaze)", wordMeaning: "Vento", sentence: "風が強いです。", sentenceMeaning: "O vento está forte." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite em romaji a leitura de 海 (Mar):", a: "umi" },
      { type: "typing", q: "Digite em romaji a leitura de 野菜 (Verduras):", a: "yasai" },
      { type: "typing", q: "Digite em romaji a leitura de 世界 (Mundo):", a: "sekai" },
      { type: "typing", q: "Digite o Kunyomi de 森 (Floresta):", a: "mori" },
      { type: "typing", q: "Digite em romaji a palavra 風 (Vento):", a: "kaze" },
      { type: "choice", q: "Qual a palavra para 'Metrô'?", options: ["地下鉄 (chikatetsu)", "新幹線 (shinkansen)", "自転車 (jitensha)", "飛行機 (hikouki)"], a: "地下鉄 (chikatetsu)" },
      { type: "choice", q: "Qual o Kanji de 'Ilha' em 島国?", options: ["島", "海", "池", "原"], a: "島" },
      { type: "choice", q: "Diferença visual entre 林 e 森:", options: ["林 tem 2 árvores; 森 tem 3 árvores", "林 é mar e 森 é campo", "São idênticos", "Nenhuma"], a: "林 tem 2 árvores; 森 tem 3 árvores" },
      { type: "choice", q: "Qual o significado de 海外 (kaigai)?", options: ["Exterior / Outros países", "Praia", "Montanha", "Lagoa"], a: "Exterior / Outros países" },
      { type: "choice", q: "O Kanji 池 em 池 (ike) representa:", options: ["Lagoa / Lago pequeno", "Rio grande", "Mar aberto", "Cachoeira"], a: "Lagoa / Lago pequeno" }
    ]
  },
  {
    module: 4,
    title: "Módulo 4: Direções e Posições",
    description: "Pontos cardeais, posições espaciais e proximidade.",
    grammar: {
      title: "Deslocamento Direcional ～へ向かって & Proximidade ～の近くに",
      explanation: "O verbo 向かう (mukau - virar-se / dirigir-se) junta-se à partícula へ para indicar caminhada direcional. A estrutura Place + の近くに indica algo localizado nas proximidades.",
      example: "駅に向かって歩くと、東京タワーの近くに着きます。",
      translation: "Caminhando em direção à estação, você chega perto da Torre de Tóquio."
    },
    kanjis: [
      { character: "方", meaning: "Direção", kunyomi: "かた (kata)", onyomi: "ホウ (HOU)", mnemonic: "Bússola apontando a direção.", examples: [{ word: "夕方 (yuugata)", wordMeaning: "Fim da tarde", sentence: "夕方に会いましょう。", sentenceMeaning: "Encontro no fim da tarde." }] },
      { character: "偏", meaning: "Inclinado", kunyomi: "katamuku", onyomi: "ヘン (HEN)", mnemonic: "Pessoa inclinada.", examples: [{ word: "偏見 (henken)", wordMeaning: "Preconceito", sentence: "偏見はありません。", sentenceMeaning: "Não há preconceito." }] },
      { character: "側", meaning: "Lado / Lateral", kunyomi: "gawa", onyomi: "ソク (SOKU)", mnemonic: "Pessoa ao lado da parede.", examples: [{ word: "右側 (migigawa)", wordMeaning: "Lado direito", sentence: "右側を歩きます。", sentenceMeaning: "Ando pelo lado direito." }] },
      { character: "東", meaning: "Leste", kunyomi: "ひがし (higashi)", onyomi: "トウ (TOU)", mnemonic: "Sol nascendo atrás da árvore no Leste.", examples: [{ word: "東京 (Toukyou)", wordMeaning: "Tóquio", sentence: "東京へ行きます。", sentenceMeaning: "Vou a Tóquio." }] },
      { character: "西", meaning: "Oeste", kunyomi: "にし (nishi)", onyomi: "セイ (SEI)", mnemonic: "Ninho ao pôr do sol no Oeste.", examples: [{ word: "西洋 (seiyou)", wordMeaning: "Ocidente", sentence: "西洋文化です。", sentenceMeaning: "Cultura ocidental." }] },
      { character: "南", meaning: "Sul", kunyomi: "みなみ (minami)", onyomi: "ナン (NAN)", mnemonic: "Casa de campo no Sul.", examples: [{ word: "南 (minami)", wordMeaning: "Sul", sentence: "南の島です。", sentenceMeaning: "Ilha do sul." }] },
      { character: "北", meaning: "Norte", kunyomi: "きた (kita)", onyomi: "ホク (HOKU)", mnemonic: "Pessoas de costas no frio do Norte.", examples: [{ word: "北海道 (Hokkaidou)", wordMeaning: "Hokkaido", sentence: "北海道は寒いです。", sentenceMeaning: "Hokkaido é frio." }] },
      { character: "向", meaning: "Virar-se", kunyomi: "む・かう (mukau)", onyomi: "コウ (KOU)", mnemonic: "Boca virada para a janela.", examples: [{ word: "向かう (mukau)", wordMeaning: "Dirigir-se a", sentence: "駅に向かいます。", sentenceMeaning: "Vou em direção à estação." }] },
      { character: "近", meaning: "Perto", kunyomi: "ちか・い (chikai)", onyomi: "キン (KIN)", mnemonic: "Caminhar pouco até perto.", examples: [{ word: "近く (chikaku)", wordMeaning: "Perto", sentence: "家は近いです。", sentenceMeaning: "A casa é perto." }] },
      { character: "遠", meaning: "Longe", kunyomi: "とお・い (tooi)", onyomi: "エン (EN)", mnemonic: "Caminhada longa até longe.", examples: [{ word: "遠い (tooi)", wordMeaning: "Longe", sentence: "学校は遠いです。", sentenceMeaning: "A escola é longe." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite o Kunyomi de 東 (Leste):", a: "higashi" },
      { type: "typing", q: "Digite em romaji o Kunyomi de 西 (Oeste):", a: "nishi" },
      { type: "typing", q: "Digite a leitura Kunyomi de 南 (Sul):", a: "minami" },
      { type: "typing", q: "Digite em romaji a leitura de 近い (Perto):", a: "chikai" },
      { type: "typing", q: "Digite a leitura de 遠い (Longe):", a: "tooi" },
      { type: "choice", q: "Qual o Kanji de Leste em 東京 (Toukyou)?", options: ["東", "西", "南", "北"], a: "東" },
      { type: "choice", q: "Qual o Kanji de Norte em 北海道?", options: ["北", "南", "東", "西"], a: "北" },
      { type: "choice", q: "Qual a tradução de 右側 (migigawa)?", options: ["Lado direito", "Lado esquerdo", "Frente", "Atrás"], a: "Lado direito" },
      { type: "choice", q: "O oposto de 近く (Perto) é:", options: ["遠く (Tooku)", "高く (Takaku)", "広々 (Hirohiro)", "早め (Hayame)"], a: "遠く (Tooku)" },
      { type: "choice", q: "O Kanji 向 em 向かう significa:", options: ["Dirigir-se a / Virar-se", "Parar", "Correr", "Subir"], a: "Dirigir-se a / Virar-se" }
    ]
  },
  {
    module: 5,
    title: "Módulo 5: Casa e Ambientes",
    description: "Locais, cômodos, salas, estabelecimentos e construções.",
    grammar: {
      title: "Verbos de Dádiva (～てもらう) & Estado Contínuo (～てある)",
      explanation: "A estrutura Verb(て) + もらう indica que se recebeu o favor de alguém fazer algo. A estrutura Verb(て) + ある expressa que um estado foi preparado conscientemente (ex: a porta está fechada de propósito).",
      example: "戸が閉めてあります。母に新しい部屋を作ってもらいました。",
      translation: "A porta foi deixada fechada. Recebi o favor da minha mãe de me fazer um novo quarto."
    },
    kanjis: [
      { character: "家", meaning: "Casa", kunyomi: "いえ (ie) / うち", onyomi: "カ (KA)", mnemonic: "Teto cobrindo o lar.", examples: [{ word: "家族 (kazoku)", wordMeaning: "Família", sentence: "家へ帰ります。", sentenceMeaning: "Volto para casa." }] },
      { character: "房", meaning: "Quarto / Cômodo", kunyomi: "fusa", onyomi: "ボウ (BOU)", mnemonic: "Porta para o quarto.", examples: [{ word: "暖房 (danbou)", wordMeaning: "Aquecedor", sentence: "暖房をつけます。", sentenceMeaning: "Ligo o aquecedor." }] },
      { character: "室", meaning: "Sala", kunyomi: "shitsu", onyomi: "シツ (SHITSU)", mnemonic: "Teto do cômodo fechado.", examples: [{ word: "教室 (kyoushitsu)", wordMeaning: "Sala de aula", sentence: "教室にいます。", sentenceMeaning: "Estou na sala de aula." }] },
      { character: "堂", meaning: "Salão", kunyomi: "dou", onyomi: "ドウ (DOU)", mnemonic: "Construção em terreno elevado.", examples: [{ word: "食堂 (shokudou)", wordMeaning: "Refeitório", sentence: "食堂で食べます。", sentenceMeaning: "Como no refeitório." }] },
      { character: "宅", meaning: "Residência", kunyomi: "taku", onyomi: "タク (TAKU)", mnemonic: "Teto de residência formal.", examples: [{ word: "お宅 (otaku)", wordMeaning: "Sua residência", sentence: "お宅はどちらですか。", sentenceMeaning: "Onde é sua residência?" }] },
      { character: "局", meaning: "Repartição", kunyomi: "kyoku", onyomi: "キョク (KYOKU)", mnemonic: "Escritório de serviços públicos.", examples: [{ word: "郵便局 (yuubinkyoku)", wordMeaning: "Correios", sentence: "郵便局へ行きます。", sentenceMeaning: "Vou aos correios." }] },
      { character: "戸", meaning: "Porta", kunyomi: "と (to)", onyomi: "コ (KO)", mnemonic: "Folha de porta de madeira.", examples: [{ word: "戸 (to)", wordMeaning: "Porta", sentence: "戸を閉めます。", sentenceMeaning: "Fecho a porta." }] },
      { character: "所", meaning: "Lugar", kunyomi: "ところ (tokoro)", onyomi: "ショ (SHO)", mnemonic: "Lugar onde portas se encontram.", examples: [{ word: "場所 (basho)", wordMeaning: "Local", sentence: "いい所ですね。", sentenceMeaning: "Que lugar bom." }] },
      { character: "場", meaning: "Praça / Local", kunyomi: "ば (ba)", onyomi: "ジョウ (JOU)", mnemonic: "Terreno aberto com evento.", examples: [{ word: "広場 (hiroba)", wordMeaning: "Praça", sentence: "広場で会います。", sentenceMeaning: "Encontro na praça." }] },
      { character: "建", meaning: "Construir", kunyomi: "た・てる (tateru)", onyomi: "ケン (KEN)", mnemonic: "Prédio que se ergue.", examples: [{ word: "建物 (tatemono)", wordMeaning: "Prédio", sentence: "高い建物です。", sentenceMeaning: "É um prédio alto." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite em romaji a leitura de 家 (Casa):", a: "ie" },
      { type: "typing", q: "Digite a leitura de 教室 (Sala de aula):", a: "kyoushitsu" },
      { type: "typing", q: "Digite em romaji a palavra 郵便局 (Correios):", a: "yuubinkyoku" },
      { type: "typing", q: "Digite o Kunyomi de 戸 (Porta):", a: "to" },
      { type: "typing", q: "Digite em romaji a leitura de 建物 (Prédio):", a: "tatemono" },
      { type: "choice", q: "Qual a tradução de 食堂 (shokudou)?", options: ["Refeitório / Restaurante", "Biblioteca", "Quarto", "Banheiro"], a: "Refeitório / Restaurante" },
      { type: "choice", q: "O Kanji 場所 (basho) significa:", options: ["Lugar / Local", "Tempo", "Carro", "Pessoa"], a: "Lugar / Local" },
      { type: "choice", q: "Qual o significado de 暖房 (danbou)?", options: ["Aquecedor", "Ar condicionado", "Geladeira", "Janela"], a: "Aquecedor" },
      { type: "choice", q: "Qual o Kanji de 'Praça' em 広場?", options: ["場", "堂", "室", "局"], a: "場" },
      { type: "choice", q: "O termo お宅 (otaku) refere-se formalmente a:", options: ["Sua residência", "Seu trabalho", "Seu carro", "Sua escola"], a: "Sua residência" }
    ]
  },
  {
    module: 6,
    title: "Módulo 6: Estudos e Escola",
    description: "Aprendizado, exames, caracteres, idiomas e respostas.",
    grammar: {
      title: "Obrigação ～なければならない & Esforço Prático ～ようにする",
      explanation: "Para expressar dever ou obrigatoriedade em provas e estudos, usa-se a forma negativa sem い + ければならない ('Ter que fazer'). Para indicar determinação contínua em aprender, usa-se Verb(forma dicionário) + ようにする.",
      example: "試験のために、毎日漢字を覚えるようにしなければなりません。",
      translation: "Para a prova, tenho que me esforçar para memorizar os kanjis todos os dias."
    },
    kanjis: [
      { character: "校", meaning: "Escola", kunyomi: "kou", onyomi: "コウ (KOU)", mnemonic: "Construção de madeira escolar.", examples: [{ word: "学校 (gakkou)", wordMeaning: "Escola", sentence: "学校に行きます。", sentenceMeaning: "Vou à escola." }] },
      { character: "漢", meaning: "Han / Kanji", kunyomi: "kan", onyomi: "カン (KAN)", mnemonic: "Rio da terra de Han.", examples: [{ word: "漢字 (kanji)", wordMeaning: "Kanji", sentence: "漢字を書きます。", sentenceMeaning: "Escrevo kanji." }] },
      { character: "文", meaning: "Texto / Frase", kunyomi: "fumi", onyomi: "ブン (BUN)", mnemonic: "Desenho ornamental de texto.", examples: [{ word: "文学 (bungaku)", wordMeaning: "Literatura", sentence: "文学を学びます。", sentenceMeaning: "Estudo literatura." }] },
      { character: "字", meaning: "Letra", kunyomi: "ji", onyomi: "ジ (JI)", mnemonic: "Criança aprendendo letras.", examples: [{ word: "文字 (moji)", wordMeaning: "Caractere", sentence: "文字を読みます。", sentenceMeaning: "Leio o caractere." }] },
      { character: "工", meaning: "Engenharia", kunyomi: "kou", onyomi: "コウ (KOU)", mnemonic: "Viga estrutural.", examples: [{ word: "工学 (kougaku)", wordMeaning: "Engenharia", sentence: "工学の学生です。", sentenceMeaning: "Sou estudante de engenharia." }] },
      { character: "答", meaning: "Resposta", kunyomi: "こた・える (kotaeru)", onyomi: "トウ (TOU)", mnemonic: "Bambu dando resposta.", examples: [{ word: "答え (kotae)", wordMeaning: "Resposta", sentence: "答えを書きます。", sentenceMeaning: "Escrevo a resposta." }] },
      { character: "教", meaning: "Ensinar", kunyomi: "おし・える (oshieru)", onyomi: "キョウ (KYOU)", mnemonic: "Supervisão da criança.", examples: [{ word: "教える (oshieru)", wordMeaning: "Ensinar", sentence: "先生が教えます。", sentenceMeaning: "O professor ensina." }] },
      { character: "習", meaning: "Aprender / Praticar", kunyomi: "なら・う (narau)", onyomi: "シュウ (SHUU)", mnemonic: "Pássaro treinando asas.", examples: [{ word: "練習 (renshuu)", wordMeaning: "Treino", sentence: "練習します。", sentenceMeaning: "Faço treino." }] },
      { character: "考", meaning: "Pensar", kunyomi: "かんが・える (kangaeru)", onyomi: "コウ (KOU)", mnemonic: "Ancião refletindo.", examples: [{ word: "考える (kangaeru)", wordMeaning: "Pensar", sentence: "よく考えます。", sentenceMeaning: "Penso bem." }] },
      { character: "試", meaning: "Exame / Teste", kunyomi: "kokoromiru", onyomi: "シ (SHI)", mnemonic: "Palavras em exame.", examples: [{ word: "試験 (shiken)", wordMeaning: "Prova", sentence: "試験があります。", sentenceMeaning: "Tenho prova." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite em romaji a leitura de 学校 (Escola):", a: "gakkou" },
      { type: "typing", q: "Digite a leitura de 答え (Resposta):", a: "kotae" },
      { type: "typing", q: "Digite em romaji o verbo 教える (Ensinar):", a: "oshieru" },
      { type: "typing", q: "Digite a leitura de 練習 (Treino):", a: "renshuu" },
      { type: "typing", q: "Digite em romaji a palavra 試験 (Prova):", a: "shiken" },
      { type: "choice", q: "Qual o Kanji de 'Letra / Caractere' em 漢字?", options: ["字", "文", "工", "答"], a: "字" },
      { type: "choice", q: "Qual o significado de 文学 (bungaku)?", options: ["Literatura", "Matemática", "Física", "Química"], a: "Literatura" },
      { type: "choice", q: "O Kanji 考 em 考える significa:", options: ["Pensar / Considerar", "Correr", "Dormir", "Comer"], a: "Pensar / Considerar" },
      { type: "choice", q: "Qual a leitura Kunyomi de 習う?", options: ["ならう (narau)", "おしえる (oshieru)", "かんがえる (kangaeru)", "こたえる (kotaeru)"], a: "ならう (narau)" },
      { type: "choice", q: "Qual o Kanji de Engenharia em 工学?", options: ["工", "校", "漢", "試"], a: "工" }
    ]
  },
  {
    module: 7,
    title: "Módulo 7: Verbos de Movimento e Transporte",
    description: "Ações de deslocamento, transporte, caminhada e movimento.",
    grammar: {
      title: "Forma Potencial Verbal ～られる / ～れる (Conseguir fazer)",
      explanation: "No N4, os verbos de ação ganham a forma potencial para indicar capacidade ou oportunidade física (ex: 運転できる - conseguir dirigir; 乗れる - conseguir embarcar).",
      example: "自転車に乗れますが、車は運転できません。",
      translation: "Consigo andar de bicicleta, mas não consigo dirigir carro."
    },
    kanjis: [
      { character: "走", meaning: "Correr", kunyomi: "はし・る (hashiru)", onyomi: "ソウ (SOU)", mnemonic: "Pessoa correndo.", examples: [{ word: "走る (hashiru)", wordMeaning: "Correr", sentence: "速く走ります。", sentenceMeaning: "Corro rápido." }] },
      { character: "歩", meaning: "Andar", kunyomi: "ある・く (aruku)", onyomi: "ホ (HO)", mnemonic: "Pés caminhando.", examples: [{ word: "歩く (aruku)", wordMeaning: "Andar", sentence: "歩いて行きます。", sentenceMeaning: "Vou andando." }] },
      { character: "働", meaning: "Trabalhar", kunyomi: "はたら・く (hataraku)", onyomi: "ドウ (DOU)", mnemonic: "Pessoa com força em movimento.", examples: [{ word: "働く (hataraku)", wordMeaning: "Trabalhar", sentence: "会社で働きます。", sentenceMeaning: "Trabalho na empresa." }] },
      { character: "動", meaning: "Mover", kunyomi: "うご・く (ugoku)", onyomi: "ドウ (DOU)", mnemonic: "Objeto em movimento.", examples: [{ word: "自動車 (jidousha)", wordMeaning: "Automóvel", sentence: "自動車があります。", sentenceMeaning: "Há um automóvel." }] },
      { character: "運", meaning: "Transportar", kunyomi: "はこ・ぶ (hakobu)", onyomi: "ウン (UN)", mnemonic: "Veículo transportando carga.", examples: [{ word: "運転 (unten)", wordMeaning: "Dirigir", sentence: "運転します。", sentenceMeaning: "Vou dirigir." }] },
      { character: "転", meaning: "Girar", kunyomi: "korogaru", onyomi: "テン (TEN)", mnemonic: "Rodas girando.", examples: [{ word: "自転車 (jitensha)", wordMeaning: "Bicicleta", sentence: "自転車に乗ります。", sentenceMeaning: "Ando de bicicleta." }] },
      { character: "乗", meaning: "Embarcar", kunyomi: "の・る (noru)", onyomi: "ジョウ (JOU)", mnemonic: "Subir no veículo.", examples: [{ word: "乗る (noru)", wordMeaning: "Embarcar", sentence: "電車に乗ります。", sentenceMeaning: "Embarco no trem." }] },
      { character: "降", meaning: "Descer", kunyomi: "お・りる (oriru)", onyomi: "コウ (KOU)", mnemonic: "Descendo o penhasco.", examples: [{ word: "降りる (oriru)", wordMeaning: "Descer", sentence: "ここで降りきます。", sentenceMeaning: "Desço aqui." }] },
      { character: "通", meaning: "Passar", kunyomi: "とお・る (tooru)", onyomi: "ツウ (TSUU)", mnemonic: "Caminhada pela rota.", examples: [{ word: "通う (kayou)", wordMeaning: "Frequentar", sentence: "学校に通います。", sentenceMeaning: "Frequento a escola." }] },
      { character: "止", meaning: "Parar", kunyomi: "と・まる (tomaru)", onyomi: "シ (SHI)", mnemonic: "Pés parados.", examples: [{ word: "通行止め (tsuukoudome)", wordMeaning: "Trânsito impedido", sentence: "通行止めです。", sentenceMeaning: "Trânsito fechado." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite em romaji o verbo 走る (Correr):", a: "hashiru" },
      { type: "typing", q: "Digite a leitura de 歩く (Caminhar):", a: "aruku" },
      { type: "typing", q: "Digite em romaji o verbo 働く (Trabalhar):", a: "hataraku" },
      { type: "typing", q: "Digite a leitura de 自転車 (Bicicleta):", a: "jitensha" },
      { type: "typing", q: "Digite em romaji o verbo 乗る (Embarcar):", a: "noru" },
      { type: "choice", q: "Qual a tradução de 自動車 (jidousha)?", options: ["Automóvel / Carro", "Bicicleta", "Trem", "Avião"], a: "Automóvel / Carro" },
      { type: "choice", q: "O termo 運転 (unten) significa:", options: ["Dirigir / Operar", "Correr", "Nadar", "Voar"], a: "Dirigir / Operar" },
      { type: "choice", q: "Qual o Kanji para 'Descer do veículo' em 降りる?", options: ["降", "乗", "通", "止"], a: "降" },
      { type: "choice", q: "Qual o Kunyomi do verbo 通う (Frequentar)?", options: ["かよう (kayou)", "とおる (tooru)", "あるく (aruku)", "のる (noru)"], a: "かよう (kayou)" },
      { type: "choice", q: "O significado do Kanji 止 em 通行止め é:", options: ["Parar / Interromper", "Mover", "Girar", "Correr"], a: "Parar / Interromper" }
    ]
  },
  {
    module: 8,
    title: "Módulo 8: Comunicação e Mídia",
    description: "Pensamentos, fala, leitura, escrita, audição e sons.",
    grammar: {
      title: "Discurso Indireto ～と言いました / ～と聞いています",
      explanation: "Para citar falas ou pensamentos de terceiros, usa-se Frase na forma simples + と言いました ('disse que...') ou と思っています ('acho que...').",
      example: "彼は明日新しい新聞を読むと言いました。",
      translation: "Ele disse que lerá o novo jornal amanhã."
    },
    kanjis: [
      { character: "思", meaning: "Pensar", kunyomi: "おも・う (omou)", onyomi: "シ (SHI)", mnemonic: "Campo da mente no coração.", examples: [{ word: "思う (omou)", wordMeaning: "Achar / Pensar", sentence: "そう思います。", sentenceMeaning: "Acho que sim." }] },
      { character: "知", meaning: "Saber", kunyomi: "し・る (shiru)", onyomi: "チ (CHI)", mnemonic: "Flecha de sabedoria.", examples: [{ word: "知る (shiru)", wordMeaning: "Saber", sentence: "知っています。", sentenceMeaning: "Eu sei." }] },
      { character: "言", meaning: "Dizer", kunyomi: "い・う (iu)", onyomi: "ゲン (GEN)", mnemonic: "Som saindo da boca.", examples: [{ word: "言う (iu)", wordMeaning: "Dizer", sentence: "本当のことを言います。", sentenceMeaning: "Digo a verdade." }] },
      { character: "話", meaning: "Conversar", kunyomi: "はな・す (hanasu)", onyomi: "ワ (WA)", mnemonic: "Palavras e língua juntas.", examples: [{ word: "会話 (kaiwa)", wordMeaning: "Conversação", sentence: "会話の練習です。", sentenceMeaning: "Treino de conversação." }] },
      { character: "語", meaning: "Idioma", kunyomi: "kataru", onyomi: "ゴ (GO)", mnemonic: "Palavras faladas por mim.", examples: [{ word: "日本語 (nihongo)", wordMeaning: "Língua Japonesa", sentence: "日本語を話します。", sentenceMeaning: "Falo japonês." }] },
      { character: "読", meaning: "Ler", kunyomi: "よ・む (yomu)", onyomi: "ドク (DOKU)", mnemonic: "Palavras em livro para ler.", examples: [{ word: "読書 (dokusho)", wordMeaning: "Leitura", sentence: "読書が好きです。", sentenceMeaning: "Gosto de leitura." }] },
      { character: "書", meaning: "Escrever", kunyomi: "か・く (kaku)", onyomi: "ショ (SHO)", mnemonic: "Pincel desenhando linhas.", examples: [{ word: "図書館 (toshokan)", wordMeaning: "Biblioteca", sentence: "図書館へ行きます。", sentenceMeaning: "Vou à biblioteca." }] },
      { character: "聞", meaning: "Ouvir", kunyomi: "き・く (kiku)", onyomi: "ブン (BUN)", mnemonic: "Orelha no portão para ouvir.", examples: [{ word: "新聞 (shinbun)", wordMeaning: "Jornal", sentence: "新聞を読みます。", sentenceMeaning: "Leio o jornal." }] },
      { character: "声", meaning: "Voz", kunyomi: "こえ (koe)", onyomi: "セイ (SEI)", mnemonic: "Som emitido pela garganta.", examples: [{ word: "大声 (oogoe)", wordMeaning: "Voz alta", sentence: "大きな声です。", sentenceMeaning: "Voz alta." }] },
      { character: "音", meaning: "Som", kunyomi: "おと (oto)", onyomi: "オン (ON)", mnemonic: "Frequência de som.", examples: [{ word: "音楽 (ongaku)", wordMeaning: "Música", sentence: "音楽を聞きます。", sentenceMeaning: "Ouço música." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite em romaji o verbo 思う (Pensar/Achar):", a: "omou" },
      { type: "typing", q: "Digite a leitura de 知る (Saber):", a: "shiru" },
      { type: "typing", q: "Digite em romaji o verbo 言う (Dizer):", a: "iu" },
      { type: "typing", q: "Digite a leitura de 読書 (Leitura):", a: "dokusho" },
      { type: "typing", q: "Digite em romaji a palavra 新聞 (Jornal):", a: "shinbun" },
      { type: "choice", q: "Qual o Kanji de 'Música' em 音楽?", options: ["音", "声", "語", "書"], a: "音" },
      { type: "choice", q: "Qual a tradução de 図書館 (toshokan)?", options: ["Biblioteca", "Livraria", "Escola", "Cinema"], a: "Biblioteca" },
      { type: "choice", q: "Qual o Kanji de 'Conversação' em 会話?", options: ["話", "言", "語", "聞"], a: "話" },
      { type: "choice", q: "O Kanji 声 em 大声 significa:", options: ["Voz", "Música", "Ruído", "Eco"], a: "Voz" },
      { type: "choice", q: "Qual a palavra para 'Língua Japonesa'?", options: ["日本語 (nihongo)", "英語 (eigo)", "国語 (kokugo)", "中国語 (chuugokugo)"], a: "日本語 (nihongo)" }
    ]
  },
  {
    module: 9,
    title: "Módulo 9: Adjetivos e Qualidades",
    description: "Força, peso, velocidade, tamanho e polaridades morais.",
    grammar: {
      title: "Excesso de Intensidade ～すぎる & Enumeração de Motivos ～し、～し",
      explanation: "No N4, adiciona-se ～すぎる (sugiru) à raiz de adjetivos/verbos para indicar 'demais / em excesso'. A partícula de conexão ～し permite listar múltiplos fatores simultâneos.",
      example: "この鞄は重すぎるし、値段も高いです。",
      translation: "Esta bolsa é pesada demais e o preço também é alto."
    },
    kanjis: [
      { character: "強", meaning: "Forte", kunyomi: "つよ・い (tsuyoi)", onyomi: "キョウ (KYOU)", mnemonic: "Arco forte.", examples: [{ word: "強い (tsuyoi)", wordMeaning: "Forte", sentence: "強い人です。", sentenceMeaning: "É uma pessoa forte." }] },
      { character: "弱", meaning: "Fraco", kunyomi: "よわ・い (yowai)", onyomi: "ジャク (JAKU)", mnemonic: "Penas frágeis.", examples: [{ word: "弱い (yowai)", wordMeaning: "Fraco", sentence: "色が弱いです。", sentenceMeaning: "A cor é fraca." }] },
      { character: "重", meaning: "Pesado", kunyomi: "おも・い (omoi)", onyomi: "ジュウ (JUU)", mnemonic: "Fardo pesado.", examples: [{ word: "体重 (taijuu)", wordMeaning: "Peso corporal", sentence: "体重を測ります。", sentenceMeaning: "Meço meu peso." }] },
      { character: "軽", meaning: "Leve", kunyomi: "かる・い (karui)", onyomi: "ケイ (KEI)", mnemonic: "Carro leve.", examples: [{ word: "軽い (karui)", wordMeaning: "Leve", sentence: "軽い鞄です。", sentenceMeaning: "É uma bolsa leve." }] },
      { character: "広", meaning: "Amplo", kunyomi: "ひろ・い (hiroi)", onyomi: "コウ (KOU)", mnemonic: "Salão amplo.", examples: [{ word: "広い (hiroi)", wordMeaning: "Amplo", sentence: "広い部屋です。", sentenceMeaning: "É um quarto amplo." }] },
      { character: "早", meaning: "Cedo", kunyomi: "はや・い (hayai)", onyomi: "ソウ (SOU)", mnemonic: "Sol bem cedo.", examples: [{ word: "早起き (hayaoki)", wordMeaning: "Acordar cedo", sentence: "早起きします。", sentenceMeaning: "Acordo cedo." }] },
      { character: "遅", meaning: "Atrasado", kunyomi: "おそ・い (osoi)", onyomi: "チ (CHI)", mnemonic: "Caminhada lenta.", examples: [{ word: "遅刻 (chikoku)", wordMeaning: "Atraso", sentence: "遅刻しました。", sentenceMeaning: "Atrasei." }] },
      { character: "好", meaning: "Gostar", kunyomi: "す・き (suki)", onyomi: "コウ (KOU)", mnemonic: "Mulher com seu filho.", examples: [{ word: "大好き (daisuki)", wordMeaning: "Amar", sentence: "大好きです。", sentenceMeaning: "Gosto muito." }] },
      { character: "悪", meaning: "Ruim", kunyomi: "わる・い (warui)", onyomi: "アク (AKU)", mnemonic: "Coração angustiado.", examples: [{ word: "悪い (warui)", wordMeaning: "Ruim", sentence: "悪い天気です。", sentenceMeaning: "Tempo ruim." }] },
      { character: "暗", meaning: "Escuro", kunyomi: "くら・い (kurai)", onyomi: "アン (AN)", mnemonic: "Fumaça escura.", examples: [{ word: "暗い (kurai)", wordMeaning: "Escuro", sentence: "部屋が暗いです。", sentenceMeaning: "O quarto está escuro." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite em romaji a leitura de 強い (Forte):", a: "tsuyoi" },
      { type: "typing", q: "Digite a leitura de 重い (Pesado):", a: "omoi" },
      { type: "typing", q: "Digite em romaji a palavra 広い (Amplo):", a: "hiroi" },
      { type: "typing", q: "Digite a leitura de 悪い (Ruim):", a: "warui" },
      { type: "typing", q: "Digite em romaji a palavra 暗い (Escuro):", a: "kurai" },
      { type: "choice", q: "O oposto de 強い (tsuyoi - Forte) é:", options: ["弱い (yowai)", "重い (omoi)", "早い (hayai)", "暗い (kurai)"], a: "弱い (yowai)" },
      { type: "choice", q: "O oposto de 重い (omoi - Pesado) é:", options: ["軽い (karui)", "広い (hiroi)", "遅い (osoi)", "悪い (warui)"], a: "軽い (karui)" },
      { type: "choice", q: "Qual a tradução de 早起き (hayaoki)?", options: ["Acordar cedo", "Dormir tarde", "Comer rápido", "Estudar muito"], a: "Acordar cedo" },
      { type: "choice", q: "O Kanji 好 em 大好き (daisuki) significa:", options: ["Gostar / Afeto", "Odiar", "Correr", "Pensar"], a: "Gostar / Afeto" },
      { type: "choice", q: "O significado de 遅刻 (chikoku) é:", options: ["Atraso", "Adiantamento", "Falta", "Férias"], a: "Atraso" }
    ]
  },
  {
    module: 10,
    title: "Módulo 10: Trabalho e Sociedade",
    description: "Empresas, membros, lojas, cidades, vilas e instituições.",
    grammar: {
      title: "Polidez Social e Empresarial (Keigo Básico: お / ご)",
      explanation: "No ambiente corporativo e social do N4, usa-se os prefixos formais お (para vocabulário nativo) e ご (para vocabulário sino-japonês / kanjis de negócios) para denotar cortesia extrema.",
      example: "ご案内しますので、店員にお聞きください。",
      translation: "Iremos orientá-lo, por favor pergunte ao atendente."
    },
    kanjis: [
      { character: "社", meaning: "Empresa", kunyomi: "sha", onyomi: "シャ (SHA)", mnemonic: "Altar de terra.", examples: [{ word: "会社 (kaisha)", wordMeaning: "Empresa", sentence: "会社で働きます。", sentenceMeaning: "Trabalho na empresa." }] },
      { character: "員", meaning: "Membro", kunyomi: "in", onyomi: "イン (IN)", mnemonic: "Pessoa registrada.", examples: [{ word: "会社員 (kaishain)", wordMeaning: "Funcionário", sentence: "会社員です。", sentenceMeaning: "Sou funcionário de empresa." }] },
      { character: "店", meaning: "Loja", kunyomi: "みせ (mise)", onyomi: "テン (TEN)", mnemonic: "Teto de vendas.", examples: [{ word: "店員 (ten'in)", wordMeaning: "Atendente", sentence: "店員に聞きます。", sentenceMeaning: "Pergunto ao atendente." }] },
      { character: "業", meaning: "Negócio", kunyomi: "waza", onyomi: "ギョウ (GYOU)", mnemonic: "Placa industrial.", examples: [{ word: "授業 (jugyou)", wordMeaning: "Aula", sentence: "授業が始まります。", sentenceMeaning: "A aula vai começar." }] },
      { character: "市", meaning: "Cidade", kunyomi: "いち", onyomi: "シ (SHI)", mnemonic: "Mercado central.", examples: [{ word: "市役所 (shiyakusho)", wordMeaning: "Prefeitura", sentence: "市役所に行きます。", sentenceMeaning: "Vou à prefeitura." }] },
      { character: "町", meaning: "Bairro / Vila", kunyomi: "まち (machi)", onyomi: "チョウ (CHOU)", mnemonic: "Campos na rua do bairro.", examples: [{ word: "町 (machi)", wordMeaning: "Bairro", sentence: "静かな町です。", sentenceMeaning: "É um bairro silencioso." }] },
      { character: "村", meaning: "Vilarejo", kunyomi: "むら (mura)", onyomi: "ソン (SON)", mnemonic: "Árvores medidas na aldeia.", examples: [{ word: "村人 (murabito)", wordMeaning: "Aldeão", sentence: "村人に会いました。", sentenceMeaning: "Encontrei um aldeão." }] },
      { character: "国", meaning: "País", kunyomi: "くに (kuni)", onyomi: "コク (KOKU)", mnemonic: "Joia protegida na fronteira.", examples: [{ word: "外国 (gaikoku)", wordMeaning: "País estrangeiro", sentence: "外国に行きたい。", sentenceMeaning: "Quero ir ao exterior." }] },
      { character: "官", meaning: "Oficial", kunyomi: "kan", onyomi: "カン (KAN)", mnemonic: "Guarda oficial.", examples: [{ word: "警官 (keikan)", wordMeaning: "Policial", sentence: "警官がいます。", sentenceMeaning: "Há um policial." }] },
      { character: "院", meaning: "Instituição / Hospital", kunyomi: "in", onyomi: "イン (IN)", mnemonic: "Construção murada pública.", examples: [{ word: "病院 (byouin)", wordMeaning: "Hospital", sentence: "病院に行きます。", sentenceMeaning: "Vou ao hospital." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite em romaji a palavra 会社 (Empresa):", a: "kaisha" },
      { type: "typing", q: "Digite a leitura de 店 (Loja):", a: "mise" },
      { type: "typing", q: "Digite em romaji a palavra 授業 (Aula):", a: "jugyou" },
      { type: "typing", q: "Digite a leitura de 国 (País):", a: "kuni" },
      { type: "typing", q: "Digite em romaji a palavra 病院 (Hospital):", a: "byouin" },
      { type: "choice", q: "Qual a tradução de 会社員 (kaishain)?", options: ["Funcionário de empresa", "Policial", "Atendente", "Médico"], a: "Funcionário de empresa" },
      { type: "choice", q: "Qual a palavra para 'Prefeitura'?", options: ["市役所 (shiyakusho)", "図書館 (toshokan)", "郵便局 (yuubinkyoku)", "病院 (byouin)"], a: "市役所 (shiyakusho)" },
      { type: "choice", q: "Qual o Kanji de 'Bairro / Vila' em 町?", options: ["町", "村", "市", "国"], a: "町" },
      { type: "choice", q: "O termo 外国 (gaikoku) significa:", options: ["País estrangeiro", "Cidade grande", "Bairro nobre", "Escola técnica"], a: "País estrangeiro" },
      { type: "choice", q: "Qual a tradução de 警官 (keikan)?", options: ["Policial", "Professor", "Motorista", "Bombeiro"], a: "Policial" }
    ]
  },
  {
    module: 11,
    title: "Módulo 11: Compras e Valores",
    description: "Comércio, vendas, moedas, taxas, empréstimos e pagamentos.",
    grammar: {
      title: "Expectativa Lógica ～はずです (Com certeza / Deve ser)",
      explanation: "A estrutura ～はずです indica uma forte convicção ou expectativa lógica baseada em fatos ocorridos (ex: ter feito o pagamento ou enviado a ordem).",
      example: "お金を払ったから、商品は明日届くはずです。",
      translation: "Como já paguei o dinheiro, o produto deve chegar amanhã."
    },
    kanjis: [
      { character: "買", meaning: "Comprar", kunyomi: "か・う (kau)", onyomi: "バイ (BAI)", mnemonic: "Moedas concha para comprar.", examples: [{ word: "買い物 (kaimono)", wordMeaning: "Compras", sentence: "買い物します。", sentenceMeaning: "Faço compras." }] },
      { character: "売", meaning: "Vender", kunyomi: "う・る (uru)", onyomi: "バイ (BAI)", mnemonic: "Produtos para venda.", examples: [{ word: "売店 (baiten)", wordMeaning: "Quiosque", sentence: "売店で買います。", sentenceMeaning: "Compro no quiosque." }] },
      { character: "物", meaning: "Coisa", kunyomi: "もの (mono)", onyomi: "ブツ (BUTSU)", mnemonic: "Objeto físico.", examples: [{ word: "食べ物 (tabemono)", wordMeaning: "Comida", sentence: "食べ物を買います。", sentenceMeaning: "Compro comida." }] },
      { character: "金", meaning: "Dinheiro", kunyomi: "かね (kane)", onyomi: "キン (KIN)", mnemonic: "Ouro sob a terra.", examples: [{ word: "お金 (okane)", wordMeaning: "Dinheiro", sentence: "お金があります。", sentenceMeaning: "Tenho dinheiro." }] },
      { character: "代", meaning: "Taxa / Era", kunyomi: "kawaru / dai", onyomi: "ダイ (DAI)", mnemonic: "Troca de posição.", examples: [{ word: "電話代 (denwadai)", wordMeaning: "Conta de telefone", sentence: "電話代を払います。", sentenceMeaning: "Pago a conta de telefone." }] },
      { character: "料", meaning: "Taxa / Ingrediente", kunyomi: "ryou", onyomi: "リョウ (RYOU)", mnemonic: "Grãos medidos.", examples: [{ word: "料理 (ryouri)", wordMeaning: "Culinária", sentence: "日本料理です。", sentenceMeaning: "Culinária japonesa." }] },
      { character: "賃", meaning: "Aluguel", kunyomi: "chin", onyomi: "チン (CHIN)", mnemonic: "Moedas de aluguel.", examples: [{ word: "家賃 (yachin)", wordMeaning: "Aluguel", sentence: "家賃を払います。", sentenceMeaning: "Pago o aluguel." }] },
      { character: "貸", meaning: "Emprestar", kunyomi: "か・す (kasu)", onyomi: "タイ (TAI)", mnemonic: "Moedas entregues.", examples: [{ word: "貸す (kasu)", wordMeaning: "Emprestar", sentence: "本を貸します。", sentenceMeaning: "Empresto o livro." }] },
      { character: "借", meaning: "Tomar Emprestado", kunyomi: "か・りる (kariru)", onyomi: "シャク (SHAKU)", mnemonic: "Pedir moedas.", examples: [{ word: "借りる (kariru)", wordMeaning: "Tomar emprestado", sentence: "本を借ります。", sentenceMeaning: "Pego o livro emprestado." }] },
      { character: "払", meaning: "Pagar", kunyomi: "はら・う (harau)", onyomi: "フツ (FUTSU)", mnemonic: "Mão pagando.", examples: [{ word: "払う (harau)", wordMeaning: "Pagar", sentence: "カードで払います。", sentenceMeaning: "Pago no cartão." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite em romaji o verbo 買う (Comprar):", a: "kau" },
      { type: "typing", q: "Digite a leitura de 売る (Vender):", a: "uru" },
      { type: "typing", q: "Digite em romaji a palavra お金 (Dinheiro):", a: "okane" },
      { type: "typing", q: "Digite a leitura do verbo 借りる (Tomar emprestado):", a: "kariru" },
      { type: "typing", q: "Digite em romaji o verbo 払う (Pagar):", a: "harau" },
      { type: "choice", q: "Qual o significado de 買い物 (kaimono)?", options: ["Compras", "Vendas", "Aluguel", "Troca"], a: "Compras" },
      { type: "choice", q: "A expressão 家賃 (yachin) significa:", options: ["Aluguel da casa", "Conta de luz", "Conta de água", "Preço do imóvel"], a: "Aluguel da casa" },
      { type: "choice", q: "Qual o Kanji do verbo 'Emprestar' em 貸す?", options: ["貸", "借", "買", "売"], a: "貸" },
      { type: "choice", q: "Qual a tradução de 料理 (ryouri)?", options: ["Culinária / Prato", "Bebida", "Restaurante", "Supermercado"], a: "Restaurante" },
      { type: "choice", q: "O Kanji 代 em 電話代 refere-se a:", options: ["Taxa / Tarifa", "Número", "Aparelho", "Rede"], a: "Taxa / Tarifa" }
    ]
  },
  {
    module: 12,
    title: "Módulo 12: Saúde e Corpo Humano",
    description: "Corpo, cabeça, rosto, coração, remédios e dor.",
    grammar: {
      title: "Recomendação Prática ～ほうがいい (É melhor fazer...)",
      explanation: "Para dar recomendações de saúde ou cuidados no N4, usa-se a forma do passado verbal (た) + ほうがいいです ('É melhor você...'). Para a negativa, usa-se a forma ない + ほうがいい.",
      example: "体が痛いときは、薬を飲んで寝たほうがいいです。",
      translation: "Quando o corpo doer, é melhor tomar remédio e dormir."
    },
    kanjis: [
      { character: "体", meaning: "Corpo", kunyomi: "からだ (karada)", onyomi: "タイ (TAI)", mnemonic: "Pessoa e sua estrutura.", examples: [{ word: "身体 (karada)", wordMeaning: "Corpo", sentence: "体が丈夫です。", sentenceMeaning: "O corpo é forte." }] },
      { character: "頭", meaning: "Cabeça", kunyomi: "あたま (atama)", onyomi: "トウ (TOU)", mnemonic: "Topo do corpo.", examples: [{ word: "頭 (atama)", wordMeaning: "Cabeça", sentence: "頭が痛いです。", sentenceMeaning: "Dói a cabeça." }] },
      { character: "顔", meaning: "Rosto", kunyomi: "かお (kao)", onyomi: "ガン (GAN)", mnemonic: "Expressão do rosto.", examples: [{ word: "顔 (kao)", wordMeaning: "Rosto", sentence: "顔を洗います。", sentenceMeaning: "Lavo o rosto." }] },
      { character: "足", meaning: "Pé / Perna", kunyomi: "あし (ashi)", onyomi: "ソク (SOKU)", mnemonic: "Pé caminhando.", examples: [{ word: "足 (ashi)", wordMeaning: "Pé / Perna", sentence: "足が痛いです。", sentenceMeaning: "Dói o pé." }] },
      { character: "心", meaning: "Coração", kunyomi: "こころ (kokoro)", onyomi: "シン (SHIN)", mnemonic: "Câmaras do coração.", examples: [{ word: "安心 (anshin)", wordMeaning: "Alívio", sentence: "安心しました。", sentenceMeaning: "Fiquei aliviado." }] },
      { character: "病", meaning: "Doença", kunyomi: "yamai", onyomi: "ビョウ (BYOU)", mnemonic: "Pessoa doente na cama.", examples: [{ word: "病気 (byouki)", wordMeaning: "Doença", sentence: "病気です。", sentenceMeaning: "Estou doente." }] },
      { character: "院", meaning: "Instituição", kunyomi: "in", onyomi: "イン (IN)", mnemonic: "Construção de atendimento.", examples: [{ word: "入院 (nyuuin)", wordMeaning: "Internação", sentence: "入院します。", sentenceMeaning: "Vou me internar." }] },
      { character: "薬", meaning: "Remédio", kunyomi: "くすり (kusuri)", onyomi: "ヤク (YAKU)", mnemonic: "Erva medicinal.", examples: [{ word: "薬 (kusuri)", wordMeaning: "Remédio", sentence: "薬を飲みます。", sentenceMeaning: "Tomo remédio." }] },
      { character: "痛", meaning: "Dor", kunyomi: "いた・い (itai)", onyomi: "ツウ (TSUU)", mnemonic: "Sensação de dor.", examples: [{ word: "痛い (itai)", wordMeaning: "Dói", sentence: "お腹が痛い。", sentenceMeaning: "Dor de barriga." }] },
      { character: "医", meaning: "Médico", kunyomi: "i", onyomi: "イ (I)", mnemonic: "Caixa de medicina.", examples: [{ word: "医者 (isha)", wordMeaning: "Médico", sentence: "医者に行きます。", sentenceMeaning: "Vou ao médico." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite em romaji a leitura de 体 (Corpo):", a: "karada" },
      { type: "typing", q: "Digite a leitura de 頭 (Cabeça):", a: "atama" },
      { type: "typing", q: "Digite em romaji a leitura de 顔 (Rosto):", a: "kao" },
      { type: "typing", q: "Digite a leitura de 薬 (Remédio):", a: "kusuri" },
      { type: "typing", q: "Digite em romaji a palavra 医者 (Médico):", a: "isha" },
      { type: "choice", q: "Qual a palavra para 'Doença'?", options: ["病気 (byouki)", "病院 (byouin)", "安心 (anshin)", "入院 (nyuuin)"], a: "病気 (byouki)" },
      { type: "choice", q: "O Kanji 痛 em 痛い significa:", options: ["Dor / Dolorido", "Alegria", "Frio", "Calor"], a: "Dor / Dolorido" },
      { type: "choice", q: "Qual o significado de 安心 (anshin)?", options: ["Alívio / Tranquilidade", "Preocupação", "Medo", "Tristeza"], a: "Alívio / Tranquilidade" },
      { type: "choice", q: "Qual a tradução de 入院 (nyuuin)?", options: ["Internação hospitalar", "Alta médica", "Consulta", "Exame de sangue"], a: "Internação hospitalar" },
      { type: "choice", q: "Qual o Kanji para 'Pé / Perna' em 足?", options: ["足", "頭", "顔", "体"], a: "足" }
    ]
  },
  {
    module: 13,
    title: "Módulo 13: Culinária e Alimentação",
    description: "Refeições, carnes, peixes, chás, sabores e utensílios.",
    grammar: {
      title: "Tentativa Experiencial ～てみる & Nível de Facilidade ～やすい / ～にくい",
      explanation: "Use a forma Verb(て) + みる para 'experimentar fazer algo (ex: provar uma comida)'. Adicione o sufixo ～やすい (fácil de) ou ～にくい (difícil de) à raiz verbal para descrever a facilidade de consumo ou manuseio.",
      example: "日本の魚料理を食べてみたら、とても食べやすかったです。",
      translation: "Quando experimentei comer o prato de peixe japonês, foi muito fácil de comer."
    },
    kanjis: [
      { character: "食", meaning: "Comer", kunyomi: "た・べる (taberu)", onyomi: "ショク (SHOKU)", mnemonic: "Comida na mesa.", examples: [{ word: "食事 (shokuji)", wordMeaning: "Refeição", sentence: "食事をします。", sentenceMeaning: "Faço refeição." }] },
      { character: "飲", meaning: "Beber", kunyomi: "の・む (nomu)", onyomi: "イン (IN)", mnemonic: "Engolir bebida.", examples: [{ word: "飲み物 (nomimono)", wordMeaning: "Bebida", sentence: "飲み物を買います。", sentenceMeaning: "Compro bebida." }] },
      { character: "飯", meaning: "Refeição", kunyomi: "めし (meshi)", onyomi: "ハン (HAN)", mnemonic: "Tigela de arroz.", examples: [{ word: "朝ご飯 (asagohan)", wordMeaning: "Café da manhã", sentence: "朝ご飯を食べます。", sentenceMeaning: "Tomo café da manhã." }] },
      { character: "肉", meaning: "Carne", kunyomi: "niku", onyomi: "ニク (NIKU)", mnemonic: "Corte de carne.", examples: [{ word: "牛肉 (gyuuniku)", wordMeaning: "Carne bovina", sentence: "牛肉を買います。", sentenceMeaning: "Compro carne bovina." }] },
      { character: "魚", meaning: "Peixe", kunyomi: "さかな (sakana)", onyomi: "ギョ (GYO)", mnemonic: "Peixe nadando.", examples: [{ word: "魚 (sakana)", wordMeaning: "Peixe", sentence: "魚が好きです。", sentenceMeaning: "Gosto de peixe." }] },
      { character: "茶", meaning: "Chá", kunyomi: "cha", onyomi: "チャ (CHA)", mnemonic: "Folhas de chá.", examples: [{ word: "お茶 (ocha)", wordMeaning: "Chá", sentence: "お茶を飲みます。", sentenceMeaning: "Tomo chá." }] },
      { character: "味", meaning: "Sabor", kunyomi: "あじ (aji)", onyomi: "ミ (MI)", mnemonic: "Boca provando.", examples: [{ word: "意味 (imi)", wordMeaning: "Significado", sentence: "意味が分かります。", sentenceMeaning: "Entendo o significado." }] },
      { character: "理", meaning: "Razão", kunyomi: "ri", onyomi: "リ (RI)", mnemonic: "Estrutura lógica.", examples: [{ word: "料理 (ryouri)", wordMeaning: "Culinária", sentence: "料理を作ります。", sentenceMeaning: "Faço comida." }] },
      { character: "具", meaning: "Utensílio", kunyomi: "gu", onyomi: "グ (GU)", mnemonic: "Ferramenta.", examples: [{ word: "道具 (dougu)", wordMeaning: "Ferramenta", sentence: "道具を使います。", sentenceMeaning: "Uso a ferramenta." }] },
      { character: "洗", meaning: "Lavar", kunyomi: "あら・う (arau)", onyomi: "セン (SEN)", mnemonic: "Água lavando.", examples: [{ word: "洗う (arau)", wordMeaning: "Lavar", sentence: "手を洗います。", sentenceMeaning: "Lavo as mãos." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite em romaji o verbo 食べる (Comer):", a: "taberu" },
      { type: "typing", q: "Digite a leitura do verbo 飲む (Beber):", a: "nomu" },
      { type: "typing", q: "Digite em romaji a palavra 魚 (Peixe):", a: "sakana" },
      { type: "typing", q: "Digite a leitura de お茶 (Chá):", a: "ocha" },
      { type: "typing", q: "Digite em romaji o verbo 洗う (Lavar):", a: "arau" },
      { type: "choice", q: "Qual o significado de 朝ご飯 (asagohan)?", options: ["Café da manhã", "Almoço", "Jantar", "Ceia"], a: "Café da manhã" },
      { type: "choice", q: "Qual a tradução de 牛肉 (gyuuniku)?", options: ["Carne bovina", "Carne suína", "Frango", "Peixe"], a: "Carne bovina" },
      { type: "choice", q: "Qual a tradução da palavra 道具 (dougu)?", options: ["Ferramenta / Utensílio", "Comida", "Roupa", "Livro"], a: "Ferramenta / Utensílio" },
      { type: "choice", q: "O Kanji 味 em 意味 significa:", options: ["Sabor / Gosto", "Cheiro", "Cor", "Tamanho"], a: "Sabor / Gosto" },
      { type: "choice", q: "Qual a palavra para 'Refeição'?", options: ["食事 (shokuji)", "読書 (dokusho)", "散歩 (sanpo)", "運動 (undou)"], a: "食事 (shokuji)" }
    ]
  },
  {
    module: 14,
    title: "Módulo 14: Quantidades e Conceitos Abstratos",
    description: "Grandes números, graus, diferenças, reuniões e início.",
    grammar: {
      title: "Decisão ～にする & Relato de Ouvida ～そうだ (Ouvi dizer que)",
      explanation: "Usa-se Noun + にする para expressar uma decisão pessoal ('Vou escolher X'). Usa-se a forma simples + そうだ para relatar fatos que você ouviu de terceiros ou fontes.",
      example: "皆が集まったので、来週の会議を水曜日にすることにしました。",
      translation: "Como todos se reuniram, decidimos marcar a reunião da próxima semana para a quarta-feira."
    },
    kanjis: [
      { character: "万", meaning: "Dez Mil", kunyomi: "man", onyomi: "マン (MAN)", mnemonic: "Dez mil expansivo.", examples: [{ word: "一万円 (ichiman'en)", wordMeaning: "10.000 ienes", sentence: "一万円札です。", sentenceMeaning: "Nota de 10 mil ienes." }] },
      { character: "億", meaning: "Cem Milhões", kunyomi: "oku", onyomi: "オク (OKU)", mnemonic: "Grande número.", examples: [{ word: "一億円 (ichioku'en)", wordMeaning: "100 milhões ienes", sentence: "一億円当たりました。", sentenceMeaning: "Ganhei 100 milhões." }] },
      { character: "度", meaning: "Graus", kunyomi: "tabi", onyomi: "ド (DO)", mnemonic: "Frequência / grau.", examples: [{ word: "今度 (kondo)", wordMeaning: "Próxima vez", sentence: "今度会いましょう。", sentenceMeaning: "Nos vemos na próxima." }] },
      { character: "特", meaning: "Especial", kunyomi: "toku", onyomi: "トク (TOKU)", mnemonic: "Elemento especial.", examples: [{ word: "特別 (tokubetsu)", wordMeaning: "Especial", sentence: "特別です。", sentenceMeaning: "É especial." }] },
      { character: "別", meaning: "Separar", kunyomi: "wakareru", onyomi: "ベツ (BETSU)", mnemonic: "Faca separando.", examples: [{ word: "別々に (betsubetsu ni)", wordMeaning: "Separadamente", sentence: "別々に払います。", sentenceMeaning: "Pagamos separado." }] },
      { character: "同", meaning: "Mesmo", kunyomi: "onaji", onyomi: "ドウ (DOU)", mnemonic: "Mesmo teto.", examples: [{ word: "同じ (onaji)", wordMeaning: "Igual", sentence: "同じ本です。", sentenceMeaning: "É o mesmo livro." }] },
      { character: "異", meaning: "Diferente", kunyomi: "koto", onyomi: "イ (I)", mnemonic: "Diferente da multidão.", examples: [{ word: "異常 (ijou)", wordMeaning: "Anomalia", sentence: "異常はありません。", sentenceMeaning: "Sem anomalia." }] },
      { character: "集", meaning: "Reunir", kunyomi: "あつ・まる (atsumaru)", onyomi: "シュウ (SHUU)", mnemonic: "Pássaros no galho.", examples: [{ word: "集まる (atsumaru)", wordMeaning: "Reunir-se", sentence: "人が集まります。", sentenceMeaning: "Pessoas se reúnem." }] },
      { character: "合", meaning: "Combinar", kunyomi: "あ・う (au)", onyomi: "ゴウ (GOU)", mnemonic: "Bocas em acordo.", examples: [{ word: "間に合う (maniau)", wordMeaning: "Chegar a tempo", sentence: "間に合いました。", sentenceMeaning: "Cheguei a tempo." }] },
      { character: "始", meaning: "Começar", kunyomi: "はじ・まる (hajimaru)", onyomi: "シ (SHI)", mnemonic: "Início da vida.", examples: [{ word: "始まる (hajimaru)", wordMeaning: "Começar", sentence: "授業が始まります。", sentenceMeaning: "A aula começa." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite a leitura em romaji de 万 (Dez mil):", a: "man" },
      { type: "typing", q: "Digite a leitura de 今度 (Desta vez/Próxima vez):", a: "kondo" },
      { type: "typing", q: "Digite em romaji a palavra 同じ (Igual/Mesmo):", a: "onaji" },
      { type: "typing", q: "Digite o verbo 集まる (Reunir-se) em romaji:", a: "atsumaru" },
      { type: "typing", q: "Digite em romaji o verbo 始まる (Começar):", a: "hajimaru" },
      { type: "choice", q: "Qual o valor de 一万円?", options: ["10.000 ienes", "1.000 ienes", "100 ienes", "100.000 ienes"], a: "10.000 ienes" },
      { type: "choice", q: "Qual a tradução de 特別 (tokubetsu)?", options: ["Especial", "Comum", "Normal", "Raro"], a: "Especial" },
      { type: "choice", q: "A expressão 別々に (betsubetsu ni) significa:", options: ["Separadamente", "Juntos", "Rapidamente", "Devagar"], a: "Separadamente" },
      { type: "choice", q: "Qual o significado da expressão 間に合う (maniau)?", options: ["Chegar a tempo", "Atrasar-se", "Perder o trem", "Cancelar"], a: "Chegar a tempo" },
      { type: "choice", q: "Qual o Kanji de 'Cem milhões' em 一億円?", options: ["億", "万", "千", "百"], a: "億" }
    ]
  },
  {
    module: 15,
    title: "Módulo 15: Ações Cotidianas e Rotina",
    description: "Fazer, usar, cortar, enviar, segurar, lembrar e esquecer.",
    grammar: {
      title: "Simultaneidade ～ながら & Conclusão/Lamento ～てしまう",
      explanation: "Usa-se a raiz verbal + ながら para realizar duas ações simultâneas ('enquanto...'). Usa-se a forma Verb(て) + しまう para indicar a conclusão total de uma ação ou um erro acidental cometido com pesar.",
      example: "音楽を聞きながら勉強していたら、大事なことを忘れてしまいました。",
      translation: "Enquanto estudava ouvindo música, acabei esquecendo algo importante."
    },
    kanjis: [
      { character: "作", meaning: "Fazer", kunyomi: "つく・る (tsukuru)", onyomi: "サク (SAKU)", mnemonic: "Criar com as mãos.", examples: [{ word: "作る (tsukuru)", wordMeaning: "Fazer / Criar", sentence: "料理を作ります。", sentenceMeaning: "Faço comida." }] },
      { character: "使", meaning: "Usar", kunyomi: "つか・う (tsukau)", onyomi: "シ (SHI)", mnemonic: "Usar ferramenta.", examples: [{ word: "使う (tsukau)", wordMeaning: "Usar", sentence: "ペンを使います。", sentenceMeaning: "Uso a caneta." }] },
      { character: "切", meaning: "Cortar", kunyomi: "き・る (kiru)", onyomi: "セツ (SETSU)", mnemonic: "Faca cortando.", examples: [{ word: "大切 (taisetsu)", wordMeaning: "Importante", sentence: "大切です。", sentenceMeaning: "É importante." }] },
      { character: "送", meaning: "Enviar", kunyomi: "おく・る (okuru)", onyomi: "ソウ (SOU)", mnemonic: "Enviar pacote.", examples: [{ word: "送る (okuru)", wordMeaning: "Enviar", sentence: "手紙を送ります。", sentenceMeaning: "Envio a carta." }] },
      { character: "支", meaning: "Apoiar", kunyomi: "sasaeru", onyomi: "シ (SHI)", mnemonic: "Mão com bastão.", examples: [{ word: "支店 (shiten)", wordMeaning: "Filial", sentence: "支店に行きます。", sentenceMeaning: "Vou à filial." }] },
      { character: "覚", meaning: "Lembrar", kunyomi: "おぼ・える (oboeru)", onyomi: "カク (KAKU)", mnemonic: "Memorizar.", examples: [{ word: "覚える (oboeru)", wordMeaning: "Decorar / Lembrar", sentence: "漢字を覚えます。", sentenceMeaning: "Decoro o kanji." }] },
      { character: "忘", meaning: "Esquecer", kunyomi: "わす・れる (wasureru)", onyomi: "ボウ (BOU)", mnemonic: "Memória perecida.", examples: [{ word: "忘れる (wasureru)", wordMeaning: "Esquecer", sentence: "忘れました。", sentenceMeaning: "Esqueci." }] },
      { character: "持", meaning: "Segurar / Ter", kunyomi: "も・つ (motsu)", onyomi: "ジ (JI)", mnemonic: "Mão no templo.", examples: [{ word: "持っている (motte iru)", wordMeaning: "Ter / Possuir", sentence: "本を持っています。", sentenceMeaning: "Tenho o livro." }] },
      { character: "払", meaning: "Pagar", kunyomi: "はら・う (harau)", onyomi: "フツ (FUTSU)", mnemonic: "Mão pagando.", examples: [{ word: "払う (harau)", wordMeaning: "Pagar", sentence: "お金を払います。", sentenceMeaning: "Pago o dinheiro." }] },
      { character: "留", meaning: "Permanecer", kunyomi: "tomeru", onyomi: "リュウ (RYUU)", mnemonic: "Permanecer fixo.", examples: [{ word: "留学生 (ryuugakusei)", wordMeaning: "Estudante intercambista", sentence: "留学生です。", sentenceMeaning: "Sou intercambista." }] }
    ],
    quiz: [
      { type: "typing", q: "Digite em romaji o verbo 作る (Fazer/Criar):", a: "tsukuru" },
      { type: "typing", q: "Digite a leitura de 使う (Usar):", a: "tsukau" },
      { type: "typing", q: "Digite em romaji a palavra 大切 (Importante):", a: "taisetsu" },
      { type: "typing", q: "Digite a leitura de 覚える (Lembrar/Decorar):", a: "oboeru" },
      { type: "typing", q: "Digite em romaji o verbo 忘れる (Esquecer):", a: "wasureru" },
      { type: "choice", q: "Qual a tradução do verbo 送る (okuru)?", options: ["Enviar", "Receber", "Comprar", "Vender"], a: "Enviar" },
      { type: "choice", q: "O que significa 持っている (motte iru)?", options: ["Ter / Possuir", "Esquecer", "Perder", "Vender"], a: "Ter / Possuir" },
      { type: "choice", q: "Qual a tradução de 留学生 (ryuugakusei)?", options: ["Estudante intercambista", "Professor", "Diretor", "Ex-aluno"], a: "Estudante intercambista" },
      { type: "choice", q: "Qual o Kanji do verbo 'Pagar' em 払う?", options: ["払", "持", "支", "切"], a: "払" },
      { type: "choice", q: "Qual a palavra para 'Filial' em 支店?", options: ["支店 (shiten)", "本店 (honten)", "売店 (baiten)", "書店 (shoten)"], a: "支店 (shiten)" }
    ]
  },
  {
    isReviewTable: true,
    module: 16,
    title: "Módulo 16: Tabela Geral de Revisão N4",
    description: "Revisão completa e consulta rápida de todos os 150 ideogramas do nível JLPT N4.",
    kanjis: [
      { character: "親", meaning: "Pais / Parentes", kunyomi: "おや (oya)", onyomi: "シン" },
      { character: "族", meaning: "Família / Tribo", kunyomi: "zoku", onyomi: "ゾク" },
      { character: "兄", meaning: "Irmão Mais Velho", kunyomi: "あに (ani)", onyomi: "ケイ" },
      { character: "姉", meaning: "Irmã Mais Velha", kunyomi: "あね (ane)", onyomi: "シ" },
      { character: "弟", meaning: "Irmão Mais Novo", kunyomi: "おとうと (otouto)", onyomi: "テイ" },
      { character: "妹", meaning: "Irmã Mais Nova", kunyomi: "いもうと (imouto)", onyomi: "マイ" },
      { character: "主", meaning: "Senhor / Principal", kunyomi: "おも (omo)", onyomi: "シュ" },
      { character: "夫", meaning: "Marido", kunyomi: "おっと (otto)", onyomi: "フ" },
      { character: "妻", meaning: "Esposa", kunyomi: "つま (tsuma)", onyomi: "サイ" },
      { character: "彼", meaning: "Ele / Namorado", kunyomi: "かれ (kare)", onyomi: "ヒ" },
      { character: "春", meaning: "Primavera", kunyomi: "はる (haru)", onyomi: "シュン" },
      { character: "夏", meaning: "Verão", kunyomi: "なつ (natsu)", onyomi: "カ" },
      { character: "秋", meaning: "Outono", kunyomi: "あき (aki)", onyomi: "シュウ" },
      { character: "冬", meaning: "Inverno", kunyomi: "ふゆ (fuyu)", onyomi: "トウ" },
      { character: "朝", meaning: "Manhã", kunyomi: "あさ (asa)", onyomi: "チョウ" },
      { character: "昼", meaning: "Tarde", kunyomi: "ひる (hiru)", onyomi: "チュウ" },
      { character: "夜", meaning: "Noite", kunyomi: "よる (yoru)", onyomi: "ヤ" },
      { character: "夕", meaning: "Entardecer", kunyomi: "ゆう (yuu)", onyomi: "セキ" },
      { character: "曜", meaning: "Dia da semana", kunyomi: "you", onyomi: "ヨウ" },
      { character: "地", meaning: "Terra / Solo", kunyomi: "chi", onyomi: "チ / ジ" },
      { character: "池", meaning: "Lagoa", kunyomi: "いけ (ike)", onyomi: "チ" },
      { character: "海", meaning: "Mar", kunyomi: "うみ (umi)", onyomi: "カイ" },
      { character: "界", meaning: "Mundo", kunyomi: "kai", onyomi: "カイ" },
      { character: "島", meaning: "Ilha", kunyomi: "しま (shima)", onyomi: "トウ" },
      { character: "野", meaning: "Campo", kunyomi: "の (no)", onyomi: "ヤ" },
      { character: "原", meaning: "Origem / Campo", kunyomi: "はら (hara)", onyomi: "ゲン" },
      { character: "森", meaning: "Floresta Densa", kunyomi: "もり (mori)", onyomi: "シン" },
      { character: "林", meaning: "Bosque", kunyomi: "はやし (hayashi)", onyomi: "リン" },
      { character: "風", meaning: "Vento", kunyomi: "かぜ (kaze)", onyomi: "フウ" },
      { character: "東", meaning: "Leste", kunyomi: "ひがし (higashi)", onyomi: "トウ" },
      { character: "西", meaning: "Oeste", kunyomi: "にし (nishi)", onyomi: "セイ" },
      { character: "南", meaning: "Sul", kunyomi: "みなみ (minami)", onyomi: "ナン" },
      { character: "北", meaning: "Norte", kunyomi: "きた (kita)", onyomi: "ホク" },
      { character: "向", meaning: "Virar-se", kunyomi: "むかう", onyomi: "コウ" },
      { character: "近", meaning: "Perto", kunyomi: "ちかい", onyomi: "キン" },
      { character: "遠", meaning: "Longe", kunyomi: "とおい", onyomi: "エン" },
      { character: "家", meaning: "Casa", kunyomi: "いえ / うち", onyomi: "カ" },
      { character: "室", meaning: "Sala", kunyomi: "shitsu", onyomi: "シツ" },
      { character: "堂", meaning: "Salão", kunyomi: "dou", onyomi: "ドウ" },
      { character: "局", meaning: "Repartição", kunyomi: "kyoku", onyomi: "キョク" },
      { character: "戸", meaning: "Porta", kunyomi: "と (to)", onyomi: "コ" },
      { character: "所", meaning: "Lugar", kunyomi: "ところ", onyomi: "ショ" },
      { character: "場", meaning: "Local", kunyomi: "ば (ba)", onyomi: "ジョウ" },
      { character: "建", meaning: "Construir", kunyomi: "たてる", onyomi: "ケン" },
      { character: "校", meaning: "Escola", kunyomi: "kou", onyomi: "コウ" },
      { character: "漢", meaning: "Han / Kanji", kunyomi: "kan", onyomi: "カン" },
      { character: "字", meaning: "Caractere", kunyomi: "ji", onyomi: "ジ" },
      { character: "答", meaning: "Resposta", kunyomi: "こたえる", onyomi: "トウ" },
      { character: "教", meaning: "Ensinar", kunyomi: "おしえる", onyomi: "キョウ" },
      { character: "習", meaning: "Aprender", kunyomi: "ならう", onyomi: "シュウ" },
      { character: "考", meaning: "Pensar", kunyomi: "かんがえる", onyomi: "コウ" },
      { character: "試", meaning: "Exame", kunyomi: "shiken", onyomi: "シ" },
      { character: "走", meaning: "Correr", kunyomi: "はしる", onyomi: "ソウ" },
      { character: "歩", meaning: "Andar", kunyomi: "あるく", onyomi: "ホ" },
      { character: "働", meaning: "Trabalhar", kunyomi: "はたらく", onyomi: "ドウ" },
      { character: "動", meaning: "Mover", kunyomi: "うごく", onyomi: "ドウ" },
      { character: "運", meaning: "Transportar", kunyomi: "はこぶ", onyomi: "ウン" },
      { character: "転", meaning: "Girar", kunyomi: "ころがる", onyomi: "テン" },
      { character: "乗", meaning: "Embarcar", kunyomi: "のる", onyomi: "ジョウ" },
      { character: "降", meaning: "Descer", kunyomi: "おりる", onyomi: "コウ" },
      { character: "通", meaning: "Passar", kunyomi: "とおる", onyomi: "ツウ" },
      { character: "止", meaning: "Parar", kunyomi: "とまる", onyomi: "シ" },
      { character: "思", meaning: "Pensar", kunyomi: "おもう", onyomi: "シ" },
      { character: "知", meaning: "Saber", kunyomi: "しる", onyomi: "チ" },
      { character: "言", meaning: "Dizer", kunyomi: "いう", onyomi: "ゲン" },
      { character: "話", meaning: "Conversar", kunyomi: "はなす", onyomi: "ワ" },
      { character: "語", meaning: "Idioma", kunyomi: "go", onyomi: "ゴ" },
      { character: "読", meaning: "Ler", kunyomi: "よむ", onyomi: "ドク" },
      { character: "書", meaning: "Escrever", kunyomi: "かく", onyomi: "ショ" },
      { character: "聞", meaning: "Ouvir", kunyomi: "きく", onyomi: "ブン" },
      { character: "声", meaning: "Voz", kunyomi: "こえ", onyomi: "セイ" },
      { character: "音", meaning: "Som", kunyomi: "おと", onyomi: "オン" },
      { character: "強", meaning: "Forte", kunyomi: "つよい", onyomi: "キョウ" },
      { character: "弱", meaning: "Fraco", kunyomi: "よわい", onyomi: "ジャク" },
      { character: "重", meaning: "Pesado", kunyomi: "おもい", onyomi: "ジュウ" },
      { character: "軽", meaning: "Leve", kunyomi: "かるい", onyomi: "ケイ" },
      { character: "広", meaning: "Amplo", kunyomi: "ひろい", onyomi: "コウ" },
      { character: "早", meaning: "Cedo", kunyomi: "はやい", onyomi: "ソウ" },
      { character: "遅", meaning: "Atrasado", kunyomi: "おそい", onyomi: "チ" },
      { character: "好", meaning: "Gostar", kunyomi: "すき", onyomi: "コウ" },
      { character: "悪", meaning: "Ruim", kunyomi: "わるい", onyomi: "アク" },
      { character: "暗", meaning: "Escuro", kunyomi: "くらい", onyomi: "アン" },
      { character: "社", meaning: "Empresa", kunyomi: "sha", onyomi: "シャ" },
      { character: "員", meaning: "Membro", kunyomi: "in", onyomi: "イン" },
      { character: "店", meaning: "Loja", kunyomi: "みせ", onyomi: "テン" },
      { character: "業", meaning: "Negócio", kunyomi: "gyou", onyomi: "ギョウ" },
      { character: "市", meaning: "Cidade", kunyomi: "いち", onyomi: "シ" },
      { character: "町", meaning: "Bairro", kunyomi: "まち", onyomi: "チョウ" },
      { character: "村", meaning: "Vila", kunyomi: "むら", onyomi: "ソン" },
      { character: "国", meaning: "País", kunyomi: "くに", onyomi: "コク" },
      { character: "病", meaning: "Doença", kunyomi: "byou", onyomi: "ビョウ" },
      { character: "院", meaning: "Hospital / Inst.", kunyomi: "in", onyomi: "イン" },
      { character: "買", meaning: "Comprar", kunyomi: "かう", onyomi: "バイ" },
      { character: "売", meaning: "Vender", kunyomi: "うる", onyomi: "バイ" },
      { character: "物", meaning: "Coisa", kunyomi: "もの", onyomi: "ブツ" },
      { character: "金", meaning: "Dinheiro", kunyomi: "かね", onyomi: "キン" },
      { character: "代", meaning: "Taxa / Era", kunyomi: "dai", onyomi: "ダイ" },
      { character: "料", meaning: "Ingrediente", kunyomi: "ryou", onyomi: "リョウ" },
      { character: "賃", meaning: "Aluguel", kunyomi: "chin", onyomi: "チン" },
      { character: "貸", meaning: "Emprestar", kunyomi: "かす", onyomi: "タイ" },
      { character: "借", meaning: "Tomar Emprestado", kunyomi: "かりる", onyomi: "シャク" },
      { character: "払", meaning: "Pagar", kunyomi: "はらう", onyomi: "フツ" },
      { character: "体", meaning: "Corpo", kunyomi: "からだ", onyomi: "タイ" },
      { character: "頭", meaning: "Cabeça", kunyomi: "あたま", onyomi: "トウ" },
      { character: "顔", meaning: "Rosto", kunyomi: "かお", onyomi: "ガン" },
      { character: "足", meaning: "Pé / Perna", kunyomi: "あし", onyomi: "ソク" },
      { character: "心", meaning: "Coração", kunyomi: "こころ", onyomi: "シン" },
      { character: "薬", meaning: "Remédio", kunyomi: "くすり", onyomi: "ヤク" },
      { character: "痛", meaning: "Dor", kunyomi: "いたい", onyomi: "ツウ" },
      { character: "医", meaning: "Médico", kunyomi: "isha", onyomi: "イ" },
      { character: "食", meaning: "Comer", kunyomi: "たべる", onyomi: "ショク" },
      { character: "飲", meaning: "Beber", kunyomi: "のむ", onyomi: "イン" },
      { character: "飯", meaning: "Refeição", kunyomi: "meshi", onyomi: "ハン" },
      { character: "肉", meaning: "Carne", kunyomi: "niku", onyomi: "ニク" },
      { character: "魚", meaning: "Peixe", kunyomi: "さかな", onyomi: "ギョ" },
      { character: "茶", meaning: "Chá", kunyomi: "ocha", onyomi: "チャ" },
      { character: "味", meaning: "Sabor", kunyomi: "aji", onyomi: "ミ" },
      { character: "理", meaning: "Razão", kunyomi: "ri", onyomi: "リ" },
      { character: "具", meaning: "Utensílio", kunyomi: "gu", onyomi: "グ" },
      { character: "洗", meaning: "Lavar", kunyomi: "あらう", onyomi: "セン" },
      { character: "万", meaning: "Dez Mil", kunyomi: "man", onyomi: "マン" },
      { character: "億", meaning: "Cem Milhões", kunyomi: "oku", onyomi: "オク" },
      { character: "度", meaning: "Graus", kunyomi: "tabi", onyomi: "ド" },
      { character: "特", meaning: "Especial", kunyomi: "toku", onyomi: "トク" },
      { character: "別", meaning: "Separar", kunyomi: "betsu", onyomi: "ベツ" },
      { character: "同", meaning: "Mesmo", kunyomi: "onaji", onyomi: "ドウ" },
      { character: "異", meaning: "Diferente", kunyomi: "koto", onyomi: "イ" },
      { character: "集", meaning: "Reunir", kunyomi: "atsumaru", onyomi: "シュウ" },
      { character: "合", meaning: "Combinar", kunyomi: "au", onyomi: "ゴウ" },
      { character: "始", meaning: "Iniciar", kunyomi: "hajimaru", onyomi: "シ" },
      { character: "作", meaning: "Fazer", kunyomi: "tsukuru", onyomi: "サク" },
      { character: "使", meaning: "Usar", kunyomi: "tsukau", onyomi: "シ" },
      { character: "切", meaning: "Cortar", kunyomi: "kiru", onyomi: "セツ" },
      { character: "送", meaning: "Enviar", kunyomi: "okuru", onyomi: "ソウ" },
      { character: "支", meaning: "Apoiar", kunyomi: "sasaeru", onyomi: "シ" },
      { character: "覚", meaning: "Lembrar", kunyomi: "oboeru", onyomi: "カク" },
      { character: "忘", meaning: "Esquecer", kunyomi: "wasureru", onyomi: "ボウ" },
      { character: "持", meaning: "Ter / Segurar", kunyomi: "motsu", onyomi: "ジ" },
      { character: "留", meaning: "Permanecer", kunyomi: "tomeru", onyomi: "リュウ" }
    ]
  }
];
