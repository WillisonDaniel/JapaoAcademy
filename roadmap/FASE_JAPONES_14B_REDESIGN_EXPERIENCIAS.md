# Plano de implementação — Fase 14B

## Objetivo

Aplicar a fundação Japão premium a Escuta, Leitura, Gramática, Escrita e Preparação JLPT, preservando IDs, controladores, conteúdo e regras atuais.

## Implementação

1. Remover os cinco blocos CSS inline e carregar `japanese-experience.css`.
2. Adicionar `japanese-experience` e modificador de página ao `body`.
3. Usar cabeçalho móvel compacto com botão de tema dedicado na primeira linha.
4. Inserir em cada página um hero interno com eyebrow, título, descrição e indicadores baseados nas contagens já públicas.
5. Reorganizar componentes existentes somente por markup/classes:
   - Escuta: controles segmentados e player central.
   - Leitura: filtros, cards, leitor de 70ch, apoios e questões.
   - Gramática: filtros, lookup destacado e detalhe estruturado.
   - Escrita: modos como stepper, prompt, banco, resposta e privacidade.
   - JLPT: configuração em etapas, sessão, navegação e resultado.
6. Não implementar lotes nesta fase; a redução de DOM pertence à Fase 14C.

## Testes e aceite

- Executar os cinco contratos japoneses específicos e `npm.cmd test`.
- Repetir os fluxos funcionais já usados no baseline.
- Validar 1280×900 e 390×844, claro/escuro, foco, teclado, overflow e console.
- Registrar `tests/FASE_JAPONES_14B_REDESIGN_EXPERIENCIAS.md` e criar o plano decision-complete da Fase 14C.
- Commit exclusivo sem `.txt`; prosseguir automaticamente.
