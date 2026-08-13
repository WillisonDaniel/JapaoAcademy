# Auditoria editorial japonesa

Relatório gerado por `npm run audit:japanese`. A auditoria identifica consistência mecânica e dívida editorial; não substitui revisão humana de japonês.

## Resultado

- Bloqueadores técnicos: 0
- Ocorrências editoriais: 7839
- Exceções documentadas: 1
- Total de ocorrências: 7840

## Inventário validado

- Curso principal: 105 módulos
- Kana: 16 módulos
- Kanji: 92 módulos
- Registros Kanji: 2215
- Caracteres Kanji únicos globais: 1.267

## Ocorrências por nível

| Nível | Ocorrências |
|---|---:|
| A1 | 33 |
| A2 | 118 |
| B1 | 89 |
| B2 | 72 |
| N1 | 4527 |
| N2 | 1491 |
| N3 | 1409 |
| N4 | 89 |
| N5 | 12 |

## Ocorrências por regra

| Regra | Quantidade |
|---|---:|
| kanji-example-missing-target | 3449 |
| kanji-example-no-japanese | 3382 |
| reading-latin-only | 663 |
| dialogue-no-japanese | 211 |
| audio-guide-no-japanese | 101 |
| english-intrusion | 34 |

## Amostras prioritárias

| Severidade | Nível | Módulo | Regra | Campo | Amostra |
|---|---|---|---|---|---|
| editorial | A1 | a1_mod_01 | audio-guide-no-japanese | stage1_context.audioGuide | Ohayou gozaimasu! |
| editorial | A1 | a1_mod_02 | audio-guide-no-japanese | stage1_context.audioGuide | Hajimemashite! Yoroshiku onegaishimasu. |
| editorial | A1 | a1_mod_03 | audio-guide-no-japanese | stage1_context.audioGuide | Arigatou gozaimasu! Sumimasen! |
| editorial | A1 | a1_mod_03 | dialogue-no-japanese | stage4_dialog[2].npcMessage | *(Limpando o balcão do outro lado da sala)* |
| editorial | A1 | a1_mod_04 | audio-guide-no-japanese | stage1_context.audioGuide | Otsukaresama deshita! Ja ne! |
| editorial | A1 | a1_mod_05 | audio-guide-no-japanese | stage1_context.audioGuide | Tanaka-san! Sensei, konnichiwa! |
| editorial | A1 | a1_mod_06 | audio-guide-no-japanese | stage1_context.audioGuide | Watashi wa Burajiru-jin desu. Nihon-go desu. |
| editorial | A1 | a1_mod_07 | audio-guide-no-japanese | stage1_context.audioGuide | Watashi wa gakusei desu. Kaishain desu. |
| editorial | A1 | a1_mod_08 | audio-guide-no-japanese | stage1_context.audioGuide | Anata wa gakusei desu ka? Dare desu ka? |
| editorial | A1 | a1_mod_09 | audio-guide-no-japanese | stage1_context.audioGuide | Ichi, ni, san! Ni-juu-go sai desu. |
| editorial | A1 | a1_mod_10 | audio-guide-no-japanese | stage1_context.audioGuide | Watashi mo Burajiru-jin desu! Sou desu ka! |
| editorial | A1 | a1_mod_11 | audio-guide-no-japanese | stage1_context.audioGuide | Sore wa nan desu ka? |
| editorial | A1 | a1_mod_12 | audio-guide-no-japanese | stage1_context.audioGuide | Neko ga imasu. Hon ga arimasu. |
| editorial | A1 | a1_mod_13 | audio-guide-no-japanese | stage1_context.audioGuide | Gakkou e ikimasu. |
| editorial | A1 | a1_mod_14 | audio-guide-no-japanese | stage1_context.audioGuide | Densha de ikimasu. |
| editorial | A1 | a1_mod_15 | audio-guide-no-japanese | stage1_context.audioGuide | Tanjoubi wa itsu desu ka? |
| editorial | A1 | a1_mod_16 | audio-guide-no-japanese | stage1_context.audioGuide | Ichi, ni, san, yon... |
| editorial | A1 | a1_mod_17 | audio-guide-no-japanese | stage1_context.audioGuide | Kore wa ikura desu ka? |
| editorial | A1 | a1_mod_18 | audio-guide-no-japanese | stage1_context.audioGuide | Kore o kudasai. |
| editorial | A1 | a1_mod_19 | audio-guide-no-japanese | stage1_context.audioGuide | Mizu o nomimasu. |
| editorial | A1 | a1_mod_20 | audio-guide-no-japanese | stage1_context.audioGuide | Kono ramen wa oishii desu. |
| editorial | A1 | a1_mod_21 | audio-guide-no-japanese | stage1_context.audioGuide | Ima nan-ji desu ka? |
| editorial | A1 | a1_mod_21 | dialogue-no-japanese | stage4_dialog[0].npcMessage | ... |
| editorial | A1 | a1_mod_22 | audio-guide-no-japanese | stage1_context.audioGuide | Kyou wa getsuyoubi desu. |
| editorial | A1 | a1_mod_23 | audio-guide-no-japanese | stage1_context.audioGuide | Kinou, eiga o mimashita. |
| editorial | A1 | a1_mod_24 | audio-guide-no-japanese | stage1_context.audioGuide | Gohan o tabemasu. |
| editorial | A1 | a1_mod_25 | audio-guide-no-japanese | stage1_context.audioGuide | Gakkou e ikimasu. |
| editorial | A1 | a1_mod_26 | audio-guide-no-japanese | stage1_context.audioGuide | Densha de ikimasu. |
| editorial | A1 | a1_mod_27 | audio-guide-no-japanese | stage1_context.audioGuide | Eki wa doko desu ka? |
| editorial | A1 | a1_mod_28 | audio-guide-no-japanese | stage1_context.audioGuide | Hon ga arimasu. |

## Limite da validação

Ocorrências editoriais são backlog mensurável e não bloqueiam o baseline legado. Somente falhas estruturais novas fazem a auditoria falhar. Conteúdo permanece sujeito à revisão humana qualificada.
