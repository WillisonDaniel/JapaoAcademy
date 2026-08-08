# 🇪🇸 Espanhol Academy - Especificação Técnica e Pedagógica

## 🎯 1. Visão Geral
O **Espanhol Academy** é a mais nova expansão do ecossistema **Idiomas Academy**, trazendo uma jornada de aprendizado imersiva, data-driven e gamificada que abrange do **Nível A1 ao B2 (CEFR)**, além de arenas de minigames dedicados e um **Dicionário Interativo de Falsos Amigos & Regionalismos**.

A plataforma mantém o padrão arquitetural e o motor JS unificado (`app.js`), integrando o sistema de 5 estágios pedagógicos por módulo, síntese de áudio multilíngue, retenção por gamificação (XP, Vidas, Combos, Streaks) e sincronização.

---

## 🎨 2. Identidade Visual & UX/UI Design

| Elemento | Especificação |
| :--- | :--- |
| **Paleta Principal** | **Amarelo Ouro / Terracota / Vermelho Hispanófono** (`#FF5722`, `#FFC107`, `#E64A19`, `#1E1E2F`) |
| **Estética Visual** | Dark mode moderno com glassmorphism, gradientes quentes e micro-animações |
| **Badge de Nível** | 🟢 A1 (Iniciante) \| 🟡 A2 (Básico+) \| 🟠 B1 (Autônomo) \| 🔴 B2 (Fluência Avançada) |
| **Voz do Áudio Synth** | `es-ES` (Espanha - Castelhano) e `es-MX` / `es-AR` (América Latina) |

---

## 🧱 3. Arquitetura de Arquivos e Integração

```
WIP/
 ├── hub_idiomas.html                     # [MODIFICAR] Adicionar Card do Espanhol Academy
 ├── hub_espanhol.html                    # [NOVO] Dashboard principal do curso de Espanhol
 ├── espanhol_curso.html                  # [NOVO] Player do curso em 5 estágios
 ├── espanhol_falsos_amigos.html          # [NOVO] Arena/Quiz de Falsos Cognatos
 ├── espanhol_minigame_conjugacao.html    # [NOVO] Arena Arcade de Conjugação Rápida
 ├── espanhol_dicionario.html             # [NOVO] Dicionário Interativo & Regionalismos
 ├── js/
 │    ├── data_curso_espanhol_a1.js       # [NOVO] Banco de Dados Módulos A1 (30 Módulos)
 │    ├── data_curso_espanhol_a2.js       # [NOVO] Banco de Dados Módulos A2 (30 Módulos)
 │    ├── data_curso_espanhol_b1.js       # [NOVO] Banco de Dados Módulos B1 (24 Módulos)
 │    ├── data_curso_espanhol_b2.js       # [NOVO] Banco de Dados Módulos B2 (24 Módulos)
 │    └── data_espanhol_dicionario.js     # [NOVO] Dados de Falsos Cognatos, Heterotônicos e Países
 ├── app.js                               # [MODIFICAR] Suporte ao idioma ES e rotas de XP
 └── style.css                            # [MODIFICAR] Variáveis e temas do Espanhol
```

---

## 🗺️ 4. Mapa Curricular Completo (108 Módulos de A1 a B2)

### 🟢 Nível A1: Espanhol de Sobrevivência (30 Módulos)
1. **Saludos y Despedidas** (*¡Hola!, Buenos días, Buenas noches, Hasta luego, Chau*)
2. **Presentaciones Personales** (*Me llamo..., Soy de..., Mucho gusto, Encantado/a*)
3. **Las Palabras Mágicas** (*Por favor, Muchas gracias, De nada, Disculpe / Perdone*)
4. **¿Sí o No? y Afirmaciones** (*Sí, No, Claro, Por supuesto, Tal vez, No lo sé*)
5. **Personas y Pronombres Sujeto** (*Yo, tú, él, ella, usted, nosotros, ellos*)
6. **Países y Nacionalidades** (*España, México, Argentina, Colombia, Brasil, etc.*)
7. **Profesiones y Trabajos I** (*Médico, profesor, estudiante, camarero, ingeniero*)
8. **Ser vs. Estar I** (*Yo soy alto/brasileño vs. Yo estoy cansado/aquí*)
9. **La Arte de Preguntar** (*¿Cómo?, ¿Dónde?, ¿Cuándo?, ¿Por qué?, ¿Quién?, ¿Cuánto?*)
10. **Números 1 a 30 y la Edad** (*Tengo X años, uno, dos, tres...*)
11. **Demonstrativos (Esto, Eso, Aquello)** (*Este libro, esa mesa, aquel coche*)
12. **Kit de Sobrevivência Pessoal** (*El móvil, las llaves, la cartera, las gafas, la mochila*)
13. **Lugares Esenciales de la Ciudad** (*El hotel, la estación, la farmacia, el banco, la plaza*)
14. **La Casa y la Habitación** (*La cama, la mesa, la silla, la ventana, el baño*)
15. **Posesivos Básicos** (*Mi, tu, su, nuestro/a, vuestro/a*)
16. **En el Restaurante (Pedir Comida)** (*Para mí..., Quisiera..., La cuenta, por favor*)
17. **Comida y Bebida I** (*Agua, café, té, pan, carne, pescado, arroz, fruta*)
18. **Sabores y Gustos** (*Me gusta / No me gusta, dulce, salado, picante, amargo*)
19. **Compras y Precios** (*¿Cuánto cuesta?, Euros, Pesos, Barato, Caro*)
20. **En la Tienda y Supermercado** (*Pagar en efectivo / con tarjeta, la bolsa*)
21. **¿Qué hora es?** (*Es la una, Son las cuatro y media, En punto, Cuarto*)
22. **Días de la Semana y Meses** (*Lunes a domingo, Enero a diciembre*)
23. **Momentos del Día y Frecuencia** (*Por la mañana, por la tarde, por la noche, siempre, nunca*)
24. **Verbos de Rutina I (Presente)** (*Levantarse, desayunar, trabajar, comer, dormir*)
25. **Verbos de Movimiento** (*Ir, venir, llegar, salir, volver*)
26. **Medios de Transporte** (*El metro, el autobús/camión/colectivo, el tren, el taxi*)
27. **Perdido en la Ciudad (Direções)** (*A la izquierda, a la derecha, todo recto, cerca, lejos*)
28. **El Tiempo Climático** (*Hace frío, hace calor, está lloviendo, hace sol*)
29. **Introducción a los Falsos Amigos** (*Embarazada, Exquisito, Polvo, Tapas, Balcón*)
30. **Desafío Final A1: Simulación de Viaje** (*Check-in + Pedir comida + Orientación urbana*)

---

### 🟡 Nível A2: Comunicação Cotidiana & Passado (30 Módulos)
1. **Verbos Regulares no Passado (Indefinido)** (*Hablé, comí, viví*)
2. **Verbos Irregulares Clássicos** (*Fui, estuve, tuve, hice, vine*)
3. **Marcadores Temporais do Passado** (*Ayer, anoche, la semana pasada, el año pasado*)
4. **Relatando o Fim de Semana / Viagem** (*"El sábado fui al cine y comí paella"*)
5. **Biografias e Marcos da Vida** (*Nacer, estudiar, mudarse, casarse*)
6. **Como as Coisas Eram (Imperfecto)** (*Hablaba, comía, era, iba, veía*)
7. **Infância e Hábitos Antigos** (*"Cuando era niño, jugaba en la calle"*)
8. **Indefinido vs. Imperfecto** (*"Mientras estudiaba, sonó el teléfono"*)
9. **Pretérito Perfecto (Haber + Participio)** (*He hablado, has comido, hemos ido*)
10. **Comparando Épocas e Mudanças** (*Antes vs. Ahora, Más que, Menos que, Tan... como*)
11. **El Verbo "Gustar" y Similares** (*Me encanta, me molesta, me interesa, me duele*)
12. **Adjetivos para Descrever Pessoas e Lugares** (*Simpático, aburrido, acogedor, ruidoso*)
13. **Comparativos y Superlativos** (*El mejor, el peor, grandísimo, facilísimo*)
14. **Expressando Desejos e Intenções** (*Querer + Infinitivo, Me gustaría..., Tengo ganas de...*)
15. **Pedindo e Dando Conselhos Leves** (*Deberías..., Tienes que..., Es mejor...*)
16. **Partes del Cuerpo Humano** (*La cabeza, la espalda, el estómago, los pies*)
17. **En el Médico / En la Farmacia** (*Me duele la cabeza, tengo fiebre, gripe, jarabe*)
18. **Estada em Hotéis e Hostales** (*Reservas, problemas con la habitación, pedir aire/calefacción*)
19. **Compras de Roupas e Calçados** (*Talla, color, me queda bien/mal, probarse*)
20. **Pronombres de Objeto Directo e Indirecto I** (*Lo, la, los, las / Me, te, le, nos, les*)
21. **Hacer y Aceptar Invitaciones** (*¿Quedamos?, ¿Te apetece...?, ¡Vale!, Genial*)
22. **Rejeitar Convites com Polidez** (*Lo siento, es que tengo que trabajar...*)
23. **Futuro Próximo (Ir a + Infinitivo)** (*Voy a viajar, vamos a comer*)
24. **Verbos Reflexivos da Rutina Completa** (*Ducharse, peinarse, vestirse, acostarse*)
25. **Descrever Clima e Estações Avançado** (*Primavera, verano, otoño, invierno, tormenta*)
26. **Resolver Imprevistos e Reclamações** (*Perdí mi maleta, no funciona la llave*)
27. **En el Aeropuerto y Aduana** (*Puerta de embarque, equipaje de mano, pasaporte*)
28. **Pronúncia e Variações Dialetais I** (*Seseo, Yeísmo, Vosotros vs. Ustedes*)
29. **Revisão Geral A2** (*Consolidação de Passados e Objeto Directo/Indirecto*)
30. **Desafío Final A2: Simulación Completa de Férias num País Hispânico**

---

### 🟠 Nível B1: Autonomia & Universo do Subjuntivo (24 Módulos)
1. **O Que é o Subjuntivo e Como Formar** (*Ojalá estudies, espero que comas*)
2. **Expressando Desejos e Esperanças** (*Espero que..., Deseo que..., Ojalá...*)
3. **Expressando Dúvidas e Incertezas** (*Dudo que..., No creo que..., Tal vez + Subjuntivo*)
4. **Valorativa e Julgamentos Impessoais** (*Es importante que..., Es necesario que...*)
5. **Recomendações e Conselhos com Subjuntivo** (*Te aconsejo que vayas, Te recomiendo que...*)
6. **Expressando Sentimentos e Emoções** (*Me alegra que..., Me molesta que..., Me da miedo que...*)
7. **Imperativo Afirmativo e Negativo** (*¡Habla!, ¡No hables!, ¡Come!, ¡No comas!*)
8. **Colocação de Pronomes com Imperativo** (*Dímelo, no me lo digas, hazlo*)
9. **Futuro Simple de Indicativo** (*Hablaré, comeré, tendré, habré, haré*)
10. **Previsões e Hipóteses sobre o Presente** (*"¿Qué hora será?", "Estará en casa"*)
11. **O Modo Condicional Simple** (*Hablaría, me gustaría, debería, tendría*)
12. **Dar Conselhos Hipotéticos** (*"Yo en tu lugar iría al médico"*)
13. **Estilo Indirecto (Relatar fala dos outros)** (*Me dijo que viniera / que estaba cansado*)
14. **Conectores de Argumentação** (*Sin embargo, por lo tanto, además, aunque*)
15. **Aunque + Indicativo vs. Subjuntivo** (*Aunque llueve (fato) vs. Aunque llueva (hipótese)*)
16. **Descrever Filmes, Livros e Séries** (*Argumento, personajes, resumen, recomendación*)
17. **Redação de E-mails Formais** (*Estimado/a, Atentamente, Quedo a la espera de...*)
18. **Entrevistas de Trabajo en Español** (*Fortalezas, debilidades, experiencia previa*)
19. **Llamadas Telefónicas y Videoconferencias** (*¿Con quién hablo?, Se oye mal, cortar*)
20. **Pretérito Pluscuamperfecto** (*Ya había comido cuando llegó*)
21. **Variações América Latina vs. Espanha** (*Coche/Auto/Carro, Celular/Móvil, Zumo/Jugo*)
22. **Expressões Idiomáticas Hispânicas I** (*Estar en las nubes, Ser pan comido, Tomar el pelo*)
23. **Pretérito Imperfecto de Subjuntivo** (*Si tuviera..., Si pudiera...*)
24. **Desafío Final B1: Debate Simulado e Apresentação em Espanhol**

---

### 🔴 Nível B2: Fluidez Avançada & Corporativo (24 Módulos)
1. **Condicionais Irreais do Passado** (*Si hubiera sabido, habría ido*)
2. **Orações Relativas com Subjuntivo** (*Busco un piso que tenga balcón y sea barato*)
3. **Subjuntivo em Orações Temporais e Modais** (*Antes de que, Tan pronto como, Como si...*)
4. **Usos Avançados de "Se"** (*Se involuntário: "Se me cayeron las llaves"*)
5. **Negociación y Resolución de Conflictos** (*Proponer alternativas, ceder diplomáticamente*)
6. **Presentaciones Ejecutivas y Discursos** (*Estructura de presentaciones de alto impacto*)
7. **Lenguaje Jurídico y Burocrático Básico** (*Contratos, permisos de residencia, normativas*)
8. **Redacción de Informes y Textos Académicos** (*Cohesión, coherencia y registro formal*)
9. **Análisis de Noticias y Periódicos** (*El País, BBC Mundo, Clarín*)
10. **Comprensión de Podcasts y Radio Nativa** (*Acentos cerrados, velocidad real de habla*)
11. **Cine, Series y Música Hispanoamericana** (*Jerga callejera, lunfardo, modismos*)
12. **Debates sobre Temas Sociales y Tecnología** (*Medio ambiente, IA, sociedad*)
13. **Literatura Hispânica** (*García Márquez, Cervantes, Cortázar, Lorca*)
14. **Comprensión del Humor, Ironía y Sarcasmo**
15. **Refranes y Proverbios Populares** (*"No por mucho madrugar amanece más temprano"*)
16. **Conectores de Matiz Avanzados** (*No obstante, en cambio, de ahí que, por ende*)
17. **El Valor de las Preposiciones Complejas** (*A causa de, en virtud de, con respecto a*)
18. **Estilo Directo e Indirecto Avanzado en Noticiero**
19. **Cambios de Significado según Ser/Estar** (*Ser listo vs. Estar listo; Ser rico vs. Estar rico*)
20. **El Subjuntivo en Frases Hechas** (*Sea como sea, caiga quien caiga, cueste lo que cueste*)
21. **Simulación de Entrevista en Medios / Conferencia**
22. **Redacción Creativa y Ensayo Personal**
23. **Repaso General de Maestría B2**
24. **Desafío Final B2: Examen Integrado de Fluidez y Certificación Interna**

---

## 🎮 5. Arenas Especiais de Prática

### 🚨 A) Seção "Falsos Amigos" (Quiz de Cognatos Traiçoeiros)
* **Objetivo**: Eliminar os vício de linguagem decorrentes da semelhança entre português e espanhol.
* **Mecânica**: Quizzes com alternativas e frases contextuais onde o usuário precisa identificar o significado real.
* **Exemplos de Conteúdo**:
  * *Embarazada* = Grávida (não envergonhada)
  * *Exquisito* = Delicioso / Refinado (não esquisito)
  * *Polvo* = Poeira / Pó (não o molusco polvo)
  * *Taller* = Oficina / Estúdio (não talheres de mesa)
  * *Balcón* = Sacada / Varanda (não balcão de loja)

### ⚡ B) Minigame de Conjugação Rápida (Modo Arcade/Survival)
* **Objetivo**: Desenvolver automatismo e velocidade na conjugação verbal.
* **Mecânica**:
  * O sistema apresenta um **Pronome** + **Verbo no Infinitivo** + **Tempo Verbal** (ex: *Yo + Hablar [Presente]*).
  * O usuário tem um relógio regressivo e opções rápidas de escolha (ou caixa de entrada de texto/reconhecimento por voz).
  * Sistema de Combo (x2, x3, x5) e Vidas (3 corações). Perder todas as vidas encerra a rodada e salva a pontuação no Ranking.

---

## 📖 6. Dicionário Interativo & Regionalismos (Ferramenta Final)

Abas e Filtros do Dicionário:
1. **Falsos Amigos**: Tabela com áudio, definição e exemplo contextualizado.
2. **Heterotónicos**: Lista de palavras idênticas na grafia mas com acentuação tônica diferente (*Elogio*, *Nivel*, *Magia*, *Síntoma*, *Limite*).
3. **Comparador por Países**: Guia visual mostrando a diferença de vocabulário entre **Espanha 🇪🇸, México 🇲🇽, Argentina 🇦🇷 e Colômbia 🇨🇴**.
   * *Exemplo*: Ônibus ➔ *Autobús* (ES), *Camión* (MX), *Colectivo* (AR), *Bus* (CO).

---

## 🚀 7. Roadmap de Implementação

- [ ] **Fase 1**: Atualizar `hub_idiomas.html` com o Card do Espanhol e integrar o tema visual no `style.css`.
- [ ] **Fase 2**: Criar `hub_espanhol.html` e a estrutura do banco de dados `data_curso_espanhol_a1.js`.
- [ ] **Fase 3**: Criar a Seção "Falsos Amigos" (`espanhol_falsos_amigos.html`) e o Minigame de Conjugação (`espanhol_minigame_conjugacao.html`).
- [ ] **Fase 4**: Criar a interface do Dicionário Interativo (`espanhol_dicionario.html`) com o banco de dados de regionalismos.
- [ ] **Fase 5**: Expandir gradualmente os bancos de dados A2, B1 e B2.
