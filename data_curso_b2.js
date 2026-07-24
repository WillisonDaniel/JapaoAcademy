// ==========================================
// BANCO DE DADOS DO CURSO DE JAPONÊS - NÍVEL B2 (AVANÇADO)
// ==========================================

const MODULO_B2_01 = {
    id: "b2_mod_01",
    title: "Expressando Expectativas e Decepções: ~ni nihonki e ~koto ni natte iru",
    section: 1,
    sectionTitle: "Nuances Avançadas & Expressão de Emoções",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Ashita wa ame ga furu koto ni natte iru.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Explore os sentimentos sutis do japonês avançado: expressar regras e agendamentos oficiais (~koto ni natte iru) e a quebra de expectativas/decepções com polidez."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～ことになっている", romaji: "~koto ni natte iru", translation: "Está estabelecido que... / É regra que...", timeContext: "Regras sociais e compromissos pré-fixados." },
        { type: "vocab", kanji: "期待 (きたい)", romaji: "Kitai", translation: "Expectativa / Esperança", timeContext: "Sentimento em relação ao futuro." },
        { type: "grammar_pill", title: "Expressando Regras e Convenções Socialmente Estabelecidas", rule: "Usa-se Frase Dicionário/Nai + ことになっている (koto ni natte iru) para indicar acordos ou regras que não dependem da decisão do momento.", formula: "[Verbo Dicionário/Nai] + ことになっている", example: "Kono heya de wa sho o nugu koto ni natte iru (Está estabelecido que se tiram os sapatos nesta sala)." }
    ],
    stage3_practice: [
        { question: "1. Como dizer 'Está estabelecido pela regra que a reunião começa às 9h'?", options: [{ label: "Kaigi wa ku-ji kara hajimaru koto ni natte imasu", isCorrect: true }, { label: "Kaigi wa ku-ji kara hajimaru to omoimasu", isCorrect: false }, { label: "Kaigi wa ku-ji kara hajimatte kudasai", isCorrect: false }] },
        { question: "2. Como expressar a decepção 'Apesar das expectativas, o filme foi sem graça'?", options: [{ label: "Kitai shite ita wari ni wa, eiga wa tsumaranakatta desu", isCorrect: true }, { label: "Kitai wa oishii desu", isCorrect: false }, { label: "Eiga o tabemashita", isCorrect: false }] },
        { question: "3. Traduza: 'Koko de wa shashin o toranai koto ni natte imasu'", options: [{ label: "É regra aqui não tirar fotos", isCorrect: true }, { label: "Tire fotos aqui por favor", isCorrect: false }, { label: "Gosto de fotos", isCorrect: false }] },
        { question: "4. Qual a diferença de '~koto ni natte iru' para '~koto ni suru'?", options: [{ label: "~koto ni natte iru é uma regra/acordo coletivo; ~koto ni suru é uma decisão individual", isCorrect: true }, { label: "Não há diferença", isCorrect: false }, { label: "Usados apenas para bebidas", isCorrect: false }] },
        { question: "5. Como dizer 'Está previsto que o contrato expira no mês que vem'?", options: [{ label: "Raigetsu keiyaku ga kireru koto ni natte imasu", isCorrect: true }, { label: "Raigetsu keiyaku o kirete kudasai", isCorrect: false }, { label: "Raigetsu keiyaku o shimasu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "けいざい の へんか に ともない けいかく を みなおします",
            translation: "Acompanhando as mudanças econômicas, revisaremos o plano.",
            chunks: ["けいざい", "の", "へんか", "に", "ともない", "けいかく", "を", "みなおします"]
        },
        {
            sentenceJp: "ビジネス において しんらい が いちばん じゅうよう です",
            translation: "No mundo dos negócios, a confiança é o mais importante.",
            chunks: ["ビジネス", "において", "しんらい", "が", "いちばん", "じゅうよう", "です"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: No condomínio japonês, você conversa com o síndico sobre as regras de coleta de lixo.", npcName: "Síndico Noguchi", npcMessage: "[Seu Nome]-san, kanri kisho ni yoru to, gomi wa asa hachi-ji maeni dasu koto ni natte imasu yo. (Segundo o regulamento, está estabelecido que o lixo deve ser colocado antes das 8h.)", options: [{ text: "Ha! Shouchi shimashita! Kakunin shite okimasu! (Ah! Compreendido! Vou deixar confirmado!)", feedback: "Respeito e compreensão de norma social avançada!", isCorrect: true }, { text: "Gomi wa oishii desu.", feedback: "Sem nexo.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O síndico explica que houve reclamações de vizinhos por ruído.", npcName: "Síndico Noguchi", npcMessage: "Yoru juu-ji以降 (ikou) wa shizuka ni suru koto ni natte iru node, ki o tsukete kudasai. (Como é regra ficar em silêncio após as 22h, por favor tome cuidado.)", options: [{ text: "Gok迷惑 (meiwaku) o okake shite moushiwake arimasen. Zettai ni ki o tsukemasu. (Mil desculpas por causar transtorno. Com certeza terei mais cuidado.)", feedback: "Linguagem corporativa e polidez social exemplar!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai desu.", feedback: "Pouco formal.", isCorrect: false }] },
        { scenario: "Situação 3: O síndico agradece sua cooperação.", npcName: "Síndico Noguchi", npcMessage: "Wakatte kurete tasukaru yo. Yoroshiku. (Ajuda muito você compreender. Conto com você.)", options: [{ text: "Kochira koso, kongo to mo yoroshiku o-negai itashimasu. (Eu é quem agradeço, conto com a sua orientação constante.)", feedback: "Etiqueta avançada de nível B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que indica a estrutura gramatical '~koto ni natte iru'?", options: ["Uma regra, norma ou agendamento socialmente estabelecido", "Uma decisão individual recente", "Uma proibição informal"], correctIndex: 0 }]
};

const MODULO_B2_02 = {
    id: "b2_mod_02",
    title: "Nuances de 'Apenas' e 'Somente' Avançados: ~dake de naku e ~ni suginai",
    section: 1,
    sectionTitle: "Nuances Avançadas & Expressão de Emoções",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Nihon-go dake de naku, Kanji mo benkyou shite imasu. Kore wa ippo ni suginai.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Eleve seu repertório expressativo para além do simples 'dake'. Domine estruturas refinadas como 'Não apenas X, mas também Y' (~dake de naku) e a modéstia avançada 'Nada mais é do que...' (~ni suginai)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～だけでなく", romaji: "~dake de naku", translation: "Não apenas... como também...", timeContext: "Adicionar argumentos e nuances." },
        { type: "vocab", kanji: "～にすぎない", romaji: "~ni suginai", translation: "Nada mais é do que... / Não passa de...", timeContext: "Modéstia ou limitação consciente." },
        { type: "grammar_pill", title: "Construindo Frases de Acréscimo e Modéstia Avançada", rule: "1) Frase A + だけでなく (dake de naku) + Frase B = Não só A, como B. 2) Substantivo/Verbo Casual + にすぎない (ni suginai) = Não passa de X.", formula: "[A] だけでなく [B] | [Frase] + にすぎない", example: "Kare wa kashikoi dake de naku, yasashii desu (Ele não é apenas inteligente, mas também gentil)." }
    ],
    stage3_practice: [
        { question: "1. Como dizer 'Ele fala não apenas japonês, mas também chinês'?", options: [{ label: "Kare wa Nihon-go dake de naku, Chuugoku-go mo hanasemasu", isCorrect: true }, { label: "Kare wa Nihon-go dake hanasemasu", isCorrect: false }, { label: "Kare wa Nihon-go to Chuugoku-go ga kirai desu", isCorrect: false }] },
        { question: "2. Como expressar a modéstia 'Isso é apenas um pequeno passo no meu aprendizado'?", options: [{ label: "Kore wa watashi no gokushin no ippo ni suginai", isCorrect: true }, { label: "Kore wa ippo desu ka", isCorrect: false }, { label: "Kore wa ippo o tabemashita", isCorrect: false }] },
        { question: "3. Traduza: 'Kono shouhin wa kirei na dake de naku, benri desu'", options: [{ label: "Este produto não é apenas bonito, como é prático", isCorrect: true }, { label: "Este produto é muito feio", isCorrect: false }, { label: "Não compre este produto", isCorrect: false }] },
        { question: "4. Qual o efeito diplomático de usar '~ni suginai' ao se referir à própria conquista?", options: [{ label: "Demonstrar modéstia profissional avançada", isCorrect: true }, { label: "Exagera e ostenta", isCorrect: false }, { label: "Despede-se da pessoa", isCorrect: false }] },
        { question: "5. Como dizer 'O sucesso não passa de um resultado do esforço diário'?", options: [{ label: "Seikou wa mainichi no doryoku no kekka ni suginai", isCorrect: true }, { label: "Seikou wa doryoku desu ka", isCorrect: false }, { label: "Seikou wa arimasen deshita", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "環境 問題 に 対して 対策 を たてる 必要 が あります",
            translation: "É necessário tomar medidas contra os problemas ambientais.",
            chunks: ["環境", "問題", "に", "対して", "対策", "を", "たてる", "必要", "が", "あります"]
        },
        {
            sentenceJp: "新しい 技術 を 導入 する こと になりました",
            translation: "Ficou decidido introduzir novas tecnologias.",
            chunks: ["新しい", "技術", "を", "導入", "する", "こと", "になりました"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Em um simpósio acadêmico, o mediador elogia a sua apresentação.", npcName: "Mediador Simpósio", npcMessage: "[Seu Nome]-san, subarashii bunseki deshita! (Foi uma análise espetacular!)", options: [{ text: "Koure wa watashi no shiron ni suginai desu ga, kounai ni oyobaneba saiwaikou desu. (Nada mais é do que a minha modesta tese, mas seria uma honra se servir de contribuição.)", feedback: "Modéstia acadêmica avançada perfeita!", isCorrect: true }, { text: "Watashi wa天才 (tensai) desu!", feedback: "Arrogante e inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida sem sentido.", isCorrect: false }] },
        { scenario: "Situação 2: O mediador ressalta que seus dados beneficiarão a empresa inteira.", npcName: "Mediador Simpósio", npcMessage: "Team dake de naku, kaisha zenntai no shien ni narimasu yo. (Beneficiará não apenas a equipe, mas a empresa toda.)", options: [{ text: "Kono seika wa team minasan no doryoku no kekka dake de naku, shien no okage desu. (Este resultado não é só fruto do esforço da equipe, como também do apoio de todos.)", feedback: "Uso magnífico de dake de naku!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem motivo para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: O mediador deseja sucesso nos próximos passos do projeto.", npcName: "Mediador Simpósio", npcMessage: "Kongo no katsudou mo kitai shite orimasu. (Esperamos grandes realizações nas suas próximas atividades.)", options: [{ text: "Kitai ni kotaerareuよう, kongo mo精進 (shoujin) itashimasu! (Me dedicarei ao máximo para corresponder às expectativas!)", feedback: "Kenjougo corporativo refinado!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Pouco profissional.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que expressa a estrutura '~dake de naku'?", options: ["Acréscimo enfático ('não apenas X, mas também Y')", "Uma escolha exclusiva de apenas um item", "Uma proibição severa"], correctIndex: 0 }]
};

const MODULO_B2_03 = {
    id: "b2_mod_03",
    title: "Expressando Julgamentos e Críticas Sutis: ~kuse ni e ~wari ni wa",
    section: 1,
    sectionTitle: "Nuances Avançadas & Expressão de Emoções",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Shiranai kuse ni, hanasanaide. Nedan no wari ni wa oishii.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Domine a gramática das contradições e expectativas: expressar críticas sutis ('Apesar de não saber, fala como se soubesse') com ~kuse ni e relações de custo-benefício ('Considerando o preço, está ótimo') com ~wari ni wa."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～くせに", romaji: "~kuse ni", translation: "Apesar de... / Sendo que... (Crítica/Irritação)", timeContext: "Expressar contradição de atitude negativa de alguém." },
        { type: "vocab", kanji: "～わりに（は）", romaji: "~wari ni (wa)", translation: "Considerando que... / Em proporção a...", timeContext: "Avaliação de custo-benefício ou proporção." },
        { type: "grammar_pill", title: "Contradição Emocional vs Avaliação Proporcional", rule: "1) ~kuse ni indica irritação quando a ação de alguém contradiz sua condição (Kodomo no kuse ni = Sendo apenas uma criança...). 2) ~wari ni wa avalia se o resultado supera ou não o esperado para a proporção.", formula: "[Forma Casual] + くせに | [Forma Casual] + わりに(は)", example: "Shiranai kuse ni ibaru na (Não se gabe sendo que nem sabe) | Kono mise wa nedan no wari ni wa oishii (Esta loja é gostosa considerando o preço)." }
    ],
    stage3_practice: [
        { question: "1. Como expressar irritação: 'Ele não faz nada, apesar de reclamar sempre'?", options: [{ label: "Kare wa monku o iu kuse ni, nani mo shinai", isCorrect: true }, { label: "Kare wa monku o iu wari ni wa, nani mo shinai", isCorrect: false }, { label: "Kare wa monku o itte kudasai", isCorrect: false }] },
        { question: "2. Como elogiar um hotel econômico: 'Considerando que é barato, o quarto é bem limpo'?", options: [{ label: "Yasui wari ni wa, heya ga kirei desu", isCorrect: true }, { label: "Yasui kuse ni, heya ga kirei desu", isCorrect: false }, { label: "Yasui to omoimasu", isCorrect: false }] },
        { question: "3. Traduza: 'Nihon-jin no kuse ni, Kanji ga yomenai'", options: [{ label: "Apesar de ser japonês, não consegue ler Kanji (Contradição)", isCorrect: true }, { label: "Todo japonês lê Kanji", isCorrect: false }, { label: "Kanji é gostoso", isCorrect: false }] },
        { question: "4. Qual a diferença de tom entre '~kuse ni' e '~wari ni wa'?", options: [{ label: "~kuse ni traz forte tom de crítica/reprovação; ~wari ni wa é uma comparação proporcional objetiva", isCorrect: true }, { label: "Não há diferença", isCorrect: false }, { label: "Ambos são usados apenas para animais", isCorrect: false }] },
        { question: "5. Como dizer 'Para a idade dele, ele parece muito jovem'?", options: [{ label: "Neshirai no wari ni wa, wakaku miemasu", isCorrect: true }, { label: "Neshirai no kuse ni, wakaku miemasu", isCorrect: false }, { label: "Neshirai wa ikura desu ka", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "少子化 に 伴い 労働力 が 減少 しています",
            translation: "Acompanhando a baixa natalidade, a força de trabalho está diminuindo.",
            chunks: ["少子化", "に", "伴い", "労働力", "が", "減少", "しています"]
        },
        {
            sentenceJp: "高齢化 社会 への 対策 が 急務 です",
            translation: "As medidas para a sociedade envelhecida são urgentes.",
            chunks: ["高齢化", "社会", "への", "対策", "が", "急務", "です"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você e seu colega comentam sobre uma nova loja de departamento na cidade.", npcName: "Kenji", npcMessage: "[Seu Nome]-san, ano atarashii mise, nedan ga takai ne. (Aquela loja nova é cara, né.)", options: [{ text: "Un, demo nedan no wari ni wa quoriti (shiina) ga yoshiku nai ne. (É, mas considerando o preço alto, a qualidade não é tão boa, né.)", feedback: "Avaliação de custo-benefício refinada com wari ni wa!", isCorrect: true }, { text: "Mise o tabemashita.", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: Kenji comenta sobre um influenciador que critica a loja sem ter ido lá.", npcName: "Kenji", npcMessage: "Ano reviewer, itta koto nai kuse ni, warui koto bakari kaite iru yo. (Aquele crítico, apesar de nunca ter ido lá, só escreve coisa ruim.)", options: [{ text: "Hontou da ne! Jissai ni itte inai kuse ni, hihan suru no wa ikenai yo ne. (Verdade! Criticismo sem nem ter ido lá de verdade é feio, né.)", feedback: "Uso perfeito da crítica empática com kuse ni!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem motivo para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: Vocês decidem ir testar a loja por conta própria antes de julgar.", npcName: "Kenji", npcMessage: "Jibun-tachi de itte tashikameyou! (Vamos nós mesmos lá verificar!)", options: [{ text: "Un! Jibun no me de miteru no ga ichiban da ne! (É! Ver com os próprios olhos é a melhor coisa!)", feedback: "Conexão fluida de nível B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual a nuance emocional carregada pela expressão '~kuse ni'?", options: ["Crítica ou reprovação diante de uma contradição de atitude de alguém", "Gratidão profunda por um favor", "Uma ordem de trabalho"], correctIndex: 0 }]
};

const MODULO_B2_04 = {
    id: "b2_mod_04",
    title: "Linguagem Figurada e Expressões Idiomáticas (Kanyouku)",
    section: 1,
    sectionTitle: "Nuances Avançadas & Expressão de Emoções",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Me ga回 (mawa) ru isogashisa. Kao ga hiroi desu ne.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Aprenda os Kanyouku (Expressões Idiomáticas Japonesas)! Dominar metáforas com partes do corpo ('ter olhos atentos', 'ter um rosto largo/ser famoso', 'dar uma mãozinha') é o verdadeiro diferencial do japonês fluente."
    },
    stage2_drops: [
        { type: "vocab", kanji: "かんようく (慣用句)", romaji: "Kanyouku", translation: "Expressão idiomática", timeContext: "Metáforas culturais da língua japonesa." },
        { type: "vocab", kanji: "顔が広い (かおがひろい)", romaji: "Kao ga hiroi", translation: "Ter o rosto largo (Ser muito bem conectado/famoso)", timeContext: "Expressão idiomática de contatos sociais." },
        { type: "vocab", kanji: "手を貸す (てをかす)", romaji: "Te o kasu", translation: "Emprestar a mão (Dar uma ajuda)", timeContext: "Oferecer auxílio." },
        { type: "grammar_pill", title: "Metáforas com Partes do Corpo (Kanyouku)", rule: "1) Me ga mawaru (A cabeça/olhos giram = Estar extremamente ocupado). 2) Kao ga hiroi (Conhecer muita gente). 3) Te o kasu (Ajudar). 4) Kuchi ga karai (Boca leve = Não guardar segredo).", formula: "[Parte do Corpo] + [Verbo/Adjetivo Idiomático]", example: "Saikin me ga mawaru isogashisa desu (Ultimamente estou num ritmo de trabalho vertiginoso)." }
    ],
    stage3_practice: [
        { question: "1. O que significa a expressão idiomática 'Kao ga hiroi (顔が広い)'?", options: [{ label: "Ser uma pessoa muito popular e bem conectada", isCorrect: true }, { label: "Ter um rosto grande fisicamente", isCorrect: false }, { label: "Estar com dor de dente", isCorrect: false }] },
        { question: "2. Como pedir ajuda a um colega usando a metáfora 'Emprestar a mão'?", options: [{ label: "Chotto te o kashte kure nai?", isCorrect: true }, { label: "Chotto te o tabete kudasai", isCorrect: false }, { label: "Chotto me o kashte kudasai", isCorrect: false }] },
        { question: "3. O que expressa a frase 'Saikin me ga mawaru isogashisa desu'?", options: [{ label: "Estou tão ocupado que meus olhos estão girando / ritmo insano", isCorrect: true }, { label: "Estou com tontura médica", isCorrect: false }, { label: "Não tenho nada para fazer", isCorrect: false }] },
        { question: "4. Traduza: 'Kare wa kuchi ga karai node, himitsu o hanasani de'", options: [{ label: "Como a boca dele é leve (fofoqueiro), não conte segredos a ele", isCorrect: true }, { label: "Ele gosta de comida apimentada", isCorrect: false }, { label: "Ele não fala japonês", isCorrect: false }] },
        { question: "5. Qual expressão idiomática significa 'Ficar de olho em algo/cuidar'?", options: [{ label: "Me o kubaru / Me o tsukeru", isCorrect: true }, { label: "Mimi o taberu", isCorrect: false }, { label: "Te o kiki", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "プロジェクト の 成功 に 向けて 全力 を つくします",
            translation: "Daremos o nosso melhor em direção ao sucesso do projeto.",
            chunks: ["プロジェクト", "の", "成功", "に", "向けて", "全力", "を", "つくします"]
        },
        {
            sentenceJp: "チーム の 協力 なし には 達成 できません",
            translation: "Sem a cooperação da equipe, não se pode alcançar.",
            chunks: ["チーム", "の", "協力", "なし", "には", "達成", "できません"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você e seu colega corporativo estão sobrecarregados de projetos no escritório.", npcName: "Satoshi", npcMessage: "[Seu Nome]-san, saikin shigoto de me ga mawaru isogashisa da ne... (Nossa, ultimamente estamos ocupados a ponto dos olhos girarem...)", options: [{ text: "Hontou ni! Te o kashite kureru hito ga ireba ii n da kedo ne. (Verdade! Seria ótimo se tivesse alguém para nos dar uma mãozinha, né.)", feedback: "Metáfora de ajuda (te o kasu) perfeitamente aplicada!", isCorrect: true }, { text: "Te o tabemashita.", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: Satoshi lembra que o gerente tem muitos contatos em outros setores.", npcName: "Satoshi", npcMessage: "Sato-buchou wa kao ga hiroi kara, dare ka shoukai shite kureru kamo! (Como o chefe Sato é muito bem conectado, pode ser que nos apresente alguém!)", options: [{ text: "Sou da ne! Buchou ni相談 (soudan) shite miru koto ni suru yo! (É verdade! Decidi tentar consultar o chefe!)", feedback: "Uso brilhante de kamo, te miru e koto ni suru!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: Satoshi deseja sorte na conversa com o chefe.", npcName: "Satoshi", npcMessage: "Yoroshiku頼 (tano) mu yo! (Conto com você nessa!)", options: [{ text: "Un! Ii henji o moraeru you ganbaru yo! (Beleza! Vou me esforçar para conseguir uma boa resposta!)", feedback: "Conversa empolgante de nível avançado B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que significa a metáfora japonesa 'Te o kasu (手を貸す)'?", options: ["Dar uma mãozinha / Ajudar alguém em uma tarefa", "Emprestar dinheiro", "Cortar a mão"], correctIndex: 0 }]
};

const MODULO_B2_05 = {
    id: "b2_mod_05",
    title: "Keigo Avançado: Sonkeigo e Kenjougo Profundos na Alta Liderança",
    section: 2,
    sectionTitle: "O Mundo dos Negócios & Etiqueta Corporativa",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Go-zanran ni narimashita. O-me ni kakarete koue desu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Suba o último degrau da linguagem corporativa! Domine as formas mais elevadas de Keigo profissional usadas diante de diretoria, CEOs e governantes: O-me ni kakarer (Encontrar) e Guran ni naru."
    },
    stage2_drops: [
        { type: "vocab", kanji: "お目にかかる", romaji: "O-me ni kakaru", translation: "Encontrar (Kenjougo avançado de Aimeu)", timeContext: "Dizer que você encontrou/conheceu um cliente/chefe." },
        { type: "vocab", kanji: "ご覧になる", romaji: "Guran ni naru", translation: "Ver / Olhar (Sonkeigo de Miru)", timeContext: "Convidar o cliente a olhar um documento." },
        { type: "grammar_pill", title: "Verbos Supremos de Keigo Corporativo", rule: "1) Aru ➔ Gozaimasu. 2) Au (Encontrar) ➔ O-me ni kakaru. 3) Shiru (Saber) ➔ Go-zonji desu (Sonkeigo) / Zonji-agesuru (Kenjougo). 4) Taberu ➔ Meshiagaru (Sonkeigo) / Itadaku (Kenjougo).", formula: "Sonkeigo (Outro) vs Kenjougo (Eu)", example: "Shachou ni o-me ni kakarete, taihen koue de gozaimasu (Foi uma honra imensa encontrar o Presidente)." }
    ],
    stage3_practice: [
        { question: "1. Qual o verbo em Kenjougo avançado para dizer a um CEO 'É uma honra conhecê-lo/encontrá-lo'?", options: [{ label: "O-me ni kakarete koue desu", isCorrect: true }, { label: "Aite koudou desu", isCorrect: false }, { label: "Mite kudasai desu", isCorrect: false }] },
        { question: "2. Como perguntar respeitosamente a um cliente 'O senhor já tomou conhecimento deste projeto?'", options: [{ label: "Kono project o go-zonji desu ka?", isCorrect: true }, { label: "Kono project o shirimashita ka?", isCorrect: false }, { label: "Kono project o shiru tsumori desu ka?", isCorrect: false }] },
        { question: "3. Traduza: 'Kozutsumi o guran ni natte kudasai'", options: [{ label: "Por favor, observe/verifique o documento", isCorrect: true }, { label: "Olhe para mim", isCorrect: false }, { label: "Não olhe para nada", isCorrect: false }] },
        { question: "4. Qual é o verbo de Kenjougo (humildade própria) para 'Saber / Ter conhecimento'?", options: [{ label: "Zonji-agesuru (存じ上げる)", isCorrect: true }, { label: "Go-zonji desu", isCorrect: false }, { label: "Shiru", isCorrect: false }] },
        { question: "5. Como dizer 'Temos todas as respostas prontas' na polidez Keigo suprema?", options: [{ label: "Kanzen na answer ga gozaimasu", isCorrect: true }, { label: "Answer ga arimasu yo", isCorrect: false }, { label: "Answer wa nai desu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "本日は お忙しい ところ お越しいただき ありがとうございます",
            translation: "Muito obrigado por vir hoje apesar de sua agenda ocupada.",
            chunks: ["本日は", "お忙しい", "ところ", "お越しいただき", "ありがとうございます"]
        },
        {
            sentenceJp: "ご検討 の ほど よろしく お願い申し上げます",
            translation: "Solicito cordialmente a sua consideração.",
            chunks: ["ご検討", "の", "ほど", "よろしく", "お願い申し上げます"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você está em uma reunião com o Presidente da empresa investidora internacional.", npcName: "Presidente Investidor", npcMessage: "[Seu Nome]-san, saikin no business performance wa ikaga desu ka? (Como está o desempenho recente dos negócios?)", options: [{ text: "Honjitsu wa o-me ni kakarete taihen koue de gozaimasu. Shiryou o go-junbi itashimashita node, guran ni natte kudasai. (Hoje é uma honra imensa encontrá-lo. Preparei os documentos, por favor os aprecie.)", feedback: "Keigo corporativo supremo irretocável de nível B2!", isCorrect: true }, { text: "Performance wa oishii desu.", feedback: "Sem nexo.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O Presidente Investidor folheia o relatório com entusiasmo.", npcName: "Presidente Investidor", npcMessage: "Subarashii data da. Kono plan wa sude ni go-zonji datta no ka? (Dados excelentes. Você já conhecia este plano?)", options: [{ text: "Hai, sude ni zonji-agete orimashita. Keikaku-dori ni shinkou itashimasu. (Sim, já tinha conhecimento prévio. Prosseguiremos exatamente conforme o planejamento.)", feedback: "Uso impecável de zonji-ageru e itashimasu!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: O Presidente aprova o investimento com um aperto de mão.", npcName: "Presidente Investidor", npcMessage: "Kongo no katsudou ni kitai shite iru yo. (Conto com suas atividades futuras.)", options: [{ text: "Kitai ni kotaerareruよう, zenshin-zenshin de shoujin itashimasu. Domo arigatou gozaimashita! (Me dedicarei com todo o corpo e alma para corresponder! Muito obrigado!)", feedback: "Encerramento de reunião executiva de altíssimo nível B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual verbo Kenjougo é usado para dizer que VOCÊ encontrou um cliente/superior com extremo respeito?", options: ["O-me ni kakaru (お目にかかる)", "Irassharu", "Meshiagaru"], correctIndex: 0 }]
};

const MODULO_B2_06 = {
    id: "b2_mod_06",
    title: "Redação de E-mails Corporativos & Relatórios: Aisatsu, Hondai e Musubi",
    section: 2,
    sectionTitle: "O Mundo dos Negócios & Etiqueta Corporativa",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Kono ken ni tsuite, ki-shou-ten-ketsu de report o sakusei shimashita.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Domine a arte da escrita de negócios em japonês! Aprenda a estrutura tripartite dos e-mails corporativos formais: Saudação Inicial (Aisatsu), Tópico Principal (Hondai) e Encerramento (Musubi)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "あいさつ (挨拶)", romaji: "Aisatsu", translation: "Saudação formal de e-mail", timeContext: "Primeira linha corporativa obrigatória." },
        { type: "vocab", kanji: "ほんだい (本題)", romaji: "Hondai", translation: "Assunto / Tópico principal", timeContext: "O corpo da mensagem." },
        { type: "vocab", kanji: "むすび (結び)", romaji: "Musubi", translation: "Encerramento / Conclusão", timeContext: "Linhas finais de polidez." },
        { type: "grammar_pill", title: "A Estrutura Perfeita do E-mail Corporativo B2", rule: "1) Aisatsu: Itsumo osewa ni natte orimasu. 2) Hondai: Kono ken ni tsuite go-renraku itashimashita (Entro em contato referente a este assunto). 3) Musubi: Kiso yoroshiku o-negai itashimasu.", formula: "Aisatsu ➔ Hondai ➔ Musubi", example: "Kono ken ni tsuite, tenpu-shiryou o go-kakunin kudasai (Referente a este assunto, favor verificar o anexo)." }
    ],
    stage3_practice: [
        { question: "1. Como iniciar o corpo principal (Hondai) de um e-mail de negócios pós-saudação?", options: [{ label: "Kono ken ni tsuite go-renraku itashimashita", isCorrect: true }, { label: "Konnichiwa, genki desu ka", isCorrect: false }, { label: "Sayounara, mata ashita", isCorrect: false }] },
        { question: "2. Qual a expressão formal usada ao anexar um documento de proposta ao e-mail?", options: [{ label: "Kikaku-sho o tenpu itashimashita node, go-kakunin kudasai", isCorrect: true }, { label: "Kikaku-sho o tabemashita", isCorrect: false }, { label: "Kikaku-sho wa arimasen", isCorrect: false }] },
        { question: "3. Traduza o fecho de e-mail: 'Kongo to mo kawaranu go-koujo o tamawari masu you...'", options: [{ label: "Solicito respeitosamente a continuidade da nossa valiosa parceria", isCorrect: true }, { label: "Estou cancelando o contrato", isCorrect: false }, { label: "Não me mande mais e-mails", isCorrect: false }] },
        { question: "4. Qual a ordem correta das 3 partes de um e-mail corporativo em japonês?", options: [{ label: "Aisatsu (Saudação) ➔ Hondai (Assunto) ➔ Musubi (Encerramento)", isCorrect: true }, { label: "Musubi ➔ Hondai ➔ Aisatsu", isCorrect: false }, { label: "Apenas Hondai", isCorrect: false }] },
        { question: "5. Como pedir desculpas em um e-mail por uma resposta tardia com elegância Keigo?", options: [{ label: "Go-renraku ga osoku narimashita koto, mukai-shou itashimasu", isCorrect: true }, { label: "Go-renraku wa kirai desu", isCorrect: false }, { label: "Gomen ne!", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "契約 の 条件 を 慎重 に 確認 する 必要があります",
            translation: "É necessário confirmar cuidadosamente as condições do contrato.",
            chunks: ["契約", "の", "条件", "を", "慎重", "に", "確認", "する", "必要があります"]
        },
        {
            sentenceJp: "双方 の 合意 に 基づいて 進めます",
            translation: "Avançaremos com base no acordo de ambas as partes.",
            chunks: ["双方", "の", "合意", "に", "基づいて", "進めます"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você revisa com seu supervisor a minuta do e-mail comercial para o cliente.", npcName: "Supervisor Mori", npcMessage: "[Seu Nome]-san, B2 project no e-meeru draft, dekita? (O rascunho do e-mail do projeto B2 ficou pronto?)", options: [{ text: "Hai! Aisatsu kara Musubi kore de tenpu shimashita. Go-kakunin itadakemasu ka? (Sim! Anexei da saudação ao encerramento. O senhor pode verificar?)", feedback: "Estruturação corporativa perfeita!", isCorrect: true }, { text: "E-meeru o tabemashita.", feedback: "Sem nexo.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O supervisor elogia a clareza do texto.", npcName: "Supervisor Mori", npcMessage: "Hondai ga meikaku de, sugbara shii bunshou da ne! (O assunto está claro, um excelente texto!)", options: [{ text: "Arigatou gozaimasu! Dewa, konoまま (mama) soshin itashimasu! (Muito obrigado! Então enviarei exatamente assim!)", feedback: "Profissionalismo e agilidade corporativa!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem motivo para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: O supervisor aprova o envio imediato.", npcName: "Supervisor Mori", npcMessage: "Yoroshiku o-negai suru yo! (Conto com você!)", options: [{ text: "Shouchi itashimashita. Soshin kanryou-go, re-report itashimasu! (Compreendido. Após o envio, me reporto novamente!)", feedback: "Comunicação de escritório impecável de nível B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Quais são os 3 blocos obrigatórios de um e-mail de negócios japonês?", options: ["Aisatsu (Saudação), Hondai (Tópico principal) e Musubi (Encerramento)", "Apenas o nome do remetente", "Código de barras"], correctIndex: 0 }]
};

const MODULO_B2_07 = {
    id: "b2_mod_07",
    title: "Negociação & Resolução de Conflitos: Discordar com Polidez",
    section: 2,
    sectionTitle: "O Mundo dos Negócios & Etiqueta Corporativa",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Moushiwake gozaimasen ga, kono jeiken wa uketori-kanemasu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "No Japão, discordar diretamente é considerado indelicado. Aprenda a arte da negociação diplomática: recusar ou propor alternativas usando ~kanemasu ('Fica difícil/impossível') e expressões amortecedoras."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～かねます", romaji: "~kanemasu", translation: "É difícil/impossível aceitar...", timeContext: "Recusa diplomática em negócios." },
        { type: "vocab", kanji: "あいにく", romaji: "Ainiku", translation: "Infelizmente / Lamentavelmente", timeContext: "Amortecedor antes de uma recusa." },
        { type: "grammar_pill", title: "A Gramática da Discordância Diplomática", rule: "Em vez de dizer 'Dekimasen' (Não posso), conecte o Verbo sem masu + かねます (kanemasu) para expressar imposição institucional suave.", formula: "[Verbo stem sem masu] + かねます", example: "Kono shoujin wa o-tsuke-kanemasu (Fica difícil aceitar este pedido nas condições atuais)." }
    ],
    stage3_practice: [
        { question: "1. Como recusar diplomaticamente uma proposta em uma reunião dizendo 'É difícil aceitar'?", options: [{ label: "Ainiku desu ga, kono keikaku wa uketori-kanemasu", isCorrect: true }, { label: "Kono keikaku wa dekimasen!", isCorrect: false }, { label: "Kono keikaku wa oishii desu", isCorrect: false }] },
        { question: "2. Qual a função da palavra amortecedora 'Ainiku (あいにく)' antes de uma resposta?", options: [{ label: "Suavizar a má notícia/recusa demonstrando empatia", isCorrect: true }, { label: "Fazer uma piada", isCorrect: false }, { label: "Gritar com o cliente", isCorrect: false }] },
        { question: "3. Traduza: 'Go-kitai ni soi-kanemasu koto o o-yurushi kudasai'", options: [{ label: "Por favor nos perdoe por não podermos atender às suas expectativas", isCorrect: true }, { label: "Atendemos tudo o que você pediu", isCorrect: false }, { label: "Não queremos conversa", isCorrect: false }] },
        { question: "4. Como propor uma alternativa sem confrontar o cliente diretamente?", options: [{ label: "Kono plan no kawari ni, B-plan wa ikaga desu ka?", isCorrect: true }, { label: "A-plan wa dame desu", isCorrect: false }, { label: "A-plan o tabemashita", isCorrect: false }] },
        { question: "5. Por que a estrutura '~kanemasu' é tão valorizada no japonês corporativo N2/B2?", options: [{ label: "Porque mantém a harmonia (Wa) ao negar a ação sem agredir verbalmente", isCorrect: true }, { label: "Porque é a palavra mais curta do dicionário", isCorrect: false }, { label: "Porque é usada apenas para crianças", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "市場 の ニーズ に 応じて 商品 を 開発 します",
            translation: "Desenvolvemos produtos de acordo com as necessidades do mercado.",
            chunks: ["市場", "の", "ニーズ", "に", "応じて", "商品", "を", "開発", "します"]
        },
        {
            sentenceJp: "競合 他社 との 差別化 が 鍵 となります",
            translation: "A diferenciação com empresas concorrentes torna-se a chave.",
            chunks: ["競合", "他社", "との", "差別化", "が", "鍵", "となります"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Um cliente solicita um desconto inviável de 50% no contrato.", npcName: "Cliente Exigente", npcMessage: "Kono nedan kara 50% discount shite kure nai ka? (Não dá para dar 50% de desconto neste valor?)", options: [{ text: "Ainiku desu ga, kono nedan de wa shounin-kanemasu. Kawari ni 10% no bonus o-tsuke itashimasu ga, ikaga desu ka? (Infelizmente fica difícil aprovar por esse valor. Em alternativa, podemos incluir um bônus de 10%, o que acha?)", feedback: "Negociação diplomática perfeita com kanemasu e proposta alternativa!", isCorrect: true }, { text: "Muri desu! Dame desu!", feedback: "Excessivamente agressivo e anti-profissional.", isCorrect: false }, { text: "Sayounara!", feedback: "Não abandone a negociação.", isCorrect: false }] },
        { scenario: "Situação 2: O cliente considera a proposta alternativa atraente.", npcName: "Cliente Exigente", npcMessage: "Fumu... 10% no bonus nara, bad ja nai ne. (Hmm... se for com o bônus de 10%, não é nada mau.)", options: [{ text: "Go-lingai itadaki arigatou gozaimasu! Dewa, B-plan de keiyaku-sho o o-machi itashimasu! (Obrigado por sua compreensão! Então prepararei o contrato pelo Plano B!)", feedback: "Fechamento de negócio magistral!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: O cliente aperta a mão em acordo.", npcName: "Cliente Exigente", npcMessage: "Yoroshiku頼 (tano) mu yo! (Conto com você!)", options: [{ text: "Kono-tabi wa seiritsu itashi, taihen koue de gozaimasu! (É uma imensa honra concretizarmos este acordo!)", feedback: "Fluência corporativa avançada de nível B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que a forma gramatical '~kanemasu' expressa no ambiente de negócios?", options: ["Uma recusa diplomática e respeitosa ('Fica difícil/impossível realizar...')", "Um elogio caloroso", "Uma confirmação imediata"], correctIndex: 0 }]
};

const MODULO_B2_08 = {
    id: "b2_mod_08",
    title: "Apresentações e Discursos de Negócios: Pitch Executivo B2",
    section: 2,
    sectionTitle: "O Mundo dos Negócios & Etiqueta Corporativa",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Kyou wa B2 project ni tsuite発表 (happyou) itashimasu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Domine a estrutura de um discurso e apresentação executiva (Pitch): introdução do tema, exposição de dados estatísticos, resposta a perguntas difíceis da plateia e encerramento memorável."
    },
    stage2_drops: [
        { type: "vocab", kanji: "はっぴょう (発表)", romaji: "Happyou", translation: "Apresentação / Anúncio público", timeContext: "Exposição de projetos corporativos." },
        { type: "vocab", kanji: "とうけい (統計)", romaji: "Toukei", translation: "Estatística / Dados", timeContext: "Fundamentação de argumentos em relatórios." },
        { type: "grammar_pill", title: "A Estrutura de uma Apresentação Executiva", rule: "1) Abertura: Kyou wa [Tema] ni tsuite happyou itashimasu. 2) Apresentação de dados: Kono toukei ni yoru to... 3) Pergunta da plateia: Go-shitsumon wa gozaimasu ka?", formula: "Happyou ➔ Toukei ➔ Shitsumon", example: "Toukei ni yoru to, uritage ga 20% zouta itashimashita (Segundo os dados estatísticos, as vendas subiram 20%)." }
    ],
    stage3_practice: [
        { question: "1. Como abrir um discurso formal de apresentação dizendo 'Hoje apresentarei sobre o projeto B2'?", options: [{ label: "Honjitsu wa B2 project ni tsuite happyou itashimasu", isCorrect: true }, { label: "Kyou wa B2 project o tabemasu", isCorrect: false }, { label: "B2 project wa arimasen", isCorrect: false }] },
        { question: "2. Como introduzir um gráfico de dados 'Segundo as estatísticas deste ano...'?", options: [{ label: "Kotoshi no toukei ni yoru to...", isCorrect: true }, { label: "Kotoshi no toukei wa oishii desu", isCorrect: false }, { label: "Kotoshi no toukei ni ikimashou", isCorrect: false }] },
        { question: "3. Traduza: 'Nanika go-shitsumon wa gozaimasu ka?'", options: [{ label: "Alguém possui alguma pergunta?", isCorrect: true }, { label: "Não façam perguntas", isCorrect: false }, { label: "A apresentação acabou", isCorrect: false }] },
        { question: "4. Como responder com polidez a uma pergunta da plateia antes de explicar?", options: [{ label: "Kicho na go-shitsumon, arigatou gozaimasu", isCorrect: true }, { label: "Daraku na shitsumon desu ne", isCorrect: false }, { label: "Shitsumon wa kirai desu", isCorrect: false }] },
        { question: "5. Como encerrar a apresentação agradecendo a atenção dos diretores?", options: [{ label: "Go-seichou, hontou ni arigatou gozaimashita", isCorrect: true }, { label: "Sayounara, ja ne", isCorrect: false }, { label: "Owari desu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "事故 を 未然 に 防ぐ ための 研修 を 行います",
            translation: "Realizamos treinamentos para prevenir acidentes com antecedência.",
            chunks: ["事故", "を", "未然", "に", "防ぐ", "ための", "研修", "を", "行います"]
        },
        {
            sentenceJp: "安全 管理 の 徹底 が 求められています",
            translation: "Exige-se rigor na gestão de segurança.",
            chunks: ["安全", "管理", "の", "徹底", "が", "求められています"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você está no palco do auditório corporativo iniciando seu Pitch para os executivos.", npcName: "Plateia de Executivos", npcMessage: "(Silêncio respeitoso aguardando o início do seu discurso)", options: [{ text: "Honjitsu wa o-isogashii naka, go-seichou itadaki arigatou gozaimasu. B2 project no happyou o hajimemasu. (Hoje, apesar da agenda corrida de todos, agradeço pela atenção. Daremos início à apresentação do projeto B2.)", feedback: "Abertura executiva de altíssimo nível!", isCorrect: true }, { text: "Konnichiwa! Minna genki?", feedback: "Muito informal para auditório executivo.", isCorrect: false }, { text: "Sayounara!", feedback: "Não fuja antes de apresentar.", isCorrect: false }] },
        { scenario: "Situação 2: Um dos diretores levanta a mão para fazer uma Pergunta sobre o orçamento.", npcName: "Diretor Financeiro", npcMessage: "Yosan no toukei ni tsuite, sukishi setsumei kure nai ka? (Pode explicar um pouco sobre a estatística do orçamento?)", options: [{ text: "Kicho na go-shitsumon, arigatou gozaimasu. Toukei ni yoru to, ROI wa 150% ni reached itashimasu. (Agradeço a valiosa pergunta. Segundo os dados estatísticos, o ROI atingirá 150%.)", feedback: "Resposta precisa e altamente polida!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem motivo para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: O auditório aplaude a sua apresentação.", npcName: "Plateia de Executivos", npcMessage: "(Aplausos entusiasmados dos diretores)", options: [{ text: "Go-seichou, hontou ni arigatou gozaimashita! (Muito obrigado a todos pela atenção!)", feedback: "Encerramento memorável de nível B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual a expressão clássica Keigo para agradecer a atenção da plateia ao fim de uma palestra?", options: ["Go-seichou, arigatou gozaimashita (ご清聴ありがとうございました)", "Itadakimasu", "O-yasumi nasai"], correctIndex: 0 }]
};

const MODULO_B2_09 = {
    id: "b2_mod_09",
    title: "Leitura de Notícias e Jornalismo: NHK News e Vocabulário Técnico",
    section: 3,
    sectionTitle: "Análise de Mídia, Notícias & Atualidades",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Keizai no toukei ni yoru to, keiki ga kaizou shite imasu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Desenvolva a capacidade de ler e entender notícias reais da imprensa japonesa (NHK News)! Aprenda o vocabulário de economia, política, tecnologia e atualidades internacionais."
    },
    stage2_drops: [
        { type: "vocab", kanji: "けいざい (経済)", romaji: "Keizai", translation: "Economia", timeContext: "Noticiário financeiro e de negócios." },
        { type: "vocab", kanji: "せいじ (政治)", romaji: "Seiji", translation: "Política", timeContext: "Assuntos governamentais." },
        { type: "grammar_pill", title: "A Linguagem Jornalística Japonesa (Da/Dewa arimasen)", rule: "Notícias e jornais usam estilo objetivo direto (~de aru em vez de ~desu) e passiva jornalística. Estrutura: [Fonte] によると (ni yoru to) = Segundo X.", formula: "[Fonte/Notícia] + によると (ni yoru to)", example: "NHK no news ni yoru to, keizai ga seichou shite iru (Segundo as notícias da NHK, a economia está crescendo)." }
    ],
    stage3_practice: [
        { question: "1. Traduza a manchete jornalística: 'Nihon no keizai ga seichou shite iru to報道 (houdo) sa reta'", options: [{ label: "Foi noticiado que a economia do Japão está crescendo", isCorrect: true }, { label: "A economia do Japão acabou", isCorrect: false }, { label: "Japão não tem notícias", isCorrect: false }] },
        { question: "2. Qual a expressão usada em matérias jornalísticas para indicar 'Segundo as fontes...'?", options: [{ label: "Houdo ni yoru to (報道によると)", isCorrect: true }, { label: "Houdo wa oishii desu", isCorrect: false }, { label: "Houdo ni ikimashou", isCorrect: false }] },
        { question: "3. O que significa a palavra jornalística 'Seiji (政治)'?", options: [{ label: "Política / Governança", isCorrect: true }, { label: "Alimentação saudável", isCorrect: false }, { label: "Estação de trem", isCorrect: false }] },
        { question: "4. Traduza: 'Atarashii gijutsu no kaihatsu ga hajimatta'", options: [{ label: "Começou o desenvolvimento de uma nova tecnologia", isCorrect: true }, { label: "A tecnologia foi destruída", isCorrect: false }, { label: "Não há tecnologia no país", isCorrect: false }] },
        { question: "5. Em que estilo gramatical as notícias formais impressas e na TV costumam ser escritas?", options: [{ label: "Estilo objetivo direto de relatórios (~de aru / passiva jornalística)", isCorrect: true }, { label: "Estilo informal com gírias e desu/masu exagerado", isCorrect: false }, { label: "Apenas em Romaji", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "世界 経済 の 動向 を 注視 する 必要 が あります",
            translation: "É necessário observar atentamente as tendências da economia mundial.",
            chunks: ["世界", "経済", "の", "動向", "を", "注視", "する", "必要", "が", "あります"]
        },
        {
            sentenceJp: "為替 の 変動 が 業績 に 影響 を 与えます",
            translation: "A flutuação cambial afeta o desempenho financeiro.",
            chunks: ["為替", "の", "変動", "が", "業績", "に", "影響", "を", "与えます"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você e seu colega discutem as notícias de economia no café matinal.", npcName: "Colega Hiro", npcMessage: "[Seu Nome]-san, kyou no NHK news, mita? (Viu as notícias da NHK de hoje?)", options: [{ text: "Un! News ni yoru to, Keizai no toukei ga kaizou shita to houdo sarete ita ne! (Sim! Segundo as notícias, foi noticiado que os dados da economia melhoraram, né!)", feedback: "Vocabulário jornalístico de Nível B2 impecável!", isCorrect: true }, { text: "News o tabemashita.", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: Hiro comenta sobre os investimentos na área de inteligência artificial e tecnologia.", npcName: "Colega Hiro", npcMessage: "AI to gijutsu no kaihatsu mo sugoi seichou da ne. (O desenvolvimento de IA e tecnologia também tá num crescimento incrível, né.)", options: [{ text: "Hontou da ne! Kono gijutsu no okage de, shakai ga yori benri ni naru to omoimasu. (Verdade! Graças a essa tecnologia, acho que a sociedade ficará mais prática.)", feedback: "Análise crítica de mídia excelente!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem motivo para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: Hiro propõe continuarem acompanhando o noticiário para o relatório.", npcName: "Colega Hiro", npcMessage: "Kashikoi bunseki da! Mainichi news o check shiyou! (Análise inteligente! Vamos checar as notícias todo dia!)", options: [{ text: "Un! Kokusai seiji no news mo check shite okou! (É! Vamos deixar checadas as notícias de política internacional também!)", feedback: "Fluência jornalística madura de nível B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual estrutura introduz a fonte de uma informação em matérias jornalísticas ('Segundo X...')?", options: ["[Fonte] に yoru to (によると)", "[Fonte] o tabemasu", "[Fonte] wa doko"], correctIndex: 0 }]
};

const MODULO_B2_10 = {
    id: "b2_mod_10",
    title: "Anúncios, Editais e Avisos Governamentais: Burocracia no Japão",
    section: 3,
    sectionTitle: "Análise de Mídia, Notícias & Atualidades",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Shiyakusho no shourui ni tsuite go-annai itashimasu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Navegue pela burocracia japonesa com autonomia! Aprenda a ler documentos de prefeitura (Shiyakusho), formulários de visto, editais formais e avisos governamentais."
    },
    stage2_drops: [
        { type: "vocab", kanji: "しやくしょ (市役所)", romaji: "Shiyakusho", translation: "Prefeitura municipal", timeContext: "Centro burocrático administrativo." },
        { type: "vocab", kanji: "しょうるい (書類)", romaji: "Shourui", translation: "Documentos / Formulários", timeContext: "Papéis oficiais." },
        { type: "grammar_pill", title: "Linguagem Oficial Administrativa", rule: "Avisos governamentais usam Keigo oficial extremo: ご + [Substantivo] + いただきます (go-... itadakimasu) = Solicitamos a gentileza de...", formula: "ご + [Substantivo Kanji] + ください / いただきます", example: "Shourui no teishutsu o go-kinyuu kudasai (Favor preencher e submeter os documentos)." }
    ],
    stage3_practice: [
        { question: "1. O que significa a palavra 'Shiyakusho (市役所)'?", options: [{ label: "Prefeitura Municipal / Centro administrativo", isCorrect: true }, { label: "Restaurante de ramem", isCorrect: false }, { label: "Estação de metrô", isCorrect: false }] },
        { question: "2. Como ler a instrução oficial em um formulário público: 'Go-kinyuu kudasai'?", options: [{ label: "Por favor, preencha os dados solicitados", isCorrect: true }, { label: "Não escreva nada", isCorrect: false }, { label: "Rasgue este papel", isCorrect: false }] },
        { question: "3. Traduza: 'Juuminkyou (住民票) no teishutsu ga hitsuyou desu'", options: [{ label: "É necessária a submissão do comprovante de residência", isCorrect: true }, { label: "Não precisa de comprovante", isCorrect: false }, { label: "Comprei uma casa", isCorrect: false }] },
        { question: "4. Qual a palavra oficial usada para a entrega/submissão de papéis no balcão da prefeitura?", options: [{ label: "Teishutsu (提出)", isCorrect: true }, { label: "Tabemono", isCorrect: false }, { label: "Kaisatsu", isCorrect: false }] },
        { question: "5. Como solicitar informações no guichê de atendimento: 'Gostaria de saber sobre os documentos do visto'?", options: [{ label: "Visa no shourui ni tsuite o-kiki itashitai desu ga...", isCorrect: true }, { label: "Visa wa oishii desu", isCorrect: false }, { label: "Visa o tabemashita", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "持続 可能な 社会 の 実現 を 目指します",
            translation: "Visamos a realização de uma sociedade sustentável.",
            chunks: ["持続", "可能な", "社会", "の", "実現", "を", "目指します"]
        },
        {
            sentenceJp: "環境 保全 と 経済 成長 の 両立 を 図ります",
            translation: "Buscamos o equilíbrio entre preservação ambiental e crescimento econômico.",
            chunks: ["環境", "保全", "と", "経済", "成長", "の", "両立", "を", "図ります"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você está no balcão de atendimento da prefeitura (Shiyakusho) para renovar seu registro de residência.", npcName: "Atendente da Prefeitura", npcMessage: "Irasshaimase. Honjitsu wa douno you na go-yongen desu ka? (Seja bem-vindo. Qual assunto o senhor deseja tratar hoje?)", options: [{ text: "Juuminkyou no teishutsu to shourui no kakunin o o-negai itashitai desu. (Gostaria de solicitar a entrega do comprovante de residência e confirmação de documentos.)", feedback: "Vocabulário burocrático administrativo perfeito!", isCorrect: true }, { text: "Juuminkyou o taberu?", feedback: "Muito informal e sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O atendente entrega o formulário e orienta sobre os campos obrigatórios.", npcName: "Atendente da Prefeitura", npcMessage: "Dewa, kono shourui ni namae to juusho o go-kinyuu itadakemasu ka? (Bem, o senhor poderia por gentileza preencher seu nome e endereço neste documento?)", options: [{ text: "Shouchi shimashita! Koko ni kinyuu shite, teishutsu itashimasu. (Compreendido! Preencherei aqui e farei a entrega.)", feedback: "Resposta oficial polida e segura!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem motivos para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: O atendente confere e carimba a aprovação dos seus documentos.", npcName: "Atendente da Prefeitura", npcMessage: "Kakunin itashimashita. Kono de suki naku kanryou desu. (Conferido. O procedimento foi concluído sem problemas.)", options: [{ text: "Teinei na go-annai, hontou ni arigatou gozaimashita! (Muito obrigado pelo atendimento impecável e atencioso!)", feedback: "Autonomia burocrática total de Nível B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que significa a instrução formal 'Go-kinyuu kudasai' em formulários oficiais?", options: ["Por favor, preencha as informações no documento", "Por favor, assine com caneta vermelha", "Por favor, rasgue o papel"], correctIndex: 0 }]
};

const MODULO_B2_11 = {
    id: "b2_mod_11",
    title: "Entendendo Mídia & Animes sem Legendas: Kansai-ben e Gírias Modernas",
    section: 3,
    sectionTitle: "Análise de Mídia, Notícias & Atualidades",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Mecha honmani eeya n! Yabai desu yo!",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Conquiste a capacidade de assistir filmes, animes e programas de TV sem legendas! Aprenda as estruturas do famoso dialeto de Kansai (Kansai-ben: ~ya, ~honmani) e gírias modernas da internet (Yabai, Mecha)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "かんさいべん (関西弁)", romaji: "Kansai-ben", translation: "Dialeto de Kansai (Osaka/Kyoto)", timeContext: "Dialeto regional mais famoso do Japão na mídia e comédia." },
        { type: "vocab", kanji: "ほんまに", romaji: "Honmani", translation: "De verdade / Sério (Kansai-ben de Hontou ni)", timeContext: "Enfático coloquial." },
        { type: "vocab", kanji: "めっちゃ / めちゃ", romaji: "Mecha / Metcha", translation: "Muito / Demais (Gíria moderna)", timeContext: "Intensificador de fala informal." },
        { type: "grammar_pill", title: "Gramática Básica do Dialeto de Kansai (Kansai-ben)", rule: "1) Desu ➔ Ya (や). 2) Nai ➔ N (Nai ➔ N: Shiranai ➔ Shiran). 3) Ii ➔ Ee (ええ). 4) Hontou ni ➔ Honmani (ほんまに).", formula: "Desu ➔ や (ya) | Nai ➔ ん (n)", example: "Honmani mecha ee ya n! (É bom demais de verdade, né!)" }
    ],
    stage3_practice: [
        { question: "1. O que significa a palavra em Kansai-ben 'Honmani (ほんまに)'?", options: [{ label: "De verdade / Sério mesmo (Hontou ni)", isCorrect: true }, { label: "Falso", isCorrect: false }, { label: "Amanhã", isCorrect: false }] },
        { question: "2. Como se diz 'Eu não sei' no dialeto informal de Osaka/Kansai?", options: [{ label: "Shiran! (しらん)", isCorrect: true }, { label: "Shirimashita", isCorrect: false }, { label: "Shiru desu", isCorrect: false }] },
        { question: "3. O que a gíria multifacetada moderna 'Yabai! (ヤバい)' pode significar dependendo do tom de voz?", options: [{ label: "Tanto 'Incrível/Demais!' quanto 'Caramba, deu ruim!'", isCorrect: true }, { label: "Apenas comida ruim", isCorrect: false }, { label: "Um tipo de peixe", isCorrect: false }] },
        { question: "4. Traduza a frase em Kansai-ben: 'Kore, mecha ee ya n!'", options: [{ label: "Isso é bom demais, né!", isCorrect: true }, { label: "Isso é muito ruim", isCorrect: false }, { label: "Não quero isso", isCorrect: false }] },
        { question: "5. Qual a versão equivalente do verbo 'Desu' no dialeto de Kansai?", options: [{ label: "や (ya)", isCorrect: true }, { label: "だ (da)", isCorrect: false }, { label: "ね (ne)", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "AI の 進化 は 働き方 を 根本 から 変えます",
            translation: "A evolução da IA muda radicalmente o modo de trabalhar.",
            chunks: ["AI", "の", "進化", "は", "働き方", "を", "根本", "から", "変えます"]
        },
        {
            sentenceJp: "デジタル 化 への 対応 が 遅れると 生き残れません",
            translation: "Se o envio à digitalização atrasar, não haverá sobrevivência.",
            chunks: ["デジタル", "化", "への", "対応", "が", "遅れると", "生き残れません"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você assiste a uma comédia (Manzai) de Osaka com seu amigo de Kansai.", npcName: "Amigo de Osaka", npcMessage: "Kono komedi, honmani mecha omoshiroi ya ro? (Essa comédia é boa demais de verdade, né não?)", options: [{ text: "Honmani da ne! Yabai shiru de mecha waratta yo! (Verdade mesmo! Foi incrível demais, rachei de rir!)", feedback: "Uso espetacular de gírias e dialecto entendidos com fluência!", isCorrect: true }, { text: "Komedi wa oishii desu.", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O amigo pergunta se você entende animes sem legendas agora.", npcName: "Amigo de Osaka", npcMessage: "Nihon no anime mo字幕 (jimaku) nashi de wakaru n desu ka? (Consegue entender animes em japonês sem legendas também?)", options: [{ text: "Un! Kansai-ben mo slang mo wakaru you ni narimashita! (Sim! Passei a conseguir entender tanto dialeto de Kansai quanto gírias!)", feedback: "Demonstração de autonomia cultural de Nível B2!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: O amigo celebra o seu nível de japonês nativo.", npcName: "Amigo de Osaka", npcMessage: "Mochiron ya! Mou Kansai-jin to onaji ya n! (Com certeza! Você já é igualzinho a um nativo de Kansai!)", options: [{ text: "Ookini! Motto benkyou shite, B2 master suru ya de! (Muito obrigado [em Kansai-ben]! Vou estudar mais e dominar o B2!)", feedback: "Imersão cultural plena de nível avançado B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que significa a palavra 'Honmani (ほんまに)' no dialeto de Kansai?", options: ["De verdade / Realmente (equivalente a Hontou ni)", "De jeito nenhum", "Talvez"], correctIndex: 0 }]
};

const MODULO_B2_12 = {
    id: "b2_mod_02",
    title: "Temas Sociais e Ambientais: Sociedade Envelhecida e Sustentabilidade",
    section: 3,
    sectionTitle: "Análise de Mídia, Notícias & Atualidades",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Koureika shakai to kankyou mondai ni tsuite kousatsu shimasu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Desenvolva repertório para debates maduros! Aprenda a discutir grandes temas da sociedade moderna japonesa: o envelhecimento populacional (Koureika shakai), a queda de natalidade (Shoushika) e a sustentabilidade ambiental."
    },
    stage2_drops: [
        { type: "vocab", kanji: "こうれいかしゃかい (高齢化社会)", romaji: "Koureika shakai", translation: "Sociedade envelhecida", timeContext: "Desafio demográfico central do Japão." },
        { type: "vocab", kanji: "かんきょうもんだい (環境問題)", romaji: "Kankyou mondai", translation: "Problema ambiental", timeContext: "Sustentabilidade e ecologia." },
        { type: "grammar_pill", title: "Expressando Causas de Impacto Social (~ni yotte / ~tame)", rule: "Para explicar grandes fenômenos sociais: [Causa] に yotte / のため + [Resultado Social].", formula: "[Fenômeno Social] + に伴って (ni tomonatte) / に yotte", example: "Shoushika ni yotte, gakkou no kazu ga减少 (genshou) shite iru (Devido à baixa natalidade, o número de escolas está diminuindo)." }
    ],
    stage3_practice: [
        { question: "1. O que significa o termo socioeconômico japonês 'Koureika shakai (高齢化社会)'?", options: [{ label: "Sociedade com população envelhecida", isCorrect: true }, { label: "Sociedade jovem e populosa", isCorrect: false }, { label: "Sociedade de robôs", isCorrect: false }] },
        { question: "2. Como dizer 'Precisamos pensar em soluções para os problemas ambientais'?", options: [{ label: "Kankyou mondai no kaiketzu-san o kangerukeru hitsuyou ga arimasu", isCorrect: true }, { label: "Kankyou mondai o tabemasu", isCorrect: false }, { label: "Kankyou mondai wa nai desu", isCorrect: false }] },
        { question: "3. Traduza: 'Shoushika ni yotte, koureika ga tiếnmuto iru'", options: [{ label: "Devido à baixa natalidade, o envelhecimento populacional avança", isCorrect: true }, { label: "Há muitas crianças no país", isCorrect: false }, { label: "O país não tem escolas", isCorrect: false }] },
        { question: "4. Qual a palavra usada para definir 'Sustentabilidade / Meio Ambiente' em debates?", options: [{ label: "Kankyou (環境) / Sutenaburiti", isCorrect: true }, { label: "Tabemono", isCorrect: false }, { label: "Oshirase", isCorrect: false }] },
        { question: "5. Como expressar a opinião 'É necessário usar energia renovável para o futuro'?", options: [{ label: "Mirai no tame ni saisei-enokyo o tsukau hitsuyou ga arimasu", isCorrect: true }, { label: "Mirai wa kirai desu", isCorrect: false }, { label: "Denki o tabemashou", isCorrect: false }] }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Em um painel de discussão na universidade, o mediador levanta a pauta demográfica.", npcName: "Mediador Painel", npcMessage: "[Seu Nome]-san, Nihon no koureika shakai ni tsuite dou kangaemasu ka? (O que pensa sobre a sociedade envelhecida no Japão?)", options: [{ text: "Shoushika ni yotte roudou-ryoku ga减少 (genshou) shite iru node, atarashii gijutsu no katsuyou ga hitsuyou da to omoimasu. (Como a força de trabalho diminui pela baixa natalidade, acho que a aplicação de novas tecnologias é necessária.)", feedback: "Argumentação sociológica refinada de Nível B2!", isCorrect: true }, { text: "Koureika wa oishii desu.", feedback: "Sem nexo.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O mediador pergunta sobre a questão ambiental associada.", npcName: "Mediador Painel", npcMessage: "Kankyou mondai to no balance mo taisetsu desu ne. (O equilíbrio com a questão ambiental também é essencial, né.)", options: [{ text: "Mochiron desu! Kankyou o mamo-rarei baga, keizai o seichou saseru koto ga kadai desu. (Com certeza! O desafio é fazer a economia crescer enquanto se protege o meio ambiente.)", feedback: "Combinação espetacular de causativa e argumentação B2!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem motivo para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: O mediador encerra o painel elogiando a sua contribuição.", npcName: "Mediador Painel", npcMessage: "Kicho na go-意見 (iken), arigatou gozaimashita! (Muito obrigado por sua valiosa opinião!)", options: [{ text: "Domo arigatou gozaimashita! Kisa de fururu ni kangaerarete koue desu. (Muito obrigado! Foi uma honra poder refletir profundamente sobre este tema!)", feedback: "Encerramento de debate de alto nível B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que significa o termo socioeconômico 'Shoushika (少子化)'?", options: ["Tendência de diminuição do número de nascimentos/filhos", "Aumento da população jovem", "Construção de novas praças"], correctIndex: 0 }]
};

const MODULO_B2_13 = {
    id: "b2_mod_13",
    title: "Conectores Lógicos e Transição Acadêmica: ~sae ~ba e ~ni mo karawazu",
    section: 4,
    sectionTitle: "Argumentação, Debates & Textos Acadêmicos",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Okane sae ireba, daijoubu. Toshiawase ni mo karawazu, shuppan shita.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Domine a coesão textual de nível acadêmico (N2/B2)! Aprenda as condicionais de garantia mínima ('Basta ter X que...') com ~sae ~ba e a oposição enfática 'Apesar de / Não obstante' com ~ni mo karawazu."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～さえ～ば", romaji: "~sae ~ba", translation: "Basta ter/fazer X que...", timeContext: "Condição suficiente e única." },
        { type: "vocab", kanji: "～にもかかわらず", romaji: "~ni mo karawazu", translation: "Apesar de... / Não obstante...", timeContext: "Contradição forte em ensaios acadêmicos." },
        { type: "grammar_pill", title: "Conectores de Redação Acadêmica Avançada", rule: "1) Substantivo + さえ (sae) + Verbo condicional ば (ba) = Basta apenas X. 2) Frase Casual / Substantivo + にもかかわらず (ni mo karawazu) = Não obstante a situação de X.", formula: "[Substantivo] さえ [Verbo-ba] | [Frase] にもかかわらず", example: "Jikan sae araba, dekiru (Basta ter tempo que dá para fazer) | Tai-ten ni mo karawazu, shuppan shita (Não obstante a forte tempestade, partiu)." }
    ],
    stage3_practice: [
        { question: "1. Como dizer na escrita acadêmica 'Basta ter paixão que qualquer objetivo é possível'?", options: [{ label: "情熱 (jounetsu) sae araba, douno goal mo dekiru", isCorrect: true }, { label: "Jounetsu wa oishii desu", isCorrect: false }, { label: "Jounetsu o tabemashita", isCorrect: false }] },
        { question: "2. Como expressar a contradição formal 'Apesar da chuva torrencial, o jogo continuou'?", options: [{ label: "Oome ni mo karawazu, shiai wa tsuzukimashita", isCorrect: true }, { label: "Oome node, shiai wa yamimashita", isCorrect: false }, { label: "Oome ni ikimashou", isCorrect: false }] },
        { question: "3. Traduza: 'Kare wa shoshinsha ni mo karawazu, pro mitai ni jouzu desu'", options: [{ label: "Não obstante ser um iniciante, ele é bom como um profissional", isCorrect: true }, { label: "Como ele é iniciante, não sabe nada", isCorrect: false }, { label: "Ele odeia profissionais", isCorrect: false }] },
        { question: "4. Qual conector expressa a ideia de 'condição única e suficiente' ('Basta apenas...')?", options: [{ label: "~sae ~ba (～さえ～ば)", isCorrect: true }, { label: "~kara", isCorrect: false }, { label: "~demo", isCorrect: false }] },
        { question: "5. Como dizer 'Basta ter saúde que o resto se resolve'?", options: [{ label: "Kenkou sae araba, ok", isCorrect: true }, { label: "Kenkou wa kirai desu", isCorrect: false }, { label: "Kenkou o taberu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "情熱 さえ あれば どんな 目標 も 達成 できる",
            translation: "Basta ter paixão que qualquer objetivo pode ser alcançado.",
            chunks: ["情熱", "さえ", "あれば", "どんな", "目標", "も", "達成", "できる"]
        },
        {
            sentenceJp: "大雨 にもかかわらず 試合 は 続けられた",
            translation: "Não obstante a chuva forte, a partida continuou.",
            chunks: ["大雨", "にもかかわらず", "試合", "は", "続けられた"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você apresenta a introdução do seu artigo acadêmico na faculdade.", npcName: "Orientador Acadêmico", npcMessage: "[Seu Nome]-san, kono ronbun no logic, meikaku da ne. (A lógica deste artigo está bem clara.)", options: [{ text: "Arigatou gozaimasu! Jikan sae araba, moro kousatsu o深 (fuka) me rarenu to omotte orimasu. (Muito obrigado! Basta eu ter mais tempo que poderei aprofundar ainda mais a análise.)", feedback: "Uso espetacular do conector sae araba!", isCorrect: true }, { text: "Ronbun o tabemashita.", feedback: "Sem nexo.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O orientador nota a relevância da sua pesquisa sobre dados adversos.", npcName: "Orientador Acadêmico", npcMessage: "Koushou-na jcondition ni mo karawazu, kekka o dashita ne. (Não obstante as condições adversas, você obteve resultados.)", options: [{ text: "Hai! Shiren ni mo karawazu, data o collect shita kai ga arimashita! (Sim! Não obstante as dificuldades, valeu a pena coletar os dados!)", feedback: "Coesão textual de nível acadêmico N2/B2!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: O orientador aprova a submissão da tese.", npcName: "Orientador Acadêmico", npcMessage: "Subarashii desu! Gakkai ni submit shimashou! (Excelente! Vamos submeter ao simpósio acadêmico!)", options: [{ text: "Kicho na go-shidou, hontou ni arigatou gozaimashita! (Muito obrigado por sua valiosa orientação acadêmica!)", feedback: "Gratidão e fluência acadêmica impecável!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que significa o conector acadêmico '~ni mo karawazu'?", options: ["Apesar de... / Não obstante a situação de X", "Porque aconteceu X", "Se por acaso acontecer X"], correctIndex: 0 }]
};

const MODULO_B2_14 = {
    id: "b2_mod_14",
    title: "Defendendo Teses e Pontos de Vista: ~to ieru darou e ~ni hokanaranai",
    section: 4,
    sectionTitle: "Argumentação, Debates & Textos Acadêmicos",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Kore wa seikou to ieru darou. Mainichi no doryoku ni hokanaranai.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Defenda pontos de vista com persuasão e autoridade elegante! Aprenda a formular teses ('Pode-se afirmar que...') com ~to ieru darou e conclusões categóricas ('Não é nada além de...') com ~ni hokanaranai."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～と言えるだろう", romaji: "~to ieru darou", translation: "Pode-se afirmar que... / Seria correto dizer que...", timeContext: "Conclusão elegante em teses e ensaios." },
        { type: "vocab", kanji: "～にほかならない", romaji: "~ni hokanaranai", translation: "Não é nada além de... / É precisamente...", timeContext: "Afirmação categórica de causa raiz." },
        { type: "grammar_pill", title: "Defesa de Tese Acadêmica B2", rule: "1) Frase + と言えるだろう (to ieru darou) suaviza a afirmação para um tom acadêmico aceitável. 2) Substantivo + にほかならない (ni hokanaranai) afirma com convicção absoluta a causa única.", formula: "[Frase Casual] + と言えるだろう | [Substantivo] + にほかならない", example: "Kono kekka wa minasan no doryoku no賜 (tamamono) ni hokanaranai (Este resultado nada mais é do que o fruto do esforço de todos)." }
    ],
    stage3_practice: [
        { question: "1. Como afirmar com elegância acadêmica 'Pode-se dizer que a inovação é essencial para o futuro'?", options: [{ label: "Inovation wa mirai ni hitsuyou to ieru darou", isCorrect: true }, { label: "Inovation wa mirai ni tabemasu", isCorrect: false }, { label: "Inovation wa nai desu", isCorrect: false }] },
        { question: "2. Como expressar convicção absoluta: 'Este sucesso não é nada além do fruto do seu trabalho diário'?", options: [{ label: "Kono seikou wa mainichi no doryoku ni hokanaranai", isCorrect: true }, { label: "Kono seikou wa doryoku desu ka", isCorrect: false }, { label: "Kono seikou wa kirai desu", isCorrect: false }] },
        { question: "3. Traduza: 'Kare no shippai wa準備 (junbi)不足 (busoku) ni hokanaranai'", options: [{ label: "A falha dele não foi nada além de falta de preparação", isCorrect: true }, { label: "Ele se preparou muito bem", isCorrect: false }, { label: "Ele não teve falhas", isCorrect: false }] },
        { question: "4. Qual a função da expressão '~to ieru darou' em um ensaio acadêmico?", options: [{ label: "Formular conclusões ponderadas e defensáveis de forma persuasiva", isCorrect: true }, { label: "Fazer uma pergunta sobre o preço de um item", isCorrect: false }, { label: "Pedir desculpas por um atraso", isCorrect: false }] },
        { question: "5. Como dizer 'Esta descoberta é um grande avanço para a ciência' com tom avançado?", options: [{ label: "Kono hakken wa kagaku no ooki na advance to ieru darou", isCorrect: true }, { label: "Kono hakken wa kagaku o tabemashita", isCorrect: false }, { label: "Kono hakken wa arimasen", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "イノベーション は 未来 に 不可欠 と 言えるだろう",
            translation: "Pode-se dizer que a inovação é indispensável para o futuro.",
            chunks: ["イノベーション", "は", "未来", "に", "不可欠", "と", "言えるだろう"]
        },
        {
            sentenceJp: "この 成功 は 毎日の 努力 に ほかならない",
            translation: "Este sucesso não é nada além do esforço diário.",
            chunks: ["この", "成功", "は", "毎日の", "努力", "に", "ほかならない"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Durante a defesa da sua tese de conclusão perante a banca examinadora.", npcName: "Presidente da Banca", npcMessage: "[Seu Nome]-san, kono data no kousatsu o matomete kudasai. (Resuma a análise destes dados por gentileza.)", options: [{ text: "Hai! Kono data yori, atarashii strategy ga yukou desu to ieru darou. Soshite, kono seika wa team no doryoku ni hokanaranai to omotte orimasu. (Sim! A partir destes dados, seria correto dizer que a nova estratégia é eficaz. E penso que este resultado não é nada além do esforço da equipe.)", feedback: "Defesa de tese brilhante e persuasiva!", isCorrect: true }, { text: "Data wa oishii desu.", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: A banca elogia o seu rigor metodológico.", npcName: "Presidente da Banca", npcMessage: "Meikaku de kounai na tese da ne. Argumentation ga sugoi yo. (Uma tese clara e de alto valor. Sua argumentação é incrível.)", options: [{ text: "Kicho na go-shiki to go-意見 (iken) o itadaki, hontou ni arigatou gozaimasu! (Muito obrigado por me conceder suas valiosas considerações e opiniões!)", feedback: "Polidez acadêmica de nível B2!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: A banca aprova a tese com distinção.", npcName: "Presidente da Banca", npcMessage: "Goukaku desu! Omedetou gozaimasu! (Aprovado! Parabéns!)", options: [{ text: "Domo arigatou gozaimashita! Kongo mo kenkyuu ni shoujin itashimasu! (Muito obrigado! Continuarei me dedicando às pesquisas!)", feedback: "Vitória acadêmica memorável de nível B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que a expressão categórica '~ni hokanaranai' afirma?", options: ["Que o fato não é nada além de X / É precisamente X a causa única", "Que o fato é uma dúvida", "Que o fato não aconteceu"], correctIndex: 0 }]
};

const MODULO_B2_15 = {
    id: "b2_mod_15",
    title: "Leitura Dramática & Literatura Japonesa: Análise de Contos Nativos",
    section: 4,
    sectionTitle: "Argumentação, Debates & Textos Acadêmicos",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Kokoro o utsu bungaku no sekai. Natsume Souseki no sakuhin o yomu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Adentre a literatura japonesa (Bungaku)! Aprenda a ler e interpretar excertos de contos e ensaios clássicos nativos (Natsume Souseki, Dazai Osamu) identificando metáforas poéticas e profundidade narrativa."
    },
    stage2_drops: [
        { type: "vocab", kanji: "ぶんがく (文学)", romaji: "Bungaku", translation: "Literatura", timeContext: "Estudo literário de obras nativas." },
        { type: "vocab", kanji: "さくひん (作品)", romaji: "Sakuhin", translation: "Obra literária / Criação artística", timeContext: "Livros, romances e contos." },
        { type: "grammar_pill", title: "Linguagem Literária Japonesa (Estilo ~Nari / ~Dewa)", rule: "A literatura nativa utiliza metáforas ricas, conectores poéticos e o estilo descritivo direto para tocar as emoções humanas (Kokoro o utsu).", formula: "[Metáfora Literária] + に心 (kokoro) を打つ", example: "Kono sakuhin wa dokusha no kokoro o utsu (Esta obra toca o coração dos leitores)." }
    ],
    stage3_practice: [
        { question: "1. O que significa a expressão poética literária 'Kokoro o utsu (心を打つ)'?", options: [{ label: "Tocar o coração / Emocionar profundamente o leitor", isCorrect: true }, { label: "Bater no peito com raiva", isCorrect: false }, { label: "Estudar matemática", isCorrect: false }] },
        { question: "2. Quem é um dos maiores autores da literatura clássica japonesa moderna (autor de 'Kokoro' e 'Botchan')?", options: [{ label: "Natsume Souseki (夏目漱石)", isCorrect: true }, { label: "Pikachu", isCorrect: false }, { label: "Naruto", isCorrect: false }] },
        { question: "3. Traduza a crítica literária: 'Kono bungaku sakuhin wa fukai imi ga arimasu'", options: [{ label: "Esta obra literária possui um significado profundo", isCorrect: true }, { label: "Este livro não tem páginas", isCorrect: false }, { label: "Não gosto de ler", isCorrect: false }] },
        { question: "4. Qual a palavra usada para definir uma 'Obra de arte / Livro romântico' em japonês?", options: [{ label: "Sakuhin (作品)", isCorrect: true }, { label: "Gomi", isCorrect: false }, { label: "Kippu", isCorrect: false }] },
        { question: "5. Como descrever a atmosfera de um conto dramático clássico?", options: [{ label: "Kanjou ga fukaku, kanojo no kokoro ga meikaku ni描 (ega) karete iru", isCorrect: true }, { label: "Sakuhin wa oishii desu", isCorrect: false }, { label: "Sakuhin wa arimasen", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "リーダーシップ を 発揮 して 組織 を 導きます",
            translation: "Exerço liderança para guiar a organização.",
            chunks: ["リーダーシップ", "を", "発揮", "して", "組織", "を", "導きます"]
        },
        {
            sentenceJp: "メンバー の 意欲 を 引き出す ことが 鍵 です",
            translation: "Extrair a motivação dos membros é a chave.",
            chunks: ["メンバー", "の", "意欲", "を", "引き出す", "ことが", "鍵", "です"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Em um clube de leitura em Jimbocho (bairro dos livros em Tóquio), você debate sobre Natsume Souseki.", npcName: "Membro do Clube de Leitura", npcMessage: "[Seu Nome]-san, Natsume Souseki no sakuhin o yonda koto aru? (Você já leu alguma obra de Natsume Souseki?)", options: [{ text: "Hai! 'Kokoro' o yomimashita ga, person no sentiment ga fukaku描 (ega) karete ite, kokoro o utsamashita! (Sim! Li 'Kokoro' e a emoção das personagens é retratada tão profundamente que tocou meu coração!)", feedback: "Análise literária brilhante com vocabulário de Nível B2!", isCorrect: true }, { text: "Hon o tabemashita.", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O membro concorda e sugere a leitura de Dazai Osamu a seguir.", npcName: "Membro do Clube de Leitura", npcMessage: "Dazai Osamu no sakuhin mo bungaku-teki ni mecha fukai yo. (As obras de Dazai Osamu também são absurdamente profundas literariamente.)", options: [{ text: "Tsugi wa Dazai Osamu no sakuhin o yonde miru koto ni suru yo! (Decidi que a seguir vou experimentar ler a obra de Dazai Osamu!)", feedback: "Uso perfeito de te miru e koto ni suru!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: O membro fica empolgado para discutir o próximo livro no mês que vem.", npcName: "Membro do Clube de Leitura", npcMessage: "Raigetsu no discussion, tanoshimi ni shiteru yo! (Fico ansioso pela nossa discussão no mês que vem!)", options: [{ text: "Un! Watashi mo fukai discussion o tanoshimi ni shite iru yo! (É! Eu também fico ansioso por uma discussão profunda!)", feedback: "Troca cultural literária impecável!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que significa a expressão poética 'Kokoro o utsu' ao descrever uma obra de arte ou livro?", options: ["Emocionar profundamente o coração do leitor/espectador", "Ter dor de cabeça ao ler", "Fechamento de contrato"], correctIndex: 0 }]
};

const MODULO_B2_16 = {
    id: "b2_mod_16",
    title: "Análise de Causa e Efeito Avançados: ~no kekka, ~ni yotte e ~o kikkake ni",
    section: 4,
    sectionTitle: "Argumentação, Debates & Textos Acadêmicos",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Chousa no kekka, atarashii gijutsu ga umareta. Kono deai o kikkake ni...",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Conecte eventos complexos com precisão de nível N2/B2: expor resultados de pesquisas (~no kekka), causas indiretas (~ni yotte) e momentos catalisadores de mudança ('A partir daquele evento marco...') com ~o kikkake ni."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～の結果 (～のけっか)", romaji: "~no kekka", translation: "Como resultado de...", timeContext: "Relatar consequências de estudos ou ações." },
        { type: "vocab", kanji: "～をきっかけに", romaji: "~o kikkake ni", translation: "Tendo X como gatilho/marco catalisador...", timeContext: "O evento que deu início a uma grande mudança." },
        { type: "grammar_pill", title: "Causa, Efeito e Catalisadores de Vida", rule: "1) Substantivo + の結果 (no kekka) = Como resultado de X. 2) Evento + をきっかけに (o kikkake ni) = A partir/tendo como gatilho aquele evento inicial.", formula: "[Ação] の結果 | [Evento] をきっかけに", example: "Nihon ryokou o kikkake ni, Nihon-go no benkyou o hajimemashita (Tendo a viagem ao Japão como gatilho, comecei a estudar japonês)." }
    ],
    stage3_practice: [
        { question: "1. Como expressar o marco inicial de um hábito: 'Tendo a viagem ao Japão como gatilho, comecei a estudar o idioma'?", options: [{ label: "Nihon ryokou o kikkake ni, Nihon-go no benkyou o hajimemashita", isCorrect: true }, { label: "Nihon ryokou o tabemashita", isCorrect: false }, { label: "Nihon ryokou wa arimasen", isCorrect: false }] },
        { question: "2. Como relatar em uma conferência 'Como resultado da pesquisa, descobrimos novos dados'?", options: [{ label: "Chousa no kekka, atarashii data o hakken itashimashita", isCorrect: true }, { label: "Chousa no kekka wa oishii desu", isCorrect: false }, { label: "Chousa ni ikimashou", isCorrect: false }] },
        { question: "3. Traduza: 'Kono deai o kikkake ni, futari wa partner ni narimashita'", options: [{ label: "Tendo este encontro como ponto de virada/gatilho, os dois se tornaram parceiros", isCorrect: true }, { label: "Eles nunca se encontraram", isCorrect: false }, { label: "O encontro foi cancelado", isCorrect: false }] },
        { question: "4. Qual a função do conector '~o kikkake ni' na fala e redação B2?", options: [{ label: "Indicar o evento inicial que serviu de catalisador/gatilho para uma transformação", isCorrect: true }, { label: "Pedir comida no restaurante", isCorrect: false }, { label: "Dizer as horas", isCorrect: false }] },
        { question: "5. Como dizer 'Como resultado de 5 anos de esforço, passei no exame N2'?", options: [{ label: "Go-nenkan no doryoku no kekka, N2 shiken ni goukaku shimashita", isCorrect: true }, { label: "N2 shiken wa kirai desu", isCorrect: false }, { label: "N2 shiken o taberu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "リスク を 最小限 に 抑える 対策 を 講じます",
            translation: "Tomamos medidas para conter os riscos ao mínimo.",
            chunks: ["リスク", "を", "最小限", "に", "抑える", "対策", "を", "講じます"]
        },
        {
            sentenceJp: "危機 管理 体制 の 強化 が 急務 です",
            translation: "O fortalecimento do sistema de gestão de crises é urgente.",
            chunks: ["危機", "管理", "体制", "の", "強化", "が", "急務", "です"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Em uma entrevista de podcast cultural, perguntam como começou seu amor pelo Japão.", npcName: "Entrevistador Podcast", npcMessage: "[Seu Nome]-san, Nihon-go no benkyou o hajimeta kikkake wa nani desu ka? (O que serviu de gatilho para você começar a estudar japonês?)", options: [{ text: "Kodomo no koro ni mita anime o kikkake ni, Nihon no bunka ni kyoumi o motsu you ni narimashita! (Tendo os animes que assistia quando criança como gatilho, passei a ter interesse pela cultura do Japão!)", feedback: "Narrativa pessoal perfeita com kikkake ni e you ni narimashita!", isCorrect: true }, { text: "Anime o tabemashita.", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O entrevistador pergunta sobre os resultados do seu esforço diário de estudo.", npcName: "Entrevistador Podcast", npcMessage: "Mainichi no doryoku no kekka, ima wa fluently ni hanasemasu ne! (Como resultado do seu esforço diário, agora fala fluentemente, né!)", options: [{ text: "Arigatou gozaimasu! Mainichi no benkyou no kekka, B2 level ni reached dekite hontou ni ureshii desu! (Muito obrigado! Como resultado do estudo diário, estou muito feliz em ter atingido o nível B2!)", feedback: "Uso impecável de no kekka em conquistas!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem motivo para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: O entrevistador encerra o programa parabenizando sua jornada.", npcName: "Entrevistador Podcast", npcMessage: "Subarashii story desu! Listener no minasan no motivation ni narimashita! (Uma história incrível! Serviu de motivação para todos os ouvintes!)", options: [{ text: "Kichou na o-jikan o itadaki, hontou ni arigatou gozaimashita! (Muito obrigado por me conceder este tempo tão valioso!)", feedback: "Polidez e carisma fluida de nível avançado B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que expressa a estrutura gramatical '~o kikkake ni'?", options: ["O evento inicial que serviu de gatilho/marco catalisador para uma mudança", "O preço de uma mercadoria", "Uma proibição temporária"], correctIndex: 0 }]
};

const MODULO_B2_17 = {
    id: "b2_mod_17",
    title: "Dialetos e Variações Regionais: Kansai, Kyushu e Tohoku",
    section: 5,
    sectionTitle: "Imersão Total & Maestria",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Ookini! Suitoo yo! Mensoore!",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "O Japão vai muito além do japonês padrão de Tóquio (Hyoujungo)! Conheça as ricas variações regionais (Hougen): Kansai-ben (Ookini), Kyushu-ben (Suitoo yo = Amo você) e a acolhida de Okinawa (Mensoore)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "ほうげん (方言)", romaji: "Hougen", translation: "Dialeto regional", timeContext: "Variações linguísticas por região." },
        { type: "vocab", kanji: "おおきに", romaji: "Ookini", translation: "Muito obrigado (Dialeto de Kansai)", timeContext: "Agradecimento tradicional em Osaka/Kyoto." },
        { type: "vocab", kanji: "すいとーよ", romaji: "Suitoo yo", translation: "Gosto de você / Amo você (Dialeto de Kyushu/Fukuoka)", timeContext: "Expressão de afeto no sul do Japão." },
        { type: "grammar_pill", title: "O Mosaico dos Dialetos Regionais (Hougen)", rule: "1) Kansai: Arigatou ➔ Ookini / DAME ➔ Akan. 2) Kyushu: Suki desu ➔ Suitoo yo / ~tai (em vez de ~desu). 3) Okinawa: Irasshai ➔ Mensoore.", formula: "Hyoujungo (Tóquio) ➔ Hougen (Regional)", example: "Fukuoka de wa 'Suki' o 'Suitoo yo' to iimasu (Em Fukuoka se diz 'Suitoo yo' para expressar gosto/afeto)." }
    ],
    stage3_practice: [
        { question: "1. O que significa o agradecimento tradicional 'Ookini (おおきに)' em Kansai?", options: [{ label: "Muito obrigado! (Arigatou gozaimasu)", isCorrect: true }, { label: "Com licença", isCorrect: false }, { label: "Boa noite", isCorrect: false }] },
        { question: "2. Como se expressa afeto ('Gosto de você / Amo você') no dialeto de Fukuoka/Kyushu?", options: [{ label: "Suitoo yo! (すいとーよ)", isCorrect: true }, { label: "Kirai desu", isCorrect: false }, { label: "Tabetai desu", isCorrect: false }] },
        { question: "3. Traduza a saudação de boas-vindas das ilhas de Okinawa: 'Mensoore!'", options: [{ label: "Seja muito bem-vindo! (Irasshaimase)", isCorrect: true }, { label: "Até logo", isCorrect: false }, { label: "Está chovendo", isCorrect: false }] },
        { question: "4. Qual a palavra usada para dizer 'Não pode / É proibido' no dialeto de Osaka?", options: [{ label: "Akan! (あかん)", isCorrect: true }, { label: "Ii yo", isCorrect: false }, { label: "Ookini", isCorrect: false }] },
        { question: "5. Qual o nome dado em japonês para os 'dialetos regionais' (Hougen)?", options: [{ label: "Hougen (方言)", isCorrect: true }, { label: "Keigo", isCorrect: false }, { label: "Kanji", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "顧客 の 満足度 を 向上 させる 施策 を 実施 します",
            translation: "Executamos ações para elevar a satisfação do cliente.",
            chunks: ["顧客", "の", "満足度", "を", "向上", "させる", "施策", "を", "実施", "します"]
        },
        {
            sentenceJp: "フィードバック を 迅速 に 業務 に 反映 させます",
            translation: "Refletimos o feedback rapidamente no trabalho.",
            chunks: ["フィードバック", "を", "迅速", "に", "業務", "に", "反映", "させます"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você viaja para Fukuoka (Kyushu) e conversa com uma moradora local amigável.", npcName: "Moradora de Fukuoka", npcMessage: "Fukuoka no ramen, suitoo yo? (Você tá gostando do ramen de Fukuoka?)", options: [{ text: "Un! Mecha suitoo yo! Tonkotsu ramen ga ichiban oishii ya ne! (Sim! Tô amando demais! O ramen Tonkotsu é o mais gostoso, né!)", feedback: "Integração linguística regional de nível B2 espetacular!", isCorrect: true }, { text: "Ramen o tabemashita.", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: A moradora fica encantada ao ver você usar expressões locais.", npcName: "Moradora de Fukuoka", npcMessage: "Fukuoka no hougen mo shitteru n da! Sugoi tai! (Você até conhece o dialeto de Fukuoka! Que incrível!)", options: [{ text: "Nihon kakuchi no hougen o benkyou suru no ga mecha tanoshii n desu! (Estudar os dialetos de cada canto do Japão é divertido demais!)", feedback: "Entusiasmo e imersão cultural elevados!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem motivo para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: A moradora te deseja uma boa viagem pelo país.", npcName: "Moradora de Fukuoka", npcMessage: "Mata Fukuoka ni kiti ne! (Vem de novo para Fukuoka, tá!)", options: [{ text: "Hai! Mata zettai ni mairimasu! Ookini! (Sim! Com certeza virei de novo! Muito obrigado!)", feedback: "Harmonia perfeita entre respeito e carinho regional B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que a palavra 'Ookini (おおきに)' significa no dialeto tradicional de Kansai?", options: ["Muito obrigado!", "Por favor", "Desculpe-me"], correctIndex: 0 }]
};

const MODULO_B2_18 = {
    id: "b2_mod_18",
    title: "Onomatopeias e Mimetismos Avançados: Gitaijo e Giseigo",
    section: 5,
    sectionTitle: "Imersão Total & Maestria",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Wakuwaku shite imasu. Pika-pika ni migakimashita.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "As onomatopeias (Giseigo) e mimetismos de sensação (Gitaijo) são a alma da expressividade nativa japonesa! Aprenda a usar Waku-waku (Empolgação), Pika-pika (Brilhando limpo) e Peko-peko (Fome)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "ワクワク (わくわく)", romaji: "Waku-waku", translation: "Empolgação / Coração acelerado de expectativa", timeContext: "Sensação de ansiedade positiva." },
        { type: "vocab", kanji: "ピカピカ (ぴかぴか)", romaji: "Pika-pika", translation: "Brilhando de limpo / Reluzente", timeContext: "Estado visual de algo bem polido." },
        { type: "vocab", kanji: "ペコペコ (ぺこぺこ)", romaji: "Peko-peko", translation: "Roncando de fome / Estômago vazio", timeContext: "Sensação física de fome." },
        { type: "grammar_pill", title: "Como Usar Onomatopeias e Mimetismos (Giseigo/Gitaijo)", rule: "Onomatopeias conectam-se diretamente com o verbo する (suru) para sensações emocionais ou com と (to) para modos de ação.", formula: "[Onomatopeia] + する / と [Verbo]", example: "Ashita no ryokou de waku-waku shite imasu (Estou super empolgado com a viagem de amanhã)." }
    ],
    stage3_practice: [
        { question: "1. O que expressa a onomatopeia de sensação 'Waku-waku shite imasu'?", options: [{ label: "Estar com o coração saltando de empolgação e expectativa", isCorrect: true }, { label: "Estar com muita dor de barriga", isCorrect: false }, { label: "Estar com sono profundo", isCorrect: false }] },
        { question: "2. Como descrever um carro que acabou de ser lavado e está reluzindo?", options: [{ label: "Kuruma ga pika-pika desu", isCorrect: true }, { label: "Kuruma ga peko-peko desu", isCorrect: false }, { label: "Kuruma ga waku-waku desu", isCorrect: false }] },
        { question: "3. Traduza: 'Onaka ga peko-peko da kara, ramen tabeyou!'", options: [{ label: "Como meu estômago tá roncando de fome, bora comer ramen!", isCorrect: true }, { label: "Estou muito cheio", isCorrect: false }, { label: "Não gosto de ramen", isCorrect: false }] },
        { question: "4. Qual a onomatopeia usada para descrever o estado de estar 'Chovendo fininho / garoa suave'?", options: [{ label: "Shito-shito (しとしと)", isCorrect: true }, { label: "Pika-pika", isCorrect: false }, { label: "Gaza-gaza", isCorrect: false }] },
        { question: "5. Qual a onomatopeia usada para descrever o som de 'Rir às gargalhadas / dar risadinhas'?", options: [{ label: "Niko-niko (Sorriso radiante) / Gera-gera (Gargalhada)", isCorrect: true }, { label: "Peko-peko", isCorrect: false }, { label: "Matsu-matsu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "長期 的な 視点 に 立って 戦略 を 練ります",
            translation: "Elaboramos estratégias sob uma perspectiva de longo prazo.",
            chunks: ["長期", "的な", "視点", "に", "立って", "戦略", "を", "練ります"]
        },
        {
            sentenceJp: "変化 に 柔軟 に 対応 する 組織 を 作ります",
            translation: "Criamos uma organização que responde com flexibilidade às mudanças.",
            chunks: ["変化", "に", "柔軟", "に", "対応", "する", "組織", "を", "作ります"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você e seu amigo estão prestes a entrar num parque de diversões famoso em Tóquio.", npcName: "Sora", npcMessage: "[Seu Nome]-san, tenki mo ii shi, amusement park da ne! (Tempo bom e parque de diversões, né!)", options: [{ text: "Un! Ashita kara waku-waku shite nemurenai kurai datta yo! (É! Eu tava tão empolgado desde ontem que nem conseguia dormir!)", feedback: "Uso perfeito da onomatopeia de emoção waku-waku!", isCorrect: true }, { text: "Onaka ga peko-peko desu.", feedback: "Assunto trocado sem nexo.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: Após brincar em várias montanhas-russas, meio-dia chega.", npcName: "Sora", npcMessage: "Tanoshii-! Demo shuumatsu wa onaka ga peko-peko ni natta ne! (Divertido demais-! Mas o estômago ficou roncando de fome, né!)", options: [{ text: "Hontou da! Watashi mo peko-peko! Pika-pika na ano restaurant de tabeyou! (Verdade! Eu também tô roncando de fome! Bora comer naquele restaurante reluzente!)", feedback: "Combinação magistral das duas onomatopeias peko-peko e pika-pika!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem motivo para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: Vocês encontram uma mesa e fazem o pedido felizes.", npcName: "Sora", npcMessage: "Niko-niko de tabeyou! (Vamos comer com um sorriso radiante no rosto!)", options: [{ text: "Un! Kanpai! Kyou wa saikou no hi da ne! (É! Um brinde! Hoje é o melhor dia!)", feedback: "Expressividade e alegria nativa de Nível B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que expressa a onomatopeia 'Peko-peko (ペコペコ)' em relação ao corpo humano?", options: ["Sensação física de fome intensa / estômago roncando", "Dormir bastante", "Estar limpo"], correctIndex: 0 }]
};

const MODULO_B2_19 = {
    id: "b2_mod_19",
    title: "Etiqueta Cultural Avançada & Filosofia Japonesa: Omotenashi, Wabi-Sabi e Ikigai",
    section: 5,
    sectionTitle: "Imersão Total & Maestria",
    level: "B2",
    xpReward: 120,
    stage1_context: {
        audioGuide: "Omotenashi no kokoro to Ikigai o大切 (taisetsu) ni shimasu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Conecte-se com a alma da cultura japonesa! Compreenda os conceitos filosóficos universais que moldam o idioma: Omotenashi (Hospitalidade desinteressada de coração), Wabi-Sabi (A beleza da imperfeição) e Ikigai (A razão de viver)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "おもてなし", romaji: "Omotenashi", translation: "Hospitalidade desinteressada suprema de coração", timeContext: "Filosofia de serviço e acolhimento japonês." },
        { type: "vocab", kanji: "生きがい (いきがい)", romaji: "Ikigai", translation: "Razão de viver / Propósito de vida", timeContext: "Motivação diária para se levantar." },
        { type: "vocab", kanji: "わびさび (侘寂)", romaji: "Wabi-Sabi", translation: "Estética da imperfeição e efemeridade", timeContext: "Apreciação da simplicidade rústica." },
        { type: "grammar_pill", title: "A Filosofia Aplicada à Língua Japonesa", rule: "Expressar esses conceitos demonstra a mais alta sensibilidade cultural no idioma N2/B2. Estrutura: [Conceito] o 大切 (taisetsu) ni suru = Valorizar/prezar por X.", formula: "[Conceito Filosófico] を大切にする (o taisetsu ni suru)", example: "Watashi-tachi wa Omotenashi no kokoro o taisetsu ni shite imasu (Nós prezamos pelo espírito do Omotenashi)." }
    ],
    stage3_practice: [
        { question: "1. O que define a filosofia tradicional japonesa de acolhimento 'Omotenashi (おもてなし)'?", options: [{ label: "A hospitalidade suprema, atenciosa e desinteressada de coração", isCorrect: true }, { label: "Vender produtos caros", isCorrect: false }, { label: "Fazer greve de trabalho", isCorrect: false }] },
        { question: "2. O que significa o conceito vitalício 'Ikigai (生きがい)'?", options: [{ label: "A razão de viver / o propósito que dá sentido à vida diária", isCorrect: true }, { label: "Uma comida típica de Inverno", isCorrect: false }, { label: "Um tipo de arte marcial", isCorrect: false }] },
        { question: "3. Traduza o valor estético 'Wabi-Sabi (侘寂)':", options: [{ label: "A apreciação da beleza na simplicidade, imperfeição e efemeridade do tempo", isCorrect: true }, { label: "Construções modernas de arranha-céus", isCorrect: false }, { label: "Música pop japonesa", isCorrect: false }] },
        { question: "4. Como dizer 'Nossa empresa valoriza o espírito de Omotenashi' em Keigo?", options: [{ label: "Kisha wa Omotenashi no kokoro o taisetsu ni shite orimasu", isCorrect: true }, { label: "Omotenashi wa kirai desu", isCorrect: false }, { label: "Omotenashi o tabemasu", isCorrect: false }] },
        { question: "5. Como responder a uma pergunta de entrevista sobre seu propósito: 'Encontrei meu Ikigai no estudo do idioma'?", options: [{ label: "Nihon-go no benkyou ni ikigai o mitsukemashita", isCorrect: true }, { label: "Ikigai wa arimasen", isCorrect: false }, { label: "Ikigai wa oishii desu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "これまでの 研究 成果 を 学会 で 発表 します",
            translation: "Apresentaremos os resultados das pesquisas até aqui no simpósio.",
            chunks: ["これまでの", "研究", "成果", "を", "学会", "で", "発表", "します"]
        },
        {
            sentenceJp: "論文 の 査読 を 経て 出版 されました",
            translation: "Após revisão por pares, o artigo foi publicado.",
            chunks: ["論文", "の", "査読", "を", "経て", "出版", "されました"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Em um Ryokan centenário em Kyoto, o mestre de chá explica a recepção dos hóspedes.", npcName: "Mestre de Chá", npcMessage: "[Seu Nome]-san, Omotenashi to wa, aite no kokoro o omou koto desu. (Omotenashi é pensar no coração do outro.)", options: [{ text: "Subarashii oshie desu. Wabi-Sabi to Omotenashi no kokoro, taihen koudou shimasu. (Um ensinamento maravilhoso. Fico profundamente emocionado com o espírito de Wabi-Sabi e Omotenashi.)", feedback: "Sensibilidade cultural e filosófica de Nível B2 espetacular!", isCorrect: true }, { text: "Omotenashi o tabemashita.", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O mestre pergunta o que te dá motivação diária no aprendizado do japonês.", npcName: "Mestre de Chá", npcMessage: "[Seu Nome]-san no Ikigai wa nani desu ka? (Qual é o seu Ikigai / razão de viver?)", options: [{ text: "Nihon no bunka to manabi, hito toつながる (tsunagaru) koto ga watashi no Ikigai desu! (Aprender a cultura japonesa e me conectar com as pessoas é o meu Ikigai!)", feedback: "Resposta poética e profunda!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: O mestre serve uma xícara de Matcha artesanal em uma tigela histórica.", npcName: "Mestre de Chá", npcMessage: "Douzo, Wabi-Sabi no aji o o-tanoshimi kudasai. (Por favor, aprecie o sabor do Wabi-Sabi.)", options: [{ text: "O-temae, arigatou gozaimasu. Kokoro o komete itadakimasu. (Agradeço por preparar o chá com tanto carinho. Beberei de todo o coração.)", feedback: "Etiqueta e imersão filosófica máxima B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que expressa a filosofia vitalícia 'Ikigai (生きがい)'?", options: ["A razão de viver / o propósito que nos motiva diariamente a acordar", "Uma técnica de cozinhar peixe", "Um tipo de vestimenta"], correctIndex: 0 }]
};

const MODULO_B2_20 = {
    id: "b2_mod_20",
    title: "O Grande Desafio B2: Trabalho de Conclusão de Curso & Avaliação Integrativa",
    section: 5,
    sectionTitle: "Imersão Total & Maestria",
    level: "B2",
    xpReward: 300,
    stage1_context: {
        audioGuide: "Omedetou gozaimasu! Subete no level kanryou desu!",
        missionTitle: "Grande Desafio de Maestria B2: Trabalho de Conclusão de Curso",
        missionDescription: "Você chegou ao cume da montanha! Este é o grande teste de conclusão integrativo de toda a plataforma Japão Academy. O Quiz final reunirá 30 questões abrangendo os Níveis A1, A2, B1 e B2 para consagrar a sua fluência avançada!"
    },
    stage2_drops: [
        { type: "vocab", kanji: "かんぜん (完全)", romaji: "Kanzen", translation: "Perfeição / Totalidade", timeContext: "Maestria absoluta atingida." },
        { type: "vocab", kanji: "しょうめい (証明)", romaji: "Shoumei", translation: "Certificação / Prova", timeContext: "Comprovação de competência em japonês." },
        { type: "vocab", kanji: "おめでとう ございます", romaji: "Omedetou gozaimasu", translation: "Parabéns!", timeContext: "Celebração de conquista máxima da plataforma." },
        { type: "grammar_pill", title: "O Troféu de Maestria Japão Academy", rule: "Você percorreu uma jornada extraordinária: do 'Konnichiwa' A1 às negociações Keigo e filosofias avançadas B2. Você possui agora fluência e autonomia no idioma!", formula: "[A1 + A2 + B1 + B2] = 日本語 Master (Japonês Fluente)!", example: "Nihon-go de kanzen ni seikatsu shite, shigoto dekiru you ni narimashita! (Passei a conseguir viver e trabalhar plenamente em japonês!)" }
    ],
    stage3_practice: [
        { question: "1. Como abrir seu discurso de conclusão de curso diante da banca examinadora?", options: [{ label: "Honjitsu wa subete no level kanryou ni tsuite happyou itashimasu", isCorrect: true }, { label: "Kyou wa tabemashou", isCorrect: false }, { label: "Sayounara", isCorrect: false }] },
        { question: "2. Qual a frase Keigo de maior respeito para agradecer aos instrutores ao fim da jornada?", options: [{ label: "Kicho na go-shidou, hontou ni arigatou gozaimashita", isCorrect: true }, { label: "Arigatou ne", isCorrect: false }, { label: "Gomen nasai", isCorrect: false }] },
        { question: "3. Como expressar a virada de vida 'Tendo o estudo de japonês como gatilho, minha vida mudou'?", options: [{ label: "Nihon-go no benkyou o kikkake ni, jinsei ga karamashita", isCorrect: true }, { label: "Nihon-go wa oishii desu", isCorrect: false }, { label: "Nihon-go wa nai desu", isCorrect: false }] },
        { question: "4. Traduza a conquista: 'Jiritsu shite Nihon-go o hanaseru you ni narimashita'", options: [{ label: "Passei a conseguir falar japonês com total autonomia e independência", isCorrect: true }, { label: "Não falo nada de japonês", isCorrect: false }, { label: "Japonês é muito difícil", isCorrect: false }] },
        { question: "5. Como encerrar a apresentação prometendo continuar a jornada de aprendizado?", options: [{ label: "Kongo mo Nihon-go no shoujin o tsuzukete mairimasu!", isCorrect: true }, { label: "Nihon-go o yameru tsumori desu", isCorrect: false }, { label: "Sayounara, ja ne", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "日本語 の 学習 を きっかけ に 人生 が 大きく 変わりました",
            translation: "Tendo o estudo de japonês como marco, minha vida mudou grandemente.",
            chunks: ["日本語", "の", "学習", "を", "きっかけ", "に", "人生", "が", "大きく", "変わりました"]
        },
        {
            sentenceJp: "自立 して 日本語 で 業務 を 遂行 できる ようになりました",
            translation: "Passei a conseguir executar tarefas de trabalho autonomamente em japonês.",
            chunks: ["自立", "して", "日本語", "で", "業務", "を", "遂行", "できる", "ようになりました"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: O Reitor e a Banca Examinadora da Japão Academy sobem ao palco para o anúncio de conclusão.", npcName: "Reitor Japão Academy", npcMessage: "[Seu Nome]-san, congratulations! Kono 4-level no journey, taihen subarashii desu! (Parabéns! Esta jornada de 4 níveis foi espetacular!)", options: [{ text: "Sensei-tachi no kicho na go-shidou no okage desu! Honjitsu wo kanryou dekite, taihen koue de gozaimasu! (É graças à valiosa orientação dos professores! É uma imensa honra poder concluir hoje!)", feedback: "Demonstração de gratidão Keigo impecável!", isCorrect: true }, { text: "Watashi wa sugoi desu!", feedback: "Muito arrogante.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O Reitor pergunta sobre seus planos com o idioma fluente agora.", npcName: "Reitor Japão Academy", npcMessage: "Kongo, Nihon-go o tsukatte nani o shitai desu ka? (No futuro, o que deseja fazer usando o japonês?)", options: [{ text: "Nihon-go de business o shite, Nihon to sekai o tsunagu koudou ni kouken itashitai desu! (Pretendo fazer negócios em japonês e contribuir para conectar o Japão com o mundo!)", feedback: "Visão de futuro e liderança inspiradora de nível B2!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: O Reitor entrega o Troféu de Maestria B2 e o Certificado da Japão Academy sob aplausos!", npcName: "Reitor Japão Academy", npcMessage: "Subarashii desu! Nihon-go Master Certificate o shouyo itashimasu! Omedetou gozaimasu! (Incrível! Outorgamos a você o Certificado de Mestre em Japonês! Parabéns!)", options: [{ text: "Domo arigatou gozaimashita! Minasan no Omotenashi to taisetsu na manabi, zettai ni wasuremasen! (Muito obrigado! Jamais esquecerei o Omotenashi de todos e este aprendizado tão valioso!)", feedback: "🏆 PARABÉNS! VOCÊ ZEROU A JORNADA COMPLETA DA JAPÃO ACADEMY E CONQUISTOU A MAESTRIA B2!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    // REGRA ESPECIAL: 30 EXERCÍCIOS / QUESTÕES NO STAGE5_QUIZ ABRANGENDO A1, A2, B1 e B2!
    stage5_quiz: [
        // QUESTÕES A1 (1 a 7)
        { question: "1. [Nível A1] Qual a saudação formal para 'Bom dia' usada até às 10h?", options: ["Konnichiwa", "Ohayou gozaimasu", "Konbanwa"], correctIndex: 1 },
        { question: "2. [Nível A1] Como pedir água educadamente na loja de conveniência?", options: ["Mizu wa doko", "Mizu o taberu", "Mizu o kudasai"], correctIndex: 2 },
        { question: "3. [Nível A1] Qual partícula indica a pergunta no final da frase?", options: ["Ka (か)", "Wa (は)", "Ni (に)"], correctIndex: 0 },
        { question: "4. [Nível A1] Qual palavra demonstrativa indica um objeto distante de ambos os falantes?", options: ["Kore (これ)", "Are (あれ)", "Sore (それ)"], correctIndex: 1 },
        { question: "5. [Nível A1] Qual verbo indica a existência de seres vivos (pessoas/animais)?", options: ["Arimasu (あります)", "Nomimasu", "Imasu (います)"], correctIndex: 2 },
        { question: "6. [Nível A1] Como perguntar o preço de uma mercadoria?", options: ["Ikura desu ka?", "Nan-ji desu ka?", "Dare desu ka?"], correctIndex: 0 },
        { question: "7. [Nível A1] Qual partícula indica a direção do movimento ('Ir para a escola')?", options: ["De (で)", "Ni (に) / E (へ)", "O (を)"], correctIndex: 1 },

        // QUESTÕES A2 (8 a 14)
        { question: "8. [Nível A2] Como expressar a ação contínua 'Estou estudando agora'?", options: ["Ima benkyou shimashita", "Ima benkyou shita", "Ima benkyou shite imasu"], correctIndex: 2 },
        { question: "9. [Nível A2] Como pedir permissão 'Posso entrar no quarto?'", options: ["Heya ni hairte mo ii desu ka?", "Heya ni hairte wa ikemasen", "Heya ni hairimasen"], correctIndex: 0 },
        { question: "10. [Nível A2] Como expressar a proibição 'Não é permitido tirar fotos aqui'?", options: ["Shashin o totte mo ii desu", "Shashin o totte wa ikemasen", "Shashin o torimashou"], correctIndex: 1 },
        { question: "11. [Nível A2] Como dizer no passado de verbo 'Ontem assisti a um filme'?", options: ["Kinou eiga o mimasu", "Kinou eiga o miru", "Kinou eiga o mimashita"], correctIndex: 2 },
        { question: "12. [Nível A2] Qual a estrutura para comparar dois elementos ('A é mais bonito que B')?", options: ["A wa B yori kirei desu", "A to B wa kirei", "A wa B kara kirei"], correctIndex: 0 },
        { question: "13. [Nível A2] Como expressar a obrigação 'Tenho que tomar o remédio'?", options: ["Kusuri o nomitai desu", "Kusuri o nomanakereba narimasen", "Kusuri o nomimashou"], correctIndex: 1 },
        { question: "14. [Nível A2] Como dizer 'Pretendo viajar no mês que vem'?", options: ["Raigetsu ryokou shimashita", "Raigetsu ryokou shite kudasai", "Raigetsu ryokou suru tsumori desu"], correctIndex: 2 },

        // QUESTÕES B1 (15 a 22)
        { question: "15. [Nível B1] Qual a contração informal cotidiana de 'Ikanakereba' (Tenho que ir)?", options: ["Ikanakya", "Ikamashita", "Ikaitai"], correctIndex: 0 },
        { question: "16. [Nível B1] Como expressar citação indireta 'Ele disse que vai comprar'?", options: ["Kare wa kaimashita", "Kare wa koutu to iimashita", "Kare wa kaku desu"], correctIndex: 1 },
        { question: "17. [Nível B1] Como explicar um motivo com polidez e suavidade em uma desculpa?", options: ["Usando ~demo", "Usando ~kara desu ka", "Usando a partícula ~node (ので)"], correctIndex: 2 },
        { question: "18. [Nível B1] O que expressa a estrutura '~te shimaimashita'?", options: ["Lamento/arrependimento por um erro ou conclusão total não planejada", "Um convite festivo", "Um pedido de desconto"], correctIndex: 0 },
        { question: "19. [Nível B1] Traduza a Passiva de Incômodo: 'Ame ni furaremashita'", options: ["Gosto da chuva", "Fui pego pela chuva de surpresa", "Não choveu"], correctIndex: 1 },
        { question: "20. [Nível B1] O que expressa o favor prestado de você para outra pessoa (~te ageru)?", options: ["Receber um favor do chefe", "Pedir dinheiro", "Fazer um favor/ajuda para um amigo"], correctIndex: 2 },
        { question: "21. [Nível B1] Qual o verbo de humildade (Kenjougo) para dizer seu próprio nome profissionalmente?", options: ["Moushimasu (申します)", "Irassharu", "Oshiaru"], correctIndex: 0 },
        { question: "22. [Nível B1] Qual a frase de despedida ao sair do escritório antes dos colegas?", options: ["Itadakimasu", "Osaki ni shitsurei shimasu", "O-yasumi nasai"], correctIndex: 1 },

        // QUESTÕES B2 (23 a 30)
        { question: "23. [Nível B2] O que expressa a estrutura gramatical '~koto ni natte iru'?", options: ["Uma proibição informal", "Uma escolha de comida", "Uma regra, norma ou agendamento socialmente estabelecido"], correctIndex: 2 },
        { question: "24. [Nível B2] Traduza o conector de acréscimo: '~dake de naku'", options: ["Não apenas X, como também Y", "Apenas X", "Nenhum dos dois"], correctIndex: 0 },
        { question: "25. [Nível B2] Qual a nuance da contradição '~kuse ni'?", options: ["Gratidão amorosa", "Crítica ou reprovação por uma atitude contraditória de alguém", "Uma ordem de trabalho"], correctIndex: 1 },
        { question: "26. [Nível B2] O que significa a metáfora idiomática 'Kao ga hiroi (顔が広い)'?", options: ["Ter um rosto largo fisicamente", "Estar triste", "Ser uma pessoa muito bem conectada / conhecer muita gente"], correctIndex: 2 },
        { question: "27. [Nível B2] Qual o verbo honorífico Sonkeigo supremo para a ação do cliente 'Comer/Beber'?", options: ["Meshiagaru (召し上がる)", "Itadaku", "Taberu"], correctIndex: 0 },
        { question: "28. [Nível B2] Como recusar diplomaticamente uma proposta em negócios sem dizer 'Dekimasen'?", options: ["Dizendo 'Dame desu'", "Usando a forma ~kanemasu (かねます)", "Gritando 'Iie'"], correctIndex: 1 },
        { question: "29. [Nível B2] O que expressa a estrutura de causa catalisadora '~o kikkake ni'?", options: ["O preço do bilhete", "Um erro de digitação", "O evento inicial que serviu de gatilho/marco para uma grande mudança"], correctIndex: 2 },
        { question: "30. [Nível B2] O que define a filosofia vitalícia tradicional japonesa 'Ikigai (生きがい)'?", options: ["A razão de viver / o propósito que motiva a jornada diária da vida", "Uma técnica de artes marciais", "Uma dança típica"], correctIndex: 0 }
    ]
};

// ==========================================
// VETOR CENTRAL QUE CONECTA OS 20 MÓDULOS B2 AO MOTOR APP.JS
// ==========================================
const CURSO_B2_DADOS = [
    MODULO_B2_01,
    MODULO_B2_02,
    MODULO_B2_03,
    MODULO_B2_04,
    MODULO_B2_05,
    MODULO_B2_06,
    MODULO_B2_07,
    MODULO_B2_08,
    MODULO_B2_09,
    MODULO_B2_10,
    MODULO_B2_11,
    MODULO_B2_12,
    MODULO_B2_13,
    MODULO_B2_14,
    MODULO_B2_15,
    MODULO_B2_16,
    MODULO_B2_17,
    MODULO_B2_18,
    MODULO_B2_19,
    MODULO_B2_20
];
