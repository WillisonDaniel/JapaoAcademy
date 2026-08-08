/**
 * ⚡ Arcade de Conjugação Rápida - Espanhol Academy
 * Motor Gamificado com 4 Modos de Jogo, Boss Battles, Reconhecimento de Voz, Vidas Infinitas e Web Audio API.
 */

// ====================================================
// 🗄️ 1. BANCO EXAUSTIVO DE VERBOS & CHEFÕES IRREGULARES
// ====================================================
const BANCO_ARCADE_VERBOS = [
    // 🟢 PRESENTE DO INDICATIVO (A1-A2)
    { pronoun: "Yo", infinitive: "Hablar", tense: "Presente de Indicativo", mode: "presente", correct: "Hablo", wrong: ["Hablas", "Habla", "Hablamos"], tip: "No Presente do Indicativo, verbos em -AR formam a 1ª pessoa do singular em -o." },
    { pronoun: "Tú", infinitive: "Comer", tense: "Presente de Indicativo", mode: "presente", correct: "Comes", wrong: ["Como", "Come", "Comemos"], tip: "No Presente, tu em verbos -ER termina em -es." },
    { pronoun: "Él / Ella", infinitive: "Vivir", tense: "Presente de Indicativo", mode: "presente", correct: "Vive", wrong: ["Vivo", "Vives", "Vivimos"], tip: "Verbos em -IR na 3ª pessoa do singular terminam em -e no Presente." },
    { pronoun: "Nosotros", infinitive: "Trabajar", tense: "Presente de Indicativo", mode: "presente", correct: "Trabajamos", wrong: ["Trabajo", "Trabajas", "Trabajan"], tip: "Nosotros em verbos -AR termina em -amos no Presente." },
    { pronoun: "Ellos / Ellas", infinitive: "Escribir", tense: "Presente de Indicativo", mode: "presente", correct: "Escriben", wrong: ["Escribo", "Escribes", "Escribimos"], tip: "Ellos em verbos -IR termina em -en no Presente." },
    { pronoun: "Yo", infinitive: "Pensar", tense: "Presente de Indicativo", mode: "presente", correct: "Pienso", wrong: ["Penso", "Piensa", "Pensamos"], tip: "Pensar tem ditongação e ➔ ie nas pessoas do hífen (pienso, piensas, piensa, piensan)." },
    { pronoun: "Yo", infinitive: "Entender", tense: "Presente de Indicativo", mode: "presente", correct: "Entiendo", wrong: ["Entendo", "Entiende", "Entendemos"], tip: "Entender sofre ditongação e ➔ ie na 1ª pessoa (entiendo)." },
    { pronoun: "Yo", infinitive: "Dormir", tense: "Presente de Indicativo", mode: "presente", correct: "Duermo", wrong: ["Dormo", "Duerme", "Dormimos"], tip: "Dormir sofre ditongação o ➔ ue no Presente (duermo, duermes...)." },
    { pronoun: "Tú", infinitive: "Poder", tense: "Presente de Indicativo", mode: "presente", correct: "Puedes", wrong: ["Podes", "Puede", "Podemos"], tip: "Poder sofre ditongação o ➔ ue (puedo, puedes, puede...)." },
    { pronoun: "Yo", infinitive: "Pedir", tense: "Presente de Indicativo", mode: "presente", correct: "Pido", wrong: ["Pedo", "Pide", "Pedimos"], tip: "Pedir muda e ➔ i no Presente (pido, pides, pide, piden)." },
    { pronoun: "Yo", infinitive: "Querer", tense: "Presente de Indicativo", mode: "presente", correct: "Quiero", wrong: ["Quero", "Quiere", "Queremos"], tip: "Querer sofre ditongação e ➔ ie no Presente (quiero, quieres, quiere...)." },
    { pronoun: "Tú", infinitive: "Volver", tense: "Presente de Indicativo", mode: "presente", correct: "Vuelves", wrong: ["Volves", "Vuelve", "Volvemos"], tip: "Volver sofre ditongação o ➔ ue no Presente (vuelvo, vuelves, vuelve...)." },
    { pronoun: "Nosotros", infinitive: "Jugar", tense: "Presente de Indicativo", mode: "presente", correct: "Jugamos", wrong: ["Juegamos", "Juegan", "Jugáis"], tip: "Jugar muda u ➔ ue nas pessoas do hífen, mas nós (nosotros) mantém u: jugamos." },
    { pronoun: "Yo", infinitive: "Jugar", tense: "Presente de Indicativo", mode: "presente", correct: "Juego", wrong: ["Jugo", "Juegas", "Jugamos"], tip: "Jugar é o único verbo espanhol com ditongação u ➔ ue (juego, juegas, juega...)." },
    { pronoun: "Ellos / Ellas", infinitive: "Empezar", tense: "Presente de Indicativo", mode: "presente", correct: "Empiezan", wrong: ["Empezan", "Empieza", "Empezamos"], tip: "Empezar sofre ditongação e ➔ ie (empiezo, empiezas... empiezan)." },
    { pronoun: "Yo", infinitive: "Preferir", tense: "Presente de Indicativo", mode: "presente", correct: "Prefiero", wrong: ["Prefero", "Prefiere", "Preferimos"], tip: "Preferir sofre ditongação e ➔ ie na raiz (prefiero, prefieres...)." },
    { pronoun: "Yo", infinitive: "Servir", tense: "Presente de Indicativo", mode: "presente", correct: "Sirvo", wrong: ["Servo", "Sirve", "Servimos"], tip: "Servir muda e ➔ i na raiz no Presente (sirvo, sirves, sirve...)." },
    { pronoun: "Tú", infinitive: "Recordar", tense: "Presente de Indicativo", mode: "presente", correct: "Recuerdas", wrong: ["Recordas", "Recuerda", "Recordamos"], tip: "Recordar sofre ditongação o ➔ ue (recuerdo, recuerdas, recuerda...)." },
    { pronoun: "Yo", infinitive: "Encontrar", tense: "Presente de Indicativo", mode: "presente", correct: "Encuentro", wrong: ["Encontro", "Encuentra", "Encontramos"], tip: "Encontrar sofre ditongação o ➔ ue (encuentro, encuentras...)." },
    { pronoun: "Nosotros", infinitive: "Tener", tense: "Presente de Indicativo", mode: "presente", correct: "Tenemos", wrong: ["Tengamos", "Tienen", "Teneis"], tip: "Tener é irregular na 1ª pessoa (tengo), mas em nosotros é regular (tenemos)." },
    { pronoun: "Ellos / Ellas", infinitive: "Venir", tense: "Presente de Indicativo", mode: "presente", correct: "Vienen", wrong: ["Venen", "Viene", "Venimos"], tip: "Venir combina 1ª pessoa em -g- (vengo) com ditongação e ➔ ie nas demais (vienes, viene, vienen)." },
    { pronoun: "Tú", infinitive: "Cerrar", tense: "Presente de Indicativo", mode: "presente", correct: "Cierras", wrong: ["Cerras", "Cierra", "Cerramos"], tip: "Cerrar sofre ditongação e ➔ ie (cierro, cierras, cierra...)." },

    // 🟡 PRETÉRITOS & PASSADO (A2-B1)
    { pronoun: "Yo", infinitive: "Hablar", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Hablé", wrong: ["Hablaba", "Hablo", "Hablaré"], tip: "No Pretérito Indefinido, 1ª pessoa de -AR leva tilde na vogal -é (hablé)." },
    { pronoun: "Tú", infinitive: "Comer", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Comiste", wrong: ["Comías", "Comisteis", "Comió"], tip: "Pretérito Indefinido de -ER/IR na 2ª pessoa termina em -iste." },
    { pronoun: "Él / Ella", infinitive: "Vivir", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Vivió", wrong: ["Vivía", "Vivieron", "Vive"], tip: "3ª pessoa do Pretérito Indefinido em -ER/IR termina em -ió." },
    { pronoun: "Yo", infinitive: "Ir / Ser", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Fui", wrong: ["Iba", "Era", "Fue"], tip: "Ir e Ser compartilham a mesma forma totalmente irregular no Indefinido: fui, fuiste, fue..." },
    { pronoun: "Él / Ella", infinitive: "Ir / Ser", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Fue", wrong: ["Fui", "Era", "Iba"], tip: "3ª pessoa de Ir/Ser no Pretérito Indefinido é fue (sem acento)." },
    { pronoun: "Yo", infinitive: "Estar", tense: "Pretérito Imperfecto", mode: "preteritos", correct: "Estaba", wrong: ["Estuve", "Estoy", "Estaré"], tip: "Pretérito Imperfecto de -AR termina em -aba (estaba, estabas, estaba...)." },
    { pronoun: "Nosotros", infinitive: "Ser", tense: "Pretérito Imperfecto", mode: "preteritos", correct: "Éramos", wrong: ["Fuimos", "Somos", "Erais"], tip: "Ser é um dos 3 únicos verbos irregulares no Imperfecto: era, eras, era, éramos, erais, eran." },
    { pronoun: "Tú", infinitive: "Ir", tense: "Pretérito Imperfecto", mode: "preteritos", correct: "Ibas", wrong: ["Fuiste", "Vas", "Iban"], tip: "Ir no Pretérito Imperfecto se conjuga com ib-: iba, ibas, iba, íbamos, ibais, iban." },
    { pronoun: "Yo", infinitive: "Ver", tense: "Pretérito Imperfecto", mode: "preteritos", correct: "Veía", wrong: ["Vi", "Veo", "Veíamos"], tip: "Ver preserva a vogal e- no Imperfecto: veía, veías, veía, veíamos, veíais, veían." },
    { pronoun: "Nosotros", infinitive: "Hablar", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Hablamos", wrong: ["Hablábamos", "Hablemos", "Hablaron"], tip: "Nosotros em verbos -AR tem a mesma forma no Presente e Pretérito Indefinido (hablamos)." },
    { pronoun: "Ellos / Ellas", infinitive: "Comer", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Comieron", wrong: ["Comían", "Comieron", "Comieron"], tip: "3ª pessoa do plural do Pretérito Indefinido em -ER/IR termina em -ieron (comieron)." },
    { pronoun: "Tú", infinitive: "Vivir", tense: "Pretérito Imperfecto", mode: "preteritos", correct: "Vivías", wrong: ["Viviste", "Vives", "Vivieron"], tip: "Pretérito Imperfecto de verbos -ER/IR sempre leva acento no 'í': vivía, vivías, vivía..." },
    { pronoun: "Nosotros", infinitive: "Estar", tense: "Pretérito Imperfecto", mode: "preteritos", correct: "Estábamos", wrong: ["Estuvimos", "Estamos", "Estaban"], tip: "Pretérito Imperfecto de -AR na forma nosotros leva tilde na antepenúltima sílaba: estábamos." },
    { pronoun: "Yo", infinitive: "Tener", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Tuve", wrong: ["Tenía", "Tenga", "Tuvo"], tip: "Tener possui raiz irregular tuv- no Pretérito Indefinido (tuve, tuviste, tuvo...)." },
    { pronoun: "Ellos / Ellas", infinitive: "Ir / Ser", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Fueron", wrong: ["Iban", "Eran", "Fuera"], tip: "3ª pessoa do plural de Ir/Ser no Pretérito Indefinido é fueron." },
    { pronoun: "Tú", infinitive: "Hacer", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Hiciste", wrong: ["Hacías", "Hizo", "Hicieron"], tip: "Hacer usa a raiz hic- no Pretérito Indefinido (hice, hiciste, hizo...)." },
    { pronoun: "Él / Ella", infinitive: "Hacer", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Hizo", wrong: ["Hicío", "Hace", "Hicieron"], tip: "3ª pessoa do singular de Hacer usa 'z' para manter o som suave: hizo (e não hico)." },
    { pronoun: "Yo", infinitive: "Leer", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Leí", wrong: ["Leía", "Leo", "Leyó"], tip: "Leer leva acento gráfico na 1ª pessoa do Indefinido: leí, leíste, leyó..." },
    { pronoun: "Él / Ella", infinitive: "Leer", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Leyó", wrong: ["Leió", "Lee", "Leeron"], tip: "Entre duas vogais, o 'i' não tônico vira 'y' no Pretérito Indefinido: leyó, leyeron." },
    { pronoun: "Ellos / Ellas", infinitive: "Oír", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Oyeron", wrong: ["Oieron", "Oían", "Oyeran"], tip: "Oír muda o 'i' para 'y' na 3ª pessoa do Pretérito Indefinido: oyó, oyeron." },
    { pronoun: "Tú", infinitive: "Dormir", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Dormiste", wrong: ["Durmiste", "Dormías", "Durmió"], tip: "Dormir muda o ➔ u apenas na 3ª pessoa (durmió, durmieron); em tú é dormiste." },
    { pronoun: "Él / Ella", infinitive: "Dormir", tense: "Pretérito Indefinido", mode: "preteritos", correct: "Durmió", wrong: ["Dormió", "Duerme", "Durmieron"], tip: "Verbos em -IR com variação vocálica mudam o ➔ u na 3ª pessoa do Pretérito Indefinido: durmió." },

    // 🟣 SUBJUNTIVO & IMPERATIVO (B1-B2)
    { pronoun: "Yo", infinitive: "Hablar", tense: "Presente de Subjuntivo", mode: "subjuntivo_imperativo", correct: "Hable", wrong: ["Habla", "Hablo", "Hables"], tip: "Subjuntivo em -AR troca a vogal temática de A para E (hable, hables, hable...)." },
    { pronoun: "Tú", infinitive: "Comer", tense: "Presente de Subjuntivo", mode: "subjuntivo_imperativo", correct: "Comas", wrong: ["Comes", "Coma", "Comas"], tip: "Subjuntivo em -ER troca a vogal temática para A (coma, comas, coma...)." },
    { pronoun: "Nosotros", infinitive: "Escribir", tense: "Presente de Subjuntivo", mode: "subjuntivo_imperativo", correct: "Escribamos", wrong: ["Escribimos", "Escribáis", "Escriban"], tip: "Subjuntivo em -IR usa vogal temática A (escribamos)." },
    { pronoun: "Tú", infinitive: "Hablar", tense: "Imperativo Afirmativo", mode: "subjuntivo_imperativo", correct: "Habla", wrong: ["Hable", "Hablas", "Hables"], tip: "Imperativo afirmativo tu equivale à 3ª pessoa do presente: ¡habla!" },
    { pronoun: "Usted", infinitive: "Comer", tense: "Imperativo Afirmativo", mode: "subjuntivo_imperativo", correct: "Coma", wrong: ["Come", "Comas", "Coman"], tip: "Imperativo formal (Usted) usa a forma do Presente de Subjuntivo: ¡coma!" },
    { pronoun: "Yo", infinitive: "Tener", tense: "Presente de Subjuntivo", mode: "subjuntivo_imperativo", correct: "Tenga", wrong: ["Tiene", "Tengo", "Tengas"], tip: "O Presente de Subjuntivo constrói sua raiz a partir da 1ª pessoa do presente (Yo tengo ➔ tenga, tengas, tenga...)." },
    { pronoun: "Yo", infinitive: "Hacer", tense: "Presente de Subjuntivo", mode: "subjuntivo_imperativo", correct: "Haga", wrong: ["Hace", "Hago", "Hagas"], tip: "Yo hago no presente do indicativo gera a raiz hag- no subjuntivo: haga, hagas, haga..." },
    { pronoun: "Tú", infinitive: "Conocer", tense: "Presente de Subjuntivo", mode: "subjuntivo_imperativo", correct: "Conozcas", wrong: ["Conoces", "Conozca", "Conoscas"], tip: "Yo conozco gera a raiz conozc- no subjuntivo: conozca, conozcas..." },
    { pronoun: "Nosotros", infinitive: "Poder", tense: "Presente de Subjuntivo", mode: "subjuntivo_imperativo", correct: "Podamos", wrong: ["Puedamos", "Podemos", "Podáis"], tip: "No Subjuntivo, nosotros em verbos -ER não ditonga: podamos (e não puedamos)." },
    { pronoun: "Ellos / Ellas", infinitive: "Querer", tense: "Presente de Subjuntivo", mode: "subjuntivo_imperativo", correct: "Quieran", wrong: ["Queran", "Quiera", "Queramos"], tip: "Querer mantém a ditongação e ➔ ie nas pessoas do hífen no Subjuntivo: quiera, quieras, quieran." },
    { pronoun: "Tú", infinitive: "Decir", tense: "Imperativo Negativo", mode: "subjuntivo_imperativo", correct: "No digas", wrong: ["No di", "No dices", "No diga"], tip: "Imperativo negativo usa sempre a forma do Presente de Subjuntivo: ¡no digas!" },
    { pronoun: "Vosotros", infinitive: "Hablar", tense: "Imperativo Afirmativo", mode: "subjuntivo_imperativo", correct: "Hablad", wrong: ["Habla", "Hablen", "Hableis"], tip: "Imperativo afirmativo de vosotros troca o -r do infinitivo por -d: hablad, comed, vivid." },
    { pronoun: "Vosotros", infinitive: "Comer", tense: "Imperativo Afirmativo", mode: "subjuntivo_imperativo", correct: "Comed", wrong: ["Come", "Coman", "Coméis"], tip: "Imperativo de vosotros em Espanha troca -r por -d: comed, bebed, leed." },
    { pronoun: "Nosotros", infinitive: "Ir", tense: "Presente de Subjuntivo", mode: "subjuntivo_imperativo", correct: "Vayamos", wrong: ["Izamos", "Vamos", "Vayas"], tip: "Ir no Subjuntivo forma: vaya, vayas, vaya, vayamos, vayáis, vayan." },
    { pronoun: "Tú", infinitive: "Hablar", tense: "Imperativo Negativo", mode: "subjuntivo_imperativo", correct: "No hables", wrong: ["No habla", "No hablo", "No habléis"], tip: "Imperativo negativo com tú usa a 2ª pessoa do Subjuntivo: ¡no hables!" },
    { pronoun: "Ustedes", infinitive: "Escribir", tense: "Imperativo Afirmativo", mode: "subjuntivo_imperativo", correct: "Escriban", wrong: ["Escriben", "Escribad", "Escriba"], tip: "Imperativo para ustedes usa a 3ª pessoa do plural do Subjuntivo: ¡escriban!" },
    { pronoun: "Yo", infinitive: "Pedir", tense: "Presente de Subjuntivo", mode: "subjuntivo_imperativo", correct: "Pida", wrong: ["Peda", "Pido", "Pidas"], tip: "Verbos com variação e ➔ i mantêm a alteração em todas as pessoas do Subjuntivo: pida, pidas, pida, pidamos..." },
    { pronoun: "Yo", infinitive: "Sentir", tense: "Presente de Subjuntivo", mode: "subjuntivo_imperativo", correct: "Sienta", wrong: ["Senta", "Siento", "Sientas"], tip: "Sentir ditonga e ➔ ie no Subjuntivo nas pessoas do hífen: sienta, sientas, sienta, sientan." }
];

// 🐉 CHEFÕES IRREGULARES LENDÁRIOS (BOSS ENCOUNTERS A CADA 10 ACERTOS - 40 CHEFÕES)
const BANCO_BOSS_IRREGULARES = [
    { pronoun: "Yo", infinitive: "Caber", tense: "Presente de Indicativo", correct: "Quepo", wrong: ["Cabo", "Cabro", "Quepa"], tip: "¡BOSS! Caber forma a 1ª pessoa do singular totalmente irregular: Yo quepo." },
    { pronoun: "Yo", infinitive: "Saber", tense: "Presente de Indicativo", correct: "Sé", wrong: ["Sabo", "Sepa", "Sabré"], tip: "¡BOSS! Saber tem 1ª pessoa do singular irregular com acento diacrítico: Yo sé." },
    { pronoun: "Yo", infinitive: "Conocer", tense: "Presente de Indicativo", correct: "Conozco", wrong: ["Conoco", "Conosco", "Conozca"], tip: "¡BOSS! Verbos em -ecer/-ocer adicionam -z- antes do -c- na 1ª pessoa: Yo conozco." },
    { pronoun: "Yo", infinitive: "Hacer", tense: "Presente de Indicativo", correct: "Hago", wrong: ["Haco", "Hazo", "Haga"], tip: "¡BOSS! Hacer forma a 1ª pessoa do Presente com -g-: Yo hago." },
    { pronoun: "Yo", infinitive: "Poner", tense: "Presente de Indicativo", correct: "Pongo", wrong: ["Pono", "Pongo", "Ponga"], tip: "¡BOSS! Poner insere -g- na 1ª pessoa do Presente: Yo pongo." },
    { pronoun: "Yo", infinitive: "Salir", tense: "Presente de Indicativo", correct: "Salgo", wrong: ["Salo", "Salgo", "Salga"], tip: "¡BOSS! Salir forma a 1ª pessoa com -g-: Yo salgo." },
    { pronoun: "Yo", infinitive: "Traer", tense: "Presente de Indicativo", correct: "Traigo", wrong: ["Trao", "Traigo", "Traiga"], tip: "¡BOSS! Traer insere -ig- na 1ª pessoa do Presente: Yo traigo." },
    { pronoun: "Ellos / Ellas", infinitive: "Traer", tense: "Pretérito Indefinido", correct: "Trajeron", wrong: ["Trajeron", "Trajeron", "Trajeron"], tip: "¡BOSS! Traer muda para raiz traj- no Pretérito: ellos trajeron." },
    { pronoun: "Yo", infinitive: "Tener", tense: "Pretérito Indefinido", correct: "Tuve", wrong: ["Tene", "Tuviera", "Tuvo"], tip: "¡BOSS! Tener usa a raiz irregular tuv- no Pretérito Indefinido: Yo tuve." },
    { pronoun: "Yo", infinitive: "Estar", tense: "Pretérito Indefinido", correct: "Estuve", wrong: ["Estaba", "Estuviera", "Estuvo"], tip: "¡BOSS! Estar usa a raiz irregular estuv- no Pretérito Indefinido: Yo estuve." },
    { pronoun: "Yo", infinitive: "Poner", tense: "Pretérito Indefinido", correct: "Puse", wrong: ["Pone", "Pusiera", "Puso"], tip: "¡BOSS! Poner usa a raiz irregular pus- no Pretérito: Yo puse." },
    { pronoun: "Yo", infinitive: "Decir", tense: "Pretérito Indefinido", correct: "Dije", wrong: ["Decí", "Dijera", "Dijo"], tip: "¡BOSS! Decir usa a raiz irregular dij- no Pretérito: Yo dije." },
    { pronoun: "Yo", infinitive: "Querer", tense: "Pretérito Indefinido", correct: "Quise", wrong: ["Quería", "Quisiera", "Quiso"], tip: "¡BOSS! Querer usa a raiz irregular quis- no Pretérito: Yo quise." },
    { pronoun: "Yo", infinitive: "Poder", tense: "Pretérito Indefinido", correct: "Pude", wrong: ["Podía", "Pudiera", "Pudo"], tip: "¡BOSS! Poder usa a raiz irregular pud- no Pretérito: Yo pude." },
    { pronoun: "Yo", infinitive: "Venir", tense: "Pretérito Indefinido", correct: "Vine", wrong: ["Venía", "Viniera", "Vino"], tip: "¡BOSS! Venir usa a raiz irregular vin- no Pretérito: Yo vine." },
    { pronoun: "Ellos / Ellas", infinitive: "Decir", tense: "Pretérito Indefinido", correct: "Dijeron", wrong: ["Dijieron", "Decieron", "Dijeban"], tip: "¡BOSS! Verbos com raiz em -j- perdem o 'i' na 3ª pessoa do plural: dijeron." },
    { pronoun: "Yo", infinitive: "Ir", tense: "Presente de Subjuntivo", correct: "Vaya", wrong: ["Iba", "Vaya", "Vayas"], tip: "¡BOSS! Ir é completamente irregular no Subjuntivo: Yo vaya." },
    { pronoun: "Yo", infinitive: "Ser", tense: "Presente de Subjuntivo", correct: "Sea", wrong: ["Sera", "Seas", "Seam"], tip: "¡BOSS! Ser forma o Subjuntivo com a raiz se-: Yo sea." },
    { pronoun: "Tú", infinitive: "Decir", tense: "Imperativo Afirmativo", correct: "Di", wrong: ["Dice", "Diga", "Dices"], tip: "¡BOSS! Decir tem imperativo encurtado irregular para tú: ¡di!" },
    { pronoun: "Tú", infinitive: "Hacer", tense: "Imperativo Afirmativo", correct: "Haz", wrong: ["Hace", "Haga", "Haces"], tip: "¡BOSS! Hacer tem imperativo encurtado irregular para tú: ¡haz!" },
    { pronoun: "Tú", infinitive: "Poner", tense: "Imperativo Afirmativo", correct: "Pon", wrong: ["Pone", "Ponga", "Pones"], tip: "¡BOSS! Poner tem imperativo encurtado irregular para tú: ¡pon!" },
    { pronoun: "Tú", infinitive: "Salir", tense: "Imperativo Afirmativo", correct: "Sal", wrong: ["Sale", "Salga", "Sales"], tip: "¡BOSS! Salir tem imperativo encurtado irregular para tú: ¡sal!" },
    { pronoun: "Tú", infinitive: "Tener", tense: "Imperativo Afirmativo", correct: "Ten", wrong: ["Tiene", "Tenga", "Tienes"], tip: "¡BOSS! Tener tem imperativo encurtado irregular para tú: ¡ten!" },
    { pronoun: "Tú", infinitive: "Venir", tense: "Imperativo Afirmativo", correct: "Ven", wrong: ["Viene", "Venga", "Vienes"], tip: "¡BOSS! Venir tem imperativo encurtado irregular para tú: ¡ven!" },
    { pronoun: "Yo", infinitive: "Valer", tense: "Presente de Indicativo", correct: "Valgo", wrong: ["Valo", "Valgo", "Valga"], tip: "¡BOSS! Valer forma a 1ª pessoa do singular em -g-: Yo valgo." },
    { pronoun: "Yo", infinitive: "Caer", tense: "Presente de Indicativo", correct: "Caigo", wrong: ["Cao", "Caigo", "Caiga"], tip: "¡BOSS! Caer adiciona -ig- na 1ª pessoa do Presente: Yo caigo." },
    { pronoun: "Yo", infinitive: "Oír", tense: "Presente de Indicativo", correct: "Oigo", wrong: ["Oio", "Oigo", "Oiga"], tip: "¡BOSS! Oír forma a 1ª pessoa com -ig-: Yo oigo (oyes, oye...)." },
    { pronoun: "Yo", infinitive: "Ver", tense: "Presente de Indicativo", correct: "Veo", wrong: ["Vo", "Veo", "Vea"], tip: "¡BOSS! Ver preserva o 'e' da raiz original na 1ª pessoa: Yo veo (e não vo)." },
    { pronoun: "Yo", infinitive: "Dar", tense: "Presente de Indicativo", correct: "Doy", wrong: ["Do", "Doy", "Dea"], tip: "¡BOSS! Dar forma a 1ª pessoa com a terminação especial -oy: Yo doy." },
    { pronoun: "Ellos / Ellas", infinitive: "Conducir", tense: "Pretérito Indefinido", correct: "Condujeron", wrong: ["Condujieron", "Conducieron", "Condujeban"], tip: "¡BOSS! Verbos em -ducir mudam para raiz -duj- no Pretérito Indefinido: condujeron (sem 'i')." },
    { pronoun: "Yo", infinitive: "Conducir", tense: "Pretérito Indefinido", correct: "Conduje", wrong: ["Conducí", "Condujera", "Condujo"], tip: "¡BOSS! Conducir usa a raiz irregular conduj- no Pretérito: Yo conduje." },
    { pronoun: "Yo", infinitive: "Producir", tense: "Pretérito Indefinido", correct: "Produje", wrong: ["Producí", "Produjera", "Produjo"], tip: "¡BOSS! Producir usa a raiz produj- no Pretérito Indefinido: Yo produje." },
    { pronoun: "Yo", infinitive: "Saber", tense: "Pretérito Indefinido", correct: "Supe", wrong: ["Sabía", "Supiera", "Supo"], tip: "¡BOSS! Saber usa a raiz sup- no Pretérito Indefinido: Yo supe (supiste, supo...)." },
    { pronoun: "Yo", infinitive: "Haber", tense: "Pretérito Indefinido", correct: "Hube", wrong: ["Había", "Hubiera", "Hubo"], tip: "¡BOSS! Haber usa a raiz hub- no Pretérito Indefinido: Yo hube (hubo)." },
    { pronoun: "Él / Ella", infinitive: "Haber", tense: "Pretérito Indefinido", correct: "Hubo", wrong: ["Hubieron", "Había", "Hubiese"], tip: "¡BOSS! Na 3ª pessoa do singular impessoal de existir/ocorrer usa-se: Hubo (e não hubieron)." },
    { pronoun: "Yo", infinitive: "Caber", tense: "Pretérito Indefinido", correct: "Cupe", wrong: ["Cabía", "Cupiera", "Cupo"], tip: "¡BOSS! Caber usa a raiz cup- no Pretérito Indefinido: Yo cupe (cupiste, cupo...)." },
    { pronoun: "Yo", infinitive: "Tener", tense: "Futuro Simples", correct: "Tendré", wrong: ["Teneré", "Tendréis", "Tendrá"], tip: "¡BOSS! Tener insere -d- na raiz do Futuro Simples: tendré, tendrás, tendrá..." },
    { pronoun: "Yo", infinitive: "Poner", tense: "Futuro Simples", correct: "Pondré", wrong: ["Poneré", "Pondréis", "Pendrá"], tip: "¡BOSS! Poner insere -d- no Futuro: pondré, pondrás, pondrá..." },
    { pronoun: "Yo", infinitive: "Hacer", tense: "Futuro Simples", correct: "Haré", wrong: ["Haceré", "Haréis", "Hará"], tip: "¡BOSS! Hacer encurta a raiz para har- no Futuro: haré, harás, hará..." },
    { pronoun: "Yo", infinitive: "Decir", tense: "Futuro Simples", correct: "Diré", wrong: ["Deciré", "Diréis", "Dirá"], tip: "¡BOSS! Decir encurta a raiz para dir- no Futuro: diré, dirás, dirá..." }
];

// ====================================================
// 🔊 2. GERENCIADOR DE EFEITOS SONOROS (WEB AUDIO API)
// ====================================================
class ArcadeAudioSynth {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playCorrect() {
        try {
            this.init();
            if (!this.ctx) return;
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1);
            osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.3);
        } catch (e) { }
    }

    playWrong() {
        try {
            this.init();
            if (!this.ctx) return;
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.linearRampToValueAtTime(110, now + 0.25);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.3);
        } catch (e) { }
    }

    playCombo() {
        try {
            this.init();
            if (!this.ctx) return;
            const now = this.ctx.currentTime;
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now + idx * 0.06);
                gain.gain.setValueAtTime(0.15, now + idx * 0.06);
                gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.06 + 0.15);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now + idx * 0.06);
                osc.stop(now + idx * 0.06 + 0.15);
            });
        } catch (e) { }
    }

    playBoss() {
        try {
            this.init();
            if (!this.ctx) return;
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(110, now);
            osc.frequency.setValueAtTime(220, now + 0.15);
            osc.frequency.setValueAtTime(440, now + 0.3);
            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.5);
        } catch (e) { }
    }
}

const synth = new ArcadeAudioSynth();

// ====================================================
// 🎮 3. ESTADO GLOBAL DO ARCADE & RECONHECIMENTO DE VOZ
// ====================================================
let arcadeState = {
    modo: 'sobrevivencia', // presente | preteritos | subjuntivo_imperativo | sobrevivencia
    inputMode: 'click',    // click | voice
    vidasInfinitas: false, // opção de Vidas Infinitas
    vidas: 3,
    pontos: 0,
    combo: 1,
    acertosConsecutivos: 0,
    desafiosRespondidos: 0,
    timer: null,
    tempoMaxSec: 8,
    tempoRestanteMs: 8000,
    desafioAtual: null,
    isBoss: false,
    highScore: 0,
    isListening: false,
    recognition: null
};

// ====================================================
// 🎙️ 4. RECONHECIMENTO DE VOZ (WEB SPEECH API)
// ====================================================
function inicializarReconhecimentoVoz() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        return false;
    }

    try {
        arcadeState.recognition = new SpeechRecognition();
        arcadeState.recognition.lang = 'es-ES';
        arcadeState.recognition.continuous = false;
        arcadeState.recognition.interimResults = true;

        arcadeState.recognition.onstart = () => {
            arcadeState.isListening = true;
            atualizarStatusVozUI("🎙️ Ouvindo resposta em espanhol...", "var(--accent-color, #3b82f6)");
        };

        arcadeState.recognition.onresult = (event) => {
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                transcript += event.results[i][0].transcript;
            }
            const limpo = transcript.trim().toLowerCase();
            atualizarStatusVozUI(`🗣️ Você falou: "${transcript}"`, "#eab308");

            if (event.results[0].isFinal && arcadeState.desafioAtual) {
                const respostaEsperada = arcadeState.desafioAtual.correct.toLowerCase();
                const normalizadoFalado = limpo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                const normalizadoEsperado = respostaEsperada.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

                const eCorreto = (limpo === respostaEsperada || normalizadoFalado === normalizadoEsperado || limpo.includes(normalizadoEsperado));
                pararReconhecimentoVoz();
                responderArcade(eCorreto, transcript);
            }
        };

        arcadeState.recognition.onerror = (e) => {
            arcadeState.isListening = false;
            atualizarStatusVozUI(`⚠️ Não entendi bem. Tente falar mais claro ou use o modo clique.`, "#ef4444");
        };

        arcadeState.recognition.onend = () => {
            arcadeState.isListening = false;
        };

        return true;
    } catch (err) {
        return false;
    }
}

function alternarModoInput(mode) {
    arcadeState.inputMode = mode;
    const btnClick = document.getElementById('btn-mode-click');
    const btnVoice = document.getElementById('btn-mode-voice');
    const voiceBox = document.getElementById('voice-input-container');

    if (mode === 'voice') {
        if (!inicializarReconhecimentoVoz()) {
            if (typeof mostrarToast === 'function') mostrarToast('Navegador não suporta Reconhecimento de Voz.', 'warning');
            arcadeState.inputMode = 'click';
            return;
        }
        if (btnClick) btnClick.classList.remove('active');
        if (btnVoice) btnVoice.classList.add('active');
        if (voiceBox) voiceBox.style.display = 'block';
    } else {
        pararReconhecimentoVoz();
        if (btnClick) btnClick.classList.add('active');
        if (btnVoice) btnVoice.classList.remove('active');
        if (voiceBox) voiceBox.style.display = 'none';
    }
}

function escutarVozUsuario() {
    if (!arcadeState.recognition) {
        if (!inicializarReconhecimentoVoz()) return;
    }
    try {
        synth.init();
        arcadeState.recognition.start();
    } catch (e) {
        try {
            arcadeState.recognition.stop();
            arcadeState.recognition.start();
        } catch (err) { }
    }
}

function pararReconhecimentoVoz() {
    if (arcadeState.recognition && arcadeState.isListening) {
        try { arcadeState.recognition.stop(); } catch (e) { }
        arcadeState.isListening = false;
    }
}

function atualizarStatusVozUI(msg, color) {
    const el = document.getElementById('voice-status-msg');
    if (el) {
        el.textContent = msg;
        el.style.color = color || 'var(--text-main)';
    }
}

function alternarVidasInfinitas(val) {
    if (typeof val === 'boolean') {
        arcadeState.vidasInfinitas = val;
    } else {
        arcadeState.vidasInfinitas = !arcadeState.vidasInfinitas;
    }

    const chk = document.getElementById('chk-vidas-infinitas');
    if (chk) chk.checked = arcadeState.vidasInfinitas;

    try {
        localStorage.setItem('espanhol_arcade_vidas_infinitas', arcadeState.vidasInfinitas ? 'true' : 'false');
    } catch (e) { }

    atualizarPlacarArcade();
}

// ====================================================
// 🚀 5. INICIALIZAÇÃO & SELEÇÃO DE MODOS DE JOGO
// ====================================================
function carregarHighScoreArcade() {
    try {
        const val = localStorage.getItem('espanhol_arcade_highscore');
        arcadeState.highScore = val ? parseInt(val, 10) : 0;
    } catch (e) {
        arcadeState.highScore = 0;
    }

    try {
        const savedInf = localStorage.getItem('espanhol_arcade_vidas_infinitas');
        if (savedInf === 'true') {
            arcadeState.vidasInfinitas = true;
            const chk = document.getElementById('chk-vidas-infinitas');
            if (chk) chk.checked = true;
        }
    } catch (e) { }

    const el = document.getElementById('arcade-high-score');
    if (el) el.textContent = arcadeState.highScore;
}

function selecionarModoJogo(modo) {
    arcadeState.modo = modo;
    const cards = document.querySelectorAll('.mode-select-card');
    cards.forEach(c => {
        if (c.getAttribute('data-modo') === modo) {
            c.classList.add('selected');
        } else {
            c.classList.remove('selected');
        }
    });
}

function iniciarArcadeConjugacao() {
    synth.init();
    carregarHighScoreArcade();

    arcadeState.vidas = 3;
    arcadeState.pontos = 0;
    arcadeState.combo = 1;
    arcadeState.acertosConsecutivos = 0;
    arcadeState.desafiosRespondidos = 0;
    arcadeState.tempoMaxSec = 8;

    document.getElementById('arcade-mode-selection').style.display = 'none';
    document.getElementById('arcade-game-container').style.display = 'block';
    document.getElementById('arcade-game-over').style.display = 'none';
    document.getElementById('arcade-feedback-modal').style.display = 'none';

    atualizarPlacarArcade();
    proximoDesafioArcade();
}

function voltarMenuModos() {
    clearInterval(arcadeState.timer);
    pararReconhecimentoVoz();

    document.getElementById('arcade-mode-selection').style.display = 'block';
    document.getElementById('arcade-game-container').style.display = 'none';
    document.getElementById('arcade-game-over').style.display = 'none';
    document.getElementById('arcade-feedback-modal').style.display = 'none';
    carregarHighScoreArcade();
}

// ====================================================
// 🎲 6. GERADOR DE QUESTÕES E LÓGICA DE BOSS BATTLES
// ====================================================
function obterBancoFiltrado() {
    let pool = [...BANCO_ARCADE_VERBOS];

    if (typeof FONETICA_RECURSOS_ESPANHOL_DADOS !== 'undefined' && Array.isArray(FONETICA_RECURSOS_ESPANHOL_DADOS.verbos)) {
        FONETICA_RECURSOS_ESPANHOL_DADOS.verbos.forEach(v => {
            if (v.conjugations) {
                if (v.conjugations.presente) {
                    const p = v.conjugations.presente;
                    if (p.yo) pool.push({ pronoun: "Yo", infinitive: v.verb, tense: "Presente de Indicativo", mode: "presente", correct: p.yo, wrong: [p.tu || 'es', p.el || 'e', p.nosotros || 'emos'], tip: `Verbo ${v.verb} (${v.translation}) no Presente.` });
                    if (p.tu) pool.push({ pronoun: "Tú", infinitive: v.verb, tense: "Presente de Indicativo", mode: "presente", correct: p.tu, wrong: [p.yo || 'o', p.el || 'e', p.ellos || 'en'], tip: `Verbo ${v.verb} (${v.translation}) no Presente.` });
                }
                if (v.conjugations.indefinido) {
                    const p = v.conjugations.indefinido;
                    if (p.yo) pool.push({ pronoun: "Yo", infinitive: v.verb, tense: "Pretérito Indefinido", mode: "preteritos", correct: p.yo, wrong: [p.tu || 'aste', p.el || 'ó', p.ellos || 'aron'], tip: `Pretérito Indefinido de ${v.verb}.` });
                }
            }
        });
    }

    if (arcadeState.modo === 'sobrevivencia') {
        return pool;
    }
    return pool.filter(item => item.mode === arcadeState.modo || arcadeState.modo === 'sobrevivencia');
}

function proximoDesafioArcade() {
    clearInterval(arcadeState.timer);

    arcadeState.isBoss = (arcadeState.acertosConsecutivos > 0 && arcadeState.acertosConsecutivos % 10 === 0);

    const containerBox = document.getElementById('verb-challenge-box');
    const bossAlert = document.getElementById('boss-encounter-badge');

    if (arcadeState.isBoss) {
        synth.playBoss();
        containerBox.classList.add('boss-mode-active');
        if (bossAlert) bossAlert.style.display = 'block';

        const bossPool = BANCO_BOSS_IRREGULARES;
        arcadeState.desafioAtual = bossPool[Math.floor(Math.random() * bossPool.length)];
    } else {
        containerBox.classList.remove('boss-mode-active');
        if (bossAlert) bossAlert.style.display = 'none';

        const pool = obterBancoFiltrado();
        arcadeState.desafioAtual = pool[Math.floor(Math.random() * pool.length)];
    }

    document.getElementById('arcade-pronoun').textContent = arcadeState.desafioAtual.pronoun.toUpperCase();
    document.getElementById('arcade-infinitive').textContent = arcadeState.desafioAtual.infinitive.toUpperCase();
    document.getElementById('arcade-tense').textContent = arcadeState.desafioAtual.tense;

    const optionsContainer = document.getElementById('arcade-options');
    optionsContainer.innerHTML = '';

    const erradasDistintas = Array.from(new Set(arcadeState.desafioAtual.wrong)).filter(w => w !== arcadeState.desafioAtual.correct);
    const selecionadasErradas = erradasDistintas.sort(() => 0.5 - Math.random()).slice(0, 3);
    const todasOpcoes = Array.from(new Set([arcadeState.desafioAtual.correct, ...selecionadasErradas])).sort(() => 0.5 - Math.random());

    todasOpcoes.forEach(op => {
        const btn = document.createElement('button');
        btn.className = 'conj-btn';
        if (arcadeState.isBoss) btn.classList.add('btn-boss');
        btn.textContent = op;
        btn.onclick = () => responderArcade(op === arcadeState.desafioAtual.correct, op);
        optionsContainer.appendChild(btn);
    });

    if (arcadeState.inputMode === 'voice') {
        escutarVozUsuario();
    }

    iniciarTimerArcade();
}

// ====================================================
// ⏱️ 7. TEMPORIZADOR REGRESSIVO DINÂMICO
// ====================================================
function iniciarTimerArcade() {
    const timerBar = document.getElementById('arcade-timer-bar');

    let tempoBaseSec = 8;
    if (arcadeState.modo === 'sobrevivencia') {
        const reducao = Math.min(4.5, Math.floor(arcadeState.acertosConsecutivos / 5) * 0.5);
        tempoBaseSec = Math.max(3.5, 8 - reducao);
    }
    arcadeState.tempoMaxSec = tempoBaseSec;
    arcadeState.tempoRestanteMs = tempoBaseSec * 1000;

    const intervalMs = 50;
    arcadeState.timer = setInterval(() => {
        arcadeState.tempoRestanteMs -= intervalMs;
        const pct = Math.max(0, (arcadeState.tempoRestanteMs / (tempoBaseSec * 1000)) * 100);
        if (timerBar) timerBar.style.width = pct + '%';

        if (pct < 30) {
            timerBar.style.background = 'linear-gradient(90deg, #ef4444, #dc2626)';
        } else {
            timerBar.style.background = 'linear-gradient(90deg, #10b981, #06b6d4)';
        }

        if (arcadeState.tempoRestanteMs <= 0) {
            clearInterval(arcadeState.timer);
            responderArcade(false, '⏱️ Tempo Esgotado');
        }
    }, intervalMs);
}

// ====================================================
// 🎯 8. PROCESSAMENTO DE RESPOSTA E FEEDBACK EDUCATIVO
// ====================================================
function responderArcade(eCorreto, respostaEscolha) {
    clearInterval(arcadeState.timer);
    pararReconhecimentoVoz();

    if (eCorreto) {
        synth.playCorrect();
        arcadeState.acertosConsecutivos += 1;
        arcadeState.desafiosRespondidos += 1;

        if (arcadeState.acertosConsecutivos >= 20) arcadeState.combo = 10;
        else if (arcadeState.acertosConsecutivos >= 15) arcadeState.combo = 5;
        else if (arcadeState.acertosConsecutivos >= 10) arcadeState.combo = 4;
        else if (arcadeState.acertosConsecutivos >= 5) arcadeState.combo = 3;
        else if (arcadeState.acertosConsecutivos >= 2) arcadeState.combo = 2;
        else arcadeState.combo = 1;

        if (arcadeState.combo > 1) synth.playCombo();

        const baseXP = arcadeState.isBoss ? 20 : 10;
        const pontosGanhos = baseXP * arcadeState.combo;
        arcadeState.pontos += pontosGanhos;

        if (arcadeState.isBoss && arcadeState.vidas < 3 && !arcadeState.vidasInfinitas) {
            arcadeState.vidas += 1;
            if (typeof mostrarToast === 'function') mostrarToast('🐉 CHEFÃO DERROTADO! +1 VIDA RECUPERADA! ❤️', 'success');
        }

        if (typeof adicionarXP === 'function') adicionarXP(baseXP);
        else if (typeof window.adicionarXP === 'function') window.adicionarXP(baseXP);

        atualizarPlacarArcade();
        proximoDesafioArcade();

    } else {
        synth.playWrong();
        if (!arcadeState.vidasInfinitas) {
            arcadeState.vidas -= 1;
        }
        arcadeState.combo = 1;
        arcadeState.acertosConsecutivos = 0;

        atualizarPlacarArcade();

        exibirFeedbackErroModal(respostaEscolha);
    }
}

function exibirFeedbackErroModal(respostaEscolha) {
    const modal = document.getElementById('arcade-feedback-modal');
    const userAns = document.getElementById('feedback-user-ans');
    const correctAns = document.getElementById('feedback-correct-ans');
    const tipText = document.getElementById('feedback-tip-text');

    if (userAns) userAns.textContent = respostaEscolha || 'Incorreto';
    if (correctAns) correctAns.textContent = arcadeState.desafioAtual.correct;
    if (tipText) tipText.textContent = arcadeState.desafioAtual.tip || 'Atenção aos acentos e terminações da conjugação.';

    if (modal) modal.style.display = 'flex';
}

function fecharFeedbackEContinuar() {
    const modal = document.getElementById('arcade-feedback-modal');
    if (modal) modal.style.display = 'none';

    if (!arcadeState.vidasInfinitas && arcadeState.vidas <= 0) {
        encerrarArcade();
    } else {
        proximoDesafioArcade();
    }
}

// ====================================================
// 📊 9. PLACAR & TELA DE GAME OVER
// ====================================================
function atualizarPlacarArcade() {
    const livesEl = document.getElementById('arcade-lives');
    const comboEl = document.getElementById('arcade-combo');
    const scoreEl = document.getElementById('arcade-score');

    if (livesEl) {
        if (arcadeState.vidasInfinitas) {
            livesEl.textContent = '❤️ ♾️ Infinitas';
            livesEl.style.color = '#10b981';
        } else {
            livesEl.textContent = '❤️'.repeat(Math.max(0, arcadeState.vidas));
            livesEl.style.color = '#ef4444';
        }
    }
    if (comboEl) {
        comboEl.textContent = `x${arcadeState.combo}`;
        if (arcadeState.combo > 1) comboEl.classList.add('pulse-combo');
        else comboEl.classList.remove('pulse-combo');
    }
    if (scoreEl) scoreEl.textContent = arcadeState.pontos;
}

function encerrarArcade() {
    clearInterval(arcadeState.timer);
    pararReconhecimentoVoz();

    document.getElementById('arcade-game-container').style.display = 'none';
    document.getElementById('arcade-game-over').style.display = 'block';

    const finalScoreEl = document.getElementById('final-score');
    const recordMsgEl = document.getElementById('new-record-msg');

    if (finalScoreEl) finalScoreEl.textContent = arcadeState.pontos;

    let eNovoRecorde = false;
    if (arcadeState.pontos > arcadeState.highScore) {
        arcadeState.highScore = arcadeState.pontos;
        try { localStorage.setItem('espanhol_arcade_highscore', arcadeState.highScore.toString()); } catch (e) { }
        eNovoRecorde = true;
    }

    if (recordMsgEl) {
        if (eNovoRecorde && arcadeState.pontos > 0) {
            recordMsgEl.style.display = 'block';
            recordMsgEl.textContent = '🎉 NOVO RECORDE PESSOAL! 🏆';
        } else {
            recordMsgEl.style.display = 'none';
        }
    }

    if (typeof confetti === 'function' && arcadeState.pontos > 30) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
}

// Exportação Global para Window
if (typeof window !== 'undefined') {
    window.selecionarModoJogo = selecionarModoJogo;
    window.iniciarArcadeConjugacao = iniciarArcadeConjugacao;
    window.voltarMenuModos = voltarMenuModos;
    window.alternarModoInput = alternarModoInput;
    window.escutarVozUsuario = escutarVozUsuario;
    window.fecharFeedbackEContinuar = fecharFeedbackEContinuar;
    window.alternarVidasInfinitas = alternarVidasInfinitas;
}

window.addEventListener('DOMContentLoaded', () => {
    carregarHighScoreArcade();
});
