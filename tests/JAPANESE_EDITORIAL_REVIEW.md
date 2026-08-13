# Auditoria editorial japonesa

Relatório gerado por `npm run audit:japanese`. A auditoria identifica consistência mecânica e dívida editorial; não substitui revisão humana de japonês.

## Resultado

- Bloqueadores técnicos: 0
- Ocorrências editoriais: 6118
- Exceções documentadas: 1
- Total de ocorrências: 6119

## Inventário validado

- Curso principal: 105 módulos
- Kana: 16 módulos
- Kanji: 92 módulos
- Registros Kanji: 2215
- Caracteres Kanji únicos globais: 1.267

## Ocorrências por nível

| Nível | Ocorrências |
|---|---:|
| N1 | 4527 |
| N2 | 1491 |
| N4 | 89 |
| N5 | 12 |

## Ocorrências por regra

| Regra | Quantidade |
|---|---:|
| kanji-example-missing-target | 2730 |
| kanji-example-no-japanese | 2698 |
| reading-latin-only | 661 |
| english-intrusion | 30 |

## Amostras prioritárias

| Severidade | Nível | Módulo | Regra | Campo | Amostra |
|---|---|---|---|---|---|
| editorial | N5 | 1 | reading-latin-only | kanjis[0].kunyomi | kan (conceito histórico) |
| editorial | N5 | 1 | kanji-example-missing-target | kanjis[1].examples[0].sentence | リンゴを食べるのが好きです。(Ringo o taberu no ga suki desu) |
| editorial | N5 | 1 | kanji-example-missing-target | kanjis[1].examples[1].sentence | 映画館で映画を見ます。(Eigakan de eiga o mimasu) |
| editorial | N5 | 1 | reading-latin-only | kanjis[2].kunyomi | oto / ne |
| editorial | N5 | 1 | kanji-example-missing-target | kanjis[2].examples[0].sentence | 水曜日にテストがあります。(Suiyoubi ni tesuto ga arimasu) |
| editorial | N5 | 1 | kanji-example-missing-target | kanjis[2].examples[1].sentence | 学校で日本語を勉強します。(Gakkou de nihongo o benkyou shimasu) |
| editorial | N5 | 1 | reading-latin-only | kanjis[3].kunyomi | 부 / parte |
| editorial | N5 | 1 | kanji-example-missing-target | kanjis[3].examples[0].sentence | 人が木の下で休みます。(Hito ga ki no shita de yasumimasu) |
| editorial | N5 | 1 | kanji-example-missing-target | kanjis[3].examples[1].sentence | 美しい川の水を見ます。(Utsukushii kawa no mizu o mimasu) |
| editorial | N5 | 1 | reading-latin-only | kanjis[4].kunyomi | tadasu / masa |
| editorial | N5 | 1 | reading-latin-only | kanjis[5].kunyomi | onaji (mesmo) |
| editorial | N4 | 1 | reading-latin-only | kanjis[1].kunyomi | zoku (conceito) |
| editorial | N4 | 2 | reading-latin-only | kanjis[8].kunyomi | you |
| editorial | N4 | 3 | reading-latin-only | kanjis[0].kunyomi | ji / chi |
| editorial | N4 | 3 | reading-latin-only | kanjis[3].kunyomi | kai |
| editorial | N4 | 4 | reading-latin-only | kanjis[1].kunyomi | katamuku |
| editorial | N4 | 4 | reading-latin-only | kanjis[2].kunyomi | gawa |
| editorial | N4 | 5 | reading-latin-only | kanjis[1].kunyomi | fusa |
| editorial | N4 | 5 | reading-latin-only | kanjis[2].kunyomi | shitsu |
| editorial | N4 | 5 | reading-latin-only | kanjis[3].kunyomi | dou |
| editorial | N4 | 5 | reading-latin-only | kanjis[4].kunyomi | taku |
| editorial | N4 | 5 | reading-latin-only | kanjis[5].kunyomi | kyoku |
| editorial | N4 | 6 | reading-latin-only | kanjis[0].kunyomi | kou |
| editorial | N4 | 6 | reading-latin-only | kanjis[1].kunyomi | kan |
| editorial | N4 | 6 | reading-latin-only | kanjis[2].kunyomi | fumi |
| editorial | N4 | 6 | reading-latin-only | kanjis[3].kunyomi | ji |
| editorial | N4 | 6 | reading-latin-only | kanjis[4].kunyomi | kou |
| editorial | N4 | 6 | reading-latin-only | kanjis[9].kunyomi | kokoromiru |
| editorial | N4 | 7 | reading-latin-only | kanjis[5].kunyomi | korogaru |
| editorial | N4 | 8 | reading-latin-only | kanjis[4].kunyomi | kataru |

## Limite da validação

Ocorrências editoriais são backlog mensurável e não bloqueiam o baseline legado. Somente falhas estruturais novas fazem a auditoria falhar. Conteúdo permanece sujeito à revisão humana qualificada.
