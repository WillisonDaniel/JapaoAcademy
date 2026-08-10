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
