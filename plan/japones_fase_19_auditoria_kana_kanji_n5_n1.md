# Fase 19 — Auditoria integral de Kana e Kanji N5–N1

## Objetivo e limite

Auditar os 16 módulos de Hiragana/Katakana e os 92 módulos de Kanji N5–N1. A fase revisará conteúdo canônico de escrita, leitura, significado, exemplos, gramática e avaliação, preservando IDs, módulos, ordem, XP, SRS, desbloqueio e contagens.

As 2.142 pendências abertas do curso A1–B2 permanecem no ledger e não serão silenciosamente aprovadas nesta fase.

## Inventário executável

1. Criar alvos estáveis para:
   - cada Kana, Romaji, exemplo, significado e alternativa de quiz;
   - cada registro Kanji, `onyomi`, `kunyomi`, significado e exemplos;
   - cada contrato gramatical aplicado, revisão final e gabarito;
   - repetições deliberadas entre módulos, distinguindo registro de caractere único.
2. Registrar `beforeHash`, `finalHash`, decisão, justificativa, confiança e páginas-fontes.
3. Confirmar o baseline de 16 módulos Kana, 92 módulos Kanji, 2.215 registros e 1.267 caracteres únicos.

## Fontes e precedência

- Kana e formas elementares: Genki I/II, workbook e gabaritos.
- Leituras Kanji: KANJIDIC2 como referência lexical primária; tabelas oficiais da Agência de Assuntos Culturais para Jōyō e leituras listadas.
- Uso e exemplos: Genki, Quartet, Tobira e Shinkanzen conforme o nível e o contexto.
- `Kanji — Imaginar para Aprender`: somente mnemônicos e organização visual; nunca como autoridade de leitura japonesa.
- Naturalidade ou conflito: duas famílias independentes. OCR de baixa confiança exige página renderizada e inspecionada.

## Ordem de revisão

### Lote A — Hiragana e Katakana

- conferir gojūon, diacríticos, combinações, pequenos っ/ゃ/ゅ/ょ e vogais longas;
- sincronizar Kana, Hepburn ASCII, empréstimos e traduções;
- verificar todos os quizzes e a ligação entre módulos 6 e 8 de Hiragana;
- preservar a correção `ソング / songu`.

### Lote B — Kanji N5 e N4

- conferir leituras, significados e exemplos introdutórios;
- eliminar exemplos híbridos ou que não contenham o Kanji-alvo;
- validar revisões finais sem alegações de lista oficial JLPT.

### Lote C — Kanji N3, N2 e N1

- resolver contratos ainda marcados como conversão mecânica;
- revisar japonês, Romaji e tradução de 3.450 exemplos;
- conferir 62 contratos gramaticais e seus quizzes;
- preservar as 158 decisões N1 da Fase 17 e reabrir qualquer uma somente diante de evidência superior.

## Estados editoriais

- `approved`: valor existente sustentado por fonte localizada;
- `corrected`: antes/depois registrado e sustentado;
- `unresolved`: fonte insuficiente, OCR duvidoso ou conflito real;
- `excluded`: item inadequado, com histórico e justificativa.

Somente módulos sem alvos `unresolved` perderão o aviso público. Não haverá rótulo de “revisão por IA”; a proveniência permanece técnica e interna.

## Regeneração e compatibilidade

- regenerar Dicionário, Minigame, Leitura, Gramática, Escrita e JLPT;
- preservar chaves SRS, favoritos, caderno de erros, XP e progressão;
- aceitar mudança de índice apenas quando ligada a decisão do ledger;
- manter 2.215 registros e 1.267 caracteres únicos, salvo exclusão editorial explicitamente documentada.

## Testes de aceitação

- 100% dos alvos Kana/Kanji classificados;
- toda aprovação aponta para fonte válida e página/localização existente;
- duas famílias para naturalidade e conflito;
- Kana, leitura, Romaji, significado e quiz sincronizados;
- nenhum fallback inventado de ordem de traços;
- invariantes de 16 módulos Kana e 92 módulos Kanji;
- suíte completa, PWA, snapshots, `git diff --check` e QA visual das páginas afetadas.

## Fechamento automático

- criar `tests/FASE_JAPONES_19_AUDITORIA_KANA_KANJI.md`;
- registrar decisões por estado, contagens, fontes, páginas e pendências;
- criar o plano decision-complete da Fase 20 — recursos derivados;
- fazer commit isolado, excluindo `.txt`, `livros/` e `scratch/`;
- prosseguir automaticamente para a Fase 20.
