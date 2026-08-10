# Ocorrências da auditoria editorial russa

Relatório técnico gerado por `npm run audit:russian`. Ele não substitui revisão linguística humana.

- Erros técnicos bloqueadores: 0
- Ocorrências para revisão humana: 62
- Decisões editoriais únicas: 19
- Total registrado: 62

## Allowlist documentada de nomes próprios e marcas

`Alex`, `Ana`, `Anna`, `Apple`, `Boris`, `Dmitry`, `Elena`, `Facebook`, `Google`, `Igor`, `Instagram`, `Irina`, `Ivan`, `Marina`, `Maria`, `Microsoft`, `Mikhail`, `Natasha`, `Netflix`, `Olga`, `Pavel`, `Sasha`, `Sergei`, `Skype`, `Spotify`, `Tatiana`, `Telegram`, `Uber`, `Vladimir`, `YouTube`, `Yuri`, `Zoom`

## Checklist consolidado para o revisor

Cada linha reúne repetições do mesmo valor em `sentence`, `audio`, `tokens` ou diálogos. O revisor deve marcar a decisão e aplicar a correção de forma consistente em todos os campos listados.

| Status | Arquivo | Módulo | Motivo(s) | Campos afetados | Valor |
|---|---|---|---|---:|---|
| ☐ Pendente | database/ru-RU/data_curso_russo_a2.js | ru_a2_mod_16 | Token latino isolado para revisão: dva | 2 | Да, есть dva билета. |
| ☐ Pendente | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_14 | Token latino isolado para revisão: signed | 4 | В приложении к письму вы найдёте signed договор. |
| ☐ Pendente | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_14 | Token latino isolado para revisão: signed | 2 | signed |
| ☐ Pendente | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_15 | Token latino isolado para revisão: IT | 4 | У меня есть пятилетний опыт работы в сфере IT. |
| ☐ Pendente | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_15 | Token latino isolado para revisão: IT | 2 | IT. |
| ☐ Pendente | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_19 | Token latino isolado para revisão: duty | 4 | По-моему, защищать природу — это duty каждого человека. |
| ☐ Pendente | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_19 | Token latino isolado para revisão: duty | 2 | duty |
| ☐ Pendente | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_23 | Token latino isolado para revisão: B | 4 | Вы готовы к итоговому экзамену B1? |
| ☐ Pendente | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_24 | Token latino isolado para revisão: B | 4 | Мы успешно защитили проект и получили уровень B1! |
| ☐ Pendente | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_24 | Token latino isolado para revisão: B | 2 | B1! |
| ☐ Pendente | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_24 | Token latino isolado para revisão: B | 4 | Поздравляем! Вы отлично сдали итоговый тест B1. |
| ☐ Pendente | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_10 | Token latino isolado para revisão: weekly | 2 | Ты регулярно слушаешь этот weekly подкаст про культуру? |
| ☐ Pendente | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_23 | Token latino isolado para revisão: B | 4 | Мы тщательно повторили все ключевые темы грамматики продвинутого уровня B2. |
| ☐ Pendente | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_23 | Token latino isolado para revisão: B | 2 | B2. |
| ☐ Pendente | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_23 | Token latino isolado para revisão: B | 4 | Да, вы отлично усвоили всю сложную грамматику и лексику уровня B2. |
| ☐ Pendente | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | Token latino isolado para revisão: A; Token latino isolado para revisão: B | 4 | Поздравляем вас с успешным завершением полного курса русского языка от A1 до B2! |
| ☐ Pendente | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | Token latino isolado para revisão: A | 2 | A1 |
| ☐ Pendente | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | Token latino isolado para revisão: B | 2 | B2! |
| ☐ Pendente | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | Token latino isolado para revisão: B | 4 | Поздравляю! Вы успешно сдали финальный интегральный экзамен уровня B2! |

## Ocorrências

| Severidade | Arquivo | Módulo | Caminho do campo | Motivo | Valor |
|---|---|---|---|---|---|
| revisão | database/ru-RU/data_curso_russo_a2.js | ru_a2_mod_16 | stage4_dialogue.1.text | Token latino isolado para revisão: dva | Да, есть dva билета. |
| revisão | database/ru-RU/data_curso_russo_a2.js | ru_a2_mod_16 | stage4_dialog.1.text | Token latino isolado para revisão: dva | Да, есть dva билета. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_14 | stage3_sentences.1.sentence | Token latino isolado para revisão: signed | В приложении к письму вы найдёте signed договор. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_14 | stage3_sentences.1.tokens.6 | Token latino isolado para revisão: signed | signed |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_14 | stage3_sentences.1.audio | Token latino isolado para revisão: signed | В приложении к письму вы найдёте signed договор. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_14 | stage3_5_sentenceBuilder.1.sentence | Token latino isolado para revisão: signed | В приложении к письму вы найдёте signed договор. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_14 | stage3_5_sentenceBuilder.1.tokens.6 | Token latino isolado para revisão: signed | signed |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_14 | stage3_5_sentenceBuilder.1.audio | Token latino isolado para revisão: signed | В приложении к письму вы найдёте signed договор. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_15 | stage3_sentences.0.sentence | Token latino isolado para revisão: IT | У меня есть пятилетний опыт работы в сфере IT. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_15 | stage3_sentences.0.tokens.8 | Token latino isolado para revisão: IT | IT. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_15 | stage3_sentences.0.audio | Token latino isolado para revisão: IT | У меня есть пятилетний опыт работы в сфере IT. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_15 | stage3_5_sentenceBuilder.0.sentence | Token latino isolado para revisão: IT | У меня есть пятилетний опыт работы в сфере IT. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_15 | stage3_5_sentenceBuilder.0.tokens.8 | Token latino isolado para revisão: IT | IT. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_15 | stage3_5_sentenceBuilder.0.audio | Token latino isolado para revisão: IT | У меня есть пятилетний опыт работы в сфере IT. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_19 | stage3_sentences.1.sentence | Token latino isolado para revisão: duty | По-моему, защищать природу — это duty каждого человека. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_19 | stage3_sentences.1.tokens.5 | Token latino isolado para revisão: duty | duty |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_19 | stage3_sentences.1.audio | Token latino isolado para revisão: duty | По-моему, защищать природу — это duty каждого человека. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_19 | stage3_5_sentenceBuilder.1.sentence | Token latino isolado para revisão: duty | По-моему, защищать природу — это duty каждого человека. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_19 | stage3_5_sentenceBuilder.1.tokens.5 | Token latino isolado para revisão: duty | duty |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_19 | stage3_5_sentenceBuilder.1.audio | Token latino isolado para revisão: duty | По-моему, защищать природу — это duty каждого человека. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_23 | stage4_dialogue.0.text | Token latino isolado para revisão: B | Вы готовы к итоговому экзамену B1? |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_23 | stage4_dialogue.0.audio | Token latino isolado para revisão: B | Вы готовы к итоговому экзамену B1? |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_23 | stage4_dialog.0.text | Token latino isolado para revisão: B | Вы готовы к итоговому экзамену B1? |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_23 | stage4_dialog.0.audio | Token latino isolado para revisão: B | Вы готовы к итоговому экзамену B1? |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_24 | stage3_sentences.0.sentence | Token latino isolado para revisão: B | Мы успешно защитили проект и получили уровень B1! |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_24 | stage3_sentences.0.tokens.7 | Token latino isolado para revisão: B | B1! |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_24 | stage3_sentences.0.audio | Token latino isolado para revisão: B | Мы успешно защитили проект и получили уровень B1! |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_24 | stage3_5_sentenceBuilder.0.sentence | Token latino isolado para revisão: B | Мы успешно защитили проект и получили уровень B1! |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_24 | stage3_5_sentenceBuilder.0.tokens.7 | Token latino isolado para revisão: B | B1! |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_24 | stage3_5_sentenceBuilder.0.audio | Token latino isolado para revisão: B | Мы успешно защитили проект и получили уровень B1! |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_24 | stage4_dialogue.0.text | Token latino isolado para revisão: B | Поздравляем! Вы отлично сдали итоговый тест B1. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_24 | stage4_dialogue.0.audio | Token latino isolado para revisão: B | Поздравляем! Вы отлично сдали итоговый тест B1. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_24 | stage4_dialog.0.text | Token latino isolado para revisão: B | Поздравляем! Вы отлично сдали итоговый тест B1. |
| revisão | database/ru-RU/data_curso_russo_b1.js | ru_b1_mod_24 | stage4_dialog.0.audio | Token latino isolado para revisão: B | Поздравляем! Вы отлично сдали итоговый тест B1. |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_10 | stage4_dialogue.0.text | Token latino isolado para revisão: weekly | Ты регулярно слушаешь этот weekly подкаст про культуру? |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_10 | stage4_dialog.0.text | Token latino isolado para revisão: weekly | Ты регулярно слушаешь этот weekly подкаст про культуру? |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_23 | stage3_sentences.1.sentence | Token latino isolado para revisão: B | Мы тщательно повторили все ключевые темы грамматики продвинутого уровня B2. |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_23 | stage3_sentences.1.tokens.9 | Token latino isolado para revisão: B | B2. |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_23 | stage3_sentences.1.audio | Token latino isolado para revisão: B | Мы тщательно повторили все ключевые темы грамматики продвинутого уровня B2. |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_23 | stage3_5_sentenceBuilder.1.sentence | Token latino isolado para revisão: B | Мы тщательно повторили все ключевые темы грамматики продвинутого уровня B2. |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_23 | stage3_5_sentenceBuilder.1.tokens.9 | Token latino isolado para revisão: B | B2. |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_23 | stage3_5_sentenceBuilder.1.audio | Token latino isolado para revisão: B | Мы тщательно повторили все ключевые темы грамматики продвинутого уровня B2. |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_23 | stage4_dialogue.1.text | Token latino isolado para revisão: B | Да, вы отлично усвоили всю сложную грамматику и лексику уровня B2. |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_23 | stage4_dialogue.1.audio | Token latino isolado para revisão: B | Да, вы отлично усвоили всю сложную грамматику и лексику уровня B2. |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_23 | stage4_dialog.1.text | Token latino isolado para revisão: B | Да, вы отлично усвоили всю сложную грамматику и лексику уровня B2. |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_23 | stage4_dialog.1.audio | Token latino isolado para revisão: B | Да, вы отлично усвоили всю сложную грамматику и лексику уровня B2. |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage3_sentences.0.sentence | Token latino isolado para revisão: A | Поздравляем вас с успешным завершением полного курса русского языка от A1 до B2! |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage3_sentences.0.sentence | Token latino isolado para revisão: B | Поздравляем вас с успешным завершением полного курса русского языка от A1 до B2! |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage3_sentences.0.tokens.10 | Token latino isolado para revisão: A | A1 |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage3_sentences.0.tokens.12 | Token latino isolado para revisão: B | B2! |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage3_sentences.0.audio | Token latino isolado para revisão: A | Поздравляем вас с успешным завершением полного курса русского языка от A1 до B2! |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage3_sentences.0.audio | Token latino isolado para revisão: B | Поздравляем вас с успешным завершением полного курса русского языка от A1 до B2! |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage3_5_sentenceBuilder.0.sentence | Token latino isolado para revisão: A | Поздравляем вас с успешным завершением полного курса русского языка от A1 до B2! |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage3_5_sentenceBuilder.0.sentence | Token latino isolado para revisão: B | Поздравляем вас с успешным завершением полного курса русского языка от A1 до B2! |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage3_5_sentenceBuilder.0.tokens.10 | Token latino isolado para revisão: A | A1 |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage3_5_sentenceBuilder.0.tokens.12 | Token latino isolado para revisão: B | B2! |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage3_5_sentenceBuilder.0.audio | Token latino isolado para revisão: A | Поздравляем вас с успешным завершением полного курса русского языка от A1 до B2! |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage3_5_sentenceBuilder.0.audio | Token latino isolado para revisão: B | Поздравляем вас с успешным завершением полного курса русского языка от A1 до B2! |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage4_dialogue.0.text | Token latino isolado para revisão: B | Поздравляю! Вы успешно сдали финальный интегральный экзамен уровня B2! |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage4_dialogue.0.audio | Token latino isolado para revisão: B | Поздравляю! Вы успешно сдали финальный интегральный экзамен уровня B2! |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage4_dialog.0.text | Token latino isolado para revisão: B | Поздравляю! Вы успешно сдали финальный интегральный экзамен уровня B2! |
| revisão | database/ru-RU/data_curso_russo_b2.js | ru_b2_mod_24 | stage4_dialog.0.audio | Token latino isolado para revisão: B | Поздравляю! Вы успешно сдали финальный интегральный экзамен уровня B2! |

## Limite desta validação

A ausência de erros bloqueadores indica apenas consistência mecânica dos campos-alvo. O curso não deve ser anunciado como linguisticamente certificado até uma revisão completa por alguém fluente.
