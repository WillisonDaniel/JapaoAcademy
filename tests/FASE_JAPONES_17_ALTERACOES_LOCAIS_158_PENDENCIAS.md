# Fase 17 — Alterações locais e 158 pendências

## Resultado

A fila objetiva que abriu a fase foi concluída. O relatório automático passou de 158 ocorrências editoriais e uma exceção permitida para zero ocorrências e zero exceções.

## Decisões editoriais

- 158 leituras `kunyomi` do N1 foram verificadas individualmente contra o registro `ja_kun` do KANJIDIC2.
- 94 leituras em Romaji correspondiam a uma leitura registrada e foram normalizadas para Kana + Hepburn ASCII.
- 30 valores incorretos, incompletos ou colocados no campo errado foram substituídos pelas leituras registradas.
- 34 campos continham on'yomi, tradução ou outra forma sem `kunyomi` registrado e passaram para `-`.
- O exemplo introdutório N5 sobre `あめ` foi reescrito integralmente em japonês, passou a conter o Kanji-alvo `漢` e deixou de depender da allowlist.
- O ledger central contém 159 decisões `corrected`, cada uma com alvo estável, hash anterior, valor final, justificativa, confiança e referência localizada.

## Fontes acrescentadas ao catálogo

- `edrdg-kanjidic2`: dataset KANJIDIC2, localizado por caractere Unicode e tipo `ja_kun`.
- `bunka-joyo-kanji-2010`: tabela oficial de Jōyō Kanji da Agência de Assuntos Culturais, 164 páginas.

Os arquivos baixados permanecem em `scratch/editorial-sources/`. As páginas 1, 82 e 164 da tabela oficial foram renderizadas com Poppler e inspecionadas visualmente; a primeira contém as instruções do quadro e a página 82 confirma a legibilidade das colunas de caractere, leitura e exemplos.

## Arquivos canônicos e derivados

- `database/ja-JP/data_kanji_n1.js`: mapa explícito e defensivo com as 158 correções.
- `database/ja-JP/data_kanji_n5.js`: correção do exemplo de homófonos.
- `database/ja-JP/data_dicionario_index.js`: regenerado, mantendo 3.271 entradas.
- `database/ja-JP/data_minigame_kanji_index.js`: regenerado, mantendo 1.015 cartões.
- Curso, Escuta, Leitura, Gramática, Escrita e JLPT foram regenerados e validados; não houve alteração de contagens.

## Contratos adicionados ou atualizados

- validação de fontes externas, hashes e localizações no ledger;
- contrato dedicado da Fase 17 com 159 alvos existentes;
- verificação de 34 campos sem `kunyomi`, ausência de leituras apenas em Romaji e remoção da allowlist N5;
- contratos N1, recursos japoneses e regressão atualizados para reconhecer as decisões concluídas.

## Invariantes preservados

- 25 módulos N1, 990 registros e 822 caracteres únicos;
- 11 módulos N5, 201 registros e 104 caracteres únicos;
- IDs, ordem, exemplos não relacionados, quizzes, SRS, XP, progresso, favoritos, persistência e desbloqueio;
- `livros/`, `scratch/` e `.txt` fora do commit.

## Pendências transferidas

- As 407 conversões mecânicas de on'yomi N1 e os textos, exemplos e quizzes dos níveis Kanji continuam pertencendo à auditoria integral de Kana/Kanji.
- Os 105 módulos A1–B2 continuam com status editorial legado e serão o escopo exclusivo da Fase 18.
- A nomenclatura legada `*_HUMAN_REVIEW.md` será substituída por relatórios neutros na consolidação, mantendo arquivos de compatibilidade.

## Validação

- catálogo local, hashes e cobertura OCR: aprovados;
- auditoria editorial objetiva: 0 bloqueadores, 0 ocorrências editoriais e 0 exceções;
- índices derivados: sincronizados;
- suíte completa: 43/43 grupos de regressão, 21/21 cenários de integração e 37/37 cenários multidioma;
- PWA: 132 recursos locais validados;
- `git diff --check`: sem erro material (somente avisos de conversão de fim de linha do checkout Windows).
