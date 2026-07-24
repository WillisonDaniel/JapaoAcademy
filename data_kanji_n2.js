// ==========================================
// JAPÃO ACADEMY - BANCO DE DADOS KANJI N2
// ==========================================
const kanjiN2Data = [
    {
        module: 1,
        title: "Módulo 1: Mundo Corporativo, Gestão e Estrutura de Empresas",
        description: "Estude 19 ideogramas de diretoria, departamentos, estratégias corporativas, gestão e reuniões de negócios.",
        grammar: {
            title: "Construções de Registro Formal (~ni oite / ~ni te)",
            explanation: "No N2, indica-se o contexto institucional ou empresarial formal em que ocorrem decisões corporativas.",
            example: "Honsha ni oite kettei shimasu.",
            translation: "Decidiremos na matriz da empresa."
        },
        readingText: {
            title: "企業と経営戦略 (Estratégia Empresarial e Gestão)",
            japanese: "新しい<ruby>企業<rt>きぎょう</rt></ruby>は<ruby>優秀<rt>ゆうしゅう</rt></ruby>な<ruby>幹部<rt>かんぶ</rt></ruby>を<ruby>招集<rt>しょうしゅう</rt></ruby>し、事業の<ruby>拡大<rt>かくだい</rt></ruby>を<ruby>企図<rt>きと</rt></ruby>します。<ruby>役員<rt>やくいん</rt></ruby>会で<ruby>提案<rt>ていあん</rt></ruby>を<ruby>審議<rt>しんぎ</rt></ruby>します。",
            romaji: "Atarashii kigyou wa yuushuu na kanbu o shoushuu shi, jigyou no kakudai o kito shimasu. Yakuin-kai de teian o shingi shimasu.",
            translation: "A nova empresa convoca executivos qualificados e planeja a expansão dos negócios. A diretoria delibera as propostas na reunião.",
            comprehensionQuiz: [
                {
                    q: "O que a diretoria faz na reunião?", options: ["Delibera propostas de expansão (提案を審議する)", "Vende carros velhos", "Cancela a empresa", "Fecha o escritório"], a: 0
                },
                {
                    q: "Qual a leitura de 幹部?", options: ["かんぶ (kanbu)", "きぎょう", "ていあん", "やくいん"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "企",
                meaning: "Empresa / Planejar / Empreendimento",
                kunyomi: "くわだ・てる (kuwadateru)",
                onyomi: "キ (KI)",
                mnemonic: "Pessoas sob o mesmo teto planejando o crescimento da empresa.",
                examples: [
                    { word: "企業 (kigyou)", wordMeaning: "Empresa / Corporação", sentence: "Kigyou no strategy.", sentenceMeaning: "Estratégia corporativa." },
                    { word: "企画 (kikaku)", wordMeaning: "Planejamento / Projeto", sentence: "Kikaku-sho o kaku.", sentenceMeaning: "Elaborar o projeto de planejamento." }
                ]
            },
            {
                character: "業",
                meaning: "Negócio / Indústria / Trabalho / Atividade",
                kunyomi: "わざ (waza)",
                onyomi: "ギョウ (GYOU) / ゴウ (GOU)",
                mnemonic: "Tábua de trabalho onde se exercem múltiplos negócios.",
                examples: [
                    { word: "事業 (jigyou)", wordMeaning: "Empreendimento / Negócio", sentence: "Jigyou o kakudai suru.", sentenceMeaning: "Expandir o empreendimento." },
                    { word: "残業 (zangyou)", wordMeaning: "Hora extra", sentence: "Zangyou o减らす.", sentenceMeaning: "Reduzir as horas extras." }
                ]
            },
            {
                character: "招",
                meaning: "Convidar / Atrair / Convocar",
                kunyomi: "まね・く (maneku)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Mão (扌) acenando para convidar e atrair investidores.",
                examples: [
                    { word: "招集 (shoushuu)", wordMeaning: "Convocação de reunião", sentence: "Kaigi o shoushuu suru.", sentenceMeaning: "Convocar uma reunião." },
                    { word: "招待 (shoutai)", wordMeaning: "Convite formal", sentence: "Shoutai-jou o send.", sentenceMeaning: "Enviar o cartão de convite." }
                ]
            },
            {
                character: "創",
                meaning: "Criar / Fundar / Inovar / Esculpir",
                kunyomi: "つく・る (tsukuru)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Faca (刂) esculpindo e fundando uma nova empresa.",
                examples: [
                    { word: "創業 (sougyou)", wordMeaning: "Fundação de uma empresa", sentence: "Sougyou 100-nen.", sentenceMeaning: "100 anos de fundação." },
                    { word: "独創 (dokusou)", wordMeaning: "Originalidade / Inovação", sentence: "Dokusou-teki na idea.", sentenceMeaning: "Ideia original e inovadora." }
                ]
            },
            {
                character: "役",
                meaning: "Cargo / Função / Papel / Serviço público",
                kunyomi: "やく (yaku)",
                onyomi: "ヤク (YAKU) / エキ (EKI)",
                mnemonic: "Passos de uma pessoa encarregada de um cargo público.",
                examples: [
                    { word: "役員 (yakuin)", wordMeaning: "Diretor / Executivo", sentence: "Yakuin-kai.", sentenceMeaning: "Reunião da diretoria." },
                    { word: "役割 (yakuwari)", wordMeaning: "Papel / Função", sentence: "Yakuwari o fukameru.", sentenceMeaning: "Desempenhar a função." }
                ]
            },
            {
                character: "幹",
                meaning: "Tronco / Diretoria / Executivo / Núcleo",
                kunyomi: "みき (miki)",
                onyomi: "カン (KAN)",
                mnemonic: "Árvore alta sustentando o tronco principal e o núcleo.",
                examples: [
                    { word: "幹部 (kanbu)", wordMeaning: "Quadros executivos / Liderança", sentence: "Kanbu kaigi.", sentenceMeaning: "Reunião de executivos." },
                    { word: "幹事 (kanji)", wordMeaning: "Organizador / Secretário", sentence: "Party no kanji.", sentenceMeaning: "Organizador da festa." }
                ]
            },
            {
                character: "任",
                meaning: "Nomear / Encarregar / Tarefa / Responsabilidade",
                kunyomi: "まか・せる (makaseru) / まか・す (makasu)",
                onyomi: "ニン (NIN)",
                mnemonic: "Pessoa (亻) encarregada de uma responsabilidade corporativa.",
                examples: [
                    { word: "責任 (sekinin)", wordMeaning: "Responsabilidade", sentence: "Sekinin o tomaru.", sentenceMeaning: "Assumir a responsabilidade." },
                    { word: "任命 (ninmei)", wordMeaning: "Nomeação oficial", sentence: "Manager ni ninmei.", sentenceMeaning: "Nomeado como gerente." }
                ]
            },
            {
                character: "営",
                meaning: "Administrar / Gerenciar / Operar comercialmente",
                kunyomi: "いとな・む (itonamu)",
                onyomi: "エイ (EI)",
                mnemonic: "Teto iluminado de uma empresa em plena operação.",
                examples: [
                    { word: "経営 (keiei)", wordMeaning: "Gestão / Administração de negócios", sentence: "Keiei o学ぶ.", sentenceMeaning: "Estudar gestão de empresas." },
                    { word: "営業 (eigyou)", wordMeaning: "Vendas / Operação comercial", sentence: "Eigyou hour.", sentenceMeaning: "Horário de funcionamento." }
                ]
            },
            {
                character: "裁",
                meaning: "Decidir / Julgar / Cortar / Arbitrar",
                kunyomi: "さば・く (sabaku) / た・つ (tatsu)",
                onyomi: "サイ (SAI)",
                mnemonic: "Roupas ajustadas e cortadas segundo a decisão final.",
                examples: [
                    { word: "裁量 (sairyou)", wordMeaning: "Discricionariedade / Autonomia de decisão", sentence: "Sairyou no ken.", sentenceMeaning: "Poder de decisão autônoma." },
                    { word: "決裁 (kessai)", wordMeaning: "Aprovação de executivo", sentence: "Kessai o morau.", sentenceMeaning: "Obter aprovação do executivo." }
                ]
            },
            {
                character: "妥",
                meaning: "Conceder / Chegar a acordo / Adequado",
                kunyomi: "だ (da)",
                onyomi: "ダ (DA)",
                mnemonic: "Mão no topo pacificando as partes para um acordo suave.",
                examples: [
                    { word: "妥協 (dakyou)", wordMeaning: "Compromisso / Acordo mútuo", sentence: "Dakyou-an o erabu.", sentenceMeaning: "Escolher uma proposta de compromisso." },
                    { word: "妥当 (datou)", wordMeaning: "Adequado / Razoável", sentence: "Datou na kakaku.", sentenceMeaning: "Preço razoável e adequado." }
                ]
            },
            {
                character: "提",
                meaning: "Propor / Apresentar / Carregar na mão",
                kunyomi: "さ・げる (sageru)",
                onyomi: "テイ (TEI)",
                mnemonic: "Mão (扌) apresentando uma proposta de negócios.",
                examples: [
                    { word: "提案 (teian)", wordMeaning: "Proposta / Sugestão", sentence: "Teian o suru.", sentenceMeaning: "Fazer uma proposta." },
                    { word: "提携 (teikei)", wordMeaning: "Parceria / Aliança corporativa", sentence: "Company to teikei.", sentenceMeaning: "Parceria com outra empresa." }
                ]
            },
            {
                character: "案",
                meaning: "Plano / Proposta / Ideia / Guia",
                kunyomi: "あん (an)",
                onyomi: "アン (AN)",
                mnemonic: "Ideia sobre a mesa de madeira.",
                examples: [
                    { word: "案内 (annai)", wordMeaning: "Orientação / Guia", sentence: "Machi no annai.", sentenceMeaning: "Guia da cidade." },
                    { word: "企画案 (kikakuan)", wordMeaning: "Esboço do projeto", sentence: "Kikakuan o submit.", sentenceMeaning: "Submeter o esboço do projeto." }
                ]
            },
            {
                character: "策",
                meaning: "Estratégia / Plano / Medida / Política",
                kunyomi: "さく (saku)",
                onyomi: "サク (SAKU)",
                mnemonic: "Tiras de bambu com planos estratégicos inscritos.",
                examples: [
                    { word: "対策 (taisaku)", wordMeaning: "Contramedida / Solução", sentence: "Taisaku o tateru.", sentenceMeaning: "Elaborar contramedidas." },
                    { word: "政策 (seisaku)", wordMeaning: "Diretriz / Política governamental", sentence: "Keizai seisaku.", sentenceMeaning: "Política econômica." }
                ]
            },
            {
                character: "導",
                meaning: "Guiar / Liderar / Conduzir",
                kunyomi: "みちび・く (michibiku)",
                onyomi: "ドウ (DOU)",
                mnemonic: "Conduzir as pessoas pelo caminho certo com liderança.",
                examples: [
                    { word: "指導 (shidou)", wordMeaning: "Orientação / Liderança", sentence: "Shidou o ukeru.", sentenceMeaning: "Receber orientação." },
                    { word: "導入 (dounyuu)", wordMeaning: "Implementação / Introdução", sentence: "System no dounyuu.", sentenceMeaning: "Implementação do sistema." }
                ]
            },
            {
                character: "派",
                meaning: "Facção / Enviar delegados / Ramo",
                kunyomi: "は (ha)",
                onyomi: "ハ (HA)",
                mnemonic: "Correntes de água ramificando-se em facções.",
                examples: [
                    { word: "派遣 (haken)", wordMeaning: "Despacho de funcionários / Terceirização", sentence: "Haken shain.", sentenceMeaning: "Funcionário terceirizado enviado." },
                    { word: "立派 (rippa)", wordMeaning: "Esplêndido / Admirável", sentence: "Rippa na leader.", sentenceMeaning: "Líder admirável." }
                ]
            },
            {
                character: "属",
                meaning: "Pertencer / Afiliação / Subordinado",
                kunyomi: "ぞく・する (zokushiru)",
                onyomi: "ゾク (ZOKU)",
                mnemonic: "Pessoas subordinadas sob o mesmo corpo corporativo.",
                examples: [
                    { word: "所属 (shozoku)", wordMeaning: "Afiliação / Pertencimento", sentence: "Eigyou-bu no shozoku.", sentenceMeaning: "Afiliado ao departamento de vendas." },
                    { word: "金属 (kinzoku)", wordMeaning: "Metal / Liga metálica", sentence: "Kinzoku no material.", sentenceMeaning: "Material metálico." }
                ]
            },
            {
                character: "務",
                meaning: "Dever / Cargo / Desempenhar tarefas",
                kunyomi: "つと・める (tsutomeru)",
                onyomi: "ム (MU)",
                mnemonic: "Força (力) dedicada ao cumprimento das tarefas.",
                examples: [
                    { word: "勤務 (kinmu)", wordMeaning: "Expediente de trabalho", sentence: "Kinmu jikan.", sentenceMeaning: "Horário de expediente." },
                    { word: "義務 (gimu)", wordMeaning: "Dever / Obrigação", sentence: "Gimu o hatasu.", sentenceMeaning: "Cumprir o dever." }
                ]
            },
            {
                character: "統",
                meaning: "Governar / Unificar / Controlar / Coleção",
                kunyomi: "す・べる (suberu)",
                onyomi: "トウ (TOU)",
                mnemonic: "Fios (糸) unificados sob o mesmo comando.",
                examples: [
                    { word: "統合 (tougou)", wordMeaning: "Integração / Fusão corporativa", sentence: "Company no tougou.", sentenceMeaning: "Fusão das empresas." },
                    { word: "統計 (toukei)", wordMeaning: "Estatística", sentence: "Toukei data.", sentenceMeaning: "Dados estatísticos." }
                ]
            },
            {
                character: "融",
                meaning: "Financiar / Empréstimo / Harmonizar",
                kunyomi: "と・ける (tokeru)",
                onyomi: "ユウ (YUU)",
                mnemonic: "Vapor fluindo suavemente como crédito financeiro.",
                examples: [
                    { word: "融資 (yuushi)", wordMeaning: "Financiamento / Empréstimo bancário", sentence: "Bank no yuushi.", sentenceMeaning: "Financiamento bancário." },
                    { word: "金融 (kin'yuu)", wordMeaning: "Mercado financeiro / Finanças", sentence: "Kin'yuu market.", sentenceMeaning: "Mercado financeiro." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 経営 (keiei)?", options: ["Gestão / Administração de negócios", "Contratação", "Demissão", "Falta"], a: 0 },
            { q: "Traduza 提案 (teian):", options: ["Proposta / Sugestão", "Prejuízo", "Imposto", "Fusão"], a: 0 },
            { q: "Kunyomi de 招く:", options: ["まね・く (maneku)", "みちび・く", "くわだ・てる", "さば・く"], a: 0 },
            { q: "Onyomi de 責任 (Responsabilidade):", options: ["ニン (NIN)", "SOU", "KAN", "HA"], a: 0 },
            { q: "O que significa 所属 (shozoku)?", options: ["Afiliação / Pertencimento", "Lucro", "Financiamento", "Prejuízo"], a: 0 },
            { q: "Qual o kanji de 対策 (taisaku - Contramedida)?", options: ["策", "案", "幹", "任"], a: 0 },
            { q: "Traduza 金融 (kin'yuu):", options: ["Mercado financeiro", "Trabalho temporário", "Fusão de empresas", "Assembleia"], a: 0 },
            { q: "Qual o kanji de 役員 (yakuin - Executivo)?", options: ["役", "妥", "裁", "統"], a: 0 },
            { q: "Significado de 統合 (tougou):", options: ["Integração / Fusão corporativa", "Demissão", "Venda de ações", "Empréstimo"], a: 0 },
            { q: "Complete: Teian o ______ (Fazer uma proposta).", options: ["suru (する)", "maneku", "tokeru", "suberu"], a: 0 }
        ]
    },
    {
        module: 2,
        title: "Módulo 2: Finanças, Mercado, Contratos e Comércio Internacional",
        description: "Estude 19 ideogramas de ações, patrimônio, investimentos, lucros, tributos, acordos e comércio exterior.",
        grammar: {
            title: "Expressando Flutuação Financeira (~ni yotte)",
            explanation: "No N2, indica-se causalidade em oscilações de mercado, bolsas de valores e taxas de câmbio.",
            example: "Kawase ni yotte kakaku ga kawaru.",
            translation: "O preço oscila dependendo do câmbio."
        },
        readingText: {
            title: "国際貿易と株式市場 (Comércio Internacional e Mercado de Ações)",
            japanese: "<ruby>貿易<rt>ぼうえき</rt></ruby>会社が<ruby>株式<rt>かぶしき</rt></ruby>を<ruby>発行<rt>はっこう</rt></ruby>して<ruby>資金<rt>しきん</rt></ruby>を<ruby>調達<rt>ちょうたつ</rt></ruby>し、<ruby>利益<rt>りえき</rt></ruby>を追求します。<ruby>契約<rt>けいやく</rt></ruby>に基づいて<ruby>納税<rt>のうぜい</rt></ruby>します。",
            romaji: "Boueki kaisha ga kabushiki o hakkou shite shikin o choutatsu shi, rieki o tsuikyuu shimasu. Keiyaku ni motozuite nouzei shimasu.",
            translation: "A empresa de comércio emite ações para captar fundos e buscar lucros. Paga-se impostos com base no contrato.",
            comprehensionQuiz: [
                {
                    q: "Por que a empresa emite ações (株式)?", options: ["Para captar fundos de investimento (資金を調達するため)", "Para fechar o comércio", "Sem motivo", "Para cancelar o contrato"], a: 0
                },
                {
                    q: "Qual a leitura de 契約?", options: ["けいやく (keiyaku)", "ぼうえき", "かぶしき", "のうぜい"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "財",
                meaning: "Fortuna / Patrimônio / Riqueza",
                kunyomi: "たから (takara)",
                onyomi: "ザイ (ZAI) / サイ (SAI)",
                mnemonic: "Conchas preciosas (貝) acumuladas como patrimônio financeiro.",
                examples: [
                    { word: "財産 (zaisan)", wordMeaning: "Patrimônio / Bens", sentence: "Zaisan no kanri.", sentenceMeaning: "Gestão do patrimônio." },
                    { word: "財布 (saifu)", wordMeaning: "Carteira", sentence: "Saifu o kaimashita.", sentenceMeaning: "Comprei uma carteira." }
                ]
            },
            {
                character: "価",
                meaning: "Valor / Preço / Avaliação",
                kunyomi: "あたい (atai)",
                onyomi: "カ (KA)",
                mnemonic: "Pessoa (亻) estipulando o valor das mercadorias.",
                examples: [
                    { word: "価格 (kakaku)", wordMeaning: "Preço / Valor fixado", sentence: "Kakaku ga agaru.", sentenceMeaning: "O preço subiu." },
                    { word: "評価 (hyouka)", wordMeaning: "Avaliação / Apreciação", sentence: "Good hyouka.", sentenceMeaning: "Boa avaliação." }
                ]
            },
            {
                character: "益",
                meaning: "Lucro / Benefício / Ganho",
                kunyomi: "ます (masu)",
                onyomi: "エキ (EKI) / ヤク (YAKU)",
                mnemonic: "Prato cheio transbordando lucros abundantes.",
                examples: [
                    { word: "利益 (rieki)", wordMeaning: "Lucro / Ganho líquido", sentence: "Rieki o dasu.", sentenceMeaning: "Gerar lucro." },
                    { word: "益々 (masumasu)", wordMeaning: "Cada vez mais", sentence: "Masumasu genki.", sentenceMeaning: "Cada vez mais saudável." }
                ]
            },
            {
                character: "損",
                meaning: "Perda / Prejuízo / Danificar",
                kunyomi: "そこ・なう (sokonau) / そこ・ねる (sokoneru)",
                onyomi: "ソン (SON)",
                mnemonic: "Mão (扌) perdendo mercadorias em prejuízo.",
                examples: [
                    { word: "損害 (songai)", wordMeaning: "Prejuízo / Dano financeiro", sentence: "Songai o hoshou.", sentenceMeaning: "Indenizar o prejuízo." },
                    { word: "損失 (sonshitsu)", wordMeaning: "Perda líquida", sentence: "Sonshitsu o dasu.", sentenceMeaning: "Tiveram perda líquida." }
                ]
            },
            {
                character: "貿",
                meaning: "Comércio / Troca internacional",
                kunyomi: "ぼう (bou)",
                onyomi: "ボウ (BOU)",
                mnemonic: "Conchas (貝) trocadas em comércio além-mar.",
                examples: [
                    { word: "貿易 (boueki)", wordMeaning: "Comércio internacional", sentence: "Boueki kaisha.", sentenceMeaning: "Empresa de comércio internacional." },
                    { word: "貿易風 (bouekifuu)", wordMeaning: "Ventos alísios de comércio", sentence: "Bouekifuu ga fuku.", sentenceMeaning: "Sopram os ventos alísios." }
                ]
            },
            {
                character: "税",
                meaning: "Imposto / Taxa tributária",
                kunyomi: "ぜい (zei)",
                onyomi: "ゼイ (ZEI)",
                mnemonic: "Grãos (禾) entregues ao estado como pagamento de impostos.",
                examples: [
                    { word: "税金 (zeikin)", wordMeaning: "Imposto", sentence: "Zeikin o harau.", sentenceMeaning: "Pagar impostos." },
                    { word: "消費税 (shouhizei)", wordMeaning: "Imposto sobre consumo (IVA)", sentence: "Shouhizei 10%.", sentenceMeaning: "Imposto de consumo de 10%." }
                ]
            },
            {
                character: "株",
                meaning: "Ação societária / Toco de árvore / Cota",
                kunyomi: "かぶ (kabu)",
                onyomi: "シュ (SHU)",
                mnemonic: "Madeira (木) plantada representando uma cota de participação.",
                examples: [
                    { word: "株式 (kabushiki)", wordMeaning: "Ações societárias", sentence: "Kabushiki shijou.", sentenceMeaning: "Mercado de ações." },
                    { word: "株主 (kabunushi)", wordMeaning: "Acionista", sentence: "Kabunushi soukai.", sentenceMeaning: "Assembleia de acionistas." }
                ]
            },
            {
                character: "券",
                meaning: "Título / Certificado / Bilhete / Cupom",
                kunyomi: "けん (ken)",
                onyomi: "ケン (KEN)",
                mnemonic: "Faca (刀) destacando o certificado de investimento.",
                examples: [
                    { word: "証券 (shouken)", wordMeaning: "Títulos / Valores mobiliários", sentence: "Shouken kaisha.", sentenceMeaning: "Corretora de valores mobiliários." },
                    { word: "債券 (saiken)", wordMeaning: "Bônus / Título de dívida", sentence: "Kokusai saiken.", sentenceMeaning: "Títulos de dívida pública." }
                ]
            },
            {
                character: "契",
                meaning: "Contrato / Pacto / Promessa legal",
                kunyomi: "ちぎ・る (chigiru)",
                onyomi: "ケイ (KEI)",
                mnemonic: "Escritura cortada por faca oficial selando um pacto.",
                examples: [
                    { word: "契約 (keiyaku)", wordMeaning: "Contrato formal", sentence: "Keiyaku o結ぶ.", sentenceMeaning: "Assinar um contrato." },
                    { word: "契機 (keiki)", wordMeaning: "Oportunidade / Ponto de virada", sentence: "Sore o keiki ni.", sentenceMeaning: "Aproveitando a oportunidade." }
                ]
            },
            {
                character: "約",
                meaning: "Promessa / Aproximadamente / Acordo / Resumo",
                kunyomi: "やく (yaku)",
                onyomi: "ヤク (YAKU)",
                mnemonic: "Fios (糸) atados em compromisso de acordo.",
                examples: [
                    { word: "約束 (yakusoku)", wordMeaning: "Promessa / Compromisso", sentence: "Yakusoku o mamoru.", sentenceMeaning: "Manter a promessa." },
                    { word: "予約 (yoyaku)", wordMeaning: "Reserva", sentence: "Hotel no yoyaku.", sentenceMeaning: "Reserva de hotel." }
                ]
            },
            {
                character: "賃",
                meaning: "Aluguel / Salário / Tarifa",
                kunyomi: "ちん (chin)",
                onyomi: "チン (CHIN)",
                mnemonic: "Moedas (貝) pagas periodicamente pelo aluguel ou tarifa.",
                examples: [
                    { word: "家賃 (yachin)", wordMeaning: "Aluguel da casa", sentence: "Yachin o harau.", sentenceMeaning: "Pagar o aluguel." },
                    { word: "賃金 (chingin)", wordMeaning: "Salário / Remuneração", sentence: "Chingin no raise.", sentenceMeaning: "Aumento salarial." }
                ]
            },
            {
                character: "債",
                meaning: "Dívida / Débito / Título de crédito",
                kunyomi: "さい (sai)",
                onyomi: "サイ (SAI)",
                mnemonic: "Pessoa (亻) responsável pelo pagamento do débito.",
                examples: [
                    { word: "負債 (fusai)", wordMeaning: "Passivo / Dívidas totais", sentence: "Fusai o抱える.", sentenceMeaning: "Acumular dívidas." },
                    { word: "国債 (kokusai)", wordMeaning: "Títulos da dívida pública", sentence: "Kokusai o kaimasu.", sentenceMeaning: "Comprar títulos públicos." }
                ]
            },
            {
                character: "納",
                meaning: "Pagar impostos / Entregar / Armazenar",
                kunyomi: "おさ・める (osameru) / おさ・まる (osamaru)",
                onyomi: "ノウ (NOU) / ナッ (NATSU)",
                mnemonic: "Fios (糸) e tributos entregues ao cofre público.",
                examples: [
                    { word: "納税 (nouzei)", wordMeaning: "Pagamento de impostos", sentence: "Nouzei no gimu.", sentenceMeaning: "Dever de pagar impostos." },
                    { word: "納品 (nouhin)", wordMeaning: "Entrega de mercadorias", sentence: "Product no nouhin.", sentenceMeaning: "Entrega dos produtos." }
                ]
            },
            {
                character: "換",
                meaning: "Converter / Permutar / Trocar câmbio",
                kunyomi: "か・える (kaeru) / か・わる (kawaru)",
                onyomi: "カン (KAN)",
                mnemonic: "Mão (扌) efetuando a troca direta de divisas.",
                examples: [
                    { word: "換替 (kawase)", wordMeaning: "Câmbio de moedas", sentence: "Kawase rate.", sentenceMeaning: "Taxa de câmbio." },
                    { word: "変換 (henkan)", wordMeaning: "Conversão de texto/dados", sentence: "Data no henkan.", sentenceMeaning: "Conversão de dados." }
                ]
            },
            {
                character: "預",
                meaning: "Depositar / Guardar no banco / Confiar",
                kunyomi: "あず・ける (azukeru) / あず・かる (azukaru)",
                onyomi: "ヨ (YO)",
                mnemonic: "Fazer depósito bancário confiando o valor.",
                examples: [
                    { word: "預金 (yokin)", wordMeaning: "Depósito bancário / Poupança", sentence: "Bank ni yokin suru.", sentenceMeaning: "Fazer depósito no banco." },
                    { word: "預ける (azukeru)", wordMeaning: "Depositar / Deixar aos cuidados", sentence: "Luggage o azukeru.", sentenceMeaning: "Deixar a bagagem aos cuidados." }
                ]
            },
            {
                character: "貯",
                meaning: "Poupar / Acumular economias",
                kunyomi: "ため・る (tameru)",
                onyomi: "チョ (CHO)",
                mnemonic: "Moedas (貝) guardadas e acumuladas no cofre.",
                examples: [
                    { word: "貯金 (chokin)", wordMeaning: "Economias / Poupança acumulada", sentence: "Chokin o fuyasu.", sentenceMeaning: "Aumentar as economias." },
                    { word: "貯蔵 (chozou)", wordMeaning: "Armazenamento / Estocagem", sentence: "Food no chozou.", sentenceMeaning: "Estocagem de alimentos." }
                ]
            },
            {
                character: "額",
                meaning: "Montante / Quantia em dinheiro / Testa / Moldura",
                kunyomi: "ひたい (hitai)",
                onyomi: "ガク (GAKU)",
                mnemonic: "Cabeça calculando a quantia total em dinheiros.",
                examples: [
                    { word: "金額 (kingaku)", wordMeaning: "Quantia em dinheiro / Montante", sentence: "Kingaku o kakunin.", sentenceMeaning: "Confirmar a quantia em dinheiro." },
                    { word: "全額 (zengaku)", wordMeaning: "Valor total integral", sentence: "Zengaku harai.", sentenceMeaning: "Pagamento do valor integral." }
                ]
            },
            {
                character: "証",
                meaning: "Comprovar / Certificado / Prova legal",
                kunyomi: "あかし (akashi)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Palavras (言) corretas comprovando os fatos.",
                examples: [
                    { word: "証明 (shoumei)", wordMeaning: "Comprovação / Prova", sentence: "Shoumei-sho.", sentenceMeaning: "Certificado de comprovação." },
                    { word: "保証 (hoshou)", wordMeaning: "Garantia", sentence: "1-nen no hoshou.", sentenceMeaning: "Garantia de 1 ano." }
                ]
            },
            {
                character: "負",
                meaning: "Dívida / Carregar nas costas / Perder",
                kunyomi: "ま・ける (makeru) / お・う (ou)",
                onyomi: "フ (FU)",
                mnemonic: "Moedas (貝) que se deve carregar como dívida.",
                examples: [
                    { word: "負担 (futan)", wordMeaning: "Carga / Ônus financeiro", sentence: "Cost no futan.", sentenceMeaning: "Arcar com os custos." },
                    { word: "勝負 (shoubu)", wordMeaning: "Disputa / Partida decisiva", sentence: "Shoubu o suru.", sentenceMeaning: "Fazer uma disputa." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 契約 (keiyaku)?", options: ["Contrato formal", "Imposto", "Lucro", "Prejuízo"], a: 0 },
            { q: "Traduza 貿易 (boueki):", options: ["Comércio internacional", "Empréstimo", "Bolsa de valores", "Depósito"], a: 0 },
            { q: "Kunyomi de 預ける:", options: ["あず・ける (azukeru)", "ため・る", "おさ・める", "か・える"], a: 0 },
            { q: "Onyomi de 税金 (Imposto):", options: ["ゼイ (ZEI)", "ZAI", "KEN", "GAKU"], a: 0 },
            { q: "O que significa 株式 (kabushiki)?", options: ["Ações societárias", "Dívidas", "Garantia", "Impostos"], a: 0 },
            { q: "Qual o kanji de 証券 (shouken - Títulos)?", options: ["券", "額", "貯", "賃"], a: 0 },
            { q: "Traduza 利益 (rieki):", options: ["Lucro / Ganho líquido", "Dano", "Perda", "Imposto"], a: 0 },
            { q: "Qual o kanji de 家賃 (yachin - Aluguel)?", options: ["賃", "負", "納", "換"], a: 0 },
            { q: "Significado de 納税 (nouzei):", options: ["Pagamento de impostos", "Câmbio", "Poupança", "Acordo"], a: 0 },
            { q: "Complete: Keiyaku o ______ (Assinar um contrato).", options: ["musubu (結ぶ)", "azukeru", "sokonau", "harau"], a: 0 }
        ]
    },
    {
        module: 3,
        title: "Módulo 3: Emprego, Trabalho, Direitos e Relações Trabalhistas",
        description: "Estude 19 ideogramas de contratação, demissão, salários, sindicatos, licenças, folgas e direitos trabalhistas.",
        grammar: {
            title: "Expressando Regras Trabalhistas (~ni motozuite)",
            explanation: "No N2, indica-se execução de normas e pagamentos com base em leis trabalhistas ou contratos.",
            example: "Roudou-hou ni motozuite hatarakimasu.",
            translation: "Trabalho com base nas leis trabalhistas."
        },
        readingText: {
            title: "労働環境と社員の権利 (Ambiente de Trabalho e Direitos dos Funcionários)",
            japanese: "会社は<ruby>労働<rt>ろうどう</rt></ruby><ruby>条件<rt>じょうけん</rt></ruby>を整え、適正な<ruby>給与<rt>きゅうよ</rt></ruby>と<ruby>有給<rt>ゆうきゅう</rt></ruby><ruby>休暇<rt>きゅうか</rt></ruby>を<ruby>保障<rt>ほしょう</rt></ruby>すべきです。<ruby>解雇<rt>かいこ</rt></ruby>は慎重に<ruby>判断<rt>はんだん</rt></ruby>します。",
            romaji: "Kaisha wa roudou jouken o totonoe, tekisei na kyuuyo to yuukyuu kyuuka o hoshou subeki desu. Kaiko wa shinchou ni handan shimasu.",
            translation: "A empresa deve organizar as condições de trabalho e garantir salários adequados e férias remuneradas. A demissão é decidida com cautela.",
            comprehensionQuiz: [
                {
                    q: "O que a empresa deve garantir aos funcionários?", options: ["Salários adequados e férias remuneradas (適正な給与と有給休暇)", "Horas extras sem fim", "Trabalho aos domingos sem repouso", "Corte total de folgas"], a: 0
                },
                {
                    q: "Qual a leitura de 労働?", options: ["ろうどう (roudou)", "きゅうよ", "きゅうか", "かいこ"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "雇",
                meaning: "Empregar / Contratar / Admitir",
                kunyomi: "やと・う (yatou)",
                onyomi: "コ (KO)",
                mnemonic: "Porta (戸) aberta para admitir novos trabalhadores encarregados.",
                examples: [
                    { word: "雇用 (koyou)", wordMeaning: "Emprego / Contratação", sentence: "Koyou o fuyasu.", sentenceMeaning: "Aumentar as contratações." },
                    { word: "雇主 (yatoinushi)", wordMeaning: "Empregador / Patrão", sentence: "Yatoinushi no duty.", sentenceMeaning: "Dever do empregador." }
                ]
            },
            {
                character: "避",
                meaning: "Evitar / Esquivar / Escapar",
                kunyomi: "さ・ける (sakeru)",
                onyomi: "ヒ (HI)",
                mnemonic: "Passos rápidos para escapar de perigos ou acidentes de trabalho.",
                examples: [
                    { word: "回避 (kaihi)", wordMeaning: "Evasão / Evitar problemas", sentence: "Risk no kaihi.", sentenceMeaning: "Evitar riscos." },
                    { word: "避難 (hinan)", wordMeaning: "Evacuação", sentence: "Hinan kunren.", sentenceMeaning: "Treinamento de evacuação." }
                ]
            },
            {
                character: "労",
                meaning: "Trabalho duro / Esforço / Recompensar",
                kunyomi: "ろう (rou) / ねぎら・う (negirau)",
                onyomi: "ロウ (ROU)",
                mnemonic: "Esforço sob a lâmpada acesa durante a noite.",
                examples: [
                    { word: "労働 (roudou)", wordMeaning: "Trabalho manual/físico", sentence: "Roudou jikan.", sentenceMeaning: "Horário de trabalho." },
                    { word: "苦労 (kurou)", wordMeaning: "Dificuldade / Esforço árduo", sentence: "Kurou o kakeru.", sentenceMeaning: "Causar preocupações." }
                ]
            },
            {
                character: "働",
                meaning: "Trabalhar / Operar / Funcionar",
                kunyomi: "はたら・く (hataraku)",
                onyomi: "ドウ (DOU)",
                mnemonic: "Pessoa (亻) aplicando sua força (力) e movimento no trabalho.",
                examples: [
                    { word: "働く (hataraku)", wordMeaning: "Trabalhar", sentence: "Company de hataraku.", sentenceMeaning: "Trabalhar na empresa." },
                    { word: "共働き (tomotataraki)", wordMeaning: "Casal em que ambos trabalham", sentence: "Tomotataraki no family.", sentenceMeaning: "Família em que ambos trabalham." }
                ]
            },
            {
                character: "酬",
                meaning: "Recompensa / Remuneração / Honorários",
                kunyomi: "しゅう (shuu)",
                onyomi: "シュウ (SHUU)",
                mnemonic: "Servir bebida no jarro em recompensa pelo trabalho.",
                examples: [
                    { word: "報酬 (houshuu)", wordMeaning: "Remuneração / Honorários", sentence: "Houshuu o morau.", sentenceMeaning: "Receber a remuneração." },
                    { word: "応酬 (oushuu)", wordMeaning: "Tróca de respostas / Réplica", sentence: "Kairou no oushuu.", sentenceMeaning: "Troca de argumentos no debate." }
                ]
            },
            {
                character: "給",
                meaning: "Salário / Fornecer / Prover / Abastecer",
                kunyomi: "たま・う (tamau)",
                onyomi: "キュウ (KYUU)",
                mnemonic: "Fios (糸) atando provimentos salariais mensais.",
                examples: [
                    { word: "給与 (kyuuyo)", wordMeaning: "Salário / Vencimentos", sentence: "Kyuuyo meisai.", sentenceMeaning: "Holerite de pagamento salarial." },
                    { word: "供給 (kyoukyuu)", wordMeaning: "Oferta / Fornecimento", sentence: "Energy no kyoukyuu.", sentenceMeaning: "Fornecimento de energia." }
                ]
            },
            {
                character: "暇",
                meaning: "Folga / Férias / Tempo livre",
                kunyomi: "ひま (hima)",
                onyomi: "カ (KA)",
                mnemonic: "Sol (日) brilhando no dia de folga do trabalho.",
                examples: [
                    { word: "休暇 (kyuuka)", wordMeaning: "Férias / Licença do trabalho", sentence: "Natsu kyuuka.", sentenceMeaning: "Férias de verão." },
                    { word: "余暇 (yoka)", wordMeaning: "Tempo livre / Lazer", sentence: "Yoka no tsukai-kata.", sentenceMeaning: "Uso do tempo livre." }
                ]
            },
            {
                character: "職",
                meaning: "Emprego / Profissão / Cargo de trabalho",
                kunyomi: "しょく (shoku)",
                onyomi: "ショク (SHOKU)",
                mnemonic: "Orelha escutando as ordens e tarefas da profissão.",
                examples: [
                    { word: "職業 (shokugyou)", wordMeaning: "Profissão / Ocupação", sentence: "Shokugyou deki na skill.", sentenceMeaning: "Habilidade profissional." },
                    { word: "転職 (tenshoku)", wordMeaning: "Troca de emprego", sentence: "Tenshoku suru.", sentenceMeaning: "Mudar de emprego." }
                ]
            },
            {
                character: "退",
                meaning: "Aposentar-se / Recuar / Retirar-se",
                kunyomi: "しりぞ・く (shirizoku) / しりぞ・ける (shirizokeru)",
                onyomi: "タイ (TAI)",
                mnemonic: "Passos recuando e deixando o cargo para trás.",
                examples: [
                    { word: "退職 (taishoku)", wordMeaning: "Aposentadoria / Demissão voluntária", sentence: "60-sai de taishoku.", sentenceMeaning: "Aposentar-se aos 60 anos." },
                    { word: "退屈 (taikutsu)", wordMeaning: "Tédio / Monotonia", sentence: "Taikutsu na jikan.", sentenceMeaning: "Tempo tedioso." }
                ]
            },
            {
                character: "解",
                meaning: "Demitir / Resolver / Explicar / Desfaire",
                kunyomi: "と・く (toku) / と・かす (tokasu)",
                onyomi: "カイ (KAI) / ゲ (GE)",
                mnemonic: "Faca separando chifres de boi para resolver e desatar.",
                examples: [
                    { word: "解雇 (kaiko)", wordMeaning: "Demissão / Dispensa", sentence: "Unfair kaiko.", sentenceMeaning: "Demissão injusta." },
                    { word: "解決 (kaiketsu)", wordMeaning: "Resolução de conflito", sentence: "Mondai no kaiketsu.", sentenceMeaning: "Resolução do problema." }
                ]
            },
            {
                character: "罷",
                meaning: "Demissão / Paralisação / Cessar",
                kunyomi: "や・める (yameru)",
                onyomi: "ヒ (HI)",
                mnemonic: "Rede capturando e paralisando as atividades.",
                examples: [
                    { word: "罷免 (himen)", wordMeaning: "Demissão sumária de autoridade", sentence: "Minister no himen.", sentenceMeaning: "Demissão sumária do ministro." },
                    { word: "同盟罷業 (doumeihigyou)", wordMeaning: "Greve geral dos trabalhadores", sentence: "Doumeihigyou o suru.", sentenceMeaning: "Fazer greve geral." }
                ]
            },
            {
                character: "扱",
                meaning: "Manusear / Tratar empregados / Lidara com",
                kunyomi: "あつか・う (atsukau)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Mão (扌) manejando as ferramentas e tratando a equipe.",
                examples: [
                    { word: "取扱 (toriatsukai)", wordMeaning: "Manuseio / Instruções de uso", sentence: "Toriatsukai setsumeisho.", sentenceMeaning: "Manual de instruções de manuseio." },
                    { word: "扱う (atsukau)", wordMeaning: "Tratar / Lidara com", sentence: "Teinei ni atsukau.", sentenceMeaning: "Tratar com polidez." }
                ]
            },
            {
                character: "遇",
                meaning: "Tratar / Acolher / Receber tratamento",
                kunyomi: "あ・う (au)",
                onyomi: "グウ (GUU)",
                mnemonic: "Caminhar para encontrar e oferecer boa acolhida.",
                examples: [
                    { word: "待遇 (taiguu)", wordMeaning: "Tratamento salarial / Condições", sentence: "Taiguu no kaizen.", sentenceMeaning: "Melhoria do tratamento e condições." },
                    { word: "優遇 (yuuguu)", wordMeaning: "Tratamento preferencial / Privilégio", sentence: "VIP yuuguu.", sentenceMeaning: "Tratamento preferencial VIP." }
                ]
            },
            {
                character: "応",
                meaning: "Responder / Candidatar-se / Corresponder",
                kunyomi: "こた・える (kotaeru)",
                onyomi: "オウ (OU)",
                mnemonic: "Coração (心) respondendo ao pedido sob o teto.",
                examples: [
                    { word: "応募 (oubo)", wordMeaning: "Inscrição / Candidatura a vaga", sentence: "Job ni oubo suru.", sentenceMeaning: "Candidatar-se à vaga." },
                    { word: "対応 (taiou)", wordMeaning: "Atendimento / Suporte", sentence: "Quick taiou.", sentenceMeaning: "Atendimento rápido." }
                ]
            },
            {
                character: "募",
                meaning: "Recrutar / Coletar inscrições / Arrecadar",
                kunyomi: "つの・る (tsunoru)",
                onyomi: "ボ (BO)",
                mnemonic: "Força (力) dedicada a arrecadar fundos e recrutar.",
                examples: [
                    { word: "募集 (boshuu)", wordMeaning: "Recrutamento / Vagas abertas", sentence: "Shain no boshuu.", sentenceMeaning: "Recrutamento de funcionários." },
                    { word: "募金 (bokin)", wordMeaning: "Coleta de doações", sentence: "Bokin ni協力.", sentenceMeaning: "Cooperar com a arrecadação de doações." }
                ]
            },
            {
                character: "昇",
                meaning: "Subir / Ser promovido / Elevar-se",
                kunyomi: "のぼ・る (noboru)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Sol (日) subindo no horizonte indicando promoção.",
                examples: [
                    { word: "昇進 (shoushin)", wordMeaning: "Promoção de cargo", sentence: "Manager ni shoushin.", sentenceMeaning: "Promoção a gerente." },
                    { word: "昇給 (shoukyuu)", wordMeaning: "Aumento salarial", sentence: "Annual shoukyuu.", sentenceMeaning: "Aumento salarial anual." }
                ]
            },
            {
                character: "降",
                meaning: "Rebaixar / Descender / Cair chuva",
                kunyomi: "お・りる (oriru) / ふ・る (furu)",
                onyomi: "コウ (KOU)",
                mnemonic: "Degraus descendo da montanha.",
                examples: [
                    { word: "降格 (koukaku)", wordMeaning: "Rebaixamento de cargo", sentence: "Koukaku jinji.", sentenceMeaning: "Rebaixamento de cargo no RH." },
                    { word: "降車 (kousha)", wordMeaning: "Desembarque do veículo", sentence: "Kousha guchi.", sentenceMeaning: "Saída de desembarque." }
                ]
            },
            {
                character: "休",
                meaning: "Descansar / Repousar / Folga",
                kunyomi: "やす・む (yasumu) / やす・まる (yasumaru)",
                onyomi: "キュウ (KYUU)",
                mnemonic: "Pessoa (亻) encostada na árvore (木) para descansar.",
                examples: [
                    { word: "休憩 (kyuukei)", wordMeaning: "Pausa / Intervalo de descanso", sentence: "15-fun kyuukei.", sentenceMeaning: "Descanso de 15 minutos." },
                    { word: "休業 (kyuugyou)", wordMeaning: "Suspensão temporária do trabalho", sentence: "Kyuugyou teate.", sentenceMeaning: "Auxílio-suspensão de trabalho." }
                ]
            },
            {
                character: "協",
                meaning: "Cooperar / Acordo trabalhista / Harmonia",
                kunyomi: "きょう (kyou)",
                onyomi: "キョウ (KYOU)",
                mnemonic: "Três forças (力) unidas em cooperação mútua.",
                examples: [
                    { word: "協力 (kyouryoku)", wordMeaning: "Cooperação / Ajuda mútua", sentence: "Kyouryoku o tanomu.", sentenceMeaning: "Pedir cooperação." },
                    { word: "妥協 (dakyou)", wordMeaning: "Compromisso de partes", sentence: "Dakyou-an.", sentenceMeaning: "Proposta de compromisso." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 転職 (tenshoku)?", options: ["Troca de emprego", "Promoção", "Aposentadoria", "Demissão"], a: 0 },
            { q: "Traduza 募集 (boshuu):", options: ["Recrutamento / Vagas abertas", "Aumento salarial", "Rebaixamento", "Folga"], a: 0 },
            { q: "Kunyomi de 働く:", options: ["はたら・く (hataraku)", "やと・う", "さ・ける", "つの・る"], a: 0 },
            { q: "Onyomi de 退職 (Aposentadoria):", options: ["タイ (TAI)", "KOU", "SHOKU", "HI"], a: 0 },
            { q: "O que significa 待遇 (taiguu)?", options: ["Tratamento salarial / Condições", "Demissão", "Falta", "Acidente"], a: 0 },
            { q: "Qual o kanji de 昇進 (shoushin - Promoção)?", options: ["昇", "降", "退", "雇"], a: 0 },
            { q: "Traduza 労働 (roudou):", options: ["Trabalho físico/manual", "Lazer", "Recrutamento", "Demissão"], a: 0 },
            { q: "Qual o kanji de 休暇 (kyuuka - Férias)?", options: ["暇", "労", "解", "扱"], a: 0 },
            { q: "Significado de 解雇 (kaiko):", options: ["Demissão / Dispensa", "Admissão", "Promoção", "Cooperação"], a: 0 },
            { q: "Complete: Job ni ______ (Candidatar-se à vaga).", options: ["oubo suru (応募)", "hataraku", "shoushin", "taishoku"], a: 0 }
        ]
    },
    {
        module: 4,
        title: "Módulo 4: Política, Eleições e Governança",
        description: "Estude 19 ideogramas de partidos políticos, votações, parlamento, gabinetes, elegibilidade e soberania pública.",
        grammar: {
            title: "Expressando Debate Político (~ni tsuite no debate)",
            explanation: "No N2, utiliza-se a estrutura formal para introduzir matérias legislativas e debates públicos.",
            example: "Seisaku ni tsuite debate shimasu.",
            translation: "Debatemos sobre as diretrizes políticas."
        },
        readingText: {
            title: "選挙と議会の役割 (Eleições e o Papel do Parlamento)",
            japanese: "<ruby>総選挙<rt>そうせんきょ</rt></ruby>が実施され、国民が<ruby>投票<rt>とうひょう</rt></ruby>して<ruby>議員<rt>ぎいん</rt></ruby>を選出します。<ruby>内閣<rt>ないかく</rt></ruby>は<ruby>国会<rt>こっかい</rt></ruby>の<ruby>信任<rt>しんにん</rt></ruby>を得て<ruby>政務<rt>せいむ</rt></ruby>を執り行います。",
            romaji: "Sousenkyo ga jisshi sare, kokumin ga touhyou shite giin o senshutsu shimasu. Naikaku wa kokkai no shinnin o ete seimu o torionaimasu.",
            translation: "A eleição geral é realizada, e os cidadãos votam elegendo os parlamentares. O Gabinete obtém a confiança do Parlamento e conduz os negócios de Estado.",
            comprehensionQuiz: [
                {
                    q: "O que os cidadãos fazem na eleição geral?", options: ["Votam elegendo parlamentares (投票して議員を選出する)", "Assistem filmes", "Viajam ao exterior", "Fecham o parlamento"], a: 0
                },
                {
                    q: "Qual a leitura de 投票?", options: ["とうひょう (touhyou)", "そうせんきょ", "ないかく", "ぎいん"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "政",
                meaning: "Política / Governo / Administração pública",
                kunyomi: "まつりごと (matsurigoto)",
                onyomi: "セイ (SEI) / ショウ (SHOU)",
                mnemonic: "Governar a nação com ordem e leis corretas.",
                examples: [
                    { word: "政治 (seiji)", wordMeaning: "Política", sentence: "Seiji no debate.", sentenceMeaning: "Debate político." },
                    { word: "政党 (seitou)", wordMeaning: "Partido político", sentence: "Seitou no candidate.", sentenceMeaning: "Candidato do partido político." }
                ]
            },
            {
                character: "票",
                meaning: "Voto / Cédula / Bilhete",
                kunyomi: "ひょう (hyou)",
                onyomi: "ヒョウ (HYOU)",
                mnemonic: "Papel leve com o voto da eleição depositado na urna.",
                examples: [
                    { word: "投票 (touhyou)", wordMeaning: "Votação / Ato de votar", sentence: "Touhyou ni iku.", sentenceMeaning: "Ir votar." },
                    { word: "開票 (kaihyou)", wordMeaning: "Apuração dos votos", sentence: "Kaihyou result.", sentenceMeaning: "Resultado da apuração dos votos." }
                ]
            },
            {
                character: "争",
                meaning: "Disputar / Contender / Lutar",
                kunyomi: "あらそ・う (arasou)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Duas mãos disputando o comando e o poder.",
                examples: [
                    { word: "争点 (souten)", wordMeaning: "Ponto em disputa / Pauta principal", sentence: "Senkyo no souten.", sentenceMeaning: "Pauta principal da eleição." },
                    { word: "論争 (ronsou)", wordMeaning: "Controvérsia / Debate caloroso", sentence: "Seiji ronsou.", sentenceMeaning: "Debate político caloroso." }
                ]
            },
            {
                character: "党",
                meaning: "Partido político / Facção / Grupo político",
                kunyomi: "とう (tou)",
                onyomi: "トウ (TOU)",
                mnemonic: "Grupo unido sob a mesma bandeira ideológica.",
                examples: [
                    { word: "党首 (toushu)", wordMeaning: "Líder do partido político", sentence: "Toushu kaidan.", sentenceMeaning: "Reunião de líderes partidários." },
                    { word: "野党 (yatou)", wordMeaning: "Partido de oposição", sentence: "Yatou no opinion.", sentenceMeaning: "Opinião da oposição." }
                ]
            },
            {
                character: "選",
                meaning: "Escolher / Eleger / Selecionar",
                kunyomi: "えら・ぶ (erabu)",
                onyomi: "セン (SEN)",
                mnemonic: "Caminhar para escolher a melhor opção entre as alternativas.",
                examples: [
                    { word: "選挙 (senkyo)", wordMeaning: "Eleição", sentence: "Senkyo ni iku.", sentenceMeaning: "Ir às urnas votar." },
                    { word: "選手 (senshu)", wordMeaning: "Atleta / Jogador selecionado", sentence: "Famous senshu.", sentenceMeaning: "Atleta famoso." }
                ]
            },
            {
                character: "挙",
                meaning: "Eleição / Ergue-se / Ação pública",
                kunyomi: "あ・げる (ageru) / あ・がる (agaru)",
                onyomi: "キョ (KYO)",
                mnemonic: "Mãos erguidas declarando a votação aberta.",
                examples: [
                    { word: "挙手 (kyoshu)", wordMeaning: "Levantar a mão para votar", sentence: "Kyoshu de kettei.", sentenceMeaning: "Decidir por voto de mãos erguidas." },
                    { word: "一挙 (ikkyo)", wordMeaning: "De uma só vez / Com uma só ação", sentence: "Ikkyo ni解決.", sentenceMeaning: "Resolver tudo de uma só vez." }
                ]
            },
            {
                character: "閣",
                meaning: "Gabinete ministerial / Palácio / Torre governamental",
                kunyomi: "かく (kaku)",
                onyomi: "カク (KAKU)",
                mnemonic: "Portão (門) governamental abrigando os ministros de Estado.",
                examples: [
                    { word: "内閣 (naikaku)", wordMeaning: "Gabinete de Governo / Ministério", sentence: "Naikaku総理大臣.", sentenceMeaning: "Primeiro-Ministro do Gabinete." },
                    { word: "閣僚 (kakuryou)", wordMeaning: "Ministros do Gabinete", sentence: "Kakuryou kaigi.", sentenceMeaning: "Reunião dos ministros." }
                ]
            },
            {
                character: "臣",
                meaning: "Ministro / Súdito de Estado",
                kunyomi: "しん (shin)",
                onyomi: "シン (SHIN) / ジ内部 (JIN)",
                mnemonic: "Olho inclinado em reverência e serviço ao Estado.",
                examples: [
                    { word: "大臣 (daijin)", wordMeaning: "Ministro de Estado", sentence: "Gaimu daijin.", sentenceMeaning: "Ministro das Relações Exteriores." },
                    { word: "総理大臣 (souridaijin)", wordMeaning: "Primeiro-Ministro", sentence: "Souridaijin no enzetsu.", sentenceMeaning: "Discurso do Primeiro-Ministro." }
                ]
            },
            {
                character: "議",
                meaning: "Debater / Parlamento / Deliberar",
                kunyomi: "ぎ (gi)",
                onyomi: "ギ (GI)",
                mnemonic: "Palavras (言) retas debatidas em assembleia legislativa.",
                examples: [
                    { word: "国会 (kokkai)", wordMeaning: "Parlamento / Congresso Nacional", sentence: "Kokkai gijidou.", sentenceMeaning: "Prédio do Parlamento Nacional." },
                    { word: "議員 (giin)", wordMeaning: "Parlamentar / Deputado", sentence: "Shugiin giin.", sentenceMeaning: "Deputado da Câmara Baixa." }
                ]
            },
            {
                character: "院",
                meaning: "Câmara parlamentar / Instituto / Hospital",
                kunyomi: "いん (in)",
                onyomi: "イン (IN)",
                mnemonic: "Prédio institucional cercado por muros protegidos.",
                examples: [
                    { word: "参議院 (sangiin)", wordMeaning: "Câmara dos Conselheiros (Câmara Alta)", sentence: "Sangiin senkyo.", sentenceMeaning: "Eleição para a Câmara Alta." },
                    { word: "病院 (byouin)", wordMeaning: "Hospital", sentence: "Byouin ni iku.", sentenceMeaning: "Ir ao hospital." }
                ]
            },
            {
                character: "権",
                meaning: "Poder / Autoridade / Direito legal",
                kunyomi: "けん (ken)",
                onyomi: "ケン (KEN) / ゴン (GON)",
                mnemonic: "Árvore (木) e autoridade concedendo poderes legítimos.",
                examples: [
                    { word: "政権 (seiken)", wordMeaning: "Governo em exercício / Poder político", sentence: "Seiken交代.", sentenceMeaning: "Alternância de poder político." },
                    { word: "権力 (kenryoku)", wordMeaning: "Poder de autoridade", sentence: "Kenryoku no abuse.", sentenceMeaning: "Abuso de poder." }
                ]
            },
            {
                character: "候",
                meaning: "Candidato / Clima / Estação",
                kunyomi: "こう (kou)",
                onyomi: "コウ (KOU)",
                mnemonic: "Pessoa (亻) observando o clima e aguardando os resultados.",
                examples: [
                    { word: "候補 (kouho)", wordMeaning: "Candidato / Postulante", sentence: "Kouho-sha.", sentenceMeaning: "Pessoa candidata ao cargo." },
                    { word: "気候 (kikou)", wordMeaning: "Clima regional", sentence: "Kikou no henka.", sentenceMeaning: "Mudança climática." }
                ]
            },
            {
                character: "補",
                meaning: "Completar / Candidato suplente / Compensar",
                kunyomi: "おぎな・う (oginau)",
                onyomi: "ホ (HO)",
                mnemonic: "Roupa com remendo de tecido para completar o que falta.",
                examples: [
                    { word: "補修 (hoshuu)", wordMeaning: "Reparo / Manutenção", sentence: "Road no hoshuu.", sentenceMeaning: "Manutenção da estrada." },
                    { word: "補助 (hojo)", wordMeaning: "Subsídio / Auxílio financeiro", sentence: "Seifu no hojo.", sentenceMeaning: "Subsídio do governo." }
                ]
            },
            {
                character: "制",
                meaning: "Sistema / Regime / Regulamento legal",
                kunyomi: "せい (sei)",
                onyomi: "セイ (SEI)",
                mnemonic: "Faca (刂) cortando o padrão para estabelecer o sistema.",
                examples: [
                    { word: "制度 (seido)", wordMeaning: "Sistema / Instituição", sentence: "Senkyo seido.", sentenceMeaning: "Sistema eleitoral." },
                    { word: "規制 (kisei)", wordMeaning: "Regulamentação / Restrição legal", sentence: "Law no kisei.", sentenceMeaning: "Restrição legal." }
                ]
            },
            {
                character: "領",
                meaning: "Território / Liderar / Domínio / Gola",
                kunyomi: "りょう (ryou)",
                onyomi: "リョウ (RYOU)",
                mnemonic: "Cabeça comandando a jurisdição do território.",
                examples: [
                    { word: "大統領 (daitouryou)", wordMeaning: "Presidente da República", sentence: "Daitouryou no visit.", sentenceMeaning: "Visita do Presidente da República." },
                    { word: "領土 (ryoudoku)", wordMeaning: "Território nacional", sentence: "Ryoudoku no mamoru.", sentenceMeaning: "Defender o território nacional." }
                ]
            },
            {
                character: "督",
                meaning: "Supervisionar / Dirigir / Inspecionar",
                kunyomi: "とく (toku)",
                onyomi: "トク (TOKU)",
                mnemonic: "Olhos (目) atentos supervisionando o trabalho de equipe.",
                examples: [
                    { word: "監督 (kantoku)", wordMeaning: "Diretor de cinema / Treinador / Supervisor", sentence: "Movie no kantoku.", sentenceMeaning: "Diretor do filme." },
                    { word: "督促 (tokusoku)", wordMeaning: "Cobrança formal / Lembrete de pagamento", sentence: "Payment no tokusoku.", sentenceMeaning: "Cobrança formal de pagamento." }
                ]
            },
            {
                character: "盟",
                meaning: "Aliança / Pacto / Juramento",
                kunyomi: "めい (mei)",
                onyomi: "メイ (MEI)",
                mnemonic: "Luz brilhante refletida no vaso ao fazer o pacto.",
                examples: [
                    { word: "同盟 (doumei)", wordMeaning: "Aliança política / Coalizão", sentence: "Doumei-koku.", sentenceMeaning: "Países aliados." },
                    { word: "加盟 (kamei)", wordMeaning: "Adesão a tratado ou liga", sentence: "EU ni kamei suru.", sentenceMeaning: "Aderir à União Europeia." }
                ]
            },
            {
                character: "派",
                meaning: "Facção parlamentar / Ramo político",
                kunyomi: "は (ha)",
                onyomi: "ハ (HA)",
                mnemonic: "Correntes de água ramificando-se em tendências políticas.",
                examples: [
                    { word: "派閥 (habatsu)", wordMeaning: "Facção partidária interna", sentence: "Seitou no habatsu.", sentenceMeaning: "Facção interna do partido." },
                    { word: "党派 (touha)", wordMeaning: "Facção / Coligação partidária", sentence: "Touha o koete.", sentenceMeaning: "Superando as divisões partidárias." }
                ]
            },
            {
                character: "裁",
                meaning: "Decisão política / Arbitrar / Julgar",
                kunyomi: "さば・く (sabaku)",
                onyomi: "サイ (SAI)",
                mnemonic: "Roupas cortadas conforme o decreto e julgamento final.",
                examples: [
                    { word: "総裁 (sousai)", wordMeaning: "Presidente de partido político", sentence: "Jimin-tou no sousai.", sentenceMeaning: "Presidente do Partido Liberal Democrata." },
                    { word: "仲裁 (chuusai)", wordMeaning: "Mediação / Arbitragem política", sentence: "Conflict no chuusai.", sentenceMeaning: "Mediação do conflito." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 選挙 (senkyo)?", options: ["Eleição", "Gabinete", "Presidente", "Aliado"], a: 0 },
            { q: "Traduza 大統領 (daitouryou):", options: ["Presidente da República", "Deputado", "Senador", "Policial"], a: 0 },
            { q: "Kunyomi de 選ぶ:", options: ["えら・ぶ (erabu)", "あらそ・う", "あ・げる", "おぎな・う"], a: 0 },
            { q: "Onyomi de 政治 (Política):", options: ["セイ (SEI)", "KYO", "KAKU", "HA"], a: 0 },
            { q: "O que significa 同盟 (doumei)?", options: ["Aliança política / Coalizão", "Disputa", "Demissão", "Falta"], a: 0 },
            { q: "Qual o kanji de 内閣 (naikaku - Gabinete)?", options: ["閣", "臣", "院", "党"], a: 0 },
            { q: "Traduza 国会 (kokkai):", options: ["Parlamento Nacional", "Ministério", "Eleição", "Tribunal"], a: 0 },
            { q: "Qual o kanji de 候補 (kouho - Candidato)?", options: ["候", "補", "挙", "派"], a: 0 },
            { q: "Significado de 監督 (kantoku):", options: ["Diretor / Treinador / Supervisor", "Presidente", "Votante", "Ministro"], a: 0 },
            { q: "Complete: Senkyo ni ______ (Ir às urnas votar).", options: ["iku (行く)", "erabu", "arasou", "kamei"], a: 0 }
        ]
    },
    {
        module: 5,
        title: "Módulo 5: Leis, Justiça, Crime e Direitos Civis",
        description: "Estude 19 ideogramas de processos judiciais, sanções, penas, julgamentos, direitos constitucionais e investigações policiais.",
        grammar: {
            title: "Expressando Conformidade Legal (~ni shitagatte)",
            explanation: "No N2, indica-se execução de procedimentos de acordo com os trâmites do tribunal ou constituição.",
            example: "Houritsu ni shitagatte saiban o shimasu.",
            translation: "Julgamos de acordo com a lei."
        },
        readingText: {
            title: "刑事裁判と人権の保護 (Processo Penal e Proteção dos Direitos Humanos)",
            japanese: "<ruby>被告<rt>ひこく</rt></ruby>は<ruby>弁護士<rt>べんごし</rt></ruby>の<ruby>支援<rt>しえん</rt></ruby>を受け、<ruby>公正<rt>こうせい</rt></ruby>な<ruby>裁判<rt>さいばん</rt></ruby>を求める<ruby>権利<rt>けんり</rt></ruby>があります。<ruby>証拠<rt>しょうこ</rt></ruby>に基づいて<ruby>判決<rt>はんけつ</rt></ruby>が言い渡されます。",
            romaji: "Hikoku wa bengoshi no shien o uke, kousei na saiban o motomeru kenri ga arimasu. Shouko ni motozuite hanketsu ga iiiwatasaremasu.",
            translation: "O réu tem o direito de receber o apoio de um advogado e exigir um julgamento justo. O veredito é proclamado com base nas provas.",
            comprehensionQuiz: [
                {
                    q: "Com base em que o veredito (判決) é proclamado?", options: ["Com base nas provas (証拠に基づいて)", "Com base em rumores", "Sem ver nada", "Com base no clima"], a: 0
                },
                {
                    q: "Qual a leitura de 弁護士?", options: ["べんごし (bengoshi)", "ひこく", "さいばん", "しょうこ"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "犯",
                meaning: "Crime / Cometer delito / Violado",
                kunyomi: "おか・す (okasu)",
                onyomi: "ハン (HAN)",
                mnemonic: "Cão (犭) atacando em infração e delito.",
                examples: [
                    { word: "犯罪 (hanzai)", wordMeaning: "Crime", sentence: "Hanzai o防ぐ.", sentenceMeaning: "Prevenir o crime." },
                    { word: "犯人 (hannin)", wordMeaning: "Culpado / Criminoso", sentence: "Hannin o arrest.", sentenceMeaning: "Prender o criminoso." }
                ]
            },
            {
                character: "罪",
                meaning: "Culpa / Delito / Pecado / Punição",
                kunyomi: "つみ (tsumi)",
                onyomi: "ザイ (ZAI)",
                mnemonic: "Rede caindo sobre atos ilícitos.",
                examples: [
                    { word: "無罪 (muzai)", wordMeaning: "Inocência", sentence: "Muzai no verdict.", sentenceMeaning: "Veredito de inocência." },
                    { word: "重罪 (juuzai)", wordMeaning: "Crime grave / Felonia", sentence: "Juuzai o okasu.", sentenceMeaning: "Cometer um crime grave." }
                ]
            },
            {
                character: "判",
                meaning: "Julgar / Discernir / Veredito / Carimbo",
                kunyomi: "わか・る (wakaru)",
                onyomi: "ハン (HAN) / バン (BAN)",
                mnemonic: "Faca (刂) cortando o caso e emitindo o veredito.",
                examples: [
                    { word: "裁判 (saiban)", wordMeaning: "Julgamento / Tribunal", sentence: "Saiban o okonao.", sentenceMeaning: "Realizar o julgamento." },
                    { word: "判決 (hanketsu)", wordMeaning: "Veredito / Sentença judicial", sentence: "Hanketsu o dasu.", sentenceMeaning: "Emitir a sentença judicial." }
                ]
            },
            {
                character: "訴",
                meaning: "Processar / Queixar-se / Recorrer ao tribunal",
                kunyomi: "うった・える (uttaeru)",
                onyomi: "ソ (SO)",
                mnemonic: "Palavras (言) ditas ao tribunal apelando por justiça.",
                examples: [
                    { word: "起訴 (kiso)", wordMeaning: "Processo penal / Denúncia promotor", sentence: "Hannin o kiso suru.", sentenceMeaning: "Denunciar o criminoso." },
                    { word: "訴訟 (soshou)", wordMeaning: "Ação judicial / Processo civil", sentence: "Minji soshou.", sentenceMeaning: "Processo judicial civil." }
                ]
            },
            {
                character: "訟",
                meaning: "Litígio / Dispute judicial / Processo",
                kunyomi: "しょう (shou)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Palavras (言) de litígio expostas perante o juiz.",
                examples: [
                    { word: "訴訟 (soshou)", wordMeaning: "Processo judicial", sentence: "Soshou o起こす.", sentenceMeaning: "Mover processo judicial." },
                    { word: "勝訴 (shouso)", wordMeaning: "Vitória na causa judicial", sentence: "Shouso no report.", sentenceMeaning: "Notícia de vitória no tribunal." }
                ]
            },
            {
                character: "刑",
                meaning: "Pena / Punição legal / Sentença penal",
                kunyomi: "けい (kei)",
                onyomi: "ケイ (KEI)",
                mnemonic: "Faca (刂) aplicando a punição legal imposta pelo estado.",
                examples: [
                    { word: "刑事 (keiji)", wordMeaning: "Caso penal / Detetive de polícia", sentence: "Keiji saiban.", sentenceMeaning: "Processo penal." },
                    { word: "刑罰 (keibatsu)", wordMeaning: "Punição criminal", sentence: "Keibatsu o ukeru.", sentenceMeaning: "Receber punição criminal." }
                ]
            },
            {
                character: "罰",
                meaning: "Multa / Punição / Penalidade",
                kunyomi: "ばっ・する (bassuru)",
                onyomi: "バツ (BATSU) / バチ (BACHI)",
                mnemonic: "Faca e palavras aplicando a penalidade ao infrator.",
                examples: [
                    { word: "罰金 (bakkin)", wordMeaning: "Multa financeira", sentence: "Bakkin o harau.", sentenceMeaning: "Pagar multa financeira." },
                    { word: "処罰 (shobatsu)", wordMeaning: "Punição disciplinar", sentence: "Shobatsu o ukeru.", sentenceMeaning: "Sofrer punição disciplinar." }
                ]
            },
            {
                character: "禁",
                meaning: "Proibir / Vedado / Restrição legal",
                kunyomi: "きん (kin)",
                onyomi: "KIN (KIN)",
                mnemonic: "Árvores (林) sob aviso do altar proibindo entrada.",
                examples: [
                    { word: "禁止 (kinshi)", wordMeaning: "Proibição", sentence: "Chusha kinshi.", sentenceMeaning: "Proibido estacionar." },
                    { word: "禁錮 (kinko)", wordMeaning: "Prisão sem trabalho forçado", sentence: "Kinko 3-nen.", sentenceMeaning: "3 anos de prisão simples." }
                ]
            },
            {
                character: "監",
                meaning: "Supervisionar / Prisão / Inspeção",
                kunyomi: "かん (kan)",
                onyomi: "カン (KAN)",
                mnemonic: "Olhos observando a água no recipiente durante inspeção.",
                examples: [
                    { word: "監獄 (kangoku)", wordMeaning: "Prisão / Penitenciária", sentence: "Kangoku ni ireru.", sentenceMeaning: "Enviar para a prisão." },
                    { word: "監査 (kansa)", wordMeaning: "Auditoria / Inspeção de contas", sentence: "Kansa o okonao.", sentenceMeaning: "Realizar auditoria." }
                ]
            },
            {
                character: "審",
                meaning: "Examinar / Julgar caso / Julgamento minucioso",
                kunyomi: "つまびら・か (tsumakiraka)",
                onyomi: "シン (SHIN)",
                mnemonic: "Investigação detalhada sob o teto da casa.",
                examples: [
                    { word: "審理 (shinri)", wordMeaning: "Audiência judicial / Instrução probatória", sentence: "Court de shinri suru.", sentenceMeaning: "Realizar a audiência no tribunal." },
                    { word: "審判 (shinpan)", wordMeaning: "Juiz de jogo / Árbitro", sentence: "Game no shinpan.", sentenceMeaning: "Árbitro da partida." }
                ]
            },
            {
                character: "証",
                meaning: "Prova / Testemunho / Certificado",
                kunyomi: "あかし (akashi)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Palavras (言) e evidências comprovando a verdade.",
                examples: [
                    { word: "証拠 (shouko)", wordMeaning: "Evidência / Prova material", sentence: "Shouko o atsumeru.", sentenceMeaning: "Juntar provas materiais." },
                    { word: "証人 (shounin)", wordMeaning: "Testemunha ocular", sentence: "Shounin no koushou.", sentenceMeaning: "Depoimento da testemunha." }
                ]
            },
            {
                character: "護",
                meaning: "Defender / Proteger / Custódia",
                kunyomi: "まも・る (mamoru)",
                onyomi: "ゴ (GO)",
                mnemonic: "Palavras (言) ditas em defesa da pessoa sob custódia.",
                examples: [
                    { word: "弁護 (bengo)", wordMeaning: "Defesa jurídica", sentence: "Bengoshi o tanomu.", sentenceMeaning: "Contratar um advogado de defesa." },
                    { word: "保護 (hogo)", wordMeaning: "Proteção / Custódia policial", sentence: "Victim no hogo.", sentenceMeaning: "Proteção à vítima." }
                ]
            },
            {
                character: "律",
                meaning: "Lei / Código / Regulamento legal",
                kunyomi: "りつ (ritsu)",
                onyomi: "リツ (RITSU) / リチ (RICHI)",
                mnemonic: "Passos sob o rigor dos códigos de lei.",
                examples: [
                    { word: "法律 (houritsu)", wordMeaning: "Lei / Código de leis", sentence: "Houritsu o mamoru.", sentenceMeaning: "Respeitar as leis." },
                    { word: "規律 (kiritsu)", wordMeaning: "Disciplina / Ordem interna", sentence: "Kiritsu o mamoru.", sentenceMeaning: "Manter a disciplina." }
                ]
            },
            {
                character: "憲",
                meaning: "Constituição / Lei Suprema do Estado",
                kunyomi: "おきて (okite)",
                onyomi: "ケン (KEN)",
                mnemonic: "Leis supremas gravadas no coração do Estado.",
                examples: [
                    { word: "憲法 (kenpou)", wordMeaning: "Constituição", sentence: "Kenpou no spirit.", sentenceMeaning: "Espírito da constituição." },
                    { word: "違憲 (iken)", wordMeaning: "Inconstitucionalidade", sentence: "Iken no判決.", sentenceMeaning: "Sentença de inconstitucionalidade." }
                ]
            },
            {
                character: "執",
                meaning: "Executar lei / Cumprir / Segurar",
                kunyomi: "と・る (toru)",
                onyomi: "シツ (SHITSU) / シュウ (SHUU)",
                mnemonic: "Executar as decisões com mãos firmes.",
                examples: [
                    { word: "執行 (shikkou)", wordMeaning: "Execução penal / Cumprimento de sentença", sentence: "Kei no shikkou.", sentenceMeaning: "Execução da pena." },
                    { word: "執筆 (shippitsu)", wordMeaning: "Redação de artigos/obras", sentence: "Kiji no shippitsu.", sentenceMeaning: "Redação de artigos." }
                ]
            },
            {
                character: "警",
                meaning: "Polícia / Alertar / Vigilância",
                kunyomi: "けい (kei)",
                onyomi: "ケイ (KEI)",
                mnemonic: "Palavras (言) de alerta emitidas pela polícia.",
                examples: [
                    { word: "警察 (keisatsu)", wordMeaning: "Polícia", sentence: "Keisatsu ni denwa.", sentenceMeaning: "Ligar para a polícia." },
                    { word: "警告 (keikoku)", wordMeaning: "Aviso / Advertência", sentence: "Keikoku o dasu.", sentenceMeaning: "Emitir uma advertência." }
                ]
            },
            {
                character: "捕",
                meaning: "Prender / Capturar / Agarrar",
                kunyomi: "と・らえる (toraeru) / つか・まえる (tsukamaeru)",
                onyomi: "ホ (HO)",
                mnemonic: "Mão (扌) prendendo o criminoso em flagrante.",
                examples: [
                    { word: "逮捕 (taiho)", wordMeaning: "Prisão policial / Detenção", sentence: "Keisatsu ga taiho.", sentenceMeaning: "A polícia efetuou a prisão." },
                    { word: "捕獲 (hokaku)", wordMeaning: "Captura", sentence: "Animal no hokaku.", sentenceMeaning: "Captura do animal." }
                ]
            },
            {
                character: "抑",
                meaning: "Reprimir / Conter / Suprimir",
                kunyomi: "おさ・える (osaeru)",
                onyomi: "ヨク (YOKU)",
                mnemonic: "Mão (扌) empurrando para baixo reprimindo a infração.",
                examples: [
                    { word: "抑制 (yokusei)", wordMeaning: "Repressão / Contenção", sentence: "Hanzai no yokusei.", sentenceMeaning: "Contenção da criminalidade." },
                    { word: "抑圧 (yokuatsu)", wordMeaning: "Opressão / Supressão", sentence: "Freedom no yokuatsu.", sentenceMeaning: "Supressão da liberdade." }
                ]
            },
            {
                character: "督",
                meaning: "Inspecionar / Fiscalizar / Supervisionar",
                kunyomi: "とく (toku)",
                onyomi: "トク (TOKU)",
                mnemonic: "Olhar com fiscalização para garantir cumprimento.",
                examples: [
                    { word: "監督 (kantoku)", wordMeaning: "Supervisor / Fiscal", sentence: "Field no kantoku.", sentenceMeaning: "Supervisor de campo." },
                    { word: "督促 (tokusoku)", wordMeaning: "Exigência de cumprimento de pena/débito", sentence: "Tokusoku-jou.", sentenceMeaning: "Carta de cobrança formal." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 裁判 (saiban)?", options: ["Julgamento / Tribunal", "Prisão", "Polícia", "Mulki"], a: 0 },
            { q: "Traduza 証拠 (shouko):", options: ["Evidência / Prova material", "Advogado", "Crime", "Multa"], a: 0 },
            { q: "Kunyomi de 捕まえる:", options: ["つか・まえる (tsukamaeru)", "うった・える", "おか・す", "おさ・える"], a: 0 },
            { q: "Onyomi de 警察 (Polícia):", options: ["ケイ (KEI)", "HAN", "GO", "ZAI"], a: 0 },
            { q: "O what significa 逮捕 (taiho)?", options: ["Prisão policial / Detenção", "Inocência", "Fiança", "Processo"], a: 0 },
            { q: "Qual o kanji de 弁護士 (bengoshi - Advogado)?", options: ["護", "審", "訟", "刑"], a: 0 },
            { q: "Traduza 罰金 (bakkin):", options: ["Multa financeira", "Prisão", "Veredito", "Policia"], a: 0 },
            { q: "Qual o kanji de 判決 (hanketsu - Sentença)?", options: ["判", "犯", "罪", "訴"], a: 0 },
            { q: "Significado de 抑制 (yokusei):", options: ["Repressão / Contenção", "Fiança", "Demissão", "Depoimento"], a: 0 },
            { q: "Complete: Keisatsu ga ______ (A polícia efetuou a prisão).", options: ["taiho suru (逮捕)", "okasu", "soshou", "kiso"], a: 0 }
        ]
    },
    {
        module: 6,
        title: "Módulo 6: Notícias, Imprensa e Mídia de Massa",
        description: "Estude 19 ideogramas de jornalismo, editoriais, críticas, reportagens, redação e publicações de imprensa.",
        grammar: {
            title: "Expressando Afirmação Editorial (~o meikaku ni suru)",
            explanation: "No N2, utiliza-se a estrutura para explicitá opiniões em editoriais e análises de imprensa.",
            example: "Ronten o meikaku ni shimasu.",
            translation: "Esclarecemos o ponto de discussão."
        },
        readingText: {
            title: "報道の自由と批判精神 (Liberdade de Imprensa e Espírito Crítico)",
            japanese: "<ruby>記者<rt>きしゃ</rt></ruby>は<ruby>取材<rt>しゅざい</rt></ruby>した原<ruby>稿<rt>こう</rt></ruby>を<ruby>執筆<rt>しっぴつ</rt></ruby>し、編集部が<ruby>掲載<rt>けいさい</rt></ruby>します。<ruby>評論<rt>ひょうろん</rt></ruby>家が<ruby>批判<rt>ひはん</rt></ruby>的な<ruby>視点<rt>してん</rt></ruby>で記事を<ruby>評価<rt>ひょうか</rt></ruby>します。",
            romaji: "Kisha wa shuzai shita genkou o shippitsu shi, henshuu-bu ga keisai shimasu. Hyouronka ga hihanteki na shiten de kiji o hyouka shimasu.",
            translation: "O repórter redige o manuscrito apurado, e a redação o publica. O crítico avalia o artigo sob uma perspectiva crítica.",
            comprehensionQuiz: [
                {
                    q: "O que o crítico (評論家) faz?", options: ["Avalia o artigo sob perspectiva crítica (批判的な視点で記事を評価する)", "Desenha quadrinhos", "Apaga os jornais", "Vende revistas velhas"], a: 0
                },
                {
                    q: "Qual a leitura de 原稿?", options: ["げんこう (genkou)", "しっぴつ", "けいさい", "ひょうろん"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "報",
                meaning: "Notícia / Reportagem / Recompensa / Informar",
                kunyomi: "むく・いる (mukuiru)",
                onyomi: "ホウ (HOU)",
                mnemonic: "Notícia declarada oficialmente para recompensar a verdade.",
                examples: [
                    { word: "報道 (houdou)", wordMeaning: "Imprensa / Cobertura jornalística", sentence: "Houdou no freedom.", sentenceMeaning: "Liberdade de imprensa." },
                    { word: "広報 (kouhou)", wordMeaning: "Relações públicas / Assessoria de imprensa", sentence: "Kouhou-bu.", sentenceMeaning: "Departamento de relações públicas." }
                ]
            },
            {
                character: "告",
                meaning: "Anunciar / Informar / Notificar",
                kunyomi: "つ・げる (tsugeru)",
                onyomi: "コク (Koku)",
                mnemonic: "Palavras declaradas ao público em anúncio.",
                examples: [
                    { word: "告知 (kokuchi)", wordMeaning: "Aviso prévio / Anúncio oficial", sentence: "Event no kokuchi.", sentenceMeaning: "Anúncio do evento." },
                    { word: "被告 (hikoku)", wordMeaning: "Réu / Acusado", sentence: "Hikoku no lawyer.", sentenceMeaning: "Advogado do réu." }
                ]
            },
            {
                character: "載",
                meaning: "Publicar na imprensa / Carregar / Registrar",
                kunyomi: "の・せる (noseru) / の・る (noru)",
                onyomi: "サイ (SAI)",
                mnemonic: "Artigos carregados e impressos nas colunas do jornal.",
                examples: [
                    { word: "掲載 (keisai)", wordMeaning: "Publicação / Inserção de artigo", sentence: "Kiji no keisai.", sentenceMeaning: "Publicação do artigo." },
                    { word: "連載 (rensai)", wordMeaning: "Publicação em série / Folhetim", sentence: "Manga no rensai.", sentenceMeaning: "Publicação em série do mangá." }
                ]
            },
            {
                character: "刊",
                meaning: "Publicação impressa / Edição / Imprimir",
                kunyomi: "かん (kan)",
                onyomi: "カン (KAN)",
                mnemonic: "Faca (刂) recortando os blocos de madeira da imprensa.",
                examples: [
                    { word: "刊行 (kankou)", wordMeaning: "Lançamento / Publicação de livro", sentence: "Hon no kankou.", sentenceMeaning: "Lançamento do livro." },
                    { word: "日刊 (nikkan)", wordMeaning: "Jornal diário", sentence: "Nikkan shinbun.", sentenceMeaning: "Jornal diário." }
                ]
            },
            {
                character: "誌",
                meaning: "Revista / Registro escrito / Crônica",
                kunyomi: "し (shi)",
                onyomi: "シ (SHI)",
                mnemonic: "Palavras (言) e aspirações registradas nas páginas da revista.",
                examples: [
                    { word: "雑誌 (zasshi)", wordMeaning: "Revista", sentence: "Zasshi no editor.", sentenceMeaning: "Editor da revista." },
                    { word: "週刊誌 (shuukanshi)", wordMeaning: "Revista semanal", sentence: "Shuukanshi o yomu.", sentenceMeaning: "Ler revista semanal." }
                ]
            },
            {
                character: "刷",
                meaning: "Imprimir / Escovar / Tiragem",
                kunyomi: "す・る (suru)",
                onyomi: "サツ (SATSU)",
                mnemonic: "Faca (刂) e escova aplicando tinta nas páginas impressas.",
                examples: [
                    { word: "印刷 (insatsu)", wordMeaning: "Impressão gráfica", sentence: "Insatsu-jo.", sentenceMeaning: "Gráfica de impressão." },
                    { word: "初刷 (shosatsu)", wordMeaning: "Primeira tiragem", sentence: "Shosatsu 10-man bu.", sentenceMeaning: "Primeira tiragem de 100 mil exemplares." }
                ]
            },
            {
                character: "講",
                meaning: "Palestra / Discurso / Conferência / Aula",
                kunyomi: "こう (kou)",
                onyomi: "コウ (KOU)",
                mnemonic: "Palavras (言) estruturadas para palestra instrutiva.",
                examples: [
                    { word: "講演 (kouen)", wordMeaning: "Palestra pública / Conferência", sentence: "Kouen o kiku.", sentenceMeaning: "Assistir a uma palestra pública." },
                    { word: "休講 (kyuukou)", wordMeaning: "Cancelamento de aula", sentence: "Kyou wa kyuukou.", sentenceMeaning: "Hoje a aula foi cancelada." }
                ]
            },
            {
                character: "演",
                meaning: "Atuar / Apresentar / Desempenhar / Encenar",
                kunyomi: "えん (en)",
                onyomi: "エン (EN)",
                mnemonic: "Água fluindo e atores atuando no palco.",
                examples: [
                    { word: "演説 (enzetsu)", wordMeaning: "Discurso político / Pronunciamento", sentence: "Enzetsu o suru.", sentenceMeaning: "Fazer um discurso político." },
                    { word: "演技 (engi)", wordMeaning: "Atuação / Performance artística", sentence: "Good engi.", sentenceMeaning: "Boa atuação." }
                ]
            },
            {
                character: "述",
                meaning: "Expor / Descrever / Narrar / Declarar",
                kunyomi: "の・べる (noberu)",
                onyomi: "ジュツ (JUTSU)",
                mnemonic: "Caminhar expondo e narrando os fatos com clareza.",
                examples: [
                    { word: "記述 (kijutsu)", wordMeaning: "Descrição escrita", sentence: "Kijutsu shiki test.", sentenceMeaning: "Teste de resposta descritiva." },
                    { word: "陳述 (chinjutsu)", wordMeaning: "Depoimento / Declaração oficial", sentence: "Opinion no chinjutsu.", sentenceMeaning: "Declaração de opinião." }
                ]
            },
            {
                character: "論",
                meaning: "Discutir / Tese / Teoria / Argumento",
                kunyomi: "あげつら・う (agetsurau)",
                onyomi: "ロン (RON)",
                mnemonic: "Palavras (言) ordenadas em debate e tese acadêmica.",
                examples: [
                    { word: "論文 (ronbun)", wordMeaning: "Tese acadêmica / Artigo científico", sentence: "Ronbun o kaku.", sentenceMeaning: "Escrever uma tese." },
                    { word: "討論 (touron)", wordMeaning: "Debate / Discussão em painel", sentence: "Touron-kai.", sentenceMeaning: "Painel de debate." }
                ]
            },
            {
                character: "評",
                meaning: "Criticar / Avaliar / Comentário / Juízo",
                kunyomi: "ひょう (hyou)",
                onyomi: "ヒョウ (HYOU)",
                mnemonic: "Palavras (言) emitindo juízo de valor e avaliação.",
                examples: [
                    { word: "評価 (hyouka)", wordMeaning: "Avaliação / Apreciação", sentence: "Hyouka o ukeru.", sentenceMeaning: "Receber avaliação." },
                    { word: "評判 (hyouban)", wordMeaning: "Reputação / Fama", sentence: "Good hyouban.", sentenceMeaning: "Boa reputação." }
                ]
            },
            {
                character: "批",
                meaning: "Criticar / Julgar / Apontar falhas",
                kunyomi: "ひ (hi)",
                onyomi: "ヒ (HI)",
                mnemonic: "Mão (扌) apontando falhas para criticar com rigor.",
                examples: [
                    { word: "批判 (hihan)", wordMeaning: "Crítica / Repreensão", sentence: "Hihan o ukeru.", sentenceMeaning: "Receber críticas." },
                    { word: "批准 (hizun)", wordMeaning: "Ratificação de tratado", sentence: "Treaty no hizun.", sentenceMeaning: "Ratificação do tratado." }
                ]
            },
            {
                character: "執",
                meaning: "Redigir / Executar / Manter controle",
                kunyomi: "と・る (toru)",
                onyomi: "シツ (SHITSU)",
                mnemonic: "Mão segurando o pincel para redigir o texto.",
                examples: [
                    { word: "執筆 (shippitsu)", wordMeaning: "Redação de artigos/obras", sentence: "Kiji no shippitsu.", sentenceMeaning: "Redação do artigo." },
                    { word: "執念 (shuunen)", wordMeaning: "Tenacidade / Obsessão", sentence: "Shuunen de finish.", sentenceMeaning: "Concluir com tenacidade." }
                ]
            },
            {
                character: "筆",
                meaning: "Pincel de caligrafia / Escrever / Caneta",
                kunyomi: "ふで (fude)",
                onyomi: "ヒツ (HITSU)",
                mnemonic: "Haste de bambu (竹) sustentando os pelos de pincel.",
                examples: [
                    { word: "筆者 (hissha)", wordMeaning: "Autor / Escritor do artigo", sentence: "Hissha no opinion.", sentenceMeaning: "Opinião do autor." },
                    { word: "鉛筆 (enpitsu)", wordMeaning: "Lápis", sentence: "Enpitsu de kaku.", sentenceMeaning: "Escrever a lápis." }
                ]
            },
            {
                character: "稿",
                meaning: "Rascunho / Manuscrito / Artigo",
                kunyomi: "こう (kou)",
                onyomi: "コウ (KOU)",
                mnemonic: "Grãos (禾) e texto alto organizados em manuscrito.",
                examples: [
                    { word: "原稿 (genkou)", wordMeaning: "Manuscrito original / Rascunho", sentence: "Genkou youshi.", sentenceMeaning: "Papel de manuscrito." },
                    { word: "寄稿 (kikou)", wordMeaning: "Contribuição com artigo escrito", sentence: "Magazine ni kikou.", sentenceMeaning: "Contribuir com artigo para a revista." }
                ]
            },
            {
                character: "訳",
                meaning: "Traduzir / Razão / Significado",
                kunyomi: "わけ (wake)",
                onyomi: "ヤク (YAKU)",
                mnemonic: "Palavras (言) traduzidas e explicadas com razão.",
                examples: [
                    { word: "翻訳 (honyaku)", wordMeaning: "Tradução escrita", sentence: "Hon no honyaku.", sentenceMeaning: "Tradução do livro." },
                    { word: "通訳 (tsuuyaku)", wordMeaning: "Intérprete oral", sentence: "Tsuuyaku-sha.", sentenceMeaning: "Intérprete oral." }
                ]
            },
            {
                character: "編",
                meaning: "Editar / Tecer / Compilar",
                kunyomi: "あ・む (amu)",
                onyomi: "ヘン (HEN)",
                mnemonic: "Fios (糸) e páginas entrelaçados na edição.",
                examples: [
                    { word: "編集 (henshuu)", wordMeaning: "Edição de jornais/vídeo", sentence: "Henshuu-bu.", sentenceMeaning: "Departamento de redação e edição." },
                    { word: "長編 (chouhen)", wordMeaning: "Obra longa / Longa-metragem", sentence: "Chouhen novel.", sentenceMeaning: "Romance longo." }
                ]
            },
            {
                character: "著",
                meaning: "Escrever livro / Notável / Destacado",
                kunyomi: "あらわ・す (arawasu) / いちじる・しい (ichijirushii)",
                onyomi: "チョ (CHO)",
                mnemonic: "Plantas (艹) e páginas destacando uma obra famosa.",
                examples: [
                    { word: "著者 (chosha)", wordMeaning: "Autor / Escritor de livro", sentence: "Famous chosha.", sentenceMeaning: "Autor famoso." },
                    { word: "著しい (ichijirushii)", wordMeaning: "Notável / Marcante", sentence: "Ichijirushii growth.", sentenceMeaning: "Crescimento notável." }
                ]
            },
            {
                character: "覧",
                meaning: "Visualizar / Inspecionar / Leitura atenta",
                kunyomi: "み・る (miru)",
                onyomi: "ラン (RAN)",
                mnemonic: "Olhos (臣) observando as páginas com atenção.",
                examples: [
                    { word: "閲覧 (etsuran)", wordMeaning: "Consulta / Leitura de arquivo", sentence: "Document no etsuran.", sentenceMeaning: "Consulta de documento." },
                    { word: "展覧会 (tenrankai)", wordMeaning: "Exposição artística / Mostra", sentence: "Tenrankai ni iku.", sentenceMeaning: "Ir a uma exposição artística." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 報道 (houdou)?", options: ["Imprensa / Cobertura jornalística", "Palestra", "Impressão", "Livro"], a: 0 },
            { q: "Traduza 執筆 (shippitsu):", options: ["Redação de artigos/obras", "Tradução", "Edição", "Crítica"], a: 0 },
            { q: "Kunyomi de 述べる:", options: ["の・べる (noberu)", "あらわ・す", "あ・む", "す・る"], a: 0 },
            { q: "Onyomi de 原稿 (Manuscrito):", options: ["コウ (KOU)", "RAN", "SATSU", "HEN"], a: 0 },
            { q: "O que significa 批判 (hihan)?", options: ["Crítica / Repreensão", "Elogio", "Tradução", "Editora"], a: 0 },
            { q: "Qual o kanji de 編集 (henshuu - Edição)?", options: ["編", "訳", "著", "誌"], a: 0 },
            { q: "Traduza 著者 (chosha):", options: ["Autor / Escritor de livro", "Telespectador", "Leitor", "Impressor"], a: 0 },
            { q: "Qual o kanji de 閲覧 (etsuran - Consulta)?", options: ["覧", "刷", "稿", "筆"], a: 0 },
            { q: "Significado de 評価 (hyouka):", options: ["Avaliação / Apreciação", "Notícia", "Declaração", "Desenho"], a: 0 },
            { q: "Complete: Kiji no ______ (Redação do artigo).", options: ["shippitsu (執筆)", "honyaku", "kankou", "etsuran"], a: 0 }
        ]
    },
    {
        module: 7,
        title: "Módulo 7: Ciência, Tecnologia e Pesquisa Científica",
        description: "Estude 19 ideogramas de método científico, conceitos, dados, análises, experimentos, simuladores e inovação.",
        grammar: {
            title: "Expressando Hipótese Científica (~ni mezasu)",
            explanation: "No N2, introduz-se hipóteses de pesquisas e diretrizes de investigações científicas.",
            example: "Jikken ni mezasite kenkyuu shimasu.",
            translation: "Pesquisamos visando o experimento."
        },
        readingText: {
            title: "科学技術と分析手法 (Tecnologia Científica e Métodos de Análise)",
            japanese: "<ruby>研究<rt>けんきゅう</rt></ruby>者が<ruby>仮説<rt>かせつ</rt></ruby>を立て、<ruby>実験<rt>じっけん</rt></ruby>と<ruby>分析<rt>ぶんせき</rt></ruby>を繰り返します。<ruby>概念<rt>がいねん</rt></ruby>を<ruby>検証<rt>けんしょう</rt></ruby>して新しい<ruby>技術<rt>ぎじゅつ</rt></ruby>を<ruby>創出<rt>そうしゅつ</rt></ruby>します。",
            romaji: "Kenkyuusha ga kasetu o tate, jikken to bunseki o kurikaeshimasu. Gainen o kenshou shite atarashii gijutsu o soushutsu shimasu.",
            translation: "O pesquisador formula hipóteses, repetindo experimentos e análises. Verifica-se os conceitos para criar novas tecnologias.",
            comprehensionQuiz: [
                {
                    q: "O que o pesquisador repete na investigação?", options: ["Experimentos e análises (実験と分析を繰り返す)", "Viagens de férias", "Dormir até tarde", "Nada"], a: 0
                },
                {
                    q: "Qual a leitura de 分析?", options: ["ぶんせき (bunseki)", "じっけん", "がいねん", "けんきゅう"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "研",
                meaning: "Pesquisar / Afiar / Polir",
                kunyomi: "と・ぐ (togu)",
                onyomi: "ケン (KEN)",
                mnemonic: "Pedra (石) usada para polir e afiar as ferramentas da pesquisa.",
                examples: [
                    { word: "研究 (kenkyuu)", wordMeaning: "Pesquisa científica", sentence: "Lab de kenkyuu.", sentenceMeaning: "Pesquisa no laboratório." },
                    { word: "研修 (kenshuu)", wordMeaning: "Treinamento / Capacitação", sentence: "Kenshuu-sei.", sentenceMeaning: "Trainee / Estagiário em capacitação." }
                ]
            },
            {
                character: "究",
                meaning: "Investigar / Aprofundar / Chegar ao fim",
                kunyomi: "きわ・める (kiwameru)",
                onyomi: "キュウ (KYUU)",
                mnemonic: "Caverna profunda investigada até o fundo.",
                examples: [
                    { word: "究明 (kyuumei)", wordMeaning: "Investigação da causa", sentence: "Cause no kyuumei.", sentenceMeaning: "Investigação da causa." },
                    { word: "探究 (tankyuu)", wordMeaning: "Busca / Pesquisa minuciosa", sentence: "Truth no tankyuu.", sentenceMeaning: "Busca pela verdade." }
                ]
            },
            {
                character: "実",
                meaning: "Real / Experimento / Fruto / Verdadeiro",
                kunyomi: "み (mi) / みの・る (minoru)",
                onyomi: "ジツ (JITSU)",
                mnemonic: "Teto abrigando riquezas e frutos reais.",
                examples: [
                    { word: "実験 (jikken)", wordMeaning: "Experimento científico", sentence: "Jikken o okonao.", sentenceMeaning: "Realizar o experimento." },
                    { word: "事実 (jijitsu)", wordMeaning: "Fato real", sentence: "Jijitsu o report.", sentenceMeaning: "Relatar o fato real." }
                ]
            },
            {
                character: "験",
                meaning: "Testar / Provar / Exame / Efeito",
                kunyomi: "ため・す (tamesu)",
                onyomi: "ケン (KEN) / ゲン (GEN)",
                mnemonic: "Cavalo (馬) testado em prova de esforço.",
                examples: [
                    { word: "試験 (shiken)", wordMeaning: "Exame / Prova", sentence: "Shiken ni pass.", sentenceMeaning: "Passar no exame." },
                    { word: "体験 (taiken)", wordMeaning: "Experiência prática", sentence: "Taiken class.", sentenceMeaning: "Aula de experiência prática." }
                ]
            },
            {
                character: "測",
                meaning: "Medir / Aferir / Sonhar a profundidade",
                kunyomi: "はか・る (hakaru)",
                onyomi: "ソク (SOKU)",
                mnemonic: "Água (氵) e réplica de medição da régua.",
                examples: [
                    { word: "測定 (sokutei)", wordMeaning: "Medição / Aferição", sentence: "Data no sokutei.", sentenceMeaning: "Medição de dados." },
                    { word: "予測 (yosoku)", wordMeaning: "Previsão / Estimativa", sentence: "Future no yosoku.", sentenceMeaning: "Previsão do futuro." }
                ]
            },
            {
                character: "試",
                meaning: "Testar / Experimentar / Tentativa",
                kunyomi: "こころ・みる (kokoromiru) / ため・す (tamesu)",
                onyomi: "シ (SHI)",
                mnemonic: "Palavras (言) e regras testadas na prática.",
                examples: [
                    { word: "試作 (shisaku)", wordMeaning: "Protótipo / Produção de teste", sentence: "Car no shisaku.", sentenceMeaning: "Protótipo do carro." },
                    { word: "試み (kokoromi)", wordMeaning: "Tentativa / Experiência", sentence: "Atarashii kokoromi.", sentenceMeaning: "Uma nova tentativa." }
                ]
            },
            {
                character: "模",
                meaning: "Modelo / Imitar / Molde / Padrão",
                kunyomi: "も (mo)",
                onyomi: "モ (MO) / ボ (BO)",
                mnemonic: "Estrutura de madeira (木) recortada como molde.",
                examples: [
                    { word: "模型 (mokei)", wordMeaning: "Maquete / Modelo reduzido", sentence: "Airplane no mokei.", sentenceMeaning: "Maquete de avião." },
                    { word: "模倣 (mohou)", wordMeaning: "Imitação / Réplica", sentence: "Design no mohou.", sentenceMeaning: "Imitação do design." }
                ]
            },
            {
                character: "擬",
                meaning: "Simular / Imitar / Fingir / Propor",
                kunyomi: "ぎ・する (gisuru)",
                onyomi: "ギ (GI)",
                mnemonic: "Mão (扌) replicando e simulando a ação original.",
                examples: [
                    { word: "疑似 (giji)", wordMeaning: "Simulado / Pseudo-", sentence: "Giji experience.", sentenceMeaning: "Experiência simulada." },
                    { word: "擬音語 (giongo)", wordMeaning: "Onomatopeia", sentence: "Giongo no study.", sentenceMeaning: "Estudo de onomatopeias." }
                ]
            },
            {
                character: "範",
                meaning: "Padrão / Escopo / Modelo / Limite",
                kunyomi: "はん (han)",
                onyomi: "ハン (HAN)",
                mnemonic: "Bambu (竹) delimitando o escopo do padrão.",
                examples: [
                    { word: "範囲 (han'i)", wordMeaning: "Escopo / Alcance / Limite", sentence: "Test no han'i.", sentenceMeaning: "Escopo da prova." },
                    { word: "模範 (mohan)", wordMeaning: "Modelo de excelência / Exemplo", sentence: "Mohan student.", sentenceMeaning: "Aluno exemplar." }
                ]
            },
            {
                character: "域",
                meaning: "Domínio / Área / Campo / Zona",
                kunyomi: "いき (iki)",
                onyomi: "イキ (IKI)",
                mnemonic: "Solo (土) cercado definindo uma área específica.",
                examples: [
                    { word: "地域 (chiiki)", wordMeaning: "Região / Comunidade local", sentence: "Chiiki no society.", sentenceMeaning: "Sociedade regional." },
                    { word: "領域 (ryouiki)", wordMeaning: "Domínio / Campo de estudo", sentence: "Special ryouiki.", sentenceMeaning: "Campo de especialização." }
                ]
            },
            {
                character: "概",
                meaning: "Geral / Resumo / Esboço / Aproximado",
                kunyomi: "おおむ・ね (oomune)",
                onyomi: "ガイ (GAI)",
                mnemonic: "Madeira (木) nivelando a superfície de forma geral.",
                examples: [
                    { word: "概念 (gainen)", wordMeaning: "Conceito / Ideia abstrata", sentence: "Gainen no setsumei.", sentenceMeaning: "Explicação do conceito." },
                    { word: "概要 (gaiyou)", wordMeaning: "Resumo geral / Visão geral", sentence: "Project no gaiyou.", sentenceMeaning: "Visão geral do projeto." }
                ]
            },
            {
                character: "念",
                meaning: "Conceito / Pensamento / Ideia / Sentimento",
                kunyomi: "ねん (nen)",
                onyomi: "ネン (NEN)",
                mnemonic: "Coração (心) focado no pensamento presente.",
                examples: [
                    { word: "理念 (rinen)", wordMeaning: "Filosofia / Princípio orientador", sentence: "Company no rinen.", sentenceMeaning: "Filosofia da empresa." },
                    { word: "記念 (kinen)", wordMeaning: "Comemoração / Memória", sentence: "Kinen-bi.", sentenceMeaning: "Dia comemorativo." }
                ]
            },
            {
                character: "案",
                meaning: "Esboço / Projeto / Proposta / Ideia",
                kunyomi: "あん (an)",
                onyomi: "アン (AN)",
                mnemonic: "Projeto de papel sobre a mesa de madeira.",
                examples: [
                    { word: "考案 (kouan)", wordMeaning: "Invenção / Concepção de ideia", sentence: "Atarashii kouan.", sentenceMeaning: "Nova concepção de ideia." },
                    { word: "草案 (souan)", wordMeaning: "Rascunho do projeto", sentence: "Draft no souan.", sentenceMeaning: "Rascunho do projeto." }
                ]
            },
            {
                character: "析",
                meaning: "Analisar / Decompor / Separar",
                kunyomi: "せき (seki)",
                onyomi: "セキ (SEKI)",
                mnemonic: "Madeira (木) cortada por machado (斤) em análise.",
                examples: [
                    { word: "分析 (bunseki)", wordMeaning: "Análise de dados", sentence: "Data no bunseki.", sentenceMeaning: "Análise de dados." },
                    { word: "解析 (kaiseki)", wordMeaning: "Análise avançada / Diagnóstico", sentence: "System no kaiseki.", sentenceMeaning: "Diagnóstico do sistema." }
                ]
            },
            {
                character: "抽",
                meaning: "Extrair / Sortear / Puxar para fora",
                kunyomi: "ひ・く (hiku)",
                onyomi: "チュウ (CHUU)",
                mnemonic: "Mão (扌) puxando o elemento selecionado para fora.",
                examples: [
                    { word: "抽象 (chuushou)", wordMeaning: "Abstração / Abstrato", sentence: "Chuushou-teki na art.", sentenceMeaning: "Arte abstrata." },
                    { word: "抽出 (chuushutsu)", wordMeaning: "Extração / Amostragem", sentence: "Data no chuushutsu.", sentenceMeaning: "Extração de dados." }
                ]
            },
            {
                character: "純",
                meaning: "Puro / Sem mistura / Genuíno",
                kunyomi: "じゅん (jun)",
                onyomi: "ジュン (JUN)",
                mnemonic: "Fios (糸) de seda pura sem pigmentos.",
                examples: [
                    { word: "純粋 (junsui)", wordMeaning: "Puro / Genuíno / Sem contaminação", sentence: "Junsui na water.", sentenceMeaning: "Água pura." },
                    { word: "単純 (tanjun)", wordMeaning: "Simples / Direto", sentence: "Tanjun na work.", sentenceMeaning: "Trabalho simples." }
                ]
            },
            {
                character: "粋",
                meaning: "Puro / Essência / Elegante / Refinado",
                kunyomi: "いき (iki)",
                onyomi: "スイ (SUI)",
                mnemonic: "Grãos de arroz (米) polidos de forma elegante.",
                examples: [
                    { word: "抜粋 (bassui)", wordMeaning: "Extrato / Trecho selecionado", sentence: "Text no bassui.", sentenceMeaning: "Extrato do texto." },
                    { word: "純粋 (junsui)", wordMeaning: "Pureza", sentence: "Junsui na heart.", sentenceMeaning: "Coração puro." }
                ]
            },
            {
                character: "術",
                meaning: "Técnica / Arte / Método / Procedimento",
                kunyomi: "すべ (sube)",
                onyomi: "ジュツ (JUTSU)",
                mnemonic: "Caminhada de passos aplicando a melhor técnica.",
                examples: [
                    { word: "技術 (gijutsu)", wordMeaning: "Tecnologia / Técnica", sentence: "Latest gijutsu.", sentenceMeaning: "Tecnologia de ponta." },
                    { word: "手術 (shujutsu)", wordMeaning: "Cirurgia médica", sentence: "Hospital de shujutsu.", sentenceMeaning: "Cirurgia no hospital." }
                ]
            },
            {
                character: "創",
                meaning: "Criar / Inovar / Fundar / Originar",
                kunyomi: "つく・る (tsukuru)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Faca (刂) esculpindo e inovando a ciência.",
                examples: [
                    { word: "創造 (souzou)", wordMeaning: "Criação de tecnologia", sentence: "Atarashii souzou.", sentenceMeaning: "Nova criação tecnológica." },
                    { word: "独創 (dokusou)", wordMeaning: "Originalidade científica", sentence: "Dokusou-teki na research.", sentenceMeaning: "Pesquisa científica original." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 分析 (bunseki)?", options: ["Análise de dados", "Experimento", "Tese", "Conceito"], a: 0 },
            { q: "Traduza 技術 (gijutsu):", options: ["Tecnologia / Técnica", "Pesquisa", "Maquete", "Escopo"], a: 0 },
            { q: "Kunyomi de 試す:", options: ["ため・す (tamesu)", "きわ・める", "と・ぐ", "はか・る"], a: 0 },
            { q: "Onyomi de 実験 (Experimento):", options: ["JITSU (ジツ)", "KEN", "SOKU", "SUI"], a: 0 },
            { q: "O que significa 概念 (gainen)?", options: ["Conceito / Ideia abstrata", "Resumo", "Maquete", "Protótipo"], a: 0 },
            { q: "Qual o kanji de 範囲 (han'i - Escopo)?", options: ["範", "模", "擬", "域"], a: 0 },
            { q: "Traduza 抽象 (chuushou):", options: ["Abstração / Abstrato", "Extrato", "Experimento", "Previsão"], a: 0 },
            { q: "Qual o kanji de 予測 (yosoku - Previsão)?", options: ["測", "試", "析", "究"], a: 0 },
            { q: "Significado de 純粋 (junsui):", options: ["Puro / Genuíno", "Complexo", "Maquete", "Simulado"], a: 0 },
            { q: "Complete: Lab de ______ (Pesquisa no laboratório).", options: ["kenkyuu (研究)", "bunseki", "gainen", "shiken"], a: 0 }
        ]
    },
    {
        module: 8,
        title: "Módulo 8: Saúde, Medicina e Doenças Complexas",
        description: "Estude 19 ideogramas de anatomia humana, patologias, imunologia, exames, órgãos e procedimentos cirúrgicos.",
        grammar: {
            title: "Expressando Sintomas Médicos (~ni oyobu)",
            explanation: "No N2, descreve-se a extensão e alcance de sintomas patológicos no corpo humano.",
            example: "Shintou ga zenshin ni oyobimasu.",
            translation: "A dor se estende por todo o corpo."
        },
        readingText: {
            title: "最新の医療と疾病予防 (Medicina Moderna e Prevenção de Doenças)",
            japanese: "<ruby>医師<rt>いし</rt></ruby>が<ruby>患者<rt>かんじゃ</rt></ruby>の<ruby>症状<rt>しょうじょう</rt></ruby>を<ruby>診察<rt>しんさつ</rt></ruby>し、<ruby>内視鏡<rt>ないしきょう</rt></ruby>で<ruby>胃<rt>い</rt></ruby>や<ruby>腸<rt>ちょう</rt></ruby>を検査します。<ruby>感染症<rt>かんせんしょう</rt></ruby>の予防が重要です。",
            romaji: "Ishi ga kanja no shoujou o shinsatsu shi, naishikyou de i ya chou o kensa shimasu. Kansenshou no yobou ga juuyou desu.",
            translation: "O médico examina os sintomas do paciente e inspeciona o estômago e os intestinos com um endoscópio. A prevenção de doenças infecciosas é importante.",
            comprehensionQuiz: [
                {
                    q: "Quais órgãos são inspecionados com o endoscópio?", options: ["Estômago e intestinos (胃や腸)", "Cérebro e ossos", "Olhos e ouvidos", "Mãos e pés"], a: 0
                },
                {
                    q: "Qual a leitura de 診察?", options: ["しんさつ (shinsatsu)", "しょうじょう", "かんじゃ", "かんせんしょう"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "治",
                meaning: "Curar / Tratar / Governar / Pacificar",
                kunyomi: "なお・る (naoru) / なお・す (naosu)",
                onyomi: "ジ (JI) / チ (CHI)",
                mnemonic: "Água (氵) purificando o corpo para a cura.",
                examples: [
                    { word: "治療 (chiryou)", wordMeaning: "Tratamento médico / Cura", sentence: "Byouin de chiryou.", sentenceMeaning: "Tratamento no hospital." },
                    { word: "完治 (kanchi)", wordMeaning: "Cura completa / Recuperação total", sentence: "Disease no kanchi.", sentenceMeaning: "Cura completa da doença." }
                ]
            },
            {
                character: "療",
                meaning: "Tratamento médico / Cura / Terapia",
                kunyomi: "りょう (ryou)",
                onyomi: "リョウ (RYOU)",
                mnemonic: "Enfermidade (疒) tratada com remédios apropriados.",
                examples: [
                    { word: "医療 (iryou)", wordMeaning: "Cuidados médicos / Medicina", sentence: "Iryou system.", sentenceMeaning: "Sistema de cuidados médicos." },
                    { word: "療養 (ryouyou)", wordMeaning: "Recuperação / Convalescença", sentence: "Home de ryouyou.", sentenceMeaning: "Convalescença em casa." }
                ]
            },
            {
                character: "患",
                meaning: "Enfermo / Paciente / Sofrer de patologia",
                kunyomi: "わずら・う (wazurau)",
                onyomi: "カン (KAN)",
                mnemonic: "Coração (心) aflito com a dor da enfermidade.",
                examples: [
                    { word: "患者 (kanja)", wordMeaning: "Paciente / Enfermo", sentence: "Kanja no care.", sentenceMeaning: "Cuidado ao paciente." },
                    { word: "患部 (kanbu)", wordMeaning: "Região afetada / Parte doente", sentence: "Kanbu o sterilize.", sentenceMeaning: "Esterilizar a região afetada." }
                ]
            },
            {
                character: "診",
                meaning: "Examinar paciente / Diagnóstico médico",
                kunyomi: "み・る (miru)",
                onyomi: "シン (SHIN)",
                mnemonic: "Palavras (言) e auscultação para diagnosticar o doente.",
                examples: [
                    { word: "診察 (shinsatsu)", wordMeaning: "Exame médico / Consulta", sentence: "Doctor no shinsatsu.", sentenceMeaning: "Consulta do médico." },
                    { word: "診断 (shindan)", wordMeaning: "Diagnóstico médico", sentence: "Shindan-sho.", sentenceMeaning: "Atestado de diagnóstico." }
                ]
            },
            {
                character: "疫",
                meaning: "Epidemia / Peste / Imunidade",
                kunyomi: "えき (eki)",
                onyomi: "エキ (EKI) / ヤク (YAKU)",
                mnemonic: "Enfermidade (疒) espalhada como peste pública.",
                examples: [
                    { word: "免疫 (men'eki)", wordMeaning: "Imunidade do organismo", sentence: "Men'eki o agaru.", sentenceMeaning: "Aumentar a imunidade." },
                    { word: "防疫 (boueki)", wordMeaning: "Prevenção de epidemias", sentence: "Boueki taisaku.", sentenceMeaning: "Medida de prevenção de epidemias." }
                ]
            },
            {
                character: "症",
                meaning: "Sintoma / Condição patológica",
                kunyomi: "しょう (shou)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Enfermidade (疒) manifestada em sintomas claros.",
                examples: [
                    { word: "症状 (shoujou)", wordMeaning: "Sintomas da doença", sentence: "Shoujou o check.", sentenceMeaning: "Verificar os sintomas." },
                    { word: "重症 (juushou)", wordMeaning: "Estado grave da doença", sentence: "Juushou kanja.", sentenceMeaning: "Paciente em estado grave." }
                ]
            },
            {
                character: "疾",
                meaning: "Enfermidade / Rápido / Moléstia",
                kunyomi: "しつ (shitsu)",
                onyomi: "シツ (SHITSU)",
                mnemonic: "Flecha veloz atingindo o corpo com doença.",
                examples: [
                    { word: "疾患 (shikkan)", wordMeaning: "Doença / Enfermidade", sentence: "Heart no shikkan.", sentenceMeaning: "Doença cardíaca." },
                    { word: "疾走 (shissou)", wordMeaning: "Corrida veloz", sentence: "Shissou suru.", sentenceMeaning: "Correr velozmente." }
                ]
            },
            {
                character: "痛",
                meaning: "Dor / Sentir dor / Ferimento",
                kunyomi: "いた・い (itai) / いた・む (itamu)",
                onyomi: "ツウ (TSUU)",
                mnemonic: "Enfermidade (疒) provocando dores intensas.",
                examples: [
                    { word: "頭痛 (zutsuu)", wordMeaning: "Dor de cabeça", sentence: "Zutsuu ga suru.", sentenceMeaning: "Estar com dor de cabeça." },
                    { word: "鎮痛 (chintsuu)", wordMeaning: "Alívio da dor / Analgésico", sentence: "Chintsuu-zai.", sentenceMeaning: "Remédio analgésico." }
                ]
            },
            {
                character: "傷",
                meaning: "Ferimento / Machucado / Lesão",
                kunyomi: "きず (kizu) / いた・む (itamu)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Pessoa (亻) ferida com corte ou lesão.",
                examples: [
                    { word: "負傷 (fushou)", wordMeaning: "Ferimento / Lesão física", sentence: "Fushou-sha.", sentenceMeaning: "Pessoa ferida." },
                    { word: "重傷 (juushou)", wordMeaning: "Ferimento grave", sentence: "Juushou o oikakeru.", sentenceMeaning: "Sofrer ferimento grave." }
                ]
            },
            {
                character: "吐",
                meaning: "Vomitar / Expulsar / Desabafar",
                kunyomi: "は・く (haku)",
                onyomi: "ト (TO)",
                mnemonic: "Boca (口) expelindo o conteúdo do estômago.",
                examples: [
                    { word: "吐き気 (hakike)", wordMeaning: "Nausea / Vontade de vomitar", sentence: "Hakike ga suru.", sentenceMeaning: "Sentir náuseas." },
                    { word: "嘔吐 (outo)", wordMeaning: "Vômito", sentence: "Outo suru.", sentenceMeaning: "Vomitar." }
                ]
            },
            {
                character: "脈",
                meaning: "Pulso / Veia / Batimento / Sequência",
                kunyomi: "みゃく (myaku)",
                onyomi: "ミャク (MYAKU)",
                mnemonic: "Água fluindo nos vasos sanguíneos do corpo.",
                examples: [
                    { word: "脈拍 (myakuhaku)", wordMeaning: "Pulsação cardíaca", sentence: "Myakuhaku o sokutei.", sentenceMeaning: "Medir a pulsação." },
                    { word: "動脈 (doumyaku)", wordMeaning: "Artéria", sentence: "Doumyaku kouka.", sentenceMeaning: "Arteriosclerose." }
                ]
            },
            {
                character: "腸",
                meaning: "Intestino / Vísceras",
                kunyomi: "はらわた (harawata)",
                onyomi: "チョウ (CHOU)",
                mnemonic: "Carne do corpo (月) formando o trato intestinal.",
                examples: [
                    { word: "胃腸 (ichou)", wordMeaning: "Estômago e intestinos", sentence: "Ichou-yaku.", sentenceMeaning: "Remédio para o estômago e intestinos." },
                    { word: "大腸 (daichou)", wordMeaning: "Intestino grosso", sentence: "Daichou kensa.", sentenceMeaning: "Exame do intestino grosso." }
                ]
            },
            {
                character: "胃",
                meaning: "Estômago",
                kunyomi: "い (i)",
                onyomi: "イ (I)",
                mnemonic: "Campo (田) e corpo (月) onde os alimentos são digeridos.",
                examples: [
                    { word: "胃炎 (ien)", wordMeaning: "Gastrite / Inflamação no estômago", sentence: "Ien no kensa.", sentenceMeaning: "Exame de gastrite." },
                    { word: "胃病 (ibyou)", wordMeaning: "Enfermidade gástrica", sentence: "Ibyou ni nayamu.", sentenceMeaning: "Sofrer de enfermidade gástrica." }
                ]
            },
            {
                character: "臓",
                meaning: "Órgão interno / Visceras corporais",
                kunyomi: "はらわた (harawata)",
                onyomi: "ゾク (ZOU)",
                mnemonic: "Carne do corpo (月) abrigada como órgão interno vital.",
                examples: [
                    { word: "内臓 (naizou)", wordMeaning: "Órgãos internos", sentence: "Naizou no kensa.", sentenceMeaning: "Exame dos órgãos internos." },
                    { word: "心臓 (shinzou)", wordMeaning: "Coração (órgão)", sentence: "Shinzou no beat.", sentenceMeaning: "Batimento do coração." }
                ]
            },
            {
                character: "胆",
                meaning: "Vesícula biliar / Coragem / Ânimo",
                kunyomi: "きも (kimo)",
                onyomi: "タン (TAN)",
                mnemonic: "Carne do corpo (月) e vesícula que dá coragem.",
                examples: [
                    { word: "落胆 (rakutan)", wordMeaning: "Desapontamento / Desânimo", sentence: "Rakutan suru.", sentenceMeaning: "Ficar desapontado." },
                    { word: "大胆 (daitan)", wordMeaning: "Audacioso / Ousado", sentence: "Daitan na plan.", sentenceMeaning: "Plano audacioso." }
                ]
            },
            {
                character: "骨",
                meaning: "Osso / Esqueleto / Estrutura",
                kunyomi: "ほね (hone)",
                onyomi: "コツ (KOTSU)",
                mnemonic: "Estrutura rígida de ossos articulados.",
                examples: [
                    { word: "骨折 (kossetsu)", wordMeaning: "Fratura óssea", sentence: "Bone no kossetsu.", sentenceMeaning: "Fratura no osso." },
                    { word: "骨格 (kokkaku)", wordMeaning: "Esqueleto / Estrutura óssea", sentence: "Body no kokkaku.", sentenceMeaning: "Estrutura óssea do corpo." }
                ]
            },
            {
                character: "脳",
                meaning: "Cérebro / Mente / Encefalo",
                kunyomi: "のう (nou)",
                onyomi: "ノウ (NOU)",
                mnemonic: "Carne do corpo (月) e dobras do cérebro na cabeça.",
                examples: [
                    { word: "洗脳 (sennou)", wordMeaning: "Lavagem cerebral", sentence: "Sennou o防ぐ.", sentenceMeaning: "Evitar a lavagem cerebral." },
                    { word: "首脳 (shunou)", wordMeaning: "Líderes de Estado / Cúpula", sentence: "Shunou kaidan.", sentenceMeaning: "Reunião de cúpula de líderes." }
                ]
            },
            {
                character: "筋",
                meaning: "Músculo / Tendão / Linha / Lógica",
                kunyomi: "すじ (suji)",
                onyomi: "キン (KIN)",
                mnemonic: "Bambu (竹) e carne (月) com fibras musculares fortes.",
                examples: [
                    { word: "筋肉 (kinniku)", wordMeaning: "Músculo / Musculatura", sentence: "Kinniku o鍛える.", sentenceMeaning: "Treinar a musculatura." },
                    { word: "筋道 (sujimichi)", wordMeaning: "Lógica / Sequência coerente", sentence: "Sujimichi o tateru.", sentenceMeaning: "Montar um raciocínio lógico." }
                ]
            },
            {
                character: "毒",
                meaning: "Veneno / Toxina / Maligno",
                kunyomi: "どく (doku)",
                onyomi: "ドク (DOKU)",
                mnemonic: "Substância nociva que causa danos à vida.",
                examples: [
                    { word: "消毒 (shoudoku)", wordMeaning: "Desinfecção / Esterilização", sentence: "Hand no shoudoku.", sentenceMeaning: "Desinfecção das mãos." },
                    { word: "中毒 (chuudoku)", wordMeaning: "Intoxicação / Vício", sentence: "Food chuudoku.", sentenceMeaning: "Intoxicação alimentar." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 治療 (chiryou)?", options: ["Tratamento médico / Cura", "Vacina", "Fratura", "Audácia"], a: 0 },
            { q: "Traduza 心臓 (shinzou):", options: ["Coração (órgão)", "Cérebro", "Estômago", "Músculo"], a: 0 },
            { q: "Kunyomi de 骨:", options: ["ほね (hone)", "きず", "きも", "はらわた"], a: 0 },
            { q: "Onyomi de 症状 (Sintomas):", options: ["ショウ (SHOU)", "KAN", "CHI", "DOKU"], a: 0 },
            { q: "O que significa 消毒 (shoudoku)?", options: ["Desinfecção / Esterilização", "Intoxicação", "Cura", "Cirurgia"], a: 0 },
            { q: "Qual o kanji de 筋肉 (kinniku - Músculo)?", options: ["筋", "脳", "骨", "胆"], a: 0 },
            { q: "Traduza 骨折 (kossetsu):", options: ["Fratura óssea", "Dor de cabeça", "Gastrite", "Prisão"], a: 0 },
            { q: "Qual o kanji de 診察 (shinsatsu - Consulta)?", options: ["診", "患", "疫", "療"], a: 0 },
            { q: "Significado de 免疫 (men'eki):", options: ["Imunidade do organismo", "Infecção", "Intoxicação", "Cura"], a: 0 },
            { q: "Complete: Hand no ______ (Desinfecção das mãos).", options: ["shoudoku (消毒)", "chiryou", "shinsatsu", "kossetsu"], a: 0 }
        ]
    },
    {
        module: 9,
        title: "Módulo 9: Meio Ambiente, Clima e Desastres Naturais",
        description: "Estude 19 ideogramas de preservação ecológica, fenômenos atmosféricos, tremores, erupções, secas e segurança ambiental.",
        grammar: {
            title: "Expressando Prevenção de Desastres (~ni備えて)",
            explanation: "No N2, indica-se preparação de infraestrutura e suprimentos em antecipação a catástrofes.",
            example: "Jishin ni sonaete bousai kunren o shimasu.",
            translation: "Treinamos prevenção preparando-nos para terremotos."
        },
        readingText: {
            title: "地球環境の保護と自然災害 (Proteção do Meio Ambiente Global e Desastres)",
            japanese: "<ruby>地球<rt>ちきゅう</rt></ruby>の<ruby>環境<rt>かんきょう</rt></ruby>を<ruby>保護<rt>ほご</rt></ruby>し、<ruby>温暖化<rt>おんだんか</rt></ruby>を防止します。<ruby>台風<rt>たいふう</rt></ruby>や<ruby>津波<rt>つなみ</rt></ruby>の<ruby>被害<rt>ひがい</rt></ruby>を最小限に<ruby>抑<rt>おさ</rt></ruby>えます。",
            romaji: "Chikyuu no kankyou o hogo shi, ondanka o boushi shimasu. Taifuu ya tsunami no higai o saishougen ni osaemasu.",
            translation: "Protegemos o meio ambiente da Terra e prevenimos o aquecimento global. Minimizamos os danos causados por tufões e tsunamis.",
            comprehensionQuiz: [
                {
                    q: "O que deve ser minimizado?", options: ["Os danos por tufões e tsunamis (台風や津波の被害)", "A água potável", "As árvores da floresta", "O sol"], a: 0
                },
                {
                    q: "Qual a leitura de 環境?", options: ["かんきょう (kankyou)", "ほご", "おんだんか", "ひがい"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "環",
                meaning: "Anel / Meio ambiente / Cercar / Ciclo",
                kunyomi: "わ (wa)",
                onyomi: "カン (KAN)",
                mnemonic: "Joia em forma de anel representando o ciclo ambiental.",
                examples: [
                    { word: "環境 (kankyou)", wordMeaning: "Meio ambiente", sentence: "Kankyou protection.", sentenceMeaning: "Proteção ambiental." },
                    { word: "循環 (junkan)", wordMeaning: "Circulação / Ciclo contínuo", sentence: "Blood no junkan.", sentenceMeaning: "Circulação sanguínea." }
                ]
            },
            {
                character: "境",
                meaning: "Fronteira / Ambiente / Limite / Situação",
                kunyomi: "さかい (sakai)",
                onyomi: "キョウ (KYOU) / ケイ (KEI)",
                mnemonic: "Solo (土) demarcando a fronteira de jurisdição.",
                examples: [
                    { word: "国境 (kokkyou)", wordMeaning: "Fronteira nacional", sentence: "Kokkyou o cross.", sentenceMeaning: "Cruzar a fronteira nacional." },
                    { word: "心境 (shinkyou)", wordMeaning: "Estado de espírito", sentence: "Shinkyou no change.", sentenceMeaning: "Mudança no estado de espírito." }
                ]
            },
            {
                character: "保",
                meaning: "Proteger / Preservar / Manter / Garantir",
                kunyomi: "たも・つ (tamotsu)",
                onyomi: "ホ (HO)",
                mnemonic: "Pessoa (亻) protegendo e abrigando a criança.",
                examples: [
                    { word: "保存 (hozon)", wordMeaning: "Preservação / Conservação", sentence: "Food no hozon.", sentenceMeaning: "Conservação de alimentos." },
                    { word: "保持 (hoji)", wordMeaning: "Manutenção / Retenção de posse", sentence: "Record no hoji.", sentenceMeaning: "Manutenção do recorde." }
                ]
            },
            {
                character: "護",
                meaning: "Defender / Proteger / Custódia ambiental",
                kunyomi: "まも・る (mamoru)",
                onyomi: "ゴ (GO)",
                mnemonic: "Palavras (言) e atos de proteção à natureza.",
                examples: [
                    { word: "保護 (hogo)", wordMeaning: "Proteção / Preservação", sentence: "Nature no hogo.", sentenceMeaning: "Proteção da natureza." },
                    { word: "看護 (kango)", wordMeaning: "Enfermagem / Cuidados de saúde", sentence: "Kango-shi.", sentenceMeaning: "Enfermeiro(a)." }
                ]
            },
            {
                character: "震",
                meaning: "Tremer / Terremoto / Abalo sísmico",
                kunyomi: "ふる・える (furueru) / ふる・う (furuu)",
                onyomi: "シン (SHIN)",
                mnemonic: "Chuva (雨) e vibração da terra no terremoto.",
                examples: [
                    { word: "地震 (jishin)", wordMeaning: "Terremoto", sentence: "Jishin ga okiru.", sentenceMeaning: "Ocorrer um terremoto." },
                    { word: "震度 (shindo)", wordMeaning: "Escala de intensidade sísmica", sentence: "Shindo 5.", sentenceMeaning: "Intensidade sísmica de grau 5." }
                ]
            },
            {
                character: "暴",
                meaning: "Violento / Tempestade / Expor / Furioso",
                kunyomi: "あば・れる (abareru) / あば・く (abaku)",
                onyomi: "ボウ (BOU) / バク (BAKU)",
                mnemonic: "Sol forte e ventos violentos da tempestade.",
                examples: [
                    { word: "暴風 (boufuu)", wordMeaning: "Vento tempestuoso / Vendaval", sentence: "Boufuu u警報.", sentenceMeaning: "Alerta de vendaval." },
                    { word: "暴露 (bakuro)", wordMeaning: "Revelação / Exposição pública", sentence: "Secret no bakuro.", sentenceMeaning: "Revelação do segredo." }
                ]
            },
            {
                character: "崩",
                meaning: "Desmoronar / Colapsar / Ruir ladeira",
                kunyomi: "くず・れる (kuzureru) / くず・す (kuzusu)",
                onyomi: "ホウ (HOU)",
                mnemonic: "Montanha (山) desmoronando sob chuva forte.",
                examples: [
                    { word: "崩壊 (houkai)", wordMeaning: "Colapso / Desmoronamento", sentence: "Tatemono no houkai.", sentenceMeaning: "Colapso do prédio." },
                    { word: "土砂崩れ (doshakuzure)", wordMeaning: "Deslizamento de terra e rocha", sentence: "Doshakuzure ga okiru.", sentenceMeaning: "Ocorrer deslizamento de terra." }
                ]
            },
            {
                character: "津",
                meaning: "Tsunami / Porto / Baía",
                kunyomi: "つ (tsu)",
                onyomi: "シン (SHIN)",
                mnemonic: "Água (氵) invadindo a costa no tsunami.",
                examples: [
                    { word: "津波 (tsunami)", wordMeaning: "Tsunami / Onda gigante sísmica", sentence: "Tsunami warning.", sentenceMeaning: "Alerta de tsunami." },
                    { word: "津々浦々 (tsutsuraura)", wordMeaning: "Por todos os cantos do país", sentence: "Zenkoku tsutsuraura.", sentenceMeaning: "Por todos os cantos do país." }
                ]
            },
            {
                character: "波",
                meaning: "Onda / Vaga marítima / Flutuação",
                kunyomi: "なみ (nami)",
                onyomi: "ハ (HA)",
                mnemonic: "Água (氵) formando ondas na superfície do mar.",
                examples: [
                    { word: "波浪 (harou)", wordMeaning: "Ondas altas / Agitação marítima", sentence: "Harou keiho.", sentenceMeaning: "Alerta de ondas altas." },
                    { word: "電波 (denpa)", wordMeaning: "Ondas eletromagnéticas / Sinal", sentence: "Denpa ga tsuyoi.", sentenceMeaning: "O sinal de celular está forte." }
                ]
            },
            {
                character: "洪",
                meaning: "Inundação / Enchente de grande porte",
                kunyomi: "こう (kou)",
                onyomi: "コウ (KOU)",
                mnemonic: "Água (氵) transbordando em enchente volumosa.",
                examples: [
                    { word: "洪水 (kouzui)", wordMeaning: "Inundação / Enchente", sentence: "Kouzui no damage.", sentenceMeaning: "Danos de inundação." },
                    { word: "洪大 (koudai)", wordMeaning: "Vasto / Imenso", sentence: "Koudai na plain.", sentenceMeaning: "Planície vasta." }
                ]
            },
            {
                character: "噴",
                meaning: "Eromper / Vulcão / Espirrar / Jorrar",
                kunyomi: "ふ・く (fuku)",
                onyomi: "フン (FUN)",
                mnemonic: "Boca (口) jorrando lava ou vapor vulcânico.",
                examples: [
                    { word: "噴火 (funka)", wordMeaning: "Erupção vulcânica", sentence: "Volcano no funka.", sentenceMeaning: "Erupção do vulcão." },
                    { word: "噴水 (funsui)", wordMeaning: "Fonte de água / Chafariz", sentence: "Park no funsui.", sentenceMeaning: "Chafariz do parque." }
                ]
            },
            {
                character: "火",
                meaning: "Fogo / Incêndio",
                kunyomi: "ひ (hi) / ほ (ho)",
                onyomi: "カ (KA)",
                mnemonic: "Desenho das chamas de fogo subindo.",
                examples: [
                    { word: "火災 (kasai)", wordMeaning: "Incêndio", sentence: "Kasai alarm.", sentenceMeaning: "Alarme de incêndio." },
                    { word: "火山 (kazan)", wordMeaning: "Vulcão", sentence: "Fuji-san wa kazan.", sentenceMeaning: "O Monte Fuji é um vulcão." }
                ]
            },
            {
                character: "荒",
                meaning: "Rústico / Devastado / Selvagem / Agitado",
                kunyomi: "あら・い (arai) / あ・れる (areru)",
                onyomi: "コウ (KOU)",
                mnemonic: "Plantas (艹) e rios em estado de devastação selvagem.",
                examples: [
                    { word: "荒れ地 (arechi)", wordMeaning: "Terra devastada / Terreno baldio", sentence: "Arechi o kaiji.", sentenceMeaning: "Desbravar terreno baldio." },
                    { word: "荒波 (aranami)", wordMeaning: "Ondas revoltas", sentence: "Umi no aranami.", sentenceMeaning: "Ondas revoltas do mar." }
                ]
            },
            {
                character: "災",
                meaning: "Desastre / Calamidade / Catástrofe",
                kunyomi: "わざわ・い (wazawai)",
                onyomi: "サイ (SAI)",
                mnemonic: "Fogo (火) e água destruindo o ambiente em catástrofe.",
                examples: [
                    { word: "災害 (saigai)", wordMeaning: "Desastre natural / Catástrofe", sentence: "Saigai taisaku.", sentenceMeaning: "Contramedida de desastre." },
                    { word: "防災 (bousai)", wordMeaning: "Prevenção de desastres", sentence: "Bousai kunren.", sentenceMeaning: "Treinamento de prevenção de desastres." }
                ]
            },
            {
                character: "害",
                meaning: "Dano / Prejuízo / Malefício",
                kunyomi: "がい (gai)",
                onyomi: "ガイ (GAI)",
                mnemonic: "Teto sob o qual se profere malefício.",
                examples: [
                    { word: "被害 (higai)", wordMeaning: "Dano sofrido / Prejuízo", sentence: "Higai o ukeru.", sentenceMeaning: "Sofrer danos." },
                    { word: "公害 (kougai)", wordMeaning: "Poluição ambiental pública", sentence: "Kougai mondai.", sentenceMeaning: "Problema de poluição pública." }
                ]
            },
            {
                character: "暖",
                meaning: "Aquecido / Clima morno / Calor ameno",
                kunyomi: "あたた・かい (atatakai) / あたた・まる (atatamaru)",
                onyomi: "ダン (DAN)",
                mnemonic: "Sol (日) aquecendo o ambiente suavemente.",
                examples: [
                    { word: "温暖化 (ondanka)", wordMeaning: "Aquecimento global", sentence: "Chikyuu ondanka.", sentenceMeaning: "Aquecimento global da Terra." },
                    { word: "暖房 (danbou)", wordMeaning: "Aquecedor / Calefação", sentence: "Danbou o tsukeru.", sentenceMeaning: "Ligar o aquecedor." }
                ]
            },
            {
                character: "乾",
                meaning: "Seco / Desidratado / Enxugar",
                kunyomi: "かわ・く (kawaku) / かわ・かす (kawakasu)",
                onyomi: "カン (KAN)",
                mnemonic: "Sol brilhando até secar completamente a água.",
                examples: [
                    { word: "乾燥 (kansou)", wordMeaning: "Secura / Desidratação", sentence: "Air no kansou.", sentenceMeaning: "Secura do ar." },
                    { word: "乾電池 (kandentachi)", wordMeaning: "Pilha seca", sentence: "Kandentachi o kaeru.", sentenceMeaning: "Trocar as pilhas secas." }
                ]
            },
            {
                character: "湿",
                meaning: "Úmido / Humidade / Molhado",
                kunyomi: "しめ・る (shimeru) / しめ・す (shimesu)",
                onyomi: "シツ (SHITSU)",
                mnemonic: "Água (氵) acumulada provocando humidade.",
                examples: [
                    { word: "湿度 (shitsudo)", wordMeaning: "Umidade relativa do ar", sentence: "Shitsudo 80%.", sentenceMeaning: "Umidade de 80%." },
                    { word: "湿気 (shikki)", wordMeaning: "Humidade do ambiente", sentence: "Shikki ga ooi.", sentenceMeaning: "Muita humidade." }
                ]
            },
            {
                character: "霜",
                meaning: "Geada / Orvalho congelado",
                kunyomi: "しも (shimo)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Chuva (雨) congelada formando geada no solo.",
                examples: [
                    { word: "霜 (shimo)", wordMeaning: "Geada", sentence: "Shimo ga furu.", sentenceMeaning: "Cair geada." },
                    { word: "霜柱 (shimobashira)", wordMeaning: "Colunas de gelo no solo", sentence: "Shimobashira o step.", sentenceMeaning: "Pisar nas colunas de gelo do solo." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 地震 (jishin)?", options: ["Terremoto", "Tsunami", "Erupção", "Inundação"], a: 0 },
            { q: "Traduza 洪水 (kouzui):", options: ["Inundação / Enchente", "Secura", "Vento", "Geada"], a: 0 },
            { q: "Kunyomi de 乾く:", options: ["かわ・く (kawaku)", "あば・れる", "くず・れる", "ふ・く"], a: 0 },
            { q: "Onyomi de 津波 (Tsunami):", options: ["SHIN / HA (津波: tsunami)", "DAN", "HOU", "FUN"], a: 0 },
            { q: "O que significa 噴火 (funka)?", options: ["Erupção vulcânica", "Enchente", "Terremoto", "Fronteira"], a: 0 },
            { q: "Qual o kanji de 温暖化 (ondanka - Aquecimento)?", options: ["暖", "乾", "湿", "霜"], a: 0 },
            { q: "Traduza 防災 (bousai):", options: ["Prevenção de desastres", "Poluição", "Incêndio", "Terremoto"], a: 0 },
            { q: "Qual o kanji de 被害 (higai - Dano sofrido)?", options: ["害", "保", "護", "境"], a: 0 },
            { q: "Significado de 土砂崩れ (doshakuzure):", options: ["Deslizamento de terra e rocha", "Erupção", "Ondas altas", "Incêndio"], a: 0 },
            { q: "Complete: Chikyuu ______ (Aquecimento global).", options: ["ondanka (温暖化)", "kouzui", "jishin", "funka"], a: 0 }
        ]
    },
    {
        module: 10,
        title: "Módulo 10: Geografia, Infraestrutura e Transportes",
        description: "Estude 19 ideogramas de acidentes geográficos, litorais, construções viárias, pontes, urbanização e expansão de infraestrutura.",
        grammar: {
            title: "Expressando Localização Geográfica (~ni沿って)",
            explanation: "No N2, indica-se rotas e infraestruturas construídas ao longo de rios, litorais ou avenidas.",
            example: "Kawa ni sotte road ga arimasu.",
            translation: "Há uma estrada ao longo do rio."
        },
        readingText: {
            title: "都市開発とインフラ建設 (Desenvolvimento Urbano e Construção de Infraestrutura)",
            japanese: "<ruby>湾岸<rt>わんがん</rt></ruby>エリアに新しい<ruby>港<rt>みなと</rt></ruby>と<ruby>架橋<rt>かきょう</rt></ruby>を<ruby>建設<rt>けんせつ</rt></ruby>し、交通を<ruby>整備<rt>せいび</rt></ruby>します。<ruby>郊外<rt>こうがい</rt></ruby>へ<ruby>路線<rt>ろせん</rt></ruby>を<ruby>延伸<rt>えんしん</rt></ruby>します。",
            romaji: "Wangan eria ni atarashii minato to kakyou o kensetsu shi, koutsuu o seibi shimasu. Kougai he rosen o enshin shimasu.",
            translation: "Constroem-se um novo porto e pontes na zona da baía, organizando o trânsito. Estende-se as linhas férreas em direção aos subúrbios.",
            comprehensionQuiz: [
                {
                    q: "O que é construído na zona da baía (湾岸エリア)?", options: ["Um novo porto e pontes (新しい港と架橋)", "Casas de madeira rústica", "Fazendas de arroz", "Nada"], a: 0
                },
                {
                    q: "Qual a leitura de 建設?", options: ["けんせつ (kensetsu)", "わんがん", "みなと", "こうがい"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "域",
                meaning: "Região / Território / Zona urbana",
                kunyomi: "いき (iki)",
                onyomi: "イキ (IKI)",
                mnemonic: "Solo (土) cercado por limites territoriais.",
                examples: [
                    { word: "区域 (kuiki)", wordMeaning: "Zona / Setor delimitado", sentence: "Industrial kuiki.", sentenceMeaning: "Setor industrial." },
                    { word: "流域 (ryuuiik)", wordMeaning: "Bacia hidrográfica", sentence: "Kawa no ryuuiik.", sentenceMeaning: "Bacia hidrográfica do rio." }
                ]
            },
            {
                character: "陸",
                meaning: "Terra firme / Continente / Terreno seco",
                kunyomi: "りく (riku)",
                onyomi: "リク (RIKU) / ロク (ROKU)",
                mnemonic: "Penhasco e terra firme elevados acima do mar.",
                examples: [
                    { word: "陸上 (rikujou)", wordMeaning: "Sobre a terra / Atletismo", sentence: "Rikujou kyougi.", sentenceMeaning: "Modalidade de atletismo." },
                    { word: "大陸 (tairiku)", wordMeaning: "Continente", sentence: "Asian tairiku.", sentenceMeaning: "Continente asiático." }
                ]
            },
            {
                character: "湾",
                meaning: "Baía / Golfo / Curva litorânea",
                kunyomi: "わん (wan)",
                onyomi: "ワン (WAN)",
                mnemonic: "Água (氵) fazendo uma curva em arco na baía.",
                examples: [
                    { word: "港湾 (kouwan)", wordMeaning: "Portos e baías infraestruturais", sentence: "Kouwan facility.", sentenceMeaning: "Instalações portuárias." },
                    { word: "東京湾 (toukyouwan)", wordMeaning: "Baía de Tóquio", sentence: "Toukyouwan no view.", sentenceMeaning: "Vista da baía de Tóquio." }
                ]
            },
            {
                character: "港",
                meaning: "Porto / Ancoradouro",
                kunyomi: "みなと (minato)",
                onyomi: "コウ (KOU)",
                mnemonic: "Água (氵) onde os navios ancoram com segurança.",
                examples: [
                    { word: "空港 (kuukou)", wordMeaning: "Aeroporto", sentence: "Narita kuukou.", sentenceMeaning: "Aeroporto de Narita." },
                    { word: "港町 (minatomachi)", wordMeaning: "Cidade portuária", sentence: "Kobe wa minatomachi.", sentenceMeaning: "Kobe é uma cidade portuária." }
                ]
            },
            {
                character: "岸",
                meaning: "Margem / Litoral / Costa marítima / Penhasco",
                kunyomi: "きし (kishi)",
                onyomi: "ガン (GAN)",
                mnemonic: "Montanha (山) descendo em penhasco para a margem.",
                examples: [
                    { word: "海岸 (kaigan)", wordMeaning: "Costa marítima / Litoral", sentence: "Kaigan o walk.", sentenceMeaning: "Caminhar pelo litoral." },
                    { word: "岸辺 (kishibe)", wordMeaning: "Margem do rio", sentence: "Kawa no kishibe.", sentenceMeaning: "Margem do rio." }
                ]
            },
            {
                character: "橋",
                meaning: "Ponte / Viaduto",
                kunyomi: "はし (hashi)",
                onyomi: "キョウ (KYOU)",
                mnemonic: "Estrutura de madeira (木) elevada cruzando o rio.",
                examples: [
                    { word: "歩道橋 (hodoukyou)", wordMeaning: "Passarela de pedestres", sentence: "Hodoukyou o cross.", sentenceMeaning: "Atravessar a passarela de pedestres." },
                    { word: "鉄橋 (tekkyou)", wordMeaning: "Ponte metálica / Viaduto ferroviário", sentence: "Train ga tekkyou o pass.", sentenceMeaning: "O trem passa pela ponte metálica." }
                ]
            },
            {
                character: "坂",
                meaning: "Aclive / Ladeira / Encosta",
                kunyomi: "さか (saka)",
                onyomi: "ハン (HAN)",
                mnemonic: "Solo (土) inclinado em ladeira subindo.",
                examples: [
                    { word: "坂道 (sakamichi)", wordMeaning: "Caminho de ladeira / Aclive", sentence: "Sakamichi o climb.", sentenceMeaning: "Subir a ladeira." },
                    { word: "急坂 (kyuuhan)", wordMeaning: "Ladeira íngremes", sentence: "Kyuuhan no road.", sentenceMeaning: "Estrada de ladeira íngreme." }
                ]
            },
            {
                character: "谷",
                meaning: "Vale / Desfiladeiro",
                kunyomi: "たに (tani)",
                onyomi: "コク (KOKU)",
                mnemonic: "Água fluindo da boca entre duas montanhas.",
                examples: [
                    { word: "渓谷 (keikoku)", wordMeaning: "Desfiladeiro / Cânion", sentence: "Keikoku no view.", sentenceMeaning: "Vista do desfiladeiro." },
                    { word: "谷間 (tanima)", wordMeaning: "Vale profundo entre morros", sentence: "Morro no tanima.", sentenceMeaning: "Entre os morros do vale." }
                ]
            },
            {
                character: "島",
                meaning: "Ilha",
                kunyomi: "しま (shima)",
                onyomi: "トウ (TOU)",
                mnemonic: "Pássaro pousado na montanha (山) no meio do mar.",
                examples: [
                    { word: "島国 (shimaguni)", wordMeaning: "País insular", sentence: "Nihon wa shimaguni.", sentenceMeaning: "O Japão é um país insular." },
                    { word: "半島 (hantou)", wordMeaning: "Península", sentence: "Izu hantou.", sentenceMeaning: "Península de Izu." }
                ]
            },
            {
                character: "郊",
                meaning: "Subúrbio / Periferia urbana",
                kunyomi: "こう (kou)",
                onyomi: "コウ (KOU)",
                mnemonic: "Cidade e território periférico ao redor do centro.",
                examples: [
                    { word: "郊外 (kougai)", wordMeaning: "Subúrbio / Periferia da cidade", sentence: "Kougai ni sumu.", sentenceMeaning: "Morar no subúrbio." },
                    { word: "近郊 (kinkou)", wordMeaning: "Entorno suburbano", sentence: "Tokyo kinkou.", sentenceMeaning: "Entorno de Tóquio." }
                ]
            },
            {
                character: "央",
                meaning: "Centro / Ponto central",
                kunyomi: "おう (ou)",
                onyomi: "オウ (OU)",
                mnemonic: "Pessoa no meio exato do ponto central.",
                examples: [
                    { word: "中央 (chuuou)", wordMeaning: "Centro / Ponto central", sentence: "Chuuou line.", sentenceMeaning: "Linha central de trem." },
                    { word: "中央集権 (chuuoushuken)", wordMeaning: "Centralização do poder", sentence: "Seifu no chuuoushuken.", sentenceMeaning: "Centralização governamental." }
                ]
            },
            {
                character: "県",
                meaning: "Província / Estado administrativo",
                kunyomi: "けん (ken)",
                onyomi: "ケン (KEN)",
                mnemonic: "Distrito demarcado sob jurisdição provincial.",
                examples: [
                    { word: "県庁 (kenchou)", wordMeaning: "Sede do governo provincial", sentence: "Kenchou所在地.", sentenceMeaning: "Capital provincial." },
                    { word: "県知事 (kenchiji)", wordMeaning: "Governador da província", sentence: "Kenchiji no election.", sentenceMeaning: "Eleição do governador." }
                ]
            },
            {
                character: "府",
                meaning: "Prefeitura governamental / Capital regional",
                kunyomi: "ふ (fu)",
                onyomi: "フ (FU)",
                mnemonic: "Sede administrativa governamental sob o teto.",
                examples: [
                    { word: "府知事 (fuchiji)", wordMeaning: "Governador da prefeitura (Osaka/Kyoto)", sentence: "Osaka fuchiji.", sentenceMeaning: "Governador de Osaka." },
                    { word: "政府 (seifu)", wordMeaning: "Governo", sentence: "Seifu no official.", sentenceMeaning: "Oficial do governo." }
                ]
            },
            {
                character: "州",
                meaning: "Estado federativo / Ilha fluvia / Delta",
                kunyomi: "す (su)",
                onyomi: "シュウ (SHUU)",
                mnemonic: "Três ilhas fluviais entre correntes de água.",
                examples: [
                    { word: "本州 (honshuu)", wordMeaning: "Honshu (Ilha principal do Japão)", sentence: "Honshuu island.", sentenceMeaning: "Ilha de Honshu." },
                    { word: "三角州 (sankakusu)", wordMeaning: "Delta do rio", sentence: "Kawa no sankakusu.", sentenceMeaning: "Delta do rio." }
                ]
            },
            {
                character: "沿",
                meaning: "Ao longo de / Acompanhar a margem",
                kunyomi: "そ・う (sou)",
                onyomi: "エン (EN)",
                mnemonic: "Água (氵) correndo ao longo da margem.",
                examples: [
                    { word: "沿線 (ensen)", wordMeaning: "Ao longo da linha férrea", sentence: "Ensen no town.", sentenceMeaning: "Cidade ao longo da linha." },
                    { word: "沿岸 (engan)", wordMeaning: "Faixa litorânea", sentence: "Engan fishery.", sentenceMeaning: "Pesca litorânea." }
                ]
            },
            {
                character: "傾",
                meaning: "Inclinar / Ladeira / Tendência",
                kunyomi: "かたむ・く (katamuku) / かたむ・ける (katamukeru)",
                onyomi: "ケイ (KEI)",
                mnemonic: "Pessoa (亻) inclinando-se na ladeira.",
                examples: [
                    { word: "傾向 (keikou)", wordMeaning: "Tendência / Inclinação", sentence: "Market no keikou.", sentenceMeaning: "Tendência do mercado." },
                    { word: "傾斜 (keisha)", wordMeaning: "Inclinação / Aclive", sentence: "Road no keisha.", sentenceMeaning: "Inclinação da estrada." }
                ]
            },
            {
                character: "拓",
                meaning: "Desbravar / Abrir estradas / Expandir terra",
                kunyomi: "ひら・く (hiraku)",
                onyomi: "タク (TAKU)",
                mnemonic: "Mão (扌) abrindo pedras e desbravando estradas.",
                examples: [
                    { word: "開拓 (kaitaku)", wordMeaning: "Desbravamento / Colonização", sentence: "Land no kaitaku.", sentenceMeaning: "Desbravamento de terras." },
                    { word: "拓く (hiraku)", wordMeaning: "Abrir caminho / Desbravar", sentence: "Future o hiraku.", sentenceMeaning: "Abrir caminho para o futuro." }
                ]
            },
            {
                character: "築",
                meaning: "Construir / Edificar / Edificação",
                kunyomi: "きず・く (kizuku)",
                onyomi: "チク (CHIKU)",
                mnemonic: "Bambu (竹) e madeira (木) erguendo uma edificação.",
                examples: [
                    { word: "建築 (kenchiku)", wordMeaning: "Arquitetura / Construção civil", sentence: "Kenchiku kaisha.", sentenceMeaning: "Empresa de construção civil." },
                    { word: "新築 (shinchiku)", wordMeaning: "Construção nova / Recém-construído", sentence: "Shinchiku house.", sentenceMeaning: "Casa recém-construída." }
                ]
            },
            {
                character: "設",
                meaning: "Estabelecer / Instalar / Criar infraestrutura",
                kunyomi: "もう・ける (moukeru)",
                onyomi: "セツ (SETSU)",
                mnemonic: "Palavras (言) e armas organizadas na instalação.",
                examples: [
                    { word: "建設 (kensetsu)", wordMeaning: "Construção civil / Edificação", sentence: "Kensetsu project.", sentenceMeaning: "Projeto de construção civil." },
                    { word: "施設 (shisetsu)", wordMeaning: "Instalação / Centro de serviço", sentence: "Public shisetsu.", sentenceMeaning: "Instalação pública." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 空港 (kuukou)?", options: ["Aeroporto", "Porto marítimo", "Passarela", "Delta"], a: 0 },
            { q: "Traduza 建築 (kenchiku):", options: ["Arquitetura / Construção civil", "Desbravamento", "Fronteira", "Inundação"], a: 0 },
            { q: "Kunyomi de 傾く:", options: ["かたむ・く (katamuku)", "きず・く", "ひら・く", "そ・う"], a: 0 },
            { q: "Onyomi de 沿線 (Ao longo da linha):", options: ["エン (EN)", "CHIKU", "WAN", "GAN"], a: 0 },
            { q: "O que significa 郊外 (kougai)?", options: ["Subúrbio / Periferia", "Centro urbano", "Ilha insular", "Desfiladeiro"], a: 0 },
            { q: "Qual o kanji de 歩道橋 (hodoukyou - Passarela)?", options: ["橋", "坂", "谷", "岸"], a: 0 },
            { q: "Traduza 開拓 (kaitaku):", options: ["Desbravamento / Colonização", "Arquitetura", "Periferia", "Tendência"], a: 0 },
            { q: "Qual o kanji de 海岸 (kaigan - Litoral)?", options: ["岸", "湾", "港", "島"], a: 0 },
            { q: "Significado de 傾向 (keikou):", options: ["Tendência / Inclinação", "Ponte metálica", "Continente", "Subúrbio"], a: 0 },
            { q: "Complete: Kougai ni ______ (Morar no subúrbio).", options: ["sumu (住む)", "katamuku", "kizuku", "hiraku"], a: 0 }
        ]
    },
    {
        module: 11,
        title: "Módulo 11: Filosofia, Pensamento e Psicologia Humana",
        description: "Estude 19 ideogramas de dilemas morais, sabedoria, consciência, virtudes, psique humana e sentimentos profundos.",
        grammar: {
            title: "Expressando Percepção Abstrata (~ni taishite)",
            explanation: "No N2, introduz-se atitudes mentais e posicionamentos filosóficos em relação a conceitos morais.",
            example: "Rinri ni taishite shinken ni kangaemasu.",
            translation: "Pensamos seriamente em relação à ética."
        },
        readingText: {
            title: "哲学と人間精神 (Filosofia e o Espírito Humano)",
            japanese: "<ruby>哲学<rt>てつがく</rt></ruby>者は人生の<ruby>意義<rt>いぎ</rt></ruby>を<ruby>探求<rt>たんきゅう</rt></ruby>し、<ruby>倫理<rt>りんり</rt></ruby>観を<ruby>深<rt>ふか</rt></ruby>めます。<ruby>自己<rt>じこ</rt></ruby>の<ruby>内面<rt>ないめん</rt></ruby>を<ruby>省察<rt>せいさつ</rt></ruby>して<ruby>悟<rt>さと</rt></ruby>りを開きます。",
            romaji: "Tetsugakusha wa jinsei no igi o tankyuu shi, rinrikan o fukamemasu. Jiko no naimen o seisatsu shite satori o hirakimasu.",
            translation: "O filósofo busca o significado da vida e aprofunda seu senso de ética. Ao refletir sobre seu mundo interior, alcança a iluminação.",
            comprehensionQuiz: [
                {
                    q: "O que o filósofo busca na vida?", options: ["O significado da vida e o senso de ética (人生の意義と倫理観)", "Apenas moedas de ouro", "Ficar sem pensar", "Construir prédios"], a: 0
                },
                {
                    q: "Qual a leitura de 哲学?", options: ["てつがく (tetsugaku)", "りんり", "さとり", "たんきゅう"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "哲",
                meaning: "Filosofia / Sábio / Pensamento profundo",
                kunyomi: "てつ (tetsu)",
                onyomi: "テツ (TETSU)",
                mnemonic: "Palavras (言) do sábio refletidas com agudeza mental.",
                examples: [
                    { word: "哲学 (tetsugaku)", wordMeaning: "Filosofia", sentence: "Tetsugaku no class.", sentenceMeaning: "Aula de filosofia." },
                    { word: "哲人 (tetsujin)", wordMeaning: "Sábio / Filósofo", sentence: "Ancient tetsujin.", sentenceMeaning: "Sábio da antiguidade." }
                ]
            },
            {
                character: "倫",
                meaning: "Ética / Moral / Relação humana",
                kunyomi: "りん (rin)",
                onyomi: "リン (RIN)",
                mnemonic: "Pessoa (亻) agindo em conformidade com as normas sociais.",
                examples: [
                    { word: "倫理 (rinri)", wordMeaning: "Ética / Moral", sentence: "Rinri-teki na decision.", sentenceMeaning: "Decisão ética." },
                    { word: "不倫 (furin)", wordMeaning: "Adulterior / Infidelidade", sentence: "Furin no scandal.", sentenceMeaning: "Escândalo de infidelidade." }
                ]
            },
            {
                character: "魂",
                meaning: "Alma / Espírito / Essência vital",
                kunyomi: "たましい (tamashii)",
                onyomi: "コン (KON)",
                mnemonic: "Fantasma espiritual manifestado com alma.",
                examples: [
                    { word: "魂 (tamashii)", wordMeaning: "Alma / Espírito", sentence: "Tamashii o komete.", sentenceMeaning: "Com toda a alma." },
                    { word: "霊魂 (reikon)", wordMeaning: "Alma / Espírito dos ancestrais", sentence: "Reikon no inori.", sentenceMeaning: "Oração pelas almas dos ancestrais." }
                ]
            },
            {
                character: "凝",
                meaning: "Concentrar / Congelar / Rígido / Obcecar",
                kunyomi: "こ・る (koru) / こ・らす (korasu)",
                onyomi: "ギョウ (GYOU)",
                mnemonic: "Gelo (冫) e mente focado congelando em concentração.",
                examples: [
                    { word: "凝縮 (gyoushuku)", wordMeaning: "Condensação / Concentração", sentence: "Essence no gyoushuku.", sentenceMeaning: "Concentração da essência." },
                    { word: "凝る (koru)", wordMeaning: "Ficar rígido / Dedicar-se com paixão", sentence: "Hada ga koru.", sentenceMeaning: "Ficar com os ombros rígidos." }
                ]
            },
            {
                character: "悟",
                meaning: "Despertar / Compreender / Alcançar a iluminação",
                kunyomi: "さと・る (satoru)",
                onyomi: "ゴ (GO)",
                mnemonic: "Coração (忄) e mente despertando para a verdade de mim (吾).",
                examples: [
                    { word: "悟り (satori)", wordMeaning: "Iluminação espiritual / Despertar", sentence: "Satori o abrir.", sentenceMeaning: "Alcançar a iluminação." },
                    { word: "覚悟 (kakugo)", wordMeaning: "Determinação / Estar preparado", sentence: "Kakugo o kimeru.", sentenceMeaning: "Tomar uma determinação firme." }
                ]
            },
            {
                character: "索",
                meaning: "Buscar / Procurar / Corda / Pesquisa",
                kunyomi: "さく (saku)",
                onyomi: "サク (SAKU)",
                mnemonic: "Fios atados em busca de vestígios e respostas.",
                examples: [
                    { word: "検索 (kensaku)", wordMeaning: "Busca / Pesquisa em banco de dados", sentence: "Google de kensaku.", sentenceMeaning: "Pesquisar no Google." },
                    { word: "模索 (mosaku)", wordMeaning: "Busca às cegas / Procurar soluções", sentence: "Method no mosaku.", sentenceMeaning: "Procurar métodos às cegas." }
                ]
            },
            {
                character: "妄",
                meaning: "Ilusão / Falso / Imprudente / Delírio",
                kunyomi: "みだ・りに (midarini)",
                onyomi: "MOU (MOU) / ボウ (BOU)",
                mnemonic: "Mulher (女) e mente levada por pensamentos ilusórios.",
                examples: [
                    { word: "妄想 (mousou)", wordMeaning: "Delírio / Fantasia ilusória", sentence: "Mousou o fukamiru.", sentenceMeaning: "Mergulhar em delírios." },
                    { word: "被害妄想 (higaimousou)", wordMeaning: "Paranoia de perseguição", sentence: "Higaimousou ni nayamu.", sentenceMeaning: "Sofrer de paranoia de perseguição." }
                ]
            },
            {
                character: "幻",
                meaning: "Ilusão / Fantasma / Visão passageira",
                kunyomi: "まぼろし (maboroshi)",
                onyomi: "ゲン (GEN)",
                mnemonic: "Desenho de sombras criando uma visão ilusória.",
                examples: [
                    { word: "幻覚 (genkaku)", wordMeaning: "Alucinação visual", sentence: "Genkaku o miru.", sentenceMeaning: "Ter alucinações." },
                    { word: "幻影 (genei)", wordMeaning: "Ilusão / Espectro", sentence: "Genei o chasing.", sentenceMeaning: "Perseguir uma ilusão." }
                ]
            },
            {
                character: "惑",
                meaning: "Iludir-se / Perplexo / Desorientado",
                kunyomi: "まど・う (madou)",
                onyomi: "ワク (WAKU)",
                mnemonic: "Coração (心) cercado por dúvidas e desorientação.",
                examples: [
                    { word: "迷惑 (meiwaku)", wordMeaning: "Incômodo / Perturbação", sentence: "Meiwaku o kakeru.", sentenceMeaning: "Causar incômodo." },
                    { word: "惑わす (madowasu)", wordMeaning: "Desorientar / Confundir", sentence: "Hito o madowasu.", sentenceMeaning: "Confundir as pessoas." }
                ]
            },
            {
                character: "愁",
                meaning: "Melancolia / Tristeza / Ponderação ansiosa",
                kunyomi: "うれ・える (ureeru) / うれ・い (urei)",
                onyomi: "シュウ (SHUU)",
                mnemonic: "Outono (秋) no coração (心) trazendo melancolia.",
                examples: [
                    { word: "郷愁 (kyoushuu)", wordMeaning: "Nostalgia da terra natal", sentence: "Kyoushuu ni tatsu.", sentenceMeaning: "Sentir nostalgia da terra natal." },
                    { word: "哀愁 (aishuu)", wordMeaning: "Melancolia profunda", sentence: "Aishuu no melody.", sentenceMeaning: "Melodia de profunda melancolia." }
                ]
            },
            {
                character: "恥",
                meaning: "Vergonha / Timidez / Desonra",
                kunyomi: "はじ (haji) / はず・かしい (hazukashii)",
                onyomi: "チ (CHI)",
                mnemonic: "Orelha (耳) vermelha de vergonha no coração (心).",
                examples: [
                    { word: "恥ずかしい (hazukashii)", wordMeaning: "Com vergonha / Tímido", sentence: "Hazukashii desu.", sentenceMeaning: "Estou com vergonha." },
                    { word: "羞恥心 (shuuchishin)", wordMeaning: "Senso de pudor / Modéstia", sentence: "Shuuchishin ga arimasu.", sentenceMeaning: "Ter senso de pudor." }
                ]
            },
            {
                character: "憤",
                meaning: "Indignação / Ira / Ressentimento justo",
                kunyomi: "ふん・じる (funjiru) / いきどお・る (ikidooru)",
                onyomi: "フン (FUN)",
                mnemonic: "Coração (忄) inflamado em revolta e indignação.",
                examples: [
                    { word: "憤慨 (fungai)", wordMeaning: "Indignação / Revolta moral", sentence: "Unfair ni fungai.", sentenceMeaning: "Indignado com a injustiça." },
                    { word: "義憤 (gifun)", wordMeaning: "Indignação justa / Ira virtuosa", sentence: "Gifun o felt.", sentenceMeaning: "Sentir indignação justa." }
                ]
            },
            {
                character: "恨",
                meaning: "Rancor / Ressentimento / Amargura",
                kunyomi: "うら・む (uramu) / うら・めしい (urameshiesii)",
                onyomi: "コン (KON)",
                mnemonic: "Coração (忄) guardando amargura e ressentimento.",
                examples: [
                    { word: "恨み (urami)", wordMeaning: "Rancor / Mágua acumulada", sentence: "Urami o daku.", sentenceMeaning: "Guardar rancor." },
                    { word: "痛恨 (tsuukon)", wordMeaning: "Lamento profundo / Arrependimento", sentence: "Tsuukon no mistake.", sentenceMeaning: "Erro profundamente lamentável." }
                ]
            },
            {
                character: "慕",
                meaning: "Admirar / Ter saudades / Afeição profunda",
                kunyomi: "した・う (shitau)",
                onyomi: "ボ (BO)",
                mnemonic: "Coração (心) voltado para quem se admira com carinho.",
                examples: [
                    { word: "慕う (shitau)", wordMeaning: "Admirar / Amar com saudade", sentence: "Teacher o shitau.", sentenceMeaning: "Admirar o professor." },
                    { word: "敬慕 (keibo)", wordMeaning: "Respeito e admiração profunda", sentence: "Keibo no spirit.", sentenceMeaning: "Espírito de admiração profunda." }
                ]
            },
            {
                character: "悦",
                meaning: "Alegria / Prazer / Contentamento",
                kunyomi: "えつ (etsu)",
                onyomi: "エツ (ETSU)",
                mnemonic: "Coração (忄) transbordando alegria e prazer interior.",
                examples: [
                    { word: "喜悦 (kietsu)", wordMeaning: "Jubilo / Alegria intensa", sentence: "Kietsu no voice.", sentenceMeaning: "Voz de júbilo." },
                    { word: "満悦 (man'etsu)", wordMeaning: "Plena satisfação", sentence: "Man'etsu no smile.", sentenceMeaning: "Sorriso de plena satisfação." }
                ]
            },
            {
                character: "仰",
                meaning: "Admirar / Olhar para cima / Respeitar",
                kunyomi: "あお・ぐ (aogu) / おお・せ (oose)",
                onyomi: "ギョウ (GYOU) / コウ (KOU)",
                mnemonic: "Pessoa (亻) olhando para cima em sinal de admiração.",
                examples: [
                    { word: "信仰 (shinkou)", wordMeaning: "Fé / Crença religiosa", sentence: "Shinkou no heart.", sentenceMeaning: "Coração de fé." },
                    { word: "仰ぎ見る (aogimiru)", wordMeaning: "Contemplar olhando para o alto", sentence: "Sky o aogimiru.", sentenceMeaning: "Contemplar o céu." }
                ]
            },
            {
                character: "崇",
                meaning: "Venerar / Elevado / Sublime",
                kunyomi: "あが・める (agameru)",
                onyomi: "スウ (SUU)",
                mnemonic: "Montanha (山) sagrada reverenciada no topo.",
                examples: [
                    { word: "崇拝 (suuhai)", wordMeaning: "Adoração / Veneração", sentence: "Hero no suuhai.", sentenceMeaning: "Adoração ao herói." },
                    { word: "崇高 (suukou)", wordMeaning: "Sublime / Elevado", sentence: "Suukou na goal.", sentenceMeaning: "Meta sublime e elevada." }
                ]
            },
            {
                character: "尊",
                meaning: "Respeitar / Nobre / Venerável / Precioso",
                kunyomi: "とうと・い (toutoi) / たっと・い (tattoi)",
                onyomi: "ソン (SON)",
                mnemonic: "Vaso sagrado oferecido em sinal de respeito.",
                examples: [
                    { word: "尊重 (sonchou)", wordMeaning: "Respeito / Valorização", sentence: "Opinion o sonchou.", sentenceMeaning: "Respeitar as opiniões." },
                    { word: "尊厳 (songen)", wordMeaning: "Dignidade", sentence: "Human no songen.", sentenceMeaning: "Dignidade humana." }
                ]
            },
            {
                character: "敬",
                meaning: "Respeitar / Reverenciar / Modéstia",
                kunyomi: "うやま・う (uyamau)",
                onyomi: "ケイ (KEI)",
                mnemonic: "Palavras e frases ditas em reverência respeitosa.",
                examples: [
                    { word: "敬語 (keigo)", wordMeaning: "Linguagem respeitosa (Keigo)", sentence: "Keigo o tsukau.", sentenceMeaning: "Usar linguagem respeitosa." },
                    { word: "敬意 (keii)", wordMeaning: "Respeito / Vênia", sentence: "Keii o shimesu.", sentenceMeaning: "Demonstrar respeito." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 検索 (kensaku)?", options: ["Busca / Pesquisa em dados", "Delírio", "Fuga", "Vergonha"], a: 0 },
            { q: "Traduza 哲学 (tetsugaku):", options: ["Filosofia", "Ética", "Nostalgia", "Religião"], a: 0 },
            { q: "Kunyomi de 悟る:", options: ["さと・る (satoru)", "うら・む", "した・う", "あお・ぐ"], a: 0 },
            { q: "Onyomi de 敬語 (Keigo):", options: ["ケイ (KEI)", "SON", "RIN", "TETSU"], a: 0 },
            { q: "O que significa 尊重 (sonchou)?", options: ["Respeito / Valorização", "Incomodo", "Paranoia", "Lamento"], a: 0 },
            { q: "Qual o kanji de 覚悟 (kakugo - Determinação)?", options: ["悟", "哲", "倫", "妄"], a: 0 },
            { q: "Traduza 迷惑 (meiwaku):", options: ["Incômodo / Perturbação", "Alucinação", "Iluminação", "Dignidade"], a: 0 },
            { q: "Qual o kanji de 信仰 (shinkou - Fé)?", options: ["仰", "崇", "尊", "敬"], a: 0 },
            { q: "Significado de 羞恥心 (shuuchishin):", options: ["Senso de pudor / Modéstia", "Raiva", "Júbilo", "Rancor"], a: 0 },
            { q: "Complete: Google de ______ (Pesquisar no Google).", options: ["kensaku (検索)", "mousou", "satori", "keigo"], a: 0 }
        ]
    },
    {
        module: 12,
        title: "Módulo 12: Artes, Arquitetura e Cultura Tradicional",
        description: "Estude 19 ideogramas de teatro tradicional, escultura, caligrafia, cerâmica, arranjos, estruturas de madeira e estética Zen.",
        grammar: {
            title: "Expressando Estética Cultural (~ni saku)",
            explanation: "No N2, expressam-se manifestações de tradições artísticas e artesanais refinadas.",
            example: "Geijutsu ni saku biken desu.",
            translation: "É um olhar belo voltado às artes."
        },
        readingText: {
            title: "日本の伝統建築と美意識 (Arquitetura Tradicional Japonesa e Estética)",
            japanese: "古風な<ruby>木造<rt>もくぞう</rt></ruby><ruby>建築<rt>けんちく</rt></ruby>では、立派な<ruby>柱<rt>はしら</rt></ruby>と<ruby>梁<rt>はり</rt></ruby>が<ruby>構造<rt>こうぞう</rt></ruby>を支えます。<ruby>茶室<rt>ちゃしつ</rt></ruby>には<ruby>禅<rt>ぜん</rt></ruby>の精神と<ruby>幽玄<rt>ゆうげん</rt></ruby>な美が宿ります。",
            romaji: "Kofuu na mokuzou kenchiku dewa, rippa na hashira to hari ga kouzou o sasaemasu. Chashitsu ni wa zen no seishin to yuugen na bi ga yadorimasu.",
            translation: "Na arquitetura de madeira clássica, pilares e vigas admiráveis sustentam a estrutura. Na sala de chá reside o espírito Zen e a beleza sutil.",
            comprehensionQuiz: [
                {
                    q: "O que sustenta a estrutura na arquitetura clássica?", options: ["Pilares e vigas admiráveis (立派な柱と梁)", "Paredes de concreto", "Fios de plástico", "Vidros"], a: 0
                },
                {
                    q: "Qual a leitura de 柱?", options: ["はしら (hashira)", "はり", "ぜん", "こうぞう"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "劇",
                meaning: "Teatro / Drama / Ação dramática",
                kunyomi: "げき (geki)",
                onyomi: "ゲキ (GEKI)",
                mnemonic: "Faca (刂) e cena dramática encenada no palco.",
                examples: [
                    { word: "演劇 (engeki)", wordMeaning: "Peça teatral", sentence: "Engeki no stage.", sentenceMeaning: "Palco de peça teatral." },
                    { word: "劇的 (gekiteki)", wordMeaning: "Dramático / Impressionante", sentence: "Gekiteki na change.", sentenceMeaning: "Mudança dramática." }
                ]
            },
            {
                character: "舞",
                meaning: "Dança / Dançar / Palco teatral",
                kunyomi: "ま・う (mau) / まい (mai)",
                onyomi: "ブ (BU)",
                mnemonic: "Pessoa dançando com vestidos esvoaçantes no palco.",
                examples: [
                    { word: "歌舞伎 (kabuki)", wordMeaning: "Teatro tradicional Kabuki", sentence: "Kabuki o miru.", sentenceMeaning: "Assistir ao teatro Kabuki." },
                    { word: "舞踊 (buyou)", wordMeaning: "Dança clássica / Coreografia", sentence: "Nihon buyou.", sentenceMeaning: "Dança clássica japonesa." }
                ]
            },
            {
                character: "奏",
                meaning: "Tocar instrumento / Apresentar música / Tocar",
                kunyomi: "かな・でる (kanaderu)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Mãos dedilhando o instrumento para a apresentação.",
                examples: [
                    { word: "演奏 (ensou)", wordMeaning: "Apresentação musical / Performance", sentence: "Piano no ensou.", sentenceMeaning: "Apresentação de piano." },
                    { word: "奏者 (sousha)", wordMeaning: "Instrumentista / Músico executante", sentence: "Violin no sousha.", sentenceMeaning: "Executante de violino." }
                ]
            },
            {
                character: "譜",
                meaning: "Partitura / Genealogia / Registro musical",
                kunyomi: "ふ (fu)",
                onyomi: "フ (FU)",
                mnemonic: "Palavras (言) e notas alinhadas na partitura.",
                examples: [
                    { word: "楽譜 (gakufu)", wordMeaning: "Partitura musical", sentence: "Gakufu o yomu.", sentenceMeaning: "Ler a partitura musical." },
                    { word: "家譜 (kafu)", wordMeaning: "Árvore genealógica da família", sentence: "Kafu no record.", sentenceMeaning: "Registro da árvore genealógica." }
                ]
            },
            {
                character: "彫",
                meaning: "Esculpir / Entalhar / Gravar em pedra/madeira",
                kunyomi: "ほ・る (horu)",
                onyomi: "チョウ (CHOU)",
                mnemonic: "Faca (刂) esculpindo figuras na madeira.",
                examples: [
                    { word: "彫刻 (choukoku)", wordMeaning: "Escultura / Obra entalhada", sentence: "Stone no choukoku.", sentenceMeaning: "Escultura de pedra." },
                    { word: "彫る (horu)", wordMeaning: "Esculpir / Entalhar", sentence: "Wood o horu.", sentenceMeaning: "Entalhar a madeira." }
                ]
            },
            {
                character: "墨",
                meaning: "Tinta nankin / Tinta preta de caligrafia",
                kunyomi: "すみ (sumi)",
                onyomi: "ボク (BOKU)",
                mnemonic: "Terra (土) preta (黒) moída para caligrafia Shodo.",
                examples: [
                    { word: "水墨画 (suibokuga)", wordMeaning: "Pintura em tinta nankin", sentence: "Suibokuga o kaku.", sentenceMeaning: "Pintar em tinta nankin." },
                    { word: "墨汁 (bokujuu)", wordMeaning: "Tinta nankin líquida", sentence: "Bokujuu de shodou.", sentenceMeaning: "Praticar caligrafia com tinta nankin." }
                ]
            },
            {
                character: "漆",
                meaning: "Laca japonesa / Verniz tradicional Urushi",
                kunyomi: "うるし (urushi)",
                onyomi: "シツ (SHITSU)",
                mnemonic: "Água (氵) e resina preciosa formando a laca.",
                examples: [
                    { word: "漆器 (shikki)", wordMeaning: "Utensílios de laca Urushi", sentence: "Shikki no bowl.", sentenceMeaning: "Tigela de laca tradicional." },
                    { word: "漆黒 (shikkoku)", wordMeaning: "Preto azeviche / Preto profundo", sentence: "Shikkoku no hair.", sentenceMeaning: "Cabelo preto azeviche." }
                ]
            },
            {
                character: "陶",
                meaning: "Cerâmica / Porcelana / Cultivar o caráter",
                kunyomi: "とう (tou)",
                onyomi: "トウ (TOU)",
                mnemonic: "Barro modelado na roda do oleiro.",
                examples: [
                    { word: "陶器 (touki)", wordMeaning: "Louça de cerâmica / Porcelana", sentence: "Touki no cup.", sentenceMeaning: "Xícara de cerâmica." },
                    { word: "陶芸 (tougei)", wordMeaning: "Arte da cerâmica / Olaria", sentence: "Tougei class.", sentenceMeaning: "Aula de arte da cerâmica." }
                ]
            },
            {
                character: "匠",
                meaning: "Artesão / Mestre / Especialista",
                kunyomi: "たくみ (takumi)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Caixa de ferramentas do mestre artesão.",
                examples: [
                    { word: "巨匠 (kyoshou)", wordMeaning: "Grande mestre / Mestre aclamado", sentence: "Art no kyoshou.", sentenceMeaning: "Grande mestre da arte." },
                    { word: "意匠 (ishou)", wordMeaning: "Design artístico / Concepção gráfica", sentence: "Product no ishou.", sentenceMeaning: "Design gráfico do produto." }
                ]
            },
            {
                character: "亭",
                meaning: "Pavilhão / Restaurante tradicional / Quiosque",
                kunyomi: "てい (tei)",
                onyomi: "テイ (TEI)",
                mnemonic: "Estrutura elevada com teto abrigando o quiosque.",
                examples: [
                    { word: "料亭 (ryoutei)", wordMeaning: "Restaurante tradicional de alta gastronomia", sentence: "Ryoutei de dinner.", sentenceMeaning: "Jantar em restaurante tradicional." },
                    { word: "東屋 (azumaya)", wordMeaning: "Quiosque de jardim / Gazebo", sentence: "Park no azumaya.", sentenceMeaning: "Gazebo do parque." }
                ]
            },
            {
                character: "閣",
                meaning: "Palácio / Torre tradicional / Gabinete",
                kunyomi: "かく (kaku)",
                onyomi: "カク (KAKU)",
                mnemonic: "Portão (門) governamental da torre palaciana.",
                examples: [
                    { word: "金閣寺 (kinkakuji)", wordMeaning: "Templo do Pavilhão Dourado", sentence: "Kinkakuji ni iku.", sentenceMeaning: "Visitar o Templo Kinkakuji." },
                    { word: "閣下 (kakka)", wordMeaning: "Vossa Excelência / Título nobre", sentence: "Ambassador kakka.", sentenceMeaning: "Vossa Excelência Embaixador." }
                ]
            },
            {
                character: "廊",
                meaning: "Corredor / Galeria / Passadiço",
                kunyomi: "ろう (rou)",
                onyomi: "ロウ (ROU)",
                mnemonic: "Corredor sob o teto da galeria tradicional.",
                examples: [
                    { word: "廊下 (rouka)", wordMeaning: "Corredor / Passagem interna", sentence: "Rouka o walk.", sentenceMeaning: "Caminhar pelo corredor." },
                    { word: "画廊 (garou)", wordMeaning: "Galeria de arte", sentence: "Garou de exhibit.", sentenceMeaning: "Exposição em galeria de arte." }
                ]
            },
            {
                character: "柱",
                meaning: "Pillar / Coluna / Suporte principal",
                kunyomi: "はしら (hashira)",
                onyomi: "チュウ (CHUU)",
                mnemonic: "Madeira (木) erguida reta como coluna de sustentação.",
                examples: [
                    { word: "電柱 (denchuu)", wordMeaning: "Poste de iluminação/energia", sentence: "Denchuu ni hit.", sentenceMeaning: "Bater no poste de energia." },
                    { word: "大黒柱 (daikokubashira)", wordMeaning: "Pilar mestre / Sustento da família", sentence: "Family no daikokubashira.", sentenceMeaning: "O sustento principal da família." }
                ]
            },
            {
                character: "梁",
                meaning: "Viga de sustentação / Ponte",
                kunyomi: "はり (hari)",
                onyomi: "リョウ (RYOU)",
                mnemonic: "Madeira (木) transversal no teto sustentando o telhado.",
                examples: [
                    { word: "梁 (hari)", wordMeaning: "Viga de madeira no teto", sentence: "Mokuzou no hari.", sentenceMeaning: "Viga de madeira da casa." },
                    { word: "橋梁 (kyouryou)", wordMeaning: "Pontes e grandes viadutos", sentence: "Kyouryou engineering.", sentenceMeaning: "Engenharia de pontes e viadutos." }
                ]
            },
            {
                character: "障",
                meaning: "Barreira / Divisória de papel (Shoji) / Impedimento",
                kunyomi: "さわ・わる (sawawaru)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Muro e tela separando ambientes.",
                examples: [
                    { word: "障子 (shouji)", wordMeaning: "Porta de correr de papel de arroz (Shoji)", sentence: "Shouji o open.", sentenceMeaning: "Abrir a porta Shoji." },
                    { word: "障害 (shougai)", wordMeaning: "Obstáculo / Deficiência", sentence: "Shougai o koeru.", sentenceMeaning: "Superar obstáculos." }
                ]
            },
            {
                character: "禅",
                meaning: "Zen Budismo / Meditação silenciosa",
                kunyomi: "ぜん (zen)",
                onyomi: "ゼン (ZEN)",
                mnemonic: "Altar sagrado (礻) e mente em meditação profunda.",
                examples: [
                    { word: "座禅 (zazen)", wordMeaning: "Meditação Zazen sentada", sentence: "Zazen o suru.", sentenceMeaning: "Praticar meditação Zazen." },
                    { word: "禅宗 (zenshuu)", wordMeaning: "Escola Budista Zen", sentence: "Zenshuu no otera.", sentenceMeaning: "Templo da escola Zen." }
                ]
            },
            {
                character: "雅",
                meaning: "Elegância / Refinamento estético / Clássico",
                kunyomi: "みやび (miyabi)",
                onyomi: "ガ (GA)",
                mnemonic: "Pássaro e elegância nas artes da corte.",
                examples: [
                    { word: "優雅 (yuuga)", wordMeaning: "Elegante / Gracioso", sentence: "Yuuga na dance.", sentenceMeaning: "Dança graciosa e elegante." },
                    { word: "雅楽 (gagaku)", wordMeaning: "Música clássica da corte imperial", sentence: "Gagaku no concert.", sentenceMeaning: "Concerto de música imperial Gagaku." }
                ]
            },
            {
                character: "幽",
                meaning: "Misterioso / Profundo / Silencioso / Escondido",
                kunyomi: "かす・か (kasuka)",
                onyomi: "ユウ (YUU)",
                mnemonic: "Fios e montanhas em penumbra sutil.",
                examples: [
                    { word: "幽玄 (yuugen)", wordMeaning: "Beleza sutil e profunda (Conceito estético)", sentence: "Yuugen na bi.", sentenceMeaning: "Beleza sutil e profunda." },
                    { word: "幽霊 (yuurei)", wordMeaning: "Fantasma / Espectro", sentence: "Yuurei no story.", sentenceMeaning: "História de fantasma." }
                ]
            },
            {
                character: "粋",
                meaning: "Elegante / Refinado / Essência chique",
                kunyomi: "いき (iki)",
                onyomi: "スイ (SUI)",
                mnemonic: "Grãos de arroz (米) polidos refinadamente.",
                examples: [
                    { word: "粋 (iki)", wordMeaning: "Chique / Elegante estilo urbano", sentence: "Iki na costume.", sentenceMeaning: "Traje elegante." },
                    { word: "抜粋 (bassui)", wordMeaning: "Seleção do melhor trecho", sentence: "Text no bassui.", sentenceMeaning: "Seleção do melhor trecho." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 彫刻 (choukoku)?", options: ["Escultura", "Pintura", "Partitura", "Dança"], a: 0 },
            { q: "Traduza 障子 (shouji):", options: ["Porta de correr de papel de arroz", "Viga", "Corredor", "Gazebo"], a: 0 },
            { q: "Kunyomi de 彫る:", options: ["ほ・る (horu)", "かな・でる", "ま・う", "みやび"], a: 0 },
            { q: "Onyomi de 楽譜 (Partitura):", options: ["フ (FU)", "BU", "BOKU", "CHOU"], a: 0 },
            { q: "O que significa 座禅 (zazen)?", options: ["Meditação Zazen sentada", "Cerâmica", "Dança Kabuki", "Pintura nankin"], a: 0 },
            { q: "Qual o kanji de 廊下 (rouka - Corredor)?", options: ["廊", "柱", "梁", "亭"], a: 0 },
            { q: "Traduza 幽玄 (yuugen):", options: ["Beleza sutil e profunda", "Escultura", "Laca", "Gazebo"], a: 0 },
            { q: "Qual o kanji de 陶器 (touki - Porcelana)?", options: ["陶", "漆", "墨", "匠"], a: 0 },
            { q: "Significado de 巨匠 (kyoshou):", options: ["Grande mestre das artes", "Instrumentista", "Corredor", "Maquete"], a: 0 },
            { q: "Complete: Gakufu o ______ (Ler a partitura musical).", options: ["yomu (読む)", "horu", "kanaderu", "mau"], a: 0 }
        ]
    },
    {
        module: 13,
        title: "Módulo 13: Sociedade, Relações Internacionais e Diplomacia",
        description: "Estude 19 ideogramas de alianças multilaterais, geopolítica, migração, tratados internacionais e diplomacia.",
        grammar: {
            title: "Expressando Relações Diplomáticas (~wo megutte)",
            explanation: "No N2, expressam-se divergências ou negociações em torno de pautas e tratados internacionais.",
            example: "Jouyaku o megutte koushou shimasu.",
            translation: "Negociamos em torno do tratado."
        },
        readingText: {
            title: "国際社会と外交交渉 (Sociedade Internacional e Negociações Diplomáticas)",
            japanese: "<ruby>加盟<rt>かめい</rt></ruby>国が<ruby>条約<rt>じょうやく</rt></ruby>を<ruby>締結<rt>ていけつ</rt></ruby>し、<ruby>紛争<rt>ふんそう</rt></ruby>の<ruby>和平<rt>わへい</rt></ruby><ruby>解決<rt>かいけつ</rt></ruby>を模索します。<ruby>人道<rt>じんどう</rt></ruby>的<ruby>支援<rt>しえん</rt></ruby>に<ruby>貢献<rt>こうけん</rt></ruby>することが求められます。",
            romaji: "Kameikoku ga jouyaku o teiketsu shi, funsou no wahei kaiketsu o mosaku shimasu. Jindouteki shien ni kouken suru koto ga motomeraremasu.",
            translation: "Os países membros assinam o tratado, buscando a solução pacífica dos conflitos. Exige-se contribuir com ajuda humanitária.",
            comprehensionQuiz: [
                {
                    q: "O que os países membros buscam para os conflitos?", options: ["A solução pacífica (和平解決を模索する)", "Aumentar a guerra", "Cancelar os tratados", "Fechar as fronteiras"], a: 0
                },
                {
                    q: "Qual a leitura de 条約?", options: ["じょうやく (jouyaku)", "ふんそう", "こうけん", "ていけつ"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "邦",
                meaning: "Nação / País / Estado soberano",
                kunyomi: "くに (kuni)",
                onyomi: "ホウ (HOU)",
                mnemonic: "Cidades e terras formando a nação soberana.",
                examples: [
                    { word: "邦人 (houjin)", wordMeaning: "Cidadão da nação no exterior / Compatriota", sentence: "Zai-gai houjin.", sentenceMeaning: "Compatriotas residentes no exterior." },
                    { word: "邦画 (houga)", wordMeaning: "Filme de cinema nacional", sentence: "Nihon no houga.", sentenceMeaning: "Filme nacional japonês." }
                ]
            },
            {
                character: "盟",
                meaning: "Aliança / Pacto / Tratado internacional",
                kunyomi: "めい (mei)",
                onyomi: "メイ (MEI)",
                mnemonic: "Luz do sol e lua sobre o vaso sagrado selando a aliança.",
                examples: [
                    { word: "同盟 (doumei)", wordMeaning: "Aliança / Coalizão", sentence: "Doumei-koku.", sentenceMeaning: "Países aliados." },
                    { word: "連盟 (renmei)", wordMeaning: "Federação / Liga internacional", sentence: "Kokusai renmei.", sentenceMeaning: "Liga internacional." }
                ]
            },
            {
                character: "領",
                meaning: "Território / Jurisdição / Liderar",
                kunyomi: "りょう (ryou)",
                onyomi: "リョウ (RYOU)",
                mnemonic: "Cabeça comandando o domínio territorial.",
                examples: [
                    { word: "領土 (ryoudo)", wordMeaning: "Território nacional", sentence: "Ryoudoku no protection.", sentenceMeaning: "Proteção do território nacional." },
                    { word: "領事 (ryouji)", wordMeaning: "Cônsuel diplomático", sentence: "Ryouji-kan.", sentenceMeaning: "Consulado diplomático." }
                ]
            },
            {
                character: "侵",
                meaning: "Invadir / Violar / Usurpar",
                kunyomi: "おか・す (okasu)",
                onyomi: "シン (SHIN)",
                mnemonic: "Pessoa (亻) avançando para violar a fronteira.",
                examples: [
                    { word: "侵略 (shinryaku)", wordMeaning: "Invasão / Agressão militar", sentence: "Shinryaku o stop.", sentenceMeaning: "Parar a invasão militar." },
                    { word: "侵害 (shingai)", wordMeaning: "Violação de direitos", sentence: "Kenri no shingai.", sentenceMeaning: "Violação de direitos." }
                ]
            },
            {
                character: "略",
                meaning: "Estratégia / Abreviar / Tomar / Esboço",
                kunyomi: "ほぼ (hobo)",
                onyomi: "リャク (RYAKU)",
                mnemonic: "Campo (田) e divisão estratégica de terras.",
                examples: [
                    { word: "戦略 (senryaku)", wordMeaning: "Estratégia diplomática/militar", sentence: "Diplomacy no senryaku.", sentenceMeaning: "Estratégia diplomática." },
                    { word: "省略 (shouryaku)", wordMeaning: "Abreviação / Omissão", sentence: "Text no shouryaku.", sentenceMeaning: "Abreviação do texto." }
                ]
            },
            {
                character: "条",
                meaning: "Artigo de tratado / Cláusula / Condição",
                kunyomi: "すじ (suji)",
                onyomi: "ジョウ (JOU)",
                mnemonic: "Ramos organizados em artigos de leis.",
                examples: [
                    { word: "条約 (jouyaku)", wordMeaning: "Tratado internacional", sentence: "Peace jouyaku.", sentenceMeaning: "Tratado de paz." },
                    { word: "条件 (jouken)", wordMeaning: "Condição / Requisito", sentence: "Jouken o meet.", sentenceMeaning: "Preencher os requisitos." }
                ]
            },
            {
                character: "駐",
                meaning: "Estacionar / Embaixada residente / Permanecer",
                kunyomi: "ちゅう (chuu)",
                onyomi: "チュウ (CHUU)",
                mnemonic: "Cavalo (馬) parado no posto de guarda.",
                examples: [
                    { word: "駐日 (chuunichi)", wordMeaning: "Residente no Japão (Embaixador)", sentence: "Chuunichi ambassador.", sentenceMeaning: "Embaixador residente no Japão." },
                    { word: "駐在 (chuuzai)", wordMeaning: "Posto diplomático residente", sentence: "Chuuzai-in.", sentenceMeaning: "Expatriado residente a trabalho." }
                ]
            },
            {
                character: "使",
                meaning: "Embaixador / Usar / Enviar / Servir",
                kunyomi: "つか・う (tsukau)",
                onyomi: "シ (SHI)",
                mnemonic: "Pessoa (亻) enviada em missão diplomática.",
                examples: [
                    { word: "大使 (taishi)", wordMeaning: "Embaixador", sentence: "Taishi-kan.", sentenceMeaning: "Embaixada." },
                    { word: "使命 (shimei)", wordMeaning: "Missão / Propósito", sentence: "Diplomatic shimei.", sentenceMeaning: "Missão diplomática." }
                ]
            },
            {
                character: "援",
                meaning: "Apoio / Assistência internacional / Socorro",
                kunyomi: "たす・ける (tasukeru)",
                onyomi: "エン (EN)",
                mnemonic: "Mão (扌) estendida oferecendo ajuda humanitária.",
                examples: [
                    { word: "支援 (shien)", wordMeaning: "Apoio / Assistência", sentence: "Humanitarian shien.", sentenceMeaning: "Assistência humanitária." },
                    { word: "応援 (ouen)", wordMeaning: "Torcida / Incentivo / Apoio", sentence: "Team o ouen.", sentenceMeaning: "Torcer pela equipe." }
                ]
            },
            {
                character: "民",
                meaning: "Povo / Cidadãos / População",
                kunyomi: "たみ (tami)",
                onyomi: "ミン (MIN)",
                mnemonic: "Povo unido sob a soberania civil.",
                examples: [
                    { word: "国民 (kokumin)", wordMeaning: "Cidadãos da nação", sentence: "Kokumin no rights.", sentenceMeaning: "Direitos dos cidadãos." },
                    { word: "難民 (nanmin)", wordMeaning: "Refugiados de guerra/crise", sentence: "Nanmin no reception.", sentenceMeaning: "Recepção de refugiados." }
                ]
            },
            {
                character: "貢",
                meaning: "Contribuir / Tributo / Oferecer",
                kunyomi: "みつ・ぐ (mitsugu)",
                onyomi: "コウ (KOU) / ク (KU)",
                mnemonic: "Trabalho (工) e moedas (貝) oferecidas como tributo.",
                examples: [
                    { word: "貢献 (kouken)", wordMeaning: "Contribuição / Serviço prestado", sentence: "Peace ni kouken.", sentenceMeaning: "Contribuir para a paz." },
                    { word: "貢物 (mitsugimono)", wordMeaning: "Tributo / Oferenda", sentence: "Mitsugimono o offer.", sentenceMeaning: "Oferecer tributos." }
                ]
            },
            {
                character: "献",
                meaning: "Dedicar / Oferecer / Sacrifício positivo",
                kunyomi: "けん (ken)",
                onyomi: "ケン (KEN) / コン (KON)",
                mnemonic: "Cão e vaso oferecidos em dedicação à causa.",
                examples: [
                    { word: "献身 (kenshin)", wordMeaning: "Dedicação total / Devoção", sentence: "Kenshin-teki na activity.", sentenceMeaning: "Atividade de total dedicação." },
                    { word: "献血 (kenketsu)", wordMeaning: "Doação de sangue", sentence: "Kenketsu ni go.", sentenceMeaning: "Ir fazer doação de sangue." }
                ]
            },
            {
                character: "紛",
                meaning: "Conflito / Disputa / Embaraço",
                kunyomi: "まぎ・れる (magireru) / まぎ・らわしい (magirawashii)",
                onyomi: "フン (FUN)",
                mnemonic: "Fios (糸) divididos gerando embaraço e disputas.",
                examples: [
                    { word: "紛争 (funsou)", wordMeaning: "Conflito / Disputa internacional", sentence: "Funsou no解決.", sentenceMeaning: "Resolução do conflito." },
                    { word: "紛失 (funshitsu)", wordMeaning: "Extravio / Perda de documento", sentence: "Passport no funshitsu.", sentenceMeaning: "Extravio do passaporte." }
                ]
            },
            {
                character: "協",
                meaning: "Cooperação multilateral / Harmonia",
                kunyomi: "きょう (kyou)",
                onyomi: "キョウ (KYOU)",
                mnemonic: "Três forças (力) unidas em cooperação internacional.",
                examples: [
                    { word: "協定 (kyoutei)", wordMeaning: "Acordo / Convenção internacional", sentence: "Trade kyoutei.", sentenceMeaning: "Acordo de comércio." },
                    { word: "協議 (kyougi)", wordMeaning: "Consultas / Negociações multilaterais", sentence: "Kyougi o okonao.", sentenceMeaning: "Realizar negociações." }
                ]
            },
            {
                character: "約",
                meaning: "Acordo / Tratado / Promessa",
                kunyomi: "やく (yaku)",
                onyomi: "ヤク (YAKU)",
                mnemonic: "Fios atados em compromisso de tratado.",
                examples: [
                    { word: "条約 (jouyaku)", wordMeaning: "Tratado", sentence: "Ratify jouyaku.", sentenceMeaning: "Ratificar o tratado." },
                    { word: "規約 (kiyaku)", wordMeaning: "Regulamento interno", sentence: "Kiyaku o mamoru.", sentenceMeaning: "Respeitar o regulamento." }
                ]
            },
            {
                character: "域",
                meaning: "Zona / Área territorial / Jurisdição",
                kunyomi: "いき (iki)",
                onyomi: "イキ (IKI)",
                mnemonic: "Solo (土) delimitando a área de jurisdição.",
                examples: [
                    { word: "地域 (chiiki)", wordMeaning: "Comunidade / Zona territorial", sentence: "Chiiki cooperation.", sentenceMeaning: "Cooperação regional." },
                    { word: "海域 (kaiiki)", wordMeaning: "Área marítima territorial", sentence: "Kaiiki no patrol.", sentenceMeaning: "Patrulhamento da área marítima." }
                ]
            },
            {
                character: "融",
                meaning: "Harmonizar / Crédito e financiamento",
                kunyomi: "と・ける (tokeru)",
                onyomi: "ユウ (YUU)",
                mnemonic: "Vapor fluindo em harmonia diplomática e financeira.",
                examples: [
                    { word: "和融 (wayuu)", wordMeaning: "Harmonia e reconciliação", sentence: "Wayuu no effort.", sentenceMeaning: "Esforço de reconciliação." },
                    { word: "金融 (kin'yuu)", wordMeaning: "Finanças internacionais", sentence: "Kin'yuu crisis.", sentenceMeaning: "Crise financeira internacional." }
                ]
            },
            {
                character: "避",
                meaning: "Evitar / Abrigo / Refúgio",
                kunyomi: "さ・ける (sakeru)",
                onyomi: "ヒ (HI)",
                mnemonic: "Passos rápidos buscando abrigo contra conflitos.",
                examples: [
                    { word: "避難 (hinan)", wordMeaning: "Evacuação / Refúgio", sentence: "Hinan camp.", sentenceMeaning: "Campo de refugiados/evacuação." },
                    { word: "回避 (kaihi)", wordMeaning: "Evitar guerra", sentence: "War no kaihi.", sentenceMeaning: "Evitar a guerra." }
                ]
            },
            {
                character: "難",
                meaning: "Dificuldade / Crise / Refugiados",
                kunyomi: "むずか・しい (muzukashii)",
                onyomi: "ナン (NAN)",
                mnemonic: "Pássaro sob intempérie enfrentando crise severa.",
                examples: [
                    { word: "国難 (kokunan)", wordMeaning: "Crise nacional", sentence: "Kokunan o overcome.", sentenceMeaning: "Superar a crise nacional." },
                    { word: "難民 (nanmin)", wordMeaning: "Refugiados", sentence: "Nanmin rescue.", sentenceMeaning: "Resgate de refugiados." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 条約 (jouyaku)?", options: ["Tratado internacional", "Invasão", "Abreviação", "Despesa"], a: 0 },
            { q: "Traduza 貢献 (kouken):", options: ["Contribuição / Serviço prestado", "Extravio", "Conflito", "Tributo"], a: 0 },
            { q: "Kunyomi de 侵す:", options: ["おか・す (okasu)", "たす・ける", "みつ・ぐ", "まぎ・れる"], a: 0 },
            { q: "Onyomi de 大使 (Embaixador):", options: ["シ (SHI)", "MIN", "JOU", "EN"], a: 0 },
            { q: "O que significa 紛争 (funsou)?", options: ["Conflito / Disputa internacional", "Aliança", "Refúgio", "Fronteira"], a: 0 },
            { q: "Qual o kanji de 難民 (nanmin - Refugiados)?", options: ["民", "邦", "盟", "使"], a: 0 },
            { q: "Traduza 支援 (shien):", options: ["Apoio / Assistência", "Invasão", "Abreviação", "Conflito"], a: 0 },
            { q: "Qual o kanji de 侵略 (shinryaku - Invasão)?", options: ["侵", "略", "駐", "紛"], a: 0 },
            { q: "Significado de 協定 (kyoutei):", options: ["Acordo / Convenção internacional", "Abreviação", "Demissão", "Invasão"], a: 0 },
            { q: "Complete: Peace ______ (Tratado de paz).", options: ["jouyaku (条約)", "shien", "funsou", "nanmin"], a: 0 }
        ]
    },
    {
        module: 14,
        title: "Módulo 14: Viagens, Transportes Avançados e Infraestrutura",
        description: "Estude 19 ideogramas de aviação, frete marítimo, baldeação, estadia prolongada, circuitos turísticos e travessias.",
        grammar: {
            title: "Expressando Trajeto em Viagem (~o keiyu shite)",
            explanation: "No N2, indica-se pontos de baldeação e conexões de voo durante itinerários de viagem.",
            example: "Tokyo o keiyu shite Paris ni ikimasu.",
            translation: "Vou a Paris fazendo escala em Tóquio."
        },
        readingText: {
            title: "国際航空と物流インフラ (Aviação Internacional e Logística)",
            japanese: "<ruby>国際線<rt>こくさいせん</rt></ruby>の<ruby>航空機<rt>こうくうき</rt></ruby>が<ruby>貨物<rt>かもつ</rt></ruby>を<ruby>輸送<rt>ゆそう</rt></ruby>し、世界を<ruby>巡回<rt>じゅんかい</rt></ruby>します。<ruby>乗客<rt>じょうきゃく</rt></ruby>は<ruby>経由<rt>けいゆ</rt></ruby>地で<ruby>滞在<rt>たいざい</rt></ruby>します。",
            romaji: "Kokusaisen no koukuuki ga kamotsu o yusou shi, sekai o junkai shimasu. Joukyaku wa keiyu-chi de taizai shimasu.",
            translation: "As aeronaves das linhas internacionais transportam cargas e circulam o mundo. Os passageiros permanecem nas conexões.",
            comprehensionQuiz: [
                {
                    q: "O que as aeronaves internacionais transportam?", options: ["Cargas (貨物)", "Casas", "Carros velhos", "Pássaros"], a: 0
                },
                {
                    q: "Qual a leitura de 輸送?", options: ["ゆそう (yusou)", "こうくうき", "たいざい", "けいゆ"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "航",
                meaning: "Navegar / Voo de avião / Rota marítima",
                kunyomi: "こう (kou)",
                onyomi: "コウ (KOU)",
                mnemonic: "Barco (舟) e asas cruzando o ar e as águas.",
                examples: [
                    { word: "航空 (koukuu)", wordMeaning: "Aviação / Navegação aérea", sentence: "Koukuu kaisha.", sentenceMeaning: "Companhia aérea." },
                    { word: "運航 (unkou)", wordMeaning: "Operação de voo/navio", sentence: "Flight no unkou.", sentenceMeaning: "Operação do voo." }
                ]
            },
            {
                character: "搬",
                meaning: "Transportar / Carregar carga / Mover",
                kunyomi: "はん (han)",
                onyomi: "ハン (HAN)",
                mnemonic: "Mão (扌) carregando mercadorias para o transporte.",
                examples: [
                    { word: "搬入 (hannyuu)", wordMeaning: "Carregamento para dentro / Entrada de carga", sentence: "Luggage no hannyuu.", sentenceMeaning: "Carregamento das bagagens." },
                    { word: "搬送 (hansou)", wordMeaning: "Transporte médico / Remoção de paciente", sentence: "Hospital ni hansou.", sentenceMeaning: "Remoção para o hospital." }
                ]
            },
            {
                character: "輸",
                meaning: "Exportar / Transportar / Enviar longe",
                kunyomi: "ゆ (yu)",
                onyomi: "ユ (YU) / シュ (SHU)",
                mnemonic: "Carro (車) enviando suprimentos além das fronteiras.",
                examples: [
                    { word: "輸出 (yushutsu)", wordMeaning: "Exportação", sentence: "Car no yushutsu.", sentenceMeaning: "Exportação de carros." },
                    { word: "輸入 (yunyuu)", wordMeaning: "Importação", sentence: "Oil no yunyuu.", sentenceMeaning: "Importação de petróleo." }
                ]
            },
            {
                character: "寄",
                meaning: "Aproximar-se / Porto de escala / Fazer parada",
                kunyomi: "よ・る (yoru) / よ・せる (yoseru)",
                onyomi: "キ (KI)",
                mnemonic: "Teto abrigando os passageiros na parada rápida.",
                examples: [
                    { word: "寄港 (kikou)", wordMeaning: "Escala em porto marítimo", sentence: "Ship no kikou.", sentenceMeaning: "Escala do navio no porto." },
                    { word: "立ち寄る (tachiyoru)", wordMeaning: "Dar uma passada / Fazer parada rápida", sentence: "Cafe ni tachiyoru.", sentenceMeaning: "Dar uma passada no café." }
                ]
            },
            {
                character: "泊",
                meaning: "Pernoitar / Hospedagem / Âncorar",
                kunyomi: "と・まる (tomaru) / と・める (tomeru)",
                onyomi: "ハク (HAKU)",
                mnemonic: "Água (氵) e noite descansando no hotel.",
                examples: [
                    { word: "宿泊 (shukuhaku)", wordMeaning: "Hospedagem / Pernoite", sentence: "Hotel ni shukuhaku.", sentenceMeaning: "Hospedar-se no hotel." },
                    { word: "泊まる (tomaru)", wordMeaning: "Pernoitar", sentence: "Ryokan ni tomaru.", sentenceMeaning: "Pernoitar na hospedaria." }
                ]
            },
            {
                character: "滞",
                meaning: "Permanecer / Estadia / Atraso na rota",
                kunyomi: "とどこお・る (todokooru)",
                onyomi: "タイ (TAI)",
                mnemonic: "Água (氵) parada sem fluir durante a estadia.",
                examples: [
                    { word: "滞在 (taizai)", wordMeaning: "Estadia / Permanência no local", sentence: "Paris ni taizai.", sentenceMeaning: "Estadia em Paris." },
                    { word: "滞納 (tainou)", wordMeaning: "Atraso no pagamento", sentence: "Yachin no tainou.", sentenceMeaning: "Atraso do aluguel." }
                ]
            },
            {
                character: "留",
                meaning: "Permanecer / Estudo no exterior / Fixar",
                kunyomi: "と・める (tomeru) / と・まる (tomaru)",
                onyomi: "リュウ (RYUU) / ル (RU)",
                mnemonic: "Campo (田) onde a pessoa permanece fixada.",
                examples: [
                    { word: "留学 (ryuugaku)", wordMeaning: "Intercâmbio / Estudo no exterior", sentence: "Japan ni ryuugaku.", sentenceMeaning: "Intercâmbio no Japão." },
                    { word: "留守 (rusu)", wordMeaning: "Ausente de casa", sentence: "Tadaima rusu.", sentenceMeaning: "Ausente no momento." }
                ]
            },
            {
                character: "券",
                meaning: "Passagem / Bilhete / Título",
                kunyomi: "けん (ken)",
                onyomi: "ケン (KEN)",
                mnemonic: "Faca (刀) destacando o bilhete de embarque.",
                examples: [
                    { word: "乗車券 (joushagen)", wordMeaning: "Bilhete de embarque no trem", sentence: "Ticket o kaimasu.", sentenceMeaning: "Comprar o bilhete de trem." },
                    { word: "航空券 (koukuuken)", wordMeaning: "Passagem aérea", sentence: "Flight ticket.", sentenceMeaning: "Passagem aérea." }
                ]
            },
            {
                character: "荷",
                meaning: "Bagagem / Carga de transporte",
                kunyomi: "に (ni)",
                onyomi: "カ (KA)",
                mnemonic: "Plantas (艹) carregadas nos ombros como bagagem.",
                examples: [
                    { word: "手荷物 (tenimotsu)", wordMeaning: "Bagagem de mão", sentence: "Tenimotsu o check.", sentenceMeaning: "Despachar a bagagem de mão." },
                    { word: "出荷 (shukka)", wordMeaning: "Expedição de mercadorias", sentence: "Product no shukka.", sentenceMeaning: "Expedição de produtos." }
                ]
            },
            {
                character: "踏",
                meaning: "Pisar / Percorrer trilha / Dar passos",
                kunyomi: "ふ・む (fumu) / ふ・まえる (fumaeru)",
                onyomi: "トウ (TOU)",
                mnemonic: "Pé (足) pisando firme no caminho da trilha.",
                examples: [
                    { word: "踏切 (fumikiri)", wordMeaning: "Cruzamento de ferrovia", sentence: "Fumikiri o cross.", sentenceMeaning: "Atravessar o cruzamento da ferrovia." },
                    { word: "踏破 (touha)", wordMeaning: "Percorrer toda a trilha a pé", sentence: "Mountain no touha.", sentenceMeaning: "Percorrer toda a trilha da montanha." }
                ]
            },
            {
                character: "径",
                meaning: "Caminho / Raio de percurso / Atalho",
                kunyomi: "こみち (komichi)",
                onyomi: "ケイ (KEI)",
                mnemonic: "Passos percorrendo o atalho estreito.",
                examples: [
                    { word: "半径 (hankei)", wordMeaning: "Raio de circulo", sentence: "Hankei 5km.", sentenceMeaning: "Raio de 5 quilômetros." },
                    { word: "小径 (komichi)", wordMeaning: "Atalho / Caminho estreito", sentence: "Forest no komichi.", sentenceMeaning: "Atalho da floresta." }
                ]
            },
            {
                character: "途",
                meaning: "Caminho / Trajeto / Em curso / Etapa",
                kunyomi: "みち (michi)",
                onyomi: "ト (TO)",
                mnemonic: "Caminhar ao longo do trajeto da viagem.",
                examples: [
                    { word: "途注 (tochuu)", wordMeaning: "No meio do caminho / Em curso", sentence: "Tochuu de stop.", sentenceMeaning: "Parar no meio do caminho." },
                    { word: "前途 (zentu)", wordMeaning: "Futuro / Perspectiva do trajeto", sentence: "Zentu bright.", sentenceMeaning: "Futuro brilhante." }
                ]
            },
            {
                character: "越",
                meaning: "Atravessar / Superar / Ultrapassar",
                kunyomi: "こ・える (koeru) / こ・す (kosu)",
                onyomi: "エツ (ETSU)",
                mnemonic: "Correr (走) e saltar para ultrapassar o obstáculo.",
                examples: [
                    { word: "国境越え (kokkyougoe)", wordMeaning: "Travessia da fronteira", sentence: "Kokkyou o koeru.", sentenceMeaning: "Atravessar a fronteira nacional." },
                    { word: "引越し (hikkoshi)", wordMeaning: "Mudança de residência", sentence: "House no hikkoshi.", sentenceMeaning: "Mudança de casa." }
                ]
            },
            {
                character: "渡",
                meaning: "Atravessar rio/mar / Entregar / Cruzar",
                kunyomi: "わた・る (wataru) / わた・す (watasu)",
                onyomi: "ト (TO)",
                mnemonic: "Água (氵) cruzada de barco para o outro lado.",
                examples: [
                    { word: "渡航 (tokou)", wordMeaning: "Viagem marítima/aérea internacional", sentence: "Overseas tokou.", sentenceMeaning: "Viagem ao exterior." },
                    { word: "渡す (watasu)", wordMeaning: "Entregar em mãos / Cruzar", sentence: "Passport o watasu.", sentenceMeaning: "Entregar o passaporte." }
                ]
            },
            {
                character: "巡",
                meaning: "Circular / Fazer circuito / Fazer ronda",
                kunyomi: "めぐ・る (meguru)",
                onyomi: "ジュン (JUN)",
                mnemonic: "Caminhar em círculo ao redor da rota.",
                examples: [
                    { word: "巡回 (junkai)", wordMeaning: "Ronda / Circuito itinerante", sentence: "Patrol no junkai.", sentenceMeaning: "Ronda de patrulhamento." },
                    { word: "巡業 (jungyou)", wordMeaning: "Turnê itinerante", sentence: "Sumo no jungyou.", sentenceMeaning: "Turnê de sumô." }
                ]
            },
            {
                character: "経",
                meaning: "Passar por / Viajar através / Gestão",
                kunyomi: "へ・る (heru) / た・つ (tatsu)",
                onyomi: "ケイ (KEI) / キョウ (KYOU)",
                mnemonic: "Fios atados representando os caminhos percorridos.",
                examples: [
                    { word: "経由 (keiyu)", wordMeaning: "Conexão / Escala / Via", sentence: "Tokyo keiyu.", sentenceMeaning: "Conexão via Tóquio." },
                    { word: "経過 (keika)", wordMeaning: "Decurso do tempo / Progresso", sentence: "Time no keika.", sentenceMeaning: "Decurso do tempo." }
                ]
            },
            {
                character: "景",
                meaning: "Paisagem / Vista / Cenário de viagem",
                kunyomi: "けい (kei)",
                onyomi: "ケイ (KEI)",
                mnemonic: "Sol iluminando a vista panorâmica.",
                examples: [
                    { word: "光景 (koukei)", wordMeaning: "Espectáculo visual / Cena", sentence: "Kandou koukei.", sentenceMeaning: "Cena emocionante." },
                    { word: "景気 (keiki)", wordMeaning: "Situação econômica / Clima de mercado", sentence: "Keiki ga ii.", sentenceMeaning: "A economia vai bem." }
                ]
            },
            {
                character: "拓",
                meaning: "Desbravar rotas / Abrir caminhos",
                kunyomi: "ひら・く (hiraku)",
                onyomi: "タク (TAKU)",
                mnemonic: "Mão abrindo espaço para novas rotas.",
                examples: [
                    { word: "開拓 (kaitaku)", wordMeaning: "Desbravamento de rotas", sentence: "Route no kaitaku.", sentenceMeaning: "Desbravamento de novas rotas." },
                    { word: "魚拓 (gyotaku)", wordMeaning: "Impressão artística de peixe", sentence: "Gyotaku o kaku.", sentenceMeaning: "Fazer impressão de peixe." }
                ]
            },
            {
                character: "覧",
                meaning: "Visitar / Inspecionar pontos turísticos",
                kunyomi: "み・る (miru)",
                onyomi: "ラン (RAN)",
                mnemonic: "Olhar as atrações com atenção.",
                examples: [
                    { word: "観光 (kankou)", wordMeaning: "Turismo", sentence: "Kankou bus.", sentenceMeaning: "Ônibus de turismo." },
                    { word: "一覧 (ichiran)", wordMeaning: "Lista geral / Visão sintética", sentence: "List no ichiran.", sentenceMeaning: "Lista sintética." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 航空 (koukuu)?", options: ["Aviação / Navegação aérea", "Exportação", "Dívida", "Desvio"], a: 0 },
            { q: "Traduza 輸出 (yushutsu):", options: ["Exportação", "Importação", "Atraso", "Passagem"], a: 0 },
            { q: "Kunyomi de 巡る:", options: ["めぐ・る (meguru)", "こ・える", "わた・る", "ふ・む"], a: 0 },
            { q: "Onyomi de 宿泊 (Hospedagem):", options: ["HAKU (ハク)", "TAI", "KOU", "TOU"], a: 0 },
            { q: "O que significa 経由 (keiyu)?", options: ["Conexão / Escala / Via", "Exportação", "Desbravamento", "Fronteira"], a: 0 },
            { q: "Qual o kanji de 踏切 (fumikiri - Cruzamento)?", options: ["踏", "越", "途", "渡"], a: 0 },
            { q: "Traduza 留学 (ryuugaku):", options: ["Intercâmbio / Estudo no exterior", "Turismo", "Exportação", "Estadia"], a: 0 },
            { q: "Qual o kanji de 手荷物 (tenimotsu - Bagagem de mão)?", options: ["荷", "券", "搬", "航"], a: 0 },
            { q: "Significado de 滞在 (taizai):", options: ["Estadia / Permanência", "Viagem aérea", "Mudança", "Passeio"], a: 0 },
            { q: "Complete: Tokyo ______ (Via Tóquio / Conexão).", options: ["keiyu (経由)", "yushutsu", "taizai", "fumikiri"], a: 0 }
        ]
    },
    {
        module: 15,
        title: "Módulo 15: Verbos de Estado, Ação e Movimento Complexo",
        description: "Estude 19 ideogramas de ações complexas, desafios, contenções, recusas, pressões, fugas e conquistas.",
        grammar: {
            title: "Expressando Ação Intensiva (~ni mezasite)",
            explanation: "No N2, descreve-se movimentos dirigidos com foco e determinação rumo ao objetivo.",
            example: "Goal ni mezasite idomimasu.",
            translation: "Desafiamos visando a meta."
        },
        readingText: {
            title: "困難への挑戦と克服 (Desafio e Superação de Dificuldades)",
            japanese: "新しい<ruby>記録<rt>きろく</rt></ruby>に<ruby>挑戦<rt>ちょうせん</rt></ruby>し、<ruby>障害<rt>しょうがい</rt></ruby>を<ruby>克服<rt>こくふく</rt></ruby>します。逆境に<ruby>屈<rt>くっ</rt></ruby>せず、勝利を<ruby>掴<rt>つか</rt></ruby>み<ruby>取<rt>と</rt></ruby>ります。",
            romaji: "Atarashii kiroku ni chousen shi, shougai o kokufuku shimasu. Gyakkyou ni kussezu, shouri o tsukamitorimasu.",
            translation: "Desafiamos novos recordes e superamos os obstáculos. Sem se render às adversidades, agarramos a vitória.",
            comprehensionQuiz: [
                {
                    q: "O que a pessoa faz perante os obstáculos?", options: ["Supera os obstáculos sem se render (障害を克服し屈しない)", "Desiste imediatamente", "Chora sem tentar", "Foge"], a: 0
                },
                {
                    q: "Qual a leitura de 挑戦?", options: ["ちょうせん (chousen)", "こくふく", "しょうがい", "きろく"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "挑",
                meaning: "Desafiar / Tentar / Provocar",
                kunyomi: "いど・む (idomu)",
                onyomi: "チョウ (CHOU)",
                mnemonic: "Mão (扌) erguida lançando o desafio.",
                examples: [
                    { word: "挑戦 (chousen)", wordMeaning: "Desafio / Tentativa", sentence: "New record ni chousen.", sentenceMeaning: "Desafiar um novo recorde." },
                    { word: "挑発 (chouhatsu)", wordMeaning: "Provocação", sentence: "Enemy no chouhatsu.", sentenceMeaning: "Provocação do inimigo." }
                ]
            },
            {
                character: "操",
                meaning: "Operar / Manipular / Ginástica / Conduta",
                kunyomi: "あやつ・る (ayatsuru)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Mãos (扌) manejando com destreza os controles.",
                examples: [
                    { word: "操作 (sousa)", wordMeaning: "Operação / Manuseio de máquina", sentence: "Machine no sousa.", sentenceMeaning: "Operação da máquina." },
                    { word: "操縦 (soujuu)", wordMeaning: "Pilotagem de veículo/aeronave", sentence: "Airplane no soujuu.", sentenceMeaning: "Pilotagem da aeronave." }
                ]
            },
            {
                character: "抑",
                meaning: "Reprimir / Conter / Empurrar para baixo",
                kunyomi: "おさ・える (osaeru)",
                onyomi: "ヨク (YOKU)",
                mnemonic: "Mão (扌) pressionando para conter a ação.",
                examples: [
                    { word: "抑制 (yokusei)", wordMeaning: "Contenção / Repressão", sentence: "Emotion no yokusei.", sentenceMeaning: "Contenção de emoções." },
                    { word: "抑圧 (yokuatsu)", wordMeaning: "Opressão / Supressão", sentence: "Freedom no yokuatsu.", sentenceMeaning: "Supressão da liberdade." }
                ]
            },
            {
                character: "奪",
                meaning: "Roubar / Extorquir / Tirar à força / Tomar",
                kunyomi: "うば・う (ubau)",
                onyomi: "DATSU (DATSU)",
                mnemonic: "Mão agarrando e tirando o objeto precioso.",
                examples: [
                    { word: "略奪 (ryakudatsu)", wordMeaning: "Saque / Pilhagem", sentence: "City no ryakudatsu.", sentenceMeaning: "Pilhagem da cidade." },
                    { word: "奪う (ubau)", wordMeaning: "Tirar à força / Roubar", sentence: "Heart o ubau.", sentenceMeaning: "Roubar o coração." }
                ]
            },
            {
                character: "拒",
                meaning: "Recusar / Rejeitar / Barrar",
                kunyomi: "こば・む (kobamu)",
                onyomi: "キョ (KYO)",
                mnemonic: "Mão (扌) formando uma barreira para recusar.",
                examples: [
                    { word: "拒否 (kyohi)", wordMeaning: "Recusa / Veto / Rejeição", sentence: "Offer no kyohi.", sentenceMeaning: "Recusa da oferta." },
                    { word: "拒絶 (kyozetsu)", wordMeaning: "Rejeição categórica", sentence: "Request no kyozetsu.", sentenceMeaning: "Rejeição categórica do pedido." }
                ]
            },
            {
                character: "促",
                meaning: "Incentivar / Pressionar / Apressar",
                kunyomi: "うなが・す (unagasu)",
                onyomi: "ソク (SOKU)",
                mnemonic: "Pessoa (亻) apressando os passos para incentivar.",
                examples: [
                    { word: "促進 (sokushin)", wordMeaning: "Promoção / Incentivo ao avanço", sentence: "Sales no sokushin.", sentenceMeaning: "Promoção das vendas." },
                    { word: "催促 (saisoku)", wordMeaning: "Cobrança / Pressionar por resposta", sentence: "Payment no saisoku.", sentenceMeaning: "Cobrança de pagamento." }
                ]
            },
            {
                character: "侵",
                meaning: "Invadir / Violar / Infiltrar",
                kunyomi: "おか・す (okasu)",
                onyomi: "シン (SHIN)",
                mnemonic: "Pessoa (亻) avançando para invadir o terreno.",
                examples: [
                    { word: "侵入 (shinnyuu)", wordMeaning: "Invasão / Infiltração", sentence: "House ni shinnyuu.", sentenceMeaning: "Invasão de domicílio." },
                    { word: "侵食 (shinshoku)", wordMeaning: "Erosão / Corrosão gradual", sentence: "Soil no shinshoku.", sentenceMeaning: "Erosão do solo." }
                ]
            },
            {
                character: "阻",
                meaning: "Bloquear / Impedir / Obstruir",
                kunyomi: "はば・む (habamu)",
                onyomi: "ソ (SO)",
                mnemonic: "Muro em penhasco bloqueando a passagem.",
                examples: [
                    { word: "阻止 (soshi)", wordMeaning: "Bloqueio / Impedimento de ação", sentence: "Plan no soshi.", sentenceMeaning: "Impedimento do plano." },
                    { word: "阻害 (sogai)", wordMeaning: "Obstrução / Prejuízo ao avanço", sentence: "Growth no sogai.", sentenceMeaning: "Obstrução ao crescimento." }
                ]
            },
            {
                character: "逃",
                meaning: "Fugir / Escapar / Evar-se",
                kunyomi: "に・げる (nigeru) / に・がす (nigasu) / のが・れる (nogareru)",
                onyomi: "トウ (TOU)",
                mnemonic: "Caminhar rápido para fugir do perigo.",
                examples: [
                    { word: "逃走 (tousou)", wordMeaning: "Fuga / Evasão", sentence: "Prisoner no tousou.", sentenceMeaning: "Fuga do presidiário." },
                    { word: "逃げる (nigeru)", wordMeaning: "Fugir", sentence: "Danger kara nigeru.", sentenceMeaning: "Fugir do perigo." }
                ]
            },
            {
                character: "追",
                meaning: "Perseguir / Acompanhar / Adicionar",
                kunyomi: "お・う (ou)",
                onyomi: "ツイ (TSUI)",
                mnemonic: "Caminhar acelerado para perseguir o alvo.",
                examples: [
                    { word: "追加 (tsuika)", wordMeaning: "Adição / Suplemento", sentence: "Order no tsuika.", sentenceMeaning: "Adição ao pedido." },
                    { word: "追跡 (tsuiseki)", wordMeaning: "Rastreamento / Perseguição", sentence: "Package no tsuiseki.", sentenceMeaning: "Rastreamento do pacote." }
                ]
            },
            {
                character: "捕",
                meaning: "Capturar / Prender / Agarrar",
                kunyomi: "と・らえる (toraeru) / つか・まえる (tsukamaeru)",
                onyomi: "ホ (HO)",
                mnemonic: "Mão (扌) agarrando firme para capturar.",
                examples: [
                    { word: "捕獲 (hokaku)", wordMeaning: "Captura de animal/alvo", sentence: "Animal no hokaku.", sentenceMeaning: "Captura do animal." },
                    { word: "逮捕 (taiho)", wordMeaning: "Prisão policial", sentence: "Police ga taiho.", sentenceMeaning: "A polícia efetuou a prisão." }
                ]
            },
            {
                character: "救",
                meaning: "Salvar / Resgatar / Socorrer",
                kunyomi: "すく・う (sukuu)",
                onyomi: "キュウ (KYUU)",
                mnemonic: "Mão estendendo o socorro para salvar.",
                examples: [
                    { word: "救助 (kyuujo)", wordMeaning: "Resgate / Socorro emergencial", sentence: "Life no kyuujo.", sentenceMeaning: "Resgate de vidas." },
                    { word: "救急車 (kyuukyuusha)", wordMeaning: "Ambulância", sentence: "Kyuukyuusha o call.", sentenceMeaning: "Chamar a ambulância." }
                ]
            },
            {
                character: "扶",
                meaning: "Apoiar / Sustentar / Dar suporte",
                kunyomi: "ふ (fu)",
                onyomi: "フ (FU)",
                mnemonic: "Mão (扌) apoiando a pessoa para não cair.",
                examples: [
                    { word: "扶養 (fuyou)", wordMeaning: "Sustento da família / Dependente", sentence: "Family no fuyou.", sentenceMeaning: "Sustento da família." },
                    { word: "扶助 (fujo)", wordMeaning: "Ajuda / Suporte de subsistência", sentence: "Public fujo.", sentenceMeaning: "Auxílio público de subsistência." }
                ]
            },
            {
                character: "護",
                meaning: "Proteger / Defender / Custódia",
                kunyomi: "まも・る (mamoru)",
                onyomi: "ゴ (GO)",
                mnemonic: "Palavras em defesa e proteção.",
                examples: [
                    { word: "防護 (bougo)", wordMeaning: "Proteção contra danos", sentence: "Bougo suit.", sentenceMeaning: "Traje de proteção." },
                    { word: "救護 (kyuugo)", wordMeaning: "Primeiros socorros / Assistência", sentence: "Kyuugo station.", sentenceMeaning: "Posto de primeiros socorros." }
                ]
            },
            {
                character: "振",
                meaning: "Sacudir / Brandir / Recusar / Atribuir",
                kunyomi: "ふ・る (furu) / ふ・りかえる (furikaeru)",
                onyomi: "シン (SHIN)",
                mnemonic: "Mão (扌) sacudindo o objeto.",
                examples: [
                    { word: "振込 (furikomi)", wordMeaning: "Transferência bancária", sentence: "Bank furikomi.", sentenceMeaning: "Transferência bancária." },
                    { word: "振動 (shindou)", wordMeaning: "Vibração / Oscilação", sentence: "Machine no shindou.", sentenceMeaning: "Vibração da máquina." }
                ]
            },
            {
                character: "挙",
                meaning: "Erguer / Promover / Realizar ação",
                kunyomi: "あ・げる (ageru)",
                onyomi: "キョ (KYO)",
                mnemonic: "Mãos erguidas promovendo o ato.",
                examples: [
                    { word: "挙げる (ageru)", wordMeaning: "Erguer / Dar exemplos", sentence: "Example o ageru.", sentenceMeaning: "Dar exemplos." },
                    { word: "選挙 (senkyo)", wordMeaning: "Eleição", sentence: "Vote ni iku.", sentenceMeaning: "Ir votar na eleição." }
                ]
            },
            {
                character: "掲",
                meaning: "Hastear / Exibir em público / Anunciar",
                kunyomi: "かか・げる (kakageru)",
                onyomi: "ケイ (KEI)",
                mnemonic: "Mão (扌) hasteando o aviso em público.",
                examples: [
                    { word: "掲示板 (keijiban)", wordMeaning: "Mural de avisos / Fórum", sentence: "Keijiban o check.", sentenceMeaning: "Verificar o mural de avisos." },
                    { word: "掲げる (kakageru)", wordMeaning: "Hastear (bandeira) / Proclamar", sentence: "Flag o kakageru.", sentenceMeaning: "Hastear a bandeira." }
                ]
            },
            {
                character: "握",
                meaning: "Apertar a mão / Segurar firme / Dominar",
                kunyomi: "にぎ・る (nigiru)",
                onyomi: "アク (AKU)",
                mnemonic: "Mão (扌) fechada segurando firme.",
                examples: [
                    { word: "握手 (akushu)", wordMeaning: "Aperto de mão", sentence: "Akushu o suru.", sentenceMeaning: "Dar um aperto de mão." },
                    { word: "握る (nigiru)", wordMeaning: "Segurar firme / Moldar (onigiri)", sentence: "Onigiri o nigiru.", sentenceMeaning: "Moldar um onigiri." }
                ]
            },
            {
                character: "勝",
                meaning: "Vencer / Superar / Conquistar",
                kunyomi: "か・つ (katsu)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Força (力) dedicada para superar e conquistar a vitória.",
                examples: [
                    { word: "勝利 (shouri)", wordMeaning: "Vitória / Conquista", sentence: "Shouri o get.", sentenceMeaning: "Conquistar a vitória." },
                    { word: "決勝 (kesshou)", wordMeaning: "Partida final / Decisão", sentence: "Kesshou game.", sentenceMeaning: "Partida final." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 挑戦 (chousen)?", options: ["Desafio / Tentativa", "Recusa", "Invasão", "Socorro"], a: 0 },
            { q: "Traduza 握手 (akushu):", options: ["Aperto de mão", "Invasão", "Recusa", "Fuga"], a: 0 },
            { q: "Kunyomi de 拒む:", options: ["こば・む (kobamu)", "うば・う", "いど・む", "うなが・す"], a: 0 },
            { q: "Onyomi de 促進 (Promoção):", options: ["ソク (SOKU)", "SOU", "YOKU", "HO"], a: 0 },
            { q: "O que significa 救急車 (kyuukyuusha)?", options: ["Ambulância", "Mural de avisos", "Sustento", "Transferência"], a: 0 },
            { q: "Qual o kanji de 掲示板 (keijiban - Mural)?", options: ["掲", "振", "握", "扶"], a: 0 },
            { q: "Traduza 振込 (furikomi):", options: ["Transferência bancária", "Aperto de mão", "Vibração", "Fuga"], a: 0 },
            { q: "Qual o kanji de 拒否 (kyohi - Recusa)?", options: ["拒", "挑", "抑", "奪"], a: 0 },
            { q: "Significado de 追跡 (tsuiseki):", options: ["Rastreamento / Perseguição", "Opressão", "Socorro", "Saque"], a: 0 },
            { q: "Complete: Machine no ______ (Operação da máquina).", options: ["sousa (操作)", "chousen", "akushu", "furikomi"], a: 0 }
        ]
    },
    {
        module: 16,
        title: "Módulo 16: Emoções Avançadas, Reações Mentais e Psicologia",
        description: "Estude 19 ideogramas de surpresa, pavor, tristeza, compaixão, raiva, nostalgia e apego emocional.",
        grammar: {
            title: "Expressando Reação Emocional Intensa (~wo emedatsu)",
            explanation: "No N2, expressa-se a intensificação de estados emocionais diante de surpresas ou temores.",
            example: "Odoroki ni taishite kanjou o osaeru.",
            translation: "Contemos as emoções diante da surpresa."
        },
        readingText: {
            title: "人間心理と感情の揺れ (Psicologia Humana e Oscilação de Sentimentos)",
            japanese: "予期せぬ出来事に<ruby>驚喜<rt>きょうき</rt></ruby>し、時に<ruby>悲痛<rt>ひつう</rt></ruby>な<ruby>叫<rt>さけ</rt></ruby>びをあげます。<ruby>過去<rt>かこ</rt></ruby>を<ruby>懐<rt>なつ</rt></ruby>かしみ、<ruby>愛着<rt>あいちゃく</rt></ruby>を覚えます。",
            romaji: "Yokisenu dekigoto ni kyouki shi, toki ni hitsuu na sakebi o agetasu. Kako o natsukashimi, aichaku o oboemasu.",
            translation: "Delectamo-nos com eventos inesperados e às vezes soltamos gritos de dor profunda. Sentimos nostalgia do passado e desenvolvemos apego emocional.",
            comprehensionQuiz: [
                {
                    q: "O que a pessoa sente em relação ao passado?", options: ["Nostalgia e apego emocional (過去を懐かしみ愛着を覚える)", "Raiva intensa", "Esquecimento", "Medo"], a: 0
                },
                {
                    q: "Qual a leitura de 悲痛?", options: ["ひつう (hitsuu)", "きょうき", "あいちゃく", "さけび"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "驚",
                meaning: "Surpreender-se / Espantar-se / Susto",
                kunyomi: "おどろ・く (odoroku) / おどろ・かす (odorokasu)",
                onyomi: "キョウ (KYOU)",
                mnemonic: "Cavalo (馬) assustado saltando de surpresa.",
                examples: [
                    { word: "驚き (odoroki)", wordMeaning: "Surpresa / Espanto", sentence: "Odoroki no news.", sentenceMeaning: "Notícia surpreendente." },
                    { word: "驚愕 (kyougaku)", wordMeaning: "Estupefação / Grande susto", sentence: "Kyougaku no fact.", sentenceMeaning: "Fato estupefaciante." }
                ]
            },
            {
                character: "怖",
                meaning: "Ter medo / Pavor / Aterrorizante",
                kunyomi: "こわ・い (kowai)",
                onyomi: "フ (FU)",
                mnemonic: "Coração (忄) trêmulo diante do pavor.",
                examples: [
                    { word: "恐怖 (kyoufu)", wordMeaning: "Medo / Terror / Pavor", sentence: "Kyoufu o feel.", sentenceMeaning: "Sentir pavor." },
                    { word: "怖い (kowai)", wordMeaning: "Assustador / Com medo", sentence: "Kowai story.", sentenceMeaning: "História assustadora." }
                ]
            },
            {
                character: "悲",
                meaning: "Tristeza / Lamento / Piedade",
                kunyomi: "かな・しい (kanashii) / かな・しむ (kanashimu)",
                onyomi: "ヒ (HI)",
                mnemonic: "Coração (心) partido em tristeza profunda.",
                examples: [
                    { word: "悲劇 (higeki)", wordMeaning: "Tragédia", sentence: "Higeki no story.", sentenceMeaning: "História trágica." },
                    { word: "悲痛 (hitsuu)", wordMeaning: "Dor profunda / Tristeza dolorosa", sentence: "Hitsuu na cry.", sentenceMeaning: "Grito de profunda dor." }
                ]
            },
            {
                character: "怒",
                meaning: "Raiva / Ira / Enfurecer-se",
                kunyomi: "いかり (ikari) / おこ・る (okoru)",
                onyomi: "ド (DO) / ヌ (NU)",
                mnemonic: "Coração (心) dominado pela raiva.",
                examples: [
                    { word: "怒気 (doki)", wordMeaning: "Voz de raiva / Tom irado", sentence: "Doki o osetu.", sentenceMeaning: "Tom de voz irado." },
                    { word: "激怒 (gekido)", wordMeaning: "Fúria intensa / Ira violenta", sentence: "Boss ga gekido.", sentenceMeaning: "O chefe ficou furioso." }
                ]
            },
            {
                character: "叫",
                meaning: "Gritar / Clamar / Dar brado",
                kunyomi: "さけ・ぶ (sakebu)",
                onyomi: "キョウ (KYOU)",
                mnemonic: "Boca (口) aberta dando um grito bem alto.",
                examples: [
                    { word: "絶叫 (zekkyou)", wordMeaning: "Grito histérico / Clamor alto", sentence: "Zekkyou machine.", sentenceMeaning: "Montanha-russa de gritos." },
                    { word: "叫び (sakebi)", wordMeaning: "Grito / Clamor", sentence: "Sakebi o escuchar.", sentenceMeaning: "Ouvir o grito." }
                ]
            },
            {
                character: "嘆",
                meaning: "Lamentar / Suspirar / Deplorar",
                kunyomi: "なげ・く (nageku) / なげ・かわしい (nagekawashii)",
                onyomi: "タン (TAN)",
                mnemonic: "Boca (口) soltando um suspiro de lamento.",
                examples: [
                    { word: "嘆息 (tansoku)", wordMeaning: "Suspiro de lamento", sentence: "Tansoku o leak.", sentenceMeaning: "Soltar um suspiro de lamento." },
                    { word: "嘆く (nageku)", wordMeaning: "Lamentar profundamente", sentence: "Fate o nageku.", sentenceMeaning: "Lamentar o próprio destino." }
                ]
            },
            {
                character: "涙",
                meaning: "Lágrima / Choro",
                kunyomi: "なみだ (namida)",
                onyomi: "ルイ (RUI)",
                mnemonic: "Água (氵) fluindo dos olhos em lágrimas.",
                examples: [
                    { word: "涙 (namida)", wordMeaning: "Lágrima", sentence: "Namida o wipe.", sentenceMeaning: "Enxugar as lágrimas." },
                    { word: "感涙 (kanrui)", wordMeaning: "Lágrimas de emoção", sentence: "Kanrui o流す.", sentenceMeaning: "Chorar de emoção." }
                ]
            },
            {
                character: "悩",
                meaning: "Preocupar-se / Aflição / Tormento mental",
                kunyomi: "なや・む (nayamu) / なや・ます (nayamasu)",
                onyomi: "ノウ (NOU)",
                mnemonic: "Coração (忄) e cérebro atormentados por preocupações.",
                examples: [
                    { word: "悩み (nayami)", wordMeaning: "Preocupação / Dilema pessoal", sentence: "Nayami no consultation.", sentenceMeaning: "Consulta sobre um dilema." },
                    { word: "苦悩 (kunou)", wordMeaning: "Tormento / Agonia mental", sentence: "Kunou o overcome.", sentenceMeaning: "Superar a agonia mental." }
                ]
            },
            {
                character: "悔",
                meaning: "Arrepender-se / Lamento por erro / Frustração",
                kunyomi: "くや・しい (kuyashii) / く・やむ (kuyamu)",
                onyomi: "カイ (KAI)",
                mnemonic: "Coração (忄) arrependido por atos do passado.",
                examples: [
                    { word: "悔しい (kuyashii)", wordMeaning: "Frustrado / Arrependido", sentence: "Kuyashii tear.", sentenceMeaning: "Lágrimas de frustração." },
                    { word: "後悔 (koukai)", wordMeaning: "Arrependimento posterior", sentence: "Koukai suru.", sentenceMeaning: "Arrepender-se depois." }
                ]
            },
            {
                character: "慰",
                meaning: "Consolar / Confortar / Trazer alívio",
                kunyomi: "なぐさ・める (nagusameru) / なぐさ・む (nagusamu)",
                onyomi: "イ (I)",
                mnemonic: "Coração (心) confortado com palavras gentis.",
                examples: [
                    { word: "慰め (nagusame)", wordMeaning: "Consolo / Conforto", sentence: "Nagusame no word.", sentenceMeaning: "Palavra de consolo." },
                    { word: "慰安 (ian)", wordMeaning: "Recreação / Consolo / Alívio", sentence: "Ian trip.", sentenceMeaning: "Viagem de recreação e descanso." }
                ]
            },
            {
                character: "怨",
                meaning: "Rancor / Amargura profunda / Ressentimento",
                kunyomi: "うら・む (uramu)",
                onyomi: "エン (EN) / オン (ON)",
                mnemonic: "Coração (心) alimentando rancor contra o inimigo.",
                examples: [
                    { word: "怨恨 (enkon)", wordMeaning: "Rancor profundo / Inimizade", sentence: "Enkon no motive.", sentenceMeaning: "Motivo de rancor profundo." },
                    { word: "怨念 (onnen)", wordMeaning: "Sentimento de vingança / Rancor", sentence: "Onnen ga tsuyoi.", sentenceMeaning: "Forte sentimento de vingança." }
                ]
            },
            {
                character: "嫌",
                meaning: "Detestar / Odiar / Aversão / Desagradável",
                kunyomi: "きら・う (kirau) / イヤ (iya)",
                onyomi: "ケン (KEN) / ゲン (GEN)",
                mnemonic: "Mulher (女) e mente com aversão.",
                examples: [
                    { word: "嫌悪 (ken'o)", wordMeaning: "Aversão / Repulsa", sentence: "Ken'o-kan.", sentenceMeaning: "Sensação de aversão." },
                    { word: "嫌い (kirai)", wordMeaning: "Odiar / Não gostar", sentence: "Natto ga kirai.", sentenceMeaning: "Odiar natto." }
                ]
            },
            {
                character: "好",
                meaning: "Gostar / Preferir / Afeiçoar-se",
                kunyomi: "す・き (suki) / この・む (konomu)",
                onyomi: "コウ (KOU)",
                mnemonic: "Mulher (女) e filho (子) que se amam e gostam.",
                examples: [
                    { word: "好意 (koui)", wordMeaning: "Boa vontade / Afeto", sentence: "Koui o daku.", sentenceMeaning: "Nutrir afeto." },
                    { word: "好物 (koubutsu)", wordMeaning: "Comida favorita", sentence: "Sushi wa koubutsu.", sentenceMeaning: "Sushi é minha comida favorita." }
                ]
            },
            {
                character: "愛",
                meaning: "Amor / Afeição / Carinho profundo",
                kunyomi: "あい (ai) / いと・しい (itoshii)",
                onyomi: "アイ (AI)",
                mnemonic: "Coração (心) oferecendo amor incondicional.",
                examples: [
                    { word: "愛情 (aijou)", wordMeaning: "Amor / Afeto profundo", sentence: "Family no aijou.", sentenceMeaning: "Amor da família." },
                    { word: "愛着 (aichaku)", wordMeaning: "Apego emocional", sentence: "Item ni aichaku.", sentenceMeaning: "Apego emocional ao objeto." }
                ]
            },
            {
                character: "欲",
                meaning: "Desejo / Cobiça / Ter vontade de",
                kunyomi: "ほ・しい (hoshii) / ほっ・する (hossuru)",
                onyomi: "ヨク (YOKU)",
                mnemonic: "Boca aberta desejando possuir o objeto.",
                examples: [
                    { word: "欲望 (yokubou)", wordMeaning: "Desejo / Ambição", sentence: "Human no yokubou.", sentenceMeaning: "Desejos humanos." },
                    { word: "食欲 (shokuyoku)", wordMeaning: "Apetite", sentence: "Shokuyoku ga arimasu.", sentenceMeaning: "Estar com apetite." }
                ]
            },
            {
                character: "貪",
                meaning: "Cobiçar / Ganância / Devorar com fúria",
                kunyomi: "むさぼ・る (musaboru)",
                onyomi: "トン (TON)",
                mnemonic: "Moedas (貝) e mente gananciosa cobiçando riquezas.",
                examples: [
                    { word: "貪欲 (donyoku)", wordMeaning: "Ganancioso / Voraz por conhecimento", sentence: "Donyoku ni study.", sentenceMeaning: "Estudar com apetite insaciável." },
                    { word: "貪る (musaboru)", wordMeaning: "Devorar / Cobiçar insaciavelmente", sentence: "Book o musaboru.", sentenceMeaning: "Devorar livros." }
                ]
            },
            {
                character: "惜",
                meaning: "Lamentar perda / Valorizar tempo / Avarento",
                kunyomi: "お・しい (oshii) / お・しみ (oshimi)",
                onyomi: "セキ (SEKI)",
                mnemonic: "Coração (忄) lamentando o tempo precioso perdido.",
                examples: [
                    { word: "惜しい (oshii)", wordMeaning: "Quase! / Uma pena / Precioso", sentence: "Oshii match.", sentenceMeaning: "Partida disputada (quase lá!)." },
                    { word: "名残惜しい (nagorioshii)", wordMeaning: "Relutante em se despedir", sentence: "Farewell ga nagorioshii.", sentenceMeaning: "Relutante em se despedir." }
                ]
            },
            {
                character: "懐",
                meaning: "Nostalgia / Sentir saudades / Aconchego / Bolso",
                kunyomi: "なつ・かしい (natsukashii) / ふところ (futokoro)",
                onyomi: "カイ (KAI)",
                mnemonic: "Coração (忄) aconchegado na nostalgia dos velhos tempos.",
                examples: [
                    { word: "懐かしい (natsukashii)", wordMeaning: "Nostálgico / Saudoso", sentence: "Natsukashii song.", sentenceMeaning: "Música nostálgica." },
                    { word: "懐古 (kaiko)", wordMeaning: "Recordação do passado", sentence: "Kaiko趣味.", sentenceMeaning: "Hobby de colecionar velharias." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 恐怖 (kyoufu)?", options: ["Medo / Terror / Pavor", "Surpresa", "Nostalgia", "Amor"], a: 0 },
            { q: "Traduza 懐かしい (natsukashii):", options: ["Nostálgico / Saudoso", "Assustador", "Frustrado", "Avariado"], a: 0 },
            { q: "Kunyomi de 悲しむ:", options: ["かな・しむ (kanashimu)", "なや・む", "おどろ・く", "さけ・ぶ"], a: 0 },
            { q: "Onyomi de 後悔 (Arrependimento):", options: ["KAI (カイ)", "NOU", "TAN", "HI"], a: 0 },
            { q: "O que significa 食欲 (shokuyoku)?", options: ["Apetite", "Ganância", "Grito", "Consolo"], a: 0 },
            { q: "Qual o kanji de 絶叫 (zekkyou - Grito)?", options: ["叫", "怒", "嘆", "驚"], a: 0 },
            { q: "Traduza 慰め (nagusame):", options: ["Consolo / Conforto", "Aversão", "Lágrima", "Rancor"], a: 0 },
            { q: "Qual o kanji de 愛着 (aichaku - Apego)?", options: ["愛", "好", "欲", "惜"], a: 0 },
            { q: "Significado de 惜しい (oshii):", options: ["Quase! / Uma pena", "Assustador", "Trágico", "Ganancioso"], a: 0 },
            { q: "Complete: Natsukashii ______ (Música nostálgica).", options: ["song (曲)", "sakebi", "nayami", "namida"], a: 0 }
        ]
    },
    {
        module: 17,
        title: "Módulo 17: Educação, Ciência da Informação e Aprendizado",
        description: "Estude 19 ideogramas de pedagogia, bibliografia, registros civis, treinamentos acadêmicos, lições e avaliações.",
        grammar: {
            title: "Expressando Dedicação aos Estudos (~ni hagemu)",
            explanation: "No N2, utiliza-se para descrever o empenho diligente nos estudos e na formação profissional.",
            example: "Benkyou ni hagemimasu.",
            translation: "Empenhamo-nos com dedicação aos estudos."
        },
        readingText: {
            title: "学問の探求と教育制度 (Busca pelo Saber e Sistema Educacional)",
            japanese: "<ruby>学校<rt>がっこう</rt></ruby>で<ruby>教授<rt>きょうじゅ</rt></ruby>が<ruby>講義<rt>こうぎ</rt></ruby>を<ruby>担当<rt>たんとう</rt></ruby>し、<ruby>受講<rt>じゅこう</rt></ruby>生に<ruby>指導<rt>しどう</rt></ruby>します。<ruby>辞典<rt>じてん</rt></ruby>で言葉を調べ、<ruby>学業<rt>がくぎょう</rt></ruby>に<ruby>励<rt>はげ</rt></ruby>みます。",
            romaji: "Gakkou de kyouju ga kougi o tantou shi, jukousei ni shidou shimasu. Jiten de kotoba o shirabe, gakugyou ni hagemimasu.",
            translation: "Na escola o professor leciona a palestra e orienta os alunos. Consulta-se palavras no dicionário, dedicando-se aos estudos.",
            comprehensionQuiz: [
                {
                    q: "O que os alunos fazem com o dicionário (辞典)?", options: ["Consultam palavras e se dedicam aos estudos (言葉を調べ学業に励む)", "Riscam as páginas", "Jogam fora", "Vendem"], a: 0
                },
                {
                    q: "Qual a leitura de 教授?", options: ["きょうじゅ (kyouju)", "こうぎ", "じてん", "がくぎょう"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "典",
                meaning: "Dicionário / Clássico / Código legal / Norma",
                kunyomi: "てん (ten)",
                onyomi: "テン (TEN)",
                mnemonic: "Livro de códigos sagrados sobre a estante.",
                examples: [
                    { word: "辞典 (jiten)", wordMeaning: "Dicionário", sentence: "Jiten o yomu.", sentenceMeaning: "Consultar o dicionário." },
                    { word: "古典 (koten)", wordMeaning: "Obra clássica", sentence: "Koten literature.", sentenceMeaning: "Literatura clássica." }
                ]
            },
            {
                character: "冊",
                meaning: "Volume de livro / Caderno / Encadernação",
                kunyomi: "さつ (satsu)",
                onyomi: "サツ (SATSU) / サク (SAKU)",
                mnemonic: "Tirass de bambu atadas em volume impresso.",
                examples: [
                    { word: "冊子 (sasshi)", wordMeaning: "Brochura / Folheto informativo", sentence: "Sasshi o distribute.", sentenceMeaning: "Distribuição de brochuras." },
                    { word: "分冊 (bunsatsu)", wordMeaning: "Edição em volumes separados", sentence: "Bunsatsu book.", sentenceMeaning: "Livro em volumes separados." }
                ]
            },
            {
                character: "籍",
                meaning: "Matrícula / Registro de cidadania / Cadastro",
                kunyomi: "せき (seki)",
                onyomi: "セキ (SEKI)",
                mnemonic: "Bambu (竹) gravado com o registro oficial.",
                examples: [
                    { word: "戸籍 (koseki)", wordMeaning: "Registro de família civil", sentence: "Koseki touhon.", sentenceMeaning: "Certidão de registro de família." },
                    { word: "国籍 (kokuseki)", wordMeaning: "Nacionalidade civil", sentence: "Japanese kokuseki.", sentenceMeaning: "Nacionalidade japonesa." }
                ]
            },
            {
                character: "授",
                meaning: "Lecionar / Outorgar / Conceder aula",
                kunyomi: "さず・ける (sazukeru) / さず・かる (sazukaru)",
                onyomi: "ジュ (JU)",
                mnemonic: "Mão (扌) entregando o conhecimento ao aluno.",
                examples: [
                    { word: "授業 (jugyou)", wordMeaning: "Aula escolar / Lição", sentence: "Jugyou ni attend.", sentenceMeaning: "Assistir à aula." },
                    { word: "教授 (kyouju)", wordMeaning: "Professor universitário / Cátedra", sentence: "University no kyouju.", sentenceMeaning: "Professor universitário." }
                ]
            },
            {
                character: "訓",
                meaning: "Instrução / Leitura Kunyomi / Ensinamento",
                kunyomi: "くん (kun)",
                onyomi: "クン (KUN)",
                mnemonic: "Palavras (言) instruindo o fluxo correto dos estudos.",
                examples: [
                    { word: "訓練 (kunren)", wordMeaning: "Treinamento / Adestramento", sentence: "Bousai kunren.", sentenceMeaning: "Treinamento de prevenção de desastres." },
                    { word: "訓読み (kun'yomi)", wordMeaning: "Leitura nativa japonesa do kanji", sentence: "Kanji no kun'yomi.", sentenceMeaning: "Leitura Kunyomi do kanji." }
                ]
            },
            {
                character: "導",
                meaning: "Guiar / Orientar / Conduzir",
                kunyomi: "みちび・く (michibiku)",
                onyomi: "ドウ (DOU)",
                mnemonic: "Caminho e mãos guiando os estudantes.",
                examples: [
                    { word: "指導 (shidou)", wordMeaning: "Orientação / Mentoria acadêmica", sentence: "Teacher no shidou.", sentenceMeaning: "Orientação do professor." },
                    { word: "導入 (dounyuu)", wordMeaning: "Introdução / Implementação", sentence: "System no dounyuu.", sentenceMeaning: "Introdução do sistema." }
                ]
            },
            {
                character: "練",
                meaning: "Treinar / Praticar / Lapidar",
                kunyomi: "ね・る (neru)",
                onyomi: "レン (REN)",
                mnemonic: "Fios (糸) polidos e treinados na prática.",
                examples: [
                    { word: "練習 (renshuu)", wordMeaning: "Prática / Exercício", sentence: "Kanji no renshuu.", sentenceMeaning: "Prática de kanji." },
                    { word: "洗練 (senren)", wordMeaning: "Refinamento / Elegância treinada", sentence: "Senren shita design.", sentenceMeaning: "Design refinado." }
                ]
            },
            {
                character: "習",
                meaning: "Aprender / Praticar / Hábito",
                kunyomi: "なら・う (narau)",
                onyomi: "シュウ (SHUU)",
                mnemonic: "Asas de passarinho praticando os primeiros voos.",
                examples: [
                    { word: "学習 (gakushuu)", wordMeaning: "Aprendizado / Estudo", sentence: "Self gakushuu.", sentenceMeaning: "Autoaprendizado." },
                    { word: "習慣 (shuukan)", wordMeaning: "Hábito / Costurme", sentence: "Good shuukan.", sentenceMeaning: "Bom hábito." }
                ]
            },
            {
                character: "勤",
                meaning: "Dedicar-se / Trabalhar duro / Cumprir dever",
                kunyomi: "つと・める (tsutomeru)",
                onyomi: "キン (KIN) / ゴン (GON)",
                mnemonic: "Força (力) dedicada ao trabalho e estudos.",
                examples: [
                    { word: "通勤 (tsuukin)", wordMeaning: "Deslocamento ao trabalho", sentence: "Train de tsuukin.", sentenceMeaning: "Ir ao trabalho de trem." },
                    { word: "勤勉 (kinben)", wordMeaning: "Diligência / Esmero nos estudos", sentence: "Kinben na student.", sentenceMeaning: "Estudante diligente." }
                ]
            },
            {
                character: "精",
                meaning: "Diligência / Espírito / Essência pura",
                kunyomi: "せい (sei)",
                onyomi: "セイ (SEI) / ショウ (SHOU)",
                mnemonic: "Grãos de arroz (米) polidos em pureza.",
                examples: [
                    { word: "精進 (shoujin)", wordMeaning: "Empenho / Dedicação devota", sentence: "Study ni shoujin.", sentenceMeaning: "Empenhar-se nos estudos." },
                    { word: "精神 (seishin)", wordMeaning: "Espírito / Mente", sentence: "Seishin strength.", sentenceMeaning: "Força mental." }
                ]
            },
            {
                character: "励",
                meaning: "Incentivar / Esforçar-se / Encorajar",
                kunyomi: "はげ・む (hagemu) / はげ・ます (hagemasu)",
                onyomi: "レイ (REI)",
                mnemonic: "Força (力) aplicada para encorajar a mente.",
                examples: [
                    { word: "励ます (hagemasu)", wordMeaning: "Encorajar / Incentivar", sentence: "Friend o hagemasu.", sentenceMeaning: "Encorajar o amigo." },
                    { word: "奨励 (shourei)", wordMeaning: "Incentivo oficial / Estímulo", sentence: "Research no shourei.", sentenceMeaning: "Estímulo à pesquisa." }
                ]
            },
            {
                character: "勉",
                meaning: "Esforçar-se nos estudos / Diligência",
                kunyomi: "つと・める (tsutomeru)",
                onyomi: "ベン (BEN)",
                mnemonic: "Força (力) aplicada para vencer os estudos.",
                examples: [
                    { word: "勉強 (benkyou)", wordMeaning: "Estudo / Aprendizado", sentence: "N2 no benkyou.", sentenceMeaning: "Estudo do N2." },
                    { word: "勤勉 (kinben)", wordMeaning: "Diligência", sentence: "Kinben na personality.", sentenceMeaning: "Personalidade diligente." }
                ]
            },
            {
                character: "業",
                meaning: "Estudos / Obras / Trabalho / Negócio",
                kunyomi: "わざ (waza)",
                onyomi: "ギョウ (GYOU) / ゴウ (GOU)",
                mnemonic: "Trabalhos e obras estruturados.",
                examples: [
                    { word: "学業 (gakugyou)", wordMeaning: "Estudos acadêmicos", sentence: "Gakugyou ni hagemu.", sentenceMeaning: "Dedicador-se aos estudos acadêmicos." },
                    { word: "卒業 (sutsugyou)", wordMeaning: "Formatura", sentence: "School no sutsugyou.", sentenceMeaning: "Formatura escolar." }
                ]
            },
            {
                character: "宿",
                meaning: "Hospedagem / Lição de casa / Alojamento",
                kunyomi: "やど (yado) / やど・る (yadoru)",
                onyomi: "シュク (SHUKU)",
                mnemonic: "Teto abrigando a pernoite dos viajantes.",
                examples: [
                    { word: "宿題 (shukudai)", wordMeaning: "Lição de casa", sentence: "Shukudai o do.", sentenceMeaning: "Fazer a lição de casa." },
                    { word: "下宿 (geshuku)", wordMeaning: "Pensão / Alojamento de estudante", sentence: "Geshuku-sei.", sentenceMeaning: "Estudante morador de pensão." }
                ]
            },
            {
                character: "題",
                meaning: "Tema / Título / Questão de exame",
                kunyomi: "だい (dai)",
                onyomi: "ダイ (DAI)",
                mnemonic: "Cabeça focada no tema do enunciado.",
                examples: [
                    { word: "問題 (mondai)", wordMeaning: "Problema / Questão de prova", sentence: "Mondai o solve.", sentenceMeaning: "Resolver a questão da prova." },
                    { word: "題名 (daimei)", wordMeaning: "Título do livro/obra", sentence: "Book no daimei.", sentenceMeaning: "Título do livro." }
                ]
            },
            {
                character: "質",
                meaning: "Qualidade / Pergunta / Substância",
                kunyomi: "しつ (shitsu)",
                onyomi: "シツ (SHITSU) / シチ (SHICHI)",
                mnemonic: "Moedas de garantia atestando a qualidade.",
                examples: [
                    { word: "質問 (shitsumon)", wordMeaning: "Pergunta / Dúvida", sentence: "Shitsumon ga arimasu.", sentenceMeaning: "Tenho uma pergunta." },
                    { word: "品質 (hinshitsu)", wordMeaning: "Qualidade do produto", sentence: "High hinshitsu.", sentenceMeaning: "Alta qualidade." }
                ]
            },
            {
                character: "問",
                meaning: "Perguntar / Questão / Interrogar",
                kunyomi: "と・う (tou) / と・い (toi)",
                onyomi: "モン (MON)",
                mnemonic: "Boca (口) no portão (門) fazendo uma pergunta.",
                examples: [
                    { word: "問答 (mondou)", wordMeaning: "Perguntas e respostas / Diálogo", sentence: "Zen no mondou.", sentenceMeaning: "Diálogo Zen." },
                    { word: "問い (toi)", wordMeaning: "Questão / Indagação", sentence: "Toi ni kotaeru.", sentenceMeaning: "Responder à indagação." }
                ]
            },
            {
                character: "答",
                meaning: "Responder / Resposta / Solução",
                kunyomi: "こた・える (kotaeru) / こた・え (kotae)",
                onyomi: "トウ (TOU)",
                mnemonic: "Bambu (竹) e palavras dando a resposta correta.",
                examples: [
                    { word: "解答 (kaitou)", wordMeaning: "Gabarito / Resposta da prova", sentence: "Kaitou用紙.", sentenceMeaning: "Folha de gabarito." },
                    { word: "回答 (kaitou)", wordMeaning: "Resposta a questionário", sentence: "Survey no kaitou.", sentenceMeaning: "Resposta ao questionário." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 授業 (jugyou)?", options: ["Aula escolar / Lição", "Formatura", "Brochura", "Gabarito"], a: 0 },
            { q: "Traduza 質問 (shitsumon):", options: ["Pergunta / Dúvida", "Resposta", "Brochura", "Hábito"], a: 0 },
            { q: "Kunyomi de 導く:", options: ["みちび・く (michibiku)", "はげ・む", "なら・う", "つと・める"], a: 0 },
            { q: "Onyomi de 辞典 (Dicionário):", options: ["TEN (テン)", "SEKI", "SATSU", "JU"], a: 0 },
            { q: "O que significa 宿題 (shukudai)?", options: ["Lição de casa", "Alojamento", "Formatura", "Treinamento"], a: 0 },
            { q: "Qual o kanji de 指導 (shidou - Orientação)?", options: ["導", "訓", "授", "練"], a: 0 },
            { q: "Traduza 解答 (kaitou):", options: ["Gabarito / Resposta da prova", "Pergunta", "Orientação", "Lição"], a: 0 },
            { q: "Qual o kanji de 国籍 (kokuseki - Nacionalidade)?", options: ["籍", "冊", "典", "業"], a: 0 },
            { q: "Significado de 勤勉 (kinben):", options: ["Diligência / Esmero nos estudos", "Formatura", "Dúvida", "Hábito"], a: 0 },
            { q: "Complete: Kanji no ______ (Prática de kanji).", options: ["renshuu (練習)", "shukudai", "jiten", "jugyou"], a: 0 }
        ]
    },
    {
        module: 18,
        title: "Módulo 18: Indústria, Materiais e Recursos Florestais",
        description: "Estude 19 ideogramas de metalurgia, mineração, combustíveis, rochas, tecelagem, manufatura e recursos naturais.",
        grammar: {
            title: "Expressando Fabricação de Materiais (~ni yotte seizou)",
            explanation: "No N2, utiliza-se a voz passiva ou instrumental para descrever produção industrial e matérias-primas.",
            example: "Tetsu ni yotte seizou shimasu.",
            translation: "Fabricamos por meio de ferro."
        },
        readingText: {
            title: "日本の製造業と資源活用 (Manufatura Japonesa e Uso de Recursos)",
            japanese: "<ruby>鉱山<rt>こうざん</rt></ruby>から<ruby>鉄<rt>てつ</rt></ruby>や<ruby>銅<rt>どう</rt></ruby>を<ruby>採掘<rt>さいくつ</rt></ruby>し、工場で<ruby>加工<rt>かこう</rt></ruby>します。<ruby>木材<rt>もくざい</rt></ruby>や<ruby>繊維<rt>せんい</rt></ruby>などの<ruby>原料<rt>げんりょう</rt></ruby>から高品質な<ruby>製品<rt>せいひん</rt></ruby>を<ruby>生産<rt>せいさん</rt></ruby>します。",
            romaji: "Kouzan kara tetsu ya dou o saikutsu shi, koujou de kakou shimasu. Mokuzai ya seni nado no genryou kara kouhinsitsu na seihin o seisan shimasu.",
            translation: "Extrai-se ferro e cobre de minas, processando-os na fábrica. Produzem-se produtos de alta qualidade a partir de matérias-primas como madeira e fibras.",
            comprehensionQuiz: [
                {
                    q: "O que é extraído das minas (鉱山)?", options: ["Ferro e cobre (鉄や銅)", "Algodão e seda", "Areia e lama", "Água pura"], a: 0
                },
                {
                    q: "Qual a leitura de 製品?", options: ["せいひん (seihin)", "こうざん", "もくざい", "せいさん"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "鉄",
                meaning: "Ferro / Aço / Liga metálica",
                kunyomi: "てつ (tetsu)",
                onyomi: "テツ (TETSU)",
                mnemonic: "Metal (金) forte usado em estradas de ferro.",
                examples: [
                    { word: "鉄道 (tetsudou)", wordMeaning: "Ferrovia", sentence: "Tetsudou network.", sentenceMeaning: "Rede ferroviária." },
                    { word: "鉄鋼 (tekkou)", wordMeaning: "Siderurgia / Indústria de aço", sentence: "Tekkou factory.", sentenceMeaning: "Fábrica siderúrgica." }
                ]
            },
            {
                character: "鉱",
                meaning: "Minério / Mina de extração mineral",
                kunyomi: "こう (kou)",
                onyomi: "コウ (KOU)",
                mnemonic: "Metal (金) extraído das profundezas da mina.",
                examples: [
                    { word: "鉱物 (koubutsu)", wordMeaning: "Mineral", sentence: "Koubutsu collection.", sentenceMeaning: "Coleção de minerais." },
                    { word: "炭鉱 (tankou)", wordMeaning: "Mina de carvão", sentence: "Tankou worker.", sentenceMeaning: "Trabalhador de mina de carvão." }
                ]
            },
            {
                character: "銅",
                meaning: "Cobre",
                kunyomi: "どう (dou)",
                onyomi: "ドウ (DOU)",
                mnemonic: "Metal (金) avermelhado idêntico na liga.",
                examples: [
                    { word: "銅像 (douzou)", wordMeaning: "Estátua de bronze/cobre", sentence: "Hero no douzou.", sentenceMeaning: "Estátua de bronze do herói." },
                    { word: "銅貨 (douka)", wordMeaning: "Moeda de cobre", sentence: "10-yen douka.", sentenceMeaning: "Moeda de cobre de 10 ienes." }
                ]
            },
            {
                character: "銀",
                meaning: "Prata",
                kunyomi: "ぎん (gin)",
                onyomi: "ギン (GIN)",
                mnemonic: "Metal (金) brilhante de valor prateado.",
                examples: [
                    { word: "銀行 (ginkou)", wordMeaning: "Banco financeiro", sentence: "Ginkou de deposit.", sentenceMeaning: "Depósito no banco." },
                    { word: "銀メダル (gin-medaru)", wordMeaning: "Medalha de prata", sentence: "Gin-medaru o get.", sentenceMeaning: "Conquistar a medalha de prata." }
                ]
            },
            {
                character: "炭",
                meaning: "Carvão / Carbono",
                kunyomi: "すみ (sumi)",
                onyomi: "タン (TAN)",
                mnemonic: "Madeira queimada pelo fogo (火) virando carvão.",
                examples: [
                    { word: "石炭 (sekitan)", wordMeaning: "Carvão mineral", sentence: "Sekitan energy.", sentenceMeaning: "Energia de carvão mineral." },
                    { word: "木炭 (mokutan)", wordMeaning: "Carvão vegetal / Desenho a carvão", sentence: "Mokutan gaki.", sentenceMeaning: "Desenho a carvão vegetal." }
                ]
            },
            {
                character: "油",
                meaning: "Petróleo / Óleo / Azeitona",
                kunyomi: "あぶら (abura)",
                onyomi: "ユ (YU)",
                mnemonic: "Água (氵) viscosa de óleo e combustível.",
                examples: [
                    { word: "石油 (sekiyu)", wordMeaning: "Petróleo bruto", sentence: "Sekiyu price.", sentenceMeaning: "Preço do petróleo." },
                    { word: "油断 (yudan)", wordMeaning: "Negligência / Baixar a guarda", sentence: "Yudan wa kinmotsu.", sentenceMeaning: "Baixar a guarda é proibido!" }
                ]
            },
            {
                character: "脂",
                meaning: "Gordura / Sebo / Banha animal",
                kunyomi: "あぶら (abura)",
                onyomi: "シ (SHI)",
                mnemonic: "Carne do corpo (月) com camada de gordura.",
                examples: [
                    { word: "油脂 (yushi)", wordMeaning: "Óleos e gorduras industriais", sentence: "Yushi processing.", sentenceMeaning: "Processamento de óleos e gorduras." },
                    { word: "脂質 (shishitsu)", wordMeaning: "Lipídios / Gordura corporal", sentence: "Shishitsu check.", sentenceMeaning: "Controle de lipídios." }
                ]
            },
            {
                character: "砂",
                meaning: "Areia",
                kunyomi: "すな (suna)",
                onyomi: "サ (SA) / シャ (SHA)",
                mnemonic: "Pedra (石) reduzida a pequenos grãos de areia.",
                examples: [
                    { word: "砂浜 (sunahama)", wordMeaning: "Praia de areia", sentence: "Sunahama o walk.", sentenceMeaning: "Caminhar pela praia de areia." },
                    { word: "砂漠 (sabaku)", wordMeaning: "Deserto de areia", sentence: "Sahara sabaku.", sentenceMeaning: "Deserto do Saara." }
                ]
            },
            {
                character: "泥",
                meaning: "Lama / Barro / Barrento",
                kunyomi: "どろ (doro)",
                onyomi: "デイ (DEI)",
                mnemonic: "Água (氵) misturada com solo virando lama.",
                examples: [
                    { word: "泥棒 (dorobou)", wordMeaning: "Ladrão / Assaltante", sentence: "Dorobou o arrest.", sentenceMeaning: "Prender o ladrão." },
                    { word: "泥沼 (doronuma)", wordMeaning: "Pântano barrento / Situação sem saída", sentence: "Doronuma no state.", sentenceMeaning: "Situação sem saída." }
                ]
            },
            {
                character: "岩",
                meaning: "Rocha / Penhasco de pedra",
                kunyomi: "いわ (iwa)",
                onyomi: "ガン (GAN)",
                mnemonic: "Montanha (山) formada de pedra (石) rígida.",
                examples: [
                    { word: "岩石 (ganseki)", wordMeaning: "Rocha / Bloco de pedra", sentence: "Ganseki no analysis.", sentenceMeaning: "Análise de rochas." },
                    { word: "溶岩 (yougan)", wordMeaning: "Lava vulcânica", sentence: "Yougan ga flow.", sentenceMeaning: "A lava vulcânica flui." }
                ]
            },
            {
                character: "材",
                meaning: "Material / Madeira de construção / Talento",
                kunyomi: "ざい (zai)",
                onyomi: "ザイ (ZAI)",
                mnemonic: "Madeira (木) cortada para uso como material.",
                examples: [
                    { word: "木材 (mokuzai)", wordMeaning: "Madeira de construção", sentence: "Mokuzai house.", sentenceMeaning: "Casa de madeira." },
                    { word: "人材 (jinzai)", wordMeaning: "Recursos humanos / Talentos", sentence: "Jinzai agency.", sentenceMeaning: "Agência de recursos humanos." }
                ]
            },
            {
                character: "板",
                meaning: "Tábua / Placa metálica / Prancha",
                kunyomi: "いた (ita)",
                onyomi: "ハン (HAN) / バン (BAN)",
                mnemonic: "Madeira (木) aplainada em tábua reta.",
                examples: [
                    { word: "看板 (kanban)", wordMeaning: "Placa comercial / Letreiro", sentence: "Store no kanban.", sentenceMeaning: "Placa da loja." },
                    { word: "黒板 (kokuban)", wordMeaning: "Lousa negra / Quadro", sentence: "Kokuban ni kaku.", sentenceMeaning: "Escrever no quadro negro." }
                ]
            },
            {
                character: "綿",
                meaning: "Algodão / Pluma vegetal",
                kunyomi: "わた (wata)",
                onyomi: "メン (MEN)",
                mnemonic: "Fios (糸) macios de algodão.",
                examples: [
                    { word: "木綿 (momen)", wordMeaning: "Tecido de algodão", sentence: "Momen no shirt.", sentenceMeaning: "Camisa de algodão." },
                    { word: "綿密 (menmitsu)", wordMeaning: "Minucioso / Detalhado com precisão", sentence: "Menmitsu na plan.", sentenceMeaning: "Plano minucioso." }
                ]
            },
            {
                character: "絹",
                meaning: "Seda pura",
                kunyomi: "きぬ (kinu)",
                onyomi: "ケン (KEN)",
                mnemonic: "Fios (糸) finos e nobres de seda.",
                examples: [
                    { word: "絹糸 (kinuito)", wordMeaning: "Fio de seda", sentence: "Kinuito no kimono.", sentenceMeaning: "Kimono de fio de seda." },
                    { word: "人絹 (jinken)", wordMeaning: "Seda artificial / Raio", sentence: "Jinken fabric.", sentenceMeaning: "Tecido de seda artificial." }
                ]
            },
            {
                character: "織",
                meaning: "Tecer / Tecido / Organizar trama",
                kunyomi: "お・る (oru) / おり (ori)",
                onyomi: "シキ (SHIKI) / ショク (SHOKU)",
                mnemonic: "Fios (糸) entrelaçados no tear.",
                examples: [
                    { word: "組織 (soshiki)", wordMeaning: "Organização / Estrutura corporativa", sentence: "Company no soshiki.", sentenceMeaning: "Estrutura da empresa." },
                    { word: "織物 (orimono)", wordMeaning: "Tecido artesanal / Têxtil", sentence: "Traditional orimono.", sentenceMeaning: "Tecido artesanal tradicional." }
                ]
            },
            {
                character: "造",
                meaning: "Fabricar / Construir / Criar estrutura",
                kunyomi: "つく・る (tsukuru)",
                onyomi: "ゾウ (ZOU)",
                mnemonic: "Passos e ferramentas construindo a estrutura.",
                examples: [
                    { word: "製造 (seizou)", wordMeaning: "Fabricação industrial / Manufatura", sentence: "Car no seizou.", sentenceMeaning: "Fabricação de carros." },
                    { word: "木造 (mokuzou)", wordMeaning: "Construído em madeira", sentence: "Mokuzou tatemono.", sentenceMeaning: "Construção de madeira." }
                ]
            },
            {
                character: "製",
                meaning: "Manufaturar / Produto acabado / Feito em",
                kunyomi: "せい (sei)",
                onyomi: "セイ (SEI)",
                mnemonic: "Roupas (衣) e recortes de produção acabada.",
                examples: [
                    { word: "製品 (seihin)", wordMeaning: "Produto manufaturado", sentence: "New seihin.", sentenceMeaning: "Novo produto." },
                    { word: "日本製 (nihonsei)", wordMeaning: "Fabricado no Japão (Made in Japan)", sentence: "Nihonsei no watch.", sentenceMeaning: "Relógio fabricado no Japão." }
                ]
            },
            {
                character: "産",
                meaning: "Produzir / Dar à luz / Produto regional",
                kunyomi: "う・む (umu) / う・まれる (umareru)",
                onyomi: "サン (SAN)",
                mnemonic: "Nascimento de vida ou produção de frutos.",
                examples: [
                    { word: "生産 (seisan)", wordMeaning: "Produção industrial/agrícola", sentence: "Food no seisan.", sentenceMeaning: "Produção de alimentos." },
                    { word: "土産 (miyage)", wordMeaning: "Lembrancinha regional / Souvenir", sentence: "O-miyage o buy.", sentenceMeaning: "Comprar lembrancinhas." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 石油 (sekiyu)?", options: ["Petróleo bruto", "Ferro", "Carvão", "Algodão"], a: 0 },
            { q: "Traduza 日本製 (nihonsei):", options: ["Fabricado no Japão", "Ferrovia", "Ladrão", "Lousa"], a: 0 },
            { q: "Kunyomi de 織る:", options: ["お・る (oru)", "つく・る", "あぶら", "すな"], a: 0 },
            { q: "Onyomi de 鉄道 (Ferrovia):", options: ["TETSU (テツ)", "DOU", "GIN", "ZAI"], a: 0 },
            { q: "O que significa 組織 (soshiki)?", options: ["Organização / Estrutura corporativa", "Ladrão", "Fábrica", "Minério"], a: 0 },
            { q: "Qual o kanji de 銀行 (ginkou - Banco)?", options: ["銀", "銅", "鉄", "鉱"], a: 0 },
            { q: "Traduza 木材 (mokuzai):", options: ["Madeira de construção", "Ferro", "Areia", "Seda"], a: 0 },
            { q: "Qual o kanji de 製造 (seizou - Fabricação)?", options: ["造", "製", "産", "材"], a: 0 },
            { q: "Significado de 泥棒 (dorobou):", options: ["Ladrão / Assaltante", "Carvão", "Minério", "Banco"], a: 0 },
            { q: "Complete: Car no ______ (Fabricação de carros).", options: ["seizou (製造)", "ginkou", "dorobou", "sekiyu"], a: 0 }
        ]
    },
    {
        module: 19,
        title: "Módulo 19: Comércio Avançado, Consumo e Serviços",
        description: "Estude 19 ideogramas de vendas, compras, liquidação contábil, impostos, lucros, despesas e orçamento.",
        grammar: {
            title: "Expressando Transações Financeiras (~ni motozuite shiharai)",
            explanation: "No N2, utiliza-se a estrutura para pagamentos e emissões fiscais em conformidade com faturas.",
            example: "Keiyaku ni motozuite shiharai shimasu.",
            translation: "Efetuamos o pagamento com base no contrato."
        },
        readingText: {
            title: "企業会計と消費市場 (Contabilidade Corporativa e Mercado de Consumo)",
            japanese: "<ruby>企業<rt>きぎょう</rt></ruby>は<ruby>商品<rt>しょうひん</rt></ruby>を<ruby>販売<rt>はんばい</rt></ruby>し、<ruby>利益<rt>りえき</rt></ruby>を<ruby>追及<rt>ついきゅう</rt></ruby>します。<ruby>経費<rt>けいひ</rt></ruby>や<ruby>税金<rt>ぜいきん</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>して<ruby>決算<rt>けっさん</rt></ruby>を行います。",
            romaji: "Kigyou wa shouhin o hanbai shi, rieki o tsuikyuu shimasu. Keihi ya zeikin o keisan shite kessan o okonaimasu.",
            translation: "As empresas vendem mercadorias e buscam o lucro. Calculam-se despesas e impostos, realizando o fechamento contábil.",
            comprehensionQuiz: [
                {
                    q: "O que as empresas calculam no fechamento contábil (決算)?", options: ["Despesas e impostos (経費や税金)", "Apenas desenhos", "Carros de corrida", "Previsão do tempo"], a: 0
                },
                {
                    q: "Qual a leitura de 販売?", options: ["はんばい (hanbai)", "りえき", "けいさん", "けっさん"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "販",
                meaning: "Vender / Comercializar / Distribuição",
                kunyomi: "はん (han)",
                onyomi: "ハン (HAN)",
                mnemonic: "Moedas (貝) trocadas pela venda de produtos.",
                examples: [
                    { word: "販売 (hanbai)", wordMeaning: "Venda / Comercialização", sentence: "Online hanbai.", sentenceMeaning: "Venda online." },
                    { word: "市販 (shihan)", wordMeaning: "Comercialização no mercado comum", sentence: "Shihan medicine.", sentenceMeaning: "Remédio vendido no comércio." }
                ]
            },
            {
                character: "買",
                meaning: "Comprar / Adquirir",
                kunyomi: "か・う (kau)",
                onyomi: "バイ (BAI)",
                mnemonic: "Moedas (貝) usadas para comprar artigos.",
                examples: [
                    { word: "売買 (baibai)", wordMeaning: "Compra e venda / Negociação", sentence: "Stock no baibai.", sentenceMeaning: "Compra e venda de ações." },
                    { word: "買収 (baishuu)", wordMeaning: "Aquisição / Compra de empresa", sentence: "Company no baishuu.", sentenceMeaning: "Aquisição da empresa." }
                ]
            },
            {
                character: "購",
                meaning: "Adquirir / Comprar em grande escala",
                kunyomi: "こう (kou)",
                onyomi: "コウ (KOU)",
                mnemonic: "Moedas (貝) estruturadas para compra em volume.",
                examples: [
                    { word: "購入 (kounyuu)", wordMeaning: "Aquisição / Compra de bem", sentence: "Car no kounyuu.", sentenceMeaning: "Aquisição de um carro." },
                    { word: "定期購読 (teikikoudoku)", wordMeaning: "Assinatura periódica", sentence: "Magazine no teikikoudoku.", sentenceMeaning: "Assinatura periódica de revista." }
                ]
            },
            {
                character: "賃",
                meaning: "Aluguel / Tarifa / Salário por serviço",
                kunyomi: "ちん (chin)",
                onyomi: "チン (CHIN)",
                mnemonic: "Moedas (貝) pagas pelo aluguel ou trabalho prestado.",
                examples: [
                    { word: "家賃 (yachin)", wordMeaning: "Aluguel da casa", sentence: "Yachin o harau.", sentenceMeaning: "Pagar o aluguel." },
                    { word: "賃金 (chingin)", wordMeaning: "Salário / Remuneração por hora", sentence: "Chingin ageru.", sentenceMeaning: "Aumentar o salário." }
                ]
            },
            {
                character: "銭",
                meaning: "Moedas / Dinheiro de troco / Fracção",
                kunyomi: "ぜに (zeni)",
                onyomi: "セン (SEN)",
                mnemonic: "Metal (金) de moedas de pequeno valor.",
                examples: [
                    { word: "小銭 (kozeni)", wordMeaning: "Moedas de troco / Dinheiro miúdo", sentence: "Kozeni o count.", sentenceMeaning: "Contar as moedas de troco." },
                    { word: "金銭 (kinsen)", wordMeaning: "Dinheiro / Recursos monetários", sentence: "Kinsen trouble.", sentenceMeaning: "Problema de dinheiro." }
                ]
            },
            {
                character: "納",
                meaning: "Pagar impostos / Entregar / Armazenar",
                kunyomi: "おさ・める (osameru) / おさ・まる (osamaru)",
                onyomi: "ノウ (NOU) / ナッ (NATSU)",
                mnemonic: "Fios (糸) recolhidos para entrega e tributação.",
                examples: [
                    { word: "納税 (nousei)", wordMeaning: "Pagamento de impostos", sentence: "Nousei duty.", sentenceMeaning: "Dever de pagar impostos." },
                    { word: "納期 (nouki)", wordMeaning: "Prazo de entrega", sentence: "Nouki o mamoru.", sentenceMeaning: "Respeitar o prazo de entrega." }
                ]
            },
            {
                character: "税",
                meaning: "Imposto / Taxa pública / Tributo",
                kunyomi: "ぜい (zei)",
                onyomi: "ゼイ (ZEI)",
                mnemonic: "Grãos de arroz (禾) entregues como imposto.",
                examples: [
                    { word: "消費税 (shouhizei)", wordMeaning: "Imposto sobre consumo (IVA)", sentence: "Shouhizei 10%.", sentenceMeaning: "Imposto de consumo a 10%." },
                    { word: "減税 (genzei)", wordMeaning: "Redução de impostos", sentence: "Policy no genzei.", sentenceMeaning: "Redução de impostos da política." }
                ]
            },
            {
                character: "費",
                meaning: "Despesa / Custo / Gastar recursos",
                kunyomi: "ついや・す (tsuiyasu)",
                onyomi: "ヒ (HI)",
                mnemonic: "Moedas (貝) gastas no custeio de despesas.",
                examples: [
                    { word: "学費 (gakuhi)", wordMeaning: "Anuidade / Custos de estudo", sentence: "Gakuhi o harau.", sentenceMeaning: "Pagar a anuidade de estudo." },
                    { word: "旅費 (ryohi)", wordMeaning: "Despesas de viagem", sentence: "Ryohi no budget.", sentenceMeaning: "Orçamento de despesas de viagem." }
                ]
            },
            {
                character: "充",
                meaning: "Preencher / Abastecer / Dedicar",
                kunyomi: "あ・てる (ateru)",
                onyomi: "ジュー (JUU)",
                mnemonic: "Pessoa preenchendo a vaga com fartura.",
                examples: [
                    { word: "充実 (juujitsu)", wordMeaning: "Plenitude / Vida plena", sentence: "Juujitsu shita life.", sentenceMeaning: "Vida plena e realizada." },
                    { word: "充填 (juuten)", wordMeaning: "Abastecimento / Preenchimento", sentence: "Gas no juuten.", sentenceMeaning: "Abastecimento de gás." }
                ]
            },
            {
                character: "剰",
                meaning: "Excedente / Sobra / Excesso",
                kunyomi: "じょう (jou)",
                onyomi: "ジョウ (JOU)",
                mnemonic: "Faca (刂) cortando a sobra excedente.",
                examples: [
                    { word: "過剰 (kajou)", wordMeaning: "Excesso / Sobra exagerada", sentence: "Kajou na packaging.", sentenceMeaning: "Embalagem em excesso." },
                    { word: "余剰 (yojou)", wordMeaning: "Superávit / Excedente", sentence: "Yojou fund.", sentenceMeaning: "Fundo de excedente." }
                ]
            },
            {
                character: "裕",
                meaning: "Abundância / Fartura financeira / Holga",
                kunyomi: "ゆ (yu)",
                onyomi: "ユ (YU)",
                mnemonic: "Roupas (衣) e bens com fartura e folga.",
                examples: [
                    { word: "裕福 (yuufuku)", wordMeaning: "Rico / Abastado", sentence: "Yuufuku na family.", sentenceMeaning: "Família abastada." },
                    { word: "余裕 (yoyuu)", wordMeaning: "Folga financeira/tempo", sentence: "Yoyuu ga arimasu.", sentenceMeaning: "Ter folga de tempo/dinheiro." }
                ]
            },
            {
                character: "乏",
                meaning: "Escassez / Pobreza de recursos / Falta",
                kunyomi: "とぼ・しい (toboshii)",
                onyomi: "ボウ (BOU)",
                mnemonic: "Desenho de falta e escassez.",
                examples: [
                    { word: "貧乏 (binbou)", wordMeaning: "Pobreza", sentence: "Binbou kara escape.", sentenceMeaning: "Escapar da pobreza." },
                    { word: "欠乏 (ketsubou)", wordMeaning: "Carência / Falta severa", sentence: "Water no ketsubou.", sentenceMeaning: "Falta de água." }
                ]
            },
            {
                character: "損",
                meaning: "Perda / Prejuízo / Danificar",
                kunyomi: "そこ・なう (sokonau) / そこ・ねる (sokoneru)",
                onyomi: "ソン (SON)",
                mnemonic: "Mão (扌) e moedas sofrendo prejuízo.",
                examples: [
                    { word: "損害 (songai)", wordMeaning: "Prejuízo / Dano financeiro", sentence: "Songai insurance.", sentenceMeaning: "Seguro contra prejuízos." },
                    { word: "赤字損 (akajison)", wordMeaning: "Perda de déficit", sentence: "Akaji no loss.", sentenceMeaning: "Perda de déficit." }
                ]
            },
            {
                character: "益",
                meaning: "Lucro / Benefício / Ganho",
                kunyomi: "えき (eki)",
                onyomi: "エキ (EKI) / ヤク (YAKU)",
                mnemonic: "Água transbordando do vaso trazendo benefícios.",
                examples: [
                    { word: "利益 (rieki)", wordMeaning: "Lucro financeiro", sentence: "Rieki o dasu.", sentenceMeaning: "Gerar lucro." },
                    { word: "益虫 (ekichuu)", wordMeaning: "Inseto benéfico", sentence: "Ekichuu no role.", sentenceMeaning: "Papel do inseto benéfico." }
                ]
            },
            {
                character: "償",
                meaning: "Indenizar / Recompensar / Ressarcir",
                kunyomi: "つぐな・う (tsugunau)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Pessoa (亻) pagando indenização por danos.",
                examples: [
                    { word: "弁償 (benshou)", wordMeaning: "Ressarcimento / Indenização", sentence: "Damage no benshou.", sentenceMeaning: "Ressarcimento de danos." },
                    { word: "無償 (mushou)", wordMeaning: "Gratuito / Sem custo", sentence: "Mushou offer.", sentenceMeaning: "Oferta gratuita." }
                ]
            },
            {
                character: "帳",
                meaning: "Caderno de contas / Livro contábil / Cortina",
                kunyomi: "ちょう (chou)",
                onyomi: "チョウ (CHOU)",
                mnemonic: "Tecido (巾) cobrindo os registros contábeis.",
                examples: [
                    { word: "手帳 (techou)", wordMeaning: "Caderneta de anotações / Agenda", sentence: "Techou ni kaku.", sentenceMeaning: "Escrever na agenda." },
                    { word: "通帳 (tsuuchou)", wordMeaning: "Caderneta bancária de conta", sentence: "Bank no tsuuchou.", sentenceMeaning: "Caderneta bancária." }
                ]
            },
            {
                character: "簿",
                meaning: "Livro de registros contábeis / Livro razão",
                kunyomi: "ぼ (bo)",
                onyomi: "ボ (BO)",
                mnemonic: "Bambu (竹) gravado com registros contábeis.",
                examples: [
                    { word: "簿記 (boki)", wordMeaning: "Contabilidade / Escrituração", sentence: "Boki 2-kyuu.", sentenceMeaning: "Nível 2 de contabilidade." },
                    { word: "名簿 (meibo)", wordMeaning: "Lista de nomes / Ficha de membros", sentence: "Member no meibo.", sentenceMeaning: "Lista de membros." }
                ]
            },
            {
                character: "算",
                meaning: "Calcular / Contabilidade / Orçamento",
                kunyomi: "さん (san)",
                onyomi: "サン (SAN)",
                mnemonic: "Bambu (竹) e ábaco realizando o cálculo.",
                examples: [
                    { word: "予算 (yosan)", wordMeaning: "Orçamento financeiro", sentence: "Yosan o tateru.", sentenceMeaning: "Montar o orçamento." },
                    { word: "計算 (keisan)", wordMeaning: "Cálculo", sentence: "Total no keisan.", sentenceMeaning: "Cálculo do total." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 家賃 (yachin)?", options: ["Aluguel da casa", "Imposto", "Lucro", "Prejuízo"], a: 0 },
            { q: "Traduza 利益 (rieki):", options: ["Lucro financeiro", "Imposto", "Perda", "Atraso"], a: 0 },
            { q: "Kunyomi de 償う:", options: ["つぐな・う (tsugunau)", "ついや・す", "おさ・める", "か・う"], a: 0 },
            { q: "Onyomi de 消費税 (Imposto IVA):", options: ["ZEI (ゼイ)", "CHIN", "SAN", "NOU"], a: 0 },
            { q: "O que significa 予算 (yosan)?", options: ["Orçamento financeiro", "Aluguel", "Lucro", "Prejuízo"], a: 0 },
            { q: "Qual o kanji de 通帳 (tsuuchou - Caderneta bancária)?", options: ["帳", "簿", "算", "銭"], a: 0 },
            { q: "Traduza 余裕 (yoyuu):", options: ["Folga financeira/tempo", "Escassez", "Atraso", "Prejuízo"], a: 0 },
            { q: "Qual o kanji de 納税 (nousei - Pagamento de imposto)?", options: ["納", "税", "費", "販"], a: 0 },
            { q: "Significado de 無償 (mushou):", options: ["Gratuito / Sem custo", "Caro", "Em excesso", "Lucrativo"], a: 0 },
            { q: "Complete: Yachin o ______ (Pagar o aluguel).", options: ["harau (払う)", "tsugunau", "osameru", "tsuiyasu"], a: 0 }
        ]
    },
    {
        module: 20,
        title: "Módulo 20: Sociedade Contemporânea, Família e Vida Cotidiana",
        description: "Estude 19 ideogramas de casamentos, família, velhice, funerais, ritos de passagem, festividades e felicidade.",
        grammar: {
            title: "Expressando Felicitações e Ritos (~ni際して)",
            explanation: "No N2, utiliza-se a expressão formal para ocasiões especiais como casamentos e celebrações oficiais.",
            example: "Kekkon ni saishite shukufuku shimasu.",
            translation: "Abençoamos por ocasião do casamento."
        },
        readingText: {
            title: "冠婚葬祭と日本の暮らし (Ritos de Passagem e a Vida no Japão)",
            japanese: "<ruby>人生<rt>じんせい</rt></ruby>には<ruby>結婚式<rt>けっこんしき</rt></ruby>や<ruby>葬儀<rt>そうぎ</rt></ruby>など、<ruby>冠婚葬祭<rt>かんこんそうさい</rt></ruby>の<ruby>儀式<rt>ぎしき</rt></ruby>があります。<ruby>長寿<rt>ちょうじゅ</rt></ruby>を<ruby>祝福<rt>しゅくふく</rt></ruby>し、<ruby>幸福<rt>こうふく</rt></ruby>を祈ります。",
            romaji: "Jinsei ni wa kekkonshiki ya sougi nado, kankonsousai no gishiki ga arimasu. Chouju o shukufuku shi, koufuku o inorimasu.",
            translation: "Na vida há cerimônias de ritos de passagem, como casamentos e funerais. Celebra-se a longevidade e ora-se pela felicidade.",
            comprehensionQuiz: [
                {
                    q: "Pelo que se ora nas cerimônias?", options: ["Pela felicidade (幸福を祈る)", "Por mais trabalho duro", "Para chover", "Para perder moedas"], a: 0
                },
                {
                    q: "Qual a leitura de 幸福?", options: ["こうふく (koufuku)", "ちょうじゅ", "けっこんしき", "そうぎ"], a: 0
                }
            ]
        },
        kanjis: [
            {
                character: "婚",
                meaning: "Casamento / Matrimônio / Enlace",
                kunyomi: "こん (kon)",
                onyomi: "コン (KON)",
                mnemonic: "Mulher (女) que se une em enlace ao entardecer.",
                examples: [
                    { word: "結婚 (kekkon)", wordMeaning: "Casamento", sentence: "Kekkonshiki.", sentenceMeaning: "Cerimônia de casamento." },
                    { word: "新婚 (shinkon)", wordMeaning: "Recém-casados", sentence: "Shinkon trip.", sentenceMeaning: "Viagem de lua de mel de recém-casados." }
                ]
            },
            {
                character: "姻",
                meaning: "Parentesco por casamento / Enlace matrimonial",
                kunyomi: "いん (in)",
                onyomi: "イン (IN)",
                mnemonic: "Mulher (女) estabelecendo parentesco por casamento.",
                examples: [
                    { word: "婚姻 (kon'in)", wordMeaning: "Matrimônio legal", sentence: "Kon'in届.", sentenceMeaning: "Certidão de registro de matrimônio." },
                    { word: "姻戚 (inseki)", wordMeaning: "Parentes por afinidade de casamento", sentence: "Inseki relation.", sentenceMeaning: "Relação de parentesco por casamento." }
                ]
            },
            {
                character: "妊",
                meaning: "Gravidez / Gestação",
                kunyomi: "にん (nin)",
                onyomi: "ニン (NIN)",
                mnemonic: "Mulher (女) grávida carregando uma nova vida.",
                examples: [
                    { word: "妊娠 (ninshin)", wordMeaning: "Gravidez / Gestação", sentence: "Ninshin check.", sentenceMeaning: "Exame de gravidez." },
                    { word: "妊婦 (ninpu)", wordMeaning: "Mulher grávida / Gestante", sentence: "Ninpu seat.", sentenceMeaning: "Assento reservado a gestantes." }
                ]
            },
            {
                character: "婦",
                meaning: "Mulher casada / Dona de casa / Senhora",
                kunyomi: "ふ (fu)",
                onyomi: "フ (FU)",
                mnemonic: "Mulher (女) com a vassoura cuidando do lar.",
                examples: [
                    { word: "主婦 (shufu)", wordMeaning: "Dona de casa", sentence: "Shufu no work.", sentenceMeaning: "Trabalho de dona de casa." },
                    { word: "夫婦 (fuufu)", wordMeaning: "Marido e mulher / Casal", sentence: "Fuufu no love.", sentenceMeaning: "Amor de casal." }
                ]
            },
            {
                character: "偶",
                meaning: "Cônjuge / Par / Eventual / Estátua",
                kunyomi: "たま (tama)",
                onyomi: "グウ (GUU)",
                mnemonic: "Pessoa (亻) fazendo par perfeito com o cônjuge.",
                examples: [
                    { word: "配偶者 (haiguusha)", wordMeaning: "Cônjuge", sentence: "Haiguusha deduction.", sentenceMeaning: "Dedução fiscal para cônjuge." },
                    { word: "偶然 (guuzen)", wordMeaning: "Por acaso / Coincidência", sentence: "Guuzen meet.", sentenceMeaning: "Encontrar por acaso." }
                ]
            },
            {
                character: "孤",
                meaning: "Solitário / Órfão / Isolar-se",
                kunyomi: "こ (ko)",
                onyomi: "コ (KO)",
                mnemonic: "Criança (子) solitária sem a família.",
                examples: [
                    { word: "孤独 (kodoku)", wordMeaning: "Solidão / Solitário", sentence: "Kodoku ni feel.", sentenceMeaning: "Sentir solidão." },
                    { word: "孤立 (koritsu)", wordMeaning: "Isolamento social/geográfico", sentence: "Island ga koritsu.", sentenceMeaning: "A ilha ficou isolada." }
                ]
            },
            {
                character: "老",
                meaning: "Envelhecer / Idoso / Ancião",
                kunyomi: "お・いる (oiru) / ふ・ける (fukeru)",
                onyomi: "ロウ (ROU)",
                mnemonic: "Ancião caminhando apoiado na bengala.",
                examples: [
                    { word: "老人 (roujin)", wordMeaning: "Pessoa idosa / Ancião", sentence: "Roujin home.", sentenceMeaning: "Asilo de idosos." },
                    { word: "老後 (rougo)", wordMeaning: "Terceira idade / Velhice", sentence: "Rougo no plan.", sentenceMeaning: "Planejamento para a terceira idade." }
                ]
            },
            {
                character: "寿",
                meaning: "Longevidade / Felicitações / Vida longa",
                kunyomi: "ことぶき (kotobuki)",
                onyomi: "ジュ (JU) / ス (SU)",
                mnemonic: "Linhas traçadas em desejo de longa vida.",
                examples: [
                    { word: "長寿 (chouju)", wordMeaning: "Longevidade / Vida longa", sentence: "Chouju no country.", sentenceMeaning: "País de alta longevidade." },
                    { word: "寿司 (sushi)", wordMeaning: "Sushi", sentence: "Sushi o eat.", sentenceMeaning: "Comer sushi." }
                ]
            },
            {
                character: "祝",
                meaning: "Celebrar / Felicitar / Fazer votos",
                kunyomi: "いわ・う (iwau) / いわ・い (iwai)",
                onyomi: "シュク (SHUKU) / シュウ (SHUU)",
                mnemonic: "Altar sagrado (礻) perante o qual se celebram votos.",
                examples: [
                    { word: "祝福 (shukufuku)", wordMeaning: "Bênção / Felicitações", sentence: "Shukufuku no message.", sentenceMeaning: "Mensagem de felicitações." },
                    { word: "祝日 (shukujitsu)", wordMeaning: "Feriado nacional", sentence: "Tomorrow wa shukujitsu.", sentenceMeaning: "Amanhã é feriado nacional." }
                ]
            },
            {
                character: "礼",
                meaning: "Agradecimento / Cortesia / Reverência",
                kunyomi: "れい (rei)",
                onyomi: "レイ (REI) / ライ (RAI)",
                mnemonic: "Altar sagrado (礻) perante o qual se faz reverência.",
                examples: [
                    { word: "お礼 (orei)", wordMeaning: "Agradecimento / Retribuição gentil", sentence: "Orei o say.", sentenceMeaning: "Dizer agradecimento." },
                    { word: "礼儀 (reigi)", wordMeaning: "Etiqueta / Boas maneiras", sentence: "Reigi correct.", sentenceMeaning: "Maneiras corretas de etiqueta." }
                ]
            },
            {
                character: "儀",
                meaning: "Cerimônia / Rito civil / Regra social",
                kunyomi: "ぎ (gi)",
                onyomi: "ギ (GI)",
                mnemonic: "Pessoa (亻) agindo de acordo com os ritos e etiquetas.",
                examples: [
                    { word: "儀式 (gishiki)", wordMeaning: "Cerimônia / Rito formal", sentence: "Formal gishiki.", sentenceMeaning: "Cerimônia formal." },
                    { word: "礼儀 (reigi)", wordMeaning: "Boas maneiras", sentence: "Reigi ga ii.", sentenceMeaning: "Ter boas maneiras." }
                ]
            },
            {
                character: "冠",
                meaning: "Coroa / Cerimônia de maioridade",
                kunyomi: "かんむり (kanmuri)",
                onyomi: "カン (KAN)",
                mnemonic: "Coroa colocada sobre a cabeça no rito de maioridade.",
                examples: [
                    { word: "冠婚葬祭 (kankonsousai)", wordMeaning: "Ritos de passagem da vida (Maioridade, Casamento, Funeral, Ancestrais)", sentence: "Kankonsousai manners.", sentenceMeaning: "Etiquetas dos ritos de passagem." },
                    { word: "栄冠 (eikan)", wordMeaning: "Coroa de glória / Titulo de campeão", sentence: "Eikan o get.", sentenceMeaning: "Conquistar a coroa de glória." }
                ]
            },
            {
                character: "喪",
                meaning: "Luto / Perda de parente / Vestes de luto",
                kunyomi: "も (mo)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Luto e choro pelo falecimento do ente querido.",
                examples: [
                    { word: "喪服 (mofuku)", wordMeaning: "Traje de luto", sentence: "Mofuku o wear.", sentenceMeaning: "Vestir traje de luto." },
                    { word: "喪失 (soushitsu)", wordMeaning: "Perda / Extinção de posse", sentence: "Memory no soushitsu.", sentenceMeaning: "Perda de memória." }
                ]
            },
            {
                character: "葬",
                meaning: "Enterro / Funeral / Sepultamento",
                kunyomi: "とむら・う (tomurau)",
                onyomi: "ソウ (SOU)",
                mnemonic: "Plantas (艹) e corpo sepultado no solo em funeral.",
                examples: [
                    { word: "葬儀 (sougi)", wordMeaning: "Cerimônia fúnebre / Funeral", sentence: "Sougi ni attend.", sentenceMeaning: "Comparecer ao funeral." },
                    { word: "埋葬 (maisou)", wordMeaning: "Sepultamento / Enterro", sentence: "Body no maisou.", sentenceMeaning: "Sepultamento do corpo." }
                ]
            },
            {
                character: "墓",
                meaning: "Túmulo / Sepultura / Jazigo",
                kunyomi: "はか (haka)",
                onyomi: "ボ (BO)",
                mnemonic: "Solo (土) sob a lápide da sepultura.",
                examples: [
                    { word: "墓地 (bochi)", wordMeaning: "Cemitério", sentence: "Bochi ni visit.", sentenceMeaning: "Visitar o cemitério." },
                    { word: "お墓参り (ohakamairi)", wordMeaning: "Visita ao túmulo da família", sentence: "Ohakamairi ni iku.", sentenceMeaning: "Ir fazer visita ao túmulo." }
                ]
            },
            {
                character: "祈",
                meaning: "Orar / Desejar paz / Rezar",
                kunyomi: "いの・る (inoru) / いの・り (inori)",
                onyomi: "キ (KI)",
                mnemonic: "Altar sagrado (礻) perante o qual se faz a oração.",
                examples: [
                    { word: "祈願 (kigan)", wordMeaning: "Prece / Oração fervorosa", sentence: "Success kigan.", sentenceMeaning: "Prece pelo sucesso." },
                    { word: "祈る (inoru)", wordMeaning: "Orar / Rezar por alguém", sentence: "Peace o inoru.", sentenceMeaning: "Orar pela paz." }
                ]
            },
            {
                character: "祭",
                meaning: "Festival tradicional / Rito festivo / Matsuri",
                kunyomi: "まつ・り (matsuri) / まつ・る (matsuru)",
                onyomi: "サイ (SAI)",
                mnemonic: "Oferendas no altar durante o festival Matsuri.",
                examples: [
                    { word: "夏祭り (natsu-matsuri)", wordMeaning: "Festival tradicional de verão", sentence: "Natsu-matsuri ni iku.", sentenceMeaning: "Ir ao festival de verão." },
                    { word: "祭日 (saijitsu)", wordMeaning: "Dia de festival religioso", sentence: "Saijitsu no festival.", sentenceMeaning: "Festival no dia festivo." }
                ]
            },
            {
                character: "幸",
                meaning: "Felicidade / Boa sorte / Fortuna",
                kunyomi: "さいわ・い (saiwai) / しあわ・せ (shiawase)",
                onyomi: "コウ (KOU)",
                mnemonic: "Mãos abertas celebrando a bênção e a felicidade.",
                examples: [
                    { word: "幸福 (koufuku)", wordMeaning: "Felicidade / Bem-estar", sentence: "Koufuku na life.", sentenceMeaning: "Vida feliz." },
                    { word: "幸運 (kouun)", wordMeaning: "Sorte / Boa fortuna", sentence: "Kouun o wish.", sentenceMeaning: "Desejar boa sorte." }
                ]
            }
        ],
        quiz: [
            { q: "Qual o significado de 結婚 (kekkon)?", options: ["Casamento", "Funeral", "Feriado", "Anuário"], a: 0 },
            { q: "Traduza 幸福 (koufuku):", options: ["Felicidade / Bem-estar", "Luto", "Solidão", "Sepultura"], a: 0 },
            { q: "Kunyomi de 祈る:", options: ["いの・る (inoru)", "いわ・う", "お・いる", "まつ・り"], a: 0 },
            { q: "Onyomi de 葬儀 (Funeral):", options: ["SOU (ソウ)", "KON", "REI", "BO"], a: 0 },
            { q: "O que significa お礼 (orei)?", options: ["Agradecimento / Retribuição gentil", "Cerimônia fúnebre", "Asilo", "Gravidez"], a: 0 },
            { q: "Qual o kanji de 妊婦 (ninpu - Gestante)?", options: ["妊", "婦", "婚", "姻"], a: 0 },
            { q: "Traduza 孤独 (kodoku):", options: ["Solidão / Solitário", "Felicidade", "Bênção", "Cônjuge"], a: 0 },
            { q: "Qual o kanji de 祝日 (shukujitsu - Feriado)?", options: ["祝", "祭", "礼", "儀"], a: 0 },
            { q: "Significado de 冠婚葬祭 (kankonsousai):", options: ["Ritos de passagem da vida", "Aluguel de casas", "Festas escolares", "Aulas"], a: 0 },
            { q: "Complete: Peace o ______ (Orar pela paz).", options: ["inoru (祈る)", "iwau", "matsuru", "fukeru"], a: 0 }
        ]
    },
    {
        isReviewTable: true,
        module: 21,
        title: "Módulo 21: Tabela Geral de Kanjis e Revisão do N2",
        description: "Tabela completa de revisão com todos os 380 Kanjis aprendidos nos 20 módulos do nível JLPT N2."
    }
];



