// ==========================================
// BANCO DE DADOS DO CURSO DE JAPONÊS - NÍVEL B1 (INTERMEDIÁRIO)
// ==========================================

const MODULO_B1_01 = {
    id: "b1_mod_01",
    title: "A Forma Casual (Futsuu-kei): Tom Informal no Dia a Dia",
    section: 1,
    sectionTitle: "O Mundo Informal & Conversa Fluida",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Tadaima! Kinou nani shita?",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Ao fazer amigos ou conversar com colegas próximos no Japão, a fala formal (...desu/...masu) soa distante. Vamos aprender a transitar para a Forma Casual (Futsuu-kei) com naturalidade."
    },
    stage2_drops: [
        { type: "vocab", kanji: "ふつうけい (普通形)", romaji: "Futsuu-kei", translation: "Forma Casual / Forma Comum", timeContext: "Estilo de fala usado entre amigos, família e iguais." },
        { type: "vocab", kanji: "ためぐち (タメ口)", romaji: "Tameguchi", translation: "Fala casual / Sem polidez formal", timeContext: "Conversar sem usar desu/masu." },
        { type: "grammar_pill", title: "A Regra da Forma Casual", rule: "Para falar de forma casual, troque os verbos em -masu pela forma do dicionário ou forma -te/ta. Troque 'desu' por 'da' (ou omita na fala informal).", formula: "Verbo (Forma Dicionário / Ta) | Substantivo + だ (da)", example: "Tabemasu ➔ Taberu | Ikimasu ➔ Iku | Oishii desu ➔ Oishii" }
    ],
    stage3_practice: [
        { question: "1. Qual é a versão casual do verbo 'Ikimasu' (Ir)?", options: [{ label: "Iku (いく)", isCorrect: true }, { label: "Ikimashita", isCorrect: false }, { label: "Ikaitai", isCorrect: false }] },
        { question: "2. Como dizer 'É saboroso' de forma casual entre amigos?", options: [{ label: "Oishii!", isCorrect: true }, { label: "Oishii desu", isCorrect: false }, { label: "Oishii deshita", isCorrect: false }] },
        { question: "3. Qual a forma casual de 'Konnichiwa, genki desu ka?'", options: [{ label: "Yahho, genki?", isCorrect: true }, { label: "Konnichiwa desu ka", isCorrect: false }, { label: "Sayounara genki", isCorrect: false }] },
        { question: "4. Qual a versão casual para 'Tabemashita' (Comi)?", options: [{ label: "Tabeta", isCorrect: true }, { label: "Taberu", isCorrect: false }, { label: "Tabenasai", isCorrect: false }] },
        { question: "5. Como dizer 'Amanhã é folga/feriado' em tom informal?", options: [{ label: "Ashita wa yasumi da yo", isCorrect: true }, { label: "Ashita wa yasumi desu", isCorrect: false }, { label: "Ashita wa yasumi deshita", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "にほん の ぶんか に きょうみ が あります",
            translation: "Tenho interesse na cultura do Japão.",
            chunks: ["にほん", "の", "ぶんか", "に", "きょうみ", "が", "あります"]
        },
        {
            sentenceJp: "しょうらい にほん で はたらきたい と おもっています",
            translation: "Penso em trabalhar no Japão no futuro.",
            chunks: ["しょうらい", "にほん", "で", "はたらきたい", "と", "おもっています"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Encontrando seu amigo japonês Tanaka no campus universitário.", npcName: "Tanaka", npcMessage: "[Seu Nome]-kun! Kinou nani shita? (O que você fez ontem?)", options: [{ text: "Toshokan de benkyou shita yo! Tanaka-kun wa? (Estudei na biblioteca! E você, Tanaka?)", feedback: "Perfeito uso da forma casual (-ta yo) e reciprocidade!", isCorrect: true }, { text: "Toshokan de benkyou shimashita desu.", feedback: "Misturar formal e casual soa estranho.", isCorrect: false }, { text: "Sayounara!", feedback: "Não se despeça de repente.", isCorrect: false }] },
        { scenario: "Situação 2: Tanaka convida você para comer ramen.", npcName: "Tanaka", npcMessage: "Kyou no hiru, ramen tabe ni iku? (Bora comer ramen hoje no almoço?)", options: [{ text: "Ii ne! Ikou! (Boa! Vamos!)", feedback: "Excelente resposta informal na forma volitiva!", isCorrect: true }, { text: "Iie, tabemasen deshita.", feedback: "Resposta formal e fora de tempo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Não peça desculpas se quer ir.", isCorrect: false }] },
        { scenario: "Situação 3: Vocês estão comendo e o ramen está muito bom.", npcName: "Tanaka", npcMessage: "Kono ramen, mecha oishiku nai? (Esse ramen tá bom demais, né?)", options: [{ text: "Hontou da! Umai! (É mesmo! Delicioso!)", feedback: "Conexão perfeita entre amigos usando gírias casuais!", isCorrect: true }, { text: "Iie, oishii desu.", feedback: "Demasiadamente formal.", isCorrect: false }, { text: "Nani desu ka?", feedback: "Sem sentido.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Quando devemos usar a Forma Casual (Futsuu-kei)?", options: ["Com amigos próximos, família e pessoas de mesma idade", "Com o chefe da empresa", "Em entrevistas formais"], correctIndex: 0 }]
};

const MODULO_B1_02 = {
    id: "b1_mod_02",
    title: "Contração de Verbos na Fala Real: Fala Natural Japonesa",
    section: 1,
    sectionTitle: "O Mundo Informal & Conversa Fluida",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Nani shiteru no? Hayaku ikanakya!",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Na fala rápida do dia a dia, os japoneses encurtam várias estruturas: 'te iru' vira 'teru', 'nakereba' vira 'nakya'. Vamos dominar essas contrações para entender nativos e animes!"
    },
    stage2_drops: [
        { type: "vocab", kanji: "りゃくご (略語)", romaji: "Ryakugo", translation: "Abreviação / Contração", timeContext: "Encurtamento fonético da fala cotidiana." },
        { type: "vocab", kanji: "なきゃ", romaji: "Nakya", translation: "Tenho que... (Contração de nakereba)", timeContext: "Usado para expressar obrigação informalmente." },
        { type: "grammar_pill", title: "Contrações Mais Comuns da Fala Real", rule: "1) ~te iru ➔ ~teru (Mite iru ➔ Miteru). 2) ~nakereba ➔ ~nakya (Ikanakereba ➔ Ikanakya). 3) ~te oku ➔ ~toku (Kaite oku ➔ Kaitoku).", formula: "[Verbo TE] + ru | [Forma Nai sem i] + kya", example: "Nani shiteru no? (O que tá fazendo?) | Ikanakya! (Tenho que ir!)" }
    ],
    stage3_practice: [
        { question: "1. Qual a contração informal de 'Mite iru' (Estou olhando)?", options: [{ label: "Miteru", isCorrect: true }, { label: "Mitara", isCorrect: false }, { label: "Mitai", isCorrect: false }] },
        { question: "2. Como contrair a frase 'Ikanakereba narimasen' (Tenho que ir) na fala casual?", options: [{ label: "Ikanakya!", isCorrect: true }, { label: "Ikanai!", isCorrect: false }, { label: "Ikimashou!", isCorrect: false }] },
        { question: "3. Qual a contração de 'Tabete oku' (Comer antecipadamente)?", options: [{ label: "Tabetoku", isCorrect: true }, { label: "Tabeta", isCorrect: false }, { label: "Tabenasai", isCorrect: false }] },
        { question: "4. O que significa a expressão contraída 'Shiratai' ou 'Shiranai'?", options: [{ label: "Não sei / Não conheço", isCorrect: true }, { label: "Quero saber", isCorrect: false }, { label: "Já sei", isCorrect: false }] },
        { question: "5. Traduza a frase falada: 'Nani shiteru no?'", options: [{ label: "O que você está fazendo?", isCorrect: true }, { label: "Onde você vai?", isCorrect: false }, { label: "Quem é você?", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "でんしゃ に のる とき きっぷ を かいます",
            translation: "Quando ando de trem, compro a passagem.",
            chunks: ["でんしゃ", "に", "のる", "とき", "きっぷ", "を", "かいます"]
        },
        {
            sentenceJp: "みち に まよった とき こうばん で ききます",
            translation: "Quando fico perdido, pergunto no posto policial.",
            chunks: ["みち", "に", "まよった", "とき", "こうばん", "で", "ききます"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Seu amigo te liga perguntando o que você está fazendo.", npcName: "Ken", npcMessage: "Moshimoshi, [Seu Nome]! Ima nani shiteru no? (Alô! O que tá fazendo agora?)", options: [{ text: "Ima家 (ie) de anime miteru yo! Ken wa? (Tô assistindo anime em casa! E você, Ken?)", feedback: "Excelente uso de miteru (contraído de mite iru)!", isCorrect: true }, { text: "Ima anime o mimasu desu.", feedback: "Mistura formal e casual indevida.", isCorrect: false }, { text: "Sayounara!", feedback: "Não desligue na cara do amigo.", isCorrect: false }] },
        { scenario: "Situação 2: Ken avisa que a aula já vai começar.", npcName: "Ken", npcMessage: "Yabai yo! Jouka ga hajimaru! Hayaku ikanakya! (Caramba! A aula vai começar! Temos que ir rápido!)", options: [{ text: "Sou da! Sugum ni iku! (Verdade! Tô indo agora!)", feedback: "Conexão informal perfeita!", isCorrect: true }, { text: "Iie, ikimasen deshita.", feedback: "Incorreto.", isCorrect: false }, { text: "Arigatou gozaimasu!", feedback: "Fora de contexto.", isCorrect: false }] },
        { scenario: "Situação 3: Vocês chegam na sala bem a tempo.", npcName: "Ken", npcMessage: "Mani aotta! Yokatta-! (Deu tempo! Que bom!)", options: [{ text: "Hontou ni yokatta! Gギリ (Giri-giri) da tta ne! (Que bom mesmo! Foi por pouco, né!)", feedback: "Linguagem fluida e natural de Nível B1!", isCorrect: true }, { text: "Gomen nasai desu.", feedback: "Demasiadamente formal.", isCorrect: false }, { text: "Nani desu ka?", feedback: "Sem sentido.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual é a versão contraída cotidiana de 'Ikanakereba' (Tenho que ir)?", options: ["Ikanakya", "Ikaitai", "Ikimashita"], correctIndex: 0 }]
};

const MODULO_B1_03 = {
    id: "b1_mod_03",
    title: "Expressando Citações e Pensamentos: ~to omoimasu e ~to iimashita",
    section: 1,
    sectionTitle: "O Mundo Informal & Conversa Fluida",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Ashita wa ame ga furu to omoimasu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Aprenda a expressar suas próprias opiniões ('Acho que...') e relatar o que outras pessoas disseram ('Ele disse que...') usando a partícula de citação ~to."
    },
    stage2_drops: [
        { type: "vocab", kanji: "おもいます (思います)", romaji: "Omoimasu", translation: "Achar / Pensar", timeContext: "Usado para expressar opiniões pessoais." },
        { type: "vocab", kanji: "いいました (言いました)", romaji: "Iimashita", translation: "Disse / Falou", timeContext: "Relatar falas de terceiros." },
        { type: "grammar_pill", title: "Estrutura de Citação com と (to)", rule: "Coloque a frase na Forma Casual antes da partícula と (to) + omoimasu (acho que) ou iimashita (disse que).", formula: "[Frase na Forma Casual] + と思います (to omoimasu) / と言いました (to iimashita)", example: "Oishii to omoimasu (Acho que é gostoso) | Tanaka-san wa iku to iimashita (Tanaka disse que vai)" }
    ],
    stage3_practice: [
        { question: "1. Como dizer 'Acho que o teste de amanhã vai ser difícil'?", options: [{ label: "Ashita no test wa muzukashii to omoimasu", isCorrect: true }, { label: "Ashita no test wa muzukashii desu ka", isCorrect: false }, { label: "Ashita no test wa muzukashii to kudasai", isCorrect: false }] },
        { question: "2. Como relatar: 'O professor disse que amanhã não haverá aula'?", options: [{ label: "Sensei wa ashita jugyou ga nai to iimashita", isCorrect: true }, { label: "Sensei wa ashita jugyou ga nai desu", isCorrect: false }, { label: "Sensei wa ashita jugyou ga nai to omoimasu", isCorrect: false }] },
        { question: "3. Traduza: 'Kono fuku wa takai to omoimasu'", options: [{ label: "Acho que esta roupa é cara", isCorrect: true }, { label: "Esta roupa é barata", isCorrect: false }, { label: "Comprei esta roupa cara", isCorrect: false }] },
        { question: "4. Qual partícula introduz citações e pensamentos em japonês?", options: [{ label: "と (to)", isCorrect: true }, { label: "で (de)", isCorrect: false }, { label: "に (ni)", isCorrect: false }] },
        { question: "5. Como dizer 'O que você acha?' em japonês?", options: [{ label: "Dou omoimasu ka?", isCorrect: true }, { label: "Nani desu ka?", isCorrect: false }, { label: "Doko omoimasu ka?", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "もし おかね が あったら りょこう したい です",
            translation: "Se tivesse dinheiro, gostaria de viajar.",
            chunks: ["もし", "おかね", "が", "あったら", "りょこう", "したい", "です"]
        },
        {
            sentenceJp: "あした あめ が ふっても でかけます",
            translation: "Mesmo que chova amanhã, irei sair.",
            chunks: ["あした", "あめ", "が", "ふっても", "でかけます"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você e sua colega discutem se vai chover amanhã.", npcName: "Yumi", npcMessage: "[Seu Nome]-san, ashita no tenki, dou omoimasu ka? (O que acha do tempo amanhã?)", options: [{ text: "Ame ga furu to omoimasu. Tenki yohou de iite imashita. (Acho que vai chover. Disseram na previsão do tempo.)", feedback: "Combinação perfeita de pensamento (to omoimasu) e citação (iite imashita)!", isCorrect: true }, { text: "Ame desu to omoimasen.", feedback: "Construção incorreta.", isCorrect: false }, { text: "Konnichiwa!", feedback: "Fora de contexto.", isCorrect: false }] },
        { scenario: "Situação 2: Yumi pergunta sobre o novo restaurante perto da estação.", npcName: "Yumi", npcMessage: "Eki no mae no atarashii resutoran, oishii to omoimasu ka? (Acha que o novo restaurante em frente à estação é gostoso?)", options: [{ text: "Haibaru-san ga oishii to iimashita yo! Issho ni ikimashou! (O Haibaru-san disse que é gostoso! Vamos juntos!)", feedback: "Excelente citação indireta!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Resposta desconexa.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 3: Yumi concorda em ir ao restaurante.", npcName: "Yumi", npcMessage: "Ii desu ne! Watashi mo ikitai to omotte imashita! (Boa! Eu também estava pensando em ir!)", options: [{ text: "Ja, kyou no yoru ikou! (Então vamos hoje à noite!)", feedback: "Encerramento fluido e natural!", isCorrect: true }, { text: "Sayounara!", feedback: "Despedida precoce.", isCorrect: false }, { text: "Nani desu ka?", feedback: "Sem sentindo.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual estrutura usar para dizer 'Acho que X'?", options: ["Forma Casual + to omoimasu", "Forma Masu + kudasai", "Forma Nai + arimasen"], correctIndex: 0 }]
};

const MODULO_B1_04 = {
    id: "b1_mod_04",
    title: "Dúvidas e Incertezas: ~ka dou ka e ~kamo shiremasen",
    section: 1,
    sectionTitle: "O Mundo Informal & Conversa Fluida",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Ashita wa ikeru ka dou ka wakaranai.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Na vida real, nem sempre temos certeza de tudo. Aprenda a expressar 'Se sim ou não' (~ka dou ka) e possibilidades incertas ('Pode ser que...') com ~kamo shiremasen."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～かどうか", romaji: "~ka dou ka", translation: "Se sim ou não / Se é ou não", timeContext: "Expresa dúvida entre duas possibilidades." },
        { type: "vocab", kanji: "～かもしれない", romaji: "~kamo shiremasen / ~kamo", translation: "Pode ser que... / Talvez...", timeContext: "Indica probabilidade moderada ou incerteza." },
        { type: "grammar_pill", title: "Incerteza e Hipóteses em Japonês", rule: "1) Frase casual + かどうか (ka dou ka) + wakaranai (não sei se sim ou não). 2) Frase casual + かもしれません (kamo shiremasen) = Pode ser que aconteça.", formula: "[Forma Casual] + かどうか | [Forma Casual] + かもしれません", example: "Ikeru ka dou ka wakaranai (Não sei se poderei ir ou não) | Ame ga furu kamo (Pode ser que chova)" }
    ],
    stage3_practice: [
        { question: "1. Como dizer 'Não sei se a comida está boa ou não'?", options: [{ label: "Oishii ka dou ka wakaranai", isCorrect: true }, { label: "Oishii to omoimasu", isCorrect: false }, { label: "Oishii desu ka", isCorrect: false }] },
        { question: "2. Como expressar a probabilidade: 'Pode ser que o trem atrase'?", options: [{ label: "Densha ga okureru kamo shiremasen", isCorrect: true }, { label: "Densha ga okureta kara desu", isCorrect: false }, { label: "Densha ga okurete kudasai", isCorrect: false }] },
        { question: "3. Na fala informal entre amigos, como abreviar 'kamo shiremasen'?", options: [{ label: "Apenas '~kamo'", isCorrect: true }, { label: "Apenas '~ka'", isCorrect: false }, { label: "Apenas '~na'", isCorrect: false }] },
        { question: "4. Traduza: 'Ashita ikeru ka dou ka meeru shimasu'", options: [{ label: "Mando e-mail avisando se poderei ir ou não amanhã", isCorrect: true }, { label: "Com certeza irei amanhã", isCorrect: false }, { label: "Não posso ir amanhã", isCorrect: false }] },
        { question: "5. Qual frase indica 'Talvez ele esteja doente'?", options: [{ label: "Kare wa byouki kamo shiremasen", isCorrect: true }, { label: "Kare wa byouki desu", isCorrect: false }, { label: "Kare wa byouki deshita", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "ともだち が ひっこし を てつだって くれました",
            translation: "Meu amigo me ajudou na mudança.",
            chunks: ["ともだち", "が", "ひっこし", "を", "てつだって", "くれました"]
        },
        {
            sentenceJp: "せんせい に えいご を おしえて いただきました",
            translation: "Recebi a gentileza do professor me ensinar inglês.",
            chunks: ["せんせい", "に", "えいご", "を", "おしえて", "いただきました"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você conversa com seu colega sobre a festa de aniversário do fim de semana.", npcName: "Sora", npcMessage: "[Seu Nome]-san, shuumatsu no paatii, kuru? (Você vem para a festa no fim de semana?)", options: [{ text: "Arubaito ga aru kara, ikeru ka dou ka wakaranai n da... (Como tenho trabalho a meio tempo, não sei se poderei ir ou não...)", feedback: "Excelente expressão de dúvida com ka dou ka!", isCorrect: true }, { text: "Iie, ikimashita.", feedback: "Tempo verbal errado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida fora de hora.", isCorrect: false }] },
        { scenario: "Situação 2: Sora pergunta se você conseguirá pelo menos chegar mais tarde.", npcName: "Sora", npcMessage: "Oso-ku natte mo ii kara, korai? (Pode chegar mais tarde, não quer vir?)", options: [{ text: "Kuji-goro ni ikeru kamo shiremasen! (Pode ser que eu consiga ir por volta das 9h!)", feedback: "Ótima hipótese com kamo shiremasen!", isCorrect: true }, { text: "Tabemashita!", feedback: "Sem sentido.", isCorrect: false }, { text: "Arigatou gozaimasu!", feedback: "Fora de contexto.", isCorrect: false }] },
        { scenario: "Situação 3: Sora fica feliz com a possibilidade.", npcName: "Sora", npcMessage: "Watta! Matte iru yo! (Massa! Fico te esperando!)", options: [{ text: "Un! Iketara iku ne! (Beleza! Se der eu vou, tá!)", feedback: "Fala natural de nível intermediário B1!", isCorrect: true }, { text: "Gomen nasai desu.", feedback: "Muito formal.", isCorrect: false }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que a expressão '~kamo shiremasen' indica em uma frase?", options: ["Uma probabilidade ou incerteza ('pode ser que...')", "Uma ordem formal", "Uma certeza absoluta"], correctIndex: 0 }]
};

const MODULO_B1_05 = {
    id: "b1_mod_05",
    title: "Explicando Razões com Nuance: ~node vs ~kara",
    section: 2,
    sectionTitle: "Narrativa, Causas e Imprevistos",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Ame ga fukatte iru node, takushi- ni norimashou.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Tanto ~kara quanto ~node significam 'porque/como', mas ~node é muito mais polido, suave e formal. Aprenda a usar a justificativa certa em reuniões, atrasos e conversas sociais."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～ので", romaji: "~node", translation: "Como / Porque (Polido e objetivo)", timeContext: "Usado para justificativas sociais e corporativas suaves." },
        { type: "vocab", kanji: "～から", romaji: "~kara", translation: "Porque / Pois (Subjetivo)", timeContext: "Usado para opiniões pessoais e fala casual." },
        { type: "grammar_pill", title: "A Diferença entre Node (ので) e Kara (から)", rule: "Node soa natural e educado ao dar desculpas ou explicar situações de causa objetiva. Kara soa mais forte e enfatiza a opinião pessoal.", formula: "[Verbo/Adjetivo na Forma Casual] + ので (node) | Substantivo/Adj-na + なので (na node)", example: "Jikan ga nai node, shuuryou shimasu (Como não há tempo, encerramos)." }
    ],
    stage3_practice: [
        { question: "1. Como explicar educadamente um atraso dizendo 'Como o trem atrasou...'?", options: [{ label: "Densha ga okureta node...", isCorrect: true }, { label: "Densha ga okureta kara desu ka", isCorrect: false }, { label: "Densha ga okurete kudasai", isCorrect: false }] },
        { question: "2. Qual conjunção de causa é mais adequada para pedir desculpas ao chefe no trabalho?", options: [{ label: "~node (ので)", isCorrect: true }, { label: "~kara (から)", isCorrect: false }, { label: "~demo (でも)", isCorrect: false }] },
        { question: "3. Como dizer: 'Como hoje é meu aniversário, vou festejar'?", options: [{ label: "Kyou wa tanjoubi na node, paatii o shimasu", isCorrect: true }, { label: "Kyou wa tanjoubi desu to shimasu", isCorrect: false }, { label: "Kyou wa tanjoubi de kudasai", isCorrect: false }] },
        { question: "4. Traduza: 'Atsui node, mado o akete mo ii desu ka?'", options: [{ label: "Como está quente, posso abrir a janela?", isCorrect: true }, { label: "Está frio, feche a janela", isCorrect: false }, { label: "Acho a janela cara", isCorrect: false }] },
        { question: "5. O que se deve adicionar antes de ~node quando a palavra anterior for um Substantivo?", options: [{ label: "Adicionar 'na' (na node)", isCorrect: true }, { label: "Adicionar 'ga' (ga node)", isCorrect: false }, { label: "Adicionar 'no' (no node)", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "あめ が ふりそう です から かさ を もっていきます",
            translation: "Parece que vai chover, então levarei guarda-chuva.",
            chunks: ["あめ", "が", "ふりそう", "です", "から", "かさ", "を", "もっていきます"]
        },
        {
            sentenceJp: "この ケーキ は おいしそう です",
            translation: "Bolo parece ser delicioso.",
            chunks: ["この", "ケーキ", "は", "おいしそう", "です"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você chega 10 minutos atrasado para a reunião com seu gerente.", npcName: "Gerente Yamada", npcMessage: "[Seu Nome]-san, chokkou desu ne. Nani ga arimashita ka? (Atrasado, né. O que aconteceu?)", options: [{ text: "Moushiwake arimasen! Jiko de densha ga stopped shita node,遅 (oku) remashita. (Mil desculpas! Como o trem parou por um acidente, me atrasei.)", feedback: "Excelente justificativa polida usando node!", isCorrect: true }, { text: "Oishii kara desu!", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Inaceitável em ambiente profissional.", isCorrect: false }] },
        { scenario: "Situação 2: O gerente compreende a situação por ser um problema no transporte.", npcName: "Gerente Yamada", npcMessage: "Sou desu ka. Jiko nara shikata ga nai desu ne. (Entendo. Se foi um acidente, não havia o que fazer.)", options: [{ text: "Kore kara ki o tsukemasu. Yoroshiku onegai shimasu. (Terei mais cuidado a partir de agora. Conto com sua compreensão.)", feedback: "Etiqueta corporativa exemplar!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Resposta fora de contexto.", isCorrect: false }, { text: "Arigatou gozaimasu!", feedback: "Inadequado agradecer pelo atraso.", isCorrect: false }] },
        { scenario: "Situação 3: O gerente pede para você se sentar e iniciar a pauta.", npcName: "Gerente Yamada", npcMessage: "Dewa, kaigi o hajimemashou. (Bem, vamos começar a reunião.)", options: [{ text: "Hai! Shouchi shimashita! (Sim! Compreendido!)", feedback: "Vocabulário de respeito corporativo perfeito!", isCorrect: true }, { text: "Gomen nasai!", feedback: "Já pediu desculpas antes.", isCorrect: false }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Por que a partícula '~node' é preferida em ambientes formais em vez de '~kara'?", options: ["Porque soa mais polida, suave e objetiva ao explicar motivos", "Porque significa 'mas' em vez de 'porque'", "Porque é usada apenas para alimentos"], correctIndex: 0 }]
};

const MODULO_B1_06 = {
    id: "b1_mod_06",
    title: "Expressando Arrependimento e Conclusão: ~te shimaimashita / ~chau",
    section: 2,
    sectionTitle: "Narrativa, Causas e Imprevistos",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Saifu o tasukete shimaimashita! Doushiyou!",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Aprenda a relatar imprevistos com sentimento de lamentação ('Puxa, acabei perdendo minha carteira!') ou ação totalmente concluída usando ~te shimaimashita (informal: ~chau)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～てしまいました", romaji: "~te shimaimashita", translation: "Acabei fazendo... / Lamentavelmente fiz...", timeContext: "Usado quando algo ruim/não planejado acontece." },
        { type: "vocab", kanji: "～ちゃう", romaji: "~chau / ~jau", translation: "Acabei... (Forma casual de ~te shimau)", timeContext: "Expressão muito comum na conversa cotidiana." },
        { type: "grammar_pill", title: "O Sentimento de Shimau (esquecimento/erro)", rule: "Conecte o verbo na Forma TE + shimaimashita (formal) ou ~chau (casual) para indicar que algo foi concluído sem querer ou totalmente.", formula: "[Verbo Forma TE] + しまいました (shimaimashita) / ちゃいました (chaimashita)", example: "Pasupooto o wakurete shimaimashita! (Puxa, acabei esquecendo o passaporte!)" }
    ],
    stage3_practice: [
        { question: "1. Como dizer com lamento 'Acabei perdendo a chave'?", options: [{ label: "Kagi o nakushite shimaimashita", isCorrect: true }, { label: "Kagi o nakushite kudasai", isCorrect: false }, { label: "Kagi o nakushita to omoimasu", isCorrect: false }] },
        { question: "2. Como um amigo diria informalmente 'Acabei comendo o bolo todo'?", options: [{ label: "Keeki o zenbu tabechatta!", isCorrect: true }, { label: "Keeki o tabemasen deshita", isCorrect: false }, { label: "Keeki o taberu tsumori desu", isCorrect: false }] },
        { question: "3. Qual a contração informal de '~te shimau'?", options: [{ label: "~chau", isCorrect: true }, { label: "~kamo", isCorrect: false }, { label: "~tara", isCorrect: false }] },
        { question: "4. Traduza: 'Densha ni乗り (nori) okurete shimaimashita'", options: [{ label: "Lamentavelmente perdi o trem", isCorrect: true }, { label: "Vou pegar o trem amanhã", isCorrect: false }, { label: "Gosto de viajar de trem", isCorrect: false }] },
        { question: "5. Qual frase indica 'Acabei dormindo demais'?", options: [{ label: "Neshite shimaimashita / Nechaimashita", isCorrect: true }, { label: "Nemashou", isCorrect: false }, { label: "Neru koto ni shimasu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "でんしゃ の なか で さいふ を おとして しまいました",
            translation: "Acabei deixando a carteira cair dentro do trem.",
            chunks: ["でんしゃ", "の", "なか", "で", "さいふ", "を", "おとして", "しまいました"]
        },
        {
            sentenceJp: "しゅくだい を ぜんぶ やって しまいました",
            translation: "Terminei completamente toda a lição de casa.",
            chunks: ["しゅくだい", "を", "ぜんぶ", "やって", "しまいました"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você encontra seu amigo no ponto de encontro parecendo preocupado.", npcName: "Ren", npcMessage: "[Seu Nome]-san, doushitano? Kaoiro ga warui yo. (O que houve? Você tá com uma cara péssima.)", options: [{ text: "Taiken da! Saifu o dokoka ni落 (otoshi) shite shimaimashita! (É terrível! Acabei deixando cair minha carteira em algum lugar!)", feedback: "Excelente relato de imprevisto com shimaimashita!", isCorrect: true }, { text: "Saifu ga oishii desu!", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Não fuja da conversa.", isCorrect: false }] },
        { scenario: "Situação 2: Ren sugere ir imediatamente ao posto policial (Koban).", npcName: "Ren", npcMessage: "Eee?! Koban ni ikou! Dareda ga todokete kureteru kamo! (O quê?! Vamos ao posto de polícia! Alguém pode ter entregado!)", options: [{ text: "Un, sou shiyo! Sugum ni ikou! (É, vamos fazer isso! Vamos já!)", feedback: "Reação natural e coerente com a situação!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Resposta desconexa.", isCorrect: false }, { text: "Arigatou gozaimasu!", feedback: "Fora de hora.", isCorrect: false }] },
        { scenario: "Situação 3: No Koban, o policial encontrou sua carteira intacta.", npcName: "Policial do Koban", npcMessage: "Kore desu ka? Shoushin de todokadareta mono desu yo. (É esta? Foi entregue por um bom cidadão.)", options: [{ text: "Ahhh! Yokatta-! Hontou ni arigatou gozaimasu! (Ahhh! Que alívio! Muito obrigado mesmo!)", feedback: "Final feliz emocionante e uso correto de etiqueta!", isCorrect: true }, { text: "Gomen nasai desu.", feedback: "Inadequado.", isCorrect: false }, { text: "Nani desu ka?", feedback: "Sem sentindo.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que a forma '~te shimaimashita' expressa em uma narrativa?", options: ["Sentimento de arrependimento/lamento por um erro ou conclusão total de uma ação", "Uma permissão educada", "Um convite para almoçar"], correctIndex: 0 }]
};

const MODULO_B1_07 = {
    id: "b1_mod_07",
    title: "Voz Passiva (Ukemi): Quando a Ação Cai Sobre Você",
    section: 2,
    sectionTitle: "Narrativa, Causas e Imprevistos",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Sensei ni homeraremashita!",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Aprenda a construir frases na Voz Passiva (Ukemi) para relatar ações em que você foi o alvo de um elogio, crítica ou evento ('Fui elogiado pelo professor', 'Fui chamado por ele')."
    },
    stage2_drops: [
        { type: "vocab", kanji: "うけみ (受身)", romaji: "Ukemi", translation: "Voz Passiva", timeContext: "Estrutura gramatical onde o sujeito sofre a ação." },
        { type: "vocab", kanji: "ほめられる", romaji: "Homerareru", translation: "Ser elogiado (Passiva de Homeru)", timeContext: "Receber um elogio de alguém." },
        { type: "grammar_pill", title: "Conjugação da Voz Passiva (Ukemi)", rule: "Verbos Grupo 1: troca vogal -u por -areluru (Yomu ➔ Yomareru). Grupo 2: troca -ru por -rareru (Taberu ➔ Taberareru). Grupo 3: Suru ➔ Sareru / Kuru ➔ Korareru.", formula: "[Pessoa] に (ni) + [Verbo na Forma Passiva]", example: "Sensei ni homeraremashita (Fui elogiado pelo professor)" }
    ],
    stage3_practice: [
        { question: "1. Qual a forma passiva do verbo 'Homeru' (Elogiar)?", options: [{ label: "Homerareru", isCorrect: true }, { label: "Homeita", isCorrect: false }, { label: "Homenai", isCorrect: false }] },
        { question: "2. Como dizer 'Fui chamado pelo chefe'?", options: [{ label: "Buchou ni yobaremashita", isCorrect: true }, { label: "Buchou ni yobimashita", isCorrect: false }, { label: "Buchou ni yobite kudasai", isCorrect: false }] },
        { question: "3. Qual partícula indica o agente da ação na voz passiva ('por alguém')?", options: [{ label: "に (ni)", isCorrect: true }, { label: "で (de)", isCorrect: false }, { label: "を (o)", isCorrect: false }] },
        { question: "4. Traduza: 'Kono hon wa sekai-juu de yomarete imasu'", options: [{ label: "Este livro é lido no mundo todo", isCorrect: true }, { label: "Eu li este livro no mundo todo", isCorrect: false }, { label: "Ninguém lê este livro", isCorrect: false }] },
        { question: "5. Qual a forma passiva do verbo 'Suru' (Fazer)?", options: [{ label: "Sareru", isCorrect: true }, { label: "Shirareru", isCorrect: false }, { label: "Saseru", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "みち を わたる とき つぎ の かど を みぎ へ まがります",
            translation: "Ao atravessar a rua, vire à direita na próxima esquina.",
            chunks: ["みち", "を", "わたる", "とき", "つぎ", "の", "かど", "を", "みぎ", "へ", "まがります"]
        },
        {
            sentenceJp: "まっすぐ あるく と ぎんこう が あります",
            translation: "Se andar reto, haverá um banco.",
            chunks: ["まっすぐ", "あるく", "と", "ぎんこう", "が", "あります"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você conta para seu colega de classe sobre a aula de hoje.", npcName: "Daiki", npcMessage: "[Seu Nome]-san, kyou no Nihongo no jugyou, dou datta? (Como foi a aula de japonês hoje?)", options: [{ text: "Sugoi desu yo! Sensei ni supiichi o homeraremashita! (Foi incrível! Fui elogiado pelo professor pelo meu discurso!)", feedback: "Excelente uso da voz passiva positiva!", isCorrect: true }, { text: "Sensei o homemashita.", feedback: "Você disse que você elogiou o professor.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida desconexa.", isCorrect: false }] },
        { scenario: "Situação 2: Daiki fica impressionado com a sua evolução.", npcName: "Daiki", npcMessage: "Sugoi ja n! Mainichi benkyou shiteru kara ne! (Incrível! É porque você estuda todo dia, né!)", options: [{ text: "Arigatou! Motto jouzu ni nareru you ni ganbaru yo! (Obrigado! Vou me esforçar para ficar ainda melhor!)", feedback: "Resposta modesta e motivada!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Fora de assunto.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Não peça desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: Daiki propõe estudarem juntos para o próximo teste.", npcName: "Daiki", npcMessage: "Kondo, issho ni benkyou oshiete kure nai? (Na próxima, não me ensina a estudar junto?)", options: [{ text: "Mochiron! Mojido-ku yorokonde! (Com certeza! Com todo o prazer!)", feedback: "Simpatia e fluência natural!", isCorrect: true }, { text: "Sensei ni yobaremashita.", feedback: "Frase solta sem nexo.", isCorrect: false }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Como se indica quem praticou a ação na frase em Voz Passiva?", options: ["Usando a partícula に (ni) após o agente da ação", "Usando a partícula を (o)", "Não é possível indicar"], correctIndex: 0 }]
};

const MODULO_B1_08 = {
    id: "b1_mod_08",
    title: "Situações de Incômodo: Passiva de Incômodo (Meiwaku no Ukemi)",
    section: 2,
    sectionTitle: "Narrativa, Causas e Imprevistos",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Ame ni furarete, nurete shimaimashita.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "No japonês existe um uso único da Voz Passiva chamado 'Passiva de Incômodo' (Meiwaku no Ukemi). Use-o para expressar quando ações de outros ou da natureza prejudicaram você ('Fui pego pela chuva', 'O bebê chorou do meu lado')."
    },
    stage2_drops: [
        { type: "vocab", kanji: "めいわく (迷惑)", romaji: "Meiwaku", translation: "Incômodo / Transtorno", timeContext: "Situações desagradáveis causadas por terceiros." },
        { type: "vocab", kanji: "ふられる (降られる)", romaji: "Furareru", translation: "Ser pego pela chuva (Passiva de Furu)", timeContext: "Quando a chuva te molha sem guarda-chuva." },
        { type: "grammar_pill", title: "A Estrutura da Passiva de Incômodo", rule: "Usa-se a voz passiva em verbos intransitivos ou ações alheias que trouxeram transtorno pessoal direto para você.", formula: "[Causa/Pessoa] に (ni) + [Verbo Passivo de Incômodo]", example: "Ame ni furaremashita (Fui pego pela chuva) | Tonari no hito ni tasukaremashita (Fui incomodado pelo vizinho)" }
    ],
    stage3_practice: [
        { question: "1. O que significa a frase clássica 'Ame ni furaremashita'?", options: [{ label: "Fui pego pela chuva e me atrapalhei", isCorrect: true }, { label: "Gosto quando chove", isCorrect: false }, { label: "Amanhã não vai chover", isCorrect: false }] },
        { question: "2. Como dizer 'Fui pisado no pé pelo passageiro no trem'?", options: [{ label: "Densha de hito ni ashi o fumaremashita", isCorrect: true }, { label: "Densha de hito ni ashi o fumimashita", isCorrect: false }, { label: "Densha de ashi ga arimasu", isCorrect: false }] },
        { question: "3. Traduza: 'Akachan ni nakarete, nemuremasen deshita'", options: [{ label: "Como o bebê chorou, não consegui dormir", isCorrect: true }, { label: "O bebê dormiu muito bem", isCorrect: false }, { label: "Chorei junto com o bebê", isCorrect: false }] },
        { question: "4. Qual a intenção principal ao usar a Passiva de Incômodo em japonês?", options: [{ label: "Demonstrar que a ação alheia te causou um transtorno direto", isCorrect: true }, { label: "Elogiar o comportamento de alguém", isCorrect: false }, { label: "Dar uma ordem formal", isCorrect: false }] },
        { question: "5. Qual a forma passiva de incômodo do verbo 'Kuru' (Vir)?", options: [{ label: "Korareru (Ser surpreendido pela vinda indesejada de alguém)", isCorrect: true }, { label: "Kimashita", isCorrect: false }, { label: "Koyou", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "かちょう に ほん を おかりしました",
            translation: "Peguei um livro emprestado do gerente.",
            chunks: ["かちょう", "に", "ほん", "を", "おかりしました"]
        },
        {
            sentenceJp: "しゃちょう が おかえり に なります",
            translation: "O presidente da empresa irá voltar para casa.",
            chunks: ["しゃちょう", "が", "おかえり", "に", "なります"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você chega todo molhado no escritório.", npcName: "Colega Mai", npcMessage: "[Seu Nome]-san! Zぶnure (zubunure) ja nai! Doushitano? (Tá encharcado! O que houve?)", options: [{ text: "Totsuzen ame ni furarete, kasa mo nakatta n desu... (Fui pego por uma chuva de surpresa e não tinha guarda-chuva...)", feedback: "Uso perfeito da passiva de incômodo ame ni furarete!", isCorrect: true }, { text: "Ame o furimashita!", feedback: "Você disse que você fez chover.", isCorrect: false }, { text: "Sayounara!", feedback: "Fora de contexto.", isCorrect: false }] },
        { scenario: "Situação 2: Mai te empresta uma toalha limpa.", npcName: "Colega Mai", npcMessage: "Taiken datta ne! Kono taoru, tsukatte! (Que sufoco! Usa esta toalha!)", options: [{ text: "Tasukarimasu! Mai-san, hontou ni arigatou! (Me salvou! Mai-san, muito obrigado mesmo!)", feedback: "Gratidão genuína e polida!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Fora de foco.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Não há motivo para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: Mai avisa que vai ligar o aquecedor.", npcName: "Colega Mai", npcMessage: "Arakajime danbou tsukeru ne. Kaze hika nai de ne! (Vou ligar o aquecedor. Não vá pegar um resfriado!)", options: [{ text: "Hai! Ki o tsukemasu! (Sim! Vou me cuidar!)", feedback: "Comunicação empática de nível B1!", isCorrect: true }, { text: "Ame ni furaremashita.", feedback: "Repetição desnecessária.", isCorrect: false }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual é o sentido da expressão 'Ame ni furareru'?", options: ["Ser pego/prejudicado por uma chuva não planejada", "Chover bastante no jardim", "Fazer chover artificialmente"], correctIndex: 0 }]
};

const MODULO_B1_09 = {
    id: "b1_mod_09",
    title: "Condicionais I: Tara e To (Se e Quando)",
    section: 3,
    sectionTitle: "Hipóteses, Condições e Mudanças",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Nihon ni ittara, Kyoto ni ikitai desu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "As condicionais são fundamentais para falar do futuro! Aprenda a usar ~tara ('Se/Quando acontecer X') e ~to ('Sempre que X acontece, inevitavelmente Y')."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～たら", romaji: "~tara", translation: "Se... / Quando... (Condicional geral)", timeContext: "Estrutura condicional mais usada e flexível." },
        { type: "vocab", kanji: "～と", romaji: "~to (Condicional)", translation: "Sempre que... / Ao (Inevitável)", timeContext: "Leis da natureza, botões e direções." },
        { type: "grammar_pill", title: "Como usar Tara e To", rule: "1) Verbo Forma Ta + ら (tara) = Se/Quando (Ex: Ittara = Se eu for). 2) Verbo Forma Dicionário + と (to) = Toda vez que X acontece, Y acontece automaticamente.", formula: "[Verbo Forma Ta] + ら | [Verbo Dicionário] + と", example: "Kono botan o押 (o) su to, mizu ga demasu (Ao apertar este botão, a água sai)." }
    ],
    stage3_practice: [
        { question: "1. Como dizer 'Se eu for ao Japão, quero visitar Kyoto'?", options: [{ label: "Nihon ni ittara, Kyoto ni ikitai desu", isCorrect: true }, { label: "Nihon ni iku to, Kyoto ni ikimasen", isCorrect: false }, { label: "Nihon ni ikite kudasai", isCorrect: false }] },
        { question: "2. Como instruir no metrô: 'Ao virar à direita, haverá a bilheteria'?", options: [{ label: "Migi ni magaru to, kippu uriba ga arimasu", isCorrect: true }, { label: "Migi ni magattara, kippu uriba deshita", isCorrect: false }, { label: "Migi ni magaru kara desu", isCorrect: false }] },
        { question: "3. Qual condicional usar para leis da natureza ('Se esquentar o gelo, derrete')?", options: [{ label: "Condicional com と (to)", isCorrect: true }, { label: "Condicional com たら (tara)", isCorrect: false }, { label: "Nenhuma", isCorrect: false }] },
        { question: "4. Traduza: 'Jikan ga attara, eiga o mimashou'", options: [{ label: "Se tivermos tempo, vamos ver um filme", isCorrect: true }, { label: "Não temos tempo para filmes", isCorrect: false }, { label: "O filme foi longo", isCorrect: false }] },
        { question: "5. Como dizer 'Quando chegar em casa, me ligue'?", options: [{ label: "Ie ni tsukattara, denwa shite kudasai", isCorrect: true }, { label: "Ie ni tsuku to, denwa shimasu", isCorrect: false }, { label: "Ie ni tsuku kara desu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "わたし が たなか と 申します",
            translation: "Eu me chamo Tanaka.",
            chunks: ["わたし", "が", "たなか", "と", "申します"]
        },
        {
            sentenceJp: "あした めいし を おもち いたします",
            translation: "Amanhã trarei meu cartão de visita.",
            chunks: ["あした", "めいし", "を", "おもち", "いたします"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você conversa com seu colega sobre as férias de verão.", npcName: "Shin", npcMessage: "[Seu Nome]-san, natsu yasumi no yotei wa? (Quais os planos para as férias de verão?)", options: [{ text: "Okane ga attara, Okinawa ni ikitai to omotte imasu! (Se eu tiver dinheiro, penso em ir a Okinawa!)", feedback: "Combinação excelente de condicional (attara) e pensamento (to omotte imasu)!", isCorrect: true }, { text: "Okinawa ni ikimashita.", feedback: "Tempo verbal passado incorreto.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida desconexa.", isCorrect: false }] },
        { scenario: "Situação 2: Shin dá uma dica sobre como economizar nas passagens.", npcName: "Shin", npcMessage: "Hayaku予約 (yoyaku) suru to, yasuku naru yo! (Se reservar cedo, fica mais barato!)", options: [{ text: "Sou n da! Ja, kyou kaette kara sugum ni yoyaku suru yo! (É mesmo! Então ao voltar para casa hoje vou reservar já!)", feedback: "Fluência condicional perfeita!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Fora de foco.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 3: Shin deseja uma boa viagem.", npcName: "Shin", npcMessage: "Iku to ii ne! Souvenir (omiage) matte iru yo! (Tomara que você vá! Fico esperando a lembrancinha!)", options: [{ text: "Un! Ittara omiage kaimasu ne! (Beleza! Se eu for, compro lembrancinha sim!)", feedback: "Diálogo natural de nível B1!", isCorrect: true }, { text: "Okane ga arimasen.", feedback: "Resposta seca e desmancha-prazeres.", isCorrect: false }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual a diferença entre as condicionais 'Tara' e 'To'?", options: ["Tara é condicional hipotética/tempo geral; To indica consequência automática e inevitável", "São exatamente idênticas sem diferença", "To é usado apenas para comida"], correctIndex: 0 }]
};

const MODULO_B1_10 = {
    id: "b1_mod_10",
    title: "Condicionais II: Ba e Nara (Se for o caso...)",
    section: 3,
    sectionTitle: "Hipóteses, Condições e Mudanças",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Yasukereba, kaimasu. Nihon-go nara, omakase kudasai!",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Domine as condicionais formais e contextuais ~ba ('Se for o caso de X') e ~nara ('Se o assunto for X / Falando de X'). Perfeito para negociações e conselhos."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～ば", romaji: "~ba", translation: "Se... (Condicional formal de hipótese)", timeContext: "Usado em provérbios, conselhos e condições formais." },
        { type: "vocab", kanji: "～なら", romaji: "~nara", translation: "Se o assunto for... / Caso seja...", timeContext: "Retoma um tópico mencionado pelo interlocutor." },
        { type: "grammar_pill", title: "Como conjugar Ba e Nara", rule: "1) Verbos: troca a vogal -u final por -eba (Iku ➔ Ikeba). Adjetivos-i: troca -i por -kereba (Yasui ➔ Yasukereba). 2) Nara: Substantivo/Frase + なら (nara).", formula: "[Verbo -eba / Adj -kereba] | [Substantivo] + なら (nara)", example: "Yasukereba kaimasu (Se for barato, compro) | Kamera nara, Akihabara ga ii desu (Se o assunto é câmera, Akihabara é o lugar)." }
    ],
    stage3_practice: [
        { question: "1. Como conjugar o adjetivo 'Yasui' (Barato) na condicional com Ba?", options: [{ label: "Yasukereba", isCorrect: true }, { label: "Yasuiba", isCorrect: false }, { label: "Yasuitara", isCorrect: false }] },
        { question: "2. Como dar a sugestão: 'Se o assunto for sushi, aquele restaurante é o melhor'?", options: [{ label: "Sushi nara, ano mise ga ichiban desu", isCorrect: true }, { label: "Sushi ba, ano mise ga ichiban desu", isCorrect: false }, { label: "Sushi to, ano mise ga ichiban desu", isCorrect: false }] },
        { question: "3. Traduza a condicional com Ba: 'Anshin shite ireba,大丈夫 (daijoubu) desu'", options: [{ label: "Se você mantiver a calma, ficará tudo bem", isCorrect: true }, { label: "Não se acalme de jeito nenhum", isCorrect: false }, { label: "Estou com medo", isCorrect: false }] },
        { question: "4. Qual a conjugação condicional Ba para o verbo 'Taberu'?", options: [{ label: "Tabereba", isCorrect: true }, { label: "Tabeba", isCorrect: false }, { label: "Tabetara", isCorrect: false }] },
        { question: "5. Quando devemos usar a condicional '~nara'?", options: [{ label: "Ao responder baseado no contexto ou tópico trazido pelo outro", isCorrect: true }, { label: "Para ordenar um prato no restaurante", isCorrect: false }, { label: "Para se despedir", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "しごと の あと で ともだち と のみ に いきます",
            translation: "Depois do trabalho, irei beber com amigos.",
            chunks: ["しごと", "の", "あと", "で", "ともだち", "と", "のみ", "に", "いきます"]
        },
        {
            sentenceJp: "かいぎ の Mae に しりょう を つくります",
            translation: "Antes da reunião, prepararei os documentos.",
            chunks: ["かいぎ", "の", "まえ", "に", "しりょう", "を", "つくります"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Seu amigo pergunta onde comprar eletrônicos em Tóquio.", npcName: "Kaito", npcMessage: "[Seu Nome]-san, atarashii PC ga hoshii n da kedo, doko ga ii ka na? (Tô querendo um PC novo, onde será que é bom?)", options: [{ text: "PC nara, Akihabara ni ikaba, nan demo arimasu yo! (Se o assunto é PC, se você for a Akihabara, tem de tudo!)", feedback: "Uso espetacular de nara e ikaba!", isCorrect: true }, { text: "PC wa oishii desu.", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Fora de contexto.", isCorrect: false }] },
        { scenario: "Situação 2: Kaito pergunta se lá também é barato.", npcName: "Kaito", npcMessage: "Akihabara wa yasui desu ka? (Em Akihabara é barato?)", options: [{ text: "Mise o kurabereba, yasukereba kaimasu yo! (Se comparar as lojas, se for barato dá para comprar!)", feedback: "Construção lógica e fluida!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Incorreto.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: Kaito decide ir junto com você no fim de semana.", npcName: "Kaito", npcMessage: "Issho ni itte kure nai? (Não quer ir junto comigo?)", options: [{ text: "Jikan ga anreba, issho ni ikou! (Se eu tiver tempo, vamos juntos!)", feedback: "Ótima resposta de nível B1!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Akihabara wa doko desu ka?", feedback: "Você já sabe onde é.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual a função da condicional '~nara'?", options: ["Retomar um tema citado pelo interlocutor ('Se o assunto for X...')", "Formar o passado dos verbos", "Expresar proibição"], correctIndex: 0 }]
};

const MODULO_B1_11 = {
    id: "b1_mod_11",
    title: "Mudança de Estado e Hábitos: ~you ni naru e ~koto ni suru",
    section: 3,
    sectionTitle: "Hipóteses, Condições e Mudanças",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Nihon-go ga hanaseru you ni narimashita.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Aprenda a expressar transformações na sua vida: 'Passei a conseguir falar japonês' (~you ni naru) e decisões pessoais deliberadas ('Decidi estudar todo dia') com ~koto ni suru."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～ようになる", romaji: "~you ni naru", translation: "Passar a... / Tornar-se capaz de...", timeContext: "Mudança gradual de habilidade ou hábito." },
        { type: "vocab", kanji: "～ことにする", romaji: "~koto ni suru", translation: "Decidir... / Tomar a decisão de...", timeContext: "Decisão pessoal consciente." },
        { type: "grammar_pill", title: "Expressando Mudanças de Vida", rule: "1) Verbo Potencial + ようになる (you ni naru) = Ficar capaz de. 2) Verbo Dicionário + ことにする (koto ni suru) = Decidi fazer.", formula: "[Verbo Potencial/Dicionário] + ようになる / ことにする", example: "Kanji ga yomeru you ni narimashita (Passei a conseguir ler Kanji) | Mainichi hashiru koto ni shimashita (Decidi correr todo dia)." }
    ],
    stage3_practice: [
        { question: "1. Como dizer com orgulho 'Passei a conseguir entender japonês'?", options: [{ label: "Nihon-go ga wakaru you ni narimashita", isCorrect: true }, { label: "Nihon-go ga wakaru koto ni shimasu", isCorrect: false }, { label: "Nihon-go o wakarimashita", isCorrect: false }] },
        { question: "2. Como expressar a decisão: 'Decidi praticar esportes todas as manhãs'?", options: [{ label: "Maiasa supootsu o suru koto ni shimashita", isCorrect: true }, { label: "Maiasa supootsu o suru you ni narimashita", isCorrect: false }, { label: "Maiasa supootsu o shite kudasai", isCorrect: false }] },
        { question: "3. Traduza: 'Sashimi ga taberareru you ni narimashita'", options: [{ label: "Passei a conseguir comer sashimi", isCorrect: true }, { label: "Não posso comer sashimi", isCorrect: false }, { label: "Decidi vender sashimi", isCorrect: false }] },
        { question: "4. Qual a diferença entre '~koto ni suru' e '~koto ni naru'?", options: [{ label: "~koto ni suru é uma decisão própria; ~koto ni naru é uma decisão externa/regras", isCorrect: true }, { label: "Não há diferença alguma", isCorrect: false }, { label: "Usados apenas para bebidas", isCorrect: false }] },
        { question: "5. Como dizer 'Decidi não beber mais refrigerante'?", options: [{ label: "Juurusu o nomanai koto ni shimashita", isCorrect: true }, { label: "Juurusu o nomeru you ni narimashita", isCorrect: false }, { label: "Juurusu o nomimashou", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "あさ 電車 に おされて 大変 でした",
            translation: "De manhã fui empurrado no trem e foi difícil.",
            chunks: ["あさ", "電車", "に", "おされて", "大変", "でした"]
        },
        {
            sentenceJp: "いぬ に て を かまれました",
            translation: "Minha mão foi mordida pelo cachorro.",
            chunks: ["いぬ", "に", "て", "を", "かまれました"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Seu professor conversa sobre seu progresso nos estudos de japonês.", npcName: "Professor Hayashi", npcMessage: "[Seu Nome]-san, saikin Nihon-go ga jouzu ni narimashita ne! (Ultimamente seu japonês melhorou bastante, hein!)", options: [{ text: "Arigatou gozaimasu! Saikin Kanji ga yomeru you ni narimashita! (Muito obrigado! Ultimamente passei a conseguir ler Kanji!)", feedback: "Uso perfeito da mudança de habilidade com you ni naru!", isCorrect: true }, { text: "Kanji o tabemashita.", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O professor pergunta sobre sua rotina de estudos.", npcName: "Professor Hayashi", npcMessage: "Subarashii! Mainichi dorekurai benkyou shite imasu ka? (Incrível! Quanto estuda por dia?)", options: [{ text: "Mainichi ichi-jikan benkyou suru koto ni shite imasu! (Decidi e mantenho o hábito de estudar 1 hora todo dia!)", feedback: "Uso exemplar da decisão de hábito koto ni shite imasu!", isCorrect: true }, { text: "Iie, benkyou shimasen deshita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Não peça desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: O professor encoraja você a continuar assim.", npcName: "Professor Hayashi", npcMessage: "Kono choushi de ganbatte kudasai ne! (Continue nesse ritmo!)", options: [{ text: "Hai! B1 shiken ni goukakuできるよう (dekiru you) ganbarimasu! (Sim! Vou me esforçar para passar no exame B1!)", feedback: "Resposta motivada e fluida!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Sem nexo.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que a expressão '~you ni naru' indica?", options: ["Uma transformação gradual de habilidade ou comportamento ('passar a...')", "Uma proibição severa", "Uma ordem do chefe"], correctIndex: 0 }]
};

const MODULO_B1_12 = {
    id: "b1_mod_12",
    title: "Tentativas e Experiências: ~te miru e ~koto ga aru",
    section: 3,
    sectionTitle: "Hipóteses, Condições e Mudanças",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Natto o tabete mimashita. Fuji-san ni noborta koto ga arimasu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Aprenda a expressar tentativas de experimentar coisas novas ('Vou experimentar comer natto') com ~te miru e contar histórias de experiências passadas ('Já subi o Monte Fuji') com ~koto ga aru."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～てみる", romaji: "~te miru", translation: "Tentar... / Experimentar...", timeContext: "Fazer algo para ver como é a sensação." },
        { type: "vocab", kanji: "～ことがある", romaji: "~koto ga aru", translation: "Já ter a experiência de... / Já...", timeContext: "Relatar bagagem de vida e eventos passados." },
        { type: "grammar_pill", title: "Experimentando e Relatando Experiências", rule: "1) Verbo Forma TE + miru = Experimentar fazer. 2) Verbo Forma TA + こと金 (koto ga aru) = Já tive a experiência de fazer aquilo na vida.", formula: "[Verbo TE] + みる | [Verbo TA] + ことがある", example: "Kono fuku o kite miru (Vou experimentar vestir esta roupa) | Okinawa ni itta koto ga arimasu (Já fui a Okinawa)." }
    ],
    stage3_practice: [
        { question: "1. Como dizer no provador de roupas 'Vou experimentar vestir esta camisa'?", options: [{ label: "Kono shatsu o kite mimasu", isCorrect: true }, { label: "Kono shatsu o kiru koto ga arimasu", isCorrect: false }, { label: "Kono shatsu o kitara desu", isCorrect: false }] },
        { question: "2. Como contar a um amigo 'Já comi sushi de peixe cru no Japão'?", options: [{ label: "Nihon de nama-sakana no sushi o tabeta koto ga arimasu", isCorrect: true }, { label: "Nihon de sushi o tabete mimasu", isCorrect: false }, { label: "Nihon de sushi o taberu tsumori desu", isCorrect: false }] },
        { question: "3. Traduza: 'Fuji-san ni nobotta koto ga arimasu ka?'", options: [{ label: "Você já subiu o Monte Fuji?", isCorrect: true }, { label: "Você vai subir o Monte Fuji amanhã?", isCorrect: false }, { label: "O Monte Fuji é bonito?", isCorrect: false }] },
        { question: "4. Qual forma verbal deve anteceder o '~koto ga aru' para indicar experiência passada?", options: [{ label: "Verbo na Forma TA (passado informal)", isCorrect: true }, { label: "Verbo na Forma TE", isCorrect: false }, { label: "Verbo na Forma Masu", isCorrect: false }] },
        { question: "5. Como dizer 'Vou tentar falar em japonês com o atendente'?", options: [{ label: "Nihon-go de hanashite mimasu", isCorrect: true }, { label: "Nihon-go de hanashita koto ga arimasu", isCorrect: false }, { label: "Nihon-go o hanasete kudasai", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "こども に へや を そうじ させました",
            translation: "Fiz a criança limpar o quarto.",
            chunks: ["こども", "に", "へや", "を", "そうじ", "させました"]
        },
        {
            sentenceJp: "ぶちょう に しりょう を みさせて いただきました",
            translation: "Permitiram-me ver os documentos do chefe de departamento.",
            chunks: ["ぶちょう", "に", "しりょう", "を", "みさせて", "いただきました"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você e seus amigos estão em um restaurante tradicional em Tóquio.", npcName: "Yuto", npcMessage: "[Seu Nome]-san, Natto (soja fermentada) tabeta koto aru? (Você já comeu Natto?)", options: [{ text: "Iie, mada tabeta koto ga nai desu! Kyou tabete mimasu! (Não, ainda não comi! Hoje vou experimentar comer!)", feedback: "Combinação perfeita de falta de experiência (koto nai) e tentativa (te miru)!", isCorrect: true }, { text: "Hai, Natto o taberu tsumori desu deshita.", feedback: "Construção confusa.", isCorrect: false }, { text: "Sayounara!", feedback: "Fora de hora.", isCorrect: false }] },
        { scenario: "Situação 2: Você provou o Natto pela primeira vez.", npcName: "Yuto", npcMessage: "Dou? Oishii? (E aí? Gostoso?)", options: [{ text: "Nioi wa chotto tsuyoi kedo, tabete mitara oishii desu! (O cheiro é meio forte, mas quando tentei comer é gostoso!)", feedback: "Relato de experiência genuíno e empolgante!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Incorreto.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: Yuto fica impressionado com sua coragem culinária.", npcName: "Yuto", npcMessage: "Sugoi! Natto ga taberaretara, mou Nihonjin da ne! (Incrível! Se consegue comer Natto, já é um japonês!)", options: [{ text: "Haha! Kondo wa Shinkansen ni notte miru yotei desu! (Haha! Da próxima vez pretendo experimentar andar de trem-bala!)", feedback: "Excelente encerramento de nível B1!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Sem nexo.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual a diferença de uso entre '~te miru' e '~koto ga aru'?", options: ["~te miru indica a tentativa/teste de fazer algo; ~koto ga aru indica a vivência/experiência passada acumulada", "Ambos são usados apenas para viagens", "Não há diferença"], correctIndex: 0 }]
};

const MODULO_B1_13 = {
    id: "b1_mod_13",
    title: "Favores em Ação I: ~te ageru e ~te kureru",
    section: 4,
    sectionTitle: "Transações de Favores & Relações Humanas",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Tomodachi ni eigo o oshiete ageta. Tanaka-san ga tetsudatte kureta.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "No Japão, fazer e receber favores possui uma gramática própria de empatia e gratidão! Aprenda a usar ~te ageru ('Fiz um favor para alguém') e ~te kureru ('Alguém fez um favor por mim')."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～てあげる", romaji: "~te ageru", translation: "Fazer um favor para alguém", timeContext: "Prestar uma ajuda a um amigo ou igual." },
        { type: "vocab", kanji: "～てくれる", romaji: "~te kureru", translation: "Fazer um favor para mim/meu grupo", timeContext: "Expressar gratidão por uma ajuda recebida." },
        { type: "grammar_pill", title: "A Teia dos Favores I", rule: "1) Eu/Alguém ➔ Pessoa に + Verbo TE + ageru (Fiz por ela). 2) Alguém ➔ Eu に + Verbo TE + kureru (Fez por mim com carinho).", formula: "[Receptor] に + [Verbo TE] + あげる / くれる", example: "Watashi wa Tanaka-san ni hon o kashte ageta (Emprestei um livro para o Tanaka) | Tanaka-san ga shashin o totte kureta (O Tanaka tirou uma foto para mim)." }
    ],
    stage3_practice: [
        { question: "1. Como dizer com gratidão 'O amigo me ajudou nas mudoes/mudança'?", options: [{ label: "Tomodachi ga引 (hiko) shikoshi o tetsudatte kureta", isCorrect: true }, { label: "Tomodachi ni tetsudatte ageta", isCorrect: false }, { label: "Tomodachi ga tetsudau tsumori desu", isCorrect: false }] },
        { question: "2. Como dizer 'Ensinei inglês para o meu colega'?", options: [{ label: "Doukyousei ni Eigo o oshiete ageta", isCorrect: true }, { label: "Doukyousei ni Eigo o oshiete kureta", isCorrect: false }, { label: "Doukyousei ni Eigo o oshieta koto ga aru", isCorrect: false }] },
        { question: "3. Traduza: 'Yamada-san ga o-cha o motte kite kuremashita'", options: [{ label: "O Sr. Yamada trouxe um chá para mim gentilmente", isCorrect: true }, { label: "Eu levei um chá para o Sr. Yamada", isCorrect: false }, { label: "O Sr. Yamada não bebe chá", isCorrect: false }] },
        { question: "4. Por que deve-se ter cuidado ao usar '~te ageru' diretamente com superiores?", options: [{ label: "Porque pode soar presunçoso/condescendente ('fiz este favorzinho pra você')", isCorrect: true }, { label: "Porque significa pedir dinheiro", isCorrect: false }, { label: "Não há problema algum", isCorrect: false }] },
        { question: "5. Como dizer 'Ela tirou uma foto bonita para nós'?", options: [{ label: "Kanojo ga kirei na shashin o totte kuremashita", isCorrect: true }, { label: "Kanojo ni shashin o torimashita", isCorrect: false }, { label: "Kanojo wa shashin o toritai desu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "ニュース によると あした は おおあめ だ そうです",
            translation: "De acordo com o noticiário, parece que amanhã choverá forte.",
            chunks: ["ニュース", "によると", "あした", "は", "おおあめ", "だ", "そうです"]
        },
        {
            sentenceJp: "たなかさん は 来週 ひっこし する らしい です",
            translation: "Parece que o Sr. Tanaka vai se mudar semana que vem.",
            chunks: ["たなかさん", "は", "来週", "ひっこし", "する", "らしい", "です"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você conta sobre como conseguiu resolver o problema no seu computador.", npcName: "Hana", npcMessage: "[Seu Nome]-san, PC no koshou, naotta? (Consertou o problema do PC?)", options: [{ text: "Un! Kaito-kun ga naoshite kureta n da! Hontou ni tasukatta! (Sim! O Kaito consertou para mim! Ajudou demais!)", feedback: "Gratidão perfeita usando te kureru!", isCorrect: true }, { text: "Kaito-kun ni naoshite ageta.", feedback: "Você disse que você consertou o PC do Kaito.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida sem nexo.", isCorrect: false }] },
        { scenario: "Situação 2: Hana pergunta se você fez algo em retribuição.", npcName: "Hana", npcMessage: "Kaito-kun, yasashii ne! Nani ka o-rei shita? (O Kaito é muito gentil! Fez algum agradecimento?)", options: [{ text: "Un! O-rei ni hirugohan o ogotte ageta yo! (Sim! Em agradecimento paguei o almoço para ele!)", feedback: "Uso correto de te ageru ao prestar o favor de retribuição!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 3: Hana elogia a boa amizade de vocês.", npcName: "Hana", npcMessage: "Ii tomodachi da ne! (Que boa amizade!)", options: [{ text: "Hontou ni ne! Mutsu-shiai no kankei da yo! (Verdade! É uma relação de ajuda mútua!)", feedback: "Expressão fluida e rica de nível B1!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Sem nexo.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual a diferença de direção entre '~te ageru' e '~te kureru'?", options: ["~te ageru é o favor prestado de você para os outros; ~te kureru é o favor prestado dos outros para você", "São idênticos", "~te kureru é usado apenas para comida"], correctIndex: 0 }]
};

const MODULO_B1_14 = {
    id: "b1_mod_14",
    title: "Favores em Ação II: ~te morau (Conseguir um favor de alguém)",
    section: 4,
    sectionTitle: "Transações de Favores & Relações Humanas",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Tanaka-san ni Nihon-go o oshiete moraimashita.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Complete o estudo dos favores com ~te morau ('Consegui/Recebi a ação de alguém'). Esta estrutura coloca você no papel de beneficiário ativo de uma ajuda preciosa."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～てもらう", romaji: "~te morau", translation: "Conseguir que alguém faça... / Receber o favor de...", timeContext: "Expressar gratidão por ter solicitado ou recebido uma ajuda." },
        { type: "vocab", kanji: "～ていただく", romaji: "~te itadaku", translation: "Receber o favor de... (Polido/Formal)", timeContext: "Usado com professores, chefes e clientes." },
        { type: "grammar_pill", title: "A Teia dos Favores II: Te Morau", rule: "Eu (Watashi) は + Pessoa に + Verbo TE + morau (Consegui que aquela pessoa fizesse a ação por mim).", formula: "[Eu] は + [Agente] に + [Verbo TE] + もらう (morau)", example: "Watashi wa Suzuki-san ni shashin o totte moraimashita (Consegui que o Suzuki tirasse a foto para mim)." }
    ],
    stage3_practice: [
        { question: "1. Traduza: 'Sensei ni Kanji o oshiete moraimashita'", options: [{ label: "Consegui que o professor me ensinasse Kanji", isCorrect: true }, { label: "Eu ensinei Kanji para o professor", isCorrect: false }, { label: "O professor não sabe Kanji", isCorrect: false }] },
        { question: "2. Como dizer 'Consegui que meu amigo me levasse até a estação de carro'?", options: [{ label: "Tomodachi ni eki mede kurumade送 (oku) tte moraimashita", isCorrect: true }, { label: "Tomodachi ni eki mede okurimashita", isCorrect: false }, { label: "Tomodachi ga eki ni ikitai desu", isCorrect: false }] },
        { question: "3. Qual a versão polida/formal de '~te morau' para usar com seu chefe?", options: [{ label: "~te itadaku", isCorrect: true }, { label: "~te ageru", isCorrect: false }, { label: "~te kuso", isCorrect: false }] },
        { question: "4. Qual partícula indica a pessoa de quem você recebeu o favor na estrutura ~te morau?", options: [{ label: "に (ni)", isCorrect: true }, { label: "を (o)", isCorrect: false }, { label: "で (de)", isCorrect: false }] },
        { question: "5. Como pedir educadamente a um estranho 'Posso conseguir que você tire uma foto para nós?'", options: [{ label: "Shashin o totte moraemasu ka?", isCorrect: true }, { label: "Shashin o torimasu ka?", isCorrect: false }, { label: "Shashin o toru tsumori desu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "べんきょう すれば する ほど にほんご が じょうず に なります",
            translation: "Quanto mais estudo, melhor fico em japonês.",
            chunks: ["べんきょう", "すれば", "する", "ほど", "にほんご", "が", "じょうず", "に", "なります"]
        },
        {
            sentenceJp: "やすければ やすい ほど いい です",
            translation: "Quanto mais barato for, melhor.",
            chunks: ["やすければ", "やすい", "ほど", "いい", "です"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você explica como aprendeu a cozinhar pratos japoneses.", npcName: "Emi", npcMessage: "[Seu Nome]-san, Nihon-ryouri ga jouzu desu ne! Doko de naratta no? (Você manda bem na culinária japonesa! Onde aprendeu?)", options: [{ text: "Oya-san (landlord) ni tsukurikata o oshiete moratta n desu! (Consegui que a dona da casa me ensinasse a receita!)", feedback: "Uso perfeito da estrutura te moratta!", isCorrect: true }, { text: "Oya-san ni oshiete agemashita.", feedback: "Você disse que ensinou a dona da casa.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida desconexa.", isCorrect: false }] },
        { scenario: "Situação 2: Emi acha a dona da casa muito atenciosa.", npcName: "Emi", npcMessage: "Oya-san, mecha yasashii ne! (A dona da casa é boa demais, né!)", options: [{ text: "Un! Saikin mo shoukyaku no shouri o手 (te) datsute moraimashita! (Sim! Recentemente consegui que me ajudasse com os papéis!)", feedback: "Excelente relato de favores continuados!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Incorreto.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem nexo.", isCorrect: false }] },
        { scenario: "Situação 3: Emi sugere você fazer um jantar de retribuição.", npcName: "Emi", npcMessage: "Kondo, Kankoku-ryouri de o-rei shinarai to ne! (Na próxima precisa retribuir com comida coreana/brasileira, né!)", options: [{ text: "Sou da ne! Tsurukte ageru tsumori da yo! (É verdade! Pretendo cozinhar para ela!)", feedback: "Combinação espetacular de favor ageru e intenção tsumori!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Em '~te morau', quem é o sujeito principal da frase?", options: ["A pessoa que recebe o benefício do favor (você)", "A pessoa que realizou o trabalho sem seu pedido", "O objeto inanimado"], correctIndex: 0 }]
};

const MODULO_B1_15 = {
    id: "b1_mod_15",
    title: "Voz Causativa (Saseru): Fazer Fazer ou Permitir Fazer",
    section: 4,
    sectionTitle: "Transações de Favores & Relações Humanas",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Kodomo ni benkyou saseimasu. Kono shigoto o saseteku kudasai.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Aprenda a Voz Causativa (Saseru) para expressar tanto 'Fazer alguém realizar uma ação' quanto o pedido de permissão hiper-educado 'Por favor, permita-me fazer isso' (~saseteku kudasai)."
    },
    stage2_drops: [
        { type: "vocab", kanji: "しせる (させる)", romaji: "Saseru", translation: "Voz Causativa (Fazer/Permitir fazer)", timeContext: "Instruir, obrigar ou conceder permissão." },
        { type: "vocab", kanji: "～させてください", romaji: "~sasete kudasai", translation: "Por favor, permita-me fazer...", timeContext: "Expressão essencial de etiqueta corporativa." },
        { type: "grammar_pill", title: "Conjugação Causativa (Saseru)", rule: "Grupo 1: troca vogal -u por -aseru (Iku ➔ Ikaseru). Grupo 2: troca -ru por -saseru (Taberu ➔ Tabesaseru). Grupo 3: Suru ➔ Saseru / Kuru ➔ Koraseru.", formula: "[Pessoa] に + [Verbo Causativo]", example: "Kodomo ni yasai o tabesasemasu (Faço a criança comer vegetais) | Watashi ni harawaseteku kudasai (Por favor, permita-me pagar/deixe que eu pague)." }
    ],
    stage3_practice: [
        { question: "1. Qual a forma causativa do verbo 'Ikaseru / Iku' (Ir)?", options: [{ label: "Ikaseru (Fazer/deixar ir)", isCorrect: true }, { label: "Ikareru", isCorrect: false }, { label: "Ikitai", isCorrect: false }] },
        { question: "2. Como solicitar educadamente no trabalho 'Por favor, permita-me explicar'?", options: [{ label: "Setsumei sasete kudasai", isCorrect: true }, { label: "Setsumei shite kudasai", isCorrect: false }, { label: "Setsumei shinaide kudasai", isCorrect: false }] },
        { question: "3. Traduza: 'Okaasan wa kodomo ni heya o souji sasemashita'", options: [{ label: "A mãe fez o filho limpar o quarto", isCorrect: true }, { label: "O filho fez a mãe limpar o quarto", isCorrect: false }, { label: "A mãe limpou o quarto sozinha", isCorrect: false }] },
        { question: "4. Qual a forma causativa do verbo 'Suru' (Fazer)?", options: [{ label: "Saseru", isCorrect: true }, { label: "Sareru", isCorrect: false }, { label: "Sasepu", isCorrect: false }] },
        { question: "5. Como pedir ao garçom no restaurante 'Por favor, deixe-me pagar esta conta'?", options: [{ label: "Watashi ni harawasete kudasai", isCorrect: true }, { label: "Harai taikunai desu", isCorrect: false }, { label: "Harau koto ni shimasu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "まるで ゆき の ように しろい です",
            translation: "É branco quase como neve.",
            chunks: ["まるで", "ゆき", "の", "ように", "しろい", "です"]
        },
        {
            sentenceJp: "かれ は プロ の ように へや を そうじ しました",
            translation: "Ele limpou o quarto como um profissional.",
            chunks: ["かれ", "は", "プロ", "の", "ように", "へや", "を", "そうじ", "しました"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Na empresa, você quer assumir a apresentação do novo projeto.", npcName: "Chefe Sato", npcMessage: "[Seu Nome]-san, atarashii meikaku no presentation, dare ga yaru? (Quem vai fazer a apresentação do novo projeto?)", options: [{ text: "Watashi ni yarasete kudasai! Zehi chousen shitai desu! (Por favor, permita-me fazer! Quero muito aceitar esse desafio!)", feedback: "Pedido corporativo impecável com a causativa sasete kudasai!", isCorrect: true }, { text: "Watashi wa yarimasen.", feedback: "Recusa rude.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O chefe Sato fica impressionado com a sua iniciativa.", npcName: "Chefe Sato", npcMessage: "Ii kiai da ne! Dewa, [Seu Nome]-san ni任 (maka) seru yo! (Que boa determinação! Então encarrego você!)", options: [{ text: "Arigatou gozaimasu! Expectation (kitai) ni kotaeru you ganbarimasu! (Muito obrigado! Vou me esforçar para corresponder às expectativas!)", feedback: "Resposta de alta etiqueta corporativa!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Fora de foco.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: O chefe autoriza você a usar os recursos da equipe.", npcName: "Chefe Sato", npcMessage: "Team no menbaa mo tetsudawaseru kara ne. (Vou fazer os membros da equipe te ajudarem também.)", options: [{ text: "Tasukarimasu! Yoroshiku onegai shimasu! (Me ajuda muito! Conto com todos!)", feedback: "Fluência completa no diálogo causativo!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual o significado da expressão polida '~sasete kudasai'?", options: ["Por favor, permita-me / deixe-me fazer essa ação", "Por favor, faça você essa ação", "Não faça nada"], correctIndex: 0 }]
};

const MODULO_B1_16 = {
    id: "b1_mod_16",
    title: "Causativa-Passiva (Saserareru): Quando Forçam Você a Fazer",
    section: 4,
    sectionTitle: "Transações de Favores & Relações Humanas",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Kirai na yasai o tabesaseraremashita.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Chegamos a uma das estruturas mais avançadas do Nível B1: a Causativa-Passiva (~saserareru / ~sareu). Use-a para relatar quando você foi forçado ou constrangido a fazer algo contra a sua vontade inicial."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～させられる", romaji: "~saserareru / ~sareru", translation: "Ser forçado a fazer... / Ter que fazer por pressão", timeContext: "Expressar frustração ou obrigação contrariada." },
        { type: "vocab", kanji: "きょうせい (強制)", romaji: "Kyousei", translation: "Coerção / Obrigação", timeContext: "Situação impositiva." },
        { type: "grammar_pill", title: "Como Formar a Causativa-Passiva", rule: "Junta-se a voz causativa com a voz passiva. Verbos Grupo 1: -u ➔ -asareru (Matsu ➔ Matasareru = Fazer esperar ➔ Fui feito esperar). Grupo 2: -ru ➔ -saserareru (Taberu ➔ Tabesaserareru).", formula: "[Verbo na Forma Causativa-Passiva]", example: "Ichi-jikan mo matasaremashita (Fui feito esperar por 1 hora inteira!)" }
    ],
    stage3_practice: [
        { question: "1. O que expressa a frase indignada 'Ichi-jikan mo matasaremashita'?", options: [{ label: "Fui forçado a esperar por uma hora inteira!", isCorrect: true }, { label: "Esperei 5 minutos com prazer", isCorrect: false }, { label: "Não esperei nada", isCorrect: false }] },
        { question: "2. Como dizer 'Fui forçado a cantar no Karaokê pelo meu chefe'?", options: [{ label: "Buchou ni karaokê de utawasaremashita", isCorrect: true }, { label: "Buchou ni utaimashita", isCorrect: false }, { label: "Buchou to utaitai desu", isCorrect: false }] },
        { question: "3. Traduza: 'Kodomo no koro, niga-i kusuri o nomasaremashita'", options: [{ label: "Quando era criança, fui forçado a tomar remédio amargo", isCorrect: true }, { label: "Eu adorava tomar remédio amargo", isCorrect: false }, { label: "Nunca tomei remédios", isCorrect: false }] },
        { question: "4. Qual a forma causativa-passiva contraída do verbo 'Matsu' (Esperar)?", options: [{ label: "Matasareru", isCorrect: true }, { label: "Matsureru", isCorrect: false }, { label: "Matasaseru", isCorrect: false }] },
        { question: "5. Qual sentimento gramatical a estrutura Causativa-Passiva carrega?", options: [{ label: "Sensação de contrariedade, desconforto ou ser forçado a fazer algo", isCorrect: true }, { label: "Sentimento de imensa alegria e voluntariado", isCorrect: false }, { label: "Um convite amigável", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "えんぴつ の 代わりに ペン を つかいます",
            translation: "Em vez do lápis, uso a caneta.",
            chunks: ["えんぴつ", "の", "代わりに", "ペン", "を", "つかいます"]
        },
        {
            sentenceJp: "かいしゃ に いかずに うち で はたらきます",
            translation: "Sem ir para a empresa, trabalho em casa.",
            chunks: ["かいしゃ", "に", "いかずに", "うち", "で", "はたらきます"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você encontra seu colega de trabalho após o evento da empresa ontem.", npcName: "Taichi", npcMessage: "[Seu Nome]-san, kinou no nomikai (drinking party), tsukareta ne! (A festa da firma ontem foi cansativa, né!)", options: [{ text: "Hontou ni! Ikkon de takusan osake o nomasaremashita yo... (Verdade! Fui forçado a beber um monte no evento...)", feedback: "Uso perfeito da causativa-passiva nomasaremashita!", isCorrect: true }, { text: "Osake o oishiku nomimashita.", feedback: "Ignorou a fala de cansaço.", isCorrect: false }, { text: "Sayounara!", feedback: "Fora de contexto.", isCorrect: false }] },
        { scenario: "Situação 2: Taichi concorda que os senpais da empresa exageram.", npcName: "Taichi", npcMessage: "Senpai-tachi no muroi furi, taiken da yo ne. (As exigências dos senpais são pesadas mesmo.)", options: [{ text: "Nijuu-songu mo utawasareta n desu... (Me fizeram cantar umas 20 músicas...)", feedback: "Excelente relato com utawasareta!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Não peça desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: Taichi sugere descansarem no fim de semana.", npcName: "Taichi", npcMessage: "Konshuumatsu waゆっくり (yukkuri) yasumou! (Neste fim de semana vamos descansar bastante!)", options: [{ text: "Un! Sou shiyou! Zettai ni doko mo ikanai! (É! Vamos sim! Com certeza não vou a lugar nenhum!)", feedback: "Encerramento cômico e natural de nível B1!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que a forma 'Matasaremashita' significa?", options: ["Fui forçado a ficar esperando contra a minha vontade", "Esperei com muita alegria", "Fiz outra pessoa esperar"], correctIndex: 0 }]
};

const MODULO_B1_17 = {
    id: "b1_mod_17",
    title: "Linguagem de Respeito (Sonkeigo): Elevando o Interlocutor",
    section: 5,
    sectionTitle: "Sociedade, Trabalho & Introdução ao Keigo",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Shachou ga irasshaimashita. Nani o meshiagari masu ka?",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Entramos no universo do Keigo (Linguagem Polida Japonesa)! Domine o Sonkeigo (Linguagem de Respeito), usado para elevar e honrar as ações de clientes, chefes e visitantes."
    },
    stage2_drops: [
        { type: "vocab", kanji: "そんけいご (尊敬語)", romaji: "Sonkeigo", translation: "Linguagem de Respeito", timeContext: "Usado para enaltecer as ações de terceiros/clientes." },
        { type: "vocab", kanji: "いらっしゃる", romaji: "Irassharu", translation: "Ir / Vir / Estar (Sonkeigo de Iku/Kuru/Imasu)", timeContext: "Forma honorífica máxima." },
        { type: "vocab", kanji: "召し上がる", romaji: "Meshiagaru", translation: "Comer / Beber (Sonkeigo de Taberu/Nomu)", timeContext: "Oferecer refeição ao cliente." },
        { type: "grammar_pill", title: "Verbos Especiais de Sonkeigo", rule: "1) Iku/Kuru/Imasu ➔ Irassharu (いらっしゃる). 2) Taberu/Nomu ➔ Meshiagaru (召し上がる). 3) Iu ➔ Oshadaru (おっしゃる). 4) Miru ➔ Guran ni naru (ご覧になる).", formula: "お + [Verbo sem masu] + になる (o... ni naru)", example: "Shachou wa mou okaeri ni narimashita (O presidente da empresa já retornou para casa)." }
    ],
    stage3_practice: [
        { question: "1. Qual o verbo em Sonkeigo para perguntar a um cliente 'O que o senhor vai comer/beber?'", options: [{ label: "Nani o meshiagarisasu ka?", isCorrect: true }, { label: "Nani o tabemasu ka?", isCorrect: false }, { label: "Nani o taberu?", isCorrect: false }] },
        { question: "2. Como dizer com alto respeito 'O presidente da empresa veio'?", options: [{ label: "Shachou ga irasshaimashita", isCorrect: true }, { label: "Shachou ga kimashita", isCorrect: false }, { label: "Shachou ga kuru tsumori desu", isCorrect: false }] },
        { question: "3. Qual é o equivalente em Sonkeigo para o verbo 'Miru' (Ver/Olhar)?", options: [{ label: "Guran ni naru (ご覧になる)", isCorrect: true }, { label: "Mite kudasai", isCorrect: false }, { label: "Mitareru", isCorrect: false }] },
        { question: "4. Traduza a frase honorífica: 'Kachou ga oshatta dori desu'", options: [{ label: "É exatamente como o chefe de seção falou", isCorrect: true }, { label: "Eu falei para o chefe", isCorrect: false }, { label: "O chefe não falou nada", isCorrect: false }] },
        { question: "5. Qual a fórmula geral de Sonkeigo para verbos comuns?", options: [{ label: "お (o) + Verbo stem + になる (ni naru)", isCorrect: true }, { label: "Verbo + koto ni suru", isCorrect: false }, { label: "Verbo + te shimau", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "にほんご を はなせる ように まいにち れんしゅう しています",
            translation: "Pratico todos os dias para conseguir falar japonês.",
            chunks: ["にほんご", "を", "はなせる", "ように", "まいにち", "れんしゅう", "しています"]
        },
        {
            sentenceJp: "わすれない ように メモ を とります",
            translation: "Tomo nota para não esquecer.",
            chunks: ["わすれない", "ように", "メモ", "を", "とります"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você é atendente em um restaurante chique em Ginza e recebe um cliente VIP.", npcName: "Cliente VIP", npcMessage: "Sumimasen,おすすめ (osusume) wa nani desu ka? (Com licença, qual a recomendação?)", options: [{ text: "Kira no Wagyuu de gozaimasu. Koto o meshiagari masu ka? (É o nosso Wagyu especial. O senhor gostaria de apreciá-lo?)", feedback: "Polidez máxima de Sonkeigo impecável!", isCorrect: true }, { text: "Wagyuu o taberu?", feedback: "Muito informal e desrespeitoso.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: O cliente solicita o prato recomendado.", npcName: "Cliente VIP", npcMessage: "Dewa, sore o itadakou. (Bem, vou querer esse então.)", options: [{ text: "Shouchi shimashita! Shoushou o-machi kudasai masen. (Compreendido! Por favor aguarde um momento.)", feedback: "Etiqueta comercial perfeita!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: Você entrega o prato ao cliente VIP.", npcName: "Cliente VIP", npcMessage: "Oishisou da ne. (Parece muito gostoso.)", options: [{ text: "Douzo guran ni natteshite, yukkuri o-meshiagari kudasai. (Por favor aprecie com os olhos e tenha uma excelente refeição.)", feedback: "Atendimento padrão excelência japonesa!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida fora de hora.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual a finalidade principal da linguagem Sonkeigo (Linguagem de Respeito)?", options: ["Enaltecer e demonstrar respeito máximo pelas ações do cliente ou superior", "Rebaixar a própria imagem", "Falar com crianças"], correctIndex: 0 }]
};

const MODULO_B1_18 = {
    id: "b1_mod_18",
    title: "Linguagem de Humildade (Kenjougo): Rebaixando a Própria Posição",
    section: 5,
    sectionTitle: "Sociedade, Trabalho & Introdução ao Keigo",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Watashi ga mairimasu. Tanaka to moushimasu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Diferente do Sonkeigo, o Kenjougo (Linguagem de Humildade) é usado para falar das SUAS PRÓPRIAS AÇÕES diante de clientes e chefes, demonstrando modéstia e respeito elevado."
    },
    stage2_drops: [
        { type: "vocab", kanji: "けんじょうご (謙譲語)", romaji: "Kenjougo", translation: "Linguagem de Humildade", timeContext: "Usado para rebaixar as próprias ações perante terceiros." },
        { type: "vocab", kanji: "まいります (参ります)", romaji: "Mairimasu", translation: "Ir / Vir (Kenjougo de Iku/Kuru)", timeContext: "Dizer que você irá/virá ao local do cliente." },
        { type: "vocab", kanji: "もうします (申します)", romaji: "Moushimasu", translation: "Chamar-se / Dizer (Kenjougo de Iu)", timeContext: "Apresentar seu próprio nome profissionalmente." },
        { type: "grammar_pill", title: "Verbos Especiais de Kenjougo", rule: "1) Iku/Kuru ➔ Mairimasu (参ります). 2) Iu ➔ Moushimasu (申します). 3) Suru ➔ Itashimasu (いたします). 4) Taberu/Nomu/Morau ➔ Itadakimasu (いただきます).", formula: "お + [Verbo stem] + する (o... suru)", example: "Watashi ga o-mochi itashimasu (Permita-me carregar sua bagagem)." }
    ],
    stage3_practice: [
        { question: "1. Como se apresentar profissionalmente ao telefone dizendo 'Meu nome é Tanaka'?", options: [{ label: "Tanaka to moushimasu", isCorrect: true }, { label: "Tanaka to oshimasu", isCorrect: false }, { label: "Tanaka to iimashita", isCorrect: false }] },
        { question: "2. Como dizer com modéstia ao cliente 'Eu irei à sua empresa amanhã às 10h'?", options: [{ label: "Ashita juu-ji ni mairimasu", isCorrect: true }, { label: "Ashita juu-ji ni irasshaimasu", isCorrect: false }, { label: "Ashita juu-ji ni ikimasu desu", isCorrect: false }] },
        { question: "3. Qual o verbo de Kenjougo para a ação de 'Fazer' (Suru) em e-mails e negócios?", options: [{ label: "Itashimasu (いたします)", isCorrect: true }, { label: "Saseru", isCorrect: false }, { label: "Saserareru", isCorrect: false }] },
        { question: "4. Traduza: 'Kozutsumi o o-machi itashimasu'", options: [{ label: "Eu irei carregar/trazer a sua encomenda com humildade", isCorrect: true }, { label: "Carregue a minha bagagem", isCorrect: false }, { label: "Não tenho bagagem", isCorrect: false }] },
        { question: "5. Qual a diferença fundamental entre Sonkeigo e Kenjougo?", options: [{ label: "Sonkeigo eleva as ações do outro; Kenjougo rebaixa as próprias ações", isCorrect: true }, { label: "Sonkeigo é informal; Kenjougo é gíria", isCorrect: false }, { label: "Não há diferença", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "たなかさん は こない かもしれません",
            translation: "Talvez o Sr. Tanaka não venha.",
            chunks: ["たなかさん", "は", "こない", "かもしれん"]
        },
        {
            sentenceJp: "あした は あめ が ふる はず です",
            translation: "Amanhã certamente deve chover.",
            chunks: ["あした", "は", "あめ", "が", "ふる", "はず", "です"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você atende o telefone da empresa e um cliente importante liga querendo falar com a diretoria.", npcName: "ClienteCorporativo", npcMessage: "Koubayashi-shachou wa irasshaimasu ka? (O Presidente Kobayashi se encontra?)", options: [{ text: "Moushiwake arimasen. Shachou wa ima外出 (gaichuu) shiteおります (orimasu). Watashi wa [Seu Nome] to moushimasu. (Pedimos desculpas. O presidente está em reunião externa no momento. Chamo-me [Seu Nome].)", feedback: "Kenjougo corporativo profissional perfeito!", isCorrect: true }, { text: "Shachou wa iru yo!", feedback: "Muito informal.", isCorrect: false }, { text: "Sayounara!", feedback: "Não desligue o telefone.", isCorrect: false }] },
        { scenario: "Situação 2: O cliente pede para deixar um recado.", npcName: "ClienteCorporativo", npcMessage: "Dewa, dengon o onegai dekiru ka na? (Bem, posso deixar uma mensagem?)", options: [{ text: "Hai! Watashi ga meemo o o-tori itashimasu. Douzo. (Sim! Eu mesmo tomarei a nota do recado. Pode falar.)", feedback: "Uso impecável de itashimasu!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 3: O cliente agradece a atenção.", npcName: "ClienteCorporativo", npcMessage: "Tasukaru yo. Yoroshiku. (Ajuda muito. Conto com você.)", options: [{ text: "Shouchi itashimashita. Shachou ga modorimashita ra, sugu ni o-tsutae itashimasu. (Compreendido. Assim que o presidente retornar, repassarei imediatamente.)", feedback: "Atendimento corporativo de alto nível B1!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida inadequada.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Quando devemos utilizar a linguagem Kenjougo?", options: ["Ao descrever as nossas próprias ações diante de clientes, chefes ou superiores", "Para mandar nos colegas", "Para falar com animais"], correctIndex: 0 }]
};

const MODULO_B1_19 = {
    id: "b1_mod_19",
    title: "E-mails e Telefonemas Profissionais: Frases Clássicas de Negócios",
    section: 5,
    sectionTitle: "Sociedade, Trabalho & Introdução ao Keigo",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Osewa ni narikatteおります. Osaki ni shitsurei shimasu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Domine as expressões fundamentais do ambiente de trabalho japonês: cumprimentos telefônicos ('Osewa ni natte orimasu'), despedida do expediente ('Osaki ni shitsurei shimasu') e agradecimento pelo esforço."
    },
    stage2_drops: [
        { type: "vocab", kanji: "お世話になっております", romaji: "Osewa ni natte orimasu", translation: "Obrigado por sua contínua parceria", timeContext: "Abertura obrigatória de e-mails e chamadas de negócios." },
        { type: "vocab", kanji: "お先に失礼します", romaji: "Osaki ni shitsurei shimasu", translation: "Com licença por sair antes", timeContext: "Frase de despedida ao sair do escritório." },
        { type: "vocab", kanji: "お疲れ様です", romaji: "Otsukaresama desu", translation: "Bom trabalho! / Obrigado pelo esforço", timeContext: "Cumprimento diário entre colegas de trabalho." },
        { type: "grammar_pill", title: "Etiqueta Corporativa Japonesa", rule: "Nunca comece um e-mail de negócios com 'Konnichiwa'. Use sempre '[Nome da Empresa] no [Seu Nome] desu. Itsumo osewa ni natte orimasu.'", formula: "[Empresa] + の + [Nome] + です。いつもお世話になっております。", example: "ABC-shouji no Tanaka desu. Itsumo osewa ni natte orimasu." }
    ],
    stage3_practice: [
        { question: "1. Qual a frase clássica obrigatória de abertura para e-mails de negócios no Japão?", options: [{ label: "Itsumo osewa ni natte orimasu", isCorrect: true }, { label: "Konnichiwa, genki desu ka", isCorrect: false }, { label: "Sayounara, mata ashita", isCorrect: false }] },
        { question: "2. Como se despedir educadamente dos colegas de trabalho ao sair do escritório no fim do expediente?", options: [{ label: "Osaki ni shitsurei shimasu", isCorrect: true }, { label: "O-yasumi nasai", isCorrect: false }, { label: "Ja ne!", isCorrect: false }] },
        { question: "3. Qual a resposta dos colegas que ficam no escritório para quem está saindo?", options: [{ label: "Otsukaresama deshita!", isCorrect: true }, { label: "Arigatou gozaimasu", isCorrect: false }, { label: "Gomen nasai", isCorrect: false }] },
        { question: "4. Traduza: 'Kouno ken ni tsuite, shiryou o添付 (tenpu) itashimashita'", options: [{ label: "Anexei os documentos referentes a este assunto", isCorrect: true }, { label: "Não tenho documentos", isCorrect: false }, { label: "Apaguei o e-mail", isCorrect: false }] },
        { question: "5. Como encerrar um e-mail profissional solicitando a atenção do destinatário?", options: [{ label: "Yoroshiku o-negai itashimasu", isCorrect: true }, { label: "Sayounara", isCorrect: false }, { label: "Doko desu ka", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "かいぎ の つごう を おしえて いただけます か",
            translation: "Poderia me informar a sua disponibilidade para a reunião?",
            chunks: ["かいぎ", "の", "つごう", "を", "おしえて", "いただけます", "か"]
        },
        {
            sentenceJp: "おさき に しつれい します",
            translation: "Com licença por sair antes.",
            chunks: ["おさき", "に", "しつれい", "します"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você envia um e-mail corporativo para um parceiro comercial de outra empresa.", npcName: "ParceiroComercial", npcMessage: "E-meeru o拝見 (haiken) itashimashita. Shiryou no tenpu, arigatou gozaimasu. (Li o e-mail. Obrigado pelo anexo dos documentos.)", options: [{ text: "Gokakunin itadaki, arigatou gozaimasu. Nanika go-fumen na ten ga gozaimashidara, o-kanri kudasai. (Obrigado por confirmar. Caso haja qualquer dúvida, por favor entre em contato.)", feedback: "Redação corporativa excelente!", isCorrect: true }, { text: "E-meeru wa oishii desu.", feedback: "Sem nexo.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] },
        { scenario: "Situação 2: São 18h no escritório e você terminou todas as suas tarefas do dia.", npcName: "Chefe de Equipe", npcMessage: "[Seu Nome]-san, kyou no shigoto wa shuuriyou desu ka? (Terminou o trabalho de hoje?)", options: [{ text: "Hai! Kyou no tasuku wa subete kanryou itashimashita. Osaki ni shitsurei shimasu! (Sim! Concluí todas as tarefas de hoje. Com licença por sair na frente!)", feedback: "Etiqueta corporativa perfeita ao encerrar o expediente!", isCorrect: true }, { text: "Iie, nemui desu.", feedback: "Inadequado.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem motivo para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: Os colegas respondem ao seu comprimento de saída.", npcName: "Chefe de Equipe", npcMessage: "Otsukaresama deshita! Ki o tsukete kaette ne! (Bom trabalho! Vá com cuidado para casa!)", options: [{ text: "Otsukaresama desu! Otsukaresama deshita! (Bom trabalho a todos! Até amanhã!)", feedback: "Trabalho em equipe harmonioso de Nível B1!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Muito dramático para o dia a dia.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual a expressão usada ao ir embora do trabalho antes dos outros colegas?", options: ["Osaki ni shitsurei shimasu", "O-itadakimasu", "O-gozaimasu"], correctIndex: 0 }]
};

const MODULO_B1_20 = {
    id: "b1_mod_20",
    title: "Entrevistas de Emprego & Apresentação Corporativa (Jikopr)",
    section: 5,
    sectionTitle: "Sociedade, Trabalho & Introdução ao Keigo",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Jikopr o sasete itadakimasu. Shokumukeireki ni tsuite setsumei shimasu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Aprenda a estruturar o seu Jikopr (auto-apresentação profissional/Pitch) em japonês para entrevistas de emprego: destacar pontos fortes, expor experiências de trabalho e alinhar metas futuras."
    },
    stage2_drops: [
        { type: "vocab", kanji: "じこPR (自己PR)", romaji: "Jikopr", translation: "Auto-promoção profissional / Pitch", timeContext: "Apresentação dos seus pontos fortes em entrevistas." },
        { type: "vocab", kanji: "しょくむけいれき (職務経歴)", romaji: "Shokumukeireki", translation: "Histórico profissional / Experiência", timeContext: "Seu currículo e bagagem de trabalho." },
        { type: "vocab", kanji: "ちょうしょ (長所)", romaji: "Chousho", translation: "Pontos fortes / Qualidades", timeContext: "Seus diferenciais profissionais." },
        { type: "grammar_pill", title: "A Estrutura do Jikopr em Japonês", rule: "1) Apresentar ponto forte: Watashi no chousho wa [Ponto Forte] desu. 2) Experiência prévia: [Setor] de [X-nenkan] shigoto o shite mairimashita. 3) Contribuição: Kisha de [Objetivo] ni貢献 (kouken) itashitai desu.", formula: "Chousho ➔ Keireki ➔ Kouken", example: "Watashi no chousho wa mukiai-ryoku desu (Meu ponto forte é a capacidade de comunicação)." }
    ],
    stage3_practice: [
        { question: "1. O que significa o termo corporativo 'Jikopr' em uma entrevista no Japão?", options: [{ label: "Auto-apresentação destacando seus pontos fortes e qualificações", isCorrect: true }, { label: "Pedir aumento salarial", isCorrect: false }, { label: "Perguntar o horário de almoço", isCorrect: false }] },
        { question: "2. Como dizer 'Tenho 3 anos de experiência na área de TI'?", options: [{ label: "IT no bun'ya de san-nenkan no shokumukeireki ga gozaimasu", isCorrect: true }, { label: "IT no bun'ya ga suki desu", isCorrect: false }, { label: "IT wa ikimashita", isCorrect: false }] },
        { question: "3. Como dizer com modéstia e profissionalismo 'Meu ponto forte é a responsabilidade'?", options: [{ label: "Watashi no chousho wa sekinin-kan ga aru koto desu", isCorrect: true }, { label: "Watashi wa sekinin ga kirai desu", isCorrect: false }, { label: "Sekinin wa doko desu ka", isCorrect: false }] },
        { question: "4. Qual expressão polida usar para dizer 'Quero contribuir para a sua empresa'?", options: [{ label: "Kisha ni kouken itashitai to omotte orimasu", isCorrect: true }, { label: "Kisha de asobitai desu", isCorrect: false }, { label: "Kisha ni ikimashou", isCorrect: false }] },
        { question: "5. Qual o termo respeitoso usado para se referir à empresa do entrevistador durante a entrevista?", options: [{ label: "Kisha (貴社) / O-tasha", isCorrect: true }, { label: "Watashi no kaisha", isCorrect: false }, { label: "Gakkou", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "こんかい の けいかく は とても じゅうよう です",
            translation: "O plano desta vez é muito importante.",
            chunks: ["こんかい", "の", "けいかく", "は", "とても", "じゅうよう", "です"]
        },
        {
            sentenceJp: "みんな で 協力 して がんばりましょう",
            translation: "Vamos colaborar juntos e nos esforçar!",
            chunks: ["みんな", "で", "協力", "して", "がんばりましょう"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Em uma sala de entrevista de emprego em Marunouchi, o entrevistador pede sua auto-apresentação.", npcName: "Entrevistador RH", npcMessage: "Dewa, [Seu Nome]-san, jikopr o onegai itashimasu. (Bem, [Seu Nome]-san, sua auto-apresentação profissional, por favor.)", options: [{ text: "Hai! Watashi no chousho wa problem-solving-ryoku desu. Maeni ita kaisha de san-nenkan IT engineer to shite shokumu o mairimashita. Kisha demo kouken itashitai desu! (Sim! Meu ponto forte é a resolução de problemas. Na empresa anterior trabalhei 3 anos como engenheiro de TI. Quero contribuir nesta empresa!)", feedback: "Estrutura de Jikopr profissional brilhante de nível B1!", isCorrect: true }, { text: "Watashi wa ramen ga suki desu!", feedback: "Inadequado para entrevista de emprego.", isCorrect: false }, { text: "Sayounara!", feedback: "Não fuja da entrevista.", isCorrect: false }] },
        { scenario: "Situação 2: O entrevistador pergunta sobre como você lida com prazos difíceis.", npcName: "Entrevistador RH", npcMessage: "Tekikaku na setsumei desu ne. Hard na schedule no toki, dou shimasu ka? (Explicação precisa. E quando o cronograma é apertado, o que faz?)", options: [{ text: "Team-work o choushi shite, sukedjuuru o re-plan suru koto ni shite orimasu. (Priorizo o trabalho em equipe e tomo a decisão de replanejar o cronograma.)", feedback: "Resposta madura de perfil liderança!", isCorrect: true }, { text: "Iie, nemumasu.", feedback: "Inaceitável.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem motivo para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: O entrevistador encerra a entrevista positivamente.", npcName: "Entrevistador RH", npcMessage: "Subarashii desu ne! Kekka wa raishuu meeru itashimasu. (Excelente! Na próxima semana enviaremos o resultado por e-mail.)", options: [{ text: "Kyou wa o-jikan o itadaki, hontou ni arigatou gozaimashita. Yoroshiku o-negai itashimasu! (Muito obrigado por me conceder seu tempo hoje. Conto com sua consideração!)", feedback: "Encerramento de entrevista impecável!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Pouco profissional.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual a palavra honorífica usada para se referir à empresa do entrevistador durante uma entrevista?", options: ["Kisha (貴社)", "Watashi no kaisha", "Ano kaisha"], correctIndex: 0 }]
};

const MODULO_B1_21 = {
    id: "b1_mod_21",
    title: "Expressando Aparência e Sensações: ~sou desu e ~mitai desu",
    section: 6,
    sectionTitle: "Cultura, Nuances & Desafio B1",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Kono ryouri wa oishisou desu. Ame ga furu mitai desu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Aprenda a fazer julgamentos visuais e expressar sensações: 'Parece gostoso' (~sou desu) e comparações intuitivas ('Parece que vai chover / Parece um filme') com ~mitai desu."
    },
    stage2_drops: [
        { type: "vocab", kanji: "～そう (～そうです)", romaji: "~sou desu", translation: "Parece... (Aparência visual imediata)", timeContext: "Julgamento baseado na impressão visual." },
        { type: "vocab", kanji: "～みたい (～みたいです)", romaji: "~mitai desu", translation: "Parece... / Como se fosse...", timeContext: "Simile, semelhança ou evidência indireta." },
        { type: "grammar_pill", title: "Aparência Visual (~sou) vs Simile (~mitai)", rule: "1) Adjetivo sem sufixo + そう (Oishii ➔ Oishisou = Parece gostoso). 2) Substantivo/Frase + みたい (Kodomo mitai = Parece uma criança / Ame ga furu mitai = Parece que vai chover).", formula: "[Adj-i sem i / Adj-na] + そう | [Substantivo/Verbo Casual] + みたい", example: "Kono keeki wa oishisou desu (Este bolo parece delicioso) | Kare wa pro mitai desu (Ele parece um profissional)." }
    ],
    stage3_practice: [
        { question: "1. Como dizer ao olhar para uma sobremesa na vitrine 'Parece muito gostoso!'?", options: [{ label: "Totemo oishisou desu!", isCorrect: true }, { label: "Totemo oishii deshita", isCorrect: false }, { label: "Totemo oishiku nai desu", isCorrect: false }] },
        { question: "2. Como dizer 'Aquele teste parecia difícil'?", options: [{ label: "Ano test wa muzukashisou deshita", isCorrect: true }, { label: "Ano test wa muzukashii mitai desu", isCorrect: false }, { label: "Ano test wa muzukashii desu ka", isCorrect: false }] },
        { question: "3. Traduza: 'Kare wa actor (haizyuu) mitai desu'", options: [{ label: "Ele parece um ator", isCorrect: true }, { label: "Ele odeia atores", isCorrect: false }, { label: "Ele é um diretor de cinema", isCorrect: false }] },
        { question: "4. Qual a forma correta de ~sou desu para o adjetivo 'Ii' (Bom)?", options: [{ label: "Yosasou desu (Exceção: Parece bom)", isCorrect: true }, { label: "Iisou desu", isCorrect: false }, { label: "Iikatta desu", isCorrect: false }] },
        { question: "5. Como dizer olhar para o céu escuro 'Parece que vai chover'?", options: [{ label: "Ame ga furu mitai desu / Furisou desu", isCorrect: true }, { label: "Ame ga furimashita", isCorrect: false }, { label: "Ame ga kirai desu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "にほん の ぶんか について しらべて います",
            translation: "Estou pesquisando sobre a cultura japonesa.",
            chunks: ["にほん", "の", "ぶんか", "について", "しらべて", "います"]
        },
        {
            sentenceJp: "この もんだい に関して いけん を のべます",
            translation: "Expressarei minha opinião a respeito deste problema.",
            chunks: ["この", "もんだい", "に関して", "いけん", "を", "のべます"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você e seu amigo olham o cardápio ilustrado de um restaurante em Harajuku.", npcName: "Riku", npcMessage: "[Seu Nome]-san, kono parfait, dou? (E aí, o que acha desse parfait?)", options: [{ text: "Uwa-! Mecha oishisou! Kono ichigo, shinsensou da ne! (Uau! Parece bom demais! Essas morangos parecem super frescos, né!)", feedback: "Expressão visual espontânea perfeita com ~sou!", isCorrect: true }, { text: "Parfait wa tabemashita.", feedback: "Relato frio no passado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida fora de hora.", isCorrect: false }] },
        { scenario: "Situação 2: Riku olha a decoração incrível do café.", npcName: "Riku", npcMessage: "Kono mise no interior, eiga no set mitai ja nai? (A decoração desta loja não parece um cenário de filme?)", options: [{ text: "Hontou da! Theme park mitai de tanoshii ne! (É mesmo! Parece um parque temático, é muito divertido!)", feedback: "Uso fluido de mitai em comparações!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: Chega o parfait e vocês vão provar.", npcName: "Riku", npcMessage: "Jaa, tabeyou! (Então, bora comer!)", options: [{ text: "Itadakimasu! Yosasou na photo mo torou! (Bom apetite! Vamos tirar uma foto que pareça boa também!)", feedback: "Conversa empolgante e natural de nível B1!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Inadequado.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual a diferença entre a impressão visual de '~sou desu' e a comparação de '~mitai desu'?", options: ["~sou desu é a impressão imediata dos olhos ('parece...'); ~mitai desu é a comparação por semelhança ('como se fosse...')", "Não há diferença", "~sou desu é usado apenas para clima"], correctIndex: 0 }]
};

const MODULO_B1_22 = {
    id: "b1_mod_22",
    title: "Regras da Sociedade Japonesa: Etiqueta, Moradia e Onsen",
    section: 6,
    sectionTitle: "Cultura, Nuances & Desafio B1",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Onsen de wa karada o arawatte kara hairimasu. Gomi no bunbetsu ga taisetsu desu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Viva no Japão como um verdadeiro nativo! Aprenda o vocabulário e as regras essenciais da convivência social japonesa: separação de lixo (Gomi no bunbetsu), etiqueta de condomínio e regras do banho público/Onsen."
    },
    stage2_drops: [
        { type: "vocab", kanji: "ごみのぶんべつ (ゴミの分別)", romaji: "Gomi no bunbetsu", translation: "Separação de lixo", timeContext: "Regra ecológica estrita das cidades japonesas." },
        { type: "vocab", kanji: "おんせん (温泉)", romaji: "Onsen", translation: "Termas de águas termais naturais", timeContext: "Tradição de relaxamento com regras de higiene rígidas." },
        { type: "vocab", kanji: "マナー", romaji: "Manaa", translation: "Maneiras / Etiqueta social", timeContext: "Respeito ao espaço público." },
        { type: "grammar_pill", title: "Regras de Ouro da Convivência no Japão", rule: "1) No Onsen: Lave o corpo ANTES de entrar na água térmica (Karada o洗 (ara) tte kara hairu). Não coloque a toalha na água. 2) No condomínio: Não faça barulho após 22h.", formula: "[Verbo Forma TE] + から入る / マナーを守る", example: "Monomoraite gomi o bunbetsu shinakereba narimasen (Temos que separar o lixo por tipo)." }
    ],
    stage3_practice: [
        { question: "1. Qual é a regra fundamental de higiene ANTES de entrar na banheira do Onsen?", options: [{ label: "Lavar e enxaguar todo o corpo no chuveiro externo primeiro", isCorrect: true }, { label: "Entrar direto com sabonete", isCorrect: false }, { label: "Usar sapatos na banheira", isCorrect: false }] },
        { question: "2. Como se diz 'Separação de lixo reciclável/combustível' em japonês?", options: [{ label: "Gomi no bunbetsu", isCorrect: true }, { label: "Gomi no tabemono", isCorrect: false }, { label: "Gomi no kuruma", isCorrect: false }] },
        { question: "3. O que é estritamente proibido dentro da água da banheira do Onsen?", options: [{ label: "Colocar a toalha dentro da água ou usar sabão", isCorrect: true }, { label: "Fechar os olhos e relaxar", isCorrect: false }, { label: "Prender o cabelo", isCorrect: false }] },
        { question: "4. Traduza: 'Yoru osaku ni ookina oto o dashite wa ikemasen'", options: [{ label: "Não é permitido fazer barulho alto tarde da noite", isCorrect: true }, { label: "Pode fazer festas de madrugada", isCorrect: false }, { label: "O som da TV deve ser bem alto", isCorrect: false }] },
        { question: "5. Como dizer 'Temos que respeitar as boas maneiras da sociedade'?", options: [{ label: "Shakai no manaa o守 (mamo) ranakereba narimasen", isCorrect: true }, { label: "Manaa wa kirai desu", isCorrect: false }, { label: "Manaa o tabemasu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "どんな に むずかしくても あきらめません",
            translation: "Por mais difícil que seja, não desistirei.",
            chunks: ["どんな", "に", "むずかしくても", "あきらめません"]
        },
        {
            sentenceJp: "たとえ 雨 が ふっても いきます",
            translation: "Mesmo se chover, irei.",
            chunks: ["たとえ", "雨", "が", "ふっても", "いきます"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: É a sua primeira vez visitando um Onsen em Hakone com seu amigo japonês.", npcName: "Daichi", npcMessage: "[Seu Nome]-san, Onsen no manaa wa daijoubu? (Tudo certo com as regras do Onsen?)", options: [{ text: "Hai! Karada o kirei ni araatte kara hairu n da ne! Towel wa yubune ni tsukenaide! (Sim! A gente lava bem o corpo antes de entrar, né! E nada de colocar a toalha na banheira!)", feedback: "Conhecimento perfeito da etiqueta tradicional japonesa!", isCorrect: true }, { text: "Towel o yubune de wash shimasu.", feedback: "Regra quebrada! A toalha não entra na água.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida sem sentido.", isCorrect: false }] },
        { scenario: "Situação 2: Daichi fica feliz por você respeitar a cultura.", npcName: "Daichi", npcMessage: "Sashuga! Manaa ga chanto shiteru ne! Yukkuri tsukarou! (Como esperado! Suas maneiras são impecáveis! Vamos relaxar na água!)", options: [{ text: "Ahhh, kimochi ii~! Ototsuka re ga tobimasu ne! (Ahhh, que delícia~! O cansaço vai embora, né!)", feedback: "Sensação e imersão cultural completas!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Sem motivo para desculpas.", isCorrect: false }] },
        { scenario: "Situação 3: Após o banho, Daichi sugere tomar leite gelado (Gyuunyuu), a tradição clássica pós-Onsen.", npcName: "Daichi", npcMessage: "Onsen no ato wa, tsumetai gyuunyuu da ne! (Depois do Onsen, nada como leite gelado, né!)", options: [{ text: "Ii ne! Kanpai shiyou! (Boa! Vamos fazer um brinde!)", feedback: "Integração cultural excelente de nível B1!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Qual a regra correta sobre a toalha no Onsen japonês?", options: ["A toalha nunca deve encostar ou entrar na água da banheira principal", "Deve-se ensaboar a toalha dentro da banheira", "Não se pode levar toalha para o vestiário"], correctIndex: 0 }]
};

const MODULO_B1_23 = {
    id: "b1_mod_23",
    title: "Leitura de Notícias e Avisos: Anúncios, Trens e Terremotos",
    section: 6,
    sectionTitle: "Cultura, Nuances & Desafio B1",
    level: "B1",
    xpReward: 100,
    stage1_context: {
        audioGuide: "Jishin no aviso desu. Shinkansen wa chihei shite imasu.",
        missionTitle: "Objetivo de Hoje",
        missionDescription: "Desenvolva autonomia real para ler e compreender anúncios públicos no Japão: notificações de atraso de trens (Chien), alertas de terremoto (Jishin/Jishin Sokuhou) e promoções de lojas."
    },
    stage2_drops: [
        { type: "vocab", kanji: "じしん (地震)", romaji: "Jishin", translation: "Terremoto", timeContext: "Alerta de segurança pública primordial no Japão." },
        { type: "vocab", kanji: "ちえん (遅延)", romaji: "Chien", translation: "Atraso / Atraso de transporte", timeContext: "Informativo nas telas das estações de trem." },
        { type: "vocab", kanji: "おしらせ (お知らせ)", romaji: "Oshirase", translation: "Aviso / Anúncio importante", timeContext: "Mural de notificações públicas." },
        { type: "grammar_pill", title: "Compreendendo Avisos Formais na Fala e Escrita", rule: "Avisos públicos usam a forma passiva ou honorífica formal. Em caso de emergência: '落ち着いて (Ochitsuite) kudasai' = Mantenha a calma.", formula: "[Substantivo de Incidente] + のため + [Consequência]", example: "Jishin no tame, densha wa運転 (unten)見合わせ (miawase) desu (Devido ao terremoto, os trens estão suspensos)." }
    ],
    stage3_practice: [
        { question: "1. O que significa a palavra 'Chien (遅延)' no painel informativo da estação de trem?", options: [{ label: "Linha com atraso no horário", isCorrect: true }, { label: "Trem cancelado para sempre", isCorrect: false }, { label: "Passagem gratuita", isCorrect: false }] },
        { question: "2. O que fazer ao ouvir o alarme do celular emitindo o som 'Jishin desu! Jishin desu!'?", options: [{ label: "Proteger a cabeça, manter a calma e afastar-se de janelas de vidro", isCorrect: true }, { label: "Correr para o elevador", isCorrect: false }, { label: "Começar a gritar", isCorrect: false }] },
        { question: "3. Traduza o anúncio do alto-falante: 'Mona-nukusama, ochitsuite行動 (koudou) shite kudasai'", options: [{ label: "Todos os passageiros, por favor agem com calma", isCorrect: true }, { label: "Todos os passageiros, saiam correndo", isCorrect: false }, { label: "O trem já vai partir", isCorrect: false }] },
        { question: "4. O que significa a placa comercial 'Teikyou-chuu / Eigyou-chuu (営業中)' na porta do restaurante?", options: [{ label: "Aberto / Em funcionamento", isCorrect: true }, { label: "Fechado por luto", isCorrect: false }, { label: "Vende-se o prédio", isCorrect: false }] },
        { question: "5. Traduza a notificação: 'Tafuu no tame, henkou ga arimasu'", options: [{ label: "Devido ao tufão, haverá alterações", isCorrect: true }, { label: "O dia está ensolarado", isCorrect: false }, { label: "Temos descontos de tufão", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "えいご だけでなく にほんご も はなせます",
            translation: "Não apenas inglês, como também consigo falar japonês.",
            chunks: ["えいご", "だけでなく", "にほんご", "も", "はなせます"]
        },
        {
            sentenceJp: "かれ は しんせつ な うえに あたま が いい です",
            translation: "Além de ser gentil, ele é inteligente.",
            chunks: ["かれ", "は", "しんせつ", "な", "うえに", "あたま", "が", "いい", "です"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Você está na estação de Shibuya e o painel eletrônico exibe um alerta de atraso.", npcName: "Passageiro ao Lado", npcMessage: "Sumimasen, kono denka, nani ga adte ikanaidesu ka? (Com licença, o que aconteceu com esta linha?)", options: [{ text: "Oshirase ni yoru to, taifuu no tame chien shite iru mitai desu. (Segundo o aviso, parece que está atrasado por causa do tufão.)", feedback: "Compreensão de aviso e reporte com mitai perfeitos!", isCorrect: true }, { text: "Densha wa oishii desu.", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Fora de contexto.", isCorrect: false }] },
        { scenario: "Situação 2: O passageiro pergunta se há previsão de retorno.", npcName: "Passageiro ao Lado", npcMessage: "Kouka wa itzu re-open suru ka wakarimasu ka? (Sabe quando vai reabrir a circulação?)", options: [{ text: "San-juu-fun-go ni re-operation (unten saikai) suru to kaite arimasu yo! (Está escrito que a circulação retorna em 30 minutos!)", feedback: "Leitura de painel informativo impecável!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: O passageiro agradece a informação valiosa.", npcName: "Passageiro ao Lado", npcMessage: "Tasukarimashidai! Arigatou gozaimasu! (Me ajudou muito! Muito obrigado!)", options: [{ text: "Iie! Kaze ga tsuyoi node, o-ki o tsukete kudasai ne! (Imagina! Como o vento está forte, tome cuidado!)", feedback: "Empatia e fluência em ambiente social de Nível B1!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Inadequado.", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "O que significa a palavra 'Jishin (地震)' em anúncios públicos no Japão?", options: ["Terremoto / Abalo sísmico", "Tufão de neve", "Atraso no ônibus"], correctIndex: 0 }]
};

const MODULO_B1_24 = {
    id: "b1_mod_24",
    title: "Desafio de Simulação B1: Autonomia & Resolução de Problemas no Japão",
    section: 6,
    sectionTitle: "Cultura, Nuances & Desafio B1",
    level: "B1",
    xpReward: 200,
    stage1_context: {
        audioGuide: "Omedetou gozaimasu! B1 Coosu Kanryou desu!",
        missionTitle: "Desafio Final B1: Simulação Completa de Fluência Intermediária",
        missionDescription: "Parabéns! Chegamos ao teste supremo do Nível B1! Você colocará à prova toda a sua bagagem: fala casual, justificativas com node, a teia dos favores (ageru/kureru/morau), Keigo corporativo e resolução de imprevistos."
    },
    stage2_drops: [
        { type: "vocab", kanji: "じりつ (自立)", romaji: "Jiritsu", translation: "Autonomia / Independência", timeContext: "Capacidade de se virar sozinho no idioma." },
        { type: "vocab", kanji: "かんりょう", romaji: "Kanryou", translation: "Conclusão / Concluído", timeContext: "Marco de encerramento do curso B1." },
        { type: "vocab", kanji: "おめでとう ございます", romaji: "Omedetou gozaimasu", translation: "Parabéns!", timeContext: "Celebração de conquista máxima." },
        { type: "grammar_pill", title: "Seu Passaporte para a Fluência B1", rule: "Com a conclusão do Nível B1, você conquistou independência total para trabalhar, viajar, fazer amigos nativos e resolver problemas no Japão!", formula: "[Esforço B1] + [Keigo + Forma Casual] = Nível Intermediário Conquistado!", example: "Nihon-go de jiritsu shite seikatsu dekiru you ni narimashita! (Passei a conseguir viver com autonomia em japonês!)" }
    ],
    stage3_practice: [
        { question: "1. Como pedir desculpas ao seu chefe por um atraso usando a forma polida 'node'?", options: [{ label: "Densha ga okureta node,遅 (oku) remashita. Moushiwake arimasen.", isCorrect: true }, { label: "Densha ga okureta kara desu", isCorrect: false }, { label: "Densha ga oishii desu", isCorrect: false }] },
        { question: "2. Como relatar com gratidão 'Consegui que meu colega corrigisse meu e-mail em japonês'?", options: [{ label: "Doukyousei ni meeru o shousei shite moraimashita", isCorrect: true }, { label: "Doukyousei ni meeru o shousei shite ageta", isCorrect: false }, { label: "Doukyousei ga meeru o shousei shite kureta", isCorrect: false }] },
        { question: "3. Qual a frase correta de apresentação em Keigo de humildade para uma entrevista?", options: [{ label: "[Seu Nome] to moushimasu. Kisha ni kouken itashitai desu.", isCorrect: true }, { label: "[Seu Nome] desu. Taberu?", isCorrect: false }, { label: "[Seu Nome] to oshiarimashidai", isCorrect: false }] },
        { question: "4. Como expressar a incerteza 'Pode ser que o evento seja cancelado devido ao tufão'?", options: [{ label: "Taifuu no tame, event ga中止 (chuushi) ni naru kamo shiremasen", isCorrect: true }, { label: "Event wa chuushi deshita", isCorrect: false }, { label: "Event o tabemashita", isCorrect: false }] },
        { question: "5. Qual frase indica o auge do hábito conquistado 'Passei a conseguir conversar em japonês'?", options: [{ label: "Nihon-go de kaiwa dekiru you ni narimashita", isCorrect: true }, { label: "Nihon-go ga kirai desu", isCorrect: false }, { label: "Nihon-go o nomimashou", isCorrect: false }] },
        { question: "6. Qual a versão casual para 'Kinou nani o shite imashita ka?'", options: [{ label: "Kinou nani shiteru no?", isCorrect: true }, { label: "Kinou nani desu ka", isCorrect: false }, { label: "Kinou nani o tabemashita", isCorrect: false }] },
        { question: "7. Como contrair a obrigação 'Ikanakereba narimasen' na fala rápida?", options: [{ label: "Ikanakya!", isCorrect: true }, { label: "Ikanai!", isCorrect: false }, { label: "Ikimashou!", isCorrect: false }] },
        { question: "8. Como expressar citação indireta 'Tanaka disse que amanhã não vai trabalhar'?", options: [{ label: "Tanaka-san wa ashita hatarakanai to iimashita", isCorrect: true }, { label: "Tanaka-san wa ashita hatarakimasen deshita", isCorrect: false }, { label: "Tanaka-san wa ashita hatarakite kudasai", isCorrect: false }] },
        { question: "9. Como dizer 'Não sei se o teste é amanhã ou não'?", options: [{ label: "Test wa ashita ka dou ka wakaranai", isCorrect: true }, { label: "Test wa ashita to omoimasu", isCorrect: false }, { label: "Test wa ashita desu ka", isCorrect: false }] },
        { question: "10. Como lamentar 'Puxa, acabei esquecendo a chave de casa!' em tom informal?", options: [{ label: "Ie no kagi o wasurechaita!", isCorrect: true }, { label: "Ie no kagi o wasuremasen", isCorrect: false }, { label: "Ie no kagi o wasureru tsumori desu", isCorrect: false }] },
        { question: "11. Como relatar na voz passiva positiva 'Fui elogiado pelo professor'?", options: [{ label: "Sensei ni homeraremashita", isCorrect: true }, { label: "Sensei o homemashita", isCorrect: false }, { label: "Sensei ni homeru tsumori desu", isCorrect: false }] },
        { question: "12. Traduza a Passiva de Incômodo: 'Ame ni furarete, nurete shimaimashita'", options: [{ label: "Fui pego pela chuva de surpresa e me molhei", isCorrect: true }, { label: "Adoro tomar banho de chuva", isCorrect: false }, { label: "Não choveu hoje", isCorrect: false }] },
        { question: "13. Como dizer na condicional Tara 'Se eu tiver tempo, irei'?", options: [{ label: "Jikan ga attara, ikimasu", isCorrect: true }, { label: "Jikan ga aru to, ikimasu", isCorrect: false }, { label: "Jikan ga arimasen kara", isCorrect: false }] },
        { question: "14. Como usar a condicional automática To para orientar direções?", options: [{ label: "Migi ni magaru to, eki ga arimasu", isCorrect: true }, { label: "Migi ni magattara, eki deshita", isCorrect: false }, { label: "Migi ni magaru kara desu", isCorrect: false }] },
        { question: "15. Como retomar o assunto do interlocutor usando a condicional Nara ('Se o assunto for PC...')?", options: [{ label: "PC nara, Akihabara ga ii desu yo", isCorrect: true }, { label: "PC ba, Akihabara ga ii desu yo", isCorrect: false }, { label: "PC to, Akihabara ga ii desu yo", isCorrect: false }] },
        { question: "16. Como expressar a tomada de decisão consciente 'Decidi praticar esportes'?", options: [{ label: "Supootsu o suru koto ni shimashita", isCorrect: true }, { label: "Supootsu o suru you ni narimashita", isCorrect: false }, { label: "Supootsu o shite kudasai", isCorrect: false }] },
        { question: "17. Como dizer 'Vou tentar experimentar comer Natto'?", options: [{ label: "Natto o tabete mimasu", isCorrect: true }, { label: "Natto o tabeta koto ga arimasu", isCorrect: false }, { label: "Natto o taberu tsumori desu", isCorrect: false }] },
        { question: "18. Traduza: 'Okinawa ni itta koto ga arimasu'", options: [{ label: "Já tive a experiência de ir a Okinawa", isCorrect: true }, { label: "Pretendo ir a Okinawa amanhã", isCorrect: false }, { label: "Nunca fui a Okinawa", isCorrect: false }] },
        { question: "19. Como dizer 'Ensinei inglês para o meu amigo de presente/favor'?", options: [{ label: "Tomodachi ni Eigo o oshiete ageta", isCorrect: true }, { label: "Tomodachi ni Eigo o oshiete kureta", isCorrect: false }, { label: "Tomodachi ni Eigo o oshieta koto ga aru", isCorrect: false }] },
        { question: "20. Como agradecer a um colega 'Ele consertou meu computador para mim'?", options: [{ label: "Kare ga PC o naoshite kuremashita", isCorrect: true }, { label: "Kare ni PC o naoshite ageta", isCorrect: false }, { label: "Kare wa PC o naoshimasu ka", isCorrect: false }] },
        { question: "21. Como solicitar polidamente no trabalho 'Por favor, permita-me fazer a apresentação'?", options: [{ label: "Presentation o yarasete kudasai", isCorrect: true }, { label: "Presentation o yarimasen", isCorrect: false }, { label: "Presentation o shite kudasai", isCorrect: false }] },
        { question: "22. O que expressa a Causativa-Passiva na frase 'Ichi-jikan mo matasaremashita'?", options: [{ label: "Foi forçado a esperar por 1 hora inteira contra a vontade", isCorrect: true }, { label: "Esperei 1 hora com muita alegria", isCorrect: false }, { label: "Não esperei nada", isCorrect: false }] },
        { question: "23. Qual o verbo honorífico de Sonkeigo para perguntar a um cliente 'O que vai comer/beber?'?", options: [{ label: "Nani o meshiagarisasu ka?", isCorrect: true }, { label: "Nani o taberu?", isCorrect: false }, { label: "Nani o tabemasu ka?", isCorrect: false }] },
        { question: "24. Como se apresentar ao telefone profissional com Kenjougo (Linguagem de Humildade)?", options: [{ label: "ABC-shouji no [Seu Nome] to moushimasu", isCorrect: true }, { label: "ABC-shouji no [Seu Nome] to oshiarimashidai", isCorrect: false }, { label: "ABC-shouji no [Seu Nome] desu yo", isCorrect: false }] },
        { question: "25. Qual a frase obrigatória de abertura para e-mails profissionais no Japão?", options: [{ label: "Itsumo osewa ni natte orimasu", isCorrect: true }, { label: "Konnichiwa, genki desu ka", isCorrect: false }, { label: "Sayounara, mata ashita", isCorrect: false }] },
        { question: "26. Como se despedir dos colegas ao sair do escritório no fim do expediente?", options: [{ label: "Osaki ni shitsurei shimasu", isCorrect: true }, { label: "O-yasumi nasai", isCorrect: false }, { label: "Ja ne!", isCorrect: false }] },
        { question: "27. Como dizer ao olhar para uma comida na mesa 'Parece delicioso!'?", options: [{ label: "Oishisou desu!", isCorrect: true }, { label: "Oishii deshita", isCorrect: false }, { label: "Oishiku nai desu", isCorrect: false }] },
        { question: "28. Traduza a comparação: 'Ano mise wa eiga no set mitai desu'", options: [{ label: "Aquela loja parece um cenário de filme", isCorrect: true }, { label: "Aquela loja vende filmes", isCorrect: false }, { label: "O filme acabou", isCorrect: false }] },
        { question: "29. O que significa a palavra 'Chien (遅延)' no painel da estação de trem?", options: [{ label: "Atraso no itinerário/linha", isCorrect: true }, { label: "Estação fechada para sempre", isCorrect: false }, { label: "Bilhete promocional", isCorrect: false }] },
        { question: "30. Qual frase resume a vitória da fluência no Nível B1?", options: [{ label: "Nihon-go de jiritsu shite seikatsu dekiru you ni narimashita! (Passei a conseguir viver com autonomia em japonês!)", isCorrect: true }, { label: "Nihon-go ga zenzen wakarimasen", isCorrect: false }, { label: "Nihon-go o yameru tsumori desu", isCorrect: false }] }
    ],
        
    stage3_5_sentenceBuilder: [
        {
            sentenceJp: "これまでの べんきょう の せいか が でました",
            translation: "Surgiram os resultados do meu estudo até agora.",
            chunks: ["これまでの", "べんきょう", "の", "せいか", "が", "でました"]
        },
        {
            sentenceJp: "これからも まなび を つづけて まいります",
            translation: "Continuarei aprendendo daqui em diante.",
            chunks: ["これからも", "まなび", "を", "つづけて", "まいります"]
        }
    ],
    stage4_dialog: [
        { scenario: "Situação 1: Em uma reunião de encerramento do projeto, o diretor da empresa pede a sua avaliação final.", npcName: "Diretor Executivo", npcMessage: "[Seu Nome]-san, kono 1-nenkan no Nihon de no shigoto to seikatsu, dou datta ka na? (Como foi seu trabalho e vida no Japão neste 1 ano?)", options: [{ text: "Hajime wa taiken deshita ga, minasan ga tetsudatte kureta node, Nihon-go de seikatsu dekiru you ni narimashita! (No começo foi difícil, mas como todos me ajudaram, passei a conseguir viver em japonês!)", feedback: "Combinação espetacular de causa (node), favor (kureta) e mudança de estado (you ni narimashita)!", isCorrect: true }, { text: "Nihon-go wa oishii desu.", feedback: "Sem sentido.", isCorrect: false }, { text: "Sayounara!", feedback: "Não se despeça de repente.", isCorrect: false }] },
        { scenario: "Situação 2: O diretor elogia a sua rápida adaptação e profissionalismo.", npcName: "Diretor Executivo", npcMessage: "Subarashii seichou da ne! Kisha no sasae ni natte kurete arigatou! (Que crescimento incrível! Obrigado por ser um pilar para nossa empresa!)", options: [{ text: "Kozutsumi itadaki, hontou ni arigatou gozaimasu! Kisha de fururu ni koukenできるよう (dekiru you) ganbarimasu! (Obrigado por me conceder esta oportunidade! Continuarei me esforçando para contribuir plenamente com a empresa!)", feedback: "Etiqueta corporativa e humildade (Kenjougo) exemplares!", isCorrect: true }, { text: "Iie, tabemashita.", feedback: "Desconexo.", isCorrect: false }, { text: "Gomen nasai!", feedback: "Desnecessário.", isCorrect: false }] },
        { scenario: "Situação 3: O diretor entrega a você o certificado de conclusão do Nível B1!", npcName: "Diretor Executivo", npcMessage: "Omedetou gozaimasu! [Seu Nome]-san! B1 Coosu Kanryou desu! (Parabéns, [Seu Nome]-san! Nível B1 Concluído!)", options: [{ text: "Domo arigatou gozaimasu! Nihon-go no benkyou o tsuzukete, tsugi wa B2 ni chousen shimasu! (Muito obrigado! Continuarei estudando japonês e a seguir desafiarei o Nível B2!)", feedback: "🏆 PARABÉNS! VOCÊ ZEROU O NÍVEL B1 DO JAPÃO ACADEMY COM LOUVOR E AUTONOMIA TOTAL!", isCorrect: true }, { text: "Nani desu ka?", feedback: "Não duvide do seu troféu!", isCorrect: false }, { text: "Sayounara!", feedback: "Despedida seca.", isCorrect: false }] }
    ],
    stage5_quiz: [{ question: "Parabéns! O que você conquistou ao concluir com sucesso o Nível B1?", options: ["Autonomia para viver, trabalhar, conversar na fala casual, dominar Keigo e resolver imprevistos no Japão!", "Apenas saudações básicas", "Nenhum aprendizado"], correctIndex: 0 }]
};

// ==========================================
// VETOR CENTRAL QUE CONECTA OS 24 MÓDULOS B1 AO MOTOR APP.JS
// ==========================================
const CURSO_B1_DADOS = [
    MODULO_B1_01,
    MODULO_B1_02,
    MODULO_B1_03,
    MODULO_B1_04,
    MODULO_B1_05,
    MODULO_B1_06,
    MODULO_B1_07,
    MODULO_B1_08,
    MODULO_B1_09,
    MODULO_B1_10,
    MODULO_B1_11,
    MODULO_B1_12,
    MODULO_B1_13,
    MODULO_B1_14,
    MODULO_B1_15,
    MODULO_B1_16,
    MODULO_B1_17,
    MODULO_B1_18,
    MODULO_B1_19,
    MODULO_B1_20,
    MODULO_B1_21,
    MODULO_B1_22,
    MODULO_B1_23,
    MODULO_B1_24
];
