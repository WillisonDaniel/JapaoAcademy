# Plano de implementação — Fase 4: Recuperação do Kanji N3

## Objetivo

Recuperar pedagogicamente a trilha Kanji N3, substituindo exemplos exibidos em Romaji por japonês legível, mantendo o legado para rastreabilidade e submetendo todo conteúdo novo à revisão humana. Preservar os 19 módulos, 360 registros, 353 caracteres únicos, IDs implícitos, quizzes, progresso, SRS e desbloqueio.

## Estado de entrada

| Métrica | Quantidade |
|---|---:|
| Módulos | 19 — 18 de ensino + 1 de revisão |
| Registros Kanji | 360 |
| Caracteres únicos | 353 |
| Exemplos | 720 |
| Campos de leitura on/kun | 720 |
| Ocorrências editoriais | 1.409 |
| Exemplos sem escrita japonesa | 684 |
| Exemplos sem o Kanji-alvo | 719 |
| Intrusões de inglês | 4 |
| Leituras somente latinas | 2 |

As quatro intrusões objetivas são `arrival`, `method`, outro `arrival` e `Study`. As duas leituras defeituosas são `BOU / BAKU` e `ZOU` sem Kana.

## Modelo de dados

- Preservar `word`, `wordMeaning`, `sentence` e `sentenceMeaning` como legado rastreável.
- Adicionar a cada um dos 720 exemplos:
  - `content.displayText` em escrita japonesa;
  - `content.audioText` somente com japonês pronunciável;
  - `content.furigana`, quando necessário;
  - `content.romaji` com o valor legado;
  - `content.translation` com `sentenceMeaning`;
  - `content.scenario`, normalmente vazio;
  - `editorialReview.status = "pending-human-review"`.
- O novo `displayText` deve conter o caractere-alvo. Não aceitar prefixos artificiais ou frases metalinguísticas criadas apenas para satisfazer o teste.
- Corrigir as duas leituras on'yomi para Kana + Romaji no campo existente, registrando a alteração objetiva no relatório.
- Adicionar contrato textual aos 18 exemplos gramaticais dos módulos de ensino; o módulo 19 de revisão deve permanecer estruturalmente estável.

## Produção dos exemplos

- Trabalhar em seis lotes de três módulos: 01–03, 04–06, 07–09, 10–12, 13–15 e 16–18.
- Usar a frase Romaji e sua tradução apenas como fonte de intenção semântica.
- Converter cada exemplo para uma frase japonesa curta e compatível com o significado apresentado.
- Preferir vocabulário e gramática até N3; evitar construções avançadas desnecessárias.
- Manter o Kanji-alvo na palavra estudada e não substituir seu uso por Kana.
- Corrigir explicitamente as quatro intrusões inglesas em vez de apenas transliterá-las.
- Marcar cada lote como pendente de revisão humana; nenhum lote será denominado aprovado.

## Player Kanji

- Atualizar `js/kanji/kanji-render.js` para preferir `example.content` e usar campos legados somente como fallback.
- Enviar exclusivamente `content.audioText` ao TTS.
- Aplicar as preferências existentes de Furigana e Romaji.
- Renderizar tradução separadamente e escapar conteúdo antes de inseri-lo no HTML.
- Não alterar canvas, ordem de traços, XP, navegação ou desbloqueio.

## Auditoria e revisão humana

- Fazer a auditoria preferir `example.content` quando presente.
- Exigir contrato completo, japonês no texto/áudio, presença do Kanji-alvo e status `pending-human-review`.
- Criar fixtures para exemplo válido, Kanji ausente, áudio em Romaji, contrato incompleto e intrusão inglesa.
- Meta mecânica: reduzir as 1.409 ocorrências N3 para zero, sem allowlist ampla.
- Gerar `tests/JAPANESE_KANJI_N3_HUMAN_REVIEW.md` com módulo, caractere, palavra, japonês, Romaji, tradução e status.

## Integridade e testes

- Criar snapshot estrutural do N3 que ignore somente `content` e `editorialReview`, além das duas correções de leitura explicitamente autorizadas.
- Confirmar 19 módulos, 360 registros, 353 únicos e 720 exemplos.
- Confirmar que quizzes, respostas, `readingText`, números e ordem permanecem estáveis.
- Ampliar o teste do contrato textual e a regressão da fase.
- Executar a auditoria após cada lote e, no fechamento, `npm.cmd test` e `git diff --check`.
- Confirmar que o backlog N2/N1 não mudou nesta fase.

## Validação visual

- Validar módulos 1, 9 e 18 e a revisão 19 em 390 px e desktop, temas claro e escuro.
- Alternar Furigana e Romaji, testar áudio e conferir frases longas.
- Confirmar zero novos erros no console.
- Se o navegador integrado continuar indisponível, registrar a falha exata sem alegar cobertura.

## Restrições

- Não alterar Kanji N2/N1, curso A1–B2, Kana ou certificado.
- Não alterar contagens, ordem, progresso, SRS, XP ou desbloqueio.
- Não gerar frases vazias, metalinguísticas ou semanticamente desconectadas apenas para passar a auditoria.
- Não marcar conteúdo como aprovado sem revisão humana qualificada.
- Não incluir a remoção preexistente de `.txt` no commit.

## Fechamento automático

- Criar `tests/FASE_JAPONES_04_RECUPERACAO_KANJI_N3.md`.
- Criar o plano decision-complete da Fase 5 — Recuperação do Kanji N2.
- Fazer commit exclusivo da Fase 4.
- Prosseguir automaticamente para a Fase 5 nas tarefas que não dependam da aprovação editorial humana.
