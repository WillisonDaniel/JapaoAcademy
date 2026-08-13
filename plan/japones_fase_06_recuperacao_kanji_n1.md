# Plano de implementação — Fase 6: Recuperação do Kanji N1

## Objetivo

Recuperar mecanicamente a trilha Kanji N1 e explicitar toda pendência editorial, preservando 25 módulos, 990 registros, 822 caracteres únicos, 1.980 exemplos, quizzes, progresso, SRS, XP e desbloqueio. A fase não aprova linguisticamente os rascunhos.

## Estado de entrada

| Métrica | Quantidade |
|---|---:|
| Módulos | 25 — 24 de ensino + 1 de revisão |
| Registros Kanji | 990 |
| Caracteres únicos | 822 |
| Exemplos | 1.980 |
| Ocorrências editoriais N1 | 4.527 |
| Exemplos sem escrita japonesa | 1.968 |
| Exemplos sem o Kanji-alvo | 1.973 |
| Intrusões inglesas catalogadas | 21 |
| Leituras somente latinas | 565 |

As intrusões incluem `study`, `Ancient`, `decision`, `Target`, `Method` e `melody`. As 565 leituras formam uma dívida distinta e maior: incluem Romaji plausível, leituras incompletas e termos evidentemente não japoneses, como `suburb`.

## Gate inicial de segurança

- Criar snapshot estrutural do N1 antes de qualquer mutação.
- Inventariar separadamente as 565 leituras por classe:
  - Romaji conversível com segurança mecânica;
  - Romaji ambíguo ou incompleto;
  - texto estrangeiro/sem relação aparente;
  - campo `-` válido.
- Corrigir automaticamente apenas a primeira classe para Kana + Romaji.
- Para classes ambígua e estrangeira, manter o legado rastreável, adicionar `readingEditorialReview.status = "pending-human-review"` e não inventar Kana como se fosse leitura confirmada.
- Adaptar o player para identificar leitura pendente de modo não enganoso, sem bloquear o módulo.
- A meta de zero para `reading-latin-only` só pode ser atingida por contrato explícito de pendência; não transformar palavra estrangeira em leitura japonesa fictícia.

## Contrato dos exemplos

- Carregar `js/kanji/romaji-draft.js` antes do dataset N1 e manter o helper fora de N5/N4.
- Preservar `word`, `wordMeaning`, `sentence` e `sentenceMeaning` como legado.
- Adicionar aos 1.980 exemplos `content.displayText`, `audioText`, `furigana`, `romaji`, `translation`, `scenario` e `editorialReview.status = "pending-human-review"`.
- Exigir escrita japonesa, ausência de caracteres latinos e presença do Kanji-alvo.
- Tratar as 21 intrusões catalogadas com substituição semântica explícita.
- Para token estrangeiro não catalogado, usar fallback fonético apenas como rascunho identificado; registrar o token original na fila humana.
- Adicionar contrato aos 24 exemplos gramaticais de ensino.

## Lotes

- Processar seis lotes de quatro módulos: 01–04, 05–08, 09–12, 13–16, 17–20 e 21–24.
- Em cada lote:
  - executar contrato N1 e auditoria japonesa;
  - exigir zero bloqueadores, zero texto/áudio latino e alvo presente;
  - gerar seção correspondente da fila humana;
  - comparar o snapshot fora dos campos autorizados;
  - registrar contagem das leituras automáticas e pendentes.
- Tratar o módulo 25 depois dos seis lotes, removendo somente alegações quantitativas ou de domínio integral comprovadamente imprecisas.

## Auditoria e revisão humana

- Fazer a auditoria preferir `content` no N1.
- Exigir contrato completo e status pendente para todos os exemplos e módulos.
- Criar regra própria para leituras N1 pendentes, distinta de leitura ausente.
- Gerar `tests/JAPANESE_KANJI_N1_HUMAN_REVIEW.md` com:
  - módulo, caractere, palavra, texto, Romaji, tradução e status;
  - tabela separada das 565 leituras, valor legado, classificação e proposta quando mecânica.
- Reduzir as regras de exemplos N1 a zero sem allowlist ampla.
- Não denominar nenhum dos 2.004 contratos textuais como aprovado.

## Integridade e desempenho

- Criar `tests/kanji-n1-contract.cjs` com snapshot estrutural que normalize somente `content`, `editorialReview`, contratos de leitura autorizados e transparência do módulo 25.
- Confirmar 25 módulos, 990 registros, 822 únicos e 1.980 exemplos.
- Confirmar estabilidade de quizzes, respostas não relacionadas, `readingText`, números e ordem.
- Confirmar que N3 e N2 preservam seus snapshots e zero ocorrências recuperadas.
- Regenerar dicionário e minigame após mudanças de leitura.
- Medir a página N1 antes e depois. Entrada: 1.808.095 bytes (1.765,72 KB), teto 1.770 KB.
- Como o helper excede a margem atual, recalibrar somente o teto N1 para o menor KB inteiro que comporte a carga final mais até 1 KB; N5/N4 continuam sem helper.
- Atualizar PWA, regressão, multidioma e `package.json`.

## Validação final

- Executar após cada lote: contrato N1, auditoria japonesa, snapshots N3/N2 e `git diff --check`.
- Executar no fechamento: `npm.cmd test`.
- Validar módulos 1, 12 e 24 e a revisão 25 em 390 px e desktop, temas claro/escuro.
- Alternar Furigana e Romaji, testar áudio, leituras pendentes e frases longas.
- Confirmar zero novos erros no console.
- Se o navegador integrado continuar indisponível, registrar a falha exata sem alegar cobertura.

## Restrições

- Não alterar N5/N4, curso A1–B2, Kana ou certificado.
- Não mudar contagens, ordem, progresso, SRS, XP ou desbloqueio.
- Não converter termos obviamente estrangeiros em Kana alegando que são leituras confirmadas.
- Não gerar frases vazias ou metalinguísticas apenas para passar testes.
- Não marcar conteúdo como aprovado sem revisão humana qualificada.
- Não incluir a remoção preexistente de `.txt` no commit.

## Fechamento automático

- Criar `tests/FASE_JAPONES_06_RECUPERACAO_KANJI_N1.md`.
- Criar o plano decision-complete da Fase 7 — Saneamento Kanji N5/N4 e revisão transversal.
- Fazer commit exclusivo da Fase 6.
- Prosseguir automaticamente para a Fase 7 nas tarefas que não dependam da aprovação editorial humana.
