# Auditoria editorial japonesa

Relatório gerado por `npm run audit:japanese`. A auditoria identifica consistência mecânica e dívida editorial; não substitui revisão humana de japonês.

## Resultado

- Bloqueadores técnicos: 0
- Ocorrências editoriais: 158
- Exceções documentadas: 1
- Total de ocorrências: 159

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
| N5 | 1 |

## Ocorrências por regra

| Regra | Quantidade |
|---|---:|
| reading-pending-human-review | 158 |
| kanji-example-missing-target | 1 |

## Amostras prioritárias

| Severidade | Nível | Módulo | Regra | Campo | Amostra |
|---|---|---|---|---|---|
| editorial | N1 | 7 | reading-pending-human-review | kanjis[30].kunyomi | kubaru |
| editorial | N1 | 9 | reading-pending-human-review | kanjis[4].kunyomi | nokos (nokosu) |
| editorial | N1 | 10 | reading-pending-human-review | kanjis[35].kunyomi | shimo (shimo) |
| editorial | N1 | 11 | reading-pending-human-review | kanjis[24].kunyomi | maboroshi (maboroshi) |
| editorial | N1 | 13 | reading-pending-human-review | kanjis[18].kunyomi | imashimeru |
| editorial | N1 | 14 | reading-pending-human-review | kanjis[12].kunyomi | yowai (yowai) |
| editorial | N1 | 14 | reading-pending-human-review | kanjis[14].kunyomi | kon (kon) |
| editorial | N1 | 14 | reading-pending-human-review | kanjis[15].kunyomi | in (in) |
| editorial | N1 | 14 | reading-pending-human-review | kanjis[21].kunyomi | kai (kai) |
| editorial | N1 | 14 | reading-pending-human-review | kanjis[22].kunyomi | seki (seki) |
| editorial | N1 | 14 | reading-pending-human-review | kanjis[24].kunyomi | suburb |
| editorial | N1 | 14 | reading-pending-human-review | kanjis[25].kunyomi | machi (machi) |
| editorial | N1 | 14 | reading-pending-human-review | kanjis[26].kunyomi | ku (ku) |
| editorial | N1 | 14 | reading-pending-human-review | kanjis[27].kunyomi | iki (iki) |
| editorial | N1 | 14 | reading-pending-human-review | kanjis[40].kunyomi | to (to) |
| editorial | N1 | 15 | reading-pending-human-review | kanjis[4].kunyomi | man (man) |
| editorial | N1 | 15 | reading-pending-human-review | kanjis[10].kunyomi | sa (sa) |
| editorial | N1 | 15 | reading-pending-human-review | kanjis[13].kunyomi | nikui (nikui) |
| editorial | N1 | 15 | reading-pending-human-review | kanjis[14].kunyomi | haji (haji) |
| editorial | N1 | 15 | reading-pending-human-review | kanjis[18].kunyomi | kuse (kuse) |
| editorial | N1 | 15 | reading-pending-human-review | kanjis[20].kunyomi | midari (midari) |
| editorial | N1 | 15 | reading-pending-human-review | kanjis[21].kunyomi | shire (shire) |
| editorial | N1 | 15 | reading-pending-human-review | kanjis[29].kunyomi | gai (gai) |
| editorial | N1 | 15 | reading-pending-human-review | kanjis[30].kunyomi | hitori (hitori) |
| editorial | N1 | 15 | reading-pending-human-review | kanjis[38].kunyomi | son (son) |
| editorial | N1 | 15 | reading-pending-human-review | kanjis[40].kunyomi | fungu (fungu) |
| editorial | N1 | 15 | reading-pending-human-review | kanjis[41].kunyomi | gai (gai) |
| editorial | N1 | 16 | reading-pending-human-review | kanjis[0].kunyomi | husu (husu) |
| editorial | N1 | 16 | reading-pending-human-review | kanjis[1].kunyomi | tatemae (tatemae) |
| editorial | N1 | 16 | reading-pending-human-review | kanjis[3].kunyomi | kimo (kimo) |

## Limite da validação

Ocorrências editoriais são backlog mensurável e não bloqueiam o baseline legado. Somente falhas estruturais novas fazem a auditoria falhar. Conteúdo permanece sujeito à revisão humana qualificada.
