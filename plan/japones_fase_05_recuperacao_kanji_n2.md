# Plano de implementação — Fase 5: Recuperação do Kanji N2

## Objetivo

Recuperar a trilha Kanji N2 com o mesmo contrato rastreável do N3, sem apresentar os rascunhos como conteúdo editorialmente aprovado. Preservar os 21 módulos, 375 registros, 342 caracteres únicos, 750 exemplos, quizzes, progresso, SRS, XP e desbloqueio.

## Estado de entrada

| Métrica | Quantidade |
|---|---:|
| Módulos | 21 — 20 de ensino + 1 de revisão |
| Registros Kanji | 375 |
| Caracteres únicos | 342 |
| Exemplos | 750 |
| Campos de leitura on/kun | 750 |
| Ocorrências editoriais N2 | 1.491 |
| Exemplos sem escrita japonesa | 730 |
| Exemplos sem o Kanji-alvo | 750 |
| Intrusões inglesas | 9 |
| Leituras somente latinas | 2 |

As intrusões são `strategy`, `study`, `Ancient`, `decision`, `Method`, `melody`, mais duas ocorrências adicionais de `Study/study` e `loss`. As leituras defeituosas são `KIN (KIN)` e `DATSU (DATSU)` sem Kana.

## Arquitetura do contrato

- Preservar `word`, `wordMeaning`, `sentence` e `sentenceMeaning` como fonte legada rastreável.
- Adicionar aos 750 exemplos:
  - `content.displayText` em escrita japonesa;
  - `content.audioText` somente com japonês pronunciável;
  - `content.furigana` quando houver apoio editorial real;
  - `content.romaji` com o valor legado;
  - `content.translation` com `sentenceMeaning`;
  - `content.scenario`, normalmente vazio;
  - `editorialReview.status = "pending-human-review"`.
- Exigir o Kanji-alvo no texto exibido sem prefixos artificiais ou frases metalinguísticas.
- Adicionar contrato aos 20 exemplos gramaticais de ensino.
- Corrigir `KIN (KIN)` e `DATSU (DATSU)` para Kana + Romaji no campo existente.
- No módulo 21, preservar função, número e quiz, corrigindo apenas alegações quantitativas ou de domínio integral que a auditoria comprovar.

## Conversão e desempenho

- Extrair o conversor determinístico criado no N3 para um helper específico de autoria Kanji, parametrizado por substituições editoriais e nível.
- Carregar esse helper somente nas páginas N3 e N2; não aumentar a carga de N5, N4 ou N1.
- Refatorar o N3 para usar o helper sem alterar os 738 contratos nem o snapshot da Fase 4.
- Tratar explicitamente as nove intrusões inglesas; palavras não reconhecidas são falha de auditoria, não transliteração aceita silenciosamente.
- Trabalhar em cinco lotes de quatro módulos: 01–04, 05–08, 09–12, 13–16 e 17–20; tratar a revisão 21 somente após os lotes.
- Após cada lote, exigir zero caracteres latinos no texto/áudio, alvo presente e status pendente.
- Medir os scripts locais antes e depois. O N2 entra com 1.019.689 bytes (995,79 KB) e teto de 1.000 KB.
- Primeiro reduzir duplicação N3/helper. Se o contrato N2 ainda exceder 1.000 KB, recalibrar somente o teto N2 para o menor múltiplo inteiro de KB que comporte a carga mais uma margem máxima de 1 KB; registrar bytes e justificativa no relatório.

## Player, auditoria e revisão humana

- Reusar o player já preparado na Fase 4; não alterar canvas, ordem de traços, navegação, XP ou desbloqueio.
- Fazer a auditoria preferir `content` no N2 e exigir contrato completo, japonês no texto/áudio, Kanji-alvo e status pendente.
- Criar fixtures para contrato válido, alvo ausente, áudio latino, contrato incompleto e cada classe de intrusão inglesa.
- Reduzir as 1.491 ocorrências N2 para zero sem allowlist ampla.
- Gerar `tests/JAPANESE_KANJI_N2_HUMAN_REVIEW.md` com módulo, caractere, palavra, japonês, Romaji, tradução e status.
- Manter os 770 contratos novos como `pending-human-review`; teste mecânico não pode aprovar naturalidade ou adequação ao N2.

## Integridade e testes

- Criar `tests/kanji-n2-contract.cjs` com snapshot estrutural que ignore somente `content`, `editorialReview`, as duas leituras autorizadas e eventual transparência comprovadamente necessária no módulo 21.
- Confirmar 21 módulos, 375 registros, 342 únicos e 750 exemplos.
- Confirmar estabilidade de quizzes, respostas não relacionadas, `readingText`, números e ordem.
- Confirmar que o snapshot N3 e suas contagens continuam idênticos após a extração do helper.
- Regenerar o índice do dicionário depois das correções de leitura.
- Atualizar auditoria, regressão, teste multidioma, PWA e `package.json` sem afrouxar proteções de outros níveis.
- Executar após cada lote: contrato N2, auditoria japonesa e snapshot N3.
- Executar no fechamento: `npm.cmd test` e `git diff --check`.
- Confirmar que as ocorrências N1 continuam em 4.527 e que A1–B2/N3 permanecem em zero nas regras já recuperadas.

## Validação visual

- Validar módulos 1, 10 e 20 e a revisão 21 em 390 px e desktop, temas claro e escuro.
- Alternar Furigana e Romaji, testar áudio e frases longas.
- Confirmar zero novos erros no console.
- Se o navegador integrado continuar indisponível, registrar a falha exata sem alegar cobertura.

## Restrições

- Não alterar conteúdo N1, curso A1–B2, Kana ou certificado.
- Não mudar contagens, ordem, progresso, SRS, XP ou desbloqueio.
- Não gerar frases vazias, metalinguísticas ou semanticamente desconectadas apenas para passar a auditoria.
- Não denominar nenhum rascunho como aprovado sem revisão humana qualificada.
- Não incluir a remoção preexistente de `.txt` no commit.

## Fechamento automático

- Criar `tests/FASE_JAPONES_05_RECUPERACAO_KANJI_N2.md`.
- Criar o plano decision-complete da Fase 6 — Recuperação do Kanji N1.
- Fazer commit exclusivo da Fase 5.
- Prosseguir automaticamente para a Fase 6 nas tarefas que não dependam da aprovação editorial humana.
