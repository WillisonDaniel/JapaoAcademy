# Auditoria editorial japonesa

Relatório gerado por `npm run audit:japanese`. A auditoria identifica consistência mecânica e dívida editorial; não substitui revisão humana de japonês.

## Resultado

- Bloqueadores técnicos: 0
- Ocorrências editoriais: 7688
- Exceções documentadas: 1
- Total de ocorrências: 7689

## Inventário validado

- Curso principal: 105 módulos
- Kana: 16 módulos
- Kanji: 92 módulos
- Registros Kanji: 2215
- Caracteres Kanji únicos globais: 1.267

## Ocorrências por nível

| Nível | Ocorrências |
|---|---:|
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
| dialogue-no-japanese | 121 |
| audio-guide-no-japanese | 40 |
| english-intrusion | 34 |

## Amostras prioritárias

| Severidade | Nível | Módulo | Regra | Campo | Amostra |
|---|---|---|---|---|---|
| editorial | B1 | b1_mod_01 | audio-guide-no-japanese | stage1_context.audioGuide | Tadaima! Kinou nani shita? |
| editorial | B1 | b1_mod_01 | dialogue-no-japanese | stage4_dialog[0].npcMessage | [Seu Nome]-kun! Kinou nani shita? (O que você fez ontem?) |
| editorial | B1 | b1_mod_01 | dialogue-no-japanese | stage4_dialog[1].npcMessage | Kyou no hiru, ramen tabe ni iku? (Bora comer ramen hoje no almoço?) |
| editorial | B1 | b1_mod_01 | dialogue-no-japanese | stage4_dialog[2].npcMessage | Kono ramen, mecha oishiku nai? (Esse ramen tá bom demais, né?) |
| editorial | B1 | b1_mod_02 | audio-guide-no-japanese | stage1_context.audioGuide | Nani shiteru no? Hayaku ikanakya! |
| editorial | B1 | b1_mod_02 | dialogue-no-japanese | stage4_dialog[0].npcMessage | Moshimoshi, [Seu Nome]! Ima nani shiteru no? (Alô! O que tá fazendo agora?) |
| editorial | B1 | b1_mod_02 | dialogue-no-japanese | stage4_dialog[1].npcMessage | Yabai yo! Jouka ga hajimaru! Hayaku ikanakya! (Caramba! A aula vai começar! Temos que ir rápido!) |
| editorial | B1 | b1_mod_02 | dialogue-no-japanese | stage4_dialog[2].npcMessage | Mani aotta! Yokatta-! (Deu tempo! Que bom!) |
| editorial | B1 | b1_mod_03 | audio-guide-no-japanese | stage1_context.audioGuide | Ashita wa ame ga furu to omoimasu. |
| editorial | B1 | b1_mod_03 | dialogue-no-japanese | stage4_dialog[0].npcMessage | [Seu Nome]-san, ashita no tenki, dou omoimasu ka? (O que acha do tempo amanhã?) |
| editorial | B1 | b1_mod_03 | dialogue-no-japanese | stage4_dialog[1].npcMessage | Eki no mae no atarashii resutoran, oishii to omoimasu ka? (Acha que o novo restaurante em frente à estação é gostoso?) |
| editorial | B1 | b1_mod_03 | dialogue-no-japanese | stage4_dialog[2].npcMessage | Ii desu ne! Watashi mo ikitai to omotte imashita! (Boa! Eu também estava pensando em ir!) |
| editorial | B1 | b1_mod_04 | audio-guide-no-japanese | stage1_context.audioGuide | Ashita wa ikeru ka dou ka wakaranai. |
| editorial | B1 | b1_mod_04 | dialogue-no-japanese | stage4_dialog[0].npcMessage | [Seu Nome]-san, shuumatsu no paatii, kuru? (Você vem para a festa no fim de semana?) |
| editorial | B1 | b1_mod_04 | dialogue-no-japanese | stage4_dialog[1].npcMessage | Oso-ku natte mo ii kara, korai? (Pode chegar mais tarde, não quer vir?) |
| editorial | B1 | b1_mod_04 | dialogue-no-japanese | stage4_dialog[2].npcMessage | Watta! Matte iru yo! (Massa! Fico te esperando!) |
| editorial | B1 | b1_mod_05 | audio-guide-no-japanese | stage1_context.audioGuide | Ame ga fukatte iru node, takushi- ni norimashou. |
| editorial | B1 | b1_mod_05 | dialogue-no-japanese | stage4_dialog[0].npcMessage | [Seu Nome]-san, chokkou desu ne. Nani ga arimashita ka? (Atrasado, né. O que aconteceu?) |
| editorial | B1 | b1_mod_05 | dialogue-no-japanese | stage4_dialog[1].npcMessage | Sou desu ka. Jiko nara shikata ga nai desu ne. (Entendo. Se foi um acidente, não havia o que fazer.) |
| editorial | B1 | b1_mod_05 | dialogue-no-japanese | stage4_dialog[2].npcMessage | Dewa, kaigi o hajimemashou. (Bem, vamos começar a reunião.) |
| editorial | B1 | b1_mod_06 | audio-guide-no-japanese | stage1_context.audioGuide | Saifu o tasukete shimaimashita! Doushiyou! |
| editorial | B1 | b1_mod_06 | dialogue-no-japanese | stage4_dialog[0].npcMessage | [Seu Nome]-san, doushitano? Kaoiro ga warui yo. (O que houve? Você tá com uma cara péssima.) |
| editorial | B1 | b1_mod_06 | dialogue-no-japanese | stage4_dialog[1].npcMessage | Eee?! Koban ni ikou! Dareda ga todokete kureteru kamo! (O quê?! Vamos ao posto de polícia! Alguém pode ter entregado!) |
| editorial | B1 | b1_mod_06 | dialogue-no-japanese | stage4_dialog[2].npcMessage | Kore desu ka? Shoushin de todokadareta mono desu yo. (É esta? Foi entregue por um bom cidadão.) |
| editorial | B1 | b1_mod_07 | audio-guide-no-japanese | stage1_context.audioGuide | Sensei ni homeraremashita! |
| editorial | B1 | b1_mod_07 | dialogue-no-japanese | stage4_dialog[0].npcMessage | [Seu Nome]-san, kyou no Nihongo no jugyou, dou datta? (Como foi a aula de japonês hoje?) |
| editorial | B1 | b1_mod_07 | dialogue-no-japanese | stage4_dialog[1].npcMessage | Sugoi ja n! Mainichi benkyou shiteru kara ne! (Incrível! É porque você estuda todo dia, né!) |
| editorial | B1 | b1_mod_07 | dialogue-no-japanese | stage4_dialog[2].npcMessage | Kondo, issho ni benkyou oshiete kure nai? (Na próxima, não me ensina a estudar junto?) |
| editorial | B1 | b1_mod_08 | audio-guide-no-japanese | stage1_context.audioGuide | Ame ni furarete, nurete shimaimashita. |
| editorial | B1 | b1_mod_08 | dialogue-no-japanese | stage4_dialog[1].npcMessage | Taiken datta ne! Kono taoru, tsukatte! (Que sufoco! Usa esta toalha!) |

## Limite da validação

Ocorrências editoriais são backlog mensurável e não bloqueiam o baseline legado. Somente falhas estruturais novas fazem a auditoria falhar. Conteúdo permanece sujeito à revisão humana qualificada.
