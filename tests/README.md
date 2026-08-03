# Etapa 24 - Testes de regressao automatizados

Esta pasta protege a base estavel validada nas Etapas 22 e 23.

## Como executar

No terminal, a partir da raiz do projeto:

```powershell
npm.cmd test
```

Em terminais que nao bloqueiam o atalho do npm, tambem funciona:

```text
npm test
```

## O que e verificado

- sintaxe de todos os arquivos JavaScript;
- existencia das 19 paginas HTML e de suas referencias locais;
- ordem de carregamento de `constants.js` e `state.js`;
- estrutura, IDs e atividades dos oito cursos principais;
- totais das bases de hiragana, katakana, kanji, phrasal verbs, pronuncia e minigame;
- mutadores e pontes legadas do `AppState`;
- atualizacao de intervalo, facilidade e indice do SRS;
- correcoes criticas da Etapa 22, incluindo B2 modulo 12, Firebase, Service Worker e rolagem das aulas.

O processo termina com codigo diferente de zero se qualquer verificacao falhar, permitindo seu uso futuro em integracao continua.
