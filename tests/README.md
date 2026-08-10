# Testes automatizados - estabilização multidioma

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

## O que é verificado

- sintaxe de todos os arquivos JavaScript;
- existência das 33 páginas HTML e de suas referências locais;
- ordem de carregamento de `constants.js` e `state.js`;
- estrutura, IDs e atividades dos 16 datasets A1–B2 dos quatro idiomas;
- totais das bases de hiragana, katakana, kanji, phrasal verbs, pronuncia e minigame;
- mutadores e pontes legadas do `AppState`;
- sincronizacao automatica do progresso e XP apos login com Google;
- dashboard global `Meu Progresso`: Japonês, Inglês, Espanhol e Russo agregados ou filtrados, acesso autenticado, primeiro acesso, meta diária, atividade semanal, SRS, redirecionamentos e sincronização por usuário;
- medicao de sessoes da Etapa 29: modelo v2, migracao v1, tempo ativo, pausa por pagina oculta ou inatividade, retomada, conclusao, descarte de sessoes curtas e temporizador unico;
- retencao de 200 sessoes e 366 agregados diarios, idempotencia por ID e mesclagem local/remota sem soma dupla;
- estatisticas avancadas da Etapa 29: periodos 7/30/90, filtros por idioma e atividade, formulas documentadas, dados parciais, distribuicoes textuais e divisao por zero;
- graficos de aprendizado da Etapa 29: evolucao diaria por minutos, atividades ou revisoes, distribuicao por idioma ou atividade, SVG nativo, alternativas textuais e estados sem dados;
- calendario de estudos da Etapa 29: navegacao mensal, resumo por dia com tempo ativo, sessoes, atividades, idiomas e precisao SRS (acertos/erros);
- historico de revisoes SRS da Etapa 29: modelo v3, registro de ate 500 tentativas por usuario, deduplicacao por ID, filtros de periodo/idioma/resultado e paginacao;
- insights personalizados locais da Etapa 29: motor deterministico por regras locais sem IA, maximo de 3 cards prioritarios com acoes diretas;
- compatibilidade do dashboard com dados antigos, JSON corrompido, Firebase indisponivel, nomes potencialmente maliciosos e estados vazios;
- atualizacao de intervalo, facilidade e indice do SRS;
- independência dos 16 decks SRS, migração multidioma v2 e preservação dos backups;
- paridade dos índices leves de cursos, dicionários e minigame com os datasets completos;
- auditoria editorial técnica russa e sincronização do relatório de revisão humana;
- instalação do PWA, limite de 12 MB, dependências do precache, atualização de cache e contrato offline do shell, Dashboard e área russa;
- correcoes criticas da Etapa 22, incluindo B2 modulo 12, Firebase, Service Worker e rolagem das aulas.

O processo termina com codigo diferente de zero se qualquer verificacao falhar, permitindo seu uso futuro em integracao continua.
