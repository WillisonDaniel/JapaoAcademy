const DICIONARIO_ITALIANO_DADOS = {
    alphabet: [
        ['A a', 'a', '/a/', 'amico', 'amigo', false], ['B b', 'bi', '/b/', 'banca', 'banco', false],
        ['C c', 'ci', '/k/, /tʃ/', 'casa / cena', 'casa / jantar', false], ['D d', 'di', '/d/', 'donna', 'mulher', false],
        ['E e', 'e', '/e/, /ɛ/', 'estate', 'verão', false], ['F f', 'effe', '/f/', 'fiore', 'flor', false],
        ['G g', 'gi', '/g/, /dʒ/', 'gatto / gelato', 'gato / sorvete', false], ['H h', 'acca', 'muda', 'hotel', 'hotel', false],
        ['I i', 'i', '/i/', 'isola', 'ilha', false], ['L l', 'elle', '/l/', 'libro', 'livro', false],
        ['M m', 'emme', '/m/', 'mare', 'mar', false], ['N n', 'enne', '/n/', 'notte', 'noite', false],
        ['O o', 'o', '/o/, /ɔ/', 'ora', 'hora', false], ['P p', 'pi', '/p/', 'pane', 'pão', false],
        ['Q q', 'cu', '/k/', 'quadro', 'quadro', false], ['R r', 'erre', '/r/', 'Roma', 'Roma', false],
        ['S s', 'esse', '/s/, /z/', 'sole', 'sol', false], ['T t', 'ti', '/t/', 'tavolo', 'mesa', false],
        ['U u', 'u', '/u/', 'uva', 'uva', false], ['V v', 'vi / vu', '/v/', 'vino', 'vinho', false],
        ['Z z', 'zeta', '/ts/, /dz/', 'zaino', 'mochila', false],
        ['J j', 'i lunga', 'estrangeirismo', 'jeans', 'jeans', true], ['K k', 'cappa', 'estrangeirismo', 'kiwi', 'kiwi', true],
        ['W w', 'doppia vu', 'estrangeirismo', 'web', 'web', true], ['X x', 'ics', 'estrangeirismo', 'xilofono', 'xilofone', true],
        ['Y y', 'ipsilon', 'estrangeirismo', 'yogurt', 'iogurte', true]
    ].map(item => ({ letter: item[0], name: item[1], pronunciation: item[2], example: item[3], translation: item[4], foreign: item[5] })),
    vocabulary: [
        ['albero','árvore','Natureza'],['animale','animal','Natureza'],['anno','ano','Tempo'],['arancia','laranja','Alimentação'],
        ['arte','arte','Cultura'],['ascensore','elevador','Casa'],['asciugamano','toalha','Hotel'],['attento','atento','Adjetivos'],
        ['bambino','criança','Pessoas'],['barca','barco','Transporte'],['biblioteca','biblioteca','Cidade'],['bicchiere','copo / taça','Alimentação'],
        ['biglietteria','bilheteria','Viagem'],['borsa','bolsa','Compras'],['bravo','bom / habilidoso','Adjetivos'],['burro','manteiga','Alimentação'],
        ['calcio','futebol','Lazer'],['calzini','meias','Roupas'],['cane','cachorro','Animais'],['canzone','canção','Cultura'],
        ['carne','carne','Alimentação'],['carta','papel / cartão','Cotidiano'],['centro','centro','Cidade'],['chiuso','fechado','Serviços'],
        ['coltello','faca','Alimentação'],['computer','computador','Tecnologia'],['corto','curto','Adjetivos'],['cugino','primo','Família'],
        ['dentista','dentista','Saúde'],['dolce','doce / sobremesa','Alimentação'],['domani','amanhã','Tempo'],['doccia','chuveiro / banho','Casa'],
        ['economico','barato / econômico','Compras'],['edicola','banca de jornal','Cidade'],['entrata','entrada','Serviços'],['facile','fácil','Adjetivos'],
        ['fame','fome','Necessidades'],['fiore','flor','Natureza'],['forchetta','garfo','Alimentação'],['formaggio','queijo','Alimentação'],
        ['frutta','fruta','Alimentação'],['gatto','gato','Animais'],['gelato','sorvete','Alimentação'],['giardino','jardim','Casa'],
        ['giornale','jornal','Cultura'],['giovane','jovem','Pessoas'],['grande','grande','Adjetivos'],['ieri','ontem','Tempo'],
        ['lago','lago','Natureza'],['lento','lento','Adjetivos'],['lontano','longe','Direções'],['luce','luz','Casa'],
        ['macchina','carro / máquina','Transporte'],['mattina','manhã','Tempo'],['mercato','mercado','Compras'],['montagna','montanha','Natureza'],
        ['museo','museu','Cidade'],['nave','navio','Transporte'],['negozio','loja','Compras'],['ombrello','guarda-chuva','Clima'],
        ['pane','pão','Alimentação'],['parco','parque','Cidade'],['pesce','peixe','Alimentação'],['piatto','prato','Alimentação'],
        ['polizia','polícia','Serviços'],['porta','porta','Casa'],['posto','lugar / assento','Viagem'],['presto','cedo / logo','Tempo'],
        ['problema','problema','Cotidiano'],['ristorante','restaurante','Alimentação'],['sale','sal','Alimentação'],['sera','noite / fim da tarde','Tempo'],
        ['sedia','cadeira','Casa'],['sete','sede','Necessidades'],['sole','sol','Clima'],['spesa','compras de mercado','Compras'],
        ['strada','rua / estrada','Cidade'],['supermercato','supermercado','Compras'],['telefono','telefone','Tecnologia'],['tè','chá','Alimentação'],
        ['turista','turista','Viagem'],['uscita','saída','Serviços'],['valigia','mala','Viagem'],['verdura','verdura','Alimentação']
    ].map(item => ({ word: item[0], translation: item[1], category: item[2], level: 'A1' })),
    grammar: [
        ['Essere','Presente: sono, sei, è, siamo, siete, sono.','soggetto + essere + complemento','Sono di Roma.'],
        ['Avere','Presente: ho, hai, ha, abbiamo, avete, hanno.','avere + nome','Ho vent’anni.'],
        ['Articoli definiti','O artigo depende de gênero, número e som inicial.','il/lo/la/l’ — i/gli/le','Lo zaino è nuovo.'],
        ['Articoli indefiniti','Use un, uno, una e un’.','un/uno/una/un’ + nome','Vorrei un’arancia.'],
        ['Plurale','Em geral, -o vira -i, -a vira -e e -e vira -i.','-o→-i; -a→-e; -e→-i','libro/libri'],
        ['Preposizioni articolate','Preposição e artigo se combinam.','a + il = al; di + il = del','Vado al mercato.'],
        ['Negazione','Non vem antes do verbo conjugado.','non + verbo','Non capisco.'],
        ['C’è e ci sono','C’è apresenta singular; ci sono apresenta plural.','c’è + singolare; ci sono + plurale','Ci sono due sedie.'],
        ['Piacere','Piace com singular/infinitivo; piacciono com plural.','mi piace / mi piacciono','Mi piace leggere.'],
        ['Verbi modali','Potere, volere e dovere acompanham um infinitivo.','modale + infinito','Posso entrare?'],
        ['Riflessivi','O pronome reflexivo precede o verbo conjugado.','mi/ti/si/ci/vi/si + verbo','Mi sveglio presto.'],
        ['Partitivo','Del, dello, della, dei, degli e delle indicam quantidade indefinida.','partitivo + nome','Compro del pane.']
    ].map(item => ({ title: item[0], rule: item[1], formula: item[2], example: item[3], level: 'A1', category: 'Gramática A1' }))
};

if (typeof window !== 'undefined') window.DICIONARIO_ITALIANO_DADOS = DICIONARIO_ITALIANO_DADOS;
if (typeof module !== 'undefined' && module.exports) module.exports = { DICIONARIO_ITALIANO_DADOS };
