# Fase 22 — Auditoria auditiva dos 464 MP3

## Objetivo

Auditar separadamente o corpus de áudio do Genki, associando cada arquivo ao livro, unidade, faixa e script correspondente sem misturar presença de arquivo com aprovação linguística ou sonora.

## Estado de entrada

- 464 MP3 inventariados e preservados em `livros/`.
- Hash agregado e metadados do corpus registrados em `tests/JAPANESE_EDITORIAL_SOURCES.json`.
- Auditoria textual consolidada em 23.534 decisões.
- Conteúdo dos áudios, extrações e formas de onda permanecem fora do Git.

## Implementação

1. Criar um manifesto local em `scratch/japanese-audio/` com caminho, SHA-256, duração, canais, taxa de amostragem, pico, silêncio inicial/final e possível duplicidade acústica.
2. Associar cada MP3 ao volume, lição, exercício e identificador de faixa usando nomes, índices editoriais e páginas localizadas dos livros.
3. Comparar a fala com o script correspondente apenas quando a fonte fornecer vínculo inequívoco; divergências sem script localizado ficam `unresolved`.
4. Classificar cada faixa como `approved`, `corrected`, `unresolved` ou `excluded`, registrando arquivo, script-alvo, fonte/página, confiança e justificativa.
5. Verificar cortes, corrupção, silêncio excessivo, duplicatas, arquivo trocado, registro, velocidade e correspondência textual.
6. Não copiar transcrições integrais protegidas para arquivos versionados; o ledger conterá somente identificadores, resultados e excertos mínimos indispensáveis.
7. Alterar assets públicos somente se um arquivo utilizado pela plataforma estiver incorreto e a substituição estiver autorizada pelo corpus existente.

## Amostragem e aceitação

- Validar tecnicamente 464/464 arquivos.
- Escutar integralmente toda faixa suspeita e uma amostra estratificada das faixas tecnicamente normais por volume, lição e tipo de exercício.
- Exigir escuta integral para conceder `approved`; metadados, hash ou correspondência de nome isoladamente não aprovam áudio.
- Confirmar duplicatas por impressão acústica e audição, não apenas por tamanho do arquivo.
- Registrar limitações de reprodução, qualidade ou ausência de script sem forçar decisão positiva.

## Fechamento

- Produzir relatório de cobertura, vínculos, problemas, correções e casos abertos.
- Executar a suíte textual completa para garantir que a fase auditiva não alterou conteúdo, SRS, XP, progresso ou persistência.
- Fazer commit exclusivo apenas dos manifestos resumidos, ledger, testes e relatório; manter MP3, transcrições e artefatos em `livros/` e `scratch/`.
- A fase começa somente em uma execução posterior dedicada.
