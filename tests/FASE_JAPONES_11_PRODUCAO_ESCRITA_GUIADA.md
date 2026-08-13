# Fase 11 — Produção escrita guiada

## Resultado

A Fase 11 criou uma oficina privada baseada nos construtores de frase A1–B2 já existentes. Ela compara a produção somente com o modelo registrado e nunca classifica variantes como incorretas, não naturais ou sem proficiência.

## Inventário

- Modelos examinados: **210**.
- Modelos publicados: **208**.
- Modelos pendentes de revisão humana: **208**.
- Exclusões sem inferência: **2**:
  - `b1_mod_10`, divergência `Mae` / `まえ`;
  - `b1_mod_18`, divergência `かもしれません` / `かもしれん`.
- Snapshot determinístico: `75bac8136c69014f`.
- Índice leve: **91.919 bytes**.

As duas divergências foram inventariadas em `tests/JAPANESE_WRITING_HUMAN_REVIEW.md`; nenhuma versão foi escolhida automaticamente como correta.

## Implementação

- `database/ja-JP/data_escrita_index.js`: 208 modelos explicitamente rastreáveis.
- `html/ja-JP/escrita.html`: biblioteca e oficina em três modos.
- `js/japanese/writing.js`: ordenação acessível, cópia, reconstrução e comparação local.
- `tests/japanese-writing-index.cjs`: gerador, exclusões e snapshot.
- `tests/japanese-writing-contract.cjs`: sete contratos permanentes.
- Hub japonês e PWA atualizados; cache `idiomas-academy-v38`.

## Comportamento pedagógico e privacidade

- Modos: ordenar blocos, copiar modelo e reconstruir sem modelo visível.
- Normalização restrita a Unicode NFKC e espaços para comparação mecânica.
- Feedback usa “corresponde” ou “difere do modelo registrado”.
- Uma diferença não é apresentada como erro linguístico.
- Texto digitado fica somente na memória da página e não é salvo ou enviado.
- A atividade agregada nunca inclui o conteúdo produzido.
- Não há XP, SRS, certificado, desbloqueio, nota ou persistência paralela.
- Áudio usa somente a frase japonesa explícita.
- Origem retorna ao curso, que continua responsável por aplicar bloqueios.

## Validação

- Índice de escrita: **208 modelos / 2 exclusões**, sincronizado.
- Contratos da Fase 11: **7/7**.
- Regressão: **40/40** grupos.
- Multidioma: **30/30** cenários.
- PWA: **127 recursos**, aproximadamente **11,32 MB**.
- A suíte integral será registrada novamente no fechamento imediatamente anterior ao commit.

## Validação visual pendente

A tentativa de iniciar o navegador integrado falhou antes de abrir a página:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Não há alegação de cobertura visual, responsiva, de temas, áudio real ou console. A matriz prevista permanece pendente até o navegador estar funcional.

## Pendências humanas

- Os 208 modelos publicados continuam `pending-human-review`.
- As duas divergências excluídas exigem decisão editorial qualificada.
- Validação mecânica não substitui revisão de naturalidade, tradução ou segmentação.

## Próxima fase

O plano decision-complete da Fase 12 está em `plan/japones_fase_12_preparacao_jlpt.md`.
