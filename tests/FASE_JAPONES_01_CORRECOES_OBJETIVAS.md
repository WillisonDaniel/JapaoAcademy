# Fase 1 — Correções objetivas e transparência pedagógica

Data: 13/08/2026
Commit de entrada: `0daba45`
Status: implementação concluída; validação automatizada aprovada; validação visual pendente por indisponibilidade do navegador.

## Alterações realizadas

- 16 arquivos pertencentes ao roadmap foram criados ou modificados nesta entrega, incluindo baseline, planos, relatório, testes e dados derivados.
- Corrigido o banner de gramática para exibir N5, N4, N3, N2 e N1 conforme o modo real.
- Renomeada a avaliação do canvas para cobertura aproximada da forma, preservando limites e XP.
- Removido o vetor genérico de três traços; ausência de vetor real agora produz mensagem explícita.
- Corrigido `ソン` para `ソング` (`songu`) no vocabulário e no quiz de Katakana.
- Adicionado encaminhamento do módulo 6 de Hiragana à tabela completa do módulo 8.
- Atualizado o hub Kanji com contagens reais de registros e caracteres únicos.
- Adicionado aviso de que as trilhas são referências pedagógicas e não listas oficiais do JLPT.
- Removidas alegações de conclusão integral dos 2.136 Jōyō Kanji da página e do módulo final N1.
- Marcado o conteúdo linguístico reformulado do módulo final N1 como `pending-human-review`.
- Renomeada a certificação B2 como certificado de conclusão da trilha interna.
- Mantidas as chaves `b2_certified`, `b2_score`, `cert_date` e `cert_hash` e o limiar atual de aprovação.
- Regenerado o índice do dicionário japonês sem alterar sua contagem de 3.271 entradas.

## Contratos adicionados

Foi criado um novo grupo de regressão para verificar:

- mapeamento dos cinco níveis Kanji;
- ausência de vetor inventado;
- mensagens de indisponibilidade online/offline;
- linguagem de forma e cobertura;
- preservação das três faixas de XP;
- sincronização de Katakana, Hiragana e dicionário;
- contagens Kanji reais;
- ausência das alegações de 2.136 caracteres concluídos;
- nomenclatura transparente do certificado e da avaliação B2.

## Resultados diretamente verificados

| Validação | Resultado |
|---|---:|
| Regressão | 28/28 |
| Integração | 20/20 |
| Multidioma | 26/26 |
| Índice de cursos | 521 módulos |
| Dicionário japonês | 3.271 entradas |
| Minigame Kanji | 1.015 cards |
| PWA | 114 recursos, 10,66 MB |
| `git diff --check` | sem erros |

## Validação visual

Não concluída. O navegador do Codex falhou três vezes antes de abrir a aplicação com:

`failed to write kernel assets: O sistema não pode encontrar o caminho especificado. (os error 3)`

Consequentemente, não há evidência direta nesta fase para a matriz Curso, Hiragana, Katakana, hub Kanji, N3 e N1 em 390 px/desktop, temas claro/escuro ou console do navegador. Essa pendência deve ser retomada quando o navegador estiver funcional.

## Compatibilidade

- Nenhum ID de módulo ou card foi alterado.
- Nenhuma chave de progresso ou SRS foi alterada.
- Nenhuma regra de desbloqueio, SM-2 ou autenticação foi alterada.
- A remoção preexistente de `.txt` não pertence a esta fase e não deve entrar no commit.

## Pendências editoriais

- O módulo final N1 contém texto japonês reformulado e marcado para revisão humana.
- A correção `ソング` é mecanicamente validada, mas integrará a auditoria editorial permanente da Fase 2.
