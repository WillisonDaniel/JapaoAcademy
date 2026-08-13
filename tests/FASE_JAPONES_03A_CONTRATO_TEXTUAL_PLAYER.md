# Fase 3A — Contrato textual e player japonês

## Estado de entrada

- Commit-base: `634aaea` (`test: adiciona auditoria editorial japonesa`).
- Inventário editorial: 7.839 ocorrências, sem bloqueadores técnicos.
- Baseline: 105 módulos japoneses A1–B2.
- A remoção preexistente de `.txt` permaneceu fora do escopo.

## Implementação concluída

- Criado `normalizeTextContent()` em `js/course/moduleNormalizer.js`.
- O contrato separa:
  - `displayText`;
  - `audioText`;
  - `furigana`;
  - `romaji`;
  - `translation`;
  - `scenario`.
- `stage1_context.audioGuide` agora possui uma representação normalizada adicional em `context.audio`, sem remoção do campo legado.
- Cartões de vocabulário e linhas de diálogo recebem `content`, preservando seus aliases anteriores.
- `canDo` é exposto apenas quando declarado no módulo ou contexto; nenhum objetivo é fabricado.
- O player japonês passou a preferir o contrato novo e mantém fallback para módulos antigos.
- Tradução e indicação de cena são renderizadas em regiões distintas.
- Furigana e Romaji reutilizam `getOpcoesLeitura()` e as chaves persistidas existentes. Os defaults continuam Furigana ligado e Romaji desligado.
- O TTS recebe exclusivamente `audioText` quando o contrato está presente.
- Os novos botões de áudio usam listener e atributo de dados, sem interpolar o texto em um handler `onclick`.
- Texto de conteúdo, tradução, cenário e falante passa pela proteção HTML antes da inserção.
- Outros idiomas permanecem no caminho legado, salvo quando fornecerem explicitamente o novo contrato.

Nenhum dataset, ID, XP, progresso, SRS, certificado ou desbloqueio foi alterado nesta fase.

## Testes

- Criado `tests/course-text-contract.cjs` com **8/8 contratos aprovados**.
- Adicionado `test:japanese-text` ao `package.json` e à suíte completa.
- Regressão ampliada para **30/30 grupos aprovados**.
- Integração: **20/20 cenários aprovados**.
- Multidioma: **26/26 cenários aprovados**.
- Auditoria japonesa: **0 bloqueadores**, 7.839 ocorrências editoriais preservadas.
- Índices de cursos, dicionário e minigame: aprovados.
- PWA/offline: **114 recursos**, aprovado.
- `npm.cmd test`: aprovado.
- `git diff --check`: aprovado.

## Validação visual

A validação visual em 390 px/desktop e temas claro/escuro não pôde ser executada. A nova tentativa de iniciar a sessão do navegador integrado falhou antes de abrir a página com:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Consequentemente, não há alegação de cobertura visual nem de console nesta fase. A verificação continua pendente para uma sessão em que o navegador integrado consiga inicializar.

## Limites editoriais

- O contrato permite conteúdo correto, mas não corrige por si só a língua japonesa dos datasets.
- Os 105 módulos continuam usando majoritariamente campos legados até as migrações editoriais seguintes.
- Todo japonês novo ou reescrito nas fases 3B–6 deve permanecer marcado como pendente de revisão humana até aprovação qualificada.

O plano decision-complete da próxima etapa está em `plan/japones_fase_03b_correcao_a1_a2.md`.
