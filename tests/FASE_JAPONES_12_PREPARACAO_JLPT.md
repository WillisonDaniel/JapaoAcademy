# Fase 12 — Preparação JLPT

## Resultado

A Fase 12 organizou questões existentes das trilhas Kanji em sessões internas por nível de referência. A experiência declara que não é oficial ou afiliada ao JLPT e não reproduz escala, pesos, composição ou previsão de aprovação.

## Inventário

- Questões examinadas: **1.061**.
- Questões publicadas: **1.060**:
  - 880 questões de módulo;
  - 180 questões de compreensão.
- Exclusões: **1**, a resposta N4 já conhecida que não pertence às opções.
- Distribuição: N5=122, N4=181, N3=217, N2=240, N1=300.
- Questões pendentes de revisão humana: **757** (N3–N1).
- Snapshot determinístico: `c91ded09e81facf7`.
- Índice leve: **480.918 bytes**.

## Implementação

- `database/ja-JP/data_jlpt_pratica_index.js`: índice gerado e rastreável.
- `html/ja-JP/jlpt.html`: configuração, sessão, cronômetro opcional e revisão.
- `js/japanese/jlpt.js`: seleção determinística balanceada, respostas em memória e resultado interno.
- `tests/japanese-jlpt-index.cjs`: sincronização, exclusão e snapshot.
- `tests/japanese-jlpt-contract.cjs`: oito contratos permanentes.
- `tests/JAPANESE_JLPT_HUMAN_REVIEW.md`: item excluído e limites editoriais.
- Hub e PWA atualizados; cache `idiomas-academy-v39`.

## Garantias

- A sessão nunca mistura níveis ou origens silenciosamente.
- Escolhas preservam alternativas e gabaritos originais.
- Respostas digitadas usam somente NFKC, trim, espaços e caixa; não há transliteração ou sinônimos.
- O resultado conta correspondências com o gabarito armazenado.
- Não existe escala oficial, nota de proficiência ou previsão de aprovação.
- Cronômetro é pessoal e não impõe limite.
- Respostas e sessão ficam somente em memória.
- Não há XP, SRS, certificado, desbloqueio, histórico ou autenticação paralela.
- Origem retorna ao player Kanji, que mantém seus bloqueios.

## Validação

- Contratos da Fase 12: **8/8**.
- Regressão: **41/41** grupos.
- Multidioma: **31/31** cenários.
- PWA: **130 recursos**, aproximadamente **11,79 MB**.
- A suíte integral será repetida imediatamente antes do commit.

## Validação visual pendente

A tentativa de iniciar o navegador integrado falhou antes de abrir a página:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Não há alegação de cobertura visual, responsiva, de tema, interação real ou console nesta fase.

## Pendências humanas

- As 757 questões N3–N1 continuam pendentes de revisão humana.
- A questão N4 excluída continua sem correção inferida.
- A validação mecânica não transforma a coleção em material oficial.

## Próxima fase

O plano decision-complete da Fase 13 está em `plan/japones_fase_13_hub_dashboard_release.md`.
