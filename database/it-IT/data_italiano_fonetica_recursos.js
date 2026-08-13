// ============================================================================
// DATASET RECURSOS DE PRONÚNCIA E FONÉTICA ITALIANA - HANDCRAFTED (it-IT)
// IDIOMAS ACADEMY
// ============================================================================

const FONETICA_ITALIANO_DADOS = [
    // NÍVEL A1
    {
        level: 'A1',
        levelTitle: 'Nível A1 — Sons Fundamentais e Alfabeto',
        topics: [
            {
                id: 'it_fon_a1_01',
                title: 'Alfabeto e Nomes das Letras (L\'alfabeto italiano)',
                ipaSymbol: '[a], [bi], [tʃi], [di]...',
                description: 'O alfabeto italiano tradicional tem 21 letras nativas (mais 5 letras estrangeiras: J, K, W, X, Y). Aprenda a pronunciar o nome oficial de cada letra.',
                rule: 'Cada letra em italiano tem um nome fonético fixo. O H (acca) é mudo e não possui som próprio.',
                examples: [
                    { it: 'A (a)', phonetic: '[a]', pt: 'letra A', audio: 'A' },
                    { it: 'B (bi)', phonetic: '[bi]', pt: 'letra B', audio: 'B' },
                    { it: 'C (ci)', phonetic: '[tʃi]', pt: 'letra C', audio: 'C' },
                    { it: 'D (di)', phonetic: '[di]', pt: 'letra D', audio: 'D' },
                    { it: 'E (e)', phonetic: '[e]', pt: 'letra E', audio: 'E' },
                    { it: 'F (effe)', phonetic: '[effe]', pt: 'letra F', audio: 'F' },
                    { it: 'G (gi)', phonetic: '[dʒi]', pt: 'letra G', audio: 'G' },
                    { it: 'H (acca)', phonetic: '[akka]', pt: 'letra H (muta)', audio: 'H' },
                    { it: 'I (i)', phonetic: '[i]', pt: 'letra I', audio: 'I' },
                    { it: 'L (elle)', phonetic: '[elle]', pt: 'letra L', audio: 'L' },
                    { it: 'M (emme)', phonetic: '[emme]', pt: 'letra M', audio: 'M' },
                    { it: 'N (enne)', phonetic: '[enne]', pt: 'letra N', audio: 'N' },
                    { it: 'O (o)', phonetic: '[o]', pt: 'letra O', audio: 'O' },
                    { it: 'P (pi)', phonetic: '[pi]', pt: 'letra P', audio: 'P' },
                    { it: 'Q (cu)', phonetic: '[ku]', pt: 'letra Q', audio: 'Q' },
                    { it: 'R (erre)', phonetic: '[erre]', pt: 'letra R', audio: 'R' },
                    { it: 'S (esse)', phonetic: '[esse]', pt: 'letra S', audio: 'S' },
                    { it: 'T (ti)', phonetic: '[ti]', pt: 'letra T', audio: 'T' },
                    { it: 'U (u)', phonetic: '[u]', pt: 'letra U', audio: 'U' },
                    { it: 'V (vu / tivù)', phonetic: '[vu]', pt: 'letra V', audio: 'V' },
                    { it: 'Z (zeta)', phonetic: '[dzeta]', pt: 'letra Z', audio: 'Z' }
                ]
            },
            {
                id: 'it_fon_a1_02',
                title: 'Sons das Consoantes C e CH (Duro vs Suave)',
                ipaSymbol: '[k] vs [tʃ]',
                description: 'A consoante C muda de som conforme a vogal seguinte. C + A/O/U tem som duro [k]. C + E/I tem som suave [tʃ] (como em "tchau"). A letra H restaura o som duro [k] antes de E/I.',
                rule: 'C + A, O, U ➔ [k] | C + E, I ➔ [tʃ] | CH + E, I ➔ [k]',
                examples: [
                    { it: 'casa', phonetic: '[ˈkaːza]', pt: 'casa (som duro [k])', audio: 'casa' },
                    { it: 'ciao', phonetic: '[ˈtʃaːo]', pt: 'tchau / olá (som suave [tʃ])', audio: 'ciao' },
                    { it: 'chianti', phonetic: '[ˈkjan.ti]', pt: 'vinho chianti (H restaura som duro [k])', audio: 'chianti' },
                    { it: 'cena', phonetic: '[ˈtʃeːna]', pt: 'jantar (som suave [tʃ])', audio: 'cena' },
                    { it: 'perché', phonetic: '[perˈke]', pt: 'por que / porque (som duro [k])', audio: 'perché' }
                ]
            },
            {
                id: 'it_fon_a1_03',
                title: 'Sons das Consoantes G e GH (Duro vs Suave)',
                ipaSymbol: '[ɡ] vs [dʒ]',
                description: 'Assim como a letra C, G + A/O/U tem som duro [ɡ] (como em "gato"). G + E/I tem som suave [dʒ] (como em "dia" em certas regiões). A letra H restaura o som duro [ɡ] antes de E/I.',
                rule: 'G + A, O, U ➔ [ɡ] | G + E, I ➔ [dʒ] | GH + E, I ➔ [ɡ]',
                examples: [
                    { it: 'gatto', phonetic: '[ˈɡat.to]', pt: 'gato (som duro [ɡ])', audio: 'gatto' },
                    { it: 'giardino', phonetic: '[dʒarˈdiːno]', pt: 'jardim (som suave [dʒ])', audio: 'giardino' },
                    { it: 'spaghetti', phonetic: '[spaˈɡet.ti]', pt: 'espaguete (H restaura som duro [ɡ])', audio: 'spaghetti' },
                    { it: 'gelato', phonetic: '[dʒeˈlaːto]', pt: 'sorvete (som suave [dʒ])', audio: 'gelato' },
                    { it: 'funghi', phonetic: '[ˈfuŋ.ɡi]', pt: 'cogumelos (som duro [ɡ])', audio: 'funghi' }
                ]
            }
        ]
    },
    // NÍVEL A2
    {
        level: 'A2',
        levelTitle: 'Nível A2 — Digramas, Trigramas e Vogais',
        topics: [
            {
                id: 'it_fon_a2_01',
                title: 'Vogais Abertas e Fechadas (E e O Tônicas)',
                ipaSymbol: '[ɛ]/[e] e [ɔ]/[o]',
                description: 'Em italiano há 7 sons vocálicos. As vogais E e O podem ser abertas ([ɛ], [ɔ]) ou fechadas ([e], [o]). Em muitos pares de palavras, o timbre muda completamente o significado (homógrafos).',
                rule: 'È (aberta) vs É (fechada) | Ò (aberta) vs Ó (fechada)',
                examples: [
                    { it: 'pèsca', phonetic: '[ˈpɛska]', pt: 'pêssego (E aberta [ɛ])', audio: 'pesca' },
                    { it: 'pésca', phonetic: '[ˈpeska]', pt: 'pesca / ato de pescar (E fechada [e])', audio: 'pesca' },
                    { it: 'bòtte', phonetic: '[ˈbɔtte]', pt: 'pancadaria / surra (O aberta [ɔ])', audio: 'botte' },
                    { it: 'bótte', phonetic: '[ˈbotte]', pt: 'barril / pipo (O fechada [o])', audio: 'botte' },
                    { it: 'vènti', phonetic: '[ˈvɛnti]', pt: 'ventos (E aberta [ɛ])', audio: 'venti' },
                    { it: 'vénti', phonetic: '[ˈventi]', pt: 'vinte (número 20) (E fechada [e])', audio: 'venti' }
                ]
            },
            {
                id: 'it_fon_a2_02',
                title: 'Digramas de SC, SCH, GN e GL (Sons Especiais)',
                ipaSymbol: '[ʃ], [sk], [ɲ], [ʎ]',
                description: 'O italiano possui encontros consonantais únicos. SC + E/I pronuncia-se [ʃ] (como "ch" em "chave"). SCH + E/I tem som duro [sk]. GN pronuncia-se [ɲ] (como "nh"). GL + I pronuncia-se [ʎ] (como "lh").',
                rule: 'SC+E/I ➔ [ʃ] | SCH+E/I ➔ [sk] | GN ➔ [ɲ] | GLI ➔ [ʎi]',
                examples: [
                    { it: 'scena', phonetic: '[ˈʃɛːna]', pt: 'cena (som [ʃ])', audio: 'scena' },
                    { it: 'scheletro', phonetic: '[ˈskeːletro]', pt: 'esqueleto (SCH som [sk])', audio: 'scheletro' },
                    { it: 'bagno', phonetic: '[ˈbaɲɲo]', pt: 'banheiro (GN som [ɲ] "nh")', audio: 'bagno' },
                    { it: 'famiglia', phonetic: '[faˈmiʎʎa]', pt: 'família (GLI som [ʎ] "lh")', audio: 'famiglia' },
                    { it: 'gli', phonetic: '[ʎi]', pt: 'os (artigo definido plural)', audio: 'gli' }
                ]
            },
            {
                id: 'it_fon_a2_03',
                title: 'Sons da Letra Z (Sonora vs Surda) e S Intervocálica',
                ipaSymbol: '[dz] / [ts] e [z] / [s]',
                description: 'A letra Z pode ser sonora [dz] (como em "zero") ou surda [ts] (como em "pizza"). A letra S entre duas vogais é frequentemente sonora [z] no norte e centro da Itália.',
                rule: 'Z ➔ [dz] (zero) ou [ts] (pizza) | S entre vogais ➔ [z] (casa)',
                examples: [
                    { it: 'zero', phonetic: '[ˈdzɛːro]', pt: 'zero (Z sonora [dz])', audio: 'zero' },
                    { it: 'pizza', phonetic: '[ˈpit.tsa]', pt: 'pizza (Z surda [ts])', audio: 'pizza' },
                    { it: 'casa', phonetic: '[ˈkaːza]', pt: 'casa (S intervocálica [z])', audio: 'casa' },
                    { it: 'sole', phonetic: '[ˈsoːle]', pt: 'sol (S inicial surda [s])', audio: 'sole' },
                    { it: 'hanno', phonetic: '[ˈan.no]', pt: 'eles têm (H é 100% mudo)', audio: 'hanno' }
                ]
            }
        ]
    },
    // NÍVEL B1
    {
        level: 'B1',
        levelTitle: 'Nível B1 — Consoantes Duplas, Elisão e Ritmo',
        topics: [
            {
                id: 'it_fon_b1_01',
                title: 'Consoantes Duplas (Le Doppie - Prolongamento Sonoro)',
                ipaSymbol: '[t.t], [l.l], [p.p], [r.r]',
                description: 'Em italiano, as consoantes duplas (le doppie) devem ser articuladas com o dobro de duração e uma breve pausa na consoante. Alterar uma dupla altera o significado da palavra!',
                rule: 'Consoante simples = curta e leve | Consoante dupla = prolongada e intensa com pausa',
                examples: [
                    { it: 'palla', phonetic: '[ˈpal.la]', pt: 'bola (dupla LL prolongada)', audio: 'palla' },
                    { it: 'pala', phonetic: '[ˈpaːla]', pt: 'pá (L simples)', audio: 'pala' },
                    { it: 'notte', phonetic: '[ˈnot.te]', pt: 'noite (dupla TT prolongada)', audio: 'notte' },
                    { it: 'note', phonetic: '[ˈnɔːte]', pt: 'notas musicais (T simples)', audio: 'note' },
                    { it: 'fatto', phonetic: '[ˈfat.to]', pt: 'fato / feito (dupla TT)', audio: 'fatto' },
                    { it: 'fato', phonetic: '[ˈfaːto]', pt: 'destino (T simples)', audio: 'fato' }
                ]
            },
            {
                id: 'it_fon_b1_02',
                title: 'Acento Tônico e Ritmo das Palavras (Piane, Tronche, Sdrucciole)',
                ipaSymbol: 'Acento tônico e ritmo silábico',
                description: 'A maioria das palavras italianas são "piane" (paroxítonas, acento na penúltima sílaba). Palavras "tronche" levam acento gráfico na última sílaba. Palavras "sdrucciole" têm o acento na antepenúltima sílaba.',
                rule: 'Parole piane (penúltima) | Parole tronche (última com acento) | Parole sdrucciole (antepenúltima)',
                examples: [
                    { it: 'parlàre', phonetic: '[parˈlaːre]', pt: 'falar (Parola piana - penúltima sílaba)', audio: 'parlare' },
                    { it: 'città', phonetic: '[tʃitˈta]', pt: 'cidade (Parola tronca - acento gráfico no final)', audio: 'città' },
                    { it: 'càffè', phonetic: '[kafˈfɛ]', pt: 'café (Parola tronca)', audio: 'caffè' },
                    { it: 'tavolo', phonetic: '[ˈtaːvolo]', pt: 'mesa (Parola sdrucciola - antepenúltima)', audio: 'tavolo' },
                    { it: 'mùsica', phonetic: '[ˈmuːzika]', pt: 'música (Parola sdrucciola)', audio: 'musica' }
                ]
            },
            {
                id: 'it_fon_b1_03',
                title: 'Elisão e Apóstrofo (L\'elisione e l\'apostrofo)',
                ipaSymbol: 'Crasia e união de vogais',
                description: "A elisão ocorre quando uma vogal final cai diante de outra palavra iniciada por vogal, usando o apóstrofo. É obrigatória com artigos definidos (l\'amico) e monossílabos comuns.",
                rule: "Drop da vogal final + apóstrofo (') diante de vogal inicial",
                examples: [
                    { it: "l\'amico", phonetic: '[laˈmiːko]', pt: "o amigo (lo + amico ➔ l\'amico)", audio: "l'amico" },
                    { it: "un\'amica", phonetic: '[unaˈmiːka]', pt: "uma amiga (una + amica ➔ un\'amica)", audio: "un'amica" },
                    { it: "d\'accordo", phonetic: '[dakˈkor.do]', pt: "de acordo (da/di + accordo ➔ d\'accordo)", audio: "d'accordo" },
                    { it: "sull\'albero", phonetic: '[sulˈlal.bero]', pt: "na árvore (sullo + albero ➔ sull\'albero)", audio: "sull'albero" }
                ]
            }
        ]
    },
    // NÍVEL B2
    {
        level: 'B2',
        levelTitle: 'Nível B2 — Entonação e Variações Regionais',
        topics: [
            {
                id: 'it_fon_b2_01',
                title: 'Raddoppiamento Fonosintattico (Duplicação Sintática)',
                ipaSymbol: 'Duplicação consonantal entre palavras',
                description: 'No italiano falado padrão (especialmente centro e sul), certas palavras monossílabas com acento ou marcadas provocam a duplicação espontânea da consoante inicial da palavra seguinte.',
                rule: 'Monossílabo forte / palavra oxítona + consoante ➔ duplicação fonética da consoante inicial',
                examples: [
                    { it: 'a casa ➔ [akˈkaːsa]', phonetic: '[akˈkaːsa]', pt: 'para casa (na fala padrão de algumas regiões, a consoante C duplica)', audio: 'a casa' },
                    { it: 'va bene ➔ [vabˈbɛːne]', phonetic: '[vabˈbɛːne]', pt: 'está bem / ok (pronunciado como "vabbene")', audio: 'va bene' },
                    { it: 'soprattutto ➔ [sopratˈtut.to]', phonetic: '[sopratˈtut.to]', pt: 'sobretudo (fusão com duplicação de T)', audio: 'soprattutto' },
                    { it: 'da capo ➔ [dakˈkaːpo]', phonetic: '[dakˈkaːpo]', pt: 'do início (duplicação de C no falado)', audio: 'da capo' }
                ]
            },
            {
                id: 'it_fon_b2_02',
                title: 'Entonação de Frases Complexas e Perguntas Retóricas',
                ipaSymbol: 'Modulação melódica do italiano',
                description: 'O italiano possui uma melodia de frase ("cadenza") muito expressiva. Frases afirmativas descem no final; perguntas sobem a melodia na penúltima sílaba; exclamações usam picos de intensidade.',
                rule: 'Curva melódica: Afirmativa (descendente) | Interrogativa (ascendente no núcleo)',
                examples: [
                    { it: 'Vieni a cena con noi stasera?', phonetic: 'Pergunta com subida melódica', pt: 'Você vem jantar conosco hoje à noite?', audio: 'Vieni a cena con noi stasera?' },
                    { it: 'Non è possibile che sia successo davvero!', phonetic: 'Exclamação com pico expressivo', pt: 'Não é possível que tenha acontecido de verdade!', audio: 'Non è possibile che sia successo davvero!' },
                    { it: 'Ma davvero pensi che sia la scelta giusta?', phonetic: 'Pergunta retórica com ironia leve', pt: 'Mas você realmente pensa que seja a escolha certa?', audio: 'Ma davvero pensi che sia la scelta giusta?' }
                ]
            },
            {
                id: 'it_fon_b2_03',
                title: 'Nuances e Variações Regionais da Pronúncia',
                ipaSymbol: 'Variantes regionais (Nord, Centro, Sud)',
                description: 'Embora o italiano padrão (italiano standard) seja ensinado nas escolas e mídia, existem sotaques regionais naturais (norte com S sonora, Toscana com "gorgia", sul com consoantes mais fortes). Todas são compreendidas.',
                rule: 'Aprecie a riqueza geográfica dos sotaques sem considerar variantes regionais como erros.',
                examples: [
                    { it: 'Italiano Standard (RAI/Teatro)', phonetic: 'Pronúncia neutra de dicionário', pt: 'Pronúncia padrão formal usada em áudios e dublagens.', audio: 'Italiano standard di pronuncia' },
                    { it: 'Cadenza settentrionale (Nord)', phonetic: 'Vogais fechadas e S sempre sonora', pt: 'Caracterizada pelo ritmo mais rápido e S sonora no norte.', audio: 'Cadenza del nord' },
                    { it: 'Cadenza centro-meridionale (Roma/Napoli)', phonetic: 'Raddoppiamento marcato e consonanti forti', pt: 'Caracterizada pela vivacidade e duplicações consonantais expressivas.', audio: 'Cadenza del centro e del sud' }
                ]
            }
        ]
    }
];

if (typeof window !== 'undefined') window.FONETICA_ITALIANO_DADOS = FONETICA_ITALIANO_DADOS;
if (typeof module !== 'undefined' && module.exports) module.exports = { FONETICA_ITALIANO_DADOS };
