# Roadmap de implementação — Área de Japonês

## Governança

- Executar uma fase por vez, com testes, relatório, plano da fase seguinte e commit exclusivo.
- A fase seguinte possui autorização automática, mas só começa depois do fechamento da fase atual.
- Preservar IDs, progresso, SRS, autenticação, XP e compatibilidade multidioma.
- Não incluir alterações preexistentes nos commits do roadmap.
- Conteúdo linguístico que exigir julgamento humano permanece marcado como bloqueio editorial até revisão qualificada.

## Estado de fechamento mecânico — 2026-08-13

- [x] Fase 0 — baseline e inventário.
- [x] Fase 1 — correções objetivas e transparência pedagógica.
- [x] Fase 2 — auditoria editorial automatizada.
- [x] Fases 3A–3C — contrato textual e correções A1–B2.
- [x] Fases 4–6 — recuperação mecânica Kanji N3–N1.
- [x] Fase 7 — consolidação de recursos.
- [x] Fase 8 — escuta, pronúncia e shadowing.
- [x] Fase 9 — biblioteca de leitura.
- [x] Fase 10 — referência gramatical e formas.
- [x] Fase 11 — produção escrita guiada.
- [x] Fase 12 — preparação JLPT interna.
- [x] Fase 13 — hub por habilidades, Dashboard real e auditoria de release.

“Concluída” neste quadro significa implementação e validação mecânica local. Não significa aprovação editorial humana. O QA visual/console permanece pendente porque o navegador integrado não iniciou, conforme registrado no relatório da Fase 13.

## Fases

0. Baseline e inventário.
1. Correções objetivas e transparência pedagógica.
2. Auditoria editorial automatizada de japonês.
3A. Contrato textual e player do curso.
3B. Revisão editorial A1–A2.
3C. Revisão editorial B1–B2.
4. Recuperação do Kanji N3.
5. Recuperação do Kanji N2.
6. Recuperação do Kanji N1.
7. Consolidação de Kana, dicionário, minigame, escrita e SRS.
8. Escuta, pronúncia e shadowing.
9. Biblioteca de leitura graduada.
10. Referência gramatical e conjugação.
11. Produção escrita guiada.
12. Preparação JLPT.
13. Hub por habilidades, Dashboard e release.

## Contratos permanentes

- IDs persistidos não podem mudar sem migração explícita e testada.
- Métricas do Dashboard devem vir de eventos reais.
- Auditorias automáticas não substituem revisão humana de naturalidade e nuance.
- Recursos novos não entram no hub como publicáveis enquanto houver bloqueio editorial.
- Toda fase deve executar regressão, integração, multidioma, PWA e auditorias aplicáveis.
