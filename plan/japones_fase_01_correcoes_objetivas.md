# Plano de implementação — Fase 1: Correções objetivas

## Objetivo

Corrigir problemas objetivos de apresentação e transparência pedagógica sem alterar desbloqueio, XP, SRS, progresso, IDs ou arquitetura.

## Alterações

- Mapear explicitamente os modos Kanji para N5–N1 no banner de gramática.
- Renomear a avaliação do canvas para cobertura aproximada da forma, preservando seus limites e recompensas.
- Remover o vetor genérico usado quando a ordem real dos traços não está disponível.
- Corrigir `ソン` para `ソング` e sincronizar quiz e índice do dicionário.
- Explicar que o módulo guiado de Yōon/Sokuon cobre combinações principais.
- Exibir contagens reais de registros e caracteres únicos por trilha Kanji.
- Informar que as trilhas são referências pedagógicas, não listas oficiais do JLPT.
- Remover alegações de domínio integral dos 2.136 Jōyō Kanji.
- Renomear o certificado B2 como certificado de conclusão da trilha interna.

## Compatibilidade

- Preservar todos os IDs e números de módulos.
- Preservar chaves do certificado e o limiar atual da avaliação.
- Preservar as regras de XP da verificação do canvas.
- Regenerar somente índices derivados de datasets alterados.

## Validação

- Adicionar contrato de integridade pedagógica japonesa à regressão.
- Executar `npm.cmd test`.
- Validar Curso, Hiragana, Katakana, hub Kanji, N3 e N1 em 390 px e desktop, temas claro/escuro, com console limpo.

## Fechamento

- Gerar relatório da Fase 1.
- Criar plano decision-complete da Fase 2.
- Fazer commit exclusivo sem incluir `.txt`.
