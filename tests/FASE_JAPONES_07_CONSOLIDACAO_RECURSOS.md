# Fase 7 — Consolidação de Kana, dicionário, minigame, escrita e SRS

## Resultado

A Fase 7 consolidou os recursos japoneses existentes sem alterar IDs pedagógicos, chaves SRS, desbloqueio, XP ou algoritmo de revisão.

- Hiragana e Katakana mantêm 8 módulos cada e agora oferecem, no módulo final, ações para SRS, minigame e dicionário.
- O dicionário japonês mantém o índice leve de 3.271 entradas e oferece “Abrir trilha” e “Revisar no SRS” somente para Kana/Kanji com destino válido.
- O minigame mantém 1.015 cartões Kanji e os pools anteriores; erros japoneses reais entram no caderno de erros pelo caractere, enquanto acertos não alteram SRS.
- A escrita continua registrando atividade apenas quando “Verificar forma” é acionado e não produz avaliação SRS ou vetor inventado.
- Um registro central cobre Hiragana, Katakana e Kanji N5–N1; as sete chaves persistidas dos decks foram preservadas integralmente.

## Saneamento N5/N4

- Seis frases N5 foram corrigidas para conter o objeto pedagógico estudado.
- A comparação introdutória de homófonos foi preservada como a única exceção permitida.
- Cinco leituras N5 e 89 leituras N4 foram classificadas como `pending-human-review`, sem proposta inventada.
- O inventário global passou de 258 para 252 pendências editoriais porque os seis exemplos foram saneados:
  - N5: 5 leituras pendentes + 1 exceção permitida;
  - N4: 89 leituras pendentes;
  - N1: 158 leituras pendentes.
- Nenhuma dessas leituras foi apresentada como aprovada por especialista.

## Arquivos principais alterados

- `database/ja-JP/data_kanji_n5.js`
- `database/ja-JP/data_kanji_n4.js`
- `js/core/constants.js`
- `js/core/dictionary.js`
- `js/game/minigames.js`
- `js/kanji/kanji-render.js`
- `js/srs/deck.js`
- `tests/japanese-editorial-audit.cjs`
- `tests/japanese-resources-contract.cjs`
- `tests/JAPANESE_KANA_N5_N4_HUMAN_REVIEW.md`
- `tests/JAPANESE_EDITORIAL_OCCURRENCES.json`
- `tests/JAPANESE_EDITORIAL_REVIEW.md`
- `tests/multilang.cjs`
- `tests/regression.cjs`
- `package.json`

## Verificações

- Índice do dicionário: 3.271 entradas, sincronizado.
- Índice do minigame: 1.015 cartões, sincronizado.
- Auditoria japonesa: zero bloqueadores, 252 pendências e 1 exceção permitida.
- Contrato transversal: 8/8.
- Regressão: 35/35.
- Integração: 20/20.
- Multidioma: 26/26.
- PWA: 115 recursos locais, 10,74 MB.
- `npm.cmd test`: aprovado.
- `git diff --check`: aprovado.

Os snapshots estruturais N5/N4 preservam módulos, quantidades de itens, quizzes e tabelas de revisão. Os snapshots N3/N2/N1 também permaneceram aprovados.

## Desempenho

Os limites foram recalibrados de forma específica para os metadados e ações realmente adicionados. Medições finais relevantes:

- curso japonês: 1.659.707 bytes;
- Kanji N5: 722.767 bytes;
- Kanji N4: 735.780 bytes;
- minigame japonês: 416.608 bytes, 19 scripts locais;
- dicionário: continua usando somente o índice pré-compilado, sem datasets integrais.

## Validação visual e pendências

A tentativa de abrir o navegador interno falhou antes de carregar qualquer página:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Portanto, não há alegação de validação visual, responsiva, touch, leitor de tela, áudio ou console nesta fase. A matriz 390 px/desktop e claro/escuro permanece pendente até o navegador integrado funcionar.

Também permanecem pendentes de revisão editorial humana qualificada as 252 leituras inventariadas. Testes mecânicos comprovam estrutura e rastreabilidade, não correção linguística.

