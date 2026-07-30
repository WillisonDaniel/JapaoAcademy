// ==========================================
// BANCO DE DADOS DE PRONÚNCIA & FONÉTICA (EN-US)
// ORGANIZADO EM 4 NÍVEIS CEFR (A1, A2, B1, B2) - 16 TÓPICOS COMPLETO
// ==========================================

const PRONUNCIATION_DATA = [
    {
        "level": "A1",
        "levelBadge": "🔵 Level A1 (Beginner)",
        "sectionTitle": "🔵 Level A1: Fundamentos dos Sons & Articulação Inicial",
        "description": "Construa a base da pronúncia em inglês, diferencie as vogais essenciais e elimine os primeiros vícios de pronúncia.",
        "topics": [
            {
                "id": "p_a1_vowels_long_short",
                "title": "1. Vogais Curtas vs Longas Essenciais (/iː/ vs /ɪ/ & /uː/ vs /ʊ/)",
                "ipaSymbol": "/iː/ vs /ɪ/ & /uː/ vs /ʊ/",
                "description": "Em inglês, a duração e a tensão dos lábios mudam o significado da palavra. Diferencie o 'ee' sorridente do 'i' curto e relaxado.",
                "rules": [
                    "Som /iː/ (Long EE): Estique os lábios firmemente como um sorriso (ex: Sheep, Feet, Beach).",
                    "Som /ɪ/ (Short I): Lábios totalmente relaxados, tom intermediário entre 'i' e 'e' (ex: Ship, Fit, Bit).",
                    "Som /uː/ (Long OO): Lábios projetados em bico tenso (ex: Pool, Fool, Food).",
                    "Som /ʊ/ (Short OO): Lábios relaxados e tom gutural (ex: Pull, Full, Look, Book)."
                ],
                "minimalPairs": [
                    {
                        "word1": "Sheep",
                        "ipa1": "/ʃiːp/",
                        "word2": "Ship",
                        "ipa2": "/ʃɪp/",
                        "meaning1": "Ovelha",
                        "meaning2": "Navio"
                    },
                    {
                        "word1": "Feet",
                        "ipa1": "/fiːt/",
                        "word2": "Fit",
                        "ipa2": "/fɪt/",
                        "meaning1": "Pés",
                        "meaning2": "Em forma / Servir"
                    },
                    {
                        "word1": "Beach",
                        "ipa1": "/biːtʃ/",
                        "word2": "Bitch",
                        "ipa2": "/bɪtʃ/",
                        "meaning1": "Praia",
                        "meaning2": "Cadela / Gíria"
                    },
                    {
                        "word1": "Pool",
                        "ipa1": "/puːl/",
                        "word2": "Pull",
                        "ipa2": "/pʊl/",
                        "meaning1": "Piscina",
                        "meaning2": "Puxar"
                    }
                ],
                "quiz": [
                    {
                        "q": "Qual destas palavras possui o som de vogal longa sorridente (/iː/)?",
                        "options": [
                            "Ship",
                            "Sheep",
                            "Sit",
                            "Fit"
                        ],
                        "a": "Sheep",
                        "explanation": "'Sheep' pronuncia-se /ʃiːp/ com os lábios esticados em sorriso."
                    },
                    {
                        "q": "Como se pronuncia a palavra 'Pull' (puxar) em comparação a 'Pool' (piscina)?",
                        "options": [
                            "Com o som de 'u' curto e relaxado (/ʊ/)",
                            "Com o som de 'u' longo em bico (/uː/)",
                            "Com som de 'i' longo",
                            "Com o mesmo som exato de Pool"
                        ],
                        "a": "Com o som de 'u' curto e relaxado (/ʊ/)",
                        "explanation": "'Pull' usa o som curto relaxado /pʊl/, enquanto 'Pool' usa /puːl/."
                    }
                ]
            },
            {
                "id": "p_a1_consonants_h_w_v",
                "title": "2. Consoantes Iniciais Críticas (H Aspirado vs Mudo, W vs V)",
                "ipaSymbol": "/h/, /w/, /v/",
                "description": "Aprenda a soprar o 'H' inicial, o som suave do 'W' e a vibração labiodental do 'V'.",
                "rules": [
                    "Som /h/ Aspirado: Sopro suave na garganta (ex: House, Hello, Happy, Hotel).",
                    "Som /h/ Mudo: Não se pronuncia a letra H (ex: Hour /aʊər/, Honest /ˈɒn.ɪst/, Honor /ˈɒn.ər/).",
                    "Som /w/: Lábios arredondados sem tocar dentes (ex: Water, Wine, West).",
                    "Som /v/: Dentes superiores encostando no lábio inferior com vibração (ex: Very, Vine, Vest)."
                ],
                "minimalPairs": [
                    {
                        "word1": "Wine",
                        "ipa1": "/waɪn/",
                        "word2": "Vine",
                        "ipa2": "/vaɪn/",
                        "meaning1": "Vinho",
                        "meaning2": "Parreira / Vinha"
                    },
                    {
                        "word1": "West",
                        "ipa1": "/west/",
                        "word2": "Vest",
                        "ipa2": "/vest/",
                        "meaning1": "Oeste",
                        "meaning2": "Colete"
                    },
                    {
                        "word1": "House",
                        "ipa1": "/haʊs/",
                        "word2": "Hour",
                        "ipa2": "/aʊər/",
                        "meaning1": "Casa (H aspirado)",
                        "meaning2": "Hora (H mudo)"
                    }
                ],
                "quiz": [
                    {
                        "q": "Em qual destas palavras a letra 'H' inicial é totalmente MIDA (silenciosa)?",
                        "options": [
                            "Hotel",
                            "Hour",
                            "Happy",
                            "House"
                        ],
                        "a": "Hour",
                        "explanation": "'Hour' pronuncia-se /aʊər/, sem o som de 'H' aspirado."
                    },
                    {
                        "q": "Qual a diferença física de articulação entre o 'W' (Wine) e o 'V' (Vine)?",
                        "options": [
                            "No 'W', os dentes encostam na língua",
                            "No 'V', os lábios fazem um bico sem tocar dentes",
                            "No 'V', os dentes superiores encostam no lábio inferior com vibração",
                            "Ambos são pronunciados exatamente como o V em português"
                        ],
                        "a": "No 'V', os dentes superiores encostam no lábio inferior com vibração",
                        "explanation": "'V' é labiodental vibrado (/v/), enquanto 'W' é bilabial (/w/)."
                    }
                ]
            },
            {
                "id": "p_a1_articles_numbers",
                "title": "3. Pronúncia de Números & Artigos ('0' = Oh, 'The' /ðə/ vs /ðiː/)",
                "ipaSymbol": "/ðə/ vs /ðiː/, /oʊ/",
                "description": "Aprenda as convenções fonéticas nativas para números e para o artigo definido 'The'.",
                "rules": [
                    "Dígito Zero em telefones: Pronuncia-se como a letra 'Oh' (/oʊ/) em vez de 'Zero' (ex: 555-0192 ➔ 'five-five-five, oh-one-nine-two').",
                    "Artigo 'The' antes de CONSOANTE: Pronuncia-se /ðə/ com Schwa (ex: The book, The car).",
                    "Artigo 'The' antes de VOGAL: Pronuncia-se /ðiː/ com som longo (ex: The apple, The end, The evening)."
                ],
                "minimalPairs": [
                    {
                        "word1": "The book",
                        "ipa1": "/ðə bʊk/",
                        "word2": "The apple",
                        "ipa2": "/ðiː ˈæp.əl/",
                        "meaning1": "O livro (antes de consoante)",
                        "meaning2": "A maçã (antes de vogal)"
                    },
                    {
                        "word1": "The car",
                        "ipa1": "/ðə kɑːr/",
                        "word2": "The end",
                        "ipa2": "/ðiː end/",
                        "meaning1": "O carro",
                        "meaning2": "O fim"
                    }
                ],
                "quiz": [
                    {
                        "q": "Como se pronuncia o artigo 'The' na frase 'The apple' (antes de vogal)?",
                        "options": [
                            "/da/ (com som de D forte)",
                            "/ðə/ (com som fraco 'dâ')",
                            "/de/ (com som curto)",
                            "/ðiː/ (com som longo 'dii')"
                        ],
                        "a": "/ðiː/ (com som longo 'dii')",
                        "explanation": "Antes de sons vocálicos, 'The' pronuncia-se /ðiː/."
                    }
                ]
            },
            {
                "id": "p_a1_epenthesis_elimination",
                "title": "4. Vício A1 a Eliminar: A Epêntese do 'I' Final",
                "ipaSymbol": "Trava Consoante Final",
                "description": "Elimine o hábito brasileiro de adicionar um som de 'i' no final de palavras terminadas em consoante.",
                "rules": [
                    "Vício Comum: Pronunciar 'stopi', 'likey', 'facebooki', 'biggi'.",
                    "Técnica de Correção: Interrompa o fluxo de ar bruscamente na consoante final sem soltar a vogal.",
                    "Exemplos Corretos: Stop (/stɒp/), Like (/laɪk/), Book (/bʊk/), Big (/bɪɡ/)."
                ],
                "minimalPairs": [
                    {
                        "word1": "Stop",
                        "ipa1": "/stɒp/",
                        "word2": "Stop-i (Errado)",
                        "ipa2": "[stɒpi]",
                        "meaning1": "Correto (consoante muda)",
                        "meaning2": "Vício de pronúncia"
                    },
                    {
                        "word1": "Like",
                        "ipa1": "/laɪk/",
                        "word2": "Like-i (Errado)",
                        "ipa2": "[laɪki]",
                        "meaning1": "Correto (mudo no final)",
                        "meaning2": "Vício de pronúncia"
                    }
                ],
                "quiz": [
                    {
                        "q": "Qual é a forma correta de pronunciar a palavra 'Facebook' em inglês nativo?",
                        "options": [
                            "Deletar o 'k' completamente",
                            "Mudar para som mudo no K final /feɪs.bʊk/",
                            "Adicionar som de 'i' no final (Facebooki)",
                            "Pronunciar como 'Face-booque-i'"
                        ],
                        "a": "Mudar para som mudo no K final /feɪs.bʊk/",
                        "explanation": "A consoante K final deve ser travada sem adicionar vogal epentética no fim."
                    }
                ]
            },
            {
                "id": "p_a1_vowels_cat_cut",
                "title": "5. Vogal Aberta vs Neutra (/æ/ vs /ʌ/ - 'Cat' vs 'Cut')",
                "ipaSymbol": "/æ/ vs /ʌ/",
                "description": "Aprenda a diferenciar o som de 'A' sorridente e aberto (Cat) do som de 'A/Â' curto e relaxado vindo da garganta (Cut).",
                "rules": [
                    "Som /æ/ (Cat, Bad, Hat): Abra bem a boca na vertical e estique levemente os lábios. É um som intermediário entre 'É' e 'Á'.",
                    "Som /ʌ/ (Cut, Bud, Hut): A boca fica neutra e relaxada, e o som sai curto da garganta, parecido com um 'Â' seco."
                ],
                "minimalPairs": [
                    {
                        "word1": "Cat",
                        "ipa1": "/kæt/",
                        "word2": "Cut",
                        "ipa2": "/kʌt/",
                        "meaning1": "Gato (/æ/ aberto)",
                        "meaning2": "Cortar (/ʌ/ neutro)"
                    },
                    {
                        "word1": "Hat",
                        "ipa1": "/hæt/",
                        "word2": "Hut",
                        "ipa2": "/hʌt/",
                        "meaning1": "Chapéu",
                        "meaning2": "Cabana"
                    },
                    {
                        "word1": "Bad",
                        "ipa1": "/bæd/",
                        "word2": "Bud",
                        "ipa2": "/bʌd/",
                        "meaning1": "Mau / Ruim",
                        "meaning2": "Brotinho / Amigo"
                    }
                ],
                "quiz": [
                    {
                        "q": "Qual a articulação correta para produzir o som /æ/ da palavra 'Cat'?",
                        "options": [
                            "Manter a boca quase fechada com som de 'I'",
                            "Abrir bem a boca esticando os lábios num tom entre 'É' e 'Á'",
                            "Soprar o ar sem mover a língua",
                            "Manter os lábios em bico como um 'O'"
                        ],
                        "a": "Abrir bem a boca esticando os lábios num tom entre 'É' e 'Á'",
                        "explanation": "O som /æ/ exige abertura de boca e tensão leve nos lábios."
                    }
                ]
            }
        ]
    },
    {
        "level": "A2",
        "levelBadge": "🟢 Level A2 (Elementary)",
        "sectionTitle": "🟢 Level A2: Flexões Gramaticais, Plurais & O Som TH",
        "description": "Domine a pronúncia exata do passado (-ed), plurais (-s), o som TH e a vogal neutra Schwa.",
        "topics": [
            {
                "id": "p_a2_ed_ending",
                "title": "1. Regra Definitiva do Sufixo -ED no Passado Regular (/t/, /d/, /ɪd/)",
                "ipaSymbol": "/t/, /d/, /ɪd/",
                "description": "O sufixo -ED no passado NÃO se pronuncia sempre como 'ed'. Existem 3 sons distintos dependendo do som final do verbo base.",
                "rules": [
                    "Som /t/ (Voz Desativada): Após consoantes surdas p, k, f, s, sh, ch (ex: Walked /wɔːkt/, Stopped /stɒpt/, Liked /laɪkt/).",
                    "Som /d/ (Voz Ativada): Após vogais e consoantes vozeadas b, g, v, z, m, n, l, r (ex: Played /pleɪd/, Loved /lʌvd/, Cleaned /kliːnd/).",
                    "Som com Sílaba Extra /ɪd/: APENAS após sons de T ou D no verbo base (ex: Wanted /ˈwɒn.tɪd/, Decided /dɪˈsaɪ.dɪd/, Visited /ˈvɪz.ɪ.tɪd/)."
                ],
                "minimalPairs": [
                    {
                        "word1": "Walked",
                        "ipa1": "/wɔːkt/",
                        "word2": "Wanted",
                        "ipa2": "/ˈwɒn.tɪd/",
                        "meaning1": "Som de /t/ no final",
                        "meaning2": "Som de /ɪd/ (sílaba extra)"
                    },
                    {
                        "word1": "Played",
                        "ipa1": "/pleɪd/",
                        "word2": "Decided",
                        "ipa2": "/dɪˈsaɪ.dɪd/",
                        "meaning1": "Som de /d/ no final",
                        "meaning2": "Som de /ɪd/ (sílaba extra)"
                    }
                ],
                "quiz": [
                    {
                        "q": "Em qual destes verbos no passado o sufixo -ED gera uma nova sílaba (/ɪd/)?",
                        "options": [
                            "Played",
                            "Stopped",
                            "Walked",
                            "Wanted"
                        ],
                        "a": "Wanted",
                        "explanation": "'Wanted' termina com som de T no verbo base, resultando no som /ɪd/ com sílaba extra."
                    },
                    {
                        "q": "Como se pronuncia o passado do verbo 'Stopped'?",
                        "options": [
                            "/stɒpt/ (com som de T mudo no final)",
                            "/stɒp.ed/ (com som de ed bem claro)",
                            "/stɒpd/ (com som de D forte)",
                            "/stɒp.id/ (com sílaba extra)"
                        ],
                        "a": "/stɒpt/ (com som de T mudo no final)",
                        "explanation": "Como 'stop' termina no som surdo /p/, o sufixo -ED soa como /t/ (/stɒpt/)."
                    }
                ]
            },
            {
                "id": "p_a2_s_plural_ending",
                "title": "2. Sufixo de Plural e 3ª Pessoa -S / -ES (/s/, /z/, /ɪz/)",
                "ipaSymbol": "/s/, /z/, /ɪz/",
                "description": "A terminação -S pode soar como 'S' seco, 'Z' vibrado ou adicionar a sílaba 'IZ'.",
                "rules": [
                    "Som /s/: Após consoantes surdas p, t, k, f (ex: Cats /kæts/, Books /bʊks/, Cups /kʌps/).",
                    "Som /z/: Após vogais e consoantes vozeadas b, d, g, l, m, n, r, v (ex: Dogs /dɒɡz/, Runs /rʌnz/, Is /ɪz/, Plays /pleɪz/).",
                    "Som /ɪz/ (Sílaba Extra): Após sons chiantes s, z, sh, ch, x (ex: Buses /ˈbʌs.ɪz/, Washes /ˈwɒʃ.ɪz/, Boxes /ˈbɒk.sɪz/)."
                ],
                "minimalPairs": [
                    {
                        "word1": "Cats",
                        "ipa1": "/kæts/",
                        "word2": "Dogs",
                        "ipa2": "/dɒɡz/",
                        "meaning1": "Som /s/ seco",
                        "meaning2": "Som /z/ vibrado"
                    },
                    {
                        "word1": "Buses",
                        "ipa1": "/ˈbʌs.ɪz/",
                        "word2": "Books",
                        "ipa2": "/bʊks/",
                        "meaning1": "Som /ɪz/ (sílaba extra)",
                        "meaning2": "Som /s/ seco"
                    }
                ],
                "quiz": [
                    {
                        "q": "Qual palavra no plural exige a pronúncia com a sílaba extra /ɪz/?",
                        "options": [
                            "Books",
                            "Cats",
                            "Buses",
                            "Dogs"
                        ],
                        "a": "Buses",
                        "explanation": "Palavras terminadas em som chiante como 'bus' recebem /ɪz/ no plural (Buses /ˈbʌs.ɪz/)."
                    }
                ]
            },
            {
                "id": "p_a2_th_sound_mastery",
                "title": "3. Domínio do Som TH (/θ/ Desvozeado vs /ð/ Vozeado)",
                "ipaSymbol": "/θ/ e /ð/",
                "description": "Coloque a ponta da língua levemente entre os dentes superiores e inferiores.",
                "rules": [
                    "Som /θ/ (Desvozeado): Sem vibração nas cordas vocais, apenas sopro de ar (ex: Think, Three, Thank, Bath, Math, Teeth).",
                    "Som /ð/ (Vozeado): Com vibração ativa nas cordas vocais (ex: This, That, They, Mother, Father, Weather)."
                ],
                "minimalPairs": [
                    {
                        "word1": "Think",
                        "ipa1": "/θɪŋk/",
                        "word2": "Sink",
                        "ipa2": "/sɪŋk/",
                        "meaning1": "Pensar (/θ/)",
                        "meaning2": "Pia / Afundar (/s/)"
                    },
                    {
                        "word1": "Three",
                        "ipa1": "/θriː/",
                        "word2": "Tree",
                        "ipa2": "/triː/",
                        "meaning1": "Número 3 (/θ/)",
                        "meaning2": "Árvore (/t/)"
                    },
                    {
                        "word1": "This",
                        "ipa1": "/ðɪs/",
                        "word2": "Dis (Errado)",
                        "ipa2": "[dɪs]",
                        "meaning1": "Este/Esta (/ð/ vozeado)",
                        "meaning2": "Pronúncia errada sem língua"
                    }
                ],
                "quiz": [
                    {
                        "q": "Qual a diferença entre a pronúncia de 'Three' (número 3) e 'Tree' (árvore)?",
                        "options": [
                            "Em 'Three', a língua toca no lábio inferior",
                            "Ambas têm a mesma pronúncia exata",
                            "Em 'Three', a língua fica entre os dentes (/θ/); em 'Tree', fica no céu da boca (/t/)",
                            "Em 'Tree', o T é silencioso"
                        ],
                        "a": "Em 'Three', a língua fica entre os dentes (/θ/); em 'Tree', fica no céu da boca (/t/)",
                        "explanation": "'Three' usa o som TH interdental desvozeado /θ/, enquanto 'Tree' usa /t/ alveolar."
                    }
                ]
            },
            {
                "id": "p_a2_schwa_sound",
                "title": "4. O Som Schwa (/ə/) em Sílabas Átonas",
                "ipaSymbol": "/ə/",
                "description": "O Schwa é o som vocálico mais comum do inglês. É um som neutro e relaxado que ocorre em sílabas não acentuadas.",
                "rules": [
                    "Qualquer vogal (a, e, i, o, u) pode virar Schwa quando não recebe o estresse da palavra.",
                    "Exemplos: A-bout (/əˈbaʊt/), A-go (/əˈɡoʊ/), Po-lice (/pəˈliːs/), Doc-tor (/ˈdɒk.tər/)."
                ],
                "minimalPairs": [
                    {
                        "word1": "About",
                        "ipa1": "/əˈbaʊt/",
                        "word2": "Doctor",
                        "ipa2": "/ˈdɒk.tər/",
                        "meaning1": "Schwa no início (a-)",
                        "meaning2": "Schwa no final (-tor)"
                    }
                ],
                "quiz": [
                    {
                        "q": "O que caracteriza o som vocálico Schwa (/ə/) no inglês?",
                        "options": [
                            "É a vogal mais forte e estridente da palavra",
                            "É um som vocálico neutro e relaxado em sílabas sem estresse",
                            "É um som que só existe no inglês britânico",
                            "Só ocorre na letra 'E'"
                        ],
                        "a": "É um som vocálico neutro e relaxado em sílabas sem estresse",
                        "explanation": "O Schwa /ə/ é a vogal neutra reduzida em sílabas átonas."
                    }
                ]
            },
            {
                "id": "p_a2_silent_letters_reductions",
                "title": "5. Letras Mudas Clássicas & Reduções Informais (Gonna, Wanna)",
                "ipaSymbol": "Silent Letters & Informal Contractions",
                "description": "Identifique consoantes que não devem ser pronunciadas e domines as reduções mais usadas do dia a dia.",
                "rules": [
                    "B Mudo (após M): Não pronuncie o B final em palavras como Climb (/klaɪm/), Comb (/koʊm/), Doubt (/daʊt/).",
                    "K Mudo (antes de N): O K inicial é 100% mudo em Know (/noʊ/), Knife (/naɪf/), Knee (/niː/).",
                    "L Mudo: Não pronuncie o L em Walk (/wɔːk/), Talk (/tɔːk/), Half (/hæf/), Could (/kʊd/).",
                    "Reduções do Dia a Dia: 'Going to' ➔ Gonna (/ˈɡən.ə/); 'Want to' ➔ Wanna (/ˈwɑː.nə/); 'Have got to' ➔ Gotta (/ˈɡɑː.t̬ə/)."
                ],
                "minimalPairs": [
                    {
                        "word1": "Walk",
                        "ipa1": "/wɔːk/",
                        "word2": "Walk (Errado)",
                        "ipa2": "[wɔːlk]",
                        "meaning1": "Andar (L mudo correto)",
                        "meaning2": "Pronúncia errada somando o 'L'"
                    },
                    {
                        "word1": "Going to",
                        "ipa1": "/ˈɡoʊ.ɪŋ tuː/",
                        "word2": "Gonna",
                        "ipa2": "/ˈɡən.ə/",
                        "meaning1": "Forma formal",
                        "meaning2": "Redução fluida do dia a dia"
                    }
                ],
                "quiz": [
                    {
                        "q": "Qual destas palavras possui a letra 'L' totalmente MUTA na pronúncia nativa?",
                        "options": [
                            "Walk",
                            "Like",
                            "Long",
                            "Light"
                        ],
                        "a": "Walk",
                        "explanation": "Em 'Walk', a letra L não é pronunciada (/wɔːk/)."
                    }
                ]
            }
        ]
    },
    {
        "level": "B1",
        "levelBadge": "🟡 Level B1 (Intermediate)",
        "sectionTitle": "🟡 Level B1: Fala Conectada, Ritmo & Homófonos",
        "description": "Entenda como os nativos conectam palavras, dominem o Flap T e evite confusão com homófonos.",
        "topics": [
            {
                "id": "p_b1_connected_speech_1",
                "title": "1. Connected Speech I (Fusão Consoante + Vogal)",
                "ipaSymbol": "C + V Linking",
                "description": "Na fala fluida, a consoante final de uma palavra junta-se diretamente à vogal inicial da palavra seguinte.",
                "rules": [
                    "Pick it up ➔ Pronuncia-se como 'Pi-ki-táp' (/pɪ.kɪ.tʌp/).",
                    "Check it out ➔ Pronuncia-se como 'Che-ki-daut' (/tʃɛ.kɪ.daʊt/).",
                    "First of all ➔ Pronuncia-se como 'Firs-to-vóll' (/fɜːrs.tə.vɔːl/)."
                ],
                "minimalPairs": [
                    {
                        "word1": "Pick it up",
                        "ipa1": "/pɪ.kɪ.tʌp/",
                        "word2": "Pick / It / Up (Pausado)",
                        "ipa2": "[pɪk ɪt ʌp]",
                        "meaning1": "Fala Conectada Nativa",
                        "meaning2": "Fala pausada artificial"
                    }
                ],
                "quiz": [
                    {
                        "q": "Como a frase 'Pick it up' é pronunciada nativamente em velocidade normal?",
                        "options": [
                            "Com pausas longas entre cada palavra",
                            "Como uma palavra contínua 'Pi-ki-táp' (/pɪ.kɪ.tʌp/)",
                            "Como 'Pick-eat-up'",
                            "Sem pronunciar a letra P final"
                        ],
                        "a": "Como uma palavra contínua 'Pi-ki-táp' (/pɪ.kɪ.tʌp/)",
                        "explanation": "A consoante final conecta-se à vogal seguinte formando uma cadeia sonora contínua."
                    }
                ]
            },
            {
                "id": "p_b1_flap_t_glottal_stop",
                "title": "2. O Flap T / Flap D ([ɾ]) & Glottal Stop ([ʔ])",
                "ipaSymbol": "[ɾ] e [ʔ]",
                "description": "No inglês americano, o 'T' entre vogais transforma-se em um som rápido de 'R' brando, ou é travado na garganta.",
                "rules": [
                    "Flap T ([ɾ]): O T/DD entre vogais soa como o R de 'caro' (ex: Water ➔ 'Wá-rer', City ➔ 'Sí-ri', Better ➔ 'Bé-rer').",
                    "Glottal Stop ([ʔ]): Bloqueio de ar na garganta para T final ou antes de N (ex: Mountain ➔ 'Moun-’n', Button ➔ 'Bu-’n')."
                ],
                "minimalPairs": [
                    {
                        "word1": "Water",
                        "ipa1": "[ˈwɑː.ɾər]",
                        "word2": "Water (UK)",
                        "ipa2": "[ˈwɔː.tə]",
                        "meaning1": "Flap T Americano",
                        "meaning2": "T marcado Britânico"
                    },
                    {
                        "word1": "Mountain",
                        "ipa1": "[ˈmaʊn.ʔn̩]",
                        "word2": "Moun-tain (Pausado)",
                        "ipa2": "[ˈmaʊn.teɪn]",
                        "meaning1": "Glottal Stop Nativo",
                        "meaning2": "Pronúncia pausada"
                    }
                ],
                "quiz": [
                    {
                        "q": "Como a palavra 'Water' é pronunciada no inglês americano padrão?",
                        "options": [
                            "'Wá-rer' com o Flap T [ɾ] suave",
                            "'Wa-ter-i' com vogal no final",
                            "'Wa-ter-sh'",
                            "'Wa-ter' com T bem duro e pausado"
                        ],
                        "a": "'Wá-rer' com o Flap T [ɾ] suave",
                        "explanation": "No inglês americano, o T entre duas vogais torna-se o Flap T [ɾ]."
                    }
                ]
            },
            {
                "id": "p_b1_word_stress",
                "title": "3. Sílaba Tônica (Word Stress: Substantivo vs Verbo)",
                "ipaSymbol": "ˈˈˈ Word Stress",
                "description": "A posição da sílaba tônica em palavras de duas sílabas pode alterar totalmente a função gramatical.",
                "rules": [
                    "Substantivo ➔ Estresse na 1ª sílaba (ex: REcord /ˈrek.ɚd/ = o disco/registro).",
                    "Verbo ➔ Estresse na 2ª sílaba (ex: reCORD /rɪˈkɔːrd/ = gravar/registrar).",
                    "Outros exemplos: PREsent (presente) vs preSENT (apresentar); EXport (exportação) vs exPORT (exportar)."
                ],
                "minimalPairs": [
                    {
                        "word1": "REcord (Substantivo)",
                        "ipa1": "/ˈrek.ɚd/",
                        "word2": "reCORD (Verbo)",
                        "ipa2": "/rɪˈkɔːrd/",
                        "meaning1": "Disco / Registro",
                        "meaning2": "Gravar / Registrar"
                    },
                    {
                        "word1": "PREsent (Substantivo)",
                        "ipa1": "/ˈprez.ənt/",
                        "word2": "preSENT (Verbo)",
                        "ipa2": "/prɪˈzent/",
                        "meaning1": "Presente",
                        "meaning2": "Apresentar"
                    }
                ],
                "quiz": [
                    {
                        "q": "Onde fica a sílaba tônica da palavra 'Record' quando ela funciona como VERBO (gravar)?",
                        "options": [
                            "Nas duas sílabas igualmente",
                            "Na 1ª sílaba (REcord /ˈrek.ɚd/)",
                            "Não possui sílaba tônica",
                            "Na 2ª sílaba (reCORD /rɪˈkɔːrd/)"
                        ],
                        "a": "Na 2ª sílaba (reCORD /rɪˈkɔːrd/)",
                        "explanation": "Verbos dissílabos frequentemente deslocam o estresse para a segunda sílaba."
                    }
                ]
            },
            {
                "id": "p_b1_homophones_guide",
                "title": "4. Guia Completo de Homófonos (Sons Idênticos, Grafias Diferentes)",
                "ipaSymbol": "Homophones",
                "description": "Palavras com escrita e significados totalmente diferentes, mas que possuem a mesma pronúncia exata.",
                "rules": [
                    "There / Their / They're ➔ Todas pronunciadas /ðɛər/.",
                    "To / Two / Too ➔ Todas pronunciadas /tuː/.",
                    "Hear / Here ➔ Ambas pronunciadas /hɪər/.",
                    "Flower / Flour ➔ Ambas pronunciadas /ˈflaʊ.ər/.",
                    "Write / Right ➔ Ambas pronunciadas /raɪt/."
                ],
                "minimalPairs": [
                    {
                        "word1": "There",
                        "ipa1": "/ðɛər/",
                        "word2": "Their",
                        "ipa2": "/ðɛər/",
                        "meaning1": "Lá / Ali",
                        "meaning2": "Deles / Delas"
                    },
                    {
                        "word1": "Hear",
                        "ipa1": "/hɪər/",
                        "word2": "Here",
                        "ipa2": "/hɪər/",
                        "meaning1": "Ouvir",
                        "meaning2": "Aqui"
                    }
                ],
                "quiz": [
                    {
                        "q": "Qual a diferença de pronúncia entre as palavras 'There', 'Their' e 'They're'?",
                        "options": [
                            "'They're' pronuncia-se com som de 'r' duplo",
                            "'There' pronuncia-se com T forte",
                            "Nenhuma! Todas possuem a pronúncia idêntica /ðɛər/",
                            "'Their' pronuncia-se com 'i' longo"
                        ],
                        "a": "Nenhuma! Todas possuem a pronúncia idêntica /ðɛər/",
                        "explanation": "São homófonos perfeitos e possuem exatamente a mesma transcrição fonética /ðɛər/."
                    }
                ]
            },
            {
                "id": "p_b1_dark_l_sound",
                "title": "5. O Som do Dark L ([ɫ]) vs Light L ([l])",
                "ipaSymbol": "[ɫ] vs [l]",
                "description": "Elimine o vício de transformar o 'L' final no som da vogal 'U' do português.",
                "rules": [
                    "Light L (Início de sílaba): Ponta da língua toca os dentes superiores frontais (ex: Light, Like, Lemon).",
                    "Dark L (Final de sílaba/palavra): A parte traseira da língua se eleva em direção ao véu palatino (garganta), criando um som grave e aveludado (ex: Milk, Ball, People, Real, Feel).",
                    "Vício do Português a Evitar: Pronunciar 'Milk' como 'Miuk' ou 'Ball' como 'Baou'."
                ],
                "minimalPairs": [
                    {
                        "word1": "Milk",
                        "ipa1": "[mɪɫk]",
                        "word2": "Miuk (Errado)",
                        "ipa2": "[mɪuk]",
                        "meaning1": "Dark L correto",
                        "meaning2": "Vício de pronúncia em 'U'"
                    },
                    {
                        "word1": "Ball",
                        "ipa1": "[bɔːɫ]",
                        "word2": "Baou (Errado)",
                        "ipa2": "[bɔːu]",
                        "meaning1": "Dark L correto",
                        "meaning2": "Vício de pronúncia em 'U'"
                    }
                ],
                "quiz": [
                    {
                        "q": "O que caracteriza o 'Dark L' ([ɫ]) no final de palavras como 'Milk' ou 'Ball'?",
                        "options": [
                            "É um som de L ressonante e gutural, sem virar a vogal 'U'",
                            "É pronunciado como um 'R' caipira",
                            "A letra L é 100% silenciosa",
                            "É idêntico à letra 'U' do português"
                        ],
                        "a": "É um som de L ressonante e gutural, sem virar a vogal 'U'",
                        "explanation": "O Dark L é uma consoante velarizada e ressonante que não deve ser vocalizada como 'U'."
                    }
                ]
            }
        ]
    },
    {
        "level": "B2",
        "levelBadge": "🔴 Level B2 (Upper-Intermediate)",
        "sectionTitle": "🔴 Level B2: Fluidez Nativa Avançada, Entonação & Nuances",
        "description": "Alcance a naturalidade nativa com assimilação, elisão, entonação expressiva e diferenciação de sotaques.",
        "topics": [
            {
                "id": "p_b2_assimilation_elision",
                "title": "1. Connected Speech II (Assimilação, Elisão & Intrusion)",
                "ipaSymbol": "Assimilation & Elision",
                "description": "Fenômenos fonéticos avançados que fundem ou deletam sons na fala rápida nativa.",
                "rules": [
                    "Assimilação: 'Did you' vira 'Didja' (/dɪdʒə/); 'Would you' vira 'Wouldja' (/wʊdʒə/).",
                    "Elisão (Desaparecimento de Consoante): 'Next day' vira 'Nex-day'; 'Last night' vira 'Las-night'.",
                    "Sons Intrusivos (Vogal + Vogal): Inserção de /w/ ou /j/ (ex: 'Go out' ➔ /ɡoʊ.waʊt/; 'She is' ➔ /ʃiː.jɪz/)."
                ],
                "minimalPairs": [
                    {
                        "word1": "Did you",
                        "ipa1": "/dɪdʒə/",
                        "word2": "Did / You (Pausado)",
                        "ipa2": "[dɪd juː]",
                        "meaning1": "Assimilação nativa ('Didja')",
                        "meaning2": "Fala pausada"
                    },
                    {
                        "word1": "Last night",
                        "ipa1": "/læs naɪt/",
                        "word2": "Last / Night",
                        "ipa2": "[læst naɪt]",
                        "meaning1": "Elisão nativa (sem 't')",
                        "meaning2": "Fala pausada"
                    }
                ],
                "quiz": [
                    {
                        "q": "O que ocorre no fenômeno da assimilação em 'Did you' na fala fluida nativa?",
                        "options": [
                            "O verbo 'did' desaparece completamente",
                            "Muda a sílaba tônica para o 'you'",
                            "Os sons de /d/ e /j/ fundem-se no som 'Didja' (/dɪdʒə/)",
                            "Pronuncia-se como 'Did-you-i'"
                        ],
                        "a": "Os sons de /d/ e /j/ fundem-se no som 'Didja' (/dɪdʒə/)",
                        "explanation": "A fusão da consoante final com o 'y' inicial gera o som africado /dʒ/ ('didja')."
                    }
                ]
            },
            {
                "id": "p_b2_intonation_patterns",
                "title": "2. Padrões de Entonação & Ênfase de Contraste",
                "ipaSymbol": "Intonation ↗ ↘",
                "description": "A entonação expressa a atitude do falante. Mudar a palavra enfatizada altera o foco da frase.",
                "rules": [
                    "Entonação Ascendente (Rising ↗): Perguntas de Sim/Não (ex: 'Are you coming? ↗').",
                    "Entonação Descendente (Falling ↘): Afirmações e perguntas WH- (ex: 'Where do you live? ↘').",
                    "Ênfase de Contraste: 'I didn't say HE stole the money' (outra pessoa roubou) vs 'I didn't say he STOLE the money' (ele pegou emprestado)."
                ],
                "minimalPairs": [
                    {
                        "word1": "Are you coming? ↗",
                        "ipa1": "[Rising ↗]",
                        "word2": "Where are you going? ↘",
                        "ipa2": "[Falling ↘]",
                        "meaning1": "Entonação sobe no final",
                        "meaning2": "Entonação desce no final"
                    }
                ],
                "quiz": [
                    {
                        "q": "Qual a entonação padrão para perguntas de Sim/Não (Yes/No questions)?",
                        "options": [
                            "Tom totalmente plano sem variação",
                            "Não há entonação em inglês",
                            "Entonação Ascendente (o tom de voz sobe no final ↗)",
                            "Entonação Descendente (o tom desce no final ↘)"
                        ],
                        "a": "Entonação Ascendente (o tom de voz sobe no final ↗)",
                        "explanation": "Yes/No questions utilizam entonação ascendente no final da frase."
                    }
                ]
            },
            {
                "id": "p_b2_homographs_diphthongs",
                "title": "3. Homógrafos & Os 8 Diftongos do Inglês",
                "ipaSymbol": "Homographs & /aɪ, eɪ, ɔɪ.../",
                "description": "Diferencie palavras com a mesma escrita e domine as vogais deslizadas duplas.",
                "rules": [
                    "Homógrafos: Live /lɪv/ (morar) vs Live /laɪv/ (ao vivo); Read /riːd/ (presente) vs Read /red/ (passado).",
                    "8 Diftongos: /aɪ/ (my), /eɪ/ (day), /ɔɪ/ (boy), /aʊ/ (now), /oʊ/ (go), /ɪər/ (near), /eər/ (hair), /ʊər/ (pure)."
                ],
                "minimalPairs": [
                    {
                        "word1": "Live (Verbo)",
                        "ipa1": "/lɪv/",
                        "word2": "Live (Ao Vivo)",
                        "ipa2": "/laɪv/",
                        "meaning1": "Morar / Viver",
                        "meaning2": "Transmissão ao vivo"
                    },
                    {
                        "word1": "Read (Presente)",
                        "ipa1": "/riːd/",
                        "word2": "Read (Passado)",
                        "ipa2": "/red/",
                        "meaning1": "Ler (Presente)",
                        "meaning2": "Li / Lido (Passado)"
                    }
                ],
                "quiz": [
                    {
                        "q": "Como se pronuncia a palavra 'Live' na frase 'Watch the show LIVE' (ao vivo)?",
                        "options": [
                            "/liːv/ (com som de leave)",
                            "/leɪv/",
                            "/lɪv/ (com o som curto de morar)",
                            "/laɪv/ (com o diftongo /aɪ/)"
                        ],
                        "a": "/laɪv/ (com o diftongo /aɪ/)",
                        "explanation": "Quando funciona como adjetivo 'ao vivo', a pronúncia correta é /laɪv/."
                    }
                ]
            },
            {
                "id": "p_b2_us_uk_brands",
                "title": "4. Inglês Americano vs Britânico & Marcas Globais",
                "ipaSymbol": "US vs UK & Brands",
                "description": "Entenda a rotacidade do 'R' e pronuncie marcas internacionais corretamente.",
                "rules": [
                    "Rotacidade do 'R': Inglês Americano pronuncia o R pós-vocálico (Car /kɑːr/, Park /pɑːrk/); o Britânico omite o R (Car /kɑː/, Park /pɑːk/).",
                    "Marcas Globais: Nike /ˈnaɪ.kiː/ ('Naiki'), Apple /ˈæp.əl/ ('Ápol'), Disney /ˈdɪz.ni/ ('Dizni'), YouTube /ˈjuː.tuːb/ ('Iu-tiub')."
                ],
                "minimalPairs": [
                    {
                        "word1": "Car (US)",
                        "ipa1": "/kɑːr/",
                        "word2": "Car (UK)",
                        "ipa2": "/kɑː/",
                        "meaning1": "R enrolado americano",
                        "meaning2": "R mudo britânico"
                    },
                    {
                        "word1": "Nike",
                        "ipa1": "/ˈnaɪ.kiː/",
                        "word2": "Naik (Errado)",
                        "ipa2": "[naɪk]",
                        "meaning1": "Pronúncia nativa ('Naiki')",
                        "meaning2": "Pronúncia errada sem o 'ee'"
                    }
                ],
                "quiz": [
                    {
                        "q": "Qual é a pronúncia nativa correta da marca 'Nike' em inglês?",
                        "options": [
                            "Naik (com k mudo)",
                            "Nai-ke",
                            "Niki",
                            "/ˈnaɪ.kiː/ ('Naiki')"
                        ],
                        "a": "/ˈnaɪ.kiː/ ('Naiki')",
                        "explanation": "A marca 'Nike' pronuncia-se com duas sílabas /ˈnaɪ.kiː/ ('Naiki')."
                    }
                ]
            },
            {
                "id": "p_b2_weak_forms_vowel_reduction",
                "title": "5. Weak Forms & Redução Vocálica em Palavras Gramaticais",
                "ipaSymbol": "Strong /æ, ɑː, uː/ vs Weak /ə, ɪ/",
                "description": "Nativos raramente usam a pronúncia 'forte' de palavras como AND, FOR, CAN e TO dentro de frases. Aprenda a reduzir essas estruturas para alcançar o ritmo nativo.",
                "rules": [
                    "CAN: Forma Forte /kæn/ (usada só em respostas curtas) ➔ Forma Fraca /kən/ ou /kn/ na frase (ex: 'I can do it' ➔ /aɪ kən duː ɪt/).",
                    "AND: Forma Forte /ænd/ ➔ Forma Fraca /ənd/ ou simplesmente /n/ (ex: 'Rock and roll' ➔ 'Rock 'n' roll' /rɑːk ən roʊl/).",
                    "FOR: Forma Forte /fɔːr/ ➔ Forma Fraca /fər/ (ex: 'This is for you' ➔ /ðɪs ɪz fər juː/).",
                    "TO: Forma Forte /tuː/ ➔ Forma Fraca /tə/ antes de consoante (ex: 'Time to go' ➔ /taɪm tə ɡoʊ/)."
                ],
                "minimalPairs": [
                    {
                        "word1": "I CAN do it (Forte - Ênfase)",
                        "ipa1": "/aɪ kæn duː ɪt/",
                        "word2": "I can do it (Fraca - Fluida)",
                        "ipa2": "/aɪ kən duː ɪt/",
                        "meaning1": "Ênfase na capacidade ('Eu CONSIGO')",
                        "meaning2": "Fala fluida natural do dia a dia"
                    },
                    {
                        "word1": "For you (Forte)",
                        "ipa1": "/fɔːr juː/",
                        "word2": "For you (Fraca)",
                        "ipa2": "/fər juː/",
                        "meaning1": "Pronúncia isolada do dicionário",
                        "meaning2": "Pronúncia conectada real ('fer you')"
                    }
                ],
                "quiz": [
                    {
                        "q": "Como a palavra 'CAN' é pronunciada na frase neutra 'I can help you' em velocidade normal?",
                        "options": [
                            "Como 'can-i'",
                            "Na forma forte /kæn/ com tom bem aberto",
                            "O 'can' não é pronunciado",
                            "Na sua forma fraca reduzida com Schwa /kən/ ('kun')"
                        ],
                        "a": "Na sua forma fraca reduzida com Schwa /kən/ ('kun')",
                        "explanation": "Em frases afirmativas neutras, verbos auxiliares e conectivos assumem suas formas fracas (Weak Forms) com vogal reduzida."
                    }
                ]
            }
        ]
    }
];

if (typeof window !== 'undefined') { window.PRONUNCIATION_DATA = PRONUNCIATION_DATA; }
if (typeof global !== 'undefined') { global.PRONUNCIATION_DATA = PRONUNCIATION_DATA; }
