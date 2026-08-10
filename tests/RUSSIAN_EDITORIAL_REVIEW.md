# Revisão editorial pendente — Russo

O curso russo está estruturalmente validado, mas ainda não deve ser anunciado como linguisticamente certificado.

## Correções técnicas realizadas

- Removida a mistura `Где você?` de uma alternativa do A1.
- Corrigida a palavra híbrida `ideшь` para `идёшь` no B1.
- Corrigidas novas misturas técnicas encontradas em frases, diálogos, áudio e tokens de A1–B2.
- Adicionada auditoria automática para tokens híbridos, português conhecido e tokens latinos isolados em campos russos.
- O inventário reproduzível para revisão humana está em `tests/RUSSIAN_EDITORIAL_OCCURRENCES.md`.

Execute `npm run audit:russian` para atualizar o relatório e `npm run audit:russian:check` para validar que não há erros técnicos bloqueadores nem divergência entre o relatório e os datasets.

## Revisão humana recomendada

Um revisor fluente deve percorrer A1–B2 e validar naturalidade, casos gramaticais, aspecto verbal, acentuação, traduções, distratores e correspondência entre texto e áudio. A validação automática detecta anomalias mecânicas; ela não certifica qualidade linguística.

## Fluxo de aprovação

1. Atualizar o inventário com `npm run audit:russian`.
2. Revisar primeiro o checklist consolidado de decisões únicas em `tests/RUSSIAN_EDITORIAL_OCCURRENCES.md`.
3. Para cada decisão, corrigir de forma consistente todos os campos associados (`sentence`, `audio`, `tokens` e diálogos).
4. Percorrer também os módulos A1–B2 completos; o inventário cobre anomalias de caracteres, não naturalidade ou precisão pedagógica.
5. Executar `npm test` após as correções.
6. Registrar nome do revisor, data, escopo e resultado abaixo.

## Aprovação linguística

- Status: **Pendente**
- Revisor fluente: _não informado_
- Data: _não informada_
- Escopo concluído: _não informado_
- Observações: _não informadas_

O status só pode mudar para **Aprovado** após a revisão integral A1–B2 por uma pessoa fluente. A conclusão automática desta auditoria não altera esse status.
