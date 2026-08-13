# Fase 14A — Fundação visual japonesa

## Resultado

- Criada a camada compartilhada `japanese-experience.css` com identidade Japão premium.
- Hub reorganizado com hero, resumo real, quatro grupos e doze cards de recursos.
- Curso principal destacado sem alterar sua rota, progressão ou dados.
- Transparência JLPT/editorial continua pública e visível.
- Cabeçalho móvel compactado de 415–472 px para 277 px no hub em 390×844.
- Tema permanece acessível na primeira linha móvel; os demais atalhos ficam em trilho horizontal de 54 px.
- Seção japonesa do Dashboard recebeu ícones e superfícies próprias sem alterar cálculos ou persistência.
- Asset visual incluído no precache; orçamento PWA atual: 131 recursos e aproximadamente 11,82 MB.

## Validação

- Desktop 1280×900: sem overflow horizontal, quatro grupos presentes e grid destacado ocupando duas colunas.
- Mobile 390×844: sem overflow horizontal, controles mínimos de 44 px e cabeçalho abaixo do limite de 300 px.
- Temas claro e escuro exercitados no navegador integrado.
- Dashboard autenticado de QA: dois cartões japoneses reais exibidos, sem alterar a fixture.
- Zero erros de console nas páginas verificadas.
- `npm.cmd test`: 42/42 regressões, 21/21 integrações e 32/32 cenários multidioma.

## Compatibilidade preservada

- Nenhuma mudança em datasets, AppState, Firebase, SRS, XP, desbloqueio ou chaves persistidas.
- A remoção preexistente de `.txt` permanece fora do commit.
