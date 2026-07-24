// ==========================================
// JAPÃO ACADEMY - DADOS DO CURSO KANJI N5
// ==========================================

const kanjiN5Data = [
    {
        module: 1,
        title: "Módulo 1: Guia Fundamental e Anatomia do Kanji",
        description: "O alicerce definitivo da sua jornada! Aprofunde-se na lógica dos radicais (Busshu), na mecânica do Okurigana, nas regras de ouro do Kakijun e nos segredos da sonorização (Rendaku).",
        grammar: {
            title: "Frases de Identificação: ～は ～です (A é B)",
            explanation: "A estrutura fundamental do japonês é: [Tópico] は [Identificação] です. A partícula は (wa) marca o TEMA/TÓPICO da frase (o que estamos falando). です (desu) é o verbo de ligação formal equivalente a 'é/são'. Para negar, use ではありません (dewa arimasen) ou o informal じゃない (ja nai).",
            example: "これは漢字です。漢字は日本語の文字ではありません。中国語から来ました。",
            translation: "Isto é um kanji. Kanji não é um caractere japonês. Veio do chinês."
        },
        readingText: {
            title: "漢字の歴史と書き方 (História e Escrita dos Kanjis)",
            japanese: "<ruby>私<rt>わたし</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えます。<ruby>漢字<rt>かんじ</rt></ruby>は<ruby>中国<rt>ちゅうごく</rt></ruby>から<ruby>来<rt>き</rt></ruby>ました。<ruby>正<rt>ただ</rt></ruby>しい<ruby>順番<rt>じゅんばん</rt></ruby>で<ruby>書<rt>か</rt></ruby>くことが<ruby>大切<rt>たいせつ</rt></ruby>です。",
            romaji: "Watashi wa mainichi, kanji no imi o kangaemasu. Kanji wa Chuugoku kara kimashita. Tadashii junban de kaku koto ga taisetsu desu.",
            translation: "Eu penso no significado dos ideogramas todos os dias. Os ideogramas vieram da China. É importante escrever na ordem correta dos traços.",
            comprehensionQuiz: [
                {
                    q: "De onde vieram os kanjis segundo o texto?",
                    options: ["China (中国)", "Japão (日本)", "Coreia (韓国)", "Índia (インド)"],
                    a: "China (中国)",
                    type: "choice"
                },
                {
                    q: "O que é considerado importante (大切) na hora de escrever?",
                    options: ["Escrever na ordem correta (正しい順番)", "Escrever rápido", "Usar caneta vermelha", "Desenhar sem olhar"],
                    a: "Escrever na ordem correta (正しい順番)",
                    type: "choice"
                }
            ]
        },
        kanjis: [
            {
                character: "漢",
                meaning: "1. A Origem e o Conceito dos Kanjis",
                kunyomi: "kan (conceito histórico)",
                onyomi: "カン (KAN)",
                mnemonic: "💡 ANATOMIA HISTÓRICA: Diferente do Hiragana e Katakana (que são silabários fonéticos criados no Japão), os Kanjis vieram da China (Dinastia Han). Eles são ideogramas conceituais: carregam ideias, imagens e conceitos visuais, permitindo ler textos eliminando qualquer ambiguidade instantaneamente.",
                examples: [
                    {
                        word: "漢字 (kanji)",
                        wordMeaning: "Ideogramas chineses (lit. Letras da dinastia Han)",
                        sentence: "毎日、漢字の意味を考えます。(Mainichi, kanji no imi o kangaemasu)",
                        sentenceMeaning: "Todos os dias, penso no significado dos kanjis."
                    },
                    {
                        word: "同音異義語 (O poder visual)",
                        wordMeaning: "Palavras com o mesmo som e significados diferentes",
                        sentence: "「あめ」 pode ser 雨 (Chuva) ou 飴 (Bala de açúcar).",
                        sentenceMeaning: "O Kanji resolve o contexto visualmente sem margem para erro!"
                    }
                ]
            },
            {
                character: "訓",
                meaning: "2. Kunyomi e o Segredo do Okurigana",
                kunyomi: "おし・える (oshieru) / くん (kun)",
                onyomi: "クン (KUN)",
                mnemonic: "💡 REGRA DE OURO DO KUNYOMI: É a leitura nativa japonesa aplicada quando o Kanji está isolado (ex: 水 mizu) ou acompanhado de flexões em Hiragana, chamadas de OKURIGANA (ex: 食べます - o 'besu' indica que a raiz 'tabe' deve ser lida em japonês).",
                examples: [
                    {
                        word: "食べる (taberu)",
                        wordMeaning: "Comer (Raiz kanji + Okurigana em hiragana)",
                        sentence: "リンゴを食べるのが好きです。(Ringo o taberu no ga suki desu)",
                        sentenceMeaning: "Gosto de comer maçã."
                    },
                    {
                        word: "見る (miru)",
                        wordMeaning: "Ver / Olhar",
                        sentence: "映画館で映画を見ます。(Eigakan de eiga o mimasu)",
                        sentenceMeaning: "Assisto a filmes no cinema."
                    }
                ]
            },
            {
                character: "音",
                meaning: "3. Onyomi e as Palavras Compostas (Jukugo)",
                kunyomi: "oto / ne",
                onyomi: "オン (ON) / イン (IN)",
                mnemonic: "💡 REGRA DE OURO DO ONYOMI: É a adaptação japonesa para a pronúncia chinesa original. Use o Onyomi obrigatoriamente quando dois ou mais Kanjis se grudam para formar uma palavra composta (chamada de JUKUGO), como 'Água + Dia da Semana = Quarta-feira'.",
                examples: [
                    {
                        word: "水曜日 (suiyoubi)",
                        wordMeaning: "Quarta-feira (Jukugo = Leituras Onyomi de Água + Dia)",
                        sentence: "水曜日にテストがあります。(Suiyoubi ni tesuto ga arimasu)",
                        sentenceMeaning: "Tenho uma prova na quarta-feira."
                    },
                    {
                        word: "学校 (gakkou)",
                        wordMeaning: "Escola (Estudo + Local - Leituras On)",
                        sentence: "学校で日本語を勉強します。(Gakkou de nihongo o benkyou shimasu)",
                        sentenceMeaning: "Estudo japonês na escola."
                    }
                ]
            },
            {
                character: "部",
                meaning: "4. O Universo dos Radicais (Busshu)",
                kunyomi: "부 / parte",
                onyomi: "ブ (BU)",
                mnemonic: "💡 A ANATOMIA DOS BLOCOS: Kanjis não são rabiscos aleatórios; são quebra-cabeças formados por Radicais (partes fundamentais). Conhecer os 4 radicais mais vitais do N5 acelera sua memorização em 300%:\n• 亻 (Ninben): Radicais de Pessoas (Ex: 休 descansa, 他 outro).\n• 氵 (Sanzui): Radicais de Água (Ex: 水 água, 河 rio, 酒 saquê).\n• 口 (Kuchi): Radicais de Boca / Fala (Ex: 喰 comer, 喝 gritar, 語 idioma).\n• 木 (Ki): Radicais de Árvore / Planta (Ex: 森 floresta, 林 bosques, 本 raiz/livro).",
                examples: [
                    {
                        word: "休 (yasumu) / 他 (hoka)",
                        wordMeaning: "O radical de Pessoa (亻) em ação",
                        sentence: "人が木の下で休みます。(Hito ga ki no shita de yasumimasu)",
                        sentenceMeaning: "Uma pessoa descansa embaixo da árvore."
                    },
                    {
                        word: "河 (kawa) / 海 (umi)",
                        wordMeaning: "O radical de Água líquida (氵) indicando elementos fluídos",
                        sentence: "美しい川の水を見ます。(Utsukushii kawa no mizu o mimasu)",
                        sentenceMeaning: "Vejo a água do belo rio."
                    }
                ]
            },
            {
                character: "正",
                meaning: "5. Kakijun (A Ordem Absoluta dos Traços)",
                kunyomi: "tadasu / masa",
                onyomi: "セイ (SEI) / ショウ (SHOU)",
                mnemonic: "💡 COMO ESCREVER CORRETAMENTE: A ordem dos traços (Kakijun) não é capricho estético — ela garante a velocidade da escrita fluida e o equilíbrio visual do caractere. As 3 Leis Universais são:\n1. De cima para baixo;\n2. Da esquerda para a direita;\n3. Traços horizontais principais cortados por verticais vêm por último.",
                examples: [
                    {
                        word: "正しい (tadashii)",
                        wordMeaning: "Correto / Certo",
                        sentence: "先生の答えは正しいです。(Sensei no kotae wa tadashii desu)",
                        sentenceMeaning: "A resposta do professor está correta."
                    },
                    {
                        word: "正月 (shougatsu)",
                        wordMeaning: "Ano Novo (O mês que inicia o ciclo com retitude)",
                        sentence: "正月に実家へ帰ります。(Shougatsu ni jikka e kaerimasu)",
                        sentenceMeaning: "Volto para a casa dos meus pais no Ano Novo."
                    }
                ]
            },
            {
                character: "々",
                meaning: "6. Kurikaeshi e o Fenômeno do Rendaku",
                kunyomi: "onaji (mesmo)",
                onyomi: "-",
                mnemonic: "💡 O DOBRO DE IMPACTO E O RENDAKU: O símbolo '々' duplica o kanji anterior. Quando isso acontece, surge frequentemente o fenômeno fonético do **Rendaku** (a sonorização de consoantes para facilitar a fala, como a plosiva 'h' ou 'k' virando 'b' ou 'g'). Exemplos clássicos: 人 (hito) + 人 (hito) vira 人々 (hitobito, e não hitohito) e 時 (toki) + 時 (toki) vira 時々 (tokidoki).",
                examples: [
                    {
                        word: "人々 (hitobito)",
                        wordMeaning: "Pessoas / Multidão (O 'hito' ganha som sonoro de 'bito')",
                        sentence: "町に人々がたくさん歩いています。(Machi ni hitobito ga takusan aruite imasu)",
                        sentenceMeaning: "Há muitas pessoas caminhando na cidade."
                    },
                    {
                        word: "色々 (iroiro)",
                        wordMeaning: "Vários / Diversos (Cor + Cor com repetição)",
                        sentence: "色々な本を読みます。(Iroiro na hon o yomimasu)",
                        sentenceMeaning: "Leio vários tipos de livros."
                    }
                ]
            }
        ],
        quiz: [
            { q: "Qual é o nome dado à leitura de origem chinesa dos ideogramas?", a: "onyomi", type: "romaji" },
            { q: "Qual é o nome dado à leitura de origem nativa japonesa dos ideogramas?", a: "kunyomi", type: "romaji" },
            {
                q: "A leitura Kunyomi é geralmente usada quando o Kanji está isolado na frase?",
                options: ["sim", "nao"],
                a: "sim",
                type: "choice"
            },
            {
                q: "Como se chama o fenômeno fonético onde a consoante inicial muda para um som sonoro (ex: hito virando bito)?",
                options: ["Rendaku", "Okurigana", "Kakijun", "Jukugo"],
                a: "Rendaku",
                type: "choice"
            },
            { q: "Qual é o termo em romaji para a regra e ordem correta de escrita dos traços de um kanji?", a: "kakijun", type: "romaji" },
            {
                q: "Como é chamada a raiz ou parte fundamental que ajuda a classificar e dar sentido a um Kanji?",
                options: ["Radical (Busshu)", "Okurigana", "Sufixo", "Vogal"],
                a: "Radical (Busshu)",
                type: "choice"
            },
            {
                q: "Em palavras compostas por dois ou mais kanjis juntos (Jukugo), qual leitura costuma ser a mais utilizada?",
                options: ["Onyomi", "Kunyomi", "Hiragana puro", "Nenhum"],
                a: "Onyomi",
                type: "choice"
            },
            {
                q: "Nos dicionários de japonês, a leitura Onyomi costuma ser representada em qual silabário?",
                options: ["Katakana", "Hiragana", "Romaji", "漢字"],
                a: "Katakana",
                type: "choice"
            },
            {
                q: "Nos dicionários, a leitura Kunyomi costuma ser representada em qual silabário?",
                options: ["Hiragana", "Katakana", "Romaji", "Inglês"],
                a: "Hiragana",
                type: "choice"
            },
            { q: "O sistema de escrita japonês moderno é composto por três pilares: Hiragana, Katakana e...?", a: "kanji", type: "romaji" }
        ]
    },

    {
        module: 2,
        title: "Módulo 2: Números, Contagem e Moeda",
        description: "Aprenda a base numérica do japonês, contadores essenciais e como perguntar/expressar preços e quantidades no N5.",
        grammar: {
            title: "Contadores Numéricos: ～円 / ～個 / ～本 / ～枚",
            explanation: "No japonês, números NÃO existem sozinhos com substantivos — precisam de CONTADORES específicos. Os mais essenciais do N5 são: 円 (en) para preços em iene; 個 (ko) para objetos pequenos/redondos; 本 (hon) para objetos cilíndricos longos (canetas, garrafas); 枚 (mai) para objetos planos (papéis, camisas). Para perguntar o preço: いくらですか？ (Ikura desu ka? = Quanto custa?)",
            example: "このペンは三本で五百円です。りんごが二個あります。",
            translation: "Estas três canetas custam quinhentos ienes. Há duas maçãs."
        },
        readingText: {
            title: "デパートで買い物 (Compras na Loja de Departamentos)",
            japanese: "<ruby>私<rt>わたし</rt></ruby>は<ruby>昨日<rt>きのう</rt></ruby>、<ruby>百円<rt>ひゃくえん</rt></ruby>ショップで<ruby>本<rt>ほん</rt></ruby>を<ruby>一冊<rt>いっさつ</rt></ruby>と<ruby>ペン<rt>ぺん</rt></ruby>を<ruby>三本<rt>さんぼん</rt></ruby><ruby>買<rt>か</rt></ruby>いました。<ruby>全部<rt>ぜんぶ</rt></ruby>で<ruby>四百円<rt>よんひゃくえん</rt></ruby>でした。<ruby>千円<rt>せんえん</rt></ruby>を<ruby>払<rt>はら</rt></ruby>って、おつりを<ruby>六百円<rt>ろっぴゃくえん</rt></ruby><ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>りました。",
            romaji: "Watashi wa kinou, hyakuen shoppu de hon o issatsu to pen o sanbon kaimashita. Zenbu de yonhyakuen deshita. Sen'en o haratte, otsuri o roppyakuen uketorimashita.",
            translation: "Ontem, comprei um livro e três canetas em uma loja de 100 ienes. Deu quatrocentos ienes no total. Paguei com mil ienes e recebi seiscentos ienes de troco.",
            comprehensionQuiz: [
                {
                    q: "Quanto custaram as compras no total (全部)?",
                    options: ["400 ienes (四百円)", "100 ienes (百円)", "600 ienes (六百円)", "1000 ienes (千円)"],
                    a: "400 ienes (四百円)",
                    type: "choice"
                },
                {
                    q: "Quanto de troco a pessoa recebeu ao pagar com 1000 ienes?",
                    options: ["600 ienes (六百円)", "500 ienes (五百円)", "300 ienes (三百円)", "400 ienes (四百円)"],
                    a: "600 ienes (六百円)",
                    type: "choice"
                }
            ]
        },
        kanjis: [
            {
                character: "一",
                meaning: "Um",
                kunyomi: "ひと・つ (hitotsu) / ひと (hito)",
                onyomi: "イチ (ICHI) / イツ (ITSU)",
                mnemonic: "Um único traço horizontal no papel, representando o número 1.",
                examples: [
                    {
                        word: "一 (ichi)",
                        wordMeaning: "Um (número)",
                        sentence: "一から十まで数えます。(Ichi kara juu made kazoemasu)",
                        sentenceMeaning: "Conto de um até dez."
                    },
                    {
                        word: "一つ (hitotsu)",
                        wordMeaning: "Um objeto (contagem geral)",
                        sentence: "りんごを一つください。(Ringo o hitotsu kudasai)",
                        sentenceMeaning: "Por favor, dê-me uma maçã."
                    }
                ]
            },
            {
                character: "二",
                meaning: "Dois",
                kunyomi: "ふた・つ (futatsu) / ふた (futa)",
                onyomi: "ニ (NI)",
                mnemonic: "Dois traços horizontais paralelos representando o número 2.",
                examples: [
                    {
                        word: "二 (ni)",
                        wordMeaning: "Dois (número)",
                        sentence: "二時にお茶を飲みたいです。(Ni-ji ni ocha o nomitai desu)",
                        sentenceMeaning: "Quero beber chá às duas horas."
                    },
                    {
                        word: "二つ (futatsu)",
                        wordMeaning: "Dois objetos",
                        sentence: "かばんが二つあります。(Kaban ga futatsu arimasu)",
                        sentenceMeaning: "Há duas bolsas."
                    }
                ]
            },
            {
                character: "三",
                meaning: "Três",
                kunyomi: "みっ・つ (mittsu) / み (mi)",
                onyomi: "サン (SAN)",
                mnemonic: "Três traços horizontais representando o número 3.",
                examples: [
                    {
                        word: "三 (san)",
                        wordMeaning: "Três (número)",
                        sentence: "猫が三匹います。(Neko ga san-biki imasu)",
                        sentenceMeaning: "Há três gatos."
                    },
                    {
                        word: "三日 (mikka)",
                        wordMeaning: "Dia 3 do mês / Três dias",
                        sentence: "三日に日本へ行きます。(Mikka ni Nihon e ikimasu)",
                        sentenceMeaning: "Vou para o Japão no dia três."
                    }
                ]
            },
            {
                character: "四",
                meaning: "Quatro",
                kunyomi: "よん (yon) / よっ・つ (yottsu) / し (shi)",
                onyomi: "シ (SHI)",
                mnemonic: "Uma janela com cortinas divididas em quatro partes.",
                examples: [
                    {
                        word: "四 (yon / shi)",
                        wordMeaning: "Quatro (número)",
                        sentence: "本を四冊買いました。(Hon o yon-satsu kaimashita)",
                        sentenceMeaning: "Comprei quatro livros."
                    },
                    {
                        word: "四月 (shigatsu)",
                        wordMeaning: "Abril (Mês 4)",
                        sentence: "四月は桜がきれいですね。(Shigatsu wa sakura ga kirei desu ne)",
                        sentenceMeaning: "Em abril, as cerejeiras são lindas, né?"
                    }
                ]
            },
            {
                character: "五",
                meaning: "Cinco",
                kunyomi: "いつ・つ (itsutsu) / いつ (itsu)",
                onyomi: "ゴ (GO)",
                mnemonic: "Traços cruzados que lembram uma mão com os cinco dedos abertos ou um ábaco.",
                examples: [
                    {
                        word: "五 (go)",
                        wordMeaning: "Cinco (número)",
                        sentence: "毎日五キロ走ります。(Mainichi go-kiro hashirimasu)",
                        sentenceMeaning: "Corro cinco quilômetros todos os dias."
                    },
                    {
                        word: "五つ (itsutsu)",
                        wordMeaning: "Cinco objetos",
                        sentence: "いすを五つ並べてください。(Isu o itsutsu narabete kudasai)",
                        sentenceMeaning: "Por favor, alinhe cinco cadeiras."
                    }
                ]
            },
            {
                character: "六",
                meaning: "Seis",
                kunyomi: "むっ・つ (muttsu) / む (mu)",
                onyomi: "ロク (ROKU) / ロッ (RO)",
                mnemonic: "Parece uma pessoa abrindo os braços e pernas, formando seis pontas.",
                examples: [
                    {
                        word: "六 (roku)",
                        wordMeaning: "Seis (número)",
                        sentence: "朝六時に起きません。(Asa roku-ji ni okimasen)",
                        sentenceMeaning: "Não acordo às seis da manhã."
                    },
                    {
                        word: "六つ (muttsu)",
                        wordMeaning: "Seis objetos",
                        sentence: "たまごが六つあります。(Tamago ga muttsu arimasu)",
                        sentenceMeaning: "Há seis ovos."
                    }
                ]
            },
            {
                character: "七",
                meaning: "Sete",
                kunyomi: "なな・つ (nanatsu) / なな (nana) / なの (nano)",
                onyomi: "シチ (SHICI)",
                mnemonic: "Lembrando o número 7 cortado ou uma foice de sete pontas.",
                examples: [
                    {
                        word: "七 (nana / shichi)",
                        wordMeaning: "Sete (número)",
                        sentence: "ラッキー七ですね！(Rakkii nana desu ne!)",
                        sentenceMeaning: "É o sete da sorte, não é?"
                    },
                    {
                        word: "七月 (shichigatsu)",
                        wordMeaning: "Julho (Mês 7)",
                        sentence: "七月はとても暑いです。(Shichigatsu wa totemo atsui desu)",
                        sentenceMeaning: "Julho é muito quente."
                    }
                ]
            },
            {
                character: "八",
                meaning: "Oito",
                kunyomi: "やっ・つ (yattsu) / や (ya)",
                onyomi: "ハチ (HACHI) / ハッ (HA)",
                mnemonic: "Dois traços descendo de uma montanha, como as 8 patas de um caranguejo.",
                examples: [
                    {
                        word: "八 (hachi)",
                        wordMeaning: "Oito (número)",
                        sentence: "たこは足が八本あります。(Tako wa ashi ga happon arimasu)",
                        sentenceMeaning: "O polvo tem oito tentáculos."
                    },
                    {
                        word: "八つ (yattsu)",
                        wordMeaning: "Oito objetos",
                        sentence: "お皿を八つ洗いました。(Osara o yattsu araimashita)",
                        sentenceMeaning: "Lavei oito pratos."
                    }
                ]
            },
            {
                character: "九",
                meaning: "Nove",
                kunyomi: "ここの・つ (kokonotsu) / ここの (kokono)",
                onyomi: "キュウ (KYUU) / ク (KU)",
                mnemonic: "Uma pessoa fazendo uma reverência de 90 graus.",
                examples: [
                    {
                        word: "九 (kyuu / ku)",
                        wordMeaning: "Nove (número)",
                        sentence: "九階に私の部屋があります。(Kyuu-kai ni watashi no heya ga arimasu)",
                        sentenceMeaning: "Meu quarto fica no nono andar."
                    },
                    {
                        word: "九月 (kugatsu)",
                        wordMeaning: "Setembro (Mês 9)",
                        sentence: "九月から学校が始まります。(Kugatsu kara gakkou ga hajimarimasu)",
                        sentenceMeaning: "A escola começa a partir de setembro."
                    }
                ]
            },
            {
                character: "十",
                meaning: "Dez",
                kunyomi: "とお (too) / と (to)",
                onyomi: "ジュウ (JUU) / ジッ (JI)",
                mnemonic: "Uma cruz perfeita, representando a rotação de todos os 10 números.",
                examples: [
                    {
                        word: "十 (juu)",
                        wordMeaning: "Dez (número)",
                        sentence: "駅まで十分かかります。(Eki made juuppun kakarimasu)",
                        sentenceMeaning: "Leva dez minutos até a estação."
                    },
                    {
                        word: "二十歳 (hatachi / nijussai)",
                        wordMeaning: "20 anos de idade",
                        sentence: "姉は今年二十歳になりました。(Ane wa kotoshi hatachi ni narimashita)",
                        sentenceMeaning: "Minha irmã mais velha fez 20 anos este ano."
                    }
                ]
            },
            {
                character: "百",
                meaning: "Cem (100)",
                kunyomi: "-",
                onyomi: "ヒャク (HYAKU) / ビャク (BYAKU) / ピャク (PYAKU)",
                mnemonic: "O número 1 (一) no topo de um bloco branco (白), formando o cento.",
                examples: [
                    {
                        word: "百 (hyaku)",
                        wordMeaning: "Cem",
                        sentence: "このテストで百点を取りたいです。(Kono tesuto de hyaku-ten o toritai desu)",
                        sentenceMeaning: "Quero tirar nota cem neste teste."
                    },
                    {
                        word: "三百 (sanbyaku)",
                        wordMeaning: "Trezentos",
                        sentence: "ペンは三百円でした。(Pen wa sanbyaku-en deshita)",
                        sentenceMeaning: "A caneta custou trezentos ienes."
                    }
                ]
            },
            {
                character: "千",
                meaning: "Mil (1.000)",
                kunyomi: "ち (chi)",
                onyomi: "セン (SEN) / ゼン (ZEN)",
                mnemonic: "O número dez (十) com um traço extra em cima, multiplicando por cem.",
                examples: [
                    {
                        word: "千 (sen)",
                        wordMeaning: "Mil",
                        sentence: "千羽鶴を作りました。(Senbazuru o tsukurimashita)",
                        sentenceMeaning: "Fiz mil tsurus (guirlanda de origamis)."
                    },
                    {
                        word: "三千 (sanzen)",
                        wordMeaning: "Três mil",
                        sentence: "その靴は三千円ですか？(Sono kutsu wa sanzen-en desu ka?)",
                        sentenceMeaning: "Esses sapatos custam três mil ienes?"
                    }
                ]
            },
            {
                character: "万",
                meaning: "Dez mil (10.000)",
                kunyomi: "-",
                onyomi: "マン (MAN) / バン (BAN)",
                mnemonic: "O traço superior representa um teto cobrindo milhares de coisas abaixo.",
                examples: [
                    {
                        word: "一万 (ichiman)",
                        wordMeaning: "Dez mil",
                        sentence: "財布に一万円あります。(Saifu ni ichiman-en arimasu)",
                        sentenceMeaning: "Há dez mil ienes na carteira."
                    },
                    {
                        word: "万年筆 (mannenhitsu)",
                        wordMeaning: "Caneta-tinteiro (lit. caneta dos dez mil anos)",
                        sentence: "父に万年筆をあげました。(Chichi ni mannenhitsu o agemashita)",
                        sentenceMeaning: "Dei uma caneta-tinteiro para o meu pai."
                    }
                ]
            },
            {
                character: "円",
                meaning: "Iene (Moeda) / Círculo",
                kunyomi: "まる・い (marui)",
                onyomi: "エン (EN)",
                mnemonic: "Lembrando uma antiga moeda japonesa redonda com um furo no meio.",
                examples: [
                    {
                        word: "円 (en)",
                        wordMeaning: "Iene (moeda japonesa)",
                        sentence: "これは百円です。(Kore wa hyaku-en desu)",
                        sentenceMeaning: "Isto custa cem ienes."
                    },
                    {
                        word: "円い (marui)",
                        wordMeaning: "Redondo / Circular",
                        sentence: "円いテーブルを買いました。(Marui teeburu o kaimashita)",
                        sentenceMeaning: "Comprei uma mesa redonda."
                    }
                ]
            }

        ],
        quiz: [
            { q: "Como se diz 'um' em romaji na leitura onyomi (一)?", a: "ichi", type: "romaji" },
            { q: "Qual é a leitura kunyomi para contagem de um objeto (一つ)?", options: ["hitotsu", "futatsu", "mittsu", "ichi"], a: "hitotsu", type: "choice" },
            { q: "Como se diz 'cem' em romaji (百)?", a: "hyaku", type: "romaji" },
            { q: "O número 4 tem duas leituras comuns, 'yon' e qual outra?", options: ["shi", "nana", "ku", "go"], a: "shi", type: "choice" },
            { q: "Como se diz 'mil' em romaji (千)?", a: "sen", type: "romaji" },
            { q: "Qual kanji representa a moeda japonesa (Iene)?", options: ["円", "金", "百", "万"], a: "円", type: "choice" },
            { q: "Como se diz 'dez mil' em romaji (一万)?", a: "ichiman", type: "romaji" },
            { q: "A leitura 'mikka' (三日) significa 'três dias' e qual outra coisa?", options: ["Dia 3 do mês", "Mês de Março", "Terça-feira", "Três da tarde"], a: "Dia 3 do mês", type: "choice" },
            { q: "Qual é a leitura especial para '20 anos de idade'?", a: "hatachi", type: "romaji" },
            { q: "Como se diz 'oito' em romaji na leitura onyomi (八)?", options: ["hachi", "nana", "roku", "kyuu"], a: "hachi", type: "choice" }
        ]
    },

    {
        module: 3,
        title: "Módulo 3: Tempo, Dias da Semana e Calendário",
        description: "Domine os ideogramas dos dias da semana, meses, anos e horas — essenciais para agendar compromissos e entender rotinas no N5.",
        grammar: {
            title: "Marcação de Tempo: ～に / ～から / ～まで (Horário, De... Até...)",
            explanation: "Para indicar QUANDO algo acontece, use に após horas, dias e meses (ex: 月曜日に - na segunda-feira; 三時に - às três horas). Para expressar uma faixa de tempo, use から (kara = de/a partir de) e まで (made = até/antes de): 月曜日から金曜日まで trabalho. Para durações (quanto tempo dura), NÃO use に — use apenas o número com contador.",
            example: "水曜日の二時から四時まで日本語のクラスがあります。",
            translation: "Na quarta-feira, tenho aula de japonês das duas às quatro horas."
        },
        readingText: {
            title: "一週間の予定 (A Agenda da Semana)",
            japanese: "<ruby>月曜日<rt>げつようび</rt></ruby>から<ruby>金曜日<rt>きんようび</rt></ruby>まで<ruby>朝<rt>あさ</rt></ruby><ruby>九時<rt>くじ</rt></ruby>に<ruby>会社<rt>かいしゃ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。<ruby>水曜日<rt>すいようび</rt></ruby>の<ruby>午後<rt>ごご</rt></ruby><ruby>七時<rt>しちじ</rt></ruby><ruby>半<rt>はん</rt></ruby>から<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>します。<ruby>土曜日<rt>どようび</rt></ruby>と<ruby>日曜日<rt>にちようび</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みです。",
            romaji: "Getsuyoubi kara kinyoubi made asa kuji ni kaisha e ikimasu. Suiyoubi no gogo shichiji han kara nihongo o benkyou shimasu. Doyoubi to nichiyoubi wa yasumi desu.",
            translation: "De segunda a sexta-feira, vou para a empresa às nove horas da manhã. Na quarta-feira, a partir das sete e meia da noite, estudo japonês. Sábado e domingo são folga.",
            comprehensionQuiz: [
                {
                    q: "Em quais dias da semana a pessoa tem folga (休み)?",
                    options: ["Sábado e Domingo (土曜日と日曜日)", "Segunda e Sexta", "Quarta-feira", "Todos os dias"],
                    a: "Sábado e Domingo (土曜日と日曜日)",
                    type: "choice"
                },
                {
                    q: "A que horas começa a aula de japonês na quarta-feira?",
                    options: ["19:30 (七時半)", "09:00 (九時)", "18:00 (六時)", "20:00 (八時)"],
                    a: "19:30 (七時半)",
                    type: "choice"
                }
            ]
        },
        kanjis: [
            {
                character: "日",
                meaning: "Sol / Dia",
                kunyomi: "ひ (hi) / -び (-bi) / か (ka)",
                onyomi: "ニチ (NICHI) / ジツ (JITSU)",
                mnemonic: "Um desenho estilizado do Sol com uma mancha solar no meio, marcando a passagem dos dias.",
                examples: [
                    {
                        word: "日曜日 (nichiyoubi)",
                        wordMeaning: "Domingo (lit. Dia do Sol)",
                        sentence: "日曜日は友達と映画を見ます。(Nichiyoubi wa tomodachi to eiga o mimasu)",
                        sentenceMeaning: "No domingo, vou assistir a um filme com meus amigos."
                    },
                    {
                        word: "今日 (kyou)",
                        wordMeaning: "Hoje",
                        sentence: "今日はとても良い天気です。(Kyou wa totemo yoi tenki desu)",
                        sentenceMeaning: "Hoje o tempo está muito bom."
                    }
                ]
            },
            {
                character: "月",
                meaning: "Lua / Mês",
                kunyomi: "つき (tsuki)",
                onyomi: "ゲツ (GETSU) / ガツ (GATSU)",
                mnemonic: "O formato de uma lua crescente no céu noturno com suas crateras.",
                examples: [
                    {
                        word: "月曜日 (getsuyoubi)",
                        wordMeaning: "Segunda-feira (lit. Dia da Lua)",
                        sentence: "月曜日から仕事が始まります。(Getsuyoubi kara shigoto ga hajimarimasu)",
                        sentenceMeaning: "O trabalho começa a partir de segunda-feira."
                    },
                    {
                        word: "一月 (ichigatsu)",
                        wordMeaning: "Janeiro (Mês 1)",
                        sentence: "一月に日本へ行きたいです。(Ichigatsu ni Nihon e ikitai desu)",
                        sentenceMeaning: "Quero ir ao Japão em janeiro."
                    }
                ]
            },
            {
                character: "火",
                meaning: "Fogo",
                kunyomi: "ひ (hi)",
                onyomi: "カ (KA)",
                mnemonic: "Chamas de uma fogueira subindo ao céu com centelhas ao redor.",
                examples: [
                    {
                        word: "火曜日 (kayoubi)",
                        wordMeaning: "Terça-feira (lit. Dia do Fogo)",
                        sentence: "火曜日にテストがあります。(Kayoubi ni tesuto ga arimasu)",
                        sentenceMeaning: "Tenho uma prova na terça-feira."
                    },
                    {
                        word: "火 (hi)",
                        wordMeaning: "Fogo / Chama",
                        sentence: "火に気を付けてください。(Hi ni ki o tsukete kudasai)",
                        sentenceMeaning: "Por favor, tome cuidado com o fogo."
                    }
                ]
            },
            {
                character: "水",
                meaning: "Água",
                kunyomi: "みず (mizu)",
                onyomi: "スイ (SUI)",
                mnemonic: "O fluxo central de um rio forte com gotas de água espirrando para as margens.",
                examples: [
                    {
                        word: "水曜日 (suiyoubi)",
                        wordMeaning: "Quarta-feira (lit. Dia da Água)",
                        sentence: "水曜日はプールで泳ぎます。(Suiyoubi wa puuru de oyogimasu)",
                        sentenceMeaning: "Nado na piscina nas quartas-feiras."
                    },
                    {
                        word: "水 (mizu)",
                        wordMeaning: "Água fria / Água potável",
                        sentence: "冷たい水を一杯ください。(Tsumetai mizu o ippai kudasai)",
                        sentenceMeaning: "Por favor, me dê um copo de água gelada."
                    }
                ]
            },
            {
                character: "木",
                meaning: "Árvore / Madeira",
                kunyomi: "き (ki)",
                onyomi: "モク (MOKU) / ボク (BOKU)",
                mnemonic: "O tronco reto no meio, galhos se abrindo em cima e raízes firmes na terra.",
                examples: [
                    {
                        word: "木曜日 (mokuyoubi)",
                        wordMeaning: "Quinta-feira (lit. Dia da Árvore/Madeira)",
                        sentence: "木曜日の午後は暇です。(Mokuyoubi no gogo wa hima desu)",
                        sentenceMeaning: "Estou livre na quinta-feira à tarde."
                    },
                    {
                        word: "木 (ki)",
                        wordMeaning: "Árvore",
                        sentence: "庭に大きい木があります。(Niwa ni ookii ki ga arimasu)",
                        sentenceMeaning: "Há uma grande árvore no jardim."
                    }
                ]
            },
            {
                character: "金",
                meaning: "Ouro / Dinheiro / Metal",
                kunyomi: "かね (kane)",
                onyomi: "キン (KIN)",
                mnemonic: "Pepitas de ouro brilhando enterradas debaixo de uma montanha (teto).",
                examples: [
                    {
                        word: "金曜日 (kinyoubi)",
                        wordMeaning: "Sexta-feira (lit. Dia do Ouro/Metal)",
                        sentence: "金曜日の夜はパーティーに行きます。(Kinyoubi no yoru wa paatii ni ikimasu)",
                        sentenceMeaning: "Vou a uma festa na sexta-feira à noite."
                    },
                    {
                        word: "お金 (okane)",
                        wordMeaning: "Dinheiro",
                        sentence: "本を買うお金がありません。(Hon o kau okane ga arimasen)",
                        sentenceMeaning: "Não tenho dinheiro para comprar o livro."
                    }
                ]
            },
            {
                character: "土",
                meaning: "Terra / Solo",
                kunyomi: "つち (tsuchi)",
                onyomi: "ド (DO) / ト (TO)",
                mnemonic: "Um broto vegetal (traço vertical) nascendo das camadas da terra (dois traços horizontais).",
                examples: [
                    {
                        word: "土曜日 (doyoubi)",
                        wordMeaning: "Sábado (lit. Dia da Terra)",
                        sentence: "土曜日は家でゆっくり休みたいです。(Doyoubi wa ie de yukkuri yasumitai desu)",
                        sentenceMeaning: "Quero relaxar e descansar em casa no sábado."
                    },
                    {
                        word: "土 (tsuchi)",
                        wordMeaning: "Terra / Solo",
                        sentence: "この花の土を替えました。(Kono hana no tsuchi o kaemashita)",
                        sentenceMeaning: "Troquei a terra desta flor."
                    }
                ]
            },
            {
                character: "年",
                meaning: "Ano",
                kunyomi: "とし (toshi)",
                onyomi: "ネン (NEN)",
                mnemonic: "Uma pessoa carregando a colheita de arroz nas costas, evento celebrado uma vez por ano.",
                examples: [
                    {
                        word: "今年 (kotoshi)",
                        wordMeaning: "Este ano",
                        sentence: "今年は日本語をたくさん勉強します。(Kotoshi wa nihongo o takusan benkyou shimasu)",
                        sentenceMeaning: "Estudarei bastante japonês este ano."
                    },
                    {
                        word: "来年 (rainen)",
                        wordMeaning: "Ano que vem",
                        sentence: "来年、大学を卒業します。(Rainen, daigaku o sotsugyou shimasu)",
                        sentenceMeaning: "Vou me formar na universidade no ano que vem."
                    }
                ]
            },
            {
                character: "時",
                meaning: "Tempo / Hora",
                kunyomi: "とき (toki)",
                onyomi: "ジ (JI)",
                mnemonic: "O Sol (日) ao lado de um templo sagrado (寺), onde os sinos tocavam para marcar as horas.",
                examples: [
                    {
                        word: "時間 (jikan)",
                        wordMeaning: "Tempo / Duração / Horário",
                        sentence: "宿題をする時間がありません。(Shukudai o suru jikan ga arimasen)",
                        sentenceMeaning: "Não tenho tempo para fazer a lição de casa."
                    },
                    {
                        word: "何時 (nan-ji)",
                        wordMeaning: "Que horas?",
                        sentence: "今、何時ですか？(Ima, nan-ji desu ka?)",
                        sentenceMeaning: "Que horas são agora?"
                    }
                ]
            },
            {
                character: "分",
                meaning: "Minuto / Entender / Dividir",
                kunyomi: "わ・かる (wakaru) / わ・ける (wakeru)",
                onyomi: "フン (FUN) / プン (PUN) / ブン (BUN)",
                mnemonic: "Uma faca (刀) cortando algo ao meio em duas partes (八), dividindo a hora em minutos ou um problema para 'entender'.",
                examples: [
                    {
                        word: "五分 (gofun)",
                        wordMeaning: "Cinco minutos",
                        sentence: "あと五分待ってください。(Ato gofun matte kudasai)",
                        sentenceMeaning: "Por favor, espere mais cinco minutos."
                    },
                    {
                        word: "分かります (wakarimasu)",
                        wordMeaning: "Entender / Compreender",
                        sentence: "日本語の意味が分かりますか？(Nihongo no imi ga wakarimasu ka?)",
                        sentenceMeaning: "Você entende o significado em japonês?"
                    }
                ]
            },
            {
                character: "半",
                meaning: "Metade / Meio",
                kunyomi: "なか・ば (nakaba)",
                onyomi: "ハン (HAN)",
                mnemonic: "Três traços horizontais cortados simetricamente ao meio por uma linha vertical.",
                examples: [
                    {
                        word: "半 (han)",
                        wordMeaning: "Meia (hora) / Metade",
                        sentence: "毎日、三時半におやつを食べます。(Mainichi, san-ji han ni oyatsu o tabemasu)",
                        sentenceMeaning: "Todos os dias como um lanche às três e meia."
                    },
                    {
                        word: "半分 (hanbun)",
                        wordMeaning: "Metade (de algo)",
                        sentence: "このケーキを半分あげます。(Kono keeki o hanbun agemasu)",
                        sentenceMeaning: "Vou te dar metade deste bolo."
                    }
                ]
            },
            {
                character: "今",
                meaning: "Agora / Presente",
                kunyomi: "いま (ima)",
                onyomi: "コン (KON) / キン (KIN)",
                mnemonic: "Um telhado protegendo o tempo e as coisas que estão acontecendo no presente momento.",
                examples: [
                    {
                        word: "今 (ima)",
                        wordMeaning: "Agora",
                        sentence: "今、何をしているの？(Ima, nani o shite iru no?)",
                        sentenceMeaning: "O que você está fazendo agora?"
                    },
                    {
                        word: "今週 (konshuu)",
                        wordMeaning: "Esta semana",
                        sentence: "今週は仕事がとても忙しいです。(Konshuu wa shigoto ga totemo isogashii desu)",
                        sentenceMeaning: "Esta semana o trabalho está muito corrido."
                    }
                ]
            },
            {
                character: "先",
                meaning: "Anterior / Futuro / Antes / À frente",
                kunyomi: "さき (saki)",
                onyomi: "セン (SEN)",
                mnemonic: "As pernas de uma pessoa que caminha na sua frente, abrindo o caminho e acumulando experiência.",
                examples: [
                    {
                        word: "先生 (sensei)",
                        wordMeaning: "Professor / Mestre (lit. Nascido antes)",
                        sentence: "あの人は有名な先生です。(Ano hito wa yuumei na sensei desu)",
                        sentenceMeaning: "Aquela pessoa é um professor famoso."
                    },
                    {
                        word: "先週 (senshuu)",
                        wordMeaning: "Semana passada",
                        sentence: "先週、新しい靴を買いました。(Senshuu, atarashii kutsu o kaimashita)",
                        sentenceMeaning: "Comprei sapatos novos na semana passada."
                    }
                ]
            },
            {
                character: "来",
                meaning: "Vir / Próximo / Futuro",
                kunyomi: "く・る (kuru) / き・ます (kimasu) / こ・ない (konai)",
                onyomi: "ライ (RAI)",
                mnemonic: "O desenho de uma planta de trigo ou arroz amadurecendo, representando a colheita que virá no futuro.",
                examples: [
                    {
                        word: "来週 (raishuu)",
                        wordMeaning: "Semana que vem / Próxima semana",
                        sentence: "来週の火曜日に会いましょう。(Raishuu no kayoubi ni aimashou)",
                        sentenceMeaning: "Vamos nos encontrar na terça-feira da semana que vem."
                    },
                    {
                        word: "来ます (kimasu)",
                        wordMeaning: "Vir",
                        sentence: "彼は明日、私の家に来ます。(Kare wa ashita, watashi no ie ni kimasu)",
                        sentenceMeaning: "Ele virá à minha casa amanhã."
                    }
                ]
            },
            {
                character: "週",
                meaning: "Semana",
                kunyomi: "-",
                onyomi: "SHUU (シュウ)",
                mnemonic: "O caminho ou jornada (辶) que damos em volta de um ciclo completo de sete dias.",
                examples: [
                    {
                        word: "毎週 (maishuu)",
                        wordMeaning: "Todas as semanas / Semanalmente",
                        sentence: "毎週土曜日にテニスをします。(Maishuu doyoubi ni tenisu o shimasu)",
                        sentenceMeaning: "Jogo tênis todos os sábados (toda semana)."
                    },
                    {
                        word: "週末 (shuumatsu)",
                        wordMeaning: "Fim de semana",
                        sentence: "いい週末を過ごしてください！(Ii shuumatsu o sugoshite kudasai!)",
                        sentenceMeaning: "Tenha um bom fim de semana!"
                    }
                ]
            }
        ],
        quiz: [
            { q: "Como se escreve 'domingo' em romaji (日曜日)?", options: ["nichiyoubi", "getsuyoubi", "kayoubi", "doyoubi"], a: "nichiyoubi", type: "choice" },
            { q: "O ideograma 月 (tsuki/getsu) representa o mês e qual corpo celeste da natureza?", options: ["lua", "sol", "estrela", "terra"], a: "lua", type: "choice" },
            { q: "Como se escreve 'segunda-feira' em romaji (月曜日)?", options: ["getsuyoubi", "nichiyoubi", "suiyoubi", "kinyoubi"], a: "getsuyoubi", type: "choice" },
            { q: "O ideograma de fogo 火 representa qual dia da semana? (Escreva sem acento)", options: ["terca", "quarta", "segunda", "sexta"], a: "terca", type: "choice" },
            { q: "Como se diz 'água' em romaji na leitura kunyomi (水)?", a: "mizu", type: "romaji" },
            { q: "O ideograma de árvore/madeira 木 representa qual dia da semana? (Escreva sem acento)", options: ["quinta", "terca", "quarta", "sabado"], a: "quinta", type: "choice" },
            { q: "Qual metal ou elemento precioso o ideograma 金 (kin/kane) representa em português?", options: ["ouro", "prata", "ferro", "bronze"], a: "ouro", type: "choice" },
            { q: "Como se diz 'ano' em romaji na leitura kunyomi (年)?", a: "toshi", type: "romaji" },
            { q: "Como se diz 'agora' em romaji na leitura kunyomi (今)?", a: "ima", type: "romaji" },
            { q: "Qual partícula gramatical em romaji usamos para marcar o horário exato de um acontecimento?", options: ["ni", "de", "o", "wa"], a: "ni", type: "choice" }
        ]
    },

    {
        module: 4,
        title: "Módulo 4: Natureza, Fenômenos e Meio Ambiente",
        description: "Explore os elementos naturais no N5 e domine a gramática da existência: use 「あります」 para coisas inanimadas (montanhas, rios) e 「います」 para seres vivos (animais).",
        grammar: {
            title: "Verbos de Existência: あります vs います (Há / Existe)",
            explanation: "Regra de ouro do N5: Para indicar a EXISTÊNCIA de algo, use dois verbos diferentes. あります (arimasu) → para coisas INANIMADAS: objetos, plantas, lugares, fenômenos naturais (山があります = Há uma montanha). います (imasu) → para seres ANIMADOS: pessoas, animais, insetos (犬がいます = Há um cachorro). Para indicar onde está: [Lugar] に [Sujeito] が あります/います.",
            example: "公園に大きい木があります。その木の下に白い犬がいます。",
            translation: "Há uma grande árvore no parque. Embaixo dessa árvore há um cachorro branco."
        },
        readingText: {
            title: "富士山と日本の自然 (O Monte Fuji e a Natureza do Japão)",
            japanese: "<ruby>日本<rt>にほん</rt></ruby>には<ruby>高<rt>たか</rt></ruby>い<ruby>山<rt>やま</rt></ruby>と<ruby>美<rt>うつく</rt></ruby>しい<ruby>川<rt>かわ</rt></ruby>がたくさんあります。<ruby>一番<rt>いちばん</rt></ruby><ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>山<rt>やま</rt></ruby>は<ruby>富士山<rt>ふじさん</rt></ruby>です。<ruby>夏<rt>なつ</rt></ruby>に<ruby>空<rt>そら</rt></ruby>が<ruby>青<rt>あお</rt></ruby>い<ruby>日<rt>ひ</rt></ruby>、<ruby>山<rt>やま</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>から<ruby>太陽<rt>たいよう</rt></ruby>を<ruby>見<rt>み</rt></ruby>ることができます。",
            romaji: "Nihon ni wa takai yama to utsukushii kawa ga takusan arimasu. Ichiban yuumei na yama wa Fujisan desu. Natsu ni sora ga aoi hi, yama no ue kara taiyou o miru koto ga dekimasu.",
            translation: "No Japão há muitas montanhas altas e rios bonitos. A montanha mais famosa é o Monte Fuji. No verão, nos dias em que o céu está azul, é possível ver o sol de cima da montanha.",
            comprehensionQuiz: [
                {
                    q: "Qual é a montanha mais famosa do Japão segundo o texto?",
                    options: ["Monte Fuji (富士山)", "Monte Everest", "Monte Aso", "Monte Takao"],
                    a: "Monte Fuji (富士山)",
                    type: "choice"
                },
                {
                    q: "De onde é possível ver o sol em dias de céu azul no verão?",
                    options: ["Do topo da montanha (山の上)", "Do rio", "De dentro de casa", "Do mar"],
                    a: "Do topo da montanha (山の上)",
                    type: "choice"
                }
            ]
        },
        kanjis: [
            {
                character: "山",
                meaning: "Montanha",
                kunyomi: "やま (yama)",
                onyomi: "サン (SAN) / ゼン (ZEN)",
                mnemonic: "Os três picos de uma cordilheira desenhados no horizonte.",
                examples: [
                    {
                        word: "山 (yama - Kunyomi)",
                        wordMeaning: "Montanha",
                        sentence: "あそこに高い山があります。(Asoko ni takai yama ga arimasu)",
                        sentenceMeaning: "Há uma montanha alta ali. (💡 Gramática: Usamos 「があります」 para indicar a existência de coisas inanimadas/natureza)."
                    },
                    {
                        word: "富士山 (fujisan - Onyomi)",
                        wordMeaning: "Monte Fuji (lit. Montanha Fuji)",
                        sentence: "富士山は日本で一番高いです。(Fujisan wa Nihon de ichiban takai desu)",
                        sentenceMeaning: "O Monte Fuji é o mais alto do Japão. (💡 Nota: Em nomes de montanhas famosas, lê-se 'san')."
                    }
                ]
            },
            {
                character: "川",
                meaning: "Rio / Correnteza",
                kunyomi: "かわ (kawa) / -がわ (-gawa)",
                onyomi: "セン (SEN)",
                mnemonic: "Três linhas verticais mostrando o fluxo das águas correntes de um rio.",
                examples: [
                    {
                        word: "川 (kawa)",
                        wordMeaning: "Rio",
                        sentence: "この川の水はとてもきれいです。(Kono kawa no mizu wa totemo kirei desu)",
                        sentenceMeaning: "A água deste rio é muito limpa."
                    },
                    {
                        word: "アマゾン川 (amazon-gawa)",
                        wordMeaning: "Rio Amazonas",
                        sentence: "アマゾン川はとても長い川です。(Amazon-gawa wa totemo nagai kawa desu)",
                        sentenceMeaning: "O Rio Amazonas é um rio muito longo. (💡 Rendaku: 'kawa' vira 'gawa' após o nome do rio)."
                    }
                ]
            },
            {
                character: "田",
                meaning: "Campo de arroz / Arrozal",
                kunyomi: "た (ta) / -だ (-da)",
                onyomi: "デン (DEN)",
                mnemonic: "Uma vista aérea de um campo de arroz irrigado, dividido em quatro quadras simétricas.",
                examples: [
                    {
                        word: "田んぼ (tanbo)",
                        wordMeaning: "Campo de arroz / Arrozal",
                        sentence: "日本の田舎に田んぼがたくさんあります。(Nihon no inaka ni tanbo ga takusan arimasu)",
                        sentenceMeaning: "Há muitos arrozais no interior do Japão."
                    },
                    {
                        word: "田中さん (tanaka-san)",
                        wordMeaning: "Sr./Sra. Tanaka (Sobrenome comum, lit. Meio do arrozal)",
                        sentence: "田中さんは私の日本語の先生です。(Tanaka-san wa watashi no nihongo no sensei desu)",
                        sentenceMeaning: "O Sr. Tanaka é meu professor de japonês."
                    }
                ]
            },
            {
                character: "天",
                meaning: "Céu / Paraíso / Divino",
                kunyomi: "あまつ (amatsu) / あま- (ama-)",
                onyomi: "テン (TEN)",
                mnemonic: "O espaço infinito e divino que fica acima de uma grande pessoa (大 com um traço extra no topo).",
                examples: [
                    {
                        word: "天気 (tenki - Onyomi)",
                        wordMeaning: "Tempo / Clima (lit. Atmosfera do céu)",
                        sentence: "明日の天気はどうですか？(Ashita no tenki wa dou desu ka?)",
                        sentenceMeaning: "Como estará o tempo amanhã?"
                    },
                    {
                        word: "天国 (tengoku)",
                        wordMeaning: "Paraíso / Céu (lit. País divino)",
                        sentence: "ここは天国のように美しいです。(Koko wa tengoku no you ni utsukushii desu)",
                        sentenceMeaning: "Este lugar é lindo como o paraíso."
                    }
                ]
            },
            {
                character: "気",
                meaning: "Ar / Espírito / Energia / Clima",
                kunyomi: "き (ki) / いき (iki)",
                onyomi: "キ (KI) / ケ (KE)",
                mnemonic: "O vapor ou energia invisível (气) subindo do arroz quente (米), representando a energia vital e o ar.",
                examples: [
                    {
                        word: "元気 (genki)",
                        wordMeaning: "Saudável / Animado / Bem (lit. Energia original)",
                        sentence: "お元気ですか？ はい、元気です！(O-genki desu ka? Hai, genki desu!)",
                        sentenceMeaning: "Como vai você? Sim, estou bem/animado!"
                    },
                    {
                        word: "気持ち (kimochi)",
                        wordMeaning: "Sentimento / Sensação / Humor",
                        sentence: "今日はとても良い気持ちです。(Kyou wa totemo yoi kimochi desu)",
                        sentenceMeaning: "Hoje estou com uma sensação muito boa."
                    }
                ]
            },
            {
                character: "雨",
                meaning: "Chuva",
                kunyomi: "あめ (ame) / あま- (ama-)",
                onyomi: "ウ (UU)",
                mnemonic: "Gotas de água caindo das nuvens no céu vistas através de uma janela.",
                examples: [
                    {
                        word: "雨 (ame - Kunyomi)",
                        wordMeaning: "Chuva",
                        sentence: "雨が降っています。(Ame ga futte imasu)",
                        sentenceMeaning: "Está chovendo. (💡 Gramática: O verbo 「降る - furu」 é usado para chuva ou neve que cai do céu)."
                    },
                    {
                        word: "大雨 (ooame)",
                        wordMeaning: "Chuva forte / Tempestade (lit. Grande chuva)",
                        sentence: "昨日は大雨でした。(Kinou wa ooame deshita)",
                        sentenceMeaning: "Ontem teve uma chuva forte."
                    }
                ]
            },
            {
                character: "空",
                meaning: "Céu / Vazio / Oco",
                kunyomi: "そら (sora) / あ・く (aku) / から (kara)",
                onyomi: "クウ (KUU)",
                mnemonic: "O teto (穴) por onde enxergamos a imensidão e o espaço vazio do céu.",
                examples: [
                    {
                        word: "空 (sora - Kunyomi)",
                        wordMeaning: "Céu",
                        sentence: "青い空に白い雲があります。(Aoi sora ni shiroi kumo ga arimasu)",
                        sentenceMeaning: "Há nuvens brancas no céu azul."
                    },
                    {
                        word: "空港 (kuukou - Onyomi)",
                        wordMeaning: "Aeroporto (lit. Porto do céu)",
                        sentence: "三時に空港へ行きます。(San-ji ni kuukou e ikimasu)",
                        sentenceMeaning: "Vou ao aeroporto às três horas."
                    }
                ]
            },
            {
                character: "花",
                meaning: "Flor",
                kunyomi: "はな (hana) / -ばな (-bana)",
                onyomi: "カ (KA)",
                mnemonic: "O radical de planta no topo (艹) se transformando (化) e desabrocha: uma flor!",
                examples: [
                    {
                        word: "花 (hana - Kunyomi)",
                        wordMeaning: "Flor",
                        sentence: "庭にきれいな花が咲いています。(Niwa ni kirei na hana ga saite imasu)",
                        sentenceMeaning: "As lindas flores estão desabrochando no jardim."
                    },
                    {
                        word: "花火 (hanabi)",
                        wordMeaning: "Fogos de artifício (lit. Flor + Fogo)",
                        sentence: "夏休みに花火を見ました。(Natsuyasumi ni hanabi o mimashita)",
                        sentenceMeaning: "Assisti aos fogos de artifício nas férias de verão. (💡 Conceito visual incrível: Flores de Fogo!)."
                    }
                ]
            },
            {
                character: "犬",
                meaning: "Cachorro / Cão",
                kunyomi: "いぬ (inu)",
                onyomi: "ケン (KEN)",
                mnemonic: "O ideograma de grande (大) com um pequeno traço (gota) representando a orelha ou o focinho de um cachorro.",
                examples: [
                    {
                        word: "犬 (inu - Kunyomi)",
                        wordMeaning: "Cachorro",
                        sentence: "公園に可愛い犬がいます。(Kouen ni kawaii inu ga imasu)",
                        sentenceMeaning: "Há um cachorro fofo no parque. (💡 Gramática N5 CRÍTICA: Para animais e pessoas, usamos 「います」 e nunca 「あります」!)."
                    },
                    {
                        word: "子犬 (koinu)",
                        wordMeaning: "Filhote de cachorro (lit. Criança cão)",
                        sentence: "私の家で子犬を飼っています。(Watashi no ie de koinu o katte imasu)",
                        sentenceMeaning: "Crio um filhote de cachorro em minha casa."
                    }
                ]
            },
            {
                character: "夕",
                meaning: "Tarde / Crepúsculo / Entardecer",
                kunyomi: "ゆう (yuu)",
                onyomi: "セキ (SEKI)",
                mnemonic: "Uma lua crescente (月) parcialmente escondida no horizonte, indicando o cair da tarde.",
                examples: [
                    {
                        word: "夕方 (yuugata)",
                        wordMeaning: "Fim da tarde / Entardecer",
                        sentence: "夕方に涼しい風が吹きます。(Yuugata ni suzushii kaze ga fukimasu)",
                        sentenceMeaning: "Um vento fresco sopra no entardecer."
                    },
                    {
                        word: "夕飯 (yuuhan)",
                        wordMeaning: "Jantar (lit. Refeição da tarde)",
                        sentence: "七時に家族と夕飯を食べます。(Shichi-ji ni kazoku to yuuhan o tabemasu)",
                        sentenceMeaning: "Como o jantar com a família às sete horas."
                    }
                ]
            }
        ],
        quiz: [
            { q: "Como se diz 'montanha' na leitura kunyomi em romaji (山)?", options: ["yama", "kawa", "mori", "sora"], a: "yama", type: "choice" },
            { q: "Como se escreve em romaji o nome da montanha mais famosa do Japão (富士山)?", a: "fujisan", type: "romaji" },
            { q: "Como se diz 'rio' na leitura kunyomi em romaji (川)?", options: ["kawa", "yama", "umi", "ame"], a: "kawa", type: "choice" },
            { q: "O ideograma 田 significa o que em português?", options: ["campo de arroz", "montanha", "floresta", "deserto"], a: "campo de arroz", type: "choice" },
            { q: "Como se diz 'tempo / clima' em romaji (天気)?", a: "tenki", type: "romaji" },
            { q: "O verbo 降る (furu) é usado principalmente para qual fenômeno natural (雨)?", options: ["chuva", "vento", "sol", "calor"], a: "chuva", type: "choice" },
            { q: "Como se diz 'céu' na leitura kunyomi em romaji (空)?", options: ["sora", "ame", "kaze", "yama"], a: "sora", type: "choice" },
            { q: "A palavra 花火 (hanabi - flor + fogo) significa o que em português? (Escreva no plural)", a: "fogos de artificio", type: "romaji" },
            { q: "Como se diz 'cachorro' na leitura kunyomi em romaji (犬)?", options: ["inu", "neko", "tori", "uma"], a: "inu", type: "choice" },
            { q: "Para indicar a existência de seres vivos ou animados, usamos arimasu ou imasu?", options: ["imasu", "arimasu", "desu", "masu"], a: "imasu", type: "choice" }
        ]
    },

    {
        module: 5,
        title: "Módulo 5: Posição, Direção e Espaço",
        description: "Aprenda a navegar pelo mundo! Domine os ideogramas de localização e a estrutura gramatical fundamental para dizer onde pessoas e objetos estão (〜の〜にあります/います).",
        grammar: {
            title: "Localização: ～の + Posição + に あります/います",
            explanation: "Para descrever a posição de algo em relação a um ponto de referência, use a estrutura: [Objeto] は [Referência] の [Posição] に あります/います. Exemplos de posições: 上 (ue - cima), 下 (shita - baixo), 中 (naka - dentro), 外 (soto - fora), 前 (mae - frente), 後ろ (ushiro - atrás), 右 (migi - direita), 左 (hidari - esquerda), 間 (aida - entre), 隣 (tonari - ao lado).",
            example: "本はテーブルの上にあります。猫はいすの下にいます。",
            translation: "O livro está em cima da mesa. O gato está embaixo da cadeira."
        },
        readingText: {
            title: "部屋の中の探し物 (Procurando Coisas no Quarto)",
            japanese: "<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>の<ruby>中<rt>なか</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>と<ruby>眼鏡<rt>めがね</rt></ruby>があります。<ruby>椅子<rt>いす</rt></ruby>の<ruby>下<rt>した</rt></ruby>には<ruby>小<rt>ちい</rt></ruby>さい<ruby>猫<rt>ねこ</rt></ruby>がいます。<ruby>部屋<rt>へや</rt></ruby>の<ruby>外<rt>そと</rt></ruby>から<ruby>母<rt>はは</rt></ruby>の<ruby>声<rt>こえ</rt></ruby>が<ruby>聞<rt>き</rt></ruby>こえます。",
            romaji: "Watashi no heya no naka o mimasu. Tsukue no ue ni hon to megane ga arimasu. Isu no shita ni wa chiisai neko ga imasu. Heya no soto kara haha no koe ga kikoemasu.",
            translation: "Olho para o interior do meu quarto. Em cima da escrivaninha há livros e óculos. Embaixo da cadeira há um gato pequeno. Do lado de fora do quarto consigo ouvir a voz da minha mãe.",
            comprehensionQuiz: [
                {
                    q: "O que está em cima da escrivaninha (机の上)?",
                    options: ["Livros e óculos (本と眼鏡)", "Um gato pequeno", "A bolsa nova", "Comida"],
                    a: "Livros e óculos (本と眼鏡)",
                    type: "choice"
                },
                {
                    q: "Onde está o gato pequeno (小さい猫)?",
                    options: ["Embaixo da cadeira (椅子の下)", "Em cima da escrivaninha", "Fora do quarto", "Atrás da porta"],
                    a: "Embaixo da cadeira (椅子の下)",
                    type: "choice"
                }
            ]
        },
        kanjis: [
            {
                character: "上",
                meaning: "Cima / Sobre / Acima",
                kunyomi: "うえ (ue) / あ・げる (ageru) / あ・がる (agaru)",
                onyomi: "ジョウ (JOU)",
                mnemonic: "Um traço horizontal (o chão) com um ponteiro apontando para CIMA.",
                examples: [
                    {
                        word: "上 (ue - Kunyomi)",
                        wordMeaning: "Cima / Em cima",
                        sentence: "つくえの上がきれいです。(Tsukue no ue ga kirei desu)",
                        sentenceMeaning: "A parte de cima da escrivaninha está limpa."
                    },
                    {
                        word: "上手 (jouzu - Onyomi)",
                        wordMeaning: "Habilidoso / Mandar bem (lit. Mão superior)",
                        sentence: "田中さんは日本語が上手です。(Tanaka-san wa nihongo ga jouzu desu)",
                        sentenceMeaning: "O Sr. Tanaka é muito bom em japonês. (💡 Gramática: Usamos 「が」 antes de 上手 para indicar a habilidade)."
                    }
                ]
            },
            {
                character: "下",
                meaning: "Baixo / Embaixo / Descer",
                kunyomi: "した (shita) / さ・げ・る (sageru) / なが・る (sagaru)",
                onyomi: "カ (KA) / ゲ (GE)",
                mnemonic: "Um traço horizontal (o teto/chão) com um ponteiro apontando para BAIXO.",
                examples: [
                    {
                        word: "下 (shita - Kunyomi)",
                        wordMeaning: "Baixo / Embaixo",
                        sentence: "いすの下に猫がいます。(Isu no shita ni neko ga imasu)",
                        sentenceMeaning: "Há um gato embaixo da cadeira. (💡 Gramática N5: [Lugar] の [Posição] に います)."
                    },
                    {
                        word: "下手 (heta)",
                        wordMeaning: "Ruim / Sem habilidade (lit. Mão inferior)",
                        sentence: "私はテニスが下手です。(Watashi wa tenisu ga heta desu)",
                        sentenceMeaning: "Eu sou ruim em tênis."
                    }
                ]
            },
            {
                character: "中",
                meaning: "Dentro / Meio / Centro",
                kunyomi: "なか (naka)",
                onyomi: "チュウ (CHUU) / ジュウ (JUU)",
                mnemonic: "Uma linha vertical cortando um retângulo bem no MEIO ou DENTRO do alvo.",
                examples: [
                    {
                        word: "中 (naka - Kunyomi)",
                        wordMeaning: "Dentro / Interior",
                        sentence: "かばんの中に本とペンがあります。(Kaban no naka ni hon to pen ga arimasu)",
                        sentenceMeaning: "Há um livro e uma caneta dentro da bolsa."
                    },
                    {
                        word: "一日中 (ichinichijuu)",
                        wordMeaning: "O dia todo / Durante todo o dia",
                        sentence: "昨日は一日中、雨が降りました。(Kinou wa ichinichijuu, ame ga furimashita)",
                        sentenceMeaning: "Ontem choveu o dia todo. (💡 Suffix: Quando lido como 'juu', significa 'durante todo o período')."
                    }
                ]
            },
            {
                character: "外",
                meaning: "Fora / Exterior / Outro",
                kunyomi: "そと (soto) / ほか (hoka)",
                onyomi: "ガイ (GAI)",
                mnemonic: "Uma concha de adivinhação (夕) do lado de fora (卜) de casa à noite.",
                examples: [
                    {
                        word: "外 (soto - Kunyomi)",
                        wordMeaning: "Fora / Lado de fora",
                        sentence: "外はとても寒いです。(Soto wa totemo samui desu)",
                        sentenceMeaning: "Lá fora está muito frio."
                    },
                    {
                        word: "外国 (gaikoku - Onyomi)",
                        wordMeaning: "País estrangeiro (lit. País de fora)",
                        sentence: "来年、外国へ旅行に行きます。(Rainen, gaikoku e ryokou ni ikimasu)",
                        sentenceMeaning: "Ano que vem, vou viajar para o exterior."
                    }
                ]
            },
            {
                character: "右",
                meaning: "Direita",
                kunyomi: "みぎ (migi)",
                onyomi: "ウ (U) / ユウ (YUU)",
                mnemonic: "Uma mão (ナ) levando comida à boca (口) — a mão DIREITA (para a maioria das pessoas).",
                examples: [
                    {
                        word: "右 (migi - Kunyomi)",
                        wordMeaning: "Direita / Lado direito",
                        sentence: "次の角を右に曲がってください。(Tsugi no kado o migi ni magatte kudasai)",
                        sentenceMeaning: "Por favor, vire à direita na próxima esquina."
                    },
                    {
                        word: "右手 (migite)",
                        wordMeaning: "Mão direita",
                        sentence: "右手にペンを持っています。(Migite ni pen o motte imasu)",
                        sentenceMeaning: "Estou segurando a caneta na mão direita."
                    }
                ]
            },
            {
                character: "左",
                meaning: "Esquerda",
                kunyomi: "ひだり (hidari)",
                onyomi: "サ (SA)",
                mnemonic: "Uma mão (ナ) segurando uma régua de trabalho (エ) — a mão ESQUERDA dando suporte.",
                examples: [
                    {
                        word: "左 (hidari - Kunyomi)",
                        wordMeaning: "Esquerda / Lado esquerdo",
                        sentence: "銀行は駅の左にあります。(Ginkou wa eki no hidari ni arimasu)",
                        sentenceMeaning: "O banco fica à esquerda da estação."
                    },
                    {
                        word: "左手 (hidarite)",
                        wordMeaning: "Mão esquerda",
                        sentence: "左手を挙げてください。(Hidarite o agete kudasai)",
                        sentenceMeaning: "Por favor, levante a mão esquerda."
                    }
                ]
            },
            {
                character: "前",
                meaning: "Frente / Antes",
                kunyomi: "まえ (mae)",
                onyomi: "ゼン (ZEN)",
                mnemonic: "Uma faca (刂) cortando algo em cima de um barco/mesa (舟) BEM NA SUA FRENTE.",
                examples: [
                    {
                        word: "前 (mae - Kunyomi)",
                        wordMeaning: "Frente / Antes",
                        sentence: "駅の前に会いましょう。(Eki no mae ni aimashou)",
                        sentenceMeaning: "Vamos nos encontrar na frente da estação."
                    },
                    {
                        word: "名前 (namae)",
                        wordMeaning: "Nome (lit. Antes da fama/marca)",
                        sentence: "あなたの名前は何ですか？(Anata no namae wa nan desu ka?)",
                        sentenceMeaning: "Qual é o seu nome?"
                    }
                ]
            },
            {
                character: "後",
                meaning: "Trás / Depois / Posterior",
                kunyomi: "うし・ろ (ushiro) / あと (ato) / のち (nochi)",
                onyomi: "ゴ (GO) / コウ (KOU)",
                mnemonic: "Caminhar devagar (彳) amarrado por um fio (幺) que te puxa para TRÁS (夂).",
                examples: [
                    {
                        word: "後ろ (ushiro - Kunyomi)",
                        wordMeaning: "Trás / Atrás / Parte traseira",
                        sentence: "私の後ろに犬がいます。(Watashi no ushiro ni inu ga imasu)",
                        sentenceMeaning: "Há um cachorro atrás de mim."
                    },
                    {
                        word: "午後 (gogo - Onyomi)",
                        wordMeaning: "Tarde / P.M. (lit. Depois do meio-dia)",
                        sentence: "午後は図書館で勉強します。(Gogo wa toshokan de benkyou shimasu)",
                        sentenceMeaning: "À tarde, estudarei na biblioteca."
                    }
                ]
            },
            {
                character: "間",
                meaning: "Entre / Espaço / Intervalo",
                kunyomi: "あいだ (aida) / ま (ma)",
                onyomi: "カン (KAN) / ケン (KEN)",
                mnemonic: "A luz do Sol (日) passando ENTRE as frestas de dois portões grandes (門).",
                examples: [
                    {
                        word: "間 (aida - Kunyomi)",
                        wordMeaning: "Entre (dois pontos/objetos) / Intervalo",
                        sentence: "銀行はスーパーと病院の間にあります。(Ginkou wa suupaa to byouin no aida ni arimasu)",
                        sentenceMeaning: "O banco fica entre o supermercado e o hospital. (💡 Gramática N5: A と B の 間に = Entre A e B)."
                    },
                    {
                        word: "時間 (jikan - Onyomi)",
                        wordMeaning: "Tempo / Duração (lit. Intervalo de horas)",
                        sentence: "一時間待ちました。(Ichijikan machimashita)",
                        sentenceMeaning: "Esperei por uma hora (duração de tempo)."
                    }
                ]
            },
            {
                character: "方",
                meaning: "Direção / Lado / Forma de fazer",
                kunyomi: "かた (kata)",
                onyomi: "ホウ (HOU)",
                mnemonic: "A proa de um navio apontando para uma DIREÇÃO específica no mar.",
                examples: [
                    {
                        word: "読み方 (yomikata - Kunyomi)",
                        wordMeaning: "Como ler / Modo de leitura (lit. Direção/forma de ler)",
                        sentence: "この漢字の読み方が分かりません。(Kono kanji no yomikata ga wakarimasen)",
                        sentenceMeaning: "Não sei como ler (a leitura de) este kanji. (💡 Gramática N5: Verbo sem 'masu' + 方 = Como fazer algo)."
                    },
                    {
                        word: "あの方 (ano kata)",
                        wordMeaning: "Aquela pessoa (Forma muito educada/formal de あの人)",
                        sentence: "あの方は誰ですか？(Ano kata wa dare desu ka?)",
                        sentenceMeaning: "Quem é aquela pessoa? (formal)"
                    }
                ]
            }
        ],
        quiz: [
            { q: "Como se diz 'cima / em cima' na leitura kunyomi em romaji (上)?", options: ["ue", "shita", "naka", "soto"], a: "ue", type: "choice" },
            { q: "A palavra 上手 (jouzu) significa que a pessoa é o que em português?", options: ["habilidosa", "ruim", "lenta", "alta"], a: "habilidosa", type: "choice" },
            { q: "Como se diz 'baixo / embaixo' na leitura kunyomi em romaji (下)?", options: ["shita", "ue", "mae", "ushiro"], a: "shita", type: "choice" },
            { q: "Qual palavra em romaji é o oposto de jouzu, significando 'ruim / sem habilidade' (下手)?", a: "heta", type: "romaji" },
            { q: "Como se diz 'dentro / interior / meio' em romaji (中)?", options: ["naka", "soto", "migi", "hidari"], a: "naka", type: "choice" },
            { q: "Como se diz 'fora / lado de fora' em romaji (外)?", options: ["soto", "naka", "ue", "shita"], a: "soto", type: "choice" },
            { q: "Como se diz o lado 'direita' na leitura kunyomi em romaji (右)?", options: ["migi", "hidari", "mae", "ushiro"], a: "migi", type: "choice" },
            { q: "Como se diz o lado 'esquerda' na leitura kunyomi em romaji (左)?", options: ["hidari", "migi", "soto", "naka"], a: "hidari", type: "choice" },
            { q: "Como se diz 'frente / antes' na leitura kunyomi em romaji (前)?", a: "mae", type: "romaji" },
            { q: "Como se diz 'atrás / parte traseira' em romaji (後ろ)?", a: "ushiro", type: "romaji" }
        ]
    },

    {
        module: 6,
        title: "Módulo 6: Pessoas, Relações e Família",
        description: "Domine o vocabulário humano do N5 e a regra de ouro cultural de 'Uchi vs. Soto' (família própria vs. família alheia), além dos pronomes e contadores de pessoas.",
        grammar: {
            title: "Posse e Relação: の (Partícula de Posse e Ligação)",
            explanation: "A partícula の (no) é multifuncional no N5: (1) Indica POSSE como 'de': 私の本 = meu livro (lit. livro de mim); 田中さんの家族 = família do Sr. Tanaka. (2) Liga substantivos descrevendo o tipo: 女の人 = mulher (lit. pessoa do tipo mulher). (3) Substitui um substantivo já mencionado (pronome): この本は私のです = Este livro é meu. Note a diferença cultural: use vocabulário humilde para sua própria família (父 chichi) e respeitoso para a família alheia (お父さん otousan).",
            example: "これは私の家族の写真です。左が父で、右が母です。",
            translation: "Esta é uma foto da minha família. À esquerda é meu pai e à direita é minha mãe."
        },
        readingText: {
            title: "私の家族と写真 (Minha Família e a Foto)",
            japanese: "これは<ruby>私<rt>わたし</rt></ruby>の<ruby>家族<rt>かぞく</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>です。<ruby>父<rt>ちち</rt></ruby>と<ruby>母<rt>はは</rt></ruby>、そして<ruby>子<rt>こ</rt></ruby>どもが<ruby>二人<rt>ふたり</rt></ruby>います。<ruby>男<rt>おとこ</rt></ruby>の<ruby>子<rt>こ</rt></ruby>は<ruby>手<rt>て</rt></ruby>を<ruby>挙<rt>あ</rt></ruby>げていて、<ruby>女<rt>おんな</rt></ruby>の<ruby>子<rt>こ</rt></ruby>は<ruby>口<rt>くち</rt></ruby>を<ruby>開<rt>あ</rt></ruby>けて<ruby>笑<rt>わら</rt></ruby>っています。",
            romaji: "Kore wa watashi no kazoku no shashin desu. Chichi to haha, soshite kodomo ga futari imasu. Otoko no ko wa te o agete ite, onna no ko wa kuchi o akete waratte imasu.",
            translation: "Esta é uma foto da minha família. Há meu pai, minha mãe e duas crianças. O menino está levantando a mão e a menina está sorrindo com a boca aberta.",
            comprehensionQuiz: [
                {
                    q: "Quantas crianças (子ども) aparecem na foto de família?",
                    options: ["Duas pessoas (二人)", "Uma pessoa (一人)", "Três pessoas (三人)", "Quatro pessoas (四人)"],
                    a: "Duas pessoas (二人)",
                    type: "choice"
                },
                {
                    q: "O que o menino (男の子) está fazendo na foto?",
                    options: ["Levantando a mão (手を挙げている)", "Comendo um bolo", "Dormindo", "Correndo"],
                    a: "Levantando a mão (手を挙げている)",
                    type: "choice"
                }
            ]
        },
        kanjis: [
            {
                character: "人",
                meaning: "Pessoa / Ser humano",
                kunyomi: "ひと (hito)",
                onyomi: "ジン (JIN) / ニン (NIN)",
                mnemonic: "Duas pernas caminhando juntas, ou duas pessoas se apoiando para ficarem em pé.",
                examples: [
                    {
                        word: "人 (hito - Kunyomi)",
                        wordMeaning: "Pessoa",
                        sentence: "あそこに知らない人がいます。(Asoko ni shiranai hito ga imasu)",
                        sentenceMeaning: "Há uma pessoa desconhecida ali."
                    },
                    {
                        word: "日本人 (nihonjin - Onyomi)",
                        wordMeaning: "Japonês / Cidadão japonês (lit. Pessoa do Japão)",
                        sentence: "田中さんは日本人です。(Tanaka-san wa nihonjin desu)",
                        sentenceMeaning: "O Sr. Tanaka é japonês. (💡 Gramática N5: [País] + 人 = Nacionalidade)."
                    },
                    {
                        word: "三人 (sannin - Onyomi)",
                        wordMeaning: "Três pessoas",
                        sentence: "私の家族は三人です。(Watashi no kazoku wa sannin desu)",
                        sentenceMeaning: "Minha família tem três pessoas. (💡 Exceção de contagem: 1 pessoa é 一人 'hitori', 2 pessoas é 二人 'futari', de 3 em diante usa-se '-nin')."
                    }
                ]
            },
            {
                character: "子",
                meaning: "Criança / Filhote / Pequeno",
                kunyomi: "こ (ko)",
                onyomi: "シ (SHI) / ス (SU)",
                mnemonic: "O desenho de um bebê envolto em cobertores abrindo os bracinhos.",
                examples: [
                    {
                        word: "子供 (kodomo)",
                        wordMeaning: "Criança / Filhos",
                        sentence: "公園で子供たちが遊んでいます。(Kouen de kodomo-tachi ga asonde imasu)",
                        sentenceMeaning: "As crianças estão brincando no parque. (💡 Suffix: 「〜たち -tachi」 indica plural para pessoas)."
                    },
                    {
                        word: "女の子 (onna no ko)",
                        wordMeaning: "Menina / Garota (lit. Criança de mulher)",
                        sentence: "あそこの女の子は誰ですか？(Asoko no onna no ko wa dare desu ka?)",
                        sentenceMeaning: "Quem é aquela menina ali?"
                    }
                ]
            },
            {
                character: "女",
                meaning: "Mulher / Feminino",
                kunyomi: "おんな (onna) / め (me)",
                onyomi: "ジョ (JO)",
                mnemonic: "Uma mulher sentada graciosamente com as pernas cruzadas na tradição antiga.",
                examples: [
                    {
                        word: "女の人 (onna no hito)",
                        wordMeaning: "Mulher (lit. Pessoa mulher - forma educada)",
                        sentence: "きれいな女の人が歩いています。(Kirei na onna no hito ga aruite imasu)",
                        sentenceMeaning: "Uma mulher bonita está caminhando. (💡 Dica de ouro: Dizer apenas 'onna' pode soar rude; use sempre 'onna no hito')."
                    },
                    {
                        word: "彼女 (kanojo - Onyomi)",
                        wordMeaning: "Ela / Namorada",
                        sentence: "彼女は大学生です。(Kanojo wa daigakusei desu)",
                        sentenceMeaning: "Ela é universitária."
                    }
                ]
            },
            {
                character: "男",
                meaning: "Homem / Masculino",
                kunyomi: "おとこ (otoko)",
                onyomi: "ダン (DAN) / ナン (NAN)",
                mnemonic: "A força / braço (力) trabalhando duro no campo de arroz (田): o Homem!",
                examples: [
                    {
                        word: "男の人 (otoko no hito)",
                        wordMeaning: "Homem (lit. Pessoa homem - forma educada)",
                        sentence: "あの男の人は先生です。(Ano otoko no hito wa sensei desu)",
                        sentenceMeaning: "Aquele homem é professor."
                    },
                    {
                        word: "男の子 (otoko no ko)",
                        wordMeaning: "Menino / Garoto (lit. Criança de homem)",
                        sentence: "男の子が元気によく走ります。(Otoko no ko ga genki ni yoku hashirimasu)",
                        sentenceMeaning: "O menino corre bastante com energia."
                    }
                ]
            },
            {
                character: "父",
                meaning: "Pai",
                kunyomi: "ちち (chichi)",
                onyomi: "フ (FU)",
                mnemonic: "Duas mãos segurando dois machados de pedra ou varas para proteger e guiar a família.",
                examples: [
                    {
                        word: "父 (chichi - Kunyomi)",
                        wordMeaning: "Meu pai (quando você fala do seu pai para outras pessoas)",
                        sentence: "私の父は医者です。(Watashi no chichi wa isha desu)",
                        sentenceMeaning: "Meu pai é médico. (💡 Regra Uchi vs. Soto: Use 'chichi' para seu próprio pai em conversas com terceiros)."
                    },
                    {
                        word: "お父さん (otousan)",
                        wordMeaning: "Pai dos outros / Papai (falar diretamente com ele)",
                        sentence: "お父さん、お仕事はお疲れ様です。(Otousan, oshigoto wa otsukaresama desu)",
                        sentenceMeaning: "Papai, bom descanso do trabalho!"
                    }
                ]
            },
            {
                character: "母",
                meaning: "Mãe",
                kunyomi: "はは (haha)",
                onyomi: "ボ (BO)",
                mnemonic: "O ideograma de mulher (女) com dois pontos no peito, representando a amamentação e a maternidade.",
                examples: [
                    {
                        word: "母 (haha - Kunyomi)",
                        wordMeaning: "Minha mãe (quando você fala da sua mãe para outras pessoas)",
                        sentence: "母は料理がとても上手です。(Haha wa ryouri ga totemo jouzu desu)",
                        sentenceMeaning: "Minha mãe cozinha muito bem."
                    },
                    {
                        word: "お母さん (okaasan)",
                        wordMeaning: "Mãe dos outros / Mamãe (falar diretamente com ela)",
                        sentence: "田中さんのお母さんは優しいです。(Tanaka-san no okaasan wa yasashii desu)",
                        sentenceMeaning: "A mãe do Sr. Tanaka é gentil."
                    }
                ]
            },
            {
                character: "兄",
                meaning: "Irmão mais velho",
                kunyomi: "あに (ani)",
                onyomi: "キョウ (KYOU) / ケイ (KEI)",
                mnemonic: "Uma boca (口) em cima de pernas humanas (儿): o irmão que fala e orienta os mais novos.",
                examples: [
                    {
                        word: "兄 (ani - Kunyomi)",
                        wordMeaning: "Meu irmão mais velho",
                        sentence: "兄は東京に住んでいます。(Ani wa Toukyou ni sunde imasu)",
                        sentenceMeaning: "Meu irmão mais velho mora em Tóquio."
                    },
                    {
                        word: "お兄さん (oniisan)",
                        wordMeaning: "Irmão mais velho dos outros / Rapaz jovem",
                        sentence: "お兄さんは何歳ですか？(Oniisan wa nansai desu ka?)",
                        sentenceMeaning: "Quantos anos tem o seu irmão mais velho?"
                    }
                ]
            },
            {
                character: "弟",
                meaning: "Irmão mais novo",
                kunyomi: "おとうと (otouto)",
                onyomi: "テイ (TEI) / ダイ (DAI)",
                mnemonic: "Uma corda enrolada em um bastão em ordem: o irmão que vem em seguida (abaixo) na ordem familiar.",
                examples: [
                    {
                        word: "弟 (otouto - Kunyomi)",
                        wordMeaning: "Meu irmão mais novo",
                        sentence: "私の弟はゲームが大好きです。(Watashi no otouto wa geemu ga daisuki desu)",
                        sentenceMeaning: "Meu irmão mais novo adora jogos."
                    },
                    {
                        word: "兄弟 (kyoudai - Onyomi)",
                        wordMeaning: "Irmãos (lit. Irmão velho + Irmão novo)",
                        sentence: "あなたには兄弟がいますか？(Anata ni wa kyoudai ga imasu ka?)",
                        sentenceMeaning: "Você tem irmãos?"
                    }
                ]
            },
            {
                character: "友",
                meaning: "Amigo / Companheiro",
                kunyomi: "とも (tomo)",
                onyomi: "ユウ (YUU)",
                mnemonic: "Duas mãos (ナ e 又) dadas em um aperto de mão de apoio mútuo.",
                examples: [
                    {
                        word: "友達 (tomodachi)",
                        wordMeaning: "Amigo / Amigos",
                        sentence: "週末に友達と買い物に行きます。(Shuumatsu ni tomodachi to kaimono ni ikimasu)",
                        sentenceMeaning: "No fim de semana, vou fazer compras com um amigo. (💡 Gramática N5: A partícula 「と」 indica companhia = COM o amigo)."
                    },
                    {
                        word: "親友 (shinyuu - Onyomi)",
                        wordMeaning: "Melhor amigo / Amigo íntimo",
                        sentence: "彼は私の親友です。(Kare wa watashi no shinyuu desu)",
                        sentenceMeaning: "Ele é meu melhor amigo."
                    }
                ]
            },
            {
                character: "私",
                meaning: "Eu / Privado / Particular",
                kunyomi: "わたし (watashi) / わたくし (watakushi)",
                onyomi: "シ (SHI)",
                mnemonic: "O trigo/colheita (禾) que pertence ao meu espaço próprio (ム): a minha propriedade, EU.",
                examples: [
                    {
                        word: "私 (watashi - Kunyomi)",
                        wordMeaning: "Eu (pronome pessoal padrão)",
                        sentence: "私は日本の文化が好きです。(Watashi wa Nihon no bunka ga suki desu)",
                        sentenceMeaning: "Eu gosto da cultura japonesa."
                    },
                    {
                        word: "私立 (shiritsu - Onyomi)",
                        wordMeaning: "Privado / Particular (lit. Estabelecido por particulares)",
                        sentence: "私の妹は私立の学校に行きます。(Watashi no imouto wa shiritsu no gakkou ni ikimasu)",
                        sentenceMeaning: "Minha irmã mais nova vai para uma escola particular."
                    }
                ]
            }
        ],
        quiz: [
            { q: "Como se diz 'pessoa' na leitura kunyomi em romaji (人)?", options: ["hito", "ko", "otoko", "onna"], a: "hito", type: "choice" },
            { q: "Como se diz a nacionalidade 'japonês' em romaji (日本人)?", a: "nihonjin", type: "romaji" },
            { q: "Como se diz a quantidade 'três pessoas' em romaji (三人)?", options: ["sannin", "futari", "hitori", "yonin"], a: "sannin", type: "choice" },
            { q: "Como se diz 'criança' em romaji (子供)?", options: ["kodomo", "otona", "tomodachi", "kazoku"], a: "kodomo", type: "choice" },
            { q: "Qual é a forma educada em romaji para dizer 'mulher' (女の人)?", a: "onna no hito", type: "romaji" },
            { q: "Qual é a forma educada em romaji para dizer 'homem' (男の人)?", a: "otoko no hito", type: "romaji" },
            { q: "Pela regra de Uchi vs. Soto, como você chama o seu PRÓPRIO pai ao falar com terceiros, em romaji (父)?", options: ["chichi", "otousan", "haha", "okaasan"], a: "chichi", type: "choice" },
            { q: "Como você se refere à mãe de outra pessoa (ou fala diretamente com a sua mamãe), em romaji (お母さん)?", a: "okaasan", type: "romaji" },
            { q: "Como se diz o seu próprio 'irmão mais velho' em romaji (兄)?", options: ["ani", "otouto", "ane", "imouto"], a: "ani", type: "choice" },
            { q: "Como se diz 'amigo' em romaji (友達)?", a: "tomodachi", type: "romaji" }
        ]
    },

    {
        module: 7,
        title: "Módulo 7: Verbos de Ação e Movimento",
        description: "Coloque o idioma em movimento! Domine os principais ideogramas de ação do N5 e aprenda a conectar verbos às partículas essenciais do dia a dia: 「を」 (objeto direto), 「へ/に」 (direção) e 「で」 (local da ação).",
        grammar: {
            title: "Partículas de Ação: を / へ・に / で (Objeto / Destino / Local)",
            explanation: "As três partículas de ação mais importantes do N5: を (o): marca o OBJETO DIRETO que recebe a ação → 本を読みます (leio o livro). へ ou に (e / ni): indica o DESTINO ou DIREÇÃO do movimento → 学校へ行きます (vou à escola). で (de): indica o LOCAL onde uma ação dinâmica acontece → 図書館で勉強します (estudo na biblioteca). ATENÇÃO: に para estado/existência, で para ação ativa. Forma do passado: -ます → -ました.",
            example: "図書館で日本語の本を読みました。来週、東京へ行きます。",
            translation: "Li um livro em japonês na biblioteca. Na semana que vem, vou a Tóquio."
        },
        readingText: {
            title: "図書室での一日 (Um Dia na Sala de Leitura)",
            japanese: "<ruby>私<rt>わたし</rt></ruby>は<ruby>昨日<rt>きのう</rt></ruby>、<ruby>学校<rt>がっこう</rt></ruby>の<ruby>図書室<rt>としょしつ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。<ruby>友<rt>とも</rt></ruby>だちと<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んで、<ruby>新<rt>あたら</rt></ruby>しい<ruby>漢字<rt>かんじ</rt></ruby>を<ruby>書<rt>か</rt></ruby>きました。<ruby>昼<rt>ひる</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べたあと、<ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んで<ruby>帰<rt>かえ</rt></ruby>りました。",
            romaji: "Watashi wa kinou, gakkou no toshoshitsu e ikimashita. Tomodachi to issho ni hon o yonde, atarashii kanji o kakimashita. Hirugohan o tabeta ato, mizu o nonde kaerimashita.",
            translation: "Ontem fui à sala de leitura da escola. Junto com meu amigo, li um livro e escrevi novos kanjis. Depois de almoçar, bebi água e voltei para casa.",
            comprehensionQuiz: [
                {
                    q: "Aonde a pessoa foi ontem (昨日)?",
                    options: ["À sala de leitura da escola (学校の図書室)", "Ao parque", "Ao hospital", "À praia"],
                    a: "À sala de leitura da escola (学校の図書室)",
                    type: "choice"
                },
                {
                    q: "O que a pessoa fez depois de almoçar (昼ご飯を食べたあと)?",
                    options: ["Beteu água e voltou para casa (水を飲んで帰った)", "Comprou um livro", "Dormiu na escola", "Jogou futebol"],
                    a: "Beteu água e voltou para casa (水を飲んで帰った)",
                    type: "choice"
                }
            ]
        },
        kanjis: [
            {
                character: "行",
                meaning: "Ir / Conduta / Linha",
                kunyomi: "い・く (iku) / ゆ・く (yuku) / おこな・う (okonau)",
                onyomi: "コウ (KOU) / ギョウ (GYOU)",
                mnemonic: "O desenho de um cruzamento de estradas, representando os passos de quem vai para algum lugar.",
                examples: [
                    {
                        word: "行きます (ikimasu - Kunyomi)",
                        wordMeaning: "Ir (Forma polida)",
                        sentence: "来月、友達と日本へ行きます。(Raigetsu, tomodachi to Nihon e ikimasu)",
                        sentenceMeaning: "Mês que vem, vou para o Japão com um amigo. (💡 Gramática N5: A partícula 「へ」 - lida como 'e' - indica a direção/destino do movimento)."
                    },
                    {
                        word: "銀行 (ginkou - Onyomi)",
                        wordMeaning: "Banco (lit. Instituição/Linha do ouro/prata)",
                        sentence: "駅の前に銀行があります。(Eki no mae ni ginkou ga arimasu)",
                        sentenceMeaning: "Há um banco na frente da estação."
                    }
                ]
            },
            {
                character: "見",
                meaning: "Ver / Olhar / Assistir",
                kunyomi: "み・る (miru) / み・える (mieru) / み・せる (miseru)",
                onyomi: "ケン (KEN)",
                mnemonic: "Um grande olho (目) em cima de um par de pernas (儿), caminhando para ver o mundo.",
                examples: [
                    {
                        word: "見ます (mimasu - Kunyomi)",
                        wordMeaning: "Ver / Assistir / Olhar",
                        sentence: "毎日、夜にテレビを見ます。(Mainichi, yoru ni terebi o mimasu)",
                        sentenceMeaning: "Todos os dias, assisto TV à noite. (💡 Gramática N5: A partícula 「を」 - lida como 'o' - marca o objeto direto que está sendo visto/assistido)."
                    },
                    {
                        word: "意見 (iken - Onyomi)",
                        wordMeaning: "Opinião / Ponto de vista (lit. Ideia da visão)",
                        sentence: "あなたの意見を聞かせてください。(Anata no iken o kikasete kudasai)",
                        sentenceMeaning: "Por favor, deixe-me ouvir a sua opinião."
                    }
                ]
            },
            {
                character: "食",
                meaning: "Comer / Comida / Refeição",
                kunyomi: "た・べる (taberu) / く・う (kuu)",
                onyomi: "ショク (SHOKU)",
                mnemonic: "Uma pessoa debaixo de um telhado juntando coisas boas na boca para se alimentar.",
                examples: [
                    {
                        word: "食べます (tabemasu - Kunyomi)",
                        wordMeaning: "Comer",
                        sentence: "レストランで寿司を食べます。(Resutoran de sushi o tabemasu)",
                        sentenceMeaning: "Como sushi no restaurante. (💡 Gramática N5 CRÍTICA: A partícula 「で」 indica o LOCAL onde uma ação dinâmica acontece!)."
                    },
                    {
                        word: "食べ物 (tabemono)",
                        wordMeaning: "Comida / Alimento (lit. Coisa de comer)",
                        sentence: "日本の食べ物はとても美味しいです。(Nihon no tabemono wa totemo oishii desu)",
                        sentenceMeaning: "A comida japonesa é muito gostosa."
                    }
                ]
            },
            {
                character: "飲",
                meaning: "Beber / Engolir",
                kunyomi: "の・む (nomu)",
                onyomi: "イン (IN)",
                mnemonic: "O radical de comida (食) ao lado de uma pessoa abrindo a boca (欠) para engolir um líquido.",
                examples: [
                    {
                        word: "飲みます (nomimasu - Kunyomi)",
                        wordMeaning: "Beber / Tomar",
                        sentence: "毎朝、カフェでコーヒーを飲みます。(Maiasa, kafe de koohii o nomimasu)",
                        sentenceMeaning: "Toda manhã, tomo café na cafeteria."
                    },
                    {
                        word: "飲み物 (nomimono)",
                        wordMeaning: "Bebida (lit. Coisa de beber)",
                        sentence: "冷たい飲み物が欲しいです。(Tsumetai nomimono ga hoshii desu)",
                        sentenceMeaning: "Quero uma bebida gelada."
                    }
                ]
            },
            {
                character: "聞",
                meaning: "Ouvir / Escutar / Perguntar",
                kunyomi: "き・く (kiku) / き・こえる (kikoeru)",
                onyomi: "ブン (BUN) / モン (MON)",
                mnemonic: "Uma orelha (耳) posicionada exatamente entre as portas de um portão (門), escutando os sons e notícias que vêm de fora.",
                examples: [
                    {
                        word: "聞きます (kikimasu - Kunyomi)",
                        wordMeaning: "Ouvir / Escutar / Perguntar",
                        sentence: "部屋で音楽を聞きます。(Heya de ongaku o kikimasu)",
                        sentenceMeaning: "Ouço música no quarto. (💡 Dica: Esse verbo também serve para 'perguntar' a alguém: 先生に聞きます = Perguntar ao professor)."
                    },
                    {
                        word: "新聞 (shinbun - Onyomi)",
                        wordMeaning: "Jornal (lit. Ouvir coisas novas)",
                        sentence: "父は毎朝、新聞を読みます。(Chichi wa maiasa, shinbun o yomimasu)",
                        sentenceMeaning: "Meu pai lê o jornal todas as manhãs."
                    }
                ]
            },
            {
                character: "読",
                meaning: "Ler",
                kunyomi: "よ・む (yomu)",
                onyomi: "ドク (DOKU)",
                mnemonic: "O radical de palavra/falar (言) ao lado de alguém explicando ou vendendo ideias (売), ou seja, decifrando as palavras: Ler!",
                examples: [
                    {
                        word: "読みます (yomimasu - Kunyomi)",
                        wordMeaning: "Ler",
                        sentence: "図書館で面白い本を読みました。(Toshokan de omoshiroi hon o yomimashita)",
                        sentenceMeaning: "Li um livro interessante na biblioteca. (💡 Tempo Verbal: O sufixo 「〜ました -mashita」 transforma o verbo no passado!)."
                    },
                    {
                        word: "読書 (dokusho - Onyomi)",
                        wordMeaning: "Leitura / Hábito de ler livros",
                        sentence: "私の趣味は読書です。(Watashi no shumi wa dokusho desu)",
                        sentenceMeaning: "Meu hobby é a leitura."
                    }
                ]
            },
            {
                character: "書",
                meaning: "Escrever / Livro / Documento",
                kunyomi: "か・く (kaku)",
                onyomi: "ショ (SHO)",
                mnemonic: "Uma mão segurando firme um pincel em cima de uma folha de papel, traçando linhas para escrever.",
                examples: [
                    {
                        word: "書きます (kakimasu - Kunyomi)",
                        wordMeaning: "Escrever / Desenhar",
                        sentence: "ペンで手紙を書きます。(Pen de tegami o kakimasu)",
                        sentenceMeaning: "Escrevo uma carta com a caneta. (💡 Gramática N5: A partícula 「で」 aqui indica o INSTRUMENTO/MEIO usado para fazer a ação!)."
                    },
                    {
                        word: "辞書 (jisho - Onyomi)",
                        wordMeaning: "Dicionário (lit. Livro/escrita de palavras)",
                        sentence: "分からない言葉を辞書で調べます。(Wakaranai kotoba o jisho de shirabemasu)",
                        sentenceMeaning: "Pesquiso as palavras que não conheço no dicionário."
                    }
                ]
            },
            {
                character: "言",
                meaning: "Dizer / Palavra / Falar",
                kunyomi: "い・う (iu) / こと (koto)",
                onyomi: "ゲン (GEN) / ゴン (GON)",
                mnemonic: "Linhas representando palavras e ondas sonoras saindo da boca (口) de uma pessoa.",
                examples: [
                    {
                        word: "言います (iimasu - Kunyomi)",
                        wordMeaning: "Dizer / Chamar-se",
                        sentence: "彼は「おはよう」と言いました。(Kare wa 'ohayou' to iimashita)",
                        sentenceMeaning: "Ele disse 'bom dia'. (💡 Gramática N5: A partícula 「と」 antes de iimasu funciona como as aspas de uma citação direta)."
                    },
                    {
                        word: "言葉 (kotoba)",
                        wordMeaning: "Palavra / Idioma / Frase (lit. Folhas da fala)",
                        sentence: "日本語の言葉をたくさん覚えたいです。(Nihongo no kotoba o takusan oboetai desu)",
                        sentenceMeaning: "Quero memorizar muitas palavras em japonês."
                    }
                ]
            },
            {
                character: "話",
                meaning: "Falar / Conversar / História",
                kunyomi: "はな・す (hanasu) / はなし (hanashi)",
                onyomi: "ワ (WA)",
                mnemonic: "A palavra (言) sendo usada ativamente com a língua (舌) para conversar com alguém ou contar um causo.",
                examples: [
                    {
                        word: "話します (hanashimasu - Kunyomi)",
                        wordMeaning: "Falar / Conversar (um idioma ou com alguém)",
                        sentence: "家で家族と日本語を話します。(Ie de kazoku to nihongo o hanashimasu)",
                        sentenceMeaning: "Falo japonês com minha família em casa."
                    },
                    {
                        word: "電話 (denwa - Onyomi)",
                        wordMeaning: "Telefone / Chamada (lit. Fala elétrica)",
                        sentence: "後で友達に電話をかけます。(Atode tomodachi ni denwa o kakemasu)",
                        sentenceMeaning: "Mais tarde, vou ligar (fazer uma chamada de telefone) para um amigo."
                    }
                ]
            },
            {
                character: "出",
                meaning: "Sair / Tirar / Partir",
                kunyomi: "で・る (deru) / だ・す (dasu)",
                onyomi: "シュツ (SHUTSU)",
                mnemonic: "Uma planta brotando e saindo com força para fora da terra, crescendo para cima.",
                examples: [
                    {
                        word: "出ます (demasu - Kunyomi)",
                        wordMeaning: "Sair / Partir / Aparecer",
                        sentence: "朝八時に家を出ます。(Asa hachi-ji ni ie o demasu)",
                        sentenceMeaning: "Saio de casa às oito da manhã. (💡 Exceção de Partícula: Usamos 「を」 com o verbo Sair para indicar o local de onde você se retira!)."
                    },
                    {
                        word: "出口 (deguchi)",
                        wordMeaning: "Saída (lit. Boca de sair)",
                        sentence: "駅の出口はどこですか？(Eki no deguchi wa doko desu ka?)",
                        sentenceMeaning: "Onde fica a saída da estação? (💡 Antônimo: Entrada é 入口 - iriguchi)."
                    }
                ]
            }
        ],
        quiz: [
            { q: "Qual partícula (escrita como 'he' em hiragana) indica a direção ou destino de um movimento em romaji?", options: ["e", "ni", "de", "o"], a: "e", type: "choice" },
            { q: "Como se escreve o verbo 'ir' na forma polida do presente em romaji (行きます)?", a: "ikimasu", type: "romaji" },
            { q: "Como se escreve o verbo 'ver / assistir' na forma polida em romaji (見ます)?", options: ["mimasu", "ikimasu", "tabemasu", "kikimasu"], a: "mimasu", type: "choice" },
            { q: "Qual partícula em romaji marca o local onde uma AÇÃO dinâmica está acontecendo?", options: ["de", "ni", "e", "o"], a: "de", type: "choice" },
            { q: "Como se escreve o verbo 'comer' na forma polida em romaji (食べます)?", a: "tabemasu", type: "romaji" },
            { q: "Como se escreve o verbo 'beber' na forma polida em romaji (飲みます)?", options: ["nomimasu", "tabemasu", "yomimasu", "kakimasu"], a: "nomimasu", type: "choice" },
            { q: "Qual partícula (lida como 'o') marca o objeto direto que sofre uma ação?", options: ["o", "ni", "de", "e"], a: "o", type: "choice" },
            { q: "Qual terminação verbal em romaji transforma um verbo polido (-masu) para o tempo passado?", a: "mashita", type: "romaji" },
            { q: "Como se escreve o verbo 'escrever' na forma polida em romaji (書きます)?", options: ["kakimasu", "yomimasu", "hanashimasu", "iimasu"], a: "kakimasu", type: "choice" },
            { q: "Como se escreve o verbo 'falar / conversar' na forma polida em romaji (話します)?", a: "hanashimasu", type: "romaji" }
        ]
    },

    {
        module: 8,
        title: "Módulo 8: Adjetivos e Qualidades N5",
        description: "Deixe o seu japonês muito mais expressivo! Domine os pares de adjetivos opostos mais essenciais do N5 (grande/pequeno, novo/velho, alto/barato), as cores fundamentais e a regra de modificação de substantivos.",
        grammar: {
            title: "Adjetivos い vs. な: Conjugação e Modificação de Substantivos",
            explanation: "O japonês tem dois tipos de adjetivos com regras distintas. ADJETIVOS-い (terminam em い): conectam direto ao substantivo → 大きいいえ (casa grande); negativa: 大きくない (não é grande); passado: 大きかった (era grande). ADJETIVOS-な (originalmente substantivos): precisam de な antes do substantivo → 有名な人 (pessoa famosa); negativa: 有名ではない; passado: 有名だった. Para comparações no N5: A は B より [Adjetivo] です (A é mais [adj] que B); A と B と どちらが [Adj] ですか (Qual dos dois, A ou B, é mais [adj]?).",
            example: "新しい車より古い自転車のほうが好きです。白い猫はとても小さくて可愛いです。",
            translation: "Prefiro a bicicleta velha ao carro novo. O gato branco é muito pequeno e fofo."
        },
        readingText: {
            title: "新しい鞄と買い物 (A Bolsa Nova e as Compras)",
            japanese: "<ruby>私<rt>わたし</rt></ruby>は<ruby>昨日<rt>きのう</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しい<ruby>赤<rt>あか</rt></ruby>い<ruby>鞄<rt>かばん</rt></ruby>を<ruby>買<rt>か</rt></ruby>いました。<ruby>前<rt>まえ</rt></ruby>の<ruby>鞄<rt>かばん</rt></ruby>は<ruby>古<rt>ふる</rt></ruby>くて<ruby>小<rt>ちい</rt></ruby>さかったです。<ruby>新<rt>あたら</rt></ruby>しい<ruby>鞄<rt>かばん</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きくて、とても<ruby>安<rt>やす</rt></ruby>かったです。<ruby>白<rt>しろ</rt></ruby>い<ruby>服<rt>ふく</rt></ruby>にも<ruby>合<rt>あ</rt></ruby>います。",
            romaji: "Watashi wa kinou, atarashii akai kaban o kaimashita. Mae no kaban wa furukute chiisakatta desu. Atarashii kaban wa ookikute, totemo yasukatta desu. Shiroi fuku ni mo aimasu.",
            translation: "Ontem comprei uma bolsa vermelha nova. A bolsa anterior era velha e pequena. A bolsa nova é grande e foi muito barata. Combina também com roupas brancas.",
            comprehensionQuiz: [
                {
                    q: "Como era a bolsa antiga (前の鞄)?",
                    options: ["Velha e pequena (古くて小さい)", "Nova e grande (新しくて大きい)", "Cara e vermelha (高くて赤い)", "Branca e comprida (白くて長い)"],
                    a: "Velha e pequena (古くて小さい)",
                    type: "choice"
                },
                {
                    q: "Qual era a cor da nova bolsa comprada ontem (新しい鞄)?",
                    options: ["Vermelha (赤い)", "Branca (白い)", "Azul (青い)", "Preta (黒い)"],
                    a: "Vermelha (赤い)",
                    type: "choice"
                }
            ]
        },
        kanjis: [
            {
                character: "大",
                meaning: "Grande / Amplo / Muito",
                kunyomi: "おお・きい (ookii) / おお- (oo-)",
                onyomi: "ダイ (DAI) / タイ (TAI)",
                mnemonic: "Uma pessoa (人) abrindo os braços e as pernas o máximo possível para mostrar o quão GRANDE algo é.",
                examples: [
                    {
                        word: "大きい (ookii - Kunyomi)",
                        wordMeaning: "Grande",
                        sentence: "これはとても大きい犬です。(Kore wa totemo ookii inu desu)",
                        sentenceMeaning: "Este é um cachorro muito grande. (💡 Gramática N5: Adjetivos terminados em 「〜い」 se conectam diretamente na frente do substantivo!)."
                    },
                    {
                        word: "大学 (daigaku - Onyomi)",
                        wordMeaning: "Universidade / Faculdade (lit. Grande escola)",
                        sentence: "兄は東京の大学で勉強しています。(Ani wa Toukyou no daigaku de benkyou shite imasu)",
                        sentenceMeaning: "Meu irmão mais velho estuda em uma universidade de Tóquio."
                    }
                ]
            },
            {
                character: "小",
                meaning: "Pequeno / Menor",
                kunyomi: "ちい・さい (chiisai) / こ- (ko-) / お- (o-)",
                onyomi: "ショウ (SHOU)",
                mnemonic: "Uma linha vertical cortada ao meio com dois pequenos pedaços (gotas) caindo dos lados: algo PEQUENO.",
                examples: [
                    {
                        word: "小さい (chiisai - Kunyomi)",
                        wordMeaning: "Pequeno/a",
                        sentence: "小さい猫がいすの下にいます。(Chiisai neko ga isu no shita ni imasu)",
                        sentenceMeaning: "Há um gato pequeno embaixo da cadeira."
                    },
                    {
                        word: "小学校 (shougakkou - Onyomi)",
                        wordMeaning: "Escola primária / Ensino fundamental I (lit. Pequena escola)",
                        sentence: "妹は小学校に行きます。(Imouto wa shougakkou ni ikimasu)",
                        sentenceMeaning: "Minha irmã mais nova vai para a escola primária."
                    }
                ]
            },
            {
                character: "高",
                meaning: "Alto / Caro / Elevado",
                kunyomi: "たか・い (takai) / たか- (taka-)",
                onyomi: "コウ (KOU)",
                mnemonic: "O desenho de um pagode tradicional de vários andares ou uma torre ALTA se estendendo para o céu.",
                examples: [
                    {
                        word: "高い (takai - Kunyomi)",
                        wordMeaning: "Alto / Caro",
                        sentence: "この時計はとても高いです。(Kono tokei wa totemo takai desu)",
                        sentenceMeaning: "Este relógio é muito caro. (💡 Duplo Sentido N5: O adjetivo 'takai' significa tanto 'alto' em altura quanto 'caro' no preço!)."
                    },
                    {
                        word: "高校 (koukou - Onyomi)",
                        wordMeaning: "Ensino médio (lit. Alta escola)",
                        sentence: "来年、高校生になります。(Rainen, koukousei ni narimasu)",
                        sentenceMeaning: "Ano que vem, me tornarei estudante do ensino médio."
                    }
                ]
            },
            {
                character: "安",
                meaning: "Barato / Seguro / Pacífico",
                kunyomi: "やす・い (yasui)",
                onyomi: "アン (AN)",
                mnemonic: "Uma mulher (女) descansando tranquila debaixo de um telhado (宀), sentindo paz, SEGURANÇA e alívio (alívio para o bolso: BARATO!).",
                examples: [
                    {
                        word: "安い (yasui - Kunyomi)",
                        wordMeaning: "Barato",
                        sentence: "このスーパーの野菜は安いです。(Kono suupaa no yasai wa yasui desu)",
                        sentenceMeaning: "Os vegetais deste supermercado são baratos."
                    },
                    {
                        word: "安心 (anshin - Onyomi)",
                        wordMeaning: "Alívio / Tranquilidade / Paz de espírito (lit. Coração em paz)",
                        sentence: "母の顔を見て安心しました。(Haha no kao o mite anshin shimashita)",
                        sentenceMeaning: "Senti alívio ao ver o rosto da minha mãe."
                    }
                ]
            },
            {
                character: "新",
                meaning: "Novo / Fresco",
                kunyomi: "あたら・しい (atarashii) / あら・た (arata) / にい- (nii-)",
                onyomi: "シン (SHIN)",
                mnemonic: "Usar um machado (斤) para cortar árvores e plantas frescas (木 + 立) e construir algo totalmente NOVO.",
                examples: [
                    {
                        word: "新しい (atarashii - Kunyomi)",
                        wordMeaning: "Novo/a",
                        sentence: "新しい車が欲しいです。(Atarashii kuruma ga hoshii desu)",
                        sentenceMeaning: "Quero um carro novo. (💡 Gramática N5: O adjetivo 「欲しい - hoshii」 significa 'querer/desejar algo' e usa a partícula 「が」!)."
                    },
                    {
                        word: "新年 (shinnen - Onyomi)",
                        wordMeaning: "Ano Novo",
                        sentence: "新年おめでとうございます！(Shinnen omedetou gozaimasu!)",
                        sentenceMeaning: "Feliz Ano Novo!"
                    }
                ]
            },
            {
                character: "古",
                meaning: "Velho / Antigo",
                kunyomi: "ふる・い (furui) / ふる- (furu-)",
                onyomi: "コ (KO)",
                mnemonic: "Uma história que foi contada e passada através de dez (十) gerações de bocas (口): algo muito ANTIGO.",
                examples: [
                    {
                        word: "古い (furui - Kunyomi)",
                        wordMeaning: "Velho / Antigo",
                        sentence: "これはとても古い本です。(Kore wa totemo furui hon desu)",
                        sentenceMeaning: "Este é um livro muito antigo. (💡 Atenção N5: 「古い - furui」 é usado APENAS para objetos/coisas velhas, NUNCA para pessoas idosas!)."
                    },
                    {
                        word: "中古 (chuuko - Onyomi)",
                        wordMeaning: "Usado / Em segunda mão (lit. Meio velho)",
                        sentence: "昨日、中古のパソコンを買いました。(Kinou, chuuko no pasokon o kaimashita)",
                        sentenceMeaning: "Ontem, comprei um computador (notebook) usado."
                    }
                ]
            },
            {
                character: "白",
                meaning: "Branco / Puro",
                kunyomi: "しろ (shiro) / しろ・い (shiroi)",
                onyomi: "ハク (HAKU) / ビャク (BYAKU)",
                mnemonic: "Um raio de luz brilhante saindo do topo do Sol (日), clareando tudo com uma luz BRANCA e pura.",
                examples: [
                    {
                        word: "白い (shiroi - Kunyomi)",
                        wordMeaning: "Branco/a (Adjetivo)",
                        sentence: "白い雲が空に浮かんでいます。(Shiroi kumo ga sora ni ukande imasu)",
                        sentenceMeaning: "Nuvens brancas estão flutuando no céu."
                    },
                    {
                        word: "白 (shiro - Kunyomi)",
                        wordMeaning: "Branco (Substantivo / A cor branca)",
                        sentence: "私は白が好きです。(Watashi wa shiro ga suki desu)",
                        sentenceMeaning: "Eu gosto da cor branca. (💡 Segredo das Cores: Sem o 「〜い」 no final, o nome da cor atua como um substantivo!)."
                    }
                ]
            },
            {
                character: "黒",
                meaning: "Preto / Negro / Escuro",
                kunyomi: "くろ (kuro) / くろ・い (kuroi)",
                onyomi: "コク (KOKU)",
                mnemonic: "O fogo / chamas (灬) queimando uma aldeia/campo (里) até virar fuligem e cinzas: PRETO.",
                examples: [
                    {
                        word: "黒い (kuroi - Kunyomi)",
                        wordMeaning: "Preto/a (Adjetivo)",
                        sentence: "黒いかばんを持っています。(Kuroi kaban o motte imasu)",
                        sentenceMeaning: "Estou carregando uma bolsa preta."
                    },
                    {
                        word: "黒猫 (kuroneko)",
                        wordMeaning: "Gato preto",
                        sentence: "あそこに可愛い黒猫がいます。(Asoko ni kawaii kuroneko ga imasu)",
                        sentenceMeaning: "Há um gato preto fofo ali."
                    }
                ]
            },
            {
                character: "赤",
                meaning: "Vermelho / Rubro",
                kunyomi: "あか (aka) / あか・い (akai)",
                onyomi: "セキ (SEKI) / シャク (SHAKU)",
                mnemonic: "Uma pessoa (大) perto do fogo (火), ficando corada e com o rosto VERMELHO por causa do calor intenso!",
                examples: [
                    {
                        word: "赤い (akai - Kunyomi)",
                        wordMeaning: "Vermelho/a (Adjetivo)",
                        sentence: "庭に赤い花が咲いています。(Niwa ni akai hana ga saite imasu)",
                        sentenceMeaning: "Há flores vermelhas desabrochando no jardim."
                    },
                    {
                        word: "赤ちゃん (akachan)",
                        wordMeaning: "Bebê / Recém-nascido (lit. Pequeno vermelho)",
                        sentence: "可愛い赤ちゃんが眠っています。(Kawaii akachan ga nemutte imasu)",
                        sentenceMeaning: "O lindo bebê está dormindo. (💡 Curiosidade Cultural: Os recém-nascidos ficam com o rostinho bem corado/vermelho ao chorar, por isso são chamados de 'akachan'!)."
                    }
                ]
            },
            {
                character: "青",
                meaning: "Azul / Verde / Juventude",
                kunyomi: "あお (ao) / あお・い (aoi)",
                onyomi: "セイ (SEI) / ショウ (SHOU)",
                mnemonic: "Uma planta (生) brotando vibrante perto da água limpa de um poço (井/月), representando a pureza da cor AZUL e VERDE da natureza.",
                examples: [
                    {
                        word: "青い (aoi - Kunyomi)",
                        wordMeaning: "Azul / Verde",
                        sentence: "今日は空がとても青いです。(Kyou wa sora ga totemo aoi desu)",
                        sentenceMeaning: "Hoje o céu está muito azul. (💡 Cultura Japonesa: No Japão antigo, a mesma palavra definia azul e verde. Por isso, até hoje o sinal verde do semáforo é chamado de 「青信号 - aoshingou」, o sinal azul!)."
                    },
                    {
                        word: "青年 (seinen - Onyomi)",
                        wordMeaning: "Jovem / Juventude (lit. Anos azuis)",
                        sentence: "彼は元気な青年です。(Kare wa genki na seinen desu)",
                        sentenceMeaning: "Ele é um jovem cheio de energia/vigor."
                    }
                ]
            }
        ],
        quiz: [
            { q: "Como se diz o adjetivo 'grande' em romaji (大きい)?", options: ["ookii", "chiisai", "takai", "yasui"], a: "ookii", type: "choice" },
            { q: "Como se diz o adjetivo 'pequeno' em romaji (小さい)?", options: ["chiisai", "ookii", "furui", "atarashii"], a: "chiisai", type: "choice" },
            { q: "O adjetivo 高い (takai) significa 'alto' em estatura/altura e qual outra qualidade em português?", options: ["caro", "barato", "velho", "novo"], a: "caro", type: "choice" },
            { q: "Como se diz o adjetivo 'barato' em romaji (安い)?", a: "yasui", type: "romaji" },
            { q: "O adjetivo 古い (furui - velho/antigo) pode ser usado para descrever pessoas idosas?", options: ["nao", "sim"], a: "nao", type: "choice" },
            { q: "Como se diz o adjetivo 'novo / recente' em romaji (新しい)?", options: ["atarashii", "furui", "takai", "yasui"], a: "atarashii", type: "choice" },
            { q: "Como se escreve a cor 'branco' como adjetivo em romaji (白い)?", a: "shiroi", type: "romaji" },
            { q: "Como se escreve a cor 'preto' como adjetivo em romaji (黒い)?", a: "kuroi", type: "romaji" },
            { q: "Qual é o termo carinhoso em romaji usado para 'bebê / recém-nascido' em japonês?", a: "akachan", type: "romaji" },
            { q: "No Japão antigo, a cor 青い (aoi) definia o tom azul e qual outra cor da natureza?", options: ["verde", "amarelo", "vermelho", "preto"], a: "verde", type: "choice" }
        ]
    },

    {
        module: 9,
        title: "Módulo 9: Sociedade, Escola e Vida Cotidiana",
        description: "O gran finale do curso N5! Domine os ideogramas essenciais da vida escolar, transporte e comércio. Aprenda a formular perguntas com 「何」 (o que/qual) e a dominar os sufixos de idiomas (〜語) e estabelecimentos.",
        grammar: {
            title: "Perguntas com Interrogativos: 何 / どこ / いつ / 誤 (O quê / Onde / Quando / Quem)",
            explanation: "As palavras interrogativas do N5 são essenciais na vida cotidiana. Use: 何 (nani/nan = O quê) → 何を飲みますか (O que bebe?); どこ (doko = Onde) → 学校はどこですか (Onde é a escola?); いつ (itsu = Quando) → 試験はいつですか (Quando é a prova?); 誤 (dare = Quem) → あの人は誤ですか (Quem é aquela pessoa?); どの (dono = Qual) → どの本ですか (Qual livro?). NUNCA use ka (か) em afirmativas; ele SEMPRE indica pergunta.",
            example: "すみません、驅はどこですか？この魚は何ですか？いつから学校が始まりますか？",
            translation: "Com licença, onde é a estação? O que é esse peixe? Quando começa a escola?"
        },
        readingText: {
            title: "東京の学生生活 (A Vida de Estudante em Tóquio)",
            japanese: "<ruby>私<rt>わたし</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>朝<rt>あさ</rt></ruby><ruby>八時<rt>はちじ</rt></ruby>に<ruby>電車<rt>でんしゃ</rt></ruby>に乗って<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。<ruby>学校<rt>がっこう</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くに<ruby>本屋<rt>ほんや</rt></ruby>と<ruby>大<rt>おお</rt></ruby>きい<ruby>店<rt>みせ</rt></ruby>があります。<ruby>放課後<rt>ほうかご</rt></ruby>、<ruby>駅<rt>えき</rt></ruby>の前で<ruby>友<rt>とも</rt></ruby>だちと<ruby>会<rt>あ</rt></ruby>って<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>話<rt>はな</rt></ruby>します。",
            romaji: "Watashi wa mainichi, asa hachiji ni densha ni notte gakkou e ikimasu. Gakkou no chikaku ni hon'ya to ookii mise ga arimasu. Houkago, eki no mae de tomodachi to atte nihongo de hanashimasu.",
            translation: "Todos os dias, pego o trem às oito da manhã e vou para a escola. Perto da escola há uma livraria e uma loja grande. Depois da aula, me encontro com meus amigos na frente da estação e conversamos em japonês.",
            comprehensionQuiz: [
                {
                    q: "Como a pessoa vai para a escola às 8h da manhã?",
                    options: ["De trem (電車に乗って)", "A pé", "De carro", "De ônibus"],
                    a: "De trem (電車に乗って)",
                    type: "choice"
                },
                {
                    q: "Onde a pessoa se encontra com os amigos depois da aula (放課後)?",
                    options: ["Na frente da estação (駅の前)", "Na livraria", "Dentro da escola", "No parque"],
                    a: "Na frente da estação (駅の前)",
                    type: "choice"
                }
            ]
        },
        kanjis: [
            {
                character: "学",
                meaning: "Estudar / Aprendizado / Ciência",
                kunyomi: "まな・ぶ (manabu)",
                onyomi: "ガク (GAKU) / ガッ- (GAK-)",
                mnemonic: "Uma criança (子) debaixo do teto da escola recebendo conhecimento e luz (⺍) na cabeça.",
                examples: [
                    {
                        word: "学生 (gakusei - Onyomi)",
                        wordMeaning: "Estudante / Aluno (lit. Vida de estudo)",
                        sentence: "私は日本語の学生です。(Watashi wa nihongo no gakusei desu)",
                        sentenceMeaning: "Eu sou estudante de língua japonesa."
                    },
                    {
                        word: "大学 (daigaku)",
                        wordMeaning: "Universidade / Faculdade (lit. Grande estudo)",
                        sentence: "毎日、電車で大学へ行きます。(Mainichi, densha de daigaku e ikimasu)",
                        sentenceMeaning: "Todos os dias, vou para a faculdade de trem."
                    }
                ]
            },
            {
                character: "校",
                meaning: "Escola / Correção",
                kunyomi: "-",
                onyomi: "コウ (KOU)",
                mnemonic: "Um edifício de madeira (木) onde as crianças se reúnem e cruzam as pernas (交) para estudar: a Escola.",
                examples: [
                    {
                        word: "学校 (gakkou - Onyomi)",
                        wordMeaning: "Escola (lit. Lugar de aprendizado e instrução)",
                        sentence: "学校は朝八時に始まります。(Gakkou wa asa hachiji ni hajimarimasu)",
                        sentenceMeaning: "A escola começa às oito da manhã. (💡 Rendaku/Geminação: Quando 'GAKU' se junta com 'KOU', transforma-se em 'GAKKOU' com um pequeno 'tsu' de pausa)."
                    },
                    {
                        word: "高校 (koukou)",
                        wordMeaning: "Ensino Médio (lit. Alta escola)",
                        sentence: "兄は高校の先生です。(Ani wa koukou no sensei desu)",
                        sentenceMeaning: "Meu irmão mais velho é professor do ensino médio."
                    }
                ]
            },
            {
                character: "先",
                meaning: "Antes / Precedente / Futuro / Ponta",
                kunyomi: "さき (saki)",
                onyomi: "セン (SEN)",
                mnemonic: "Alguém caminhando com as pernas (儿) na FRENTE de todos sobre a terra (土), guiando o caminho.",
                examples: [
                    {
                        word: "先生 (sensei - Onyomi)",
                        wordMeaning: "Professor / Mestre / Doutor (lit. Aquele que nasceu antes)",
                        sentence: "田中先生はとても優しいです。(Tanaka-sensei wa totemo yasashii desu)",
                        sentenceMeaning: "O professor Tanaka é muito gentil. (💡 Nota Cultural: 'Sensei' é usado para qualquer autoridade de conhecimento, como médicos, advogados e autores de mangá!)."
                    },
                    {
                        word: "先月 (sengetsu)",
                        wordMeaning: "Mês passado (lit. Mês anterior)",
                        sentence: "先月、日本から帰りました。(Sengetsu, Nihon kara kaerimashita)",
                        sentenceMeaning: "Mês passado, voltei do Japão."
                    }
                ]
            },
            {
                character: "生",
                meaning: "Vida / Nascer / Viver / Cru",
                kunyomi: "い・きる (ikiru) / う・まれる (umareru) / なま (nama)",
                onyomi: "セイ (SEI) / ショウ (SHOU)",
                mnemonic: "O broto de uma planta rompendo o solo e nascendo com força para a VIDA.",
                examples: [
                    {
                        word: "生まれます (umaremasu - Kunyomi)",
                        wordMeaning: "Nascer",
                        sentence: "私はブラジルで生まれました。(Watashi wa Burajiru de umaremashita)",
                        sentenceMeaning: "Eu nasci no Brasil."
                    },
                    {
                        word: "生活 (seikatsu - Onyomi)",
                        wordMeaning: "Vida cotidiana / Rotina / Sustento",
                        sentence: "日本の生活は とても楽しいです。(Nihon no seikatsu wa totemo tanoshii desu)",
                        sentenceMeaning: "A vida cotidiana no Japão é muito divertida."
                    }
                ]
            },
            {
                character: "本",
                meaning: "Livro / Origem / Raiz / Principal",
                kunyomi: "もと (moto)",
                onyomi: "ホン (HON) / -ボン (-bon) / -ポン (-pon)",
                mnemonic: "Uma árvore (木) com um traço extra marcando a sua RAIZ ou BASE na parte inferior. A raiz do conhecimento é o livro!",
                examples: [
                    {
                        word: "本 (hon - Onyomi)",
                        wordMeaning: "Livro",
                        sentence: "かばんの中に面白い本があります。(Kaban no naka ni omoshiroi hon ga arimasu)",
                        sentenceMeaning: "Há um livro interessante dentro da bolsa."
                    },
                    {
                        word: "日本 (Nihon / Nippon)",
                        wordMeaning: "Japão (lit. Origem do Sol / Terra do Sol Nascente)",
                        sentence: "いつか日本へ行きたいです。(Itsuka Nihon e ikitai desu)",
                        sentenceMeaning: "Um dia quero ir para o Japão. (💡 Gramática N5: A terminação 「〜たい -tai」 expressa o desejo de fazer algo: 'ikitai' = quero ir)."
                    }
                ]
            },
            {
                character: "語",
                meaning: "Idioma / Palavra / Contar",
                kunyomi: "かた・る (kataru)",
                onyomi: "ゴ (GO)",
                mnemonic: "As palavras de fala (言) que usamos para expressar o nosso eu (吾) aos outros: o nosso IDIOMA.",
                examples: [
                    {
                        word: "日本語 (nihongo - Onyomi)",
                        wordMeaning: "Língua japonesa / Idioma japonês",
                        sentence: "毎日、日本語を勉強しています。(Mainichi, nihongo o benkyou shite imasu)",
                        sentenceMeaning: "Todos os dias, estou estudando japonês. (💡 Gramática N5: [Nome do País] + 語 = Idioma do país. Ex: 英語 - Inglês, スペイン語 - Espanhol)."
                    },
                    {
                        word: "言語 (gengo)",
                        wordMeaning: "Linguagem / Idioma (termo geral)",
                        sentence: "新しい言語を学ぶのは面白いです。(Atarashii gengo o manabu no wa omoshiroi desu)",
                        sentenceMeaning: "Aprender uma nova linguagem é interessante."
                    }
                ]
            },
            {
                character: "何",
                meaning: "O que / Qual / Quantos",
                kunyomi: "なに (nani) / なん (nan)",
                onyomi: "カ (KA)",
                mnemonic: "Uma pessoa (イ) carregando uma caixa com algo dentro, perguntando: 'O QUE é isso? QUAL o conteúdo?'",
                examples: [
                    {
                        word: "何 (nani - Kunyomi)",
                        wordMeaning: "O que",
                        sentence: "これは何ですか？(Kore wa nan desu ka?)",
                        sentenceMeaning: "O que é isto? (💡 Regra N5 CRÍTICA: Lê-se 'nan' antes de palavras que começam com D, T, N ou contadores, como em 'nan desu ka' ou 'nan-ji'. Nos outros casos, lê-se 'nani', como em 'nani o tabemasu ka')."
                    },
                    {
                        word: "何時 (nan-ji)",
                        wordMeaning: "Que horas? / Qual horário?",
                        sentence: "今は何時ですか？(Ima wa nan-ji desu ka?)",
                        sentenceMeaning: "Que horas são agora?"
                    }
                ]
            },
            {
                character: "車",
                meaning: "Carro / Roda / Veículo",
                kunyomi: "くるま (kuruma)",
                onyomi: "シャ (SHA)",
                mnemonic: "A vista superior de uma carruagem ou carroça antiga, mostrando o eixo central cortando duas rodas laterais.",
                examples: [
                    {
                        word: "車 (kuruma - Kunyomi)",
                        wordMeaning: "Carro / Automóvel",
                        sentence: "新しい車を買いました。(Atarashii kuruma o kaimashita)",
                        sentenceMeaning: "Comprei um carro novo."
                    },
                    {
                        word: "電車 (densha - Onyomi)",
                        wordMeaning: "Trem elétrico (lit. Carro de eletricidade)",
                        sentence: "東京の電車はとても早いです。(Toukyou no densha wa totemo hayai desu)",
                        sentenceMeaning: "Os trens de Tóquio são muito rápidos. (💡 Dica de Vida no Japão: O trem é o principal meio de transporte no dia a dia japonês!)."
                    }
                ]
            },
            {
                character: "電",
                meaning: "Eletricidade / Raio",
                kunyomi: "-",
                onyomi: "デン (DEN)",
                mnemonic: "A chuva (雨) caindo com raios de energia elétrica e trovões que atingem o campo (田) abaixo.",
                examples: [
                    {
                        word: "電気 (denki - Onyomi)",
                        wordMeaning: "Eletricidade / Luz elétrica (lit. Energia elétrica)",
                        sentence: "部屋の電気を消してください。(Heya no denki o keshite kudasai)",
                        sentenceMeaning: "Por favor, apague a luz do quarto. (💡 Expressão N5: A forma 「〜て ください -te kudasai」 é usada para fazer pedidos educados)."
                    },
                    {
                        word: "電話 (denwa)",
                        wordMeaning: "Telefone / Chamada (lit. Fala elétrica)",
                        sentence: "友達と電話で話します。(Tomodachi to denwa de hanashimasu)",
                        sentenceMeaning: "Converso com meu amigo pelo telefone."
                    }
                ]
            },
            {
                character: "店",
                meaning: "Loja / Estabelecimento / Comércio",
                kunyomi: "みせ (mise)",
                onyomi: "テン (TEN)",
                mnemonic: "Um grande telhado ou toldo (广) protegendo as vitrines onde os vendedores adivinham (占) e atendem ao gosto dos clientes.",
                examples: [
                    {
                        word: "店 (mise - Kunyomi)",
                        wordMeaning: "Loja / Estabelecimento comercial",
                        sentence: "あの店で美味しいパンを買いました。(Ano mise de oishii pan o kaimashita)",
                        sentenceMeaning: "Comprei um pão gostoso naquela loja."
                    },
                    {
                        word: "喫茶店 (kissaten - Onyomi)",
                        wordMeaning: "Cafeteria tradicional (lit. Loja de beber chá/café)",
                        sentence: "駅前の喫茶店で会いましょう。(Ekimae no kissaten de aimashou)",
                        sentenceMeaning: "Vamos nos encontrar na cafeteria em frente à estação. (💡 Vocabulário N5 Clássico: Embora se use 'kafe' hoje em dia, 'kissaten' é uma palavra garantida no teste do JLPT!)."
                    }
                ]
            },
            {
                character: "駅",
                meaning: "Estação (de trem / metrô)",
                kunyomi: "えき (eki - uso raro)",
                onyomi: "エキ (Eki)",
                mnemonic: "💡 O radical de cavalo à esquerda (馬) com uma estrutura de parada à direita: antigamente, o local onde os cavalos e carruagens paravam para troca e descanso, hoje transformado na estação de trens.",
                examples: [
                    {
                        word: "駅 (eki)",
                        wordMeaning: "Estação",
                        sentence: "東京駅で友達を待っています。(Toukyou-eki de tomodachi o matte imasu)",
                        sentenceMeaning: "Estou esperando um amigo na Estação de Tóquio."
                    },
                    {
                        word: "駅前 (ekimae)",
                        wordMeaning: "Praça da estação / Em frente à estação",
                        sentence: "駅前に大きいスーパーがあります。(Ekimae ni ookii suupaa ga arimasu)",
                        sentenceMeaning: "Há um supermercado grande em frente à estação."
                    }
                ]
            },
        ],
        quiz: [
            { q: "Como se diz 'estudante / aluno' em romaji (学生)?", options: ["gakusei", "sensei", "gakkou", "nihonjin"], a: "gakusei", type: "choice" },
            { q: "Como se diz 'escola' em romaji (学校)?", options: ["gakkou", "gakusei", "daigaku", "kissaten"], a: "gakkou", type: "choice" },
            { q: "O título 先生 (sensei) significa literalmente 'aquele que nasceu ____' em português.", options: ["antes", "depois", "novo", "longe"], a: "antes", type: "choice" },
            { q: "Qual sufixo (em romaji) adicionado ao nome de um país significa 'idioma / língua'?", a: "go", type: "romaji" },
            { q: "Como se diz 'livro' em romaji na leitura onyomi (本)?", options: ["hon", "eigo", "kuruma", "mise"], a: "hon", type: "choice" },
            { q: "Antes de palavras que começam com as consoantes D, T ou N, o interrogativo 何 é lido como 'nani' ou 'nan'?", options: ["nan", "nani"], a: "nan", type: "choice" },
            { q: "Como se pergunta 'que horas?' em romaji (何時)?", a: "nanji", type: "romaji" },
            { q: "Como se diz 'carro / automóvel' na leitura kunyomi em romaji (車)?", options: ["kuruma", "densha", "eki", "mise"], a: "kuruma", type: "choice" },
            { q: "Como se diz 'trem elétrico' em romaji (電車)?", a: "densha", type: "romaji" },
            { q: "Como se diz 'loja / estabelecimento comercial' na leitura kunyomi em romaji (店)?", options: ["mise", "eki", "gakkou", "kafe"], a: "mise", type: "choice" }
        ]
    },

    {
        module: 10,
        title: "Módulo 10: Culinária, Alimentos e Restaurantes",
        description: "Expanda seu vocabulário para o universo gastronômico japonês! Aprenda ideogramas essenciais sobre ingredientes, pratos típicos, bebidas e termos indispensáveis para o dia a dia e viagens.",
        grammar: {
            title: "Expressões de Preferência: ～が 好きです / がきらいです (Gosto / Não Gosto)",
            explanation: "Para expressar preferências alimentares no N5, a estrutura é: [Pessoa] は [Coisa] が 好きです (gosta de). O ponto crítico: use が (ga), não を (o), antes de 好き (suki = gostar) e 嫌い (kirai = não gostar/detestar). Para intensificar use 大好き (daisuki = adorar) e 大嫌い (daikirai = detestar muito). Para indicar o que quer pedir, use: ～をください (~ o kudasai = Por favor, me dê ~) ou ～にします (~ni shimasu = Vou pedir o ~, para fazer escolha).",
            example: "山田さんは魚料理が大妃きですが、肉がきらいです。寓海老山を一つください。",
            translation: "O Sr. Yamada adora peixe, mas não gosta de carne. Por favor, me dê um onigiride salmon."
        },
        readingText: {
            title: "和食レストランで夕食 (Jantar no Restaurante de Culinária Japonesa)",
            japanese: "<ruby>私<rt>わたし</rt></ruby>は<ruby>夜<rt>よる</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>和食<rt>わしょく</rt></ruby>の<ruby>店<rt>みせ</rt></ruby>で<ruby>新鮮<rt>しんせん</rt></ruby>な<ruby>魚<rt>さかな</rt></ruby>と<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>を<ruby>食<rt>た</rt></ruby>べました。<ruby>美味<rt>おい</rt></ruby>しい<ruby>お茶<rt>ちゃ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みながら、<ruby>色<rt>いろ</rt></ruby>々な<ruby>事<rt>こと</rt></ruby>を<ruby>話<rt>はな</rt></ruby>しました。<ruby>最後<rt>さいご</rt></ruby>に<ruby>果物<rt>くだもの</rt></ruby>を<ruby>買<rt>か</rt></ruby>って<ruby>帰<rt>かえ</rt></ruby>りました。",
            romaji: "Watashi wa yoru, tomodachi to washoku no mise de shinsen na sakana to yasai o tabemashita. Oishii ocha o nominagara, iroiro na koto o hanashimashita. Saigo ni kudamono o katte kaerimashita.",
            translation: "À noite, comi peixe fresco e vegetais com meus amigos em um restaurante de comida japonesa. Enquanto bebíamos um delicioso chá, conversamos sobre várias coisas. Por fim, compramos frutas e fomos para casa.",
            comprehensionQuiz: [
                {
                    q: "O que eles comeram no restaurante de culinária japonesa (和食の店)?",
                    options: ["Peixe fresco e vegetais (新鮮な魚と野菜)", "Carne e pão", "Apenas frutas", "Sopa instantânea"],
                    a: "Peixe fresco e vegetais (新鮮な魚と野菜)",
                    type: "choice"
                },
                {
                    q: "O que eles compraram antes de voltar para casa (最後に)?",
                    options: ["Frutas (果物)", "Saquê (お酒)", "Roupas", "Doces"],
                    a: "Frutas (果物)",
                    type: "choice"
                }
            ]
        },
        kanjis: [
            {
                character: "魚",
                meaning: "Peixe",
                kunyomi: "さかな (sakana) / -ざかな (-zakana)",
                onyomi: "ギョ (GYO)",
                mnemonic: "💡 O topo lembra a cabeça, o corpo com traços horizontais as escamas e a cauda embaixo: a silhueta perfeita de um peixe nadando.",
                examples: [
                    {
                        word: "魚 (sakana)",
                        wordMeaning: "Peixe",
                        sentence: "毎朝、新鮮な魚を食べます。(Mainichi, shinsen na sakana o tabemasu)",
                        sentenceMeaning: "Todas as manhãs, como peixe fresco."
                    },
                    {
                        word: "焼き魚 (yakizakana)",
                        wordMeaning: "Peixe grelhado / assado (Rendaku: sakana vira zakana)",
                        sentence: "日本の焼き魚はとても美味しいです。(Nihon no yakizakana wa totemo oishii desu)",
                        sentenceMeaning: "O peixe grelhado japonês é muito gostoso."
                    }
                ]
            },
            {
                character: "肉",
                meaning: "Carne (Boi, Porco, Frango)",
                kunyomi: "-",
                onyomi: "ニク (NIKU)",
                mnemonic: "💡 Camadas de carne cortadas e empilhadas em um balcão de açougue.",
                examples: [
                    {
                        word: "肉 (niku)",
                        wordMeaning: "Carne",
                        sentence: "今日の夕飯は肉を食べます。(Kyou no yuuhan wa niku o tabemasu)",
                        sentenceMeaning: "O jantar de hoje tem carne."
                    },
                    {
                        word: "牛肉 (gyuuniku)",
                        wordMeaning: "Carne bovina / Carne de boi (lit. Carne de boi)",
                        sentence: "すき焼きに牛肉を使います。(Sukiyaki ni gyuuniku o tsukaimasu)",
                        sentenceMeaning: "Usamos carne bovina no sukiyaki."
                    }
                ]
            },
            {
                character: "野",
                meaning: "Campo / Planície / Selvagem",
                kunyomi: "の (no)",
                onyomi: "ヤ (YA)",
                mnemonic: "💡 Uma aldeia (里) no campo (土) aberto e selvagem.",
                examples: [
                    {
                        word: "野菜 (yasai)",
                        wordMeaning: "Vegetais (lit. Ervas do campo)",
                        sentence: "野菜をたくさん食べましょう。(Yasai o takusan tabemashou)",
                        sentenceMeaning: "Vamos comer muitos vegetais."
                    },
                    {
                        word: "野原 (nohara)",
                        wordMeaning: "Campo / Planície",
                        sentence: "野原に花が咲いています。(Nohara ni hana ga saite imasu)",
                        sentenceMeaning: "Flores estão desabrochando no campo."
                    }
                ]
            },
            {
                character: "菜",
                meaning: "Verdura / Vegetal",
                kunyomi: "な (na)",
                onyomi: "サイ (SAI)",
                mnemonic: "💡 O radical de planta (艹) em cima de uma mão (爪) colhendo as verduras.",
                examples: [
                    {
                        word: "白菜 (hakusai)",
                        wordMeaning: "Acelga chinesa (lit. Verdura branca)",
                        sentence: "冬は白菜が美味しいです。(Fuyu wa hakusai ga oishii desu)",
                        sentenceMeaning: "A acelga é deliciosa no inverno."
                    }
                ]
            },
            {
                character: "茶",
                meaning: "Chá",
                kunyomi: "-",
                onyomi: "チャ (CHA) / サ (SA)",
                mnemonic: "💡 A planta do chá crescendo sob a terra e os galhos com folhas recolhidas para infusão.",
                examples: [
                    {
                        word: "お茶 (ocha)",
                        wordMeaning: "Chá / Chá verde japonês",
                        sentence: "日本人は毎日お茶を飲みます。(Nihonjin wa mainichi ocha o nomimasu)",
                        sentenceMeaning: "Os japoneses consomem chá todos os dias."
                    },
                    {
                        word: "喫茶店 (kissaten)",
                        wordMeaning: "Cafeteria tradicional japonesa",
                        sentence: "静かな喫茶店で本を読みました。(Shizukana kissaten de hon o yomimashita)",
                        sentenceMeaning: "Li um livro em uma cafeteria silenciosa."
                    }
                ]
            },
            {
                character: "酒",
                meaning: "Bebida alcoólica / Saquê",
                kunyomi: "さけ (sake) / -ざけ (-zake)",
                onyomi: "シュ (SHU)",
                mnemonic: "💡 O radical de água/líquido à esquerda (氵) com um pote de fermentação ao lado: a bebida alcoólica fermentada.",
                examples: [
                    {
                        word: "お酒 (osake)",
                        wordMeaning: "Bebida alcoólica / Saquê",
                        sentence: "父は夕方に少しお酒を飲みます。(Chichi wa yuugata ni sukoshi osake o nomimasu)",
                        sentenceMeaning: "Meu pai bebe um pouco de álcool no fim da tarde."
                    },
                    {
                        word: "日本酒 (nihonshu)",
                        wordMeaning: "Saquê japonês tradicional",
                        sentence: "日本酒は温かくしても美味しいです。(Nihonshu wa atatakaku shite mo oishii desu)",
                        sentenceMeaning: "O saquê japonês também é gostoso quando aquecido."
                    }
                ]
            },
            {
                character: "飯",
                meaning: "Arroz cozido / Refeição / Comida",
                kunyomi: "めし (meshi)",
                onyomi: "ハン (HAN)",
                mnemonic: "💡 O radical de comida/alimento à esquerda (飠) com o som ao lado: a tigela de arroz cozido que alimenta a família.",
                examples: [
                    {
                        word: "ご飯 (gohan)",
                        wordMeaning: "Arroz cozido / Refeição / Comida em geral",
                        sentence: "朝ご飯に白いご飯を食べます。(Asagohan ni shiroi gohan o tabemasu)",
                        sentenceMeaning: "Como arroz branco no café da manhã."
                    },
                    {
                        word: "夕飯 (yuuhan)",
                        wordMeaning: "Jantar / Refeição da noite",
                        sentence: "今夜の夕飯は何ですか？(Konya no yuuhan wa nan desu ka?)",
                        sentenceMeaning: "Qual é o jantar de hoje à noite?"
                    }
                ]
            },
            {
                character: "味",
                meaning: "Sabor / Gosto / Degustar",
                kunyomi: "あじ (aji) / あじ・わう (ajiwau)",
                onyomi: "ミ (MI)",
                mnemonic: "💡 A boca (口) provando e avaliando o ingrediente à direita (未 - testando o sabor).",
                examples: [
                    {
                        word: "味 (aji)",
                        wordMeaning: "Sabor / Gosto",
                        sentence: "この料理の味はとても美味しいです。(Kono ryouri no aji wa totemo oishii desu)",
                        sentenceMeaning: "O sabor deste prato é muito gostoso."
                    },
                    {
                        word: "意味 (imi)",
                        wordMeaning: "Significado / Sentido",
                        sentence: "この言葉の意味が分かりますか？(Kono kotoba no imi ga wakarimasu ka?)",
                        sentenceMeaning: "Você entende o significado desta palavra?"
                    }
                ]
            },
            {
                character: "果",
                meaning: "Fruta / Fruto / Concluir",
                kunyomi: "は・たす (hatasu)",
                onyomi: "カ (KA)",
                mnemonic: "💡 Árvores (木) pesadas e carregadas com frutos redondos no topo, prontos para a colheita.",
                examples: [
                    {
                        word: "果物 (kudamono)",
                        wordMeaning: "Fruta",
                        sentence: "スーパーで新鮮な果物を買いました。(Suupaa de shinsen na kudamono o kaimashita)",
                        sentenceMeaning: "Comprei frutas frescas no supermercado."
                    },
                    {
                        word: "結果 (kekka)",
                        wordMeaning: "Resultado",
                        sentence: "テストの結果を楽しみにしています。(Tesuto no kekka o tanoshimi ni shite imasu)",
                        sentenceMeaning: "Estou ansioso pelo resultado do teste."
                    }
                ]
            }
        ],
        quiz: [
            { q: "Como se diz 'peixe' na leitura kunyomi em romaji (魚)?", options: ["sakana", "niku", "yasai", "ocha"], a: "sakana", type: "choice" },
            { q: "Como se escreve em romaji a palavra para 'carne' (肉)?", a: "niku", type: "romaji" },
            { q: "Qual é a palavra em romaji para 'vegetais / legumes' (野菜)?", options: ["yasai", "sakana", "kudamono", "ocha"], a: "yasai", type: "choice" },
            { q: "Como se diz 'chá' ou 'chá verde' em romaji, geralmente precedido pelo prefixo educado o- (お茶)?", a: "ocha", type: "romaji" },
            { q: "Como se diz 'bebida alcoólica / saquê' em romaji (お酒)?", options: ["osake", "ocha", "gohan", "aji"], a: "osake", type: "choice" },
            { q: "O ideograma 飯 (han/meshi) aparece na palavra gohan para significar arroz cozido e qual outra palavra para refeição noturna (夕飯)?", a: "yuuhan", type: "romaji" },
            { q: "Como se diz 'sabor / gosto' na leitura kunyomi em romaji (味)?", options: ["aji", "kudamono", "sakana", "niku"], a: "aji", type: "choice" },
            { q: "Como se diz 'fruta' em romaji (果物)?", a: "kudamono", type: "romaji" },
            { q: "Qual é a partícula gramatical (em romaji) usada antes de verbos como tabemasu para indicar o objeto direto?", options: ["o", "ni", "de", "wa"], a: "o", type: "choice" },
            { q: "Como se diz 'delicioso / gostoso' em romaji (美味しい)?", a: "oishii", type: "romaji" }
        ]
    },

    {
        module: 11,
        title: "Módulo 11: Tabela Geral e Revisão N5",
        description: "A Tabela Periódica do JLPT N5! Consulte aqui todos os ideogramas dominados ao longo do curso, incluindo o bônus de culinária. Use este guia como referência rápida para revisar significados, leituras e conferir em qual módulo cada Kanji foi introduzido.",
        isReviewTable: true,
        readingText: {
            title: "N5漢字の復習とこれからの道 (Revisão dos Kanjis N5 e o Caminho Futuro)",
            japanese: "<ruby>私<rt>わたし</rt></ruby>はN5の<ruby>漢字<rt>かんじ</rt></ruby>を<ruby>百<rt>ひゃく</rt></ruby><ruby>以上<rt>いじょう</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>しました。<ruby>毎日<rt>まいにち</rt></ruby><ruby>新<rt>あたら</rt></ruby>しい<ruby>言葉<rt>ことば</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えるのは<ruby>楽<rt>たの</rt></ruby>しいです。<ruby>明日<rt>あした</rt></ruby>からN4の<ruby>勉強<rt>べんきょう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めます。<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>って<ruby>沢山<rt>たくさん</rt></ruby><ruby>話<rt>はな</rt></ruby>したいです。",
            romaji: "Watashi wa N5 no kanji o hyaku ijou benkyou shimashita. Mainichi atarashii kotoba o oboeru no wa tanoshii desu. Ashita kara N4 no benkyou o hajimemasu. Nihon e itte takusan hanashitai desu.",
            translation: "Estudei mais de cem kanjis do nível N5. É divertido memorizar novas palavras todos os dias. A partir de amanhã, começarei a estudar para o N4. Quero ir ao Japão e conversar bastante.",
            comprehensionQuiz: [
                {
                    q: "Quantos kanjis N5 a pessoa estudou segundo o texto de revisão?",
                    options: ["Mais de 100 kanjis (百以上)", "Apenas 10 kanjis", "50 kanjis", "500 kanjis"],
                    a: "Mais de 100 kanjis (百以上)",
                    type: "choice"
                },
                {
                    q: "O que a pessoa planeja começar a estudar a partir de amanhã (明日から)?",
                    options: ["Estudar o N4 (N4の勉強)", "Estudar inglês", "Trabalhar em uma empresa", "Viajar sem estudar"],
                    a: "Estudar o N4 (N4の勉強)",
                    type: "choice"
                }
            ]
        },
        kanjis: [
            // --- MÓDULO 2: NÚMEROS E MOEDA ---
            { character: "一", meaning: "Um", kunyomi: "ひと・つ (hitotsu)", onyomi: "イチ / イツ (ICHI / ITSU)", originModule: 2 },
            { character: "二", meaning: "Dois", kunyomi: "ふた・つ (futatsu)", onyomi: "ニ (NI)", originModule: 2 },
            { character: "三", meaning: "Três", kunyomi: "みっ・つ (mittsu)", onyomi: "サン (SAN)", originModule: 2 },
            { character: "四", meaning: "Quatro", kunyomi: "よっ・つ / yon / yo", onyomi: "シ (SHI)", originModule: 2 },
            { character: "五", meaning: "Cinco", kunyomi: "いつ・つ (itsutsu)", onyomi: "ゴ (GO)", originModule: 2 },
            { character: "六", meaning: "Seis", kunyomi: "むっ・つ (muttsu)", onyomi: "ロク (ROKU)", originModule: 2 },
            { character: "七", meaning: "Sete", kunyomi: "なな・つ / nana", onyomi: "シチ (SHICHI)", originModule: 2 },
            { character: "八", meaning: "Oito", kunyomi: "やっ・つ (yattsu)", onyomi: "ハチ (HACHI)", originModule: 2 },
            { character: "九", meaning: "Nove", kunyomi: "ここの・つ (kokonotsu)", onyomi: "キュウ / ク (KYUU / KU)", originModule: 2 },
            { character: "十", meaning: "Dez", kunyomi: "とお (too)", onyomi: "ジュウ / ジッ- (JUU / JIT-)", originModule: 2 },
            { character: "百", meaning: "Cem", kunyomi: "-", onyomi: "ヒャク / -ビャク / -ピャク (HYAKU)", originModule: 2 },
            { character: "千", meaning: "Mil", kunyomi: "ち (chi)", onyomi: "セン / -ゼン (SEN / -ZEN)", originModule: 2 },
            { character: "万", meaning: "Dez mil", kunyomi: "-", onyomi: "マン / バン (MAN / BAN)", originModule: 2 },
            { character: "円", meaning: "Iene / Círculo / Redondo", kunyomi: "まる・い (marui)", onyomi: "エン (EN)", originModule: 2 },

            // --- MÓDULO 3: TEMPO E CALENDÁRIO ---
            { character: "日", meaning: "Dia / Sol", kunyomi: "ひ / -び / -ka", onyomi: "ニチ / ジツ (NICHI / JITSU)", originModule: 3 },
            { character: "月", meaning: "Mês / Lua", kunyomi: "つき (tsuki)", onyomi: "ゲツ / ガツ (GETSU / GATSU)", originModule: 3 },
            { character: "火", meaning: "Fogo / Terça-feira", kunyomi: "ひ / -び / ho-", onyomi: "カ (KA)", originModule: 3 },
            { character: "水", meaning: "Água / Quarta-feira", kunyomi: "みず (mizu)", onyomi: "スイ (SUI)", originModule: 3 },
            { character: "木", meaning: "Árvore / Madeira / Quinta-feira", kunyomi: "き / ko-", onyomi: "モク / ボク (MOKU / BOKU)", originModule: 3 },
            { character: "金", meaning: "Ouro / Dinheiro / Sexta-feira", kunyomi: "かね / kana-", onyomi: "キン / コン (KIN / KON)", originModule: 3 },
            { character: "土", meaning: "Terra / Solo / Sábado", kunyomi: "つち (tsuchi)", onyomi: "ド / ト (DO / TO)", originModule: 3 },
            { character: "年", meaning: "Ano", kunyomi: "とし (toshi)", onyomi: "ネン (NEN)", originModule: 3 },
            { character: "時", meaning: "Hora / Tempo", kunyomi: "とき / -doki", onyomi: "ジ (JI)", originModule: 3 },
            { character: "分", meaning: "Minuto / Parte / Entender", kunyomi: "わ・かる / wakeru", onyomi: "ブン / フン / プン (BUN / FUN / PUN)", originModule: 3 },
            { character: "半", meaning: "Metade / Meio", kunyomi: "なか・ば (nakaba)", onyomi: "ハン (HAN)", originModule: 3 },
            { character: "今", meaning: "Agora / Atual", kunyomi: "いま (ima)", onyomi: "コン / キン (KON / KIN)", originModule: 3 },

            // --- MÓDULO 4: NATUREZA E MEIO AMBIENTE ---
            { character: "山", meaning: "Montanha", kunyomi: "やま (yama)", onyomi: "サン / ゼン (SAN / ZEN)", originModule: 4 },
            { character: "川", meaning: "Rio / Correnteza", kunyomi: "かわ / -gawa", onyomi: "セン (SEN)", originModule: 4 },
            { character: "田", meaning: "Campo de arroz", kunyomi: "た / -da", onyomi: "デン (DEN)", originModule: 4 },
            { character: "天", meaning: "Céu / Paraíso", kunyomi: "あまつ / ama-", onyomi: "テン (TEN)", originModule: 4 },
            { character: "気", meaning: "Ar / Espírito / Clima", kunyomi: "き / iki", onyomi: "キ / ケ (KI / KE)", originModule: 4 },
            { character: "雨", meaning: "Chuva", kunyomi: "あめ / ama-", onyomi: "ウ (U)", originModule: 4 },
            { character: "空", meaning: "Céu / Vazio", kunyomi: "そら / aku / kara", onyomi: "クウ (KUU)", originModule: 4 },
            { character: "花", meaning: "Flor", kunyomi: "はな / -bana", onyomi: "カ (KA)", originModule: 4 },
            { character: "犬", meaning: "Cachorro", kunyomi: "いぬ (inu)", onyomi: "ケン (KEN)", originModule: 4 },
            { character: "夕", meaning: "Tarde / Entardecer", kunyomi: "ゆう (yuu)", onyomi: "セキ (SEKI)", originModule: 4 },

            // --- MÓDULO 5: POSIÇÃO, DIREÇÃO E ESPAÇO ---
            { character: "上", meaning: "Cima / Sobre / Acima", kunyomi: "うえ / ageru", onyomi: "ジョウ (JOU)", originModule: 5 },
            { character: "下", meaning: "Baixo / Embaixo / Descer", kunyomi: "した / sageru", onyomi: "カ / ゲ (KA / GE)", originModule: 5 },
            { character: "中", meaning: "Dentro / Meio / Centro", kunyomi: "なか (naka)", onyomi: "チュウ / ジュウ (CHUU / JUU)", originModule: 5 },
            { character: "外", meaning: "Fora / Exterior", kunyomi: "そと / hoka", onyomi: "ガイ (GAI)", originModule: 5 },
            { character: "右", meaning: "Direita", kunyomi: "みぎ (migi)", onyomi: "ウ / ユウ (U / YUU)", originModule: 5 },
            { character: "左", meaning: "Esquerda", kunyomi: "ひだり (hidari)", onyomi: "サ (SA)", originModule: 5 },
            { character: "前", meaning: "Frente / Antes", kunyomi: "まえ (mae)", onyomi: "ゼン (ZEN)", originModule: 5 },
            { character: "後", meaning: "Trás / Depois", kunyomi: "うし・ろ / ato", onyomi: "ゴ / コウ (GO / KOU)", originModule: 5 },
            { character: "間", meaning: "Entre / Espaço / Intervalo", kunyomi: "あいだ / ma", onyomi: "カン / ケン (KAN / KEN)", originModule: 5 },
            { character: "方", meaning: "Direção / Lado / Modo", kunyomi: "かた (kata)", onyomi: "ホウ (HOU)", originModule: 5 },

            // --- MÓDULO 6: PESSOAS E FAMÍLIA ---
            { character: "人", meaning: "Pessoa", kunyomi: "ひと (hito)", onyomi: "ジン / ニン (JIN / NIN)", originModule: 6 },
            { character: "子", meaning: "Criança / Filhote", kunyomi: "こ (ko)", onyomi: "シ / ス (SHI / SU)", originModule: 6 },
            { character: "女", meaning: "Mulher / Feminino", kunyomi: "おんな / me", onyomi: "ジョ (JO)", originModule: 6 },
            { character: "男", meaning: "Homem / Masculino", kunyomi: "おとこ (otoko)", onyomi: "ダン / ナン (DAN / NAN)", originModule: 6 },
            { character: "父", meaning: "Pai", kunyomi: "ちち (chichi)", onyomi: "フ (FU)", originModule: 6 },
            { character: "母", meaning: "Mãe", kunyomi: "はは (haha)", onyomi: "ボ (BO)", originModule: 6 },
            { character: "兄", meaning: "Irmão mais velho", kunyomi: "あに (ani)", onyomi: "キョウ / ケイ (KYOU / KEI)", originModule: 6 },
            { character: "弟", meaning: "Irmão mais novo", kunyomi: "おとうと (otouto)", onyomi: "テイ / ダイ (TEI / DAI)", originModule: 6 },
            { character: "友", meaning: "Amigo", kunyomi: "とも (tomo)", onyomi: "ユウ (YUU)", originModule: 6 },
            { character: "私", meaning: "Eu / Particular", kunyomi: "わたし / watakushi", onyomi: "シ (SHI)", originModule: 6 },

            // --- MÓDULO 7: VERBOS DE AÇÃO E MOVIMENTO ---
            { character: "行", meaning: "Ir / Conduta", kunyomi: "い・く / yuku", onyomi: "コウ / ギョウ (KOU / GYOU)", originModule: 7 },
            { character: "見", meaning: "Ver / Olhar", kunyomi: "み・る / mieru", onyomi: "ケン (KEN)", originModule: 7 },
            { character: "食", meaning: "Comer / Comida", kunyomi: "た・べる / kuu", onyomi: "ショク (SHOKU)", originModule: 7 },
            { character: "飲", meaning: "Beber", kunyomi: "の・む (nomu)", onyomi: "イン (IN)", originModule: 7 },
            { character: "聞", meaning: "Ouvir / Perguntar", kunyomi: "き・く / kikoeru", onyomi: "ブン / モン (BUN / MON)", originModule: 7 },
            { character: "読", meaning: "Ler", kunyomi: "よ・む (yomu)", onyomi: "ドク (DOKU)", originModule: 7 },
            { character: "書", meaning: "Escrever / Livro", kunyomi: "か・く (kaku)", onyomi: "ショ (SHO)", originModule: 7 },
            { character: "言", meaning: "Dizer / Palavra", kunyomi: "い・う / koto", onyomi: "ゲン / ゴン (GEN / GON)", originModule: 7 },
            { character: "話", meaning: "Falar / Conversar", kunyomi: "はな・す / hanashi", onyomi: "ワ (WA)", originModule: 7 },
            { character: "出", meaning: "Sair / Tirar", kunyomi: "で・る / dasu", onyomi: "シュツ (SHUTSU)", originModule: 7 },

            // --- MÓDULO 8: ADJETIVOS E QUALIDADES ---
            { character: "大", meaning: "Grande / Amplo", kunyomi: "おお・きい / oo-", onyomi: "ダイ / タイ (DAI / TAI)", originModule: 8 },
            { character: "小", meaning: "Pequeno / Menor", kunyomi: "ちい・さい / ko-", onyomi: "ショウ (SHOU)", originModule: 8 },
            { character: "高", meaning: "Alto / Caro", kunyomi: "たか・い / taka-", onyomi: "コウ (KOU)", originModule: 8 },
            { character: "安", meaning: "Barato / Seguro / Paz", kunyomi: "やす・い (yasui)", onyomi: "アン (AN)", originModule: 8 },
            { character: "新", meaning: "Novo / Fresco", kunyomi: "あたら・しい / nii-", onyomi: "シン (SHIN)", originModule: 8 },
            { character: "古", meaning: "Velho / Antigo", kunyomi: "ふる・い / furu-", onyomi: "コ (KO)", originModule: 8 },
            { character: "白", meaning: "Branco / Puro", kunyomi: "しろ / shiroi", onyomi: "ハク / ビャク (HAKU / BYAKU)", originModule: 8 },
            { character: "黒", meaning: "Preto / Escuro", kunyomi: "くろ / kuroi", onyomi: "コク (KOKU)", originModule: 8 },
            { character: "赤", meaning: "Vermelho", kunyomi: "あか / akai", onyomi: "セキ / シャク (SEKI / SHAKU)", originModule: 8 },
            { character: "青", meaning: "Azul / Verde", kunyomi: "あお / aoi", onyomi: "セイ / ショウ (SEI / SHOU)", originModule: 8 },

            // --- MÓDULO 9: SOCIEDADE E ESCOLA ---
            { character: "学", meaning: "Estudar / Aprendizado", kunyomi: "まな・ぶ (manabu)", onyomi: "ガク / ガッ- (GAKU / GAK-)", originModule: 9 },
            { character: "校", meaning: "Escola", kunyomi: "-", onyomi: "コウ (KOU)", originModule: 9 },
            { character: "先", meaning: "Antes / Futuro", kunyomi: "さき (saki)", onyomi: "セン (SEN)", originModule: 9 },
            { character: "生", meaning: "Vida / Nascer", kunyomi: "い・きる / umareru", onyomi: "セイ / ショウ (SEI / SHOU)", originModule: 9 },
            { character: "本", meaning: "Livro / Origem", kunyomi: "もと (moto)", onyomi: "ホン / -ボン (HON)", originModule: 9 },
            { character: "語", meaning: "Idioma / Palavra", kunyomi: "かた・る (kataru)", onyomi: "ゴ (GO)", originModule: 9 },
            { character: "何", meaning: "O que / Qual", kunyomi: "なに / nan", onyomi: "カ (KA)", originModule: 9 },
            { character: "車", meaning: "Carro / Veículo", kunyomi: "くるま (kuruma)", onyomi: "シャ (SHA)", originModule: 9 },
            { character: "電", meaning: "Eletricidade", kunyomi: "-", onyomi: "デン (DEN)", originModule: 9 },
            { character: "店", meaning: "Loja / Comércio", kunyomi: "みせ (mise)", onyomi: "テン (TEN)", originModule: 9 },
            { character: "駅", meaning: "Estação", kunyomi: "えき (eki)", onyomi: "エキ (EKI)", originModule: 9 },

            // --- MÓDULO 10: CULINÁRIA E ALIMENTOS ---
            { character: "魚", meaning: "Peixe", kunyomi: "さかな (sakana)", onyomi: "ギョ (GYO)", originModule: 10 },
            { character: "肉", meaning: "Carne", kunyomi: "-", onyomi: "ニク (NIKU)", originModule: 10 },
            { character: "野", meaning: "Campo / Planície", kunyomi: "の (no)", onyomi: "ヤ (YA)", originModule: 10 },
            { character: "菜", meaning: "Verdura / Vegetal", kunyomi: "な (na)", onyomi: "サイ (SAI)", originModule: 10 },
            { character: "茶", meaning: "Chá", kunyomi: "-", onyomi: "チャ / サ (CHA / SA)", originModule: 10 },
            { character: "酒", meaning: "Bebida alcoólica / Saquê", kunyomi: "さけ (sake)", onyomi: "シュ (SHU)", originModule: 10 },
            { character: "飯", meaning: "Arroz cozido / Refeição", kunyomi: "めし (meshi)", onyomi: "ハン (HAN)", originModule: 10 },
            { character: "味", meaning: "Sabor / Gosto", kunyomi: "あじ (aji)", onyomi: "ミ (MI)", originModule: 10 },
            { character: "果", meaning: "Fruta / Fruto", kunyomi: "は・たす (hatasu)", onyomi: "カ (KA)", originModule: 10 }
        ]
    },

]

// Módulo 2 e seguintes podem ser adicionados aqui quando chegarmos neles!
// { module: 2, title: "Módulo 2: Tempo e Calendário", kanjis: [...] }


// Esporta globalmente ou para o app.js
if (typeof module !== 'undefined') {
    module.exports = kanjiN5Data;
}