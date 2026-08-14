# Fase Japones 16 - Corpus e rastreabilidade editorial

## Resultado

A fundacao da auditoria editorial integral foi materializada sem versionar livros, texto extraido, OCR, imagens ou ferramentas.

| Item | Resultado |
|---|---:|
| PDFs catalogados | 20 |
| DOCX catalogado | 1 |
| Paginas PDF | 4.238 |
| Paginas com camada textual | 398 |
| Paginas processadas por OCR | 3.840 |
| Confianca media OCR | 86,27 |
| Paginas abaixo do limiar | 144 |
| Segundas tentativas verticais | 180 |
| MP3 reservados para a Fase 6 auditiva | 464 |
| Fontes com SHA-256 e funcao pedagogica | 21/21 |
| Amostras visuais renderizadas | 60 |

O catalogo versionado esta em `tests/JAPANESE_EDITORIAL_SOURCES.json`. Ele registra caminho relativo, SHA-256, tamanho, paginas, criptografia, funcao pedagogica, modo e qualidade de extracao. O hash agregado dos 464 audios permite detectar alteracoes no corpus sem versionar uma lista extensa nem antecipar a auditoria auditiva.

## OCR local e direitos autorais

- Tesseract 5.5.3 e dependencias foram instalados em um ambiente portatil do conda-forge sob `scratch/tools/tesseract-env/`.
- Modelos usados: `jpn`, `jpn_vert`, `eng`, `por` e `osd`.
- A extracao usa camada textual quando existente e OCR a 240 dpi nas paginas digitalizadas.
- Paginas abaixo do limiar de confianca recebem segunda tentativa vertical; a melhor leitura e selecionada por confianca e cobertura textual.
- Imagens de baixa confianca sao preservadas em `scratch/japanese-corpus/inspection/` para verificacao visual.
- Texto integral, TSV, imagens, executaveis e cache permanecem fora do Git.
- O script e retomavel: paginas concluidas nao sao recalculadas sem `--force`.

Referencias tecnicas da ferramenta:

- documentacao oficial: https://tesseract-ocr.github.io/tessdoc/
- modelos rapidos oficiais: https://github.com/tesseract-ocr/tessdata_fast
- distribuicoes Windows reconhecidas pela documentacao: https://github.com/tesseract-ocr/tessdoc/blob/main/Installation.md

## Inspecao visual do corpus

Foram renderizadas as paginas inicial, intermediaria e final de cada PDF. A montagem geral esta somente em:

`scratch/japanese-corpus/samples/corpus-master-montage.jpg`

A amostra confirmou:

- todos os 20 PDFs abrem e renderizam;
- os livros esperados correspondem aos identificadores catalogados;
- ha mistura de texto horizontal, tabelas, exercicios, furigana e layouts densos;
- alguns Quartet possuem barras pretas do proprio arquivo, sem perda do miolo;
- nenhum PDF exige senha interativa; o answer key do Quartet II aceita a credencial vazia incorporada ao fluxo de leitura.

## Interfaces editoriais criadas

- `tests/JAPANESE_EDITORIAL_LEDGER.json`: ledger central, inicialmente vazio, com estados `approved`, `corrected`, `unresolved` e `excluded`.
- `tests/japanese-editorial-ledger.cjs`: contrato de fontes, hashes, paginas, decisoes e referencias.
- `tests/japanese-corpus-audit.py`: hash, inventario, extracao nativa, OCR horizontal/vertical, confianca, amostragem visual e retomada.
- `tests/regression.cjs`: a varredura de arquivos publicos ignora explicitamente `livros/` e `scratch/`, impedindo que ferramentas e documentos privados sejam confundidos com assets do site.
- scripts npm:
  - `audit:japanese:sources`;
  - `audit:japanese:sources:local`;
  - `audit:japanese:ocr`.

O contrato impede:

- aprovacao ou correcao sem referencia localizada;
- referencia a fonte inexistente ou pagina fora do livro;
- decisao de naturalidade ou conflito sem duas fontes independentes;
- estado editorial fora do vocabulario aprovado;
- divergencia entre o catalogo e o corpus local quando o modo local e executado.

## Qualidade de extracao

Os totais finais de confianca, tentativas verticais e paginas encaminhadas para inspecao ficam registrados por fonte no catalogo e no arquivo local `scratch/japanese-corpus/coverage.json`.

- confianca media nas 3.840 paginas OCR: 86,27;
- paginas abaixo do limiar final: 144;
- paginas que acionaram uma segunda tentativa vertical: 180;
- paginas ausentes: zero.

O OCR e um indice de busca e localizacao, nao uma autoridade textual. Toda decisao editorial continuara exigindo conferencia da pagina renderizada quando o trecho vier de OCR, principalmente em furigana, caracteres semelhantes, texto vertical e tabelas.

## Preservacao do worktree

- A remocao preexistente de `.txt` nao integra esta fase.
- `livros/` e `scratch/` permanecem fora do commit.
- As alteracoes locais anteriores nos datasets e relatorios japoneses nao foram revertidas nem absorvidas pelo commit da Fase 16.
- O baseline funcional anterior permaneceu como referencia: 43/43 grupos de regressao, 21/21 cenarios de integracao e 32/32 cenarios multidioma.

## Validacao

- hashes locais das 21 fontes: aprovados;
- inventario: 20 PDFs, um DOCX, 4.238 paginas e 464 audios;
- amostragem visual: 60/60 paginas renderizadas;
- contrato do ledger e do catalogo: aprovado;
- extracao/OCR integral: aprovada, sem paginas ausentes;
- `npm.cmd test`: aprovado;
- `git diff --check`: aprovado.

## Proxima fase

O plano decision-complete da Fase 17 esta em `plan/japones_fase_17_alteracoes_locais_158_pendencias.md`.
