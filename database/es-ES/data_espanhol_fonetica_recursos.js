/**
 * Banco de Dados Centralizado de Fonética, Pronúncia, Conjugação Verbal, Heterotónicos, Regionalismos, Acentuação, Sotaques e Prosódia (es-ES / es-MX)
 */

const FONETICA_RECURSOS_ESPANHOL_DADOS = {
    "fonetica": [
        {
            "id": "fon_a1_1",
            "level": "A1",
            "title": "1. Regra do J e G (Garganta Aspirada /x/)",
            "summary": "Em espanhol, o \"J\" e o \"G\" antes de E e I têm som gutural raspado no céu da boca (/x/), vindo da garganta, semelhante ao \"RR\" de \"rua\".",
            "rule": "A letra J tem som gutural em qualquer posição (ex: jardín, jota). O G tem esse som gutural apenas antes de E e I (ex: gente, gimnasio).",
            "examples": [
                {
                    "es": "Jardín",
                    "pt": "Jardim (som de Rardín)",
                    "audio": "Jardín"
                },
                {
                    "es": "Jirafa",
                    "pt": "Girafa (som de Rirafa)",
                    "audio": "Jirafa"
                },
                {
                    "es": "Gente",
                    "pt": "Gente (som de Rente)",
                    "audio": "Gente"
                },
                {
                    "es": "Gimnasio",
                    "pt": "Academia (som de Rimnasio)",
                    "audio": "Gimnasio"
                }
            ],
            "quiz": []
        },
        {
            "id": "fon_a1_2",
            "level": "A1",
            "title": "2. Regra do H (Mudo Absoluto)",
            "summary": "O H em espanhol é 100% mudo em qualquer posição. Nunca tem som de R ou J, nem como o H aspirado do inglês.",
            "rule": "Diga diretamente a vogal seguinte. A única exceção é quando vem acompanhado de C formando o dígrafo CH (tche).",
            "examples": [
                {
                    "es": "¡Hola!",
                    "pt": "Olá (lê-se \"Óla\")",
                    "audio": "Hola"
                },
                {
                    "es": "Hotel",
                    "pt": "Hotel (lê-se \"Ótel\")",
                    "audio": "Hotel"
                },
                {
                    "es": "Hijo",
                    "pt": "Filho (lê-se \"Íjo\")",
                    "audio": "Hijo"
                },
                {
                    "es": "Hablar",
                    "pt": "Falar (lê-se \"Ablár\")",
                    "audio": "Hablar"
                }
            ],
            "quiz": []
        },
        {
            "id": "fon_a1_3",
            "level": "A1",
            "title": "3. Regra do B e V (Som Bilabial Único /b/)",
            "summary": "Em espanhol nativo, as letras B (be) e V (uve) possuem exatamente o mesmo som bilabial. Não existe som lábio-dental (fricativo) para o V.",
            "rule": "Tanto B quanto V são pronunciadas encostando lábio com lábio. Em espanhol \"vino\" e \"bino\" soam exatamente iguais.",
            "examples": [
                {
                    "es": "Vino",
                    "pt": "Vinho (pronuncia-se \"bino\")",
                    "audio": "Vino"
                },
                {
                    "es": "Vivir",
                    "pt": "Viver (pronuncia-se \"bibir\")",
                    "audio": "Vivir"
                },
                {
                    "es": "Bueno",
                    "pt": "Bom",
                    "audio": "Bueno"
                },
                {
                    "es": "Barcelona",
                    "pt": "Barcelona",
                    "audio": "Barcelona"
                }
            ],
            "quiz": []
        },
        {
            "id": "fon_a1_4",
            "level": "A1",
            "title": "4. Regra do CH (Som de /tʃ/ \"Tche\")",
            "summary": "O CH em espanhol tem som seco e estalado de /tʃ/, idêntico ao \"TCH\" de \"tchau\" ou \"tchê\".",
            "rule": "Nunca pronuncie o CH espanhol como X ou SH do português. É sempre um som africado seco.",
            "examples": [
                {
                    "es": "Chico",
                    "pt": "Garoto (pronuncia-se \"TCHico\")",
                    "audio": "Chico"
                },
                {
                    "es": "Noche",
                    "pt": "Noite (pronuncia-se \"Nó-tche\")",
                    "audio": "Noche"
                },
                {
                    "es": "Ocho",
                    "pt": "Oito (pronuncia-se \"Ó-tcho\")",
                    "audio": "Ocho"
                },
                {
                    "es": "Mucho",
                    "pt": "Muito (pronuncia-se \"Mú-tcho\")",
                    "audio": "Mucho"
                }
            ],
            "quiz": []
        },
        {
            "id": "fon_a1_5",
            "level": "A1",
            "title": "5. Ausência de Nasalização (Vogais 100% Puras)",
            "summary": "No espanhol, as vogais NUNCA são anasaladas antes de M ou N, ao contrário do português (como em \"samba\", \"pão\", \"sem\").",
            "rule": "O ar sai 100% pela boca. Diga a vogal de forma limpa e aberta antes de encostar a língua ou lábios para o N/M.",
            "examples": [
                {
                    "es": "San",
                    "pt": "São / Santo (lê-se \"Sán\" oral puro)",
                    "audio": "San"
                },
                {
                    "es": "Pan",
                    "pt": "Pão (lê-se \"Pán\" oral puro)",
                    "audio": "Pan"
                },
                {
                    "es": "Sin",
                    "pt": "Sem (lê-se \"Sín\" oral puro)",
                    "audio": "Sin"
                },
                {
                    "es": "Campo",
                    "pt": "Campo (lê-se \"Cám-po\" limpo)",
                    "audio": "Campo"
                }
            ],
            "quiz": []
        },
        {
            "id": "fon_a1_6",
            "level": "A1",
            "title": "6. Vogais E e O Sempre Fechadas (sem É ou Ó)",
            "summary": "Em espanhol, as vogais E e O são sempre fechadas /e/ e /o/. Não existem os sons abertos /ɛ/ (É) e /ɔ/ (Ó) do português.",
            "rule": "Pronuncie \"pero\" sempre como \"pêro\" (nunca \"péro\") e \"sol\" como \"sôl\" (nunca \"sól\").",
            "examples": [
                {
                    "es": "Pero",
                    "pt": "Mas (pronuncia-se \"Pê-ro\")",
                    "audio": "Pero"
                },
                {
                    "es": "Metro",
                    "pt": "Metrô (pronuncia-se \"Mê-tro\")",
                    "audio": "Metro"
                },
                {
                    "es": "Sol",
                    "pt": "Sol (pronuncia-se \"Sôl\")",
                    "audio": "Sol"
                },
                {
                    "es": "Tarde",
                    "pt": "Tarde (pronuncia-se \"Târ-de\")",
                    "audio": "Tarde"
                }
            ],
            "quiz": []
        },
        {
            "id": "fon_a1_7",
            "level": "A1",
            "title": "7. O D e T Nunca Chiam antes de E/I",
            "summary": "Em espanhol, as consoantes D e T mantêm o som dente-lingual seco antes das vogais E e I. Nunca chia-se como \"DJ\" (dia) ou \"TCH\" (tia).",
            "rule": "Encoste a ponta da língua nos dentes superiores. \"Día\" lê-se \"Dí-a\" seco (sem DJía) e \"Tía\" lê-se \"Tí-a\" seco (sem TCHía).",
            "examples": [
                {
                    "es": "Día",
                    "pt": "Dia (pronuncia-se \"Dí-a\" seco)",
                    "audio": "Día"
                },
                {
                    "es": "Tía",
                    "pt": "Tia (pronuncia-se \"Tí-a\" seco)",
                    "audio": "Tía"
                },
                {
                    "es": "Tienda",
                    "pt": "Loja (pronuncia-se \"Tiên-da\")",
                    "audio": "Tienda"
                },
                {
                    "es": "Diente",
                    "pt": "Dente (pronuncia-se \"Diên-te\")",
                    "audio": "Diente"
                }
            ],
            "quiz": [
                {
                    "question": "Como se pronuncia a palavra \"Gente\" em espanhol?",
                    "options": [
                        {
                            "label": "Com o som gutural de \"R\" forte raspado na garganta",
                            "isCorrect": true,
                            "explanation": "Correto! O G antes de E ou I soa como um R raspado (Rente)."
                        },
                        {
                            "label": "Igual ao J em português (Gente)",
                            "isCorrect": false,
                            "explanation": "Incorreto. O som de J em português não existe no espanhol tradicional."
                        }
                    ]
                },
                {
                    "question": "Existe diferença de som entre as palavras \"Vino\" e \"Bino\" em espanhol nativo?",
                    "options": [
                        {
                            "label": "Não, B e V têm exatamente o mesmo som bilabial",
                            "isCorrect": true,
                            "explanation": "Correto! Em espanhol, B e V possuem o mesmo som bilabial."
                        },
                        {
                            "label": "Sim, V vibra com os dentes e B com os lábios",
                            "isCorrect": false,
                            "explanation": "Incorreto. B e V são idênticos foneticamente em espanhol."
                        }
                    ]
                },
                {
                    "question": "Como deve ser pronunciada a palavra \"Pan\" (pão) em espanhol?",
                    "options": [
                        {
                            "label": "Oral pura (Pán), sem som anasalado de \"ão\"",
                            "isCorrect": true,
                            "explanation": "Exato! As vogais em espanhol não são anasaladas antes de N ou M."
                        },
                        {
                            "label": "Com som anasalado de \"Pão\"",
                            "isCorrect": false,
                            "explanation": "Incorreto. A nasalização de vogais é um vício de portunhol."
                        }
                    ]
                },
                {
                    "question": "Como se pronuncia a palavra \"Día\" (dia) em espanhol?",
                    "options": [
                        {
                            "label": "Com som seco dente-lingual (Dí-a), sem chiar em \"DJ\"",
                            "isCorrect": true,
                            "explanation": "Correto! D e T nunca chiam antes de I ou E em espanhol."
                        },
                        {
                            "label": "Com chiado de \"DJía\" como no português do Brasil",
                            "isCorrect": false,
                            "explanation": "Incorreto. O chiado DJ não existe para o D em espanhol."
                        }
                    ]
                }
            ]
        },
        {
            "id": "fon_a2_1",
            "level": "A2",
            "title": "8. Seseo vs. Distinción (Z e C antes de E/I)",
            "summary": "Na Espanha peninsular usa-se a Distinción (/θ/ com a língua entre os dentes). Na América Latina usa-se o Seseo (/s/).",
            "rule": "Distinción (Espanha): Z e C(e,i) soam como TH em \"think\". Seseo (América Latina): Z e C(e,i) soam como S.",
            "examples": [
                {
                    "es": "Zapato",
                    "pt": "Sapato (TH na Espanha | S na América)",
                    "audio": "Zapato"
                },
                {
                    "es": "Cerveza",
                    "pt": "Cerveja (TH na Espanha | S na América)",
                    "audio": "Cerveza"
                },
                {
                    "es": "Cine",
                    "pt": "Cinema",
                    "audio": "Cine"
                },
                {
                    "es": "Corazón",
                    "pt": "Coração",
                    "audio": "Corazón"
                }
            ],
            "quiz": []
        },
        {
            "id": "fon_a2_2",
            "level": "A2",
            "title": "9. Yeísmo (Pronúncia de LL e Y)",
            "summary": "Na maioria dos países hispânicos, \"LL\" (doble ele) e \"Y\" (ye) têm o mesmo som de /j/ ou /dj/. No Rio da Prata (Argentina/Uruguai), soa como /ʃ/ (ch/sh).",
            "rule": "Padrão geral: som de I ou DJ (llama = iama/djama). Rio da Prata (ARG/URU): som de CH/SH (llama = chama/shama).",
            "examples": [
                {
                    "es": "Lluvia",
                    "pt": "Chuva (iúbia / djúbia | shúbia em Buenos Aires)",
                    "audio": "Lluvia"
                },
                {
                    "es": "Yo",
                    "pt": "Eu (io / djo | sho na Argentina)",
                    "audio": "Yo"
                },
                {
                    "es": "Calle",
                    "pt": "Rua (cá-ie / cá-dje | cá-che na Argentina)",
                    "audio": "Calle"
                },
                {
                    "es": "Playa",
                    "pt": "Praia (plá-ia | plá-sha na Argentina)",
                    "audio": "Playa"
                }
            ],
            "quiz": []
        },
        {
            "id": "fon_a2_3",
            "level": "A2",
            "title": "10. O D Intervocálico e Final (D Suave /ð/)",
            "summary": "Quando o D fica entre duas vogais ou no final de uma palavra, ele se torna um som fricativo muito suave (/ð/), similar ao TH de \"this\" em inglês.",
            "rule": "Não aperte os dentes com força. Em \"pescado\", soa quase como \"pesca-ðo\". No final de \"Madrid\" ou \"Usted\", o D é suave ou quase imperceptível.",
            "examples": [
                {
                    "es": "Pescado",
                    "pt": "Peixe preparado (lê-se \"pesca-ðo\")",
                    "audio": "Pescado"
                },
                {
                    "es": "Ciudades",
                    "pt": "Cidades (lê-se \"ciu-da-ðes\")",
                    "audio": "Ciudades"
                },
                {
                    "es": "Madrid",
                    "pt": "Madri (D final suave)",
                    "audio": "Madrid"
                },
                {
                    "es": "Usted",
                    "pt": "O senhor / A senhora (D final suave)",
                    "audio": "Usted"
                }
            ],
            "quiz": []
        },
        {
            "id": "fon_a2_4",
            "level": "A2",
            "title": "11. O L Final Nunca Vira \"U\"",
            "summary": "Em português, o L no final de sílaba vira U (ex: \"sol\" ➔ \"sou\"). Em espanhol, o L é SEMPRE alveolar e dental.",
            "rule": "Toque a ponta da língua obrigatoriamente no céu da boca / alvéolos superiores no final da sílaba.",
            "examples": [
                {
                    "es": "Brasil",
                    "pt": "Brasil (lê-se \"Bra-síl\" com L velar limpo)",
                    "audio": "Brasil"
                },
                {
                    "es": "Sol",
                    "pt": "Sol (lê-se \"Sôl\" com a língua no céu da boca)",
                    "audio": "Sol"
                },
                {
                    "es": "Papel",
                    "pt": "Papel (lê-se \"Pa-pêl\")",
                    "audio": "Papel"
                },
                {
                    "es": "Azul",
                    "pt": "Azul (lê-se \"A-zúl\")",
                    "audio": "Azul"
                }
            ],
            "quiz": []
        },
        {
            "id": "fon_a2_5",
            "level": "A2",
            "title": "12. Pronúncia do X (/ks/ vs /j/ histórico)",
            "summary": "Em palavras gerais, o X soa como /ks/ (ex: éxito ➔ éksito). Em nomes próprios de origem hispano-indígena tradicional, o X tem som gutural de J (/x/).",
            "rule": "Use /ks/ em palavras comuns (éxito, examen, taxi). Em topônimos tradicionais como México e Oaxaca, o X lê-se com som de J (\"Méjico\", \"Oajaca\").",
            "examples": [
                {
                    "es": "Éxito",
                    "pt": "Sucesso (pronuncia-se \"Ék-si-to\")",
                    "audio": "Éxito"
                },
                {
                    "es": "Examen",
                    "pt": "Exame (pronuncia-se \"Ek-sá-men\")",
                    "audio": "Examen"
                },
                {
                    "es": "México",
                    "pt": "México (pronuncia-se \"Mé-ji-co\")",
                    "audio": "México"
                },
                {
                    "es": "Oaxaca",
                    "pt": "Oaxaca (pronuncia-se \"Oa-ja-ca\")",
                    "audio": "Oaxaca"
                }
            ],
            "quiz": [
                {
                    "question": "O que caracteriza o \"Seseo\" predominante na América Latina?",
                    "options": [
                        {
                            "label": "Pronunciar Z e C(e,i) com o mesmo som de S",
                            "isCorrect": true,
                            "explanation": "Exato! No Seseo latino-americano, Z, CE e CI soam exatamente como S."
                        },
                        {
                            "label": "Colocar a língua entre os dentes como no TH inglês",
                            "isCorrect": false,
                            "explanation": "Incorreto. Esse fenômeno é a Distinción, típica da Espanha."
                        }
                    ]
                },
                {
                    "question": "Como a palavra \"Calle\" (rua) costuma ser pronunciada no espanhol rio-pratense (Argentina/Uruguai)?",
                    "options": [
                        {
                            "label": "Cá-che (com som de CH/SH)",
                            "isCorrect": true,
                            "explanation": "Correto! O Yeísmo reashado da Argentina transforma LL e Y em som de SH/CH."
                        },
                        {
                            "label": "Cá-lhe (com som de LH português)",
                            "isCorrect": false,
                            "explanation": "Incorreto. A pronúncia com LH tradicional é extremamente rara hoje."
                        }
                    ]
                },
                {
                    "question": "Como se deve pronunciar a palavra \"Sol\" em espanhol?",
                    "options": [
                        {
                            "label": "Sôl, encostando a ponta da língua no céu da boca (sem virar U)",
                            "isCorrect": true,
                            "explanation": "Exato! O L final em espanhol é sempre velar/dental e nunca vira \"U\"."
                        },
                        {
                            "label": "Sou, exatamente igual ao português do Brasil",
                            "isCorrect": false,
                            "explanation": "Incorreto. O L final nunca vira som de \"U\" no espanhol."
                        }
                    ]
                },
                {
                    "question": "Qual é a pronúncia correta da palavra \"México\" em espanhol nativo?",
                    "options": [
                        {
                            "label": "Mé-ji-co (o X tem som gutural de J)",
                            "isCorrect": true,
                            "explanation": "Correto! Em nomes históricos como México e Oaxaca, o X é pronunciado como J."
                        },
                        {
                            "label": "Mê-ksi-co (com som de KS)",
                            "isCorrect": false,
                            "explanation": "Incorreto. Em México, preserva-se o som histórico do J."
                        }
                    ]
                }
            ]
        },
        {
            "id": "fon_b1_1",
            "level": "B1",
            "title": "13. Vibrante R Brando vs RR Forte",
            "summary": "O R simples no meio da palavra vibra a ponta da língua apenas 1 vez (/ɾ/). O RR duplo (ou R inicial) vibra a língua várias vezes (/r/).",
            "rule": "A vibração altera o significado da palavra! No início da palavra, o R simples é sempre vibrante forte (ex: rey).",
            "examples": [
                {
                    "es": "Pero",
                    "pt": "Mas (R simples vibrante leve)",
                    "audio": "Pero"
                },
                {
                    "es": "Perro",
                    "pt": "Cachorro (RR múltiplo vibrante forte)",
                    "audio": "Perro"
                },
                {
                    "es": "Caro",
                    "pt": "Caro (R simples)",
                    "audio": "Caro"
                },
                {
                    "es": "Carro",
                    "pt": "Carro (RR forte)",
                    "audio": "Carro"
                }
            ],
            "quiz": []
        },
        {
            "id": "fon_b1_2",
            "level": "B1",
            "title": "14. Sinalefa (Ligação Fluida de Vogais)",
            "summary": "Na fala fluida nativa, a vogal final de uma palavra se une à vogal inicial da palavra seguinte, formando uma única sílaba fonética.",
            "rule": "A sinalefa elimina pausas entre palavras. Duas ou três vogais vizinhas fundem-se no mesmo fluxo de ar.",
            "examples": [
                {
                    "es": "Mi hermano",
                    "pt": "Meu irmão (pronuncia-se \"Mir-ma-no\")",
                    "audio": "Mi hermano"
                },
                {
                    "es": "De una vez",
                    "pt": "De uma vez (pronuncia-se \"Deu-na-vez\")",
                    "audio": "De una vez"
                },
                {
                    "es": "Ir a América",
                    "pt": "Ir à América (pronuncia-se \"I-ra-mé-ri-ca\")",
                    "audio": "Ir a América"
                },
                {
                    "es": "Va a ir",
                    "pt": "Vai ir (pronuncia-se \"Vair\")",
                    "audio": "Va a ir"
                }
            ],
            "quiz": []
        },
        {
            "id": "fon_b1_3",
            "level": "B1",
            "title": "15. Enlace Consonantal (Consoante + Vogal)",
            "summary": "Quando uma palavra termina em consoante e a seguinte começa com vogal, a consoante final passa foneticamente a ser o início da palavra seguinte.",
            "rule": "Cria a ilusão de que a frase é uma única palavra gigante (\"Los ojos\" vira \"Lo-so-jos\").",
            "examples": [
                {
                    "es": "Los ojos",
                    "pt": "Os olhos (pronuncia-se \"Lo-so-jos\")",
                    "audio": "Los ojos"
                },
                {
                    "es": "Un amigo",
                    "pt": "Um amigo (pronuncia-se \"U-na-mi-go\")",
                    "audio": "Un amigo"
                },
                {
                    "es": "Tener un",
                    "pt": "Ter um (pronuncia-se \"Te-ne-run\")",
                    "audio": "Tener un"
                },
                {
                    "es": "El agua",
                    "pt": "A água (pronuncia-se \"E-la-gua\")",
                    "audio": "El agua"
                }
            ],
            "quiz": [
                {
                    "question": "Qual é a diferença de significado entre \"Pero\" e \"Perro\"?",
                    "options": [
                        {
                            "label": "Pero significa \"mas\" e Perro significa \"cachorro\"",
                            "isCorrect": true,
                            "explanation": "Correto! A vibração da língua altera totalmente o significado da palavra."
                        },
                        {
                            "label": "Ambas significam cachorro",
                            "isCorrect": false,
                            "explanation": "Incorreto. Pero com R simples é a conjunção \"mas\"."
                        }
                    ]
                },
                {
                    "question": "O que é a \"Sinalefa\" no ritmo de fala nativa do espanhol?",
                    "options": [
                        {
                            "label": "A junção fluida da vogal final de uma palavra com a vogal da palavra seguinte",
                            "isCorrect": true,
                            "explanation": "Correto! A sinalefa cria o ritmo melodioso e contínuo da fala nativa."
                        },
                        {
                            "label": "A pausa prolongada entre cada palavra da frase",
                            "isCorrect": false,
                            "explanation": "Incorreto. A sinalefa elimina pausas entre vogais."
                        }
                    ]
                },
                {
                    "question": "Como a frase \"Los ojos\" é pronunciada na fala fluida nativa (Enlace Consonantal)?",
                    "options": [
                        {
                            "label": "Lo-so-jos (o S final liga-se à vogal O seguinte)",
                            "isCorrect": true,
                            "explanation": "Exato! No Enlace Consonantal, a consoante final migra para a vogal seguinte."
                        },
                        {
                            "label": "Los | ojos (fazendo uma pausa bem marcada entre as palavras)",
                            "isCorrect": false,
                            "explanation": "Incorreto. O espanhol conecta consoantes a vogais seguintes sem pausa."
                        }
                    ]
                },
                {
                    "question": "Para que servem os sinais invertidos (¿ e ¡) no início de frases em espanhol?",
                    "options": [
                        {
                            "label": "Para indicar ao leitor onde iniciar a entonação da pergunta ou exclamação",
                            "isCorrect": true,
                            "explanation": "Exato! Permitem preparar a entonação correta da voz desde o início da frase."
                        },
                        {
                            "label": "Apenas para ornamentação estética sem efeito na voz",
                            "isCorrect": false,
                            "explanation": "Incorreto. Eles orientam a prosódia da fala."
                        }
                    ]
                }
            ]
        },
        {
            "id": "fon_b2_1",
            "level": "B2",
            "title": "16. Ritmo Silábico Métrico (Syllable-Timed Rhythm)",
            "summary": "Diferente do inglês ou do português (que são idiomas acentuais/stress-timed), o espanhol é um idioma de RITMO SILÁBICO (syllable-timed): cada sílaba tem duração métrica quase idêntica.",
            "rule": "Mantenha uma cadência constante como um metrônomo regular, sem \"comer\" ou encurtar sílabas não tônicas em palavras longas.",
            "examples": [
                {
                    "es": "Constatación",
                    "pt": "Constatação (cadência métrica: Cons-ta-ta-ción)",
                    "audio": "Constatación"
                },
                {
                    "es": "Desestabilización",
                    "pt": "Desestabilização (metrônomo: Des-es-ta-bi-li-za-ción)",
                    "audio": "Desestabilización"
                },
                {
                    "es": "Responsabilidad",
                    "pt": "Responsabilidade (Res-pon-sa-bi-li-dad)",
                    "audio": "Responsabilidad"
                },
                {
                    "es": "Internacionalización",
                    "pt": "Internacionalização (In-ter-na-cio-na-li-za-ción)",
                    "audio": "Internacionalización"
                }
            ],
            "quiz": [
                {
                    "question": "O que significa dizer que o espanhol tem um \"Ritmo Silábico\" (Syllable-Timed)?",
                    "options": [
                        {
                            "label": "Cada sílaba da palavra é pronunciada com duração e cadência quase idênticas (como um metrônomo)",
                            "isCorrect": true,
                            "explanation": "Correto! No ritmo silábico, as sílabas possuem peso temporal equivalente."
                        },
                        {
                            "label": "Apenas a sílaba tônica tem som e as outras são engolidas",
                            "isCorrect": false,
                            "explanation": "Incorreto. Isso ocorre em idiomas acentuais como o inglês."
                        }
                    ]
                },
                {
                    "question": "Qual é o maior vício de portunhol ao pronunciar palavras longas como \"Responsabilidad\"?",
                    "options": [
                        {
                            "label": "Encurtar ou \"comer\" as sílabas átonas em vez de manter o tempo métrico constante",
                            "isCorrect": true,
                            "explanation": "Exato! O falante de português tende a acelerar as sílabas não tônicas."
                        },
                        {
                            "label": "Falar devagar demais separando sílabas por pausas longas",
                            "isCorrect": false,
                            "explanation": "Incorreto."
                        }
                    ]
                },
                {
                    "question": "Na frase \"Un amigo\", como a consoante N se comporta no ritmo prosódico?",
                    "options": [
                        {
                            "label": "Liga-se à vogal A formando \"U-na-mi-go\"",
                            "isCorrect": true,
                            "explanation": "Correto! Trata-se do Enlace Consonantal no ritmo contínuo."
                        },
                        {
                            "label": "Fica anasalada como \"Um\" em português",
                            "isCorrect": false,
                            "explanation": "Incorreto. Não há anasalamento."
                        }
                    ]
                },
                {
                    "question": "Como deve ser mantida a curva de afinação ao ler uma pergunta com ¿ no início?",
                    "options": [
                        {
                            "label": "A elevação melódica da voz começa já na primeira palavra sinalizada por ¿",
                            "isCorrect": true,
                            "explanation": "Correto! O sinal invertido antecipa a melodia interrogativa."
                        },
                        {
                            "label": "A voz só sobe no ponto de interrogação final",
                            "isCorrect": false,
                            "explanation": "Incorreto."
                        }
                    ]
                }
            ]
        }
    ],
    "verbos": [
        {
            "id": "v_hablar",
            "verb": "Hablar",
            "translation": "Falar",
            "type": "regular",
            "typeLabel": "Regular (-AR)",
            "conjugations": {
                "presente": {
                    "yo": "hablo",
                    "tu": "hablas",
                    "el": "habla",
                    "nosotros": "hablamos",
                    "vosotros": "habláis",
                    "ellos": "hablan"
                },
                "indefinido": {
                    "yo": "hablé",
                    "tu": "hablaste",
                    "el": "habló",
                    "nosotros": "hablamos",
                    "vosotros": "hablasteis",
                    "ellos": "hablaron"
                },
                "imperfecto": {
                    "yo": "hablaba",
                    "tu": "hablabas",
                    "el": "hablaba",
                    "nosotros": "hablábamos",
                    "vosotros": "hablabais",
                    "ellos": "hablaban"
                },
                "futuro": {
                    "yo": "hablaré",
                    "tu": "hablarás",
                    "el": "hablará",
                    "nosotros": "hablaremos",
                    "vosotros": "hablaréis",
                    "ellos": "hablarán"
                },
                "condicional": {
                    "yo": "hablaría",
                    "tu": "hablarías",
                    "el": "hablaría",
                    "nosotros": "hablaríamos",
                    "vosotros": "hablaríais",
                    "ellos": "hablarían"
                },
                "subjuntivo": {
                    "yo": "hable",
                    "tu": "hables",
                    "el": "hable",
                    "nosotros": "hablemos",
                    "vosotros": "habléis",
                    "ellos": "hablen"
                },
                "imperativo": {
                    "yo": "-",
                    "tu": "habla",
                    "el": "hable",
                    "nosotros": "hablemos",
                    "vosotros": "hablad",
                    "me": "hablen"
                }
            }
        },
        {
            "id": "v_comer",
            "verb": "Comer",
            "translation": "Comer",
            "type": "regular",
            "typeLabel": "Regular (-ER)",
            "conjugations": {
                "presente": {
                    "yo": "como",
                    "tu": "comes",
                    "el": "come",
                    "nosotros": "comemos",
                    "vosotros": "coméis",
                    "ellos": "comen"
                },
                "indefinido": {
                    "yo": "comí",
                    "tu": "comiste",
                    "el": "comió",
                    "nosotros": "comimos",
                    "vosotros": "comisteis",
                    "ellos": "comieron"
                },
                "imperfecto": {
                    "yo": "comía",
                    "tu": "comías",
                    "el": "comía",
                    "nosotros": "comíamos",
                    "vosotros": "comíais",
                    "ellos": "comían"
                },
                "futuro": {
                    "yo": "comeré",
                    "tu": "comerás",
                    "el": "comerá",
                    "nosotros": "comeremos",
                    "vosotros": "comeréis",
                    "ellos": "comerán"
                },
                "condicional": {
                    "yo": "comería",
                    "tu": "comerías",
                    "el": "comería",
                    "nosotros": "comeríamos",
                    "vosotros": "comeríais",
                    "ellos": "comerían"
                },
                "subjuntivo": {
                    "yo": "coma",
                    "tu": "comas",
                    "el": "coma",
                    "nosotros": "comamos",
                    "vosotros": "comáis",
                    "ellos": "coman"
                },
                "imperativo": {
                    "yo": "-",
                    "tu": "come",
                    "el": "coma",
                    "nosotros": "comamos",
                    "vosotros": "comed",
                    "me": "coman"
                }
            }
        },
        {
            "id": "v_vivir",
            "verb": "Vivir",
            "translation": "Viver / Morar",
            "type": "regular",
            "typeLabel": "Regular (-IR)",
            "conjugations": {
                "presente": {
                    "yo": "vivo",
                    "tu": "vives",
                    "el": "vive",
                    "nosotros": "vivimos",
                    "vosotros": "vivís",
                    "ellos": "viven"
                },
                "indefinido": {
                    "yo": "viví",
                    "tu": "viviste",
                    "el": "vivió",
                    "nosotros": "vivimos",
                    "vosotros": "vivisteis",
                    "ellos": "vivieron"
                },
                "imperfecto": {
                    "yo": "vivía",
                    "tu": "vivías",
                    "el": "vivía",
                    "nosotros": "vivíamos",
                    "vosotros": "vivíais",
                    "ellos": "vivían"
                },
                "futuro": {
                    "yo": "viviré",
                    "tu": "vivirás",
                    "el": "vivirá",
                    "nosotros": "viviremos",
                    "vosotros": "viviréis",
                    "ellos": "vivirán"
                },
                "condicional": {
                    "yo": "viviría",
                    "tu": "vivirías",
                    "el": "viviría",
                    "nosotros": "viviríamos",
                    "vosotros": "viviríais",
                    "ellos": "vivirían"
                },
                "subjuntivo": {
                    "yo": "viva",
                    "tu": "vivas",
                    "el": "viva",
                    "nosotros": "vivamos",
                    "vosotros": "viváis",
                    "ellos": "vivan"
                },
                "imperativo": {
                    "yo": "-",
                    "tu": "vive",
                    "el": "viva",
                    "nosotros": "vivamos",
                    "vosotros": "vivid",
                    "me": "vivan"
                }
            }
        },
        {
            "id": "v_ser",
            "verb": "Ser",
            "translation": "Ser (essência/caráter)",
            "type": "irregular",
            "typeLabel": "Irregular Altamente Relevante",
            "conjugations": {
                "presente": {
                    "yo": "soy",
                    "tu": "eres",
                    "el": "es",
                    "nosotros": "somos",
                    "vosotros": "sois",
                    "ellos": "son"
                },
                "indefinido": {
                    "yo": "fui",
                    "tu": "fuiste",
                    "el": "fue",
                    "nosotros": "fuimos",
                    "vosotros": "fuisteis",
                    "ellos": "fueron"
                },
                "imperfecto": {
                    "yo": "era",
                    "tu": "eras",
                    "el": "era",
                    "nosotros": "éramos",
                    "vosotros": "erais",
                    "ellos": "eran"
                },
                "futuro": {
                    "yo": "seré",
                    "tu": "serás",
                    "el": "será",
                    "nosotros": "seremos",
                    "vosotros": "seréis",
                    "ellos": "serán"
                },
                "condicional": {
                    "yo": "sería",
                    "tu": "serías",
                    "el": "sería",
                    "nosotros": "seríamos",
                    "vosotros": "seríais",
                    "ellos": "serían"
                },
                "subjuntivo": {
                    "yo": "sea",
                    "tu": "seas",
                    "el": "sea",
                    "nosotros": "seamos",
                    "vosotros": "seáis",
                    "ellos": "sean"
                },
                "imperativo": {
                    "yo": "-",
                    "tu": "sé",
                    "el": "sea",
                    "nosotros": "seamos",
                    "vosotros": "sed",
                    "me": "sean"
                }
            }
        },
        {
            "id": "v_estar",
            "verb": "Estar",
            "translation": "Estar (estado/localização)",
            "type": "irregular",
            "typeLabel": "Irregular Altamente Relevante",
            "conjugations": {
                "presente": {
                    "yo": "estoy",
                    "tu": "estás",
                    "el": "está",
                    "nosotros": "estamos",
                    "vosotros": "estáis",
                    "ellos": "están"
                },
                "indefinido": {
                    "yo": "estuve",
                    "tu": "estuviste",
                    "el": "estuvo",
                    "nosotros": "estuvimos",
                    "vosotros": "estuvisteis",
                    "me": "estuvieron"
                },
                "imperfecto": {
                    "yo": "estaba",
                    "tu": "estabas",
                    "el": "estaba",
                    "nosotros": "estábamos",
                    "vosotros": "estabais",
                    "ellos": "estaban"
                },
                "futuro": {
                    "yo": "estaré",
                    "tu": "estarás",
                    "el": "estará",
                    "nosotros": "estaremos",
                    "vosotros": "estaréis",
                    "ellos": "estarán"
                },
                "condicional": {
                    "yo": "estaría",
                    "tu": "estarías",
                    "el": "estaría",
                    "nosotros": "estaríamos",
                    "vosotros": "estaríais",
                    "ellos": "estarían"
                },
                "subjuntivo": {
                    "yo": "esté",
                    "tu": "estés",
                    "el": "esté",
                    "nosotros": "estemos",
                    "vosotros": "estéis",
                    "ellos": "estén"
                },
                "imperativo": {
                    "yo": "-",
                    "tu": "está",
                    "el": "esté",
                    "nosotros": "estemos",
                    "vosotros": "estad",
                    "me": "estén"
                }
            }
        },
        {
            "id": "v_tener",
            "verb": "Tener",
            "translation": "Ter / Possuir",
            "type": "stem-changing",
            "typeLabel": "Troca Vocálica (E ➔ IE) & Irregular",
            "conjugations": {
                "presente": {
                    "yo": "tengo",
                    "tu": "tienes",
                    "el": "tiene",
                    "nosotros": "tenemos",
                    "vosotros": "tenéis",
                    "ellos": "tienen"
                },
                "indefinido": {
                    "yo": "tuve",
                    "tu": "tuviste",
                    "el": "tuvo",
                    "nosotros": "tuvimos",
                    "vosotros": "tuvisteis",
                    "ellos": "tuvieron"
                },
                "imperfecto": {
                    "yo": "tenía",
                    "tu": "tenías",
                    "el": "tenía",
                    "nosotros": "teníamos",
                    "vosotros": "teníais",
                    "ellos": "tenían"
                },
                "futuro": {
                    "yo": "tendré",
                    "tu": "tendrás",
                    "el": "tendrá",
                    "nosotros": "tendremos",
                    "vosotros": "tendréis",
                    "ellos": "tendrán"
                },
                "condicional": {
                    "yo": "tendría",
                    "tu": "tendrías",
                    "el": "tendría",
                    "nosotros": "tendríamos",
                    "vosotros": "tendríais",
                    "ellos": "tendrían"
                },
                "subjuntivo": {
                    "yo": "tenga",
                    "tu": "tengas",
                    "el": "tenga",
                    "nosotros": "tengamos",
                    "vosotros": "tengáis",
                    "ellos": "tengan"
                },
                "imperativo": {
                    "yo": "-",
                    "tu": "ten",
                    "el": "tenga",
                    "nosotros": "tengamos",
                    "vosotros": "tened",
                    "me": "tengan"
                }
            }
        },
        {
            "id": "v_ir",
            "verb": "Ir",
            "translation": "Ir",
            "type": "irregular",
            "typeLabel": "Irregular Total",
            "conjugations": {
                "presente": {
                    "yo": "voy",
                    "tu": "vas",
                    "el": "va",
                    "nosotros": "vamos",
                    "vosotros": "vais",
                    "ellos": "van"
                },
                "indefinido": {
                    "yo": "fui",
                    "tu": "fuiste",
                    "el": "fue",
                    "nosotros": "fuimos",
                    "vosotros": "fuisteis",
                    "ellos": "fueron"
                },
                "imperfecto": {
                    "yo": "iba",
                    "tu": "ibas",
                    "el": "iba",
                    "nosotros": "íbamos",
                    "vosotros": "ibais",
                    "ellos": "iban"
                },
                "futuro": {
                    "yo": "iré",
                    "tu": "irás",
                    "el": "irá",
                    "nosotros": "iremos",
                    "vosotros": "iréis",
                    "ellos": "irán"
                },
                "condicional": {
                    "yo": "iría",
                    "tu": "irías",
                    "el": "iría",
                    "nosotros": "iríamos",
                    "vosotros": "iríais",
                    "ellos": "irían"
                },
                "subjuntivo": {
                    "yo": "vaya",
                    "tu": "vayas",
                    "el": "vaya",
                    "nosotros": "vayamos",
                    "vosotros": "vayáis",
                    "ellos": "vayan"
                },
                "imperativo": {
                    "yo": "-",
                    "tu": "ve",
                    "el": "vaya",
                    "nosotros": "vamos",
                    "vosotros": "id",
                    "me": "vayan"
                }
            }
        },
        {
            "id": "v_hacer",
            "verb": "Hacer",
            "translation": "Fazer",
            "type": "irregular",
            "typeLabel": "Irregular (G-raiz & Raiz especial)",
            "conjugations": {
                "presente": {
                    "yo": "hago",
                    "tu": "haces",
                    "el": "hace",
                    "nosotros": "hacemos",
                    "vosotros": "hacéis",
                    "ellos": "hacen"
                },
                "indefinido": {
                    "yo": "hice",
                    "tu": "hiciste",
                    "el": "hizo",
                    "nosotros": "hicimos",
                    "vosotros": "hicisteis",
                    "ellos": "hicieron"
                },
                "imperfecto": {
                    "yo": "hacía",
                    "tu": "hacías",
                    "el": "hacía",
                    "nosotros": "hacíamos",
                    "vosotros": "hacíais",
                    "ellos": "hacían"
                },
                "futuro": {
                    "yo": "haré",
                    "tu": "harás",
                    "el": "hará",
                    "nosotros": "haremos",
                    "vosotros": "haréis",
                    "ellos": "harán"
                },
                "condicional": {
                    "yo": "haría",
                    "tu": "harías",
                    "el": "haría",
                    "nosotros": "haríamos",
                    "vosotros": "haríais",
                    "ellos": "harían"
                },
                "subjuntivo": {
                    "yo": "haga",
                    "tu": "hagas",
                    "el": "haga",
                    "nosotros": "hagamos",
                    "vosotros": "hagáis",
                    "ellos": "hagan"
                },
                "imperativo": {
                    "yo": "-",
                    "tu": "haz",
                    "el": "haga",
                    "nosotros": "hagamos",
                    "vosotros": "haced",
                    "me": "hagan"
                }
            }
        },
        {
            "id": "v_poder",
            "verb": "Poder",
            "translation": "Poder / Conseguir",
            "type": "stem-changing",
            "typeLabel": "Troca Vocálica (O ➔ UE)",
            "conjugations": {
                "presente": {
                    "yo": "puedo",
                    "tu": "puedes",
                    "el": "puede",
                    "nosotros": "podemos",
                    "vosotros": "podéis",
                    "ellos": "pueden"
                },
                "indefinido": {
                    "yo": "pude",
                    "tu": "pudiste",
                    "el": "pudo",
                    "nosotros": "pudimos",
                    "vosotros": "pudisteis",
                    "ellos": "pudieron"
                },
                "imperfecto": {
                    "yo": "podía",
                    "tu": "podías",
                    "el": "podía",
                    "nosotros": "podíamos",
                    "vosotros": "podíais",
                    "ellos": "podían"
                },
                "futuro": {
                    "yo": "podré",
                    "tu": "podrás",
                    "el": "podrá",
                    "nosotros": "podremos",
                    "vosotros": "podréis",
                    "ellos": "podrán"
                },
                "condicional": {
                    "yo": "podría",
                    "tu": "podrías",
                    "el": "podría",
                    "nosotros": "podríamos",
                    "vosotros": "podríais",
                    "ellos": "podrían"
                },
                "subjuntivo": {
                    "yo": "pueda",
                    "tu": "puedas",
                    "el": "pueda",
                    "nosotros": "podamos",
                    "vosotros": "podáis",
                    "ellos": "puedan"
                },
                "imperativo": {
                    "yo": "-",
                    "tu": "puede",
                    "el": "pueda",
                    "nosotros": "podamos",
                    "vosotros": "poded",
                    "me": "puedan"
                }
            }
        },
        {
            "id": "v_querer",
            "verb": "Querer",
            "translation": "Querer / Amar",
            "type": "stem-changing",
            "typeLabel": "Troca Vocálica (E ➔ IE)",
            "conjugations": {
                "presente": {
                    "yo": "quiero",
                    "tu": "quieres",
                    "el": "quiere",
                    "nosotros": "queremos",
                    "vosotros": "queréis",
                    "ellos": "quieren"
                },
                "indefinido": {
                    "yo": "quise",
                    "tu": "quisiste",
                    "el": "quiso",
                    "nosotros": "quisimos",
                    "vosotros": "quisisteis",
                    "ellos": "quisieron"
                },
                "imperfecto": {
                    "yo": "quería",
                    "tu": "querías",
                    "el": "quería",
                    "nosotros": "queríamos",
                    "vosotros": "queríais",
                    "ellos": "querían"
                },
                "futuro": {
                    "yo": "querré",
                    "tu": "querrás",
                    "el": "querrá",
                    "nosotros": "querremos",
                    "vosotros": "querréis",
                    "ellos": "querrán"
                },
                "condicional": {
                    "yo": "querría",
                    "tu": "querrías",
                    "el": "querría",
                    "nosotros": "querríamos",
                    "vosotros": "querríais",
                    "ellos": "querrían"
                },
                "subjuntivo": {
                    "yo": "quiera",
                    "tu": "quieras",
                    "el": "quiera",
                    "nosotros": "queramos",
                    "vosotros": "queráis",
                    "ellos": "quieran"
                },
                "imperativo": {
                    "yo": "-",
                    "tu": "quiére",
                    "el": "quiera",
                    "nosotros": "queramos",
                    "vosotros": "quered",
                    "me": "quieran"
                }
            }
        },
        {
            "id": "v_decir",
            "verb": "Decir",
            "translation": "Dizer",
            "type": "stem-changing",
            "typeLabel": "Troca Vocálica (E ➔ I) & Irregular",
            "conjugations": {
                "presente": {
                    "yo": "digo",
                    "tu": "dices",
                    "el": "dice",
                    "nosotros": "decimos",
                    "vosotros": "decís",
                    "ellos": "dicen"
                },
                "indefinido": {
                    "yo": "dije",
                    "tu": "dijiste",
                    "el": "dijo",
                    "nosotros": "dijimos",
                    "vosotros": "dijisteis",
                    "ellos": "dijeron"
                },
                "imperfecto": {
                    "yo": "decía",
                    "tu": "decías",
                    "el": "decía",
                    "nosotros": "decíamos",
                    "vosotros": "decíais",
                    "me": "decían"
                },
                "futuro": {
                    "yo": "diré",
                    "tu": "dirás",
                    "el": "dirá",
                    "nosotros": "diremos",
                    "vosotros": "diréis",
                    "ellos": "dirán"
                },
                "condicional": {
                    "yo": "diría",
                    "tu": "dirías",
                    "el": "diría",
                    "nosotros": "diríamos",
                    "vosotros": "diríais",
                    "ellos": "dirían"
                },
                "subjuntivo": {
                    "yo": "diga",
                    "tu": "digas",
                    "el": "diga",
                    "nosotros": "digamos",
                    "vosotros": "digáis",
                    "ellos": "digan"
                },
                "imperativo": {
                    "yo": "-",
                    "tu": "di",
                    "el": "diga",
                    "nosotros": "digamos",
                    "vosotros": "decid",
                    "me": "digan"
                }
            }
        }
    ],
    "heterotonicos": [
        {
            "word": "Academia",
            "ptStress": "a-ca-de-MI-a",
            "esStress": "a-ca-DE-mia",
            "translation": "Academia",
            "example": "La academia ofrece varios cursos.",
            "audio": "Academia"
        },
        {
            "word": "Alcohol",
            "ptStress": "ÁL-cool",
            "esStress": "al-co-HOL",
            "translation": "Álcool",
            "example": "No debes conducir después de beber alcohol.",
            "audio": "Alcohol"
        },
        {
            "word": "Alergia",
            "ptStress": "a-ler-GI-a",
            "esStress": "a-LER-gia",
            "translation": "Alergia",
            "example": "Tengo alergia al polvo.",
            "audio": "Alergia"
        },
        {
            "word": "Alguien",
            "ptStress": "al-GUÉM",
            "esStress": "AL-guien",
            "translation": "Alguém",
            "example": "Hay alguien en la puerta.",
            "audio": "Alguien"
        },
        {
            "word": "Anestesia",
            "ptStress": "a-nes-te-SI-a",
            "esStress": "a-nes-TE-sia",
            "translation": "Anestesia",
            "example": "El paciente recibió anestesia.",
            "audio": "Anestesia"
        },
        {
            "word": "Asfixia",
            "ptStress": "as-fi-XI-a",
            "esStress": "as-FI-xia",
            "translation": "Asfixia",
            "example": "La asfixia requiere atención inmediata.",
            "audio": "Asfixia"
        },
        {
            "word": "Atmósfera",
            "ptStress": "at-mos-FE-ra",
            "esStress": "at-MÓS-fe-ra",
            "translation": "Atmosfera",
            "example": "La atmósfera protege nuestro planeta.",
            "audio": "Atmósfera"
        },
        {
            "word": "Burocracia",
            "ptStress": "bu-ro-cra-CI-a",
            "esStress": "bu-ro-CRA-cia",
            "translation": "Burocracia",
            "example": "La burocracia retrasó el proceso.",
            "audio": "Burocracia"
        },
        {
            "word": "Cerebro",
            "ptStress": "CÉ-re-bro",
            "esStress": "ce-RE-bro",
            "translation": "Cérebro",
            "example": "El cerebro controla muchas funciones.",
            "audio": "Cerebro"
        },
        {
            "word": "Democracia",
            "ptStress": "de-mo-cra-CI-a",
            "esStress": "de-mo-CRA-cia",
            "translation": "Democracia",
            "example": "Vivimos en una democracia.",
            "audio": "Democracia"
        },
        {
            "word": "Demócrata",
            "ptStress": "de-mo-CRA-ta",
            "esStress": "de-MÓ-cra-ta",
            "translation": "Democrata",
            "example": "El candidato se declaró demócrata.",
            "audio": "Demócrata"
        },
        {
            "word": "Elogio",
            "ptStress": "e-lo-GI-o",
            "esStress": "e-LO-gio",
            "translation": "Elogio",
            "example": "Le hizo un gran elogio por su esfuerzo.",
            "audio": "Elogio"
        },
        {
            "word": "Epidemia",
            "ptStress": "e-pi-de-MI-a",
            "esStress": "e-pi-DE-mia",
            "translation": "Epidemia",
            "example": "La epidemia afectó a miles de personas.",
            "audio": "Epidemia"
        },
        {
            "word": "Gaucho",
            "ptStress": "ga-Ú-cho",
            "esStress": "GAU-cho",
            "translation": "Gaúcho",
            "example": "El gaucho montó su caballo.",
            "audio": "Gaucho"
        },
        {
            "word": "Héroe",
            "ptStress": "he-RÓI",
            "esStress": "HÉ-ro-e",
            "translation": "Herói",
            "example": "Fue considerado un héroe.",
            "audio": "Héroe"
        },
        {
            "word": "Límite",
            "ptStress": "li-MI-te",
            "esStress": "LÍ-mi-te",
            "translation": "Limite",
            "example": "Hay un límite de velocidad.",
            "audio": "Límite"
        },
        {
            "word": "Magia",
            "ptStress": "ma-GI-a",
            "esStress": "MA-gia",
            "translation": "Magia",
            "example": "El espectáculo está lleno de magia.",
            "audio": "Magia"
        },
        {
            "word": "Micrófono",
            "ptStress": "mi-cro-FO-ne",
            "esStress": "mi-CRÓ-fo-no",
            "translation": "Microfone",
            "example": "Habla cerca del micrófono.",
            "audio": "Micrófono"
        },
        {
            "word": "Nivel",
            "ptStress": "NÍ-vel",
            "esStress": "ni-VEL",
            "translation": "Nível",
            "example": "Mi nivel de español ha mejorado.",
            "audio": "Nivel"
        },
        {
            "word": "Nostalgia",
            "ptStress": "nos-tal-GI-a",
            "esStress": "nos-TAL-gia",
            "translation": "Nostalgia",
            "example": "Siente nostalgia de su infancia.",
            "audio": "Nostalgia"
        },
        {
            "word": "Océano",
            "ptStress": "o-ce-A-no",
            "esStress": "o-CÉ-a-no",
            "translation": "Oceano",
            "example": "Cruzaron el océano Atlántico.",
            "audio": "Océano"
        },
        {
            "word": "Olimpiadas",
            "ptStress": "o-lim-PÍ-a-das",
            "esStress": "o-lim-PIA-das",
            "translation": "Olimpíadas",
            "example": "Participó en las Olimpiadas.",
            "audio": "Olimpiadas"
        },
        {
            "word": "Oxígeno",
            "ptStress": "o-xi-GÊ-ni-o",
            "esStress": "o-XÍ-ge-no",
            "translation": "Oxigênio",
            "example": "Necesitamos oxígeno para vivir.",
            "audio": "Oxígeno"
        },
        {
            "word": "Pantano",
            "ptStress": "PÂN-ta-no",
            "esStress": "pan-TA-no",
            "translation": "Pântano",
            "example": "El animal vive cerca del pantano.",
            "audio": "Pantano"
        },
        {
            "word": "Parálisis",
            "ptStress": "pa-ra-li-SI-a",
            "esStress": "pa-RÁ-li-sis",
            "translation": "Paralisia",
            "example": "La enfermedad puede causar parálisis.",
            "audio": "Parálisis"
        },
        {
            "word": "Policía",
            "ptStress": "po-LÍ-cia",
            "esStress": "po-li-CÍ-a",
            "translation": "Polícia",
            "example": "La policía llegó rápidamente.",
            "audio": "Policía"
        },
        {
            "word": "Prototipo",
            "ptStress": "pro-TÓ-ti-po",
            "esStress": "pro-to-TI-po",
            "translation": "Protótipo",
            "example": "Presentaron el primer prototipo.",
            "audio": "Prototipo"
        },
        {
            "word": "Síntoma",
            "ptStress": "sin-TO-ma",
            "esStress": "SÍN-to-ma",
            "translation": "Sintoma",
            "example": "La fiebre puede ser un síntoma.",
            "audio": "Síntoma"
        },
        {
            "word": "Régimen",
            "ptStress": "re-GI-me",
            "esStress": "RÉ-gi-men",
            "translation": "Regime",
            "example": "Sigue un régimen especial.",
            "audio": "Régimen"
        },
        {
            "word": "Vértigo",
            "ptStress": "ver-TI-gem",
            "esStress": "VÉR-ti-go",
            "translation": "Vertigem",
            "example": "Sufrió un episodio de vértigo.",
            "audio": "Vértigo"
        },
        {
            "word": "Catéter",
            "ptStress": "ca-te-TER",
            "esStress": "ca-TÉ-ter",
            "translation": "Cateter",
            "example": "El médico colocó un catéter.",
            "audio": "Catéter"
        },
        {
            "word": "Imán",
            "ptStress": "Í-mã",
            "esStress": "i-MÁN",
            "translation": "Ímã",
            "example": "El imán atrae el metal.",
            "audio": "Imán"
        },
        {
            "word": "Acné",
            "ptStress": "AC-ne",
            "esStress": "ac-NÉ",
            "translation": "Acne",
            "example": "El acné es frecuente en adolescentes.",
            "audio": "Acné"
        },
        {
            "word": "Cráter",
            "ptStress": "cra-TE-ra",
            "esStress": "CRÁ-ter",
            "translation": "Cratera",
            "example": "El volcán tiene un enorme cráter.",
            "audio": "Cráter"
        },
        {
            "word": "Anorexia",
            "ptStress": "a-no-re-XI-a",
            "esStress": "a-no-RE-xia",
            "translation": "Anorexia",
            "example": "La anorexia necesita tratamiento especializado.",
            "audio": "Anorexia"
        },
        {
            "word": "Euforia",
            "ptStress": "eu-fo-RI-a",
            "esStress": "eu-FO-ria",
            "translation": "Euforia",
            "example": "La victoria provocó euforia.",
            "audio": "Euforia"
        },
        {
            "word": "Teléfono",
            "ptStress": "te-le-FO-ne",
            "esStress": "te-LÉ-fo-no",
            "translation": "Telefone",
            "example": "Mi teléfono está en la mesa.",
            "audio": "Teléfono"
        },
        {
            "word": "Hola",
            "ptStress": "o-LÁ",
            "esStress": "HO-la",
            "translation": "Olá",
            "example": "Hola, ¿cómo estás?",
            "audio": "Hola"
        },
        {
            "word": "Pandemia",
            "ptStress": "pan-de-MI-a",
            "esStress": "pan-DE-mia",
            "translation": "Pandemia",
            "example": "La pandemia cambió muchas rutinas.",
            "audio": "Pandemia"
        },
        {
            "word": "Nitrógeno",
            "ptStress": "ni-tro-GÊ-ni-o",
            "esStress": "ni-TRÓ-ge-no",
            "translation": "Nitrogênio",
            "example": "El aire contiene nitrógeno.",
            "audio": "Nitrógeno"
        },
        {
            "word": "Fútbol",
            "ptStress": "fu-te-BOL",
            "esStress": "FÚT-bol",
            "translation": "Futebol",
            "example": "Me gusta jugar al fútbol.",
            "audio": "Fútbol"
        },
        {
            "word": "Electrón",
            "ptStress": "e-LÉ-tron",
            "esStress": "e-lec-TRÓN",
            "translation": "Elétron",
            "example": "El electrón tiene carga negativa.",
            "audio": "Electrón"
        },
        {
            "word": "Tráquea",
            "ptStress": "tra-QUEI-a",
            "esStress": "TRÁ-que-a",
            "translation": "Traqueia",
            "example": "El aire pasa por la tráquea.",
            "audio": "Tráquea"
        },
        {
            "word": "Periferia",
            "ptStress": "pe-ri-fe-RI-a",
            "esStress": "pe-ri-FE-ria",
            "translation": "Periferia",
            "example": "Vive en la periferia de la ciudad.",
            "audio": "Periferia"
        },
        {
            "word": "Anemia",
            "ptStress": "a-ne-MI-a",
            "esStress": "a-NE-mia",
            "translation": "Anemia",
            "example": "El análisis confirmó la anemia.",
            "audio": "Anemia"
        },
        {
            "word": "Leucemia",
            "ptStress": "leu-ce-MI-a",
            "esStress": "leu-CE-mia",
            "translation": "Leucemia",
            "example": "La leucemia afecta las células sanguíneas.",
            "audio": "Leucemia"
        },
        {
            "word": "Hipotermia",
            "ptStress": "hi-po-ter-MI-a",
            "esStress": "hi-po-TER-mia",
            "translation": "Hipotermia",
            "example": "El frío extremo puede causar hipotermia.",
            "audio": "Hipotermia"
        },
        {
            "word": "Fobia",
            "ptStress": "fo-BI-a",
            "esStress": "FO-bia",
            "translation": "Fobia",
            "example": "Tiene una fobia específica.",
            "audio": "Fobia"
        },
        {
            "word": "Aracnofobia",
            "ptStress": "a-rac-no-fo-BI-a",
            "esStress": "a-rac-no-FO-bia",
            "translation": "Aracnofobia",
            "example": "La aracnofobia es el miedo a las arañas.",
            "audio": "Aracnofobia"
        },
        {
            "word": "Claustrofobia",
            "ptStress": "claus-tro-fo-BI-a",
            "esStress": "claus-tro-FO-bia",
            "translation": "Claustrofobia",
            "example": "Tiene claustrofobia y evita los ascensores.",
            "audio": "Claustrofobia"
        },
        {
            "word": "Agorafobia",
            "ptStress": "a-go-ra-fo-BI-a",
            "esStress": "a-go-ra-FO-bia",
            "translation": "Agorafobia",
            "example": "La agorafobia puede limitar la vida cotidiana.",
            "audio": "Agorafobia"
        },
        {
            "word": "Xenofobia",
            "ptStress": "xe-no-fo-BI-a",
            "esStress": "xe-no-FO-bia",
            "translation": "Xenofobia",
            "example": "Debemos combatir la xenofobia.",
            "audio": "Xenofobia"
        },
        {
            "word": "Homofobia",
            "ptStress": "ho-mo-fo-BI-a",
            "esStress": "ho-mo-FO-bia",
            "translation": "Homofobia",
            "example": "La campaña denuncia la homofobia.",
            "audio": "Homofobia"
        },
        {
            "word": "Hidrofobia",
            "ptStress": "hi-dro-fo-BI-a",
            "esStress": "hi-dro-FO-bia",
            "translation": "Hidrofobia",
            "example": "La hidrofobia puede aparecer en la rabia.",
            "audio": "Hidrofobia"
        },
        {
            "word": "Demagogia",
            "ptStress": "de-ma-go-GI-a",
            "esStress": "de-ma-GO-gia",
            "translation": "Demagogia",
            "example": "El discurso fue acusado de demagogia.",
            "audio": "Demagogia"
        },
        {
            "word": "Hemorragia",
            "ptStress": "he-mor-ra-GI-a",
            "esStress": "he-mo-RRA-gia",
            "translation": "Hemorragia",
            "example": "Los médicos controlaron la hemorragia.",
            "audio": "Hemorragia"
        },
        {
            "word": "Liturgia",
            "ptStress": "li-tur-GI-a",
            "esStress": "li-TUR-gia",
            "translation": "Liturgia",
            "example": "Estudió la liturgia de la ceremonia.",
            "audio": "Liturgia"
        },
        {
            "word": "Terapia",
            "ptStress": "te-ra-PI-a",
            "esStress": "te-RA-pia",
            "translation": "Terapia",
            "example": "Comenzó una nueva terapia.",
            "audio": "Terapia"
        },
        {
            "word": "Fisioterapia",
            "ptStress": "fi-si-o-te-ra-PI-a",
            "esStress": "fi-sio-te-RA-pia",
            "translation": "Fisioterapia",
            "example": "Necesita varias sesiones de fisioterapia.",
            "audio": "Fisioterapia"
        },
        {
            "word": "Quimioterapia",
            "ptStress": "qui-mi-o-te-ra-PI-a",
            "esStress": "qui-mio-te-RA-pia",
            "translation": "Quimioterapia",
            "example": "El paciente inició la quimioterapia.",
            "audio": "Quimioterapia"
        },
        {
            "word": "Psicoterapia",
            "ptStress": "psi-co-te-ra-PI-a",
            "esStress": "psi-co-te-RA-pia",
            "translation": "Psicoterapia",
            "example": "La psicoterapia puede ser útil.",
            "audio": "Psicoterapia"
        },
        {
            "word": "Ortopedia",
            "ptStress": "or-to-pe-DI-a",
            "esStress": "or-to-PE-dia",
            "translation": "Ortopedia",
            "example": "Trabaja en el área de ortopedia.",
            "audio": "Ortopedia"
        },
        {
            "word": "Megáfono",
            "ptStress": "me-ga-FO-ne",
            "esStress": "me-GÁ-fo-no",
            "translation": "Megafone",
            "example": "Habló por el megáfono.",
            "audio": "Megáfono"
        },
        {
            "word": "Xilófono",
            "ptStress": "xi-lo-FO-ne",
            "esStress": "xi-LÓ-fo-no",
            "translation": "Xilofone",
            "example": "El niño toca el xilófono.",
            "audio": "Xilófono"
        },
        {
            "word": "Hidrógeno",
            "ptStress": "hi-dro-GÊ-ni-o",
            "esStress": "hi-DRÓ-ge-no",
            "translation": "Hidrogênio",
            "example": "El hidrógeno es un elemento químico.",
            "audio": "Hidrógeno"
        },
        {
            "word": "Imbécil",
            "ptStress": "im-be-CIL",
            "esStress": "im-BÉ-cil",
            "translation": "Imbecil",
            "example": "No lo llames imbécil.",
            "audio": "Imbécil"
        },
        {
            "word": "Misil",
            "ptStress": "MÍS-sil",
            "esStress": "mi-SIL",
            "translation": "Míssil",
            "example": "El ejército lanzó un misil.",
            "audio": "Misil"
        },
        {
            "word": "Rúbrica",
            "ptStress": "ru-BRI-ca",
            "esStress": "RÚ-bri-ca",
            "translation": "Rubrica",
            "example": "El profesor preparó una rúbrica de evaluación.",
            "audio": "Rúbrica"
        },
        {
            "word": "Textil",
            "ptStress": "TÊX-til",
            "esStress": "tex-TIL",
            "translation": "Têxtil",
            "example": "La industria textil genera muchos empleos.",
            "audio": "Textil"
        },
        {
            "word": "Parásito",
            "ptStress": "pa-ra-SI-ta",
            "esStress": "pa-RÁ-si-to",
            "translation": "Parasita",
            "example": "El parásito vive dentro del huésped.",
            "audio": "Parásito"
        },
        {
            "word": "Acróbata",
            "ptStress": "a-cro-BA-ta",
            "esStress": "a-CRÓ-ba-ta",
            "translation": "Acrobata",
            "example": "El acróbata realizó un salto increíble.",
            "audio": "Acróbata"
        },
        {
            "word": "Caníbal",
            "ptStress": "ca-ni-BAL",
            "esStress": "ca-NÍ-bal",
            "translation": "Canibal",
            "example": "La historia habla de un pueblo caníbal.",
            "audio": "Caníbal"
        },
        {
            "word": "Anécdota",
            "ptStress": "a-ne-DO-ta",
            "esStress": "a-NÉC-do-ta",
            "translation": "Anedota",
            "example": "Contó una anécdota divertida.",
            "audio": "Anécdota"
        },
        {
            "word": "Microcefalia",
            "ptStress": "mi-cro-ce-fa-LI-a",
            "esStress": "mi-cro-ce-FA-lia",
            "translation": "Microcefalia",
            "example": "El médico explicó qué es la microcefalia.",
            "audio": "Microcefalia"
        },
        {
            "word": "Hidrocefalia",
            "ptStress": "hi-dro-ce-fa-LI-a",
            "esStress": "hi-dro-ce-FA-lia",
            "translation": "Hidrocefalia",
            "example": "La hidrocefalia requiere seguimiento médico.",
            "audio": "Hidrocefalia"
        },
        {
            "word": "Analgesia",
            "ptStress": "a-nal-ge-SI-a",
            "esStress": "a-nal-GE-sia",
            "translation": "Analgesia",
            "example": "El medicamento proporciona analgesia.",
            "audio": "Analgesia"
        },
        {
            "word": "Afasia",
            "ptStress": "a-fa-SI-a",
            "esStress": "a-FA-sia",
            "translation": "Afasia",
            "example": "La lesión cerebral produjo afasia.",
            "audio": "Afasia"
        },
        {
            "word": "Epilepsia",
            "ptStress": "e-pi-lep-SI-a",
            "esStress": "e-pi-LEP-sia",
            "translation": "Epilepsia",
            "example": "La epilepsia puede controlarse con tratamiento.",
            "audio": "Epilepsia"
        },
        {
            "word": "Aristocracia",
            "ptStress": "a-ris-to-cra-CI-a",
            "esStress": "a-ris-to-CRA-cia",
            "translation": "Aristocracia",
            "example": "La aristocracia tenía gran influencia.",
            "audio": "Aristocracia"
        },
        {
            "word": "Autocracia",
            "ptStress": "au-to-cra-CI-a",
            "esStress": "au-to-CRA-cia",
            "translation": "Autocracia",
            "example": "El país evolucionó hacia una autocracia.",
            "audio": "Autocracia"
        },
        {
            "word": "Teocracia",
            "ptStress": "te-o-cra-CI-a",
            "esStress": "te-o-CRA-cia",
            "translation": "Teocracia",
            "example": "El texto analiza el concepto de teocracia.",
            "audio": "Teocracia"
        },
        {
            "word": "Tecnocracia",
            "ptStress": "tec-no-cra-CI-a",
            "esStress": "tec-no-CRA-cia",
            "translation": "Tecnocracia",
            "example": "El autor critica la tecnocracia.",
            "audio": "Tecnocracia"
        },
        {
            "word": "Plutocracia",
            "ptStress": "plu-to-cra-CI-a",
            "esStress": "plu-to-CRA-cia",
            "translation": "Plutocracia",
            "example": "El ensayo habla de plutocracia.",
            "audio": "Plutocracia"
        },
        {
            "word": "Meritocracia",
            "ptStress": "me-ri-to-cra-CI-a",
            "esStress": "me-ri-to-CRA-cia",
            "translation": "Meritocracia",
            "example": "Debatieron sobre la meritocracia.",
            "audio": "Meritocracia"
        },
        {
            "word": "Aristócrata",
            "ptStress": "a-ris-to-CRA-ta",
            "esStress": "a-ris-TÓ-cra-ta",
            "translation": "Aristocrata",
            "example": "Era un aristócrata muy conocido.",
            "audio": "Aristócrata"
        },
        {
            "word": "Autócrata",
            "ptStress": "au-to-CRA-ta",
            "esStress": "au-TÓ-cra-ta",
            "translation": "Autócrata",
            "example": "El gobernante fue descrito como autócrata.",
            "audio": "Autócrata"
        },
        {
            "word": "Teócrata",
            "ptStress": "te-o-CRA-ta",
            "esStress": "te-Ó-cra-ta",
            "translation": "Teócrata",
            "example": "El líder era considerado teócrata.",
            "audio": "Teócrata"
        },
        {
            "word": "Tecnócrata",
            "ptStress": "tec-no-CRA-ta",
            "esStress": "tec-NÓ-cra-ta",
            "translation": "Tecnócrata",
            "example": "Nombraron a un tecnócrata para el cargo.",
            "audio": "Tecnócrata"
        },
        {
            "word": "Disforia",
            "ptStress": "dis-fo-RI-a",
            "esStress": "dis-FO-ria",
            "translation": "Disforia",
            "example": "El término disforia aparece en el informe.",
            "audio": "Disforia"
        },
        {
            "word": "Acrofobia",
            "ptStress": "a-cro-fo-BI-a",
            "esStress": "a-cro-FO-bia",
            "translation": "Acrofobia",
            "example": "Su acrofobia le impide subir a lugares altos.",
            "audio": "Acrofobia"
        },
        {
            "word": "Necrofobia",
            "ptStress": "ne-cro-fo-BI-a",
            "esStress": "ne-cro-FO-bia",
            "translation": "Necrofobia",
            "example": "La necrofobia es un miedo intenso.",
            "audio": "Necrofobia"
        },
        {
            "word": "Zoofobia",
            "ptStress": "zo-o-fo-BI-a",
            "esStress": "zo-o-FO-bia",
            "translation": "Zoofobia",
            "example": "La zoofobia puede involucrar distintos animales.",
            "audio": "Zoofobia"
        },
        {
            "word": "Hipernatremia",
            "ptStress": "hi-per-na-tre-MI-a",
            "esStress": "hi-per-na-TRE-mia",
            "translation": "Hipernatremia",
            "example": "La hipernatremia requiere evaluación médica.",
            "audio": "Hipernatremia"
        }
    ],
    "regionalismos": [
        {
            "concept": "Ônibus",
            "es": "autobús",
            "mx": "camión / autobús",
            "ar": "colectivo / bondi",
            "co": "bus / buseta",
            "chile": "micro / bus",
            "cl": "micro / bus",
            "outros": "guagua 🇨🇺🇵🇷; ómnibus 🇺🇾🇨🇺"
        },
        {
            "concept": "Celular / Telefone",
            "es": "móvil",
            "mx": "celular",
            "ar": "celular",
            "co": "celular",
            "chile": "celular",
            "cl": "celular",
            "outros": "móvil / celular"
        },
        {
            "concept": "Carro / Automóvel",
            "es": "coche",
            "mx": "carro / auto",
            "ar": "auto",
            "co": "carro",
            "chile": "auto",
            "cl": "auto",
            "outros": "carro"
        },
        {
            "concept": "Computador",
            "es": "ordenador",
            "mx": "computadora",
            "ar": "computadora / compu",
            "co": "computador",
            "chile": "computador",
            "cl": "computador",
            "outros": "computadora 🇨🇺🇵🇷; computador 🇵🇪"
        },
        {
            "concept": "Suco",
            "es": "zumo",
            "mx": "jugo",
            "ar": "jugo",
            "co": "jugo",
            "chile": "jugo",
            "cl": "jugo",
            "outros": "jugo"
        },
        {
            "concept": "Batata",
            "es": "patata",
            "mx": "papa",
            "ar": "papa",
            "co": "papa",
            "chile": "papa",
            "cl": "papa",
            "outros": "papa"
        },
        {
            "concept": "Feijão",
            "es": "judías / alubias",
            "mx": "frijoles",
            "ar": "porotos",
            "co": "fríjoles",
            "chile": "porotos",
            "cl": "porotos",
            "outros": "habichuelas 🇵🇷🇩🇴; caraotas 🇻🇪"
        },
        {
            "concept": "Abacate",
            "es": "aguacate",
            "mx": "aguacate",
            "ar": "palta",
            "co": "aguacate",
            "chile": "palta",
            "cl": "palta",
            "outros": "palta 🇵🇪🇺🇾; aguacate 🇻🇪🇨🇺"
        },
        {
            "concept": "Amendoim",
            "es": "cacahuete",
            "mx": "cacahuate",
            "ar": "maní",
            "co": "maní",
            "chile": "maní",
            "cl": "maní",
            "outros": "maní"
        },
        {
            "concept": "Ervilha",
            "es": "guisante",
            "mx": "chícharo",
            "ar": "arveja",
            "co": "arveja",
            "chile": "arveja",
            "cl": "arveja",
            "outros": "petit pois / arveja"
        },
        {
            "concept": "Milho",
            "es": "maíz",
            "mx": "maíz / elote",
            "ar": "maíz / choclo",
            "co": "maíz / mazorca",
            "chile": "maíz / choclo",
            "cl": "maíz / choclo",
            "outros": "jojoto 🇻🇪; choclo 🇵🇪🇪🇨"
        },
        {
            "concept": "Banana",
            "es": "plátano / banana",
            "mx": "plátano",
            "ar": "banana",
            "co": "banano / plátano",
            "chile": "plátano",
            "cl": "plátano",
            "outros": "cambur 🇻🇪; guineo 🇵🇷🇩🇴"
        },
        {
            "concept": "Pêssego",
            "es": "melocotón",
            "mx": "durazno",
            "ar": "durazno",
            "co": "durazno",
            "chile": "durazno",
            "cl": "durazno",
            "outros": "durazno"
        },
        {
            "concept": "Pipoca",
            "es": "palomitas",
            "mx": "palomitas",
            "ar": "pochoclo",
            "co": "crispetas",
            "chile": "cabritas",
            "cl": "cabritas",
            "outros": "cotufas 🇻🇪; rositas de maíz 🇨🇺"
        },
        {
            "concept": "Canudo",
            "es": "pajita",
            "mx": "popote",
            "ar": "sorbete",
            "co": "pitillo",
            "chile": "bombilla",
            "cl": "bombilla",
            "outros": "pajilla 🇬topology; carrizo"
        },
        {
            "concept": "Camiseta",
            "es": "camiseta",
            "mx": "playera",
            "ar": "remera",
            "co": "camiseta",
            "chile": "polera",
            "cl": "polera",
            "outros": "franela 🇻🇪; pulóver 🇨🇺"
        },
        {
            "concept": "Calça jeans",
            "es": "vaqueros",
            "mx": "jeans / mezclilla",
            "ar": "jeans",
            "co": "jeans",
            "chile": "jeans",
            "cl": "jeans",
            "outros": "mahones 🇵🇷"
        },
        {
            "concept": "Tênis esportivo",
            "es": "zapatillas / deportivas",
            "mx": "tenis",
            "ar": "zapatillas",
            "co": "tenis",
            "chile": "zapatillas",
            "cl": "zapatillas",
            "outros": "tenis 🇨🇺🇵🇷🇻🇪"
        },
        {
            "concept": "Óculos",
            "es": "gafas",
            "mx": "lentes",
            "ar": "anteojos / lentes",
            "co": "gafas / lentes",
            "chile": "lentes",
            "cl": "lentes",
            "outros": "espejuelos 🇨🇺"
        },
        {
            "concept": "Apartamento",
            "es": "piso / apartamento",
            "mx": "departamento",
            "ar": "departamento",
            "co": "apartamento",
            "chile": "departamento",
            "cl": "departamento",
            "outros": "departamento 🇵🇪; apartamento 🇻🇪"
        },
        {
            "concept": "Geladeira",
            "es": "nevera / frigorífico",
            "mx": "refrigerador / refri",
            "ar": "heladera",
            "co": "nevera",
            "chile": "refrigerador",
            "cl": "refrigerador",
            "outros": "nevera 🇻🇪; refrigerador 🇨🇺"
        },
        {
            "concept": "Piscina",
            "es": "piscina",
            "mx": "alberca",
            "ar": "pileta",
            "co": "piscina",
            "chile": "piscina",
            "cl": "piscina",
            "outros": "piscina"
        },
        {
            "concept": "Caneta",
            "es": "bolígrafo / boli",
            "mx": "pluma",
            "ar": "birome",
            "co": "esfero / bolígrafo",
            "chile": "lápiz pasta",
            "cl": "lápiz pasta",
            "outros": "lapicero 🇵🇪🇨🇷; bolígrafo 🇨🇺"
        },
        {
            "concept": "Gasolina",
            "es": "gasolina",
            "mx": "gasolina",
            "ar": "nafta",
            "co": "gasolina",
            "chile": "bencina",
            "cl": "bencina",
            "outros": "nafta 🇺🇾; gasolina 🇻🇪"
        },
        {
            "concept": "Carteira de motorista",
            "es": "carné de conducir",
            "mx": "licencia de conducir",
            "ar": "registro / licencia",
            "co": "licencia de conducción",
            "chile": "licencia de conducir",
            "cl": "licencia de conducir",
            "outros": "licencia de conducir"
        },
        {
            "concept": "Garçom",
            "es": "camarero",
            "mx": "mesero",
            "ar": "mozo",
            "co": "mesero",
            "chile": "garzón",
            "cl": "garzón",
            "outros": "mesero / camarero"
        },
        {
            "concept": "Banheiro",
            "es": "baño / aseo",
            "mx": "baño",
            "ar": "baño",
            "co": "baño",
            "chile": "baño",
            "cl": "baño",
            "outros": "servicio / sanitario"
        },
        {
            "concept": "Sanduíche",
            "es": "bocadillo / sándwich",
            "mx": "sándwich / torta",
            "ar": "sándwich / sánguche",
            "co": "sándwich",
            "chile": "sándwich / sánguche",
            "cl": "sándwich / sánguche",
            "outros": "sánguche 🇵🇪; bocadito 🇨🇺"
        },
        {
            "concept": "Bolo",
            "es": "tarta / pastel",
            "mx": "pastel",
            "ar": "torta",
            "co": "torta / ponqué",
            "chile": "torta",
            "cl": "torta",
            "outros": "bizcocho 🇵🇷; queque 🇵🇪🇨🇷"
        },
        {
            "concept": "Mercadinho",
            "es": "tienda de alimentación",
            "mx": "tienda / abarrotes",
            "ar": "almacén",
            "co": "tienda",
            "chile": "almacén",
            "cl": "almacén",
            "outros": "colmado 🇩🇴; pulpería 🇨🇷🇳🇮"
        },
        {
            "concept": "Parada de ônibus",
            "es": "parada",
            "mx": "parada",
            "ar": "parada",
            "co": "paradero",
            "chile": "paradero",
            "cl": "paradero",
            "outros": "parada"
        },
        {
            "concept": "Congestionamento",
            "es": "atasco",
            "mx": "tráfico / embotellamiento",
            "ar": "embotellamiento",
            "co": "trancón",
            "chile": "taco",
            "cl": "taco",
            "outros": "presa 🇨🇷; cola 🇻🇪"
        },
        {
            "concept": "Trabalho",
            "es": "trabajo / curro",
            "mx": "trabajo / chamba",
            "ar": "trabajo / laburo",
            "co": "trabajo / camello",
            "chile": "trabajo / pega",
            "cl": "trabajo / pega",
            "outros": "brete 🇨🇷🇳🇮; pincha 🇨🇺"
        },
        {
            "concept": "Trabalhar",
            "es": "trabajar / currar",
            "mx": "trabajar / chambear",
            "ar": "trabajar / laburar",
            "co": "trabajar / camellar",
            "chile": "trabajar / pegarse una pega",
            "cl": "trabajar / pegarse una pega",
            "outros": "bretear 🇨🇷; pinchar 🇨🇺"
        },
        {
            "concept": "Dinheiro",
            "es": "dinero / pasta",
            "mx": "dinero / lana / feria",
            "ar": "plata / guita",
            "co": "plata / lucas",
            "chile": "plata / lucas",
            "cl": "plata / lucas",
            "outros": "reales 🇻🇪; pisto 🇬t"
        },
        {
            "concept": "Amigo",
            "es": "amigo / colega",
            "mx": "amigo / cuate / compa",
            "ar": "amigo",
            "co": "parcero / parce",
            "chile": "amigo / compadre",
            "cl": "amigo / compadre",
            "outros": "pana 🇻🇪🇵🇷🇩🇴; mae 🇨🇷; chero 🇸🇻"
        },
        {
            "concept": "Garoto / jovem",
            "es": "chico / chaval",
            "mx": "chavo / morro / chamaco",
            "ar": "pibe",
            "co": "pelado / pelao",
            "chile": "cabro",
            "cl": "cabro",
            "outros": "chamo 🇻🇪; cipote 🇸🇻; chavalo 🇳🇮"
        },
        {
            "concept": "Garota / jovem",
            "es": "chica / chavala",
            "mx": "chava / morra",
            "ar": "piba",
            "co": "pelada",
            "chile": "cabra",
            "cl": "cabra",
            "outros": "chama 🇻🇪; cipota 🇸🇻; chavala 🇳🇮"
        },
        {
            "concept": "Criança",
            "es": "niño",
            "mx": "niño / chamaco",
            "ar": "nene / chico",
            "co": "niño / pelado",
            "chile": "niño / cabro chico",
            "cl": "niño / cabro chico",
            "outros": "cipote 🇸🇻; güila 🇨🇷; chamaquito 🇨🇺"
        },
        {
            "concept": "Cara / sujeito",
            "es": "tío",
            "mx": "güey / wey",
            "ar": "tipo / boludo",
            "co": "man / parce",
            "chile": "weón",
            "cl": "weón",
            "outros": "mae 🇨🇷; maje 🇳🇮; asere 🇨🇺"
        },
        {
            "concept": "Legal / bacana",
            "es": "guay / mola",
            "mx": "chido / padre",
            "ar": "copado",
            "co": "chévere / bacano",
            "chile": "bacán",
            "cl": "bacán",
            "outros": "tuanis 🇨🇷; chévere 🇻🇪🇵🇷"
        },
        {
            "concept": "Muito bom",
            "es": "genial / de puta madre",
            "mx": "chingón / padrísimo",
            "ar": "buenísimo / copado",
            "co": "una chimba / bacano",
            "chile": "la raja / bacán",
            "cl": "la raja / bacán",
            "outros": "brutal 🇵🇷; tuani 🇳🇮"
        },
        {
            "concept": "Festa",
            "es": "fiesta",
            "mx": "fiesta / peda",
            "ar": "fiesta / joda",
            "co": "fiesta / rumba",
            "chile": "carrete",
            "cl": "carrete",
            "outros": "bonche 🇩🇴; jangueo 🇵🇷"
        },
        {
            "concept": "Sair para festejar",
            "es": "salir de fiesta",
            "mx": "salir de fiesta / ir de peda",
            "ar": "salir de joda",
            "co": "rumbear",
            "chile": "carretear",
            "cl": "carretear",
            "outros": "janguear 🇵🇷"
        },
        {
            "concept": "Cerveja",
            "es": "cerveza / caña",
            "mx": "cerveza / chela",
            "ar": "cerveza / birra",
            "co": "cerveza / pola",
            "chile": "cerveza / chela",
            "cl": "cerveza / chela",
            "outros": "fría 🇵🇷"
        },
        {
            "concept": "Ressaca",
            "es": "resaca",
            "mx": "cruda",
            "ar": "resaca",
            "co": "guayabo",
            "chile": "caña",
            "cl": "caña",
            "outros": "goma 🇳🇮🇬t; ratón 🇻🇪"
        },
        {
            "concept": "Bêbado",
            "es": "borracho",
            "mx": "borracho / pedo",
            "ar": "borracho / en pedo",
            "co": "borracho / prendido",
            "chile": "curado",
            "cl": "curado",
            "outros": "bolo 🇭n; jumao 🇨🇺🇩🇴"
        },
        {
            "concept": "Namorado(a)",
            "es": "novio(a)",
            "mx": "novio(a)",
            "ar": "novio(a)",
            "co": "novio(a)",
            "chile": "pololo(a)",
            "cl": "pololo(a)",
            "outros": "jevo/jeva 🇨🇺; jaña 🇳🇮"
        },
        {
            "concept": "Fofoca",
            "es": "cotilleo",
            "mx": "chisme",
            "ar": "chisme",
            "co": "chisme",
            "chile": "cahuín",
            "cl": "cahuín",
            "outros": "bochinche 🇵🇷🇨🇺"
        },
        {
            "concept": "Fofo / bonitinho",
            "es": "mono",
            "mx": "lindo / bonito",
            "ar": "lindo",
            "co": "lindo / bonito",
            "chile": "lindo",
            "cl": "lindo",
            "outros": "lindo / bonito"
        },
        {
            "concept": "Muito / bastante",
            "es": "mucho",
            "mx": "mucho / un chingo",
            "ar": "mucho / una banda",
            "co": "mucho / resto",
            "chile": "mucho / caleta",
            "cl": "mucho / caleta",
            "outros": "burda 🇻🇪; buco 🇵🇦"
        },
        {
            "concept": "Pouquinho",
            "es": "un poco / poquito",
            "mx": "poquito",
            "ar": "poquito",
            "co": "un poquito",
            "chile": "un poco",
            "cl": "un poco",
            "outros": "un chin 🇩🇴"
        },
        {
            "concept": "Coisa",
            "es": "cosa",
            "mx": "cosa / madre",
            "ar": "cosa / coso",
            "co": "cosa / vaina",
            "chile": "cuestión / cosa",
            "cl": "cuestión / cosa",
            "outros": "vaina 🇻🇪🇩🇴; chunche 🇨🇷"
        },
        {
            "concept": "Confusão",
            "es": "lío / follón",
            "mx": "bronca / desmadre",
            "ar": "quilombo",
            "co": "lío / mierdero",
            "chile": "atao / cagazo",
            "cl": "atao / cagazo",
            "outros": "revolú 🇵🇷; bochinche 🇨🇺"
        },
        {
            "concept": "Ok / certo",
            "es": "vale",
            "mx": "sale / órale",
            "ar": "dale",
            "co": "listo / de una",
            "chile": "ya / dale",
            "cl": "ya / dale",
            "outros": "cabal 🇬t"
        },
        {
            "concept": "Vamos!",
            "es": "venga / vamos",
            "mx": "órale / ándale / vámonos",
            "ar": "dale / vamos",
            "co": "vamos / hágale",
            "chile": "vamos / ya po",
            "cl": "vamos / ya po",
            "outros": "dale / vamos"
        },
        {
            "concept": "Sério?",
            "es": "¿en serio?",
            "mx": "¿neta?",
            "ar": "¿en serio? / ¿posta?",
            "co": "¿en serio?",
            "chile": "¿en serio?",
            "cl": "¿en serio?",
            "outros": "¿al chile? 🇲🇽"
        },
        {
            "concept": "Verdade",
            "es": "verdad",
            "mx": "verdad / neta",
            "ar": "verdad / posta",
            "co": "verdad",
            "chile": "verdad",
            "cl": "verdad",
            "outros": "verdad"
        },
        {
            "concept": "Agora mesmo",
            "es": "ahora mismo",
            "mx": "ahorita",
            "ar": "ahora / ya",
            "co": "ahora / ahorita",
            "chile": "al tiro",
            "cl": "al tiro",
            "outros": "ahorita"
        },
        {
            "concept": "Imediatamente",
            "es": "ya / agora mesmo",
            "mx": "ahorita / ya",
            "ar": "ya",
            "co": "ya",
            "chile": "al tiro",
            "cl": "al tiro",
            "outros": "de una"
        },
        {
            "concept": "Rapidamente",
            "es": "rápido / deprisa",
            "mx": "rápido",
            "ar": "rápido",
            "co": "rápido",
            "chile": "al tiro / rápido",
            "cl": "al tiro / rápido",
            "outros": "de una"
        },
        {
            "concept": "Entender",
            "es": "entender / pillar",
            "mx": "entender / agarrar la onda",
            "ar": "entender / cazar",
            "co": "entender / cogerle la idea",
            "chile": "cachar",
            "cl": "cachar",
            "outros": "cachar 🇵🇪"
        },
        {
            "concept": "Pegar / apanhar objeto",
            "es": "coger / pillar",
            "mx": "agarrar / tomar",
            "ar": "agarrar / tomar",
            "co": "coger / agarrar",
            "chile": "tomar / agarrar",
            "cl": "tomar / agarrar",
            "outros": "coger 🇨🇺🇵🇷; agarrar"
        },
        {
            "concept": "Dirigir carro",
            "es": "conducir",
            "mx": "manejar",
            "ar": "manejar",
            "co": "manejar / conducir",
            "chile": "manejar",
            "cl": "manejar",
            "outros": "manejar"
        },
        {
            "concept": "Estacionar",
            "es": "aparcar",
            "mx": "estacionarse",
            "ar": "estacionar",
            "co": "parquear / estacionar",
            "chile": "estacionar",
            "cl": "estacionar",
            "outros": "parquear 🇵🇦🇵🇷"
        },
        {
            "concept": "Estacionamento",
            "es": "aparcamiento",
            "mx": "estacionamiento",
            "ar": "estacionamiento",
            "co": "parqueadero",
            "chile": "estacionamiento",
            "cl": "estacionamiento",
            "outros": "parking 🇵🇷"
        },
        {
            "concept": "Ingressos / entradas",
            "es": "entradas",
            "mx": "boletos",
            "ar": "entradas",
            "co": "boletas / entradas",
            "chile": "entradas",
            "cl": "entradas",
            "outros": "boletos"
        },
        {
            "concept": "Passagem de transporte",
            "es": "billete",
            "mx": "boleto",
            "ar": "boleto / pasaje",
            "co": "pasaje",
            "chile": "pasaje",
            "cl": "pasaje",
            "outros": "pasaje"
        },
        {
            "concept": "Troco",
            "es": "cambio",
            "mx": "cambio / feria",
            "ar": "vuelto",
            "co": "vueltas / cambio",
            "chile": "vuelto",
            "cl": "vuelto",
            "outros": "vuelto / cambio"
        },
        {
            "concept": "Sorvete",
            "es": "helado",
            "mx": "helado",
            "ar": "helado",
            "co": "helado",
            "chile": "helado",
            "cl": "helado",
            "outros": "mantecado 🇨🇺"
        },
        {
            "concept": "Doce / bala",
            "es": "caramelo",
            "mx": "dulce",
            "ar": "golosina / caramelo",
            "co": "dulce",
            "chile": "dulce",
            "cl": "dulce",
            "outros": "caramelo"
        },
        {
            "concept": "Chiclete",
            "es": "chicle",
            "mx": "chicle",
            "ar": "chicle",
            "co": "chicle",
            "chile": "chicle",
            "cl": "chicle",
            "outros": "goma de mascar"
        },
        {
            "concept": "Porco",
            "es": "cerdo",
            "mx": "cerdo / puerco",
            "ar": "cerdo / chancho",
            "co": "cerdo / marrano",
            "chile": "chancho",
            "cl": "chancho",
            "outros": "cochino 🇻🇪; chancho 🇵🇪"
        },
        {
            "concept": "Peru (ave)",
            "es": "pavo",
            "mx": "guajolote / pavo",
            "ar": "pavo",
            "co": "pavo",
            "chile": "pavo",
            "cl": "pavo",
            "outros": "chompipe 🇬t"
        },
        {
            "concept": "Cachorro",
            "es": "perro",
            "mx": "perro",
            "ar": "perro",
            "co": "perro",
            "chile": "perro",
            "cl": "perro",
            "outros": "chucho 🇬t"
        },
        {
            "concept": "Mala / bolsa",
            "es": "bolsa",
            "mx": "bolsa",
            "ar": "bolsa",
            "co": "bolsa",
            "chile": "bolsa",
            "cl": "bolsa",
            "outros": "jaba 🇨🇺"
        },
        {
            "concept": "Sacola plástica",
            "es": "bolsa",
            "mx": "bolsa",
            "ar": "bolsa",
            "co": "bolsa",
            "chile": "bolsa",
            "cl": "bolsa",
            "outros": "jaba 🇨🇺"
        },
        {
            "concept": "Balada / boate",
            "es": "discoteca / garito",
            "mx": "antro",
            "ar": "boliche",
            "co": "discoteca",
            "chile": "disco",
            "cl": "disco",
            "outros": "discoteca"
        },
        {
            "concept": "Rolê / encontro social",
            "es": "quedar / salir",
            "mx": "salir",
            "ar": "juntada",
            "co": "parche",
            "chile": "junta / carrete",
            "cl": "junta / carrete",
            "outros": "jangueo 🇵🇷; parking 🇵🇦"
        },
        {
            "concept": "Grupo de amigos",
            "es": "grupo / pandilla",
            "mx": "banda / bola",
            "ar": "banda",
            "co": "parche",
            "chile": "grupo",
            "cl": "grupo",
            "outros": "corillo 🇵🇷"
        },
        {
            "concept": "Estrangeiro / americano",
            "es": "extranjero",
            "mx": "gringo",
            "ar": "yanqui / gringo",
            "co": "gringo",
            "chile": "gringo",
            "cl": "gringo",
            "outros": "yuma 🇨🇺"
        },
        {
            "concept": "Estados Unidos",
            "es": "Estados Unidos",
            "mx": "Estados Unidos",
            "ar": "Estados Unidos",
            "co": "Estados Unidos",
            "chile": "Estados Unidos",
            "cl": "Estados Unidos",
            "outros": "EE.UU."
        },
        {
            "concept": "Loja",
            "es": "tienda",
            "mx": "tienda",
            "ar": "negocio / local",
            "co": "tienda",
            "chile": "tienda / local",
            "cl": "tienda / local",
            "outros": "tienda"
        },
        {
            "concept": "Farmácia",
            "es": "farmacia",
            "mx": "farmacia",
            "ar": "farmacia",
            "co": "droguería / farmacia",
            "chile": "farmacia",
            "cl": "farmacia",
            "outros": "farmacia"
        },
        {
            "concept": "Padaria",
            "es": "panadería",
            "mx": "panadería",
            "ar": "panadería",
            "co": "panadería",
            "chile": "panadería",
            "cl": "panadería",
            "outros": "panadería"
        },
        {
            "concept": "Posto de gasolina",
            "es": "gasolinera",
            "mx": "gasolinera",
            "ar": "estación de servicio",
            "co": "estación de servicio",
            "chile": "bencinera",
            "cl": "bencinera",
            "outros": "bomba 🇻🇪"
        },
        {
            "concept": "Elevador",
            "es": "ascensor",
            "mx": "elevador",
            "ar": "ascensor",
            "co": "ascensor",
            "chile": "ascensor",
            "cl": "ascensor",
            "outros": "elevador"
        },
        {
            "concept": "Calçada",
            "es": "acera",
            "mx": "banqueta",
            "ar": "vereda",
            "co": "andén",
            "chile": "vereda",
            "cl": "vereda",
            "outros": "acera 🇨🇺; vereda 🇵🇪"
        },
        {
            "concept": "Torneira",
            "es": "grifo",
            "mx": "llave",
            "ar": "canilla",
            "co": "llave",
            "chile": "llave",
            "cl": "llave",
            "outros": "caño 🇵🇪"
        },
        {
            "concept": "Quarto",
            "es": "habitación / dormitorio",
            "mx": "cuarto / recámara",
            "ar": "pieza / habitación",
            "co": "cuarto / habitación",
            "chile": "pieza / dormitorio",
            "cl": "pieza / dormitorio",
            "outros": "cuarto"
        },
        {
            "concept": "Sala de estar",
            "es": "salón",
            "mx": "sala",
            "ar": "living",
            "co": "sala",
            "chile": "living",
            "cl": "living",
            "outros": "sala"
        },
        {
            "concept": "Armário de roupas",
            "es": "armario",
            "mx": "clóset",
            "ar": "placard",
            "co": "clóset",
            "chile": "clóset",
            "cl": "clóset",
            "outros": "ropero"
        },
        {
            "concept": "Cobertor",
            "es": "manta",
            "mx": "cobija",
            "ar": "frazada",
            "co": "cobija",
            "chile": "frazada",
            "cl": "frazada",
            "outros": "cobija 🇪🇨"
        },
        {
            "concept": "Tomada elétrica",
            "es": "enchufe",
            "mx": "contacto",
            "ar": "enchufe / tomacorriente",
            "co": "tomacorriente",
            "chile": "enchufe",
            "cl": "enchufe",
            "outros": "tomacorriente"
        }
    ],
    "acentuacao": [
        {
            "id": "ac_1",
            "title": "1. Tú (Você) vs Tu (Seu / Sua)",
            "summary": "Tilde diacrítica usada para diferenciar o pronome pessoal reto do pronome possessivo.",
            "rule": "Tú (com acento) = pronome \"você / tu\". Tu (sem acento) = possessivo \"seu / sua\".",
            "examples": [
                {
                    "es": "¡Tú eres mi amigo!",
                    "pt": "Você é meu amigo!",
                    "audio": "¡Tú eres mi amigo!"
                },
                {
                    "es": "Tu gato es muy lindo.",
                    "pt": "Seu gato é muito bonito.",
                    "audio": "Tu gato es muy lindo."
                }
            ]
        },
        {
            "id": "ac_2",
            "title": "2. Él (Ele) vs El (O Artigo Definido)",
            "summary": "Diferença entre o pronome pessoal reto e o artigo masculino singular.",
            "rule": "Él (com acento) = \"ele\". El (sem acento) = artigo \"o\".",
            "examples": [
                {
                    "es": "Él tiene el libro de español.",
                    "pt": "Ele tem o livro de espanhol.",
                    "audio": "Él tiene el libro de español."
                },
                {
                    "es": "El coche de él es rojo.",
                    "pt": "O carro dele é vermelho.",
                    "audio": "El coche de él es rojo."
                }
            ]
        },
        {
            "id": "ac_3",
            "title": "3. Sí (Sim / A si mesmo) vs Si (Se Condicional)",
            "summary": "Diferenciação do advérbio afirmativo/pronome reflexivo da conjunção de condição.",
            "rule": "Sí (com acento) = \"sim\" ou \"a si mesmo\". Si (sem acento) = conjunção \"se\".",
            "examples": [
                {
                    "es": "Dijo que sí a la propuesta.",
                    "pt": "Disse que sim à proposta.",
                    "audio": "Dijo que sí a la propuesta."
                },
                {
                    "es": "Si vienes temprano, vamos al cine.",
                    "pt": "Se você vier cedo, vamos ao cinema.",
                    "audio": "Si vienes temprano, vamos al cine."
                }
            ]
        },
        {
            "id": "ac_4",
            "title": "4. Té (Chá) vs Te (Pronome Oblíquo)",
            "summary": "Distinção entre o substantivo referente à bebida e o pronome pessoal.",
            "rule": "Té (com acento) = a bebida \"chá\". Te (sem acento) = o pronome \"te / você\".",
            "examples": [
                {
                    "es": "Quiero tomar un té caliente.",
                    "pt": "Quero tomar um chá quente.",
                    "audio": "Quiero tomar un té caliente."
                },
                {
                    "es": "Te quiero mucho, mi amigo.",
                    "pt": "Te quero muito, meu amigo.",
                    "audio": "Te quiero mucho, mi amigo."
                }
            ]
        },
        {
            "id": "ac_5",
            "title": "5. Mí (Mim) vs Mi (Meu / Minha)",
            "summary": "Diferença entre o pronome oblíquo tônico com preposição e o possessivo.",
            "rule": "Mí (com acento) = pronome \"mim\". Mi (sem acento) = possessivo \"meu/minha\" ou a nota Mi.",
            "examples": [
                {
                    "es": "Este regalo es para mí.",
                    "pt": "Este presente é para mim.",
                    "audio": "Este regalo es para mí."
                },
                {
                    "es": "Mi casa está muy cerca de aquí.",
                    "pt": "Minha casa está muito perto daqui.",
                    "audio": "Mi casa está muy cerca de aquí."
                }
            ]
        },
        {
            "id": "ac_6",
            "title": "6. Sé (Verbo: Sei / Sê) vs Se (Pronome Reflexivo)",
            "summary": "Distinção da forma verbal dos verbos saber/ser do pronome oblíquo.",
            "rule": "Sé (com acento) = 1ª p. \"eu sei\" (saber) ou imperativo \"sê\" (ser). Se (sem acento) = pronome \"se\".",
            "examples": [
                {
                    "es": "Yo sé hablar español fluido.",
                    "pt": "Eu sei falar espanhol fluente.",
                    "audio": "Yo sé hablar español fluido."
                },
                {
                    "es": "Se cayó y se levantó rápido.",
                    "pt": "Caiu e se levantou rápido.",
                    "audio": "Se cayó y se levantó rápido."
                }
            ]
        },
        {
            "id": "ac_7",
            "title": "7. Dé (Verbo: Dê) vs De (Preposição)",
            "summary": "Diferença entre a forma conjugada do verbo dar e a preposição de posse/origem.",
            "rule": "Dé (com acento) = verbo \"dê\" (dar). De (sem acento) = preposição \"de\".",
            "examples": [
                {
                    "es": "Espero que me dé tiempo de llegar.",
                    "pt": "Espero que me dê tempo de chegar.",
                    "audio": "Espero que me dé tiempo de llegar."
                },
                {
                    "es": "Vengo de Brasil con mucho orgullo.",
                    "pt": "Venho do Brasil com muito orgulho.",
                    "audio": "Vengo de Brasil con mucho orgullo."
                }
            ]
        },
        {
            "id": "ac_8",
            "title": "8. Más (Quantidade: Mais) vs Mas (Conjunção: Porém/Mas)",
            "summary": "Diferença entre o advérbio de intensidade e a conjunção adversativa formal.",
            "rule": "Más (com acento) = \"mais\" (quantidade). Mas (sem acento) = conjunção \"porém / mas\".",
            "examples": [
                {
                    "es": "Quiero más agua, por favor.",
                    "pt": "Quero mais água, por favor.",
                    "audio": "Quiero más agua, por favor."
                },
                {
                    "es": "Estudió mucho, mas no aprobó el examen.",
                    "pt": "Estudou muito, mas não passou na prova.",
                    "audio": "Estudió mucho, mas no aprobó el examen."
                }
            ]
        },
        {
            "id": "ac_9",
            "title": "9. Acento em Interrogativos e Exclamativos (Directos e Indirectos)",
            "summary": "Regra de acentuação obrigatória em termos interrogativos e dúvida (Qué, Cómo, Dónde, Cuándo, Por qué, Quién, Cuánto).",
            "rule": "Levam acento quando indicam pergunta direta/indireta ou exlamação. Distinga também: Por qué (pergunta) / Porque (resposta) / Porqué (o porquê) / Por que (pelo qual).",
            "examples": [
                {
                    "es": "¿Por qué no me dijiste dónde estabas?",
                    "pt": "Por que não me disse onde estava?",
                    "audio": "¿Por qué no me dijiste dónde estabas?"
                },
                {
                    "es": "No sé qué quieres ni cuándo vendrás.",
                    "pt": "Não sei o que você quer nem quando virá.",
                    "audio": "No sé qué quieres ni cuándo vendrás."
                },
                {
                    "es": "No entiendo el porqué de su decisión.",
                    "pt": "Não entendo o porquê de sua decisão.",
                    "audio": "No entiendo el porqué de su decisión."
                }
            ]
        },
        {
            "id": "ac_10",
            "title": "10. Aún (Ainda = Todavía) vs Aun (Até / Inclusive = Incluso)",
            "summary": "Acentuação diacrítica para diferenciar tempo contínuo de inclusão extrema.",
            "rule": "Aún (com acento) = \"ainda\" (todavía). Aun (sem acento) = \"até / inclusive\" (incluso / hasta).",
            "examples": [
                {
                    "es": "Aún no ha llegado el tren a la estación.",
                    "pt": "Ainda não chegou o trem à estação.",
                    "audio": "Aún no ha llegado el tren a la estación."
                },
                {
                    "es": "Aun los niños saben resolver este problema.",
                    "pt": "Até as crianças sabem resolver este problema.",
                    "audio": "Aun los niños saben resolver este problema."
                }
            ]
        },
        {
            "id": "ac_11",
            "title": "11. Sólo (Somente = Solamente) vs Solo (Sozinho)",
            "summary": "Regra histórica e desambiguação recomendada em casos de dubiedade de sentido.",
            "rule": "Sólo (com acento) = \"apenas / somente\". Solo (sem acento) = \"sozinho / sem companhia\".",
            "examples": [
                {
                    "es": "Él estudia sólo en su habitación.",
                    "pt": "Ele estuda somente em seu quarto.",
                    "audio": "Él estudia sólo en su habitación."
                },
                {
                    "es": "Él vive solo en esta ciudad.",
                    "pt": "Ele mora sozinho nesta cidade.",
                    "audio": "Él vive solo en esta ciudad."
                }
            ]
        },
        {
            "id": "ac_12",
            "title": "12. Demonstrativos (Éste, Ése, Aquél) & Desambiguação",
            "summary": "Uso facultativo de acento nos pronomes demonstrativos para evitar ambiguidade com adjetivos.",
            "rule": "Quando funcionam como pronome e há risco de ambiguidade com o determinante, usa-se acento (Éste, Ése, Aquél).",
            "examples": [
                {
                    "es": "¿Por qué compraste éste y no aquél?",
                    "pt": "Por que comprou este e não aquele?",
                    "audio": "¿Por qué compraste éste y no aquél?"
                },
                {
                    "es": "Este libro es genial para aprender.",
                    "pt": "Este livro é ótimo para aprender.",
                    "audio": "Este libro es genial para aprender."
                }
            ]
        },
        {
            "id": "ac_13",
            "title": "13. Classificação Silábica Oficial (Agudas, Llanas, Esdrújulas)",
            "summary": "As 4 regras gerais de acentuação gráfica da língua espanhola.",
            "rule": "Agudas (oxítonas): acentuam em N, S ou Vogal. Llanas (paroxítonas): acentuam se NÃO terminam em N, S ou Vogal. Esdrújulas e Sobreesdrújulas: acentuam-se TODAS.",
            "examples": [
                {
                    "es": "Café / Canción / Compás (Agudas en N,S,Vogal)",
                    "pt": "Oxítonas acentuadas",
                    "audio": "Café, canción, compás"
                },
                {
                    "es": "Árbol / Lápiz / Fácil (Llanas sin N,S,Vogal)",
                    "pt": "Paroxítonas acentuadas",
                    "audio": "Árbol, lápiz, fácil"
                },
                {
                    "es": "Música / Pájaros / Miércoles (Esdrújulas)",
                    "pt": "Proparoxítonas (todas)",
                    "audio": "Música, pájaros, miércoles"
                },
                {
                    "es": "Dígaselo / Cómpramelo (Sobreesdrújulas)",
                    "pt": "Com pronomes (todas)",
                    "audio": "Dígaselo, cómpramelo"
                }
            ]
        },
        {
            "id": "ac_14",
            "title": "14. Ruptura de Ditongo (Hiato com Tilde Obrigatória)",
            "summary": "Quando a vogal fraca tônica quebra o ditongo ao lado de vogal forte.",
            "rule": "Se as vogais fracas I ou U são tônicas ao lado de A, E ou O, ganham acento OBRIGATÓRIO (María, Día, Baúl).",
            "examples": [
                {
                    "es": "María / Día / Raíz / Baúl / Frío",
                    "pt": "Exemplos de Hiatos com acento obrigatório",
                    "audio": "María, día, raíz, baúl, frío"
                }
            ]
        },
        {
            "id": "ac_15",
            "title": "15. Acentuação de Advérbios em -mente",
            "summary": "Regra especial de conservação de acento em advérbios de modo.",
            "rule": "O advérbio terminado em -mente mantém exatamente o acento do adjetivo original (Fácil ➔ Fácilmente | Lenta ➔ Lentamente).",
            "examples": [
                {
                    "es": "Fácil ➔ Fácilmente / Rápida ➔ Rápidamente",
                    "pt": "Adjetivos com acento mantêm a tilde",
                    "audio": "Fácilmente, rápidamente"
                },
                {
                    "es": "Lenta ➔ Lentamente / Feliz ➔ Felizmente",
                    "pt": "Adjetivos sem acento continuam sem tilde",
                    "audio": "Lentamente, felizmente"
                }
            ]
        }
    ],
    "sotaques": [
        {
            "id": "sot_1",
            "region": "🇦🇷 🇺🇾 Argentina & Uruguai",
            "title": "16. Acento Rioplatense (Rio da Prata)",
            "summary": "Famoso pelo Voseo (\"vos tenés\"), cadência melódica italiana e Yeísmo Reashado (/ʃ/ \"ch/sh\").",
            "rule": "O LL e o Y são pronunciados como CH/SH (ex: \"calle\" ➔ \"cá-che\"). Usa-se \"vos\" no lugar de \"tú\" com conjugação própria.",
            "examples": [
                {
                    "es": "Vos tenés razón en lo que decís.",
                    "pt": "Você tem razão no que diz (voseo)",
                    "audio": "Vos tenés razón en lo que decís."
                },
                {
                    "es": "La lluvia cae sobre la calle de Buenos Aires.",
                    "pt": "A chuva cai na rua de Buenos Aires (som SH)",
                    "audio": "La lluvia cae sobre la calle de Buenos Aires."
                }
            ]
        },
        {
            "id": "sot_2",
            "region": "🇨🇺 🇵🇷 🇩🇴 🇨🇴 Caribe Hispânico",
            "title": "17. Acento Caribenho (Cuba, Porto Rico, Rep. Dominicana)",
            "summary": "Caracterizado pela aspiração do S final de sílaba, velocidade alta e Lambdacismo (troca de R por L).",
            "rule": "O S final soa como uma leve aspiração \"H\" (las cosas ➔ lah cosah). Em Porto Rico, o R final vira L (Puerto ➔ Puelto).",
            "examples": [
                {
                    "es": "¡Oye mi hermano, vamos a la playa!",
                    "pt": "Ouve meu irmão, vamos à praia! (lah cosah)",
                    "audio": "¡Oye mi hermano, vamos a la playa!"
                },
                {
                    "es": "Bienvenido a Puerto Rico, mi gente.",
                    "pt": "Bem-vindo a Porto Rico, minha gente (Puelto Lico)",
                    "audio": "Bienvenido a Puerto Rico, mi gente."
                }
            ]
        },
        {
            "id": "sot_3",
            "region": "🇲🇽 México",
            "title": "18. Acento Mexicano (Planalto Central)",
            "summary": "Entonação cantarolada suave, redução de vogais e uso expressivo de diminutivos.",
            "rule": "As consoantes são pronunciadas com clareza cristalina, as vogais átonas encurtam e usa-se muito \"ahorita\", \"poquito\".",
            "examples": [
                {
                    "es": "Ahorita te lo traigo listo, mi amigo.",
                    "pt": "Já te trago pronto, meu amigo.",
                    "audio": "Ahorita te lo traigo listo, mi amigo."
                },
                {
                    "es": "¿Qué onda, güey? ¿Todo bien por acá?",
                    "pt": "Qual é, cara? Tudo bem por aqui?",
                    "audio": "¿Qué onda, güey? ¿Todo bien por acá?"
                }
            ]
        },
        {
            "id": "sot_4",
            "region": "🇪🇸 Espanha (Castela)",
            "title": "19. Acento Castelhano (Espanha Central e Norte)",
            "summary": "Uso da Distinción (/θ/ em Z/C), S apical forte e conjugação de Vosotros.",
            "rule": "Z e C(e,i) soam como TH de \"think\". Usa-se Vosotros para \"vocês\" informal e S forte dente-lingual.",
            "examples": [
                {
                    "es": "Vosotros sabéis bien lo que hacéis a las diez.",
                    "pt": "Vocês sabem bem o que fazem às dez (com /θ/)",
                    "audio": "Vosotros sabéis bien lo que hacéis a las diez."
                },
                {
                    "es": "¿Quedamos a tomar una cerveza en el centro?",
                    "pt": "Marcamos de tomar uma cerveja no centro?",
                    "audio": "¿Quedamos a tomar una cerveza en el centro?"
                }
            ]
        },
        {
            "id": "sot_5",
            "region": "🇵🇪 🇧🇴 🇪🇨 🇨🇴 Região Andina",
            "title": "20. Acento Andino (Peru, Bolívia, Equador, Colômbia Interior)",
            "summary": "Pronúncia extremamente pausada, articulada, limpa e conservadora.",
            "rule": "Todas as consoantes são pronunciadas de forma nítida, sem aspiração de S nem perda de D.",
            "examples": [
                {
                    "es": "Buenas tardes a todos los presentes en la reunión.",
                    "pt": "Boa tarde a todos os presentes na reunião.",
                    "audio": "Buenas tardes a todos los presentes en la reunión."
                }
            ]
        },
        {
            "id": "sot_6",
            "region": "🇨🇱 Chile",
            "title": "21. Acento Chileno",
            "summary": "Ritmo muito acelerado, aspiração de S, queda de D intervocálico e voseo chileno.",
            "rule": "O D entre vogais desaparece (cansado ➔ cansao) e a terminação verbal do voseo muda para -ís (sabís, querís).",
            "examples": [
                {
                    "es": "¿Cachái lo que te digo, po? Estoy muy cansao.",
                    "pt": "Entende o que te digo? Estou muito cansado.",
                    "audio": "¿Cachái lo que te digo, po? Estoy muy cansao."
                }
            ]
        },
        {
            "id": "sot_7",
            "region": "🇨🇴 Colômbia (Bogotá)",
            "title": "22. Acento Colombiano (Bogotá / Cundinamarca)",
            "summary": "Reconhecido pela clareza extrema, ritmo moderado e uso constante de Usted de cortesia.",
            "rule": "Tratamento em \"Usted\" mesmo entre familiares e amigos próximos para demonstrar carinho e respeito.",
            "examples": [
                {
                    "es": "¿Cómo se encuentra usted el día de hoy, mi señor?",
                    "pt": "Como o senhor se encontra no dia de hoje?",
                    "audio": "¿Cómo se encuentra usted el día de hoy, mi señor?"
                }
            ]
        },
        {
            "id": "sot_8",
            "region": "🇻🇪 Venezuela",
            "title": "23. Acento Venezuelano",
            "summary": "Entonação calorosa, musical, aspiração leve do S e gírias caribenhas típicas.",
            "rule": "Equilíbrio entre o ritmo caribenho leve e a clareza andina. Uso comum de \"chamo\", \"pana\", \"chévere\".",
            "examples": [
                {
                    "es": "¡Eso está demasiado chévere, mi pana!",
                    "pt": "Isso está massa demais, meu amigo!",
                    "audio": "¡Eso está demasiado chévere, mi pana!"
                }
            ]
        },
        {
            "id": "sot_9",
            "region": "🇨🇷 🇬🇹 🇭🇳 🇸🇻 América Central",
            "title": "24. Acento Centro-Americano & R Costarriquenho",
            "summary": "Uso amplo do Voseo e particularidade do R assibilado arrastado na Costa Rica.",
            "rule": "Na Costa Rica, o R soa arrastado sem vibrar (estilo R inglês). Na Guatemala/Honduras usa-se voseo forte.",
            "examples": [
                {
                    "es": "¡Pura vida, mae! Todo excelente por acá.",
                    "pt": "Tudo ótimo, cara! (Costa Rica)",
                    "audio": "¡Pura vida, mae! Todo excelente por acá."
                }
            ]
        },
        {
            "id": "sot_10",
            "region": "🇬🇶 🇵🇭 África & Ásia",
            "title": "25. Espanhol na Guiné Equatorial & Filipinas",
            "summary": "As peculiaridades do espanhol na África Central e no sudeste asiático.",
            "rule": "Na Guiné Equatorial (único país africano hispanófono oficial), a prosódia é firme e clara. Nas Filipinas há o idioma crioulo Chabacano.",
            "examples": [
                {
                    "es": "Muchas gracias por su hospitalidad en Malabo.",
                    "pt": "Muito obrigado por sua hospitalidade em Malabo.",
                    "audio": "Muchas gracias por su hospitalidad en Malabo."
                }
            ]
        }
    ],
    "prosodia": [
        {
            "id": "pro_1",
            "title": "26. Muletas de Fala e Hesitação (Ganhar tempo)",
            "summary": "Expressões nativas para preencher pausas e conectar ideias sem perder o fluxo.",
            "rule": "Use para pensar na frase: \"O sea...\" (ou seja/tipo), \"Es que...\" (é que), \"A ver...\" (vejamos), \"En plan...\" (tipo assim - Espanha).",
            "examples": [
                {
                    "es": "O sea, no es que no quiera ir, es que no tengo tiempo.",
                    "pt": "Ou seja, não é que eu não queira ir, é que não tenho tempo.",
                    "audio": "O sea, no es que no quiera ir, es que no tengo tiempo."
                },
                {
                    "es": "Bueno, a ver... déjame pensarlo bien.",
                    "pt": "Bem, vejamos... deixa eu pensar direito.",
                    "audio": "Bueno, a ver... déjame pensarlo bien."
                }
            ]
        },
        {
            "id": "pro_2",
            "title": "27. Marcadores de Validação no Diálogo",
            "summary": "Termos interjectivos no meio da conversa para checar a empatia e atenção do ouvinte.",
            "rule": "¿Sabes?, ¿Vale? (Espanha), ¿Viste? (Argentina), ¿Cierto? (Colômbia), ¿Me explico? (Fui claro?).",
            "examples": [
                {
                    "es": "Tenemos que terminar esto hoy, ¿vale?",
                    "pt": "Temos que terminar isso hoje, tá bom?",
                    "audio": "Tenemos que terminar esto hoy, ¿vale?"
                },
                {
                    "es": "Es una oportunidad increíble, ¿viste?",
                    "pt": "É uma oportunidade incrível, viu?",
                    "audio": "Es una oportunidad increíble, ¿viste?"
                }
            ]
        },
        {
            "id": "pro_3",
            "title": "28. Entonação de Surpresa e Reação Prosódica",
            "summary": "Inflexões vocais características para reagir com espanto ou entusiasmo.",
            "rule": "¡No me digas! (Não me diga!), ¡Qué me dices! (O que você tá dizendo!), ¡Vaya! (Nossa!), ¡Fíjate! (Olha só!).",
            "examples": [
                {
                    "es": "¡No me digas! ¿De verdad ganó el premio?",
                    "pt": "Não me diga! Ganhou de verdade o prêmio?",
                    "audio": "¡No me digas! ¿De verdad ganó el premio?"
                },
                {
                    "es": "¡Vaya! Qué sorpresa tan agradable volver a verte.",
                    "pt": "Nossa! Que surpresa agradável te ver de novo.",
                    "audio": "¡Vaya! Qué sorpresa tan agradable volver a verte."
                }
            ]
        },
        {
            "id": "pro_4",
            "title": "29. Entonação de Cortesia e Pedidos Suaves",
            "summary": "Uso do Condicional e Subjuntivo para amenizar ordens e fazer pedidos polidos.",
            "rule": "Em vez do imperativo direto, use o condicional ou subjuntivo para soar extremamente gentil.",
            "examples": [
                {
                    "es": "¿Quisiera pedir un café con leche, por favor?",
                    "pt": "Gostaria de pedir um café com leite, por favor.",
                    "audio": "¿Quisiera pedir un café con leche, por favor?"
                },
                {
                    "es": "¿Pudieras ayudarme un momento con esta maleta?",
                    "pt": "Poderia me ajudar um momento com esta mala?",
                    "audio": "¿Pudieras ayudarme un momento con esta maleta?"
                }
            ]
        },
        {
            "id": "pro_5",
            "title": "30. Modulação de Volume e Ritmo na Comunicação",
            "summary": "Diferenças de projeção de voz e volume entre a Espanha e a América Latina.",
            "rule": "Na Espanha, fala-se com volume alto, tom direto e assertivo. Na América Latina (México/Andes), usa-se tom suave, moderado e deferente.",
            "examples": [
                {
                    "es": "¡Oye, Ven aquí ahora mismo! (Tom direto espanhol)",
                    "pt": "Projeção alta e afirmação firme.",
                    "audio": "¡Oye, Ven aquí ahora mismo!"
                },
                {
                    "es": "Disculpe la molestia, ¿sería tan amable? (Tom latino)",
                    "pt": "Projeção suave e cortês.",
                    "audio": "Disculpe la molestia, ¿sería tan amable?"
                }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.FONETICA_RECURSOS_ESPANHOL_DADOS = FONETICA_RECURSOS_ESPANHOL_DADOS;
}
