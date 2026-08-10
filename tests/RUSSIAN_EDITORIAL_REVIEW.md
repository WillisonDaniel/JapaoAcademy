# Revisão editorial integral — Russo

## Resultado

- Status: **Concluída — revisão editorial integral baseada em fontes**
- Responsável: **Codex (revisão linguística e técnica assistida por referências)**
- Data: **2026-08-10**
- Escopo: **96 módulos — A1, A2, B1 e B2**
- Auditoria automática: **0 erros bloqueadores e 0 ocorrências pendentes**

Esta rodada percorreu integralmente os quatro datasets do curso russo. Foram revisados títulos, descrições, missões, guias, regras e fórmulas gramaticais, exemplos, vocabulário, traduções, dicas, frases, tokens, textos de áudio, diálogos, perguntas, alternativas e explicações dos quizzes.

## Fontes de consulta

- Svetlana Leshchenko, *Dicionário Russo-Português*.
- Marina Dolenga, *A Língua Russa — Gramática Elementar, com exercícios*.

As fontes foram usadas para conferir vocabulário, regência, casos, flexões, construções e equivalências em português. Nenhum trecho extenso das obras foi incorporado ao projeto.

## Correções realizadas

- Regência e casos: locativo em nomes de rua, instrumental, genitivo, acusativo e concordância nominal.
- Morfologia e aspecto: passado, conjugação, aspecto perfectivo/imperfectivo, particípios e gerúndios modernos.
- Naturalidade: pedidos, cartas, diálogos, exemplos e traduções que continham decalques ou construções pouco naturais.
- Consistência editorial: remoção de palavras em português, inglês, espanhol e vietnamita inseridas em campos russos.
- Concordância e pontuação: gênero do falante, vírgulas em conectores, formas adjetivais e erros tipográficos.
- Precisão pedagógica: substituição de regras absolutas por formulações compatíveis com exceções e uso real.
- Nível B2: retirada de promessas de “fluência nativa” e distinção explícita entre conclusão interna do curso e certificação oficial externa.
- Integridade técnica: sincronização de frase, tokens e áudio, texto e áudio de diálogos, palavra e áudio de vocabulário e índices corretos dos quizzes.
- Índice do dicionário: regenerado para publicar as versões revisadas usadas pela interface.

## Validação reproduzível

- `npm run audit:russian` atualiza o relatório de caracteres e tokens inesperados.
- `npm run audit:russian:check` confirma que o relatório corresponde aos datasets.
- `npm run audit:russian:integral` valida os 96 módulos, textos, áudios, tokens, diálogos, vocabulário, quizzes e correções editoriais obrigatórias.
- `npm test` inclui as duas validações russas no fluxo principal.

O inventário atual está em `tests/RUSSIAN_EDITORIAL_OCCURRENCES.md` e não contém decisões pendentes.

## Limite da aprovação

Esta aprovação registra uma revisão editorial integral feita pelo assistente com apoio das duas fontes indicadas. Ela satisfaz o critério interno de revisão do conteúdo nesta rodada, mas o curso não deve ser anunciado como linguisticamente certificado por falante nativo, parecer de tradutor juramentado ou acreditação linguística externa. Uma segunda leitura por professor ou falante nativo continua recomendável como controle editorial independente, sem permanecer como bloqueador técnico desta versão.
