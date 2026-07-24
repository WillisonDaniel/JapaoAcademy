// ==========================================
// JAPÃO ACADEMY - BANCO DE DADOS KANJI N3
// LOTES 1 A 5 (100 KANJIS REAIS COM CONTEÚDO PURO DE DICIONÁRIO)
// ==========================================

const kanjiN3Data = [
    {
        module: 1,
        title: "Módulo 1: Vida Urbana, Moradia e Trânsito Complexo",
        description: "Aprenda 20 ideogramas essenciais para navegar por bairros, sinais urbanos, construções e tráfego.",
        grammar: {
            title: "Expressando Intenção Suave e Aparência (~mitai da / ~youshi)",
            explanation: "No N3, expressamos impressões visuais e hipóteses urbanas usando ~mitai da para indicar 'parece que...'.",
            example: "Kono machi wa shizuka mitai desu.",
            translation: "Parece que esta cidade é silenciosa."
        },
        readingText: {
            title: "都市の生活と交通 (Vida e Trânsito na Cidade)",
            japanese: "新しい<ruby>港<rt>みなと</rt></ruby>の近くに大きな<ruby>橋<rt>はし</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>ると、<ruby>築<rt>きず</rt></ruby>かれた綺麗な建物があります。<ruby>混<rt>こん</rt></ruby><ruby>雑<rt>ざつ</rt></ruby>した<ruby>街<rt>まち</rt></ruby>で<ruby>警<rt>けい</rt></ruby><ruby>察<rt>さつ</rt></ruby>が交通の<ruby>混<rt>こん</rt></ruby><ruby>乱<rt>らん</rt></ruby>を<ruby>避<rt>さ</rt></ruby>けています。",
            romaji: "Atarashii minato no chikaku ni ookina hashi o wataru to, kizukareta kirei na tatemono ga arimasu. Konzatsu shita machi de keisatsu ga koutsuu no konran o sakete imasu.",
            translation: "Ao atravessar a grande ponte perto do novo porto, há belos edifícios construídos. Na cidade congestionada, a polícia previne confusões no trânsito.",
            comprehensionQuiz: [
                {
                    q: "O que a polícia evita na cidade congestionada?",
                    options: ["Confusões no trânsito (交通の混乱)", "Construções novas", "Festivais", "O vento"],
                    a: 0
                },
                {
                    q: "Qual o significado de 避ける (sakeru)?",
                    options: ["Evitar / Esquivar", "Construir", "Comprar", "Vender"],
                    a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "港",
                meaning: "Porto / Ancoradouro",
                kunyomi: "みなと (minato)",
                onyomi: "コウ (KOU)",
                mnemonic: "Água (氵) ao lado da estrutura segura onde navios aportam (巷).",
                examples: [
                    { word: "港 (minato)", wordMeaning: "Porto", sentence: "Minato ni ookina fune ga tatsu.", sentenceMeaning: "Há um navio grande no porto." },
                    { word: "空港 (kuukou)", wordMeaning: "Aeroporto", sentence: "Kuukou ni hayaku arrival shimasu.", sentenceMeaning: "Chego cedo ao aeroporto." }
                ]
            },
            {
                character: "渡",
                meaning: "Atravessar / Entregar",
                kunyomi: "わた・る (wataru) / わた・す (watasu)",
                onyomi: "ト (TO)",
                mnemonic: "Água (氵) e passos contínuos para atravessar o rio.",
                examples: [
                    { word: "渡る (wataru)", wordMeaning: "Atravessar (rua/ponte)", sentence: "Hashi o watarimasu.", sentenceMeaning: "Atravesso a ponte." },
                    { word: "渡す (watasu)", wordMeaning: "Entregar / Passar", sentence: "Tegami o watashimasu.", sentenceMeaning: "Entrego a carta." }
                ]
            },
            {
                character: "招",
                meaning: "Convidar / Chamar / Atrair",
                kunyomi: "まね・く (maneku)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Mão (扌) acenando para convidar alguém a entrar (召).",
                examples: [
                    { word: "招く (maneku)", wordMeaning: "Convidar / Chamar", sentence: "Yuujin o ie ni manekimasu.", sentenceMeaning: "Convido meus amigos para casa." },
                    { word: "招待 (shoutai)", wordMeaning: "Convite oficial", sentence: "Shoutai-jou o moraimashita.", sentenceMeaning: "Recebi um convite." }
                ]
            },
            {
                character: "築",
                meaning: "Construir / Edificar",
                kunyomi: "きず・く (kizuku)",
                onyomi: "チク (CHIKU)",
                mnemonic: "Bambu e madeira sobre a terra moldados para construir.",
                examples: [
                    { word: "建築 (kenchiku)", wordMeaning: "Arquitetura / Edificação", sentence: "Kenchiku no benkyou o shimasu.", sentenceMeaning: "Estudo arquitetura." },
                    { word: "新築 (shinchiku)", wordMeaning: "Construção nova", sentence: "Shinchiku no ie ni sumimasu.", sentenceMeaning: "Moro numa casa nova." }
                ]
            },
            {
                character: "停",
                meaning: "Parar / Interromper",
                kunyomi: "と・まる (tomaru) / と・める (tomeru)",
                onyomi: "テイ (TEI)",
                mnemonic: "Pessoa (亻) parada ao lado do pavilhão de descanso.",
                examples: [
                    { word: "停留所 (teiryūjo)", wordMeaning: "Ponto de ônibus", sentence: "Teiryūjo de bus o matsu.", sentenceMeaning: "Esperar o ônibus no ponto." },
                    { word: "停車 (teisha)", wordMeaning: "Parada de veículo/trem", sentence: "Densha ga teisha shimasu.", sentenceMeaning: "O trem faz uma parada." }
                ]
            },
            {
                character: "街",
                meaning: "Rua / Cidade / Distrito",
                kunyomi: "まち (machi)",
                onyomi: "ガイ (GAI)",
                mnemonic: "Cruzamento movimentado da cidade com prédios dos dois lados.",
                examples: [
                    { word: "街角 (machikado)", wordMeaning: "Esquina da rua", sentence: "Machikado de bertemu.", sentenceMeaning: "Encontrar na esquina." },
                    { word: "商店街 (shoutengai)", wordMeaning: "Rua comercial", sentence: "Shoutengai de買い物.", sentenceMeaning: "Fazer compras na rua comercial." }
                ]
            },
            {
                character: "橋",
                meaning: "Ponte",
                kunyomi: "はし (hashi)",
                onyomi: "キョウ (KYOU)",
                mnemonic: "Estrutura de madeira (木) elevando o caminho sobre as águas.",
                examples: [
                    { word: "橋 (hashi)", wordMeaning: "Ponte", sentence: "Ookina hashi o wataru.", sentenceMeaning: "Atravessar uma ponte grande." },
                    { word: "歩道橋 (hodoukyou)", wordMeaning: "Passarela de pedestres", sentence: "Hodoukyou o tsukau.", sentenceMeaning: "Usar a passarela." }
                ]
            },
            {
                character: "偶",
                meaning: "Por acaso / Par / Boneco",
                kunyomi: "たま (tama)",
                onyomi: "グウ (GUU)",
                mnemonic: "Pessoa (亻) encontrando uma figura idêntica por acaso.",
                examples: [
                    { word: "偶然 (guuzen)", wordMeaning: "Por acaso / Coincidência", sentence: "Guuzen tomodachi ni aouto.", sentenceMeaning: "Encontrar um amigo por acaso." },
                    { word: "偶数 (guusuu)", wordMeaning: "Número par", sentence: "Ni wa guusuu desu.", sentenceMeaning: "Dois é um número par." }
                ]
            },
            {
                character: "警",
                meaning: "Alerta / Vigilância / Policiar",
                kunyomi: "いまし・める (imashimeru)",
                onyomi: "ケイ (KEI)",
                mnemonic: "Palavras (言) de aviso ditas para manter a ordem e vigilância.",
                examples: [
                    { word: "警察 (keisatsu)", wordMeaning: "Polícia", sentence: "Keisatsu ni renraku suru.", sentenceMeaning: "Contatar a polícia." },
                    { word: "警告 (keikoku)", wordMeaning: "Advertência / Alerta", sentence: "Keikoku o dasu.", sentenceMeaning: "Emitir um alerta." }
                ]
            },
            {
                character: "察",
                meaning: "Inspecionar / Perceber / Examinar",
                kunyomi: "さっ・する (sassuru)",
                onyomi: "サツ (SATSU)",
                mnemonic: "Observar com cuidado sob o teto da casa para examinar ritos e detalhes.",
                examples: [
                    { word: "観察 (kansatsu)", wordMeaning: "Observação", sentence: "Shizen o kansatsu suru.", sentenceMeaning: "Observar a natureza." },
                    { word: "察する (sassuru)", wordMeaning: "Perceber / Supor", sentence: "Kimochi o sassuru.", sentenceMeaning: "Perceber os sentimentos." }
                ]
            },
            {
                character: "航",
                meaning: "Navegar / Voar / Viajar",
                kunyomi: "わた・る (wataru)",
                onyomi: "コウ (KOU)",
                mnemonic: "Barco (舟) navegando pelas águas da rota comercial.",
                examples: [
                    { word: "航空 (koukuu)", wordMeaning: "Aviação / Aéreo", sentence: "Koukuu kaisha no ti-ketto.", sentenceMeaning: "Passagem de companhia aérea." },
                    { word: "運航 (unkou)", wordMeaning: "Operação de voo ou navio", sentence: "Fune ga unkou suru.", sentenceMeaning: "O navio está operando." }
                ]
            },
            {
                character: "往",
                meaning: "Ir / Vir / Tráfego",
                kunyomi: "ゆ・く (yuku)",
                onyomi: "オウ (OU)",
                mnemonic: "Passos contínuos pela estrada indo e vindo.",
                examples: [
                    { word: "往復 (oufuku)", wordMeaning: "Ida e volta", sentence: "Oufuku kippo o kaimashita.", sentenceMeaning: "Comprei passagem de ida e volta." },
                    { word: "往来 (ourai)", wordMeaning: "Tráfego de pessoas/veículos", sentence: "Hito no ourai ga ooi.", sentenceMeaning: "O tráfego de pessoas é intenso." }
                ]
            },
            {
                character: "追",
                meaning: "Perseguir / Alcançar",
                kunyomi: "お・う (ou)",
                onyomi: "ツイ (TSUI)",
                mnemonic: "Passos rápidos na estrada para perseguir e alcançar a meta.",
                examples: [
                    { word: "追う (ou)", wordMeaning: "Perseguir / Seguir", sentence: "Yume o ou.", sentenceMeaning: "Perseguir um sonho." },
                    { word: "追加 (tsuika)", wordMeaning: "Adição / Suplemento", sentence: "Tsuika chuumon.", sentenceMeaning: "Pedido adicional." }
                ]
            },
            {
                character: "越",
                meaning: "Ultrapassar / Mudar-se",
                kunyomi: "こ・える (koeru) / こ・す (kosu)",
                onyomi: "エツ (ETSU)",
                mnemonic: "Correr (走) por cima dos limites para superar o obstáculo.",
                examples: [
                    { word: "引っ越し (hikkoshi)", wordMeaning: "Mudança de residência", sentence: "Atarashii ie ni hikkoshi suru.", sentenceMeaning: "Mudar para uma casa nova." },
                    { word: "越える (koeru)", wordMeaning: "Ultrapassar / Cruzar", sentence: "Yama o koeru.", sentenceMeaning: "Ultrapassar a montanha." }
                ]
            },
            {
                character: "混",
                meaning: "Misturar / Congestionar",
                kunyomi: "ま・じる (majiru) / ま・ぜる (mazeru)",
                onyomi: "コン (KON)",
                mnemonic: "Água (氵) e multidão misturadas em desordem.",
                examples: [
                    { word: "混雑 (konzatsu)", wordMeaning: "Congestionamento / Lotação", sentence: "Eki ga konzatsu shite imasu.", sentenceMeaning: "A estação está congestionada." },
                    { word: "混ぜる (mazeru)", wordMeaning: "Misturar ingredientes", sentence: "Kurai o mazeru.", sentenceMeaning: "Misturar as cores." }
                ]
            },
            {
                character: "乱",
                meaning: "Desordem / Perturbação",
                kunyomi: "みだ・れる (midareru) / みだ・す (midasu)",
                onyomi: "ラン (RAN)",
                mnemonic: "Fios embaraçados gerando confusão e desordem pública.",
                examples: [
                    { word: "混乱 (konran)", wordMeaning: "Confusão / Caos", sentence: "Konran o防ぐ.", sentenceMeaning: "Evitar o caos." },
                    { word: "乱れる (midareru)", wordMeaning: "Desarrumar-se", sentence: "Kami ga midareru.", sentenceMeaning: "O cabelo fica desarrumado." }
                ]
            },
            {
                character: "避",
                meaning: "Evitar / Esquivar / Abrigar-se",
                kunyomi: "さ・ける (sakeru)",
                onyomi: "ヒ (HI)",
                mnemonic: "Passos rápidos para esquivar-se do perigo urbano.",
                examples: [
                    { word: "避ける (sakeru)", wordMeaning: "Evitar / Esquivar", sentence: "Kiken o sakeru.", sentenceMeaning: "Evitar o perigo." },
                    { word: "避難 (hinan)", wordMeaning: "Evacuação / Abrigo", sentence: "Hinan basho ni iku.", sentenceMeaning: "Ir para o local de evacuação." }
                ]
            },
            {
                character: "違",
                meaning: "Diferir / Errar / Violado",
                kunyomi: "ちが・う (chigau) / ちが・える (chigaeru)",
                onyomi: "イ (I)",
                mnemonic: "Passos em caminhos opostos gerando divergência.",
                examples: [
                    { word: "違う (chigau)", wordMeaning: "Ser diferente / Estar errado", sentence: "Kono sora wa chigau.", sentenceMeaning: "Este céu é diferente." },
                    { word: "違反 (ihan)", wordMeaning: "Infração / Violação da lei", sentence: "Koutsuu ihan.", sentenceMeaning: "Infração de trânsito." }
                ]
            },
            {
                character: "支",
                meaning: "Apoiar / Sustentar / Filial",
                kunyomi: "ささ・える (sasaeru)",
                onyomi: "シ (SHI)",
                mnemonic: "Mão segurando firme um galho para dar sustentação.",
                examples: [
                    { word: "支える (sasaeru)", wordMeaning: "Apoiar / Sustentar", sentence: "Kazoku o sasaeru.", sentenceMeaning: "Sustentar a família." },
                    { word: "支店 (shiten)", wordMeaning: "Filial bancária/comercial", sentence: "Tokyo shiten.", sentenceMeaning: "Filial de Tóquio." }
                ]
            },
            {
                character: "障",
                meaning: "Obstáculo / Impedimento / Avaria",
                kunyomi: "さわ・る (sawaru)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Parede elevada e colina criando impedimentos na travessia.",
                examples: [
                    { word: "障害 (shougai)", wordMeaning: "Obstáculo / Deficiência", sentence: "Shougai o koeru.", sentenceMeaning: "Superar obstáculos." },
                    { word: "故障 (koshou)", wordMeaning: "Avaria / Defeito mecânico", sentence: "Kuruma no koshou.", sentenceMeaning: "Avaria no carro." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 港 (みなと)?", options: ["Porto / Ancoradouro", "Ponte", "Polícia", "Aeroporto"], a: 0 },
            { q: "Traduza a palavra 空港 (kuukou):", options: ["Aeroporto", "Porto fluvial", "Estação de trem", "Ponto de ônibus"], a: 0 },
            { q: "Qual a leitura Kunyomi de 渡る?", options: ["わた・る (wataru)", "まね・く", "きず・く", "と・まる"], a: 0 },
            { q: "Onyomi do kanji 築 (Construir):", options: ["チク (CHIKU)", "コウ", "ト", "ショウ"], a: 0 },
            { q: "O que significa 停留所 (teiryūjo)?", options: ["Ponto de ônibus", "Passarela", "Aeroporto", "Ponte"], a: 0 },
            { q: "Qual o kanji de 警察 (keisatsu - Polícia)?", options: ["警察", "障害", "交通", "建築"], a: 0 },
            { q: "Traduza 避ける (sakeru):", options: ["Evitar / Esquivar", "Construir", "Convidar", "Atravessar"], a: 0 },
            { q: "Qual o kanji de 橋 (hashi - Ponte)?", options: ["橋", "港", "築", "街"], a: 0 },
            { q: "Significado de 故障 (koshou):", options: ["Avaria / Defeito", "Construção nova", "Viagem", "Infração"], a: 0 },
            { q: "Complete: Koutsuu ______ (Infração de trânsito).", options: ["ihan (違反)", "shinchiku", "keikoku", "hikkoshi"], a: 0 }
        ]
    },
    {
        module: 2,
        title: "Módulo 2: Vestuário, Moda e Cuidados Pessoais",
        description: "Estude 20 ideogramas de roupas, tecidos, cores, calçados e estética pessoal.",
        grammar: {
            title: "Expressando Mudança de Estado (~ni suru / ~ni naru)",
            explanation: "No N3, adjetivos e substantivos conectam-se a suru/naru para indicar transformações de estilo e arrumação visual.",
            example: "Fuku o kirei ni shimasu.",
            translation: "Deixo as roupas limpas e organizadas."
        },
        readingText: {
            title: "身だしなみと清潔 (Cuidados Pessoais e Limpeza)",
            japanese: "<ruby>髪<rt>かみ</rt></ruby>を整えて、新しい服に<ruby>換<rt>か</rt></ruby>えると、気持ちいい<ruby>姿<rt>すがた</rt></ruby>になります。<ruby>鏡<rt>かがみ</rt></ruby>を見て、<ruby>靴<rt>くつ</rt></ruby>を履いて出かけます。",
            romaji: "Kami o totonoete, atarashii fuku ni kaeru to, kimochi ii sugata ni narimasu. Kagami o mite, kutsu o haite dekakemasu.",
            translation: "Arrumando o cabelo e trocando para roupas novas, você fica com uma aparência agradável. Olho no espelho, calço os sapatos e saio.",
            comprehensionQuiz: [
                {
                    q: "O que a pessoa faz antes de sair de casa?",
                    options: ["Olha no espelho e calça sapatos", "Dorme de roupa", "Come frutos do mar", "Lava o carro"],
                    a: 0
                },
                {
                    q: "Qual a leitura de 鏡?",
                    options: ["かがみ (kagami)", "くつ", "かみ", "すがた"],
                    a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "服",
                meaning: "Roupas / Vestuário / Obedecer",
                kunyomi: "ふく (fuku)",
                onyomi: "フク (FUKU)",
                mnemonic: "Corpo (月) coberto com roupas adequadas para o clima.",
                examples: [
                    { word: "洋服 (youfuku)", wordMeaning: "Roupas ocidentais", sentence: "Atarashii youfuku o kaimashita.", sentenceMeaning: "Comprei roupas ocidentais novas." },
                    { word: "服着 (fukuchaku)", wordMeaning: "Vestimentas", sentence: "Fukuchaku o整える.", sentenceMeaning: "Arrumar a vestimenta." }
                ]
            },
            {
                character: "換",
                meaning: "Trocar / Substituir / Converter",
                kunyomi: "か・える (kaeru) / か・わる (kawaru)",
                onyomi: "カン (KAN)",
                mnemonic: "Mão (扌) trocando produtos com outra pessoa.",
                examples: [
                    { word: "交換 (koukan)", wordMeaning: "Troca / Permuta", sentence: "Fuku o koukan shimasu.", sentenceMeaning: "Troco a roupa." },
                    { word: "換気 (kanki)", wordMeaning: "Ventilação / Troca de ar", sentence: "Heya no kanki o suru.", sentenceMeaning: "Ventilar o quarto." }
                ]
            },
            {
                character: "髪",
                meaning: "Cabelo",
                kunyomi: "かみ (kami)",
                onyomi: "ハツ (HATSU)",
                mnemonic: "Fios longos e finos crescendo no topo da cabeça.",
                examples: [
                    { word: "髪の毛 (kaminoke)", wordMeaning: "Fios de cabelo", sentence: "Kami no ke o kirimasu.", sentenceMeaning: "Cortar o cabelo." },
                    { word: "金髪 (kinhatsu)", wordMeaning: "Cabelo loiro", sentence: "Kare wa kinhatsu desu.", sentenceMeaning: "Ele tem cabelo loiro." }
                ]
            },
            {
                character: "姿",
                meaning: "Figura / Aparência / Postura",
                kunyomi: "すがた (sugata)",
                onyomi: "シ (SHI)",
                mnemonic: "Mulher (女) com postura graciosa e elegante.",
                examples: [
                    { word: "姿 (sugata)", wordMeaning: "Aparência / Postura", sentence: "Kirei na sugata.", sentenceMeaning: "Bela postura." },
                    { word: "容姿 (youshi)", wordMeaning: "Aparência física", sentence: "Youshi o整える.", sentenceMeaning: "Cuidar da aparência física." }
                ]
            },
            {
                character: "染",
                meaning: "Tingir / Manchar / Pegar cor",
                kunyomi: "そ・める (someru) / そ・まる (somaru)",
                onyomi: "セン (SEN)",
                mnemonic: "Água (氵) e madeira (木) usadas para extrair tintas de tecidos.",
                examples: [
                    { word: "染める (someru)", wordMeaning: "Tingir (cabelo/tecido)", sentence: "Kami o someru.", sentenceMeaning: "Tingir o cabelo." },
                    { word: "感染 (kansen)", wordMeaning: "Infecção / Contágio", sentence: "Kansen o防ぐ.", sentenceMeaning: "Prevenir a infecção." }
                ]
            },
            {
                character: "帯",
                meaning: "Faixa / Obi / Zona",
                kunyomi: "おび (obi) / お・びる (obiru)",
                onyomi: "タイ (TAI)",
                mnemonic: "Faixa de pano amarrada ao redor da cintura do kimono.",
                examples: [
                    { word: "帯 (obi)", wordMeaning: "Faixa de kimono", sentence: "Kimono no obi o musubu.", sentenceMeaning: "Amarrar o obi do kimono." },
                    { word: "地帯 (chitai)", wordMeaning: "Zona / Faixa de terra", sentence: "Anzen chitai.", sentenceMeaning: "Zona de segurança." }
                ]
            },
            {
                character: "靴",
                meaning: "Sapatos / Calçados",
                kunyomi: "くつ (kutsu)",
                onyomi: "カ (KA)",
                mnemonic: "Couro (革) trabalhado para proteger os pés.",
                examples: [
                    { word: "靴 (kutsu)", wordMeaning: "Sapatos", sentence: "Kutsu o haite dekakeru.", sentenceMeaning: "Calçar sapatos e sair." },
                    { word: "靴下 (kutsushita)", wordMeaning: "Meias", sentence: "Warm kutsushita.", sentenceMeaning: "Meias quentes." }
                ]
            },
            {
                character: "帽",
                meaning: "Chapéu / Boné",
                kunyomi: "ずきん (zukin)",
                onyomi: "ボウ (BOU)",
                mnemonic: "Pano cobrindo os olhos para proteger do sol.",
                examples: [
                    { word: "帽子 (boushi)", wordMeaning: "Chapéu / Boné", sentence: "Boushi o kaburu.", sentenceMeaning: "Usar chapéu." },
                    { word: "脱帽 (datsubou)", wordMeaning: "Tirar o chapéu / Tirar o chapéu (respeito)", sentence: "Kare no talento ni datsubou.", sentenceMeaning: "Tiro o chapéu para o talento dele." }
                ]
            },
            {
                character: "針",
                meaning: "Agulha / Ponteiro",
                kunyomi: "はり (hari)",
                onyomi: "シン (SHIN)",
                mnemonic: "Metal (金) afiado usado em costura e relógios.",
                examples: [
                    { word: "針 (hari)", wordMeaning: "Agulha", sentence: "Hari to ito de縫う.", sentenceMeaning: "Costurar com agulha e linha." },
                    { word: "時計の針 (tokei no hari)", wordMeaning: "Ponteiro do relógio", sentence: "Tokei no hari ga moves.", sentenceMeaning: "O ponteiro do relógio move-se." }
                ]
            },
            {
                character: "縫",
                meaning: "Costurar / Juntar tecidos",
                kunyomi: "ぬ・う (nuu)",
                onyomi: "ホウ (HOU)",
                mnemonic: "Fios de linha (糸) unindo dois pedaços de pano.",
                examples: [
                    { word: "縫う (nuu)", wordMeaning: "Costurar", sentence: "Fuku no ana o nuu.", sentenceMeaning: "Costurar o furo da roupa." },
                    { word: "裁縫 (saihou)", wordMeaning: "Costura", sentence: "Saihou o benkyou suru.", sentenceMeaning: "Aprender costura." }
                ]
            },
            {
                character: "粧",
                meaning: "Maquiagem / Cosmético",
                kunyomi: "よそお・う (yosoo-u)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Arroz (米) refinado e pós usados para beleza facial.",
                examples: [
                    { word: "化粧 (keshou)", wordMeaning: "Maquiagem", sentence: "Keshou o suru.", sentenceMeaning: "Fazer maquiagem." },
                    { word: "化粧室 (keshoushitsu)", wordMeaning: "Lavabo / Banheiro", sentence: "Keshoushitsu wa doko desu ka.", sentenceMeaning: "Onde fica o lavabo?" }
                ]
            },
            {
                character: "鏡",
                meaning: "Espelho",
                kunyomi: "かがみ (kagami)",
                onyomi: "キョウ (KYOU)",
                mnemonic: "Metal (金) polido que reflete a imagem da pessoa.",
                examples: [
                    { word: "鏡 (kagami)", wordMeaning: "Espelho", sentence: "Kagami o miru.", sentenceMeaning: "Olhar no espelho." },
                    { word: "望遠鏡 (bouenkyou)", wordMeaning: "Telescópio", sentence: "Hoshi o bouenkyou de miru.", sentenceMeaning: "Ver estrelas no telescópio." }
                ]
            },
            {
                character: "飾",
                meaning: "Decorar / Enfeitar",
                kunyomi: "かざ・る (kazaru)",
                onyomi: "ショク (SHOKU)",
                mnemonic: "Comida (食) e arranjos postos para ornamentação.",
                examples: [
                    { word: "飾る (kazaru)", wordMeaning: "Decorar / Enfeitar", sentence: "Heya ni hana o kazaru.", sentenceMeaning: "Decorar o quarto com flores." },
                    { word: "装飾 (soushoku)", wordMeaning: "Ornamentação / Decoração", sentence: "Kirei na soushoku.", sentenceMeaning: "Decoração bonita." }
                ]
            },
            {
                character: "履",
                meaning: "Calçar / Cumprir",
                kunyomi: "は・く (haku)",
                onyomi: "リ (RI)",
                mnemonic: "Passos vestindo calçados nos pés.",
                examples: [
                    { word: "履く (haku)", wordMeaning: "Calçar (sapatos/calças)", sentence: "Kutsu o haku.", sentenceMeaning: "Calçar sapatos." },
                    { word: "履歴書 (rirekisho)", wordMeaning: "Currículo (CV)", sentence: "Rirekisho o kaku.", sentenceMeaning: "Escrever o currículo." }
                ]
            },
            {
                character: "潔",
                meaning: "Limpo / Puro / Impecável",
                kunyomi: "いさぎよ・い (isagiyoi)",
                onyomi: "ケツ (KETSU)",
                mnemonic: "Água (氵) pura lavando qualquer sujeira.",
                examples: [
                    { word: "清潔 (seiketsu)", wordMeaning: "Higiênico / Limpo", sentence: "Heya o seiketsu ni tamatsu.", sentenceMeaning: "Manter o quarto higiênico." },
                    { word: "潔白 (keppaku)", wordMeaning: "Inocência / Pureza", sentence: "Keppaku o shoumei suru.", sentenceMeaning: "Provar a inocência." }
                ]
            },
            {
                character: "濡",
                meaning: "Molhar / Encharcar",
                kunyomi: "ぬ・れる (nureru) / ぬ・らす (nurasu)",
                onyomi: "ジュ (JU)",
                mnemonic: "Água (氵) e chuva caindo até encharcar o tecido.",
                examples: [
                    { word: "濡れる (nureru)", wordMeaning: "Molhar-se", sentence: "Ame de nureru.", sentenceMeaning: "Molhar-se na chuva." },
                    { word: "濡らす (nurasu)", wordMeaning: "Molhar algo", sentence: "Towel o nurasu.", sentenceMeaning: "Molhar a toalha." }
                ]
            },
            {
                character: "汚",
                meaning: "Sujar / Poluir / Sujo",
                kunyomi: "よご・れる (yogoreru) / きたな・い (kitanai)",
                onyomi: "オ (O)",
                mnemonic: "Água (氵) turva e barrenta.",
                examples: [
                    { word: "汚い (kitanai)", wordMeaning: "Sujo / Imundo", sentence: "Kutsu ga kitanai.", sentenceMeaning: "Os sapatos estão sujos." },
                    { word: "汚染 (osen)", wordMeaning: "Poluição", sentence: "Kankyou osen.", sentenceMeaning: "Poluição ambiental." }
                ]
            },
            {
                character: "洗",
                meaning: "Lavar / Enxaguar",
                kunyomi: "あら・う (arau)",
                onyomi: "セン (SEN)",
                mnemonic: "Água (氵) corrente lavando os pés e roupas.",
                examples: [
                    { word: "洗う (arau)", wordMeaning: "Lavar", sentence: "Te o araimasu.", sentenceMeaning: "Lavo as mãos." },
                    { word: "洗濯 (sentaku)", wordMeaning: "Lavar roupa", sentence: "Sentaku o suru.", sentenceMeaning: "Lavar a roupa." }
                ]
            },
            {
                character: "干",
                meaning: "Secar / Estender",
                kunyomi: "ほ・す (hosu) / ひ・る (hiru)",
                onyomi: "カン (KAN)",
                mnemonic: "Varal de secar tecidos ao sol.",
                examples: [
                    { word: "干す (hosu)", wordMeaning: "Estender para secar", sentence: "Fuku o hosu.", sentenceMeaning: "Estender as roupas ao sol." },
                    { word: "若干 (jakkan)", wordMeaning: "Um pouco / Alguns", sentence: "Jakkan no chigai.", sentenceMeaning: "Uma pequena diferença." }
                ]
            },
            {
                character: "畳",
                meaning: "Dobrar / Tatami",
                kunyomi: "たた・む (tatamu) / たたみ (tatami)",
                onyomi: "ジョウ (JOU)",
                mnemonic: "Esteiras de palha dobradas e dispostas no chão.",
                examples: [
                    { word: "畳む (tatamu)", wordMeaning: "Dobrar (roupa/futon)", sentence: "Fuku o tatamu.", sentenceMeaning: "Dobrar as roupas." },
                    { word: "畳 (tatami)", wordMeaning: "Tatami tradicional", sentence: "Tatami no heya.", sentenceMeaning: "Quarto com tatami." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 洋服 (youfuku)?", options: ["Roupas ocidentais", "Sapatos", "Chapéu", "Tatami"], a: 0 },
            { q: "Traduza 化粧室 (keshoushitsu):", options: ["Lavabo / Banheiro", "Quarto de dormir", "Cozinha", "Loja de calçados"], a: 0 },
            { q: "Kunyomi de 洗う:", options: ["あら・う (arau)", "ほ・す", "ぬ・う", "は・く"], a: 0 },
            { q: "Onyomi de 髪 (Cabelo):", options: ["ハツ (HATSU)", "シ", "カン", "セン"], a: 0 },
            { q: "O que significa 清潔 (seiketsu)?", options: ["Higiênico / Limpo", "Sujo", "Molhado", "Velho"], a: 0 },
            { q: "Qual o kanji de 帽子 (boushi - Chapéu)?", options: ["帽", "靴", "針", "鏡"], a: 0 },
            { q: "Traduza 畳む (tatamu):", options: ["Dobrar", "Lavar", "Costurar", "Secar"], a: 0 },
            { q: "Qual o kanji de 鏡 (kagami - Espelho)?", options: ["鏡", "飾", "粧", "履"], a: 0 },
            { q: "Significado de 汚い (kitanai):", options: ["Sujo / Imundo", "Limpo", "Novo", "Caro"], a: 0 },
            { q: "Complete: Sentaku o ______ (Lavar roupa).", options: ["suru (する)", "haku", "nuu", "hosu"], a: 0 }
        ]
    },
    {
        module: 3,
        title: "Módulo 3: Alimentação, Culinária e Ingredientes Avançados",
        description: "Estude 20 ideogramas de cozimento, sabores, utensílios e hábitos alimentares.",
        grammar: {
            title: "Expressando Preparação Prévia (~te oku)",
            explanation: "Indica ações culinárias ou preparações feitas com antecedência para um uso futuro.",
            example: "Yasai o kitte okimasu.",
            translation: "Vou cortar os legumes antecipadamente."
        },
        readingText: {
            title: "料理の準備と味わい (Preparo e Sabor na Culinária)",
            japanese: "肉を<ruby>焼<rt>や</rt></ruby>いて、野菜を<ruby>煮<rt>に</rt></ruby>て、きれいな<ruby>皿<rt>さら</rt></ruby>に盛ります。<ruby>汁<rt>しる</rt></ruby>の<ruby>味<rt>あじ</rt></ruby>が<ruby>濃<rt>こ</rt></ruby>くて美味しいです。",
            romaji: "Niku o yaite, yasai o nite, kirei na sara ni morimasu. Shiru no aji ga koikute oishii desu.",
            translation: "Grelho a carne, cozinho os legumes e sirvo num prato bonito. O sabor do caldo está concentrado e delicioso.",
            comprehensionQuiz: [
                {
                    q: "Como está o sabor do caldo (汁の味)?", options: ["Concentrado e delicioso (濃くて美味しい)", "Azedo", "Frio", "Salgado demais"], a: 0
                },
                {
                    q: "Qual o kanji de 皿?", options: ["皿 (Prato)", "焼", "煮", "汁"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "焼",
                meaning: "Assar / Grelhar / Queimar",
                kunyomi: "や・く (yaku) / や・ける (yakeru)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Fogo (火) assando a carne na grelha.",
                examples: [
                    { word: "焼肉 (yakiniku)", wordMeaning: "Carne grelhada", sentence: "Yakiniku o taberu.", sentenceMeaning: "Comer carne grelhada." },
                    { word: "全焼 (zenshou)", wordMeaning: "Destruição total pelo fogo", sentence: "Ie ga zenshou suru.", sentenceMeaning: "A casa foi totalmente destruída pelo fogo." }
                ]
            },
            {
                character: "煮",
                meaning: "Cozinhar / Ferver em caldo",
                kunyomi: "に・る (niru) / に・える (nieru)",
                onyomi: "シャ (SHA)",
                mnemonic: "Fogo por baixo cozinhando a panela de sopa lentamente.",
                examples: [
                    { word: "煮物 (nimono)", wordMeaning: "Prato cozido em caldo", sentence: "Nimono o tsukuru.", sentenceMeaning: "Fazer prato cozido." },
                    { word: "煮沸 (shahutsu)", wordMeaning: "Fervura / Esterilização", sentence: "Shahutsu消毒.", sentenceMeaning: "Esterilização por fervura." }
                ]
            },
            {
                character: "皿",
                meaning: "Prato / Louça",
                kunyomi: "さら (sara)",
                onyomi: "ベイ (BEI)",
                mnemonic: "Desenho estilizado de um prato fundo de louça.",
                examples: [
                    { word: "小皿 (kozara)", wordMeaning: "Prato pequeno / Piteira", sentence: "Kozara ni shouyu o put.", sentenceMeaning: "Colocar shoyu no prato pequeno." },
                    { word: "灰皿 (haizara)", wordMeaning: "Cencreiro", sentence: "Haizara o arau.", sentenceMeaning: "Lavar o cencreiro." }
                ]
            },
            {
                character: "汁",
                meaning: "Sopa / Caldo / Suco",
                kunyomi: "しる (shiru)",
                onyomi: "ジュウ (JUU)",
                mnemonic: "Gotas de água/caldo (氵) caindo da panela.",
                examples: [
                    { word: "みそ汁 (misoshiru)", wordMeaning: "Sopa de miso", sentence: "Misoshiru o nomu.", sentenceMeaning: "Tomar sopa de miso." },
                    { word: "果汁 (kajuu)", wordMeaning: "Suco de fruta", sentence: "Kajuu 100%.", sentenceMeaning: "Suco 100% de fruta." }
                ]
            },
            {
                character: "蒸",
                meaning: "Cozinhar no vapor / Abafado",
                kunyomi: "む・す (musu) / む・れる (mureru)",
                onyomi: "ジョウ (JOU)",
                mnemonic: "Plantas (艹) e fogo (灬) gerando vapor quente.",
                examples: [
                    { word: "蒸しタオル (mushitaoru)", wordMeaning: "Toalha quente a vapor", sentence: "Mushitaoru o tsukau.", sentenceMeaning: "Usar toalha a vapor." },
                    { word: "蒸発 (jouhatsu)", wordMeaning: "Evaporação", sentence: "Mizu ga jouhatsu suru.", sentenceMeaning: "A água evapora." }
                ]
            },
            {
                character: "炒",
                meaning: "Saltear / Fritar mexendo",
                kunyomi: "いた・める (itameru)",
                onyomi: "コウ (KOU)",
                mnemonic: "Fogo (火) mexendo rápido os legumes na frigideira.",
                examples: [
                    { word: "野菜炒め (yasai-itame)", wordMeaning: "Legumes salteados", sentence: "Yasai-itame o tsukuru.", sentenceMeaning: "Fazer legumes salteados." },
                    { word: "炒飯 (chaahan)", wordMeaning: "Arroz frito", sentence: "Chaahan o chuumon suru.", sentenceMeaning: "Pedir arroz frito." }
                ]
            },
            {
                character: "揚",
                meaning: "Fritar em imersão / Elevar",
                kunyomi: "あ・げる (ageru) / あ・がる (agaru)",
                onyomi: "ヨウ (YOU)",
                mnemonic: "Mão (扌) tirando o alimento frito do óleo quente.",
                examples: [
                    { word: "唐揚げ (karaage)", wordMeaning: "Frango frito crocante", sentence: "Karaage o taberu.", sentenceMeaning: "Comer frango frito." },
                    { word: "抑揚 (okuyou)", wordMeaning: "Entonação", sentence: "Koe no okuyou.", sentenceMeaning: "Entonação da voz." }
                ]
            },
            {
                character: "味",
                meaning: "Sabor / Gosto / Sentido",
                kunyomi: "あじ (aji) / あじ・わう (ajiwau)",
                onyomi: "ミ (MI)",
                mnemonic: "Boca (口) provando um sabor ainda não totalmente conhecido (未).",
                examples: [
                    { word: "意味 (imi)", wordMeaning: "Significado", sentence: "Kotoba no imi.", sentenceMeaning: "Significado da palavra." },
                    { word: "趣味 (shumi)", wordMeaning: "Hobby / Gosto", sentence: "Watashi no shumi.", sentenceMeaning: "Meu hobby." }
                ]
            },
            {
                character: "鮮",
                meaning: "Fresco / Vívido",
                kunyomi: "あざ・やか (azayaka)",
                onyomi: "セン (SEN)",
                mnemonic: "Peixe (魚) e ovelha (羊) indicando alimentos novos e frescos.",
                examples: [
                    { word: "新鮮 (shinsen)", wordMeaning: "Fresco (alimento)", sentence: "Shinsen na sakana.", sentenceMeaning: "Peixe fresco." },
                    { word: "鮮やか (azayaka)", wordMeaning: "Vívido / Brilhante", sentence: "Azayaka na kurai.", sentenceMeaning: "Cor vívida." }
                ]
            },
            {
                character: "腐",
                meaning: "Estragar / Apodrecer",
                kunyomi: "くさ・る (kusaru)",
                onyomi: "フ (FU)",
                mnemonic: "Carne guardada no armazém por muito tempo apodrecendo.",
                examples: [
                    { word: "豆腐 (toufu)", wordMeaning: "Queijo de soja (Tofu)", sentence: "Toufu no misoshiru.", sentenceMeaning: "Sopa de miso com tofu." },
                    { word: "腐る (kusaru)", wordMeaning: "Apodrecer / Estragar", sentence: "Niku ga kusaru.", sentenceMeaning: "A carne estragou." }
                ]
            },
            {
                character: "欲",
                meaning: "Desejar / Ter vontade / Ambição",
                kunyomi: "ほ・しい (hoshii) / ほっ・する (hossuru)",
                onyomi: "ヨク (YOKU)",
                mnemonic: "Pessoa bocejando de desejo e sede.",
                examples: [
                    { word: "欲しい (hoshii)", wordMeaning: "Querer / Desejar", sentence: "Atarashii ie ga hoshii.", sentenceMeaning: "Quero uma casa nova." },
                    { word: "食欲 (shokuyoku)", wordMeaning: "Apetite", sentence: "Shokuyoku ga aru.", sentenceMeaning: "Estar com apetite." }
                ]
            },
            {
                character: "満",
                meaning: "Cheio / Satisfazer / Completo",
                kunyomi: "み・ちる (michiru) / み・たす (mitasu)",
                onyomi: "マン (MAN)",
                mnemonic: "Água (氵) enchendo o recipiente até a borda.",
                examples: [
                    { word: "満足 (manzoku)", wordMeaning: "Satisfação", sentence: "Result ni manzoku suru.", sentenceMeaning: "Estar satisfeito com o resultado." },
                    { word: "満員 (man'in)", wordMeaning: "Lotado (pessoas)", sentence: "Man'in densha.", sentenceMeaning: "Trem lotado." }
                ]
            },
            {
                character: "腹",
                meaning: "Barriga / Estômago",
                kunyomi: "はら (hara)",
                onyomi: "フク (FUKU)",
                mnemonic: "Carne/corpo (月) na região do ventre.",
                examples: [
                    { word: "腹が減る (hara ga heru)", wordMeaning: "Ficar com fome", sentence: "Hara ga herimashita.", sentenceMeaning: "Fiquei com fome." },
                    { word: "空腹 (kuufuku)", wordMeaning: "Fome / Estômago vazio", sentence: "Kuufuku o feel.", sentenceMeaning: "Sentir fome." }
                ]
            },
            {
                character: "麦",
                meaning: "Trigo / Cevada",
                kunyomi: "むぎ (mugi)",
                onyomi: "バク (BAKU)",
                mnemonic: "Planta de trigo crescendo nos campos agrícolas.",
                examples: [
                    { word: "小麦粉 (komugiko)", wordMeaning: "Farinha de trigo", sentence: "Komugiko de bread o tsukuru.", sentenceMeaning: "Fazer pão com farinha de trigo." },
                    { word: "麦茶 (mugicha)", wordMeaning: "Chá de cevada", sentence: "Tsumetai mugicha.", sentenceMeaning: "Chá de cevada gelado." }
                ]
            },
            {
                character: "豆",
                meaning: "Grão / Feijão / Soja",
                kunyomi: "まめ (mame)",
                onyomi: "トウ (TOU) / ズ (ZU)",
                mnemonic: "Pequeno vaso sobre o pedestal contendo grãos.",
                examples: [
                    { word: "大豆 (daizu)", wordMeaning: "Grão de soja", sentence: "Daizu kara shouyu o tsukuru.", sentenceMeaning: "Fazer shoyu a partir da soja." },
                    { word: "納豆 (nattou)", wordMeaning: "Soja fermentada", sentence: "Nattou o taberu.", sentenceMeaning: "Comer natto." }
                ]
            },
            {
                character: "盛",
                meaning: "Servir comida / Prosperar",
                kunyomi: "も・る (moru) / さか・ん (sakan)",
                onyomi: "セイ (SEI) / ジョウ (JOU)",
                mnemonic: "Comida empilhada com fartura sobre o prato (皿).",
                examples: [
                    { word: "大盛り (oomori)", wordMeaning: "Porção grande", sentence: "Ramen o oomori de chuumon.", sentenceMeaning: "Pedir ramen em porção grande." },
                    { word: "盛ん (sakan)", wordMeaning: "Próspero / Popular", sentence: "Sports ga sakan desu.", sentenceMeaning: "Os esportes são muito populares." }
                ]
            },
            {
                character: "濃",
                meaning: "Concentrado / Denso / Forte",
                kunyomi: "こ・い (koi)",
                onyomi: "ノウ (NOU)",
                mnemonic: "Água (氵) e agricultura de calda densa.",
                examples: [
                    { word: "濃い (koi)", wordMeaning: "Forte / Denso (sabor/cor)", sentence: "Koi ocha.", sentenceMeaning: "Chá forte." },
                    { word: "濃厚 (noukou)", wordMeaning: "Rico / Concentrado", sentence: "Noukou na taste.", sentenceMeaning: "Sabor rico e concentrado." }
                ]
            },
            {
                character: "淡",
                meaning: "Suave / Leve / Claro",
                kunyomi: "あわ・い (awai)",
                onyomi: "タン (TAN)",
                mnemonic: "Água (氵) cristalina de sabor suave.",
                examples: [
                    { word: "淡い (awai)", wordMeaning: "Claro / Suave (cor/sabor)", sentence: "Awai kurai.", sentenceMeaning: "Cor suave." },
                    { word: "冷淡 (reitan)", wordMeaning: "Indiferente / Frio", sentence: "Reitan na actitud.", sentenceMeaning: "Atitude fria." }
                ]
            },
            {
                character: "湯",
                meaning: "Água quente / Banho",
                kunyomi: "ゆ (yu)",
                onyomi: "トウ (TOU)",
                mnemonic: "Água (氵) sob o sol saindo fumaça quente.",
                examples: [
                    { word: "お湯 (oyu)", wordMeaning: "Água quente", sentence: "Oyu o沸かす.", sentenceMeaning: "Ferver água quente." },
                    { word: "温泉 (onsen)", wordMeaning: "Fonte termal", sentence: "Onsen ni hairu.", sentenceMeaning: "Entrar na fonte termal." }
                ]
            },
            {
                character: "沸",
                meaning: "Ferver / Borbulhar",
                kunyomi: "わ・く (waku) / わ・かす (wakasu)",
                onyomi: "フツ (FUTSU)",
                mnemonic: "Água (氵) fervendo e borbulhando na panela.",
                examples: [
                    { word: "沸かす (wakasu)", wordMeaning: "Ferver (água)", sentence: "Oyu o wakasu.", sentenceMeaning: "Ferver água." },
                    { word: "沸騰 (huttou)", wordMeaning: "Fervura total", sentence: "Mizu ga huttou suru.", sentenceMeaning: "A água está em fervura total." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 煮物 (nimono)?", options: ["Prato cozido em caldo", "Frango frito", "Arroz cru", "Legume salteado"], a: 0 },
            { q: "Traduza 新鮮 (shinsen):", options: ["Fresco (alimento)", "Sujo", "Quente", "Cozido"], a: 0 },
            { q: "Kunyomi de 焼く:", options: ["や・く (yaku)", "に・る", "む・す", "あ・げる"], a: 0 },
            { q: "Onyomi do kanji 豆腐 (toufu):", options: ["フ (FU)", "ショウ", "ミ", "セン"], a: 0 },
            { q: "O que significa 空腹 (kuufuku)?", options: ["Fome / Estômago vazio", "Satisfação", "Apetite grande", "Sopa quente"], a: 0 },
            { q: "Qual o kanji de お湯 (oyu - Água quente)?", options: ["湯", "汁", "皿", "沸"], a: 0 },
            { q: "Traduza 濃い (koi):", options: ["Denso / Forte (sabor)", "Suave", "Frio", "Doce"], a: 0 },
            { q: "Qual o kanji de 鮮やか (azayaka - Vívido)?", options: ["鮮", "腐", "盛", "淡"], a: 0 },
            { q: "Significado de 満足 (manzoku):", options: ["Satisfação", "Fome", "Cozimento", "Desejo"], a: 0 },
            { q: "Complete: Oyu o ______ (Ferver água quente).", options: ["wakasu (沸かす)", "hosu", "tatamu", "arau"], a: 0 }
        ]
    },
    {
        module: 4,
        title: "Módulo 4: Relações Humanas, Sentimentos e Emoções",
        description: "Estude 20 ideogramas de relações interpessoais, afetos, medos e estados emocionais.",
        grammar: {
            title: "Expressando Tendência ou Sentimento (~garu)",
            explanation: "Uso do sufixo ~garu para descrever o comportamento emocional visível de terceiros.",
            example: "Kare wa kanashigatte imasu.",
            translation: "Ele demonstra estar triste."
        },
        readingText: {
            title: "感情の共有 (Compartilhando Sentimentos)",
            japanese: "友達が<ruby>喜<rt>よろこ</rt></ruby>ぶと私も嬉しいです。<ruby>悲<rt>かな</rt></ruby>しい時や<ruby>困<rt>こま</rt></ruby>った時は互いに<ruby>助<rt>たす</rt></ruby>け合い、<ruby>幸<rt>しあわ</rt></ruby>せを願います。",
            romaji: "Tomodachi ga yorokobu to watashi mo ureshii desu. Kanashii toki ya komatta toki wa互i ni tasukeai, shiawase o negaimasu.",
            translation: "Quando um amigo se alegra, eu também fico feliz. Nos momentos tristes ou difíceis, nos ajudamos mutuamente e desejamos a felicidade.",
            comprehensionQuiz: [
                {
                    q: "O que é feito nos momentos tristes ou difíceis?", options: ["Ajudamo-nos mutuamente (互いに助け合う)", "Fugimos", "Dormimos", "Ficamos com raiva"], a: 0
                },
                {
                    q: "Qual a leitura de 幸せ?", options: ["しあわせ (shiawase)", "かなしい", "よろこぶ", "こまる"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "悲",
                meaning: "Tristeza / Lamento",
                kunyomi: "かな・しい (kanashii) / かな・しむ (kanashimu)",
                onyomi: "ヒ (HI)",
                mnemonic: "Coração (心) dividido ao meio por sentimentos dolorosos.",
                examples: [
                    { word: "悲しい (kanashii)", wordMeaning: "Triste", sentence: "Kanashii eiga o miru.", sentenceMeaning: "Assistir a um filme triste." },
                    { word: "悲劇 (higeki)", wordMeaning: "Tragédia", sentence: "Higeki no story.", sentenceMeaning: "História trágica." }
                ]
            },
            {
                character: "怒",
                meaning: "Raiva / Irritar-se",
                kunyomi: "おこ・る (okoru) / いか・る (ikaru)",
                onyomi: "ド (DO)",
                mnemonic: "Coração (心) tomado pela fúria de uma mulher irritada.",
                examples: [
                    { word: "怒る (okoru)", wordMeaning: "Ficar com raiva", sentence: "Sensei ga okoru.", sentenceMeaning: "O professor ficou com raiva." },
                    { word: "怒気 (doki)", wordMeaning: "Tom de raiva", sentence: "Doki o obiru.", sentenceMeaning: "Falar com tom de raiva." }
                ]
            },
            {
                character: "害",
                meaning: "Dano / Prejuízo / Nocivo",
                kunyomi: "がい (gai)",
                onyomi: "ガイ (GAI)",
                mnemonic: "Palavras nocivas sob o teto da casa causando prejuízos.",
                examples: [
                    { word: "損害 (songai)", wordMeaning: "Dano / Prejuízo", sentence: "Songai ga arimashita.", sentenceMeaning: "Houve prejuízos." },
                    { word: "公害 (kougai)", wordMeaning: "Poluição pública", sentence: "Kougai o防ぐ.", sentenceMeaning: "Prevenir a poluição pública." }
                ]
            },
            {
                character: "喜",
                meaning: "Alegria / Contentamento",
                kunyomi: "よろこ・ぶ (yorokobu)",
                onyomi: "キ (KI)",
                mnemonic: "Boca (口) sorrindo em celebração com tambor de festa.",
                examples: [
                    { word: "喜ぶ (yorokobu)", wordMeaning: "Alegrar-se", sentence: "Kodomo ga yorokobu.", sentenceMeaning: "A criança se alegra." },
                    { word: "歓喜 (kanki)", wordMeaning: "Grande alegria / Entusiasmo", sentence: "Kanki no koe.", sentenceMeaning: "Gritos de alegria." }
                ]
            },
            {
                character: "恐",
                meaning: "Temer / Receio / Temor",
                kunyomi: "おそ・れる (osoreru) / おそ・ろしい (osoroshii)",
                onyomi: "キョウ (KYOU)",
                mnemonic: "Coração (心) assustado diante de algo terrível.",
                examples: [
                    { word: "恐ろしい (osoroshii)", wordMeaning: "Assustador / Terrível", sentence: "Osoroshii story.", sentenceMeaning: "História assustadora." },
                    { word: "恐縮 (kyoushuku)", wordMeaning: "Sentir-se encabulado / Agradecido", sentence: "Kyoushuku desu.", sentenceMeaning: "Fico extremamente grato/encabulado." }
                ]
            },
            {
                character: "怖",
                meaning: "Medo / Assustado",
                kunyomi: "こわ・い (kowai)",
                onyomi: "フ (FU)",
                mnemonic: "Coração (忄) trêmulo de pavor.",
                examples: [
                    { word: "怖い (kowai)", wordMeaning: "Assustador / Com medo", sentence: "Hebi ga kowai.", sentenceMeaning: "Tenho medo de cobra." },
                    { word: "恐怖 (kyoufu)", wordMeaning: "Pavor / Terror", sentence: "Kyoufu o feel.", sentenceMeaning: "Sentir terror." }
                ]
            },
            {
                character: "痛",
                meaning: "Dor / Doer",
                kunyomi: "いた・い (itai) / いた・む (itamu)",
                onyomi: "ツウ (TSUU)",
                mnemonic: "Doença (疒) causando dor física intensa.",
                examples: [
                    { word: "痛い (itai)", wordMeaning: "Doloroso / Dói", sentence: "Atama ga itai.", sentenceMeaning: "Estou com dor de cabeça." },
                    { word: "頭痛 (zutsout)", wordMeaning: "Dor de cabeça", sentence: "Zutsout ga suru.", sentenceMeaning: "Estar com dor de cabeça." }
                ]
            },
            {
                character: "恋",
                meaning: "Amor romântico / Paixão",
                kunyomi: "こい (koi) / こい・しい (koishii)",
                onyomi: "レン (REN)",
                mnemonic: "Coração (心) apaixonado e pensativo.",
                examples: [
                    { word: "恋人 (koibito)", wordMeaning: "Namorado(a)", sentence: "Koibito ni aouto.", sentenceMeaning: "Encontrar o namorado." },
                    { word: "恋愛 (ren'ai)", wordMeaning: "Amor / Romance", sentence: "Ren'ai drama.", sentenceMeaning: "Drama romântico." }
                ]
            },
            {
                character: "愛",
                meaning: "Amor / Afeto profundo",
                kunyomi: "あい (ai) / あい・する (aisuru)",
                onyomi: "アイ (AI)",
                mnemonic: "Coração (心) abraçando com carinho e proteção.",
                examples: [
                    { word: "愛情 (aijou)", wordMeaning: "Afeto / Amor profundo", sentence: "Aijou o comete.", sentenceMeaning: "Com todo o afeto." },
                    { word: "愛用 (aiyou)", wordMeaning: "Usar com carinho (objeto)", sentence: "Aiyou suru pen.", sentenceMeaning: "Caneta favorita." }
                ]
            },
            {
                character: "恨",
                meaning: "Rancor / Mágoa",
                kunyomi: "うら・む (uramu) / うら・めしい (urameshiai)",
                onyomi: "コン (KON)",
                mnemonic: "Coração (忄) guardando mágoas acumuladas.",
                examples: [
                    { word: "恨む (uramu)", wordMeaning: "Guardar rancor", sentence: "Hito o uramu.", sentenceMeaning: "Guardar rancor de alguém." },
                    { word: "痛恨 (tsuukon)", wordMeaning: "Lamento profundo", sentence: "Tsuukon no error.", sentenceMeaning: "Erro lamentável." }
                ]
            },
            {
                character: "悩",
                meaning: "Preocupar-se / Aflição",
                kunyomi: "なや・む (nayamu) / なや・ます (nayamasu)",
                onyomi: "ノウ (NOU)",
                mnemonic: "Coração (忄) e cérebro sofrendo de ansiedade.",
                examples: [
                    { word: "悩む (nayamu)", wordMeaning: "Preocupar-se / Estar aflito", sentence: "Shindou ni nayamu.", sentenceMeaning: "Preocupar-se com o futuro." },
                    { word: "悩み (nayami)", wordMeaning: "Preocupação / Dilema", sentence: "Nayami o相談する.", sentenceMeaning: "Consultar sobre uma preocupação." }
                ]
            },
            {
                character: "望",
                meaning: "Desejar / Esperança / Olhar ao longe",
                kunyomi: "のぞ・む (nozomu)",
                onyomi: "ボウ (BOU) / モウ (MOU)",
                mnemonic: "Pessoa olhando para a lua cheia com esperança.",
                examples: [
                    { word: "希望 (kibou)", wordMeaning: "Esperança / Desejo", sentence: "Kibou o tsutsugamu.", sentenceMeaning: "Manter a esperança." },
                    { word: "失望 (shitsubou)", wordMeaning: "Desapontamento", sentence: "Result ni shitsubou suru.", sentenceMeaning: "Desapontar-se com o resultado." }
                ]
            },
            {
                character: "迷",
                meaning: "Perder-se / Hesitar",
                kunyomi: "まよ・う (mayou)",
                onyomi: "メイ (MEI)",
                mnemonic: "Passos sem rumo dentro de uma floresta.",
                examples: [
                    { word: "迷う (mayou)", wordMeaning: "Perder-se / Hesitar", sentence: "Michi ni mayou.", sentenceMeaning: "Perder-se no caminho." },
                    { word: "迷信 (meishin)", wordMeaning: "Superstição", sentence: "Meishin o shinji-nai.", sentenceMeaning: "Não acreditar em superstição." }
                ]
            },
            {
                character: "恥",
                meaning: "Vergonha / Timidez",
                kunyomi: "はじ (haji) / はず・かしい (hazukashii)",
                onyomi: "チ (CHI)",
                mnemonic: "Orelhas (耳) e coração (心) vermelhos de timidez.",
                examples: [
                    { word: "恥ずかしい (hazukashii)", wordMeaning: "Envergonhado / Tímido", sentence: "Kao ga hazukashii.", sentenceMeaning: "Estar envergonhado." },
                    { word: "無恥 (muchi)", wordMeaning: "Descarado / Sem vergonha", sentence: "Muchi na actitud.", sentenceMeaning: "Atitude descarada." }
                ]
            },
            {
                character: "願",
                meaning: "Pedir / Desejo / Oração",
                kunyomi: "ねが・う (negau)",
                onyomi: "ガン (GAN)",
                mnemonic: "Cabeça curvada fazendo um pedido sincero.",
                examples: [
                    { word: "願う (negau)", wordMeaning: "Desejar / Pedir", sentence: "Heiwa o negau.", sentenceMeaning: "Desejar a paz." },
                    { word: "願書 (gansho)", wordMeaning: "Formulário de inscrição", sentence: "Gansho o提出.", sentenceMeaning: "Entregar o formulário de inscrição." }
                ]
            },
            {
                character: "祝",
                meaning: "Celebrar / Abençoar",
                kunyomi: "いわ・う (iwau)",
                onyomi: "シュク (SHUKU)",
                mnemonic: "Altar sagrado (礻) e palavras de felicitação.",
                examples: [
                    { word: "祝う (iwau)", wordMeaning: "Celebrar", sentence: "Tanjoubi o iwau.", sentenceMeaning: "Celebrar o aniversário." },
                    { word: "祝日 (shukujitsu)", wordMeaning: "Feriado nacional", sentence: "Ashita wa shukujitsu desu.", sentenceMeaning: "Amanhã é feriado." }
                ]
            },
            {
                character: "幸",
                meaning: "Felicidade / Sorte / Fortuna",
                kunyomi: "さいわ・い (saiwai) / しあわ・せ (shiawase)",
                onyomi: "コウ (KOU)",
                mnemonic: "Algemas removidas trazendo liberdade e felicidade.",
                examples: [
                    { word: "幸せ (shiawase)", wordMeaning: "Feliz / Felicidade", sentence: "Shiawase na kazoku.", sentenceMeaning: "Família feliz." },
                    { word: "幸運 (kouun)", wordMeaning: "Boa sorte", sentence: "Kouun o inoru.", sentenceMeaning: "Desejar boa sorte." }
                ]
            },
            {
                character: "福",
                meaning: "Bênção / Fortuna / Sorte",
                kunyomi: "ふく (fuku)",
                onyomi: "フク (FUKU)",
                mnemonic: "Altar (礻) e recipiente cheio trazendo fartura divina.",
                examples: [
                    { word: "幸福 (koufuku)", wordMeaning: "Felicidade suprema", sentence: "Koufuku o feel.", sentenceMeaning: "Sentir extrema felicidade." },
                    { word: "福祉 (fukushi)", wordMeaning: "Bem-estar social", sentence: "Shakai fukushi.", sentenceMeaning: "Bem-estar social." }
                ]
            },
            {
                character: "困",
                meaning: "Estar em dificuldades / Problema",
                kunyomi: "こま・る (komaru)",
                onyomi: "コン (KON)",
                mnemonic: "Árvore (木) presa dentro de quatro paredes sem espaço para crescer.",
                examples: [
                    { word: "困る (komaru)", wordMeaning: "Estar em apuros / Em dificuldades", sentence: "Michi de komaru.", sentenceMeaning: "Estar em apuros no caminho." },
                    { word: "困難 (kannan)", wordMeaning: "Dificuldade grave", sentence: "Kannan o koeru.", sentenceMeaning: "Superar grandes dificuldades." }
                ]
            },
            {
                character: "疑",
                meaning: "Duvidar / Suspeitar / Dúvida",
                kunyomi: "うたが・う (utagau)",
                onyomi: "ギ (GI)",
                mnemonic: "Pessoa parada no cruzamento hesitando sem saber para onde ir.",
                examples: [
                    { word: "疑う (utagau)", wordMeaning: "Duvidar / Suspeitar", sentence: "Uso o utagau.", sentenceMeaning: "Suspeitar de uma mentira." },
                    { word: "疑問 (gimon)", wordMeaning: "Dúvida / Questão", sentence: "Gimon o haraasu.", sentenceMeaning: "Esclarecer uma dúvida." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 悲しい (kanashii)?", options: ["Triste", "Alegre", "Assustador", "Com raiva"], a: 0 },
            { q: "Traduza 恐怖 (kyoufu):", options: ["Pavor / Terror", "Felicidade", "Amor romântico", "Vergonha"], a: 0 },
            { q: "Kunyomi de 怒る:", options: ["おこ・る (okoru)", "かな・しい", "よろこ・ぶ", "こま・る"], a: 0 },
            { q: "Onyomi de 愛 (Amor):", options: ["アイ (AI)", "レン", "キョウ", "コン"], a: 0 },
            { q: "O que significa 恥ずかしい (hazukashii)?", options: ["Envergonhado / Tímido", "Triste", "Feliz", "Assustado"], a: 0 },
            { q: "Qual o kanji de 希望 (kibou - Esperança)?", options: ["望", "愛", "恋", "祝"], a: 0 },
            { q: "Traduza 困る (komaru):", options: ["Estar em apuros", "Celebrar", "Duvidar", "Amar"], a: 0 },
            { q: "Qual o kanji de 幸福 (koufuku - Felicidade)?", options: ["福", "害", "恨", "恐"], a: 0 },
            { q: "Significado de 疑う (utagau):", options: ["Duvidar / Suspeitar", "Celebrar", "Trancar", "Ajudar"], a: 0 },
            { q: "Complete: Tanjoubi o ______ (Celebrar aniversário).", options: ["iwau (祝う)", "nayamu", "utagau", "komaru"], a: 0 }
        ]
    },
    {
        module: 5,
        title: "Módulo 5: Trabalho, Escritório e Profissões",
        description: "Estude 20 ideogramas corporativos de reuniões, cargos, tarefas, contratação e promoções.",
        grammar: {
            title: "Expressando Obrigação Formal (~nakereba narani)",
            explanation: "Uso de formas de obrigação no contexto de trabalho para cumprir regulamentos e tarefas.",
            example: "Shigoto o tanoma-nakereba narimasen.",
            translation: "Preciso solicitar o trabalho."
        },
        readingText: {
            title: "職場での役割と責任 (Papéis e Responsabilidades no Trabalho)",
            japanese: "新しい<ruby>職<rt>しょく</rt></ruby>場で<ruby>頼<rt>たの</rt></ruby>まれた<ruby>務<rt>む</rt></ruby>むを果たし、<ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>の発展に貢献します。<ruby>上<rt>じょう</rt></ruby><ruby>司<rt>し</rt></ruby>の<ruby>指<rt>し</rt></ruby><ruby>示<rt>じ</rt></ruby>に従います。",
            romaji: "Atarashii shokuba de tanomareta tsutomu o hatashi, kigyou no hatten ni kouken shimasu. Joushi no shiji ni shitagaimasu.",
            translation: "Cumpro as tarefas solicitadas no novo local de trabalho e contribuo para o desenvolvimento da empresa. Sigo as instruções do chefe.",
            comprehensionQuiz: [
                {
                    q: "O que a pessoa faz no novo local de trabalho?", options: ["Cumpre as tarefas e segue instruções do chefe", "Dorme durante a reunião", "Falta todos os dias", "Muda de país"], a: 0
                },
                {
                    q: "Qual a leitura de 職場?", options: ["しょくば (shokuba)", "きぎょう", "たんとう", "やくわり"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "職",
                meaning: "Emprego / Cargo / Profissão",
                kunyomi: "しょく (shoku)",
                onyomi: "ショク (SHOKU)",
                mnemonic: "Ouvir (耳) e registrar ordens formais do cargo.",
                examples: [
                    { word: "職業 (shokugyou)", wordMeaning: "Profissão", sentence: "Anata no shokugyou wa nani desu ka.", sentenceMeaning: "Qual é a sua profissão?" },
                    { word: "職場 (shokuba)", wordMeaning: "Local de trabalho", sentence: "Shokuba ni iku.", sentenceMeaning: "Ir ao local de trabalho." }
                ]
            },
            {
                character: "係",
                meaning: "Encarregado / Conexão / Relação",
                kunyomi: "かか・り (kakari) / かか・わる (kakawaru)",
                onyomi: "ケイ (KEI)",
                mnemonic: "Pessoa (亻) conectada a uma função específica.",
                examples: [
                    { word: "係員 (kakariin)", wordMeaning: "Encarregado / Atendente", sentence: "Kakariin ni kiku.", sentenceMeaning: "Perguntar ao atendente." },
                    { word: "関係 (kankei)", wordMeaning: "Relação / Conexão", sentence: "Kankei ga aru.", sentenceMeaning: "Haver relação." }
                ]
            },
            {
                character: "務",
                meaning: "Dever / Tarefa / Servir",
                kunyomi: "つと・める (tsutomeru)",
                onyomi: "ム (MU)",
                mnemonic: "Força (力) empregada para cumprir deveres profissionais.",
                examples: [
                    { word: "義務 (gimu)", wordMeaning: "Dever / Obrigação", sentence: "Gimu o hatasu.", sentenceMeaning: "Cumprir com o dever." },
                    { word: "公務員 (koumuin)", wordMeaning: "Funcionário público", sentence: "Koumuin ni naru.", sentenceMeaning: "Tornar-se funcionário público." }
                ]
            },
            {
                character: "頼",
                meaning: "Confiar / Pedir / Encomendar",
                kunyomi: "たの・む (tanomu) / たよ・る (tayoru)",
                onyomi: "ライ (RAI)",
                mnemonic: "Recorrer a quem você confia para pedir ajuda.",
                examples: [
                    { word: "頼む (tanomu)", wordMeaning: "Pedir / Solicitar", sentence: "Shigoto o tanomu.", sentenceMeaning: "Pedir um trabalho." },
                    { word: "信頼 (shinrai)", wordMeaning: "Confiança", sentence: "Shinrai o etoku.", sentenceMeaning: "Conquistar a confiança." }
                ]
            },
            {
                character: "雇",
                meaning: "Empregar / Contratar",
                kunyomi: "やと・う (yatou)",
                onyomi: "コ (KO)",
                mnemonic: "Porta (戸) aberta para receber novos contratados.",
                examples: [
                    { word: "雇用 (koyou)", wordMeaning: "Emprego / Contratação", sentence: "Koyou o fuyasu.", sentenceMeaning: "Aumentar as contratações." },
                    { word: "解雇 (kaiko)", wordMeaning: "Demissão", sentence: "Kaiko sareru.", sentenceMeaning: "Ser demitido." }
                ]
            },
            {
                character: "企",
                meaning: "Planejar / Empreender",
                kunyomi: "くわだ・てる (kuwadateru)",
                onyomi: "キ (KI)",
                mnemonic: "Pessoas reunidas sob o mesmo teto planejando negócios.",
                examples: [
                    { word: "企業 (kigyou)", wordMeaning: "Empresa / Corporação", sentence: "Kigyou o oen suru.", sentenceMeaning: "Apoiar a empresa." },
                    { word: "企画 (kikaku)", wordMeaning: "Planejamento / Projeto", sentence: "Kikaku o tateru.", sentenceMeaning: "Formular um projeto." }
                ]
            },
            {
                character: "業",
                meaning: "Negócio / Indústria / Trabalho",
                kunyomi: "わざ (waza)",
                onyomi: "ギョウ (GYOU) / ゴウ (GOU)",
                mnemonic: "Tábua de madeira onde se executam tarefas e negócios.",
                examples: [
                    { word: "残業 (zangyou)", wordMeaning: "Hora extra", sentence: "Zangyou o suru.", sentenceMeaning: "Fazer hora extra." },
                    { word: "産業 (sangyou)", wordMeaning: "Indústria", sentence: "Sangyou no phát triển.", sentenceMeaning: "Desenvolvimento da indústria." }
                ]
            },
            {
                character: "営",
                meaning: "Gerenciar / Operar / Acampamento",
                kunyomi: "いとな・む (itonamu)",
                onyomi: "エイ (EI)",
                mnemonic: "Luzes acesas no prédio comercial durante a operação.",
                examples: [
                    { word: "営業 (eigyou)", wordMeaning: "Vendas / Funcionamento", sentence: "Eigyou chuu.", sentenceMeaning: "Aberto para funcionamento." },
                    { word: "経営 (keiei)", wordMeaning: "Gestão de negócios", sentence: "Keiei o benkyou suru.", sentenceMeaning: "Estudar gestão." }
                ]
            },
            {
                character: "勤",
                meaning: "Trabalhar afincadamente / Servir",
                kunyomi: "つと・める (tsutomeru)",
                onyomi: "キン (KIN) / ゴン (GON)",
                mnemonic: "Força (力) dedicada ao trabalho diário na empresa.",
                examples: [
                    { word: "通勤 (tsuukin)", wordMeaning: "Ida ao trabalho", sentence: "Densha de tsuukin suru.", sentenceMeaning: "Ir ao trabalho de trem." },
                    { word: "勤勉 (kinben)", wordMeaning: "Diligente / Esforçado", sentence: "Kinben na shain.", sentenceMeaning: "Funcionário diligente." }
                ]
            },
            {
                character: "労",
                meaning: "Trabalho duro / Esforço / Recompensar",
                kunyomi: "ねぎら・う (negirau)",
                onyomi: "ロウ (ROU)",
                mnemonic: "Esforço prestado sob o suor do trabalho físico.",
                examples: [
                    { word: "労働 (roudou)", wordMeaning: "Trabalho / Labor", sentence: "Roudou jikan.", sentenceMeaning: "Horas de trabalho." },
                    { word: "苦労 (kurou)", wordMeaning: "Dificuldades / Esforço duro", sentence: "Kurou o kakeru.", sentenceMeaning: "Causar preocupações/trabalho." }
                ]
            },
            {
                character: "給",
                meaning: "Salário / Fornecer / Pagar",
                kunyomi: "たま・う (tamau)",
                onyomi: "キュウ (KYUU)",
                mnemonic: "Fios (糸) unindo pagamentos e salários regulares.",
                examples: [
                    { word: "給料 (kyuuryou)", wordMeaning: "Salário", sentence: "Kyuuryou o morau.", sentenceMeaning: "Receber o salário." },
                    { word: "供給 (kyoukyuu)", wordMeaning: "Fornecimento / Oferta", sentence: "Kyoukyuu o suru.", sentenceMeaning: "Fazer o fornecimento." }
                ]
            },
            {
                character: "役",
                meaning: "Serviço / Papel / Utilidade",
                kunyomi: "つと・める (tsutomeru)",
                onyomi: "ヤク (YAKU) / エキ (EKI)",
                mnemonic: "Pessoas executando seus papéis na organização.",
                examples: [
                    { word: "役立つ (yakudatsu)", wordMeaning: "Ser útil", sentence: "Shigoto ni yakudatsu.", sentenceMeaning: "Ser útil no trabalho." },
                    { word: "役員 (yakuin)", wordMeaning: "Diretor / Executivo", sentence: "Yakuin kaigi.", sentenceMeaning: "Reunião da diretoria." }
                ]
            },
            {
                character: "認",
                meaning: "Reconhecer / Aprovar / Admitir",
                kunyomi: "みと・める (mitomeru)",
                onyomi: "ニン (NIN)",
                mnemonic: "Palavras (言) e faca selando a aprovação oficial.",
                examples: [
                    { word: "認める (mitomeru)", wordMeaning: "Reconhecer / Aprovar", sentence: "Shinraiku o mitomeru.", sentenceMeaning: "Reconhecer o mérito." },
                    { word: "承認 (shounin)", wordMeaning: "Aprovação oficial", sentence: "Shounin o morau.", sentenceMeaning: "Obter aprovação." }
                ]
            },
            {
                character: "任",
                meaning: "Confiar / Encarregar / Cargo",
                kunyomi: "まか・せる (makaseru)",
                onyomi: "ニン (NIN)",
                mnemonic: "Pessoa (亻) carregando a responsabilidade do cargo.",
                examples: [
                    { word: "任せる (makaseru)", wordMeaning: "Encarregar / Confiar a", sentence: "Shigoto o makaseru.", sentenceMeaning: "Encarregar o trabalho." },
                    { word: "責任 (sekinin)", wordMeaning: "Responsabilidade", sentence: "Sekinin o motsu.", sentenceMeaning: "Assumir a responsabilidade." }
                ]
            },
            {
                character: "辞",
                meaning: "Demitir-se / Dicionário / Palavra",
                kunyomi: "や・める (yameru)",
                onyomi: "ジ (JI)",
                mnemonic: "Língua e palavras formais proferidas na demissão.",
                examples: [
                    { word: "辞書 (jisho)", wordMeaning: "Dicionário", sentence: "Jisho o hiku.", sentenceMeaning: "Consultar o dicionário." },
                    { word: "辞職 (jishoku)", wordMeaning: "Demissão do cargo", sentence: "Jishoku suru.", sentenceMeaning: "Demitir-se do cargo." }
                ]
            },
            {
                character: "技",
                meaning: "Técnica / Habilidade / Habilidade profissional",
                kunyomi: "わざ (waza)",
                onyomi: "ギ (GI)",
                mnemonic: "Mão (扌) treinada executando a técnica profissional.",
                examples: [
                    { word: "技術 (gijutsu)", wordMeaning: "Tecnologia / Técnica", sentence: "Gijutsu o shinka suru.", sentenceMeaning: "Evoluir a tecnologia." },
                    { word: "特技 (tokugi)", wordMeaning: "Habilidade especial", sentence: "Tokugi o kakutei.", sentenceMeaning: "Confirmar habilidade especial." }
                ]
            },
            {
                character: "術",
                meaning: "Arte / Método / Técnica",
                kunyomi: "すべ (sube)",
                onyomi: "ジュツ (JUTSU)",
                mnemonic: "Caminho percorrido com habilidade técnica.",
                examples: [
                    { word: "手術 (shujutsu)", wordMeaning: "Cirurgia", sentence: "Shujutsu o ukeru.", sentenceMeaning: "Submeter-se a uma cirurgia." },
                    { word: "芸術 (geijutsu)", wordMeaning: "Arte", sentence: "Geijutsu no sakuhin.", sentenceMeaning: "Obra de arte." }
                ]
            },
            {
                character: "昇",
                meaning: "Subir / Ser promovido / Elevar",
                kunyomi: "のぼ・る (noboru)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Sol (日) subindo ao céu indicando promoção no trabalho.",
                examples: [
                    { word: "昇進 (shoushin)", wordMeaning: "Promoção de cargo", sentence: "Shoushin o suru.", sentenceMeaning: "Ser promovido." },
                    { word: "昇給 (shoukyuu)", wordMeaning: "Aumento salarial", sentence: "Shoukyuu o request.", sentenceMeaning: "Solicitar aumento salarial." }
                ]
            },
            {
                character: "届",
                meaning: "Entregar / Notificar / Chegar",
                kunyomi: "とど・ける (todokeru) / とど・く (todoku)",
                onyomi: "トド (TODO)",
                mnemonic: "Corpo trazendo o documento até a porta.",
                examples: [
                    { word: "届ける (todokeru)", wordMeaning: "Entregar / Notificar", sentence: "Dokumento o todokeru.", sentenceMeaning: "Entregar o documento." },
                    { word: "欠席届 (kessekitodoke)", wordMeaning: "Aviso de falta", sentence: "Kessekitodoke o dasu.", sentenceMeaning: "Entregar aviso de falta." }
                ]
            },
            {
                character: "申",
                meaning: "Declarar / Dizer / Solicitar",
                kunyomi: "もう・す (mousu)",
                onyomi: "シン (SHIN)",
                mnemonic: "Linha reta expressando uma declaração formal.",
                examples: [
                    { word: "申し込む (moushikomu)", wordMeaning: "Inscrever-se / Solicitar", sentence: "Kouza ni moushikomu.", sentenceMeaning: "Inscrever-se no curso." },
                    { word: "申請 (shinsei)", wordMeaning: "Requerimento / Solicitação", sentence: "Visa no shinsei.", sentenceMeaning: "Requerimento do visto." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 残業 (zangyou)?", options: ["Hora extra", "Salário", "Demissão", "Férias"], a: 0 },
            { q: "Traduza 給料 (kyuuryou):", options: ["Salário", "Projeto", "Empresa", "Chefe"], a: 0 },
            { q: "Kunyomi de 頼む:", options: ["たの・む (tanomu)", "やと・う", "つと・める", "みと・める"], a: 0 },
            { q: "Onyomi de 職 (Emprego):", options: ["ショク (SHOKU)", "ギョウ", "ニン", "ライ"], a: 0 },
            { q: "O que significa 責任 (sekinin)?", options: ["Responsabilidade", "Dicionário", "Aumento salarial", "Reunião"], a: 0 },
            { q: "Qual o kanji de 辞書 (jisho - Dicionário)?", options: ["辞", "申", "届", "役"], a: 0 },
            { q: "Traduza 申し込む (moushikomu):", options: ["Inscrever-se / Solicitar", "Demitir-se", "Trabalhar duro", "Parar"], a: 0 },
            { q: "Qual o kanji de 昇進 (shoushin - Promoção)?", options: ["昇", "給", "勤", "雇"], a: 0 },
            { q: "Significado de 役立つ (yakudatsu):", options: ["Ser útil", "Ir embora", "Cancelar", "Dormir"], a: 0 },
            { q: "Complete: Visa no ______ (Requerimento do visto).", options: ["shinsei (申請)", "jisho", "zangyou", "kikaku"], a: 0 }
        ]
    },
    {
        module: 6,
        title: "Módulo 6: Comércio, Finanças e Negócios",
        description: "Estude 20 ideogramas de compras, pagamentos, bancos, taxas, prejuízos e economia doméstica/empresarial.",
        grammar: {
            title: "Expressando Proporção e Cobrança (~ni tsuki)",
            explanation: "Uso da estrutura de proporção para indicar tarifas, taxas e cobranças por unidade.",
            example: "Hitori ni tsuki 1000en.",
            translation: "Cobram-se 1000 ienes por pessoa."
        },
        readingText: {
            title: "銀行と買い物の管理 (Gestão Bancária e Compras)",
            japanese: "<ruby>銀行<rt>ぎんこう</rt></ruby>で<ruby>貯<rt>ちょ</rt></ruby>金し、<ruby>税<rt>ぜい</rt></ruby>金を<ruby>払<rt>はら</rt></ruby>います。<ruby>費<rt>ひ</rt></ruby>用を抑えて、<ruby>利<rt>り</rt></ruby><ruby>益<rt>えき</rt></ruby>を増やします。",
            romaji: "Ginkou de chokin shi, zeikin o haraimasu. Hiyou o osaete, rieki o fuyashimasu.",
            translation: "Economizo dinheiro no banco e pago os impostos. Controlo as despesas e aumento os lucros.",
            comprehensionQuiz: [
                {
                    q: "O que a pessoa faz no banco (銀行)?", options: ["Economiza dinheiro e paga impostos (貯金して税金を払う)", "Vende roupas", "Faz cirurgia", "Pinta quadros"], a: 0
                },
                {
                    q: "Qual a leitura de 利益?", options: ["りえき (rieki)", "ちょきん", "ぜいきん", "ひよう"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "費",
                meaning: "Despesa / Custo / Gastar",
                kunyomi: "つい・やす (tsuiyasu)",
                onyomi: "ヒ (HI)",
                mnemonic: "Conchas preciosas (貝) gasta-se em pagamentos.",
                examples: [
                    { word: "費用 (hiyou)", wordMeaning: "Despesas / Custos", sentence: "Hiyou ga kakarimasu.", sentenceMeaning: "Haverá custos." },
                    { word: "学費 (gakuhi)", wordMeaning: "Anuidade escolar / Propinas", sentence: "Gakuhi o harau.", sentenceMeaning: "Pagar a anuidade escolar." }
                ]
            },
            {
                character: "税",
                meaning: "Imposto / Taxa tributária",
                kunyomi: "ぜい (zei)",
                onyomi: "ゼイ (ZEI)",
                mnemonic: "Grãos (禾) colhidos entregues ao governo como imposto.",
                examples: [
                    { word: "税金 (zeikin)", wordMeaning: "Imposto", sentence: "Zeikin o harau.", sentenceMeaning: "Pagar impostos." },
                    { word: "消費税 (shouhizei)", wordMeaning: "Imposto sobre consumo (IVA)", sentence: "Shouhizei ga agaru.", sentenceMeaning: "O imposto sobre consumo subiu." }
                ]
            },
            {
                character: "貯",
                meaning: "Economizar / Poupar / Guardar",
                kunyomi: "た・める (tameru) / た・まる (tamaru)",
                onyomi: "チョ (CHO)",
                mnemonic: "Conchas de dinheiro (貝) acumuladas no cofre.",
                examples: [
                    { word: "貯金 (chokin)", wordMeaning: "Poupança / Economias", sentence: "Chokin o suru.", sentenceMeaning: "Fazer poupança." },
                    { word: "貯蓄 (chochiku)", wordMeaning: "Acúmulo de capital", sentence: "Chochiku o fuyasu.", sentenceMeaning: "Aumentar as economias." }
                ]
            },
            {
                character: "賃",
                meaning: "Aluguel / Tarifa / Salário por serviço",
                kunyomi: "ちん (chin)",
                onyomi: "チン (CHIN)",
                mnemonic: "Dinheiro (貝) pago em troca de aluguel ou serviço.",
                examples: [
                    { word: "家賃 (yachin)", wordMeaning: "Aluguel de imóvel", sentence: "Yachin o harau.", sentenceMeaning: "Pagar o aluguel." },
                    { word: "運賃 (unchin)", wordMeaning: "Tarifa de transporte", sentence: "Unchin o harau.", sentenceMeaning: "Pagar a tarifa de transporte." }
                ]
            },
            {
                character: "財",
                meaning: "Fortuna / Patrimônio / Riqueza",
                kunyomi: "たから (takara)",
                onyomi: "ザイ (ZAI) / サイ (SAI)",
                mnemonic: "Conchas e bens (貝) acumulados como patrimônio.",
                examples: [
                    { word: "財布 (saifu)", wordMeaning: "Carteira", sentence: "Saifu o kaimashita.", sentenceMeaning: "Comprei uma carteira." },
                    { word: "財産 (zaisan)", wordMeaning: "Patrimônio / Fortuna", sentence: "Zaisan o mamoru.", sentenceMeaning: "Proteger o patrimônio." }
                ]
            },
            {
                character: "価",
                meaning: "Valor / Preço / Preço fixado",
                kunyomi: "あたい (atai)",
                onyomi: "カ (KA)",
                mnemonic: "Pessoa (亻) definindo o valor monetário da mercadoria.",
                examples: [
                    { word: "価格 (kakaku)", wordMeaning: "Preço / Valor monetário", sentence: "Kakaku ga agaru.", sentenceMeaning: "O preço subiu." },
                    { word: "物価 (bukka)", wordMeaning: "Custo de vida / Preço das coisas", sentence: "Bukka ga takai.", sentenceMeaning: "O custo de vida é alto." }
                ]
            },
            {
                character: "益",
                meaning: "Lucro / Benefício / Ganho",
                kunyomi: "ます (masu)",
                onyomi: "エキ (EKI) / ヤク (YAKU)",
                mnemonic: "Prato cheio transbordando ganhos e água abundante.",
                examples: [
                    { word: "利益 (rieki)", wordMeaning: "Lucro financeiro", sentence: "Rieki o dasu.", sentenceMeaning: "Gerar lucro." },
                    { word: "益々 (masumasu)", wordMeaning: "Cada vez mais", sentence: "Masumasu genki desu.", sentenceMeaning: "Cada vez mais saudável." }
                ]
            },
            {
                character: "損",
                meaning: "Perda / Prejuízo / Danificar",
                kunyomi: "そこ・なう (sokonau) / そこ・ねる (sokoneru)",
                onyomi: "ソン (SON)",
                mnemonic: "Mão (扌) perdendo moedas valiosas.",
                examples: [
                    { word: "損害 (songai)", wordMeaning: "Prejuízo / Dano", sentence: "Songai ga arimashita.", sentenceMeaning: "Houve prejuízos." },
                    { word: "損する (sonsuru)", wordMeaning: "Ficar no prejuízo", sentence: "Kaimono de sonsuru.", sentenceMeaning: "Ficar no prejuízo nas compras." }
                ]
            },
            {
                character: "貸",
                meaning: "Emprestar / Alugar para alguém",
                kunyomi: "か・す (kasu)",
                onyomi: "タイ (TAI)",
                mnemonic: "Emprestar moedas e bens (貝) sob condição de devolução.",
                examples: [
                    { word: "貸す (kasu)", wordMeaning: "Emprestar", sentence: "Hon o kasu.", sentenceMeaning: "Emprestar o livro." },
                    { word: "賃貸 (chintai)", wordMeaning: "Locação / Aluguel de imóveis", sentence: "Chintai manshon.", sentenceMeaning: "Apartamento para alugar." }
                ]
            },
            {
                character: "借",
                meaning: "Pedir emprestado / Tomar emprestado",
                kunyomi: "か・りる (kariru)",
                onyomi: "シャク (SHAKU)",
                mnemonic: "Pessoa (亻) pegando bens emprestados temporariamente.",
                examples: [
                    { word: "借りる (kariru)", wordMeaning: "Pedir emprestado", sentence: "Money o kariru.", sentenceMeaning: "Pedir dinheiro emprestado." },
                    { word: "借金 (shakkin)", wordMeaning: "Dívida", sentence: "Shakkin o harau.", sentenceMeaning: "Pagar a dívida." }
                ]
            },
            {
                character: "納",
                meaning: "Pagar / Entregar / Armazenar",
                kunyomi: "おさ・める (osameru) / おさ・まる (osamaru)",
                onyomi: "NOU (NOU) / ナッ (NAT)",
                mnemonic: "Fios (糸) amarrando pacotes entregues para pagamento.",
                examples: [
                    { word: "納める (osameru)", wordMeaning: "Pagar (impostos/taxas)", sentence: "Zeikin o osameru.", sentenceMeaning: "Pagar impostos." },
                    { word: "納得 (nattoku)", wordMeaning: "Concordância / Compreensão", sentence: "Nattoku suru.", sentenceMeaning: "Concordar totalmente." }
                ]
            },
            {
                character: "払",
                meaning: "Pagar / Varrer / Limpar",
                kunyomi: "はら・う (harau)",
                onyomi: "フツ (FUTSU)",
                mnemonic: "Mão (扌) estendida pagando ou limpando o local.",
                examples: [
                    { word: "払う (harau)", wordMeaning: "Pagar", sentence: "Money o harau.", sentenceMeaning: "Pagar dinheiro." },
                    { word: "支払い (shiharai)", wordMeaning: "Pagamento", sentence: "Shiharai o kanryou.", sentenceMeaning: "Pagamento concluído." }
                ]
            },
            {
                character: "札",
                meaning: "Cédula de papel / Placa / Etiqueta",
                kunyomi: "ふだ (fuda)",
                onyomi: "サツ (SATSU)",
                mnemonic: "Tábua de madeira (木) recortada como etiqueta ou nota de papel.",
                examples: [
                    { word: "千円札 (sen'ensatsu)", wordMeaning: "Nota de 1000 ienes", sentence: "Sen'ensatsu o dasu.", sentenceMeaning: "Dar uma nota de 1000 ienes." },
                    { word: "名札 (nafuda)", wordMeaning: "Crachá / Etiqueta de nome", sentence: "Nafuda o tsukeru.", sentenceMeaning: "Usar crachá com o nome." }
                ]
            },
            {
                character: "額",
                meaning: "Quantia / Valor monetário / Testa",
                kunyomi: "ひたい (hitai)",
                onyomi: "ガク (GAKU)",
                mnemonic: "Cabeça (頁) com a marca ou valor escrito na testa.",
                examples: [
                    { word: "金額 (kingaku)", wordMeaning: "Quantia em dinheiro", sentence: "Kingaku o kakunin.", sentenceMeaning: "Confirmar a quantia em dinheiro." },
                    { word: "額 (hitai)", wordMeaning: "Testa", sentence: "Hitai o naderu.", sentenceMeaning: "Passar a mão na testa." }
                ]
            },
            {
                character: "販",
                meaning: "Vender / Comercializar",
                kunyomi: "はん (han)",
                onyomi: "ハン (HAN)",
                mnemonic: "Bens e conchas (貝) expostos na banca de vendas.",
                examples: [
                    { word: "販売 (hanbai)", wordMeaning: "Venda / Comercialização", sentence: "Ticket no hanbai.", sentenceMeaning: "Venda de ingressos." },
                    { word: "自動販売機 (jidouhanbaiki)", wordMeaning: "Máquina de venda automática (Vending Machine)", sentence: "Jidouhanbaiki de drink o buy.", sentenceMeaning: "Comprar bebida na máquina automática." }
                ]
            },
            {
                character: "買",
                meaning: "Comprar",
                kunyomi: "か・う (kau)",
                onyomi: "バイ (BAI)",
                mnemonic: "Rede e moedas (貝) usadas para adquirir produtos.",
                examples: [
                    { word: "買う (kau)", wordMeaning: "Comprar", sentence: "Hon o kaimasu.", sentenceMeaning: "Compro um livro." },
                    { word: "買い物 (kaimono)", wordMeaning: "Compras", sentence: "Kaimono ni iku.", sentenceMeaning: "Ir fazer compras." }
                ]
            },
            {
                character: "得",
                meaning: "Obter / Lucrar / Ganhar",
                kunyomi: "え・る (eru) / う・る (uru)",
                onyomi: "トク (TOKU)",
                mnemonic: "Caminhar e conquistar moedas obtendo vantagens.",
                examples: [
                    { word: "得する (tokusuru)", wordMeaning: "Levar vantagem / Lucrar", sentence: "Kaimono de tokusuru.", sentenceMeaning: "Levar vantagem nas compras." },
                    { word: "得点 (tokuten)", wordMeaning: "Pontuação / Pontos marcados", sentence: "High tokuten.", sentenceMeaning: "Pontuação alta." }
                ]
            },
            {
                character: "割",
                meaning: "Dividir / Desconto / Proporção",
                kunyomi: "わ・る (waru) / わり (wari) / わる (waru)",
                onyomi: "カツ (KATSU)",
                mnemonic: "Faca (刂) cortando o produto em partes proporcionais.",
                examples: [
                    { word: "割引 (waribiki)", wordMeaning: "Desconto", sentence: "2-wari biki no fuku.", sentenceMeaning: "Roupa com 20% de desconto." },
                    { word: "割合 (wariai)", wordMeaning: "Proporção / Porcentagem", sentence: "High wariai.", sentenceMeaning: "Alta proporção." }
                ]
            },
            {
                character: "提",
                meaning: "Apresentar / Propor / Carregar na mão",
                kunyomi: "さ・げる (sageru)",
                onyomi: "テイ (TEI)",
                mnemonic: "Mão (扌) segurando um documento para propor à mesa.",
                examples: [
                    { word: "提案 (teian)", wordMeaning: "Proposta / Sugestão", sentence: "Atarashii teian.", sentenceMeaning: "Uma nova proposta." },
                    { word: "提出 (teishutsu)", wordMeaning: "Entrega / Apresentação de documento", sentence: "Report o teishutsu suru.", sentenceMeaning: "Entregar o relatório." }
                ]
            },
            {
                character: "預",
                meaning: "Depositar / Custodiar / Guardar",
                kunyomi: "あず・ける (azukeru) / あず・かる (azukaru)",
                onyomi: "ヨ (YO)",
                mnemonic: "Entregar objetos de valor à cabeça da instituição para guarda.",
                examples: [
                    { word: "預ける (azukeru)", wordMeaning: "Depositar / Confiar a", sentence: "Ginkou ni money o azukeru.", sentenceMeaning: "Depositar dinheiro no banco." },
                    { word: "預金 (yokin)", wordMeaning: "Depósito bancário", sentence: "Yokin desu.", sentenceMeaning: "É um depósito bancário." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 家賃 (yachin)?", options: ["Aluguel de imóvel", "Imposto sobre consumo", "Suco de fruta", "Desconto"], a: 0 },
            { q: "Traduza 税金 (zeikin):", options: ["Imposto", "Carteira", "Poupança", "Cédula"], a: 0 },
            { q: "Kunyomi de 払う:", options: ["はら・う (harau)", "か・す", "か・りる", "おさ・める"], a: 0 },
            { q: "Onyomi de 財 (Fortuna):", options: ["ザイ (ZAI)", "ヒ", "チョ", "チン"], a: 0 },
            { q: "O que significa 自動販売機 (jidouhanbaiki)?", options: ["Máquina de venda automática", "Caixa eletrônico", "Banco central", "Carteira digital"], a: 0 },
            { q: "Qual o kanji de 財布 (saifu - Carteira)?", options: ["財", "賃", "費", "額"], a: 0 },
            { q: "Traduza 割引 (waribiki):", options: ["Desconto", "Imposto", "Empréstimo", "Prejuízo"], a: 0 },
            { q: "Qual o kanji de 提案 (teian - Proposta)?", options: ["提", "預", "得", "納"], a: 0 },
            { q: "Significado de 貯金 (chokin):", options: ["Poupança / Economias", "Prejuízo", "Despesa", "Aluguel"], a: 0 },
            { q: "Complete: Report o ______ (Entregar o relatório).", options: ["teishutsu suru (提出)", "azukeru", "sakeru", "harau"], a: 0 }
        ]
    },
    {
        module: 7,
        title: "Módulo 7: Saúde, Medicina e Sintomas",
        description: "Estude 20 ideogramas de doenças, sintomas clínicos, remédios, anatomia e tratamentos.",
        grammar: {
            title: "Expressando Causa Médica (~de / ~ni yori)",
            explanation: "No N3, explicam-se motivos de faltas e sintomas físicos através das partículas de causa médica de indisposição.",
            example: "Byouki de yasumimasu.",
            translation: "Falto por motivo de doença."
        },
        readingText: {
            title: "病院での診察と治療 (Consulta e Tratamento no Hospital)",
            japanese: "<ruby>熱<rt>ねつ</rt></ruby>があって<ruby>頭<rt>あたま</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>いので、<ruby>病院<rt>びょういん</rt></ruby>で<ruby>診<rt>しん</rt></ruby>察を受けます。<ruby>医師<rt>いし</rt></ruby>から<ruby>薬<rt>くすり</rt></ruby>をもらって<ruby>安静<rt>あんせい</rt></ruby>にします。",
            romaji: "Netsu ga atte atama ga itai node, byouin de shinsatsu o ukemasu. Ishi kara kusuri o moratte ansei ni shimasu.",
            translation: "Como estou com febre e dor de cabeça, passo por uma consulta no hospital. Recebo o remédio do médico e fico em repouso.",
            comprehensionQuiz: [
                {
                    q: "Por que a pessoa vai ao hospital (病院)?", options: ["Está com febre e dor de cabeça (熱があって頭が痛い)", "Quer comprar roupas", "Vai viajar", "Vai trabalhar"], a: 0
                },
                {
                    q: "Qual a leitura de 薬?", options: ["くすり (kusuri)", "ねつ", "いた・い", "いし"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "治",
                meaning: "Curar / Tratar / Governar",
                kunyomi: "なお・る (naoru) / なお・す (naosu)",
                onyomi: "ジ (JI) / チ (CHI)",
                mnemonic: "Água (氵) e paz ordenadas pelo governo para curar as feridas.",
                examples: [
                    { word: "治療 (chiryou)", wordMeaning: "Tratamento médico", sentence: "Chiryou o tsuzukeru.", sentenceMeaning: "Continuar o tratamento médico." },
                    { word: "政治 (seiji)", wordMeaning: "Política", sentence: "Seiji no nyuusu.", sentenceMeaning: "Notícias de política." }
                ]
            },
            {
                character: "薬",
                meaning: "Remédio / Medicamento",
                kunyomi: "くすり (kusuri)",
                onyomi: "ヤク (YAKU)",
                mnemonic: "Ervas medicinais (艹) que trazem alegria e cura ao corpo.",
                examples: [
                    { word: "薬局 (yakkyoku)", wordMeaning: "Farmácia", sentence: "Yakkyoku de kusuri o kaimasu.", sentenceMeaning: "Compro remédio na farmácia." },
                    { word: "風邪薬 (kazegusuri)", wordMeaning: "Remédio para resfriado", sentence: "Kazegusuri o nomu.", sentenceMeaning: "Tomar remédio para resfriado." }
                ]
            },
            {
                character: "歯",
                meaning: "Dente",
                kunyomi: "は (ha)",
                onyomi: "シ (SHI)",
                mnemonic: "Fileiras de dentes alinhados dentro da boca.",
                examples: [
                    { word: "歯医者 (haisha)", wordMeaning: "Dentista", sentence: "Haisha ni iku.", sentenceMeaning: "Ir ao dentista." },
                    { word: "虫歯 (mushiba)", wordMeaning: "Cárie dentária", sentence: "Mushiba o治す.", sentenceMeaning: "Tratar uma cárie." }
                ]
            },
            {
                character: "傷",
                meaning: "Ferida / Machucado / Cicatriz",
                kunyomi: "きず (kizu) / いた・む (itamu)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Pessoa (亻) ferida sofrendo corte no corpo.",
                examples: [
                    { word: "傷口 (kizuguchi)", wordMeaning: "Abertura da ferida", sentence: "Kizuguchi o消毒.", sentenceMeaning: "Desinfetar a ferida." },
                    { word: "重傷 (juushou)", wordMeaning: "Ferimento grave", sentence: "Juushou o oowu.", sentenceMeaning: "Sofrer ferimentos graves." }
                ]
            },
            {
                character: "患",
                meaning: "Adoecer / Paciente / Enfermidade",
                kunyomi: "わずら・う (wazurau)",
                onyomi: "カン (KAN)",
                mnemonic: "Coração (心) empalado por dor e enfermidade.",
                examples: [
                    { word: "患者 (kanja)", wordMeaning: "Paciente médico", sentence: "Kanja o診察.", sentenceMeaning: "Examinar o paciente." },
                    { word: "疾患 (shikkan)", wordMeaning: "Enfermidade / Doença", sentence: "Shinzou shikkan.", sentenceMeaning: "Enfermidade cardíaca." }
                ]
            },
            {
                character: "命",
                meaning: "Vida / Destino / Ordem",
                kunyomi: "いのち (inochi)",
                onyomi: "メイ (MEI) / ミョウ (MYOU)",
                mnemonic: "Boca (口) declarando a ordem vital da vida humana.",
                examples: [
                    { word: "生命 (seimei)", wordMeaning: "Vida / Existência", sentence: "Seimei o mamoru.", sentenceMeaning: "Proteger a vida." },
                    { word: "命令 (meirei)", wordMeaning: "Ordem / Comando", sentence: "Meirei ni shitagau.", sentenceMeaning: "Obedecer à ordem." }
                ]
            },
            {
                character: "救",
                meaning: "Salvar / Socorrer / Resgatar",
                kunyomi: "すく・う (sukuu)",
                onyomi: "キュウ (KYUU)",
                mnemonic: "Mão estendida resgatando a pessoa do perigo.",
                examples: [
                    { word: "救急車 (kyuukyuusha)", wordMeaning: "Ambulância", sentence: "Kyuukyuusha o yobu.", sentenceMeaning: "Chamar uma ambulância." },
                    { word: "救助 (kyuujo)", wordMeaning: "Resgate / Socorro", sentence: "Kyuujo katsudou.", sentenceMeaning: "Atividades de resgate." }
                ]
            },
            {
                character: "療",
                meaning: "Tratamento médico / Cura",
                kunyomi: "りょう (ryou)",
                onyomi: "リョウ (RYOU)",
                mnemonic: "Enfermidade (疒) recebendo cuidados intensivos de cura.",
                examples: [
                    { word: "医療 (iryou)", wordMeaning: "Cuidados médicos / Medicina", sentence: "Iryou system.", sentenceMeaning: "Sistema médico." },
                    { word: "療養 (ryouyou)", wordMeaning: "Recuperação / Convalescença", sentence: "Ryouyou chuu.", sentenceMeaning: "Em período de convalescença." }
                ]
            },
            {
                character: "診",
                meaning: "Examinar / Diagnosticar",
                kunyomi: "み・る (miru)",
                onyomi: "シン (SHIN)",
                mnemonic: "Palavras (言) e exame minucioso para dar o diagnóstico.",
                examples: [
                    { word: "診察 (shinsatsu)", wordMeaning: "Consulta médica", sentence: "Shinsatsu o ukeru.", sentenceMeaning: "Passar por consulta médica." },
                    { word: "健康診断 (kenkoushindan)", wordMeaning: "Check-up de saúde", sentence: "Kenkoushindan o ukeru.", sentenceMeaning: "Fazer check-up de saúde." }
                ]
            },
            {
                character: "毒",
                meaning: "Veneno / Toxina / Nocivo",
                kunyomi: "どく (doku)",
                onyomi: "ドク (DOKU)",
                mnemonic: "Erva daninha (艹) mãe de toxinas perigosas.",
                examples: [
                    { word: "消毒 (shoudoku)", wordMeaning: "Desinfecção / Esterilização", sentence: "Te o shoudoku suru.", sentenceMeaning: "Desinfetar as mãos." },
                    { word: "中毒 (chuudoku)", wordMeaning: "Intoxicação / Vício", sentence: "Shokuchuudoku.", sentenceMeaning: "Intoxicação alimentar." }
                ]
            },
            {
                character: "汗",
                meaning: "Suor",
                kunyomi: "あせ (ase)",
                onyomi: "カン (KAN)",
                mnemonic: "Gotas de água (氵) expelidas pelos poros da pele.",
                examples: [
                    { word: "汗をかく (ase o kaku)", wordMeaning: "Suar", sentence: "Sports de ase o kaku.", sentenceMeaning: "Suar fazendo esportes." },
                    { word: "発汗 (hakkan)", wordMeaning: "Transpiração", sentence: "Hakkan作用.", sentenceMeaning: "Ação de transpiração." }
                ]
            },
            {
                character: "吐",
                meaning: "Vomitar / Cuspir / Exalar",
                kunyomi: "は・く (haku)",
                onyomi: "ト (TO)",
                mnemonic: "Boca (口) expelindo fluidos corporais.",
                examples: [
                    { word: "吐く (haku)", wordMeaning: "Vomitar / Cuspir", sentence: "Kibun ga warukute haku.", sentenceMeaning: "Vomitar por estar passando mal." },
                    { word: "吐き気 (hakike)", wordMeaning: "Nausea / Enjoo", sentence: "Hakike ga suru.", sentenceMeaning: "Sentir náusea." }
                ]
            },
            {
                character: "咳",
                meaning: "Tosse",
                kunyomi: "せき (seki)",
                onyomi: "ガイ (GAI)",
                mnemonic: "Boca (口) tossindo repetidamente por irritação na garganta.",
                examples: [
                    { word: "咳が出る (seki ga deru)", wordMeaning: "Estar com tosse", sentence: "Seki ga deru.", sentenceMeaning: "Estar com tosse." },
                    { word: "咳止め (sekidome)", wordMeaning: "Remédio para tosse", sentence: "Sekidome o nomu.", sentenceMeaning: "Tomar remédio para tosse." }
                ]
            },
            {
                character: "熱",
                meaning: "Febre / Calor / Entusiasmo",
                kunyomi: "あつ・い (atsui)",
                onyomi: "ネツ (NETSU)",
                mnemonic: "Fogo (灬) por baixo aquecendo e elevando a temperatura.",
                examples: [
                    { word: "発熱 (hatsunetsu)", wordMeaning: "Aumento de febre", sentence: "Hatsunetsu ga arimasu.", sentenceMeaning: "Houve febre." },
                    { word: "熱心 (nesshin)", wordMeaning: "Entusiasmado / Dedicado", sentence: "Nesshin ni benkyou.", sentenceMeaning: "Estudar com dedicação." }
                ]
            },
            {
                character: "眠",
                meaning: "Dormir / Sono",
                kunyomi: "ねむ・る (nemuru) / ねむ・い (nemui)",
                onyomi: "ミン (MIN)",
                mnemonic: "Olhos (目) fechados entrando no estado de sono.",
                examples: [
                    { word: "眠い (nemui)", wordMeaning: "Sonolento", sentence: "Konban wa nemui desu.", sentenceMeaning: "Estou com sono esta noite." },
                    { word: "睡眠 (suimin)", wordMeaning: "Sono / Repouso", sentence: "Suimin jikan.", sentenceMeaning: "Horas de sono." }
                ]
            },
            {
                character: "胃",
                meaning: "Estômago",
                kunyomi: "い (i)",
                onyomi: "イ (I)",
                mnemonic: "Órgão de carne (月) que processa os alimentos na barriga.",
                examples: [
                    { word: "胃痛 (itsuu)", wordMeaning: "Dor de estômago", sentence: "Itsuu ga suru.", sentenceMeaning: "Sentir dor de estômago." },
                    { word: "胃腸 (ichou)", wordMeaning: "Estômago e intestinos", sentence: "Ichou no kusuri.", sentenceMeaning: "Remédio para estômago e intestino." }
                ]
            },
            {
                character: "腸",
                meaning: "Intestino",
                kunyomi: "はらわた (harawata)",
                onyomi: "チョウ (CHOU)",
                mnemonic: "Órgão interno de carne (月) em formato tubular.",
                examples: [
                    { word: "大腸 (daichou)", wordMeaning: "Intestino grosso", sentence: "Daichou no kensa.", sentenceMeaning: "Exame do intestino grosso." },
                    { word: "小腸 (shouchou)", wordMeaning: "Intestino delgado", sentence: "Shouchou no fungsi.", sentenceMeaning: "Função do intestino delgado." }
                ]
            },
            {
                character: "骨",
                meaning: "Osso / Esqueleto / Estrutura",
                kunyomi: "ほね (hone)",
                onyomi: "コツ (KOTS)",
                mnemonic: "Estrutura óssea rígida que sustenta o corpo humano.",
                examples: [
                    { word: "骨折 (kossetsu)", wordMeaning: "Fratura óssea", sentence: "Ashi no kossetsu.", sentenceMeaning: "Fratura na perna." },
                    { word: "背骨 (sebone)", wordMeaning: "Coluna vertebral", sentence: "Sebone o伸ばす.", sentenceMeaning: "Endireitar a coluna." }
                ]
            },
            {
                character: "症",
                meaning: "Sintoma / Enfermidade clínica",
                kunyomi: "しょう (shou)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Doença (疒) manifestando sintomas no corpo do paciente.",
                examples: [
                    { word: "症状 (shoujou)", wordMeaning: "Sintomas clínicos", sentence: "Shoujou ga kaizen suru.", sentenceMeaning: "Os sintomas melhoraram." },
                    { word: "重症 (juushou)", wordMeaning: "Estado grave de saúde", sentence: "Juushou no kanja.", sentenceMeaning: "Paciente em estado grave." }
                ]
            },
            {
                character: "脈",
                meaning: "Pulso / Veia / Conexão",
                kunyomi: "みゃく (myaku)",
                onyomi: "ミャク (MYAKU)",
                mnemonic: "Corpo (月) com fluxo sanguíneo correndo pelas veias.",
                examples: [
                    { word: "脈はかる (myaku o hakaru)", wordMeaning: "Medir a pulsação", sentence: "Myaku o hakaru.", sentenceMeaning: "Medir a pulsação." },
                    { word: "文脈 (bunmyaku)", wordMeaning: "Contexto", sentence: "Bunmyaku o yomu.", sentenceMeaning: "Ler o contexto." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 救急車 (kyuukyuusha)?", options: ["Ambulância", "Carro de polícia", "Remédio", "Dentista"], a: 0 },
            { q: "Traduza 症状 (shoujou):", options: ["Sintomas clínicos", "Dentes", "Suor", "Osso"], a: 0 },
            { q: "Kunyomi de 薬:", options: ["くすり (kusuri)", "ほね", "あせ", "は"], a: 0 },
            { q: "Onyomi de 治 (Curar):", options: ["チ (CHI) / ジ (JI)", "ネツ", "MIN", "KAN"], a: 0 },
            { q: "O que significa 消毒 (shoudoku)?", options: ["Desinfecção / Esterilização", "Fratura", "Febre alta", "Consulta"], a: 0 },
            { q: "Qual o kanji de 歯医者 (haisha - Dentista)?", options: ["歯", "骨", "胃", "腸"], a: 0 },
            { q: "Traduza 骨折 (kossetsu):", options: ["Fratura óssea", "Dor de cabeça", "Tosse", "Suor"], a: 0 },
            { q: "Qual o kanji de 熱 (netsu - Febre)?", options: ["熱", "毒", "患", "傷"], a: 0 },
            { q: "Significado de 睡眠 (suimin):", options: ["Sono / Repouso", "Fome", "Medicina", "Cirurgia"], a: 0 },
            { q: "Complete: Te o ______ (Desinfetar as mãos).", options: ["shoudoku suru (消毒)", "saku", "haku", "nureru"], a: 0 }
        ]
    },
    {
        module: 8,
        title: "Módulo 8: Educação, Ciência e Tecnologia",
        description: "Estude 20 ideogramas de pesquisas acadêmicas, experimentos, matérias escolares e tecnologia.",
        grammar: {
            title: "Expressando Conclusão de Pesquisa (~ni tsuite)",
            explanation: "Estrutura usada para definir o objeto ou tema de uma investigação acadêmica ou tecnológica.",
            example: "Kagaku ni tsuite kenkyuu shimasu.",
            translation: "Pesquiso sobre ciência."
        },
        readingText: {
            title: "科学の実験と証明 (Experimento e Prova na Ciência)",
            japanese: "<ruby>大学<rt>だいがく</rt></ruby>で新しい<ruby>技術<rt>ぎじゅつ</rt></ruby>を<ruby>研<rt>けん</rt></ruby><ruby>究<rt>きゅう</rt></ruby>し、<ruby>実<rt>じっ</rt></ruby><ruby>験<rt>けん</rt></ruby>を重ねて仮説を<ruby>証<rt>しょう</rt></ruby><ruby>明<rt>めい</rt></ruby>します。",
            romaji: "Daigaku de atarashii gijutsu o kenkyuu shi, jikken o kasanete kasetsu o shoumei shimasu.",
            translation: "Na universidade, pesquisamos novas tecnologias, acumulamos experimentos e provamos as hipóteses.",
            comprehensionQuiz: [
                {
                    q: "O que é feito na universidade (大学)?", options: ["Pesquisam-se novas tecnologias e provam-se hipóteses (技術を研究して証明する)", "Vendem-se carros", "Faz-se comida", "Dorme-se a aula toda"], a: 0
                },
                {
                    q: "Qual a leitura de 実験?", options: ["じっけん (jikken)", "けんきゅう", "しょうめい", "ぎじゅつ"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "研",
                meaning: "Pesquisar / Afiar / Polir",
                kunyomi: "と・ぐ (togu)",
                onyomi: "ケン (KEN)",
                mnemonic: "Pedra (石) afiada e polida para o estudo de precisão.",
                examples: [
                    { word: "研究 (kenkyuu)", wordMeaning: "Pesquisa / Estudo acadêmico", sentence: "Kenkyuu o tsuzukeru.", sentenceMeaning: "Continuar a pesquisa." },
                    { word: "研修 (kenshuu)", wordMeaning: "Treinamento / Estágio técnico", sentence: "Kenshuu o ukeru.", sentenceMeaning: "Fazer um treinamento." }
                ]
            },
            {
                character: "究",
                meaning: "Aprofundar / Investigar / Levar ao limite",
                kunyomi: "きわ・める (kiwameru)",
                onyomi: "キュウ (KYUU)",
                mnemonic: "Caverna e nove caminhos investigados até o fim.",
                examples: [
                    { word: "究める (kiwameru)", wordMeaning: "Aprofundar-se ao máximo", sentence: "Gakumon o kiwameru.", sentenceMeaning: "Aprofundar-se nos estudos." },
                    { word: "探究 (tankyuu)", wordMeaning: "Busca / Investigação", sentence: "Truth no tankyuu.", sentenceMeaning: "Busca da verdade." }
                ]
            },
            {
                character: "科",
                meaning: "Disciplina / Matéria / Departamento científico",
                kunyomi: "か (ka)",
                onyomi: "カ (KA)",
                mnemonic: "Grãos (禾) pesados e medidos por departamentos.",
                examples: [
                    { word: "科学 (kagaku)", wordMeaning: "Ciência", sentence: "Kagaku no jikken.", sentenceMeaning: "Experimento de ciência." },
                    { word: "教科書 (kyoukasho)", wordMeaning: "Livro didático", sentence: "Kyoukasho o yomu.", sentenceMeaning: "Ler o livro didático." }
                ]
            },
            {
                character: "実",
                meaning: "Fato / Fruto / Realidade / Prática",
                kunyomi: "み (mi) / み・のる (minoru)",
                onyomi: "ジツ (JITSU)",
                mnemonic: "Teto abrigando frutos colhidos e riqueza real.",
                examples: [
                    { word: "事実 (jijitsu)", wordMeaning: "Fato real", sentence: "Jijitsu o tsutaeru.", sentenceMeaning: "Transmitir o fato real." },
                    { word: "実行 (jikkou)", wordMeaning: "Execução / Prática", sentence: "Plan o jikkou suru.", sentenceMeaning: "Executar o plano." }
                ]
            },
            {
                character: "験",
                meaning: "Testar / Verificar / Experiência",
                kunyomi: "ため・す (tamesu)",
                onyomi: "ケン (KEN) / ゲン (GEN)",
                mnemonic: "Cavalo e autoridade verificando a eficácia do teste.",
                examples: [
                    { word: "試験 (shiken)", wordMeaning: "Exame / Prova", sentence: "Shiken ni合格 suru.", sentenceMeaning: "Passar no exame." },
                    { word: "経験 (keiken)", wordMeaning: "Experiência de vida", sentence: "Keiken o tsumu.", sentenceMeaning: "Acumular experiência." }
                ]
            },
            {
                character: "測",
                meaning: "Medir / Estimar / Sondar",
                kunyomi: "はか・る (hakaru)",
                onyomi: "ソク (SOKU)",
                mnemonic: "Água (氵) e régua de precisão cortando o nível exato.",
                examples: [
                    { word: "測定 (sokutei)", wordMeaning: "Medição / Aferição", sentence: "Data o sokutei suru.", sentenceMeaning: "Medir os dados." },
                    { word: "予測 (yosoku)", wordMeaning: "Previsão / Estimativa", sentence: "Future no yosoku.", sentenceMeaning: "Previsão do futuro." }
                ]
            },
            {
                character: "試",
                meaning: "Testar / Tentar / Ensaio",
                kunyomi: "こころ・みる (kokoromiru) / ため・す (tamesu)",
                onyomi: "シ (SHI)",
                mnemonic: "Palavras (言) e regras testadas na prática.",
                examples: [
                    { word: "試す (tamesu)", wordMeaning: "Testar / Experimentar", sentence: "Atarashii method o tamesu.", sentenceMeaning: "Testar um novo método." },
                    { word: "試合 (shiai)", wordMeaning: "Partida / Jogo esportivo", sentence: "Shiai ni katsu.", sentenceMeaning: "Vencer a partida." }
                ]
            },
            {
                character: "論",
                meaning: "Tese / Discutir / Argumentar",
                kunyomi: "ろん (ron)",
                onyomi: "ロン (RON)",
                mnemonic: "Palavras (言) organizadas em tese lógica coerente.",
                examples: [
                    { word: "論文 (ronbun)", wordMeaning: "Artigo acadêmico / Tese", sentence: "Ronbun o kaku.", sentenceMeaning: "Escrever um artigo acadêmico." },
                    { word: "議論 (giron)", wordMeaning: "Debate / Discussão", sentence: "Giron o suru.", sentenceMeaning: "Fazer um debate." }
                ]
            },
            {
                character: "題",
                meaning: "Tema / Título / Questão / Problema",
                kunyomi: "だい (dai)",
                onyomi: "ダイ (DAI)",
                mnemonic: "Topo da página (頁) indicando o título do problema.",
                examples: [
                    { word: "宿題 (shukudai)", wordMeaning: "Dever de casa", sentence: "Shukudai o suru.", sentenceMeaning: "Fazer o dever de casa." },
                    { word: "問題 (mondai)", wordMeaning: "Problema / Questão", sentence: "Mondai o解く.", sentenceMeaning: "Resolver a questão." }
                ]
            },
            {
                character: "考",
                meaning: "Pensar / Considerar / Ideia",
                kunyomi: "かんが・える (kangaeru)",
                onyomi: "コウ (KOU)",
                mnemonic: "Ancião apoiado em sua bengala refletindo em pensamentos.",
                examples: [
                    { word: "考える (kangaeru)", wordMeaning: "Pensar / Refletir", sentence: "Imi o kangaeru.", sentenceMeaning: "Pensar no significado." },
                    { word: "思考 (shikou)", wordMeaning: "Pensamento / Raciocínio", sentence: "Shikou ryoku.", sentenceMeaning: "Capacidade de raciocínio." }
                ]
            },
            {
                character: "述",
                meaning: "Descrever / Relatar / Declarar",
                kunyomi: "の・べる (noberu)",
                onyomi: "ジュツ (JUTSU)",
                mnemonic: "Passos na estrada transmitindo o relato verbal.",
                examples: [
                    { word: "述べる (noberu)", wordMeaning: "Relatar / Declarar", sentence: "Iken o noberu.", sentenceMeaning: "Declarar sua opinião." },
                    { word: "記述 (kijutsu)", wordMeaning: "Descrição / Redação", sentence: "Kijutsu shiki.", sentenceMeaning: "Formato descritivo." }
                ]
            },
            {
                character: "表",
                meaning: "Expressar / Superfície / Tabela",
                kunyomi: "おもて (omote) / あらわ・す (arawasu)",
                onyomi: "ヒョウ (HYOU)",
                mnemonic: "Vestimenta exposta ao público mostrando a superfície.",
                examples: [
                    { word: "発表 (happyou)", wordMeaning: "Anúncio / Apresentação pública", sentence: "Research no happyou.", sentenceMeaning: "Apresentação da pesquisa." },
                    { word: "表 (omote)", wordMeaning: "Lado da frente / Superfície", sentence: "Omote no page.", sentenceMeaning: "Página da frente." }
                ]
            },
            {
                character: "報",
                meaning: "Informar / Notícia / Recompensa",
                kunyomi: "むく・いる (mukuiru)",
                onyomi: "ホウ (HOU)",
                mnemonic: "Mãos e ordens oficiais comunicando a notícia.",
                examples: [
                    { word: "報告 (houkoku)", wordMeaning: "Relatório / Informar", sentence: "Boss ni houkoku suru.", sentenceMeaning: "Fazer relatório ao chefe." },
                    { word: "情報 (jouhou)", wordMeaning: "Informação / Dados", sentence: "Atarashii jouhou.", sentenceMeaning: "Novas informações." }
                ]
            },
            {
                character: "録",
                meaning: "Gravar / Registrar / Anotar",
                kunyomi: "ろく (roku)",
                onyomi: "ロク (ROKU)",
                mnemonic: "Metal (金) esculpido registrando os dados permanentemente.",
                examples: [
                    { word: "記録 (kiroku)", wordMeaning: "Registro / Recorde", sentence: "Kiroku o tsukeru.", sentenceMeaning: "Fazer o registro." },
                    { word: "録音 (rokuon)", wordMeaning: "Gravação de áudio", sentence: "Koe o rokuon suru.", sentenceMeaning: "Gravar a voz." }
                ]
            },
            {
                character: "証",
                meaning: "Provar / Certificado / Evidência",
                kunyomi: "あかし (akashi)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Palavras (言) corretas e corretivas que provam a verdade.",
                examples: [
                    { word: "証明 (shoumei)", wordMeaning: "Prova / Demonstração", sentence: "Kasetsu no shoumei.", sentenceMeaning: "Prova da hipótese." },
                    { word: "証明書 (shoumeisho)", wordMeaning: "Certificado oficial", sentence: "Shoumeisho o issuance.", sentenceMeaning: "Emitir certificado." }
                ]
            },
            {
                character: "明",
                meaning: "Claro / Brilhante / Esclarecer",
                kunyomi: "あか・るい (akarui) / あき・らか (akiraka)",
                onyomi: "メイ (MEI) / ミョウ (MYOU)",
                mnemonic: "Sol (日) e lua (月) juntos iluminando com clareza.",
                examples: [
                    { word: "説明 (setsumei)", wordMeaning: "Explicação", sentence: "Setsumei o yoku yomu.", sentenceMeaning: "Ler bem a explicação." },
                    { word: "発明 (hatsumei)", wordMeaning: "Invenção", sentence: "Atarashii hatsumei.", sentenceMeaning: "Nova invenção." }
                ]
            },
            {
                character: "覚",
                meaning: "Lembrar / Recordar / Despertar",
                kunyomi: "おぼ・える (oboeru) / さ・める (sameru)",
                onyomi: "カク (KAKU)",
                mnemonic: "Visão sob o teto percebendo a luz do despertar.",
                examples: [
                    { word: "覚える (oboeru)", wordMeaning: "Memorizar / Lembrar", sentence: "Kanji o oboeru.", sentenceMeaning: "Memorizar ideogramas." },
                    { word: "感覚 (kankaku)", wordMeaning: "Sensação / Sentido", sentence: "Kankaku o feel.", sentenceMeaning: "Sentir a sensação." }
                ]
            },
            {
                character: "忘",
                meaning: "Esquecer",
                kunyomi: "わす・れる (wasureru)",
                onyomi: "ボウ (BOU)",
                mnemonic: "Coração (心) de onde o pensamento desapareceu.",
                examples: [
                    { word: "忘れる (wasureru)", wordMeaning: "Esquecer", sentence: "Kasa o wasureru.", sentenceMeaning: "Esquecer o guarda-chuva." },
                    { word: "忘れ物 (wasuremono)", wordMeaning: "Objeto esquecido", sentence: "Wasuremono o todokeru.", sentenceMeaning: "Entregar objeto esquecido." }
                ]
            },
            {
                character: "算",
                meaning: "Calcular / Contar / Matemática",
                kunyomi: "さん (san)",
                onyomi: "サン (SAN)",
                mnemonic: "Bambu e ábaco usados para efetuar cálculos matemáticos.",
                examples: [
                    { word: "計算 (keisan)", wordMeaning: "Cálculo", sentence: "Keisan o suru.", sentenceMeaning: "Fazer o cálculo." },
                    { word: "予算 (yosan)", wordMeaning: "Orçamento", sentence: "Yosan o kimeru.", sentenceMeaning: "Definir o orçamento." }
                ]
            },
            {
                character: "易",
                meaning: "Fácil / Simples / Trocar",
                kunyomi: "やさ・しい (yasashii)",
                onyomi: "エキ (EKI) / イ (I)",
                mnemonic: "Camaleão sob o sol mudando de cor facilmente.",
                examples: [
                    { word: "容易 (youi)", wordMeaning: "Fácil / Sem complicação", sentence: "Youi ni kaku.", sentenceMeaning: "Escrever facilmente." },
                    { word: "貿易 (boueki)", wordMeaning: "Comércio internacional", sentence: "Boueki kaisha.", sentenceMeaning: "Companhia de comércio exterior." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 論文 (ronbun)?", options: ["Artigo acadêmico / Tese", "Dever de casa", "Experimento", "Orçamento"], a: 0 },
            { q: "Traduza 報告 (houkoku):", options: ["Relatório / Informar", "Invenção", "Cálculo", "Certificado"], a: 0 },
            { q: "Kunyomi de 覚える:", options: ["おぼ・える (oboeru)", "わす・れる", "かんが・える", "ため・す"], a: 0 },
            { q: "Onyomi de 実 (Fato / Realidade):", options: ["ジツ (JITSU)", "ケン", "ソク", "ロン"], a: 0 },
            { q: "O que significa 忘れる (wasureru)?", options: ["Esquecer", "Memorizar", "Pesquisar", "Provar"], a: 0 },
            { q: "Qual o kanji de 宿題 (shukudai - Dever de casa)?", options: ["題", "論", "科", "算"], a: 0 },
            { q: "Traduza 証明 (shoumei):", options: ["Prova / Demonstração", "Experimento", "Explicação", "Treinamento"], a: 0 },
            { q: "Qual o kanji de 予算 (yosan - Orçamento)?", options: ["算", "易", "験", "測"], a: 0 },
            { q: "Significado de 発表 (happyou):", options: ["Apresentação pública / Anúncio", "Artigo", "Suor", "Medição"], a: 0 },
            { q: "Complete: Kanji o ______ (Memorizar os ideogramas).", options: ["oboeru (覚える)", "wasureru", "sakeru", "noberu"], a: 0 }
        ]
    },
    {
        module: 9,
        title: "Módulo 9: Clima, Desastres Naturais e Meteorologia",
        description: "Estude 20 ideogramas de fenômenos climáticos, temperatura, tempestades, abalos sísmicos e prevenção.",
        grammar: {
            title: "Expressando Previsão (~sou da / ~yohou)",
            explanation: "Indicação de previsões meteorológicas e fenômenos da natureza baseados em sinais visuais.",
            example: "Ame ga furi-sou desu.",
            translation: "Parece que vai chover."
        },
        readingText: {
            title: "天気予報と防災 (Previsão do Tempo e Prevenção de Desastres)",
            japanese: "<ruby>気象庁<rt>きしょうちょう</rt></ruby>の<ruby>予報<rt>よほう</rt></ruby>によると、強い<ruby>台風<rt>たいふう</rt></ruby>が接近し大<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ります。<ruby>津波<rt>つなみ</rt></ruby>や<ruby>洪水<rt>こうずい</rt></ruby>に<ruby>警戒<rt>けいかい</rt></ruby>が必要です。",
            romaji: "Kishouchou no yohou ni yoru to, tsuyoi taifuu ga sekkin shi ooame ga furimasu. Tsunami ya kouzui ni keikai ga hitsuyou desu.",
            translation: "De acordo com a previsão da Agência Meteorológica, um forte tufão se aproxima trazendo chuva intensa. É necessário estar alerta para tsunamis e inundações.",
            comprehensionQuiz: [
                {
                    q: "O que se aproxima segundo a Agência Meteorológica?", options: ["Um forte tufão com chuva intensa (強い台風和大雨)", "Neve leve", "Sol forte", "Nenhum vento"], a: 0
                },
                {
                    q: "Qual a leitura de 津波?", options: ["つなみ (tsunami)", "たいふう", "こうずい", "よほう"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "波",
                meaning: "Onda / Vaga",
                kunyomi: "なみ (nami)",
                onyomi: "ハ (HA)",
                mnemonic: "Água (氵) formando cristas e oscilações no mar.",
                examples: [
                    { word: "津波 (tsunami)", wordMeaning: "Maremoto / Tsunami", sentence: "Tsunami ni keikai.", sentenceMeaning: "Alerta para tsunami." },
                    { word: "電波 (denpa)", wordMeaning: "Onda eletromagnética / Sinal", sentence: "Denpa ga tsuyoi.", sentenceMeaning: "O sinal está forte." }
                ]
            },
            {
                character: "津",
                meaning: "Porto / Porto marítimo / Tsunami",
                kunyomi: "つ (tsu)",
                onyomi: "シン (SHIN)",
                mnemonic: "Ancoradouro de água onde as ondas marinhas chegam.",
                examples: [
                    { word: "津々浦々 (tsutsura-ura-ura)", wordMeaning: "Por todos os cantos do país", sentence: "Tsutsura-ura-ura ni hirogaru.", sentenceMeaning: "Espalhar-se por todos os cantos." },
                    { word: "天津 (tenshin)", wordMeaning: "Tenshin (nome de local)", sentence: "Tenshin no keshiki.", sentenceMeaning: "Paisagem de Tenshin." }
                ]
            },
            {
                character: "震",
                meaning: "Treme / Terremoto / Abatar",
                kunyomi: "ふる・える (furueru) / ふる・う (furuu)",
                onyomi: "シン (SHIN)",
                mnemonic: "Chuva (雨) caindo com a terra sacudindo violentamente.",
                examples: [
                    { word: "地震 (jishin)", wordMeaning: "Terremoto", sentence: "Jishin ga okoru.", sentenceMeaning: "Ocorrer um terremoto." },
                    { word: "震度 (shindo)", wordMeaning: "Intensidade sísmica", sentence: "Shindo 5 no jishin.", sentenceMeaning: "Terremoto de intensidade 5." }
                ]
            },
            {
                character: "暴",
                meaning: "Violento / Fúria / Tempestade",
                kunyomi: "あば・れる (abareru)",
                onyomi: "BOU (BOU) / BAKU (BAKU)",
                mnemonic: "Sol e força descontrolada destruindo o ambiente.",
                examples: [
                    { word: "暴風 (boufuu)", wordMeaning: "Vento tempestuoso / Vendaval", sentence: "Boufuu uta.", sentenceMeaning: "Vendaval violento." },
                    { word: "乱暴 (ranbou)", wordMeaning: "Violento / Sem educação", sentence: "Ranbou na behavior.", sentenceMeaning: "Comportamento violento." }
                ]
            },
            {
                character: "崩",
                meaning: "Desmoronar / Ruir / Derrocada",
                kunyomi: "くず・れる (kuzureru) / くず・す (kuzusu)",
                onyomi: "ホウ (HOU)",
                mnemonic: "Montanha (山) ruindo com pedras despencando.",
                examples: [
                    { word: "崩れる (kuzureru)", wordMeaning: "Desmoronar / Ruir", sentence: "Yama ga kuzureru.", sentenceMeaning: "A montanha desmoronou." },
                    { word: "崩壊 (houkai)", wordMeaning: "Colapso / Desmoronamento", sentence: "Tatemono no houkai.", sentenceMeaning: "Colapso do edifício." }
                ]
            },
            {
                character: "湿",
                meaning: "Umidade / Úmido / Molhado",
                kunyomi: "しめ・る (shimeru) / しめ・す (shimesu)",
                onyomi: "シツ (SHITSU)",
                mnemonic: "Água (氵) e sol aquecendo gerando mormaço e umidade.",
                examples: [
                    { word: "湿度 (shitsudo)", wordMeaning: "Umidade relativa do ar", sentence: "Shitsudo ga takai.", sentenceMeaning: "A umidade está alta." },
                    { word: "湿気 (shikki)", wordMeaning: "Mormaço / Ar úmido", sentence: "Shikki o feel.", sentenceMeaning: "Sentir ar úmido." }
                ]
            },
            {
                character: "乾",
                meaning: "Seco / Secar / Árido",
                kunyomi: "かわ・く (kawaku) / かわ・かす (kawakasu)",
                onyomi: "カン (KAN)",
                mnemonic: "Sol forte secando a terra e evaporando a água.",
                examples: [
                    { word: "乾燥 (kansou)", wordMeaning: "Seca / Aridez", sentence: "Kansou shita kankyou.", sentenceMeaning: "Ambiente seco." },
                    { word: "乾電池 (kandenshi)", wordMeaning: "Pilha seca", sentence: "Kandenshi o kaeru.", sentenceMeaning: "Trocar as pilhas secas." }
                ]
            },
            {
                character: "雷",
                meaning: "Trovão / Raio / Relâmpago",
                kunyomi: "かみなり (kaminari)",
                onyomi: "ライ (RAI)",
                mnemonic: "Chuva (雨) e campos (田) cortados pela descarga elétrica.",
                examples: [
                    { word: "雷 (kaminari)", wordMeaning: "Trovão / Raio", sentence: "Kaminari ga naru.", sentenceMeaning: "O trovão ressoa." },
                    { word: "落雷 (rakurai)", wordMeaning: "Queda de raio", sentence: "Rakurai ni注意.", sentenceMeaning: "Cuidado com a queda de raios." }
                ]
            },
            {
                character: "零",
                meaning: "Zero / Nulo / Gotas miúdas",
                kunyomi: "ぜろ (zero) / こぼ・れる (koboreru)",
                onyomi: "レイ (REI)",
                mnemonic: "Chuva (雨) caindo em gotas tão pequenas que parecem nulas.",
                examples: [
                    { word: "零下 (reika)", wordMeaning: "Abaixo de zero (temperatura)", sentence: "Reika 5-do.", sentenceMeaning: "5 graus abaixo de zero." },
                    { word: "零点 (reiten)", wordMeaning: "Nota zero", sentence: "Reiten o morau.", sentenceMeaning: "Tirar nota zero." }
                ]
            },
            {
                character: "泉",
                meaning: "Fonte / Nascente de água",
                kunyomi: "いずみ (izumi)",
                onyomi: "セン (SEN)",
                mnemonic: "Água branca (白+水) jorrando cristalina da nascente.",
                examples: [
                    { word: "温泉 (onsen)", wordMeaning: "Fonte termal", sentence: "Onsen ni hairu.", sentenceMeaning: "Entrar na fonte termal." },
                    { word: "源泉 (gensen)", wordMeaning: "Nascente da fonte", sentence: "Onsen no gensen.", sentenceMeaning: "Nascente da fonte termal." }
                ]
            },
            {
                character: "炭",
                meaning: "Carvão / Carbono",
                kunyomi: "すみ (sumi)",
                onyomi: "タン (TAN)",
                mnemonic: "Madeira da montanha (山) queimada pelo fogo (火) virando carvão.",
                examples: [
                    { word: "石炭 (sekitan)", wordMeaning: "Carvão mineral", sentence: "Sekitan o燃やす.", sentenceMeaning: "Queimar carvão mineral." },
                    { word: "木炭 (mokutan)", wordMeaning: "Carvão vegetal", sentence: "Mokutan de barbecue.", sentenceMeaning: "Churrasco com carvão vegetal." }
                ]
            },
            {
                character: "寒",
                meaning: "Frio do clima / Gelado",
                kunyomi: "さむ・い (samui)",
                onyomi: "カン (KAN)",
                mnemonic: "Pessoa dentro de casa coberta com palha para fugir do frio rigoroso.",
                examples: [
                    { word: "寒い (samui)", wordMeaning: "Frio (clima)", sentence: "Kyou wa samui desu.", sentenceMeaning: "Hoje está frio." },
                    { word: "寒波 (kanpa)", wordMeaning: "Onda de frio intenso", sentence: "Kanpa ga arrival.", sentenceMeaning: "Chegada de uma onda de frio." }
                ]
            },
            {
                character: "暖",
                meaning: "Agradável / Clima aquecido",
                kunyomi: "あたた・かい (atatakai) / あたた・まる (atatamaru)",
                onyomi: "ダン (DAN)",
                mnemonic: "Sol (日) aquecendo o ambiente com temperatura agradável.",
                examples: [
                    { word: "暖房 (danbou)", wordMeaning: "Aquecedor / Calefação", sentence: "Danbou o tsukeru.", sentenceMeaning: "Ligar o aquecedor." },
                    { word: "温暖化 (ondanka)", wordMeaning: "Aquecimento global", sentence: "Chikyuu ondanka.", sentenceMeaning: "Aquecimento global." }
                ]
            },
            {
                character: "燥",
                meaning: "Secar / Aridez / Ressecado",
                kunyomi: "はしゃ・ぐ (hashagu)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Fogo (火) secando totalmente a umidade do ar.",
                examples: [
                    { word: "乾燥 (kansou)", wordMeaning: "Secura / Aridez", sentence: "Kansou chuuihou.", sentenceMeaning: "Alerta de ar seco." },
                    { word: "乾燥機 (kansouki)", wordMeaning: "Secadora de roupas", sentence: "Kansouki o tsukau.", sentenceMeaning: "Usar a secadora de roupas." }
                ]
            },
            {
                character: "吹",
                meaning: "Soprar / Vento forte",
                kunyomi: "ふ・く (fuku)",
                onyomi: "スイ (SUI)",
                mnemonic: "Boca (口) assoprando ar com força.",
                examples: [
                    { word: "吹く (fuku)", wordMeaning: "Soprar (vento)", sentence: "Kaze ga fuku.", sentenceMeaning: "O vento soprou." },
                    { word: "吹雪 (hubuki)", wordMeaning: "Tempestade de neve / Ventania com neve", sentence: "Hubuki de sora ga white.", sentenceMeaning: "O céu ficou branco com a tempestade de neve." }
                ]
            },
            {
                character: "降",
                meaning: "Cair (chuva/neve) / Descer de veículo",
                kunyomi: "ふ・る (furu) / お・りる (oriru)",
                onyomi: "コウ (KOU)",
                mnemonic: "Passos descendo a colina sob chuva caindo.",
                examples: [
                    { word: "降る (furu)", wordMeaning: "Cair (chuva/neve)", sentence: "Ame ga furu.", sentenceMeaning: "A chuva cai." },
                    { word: "降車 (kousha)", wordMeaning: "Desembarque de veículo", sentence: "Kousha guchi.", sentenceMeaning: "Porta de desembarque." }
                ]
            },
            {
                character: "祈",
                meaning: "Rezar / Orar / Desejar proteção",
                kunyomi: "いの・る (inoru)",
                onyomi: "キ (KI)",
                mnemonic: "Altar sagrado (礻) de oração para afastar os desastres.",
                examples: [
                    { word: "祈る (inoru)", wordMeaning: "Rezar / Orar", sentence: "Anzen o inoru.", sentenceMeaning: "Rezar pela segurança." },
                    { word: "祈願 (kigan)", wordMeaning: "Prece / Oração formal", sentence: "Kigan o suru.", sentenceMeaning: "Fazer uma prece." }
                ]
            },
            {
                character: "防",
                meaning: "Prevenir / Proteger / Defender",
                kunyomi: "ふせ・ぐ (fusegu)",
                onyomi: "ボウ (BOU)",
                mnemonic: "Muralha na colina erguida para prevenir invasões e desastres.",
                examples: [
                    { word: "防災 (bousai)", wordMeaning: "Prevenção de desastres", sentence: "Bousai訓練.", sentenceMeaning: "Treinamento de prevenção de desastres." },
                    { word: "防ぐ (fusegu)", wordMeaning: "Evitar / Prevenir", sentence: "Jiko o fusegu.", sentenceMeaning: "Prevenir acidentes." }
                ]
            },
            {
                character: "霜",
                meaning: "Geada / Cristal de gelo",
                kunyomi: "しも (shimo)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Chuva (雨) congelada sobre a vegetação como geada.",
                examples: [
                    { word: "霜 (shimo)", wordMeaning: "Geada", sentence: "Shimo ga降りる.", sentenceMeaning: "A geada caiu." },
                    { word: "霜降り (shimofuri)", wordMeaning: "Marmoreio (gordura na carne)", sentence: "Shimofuri niku.", sentenceMeaning: "Carne marmorizada." }
                ]
            },
            {
                character: "霧",
                meaning: "Névoa / Neblina / Cerração",
                kunyomi: "きり (kiri)",
                onyomi: "ム (MU)",
                mnemonic: "Chuva (雨) em forma de névoa cobrindo a visibilidade da tarefa.",
                examples: [
                    { word: "霧 (kiri)", wordMeaning: "Névoa / Neblina", sentence: "Kiri ga kakarimasu.", sentenceMeaning: "A névoa cobriu o local." },
                    { word: "濃霧 (noumu)", wordMeaning: "Neblina densa", sentence: "Noumu chuuihou.", sentenceMeaning: "Alerta de neblina densa." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 地震 (jishin)?", options: ["Terremoto", "Tsunami", "Trovão", "Aquecedor"], a: 0 },
            { q: "Traduza 降る (furu):", options: ["Cair (chuva/neve)", "Secar", "Soprar", "Rezar"], a: 0 },
            { q: "Kunyomi de 寒い:", options: ["さむ・い (samui)", "あたた・かい", "かわ・く", "ふ・く"], a: 0 },
            { q: "Onyomi de 湿度 (Umidade):", options: ["シツ (SHITSU)", "KAN", "BOU", "DAN"], a: 0 },
            { q: "O que significa 防災 (bousai)?", options: ["Prevenção de desastres", "Carvão mineral", "Aquecimento global", "Geada"], a: 0 },
            { q: "Qual o kanji de 温泉 (onsen - Fonte termal)?", options: ["泉", "波", "津", "雷"], a: 0 },
            { q: "Traduza 乾燥機 (kansouki):", options: ["Secadora de roupas", "Aquecedor de sala", "Máquina de suco", "Pilha seca"], a: 0 },
            { q: "Qual o kanji de 祈る (inoru - Rezar)?", options: ["祈", "降", "防", "崩"], a: 0 },
            { q: "Significado de 暖房 (danbou):", options: ["Aquecedor / Calefação", "Onda de frio", "Chuva", "Névoa"], a: 0 },
            { q: "Complete: Jiko o ______ (Prevenir acidentes).", options: ["fusegu (防ぐ)", "furu", "inoru", "kuzusu"], a: 0 }
        ]
    },
    {
        module: 10,
        title: "Módulo 10: Geografia, Relevo e Países",
        description: "Estude 20 ideogramas de regiões, continentes, relevo, fronteiras, ilhas e demografia.",
        grammar: {
            title: "Expressando Localização Ampla (~ni okeru)",
            explanation: "Estrutura formal N3 para indicar contextos geográficos e territoriais de grande escala.",
            example: "Kono chiiki ni okeru kikou.",
            translation: "O clima prevalecente nesta região."
        },
        readingText: {
            title: "日本の地理と自然 (Geografia e Natureza do Japão)",
            japanese: "日本は多くの<ruby>島<rt>しま</rt></ruby>からなる<ruby>島国<rt>しまぐに</rt></ruby>です。高い<ruby>山脈<rt>さんみゃく</rt></ruby>や美しい<ruby>海岸<rt>かいがん</rt></ruby>線があり、<ruby>地域<rt>ちいき</rt></ruby>ごとに気候が異なります。",
            romaji: "Nihon wa ooku no shima kara naru shimaguni desu. Takai sanmyaku ya kirei na kaigansen ga ari, chiiki goto ni kikou ga kotonarimasu.",
            translation: "O Japão é um país insular formado por muitas ilhas. Possui altas cadeias de montanhas e belas linhas de costa, e o clima varia de região para região.",
            comprehensionQuiz: [
                {
                    q: "Como o Japão é caracterizado no texto?", options: ["País insular formado por muitas ilhas (多くの島からなる島国)", "Um grande continente sem montanhas", "Um deserto sem água", "Uma ilha sem praias"], a: 0
                },
                {
                    q: "Qual a leitura de 海岸?", options: ["かいがん (kaigan)", "ちいき", "さんみゃく", "しまぐに"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "域",
                meaning: "Região / Área / Zona delimitada",
                kunyomi: "いき (iki)",
                onyomi: "イキ (IKI)",
                mnemonic: "Terra (土) murada e demarcada por fronteiras territoriais.",
                examples: [
                    { word: "地域 (chiiki)", wordMeaning: "Região / Área local", sentence: "Chiiki no festival.", sentenceMeaning: "Festival da região." },
                    { word: "区域 (kuiki)", wordMeaning: "Zona / Distrito demarcado", sentence: "Kinen kuiki.", sentenceMeaning: "Zona proibida para fumar." }
                ]
            },
            {
                character: "陸",
                meaning: "Terra firme / Continente / Terrestre",
                kunyomi: "おか (oka)",
                onyomi: "リク (RIKU)",
                mnemonic: "Colina (阝) e plano elevado formando terra firme.",
                examples: [
                    { word: "大陸 (tairiku)", wordMeaning: "Continente", sentence: "Asian tairiku.", sentenceMeaning: "Continente asiático." },
                    { word: "陸上 (rikujou)", wordMeaning: "Atletismo / Terrestre", sentence: "Rikujou競技.", sentenceMeaning: "Esportes terrestres/atletismo." }
                ]
            },
            {
                character: "坂",
                meaning: "Ladeira / Aclive / Rampa",
                kunyomi: "さか (saka)",
                onyomi: "ハン (HAN)",
                mnemonic: "Terra (土) inclinada em ladeira.",
                examples: [
                    { word: "坂道 (sakamichi)", wordMeaning: "Caminho em ladeira", sentence: "Sakamichi o noboru.", sentenceMeaning: "Subir a ladeira." },
                    { word: "上り坂 (noborizaka)", wordMeaning: "Ladeira acima / Aclive", sentence: "Noborizaka ga tsuduku.", sentenceMeaning: "A ladeira acima continua." }
                ]
            },
            {
                character: "湾",
                meaning: "Baía / Golfo",
                kunyomi: "わん (wan)",
                onyomi: "ワン (WAN)",
                mnemonic: "Água (氵) curvada formando uma baía no litoral.",
                examples: [
                    { word: "東京湾 (toukyouwan)", wordMeaning: "Baía de Tóquio", sentence: "Toukyouwan no fune.", sentenceMeaning: "Navio na Baía de Tóquio." },
                    { word: "湾岸 (wangan)", wordMeaning: "Orla da baía / Zona costeira", sentence: "Wangan highway.", sentenceMeaning: "Rodovia costeira da baía." }
                ]
            },
            {
                character: "岸",
                meaning: "Margem / Costa / Praia",
                kunyomi: "きし (kishi)",
                onyomi: "ガン (GAN)",
                mnemonic: "Montanha (山) ao lado da praia formando a costa.",
                examples: [
                    { word: "海岸 (kaigan)", wordMeaning: "Litoral / Costa marítima", sentence: "Kaigan o sanpo suru.", sentenceMeaning: "Passear pela costa marítima." },
                    { word: "川岸 (kawagishi)", wordMeaning: "Margem do rio", sentence: "Kawagishi de asobu.", sentenceMeaning: "Brincar na margem do rio." }
                ]
            },
            {
                character: "谷",
                meaning: "Vale / Ravina",
                kunyomi: "たに (tani)",
                onyomi: "コク (KOKU)",
                mnemonic: "Água correndo entre as encostas da montanha formando o vale.",
                examples: [
                    { word: "谷 (tani)", wordMeaning: "Vale", sentence: "Tani no fukai keshiki.", sentenceMeaning: "Paisagem de vale profundo." },
                    { word: "渓谷 (keikoku)", wordMeaning: "Desfiladeiro / Cânion", sentence: "Keikoku no momiji.", sentenceMeaning: "Folhas de outono no desfiladeiro." }
                ]
            },
            {
                character: "砂",
                meaning: "Areia",
                kunyomi: "すな (suna)",
                onyomi: "サ (SA) / シャ (SHA)",
                mnemonic: "Pedras pequenas (石) pulverizadas como areia.",
                examples: [
                    { word: "砂浜 (sunahama)", wordMeaning: "Praia de areia", sentence: "Sunahama o aruku.", sentenceMeaning: "Caminhar na praia de areia." },
                    { word: "砂漠 (sabaku)", wordMeaning: "Deserto", sentence: "Sabaku no camel.", sentenceMeaning: "Camelo do deserto." }
                ]
            },
            {
                character: "漠",
                meaning: "Deserto / Vasto / Vago",
                kunyomi: "ばく (baku)",
                onyomi: "バク (BAKU)",
                mnemonic: "Água (氵) ausente na vastidão do solo árido.",
                examples: [
                    { word: "砂漠 (sabaku)", wordMeaning: "Deserto", sentence: "Sabaku o tsuuka suru.", sentenceMeaning: "Atravessar o deserto." },
                    { word: "漠然 (bakuzen)", wordMeaning: "Vago / Obscuro", sentence: "Bakuzen to shita kibou.", sentenceMeaning: "Uma esperança vaga." }
                ]
            },
            {
                character: "島",
                meaning: "Ilha",
                kunyomi: "しま (shima)",
                onyomi: "トウ (TOU)",
                mnemonic: "Pássaro pousado sobre a montanha cercada por água.",
                examples: [
                    { word: "島国 (shimaguni)", wordMeaning: "País insular", sentence: "Nihon wa shimaguni desu.", sentenceMeaning: "O Japão é um país insular." },
                    { word: "半島 (hantou)", wordMeaning: "Península", sentence: "Kii hantou.", sentenceMeaning: "Península de Kii." }
                ]
            },
            {
                character: "境",
                meaning: "Fronteira / Limite / Divisa",
                kunyomi: "さかい (sakai)",
                onyomi: "キョウ (KYOU) / ケイ (KEI)",
                mnemonic: "Terra (土) e luz demarcando a divisa territorial.",
                examples: [
                    { word: "国境 (kokkyou)", wordMeaning: "Fronteira nacional", sentence: "Kokkyou o koeru.", sentenceMeaning: "Cruzar a fronteira nacional." },
                    { word: "環境 (kankyou)", wordMeaning: "Meio ambiente", sentence: "Kankyou o mamoru.", sentenceMeaning: "Proteger o meio ambiente." }
                ]
            },
            {
                character: "峰",
                meaning: "Pico / Cume da montanha",
                kunyomi: "みね (mine)",
                onyomi: "ホウ (HOU)",
                mnemonic: "Montanha (山) elevando-se até o pico mais alto.",
                examples: [
                    { word: "最高峰 (saikouhou)", wordMeaning: "Pico mais alto / Cume supremo", sentence: "Fuji-san wa saikouhou desu.", sentenceMeaning: "O Monte Fuji é o pico mais alto." },
                    { word: "連峰 (renpou)", wordMeaning: "Cadeia de picos / Cordilheira", sentence: "Renpou no snow.", sentenceMeaning: "Neve na cordilheira de picos." }
                ]
            },
            {
                character: "傾",
                meaning: "Inclinar / Pender / Tendência",
                kunyomi: "かたむ・く (katamuku) / かたむ・ける (katamukeru)",
                onyomi: "ケイ (KEI)",
                mnemonic: "Pessoa (亻) inclinando o corpo em aclive.",
                examples: [
                    { word: "傾向 (keikou)", wordMeaning: "Tendência / Inclinação", sentence: "Bukka de keikou ga miru.", sentenceMeaning: "Ver a tendência dos preços." },
                    { word: "傾く (katamuku)", wordMeaning: "Inclinar-se", sentence: "Tatemono ga katamuku.", sentenceMeaning: "O edifício está inclinado." }
                ]
            },
            {
                character: "沿",
                meaning: "Ao longo de / Seguir a margem",
                kunyomi: "そ・う (sou)",
                onyomi: "エン (EN)",
                mnemonic: "Água (氵) correndo ao longo do leito do rio.",
                examples: [
                    { word: "沿う (sou)", wordMeaning: "Seguir ao longo de", sentence: "Kawa ni sou.", sentenceMeaning: "Seguir ao longo do rio." },
                    { word: "沿岸 (engan)", wordMeaning: "Região costeira / Litoral", sentence: "Engan no machi.", sentenceMeaning: "Cidade ao longo da costa." }
                ]
            },
            {
                character: "央",
                meaning: "Centro / Meio central",
                kunyomi: "おう (ou)",
                onyomi: "オウ (OU)",
                mnemonic: "Pessoa no centro exato sustentando o peso central.",
                examples: [
                    { word: "中央 (chuuou)", wordMeaning: "Centro / Ponto central", sentence: "Chuuou guchi.", sentenceMeaning: "Saída central." },
                    { word: "中央集権 (chuuoushuken)", wordMeaning: "Centralização do poder", sentence: "Seifu no chuuoushuken.", sentenceMeaning: "Centralização do governo." }
                ]
            },
            {
                character: "郊",
                meaning: "Subúrbio / Arredores urbanos",
                kunyomi: "こう (kou)",
                onyomi: "コウ (KOU)",
                mnemonic: "Edifícios na colina (阝) situados fora do centro.",
                examples: [
                    { word: "郊外 (kougai)", wordMeaning: "Subúrbio / Periferia", sentence: "Kougai ni sumu.", sentenceMeaning: "Morar no subúrbio." },
                    { word: "近郊 (kinkou)", wordMeaning: "Arredores de uma metrópole", sentence: "Tokyo kinkou.", sentenceMeaning: "Arredores de Tóquio." }
                ]
            },
            {
                character: "郡",
                meaning: "Distrito rural / Condado",
                kunyomi: "ぐん (gun)",
                onyomi: "グン (GUN)",
                mnemonic: "Várias comunidades agrupadas sob a mesma jurisdição territorial.",
                examples: [
                    { word: "○○郡 (gun)", wordMeaning: "Distrito de (ex: Iwate-gun)", sentence: "Gun no village.", sentenceMeaning: "Vila do distrito." },
                    { word: "郡部 (gunbu)", wordMeaning: "Área distrital rural", sentence: "Gunbu no lifestyle.", sentenceMeaning: "Estilo de vida da zona rural." }
                ]
            },
            {
                character: "府",
                meaning: "Prefeitura governamental / Capital urbana",
                kunyomi: "ふ (fu)",
                onyomi: "フ (FU)",
                mnemonic: "Prédio sob o teto abrigando a sede do governo local.",
                examples: [
                    { word: "政府 (seifu)", wordMeaning: "Governo", sentence: "Seifu no kettei.", sentenceMeaning: "Decisão do governo." },
                    { word: "京都府 (kyoutofu)", wordMeaning: "Prefeitura de Quioto", sentence: "Kyoutofu ni iku.", sentenceMeaning: "Ir à Prefeitura de Quioto." }
                ]
            },
            {
                character: "州",
                meaning: "Estado / Província / Banco de areia",
                kunyomi: "す (su)",
                onyomi: "シュウ (SHUU)",
                mnemonic: "Ilhas de terra cercadas pelas correntes do rio.",
                examples: [
                    { word: "九州 (kyuushuu)", wordMeaning: "Kyushu (Região do Japão)", sentence: "Kyuushuu no onsen.", sentenceMeaning: "Fontes termais de Kyushu." },
                    { word: "本州 (honshuu)", wordMeaning: "Honshu (Ilha Principal do Japão)", sentence: "Honshuu no shimaguni.", sentenceMeaning: "A ilha principal de Honshu." }
                ]
            },
            {
                character: "標",
                meaning: "Sinal / Marco / Objetivo / Etiqueta",
                kunyomi: "しるべ (shirube)",
                onyomi: "ヒョウ (HYOU)",
                mnemonic: "Estrutura de madeira (木) indicando um marco de estrada.",
                examples: [
                    { word: "目標 (mokuhyou)", wordMeaning: "Meta / Objetivo", sentence: "Mokuhyou o tateru.", sentenceMeaning: "Estabelecer uma meta." },
                    { word: "標高 (hyoukou)", wordMeaning: "Altitude em relação ao mar", sentence: "Hyoukou 3000m.", sentenceMeaning: "Altitude de 3000 metros." }
                ]
            },
            {
                character: "沖",
                meaning: "Mar aberto / Alto-mar",
                kunyomi: "おき (oki)",
                onyomi: "チュウ (CHUU)",
                mnemonic: "Água (氵) distante da costa no meio do oceano.",
                examples: [
                    { word: "沖 (oki)", wordMeaning: "Alto-mar / Mar aberto", sentence: "Oki ni fune ga dasu.", sentenceMeaning: "O navio saiu para o alto-mar." },
                    { word: "沖縄 (okinawa)", wordMeaning: "Okinawa (Província)", sentence: "Okinawa no sea.", sentenceMeaning: "O mar de Okinawa." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 島国 (shimaguni)?", options: ["País insular", "Continente", "Subúrbio", "Deserto"], a: 0 },
            { q: "Traduza 目標 (mokuhyou):", options: ["Meta / Objetivo", "Fronteira", "Prefeitura", "Subúrbio"], a: 0 },
            { q: "Kunyomi de 坂:", options: ["さか (saka)", "きし", "しま", "たに"], a: 0 },
            { q: "Onyomi de 陸 (Terra firme):", options: ["リク (RIKU)", "GAN", "KOKU", "HAN"], a: 0 },
            { q: "O que significa 国境 (kokkyou)?", options: ["Fronteira nacional", "Baía de Tóquio", "Pico da montanha", "Ilha principal"], a: 0 },
            { q: "Qual o kanji de 海岸 (kaigan - Litoral)?", options: ["岸", "湾", "谷", "砂"], a: 0 },
            { q: "Traduza 中央 (chuuou):", options: ["Centro / Ponto central", "Subúrbio", "Margem", "Alto-mar"], a: 0 },
            { q: "Qual o kanji de 砂漠 (sabaku - Deserto)?", options: ["漠", "傾", "沿", "標"], a: 0 },
            { q: "Significado de 郊外 (kougai):", options: ["Subúrbio / Periferia", "Fronteira", "Centro urbano", "Ilha"], a: 0 },
            { q: "Complete: Mokuhyou o ______ (Estabelecer uma meta).", options: ["tateru (立てる)", "kasu", "sakeru", "azukeru"], a: 0 }
        ]
    },
    {
        module: 11,
        title: "Módulo 11: Animais, Plantas e Ecossistemas",
        description: "Estude 20 ideogramas de fauna, flora, preservação, agricultura, ecologia e vida selvagem.",
        grammar: {
            title: "Expressando Proteção Ambiental (~o mamoru)",
            explanation: "Estruturas gramaticais N3 voltadas para preservação da natureza e cuidados ecológicos.",
            example: "Shizen o mamorimashou.",
            translation: "Vamos proteger a natureza."
        },
        readingText: {
            title: "自然の生態系と植物 (Ecossistema Natural e Plantas)",
            japanese: "<ruby>森<rt>もり</rt></ruby>には美しい<ruby>樹木<rt>じゅもく</rt></ruby>があり、<ruby>緑<rt>みどり</rt></ruby>の<ruby>葉<rt>は</rt></ruby>が茂り、野生の<ruby>鹿<rt>しか</rt></ruby>や<ruby>馬<rt>うま</rt></ruby>が生息しています。<ruby>植物<rt>しょくぶつ</rt></ruby>の<ruby>種<rt>たね</rt></ruby>が風で運ばれます。",
            romaji: "Mori ni wa kirei na jumoku ga ari, midori no ha ga shigeri, yasei no shika ya uma ga seisoku shite imasu. Shokubutsu no tane ga kaze de hakobaremasu.",
            translation: "Na floresta há belas árvores, as folhas verdes florescem e cervos e cavalos selvagens habitam o local. As sementes das plantas são transportadas pelo vento.",
            comprehensionQuiz: [
                {
                    q: "Quais animais selvagens habitam a floresta?", options: ["Cervos e cavalos selvagens (野生の鹿や馬)", "Tubarões", "Elefantes de circo", "Dinossauros"], a: 0
                },
                {
                    q: "Qual a leitura de 植物?", options: ["しょくぶつ (shokubutsu)", "じゅもく", "たね", "せいそく"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "虫",
                meaning: "Inseto / Bicho / Verme",
                kunyomi: "むし (mushi)",
                onyomi: "チュウ (CHUU)",
                mnemonic: "Desenho estilizado de uma minhoca ou inseto no chão.",
                examples: [
                    { word: "昆虫 (konchuu)", wordMeaning: "Inseto", sentence: "Konchuu o kansatsu suru.", sentenceMeaning: "Observar os insetos." },
                    { word: "害虫 (gaichuu)", wordMeaning: "Praga de insetos", sentence: "Gaichuu o駆除.", sentenceMeaning: "Exterminar pragas de insetos." }
                ]
            },
            {
                character: "芝",
                meaning: "Relva / Gramado / Grama",
                kunyomi: "しば (shiba)",
                onyomi: "シ (SHI)",
                mnemonic: "Plantas baixas (艹) crescendo em relva no jardim.",
                examples: [
                    { word: "芝生 (shibafu)", wordMeaning: "Gramado", sentence: "Shibafu ni suwaru.", sentenceMeaning: "Sentar no gramado." },
                    { word: "芝居 (shibai)", wordMeaning: "Peça teatral / Drama", sentence: "Shibai o miru.", sentenceMeaning: "Assistir a uma peça teatral." }
                ]
            },
            {
                character: "植",
                meaning: "Plantar / Cultivar / Vegetação",
                kunyomi: "う・える (ueru) / う・わる (uwaru)",
                onyomi: "ショク (SHOKU)",
                mnemonic: "Árvore (木) ereta plantada no solo.",
                examples: [
                    { word: "植物 (shokubutsu)", wordMeaning: "Planta / Vegetal", sentence: "Shokubutsu o sodateru.", sentenceMeaning: "Cultivar plantas." },
                    { word: "植木 (ueki)", wordMeaning: "Planta de vaso / Árvore de jardim", sentence: "Ueki ni mizu o yaru.", sentenceMeaning: "Regar as plantas do jardim." }
                ]
            },
            {
                character: "畜",
                meaning: "Pecuária / Criação de animais",
                kunyomi: "ちく (chiku)",
                onyomi: "チク (CHIKU)",
                mnemonic: "Animais criados nos campos agrícolas (田).",
                examples: [
                    { word: "家畜 (kachiku)", wordMeaning: "Gado / Animais domésticos de fazenda", sentence: "Kachiku o飼う.", sentenceMeaning: "Criar gado na fazenda." },
                    { word: "畜産 (chikusan)", wordMeaning: "Pecuária / Indústria pecuária", sentence: "Chikusan no farm.", sentenceMeaning: "Fazenda de pecuária." }
                ]
            },
            {
                character: "枝",
                meaning: "Galho / Ramo",
                kunyomi: "えだ (eda)",
                onyomi: "シ (SHI)",
                mnemonic: "Madeira (木) sustentando o ramo lateral.",
                examples: [
                    { word: "小枝 (koeda)", wordMeaning: "Galho fino / Graveto", sentence: "Koeda o atsumeru.", sentenceMeaning: "Juntar gravetos." },
                    { word: "枝折 (edashiori)", wordMeaning: "Marcador de livro / Guia", sentence: "Edashiori o挟む.", sentenceMeaning: "Marcar a página com marcador." }
                ]
            },
            {
                character: "根",
                meaning: "Raiz / Origem / Base",
                kunyomi: "ね (ne)",
                onyomi: "コン (KON)",
                mnemonic: "Madeira (木) e base fixada sob o solo.",
                examples: [
                    { word: "屋根 (yane)", wordMeaning: "Telhado", sentence: "Yane no ue.", sentenceMeaning: "Em cima do telhado." },
                    { word: "根本 (nemoto)", wordMeaning: "Base / Origem", sentence: "Nemoto kara kaeru.", sentenceMeaning: "Mudar desde a base." }
                ]
            },
            {
                character: "葉",
                meaning: "Folha / Folhagem",
                kunyomi: "は (ha)",
                onyomi: "ヨウ (YOU)",
                mnemonic: "Plantas (艹) e madeira formando folhagens verdes.",
                examples: [
                    { word: "紅葉 (momiji / kouyou)", wordMeaning: "Folhas vermelhas de outono", sentence: "Momiji o miru.", sentenceMeaning: "Ver as folhas de outono." },
                    { word: "言葉 (kotoba)", wordMeaning: "Palavra / Idioma", sentence: "Atarashii kotoba.", sentenceMeaning: "Novas palavras." }
                ]
            },
            {
                character: "樹",
                meaning: "Árvore / Madeira / Cultivar",
                kunyomi: "き (ki)",
                onyomi: "ジュ (JU)",
                mnemonic: "Árvore grande (木) erguida no solo com galhos grossos.",
                examples: [
                    { word: "樹木 (jumoku)", wordMeaning: "Árvores e arbustos", sentence: "Jumoku no mori.", sentenceMeaning: "Floresta de árvores." },
                    { word: "樹立 (juritsu)", wordMeaning: "Estabelecimento / Fundação", sentence: "Kiroku no juritsu.", sentenceMeaning: "Estabelecimento de um novo recorde." }
                ]
            },
            {
                character: "象",
                meaning: "Elefante / Imagem / Fenômeno",
                kunyomi: "かたち (katachi)",
                onyomi: "ショウ (SHOU) / ジョウ (JOU)",
                mnemonic: "Desenho da tromba, dentes e corpo grande do elefante.",
                examples: [
                    { word: "象 (zou)", wordMeaning: "Elefante", sentence: "Zou no tromba ga long.", sentenceMeaning: "A tromba do elefante é longa." },
                    { word: "印象 (inshou)", wordMeaning: "Impressão", sentence: "Good inshou.", sentenceMeaning: "Boa impressão." }
                ]
            },
            {
                character: "馬",
                meaning: "Cavalo",
                kunyomi: "うま (uma) / ま (ma)",
                onyomi: "バ (BA)",
                mnemonic: "Desenho da crina, cabeça e quatro patas do cavalo correndo.",
                examples: [
                    { word: "乗馬 (jouba)", wordMeaning: "Equitação / Andar a cavalo", sentence: "Jouba o tanoshimu.", sentenceMeaning: "Apreciar andar a cavalo." },
                    { word: "競馬 (keiba)", wordMeaning: "Corrida de cavalos", sentence: "Keiba no race.", sentenceMeaning: "Corrida de cavalos." }
                ]
            },
            {
                character: "鹿",
                meaning: "Cervo / Veado",
                kunyomi: "しか (shika) / か (ka)",
                onyomi: "ロク (ROKU)",
                mnemonic: "Desenho dos chifres ramificados e pernas do cervo.",
                examples: [
                    { word: "鹿 (shika)", wordMeaning: "Cervo", sentence: "Nara no shika.", sentenceMeaning: "Os cervos de Nara." },
                    { word: "馬鹿 (baka)", wordMeaning: "Tolo / Idiota", sentence: "Baka na koto o iu-na.", sentenceMeaning: "Não diga bobagens." }
                ]
            },
            {
                character: "狂",
                meaning: "Louco / Enlouquecer / Obcecado",
                kunyomi: "くる・う (kuruu) / くる・おしい (kuruoshii)",
                onyomi: "キョウ (KYOU)",
                mnemonic: "Cão (犭) correndo descontrolado como louco.",
                examples: [
                    { word: "狂う (kuruu)", wordMeaning: "Enlouquecer / Desarrumar-se", sentence: "Tokei ga kuruu.", sentenceMeaning: "O relógio desregulou-se." },
                    { word: "熱狂 (nekkyou)", wordMeaning: "Entusiasmo louco / Frenesi", sentence: "Fan no nekkyou.", sentenceMeaning: "Frenesi dos fãs." }
                ]
            },
            {
                character: "飼",
                meaning: "Criar animais / Alimentar bichos",
                kunyomi: "か・う (kau)",
                onyomi: "シ (SHI)",
                mnemonic: "Dar comida (食) aos animais na fazenda.",
                examples: [
                    { word: "飼う (kau)", wordMeaning: "Criar (mascote/animal)", sentence: "Inu o kau.", sentenceMeaning: "Criar um cachorro." },
                    { word: "飼育 (shiiku)", wordMeaning: "Criação de animais em cativeiro", sentence: "Zou no shiiku.", sentenceMeaning: "Criação de elefantes." }
                ]
            },
            {
                character: "狩",
                meaning: "Caçar / Colher frutos",
                kunyomi: "か・る (karu) / かり (kari)",
                onyomi: "シュ (SHU)",
                mnemonic: "Cão (犭) acompanhando o caçador na floresta.",
                examples: [
                    { word: "狩り (kari)", wordMeaning: "Caça / Colheita recreativa", sentence: "Ichigo-gari ni iku.", sentenceMeaning: "Ir colher morangos." },
                    { word: "狩猟 (shuryou)", wordMeaning: "Caça oficial", sentence: "Shuryou no season.", sentenceMeaning: "Temporada de caça." }
                ]
            },
            {
                character: "漁",
                meaning: "Pescar / Pescaria / Atividade pesqueira",
                kunyomi: "あさ・る (asaru)",
                onyomi: "ギョ (GYO) / リョウ (RYOU)",
                mnemonic: "Água (氵) e peixes capturados na pescaria.",
                examples: [
                    { word: "漁師 (ryoushi)", wordMeaning: "Pescador", sentence: "Ryoushi ga umi ni dasu.", sentenceMeaning: "O pescador sai ao mar." },
                    { word: "漁業 (gyogyou)", wordMeaning: "Indústria pesqueira", sentence: "Gyogyou no machi.", sentenceMeaning: "Cidade de pesca." }
                ]
            },
            {
                character: "捕",
                meaning: "Capturar / Pegar / Prender",
                kunyomi: "と・らえる (toraeru) / つか・まえる (tsukamaeru)",
                onyomi: "ホ (HO)",
                mnemonic: "Mão (扌) estendida para agarrar a presa.",
                examples: [
                    { word: "捕まえる (tsukamaeru)", wordMeaning: "Pegar / Capturar", sentence: "Mushi o tsukamaeru.", sentenceMeaning: "Pegar insetos." },
                    { word: "逮捕 (taiho)", wordMeaning: "Prisão policial / Detenção", sentence: "Keisatsu ga taiho suru.", sentenceMeaning: "A polícia faz a prisão." }
                ]
            },
            {
                character: "種",
                meaning: "Semente / Espécie / Tipo",
                kunyomi: "たね (tane)",
                onyomi: "シュ (SHU)",
                mnemonic: "Grãos (禾) selecionados por espécie para plantio.",
                examples: [
                    { word: "種類 (shurui)", wordMeaning: "Tipo / Categoria", sentence: "Ooku no shurui.", sentenceMeaning: "Muitos tipos." },
                    { word: "種 (tane)", wordMeaning: "Semente", sentence: "Hana no tane o maku.", sentenceMeaning: "Semear sementes de flores." }
                ]
            },
            {
                character: "苗",
                meaning: "Muda de planta / Broto",
                kunyomi: "なえ (nae) / なわ (nawa)",
                onyomi: "ビョウ (BYOU)",
                mnemonic: "Brotos (艹) crescendo no campo agrícola (田).",
                examples: [
                    { word: "苗 (nae)", wordMeaning: "Muda de planta", sentence: "Kime no nae o ueru.", sentenceMeaning: "Plantar mudas de arroz." },
                    { word: "苗木 (naegi)", wordMeaning: "Muda de árvore", sentence: "Naegi o kaimasu.", sentenceMeaning: "Comprar muda de árvore." }
                ]
            },
            {
                character: "咲",
                meaning: "Florir / Desabrochar",
                kunyomi: "さ・く (saku)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Boca (口) sorrindo com o desabrochar das flores.",
                examples: [
                    { word: "咲く (saku)", wordMeaning: "Florir / Desabrochar", sentence: "Sakura ga saku.", sentenceMeaning: "As cerejeiras florescem." },
                    { word: "返り咲き (kaerizaki)", wordMeaning: "Florada fora de época / Retorno ao sucesso", sentence: "Kaerizaki no champion.", sentenceMeaning: "Retorno vitorioso do campeão." }
                ]
            },
            {
                character: "枯",
                meaning: "Murchar / Secar / Definhar",
                kunyomi: "か・れる (kareru) / か・らす (karasu)",
                onyomi: "コ (KO)",
                mnemonic: "Madeira (木) seca e velha desprovida de água.",
                examples: [
                    { word: "枯れる (kareru)", wordMeaning: "Murchar / Secar (planta)", sentence: "Hana ga kareru.", sentenceMeaning: "A flor murchou." },
                    { word: "枯葉 (kareha)", wordMeaning: "Folhas secas", sentence: "Kareha o atsumeru.", sentenceMeaning: "Juntar folhas secas." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 植物 (shokubutsu)?", options: ["Planta / Vegetal", "Inseto", "Cervo", "Gado"], a: 0 },
            { q: "Traduza 捕まえる (tsukamaeru):", options: ["Capturar / Pegar", "Plantar", "Florir", "Secar"], a: 0 },
            { q: "Kunyomi de 葉:", options: ["は (ha)", "ね", "えだ", "き"], a: 0 },
            { q: "Onyomi de 漁師 (Pescador):", options: ["RYOU (リョウ)", "SHOKU", "BA", "HO"], a: 0 },
            { q: "O que significa 咲く (saku)?", options: ["Florir / Desabrochar", "Murchar", "Caçar", "Criar gado"], a: 0 },
            { q: "Qual o kanji de 芝生 (shibafu - Gramado)?", options: ["芝", "枝", "根", "苗"], a: 0 },
            { q: "Traduza 種類 (shurui):", options: ["Tipo / Categoria", "Telhado", "Crachá", "Semeadura"], a: 0 },
            { q: "Qual o kanji de 馬 (uma - Cavalo)?", options: ["馬", "鹿", "象", "虫"], a: 0 },
            { q: "Significado de 枯れる (kareru):", options: ["Murchar / Secar", "Florir", "Navegar", "Perseguir"], a: 0 },
            { q: "Complete: Sakura ga ______ (As cerejeiras florescem).", options: ["saku (咲く)", "kareru", "kau", "karu"], a: 0 }
        ]
    },
    {
        module: 12,
        title: "Módulo 12: Mídia, Notícias e Imprensa",
        description: "Estude 20 ideogramas de jornalismo, imprensa, reportagens, transmissões, edições e publicações.",
        grammar: {
            title: "Expressando Transmissão de Informação (~ni yoru to)",
            explanation: "No N3, cita-se a fonte de notícias ou reportagens através de ~ni yoru to (de acordo com...).",
            example: "Nyuusu ni yoru to ame desu.",
            translation: "De acordo com as notícias, vai chover."
        },
        readingText: {
            title: "報道と情報の正確さ (Imprensa e Precisão da Informação)",
            japanese: "<ruby>新聞<rt>しんぶん</rt></ruby>やテレビの<ruby>報道<rt>ほうどう</rt></ruby>は<ruby>正確<rt>せいかく</rt></ruby>な<ruby>事実<rt>じじつ</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えることが<ruby>大切<rt>たいせつ</rt></ruby>です。<ruby>記者<rt>きしゃ</rt></ruby>が<ruby>取材<rt>しゅざい</rt></ruby>して記事を<ruby>執筆<rt>しっぴつ</rt></ruby>します。",
            romaji: "Shinbun ya terebi no houdou wa seikaku na jijitsu o tsutaeru koto ga taisetsu desu. Kisha ga shuzai shite kijiti o shippitsu shimasu.",
            translation: "Nas reportagens de jornais e TV, é importante transmitir fatos precisos. Os jornalistas fazem a cobertura e redigem os artigos.",
            comprehensionQuiz: [
                {
                    q: "O que é importante nas reportagens da mídia (報道)?", options: ["Transmitir fatos precisos (正確な事実を伝える)", "Inventar histórias", "Vender jornais velhos", "Fazer piadas"], a: 0
                },
                {
                    q: "Qual a leitura de 記事?", options: ["きじ (kiji)", "しんぶん", "ほうどう", "きしゃ"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "告",
                meaning: "Anunciar / Informar / Notificar",
                kunyomi: "つ・げる (tsugeru)",
                onyomi: "コク (KOKU)",
                mnemonic: "Palavras declaradas em alto e bom som ao público.",
                examples: [
                    { word: "広告 (koukoku)", wordMeaning: "Anúncio / Publicidade", sentence: "Koukoku o miru.", sentenceMeaning: "Ver o anúncio publicitário." },
                    { word: "報告 (houkoku)", wordMeaning: "Relatório / Comunicação", sentence: "Houkoku-sho o kaku.", sentenceMeaning: "Escrever o relatório." }
                ]
            },
            {
                character: "談",
                meaning: "Conversar / Discutir / Narrativa",
                kunyomi: "だん (dan)",
                onyomi: "ダン (DAN)",
                mnemonic: "Palavras (言) e fogo aceso em redor de uma boa conversa.",
                examples: [
                    { word: "相談 (soudan)", wordMeaning: "Consulta / Pedido de conselho", sentence: "Soudan ni noru.", sentenceMeaning: "Dar conselho." },
                    { word: "会談 (kaidan)", wordMeaning: "Conferência / Reunião cúpula", sentence: "Shunou kaidan.", sentenceMeaning: "Reunião de cúpula dos líderes." }
                ]
            },
            {
                character: "演",
                meaning: "Atuar / Apresentar / Desempenhar",
                kunyomi: "えん (en)",
                onyomi: "エン (EN)",
                mnemonic: "Água fluindo e atores atuando no palco.",
                examples: [
                    { word: "演劇 (engeki)", wordMeaning: "Peça de teatro", sentence: "Engeki o miru.", sentenceMeaning: "Assistir a uma peça de teatro." },
                    { word: "演説 (enzetsu)", wordMeaning: "Discurso público", sentence: "Enzetsu o suru.", sentenceMeaning: "Fazer um discurso público." }
                ]
            },
            {
                character: "劇",
                meaning: "Teatro / Drama / Intenso",
                kunyomi: "げき (geki)",
                onyomi: "ゲキ (GEKI)",
                mnemonic: "Faca (刂) e ação dramática no palco do teatro.",
                examples: [
                    { word: "劇場 (gekijou)", wordMeaning: "Teatro (local)", sentence: "Gekijou ni iku.", sentenceMeaning: "Ir ao teatro." },
                    { word: "劇的 (gekiteki)", wordMeaning: "Dramático / Impressionante", sentence: "Gekiteki na change.", sentenceMeaning: "Mudança dramática." }
                ]
            },
            {
                character: "刊",
                meaning: "Publicar / Edição impressa",
                kunyomi: "かん (kan)",
                onyomi: "カン (KAN)",
                mnemonic: "Madeira recortada por faca (刂) para blocos de imprensa.",
                examples: [
                    { word: "周刊 (shuukan)", wordMeaning: "Publicação semanal", sentence: "Shuukan-shi.", sentenceMeaning: "Revista semanal." },
                    { word: "新刊 (shinkan)", wordMeaning: "Nova publicação / Lançamento", sentence: "Shinkan hon.", sentenceMeaning: "Livro recém-lançado." }
                ]
            },
            {
                character: "誌",
                meaning: "Revista / Registro escrito",
                kunyomi: "し (shi)",
                onyomi: "シ (SHI)",
                mnemonic: "Palavras (言) e aspirações registradas em páginas.",
                examples: [
                    { word: "雑誌 (zasshi)", wordMeaning: "Revista", sentence: "Zasshi o yomu.", sentenceMeaning: "Ler uma revista." },
                    { word: "日誌 (nisshi)", wordMeaning: "Diário de bordo / Registro diário", sentence: "Nisshi o kaku.", sentenceMeaning: "Escrever o diário de bordo." }
                ]
            },
            {
                character: "刷",
                meaning: "Imprimir / Escovar",
                kunyomi: "す・る (suru)",
                onyomi: "サツ (SATSU)",
                mnemonic: "Faca (刂) e escova aplicando tinta nas páginas.",
                examples: [
                    { word: "印刷 (insatsu)", wordMeaning: "Impressão de documentos", sentence: "Paper o insatsu suru.", sentenceMeaning: "Imprimir o papel." },
                    { word: "刷る (suru)", wordMeaning: "Imprimir", sentence: "Hon o suru.", sentenceMeaning: "Imprimir o livro." }
                ]
            },
            {
                character: "載",
                meaning: "Publicar na mídia / Carregar em veículo",
                kunyomi: "の・せる (noseru) / の・る (noru)",
                onyomi: "サイ (SAI)",
                mnemonic: "Carro (車) e artigos carregados e impressos.",
                examples: [
                    { word: "掲載 (keisai)", wordMeaning: "Publicação / Inserção de artigo", sentence: "Kiji no keisai.", sentenceMeaning: "Publicação do artigo." },
                    { word: "載せる (noseru)", wordMeaning: "Publicar / Colocar no jornal", sentence: "Nyuusu o noseru.", sentenceMeaning: "Publicar a notícia." }
                ]
            },
            {
                character: "聞",
                meaning: "Ouvir / Escutar / Notícia",
                kunyomi: "き・く (kiku) / き・こえる (kikoeru)",
                onyomi: "ブン (BUN) / モン (MON)",
                mnemonic: "Orelha (耳) encostada no portão (門) para ouvir as notícias.",
                examples: [
                    { word: "新聞 (shinbun)", wordMeaning: "Jornal impresso", sentence: "Shinbun o yomu.", sentenceMeaning: "Ler o jornal." },
                    { word: "聞く (kiku)", wordMeaning: "Ouvir / Perguntar", sentence: "Koe o kiku.", sentenceMeaning: "Ouvir a voz." }
                ]
            },
            {
                character: "説",
                meaning: "Explicar / Teoria / Opinião",
                kunyomi: "と・く (toku)",
                onyomi: "セツ (SETSU) / ゼイ (ZEI)",
                mnemonic: "Palavras (言) fluindo em explicação lógica.",
                examples: [
                    { word: "小説 (shousetsu)", wordMeaning: "Romance / Livro de ficção", sentence: "Shousetsu o kaku.", sentenceMeaning: "Escrever um romance." },
                    { word: "解説 (kaisetsu)", wordMeaning: "Comentário / Explicação", sentence: "Game no kaisetsu.", sentenceMeaning: "Comentário do jogo." }
                ]
            },
            {
                character: "伝",
                meaning: "Transmitir / Comunicar / Tradição",
                kunyomi: "つた・える (tsutaeru) / つた・わる (tsutawaru)",
                onyomi: "デン (DEN)",
                mnemonic: "Pessoa (亻) transmitindo a mensagem adiante.",
                examples: [
                    { word: "伝える (tsutaeru)", wordMeaning: "Transmitir / Comunicar", sentence: "Message o tsutaeru.", sentenceMeaning: "Transmitir a mensagem." },
                    { word: "伝統 (dentou)", wordMeaning: "Tradição", sentence: "Nihon no dentou.", sentenceMeaning: "Tradição japonesa." }
                ]
            },
            {
                character: "訳",
                meaning: "Traduzir / Razão / Significado",
                kunyomi: "わけ (wake)",
                onyomi: "ヤク (YAKU)",
                mnemonic: "Palavras (言) explicadas e traduzidas em outra língua.",
                examples: [
                    { word: "通訳 (tsuuyaku)", wordMeaning: "Intérprete", sentence: "Tsuuyaku o tanomu.", sentenceMeaning: "Contratar um intérprete." },
                    { word: "翻訳 (honyaku)", wordMeaning: "Tradução escrita", sentence: "Hon no honyaku.", sentenceMeaning: "Tradução do livro." }
                ]
            },
            {
                character: "編",
                meaning: "Editar / Tecer / Compilar",
                kunyomi: "あ・む (amu)",
                onyomi: "ヘン (HEN)",
                mnemonic: "Fios (糸) e páginas entrelaçados na edição.",
                examples: [
                    { word: "編集 (henshuu)", wordMeaning: "Edição de texto/vídeo", sentence: "Video no henshuu.", sentenceMeaning: "Edição de vídeo." },
                    { word: "編む (amu)", wordMeaning: "Tecer / Tricotar", sentence: "Sweater o amu.", sentenceMeaning: "Tecer um suéter." }
                ]
            },
            {
                character: "集",
                meaning: "Reunir / Colecionar / Juntar",
                kunyomi: "あつ・まる (atsumaru) / あつ・める (atsumeru)",
                onyomi: "シュウ (SHUU)",
                mnemonic: "Pássaros pousados na árvore reunidos em bando.",
                examples: [
                    { word: "集める (atsumeru)", wordMeaning: "Colecionar / Juntar", sentence: "Data o atsumeru.", sentenceMeaning: "Juntar dados." },
                    { word: "集合 (shuugou)", wordMeaning: "Reunião / Ponto de encontro", sentence: "Eki ni shuugou.", sentenceMeaning: "Encontro na estação." }
                ]
            },
            {
                character: "画",
                meaning: "Desenhar / Imagem / Plano / Traço",
                kunyomi: "え (e) / かく・する (kakusuru)",
                onyomi: "ガ (GA) / カク (KAKU)",
                mnemonic: "Moldura em torno de uma imagem pintada.",
                examples: [
                    { word: "映画 (eiga)", wordMeaning: "Filme de cinema", sentence: "Eiga o miru.", sentenceMeaning: "Assistir a um filme." },
                    { word: "画劇 (gageki)", wordMeaning: "Ópera ilustrada", sentence: "Gageki no stage.", sentenceMeaning: "Palco de ópera." }
                ]
            },
            {
                character: "映",
                meaning: "Projetar / Refletir / Brilhar",
                kunyomi: "うつ・る (utsuru) / うつ・す (utsusu)",
                onyomi: "エイ (EI)",
                mnemonic: "Luz do sol (日) refletindo na tela do cinema.",
                examples: [
                    { word: "映る (utsuru)", wordMeaning: "Refletir-se / Ser projetado", sentence: "Kagami ni utsuru.", sentenceMeaning: "Refletir-se no espelho." },
                    { word: "映像 (eizou)", wordMeaning: "Imagem em vídeo / Filmagens", sentence: "Kirei na eizou.", sentenceMeaning: "Imagens bonitas em vídeo." }
                ]
            },
            {
                character: "放",
                meaning: "Transmitir (TV/Rádio) / Soltar / Libertar",
                kunyomi: "はな・す (hanasu) / はな・つ (hanatsu)",
                onyomi: "ホウ (HOU)",
                mnemonic: "Mão soltando o sinal de transmissão para o ar.",
                examples: [
                    { word: "放送 (hōsō)", wordMeaning: "Transmissão de rádio/TV", sentence: "Live hōsō.", sentenceMeaning: "Transmissão ao vivo." },
                    { word: "解放 (kaihou)", wordMeaning: "Libertação / Emancipação", sentence: "Stress kara kaihou.", sentenceMeaning: "Libertar-se do estresse." }
                ]
            },
            {
                character: "視",
                meaning: "Assistir / Visualizar / Inspecionar",
                kunyomi: "み・る (miru)",
                onyomi: "シ (SHI)",
                mnemonic: "Olhar com atenção para a tela ou inspeção.",
                examples: [
                    { word: "視聴者 (shichousha)", wordMeaning: "Telespectador / Ovinte", sentence: "Shichousha no question.", sentenceMeaning: "Pergunta do telespectador." },
                    { word: "無視 (mushi)", wordMeaning: "Ignorar / Desconsiderar", sentence: "Rule o mushi suru.", sentenceMeaning: "Ignorar a regra." }
                ]
            },
            {
                character: "聴",
                meaning: "Escutar com atenção / Ouvir música",
                kunyomi: "き・く (kiku)",
                onyomi: "チョウ (CHOU)",
                mnemonic: "Orelha (耳) e coração focados em escutar cada detalhe.",
                examples: [
                    { word: "聴覚 (choukaku)", wordMeaning: "Audição / Sentido auditivo", sentence: "Choukaku no kensa.", sentenceMeaning: "Exame de audição." },
                    { word: "聴講 (choukou)", wordMeaning: "Assistir a uma palestra/aula", sentence: "Lecture o choukou suru.", sentenceMeaning: "Assistir a uma palestra." }
                ]
            },
            {
                character: "読",
                meaning: "Ler",
                kunyomi: "よ・む (yomu)",
                onyomi: "ドク (DOKU) / トウ (TOU)",
                mnemonic: "Palavras (言) vendidas em livros lidos com atenção.",
                examples: [
                    { word: "読書 (dokusho)", wordMeaning: "Leitura de livros", sentence: "Dokusho ga shumi desu.", sentenceMeaning: "Meu hobby é a leitura." },
                    { word: "読者 (dokusha)", wordMeaning: "Leitor", sentence: "Zasshi no dokusha.", sentenceMeaning: "Leitor da revista." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 雑誌 (zasshi)?", options: ["Revista", "Jornal", "Discurso", "Dicionário"], a: 0 },
            { q: "Traduza 放送 (hōsō):", options: ["Transmissão de rádio/TV", "Impressão", "Edição de vídeo", "Tradução"], a: 0 },
            { q: "Kunyomi de 伝える:", options: ["つた・える (tsutaeru)", "き・く", "あつ・める", "す・る"], a: 0 },
            { q: "Onyomi de 広告 (Anúncio):", options: ["コク (KOKU)", "HO HOU", "HEN", "SEI"], a: 0 },
            { q: "O que significa 翻訳 (honyaku)?", options: ["Tradução escrita", "Relatório", "Discurso", "Impressão"], a: 0 },
            { q: "Qual o kanji de 映画 (eiga - Filme)?", options: ["映", "刊", "誌", "刷"], a: 0 },
            { q: "Traduza 編集 (henshuu):", options: ["Edição de texto/vídeo", "Leitura", "Discurso", "Anúncio"], a: 0 },
            { q: "Qual o kanji de 新聞 (shinbun - Jornal)?", options: ["聞", "言", "読", "書"], a: 0 },
            { q: "Significado de 読書 (dokusho):", options: ["Leitura de livros", "Escrita", "Audição", "Edição"], a: 0 },
            { q: "Complete: Live ______ (Transmissão ao vivo).", options: ["hōsō (放送)", "insatsu", "henshuu", "zasshi"], a: 0 }
        ]
    },
    {
        module: 13,
        title: "Módulo 13: Cultura, Tradições e Artes",
        description: "Estude 20 ideogramas de artes tradicionais, teatro, festivais, crenças e patrimônio cultural.",
        grammar: {
            title: "Expressando Apreciação Cultural (~o tanoshimu)",
            explanation: "Formas de expressar engajamento em festivais, espetáculos teatrais e tradições artísticas.",
            example: "Matsuri o tanoshimimasu.",
            translation: "Aprecio o festival."
        },
        readingText: {
            title: "日本の伝統芸能と祭り (Artes Tradicionais e Festivais no Japão)",
            japanese: "夏に神社で<ruby>祭<rt>まつり</rt></ruby>があり、人々が<ruby>浴衣<rt>ゆかた</rt></ruby>を着て<ruby>舞<rt>おど</rt></ruby>ります。<ruby>寺<rt>てら</rt></ruby>や<ruby>仏<rt>ほとけ</rt></ruby>像を見て<ruby>歴史<rt>れきし</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じます。",
            romaji: "Natsu ni jinja de matsuri ga ari, hitobito ga yukata o kite踊rimasu. Tera ya hotokezou o mite rekishi o kanjimasu.",
            translation: "No verão há festivais nos santuários, e as pessoas vestem yukata e dançam. Vendo templos e estátuas de Buda, sente-se a história.",
            comprehensionQuiz: [
                {
                    q: "O que as pessoas fazem no festival do santuário?", options: ["Vestem yukata e dançam (浴衣を着て踊る)", "Compram computadores", "Andam de trem", "Estudam física"], a: 0
                },
                {
                    q: "Qual a leitura de 祭り?", options: ["まつり (matsuri)", "てら", "ほとけ", "じんじゃ"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "舞",
                meaning: "Dança / Dançar / Aletear",
                kunyomi: "ま・う (mau) / まい (mai)",
                onyomi: "ブ (BU)",
                mnemonic: "Pessoa com mangas compridas dançando no palco.",
                examples: [
                    { word: "歌舞伎 (kabuki)", wordMeaning: "Teatro tradicional Kabuki", sentence: "Kabuki o kan鑑 suru.", sentenceMeaning: "Apreciar o teatro Kabuki." },
                    { word: "舞台 (butai)", wordMeaning: "Palco / Cena", sentence: "Butai ni tatsu.", sentenceMeaning: "Subir ao palco." }
                ]
            },
            {
                character: "祭",
                meaning: "Festival / Rito sagrado / Celebrar",
                kunyomi: "まつ・り (matsuri) / まつ・る (matsuru)",
                onyomi: "サイ (SAI)",
                mnemonic: "Mão oferecendo carne no altar sagrado do festival.",
                examples: [
                    { word: "祭り (matsuri)", wordMeaning: "Festival", sentence: "Natsu matsuri ni iku.", sentenceMeaning: "Ir ao festival de verão." },
                    { word: "学園祭 (gakunsai)", wordMeaning: "Festival cultural escolar", sentence: "Gakunsai no junbi.", sentenceMeaning: "Preparação do festival escolar." }
                ]
            },
            {
                character: "芸",
                meaning: "Arte / Habilidade artística / Desempenho",
                kunyomi: "げい (gei)",
                onyomi: "ゲイ (GEI)",
                mnemonic: "Cultivo de plantas (艹) elevado à forma de arte.",
                examples: [
                    { word: "芸術 (geijutsu)", wordMeaning: "Arte", sentence: "Geijutsu no museum.", sentenceMeaning: "Museu de arte." },
                    { word: "芸能 (geinou)", wordMeaning: "Entretenimento / Showbiz", sentence: "Geinou nyuusu.", sentenceMeaning: "Notícias de entretenimento." }
                ]
            },
            {
                character: "絵",
                meaning: "Pintura / Desenho / Ilustração",
                kunyomi: "え (e)",
                onyomi: "カイ (KAI)",
                mnemonic: "Fios (糸) de cores formando uma bela pintura.",
                examples: [
                    { word: "絵画 (kaiga)", wordMeaning: "Pintura artística", sentence: "Kaiga o miru.", sentenceMeaning: "Contemplar pinturas." },
                    { word: "絵本 (ehon)", wordMeaning: "Livro ilustrado", sentence: "Kodomo ni ehon o yomu.", sentenceMeaning: "Ler livro ilustrado para a criança." }
                ]
            },
            {
                character: "琴",
                meaning: "Koto (Cítara japonesa) / Harpa",
                kunyomi: "こと (koto)",
                onyomi: "キン (KIN)",
                mnemonic: "Duas joias e cordas ressoando a música tradicional.",
                examples: [
                    { word: "琴 (koto)", wordMeaning: "Cítara tradicional Koto", sentence: "Koto no neiro.", sentenceMeaning: "O som da cítara Koto." },
                    { word: "木琴 (mokkin)", wordMeaning: "Xilofone", sentence: "Mokkin o ensou suru.", sentenceMeaning: "Tocar xilofone." }
                ]
            },
            {
                character: "礼",
                meaning: "Cortesia / Vênia / Agradecimento / Rito",
                kunyomi: "れい (rei)",
                onyomi: "レイ (REI) / ライ (RAI)",
                mnemonic: "Altar (礻) onde se presta curvatura em respeito.",
                examples: [
                    { word: "お礼 (orei)", wordMeaning: "Agradecimento", sentence: "Orei o iu.", sentenceMeaning: "Agradecer." },
                    { word: "礼儀 (reigi)", wordMeaning: "Boas maneiras / Etiqueta", sentence: "Reigi ga tadashii.", sentenceMeaning: "Ter boas maneiras." }
                ]
            },
            {
                character: "仏",
                meaning: "Buda / Escultura budista / França",
                kunyomi: "ほとけ (hotoke)",
                onyomi: "ブツ (BUTSU) / フツ (FUTSU)",
                mnemonic: "Pessoa (亻) que alcançou a iluminação espiritual.",
                examples: [
                    { word: "仏像 (butsuzou)", wordMeaning: "Estátua de Buda", sentence: "Butsuzou o miru.", sentenceMeaning: "Contemplar estátua de Buda." },
                    { word: "仏教 (bukkyou)", wordMeaning: "Budismo", sentence: "Bukkyou no oshie.", sentenceMeaning: "Ensinamentos do Budismo." }
                ]
            },
            {
                character: "神",
                meaning: "Deus / Divindade / Espírito divino",
                kunyomi: "かみ (kami)",
                onyomi: "シン (SHIN) / ジ内部 (JIN)",
                mnemonic: "Altar sagrado (礻) revelando a presença divina.",
                examples: [
                    { word: "神社 (jinja)", wordMeaning: "Santuário xintoísta", sentence: "Jinja ni sanpai suru.", sentenceMeaning: "Orar no santuário." },
                    { word: "神様 (kamisama)", wordMeaning: "Deus / Divindade", sentence: "Kamisama ni inoru.", sentenceMeaning: "Rezar a Deus." }
                ]
            },
            {
                character: "寺",
                meaning: "Templo budista",
                kunyomi: "てら (tera)",
                onyomi: "ジ (JI)",
                mnemonic: "Solo sagrado sob a lei onde fica o templo.",
                examples: [
                    { word: "お寺 (otera)", wordMeaning: "Templo budista", sentence: "Otera o訪問.", sentenceMeaning: "Visitar um templo budista." },
                    { word: "寺院 (jiin)", wordMeaning: "Complexo de templos", sentence: "Kyoto no jiin.", sentenceMeaning: "Complexo de templos de Quioto." }
                ]
            },
            {
                character: "飾",
                meaning: "Decorar / Ornamentar / Adorno",
                kunyomi: "かざ・る (kazaru)",
                onyomi: "ショク (SHOKU)",
                mnemonic: "Comida (食) e arranjos dispostos como adorno.",
                examples: [
                    { word: "飾り (kazari)", wordMeaning: "Decoração / Enfeite", sentence: "Hana no kazari.", sentenceMeaning: "Enfeite de flores." },
                    { word: "装飾 (soushoku)", wordMeaning: "Ornamentação", sentence: "Kirei na soushoku.", sentenceMeaning: "Bela ornamentação." }
                ]
            },
            {
                character: "創",
                meaning: "Criar / Fundar / Iniciar",
                kunyomi: "つく・る (tsukuru)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Faca (刂) esculpindo e criando uma obra nova.",
                examples: [
                    { word: "創造 (souzou)", wordMeaning: "Criação", sentence: "Atarashii souzou.", sentenceMeaning: "Uma nova criação." },
                    { word: "創立 (souritsu)", wordMeaning: "Fundação duma instituição", sentence: "Gakkou no souritsu.", sentenceMeaning: "Fundação da escola." }
                ]
            },
            {
                character: "造",
                meaning: "Fabricar / Construir / Estrutura",
                kunyomi: "つく・る (tsukuru)",
                onyomi: "ZOU (ZOU)",
                mnemonic: "Passos contínuos construindo uma grande estrutura.",
                examples: [
                    { word: "木造 (mokuzou)", wordMeaning: "Construção em madeira", sentence: "Mokuzou no ie.", sentenceMeaning: "Casa construída em madeira." },
                    { word: "製造 (seizou)", wordMeaning: "Fabricação / Manufatura", sentence: "Car no seizou.", sentenceMeaning: "Fabricação de carros." }
                ]
            },
            {
                character: "感",
                meaning: "Sentimento / Sensação / Sentir",
                kunyomi: "かん (kan)",
                onyomi: "カン (KAN)",
                mnemonic: "Coração (心) emocionado por uma forte impressão.",
                examples: [
                    { word: "感動 (kandou)", wordMeaning: "Emoção profunda", sentence: "Eiga ni kandou suru.", sentenceMeaning: "Emocionar-se com o filme." },
                    { word: "感謝 (kansha)", wordMeaning: "Gratidão / Agradecimento", sentence: "Kansha no kimochi.", sentenceMeaning: "Sentimento de gratidão." }
                ]
            },
            {
                character: "観",
                meaning: "Observar / Visão / Contemplar",
                kunyomi: "み・る (miru)",
                onyomi: "カン (KAN)",
                mnemonic: "Ver (見) com atenção e contemplar a cena.",
                examples: [
                    { word: "観光 (kankou)", wordMeaning: "Turismo", sentence: "Kyoto o kankou suru.", sentenceMeaning: "Fazer turismo em Quioto." },
                    { word: "観客 (kankyaku)", wordMeaning: "Espectadores / Público", sentence: "Kankyaku ga ooi.", sentenceMeaning: "O público é numeroso." }
                ]
            },
            {
                character: "鑑",
                meaning: "Apreciar arte / Julgar / Modelo",
                kunyomi: "かんが・みる (kangamiru)",
                onyomi: "カン (KAN)",
                mnemonic: "Espelho de metal (金) usado para examinar obras de arte.",
                examples: [
                    { word: "鑑賞 (kanshou)", wordMeaning: "Apreciação artística", sentence: "Ongaku no kanshou.", sentenceMeaning: "Apreciação musical." },
                    { word: "図鑑 (zukan)", wordMeaning: "Enciclopédia ilustrada", sentence: "Mushi no zukan.", sentenceMeaning: "Enciclopédia ilustrada de insetos." }
                ]
            },
            {
                character: "響",
                meaning: "Ressoar / Ecoar / Impactar",
                kunyomi: "ひび・く (hibiku)",
                onyomi: "キョウ (KYOU)",
                mnemonic: "Som (音) vibrante ressoando no ambiente.",
                examples: [
                    { word: "響く (hibiku)", wordMeaning: "Ressoar / Ecoar", sentence: "Koe ga hibiku.", sentenceMeaning: "A voz ecoa." },
                    { word: "影響 (eikyou)", wordMeaning: "Influência / Impacto", sentence: "Eikyou o ukeru.", sentenceMeaning: "Receber influência." }
                ]
            },
            {
                character: "詩",
                meaning: "Poesia / Poema",
                kunyomi: "うた (uta)",
                onyomi: "シ (SHI)",
                mnemonic: "Palavras (言) do templo ritmadas como poesia.",
                examples: [
                    { word: "詩人 (shijin)", wordMeaning: "Poeta", sentence: "Famous shijin.", sentenceMeaning: "Poeta famoso." },
                    { word: "詩集 (shishuu)", wordMeaning: "Antologia poética", sentence: "Shishuu o yomu.", sentenceMeaning: "Ler uma antologia poética." }
                ]
            },
            {
                character: "句",
                meaning: "Verso haiku / Frase / Cláusula",
                kunyomi: "く (ku)",
                onyomi: "ク (KU)",
                mnemonic: "Boca (口) declamando um verso ritmado.",
                examples: [
                    { word: "俳句 (haiku)", wordMeaning: "Poesia Haicai tradicional", sentence: "Haiku o yomu.", sentenceMeaning: "Compor um haicai." },
                    { word: "文句 (monku)", wordMeaning: "Reclamação / Queixa", sentence: "Monku o iu.", sentenceMeaning: "Fazer uma reclamação." }
                ]
            },
            {
                character: "歌",
                meaning: "Cantar / Canção / Música",
                kunyomi: "うた (uta) / うた・う (utau)",
                onyomi: "カ (KA)",
                mnemonic: "Boca aberta entoando melodias de canção.",
                examples: [
                    { word: "歌う (utau)", wordMeaning: "Cantar", sentence: "Uta o utau.", sentenceMeaning: "Cantar uma música." },
                    { word: "歌手 (kashu)", wordMeaning: "Cantor(a)", sentence: "Ninki kashu.", sentenceMeaning: "Cantor popular." }
                ]
            },
            {
                character: "墨",
                meaning: "Tinta nankin / Tinta preta de caligrafia",
                kunyomi: "すみ (sumi)",
                onyomi: "ボク (BOKU)",
                mnemonic: "Terra (土) preta (黒) moída para caligrafia tradicional.",
                examples: [
                    { word: "水墨画 (suibokuga)", wordMeaning: "Pintura em tinta nankin", sentence: "Suibokuga o kaku.", sentenceMeaning: "Pintar em tinta nankin." },
                    { word: "墨汁 (bokujuu)", wordMeaning: "Tinta nankin líquida", sentence: "Bokujuu de shodou.", sentenceMeaning: "Praticar caligrafia com tinta nankin." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 祭り (matsuri)?", options: ["Festival", "Santuário", "Buda", "Pintura"], a: 0 },
            { q: "Traduza 観光 (kankou):", options: ["Turismo", "Reclamação", "Poesia", "Desenho"], a: 0 },
            { q: "Kunyomi de 歌う:", options: ["うた・う (utau)", "ひび・く", "ま・う", "かざ・る"], a: 0 },
            { q: "Onyomi de 神 (Deus):", options: ["シン (SHIN) / JIN", "BU", "SAI", "KAN"], a: 0 },
            { q: "O que significa 感謝 (kansha)?", options: ["Gratidão / Agradecimento", "Influência", "Emoção", "Reclamação"], a: 0 },
            { q: "Qual o kanji de 神社 (jinja - Santuário)?", options: ["神", "寺", "仏", "礼"], a: 0 },
            { q: "Traduza 影響 (eikyou):", options: ["Influência / Impacto", "Criação", "Etiqueta", "Teatro"], a: 0 },
            { q: "Qual o kanji de 舞台 (butai - Palco)?", options: ["舞", "芸", "絵", "琴"], a: 0 },
            { q: "Significado de 俳句 (haiku):", options: ["Poesia Haicai tradicional", "Canção", "Pintura nankin", "Enciclopédia"], a: 0 },
            { q: "Complete: Orei o ______ (Agradecer).", options: ["iu (言う)", "utau", "saku", "kazaeru"], a: 0 }
        ]
    },
    {
        module: 14,
        title: "Módulo 14: Viagens, Lazer e Esportes",
        description: "Estude 20 ideogramas de turismo, hospedagem, passeios, competição esportiva e lazer.",
        grammar: {
            title: "Expressando Planos de Viagem (~ni iku tsumori)",
            explanation: "Uso da gramática de intenção para planejar roteiros de viagens, hospedagem e passeios.",
            example: "Ryokou ni iku tsumori desu.",
            translation: "Pretendo ir viajar."
        },
        readingText: {
            title: "温泉旅行と観光 (Viagem de Águas Termais e Turismo)",
            japanese: "週末に<ruby>温泉<rt>おんせん</rt></ruby><ruby>旅館<rt>りょかん</rt></ruby>に<ruby>宿泊<rt>しゅくはく</rt></ruby>し、綺麗な<ruby>景色<rt>けしき</rt></ruby>を楽しみます。<ruby>荷物<rt>にもつ</rt></ruby>を預けて<ruby>散策<rt>さんさく</rt></ruby>します。",
            romaji: "Shuumatsu ni onsen ryokan ni shukuhaku shi, kirei na keshiki o tanoshimimasu. Nimotsu o azukete sansaku shimasu.",
            translation: "No fim de semana, hospedo-me numa hospedaria de fontes termais e aprecio a bela paisagem. Deixo as bagagens e saio para passear.",
            comprehensionQuiz: [
                {
                    q: "O que a pessoa faz no fim de semana?", options: ["Hospeda-se em hospedaria termal e passeia (旅館に宿泊して散策する)", "Fica trabalhando no escritório", "Conserta a casa", "Lava roupas em casa"], a: 0
                },
                {
                    q: "Qual a leitura de 景色?", options: ["けしき (keshiki)", "りょかん", "にもつ", "しゅくはく"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "旅",
                meaning: "Viagem / Viajar",
                kunyomi: "たび (tabi)",
                onyomi: "リョ (RYO)",
                mnemonic: "Pessoas viajando juntas sob a bandeira de passeio.",
                examples: [
                    { word: "旅行 (ryokou)", wordMeaning: "Viagem", sentence: "Ryokou ni iku.", sentenceMeaning: "Ir viajar." },
                    { word: "旅人 (tabibito)", wordMeaning: "Viajante", sentence: "Tabibito no story.", sentenceMeaning: "História do viajante." }
                ]
            },
            {
                character: "宿",
                meaning: "Hospedagem / Hotel / Pernoitar",
                kunyomi: "やど (yado) / やど・る (yadoru)",
                onyomi: "シュク (SHUKU)",
                mnemonic: "Teto da hospedaria abrigando o viajante à noite.",
                examples: [
                    { word: "宿泊 (shukuhaku)", wordMeaning: "Hospedagem / Pernoite", sentence: "Hotel ni shukuhaku suru.", sentenceMeaning: "Hospedar-se num hotel." },
                    { word: "宿題 (shukudai)", wordMeaning: "Dever de casa", sentence: "Shukudai o finished.", sentenceMeaning: "Terminar o dever de casa." }
                ]
            },
            {
                character: "景",
                meaning: "Paisagem / Vista / Cenário",
                kunyomi: "けい (kei)",
                onyomi: "ケイ (KEI)",
                mnemonic: "Sol (日) iluminando o alto do cenário natural.",
                examples: [
                    { word: "景色 (keshiki)", wordMeaning: "Paisagem / Vista", sentence: "Kirei na keshiki.", sentenceMeaning: "Paisagem bonita." },
                    { word: "光景 (koukei)", wordMeaning: "Cena / Espectáculo visual", sentence: "Kandou-teki na koukei.", sentenceMeaning: "Cena emocionante." }
                ]
            },
            {
                character: "投",
                meaning: "Arremessar / Lançar / Investir",
                kunyomi: "な・げる (nageru)",
                onyomi: "トウ (TOU)",
                mnemonic: "Mão (扌) arremessando a bola na partida.",
                examples: [
                    { word: "投げる (nageru)", wordMeaning: "Arremessar / Lançar", sentence: "Ball o nageru.", sentenceMeaning: "Arremessar a bola." },
                    { word: "投手 (toushu)", wordMeaning: "Arremessador (Pitcher no beisebol)", sentence: "Famous toushu.", sentenceMeaning: "Arremessador famoso." }
                ]
            },
            {
                character: "勝",
                meaning: "Vencer / Ganhar / Vitória",
                kunyomi: "か・つ (katsu) / まさ・る (masaru)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Força (力) dedicada para superar o adversário e vencer.",
                examples: [
                    { word: "勝つ (katsu)", wordMeaning: "Vencer / Ganhar", sentence: "Shiai ni katsu.", sentenceMeaning: "Vencer a partida." },
                    { word: "勝負 (shoubu)", wordMeaning: "Disputa / Partida decisiva", sentence: "Shoubu o suru.", sentenceMeaning: "Fazer uma disputa." }
                ]
            },
            {
                character: "負",
                meaning: "Perder / Derrota / Carregar nas costas",
                kunyomi: "ま・ける (makeru) / お・う (ou)",
                onyomi: "フ (FU)",
                mnemonic: "Moedas (貝) perdidas na partida.",
                examples: [
                    { word: "負ける (makeru)", wordMeaning: "Perder (jogo/partida)", sentence: "Game ni makeru.", sentenceMeaning: "Perder o jogo." },
                    { word: "負傷 (fushou)", wordMeaning: "Ferimento / Lesão esportiva", sentence: "Player no fushou.", sentenceMeaning: "Lesão do jogador." }
                ]
            },
            {
                character: "争",
                meaning: "Disputar / Lutar / Contender",
                kunyomi: "あらそ・う (arasou)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Duas mãos disputando a liderança do jogo.",
                examples: [
                    { word: "争う (arasou)", wordMeaning: "Disputar / Competir", sentence: "Top o arasou.", sentenceMeaning: "Disputar o primeiro lugar." },
                    { word: "戦争 (sensou)", wordMeaning: "Guerra", sentence: "Sensou o防ぐ.", sentenceMeaning: "Evitar guerras." }
                ]
            },
            {
                character: "泳",
                meaning: "Nadar",
                kunyomi: "およ・ぐ (oyogu)",
                onyomi: "エイ (EI)",
                mnemonic: "Água (氵) onde a pessoa nada livremente.",
                examples: [
                    { word: "水泳 (suiei)", wordMeaning: "Natação", sentence: "Suiei no lesson.", sentenceMeaning: "Aula de natação." },
                    { word: "泳ぐ (oyogu)", wordMeaning: "Nadar", sentence: "Umi de oyogu.", sentenceMeaning: "Nadar no mar." }
                ]
            },
            {
                character: "登",
                meaning: "Escalar / Subir montanha / Registrar",
                kunyomi: "のぼ・る (noboru)",
                onyomi: "トウ (TOU) / ト (TO)",
                mnemonic: "Passos firmes subindo os degraus da montanha.",
                examples: [
                    { word: "登山 (tozan)", wordMeaning: "Alpinismo / Escalar montanhas", sentence: "Fuji-san no tozan.", sentenceMeaning: "Escalada do Monte Fuji." },
                    { word: "登録 (touroku)", wordMeaning: "Registro / Inscrição", sentence: "User touroku.", sentenceMeaning: "Registro de usuário." }
                ]
            },
            {
                character: "滞",
                meaning: "Permanecer / Estadia / Atrasar",
                kunyomi: "とどこお・る (todokooru)",
                onyomi: "タイ (TAI)",
                mnemonic: "Água (氵) parada sem fluir durante a estadia.",
                examples: [
                    { word: "滞在 (taizai)", wordMeaning: "Estadia / Permanência", sentence: "Hotel ni taizai suru.", sentenceMeaning: "Ficar hospedado num hotel." },
                    { word: "滞納 (tainou)", wordMeaning: "Atraso no pagamento", sentence: "Yachin no tainou.", sentenceMeaning: "Atraso no aluguel." }
                ]
            },
            {
                character: "券",
                meaning: "Ingresso / Bilhete / Cupom",
                kunyomi: "けん (ken)",
                onyomi: "ケン (KEN)",
                mnemonic: "Faca (刀) destacando o bilhete da cartela.",
                examples: [
                    { word: "旅券 (ryoken)", wordMeaning: "Passaporte", sentence: "Ryoken o show.", sentenceMeaning: "Mostrar o passaporte." },
                    { word: "食券 (shokken)", wordMeaning: "Ticket de refeição", sentence: "Shokken o kaimasu.", sentenceMeaning: "Comprar ticket de refeição." }
                ]
            },
            {
                character: "泊",
                meaning: "Pernoitar / Hospedar-se",
                kunyomi: "と・まる (tomaru) / と・める (tomeru)",
                onyomi: "ハク (HAKU)",
                mnemonic: "Água (氵) e noite branca descansando na pousada.",
                examples: [
                    { word: "一泊 (ippaku)", wordMeaning: "Uma pernoite", sentence: "Ippaku futsuka no trip.", sentenceMeaning: "Viagem de duas dias e uma noite." },
                    { word: "泊まる (tomaru)", wordMeaning: "Hospedar-se", sentence: "Friend no ie ni tomaru.", sentenceMeaning: "Hospedar-se na casa do amigo." }
                ]
            },
            {
                character: "荷",
                meaning: "Bagagem / Carga",
                kunyomi: "に (ni)",
                onyomi: "カ (KA)",
                mnemonic: "Carga de plantas (艹) carregadas nos ombros.",
                examples: [
                    { word: "荷物 (nimotsu)", wordMeaning: "Bagagem / Encomenda", sentence: "Nimotsu o azukeru.", sentenceMeaning: "Despachar as bagagens." },
                    { word: "手荷物 (tenimotsu)", wordMeaning: "Bagagem de mão", sentence: "Tenimotsu o hold.", sentenceMeaning: "Segurar a bagagem de mão." }
                ]
            },
            {
                character: "寄",
                meaning: "Aproximar-se / Visitar de passagem",
                kunyomi: "よ・る (yoru) / よ・せる (yoseru)",
                onyomi: "キ (KI)",
                mnemonic: "Entrar sob o teto da casa de passagem.",
                examples: [
                    { word: "立ち寄る (tachiyoru)", wordMeaning: "Fazer uma parada rápida / Dar uma passada", sentence: "Cafe ni tachiyoru.", sentenceMeaning: "Dar uma passada no café." },
                    { word: "寄付 (kifu)", wordMeaning: "Doação", sentence: "Money o kifu suru.", sentenceMeaning: "Fazer uma doação." }
                ]
            },
            {
                character: "尋",
                meaning: "Perguntar / Procurar / Inquirir",
                kunyomi: "たず・ねる (tazuneru)",
                onyomi: "ジン (JIN)",
                mnemonic: "Braços estendidos procurando o caminho correto.",
                examples: [
                    { word: "尋ねる (tazuneru)", wordMeaning: "Perguntar / Inquirir", sentence: "Michi o tazuneru.", sentenceMeaning: "Perguntar o caminho." },
                    { word: "尋問 (jinmon)", wordMeaning: "Interrogatório", sentence: "Keisatsu no jinmon.", sentenceMeaning: "Interrogatório policial." }
                ]
            },
            {
                character: "訪",
                meaning: "Visitar / Fazer uma visita oficial",
                kunyomi: "たず・ねる (tazuneru) / おとず・れる (otozureru)",
                onyomi: "ホウ (HOU)",
                mnemonic: "Palavras (言) ditas ao visitar a casa de alguém.",
                examples: [
                    { word: "訪問 (houmon)", wordMeaning: "Visita formal", sentence: "Company o houmon suru.", sentenceMeaning: "Fazer visita formal à empresa." },
                    { word: "訪れる (otozureru)", wordMeaning: "Visitar (lugar)", sentence: "Kyoto o otozureru.", sentenceMeaning: "Visitar Quioto." }
                ]
            },
            {
                character: "散",
                meaning: "Passear / Dispersar / Espalhar",
                kunyomi: "ち・る (chiru) / ち・らかす (chirakasu)",
                onyomi: "サン (SAN)",
                mnemonic: "Folhas dispersas espalhando-se no passeio.",
                examples: [
                    { word: "散歩 (sanpo)", wordMeaning: "Passeio a pé", sentence: "Park o sanpo suru.", sentenceMeaning: "Passear pelo parque." },
                    { word: "散策 (sansaku)", wordMeaning: "Caminhada de lazer / Passear explorando", sentence: "Machi o sansaku suru.", sentenceMeaning: "Passear explorando a cidade." }
                ]
            },
            {
                character: "操",
                meaning: "Operar / Conduzir / Ginástica",
                kunyomi: "あやつ・る (ayatsuru)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Mãos (扌) operando com destreza os controles do esporte.",
                examples: [
                    { word: "体操 (taisou)", wordMeaning: "Ginástica / Exercícios", sentence: "Masa taisou o suru.", sentenceMeaning: "Fazer ginástica matinal." },
                    { word: "操作 (sousa)", wordMeaning: "Operação de aparelhos", sentence: "Machine no sousa.", sentenceMeaning: "Operação de máquinas." }
                ]
            },
            {
                character: "競",
                meaning: "Competir / Disputar / Rivalizar",
                kunyomi: "きそ・う (kisou) / せ・りあう (seriau)",
                onyomi: "キョウ (KYOU) / ケイ (KEI)",
                mnemonic: "Duas pessoas erguidas competindo ombro a ombro.",
                examples: [
                    { word: "競争 (kyousou)", wordMeaning: "Competição / Concorrência", sentence: "Speed kyousou.", sentenceMeaning: "Competição de velocidade." },
                    { word: "競技 (kyougi)", wordMeaning: "Modalidade esportiva", sentence: "Rikujou kyougi.", sentenceMeaning: "Modalidade de atletismo." }
                ]
            },
            {
                character: "訓",
                meaning: "Treinar / Instrução / Leitura Kunyomi",
                kunyomi: "くん (kun)",
                onyomi: "クン (KUN)",
                mnemonic: "Palavras (言) e rios fluindo em instrução e treinamento.",
                examples: [
                    { word: "訓練 (kunren)", wordMeaning: "Treinamento / Adestramento", sentence: "Bousai kunren.", sentenceMeaning: "Treinamento de prevenção de desastres." },
                    { word: "訓読み (kunyomi)", wordMeaning: "Leitura Kunyomi do Kanji", sentence: "Kanji no kunyomi.", sentenceMeaning: "Leitura Kunyomi do ideograma." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 旅行 (ryokou)?", options: ["Viagem", "Hospital", "Partida", "Ingresso"], a: 0 },
            { q: "Traduza 散歩 (sanpo):", options: ["Passeio a pé", "Natação", "Alpinismo", "Instrução"], a: 0 },
            { q: "Kunyomi de 勝つ:", options: ["か・つ (katsu)", "ま・ける", "およ・ぐ", "のぼ・る"], a: 0 },
            { q: "Onyomi de 荷物 (Bagagem):", options: ["カ (KA)", "SAN", "KEN", "TAI"], a: 0 },
            { q: "O que significa 宿泊 (shukuhaku)?", options: ["Hospedagem / Pernoite", "Competição", "Passeio", "Subida"], a: 0 },
            { q: "Qual o kanji de 景色 (keshiki - Paisagem)?", options: ["景", "宿", "旅", "滞"], a: 0 },
            { q: "Traduza 競争 (kyousou):", options: ["Competição / Concorrência", "Doação", "Viagem", "Bagagem"], a: 0 },
            { q: "Qual o kanji de 旅券 (ryoken - Passaporte)?", options: ["券", "荷", "泊", "寄"], a: 0 },
            { q: "Significado de 訓練 (kunren):", options: ["Treinamento / Adestramento", "Passeio", "Escalada", "Natação"], a: 0 },
            { q: "Complete: Park o ______ (Passear pelo parque).", options: ["sanpo suru (散歩)", "oyogu", "nageru", "katsu"], a: 0 }
        ]
    },
    {
        module: 15,
        title: "Módulo 15: Verbos de Transformação e Mudança",
        description: "Estude 20 ideogramas de alterações de estado, começos, fins, rupturas e transformações.",
        grammar: {
            title: "Expressando Mudança Gradual (~te kuru / ~te iku)",
            explanation: "No N3, verbos de transformação combinam-se com kuru/iku para indicar mudanças contínuas ao longo do tempo.",
            example: "Kawatte kimashita.",
            translation: "Veio mudando gradualmente."
        },
        readingText: {
            title: "変化と成長の過程 (Processo de Mudança e Crescimento)",
            japanese: "時間が経つと環境が<ruby>変<rt>か</rt></ruby>わり、新しい習慣に<ruby>慣<rt>な</rt></ruby>れていきます。壊れたものを<ruby>整<rt>ととの</rt></ruby>えて<ruby>改<rt>あらた</rt></ruby>めます。",
            romaji: "Jikan ga tatsuto kankyou ga kawari, atarashii shuukan ni narete ikimasu. Kowareta mono o totonoete aratamesu.",
            translation: "Com o passar do tempo, o ambiente muda e nos acostumamos com os novos hábitos. Ajustamos e reformamos o que estava quebrado.",
            comprehensionQuiz: [
                {
                    q: "O que acontece com o passar do tempo?", options: ["O ambiente muda e nos acostumamos aos novos hábitos (環境が変わり慣れていく)", "Tudo fica destruído", "Nada muda", "Esquecemos a língua"], a: 0
                },
                {
                    q: "Qual a leitura de 変わる?", options: ["かわ・る (kawaru)", "な・れる", "こわ・れる", "あらた・める"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "変",
                meaning: "Mudar / Alterar / Estranho",
                kunyomi: "かわ・る (kawaru) / か・える (kaeru)",
                onyomi: "ヘン (HEN)",
                mnemonic: "Passos e coração mudando de estado continuamente.",
                examples: [
                    { word: "変化 (henka)", wordMeaning: "Mudança / Transformação", sentence: "Kikou no henka.", sentenceMeaning: "Mudança climática." },
                    { word: "大変 (taihen)", wordMeaning: "Grave / Muito difícil / Bastante", sentence: "Taihen desu.", sentenceMeaning: "É muito difícil." }
                ]
            },
            {
                character: "化",
                meaning: "Transformar-se / Químico",
                kunyomi: "ば・ける (bakeru) / ば・かす (bakasu)",
                onyomi: "カ (KA) / ケ (KE)",
                mnemonic: "Pessoa em pé e pessoa sentada mudando de forma.",
                examples: [
                    { word: "化学 (kagaku)", wordMeaning: "Química", sentence: "Kagaku no jikken.", sentenceMeaning: "Experimento de química." },
                    { word: "文化 (bunka)", wordMeaning: "Cultura", sentence: "Nihon no bunka.", sentenceMeaning: "Cultura japonesa." }
                ]
            },
            {
                character: "決",
                meaning: "Decidir / Determinar / Resolver",
                kunyomi: "き・める (kimeru) / き・まる (kimaru)",
                onyomi: "ケツ (KETSU)",
                mnemonic: "Água (氵) rompendo a duto com determinação.",
                examples: [
                    { word: "決定 (kettei)", wordMeaning: "Decisão oficial", sentence: "Plan no kettei.", sentenceMeaning: "Decisão do plano." },
                    { word: "解決 (kaiketsu)", wordMeaning: "Resolução de problema", sentence: "Mondai no kaiketsu.", sentenceMeaning: "Resolução do problema." }
                ]
            },
            {
                character: "始",
                meaning: "Começar / Iniciar",
                kunyomi: "はじ・まる (hajimaru) / はじ・める (hajimeru)",
                onyomi: "シ (SHI)",
                mnemonic: "Mulher (女) e boca (口) dando o primeiro passo inicial.",
                examples: [
                    { word: "開始 (kaishi)", wordMeaning: "Início / Começo", sentence: "Game no kaishi.", sentenceMeaning: "Início do jogo." },
                    { word: "始発 (shihatsu)", wordMeaning: "Primeiro trem do dia", sentence: "Shihatsu densha.", sentenceMeaning: "Primeiro trem." }
                ]
            },
            {
                character: "終",
                meaning: "Terminar / Fim / Encerramento",
                kunyomi: "お・わる (owaru) / お・わる (owaru)",
                onyomi: "シュウ (SHUU)",
                mnemonic: "Fios (糸) atados no ponto final.",
                examples: [
                    { word: "終了 (shuuryou)", wordMeaning: "Término / Encerramento", sentence: "Shigoto no shuuryou.", sentenceMeaning: "Término do trabalho." },
                    { word: "終点 (shuuten)", wordMeaning: "Estação terminal", sentence: "Densha no shuuten.", sentenceMeaning: "Estação terminal do trem." }
                ]
            },
            {
                character: "残",
                meaning: "Restar / Permanecer / Sobrar",
                kunyomi: "のこ・る (nokoru) / のこ・す (nokosu)",
                onyomi: "ザン (ZAN)",
                mnemonic: "Ossos e ruínas que sobraram do tempo.",
                examples: [
                    { word: "残業 (zangyou)", wordMeaning: "Hora extra", sentence: "Zangyou o suru.", sentenceMeaning: "Fazer hora extra." },
                    { word: "残念 (zannen)", wordMeaning: "Lamentável / Que pena", sentence: "Zannen desu.", sentenceMeaning: "É uma pena." }
                ]
            },
            {
                character: "続",
                meaning: "Continuar / Seguir / Dar sequência",
                kunyomi: "つづ・く (tsuzuku) / つづ・ける (tsuzukeru)",
                onyomi: "ゾク (ZOKU)",
                mnemonic: "Fios (糸) atados uns aos outros sem interrupção.",
                examples: [
                    { word: "継続 (keizoku)", wordMeaning: "Continuidade / Manutenção", sentence: "Study no keizoku.", sentenceMeaning: "Manutenção dos estudos." },
                    { word: "手続き (tetsuduki)", wordMeaning: "Trâmites / Procedimentos", sentence: "Visa no tetsuduki.", sentenceMeaning: "Trâmites do visto." }
                ]
            },
            {
                character: "壊",
                meaning: "Quebrar / Destruir / Arruinar",
                kunyomi: "こわ・す (kowasu) / こわ・れる (kowareru)",
                onyomi: "カイ (KAI)",
                mnemonic: "Terra (土) desmoronada por colapso de estrutura.",
                examples: [
                    { word: "壊す (kowasu)", wordMeaning: "Quebrar / Destruir", sentence: "Tatemono o kowasu.", sentenceMeaning: "Destruir um prédio." },
                    { word: "破壊 (hakai)", wordMeaning: "Destruição total", sentence: "Nature no hakai.", sentenceMeaning: "Destruição da natureza." }
                ]
            },
            {
                character: "折",
                meaning: "Dobrar / Quebrar galho / Dobradiça",
                kunyomi: "お・る (oru) / お・れる (oreru)",
                onyomi: "セツ (SETSU)",
                mnemonic: "Mão (扌) quebrando ou dobrando o galho.",
                examples: [
                    { word: "折り紙 (origami)", wordMeaning: "Origami (dobradura de papel)", sentence: "Origami o折る.", sentenceMeaning: "Fazer dobradura de papel." },
                    { word: "骨折 (kossetsu)", wordMeaning: "Fratura óssea", sentence: "Ashi no kossetsu.", sentenceMeaning: "Fratura na perna." }
                ]
            },
            {
                character: "破",
                meaning: "Rasgar / Destruir / Romper",
                kunyomi: "やぶ・る (yaburu) / やぶ・れる (yabureru)",
                onyomi: "ハ (HA)",
                mnemonic: "Pedra (石) rasgando ou quebrando a superfície.",
                examples: [
                    { word: "破る (yaburu)", wordMeaning: "Rasgar (papel/promessa)", sentence: "Yakusoku o yaburu.", sentenceMeaning: "Quebrar uma promessa." },
                    { word: "破産 (hasan)", wordMeaning: "Falência", sentence: "Company no hasan.", sentenceMeaning: "Falência da empresa." }
                ]
            },
            {
                character: "倒",
                meaning: "Cair / Tombar / Derrotar",
                kunyomi: "たお・れる (taoreru) / たお・す (taosu)",
                onyomi: "トウ (TOU)",
                mnemonic: "Pessoa (亻) caindo de cabeça no chão.",
                examples: [
                    { word: "倒れる (taoreru)", wordMeaning: "Cair / Tombar", sentence: "Ki ga taoreru.", sentenceMeaning: "A árvore caiu." },
                    { word: "倒産 (tousan)", wordMeaning: "Falência de empresa", sentence: "Kigyou no tousan.", sentenceMeaning: "Falência da empresa." }
                ]
            },
            {
                character: "起",
                meaning: "Acordar / Ocorrer / Levantar",
                kunyomi: "お・きる (okiru) / お・こす (okosu)",
                onyomi: "キ (KI)",
                mnemonic: "Correr (走) e se levantar para o dia.",
                examples: [
                    { word: "起きる (okiru)", wordMeaning: "Acordar / Levantar-se", sentence: "Asa 6-ji ni okiru.", sentenceMeaning: "Acordar às 6 horas da manhã." },
                    { word: "起業 (kigyou)", wordMeaning: "Fundar uma empresa / Empreendedorismo", sentence: "Atarashii kigyou.", sentenceMeaning: "Empreendedorismo novo." }
                ]
            },
            {
                character: "慣",
                meaning: "Acostumar-se / Hábito / Prática",
                kunyomi: "な・れる (nareru) / な・らす (narasu)",
                onyomi: "カン (KAN)",
                mnemonic: "Coração (心) habituado a uma rotina frequente.",
                examples: [
                    { word: "習慣 (shuukan)", wordMeaning: "Hábito / Costume", sentence: "Good shuukan.", sentenceMeaning: "Bons hábitos." },
                    { word: "慣れる (nareru)", wordMeaning: "Acostumar-se com", sentence: "Seikatsu ni nareru.", sentenceMeaning: "Acostumar-se com a vida." }
                ]
            },
            {
                character: "整",
                meaning: "Organizar / Ajustar / Ordenar",
                kunyomi: "ととの・える (totoneru) / ととの・う (totonou)",
                onyomi: "セイ (SEI)",
                mnemonic: "Mão organizando e colocando as coisas em ordem perfeita.",
                examples: [
                    { word: "整理 (seiri)", wordMeaning: "Organização / Arrumação", sentence: "Heya no seiri.", sentenceMeaning: "Arrumação do quarto." },
                    { word: "調整 (chousei)", wordMeaning: "Ajuste / Regulagem", sentence: "Schedule no chousei.", sentenceMeaning: "Ajuste de agenda." }
                ]
            },
            {
                character: "改",
                meaning: "Reformar / Alterar / Melhorar",
                kunyomi: "あらた・める (aratameru) / あらた・まる (aratamaru)",
                onyomi: "カイ (KAI)",
                mnemonic: "Mão aplicando correções para melhorar o objeto.",
                examples: [
                    { word: "改善 (kaizen)", wordMeaning: "Melhoria contínua (Kaizen)", sentence: "Work no kaizen.", sentenceMeaning: "Melhoria contínua no trabalho." },
                    { word: "改札 (kaisatsu)", wordMeaning: "Catraca de estação de trem", sentence: "Kaisatsu guchi.", sentenceMeaning: "Catraca da estação." }
                ]
            },
            {
                character: "乱",
                meaning: "Desarrumar / Perturbar / Confusão",
                kunyomi: "みだ・れる (midareru) / みだ・す (midasu)",
                onyomi: "ラン (RAN)",
                mnemonic: "Fios embaraçados em desordem pública.",
                examples: [
                    { word: "混乱 (konran)", wordMeaning: "Confusão / Caos", sentence: "Konran o防ぐ.", sentenceMeaning: "Evitar confusão." },
                    { word: "乱用 (ranyou)", wordMeaning: "Uso indevido / Abuso", sentence: "Power no ranyou.", sentenceMeaning: "Abuso de poder." }
                ]
            },
            {
                character: "戻",
                meaning: "Voltar / Retornar / Devolver",
                kunyomi: "もど・る (modoru) / もど・す (modosu)",
                onyomi: "レイ (REI)",
                mnemonic: "Voltar para trás da porta da casa.",
                examples: [
                    { word: "戻る (modoru)", wordMeaning: "Voltar / Retornar", sentence: "Ie ni modoru.", sentenceMeaning: "Voltar para casa." },
                    { word: "払い戻し (haraimodoshi)", wordMeaning: "Reembolso", sentence: "Ticket no haraimodoshi.", sentenceMeaning: "Reembolso do ingresso." }
                ]
            },
            {
                character: "替",
                meaning: "Substituir / Trocar / Mudar",
                kunyomi: "か・える (kaeru) / か・わる (kawaru)",
                onyomi: "タイ (TAI)",
                mnemonic: "Duas pessoas se alternando na mesma posição.",
                examples: [
                    { word: "両替 (ryougae)", wordMeaning: "Câmbio de moedas", sentence: "Money no ryougae.", sentenceMeaning: "Câmbio de moeda." },
                    { word: "着替え (kigae)", wordMeaning: "Troca de roupa", sentence: "Kigae o suru.", sentenceMeaning: "Trocar de roupa." }
                ]
            },
            {
                character: "移",
                meaning: "Mudar-se / Transferir / Contagiar",
                kunyomi: "うつ・る (utsuru) / うつ・す (utsusu)",
                onyomi: "イ (I)",
                mnemonic: "Grãos (禾) movidos de um campo para outro.",
                examples: [
                    { word: "移動 (idou)", wordMeaning: "Deslocamento / Mudança de local", sentence: "Bus de idou suru.", sentenceMeaning: "Deslocar-se de ônibus." },
                    { word: "移転 (iten)", wordMeaning: "Mudança de sede/escritório", sentence: "Office no iten.", sentenceMeaning: "Mudança de sede da empresa." }
                ]
            },
            {
                character: "換",
                meaning: "Converter / Permutar / Trocar",
                kunyomi: "か・える (kaeru)",
                onyomi: "カン (KAN)",
                mnemonic: "Mão (扌) efetuando a troca direta de objetos.",
                examples: [
                    { word: "交換 (koukan)", wordMeaning: "Troca / Permuta", sentence: "Card no koukan.", sentenceMeaning: "Troca de cartões." },
                    { word: "変換 (henkan)", wordMeaning: "Conversão de texto/dados", sentence: "Kanji no henkan.", sentenceMeaning: "Conversão em ideogramas." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 変化 (henka)?", options: ["Mudança / Transformação", "Melhoria", "Falência", "Início"], a: 0 },
            { q: "Traduza 習慣 (shuukan):", options: ["Hábito / Costume", "Decisão", "Origami", "Caos"], a: 0 },
            { q: "Kunyomi de 起きる:", options: ["お・きる (okiru)", "たお・れる", "もど・る", "のこ・る"], a: 0 },
            { q: "Onyomi de 決定 (Decisão):", options: ["ケツ (KETSU)", "HEN", "KAN", "ZAN"], a: 0 },
            { q: "O que significa 改善 (kaizen)?", options: ["Melhoria contínua", "Quebra", "Destruição", "Reembolso"], a: 0 },
            { q: "Qual o kanji de 両替 (ryougae - Câmbio)?", options: ["替", "換", "移", "戻"], a: 0 },
            { q: "Traduza 手続き (tetsuduki):", options: ["Trâmites / Procedimentos", "Decisão", "Destruição", "Acordo"], a: 0 },
            { q: "Qual o kanji de 破壊 (hakai - Destruição)?", options: ["壊", "折", "破", "倒"], a: 0 },
            { q: "Significado de 移動 (idou):", options: ["Deslocamento / Mudança de local", "Leitura", "Falência", "Demissão"], a: 0 },
            { q: "Complete: Visa no ______ (Trâmites do visto).", options: ["tetsuduki (手続き)", "kaizen", "idou", "henkan"], a: 0 }
        ]
    },
    {
        module: 16,
        title: "Módulo 16: Adjetivos e Qualidades Intermediárias",
        description: "Estude 20 ideogramas de graus de intensidade, texturas, complexidade, formatos e sensações físicas.",
        grammar: {
            title: "Expressando Comparação Avançada (~ni kurabete)",
            explanation: "No N3, comparam-se qualidades e adjetivos entre elementos através da estrutura ~ni kurabete.",
            example: "Kono hou ga ezai desu.",
            translation: "Este lado é mais simples em comparação."
        },
        readingText: {
            title: "性質と状態の比較 (Comparação de Qualidades e Estados)",
            japanese: "この問題は<ruby>複<rt>ふく</rt></ruby>雑で見かけは<ruby>難<rt>むずか</rt></ruby>しいですが、<ruby>鋭<rt>すい</rt></ruby>い視点で考えると<ruby>易<rt>やさ</rt></ruby>しく解けます。",
            romaji: "Kono mondai wa fukuzatsu de mikake wa muzukashii desu ga, sharp na shiten de kangaeru to yasashiku tokemasu.",
            translation: "Esta questão é complexa e parece difícil à primeira vista, mas pensando sob uma perspectiva aguçada, resolve-se facilmente.",
            comprehensionQuiz: [
                {
                    q: "Como a questão pode ser resolvida?", options: ["Facilmente, pensando sob uma perspectiva aguçada (鋭い視点で考えると易しく解ける)", "Não pode ser resolvida", "Comprando um livro novo", "Desistindo"], a: 0
                },
                {
                    q: "Qual a leitura de 複雑?", options: ["ふくざつ (fukuzatsu)", "むずかしい", "やさしい", "するどい"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "複",
                meaning: "Complexo / Múltiplo / Duplo",
                kunyomi: "ふく (fuku)",
                onyomi: "フク (FUKU)",
                mnemonic: "Vestimenta com múltiplas camadas e dobras.",
                examples: [
                    { word: "複雑 (fukuzatsu)", wordMeaning: "Complexo / Complicado", sentence: "Fukuzatsu na mondai.", sentenceMeaning: "Problema complexo." },
                    { word: "複写 (fukusha)", wordMeaning: "Cópia / Duplicação", sentence: "Documento no fukusha.", sentenceMeaning: "Cópia de documento." }
                ]
            },
            {
                character: "易",
                meaning: "Fácil / Simples / Trocar",
                kunyomi: "やさ・しい (yasashii)",
                onyomi: "エキ (EKI) / イ (I)",
                mnemonic: "Sol e camaleão mudando de cor facilmente.",
                examples: [
                    { word: "平易 (heii)", wordMeaning: "Simples / Fácil de entender", sentence: "Heii na kotoba.", sentenceMeaning: "Palavras simples." },
                    { word: "貿易 (boueki)", wordMeaning: "Comércio exterior", sentence: "Boueki kaisha.", sentenceMeaning: "Empresa de comércio exterior." }
                ]
            },
            {
                character: "難",
                meaning: "Difícil / Dificuldade / Desastre",
                kunyomi: "むずか・しい (muzukashii) / かた・い (katai)",
                onyomi: "ナン (NAN)",
                mnemonic: "Pássaro preso sob a chuva enfrentando sérias dificuldades.",
                examples: [
                    { word: "困難 (kannan)", wordMeaning: "Dificuldade grave", sentence: "Kannan o koeru.", sentenceMeaning: "Superar dificuldades." },
                    { word: "避難 (hinan)", wordMeaning: "Evacuação", sentence: "Hinan basho.", sentenceMeaning: "Local de evacuação." }
                ]
            },
            {
                character: "厚",
                meaning: "Espesso / Grosso / Gentil",
                kunyomi: "あつ・い (atsui)",
                onyomi: "コウ (KOU)",
                mnemonic: "Penhasco com camadas espessas de pedra.",
                examples: [
                    { word: "厚い (atsui)", wordMeaning: "Grosso / Espesso (livro/camada)", sentence: "Atsui hon.", sentenceMeaning: "Livro grosso." },
                    { word: "濃厚 (noukou)", wordMeaning: "Sabor denso / Concentrado", sentence: "Noukou na soup.", sentenceMeaning: "Sopa densa e saborosa." }
                ]
            },
            {
                character: "薄",
                meaning: "Fino / Fraco / Suave / Diluído",
                kunyomi: "うす・い (usui) / うす・める (usumeru)",
                onyomi: "ハク (HAKU)",
                mnemonic: "Plantas (艹) e água diluindo a cor até ficar fraca.",
                examples: [
                    { word: "薄い (usui)", wordMeaning: "Fino / Fraco (sabor/papel)", sentence: "Usui paper.", sentenceMeaning: "Papel fino." },
                    { word: "薄弱 (hakujaku)", wordMeaning: "Fraco / Sem força", sentence: "Will ga hakujaku.", sentenceMeaning: "Vontade fraca." }
                ]
            },
            {
                character: "浅",
                meaning: "Raso / Superficial",
                kunyomi: "あさ・い (asai)",
                onyomi: "セン (SEN)",
                mnemonic: "Água (氵) rasa onde se pode andar a pé.",
                examples: [
                    { word: "浅い (asai)", wordMeaning: "Raso / Superficial", sentence: "Asai kawa.", sentenceMeaning: "Rio raso." },
                    { word: "浅見 (senken)", wordMeaning: "Visão superficial", sentence: "Senken desu.", sentenceMeaning: "É uma visão superficial." }
                ]
            },
            {
                character: "深",
                meaning: "Fundo / Profundo / Intenso",
                kunyomi: "ふか・い (fukai) / ふか・める (fukameru)",
                onyomi: "シン (SHIN)",
                mnemonic: "Água (氵) profunda na caverna à noite.",
                examples: [
                    { word: "深い (fukai)", wordMeaning: "Profundo / Fundo", sentence: "Fukai umi.", sentenceMeaning: "Mar profundo." },
                    { word: "深夜 (shinya)", wordMeaning: "Madrugada / Meia-noite", sentence: "Shinya ni okiru.", sentenceMeaning: "Acordar de madrugada." }
                ]
            },
            {
                character: "細",
                meaning: "Fino / Detalhado / Estreito",
                kunyomi: "ほそ・い (hosoi) / こま・かい (komakai)",
                onyomi: "サイ (SAI)",
                mnemonic: "Fios de linha (糸) muito finos e delicados.",
                examples: [
                    { word: "細かい (komakai)", wordMeaning: "Detalhado / Pequeno", sentence: "Komakai money.", sentenceMeaning: "Dinheiro trocado/miúdo." },
                    { word: "詳細 (shousai)", wordMeaning: "Detalhes minuciosos", sentence: "Shousai o kakunin.", sentenceMeaning: "Confirmar os detalhes." }
                ]
            },
            {
                character: "粗",
                meaning: "Grosseiro / Aspero / Simples",
                kunyomi: "あら・い (arai)",
                onyomi: "ソ (SO)",
                mnemonic: "Grãos de arroz (米) ainda não polidos, com textura grosseira.",
                examples: [
                    { word: "粗末 (somatsu)", wordMeaning: "Grosseiro / Simples / Desperdício", sentence: "Food o somatsu ni suru-na.", sentenceMeaning: "Não desperdice comida." },
                    { word: "粗大 (sodai)", wordMeaning: "Volumoso / Grande e grosseiro", sentence: "Sodai gomi.", sentenceMeaning: "Lixo volumoso." }
                ]
            },
            {
                character: "鋭",
                meaning: "Afiado / Aguçado / Afiar",
                kunyomi: "するど・い (surudoi)",
                onyomi: "エイ (EI)",
                mnemonic: "Metal (金) pontiagudo e extremamente afiado.",
                examples: [
                    { word: "鋭い (surudoi)", wordMeaning: "Afiado / Aguçado (olhar/faca)", sentence: "Surudoi knife.", sentenceMeaning: "Faca afiada." },
                    { word: "鋭敏 (eibin)", wordMeaning: "Aguçado / Sensível", sentence: "Eibin na kankaku.", sentenceMeaning: "Sentido aguçado." }
                ]
            },
            {
                character: "鈍",
                meaning: "Cego (faca) / Lento / Embotado",
                kunyomi: "にぶ・い (nibui) / にぶ・る (niburu)",
                onyomi: "ドン (DON)",
                mnemonic: "Metal (金) pesado e sem ponta afiada.",
                examples: [
                    { word: "鈍い (nibui)", wordMeaning: "Lento / Embotado / Sem corte", sentence: "Nibui knife.", sentenceMeaning: "Faca sem corte." },
                    { word: "鈍感 (donkan)", wordMeaning: "Insensível / Lento de raciocínio", sentence: "Donkan na hito.", sentenceMeaning: "Pessoa insensível." }
                ]
            },
            {
                character: "軟",
                meaning: "Macio / Flexível / Suave",
                kunyomi: "やわ・らかい (yawarakai)",
                onyomi: "ナン (NAN)",
                mnemonic: "Carroceria flexível e fofa.",
                examples: [
                    { word: "柔軟 (juunan)", wordMeaning: "Flexível / Adaptável", sentence: "Juunan na attitude.", sentenceMeaning: "Atitude flexível." },
                    { word: "軟らかい (yawarakai)", wordMeaning: "Macio / Fofo (pão/almofada)", sentence: "Yawarakai bread.", sentenceMeaning: "Pão macio." }
                ]
            },
            {
                character: "硬",
                meaning: "Duro / Rígido / Firme",
                kunyomi: "かた・い (katai)",
                onyomi: "コウ (KOU)",
                mnemonic: "Pedra (石) resistente e rígida.",
                examples: [
                    { word: "硬い (katai)", wordMeaning: "Duro / Rígido", sentence: "Katai stone.", sentenceMeaning: "Pedra dura." },
                    { word: "硬貨 (kouka)", wordMeaning: "Moeda metálica", sentence: "Kouka o tsukau.", sentenceMeaning: "Usar moedas metálicas." }
                ]
            },
            {
                character: "苦",
                meaning: "Amargo / Doloroso / Sofrimento",
                kunyomi: "くる・しい (kurushii) / にが・い (nigai)",
                onyomi: "ク (KU)",
                mnemonic: "Plantas (艹) amargas usadas em remédios caseiros.",
                examples: [
                    { word: "苦い (nigai)", wordMeaning: "Amargo (sabor)", sentence: "Nigai medicine.", sentenceMeaning: "Remédio amargo." },
                    { word: "苦労 (kurou)", wordMeaning: "Esforço duro / Dificuldade", sentence: "Kurou o suru.", sentenceMeaning: "Passar por dificuldades." }
                ]
            },
            {
                character: "甘",
                meaning: "Doce / Indulgente / Mimo",
                kunyomi: "あま・い (amai) / あま・える (amaeru)",
                onyomi: "カン (KAN)",
                mnemonic: "Boca degustando algo saboroso e doce.",
                examples: [
                    { word: "甘い (amai)", wordMeaning: "Doce (sabor)", sentence: "Amai cake.", sentenceMeaning: "Bolo doce." },
                    { word: "甘え (amae)", wordMeaning: "Dependência afetuosa / Mimo", sentence: "Amaeru kodomo.", sentenceMeaning: "Criança mimada." }
                ]
            },
            {
                character: "酸",
                meaning: "Azedo / Ácido",
                kunyomi: "す・っぱい (suppai)",
                onyomi: "サン (SAN)",
                mnemonic: "Bebida fermentada no jarro com sabor azedo.",
                examples: [
                    { word: "酸っぱい (suppai)", wordMeaning: "Azedo", sentence: "Suppai lemon.", sentenceMeaning: "Limão azedo." },
                    { word: "酸素 (sanso)", wordMeaning: "Oxigênio", sentence: "Sanso o吸う.", sentenceMeaning: "Respirar oxigênio." }
                ]
            },
            {
                character: "辛",
                meaning: "Picante / Doloroso / Árduo",
                kunyomi: "から・い (karai) / つら・い (tsurai)",
                onyomi: "シン (SHIN)",
                mnemonic: "Pimenta afiada causando ardor na língua.",
                examples: [
                    { word: "辛い (karai)", wordMeaning: "Picante / Apimentado", sentence: "Karai curry.", sentenceMeaning: "Curry picante." },
                    { word: "辛い (tsurai)", wordMeaning: "Doloroso / Árduo (emocionalmente)", sentence: "Tsurai experience.", sentenceMeaning: "Experiência dolorosa." }
                ]
            },
            {
                character: "忙",
                meaning: "Ocupado / Atarefado",
                kunyomi: "いそが・しい (isogashii)",
                onyomi: "ボウ (BOU)",
                mnemonic: "Coração (忄) sem tempo, atarefado com compromissos.",
                examples: [
                    { word: "忙しい (isogashii)", wordMeaning: "Ocupado", sentence: "Kyou wa isogashii desu.", sentenceMeaning: "Hoje estou ocupado." },
                    { word: "多忙 (tabou)", wordMeaning: "Muito atarefado", sentence: "Tabou na daily.", sentenceMeaning: "Dia a dia muito atarefado." }
                ]
            },
            {
                character: "痛",
                meaning: "Doloroso / Sentir dor / Ferimento",
                kunyomi: "いた・い (itai) / いた・む (itamu)",
                onyomi: "ツウ (TSUU)",
                mnemonic: "Enfermidade (疒) provocando dores físicas.",
                examples: [
                    { word: "痛い (itai)", wordMeaning: "Doloroso / Dói", sentence: "Ashi ga itai.", sentenceMeaning: "Estou com dor no pé." },
                    { word: "痛痛しい (itaitashii)", wordMeaning: "Doloroso de se ver", sentence: "Itaitashii sugata.", sentenceMeaning: "Uma cena dolorosa de se ver." }
                ]
            },
            {
                character: "賢",
                meaning: "Sábio / Inteligente / Sensato",
                kunyomi: "かしこ・い (kashikoi)",
                onyomi: "ケン (KEN)",
                mnemonic: "Moedas e saber acumulados com sabedoria.",
                examples: [
                    { word: "賢い (kashikoi)", wordMeaning: "Inteligente / Sábio", sentence: "Kashikoi kodomo.", sentenceMeaning: "Criança inteligente." },
                    { word: "賢明 (kenmei)", wordMeaning: "Sensato / Prudente", sentence: "Kenmei na judgment.", sentenceMeaning: "Julgamento sensato." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 複雑 (fukuzatsu)?", options: ["Complexo / Complicado", "Raso", "Doce", "Afiado"], a: 0 },
            { q: "Traduza 柔軟 (juunan):", options: ["Flexível / Adaptável", "Duro", "Superficial", "Picante"], a: 0 },
            { q: "Kunyomi de 忙しい:", options: ["いそが・しい (isogashii)", "むずか・しい", "あま・い", "から・い"], a: 0 },
            { q: "Onyomi de 酸 (Azedo):", options: ["サン (SAN)", "KOU", "DON", "NAN"], a: 0 },
            { q: "O que significa 詳細 (shousai)?", options: ["Detalhes minuciosos", "Suco azedo", "Limão", "Dificuldade"], a: 0 },
            { q: "Qual o kanji de 賢い (kashikoi - Sábio)?", options: ["賢", "痛", "忙", "辛"], a: 0 },
            { q: "Traduza 苦い (nigai):", options: ["Amargo (sabor)", "Doce", "Picante", "Azedo"], a: 0 },
            { q: "Qual o kanji de 深夜 (shinya - Madrugada)?", options: ["深", "浅", "薄", "厚"], a: 0 },
            { q: "Significado de 鋭い (surudoi):", options: ["Afiado / Aguçado", "Embotado", "Superficial", "Lento"], a: 0 },
            { q: "Complete: Kyou wa ______ (Hoje estou ocupado).", options: ["isogashii (忙しい)", "nigai", "usui", "fukai"], a: 0 }
        ]
    },
    {
        module: 17,
        title: "Módulo 17: Regras, Leis e Sociedade Política",
        description: "Estude 20 ideogramas de direitos civis, regulamentos, deveres, leis, tribunais e sociedade política.",
        grammar: {
            title: "Expressando Regras Sociais (~koto ni natte iru)",
            explanation: "Uso da estrutura ~koto ni natte iru para regras sociais, leis e convenções normativas.",
            example: "Kisoku o mamoru koto ni natte imasu.",
            translation: "Ficou estabelecido cumprir as regras."
        },
        readingText: {
            title: "法律と社会のルール (Leis e Regras da Sociedade)",
            japanese: "社会の<ruby>秩序<rt>ちつじょ</rt></ruby>を守るために<ruby>法律<rt>ほうりつ</rt></ruby>や<ruby>規則<rt>きそく</rt></ruby>があります。<ruby>違法<rt>いほう</rt></ruby>な行為は<ruby>罰<rt>ばっ</rt></ruby>せられ、国民は<ruby>権利<rt>けんり</rt></ruby>と<ruby>義務<rt>ぎむ</rt></ruby>を持ちます。",
            romaji: "Shakai no chitsujo o mamoru tame ni houritsu ya kisoku ga arimasu. Ihou na koui wa bassera-re, kokumin wa kenri to gimu o mochimasu.",
            translation: "Para manter a ordem da sociedade, existem leis e regulamentos. Atos ilegais são punidos, e os cidadãos possuem direitos e deveres.",
            comprehensionQuiz: [
                {
                    q: "Por que existem leis e regulamentos na sociedade?", options: ["Para manter a ordem social (社会の秩序を守るため)", "Para impedir as pessoas de viajar", "Sem motivo", "Para fechar as escolas"], a: 0
                },
                {
                    q: "Qual a leitura de 権利?", options: ["けんり (kenri)", "ぎむ", "きそく", "ほうりつ"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "規",
                meaning: "Regra / Norma / Padrão / Medida",
                kunyomi: "き (ki)",
                onyomi: "キ (KI)",
                mnemonic: "Ver (見) e seguir a bússola dos padrões estabelecidos.",
                examples: [
                    { word: "規則 (kisoku)", wordMeaning: "Regulamento / Regra", sentence: "Kisoku o mamoru.", sentenceMeaning: "Cumprir as regras." },
                    { word: "大規模 (daikibo)", wordMeaning: "Grande escala", sentence: "Daikibo na project.", sentenceMeaning: "Projeto em grande escala." }
                ]
            },
            {
                character: "則",
                meaning: "Regulamento / Lei / Seguir o padrão",
                kunyomi: "のっと・る (nottoru)",
                onyomi: "ソク (SOKU)",
                mnemonic: "Faca (刂) gravando o código das leis nas tábuas.",
                examples: [
                    { word: "法則 (housoku)", wordMeaning: "Lei natural / Princípio", sentence: "Shizen no housoku.", sentenceMeaning: "Lei da natureza." },
                    { word: "反則 (hansoku)", wordMeaning: "Falta / Infração às regras", sentence: "Game de hansoku suru.", sentenceMeaning: "Cometer falta no jogo." }
                ]
            },
            {
                character: "律",
                meaning: "Lei / Ritmo / Regulamento oficial",
                kunyomi: "りつ (ritsu)",
                onyomi: "リツ (RITSU) / リチ (RICHI)",
                mnemonic: "Passos firmes na estrada sob a disciplina das leis.",
                examples: [
                    { word: "法律 (houritsu)", wordMeaning: "Lei / Legislação", sentence: "Houritsu o mamoru.", sentenceMeaning: "Respeitar a lei." },
                    { word: "自律 (jiritsu)", wordMeaning: "Autodisciplina / Autonomia", sentence: "Jiritsu shita person.", sentenceMeaning: "Pessoa autodisciplinada." }
                ]
            },
            {
                character: "禁",
                meaning: "Proibir / Vedado / Restrição",
                kunyomi: "きん (kin)",
                onyomi: "キン (KIN)",
                mnemonic: "Árvores (林) sob aviso do altar sagrado proibindo acesso.",
                examples: [
                    { word: "禁止 (kinshi)", wordMeaning: "Proibição", sentence: "Chusha kinshi.", sentenceMeaning: "Proibido estacionar." },
                    { word: "禁煙 (kin'en)", wordMeaning: "Proibido fumar", sentence: "Koko wa kin'en desu.", sentenceMeaning: "Aqui é proibido fumar." }
                ]
            },
            {
                character: "許",
                meaning: "Permitir / Conceder / Perdoar",
                kunyomi: "ゆる・す (yurusu)",
                onyomi: "キョ (KYO)",
                mnemonic: "Palavras (言) concedendo licença e permissão.",
                examples: [
                    { word: "許可 (kyoka)", wordMeaning: "Permissão / Licença", sentence: "Kyoka o morau.", sentenceMeaning: "Obter permissão." },
                    { word: "許す (yurusu)", wordMeaning: "Perdoar / Permitir", sentence: "Ayamachi o yurusu.", sentenceMeaning: "Perdoar o erro." }
                ]
            },
            {
                character: "守",
                meaning: "Proteger / Cumprir / Guardar / Defesa",
                kunyomi: "まも・る (mamoru) / もり (mori)",
                onyomi: "シュ (SHU) / ス (SU)",
                mnemonic: "Teto abrigando e protegendo os cidadãos.",
                examples: [
                    { word: "守る (mamoru)", wordMeaning: "Proteger / Respeitar (regras)", sentence: "Yakusoku o mamoru.", sentenceMeaning: "Manter a promessa." },
                    { word: "留守 (rusu)", wordMeaning: "Ausente de casa", sentence: "Tadaima rusu desu.", sentenceMeaning: "Estou ausente no momento." }
                ]
            },
            {
                character: "犯",
                meaning: "Cometer / Crime / Violado / Ofensa",
                kunyomi: "おか・す (okasu)",
                onyomi: "ハン (HAN)",
                mnemonic: "Cão (犭) atacando em infração às normas.",
                examples: [
                    { word: "犯罪 (hanzai)", wordMeaning: "Crime", sentence: "Hanzai o防ぐ.", sentenceMeaning: "Prevenir o crime." },
                    { word: "犯人 (hannin)", wordMeaning: "Criminoso / Culpado", sentence: "Hannin o arrest.", sentenceMeaning: "Prender o criminoso." }
                ]
            },
            {
                character: "罪",
                meaning: "Culpa / Delito / Pecado",
                kunyomi: "つみ (tsumi)",
                onyomi: "ザイ (ZAI)",
                mnemonic: "Rede sobre os atos ilícitos.",
                examples: [
                    { word: "無罪 (muzai)", wordMeaning: "Inocência", sentence: "Muzai no判決.", sentenceMeaning: "Veredito de inocência." },
                    { word: "罪 (tsumi)", wordMeaning: "Culpa / Crime", sentence: "Tsumi o mitomeru.", sentenceMeaning: "Admitir a culpa." }
                ]
            },
            {
                character: "判",
                meaning: "Julgar / Discernir / Veredito / Carimbo",
                kunyomi: "わか・る (wakaru)",
                onyomi: "ハン (HAN) / バン (BAN)",
                mnemonic: "Faca (刂) cortando a questão e emitindo o julgamento.",
                examples: [
                    { word: "裁判 (saiban)", wordMeaning: "Julgamento / Tribunal", sentence: "Saiban o okonao.", sentenceMeaning: "Realizar o julgamento." },
                    { word: "判断 (handan)", wordMeaning: "Julgamento / Decisão", sentence: "Correct handan.", sentenceMeaning: "Decisão correta." }
                ]
            },
            {
                character: "官",
                meaning: "Oficial público / Autoridade / Governo",
                kunyomi: "かん (kan)",
                onyomi: "カン (KAN)",
                mnemonic: "Prédio do governo onde trabalham as autoridades públicas.",
                examples: [
                    { word: "警官 (keikan)", wordMeaning: "Policial", sentence: "Keikan ni tazuneru.", sentenceMeaning: "Perguntar ao policial." },
                    { word: "官庁 (kanchou)", wordMeaning: "Órgão governamental", sentence: "Kanchou no district.", sentenceMeaning: "Distrito dos órgãos governamentais." }
                ]
            },
            {
                character: "党",
                meaning: "Partido político / Faction / Grupo",
                kunyomi: "とう (tou)",
                onyomi: "トウ (TOU)",
                mnemonic: "Grupo sob a mesma bandeira ideológica.",
                examples: [
                    { word: "政党 (seitou)", wordMeaning: "Partido político", sentence: "Seitou no candidate.", sentenceMeaning: "Candidato do partido político." },
                    { word: "野党 (yatou)", wordMeaning: "Partido de oposição", sentence: "Yatou no debate.", sentenceMeaning: "Debate do partido de oposição." }
                ]
            },
            {
                character: "票",
                meaning: "Voto / Cédula / Bilhete",
                kunyomi: "ひょう (hyou)",
                onyomi: "ヒョウ (HYOU)",
                mnemonic: "Papel leve com o voto da eleição deposita na urna.",
                examples: [
                    { word: "投票 (touhyou)", wordMeaning: "Votação / Ato de votar", sentence: "Touhyou ni iku.", sentenceMeaning: "Ir votar." },
                    { word: "開票 (kaihyou)", wordMeaning: "Apuração dos votos", sentence: "Kaihyou no result.", sentenceMeaning: "Resultado da apuração dos votos." }
                ]
            },
            {
                character: "権",
                meaning: "Direito / Autoridade / Poder",
                kunyomi: "けん (ken)",
                onyomi: "ケン (KEN) / ゴン (GON)",
                mnemonic: "Árvore (木) e autoridade concedendo direitos formais.",
                examples: [
                    { word: "権利 (kenri)", wordMeaning: "Direito legal", sentence: "Kenri o主張.", sentenceMeaning: "Reivindicar um direito." },
                    { word: "人権 (jinken)", wordMeaning: "Direitos humanos", sentence: "Jinken no protection.", sentenceMeaning: "Proteção dos direitos humanos." }
                ]
            },
            {
                character: "義",
                meaning: "Justiça / Dever moral / Significado",
                kunyomi: "ぎ (gi)",
                onyomi: "ギ (GI)",
                mnemonic: "Ovelha e eu agindo com retidão moral.",
                examples: [
                    { word: "義務 (gimu)", wordMeaning: "Dever / Obrigação", sentence: "Kokumin no gimu.", sentenceMeaning: "Dever do cidadão." },
                    { word: "正義 (seigi)", wordMeaning: "Justiça", sentence: "Seigi o mamoru.", sentenceMeaning: "Defender a justiça." }
                ]
            },
            {
                character: "務",
                meaning: "Dever / Tarefa / Desempenhar função",
                kunyomi: "つと・める (tsutomeru)",
                onyomi: "ム (MU)",
                mnemonic: "Força (力) dedicada ao cumprimento do dever.",
                examples: [
                    { word: "務める (tsutomeru)", wordMeaning: "Desempenhar o cargo/dever", sentence: "Leader o tsutomeru.", sentenceMeaning: "Desempenhar a função de líder." },
                    { word: "事務 (jimu)", wordMeaning: "Trabalho de escritório / Administração", sentence: "Jimusho de work.", sentenceMeaning: "Trabalhar no escritório." }
                ]
            },
            {
                character: "令",
                meaning: "Ordem / Mandato / Comando legal",
                kunyomi: "れい (rei)",
                onyomi: "レイ (REI)",
                mnemonic: "Pessoa de joelhos ouvindo o mandato oficial.",
                examples: [
                    { word: "命令 (meirei)", wordMeaning: "Ordem / Comando", sentence: "Meirei o dasu.", sentenceMeaning: "Dar uma ordem." },
                    { word: "法令 (hourei)", wordMeaning: "Decreto / Leis e regulamentos", sentence: "Hourei o junshu.", sentenceMeaning: "Cumprir dekreto e leis." }
                ]
            },
            {
                character: "制",
                meaning: "Sistema / Controle / Regulamento",
                kunyomi: "せい (sei)",
                onyomi: "セイ (SEI)",
                mnemonic: "Faca (刂) estabelecendo o sistema de regras.",
                examples: [
                    { word: "制度 (seido)", wordMeaning: "Sistema / Instituição", sentence: "Kyouiku seido.", sentenceMeaning: "Sistema educacional." },
                    { word: "制服 (seifuku)", wordMeaning: "Uniforme oficial", sentence: "Seifuku o kiru.", sentenceMeaning: "Vestir o uniforme." }
                ]
            },
            {
                character: "府",
                meaning: "Prefeitura governamental / Sede / Capital",
                kunyomi: "ふ (fu)",
                onyomi: "フ (FU)",
                mnemonic: "Prédio sob o teto abrigando a sede do governo.",
                examples: [
                    { word: "政府 (seifu)", wordMeaning: "Governo", sentence: "Seifu no plan.", sentenceMeaning: "Plano do governo." },
                    { word: "大阪府 (oosakafu)", wordMeaning: "Prefeitura de Osaka", sentence: "Oosakafu no city.", sentenceMeaning: "Cidade da prefeitura de Osaka." }
                ]
            },
            {
                character: "政",
                meaning: "Política / Governo / Administração pública",
                kunyomi: "まつりごと (matsurigoto)",
                onyomi: "セイ (SEI) / ショウ (SHOU)",
                mnemonic: "Governar com ordem e leis corretas.",
                examples: [
                    { word: "政治 (seiji)", wordMeaning: "Política", sentence: "Seiji no debate.", sentenceMeaning: "Debate de política." },
                    { word: "行政 (gyousei)", wordMeaning: "Administração pública", sentence: "Gyousei no service.", sentenceMeaning: "Serviço da administração pública." }
                ]
            },
            {
                character: "憲",
                meaning: "Constituição / Lei Suprema do Estado",
                kunyomi: "おきて (okite)",
                onyomi: "ケン (KEN)",
                mnemonic: "Leis supremas escritas no coração da nação.",
                examples: [
                    { word: "憲法 (kenpou)", wordMeaning: "Constituição", sentence: "Kenpou o mamoru.", sentenceMeaning: "Respeitar a constituição." },
                    { word: "違憲 (iken)", wordMeaning: "Inconstitucionalidade", sentence: "Iken no判決.", sentenceMeaning: "Veredito de inconstitucionalidade." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 法律 (houritsu)?", options: ["Lei / Legislação", "Votação", "Inocência", "Falta"], a: 0 },
            { q: "Traduza 投票 (touhyou):", options: ["Votação / Ato de votar", "Crime", "Constituição", "Ordem"], a: 0 },
            { q: "Kunyomi de 守る:", options: ["まも・る (mamoru)", "ゆる・す", "おか・す", "わか・る"], a: 0 },
            { q: "Onyomi de 憲法 (Constituição):", options: ["ケン (KEN)", "SEI", "FU", "REI"], a: 0 },
            { q: "O que significa 許可 (kyoka)?", options: ["Permissão / Licença", "Crime", "Proibição", "Prisão"], a: 0 },
            { q: "Qual o kanji de 犯罪 (hanzai - Crime)?", options: ["犯", "規", "律", "制"], a: 0 },
            { q: "Traduza 政府 (seifu):", options: ["Governo", "Prefeitura", "Julgamento", "Voto"], a: 0 },
            { q: "Qual o kanji de 義務 (gimu - Dever)?", options: ["義", "票", "党", "官"], a: 0 },
            { q: "Significado de 裁判 (saiban):", options: ["Julgamento / Tribunal", "Constituição", "Decreto", "Infração"], a: 0 },
            { q: "Complete: Kenpou o ______ (Respeitar a constituição).", options: ["mamoru (守る)", "yurusu", "okasu", "kinshi"], a: 0 }
        ]
    },
    {
        module: 18,
        title: "Módulo 18: Tempo Relativo, Frequência e Ordem",
        description: "Estude 20 ideogramas de momentos temporais, ordens cronológicas, frequências e prazos.",
        grammar: {
            title: "Expressando Continuidade Temporária (~tsuzukeru)",
            explanation: "No N3, verbos conectam-se a tsuzukeru para indicar a continuação e persistência de uma ação no tempo.",
            example: "Benkyou shitsuzukemasu.",
            translation: "Continuo estudando sem parar."
        },
        readingText: {
            title: "歴史と時代の流れ (História e o Fluxo do Tempo)",
            japanese: "<ruby>昔<rt>むかし</rt></ruby>の<ruby>歴史<rt>れきし</rt></ruby>を振り返り、<ruby>未来<rt>みらい</rt></ruby>の<ruby>季節<rt>きせつ</rt></ruby>を<ruby>迎<rt>むか</rt></ruby>えます。<ruby>瞬間<rt>しゅんかん</rt></ruby>を大切にして<ruby>前進<rt>ぜんしん</rt></ruby>します。",
            romaji: "Mukashi no rekishi o furikaeri, mirai no kisetsu o mukaemasu. Shunkan o taisetsu ni shite zenshin shimasu.",
            translation: "Olhando para a história antiga, acolhemos as estações do futuro. Valorizamos cada instante e seguimos em frente.",
            comprehensionQuiz: [
                {
                    q: "O que a pessoa faz em relação ao tempo?", options: ["Olha para a história e acolhe o futuro valorizando os instantes (歴史を振り返り瞬間を大切にする)", "Dorme sem olhar o relógio", "Apaga os livros de história", "Reclama do tempo"], a: 0
                },
                {
                    q: "Qual a leitura de 季節?", options: ["きせつ (kisetsu)", "むかし", "れきし", "しゅんかん"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "序",
                meaning: "Ordem / Introdução / Sequência cronológica",
                kunyomi: "ついで (tsuide)",
                onyomi: "ジョ (JO)",
                mnemonic: "Edifício com ordem e sequência de degraus.",
                examples: [
                    { word: "順序 (junjot)", wordMeaning: "Ordem / Sequência", sentence: "Junjot ni narabu.", sentenceMeaning: "Alinhar em sequência." },
                    { word: "序文 (jobun)", wordMeaning: "Prefácio / Introdução", sentence: "Hon no jobun.", sentenceMeaning: "Prefácio do livro." }
                ]
            },
            {
                character: "昔",
                meaning: "Antigamente / Passado / Tempos antigos",
                kunyomi: "むかし (mukashi)",
                onyomi: "セキ (SEKI) / シャク (SHAKU)",
                mnemonic: "Sol (日) de vinte anos atrás lembrado no passado.",
                examples: [
                    { word: "昔 (mukashi)", wordMeaning: "Antigamente / Antigo", sentence: "Mukashi no story.", sentenceMeaning: "História de antigamente." },
                    { word: "昔話 (mukashibanashi)", wordMeaning: "Lenda folclórica antiga", sentence: "Mukashibanashi o yomu.", sentenceMeaning: "Ler uma lenda antiga." }
                ]
            },
            {
                character: "頃",
                meaning: "Época / Momento / Por volta de",
                kunyomi: "ころ (koro) / ごろ (goro)",
                onyomi: "キョウ (KYOU)",
                mnemonic: "Cabeça voltada para o momento exato.",
                examples: [
                    { word: "この頃 (kono koro)", wordMeaning: "Ultimamente / Estes dias", sentence: "Kono koro isogashii.", sentenceMeaning: "Ultimamente estou ocupado." },
                    { word: "子どもの頃 (kodomo no koro)", wordMeaning: "Na infância", sentence: "Kodomo no koro no memory.", sentenceMeaning: "Lembranças da infância." }
                ]
            },
            {
                character: "恒",
                meaning: "Constante / Permanente / Habituado",
                kunyomi: "つね (tsune)",
                onyomi: "コウ (KOU)",
                mnemonic: "Coração (心) e lua mantendo-se constantes.",
                examples: [
                    { word: "恒例 (kourei)", wordMeaning: "Tradição anual / Evento de praxe", sentence: "Kourei no event.", sentenceMeaning: "Evento tradicional de praxe." },
                    { word: "恒久 (koukyuu)", wordMeaning: "Permanente / Perpétuo", sentence: "Koukyuu heiwa.", sentenceMeaning: "Paz perpétua." }
                ]
            },
            {
                character: "季",
                meaning: "Estação do ano / Período",
                kunyomi: "き (ki)",
                onyomi: "キ (KI)",
                mnemonic: "Grãos (禾) e filho (子) crescendo ao longo das estações.",
                examples: [
                    { word: "季節 (kisetsu)", wordMeaning: "Estação do ano", sentence: "Four kisetsu.", sentenceMeaning: "Quatro estações do ano." },
                    { word: "四季 (shiki)", wordMeaning: "As quatro estações", sentence: "Nihon no shiki.", sentenceMeaning: "As quatro estações do Japão." }
                ]
            },
            {
                character: "節",
                meaning: "Estação / Articulação / Moderação / Verso",
                kunyomi: "ふし (fushi)",
                onyomi: "セツ (SETSU) / セチ (SECHI)",
                mnemonic: "Bambu divididos em nós e articulações perfeitas.",
                examples: [
                    { word: "節約 (setsuyaku)", wordMeaning: "Economia / Moderação no uso", sentence: "Electric o setsuyaku suru.", sentenceMeaning: "Economizar energia." },
                    { word: "関節 (kansetsu)", wordMeaning: "Articulação do corpo", sentence: "Kansetsu ga itai.", sentenceMeaning: "Estou com dor nas articulações." }
                ]
            },
            {
                character: "末",
                meaning: "Fim / Final / Extremidade",
                kunyomi: "すえ (sue)",
                onyomi: "マツ (MATSU) / バツ (BATSU)",
                mnemonic: "Topo da árvore com ramo mais longo indicando o fim.",
                examples: [
                    { word: "週末 (shuumatsu)", wordMeaning: "Fim de semana", sentence: "Shuumatsu ni ryokou.", sentenceMeaning: "Viajar no fim de semana." },
                    { word: "月末 (getsumatsu)", wordMeaning: "Fim do mês", sentence: "Getsumatsu no payment.", sentenceMeaning: "Pagamento do fim do mês." }
                ]
            },
            {
                character: "初",
                meaning: "Início / Primeiro / Começo",
                kunyomi: "はじ・め (hajime) / はつ (hatsu)",
                onyomi: "ショ (SHO)",
                mnemonic: "Tesoura cortando o tecido no início da confecção.",
                examples: [
                    { word: "最初 (saisho)", wordMeaning: "Início / Primeiro de todos", sentence: "Saisho no step.", sentenceMeaning: "O primeiro passo." },
                    { word: "初雪 (hatsuyuki)", wordMeaning: "Primeira neve do ano", sentence: "Hatsuyuki ga furu.", sentenceMeaning: "Cair a primeira neve." }
                ]
            },
            {
                character: "臨",
                meaning: "Enfrentar / Presenciar / Provisório",
                kunyomi: "のぞ・む (nozomu)",
                onyomi: "リン (RIN)",
                mnemonic: "Pessoa encarando a situação de frente com atenção.",
                examples: [
                    { word: "臨時 (rinji)", wordMeaning: "Provisório / Extraordinário", sentence: "Rinji train.", sentenceMeaning: "Trem extraordinário provisório." },
                    { word: "臨む (nozomu)", wordMeaning: "Presenciar / Enfrentar", sentence: "Shiken ni nozomu.", sentenceMeaning: "Enfrentar a prova." }
                ]
            },
            {
                character: "既",
                meaning: "Já / Anteriormente / Existente",
                kunyomi: "すで・に (sudeni)",
                onyomi: "キ (KI)",
                mnemonic: "Pessoa satisfeita após ter terminado a refeição.",
                examples: [
                    { word: "既に (sudeni)", wordMeaning: "Já / Anteriormente", sentence: "Sudeni finished.", sentenceMeaning: "Já está terminado." },
                    { word: "既婚 (kikon)", wordMeaning: "Casado(a)", sentence: "Kikon person.", sentenceMeaning: "Pessoa casada." }
                ]
            },
            {
                character: "未",
                meaning: "Ainda não / Incompleto / Futuro",
                kunyomi: "いまだ (imada)",
                onyomi: "ミ (MI)",
                mnemonic: "Ramo mais curto no topo da árvore indicando algo ainda por crescer.",
                examples: [
                    { word: "未来 (mirai)", wordMeaning: "Futuro distante", sentence: "Mirai no dream.", sentenceMeaning: "Sonho do futuro." },
                    { word: "未定 (mitei)", wordMeaning: "Indefinido / A ser determinado", sentence: "Schedule wa mitei desu.", sentenceMeaning: "A agenda está indefinida." }
                ]
            },
            {
                character: "永",
                meaning: "Eterno / Perpétuo / Longo tempo",
                kunyomi: "なが・い (nagai)",
                onyomi: "エイ (EI)",
                mnemonic: "Corrente de água fluindo para a eternidade.",
                examples: [
                    { word: "永久 (eikyuu)", wordMeaning: "Eternidade / Perpétuo", sentence: "Eikyuu no heiwa.", sentenceMeaning: "Paz eterna." },
                    { word: "永住 (eijuu)", wordMeaning: "Residência permanente", sentence: "Eijuu visa.", sentenceMeaning: "Visto de residência permanente." }
                ]
            },
            {
                character: "久",
                meaning: "Longa duração / Antigo / Ha muito tempo",
                kunyomi: "ひさ・しい (hisashii)",
                onyomi: "キュウ (KYUU) / ク (KU)",
                mnemonic: "Passos lentos que se estendem no tempo.",
                examples: [
                    { word: "久々 (hisahisa)", wordMeaning: "Há muito tempo", sentence: "Hisahisa ni aouto.", sentenceMeaning: "Encontrar-se há muito tempo." },
                    { word: "永久 (eikyuu)", wordMeaning: "Eternidade", sentence: "Eikyuu ni tsuzuki.", sentenceMeaning: "Continuar pela eternidade." }
                ]
            },
            {
                character: "瞬",
                meaning: "Instante / Piscar de olhos",
                kunyomi: "まばた・く (mabataku)",
                onyomi: "シュン (SHUN)",
                mnemonic: "Olhos (目) piscando num segundo passageiro.",
                examples: [
                    { word: "瞬間 (shunkan)", wordMeaning: "Instante / Momento", sentence: "Sono shunkan.", sentenceMeaning: "Naquele exato instante." },
                    { word: "一瞬 (isshun)", wordMeaning: "Um piscar de olhos", sentence: "Isshun de kawaru.", sentenceMeaning: "Mudar num piscar de olhos." }
                ]
            },
            {
                character: "間",
                meaning: "Intervalo / Espaço / Tempo entre",
                kunyomi: "あいだ (aida) / ま (ma)",
                onyomi: "カン (KAN) / ケン (KEN)",
                mnemonic: "Sol (日) brilhando através da fresta do portão (門).",
                examples: [
                    { word: "時間 (jikan)", wordMeaning: "Tempo / Horas", sentence: "Jikan ga arimasen.", sentenceMeaning: "Não tenho tempo." },
                    { word: "仲間 (nakama)", wordMeaning: "Companheiros / Amigos", sentence: "Nihongo no nakama.", sentenceMeaning: "Companheiros de estudo de japonês." }
                ]
            },
            {
                character: "歴",
                meaning: "História / Passar tempo / Trajetória",
                kunyomi: "れき (reki)",
                onyomi: "レキ (REKI)",
                mnemonic: "Passos na floresta registrando a trajetória percorrida.",
                examples: [
                    { word: "歴史 (rekishi)", wordMeaning: "História", sentence: "Rekishi no benkyou.", sentenceMeaning: "Estudo da história." },
                    { word: "履歴 (rireki)", wordMeaning: "Histórico pessoal", sentence: "Rirekisho.", sentenceMeaning: "Currículo do histórico pessoal." }
                ]
            },
            {
                character: "史",
                meaning: "História / Registro histórico",
                kunyomi: "ふひと (fuhito)",
                onyomi: "シ (SHI)",
                mnemonic: "Mão segurando o pincel para registrar os fatos históricos.",
                examples: [
                    { word: "世界史 (sekaishi)", wordMeaning: "História mundial", sentence: "Sekaishi no class.", sentenceMeaning: "Aula de história mundial." },
                    { word: "日本史 (nihonshi)", wordMeaning: "História do Japão", sentence: "Nihonshi o yomu.", sentenceMeaning: "Ler a história do Japão." }
                ]
            },
            {
                character: "迎",
                meaning: "Acolher / Dar boas-vindas / Encontrar",
                kunyomi: "むか・える (mukaeru)",
                onyomi: "ゲイ (GEI)",
                mnemonic: "Caminhar para a frente acolhendo os convidados.",
                examples: [
                    { word: "迎える (mukaeru)", wordMeaning: "Acolher / Receber", sentence: "GUEST o mukaeru.", sentenceMeaning: "Receber os convidados." },
                    { word: "歓迎 (kankei)", wordMeaning: "Boas-vindas", sentence: "Kankei kai.", sentenceMeaning: "Festa de boas-vindas." }
                ]
            },
            {
                character: "再",
                meaning: "Novamente / Re- / Repetir",
                kunyomi: "ふたた・び (futatabi)",
                onyomi: "サイ (SAI) / サ (SA)",
                mnemonic: "Fazer uma segunda tentativa do mesmo projeto.",
                examples: [
                    { word: "再会 (saikai)", wordMeaning: "Reencontro", sentence: "Tomodachi to no saikai.", sentenceMeaning: "Reencontro com amigos." },
                    { word: "再生 (saisei)", wordMeaning: "Reprodução / Reciclagem", sentence: "Video no saisei.", sentenceMeaning: "Reprodução de vídeo." }
                ]
            },
            {
                character: "予",
                meaning: "Anteriormente / Prévio / Reserva",
                kunyomi: "あらかじめ (arakajime)",
                onyomi: "ヨ (YO)",
                mnemonic: "Fazer preparativos antecipadamente.",
                examples: [
                    { word: "予定 (yotei)", wordMeaning: "Planos / Agenda", sentence: "Ashita no yotei.", sentenceMeaning: "Planos de amanhã." },
                    { word: "予約 (yoyaku)", wordMeaning: "Reserva", sentence: "Hotel no yoyaku.", sentenceMeaning: "Reserva de hotel." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 昔 (mukashi)?", options: ["Antigamente / Passado", "Futuro", "Instante", "História"], a: 0 },
            { q: "Traduza 未来 (mirai):", options: ["Futuro distante", "Passado", "Fim de semana", "Primeiro trem"], a: 0 },
            { q: "Kunyomi de 迎える:", options: ["むか・える (mukaeru)", "はじめ", "すで・に", "のぞ・む"], a: 0 },
            { q: "Onyomi de 歴史 (História):", options: ["レキ (REKI)", "SHU", "KOU", "RIN"], a: 0 },
            { q: "O que significa 節約 (setsuyaku)?", options: ["Economia / Moderação", "Reencontro", "Perpétuo", "Orçamento"], a: 0 },
            { q: "Qual o kanji de 予定 (yotei - Planos)?", options: ["予", "再", "既", "未"], a: 0 },
            { q: "Traduza 瞬間 (shunkan):", options: ["Instante / Momento", "Paz eterna", "História", "Fim do mês"], a: 0 },
            { q: "Qual o kanji de 週末 (shuumatsu - Fim de semana)?", options: ["末", "初", "季", "頃"], a: 0 },
            { q: "Significado de 歓迎 (kankei / kangei):", options: ["Boas-vindas / Recepção", "Lenda", "Eternidade", "Prefácio"], a: 0 },
            { q: "Complete: Hotel no ______ (Reserva de hotel).", options: ["yoyaku (予約)", "shuumatsu", "mukashi", "saikai"], a: 0 }
        ]
    },
    {
        module: 19,
        title: "Módulo 19: Tabela Geral e Revisão N3",
        description: "Tabela mestre completa contendo a consulta rápida de todos os ~370 Kanjis do Nível N3 do Japão Academy!",
        isReviewTable: true,
        grammar: {
            title: "Consolidação Integral dos 370 Kanjis N3",
            explanation: "Parabéns por dominar a lista inteira dos 370 ideogramas do Nível N3!",
            example: "370 N3 kanji complete mastered.",
            translation: "Domínio integral dos 370 Kanjis do Nível N3 do Japão Academy!"
        },
        kanjis: [],
        readingText: {
            title: "Tabela Mestre N3",
            japanese: "N3 kanji review table.",
            romaji: "N3 kanji review table.",
            translation: "Tabela mestre de revisão de N3.",
            comprehensionQuiz: [
                {
                    q: "Revisão N3 Concluída?", options: ["Sim, 370 Kanjis Dominados!", "Não"], a: 0
                }
            ]
        },
        quiz: []
    }
];


