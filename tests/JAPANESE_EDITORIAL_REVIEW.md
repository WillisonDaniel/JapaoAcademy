# Auditoria editorial japonesa

Relatório gerado por `npm run audit:japanese`. A auditoria identifica consistência mecânica e dívida editorial; não substitui revisão humana de japonês.

## Resultado

- Bloqueadores técnicos: 0
- Ocorrências editoriais: 252
- Exceções documentadas: 1
- Total de ocorrências: 253

## Inventário validado

- Curso principal: 105 módulos
- Kana: 16 módulos
- Kanji: 92 módulos
- Registros Kanji: 2215
- Caracteres Kanji únicos globais: 1.267

## Ocorrências por nível

| Nível | Ocorrências |
|---|---:|
| N1 | 158 |
| N4 | 89 |
| N5 | 6 |

## Ocorrências por regra

| Regra | Quantidade |
|---|---:|
| reading-pending-human-review | 252 |
| kanji-example-missing-target | 1 |

## Amostras prioritárias

| Severidade | Nível | Módulo | Regra | Campo | Amostra |
|---|---|---|---|---|---|
| editorial | N5 | 1 | reading-pending-human-review | kanjis[0].kunyomi | kan (conceito histórico) |
| editorial | N5 | 1 | reading-pending-human-review | kanjis[2].kunyomi | oto / ne |
| editorial | N5 | 1 | reading-pending-human-review | kanjis[3].kunyomi | 부 / parte |
| editorial | N5 | 1 | reading-pending-human-review | kanjis[4].kunyomi | tadasu / masa |
| editorial | N5 | 1 | reading-pending-human-review | kanjis[5].kunyomi | onaji (mesmo) |
| editorial | N4 | 1 | reading-pending-human-review | kanjis[1].kunyomi | zoku (conceito) |
| editorial | N4 | 2 | reading-pending-human-review | kanjis[8].kunyomi | you |
| editorial | N4 | 3 | reading-pending-human-review | kanjis[0].kunyomi | ji / chi |
| editorial | N4 | 3 | reading-pending-human-review | kanjis[3].kunyomi | kai |
| editorial | N4 | 4 | reading-pending-human-review | kanjis[1].kunyomi | katamuku |
| editorial | N4 | 4 | reading-pending-human-review | kanjis[2].kunyomi | gawa |
| editorial | N4 | 5 | reading-pending-human-review | kanjis[1].kunyomi | fusa |
| editorial | N4 | 5 | reading-pending-human-review | kanjis[2].kunyomi | shitsu |
| editorial | N4 | 5 | reading-pending-human-review | kanjis[3].kunyomi | dou |
| editorial | N4 | 5 | reading-pending-human-review | kanjis[4].kunyomi | taku |
| editorial | N4 | 5 | reading-pending-human-review | kanjis[5].kunyomi | kyoku |
| editorial | N4 | 6 | reading-pending-human-review | kanjis[0].kunyomi | kou |
| editorial | N4 | 6 | reading-pending-human-review | kanjis[1].kunyomi | kan |
| editorial | N4 | 6 | reading-pending-human-review | kanjis[2].kunyomi | fumi |
| editorial | N4 | 6 | reading-pending-human-review | kanjis[3].kunyomi | ji |
| editorial | N4 | 6 | reading-pending-human-review | kanjis[4].kunyomi | kou |
| editorial | N4 | 6 | reading-pending-human-review | kanjis[9].kunyomi | kokoromiru |
| editorial | N4 | 7 | reading-pending-human-review | kanjis[5].kunyomi | korogaru |
| editorial | N4 | 8 | reading-pending-human-review | kanjis[4].kunyomi | kataru |
| editorial | N4 | 10 | reading-pending-human-review | kanjis[0].kunyomi | sha |
| editorial | N4 | 10 | reading-pending-human-review | kanjis[1].kunyomi | in |
| editorial | N4 | 10 | reading-pending-human-review | kanjis[3].kunyomi | waza |
| editorial | N4 | 10 | reading-pending-human-review | kanjis[8].kunyomi | kan |
| editorial | N4 | 10 | reading-pending-human-review | kanjis[9].kunyomi | in |
| editorial | N4 | 11 | reading-pending-human-review | kanjis[4].kunyomi | kawaru / dai |

## Limite da validação

Ocorrências editoriais são backlog mensurável e não bloqueiam o baseline legado. Somente falhas estruturais novas fazem a auditoria falhar. Conteúdo permanece sujeito à revisão humana qualificada.
