// ============================================================================
// DATASET MINIGAME DE CONJUGAÇÃO CONTEXTUAL ITALIANA (it-IT) — A1 A B2
// IDIOMAS ACADEMY
// ============================================================================

const BANCO_ARCADE_VERBOS_ITALIANO = [
    // 🟢 NÍVEL A1 — PRESENTE INDICATIVO (Verbos Essenciais e Frequentes)
    { pronoun: "Io", infinitive: "Essere", tense: "Presente Indicativo", mode: "presente", correct: "sono", wrong: ["sei", "è", "siamo"], tip: "Essere na 1ª pessoa do singular (Io) é 'sono'." },
    { pronoun: "Tu", infinitive: "Essere", tense: "Presente Indicativo", mode: "presente", correct: "sei", wrong: ["sono", "è", "siete"], tip: "Essere na 2ª pessoa do singular (Tu) é 'sei'." },
    { pronoun: "Lui / Lei", infinitive: "Essere", tense: "Presente Indicativo", mode: "presente", correct: "è", wrong: ["sono", "sei", "siamo"], tip: "Essere na 3ª pessoa do singular (Lui/Lei) leva acento grave: 'è'." },
    { pronoun: "Noi", infinitive: "Essere", tense: "Presente Indicativo", mode: "presente", correct: "siamo", wrong: ["sono", "sei", "siete"], tip: "Essere na 1ª pessoa do plural (Noi) é 'siamo'." },
    { pronoun: "Voi", infinitive: "Essere", tense: "Presente Indicativo", mode: "presente", correct: "siete", wrong: ["sono", "siamo", "sei"], tip: "Essere na 2ª pessoa do plural (Voi) é 'siete'." },
    { pronoun: "Loro", infinitive: "Essere", tense: "Presente Indicativo", mode: "presente", correct: "sono", wrong: ["sei", "siamo", "siete"], tip: "Essere na 3ª pessoa do plural (Loro) coincide com Io: 'sono'." },

    { pronoun: "Io", infinitive: "Avere", tense: "Presente Indicativo", mode: "presente", correct: "ho", wrong: ["hai", "ha", "abbiamo"], tip: "Avere na 1ª pessoa tem H mudo no início: 'ho'." },
    { pronoun: "Tu", infinitive: "Avere", tense: "Presente Indicativo", mode: "presente", correct: "hai", wrong: ["ho", "ha", "avete"], tip: "Avere na 2ª pessoa é 'hai'." },
    { pronoun: "Lui / Lei", infinitive: "Avere", tense: "Presente Indicativo", mode: "presente", correct: "ha", wrong: ["ho", "hai", "hanno"], tip: "Avere na 3ª pessoa do singular é 'ha'." },
    { pronoun: "Noi", infinitive: "Avere", tense: "Presente Indicativo", mode: "presente", correct: "abbiamo", wrong: ["ho", "ha", "avete"], tip: "Noi em Avere é 'abbiamo' (com duas B)." },
    { pronoun: "Loro", infinitive: "Avere", tense: "Presente Indicativo", mode: "presente", correct: "hanno", wrong: ["ha", "abbiamo", "avete"], tip: "Loro em Avere é 'hanno' (duas N)." },

    { pronoun: "Io", infinitive: "Andare", tense: "Presente Indicativo", mode: "presente", correct: "vado", wrong: ["vai", "va", "andiamo"], tip: "Andare no presente troca a raiz para vad-: Io vado." },
    { pronoun: "Tu", infinitive: "Andare", tense: "Presente Indicativo", mode: "presente", correct: "vai", wrong: ["vado", "va", "andate"], tip: "Tu vai a scuola." },
    { pronoun: "Noi", infinitive: "Andare", tense: "Presente Indicativo", mode: "presente", correct: "andiamo", wrong: ["vado", "vanno", "andate"], tip: "Noi recupera a raiz and-: Noi andiamo." },

    { pronoun: "Io", infinitive: "Fare", tense: "Presente Indicativo", mode: "presente", correct: "faccio", wrong: ["fai", "fa", "facciamo"], tip: "Fare na 1ª pessoa é 'faccio' (com cci)." },
    { pronoun: "Tu", infinitive: "Fare", tense: "Presente Indicativo", mode: "presente", correct: "fai", wrong: ["faccio", "fa", "fate"], tip: "Tu fai colazione." },
    { pronoun: "Noi", infinitive: "Fare", tense: "Presente Indicativo", mode: "presente", correct: "facciamo", wrong: ["faccio", "fate", "fanno"], tip: "Noi facciamo i compiti." },

    { pronoun: "Io", infinitive: "Potere", tense: "Presente Indicativo", mode: "presente", correct: "posso", wrong: ["puoi", "può", "possiamo"], tip: "Potere na 1ª pessoa é 'posso' (duas S)." },
    { pronoun: "Tu", infinitive: "Potere", tense: "Presente Indicativo", mode: "presente", correct: "puoi", wrong: ["posso", "può", "potete"], tip: "Tu puoi entrare." },
    { pronoun: "Io", infinitive: "Volere", tense: "Presente Indicativo", mode: "presente", correct: "voglio", wrong: ["vuoi", "vuole", "vogliamo"], tip: "Volere na 1ª pessoa é 'voglio' (com gl)." },
    { pronoun: "Tu", infinitive: "Volere", tense: "Presente Indicativo", mode: "presente", correct: "vuoi", wrong: ["voglio", "vuole", "volete"], tip: "Tu vuoi un caffè?" },

    { pronoun: "Io", infinitive: "Dire", tense: "Presente Indicativo", mode: "presente", correct: "dico", wrong: ["dici", "dice", "diciamo"], tip: "Dire usa a raiz dic-: Io dico la verità." },
    { pronoun: "Io", infinitive: "Venire", tense: "Presente Indicativo", mode: "presente", correct: "vengo", wrong: ["vieni", "viene", "veniamo"], tip: "Venire na 1ª pessoa é 'vengo' (com ng)." },
    { pronoun: "Tu", infinitive: "Venire", tense: "Presente Indicativo", mode: "presente", correct: "vieni", wrong: ["vengo", "viene", "venite"], tip: "Tu vieni alla festa?" },

    { pronoun: "Io", infinitive: "Parlare", tense: "Presente Indicativo", mode: "presente", correct: "parlo", wrong: ["parli", "parla", "parliamo"], tip: "Verbos em -ARE na 1ª pessoa terminam em -o: parlo." },
    { pronoun: "Tu", infinitive: "Parlare", tense: "Presente Indicativo", mode: "presente", correct: "parli", wrong: ["parlo", "parla", "parlate"], tip: "Verbos em -ARE na 2ª pessoa terminam em -i: parli." },
    { pronoun: "Io", infinitive: "Capire", tense: "Presente Indicativo", mode: "presente", correct: "capisco", wrong: ["capisci", "capisce", "capiamo"], tip: "Capire é um verbo em -isc-: io capisco." },

    // 🟡 NÍVEL A2 — PRETÉRITOS E FUTURO (Passato Prossimo, Imperfetto, Futuro)
    { pronoun: "Io", infinitive: "Parlare", tense: "Passato Prossimo", mode: "preteritos", correct: "ho parlato", wrong: ["sono parlato", "parlavo", "parlerò"], tip: "Parlare exige auxiliar avere: ho parlato." },
    { pronoun: "Tu", infinitive: "Andare", tense: "Passato Prossimo", mode: "preteritos", correct: "sei andato", wrong: ["hai andato", "andavi", "andrai"], tip: "Andare exige auxiliar essere com concordância: sei andato." },
    { pronoun: "Lei", infinitive: "Arrivare", tense: "Passato Prossimo", mode: "preteritos", correct: "è arrivata", wrong: ["ha arrivato", "è arrivato", "arrivava"], tip: "Com auxiliares de movimento e essere, o particípio concorda no feminino: è arrivata." },
    { pronoun: "Noi", infinitive: "Mangiare", tense: "Passato Prossimo", mode: "preteritos", correct: "abbiamo mangiato", wrong: ["siamo mangiati", "mangiavamo", "mangeremo"], tip: "Mangiare exige avere: abbiamo mangiato." },

    { pronoun: "Io", infinitive: "Essere", tense: "Imperfetto", mode: "preteritos", correct: "ero", wrong: ["fui", "stato", "sarò"], tip: "Imperfetto de essere: io ero, tu eri, lui era..." },
    { pronoun: "Tu", infinitive: "Fare", tense: "Imperfetto", mode: "preteritos", correct: "facevi", wrong: ["fatti", "fai", "farai"], tip: "Imperfetto de fare preserva a raiz latina fac-: facevi." },
    { pronoun: "Noi", infinitive: "Abitare", tense: "Imperfetto", mode: "preteritos", correct: "abitavamo", wrong: ["abbiamo abitato", "abiteremo", "abitiamo"], tip: "Imperfetto de -ARE na 1ª pessoa plural: abitavamo." },
    { pronoun: "Loro", infinitive: "Dire", tense: "Imperfetto", mode: "preteritos", correct: "dicevano", wrong: ["hanno detto", "diranno", "dicono"], tip: "Imperfetto de dire: dicevano." },

    { pronoun: "Io", infinitive: "Andare", tense: "Futuro Semplice", mode: "preteritos", correct: "andrò", wrong: ["andavo", "sono andato", "andrei"], tip: "Futuro simples de andare encurta a raiz: andrò." },
    { pronoun: "Tu", infinitive: "Avere", tense: "Futuro Semplice", mode: "preteritos", correct: "avrai", wrong: ["avevi", "hai avuto", "avresti"], tip: "Futuro simples de avere: avrai." },
    { pronoun: "Lui / Lei", infinitive: "Essere", tense: "Futuro Semplice", mode: "preteritos", correct: "sarà", wrong: ["era", "è stato", "sarebbe"], tip: "Futuro simples de essere: sarà (com acento gráfico)." },
    { pronoun: "Noi", infinitive: "Fare", tense: "Futuro Semplice", mode: "preteritos", correct: "faremo", wrong: ["facevamo", "abbiamo fatto", "farremmo"], tip: "Futuro simples de fare: faremo." },

    // 🟠 NÍVEL B1 — CONDIZIONALE, IMPERATIVO E CONGIUNTIVO PRESENTES
    { pronoun: "Io", infinitive: "Volere", tense: "Condizionale Semplice", mode: "subjuntivo_imperativo", correct: "vorrei", wrong: ["voglio", "volevo", "vorrò"], tip: "Condizionale de cortesia de volere: io vorrei (gostaria)." },
    { pronoun: "Tu", infinitive: "Potere", tense: "Condizionale Semplice", mode: "subjuntivo_imperativo", correct: "potresti", wrong: ["puoi", "potevi", "potrai"], tip: "Tu potresti passarmi il sale?" },
    { pronoun: "Noi", infinitive: "Mangiare", tense: "Condizionale Semplice", mode: "subjuntivo_imperativo", correct: "mangeremmo", wrong: ["mangiamo", "mangeremo", "mangiavamo"], tip: "Condizionale noi em -EREMMO: mangeremmo." },

    { pronoun: "Tu", infinitive: "Parlare", tense: "Imperativo Afirmativo", mode: "subjuntivo_imperativo", correct: "parla", wrong: ["parli", "parlo", "parlate"], tip: "Imperativo tu para verbos em -ARE termina em -a: parla!" },
    { pronoun: "Lei (Formale)", infinitive: "Ascoltare", tense: "Imperativo Afirmativo", mode: "subjuntivo_imperativo", correct: "ascolti", wrong: ["ascolta", "ascolto", "ascoltate"], tip: "Imperativo formale (Lei) troca -a por -i: ascolti!" },
    { pronoun: "Noi", infinitive: "Andare", tense: "Imperativo Afirmativo", mode: "subjuntivo_imperativo", correct: "andiamo", wrong: ["vada", "andate", "vanno"], tip: "Imperativo noi equivale ao presente: andiamo!" },

    { pronoun: "Che io", infinitive: "Credere", tense: "Congiuntivo Presente", mode: "subjuntivo_imperativo", correct: "creda", wrong: ["credo", "credi", "crederò"], tip: "Congiuntivo presente de -ERE/IRE usa a vogal A: creda." },
    { pronoun: "Che tu", infinitive: "Pensare", tense: "Congiuntivo Presente", mode: "subjuntivo_imperativo", correct: "pensi", wrong: ["pensa", "penso", "penserei"], tip: "Congiuntivo presente de -ARE usa a vogal I: pensi." },
    { pronoun: "Che noi", infinitive: "Avere", tense: "Congiuntivo Presente", mode: "subjuntivo_imperativo", correct: "abbiamo", wrong: ["aviamo", "avessimo", "avete"], tip: "Congiuntivo presente noi em avere: abbiamo." },

    // 🔴 NÍVEL B2 — CONGIUNTIVO IMPERFETTO, PERIODO IPOTETICO E REGISTRO FORMAL
    { pronoun: "Se io", infinitive: "Avere", tense: "Congiuntivo Imperfetto", mode: "subjuntivo_imperativo", correct: "avessi", wrong: ["avevo", "avrei", "abbia"], tip: "Subjuntivo imperfeito de avere: se io avessi." },
    { pronoun: "Se tu", infinitive: "Studiare", tense: "Congiuntivo Imperfetto", mode: "subjuntivo_imperativo", correct: "studiassi", wrong: ["studiavi", "studieresti", "studi"], tip: "Se tu studiassi di più, passeresti." },
    { pronoun: "Se lui", infinitive: "Fare", tense: "Congiuntivo Imperfetto", mode: "subjuntivo_imperativo", correct: "facesse", wrong: ["faceva", "farà", "faccia"], tip: "Subjuntivo imperfeito de fare: se lui facesse." },
    { pronoun: "Se io", infinitive: "Sapere", tense: "Periodo Ipotetico II", mode: "subjuntivo_imperativo", correct: "sapessi", wrong: ["sapevo", "saprei", "sappia"], tip: "Se io sapessi la verità, te la direi." },
    { pronoun: "Le (Formale)", infinitive: "Essere", tense: "Registro Formale / Cortesia", mode: "subjuntivo_imperativo", correct: "sarei", wrong: ["sono", "ero", "sarò"], tip: "Le sarei grato se inviasse i documenti." }
];

// 🐉 CHEFÕES IRREGULARES LENDÁRIOS ITALIANOS (BOSS ENCOUNTERS A CADA 10 ACERTOS)
const BANCO_BOSS_IRREGULARES_ITALIANO = [
    { pronoun: "Io", infinitive: "Tradurre", tense: "Passato Remoto", correct: "tradussi", wrong: ["traducevo", "tradurrò", "ho tradotto"], tip: "BOSS! Tradurre forma o passato remoto com a raiz irregular: tradussi." },
    { pronoun: "Io", infinitive: "Proporre", tense: "Passato Remoto", correct: "proposi", wrong: ["propongo", "proporrò", "ho proposto"], tip: "BOSS! Proporre forma o passato remoto em proposi (proposi, proponesti...)." },
    { pronoun: "Io", infinitive: "Rimanere", tense: "Presente Indicativo", correct: "rimango", wrong: ["rimasi", "rimarrò", "rimanga"], tip: "BOSS! Rimanere insere -g- na 1ª pessoa do presente: io rimango." },
    { pronoun: "Io", infinitive: "Rimanere", tense: "Passato Remoto", correct: "rimasi", wrong: ["rimango", "rimanevo", "rimarrò"], tip: "BOSS! Rimanere no passato remoto é io rimasi." },
    { pronoun: "Io", infinitive: "Sapere", tense: "Presente Indicativo", correct: "so", wrong: ["sapevo", "saprò", "sappia"], tip: "BOSS! Sapere tem a 1ª pessoa do presente monossílaba: io so." },
    { pronoun: "Io", infinitive: "Sapere", tense: "Futuro Semplice", correct: "saprò", wrong: ["so", "sapevo", "saprei"], tip: "BOSS! O futuro de sapere encurta a raiz: io saprò." },
    { pronoun: "Io", infinitive: "Stare", tense: "Passato Remoto", correct: "stetti", wrong: ["stavo", "sono stato", "starò"], tip: "BOSS! Stare no passato remoto forma: io stetti." },
    { pronoun: "Io", infinitive: "Dare", tense: "Passato Remoto", correct: "detti", wrong: ["davo", "ho dato", "darò"], tip: "BOSS! Dare no passato remoto forma: io detti (ou diedi)." },
    { pronoun: "Io", infinitive: "Dovere", tense: "Presente Indicativo", correct: "devo", wrong: ["dovevo", "dovrò", "debba"], tip: "BOSS! Dovere na 1ª pessoa do presente pode ser devo ou debbo." },
    { pronoun: "Io", infinitive: "Bere", tense: "Imperfetto", correct: "bevevo", wrong: ["bevo", "ho bevuto", "berrò"], tip: "BOSS! Bere preserva a raiz bever- no imperfetto: io bevevo." }
];

if (typeof window !== 'undefined') {
    window.BANCO_ARCADE_VERBOS_ITALIANO = BANCO_ARCADE_VERBOS_ITALIANO;
    window.BANCO_BOSS_IRREGULARES_ITALIANO = BANCO_BOSS_IRREGULARES_ITALIANO;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BANCO_ARCADE_VERBOS_ITALIANO, BANCO_BOSS_IRREGULARES_ITALIANO };
}
